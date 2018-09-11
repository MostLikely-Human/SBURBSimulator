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
a[c]=function(){a[c]=function(){H.Iq(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vq"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vq"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vq(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={um:function um(a){this.a=a},
rP:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
xl:function(a,b,c,d){var t=new H.p4(a,b,c,[d])
t.f9(a,b,c,d)
return t},
dx:function(a,b,c,d){if(!!J.ao(a).$isr)return new H.fY(a,b,[c,d])
return new H.hw(a,b,[c,d])},
di:function(){return new P.aN("No element")},
Fy:function(){return new P.aN("Too many elements")},
wV:function(){return new P.aN("Too few elements")},
jZ:function(a,b,c,d){if(c-b<=32)H.GL(a,b,c,d)
else H.GK(a,b,c,d)},
GL:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.aT(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cv(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
GK:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.am(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.am(a3+a4,2)
p=q-t
o=q+t
n=J.aT(a2)
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
if(J.aX(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.ao(c)
if(b.S(c,0))continue
if(b.a4(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dC(c)
if(b.az(c,0)){--f
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
if(J.e8(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cv(a5.$2(d,j),0))for(;!0;)if(J.cv(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e8(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.jZ(a2,a3,g-2,a5)
H.jZ(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aX(a5.$2(n.n(a2,g),l),0);)++g
for(;J.aX(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.aX(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.aX(a5.$2(d,j),0))for(;!0;)if(J.aX(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e8(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jZ(a2,g,f,a5)}else H.jZ(a2,g,f,a5)},
l6:function l6(a){this.a=a},
r:function r(){},
ep:function ep(){},
p4:function p4(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eq:function eq(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hw:function hw(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fY:function fY(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jE:function jE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
es:function es(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eH:function eH(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
k9:function k9(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iJ:function iJ(){},
pu:function pu(){},
hV:function hV(){},
ku:function(a,b){var t=a.bu(b)
if(!u.globalState.d.cy)u.globalState.f.bE()
return t},
yt:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ao(s).$isp)throw H.h(P.dE("Arguments to main must be a List: "+H.y(s)))
u.globalState=new H.qO(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wh()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qk(P.ur(null,H.eL),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fx])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.qN()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.Av,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.H6)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a0(null,null,null,r)
p=new H.fn(0,null,!1)
o=new H.fx(s,new H.w(0,null,null,null,null,null,0,[r,H.fn]),q,u.createNewIsolate(),p,new H.dF(H.t7()),new H.dF(H.t7()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
q.h(0,0)
o.dl(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.eP(a,{func:1,args:[,]}))o.bu(new H.t8(t,a))
else if(H.eP(a,{func:1,args:[,,]}))o.bu(new H.t9(t,a))
else o.bu(a)
u.globalState.f.bE()},
H6:function(a){var t=P.hr(["command","print","msg",a])
return new H.dB(!0,P.i7(null,P.C)).aA(t)},
Ax:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.Ay()
return},
Ay:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.h(new P.R("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.h(new P.R('Cannot extract URI from "'+t+'"'))},
Av:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eK(!0,[]).b_(b.data)
s=J.aT(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eK(!0,[]).b_(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eK(!0,[]).b_(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a0(null,null,null,k)
i=new H.fn(0,null,!1)
h=new H.fx(s,new H.w(0,null,null,null,null,null,0,[k,H.fn]),j,u.createNewIsolate(),i,new H.dF(H.t7()),new H.dF(H.t7()),!1,!1,[],P.a0(null,null,null,null),null,null,!1,!0,P.a0(null,null,null,null))
j.h(0,0)
h.dl(0,i)
u.globalState.f.a.aN(0,new H.eL(h,new H.mz(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bE()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fG(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bE()
break
case"close":u.globalState.ch.an(0,$.$get$wi().n(0,a))
a.terminate()
u.globalState.f.bE()
break
case"log":H.Au(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hr(["command","print","msg",t])
k=new H.dB(!0,P.i7(null,P.C)).aA(k)
s.toString
self.postMessage(k)}else P.fE(s.n(t,"msg"))
break
case"error":throw H.h(s.n(t,"msg"))}},
Au:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hr(["command","log","msg",a])
r=new H.dB(!0,P.i7(null,P.C)).aA(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bO(q)
t=H.cu(q)
s=P.lD(t)
throw H.h(s)}},
Aw:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.x8=$.x8+("_"+s)
$.x9=$.x9+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fG(f,["spawned",new H.fy(s,r),q,t.r])
r=new H.mA(a,b,c,d,t)
if(e===!0){t.e3(q,q)
u.globalState.f.a.aN(0,new H.eL(t,r,"start isolate"))}else r.$0()},
GR:function(a,b){var t=new H.pm(!0,!1,null)
t.fa(a,b)
return t},
Hp:function(a){return new H.eK(!0,[]).b_(new H.dB(!1,P.i7(null,P.C)).aA(a))},
t8:function t8(a,b){this.a=a
this.b=b},
t9:function t9(a,b){this.a=a
this.b=b},
qO:function qO(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
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
fx:function fx(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
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
qJ:function qJ(a,b){this.a=a
this.b=b},
qk:function qk(a,b){this.a=a
this.b=b},
ql:function ql(a){this.a=a},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
qN:function qN(){},
mz:function mz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q5:function q5(){},
fy:function fy(b,a){this.b=b
this.a=a},
qQ:function qQ(a,b){this.a=a
this.b=b},
ic:function ic(b,c,a){this.b=b
this.c=c
this.a=a},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
pm:function pm(a,b,c){this.a=a
this.b=b
this.c=c},
pn:function pn(a,b){this.a=a
this.b=b},
po:function po(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
dB:function dB(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
zx:function(){throw H.h(new P.R("Cannot modify unmodifiable Map"))},
HZ:function(a){return u.types[a]},
ym:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ao(a).$isaD},
y:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cw(a)
if(typeof t!=="string")throw H.h(H.bv(a))
return t},
Gf:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oc(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eu:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uL:function(a,b){if(b==null)throw H.h(new P.bL(a,null,null))
return b.$1(a)},
ev:function(a,b,c){var t,s,r,q,p,o
H.rD(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uL(a,c)
if(3>=t.length)return H.u(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uL(a,c)}if(b<2||b>36)throw H.h(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a6(q,o)|32)>r)return H.uL(a,c)}return parseInt(a,b)},
x6:function(a,b){return b.$1(a)},
xa:function(a,b){var t,s
H.rD(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.x6(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.te(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.x6(a,b)}return t},
jT:function(a){var t,s,r,q,p,o,n,m
t=J.ao(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.ao(a).$iseF){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a6(q,0)===36)q=C.c.aa(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.t_(H.ky(a),0,null),u.mangledGlobalNames)},
o6:function(a){return"Instance of '"+H.jT(a)+"'"},
FV:function(){if(!!self.location)return self.location.href
return},
x5:function(a){var t,s,r,q,p
t=J.c_(a)
if(typeof t!=="number")return t.eM()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
G_:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bV)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.h(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aY(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.h(H.bv(q))}return H.x5(t)},
xc:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bV)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.h(H.bv(q))
if(q<0)throw H.h(H.bv(q))
if(q>65535)return H.G_(a)}return H.x5(a)},
G0:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eM()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hH:function(a){var t
if(typeof a!=="number")return H.a7(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aY(t,10))>>>0,56320|t&1023)}}throw H.h(P.bE(a,0,1114111,null,null))},
d0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
x7:function(a){return a.b?H.d0(a).getUTCFullYear()+0:H.d0(a).getFullYear()+0},
uN:function(a){return a.b?H.d0(a).getUTCMonth()+1:H.d0(a).getMonth()+1},
uM:function(a){return a.b?H.d0(a).getUTCDate()+0:H.d0(a).getDate()+0},
FW:function(a){return a.b?H.d0(a).getUTCHours()+0:H.d0(a).getHours()+0},
FY:function(a){return a.b?H.d0(a).getUTCMinutes()+0:H.d0(a).getMinutes()+0},
FZ:function(a){return a.b?H.d0(a).getUTCSeconds()+0:H.d0(a).getSeconds()+0},
FX:function(a){return a.b?H.d0(a).getUTCMilliseconds()+0:H.d0(a).getMilliseconds()+0},
uO:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.h(H.bv(a))
return a[b]},
xb:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.h(H.bv(a))
a[b]=c},
a7:function(a){throw H.h(H.bv(a))},
u:function(a,b){if(a==null)J.c_(a)
throw H.h(H.c5(a,b))},
c5:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"index",null)
t=J.c_(a)
if(!(b<0)){if(typeof t!=="number")return H.a7(t)
s=b>=t}else s=!0
if(s)return P.bz(b,a,"index",null,t)
return P.jV(b,"index",null)},
HO:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cX(!0,a,"start",null)
if(a<0||a>c)return new P.ez(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"end",null)
if(b<a||b>c)return new P.ez(a,c,!0,b,"end","Invalid value")}return new P.cX(!0,b,"end",null)},
bv:function(a){return new P.cX(!0,a,null,null)},
kw:function(a){if(typeof a!=="number")throw H.h(H.bv(a))
return a},
vp:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(H.bv(a))
return a},
rD:function(a){if(typeof a!=="string")throw H.h(H.bv(a))
return a},
h:function(a){var t
if(a==null)a=new P.fj()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.yv})
t.name=""}else t.toString=H.yv
return t},
yv:function(){return J.cw(this.dartException)},
aZ:function(a){throw H.h(a)},
bV:function(a){throw H.h(new P.bJ(a))},
dP:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ps:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xt:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
uo:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mT(a,s,t?null:b.receiver)},
bO:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ta(a)
if(a==null)return
if(a instanceof H.h6)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aY(r,16)&8191)===10)switch(q){case 438:return t.$1(H.uo(H.y(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return t.$1(new H.jL(p,null))}}if(a instanceof TypeError){o=$.$get$xn()
n=$.$get$xo()
m=$.$get$xp()
l=$.$get$xq()
k=$.$get$xu()
j=$.$get$xv()
i=$.$get$xs()
$.$get$xr()
h=$.$get$xx()
g=$.$get$xw()
f=o.aK(s)
if(f!=null)return t.$1(H.uo(s,f))
else{f=n.aK(s)
if(f!=null){f.method="call"
return t.$1(H.uo(s,f))}else{f=m.aK(s)
if(f==null){f=l.aK(s)
if(f==null){f=k.aK(s)
if(f==null){f=j.aK(s)
if(f==null){f=i.aK(s)
if(f==null){f=l.aK(s)
if(f==null){f=h.aK(s)
if(f==null){f=g.aK(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jL(s,f==null?null:f.method))}}return t.$1(new H.pt(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k2()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cX(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k2()
return a},
cu:function(a){var t
if(a instanceof H.h6)return a.b
if(a==null)return new H.kp(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kp(a,null)},
Id:function(a){if(a==null||typeof a!='object')return J.dD(a)
else return H.eu(a)},
yg:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
I8:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ku(b,new H.rV(a))
case 1:return H.ku(b,new H.rW(a,d))
case 2:return H.ku(b,new H.rX(a,d,e))
case 3:return H.ku(b,new H.rY(a,d,e,f))
case 4:return H.ku(b,new H.rZ(a,d,e,f,g))}throw H.h(P.lD("Unsupported number of arguments for wrapped closure"))},
dp:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.I8)
a.$identity=t
return t},
zt:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ao(c).$isp){t.$reflectionInfo=c
r=H.Gf(t).r}else r=c
q=d?Object.create(new H.oE().constructor.prototype):Object.create(new H.fN(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dG
$.dG=J.e7(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vP(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.HZ,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vN:H.ti
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.h("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vP(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zq:function(a,b,c,d){var t=H.ti
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vP:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.zs(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zq(s,!q,t,b)
if(s===0){q=$.dG
$.dG=J.e7(q,1)
o="self"+H.y(q)
q="return function(){var "+o+" = this."
p=$.fO
if(p==null){p=H.l_("self")
$.fO=p}return new Function(q+H.y(p)+";return "+o+"."+H.y(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dG
$.dG=J.e7(q,1)
n+=H.y(q)
q="return function("+n+"){return this."
p=$.fO
if(p==null){p=H.l_("self")
$.fO=p}return new Function(q+H.y(p)+"."+H.y(t)+"("+n+");}")()},
zr:function(a,b,c,d){var t,s
t=H.ti
s=H.vN
switch(b?-1:a){case 0:throw H.h(new H.oh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
zs:function(a,b){var t,s,r,q,p,o,n,m
t=H.zp()
s=$.vM
if(s==null){s=H.l_("receiver")
$.vM=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.zr(q,!o,r,b)
if(q===1){s="return function(){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+");"
o=$.dG
$.dG=J.e7(o,1)
return new Function(s+H.y(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.y(t)+"."+H.y(r)+"(this."+H.y(s)+", "+m+");"
o=$.dG
$.dG=J.e7(o,1)
return new Function(s+H.y(o)+"}")()},
vq:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ao(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.zt(a,b,t,!!d,e,f)},
ti:function(a){return a.a},
vN:function(a){return a.c},
zp:function(){var t=$.fO
if(t==null){t=H.l_("self")
$.fO=t}return t},
l_:function(a){var t,s,r,q,p
t=new H.fN("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Ig:function(a,b){var t=J.aT(b)
throw H.h(H.tl(H.jT(a),t.I(b,3,t.gm(b))))},
kA:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.ao(a)[b]
else t=!0
if(t)return a
H.Ig(a,b)},
vr:function(a){var t=J.ao(a)
return"$S" in t?t.$S():null},
eP:function(a,b){var t
if(a==null)return!1
t=H.vr(a)
return t==null?!1:H.vu(t,b)},
HX:function(a,b){var t,s
if(a==null)return a
if(H.eP(a,b))return a
t=H.dd(b,null)
s=H.vr(a)
throw H.h(H.tl(s!=null?H.dd(s,null):H.jT(a),t))},
tl:function(a,b){return new H.l4("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Iq:function(a){throw H.h(new P.lm(a))},
t7:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yi:function(a){return u.getIsolateTag(a)},
bZ:function(a){return new H.dQ(a,null)},
a:function(a,b){a.$ti=b
return a},
ky:function(a){if(a==null)return
return a.$ti},
yj:function(a,b){return H.vw(a["$as"+H.y(b)],H.ky(a))},
ay:function(a,b,c){var t=H.yj(a,b)
return t==null?null:t[c]},
P:function(a,b){var t=H.ky(a)
return t==null?null:t[b]},
dd:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.t_(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.y(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dd(t,b)
return H.Hu(a,b)}return"unknown-reified-type"},
Hu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dd(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dd(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dd(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.HW(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dd(l[j],b)+(" "+H.y(j))}q+="}"}return"("+q+") => "+t},
t_:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.cc("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dd(o,c)}return q?"":"<"+t.A(0)+">"},
kz:function(a){var t,s
if(a instanceof H.eW){t=H.vr(a)
if(t!=null)return H.dd(t,null)}s=J.ao(a).constructor.builtin$cls
if(a==null)return s
return s+H.t_(a.$ti,0,null)},
vw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dT:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ky(a)
s=J.ao(a)
if(s[b]==null)return!1
return H.y9(H.vw(s[d],t),c)},
Io:function(a,b,c,d){if(a==null)return a
if(H.dT(a,b,c,d))return a
throw H.h(H.tl(H.jT(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.t_(c,0,null),u.mangledGlobalNames)))},
y9:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d3(a[s],b[s]))return!1
return!0},
eN:function(a,b,c){return a.apply(b,H.yj(b,c))},
HK:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ab"||b.builtin$cls==="cQ"
if(b==null)return!0
t=H.ky(a)
a=J.ao(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vu(r.apply(a,null),b)}return H.d3(s,b)},
d3:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cQ")return!0
if('func' in b)return H.vu(a,b)
if('func' in a)return b.builtin$cls==="tL"||b.builtin$cls==="ab"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dd(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.y9(H.vw(o,t),r)},
y8:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d3(t,p)||H.d3(p,t)))return!1}return!0},
HB:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d3(p,o)||H.d3(o,p)))return!1}return!0},
vu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d3(t,s)||H.d3(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.y8(r,q,!1))return!1
if(!H.y8(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d3(i,h)||H.d3(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d3(i,h)||H.d3(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d3(i,h)||H.d3(h,i)))return!1}}return H.HB(a.named,b.named)},
IH:function(a){var t=$.vs
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
IG:function(a){return H.eu(a)},
IF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
I9:function(a){var t,s,r,q,p,o
t=$.vs.$1(a)
s=$.rK[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rU[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.y7.$2(a,t)
if(t!=null){s=$.rK[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rU[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.vv(r)
$.rK[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rU[t]=r
return r}if(p==="-"){o=H.vv(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yp(a,r)
if(p==="*")throw H.h(new P.eE(t))
if(u.leafTags[t]===true){o=H.vv(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yp(a,r)},
yp:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.t3(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
vv:function(a){return J.t3(a,!1,null,!!a.$isaD)},
Ib:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.t3(t,!1,null,!!t.$isaD)
else return J.t3(t,c,null,null)},
I6:function(){if(!0===$.vt)return
$.vt=!0
H.I7()},
I7:function(){var t,s,r,q,p,o,n,m
$.rK=Object.create(null)
$.rU=Object.create(null)
H.I5()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yq.$1(p)
if(o!=null){n=H.Ib(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
I5:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fC(C.U,H.fC(C.V,H.fC(C.x,H.fC(C.x,H.fC(C.X,H.fC(C.W,H.fC(C.Y(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vs=new H.rR(p)
$.y7=new H.rS(o)
$.yq=new H.rT(n)},
fC:function(a,b){return a(b)||b},
uj:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.h(new P.bL("Illegal RegExp pattern ("+String(q)+")",a,null))},
Im:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
yu:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hn){q=b.gdM()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aZ(H.bv(b))
throw H.h("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Hz:function(a){return a},
In:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aQ(0,a),t=new H.i_(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.y(H.xZ().$1(C.c.I(a,s,o)))+H.y(c.$1(q))
s=o+p[0].length}t=r+H.y(H.xZ().$1(C.c.aa(a,s)))
return t.charCodeAt(0)==0?t:t},
l9:function l9(){},
la:function la(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
oc:function oc(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pr:function pr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jL:function jL(a,b){this.a=a
this.b=b},
mT:function mT(a,b,c){this.a=a
this.b=b
this.c=c},
pt:function pt(a){this.a=a},
h6:function h6(a,b){this.a=a
this.b=b},
ta:function ta(a){this.a=a},
kp:function kp(a,b){this.a=a
this.b=b},
rV:function rV(a){this.a=a},
rW:function rW(a,b){this.a=a
this.b=b},
rX:function rX(a,b,c){this.a=a
this.b=b
this.c=c},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rZ:function rZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eW:function eW(){},
pa:function pa(){},
oE:function oE(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l4:function l4(a){this.a=a},
oh:function oh(a){this.a=a},
dQ:function dQ(a,b){this.a=a
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
mS:function mS(a){this.a=a},
mR:function mR(a){this.a=a},
n2:function n2(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n3:function n3(a,$ti){this.a=a
this.$ti=$ti},
n4:function n4(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rR:function rR(a){this.a=a},
rS:function rS(a){this.a=a},
rT:function rT(a){this.a=a},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(a,b){this.a=a
this.b=b},
q_:function q_(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a,b,c){this.a=a
this.b=b
this.c=c},
r9:function r9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.dE("Invalid length "+H.y(a)))
return a},
xW:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dE("Invalid view offsetInBytes "+H.y(b)))},
xY:function(a){return a},
FT:function(a){return new Int8Array(H.xY(a))},
cP:function(a,b,c){H.xW(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Ho:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.az()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.h(H.HO(a,b,c))
return b},
fh:function fh(){},
et:function et(){},
nv:function nv(){},
jH:function jH(){},
hA:function hA(){},
hC:function hC(){},
hE:function hE(){},
hB:function hB(){},
hD:function hD(){},
hF:function hF(){},
nw:function nw(){},
nx:function nx(){},
ny:function ny(){},
nz:function nz(){},
nA:function nA(){},
nB:function nB(){},
nC:function nC(){},
jI:function jI(){},
fi:function fi(){},
HW:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
If:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ao:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jB.prototype
return J.jA.prototype}if(typeof a=="string")return J.en.prototype
if(a==null)return J.mP.prototype
if(typeof a=="boolean")return J.mO.prototype
if(a.constructor==Array)return J.em.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ab)return a
return J.rN(a)},
t3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rN:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vt==null){H.I6()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.h(new P.eE("Return interceptor for "+H.y(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$un()]
if(p!=null)return p
p=H.I9(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.J
if(s===Object.prototype)return C.J
if(typeof q=="function"){Object.defineProperty(q,$.$get$un(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
wW:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Fz:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a6(a,b)
if(s!==32&&s!==13&&!J.wW(s))break;++b}return b},
ui:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a_(a,t)
if(s!==32&&s!==13&&!J.wW(s))break}return b},
aT:function(a){if(typeof a=="string")return J.en.prototype
if(a==null)return a
if(a.constructor==Array)return J.em.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ab)return a
return J.rN(a)},
cV:function(a){if(a==null)return a
if(a.constructor==Array)return J.em.prototype
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ab)return a
return J.rN(a)},
dC:function(a){if(typeof a=="number")return J.fg.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eF.prototype
return a},
kx:function(a){if(typeof a=="number")return J.fg.prototype
if(typeof a=="string")return J.en.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eF.prototype
return a},
cB:function(a){if(typeof a=="string")return J.en.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.eF.prototype
return a},
aM:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.eo.prototype
return a}if(a instanceof P.ab)return a
return J.rN(a)},
e7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kx(a).W(a,b)},
aX:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ao(a).S(a,b)},
vx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dC(a).as(a,b)},
cv:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dC(a).az(a,b)},
e8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dC(a).a4(a,b)},
vy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kx(a).ar(a,b)},
ii:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ym(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).n(a,b)},
kC:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ym(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cV(a).i(a,b,c)},
yw:function(a,b){return J.cV(a).h(a,b)},
yx:function(a,b,c,d){return J.aM(a).h8(a,b,c,d)},
yy:function(a,b){return J.cB(a).aQ(a,b)},
dU:function(a,b){return J.aM(a).hb(a,b)},
vz:function(a){return J.aM(a).hd(a)},
yz:function(a,b,c){return J.dC(a).ae(a,b,c)},
yA:function(a,b){return J.kx(a).aC(a,b)},
yB:function(a,b){return J.aM(a).aD(a,b)},
yC:function(a,b){return J.aT(a).X(a,b)},
kD:function(a,b,c){return J.aT(a).e9(a,b,c)},
yD:function(a,b){return J.aM(a).Y(a,b)},
yE:function(a,b){return J.aM(a).ho(a,b)},
vA:function(a,b){return J.cV(a).T(a,b)},
yF:function(a,b,c,d){return J.cV(a).bv(a,b,c,d)},
kE:function(a){return J.dC(a).aj(a)},
yG:function(a,b){return J.cV(a).a1(a,b)},
vB:function(a){return J.aM(a).ge5(a)},
vC:function(a){return J.aM(a).ge7(a)},
yH:function(a){return J.aM(a).ghn(a)},
yI:function(a){return J.aM(a).gbt(a)},
fF:function(a){return J.aM(a).gaq(a)},
yJ:function(a){return J.aM(a).gcN(a)},
yK:function(a){return J.cV(a).gG(a)},
dD:function(a){return J.ao(a).ga7(a)},
tb:function(a){return J.aT(a).gU(a)},
vD:function(a){return J.aM(a).gZ(a)},
cW:function(a){return J.cV(a).gV(a)},
c_:function(a){return J.aT(a).gm(a)},
yL:function(a){return J.aM(a).ghV(a)},
yM:function(a){return J.aM(a).gcW(a)},
yN:function(a){return J.aM(a).gie(a)},
yO:function(a){return J.aM(a).gig(a)},
vE:function(a){return J.ao(a).gad(a)},
tc:function(a){return J.aM(a).gaB(a)},
yP:function(a){return J.aM(a).gij(a)},
yQ:function(a){return J.aM(a).gaH(a)},
yR:function(a,b){return J.aM(a).bI(a,b)},
yS:function(a,b){return J.aT(a).bj(a,b)},
vF:function(a,b,c,d,e){return J.aM(a).em(a,b,c,d,e)},
vG:function(a,b){return J.cV(a).ay(a,b)},
yT:function(a,b,c){return J.cB(a).eq(a,b,c)},
vH:function(a,b){return J.aM(a).i_(a,b)},
yU:function(a){return J.cV(a).i8(a)},
yV:function(a,b,c,d){return J.aM(a).ia(a,b,c,d)},
kF:function(a,b,c){return J.cB(a).d_(a,b,c)},
yW:function(a,b,c){return J.cB(a).ic(a,b,c)},
fG:function(a,b){return J.aM(a).b9(a,b)},
kG:function(a,b){return J.aM(a).sbt(a,b)},
yX:function(a,b){return J.aM(a).sa8(a,b)},
yY:function(a,b){return J.aM(a).sah(a,b)},
yZ:function(a,b){return J.aM(a).d7(a,b)},
z_:function(a,b){return J.cV(a).da(a,b)},
e9:function(a,b){return J.cB(a).eX(a,b)},
z0:function(a,b){return J.cB(a).aa(a,b)},
vI:function(a){return J.dC(a).l(a)},
z1:function(a){return J.cV(a).ao(a)},
td:function(a){return J.cB(a).eC(a)},
z2:function(a,b){return J.dC(a).bF(a,b)},
cw:function(a){return J.ao(a).A(a)},
vJ:function(a){return J.cB(a).il(a)},
te:function(a){return J.cB(a).bk(a)},
z3:function(a){return J.cB(a).eE(a)},
f:function f(){},
mO:function mO(){},
mP:function mP(){},
ho:function ho(){},
o1:function o1(){},
eF:function eF(){},
eo:function eo(){},
em:function em($ti){this.$ti=$ti},
ul:function ul($ti){this.$ti=$ti},
ij:function ij(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fg:function fg(){},
jB:function jB(){},
jA:function jA(){},
en:function en(){}},P={
GW:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.HC()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dp(new P.q1(t),1)).observe(s,{childList:true})
return new P.q0(t,s,r)}else if(self.setImmediate!=null)return P.HD()
return P.HE()},
GX:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dp(new P.q2(a),0))},
GY:function(a){++u.globalState.f.b
self.setImmediate(H.dp(new P.q3(a),0))},
GZ:function(a){P.v7(C.o,a)},
bp:function(a,b){P.xU(null,a)
return b.ghC()},
cd:function(a,b){P.xU(a,b)},
bo:function(a,b){J.yB(b,a)},
bn:function(a,b){b.cI(H.bO(a),H.cu(a))},
xU:function(a,b){var t,s,r,q
t=new P.rr(b)
s=new P.rs(b)
r=J.ao(a)
if(!!r.$isbm)a.cB(t,s)
else if(!!r.$iscm)a.c5(t,s)
else{q=new P.bm(0,$.an,null,[null])
q.a=4
q.c=a
q.cB(t,null)}},
bq:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.an.toString
return new P.rC(t)},
y_:function(a,b){if(H.eP(a,{func:1,args:[P.cQ,P.cQ]})){b.toString
return a}else{b.toString
return a}},
Ab:function(a,b){var t=new P.bm(0,$.an,null,[b])
P.xm(C.o,new P.rG(a,t))
return t},
wf:function(a,b,c){var t
if(a==null)a=new P.fj()
t=$.an
if(t!==C.e)t.toString
t=new P.bm(0,t,null,[c])
t.dn(a,b)
return t},
Ac:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bm(0,$.an,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.me(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bV)(a),++l){q=a[l]
p=t.b
q.c5(new P.md(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bm(0,$.an,null,[null])
m.dm(C.C)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bO(j)
n=H.cu(j)
if(t.b===0||!1)return P.wf(o,n,null)
else{t.c=o
t.d=n}}return s},
bj:function(a){return new P.kr(new P.bm(0,$.an,null,[a]),[a])},
xX:function(a,b,c){$.an.toString
a.al(b,c)},
H1:function(a,b){var t=new P.bm(0,$.an,null,[b])
t.a=4
t.c=a
return t},
xJ:function(a,b){var t,s,r
b.a=1
try{a.c5(new P.qu(b),new P.qv(b))}catch(r){t=H.bO(r)
s=H.cu(r)
P.yr(new P.qw(b,t,s))}},
qt:function(a,b){var t,s,r
for(;a.gfN();)a=a.c
t=a.gcr()
s=b.c
if(t){b.c=null
r=b.bS(s)
b.a=a.a
b.c=a.c
P.fw(b,r)}else{b.a=2
b.c=a
a.dQ(s)}},
fw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fF(p)
n=p.gaM()
s.toString
P.kv(null,null,s,o,n)}return}for(;b.gcu()!=null;b=m){m=b.a
b.a=null
P.fw(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.geg()||b.gef()){k=b.gh6()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fF(p)
n=p.gaM()
s.toString
P.kv(null,null,s,o,n)
return}j=$.an
if(j==null?k!=null:j!==k)$.an=k
else j=null
if(b.gef())new P.qB(t,r,q,b).$0()
else if(s){if(b.geg())new P.qA(r,b,l).$0()}else if(b.ghJ())new P.qz(t,r,b).$0()
if(j!=null)$.an=j
s=r.b
if(!!J.ao(s).$iscm){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bS(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qt(s,i)
return}}i=b.b
b=i.bR()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Hw:function(){var t,s
for(;t=$.fA,t!=null;){$.ie=null
s=t.b
$.fA=s
if(s==null)$.id=null
t.a.$0()}},
Hy:function(){$.vl=!0
try{P.Hw()}finally{$.ie=null
$.vl=!1
if($.fA!=null)$.$get$vg().$1(P.ya())}},
y6:function(a){var t=new P.ke(a,null)
if($.fA==null){$.id=t
$.fA=t
if(!$.vl)$.$get$vg().$1(P.ya())}else{$.id.b=t
$.id=t}},
Hx:function(a){var t,s,r
t=$.fA
if(t==null){P.y6(a)
$.ie=$.id
return}s=new P.ke(a,null)
r=$.ie
if(r==null){s.b=t
$.ie=s
$.fA=s}else{s.b=r.b
r.b=s
$.ie=s
if(s.b==null)$.id=s}},
yr:function(a){var t=$.an
if(C.e===t){P.fB(null,null,C.e,a)
return}t.toString
P.fB(null,null,t,t.cG(a,!0))},
IB:function(a,b){return new P.r7(null,a,!1,[b])},
y3:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bO(o)
s=H.cu(o)
$.an.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fF(r)
q=n
p=r.gaM()
c.$2(q,p)}}},
Hn:function(a,b,c,d){var t=a.bY(0)
if(!!J.ao(t).$iscm&&t!==$.$get$hf())t.c8(new P.ru(b,c,d))
else b.al(c,d)},
xV:function(a,b){return new P.rt(a,b)},
vk:function(a,b,c){var t=a.bY(0)
if(!!J.ao(t).$iscm&&t!==$.$get$hf())t.c8(new P.rv(b,c))
else b.aJ(c)},
H0:function(a,b,c,d,e,f,g){var t,s
t=$.an
s=e?1:0
s=new P.i4(a,null,null,null,null,t,s,null,null,[f,g])
s.fd(b,c,d,e,g)
s.fg(a,b,c,d,e,f,g)
return s},
Hm:function(a,b,c){$.an.toString
a.bK(b,c)},
xm:function(a,b){var t=$.an
if(t===C.e){t.toString
return P.v7(a,b)}return P.v7(a,t.cG(b,!0))},
v7:function(a,b){var t=C.a.am(a.a,1000)
return H.GR(t<0?0:t,b)},
kv:function(a,b,c,d,e){var t={}
t.a=d
P.Hx(new P.rB(t,e))},
y0:function(a,b,c,d){var t,s
s=$.an
if(s===c)return d.$0()
$.an=c
t=s
try{s=d.$0()
return s}finally{$.an=t}},
y2:function(a,b,c,d,e){var t,s
s=$.an
if(s===c)return d.$1(e)
$.an=c
t=s
try{s=d.$1(e)
return s}finally{$.an=t}},
y1:function(a,b,c,d,e,f){var t,s
s=$.an
if(s===c)return d.$2(e,f)
$.an=c
t=s
try{s=d.$2(e,f)
return s}finally{$.an=t}},
fB:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cG(d,!(!t||!1))
P.y6(d)},
q1:function q1(a){this.a=a},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
q2:function q2(a){this.a=a},
q3:function q3(a){this.a=a},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rC:function rC(a){this.a=a},
cm:function cm(){},
rG:function rG(a,b){this.a=a
this.b=b},
me:function me(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
md:function md(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eX:function eX(){},
kf:function kf(){},
dS:function dS(a,$ti){this.a=a
this.$ti=$ti},
kr:function kr(a,$ti){this.a=a
this.$ti=$ti},
kk:function kk(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bm:function bm(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qq:function qq(a,b){this.a=a
this.b=b},
qy:function qy(a,b){this.a=a
this.b=b},
qu:function qu(a){this.a=a},
qv:function qv(a){this.a=a},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a,b){this.a=a
this.b=b},
qx:function qx(a,b){this.a=a
this.b=b},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qB:function qB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qC:function qC(a){this.a=a},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b){this.a=a
this.b=b},
dl:function dl(){},
oK:function oK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oI:function oI(a,b){this.a=a
this.b=b},
oJ:function oJ(a,b){this.a=a
this.b=b},
oL:function oL(a){this.a=a},
oQ:function oQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oO:function oO(a,b){this.a=a
this.b=b},
oP:function oP(){},
oR:function oR(a){this.a=a},
oU:function oU(a){this.a=a},
oV:function oV(a,b){this.a=a
this.b=b},
oS:function oS(a,b){this.a=a
this.b=b},
oT:function oT(a){this.a=a},
oW:function oW(a,b){this.a=a
this.b=b},
oX:function oX(a,b){this.a=a
this.b=b},
oM:function oM(a,b,c){this.a=a
this.b=b
this.c=c},
oN:function oN(a){this.a=a},
oH:function oH(){},
dm:function dm(){},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
q6:function q6(a){this.a=a},
ki:function ki(){},
qe:function qe(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qg:function qg(b,c,a){this.b=b
this.c=c
this.a=a},
qf:function qf(){},
qR:function qR(){},
qS:function qS(a,b){this.a=a
this.b=b},
r6:function r6(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
r7:function r7(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ru:function ru(a,b,c){this.a=a
this.b=b
this.c=c},
rt:function rt(a,b){this.a=a
this.b=b},
rv:function rv(a,b){this.a=a
this.b=b},
i3:function i3(){},
i4:function i4(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qP:function qP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eQ:function eQ(a,b){this.a=a
this.b=b},
rq:function rq(){},
rB:function rB(a,b){this.a=a
this.b=b},
qV:function qV(){},
qW:function qW(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
H2:function(a,b){var t=a[b]
return t===a?null:t},
vi:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vh:function(){var t=Object.create(null)
P.vi(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wX:function(a,b,c){return H.yg(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
cG:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
jC:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
hr:function(a){return H.yg(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
i7:function(a,b){return new P.kn(0,null,null,null,null,null,0,[a,b])},
H5:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qE(0,null,null,null,null,[d,e])},
uf:function(a,b,c){var t,s
if(P.vm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ig()
s.push(a)
try{P.Hv(a,t)}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=P.xk(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jy:function(a,b,c){var t,s,r
if(P.vm(a))return b+"..."+c
t=new P.cc(b)
s=$.$get$ig()
s.push(a)
try{r=t
r.N=P.xk(r.gN(),a,", ")}finally{if(0>=s.length)return H.u(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
vm:function(a){var t,s
for(t=0;s=$.$get$ig(),t<s.length;++t)if(a===s[t])return!0
return!1},
Hv:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cW(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.y(t.gO())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.u(b,-1)
p=b.pop()
if(0>=b.length)return H.u(b,-1)
o=b.pop()}else{n=t.gO();++r
if(!t.F()){if(r<=4){b.push(H.y(n))
return}p=H.y(n)
if(0>=b.length)return H.u(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gO();++r
for(;t.F();n=m,m=l){l=t.gO();++r
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
a0:function(a,b,c,d){return new P.km(0,null,null,null,null,null,0,[d])},
jD:function(a,b){var t,s
t=P.a0(null,null,null,b)
for(s=J.cW(a);s.F();)t.h(0,s.gO())
return t},
x1:function(a){var t,s,r
t={}
if(P.vm(a))return"{...}"
s=new P.cc("")
try{$.$get$ig().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a1(0,new P.nj(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$ig()
if(0>=t.length)return H.u(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
ur:function(a,b){var t=new P.n5(null,0,0,0,[b])
t.f8(a,b)
return t},
qE:function qE(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qH:function qH(a){this.a=a},
qF:function qF(a,$ti){this.a=a
this.$ti=$ti},
qG:function qG(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kn:function kn(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
km:function km(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qI:function qI(){},
ff:function ff(){},
hm:function hm(){},
hs:function hs(){},
fl:function fl(){},
aS:function aS(){},
rh:function rh(){},
ni:function ni(){},
hW:function hW(a,$ti){this.a=a
this.$ti=$ti},
nj:function nj(a,b){this.a=a
this.b=b},
n5:function n5(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qM:function qM(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
os:function os(){},
or:function or(){},
vL:function(a,b,c,d,e,f){if(C.d.bJ(f,4)!==0)throw H.h(new P.bL("Invalid base64 padding, padded length must be multiple of four, is "+H.y(f),a,c))
if(d+e!==f)throw H.h(new P.bL("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.h(new P.bL("Invalid base64 padding, more than two '=' characters",a,b))},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
fS:function fS(){},
fU:function fU(){},
lx:function lx(){},
pD:function pD(a){this.a=a},
pE:function pE(a){this.a=a},
rj:function rj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rl:function rl(a){this.a=a},
rk:function rk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
GP:function(a,b,c){var t,s,r,q
if(b<0)throw H.h(P.bE(b,0,J.c_(a),null,null))
t=c==null
if(!t&&c<b)throw H.h(P.bE(c,b,J.c_(a),null,null))
s=J.cW(a)
for(r=0;r<b;++r)if(!s.F())throw H.h(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.F();)q.push(s.gO())
else for(r=b;r<c;++r){if(!s.F())throw H.h(P.bE(c,b,r,null,null))
q.push(s.gO())}return H.xc(q)},
xk:function(a,b,c){var t=J.cW(b)
if(!t.F())return a
if(c.length===0){do a+=H.y(t.gO())
while(t.F())}else{a+=H.y(t.gO())
for(;t.F();)a=a+c+H.y(t.gO())}return a},
zw:function(a,b){return J.yA(a,b)},
zz:function(a,b){var t=new P.dX(a,b)
t.di(a,b)
return t},
zA:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.y(t)
if(t>=10)return s+"00"+H.y(t)
return s+"000"+H.y(t)},
zB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ir:function(a){if(a>=10)return""+a
return"0"+a},
w2:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.zU(a)},
zU:function(a){var t=J.ao(a)
if(!!t.$iseW)return t.A(a)
return H.o6(a)},
dE:function(a){return new P.cX(!1,null,null,a)},
dV:function(a,b,c){return new P.cX(!0,a,b,c)},
z5:function(a){return new P.cX(!1,null,a,"Must not be null")},
xg:function(a){return new P.ez(null,null,!1,null,null,a)},
jV:function(a,b,c){return new P.ez(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.ez(b,c,!0,a,d,"Invalid value")},
dk:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a7(a)
if(!(0>a)){if(typeof c!=="number")return H.a7(c)
t=a>c}else t=!0
if(t)throw H.h(P.bE(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a7(b)
if(!(a>b)){if(typeof c!=="number")return H.a7(c)
t=b>c}else t=!0
if(t)throw H.h(P.bE(b,a,c,"end",f))
return b}return c},
bz:function(a,b,c,d,e){var t=e!=null?e:J.c_(b)
return new P.mw(b,t,!0,a,c,"Index out of range")},
lD:function(a){return new P.qp(a)},
dj:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cW(a);s.F();)t.push(s.gO())
if(b)return t
t.fixed$length=Array
return t},
FA:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.dj(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fE:function(a){H.If(H.y(a))},
d9:function(a,b,c){return new H.hn(a,H.uj(a,!1,!0,!1),null,null)},
p1:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dk(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a4()
s=c<t}else s=!0
return H.xc(s?C.b.cd(a,b,c):a)}if(!!J.ao(a).$isfi)return H.G0(a,b,P.dk(b,c,a.length,null,null,null))
return P.GP(a,b,c)},
px:function(){var t=H.FV()
if(t!=null)return P.xz(t,0,null)
throw H.h(new P.R("'Uri.base' is not supported"))},
xz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a6(a,b+4)^58)*3|C.c.a6(a,b)^100|C.c.a6(a,b+1)^97|C.c.a6(a,b+2)^116|C.c.a6(a,b+3)^97)>>>0
if(s===0)return P.xy(b>0||c<c?C.c.I(a,b,c):a,5,null).geG()
else if(s===32)return P.xy(C.c.I(a,t,c),0,null).geG()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.y4(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.as()
if(p>=b)if(P.y4(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.W()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a4()
if(typeof l!=="number")return H.a7(l)
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
j=!1}else{if(!(l<c&&l===m+2&&C.c.aI(a,"..",m)))h=l>m+2&&C.c.aI(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aI(a,"file",b)){if(o<=b){if(!C.c.aI(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.c.aG(a,m,l,"/");++l;++k;++c}else{a=C.c.I(a,b,m)+"/"+C.c.I(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aI(a,"http",b)){if(q&&n+3===m&&C.c.aI(a,"80",n+1))if(b===0&&!0){a=C.c.aG(a,n,m,"")
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
else if(p===t&&C.c.aI(a,"https",b)){if(q&&n+4===m&&C.c.aI(a,"443",n+1))if(b===0&&!0){a=C.c.aG(a,n,m,"")
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
k-=b}return new P.r5(a,p,o,n,m,l,k,i,null)}return P.H8(a,b,c,p,o,n,m,l,k,i)},
xB:function(a,b){return C.b.hz(a.split("&"),P.jC(),new P.pA(b))},
GS:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pw(a)
s=H.cA(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a_(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.ev(C.c.I(a,p,q),null,null)
if(J.cv(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.u(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.ev(C.c.I(a,p,c),null,null)
if(J.cv(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.u(r,o)
r[o]=m
return r},
xA:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.py(a)
s=new P.pz(a,t)
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
k=J.aX(C.b.gbb(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.GS(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.au()
h=j[1]
if(typeof h!=="number")return H.a7(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.au()
i=j[3]
if(typeof i!=="number")return H.a7(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.ao(e).S(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.u(g,f)
g[f]=0
i=f+1
if(i>=16)return H.u(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d9()
i=C.d.aY(e,8)
if(f<0||f>=16)return H.u(g,f)
g[f]=i
i=f+1
if(i>=16)return H.u(g,i)
g[i]=e&255
f+=2}}return g},
H8:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Hg(a,b,d)
else{if(d===b)P.ib(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Hh(a,t,e-1):""
r=P.Hc(a,e,f,!1)
if(typeof f!=="number")return f.W()
q=f+1
if(typeof g!=="number")return H.a7(g)
p=q<g?P.He(H.ev(C.c.I(a,q,g),null,new P.rF(a,f)),j):null}else{s=""
r=null
p=null}o=P.Hd(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a4()
n=h<i?P.Hf(a,h+1,i,null):null
return new P.ks(j,s,r,p,o,n,i<c?P.Hb(a,i+1,c):null,null,null,null,null,null)},
xO:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ib:function(a,b,c){throw H.h(new P.bL(c,a,b))},
He:function(a,b){if(a!=null&&J.aX(a,P.xO(b)))return
return a},
Hc:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.ak()
t=c-1
if(C.c.a_(a,t)!==93)P.ib(a,b,"Missing end `]` to match `[` in host")
P.xA(a,b+1,t)
return C.c.I(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a7(c)
s=b
for(;s<c;++s)if(C.c.a_(a,s)===58){P.xA(a,b,c)
return"["+a+"]"}return P.Hj(a,b,c)},
Hj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a7(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a_(a,t)
if(p===37){o=P.xT(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.cc("")
m=C.c.I(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.I(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.u(C.F,n)
n=(C.F[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.cc("")
if(s<t){r.N+=C.c.I(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.ib(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a_(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.cc("")
m=C.c.I(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.xP(p)
t+=k
s=t}}}}if(r==null)return C.c.I(a,b,c)
if(s<c){m=C.c.I(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
Hg:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xR(C.c.a6(a,b)))P.ib(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a6(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.u(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ib(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.I(a,b,c)
return P.H9(s?a.toLowerCase():a)},
H9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Hh:function(a,b,c){var t=P.fz(a,b,c,C.a4,!1)
return t==null?C.c.I(a,b,c):t},
Hd:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fz(a,b,c,C.H,!1)
if(r==null)r=C.c.I(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.a9(r,"/"))r="/"+r
return P.Hi(r,e,f)},
Hi:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.a9(a,"/"))return P.Hk(a,!t||c)
return P.Hl(a)},
Hf:function(a,b,c,d){var t=P.fz(a,b,c,C.k,!1)
return t==null?C.c.I(a,b,c):t},
Hb:function(a,b,c){var t=P.fz(a,b,c,C.k,!1)
return t==null?C.c.I(a,b,c):t},
xT:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a_(a,b+1)
r=C.c.a_(a,t)
q=H.rP(s)
p=H.rP(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aY(o,4)
if(t>=8)return H.u(C.E,t)
t=(C.E[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hH(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.I(a,b,b+3).toUpperCase()
return},
xP:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a6("0123456789ABCDEF",a>>>4)
t[2]=C.c.a6("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.h1(a,6*r)&63|s
if(p>=q)return H.u(t,p)
t[p]=37
n=p+1
m=C.c.a6("0123456789ABCDEF",o>>>4)
if(n>=q)return H.u(t,n)
t[n]=m
m=p+2
n=C.c.a6("0123456789ABCDEF",o&15)
if(m>=q)return H.u(t,m)
t[m]=n
p+=3}}return P.p1(t,0,null)},
fz:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.cB(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a4()
if(typeof c!=="number")return H.a7(c)
if(!(r<c))break
c$0:{o=s.a_(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.u(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xT(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.u(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ib(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a_(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xP(o)}}if(p==null)p=new P.cc("")
p.N+=C.c.I(a,q,r)
p.N+=H.y(m)
if(typeof l!=="number")return H.a7(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a4()
if(q<c)p.N+=s.I(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
xS:function(a){if(C.c.a9(a,"."))return!0
return C.c.bj(a,"/.")!==-1},
Hl:function(a){var t,s,r,q,p,o,n
if(!P.xS(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(J.aX(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.u(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.aR(t,"/")},
Hk:function(a,b){var t,s,r,q,p,o
if(!P.xS(a))return!b?P.xQ(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.aX(C.b.gbb(t),"..")){if(0>=t.length)return H.u(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.u(t,0)
s=J.tb(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.aX(C.b.gbb(t),".."))t.push("")
if(!b){if(0>=t.length)return H.u(t,0)
s=P.xQ(t[0])
if(0>=t.length)return H.u(t,0)
t[0]=s}return C.b.aR(t,"/")},
xQ:function(a){var t,s,r,q
t=J.aT(a)
s=t.gm(a)
if(typeof s!=="number")return s.as()
if(s>=2&&P.xR(t.a_(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a7(s)
if(!(r<s))break
q=t.a_(a,r)
if(q===58)return C.c.I(a,0,r)+"%3A"+C.c.aa(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.u(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Ha:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a_(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.h(P.dE("Invalid URL encoding"))}}return t},
ri:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a7(c)
t=J.cB(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a_(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.I(a,b,c)
else o=new H.l6(t.I(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a_(a,s)
if(q>127)throw H.h(P.dE("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.h(P.dE("Truncated URI"))
o.push(P.Ha(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pE(!1).hk(o)},
xR:function(a){var t=a|32
return 97<=t&&t<=122},
xy:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.aT(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
c$0:{p=s.a_(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.h(new P.bL("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.h(new P.bL("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
p=s.a_(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbb(t)
if(p!==44||r!==m+7||!s.aI(a,"base64",m+1))throw H.h(new P.bL("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.M.hW(0,a,o,s.gm(a))
else{l=P.fz(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aG(a,o,s.gm(a),l)}return new P.pv(a,t,c)},
Hs:function(){var t,s,r,q,p
t=P.FA(22,new P.ry(),!0,P.dc)
s=new P.rx(t)
r=new P.rz()
q=new P.rA()
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
y4:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$y5()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.u(t,d)
r=t[d]
q=C.c.a6(a,s)^96
p=J.ii(r,q>95?31:q)
if(typeof p!=="number")return p.aL()
d=p&31
o=C.d.aY(p,5)
if(o>=8)return H.u(e,o)
e[o]=s}return d},
cU:function cU(){},
bG:function bG(){},
dX:function dX(a,b){this.a=a
this.b=b},
V:function V(){},
dH:function dH(a){this.a=a},
lu:function lu(){},
lv:function lv(){},
ee:function ee(){},
fj:function fj(){},
cX:function cX(a,b,c,d){var _=this
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
mw:function mw(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a){this.a=a},
eE:function eE(a){this.a=a},
aN:function aN(a){this.a=a},
bJ:function bJ(a){this.a=a},
nP:function nP(){},
k2:function k2(){},
lm:function lm(a){this.a=a},
qp:function qp(a){this.a=a},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
lE:function lE(a,bO,$ti){this.a=a
this.bO=bO
this.$ti=$ti},
C:function C(){},
n:function n(){},
jz:function jz(){},
p:function p(){},
b2:function b2(){},
cQ:function cQ(){},
dq:function dq(){},
ab:function ab(){},
dy:function dy(){},
e4:function e4(){},
dO:function dO(){},
x:function x(){},
cc:function cc(N){this.N=N},
eG:function eG(){},
pA:function pA(a){this.a=a},
pw:function pw(a){this.a=a},
py:function py(a){this.a=a},
pz:function pz(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rF:function rF(a,b){this.a=a
this.b=b},
pv:function pv(a,b,c){this.a=a
this.b=b
this.c=c},
ry:function ry(){},
rx:function rx(a){this.a=a},
rz:function rz(){},
rA:function rA(){},
r5:function r5(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qd:function qd(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yb:function(a){var t,s,r,q,p
if(a==null)return
t=P.jC()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
HL:function(a){var t,s
t=new P.bm(0,$.an,null,[null])
s=new P.dS(t,[null])
a.then(H.dp(new P.rI(s),1))["catch"](H.dp(new P.rJ(s),1))
return t},
tp:function(){var t=$.vY
if(t==null){t=J.kD(window.navigator.userAgent,"Opera",0)
$.vY=t}return t},
w_:function(){var t=$.vZ
if(t==null){t=P.tp()!==!0&&J.kD(window.navigator.userAgent,"WebKit",0)
$.vZ=t}return t},
zC:function(){var t,s
t=$.vV
if(t!=null)return t
s=$.vW
if(s==null){s=J.kD(window.navigator.userAgent,"Firefox",0)
$.vW=s}if(s)t="-moz-"
else{s=$.vX
if(s==null){s=P.tp()!==!0&&J.kD(window.navigator.userAgent,"Trident/",0)
$.vX=s}if(s)t="-ms-"
else t=P.tp()===!0?"-o-":"-webkit-"}$.vV=t
return t},
ra:function ra(){},
rc:function rc(a,b){this.a=a
this.b=b},
pY:function pY(){},
pZ:function pZ(a,b){this.a=a
this.b=b},
rb:function rb(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
rI:function rI(a){this.a=a},
rJ:function rJ(a){this.a=a},
lc:function lc(){},
ld:function ld(a){this.a=a},
Hq:function(a){var t,s,r
t=new P.bm(0,$.an,null,[null])
s=new P.kr(t,[null])
a.toString
r=W.Q
W.fv(a,"success",new P.rw(a,s),!1,r)
W.fv(a,"error",s.ge8(),!1,r)
return t},
lo:function lo(){},
rw:function rw(a,b){this.a=a
this.b=b},
mv:function mv(){},
nL:function nL(){},
hJ:function hJ(){},
pp:function pp(){},
H7:function(a){var t=new P.qT(0,0)
t.fi(a)
return t},
qK:function qK(){},
qT:function qT(a,b){this.a=a
this.b=b},
qU:function qU(){},
bU:function bU(){},
kH:function kH(){},
eb:function eb(){},
lF:function lF(){},
lG:function lG(){},
lH:function lH(){},
lI:function lI(){},
lJ:function lJ(){},
lK:function lK(){},
lL:function lL(){},
lM:function lM(){},
lN:function lN(){},
lO:function lO(){},
lP:function lP(){},
lQ:function lQ(){},
lR:function lR(){},
lS:function lS(){},
lT:function lT(){},
lU:function lU(){},
m8:function m8(){},
co:function co(){},
ms:function ms(){},
d7:function d7(){},
mZ:function mZ(){},
iY:function iY(){},
jh:function jh(){},
nk:function nk(){},
nl:function nl(){},
d8:function d8(){},
nH:function nH(){},
iZ:function iZ(){},
ji:function ji(){},
nZ:function nZ(){},
o3:function o3(){},
hL:function hL(){},
p0:function p0(){},
j_:function j_(){},
jj:function jj(){},
p3:function p3(){},
kO:function kO(a){this.a=a},
c4:function c4(){},
p5:function p5(){},
p7:function p7(){},
eD:function eD(){},
pf:function pf(){},
db:function db(){},
pq:function pq(){},
j0:function j0(){},
jk:function jk(){},
pC:function pC(){},
pG:function pG(){},
pH:function pH(){},
i5:function i5(){},
qZ:function qZ(){},
r_:function r_(){},
r0:function r0(){},
bi:function bi(){},
dc:function dc(){},
fL:function fL(){},
eR:function eR(){},
fM:function fM(){},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
bF:function bF(){},
eT:function eT(){},
kY:function kY(){},
lb:function lb(){},
jO:function jO(){},
kJ:function kJ(){},
oe:function oe(){},
rn:function rn(){},
k1:function k1(){},
j1:function j1(){},
jl:function jl(){}},W={
z4:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
zn:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zo:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
zy:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
H_:function(a){var t=new W.q9(a,null)
t.fe(a)
return t},
zD:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).ax(t,a,b,c)
s.toString
t=new H.eH(new W.d2(s),new W.rE(),[W.ae])
return t.gbe(t)},
fZ:function(a){var t,s,r
t="element tag unavailable"
try{s=J.yP(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bO(r)}return t},
tP:function(a,b,c){return W.wg(a,null,null,b,null,null,null,c).b4(new W.mn())},
wg:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e0
s=new P.bm(0,$.an,null,[t])
r=new P.dS(s,[t])
q=new XMLHttpRequest()
C.R.hY(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.IA
W.fv(q,"load",new W.mo(r,q),!1,t)
W.fv(q,"error",r.ge8(),!1,t)
q.send()
return s},
mt:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
Ad:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.yY(t,a)}catch(r){H.bO(r)}return t},
eM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fv:function(a,b,c,d,e){var t=W.HA(new W.qo(c))
t=new W.qn(0,a,b,t,!1,[e])
t.ff(a,b,c,!1,e)
return t},
xK:function(a){var t,s
t=W.z4(null)
s=window.location
t=new W.i6(new W.r1(t,s))
t.fh(a)
return t},
H3:function(a,b,c,d){return!0},
H4:function(a,b,c,d){var t,s,r,q,p
t=d.geH()
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
xN:function(){var t=P.x
t=new W.re(P.jD(C.p,t),P.a0(null,null,null,t),P.a0(null,null,null,t),P.a0(null,null,null,t),null)
t.fj(null,new H.es(C.p,new W.rf(),[H.P(C.p,0),null]),["TEMPLATE"],null)
return t},
Hr:function(a){var t
if(!!J.ao(a).$ised)return a
t=new P.kd([],[],!1)
t.c=!0
return t.b6(a)},
HA:function(a){var t=$.an
if(t===C.e)return a
return t.hf(a,!0)},
Ih:function(a){return document.querySelector(a)},
aK:function aK(){},
ea:function ea(){},
kK:function kK(){},
eS:function eS(){},
cL:function cL(){},
kS:function kS(){},
h0:function h0(){},
h3:function h3(){},
kW:function kW(){},
eU:function eU(){},
eV:function eV(){},
fR:function fR(){},
ec:function ec(){},
l8:function l8(){},
im:function im(){},
fV:function fV(){},
le:function le(){},
lf:function lf(){},
fW:function fW(){},
fX:function fX(){},
lg:function lg(){},
bK:function bK(){},
eY:function eY(){},
iQ:function iQ(){},
q9:function q9(a,b){this.a=a
this.b=b},
jM:function jM(){},
qa:function qa(){},
ip:function ip(){},
lh:function lh(){},
li:function li(){},
ln:function ln(){},
eZ:function eZ(){},
iq:function iq(){},
ed:function ed(){},
is:function is(){},
it:function it(){},
lq:function lq(){},
iu:function iu(){},
iv:function iv(){},
iR:function iR(){},
ja:function ja(){},
iw:function iw(){},
ix:function ix(){},
kj:function kj(a,$ti){this.a=a
this.$ti=$ti},
c6:function c6(){},
rE:function rE(){},
lw:function lw(){},
h_:function h_(){},
lC:function lC(){},
Q:function Q(){},
aE:function aE(){},
m4:function m4(){},
cf:function cf(){},
f7:function f7(){},
iS:function iS(){},
jb:function jb(){},
m5:function m5(){},
m6:function m6(){},
m7:function m7(){},
m9:function m9(){},
ma:function ma(){},
iM:function iM(){},
cn:function cn(){},
mk:function mk(){},
f9:function f9(){},
iT:function iT(){},
jc:function jc(){},
iO:function iO(){},
e0:function e0(){},
mn:function mn(){},
mo:function mo(a,b){this.a=a
this.b=b},
hg:function hg(){},
mr:function mr(){},
hh:function hh(){},
ek:function ek(){},
mx:function mx(){},
mV:function mV(){},
mX:function mX(){},
hp:function hp(){},
hq:function hq(){},
nc:function nc(){},
nh:function nh(){},
hy:function hy(){},
jF:function jF(){},
nm:function nm(){},
nn:function nn(){},
no:function no(){},
np:function np(){},
nq:function nq(){},
hz:function hz(){},
cp:function cp(){},
jG:function jG(){},
j2:function j2(){},
jm:function jm(){},
nD:function nD(){},
nE:function nE(){},
d2:function d2(a){this.a=a},
ae:function ae(){},
jJ:function jJ(){},
hG:function hG(){},
j3:function j3(){},
jn:function jn(){},
nJ:function nJ(){},
nK:function nK(){},
nO:function nO(){},
nQ:function nQ(){},
nU:function nU(){},
nW:function nW(){},
e2:function e2(){},
o0:function o0(){},
ch:function ch(){},
jS:function jS(){},
j4:function j4(){},
jo:function jo(){},
o5:function o5(){},
o8:function o8(){},
jW:function jW(){},
jX:function jX(){},
fo:function fo(){},
jY:function jY(){},
oq:function oq(){},
ot:function ot(){},
ou:function ou(){},
ov:function ov(){},
cq:function cq(){},
k_:function k_(){},
h1:function h1(){},
h4:function h4(){},
oy:function oy(){},
hN:function hN(){},
cr:function cr(){},
k0:function k0(){},
j5:function j5(){},
jp:function jp(){},
fp:function fp(){},
oA:function oA(){},
cj:function cj(){},
oB:function oB(){},
oC:function oC(){},
oG:function oG(){},
p2:function p2(){},
ck:function ck(){},
e5:function e5(){},
k3:function k3(){},
p8:function p8(){},
p9:function p9(){},
hT:function hT(){},
pd:function pd(){},
cS:function cS(){},
cJ:function cJ(){},
pg:function pg(){},
j6:function j6(){},
jq:function jq(){},
ph:function ph(){},
h2:function h2(){},
h5:function h5(){},
pl:function pl(){},
ct:function ct(){},
k4:function k4(){},
j7:function j7(){},
jr:function jr(){},
fs:function fs(){},
k5:function k5(){},
e6:function e6(){},
k6:function k6(){},
pB:function pB(){},
pF:function pF(){},
ft:function ft(){},
k7:function k7(){},
pK:function pK(){},
ka:function ka(){},
pR:function pR(){},
eI:function eI(){},
fu:function fu(){},
q8:function q8(){},
i0:function i0(){},
j8:function j8(){},
js:function js(){},
kg:function kg(){},
j9:function j9(){},
jt:function jt(){},
qh:function qh(){},
qi:function qi(){},
kl:function kl(){},
iU:function iU(){},
jd:function jd(){},
qD:function qD(){},
i9:function i9(){},
iV:function iV(){},
je:function je(){},
r2:function r2(){},
ko:function ko(){},
iW:function iW(){},
jf:function jf(){},
kq:function kq(){},
iX:function iX(){},
jg:function jg(){},
ro:function ro(){},
rp:function rp(){},
q4:function q4(){},
i1:function i1(a){this.a=a},
kh:function kh(a){this.a=a},
qb:function qb(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
qj:function qj(a){this.a=a},
qm:function qm(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
i2:function i2(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qn:function qn(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qo:function qo(a){this.a=a},
i6:function i6(a){this.a=a},
bw:function bw(){},
jK:function jK(a){this.a=a},
nG:function nG(a){this.a=a},
nF:function nF(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(){},
r3:function r3(){},
r4:function r4(){},
re:function re(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rf:function rf(){},
rd:function rd(){},
iK:function iK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
e1:function e1(){},
rg:function rg(){},
r1:function r1(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
rm:function rm(a){this.a=a}},T={
tQ:function(a,b,c,d){var t
H.Io(a,"$isp",[P.C],"$asp")
t=new T.hi(a,null,d,b,null)
t.f7(a,b,c,d)
return t},
x4:function(a,b){return new T.nR(0,a,new Uint8Array(H.cA(b==null?32768:b)))},
GU:function(a){var t=new T.pU(-1,0,0,0,0,null,null,"",[])
t.fb(a)
return t},
GV:function(a,b){var t=new T.pV(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fc(a,b)
return t},
fa:function(a){var t=new T.mp(null,0,2147483647)
t.f6(a)
return t},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
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
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
pU:function pU(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pV:function pV(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
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
pW:function pW(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
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
pT:function pT(a){this.a=a},
mp:function mp(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kZ:function kZ(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
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
_.x1=x1},
l0:function l0(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
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
_.x1=x1},
lp:function lp(){},
mi:function mi(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
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
_.x1=x1},
Gh:function(a,b,c,d){var t,s
t=[P.x]
s=H.a([],t)
t=new T.hK("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.V]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.I(null,null,A.a4),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fP]),1)
t.ab(a,b,c,d)
return t},
hK:function hK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},
c3:function c3(a,b){this.a=a
this.b=b},
zH:function(a,b,c,d){var t,s,r,q
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
c.toString
s=H.cP(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ag(s[q],8)
return t.b5(b)},
zG:function(a,b,c,d){var t,s,r,q,p
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.dU(a,b)
for(q=0;q<c;++q){p=r.ac(8)
if(q>=t)return H.u(s,q)
s[q]=p}return s},
zF:function(a,b,c,d){var t,s,r,q,p
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
s=d.gcS()
r=C.f.aj(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cP(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ag(q[p],r)
return t.b5(b)},
zE:function(a,b,c,d){var t,s,r,q,p,o
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.dU(a,b)
for(o=0;o<c;++o){r=p.ac(q)
if(o>=t)return H.u(s,o)
s[o]=r}return s}},S={kI:function kI(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.b=b},il:function il(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mm:function mm(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mW:function mW(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},nf:function nf(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},op:function op(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},fk:function fk(){},v8:function v8(){},v9:function v9(){},va:function va(){},tw:function tw(){},tz:function tz(){},tm:function tm(){},uS:function uS(){},vc:function vc(){},vd:function vd(){},l3:function l3(){},uI:function uI(){},uD:function uD(){},n1:function n1(){},tq:function tq(){},tg:function tg(){},lk:function lk(){},uq:function uq(){},ll:function ll(){},nV:function nV(){},uZ:function uZ(){},uW:function uW(){},v_:function v_(){},tf:function tf(){},mf:function mf(){},l1:function l1(){},tk:function tk(){},tj:function tj(){},uJ:function uJ(){},v0:function v0(){},uK:function uK(){},ty:function ty(){},tx:function tx(){},uY:function uY(){},uX:function uX(){},pi:function pi(){},v3:function v3(){},tn:function tn(){},to:function to(){},vb:function vb(){},hx:function hx(){},uv:function uv(){},uw:function uw(){},ux:function ux(){},uy:function uy(){},uT:function uT(){},uU:function uU(){},uV:function uV(){},uu:function uu(){},uA:function uA(){},uB:function uB(){},tM:function tM(){},tN:function tN(){},tO:function tO(){},uC:function uC(){},uz:function uz(){},th:function th(){},v5:function v5(){},v6:function v6(){},v4:function v4(){}},K={bW:function bW(a,b){this.a=a
this.b=b},n_:function n_(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},ok:function ok(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
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
_.x1=x1},cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c}},L={
z6:function(a,b,c,d){var t,s,r
t=P.x
s=A.dW
r=P.C
r=new L.b_(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b6,L.e("#FF9B00"),!0)
r.j(0,$.b8,L.e("#FF9B00"),!0)
r.j(0,$.b7,L.e("#FF8700"),!0)
r.j(0,$.bh,L.e("#7F7F7F"),!0)
r.j(0,$.bg,L.e("#727272"),!0)
r.j(0,$.ba,L.e("#A3A3A3"),!0)
r.j(0,$.bb,L.e("#999999"),!0)
r.j(0,$.b9,L.e("#898989"),!0)
r.j(0,$.bf,L.e("#EFEFEF"),!0)
r.j(0,$.be,L.e("#DBDBDB"),!0)
r.j(0,$.bd,L.e("#C6C6C6"),!0)
r.j(0,$.bc,L.e("#ADADAD"),!0)
s=[t]
t=new L.fJ(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.V]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fP]),Q.I(null,null,A.a4))
t.ai(a,b,c,d)
return t},
e:function(a){if(C.c.a9(a,"#"))return A.vR(C.c.aa(a,1))
else return A.vR(a)},
fJ:function fJ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.x1=x1},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
om:function om(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1}},M={kN:function kN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fQ:function fQ(a,b){this.a=a
this.b=b},lj:function lj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h7:function h7(){},bC:function bC(a,b){this.a=a
this.b=b},oD:function oD(a){this.a=a},pN:function pN(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1}},U={kR:function kR(){},ne:function ne(a){this.a=a},nN:function nN(a){this.a=a},oY:function oY(){},oZ:function oZ(a){this.a=a},p_:function p_(a){this.a=a},ls:function ls(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,ec,ed,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
_.ec=ec
_.ed=ed
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
_.x1=x1},lV:function lV(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ng:function ng(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},c:function c(a){this.a=a},a_:function a_(b,c,a){this.b=b
this.c=c
this.a=a},ah:function ah(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},pj:function pj(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},
GT:function(a){if(J.cB(a).a9(a," "))return C.c.aa(a,1)
return a},
pO:function pO(a){this.a=a},
pP:function pP(a,b){this.a=a
this.b=b},
pQ:function pQ(a,b){this.a=a
this.b=b}},O={kT:function kT(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},c9:function c9(){},dr:function dr(){},kX:function kX(a){this.a=a},eC:function eC(){},iy:function iy(){},
Ie:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.uH()
a=J.yW(a,P.d9("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.t5(t))
s=document
J.vF(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.aX(O.HY("seerOfVoid",null),"true"))P.Ab(new O.t6(),P.cQ)
r=new P.dX(Date.now(),!1)
if(H.uN(r)===4&&H.uM(r)===1)J.vC(s.querySelector("body")).h(0,"voidbody")
q=H.uN(r)
p=H.uM(r)
o=C.a.A(H.x7(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jU(null,null)
k.d8(H.ev(l,null,null))
k.hU()
if($.GJ||k.a.cR()>0.99)H.kA(s.querySelector("#today"),"$isea").href=C.c.ar("../",t)+"dead_index.html?seed="+l
else H.kA(s.querySelector("#today"),"$isea").href=C.c.ar("../",t)+"index2.html?seed="+l},
HY:function(a,b){var t,s,r,q
t=P.px().gbB().n(0,a)
if(t!=null)t=P.ri(t,0,J.c_(t),C.n,!1)
if(t!=null)return t
s=$.ys
if(s.length!==0){r=J.z0(window.location.href,J.yS(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xz(H.yu(s,q,"")+"?"+$.ys,0,null).gbB().n(0,a)}return},
Ir:function(){var t,s,r,q
t=document
J.vC(t.querySelector("body")).h(0,"voidbody")
s=new W.kj(t.querySelectorAll(".void"),[null])
for(t=new H.eq(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.yI(J.tc(r))
if(q==="none"||q.length===0)O.Ik(r)
else O.I_(r)}},
Ik:function(a){var t,s
if(a==null)return
t=J.aM(a)
s=t.gaB(a)
J.kG(s,!!t.$ishN?"inline":"block")},
I_:function(a){if(a==null)return
J.kG(J.tc(a),"none")},
Il:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fE("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e9(s,",")
if(!J.yC(r,a))window.localStorage.setItem(t,H.y(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bO(q)
P.fE("Saving isn't possible....you don't have local storage")}},
t5:function t5(a){this.a=a},
t6:function t6(){},
t4:function t4(){},
d_:function d_(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pe:function pe(a){this.a=a},ob:function ob(a){this.a=a},l2:function l2(a){this.a=a},mg:function mg(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},mh:function mh(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},nI:function nI(b,a){this.b=b
this.a=a},dN:function dN(a,b){this.a=a
this.b=b},ac:function ac(a,b){this.a=a
this.b=b},d4:function d4(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c1:function c1(c,d,e,f,a,b){var _=this
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
_.b=b},io:function io(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d1:function d1(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},l5:function l5(c,a,b){this.c=c
this.a=a
this.b=b},by:function by(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jP:function jP(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iL:function iL(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jR:function jR(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ol:function ol(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},ow:function ow(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},dM:function dM(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nu:function(){var t=0,s=P.bj(),r,q
var $async$nu=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:P.fE("loading big bads")
r=$
q=J
t=2
return P.cd(A.er("BigBadLists/bigBads.txt",!1,!1,null),$async$nu)
case 2:r.x3=q.e9(b,"\n")
return P.bo(null,s)}})
return P.bp($async$nu,s)},
HJ:function(a){var t,s,r,q,p,o
t=J.e9(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
o=J.aT(p)
r+=" "+(J.vJ(o.n(p,0))+o.aa(p,1))}return r}},A={l7:function l7(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j:function(a,b,c,d,e){var t=new A.a4(c,e,null,a,!1,P.a0(null,null,null,G.a1),0,3)
t.K(a,b,c,!1,e)
return t},
a4:function a4(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mN:function mN(){},
mM:function mM(){},
fP:function fP(){},
fT:function(a,b,c,d){var t=new A.dW(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.f5(a,b,c,d)
return t},
vQ:function(a,b,c,d){var t=A.fT(0,0,0,255)
t.b=C.a.ae(C.d.aj(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ae(C.d.aj(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ae(C.d.aj(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ae(C.d.aj(d*255),0,255)
return t},
zu:function(a,b){if(b){if(typeof a!=="number")return a.aL()
return A.fT((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aL()
return A.fT((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vR:function(a){return A.zu(H.ev(a,16,new A.rH()),a.length>=8)},
dW:function dW(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rH:function rH(){},
x0:function(){if($.wZ)return
$.wZ=!0
Z.A2()},
er:function(a,b,c,d){var t=0,s=P.bj(),r,q,p,o,n
var $async$er=P.bq(function(e,f){if(e===1)return P.bn(f,s)
while(true)switch(t){case 0:A.x0()
t=$.$get$cZ().Y(0,a)?3:5
break
case 3:q=$.$get$cZ().n(0,a)
p=J.ao(q)
if(!!p.$isdM){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cD(q)
t=1
break}}else throw H.h("Requested resource ("+a+") is an unexpected type: "+H.y(J.vE(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.ut==null?8:9
break
case 8:t=10
return P.cd(A.nb(),$async$er)
case 10:case 9:n=$.ut.eL(a)
t=n!=null?11:12
break
case 11:t=13
return P.cd(A.n6(n),$async$er)
case 13:if(!$.$get$cZ().Y(0,a))$.$get$cZ().i(0,a,new Y.dM(a,null,H.a([],[[P.eX,,]]),[null]))
r=$.$get$cZ().n(0,a).b
t=1
break
case 12:case 7:r=A.FC(a,!1,d)
t=1
break
case 4:case 1:return P.bo(r,s)}})
return P.bp($async$er,s)},
nb:function(){var t=0,s=P.bj(),r
var $async$nb=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cd(A.er("manifest/manifest.txt",!1,!0,$.wc),$async$nb)
case 2:r.ut=b
return P.bo(null,s)}})
return P.bp($async$nb,s)},
FB:function(a){if(!$.$get$cZ().Y(0,a))$.$get$cZ().i(0,a,new Y.dM(a,null,H.a([],[[P.eX,,]]),[null]))
return $.$get$cZ().n(0,a)},
FC:function(a,b,c){var t
if($.$get$cZ().Y(0,a))throw H.h("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wb(C.b.gbb(a.split("."))).a
t=A.FB(a)
c.b3(A.wY(a,!1)).b4(new A.n9(t))
return t.cD(0)},
n6:function(a){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$n6=P.bq(function(b,a0){if(b===1)return P.bn(a0,s)
while(true)switch(t){case 0:t=3
return P.cd(A.er(a+".bundle",!1,!0,null),$async$n6)
case 3:q=a0
p=C.c.I(a,0,C.c.en(a,$.$get$x_()))
o=P.cQ
n=new P.dS(new P.bm(0,$.an,null,[o]),[o])
m=H.a([],[P.cm])
for(o=J.yJ(q),l=o.length,k=[[P.eX,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bV)(o),++i){h=o[i]
g=J.aM(h)
f=Z.wb(C.b.gbb(J.e9(g.gH(h),"."))).a
e=p+"/"+H.y(g.gH(h))
if($.$get$cZ().Y(0,e)){m.push(A.er(e,!1,!1,null))
continue}d=H.kA(g.gbi(h),"$isdc")
if(!$.$get$cZ().Y(0,e))$.$get$cZ().i(0,e,new Y.dM(e,null,H.a([],k),j))
c=$.$get$cZ().n(0,e)
m.push(c.cD(0))
f.ba(d.buffer).b4(new A.n7(f,c))}P.Ac(m,null,!1).b4(new A.n8(n))
r=n.a
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$n6,s)},
ht:function(a,b){var t=0,s=P.bj(),r,q,p,o,n
var $async$ht=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:if($.$get$us().Y(0,a)){r=$.$get$us().n(0,a)
t=1
break}q=W.fo
p=new P.bm(0,$.an,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.fv(n,"load",new A.na(new P.dS(p,[q]),n),!1,W.Q)
n.src=A.wY(a,!1)
r=p
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$ht,s)},
wY:function(a,b){if(C.c.a9(a,"/")){a=C.c.aa(a,1)
b=!0}else b=!1
if(b)return H.y(window.location.protocol)+"//"+H.y(window.location.host)+"/"+a
return C.c.ar("../",N.uH())+a},
n9:function n9(a){this.a=a},
n7:function n7(a,b){this.a=a
this.b=b},
n8:function n8(a){this.a=a},
na:function na(a,b){this.a=a
this.b=b},
nT:function nT(){},
jN:function jN(){},
jU:function jU(a,b){this.a=a
this.b=b},
rO:function(){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$rO=P.bq(function(a0,a1){if(a0===1)return P.bn(a1,s)
while(true)switch(t){case 0:if($.yc){t=1
break}$.yc=!0
D.GO()
q=P.x
p=[q]
o=H.a(["metal"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$b().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.a9
H.a([],p)
o=new G.bI(n,o,0.6)
$.$get$b().h(0,o)
$.wr=o
o=H.a(["ceramic"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,0.2)
$.$get$b().h(0,o)
$.b0=o
o=H.a(["wood"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.W=o
o=H.a(["plastic"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.az=o
o=H.a(["rubber"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.cb=o
o=H.a(["paper"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.J=o
o=H.a(["cloth","fabric"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.aV=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$b().h(0,o)
$.bX=o
o=H.a(["flesh","meat","muscle"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$b().h(0,o)
$.bk=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.F
H.a([],p)
o=new G.bI(n,o,3.1)
$.$get$b().h(0,o)
$.bt=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$b().h(0,o)
$.cg=o
o=H.a(["plant","leaf","vine"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$b().h(0,o)
$.aR=o
o=H.a(["feathery"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$b().h(0,o)
$.bA=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.H
H.a([],p)
o=new G.bI(n,o,0.1)
$.$get$b().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.H
H.a([],p)
o=new G.bI(n,o,-13)
$.$get$b().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.v
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$b().h(0,o)
$.au=o
o=H.a(["legendary"],p)
n=$.mL
H.a([],p)
o=new G.bI(n,o,13)
$.$get$b().h(0,o)
$.Z=o
o=H.a(["Unbeatable"],p)
n=$.mL
H.a([],p)
o=new G.bI(n,o,40.37)
$.$get$b().h(0,o)
$.Fh=o
o=$.H
H.a([],p)
o=new G.aH(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,o)
$.at=o
o=$.ue
H.a([],p)
o=new G.aH(o,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,o)
$.aQ=o
o=$.ue
H.a([],p)
o=new G.aH(o,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,o)
$.ak=o
o=$.H
H.a([],p)
o=new G.aH(o,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,o)
$.br=o
o=$.F
H.a([],p)
o=new G.aH(o,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,o)
$.c2=o
o=$.H
H.a([],p)
o=new G.aH(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,o)
$.aY=o
o=$.H
H.a([],p)
o=new G.aH(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,o)
$.bY=o
o=$.H
H.a([],p)
o=new G.aH(o,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,o)
$.aC=o
o=$.F
H.a([],p)
o=new G.aH(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,o)
$.aL=o
o=$.q
H.a([],p)
o=new G.aH(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,o)
$.bu=o
o=$.q
H.a([],p)
o=new G.aH(o,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,o)
$.a6=o
o=$.q
H.a([],p)
o=new G.aH(o,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,o)
$.b4=o
o=$.H
H.a([],p)
o=new G.aH(o,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,o)
$.b5=o
o=$.H
H.a([],p)
o=new G.aH(o,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,o)
$.ap=o
o=$.H
H.a([],p)
o=new G.aH(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,o)
$.ai=o
o=$.H
H.a([],p)
o=new G.aH(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,o)
$.am=o
o=$.H
H.a([],p)
o=new G.aH(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,o)
$.X=o
o=$.F
H.a([],p)
o=new G.aH(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,o)
$.ar=o
o=$.H
H.a([],p)
o=new G.aH(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,o)
$.aA=o
o=$.H
H.a([],p)
o=new G.aH(o,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,o)
$.aU=o
o=$.H
H.a([],p)
o=new G.aH(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,o)
$.bx=o
o=$.H
H.a([],p)
o=new G.aH(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,o)
$.a2=o
o=$.mL
H.a([],p)
o=new G.aH(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,o)
$.T=o
o=$.mL
H.a([],p)
o=new G.aH(o,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,o)
$.N=o
o=$.H
H.a([],p)
o=new G.aH(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,o)
$.aw=o
o=$.q
H.a([],p)
o=new G.aH(o,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,o)
$.aI=o
o=$.H
H.a([],p)
o=new G.aH(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,o)
$.aF=o
o=$.H
H.a([],p)
o=new G.aH(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,o)
$.b1=o
o=$.H
H.a([],p)
o=new G.aH(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,o)
$.bM=o
o=$.H
H.a([],p)
o=new G.aH(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,o)
$.bs=o
o=$.H
H.a([],p)
o=new G.aH(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,o)
$.ca=o
o=$.H
H.a([],p)
o=new G.aH(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,o)
$.aq=o
o=$.H
H.a([],p)
o=new G.aH(o,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,o)
$.ad=o
o=$.q
H.a([],p)
o=new G.aH(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,o)
$.aJ=o
o=$.H
H.a([],p)
o=new G.aH(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,o)
$.a8=o
o=$.H
H.a([],p)
o=new G.aH(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,o)
$.aW=o
o=$.H
H.a([],p)
o=new G.aH(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,o)
$.aP=o
o=$.H
H.a([],p)
o=new G.aH(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,o)
$.bl=o
o=H.a(["perfectly generic"],p)
n=$.H
H.a([],p)
o=new G.ag(n,o,0.1)
$.$get$b().h(0,o)
$.wv=o
o=H.a(["a sword"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.fe=o
o=H.a(["a hammer"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u_=o
o=H.a(["a rifle"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u9=o
o=H.a(["a pistol"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u6=o
o=H.a(["a blade"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wl=o
o=H.a(["a dagger"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.tV=o
o=H.a(["a santa"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.hl=o
o=H.a(["a fist"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wt=o
o=H.a(["claws"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mD=o
o=H.a(["a grenade"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mE=o
o=H.a(["a freaking safe"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wJ=o
o=H.a(["a ball"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.el=o
o=H.a(["a trident"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wR=o
o=H.a(["a card"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mC=o
o=H.a(["a frying pan"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.tX=o
o=H.a(["a pillow"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.fc=o
o=H.a(["a machinegun"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u2=o
o=H.a(["a shuriken"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wN=o
o=H.a(["a sling"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wP=o
o=H.a(["a yoyo"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wT=o
o=H.a(["a cane"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wn=o
o=H.a(["a shield"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.fd=o
o=H.a(["a lance"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wD=o
o=H.a(["a ax"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.tR=o
o=H.a(["a sign"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wI=o
o=H.a(["a book"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.av=o
o=H.a(["a broom"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ju=o
o=H.a(["a club"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.jw=o
o=H.a(["a bow"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.tS=o
o=H.a(["a whip"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wS=o
o=H.a(["a staff"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wQ=o
o=H.a(["a needle"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u4=o
o=H.a(["dice"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.tW=o
o=H.a(["a fork"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wu=o
o=H.a(["a pigeon???"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,1.3)
$.$get$b().h(0,o)
$.u5=o
o=H.a(["a chainsaw"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wo=o
o=H.a(["a sickle"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wO=o
o=H.a(["a shotgun"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wL=o
o=H.a(["a stick"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.dw=o
o=H.a(["a chain"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.hk=o
o=H.a(["a wrench"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.uc=o
o=H.a(["a shovel"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wM=o
o=H.a(["a rolling pin"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.ub=o
o=H.a(["a puppet"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u7=o
o=H.a(["a razor"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.u8=o
o=H.a(["a pen"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.mG=o
o=H.a(["a bust"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.jv=o
o=H.a(["a bowling ball"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.AT=o
o=H.a(["a golf club"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wx=o
o=H.a(["a knife"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wC=o
o=H.a(["scissors"],p)
n=$.a3
H.a([],p)
o=new G.ag(n,o,0.4)
$.$get$b().h(0,o)
$.wK=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.F
m=G.a1
l=[m]
k=H.a([$.D,$.at,$.aL],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$b().h(0,o)
$.Cc=o
o=H.a([],p)
n=$.v
k=H.a([$.ad,$.at],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.BI=o
o=H.a(["fossilized"],p)
n=$.F
k=H.a([$.b0,$.au],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$b().h(0,o)
$.Cd=o
o=H.a(["adamantium"],p)
n=$.F
k=H.a([$.b0,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$b().h(0,o)
$.wj=o
o=H.a([],p)
n=$.v
k=H.a([$.b1,$.aF],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.ER=o
o=H.a(["tatami"],p)
n=$.v
k=H.a([$.O,$.W],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$b().h(0,o)
$.F5=o
o=H.a(["mesh","chain link"],p)
n=$.v
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$b().h(0,o)
$.Dd=o
o=H.a(["foil"],p)
n=$.v
k=H.a([$.J,$.D],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$b().h(0,o)
$.C8=o
o=H.a(["beanbag"],p)
n=$.v
k=H.a([$.O,$.au],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$b().h(0,o)
$.AN=o
o=H.a(["pleather","faux fur"],p)
n=$.v
k=H.a([$.cg,$.az],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$b().h(0,o)
$.DO=o
o=H.a(["plywood"],p)
n=$.v
k=H.a([$.W,$.J],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$b().h(0,o)
$.mI=o
o=H.a(["colossus"],p)
n=$.v
k=H.a([$.D,$.bk],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$b().h(0,o)
$.wp=o
o=H.a(["rotting","zombie"],p)
n=$.F
k=H.a([$.bS,$.bk],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$b().h(0,o)
$.Ed=o
o=H.a(["draugr","white walker"],p)
n=$.F
k=H.a([$.bS,$.bk,$.bs],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$b().h(0,o)
$.BF=o
o=H.a(["Ultraviolet"],p)
n=$.ud
k=H.a([$.aQ,$.ak],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$b().h(0,o)
$.CX=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aQ,$.ak,$.at],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$b().h(0,o)
$.Fg=o
o=H.a([],p)
n=$.q
k=H.a([$.aC,$.bY],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.BD=o
o=H.a(["candy"],p)
n=$.v
k=H.a([$.ap,$.aV],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$b().h(0,o)
$.tT=o
o=H.a(["cotton candy"],p)
n=$.v
k=H.a([$.ap,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$b().h(0,o)
$.Bo=o
o=H.a(["gummy"],p)
n=$.v
k=H.a([$.ap,$.cb],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$b().h(0,o)
$.Cp=o
o=H.a(["marrow"],p)
n=$.v
k=H.a([$.ap,$.b0],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$b().h(0,o)
$.D6=o
o=H.a(["toothy"],p)
n=$.a3
k=H.a([$.b0,$.bQ],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$b().h(0,o)
$.Fd=o
o=H.a(["Frost"],p)
n=$.v
k=H.a([$.au,$.aV,$.bk],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$b().h(0,o)
$.Ce=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.ap,$.bM],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$b().h(0,o)
$.BN=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.v
k=H.a([$.au,$.aV],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$b().h(0,o)
$.tU=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.H
k=H.a([$.aw,$.aA,$.aU,$.X,$.ai,$.bY,$.a2],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$b().h(0,o)
$.D7=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.H
k=H.a([$.aY,$.ak,$.at,$.Z,$.aC,$.X,$.ai,$.am],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$b().h(0,o)
$.BL=o
o=H.a(["deadpool"],p)
n=$.a3
k=H.a([$.bS,$.aI,$.am,$.aU],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$b().h(0,o)
$.Bu=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.H
k=H.a([$.aY,$.am],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$b().h(0,o)
$.EU=o
o=H.a(["wolverine"],p)
n=$.a3
k=H.a([$.b0,$.at,$.aL],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$b().h(0,o)
$.Fs=o
o=H.a(["rabbit's foot"],p)
n=$.a3
k=H.a([$.bY,$.cg],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$b().h(0,o)
$.wH=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.F
k=H.a([$.aL,$.W],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$b().h(0,o)
$.AG=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a3
k=H.a([$.aL,$.aJ,$.W],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$b().h(0,o)
$.wk=o
o=H.a(["training sword","bokken"],p)
n=$.a3
k=H.a([$.W,$.at],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$b().h(0,o)
$.CQ=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aP,$.am],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$b().h(0,o)
$.u0=o
o=H.a(["netted","webbed"],p)
n=$.a3
k=H.a([$.b4,$.O],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$b().h(0,o)
$.Ds=o
o=H.a(["barbed wire"],p)
n=$.a3
k=H.a([$.aL,$.b4,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$b().h(0,o)
$.AK=o
o=H.a(["morning star"],p)
n=$.a3
k=H.a([$.aL,$.ad],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$b().h(0,o)
$.Dm=o
o=H.a(["decadent"],p)
n=$.H
k=H.a([$.b1,$.b5],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$b().h(0,o)
$.Bx=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bR,$.am],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$b().h(0,o)
$.En=o
o=H.a(["bayonet"],p)
n=$.a3
k=H.a([$.aL,$.aJ],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$b().h(0,o)
$.AM=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.v
k=H.a([$.bs,$.am,$.at],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$b().h(0,o)
$.EQ=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aQ,$.aq,$.at],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$b().h(0,o)
$.CW=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.H
k=H.a([$.a2,$.aP],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$b().h(0,o)
$.BU=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.H
k=H.a([$.a2,$.bl],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$b().h(0,o)
$.E7=o
o=H.a(["skeletal"],p)
n=$.a3
k=H.a([$.aY,$.aC,$.b0],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$b().h(0,o)
$.EK=o
o=H.a(["green sun"],p)
n=$.ue
k=H.a([$.aq,$.c2,$.aQ],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$b().h(0,o)
$.tZ=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.ud
k=H.a([$.ak,$.ai],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$b().h(0,o)
$.Dh=o
o=H.a(["radiant","dazzling"],p)
n=$.H
k=H.a([$.a2,$.aQ],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$b().h(0,o)
$.E4=o
o=H.a(["edgy"],p)
n=$.H
k=H.a([$.at,$.ak,$.am],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$b().h(0,o)
$.BM=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c2,$.bu],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$b().h(0,o)
$.Az=o
o=H.a(["living"],p)
n=$.F
k=H.a([$.b0,$.bk,$.ar],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$b().h(0,o)
$.D_=o
o=H.a(["dead","corpse","deceased"],p)
n=$.F
k=H.a([$.b0,$.bk],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$b().h(0,o)
$.Bt=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a6,$.b4,$.aJ],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$b().h(0,o)
$.F4=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.ak,$.a8],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$b().h(0,o)
$.Dv=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aC,$.a8],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$b().h(0,o)
$.BA=o
o=H.a(["Snobbish","Noble"],p)
n=$.H
k=H.a([$.ai,$.b5],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$b().h(0,o)
$.EP=o
o=H.a(["flat"],p)
n=$.H
k=H.a([$.ad,$.a8],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.C3=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.at,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.Ew=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.ai,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$b().h(0,o)
$.Ev=o
o=H.a(["Bach's"],p)
n=$.a9
k=H.a([$.X,$.a8],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$b().h(0,o)
$.AI=o
o=H.a(["Mozart's"],p)
n=$.a9
k=H.a([$.a2,$.a8],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$b().h(0,o)
$.Do=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.a9
k=H.a([$.X,$.c2],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$b().h(0,o)
$.BO=o
o=H.a(["Feynman's"],p)
n=$.a9
k=H.a([$.X,$.aU],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$b().h(0,o)
$.BY=o
o=H.a(["Ziptie"],p)
n=$.a9
k=H.a([$.az,$.b4],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$b().h(0,o)
$.Fw=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$b().h(0,o)
$.jx=o
o=H.a(["Sassacre"],p)
n=$.a9
k=H.a([$.ca,$.aU],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$b().h(0,o)
$.El=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ad,$.ca],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$b().h(0,o)
$.EN=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.b4,$.J],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$b().h(0,o)
$.mF=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aU,$.aW],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$b().h(0,o)
$.Bi=o
o=H.a(["passionate"],p)
n=$.H
k=H.a([$.aq,$.aA],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$b().h(0,o)
$.DF=o
o=H.a(["pinata"],p)
n=$.a3
k=H.a([$.J,$.ap],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$b().h(0,o)
$.DJ=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ad,$.ca,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$b().h(0,o)
$.AF=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aQ,$.bu],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$b().h(0,o)
$.C2=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.ak,$.bu],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$b().h(0,o)
$.EO=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.ak,$.at],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$b().h(0,o)
$.Du=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a6,$.a8],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$b().h(0,o)
$.F7=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.au,$.a8],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$b().h(0,o)
$.E9=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a3
k=H.a([$.ar,$.bk,$.aJ],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$b().h(0,o)
$.DK=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aU,$.a8,$.aW,$.aY],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$b().h(0,o)
$.wB=o
o=H.a(["shocksauce"],p)
n=$.H
k=H.a([$.am,$.a6],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.Ez=o
o=H.a(["weaksauce"],p)
n=$.H
k=H.a([$.ad,$.am,$.bR],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.Fm=o
o=H.a(["spicy","picante"],p)
n=$.H
k=H.a([$.aq,$.ap],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$b().h(0,o)
$.ET=o
o=H.a(["ice cream","popsicle"],p)
n=$.v
k=H.a([$.bs,$.ap],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$b().h(0,o)
$.CD=o
o=H.a(["popsickle"],p)
n=$.v
k=H.a([$.bs,$.ap,$.at],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$b().h(0,o)
$.DW=o
o=H.a(["icepick"],p)
n=$.v
k=H.a([$.bs,$.aL],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$b().h(0,o)
$.CE=o
o=H.a(["schezwan"],p)
n=$.H
k=H.a([$.am,$.ap],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$b().h(0,o)
$.Eo=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.ak,$.a8,$.am,$.a6],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$b().h(0,o)
$.Fk=o
o=H.a(["mallet"],p)
n=$.a3
k=H.a([$.W,$.ad],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$b().h(0,o)
$.D5=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.az,$.am],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$b().h(0,o)
$.C_=o
o=H.a(["gold foil"],p)
n=$.v
k=H.a([$.D,$.J,$.b5],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Cm=o
o=H.a(["caviar"],p)
n=$.v
k=H.a([$.ap,$.b5],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$b().h(0,o)
$.B8=o
o=H.a(["RADioactive"],p)
n=$.H
k=H.a([$.c2,$.am],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$b().h(0,o)
$.E5=o
o=H.a(["glam"],p)
n=$.H
k=H.a([$.au,$.a8,$.aw],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$b().h(0,o)
$.Ck=o
o=H.a(["hair metal"],p)
n=$.H
k=H.a([$.D,$.a8,$.aw],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$b().h(0,o)
$.Cr=o
o=H.a(["elven","fae","sylvan"],p)
n=$.H
k=H.a([$.a2,$.aw],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$b().h(0,o)
$.BQ=o
o=H.a(["shiny"],p)
n=$.H
k=H.a([$.D,$.aw],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$b().h(0,o)
$.Ey=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.H
k=H.a([$.b5,$.aw,$.ai],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$b().h(0,o)
$.fb=o
o=H.a(["operatic"],p)
n=$.H
k=H.a([$.b5,$.a8,$.ai],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$b().h(0,o)
$.Dz=o
o=H.a(["ice","diamond"],p)
n=$.v
k=H.a([$.b5,$.bs],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$b().h(0,o)
$.wA=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.H
k=H.a([$.aq,$.bs],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$b().h(0,o)
$.CF=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.H
k=H.a([$.am,$.bs],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$b().h(0,o)
$.CC=o
o=H.a(["winter's","season's"],p)
n=$.a9
k=H.a([$.br,$.bs],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$b().h(0,o)
$.Fp=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.a9
k=H.a([$.a2,$.bs],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$b().h(0,o)
$.Be=o
o=H.a(["Santa Saws"],p)
n=$.a9
k=H.a([$.a2,$.bs,$.at],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$b().h(0,o)
$.Ej=o
o=H.a(["Santa Sleighs"],p)
n=$.a9
k=H.a([$.hl,$.at],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$b().h(0,o)
$.Ek=o
o=H.a(["Santa Claws"],p)
n=$.a9
k=H.a([$.hl,$.mD],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$b().h(0,o)
$.Ei=o
o=H.a(["Sandy Claws"],p)
n=$.a9
k=H.a([$.hl,$.mD,$.au],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$b().h(0,o)
$.Eh=o
o=H.a(["Silent Night"],p)
n=$.a9
k=H.a([$.hl,$.ak],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$b().h(0,o)
$.EG=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.a9
k=H.a([$.aY,$.bX],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$b().h(0,o)
$.Cs=o
o=H.a(["ghoul","mutant"],p)
n=$.v
k=H.a([$.bk,$.c2,$.bS],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$b().h(0,o)
$.Dp=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.am,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$b().h(0,o)
$.EJ=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c2,$.a6,$.ap],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$b().h(0,o)
$.Dg=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c2,$.a6,$.ap,$.aJ],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$b().h(0,o)
$.DA=o
o=H.a([],p)
n=$.q
k=H.a([$.ad,$.X],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.BJ=o
o=H.a(["uranium"],p)
n=$.v
k=H.a([$.c2,$.au],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$b().h(0,o)
$.Fj=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.J,$.cb],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$b().h(0,o)
$.Dn=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.at,$.au],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$b().h(0,o)
$.C5=o
o=H.a(["flint"],p)
n=$.v
k=H.a([$.aL,$.au],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$b().h(0,o)
$.C6=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.az,$.aL],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$b().h(0,o)
$.DI=o
o=H.a(["xtreme xplosion"],p)
n=$.H
k=H.a([$.am,$.bu],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$b().h(0,o)
$.Fv=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.az,$.b1],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$b().h(0,o)
$.CU=o
o=H.a(["upholstered"],p)
n=$.v
k=H.a([$.O,$.b1],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$b().h(0,o)
$.Fi=o
o=H.a(["leather"],p)
n=$.v
k=H.a([$.bk,$.b1],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$b().h(0,o)
$.wF=o
o=H.a(["shag"],p)
n=$.v
k=H.a([$.cg,$.b1],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$b().h(0,o)
$.Eu=o
o=H.a(["loyal"],p)
n=$.H
k=H.a([$.ad,$.aA],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$b().h(0,o)
$.D3=o
o=H.a(["porcelain"],p)
n=$.v
k=H.a([$.aw,$.bQ],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$b().h(0,o)
$.mJ=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a3
k=H.a([$.b5,$.bQ],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$b().h(0,o)
$.DY=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.am,$.at],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$b().h(0,o)
$.CO=o
o=H.a(["chocolate"],p)
n=$.v
k=H.a([$.aA,$.ap],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Bd=o
o=H.a(["wrapped chocolate"],p)
n=$.v
k=H.a([$.aA,$.ap,$.J,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.C9=o
o=H.a(["scratch-n-sniff"],p)
n=$.v
k=H.a([$.am,$.J],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$b().h(0,o)
$.Eq=o
o=H.a(["mythril","orichalcum"],p)
n=$.v
k=H.a([$.a2,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$b().h(0,o)
$.Dq=o
o=H.a(["titanium","steel"],p)
n=$.v
k=H.a([$.ad,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$b().h(0,o)
$.Fc=o
o=H.a(["lead"],p)
n=$.v
k=H.a([$.ca,$.D],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$b().h(0,o)
$.wE=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aP,$.aU],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$b().h(0,o)
$.Dy=o
o=H.a(["comedy gold"],p)
n=$.H
k=H.a([$.b5,$.aU],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$b().h(0,o)
$.Bk=o
o=H.a(["dry","sensible chuckle"],p)
n=$.H
k=H.a([$.ai,$.aU],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$b().h(0,o)
$.BG=o
o=H.a(["polite"],p)
n=$.H
k=H.a([$.b1,$.aP],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$b().h(0,o)
$.DU=o
o=H.a(["stradivarius"],p)
n=$.a9
k=H.a([$.ai,$.b5,$.W,$.a8],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$b().h(0,o)
$.F_=o
o=H.a(["scientistic"],p)
n=$.H
k=H.a([$.X,$.aP],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$b().h(0,o)
$.Ep=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a6,$.ar],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$b().h(0,o)
$.mB=o
o=H.a(["robotic"],p)
n=$.F
k=H.a([$.D,$.a6,$.ar],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$b().h(0,o)
$.ua=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.W,$.bu],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$b().h(0,o)
$.EB=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.ar,$.a6,$.a8],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$b().h(0,o)
$.Fl=o
o=H.a(["*Hyun-ae"],p)
n=$.a9
k=H.a([$.ar,$.a6,$.aA],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$b().h(0,o)
$.CB=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.W,$.aJ],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$b().h(0,o)
$.AX=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.ca,$.aJ],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.B5=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ai,$.J],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$b().h(0,o)
$.EY=o
o=H.a([],p)
n=$.q
k=H.a([$.av,$.J],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.DC=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aJ],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.De=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.at,$.J],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$b().h(0,o)
$.DD=o
o=H.a(["squeaky"],p)
n=$.F
k=H.a([$.ad,$.cb],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$b().h(0,o)
$.EV=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aP,$.a8],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$b().h(0,o)
$.CP=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aI,$.J],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$b().h(0,o)
$.AJ=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aI,$.ap],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$b().h(0,o)
$.Cq=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aI,$.aJ],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$b().h(0,o)
$.Dc=o
o=H.a(["sick nasty","ill"],p)
n=$.F
k=H.a([$.am,$.bM],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$b().h(0,o)
$.ED=o
o=H.a(["gilded","gold leaf"],p)
n=$.v
k=H.a([$.D,$.W],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$b().h(0,o)
$.Cj=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.az,$.a6],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$b().h(0,o)
$.Bc=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.cb,$.at],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Ef=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.az,$.at],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Eg=o
o=H.a(["thunderous","thor's"],p)
n=$.H
k=H.a([$.aW,$.a6],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$b().h(0,o)
$.Fa=o
o=H.a(["screeching","dial up"],p)
n=$.H
k=H.a([$.aW,$.a6,$.X],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$b().h(0,o)
$.Es=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aV,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$b().h(0,o)
$.u3=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aV,$.au,$.a2],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$b().h(0,o)
$.wq=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.cb,$.aJ],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$b().h(0,o)
$.BB=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.aw,$.ai],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$b().h(0,o)
$.ws=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aU,$.am],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$b().h(0,o)
$.CJ=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.bR,$.aU],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$b().h(0,o)
$.u1=o
o=H.a(["post-ironic"],p)
n=$.H
k=H.a([$.aP,$.am,$.ai],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$b().h(0,o)
$.E_=o
o=H.a(["monstrous"],p)
n=$.H
k=H.a([$.bS,$.aW,$.aY],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$b().h(0,o)
$.Dl=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aJ,$.am,$.ai],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$b().h(0,o)
$.Eb=o
o=H.a(["golden"],p)
n=$.v
k=H.a([$.D,$.b5],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$b().h(0,o)
$.tY=o
o=H.a(["platinum"],p)
n=$.v
k=H.a([$.aQ,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$b().h(0,o)
$.mH=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bY,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$b().h(0,o)
$.wz=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.cg],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$b().h(0,o)
$.BW=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.au,$.ai],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.wG=o
o=H.a(["marble"],p)
n=$.v
k=H.a([$.au,$.ca],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.Co=o
o=H.a(["glitched"],p)
n=$.F
k=H.a([$.bt,$.a6],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$b().h(0,o)
$.ww=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aI,$.a6],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$b().h(0,o)
$.Bw=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aW,$.a8],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$b().h(0,o)
$.Df=o
o=H.a(["Simulacrum"],p)
n=$.H
k=H.a([$.ar,$.aP],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$b().h(0,o)
$.EI=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.ap,$.aP],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$b().h(0,o)
$.CG=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aI,$.aP],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$b().h(0,o)
$.DM=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.b5,$.aP],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$b().h(0,o)
$.Bp=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.am,$.aF,$.aU],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$b().h(0,o)
$.F1=o
o=H.a(["Brainy"],p)
n=$.H
k=H.a([$.X,$.bk],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$b().h(0,o)
$.AU=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.aq,$.bu],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$b().h(0,o)
$.CH=o
o=H.a(["C-4"],p)
n=$.v
k=H.a([$.bu,$.az],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$b().h(0,o)
$.B0=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a2,$.aQ,$.bt],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$b().h(0,o)
$.BT=o
o=H.a(["Plutonium"],p)
n=$.v
k=H.a([$.D,$.c2],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$b().h(0,o)
$.DQ=o
o=H.a(["Lithium"],p)
n=$.v
k=H.a([$.D,$.a6],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$b().h(0,o)
$.CZ=o
o=H.a(["Molten"],p)
n=$.v
k=H.a([$.D,$.aq],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$b().h(0,o)
$.Dk=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.v
k=H.a([$.au,$.aq],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$b().h(0,o)
$.D4=o
o=H.a(["Rusty"],p)
n=$.F
k=H.a([$.D,$.bR],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$b().h(0,o)
$.Ee=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.at,$.am,$.ai],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$b().h(0,o)
$.Ca=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aA,$.aU],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$b().h(0,o)
$.Ea=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.aw,$.aQ],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$b().h(0,o)
$.AC=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.aw,$.ak],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$b().h(0,o)
$.D8=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.au,$.bk],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$b().h(0,o)
$.EZ=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a2,$.X],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$b().h(0,o)
$.E2=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a2,$.au],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$b().h(0,o)
$.BK=o
o=H.a(["Elemental","Animated"],p)
n=$.v
k=H.a([$.a2,$.ar],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$b().h(0,o)
$.BP=o
o=H.a(["Gourmet"],p)
n=$.H
k=H.a([$.ap,$.ai],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$b().h(0,o)
$.Cn=o
o=H.a(["Stained Glass"],p)
n=$.v
k=H.a([$.aV,$.aw,$.b5],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$b().h(0,o)
$.EW=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aI,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$b().h(0,o)
$.Cg=o
o=H.a(["Locked"],p)
n=$.F
k=H.a([$.b4,$.bx],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$b().h(0,o)
$.D0=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.au,$.J],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$b().h(0,o)
$.BS=o
o=H.a(["Papyrus"],p)
n=$.v
k=H.a([$.J,$.aR],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$b().h(0,o)
$.DE=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.J,$.az],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$b().h(0,o)
$.C0=o
o=H.a(["Saucey"],p)
n=$.v
k=H.a([$.bt,$.bx,$.bS],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$b().h(0,o)
$.Em=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.J,$.bY],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$b().h(0,o)
$.D2=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.ak,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$b().h(0,o)
$.wm=o
o=H.a(["Possessed"],p)
n=$.F
k=H.a([$.bX,$.bk],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$b().h(0,o)
$.DZ=o
o=H.a(["Infernal"],p)
n=$.H
k=H.a([$.bX,$.aq],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$b().h(0,o)
$.CI=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.W,$.bl,$.u7,$.ar],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$b().h(0,o)
$.Ch=o
o=H.a(["Abominable"],p)
n=$.H
k=H.a([$.bk,$.bt],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$b().h(0,o)
$.AA=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aA,$.aC],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$b().h(0,o)
$.AH=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aA,$.br],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$b().h(0,o)
$.DB=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aA,$.bx],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$b().h(0,o)
$.DL=o
o=H.a(["Lit"],p)
n=$.H
k=H.a([$.am,$.aq],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$b().h(0,o)
$.CY=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a2,$.br],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$b().h(0,o)
$.Cz=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.br,$.b4],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$b().h(0,o)
$.Ff=o
o=H.a([],p)
n=$.q
k=H.a([$.br,$.bx],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.B3=o
o=H.a(["Ghost Rider's"],p)
n=$.a9
k=H.a([$.hk,$.aq,$.bX],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$b().h(0,o)
$.Ci=o
o=H.a(["Logical"],p)
n=$.H
k=H.a([$.X,$.bs],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$b().h(0,o)
$.D1=o
o=H.a(["Duelist's"],p)
n=$.a9
k=H.a([$.aJ,$.ai],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$b().h(0,o)
$.BH=o
o=H.a(["Silenced"],p)
n=$.F
k=H.a([$.aJ,$.ak],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$b().h(0,o)
$.EF=o
o=H.a(["Deudly"],p)
n=$.F
k=H.a([$.aJ,$.bR],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$b().h(0,o)
$.Bv=o
o=H.a(["Screaming"],p)
n=$.F
k=H.a([$.aW,$.aY],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$b().h(0,o)
$.Er=o
o=H.a(["Cacophonous"],p)
n=$.H
k=H.a([$.bS,$.a8],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$b().h(0,o)
$.B1=o
o=H.a(["Sublime"],p)
n=$.H
k=H.a([$.bS,$.aw],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$b().h(0,o)
$.F0=o
o=H.a(["Masterwork"],p)
n=$.v
k=H.a([$.bl,$.b5],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$b().h(0,o)
$.Da=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.ar,$.aY,$.bt,$.a2],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$b().h(0,o)
$.AW=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bt,$.ak],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$b().h(0,o)
$.E8=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.ap,$.bu],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$b().h(0,o)
$.DV=o
o=H.a(["Disguised"],p)
n=$.F
k=H.a([$.ak,$.aP],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$b().h(0,o)
$.BC=o
o=H.a(["Haunted"],p)
n=$.F
k=H.a([$.aF,$.bX],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$b().h(0,o)
$.Ct=o
o=H.a(["Cognitohazardous"],p)
n=$.F
k=H.a([$.bt,$.X],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$b().h(0,o)
$.Bj=o
o=H.a(["Staticy"],p)
n=$.F
k=H.a([$.aF,$.a6],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$b().h(0,o)
$.EX=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aV,$.c2],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$b().h(0,o)
$.CM=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aU,$.aF],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$b().h(0,o)
$.Fb=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bQ],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$b().h(0,o)
$.Bl=o
o=H.a(["High-Powered"],p)
n=$.F
k=H.a([$.bu,$.aJ],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$b().h(0,o)
$.Cu=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bu,$.ad],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$b().h(0,o)
$.Bm=o
o=H.a(["Down"],p)
n=$.v
k=H.a([$.b1,$.bA],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$b().h(0,o)
$.BE=o
o=H.a(["Prickly"],p)
n=$.v
k=H.a([$.aF,$.aL],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$b().h(0,o)
$.E1=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aF,$.ak,$.a6],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$b().h(0,o)
$.By=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.v
k=H.a([$.aL,$.at],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$b().h(0,o)
$.CN=o
o=H.a(["Nanofiber"],p)
n=$.v
k=H.a([$.O,$.X],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$b().h(0,o)
$.Dr=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aW],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$b().h(0,o)
$.Bf=o
o=H.a(["Silver"],p)
n=$.v
k=H.a([$.D,$.ai],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$b().h(0,o)
$.EH=o
o=H.a(["Withered"],p)
n=$.F
k=H.a([$.aC,$.aR],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$b().h(0,o)
$.Fr=o
o=H.a(["Shattered"],p)
n=$.F
k=H.a([$.aV,$.bR],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$b().h(0,o)
$.Ex=o
o=H.a(["Miner's"],p)
n=$.a9
k=H.a([$.au,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$b().h(0,o)
$.Di=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a8,$.ar],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$b().h(0,o)
$.EE=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bk,$.a6],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$b().h(0,o)
$.Dj=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.ak,$.a6],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$b().h(0,o)
$.AP=o
o=H.a(["Asbestos"],p)
n=$.v
k=H.a([$.au,$.bM],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$b().h(0,o)
$.AB=o
o=H.a(["Mercurial"],p)
n=$.v
k=H.a([$.bM,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$b().h(0,o)
$.Db=o
o=H.a(["Bulletproof"],p)
n=$.v
k=H.a([$.O,$.ad],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$b().h(0,o)
$.AZ=o
o=H.a(["Cotton"],p)
n=$.v
k=H.a([$.aR,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$b().h(0,o)
$.Bn=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bx,$.aQ],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$b().h(0,o)
$.AQ=o
o=H.a(["Brilliant"],p)
n=$.H
k=H.a([$.aQ,$.X],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$b().h(0,o)
$.AV=o
o=H.a(["Offensive"],p)
n=$.H
k=H.a([$.bx,$.X],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$b().h(0,o)
$.Dx=o
o=H.a(["Poached"],p)
n=$.F
k=H.a([$.bk,$.b5],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$b().h(0,o)
$.DR=o
o=H.a(["Tapestry"],p)
n=$.v
k=H.a([$.O,$.aw],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$b().h(0,o)
$.F3=o
o=H.a(["Itchy"],p)
n=$.H
k=H.a([$.O,$.aF],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$b().h(0,o)
$.CK=o
o=H.a(["Wishbone"],p)
n=$.v
k=H.a([$.bY,$.b0],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$b().h(0,o)
$.Fq=o
o=H.a(["Rattling"],p)
n=$.F
k=H.a([$.aW,$.b0],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$b().h(0,o)
$.E6=o
o=H.a(["Cranial"],p)
n=$.v
k=H.a([$.X,$.b0],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$b().h(0,o)
$.Br=o
o=H.a(["Humerus"],p)
n=$.v
k=H.a([$.aU,$.b0],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$b().h(0,o)
$.Cx=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aI,$.b1],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$b().h(0,o)
$.D9=o
o=H.a(["Pestersome","Irksome"],p)
n=$.H
k=H.a([$.aW,$.bx],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$b().h(0,o)
$.DG=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aW,$.bu],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$b().h(0,o)
$.EA=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bM,$.aI],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$b().h(0,o)
$.AE=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.v
k=H.a([$.aq,$.a2],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$b().h(0,o)
$.Fn=o
o=H.a(["Fiberglass"],p)
n=$.v
k=H.a([$.O,$.aV],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$b().h(0,o)
$.BZ=o
o=H.a(["Skull"],p)
n=$.v
k=H.a([$.b0,$.aY],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$b().h(0,o)
$.EL=o
o=H.a(["Enchanted"],p)
n=$.F
k=H.a([$.a2,$.bY],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$b().h(0,o)
$.BR=o
o=H.a(["Berserker's"],p)
n=$.a9
k=H.a([$.a2,$.bx],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$b().h(0,o)
$.AO=o
o=H.a(["Clerical"],p)
n=$.a9
k=H.a([$.a2,$.aI],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$b().h(0,o)
$.Bg=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aI,$.aq],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$b().h(0,o)
$.B7=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c2,$.aQ],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$b().h(0,o)
$.Fu=o
o=H.a(["Clever"],p)
n=$.H
k=H.a([$.X,$.bY],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$b().h(0,o)
$.Bh=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.b1,$.aq],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$b().h(0,o)
$.C1=o
o=H.a(["Crackling"],p)
n=$.F
k=H.a([$.aW,$.aq],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$b().h(0,o)
$.Bq=o
o=H.a(["Thumping"],p)
n=$.F
k=H.a([$.aW,$.ca],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$b().h(0,o)
$.F9=o
o=H.a(["Shrieking","Banshee"],p)
n=$.F
k=H.a([$.bX,$.aW],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$b().h(0,o)
$.EC=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.aU,$.bt],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$b().h(0,o)
$.F2=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aI,$.aR],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$b().h(0,o)
$.AD=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aA,$.aR],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$b().h(0,o)
$.Ec=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aU,$.ad],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$b().h(0,o)
$.CS=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a2,$.bM],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$b().h(0,o)
$.CV=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.aw,$.aC],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$b().h(0,o)
$.Fe=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.at,$.aU],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$b().h(0,o)
$.EM=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bS,$.aU],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$b().h(0,o)
$.wy=o
o=H.a(["Flowery"],p)
n=$.v
k=H.a([$.aw,$.aR],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$b().h(0,o)
$.C7=o
o=H.a(["Poison Ivy"],p)
n=$.v
k=H.a([$.bM,$.aR],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$b().h(0,o)
$.DT=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.F
k=H.a([$.a2,$.bA],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$b().h(0,o)
$.Fo=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aR,$.ap,$.aC],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$b().h(0,o)
$.Cb=o
o=H.a(["Lawful"],p)
n=$.H
k=H.a([$.b4,$.ar],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$b().h(0,o)
$.CT=o
o=H.a(["Chaotic"],p)
n=$.H
k=H.a([$.bx,$.ar],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$b().h(0,o)
$.Bb=o
o=H.a(["Hypothermic"],p)
n=$.F
k=H.a([$.aC,$.bs],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$b().h(0,o)
$.CA=o
o=H.a(["Hyperthermic"],p)
n=$.F
k=H.a([$.aC,$.aq],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$b().h(0,o)
$.Cy=o
o=H.a(["Shackled"],p)
n=$.F
k=H.a([$.b4,$.ca],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$b().h(0,o)
$.Et=o
o=H.a(["Poetic"],p)
n=$.H
k=H.a([$.X,$.aA],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$b().h(0,o)
$.DS=o
o=H.a(["Holographic"],p)
n=$.v
k=H.a([$.aQ,$.X,$.aV,$.a6],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$b().h(0,o)
$.Cv=o
o=H.a(["Casket","Coffin"],p)
n=$.v
k=H.a([$.W,$.aC],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$b().h(0,o)
$.B6=o
o=H.a(["Spectral"],p)
n=$.v
k=H.a([$.bX,$.a2],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$b().h(0,o)
$.ES=o
o=H.a(["Phoenix"],p)
n=$.v
k=H.a([$.aq,$.bA],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$b().h(0,o)
$.DH=o
o=H.a(["Tattered"],p)
n=$.F
k=H.a([$.O,$.aC],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$b().h(0,o)
$.F6=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a8,$.W],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$b().h(0,o)
$.Ft=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aF,$.b0],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$b().h(0,o)
$.AS=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aI,$.b0],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$b().h(0,o)
$.AR=o
o=H.a(["Calcium"],p)
n=$.v
k=H.a([$.b0,$.aI,$.ap],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$b().h(0,o)
$.B2=o
o=H.a(["Fleece"],p)
n=$.v
k=H.a([$.O,$.aq],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$b().h(0,o)
$.C4=o
o=H.a(["Potted"],p)
n=$.v
k=H.a([$.bQ,$.aR],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$b().h(0,o)
$.E0=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.v
k=H.a([$.D,$.ap],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$b().h(0,o)
$.B4=o
o=H.a(["Diseased"],p)
n=$.F
k=H.a([$.aC,$.bk],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$b().h(0,o)
$.Bz=o
o=H.a(["Porcupine"],p)
n=$.v
k=H.a([$.aL,$.cg],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$b().h(0,o)
$.DX=o
o=H.a(["Fanged"],p)
n=$.F
k=H.a([$.b0,$.aL],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$b().h(0,o)
$.BV=o
o=H.a(["Basalt"],p)
n=$.v
k=H.a([$.au,$.ak],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$b().h(0,o)
$.AL=o
o=H.a(["Obsidian"],p)
n=$.v
k=H.a([$.aV,$.ak],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$b().h(0,o)
$.Dw=o
o=H.a(["Fenestrated"],p)
n=$.v
k=H.a([$.aV,$.W],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$b().h(0,o)
$.BX=o
o=H.a(["Plexiglass"],p)
n=$.v
k=H.a([$.aV,$.az],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$b().h(0,o)
$.DP=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bQ,$.J],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$b().h(0,o)
$.Ba=o
o=H.a(["Fungal"],p)
n=$.v
k=H.a([$.aR,$.bS],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$b().h(0,o)
$.Cf=o
o=H.a(["Thorny"],p)
n=$.F
k=H.a([$.aR,$.aL],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$b().h(0,o)
$.F8=o
o=H.a(["Bulbed"],p)
n=$.F
k=H.a([$.aR,$.ad],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$b().h(0,o)
$.AY=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aV,$.aJ],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Cl=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aR,$.cb],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$b().h(0,o)
$.DN=o
o=H.a(["Cellulose"],p)
n=$.v
k=H.a([$.aR,$.az],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$b().h(0,o)
$.B9=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a8,$.aY],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$b().h(0,o)
$.Cw=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bt,$.a8],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$b().h(0,o)
$.Dt=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bt,$.a6,$.a8],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$b().h(0,o)
$.Bs=o
o=H.a(["Burdock"],p)
n=$.v
k=H.a([$.aR,$.cg],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$b().h(0,o)
$.B_=o
o=H.a(["Necrotic"],p)
n=$.F
k=H.a([$.b0,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.v
k=H.a([$.b0,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.F
k=H.a([$.b0,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.b0,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.v
k=H.a([$.b0,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.b0,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.H
k=H.a([$.W,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.v
k=H.a([$.W,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.v
k=H.a([$.W,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.F
k=H.a([$.W,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.v
k=H.a([$.W,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.v
k=H.a([$.W,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.W,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.v
k=H.a([$.W,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.W,$.bY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.W,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.a9
k=H.a([$.W,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.v
k=H.a([$.W,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.v
k=H.a([$.W,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.v
k=H.a([$.W,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.W,$.au],l)
H.a([],p)
$.$get$b().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.v
k=H.a([$.az,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.J,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.v
k=H.a([$.J,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.J,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.v
k=H.a([$.au,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.au,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.v
k=H.a([$.au,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.v
k=H.a([$.au,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.v
k=H.a([$.au,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.v
k=H.a([$.au,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.v
k=H.a([$.au,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.v
k=H.a([$.au,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.F
k=H.a([$.au,$.cg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.F
k=H.a([$.X,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.F
k=H.a([$.O,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.H
k=H.a([$.O,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.at],l)
H.a([],p)
$.$get$b().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.H
k=H.a([$.O,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.F
k=H.a([$.O,$.ca],l)
H.a([],p)
$.$get$b().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.H
k=H.a([$.O,$.bY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.H
k=H.a([$.O,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.v
k=H.a([$.O,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.v
k=H.a([$.O,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.v
k=H.a([$.O,$.bM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.v
k=H.a([$.O,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.v
k=H.a([$.O,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.v
k=H.a([$.O,$.bx],l)
H.a([],p)
$.$get$b().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.O,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.v
k=H.a([$.O,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.v
k=H.a([$.O,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.v
k=H.a([$.O,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.v
k=H.a([$.O,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.a9
k=H.a([$.X,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.v
k=H.a([$.a2,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.v
k=H.a([$.aR,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.v
k=H.a([$.az,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.v
k=H.a([$.N,$.T],l)
H.a([],p)
$.$get$b().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.H
k=H.a([$.X,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.H
k=H.a([$.bl,$.aP,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.v
k=H.a([$.bt,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bt,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.a9
k=H.a([$.bt,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.a9
k=H.a([$.Z,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.a9
k=H.a([$.X,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.v
k=H.a([$.Z,$.az,$.br,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.Z,$.dw,$.W,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.a9
k=H.a([$.ak,$.a2,$.bl,$.aF,$.aY],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$b().h(0,o)
$.E3=o
o=H.a(["Kingly"],p)
n=$.a9
k=H.a([$.aY,$.ad,$.ca,$.a2,$.bl],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$b().h(0,o)
$.CR=o
o=H.a(["Jack"],p)
n=$.a9
k=H.a([$.aL,$.at,$.D,$.ak],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$b().h(0,o)
$.CL=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.Z,$.aP,$.W,$.N,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.Z,$.av,$.J,$.D,$.X,$.N],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.Z,$.av,$.J,$.X,$.N,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.Z,$.aC,$.J,$.X,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.a9
k=H.a([$.Z,$.aQ,$.D,$.aL,$.at,$.fe],l)
H.a([],p)
$.$get$b().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.a9
k=H.a([$.Z,$.J,$.bx,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.a9
k=H.a([$.Z,$.a2,$.O,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.a9
k=H.a([$.Z,$.aF,$.b0,$.D,$.fd,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.a9
k=H.a([$.Z,$.au,$.ai,$.jv,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.F
k=H.a([$.Z,$.O,$.b5,$.aw,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.Z,$.D,$.b5,$.aw,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.Z,$.az,$.a6,$.ak,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.Z,$.O,$.X,$.a2,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.Z,$.O,$.X,$.aw,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.F
k=$.Z
j=$.J
i=$.X
i=H.a([k,j,i,$.av,i,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.v
i=H.a([$.Z,$.aw,$.bQ,$.ad,$.el,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.a9
i=H.a([$.Z,$.av,$.J,$.bx,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.a9
i=H.a([$.a2,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.J,$.X,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.Z,$.D,$.ak,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.F
i=H.a([$.Z,$.D,$.aV,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.Z,$.aP,$.W,$.am,$.br,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.Z,$.aq,$.D,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.Z,$.a6,$.J,$.av,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.Z,$.W,$.ar,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.a9
i=H.a([$.Z,$.bl,$.bA,$.aQ,$.a8,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.v
i=H.a([$.Z,$.aI,$.aV,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.v
i=H.a([$.Z,$.aQ,$.bY,$.au,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.a9
i=H.a([$.Z,$.aF,$.au,$.ai,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.a9
i=H.a([$.Z,$.ap,$.bx,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.a9
i=H.a([$.Z,$.D,$.a8,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.H
i=H.a([$.Z,$.aV,$.c2,$.aQ,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.v
i=H.a([$.D,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.a9
i=H.a([$.D,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.v
i=H.a([$.D,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.v
i=H.a([$.D,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.F
i=H.a([$.D,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.F
i=H.a([$.D,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.v
i=H.a([$.D,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.v
i=H.a([$.bQ,$.au],l)
H.a([],p)
$.$get$b().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.v
i=H.a([$.bQ,$.cb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.H
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.v
i=H.a([$.bQ,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.v
i=H.a([$.bQ,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.v
i=H.a([$.bQ,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.v
i=H.a([$.bQ,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.F
i=H.a([$.bQ,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.v
i=H.a([$.bQ,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.F
i=H.a([$.bQ,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.H
i=H.a([$.bR,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.F
i=H.a([$.bR,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.H
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.F
i=H.a([$.bR,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.v
i=H.a([$.bR,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.F
i=H.a([$.bR,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.a9
i=H.a([$.bR,$.bx],l)
H.a([],p)
$.$get$b().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.v
i=H.a([$.bR,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.v
i=H.a([$.bR,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.v
i=H.a([$.bR,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.a9
i=H.a([$.W,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.v
i=H.a([$.W,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.v
i=H.a([$.W,$.cb],l)
H.a([],p)
$.$get$b().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.v
i=H.a([$.az,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.cb,$.br],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.F
i=H.a([$.cb,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.cb,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.J,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.J,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.v
i=H.a([$.au,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.v
i=H.a([$.au,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.H
i=H.a([$.au,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.H
i=H.a([$.bX,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.v
i=H.a([$.bX,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.H
i=H.a([$.bX,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.v
i=H.a([$.bX,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.v
i=H.a([$.bX,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.v
i=H.a([$.bX,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.H
i=H.a([$.bX,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.v
i=H.a([$.bk,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.v
i=H.a([$.bk,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.v
i=H.a([$.bk,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.F
i=H.a([$.bk,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bt,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.v
i=H.a([$.bt,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.F
i=H.a([$.bt,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bt,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.F
i=H.a([$.cg,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.v
i=H.a([$.cg,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.a9
i=H.a([$.cg,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.v
i=H.a([$.cg,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.v
i=H.a([$.aR,$.bA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.F
i=H.a([$.aR,$.bY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.v
i=H.a([$.aR,$.ak],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.v
i=H.a([$.aR,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.v
i=H.a([$.aR,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.v
i=H.a([$.aR,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.v
i=H.a([$.aR,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.F
i=H.a([$.aR,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.F
i=H.a([$.bA,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.v
i=H.a([$.bA,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.v
i=H.a([$.bA,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.v
i=H.a([$.bA,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.v
i=H.a([$.bA,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.v
i=H.a([$.bA,$.bM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.v
i=H.a([$.bA,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.ud
i=H.a([$.bA,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.F
i=H.a([$.bA,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.H
i=H.a([$.bS,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.at,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.at,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.H
i=H.a([$.aY,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aI,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.H
i=H.a([$.ap,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.v
i=H.a([$.ap,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.H
i=H.a([$.ap,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.ca,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.ca,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aJ,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aJ,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.a9
i=H.a([$.aJ,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.a9
i=H.a([$.aJ,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.F
i=H.a([$.aJ,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.F
i=H.a([$.aJ,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.a9
i=H.a([$.aJ,$.bx],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aJ,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aJ,$.c2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aJ,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.F
i=H.a([$.aJ,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.v
i=H.a([$.aQ,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.v
i=H.a([$.a8,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.v
i=H.a([$.bY,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.v
i=H.a([$.bY,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.a9
i=H.a([$.bY,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.a9
i=H.a([$.aQ,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.F
i=H.a([$.aQ,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.H
i=H.a([$.aQ,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.F
i=H.a([$.aQ,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.a9
i=H.a([$.ak,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.ak,$.a2,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.F
i=H.a([$.ak,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.H
i=H.a([$.ak,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.ak,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.a9
i=H.a([$.ak,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.a9
i=H.a([$.br,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.br,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.br,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aI,$.c2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.F
i=H.a([$.bM,$.c2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.F
i=H.a([$.aC,$.c2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aC,$.bu],l)
H.a([],p)
$.$get$b().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.F
i=H.a([$.a6,$.aC],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aC,$.b5],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.F
i=H.a([$.aC,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.H
i=H.a([$.aC,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bu,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bu,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bu,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aC,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bu,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a6,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bu,$.bx],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bu,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.F
i=H.a([$.bu,$.bM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bu,$.bs],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bs,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a2,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.F
i=H.a([$.a6,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bx,$.bM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bM,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bM,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bM,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.F
i=H.a([$.bM,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.F
i=H.a([$.bM,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bM,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.F
i=H.a([$.a8,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a8,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a8,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a8,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.a9
i=H.a([$.a8,$.b4],l)
H.a([],p)
$.$get$b().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a8,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a8,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a8,$.bx],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a8,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bx,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bx,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.a9
i=H.a([$.X,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.b4,$.aI],l)
H.a([],p)
$.$get$b().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.b4,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.b4,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.F
i=H.a([$.b4,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.H
i=H.a([$.aw,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.F
i=H.a([$.b1,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.b1,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.H
i=H.a([$.ap,$.b1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.H
i=H.a([$.aA,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.H
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.F
i=H.a([$.ar,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.F
i=H.a([$.X,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.ar,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.a9
i=H.a([$.aA,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.F
i=H.a([$.X,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.F
i=H.a([$.aA,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.F
i=H.a([$.aA,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.F
i=H.a([$.aA,$.aW,$.av,$.jw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.F
i=H.a([$.ap,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.F
i=H.a([$.ap,$.a2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.F
i=H.a([$.ap,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.F
i=H.a([$.a2,$.ai],l)
H.a([],p)
$.$get$b().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.F
i=H.a([$.ap,$.aU,$.a6,$.aW],l)
H.a([],p)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.v
i=H.a([$.D,$.bX],l)
H.a([],p)
$.$get$b().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.b0,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.F
i=H.a([$.bR,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.W,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.az,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.F
i=H.a([$.cb,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.v
i=H.a([$.J,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.F
i=H.a([$.J,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.a9
i=H.a([$.aV,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.F
i=H.a([$.bk,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.F
i=H.a([$.aq,$.bt],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.v
i=H.a([$.aA,$.cg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.a9
i=H.a([$.aR,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.F
i=H.a([$.aI,$.bS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.H
i=H.a([$.bl,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.a9
i=H.a([$.bY,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.F
i=H.a([$.ak,$.aq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.F
i=H.a([$.aq,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.F
i=H.a([$.aq,$.bM],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.F
i=H.a([$.aq,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.F
i=H.a([$.aC,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.F
i=H.a([$.b5,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.F
i=H.a([$.b5,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.F
i=H.a([$.b5,$.am],l)
H.a([],p)
$.$get$b().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.F
i=H.a([$.aF,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.F
i=H.a([$.aW,$.ar],l)
H.a([],p)
$.$get$b().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.F
i=H.a([$.aA,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.F
i=H.a([$.a2,$.aA],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.F
i=H.a([$.N,$.T,$.bl],l)
H.a([],p)
$.$get$b().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.F
i=H.a([$.N,$.T,$.bl,$.aP,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.F
i=H.a([$.N,$.T,$.bl,$.cg],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.F
i=H.a([$.au,$.bR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.F
i=H.a([$.bA,$.bR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.F
i=H.a([$.aR,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.F
i=H.a([$.a2,$.aR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.F
i=H.a([$.aY,$.aF],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.F
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chipped",l,n,o,0))
if($.xh==null){o=$.mD
n=$.aL
l=$.at
k=$.b0
j=new U.ah(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a0(null,null,null,m),0,3)
j.K("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.xh=j}o=$.$get$al();(o&&C.b).sm(o,0)
o=$.$get$al()
n=$.O
l=$.wy
k=new U.ah(n,null,null,null,"Speedo",!1,P.a0(null,null,null,m),0,3)
k.K("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$al()
o=$.fe
n=$.at
l=$.D
j=$.aL
i=new U.ah(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a0(null,null,null,m),0,3)
i.K("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$al()
k=$.u_
o=$.ad
j=$.D
l=new U.ah(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a0(null,null,null,m),0,3)
l.K("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$al()
i=$.u9
k=$.aJ
j=$.D
o=new U.ah(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a0(null,null,null,m),0,3)
o.K("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$al()
l=$.u6
i=$.aJ
j=$.D
k=new U.ah(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a0(null,null,null,m),0,3)
k.K("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$al()
o=$.wL
l=$.aJ
j=$.D
i=new U.ah(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a0(null,null,null,m),0,3)
i.K("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$al()
k=$.wl
o=$.aL
j=$.at
l=$.D
n=new U.ah(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a0(null,null,null,m),0,3)
n.K("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$al()
i=$.tV
k=$.aL
l=$.at
j=$.D
o=new U.ah(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a0(null,null,null,m),0,3)
o.K("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$al()
n=$.hl
i=$.ad
j=$.bQ
l=new U.ah(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a0(null,null,null,m),0,3)
l.K("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$al()
o=$.wO
n=$.at
j=$.D
i=new U.ah(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a0(null,null,null,m),0,3)
i.K("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$al()
l=$.wo
o=$.at
j=$.D
n=new U.ah(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a0(null,null,null,m),0,3)
n.K("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$al()
i=$.wu
l=$.aL
j=$.D
o=new U.ah(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a0(null,null,null,m),0,3)
o.K("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$al()
n=$.u5
i=$.bA
j=$.bt
l=new U.ah(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a0(null,null,null,m),0,3)
l.K("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$al()
o=$.el
n=$.ca
j=$.au
i=$.ad
k=new U.ah(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a0(null,null,null,m),0,3)
k.K("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$al()
l=$.tW
o=$.az
i=$.bY
j=new U.ah(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a0(null,null,null,m),0,3)
j.K("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$al()
k=$.u4
l=$.D
i=$.aL
o=new U.ah(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a0(null,null,null,m),0,3)
o.K("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$al()
j=$.wQ
k=$.W
i=$.ad
l=new U.ah(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a0(null,null,null,m),0,3)
l.K("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$al()
o=$.wS
j=$.b4
i=$.O
k=new U.ah(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a0(null,null,null,m),0,3)
k.K("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$al()
l=$.tS
o=$.aJ
i=$.au
j=$.O
n=$.aL
h=new U.ah(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a0(null,null,null,m),0,3)
h.K("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$al()
k=$.jw
l=$.W
n=$.ad
j=new U.ah(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a0(null,null,null,m),0,3)
j.K("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$al()
h=$.ju
k=$.W
n=new U.ah(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a0(null,null,null,m),0,3)
n.K("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$al()
j=$.av
h=$.J
k=$.ad
l=new U.ah(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a0(null,null,null,m),0,3)
l.K("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$al()
n=$.wI
j=$.D
k=$.ad
h=new U.ah(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a0(null,null,null,m),0,3)
h.K("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$al()
l=$.tR
n=$.at
k=$.D
j=$.ad
i=new U.ah(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a0(null,null,null,m),0,3)
i.K("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.wD
l=$.W
j=$.aL
k=new U.ah(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a0(null,null,null,m),0,3)
k.K("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.fd
h=$.D
j=$.ad
l=new U.ah(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a0(null,null,null,m),0,3)
l.K("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.wn
i=$.W
j=$.ad
h=new U.ah(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a0(null,null,null,m),0,3)
h.K("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.wT
k=$.az
j=$.ad
i=new U.ah(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a0(null,null,null,m),0,3)
i.K("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.wP
l=$.W
j=$.aJ
k=new U.ah(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a0(null,null,null,m),0,3)
k.K("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.wN
h=$.D
j=$.at
l=new U.ah(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a0(null,null,null,m),0,3)
l.K("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.u2
i=$.D
j=$.aJ
h=new U.ah(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a0(null,null,null,m),0,3)
h.K("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.mE
k=$.D
j=$.bu
i=new U.ah(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a0(null,null,null,m),0,3)
i.K("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.el
l=$.cb
j=$.ad
k=new U.ah(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a0(null,null,null,m),0,3)
k.K("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.wR
h=$.D
j=$.aL
l=new U.ah(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a0(null,null,null,m),0,3)
l.K("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.mC
i=$.J
j=$.at
h=new U.ah(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a0(null,null,null,m),0,3)
h.K("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.tX
k=$.D
j=$.ad
i=new U.ah(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a0(null,null,null,m),0,3)
i.K("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.fc
l=$.b1
j=$.O
k=new U.ah(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a0(null,null,null,m),0,3)
k.K("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.hk
h=$.D
j=$.b4
l=new U.ah(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a0(null,null,null,m),0,3)
l.K("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.uc
i=$.D
j=$.ad
h=new U.ah(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a0(null,null,null,m),0,3)
h.K("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.wM
k=$.D
j=$.ad
i=new U.ah(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a0(null,null,null,m),0,3)
i.K("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.ub
l=$.W
j=$.ad
k=new U.ah(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a0(null,null,null,m),0,3)
k.K("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.u7
h=$.W
j=$.aC
l=new U.ah(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a0(null,null,null,m),0,3)
l.K("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.u8
i=$.D
j=$.at
h=new U.ah(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a0(null,null,null,m),0,3)
h.K("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.mG
k=$.D
j=$.X
i=new U.ah(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a0(null,null,null,m),0,3)
i.K("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.jv
l=$.au
j=$.ca
k=new U.ah(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a0(null,null,null,m),0,3)
k.K("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.wx
h=$.W
j=$.ad
l=new U.ah(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a0(null,null,null,m),0,3)
l.K("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$al()
k=$.wC
i=$.D
j=$.at
h=new U.ah(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a0(null,null,null,m),0,3)
h.K("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$al()
l=$.wK
k=$.D
j=$.at
i=new U.ah(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a0(null,null,null,m),0,3)
i.K("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$al()
h=$.wJ
l=$.D
j=$.ca
k=new U.ah(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a0(null,null,null,m),0,3)
k.K("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$al()
i=$.dw
h=$.W
j=$.ad
m=new U.ah(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a0(null,null,null,m),0,3)
m.K("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bH("Duttle","Dut",null,null)
$.$get$bP().push(m)
$.w5=m
m=new S.bH("Salamander","GLUB",null,null)
$.$get$bP().push(m)
$.tG=m
m=new S.bH("Crocodile","NAK",null,null)
$.$get$bP().push(m)
$.dZ=m
m=new S.bH("Iguana","thip",null,null)
$.$get$bP().push(m)
$.eh=m
m=new S.bH("Turtle","click",null,null)
$.$get$bP().push(m)
$.f5=m
m=new S.bH("Skeleton","rattle",null,null)
$.$get$bP().push(m)
$.dL=m
m=new S.bH("Robot","BEEP",null,null)
$.$get$bP().push(m)
$.f3=m
m=new S.bH("Chameleon","BLEP",null,null)
$.$get$bP().push(m)
$.iC=m
m=new S.bH("Axolotl","BARP",null,null)
$.$get$bP().push(m)
$.tA=m
m=new S.bH("Lizard","bleb",null,null)
$.$get$bP().push(m)
$.lY=m
m=new S.bH("Snake","hiss",null,null)
$.$get$bP().push(m)
$.tI=m
m=new S.bH("Alligator","nak",null,null)
$.$get$bP().push(m)
$.iB=m
m=new S.bH("Mole","snuff",null,null)
$.$get$bP().push(m)
$.w6=m
m=new S.bH("Bird","tweet",null,null)
$.$get$bP().push(m)
$.lX=m
m=new S.bH("Wolf","howl",null,null)
$.$get$bP().push(m)
$.m3=m
m=new S.bH("Newt","skitter",null,null)
$.$get$bP().push(m)
$.w7=m
m=new S.bH("Spider","skitter",null,null)
$.$get$bP().push(m)
$.iI=m
m=new S.bH("Cupid","flappa",null,null)
$.$get$bP().push(m)
$.iD=m
m=new S.bH("Dragon","roar",null,null)
$.$get$bP().push(m)
$.h8=m
m=new S.il("Prospitian","murmur",null,null)
$.$get$bP().push(m)
$.zY=m
m=new S.il("Dersite","mutter",null,null)
$.$get$bP().push(m)
$.zV=m
m=new S.mm("Horror Terror","a;lkjdf",null,null)
$.$get$bP().push(m)
$.zX=m
$.zZ=H.a([$.tI,$.iB,$.w7,$.tG,$.eh,$.dZ,$.f5,$.iC,$.tA,$.lY],[S.bH])
$.hd=new T.c3(0,"spices")
m=$.A0
$.f_=new T.c3(m,"fresh baked bread")
$.cz=new T.c3(m,"sweetness")
$.c8=new T.c3(m,"nature")
$.m2=new T.c3(0,"salt")
k=$.A_
$.d5=new T.c3(k,"rot")
$.zW=new T.c3(k,"feet")
$.f2=new T.c3(0,"oil")
$.tC=new T.c3(0,"chlorine")
$.hb=new T.c3(0,"nothing in particular")
$.eg=new T.c3(0,"gunpowder")
$.ha=new T.c3(0,"must")
$.cF=new T.c3(m,"zoo animals")
$.e_=new T.c3(k,"sweat")
$.iH=new T.c3(0,"ozone")
$.c7=new T.c3(0,"deceit")
$.dg=new T.c3(k,"blood")
$.f4=new T.c3(k,"smoke")
$.c0=new K.bW(k,"creepy")
$.aO=new K.bW(m,"calm")
$.ce=new K.bW(k,"frantic")
$.m_=new K.bW(0,"like nothing")
$.cl=new K.bW(m,"energizing")
$.cE=new K.bW(0,"studious")
$.du=new K.bW(0,"dangerous")
$.dI=new K.bW(0,"glamorous")
$.hc=new K.bW(0,"romantic")
$.dt=new K.bW(m,"creative")
$.lZ=new K.bW(0,"lucky")
$.dv=new K.bW(0,"happy")
$.dJ=new K.bW(0,"heroic")
$.d6=new K.bW(k,"stupid")
$.lZ=new K.bW(0,"lucky")
$.w4=new K.bW(0,"claustrophobic")
$.m0=new K.bW(0,"overheated")
$.f1=new K.bW(k,"confusing")
$.cD=new K.bW(0,"contemplatative")
$.cY=new M.bC(0,"clanking")
$.cy=new M.bC(0,"laughing")
$.b3=new M.bC(m,"rustling")
$.ej=new M.bC(k,"screaming")
$.iF=new M.bC(k,"foot steps")
$.f0=new M.bC(k,"beeping")
$.w9=new M.bC(k,"whispering")
$.ef=new M.bC(0,"clacking")
$.cC=new M.bC(0,"applause")
$.ei=new M.bC(0,"jazz")
$.tE=new M.bC(0,"disco")
$.h9=new M.bC(0,"drums")
$.iE=new M.bC(0,"echoing")
$.m1=new M.bC(k,"roaring")
$.iG=new M.bC(k,"gunfire")
$.cM=new M.bC(0,"music")
$.tH=new M.bC(0,"singing")
$.tB=new M.bC(0,"chanting")
$.f6=new M.bC(0,"whistling")
$.dh=new M.bC(m,"nature")
$.tD=new M.bC(0,"croaking")
$.dK=new M.bC(0,"silence")
$.tF=new M.bC(0,"pulsing")
$.w8=new M.bC(0,"ticking")
m=H.a([],p)
o=[X.G,P.V]
n=A.a4
l=E.M
k=[l]
j=[A.fP]
m=new S.mW(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Knight",3,!0,!1)
$.Gn=m
m=P.l(H.a([new E.M($.cs,0.4,!1)],k),l)
i=H.a([],p)
m=new S.op(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Seer",6,!0,!1)
$.Gz=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kT("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Bard",9,!0,!1)
$.Gi=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mj("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Heir",8,!0,!1)
$.Gl=m
m=H.a([],p)
m=new U.ng(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Maid",0,!0,!1)
$.Gq=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.of(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Rogue",4,!0,!1)
$.Gv=m
m=H.a([],p)
m=new V.nS(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Page",1,!0,!1)
$.Gt=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pj(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Thief",7,!0,!1)
$.GC=m
m=P.l(H.a([new E.M($.cs,0.1,!1)],k),l)
i=H.a([],p)
m=new R.p6(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Sylph",5,!0,!1)
$.GB=m
m=H.a([],p)
m=new N.o7("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Prince",10,!0,!1)
$.Gu=m
m=P.l(H.a([new E.M($.cs,0.1,!1)],k),l)
i=H.a([],p)
m=new M.pN("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Witch",11,!0,!1)
$.GE=m
m=P.l(H.a([new E.M($.cs,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nf("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Mage",2,!0,!1)
$.Gp=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.M($.cs,3,!1),new E.M($.v1,-2,!1)],k),l)
e=H.a([],p)
m=new E.pJ("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Waste",12,!1,!1)
$.GD=m
m=H.a([],p)
m=new Y.ol("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Scout",13,!1,!1)
$.Gx=m
m=P.l(H.a([new E.M($.cs,0.5,!1)],k),l)
i=H.a([],p)
m=new L.om("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Scribe",15,!1,!1)
$.Gy=m
m=P.l(H.a([new E.M($.cs,0.5,!1)],k),l)
i=H.a([],p)
m=new E.oj(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Sage",14,!1,!1)
$.Gw=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mh("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Guide",16,!1,!1)
$.Gk=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.M($.cs,3,!1)],k),l)
g=H.a([],p)
m=new Y.mg(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Grace",17,!1,!1)
$.Gj=m
m=P.l(H.a([new E.M($.cs,0.1,!1)],k),l)
i=H.a([],p)
m=new E.ns("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Muse",18,!1,!1)
$.Gr=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.I(null,null,n)
h=P.l(H.a([new E.M($.cs,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nd("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Lord",19,!1,!1)
$.Go=m
m=P.l(H.a([new E.M($.cs,-0.1,!1),new E.M($.dz,1,!1)],k),l)
i=H.a([],p)
m=new Y.ow("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Smith",20,!1,!1)
$.GA=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.l(H.a([new E.M($.cs,4,!1),new E.M($.v1,-3,!1)],k),l)
e=H.a([],p)
m=new X.mq("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.w(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ab("Human",21,!1,!1)
$.Gm=m
$.Gs=T.Gh("Null",255,!1,!0)
m=A.dW
i=P.C
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#00ff00"),!0)
h.j(0,$.b8,L.e("#EFEFEF"),!0)
h.j(0,$.b7,L.e("#DEDEDE"),!0)
h.j(0,$.bh,L.e("#FF2106"),!0)
h.j(0,$.bg,L.e("#B01200"),!0)
h.j(0,$.ba,L.e("#2F2F30"),!0)
h.j(0,$.bb,L.e("#1D1D1D"),!0)
h.j(0,$.b9,L.e("#080808"),!0)
h.j(0,$.bf,L.e("#030303"),!0)
h.j(0,$.be,L.e("#242424"),!0)
h.j(0,$.bd,L.e("#333333"),!0)
h.j(0,$.bc,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.M($.dz,2,!0),new E.M($.eA,1,!0),new E.M($.hQ,-2,!0)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new N.oz(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(0,"Space",!0,!1)
$.zk=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#ff0000"),!0)
a.j(0,$.b8,L.e("#FF2106"),!0)
a.j(0,$.b7,L.e("#AD1604"),!0)
a.j(0,$.bh,L.e("#030303"),!0)
a.j(0,$.bg,L.e("#242424"),!0)
a.j(0,$.ba,L.e("#510606"),!0)
a.j(0,$.bb,L.e("#3C0404"),!0)
a.j(0,$.b9,L.e("#1F0000"),!0)
a.j(0,$.bf,L.e("#B70D0E"),!0)
a.j(0,$.be,L.e("#970203"),!0)
a.j(0,$.bd,L.e("#8E1516"),!0)
a.j(0,$.bc,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.M($.hP,2,!0),new E.M($.hQ,1,!0),new E.M($.fq,-2,!0)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new N.pk(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(1,"Time",!0,!1)
$.zl=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#3399ff"),!0)
h.j(0,$.b8,L.e("#10E0FF"),!0)
h.j(0,$.b7,L.e("#00A4BB"),!0)
h.j(0,$.bh,L.e("#FEFD49"),!0)
h.j(0,$.bg,L.e("#D6D601"),!0)
h.j(0,$.ba,L.e("#0052F3"),!0)
h.j(0,$.bb,L.e("#0046D1"),!0)
h.j(0,$.b9,L.e("#003396"),!0)
h.j(0,$.bf,L.e("#0087EB"),!0)
h.j(0,$.be,L.e("#0070ED"),!0)
h.j(0,$.bd,L.e("#006BE1"),!0)
h.j(0,$.bc,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.M($.hQ,2,!0),new E.M($.da,1,!0),new E.M($.eA,-1,!0),new E.M($.eB,-1,!0),new E.M($.cs,0.05,!1)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new T.l0(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(2,"Breath",!0,!1)
$.z8=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#003300"),!0)
a.j(0,$.b8,L.e("#0F0F0F"),!0)
a.j(0,$.b7,L.e("#010101"),!0)
a.j(0,$.bh,L.e("#E8C15E"),!0)
a.j(0,$.bg,L.e("#C7A140"),!0)
a.j(0,$.ba,L.e("#1E211E"),!0)
a.j(0,$.bb,L.e("#141614"),!0)
a.j(0,$.b9,L.e("#0B0D0B"),!0)
a.j(0,$.bf,L.e("#204020"),!0)
a.j(0,$.be,L.e("#11200F"),!0)
a.j(0,$.bd,L.e("#192C16"),!0)
a.j(0,$.bc,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.M($.dz,2,!0),new E.M($.fq,1,!0),new E.M($.hP,-1,!0),new E.M($.eA,-1,!0),new E.M($.cs,0.01,!1)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new U.ls(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(3,"Doom",!0,!1)
$.z9=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#993300"),!0)
h.j(0,$.b8,L.e("#BA1016"),!0)
h.j(0,$.b7,L.e("#820B0F"),!0)
h.j(0,$.bh,L.e("#381B76"),!0)
h.j(0,$.bg,L.e("#1E0C47"),!0)
h.j(0,$.ba,L.e("#290704"),!0)
h.j(0,$.bb,L.e("#230200"),!0)
h.j(0,$.b9,L.e("#110000"),!0)
h.j(0,$.bf,L.e("#3D190A"),!0)
h.j(0,$.be,L.e("#2C1207"),!0)
h.j(0,$.bd,L.e("#5C2913"),!0)
h.j(0,$.bc,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.M($.eB,2,!0),new E.M($.da,1,!0),new E.M($.dz,-2,!0)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new T.kZ(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(4,"Blood",!0,!1)
$.z7=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#ff3399"),!0)
a.j(0,$.b8,L.e("#BD1864"),!0)
a.j(0,$.b7,L.e("#780F3F"),!0)
a.j(0,$.bh,L.e("#1D572E"),!0)
a.j(0,$.bg,L.e("#11371D"),!0)
a.j(0,$.ba,L.e("#4C1026"),!0)
a.j(0,$.bb,L.e("#3C0D1F"),!0)
a.j(0,$.b9,L.e("#260914"),!0)
a.j(0,$.bf,L.e("#6B0829"),!0)
a.j(0,$.be,L.e("#4A0818"),!0)
a.j(0,$.bd,L.e("#55142A"),!0)
a.j(0,$.bc,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.M($.eB,1,!0),new E.kM(null,1,!0)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new T.mi(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(5,"Heart",!0,!1)
$.zb=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#3da35a"),!0)
h.j(0,$.b8,L.e("#06FFC9"),!0)
h.j(0,$.b7,L.e("#04A885"),!0)
h.j(0,$.bh,L.e("#6E0E2E"),!0)
h.j(0,$.bg,L.e("#4A0818"),!0)
h.j(0,$.ba,L.e("#1D572E"),!0)
h.j(0,$.bb,L.e("#164524"),!0)
h.j(0,$.b9,L.e("#11371D"),!0)
h.j(0,$.bf,L.e("#3DA35A"),!0)
h.j(0,$.be,L.e("#2E7A43"),!0)
h.j(0,$.bd,L.e("#3B7E4F"),!0)
h.j(0,$.bc,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.M($.fq,2,!0),new E.M($.hP,1,!0),new E.M($.dz,-2,!0)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new V.nr(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(6,"Mind",!0,!1)
$.zg=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#ff9933"),!0)
a.j(0,$.b8,L.e("#FEFD49"),!0)
a.j(0,$.b7,L.e("#FEC910"),!0)
a.j(0,$.bh,L.e("#10E0FF"),!0)
a.j(0,$.bg,L.e("#00A4BB"),!0)
a.j(0,$.ba,L.e("#FA4900"),!0)
a.j(0,$.bb,L.e("#E94200"),!0)
a.j(0,$.b9,L.e("#C33700"),!0)
a.j(0,$.bf,L.e("#FF8800"),!0)
a.j(0,$.be,L.e("#D66E04"),!0)
a.j(0,$.bd,L.e("#E76700"),!0)
a.j(0,$.bc,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.M($.hO,2,!0),new E.M($.fq,1,!0),new E.M($.da,-1,!0),new E.M($.eA,-1,!0),new E.M($.cs,0.2,!1)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new G.n0(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(7,"Light",!0,!1)
$.zf=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#000066"),!0)
h.j(0,$.b8,L.e("#0B1030"),!0)
h.j(0,$.b7,L.e("#04091A"),!0)
h.j(0,$.bh,L.e("#CCC4B5"),!0)
h.j(0,$.bg,L.e("#A89F8D"),!0)
h.j(0,$.ba,L.e("#00164F"),!0)
h.j(0,$.bb,L.e("#00103C"),!0)
h.j(0,$.b9,L.e("#00071A"),!0)
h.j(0,$.bf,L.e("#033476"),!0)
h.j(0,$.be,L.e("#02285B"),!0)
h.j(0,$.bd,L.e("#004CB2"),!0)
h.j(0,$.bc,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fK(D.v2(),null,3,!0),new E.fK(D.v2(),null,-1,!0),new E.M($.hP,-1,!0),new E.M($.cs,0.2,!1)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new Q.pI(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(8,"Void",!0,!1)
$.zm=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#9900cc"),!0)
a.j(0,$.b8,L.e("#974AA7"),!0)
a.j(0,$.b7,L.e("#6B347D"),!0)
a.j(0,$.bh,L.e("#3D190A"),!0)
a.j(0,$.bg,L.e("#2C1207"),!0)
a.j(0,$.ba,L.e("#7C3FBA"),!0)
a.j(0,$.bb,L.e("#6D34A6"),!0)
a.j(0,$.b9,L.e("#592D86"),!0)
a.j(0,$.bf,L.e("#381B76"),!0)
a.j(0,$.be,L.e("#1E0C47"),!0)
a.j(0,$.bd,L.e("#281D36"),!0)
a.j(0,$.bc,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.M($.hR,2,!0),new E.M($.hQ,1,!0),new E.M($.da,-1,!0),new E.M($.eB,-1,!0),new E.M($.cs,0.01,!1)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new E.oa(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(9,"Rage",!0,!1)
$.zi=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#ffcc66"),!0)
h.j(0,$.b8,L.e("#FDF9EC"),!0)
h.j(0,$.b7,L.e("#D6C794"),!0)
h.j(0,$.bh,L.e("#164524"),!0)
h.j(0,$.bg,L.e("#06280C"),!0)
h.j(0,$.ba,L.e("#FFC331"),!0)
h.j(0,$.bb,L.e("#F7BB2C"),!0)
h.j(0,$.b9,L.e("#DBA523"),!0)
h.j(0,$.bf,L.e("#FFE094"),!0)
h.j(0,$.be,L.e("#E8C15E"),!0)
h.j(0,$.bd,L.e("#F6C54A"),!0)
h.j(0,$.bc,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.M($.da,2,!0),new E.M($.hO,1,!0),new E.fK(D.v2(),null,-2,!0)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new X.ml(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(10,"Hope",!0,!1)
$.zc=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#494132"),!0)
a.j(0,$.b8,L.e("#76C34E"),!0)
a.j(0,$.b7,L.e("#4F8234"),!0)
a.j(0,$.bh,L.e("#00164F"),!0)
a.j(0,$.bg,L.e("#00071A"),!0)
a.j(0,$.ba,L.e("#605542"),!0)
a.j(0,$.bb,L.e("#494132"),!0)
a.j(0,$.b9,L.e("#2D271E"),!0)
a.j(0,$.bf,L.e("#CCC4B5"),!0)
a.j(0,$.be,L.e("#A89F8D"),!0)
a.j(0,$.bd,L.e("#A29989"),!0)
a.j(0,$.bc,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.M($.eA,2,!0),new E.M($.hR,1,!0),new E.M($.dz,-2,!0)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new K.n_(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(11,"Life",!0,!1)
$.ze=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#9630BF"),!0)
h.j(0,$.b8,L.e("#cc87e8"),!0)
h.j(0,$.b7,L.e("#9545b7"),!0)
h.j(0,$.bh,L.e("#ae769b"),!0)
h.j(0,$.bg,L.e("#8f577c"),!0)
h.j(0,$.ba,L.e("#9630bf"),!0)
h.j(0,$.bb,L.e("#693773"),!0)
h.j(0,$.b9,L.e("#4c2154"),!0)
h.j(0,$.bf,L.e("#fcf9bd"),!0)
h.j(0,$.be,L.e("#e0d29e"),!0)
h.j(0,$.bd,L.e("#bdb968"),!0)
h.j(0,$.bc,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.M($.dz,3,!0),new E.M($.da,-2,!0)],k),l)
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b8,L.e("#FF9B00"),!0)
a.j(0,$.b7,L.e("#FF8700"),!0)
a.j(0,$.bh,L.e("#7F7F7F"),!0)
a.j(0,$.bg,L.e("#727272"),!0)
a.j(0,$.ba,L.e("#A3A3A3"),!0)
a.j(0,$.bb,L.e("#999999"),!0)
a.j(0,$.b9,L.e("#898989"),!0)
a.j(0,$.bf,L.e("#EFEFEF"),!0)
a.j(0,$.be,L.e("#DBDBDB"),!0)
a.j(0,$.bd,L.e("#C6C6C6"),!0)
a.j(0,$.bc,L.e("#ADADAD"),!0)
a=new Z.lt(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.ai(12,"Dream",!1,!1)
$.za=a
a=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b6,L.e("#9630BF"),!0)
a.j(0,$.b8,L.e("#cc87e8"),!0)
a.j(0,$.b7,L.e("#9545b7"),!0)
a.j(0,$.bh,L.e("#ae769b"),!0)
a.j(0,$.bg,L.e("#8f577c"),!0)
a.j(0,$.ba,L.e("#9630bf"),!0)
a.j(0,$.bb,L.e("#693773"),!0)
a.j(0,$.b9,L.e("#4c2154"),!0)
a.j(0,$.bf,L.e("#fcf9bd"),!0)
a.j(0,$.be,L.e("#e0d29e"),!0)
a.j(0,$.bd,L.e("#bdb968"),!0)
a.j(0,$.bc,L.e("#ab9b55"),!0)
b=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.l(H.a([new E.M($.dz,3,!0),new E.M($.da,-2,!0)],k),l)
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b8,L.e("#FF9B00"),!0)
h.j(0,$.b7,L.e("#FF8700"),!0)
h.j(0,$.bh,L.e("#7F7F7F"),!0)
h.j(0,$.bg,L.e("#727272"),!0)
h.j(0,$.ba,L.e("#A3A3A3"),!0)
h.j(0,$.bb,L.e("#999999"),!0)
h.j(0,$.b9,L.e("#898989"),!0)
h.j(0,$.bf,L.e("#EFEFEF"),!0)
h.j(0,$.be,L.e("#DBDBDB"),!0)
h.j(0,$.bd,L.e("#C6C6C6"),!0)
h.j(0,$.bc,L.e("#ADADAD"),!0)
h=new Q.mY(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.ai(13,"Law",!1,!1)
$.zd=h
h=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b6,L.e("#00ff00"),!0)
h.j(0,$.b8,L.e("#00ff00"),!0)
h.j(0,$.b7,L.e("#00ff00"),!0)
h.j(0,$.bh,L.e("#00ff00"),!0)
h.j(0,$.bg,L.e("#00cf00"),!0)
h.j(0,$.ba,L.e("#171717"),!0)
h.j(0,$.bb,L.e("#080808"),!0)
h.j(0,$.b9,L.e("#080808"),!0)
h.j(0,$.bf,L.e("#616161"),!0)
h.j(0,$.be,L.e("#3b3b3b"),!0)
h.j(0,$.bd,L.e("#4a4a4a"),!0)
h.j(0,$.bc,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.M($.hR,13,!0)],k),l)
m=new L.b_(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b6,L.e("#FF9B00"),!0)
m.j(0,$.b8,L.e("#FF9B00"),!0)
m.j(0,$.b7,L.e("#FF8700"),!0)
m.j(0,$.bh,L.e("#7F7F7F"),!0)
m.j(0,$.bg,L.e("#727272"),!0)
m.j(0,$.ba,L.e("#A3A3A3"),!0)
m.j(0,$.bb,L.e("#999999"),!0)
m.j(0,$.b9,L.e("#898989"),!0)
m.j(0,$.bf,L.e("#EFEFEF"),!0)
m.j(0,$.be,L.e("#DBDBDB"),!0)
m.j(0,$.bd,L.e("#C6C6C6"),!0)
m.j(0,$.bc,L.e("#ADADAD"),!0)
j=new K.ok(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
j.ai(14,"Sauce",!1,!0)
$.zj=j
$.zh=L.z6(255,"Null",!1,!0)
j=P.l(H.a([new E.M($.da,1,!0),new E.M($.hO,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
c=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
d=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
g=H.a(["Nobody"],p)
h=H.a(["Nobody"],p)
q=new F.nt(j,q,m,c,d,!1,e,f,g,h,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cO(q)
$.Al=q
q=P.l(H.a([new E.M($.fq,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kI(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cO(q)
$.Ae=q
q=P.l(H.a([new E.M($.hR,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kN(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cO(q)
$.Af=q
q=P.l(H.a([new E.M($.hP,-1,!0),new E.M($.hO,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.l7(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cO(q)
$.Ag=q
q=P.l(H.a([new E.M($.da,-1,!0),new E.M($.eA,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lj(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cO(q)
$.Ah=q
q=P.l(H.a([new E.M($.da,1,!0),new E.M($.eB,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lr(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cO(q)
$.Ai=q
q=P.l(H.a([new E.M($.hO,1,!0),new E.M($.dz,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lV(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cO(q)
$.Aj=q
q=P.l(H.a([new E.M($.hR,1,!0),new E.M($.eA,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mU(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cO(q)
$.Ak=q
q=P.l(H.a([new E.M($.hQ,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.o4(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cO(q)
$.An=q
q=P.l(H.a([new E.M($.eB,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.og(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cO(q)
$.Ao=q
q=P.l(H.a([new E.M($.da,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.ox(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cO(q)
$.Ap=q
q=P.l(H.a([new E.M($.eB,-1,!0),new E.M($.da,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pc(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cO(q)
$.Ar=q
q=P.l(H.a([new E.M($.fq,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pS(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cO(q)
$.As=q
q=P.l(H.a([new E.M($.dz,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pb(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cO(q)
$.Aq=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hj(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"","","Null")
q.D()
q.E()
B.cO(q)
$.Am=q
A.x0()
t=3
return P.cd(Y.nu(),$async$rO)
case 3:case 1:return P.bo(r,s)}})
return P.bp($async$rO,s)}},V={lr:function lr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mb:function mb(a){this.a=a},nr:function nr(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},nS:function nS(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},pc:function pc(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
s=Math.pow(256,e)
c.toString
r=H.cP(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.u(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.u(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ag(n-1,p)
t.ag(a,8)}return t.b5(b)},
zS:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.dU(a,b)
for(q=e*8,p=0;p<c;){o=r.ac(q)+1
n=r.ac(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.u(s,l)
s[l]=n}p+=o}return s},
tv:function(a){return new V.lB(a)},
tu:function(a){return new V.lA(a)},
zP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
s=d.gcS()
r=C.f.aj(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cP(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.u(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.u(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ag(m-1,o)
t.ag(a,r)}return t.b5(b)},
zO:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.dU(a,b)
for(r=e*8,o=0;o<c;){n=p.ac(r)+1
m=p.ac(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.u(s,k)
s[k]=m}o+=n}return s},
tt:function(a){return new V.lz(a)},
ts:function(a){return new V.ly(a)},
zR:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
s=d.gcS()
r=C.f.aj(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cP(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.u(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.u(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.aj(Math.log(n)/0.6931471805599453)+1
t.ag(k-1,5)
t.ag(n-1,k)
t.ag(a,r)}return t.b5(b)},
zQ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.dU(a,b)
for(o=0;o<c;){n=p.ac(p.ac(5)+1)+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
lB:function lB(a){this.a=a},
lA:function lA(a){this.a=a},
lz:function lz(a){this.a=a},
ly:function ly(a){this.a=a}},Z={lt:function lt(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
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
_.x1=x1},
A2:function(){var t,s
if(!$.wa)$.wa=!0
else return
t=[P.x]
s=new Y.pe(H.a([],t))
$.tK=s
Z.cN(s,"txt",null)
Z.cN($.tK,"vert","x-shader/x-vertex")
Z.cN($.tK,"frag","x-shader/x-fragment")
$.A1=new Y.ob(H.a([],t))
$.wc=new Y.l2(H.a([],t))
s=new B.pX(H.a([],t))
$.we=s
Z.cN(s,"zip",null)
Z.cN($.we,"bundle",null)
s=new U.pO(H.a([],t))
$.Aa=s
Z.cN(s,"words",null)
s=new Q.o2(H.a([],t))
$.wd=s
Z.cN(s,"png",null)
Z.cN($.wd,"jpg","image/jpeg")
$.A8=new Q.o_(H.a([],t))
s=new M.oD(H.a([],t))
$.A9=s
Z.cN(s,"psprite",null)
s=new V.mb(H.a([],t))
$.tJ=s
Z.cN(s,"ttf",null)
Z.cN($.tJ,"otf",null)
Z.cN($.tJ,"woff",null)
s=new Y.nI(null,H.a([],t))
$.A5=s
Z.cN(s,"obj",null)
s=new U.ne(H.a([],t))
$.A3=s
Z.cN(s,"mp3",null)
$.A4=new U.oZ(H.a([],t))
s=new U.nN(H.a([],t))
$.A6=s
Z.cN(s,"ogg",null)
$.A7=new U.p_(H.a([],t))},
cN:function(a,b,c){$.$get$mc().i(0,b,new Z.iz(a,c,[null,null]))
a.a.push(b)},
wb:function(a){var t
if($.$get$mc().Y(0,a)){t=$.$get$mc().n(0,a)
if(t.a instanceof O.c9)return t
throw H.h("File format for extension ."+H.y(a)+" does not match expected types.")}throw H.h("No file format found for extension ."+H.y(a))},
iz:function iz(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
nd:function nd(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.B=B
_.C=C
_.L=L
_.M=M
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
_.r1=r1},
uk:function uk(){},
ug:function ug(){},
uh:function uh(){}},X={iA:function iA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ik:function ik(){},ml:function ml(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},mq:function mq(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},G:function G(a,b,c){this.a=a
this.b=b
this.c=c}},N={aa:function aa(){},mU:function mU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},o7:function o7(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},of:function of(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},ox:function ox(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oz:function oz(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},pk:function pk(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
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
_.x1=x1},
Ia:function(){var t,s,r,q,p,o,n,m
A.rO()
W.tP(C.c.ar("../",N.uH())+"navbar.txt",null,null).b4(O.Ic())
t=H.a([],[P.x])
for(s=$.$get$fD(),r=0;r<13;++r){q=s[r]
p=q.c
if(P.px().gbB().Y(0,p)===!0&&J.td(P.px().gbB().n(0,p))==="true"){if(q.e!=null)q.e.$0()
else N.eO(q)
t.push(q.b)}}s=t.length===0?"Select a category:":C.b.aR(t," +<br/>")
p=document
J.yZ(p.querySelector("#header"),s)
o=p.querySelector("#links")
for(s=$.$get$fD(),r=0;r<13;++r){q=s[r]
n="?"+q.c+"=true"
m=p.createElement("a")
m.href=n
m.textContent=null
m.appendChild(C.L.ax(m,q.a,null,null))
o.appendChild(m)}s=G.GG(new N.t0(),new N.t1(),"Filter...",new N.t2())
s.className="filter"
o.appendChild(s)},
vo:function(a){var t="http://farragofiction.com/SBURBSimE/"+H.y(a)
return t},
vn:function(a,b,c,d,e){var t,s,r,q
a.className=d
t=document
s=t.createElement("div")
s.className=e
s.setAttribute("data-"+new W.kh(new W.i1(s)).bp("name"),b)
if(!!J.ao(a).$isek){r=a.src
q=t.createElement("a")
if(r!=null)q.href=r
q.target="_blank"
q.appendChild(a)
s.appendChild(q)}else s.appendChild(a)
if(c){t=t.createElement("div")
t.className="imagename_always"
t.textContent=b
s.appendChild(t)}else{t=t.createElement("div")
t.className="imagename"
t.textContent=b
s.appendChild(t)}$.$get$yk().appendChild(s)
$.$get$rQ().push(s)},
ih:function(a){var t=0,s=P.bj(),r,q,p,o,n,m,l
var $async$ih=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)$async$outer:switch(t){case 0:a=N.vo(a)
q=H.a([],[P.x])
t=3
return P.cd(W.tP(a,null,null),$async$ih)
case 3:p=c
o=$.$get$yf().aQ(0,p)
for(n=new H.i_(o.a,o.b,o.c,null);n.F();){m=n.d.b
if(1>=m.length){r=H.u(m,1)
t=1
break $async$outer}l=m[1]
m=$.$get$yd().b
if(typeof l!=="string")H.aZ(H.bv(l))
if(!m.test(l))continue
q.push(l)}r=q
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$ih,s)},
eO:function(a){var t=0,s=P.bj(),r,q,p,o
var $async$eO=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=a.d
o=J
t=2
return P.cd(N.ih(r),$async$eO)
case 2:q=o.cW(c)
case 3:if(!q.F()){t=4
break}p=q.gO()
N.vn(W.mt(null,H.y(N.vo(r))+H.y(p),null),p,!1,"image","imageTile")
t=3
break
case 4:return P.bo(null,s)}})
return P.bp($async$eO,s)},
HP:function(){N.eO($.$get$fD()[4])
N.eO($.$get$fD()[5])
N.eO($.$get$fD()[7])
N.eO($.$get$fD()[6])},
yh:function(a,b){var t,s,r,q,p,o,n,m,l
t=H.a([],[P.C])
for(s=J.cW(a);s.F();){r=s.gO()
q=$.$get$yo().hx(r)
if(q==null)continue
p=q.b
if(1>=p.length)return H.u(p,1)
if(J.aX(p[1],b)){if(2>=p.length)return H.u(p,2)
t.push(H.ev(p[2],null,null))}}C.b.dc(t)
for(s=t.length,o=0,n=1,m=0;m<t.length;t.length===s||(0,H.bV)(t),++m,o=l){l=t[m]
if(J.aX(l,n))++n
else break}return o},
rL:function(){var t=0,s=P.bj(),r,q,p,o,n
var $async$rL=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:n=N
t=3
return P.cd(N.ih("images/Hair/"),$async$rL)
case 3:q=n.yh(b,"hair")
if(typeof q!=="number"){r=H.a7(q)
t=1
break}p=[P.x]
o=1
for(;o<=q;++o)N.vn(N.yn(H.a(["images/Hair/hair_back"+o+".png","images/Hair/head.png","images/Hair/hair"+o+".png"],p)),C.a.A(o),!0,"head","headTile")
case 1:return P.bo(r,s)}})
return P.bp($async$rL,s)},
rM:function(){var t=0,s=P.bj(),r,q,p,o,n
var $async$rM=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:n=N
t=3
return P.cd(N.ih("images/Horns/"),$async$rM)
case 3:q=n.yh(b,"left")
if(typeof q!=="number"){r=H.a7(q)
t=1
break}p=[P.x]
o=1
for(;o<=q;++o)N.vn(N.yn(H.a(["images/Horns/right"+o+".png","images/Hair/head.png","images/Horns/left"+o+".png"],p)),C.a.A(o),!0,"head","headTile")
case 1:return P.bo(r,s)}})
return P.bp($async$rM,s)},
yn:function(a){var t,s
t=document.createElement("div")
t.className="spriteStack"
for(s=0;s<3;++s)t.appendChild(W.mt(null,N.vo(a[s]),null))
return t},
cx:function cx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
t0:function t0(){},
t1:function t1(){},
t2:function t2(){},
FU:function(a){var t,s,r,q,p,o,n,m,l
t=J.cw(a)
s=new W.kj(document.querySelectorAll("link"),[null])
for(r=new H.eq(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.ao(q)
if(!!p.$ishq&&q.rel==="stylesheet"){o=$.$get$nY()
H.y(p.ga8(q))
o.toString
o=t.length
n=Math.min(o,J.c_(p.ga8(q)))
for(m=0;m<n;++m){if(m>=o)return H.u(t,m)
if(t[m]!==J.ii(p.ga8(q),m)){l=C.c.aa(t,m)
$.$get$nY().toString
return l.split("/").length-1}continue}}}$.$get$nY().bc(C.m,"Didn't find a css link to derive relative path")
return 0},
uH:function(){var t=P.px()
if(!$.$get$nX().Y(0,t))$.$get$nX().i(0,t,N.FU(t))
return $.$get$nX().n(0,t)}},E={iN:function iN(){},nM:function nM(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fK:function fK(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},ns:function ns(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},oa:function oa(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},oj:function oj(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},pJ:function pJ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1}},B={mj:function mj(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,L,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.B=B
_.C=C
_.L=L
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
_.r1=r1},
cO:function(a){var t=a.f
if($.$get$my().Y(0,t))throw H.h("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cw($.$get$my().n(0,t))+".")
$.$get$my().i(0,t,a)},
hj:function hj(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
pX:function pX(a){this.a=a},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b){this.a=a
this.b=b},
Ht:function(a){return a.bd(0)},
dA:function dA(a){this.a=a},
kb:function kb(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hZ:function hZ(a,b){this.a=a
this.b=b}},Q={mu:function mu(){},o2:function o2(a){this.a=a},o_:function o_(a){this.a=a},mY:function mY(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,af,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
_.P=P
_.af=af
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
_.x1=x1},og:function og(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pI:function pI(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},jQ:function jQ(){},
I:function(a,b,c){var t=new Q.dR(null,null,[c])
t.dj(a,b,c)
return t},
ve:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.I(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dT(a,"$isn",[e],"$asn"))if(H.dT(a,"$iscT",[e],"$ascT"))for(s=J.cW(a.gc1()),r=0;s.F();){q=s.gO()
p=t.b
o=p.length
if(r>=o)return H.u(p,r)
p[r]=q;++r}else for(s=a.gV(a),p=[H.P(t,0)],r=0;s.F();){n=s.gO()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.u(o,r)
o[r]=new Q.i(n,m,p);++r}else for(s=a.gV(a),p=[e],o=[H.P(t,0)];s.F();){l=s.gO()
if(H.HK(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.u(m,0)
m[0]=new Q.i(l,k,o)}else if(H.dT(l,"$isi",p,null)){m=t.b
k=m.length
if(0>=k)return H.u(m,0)
m[0]=l}else throw H.h("Invalid entry type "+H.y(J.vE(l))+" for WeightedList<"+H.y(H.bZ(H.dd(e)))+">. Should be "+H.y(H.bZ(H.dd(e)))+" or WeightPair<"+H.y(H.bZ(H.dd(e)))+">.")}return t},
vf:function(a,b,c,d){return new Q.k8(J.vG(a.gc1(),new Q.pM(c,d,b)),null,[c,d])},
cT:function cT(){},
dR:function dR(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hY:function hY(){},
i:function i(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eJ:function eJ(){},
hX:function hX(){},
pL:function pL(a,$ti){this.a=a
this.$ti=$ti},
k8:function k8(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
on:function(){var t=0,s=P.bj(),r
var $async$on=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:t=3
return P.cd(A.ht("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$on)
case 3:r=A.ht("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$on,s)}},G={n0:function n0(x2,y1,y2,p,q,t,u,v,w,B,C,L,M,P,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.L=L
_.M=M
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
_.x1=x1},o4:function o4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zv:function(a){var t,s,r,q,p,o,n,m,l
t=G.a1
s=P.jD(a,t)
r=P.a0(null,null,null,t)
q=H.a([],[G.d])
for(t=G.Fx(),p=J.cW(t.a),t=new H.k9(p,t.b,[H.P(t,0)]);t.F();){o=p.gO()
if(o.eD(s))q.push(o)}C.b.dc(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bV)(q),++n){o=q[n]
if(o.eD(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bV)(p),++l)s.an(0,p[l])}}if(s.a!==0)r.aw(0,s)
return r},
Fx:function(){var t=$.$get$b()
t.toString
return new H.eH(t,new G.mK(),[H.P(t,0)])},
a1:function a1(){},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(d,e,a,b,c){var _=this
_.d=d
_.e=e
_.a=a
_.b=b
_.c=c},
mK:function mK(){},
GF:function(a){return a},
GI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
if(a!=null){t=J.aT(a)
if(t.gU(a)!==!0){t.gG(a)
t=!1}else t=!0}else t=!0
if(t)return
t=J.cV(a)
s=t.gG(a)
if(typeof s==="string")c=H.HX(G.Ip(),{func:1,ret:P.x,args:[,]})
r=G.GH(b)
q=P.a0(null,null,null,null)
for(t=t.gV(a);t.F();){p=t.gO()
o=c.$1(p)
s=r.length
m=J.aT(o)
l=0
while(!0){if(!(l<r.length)){n=!0
break}k=r[l]
if(k.c){if(m.X(o,k.a)===k.b){n=!1
break}}else if(C.c.X(m.eC(o),k.a.toLowerCase())===k.b){n=!1
break}r.length===s||(0,H.bV)(r);++l}if(n)q.h(0,p)}return q},
GH:function(a){var t,s,r,q,p,o,n,m,l
t=J.e9(a," ")
s=H.a([],[G.hM])
for(r=0;q=t.length,r<q;++r){if(r<0)return H.u(t,r)
p=t[r]
q=J.aT(p)
if(q.gU(p)===!0)continue
if(q.a9(p,"-")){p=C.c.aa(p,1)
o=!0}else o=!1
if(C.c.a9(p,'"')){n=C.c.aa(p,1)
if(!C.c.cL(n,'"'))for(m=r+1;m<t.length;++m){l=t[m];++r
if(J.cB(l).cL(l,'"')){n=n+" "+C.c.I(l,0,l.length-1)
break}else n=n+" "+l}else n=C.c.I(n,0,n.length-1)
if(n.length!==0)s.push(new G.hM(n,o,!0))}else if(p.length!==0)s.push(new G.hM(p,o,!1))}return s},
GG:function(a,b,c,d){var t,s,r
t=W.Ad("text")
s=J.aM(t)
s.sev(t,c)
r=new G.oo(a,b,d,t)
s.bL(t,"change",r,null)
s.bL(t,"keyup",r,null)
s.bL(t,"blur",r,null)
return t},
oo:function oo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c}},F={nt:function nt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pS:function pS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
FD:function(a){if(a===C.h){window
return C.i.gaq(C.i)}if(a===C.m){window
return C.i.gim()}if(a===C.a5){window
return C.i.ghK()}return P.HN()},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
up:function up(){},
zN:function(a,b,c,d){var t,s,r,q
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
c.toString
s=H.cP(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bV(s[q])
return t.b5(b)},
zM:function(a,b,c,d){var t,s,r,q,p
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.dU(a,b)
for(q=0;q<c;++q){p=r.c3()
if(q>=t)return H.u(s,q)
s[q]=p}return s},
zL:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
s=d.gcS()
r=C.f.aj(Math.log(H.kw(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cP(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.u(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.u(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bV(o-1)
t.ag(a,r)}return t.b5(b)},
zK:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.aj(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.dU(a,b)
for(o=0;o<c;){n=p.c3()+1
m=p.ac(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.u(s,r)
s[r]=m}o+=n}return s},
zJ:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.ds(new P.cc(""),0,0)
t.ag(a,8)
c.toString
s=H.cP(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.u(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.u(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bV(p-1)
t.bV(a)}return t.b5(b)},
zI:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.dU(a,b)
for(q=0;q<c;){p=r.c3()+1
o=r.c3()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.u(s,m)
s[m]=o}q+=p}return s}},R={
Gd:function(a){var t,s
if(a.gm(a).az(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giu(s).giF().el("checking for two players, ps is "+H.y(a)+", ret is "+t)
return t},
G1:function(a){a.gG(a).gbW()
return!1},
Gc:function(a){a.gG(a).gbW()
return!1},
Gb:function(a){a.gG(a).gbW()
return!1},
Ga:function(a){return a.gG(a).gbq().giE()},
G8:function(a){return a.gG(a).gbq().giC()},
G7:function(a){return a.gG(a).gbq().giB()},
G4:function(a){return a.gG(a).gbq().giz()},
G6:function(a){return a.gG(a).gbq().giA()},
G9:function(a){return a.gG(a).gbq().giD()},
G5:function(a){var t=a.gG(a)
t.gbW()
t.gbW()
return!1},
G2:function(a){return!0},
G3:function(a){a.gG(a).giw()
return!1},
o9:function o9(){},
Y:function Y(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
p6:function p6(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.r2=r2
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
_.r1=r1},
he:function he(){},
uG:function uG(){},
uF:function uF(){}},D={pb:function pb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
GO:function(){if($.xj)return
$.xj=!0
var t=new D.cI("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
t.y=0
$.v1=t
t=new D.cI("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.GN=t
t=new D.kc(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
t.y=2.5
t.Q=1
$.hR=t
t=new D.kc(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
t.y=2.5
$.eA=t
t=new D.cI("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.GM=t
t=new D.cI("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.hQ=t
t=new D.od("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.eB=t
t=new D.cI("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.da=t
t=new D.cI("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.fq=t
t=new D.cI("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.hO=t
t=new D.cI("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.hP=t
t=new D.cI("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.dz=t
t=new D.cI("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cR().push(t)
$.cs=t},
v2:function(){var t=$.$get$cR()
return new H.eH(t,new D.oF(),[H.P(t,0)])},
oF:function oF(){},
cI:function cI(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
kc:function kc(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
od:function od(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
H.um.prototype={}
J.f.prototype={
S:function(a,b){return a===b},
ga7:function(a){return H.eu(a)},
A:function(a){return H.o6(a)},
gad:function(a){return new H.dQ(H.kz(a),null)},
$ishe:1,
$isab:1,
$isfk:1,
$isab:1,
$ismQ:1,
$isf:1,
$ismQ:1,
$isf:1,
$ishx:1,
$isab:1}
J.mO.prototype={
A:function(a){return String(a)},
ga7:function(a){return a?519018:218159},
gad:function(a){return C.am},
$iscU:1}
J.mP.prototype={
S:function(a,b){return null==b},
A:function(a){return"null"},
ga7:function(a){return 0},
gad:function(a){return C.ag},
$iscQ:1}
J.ho.prototype={
ga7:function(a){return 0},
gad:function(a){return C.af},
A:function(a){return String(a)},
$ismQ:1,
h:function(a,b){return a.add(b)},
an:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc0:function(a){return a.left},
gc6:function(a){return a.top},
ge5:function(a){return a.attributes},
sah:function(a,b){return a.type=b},
gb7:function(a){return a.width},
gb1:function(a){return a.height},
gaH:function(a){return a.value},
i_:function(a,b){return a.parse(b)},
eV:function(a,b){return a.setLogging(b)},
eW:function(a,b){return a.setMaterials(b)}}
J.o1.prototype={}
J.eF.prototype={}
J.eo.prototype={
A:function(a){var t=a[$.$get$vT()]
return t==null?this.f0(a):J.cw(t)},
$istL:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.em.prototype={
bZ:function(a,b){if(!!a.immutable$list)throw H.h(new P.R(b))},
cH:function(a,b){if(!!a.fixed$length)throw H.h(new P.R(b))},
h:function(a,b){this.cH(a,"add")
a.push(b)},
a1:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.h(new P.bJ(a))}},
ay:function(a,b){return new H.es(a,b,[H.P(a,0),null])},
aR:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.y(a[r])
if(r>=t)return H.u(s,r)
s[r]=q}return s.join(b)},
da:function(a,b){return H.xl(a,b,null,H.P(a,0))},
hz:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.h(new P.bJ(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
cd:function(a,b,c){if(b<0||b>a.length)throw H.h(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.h(H.bv(c))
if(c<b||c>a.length)throw H.h(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.P(a,0)])
return H.a(a.slice(b,c),[H.P(a,0)])},
gG:function(a){if(a.length>0)return a[0]
throw H.h(H.di())},
gbb:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.h(H.di())},
a5:function(a,b,c,d,e){var t,s,r
this.bZ(a,"setRange")
P.dk(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aZ(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.h(H.wV())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.u(d,r)
a[b+s]=d[r]}},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
bv:function(a,b,c,d){var t
this.bZ(a,"fill range")
P.dk(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aG:function(a,b,c,d){var t,s,r,q,p,o
this.cH(a,"replaceRange")
P.dk(b,c,a.length,null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.at(a,b,r,d)
if(p!==0){this.a5(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a5(a,r,o,a,c)
this.at(a,b,r,d)}},
e4:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.h(new P.bJ(a))}return!1},
hw:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.h(new P.bJ(a))}return!0},
dd:function(a,b){var t
this.bZ(a,"sort")
t=b==null?P.HM():b
H.jZ(a,0,a.length-1,t)},
dc:function(a){return this.dd(a,null)},
b2:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.aX(a[t],b))return t
return-1},
bj:function(a,b){return this.b2(a,b,0)},
X:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aX(a[t],b))return!0
return!1},
gU:function(a){return a.length===0},
A:function(a){return P.jy(a,"[","]")},
a3:function(a,b){var t=H.a(a.slice(0),[H.P(a,0)])
return t},
ao:function(a){return this.a3(a,!0)},
gV:function(a){return new J.ij(a,a.length,0,null,[H.P(a,0)])},
ga7:function(a){return H.eu(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cH(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dV(b,"newLength",null))
if(b<0)throw H.h(P.bE(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c5(a,b))
if(b>=a.length||b<0)throw H.h(H.c5(a,b))
return a[b]},
i:function(a,b,c){this.bZ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c5(a,b))
if(b>=a.length||b<0)throw H.h(H.c5(a,b))
a[b]=c},
$isax:1,
$asax:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
J.ul.prototype={}
J.ij.prototype={
gO:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.h(H.bV(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fg.prototype={
aC:function(a,b){var t
if(typeof b!=="number")throw H.h(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcP(b)
if(this.gcP(a)===t)return 0
if(this.gcP(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcP:function(a){return a===0?1/a<0:a<0},
aj:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.h(new P.R(""+a+".floor()"))},
bD:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(new P.R(""+a+".round()"))},
ae:function(a,b,c){if(C.a.aC(b,c)>0)throw H.h(H.bv(b))
if(this.aC(a,b)<0)return b
if(this.aC(a,c)>0)return c
return a},
l:function(a){return a},
bF:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.h(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a_(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aZ(new P.R("Unexpected toString result: "+t))
r=J.aT(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.ar("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga7:function(a){return a&0x1FFFFFFF},
d5:function(a){return-a},
W:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a+b},
ar:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a*b},
bJ:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
dh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dY(a,b)},
am:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.h(new P.R("Result of truncating division is "+H.y(t)+": "+H.y(a)+" ~/ "+H.y(b)))},
au:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
if(b<0)throw H.h(H.bv(b))
return b>31?0:a<<b>>>0},
ap:function(a,b){return b>31?0:a<<b>>>0},
aY:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
h1:function(a,b){if(b<0)throw H.h(H.bv(b))
return b>31?0:a>>>b},
dX:function(a,b){return b>31?0:a>>>b},
a4:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a<b},
az:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a>b},
as:function(a,b){if(typeof b!=="number")throw H.h(H.bv(b))
return a>=b},
gad:function(a){return C.ap},
$isdq:1}
J.jB.prototype={
gad:function(a){return C.ao},
$isV:1,
$isdq:1,
$isC:1}
J.jA.prototype={
gad:function(a){return C.an},
$isV:1,
$isdq:1}
J.en.prototype={
a_:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c5(a,b))
if(b<0)throw H.h(H.c5(a,b))
if(b>=a.length)H.aZ(H.c5(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(b>=a.length)throw H.h(H.c5(a,b))
return a.charCodeAt(b)},
cE:function(a,b,c){if(c>b.length)throw H.h(P.bE(c,0,b.length,null,null))
return new H.r8(b,a,c)},
aQ:function(a,b){return this.cE(a,b,0)},
eq:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.h(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a_(b,c+s)!==this.a6(a,s))return
return new H.hS(c,b,a)},
W:function(a,b){if(typeof b!=="string")throw H.h(P.dV(b,null,null))
return a+b},
cL:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.aa(a,s-t)},
d_:function(a,b,c){return H.yu(a,b,c)},
ic:function(a,b,c){return H.In(a,b,c,null)},
eX:function(a,b){if(b==null)H.aZ(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hn&&b.gdL().exec("").length-2===0)return a.split(b.gfP())
else return this.fv(a,b)},
aG:function(a,b,c,d){var t,s
H.vp(b)
c=P.dk(b,c,a.length,null,null,null)
H.vp(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fv:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.x])
for(s=J.yy(b,a),s=s.gV(s),r=0,q=1;s.F();){p=s.gO()
o=p.gde(p)
n=p.geb(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.I(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.aa(a,r))
return t},
aI:function(a,b,c){var t
H.vp(c)
if(typeof c!=="number")return c.a4()
if(c<0||c>a.length)throw H.h(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yT(b,a,c)!=null},
a9:function(a,b){return this.aI(a,b,0)},
I:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aZ(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aZ(H.bv(c))
if(typeof b!=="number")return b.a4()
if(b<0)throw H.h(P.jV(b,null,null))
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.h(P.jV(b,null,null))
if(c>a.length)throw H.h(P.jV(c,null,null))
return a.substring(b,c)},
aa:function(a,b){return this.I(a,b,null)},
eC:function(a){return a.toLowerCase()},
il:function(a){return a.toUpperCase()},
bk:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a6(t,0)===133){r=J.Fz(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a_(t,q)===133?J.ui(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eE:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a_(t,r)===133)s=J.ui(t,r)}else{s=J.ui(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
ar:function(a,b){var t,s
if(typeof b!=="number")return H.a7(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.O)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b2:function(a,b,c){var t
if(c<0||c>a.length)throw H.h(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bj:function(a,b){return this.b2(a,b,0)},
hQ:function(a,b,c){var t
if(b==null)H.aZ(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aZ(P.bE(t,0,c,null,null))
if(b.co(a,t)!=null)return t}return-1},
en:function(a,b){return this.hQ(a,b,null)},
e9:function(a,b,c){if(c>a.length)throw H.h(P.bE(c,0,a.length,null,null))
return H.Im(a,b,c)},
X:function(a,b){return this.e9(a,b,0)},
gU:function(a){return a.length===0},
aC:function(a,b){var t
if(typeof b!=="string")throw H.h(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
ga7:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gad:function(a){return C.ah},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.c5(a,b))
if(b>=a.length||b<0)throw H.h(H.c5(a,b))
return a[b]},
$isax:1,
$asax:function(){},
$isx:1}
H.l6.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a_(this.a,b)},
$ashV:function(){return[P.C]},
$ashs:function(){return[P.C]},
$asfl:function(){return[P.C]},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.r.prototype={$asr:null}
H.ep.prototype={
gV:function(a){return new H.eq(this,this.gm(this),0,null,[H.ay(this,"ep",0)])},
a1:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.h(new P.bJ(this))}},
gU:function(a){return this.gm(this)===0},
gG:function(a){if(this.gm(this)===0)throw H.h(H.di())
return this.T(0,0)},
X:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.aX(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.h(new P.bJ(this))}return!1},
c9:function(a,b){return this.f_(0,b)},
ay:function(a,b){return new H.es(this,b,[H.ay(this,"ep",0),null])},
a3:function(a,b){var t,s,r
t=H.a([],[H.ay(this,"ep",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)}}
H.p4.prototype={
gfw:function(){var t=J.c_(this.a)
return t},
gh2:function(){var t,s
t=J.c_(this.a)
s=this.b
if(J.cv(s,t))return t
return s},
gm:function(a){var t,s
t=J.c_(this.a)
s=this.b
if(J.vx(s,t))return 0
if(typeof s!=="number")return H.a7(s)
return t-s},
T:function(a,b){var t=J.e7(this.gh2(),b)
if(J.e8(b,0)||J.vx(t,this.gfw()))throw H.h(P.bz(b,this,"index",null,null))
return J.vA(this.a,t)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.aT(s)
q=r.gm(s)
if(typeof t!=="number")return H.a7(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.u(n,m)
n[m]=o
if(r.gm(s)<q)throw H.h(new P.bJ(this))}return n},
ao:function(a){return this.a3(a,!0)},
f9:function(a,b,c,d){var t=this.b
if(J.e8(t,0))H.aZ(P.bE(t,0,null,"start",null))}}
H.eq.prototype={
gO:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.aT(t)
r=s.gm(t)
if(this.b!==r)throw H.h(new P.bJ(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hw.prototype={
gV:function(a){return new H.jE(null,J.cW(this.a),this.b,this.$ti)},
gm:function(a){return J.c_(this.a)},
gU:function(a){return J.tb(this.a)},
gG:function(a){return this.b.$1(J.yK(this.a))},
$asn:function(a,b){return[b]}}
H.fY.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jE.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gO())
return!0}this.a=null
return!1},
gO:function(){return this.a},
$asjz:function(a,b){return[b]}}
H.es.prototype={
gm:function(a){return J.c_(this.a)},
T:function(a,b){return this.b.$1(J.vA(this.a,b))},
$asep:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.eH.prototype={
gV:function(a){return new H.k9(J.cW(this.a),this.b,this.$ti)},
ay:function(a,b){return new H.hw(this,b,[H.P(this,0),null])}}
H.k9.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gO())===!0)return!0
return!1},
gO:function(){return this.a.gO()}}
H.iJ.prototype={
sm:function(a,b){throw H.h(new P.R("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.h(new P.R("Cannot add to a fixed-length list"))},
aG:function(a,b,c,d){throw H.h(new P.R("Cannot remove from a fixed-length list"))}}
H.pu.prototype={
i:function(a,b,c){throw H.h(new P.R("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.h(new P.R("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.h(new P.R("Cannot add to an unmodifiable list"))},
a5:function(a,b,c,d,e){throw H.h(new P.R("Cannot modify an unmodifiable list"))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
aG:function(a,b,c,d){throw H.h(new P.R("Cannot remove from an unmodifiable list"))},
bv:function(a,b,c,d){throw H.h(new P.R("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.hV.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.t8.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.t9.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qO.prototype={}
H.fx.prototype={
e3:function(a,b){if(!this.f.S(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cC()},
ib:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.an(0,a)
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
if(q===s.c)s.dD();++s.d}this.y=!1}this.cC()},
h7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ao(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.u(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
i9:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ao(a),s=0;r=this.ch,s<r.length;s+=2)if(t.S(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aZ(new P.R("removeRange"))
P.dk(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eU:function(a,b){if(!this.r.S(0,a))return
this.db=b},
hF:function(a,b,c){var t=J.ao(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){J.fG(a,c)
return}t=this.cx
if(t==null){t=P.ur(null,null)
this.cx=t}t.aN(0,new H.qJ(a,c))},
hE:function(a,b){var t
if(!this.r.S(0,a))return
t=J.ao(b)
if(!t.S(b,0))t=t.S(b,1)&&!this.cy
else t=!0
if(t){this.c_()
return}t=this.cx
if(t==null){t=P.ur(null,null)
this.cx=t}t.aN(0,this.ghP())},
hG:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fE(a)
if(b!=null)P.fE(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cw(a)
s[1]=b==null?null:J.cw(b)
for(r=new P.dn(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fG(r.d,s)},
bu:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bO(o)
p=H.cu(o)
this.hG(q,p)
if(this.db===!0){this.c_()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghO()
if(this.cx!=null)for(;n=this.cx,!n.gU(n);)this.cx.ex().$0()}return s},
cQ:function(a){return this.b.n(0,a)},
dl:function(a,b){var t=this.b
if(t.Y(0,a))throw H.h(P.lD("Registry: ports must be registered only once."))
t.i(0,a,b)},
cC:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c_()},
c_:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bh(0)
for(t=this.b,s=t.gc7(t),s=s.gV(s);s.F();)s.gO().fn()
t.bh(0)
this.c.bh(0)
u.globalState.z.an(0,this.a)
this.dx.bh(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.u(t,p)
J.fG(q,t[p])}this.ch=null}},
ghO:function(){return this.d},
ghj:function(){return this.e}}
H.qJ.prototype={
$0:function(){J.fG(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qk.prototype={
hq:function(){var t=this.a
if(t.b===t.c)return
return t.ex()},
eB:function(){var t,s,r
t=this.hq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Y(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gU(s)}else s=!1
else s=!1
else s=!1
if(s)H.aZ(P.lD("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gU(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hr(["command","close"])
r=new H.dB(!0,new P.kn(0,null,null,null,null,null,0,[null,P.C])).aA(r)
s.toString
self.postMessage(r)}return!1}t.i5()
return!0},
dS:function(){if(self.window!=null)new H.ql(this).$0()
else for(;this.eB(););},
bE:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dS()
else try{this.dS()}catch(r){t=H.bO(r)
s=H.cu(r)
q=u.globalState.Q
p=P.hr(["command","error","msg",H.y(t)+"\n"+H.y(s)])
p=new H.dB(!0,P.i7(null,P.C)).aA(p)
q.toString
self.postMessage(p)}}}
H.ql.prototype={
$0:function(){if(!this.a.eB())return
P.xm(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eL.prototype={
i5:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bu(this.b)}}
H.qN.prototype={}
H.mz.prototype={
$0:function(){H.Aw(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mA.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.eP(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.eP(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cC()},
$S:function(){return{func:1,v:true}}}
H.q5.prototype={}
H.fy.prototype={
b9:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdJ())return
r=H.Hp(b)
if(t.ghj()===s){s=J.aT(r)
switch(s.n(r,0)){case"pause":t.e3(s.n(r,1),s.n(r,2))
break
case"resume":t.ib(s.n(r,1))
break
case"add-ondone":t.h7(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.i9(s.n(r,1))
break
case"set-errors-fatal":t.eU(s.n(r,1),s.n(r,2))
break
case"ping":t.hF(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hE(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.aN(0,new H.eL(t,new H.qQ(this,r),"receive"))},
S:function(a,b){if(b==null)return!1
return b instanceof H.fy&&J.aX(this.b,b.b)},
ga7:function(a){return this.b.gcq()}}
H.qQ.prototype={
$0:function(){var t=this.a.b
if(!t.gdJ())t.fk(0,this.b)},
$S:function(){return{func:1}}}
H.ic.prototype={
b9:function(a,b){var t,s,r
t=P.hr(["command","message","port",this,"msg",b])
s=new H.dB(!0,P.i7(null,P.C)).aA(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
S:function(a,b){if(b==null)return!1
return b instanceof H.ic&&J.aX(this.b,b.b)&&J.aX(this.a,b.a)&&J.aX(this.c,b.c)},
ga7:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.au()
s=this.a
if(typeof s!=="number")return s.au()
r=this.c
if(typeof r!=="number")return H.a7(r)
return(t<<16^s<<8^r)>>>0}}
H.fn.prototype={
fn:function(){this.c=!0
this.b=null},
fk:function(a,b){if(this.c)return
this.b.$1(b)},
$isGe:1,
gcq:function(){return this.a},
gdJ:function(){return this.c}}
H.pm.prototype={
fa:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aN(0,new H.eL(s,new H.pn(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dp(new H.po(this,b),0),a)}else throw H.h(new P.R("Timer greater than 0."))}}
H.pn.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.po.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dF.prototype={
ga7:function(a){var t=this.a
if(typeof t!=="number")return t.d9()
t=C.d.aY(t,0)^C.d.am(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dF){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcq:function(){return this.a}}
H.dB.prototype={
aA:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.ao(a)
if(!!t.$isfh)return["buffer",a]
if(!!t.$iset)return["typed",a]
if(!!t.$isax)return this.eQ(a)
if(!!t.$isAt){r=this.geN()
q=t.gaE(a)
q=H.dx(q,r,H.ay(q,"n",0),null)
q=P.dj(q,!0,H.ay(q,"n",0))
t=t.gc7(a)
t=H.dx(t,r,H.ay(t,"n",0),null)
return["map",q,P.dj(t,!0,H.ay(t,"n",0))]}if(!!t.$ismQ)return this.eR(a)
if(!!t.$isf)this.eF(a)
if(!!t.$isGe)this.bH(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfy)return this.eS(a)
if(!!t.$isic)return this.eT(a)
if(!!t.$iseW){p=a.$static_name
if(p==null)this.bH(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdF)return["capability",a.a]
if(!(a instanceof P.ab))this.eF(a)
return["dart",u.classIdExtractor(a),this.eP(u.classFieldsExtractor(a))]},
bH:function(a,b){throw H.h(new P.R((b==null?"Can't transmit:":b)+" "+H.y(a)))},
eF:function(a){return this.bH(a,null)},
eQ:function(a){var t=this.eO(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bH(a,"Can't serialize indexable: ")},
eO:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aA(a[s])
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
eP:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aA(a[t]))
return a},
eR:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bH(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aA(a[t[r]])
if(r>=s.length)return H.u(s,r)
s[r]=q}return["js-object",t,s]},
eT:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eS:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcq()]
return["raw sendport",a]}}
H.eK.prototype={
b_:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.h(P.dE("Bad serialized message: "+H.y(a)))
switch(C.b.gG(a)){case"ref":if(1>=a.length)return H.u(a,1)
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
s=H.a(this.bs(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bs(r),[null])
case"mutable":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return this.bs(r)
case"const":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bs(r),[null])
s.fixed$length=Array
return s
case"map":return this.hu(a)
case"sendport":return this.hv(a)
case"raw sendport":if(1>=a.length)return H.u(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ht(a)
case"function":if(1>=a.length)return H.u(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.u(a,1)
return new H.dF(a[1])
case"dart":s=a.length
if(1>=s)return H.u(a,1)
q=a[1]
if(2>=s)return H.u(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bs(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.h("couldn't deserialize: "+H.y(a))}},
bs:function(a){var t,s,r
t=J.aT(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
t.i(a,s,this.b_(t.n(a,s)));++s}return a},
hu:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q=P.jC()
this.b.push(q)
s=J.z1(J.vG(s,this.ghs()))
for(t=J.aT(s),p=J.aT(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b_(p.n(r,o)))
return q},
hv:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
if(3>=t)return H.u(a,3)
q=a[3]
if(J.aX(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cQ(q)
if(o==null)return
n=new H.fy(o,r)}else n=new H.ic(s,q,r)
this.b.push(n)
return n},
ht:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.u(a,1)
s=a[1]
if(2>=t)return H.u(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.aT(s)
p=J.aT(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a7(n)
if(!(o<n))break
q[t.n(s,o)]=this.b_(p.n(r,o));++o}return q}}
H.l9.prototype={
gU:function(a){return this.gm(this)===0},
A:function(a){return P.x1(this)},
i:function(a,b,c){return H.zx()},
$isb2:1,
$asb2:null}
H.la.prototype={
gm:function(a){return this.a},
Y:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Y(0,b))return
return this.dC(b)},
dC:function(a){return this.b[a]},
a1:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dC(q))}}}
H.oc.prototype={}
H.pr.prototype={
aK:function(a){var t,s,r
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
H.jL.prototype={
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.y(this.a)
return"NullError: method not found: '"+H.y(t)+"' on null"}}
H.mT.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.y(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.y(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.y(this.a)+")"}}
H.pt.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h6.prototype={
gaM:function(){return this.b}}
H.ta.prototype={
$1:function(a){if(!!J.ao(a).$isee)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kp.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rV.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rW.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rX.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rY.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.rZ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eW.prototype={
A:function(a){return"Closure '"+H.jT(this).trim()+"'"},
$istL:1,
gis:function(){return this},
$D:null}
H.pa.prototype={}
H.oE.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fN.prototype={
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fN))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga7:function(a){var t,s
t=this.c
if(t==null)s=H.eu(this.a)
else s=typeof t!=="object"?J.dD(t):H.eu(t)
t=H.eu(this.b)
if(typeof s!=="number")return s.iv()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.y(this.d)+"' of "+H.o6(t)}}
H.l4.prototype={
A:function(a){return this.a}}
H.oh.prototype={
A:function(a){return"RuntimeError: "+H.y(this.a)}}
H.dQ.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga7:function(a){return J.dD(this.a)},
S:function(a,b){if(b==null)return!1
return b instanceof H.dQ&&J.aX(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gaE:function(a){return new H.n3(this,[H.P(this,0)])},
gc7:function(a){return H.dx(this.gaE(this),new H.mS(this),H.P(this,0),H.P(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dv(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dv(s,b)}else return this.hL(b)},
hL:function(a){var t=this.d
if(t==null)return!1
return this.by(this.bN(t,this.bx(a)),a)>=0},
aw:function(a,b){b.a1(0,new H.mR(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bn(t,b)
return s==null?null:s.gb0()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bn(r,b)
return s==null?null:s.gb0()}else return this.hM(b)},
hM:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bN(t,this.bx(a))
r=this.by(s,a)
if(r<0)return
return s[r].gb0()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cs()
this.b=t}this.dk(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cs()
this.c=s}this.dk(s,b,c)}else{r=this.d
if(r==null){r=this.cs()
this.d=r}q=this.bx(b)
p=this.bN(r,q)
if(p==null)this.cA(r,q,[this.ct(b,c)])
else{o=this.by(p,b)
if(o>=0)p[o].sb0(c)
else p.push(this.ct(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.dR(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dR(this.c,b)
else return this.hN(b)},
hN:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bN(t,this.bx(a))
r=this.by(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.e0(q)
return q.gb0()},
bh:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a1:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.h(new P.bJ(this))
t=t.c}},
dk:function(a,b,c){var t=this.bn(a,b)
if(t==null)this.cA(a,b,this.ct(b,c))
else t.sb0(c)},
dR:function(a,b){var t
if(a==null)return
t=this.bn(a,b)
if(t==null)return
this.e0(t)
this.dA(a,b)
return t.gb0()},
ct:function(a,b){var t,s
t=new H.n2(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
e0:function(a){var t,s
t=a.gfU()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bx:function(a){return J.dD(a)&0x3ffffff},
by:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aX(a[s].gek(),b))return s
return-1},
A:function(a){return P.x1(this)},
bn:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
dA:function(a,b){delete a[b]},
dv:function(a,b){return this.bn(a,b)!=null},
cs:function(){var t=Object.create(null)
this.cA(t,"<non-identifier-key>",t)
this.dA(t,"<non-identifier-key>")
return t},
$isAt:1,
$isb2:1,
$asb2:null}
H.mS.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mR.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eN(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.n2.prototype={
gek:function(){return this.a},
gb0:function(){return this.b},
gfU:function(){return this.d},
sb0:function(a){return this.b=a}}
H.n3.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gV:function(a){var t,s
t=this.a
s=new H.n4(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
X:function(a,b){return this.a.Y(0,b)},
a1:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.h(new P.bJ(t))
s=s.c}}}
H.n4.prototype={
gO:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.h(new P.bJ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rR.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.x]}}}
H.rT.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.x]}}}
H.hn.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdM:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uj(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdL:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.uj(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
hx:function(a){var t=this.b.exec(H.rD(a))
if(t==null)return
return new H.i8(this,t)},
cE:function(a,b,c){var t
H.rD(b)
t=J.c_(b)
if(typeof t!=="number")return H.a7(t)
t=c>t
if(t)throw H.h(P.bE(c,0,J.c_(b),null,null))
return new H.q_(this,b,c)},
aQ:function(a,b){return this.cE(a,b,0)},
fz:function(a,b){var t,s
t=this.gdM()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.i8(this,s)},
co:function(a,b){var t,s
t=this.gdL()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.u(s,-1)
if(s.pop()!=null)return
return new H.i8(this,s)},
eq:function(a,b,c){if(c<0||c>b.length)throw H.h(P.bE(c,0,b.length,null,null))
return this.co(b,c)},
$isGg:1,
gfP:function(){return this.b}}
H.i8.prototype={
gde:function(a){return this.b.index},
geb:function(a){var t=this.b
return t.index+t[0].length},
bd:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.u(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$isdy:1}
H.q_.prototype={
gV:function(a){return new H.i_(this.a,this.b,this.c,null)},
$ashm:function(){return[P.dy]},
$asn:function(){return[P.dy]}}
H.i_.prototype={
gO:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c_(t)
if(typeof t!=="number")return H.a7(t)
if(s<=t){r=this.a.fz(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.hS.prototype={
geb:function(a){return this.a+this.c.length},
n:function(a,b){return this.bd(b)},
bd:function(a){if(a!==0)throw H.h(P.jV(a,null,null))
return this.c},
$isdy:1,
gde:function(a){return this.a}}
H.r8.prototype={
gV:function(a){return new H.r9(this.a,this.b,this.c,null)},
gG:function(a){var t,s,r
t=this.a
s=this.b
r=t.indexOf(s,this.c)
if(r>=0)return new H.hS(r,t,s)
throw H.h(H.di())},
$asn:function(){return[P.dy]}}
H.r9.prototype={
F:function(){var t,s,r,q,p,o,n
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
this.d=new H.hS(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gO:function(){return this.d}}
H.fh.prototype={
gad:function(a){return C.a8},
he:function(a,b,c){return H.cP(a,b,c)},
hd:function(a){return this.he(a,0,null)},
hc:function(a,b,c){var t
H.xW(a,b,c)
t=new DataView(a,b)
return t},
hb:function(a,b){return this.hc(a,b,null)},
$isfh:1,
$isbi:1,
geo:function(a){return a.byteLength}}
H.et.prototype={
fM:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.dV(b,d,"Invalid list position"))
else throw H.h(P.bE(b,0,c,d,null))},
dq:function(a,b,c,d){if(b>>>0!==b||b>c)this.fM(a,b,c,d)},
$iset:1,
gbX:function(a){return a.buffer},
geo:function(a){return a.byteLength}}
H.nv.prototype={
gad:function(a){return C.a9}}
H.jH.prototype={
gm:function(a){return a.length},
dW:function(a,b,c,d,e){var t,s,r
t=a.length
this.dq(a,b,t,"start")
this.dq(a,c,t,"end")
if(typeof b!=="number")return b.az()
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.h(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a4()
if(e<0)throw H.h(P.dE(e))
r=d.length
if(r-e<s)throw H.h(new P.aN("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaD:1,
$asaD:function(){},
$isax:1,
$asax:function(){}}
H.hA.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
a[b]=c},
a5:function(a,b,c,d,e){if(!!J.ao(d).$ishA){this.dW(a,b,c,d,e)
return}this.dg(a,b,c,d,e)},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)}}
H.hC.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]},
$isp:1,
$isr:1,
$isn:1}
H.hE.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.V]},
$asr:function(){return[P.V]},
$asn:function(){return[P.V]}}
H.hB.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
a[b]=c},
a5:function(a,b,c,d,e){if(!!J.ao(d).$ishB){this.dW(a,b,c,d,e)
return}this.dg(a,b,c,d,e)},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.hD.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
H.hF.prototype={
$asaD:function(){},
$asax:function(){},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.nw.prototype={
gad:function(a){return C.aa},
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.nx.prototype={
gad:function(a){return C.ab},
$isp:1,
$asp:function(){return[P.V]},
$isr:1,
$asr:function(){return[P.V]},
$isn:1,
$asn:function(){return[P.V]}}
H.ny.prototype={
gad:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nz.prototype={
gad:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nA.prototype={
gad:function(a){return C.ae},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nB.prototype={
gad:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nC.prototype={
gad:function(a){return C.aj},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.jI.prototype={
gad:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.fi.prototype={
gad:function(a){return C.al},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c5(a,b))
return a[b]},
cd:function(a,b,c){return new Uint8Array(a.subarray(b,H.Ho(b,c,a.length)))},
$isfi:1,
$isdc:1,
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.q1.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.q0.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.q2.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.q3.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.rr.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rs.prototype={
$2:function(a,b){this.a.$2(1,new H.h6(a,b))},
$S:function(){return{func:1,args:[,P.dO]}}}
P.rC.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.cm.prototype={}
P.rG.prototype={
$0:function(){var t,s,r
try{this.b.aJ(this.a.$0())}catch(r){t=H.bO(r)
s=H.cu(r)
P.xX(this.b,t,s)}},
$S:function(){return{func:1}}}
P.me.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.al(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.md.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.u(r,t)
r[t]=a
if(s===0)this.d.du(r)}else if(t.b===0&&!this.b)this.d.al(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eX.prototype={}
P.kf.prototype={
cI:function(a,b){if(a==null)a=new P.fj()
if(this.a.a!==0)throw H.h(new P.aN("Future already completed"))
$.an.toString
this.al(a,b)},
br:function(a){return this.cI(a,null)},
$iseX:1,
ghC:function(){return this.a}}
P.dS.prototype={
aD:function(a,b){var t=this.a
if(t.a!==0)throw H.h(new P.aN("Future already completed"))
t.dm(b)},
hh:function(a){return this.aD(a,null)},
al:function(a,b){this.a.dn(a,b)}}
P.kr.prototype={
aD:function(a,b){var t=this.a
if(t.a!==0)throw H.h(new P.aN("Future already completed"))
t.aJ(b)},
al:function(a,b){this.a.al(a,b)}}
P.kk.prototype={
gh6:function(){return this.b.b},
geg:function(){return(this.c&1)!==0},
ghJ:function(){return(this.c&2)!==0},
gef:function(){return this.c===8},
hH:function(a){return this.b.b.d0(this.d,a)},
hR:function(a){if(this.c!==6)return!0
return this.b.b.d0(this.d,J.fF(a))},
hD:function(a){var t,s,r
t=this.e
s=J.aM(a)
r=this.b.b
if(H.eP(t,{func:1,args:[,,]}))return r.ih(t,s.gaq(a),a.gaM())
else return r.d0(t,s.gaq(a))},
hI:function(){return this.b.b.ez(this.d)},
gcu:function(){return this.a}}
P.bm.prototype={
gfN:function(){return this.a===2},
gcr:function(){return this.a>=4},
c5:function(a,b){var t=$.an
if(t!==C.e){t.toString
if(b!=null)b=P.y_(b,t)}return this.cB(a,b)},
b4:function(a){return this.c5(a,null)},
cB:function(a,b){var t,s
t=new P.bm(0,$.an,null,[null])
s=b==null?1:3
this.cf(new P.kk(null,t,s,a,b,[H.P(this,0),null]))
return t},
c8:function(a){var t,s
t=$.an
s=new P.bm(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.P(this,0)
this.cf(new P.kk(null,s,8,a,null,[t,t]))
return s},
cf:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcr()){s.cf(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fB(null,null,t,new P.qq(this,a))}},
dQ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcu()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcr()){p.dQ(a)
return}this.a=p.a
this.c=p.c}t.a=this.bS(a)
s=this.b
s.toString
P.fB(null,null,s,new P.qy(t,this))}},
bR:function(){var t=this.c
this.c=null
return this.bS(t)},
bS:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcu()
t.a=s}return s},
aJ:function(a){var t,s
t=this.$ti
if(H.dT(a,"$iscm",t,"$ascm"))if(H.dT(a,"$isbm",t,null))P.qt(a,this)
else P.xJ(a,this)
else{s=this.bR()
this.a=4
this.c=a
P.fw(this,s)}},
du:function(a){var t=this.bR()
this.a=4
this.c=a
P.fw(this,t)},
al:function(a,b){var t=this.bR()
this.a=8
this.c=new P.eQ(a,b)
P.fw(this,t)},
fp:function(a){return this.al(a,null)},
dm:function(a){var t
if(H.dT(a,"$iscm",this.$ti,"$ascm")){this.fm(a)
return}this.a=1
t=this.b
t.toString
P.fB(null,null,t,new P.qs(this,a))},
fm:function(a){var t
if(H.dT(a,"$isbm",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fB(null,null,t,new P.qx(this,a))}else P.qt(a,this)
return}P.xJ(a,this)},
dn:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fB(null,null,t,new P.qr(this,a,b))},
$iscm:1,
gbT:function(){return this.a},
gfX:function(){return this.c}}
P.qq.prototype={
$0:function(){P.fw(this.a,this.b)},
$S:function(){return{func:1}}}
P.qy.prototype={
$0:function(){P.fw(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qu.prototype={
$1:function(a){var t=this.a
t.a=0
t.aJ(a)},
$S:function(){return{func:1,args:[,]}}}
P.qv.prototype={
$2:function(a,b){this.a.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qw.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qs.prototype={
$0:function(){this.a.du(this.b)},
$S:function(){return{func:1}}}
P.qx.prototype={
$0:function(){P.qt(this.b,this.a)},
$S:function(){return{func:1}}}
P.qr.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.qB.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hI()}catch(q){s=H.bO(q)
r=H.cu(q)
if(this.c){p=J.fF(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eQ(s,r)
o.a=!0
return}if(!!J.ao(t).$iscm){if(t instanceof P.bm&&t.gbT()>=4){if(t.gbT()===8){p=this.b
p.b=t.gfX()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b4(new P.qC(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qC.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qA.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hH(this.c)}catch(r){t=H.bO(r)
s=H.cu(r)
q=this.a
q.b=new P.eQ(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qz.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hR(t)===!0&&q.e!=null){p=this.b
p.b=q.hD(t)
p.a=!1}}catch(o){s=H.bO(o)
r=H.cu(o)
q=this.a
p=J.fF(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eQ(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ke.prototype={}
P.dl.prototype={
ay:function(a,b){return new P.qP(b,this,[H.ay(this,"dl",0),null])},
X:function(a,b){var t,s
t={}
s=new P.bm(0,$.an,null,[P.cU])
t.a=null
t.a=this.aS(new P.oK(t,this,b,s),!0,new P.oL(s),s.gbf())
return s},
a1:function(a,b){var t,s
t={}
s=new P.bm(0,$.an,null,[null])
t.a=null
t.a=this.aS(new P.oQ(t,this,b,s),!0,new P.oR(s),s.gbf())
return s},
gm:function(a){var t,s
t={}
s=new P.bm(0,$.an,null,[P.C])
t.a=0
this.aS(new P.oU(t),!0,new P.oV(t,s),s.gbf())
return s},
gU:function(a){var t,s
t={}
s=new P.bm(0,$.an,null,[P.cU])
t.a=null
t.a=this.aS(new P.oS(t,s),!0,new P.oT(s),s.gbf())
return s},
ao:function(a){var t,s,r
t=H.ay(this,"dl",0)
s=H.a([],[t])
r=new P.bm(0,$.an,null,[[P.p,t]])
this.aS(new P.oW(this,s),!0,new P.oX(s,r),r.gbf())
return r},
gG:function(a){var t,s
t={}
s=new P.bm(0,$.an,null,[H.ay(this,"dl",0)])
t.a=null
t.a=this.aS(new P.oM(t,this,s),!0,new P.oN(s),s.gbf())
return s}}
P.oK.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.y3(new P.oI(this.c,a),new P.oJ(t,s),P.xV(t.a,s))},
$S:function(){return H.eN(function(a){return{func:1,args:[a]}},this.b,"dl")}}
P.oI.prototype={
$0:function(){return J.aX(this.b,this.a)},
$S:function(){return{func:1}}}
P.oJ.prototype={
$1:function(a){if(a===!0)P.vk(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cU]}}}
P.oL.prototype={
$0:function(){this.a.aJ(!1)},
$S:function(){return{func:1}}}
P.oQ.prototype={
$1:function(a){P.y3(new P.oO(this.c,a),new P.oP(),P.xV(this.a.a,this.d))},
$S:function(){return H.eN(function(a){return{func:1,args:[a]}},this.b,"dl")}}
P.oO.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.oP.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.oR.prototype={
$0:function(){this.a.aJ(null)},
$S:function(){return{func:1}}}
P.oU.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.oV.prototype={
$0:function(){this.b.aJ(this.a.a)},
$S:function(){return{func:1}}}
P.oS.prototype={
$1:function(a){P.vk(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.oT.prototype={
$0:function(){this.a.aJ(!0)},
$S:function(){return{func:1}}}
P.oW.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eN(function(a){return{func:1,args:[a]}},this.a,"dl")}}
P.oX.prototype={
$0:function(){this.b.aJ(this.a)},
$S:function(){return{func:1}}}
P.oM.prototype={
$1:function(a){P.vk(this.a.a,this.c,a)},
$S:function(){return H.eN(function(a){return{func:1,args:[a]}},this.b,"dl")}}
P.oN.prototype={
$0:function(){var t,s,r,q
try{r=H.di()
throw H.h(r)}catch(q){t=H.bO(q)
s=H.cu(q)
P.xX(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oH.prototype={}
P.dm.prototype={
cT:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.e6()
if((t&4)===0&&(this.e&32)===0)this.dE(this.gdO())},
eu:function(a){return this.cT(a,null)},
ey:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gU(t)}else t=!1
if(t)this.r.cb(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dE(this.gdP())}}}},
bY:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.ci()
t=this.f
return t==null?$.$get$hf():t},
ci:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.e6()
if((this.e&32)===0)this.r=null
this.f=this.dN()},
bM:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dT(b)
else this.cg(new P.qe(b,null,[H.ay(this,"dm",0)]))},
bK:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dV(a,b)
else this.cg(new P.qg(a,b,null))},
fl:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dU()
else this.cg(C.P)},
bP:function(){},
bQ:function(){},
dN:function(){return},
cg:function(a){var t,s
t=this.r
if(t==null){t=new P.r6(null,null,0,[H.ay(this,"dm",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.cb(this)}},
dT:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.d1(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cj((t&4)!==0)},
dV:function(a,b){var t,s
t=this.e
s=new P.q7(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.ci()
t=this.f
if(!!J.ao(t).$iscm&&t!==$.$get$hf())t.c8(s)
else s.$0()}else{s.$0()
this.cj((t&4)!==0)}},
dU:function(){var t,s
t=new P.q6(this)
this.ci()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ao(s).$iscm&&s!==$.$get$hf())s.c8(t)
else t.$0()},
dE:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cj((t&4)!==0)},
cj:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gU(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gU(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bP()
else this.bQ()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.cb(this)},
fd:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.y_(b,t)
this.c=c},
gbT:function(){return this.e}}
P.q7.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.eP(s,{func:1,args:[P.ab,P.dO]})
q=t.d
p=this.b
o=t.b
if(r)q.ii(o,p,this.c)
else q.d1(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.q6.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eA(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.ki.prototype={
gbz:function(a){return this.a},
sbz:function(a,b){return this.a=b}}
P.qe.prototype={
cU:function(a){a.dT(this.b)}}
P.qg.prototype={
cU:function(a){a.dV(this.b,this.c)},
$aski:function(){},
gaq:function(a){return this.b},
gaM:function(){return this.c}}
P.qf.prototype={
cU:function(a){a.dU()},
gbz:function(a){return},
sbz:function(a,b){throw H.h(new P.aN("No events after a done."))}}
P.qR.prototype={
cb:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.yr(new P.qS(this,a))
this.a=1},
e6:function(){if(this.a===1)this.a=3},
gbT:function(){return this.a}}
P.qS.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbz(r)
t.b=q
if(q==null)t.c=null
r.cU(this.b)},
$S:function(){return{func:1}}}
P.r6.prototype={
gU:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbz(0,b)
this.c=b}}}
P.r7.prototype={}
P.ru.prototype={
$0:function(){return this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.rt.prototype={
$2:function(a,b){P.Hn(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dO]}}}
P.rv.prototype={
$0:function(){return this.a.aJ(this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
aS:function(a,b,c,d){return this.ft(a,d,c,!0===b)},
ep:function(a,b,c){return this.aS(a,null,b,c)},
ft:function(a,b,c,d){return P.H0(this,a,b,c,d,H.ay(this,"i3",0),H.ay(this,"i3",1))},
dF:function(a,b){b.bM(0,a)},
fK:function(a,b,c){c.bK(a,b)},
$asdl:function(a,b){return[b]}}
P.i4.prototype={
bM:function(a,b){if((this.e&2)!==0)return
this.f2(0,b)},
bK:function(a,b){if((this.e&2)!==0)return
this.f3(a,b)},
bP:function(){var t=this.y
if(t==null)return
t.eu(0)},
bQ:function(){var t=this.y
if(t==null)return
t.ey(0)},
dN:function(){var t=this.y
if(t!=null){this.y=null
return t.bY(0)}return},
fF:function(a){this.x.dF(a,this)},
fJ:function(a,b){this.x.fK(a,b,this)},
fH:function(){this.fl()},
fg:function(a,b,c,d,e,f,g){this.y=this.x.a.ep(this.gfE(),this.gfG(),this.gfI())},
$asdm:function(a,b){return[b]}}
P.qP.prototype={
dF:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bO(q)
r=H.cu(q)
P.Hm(b,s,r)
return}b.bM(0,t)}}
P.eQ.prototype={
A:function(a){return H.y(this.a)},
$isee:1,
gaq:function(a){return this.a},
gaM:function(){return this.b}}
P.rq.prototype={}
P.rB.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fj()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.h(t)
r=H.h(t)
r.stack=J.cw(s)
throw r},
$S:function(){return{func:1}}}
P.qV.prototype={
eA:function(a){var t,s,r,q
try{if(C.e===$.an){r=a.$0()
return r}r=P.y0(null,null,this,a)
return r}catch(q){t=H.bO(q)
s=H.cu(q)
r=P.kv(null,null,this,t,s)
return r}},
d1:function(a,b){var t,s,r,q
try{if(C.e===$.an){r=a.$1(b)
return r}r=P.y2(null,null,this,a,b)
return r}catch(q){t=H.bO(q)
s=H.cu(q)
r=P.kv(null,null,this,t,s)
return r}},
ii:function(a,b,c){var t,s,r,q
try{if(C.e===$.an){r=a.$2(b,c)
return r}r=P.y1(null,null,this,a,b,c)
return r}catch(q){t=H.bO(q)
s=H.cu(q)
r=P.kv(null,null,this,t,s)
return r}},
cG:function(a,b){if(b)return new P.qW(this,a)
else return new P.qX(this,a)},
hf:function(a,b){return new P.qY(this,a)},
n:function(a,b){return},
ez:function(a){if($.an===C.e)return a.$0()
return P.y0(null,null,this,a)},
d0:function(a,b){if($.an===C.e)return a.$1(b)
return P.y2(null,null,this,a,b)},
ih:function(a,b,c){if($.an===C.e)return a.$2(b,c)
return P.y1(null,null,this,a,b,c)}}
P.qW.prototype={
$0:function(){return this.a.eA(this.b)},
$S:function(){return{func:1}}}
P.qX.prototype={
$0:function(){return this.a.ez(this.b)},
$S:function(){return{func:1}}}
P.qY.prototype={
$1:function(a){return this.a.d1(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qE.prototype={
gm:function(a){return this.a},
gU:function(a){return this.a===0},
gc7:function(a){var t=H.P(this,0)
return H.dx(new P.qF(this,[t]),new P.qH(this),t,H.P(this,1))},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fs(b)},
fs:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fC(0,b)},
fC:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vh()
this.b=t}this.ds(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vh()
this.c=s}this.ds(s,b,c)}else this.h_(b,c)},
h_:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vh()
this.d=t}s=this.aO(a)
r=t[s]
if(r==null){P.vi(t,s,[a,b]);++this.a
this.e=null}else{q=this.aP(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.cz(0,b)},
cz:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a1:function(a,b){var t,s,r,q
t=this.cl()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.h(new P.bJ(this))}},
cl:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
ds:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vi(a,b,c)},
bl:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.H2(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aO:function(a){return J.dD(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aX(a[s],b))return s
return-1},
$isb2:1,
$asb2:null}
P.qH.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qF.prototype={
gm:function(a){return this.a.a},
gU:function(a){return this.a.a===0},
gV:function(a){var t=this.a
return new P.qG(t,t.cl(),0,null,this.$ti)},
X:function(a,b){return this.a.Y(0,b)},
a1:function(a,b){var t,s,r,q
t=this.a
s=t.cl()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.h(new P.bJ(t))}}}
P.qG.prototype={
gO:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.h(new P.bJ(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kn.prototype={
bx:function(a){return H.Id(a)&0x3ffffff},
by:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gek()
if(r==null?b==null:r===b)return s}return-1}}
P.km.prototype={
gV:function(a){var t=new P.dn(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gU:function(a){return this.a===0},
X:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fq(b)},
fq:function(a){var t=this.d
if(t==null)return!1
return this.aP(t[this.aO(a)],a)>=0},
cQ:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.X(0,a)?a:null
else return this.fO(a)},
fO:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aO(a)]
r=this.aP(s,a)
if(r<0)return
return J.ii(s,r).gdB()},
a1:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.h(new P.bJ(this))
t=t.b}},
gG:function(a){var t=this.e
if(t==null)throw H.h(new P.aN("No elements"))
return t.a},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dr(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dr(r,b)}else return this.aN(0,b)},
aN:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.H5()
this.d=t}s=this.aO(b)
r=t[s]
if(r==null)t[s]=[this.ck(b)]
else{if(this.aP(r,b)>=0)return!1
r.push(this.ck(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bl(this.c,b)
else return this.cz(0,b)},
cz:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aO(b)]
r=this.aP(s,b)
if(r<0)return!1
this.dt(s.splice(r,1)[0])
return!0},
bh:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dr:function(a,b){if(a[b]!=null)return!1
a[b]=this.ck(b)
return!0},
bl:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dt(t)
delete a[b]
return!0},
ck:function(a){var t,s
t=new P.qL(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dt:function(a){var t,s
t=a.gfo()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aO:function(a){return J.dD(a)&0x3ffffff},
aP:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aX(a[s].gdB(),b))return s
return-1},
$ise4:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qL.prototype={
gdB:function(){return this.a},
gfo:function(){return this.c}}
P.dn.prototype={
gO:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.h(new P.bJ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qI.prototype={}
P.ff.prototype={
ay:function(a,b){return H.dx(this,b,H.ay(this,"ff",0),null)},
X:function(a,b){var t
for(t=this.gV(this);t.F();)if(J.aX(t.gO(),b))return!0
return!1},
a1:function(a,b){var t
for(t=this.gV(this);t.F();)b.$1(t.gO())},
a3:function(a,b){return P.dj(this,!0,H.ay(this,"ff",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.F();)++s
return s},
gU:function(a){return!this.gV(this).F()},
gG:function(a){var t=this.gV(this)
if(!t.F())throw H.h(H.di())
return t.gO()},
A:function(a){return P.uf(this,"(",")")},
$isn:1,
$asn:null}
P.hm.prototype={}
P.hs.prototype={}
P.fl.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.aS.prototype={
gV:function(a){return new H.eq(a,this.gm(a),0,null,[H.ay(a,"aS",0)])},
T:function(a,b){return this.n(a,b)},
a1:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.h(new P.bJ(a))}},
gU:function(a){return this.gm(a)===0},
gG:function(a){if(this.gm(a)===0)throw H.h(H.di())
return this.n(a,0)},
X:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.aX(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.h(new P.bJ(a))}return!1},
ay:function(a,b){return new H.es(a,b,[H.ay(a,"aS",0),null])},
da:function(a,b){return H.xl(a,b,null,H.ay(a,"aS",0))},
a3:function(a,b){var t,s,r
t=H.a([],[H.ay(a,"aS",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.u(t,s)
t[s]=r}return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bv:function(a,b,c,d){var t
P.dk(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a5:function(a,b,c,d,e){var t,s,r,q,p,o
P.dk(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.ak()
if(typeof b!=="number")return H.a7(b)
t=c-b
if(t===0)return
if(J.e8(e,0))H.aZ(P.bE(e,0,null,"skipCount",null))
if(H.dT(d,"$isp",[H.ay(a,"aS",0)],"$asp")){s=e
r=d}else{r=J.z_(d,e).a3(0,!1)
s=0}q=J.kx(s)
p=J.aT(r)
if(J.cv(q.W(s,t),p.gm(r)))throw H.h(H.wV())
if(q.a4(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.W(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.W(s,o)))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
aG:function(a,b,c,d){var t,s,r,q,p
P.dk(b,c,this.gm(a),null,null,null)
d=C.c.ao(d)
if(typeof c!=="number")return c.ak()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.at(a,b,r,d)
if(q!==0){this.a5(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a5(a,r,p,a,c)
this.at(a,b,r,d)}},
b2:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.aX(this.n(a,t),b))return t
return-1},
bj:function(a,b){return this.b2(a,b,0)},
A:function(a){return P.jy(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.rh.prototype={
i:function(a,b,c){throw H.h(new P.R("Cannot modify unmodifiable map"))},
$isb2:1,
$asb2:null}
P.ni.prototype={
n:function(a,b){return J.ii(this.a,b)},
i:function(a,b,c){J.kC(this.a,b,c)},
Y:function(a,b){return J.yD(this.a,b)},
a1:function(a,b){J.yG(this.a,b)},
gU:function(a){return J.tb(this.a)},
gm:function(a){return J.c_(this.a)},
A:function(a){return J.cw(this.a)},
$isb2:1,
$asb2:null}
P.hW.prototype={$asb2:null,$isb2:1}
P.nj.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.y(a)
t.N=s+": "
t.N+=H.y(b)},
$S:function(){return{func:1,args:[,,]}}}
P.n5.prototype={
gV:function(a){return new P.qM(this,this.c,this.d,this.b,null,this.$ti)},
a1:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.u(r,s)
b.$1(r[s])
if(t!==this.d)H.aZ(new P.bJ(this))}},
gU:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gG:function(a){var t,s
t=this.b
if(t===this.c)throw H.h(H.di())
s=this.a
if(t>=s.length)return H.u(s,t)
return s[t]},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a7(b)
if(0>b||b>=t)H.aZ(P.bz(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.u(s,q)
return s[q]},
a3:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.h5(t)
return t},
ao:function(a){return this.a3(a,!0)},
h:function(a,b){this.aN(0,b)},
bh:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.u(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jy(this,"{","}")},
ex:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.h(H.di());++this.d
s=this.a
r=s.length
if(t>=r)return H.u(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aN:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.u(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dD();++this.d},
dD:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a5(s,0,q,t,r)
C.b.a5(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
h5:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a5(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a5(a,0,p,r,t)
C.b.a5(a,p,p+this.c,this.a,0)
return this.c+p}},
f8:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.qM.prototype={
gO:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aZ(new P.bJ(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.u(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.os.prototype={
gU:function(a){return this.a===0},
aw:function(a,b){var t
for(t=J.cW(b);t.F();)this.h(0,t.gO())},
a3:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dn(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.u(t,r)
t[r]=q}return t},
ao:function(a){return this.a3(a,!0)},
ay:function(a,b){return new H.fY(this,b,[H.P(this,0),null])},
A:function(a){return P.jy(this,"{","}")},
a1:function(a,b){var t
for(t=new P.dn(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
aR:function(a,b){var t,s
t=new P.dn(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.y(t.d)
while(t.F())}else{s=H.y(t.d)
for(;t.F();)s=s+b+H.y(t.d)}return s.charCodeAt(0)==0?s:s},
gG:function(a){var t=new P.dn(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())throw H.h(H.di())
return t.d},
$ise4:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.or.prototype={}
P.kU.prototype={
hW:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.aT(b)
a1=P.dk(a0,a1,t.gm(b),null,null,null)
s=$.$get$xI()
if(typeof a1!=="number")return H.a7(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a_(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rP(C.c.a6(b,l))
h=H.rP(C.c.a6(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.u(s,g)
f=s[g]
if(f>=0){g=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.W()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.cc("")
p.N+=C.c.I(b,q,r)
p.N+=H.hH(k)
q=l
continue}}throw H.h(new P.bL("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.I(b,q,a1)
e=t.length
if(o>=0)P.vL(b,n,a1,o,m,e)
else{d=C.a.bJ(e-1,4)+1
if(d===1)throw H.h(new P.bL("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aG(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vL(b,n,a1,o,m,c)
else{d=C.d.bJ(c,4)
if(d===1)throw H.h(new P.bL("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aG(b,a1,a1,d===2?"==":"=")}return b},
$asfS:function(){return[[P.p,P.C],P.x]}}
P.kV.prototype={
$asfU:function(){return[[P.p,P.C],P.x]}}
P.fS.prototype={}
P.fU.prototype={}
P.lx.prototype={
$asfS:function(){return[P.x,[P.p,P.C]]}}
P.pD.prototype={
gH:function(a){return"utf-8"}}
P.pE.prototype={
cJ:function(a,b,c){var t,s,r,q
t=J.c_(a)
P.dk(b,c,t,null,null,null)
s=new P.cc("")
r=new P.rj(!1,s,!0,0,0,0)
r.cJ(a,b,t)
r.hy(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
hk:function(a){return this.cJ(a,0,null)},
$asfU:function(){return[[P.p,P.C],P.x]}}
P.rj.prototype={
hy:function(a,b,c){if(this.e>0)throw H.h(new P.bL("Unfinished UTF-8 octet sequence",b,c))},
cJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rl(c)
p=new P.rk(this,a,b,c)
$loop$0:for(o=J.aT(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aL()
if((l&192)!==128){k=new P.bL("Bad UTF-8 encoding 0x"+C.d.bF(l,16),a,m)
throw H.h(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.u(C.z,k)
if(t<=C.z[k]){k=new P.bL("Overlong encoding of 0x"+C.a.bF(t,16),a,m-r-1)
throw H.h(k)}if(t>1114111){k=new P.bL("Character outside valid Unicode range: 0x"+C.a.bF(t,16),a,m-r-1)
throw H.h(k)}if(!this.c||t!==65279)n.N+=H.hH(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cv(j,0)){this.c=!1
if(typeof j!=="number")return H.a7(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dC(l)
if(g.a4(l,0)){g=new P.bL("Negative UTF-8 code unit: -0x"+J.z2(g.d5(l),16),a,h-1)
throw H.h(g)}else{if(typeof l!=="number")return l.aL()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bL("Bad UTF-8 encoding 0x"+C.d.bF(l,16),a,h-1)
throw H.h(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rl.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.aT(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aL()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.rk.prototype={
$2:function(a,b){this.a.b.N+=P.p1(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.cU.prototype={}
P.bG.prototype={}
P.dX.prototype={
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dX))return!1
return this.a===b.a&&this.b===b.b},
aC:function(a,b){return C.a.aC(this.a,b.gh4())},
ga7:function(a){var t=this.a
return(t^C.a.aY(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.zA(H.x7(this))
s=P.ir(H.uN(this))
r=P.ir(H.uM(this))
q=P.ir(H.FW(this))
p=P.ir(H.FY(this))
o=P.ir(H.FZ(this))
n=P.zB(H.FX(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.zz(C.a.W(this.a,b.giy()),this.b)},
ghS:function(){return this.a},
di:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.h(P.dE(this.ghS()))},
$isbG:1,
$asbG:function(){return[P.dX]},
gh4:function(){return this.a}}
P.V.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.dH.prototype={
W:function(a,b){return new P.dH(this.a+b.gbm())},
ar:function(a,b){return new P.dH(C.a.bD(this.a*b))},
a4:function(a,b){return C.a.a4(this.a,b.gbm())},
az:function(a,b){return C.a.az(this.a,b.gbm())},
as:function(a,b){return C.a.as(this.a,b.gbm())},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.dH))return!1
return this.a===b.a},
ga7:function(a){return this.a&0x1FFFFFFF},
aC:function(a,b){return C.a.aC(this.a,b.gbm())},
A:function(a){var t,s,r,q,p
t=new P.lv()
s=this.a
if(s<0)return"-"+new P.dH(0-s).A(0)
r=t.$1(C.a.am(s,6e7)%60)
q=t.$1(C.a.am(s,1e6)%60)
p=new P.lu().$1(s%1e6)
return""+C.a.am(s,36e8)+":"+H.y(r)+":"+H.y(q)+"."+H.y(p)},
d5:function(a){return new P.dH(0-this.a)},
$isbG:1,
$asbG:function(){return[P.dH]},
gbm:function(){return this.a}}
P.lu.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.x,args:[P.C]}}}
P.lv.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.x,args:[P.C]}}}
P.ee.prototype={
gaM:function(){return H.cu(this.$thrownJsError)}}
P.fj.prototype={
A:function(a){return"Throw of null."}}
P.cX.prototype={
gcn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcm:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.y(t)
q=this.gcn()+s+r
if(!this.a)return q
p=this.gcm()
o=P.w2(this.b)
return q+p+": "+H.y(o)},
gH:function(a){return this.c}}
P.ez.prototype={
gcn:function(){return"RangeError"},
gcm:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.y(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.y(t)
else{if(typeof r!=="number")return r.az()
if(r>t)s=": Not in range "+H.y(t)+".."+H.y(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.y(t)}}return s}}
P.mw.prototype={
gcn:function(){return"RangeError"},
gcm:function(){if(J.e8(this.b,0))return": index must not be negative"
var t=this.f
if(J.aX(t,0))return": no indices are valid"
return": index should be less than "+H.y(t)},
gm:function(a){return this.f}}
P.R.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.eE.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.y(t):"UnimplementedError"}}
P.aN.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bJ.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.y(P.w2(t))+"."}}
P.nP.prototype={
A:function(a){return"Out of Memory"},
gaM:function(){return},
$isee:1}
P.k2.prototype={
A:function(a){return"Stack Overflow"},
gaM:function(){return},
$isee:1}
P.lm.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.y(t)+"' during its initialization"}}
P.qp.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.y(t)}}
P.bL.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.y(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.y(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a4()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.I(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a7(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a6(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.y(r-o+1)+")\n"):s+(" (at character "+H.y(r+1)+")\n")
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
g=""}f=C.c.I(q,i,j)
return s+h+f+g+"\n"+C.c.ar(" ",r-i+h.length)+"^\n"}}
P.lE.prototype={
A:function(a){return"Expando:"+H.y(this.a)},
n:function(a,b){var t,s
t=this.bO
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aZ(P.dV(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.uO(b,"expando$values")
return s==null?null:H.uO(s,t)},
i:function(a,b,c){var t,s
t=this.bO
if(typeof t!=="string")t.set(b,c)
else{s=H.uO(b,"expando$values")
if(s==null){s=new P.ab()
H.xb(b,"expando$values",s)}H.xb(s,t,c)}},
gH:function(a){return this.a}}
P.C.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.n.prototype={
ay:function(a,b){return H.dx(this,b,H.ay(this,"n",0),null)},
c9:function(a,b){return new H.eH(this,b,[H.ay(this,"n",0)])},
X:function(a,b){var t
for(t=this.gV(this);t.F();)if(J.aX(t.gO(),b))return!0
return!1},
a1:function(a,b){var t
for(t=this.gV(this);t.F();)b.$1(t.gO())},
a3:function(a,b){return P.dj(this,!0,H.ay(this,"n",0))},
ao:function(a){return this.a3(a,!0)},
gm:function(a){var t,s
t=this.gV(this)
for(s=0;t.F();)++s
return s},
gU:function(a){return!this.gV(this).F()},
gG:function(a){var t=this.gV(this)
if(!t.F())throw H.h(H.di())
return t.gO()},
gbe:function(a){var t,s
t=this.gV(this)
if(!t.F())throw H.h(H.di())
s=t.gO()
if(t.F())throw H.h(H.Fy())
return s},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(P.z5("index"))
if(b<0)H.aZ(P.bE(b,0,null,"index",null))
for(t=this.gV(this),s=0;t.F();){r=t.gO()
if(b===s)return r;++s}throw H.h(P.bz(b,this,"index",null,s))},
A:function(a){return P.uf(this,"(",")")},
$asn:null}
P.jz.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.b2.prototype={$asb2:null}
P.cQ.prototype={
ga7:function(a){return P.ab.prototype.ga7.call(this,this)},
A:function(a){return"null"}}
P.dq.prototype={$isbG:1,
$asbG:function(){return[P.dq]}}
P.ab.prototype={constructor:P.ab,$isab:1,
S:function(a,b){return this===b},
ga7:function(a){return H.eu(this)},
A:function(a){return H.o6(this)},
gad:function(a){return new H.dQ(H.kz(this),null)},
toString:function(){return this.A(this)}}
P.dy.prototype={}
P.e4.prototype={}
P.dO.prototype={}
P.x.prototype={$isbG:1,
$asbG:function(){return[P.x]}}
P.cc.prototype={
gm:function(a){return this.N.length},
gU:function(a){return this.N.length===0},
A:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.eG.prototype={}
P.pA.prototype={
$2:function(a,b){var t,s,r,q
t=J.aT(b)
s=t.bj(b,"=")
if(s===-1){if(!t.S(b,""))J.kC(a,P.ri(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.I(b,0,s)
q=C.c.aa(b,s+1)
t=this.a
J.kC(a,P.ri(r,0,r.length,t,!0),P.ri(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pw.prototype={
$2:function(a,b){throw H.h(new P.bL("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.x,P.C]}}}
P.py.prototype={
$2:function(a,b){throw H.h(new P.bL("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.x],opt:[,]}}}
P.pz.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.ev(C.c.I(this.a,a,b),16,null)
s=J.dC(t)
if(s.a4(t,0)||s.az(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.ks.prototype={
geI:function(){return this.b},
gcO:function(a){var t=this.c
if(t==null)return""
if(C.c.a9(t,"["))return C.c.I(t,1,t.length-1)
return t},
gcV:function(a){var t=this.d
if(t==null)return P.xO(this.a)
return t},
gcY:function(a){var t=this.f
return t==null?"":t},
gee:function(){var t=this.r
return t==null?"":t},
gbB:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.x
s=new P.hW(P.xB(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
geh:function(){return this.c!=null},
gej:function(){return this.f!=null},
gei:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dI()
this.y=t}return t},
dI:function(){var t,s,r,q
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
S:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.ao(b)
if(!!t.$iseG){if(this.a===b.gd6())if(this.c!=null===b.geh()){s=this.b
r=b.geI()
if(s==null?r==null:s===r){s=this.gcO(this)
r=t.gcO(b)
if(s==null?r==null:s===r)if(J.aX(this.gcV(this),t.gcV(b)))if(J.aX(this.e,t.ges(b))){s=this.f
r=s==null
if(!r===b.gej()){if(r)s=""
if(s===t.gcY(b)){t=this.r
s=t==null
if(!s===b.gei()){if(s)t=""
t=t===b.gee()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga7:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dI()
this.y=t}t=C.c.ga7(t)
this.z=t}return t},
$iseG:1,
gd6:function(){return this.a},
ges:function(a){return this.e}}
P.rF.prototype={
$1:function(a){throw H.h(new P.bL("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pv.prototype={
geG:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
t=t[0]+1
r=J.aT(s)
q=r.b2(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fz(s,o,p,C.k,!1)
if(n==null)n=r.I(s,o,p)
p=q}else n=null
m=P.fz(s,t,p,C.H,!1)
t=new P.qd(this,"data",null,null,null,m==null?r.I(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.u(t,0)
s=this.a
return t[0]===-1?"data:"+H.y(s):s}}
P.ry.prototype={
$1:function(a){return new Uint8Array(H.cA(96))},
$S:function(){return{func:1,args:[,]}}}
P.rx.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.u(t,a)
t=t[a]
J.yF(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.dc,args:[,,]}}}
P.rz.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.cV(a),r=0;r<t;++r)s.i(a,C.c.a6(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.dc,P.x,P.C]}}}
P.rA.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a6(b,0),s=C.c.a6(b,1),r=J.cV(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.dc,P.x,P.C]}}}
P.r5.prototype={
geh:function(){return this.c>0},
gej:function(){var t=this.f
if(typeof t!=="number")return t.a4()
return t<this.r},
gei:function(){return this.r<this.a.length},
gd6:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.a9(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.a9(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.a9(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.a9(this.a,"package")){this.x="package"
t="package"}else{t=C.c.I(this.a,0,t)
this.x=t}return t},
geI:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.I(this.a,s,t-1):""},
gcO:function(a){var t=this.c
return t>0?C.c.I(this.a,t,this.d):""},
gcV:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.W()
s=this.e
if(typeof s!=="number")return H.a7(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.W()
return H.ev(C.c.I(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.a9(this.a,"http"))return 80
if(t===5&&C.c.a9(this.a,"https"))return 443
return 0},
ges:function(a){return C.c.I(this.a,this.e,this.f)},
gcY:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a4()
return t<s?C.c.I(this.a,t+1,s):""},
gee:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.aa(s,t+1):""},
gbB:function(){var t=this.f
if(typeof t!=="number")return t.a4()
if(t>=this.r)return C.a6
t=P.x
return new P.hW(P.xB(this.gcY(this),C.n),[t,t])},
ga7:function(a){var t=this.y
if(t==null){t=C.c.ga7(this.a)
this.y=t}return t},
S:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.ao(b)
if(!!t.$iseG)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$iseG:1}
P.qd.prototype={}
W.aK.prototype={}
W.ea.prototype={
A:function(a){return String(a)},
$isea:1,
$isf:1,
ga8:function(a){return a.href},
sah:function(a,b){return a.type=b},
sa8:function(a,b){return a.href=b}}
W.kK.prototype={
A:function(a){return String(a)},
$isf:1,
ga8:function(a){return a.href},
sa8:function(a,b){return a.href=b}}
W.eS.prototype={$iseS:1,$isc6:1,$isae:1,$isab:1}
W.cL.prototype={$isab:1}
W.kS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cL]},
$isr:1,
$asr:function(){return[W.cL]},
$isn:1,
$asn:function(){return[W.cL]},
$isaD:1,
$asaD:function(){return[W.cL]},
$isax:1,
$asax:function(){return[W.cL]}}
W.h0.prototype={
$asp:function(){return[W.cL]},
$asr:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isp:1,
$isr:1,
$isn:1}
W.h3.prototype={
$asp:function(){return[W.cL]},
$asr:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isp:1,
$isr:1,
$isn:1}
W.kW.prototype={
ga8:function(a){return a.href},
sa8:function(a,b){return a.href=b}}
W.eU.prototype={$iseU:1}
W.eV.prototype={$iseV:1,$isf:1}
W.fR.prototype={$isfR:1,
gH:function(a){return a.name},
gaH:function(a){return a.value},
sah:function(a,b){return a.type=b}}
W.ec.prototype={$isf:1,
gm:function(a){return a.length}}
W.l8.prototype={$isf:1}
W.im.prototype={
cM:function(a,b){return typeof console!="undefined"?console.error(b):null},
bd:function(a){return typeof console!="undefined"?console.group(a):null},
el:function(a){return typeof console!="undefined"?console.info(a):null},
io:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fV.prototype={
gH:function(a){return a.name}}
W.le.prototype={
gaB:function(a){return a.style}}
W.lf.prototype={
ga8:function(a){return a.href}}
W.fW.prototype={
gaB:function(a){return a.style}}
W.fX.prototype={
gH:function(a){return a.name}}
W.lg.prototype={
gaB:function(a){return a.style}}
W.bK.prototype={$isbK:1,$isab:1}
W.eY.prototype={
bI:function(a,b){var t=this.fD(a,b)
return t!=null?t:""},
fD:function(a,b){if(W.zy(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.zC()+b)},
J:function(a,b){return a.item(b)},
gbi:function(a){return a.content},
gbt:function(a){return a.display},
sbt:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iQ.prototype={}
W.q9.prototype={
bI:function(a,b){var t=this.b
return J.yR(t.gG(t),b)},
h0:function(a,b){var t
for(t=this.a,t=new H.eq(t,t.gm(t),0,null,[H.P(t,0)]);t.F();)t.d.style[a]=b},
sbt:function(a,b){this.h0("display",b)},
fe:function(a){var t=P.dj(this.a,!0,null)
this.b=new H.es(t,new W.qa(),[H.P(t,0),null])}}
W.jM.prototype={}
W.qa.prototype={
$1:function(a){return J.tc(a)},
$S:function(){return{func:1,args:[,]}}}
W.ip.prototype={
gbi:function(a){return this.bI(a,"content")},
gbt:function(a){return this.bI(a,"display")}}
W.lh.prototype={
gaB:function(a){return a.style}}
W.li.prototype={
gaB:function(a){return a.style}}
W.ln.prototype={
gcN:function(a){return a.files}}
W.eZ.prototype={$iseZ:1,$isab:1}
W.iq.prototype={
bU:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
J:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.ed.prototype={$ised:1}
W.is.prototype={$isf:1}
W.it.prototype={
gH:function(a){return a.name}}
W.lq.prototype={
gH:function(a){var t=a.name
if(P.w_()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.w_()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.iu.prototype={
A:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(this.gb7(a))+" x "+H.y(this.gb1(a))},
S:function(a,b){var t
if(b==null)return!1
t=J.ao(b)
if(!t.$isbU)return!1
return a.left===t.gc0(b)&&a.top===t.gc6(b)&&this.gb7(a)===t.gb7(b)&&this.gb1(a)===t.gb1(b)},
ga7:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb7(a)
q=this.gb1(a)
return W.xM(W.eM(W.eM(W.eM(W.eM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb1:function(a){return a.height},
gc0:function(a){return a.left},
gc6:function(a){return a.top},
gb7:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.iv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]},
$isaD:1,
$asaD:function(){return[P.x]},
$isax:1,
$asax:function(){return[P.x]}}
W.iR.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
W.ja.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
W.iw.prototype={
J:function(a,b){return a.item(b)}}
W.ix.prototype={
h:function(a,b){return a.add(b)},
X:function(a,b){return a.contains(b)},
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kj.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot modify list"))},
sm:function(a,b){throw H.h(new P.R("Cannot modify list"))},
gG:function(a){return C.a7.gG(this.a)},
gaB:function(a){return W.H_(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.c6.prototype={
ge5:function(a){return new W.i1(a)},
ge7:function(a){return new W.qj(a)},
ghn:function(a){return new W.kh(new W.i1(a))},
A:function(a){return a.localName},
em:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
ax:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.w1
if(t==null){t=H.a([],[W.e1])
s=new W.jK(t)
t.push(W.xK(null))
t.push(W.xN())
$.w1=s
d=s}else d=t
t=$.w0
if(t==null){t=new W.kt(d)
$.w0=t
c=t}else{t.a=d
c=t}}if($.dY==null){t=document
s=t.implementation.createHTMLDocument("")
$.dY=s
$.tr=s.createRange()
s=$.dY
s.toString
r=s.createElement("base")
J.yX(r,t.baseURI)
$.dY.head.appendChild(r)}t=$.dY
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.dY
if(!!this.$iseV)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.dY.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.X(C.a2,a.tagName)){$.tr.selectNodeContents(q)
p=$.tr.createContextualFragment(b)}else{q.innerHTML=b
p=$.dY.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.dY.body
if(q==null?t!=null:q!==t)J.yU(q)
c.ca(p)
document.adoptNode(p)
return p},
hm:function(a,b,c){return this.ax(a,b,c,null)},
cc:function(a,b,c,d){a.textContent=null
a.appendChild(this.ax(a,b,c,d))},
d7:function(a,b){return this.cc(a,b,null,null)},
$isc6:1,
$isae:1,
$isab:1,
$isf:1,
gaB:function(a){return a.style},
gdK:function(a){return a.namespaceURI},
gij:function(a){return a.tagName}}
W.rE.prototype={
$1:function(a){return!!J.ao(a).$isc6},
$S:function(){return{func:1,args:[,]}}}
W.lw.prototype={
gH:function(a){return a.name},
sah:function(a,b){return a.type=b}}
W.h_.prototype={
gH:function(a){return a.name}}
W.lC.prototype={
gaq:function(a){return a.error}}
W.Q.prototype={$isQ:1,$isab:1}
W.aE.prototype={
h8:function(a,b,c,d){if(c!=null)this.bL(a,b,c,d)},
ia:function(a,b,c,d){if(c!=null)this.fW(a,b,c,!1)},
bL:function(a,b,c,d){return a.addEventListener(b,H.dp(c,1),d)},
fW:function(a,b,c,d){return a.removeEventListener(b,H.dp(c,1),!1)}}
W.m4.prototype={
gH:function(a){return a.name}}
W.cf.prototype={$iscf:1,$isab:1,
gH:function(a){return a.name}}
W.f7.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isf7:1,
$isaD:1,
$asaD:function(){return[W.cf]},
$isax:1,
$asax:function(){return[W.cf]},
$isp:1,
$asp:function(){return[W.cf]},
$isr:1,
$asr:function(){return[W.cf]},
$isn:1,
$asn:function(){return[W.cf]}}
W.iS.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.jb.prototype={
$asp:function(){return[W.cf]},
$asr:function(){return[W.cf]},
$asn:function(){return[W.cf]},
$isp:1,
$isr:1,
$isn:1}
W.m5.prototype={
gaq:function(a){return a.error}}
W.m6.prototype={
gH:function(a){return a.name}}
W.m7.prototype={
gaq:function(a){return a.error},
gm:function(a){return a.length}}
W.m9.prototype={
gaB:function(a){return a.style},
gd2:function(a){return a.weight}}
W.ma.prototype={
h:function(a,b){return a.add(b)},
ix:function(a,b,c){return a.forEach(H.dp(b,3),c)},
a1:function(a,b){b=H.dp(b,3)
return a.forEach(b)}}
W.iM.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isab:1}
W.mk.prototype={
gm:function(a){return a.length}}
W.f9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isn:1,
$asn:function(){return[W.ae]},
$isaD:1,
$asaD:function(){return[W.ae]},
$isax:1,
$asax:function(){return[W.ae]}}
W.iT.prototype={
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]},
$isp:1,
$isr:1,
$isn:1}
W.jc.prototype={
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]},
$isp:1,
$isr:1,
$isn:1}
W.iO.prototype={
J:function(a,b){return a.item(b)}}
W.e0.prototype={
iG:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hY:function(a,b,c,d){return a.open(b,c,d)},
gie:function(a){return W.Hr(a.response)},
b9:function(a,b){return a.send(b)},
$ise0:1,
$isab:1,
gig:function(a){return a.responseText}}
W.mn.prototype={
$1:function(a){return J.yO(a)},
$S:function(){return{func:1,args:[W.e0]}}}
W.mo.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.as()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aD(0,t)
else p.br(a)},
$S:function(){return{func:1,args:[,]}}}
W.hg.prototype={}
W.mr.prototype={
gH:function(a){return a.name}}
W.hh.prototype={$ishh:1}
W.ek.prototype={$isek:1,$isc6:1,$isae:1,$isab:1,
aD:function(a,b){return a.complete.$1(b)}}
W.mx.prototype={$isc6:1,$isf:1,$isae:1,
gcN:function(a){return a.files},
gH:function(a){return a.name},
gaH:function(a){return a.value},
sev:function(a,b){return a.placeholder=b},
sah:function(a,b){return a.type=b}}
W.mV.prototype={
gH:function(a){return a.name}}
W.mX.prototype={
gaH:function(a){return a.value}}
W.hp.prototype={
h:function(a,b){return a.add(b)}}
W.hq.prototype={$ishq:1,
ga8:function(a){return a.href},
sa8:function(a,b){return a.href=b},
sah:function(a,b){return a.type=b}}
W.nc.prototype={
A:function(a){return String(a)},
ga8:function(a){return a.href}}
W.nh.prototype={
gH:function(a){return a.name}}
W.hy.prototype={
gaq:function(a){return a.error}}
W.jF.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nm.prototype={
sah:function(a,b){return a.type=b}}
W.nn.prototype={
sah:function(a,b){return a.type=b}}
W.no.prototype={
gbi:function(a){return a.content},
gH:function(a){return a.name}}
W.np.prototype={
gaH:function(a){return a.value}}
W.nq.prototype={
it:function(a,b,c){return a.send(b,c)},
b9:function(a,b){return a.send(b)}}
W.hz.prototype={
gH:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isab:1}
W.jG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[W.cp]},
$isax:1,
$asax:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]}}
W.j2.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.jm.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.nD.prototype={$isf:1}
W.nE.prototype={
gH:function(a){return a.name}}
W.d2.prototype={
gG:function(a){var t=this.a.firstChild
if(t==null)throw H.h(new P.aN("No elements"))
return t},
gbe:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.h(new P.aN("No elements"))
if(s>1)throw H.h(new P.aN("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
aw:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.u(s,b)
t.replaceChild(c,s[b])},
gV:function(a){var t=this.a.childNodes
return new W.iK(t,t.length,-1,null,[H.ay(t,"bw",0)])},
a5:function(a,b,c,d,e){throw H.h(new P.R("Cannot setRange on Node list"))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
bv:function(a,b,c,d){throw H.h(new P.R("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.h(new P.R("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
$ashs:function(){return[W.ae]},
$asfl:function(){return[W.ae]},
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]}}
W.ae.prototype={
ghV:function(a){return new W.d2(a)},
i8:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
A:function(a){var t=a.nodeValue
return t==null?this.eZ(a):t},
X:function(a,b){return a.contains(b)},
$isae:1,
$isab:1,
gc2:function(a){return a.parentNode},
gcW:function(a){return a.previousSibling}}
W.jJ.prototype={
cX:function(a){return a.previousNode()}}
W.hG.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isn:1,
$asn:function(){return[W.ae]},
$isaD:1,
$asaD:function(){return[W.ae]},
$isax:1,
$asax:function(){return[W.ae]}}
W.j3.prototype={
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]},
$isp:1,
$isr:1,
$isn:1}
W.jn.prototype={
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]},
$isp:1,
$isr:1,
$isn:1}
W.nJ.prototype={
sah:function(a,b){return a.type=b}}
W.nK.prototype={
gH:function(a){return a.name},
sah:function(a,b){return a.type=b}}
W.nO.prototype={
gaH:function(a){return a.value}}
W.nQ.prototype={
gH:function(a){return a.name},
gaH:function(a){return a.value}}
W.nU.prototype={
gH:function(a){return a.name},
gaH:function(a){return a.value}}
W.nW.prototype={$isf:1}
W.e2.prototype={
gH:function(a){return a.name}}
W.o0.prototype={
gm:function(a){return a.length}}
W.ch.prototype={
J:function(a,b){return a.item(b)},
$isch:1,
$isab:1,
gm:function(a){return a.length},
gH:function(a){return a.name}}
W.jS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$isn:1,
$asn:function(){return[W.ch]},
$isaD:1,
$asaD:function(){return[W.ch]},
$isax:1,
$asax:function(){return[W.ch]}}
W.j4.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.jo.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.o5.prototype={
b9:function(a,b){return a.send(b)}}
W.o8.prototype={
gaH:function(a){return a.value}}
W.jW.prototype={
b9:function(a,b){return a.send(b)}}
W.jX.prototype={
sah:function(a,b){return a.type=b}}
W.fo.prototype={$isfo:1,$isc6:1,$isae:1,$isab:1,
sah:function(a,b){return a.type=b}}
W.jY.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gH:function(a){return a.name},
gaH:function(a){return a.value}}
W.oq.prototype={
gH:function(a){return a.name}}
W.ot.prototype={$isf:1}
W.ou.prototype={
gH:function(a){return a.name}}
W.ov.prototype={
gH:function(a){return a.name}}
W.cq.prototype={$iscq:1,$isab:1}
W.k_.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cq]},
$isr:1,
$asr:function(){return[W.cq]},
$isn:1,
$asn:function(){return[W.cq]},
$isaD:1,
$asaD:function(){return[W.cq]},
$isax:1,
$asax:function(){return[W.cq]}}
W.h1.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.h4.prototype={
$asp:function(){return[W.cq]},
$asr:function(){return[W.cq]},
$asn:function(){return[W.cq]},
$isp:1,
$isr:1,
$isn:1}
W.oy.prototype={
sah:function(a,b){return a.type=b}}
W.hN.prototype={$ishN:1}
W.cr.prototype={$iscr:1,$isab:1,
gd2:function(a){return a.weight}}
W.k0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$isn:1,
$asn:function(){return[W.cr]},
$isaD:1,
$asaD:function(){return[W.cr]},
$isax:1,
$asax:function(){return[W.cr]}}
W.j5.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.jp.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.fp.prototype={$isfp:1,$isab:1}
W.oA.prototype={
gaq:function(a){return a.error}}
W.cj.prototype={
J:function(a,b){return a.item(b)},
$iscj:1,
$isab:1,
gm:function(a){return a.length}}
W.oB.prototype={
gH:function(a){return a.name}}
W.oC.prototype={
gH:function(a){return a.name}}
W.oG.prototype={
Y:function(a,b){return a.getItem(b)!=null},
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a1:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gU:function(a){return a.key(0)==null},
$isb2:1,
$asb2:function(){return[P.x,P.x]}}
W.p2.prototype={
sah:function(a,b){return a.type=b}}
W.ck.prototype={$isck:1,$isab:1,
ga8:function(a){return a.href}}
W.e5.prototype={}
W.k3.prototype={
ax:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.ce(a,b,c,d)
t=W.zD("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d2(s).aw(0,J.yL(t))
return s}}
W.p8.prototype={
ax:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.ce(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.ax(t.createElement("table"),b,c,d)
t.toString
t=new W.d2(t)
r=t.gbe(t)
r.toString
t=new W.d2(r)
q=t.gbe(t)
s.toString
q.toString
new W.d2(s).aw(0,new W.d2(q))
return s}}
W.p9.prototype={
ax:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ce(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.ax(t.createElement("table"),b,c,d)
t.toString
t=new W.d2(t)
r=t.gbe(t)
s.toString
r.toString
new W.d2(s).aw(0,new W.d2(r))
return s}}
W.hT.prototype={
cc:function(a,b,c,d){var t
a.textContent=null
t=this.ax(a,b,c,d)
a.content.appendChild(t)},
d7:function(a,b){return this.cc(a,b,null,null)},
$ishT:1,
gbi:function(a){return a.content}}
W.pd.prototype={
gH:function(a){return a.name},
gaH:function(a){return a.value},
sev:function(a,b){return a.placeholder=b}}
W.cS.prototype={$isab:1}
W.cJ.prototype={$isab:1}
W.pg.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.cJ]},
$isax:1,
$asax:function(){return[W.cJ]},
$isp:1,
$asp:function(){return[W.cJ]},
$isr:1,
$asr:function(){return[W.cJ]},
$isn:1,
$asn:function(){return[W.cJ]}}
W.j6.prototype={
$asp:function(){return[W.cJ]},
$asr:function(){return[W.cJ]},
$asn:function(){return[W.cJ]},
$isp:1,
$isr:1,
$isn:1}
W.jq.prototype={
$asp:function(){return[W.cJ]},
$asr:function(){return[W.cJ]},
$asn:function(){return[W.cJ]},
$isp:1,
$isr:1,
$isn:1}
W.ph.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
$isaD:1,
$asaD:function(){return[W.cS]},
$isax:1,
$asax:function(){return[W.cS]},
$isp:1,
$asp:function(){return[W.cS]},
$isr:1,
$asr:function(){return[W.cS]},
$isn:1,
$asn:function(){return[W.cS]}}
W.h2.prototype={
$asp:function(){return[W.cS]},
$asr:function(){return[W.cS]},
$asn:function(){return[W.cS]},
$isp:1,
$isr:1,
$isn:1}
W.h5.prototype={
$asp:function(){return[W.cS]},
$asr:function(){return[W.cS]},
$asn:function(){return[W.cS]},
$isp:1,
$isr:1,
$isn:1}
W.pl.prototype={
gm:function(a){return a.length}}
W.ct.prototype={$isct:1,$isab:1}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ct]},
$isr:1,
$asr:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]},
$isaD:1,
$asaD:function(){return[W.ct]},
$isax:1,
$asax:function(){return[W.ct]}}
W.j7.prototype={
$asp:function(){return[W.ct]},
$asr:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$isr:1,
$isn:1}
W.jr.prototype={
$asp:function(){return[W.ct]},
$asr:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isp:1,
$isr:1,
$isn:1}
W.fs.prototype={$isfs:1,$isab:1}
W.k5.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e6.prototype={}
W.k6.prototype={
hZ:function(a){return a.parentNode()},
cX:function(a){return a.previousNode()}}
W.pB.prototype={
A:function(a){return String(a)},
$isf:1,
ga8:function(a){return a.href}}
W.pF.prototype={
gm:function(a){return a.length}}
W.ft.prototype={$isft:1,$isab:1}
W.k7.prototype={
J:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pK.prototype={
b9:function(a,b){return a.send(b)}}
W.ka.prototype={$isf:1,
gH:function(a){return a.name}}
W.pR.prototype={$isf:1}
W.eI.prototype={$isf:1}
W.fu.prototype={$isfu:1,$isae:1,$isab:1,
gH:function(a){return a.name},
gdK:function(a){return a.namespaceURI}}
W.q8.prototype={
A:function(a){return"Rectangle ("+H.y(a.left)+", "+H.y(a.top)+") "+H.y(a.width)+" x "+H.y(a.height)},
S:function(a,b){var t,s,r
if(b==null)return!1
t=J.ao(b)
if(!t.$isbU)return!1
s=a.left
r=t.gc0(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc6(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb1(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga7:function(a){var t,s,r,q
t=J.dD(a.left)
s=J.dD(a.top)
r=J.dD(a.width)
q=J.dD(a.height)
return W.xM(W.eM(W.eM(W.eM(W.eM(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gb1:function(a){return a.height},
gc0:function(a){return a.left},
gc6:function(a){return a.top},
gb7:function(a){return a.width}}
W.i0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[P.bU]},
$isax:1,
$asax:function(){return[P.bU]},
$isp:1,
$asp:function(){return[P.bU]},
$isr:1,
$asr:function(){return[P.bU]},
$isn:1,
$asn:function(){return[P.bU]}}
W.j8.prototype={
$asp:function(){return[P.bU]},
$asr:function(){return[P.bU]},
$asn:function(){return[P.bU]},
$isp:1,
$isr:1,
$isn:1}
W.js.prototype={
$asp:function(){return[P.bU]},
$asr:function(){return[P.bU]},
$asn:function(){return[P.bU]},
$isp:1,
$isr:1,
$isn:1}
W.kg.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bK]},
$isr:1,
$asr:function(){return[W.bK]},
$isn:1,
$asn:function(){return[W.bK]},
$isaD:1,
$asaD:function(){return[W.bK]},
$isax:1,
$asax:function(){return[W.bK]}}
W.j9.prototype={
$asp:function(){return[W.bK]},
$asr:function(){return[W.bK]},
$asn:function(){return[W.bK]},
$isp:1,
$isr:1,
$isn:1}
W.jt.prototype={
$asp:function(){return[W.bK]},
$asr:function(){return[W.bK]},
$asn:function(){return[W.bK]},
$isp:1,
$isr:1,
$isn:1}
W.qh.prototype={$isf:1}
W.qi.prototype={
gb1:function(a){return a.height},
gb7:function(a){return a.width}}
W.kl.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[W.cn]},
$isax:1,
$asax:function(){return[W.cn]},
$isp:1,
$asp:function(){return[W.cn]},
$isr:1,
$asr:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.iU.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.jd.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.qD.prototype={$isf:1}
W.i9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isn:1,
$asn:function(){return[W.ae]},
$isaD:1,
$asaD:function(){return[W.ae]},
$isax:1,
$asax:function(){return[W.ae]}}
W.iV.prototype={
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]},
$isp:1,
$isr:1,
$isn:1}
W.je.prototype={
$asp:function(){return[W.ae]},
$asr:function(){return[W.ae]},
$asn:function(){return[W.ae]},
$isp:1,
$isr:1,
$isn:1}
W.r2.prototype={$isf:1}
W.ko.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$isn:1,
$asn:function(){return[W.cj]},
$isaD:1,
$asaD:function(){return[W.cj]},
$isax:1,
$asax:function(){return[W.cj]}}
W.iW.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.jf.prototype={
$asp:function(){return[W.cj]},
$asr:function(){return[W.cj]},
$asn:function(){return[W.cj]},
$isp:1,
$isr:1,
$isn:1}
W.kq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.u(a,b)
return a[b]},
J:function(a,b){return a.item(b)},
$isaD:1,
$asaD:function(){return[W.ck]},
$isax:1,
$asax:function(){return[W.ck]},
$isp:1,
$asp:function(){return[W.ck]},
$isr:1,
$asr:function(){return[W.ck]},
$isn:1,
$asn:function(){return[W.ck]}}
W.iX.prototype={
$asp:function(){return[W.ck]},
$asr:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isp:1,
$isr:1,
$isn:1}
W.jg.prototype={
$asp:function(){return[W.ck]},
$asr:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isp:1,
$isr:1,
$isn:1}
W.ro.prototype={$isf:1}
W.rp.prototype={$isf:1}
W.q4.prototype={
a1:function(a,b){var t,s,r,q,p
for(t=this.gaE(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaE:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.x])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.u(t,q)
p=t[q]
o=J.aM(p)
if(o.gdK(p)==null)s.push(o.gH(p))}return s},
gU:function(a){return this.gaE(this).length===0},
$isb2:1,
$asb2:function(){return[P.x,P.x]},
gdG:function(){return this.a}}
W.i1.prototype={
Y:function(a,b){return this.a.hasAttribute(b)},
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gaE(this).length}}
W.kh.prototype={
Y:function(a,b){return this.a.a.hasAttribute("data-"+this.bp(b))},
n:function(a,b){return this.a.a.getAttribute("data-"+this.bp(b))},
i:function(a,b,c){this.a.a.setAttribute("data-"+this.bp(b),c)},
a1:function(a,b){this.a.a1(0,new W.qb(this,b))},
gaE:function(a){var t=H.a([],[P.x])
this.a.a1(0,new W.qc(this,t))
return t},
gm:function(a){return this.gaE(this).length},
gU:function(a){return this.gaE(this).length===0},
h3:function(a,b){var t,s,r,q,p
t=a.split("-")
for(s=1;s<t.length;++s){r=t[s]
q=J.aT(r)
p=q.gm(r)
if(typeof p!=="number")return p.az()
if(p>0){q=J.vJ(q.n(r,0))+q.aa(r,1)
if(s>=t.length)return H.u(t,s)
t[s]=q}}return C.b.aR(t,"")},
dZ:function(a){return this.h3(a,!1)},
bp:function(a){var t,s,r,q,p
t=J.aT(a)
s=0
r=""
while(!0){q=t.gm(a)
if(typeof q!=="number")return H.a7(q)
if(!(s<q))break
p=J.td(t.n(a,s))
r=(!J.aX(t.n(a,s),p)&&s>0?r+"-":r)+p;++s}return r.charCodeAt(0)==0?r:r},
$isb2:1,
$asb2:function(){return[P.x,P.x]}}
W.qb.prototype={
$2:function(a,b){if(J.cB(a).a9(a,"data-"))this.b.$2(this.a.dZ(C.c.aa(a,5)),b)},
$S:function(){return{func:1,args:[P.x,P.x]}}}
W.qc.prototype={
$2:function(a,b){if(J.cB(a).a9(a,"data-"))this.b.push(this.a.dZ(C.c.aa(a,5)))},
$S:function(){return{func:1,args:[P.x,P.x]}}}
W.qj.prototype={
aF:function(){var t,s,r,q,p
t=P.a0(null,null,null,P.x)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=J.te(s[q])
if(p.length!==0)t.h(0,p)}return t},
eJ:function(a){this.a.className=a.aR(0," ")},
gm:function(a){return this.a.classList.length},
gU:function(a){return this.a.classList.length===0},
X:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdG:function(){return this.a}}
W.qm.prototype={
aS:function(a,b,c,d){return W.fv(this.a,this.b,a,!1,H.P(this,0))},
ep:function(a,b,c){return this.aS(a,null,b,c)}}
W.i2.prototype={}
W.qn.prototype={
bY:function(a){if(this.b==null)return
this.e1()
this.b=null
this.d=null
return},
cT:function(a,b){if(this.b==null)return;++this.a
this.e1()},
eu:function(a){return this.cT(a,null)},
ey:function(a){if(this.b==null||this.a<=0)return;--this.a
this.e_()},
e_:function(){var t=this.d
if(t!=null&&this.a<=0)J.yx(this.b,this.c,t,!1)},
e1:function(){var t=this.d
if(t!=null)J.yV(this.b,this.c,t,!1)},
ff:function(a,b,c,d,e){this.e_()}}
W.qo.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i6.prototype={
bg:function(a){return $.$get$xL().X(0,W.fZ(a))},
aZ:function(a,b,c){var t,s,r
t=W.fZ(a)
s=$.$get$vj()
r=s.n(0,H.y(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fh:function(a){var t,s
t=$.$get$vj()
if(t.gU(t)){for(s=0;s<262;++s)t.i(0,C.a_[s],W.I0())
for(s=0;s<12;++s)t.i(0,C.q[s],W.I1())}},
$ise1:1,
geH:function(){return this.a}}
W.bw.prototype={
gV:function(a){return new W.iK(a,this.gm(a),-1,null,[H.ay(a,"bw",0)])},
h:function(a,b){throw H.h(new P.R("Cannot add to immutable List."))},
a5:function(a,b,c,d,e){throw H.h(new P.R("Cannot setRange on immutable List."))},
at:function(a,b,c,d){return this.a5(a,b,c,d,0)},
aG:function(a,b,c,d){throw H.h(new P.R("Cannot modify an immutable List."))},
bv:function(a,b,c,d){throw H.h(new P.R("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.jK.prototype={
h:function(a,b){this.a.push(b)},
bg:function(a){return C.b.e4(this.a,new W.nG(a))},
aZ:function(a,b,c){return C.b.e4(this.a,new W.nF(a,b,c))},
$ise1:1}
W.nG.prototype={
$1:function(a){return a.bg(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.nF.prototype={
$1:function(a){return a.aZ(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
bg:function(a){return this.a.X(0,W.fZ(a))},
aZ:function(a,b,c){var t,s
t=W.fZ(a)
s=this.c
if(s.X(0,H.y(t)+"::"+b))return this.d.h9(c)
else if(s.X(0,"*::"+b))return this.d.h9(c)
else{s=this.b
if(s.X(0,H.y(t)+"::"+b))return!0
else if(s.X(0,"*::"+b))return!0
else if(s.X(0,H.y(t)+"::*"))return!0
else if(s.X(0,"*::*"))return!0}return!1},
fj:function(a,b,c,d){var t,s,r
this.a.aw(0,c)
t=b.c9(0,new W.r3())
s=b.c9(0,new W.r4())
this.b.aw(0,t)
r=this.c
r.aw(0,C.C)
r.aw(0,s)},
$ise1:1,
geH:function(){return this.d}}
W.r3.prototype={
$1:function(a){return!C.b.X(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.r4.prototype={
$1:function(a){return C.b.X(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.re.prototype={
aZ:function(a,b,c){if(this.f4(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.vB(a).a.getAttribute("template")==="")return this.e.X(0,b)
return!1}}
W.rf.prototype={
$1:function(a){return"TEMPLATE::"+H.y(a)},
$S:function(){return{func:1,args:[,]}}}
W.rd.prototype={
bg:function(a){var t=J.ao(a)
if(!!t.$ishL)return!1
t=!!t.$isc4
if(t&&W.fZ(a)==="foreignObject")return!1
if(t)return!0
return!1},
aZ:function(a,b,c){if(b==="is"||C.c.a9(b,"on"))return!1
return this.bg(a)},
$ise1:1}
W.iK.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.ii(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gO:function(){return this.d}}
W.e1.prototype={}
W.rg.prototype={
ca:function(a){}}
W.r1.prototype={}
W.kt.prototype={
ca:function(a){new W.rm(this).$2(a,null)},
bo:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
fZ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.vB(a)
r=s.gdG().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bO(n)}p="element unprintable"
try{p=J.cw(a)}catch(n){H.bO(n)}try{o=W.fZ(a)
this.fY(a,b,t,p,o,s,r)}catch(n){if(H.bO(n) instanceof P.cX)throw n
else{this.bo(a,b)
window
m="Removing corrupted element "+H.y(p)
if(typeof console!="undefined")console.warn(m)}}},
fY:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bo(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bg(a)){this.bo(a,b)
window
t="Removing disallowed element <"+H.y(e)+"> from "+J.cw(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.aZ(a,"is",g)){this.bo(a,b)
window
t="Removing disallowed type extension <"+H.y(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaE(f)
s=H.a(t.slice(0),[H.P(t,0)])
for(r=f.gaE(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.u(s,r)
q=s[r]
if(!this.a.aZ(a,J.td(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.y(e)+" "+q+'="'+H.y(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ao(a).$ishT)this.ca(a.content)}}
W.rm.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.fZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bo(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.yM(t)}catch(q){H.bO(q)
p=t
if(r){o=J.aM(p)
if(o.gc2(p)!=null){o.gc2(p)
o.gc2(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.ae,W.ae]}}}
P.ra.prototype={
bw:function(a){var t,s,r
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
s=J.ao(a)
if(!!s.$isdX)return new Date(a.a)
if(!!s.$isGg)throw H.h(new P.eE("structured clone of RegExp"))
if(!!s.$iscf)return a
if(!!s.$iseU)return a
if(!!s.$isf7)return a
if(!!s.$ishh)return a
if(!!s.$isfh||!!s.$iset)return a
if(!!s.$isb2){r=this.bw(a)
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
s.a1(a,new P.rc(t,this))
return t.a}if(!!s.$isp){r=this.bw(a)
t=this.b
if(r>=t.length)return H.u(t,r)
o=t[r]
if(o!=null)return o
return this.hl(a,r)}throw H.h(new P.eE("structured clone of other type"))},
hl:function(a,b){var t,s,r,q,p
t=J.aT(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.u(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b6(t.n(a,p))
if(p>=r.length)return H.u(r,p)
r[p]=q}return r}}
P.rc.prototype={
$2:function(a,b){this.a.a[a]=this.b.b6(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pY.prototype={
bw:function(a){var t,s,r,q
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
r=new P.dX(s,!0)
r.di(s,!0)
return r}if(a instanceof RegExp)throw H.h(new P.eE("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.HL(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bw(a)
r=this.b
o=r.length
if(p>=o)return H.u(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jC()
t.a=n
if(p>=o)return H.u(r,p)
r[p]=n
this.hA(a,new P.pZ(t,this))
return t.a}if(a instanceof Array){p=this.bw(a)
r=this.b
if(p>=r.length)return H.u(r,p)
n=r[p]
if(n!=null)return n
o=J.aT(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.u(r,p)
r[p]=n
if(typeof m!=="number")return H.a7(m)
r=J.cV(n)
l=0
for(;l<m;++l)r.i(n,l,this.b6(o.n(a,l)))
return n}return a}}
P.pZ.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b6(b)
J.kC(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rb.prototype={}
P.kd.prototype={
hA:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rI.prototype={
$1:function(a){return this.a.aD(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rJ.prototype={
$1:function(a){return this.a.br(a)},
$S:function(){return{func:1,args:[,]}}}
P.lc.prototype={
e2:function(a){if($.$get$vS().b.test(a))return a
throw H.h(P.dV(a,"value","Not a valid class token"))},
A:function(a){return this.aF().aR(0," ")},
gV:function(a){var t,s
t=this.aF()
s=new P.dn(t,t.r,null,null,[null])
s.c=t.e
return s},
a1:function(a,b){this.aF().a1(0,b)},
ay:function(a,b){var t=this.aF()
return new H.fY(t,b,[H.P(t,0),null])},
gU:function(a){return this.aF().a===0},
gm:function(a){return this.aF().a},
X:function(a,b){if(typeof b!=="string")return!1
this.e2(b)
return this.aF().X(0,b)},
cQ:function(a){return this.X(0,a)?a:null},
h:function(a,b){this.e2(b)
return this.hT(0,new P.ld(b))},
gG:function(a){var t=this.aF()
return t.gG(t)},
a3:function(a,b){return this.aF().a3(0,!0)},
ao:function(a){return this.a3(a,!0)},
hT:function(a,b){var t,s
t=this.aF()
s=b.$1(t)
this.eJ(t)
return s},
$ise4:1,
$ase4:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]}}
P.ld.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lo.prototype={
gH:function(a){return a.name}}
P.rw.prototype={
$1:function(a){this.b.aD(0,new P.kd([],[],!1).b6(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mv.prototype={
gH:function(a){return a.name}}
P.nL.prototype={
bU:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fL(a,b,c)
q=P.Hq(t)
return q}catch(p){s=H.bO(p)
r=H.cu(p)
q=P.wf(s,r,null)
return q}},
h:function(a,b){return this.bU(a,b,null)},
fL:function(a,b,c){return a.add(new P.rb([],[]).b6(b))},
gH:function(a){return a.name}}
P.hJ.prototype={
gaq:function(a){return a.error}}
P.pp.prototype={
gaq:function(a){return a.error}}
P.qK.prototype={
bA:function(a){if(a<=0||a>4294967296)throw H.h(P.xg("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cR:function(){return Math.random()}}
P.qT.prototype={
aX:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.am(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bA:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.h(P.xg("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aX()
return(this.a&t)>>>0}do{this.aX()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cR:function(){this.aX()
var t=this.a
this.aX()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fi:function(a){var t,s,r,q,p,o,n,m
t=J.e8(a,0)?-1:0
do{if(typeof a!=="number")return a.aL()
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
this.aX()
this.aX()
this.aX()
this.aX()}}
P.qU.prototype={}
P.bU.prototype={$asbU:null}
P.kH.prototype={$isf:1,
ga8:function(a){return a.href}}
P.eb.prototype={$isf:1}
P.lF.prototype={$isf:1}
P.lG.prototype={$isf:1}
P.lH.prototype={$isf:1}
P.lI.prototype={$isf:1}
P.lJ.prototype={$isf:1}
P.lK.prototype={$isf:1}
P.lL.prototype={$isf:1}
P.lM.prototype={$isf:1}
P.lN.prototype={$isf:1}
P.lO.prototype={$isf:1,
ga8:function(a){return a.href}}
P.lP.prototype={$isf:1}
P.lQ.prototype={$isf:1}
P.lR.prototype={$isf:1}
P.lS.prototype={$isf:1}
P.lT.prototype={$isf:1}
P.lU.prototype={$isf:1}
P.m8.prototype={$isf:1,
ga8:function(a){return a.href}}
P.co.prototype={$isf:1}
P.ms.prototype={$isf:1,
ga8:function(a){return a.href}}
P.d7.prototype={$isab:1}
P.mZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$isr:1,
$asr:function(){return[P.d7]},
$isn:1,
$asn:function(){return[P.d7]}}
P.iY.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.jh.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.nk.prototype={$isf:1}
P.nl.prototype={$isf:1}
P.d8.prototype={$isab:1}
P.nH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d8]},
$isr:1,
$asr:function(){return[P.d8]},
$isn:1,
$asn:function(){return[P.d8]}}
P.iZ.prototype={
$asp:function(){return[P.d8]},
$asr:function(){return[P.d8]},
$asn:function(){return[P.d8]},
$isp:1,
$isr:1,
$isn:1}
P.ji.prototype={
$asp:function(){return[P.d8]},
$asr:function(){return[P.d8]},
$asn:function(){return[P.d8]},
$isp:1,
$isr:1,
$isn:1}
P.nZ.prototype={$isf:1,
ga8:function(a){return a.href}}
P.o3.prototype={
gm:function(a){return a.length}}
P.hL.prototype={$ishL:1,$isf:1,
ga8:function(a){return a.href},
sah:function(a,b){return a.type=b}}
P.p0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.x]},
$isr:1,
$asr:function(){return[P.x]},
$isn:1,
$asn:function(){return[P.x]}}
P.j_.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
P.jj.prototype={
$asp:function(){return[P.x]},
$asr:function(){return[P.x]},
$asn:function(){return[P.x]},
$isp:1,
$isr:1,
$isn:1}
P.p3.prototype={
sah:function(a,b){return a.type=b}}
P.kO.prototype={
aF:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a0(null,null,null,P.x)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=J.te(r[p])
if(o.length!==0)s.h(0,o)}return s},
eJ:function(a){this.a.setAttribute("class",a.aR(0," "))}}
P.c4.prototype={
ge7:function(a){return new P.kO(a)},
ax:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e1])
t.push(W.xK(null))
t.push(W.xN())
t.push(new W.rd())
c=new W.kt(new W.jK(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hm(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d2(q)
o=t.gbe(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
em:function(a,b,c,d,e){throw H.h(new P.R("Cannot invoke insertAdjacentHtml on SVG."))},
$isc4:1,
$isf:1}
P.p5.prototype={$isf:1}
P.p7.prototype={$isf:1}
P.eD.prototype={}
P.pf.prototype={$isf:1,
ga8:function(a){return a.href}}
P.db.prototype={$isab:1}
P.pq.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.db]},
$isr:1,
$asr:function(){return[P.db]},
$isn:1,
$asn:function(){return[P.db]}}
P.j0.prototype={
$asp:function(){return[P.db]},
$asr:function(){return[P.db]},
$asn:function(){return[P.db]},
$isp:1,
$isr:1,
$isn:1}
P.jk.prototype={
$asp:function(){return[P.db]},
$asr:function(){return[P.db]},
$asn:function(){return[P.db]},
$isp:1,
$isr:1,
$isn:1}
P.pC.prototype={$isf:1,
ga8:function(a){return a.href}}
P.pG.prototype={$isf:1}
P.pH.prototype={$isf:1}
P.i5.prototype={$isf:1,
ga8:function(a){return a.href}}
P.qZ.prototype={$isf:1}
P.r_.prototype={$isf:1}
P.r0.prototype={$isf:1}
P.bi.prototype={}
P.dc.prototype={$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.fL.prototype={$isfL:1,$isab:1,
gm:function(a){return a.length}}
P.eR.prototype={$iseR:1,$isab:1,
gbX:function(a){return a.buffer}}
P.fM.prototype={
fu:function(a,b,c,d){return a.decodeAudioData(b,H.dp(c,1),H.dp(d,1))},
ho:function(a,b){var t,s,r
t=P.fL
s=new P.bm(0,$.an,null,[t])
r=new P.dS(s,[t])
this.fu(a,b,new P.kP(r),new P.kQ(r))
return s}}
P.kP.prototype={
$1:function(a){this.a.aD(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kQ.prototype={
$1:function(a){var t=this.a
if(a==null)t.br("")
else t.br(a)},
$S:function(){return{func:1,args:[,]}}}
P.bF.prototype={}
P.eT.prototype={}
P.kY.prototype={
sah:function(a,b){return a.type=b}}
P.lb.prototype={
gbX:function(a){return a.buffer}}
P.jO.prototype={
sah:function(a,b){return a.type=b}}
P.kJ.prototype={
gH:function(a){return a.name}}
P.oe.prototype={$isf:1}
P.rn.prototype={$isf:1}
P.k1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return P.yb(a.item(b))},
i:function(a,b,c){throw H.h(new P.R("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.h(new P.R("Cannot resize immutable List."))},
gG:function(a){if(a.length>0)return a[0]
throw H.h(new P.aN("No elements"))},
T:function(a,b){return this.n(a,b)},
J:function(a,b){return P.yb(a.item(b))},
$isp:1,
$asp:function(){return[P.b2]},
$isr:1,
$asr:function(){return[P.b2]},
$isn:1,
$asn:function(){return[P.b2]}}
P.j1.prototype={
$asp:function(){return[P.b2]},
$asr:function(){return[P.b2]},
$asn:function(){return[P.b2]},
$isp:1,
$isr:1,
$isn:1}
P.jl.prototype={
$asp:function(){return[P.b2]},
$asr:function(){return[P.b2]},
$asn:function(){return[P.b2]},
$isp:1,
$isr:1,
$isn:1}
T.fH.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return t[b]},
gG:function(a){return C.b.gG(this.a)},
gU:function(a){return this.a.length===0},
gV:function(a){var t=this.a
return new J.ij(t,t.length,0,null,[H.P(t,0)])},
$ashm:function(){return[T.fI]},
$asn:function(){return[T.fI]},
gcN:function(a){return this.a}}
T.fI.prototype={
gbi:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fa(C.A)
r=T.fa(C.B)
q=T.x4(0,this.b)
new T.iP(s,q,0,0,0,t,r).dH()
r=q.c.buffer
q=q.a
r.toString
q=H.cP(r,0,q)
this.cy=q
t=q}else{t=s.bG()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gH:function(a){return this.a}}
T.de.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.hi.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.a7(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
if(typeof b!=="number")return H.a7(b)
s+=b
if(s<0||s>=t.length)return H.u(t,s)
return t[s]},
aW:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a7(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.ak()
if(typeof s!=="number")return H.a7(s)
b=t-(a-s)}return T.tQ(this.a,this.d,b,a)},
b2:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.W()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a7(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.u(q,s)
q[s]}return-1},
bj:function(a,b){return this.b2(a,b,0)},
cZ:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.ak()
if(typeof s!=="number")return H.a7(s)
r=this.aW(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.ak()
if(typeof p!=="number")return H.a7(p)
if(typeof s!=="number")return s.W()
this.b=s+(t-(q-p))
return r},
c4:function(a){return P.p1(this.cZ(a).bG(),0,null)},
a0:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
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
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aU:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.W()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.u(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.u(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.u(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.u(t,r)
i=t[r]&255
if(this.d===1)return(C.a.ap(p,56)|C.a.ap(o,48)|C.a.ap(n,40)|C.a.ap(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.ap(i,56)|C.a.ap(j,48)|C.a.ap(k,40)|C.a.ap(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bG:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.ak()
if(typeof r!=="number")return H.a7(r)
q=t-(s-r)
t=this.a
r=J.ao(t)
if(!!r.$isdc){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cP(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xY(r.cd(t,s,p>o?o:p)))},
f7:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbX:function(a){return this.a},
ghX:function(a){return this.b}}
T.nR.prototype={
ip:function(a,b){var t,s,r,q
if(b==null)b=J.c_(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cp(s-q)
C.r.at(r,t,s,a)
this.a+=b},
d3:function(a){return this.ip(a,null)},
ir:function(a){var t,s,r,q
t=J.aT(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
this.cp(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
C.r.a5(q,s,s+r,t.gbX(a),t.ghX(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.ak()
if(typeof q!=="number")return H.a7(q)
this.a=t+(r-(s-q))},
aW:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cP(t,a,b-a)},
df:function(a){return this.aW(a,null)},
cp:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aZ(P.dE("Invalid length "+H.y(s)))
r=new Uint8Array(s)
q=this.c
C.r.at(r,0,q.length,q)
this.c=r},
fA:function(){return this.cp(null)},
gm:function(a){return this.a}}
T.pU.prototype={
fV:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aW(this.a-20,20)
if(s.a2()!==117853008){a.b=t
return}s.a2()
r=s.aU()
s.a2()
a.b=r
if(a.a2()!==101075792){a.b=t
return}a.aU()
a.a0()
a.a0()
q=a.a2()
p=a.a2()
o=a.aU()
n=a.aU()
m=a.aU()
l=a.aU()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fB:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.ak()
if(typeof r!=="number")return H.a7(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a2()===101010256){a.b=t
return q}}throw H.h(new T.de("Could not find End of Central Directory Record"))},
fb:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fB(a)
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
if(s>0)this.x=a.c4(s)
this.fV(a)
r=a.aW(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.W()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.as()
if(!(p<t+o))break
if(r.a2()!==33639248)break
p=new T.pW(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
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
if(n>0)p.cy=r.c4(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.ak()
j=r.aW(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.ak()
if(typeof g!=="number")return H.a7(g)
if(typeof k!=="number")return k.W()
r.b=k+(i-(h-g))
p.db=j.bG()
f=j.a0()
e=j.a0()
if(f===1){if(e>=8)p.y=j.aU()
if(e>=16)p.x=j.aU()
if(e>=24){o=j.aU()
p.cx=o}if(e>=28)p.z=j.a2()}}if(l>0)p.dx=r.c4(l)
a.b=o
p.dy=T.GV(a,p)
q.push(p)}}}
T.pV.prototype={
gbi:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fa(C.A)
q=T.fa(C.B)
t=T.x4(0,t)
new T.iP(s,t,0,0,0,r,q).dH()
q=t.c.buffer
t=t.a
q.toString
t=H.cP(q,0,t)
this.cy=t
this.d=0}else{t=s.bG()
this.cy=t}}return t},
A:function(a){return this.z},
fc:function(a,b){var t,s,r,q
t=a.a2()
this.a=t
if(t!==67324752)throw H.h(new T.de("Invalid Zip Signature"))
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
this.z=a.c4(s)
this.Q=a.cZ(r).bG()
this.cx=a.cZ(this.ch.x)
if((this.c&8)!==0){q=a.a2()
if(q===134695760)this.r=a.a2()
else this.r=q
this.x=a.a2()
this.y=a.a2()}}}
T.pW.prototype={
A:function(a){return this.cy}}
T.pT.prototype={
hp:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.GU(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bV)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d9()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fI(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dT(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.tQ(k,0,null,0)}else if(k instanceof T.hi){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hi(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.cL(m,"/")
j.y=n.r
s.push(j)}return new T.fH(s,null)}}
T.mp.prototype={
f6:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.ap(1,this.b)
r=H.cA(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.u(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.u(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iP.prototype={
dH:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.W()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.as()
if(!(r<s+q))break
if(!this.fS())break}},
fS:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.W()
if(typeof s!=="number")return s.as()
if(s>=r+q)return!1
p=this.av(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.av(16)
s=this.av(16)
if(n!==0&&n!==(s^65535)>>>0)H.aZ(new T.de("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.ak()
r=q-r
if(n>s-r)H.aZ(new T.de("Input buffer is broken"))
m=t.aW(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.ak()
if(typeof l!=="number")return H.a7(l)
if(typeof s!=="number")return s.W()
t.b=s+(r-(q-l))
this.b.ir(m)
break
case 1:this.dz(this.f,this.r)
break
case 2:this.fT()
break
default:throw H.h(new T.de("unknown BTYPE: "+o))}return(p&1)===0},
av:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.W()
if(typeof r!=="number")return r.as()
if(r>=q+p)throw H.h(new T.de("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.u(q,r)
o=q[r]
this.c=(this.c|C.a.au(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.ap(1,a)
this.c=C.a.dX(t,a)
this.d=s-a
return(t&r-1)>>>0},
cw:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return p.as()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.u(o,p)
m=o[p]
this.c=(this.c|C.a.au(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.ap(1,s)-1)>>>0
if(p>=t.length)return H.u(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dX(r,k)
this.d=q-k
return l&65535},
fT:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.av(5)+257
s=this.av(5)+1
r=this.av(4)+4
q=H.cA(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.u(C.I,o)
n=C.I[o]
m=this.av(3)
if(n>=q)return H.u(p,n)
p[n]=m}l=T.fa(p)
k=new Uint8Array(H.cA(t))
j=new Uint8Array(H.cA(s))
i=this.dw(t,l,k)
h=this.dw(s,l,j)
this.dz(T.fa(i),T.fa(h))},
dz:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cw(a)
if(s>285)throw H.h(new T.de("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fA()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.u(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.u(C.G,p)
o=C.G[p]+this.av(C.a1[p])
n=this.cw(b)
if(n<=29){if(n>=30)return H.u(C.D,n)
m=C.D[n]+this.av(C.a0[n])
for(r=-m;o>m;){t.d3(t.df(r))
o-=m}if(o===m)t.d3(t.df(r))
else t.d3(t.aW(r,o-m))}else throw H.h(new T.de("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.ak();--r
t.b=r
if(r<0)t.b=0}},
dw:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cw(b)
switch(q){case 16:p=3+this.av(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=s}break
case 17:p=3+this.av(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
case 18:p=11+this.av(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.h(new T.de("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.u(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kI.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Math Book",H.a([$.J,$.X,$.av],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Giant Map",H.a([$.J,$.X],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Microscope",H.a([$.D,$.X,$.aV],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Star Chart",H.a([$.J,$.X],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("History Book",H.a([$.J,$.X],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Radioactive Rock",H.a([$.c2,$.au],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.D,$.X],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.m)
q.i(0,$.b3,$.m)
q.i(0,$.f5,$.k)
q.i(0,$.aO,$.L)
q.i(0,$.cE,$.k)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.K
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.FM
n=[U.c]
q.i(0,new R.Y("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
q.i(0,new R.Y("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.K+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.xf(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.A
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Y("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fm(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f0,$.L)
s.i(0,$.cE,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.Y("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.K+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.Y("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.K+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ew(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
s.i(0,new R.Y("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fm(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.f0,$.L)
t.i(0,$.cE,$.m)
t.i(0,$.c0,$.L)
t.i(0,$.tC,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.af
t.i(0,new R.Y("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.K+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fm(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.K
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.af
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.FS
t.i(0,new R.Y("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e3(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
t.i(0,new R.Y("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.K+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aB)}}
K.bW.prototype={}
L.fJ.prototype={
D:function(){var t,s
t=Q.I(null,null,A.a4)
s=A.j("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.k)
q.i(0,$.b3,$.L)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.dZ,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.A
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.S("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a_(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.as)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.f2,$.m)
s.i(0,$.cY,$.k)
s.i(0,$.ce,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.A
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! "
s.i(0,new R.S("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.a_(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.as)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.b3,$.L)
t.i(0,$.c8,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.K
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.A
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.ci+". The "+r+" has won! "
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.a_(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uP(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.A
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.ci+". The "+l+" has won! "
t.i(0,new R.S("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.a_(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.as)},
A:function(a){return this.Q},
ai:function(a,b,c,d){var t=this.Q
this.r=new X.iA("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ik]),H.a([],[M.h7]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$kL().Y(0,t))H.aZ("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cw($.$get$kL().n(0,t))+".")
$.$get$kL().i(0,t,this)},
gH:function(a){return this.Q}}
L.b_.prototype={}
M.kN.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Barbells",H.a([$.ad,$.ca,$.D],s),null,!1,"Strength Building Metal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Basketball",H.a([$.el,$.cb],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Baseball Bat",H.a([$.jw,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Rubber Ball",H.a([$.el,$.cb],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.aW,$.a6],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Hockey Stick",H.a([$.jw,$.W,$.dw],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Trophy",H.a([$.D,$.b5],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Boxing Glove",H.a([$.wt,$.cb],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Yoga Mat",H.a([$.cb,$.b1],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.e_,$.L)
q.i(0,$.cl,$.m)
q.i(0,$.cY,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.K+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.Y("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.Y("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.K+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e3(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.Y("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hI(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.e_,$.m)
t.i(0,$.f6,$.m)
t.i(0,$.cl,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.Y("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.xf(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.A+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.K
t.i(0,new R.Y("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e3(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.Y("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.A+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.af+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,t,null),$.aB)}}
U.kR.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q,p,o
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=$.$get$vK()
p=q.createBufferSource()
o=p
t=3
return P.cd(J.yE(q,b),$async$R)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$asdr:function(){return[P.eR]},
$asc9:function(){return[P.eR,P.bi]}}
U.ne.prototype={
aT:function(a){return"audio/mpeg"}}
U.nN.prototype={
aT:function(a){return"audio/ogg"}}
U.oY.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q,p
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=W.zn(b)
p=new W.i2(q,"canplaythrough",!1,[W.Q])
t=3
return P.cd(p.gG(p),$async$R)
case 3:r=q
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$asiy:function(){return[W.eS]},
$asc9:function(){return[W.eS,P.x]}}
U.oZ.prototype={}
U.p_.prototype={}
O.kT.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Cod Piece",H.a([$.O,$.Z,$.aP,$.N,$.W],s),"God damn it, MI. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Poisoned Candy",H.a([$.tT,$.N,$.bM],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Lyre",H.a([$.aC,$.W,$.br,$.N,$.a8],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Snare Trap",H.a([$.O,$.aC,$.N,$.b4],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.cC,$.k)
t.i(0,$.hd,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dv,$.k)
t.i(0,$.cM,$.k)
t.i(0,$.f_,$.k)
r="After all the bullshit the "+$.A+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aG+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.K
m=[U.c]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.z(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.K
t.i(0,new R.a5("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.A+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.A+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.z(),!1,!1,new Y.l5("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bB("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Y.pe.prototype={
R:function(a,b){var t=0,s=P.bj(),r
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$aseC:function(){return[P.x]},
$asc9:function(){return[P.x,P.x]}}
Y.ob.prototype={
aT:function(a){return"application/octet-stream"},
R:function(a,b){var t=0,s=P.bj(),r
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$asdr:function(){return[P.bi]},
$asc9:function(){return[P.bi,P.bi]}}
T.kZ.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Mystical Vial of Blood",H.a([$.aV,$.br,$.T,$.aI],s),null,!1,"Vial of Not-ABs Oil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bananaphone",H.a([$.ap,$.br,$.T,$.aU],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.O,$.br,$.T,$.aI,$.hk],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.D,$.b4,$.T,$.aI,$.hk,$.aF],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.W,$.u0,$.br,$.aI,$.T,$.Z],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dg,$.k)
q.i(0,$.tF,$.k)
q.i(0,$.c0,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.af+" and some boondollars in compensation."
n=this.x1
k=[U.c]
q.i(0,new R.Y("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e3(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.K+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.A
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.ci+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.S("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.a_(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.as)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cY,$.k)
s.i(0,$.cM,$.L)
s.i(0,$.aO,$.L)
s.i(0,$.iI,$.k)
s.i(0,$.cz,$.L)
p=$.o
o="The "+p+"  and the "
m=$.ey
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.A
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.S("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.a_(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ex(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.A
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.ci+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.FJ
s.i(0,new R.S("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.a_(l,h,o)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
o="The "+p+" learns of the "
h=$.aG
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.A
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.S("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.a_(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aG+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f8+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fm(),!1,!1,new Y.c1("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aG
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f8+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.uQ(),!1,!1,new Y.c1("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
m="The "+p+"  and the "
h=$.ey
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.A
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.S("Pale Shipping Dungeon",!1,[new U.c(m),new U.a_(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.t)+".",o)],H.a([],k),R.ex(),!1,!1,new Y.jP(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
n.i(0,new X.G(q,s,null),$.as)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.b3,$.L)
t.i(0,$.c8,$.m)
r="In the wake of the defeat of the "+$.A+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f8+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.e3(),!1,!1,new Y.c1("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
o=$.o
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.A
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.ci+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.K+"ing. "
t.i(0,new R.S("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.a_(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.as)}}
T.l0.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Pan's Pipe",H.a([$.a8,$.W,$.br,$.T],s),null,!1,"Smonkin Weeds Pipe")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Skeleton Key",H.a([$.b0,$.T],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Inspector's Fan",H.a([$.a6,$.D,$.br,$.T],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Jet Pack",H.a([$.aq,$.D,$.aW,$.T,$.Z],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.m)
q.i(0,$.f6,$.k)
q.i(0,$.aO,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.af
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.A
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.FN
i=[U.c]
q.i(0,new R.S("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.a_(j,p,l)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.as)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.b3,$.k)
s.i(0,$.f6,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.cl,$.m)
s.i(0,$.c8,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.af
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.K+"ing is so joyful it's literally deafening. "
l=$.A
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.S("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.a_(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.as)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ce,$.k)
t.i(0,$.m1,$.k)
t.i(0,$.f6,$.L)
t.i(0,$.c8,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.A
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.af
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aG+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.ci+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.S("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.a_(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.as)}}
M.fQ.prototype={
eL:function(a){var t=this.a
if(!t.Y(0,a))return
return t.n(0,a)}}
Y.l2.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=J.e9(b,"\n")
p=P.x
o=P.cG(p,p)
n=P.cG(p,[P.e4,P.x])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.cB(k).bk(k).length===0)m=null
else if(m==null)m=C.c.bk(k)
else{j=C.c.bk(k)
i=C.c.I(m,0,C.c.en(m,$.$get$vO())+1)+j
o.i(0,i,m)
if(!n.Y(0,m))n.i(0,m,P.a0(null,null,null,p))
J.yw(n.n(0,m),i)}}r=new M.fQ(o,n)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$aseC:function(){return[M.fQ]},
$asc9:function(){return[M.fQ,P.x]}}
A.l7.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Colonel Sassacre's Daunting Text ",H.a([$.J,$.ad,$.aU,$.ca],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wise Guy Book",H.a([$.J,$.aU],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Beagle Puss",H.a([$.aV,$.aU],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Novelty Microphone",H.a([$.aW,$.a6,$.aU],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Banana",H.a([$.ap,$.aU],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Fake Flower",H.a([$.O,$.aU],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Trick Handcuffs",H.a([$.D,$.aU],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.cy,$.k)
q.i(0,$.cl,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.K+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.A+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.Y("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e_,$.L)
s.i(0,$.cl,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cC,$.k)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aG
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.K+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.FQ
s.i(0,new R.Y("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cF,$.L)
t.i(0,$.c7,$.m)
t.i(0,$.cy,$.k)
t.i(0,$.cl,$.m)
t.i(0,$.iC,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.af
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.K
t.i(0,new R.Y("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aB)}}
S.bH.prototype={
A:function(a){return H.y(new H.dQ(H.kz(this),null))+": "+this.c},
gH:function(a){return this.c}}
S.il.prototype={}
S.mm.prototype={}
M.lj.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Can of Spray Paint",H.a([$.aw,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sensible Chuckles Magazine",H.a([$.J,$.ai,$.aU,$.av],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Gentleman's Razor",H.a([$.u8,$.D,$.at],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("How To Draw Manga",H.a([$.J,$.ai,$.av],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Painting of a Horse Boxing a Football Player",H.a([$.aw,$.am,$.J],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Collection of Classical Works",H.a([$.ai,$.J],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Documentary on Horses",H.a([$.ai,$.az,$.am],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Paint Set",H.a([$.aw,$.ai],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shaving Cream",H.a([$.aq,$.ai,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Classy Suit",H.a([$.O,$.ai],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("The Fatherly Gent's Shaving Almanac ",H.a([$.J,$.ai,$.av],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.m)
q.i(0,$.cE,$.k)
q.i(0,$.aO,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.af
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.A+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.K+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.Y("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.e_,$.L)
s.i(0,$.cl,$.m)
s.i(0,$.cy,$.L)
s.i(0,$.b3,$.m)
s.i(0,$.cC,$.k)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aG
l=l+n+" "
k=$.af
s.i(0,new R.Y("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.K+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.hd,$.L)
t.i(0,$.cz,$.L)
t.i(0,$.f_,$.L)
t.i(0,$.c7,$.L)
t.i(0,$.b3,$.m)
t.i(0,$.aO,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.K
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.af+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.FG
t.i(0,new R.Y("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aB)}}
T.lp.prototype={}
V.lr.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Trendy Fabric",H.a([$.aw,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Necklace",H.a([$.aw,$.tY,$.hk],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sewing Needle",H.a([$.D,$.u4,$.aL],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=$.ju
r=A.j("Broom",H.a([r,$.W,$.ad,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Rolling Pin",H.a([$.W,$.ub,$.ad],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Velvet Pillow",H.a([$.O,$.b1,$.br,$.aw,$.fc],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Yarn Ball",H.a([$.aw,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Refrigerator",H.a([$.aF,$.ca,$.D,$.bs],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Photo Album",H.a([$.aw,$.J],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Cubes",H.a([$.bs],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cast Iron Skillet",H.a([$.D,$.aq,$.ad,$.ca,$.tX],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Failed Dish",H.a([$.bM],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dr Pepper BBQ Sauce",H.a([$.bM],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Potted Plant",H.a([$.aw,$.bQ,$.aR],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Chicken Leg",H.a([$.ap,$.bk,$.b0],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Juicy Steak",H.a([$.ap,$.bk],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Wedding Cake",H.a([$.aw,$.ap,$.aI],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.m)
q.i(0,$.cM,$.m)
q.i(0,$.cz,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.af
l=[U.c]
q.i(0,new R.Y("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.K+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.z(),!1,!1,new Y.io("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.k)
s.i(0,$.cl,$.m)
s.i(0,$.f_,$.k)
s.i(0,$.dv,$.m)
s.i(0,$.b3,$.k)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.af
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.K+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.FO
s.i(0,new R.Y("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ef,$.k)
t.i(0,$.b3,$.m)
t.i(0,$.dt,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.iI,$.k)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.af
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.K+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Y("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aB)}}
U.ls.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.av,$.a6,$.J,$.aC,$.T,$.Z],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Egg Timer",H.a([$.az,$.br,$.T,$.aC],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Skull Timer",H.a([$.b0,$.br,$.T,$.aC],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Poison Flask",H.a([$.aV,$.T,$.bM],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Gorgon Head",H.a([$.aV,$.T,$.bs,$.aC,$.b4,$.bS,$.aY],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Obituary",H.a([$.aF,$.aY,$.aC,$.J,$.T],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dL,$.k)
q.i(0,$.d5,$.m)
q.i(0,$.f6,$.L)
q.i(0,$.b3,$.L)
q.i(0,$.c0,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.af
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.A
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.S("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a_(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.as)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.k)
s.i(0,$.d5,$.m)
s.i(0,$.ej,$.aj)
s.i(0,$.eg,$.m)
s.i(0,$.tC,$.m)
s.i(0,$.dg,$.m)
s.i(0,$.d5,$.m)
s.i(0,$.b3,$.L)
s.i(0,$.c0,$.m)
s.i(0,$.du,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aG
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.K+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.A
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.ci+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.S("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ew(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.af
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.A
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.ci+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.S("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.a_(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.as)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.c0,$.k)
t.i(0,$.w9,$.aj)
t.i(0,$.ha,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.A
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.S("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.a_(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ew(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.o
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aG
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.af
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.A
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.ci+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.FF
t.i(0,new R.S("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.a_(o,k,q)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.as)}}
Z.lt.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Dream Diary",H.a([$.J,$.av,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.az,$.br,$.ad,$.T,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.az,$.br,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.dt,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.iI,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.af
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.x2
k=[U.c]
q.i(0,new R.S("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.a_(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.as)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.m)
s.i(0,$.dt,$.k)
s.i(0,$.d6,$.m)
s.i(0,$.cD,$.m)
s.i(0,$.f1,$.m)
s.i(0,$.cy,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.S("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.a_("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.as)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.k)
t.i(0,$.iE,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cD,$.k)
t.i(0,$.f1,$.k)
t.i(0,$.dt,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.S("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aG+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.af+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.a_("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.as)}}
X.iA.prototype={}
X.ik.prototype={$istL:1,
$S:function(){return{func:1,v:true,args:[[P.p,M.h7]]}}}
M.h7.prototype={}
U.lV.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Fluthulu Poster",H.a([$.O,$.b1,$.aY,$.bt],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Scalemate",H.a([$.O,$.b1,$.aY],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Bone Shield",H.a([$.aF,$.az,$.b0,$.fd,$.aP],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Ice Sword",H.a([$.az,$.wA,$.fe,$.aP],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Zombie Mask",H.a([$.az,$.bS,$.bk,$.aY],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Vampire Romance Novel",H.a([$.av,$.J,$.aA,$.aY],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizardy Herbert",H.a([$.J,$.a2,$.ad],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Complacency of the Learned",H.a([$.J,$.a2,$.ad],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Grimoire for Summoning the Zoologically Dubious ",H.a([$.J,$.a2,$.bS,$.aY,$.bt],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizard Statue",H.a([$.aF,$.au,$.a2,$.ad,$.aP],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Mermaid Fountain",H.a([$.aF,$.tU,$.a2,$.ad,$.aP],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h8,$.aj)
q.i(0,$.cM,$.m)
q.i(0,$.c8,$.m)
q.i(0,$.cF,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.A
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.af
j=[U.c]
q.i(0,new R.Y("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.dg,$.k)
s.i(0,$.iF,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.ej,$.k)
s.i(0,$.hc,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.Y("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.iH,$.m)
t.i(0,$.c0,$.k)
t.i(0,$.dI,$.m)
t.i(0,$.f0,$.m)
t.i(0,$.tF,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.K
t.i(0,new R.Y("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aB)}}
N.aa.prototype={
A:function(a){return H.y(new H.dQ(H.kz(this),null))+": "+H.y(this.b)}}
O.c9.prototype={
b3:function(a){var t=0,s=P.bj(),r,q=this,p
var $async$b3=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cd(q.aV(a),$async$b3)
case 3:r=p.R(0,c)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$b3,s)}}
O.dr.prototype={
ba:function(a){var t=0,s=P.bj(),r
var $async$ba=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$ba,s)},
cK:function(a){var t=0,s=P.bj(),r,q=this
var $async$cK=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zo([J.vz(a)],q.aT(0),null))
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$cK,s)},
aV:function(a){var t=0,s=P.bj(),r,q=this,p,o
var $async$aV=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:p=P.bi
o=new P.bm(0,$.an,null,[p])
W.wg(a,null,q.aT(0),null,null,"arraybuffer",null,null).b4(new O.kX(new P.dS(o,[p])))
r=o
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$aV,s)},
$asc9:function(a){return[a,P.bi]}}
O.kX.prototype={
$1:function(a){this.a.aD(0,H.kA(J.yN(a),"$isbi"))},
$S:function(){return{func:1,args:[W.e0]}}}
O.eC.prototype={
ba:function(a){var t=0,s=P.bj(),r,q,p,o,n
var $async$ba=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:a.toString
q=H.cP(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hH(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$ba,s)},
aV:function(a){var t=0,s=P.bj(),r
var $async$aV=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=W.tP(a,null,null)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$aV,s)},
$asc9:function(a){return[a,P.x]}}
O.iy.prototype={
aV:function(a){var t=0,s=P.bj(),r
var $async$aV=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$aV,s)},
ba:function(a){return H.aZ("Element format doesn't read from buffers")},
$asc9:function(a){return[a,P.x]}}
V.mb.prototype={
aT:function(a){return"font/opentype"},
R:function(a,b){var t=0,s=P.bj(),r
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:t=3
return P.cd(A.ht("scripts/Rendering/text/opentype.min.js",!1),$async$R)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$asdr:function(){return[R.he]},
$asc9:function(){return[R.he,P.bi]}}
Z.iz.prototype={}
E.iN.prototype={}
E.nM.prototype={}
E.M.prototype={
A:function(a){var t="["+J.cw(this.a)+" x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fK.prototype={
A:function(a){var t="[(Random from "+P.uf(this.d,"(",")")+") x "+H.y(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kM.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.y(this.b)+"]"}}
Y.mg.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("How to Teach Your Friends to Hack SBURB",H.a([$.av,$.N,$.J,$.Z,$.jx],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Unstable Domino",H.a([$.az,$.N,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Exposed Thread",H.a([$.O,$.N,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Teetering Plate",H.a([$.mJ,$.N,$.aC],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.m3,$.m)
t.i(0,$.c8,$.k)
t.i(0,$.du,$.L)
t.i(0,$.dh,$.k)
r=$.t
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.K
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aG
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.af
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.A
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.S("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.a_(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.A+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.z(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.A+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.K
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aG+" Quest Online: The "+$.af+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a5("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bB("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.K+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Y.mh.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Sherpa Parka",H.a([$.bs,$.N,$.cg],s),"Clearly the best class uses this.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Guide Book",H.a([$.Z,$.bs,$.av,$.J,$.N,$.X],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Whistle",H.a([$.D,$.N,$.aW],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Announcement System",H.a([$.D,$.N,$.a6,$.X],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.m3,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.du,$.m)
t.i(0,$.dh,$.k)
r="Now that the "+$.A+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.a5("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.K+", but they are happy.")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.bN)}}
T.mi.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Doll",H.a([$.mJ,$.aw,$.ar,$.T],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.W,$.ar,$.T,$.Z,$.aY],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.u3,$.T],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.J,$.T,$.aA],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Shades",H.a([$.am,$.aV,$.T],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.eg,$.L)
q.i(0,$.ei,$.k)
q.i(0,$.cl,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.A
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.ci+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.S("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.a_(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.af
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.A
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.S("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.a_(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uQ(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h=this.f
h.i(0,new X.G(s,q,null),$.as)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.k)
s.i(0,$.iF,$.k)
s.i(0,$.f6,$.m)
s.i(0,$.c0,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.du,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.af
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.A
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.ci+". The "+p+" is victorious. "
s.i(0,new R.S("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a_(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.A+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.K
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f8+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e3(),!1,!1,new Y.c1("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.A
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.S("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.a_(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ew(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
h.i(0,new X.G(q,s,null),$.as)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iD,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.m2,$.k)
t.i(0,$.f_,$.m)
t.i(0,$.hc,$.k)
t.i(0,$.cM,$.m)
t.i(0,$.ei,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.S("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aG+" laws put in place by "+$.A+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aG
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.K
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hI(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
q=$.o
m="The "+q+"  and the "
r=$.ey
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.A
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.S("Flushed Shipping Dungeon",!1,[new U.c(m),new U.a_(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.t)+".",n)],H.a([],i),R.ex(),!1,!1,new Y.iL(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
n=$.o
r="The "+n+"  and the "
q=$.ey
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.A
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.S("Pitched Shipping Dungeon",!1,[new U.c(r),new U.a_(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.y(C.t)+".",m)],H.a([],i),R.ex(),!1,!1,new Y.jR(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
h.i(0,new X.G(s,t,null),$.aB)}}
B.mj.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Family Ashes",H.a([$.aF,$.aq,$.N,$.aC,$.bX],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Last Will and Testament",H.a([$.Z,$.J,$.N,$.aC,$.mF],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Grooming Guide",H.a([$.av,$.N,$.ai],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Powered Attorney",H.a([$.wp,$.N,$.mB,$.mF],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Executer's Ax",H.a([$.tR,$.N,$.at,$.mF],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.ce,$.m)
r=$.A
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.A+" has released the frogs into the "
p=$.o
t.i(0,new R.bB("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.bN)}}
X.ml.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Wand",H.a([$.W,$.T,$.a2,$.bl],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Angel Feather",H.a([$.bl,$.bA,$.T,$.aQ,$.a8,$.Z,$.a2],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Never Ending Story DVD",H.a([$.bR,$.u0,$.T,$.a2,$.aU,$.bl],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Candle",H.a([$.bl,$.aQ,$.T,$.aq],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Figurine",H.a([$.az,$.aQ,$.T,$.bl],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.tB,$.k)
q.i(0,$.cM,$.m)
q.i(0,$.aO,$.k)
q.i(0,$.cD,$.k)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.K+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.A
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.af
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.FI
i=[U.c]
q.i(0,new R.S("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a_(k,p,j)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.as)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.iC,$.m)
s.i(0,$.d6,$.k)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.af
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.A
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.S("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.as)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.dv,$.L)
t.i(0,$.cE,$.k)
t.i(0,$.cD,$.k)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.A
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.af
t.i(0,new R.S("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.a_("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.A
t.i(0,new R.S("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.a_("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hI(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n.i(0,new X.G(s,t,null),$.as)}}
X.mq.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Footstick",H.a([$.dw,$.N,$.mI,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Cheating Guide",H.a([$.av,$.N,$.jx,$.J],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of Shogun",H.a([$.O,$.N,$.fc,$.u1,$.b1],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Macrobots",H.a([$.ua,$.N,$.mB],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.cF,$.k)
t.i(0,$.d6,$.k)
t.i(0,$.dt,$.k)
t.i(0,$.dh,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.f1,$.k)
t.i(0,$.hb,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Y("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uR(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ci+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.S("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.a_(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xd(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.Y("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.S("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.o
t.i(0,new R.S("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xe(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.as)}}
Q.mu.prototype={
b3:function(a){var t=0,s=P.bj(),r,q,p
var $async$b3=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:q=W.mt(null,a,null)
p=new W.i2(q,"load",!1,[W.Q])
t=3
return P.cd(p.gG(p),$async$b3)
case 3:r=q
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$b3,s)},
$asdr:function(){return[W.ek]},
$asc9:function(){return[W.ek,P.bi]}}
Q.o2.prototype={
aT:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bj(),r,q=this,p,o,n
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cd(q.cK(b),$async$R)
case 3:p=n.mt(null,d,null)
o=new W.i2(p,"load",!1,[W.Q])
t=4
return P.cd(o.gG(o),$async$R)
case 4:r=p
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)}}
Q.o_.prototype={
aT:function(a){return"image/png"},
R:function(a,b){var t=0,s=P.bj()
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:throw H.h("Read NYI")
return P.bo(null,s)}})
return P.bp($async$R,s)},
$asdr:function(){return[Q.jQ]},
$asc9:function(){return[Q.jQ,P.bi]}}
B.hj.prototype={
D:function(){var t,s
t=Q.I(null,null,A.a4)
s=A.j("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.k)
q.i(0,$.b3,$.L)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.dZ,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.Y("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.f2,$.m)
s.i(0,$.cY,$.k)
s.i(0,$.ce,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.Y("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.b3,$.L)
t.i(0,$.c8,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.Y("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.K
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uP(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aB)},
A:function(a){return this.ch},
gH:function(a){return this.ch}}
A.a4.prototype={
aC:function(a,b){var t=b.gbC()-this.gbC()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bD(t)},
ghr:function(){var t,s,r,q,p,o
t=H.a([],[P.x])
s=new A.jU(null,null)
s.d8(this.f.a)
if(this.r===0)return t
r=P.dj(G.zv(this.f),!0,G.a1)
C.b.dd(r,new A.mN())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=r[p]
if(!(o instanceof G.ag||o.gea().length===0))t.push(" "+Y.HJ(s.i0(o.gea())))}return t},
gbC:function(){var t,s,r
for(t=this.f,s=new P.dn(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gbC()
return r},
ghg:function(){var t=this.f
return new H.eH(t,new A.mM(),[H.P(t,0)])},
ghB:function(){var t,s,r,q,p
for(t=this.ghr(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q]+" "
return r+this.d},
A:function(a){return this.ghB()},
K:function(a,b,c,d,e){var t,s,r
t=P.jD(b,null)
this.f=t
if(t.a===0)t.h(0,$.wv)
s=P.jD(this.ghg(),null)
for(t=new P.dn(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.f.aw(0,r.geY())
this.f.an(0,r)}$.$get$wU().push(this)},
$isbG:1,
$asbG:function(){return[A.a4]}}
A.mN.prototype={
$2:function(a,b){return a.ger()-C.a.bD(b.ger())},
$S:function(){return{func:1,args:[G.a1,G.a1]}}}
A.mM.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
N.mU.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Gavel",H.a([$.W,$.u_],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Caution Tape",H.a([$.az,$.b4],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Deerstalker Hat",H.a([$.O,$.aw],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mystery Novel",H.a([$.J,$.av],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dish Served Cold",H.a([$.bQ,$.ap,$.bs],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Pony Pals: Detective Pony ",H.a([$.J,$.av,$.am],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Handcuffs",H.a([$.aF,$.D,$.b4],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h8,$.L)
q.i(0,$.c7,$.m)
q.i(0,$.cE,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.K+"ing "
n=$.t
m=[U.c]
q.i(0,new R.Y("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.af+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.k)
s.i(0,$.du,$.m)
s.i(0,$.cY,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.K+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.af+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.FE
s.i(0,new R.Y("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.dg,$.L)
t.i(0,$.ej,$.m)
t.i(0,$.eg,$.m)
t.i(0,$.f4,$.m)
t.i(0,$.iG,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.K
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.FR
t.i(0,new R.Y("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aB)}}
S.mW.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Shining Armor",H.a([$.aF,$.mH,$.N,$.fd],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Excalibur",H.a([$.Z,$.mH,$.N,$.aL,$.at,$.fe],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Noble Steed",H.a([$.D,$.N,$.bk,$.ar],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Hero's Shield",H.a([$.aF,$.fd,$.N,$.mH],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.m0,$.k)
t.i(0,$.dJ,$.k)
t.i(0,$.e_,$.k)
t.i(0,$.f4,$.k)
t.i(0,$.h8,$.m)
r="The "+$.A+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.A
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a5("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aG
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.A
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.af
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a5("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.A+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.K+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a5("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Q.mY.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Dream Diary",H.a([$.J,$.av,$.T],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.az,$.br,$.ad,$.T,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.az,$.br,$.T],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ef,$.m)
q.i(0,$.dt,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.iI,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.af
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.x2
k=[U.c]
q.i(0,new R.S("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.a_(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.as)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ce,$.m)
s.i(0,$.dt,$.k)
s.i(0,$.d6,$.m)
s.i(0,$.cD,$.m)
s.i(0,$.f1,$.m)
s.i(0,$.cy,$.k)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.S("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.a_("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.as)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.k)
t.i(0,$.iE,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.cD,$.k)
t.i(0,$.f1,$.k)
t.i(0,$.dt,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.S("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aG+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.af+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.a_("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.as)}}
K.n_.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Creeping Vine",H.a([$.W,$.T,$.aR,$.ar],s),null,!1,"Sentient Plant Tentacles")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Lollipop",H.a([$.tT,$.T,$.aI],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Golem",H.a([$.aF,$.au,$.T,$.ar],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ectoplasm",H.a([$.bX,$.T,$.aI],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Aqua Vitae",H.a([$.aV,$.T,$.aI,$.Z,$.a2],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Homunculus",H.a([$.bk,$.T,$.ar],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c8,$.k)
q.i(0,$.b3,$.k)
q.i(0,$.h9,$.L)
q.i(0,$.aO,$.m)
q.i(0,$.m3,$.m)
q.i(0,$.cF,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.K+"ing in panic. Don't upset "
m=$.A
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.S("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.a_(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.as)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.cF,$.L)
s.i(0,$.aO,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.t
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.A
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.S("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.a_(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.as)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.d5,$.k)
t.i(0,$.b3,$.L)
t.i(0,$.dL,$.k)
t.i(0,$.c0,$.m)
t.i(0,$.dZ,$.m)
t.i(0,$.iB,$.m)
r="Drawn by wailing and "+$.K+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.t
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.A
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.S("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.a_(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.as)}}
G.n0.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("FAQ",H.a([$.a6,$.T,$.X,$.bY],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.az,$.T,$.aQ,$.a6,$.bY],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.T,$.aQ,$.bY,$.Z,$.tU],s),null,!1,"D13")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.wz,$.T,$.ad],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.wH,$.T],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.aR,$.T,$.aQ,$.bY],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("8-Ball",H.a([$.aV,$.T,$.ar],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.x]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lZ,$.k)
q.i(0,$.ef,$.m)
q.i(0,$.dI,$.k)
q.i(0,$.ei,$.k)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.A
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.S("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.a_(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.K+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.A
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.S("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.a_(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.as)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.m)
s.i(0,$.aO,$.m)
s.i(0,$.dv,$.k)
s.i(0,$.lY,$.k)
s.i(0,$.eh,$.k)
s.i(0,$.iC,$.k)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.af
o=o+l+", but "
k=$.A
o=o+k+" has hoarded all of the planets "
j=$.aG
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.K+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.S("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.a_(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uQ(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.A
s.i(0,new R.S("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.K+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.a_("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.as)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.m)
q.i(0,$.b3,$.m)
q.i(0,$.f5,$.k)
q.i(0,$.aO,$.m)
q.i(0,$.cE,$.k)
p="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f8+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e3(),!1,!1,new Y.c1("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
l="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f8+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.ew(),!1,!1,new Y.c1("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.A
q.i(0,new R.S("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a_(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,q,null),$.as)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dI,$.k)
t.i(0,$.lZ,$.k)
t.i(0,$.ei,$.m)
t.i(0,$.cM,$.m)
t.i(0,$.tE,$.m)
t.i(0,$.c0,$.L)
t.i(0,$.e_,$.L)
t.i(0,$.cl,$.m)
t.i(0,$.cy,$.L)
t.i(0,$.b3,$.m)
t.i(0,$.cC,$.k)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.af
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.K+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.A
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.S("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.a_(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.A+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f8+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e3(),!1,!1,new Y.c1("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m.i(0,new X.G(q,t,null),$.as)}}
Z.nd.prototype={
D:function(){var t,s,r,q
t=this.M
s=[G.a1]
r=A.j("Dream Bubbles Book",H.a([$.J,$.ai,$.av,$.wr],s),null,!1,null)
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),[H.P(t,0)]))
t=Q.I(null,null,A.a4)
r=A.j("Uno Reverse Card",H.a([$.mC,$.mI,$.ai],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Lord's Cape",H.a([$.O,$.N,$.ai],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Drawing Tablet",H.a([$.jx,$.N,$.ai],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("How to Make Friends And Influence People",H.a([$.Z,$.J,$.N,$.bx,$.av],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dg,$.L)
q.i(0,$.ej,$.L)
q.i(0,$.c0,$.L)
q.i(0,$.cY,$.m)
p="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.K+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="As soon as the "+$.A+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a5("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.G(s,q,null),$.bN)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.w5,$.k)
t.i(0,$.cD,$.k)
t.i(0,$.b3,$.k)
t.i(0,$.aO,$.m)
s="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.K+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="As soon as the "+$.A+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a5("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.bN)}}
S.nf.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Alternate Costume",H.a([$.O,$.N,$.a2,$.Z,$.ak],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Cape",H.a([$.O,$.N,$.a2],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Staff",H.a([$.W,$.N,$.ad,$.a2,$.dw],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Walking Broom",H.a([$.ju,$.W,$.N,$.ar,$.a2,$.dw],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.f0,$.k)
t.i(0,$.f4,$.m)
t.i(0,$.ce,$.k)
t.i(0,$.f2,$.m)
t.i(0,$.d5,$.L)
r="The "+$.A+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.o
t.i(0,new R.a5("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.A+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aG
t.i(0,new R.a5("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.z(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.A+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aG
t.i(0,new R.a5("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.K+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.z(),!1,!1,new Y.c1(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
U.ng.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Maiden's Breath",H.a([$.aR,$.N,$.aw],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Feather Duster",H.a([$.W,$.N,$.dw,$.bA],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Valkyrie Shield",H.a([$.aw,$.aF,$.D,$.N,$.Z,$.fd,$.wj],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Maiden's Songbook",H.a([$.J,$.N,$.a8,$.av],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.dh,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.b3,$.m)
t.i(0,$.dv,$.m)
t.i(0,$.cy,$.m)
r="The "+$.A+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bB("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a5("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.K+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.A+". ")],H.a([],n),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
V.nr.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Puzzle Box",H.a([$.W,$.T,$.a2],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.a6,$.T,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.D,$.T],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.D,$.T,$.a6,$.X],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Janus Bust",H.a([$.aF,$.jv,$.au,$.ai,$.T,$.Z,$.a6],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cD,$.m)
q.i(0,$.ef,$.L)
q.i(0,$.cE,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.A
k=[U.c]
q.i(0,new R.S("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a_(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fm(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.A
q.i(0,new R.S("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.a_("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.as)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.h8,$.L)
s.i(0,$.c7,$.m)
s.i(0,$.cE,$.L)
s.i(0,$.cD,$.L)
p=$.A
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.S("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.a_("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.as)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iH,$.k)
t.i(0,$.b3,$.m)
t.i(0,$.f5,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cE,$.k)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.A
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.af+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.S("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a_(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.as)}}
E.ns.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Feather Pen",H.a([$.D,$.N,$.ai,$.bA],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Half Finished Bust of Snoop Dog",H.a([$.wG,$.N,$.jv,$.ad,$.Z],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Book of Poetry",H.a([$.J,$.N,$.ai,$.av],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.dh,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.b3,$.m)
t.i(0,$.dv,$.m)
t.i(0,$.cy,$.m)
r="The "+$.A+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bB("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.A+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.af
t.i(0,new R.a5("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
F.nt.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Piano",H.a([$.ad,$.W,$.a8,$.ai],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Flute",H.a([$.D,$.a8],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Microphone",H.a([$.aW,$.a6],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Violin",H.a([$.W,$.a8],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sheet Music",H.a([$.J,$.a8],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Electric Guitar",H.a([$.az,$.a8,$.a6,$.aW,$.am],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.az,$.a8,$.a6,$.am],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Guitar",H.a([$.W,$.a8],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cM,$.aj)
q.i(0,$.tE,$.k)
q.i(0,$.ei,$.k)
q.i(0,$.dv,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.lX,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.A+" can only be awoken by the Legendary Hero playing the "
n=$.aG
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.af
k=[U.c]
q.i(0,new R.Y("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aG
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.af+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.K+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.FK
q.i(0,new R.Y("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.tH,$.aj)
s.i(0,$.du,$.m)
s.i(0,$.cY,$.m)
s.i(0,$.dv,$.k)
s.i(0,$.lX,$.aj)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aG
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.A
s.i(0,new R.Y("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.af+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.h9,$.aj)
t.i(0,$.cl,$.m)
t.i(0,$.dL,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.K
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aG+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Y("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aB)}}
Y.nI.prototype={
R:function(a,b){var t=0,s=P.bj(),r,q=this,p,o
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:t=3
return P.cd(A.ht("scripts/Rendering/threed/three.min.js",!1),$async$R)
case 3:t=4
return P.cd(Q.on(),$async$R)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aM(p)
o.eW(p,P.wX(["",$.$get$vU()],P.x,S.hx))
o.eV(p,!1)
q.b=p}J.vH(p,b)
r=J.vH(q.b,b)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$aseC:function(){return[S.fk]},
$asc9:function(){return[S.fk,P.x]}}
V.nS.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Shorts",H.a([$.O,$.N,$.fb,$.Z],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sidekick Figurine",H.a([$.az,$.N,$.am],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Steroids",H.a([$.ap,$.N,$.a2],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.x]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.m0,$.k)
t.i(0,$.cF,$.m)
t.i(0,$.hd,$.m)
t.i(0,$.m2,$.m)
t.i(0,$.dh,$.m)
t.i(0,$.b3,$.m)
t.i(0,$.dZ,$.m)
t.i(0,$.eh,$.m)
t.i(0,$.tI,$.m)
t.i(0,$.iB,$.m)
t.i(0,$.lY,$.m)
r="The "+$.A+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bB("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.K
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.af
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.A
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.S("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a_(k,"The "+q+" whited out...",m)],H.a([],n),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.A+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a5("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aG+" buffs. With a deafening "+$.K+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.z(),!1,!1,new Y.io("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
G.o4.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Superhero Action Figure",H.a([$.az,$.am,$.aP],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Action DVD",H.a([$.az,$.am],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ghost Busters DVD",H.a([$.az,$.bX],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Snow Dogs DVD",H.a([$.az,$.aU,$.bs,$.cg],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Skateboarding Video Game",H.a([$.az,$.am],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Movie Poster",H.a([$.J,$.am],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Audrey II Plush",H.a([$.aR,$.am,$.O,$.ar],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Peashooter Toy",H.a([$.aR,$.aJ,$.am,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shitty Sword",H.a([$.aP,$.D,$.am,$.fe,$.at,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("GameBro Magazine",H.a([$.J,$.am],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("GameGrl Magazine",H.a([$.J,$.am],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cC,$.m)
q.i(0,$.cl,$.k)
q.i(0,$.cF,$.aj)
q.i(0,$.d6,$.aj)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aG+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.K+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.FL
l=[U.c]
q.i(0,new R.Y("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eg,$.m)
s.i(0,$.du,$.m)
s.i(0,$.cC,$.m)
s.i(0,$.cl,$.m)
s.i(0,$.dJ,$.k)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aG
s.i(0,new R.Y("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cC,$.m)
t.i(0,$.dI,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dJ,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aG+" Cinema. A new movie, The Lonely "
o=$.af
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.K+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Y("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aB)}}
N.o7.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Feather'd Cap",H.a([$.O,$.N,$.fb],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Crown",H.a([$.Z,$.tY,$.N,$.fb],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Gunpowder",H.a([$.bu,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.cC,$.m)
t.i(0,$.cD,$.m)
t.i(0,$.dL,$.L)
r="With the closing of the curtain, the "+$.A+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q=$.A
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a5("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.af+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
U.c.prototype={}
U.a_.prototype={}
R.o9.prototype={
A:function(a){return H.y(new H.dQ(H.kz(this),null))+": "+this.c},
gH:function(a){return this.c}}
R.Y.prototype={}
R.S.prototype={}
R.a5.prototype={}
R.bB.prototype={}
E.oa.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Curtain",H.a([$.O,$.T,$.aP],s),null,!1,"Show Ender")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.D,$.fe,$.aL,$.T,$.at,$.aY,$.aP,$.bt,$.aC],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.D,$.aW,$.a6,$.T,$.aP],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aF,$.D,$.aW,$.bx,$.cb,$.T,$.aP],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.ap,$.bx,$.ai,$.T,$.Z,$.aP],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Nightmare Fuel",H.a([$.W,$.T,$.aY,$.aq,$.bu,$.aP],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lW,$.k)
q.i(0,$.dg,$.k)
q.i(0,$.du,$.k)
q.i(0,$.d5,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.ce,$.m)
q.i(0,$.c7,$.L)
q.i(0,$.d6,$.m)
q.i(0,$.eg,$.k)
q.i(0,$.iG,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.m1,$.k)
q.i(0,$.h9,$.m)
q.i(0,$.ej,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.af
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.S("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hI(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.A
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.S("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.a_(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.as)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dv,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c7,$.k)
s.i(0,$.cM,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cC,$.m)
s.i(0,$.iF,$.L)
s.i(0,$.dg,$.m)
s.i(0,$.cF,$.k)
s.i(0,$.cl,$.k)
s.i(0,$.d6,$.L)
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
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.S("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.a_(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.as)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lW,$.k)
t.i(0,$.d6,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.cF,$.m)
t.i(0,$.cy,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.S("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a_(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.as)}}
Y.dN.prototype={}
Y.ac.prototype={}
Y.d4.prototype={}
Y.c1.prototype={
gH:function(a){return this.c}}
Y.U.prototype={}
Y.io.prototype={}
Y.bD.prototype={}
Y.d1.prototype={}
Y.l5.prototype={}
Y.by.prototype={}
Y.jP.prototype={}
Y.iL.prototype={}
Y.jR.prototype={}
N.of.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Domino Mask",H.a([$.O,$.N,$.fb],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Archery Set",H.a([$.tS,$.N,$.fb,$.wk],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Gristtorrent Server",H.a([$.Z,$.az,$.a6,$.N,$.X,$.ak],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.x]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.c7,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.dJ,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.A
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Q.og.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Red Rose",H.a([$.aA,$.aw],s),null,!1,"Seductive Plant")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.aA,$.J],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Chocolate Bar",H.a([$.aA,$.ap],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Candelabra",H.a([$.aA,$.aq],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Head Cannon",H.a([$.aA,$.bu,$.D,$.aJ],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Her Pitch Passions Novel",H.a([$.av,$.J,$.aA],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.k)
q.i(0,$.hd,$.m)
q.i(0,$.f_,$.m)
q.i(0,$.hc,$.k)
q.i(0,$.cM,$.m)
q.i(0,$.iD,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.af+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.Y("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cM,$.m)
s.i(0,$.dI,$.k)
s.i(0,$.hc,$.k)
s.i(0,$.cz,$.m)
s.i(0,$.ei,$.L)
s.i(0,$.iD,$.L)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.Y("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iD,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.f_,$.m)
t.i(0,$.m2,$.k)
t.i(0,$.hc,$.k)
t.i(0,$.cM,$.m)
t.i(0,$.ei,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.A+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.FH
t.i(0,new R.Y("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.o
r="The "+n+"  and the "
o=$.ey
t.i(0,new R.Y("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.iL(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o=$.o
n="The "+o+"  and the "
r=$.ey
t.i(0,new R.Y("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.jP(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r=$.o
o="The "+r+"  and the "
n=$.ey
t.i(0,new R.Y("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ex(),!1,!1,new Y.jR(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p.i(0,new X.G(s,t,null),$.aB)}}
T.hK.prototype={
D:function(){var t,s
t=Q.I(null,null,A.a4)
s=A.j("Perfectly Generic Object",H.a([],[G.a1]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.k)
q.i(0,$.b3,$.L)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.dZ,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.G(s,q,null),$.bN)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.f2,$.m)
s.i(0,$.cY,$.k)
s.i(0,$.ce,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a5("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a5("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.ey+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.K+"ing in amazement. The factory is saved! ")],H.a([],m),R.ex(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.aj)
n.i(0,new X.G(q,s,null),$.bN)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aO,$.k)
t.i(0,$.b3,$.L)
t.i(0,$.c8,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.K
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uP(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.bN)},
A:function(a){return this.r},
ab:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.iA("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ik]),H.a([],[M.h7]))
this.D()
this.E()
t=this.Q
if($.$get$oi().Y(0,t))H.aZ("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cw($.$get$oi().n(0,t))+".")
$.$get$oi().i(0,t,this)},
gH:function(a){return this.r}}
E.oj.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Sage's Robe",H.a([$.O,$.N,$.b1,$.X,$.a2,$.Z],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Peer Reviewed Journal",H.a([$.J,$.N,$.av,$.X],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Guru Pillow",H.a([$.O,$.N,$.fc,$.X],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.ha,$.m)
t.i(0,$.b3,$.m)
t.i(0,$.f5,$.k)
t.i(0,$.aO,$.L)
t.i(0,$.cE,$.k)
r="The "+$.A+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.A+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a5("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.K+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
K.ok.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Uno Reverse Card",H.a([$.mC,$.T,$.aP],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("JR Body Pillow",H.a([$.fc,$.b1,$.T],s),null,!1,null)
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.x]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lW,$.k)
q.i(0,$.dg,$.k)
q.i(0,$.du,$.k)
q.i(0,$.d5,$.m)
q.i(0,$.c0,$.m)
q.i(0,$.ce,$.m)
q.i(0,$.c7,$.L)
q.i(0,$.d6,$.m)
q.i(0,$.eg,$.k)
q.i(0,$.iG,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.m1,$.k)
q.i(0,$.h9,$.m)
q.i(0,$.ej,$.k)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.af
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.S("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hI(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.A
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.S("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.a_(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.as)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dv,$.k)
s.i(0,$.c0,$.m)
s.i(0,$.c7,$.k)
s.i(0,$.cM,$.k)
s.i(0,$.cy,$.k)
s.i(0,$.cC,$.m)
s.i(0,$.iF,$.L)
s.i(0,$.dg,$.m)
s.i(0,$.cF,$.k)
s.i(0,$.cl,$.k)
s.i(0,$.d6,$.L)
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
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.S("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.a_(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.as)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lW,$.k)
t.i(0,$.d6,$.k)
t.i(0,$.c7,$.k)
t.i(0,$.cF,$.m)
t.i(0,$.cy,$.k)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.S("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a_(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.as)}}
Y.ol.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Walking Stick",H.a([$.W,$.N,$.dw],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Adorable Girlscout Beret",H.a([$.O,$.N,$.ws,$.X,$.Z],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Map",H.a([$.J,$.N,$.X],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.D,$.N,$.X,$.a2],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.x]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.dh,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.b3,$.k)
t.i(0,$.cl,$.L)
t.i(0,$.aO,$.L)
r="Now that the "+$.A+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.bN)}}
L.om.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Scroll",H.a([$.J,$.N,$.X],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ink Pot",H.a([$.aV,$.N,$.ak,$.X],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Blank Book",H.a([$.J,$.N,$.av,$.X,$.ak,$.Z],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.lX,$.k)
t.i(0,$.b3,$.k)
t.i(0,$.cE,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cD,$.m)
r="The "+$.A+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.A+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a5("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
S.op.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Cueball",H.a([$.el,$.mJ,$.N,$.ad,$.ar,$.Z],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Crystal Ball",H.a([$.el,$.wq,$.N,$.aQ],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Binoculars",H.a([$.aV,$.N,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Blindfold",H.a([$.wm,$.N,$.b1],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.w6,$.k)
t.i(0,$.iE,$.k)
t.i(0,$.w4,$.k)
t.i(0,$.cF,$.m)
r="Now that the "+$.A+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.a5("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bB("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a5("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.A+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.af
t.i(0,new R.a5("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
T.c3.prototype={}
Y.ow.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Meddler's Guide",H.a([$.av,$.N,$.J,$.bx,$.Z,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.aV,$.N,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.j("Cloud in a Bottle",H.a([r,r,$.br],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a2,$.N,$.aQ,$.aw,$.J],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.b3,$.m)
t.i(0,$.dh,$.k)
t.i(0,$.cF,$.m)
t.i(0,$.aO,$.m)
t.i(0,$.c8,$.k)
r="The defeat of the "+$.A+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bB("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
q="Now that the "+$.A+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a5("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
N.ox.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Fiduspawn Plush",H.a([$.cg,$.O,$.b1],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Teddy Bear",H.a([$.cg,$.O,$.b1],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dice",H.a([$.tW,$.az],s),null,!1,"D113")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Pigeon",H.a([$.bA,$.ar,$.bk,$.b0,$.bt,$.u5],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Cat Ears",H.a([$.O,$.b1,$.cg],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Religious Text",H.a([$.av,$.J],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Psychology Book",H.a([$.av,$.J],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Therapy Couch",H.a([$.b1,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("FLARP Manual",H.a([$.av,$.J,$.X],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.L)
q.i(0,$.aO,$.m)
q.i(0,$.cD,$.k)
q.i(0,$.cE,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.Y("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aG+" or "+$.af+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.K+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.L)
s.i(0,$.aO,$.k)
s.i(0,$.cD,$.k)
s.i(0,$.tB,$.k)
s.i(0,$.cM,$.k)
s.i(0,$.tH,$.k)
s.i(0,$.cE,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.K
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aG
s.i(0,new R.Y("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cY,$.L)
t.i(0,$.dI,$.k)
t.i(0,$.c8,$.k)
t.i(0,$.dJ,$.k)
t.i(0,$.h8,$.k)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.Y("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.K+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aB)}}
M.bC.prototype={}
N.oz.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Frog Statue",H.a([$.aF,$.au,$.T],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.O,$.T],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.c2,$.X,$.a6,$.T],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.D,$.aV,$.X,$.T],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Green Sun Poster",H.a([$.J,$.T,$.tZ,$.Z],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.x]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.K+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.A+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
p=$.o
t=t+p+" that they must negotiate with "
o=$.A
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.o
p="The "+o+" meets with "
t=$.A
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.cF,$.L)
t.i(0,$.tD,$.k)
s=[U.c]
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
t.i(0,new R.S("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.o
t.i(0,new R.bB("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.z(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
this.f.i(0,new X.G(o,t,null),$.GQ)}}
U.ah.prototype={
gH:function(a){return this.d+"kind"},
$isbG:1,
$asbG:function(){return[A.a4]}}
K.cH.prototype={
gH:function(a){return this.a}}
M.oD.prototype={
aT:function(a){return"application/octet-stream"},
R:function(a6,a7){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$R=P.bq(function(a8,a9){if(a8===1)return P.bn(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.df(null,0)
q.a=J.dU(a7,0)
for(p=0,o="";p<6;++p)o+=H.hH(q.ac(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.h("Invalid header: "+n)
m=q.ac(8)
l=9+m*6
o=8*m
k=q.ac(o)
j=q.ac(o)
i=q.ac(o)
h=q.ac(o)
g=q.ac(o)
f=q.ac(o)
o=P.C
e=P.x
d=P.cG(o,e)
c=new O.d_(k,j,null,null,null,null,null,null,d,P.cG(e,o))
c.x=new Uint8Array(H.cA(k*j))
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
break $async$outer}a1[a2]=a3}d.i(0,a,P.p1(a1,0,null))}a4=q.ac(8)
a5=$.$get$xi().n(0,a4)
if(a5==null)throw H.h("Sprite decoding error: Encoding id "+a4+" not supported.")
c.iq(i,h,g,a5.c.$4(a7,l,g*f,c))
c.i7()
r=c
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$asdr:function(){return[O.d_]},
$asc9:function(){return[O.d_,P.bi]}}
R.p6.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Meddler's Guide",H.a([$.av,$.N,$.J,$.bx,$.Z,$.aI],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.aV,$.N,$.aI],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.j("Cloud in a Bottle",H.a([r,r,$.br],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a2,$.N,$.aQ,$.aw,$.J],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.x]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.cD,$.k)
t.i(0,$.aO,$.k)
t.i(0,$.dh,$.m)
t.i(0,$.f5,$.m)
t.i(0,$.tA,$.m)
t.i(0,$.dZ,$.m)
t.i(0,$.iB,$.m)
t.i(0,$.tG,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.A+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.K+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uR(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a5("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.A+". They are yelling and "+$.K+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bB("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
r="The defeat of the "+$.A+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a5("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aG+". Huh. Okay then.")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
D.pb.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Robot",H.a([$.a6,$.D,$.ar,$.X],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Circuit Board",H.a([$.a6,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Datastructures for Assholes",H.a([$.a6,$.J],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a6,$.J,$.aC,$.av],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("3-D Printer",H.a([$.az,$.a6,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Virus on a USB Stick",H.a([$.ww,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Wrench",H.a([$.uc,$.D,$.ad],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Computer",H.a([$.a6,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.iH,$.m)
q.i(0,$.f0,$.k)
q.i(0,$.f3,$.k)
q.i(0,$.ce,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aG
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.A+" destroyed it. "
o="The "+p+" searches for the "
l=$.af
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.FP
p=[U.c]
q.i(0,new R.Y("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.z(),!1,!1,new Y.d1("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.K
q.i(0,new R.Y("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.A+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.af+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fm(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
m=this.r
m.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.f3,$.k)
s.i(0,$.eh,$.L)
s.i(0,$.f2,$.m)
s.i(0,$.cY,$.k)
s.i(0,$.ce,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.Y("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.K
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.af
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Y("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e3(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.as)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iH,$.L)
t.i(0,$.f0,$.k)
t.i(0,$.f3,$.k)
t.i(0,$.ce,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aG
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.A
t.i(0,new R.Y("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aB)}}
V.pc.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Lighter",H.a([$.D,$.aq],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Siberia Poster",H.a([$.J,$.bs],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Winter Poster",H.a([$.J,$.bs,$.c2],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Doomsday Device",H.a([$.D,$.aC,$.c2,$.bl,$.bt],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Juggalo Poster",H.a([$.J,$.wB],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Watch",H.a([$.D,$.b5,$.bl],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Magnificent Crown",H.a([$.D,$.b5,$.bl],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bitching Clothes",H.a([$.O,$.fb,$.bl],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Ceramic Pork Hollow",H.a([$.bQ,$.b5],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Shit Ton of Guns",H.a([$.D,$.u6,$.aJ,$.bl],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sniper Rifle",H.a([$.D,$.u9,$.aJ,$.bl],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("AK-47",H.a([$.D,$.u2,$.aJ,$.bl],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("IED",H.a([$.mE,$.at,$.D,$.bu,$.bl],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Idiots Guide To Being An Asshole",H.a([$.J,$.bx,$.av],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.cb,$.D,$.aW,$.bx],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Matches",H.a([$.W,$.aq],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.m)
q.i(0,$.dI,$.k)
q.i(0,$.e_,$.k)
q.i(0,$.f4,$.k)
q.i(0,$.m0,$.k)
q.i(0,$.dJ,$.m)
p=$.o
o=[U.c]
q.i(0,new R.Y("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cC,$.m)
s.i(0,$.dI,$.k)
s.i(0,$.cz,$.k)
s.i(0,$.dJ,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.Y("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.af+" underling. Tremble at the fearsome "+$.aG+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.d5,$.k)
q.i(0,$.b3,$.L)
q.i(0,$.dL,$.k)
q.i(0,$.c0,$.m)
q.i(0,$.dZ,$.L)
q.i(0,$.dg,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.Y("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.k)
t.i(0,$.dg,$.L)
t.i(0,$.eg,$.k)
t.i(0,$.iG,$.k)
t.i(0,$.ce,$.m)
t.i(0,$.ej,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.K
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aG+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Y("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.aB)}}
X.G.prototype={
A:function(a){return"Theme: "+H.y(this.a)}}
U.pj.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Lockpick",H.a([$.D,$.N,$.ak,$.aL,$.Z],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Sneaking Suit",H.a([$.O,$.N,$.ak],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Dagger",H.a([$.D,$.N,$.aL,$.at,$.tV],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.c7,$.k)
t.i(0,$.du,$.m)
t.i(0,$.cl,$.m)
t.i(0,$.cY,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.A+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.K+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a5("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.A
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aG+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.K+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a5("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.af
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.K
l=n+l+"worth, the disaffected Heir to the "+$.aG+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
N.pk.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Grandfather Clock",H.a([$.W,$.ai,$.b5,$.T],s),null,!1,"Ticking Tower of Time")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.wF,$.T,$.a8],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aF,$.bk,$.T,$.b0,$.aY,$.aC],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.D,$.T,$.a8,$.ai],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.D,$.T,$.a8,$.Z,$.am],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Metronome",H.a([$.D,$.T,$.a8],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.x]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.w8,$.aj)
q.i(0,$.ce,$.m)
q.i(0,$.cY,$.m)
q.i(0,$.f2,$.k)
p=$.A
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.c]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ew(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.k)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.af
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.A
q.i(0,new R.S("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.a_("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.as)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.h9,$.k)
s.i(0,$.e_,$.L)
s.i(0,$.ce,$.k)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.A
s.i(0,new R.S("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.a_(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.as)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c8,$.k)
t.i(0,$.aO,$.m)
t.i(0,$.cD,$.k)
t.i(0,$.dh,$.k)
r=$.A
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.af
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.S("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.a_(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hI(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
k=$.A
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.af
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.S("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.a_("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ew(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.k)
r="With the defeat of the "+$.A+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aG
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ew(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.k)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.S("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.K+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.a_("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.A+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.as)}}
G.a1.prototype={
A:function(a){var t=this.b
if(t.length!==0)return C.b.gG(t)
return"NULL TRAIT"},
ger:function(){return this.a},
gea:function(){return this.b},
gbC:function(){return this.c}}
G.aH.prototype={}
G.ag.prototype={}
G.bI.prototype={}
G.d.prototype={
gi4:function(){return this.e.length},
gbC:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q].c
return r},
aC:function(a,b){return C.a.bD(b.gi4()-this.e.length)},
eD:function(a){return C.b.hw(this.e,a.ghi(a))},
$isbG:1,
$asbG:function(){return[G.d]},
gH:function(a){return this.d},
geY:function(){return this.e}}
G.mK.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a1]}}}
Q.pI.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Cardboard Box",H.a([$.J,$.T,$.ak],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Hole Punch",H.a([$.D,$.T,$.ak],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Smoke Bombs",H.a([$.bu,$.T,$.ak,$.mE],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Tribal Mask",H.a([$.b0,$.T,$.ak,$.aY,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Opera Mask",H.a([$.az,$.T,$.ak,$.ai],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Black Hole in a Bottle.",H.a([$.T,$.Z,$.tZ,$.ak,$.aV],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.x]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.k)
q.i(0,$.m_,$.k)
q.i(0,$.hb,$.k)
q.i(0,$.iE,$.k)
p=$.A
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.c]
q.i(0,new R.a5("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.A
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.S("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.a_(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.G(s,q,null),$.as)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.m)
s.i(0,$.m_,$.m)
s.i(0,$.hb,$.m)
s.i(0,$.c7,$.k)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.A
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.af
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fm(),!1,!1,new Y.c1("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.k)
m=$.o
s.i(0,new R.S("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.K+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.a_("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.A+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(q,s,null),$.as)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.k)
t.i(0,$.m_,$.k)
t.i(0,$.hb,$.k)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.A+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.S("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.a_(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(s,t,null),$.as)}}
E.pJ.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Yardstick",H.a([$.dw,$.N,$.mI,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Hacking Guide",H.a([$.av,$.N,$.jx,$.J],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of JR",H.a([$.O,$.N,$.fc,$.u1,$.b1],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Nanobots",H.a([$.ua,$.N,$.mB],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.cF,$.k)
t.i(0,$.d6,$.k)
t.i(0,$.dt,$.k)
t.i(0,$.dh,$.k)
t.i(0,$.ef,$.k)
t.i(0,$.f1,$.k)
t.i(0,$.hb,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Y("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uR(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ci+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.S("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.a_(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xd(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.Y("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.S("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.o
t.i(0,new R.S("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.U("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aj)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xe(),!1,!1,new Y.c1("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
this.x.i(0,new X.G(s,t,null),$.as)}}
M.pN.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Cauldron",H.a([$.wE,$.N,$.a2],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Flying Broom",H.a([$.ju,$.dw,$.N,$.W,$.a2],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Warped Mirror",H.a([$.u3,$.N,$.a2,$.ak,$.Z],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.x]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.V])
t.i(0,$.c0,$.m)
t.i(0,$.hd,$.m)
t.i(0,$.d5,$.m)
t.i(0,$.cY,$.m)
t.i(0,$.cy,$.m)
t.i(0,$.tD,$.m)
r=$.A
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bB("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aj)
o="Even with the defeat of the "+$.A+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aG
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a5("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aG
q=q+r+" was discovered amongst the "+$.A+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a5("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aG
t.i(0,new R.a5("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.af+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.K+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.z(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
U.pO.prototype={
R:function(a5,a6){var t=0,s=P.bj(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$R=P.bq(function(a7,a8){if(a7===1)return P.bn(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e9(a6,$.$get$xE())
if(0>=p.length){r=H.u(p,0)
t=1
break}if(J.z3(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.u(p,0)
t=1
break}throw H.h("Invalid WordList file header: '"+H.y(p[0])+"'")}o=P.x
n=H.a([],[o])
m=P.cG(o,B.kb)
q.a=null
l=P.cG(o,o)
for(k=P.V,j=B.dA,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cK()
""+i
H.y(g)
f.toString
f=J.e9(g,$.$get$xC())
if(0>=f.length){r=H.u(f,0)
t=1
break $async$outer}g=f[0]
f=J.aT(g)
if(f.gU(g)===!0){$.$get$cK().toString
continue}if(f.a9(g,$.$get$xD())){$.$get$cK().toString
continue}if(C.c.a9(g,"@")){e=C.c.aa(g,1)
$.$get$cK().toString
n.push(e)}else if(C.c.a9(g,"?")){f=C.c.aa(g,1)
f=$.$get$hU().aQ(0,f)
f=H.dx(f,B.kB(),H.ay(f,"n",0),null)
d=P.dj(f,!0,H.ay(f,"n",0))
if(d.length<2)$.$get$cK().bc(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cK()
H.y(c)
H.y(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xF()
a=f.co(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.u(f,1)
t=1
break $async$outer}a0=J.c_(f[1])
a1=C.c.aa(g,a0)
if(a1.length===0)continue
f=J.ao(a0)
if(f.S(a0,0)){a1=C.c.eE(a1)
$.$get$cK().toString
f=P.cG(o,o)
a2=new B.kb(P.cG(o,k),f,a1,!1,null,null)
a2.dj(null,null,j)
q.a=a2
f.aw(0,l)
m.i(0,a1,q.a)}else if(f.S(a0,$.xG))if(C.c.a9(a1,"?")){a1=C.c.aa(a1,1)
f=$.$get$hU().aQ(0,a1)
f=H.dx(f,B.kB(),H.ay(f,"n",0),null)
d=P.dj(f,!0,H.ay(f,"n",0))
f=$.$get$cK()
f.toString
if(d.length<2)f.bc(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kF(d[0],$.$get$fr(),"")
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}b=J.kF(d[1],$.$get$fr(),"")
f=$.$get$cK()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.a9(a1,"@")){e=C.c.aa(a1,1)
$.$get$cK().toString
f=$.$get$hU().aQ(0,a1)
f=H.dx(f,B.kB(),H.ay(f,"n",0),null)
d=P.dj(f,!0,H.ay(f,"n",0))
a4=d.length>1?H.xa(d[1],new U.pP(q,d)):1
q.a.c.i(0,C.c.d_(e,$.$get$fr(),""),a4)}else{$.$get$cK().toString
f=$.$get$hU().aQ(0,g)
f=H.dx(f,B.kB(),H.ay(f,"n",0),null)
d=P.dj(f,!0,H.ay(f,"n",0))
a4=d.length>1?H.xa(d[1],new U.pQ(q,d)):1
if(0>=d.length){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bk(J.kF(d[0],$.$get$fr(),""))
h=new B.dA(null)
a3=P.cG(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.i(h,f.k(h,J.vI(a4)),[H.ay(f,"cT",0)]))}else if(f.S(a0,$.xG*2)){$.$get$cK().toString
f=$.$get$hU().aQ(0,g)
f=H.dx(f,B.kB(),H.ay(f,"n",0),null)
d=P.dj(f,!0,H.ay(f,"n",0))
f=d.length
if(f!==2)$.$get$cK().bc(C.h,"Invalid variant for "+H.y(h.d4(0))+" in "+q.a.e)
else{if(0>=f){r=H.u(d,0)
t=1
break $async$outer}f=C.c.bk(J.kF(d[0],$.$get$fr(),""))
if(1>=d.length){r=H.u(d,1)
t=1
break $async$outer}a3=C.c.d_(U.GT(d[1]),$.$get$fr(),"")
h.a.i(0,f,a3)}}}}}r=new B.hZ(n,m)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$aseC:function(){return[B.hZ]},
$asc9:function(){return[B.hZ,P.x]}}
U.pP.prototype={
$1:function(a){var t,s,r
t=$.$get$cK()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid include weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bc(C.m,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
U.pQ.prototype={
$1:function(a){var t,s,r
t=$.$get$cK()
s=this.b
if(1>=s.length)return H.u(s,1)
r="Invalid weight '"+H.y(s[1])+"' for word '"
if(0>=s.length)return H.u(s,0)
t.bc(C.m,r+H.y(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.x]}}}
F.pS.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a1]
r=A.j("Make a World Book",H.a([$.J,$.ai,$.av],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Quill Pen",H.a([$.b1,$.O,$.mG],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Book On Writing",H.a([$.av,$.J,$.X],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("FLARP Manual",H.a([$.av,$.J,$.X],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Script",H.a([$.av,$.J],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Pen",H.a([$.D,$.X,$.mG,$.ai],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
r=A.j("Spiral Bound Notebook",H.a([$.av,$.J,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.i(r,t.k(r,C.a.l(1)),q))
s=A.j("Half Written Novel",H.a([$.av,$.J],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.i(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.x]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.aa,P.V]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.k)
q.i(0,$.cE,$.k)
q.i(0,$.b3,$.m)
q.i(0,$.aO,$.m)
q.i(0,$.ha,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.Y("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aB)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dJ,$.m)
s.i(0,$.cC,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.b3,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.Y("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.K+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aB)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cC,$.m)
t.i(0,$.dI,$.k)
t.i(0,$.cz,$.k)
t.i(0,$.dJ,$.m)
t.i(0,$.dt,$.k)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.Y("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.z(),!1,!1,new Y.d4("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aB)}}
B.pX.prototype={
aT:function(a){return"application/x-tar"},
R:function(a,b){var t=0,s=P.bj(),r,q,p
var $async$R=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=$.$get$xH()
p=J.vz(b)
q.toString
r=q.hp(T.tQ(p,0,null,0),!1)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$R,s)},
$asdr:function(){return[T.fH]},
$asc9:function(){return[T.fH,P.bi]}}
A.fP.prototype={}
B.ds.prototype={
cF:function(a){if(a)this.b=(this.b|C.a.ap(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hH(this.b)
this.b=0}},
ag:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.ap(1,t)
if(typeof a!=="number")return a.aL()
this.cF((a&s)>>>0>0)}},
ha:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.au(1,t-s)
if(typeof a!=="number")return a.aL()
this.cF((a&r)>>>0>0)}},
bV:function(a){var t,s
a=J.e7(a,1)
t=C.d.dh(Math.log(H.kw(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cF(!1)
this.ha(a,t+1)},
b5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a7(r)
q+=r
p=r}else p=0
r=H.cA(q)
o=new Uint8Array(r)
if(t){n=H.cP(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.u(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a6(k,m)
if(s<0||s>=r)return H.u(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.u(o,t)
o[t]=s}return o.buffer}}
B.df.prototype={
cv:function(a){var t,s,r,q
t=C.f.aj(a/8)
s=C.a.bJ(a,8)
r=this.a.getUint8(t)
q=C.a.au(1,s)
if(typeof r!=="number")return r.aL()
return(r&q)>>>0>0},
ac:function(a){var t,s,r
if(a>32)throw H.h(P.dV(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cv(this.b);++this.b
if(r)t=(t|C.a.ap(1,s))>>>0}return t},
i6:function(a){var t,s,r,q
if(a>32)throw H.h(P.dV(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cv(this.b);++this.b
if(q)s=(s|C.a.au(1,t-r))>>>0}return s},
c3:function(){var t,s,r
for(t=0;!0;){s=this.cv(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.i6(t+1)-1}}
A.dW.prototype={
A:function(a){return"rgb("+H.y(this.b)+", "+H.y(this.c)+", "+H.y(this.d)+", "+H.y(this.a)+")"},
ik:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.au()
s=this.c
if(typeof s!=="number")return s.au()
r=this.d
if(typeof r!=="number")return r.au()
q=this.a
if(typeof q!=="number")return H.a7(q)
return(t<<24|s<<16|r<<8|q)>>>0},
S:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dW){t=this.b
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
ga7:function(a){return this.ik(!0)},
W:function(a,b){var t,s,r,q,p,o,n,m
t=J.ao(b)
if(!!t.$isdW){t=this.b
s=b.b
if(typeof t!=="number")return t.W()
if(typeof s!=="number")return H.a7(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.W()
if(typeof q!=="number")return H.a7(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.W()
if(typeof o!=="number")return H.a7(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.W()
if(typeof m!=="number")return H.a7(m)
return A.fT(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b8()
s=this.c
if(typeof s!=="number")return s.b8()
r=this.d
if(typeof r!=="number")return r.b8()
q=this.a
if(typeof q!=="number")return q.b8()
return A.vQ(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.W()
s=this.c
if(typeof s!=="number")return s.W()
r=this.d
if(typeof r!=="number")return r.W()
return A.fT(t+b,s+b,r+b,this.a)}throw H.h("Cannot add ["+H.y(t.gad(b))+" "+H.y(b)+"] to a Colour. Only Colour, double and int are valid.")},
ar:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b8()
s=this.c
if(typeof s!=="number")return s.b8()
r=this.d
if(typeof r!=="number")return r.b8()
q=this.a
if(typeof q!=="number")return q.b8()
return A.vQ(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.h("Colour index out of range: "+H.y(b))},
i:function(a,b,c){var t,s
t=J.dC(b)
if(t.a4(b,0)||t.az(b,3))throw H.h("Colour index out of range: "+H.y(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.S(b,0)){this.b=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.S(b,2)){this.d=C.a.ae(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ae(c,0,255)
else if(t.S(b,0)){this.b=C.a.ae(J.kE(J.vy(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.S(b,1)){this.c=C.a.ae(J.kE(J.vy(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kx(c)
if(t.S(b,2)){this.d=C.a.ae(J.kE(s.ar(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ae(J.kE(s.ar(c,255)),0,255)}},
f5:function(a,b,c,d){this.b=C.d.ae(C.d.ae(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ae(C.d.ae(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ae(C.d.ae(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ae(J.yz(d,0,255),0,255)}}
A.rH.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.x]}}}
N.cx.prototype={
gH:function(a){return this.a}}
N.t0.prototype={
$0:function(){return $.$get$rQ()},
$S:function(){return{func:1}}}
N.t1.prototype={
$1:function(a){var t,s,r,q,p
for(t=$.$get$rQ(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
p=J.aM(q)
if(a.X(0,q))J.kG(p.gaB(q),"inline-block")
else J.kG(p.gaB(q),"none")}},
$S:function(){return{func:1,args:[[P.e4,W.c6]]}}}
N.t2.prototype={
$1:function(a){var t=J.yH(a)
return t.a.a.getAttribute("data-"+t.bp("name"))},
$S:function(){return{func:1,args:[W.c6]}}}
A.n9.prototype={
$1:function(a){return this.a.ew(a)},
$S:function(){return{func:1,args:[,]}}}
A.n7.prototype={
$1:function(a){this.a.R(0,a).b4(this.b.gi3())},
$S:function(){return{func:1,args:[,]}}}
A.n8.prototype={
$1:function(a){this.a.hh(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.na.prototype={
$1:function(a){return this.a.aD(0,this.b)},
$S:function(){return{func:1,args:[W.Q]}}}
F.hu.prototype={
A:function(a){return this.b}}
F.hv.prototype={
bc:function(a,b){F.FD(a).$1("("+this.c+")["+H.y(C.b.gbb(a.b.split(".")))+"]: "+H.y(b))},
cM:function(a,b){this.bc(C.h,b)},
gH:function(a){return this.c}}
F.up.prototype={}
O.t5.prototype={
$1:function(a){return H.y(a.bd(1))+" = "+H.y(a.bd(2))+C.c.ar("../",this.a)},
$S:function(){return{func:1,args:[P.dy]}}}
O.t6.prototype={
$0:function(){var t=document
J.vF(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kA(t.querySelector("#voidButton"),"$isfR")
t.toString
W.fv(t,"click",new O.t4(),!1,W.Iz)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Il("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.t4.prototype={
$1:function(a){return O.Ir()},
$S:function(){return{func:1,args:[W.Q]}}}
R.he.prototype={}
R.uG.prototype={}
R.uF.prototype={}
A.nT.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Y(0,b)?t.n(0,b):$.$get$uE()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Y(0,b)?t.n(0,b):$.$get$uE()}throw H.h(P.dV(b,"'name' should be a String name or int id only",null))},
gV:function(a){var t=this.a
t=t.gc7(t)
return new H.jE(null,J.cW(t.a),t.b,[H.P(t,0),H.P(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Y(0,b))this.an(0,b)
s=this.fQ()
if(typeof s!=="number")return s.as()
if(s>=256)throw H.h(P.dV(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
an:function(a,b){var t,s,r
t=this.a
if(!t.Y(0,b))return
s=this.c
r=s.n(0,b)
t.an(0,b)
this.b.an(0,r)
s.an(0,b)
this.d.an(0,r)},
fQ:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Y(0,s))return s;++s}}}
A.jN.prototype={
$asn:function(){return[A.dW]},
$isn:1}
Q.jQ.prototype={}
A.jU.prototype={
bA:function(a){if(a===0)return 0
return this.fR(a)},
hU:function(){return this.bA(4294967295)},
fR:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cR()
this.b=C.d.bD(s*4294967295)
return C.d.aj(s*a)}else{s=t.bA(a)
this.b=s
return s}},
d8:function(a){var t=a==null
this.a=t?C.Q:P.H7(a)
if(!t)this.b=J.e7(a,1)},
i1:function(a,b){var t=a.length
if(t===0)return
t=this.bA(t)
if(t<0||t>=a.length)return H.u(a,t)
return a[t]},
i0:function(a){return this.i1(a,!0)}}
Y.dM.prototype={
cD:function(a){var t,s
if(this.b!=null)throw H.h("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bm(0,$.an,null,t)
this.c.push(new P.dS(s,t))
return s},
ew:function(a){var t,s,r
if(this.b!=null)throw H.h("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r)t[r].aD(0,this.b)
C.b.sm(t,0)}}
V.lB.prototype={
$4:function(a,b,c,d){return V.zT(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.d_]}}}
V.lA.prototype={
$4:function(a,b,c,d){return V.zS(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.d_]}}}
V.lz.prototype={
$4:function(a,b,c,d){return V.zP(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bi,P.bi,O.d_]}}}
V.ly.prototype={
$4:function(a,b,c,d){return V.zO(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bi,P.C,P.C,O.d_]}}}
O.d_.prototype={
i7:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
iq:function(a,b,c,d){var t,s,r,q,p
t=J.aM(d)
s=0
while(!0){r=t.geo(d)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
q=(C.a.dh(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.u(r,q)
r[q]=p;++s}}}
D.oF.prototype={
$1:function(a){return a.gi2()},
$S:function(){return{func:1,args:[D.cI]}}}
D.cI.prototype={
A:function(a){return this.a},
gH:function(a){return this.a},
gi2:function(){return this.d}}
D.kc.prototype={}
D.od.prototype={}
B.dA.prototype={
eK:function(a,b){if(this.a.Y(0,"MAIN"))return this.a.n(0,"MAIN")
return},
d4:function(a){return this.eK(a,null)},
A:function(a){return"[Word: "+H.y(this.d4(0))+"]"}}
B.kb.prototype={
A:function(a){return"WordList '"+this.e+"': "+this.f1(0)},
$isp:1,
$asp:function(){return[B.dA]},
$asdR:function(){return[B.dA]},
$ashY:function(){return[B.dA]},
$ascT:function(){return[B.dA]},
$asn:function(){return[B.dA]},
$asr:function(){return[B.dA]},
gH:function(a){return this.e}}
B.hZ.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"}}
G.oo.prototype={
$1:function(a){this.b.$1(G.GI(this.a.$0(),J.yQ(this.d),this.c))},
$S:function(){return{func:1,v:true,args:[W.Q]}}}
G.hM.prototype={
A:function(a){var t=this.b?"[N]":""
return t+this.a}}
S.fk.prototype={}
S.v8.prototype={}
S.v9.prototype={}
S.va.prototype={}
S.tw.prototype={}
S.tz.prototype={}
S.tm.prototype={}
S.uS.prototype={}
S.vc.prototype={}
S.vd.prototype={}
S.l3.prototype={}
S.uI.prototype={}
S.uD.prototype={}
S.n1.prototype={}
S.tq.prototype={}
S.tg.prototype={}
S.lk.prototype={}
S.uq.prototype={}
S.ll.prototype={}
S.nV.prototype={}
S.uZ.prototype={}
S.uW.prototype={}
S.v_.prototype={}
S.tf.prototype={}
S.mf.prototype={}
S.l1.prototype={}
S.tk.prototype={}
S.tj.prototype={}
S.uJ.prototype={}
S.v0.prototype={}
S.uK.prototype={}
S.ty.prototype={}
S.tx.prototype={}
S.uY.prototype={}
S.uX.prototype={}
S.pi.prototype={}
S.v3.prototype={}
S.tn.prototype={}
S.to.prototype={}
S.vb.prototype={}
S.hx.prototype={}
S.uv.prototype={}
S.uw.prototype={}
S.ux.prototype={}
S.uy.prototype={}
S.uT.prototype={}
S.uU.prototype={}
S.uV.prototype={}
S.uu.prototype={}
S.uA.prototype={}
S.uB.prototype={}
S.tM.prototype={}
S.tN.prototype={}
S.tO.prototype={}
S.uC.prototype={}
S.uz.prototype={}
S.th.prototype={}
S.v5.prototype={}
S.v6.prototype={}
S.v4.prototype={}
Z.uk.prototype={}
Z.ug.prototype={}
Z.uh.prototype={}
Q.cT.prototype={
k:function(a,b){return b},
A:function(a){return J.cw(this.gc1())},
ay:function(a,b){return Q.vf(this,b,H.ay(this,"cT",0),null)},
a3:function(a,b){return Q.ve(this,!1,!0,null,H.ay(this,"cT",0))},
ao:function(a){return this.a3(a,!0)},
$isn:1,
$asn:null}
Q.dR.prototype={
gc1:function(){return this.b},
bU:function(a,b,c){C.b.h(this.b,new Q.i(b,this.k(b,J.vI(c)),[H.ay(this,"cT",0)]))},
h:function(a,b){return this.bU(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.u(t,b)
return J.vD(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.u(t,b)
t[b]=new Q.i(c,s,[H.ay(this,"cT",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jy(this.b,"[","]")},
ay:function(a,b){return Q.vf(this,b,H.ay(this,"dR",0),null)},
a3:function(a,b){return Q.ve(this,!1,!0,null,H.ay(this,"dR",0))},
ao:function(a){return this.a3(a,!0)},
dj:function(a,b,c){var t,s
this.a=a
t=[[Q.i,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hY.prototype={$ascT:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.i.prototype={
A:function(a){return"("+H.y(this.a)+" @ "+H.y(this.b)+")"},
gZ:function(a){return this.a},
gd2:function(a){return this.b}}
Q.eJ.prototype={
gc1:function(){return this.b},
gV:function(a){var t=new Q.pL(null,[H.ay(this,"eJ",0)])
t.a=J.cW(this.b)
return t},
gm:function(a){return J.c_(this.b)},
A:function(a){return J.cw(this.b)},
ay:function(a,b){return Q.vf(this,b,H.ay(this,"eJ",0),null)},
a3:function(a,b){return Q.ve(this,!1,!0,null,H.ay(this,"eJ",0))},
ao:function(a){return this.a3(a,!0)}}
Q.hX.prototype={$ascT:null,$asn:null,$isn:1}
Q.pL.prototype={
gO:function(){return J.vD(this.a.gO())},
F:function(){return this.a.F()}}
Q.k8.prototype={
$aseJ:function(a,b){return[b]},
$ashX:function(a,b){return[b]},
$ascT:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.pM.prototype={
$1:function(a){var t=J.aM(a)
return new Q.i(this.c.$1(t.gZ(a)),t.gd2(a),[this.b])},
$S:function(){return H.eN(function(a,b){return{func:1,args:[[Q.i,a]]}},this,"k8")}}
J.f.prototype.eZ=J.f.prototype.A
J.ho.prototype.f0=J.ho.prototype.A
P.dm.prototype.f2=P.dm.prototype.bM
P.dm.prototype.f3=P.dm.prototype.bK
P.aS.prototype.dg=P.aS.prototype.a5
P.n.prototype.f_=P.n.prototype.c9
W.c6.prototype.ce=W.c6.prototype.ax
W.ia.prototype.f4=W.ia.prototype.aZ
Q.dR.prototype.f1=Q.dR.prototype.A;(function installTearOffs(){installTearOff(H.fx.prototype,"ghP",0,0,0,null,["$0"],["c_"],1)
installTearOff(H.dB.prototype,"geN",0,0,0,null,["$1"],["aA"],12)
installTearOff(H.eK.prototype,"ghs",0,0,0,null,["$1"],["b_"],12)
installTearOff(H,"xZ",1,0,0,null,["$1"],["Hz"],6)
installTearOff(P,"HC",1,0,0,null,["$1"],["GX"],8)
installTearOff(P,"HD",1,0,0,null,["$1"],["GY"],8)
installTearOff(P,"HE",1,0,0,null,["$1"],["GZ"],8)
installTearOff(P,"ya",1,0,0,null,["$0"],["Hy"],1)
installTearOff(P.kf.prototype,"ge8",0,0,0,null,["$2","$1"],["cI","br"],14)
installTearOff(P.bm.prototype,"gbf",0,0,0,null,["$2","$1"],["al","fp"],14)
var t
installTearOff(t=P.dm.prototype,"gdO",0,0,0,null,["$0"],["bP"],1)
installTearOff(t,"gdP",0,0,0,null,["$0"],["bQ"],1)
installTearOff(t=P.i4.prototype,"gdO",0,0,0,null,["$0"],["bP"],1)
installTearOff(t,"gdP",0,0,0,null,["$0"],["bQ"],1)
installTearOff(t,"gfE",0,0,0,null,["$1"],["fF"],function(){return H.eN(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i4")})
installTearOff(t,"gfI",0,0,0,null,["$2"],["fJ"],34)
installTearOff(t,"gfG",0,0,0,null,["$0"],["fH"],1)
installTearOff(P.km.prototype,"ghi",0,1,0,null,["$1"],["X"],16)
installTearOff(P,"HM",1,0,0,null,["$2"],["zw"],30)
installTearOff(P,"HN",1,0,0,null,["$1"],["fE"],4)
installTearOff(W,"I0",1,0,0,null,["$4"],["H3"],13)
installTearOff(W,"I1",1,0,0,null,["$4"],["H4"],13)
installTearOff(t=W.im.prototype,"gaq",0,1,0,null,["$1"],["cM"],4)
installTearOff(t,"ghK",0,0,0,null,["$1"],["el"],4)
installTearOff(t,"gim",0,0,0,null,["$1"],["io"],4)
installTearOff(W.eY.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.iq.prototype,"gZ",0,1,0,null,["$1"],["J"],32)
installTearOff(W.iv.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.iw.prototype,"gZ",0,1,0,null,["$1"],["J"],6)
installTearOff(W.ix.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.f7.prototype,"gZ",0,1,0,null,["$1"],["J"],35)
installTearOff(W.iM.prototype,"gZ",0,1,0,null,["$1"],["J"],10)
installTearOff(W.f9.prototype,"gZ",0,1,0,null,["$1"],["J"],11)
installTearOff(W.iO.prototype,"gZ",0,1,0,null,["$1"],["J"],11)
installTearOff(W.jF.prototype,"gZ",0,1,0,null,["$1"],["J"],5)
installTearOff(W.jG.prototype,"gZ",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jJ.prototype,"gcW",0,1,0,null,["$0"],["cX"],7)
installTearOff(W.ch.prototype,"gZ",0,1,0,null,["$1"],["J"],9)
installTearOff(W.jS.prototype,"gZ",0,1,0,null,["$1"],["J"],17)
installTearOff(W.jY.prototype,"gZ",0,1,0,null,["$1"],["J"],10)
installTearOff(W.k_.prototype,"gZ",0,1,0,null,["$1"],["J"],18)
installTearOff(W.k0.prototype,"gZ",0,1,0,null,["$1"],["J"],19)
installTearOff(W.cj.prototype,"gZ",0,1,0,null,["$1"],["J"],20)
installTearOff(W.k4.prototype,"gZ",0,1,0,null,["$1"],["J"],36)
installTearOff(W.k5.prototype,"gZ",0,1,0,null,["$1"],["J"],21)
installTearOff(t=W.k6.prototype,"gc2",0,1,0,null,["$0"],["hZ"],7)
installTearOff(t,"gcW",0,1,0,null,["$0"],["cX"],7)
installTearOff(W.k7.prototype,"gZ",0,1,0,null,["$1"],["J"],22)
installTearOff(W.i0.prototype,"gZ",0,1,0,null,["$1"],["J"],23)
installTearOff(W.kg.prototype,"gZ",0,1,0,null,["$1"],["J"],24)
installTearOff(W.kl.prototype,"gZ",0,1,0,null,["$1"],["J"],25)
installTearOff(W.i9.prototype,"gZ",0,1,0,null,["$1"],["J"],31)
installTearOff(W.ko.prototype,"gZ",0,1,0,null,["$1"],["J"],27)
installTearOff(W.kq.prototype,"gZ",0,1,0,null,["$1"],["J"],28)
installTearOff(P.k1.prototype,"gZ",0,1,0,null,["$1"],["J"],29)
installTearOff(R,"ex",1,0,0,null,["$1"],["Gd"],0)
installTearOff(R,"xd",1,0,0,null,["$1"],["G1"],0)
installTearOff(R,"uR",1,0,0,null,["$1"],["Gc"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["Gb"],0)
installTearOff(R,"uQ",1,0,0,null,["$1"],["Ga"],0)
installTearOff(R,"xf",1,0,0,null,["$1"],["G8"],0)
installTearOff(R,"hI",1,0,0,null,["$1"],["G7"],0)
installTearOff(R,"ew",1,0,0,null,["$1"],["G4"],0)
installTearOff(R,"e3",1,0,0,null,["$1"],["G6"],0)
installTearOff(R,"fm",1,0,0,null,["$1"],["G9"],0)
installTearOff(R,"uP",1,0,0,null,["$1"],["G5"],0)
installTearOff(R,"z",1,0,0,null,["$1"],["G2"],0)
installTearOff(R,"xe",1,0,0,null,["$1"],["G3"],0)
installTearOff(N,"yl",1,0,0,null,["$0"],["Ia"],1)
installTearOff(N,"I2",1,0,0,null,["$0"],["HP"],1)
installTearOff(N,"I3",1,0,0,null,["$0"],["rL"],15)
installTearOff(N,"I4",1,0,0,null,["$0"],["rM"],15)
installTearOff(F.hv.prototype,"gaq",0,1,0,null,["$1"],["cM"],4)
installTearOff(O,"Ic",1,0,0,null,["$1"],["Ie"],33)
installTearOff(Y.dM.prototype,"gi3",0,0,0,null,["$1"],["ew"],function(){return H.eN(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dM")})
installTearOff(V,"Ij",1,0,0,null,["$4"],["zR"],3)
installTearOff(V,"Ii",1,0,0,null,["$4"],["zQ"],2)
installTearOff(B,"kB",1,0,0,null,["$1"],["Ht"],26)
installTearOff(G,"Ip",1,0,0,null,["$1"],["GF"],6)
installTearOff(T,"HI",1,0,0,null,["$4"],["zH"],3)
installTearOff(T,"HH",1,0,0,null,["$4"],["zG"],2)
installTearOff(T,"HG",1,0,0,null,["$4"],["zF"],3)
installTearOff(T,"HF",1,0,0,null,["$4"],["zE"],2)
installTearOff(F,"HV",1,0,0,null,["$4"],["zN"],3)
installTearOff(F,"HU",1,0,0,null,["$4"],["zM"],2)
installTearOff(F,"HT",1,0,0,null,["$4"],["zL"],3)
installTearOff(F,"HS",1,0,0,null,["$4"],["zK"],2)
installTearOff(F,"HR",1,0,0,null,["$4"],["zJ"],3)
installTearOff(F,"HQ",1,0,0,null,["$4"],["zI"],2)})();(function inheritance(){inherit(P.ab,null)
var t=P.ab
inherit(H.um,t)
inherit(J.f,t)
inherit(J.ij,t)
inherit(P.fl,t)
inherit(P.n,t)
inherit(H.eq,t)
inherit(P.jz,t)
inherit(H.iJ,t)
inherit(H.pu,t)
inherit(H.eW,t)
inherit(H.qO,t)
inherit(H.fx,t)
inherit(H.qk,t)
inherit(H.eL,t)
inherit(H.qN,t)
inherit(H.q5,t)
inherit(H.fn,t)
inherit(H.pm,t)
inherit(H.dF,t)
inherit(H.dB,t)
inherit(H.eK,t)
inherit(H.l9,t)
inherit(H.oc,t)
inherit(H.pr,t)
inherit(P.ee,t)
inherit(H.h6,t)
inherit(H.kp,t)
inherit(H.dQ,t)
inherit(H.w,t)
inherit(H.n2,t)
inherit(H.n4,t)
inherit(H.hn,t)
inherit(H.i8,t)
inherit(H.i_,t)
inherit(H.hS,t)
inherit(H.r9,t)
inherit(P.cm,t)
inherit(P.eX,t)
inherit(P.kf,t)
inherit(P.kk,t)
inherit(P.bm,t)
inherit(P.ke,t)
inherit(P.dl,t)
inherit(P.oH,t)
inherit(P.dm,t)
inherit(P.ki,t)
inherit(P.qf,t)
inherit(P.qR,t)
inherit(P.r7,t)
inherit(P.eQ,t)
inherit(P.rq,t)
inherit(P.qE,t)
inherit(P.qG,t)
inherit(P.os,t)
inherit(P.qL,t)
inherit(P.dn,t)
inherit(P.ff,t)
inherit(P.aS,t)
inherit(P.rh,t)
inherit(P.ni,t)
inherit(P.qM,t)
inherit(P.fS,t)
inherit(P.fU,t)
inherit(P.rj,t)
inherit(P.cU,t)
inherit(P.bG,t)
inherit(P.dX,t)
inherit(P.dq,t)
inherit(P.dH,t)
inherit(P.nP,t)
inherit(P.k2,t)
inherit(P.qp,t)
inherit(P.bL,t)
inherit(P.lE,t)
inherit(P.p,t)
inherit(P.b2,t)
inherit(P.cQ,t)
inherit(P.dy,t)
inherit(P.dO,t)
inherit(P.x,t)
inherit(P.cc,t)
inherit(P.eG,t)
inherit(P.ks,t)
inherit(P.pv,t)
inherit(P.r5,t)
inherit(W.im,t)
inherit(W.jM,t)
inherit(W.ip,t)
inherit(W.q4,t)
inherit(W.kh,t)
inherit(P.lc,t)
inherit(W.i6,t)
inherit(W.bw,t)
inherit(W.jK,t)
inherit(W.ia,t)
inherit(W.rd,t)
inherit(W.iK,t)
inherit(W.e1,t)
inherit(W.rg,t)
inherit(W.r1,t)
inherit(W.kt,t)
inherit(P.ra,t)
inherit(P.pY,t)
inherit(P.qK,t)
inherit(P.qT,t)
inherit(P.qU,t)
inherit(P.bi,t)
inherit(P.dc,t)
inherit(T.fI,t)
inherit(T.de,t)
inherit(T.hi,t)
inherit(T.nR,t)
inherit(T.pU,t)
inherit(T.pV,t)
inherit(T.pW,t)
inherit(T.pT,t)
inherit(T.mp,t)
inherit(T.iP,t)
inherit(B.hj,t)
inherit(N.aa,t)
inherit(L.fJ,t)
inherit(A.jN,t)
inherit(O.c9,t)
inherit(T.hK,t)
inherit(M.fQ,t)
inherit(X.iA,t)
inherit(X.ik,t)
inherit(M.h7,t)
inherit(Z.iz,t)
inherit(E.nM,t)
inherit(E.M,t)
inherit(A.a4,t)
inherit(U.c,t)
inherit(Y.dN,t)
inherit(K.cH,t)
inherit(X.G,t)
inherit(G.a1,t)
inherit(A.fP,t)
inherit(B.ds,t)
inherit(B.df,t)
inherit(A.dW,t)
inherit(N.cx,t)
inherit(F.hu,t)
inherit(F.hv,t)
inherit(Q.jQ,t)
inherit(A.jU,t)
inherit(Y.dM,t)
inherit(O.d_,t)
inherit(D.cI,t)
inherit(B.dA,t)
inherit(Q.cT,t)
inherit(B.hZ,t)
inherit(G.hM,t)
inherit(Q.i,t)
t=J.f
inherit(J.mO,t)
inherit(J.mP,t)
inherit(J.ho,t)
inherit(J.em,t)
inherit(J.fg,t)
inherit(J.en,t)
inherit(H.fh,t)
inherit(H.et,t)
inherit(W.aE,t)
inherit(W.cL,t)
inherit(W.eU,t)
inherit(W.fV,t)
inherit(W.bK,t)
inherit(W.iQ,t)
inherit(W.ln,t)
inherit(W.eZ,t)
inherit(W.iq,t)
inherit(W.it,t)
inherit(W.lq,t)
inherit(W.iu,t)
inherit(W.iR,t)
inherit(W.iw,t)
inherit(W.ix,t)
inherit(W.h_,t)
inherit(W.Q,t)
inherit(W.iS,t)
inherit(W.m6,t)
inherit(W.m9,t)
inherit(W.cn,t)
inherit(W.mk,t)
inherit(W.iT,t)
inherit(W.hh,t)
inherit(W.e5,t)
inherit(W.nc,t)
inherit(W.jF,t)
inherit(W.cp,t)
inherit(W.j2,t)
inherit(W.nD,t)
inherit(W.nE,t)
inherit(W.jJ,t)
inherit(W.j3,t)
inherit(W.nW,t)
inherit(W.e2,t)
inherit(W.e6,t)
inherit(W.ch,t)
inherit(W.j4,t)
inherit(W.jX,t)
inherit(W.oq,t)
inherit(W.cr,t)
inherit(W.j5,t)
inherit(W.fp,t)
inherit(W.cj,t)
inherit(W.oC,t)
inherit(W.oG,t)
inherit(W.ck,t)
inherit(W.j6,t)
inherit(W.pl,t)
inherit(W.ct,t)
inherit(W.j7,t)
inherit(W.fs,t)
inherit(W.k5,t)
inherit(W.k6,t)
inherit(W.pB,t)
inherit(W.ft,t)
inherit(W.k7,t)
inherit(W.q8,t)
inherit(W.j8,t)
inherit(W.j9,t)
inherit(W.iU,t)
inherit(W.iV,t)
inherit(W.iW,t)
inherit(W.iX,t)
inherit(W.ro,t)
inherit(W.rp,t)
inherit(P.mv,t)
inherit(P.nL,t)
inherit(P.d7,t)
inherit(P.iY,t)
inherit(P.d8,t)
inherit(P.iZ,t)
inherit(P.o3,t)
inherit(P.j_,t)
inherit(P.db,t)
inherit(P.j0,t)
inherit(P.pH,t)
inherit(P.fL,t)
inherit(P.kJ,t)
inherit(P.oe,t)
inherit(P.rn,t)
inherit(P.j1,t)
t=J.ho
inherit(J.o1,t)
inherit(J.eF,t)
inherit(J.eo,t)
inherit(F.up,t)
inherit(R.he,t)
inherit(R.uG,t)
inherit(R.uF,t)
inherit(S.fk,t)
inherit(S.v8,t)
inherit(S.v9,t)
inherit(S.va,t)
inherit(S.tw,t)
inherit(S.tz,t)
inherit(S.tm,t)
inherit(S.vc,t)
inherit(S.vd,t)
inherit(S.lk,t)
inherit(S.uZ,t)
inherit(S.v_,t)
inherit(S.tf,t)
inherit(S.mf,t)
inherit(S.l1,t)
inherit(S.tk,t)
inherit(S.tj,t)
inherit(S.ty,t)
inherit(S.pi,t)
inherit(S.to,t)
inherit(S.hx,t)
inherit(S.uw,t)
inherit(S.uy,t)
inherit(S.uU,t)
inherit(S.uV,t)
inherit(S.uA,t)
inherit(S.uB,t)
inherit(S.tN,t)
inherit(S.tO,t)
inherit(S.uC,t)
inherit(S.uz,t)
inherit(S.th,t)
inherit(S.v5,t)
inherit(S.v6,t)
inherit(S.v4,t)
inherit(Z.uk,t)
inherit(Z.ug,t)
inherit(Z.uh,t)
inherit(J.ul,J.em)
t=J.fg
inherit(J.jB,t)
inherit(J.jA,t)
inherit(P.hs,P.fl)
t=P.hs
inherit(H.hV,t)
inherit(W.kj,t)
inherit(W.d2,t)
inherit(H.l6,H.hV)
t=P.n
inherit(H.r,t)
inherit(H.hw,t)
inherit(H.eH,t)
inherit(P.hm,t)
inherit(H.r8,t)
t=H.r
inherit(H.ep,t)
inherit(H.n3,t)
inherit(P.qF,t)
inherit(P.e4,t)
t=H.ep
inherit(H.p4,t)
inherit(H.es,t)
inherit(P.n5,t)
inherit(H.fY,H.hw)
t=P.jz
inherit(H.jE,t)
inherit(H.k9,t)
inherit(Q.pL,t)
t=H.eW
inherit(H.t8,t)
inherit(H.t9,t)
inherit(H.qJ,t)
inherit(H.ql,t)
inherit(H.mz,t)
inherit(H.mA,t)
inherit(H.qQ,t)
inherit(H.pn,t)
inherit(H.po,t)
inherit(H.ta,t)
inherit(H.rV,t)
inherit(H.rW,t)
inherit(H.rX,t)
inherit(H.rY,t)
inherit(H.rZ,t)
inherit(H.pa,t)
inherit(H.mS,t)
inherit(H.mR,t)
inherit(H.rR,t)
inherit(H.rS,t)
inherit(H.rT,t)
inherit(P.q1,t)
inherit(P.q0,t)
inherit(P.q2,t)
inherit(P.q3,t)
inherit(P.rr,t)
inherit(P.rs,t)
inherit(P.rC,t)
inherit(P.rG,t)
inherit(P.me,t)
inherit(P.md,t)
inherit(P.qq,t)
inherit(P.qy,t)
inherit(P.qu,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qs,t)
inherit(P.qx,t)
inherit(P.qr,t)
inherit(P.qB,t)
inherit(P.qC,t)
inherit(P.qA,t)
inherit(P.qz,t)
inherit(P.oK,t)
inherit(P.oI,t)
inherit(P.oJ,t)
inherit(P.oL,t)
inherit(P.oQ,t)
inherit(P.oO,t)
inherit(P.oP,t)
inherit(P.oR,t)
inherit(P.oU,t)
inherit(P.oV,t)
inherit(P.oS,t)
inherit(P.oT,t)
inherit(P.oW,t)
inherit(P.oX,t)
inherit(P.oM,t)
inherit(P.oN,t)
inherit(P.q7,t)
inherit(P.q6,t)
inherit(P.qS,t)
inherit(P.ru,t)
inherit(P.rt,t)
inherit(P.rv,t)
inherit(P.rB,t)
inherit(P.qW,t)
inherit(P.qX,t)
inherit(P.qY,t)
inherit(P.qH,t)
inherit(P.nj,t)
inherit(P.rl,t)
inherit(P.rk,t)
inherit(P.lu,t)
inherit(P.lv,t)
inherit(P.pA,t)
inherit(P.pw,t)
inherit(P.py,t)
inherit(P.pz,t)
inherit(P.rF,t)
inherit(P.ry,t)
inherit(P.rx,t)
inherit(P.rz,t)
inherit(P.rA,t)
inherit(W.qa,t)
inherit(W.rE,t)
inherit(W.mn,t)
inherit(W.mo,t)
inherit(W.qb,t)
inherit(W.qc,t)
inherit(W.qo,t)
inherit(W.nG,t)
inherit(W.nF,t)
inherit(W.r3,t)
inherit(W.r4,t)
inherit(W.rf,t)
inherit(W.rm,t)
inherit(P.rc,t)
inherit(P.pZ,t)
inherit(P.rI,t)
inherit(P.rJ,t)
inherit(P.ld,t)
inherit(P.rw,t)
inherit(P.kP,t)
inherit(P.kQ,t)
inherit(O.kX,t)
inherit(A.mN,t)
inherit(A.mM,t)
inherit(G.mK,t)
inherit(U.pP,t)
inherit(U.pQ,t)
inherit(A.rH,t)
inherit(N.t0,t)
inherit(N.t1,t)
inherit(N.t2,t)
inherit(A.n9,t)
inherit(A.n7,t)
inherit(A.n8,t)
inherit(A.na,t)
inherit(O.t5,t)
inherit(O.t6,t)
inherit(O.t4,t)
inherit(V.lB,t)
inherit(V.lA,t)
inherit(V.lz,t)
inherit(V.ly,t)
inherit(D.oF,t)
inherit(G.oo,t)
inherit(Q.pM,t)
t=H.q5
inherit(H.fy,t)
inherit(H.ic,t)
inherit(H.la,H.l9)
t=P.ee
inherit(H.jL,t)
inherit(H.mT,t)
inherit(H.pt,t)
inherit(H.l4,t)
inherit(H.oh,t)
inherit(P.fj,t)
inherit(P.cX,t)
inherit(P.R,t)
inherit(P.eE,t)
inherit(P.aN,t)
inherit(P.bJ,t)
inherit(P.lm,t)
t=H.pa
inherit(H.oE,t)
inherit(H.fN,t)
t=P.hm
inherit(H.q_,t)
inherit(T.fH,t)
t=H.et
inherit(H.nv,t)
inherit(H.jH,t)
t=H.jH
inherit(H.hC,t)
inherit(H.hD,t)
inherit(H.hE,H.hC)
inherit(H.hA,H.hE)
inherit(H.hF,H.hD)
inherit(H.hB,H.hF)
t=H.hA
inherit(H.nw,t)
inherit(H.nx,t)
t=H.hB
inherit(H.ny,t)
inherit(H.nz,t)
inherit(H.nA,t)
inherit(H.nB,t)
inherit(H.nC,t)
inherit(H.jI,t)
inherit(H.fi,t)
t=P.kf
inherit(P.dS,t)
inherit(P.kr,t)
t=P.ki
inherit(P.qe,t)
inherit(P.qg,t)
inherit(P.r6,P.qR)
t=P.dl
inherit(P.i3,t)
inherit(W.qm,t)
inherit(P.i4,P.dm)
inherit(P.qP,P.i3)
inherit(P.qV,P.rq)
inherit(P.kn,H.w)
inherit(P.or,P.os)
inherit(P.qI,P.or)
inherit(P.km,P.qI)
inherit(P.hW,P.ni)
t=P.fS
inherit(P.kU,t)
inherit(P.lx,t)
t=P.fU
inherit(P.kV,t)
inherit(P.pE,t)
inherit(P.pD,P.lx)
t=P.dq
inherit(P.V,t)
inherit(P.C,t)
t=P.cX
inherit(P.ez,t)
inherit(P.mw,t)
inherit(P.qd,P.ks)
t=W.aE
inherit(W.ae,t)
inherit(W.h0,t)
inherit(W.l8,t)
inherit(W.m5,t)
inherit(W.m7,t)
inherit(W.ma,t)
inherit(W.hg,t)
inherit(W.hz,t)
inherit(W.o5,t)
inherit(W.jW,t)
inherit(W.ot,t)
inherit(W.eI,t)
inherit(W.cq,t)
inherit(W.h1,t)
inherit(W.cS,t)
inherit(W.cJ,t)
inherit(W.h2,t)
inherit(W.pF,t)
inherit(W.pK,t)
inherit(W.ka,t)
inherit(W.pR,t)
inherit(W.r2,t)
inherit(P.lo,t)
inherit(P.hJ,t)
inherit(P.pp,t)
inherit(P.bF,t)
inherit(P.fM,t)
t=W.ae
inherit(W.c6,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.is,t)
inherit(W.fu,t)
inherit(W.qh,t)
t=W.c6
inherit(W.aK,t)
inherit(P.c4,t)
t=W.aK
inherit(W.ea,t)
inherit(W.kK,t)
inherit(W.hy,t)
inherit(W.kW,t)
inherit(W.eV,t)
inherit(W.fR,t)
inherit(W.lw,t)
inherit(W.m4,t)
inherit(W.iM,t)
inherit(W.mr,t)
inherit(W.ek,t)
inherit(W.mx,t)
inherit(W.mV,t)
inherit(W.mX,t)
inherit(W.hq,t)
inherit(W.nh,t)
inherit(W.nm,t)
inherit(W.nn,t)
inherit(W.no,t)
inherit(W.np,t)
inherit(W.nJ,t)
inherit(W.nK,t)
inherit(W.nO,t)
inherit(W.nQ,t)
inherit(W.nU,t)
inherit(W.o8,t)
inherit(W.fo,t)
inherit(W.jY,t)
inherit(W.ov,t)
inherit(W.oy,t)
inherit(W.hN,t)
inherit(W.p2,t)
inherit(W.k3,t)
inherit(W.p8,t)
inherit(W.p9,t)
inherit(W.hT,t)
inherit(W.pd,t)
inherit(W.qD,t)
inherit(W.eS,W.hy)
inherit(W.h3,W.h0)
inherit(W.kS,W.h3)
t=W.bK
inherit(W.le,t)
inherit(W.lf,t)
inherit(W.fW,t)
inherit(W.fX,t)
inherit(W.lg,t)
inherit(W.lh,t)
inherit(W.li,t)
inherit(W.eY,W.iQ)
inherit(W.q9,W.jM)
inherit(W.ja,W.iR)
inherit(W.iv,W.ja)
t=W.Q
inherit(W.lC,t)
inherit(W.oA,t)
inherit(W.oB,t)
inherit(W.cf,W.eU)
inherit(W.jb,W.iS)
inherit(W.f7,W.jb)
inherit(W.jc,W.iT)
inherit(W.f9,W.jc)
inherit(W.iO,W.f9)
inherit(W.e0,W.hg)
inherit(W.hp,W.e5)
inherit(W.nq,W.hz)
inherit(W.jm,W.j2)
inherit(W.jG,W.jm)
inherit(W.jn,W.j3)
inherit(W.hG,W.jn)
inherit(W.o0,W.e6)
inherit(W.jo,W.j4)
inherit(W.jS,W.jo)
inherit(W.ou,W.eI)
inherit(W.h4,W.h1)
inherit(W.k_,W.h4)
inherit(W.jp,W.j5)
inherit(W.k0,W.jp)
inherit(W.jq,W.j6)
inherit(W.pg,W.jq)
inherit(W.h5,W.h2)
inherit(W.ph,W.h5)
inherit(W.jr,W.j7)
inherit(W.k4,W.jr)
inherit(W.js,W.j8)
inherit(W.i0,W.js)
inherit(W.jt,W.j9)
inherit(W.kg,W.jt)
inherit(W.qi,W.iu)
inherit(W.jd,W.iU)
inherit(W.kl,W.jd)
inherit(W.je,W.iV)
inherit(W.i9,W.je)
inherit(W.jf,W.iW)
inherit(W.ko,W.jf)
inherit(W.jg,W.iX)
inherit(W.kq,W.jg)
inherit(W.i1,W.q4)
t=P.lc
inherit(W.qj,t)
inherit(P.kO,t)
inherit(W.i2,W.qm)
inherit(W.qn,P.oH)
inherit(W.re,W.ia)
inherit(P.rb,P.ra)
inherit(P.kd,P.pY)
inherit(P.bU,P.qU)
t=P.c4
inherit(P.co,t)
inherit(P.eb,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lH,t)
inherit(P.lI,t)
inherit(P.lJ,t)
inherit(P.lK,t)
inherit(P.lL,t)
inherit(P.lM,t)
inherit(P.lN,t)
inherit(P.lO,t)
inherit(P.lP,t)
inherit(P.lQ,t)
inherit(P.lR,t)
inherit(P.lS,t)
inherit(P.lT,t)
inherit(P.lU,t)
inherit(P.m8,t)
inherit(P.nk,t)
inherit(P.nl,t)
inherit(P.nZ,t)
inherit(P.hL,t)
inherit(P.p3,t)
inherit(P.p7,t)
inherit(P.pG,t)
inherit(P.i5,t)
inherit(P.qZ,t)
inherit(P.r_,t)
inherit(P.r0,t)
t=P.co
inherit(P.kH,t)
inherit(P.ms,t)
inherit(P.p5,t)
inherit(P.eD,t)
inherit(P.pC,t)
inherit(P.jh,P.iY)
inherit(P.mZ,P.jh)
inherit(P.ji,P.iZ)
inherit(P.nH,P.ji)
inherit(P.jj,P.j_)
inherit(P.p0,P.jj)
inherit(P.pf,P.eD)
inherit(P.jk,P.j0)
inherit(P.pq,P.jk)
t=P.bF
inherit(P.eT,t)
inherit(P.kY,t)
inherit(P.lb,t)
t=P.eT
inherit(P.eR,t)
inherit(P.jO,t)
inherit(P.jl,P.j1)
inherit(P.k1,P.jl)
t=B.hj
inherit(S.kI,t)
inherit(M.kN,t)
inherit(A.l7,t)
inherit(M.lj,t)
inherit(V.lr,t)
inherit(U.lV,t)
inherit(N.mU,t)
inherit(F.nt,t)
inherit(G.o4,t)
inherit(Q.og,t)
inherit(N.ox,t)
inherit(D.pb,t)
inherit(V.pc,t)
inherit(F.pS,t)
t=N.aa
inherit(T.lp,t)
inherit(R.o9,t)
t=T.lp
inherit(K.bW,t)
inherit(S.bH,t)
inherit(T.c3,t)
inherit(M.bC,t)
inherit(A.nT,A.jN)
inherit(L.b_,A.nT)
t=O.c9
inherit(O.dr,t)
inherit(O.iy,t)
inherit(O.eC,t)
t=O.dr
inherit(U.kR,t)
inherit(Y.ob,t)
inherit(V.mb,t)
inherit(Q.mu,t)
inherit(Q.o_,t)
inherit(M.oD,t)
inherit(B.pX,t)
t=U.kR
inherit(U.ne,t)
inherit(U.nN,t)
inherit(U.oY,O.iy)
t=U.oY
inherit(U.oZ,t)
inherit(U.p_,t)
t=T.hK
inherit(O.kT,t)
inherit(Y.mg,t)
inherit(Y.mh,t)
inherit(B.mj,t)
inherit(X.mq,t)
inherit(S.mW,t)
inherit(Z.nd,t)
inherit(S.nf,t)
inherit(U.ng,t)
inherit(E.ns,t)
inherit(V.nS,t)
inherit(N.o7,t)
inherit(N.of,t)
inherit(E.oj,t)
inherit(Y.ol,t)
inherit(L.om,t)
inherit(S.op,t)
inherit(Y.ow,t)
inherit(R.p6,t)
inherit(U.pj,t)
inherit(E.pJ,t)
inherit(M.pN,t)
t=O.eC
inherit(Y.pe,t)
inherit(Y.l2,t)
inherit(Y.nI,t)
inherit(U.pO,t)
t=L.fJ
inherit(T.kZ,t)
inherit(T.l0,t)
inherit(U.ls,t)
inherit(Z.lt,t)
inherit(T.mi,t)
inherit(X.ml,t)
inherit(Q.mY,t)
inherit(K.n_,t)
inherit(G.n0,t)
inherit(V.nr,t)
inherit(E.oa,t)
inherit(K.ok,t)
inherit(N.oz,t)
inherit(N.pk,t)
inherit(Q.pI,t)
t=S.bH
inherit(S.il,t)
inherit(S.mm,t)
inherit(E.iN,E.nM)
t=E.M
inherit(E.fK,t)
inherit(E.kM,t)
inherit(Q.o2,Q.mu)
inherit(U.a_,U.c)
t=R.o9
inherit(R.Y,t)
inherit(R.S,t)
inherit(R.a5,t)
inherit(R.bB,R.a5)
t=Y.dN
inherit(Y.ac,t)
inherit(Y.c1,t)
inherit(Y.U,t)
inherit(Y.io,t)
inherit(Y.bD,t)
inherit(Y.d1,t)
inherit(Y.l5,t)
inherit(Y.jP,t)
inherit(Y.iL,t)
inherit(Y.jR,t)
t=Y.c1
inherit(Y.d4,t)
inherit(Y.by,t)
inherit(U.ah,A.a4)
t=G.a1
inherit(G.aH,t)
inherit(G.bI,t)
inherit(G.d,t)
inherit(G.ag,G.bI)
t=D.cI
inherit(D.kc,t)
inherit(D.od,t)
t=Q.cT
inherit(Q.hY,t)
inherit(Q.hX,t)
inherit(Q.dR,Q.hY)
inherit(B.kb,Q.dR)
t=S.fk
inherit(S.uS,t)
inherit(S.l3,t)
inherit(S.n1,t)
inherit(S.uu,t)
inherit(S.tM,t)
t=S.l3
inherit(S.uI,t)
inherit(S.uD,t)
t=S.n1
inherit(S.tq,t)
inherit(S.tg,t)
t=S.lk
inherit(S.uq,t)
inherit(S.ll,t)
inherit(S.nV,S.ll)
inherit(S.uW,S.nV)
t=S.l1
inherit(S.uJ,t)
inherit(S.uX,t)
t=S.mf
inherit(S.v0,t)
inherit(S.uK,t)
inherit(S.tx,t)
inherit(S.uY,t)
t=S.pi
inherit(S.v3,t)
inherit(S.tn,t)
inherit(S.vb,t)
t=S.hx
inherit(S.uv,t)
inherit(S.ux,t)
inherit(S.uT,t)
inherit(Q.eJ,Q.hX)
inherit(Q.k8,Q.eJ)
mixin(H.hV,H.pu)
mixin(H.hC,P.aS)
mixin(H.hE,H.iJ)
mixin(H.hD,P.aS)
mixin(H.hF,H.iJ)
mixin(P.fl,P.aS)
mixin(P.hW,P.rh)
mixin(W.h0,P.aS)
mixin(W.h3,W.bw)
mixin(W.iQ,W.ip)
mixin(W.jM,W.ip)
mixin(W.iR,P.aS)
mixin(W.ja,W.bw)
mixin(W.iS,P.aS)
mixin(W.jb,W.bw)
mixin(W.iT,P.aS)
mixin(W.jc,W.bw)
mixin(W.j2,P.aS)
mixin(W.jm,W.bw)
mixin(W.j3,P.aS)
mixin(W.jn,W.bw)
mixin(W.j4,P.aS)
mixin(W.jo,W.bw)
mixin(W.h1,P.aS)
mixin(W.h4,W.bw)
mixin(W.j5,P.aS)
mixin(W.jp,W.bw)
mixin(W.j6,P.aS)
mixin(W.jq,W.bw)
mixin(W.h2,P.aS)
mixin(W.h5,W.bw)
mixin(W.j7,P.aS)
mixin(W.jr,W.bw)
mixin(W.j8,P.aS)
mixin(W.js,W.bw)
mixin(W.j9,P.aS)
mixin(W.jt,W.bw)
mixin(W.iU,P.aS)
mixin(W.jd,W.bw)
mixin(W.iV,P.aS)
mixin(W.je,W.bw)
mixin(W.iW,P.aS)
mixin(W.jf,W.bw)
mixin(W.iX,P.aS)
mixin(W.jg,W.bw)
mixin(P.iY,P.aS)
mixin(P.jh,W.bw)
mixin(P.iZ,P.aS)
mixin(P.ji,W.bw)
mixin(P.j_,P.aS)
mixin(P.jj,W.bw)
mixin(P.j0,P.aS)
mixin(P.jk,W.bw)
mixin(P.j1,P.aS)
mixin(P.jl,W.bw)
mixin(A.jN,P.ff)
mixin(Q.hY,P.aS)
mixin(Q.hX,P.ff)})();(function constants(){C.L=W.ea.prototype
C.v=W.eV.prototype
C.R=W.e0.prototype
C.S=J.f.prototype
C.b=J.em.prototype
C.f=J.jA.prototype
C.a=J.jB.prototype
C.d=J.fg.prototype
C.c=J.en.prototype
C.Z=J.eo.prototype
C.r=H.fi.prototype
C.a7=W.hG.prototype
C.J=J.o1.prototype
C.K=W.k3.prototype
C.u=J.eF.prototype
C.N=new P.kV(!1)
C.M=new P.kU(C.N)
C.i=new W.im()
C.O=new P.nP()
C.P=new P.qf()
C.Q=new P.qK()
C.e=new P.qV()
C.w=new W.rg()
C.o=new P.dH(0)
C.T=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.x=function(hooks) { return hooks; }
C.U=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.V=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.W=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.y=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Y=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.z=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
C.A=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a_=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.x])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.a0=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.B=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.a1=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.a2=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.a4=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.D=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.E=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.F=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.G=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.H=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.I=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.p=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.x])
C.q=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.x])
C.h=new F.hu(0,"LogLevel.ERROR")
C.m=new F.hu(1,"LogLevel.WARN")
C.a5=new F.hu(3,"LogLevel.VERBOSE")
C.a3=H.a(makeConstList([]),[P.x])
C.a6=new H.la(0,{},C.a3,[P.x,P.x])
C.a8=H.bZ("bi")
C.a9=H.bZ("Is")
C.t=H.bZ("It")
C.aa=H.bZ("Iu")
C.ab=H.bZ("Iv")
C.ac=H.bZ("Iw")
C.ad=H.bZ("Ix")
C.ae=H.bZ("Iy")
C.af=H.bZ("mQ")
C.ag=H.bZ("cQ")
C.ah=H.bZ("x")
C.ai=H.bZ("IC")
C.aj=H.bZ("ID")
C.ak=H.bZ("IE")
C.al=H.bZ("dc")
C.am=H.bZ("cU")
C.an=H.bZ("V")
C.ao=H.bZ("C")
C.ap=H.bZ("dq")
C.n=new P.pD(!1)})();(function staticFields(){$.x8="$cachedFunction"
$.x9="$cachedInvocation"
$.dG=0
$.fO=null
$.vM=null
$.vs=null
$.y7=null
$.yq=null
$.rK=null
$.rU=null
$.vt=null
$.fA=null
$.id=null
$.ie=null
$.vl=!1
$.an=C.e
$.w3=0
$.dY=null
$.tr=null
$.w1=null
$.w0=null
$.vY=null
$.vX=null
$.vW=null
$.vZ=null
$.vV=null
$.zk=null
$.zl=null
$.z8=null
$.z9=null
$.z7=null
$.zb=null
$.zg=null
$.zf=null
$.zm=null
$.zi=null
$.zc=null
$.ze=null
$.za=null
$.zd=null
$.zj=null
$.zh=null
$.b6="accent"
$.b8="aspect1"
$.b7="aspect2"
$.bh="shoe1"
$.bg="shoe2"
$.ba="cloak1"
$.bb="cloak2"
$.b9="cloak3"
$.bf="shirt1"
$.be="shirt2"
$.bd="pants1"
$.bc="pants2"
$.aj=1300
$.k=3
$.m=2
$.L=1
$.B=0.1
$.A0=1
$.A_=-1
$.tG=null
$.dZ=null
$.w5=null
$.eh=null
$.f5=null
$.iC=null
$.tA=null
$.lY=null
$.tI=null
$.iD=null
$.iB=null
$.w7=null
$.iI=null
$.h8=null
$.dL=null
$.w6=null
$.lX=null
$.m3=null
$.f3=null
$.zY=null
$.zV=null
$.zX=null
$.zZ=null
$.hd=null
$.f_=null
$.cz=null
$.d5=null
$.f2=null
$.m2=null
$.c8=null
$.c7=null
$.tC=null
$.hb=null
$.eg=null
$.zW=null
$.ha=null
$.cF=null
$.e_=null
$.iH=null
$.dg=null
$.f4=null
$.c0=null
$.m0=null
$.w4=null
$.aO=null
$.cE=null
$.cD=null
$.ce=null
$.m_=null
$.cl=null
$.dv=null
$.du=null
$.dt=null
$.dI=null
$.dJ=null
$.f1=null
$.d6=null
$.hc=null
$.lZ=null
$.lW=null
$.cY=null
$.cy=null
$.b3=null
$.f0=null
$.ei=null
$.m1=null
$.iE=null
$.h9=null
$.tE=null
$.cM=null
$.tH=null
$.tB=null
$.w9=null
$.ef=null
$.cC=null
$.dK=null
$.dh=null
$.f6=null
$.tD=null
$.tF=null
$.w8=null
$.iF=null
$.iG=null
$.ej=null
$.wa=!1
$.tK=null
$.A1=null
$.wc=null
$.we=null
$.Aa=null
$.wd=null
$.A8=null
$.A9=null
$.tJ=null
$.A5=null
$.A3=null
$.A4=null
$.A6=null
$.A7=null
$.Al=null
$.Ae=null
$.Af=null
$.Ag=null
$.Ah=null
$.Ai=null
$.Aj=null
$.Ak=null
$.An=null
$.Ao=null
$.Ap=null
$.Aq=null
$.Ar=null
$.As=null
$.Am=null
$.FJ="JACK"
$.FN="PM"
$.FK="JS"
$.FI="HP"
$.FS="YD"
$.FP="SI"
$.FQ="SU"
$.FL="ME"
$.FO="RB"
$.FG="GN"
$.x2="MP"
$.FE="AR"
$.FM="PE"
$.FF="DP"
$.FR="WV"
$.FH="HB"
$.o="PLAYER1TAG"
$.ey="PLAYER2TAG"
$.A="DENIZENTAG"
$.t="CONSORTTAG"
$.K="CONSORTSOUNDTAG"
$.aG="MCGUFFINTAG"
$.af="TAGPHYSICALMCGUFFIN"
$.ci="TAGWEAPON"
$.Gn=null
$.Gz=null
$.Gi=null
$.Gl=null
$.Gq=null
$.Gv=null
$.Gt=null
$.GC=null
$.GB=null
$.Gu=null
$.GE=null
$.Gp=null
$.GD=null
$.Gx=null
$.Gw=null
$.Gy=null
$.Gk=null
$.Gj=null
$.Gs=null
$.Gr=null
$.Go=null
$.GA=null
$.Gm=null
$.yc=!1
$.GJ=!1
$.xh=null
$.GQ=13
$.as=3
$.bN=2
$.aB=1
$.mL=0
$.H=1
$.a3=3
$.F=4
$.ud=6
$.ue=7
$.a9=8
$.v=9
$.q=10
$.wv=null
$.fe=null
$.u_=null
$.u9=null
$.u6=null
$.wl=null
$.tV=null
$.u5=null
$.hl=null
$.wt=null
$.wO=null
$.wo=null
$.wu=null
$.tW=null
$.u4=null
$.wQ=null
$.wS=null
$.tS=null
$.jw=null
$.ju=null
$.av=null
$.wI=null
$.tR=null
$.wD=null
$.fd=null
$.wn=null
$.wT=null
$.wP=null
$.wN=null
$.u2=null
$.mE=null
$.el=null
$.wR=null
$.mC=null
$.tX=null
$.fc=null
$.wL=null
$.dw=null
$.hk=null
$.uc=null
$.wM=null
$.ub=null
$.u7=null
$.u8=null
$.mG=null
$.jv=null
$.AT=null
$.wx=null
$.wC=null
$.wK=null
$.wJ=null
$.D=null
$.wr=null
$.mD=null
$.bQ=null
$.b0=null
$.bR=null
$.W=null
$.az=null
$.cb=null
$.J=null
$.O=null
$.au=null
$.aV=null
$.bX=null
$.bk=null
$.bt=null
$.cg=null
$.aR=null
$.bA=null
$.bS=null
$.Z=null
$.Fh=null
$.at=null
$.aY=null
$.aL=null
$.ad=null
$.ca=null
$.aJ=null
$.aq=null
$.bY=null
$.aQ=null
$.ak=null
$.br=null
$.c2=null
$.aC=null
$.bu=null
$.bs=null
$.a6=null
$.bM=null
$.a8=null
$.b5=null
$.bx=null
$.aI=null
$.b4=null
$.aw=null
$.b1=null
$.aF=null
$.X=null
$.ar=null
$.aA=null
$.aU=null
$.ap=null
$.am=null
$.a2=null
$.T=null
$.N=null
$.ai=null
$.aP=null
$.bl=null
$.aW=null
$.Cc=null
$.EU=null
$.Fs=null
$.BI=null
$.ER=null
$.Cd=null
$.wj=null
$.F5=null
$.Dd=null
$.C8=null
$.AN=null
$.DO=null
$.mI=null
$.wp=null
$.Ed=null
$.BF=null
$.CX=null
$.BD=null
$.tT=null
$.Bo=null
$.Cp=null
$.BN=null
$.D6=null
$.Fd=null
$.Ce=null
$.tU=null
$.D7=null
$.BL=null
$.Bu=null
$.wH=null
$.AG=null
$.wk=null
$.CQ=null
$.u0=null
$.Ds=null
$.Dm=null
$.AK=null
$.Bx=null
$.En=null
$.AM=null
$.EQ=null
$.CW=null
$.BU=null
$.E7=null
$.EK=null
$.tZ=null
$.Dh=null
$.E4=null
$.BM=null
$.Az=null
$.Fg=null
$.D_=null
$.Bt=null
$.F4=null
$.Dv=null
$.BA=null
$.EP=null
$.C3=null
$.Ev=null
$.Ew=null
$.AI=null
$.Do=null
$.BO=null
$.BY=null
$.Fw=null
$.jx=null
$.El=null
$.EN=null
$.mF=null
$.Bi=null
$.DF=null
$.DJ=null
$.AF=null
$.C2=null
$.EO=null
$.Du=null
$.F7=null
$.E9=null
$.DK=null
$.wB=null
$.Ez=null
$.Fm=null
$.ET=null
$.CD=null
$.DW=null
$.CE=null
$.Eo=null
$.Fk=null
$.D5=null
$.C_=null
$.Cm=null
$.B8=null
$.E5=null
$.Ck=null
$.Cr=null
$.BQ=null
$.Ey=null
$.fb=null
$.Dz=null
$.wA=null
$.CF=null
$.CC=null
$.Fp=null
$.Be=null
$.Ej=null
$.Ek=null
$.Ei=null
$.Eh=null
$.EG=null
$.Cs=null
$.Dp=null
$.EJ=null
$.Dg=null
$.DA=null
$.BJ=null
$.Fj=null
$.Dn=null
$.C5=null
$.C6=null
$.DI=null
$.Fv=null
$.CU=null
$.Fi=null
$.wF=null
$.Eu=null
$.D3=null
$.mJ=null
$.CO=null
$.DY=null
$.Bd=null
$.C9=null
$.Eq=null
$.Dq=null
$.Fc=null
$.wE=null
$.Dy=null
$.Bk=null
$.BG=null
$.DU=null
$.F_=null
$.Ep=null
$.mB=null
$.ua=null
$.EB=null
$.Fl=null
$.CB=null
$.AX=null
$.B5=null
$.EY=null
$.DC=null
$.De=null
$.DD=null
$.EV=null
$.CP=null
$.AJ=null
$.Cq=null
$.Dc=null
$.ED=null
$.Cj=null
$.Bc=null
$.Ef=null
$.Eg=null
$.Fa=null
$.Es=null
$.u3=null
$.wq=null
$.BB=null
$.ws=null
$.CJ=null
$.u1=null
$.E_=null
$.Dl=null
$.Eb=null
$.tY=null
$.mH=null
$.wz=null
$.BW=null
$.Co=null
$.wG=null
$.ww=null
$.Bw=null
$.F1=null
$.Bp=null
$.DM=null
$.CG=null
$.EI=null
$.Df=null
$.AU=null
$.CH=null
$.BT=null
$.DQ=null
$.CZ=null
$.Dk=null
$.D4=null
$.D8=null
$.Ee=null
$.Ea=null
$.AC=null
$.EZ=null
$.E2=null
$.BK=null
$.BP=null
$.Cn=null
$.EW=null
$.Cg=null
$.D0=null
$.B0=null
$.Ca=null
$.BS=null
$.DE=null
$.C0=null
$.Em=null
$.D2=null
$.wm=null
$.DZ=null
$.CI=null
$.Ch=null
$.AA=null
$.AH=null
$.DB=null
$.DL=null
$.CY=null
$.Cz=null
$.Ff=null
$.B3=null
$.Ci=null
$.D1=null
$.BH=null
$.EF=null
$.Bv=null
$.Er=null
$.B1=null
$.F0=null
$.Da=null
$.AW=null
$.E8=null
$.DV=null
$.BC=null
$.Ct=null
$.Bj=null
$.EX=null
$.CM=null
$.Fb=null
$.Bl=null
$.Cu=null
$.Bm=null
$.BE=null
$.E1=null
$.By=null
$.CN=null
$.Dr=null
$.Bf=null
$.EH=null
$.Fr=null
$.Ex=null
$.Di=null
$.EE=null
$.Dj=null
$.AP=null
$.AB=null
$.Db=null
$.AZ=null
$.Bn=null
$.AQ=null
$.AV=null
$.Dx=null
$.DR=null
$.F3=null
$.CK=null
$.Fq=null
$.E6=null
$.E3=null
$.CR=null
$.CL=null
$.Br=null
$.Cx=null
$.D9=null
$.DG=null
$.EA=null
$.AE=null
$.Fn=null
$.BZ=null
$.EL=null
$.BR=null
$.AO=null
$.Bg=null
$.B7=null
$.Fu=null
$.Bh=null
$.C1=null
$.Bq=null
$.F9=null
$.EC=null
$.F2=null
$.AD=null
$.Ec=null
$.CS=null
$.CV=null
$.Fe=null
$.EM=null
$.wy=null
$.C7=null
$.DT=null
$.Fo=null
$.Cb=null
$.CT=null
$.Bb=null
$.CA=null
$.Cy=null
$.Et=null
$.DS=null
$.Cv=null
$.B6=null
$.ES=null
$.DH=null
$.F6=null
$.Ft=null
$.AS=null
$.AR=null
$.B2=null
$.C4=null
$.E0=null
$.Bz=null
$.DX=null
$.BV=null
$.AL=null
$.B4=null
$.Dw=null
$.BX=null
$.DP=null
$.Ba=null
$.Cf=null
$.F8=null
$.AY=null
$.Cl=null
$.DN=null
$.B9=null
$.Cw=null
$.Dt=null
$.B_=null
$.Bs=null
$.xG=4
$.f8="OWNER"
$.wZ=!1
$.ut=null
$.ys=""
$.v1=null
$.GN=null
$.hR=null
$.eA=null
$.GM=null
$.hQ=null
$.eB=null
$.da=null
$.fq=null
$.hO=null
$.hP=null
$.dz=null
$.cs=null
$.xj=!1})();(function lazyInitializers(){lazy($,"vT","$get$vT",function(){return H.yi("_$dart_dartClosure")})
lazy($,"un","$get$un",function(){return H.yi("_$dart_js")})
lazy($,"wh","$get$wh",function(){return H.Ax()})
lazy($,"wi","$get$wi",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.w3
$.w3=t+1
t="expando$key$"+t}return new P.lE(null,t,[P.C])})
lazy($,"xn","$get$xn",function(){return H.dP(H.ps({
toString:function(){return"$receiver$"}}))})
lazy($,"xo","$get$xo",function(){return H.dP(H.ps({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xp","$get$xp",function(){return H.dP(H.ps(null))})
lazy($,"xq","$get$xq",function(){return H.dP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xu","$get$xu",function(){return H.dP(H.ps(void 0))})
lazy($,"xv","$get$xv",function(){return H.dP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xs","$get$xs",function(){return H.dP(H.xt(null))})
lazy($,"xr","$get$xr",function(){return H.dP(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xx","$get$xx",function(){return H.dP(H.xt(void 0))})
lazy($,"xw","$get$xw",function(){return H.dP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vg","$get$vg",function(){return P.GW()})
lazy($,"hf","$get$hf",function(){return P.H1(null,P.cQ)})
lazy($,"ig","$get$ig",function(){return[]})
lazy($,"xI","$get$xI",function(){return H.FT([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"y5","$get$y5",function(){return P.Hs()})
lazy($,"xL","$get$xL",function(){return P.jD(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vj","$get$vj",function(){return P.jC()})
lazy($,"vS","$get$vS",function(){return P.d9("^\\S+$",!0,!1)})
lazy($,"kL","$get$kL",function(){return P.cG(P.C,L.fJ)})
lazy($,"vO","$get$vO",function(){return P.d9("[\\/]",!0,!1)})
lazy($,"bP","$get$bP",function(){return H.a([],[S.bH])})
lazy($,"mc","$get$mc",function(){return P.cG(P.x,Z.iz)})
lazy($,"my","$get$my",function(){return P.cG(P.C,B.hj)})
lazy($,"wU","$get$wU",function(){return H.a([],[A.a4])})
lazy($,"x3","$get$x3",function(){return H.a([],[P.x])})
lazy($,"oi","$get$oi",function(){return P.cG(P.C,T.hK)})
lazy($,"al","$get$al",function(){return H.a([],[U.ah])})
lazy($,"xi","$get$xi",function(){return P.wX([0,new K.cH("Pixels -> Bytes",T.HI(),T.HH()),1,new K.cH("Pixels -> Packed bits",T.HG(),T.HF()),2,new K.cH("RLE 1 byte",V.tv(1),V.tu(1)),3,new K.cH("RLE 2 bytes",V.tv(2),V.tu(2)),4,new K.cH("RLE 3 bytes",V.tv(3),V.tu(3)),5,new K.cH("RLE packed 1 byte",V.tt(1),V.ts(1)),6,new K.cH("RLE packed 2 bytes",V.tt(2),V.ts(2)),7,new K.cH("RLE packed 3 bytes",V.tt(3),V.ts(3)),8,new K.cH("RLE dynamic",V.Ij(),V.Ii()),9,new K.cH("Exponential-Golomb pixels",F.HV(),F.HU()),10,new K.cH("Exponential-Golomb run RLE",F.HT(),F.HS()),11,new K.cH("Exponential-Golomb run/data RLE",F.HR(),F.HQ())],P.C,K.cH)})
lazy($,"b","$get$b",function(){return P.a0(null,null,null,G.a1)})
lazy($,"xE","$get$xE",function(){return P.d9("[\n\r]+",!0,!1)})
lazy($,"xF","$get$xF",function(){return P.d9("( *)(.*)",!0,!1)})
lazy($,"xD","$get$xD",function(){return P.d9("^s*//",!0,!1)})
lazy($,"xC","$get$xC",function(){return P.d9("//",!0,!1)})
lazy($,"cK","$get$cK",function(){return new F.hv(!1,!1,"WordListFileFormat")})
lazy($,"xH","$get$xH",function(){return new T.pT(null)})
lazy($,"vK","$get$vK",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"fD","$get$fD",function(){return H.a([new N.cx("Hair","Hair Gallery","hair",null,N.I3()),new N.cx("Horns","Horn Gallery","horns",null,N.I4()),new N.cx("All Fanart","All Fanart","fanArt",null,N.I2()),new N.cx("First Player","First Player Post Great Refactoring","firstPlayer","images/misc/fanArt/FirstPlayer/",null),new N.cx("GrimDark AB FanArt","GrimDark AB Gallery","grimAB","images/misc/fanArt/ABFanArt/",null),new N.cx("star.eyes' Memes FanArt","star.eyes' memes","stareyes","images/misc/fanArt/star.eyes/",null),new N.cx("Wranglers","Wranglers","Wranglers","images/misc/fanArt/Wranglers/",null),new N.cx("Misc FanArt","Miscellaneous Art","misc","images/misc/fanArt/miscFanArt/",null),new N.cx("Gif FanArt","Gif Gallery","gifs","images/misc/fanArt/gifs/",null),new N.cx("Octobermas FanArt","Octobermas!","octobermas","images/misc/fanArt/OctoberMas/",null),new N.cx("ShogunSim FanArt","ShogunSim Gallery","shogunsim","images/misc/fanArt/ShogunSim/",null),new N.cx("Shogun vs JR","Shogun vs JR: <a href = 'https://drive.google.com/drive/folders/1dUSRkaW4zZD6r21gywPvR_YHcL7gvzUn?usp=sharing'>https://drive.google.com/drive/folders/1dUSRkaW4zZD6r21gywPvR_YHcL7gvzUn?usp=sharing PUT YOUR NAME IN THE FILE NAME SO WE KNOW WHO MADE IT</a>","mascotCompetition","images/misc/fanArt/MascotCompetition/",null),new N.cx("oblivionSurfer's FanArt","oblivionSurfer's FanArt Gallery","oblivionSurfer","images/misc/fanArt/oblivionSurfer/",null)],[N.cx])})
lazy($,"ye","$get$ye",function(){return H.a(["png","gif","jpg","jpeg"],[P.x])})
lazy($,"yf","$get$yf",function(){return P.d9('<a href="([^?]*?)">',!0,!1)})
lazy($,"yd","$get$yd",function(){return P.d9("\\.("+C.b.aR($.$get$ye(),"|")+")$",!0,!1)})
lazy($,"yo","$get$yo",function(){return P.d9("([a-zA-Z_]+?)(\\d+?)\\.",!0,!1)})
lazy($,"yk","$get$yk",function(){return W.Ih("#images")})
lazy($,"rQ","$get$rQ",function(){return H.a([],[W.c6])})
lazy($,"cZ","$get$cZ",function(){return P.cG(P.x,Y.dM)})
lazy($,"x_","$get$x_",function(){return P.d9("[\\/]",!0,!1)})
lazy($,"us","$get$us",function(){return P.cG(P.x,W.fo)})
lazy($,"uE","$get$uE",function(){return A.fT(255,0,255,255)})
lazy($,"nY","$get$nY",function(){return new F.hv(!1,!1,"Path Utils")})
lazy($,"nX","$get$nX",function(){return P.cG(P.eG,P.C)})
lazy($,"cR","$get$cR",function(){return H.a([],[D.cI])})
lazy($,"hU","$get$hU",function(){return P.d9("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fr","$get$fr",function(){return P.d9("\\\\(?!\\\\)",!0,!1)})
lazy($,"vU","$get$vU",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",V:"double",dq:"num",x:"String",cU:"bool",cQ:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cU,args:[[P.p,E.iN]]},{func:1,v:true},{func:1,ret:P.dc,args:[P.bi,P.C,P.C,O.d_]},{func:1,ret:P.bi,args:[P.C,P.bi,P.bi,O.d_]},{func:1,v:true,args:[P.ab]},{func:1,ret:P.x,args:[P.C]},{func:1,ret:P.x,args:[P.x]},{func:1,ret:W.ae},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.cp,args:[P.C]},{func:1,ret:W.c6,args:[P.C]},{func:1,ret:W.ae,args:[P.C]},{func:1,args:[,]},{func:1,ret:P.cU,args:[W.c6,P.x,P.x,W.i6]},{func:1,v:true,args:[P.ab],opt:[P.dO]},{func:1,ret:[P.cm,P.cQ]},{func:1,ret:P.cU,args:[P.ab]},{func:1,ret:W.ch,args:[P.C]},{func:1,ret:W.cq,args:[P.C]},{func:1,ret:W.cr,args:[P.C]},{func:1,ret:W.fp,args:[P.C]},{func:1,ret:W.fs,args:[P.C]},{func:1,ret:W.ft,args:[P.C]},{func:1,ret:P.bU,args:[P.C]},{func:1,ret:W.bK,args:[P.C]},{func:1,ret:W.cn,args:[P.C]},{func:1,ret:P.x,args:[P.dy]},{func:1,ret:W.cj,args:[P.C]},{func:1,ret:W.ck,args:[P.C]},{func:1,ret:P.b2,args:[P.C]},{func:1,ret:P.C,args:[P.bG,P.bG]},{func:1,ret:W.fu,args:[P.C]},{func:1,ret:W.eZ,args:[P.C]},{func:1,v:true,args:[P.x]},{func:1,v:true,args:[,P.dO]},{func:1,ret:W.cf,args:[P.C]},{func:1,ret:W.ct,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,Clients:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,CredentialsContainer:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,FormData:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,StylePropertyMap:J.f,SyncManager:J.f,TextMetrics:J.f,UnderlyingSourceBase:J.f,URLSearchParams:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fh,ArrayBufferView:H.et,DataView:H.nv,Float32Array:H.nw,Float64Array:H.nx,Int16Array:H.ny,Int32Array:H.nz,Int8Array:H.nA,Uint16Array:H.nB,Uint32Array:H.nC,Uint8ClampedArray:H.jI,CanvasPixelArray:H.jI,Uint8Array:H.fi,HTMLBRElement:W.aK,HTMLCanvasElement:W.aK,HTMLContentElement:W.aK,HTMLDListElement:W.aK,HTMLDataListElement:W.aK,HTMLDetailsElement:W.aK,HTMLDialogElement:W.aK,HTMLDivElement:W.aK,HTMLHRElement:W.aK,HTMLHeadElement:W.aK,HTMLHeadingElement:W.aK,HTMLHtmlElement:W.aK,HTMLLabelElement:W.aK,HTMLLegendElement:W.aK,HTMLModElement:W.aK,HTMLOptGroupElement:W.aK,HTMLParagraphElement:W.aK,HTMLPictureElement:W.aK,HTMLPreElement:W.aK,HTMLQuoteElement:W.aK,HTMLShadowElement:W.aK,HTMLTableCaptionElement:W.aK,HTMLTableCellElement:W.aK,HTMLTableDataCellElement:W.aK,HTMLTableHeaderCellElement:W.aK,HTMLTableColElement:W.aK,HTMLTitleElement:W.aK,HTMLTrackElement:W.aK,HTMLUListElement:W.aK,HTMLUnknownElement:W.aK,HTMLDirectoryElement:W.aK,HTMLFontElement:W.aK,HTMLFrameElement:W.aK,HTMLMarqueeElement:W.aK,HTMLElement:W.aK,HTMLAnchorElement:W.ea,HTMLAreaElement:W.kK,HTMLAudioElement:W.eS,AudioTrack:W.cL,AudioTrackList:W.kS,HTMLBaseElement:W.kW,Blob:W.eU,HTMLBodyElement:W.eV,HTMLButtonElement:W.fR,CDATASection:W.ec,CharacterData:W.ec,Comment:W.ec,ProcessingInstruction:W.ec,Text:W.ec,CompositorWorker:W.l8,Credential:W.fV,FederatedCredential:W.fV,PasswordCredential:W.fV,CSSFontFaceRule:W.le,CSSImportRule:W.lf,CSSKeyframeRule:W.fW,MozCSSKeyframeRule:W.fW,WebKitCSSKeyframeRule:W.fW,CSSKeyframesRule:W.fX,MozCSSKeyframesRule:W.fX,WebKitCSSKeyframesRule:W.fX,CSSPageRule:W.lg,CSSCharsetRule:W.bK,CSSGroupingRule:W.bK,CSSMediaRule:W.bK,CSSNamespaceRule:W.bK,CSSSupportsRule:W.bK,CSSRule:W.bK,CSSStyleDeclaration:W.eY,MSStyleCSSProperties:W.eY,CSS2Properties:W.eY,CSSStyleRule:W.lh,CSSViewportRule:W.li,DataTransfer:W.ln,DataTransferItem:W.eZ,DataTransferItemList:W.iq,Document:W.ed,HTMLDocument:W.ed,XMLDocument:W.ed,DocumentFragment:W.is,ShadowRoot:W.is,DOMError:W.it,FileError:W.it,DOMException:W.lq,DOMRectReadOnly:W.iu,DOMStringList:W.iv,DOMStringMap:W.iw,DOMTokenList:W.ix,Element:W.c6,HTMLEmbedElement:W.lw,DirectoryEntry:W.h_,Entry:W.h_,FileEntry:W.h_,ErrorEvent:W.lC,AnimationEvent:W.Q,AnimationPlayerEvent:W.Q,ApplicationCacheErrorEvent:W.Q,AutocompleteErrorEvent:W.Q,BeforeInstallPromptEvent:W.Q,BeforeUnloadEvent:W.Q,BlobEvent:W.Q,ClipboardEvent:W.Q,CloseEvent:W.Q,CompositionEvent:W.Q,CustomEvent:W.Q,DeviceLightEvent:W.Q,DeviceMotionEvent:W.Q,DeviceOrientationEvent:W.Q,ExtendableEvent:W.Q,ExtendableMessageEvent:W.Q,FetchEvent:W.Q,FocusEvent:W.Q,FontFaceSetLoadEvent:W.Q,GamepadEvent:W.Q,GeofencingEvent:W.Q,HashChangeEvent:W.Q,InstallEvent:W.Q,KeyboardEvent:W.Q,MediaEncryptedEvent:W.Q,MediaKeyMessageEvent:W.Q,MediaQueryListEvent:W.Q,MediaStreamEvent:W.Q,MediaStreamTrackEvent:W.Q,MessageEvent:W.Q,MIDIConnectionEvent:W.Q,MIDIMessageEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,NotificationEvent:W.Q,PageTransitionEvent:W.Q,PointerEvent:W.Q,PopStateEvent:W.Q,PresentationConnectionAvailableEvent:W.Q,PresentationConnectionCloseEvent:W.Q,ProgressEvent:W.Q,PromiseRejectionEvent:W.Q,PushEvent:W.Q,RelatedEvent:W.Q,RTCDataChannelEvent:W.Q,RTCDTMFToneChangeEvent:W.Q,RTCIceCandidateEvent:W.Q,RTCPeerConnectionIceEvent:W.Q,SecurityPolicyViolationEvent:W.Q,ServicePortConnectEvent:W.Q,ServiceWorkerMessageEvent:W.Q,SpeechRecognitionEvent:W.Q,StorageEvent:W.Q,SyncEvent:W.Q,TextEvent:W.Q,TouchEvent:W.Q,TrackEvent:W.Q,TransitionEvent:W.Q,WebKitTransitionEvent:W.Q,UIEvent:W.Q,WheelEvent:W.Q,ResourceProgressEvent:W.Q,USBConnectionEvent:W.Q,IDBVersionChangeEvent:W.Q,SVGZoomEvent:W.Q,AudioProcessingEvent:W.Q,OfflineAudioCompletionEvent:W.Q,WebGLContextEvent:W.Q,Event:W.Q,InputEvent:W.Q,Animation:W.aE,ApplicationCache:W.aE,DOMApplicationCache:W.aE,OfflineResourceList:W.aE,BatteryManager:W.aE,CanvasCaptureMediaStreamTrack:W.aE,CrossOriginServiceWorkerClient:W.aE,EventSource:W.aE,MediaKeySession:W.aE,MediaQueryList:W.aE,MediaRecorder:W.aE,MediaSource:W.aE,MediaStream:W.aE,MediaStreamTrack:W.aE,MessagePort:W.aE,MIDIAccess:W.aE,NetworkInformation:W.aE,Notification:W.aE,Performance:W.aE,PermissionStatus:W.aE,PresentationAvailability:W.aE,PresentationReceiver:W.aE,PresentationRequest:W.aE,RTCDTMFSender:W.aE,RTCPeerConnection:W.aE,webkitRTCPeerConnection:W.aE,mozRTCPeerConnection:W.aE,ScreenOrientation:W.aE,ServicePortCollection:W.aE,ServiceWorkerContainer:W.aE,ServiceWorkerRegistration:W.aE,SpeechRecognition:W.aE,SpeechSynthesis:W.aE,SpeechSynthesisUtterance:W.aE,WorkerPerformance:W.aE,BluetoothDevice:W.aE,BluetoothRemoteGATTCharacteristic:W.aE,USB:W.aE,EventTarget:W.aE,HTMLFieldSetElement:W.m4,File:W.cf,FileList:W.f7,FileReader:W.m5,DOMFileSystem:W.m6,FileWriter:W.m7,FontFace:W.m9,FontFaceSet:W.ma,HTMLFormElement:W.iM,Gamepad:W.cn,History:W.mk,HTMLOptionsCollection:W.f9,HTMLCollection:W.f9,HTMLFormControlsCollection:W.iO,XMLHttpRequest:W.e0,XMLHttpRequestUpload:W.hg,XMLHttpRequestEventTarget:W.hg,HTMLIFrameElement:W.mr,ImageData:W.hh,HTMLImageElement:W.ek,HTMLInputElement:W.mx,HTMLKeygenElement:W.mV,HTMLLIElement:W.mX,CalcLength:W.hp,LengthValue:W.hp,SimpleLength:W.hp,HTMLLinkElement:W.hq,Location:W.nc,HTMLMapElement:W.nh,HTMLVideoElement:W.hy,HTMLMediaElement:W.hy,MediaList:W.jF,HTMLMenuElement:W.nm,HTMLMenuItemElement:W.nn,HTMLMetaElement:W.no,HTMLMeterElement:W.np,MIDIOutput:W.nq,MIDIInput:W.hz,MIDIPort:W.hz,MimeType:W.cp,MimeTypeArray:W.jG,Navigator:W.nD,NavigatorUserMediaError:W.nE,Node:W.ae,NodeIterator:W.jJ,NodeList:W.hG,RadioNodeList:W.hG,HTMLOListElement:W.nJ,HTMLObjectElement:W.nK,HTMLOptionElement:W.nO,HTMLOutputElement:W.nQ,HTMLParamElement:W.nU,Path2D:W.nW,PerformanceCompositeTiming:W.e2,PerformanceEntry:W.e2,PerformanceMark:W.e2,PerformanceMeasure:W.e2,PerformanceRenderTiming:W.e2,PerformanceResourceTiming:W.e2,Perspective:W.o0,Plugin:W.ch,PluginArray:W.jS,PresentationConnection:W.o5,HTMLProgressElement:W.o8,RTCDataChannel:W.jW,DataChannel:W.jW,RTCSessionDescription:W.jX,mozRTCSessionDescription:W.jX,HTMLScriptElement:W.fo,HTMLSelectElement:W.jY,ServicePort:W.oq,SharedWorker:W.ot,SharedWorkerGlobalScope:W.ou,HTMLSlotElement:W.ov,SourceBuffer:W.cq,SourceBufferList:W.k_,HTMLSourceElement:W.oy,HTMLSpanElement:W.hN,SpeechGrammar:W.cr,SpeechGrammarList:W.k0,SpeechRecognitionAlternative:W.fp,SpeechRecognitionError:W.oA,SpeechRecognitionResult:W.cj,SpeechSynthesisEvent:W.oB,SpeechSynthesisVoice:W.oC,Storage:W.oG,HTMLStyleElement:W.p2,CSSStyleSheet:W.ck,StyleSheet:W.ck,KeywordValue:W.e5,NumberValue:W.e5,PositionValue:W.e5,TransformValue:W.e5,StyleValue:W.e5,HTMLTableElement:W.k3,HTMLTableRowElement:W.p8,HTMLTableSectionElement:W.p9,HTMLTemplateElement:W.hT,HTMLTextAreaElement:W.pd,TextTrack:W.cS,TextTrackCue:W.cJ,VTTCue:W.cJ,TextTrackCueList:W.pg,TextTrackList:W.ph,TimeRanges:W.pl,Touch:W.ct,TouchList:W.k4,TrackDefault:W.fs,TrackDefaultList:W.k5,Matrix:W.e6,Rotation:W.e6,Skew:W.e6,Translation:W.e6,TransformComponent:W.e6,TreeWalker:W.k6,URL:W.pB,VideoTrackList:W.pF,VTTRegion:W.ft,VTTRegionList:W.k7,WebSocket:W.pK,Window:W.ka,DOMWindow:W.ka,Worker:W.pR,CompositorWorkerGlobalScope:W.eI,DedicatedWorkerGlobalScope:W.eI,ServiceWorkerGlobalScope:W.eI,WorkerGlobalScope:W.eI,Attr:W.fu,ClientRect:W.q8,ClientRectList:W.i0,DOMRectList:W.i0,CSSRuleList:W.kg,DocumentType:W.qh,DOMRect:W.qi,GamepadList:W.kl,HTMLFrameSetElement:W.qD,NamedNodeMap:W.i9,MozNamedAttrMap:W.i9,ServiceWorker:W.r2,SpeechRecognitionResultList:W.ko,StyleSheetList:W.kq,WorkerLocation:W.ro,WorkerNavigator:W.rp,IDBDatabase:P.lo,IDBIndex:P.mv,IDBObjectStore:P.nL,IDBOpenDBRequest:P.hJ,IDBVersionChangeRequest:P.hJ,IDBRequest:P.hJ,IDBTransaction:P.pp,SVGAElement:P.kH,SVGAnimateElement:P.eb,SVGAnimateMotionElement:P.eb,SVGAnimateTransformElement:P.eb,SVGAnimationElement:P.eb,SVGSetElement:P.eb,SVGFEBlendElement:P.lF,SVGFEColorMatrixElement:P.lG,SVGFEComponentTransferElement:P.lH,SVGFECompositeElement:P.lI,SVGFEConvolveMatrixElement:P.lJ,SVGFEDiffuseLightingElement:P.lK,SVGFEDisplacementMapElement:P.lL,SVGFEFloodElement:P.lM,SVGFEGaussianBlurElement:P.lN,SVGFEImageElement:P.lO,SVGFEMergeElement:P.lP,SVGFEMorphologyElement:P.lQ,SVGFEOffsetElement:P.lR,SVGFESpecularLightingElement:P.lS,SVGFETileElement:P.lT,SVGFETurbulenceElement:P.lU,SVGFilterElement:P.m8,SVGCircleElement:P.co,SVGClipPathElement:P.co,SVGDefsElement:P.co,SVGEllipseElement:P.co,SVGForeignObjectElement:P.co,SVGGElement:P.co,SVGGeometryElement:P.co,SVGLineElement:P.co,SVGPathElement:P.co,SVGPolygonElement:P.co,SVGPolylineElement:P.co,SVGRectElement:P.co,SVGSwitchElement:P.co,SVGGraphicsElement:P.co,SVGImageElement:P.ms,SVGLength:P.d7,SVGLengthList:P.mZ,SVGMarkerElement:P.nk,SVGMaskElement:P.nl,SVGNumber:P.d8,SVGNumberList:P.nH,SVGPatternElement:P.nZ,SVGPointList:P.o3,SVGScriptElement:P.hL,SVGStringList:P.p0,SVGStyleElement:P.p3,SVGDescElement:P.c4,SVGDiscardElement:P.c4,SVGFEDistantLightElement:P.c4,SVGFEFuncAElement:P.c4,SVGFEFuncBElement:P.c4,SVGFEFuncGElement:P.c4,SVGFEFuncRElement:P.c4,SVGFEMergeNodeElement:P.c4,SVGFEPointLightElement:P.c4,SVGFESpotLightElement:P.c4,SVGMetadataElement:P.c4,SVGStopElement:P.c4,SVGTitleElement:P.c4,SVGComponentTransferFunctionElement:P.c4,SVGElement:P.c4,SVGSVGElement:P.p5,SVGSymbolElement:P.p7,SVGTSpanElement:P.eD,SVGTextElement:P.eD,SVGTextPositioningElement:P.eD,SVGTextContentElement:P.eD,SVGTextPathElement:P.pf,SVGTransform:P.db,SVGTransformList:P.pq,SVGUseElement:P.pC,SVGViewElement:P.pG,SVGViewSpec:P.pH,SVGLinearGradientElement:P.i5,SVGRadialGradientElement:P.i5,SVGGradientElement:P.i5,SVGCursorElement:P.qZ,SVGFEDropShadowElement:P.r_,SVGMPathElement:P.r0,AudioBuffer:P.fL,AudioBufferSourceNode:P.eR,AudioContext:P.fM,webkitAudioContext:P.fM,OfflineAudioContext:P.fM,AnalyserNode:P.bF,RealtimeAnalyserNode:P.bF,AudioDestinationNode:P.bF,ChannelMergerNode:P.bF,AudioChannelMerger:P.bF,ChannelSplitterNode:P.bF,AudioChannelSplitter:P.bF,DelayNode:P.bF,DynamicsCompressorNode:P.bF,GainNode:P.bF,AudioGainNode:P.bF,IIRFilterNode:P.bF,MediaStreamAudioDestinationNode:P.bF,PannerNode:P.bF,AudioPannerNode:P.bF,webkitAudioPannerNode:P.bF,ScriptProcessorNode:P.bF,JavaScriptAudioNode:P.bF,StereoPannerNode:P.bF,WaveShaperNode:P.bF,AudioNode:P.bF,MediaElementAudioSourceNode:P.eT,MediaStreamAudioSourceNode:P.eT,AudioSourceNode:P.eT,BiquadFilterNode:P.kY,ConvolverNode:P.lb,OscillatorNode:P.jO,Oscillator:P.jO,WebGLActiveInfo:P.kJ,WebGL2RenderingContext:P.oe,WebGL2RenderingContextBase:P.rn,SQLResultSetRowList:P.k1})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,HTMLProgressElement:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jH.$nativeSuperclassTag="ArrayBufferView"
H.hC.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
H.hB.$nativeSuperclassTag="ArrayBufferView"
W.h0.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.yt(N.yl(),b)},[])
else (function(b){H.yt(N.yl(),b)})([])})})()
//# sourceMappingURL=image_browser.dart.js.map
