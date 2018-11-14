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
a[c]=function(){a[c]=function(){H.Is(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vj"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vj"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vj(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={ul:function ul(a){this.a=a},
rR:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
xe:function(a,b,c,d){var t=new H.pj(a,b,c,[d])
t.f4(a,b,c,d)
return t},
dA:function(a,b,c,d){if(!!J.aK(a).$isv)return new H.h_(a,b,[c,d])
return new H.hz(a,b,[c,d])},
jq:function(){return new P.dV("No element")},
wP:function(){return new P.dV("Too few elements")},
jN:function(a,b,c,d){if(c-b<=32)H.GY(a,b,c,d)
else H.GX(a,b,c,d)},
GY:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bd(a);t<=c;++t){r=s.B(a,t)
q=t
while(!0){if(!(q>b&&J.cy(d.$2(s.B(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.B(a,p))
q=p}s.i(a,q,r)}},
GX:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.aA(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.aA(a3+a4,2)
p=q-t
o=q+t
n=J.bd(a2)
m=n.B(a2,s)
l=n.B(a2,p)
k=n.B(a2,q)
j=n.B(a2,o)
i=n.B(a2,r)
if(J.cy(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cy(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cy(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cy(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cy(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cy(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cy(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cy(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cy(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.B(a2,a3))
n.i(a2,o,n.B(a2,a4))
g=a3+1
f=a4-1
if(J.ba(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.B(a2,e)
c=a5.$2(d,l)
b=J.aK(c)
if(b.a_(c,0))continue
if(b.al(c,0)){if(e!==g){n.i(a2,e,n.B(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.B(a2,f),l)
b=J.db(c)
if(b.aQ(c,0)){--f
continue}else{a=f-1
if(b.al(c,0)){n.i(a2,e,n.B(a2,g))
a0=g+1
n.i(a2,g,n.B(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.B(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.B(a2,e)
if(J.ef(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.B(a2,g))
n.i(a2,g,d)}++g}else if(J.cy(a5.$2(d,j),0))for(;!0;)if(J.cy(a5.$2(n.B(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ef(a5.$2(n.B(a2,f),l),0)){n.i(a2,e,n.B(a2,g))
a0=g+1
n.i(a2,g,n.B(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.B(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.B(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.B(a2,b))
n.i(a2,b,j)
H.jN(a2,a3,g-2,a5)
H.jN(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.ba(a5.$2(n.B(a2,g),l),0);)++g
for(;J.ba(a5.$2(n.B(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.B(a2,e)
if(J.ba(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.B(a2,g))
n.i(a2,g,d)}++g}else if(J.ba(a5.$2(d,j),0))for(;!0;)if(J.ba(a5.$2(n.B(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.ef(a5.$2(n.B(a2,f),l),0)){n.i(a2,e,n.B(a2,g))
a0=g+1
n.i(a2,g,n.B(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.B(a2,f))
n.i(a2,f,d)}f=a
break}}H.jN(a2,g,f,a5)}else H.jN(a2,g,f,a5)},
kW:function kW(a){this.a=a},
v:function v(){},
ey:function ey(){},
pj:function pj(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ez:function ez(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hz:function hz(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h_:function h_(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jv:function jv(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fk:function fk(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hU:function hU(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jX:function jX(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iB:function iB(){},
pK:function pK(){},
hQ:function hQ(){},
kg:function(a,b){var t=a.bE(b)
if(!u.globalState.d.cy)u.globalState.f.bL()
return t},
yg:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aK(s).$isr)throw H.m(P.dK("Arguments to main must be a List: "+H.D(s)))
u.globalState=new H.r0(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wd()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qx(P.ur(null,H.eT),0)
r=P.F
s.z=new H.q(0,null,null,null,null,null,0,[r,H.fA])
s.ch=new H.q(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.r_()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.AL,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.Hh)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.aj(null,null,null,r)
p=new H.fr(0,null,!1)
o=new H.fA(s,new H.q(0,null,null,null,null,null,0,[r,H.fr]),q,u.createNewIsolate(),p,new H.dL(H.t6()),new H.dL(H.t6()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
q.h(0,0)
o.dr(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fG(a,{func:1,args:[,]}))o.bE(new H.t7(t,a))
else if(H.fG(a,{func:1,args:[,,]}))o.bE(new H.t8(t,a))
else o.bE(a)
u.globalState.f.bL()},
Hh:function(a){var t=P.hv(["command","print","msg",a])
return new H.dH(!0,P.i0(null,P.F)).aM(t)},
AN:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.AO()
return},
AO:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.m(new P.aa("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.m(new P.aa('Cannot extract URI from "'+t+'"'))},
AL:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eR(!0,[]).ba(b.data)
s=J.bd(t)
switch(s.B(t,"command")){case"start":u.globalState.b=s.B(t,"id")
r=s.B(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.B(t,"args")
o=new H.eR(!0,[]).ba(s.B(t,"msg"))
n=s.B(t,"isSpawnUri")
m=s.B(t,"startPaused")
l=new H.eR(!0,[]).ba(s.B(t,"replyTo"))
s=u.globalState.a++
k=P.F
j=P.aj(null,null,null,k)
i=new H.fr(0,null,!1)
h=new H.fA(s,new H.q(0,null,null,null,null,null,0,[k,H.fr]),j,u.createNewIsolate(),i,new H.dL(H.t6()),new H.dL(H.t6()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
j.h(0,0)
h.dr(0,i)
u.globalState.f.a.aZ(0,new H.eT(h,new H.mx(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bL()
break
case"spawn-worker":break
case"message":if(s.B(t,"port")!=null)J.fJ(s.B(t,"port"),s.B(t,"msg"))
u.globalState.f.bL()
break
case"close":u.globalState.ch.az(0,$.$get$we().B(0,a))
a.terminate()
u.globalState.f.bL()
break
case"log":H.AK(s.B(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hv(["command","print","msg",t])
k=new H.dH(!0,P.i0(null,P.F)).aM(k)
s.toString
self.postMessage(k)}else P.fH(s.B(t,"msg"))
break
case"error":throw H.m(s.B(t,"msg"))}},
AK:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hv(["command","log","msg",a])
r=new H.dH(!0,P.i0(null,P.F)).aM(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cx(q)
t=H.cw(q)
s=P.lu(t)
throw H.m(s)}},
AM:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.x1=$.x1+("_"+s)
$.x2=$.x2+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fJ(f,["spawned",new H.fB(s,r),q,t.r])
r=new H.my(a,b,c,d,t)
if(e===!0){t.e4(q,q)
u.globalState.f.a.aZ(0,new H.eT(t,r,"start isolate"))}else r.$0()},
H3:function(a,b){var t=new H.pB(!0,!1,null)
t.f5(a,b)
return t},
HA:function(a){return new H.eR(!0,[]).ba(new H.dH(!1,P.i0(null,P.F)).aM(a))},
t7:function t7(a,b){this.a=a
this.b=b},
t8:function t8(a,b){this.a=a
this.b=b},
r0:function r0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
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
fA:function fA(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
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
qW:function qW(a,b){this.a=a
this.b=b},
qx:function qx(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(){},
mx:function mx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qk:function qk(){},
fB:function fB(b,a){this.b=b
this.a=a},
r2:function r2(a,b){this.a=a
this.b=b},
i4:function i4(b,c,a){this.b=b
this.c=c
this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
pB:function pB(a,b,c){this.a=a
this.b=b
this.c=c},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a,b){this.a=a
this.b=b},
dL:function dL(a){this.a=a},
dH:function dH(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
zQ:function(){throw H.m(new P.aa("Cannot modify unmodifiable Map"))},
I7:function(a){return u.types[a]},
ya:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aK(a).$isaT},
D:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cM(a)
if(typeof t!=="string")throw H.m(H.bt(a))
return t},
Gu:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.oj(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
eC:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uK:function(a,b){if(b==null)throw H.m(new P.bD(a,null,null))
return b.$1(a)},
dl:function(a,b,c){var t,s,r,q,p,o
H.y2(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uK(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uK(a,c)}if(b<2||b>36)throw H.m(P.bG(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.am(q,o)|32)>r)return H.uK(a,c)}return parseInt(a,b)},
x0:function(a,b){return b.$1(a)},
x3:function(a,b){var t,s
H.y2(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.x0(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.kt(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.x0(a,b)}return t},
o9:function(a){var t,s,r,q,p,o,n,m
t=J.aK(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.aK(a).$iseN){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.am(q,0)===36)q=C.c.aa(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.t0(H.kl(a),0,null),u.mangledGlobalNames)},
o8:function(a){return"Instance of '"+H.o9(a)+"'"},
G5:function(){if(!!self.location)return self.location.href
return},
x_:function(a){var t,s,r,q,p
t=J.cm(a)
if(typeof t!=="number")return t.eH()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Ga:function(a){var t,s,r,q
t=H.a([],[P.F])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bX)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bt(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.b8(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.m(H.bt(q))}return H.x_(t)},
x5:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bX)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.m(H.bt(q))
if(q<0)throw H.m(H.bt(q))
if(q>65535)return H.Ga(a)}return H.x_(a)},
Gb:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eH()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hK:function(a){var t
if(typeof a!=="number")return H.am(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.b8(t,10))>>>0,56320|t&1023)}}throw H.m(P.bG(a,0,1114111,null,null))},
Gc:function(a,b,c,d,e,f,g,h){var t,s
H.ee(a)
H.ee(b)
H.ee(c)
H.ee(d)
H.ee(e)
H.ee(f)
t=J.ta(b,1)
if(typeof a!=="number")return H.am(a)
if(0<=a&&a<100){a+=400
t=J.ta(t,4800)}s=h?Date.UTC(a,t,c,d,e,f,g):new Date(a,t,c,d,e,f,g).valueOf()
if(isNaN(s)||s<-864e13||s>864e13)return
return s},
cY:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
uM:function(a){return a.b?H.cY(a).getUTCFullYear()+0:H.cY(a).getFullYear()+0},
jJ:function(a){return a.b?H.cY(a).getUTCMonth()+1:H.cY(a).getMonth()+1},
jI:function(a){return a.b?H.cY(a).getUTCDate()+0:H.cY(a).getDate()+0},
G6:function(a){return a.b?H.cY(a).getUTCHours()+0:H.cY(a).getHours()+0},
G8:function(a){return a.b?H.cY(a).getUTCMinutes()+0:H.cY(a).getMinutes()+0},
G9:function(a){return a.b?H.cY(a).getUTCSeconds()+0:H.cY(a).getSeconds()+0},
G7:function(a){return a.b?H.cY(a).getUTCMilliseconds()+0:H.cY(a).getMilliseconds()+0},
uL:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bt(a))
return a[b]},
x4:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.m(H.bt(a))
a[b]=c},
am:function(a){throw H.m(H.bt(a))},
w:function(a,b){if(a==null)J.cm(a)
throw H.m(H.c5(a,b))},
c5:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.d1(!0,b,"index",null)
t=J.cm(a)
if(!(b<0)){if(typeof t!=="number")return H.am(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jK(b,"index",null)},
HZ:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.d1(!0,a,"start",null)
if(a<0||a>c)return new P.eG(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.d1(!0,b,"end",null)
if(b<a||b>c)return new P.eG(a,c,!0,b,"end","Invalid value")}return new P.d1(!0,b,"end",null)},
bt:function(a){return new P.d1(!0,a,null,null)},
ki:function(a){if(typeof a!=="number")throw H.m(H.bt(a))
return a},
ee:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(H.bt(a))
return a},
y2:function(a){if(typeof a!=="string")throw H.m(H.bt(a))
return a},
m:function(a){var t
if(a==null)a=new P.fo()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.yi})
t.name=""}else t.toString=H.yi
return t},
yi:function(){return J.cM(this.dartException)},
bb:function(a){throw H.m(a)},
bX:function(a){throw H.m(new P.bO(a))},
dX:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xm:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
un:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mU(a,s,t?null:b.receiver)},
cx:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.t9(a)
if(a==null)return
if(a instanceof H.h7)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.b8(r,16)&8191)===10)switch(q){case 438:return t.$1(H.un(H.D(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.D(s)+" (Error "+q+")"
return t.$1(new H.jB(p,null))}}if(a instanceof TypeError){o=$.$get$xg()
n=$.$get$xh()
m=$.$get$xi()
l=$.$get$xj()
k=$.$get$xn()
j=$.$get$xo()
i=$.$get$xl()
$.$get$xk()
h=$.$get$xq()
g=$.$get$xp()
f=o.aU(s)
if(f!=null)return t.$1(H.un(s,f))
else{f=n.aU(s)
if(f!=null){f.method="call"
return t.$1(H.un(s,f))}else{f=m.aU(s)
if(f==null){f=l.aU(s)
if(f==null){f=k.aU(s)
if(f==null){f=j.aU(s)
if(f==null){f=i.aU(s)
if(f==null){f=l.aU(s)
if(f==null){f=h.aU(s)
if(f==null){f=g.aU(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jB(s,f==null?null:f.method))}}return t.$1(new H.pJ(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jR()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.d1(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jR()
return a},
cw:function(a){var t
if(a instanceof H.h7)return a.b
if(a==null)return new H.kc(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kc(a,null)},
Ih:function(a){if(a==null||typeof a!='object')return J.dJ(a)
else return H.eC(a)},
y6:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
Ic:function(a,b,c,d,e,f,g){switch(c){case 0:return H.kg(b,new H.rW(a))
case 1:return H.kg(b,new H.rX(a,d))
case 2:return H.kg(b,new H.rY(a,d,e))
case 3:return H.kg(b,new H.rZ(a,d,e,f))
case 4:return H.kg(b,new H.t_(a,d,e,f,g))}throw H.m(P.lu("Unsupported number of arguments for wrapped closure"))},
dr:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.Ic)
a.$identity=t
return t},
zM:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aK(c).$isr){t.$reflectionInfo=c
r=H.Gu(t).r}else r=c
q=d?Object.create(new H.oU().constructor.prototype):Object.create(new H.fQ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dM
$.dM=J.e1(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.vM(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.I7,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.vH:H.th
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.m("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.vM(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zJ:function(a,b,c,d){var t=H.th
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
vM:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.zL(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zJ(s,!q,t,b)
if(s===0){q=$.dM
$.dM=J.e1(q,1)
o="self"+H.D(q)
q="return function(){var "+o+" = this."
p=$.fR
if(p==null){p=H.kN("self")
$.fR=p}return new Function(q+H.D(p)+";return "+o+"."+H.D(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dM
$.dM=J.e1(q,1)
n+=H.D(q)
q="return function("+n+"){return this."
p=$.fR
if(p==null){p=H.kN("self")
$.fR=p}return new Function(q+H.D(p)+"."+H.D(t)+"("+n+");}")()},
zK:function(a,b,c,d){var t,s
t=H.th
s=H.vH
switch(b?-1:a){case 0:throw H.m(new H.or("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
zL:function(a,b){var t,s,r,q,p,o,n,m
t=H.zs()
s=$.vG
if(s==null){s=H.kN("receiver")
$.vG=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.zK(q,!o,r,b)
if(q===1){s="return function(){return this."+H.D(t)+"."+H.D(r)+"(this."+H.D(s)+");"
o=$.dM
$.dM=J.e1(o,1)
return new Function(s+H.D(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.D(t)+"."+H.D(r)+"(this."+H.D(s)+", "+m+");"
o=$.dM
$.dM=J.e1(o,1)
return new Function(s+H.D(o)+"}")()},
vj:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aK(c).$isr){c.fixed$length=Array
t=c}else t=c
return H.zM(a,b,t,!!d,e,f)},
th:function(a){return a.a},
vH:function(a){return a.c},
zs:function(){var t=$.fR
if(t==null){t=H.kN("self")
$.fR=t}return t},
kN:function(a){var t,s,r,q,p
t=new H.fQ("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
Ik:function(a,b){var t=J.bd(b)
throw H.m(H.vJ(H.o9(a),t.O(b,3,t.gv(b))))},
kn:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aK(a)[b]
else t=!0
if(t)return a
H.Ik(a,b)},
y5:function(a){var t=J.aK(a)
return"$S" in t?t.$S():null},
fG:function(a,b){var t
if(a==null)return!1
t=H.y5(a)
return t==null?!1:H.vm(t,b)},
vJ:function(a,b){return new H.kS("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Is:function(a){throw H.m(new P.lb(a))},
t6:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
y7:function(a){return u.getIsolateTag(a)},
c0:function(a){return new H.dY(a,null)},
a:function(a,b){a.$ti=b
return a},
kl:function(a){if(a==null)return
return a.$ti},
y8:function(a,b){return H.vp(a["$as"+H.D(b)],H.kl(a))},
aU:function(a,b,c){var t=H.y8(a,b)
return t==null?null:t[c]},
O:function(a,b){var t=H.kl(a)
return t==null?null:t[b]},
dI:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.t0(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.D(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dI(t,b)
return H.HF(a,b)}return"unknown-reified-type"},
HF:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dI(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dI(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dI(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.I5(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dI(l[j],b)+(" "+H.D(j))}q+="}"}return"("+q+") => "+t},
t0:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ca("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.R=p+", "
o=a[s]
if(o!=null)q=!1
p=t.R+=H.dI(o,c)}return q?"":"<"+t.H(0)+">"},
km:function(a){var t,s
if(a instanceof H.f0){t=H.y5(a)
if(t!=null)return H.dI(t,null)}s=J.aK(a).constructor.builtin$cls
if(a==null)return s
return s+H.t0(a.$ti,0,null)},
vp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e0:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kl(a)
s=J.aK(a)
if(s[b]==null)return!1
return H.y0(H.vp(s[d],t),c)},
Ir:function(a,b,c,d){if(a==null)return a
if(H.e0(a,b,c,d))return a
throw H.m(H.vJ(H.o9(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.t0(c,0,null),u.mangledGlobalNames)))},
y0:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d0(a[s],b[s]))return!1
return!0},
eV:function(a,b,c){return a.apply(b,H.y8(b,c))},
HV:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ap"||b.builtin$cls==="d6"
if(b==null)return!0
t=H.kl(a)
a=J.aK(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vm(r.apply(a,null),b)}return H.d0(s,b)},
d0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d6")return!0
if('func' in b)return H.vm(a,b)
if('func' in a)return b.builtin$cls==="Iy"||b.builtin$cls==="ap"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.dI(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.y0(H.vp(o,t),r)},
y_:function(a,b,c){var t,s,r,q,p
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
HM:function(a,b){var t,s,r,q,p,o
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
vm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(n===m){if(!H.y_(r,q,!1))return!1
if(!H.y_(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d0(i,h)||H.d0(h,i)))return!1}}return H.HM(a.named,b.named)},
IK:function(a){var t=$.vk
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
IJ:function(a){return H.eC(a)},
II:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Id:function(a){var t,s,r,q,p,o
t=$.vk.$1(a)
s=$.rO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rV[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xZ.$2(a,t)
if(t!=null){s=$.rO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rV[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.vn(r)
$.rO[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rV[t]=r
return r}if(p==="-"){o=H.vn(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yc(a,r)
if(p==="*")throw H.m(new P.eM(t))
if(u.leafTags[t]===true){o=H.vn(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yc(a,r)},
yc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.t2(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
vn:function(a){return J.t2(a,!1,null,!!a.$isaT)},
If:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.t2(t,!1,null,!!t.$isaT)
else return J.t2(t,c,null,null)},
Ia:function(){if(!0===$.vl)return
$.vl=!0
H.Ib()},
Ib:function(){var t,s,r,q,p,o,n,m
$.rO=Object.create(null)
$.rV=Object.create(null)
H.I9()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yd.$1(p)
if(o!=null){n=H.If(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
I9:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.fF(C.P,H.fF(C.Q,H.fF(C.u,H.fF(C.u,H.fF(C.S,H.fF(C.R,H.fF(C.T(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vk=new H.rS(p)
$.xZ=new H.rT(o)
$.yd=new H.rU(n)},
fF:function(a,b){return a(b)||b},
ui:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.m(new P.bD("Illegal RegExp pattern ("+String(q)+")",a,null))},
Ip:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
yh:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hr){q=b.gdO()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bb(H.bt(b))
throw H.m("String.replaceAll(Pattern) UNIMPLEMENTED")}},
HK:function(a){return a},
Iq:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.b9(0,a),t=new H.k1(t.a,t.b,t.c,null),s=0,r="";t.L();){q=t.d
p=q.b
o=p.index
r=r+H.D(H.xQ().$1(C.c.O(a,s,o)))+H.D(c.$1(q))
s=o+p[0].length}t=r+H.D(H.xQ().$1(C.c.aa(a,s)))
return t.charCodeAt(0)==0?t:t},
kZ:function kZ(){},
l_:function l_(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
oj:function oj(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pH:function pH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jB:function jB(a,b){this.a=a
this.b=b},
mU:function mU(a,b,c){this.a=a
this.b=b
this.c=c},
pJ:function pJ(a){this.a=a},
h7:function h7(a,b){this.a=a
this.b=b},
t9:function t9(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
rW:function rW(a){this.a=a},
rX:function rX(a,b){this.a=a
this.b=b},
rY:function rY(a,b,c){this.a=a
this.b=b
this.c=c},
rZ:function rZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t_:function t_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(){},
po:function po(){},
oU:function oU(){},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kS:function kS(a){this.a=a},
or:function or(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
q:function q(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mT:function mT(a){this.a=a},
mS:function mS(a){this.a=a},
n3:function n3(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n4:function n4(a,$ti){this.a=a
this.$ti=$ti},
n5:function n5(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rS:function rS(a){this.a=a},
rT:function rT(a){this.a=a},
rU:function rU(a){this.a=a},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a,b){this.a=a
this.b=b},
qf:function qf(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function ri(a,b,c){this.a=a
this.b=b
this.c=c},
rj:function rj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.m(P.dK("Invalid length "+H.D(a)))
return a},
xN:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.dK("Invalid view offsetInBytes "+H.D(b)))},
xP:function(a){return a},
G3:function(a){return new Int8Array(H.xP(a))},
cR:function(a,b,c){H.xN(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Hz:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aQ()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.m(H.HZ(a,b,c))
return b},
fm:function fm(){},
eB:function eB(){},
nz:function nz(){},
jy:function jy(){},
hD:function hD(){},
hF:function hF(){},
hH:function hH(){},
hE:function hE(){},
hG:function hG(){},
hI:function hI(){},
nA:function nA(){},
nB:function nB(){},
nC:function nC(){},
nD:function nD(){},
nE:function nE(){},
nF:function nF(){},
nG:function nG(){},
jz:function jz(){},
fn:function fn(){},
I5:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
Ij:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aK:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jt.prototype
return J.js.prototype}if(typeof a=="string")return J.ew.prototype
if(a==null)return J.mQ.prototype
if(typeof a=="boolean")return J.mP.prototype
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ap)return a
return J.rP(a)},
t2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rP:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vl==null){H.Ia()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.m(new P.eM("Return interceptor for "+H.D(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$um()]
if(p!=null)return p
p=H.Id(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$um(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
wQ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
FI:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.am(a,b)
if(s!==32&&s!==13&&!J.wQ(s))break;++b}return b},
uh:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.ad(a,t)
if(s!==32&&s!==13&&!J.wQ(s))break}return b},
bd:function(a){if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ap)return a
return J.rP(a)},
ds:function(a){if(a==null)return a
if(a.constructor==Array)return J.ev.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ap)return a
return J.rP(a)},
db:function(a){if(typeof a=="number")return J.fj.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.eN.prototype
return a},
kk:function(a){if(typeof a=="number")return J.fj.prototype
if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.eN.prototype
return a},
dc:function(a){if(typeof a=="string")return J.ew.prototype
if(a==null)return a
if(!(a instanceof P.ap))return J.eN.prototype
return a},
bK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ex.prototype
return a}if(a instanceof P.ap)return a
return J.rP(a)},
e1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kk(a).a3(a,b)},
ba:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aK(a).a_(a,b)},
vq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.db(a).aH(a,b)},
cy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.db(a).aQ(a,b)},
ef:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.db(a).al(a,b)},
vr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kk(a).aB(a,b)},
ta:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.db(a).a9(a,b)},
i8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ya(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).B(a,b)},
kp:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ya(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ds(a).i(a,b,c)},
yj:function(a,b){return J.ds(a).h(a,b)},
yk:function(a,b,c,d){return J.bK(a).h0(a,b,c,d)},
yl:function(a,b){return J.dc(a).b9(a,b)},
e2:function(a,b){return J.bK(a).h2(a,b)},
vs:function(a){return J.bK(a).h4(a)},
ym:function(a,b,c){return J.db(a).as(a,b,c)},
yn:function(a,b){return J.kk(a).aJ(a,b)},
yo:function(a,b){return J.bK(a).aO(a,b)},
yp:function(a,b){return J.bd(a).ax(a,b)},
kq:function(a,b,c){return J.bd(a).e8(a,b,c)},
yq:function(a,b){return J.bK(a).he(a,b)},
vt:function(a,b){return J.ds(a).a0(a,b)},
yr:function(a,b,c,d){return J.ds(a).c8(a,b,c,d)},
kr:function(a){return J.db(a).ay(a)},
ys:function(a,b){return J.ds(a).aq(a,b)},
vu:function(a){return J.bK(a).ge6(a)},
yt:function(a){return J.bK(a).gbD(a)},
fI:function(a){return J.bK(a).gaG(a)},
yu:function(a){return J.bK(a).gcS(a)},
dJ:function(a){return J.aK(a).gan(a)},
tb:function(a){return J.bd(a).gac(a)},
vv:function(a){return J.bK(a).gae(a)},
dd:function(a){return J.ds(a).gaf(a)},
cm:function(a){return J.bd(a).gv(a)},
yv:function(a){return J.bK(a).gi2(a)},
yw:function(a){return J.bK(a).gi3(a)},
vw:function(a){return J.aK(a).gar(a)},
tc:function(a){return J.bK(a).gaY(a)},
yx:function(a,b){return J.bK(a).bO(a,b)},
yy:function(a,b){return J.bd(a).bt(a,b)},
vx:function(a,b,c,d,e){return J.bK(a).cU(a,b,c,d,e)},
vy:function(a,b){return J.ds(a).aK(a,b)},
yz:function(a,b,c){return J.dc(a).en(a,b,c)},
vz:function(a,b){return J.bK(a).hP(a,b)},
yA:function(a,b,c,d){return J.bK(a).i_(a,b,c,d)},
ks:function(a,b,c){return J.dc(a).d6(a,b,c)},
yB:function(a,b,c){return J.dc(a).i1(a,b,c)},
fJ:function(a,b){return J.bK(a).bj(a,b)},
vA:function(a,b){return J.bK(a).sbD(a,b)},
yC:function(a,b){return J.ds(a).dg(a,b)},
e3:function(a,b){return J.dc(a).eT(a,b)},
yD:function(a,b){return J.dc(a).aa(a,b)},
vB:function(a){return J.db(a).l(a)},
yE:function(a){return J.ds(a).aD(a)},
yF:function(a,b){return J.db(a).bu(a,b)},
cM:function(a){return J.aK(a).H(a)},
yG:function(a){return J.dc(a).i8(a)},
kt:function(a){return J.dc(a).bv(a)},
yH:function(a){return J.dc(a).eA(a)},
k:function k(){},
mP:function mP(){},
mQ:function mQ(){},
hs:function hs(){},
o2:function o2(){},
eN:function eN(){},
ex:function ex(){},
ev:function ev($ti){this.$ti=$ti},
uk:function uk($ti){this.$ti=$ti},
i9:function i9(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fj:function fj(){},
jt:function jt(){},
js:function js(){},
ew:function ew(){}},P={
H8:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.HN()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dr(new P.qh(t),1)).observe(s,{childList:true})
return new P.qg(t,s,r)}else if(self.setImmediate!=null)return P.HO()
return P.HP()},
H9:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dr(new P.qi(a),0))},
Ha:function(a){++u.globalState.f.b
self.setImmediate(H.dr(new P.qj(a),0))},
Hb:function(a){P.v4(C.p,a)},
bn:function(a,b){P.xL(null,a)
return b.ght()},
cl:function(a,b){P.xL(a,b)},
bm:function(a,b){J.yo(b,a)},
bl:function(a,b){b.cO(H.cx(a),H.cw(a))},
xL:function(a,b){var t,s,r,q
t=new P.rx(b)
s=new P.ry(b)
r=J.aK(a)
if(!!r.$isbk)a.cI(t,s)
else if(!!r.$iscG)a.cf(t,s)
else{q=new P.bk(0,$.aE,null,[null])
q.a=4
q.c=a
q.cI(t,null)}},
bo:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aE.toString
return new P.rI(t)},
xR:function(a,b){if(H.fG(a,{func:1,args:[P.d6,P.d6]})){b.toString
return a}else{b.toString
return a}},
As:function(a,b){var t=new P.bk(0,$.aE,null,[b])
P.xf(C.p,new P.rK(a,t))
return t},
wb:function(a,b,c){var t
if(a==null)a=new P.fo()
t=$.aE
if(t!==C.e)t.toString
t=new P.bk(0,t,null,[c])
t.dt(a,b)
return t},
At:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bk(0,$.aE,null,[P.r])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.m8(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bX)(a),++l){q=a[l]
p=t.b
q.cf(new P.m7(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bk(0,$.aE,null,[null])
m.ds(C.X)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cx(j)
n=H.cw(j)
if(t.b===0||!1)return P.wb(o,n,null)
else{t.c=o
t.d=n}}return s},
bi:function(a){return new P.ke(new P.bk(0,$.aE,null,[a]),[a])},
xO:function(a,b,c){$.aE.toString
a.aC(b,c)},
He:function(a,b){var t=new P.bk(0,$.aE,null,[b])
t.a=4
t.c=a
return t},
xD:function(a,b){var t,s,r
b.a=1
try{a.cf(new P.qH(b),new P.qI(b))}catch(r){t=H.cx(r)
s=H.cw(r)
P.ye(new P.qJ(b,t,s))}},
qG:function(a,b){var t,s,r
for(;a.gfI();)a=a.c
t=a.gcA()
s=b.c
if(t){b.c=null
r=b.bY(s)
b.a=a.a
b.c=a.c
P.fz(b,r)}else{b.a=2
b.c=a
a.dS(s)}},
fz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fI(p)
n=p.gaX()
s.toString
P.kh(null,null,s,o,n)}return}for(;b.gcD()!=null;b=m){m=b.a
b.a=null
P.fz(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ged()||b.gec()){k=b.gfZ()
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
n=p.gaX()
s.toString
P.kh(null,null,s,o,n)
return}j=$.aE
if(j==null?k!=null:j!==k)$.aE=k
else j=null
if(b.gec())new P.qO(t,r,q,b).$0()
else if(s){if(b.ged())new P.qN(r,b,l).$0()}else if(b.ghA())new P.qM(t,r,b).$0()
if(j!=null)$.aE=j
s=r.b
if(!!J.aK(s).$iscG){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bY(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qG(s,i)
return}}i=b.b
b=i.bX()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
HH:function(){var t,s
for(;t=$.fD,t!=null;){$.i6=null
s=t.b
$.fD=s
if(s==null)$.i5=null
t.a.$0()}},
HJ:function(){$.vh=!0
try{P.HH()}finally{$.i6=null
$.vh=!1
if($.fD!=null)$.$get$vd().$1(P.y1())}},
xY:function(a){var t=new P.k2(a,null)
if($.fD==null){$.i5=t
$.fD=t
if(!$.vh)$.$get$vd().$1(P.y1())}else{$.i5.b=t
$.i5=t}},
HI:function(a){var t,s,r
t=$.fD
if(t==null){P.xY(a)
$.i6=$.i5
return}s=new P.k2(a,null)
r=$.i6
if(r==null){s.b=t
$.i6=s
$.fD=s}else{s.b=r.b
r.b=s
$.i6=s
if(s.b==null)$.i5=s}},
ye:function(a){var t=$.aE
if(C.e===t){P.fE(null,null,C.e,a)
return}t.toString
P.fE(null,null,t,t.cN(a,!0))},
IE:function(a,b){return new P.rh(null,a,!1,[b])},
xV:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cx(o)
s=H.cw(o)
$.aE.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fI(r)
q=n
p=r.gaX()
c.$2(q,p)}}},
Hy:function(a,b,c,d){var t=a.c3(0)
if(!!J.aK(t).$iscG&&t!==$.$get$hh())t.cj(new P.rA(b,c,d))
else b.aC(c,d)},
xM:function(a,b){return new P.rz(a,b)},
vg:function(a,b,c){var t=a.c3(0)
if(!!J.aK(t).$iscG&&t!==$.$get$hh())t.cj(new P.rB(b,c))
else b.aS(c)},
Hd:function(a,b,c,d,e,f,g){var t,s
t=$.aE
s=e?1:0
s=new P.hZ(a,null,null,null,null,t,s,null,null,[f,g])
s.f8(b,c,d,e,g)
s.fb(a,b,c,d,e,f,g)
return s},
Hx:function(a,b,c){$.aE.toString
a.bR(b,c)},
xf:function(a,b){var t=$.aE
if(t===C.e){t.toString
return P.v4(a,b)}return P.v4(a,t.cN(b,!0))},
v4:function(a,b){var t=C.a.aA(a.a,1000)
return H.H3(t<0?0:t,b)},
kh:function(a,b,c,d,e){var t={}
t.a=d
P.HI(new P.rH(t,e))},
xS:function(a,b,c,d){var t,s
s=$.aE
if(s===c)return d.$0()
$.aE=c
t=s
try{s=d.$0()
return s}finally{$.aE=t}},
xU:function(a,b,c,d,e){var t,s
s=$.aE
if(s===c)return d.$1(e)
$.aE=c
t=s
try{s=d.$1(e)
return s}finally{$.aE=t}},
xT:function(a,b,c,d,e,f){var t,s
s=$.aE
if(s===c)return d.$2(e,f)
$.aE=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aE=t}},
fE:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cN(d,!(!t||!1))
P.xY(d)},
qh:function qh(a){this.a=a},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qi:function qi(a){this.a=a},
qj:function qj(a){this.a=a},
rx:function rx(a){this.a=a},
ry:function ry(a){this.a=a},
rI:function rI(a){this.a=a},
cG:function cG(){},
rK:function rK(a,b){this.a=a
this.b=b},
m8:function m8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m7:function m7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f1:function f1(){},
k3:function k3(){},
e_:function e_(a,$ti){this.a=a
this.$ti=$ti},
ke:function ke(a,$ti){this.a=a
this.$ti=$ti},
k7:function k7(a,b,c,d,e,$ti){var _=this
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
qD:function qD(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
qH:function qH(a){this.a=a},
qI:function qI(a){this.a=a},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a,b){this.a=a
this.b=b},
qK:function qK(a,b){this.a=a
this.b=b},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qP:function qP(a){this.a=a},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b){this.a=a
this.b=b},
dp:function dp(){},
p0:function p0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oZ:function oZ(a,b){this.a=a
this.b=b},
p_:function p_(a,b){this.a=a
this.b=b},
p1:function p1(a){this.a=a},
p6:function p6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p4:function p4(a,b){this.a=a
this.b=b},
p5:function p5(){},
p7:function p7(a){this.a=a},
pa:function pa(a){this.a=a},
pb:function pb(a,b){this.a=a
this.b=b},
p8:function p8(a,b){this.a=a
this.b=b},
p9:function p9(a){this.a=a},
pc:function pc(a,b){this.a=a
this.b=b},
pd:function pd(a,b){this.a=a
this.b=b},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(a){this.a=a},
oY:function oY(){},
dq:function dq(){},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a){this.a=a},
k5:function k5(){},
qr:function qr(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qt:function qt(b,c,a){this.b=b
this.c=c
this.a=a},
qs:function qs(){},
r3:function r3(){},
r4:function r4(a,b){this.a=a
this.b=b},
rg:function rg(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rh:function rh(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rA:function rA(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(a,b){this.a=a
this.b=b},
rB:function rB(a,b){this.a=a
this.b=b},
hY:function hY(){},
hZ:function hZ(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
r1:function r1(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eX:function eX(a,b){this.a=a
this.b=b},
rw:function rw(){},
rH:function rH(a,b){this.a=a
this.b=b},
r7:function r7(){},
r8:function r8(a,b){this.a=a
this.b=b},
r9:function r9(a,b){this.a=a
this.b=b},
ra:function ra(a,b){this.a=a
this.b=b},
Hf:function(a,b){var t=a[b]
return t===a?null:t},
vf:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ve:function(){var t=Object.create(null)
P.vf(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wR:function(a,b,c){return H.y6(a,new H.q(0,null,null,null,null,null,0,[b,c]))},
cH:function(a,b){return new H.q(0,null,null,null,null,null,0,[a,b])},
n6:function(){return new H.q(0,null,null,null,null,null,0,[null,null])},
hv:function(a){return H.y6(a,new H.q(0,null,null,null,null,null,0,[null,null]))},
i0:function(a,b){return new P.ka(0,null,null,null,null,null,0,[a,b])},
Hg:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
i:function(a,b,c,d,e){return new P.qR(0,null,null,null,null,[d,e])},
ue:function(a,b,c){var t,s
if(P.vi(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i7()
s.push(a)
try{P.HG(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.xd(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jp:function(a,b,c){var t,s,r
if(P.vi(a))return b+"..."+c
t=new P.ca(b)
s=$.$get$i7()
s.push(a)
try{r=t
r.R=P.xd(r.gR(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.R=s.gR()+c
s=t.gR()
return s.charCodeAt(0)==0?s:s},
vi:function(a){var t,s
for(t=0;s=$.$get$i7(),t<s.length;++t)if(a===s[t])return!0
return!1},
HG:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.dd(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.L())return
q=H.D(t.gY())
b.push(q)
s+=q.length+2;++r}if(!t.L()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gY();++r
if(!t.L()){if(r<=4){b.push(H.D(n))
return}p=H.D(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gY();++r
for(;t.L();n=m,m=l){l=t.gY();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.D(n)
p=H.D(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
aj:function(a,b,c,d){return new P.k9(0,null,null,null,null,null,0,[d])},
uq:function(a,b){var t,s
t=P.aj(null,null,null,b)
for(s=J.dd(a);s.L();)t.h(0,s.gY())
return t},
wW:function(a){var t,s,r
t={}
if(P.vi(a))return"{...}"
s=new P.ca("")
try{$.$get$i7().push(a)
r=s
r.R=r.gR()+"{"
t.a=!0
a.aq(0,new P.nl(t,s))
t=s
t.R=t.gR()+"}"}finally{t=$.$get$i7()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gR()
return t.charCodeAt(0)==0?t:t},
ur:function(a,b){var t=new P.n7(null,0,0,0,[b])
t.f2(a,b)
return t},
qR:function qR(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qU:function qU(a){this.a=a},
qS:function qS(a,$ti){this.a=a
this.$ti=$ti},
qT:function qT(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ka:function ka(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k9:function k9(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qV:function qV(){},
fi:function fi(){},
hq:function hq(){},
ju:function ju(){},
hJ:function hJ(){},
b6:function b6(){},
ro:function ro(){},
nk:function nk(){},
hR:function hR(a,$ti){this.a=a
this.$ti=$ti},
nl:function nl(a,b){this.a=a
this.b=b},
n7:function n7(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qZ:function qZ(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oE:function oE(){},
oD:function oD(){},
vF:function(a,b,c,d,e,f){if(C.d.bP(f,4)!==0)throw H.m(new P.bD("Invalid base64 padding, padded length must be multiple of four, is "+H.D(f),a,c))
if(d+e!==f)throw H.m(new P.bD("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.m(new P.bD("Invalid base64 padding, more than two '=' characters",a,b))},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
fV:function fV(){},
fW:function fW(){},
lo:function lo(){},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
rq:function rq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rs:function rs(a){this.a=a},
rr:function rr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H1:function(a,b,c){var t,s,r,q
if(b<0)throw H.m(P.bG(b,0,J.cm(a),null,null))
t=c==null
if(!t&&c<b)throw H.m(P.bG(c,b,J.cm(a),null,null))
s=J.dd(a)
for(r=0;r<b;++r)if(!s.L())throw H.m(P.bG(b,0,r,null,null))
q=[]
if(t)for(;s.L();)q.push(s.gY())
else for(r=b;r<c;++r){if(!s.L())throw H.m(P.bG(c,b,r,null,null))
q.push(s.gY())}return H.x5(q)},
xd:function(a,b,c){var t=J.dd(b)
if(!t.L())return a
if(c.length===0){do a+=H.D(t.gY())
while(t.L())}else{a+=H.D(t.gY())
for(;t.L();)a=a+c+H.D(t.gY())}return a},
zP:function(a,b){return J.yn(a,b)},
zT:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=P.dC("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:\\.(\\d{1,6}))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$",!0,!1).ho(a)
if(t!=null){s=new P.le()
r=t.b
if(1>=r.length)return H.w(r,1)
q=H.dl(r[1],null,null)
if(2>=r.length)return H.w(r,2)
p=H.dl(r[2],null,null)
if(3>=r.length)return H.w(r,3)
o=H.dl(r[3],null,null)
if(4>=r.length)return H.w(r,4)
n=s.$1(r[4])
if(5>=r.length)return H.w(r,5)
m=s.$1(r[5])
if(6>=r.length)return H.w(r,6)
l=s.$1(r[6])
if(7>=r.length)return H.w(r,7)
k=new P.lf().$1(r[7])
j=J.db(k)
i=j.bw(k,1000)
h=j.hY(k,1000)
j=r.length
if(8>=j)return H.w(r,8)
if(r[8]!=null){if(9>=j)return H.w(r,9)
j=r[9]
if(j!=null){g=J.ba(j,"-")?-1:1
if(10>=r.length)return H.w(r,10)
f=H.dl(r[10],null,null)
if(11>=r.length)return H.w(r,11)
e=s.$1(r[11])
if(typeof f!=="number")return H.am(f)
e=J.e1(e,60*f)
if(typeof e!=="number")return H.am(e)
m=J.ta(m,g*e)}d=!0}else d=!1
c=H.Gc(q,p,o,n,m,l,i+C.f.bf(h/1000),d)
if(c==null)throw H.m(new P.bD("Time out of range",a,null))
return P.vS(c,d)}else throw H.m(new P.bD("Invalid date format",a,null))},
vS:function(a,b){var t=new P.dO(a,b)
t.dm(a,b)
return t},
zR:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.D(t)
if(t>=10)return s+"00"+H.D(t)
return s+"000"+H.D(t)},
zS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ii:function(a){if(a>=10)return""+a
return"0"+a},
zU:function(a,b,c,d,e,f){return new P.d3(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
w_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.Aa(a)},
Aa:function(a){var t=J.aK(a)
if(!!t.$isf0)return t.H(a)
return H.o8(a)},
dK:function(a){return new P.d1(!1,null,null,a)},
e4:function(a,b,c){return new P.d1(!0,a,b,c)},
yI:function(a){return new P.d1(!1,null,a,"Must not be null")},
x9:function(a){return new P.eG(null,null,!1,null,null,a)},
jK:function(a,b,c){return new P.eG(null,null,!0,a,b,"Value not in range")},
bG:function(a,b,c,d,e){return new P.eG(b,c,!0,a,d,"Invalid value")},
dm:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.am(a)
if(!(0>a)){if(typeof c!=="number")return H.am(c)
t=a>c}else t=!0
if(t)throw H.m(P.bG(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.am(b)
if(!(a>b)){if(typeof c!=="number")return H.am(c)
t=b>c}else t=!0
if(t)throw H.m(P.bG(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.cm(b)
return new P.mu(b,t,!0,a,c,"Index out of range")},
lu:function(a){return new P.qC(a)},
dk:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.dd(a);s.L();)t.push(s.gY())
if(b)return t
t.fixed$length=Array
return t},
FJ:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sv(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.dk(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fH:function(a){H.Ij(H.D(a))},
dC:function(a,b,c){return new H.hr(a,H.ui(a,!1,!0,!1),null,null)},
pi:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dm(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.al()
s=c<t}else s=!0
return H.x5(s?C.b.cm(a,b,c):a)}if(!!J.aK(a).$isfn)return H.Gb(a,b,P.dm(b,c,a.length,null,null,null))
return P.H1(a,b,c)},
xs:function(){var t=H.G5()
if(t!=null)return P.xt(t,0,null)
throw H.m(new P.aa("'Uri.base' is not supported"))},
xt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.am(a,b+4)^58)*3|C.c.am(a,b)^100|C.c.am(a,b+1)^97|C.c.am(a,b+2)^116|C.c.am(a,b+3)^97)>>>0
if(s===0)return P.xr(b>0||c<c?C.c.O(a,b,c):a,5,null).geC()
else if(s===32)return P.xr(C.c.O(a,t,c),0,null).geC()}r=H.a(new Array(8),[P.F])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xW(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.aH()
if(p>=b)if(P.xW(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.a3()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.al()
if(typeof l!=="number")return H.am(l)
if(k<l)l=k
if(typeof m!=="number")return m.al()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.al()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.al()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aR(a,"..",m)))h=l>m+2&&C.c.aR(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aR(a,"file",b)){if(o<=b){if(!C.c.aR(a,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a=g+C.c.O(a,m,c)
p-=b
t=s-b
l+=t
k+=t
c=a.length
b=0
o=7
n=7
m=7}else if(m===l)if(b===0&&!0){a=C.c.aP(a,m,l,"/");++l;++k;++c}else{a=C.c.O(a,b,m)+"/"+C.c.O(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aR(a,"http",b)){if(q&&n+3===m&&C.c.aR(a,"80",n+1))if(b===0&&!0){a=C.c.aP(a,n,m,"")
m-=3
l-=3
k-=3
c-=3}else{a=C.c.O(a,b,n)+C.c.O(a,m,c)
p-=b
o-=b
n-=b
t=3+b
m-=t
l-=t
k-=t
c=a.length
b=0}i="http"}else i=null
else if(p===t&&C.c.aR(a,"https",b)){if(q&&n+4===m&&C.c.aR(a,"443",n+1))if(b===0&&!0){a=C.c.aP(a,n,m,"")
m-=4
l-=4
k-=4
c-=3}else{a=C.c.O(a,b,n)+C.c.O(a,m,c)
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
if(j){if(b>0||c<a.length){a=C.c.O(a,b,c)
p-=b
o-=b
n-=b
m-=b
l-=b
k-=b}return new P.rf(a,p,o,n,m,l,k,i,null)}return P.Hj(a,b,c,p,o,n,m,l,k,i)},
xv:function(a,b){return C.b.hq(a.split("&"),P.n6(),new P.pP(b))},
H4:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pM(a)
s=H.cA(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.ad(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.dl(C.c.O(a,p,q),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.dl(C.c.O(a,p,c),null,null)
if(J.cy(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
xu:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pN(a)
s=new P.pO(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.ad(a,q)
if(m===58){if(q===b){++q
if(C.c.ad(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.ba(C.b.gbm(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.H4(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.aE()
h=j[1]
if(typeof h!=="number")return H.am(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.aE()
i=j[3]
if(typeof i!=="number")return H.am(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aK(e).a_(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.df()
i=C.d.b8(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
Hj:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Hr(a,b,d)
else{if(d===b)P.i3(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Hs(a,t,e-1):""
r=P.Hn(a,e,f,!1)
if(typeof f!=="number")return f.a3()
q=f+1
if(typeof g!=="number")return H.am(g)
p=q<g?P.Hp(H.dl(C.c.O(a,q,g),null,new P.rL(a,f)),j):null}else{s=""
r=null
p=null}o=P.Ho(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.al()
n=h<i?P.Hq(a,h+1,i,null):null
return new P.kf(j,s,r,p,o,n,i<c?P.Hm(a,i+1,c):null,null,null,null,null,null)},
xF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i3:function(a,b,c){throw H.m(new P.bD(c,a,b))},
Hp:function(a,b){if(a!=null&&J.ba(a,P.xF(b)))return
return a},
Hn:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.ad(a,b)===91){if(typeof c!=="number")return c.a9()
t=c-1
if(C.c.ad(a,t)!==93)P.i3(a,b,"Missing end `]` to match `[` in host")
P.xu(a,b+1,t)
return C.c.O(a,b,c).toLowerCase()}if(typeof c!=="number")return H.am(c)
s=b
for(;s<c;++s)if(C.c.ad(a,s)===58){P.xu(a,b,c)
return"["+a+"]"}return P.Hu(a,b,c)},
Hu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.am(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.ad(a,t)
if(p===37){o=P.xK(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.ca("")
m=C.c.O(a,s,t)
l=r.R+=!q?m.toLowerCase():m
if(n){o=C.c.O(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.R=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.ca("")
if(s<t){r.R+=C.c.O(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.i3(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.ad(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.ca("")
m=C.c.O(a,s,t)
r.R+=!q?m.toLowerCase():m
r.R+=P.xG(p)
t+=k
s=t}}}}if(r==null)return C.c.O(a,b,c)
if(s<c){m=C.c.O(a,s,c)
r.R+=!q?m.toLowerCase():m}n=r.R
return n.charCodeAt(0)==0?n:n},
Hr:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xI(C.c.am(a,b)))P.i3(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.am(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i3(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.O(a,b,c)
return P.Hk(s?a.toLowerCase():a)},
Hk:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Hs:function(a,b,c){var t=P.fC(a,b,c,C.Z,!1)
return t==null?C.c.O(a,b,c):t},
Ho:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fC(a,b,c,C.D,!1)
if(r==null)r=C.c.O(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.au(r,"/"))r="/"+r
return P.Ht(r,e,f)},
Ht:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.au(a,"/"))return P.Hv(a,!t||c)
return P.Hw(a)},
Hq:function(a,b,c,d){var t=P.fC(a,b,c,C.k,!1)
return t==null?C.c.O(a,b,c):t},
Hm:function(a,b,c){var t=P.fC(a,b,c,C.k,!1)
return t==null?C.c.O(a,b,c):t},
xK:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.ad(a,b+1)
r=C.c.ad(a,t)
q=H.rR(s)
p=H.rR(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.b8(o,4)
if(t>=8)return H.w(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hK(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.O(a,b,b+3).toUpperCase()
return},
xG:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.am("0123456789ABCDEF",a>>>4)
t[2]=C.c.am("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fV(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.am("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.am("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.pi(t,0,null)},
fC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.dc(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.al()
if(typeof c!=="number")return H.am(c)
if(!(r<c))break
c$0:{o=s.ad(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xK(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i3(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.ad(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.xG(o)}}if(p==null)p=new P.ca("")
p.R+=C.c.O(a,q,r)
p.R+=H.D(m)
if(typeof l!=="number")return H.am(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.al()
if(q<c)p.R+=s.O(a,q,c)
t=p.R
return t.charCodeAt(0)==0?t:t},
xJ:function(a){if(C.c.au(a,"."))return!0
return C.c.bt(a,"/.")!==-1},
Hw:function(a){var t,s,r,q,p,o,n
if(!P.xJ(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bX)(s),++p){o=s[p]
if(J.ba(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bl(t,"/")},
Hv:function(a,b){var t,s,r,q,p,o
if(!P.xJ(a))return!b?P.xH(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bX)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.ba(C.b.gbm(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.tb(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.ba(C.b.gbm(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.xH(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.bl(t,"/")},
xH:function(a){var t,s,r,q
t=J.bd(a)
s=t.gv(a)
if(typeof s!=="number")return s.aH()
if(s>=2&&P.xI(t.ad(a,0))){r=1
while(!0){s=t.gv(a)
if(typeof s!=="number")return H.am(s)
if(!(r<s))break
q=t.ad(a,r)
if(q===58)return C.c.O(a,0,r)+"%3A"+C.c.aa(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Hl:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.ad(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.m(P.dK("Invalid URL encoding"))}}return t},
rp:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.am(c)
t=J.dc(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.ad(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.O(a,b,c)
else o=new H.kW(t.O(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.ad(a,s)
if(q>127)throw H.m(P.dK("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.m(P.dK("Truncated URI"))
o.push(P.Hl(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pT(!1).hb(o)},
xI:function(a){var t=a|32
return 97<=t&&t<=122},
xr:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.bd(a)
r=b
q=-1
p=null
while(!0){o=s.gv(a)
if(typeof o!=="number")return H.am(o)
if(!(r<o))break
c$0:{p=s.ad(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.m(new P.bD("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.m(new P.bD("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gv(a)
if(typeof o!=="number")return H.am(o)
if(!(r<o))break
p=s.ad(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbm(t)
if(p!==44||r!==m+7||!s.aR(a,"base64",m+1))throw H.m(new P.bD("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hM(0,a,o,s.gv(a))
else{l=P.fC(a,o,s.gv(a),C.k,!0)
if(l!=null)a=s.aP(a,o,s.gv(a),l)}return new P.pL(a,t,c)},
HD:function(){var t,s,r,q,p
t=P.FJ(22,new P.rE(),!0,P.d9)
s=new P.rD(t)
r=new P.rF()
q=new P.rG()
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
xW:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xX()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.am(a,s)^96
p=J.i8(r,q>95?31:q)
if(typeof p!=="number")return p.aW()
d=p&31
o=C.d.b8(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
da:function da(){},
bv:function bv(){},
dO:function dO(a,b){this.a=a
this.b=b},
le:function le(){},
lf:function lf(){},
a4:function a4(){},
d3:function d3(a){this.a=a},
ll:function ll(){},
lm:function lm(){},
el:function el(){},
fo:function fo(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mu:function mu(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a){this.a=a},
eM:function eM(a){this.a=a},
dV:function dV(a){this.a=a},
bO:function bO(a){this.a=a},
nP:function nP(){},
jR:function jR(){},
lb:function lb(a){this.a=a},
qC:function qC(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
lv:function lv(a,bU,$ti){this.a=a
this.bU=bU
this.$ti=$ti},
F:function F(){},
p:function p(){},
jr:function jr(){},
r:function r(){},
bs:function bs(){},
d6:function d6(){},
du:function du(){},
ap:function ap(){},
dB:function dB(){},
eH:function eH(){},
dU:function dU(){},
C:function C(){},
ca:function ca(R){this.R=R},
eO:function eO(){},
pP:function pP(a){this.a=a},
pM:function pM(a){this.a=a},
pN:function pN(a){this.a=a},
pO:function pO(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rL:function rL(a,b){this.a=a
this.b=b},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
rE:function rE(){},
rD:function rD(a){this.a=a},
rF:function rF(){},
rG:function rG(){},
rf:function rf(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qq:function qq(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
y3:function(a){var t,s,r,q,p
if(a==null)return
t=P.n6()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bX)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
HW:function(a){var t,s
t=new P.bk(0,$.aE,null,[null])
s=new P.e_(t,[null])
a.then(H.dr(new P.rM(s),1))["catch"](H.dr(new P.rN(s),1))
return t},
to:function(){var t=$.vW
if(t==null){t=J.kq(window.navigator.userAgent,"Opera",0)
$.vW=t}return t},
vZ:function(){var t=$.vX
if(t==null){t=P.to()!==!0&&J.kq(window.navigator.userAgent,"WebKit",0)
$.vX=t}return t},
vY:function(){var t,s
t=$.vT
if(t!=null)return t
s=$.vU
if(s==null){s=J.kq(window.navigator.userAgent,"Firefox",0)
$.vU=s}if(s)t="-moz-"
else{s=$.vV
if(s==null){s=P.to()!==!0&&J.kq(window.navigator.userAgent,"Trident/",0)
$.vV=s}if(s)t="-ms-"
else t=P.to()===!0?"-o-":"-webkit-"}$.vT=t
return t},
rk:function rk(){},
rm:function rm(a,b){this.a=a
this.b=b},
qd:function qd(){},
qe:function qe(a,b){this.a=a
this.b=b},
rl:function rl(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a){this.a=a},
rN:function rN(a){this.a=a},
l1:function l1(){},
l2:function l2(a){this.a=a},
HB:function(a){var t,s,r
t=new P.bk(0,$.aE,null,[null])
s=new P.ke(t,[null])
a.toString
r=W.a6
W.eS(a,"success",new P.rC(a,s),!1,r)
W.eS(a,"error",s.ge7(),!1,r)
return t},
ld:function ld(){},
rC:function rC(a,b){this.a=a
this.b=b},
mt:function mt(){},
nM:function nM(){},
hN:function hN(){},
pF:function pF(){},
Hi:function(a){var t=new P.r5(0,0)
t.fc(a)
return t},
qX:function qX(){},
r5:function r5(a,b){this.a=a
this.b=b},
r6:function r6(){},
bV:function bV(){},
ku:function ku(){},
eg:function eg(){},
lw:function lw(){},
lx:function lx(){},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
lB:function lB(){},
lC:function lC(){},
lD:function lD(){},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lH:function lH(){},
lI:function lI(){},
lJ:function lJ(){},
lK:function lK(){},
lL:function lL(){},
m0:function m0(){},
cq:function cq(){},
mq:function mq(){},
d5:function d5(){},
n_:function n_(){},
iP:function iP(){},
j8:function j8(){},
nm:function nm(){},
nn:function nn(){},
d7:function d7(){},
nJ:function nJ(){},
iQ:function iQ(){},
j9:function j9(){},
o_:function o_(){},
o4:function o4(){},
oz:function oz(){},
ph:function ph(){},
iR:function iR(){},
ja:function ja(){},
kA:function kA(a){this.a=a},
cb:function cb(){},
pk:function pk(){},
pm:function pm(){},
eL:function eL(){},
pu:function pu(){},
d8:function d8(){},
pG:function pG(){},
iS:function iS(){},
jb:function jb(){},
pR:function pR(){},
pV:function pV(){},
pW:function pW(){},
i_:function i_(){},
rb:function rb(){},
rc:function rc(){},
rd:function rd(){},
bh:function bh(){},
d9:function d9(){},
fO:function fO(){},
eY:function eY(){},
fP:function fP(){},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
bC:function bC(){},
e5:function e5(){},
l0:function l0(){},
kw:function kw(){},
ol:function ol(){},
rt:function rt(){},
jQ:function jQ(){},
iT:function iT(){},
jc:function jc(){}},W={
vC:function(a){var t=document.createElement("a")
return t},
zq:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zr:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
vO:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Hc:function(a){var t=new W.qo(a,null)
t.f9(a)
return t},
tM:function(a,b,c){return W.wc(a,null,null,b,null,null,null,c).b5(new W.mk())},
wc:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e8
s=new P.bk(0,$.aE,null,[t])
r=new P.e_(s,[t])
q=new XMLHttpRequest()
C.M.hO(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.ID
W.eS(q,"load",new W.ml(r,q),!1,t)
W.eS(q,"error",r.ge7(),!1,t)
q.send()
return s},
mr:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
xE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eS:function(a,b,c,d,e){var t=W.HL(new W.qB(c))
t=new W.qA(0,a,b,t,!1,[e])
t.fa(a,b,c,!1,e)
return t},
HC:function(a){var t
if(!!J.aK(a).$isek)return a
t=new P.k0([],[],!1)
t.c=!0
return t.bh(a)},
HL:function(a){var t=$.aE
if(t===C.e)return a
return t.h6(a,!0)},
aC:function aC(){},
eW:function eW(){},
kx:function kx(){},
eZ:function eZ(){},
cN:function cN(){},
kE:function kE(){},
h1:function h1(){},
h4:function h4(){},
kI:function kI(){},
f_:function f_(){},
kM:function kM(){},
fU:function fU(){},
eh:function eh(){},
kY:function kY(){},
id:function id(){},
fX:function fX(){},
l3:function l3(){},
l4:function l4(){},
fY:function fY(){},
fZ:function fZ(){},
l5:function l5(){},
bL:function bL(){},
ej:function ej(){},
iH:function iH(){},
qo:function qo(a,b){this.a=a
this.b=b},
jC:function jC(){},
qp:function qp(){},
ig:function ig(){},
l6:function l6(){},
l7:function l7(){},
lc:function lc(){},
f2:function f2(){},
ih:function ih(){},
ek:function ek(){},
ij:function ij(){},
ik:function ik(){},
lh:function lh(){},
il:function il(){},
im:function im(){},
iI:function iI(){},
j1:function j1(){},
io:function io(){},
ip:function ip(){},
k6:function k6(a,$ti){this.a=a
this.$ti=$ti},
dx:function dx(){},
ln:function ln(){},
h0:function h0(){},
lt:function lt(){},
a6:function a6(){},
aV:function aV(){},
lX:function lX(){},
ce:function ce(){},
fa:function fa(){},
iJ:function iJ(){},
j2:function j2(){},
lY:function lY(){},
lZ:function lZ(){},
m_:function m_(){},
m3:function m3(){},
m4:function m4(){},
iD:function iD(){},
cp:function cp(){},
mh:function mh(){},
fc:function fc(){},
iK:function iK(){},
j3:function j3(){},
iF:function iF(){},
e8:function e8(){},
mk:function mk(){},
ml:function ml(a,b){this.a=a
this.b=b},
hi:function hi(){},
mp:function mp(){},
hj:function hj(){},
fe:function fe(){},
mv:function mv(){},
mX:function mX(){},
ht:function ht(){},
hu:function hu(){},
ne:function ne(){},
nj:function nj(){},
hB:function hB(){},
jw:function jw(){},
np:function np(){},
nq:function nq(){},
hC:function hC(){},
cr:function cr(){},
jx:function jx(){},
iU:function iU(){},
jd:function jd(){},
nH:function nH(){},
nI:function nI(){},
aP:function aP(){},
jA:function jA(){},
iV:function iV(){},
je:function je(){},
nL:function nL(){},
nQ:function nQ(){},
nU:function nU(){},
nW:function nW(){},
ea:function ea(){},
o1:function o1(){},
cg:function cg(){},
jH:function jH(){},
iW:function iW(){},
jf:function jf(){},
o7:function o7(){},
jL:function jL(){},
fs:function fs(){},
jM:function jM(){},
oC:function oC(){},
oF:function oF(){},
oG:function oG(){},
oI:function oI(){},
cs:function cs(){},
jO:function jO(){},
h2:function h2(){},
h5:function h5(){},
ft:function ft(){},
ct:function ct(){},
jP:function jP(){},
iX:function iX(){},
jg:function jg(){},
fu:function fu(){},
oP:function oP(){},
ci:function ci(){},
oQ:function oQ(){},
oR:function oR(){},
oX:function oX(){},
cj:function cj(){},
ec:function ec(){},
pq:function pq(){},
ps:function ps(){},
cT:function cT(){},
cK:function cK(){},
pv:function pv(){},
iY:function iY(){},
jh:function jh(){},
pw:function pw(){},
h3:function h3(){},
h6:function h6(){},
pA:function pA(){},
cv:function cv(){},
jT:function jT(){},
iZ:function iZ(){},
ji:function ji(){},
fw:function fw(){},
jU:function jU(){},
ed:function ed(){},
pQ:function pQ(){},
pU:function pU(){},
fx:function fx(){},
jV:function jV(){},
pZ:function pZ(){},
jY:function jY(){},
q5:function q5(){},
eP:function eP(){},
fy:function fy(){},
qn:function qn(){},
hW:function hW(){},
j_:function j_(){},
jj:function jj(){},
k4:function k4(){},
j0:function j0(){},
jk:function jk(){},
qu:function qu(){},
qv:function qv(){},
k8:function k8(){},
iL:function iL(){},
j4:function j4(){},
qQ:function qQ(){},
i2:function i2(){},
iM:function iM(){},
j5:function j5(){},
re:function re(){},
kb:function kb(){},
iN:function iN(){},
j6:function j6(){},
kd:function kd(){},
iO:function iO(){},
j7:function j7(){},
ru:function ru(){},
rv:function rv(){},
qw:function qw(a){this.a=a},
qz:function qz(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
hX:function hX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qA:function qA(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qB:function qB(a){this.a=a},
bx:function bx(){},
m1:function m1(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rn:function rn(){}},T={
tN:function(a,b,c,d){var t
H.Ir(a,"$isr",[P.F],"$asr")
t=new T.hk(a,null,d,b,null)
t.f1(a,b,c,d)
return t},
wZ:function(a,b){return new T.nR(0,a,new Uint8Array(H.cA(b==null?32768:b)))},
H6:function(a){var t=new T.q9(-1,0,0,0,0,null,null,"",[])
t.f6(a)
return t},
H7:function(a,b){var t=new T.qa(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.f7(a,b)
return t},
fd:function(a){var t=new T.mm(null,0,2147483647)
t.f0(a)
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
de:function de(a){this.a=a},
hk:function hk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qa:function qa(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
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
qb:function qb(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
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
q8:function q8(a){this.a=a},
mm:function mm(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kL:function kL(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
kO:function kO(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
lg:function lg(){},
me:function me(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
Ie:function(){var t,s,r,q,p,o
A.rQ()
W.tM(C.c.aB("../",N.nY())+"navbar.txt",null,null).b5(O.Ig())
t=new P.dO(Date.now(),!1)
s=H.jJ(t)===4&&H.jI(t)===1?"_sauce.png":".png"
r=[K.fl]
q=new F.cc("images/Credits/jadedResearcher_icon"+s,A.cn(C.c.aa("#3da35a",1)),"jadedResearcher",H.a([],r))
$.$get$ck().push(q)
$.zA=q
q=new F.cc("images/Credits/Smith_of_Dreams_icon"+s,A.cn(C.c.aa("#9630BF",1)),"karmicRetribution",H.a([],r))
$.$get$ck().push(q)
$.zB=q
q="images/Credits/pl_icon"+s
p=C.c.aa("#000066",1)
q=new F.cc(q,A.cn(p),"paradoxLands",H.a([],r))
$.$get$ck().push(q)
$.zD=q
q="images/Credits/ab_icon"+s
o=C.c.aa("#ff0000",1)
q=new F.cc(q,A.cn(o),"authorBot",H.a([],r))
$.$get$ck().push(q)
$.zu=q
q=new F.cc("images/Credits/abj_icon"+s,A.cn(C.c.aa("#ffa500",1)),"authorBotJunior",H.a([],r))
$.$get$ck().push(q)
$.zv=q
q=new F.cc("images/Credits/mlh_icon"+s,A.cn(C.c.aa("#fcf000",1)),"forgetfulIdealist",H.a([],r))
$.$get$ck().push(q)
$.zx=q
q=new F.cc("images/Credits/hb_icon"+s,A.cn(C.c.aa("#ffc000",1)),"humanBot",H.a([],r))
$.$get$ck().push(q)
$.zy=q
p=new F.cc("images/Credits/rs_icon"+s,A.cn(p),"recursiveSlacker",H.a([],r))
$.$get$ck().push(p)
$.zE=p
p=new F.cc("images/Credits/aw_icon"+s,A.cn(C.c.aa("#494132",1)),"aspiringWatcher",H.a([],r))
$.$get$ck().push(p)
$.zt=p
p=new F.cc("images/Credits/mi_icon"+s,A.cn(C.c.aa("#003300",1)),"manicInsomniac",H.a([],r))
$.$get$ck().push(p)
$.zC=p
p=new F.cc("images/Credits/wm_icon"+s,A.cn(C.c.aa("#3399ff",1)),"wooMod",H.a([],r))
$.$get$ck().push(p)
$.zI=p
p="images/Credits/io_icon"+s
q=C.c.aa("#00ff00",1)
p=new F.cc(p,A.cn(q),"insufferableOracle",H.a([],r))
$.$get$ck().push(p)
$.zz=p
p=new F.cc("images/Credits/sb_icon"+s,A.cn(C.c.aa("#fff000",1)),"someBody",H.a([],r))
$.$get$ck().push(p)
$.zG=p
q=new F.cc("images/Credits/shogun_icon"+s,A.cn(q),"shogun",H.a([],r))
$.$get$ck().push(q)
$.zF=q
q=new F.cc("images/Credits/tg_icon"+s,A.cn(C.c.aa("#ff3399",1)),"tableGuardian",H.a([],r))
$.$get$ck().push(q)
$.zH=q
r=new F.cc("images/Credits/dm_icon"+s,A.cn(o),"dilletantMathematician",H.a([],r))
$.$get$ck().push(r)
$.zw=r
T.kj()
W.eS(window,"scroll",new T.t1(),!1,W.a6)},
kj:function(){var t=0,s=P.bi(),r,q,p,o
var $async$kj=P.bo(function(a,b){if(a===1)return P.bl(b,s)
while(true)switch(t){case 0:t=2
return P.cl(T.vo(),$async$kj)
case 2:r=$.$get$ck(),q=r.length,p=0
case 3:if(!(p<r.length)){t=5
break}t=6
return P.cl(r[p].bQ(),$async$kj)
case 6:case 4:r.length===q||(0,H.bX)(r),++p
t=3
break
case 5:o=document.querySelector("#newspostsMain")
$.$get$yb().d4(0,o)
return P.bm(null,s)}})
return P.bn($async$kj,s)},
vo:function(){var t=0,s=P.bi(),r,q,p,o,n
var $async$vo=P.bo(function(a,b){if(a===1)return P.bl(b,s)
while(true)switch(t){case 0:r=document
q=r.querySelector("#newspostsMain")
p=r.createElement("div")
p.classList.add("HeadshotContainer")
for(r=$.$get$ck(),o=r.length,n=0;n<r.length;r.length===o||(0,H.bX)(r),++n)r[n].d5(p)
q.appendChild(p)
return P.bm(null,s)}})
return P.bn($async$vo,s)},
t1:function t1(){},
Gw:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.hO("Glitch",0.01,0.01,0.01,s,0.5,a,new H.q(0,null,null,null,null,null,0,[X.H,P.a4]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.A(null,null,A.a8),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.G]),H.a([],[A.fS]),1)
t.ai(a,b,c,d,e)
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
c4:function c4(a,b){this.a=a
this.b=b},
zY:function(a,b,c,d){var t,s,r,q
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.aw(s[q],8)
return t.bg(b)},
zX:function(a,b,c,d){var t,s,r,q,p
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.e2(a,b)
for(q=0;q<c;++q){p=r.ao(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
zW:function(a,b,c,d){var t,s,r,q,p
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
s=d.gcY()
r=C.f.ay(Math.log(H.ki(s.gv(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;++p)t.aw(q[p],r)
return t.bg(b)},
zV:function(a,b,c,d){var t,s,r,q,p,o
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ay(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.e2(a,b)
for(o=0;o<c;++o){r=p.ao(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kv:function kv(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kU:function kU(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},bH:function bH(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ic:function ic(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mj:function mj(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mY:function mY(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},nh:function nh(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},nu:function nu(m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},oB:function oB(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},fp:function fp(){},v5:function v5(){},v6:function v6(){},v7:function v7(){},tu:function tu(){},tx:function tx(){},tk:function tk(){},uQ:function uQ(){},v9:function v9(){},va:function va(){},kR:function kR(){},uH:function uH(){},uD:function uD(){},n2:function n2(){},tp:function tp(){},te:function te(){},l9:function l9(){},up:function up(){},la:function la(){},nV:function nV(){},uX:function uX(){},uU:function uU(){},uY:function uY(){},td:function td(){},ma:function ma(){},kP:function kP(){},tj:function tj(){},ti:function ti(){},uI:function uI(){},uZ:function uZ(){},uJ:function uJ(){},tw:function tw(){},tv:function tv(){},uW:function uW(){},uV:function uV(){},px:function px(){},v0:function v0(){},tm:function tm(){},tn:function tn(){},v8:function v8(){},hA:function hA(){},uv:function uv(){},uw:function uw(){},ux:function ux(){},uy:function uy(){},uR:function uR(){},uS:function uS(){},uT:function uT(){},uu:function uu(){},uA:function uA(){},uB:function uB(){},tJ:function tJ(){},tK:function tK(){},tL:function tL(){},uC:function uC(){},uz:function uz(){},tg:function tg(){},v2:function v2(){},v3:function v3(){},v1:function v1(){}},K={bY:function bY(a,b){this.a=a
this.b=b},
vL:function(){var t=$.vK
if(t==null){t=new K.kT(H.a([],[K.fl]))
$.vK=t}return t},
FN:function(a,b){var t=new K.fl(b,null,null)
t.f3(a,b)
return t},
kT:function kT(a){this.a=a},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
ow:function ow(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c}},L={
yJ:function(a,b,c,d,e,f,g){var t,s,r
t=P.C
s=A.dN
r=P.F
r=new L.P(P.i(null,null,null,t,s),P.i(null,null,null,r,s),P.i(null,null,null,t,r),P.i(null,null,null,r,t))
r.j(0,$.S,L.b("#FF9B00"),!0)
r.j(0,$.U,L.b("#FF9B00"),!0)
r.j(0,$.T,L.b("#FF8700"),!0)
r.j(0,$.a2,L.b("#7F7F7F"),!0)
r.j(0,$.a1,L.b("#727272"),!0)
r.j(0,$.W,L.b("#A3A3A3"),!0)
r.j(0,$.X,L.b("#999999"),!0)
r.j(0,$.V,L.b("#898989"),!0)
r.j(0,$.a0,L.b("#EFEFEF"),!0)
r.j(0,$.a_,L.b("#DBDBDB"),!0)
r.j(0,$.Z,L.b("#C6C6C6"),!0)
r.j(0,$.Y,L.b("#ADADAD"),!0)
s=[t]
t=new L.fM(0.01,0.01,0.01,0.5,a,new H.q(0,null,null,null,null,null,0,[X.H,P.a4]),null,"","",!1,b,null,c,d,e,g,f,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.G]),H.a([],[A.fS]),Q.A(null,null,A.a8))
t.S(a,b,c,d,e,f,g)
return t},
b:function(a){if(C.c.au(a,"#"))return A.cn(C.c.aa(a,1))
else return A.cn(a)},
fM:function fM(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kJ:function kJ(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
lN:function lN(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
md:function md(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
nr:function nr(m,n,p,w,q,t,u,A,C,D,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
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
_.x2=x2
_.y1=y1
_.y2=y2},
od:function od(m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
of:function of(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
og:function og(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
oh:function oh(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
oy:function oy(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
oH:function oH(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
pn:function pn(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2}},M={kz:function kz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
this.b=b},l8:function l8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
this.b=b},oS:function oS(a){this.a=a},q1:function q1(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2}},U={kD:function kD(){},ng:function ng(a){this.a=a},nO:function nO(a){this.a=a},pe:function pe(){},pf:function pf(a){this.a=a},pg:function pg(a){this.a=a},lj:function lj(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,c6,c7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.c6=c6
_.c7=c7
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},lM:function lM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ni:function ni(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r1=r1
_.r2=r2},c:function c(a){this.a=a},ab:function ab(b,c,a){this.b=b
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
_.x=x},oT:function oT(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},py:function py(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},
H5:function(a){if(J.dc(a).au(a," "))return C.c.aa(a,1)
return a},
q2:function q2(a){this.a=a},
q3:function q3(a,b){this.a=a
this.b=b},
q4:function q4(a,b){this.a=a
this.b=b}},O={kF:function kF(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},c8:function c8(){},dv:function dv(){},kK:function kK(a){this.a=a},eK:function eK(){},iq:function iq(){},m2:function m2(m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},oK:function oK(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
Ii:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.nY()
a=J.yB(a,P.dC("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.t4(t))
s=document
J.vx(s.querySelector("#navbar"),"beforeend",a,C.o,null)
if(J.ba(O.I6("seerOfVoid",null),"true"))P.As(new O.t5(),P.d6)
r=new P.dO(Date.now(),!1)
if(H.jJ(r)===4&&H.jI(r)===1)J.vu(s.querySelector("body")).h(0,"voidbody")
q=H.jJ(r)
p=H.jI(r)
o=C.a.H(H.uM(r))
n=C.a.H(q)
m=C.a.H(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hM(null,null)
k.cl(H.dl(l,null,null))
k.hL()
if($.GW||k.a.cb()>0.99)H.kn(s.querySelector("#today"),"$iseW").href=C.c.aB("../",t)+"dead_index.html?seed="+l
else H.kn(s.querySelector("#today"),"$iseW").href=C.c.aB("../",t)+"index2.html?seed="+l},
I6:function(a,b){var t,s,r,q
t=P.xs().gd2().B(0,a)
if(t!=null)t=P.rp(t,0,J.cm(t),C.n,!1)
if(t!=null)return t
s=$.yf
if(s.length!==0){r=J.yD(window.location.href,J.yy(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xt(H.yh(s,q,"")+"?"+$.yf,0,null).gd2().B(0,a)}return},
It:function(){var t,s,r,q
t=document
J.vu(t.querySelector("body")).h(0,"voidbody")
s=new W.k6(t.querySelectorAll(".void"),[null])
for(t=new H.ez(s,s.gv(s),0,null,[null]);t.L();){r=t.d
q=J.yt(J.tc(r))
if(q==="none"||q.length===0)O.In(r)
else O.I8(r)}},
In:function(a){var t,s
if(a==null)return
t=J.bK(a)
s=t.gaY(a)
J.vA(s,!!t.$isft?"inline":"block")},
I8:function(a){if(a==null)return
J.vA(J.tc(a),"none")},
Io:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fH("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.e3(s,",")
if(!J.yp(r,a))window.localStorage.setItem(t,H.D(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cx(q)
P.fH("Saving isn't possible....you don't have local storage")}},
t4:function t4(a){this.a=a},
t5:function t5(){},
t3:function t3(){},
cX:function cX(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pt:function pt(a){this.a=a},oe:function oe(a){this.a=a},kQ:function kQ(a){this.a=a},mb:function mb(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.a=a
_.b=b
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
_.r2=r2},mc:function mc(rx,ry,x1,x2,y1,y2,m,n,p,w,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.a=a
_.b=b
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
_.r2=r2},nK:function nK(b,a){this.b=b
this.a=a},dT:function dT(a,b){this.a=a
this.b=b},aq:function aq(a,b){this.a=a
this.b=b},d2:function d2(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},ny:function ny(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},c2:function c2(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},a5:function a5(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ie:function ie(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bE:function bE(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cZ:function cZ(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kV:function kV(c,a,b){this.c=c
this.a=a
this.b=b},bw:function bw(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jE:function jE(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iC:function iC(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jG:function jG(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ou:function ou(m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},ov:function ov(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ox:function ox(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},oJ:function oJ(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r1=r1
_.r2=r2},dS:function dS(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nx:function(){var t=0,s=P.bi(),r,q
var $async$nx=P.bo(function(a,b){if(a===1)return P.bl(b,s)
while(true)switch(t){case 0:P.fH("loading big bads")
r=$
q=J
t=2
return P.cl(A.eA("BigBadLists/bigBads.txt",!1,!1,null),$async$nx)
case 2:r.wY=q.e3(b,"\n")
return P.bm(null,s)}})
return P.bn($async$nx,s)},
HU:function(a){var t,s,r,q,p,o
t=J.e3(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bX)(t),++q){p=t[q]
o=J.bd(p)
r+=" "+(J.yG(o.B(p,0))+o.aa(p,1))}return r},
dt:function(){var t,s,r
for(t="#",s=0;s<6;++s){r=C.d.ay($.$get$y9().a.cb()*16)
if(r<0||r>=16)return H.w("0123456789ABCDEF",r)
t+="0123456789ABCDEF"[r]}return t}},A={kX:function kX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j:function(a,b,c,d,e){var t=new A.a8(c,e,null,a,!1,P.aj(null,null,null,G.a7),0,3)
t.P(a,b,c,!1,e)
return t},
a8:function a8(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mO:function mO(){},
mN:function mN(){},
nt:function nt(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
oO:function oO(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
o6:function o6(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
oM:function oM(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
pE:function pE(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
oi:function oi(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
m9:function m9(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},
fS:function fS(){},
ei:function(a,b,c,d){var t=new A.dN(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.f_(a,b,c,d)
return t},
tl:function(a,b,c,d){var t=A.ei(0,0,0,255)
t.b=C.a.as(C.d.ay(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.as(C.d.ay(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.as(C.d.ay(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.as(C.d.ay(d*255),0,255)
return t},
zN:function(a,b){if(b){if(typeof a!=="number")return a.aW()
return A.ei((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aW()
return A.ei((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
cn:function(a){return A.zN(H.dl(a,16,new A.rJ()),a.length>=8)},
dN:function dN(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rJ:function rJ(){},
wV:function(){if($.wT)return
$.wT=!0
Z.Aj()},
eA:function(a,b,c,d){var t=0,s=P.bi(),r,q,p,o,n
var $async$eA=P.bo(function(e,f){if(e===1)return P.bl(f,s)
while(true)switch(t){case 0:A.wV()
t=$.$get$cW().ag(0,a)?3:5
break
case 3:q=$.$get$cW().B(0,a)
p=J.aK(q)
if(!!p.$isdS){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cK(q)
t=1
break}}else throw H.m("Requested resource ("+a+") is an unexpected type: "+H.D(J.vw(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.ut==null?8:9
break
case 8:t=10
return P.cl(A.nd(),$async$eA)
case 10:case 9:n=$.ut.eG(a)
t=n!=null?11:12
break
case 11:t=13
return P.cl(A.n8(n),$async$eA)
case 13:if(!$.$get$cW().ag(0,a))$.$get$cW().i(0,a,new Y.dS(a,null,H.a([],[[P.f1,,]]),[null]))
r=$.$get$cW().B(0,a).b
t=1
break
case 12:case 7:r=A.FL(a,!1,d)
t=1
break
case 4:case 1:return P.bm(r,s)}})
return P.bn($async$eA,s)},
nd:function(){var t=0,s=P.bi(),r
var $async$nd=P.bo(function(a,b){if(a===1)return P.bl(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cl(A.eA("manifest/manifest.txt",!1,!0,$.w8),$async$nd)
case 2:r.ut=b
return P.bm(null,s)}})
return P.bn($async$nd,s)},
FK:function(a){if(!$.$get$cW().ag(0,a))$.$get$cW().i(0,a,new Y.dS(a,null,H.a([],[[P.f1,,]]),[null]))
return $.$get$cW().B(0,a)},
FL:function(a,b,c){var t
if($.$get$cW().ag(0,a))throw H.m("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.w7(C.b.gbm(a.split("."))).a
t=A.FK(a)
c.be(A.wS(a,!1)).b5(new A.nb(t))
return t.cK(0)},
n8:function(a){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$n8=P.bo(function(b,a0){if(b===1)return P.bl(a0,s)
while(true)switch(t){case 0:t=3
return P.cl(A.eA(a+".bundle",!1,!0,null),$async$n8)
case 3:q=a0
p=C.c.O(a,0,C.c.ek(a,$.$get$wU()))
o=P.d6
n=new P.e_(new P.bk(0,$.aE,null,[o]),[o])
m=H.a([],[P.cG])
for(o=J.yu(q),l=o.length,k=[[P.f1,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bX)(o),++i){h=o[i]
g=J.bK(h)
f=Z.w7(C.b.gbm(J.e3(g.gN(h),"."))).a
e=p+"/"+H.D(g.gN(h))
if($.$get$cW().ag(0,e)){m.push(A.eA(e,!1,!1,null))
continue}d=H.kn(g.gbs(h),"$isd9")
if(!$.$get$cW().ag(0,e))$.$get$cW().i(0,e,new Y.dS(e,null,H.a([],k),j))
c=$.$get$cW().B(0,e)
m.push(c.cK(0))
f.bk(d.buffer).b5(new A.n9(f,c))}P.At(m,null,!1).b5(new A.na(n))
r=n.a
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$n8,s)},
hw:function(a,b){var t=0,s=P.bi(),r,q,p,o,n
var $async$hw=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:if($.$get$us().ag(0,a)){r=$.$get$us().B(0,a)
t=1
break}q=W.fs
p=new P.bk(0,$.aE,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.eS(n,"load",new A.nc(new P.e_(p,[q]),n),!1,W.a6)
n.src=A.wS(a,!1)
r=p
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$hw,s)},
wS:function(a,b){if(C.c.au(a,"/")){a=C.c.aa(a,1)
b=!0}else b=!1
if(b)return H.D(window.location.protocol)+"//"+H.D(window.location.host)+"/"+a
return C.c.aB("../",N.nY())+a},
nb:function nb(a){this.a=a},
n9:function n9(a,b){this.a=a
this.b=b},
na:function na(a){this.a=a},
nc:function nc(a,b){this.a=a
this.b=b},
nT:function nT(){},
jD:function jD(){},
Gs:function(a){var t=new A.hM(null,null)
t.cl(a)
return t},
hM:function hM(a,b){this.a=a
this.b=b},
rQ:function(){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$rQ=P.bo(function(a3,a4){if(a3===1)return P.bl(a4,s)
while(true)switch(t){case 0:if($.y4){t=1
break}$.y4=!0
D.H0()
q=P.C
p=[q]
o=H.a(["metal"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$d().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.an
H.a([],p)
o=new G.bI(n,o,0.6)
$.$get$d().h(0,o)
$.wn=o
o=H.a(["ceramic"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.bR=o
o=H.a(["bone"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.2)
$.$get$d().h(0,o)
$.b9=o
o=H.a(["wood"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.a9=o
o=H.a(["plastic"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.aS=o
o=H.a(["rubber"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.c3=o
o=H.a(["paper"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.M=o
o=H.a(["cloth","fabric"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.R=o
o=H.a(["glass"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.b_=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$d().h(0,o)
$.bZ=o
o=H.a(["flesh","meat","muscle"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$d().h(0,o)
$.bf=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.J
H.a([],p)
o=new G.bI(n,o,3.1)
$.$get$d().h(0,o)
$.bp=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$d().h(0,o)
$.cf=o
o=H.a(["plant","leaf","vine"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$d().h(0,o)
$.b5=o
o=H.a(["feathery"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$d().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,0.1)
$.$get$d().h(0,o)
$.bT=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.K
H.a([],p)
o=new G.bI(n,o,-13)
$.$get$d().h(0,o)
$.bS=o
o=H.a(["stone","rock","concrete"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$d().h(0,o)
$.aD=o
o=H.a(["legendary"],p)
n=$.mM
H.a([],p)
o=new G.bI(n,o,13)
$.$get$d().h(0,o)
$.ac=o
o=H.a(["Unbeatable"],p)
n=$.mM
H.a([],p)
o=new G.bI(n,o,40.37)
$.$get$d().h(0,o)
$.Fr=o
o=$.K
H.a([],p)
o=new G.aX(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$d().h(0,o)
$.aH=o
o=$.ud
H.a([],p)
o=new G.aX(o,["glowing","bright","illuminated"],0.1)
$.$get$d().h(0,o)
$.b0=o
o=$.ud
H.a([],p)
o=new G.aX(o,["obscuring","dark","shadowy"],0.1)
$.$get$d().h(0,o)
$.az=o
o=$.K
H.a([],p)
o=new G.aX(o,["calming","pale","placating","shooshing"],0.1)
$.$get$d().h(0,o)
$.bu=o
o=$.J
H.a([],p)
o=new G.aX(o,["nuclear","radioactive","irradiated"],1)
$.$get$d().h(0,o)
$.c_=o
o=$.K
H.a([],p)
o=new G.aX(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$d().h(0,o)
$.b3=o
o=$.K
H.a([],p)
o=new G.aX(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$d().h(0,o)
$.bF=o
o=$.K
H.a([],p)
o=new G.aX(o,["doomed","cursed","unlucky"],-0.3)
$.$get$d().h(0,o)
$.aM=o
o=$.J
H.a([],p)
o=new G.aX(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$d().h(0,o)
$.aY=o
o=$.t
H.a([],p)
o=new G.aX(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$d().h(0,o)
$.br=o
o=$.t
H.a([],p)
o=new G.aX(o,["electrical","zap","lightning","shock"],0.6)
$.$get$d().h(0,o)
$.ag=o
o=$.t
H.a([],p)
o=new G.aX(o,["restraining","imprisoning","restricting"],0.3)
$.$get$d().h(0,o)
$.bg=o
o=$.K
H.a([],p)
o=new G.aX(o,["expensive","valuable","bling","money"],0.1)
$.$get$d().h(0,o)
$.bc=o
o=$.K
H.a([],p)
o=new G.aX(o,["edible","tasty","delicious","savory"],0.1)
$.$get$d().h(0,o)
$.aF=o
o=$.K
H.a([],p)
o=new G.aX(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$d().h(0,o)
$.ar=o
o=$.K
H.a([],p)
o=new G.aX(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$d().h(0,o)
$.ax=o
o=$.K
H.a([],p)
o=new G.aX(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$d().h(0,o)
$.ad=o
o=$.J
H.a([],p)
o=new G.aX(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$d().h(0,o)
$.aA=o
o=$.K
H.a([],p)
o=new G.aX(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$d().h(0,o)
$.aN=o
o=$.K
H.a([],p)
o=new G.aX(o,["funny","hilarious","comedy"],0.1)
$.$get$d().h(0,o)
$.b8=o
o=$.K
H.a([],p)
o=new G.aX(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$d().h(0,o)
$.bq=o
o=$.K
H.a([],p)
o=new G.aX(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$d().h(0,o)
$.af=o
o=$.mM
H.a([],p)
o=new G.aX(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$d().h(0,o)
$.I=o
o=$.mM
H.a([],p)
o=new G.aX(o,["class-related","appropriate","themed"],1.3)
$.$get$d().h(0,o)
$.Q=o
o=$.K
H.a([],p)
o=new G.aX(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$d().h(0,o)
$.aI=o
o=$.t
H.a([],p)
o=new G.aX(o,["healing","regenerating","recovery","life"],0.3)
$.$get$d().h(0,o)
$.b1=o
o=$.K
H.a([],p)
o=new G.aX(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$d().h(0,o)
$.aJ=o
o=$.K
H.a([],p)
o=new G.aX(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$d().h(0,o)
$.b7=o
o=$.K
H.a([],p)
o=new G.aX(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$d().h(0,o)
$.bM=o
o=$.K
H.a([],p)
o=new G.aX(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$d().h(0,o)
$.bj=o
o=$.K
H.a([],p)
o=new G.aX(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$d().h(0,o)
$.c9=o
o=$.K
H.a([],p)
o=new G.aX(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$d().h(0,o)
$.aG=o
o=$.K
H.a([],p)
o=new G.aX(o,["blunt","bludgeoning","dull"],0.3)
$.$get$d().h(0,o)
$.ao=o
o=$.t
H.a([],p)
o=new G.aX(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$d().h(0,o)
$.b2=o
o=$.K
H.a([],p)
o=new G.aX(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$d().h(0,o)
$.ak=o
o=$.K
H.a([],p)
o=new G.aX(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$d().h(0,o)
$.aR=o
o=$.K
H.a([],p)
o=new G.aX(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$d().h(0,o)
$.av=o
o=$.K
H.a([],p)
o=new G.aX(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$d().h(0,o)
$.aW=o
o=H.a(["perfectly generic"],p)
n=$.K
H.a([],p)
o=new G.as(n,o,0.1)
$.$get$d().h(0,o)
$.fg=o
o=H.a(["a sword"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.eu=o
o=H.a(["a hammer"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.tY=o
o=H.a(["a rifle"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.u8=o
o=H.a(["a pistol"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.u4=o
o=H.a(["a blade"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wg=o
o=H.a(["a dagger"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.tU=o
o=H.a(["a santa"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.ho=o
o=H.a(["a fist"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wp=o
o=H.a(["claws"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.mC=o
o=H.a(["a grenade"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.mF=o
o=H.a(["a freaking safe"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wC=o
o=H.a(["a ball"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.et=o
o=H.a(["a trident"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wL=o
o=H.a(["a card"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.mB=o
o=H.a(["a frying pan"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.tW=o
o=H.a(["a pillow"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.e9=o
o=H.a(["a machinegun"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.u1=o
o=H.a(["a shuriken"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wG=o
o=H.a(["a sling"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wJ=o
o=H.a(["a yoyo"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wN=o
o=H.a(["a cane"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wi=o
o=H.a(["a shield"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.fh=o
o=H.a(["a lance"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wy=o
o=H.a(["a ax"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.tP=o
o=H.a(["a sign"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wB=o
o=H.a(["a book"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.aL=o
o=H.a(["a broom"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.jl=o
o=H.a(["a club"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.jm=o
o=H.a(["a bow"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.tR=o
o=H.a(["a whip"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wM=o
o=H.a(["a staff"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wK=o
o=H.a(["a needle"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.u2=o
o=H.a(["dice"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.tV=o
o=H.a(["a fork"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wq=o
o=H.a(["a pigeon???"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,1.3)
$.$get$d().h(0,o)
$.u3=o
o=H.a(["a chainsaw"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wj=o
o=H.a(["a sickle"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wH=o
o=H.a(["a shotgun"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wE=o
o=H.a(["a stick"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.dj=o
o=H.a(["a chain"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.hn=o
o=H.a(["a wrench"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.ub=o
o=H.a(["a shovel"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wF=o
o=H.a(["a rolling pin"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.ua=o
o=H.a(["a puppet"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.u5=o
o=H.a(["a razor"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.u7=o
o=H.a(["a pen"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.mJ=o
o=H.a(["a bust"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.hm=o
o=H.a(["a bowling ball"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.B6=o
o=H.a(["a golf club"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.ws=o
o=H.a(["a knife"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wx=o
o=H.a(["scissors"],p)
n=$.ai
H.a([],p)
o=new G.as(n,o,0.4)
$.$get$d().h(0,o)
$.wD=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.J
m=G.a7
l=[m]
k=H.a([$.E,$.aH,$.aY],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$d().h(0,o)
$.Co=o
o=H.a([],p)
n=$.x
k=H.a([$.ao,$.aH],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.BV=o
o=H.a(["fossilized"],p)
n=$.J
k=H.a([$.b9,$.aD],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$d().h(0,o)
$.Cp=o
o=H.a(["adamantium"],p)
n=$.J
k=H.a([$.b9,$.E],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$d().h(0,o)
$.wf=o
o=H.a([],p)
n=$.x
k=H.a([$.b7,$.aJ],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.F0=o
o=H.a(["tatami"],p)
n=$.x
k=H.a([$.R,$.a9],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$d().h(0,o)
$.Ff=o
o=H.a(["mesh","chain link"],p)
n=$.x
k=H.a([$.R,$.E],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$d().h(0,o)
$.Do=o
o=H.a(["foil"],p)
n=$.x
k=H.a([$.M,$.E],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$d().h(0,o)
$.Ck=o
o=H.a(["beanbag"],p)
n=$.x
k=H.a([$.R,$.aD],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$d().h(0,o)
$.B2=o
o=H.a(["pleather","faux fur"],p)
n=$.x
k=H.a([$.cf,$.aS],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$d().h(0,o)
$.DZ=o
o=H.a(["plywood"],p)
n=$.x
k=H.a([$.a9,$.M],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$d().h(0,o)
$.jn=o
o=H.a(["colossus"],p)
n=$.x
k=H.a([$.E,$.bf],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$d().h(0,o)
$.wk=o
o=H.a(["rotting","zombie"],p)
n=$.J
k=H.a([$.bT,$.bf],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$d().h(0,o)
$.Eo=o
o=H.a(["draugr","white walker"],p)
n=$.J
k=H.a([$.bT,$.bf,$.bj],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$d().h(0,o)
$.BS=o
o=H.a(["Ultraviolet"],p)
n=$.uc
k=H.a([$.b0,$.az],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$d().h(0,o)
$.D7=o
o=H.a(["Ultraviolence"],p)
n=$.t
k=H.a([$.b0,$.az,$.aH],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$d().h(0,o)
$.Fq=o
o=H.a([],p)
n=$.t
k=H.a([$.aM,$.bF],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.BQ=o
o=H.a(["candy"],p)
n=$.x
k=H.a([$.aF,$.b_],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$d().h(0,o)
$.tS=o
o=H.a(["cotton candy"],p)
n=$.x
k=H.a([$.aF,$.R],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$d().h(0,o)
$.BB=o
o=H.a(["gummy"],p)
n=$.x
k=H.a([$.aF,$.c3],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$d().h(0,o)
$.CB=o
o=H.a(["marrow"],p)
n=$.x
k=H.a([$.aF,$.b9],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$d().h(0,o)
$.Dh=o
o=H.a(["toothy"],p)
n=$.ai
k=H.a([$.b9,$.bR],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$d().h(0,o)
$.Fn=o
o=H.a(["Frost"],p)
n=$.x
k=H.a([$.aD,$.b_,$.bf],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$d().h(0,o)
$.Cq=o
o=H.a(["arsenic","antifreeze"],p)
n=$.t
k=H.a([$.aF,$.bM],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$d().h(0,o)
$.BZ=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.x
k=H.a([$.aD,$.b_],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$d().h(0,o)
$.mD=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.K
k=H.a([$.aI,$.aN,$.b8,$.ad,$.ar,$.bF,$.af],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$d().h(0,o)
$.Di=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.K
k=H.a([$.b3,$.az,$.aH,$.ac,$.aM,$.ad,$.ar,$.ax],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$d().h(0,o)
$.BX=o
o=H.a(["deadpool"],p)
n=$.ai
k=H.a([$.bT,$.b1,$.ax,$.b8],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$d().h(0,o)
$.BH=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.K
k=H.a([$.b3,$.ax],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$d().h(0,o)
$.F3=o
o=H.a(["wolverine"],p)
n=$.ai
k=H.a([$.b9,$.aH,$.aY],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$d().h(0,o)
$.FC=o
o=H.a(["rabbit's foot"],p)
n=$.ai
k=H.a([$.bF,$.cf],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$d().h(0,o)
$.u6=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.J
k=H.a([$.aY,$.a9],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$d().h(0,o)
$.AW=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.ai
k=H.a([$.aY,$.b2,$.a9],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$d().h(0,o)
$.tO=o
o=H.a(["training sword","bokken"],p)
n=$.ai
k=H.a([$.a9,$.aH],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$d().h(0,o)
$.D0=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.av,$.ax],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$d().h(0,o)
$.u_=o
o=H.a(["netted","webbed"],p)
n=$.ai
k=H.a([$.bg,$.R],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$d().h(0,o)
$.DD=o
o=H.a(["barbed wire"],p)
n=$.ai
k=H.a([$.aY,$.bg,$.E,$.R],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$d().h(0,o)
$.B_=o
o=H.a(["morning star"],p)
n=$.ai
k=H.a([$.aY,$.ao],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$d().h(0,o)
$.Dx=o
o=H.a(["decadent"],p)
n=$.K
k=H.a([$.b7,$.bc],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$d().h(0,o)
$.BK=o
o=H.a(["SBAHJ"],p)
n=$.t
k=H.a([$.bS,$.ax],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$d().h(0,o)
$.Ey=o
o=H.a(["bayonet"],p)
n=$.ai
k=H.a([$.aY,$.b2],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$d().h(0,o)
$.B1=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.x
k=H.a([$.bj,$.ax,$.aH],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$d().h(0,o)
$.F_=o
o=H.a(["light saber"],p)
n=$.t
k=H.a([$.b0,$.aG,$.aH],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$d().h(0,o)
$.D6=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.K
k=H.a([$.af,$.av],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$d().h(0,o)
$.C5=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.K
k=H.a([$.af,$.aW],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$d().h(0,o)
$.Ei=o
o=H.a(["skeletal"],p)
n=$.ai
k=H.a([$.b3,$.aM,$.b9],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$d().h(0,o)
$.EU=o
o=H.a(["green sun"],p)
n=$.ud
k=H.a([$.aG,$.c_,$.b0],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$d().h(0,o)
$.mE=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uc
k=H.a([$.az,$.ar],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$d().h(0,o)
$.Ds=o
o=H.a(["radiant","dazzling"],p)
n=$.K
k=H.a([$.af,$.b0],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$d().h(0,o)
$.Ef=o
o=H.a(["edgy"],p)
n=$.K
k=H.a([$.aH,$.az,$.ax],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$d().h(0,o)
$.BY=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.t
k=H.a([$.c_,$.br],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$d().h(0,o)
$.AP=o
o=H.a(["living"],p)
n=$.J
k=H.a([$.b9,$.bf,$.aA],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$d().h(0,o)
$.Da=o
o=H.a(["dead","corpse","deceased"],p)
n=$.J
k=H.a([$.b9,$.bf],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$d().h(0,o)
$.BG=o
o=H.a(["taser"],p)
n=$.t
k=H.a([$.ag,$.bg,$.b2],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$d().h(0,o)
$.Fe=o
o=H.a(["nocturn"],p)
n=$.t
k=H.a([$.az,$.ak],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$d().h(0,o)
$.DG=o
o=H.a(["dirge"],p)
n=$.t
k=H.a([$.aM,$.ak],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$d().h(0,o)
$.BN=o
o=H.a(["Snobbish","Noble"],p)
n=$.K
k=H.a([$.ar,$.bc],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$d().h(0,o)
$.EZ=o
o=H.a(["flat"],p)
n=$.K
k=H.a([$.ao,$.ak],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$d().h(0,o)
$.Cf=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.aH,$.ak],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$d().h(0,o)
$.EH=o
o=H.a(["sharp"],p)
n=$.K
k=H.a([$.ar,$.ak],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$d().h(0,o)
$.EG=o
o=H.a(["Bach's"],p)
n=$.an
k=H.a([$.ad,$.ak],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$d().h(0,o)
$.AY=o
o=H.a(["Mozart's"],p)
n=$.an
k=H.a([$.af,$.ak],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$d().h(0,o)
$.Dz=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.an
k=H.a([$.ad,$.c_],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$d().h(0,o)
$.C_=o
o=H.a(["Feynman's"],p)
n=$.an
k=H.a([$.ad,$.b8],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$d().h(0,o)
$.C9=o
o=H.a(["Ziptie"],p)
n=$.an
k=H.a([$.aS,$.bg],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$d().h(0,o)
$.FG=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.t
k=H.a([$.E,$.ad],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$d().h(0,o)
$.hp=o
o=H.a(["Sassacre"],p)
n=$.an
k=H.a([$.c9,$.b8],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$d().h(0,o)
$.Ew=o
o=H.a(["Sledge"],p)
n=$.t
k=H.a([$.ao,$.c9],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$d().h(0,o)
$.EX=o
o=H.a(["Legal"],p)
n=$.t
k=H.a([$.bg,$.M],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$d().h(0,o)
$.mH=o
o=H.a(["Clown"],p)
n=$.t
k=H.a([$.b8,$.aR],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$d().h(0,o)
$.Bv=o
o=H.a(["passionate"],p)
n=$.K
k=H.a([$.aG,$.aN],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$d().h(0,o)
$.DQ=o
o=H.a(["pinata"],p)
n=$.ai
k=H.a([$.M,$.aF],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$d().h(0,o)
$.DU=o
o=H.a(["anvil"],p)
n=$.t
k=H.a([$.ao,$.c9,$.E],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$d().h(0,o)
$.AV=o
o=H.a(["flashbang"],p)
n=$.t
k=H.a([$.b0,$.br],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$d().h(0,o)
$.Ce=o
o=H.a(["smokebomb"],p)
n=$.t
k=H.a([$.az,$.br],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$d().h(0,o)
$.EY=o
o=H.a(["ninja"],p)
n=$.t
k=H.a([$.az,$.aH],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$d().h(0,o)
$.DF=o
o=H.a(["techno"],p)
n=$.t
k=H.a([$.ag,$.ak],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$d().h(0,o)
$.Fh=o
o=H.a(["rock and roll"],p)
n=$.t
k=H.a([$.aD,$.ak],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$d().h(0,o)
$.Ek=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.ai
k=H.a([$.aA,$.bf,$.b2],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$d().h(0,o)
$.DV=o
o=H.a(["juggalo"],p)
n=$.t
k=H.a([$.b8,$.ak,$.aR,$.b3],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$d().h(0,o)
$.ww=o
o=H.a(["shocksauce"],p)
n=$.K
k=H.a([$.ax,$.ag],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$d().h(0,o)
$.EK=o
o=H.a(["weaksauce"],p)
n=$.K
k=H.a([$.ao,$.ax,$.bS],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$d().h(0,o)
$.Fw=o
o=H.a(["spicy","picante"],p)
n=$.K
k=H.a([$.aG,$.aF],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$d().h(0,o)
$.F2=o
o=H.a(["ice cream","popsicle"],p)
n=$.x
k=H.a([$.bj,$.aF],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$d().h(0,o)
$.CO=o
o=H.a(["popsickle"],p)
n=$.x
k=H.a([$.bj,$.aF,$.aH],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$d().h(0,o)
$.E6=o
o=H.a(["icepick"],p)
n=$.x
k=H.a([$.bj,$.aY],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$d().h(0,o)
$.CP=o
o=H.a(["schezwan"],p)
n=$.K
k=H.a([$.ax,$.aF],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$d().h(0,o)
$.Ez=o
o=H.a(["vaporwave"],p)
n=$.t
k=H.a([$.az,$.ak,$.ax,$.ag],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$d().h(0,o)
$.Fu=o
o=H.a(["mallet"],p)
n=$.ai
k=H.a([$.a9,$.ao],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$d().h(0,o)
$.Dg=o
o=H.a(["fidget"],p)
n=$.t
k=H.a([$.aS,$.ax],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$d().h(0,o)
$.Cb=o
o=H.a(["gold foil"],p)
n=$.x
k=H.a([$.E,$.M,$.bc],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$d().h(0,o)
$.Cy=o
o=H.a(["caviar"],p)
n=$.x
k=H.a([$.aF,$.bc],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$d().h(0,o)
$.Bm=o
o=H.a(["RADioactive"],p)
n=$.K
k=H.a([$.c_,$.ax],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$d().h(0,o)
$.Eg=o
o=H.a(["glam"],p)
n=$.K
k=H.a([$.aD,$.ak,$.aI],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$d().h(0,o)
$.Cw=o
o=H.a(["hair metal"],p)
n=$.K
k=H.a([$.E,$.ak,$.aI],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$d().h(0,o)
$.CD=o
o=H.a(["elven","fae","sylvan"],p)
n=$.K
k=H.a([$.af,$.aI],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$d().h(0,o)
$.C1=o
o=H.a(["shiny"],p)
n=$.K
k=H.a([$.E,$.aI],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$d().h(0,o)
$.EJ=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.K
k=H.a([$.bc,$.aI,$.ar],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$d().h(0,o)
$.ff=o
o=H.a(["operatic"],p)
n=$.K
k=H.a([$.bc,$.ak,$.ar],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$d().h(0,o)
$.DK=o
o=H.a(["ice","diamond"],p)
n=$.x
k=H.a([$.bc,$.bj],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$d().h(0,o)
$.wu=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.K
k=H.a([$.aG,$.bj],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$d().h(0,o)
$.CQ=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.K
k=H.a([$.ax,$.bj],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$d().h(0,o)
$.wv=o
o=H.a(["winter's","season's"],p)
n=$.an
k=H.a([$.bu,$.bj],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$d().h(0,o)
$.Fz=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.an
k=H.a([$.af,$.bj],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$d().h(0,o)
$.Br=o
o=H.a(["Santa Saws"],p)
n=$.an
k=H.a([$.af,$.bj,$.aH],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$d().h(0,o)
$.Eu=o
o=H.a(["Santa Sleighs"],p)
n=$.an
k=H.a([$.ho,$.aH],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$d().h(0,o)
$.Ev=o
o=H.a(["Santa Claws"],p)
n=$.an
k=H.a([$.ho,$.mC],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$d().h(0,o)
$.Et=o
o=H.a(["Sandy Claws"],p)
n=$.an
k=H.a([$.ho,$.mC,$.aD],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$d().h(0,o)
$.Es=o
o=H.a(["Silent Night"],p)
n=$.an
k=H.a([$.ho,$.az],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$d().h(0,o)
$.EQ=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.an
k=H.a([$.b3,$.bZ],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$d().h(0,o)
$.CE=o
o=H.a(["ghoul","mutant"],p)
n=$.x
k=H.a([$.bf,$.c_,$.bT],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$d().h(0,o)
$.DA=o
o=H.a(["skate","skateboard"],p)
n=$.t
k=H.a([$.ax,$.E],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$d().h(0,o)
$.ET=o
o=H.a(["microwave"],p)
n=$.t
k=H.a([$.c_,$.ag,$.aF],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$d().h(0,o)
$.Dr=o
o=H.a(["orbital"],p)
n=$.t
k=H.a([$.c_,$.ag,$.aF,$.b2],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$d().h(0,o)
$.DL=o
o=H.a([],p)
n=$.t
k=H.a([$.ao,$.ad],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.wm=o
o=H.a(["uranium"],p)
n=$.x
k=H.a([$.c_,$.aD],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$d().h(0,o)
$.Ft=o
o=H.a(["mousepad","jar opener"],p)
n=$.t
k=H.a([$.M,$.c3],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$d().h(0,o)
$.Dy=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aH,$.aD],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$d().h(0,o)
$.Ch=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aY,$.aD],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$d().h(0,o)
$.Ci=o
o=H.a(["picnic"],p)
n=$.t
k=H.a([$.aS,$.aY],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$d().h(0,o)
$.DT=o
o=H.a(["xtreme xplosion"],p)
n=$.K
k=H.a([$.ax,$.br],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$d().h(0,o)
$.FF=o
o=H.a(["lawn"],p)
n=$.t
k=H.a([$.aS,$.b7],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$d().h(0,o)
$.D4=o
o=H.a(["upholstered"],p)
n=$.x
k=H.a([$.R,$.b7],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$d().h(0,o)
$.Fs=o
o=H.a(["leather"],p)
n=$.x
k=H.a([$.bf,$.b7],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$d().h(0,o)
$.u0=o
o=H.a(["shag"],p)
n=$.x
k=H.a([$.cf,$.b7],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$d().h(0,o)
$.EF=o
o=H.a(["loyal"],p)
n=$.K
k=H.a([$.ao,$.aN],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$d().h(0,o)
$.De=o
o=H.a(["porcelain"],p)
n=$.x
k=H.a([$.aI,$.bR],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$d().h(0,o)
$.jo=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.ai
k=H.a([$.bc,$.bR],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$d().h(0,o)
$.E8=o
o=H.a(["n1nj4","katana"],p)
n=$.t
k=H.a([$.ax,$.aH],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$d().h(0,o)
$.CZ=o
o=H.a(["chocolate"],p)
n=$.x
k=H.a([$.aN,$.aF],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$d().h(0,o)
$.Bq=o
o=H.a(["wrapped chocolate"],p)
n=$.x
k=H.a([$.aN,$.aF,$.M,$.E],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$d().h(0,o)
$.Cl=o
o=H.a(["scratch-n-sniff"],p)
n=$.x
k=H.a([$.ax,$.M],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$d().h(0,o)
$.EB=o
o=H.a(["mythril","orichalcum"],p)
n=$.x
k=H.a([$.af,$.E],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$d().h(0,o)
$.DB=o
o=H.a(["titanium","steel"],p)
n=$.x
k=H.a([$.ao,$.E],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$d().h(0,o)
$.Fm=o
o=H.a(["lead"],p)
n=$.x
k=H.a([$.c9,$.E],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$d().h(0,o)
$.wz=o
o=H.a(["satire","parody","onion"],p)
n=$.t
k=H.a([$.av,$.b8],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$d().h(0,o)
$.DJ=o
o=H.a(["comedy gold"],p)
n=$.K
k=H.a([$.bc,$.b8],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$d().h(0,o)
$.Bx=o
o=H.a(["dry","sensible chuckle"],p)
n=$.K
k=H.a([$.ar,$.b8],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$d().h(0,o)
$.BT=o
o=H.a(["polite"],p)
n=$.K
k=H.a([$.b7,$.av],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$d().h(0,o)
$.E4=o
o=H.a(["stradivarius"],p)
n=$.an
k=H.a([$.ar,$.bc,$.a9,$.ak],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$d().h(0,o)
$.F9=o
o=H.a(["scientistic"],p)
n=$.K
k=H.a([$.ad,$.av],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$d().h(0,o)
$.EA=o
o=H.a(["AI"],p)
n=$.t
k=H.a([$.ag,$.aA],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$d().h(0,o)
$.mz=o
o=H.a(["robotic"],p)
n=$.J
k=H.a([$.E,$.ag,$.aA],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$d().h(0,o)
$.u9=o
o=H.a(["shrapnel"],p)
n=$.t
k=H.a([$.a9,$.br],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$d().h(0,o)
$.EM=o
o=H.a(["vocaloid"],p)
n=$.t
k=H.a([$.aA,$.ag,$.ak],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$d().h(0,o)
$.Fv=o
o=H.a(["*Hyun-ae"],p)
n=$.an
k=H.a([$.aA,$.ag,$.aN],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$d().h(0,o)
$.CN=o
o=H.a(["buckshot"],p)
n=$.t
k=H.a([$.a9,$.b2],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$d().h(0,o)
$.Ba=o
o=H.a(["cannon"],p)
n=$.t
k=H.a([$.c9,$.b2],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$d().h(0,o)
$.Bj=o
o=H.a(["stationary"],p)
n=$.t
k=H.a([$.ar,$.M],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$d().h(0,o)
$.F7=o
o=H.a([],p)
n=$.t
k=H.a([$.aL,$.M],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.DN=o
o=H.a([],p)
n=$.t
k=H.a([$.E,$.b2],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.Dp=o
o=H.a(["papercut"],p)
n=$.t
k=H.a([$.aH,$.M],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$d().h(0,o)
$.DO=o
o=H.a(["squeaky"],p)
n=$.J
k=H.a([$.ao,$.c3],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$d().h(0,o)
$.F4=o
o=H.a(["kazoo"],p)
n=$.t
k=H.a([$.av,$.ak],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$d().h(0,o)
$.D_=o
o=H.a(["bandaid"],p)
n=$.t
k=H.a([$.b1,$.M],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$d().h(0,o)
$.AZ=o
o=H.a(["gushers"],p)
n=$.t
k=H.a([$.b1,$.aF],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$d().h(0,o)
$.CC=o
o=H.a(["medic"],p)
n=$.t
k=H.a([$.b1,$.b2],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$d().h(0,o)
$.Dn=o
o=H.a(["sick nasty","ill"],p)
n=$.J
k=H.a([$.ax,$.bM],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$d().h(0,o)
$.EO=o
o=H.a(["gilded","gold leaf"],p)
n=$.x
k=H.a([$.E,$.a9],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$d().h(0,o)
$.Cv=o
o=H.a(["charging","power cord"],p)
n=$.t
k=H.a([$.aS,$.ag],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$d().h(0,o)
$.Bp=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.c3,$.aH],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$d().h(0,o)
$.Eq=o
o=H.a(["safety"],p)
n=$.t
k=H.a([$.aS,$.aH],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$d().h(0,o)
$.Er=o
o=H.a(["thunderous","thor's"],p)
n=$.K
k=H.a([$.aR,$.ag],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$d().h(0,o)
$.Fk=o
o=H.a(["screeching","dial up"],p)
n=$.K
k=H.a([$.aR,$.ag,$.ad],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$d().h(0,o)
$.ED=o
o=H.a(["mirrored","reflective"],p)
n=$.t
k=H.a([$.b_,$.E],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$d().h(0,o)
$.mI=o
o=H.a(["far seeing","sighted"],p)
n=$.t
k=H.a([$.b_,$.aD,$.af],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$d().h(0,o)
$.wl=o
o=H.a(["disabling","non lethal"],p)
n=$.t
k=H.a([$.c3,$.b2],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$d().h(0,o)
$.BO=o
o=H.a(["fashionable"],p)
n=$.t
k=H.a([$.aI,$.ar],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$d().h(0,o)
$.wo=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.b8,$.ax],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$d().h(0,o)
$.CU=o
o=H.a(["ironic"],p)
n=$.K
k=H.a([$.bS,$.b8],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$d().h(0,o)
$.mG=o
o=H.a(["post-ironic"],p)
n=$.K
k=H.a([$.av,$.ax,$.ar],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$d().h(0,o)
$.Ea=o
o=H.a(["monstrous"],p)
n=$.K
k=H.a([$.bT,$.aR,$.b3],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$d().h(0,o)
$.Dw=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.t
k=H.a([$.b2,$.ax,$.ar],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$d().h(0,o)
$.Em=o
o=H.a(["golden"],p)
n=$.x
k=H.a([$.E,$.bc],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$d().h(0,o)
$.tX=o
o=H.a(["platinum"],p)
n=$.x
k=H.a([$.b0,$.E],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$d().h(0,o)
$.mK=o
o=H.a(["horseshoe"],p)
n=$.t
k=H.a([$.bF,$.E],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$d().h(0,o)
$.tZ=o
o=H.a(["felt"],p)
n=$.t
k=H.a([$.R,$.cf],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$d().h(0,o)
$.C7=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aD,$.ar],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$d().h(0,o)
$.wA=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aD,$.c9],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$d().h(0,o)
$.CA=o
o=H.a(["glitched"],p)
n=$.J
k=H.a([$.bp,$.ag],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$d().h(0,o)
$.wr=o
o=H.a(["debugging"],p)
n=$.t
k=H.a([$.b1,$.ag],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$d().h(0,o)
$.BJ=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.t
k=H.a([$.E,$.aR,$.ak],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$d().h(0,o)
$.Dq=o
o=H.a(["Simulacrum"],p)
n=$.K
k=H.a([$.aA,$.av],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$d().h(0,o)
$.ES=o
o=H.a(["Imitation"],p)
n=$.t
k=H.a([$.aF,$.av],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$d().h(0,o)
$.CR=o
o=H.a(["Placebo"],p)
n=$.t
k=H.a([$.b1,$.av],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$d().h(0,o)
$.DX=o
o=H.a(["counterfeit"],p)
n=$.t
k=H.a([$.bc,$.av],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$d().h(0,o)
$.BC=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.ax,$.aJ,$.b8],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$d().h(0,o)
$.Fb=o
o=H.a(["Brainy"],p)
n=$.K
k=H.a([$.ad,$.bf],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$d().h(0,o)
$.B7=o
o=H.a(["Incendiary"],p)
n=$.t
k=H.a([$.aG,$.br],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$d().h(0,o)
$.CS=o
o=H.a(["C-4"],p)
n=$.x
k=H.a([$.br,$.aS],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$d().h(0,o)
$.Be=o
o=H.a(["fae"],p)
n=$.t
k=H.a([$.af,$.b0,$.bp],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$d().h(0,o)
$.C4=o
o=H.a(["Plutonium"],p)
n=$.x
k=H.a([$.E,$.c_],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$d().h(0,o)
$.E0=o
o=H.a(["Lithium"],p)
n=$.x
k=H.a([$.E,$.ag],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$d().h(0,o)
$.D9=o
o=H.a(["Molten"],p)
n=$.x
k=H.a([$.E,$.aG],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$d().h(0,o)
$.Dv=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.x
k=H.a([$.aD,$.aG],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$d().h(0,o)
$.Df=o
o=H.a(["Rusty"],p)
n=$.J
k=H.a([$.E,$.bS],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$d().h(0,o)
$.Ep=o
o=H.a(["Fonzie"],p)
n=$.t
k=H.a([$.aH,$.ax,$.ar],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$d().h(0,o)
$.Cm=o
o=H.a(["Romcom"],p)
n=$.t
k=H.a([$.aN,$.b8],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$d().h(0,o)
$.El=o
o=H.a(["Alluring"],p)
n=$.t
k=H.a([$.aI,$.b0],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$d().h(0,o)
$.AS=o
o=H.a(["Masquerade"],p)
n=$.t
k=H.a([$.aI,$.az],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$d().h(0,o)
$.Dj=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.t
k=H.a([$.aD,$.bf],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$d().h(0,o)
$.F8=o
o=H.a(["Psionic"],p)
n=$.t
k=H.a([$.af,$.ad],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$d().h(0,o)
$.Ed=o
o=H.a(["Dwarven"],p)
n=$.t
k=H.a([$.af,$.aD],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$d().h(0,o)
$.BW=o
o=H.a(["Elemental","Animated"],p)
n=$.x
k=H.a([$.af,$.aA],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$d().h(0,o)
$.C0=o
o=H.a(["Gourmet"],p)
n=$.K
k=H.a([$.aF,$.ar],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$d().h(0,o)
$.Cz=o
o=H.a(["Stained Glass"],p)
n=$.x
k=H.a([$.b_,$.aI,$.bc],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$d().h(0,o)
$.F5=o
o=H.a(["Gauze"],p)
n=$.t
k=H.a([$.b1,$.R],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$d().h(0,o)
$.Cs=o
o=H.a(["Locked"],p)
n=$.J
k=H.a([$.bg,$.bq],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$d().h(0,o)
$.Db=o
o=H.a(["Etched"],p)
n=$.t
k=H.a([$.aD,$.M],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$d().h(0,o)
$.C3=o
o=H.a(["Papyrus"],p)
n=$.x
k=H.a([$.M,$.b5],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$d().h(0,o)
$.DP=o
o=H.a(["film"],p)
n=$.t
k=H.a([$.M,$.aS],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$d().h(0,o)
$.Cc=o
o=H.a(["Saucey"],p)
n=$.x
k=H.a([$.bp,$.bq,$.bT],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$d().h(0,o)
$.Ex=o
o=H.a(["Lottery"],p)
n=$.t
k=H.a([$.M,$.bF],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$d().h(0,o)
$.Dd=o
o=H.a(["Blindfolded"],p)
n=$.t
k=H.a([$.az,$.R],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$d().h(0,o)
$.wh=o
o=H.a(["Possessed"],p)
n=$.J
k=H.a([$.bZ,$.bf],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$d().h(0,o)
$.E9=o
o=H.a(["Infernal"],p)
n=$.K
k=H.a([$.bZ,$.aG],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$d().h(0,o)
$.CT=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.t
k=H.a([$.a9,$.aW,$.u5,$.aA],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$d().h(0,o)
$.Ct=o
o=H.a(["Abominable"],p)
n=$.K
k=H.a([$.bf,$.bp],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$d().h(0,o)
$.AQ=o
o=H.a(["Ashen"],p)
n=$.t
k=H.a([$.aN,$.aM],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$d().h(0,o)
$.AX=o
o=H.a(["Pale"],p)
n=$.t
k=H.a([$.aN,$.bu],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$d().h(0,o)
$.DM=o
o=H.a(["Pitch"],p)
n=$.t
k=H.a([$.aN,$.bq],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$d().h(0,o)
$.DW=o
o=H.a(["Lit"],p)
n=$.K
k=H.a([$.ax,$.aG],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$d().h(0,o)
$.D8=o
o=H.a(["Hypnotizing"],p)
n=$.t
k=H.a([$.af,$.bu],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$d().h(0,o)
$.CL=o
o=H.a(["Tranquilizing"],p)
n=$.t
k=H.a([$.bu,$.bg],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$d().h(0,o)
$.Fp=o
o=H.a([],p)
n=$.t
k=H.a([$.bu,$.bq],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$d().h(0,o)
$.Bh=o
o=H.a(["Ghost Rider's"],p)
n=$.an
k=H.a([$.hn,$.aG,$.bZ],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$d().h(0,o)
$.Cu=o
o=H.a(["Logical"],p)
n=$.K
k=H.a([$.ad,$.bj],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$d().h(0,o)
$.Dc=o
o=H.a(["Duelist's"],p)
n=$.an
k=H.a([$.b2,$.ar],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$d().h(0,o)
$.BU=o
o=H.a(["Silenced"],p)
n=$.J
k=H.a([$.b2,$.az],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$d().h(0,o)
$.wI=o
o=H.a(["Deudly"],p)
n=$.J
k=H.a([$.b2,$.bS],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$d().h(0,o)
$.BI=o
o=H.a(["Screaming"],p)
n=$.J
k=H.a([$.aR,$.b3],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$d().h(0,o)
$.EC=o
o=H.a(["Cacophonous"],p)
n=$.K
k=H.a([$.bT,$.ak],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$d().h(0,o)
$.Bf=o
o=H.a(["Sublime"],p)
n=$.K
k=H.a([$.bT,$.aI],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$d().h(0,o)
$.Fa=o
o=H.a(["Masterwork"],p)
n=$.x
k=H.a([$.aW,$.bc],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$d().h(0,o)
$.Dl=o
o=H.a(["BroodFester"],p)
n=$.t
k=H.a([$.aA,$.b3,$.bp,$.af],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$d().h(0,o)
$.B9=o
o=H.a(["[REDACTED]"],p)
n=$.t
k=H.a([$.bp,$.az],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$d().h(0,o)
$.Ej=o
o=H.a(["Pop Rocks"],p)
n=$.t
k=H.a([$.aF,$.br],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$d().h(0,o)
$.E5=o
o=H.a(["Disguised"],p)
n=$.J
k=H.a([$.az,$.av],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$d().h(0,o)
$.BP=o
o=H.a(["Haunted"],p)
n=$.J
k=H.a([$.aJ,$.bZ],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$d().h(0,o)
$.CF=o
o=H.a(["Cognitohazardous"],p)
n=$.J
k=H.a([$.bp,$.ad],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$d().h(0,o)
$.Bw=o
o=H.a(["Staticy"],p)
n=$.J
k=H.a([$.aJ,$.ag],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$d().h(0,o)
$.F6=o
o=H.a(["Jadite"],p)
n=$.t
k=H.a([$.b_,$.c_],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$d().h(0,o)
$.CX=o
o=H.a(["Tickling"],p)
n=$.t
k=H.a([$.b8,$.aJ],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$d().h(0,o)
$.Fl=o
o=H.a(["Composite"],p)
n=$.t
k=H.a([$.E,$.bR],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$d().h(0,o)
$.By=o
o=H.a(["High-Powered"],p)
n=$.J
k=H.a([$.br,$.b2],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$d().h(0,o)
$.CG=o
o=H.a(["Concussive"],p)
n=$.t
k=H.a([$.br,$.ao],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$d().h(0,o)
$.Bz=o
o=H.a(["Down"],p)
n=$.x
k=H.a([$.b7,$.bz],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$d().h(0,o)
$.BR=o
o=H.a(["Prickly"],p)
n=$.x
k=H.a([$.aJ,$.aY],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$d().h(0,o)
$.Ec=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.t
k=H.a([$.aJ,$.az,$.ag],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$d().h(0,o)
$.BL=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.x
k=H.a([$.aY,$.aH],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$d().h(0,o)
$.CY=o
o=H.a(["Nanofiber"],p)
n=$.x
k=H.a([$.R,$.ad],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$d().h(0,o)
$.DC=o
o=H.a(["Clanging"],p)
n=$.t
k=H.a([$.E,$.aR],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$d().h(0,o)
$.Bs=o
o=H.a(["Silver"],p)
n=$.x
k=H.a([$.E,$.ar],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$d().h(0,o)
$.ER=o
o=H.a(["Withered"],p)
n=$.J
k=H.a([$.aM,$.b5],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$d().h(0,o)
$.FB=o
o=H.a(["Shattered"],p)
n=$.J
k=H.a([$.b_,$.bS],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$d().h(0,o)
$.EI=o
o=H.a(["Miner's"],p)
n=$.an
k=H.a([$.aD,$.E],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$d().h(0,o)
$.Dt=o
o=H.a(["Singing"],p)
n=$.t
k=H.a([$.ak,$.aA],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$d().h(0,o)
$.EP=o
o=H.a(["Mitochondrial"],p)
n=$.t
k=H.a([$.bf,$.ag],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$d().h(0,o)
$.Du=o
o=H.a(["Blackout","EMP"],p)
n=$.t
k=H.a([$.az,$.ag],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$d().h(0,o)
$.B4=o
o=H.a(["Asbestos"],p)
n=$.x
k=H.a([$.aD,$.bM],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$d().h(0,o)
$.AR=o
o=H.a(["Mercurial"],p)
n=$.x
k=H.a([$.bM,$.E],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$d().h(0,o)
$.Dm=o
o=H.a(["Bulletproof"],p)
n=$.x
k=H.a([$.R,$.ao],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$d().h(0,o)
$.Bc=o
o=H.a(["Cotton"],p)
n=$.x
k=H.a([$.b5,$.R],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$d().h(0,o)
$.BA=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.t
k=H.a([$.bq,$.b0],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$d().h(0,o)
$.B5=o
o=H.a(["Brilliant"],p)
n=$.K
k=H.a([$.b0,$.ad],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$d().h(0,o)
$.B8=o
o=H.a(["Offensive"],p)
n=$.K
k=H.a([$.bq,$.ad],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$d().h(0,o)
$.DI=o
o=H.a(["Poached"],p)
n=$.J
k=H.a([$.bf,$.bc],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$d().h(0,o)
$.E1=o
o=H.a(["Tapestry"],p)
n=$.x
k=H.a([$.R,$.aI],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$d().h(0,o)
$.Fd=o
o=H.a(["Itchy"],p)
n=$.K
k=H.a([$.R,$.aJ],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$d().h(0,o)
$.CV=o
o=H.a(["Wishbone"],p)
n=$.x
k=H.a([$.bF,$.b9],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$d().h(0,o)
$.FA=o
o=H.a(["Rattling"],p)
n=$.J
k=H.a([$.aR,$.b9],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$d().h(0,o)
$.Eh=o
o=H.a(["Cranial"],p)
n=$.x
k=H.a([$.ad,$.b9],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$d().h(0,o)
$.BE=o
o=H.a(["Humerus"],p)
n=$.x
k=H.a([$.b8,$.b9],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$d().h(0,o)
$.CJ=o
o=H.a(["Massage"],p)
n=$.t
k=H.a([$.b1,$.b7],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$d().h(0,o)
$.Dk=o
o=H.a(["Pestersome","Irksome"],p)
n=$.K
k=H.a([$.aR,$.bq],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$d().h(0,o)
$.DR=o
o=H.a(["Shockwave"],p)
n=$.t
k=H.a([$.aR,$.br],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$d().h(0,o)
$.EL=o
o=H.a(["Antivenom"],p)
n=$.t
k=H.a([$.bM,$.b1],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$d().h(0,o)
$.AU=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.x
k=H.a([$.aG,$.af],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$d().h(0,o)
$.Fx=o
o=H.a(["Fiberglass"],p)
n=$.x
k=H.a([$.R,$.b_],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$d().h(0,o)
$.Ca=o
o=H.a(["Skull"],p)
n=$.x
k=H.a([$.b9,$.b3],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$d().h(0,o)
$.EV=o
o=H.a(["Enchanted"],p)
n=$.J
k=H.a([$.af,$.bF],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$d().h(0,o)
$.C2=o
o=H.a(["Berserker's"],p)
n=$.an
k=H.a([$.af,$.bq],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$d().h(0,o)
$.B3=o
o=H.a(["Clerical"],p)
n=$.an
k=H.a([$.af,$.b1],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$d().h(0,o)
$.Bt=o
o=H.a(["Cauterizing"],p)
n=$.t
k=H.a([$.b1,$.aG],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$d().h(0,o)
$.Bl=o
o=H.a(["X-Ray"],p)
n=$.t
k=H.a([$.c_,$.b0],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$d().h(0,o)
$.FE=o
o=H.a(["Clever"],p)
n=$.K
k=H.a([$.ad,$.bF],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$d().h(0,o)
$.Bu=o
o=H.a(["Fireplace"],p)
n=$.t
k=H.a([$.b7,$.aG],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$d().h(0,o)
$.Cd=o
o=H.a(["Crackling"],p)
n=$.J
k=H.a([$.aR,$.aG],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$d().h(0,o)
$.BD=o
o=H.a(["Thumping"],p)
n=$.J
k=H.a([$.aR,$.c9],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$d().h(0,o)
$.Fj=o
o=H.a(["Shrieking","Banshee"],p)
n=$.J
k=H.a([$.bZ,$.aR],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$d().h(0,o)
$.EN=o
o=H.a(["Surreal"],p)
n=$.K
k=H.a([$.b8,$.bp],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$d().h(0,o)
$.Fc=o
o=H.a(["Aloe","Willowbark"],p)
n=$.t
k=H.a([$.b1,$.b5],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$d().h(0,o)
$.AT=o
o=H.a(["Rose"],p)
n=$.t
k=H.a([$.aN,$.b5],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$d().h(0,o)
$.En=o
o=H.a(["Knock Knock"],p)
n=$.t
k=H.a([$.b8,$.ao],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$d().h(0,o)
$.D2=o
o=H.a(["Lifesteal"],p)
n=$.t
k=H.a([$.af,$.bM],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$d().h(0,o)
$.D5=o
o=H.a(["Tragic"],p)
n=$.t
k=H.a([$.aI,$.aM],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$d().h(0,o)
$.Fo=o
o=H.a(["Slapstick"],p)
n=$.t
k=H.a([$.aH,$.b8],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$d().h(0,o)
$.EW=o
o=H.a(["Gross Out"],p)
n=$.t
k=H.a([$.bT,$.b8],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$d().h(0,o)
$.wt=o
o=H.a(["Flowery"],p)
n=$.x
k=H.a([$.aI,$.b5],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$d().h(0,o)
$.Cj=o
o=H.a(["Poison Ivy"],p)
n=$.x
k=H.a([$.bM,$.b5],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$d().h(0,o)
$.E3=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.J
k=H.a([$.af,$.bz],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$d().h(0,o)
$.Fy=o
o=H.a(["Forbidden Fruit"],p)
n=$.t
k=H.a([$.b5,$.aF,$.aM],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$d().h(0,o)
$.Cn=o
o=H.a(["Lawful"],p)
n=$.K
k=H.a([$.bg,$.aA],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$d().h(0,o)
$.D3=o
o=H.a(["Chaotic"],p)
n=$.K
k=H.a([$.bq,$.aA],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$d().h(0,o)
$.tT=o
o=H.a(["Hypothermic"],p)
n=$.J
k=H.a([$.aM,$.bj],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$d().h(0,o)
$.CM=o
o=H.a(["Hyperthermic"],p)
n=$.J
k=H.a([$.aM,$.aG],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$d().h(0,o)
$.CK=o
o=H.a(["Shackled"],p)
n=$.J
k=H.a([$.bg,$.c9],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$d().h(0,o)
$.EE=o
o=H.a(["Poetic"],p)
n=$.K
k=H.a([$.ad,$.aN],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$d().h(0,o)
$.E2=o
o=H.a(["Holographic"],p)
n=$.x
k=H.a([$.b0,$.ad,$.b_,$.ag],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$d().h(0,o)
$.CH=o
o=H.a(["Casket","Coffin"],p)
n=$.x
k=H.a([$.a9,$.aM],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$d().h(0,o)
$.Bk=o
o=H.a(["Spectral"],p)
n=$.x
k=H.a([$.bZ,$.af],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$d().h(0,o)
$.F1=o
o=H.a(["Phoenix"],p)
n=$.x
k=H.a([$.aG,$.bz],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$d().h(0,o)
$.DS=o
o=H.a(["Tattered"],p)
n=$.J
k=H.a([$.R,$.aM],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$d().h(0,o)
$.Fg=o
o=H.a(["Woodwind","Reed"],p)
n=$.t
k=H.a([$.ak,$.a9],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$d().h(0,o)
$.FD=o
o=H.a(["Bone Hurting"],p)
n=$.t
k=H.a([$.aJ,$.b9],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$d().h(0,o)
$.mA=o
o=H.a(["Bone Healing:"],p)
n=$.t
k=H.a([$.b1,$.b9],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$d().h(0,o)
$.tQ=o
o=H.a(["Calcium"],p)
n=$.x
k=H.a([$.b9,$.b1,$.aF],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$d().h(0,o)
$.Bg=o
o=H.a(["Fleece"],p)
n=$.x
k=H.a([$.R,$.aG],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$d().h(0,o)
$.Cg=o
o=H.a(["Potted"],p)
n=$.x
k=H.a([$.bR,$.b5],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$d().h(0,o)
$.Eb=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.x
k=H.a([$.E,$.aF],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$d().h(0,o)
$.Bi=o
o=H.a(["Diseased"],p)
n=$.J
k=H.a([$.aM,$.bf],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$d().h(0,o)
$.BM=o
o=H.a(["Porcupine"],p)
n=$.x
k=H.a([$.aY,$.cf],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$d().h(0,o)
$.E7=o
o=H.a(["Fanged"],p)
n=$.J
k=H.a([$.b9,$.aY],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$d().h(0,o)
$.C6=o
o=H.a(["Basalt"],p)
n=$.x
k=H.a([$.aD,$.az],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$d().h(0,o)
$.B0=o
o=H.a(["Obsidian"],p)
n=$.x
k=H.a([$.b_,$.az],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$d().h(0,o)
$.DH=o
o=H.a(["Fenestrated"],p)
n=$.x
k=H.a([$.b_,$.a9],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$d().h(0,o)
$.C8=o
o=H.a(["Plexiglass"],p)
n=$.x
k=H.a([$.b_,$.aS],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$d().h(0,o)
$.E_=o
o=H.a(["Ceramic Wrap"],p)
n=$.t
k=H.a([$.bR,$.M],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$d().h(0,o)
$.Bo=o
o=H.a(["Fungal"],p)
n=$.x
k=H.a([$.b5,$.bT],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$d().h(0,o)
$.Cr=o
o=H.a(["Thorny"],p)
n=$.J
k=H.a([$.b5,$.aY],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$d().h(0,o)
$.Fi=o
o=H.a(["Bulbed"],p)
n=$.J
k=H.a([$.b5,$.ao],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$d().h(0,o)
$.Bb=o
o=H.a(["Glass Cannon"],p)
n=$.t
k=H.a([$.b_,$.b2],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$d().h(0,o)
$.Cx=o
o=H.a(["Caoutchouc"],p)
n=$.t
k=H.a([$.b5,$.c3],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$d().h(0,o)
$.DY=o
o=H.a(["Cellulose"],p)
n=$.x
k=H.a([$.b5,$.aS],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$d().h(0,o)
$.Bn=o
o=H.a(["Horrorcore"],p)
n=$.t
k=H.a([$.ak,$.b3],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$d().h(0,o)
$.CI=o
o=H.a(["Nightcore"],p)
n=$.t
k=H.a([$.bp,$.ak],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$d().h(0,o)
$.DE=o
o=H.a(["Crazy Bus"],p)
n=$.t
k=H.a([$.bp,$.ag,$.ak],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$d().h(0,o)
$.BF=o
o=H.a(["Burdock"],p)
n=$.x
k=H.a([$.b5,$.cf],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$d().h(0,o)
$.Bd=o
o=H.a(["Necrotic"],p)
n=$.J
k=H.a([$.b9,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.x
k=H.a([$.b9,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.J
k=H.a([$.b9,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.t
k=H.a([$.b9,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.x
k=H.a([$.b9,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.t
k=H.a([$.b9,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.K
k=H.a([$.a9,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.x
k=H.a([$.a9,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.x
k=H.a([$.a9,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.J
k=H.a([$.a9,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.x
k=H.a([$.a9,$.bc],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.x
k=H.a([$.a9,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.t
k=H.a([$.a9,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.x
k=H.a([$.a9,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.t
k=H.a([$.a9,$.bF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.t
k=H.a([$.a9,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.an
k=H.a([$.a9,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.x
k=H.a([$.a9,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.x
k=H.a([$.a9,$.bp],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.x
k=H.a([$.a9,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.t
k=H.a([$.a9,$.aD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.x
k=H.a([$.aS,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.t
k=H.a([$.M,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.x
k=H.a([$.M,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.t
k=H.a([$.M,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.t
k=H.a([$.R,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.x
k=H.a([$.aD,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.t
k=H.a([$.aD,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.x
k=H.a([$.aD,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.x
k=H.a([$.aD,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.x
k=H.a([$.aD,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.x
k=H.a([$.aD,$.bj],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.x
k=H.a([$.aD,$.br],l)
H.a([],p)
$.$get$d().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.x
k=H.a([$.aD,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.J
k=H.a([$.aD,$.cf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.J
k=H.a([$.ad,$.b_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.J
k=H.a([$.R,$.bf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.t
k=H.a([$.R,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.K
k=H.a([$.R,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.t
k=H.a([$.R,$.aH],l)
H.a([],p)
$.$get$d().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.t
k=H.a([$.R,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.K
k=H.a([$.R,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.J
k=H.a([$.R,$.c9],l)
H.a([],p)
$.$get$d().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.K
k=H.a([$.R,$.bF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.K
k=H.a([$.R,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.x
k=H.a([$.R,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.x
k=H.a([$.R,$.bj],l)
H.a([],p)
$.$get$d().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.t
k=H.a([$.R,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.x
k=H.a([$.R,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.x
k=H.a([$.R,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.x
k=H.a([$.R,$.bc],l)
H.a([],p)
$.$get$d().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.x
k=H.a([$.R,$.bq],l)
H.a([],p)
$.$get$d().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.R,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.x
k=H.a([$.R,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.R,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.x
k=H.a([$.R,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.x
k=H.a([$.R,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.an
k=H.a([$.ad,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.x
k=H.a([$.af,$.a9],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.x
k=H.a([$.b5,$.b2],l)
H.a([],p)
$.$get$d().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.x
k=H.a([$.aS,$.a9],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.x
k=H.a([$.Q,$.I],l)
H.a([],p)
$.$get$d().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.K
k=H.a([$.ad,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.K
k=H.a([$.aW,$.av,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.x
k=H.a([$.bp,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.t
k=H.a([$.bp,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.an
k=H.a([$.bp,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.an
k=H.a([$.ac,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.an
k=H.a([$.ad,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.x
k=H.a([$.ac,$.aS,$.bu,$.ao],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.t
k=H.a([$.ac,$.dj,$.a9,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.an
k=H.a([$.az,$.af,$.aW,$.aJ,$.b3],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$d().h(0,o)
$.Ee=o
o=H.a(["Kingly"],p)
n=$.an
k=H.a([$.b3,$.ao,$.c9,$.af,$.aW],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$d().h(0,o)
$.D1=o
o=H.a(["Jack"],p)
n=$.an
k=H.a([$.aY,$.aH,$.E,$.az],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$d().h(0,o)
$.CW=o
o=H.a(["Codpiece","Codtier"],p)
n=$.t
k=H.a([$.ac,$.av,$.a9,$.Q,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.t
k=H.a([$.ac,$.aL,$.M,$.E,$.ad,$.Q],l)
H.a([],p)
$.$get$d().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.t
k=H.a([$.ac,$.aL,$.M,$.ad,$.Q,$.bj],l)
H.a([],p)
$.$get$d().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.t
k=H.a([$.ac,$.aM,$.M,$.ad,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.an
k=H.a([$.ac,$.b0,$.E,$.aY,$.aH,$.eu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.an
k=H.a([$.ac,$.M,$.bq,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.an
k=H.a([$.ac,$.af,$.R,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.an
k=H.a([$.ac,$.aJ,$.b9,$.E,$.fh,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.an
k=H.a([$.ac,$.aD,$.ar,$.hm,$.ao],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.J
k=H.a([$.ac,$.R,$.bc,$.aI,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.t
k=H.a([$.ac,$.E,$.bc,$.aI,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.t
k=H.a([$.ac,$.aS,$.ag,$.az,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.t
k=H.a([$.ac,$.R,$.ad,$.af,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.t
k=H.a([$.ac,$.R,$.ad,$.aI,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.J
k=$.ac
j=$.M
i=$.ad
i=H.a([k,j,i,$.aL,i,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.x
i=H.a([$.ac,$.aI,$.bR,$.ao,$.et,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.an
i=H.a([$.ac,$.aL,$.M,$.bq,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.an
i=H.a([$.af,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.t
i=H.a([$.M,$.ad,$.aL],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.t
i=H.a([$.ac,$.E,$.az,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.J
i=H.a([$.ac,$.E,$.b_,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.t
i=H.a([$.ac,$.av,$.a9,$.ax,$.bu,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.t
i=H.a([$.ac,$.aG,$.E,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.t
i=H.a([$.ac,$.ag,$.M,$.aL,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.t
i=H.a([$.ac,$.a9,$.aA,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.an
i=H.a([$.ac,$.aW,$.bz,$.b0,$.ak,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.x
i=H.a([$.ac,$.b1,$.b_,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.x
i=H.a([$.ac,$.b0,$.bF,$.aD,$.b_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.an
i=H.a([$.ac,$.aJ,$.aD,$.ar,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.an
i=H.a([$.ac,$.aF,$.bq,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.an
i=H.a([$.ac,$.E,$.ak,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.K
i=H.a([$.ac,$.b_,$.c_,$.b0,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.x
i=H.a([$.E,$.bp],l)
H.a([],p)
$.$get$d().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.an
i=H.a([$.E,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.x
i=H.a([$.E,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.x
i=H.a([$.E,$.bj],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.J
i=H.a([$.E,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.J
i=H.a([$.E,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.x
i=H.a([$.E,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.x
i=H.a([$.bR,$.aD],l)
H.a([],p)
$.$get$d().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.x
i=H.a([$.bR,$.c3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.K
i=H.a([$.bR,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.x
i=H.a([$.bR,$.ao],l)
H.a([],p)
$.$get$d().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.x
i=H.a([$.bR,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.x
i=H.a([$.bR,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.x
i=H.a([$.bR,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.J
i=H.a([$.bR,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.x
i=H.a([$.bR,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.J
i=H.a([$.bR,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.K
i=H.a([$.bS,$.M],l)
H.a([],p)
$.$get$d().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.J
i=H.a([$.bS,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.K
i=H.a([$.bS,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.J
i=H.a([$.bS,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.x
i=H.a([$.bS,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.J
i=H.a([$.bS,$.bc],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.an
i=H.a([$.bS,$.bq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.x
i=H.a([$.bS,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.x
i=H.a([$.bS,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.x
i=H.a([$.bS,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.an
i=H.a([$.a9,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.x
i=H.a([$.a9,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.x
i=H.a([$.a9,$.c3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.x
i=H.a([$.aS,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.t
i=H.a([$.c3,$.bu],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.J
i=H.a([$.c3,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.t
i=H.a([$.c3,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.t
i=H.a([$.M,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.t
i=H.a([$.M,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.x
i=H.a([$.aD,$.bp],l)
H.a([],p)
$.$get$d().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.x
i=H.a([$.aD,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.K
i=H.a([$.aD,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.K
i=H.a([$.bZ,$.bp],l)
H.a([],p)
$.$get$d().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.x
i=H.a([$.bZ,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.K
i=H.a([$.bZ,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.x
i=H.a([$.bZ,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.x
i=H.a([$.bZ,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.x
i=H.a([$.bZ,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.K
i=H.a([$.bZ,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.x
i=H.a([$.bf,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.x
i=H.a([$.bf,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.x
i=H.a([$.bf,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.J
i=H.a([$.bf,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.t
i=H.a([$.bp,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.x
i=H.a([$.bp,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.J
i=H.a([$.bp,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.t
i=H.a([$.bp,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.J
i=H.a([$.cf,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.x
i=H.a([$.cf,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.an
i=H.a([$.cf,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.x
i=H.a([$.cf,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.x
i=H.a([$.b5,$.bz],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.J
i=H.a([$.b5,$.bF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.x
i=H.a([$.b5,$.az],l)
H.a([],p)
$.$get$d().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.x
i=H.a([$.b5,$.br],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.x
i=H.a([$.b5,$.bc],l)
H.a([],p)
$.$get$d().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.x
i=H.a([$.b5,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.x
i=H.a([$.b5,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.J
i=H.a([$.b5,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.J
i=H.a([$.bz,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.x
i=H.a([$.bz,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.x
i=H.a([$.bz,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.x
i=H.a([$.bz,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.x
i=H.a([$.bz,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.x
i=H.a([$.bz,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.x
i=H.a([$.bz,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.uc
i=H.a([$.bz,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.J
i=H.a([$.bz,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.K
i=H.a([$.bT,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.t
i=H.a([$.aH,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.t
i=H.a([$.aH,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.K
i=H.a([$.b3,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.t
i=H.a([$.b1,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.K
i=H.a([$.aF,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.x
i=H.a([$.aF,$.aY],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.K
i=H.a([$.aF,$.ao],l)
H.a([],p)
$.$get$d().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.t
i=H.a([$.c9,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.t
i=H.a([$.c9,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.t
i=H.a([$.b2,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.t
i=H.a([$.b2,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.an
i=H.a([$.b2,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.an
i=H.a([$.b2,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.J
i=H.a([$.b2,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.J
i=H.a([$.b2,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.an
i=H.a([$.b2,$.bq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.t
i=H.a([$.b2,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.t
i=H.a([$.b2,$.c_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.t
i=H.a([$.b2,$.b0],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.J
i=H.a([$.b2,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.x
i=H.a([$.b0,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.x
i=H.a([$.ak,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.x
i=H.a([$.bF,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.x
i=H.a([$.bF,$.bc],l)
H.a([],p)
$.$get$d().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.an
i=H.a([$.bF,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.an
i=H.a([$.b0,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.J
i=H.a([$.b0,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.K
i=H.a([$.b0,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.J
i=H.a([$.b0,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.an
i=H.a([$.az,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.t
i=H.a([$.az,$.af,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.J
i=H.a([$.az,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.K
i=H.a([$.az,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.t
i=H.a([$.az,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.an
i=H.a([$.az,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.an
i=H.a([$.bu,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.t
i=H.a([$.bu,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.t
i=H.a([$.bu,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.t
i=H.a([$.b1,$.c_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.J
i=H.a([$.bM,$.c_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.J
i=H.a([$.aM,$.c_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.t
i=H.a([$.aM,$.br],l)
H.a([],p)
$.$get$d().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.J
i=H.a([$.ag,$.aM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.t
i=H.a([$.aM,$.bc],l)
H.a([],p)
$.$get$d().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.J
i=H.a([$.aM,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.K
i=H.a([$.aM,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.t
i=H.a([$.br,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.t
i=H.a([$.br,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.t
i=H.a([$.br,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.t
i=H.a([$.aM,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.t
i=H.a([$.br,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.t
i=H.a([$.ag,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.t
i=H.a([$.br,$.bq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.t
i=H.a([$.br,$.ak],l)
H.a([],p)
$.$get$d().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.J
i=H.a([$.br,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.t
i=H.a([$.br,$.bj],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.t
i=H.a([$.bj,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.t
i=H.a([$.af,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.J
i=H.a([$.ag,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.t
i=H.a([$.bq,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.t
i=H.a([$.bM,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.t
i=H.a([$.bM,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.t
i=H.a([$.bM,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.J
i=H.a([$.bM,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.J
i=H.a([$.bM,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.t
i=H.a([$.bM,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.J
i=H.a([$.ak,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.t
i=H.a([$.ak,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.t
i=H.a([$.ak,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.t
i=H.a([$.ak,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.an
i=H.a([$.ak,$.bg],l)
H.a([],p)
$.$get$d().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.t
i=H.a([$.ak,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.t
i=H.a([$.ak,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.t
i=H.a([$.ak,$.bq],l)
H.a([],p)
$.$get$d().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.t
i=H.a([$.ak,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.t
i=H.a([$.bq,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.t
i=H.a([$.bq,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.an
i=H.a([$.ad,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.t
i=H.a([$.bg,$.b1],l)
H.a([],p)
$.$get$d().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.t
i=H.a([$.bg,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.t
i=H.a([$.bg,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.J
i=H.a([$.bg,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.K
i=H.a([$.aI,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.J
i=H.a([$.b7,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.t
i=H.a([$.b7,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.K
i=H.a([$.aF,$.b7],l)
H.a([],p)
$.$get$d().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.K
i=H.a([$.aN,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.K
i=H.a([$.aN,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.J
i=H.a([$.aA,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.ad,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.t
i=H.a([$.ad,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.t
i=H.a([$.aA,$.aF],l)
H.a([],p)
$.$get$d().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.an
i=H.a([$.aN,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.J
i=H.a([$.ad,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.J
i=H.a([$.aN,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.J
i=H.a([$.aN,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.J
i=H.a([$.aN,$.aR,$.aL,$.jm],l)
H.a([],p)
$.$get$d().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.J
i=H.a([$.aF,$.b8],l)
H.a([],p)
$.$get$d().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.J
i=H.a([$.aF,$.af],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.J
i=H.a([$.aF,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.J
i=H.a([$.af,$.ar],l)
H.a([],p)
$.$get$d().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.J
i=H.a([$.aF,$.b8,$.ag,$.aR],l)
H.a([],p)
$.$get$d().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.x
i=H.a([$.E,$.bZ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.t
i=H.a([$.b9,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.J
i=H.a([$.bS,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.t
i=H.a([$.a9,$.ad],l)
H.a([],p)
$.$get$d().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.t
i=H.a([$.aS,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.J
i=H.a([$.c3,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.x
i=H.a([$.M,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.J
i=H.a([$.M,$.b_],l)
H.a([],p)
$.$get$d().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.an
i=H.a([$.b_,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.J
i=H.a([$.bf,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.J
i=H.a([$.aG,$.bp],l)
H.a([],p)
$.$get$d().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.x
i=H.a([$.aN,$.cf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.an
i=H.a([$.b5,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.J
i=H.a([$.b1,$.bT],l)
H.a([],p)
$.$get$d().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.K
i=H.a([$.aW,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.an
i=H.a([$.bF,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.J
i=H.a([$.az,$.aG],l)
H.a([],p)
$.$get$d().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.J
i=H.a([$.aG,$.ag],l)
H.a([],p)
$.$get$d().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.J
i=H.a([$.aG,$.bM],l)
H.a([],p)
$.$get$d().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.J
i=H.a([$.aG,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.J
i=H.a([$.aM,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.J
i=H.a([$.bc,$.aI],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.J
i=H.a([$.bc,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.J
i=H.a([$.bc,$.ax],l)
H.a([],p)
$.$get$d().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.J
i=H.a([$.aJ,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.J
i=H.a([$.aR,$.aA],l)
H.a([],p)
$.$get$d().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.J
i=H.a([$.aN,$.av],l)
H.a([],p)
$.$get$d().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.J
i=H.a([$.af,$.aN],l)
H.a([],p)
$.$get$d().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.J
i=H.a([$.Q,$.I,$.aW],l)
H.a([],p)
$.$get$d().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.J
i=H.a([$.Q,$.I,$.aW,$.av,$.R],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.J
i=H.a([$.Q,$.I,$.aW,$.cf],l)
H.a([],p)
$.$get$d().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.J
i=H.a([$.aD,$.bS],l)
H.a([],p)
$.$get$d().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.J
i=H.a([$.bz,$.bS],l)
H.a([],p)
$.$get$d().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.J
i=H.a([$.b5,$.b3],l)
H.a([],p)
$.$get$d().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.J
i=H.a([$.af,$.b5],l)
H.a([],p)
$.$get$d().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.J
i=H.a([$.b3,$.aJ],l)
H.a([],p)
$.$get$d().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.J
l=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$d().h(0,new G.e("Chipped",l,n,o,0))
if($.xa==null){o=$.mC
n=$.aY
l=$.aH
k=$.b9
j=new U.au(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.aj(null,null,null,m),0,3)
j.P("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.xa=j}o=$.$get$aB();(o&&C.b).sv(o,0)
o=$.$get$aB()
n=$.R
l=$.wt
k=new U.au(n,null,null,null,"Speedo",!1,P.aj(null,null,null,m),0,3)
k.P("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$aB()
o=$.eu
n=$.aH
l=$.E
j=$.aY
i=new U.au(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.aj(null,null,null,m),0,3)
i.P("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.tY
o=$.ao
j=$.E
l=new U.au(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.aj(null,null,null,m),0,3)
l.P("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$aB()
i=$.u8
k=$.b2
j=$.E
o=new U.au(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.aj(null,null,null,m),0,3)
o.P("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$aB()
l=$.u4
i=$.b2
j=$.E
k=new U.au(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.aj(null,null,null,m),0,3)
k.P("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$aB()
o=$.wE
l=$.b2
j=$.E
i=new U.au(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.aj(null,null,null,m),0,3)
i.P("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$aB()
k=$.wg
o=$.aY
j=$.aH
l=$.E
n=new U.au(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.aj(null,null,null,m),0,3)
n.P("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$aB()
i=$.tU
k=$.aY
l=$.aH
j=$.E
o=new U.au(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.aj(null,null,null,m),0,3)
o.P("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.ho
i=$.ao
j=$.bR
l=new U.au(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.aj(null,null,null,m),0,3)
l.P("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.wH
n=$.aH
j=$.E
i=new U.au(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.aj(null,null,null,m),0,3)
i.P("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$aB()
l=$.wj
o=$.aH
j=$.E
n=new U.au(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.aj(null,null,null,m),0,3)
n.P("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$aB()
i=$.wq
l=$.aY
j=$.E
o=new U.au(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.aj(null,null,null,m),0,3)
o.P("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$aB()
n=$.u3
i=$.bz
j=$.bp
l=new U.au(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.aj(null,null,null,m),0,3)
l.P("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$aB()
o=$.et
n=$.c9
j=$.aD
i=$.ao
k=new U.au(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.aj(null,null,null,m),0,3)
k.P("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tV
o=$.aS
i=$.bF
j=new U.au(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.aj(null,null,null,m),0,3)
j.P("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$aB()
k=$.u2
l=$.E
i=$.aY
o=new U.au(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.aj(null,null,null,m),0,3)
o.P("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$aB()
j=$.wK
k=$.a9
i=$.ao
l=new U.au(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.aj(null,null,null,m),0,3)
l.P("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$aB()
o=$.wM
j=$.bg
i=$.R
k=new U.au(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.aj(null,null,null,m),0,3)
k.P("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$aB()
l=$.tR
o=$.b2
i=$.aD
j=$.R
n=$.aY
h=new U.au(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.aj(null,null,null,m),0,3)
h.P("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$aB()
k=$.jm
l=$.a9
n=$.ao
j=new U.au(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.aj(null,null,null,m),0,3)
j.P("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$aB()
h=$.jl
k=$.a9
n=new U.au(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.aj(null,null,null,m),0,3)
n.P("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$aB()
j=$.aL
h=$.M
k=$.ao
l=new U.au(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.aj(null,null,null,m),0,3)
l.P("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$aB()
n=$.wB
j=$.E
k=$.ao
h=new U.au(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.aj(null,null,null,m),0,3)
h.P("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$aB()
l=$.tP
n=$.aH
k=$.E
j=$.ao
i=new U.au(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.aj(null,null,null,m),0,3)
i.P("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wy
l=$.a9
j=$.aY
k=new U.au(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.aj(null,null,null,m),0,3)
k.P("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.fh
h=$.E
j=$.ao
l=new U.au(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.aj(null,null,null,m),0,3)
l.P("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.wi
i=$.a9
j=$.ao
h=new U.au(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.aj(null,null,null,m),0,3)
h.P("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wN
k=$.aS
j=$.ao
i=new U.au(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.aj(null,null,null,m),0,3)
i.P("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wJ
l=$.a9
j=$.b2
k=new U.au(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.aj(null,null,null,m),0,3)
k.P("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wG
h=$.E
j=$.aH
l=new U.au(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.aj(null,null,null,m),0,3)
l.P("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.u1
i=$.E
j=$.b2
h=new U.au(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.aj(null,null,null,m),0,3)
h.P("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mF
k=$.E
j=$.br
i=new U.au(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.aj(null,null,null,m),0,3)
i.P("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.et
l=$.c3
j=$.ao
k=new U.au(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.aj(null,null,null,m),0,3)
k.P("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.wL
h=$.E
j=$.aY
l=new U.au(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.aj(null,null,null,m),0,3)
l.P("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.mB
i=$.M
j=$.aH
h=new U.au(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.aj(null,null,null,m),0,3)
h.P("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.tW
k=$.E
j=$.ao
i=new U.au(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.aj(null,null,null,m),0,3)
i.P("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.e9
l=$.b7
j=$.R
k=new U.au(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.aj(null,null,null,m),0,3)
k.P("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.hn
h=$.E
j=$.bg
l=new U.au(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.aj(null,null,null,m),0,3)
l.P("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.ub
i=$.E
j=$.ao
h=new U.au(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.aj(null,null,null,m),0,3)
h.P("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wF
k=$.E
j=$.ao
i=new U.au(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.aj(null,null,null,m),0,3)
i.P("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.ua
l=$.a9
j=$.ao
k=new U.au(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.aj(null,null,null,m),0,3)
k.P("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.u5
h=$.a9
j=$.aM
l=new U.au(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.aj(null,null,null,m),0,3)
l.P("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.u7
i=$.E
j=$.aH
h=new U.au(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.aj(null,null,null,m),0,3)
h.P("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.mJ
k=$.E
j=$.ad
i=new U.au(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.aj(null,null,null,m),0,3)
i.P("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.hm
l=$.aD
j=$.c9
k=new U.au(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.aj(null,null,null,m),0,3)
k.P("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.ws
h=$.a9
j=$.ao
l=new U.au(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.aj(null,null,null,m),0,3)
l.P("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$aB()
k=$.wx
i=$.E
j=$.aH
h=new U.au(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.aj(null,null,null,m),0,3)
h.P("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$aB()
l=$.wD
k=$.E
j=$.aH
i=new U.au(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.aj(null,null,null,m),0,3)
i.P("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$aB()
h=$.wC
l=$.E
j=$.c9
k=new U.au(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.aj(null,null,null,m),0,3)
k.P("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$aB()
i=$.dj
h=$.a9
j=$.ao
m=new U.au(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.aj(null,null,null,m),0,3)
m.P("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bH("Duttle","Dut",null,null)
$.$get$bP().push(m)
$.w1=m
m=new S.bH("Salamander","GLUB",null,null)
$.$get$bP().push(m)
$.tE=m
m=new S.bH("Crocodile","NAK",null,null)
$.$get$bP().push(m)
$.e6=m
m=new S.bH("Iguana","thip",null,null)
$.$get$bP().push(m)
$.ep=m
m=new S.bH("Turtle","click",null,null)
$.$get$bP().push(m)
$.f8=m
m=new S.bH("Skeleton","rattle",null,null)
$.$get$bP().push(m)
$.dR=m
m=new S.bH("Robot","BEEP",null,null)
$.$get$bP().push(m)
$.f6=m
m=new S.bH("Chameleon","BLEP",null,null)
$.$get$bP().push(m)
$.iu=m
m=new S.bH("Axolotl","BARP",null,null)
$.$get$bP().push(m)
$.ty=m
m=new S.bH("Lizard","bleb",null,null)
$.$get$bP().push(m)
$.lQ=m
m=new S.bH("Snake","hiss",null,null)
$.$get$bP().push(m)
$.tG=m
m=new S.bH("Alligator","nak",null,null)
$.$get$bP().push(m)
$.is=m
m=new S.bH("Mole","snuff",null,null)
$.$get$bP().push(m)
$.w2=m
m=new S.bH("Bird","tweet",null,null)
$.$get$bP().push(m)
$.lO=m
m=new S.bH("Wolf","howl",null,null)
$.$get$bP().push(m)
$.lW=m
m=new S.bH("Newt","skitter",null,null)
$.$get$bP().push(m)
$.w3=m
m=new S.bH("Spider","skitter",null,null)
$.$get$bP().push(m)
$.lV=m
m=new S.bH("Cupid","flappa",null,null)
$.$get$bP().push(m)
$.iv=m
m=new S.bH("Dragon","roar",null,null)
$.$get$bP().push(m)
$.ha=m
m=new S.ic("Prospitian","murmur",null,null)
$.$get$bP().push(m)
$.Ae=m
m=new S.ic("Dersite","mutter",null,null)
$.$get$bP().push(m)
$.Ab=m
m=new S.mj("Horror Terror","a;lkjdf",null,null)
$.$get$bP().push(m)
$.Ad=m
$.Af=H.a([$.tG,$.is,$.w3,$.tE,$.ep,$.e6,$.f8,$.iu,$.ty,$.lQ],[S.bH])
$.hf=new T.c4(0,"spices")
m=$.Ah
$.f3=new T.c4(m,"fresh baked bread")
$.cz=new T.c4(m,"sweetness")
$.c7=new T.c4(m,"nature")
$.lU=new T.c4(0,"salt")
k=$.Ag
$.d4=new T.c4(k,"rot")
$.Ac=new T.c4(k,"feet")
$.er=new T.c4(0,"oil")
$.tA=new T.c4(0,"chlorine")
$.hd=new T.c4(0,"nothing in particular")
$.eo=new T.c4(0,"gunpowder")
$.hc=new T.c4(0,"must")
$.cF=new T.c4(m,"zoo animals")
$.e7=new T.c4(k,"sweat")
$.iA=new T.c4(0,"ozone")
$.c6=new T.c4(0,"deceit")
$.cO=new T.c4(k,"blood")
$.f7=new T.c4(k,"smoke")
$.c1=new K.bY(k,"creepy")
$.b4=new K.bY(m,"calm")
$.co=new K.bY(k,"frantic")
$.lR=new K.bY(0,"like nothing")
$.bQ=new K.bY(m,"energizing")
$.cE=new K.bY(0,"studious")
$.dy=new K.bY(0,"dangerous")
$.dP=new K.bY(0,"glamorous")
$.he=new K.bY(0,"romantic")
$.en=new K.bY(m,"creative")
$.iz=new K.bY(0,"lucky")
$.dz=new K.bY(0,"happy")
$.dQ=new K.bY(0,"heroic")
$.di=new K.bY(k,"stupid")
$.iz=new K.bY(0,"lucky")
$.lP=new K.bY(0,"claustrophobic")
$.lS=new K.bY(0,"overheated")
$.em=new K.bY(k,"confusing")
$.cd=new K.bY(0,"contemplatative")
$.cV=new M.bB(0,"clanking")
$.cC=new M.bB(0,"laughing")
$.be=new M.bB(m,"rustling")
$.es=new M.bB(k,"screaming")
$.ix=new M.bB(k,"foot steps")
$.f4=new M.bB(k,"beeping")
$.w5=new M.bB(k,"whispering")
$.f5=new M.bB(0,"clacking")
$.cB=new M.bB(0,"applause")
$.eq=new M.bB(0,"jazz")
$.tC=new M.bB(0,"disco")
$.hb=new M.bB(0,"drums")
$.iw=new M.bB(0,"echoing")
$.lT=new M.bB(k,"roaring")
$.iy=new M.bB(k,"gunfire")
$.cD=new M.bB(0,"music")
$.tF=new M.bB(0,"singing")
$.tz=new M.bB(0,"chanting")
$.f9=new M.bB(0,"whistling")
$.dg=new M.bB(m,"nature")
$.tB=new M.bB(0,"croaking")
$.dh=new M.bB(0,"silence")
$.tD=new M.bB(0,"pulsing")
$.w4=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.H,P.a4]
n=A.a8
l=E.G
k=[l]
j=[A.fS]
m=new S.mY(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.q(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Knight",3,!0,!1,!1)
$.GD=m
m=P.f(H.a([new E.G($.bW,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oB(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.q(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Seer",6,!0,!1,!1)
$.GQ=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kF("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.q(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Bard",9,!0,!1,!1)
$.Gx=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mf("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.q(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Heir",8,!0,!1,!1)
$.GA=m
m=H.a([],p)
m=new U.ni(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.q(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Maid",0,!0,!1,!1)
$.GG=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.on(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.q(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Rogue",4,!0,!1,!1)
$.GL=m
m=H.a([],p)
m=new V.nS(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.q(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Page",1,!0,!1,!1)
$.GJ=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.py(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.q(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Thief",7,!0,!1,!1)
$.GT=m
m=P.f(H.a([new E.G($.bW,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pl(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.q(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Sylph",5,!0,!1,!1)
$.GS=m
m=H.a([],p)
m=new N.oa("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.q(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Prince",10,!0,!1,!1)
$.GK=m
m=P.f(H.a([new E.G($.bW,0.1,!1)],k),l)
i=H.a([],p)
m=new M.q1("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.q(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Witch",11,!0,!1,!1)
$.GV=m
m=P.f(H.a([new E.G($.bW,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nh("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.q(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Mage",2,!0,!1,!1)
$.GF=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.G($.bW,3,!1),new E.G($.oV,-2,!1)],k),l)
e=H.a([],p)
m=new E.pY("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.q(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Waste",12,!1,!1,!1)
$.GU=m
m=H.a([],p)
m=new Y.ox("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.q(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Scout",13,!1,!1,!1)
$.GO=m
m=P.f(H.a([new E.G($.bW,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oy("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.q(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Scribe",15,!1,!1,!1)
$.GP=m
m=P.f(H.a([new E.G($.bW,0.5,!1)],k),l)
i=H.a([],p)
m=new E.ot(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.q(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Sage",14,!1,!1,!1)
$.GM=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.mc("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.q(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Guide",16,!1,!1,!1)
$.Gz=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.G($.bW,3,!1)],k),l)
g=H.a([],p)
m=new Y.mb(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.q(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Grace",17,!1,!1,!1)
$.Gy=m
m=P.f(H.a([new E.G($.bW,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nv("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.q(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Muse",18,!1,!1,!1)
$.GH=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.A(null,null,n)
h=P.f(H.a([new E.G($.bW,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nf("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.q(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Lord",19,!1,!1,!1)
$.GE=m
m=P.f(H.a([new E.G($.bW,-0.1,!1),new E.G($.dn,1,!1)],k),l)
i=H.a([],p)
m=new Y.oJ("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.q(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Smith",20,!1,!1,!1)
$.GR=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.G($.bW,4,!1),new E.G($.oV,-3,!1)],k),l)
e=H.a([],p)
m=new X.mn("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.q(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Human",21,!1,!1,!0)
$.GB=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.G($.bW,41.3,!1),new E.G($.oV,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mo(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.q(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Hussie",22,!1,!0,!0)
$.GC=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.ov(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.q(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.A(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.ai("Sans",23,!1,!0,!0)
$.GN=m
$.GI=T.Gw("Null",255,!1,!0,!1)
m=A.dN
i=P.F
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#00ff00"),!0)
h.j(0,$.U,L.b("#EFEFEF"),!0)
h.j(0,$.T,L.b("#DEDEDE"),!0)
h.j(0,$.a2,L.b("#FF2106"),!0)
h.j(0,$.a1,L.b("#B01200"),!0)
h.j(0,$.W,L.b("#2F2F30"),!0)
h.j(0,$.X,L.b("#1D1D1D"),!0)
h.j(0,$.V,L.b("#080808"),!0)
h.j(0,$.a0,L.b("#030303"),!0)
h.j(0,$.a_,L.b("#242424"),!0)
h.j(0,$.Z,L.b("#333333"),!0)
h.j(0,$.Y,L.b("#141414"),!0)
g=P.f(H.a(["Frogs"],p),q)
f=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.f(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.f(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.f(H.a([new E.G($.dn,2,!0),new E.G($.dW,1,!0),new E.G($.cu,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new N.oN(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(0,"Space",!0,!1,!1,null,null)
$.zj=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff0000"),!0)
a.j(0,$.U,L.b("#FF2106"),!0)
a.j(0,$.T,L.b("#AD1604"),!0)
a.j(0,$.a2,L.b("#030303"),!0)
a.j(0,$.a1,L.b("#242424"),!0)
a.j(0,$.W,L.b("#510606"),!0)
a.j(0,$.X,L.b("#3C0404"),!0)
a.j(0,$.V,L.b("#1F0000"),!0)
a.j(0,$.a0,L.b("#B70D0E"),!0)
a.j(0,$.a_,L.b("#970203"),!0)
a.j(0,$.Z,L.b("#8E1516"),!0)
a.j(0,$.Y,L.b("#640707"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.f(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.f(H.a([new E.G($.eJ,2,!0),new E.G($.cu,1,!0),new E.G($.dD,-2,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new N.pz(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(1,"Time",!0,!1,!1,null,null)
$.zn=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#3399ff"),!0)
h.j(0,$.U,L.b("#10E0FF"),!0)
h.j(0,$.T,L.b("#00A4BB"),!0)
h.j(0,$.a2,L.b("#FEFD49"),!0)
h.j(0,$.a1,L.b("#D6D601"),!0)
h.j(0,$.W,L.b("#0052F3"),!0)
h.j(0,$.X,L.b("#0046D1"),!0)
h.j(0,$.V,L.b("#003396"),!0)
h.j(0,$.a0,L.b("#0087EB"),!0)
h.j(0,$.a_,L.b("#0070ED"),!0)
h.j(0,$.Z,L.b("#006BE1"),!0)
h.j(0,$.Y,L.b("#0054B0"),!0)
g=P.f(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.f(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.f(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.f(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.f(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.f(H.a([new E.G($.cu,2,!0),new E.G($.bJ,1,!0),new E.G($.dW,-1,!0),new E.G($.d_,-1,!0),new E.G($.bW,0.05,!1)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new T.kO(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(2,"Breath",!0,!1,!1,null,null)
$.yM=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#003300"),!0)
a.j(0,$.U,L.b("#0F0F0F"),!0)
a.j(0,$.T,L.b("#010101"),!0)
a.j(0,$.a2,L.b("#E8C15E"),!0)
a.j(0,$.a1,L.b("#C7A140"),!0)
a.j(0,$.W,L.b("#1E211E"),!0)
a.j(0,$.X,L.b("#141614"),!0)
a.j(0,$.V,L.b("#0B0D0B"),!0)
a.j(0,$.a0,L.b("#204020"),!0)
a.j(0,$.a_,L.b("#11200F"),!0)
a.j(0,$.Z,L.b("#192C16"),!0)
a.j(0,$.Y,L.b("#121F10"),!0)
b=P.f(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.f(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.f(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.f(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.f(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.f(H.a([new E.G($.dn,2,!0),new E.G($.dD,1,!0),new E.G($.eJ,-1,!0),new E.G($.dW,-1,!0),new E.G($.bW,0.01,!1)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new U.lj(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(3,"Doom",!0,!1,!1,null,null)
$.tf=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#993300"),!0)
h.j(0,$.U,L.b("#BA1016"),!0)
h.j(0,$.T,L.b("#820B0F"),!0)
h.j(0,$.a2,L.b("#381B76"),!0)
h.j(0,$.a1,L.b("#1E0C47"),!0)
h.j(0,$.W,L.b("#290704"),!0)
h.j(0,$.X,L.b("#230200"),!0)
h.j(0,$.V,L.b("#110000"),!0)
h.j(0,$.a0,L.b("#3D190A"),!0)
h.j(0,$.a_,L.b("#2C1207"),!0)
h.j(0,$.Z,L.b("#5C2913"),!0)
h.j(0,$.Y,L.b("#4C1F0D"),!0)
g=P.f(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.f(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.f(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.f(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.f(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.f(H.a([new E.G($.d_,2,!0),new E.G($.bJ,1,!0),new E.G($.dn,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new T.kL(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(4,"Blood",!0,!1,!1,null,null)
$.yL=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff3399"),!0)
a.j(0,$.U,L.b("#BD1864"),!0)
a.j(0,$.T,L.b("#780F3F"),!0)
a.j(0,$.a2,L.b("#1D572E"),!0)
a.j(0,$.a1,L.b("#11371D"),!0)
a.j(0,$.W,L.b("#4C1026"),!0)
a.j(0,$.X,L.b("#3C0D1F"),!0)
a.j(0,$.V,L.b("#260914"),!0)
a.j(0,$.a0,L.b("#6B0829"),!0)
a.j(0,$.a_,L.b("#4A0818"),!0)
a.j(0,$.Z,L.b("#55142A"),!0)
a.j(0,$.Y,L.b("#3D0E1E"),!0)
b=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.f(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.f(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.f(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.f(H.a([new E.G($.d_,1,!0),new E.ia(null,1,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new T.me(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(5,"Heart",!0,!1,!1,null,null)
$.yT=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#3da35a"),!0)
h.j(0,$.U,L.b("#06FFC9"),!0)
h.j(0,$.T,L.b("#04A885"),!0)
h.j(0,$.a2,L.b("#6E0E2E"),!0)
h.j(0,$.a1,L.b("#4A0818"),!0)
h.j(0,$.W,L.b("#1D572E"),!0)
h.j(0,$.X,L.b("#164524"),!0)
h.j(0,$.V,L.b("#11371D"),!0)
h.j(0,$.a0,L.b("#3DA35A"),!0)
h.j(0,$.a_,L.b("#2E7A43"),!0)
h.j(0,$.Z,L.b("#3B7E4F"),!0)
h.j(0,$.Y,L.b("#265133"),!0)
g=P.f(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.f(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.f(H.a([new E.G($.dD,2,!0),new E.G($.eJ,1,!0),new E.G($.dn,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new V.ns(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(6,"Mind",!0,!1,!1,null,null)
$.z1=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff9933"),!0)
a.j(0,$.U,L.b("#FEFD49"),!0)
a.j(0,$.T,L.b("#FEC910"),!0)
a.j(0,$.a2,L.b("#10E0FF"),!0)
a.j(0,$.a1,L.b("#00A4BB"),!0)
a.j(0,$.W,L.b("#FA4900"),!0)
a.j(0,$.X,L.b("#E94200"),!0)
a.j(0,$.V,L.b("#C33700"),!0)
a.j(0,$.a0,L.b("#FF8800"),!0)
a.j(0,$.a_,L.b("#D66E04"),!0)
a.j(0,$.Z,L.b("#E76700"),!0)
a.j(0,$.Y,L.b("#CA5B00"),!0)
b=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.f(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.f(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.f(H.a([new E.G($.eI,2,!0),new E.G($.dD,1,!0),new E.G($.bJ,-1,!0),new E.G($.dW,-1,!0),new E.G($.bW,0.2,!1)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new G.n1(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(7,"Light",!0,!1,!1,null,null)
$.yZ=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#000066"),!0)
h.j(0,$.U,L.b("#0B1030"),!0)
h.j(0,$.T,L.b("#04091A"),!0)
h.j(0,$.a2,L.b("#CCC4B5"),!0)
h.j(0,$.a1,L.b("#A89F8D"),!0)
h.j(0,$.W,L.b("#00164F"),!0)
h.j(0,$.X,L.b("#00103C"),!0)
h.j(0,$.V,L.b("#00071A"),!0)
h.j(0,$.a0,L.b("#033476"),!0)
h.j(0,$.a_,L.b("#02285B"),!0)
h.j(0,$.Z,L.b("#004CB2"),!0)
h.j(0,$.Y,L.b("#003E91"),!0)
g=P.f(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.f(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.f(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.f(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.f(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.f(H.a([new E.fN(D.v_(),null,3,!0),new E.fN(D.v_(),null,-1,!0),new E.G($.eJ,-1,!0),new E.G($.bW,0.2,!1)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new Q.pX(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(8,"Void",!0,!1,!1,null,null)
$.zp=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#9900cc"),!0)
a.j(0,$.U,L.b("#974AA7"),!0)
a.j(0,$.T,L.b("#6B347D"),!0)
a.j(0,$.a2,L.b("#3D190A"),!0)
a.j(0,$.a1,L.b("#2C1207"),!0)
a.j(0,$.W,L.b("#7C3FBA"),!0)
a.j(0,$.X,L.b("#6D34A6"),!0)
a.j(0,$.V,L.b("#592D86"),!0)
a.j(0,$.a0,L.b("#381B76"),!0)
a.j(0,$.a_,L.b("#1E0C47"),!0)
a.j(0,$.Z,L.b("#281D36"),!0)
a.j(0,$.Y,L.b("#1D1526"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.f(H.a([new E.G($.dE,2,!0),new E.G($.cu,1,!0),new E.G($.bJ,-1,!0),new E.G($.d_,-1,!0),new E.G($.bW,0.01,!1)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new E.oc(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(9,"Rage",!0,!1,!1,null,null)
$.vD=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#ffcc66"),!0)
h.j(0,$.U,L.b("#FDF9EC"),!0)
h.j(0,$.T,L.b("#D6C794"),!0)
h.j(0,$.a2,L.b("#164524"),!0)
h.j(0,$.a1,L.b("#06280C"),!0)
h.j(0,$.W,L.b("#FFC331"),!0)
h.j(0,$.X,L.b("#F7BB2C"),!0)
h.j(0,$.V,L.b("#DBA523"),!0)
h.j(0,$.a0,L.b("#FFE094"),!0)
h.j(0,$.a_,L.b("#E8C15E"),!0)
h.j(0,$.Z,L.b("#F6C54A"),!0)
h.j(0,$.Y,L.b("#EDAF0C"),!0)
g=P.f(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.f(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.f(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.f(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.f(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.f(H.a([new E.G($.bJ,2,!0),new E.G($.eI,1,!0),new E.fN(D.v_(),null,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new X.mi(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(10,"Hope",!0,!1,!1,null,null)
$.yV=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#494132"),!0)
a.j(0,$.U,L.b("#76C34E"),!0)
a.j(0,$.T,L.b("#4F8234"),!0)
a.j(0,$.a2,L.b("#00164F"),!0)
a.j(0,$.a1,L.b("#00071A"),!0)
a.j(0,$.W,L.b("#605542"),!0)
a.j(0,$.X,L.b("#494132"),!0)
a.j(0,$.V,L.b("#2D271E"),!0)
a.j(0,$.a0,L.b("#CCC4B5"),!0)
a.j(0,$.a_,L.b("#A89F8D"),!0)
a.j(0,$.Z,L.b("#A29989"),!0)
a.j(0,$.Y,L.b("#918673"),!0)
b=P.f(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.f(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.f(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.f(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.f(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.f(H.a([new E.G($.dW,2,!0),new E.G($.dE,1,!0),new E.G($.dn,-2,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new K.n0(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(11,"Life",!0,!1,!1,null,null)
$.yY=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#9630BF"),!0)
h.j(0,$.U,L.b("#cc87e8"),!0)
h.j(0,$.T,L.b("#9545b7"),!0)
h.j(0,$.a2,L.b("#ae769b"),!0)
h.j(0,$.a1,L.b("#8f577c"),!0)
h.j(0,$.W,L.b("#9630bf"),!0)
h.j(0,$.X,L.b("#693773"),!0)
h.j(0,$.V,L.b("#4c2154"),!0)
h.j(0,$.a0,L.b("#fcf9bd"),!0)
h.j(0,$.a_,L.b("#e0d29e"),!0)
h.j(0,$.Z,L.b("#bdb968"),!0)
h.j(0,$.Y,L.b("#ab9b55"),!0)
g=P.f(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.f(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.f(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.f(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.f(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.f(H.a([new E.G($.dn,3,!0),new E.G($.bJ,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new Z.lk(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(12,"Dream",!1,!1,!1,null,null)
$.yO=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ff0000"),!0)
a.j(0,$.U,L.b("#ffff00"),!0)
a.j(0,$.T,L.b("#ffff00"),!0)
a.j(0,$.a2,L.b("#508b2d"),!0)
a.j(0,$.a1,L.b("#316c0d"),!0)
a.j(0,$.W,L.b("#dddd00"),!0)
a.j(0,$.X,L.b("#afaf00"),!0)
a.j(0,$.V,L.b("#8f8f00"),!0)
a.j(0,$.a0,L.b("#ff0000"),!0)
a.j(0,$.a_,L.b("#a8000a"),!0)
a.j(0,$.Z,L.b("#b8151f"),!0)
a.j(0,$.Y,L.b("#8c1d1d"),!0)
b=P.f(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),q)
c=P.f(H.a(["Juice","Joke","Jespacito"],p),q)
d=P.f(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),q)
e=P.f(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),q)
f=P.f(H.a([new E.G($.bW,13,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new Z.mV(13,13,13,a,b,c,d,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",e,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],f,0.01,0.01,0.01,0.5,14,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(14,"Juice",!1,!1,!0,null,null)
$.yW=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#00ff00"),!0)
h.j(0,$.U,L.b("#00ff00"),!0)
h.j(0,$.T,L.b("#00ff00"),!0)
h.j(0,$.a2,L.b("#00ff00"),!0)
h.j(0,$.a1,L.b("#00cf00"),!0)
h.j(0,$.W,L.b("#171717"),!0)
h.j(0,$.X,L.b("#080808"),!0)
h.j(0,$.V,L.b("#080808"),!0)
h.j(0,$.a0,L.b("#616161"),!0)
h.j(0,$.a_,L.b("#3b3b3b"),!0)
h.j(0,$.Z,L.b("#4a4a4a"),!0)
h.j(0,$.Y,L.b("#292929"),!0)
f=P.f(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
e=P.f(H.a(["Shogun"],p),q)
d=P.f(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
c=P.f(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
b=P.f(H.a([new E.G($.dE,13,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new K.ow(13,13,13,h,f,e,d," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",c,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],b,0.01,0.01,0.01,0.5,15,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(15,"Sauce",!1,!0,!1,null,null)
$.zf=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#933100"),!0)
g.j(0,$.U,L.b("#933100"),!0)
g.j(0,$.T,L.b("#682200"),!0)
g.j(0,$.a2,L.b("#4c3a27"),!0)
g.j(0,$.a1,L.b("#302418"),!0)
g.j(0,$.W,L.b("#a0562b"),!0)
g.j(0,$.X,L.b("#723e20"),!0)
g.j(0,$.V,L.b("#442513"),!0)
g.j(0,$.a0,L.b("#963c07"),!0)
g.j(0,$.a_,L.b("#682a06"),!0)
g.j(0,$.Z,L.b("#6d4d3a"),!0)
g.j(0,$.Y,L.b("#422e23"),!0)
b=P.f(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),q)
c=P.f(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),q)
d=P.f(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),q)
e=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
f=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
h=P.f(H.a([new E.G($.cu,10,!0),new E.G($.bJ,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new L.pn(2,0.7,0.7,g,b,c,d,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",f,["Lightning","Ice","Taserface"],["Taser"],h,0.01,0.01,0.01,0.5,16,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(16,"Taze",!1,!1,!0,null,null)
$.zm=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#990000"),!0)
a.j(0,$.U,L.b("#ff0200"),!0)
a.j(0,$.T,L.b("#dd0000"),!0)
a.j(0,$.a2,L.b("#25334f"),!0)
a.j(0,$.a1,L.b("#07090f"),!0)
a.j(0,$.W,L.b("#c64f4f"),!0)
a.j(0,$.X,L.b("#a33f3f"),!0)
a.j(0,$.V,L.b("#843333"),!0)
a.j(0,$.a0,L.b("#b5c1d2"),!0)
a.j(0,$.a_,L.b("#939dac"),!0)
a.j(0,$.Z,L.b("#3c3e42"),!0)
a.j(0,$.Y,L.b("#202123"),!0)
h=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
f=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.f(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),q)
d=P.f(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),q)
c=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
b=P.f(H.a([new E.G($.cu,2,!0),new E.G($.bJ,5,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new V.op(0.9,1.1,2,a,h,f,e,d,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",c,["Arrow","Yondu","Empathy"],["Arrow","Bow"],b,0.01,0.01,0.01,0.5,17,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(17,"Rule",!1,!1,!0,null,null)
$.zc=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#853dcc"),!0)
g.j(0,$.U,L.b("#f76261"),!0)
g.j(0,$.T,L.b("#913a39"),!0)
g.j(0,$.a2,L.b("#ab4443"),!0)
g.j(0,$.a1,L.b("#78302f"),!0)
g.j(0,$.W,L.b("#a54cff"),!0)
g.j(0,$.X,L.b("#8c41d9"),!0)
g.j(0,$.V,L.b("#7335b3"),!0)
g.j(0,$.a0,L.b("#853dcc"),!0)
g.j(0,$.a_,L.b("#642e99"),!0)
g.j(0,$.Z,L.b("#4c2375"),!0)
g.j(0,$.Y,L.b("#2b1442"),!0)
b=P.f(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),q)
c=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
d=P.f(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),q)
e=P.f(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),q)
f=P.f(H.a([new E.G($.cu,15,!0),new E.G($.bJ,-4,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new V.mg(3.1,2,0.7,g,b,c,d,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",e,["Hippo","Ranting"],["Vent"],f,0.01,0.01,0.01,0.5,18,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(18,"Hippo",!1,!1,!0,null,null)
$.yU=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#959595"),!0)
h.j(0,$.U,L.b("#bfbfbf"),!0)
h.j(0,$.T,L.b("#959595"),!0)
h.j(0,$.a2,L.b("#805233"),!0)
h.j(0,$.a1,L.b("#663c1f"),!0)
h.j(0,$.W,L.b("#805233"),!0)
h.j(0,$.X,L.b("#737373"),!0)
h.j(0,$.V,L.b("#664d3c"),!0)
h.j(0,$.a0,L.b("#663c1f"),!0)
h.j(0,$.a_,L.b("#4d2d17"),!0)
h.j(0,$.Z,L.b("#68594e"),!0)
h.j(0,$.Y,L.b("#4f443b"),!0)
f=P.f(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),q)
e=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
d=P.f(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),q)
c=P.f(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),q)
b=P.f(H.a([new E.G($.cu,5,!0),new E.G($.bJ,5,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.kJ(0.7,2,3.1,h,f,e,d,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",c,["Bear","Thought"],["Doorway"],b,0.01,0.01,0.01,0.5,19,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(19,"Bear",!1,!1,!0,null,null)
$.yK=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#ebd837"),!0)
g.j(0,$.U,L.b("#ebd837"),!0)
g.j(0,$.T,L.b("#857a1f"),!0)
g.j(0,$.a2,L.b("#857a1f"),!0)
g.j(0,$.a1,L.b("#524b13"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
c=P.f(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
d=P.f(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.f(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
h=P.f(H.a([new E.G($.dD,2,!0),new E.G($.eJ,1,!0),new E.G($.dn,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.nt(0.3,0.3,1,g,b,c,d,e,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,h,0.01,0.01,0.01,0.5,20,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(20,"Mindstone",!1,!0,!0,null,null)
$.z2=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#74a4ff"),!0)
a.j(0,$.U,L.b("#74a4ff"),!0)
a.j(0,$.T,L.b("#466299"),!0)
a.j(0,$.a2,L.b("#466299"),!0)
a.j(0,$.a1,L.b("#2f4166"),!0)
a.j(0,$.W,L.b("#d0c217"),!0)
a.j(0,$.X,L.b("#9e9311"),!0)
a.j(0,$.V,L.b("#6b640c"),!0)
a.j(0,$.a0,L.b("#c3c3c3"),!0)
a.j(0,$.a_,L.b("#8f8f8f"),!0)
a.j(0,$.Z,L.b("#a88e00"),!0)
a.j(0,$.Y,L.b("#756300"),!0)
h=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
f=P.f(H.a(["Frogs","Stone"],p),q)
e=P.f(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
d=P.f(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.G($.dn,2,!0),new E.G($.dW,1,!0),new E.G($.cu,-2,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new A.oO(0.5,1,0.5,a,h,f,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",d,c,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,21,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(21,"Spacestone",!1,!0,!0,null,null)
$.zk=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#9846cc"),!0)
g.j(0,$.U,L.b("#9846cc"),!0)
g.j(0,$.T,L.b("#4c2366"),!0)
g.j(0,$.a2,L.b("#4c2366"),!0)
g.j(0,$.a1,L.b("#261233"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),q)
c=P.f(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),q)
f=P.f(H.a([new E.G($.dE,2,!0),new E.G($.cu,1,!0),new E.G($.bJ,-1,!0),new E.G($.d_,-1,!0),new E.G($.bW,0.01,!1)],k),l)
h=P.f(H.a(["Paradox Space"],p),q)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.o6(1,1,0.01,g,b,c,d,e,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,h,0.01,0.01,0.01,0.5,22,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(22,"Powerstone",!1,!0,!0,null,null)
$.z5=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ffcb6f"),!0)
a.j(0,$.U,L.b("#ffcb6f"),!0)
a.j(0,$.T,L.b("#997a42"),!0)
a.j(0,$.a2,L.b("#997a42"),!0)
a.j(0,$.a1,L.b("#66512c"),!0)
a.j(0,$.W,L.b("#d0c217"),!0)
a.j(0,$.X,L.b("#9e9311"),!0)
a.j(0,$.V,L.b("#6b640c"),!0)
a.j(0,$.a0,L.b("#c3c3c3"),!0)
a.j(0,$.a_,L.b("#8f8f8f"),!0)
a.j(0,$.Z,L.b("#a88e00"),!0)
a.j(0,$.Y,L.b("#756300"),!0)
h=P.f(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),q)
f=P.f(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.G($.d_,1,!0),new E.ia(null,1,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new A.oM(0.3,0.6,0.01,a,h,f,e,d,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",c,b,0.01,0.01,0.01,0.5,23,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(23,"Soulstone",!1,!0,!0,null,null)
$.zi=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#7ac476"),!0)
g.j(0,$.U,L.b("#7ac476"),!0)
g.j(0,$.T,L.b("#3a5e39"),!0)
g.j(0,$.a2,L.b("#3a5e39"),!0)
g.j(0,$.a1,L.b("#1b2b1a"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),q)
c=P.f(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.f(H.a(["Paradox Space"],p),q)
h=P.f(H.a([new E.G($.eJ,2,!0),new E.G($.cu,1,!0),new E.G($.dD,-2,!0)],k),l)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.pE(0.51,1,0.01,0.7,g,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",f,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],h,0.01,0.01,0.01,0.5,24,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(24,"Timestone",!1,!0,!0,null,null)
$.zo=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#ed1c24"),!0)
a.j(0,$.U,L.b("#ed1c24"),!0)
a.j(0,$.T,L.b("#820a0f"),!0)
a.j(0,$.a2,L.b("#820a0f"),!0)
a.j(0,$.a1,L.b("#4f0609"),!0)
a.j(0,$.W,L.b("#d0c217"),!0)
a.j(0,$.X,L.b("#9e9311"),!0)
a.j(0,$.V,L.b("#6b640c"),!0)
a.j(0,$.a0,L.b("#c3c3c3"),!0)
a.j(0,$.a_,L.b("#8f8f8f"),!0)
a.j(0,$.Z,L.b("#a88e00"),!0)
a.j(0,$.Y,L.b("#756300"),!0)
h=P.f(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),q)
f=P.f(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
e=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
d=P.f(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),q)
c=P.f(H.a(["Paradox Space"],p),q)
b=P.f(H.a([new E.G($.eI,2,!0),new E.G($.dD,1,!0),new E.G($.bJ,-1,!0),new E.G($.dW,-1,!0),new E.G($.bW,0.2,!1)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new A.oi(1.01,0.5,0.01,a,h,f,e,d,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],c,b,0.01,0.01,0.01,0.5,25,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(25,"Realitystone",!1,!0,!0,null,null)
$.z7=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#e19aca"),!0)
g.j(0,$.U,L.b("#e19aca"),!0)
g.j(0,$.T,L.b("#7a546e"),!0)
g.j(0,$.a2,L.b("#7a546e"),!0)
g.j(0,$.a1,L.b("#473140"),!0)
g.j(0,$.W,L.b("#d0c217"),!0)
g.j(0,$.X,L.b("#9e9311"),!0)
g.j(0,$.V,L.b("#6b640c"),!0)
g.j(0,$.a0,L.b("#c3c3c3"),!0)
g.j(0,$.a_,L.b("#8f8f8f"),!0)
g.j(0,$.Z,L.b("#a88e00"),!0)
g.j(0,$.Y,L.b("#756300"),!0)
b=P.f(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),q)
c=P.f(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),q)
d=P.f(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),q)
e=P.f(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),q)
f=P.f(H.a([new E.G($.bJ,-1,!0),new E.G($.dE,2,!0)],k),l)
h=P.f(H.a(["Paradox Space"],p),q)
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#FF9B00"),!0)
a.j(0,$.U,L.b("#FF9B00"),!0)
a.j(0,$.T,L.b("#FF8700"),!0)
a.j(0,$.a2,L.b("#7F7F7F"),!0)
a.j(0,$.a1,L.b("#727272"),!0)
a.j(0,$.W,L.b("#A3A3A3"),!0)
a.j(0,$.X,L.b("#999999"),!0)
a.j(0,$.V,L.b("#898989"),!0)
a.j(0,$.a0,L.b("#EFEFEF"),!0)
a.j(0,$.a_,L.b("#DBDBDB"),!0)
a.j(0,$.Z,L.b("#C6C6C6"),!0)
a.j(0,$.Y,L.b("#ADADAD"),!0)
a=new A.m9(2,1.5,1,g,b,c,d,e,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],f,h,0.01,0.01,0.01,0.5,26,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,null,null,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a.S(26,"Gauntlet",!1,!0,!0,null,null)
$.yR=a
a=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a.j(0,$.S,L.b("#c55555"),!0)
a.j(0,$.U,L.b("#c55555"),!0)
a.j(0,$.T,L.b("#090404"),!0)
a.j(0,$.a2,L.b("#ba872e"),!0)
a.j(0,$.a1,L.b("#8e694e"),!0)
a.j(0,$.W,L.b("#b59e5d"),!0)
a.j(0,$.X,L.b("#837243"),!0)
a.j(0,$.V,L.b("#4f4528"),!0)
a.j(0,$.a0,L.b("#9fbfbf"),!0)
a.j(0,$.a_,L.b("#95b5b5"),!0)
a.j(0,$.Z,L.b("#956f6f"),!0)
a.j(0,$.Y,L.b("#714b4b"),!0)
h=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
f=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
e=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
d=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
c=P.f(H.a([new E.G($.bJ,-1,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new D.no(2,0.5,1,a,h,f,e,"cURSED","Some cursed meme music starts to play.",d,["memes"],["memes"],c,0.01,0.01,0.01,0.5,27,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(27,"Meme",!1,!1,!0,null,null)
$.z_=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#010067"),!0)
g.j(0,$.U,L.b("#010067"),!0)
g.j(0,$.T,L.b("#000033"),!0)
g.j(0,$.a2,L.b("#000033"),!0)
g.j(0,$.a1,L.b("#00000d"),!0)
g.j(0,$.W,L.b("#0052F3"),!0)
g.j(0,$.X,L.b("#0046D1"),!0)
g.j(0,$.V,L.b("#003396"),!0)
g.j(0,$.a0,L.b("#0b0a33"),!0)
g.j(0,$.a_,L.b("#0a0a1a"),!0)
g.j(0,$.Z,L.b("#0b0b1b"),!0)
g.j(0,$.Y,L.b("#030308"),!0)
c=P.f(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),q)
d=P.f(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),q)
e=P.f(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),q)
f=P.f(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),q)
h=P.f(["Thanos","Phobos","Deimos","Boreas"],q)
a=P.f(H.a([new E.G($.cu,2,!0),new E.G($.bJ,-1,!0),new E.G($.d_,-1,!0)],k),l)
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#FF9B00"),!0)
b.j(0,$.U,L.b("#FF9B00"),!0)
b.j(0,$.T,L.b("#FF8700"),!0)
b.j(0,$.a2,L.b("#7F7F7F"),!0)
b.j(0,$.a1,L.b("#727272"),!0)
b.j(0,$.W,L.b("#A3A3A3"),!0)
b.j(0,$.X,L.b("#999999"),!0)
b.j(0,$.V,L.b("#898989"),!0)
b.j(0,$.a0,L.b("#EFEFEF"),!0)
b.j(0,$.a_,L.b("#DBDBDB"),!0)
b.j(0,$.Z,L.b("#C6C6C6"),!0)
b.j(0,$.Y,L.b("#ADADAD"),!0)
b=new S.kU(0.5,0.7,1,g,c,d,e,f,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],h,a,0.01,0.01,0.01,0.5,28,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Chill",null,!1,!1,!0,null,null,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
b.S(28,"Chill",!1,!1,!0,null,null)
$.yN=b
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#007fbf"),!0)
b.j(0,$.U,L.b("#007fbf"),!0)
b.j(0,$.T,L.b("#4d6e80"),!0)
b.j(0,$.a2,L.b("#999999"),!0)
b.j(0,$.a1,L.b("#666666"),!0)
b.j(0,$.W,L.b("#8a9499"),!0)
b.j(0,$.X,L.b("#5c6366"),!0)
b.j(0,$.V,L.b("#2e3133"),!0)
b.j(0,$.a0,L.b("#86acbf"),!0)
b.j(0,$.a_,L.b("#627e8c"),!0)
b.j(0,$.Z,L.b("#8fa7b3"),!0)
b.j(0,$.Y,L.b("#667780"),!0)
a=P.f(H.a(["Rune","Infinity","Magic","Fairies","Prediction","Circles","Majykks","Systems"],p),q)
h=P.f(H.a(["FAIRY PERSON","INFIINITELY CONFUSED","PREDICTIVE LAD"],p),q)
f=P.f(H.a(["Rune","Ruiner","Red","Ready","Retconner","Respondent"],p),q)
e=P.f(H.a(["Infinite","Magical","Runely","Majykkal","Systematically","Predictful"],p),q)
d=P.f(["Rune","Hecate","Hekate","Heh","Huh","Athena","Oracle"],q)
c=P.f(H.a([new E.G($.cu,2,!0),new E.G($.bJ,-0.5,!0),new E.G($.bW,2,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new R.oq(0.5,1,1,0.5,b,a,h,f,e,"Magicity","In a flood of magic, the OWNER is strengthened and healed, and the ENEMY is weakened.",["rune","majykk","fairies","infinity","prediction"],["rune","runestones","magic","fairies"],d,c,0.01,0.01,0.01,0.5,29,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rune",null,!1,!1,!0,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(29,"Rune",!1,!1,!0,null,null)
$.zd=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#ff7a00"),!0)
g.j(0,$.U,L.b("#ff7a00"),!0)
g.j(0,$.T,L.b("#cc6200"),!0)
g.j(0,$.a2,L.b("#cc6200"),!0)
g.j(0,$.a1,L.b("#994900"),!0)
g.j(0,$.W,L.b("#8a9499"),!0)
g.j(0,$.X,L.b("#5c6366"),!0)
g.j(0,$.V,L.b("#2e3133"),!0)
g.j(0,$.a0,L.b("#86acbf"),!0)
g.j(0,$.a_,L.b("#627e8c"),!0)
g.j(0,$.Z,L.b("#8fa7b3"),!0)
g.j(0,$.Y,L.b("#667780"),!0)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new L.md(g,0.01,0.01,0.01,0.5,30,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Haze",null,!1,!1,!0,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(30,"Haze",!1,!1,!0,null,null)
$.yS=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#364447"),!0)
h.j(0,$.U,L.b("#28517b"),!0)
h.j(0,$.T,L.b("#143D67"),!0)
h.j(0,$.a2,L.b("#E7D7A0"),!0)
h.j(0,$.a1,L.b("#D6A482"),!0)
h.j(0,$.W,L.b("#A9D5DF"),!0)
h.j(0,$.X,L.b("#95c1cb"),!0)
h.j(0,$.V,L.b("#77a3ad"),!0)
h.j(0,$.a0,L.b("#162E33"),!0)
h.j(0,$.a_,L.b("#11292e"),!0)
h.j(0,$.Z,L.b("#021a1f"),!0)
h.j(0,$.Y,L.b("#021015"),!0)
g=P.f(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],p),q)
f=P.f(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],p),q)
e=P.f(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],p),q)
d=P.f(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],p),q)
c=P.f(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],p),q)
b=P.f(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],p),q)
a=P.f(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],p),q)
a0=P.f(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],p),q)
a1=P.f(H.a([new E.G($.dE,2,!0),new E.G($.dD,-1,!0),new E.G($.cu,-1,!0),new E.G($.bJ,1,!0)],k),l)
a2=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a2.j(0,$.S,L.b("#FF9B00"),!0)
a2.j(0,$.U,L.b("#FF9B00"),!0)
a2.j(0,$.T,L.b("#FF8700"),!0)
a2.j(0,$.a2,L.b("#7F7F7F"),!0)
a2.j(0,$.a1,L.b("#727272"),!0)
a2.j(0,$.W,L.b("#A3A3A3"),!0)
a2.j(0,$.X,L.b("#999999"),!0)
a2.j(0,$.V,L.b("#898989"),!0)
a2.j(0,$.a0,L.b("#EFEFEF"),!0)
a2.j(0,$.a_,L.b("#DBDBDB"),!0)
a2.j(0,$.Z,L.b("#C6C6C6"),!0)
a2.j(0,$.Y,L.b("#ADADAD"),!0)
a2=new L.nr(h,g,f,e,d,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,b,a,a0,a1,0.01,0.01,0.01,0.5,31,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Might",null,!1,!1,!1,null,null,!1,!1,!0,1,a2,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
a2.S(31,"Might",!1,!1,!1,null,null)
$.z0=a2
a2=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
a2.j(0,$.S,L.b("#A4C1F4"),!0)
a2.j(0,$.U,L.b("#A4C1F4"),!0)
a2.j(0,$.T,L.b("#95AFDD"),!0)
a2.j(0,$.a2,L.b("#FFFFA5"),!0)
a2.j(0,$.a1,L.b("#BEBE9E"),!0)
a2.j(0,$.W,L.b("#A4C1F4"),!0)
a2.j(0,$.X,L.b("#95AFDD"),!0)
a2.j(0,$.V,L.b("#88A0CC"),!0)
a2.j(0,$.a0,L.b("#D9D2E9"),!0)
a2.j(0,$.a_,L.b("#BBB5CA"),!0)
a2.j(0,$.Z,L.b("#CCC5DB"),!0)
a2.j(0,$.Y,L.b("#A49FB1"),!0)
a1=P.f(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],p),q)
a0=P.f(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],p),q)
a=P.f(H.a(["Moper","Martyr","Manager","Morning","Matter"],p),q)
b=P.f(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],p),q)
c=P.f(H.a([new E.G($.cu,2,!0),new E.G($.dE,-1,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new S.nu(a2,a1,a0,a,b,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,0.01,0.01,0.01,0.5,32,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Mist",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(32,"Mist",!1,!1,!1,null,null)
$.z3=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
c=Y.dt()
h.j(0,$.S,L.b(c),!0)
c=Y.dt()
h.j(0,$.U,L.b(c),!0)
c=Y.dt()
h.j(0,$.T,L.b(c),!0)
c=Y.dt()
h.j(0,$.a2,L.b(c),!0)
c=Y.dt()
h.j(0,$.a1,L.b(c),!0)
c=Y.dt()
h.j(0,$.W,L.b(c),!0)
c=Y.dt()
h.j(0,$.X,L.b(c),!0)
c=Y.dt()
h.j(0,$.V,L.b(c),!0)
c=Y.dt()
h.j(0,$.a0,L.b(c),!0)
c=Y.dt()
h.j(0,$.a_,L.b(c),!0)
c=Y.dt()
h.j(0,$.Z,L.b(c),!0)
c=Y.dt()
h.j(0,$.Y,L.b(c),!0)
c=P.f(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],p),q)
b=P.f(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],p),q)
a=P.f(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],p),q)
a0=P.f(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],p),q)
a1=P.f(H.a([new E.G($.d_,-2,!0),new E.G($.bJ,-1,!0),new E.G($.eI,3,!0)],k),l)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.od(h,c,b,a,a0,"BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",a1,0.01,0.01,0.01,0.5,33,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rain",null,!1,!1,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(33,"Rain",!1,!1,!1,null,null)
$.z6=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#b88654"),!0)
g.j(0,$.U,L.b("#783e05"),!0)
g.j(0,$.T,L.b("#4a0f00"),!0)
g.j(0,$.a2,L.b("#0b6c6e"),!0)
g.j(0,$.a1,L.b("#005d5e"),!0)
g.j(0,$.W,L.b("#f5b06c"),!0)
g.j(0,$.X,L.b("#e6a05e"),!0)
g.j(0,$.V,L.b("#b87232"),!0)
g.j(0,$.a0,L.b("#ffd966"),!0)
g.j(0,$.a_,L.b("#d1ab3b"),!0)
g.j(0,$.Z,L.b("#7d5e00"),!0)
g.j(0,$.Y,L.b("#6e4f00"),!0)
a1=P.f(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],p),q)
a0=P.f(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],p),q)
a=P.f(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],p),q)
b=P.f(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],p),q)
c=P.f(H.a([new E.G($.d_,3,!0),new E.G($.bJ,-2,!0)],k),l)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new Y.ou(g,a1,a0,a,b," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,0.01,0.01,0.01,0.5,34,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Sand",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(34,"Sand",!1,!1,!1,null,null)
$.ze=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#ff9933"),!0)
h.j(0,$.U,L.b("#ffffff"),!0)
h.j(0,$.T,L.b("#999999"),!0)
h.j(0,$.a2,L.b("#ffff00"),!0)
h.j(0,$.a1,L.b("#8f8f00"),!0)
h.j(0,$.W,L.b("#d1e0e3"),!0)
h.j(0,$.X,L.b("#c5d1d4"),!0)
h.j(0,$.V,L.b("#b7c2c4"),!0)
h.j(0,$.a0,L.b("#00ffff"),!0)
h.j(0,$.a_,L.b("#009999"),!0)
h.j(0,$.Z,L.b("#b5b5b5"),!0)
h.j(0,$.Y,L.b("#858585"),!0)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.oH(h,0.01,0.01,0.01,0.5,35,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Sky",null,!1,!1,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(35,"Sky",!1,!1,!1,null,null)
$.zg=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#10dede"),!0)
g.j(0,$.U,L.b("#00ffff"),!0)
g.j(0,$.T,L.b("#00d1d1"),!0)
g.j(0,$.a2,L.b("#ff0000"),!0)
g.j(0,$.a1,L.b("#d10000"),!0)
g.j(0,$.W,L.b("#4985e6"),!0)
g.j(0,$.X,L.b("#3a76d6"),!0)
g.j(0,$.V,L.b("#2d6ac4"),!0)
g.j(0,$.a0,L.b("#331c73"),!0)
g.j(0,$.a_,L.b("#050045"),!0)
g.j(0,$.Z,L.b("#8d7cc2"),!0)
g.j(0,$.Y,L.b("#7c6db3"),!0)
h=P.f(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],p),q)
f=P.f(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],p),q)
e=P.f(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],p),q)
d=P.f(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],p),q)
c=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
c.j(0,$.S,L.b("#FF9B00"),!0)
c.j(0,$.U,L.b("#FF9B00"),!0)
c.j(0,$.T,L.b("#FF8700"),!0)
c.j(0,$.a2,L.b("#7F7F7F"),!0)
c.j(0,$.a1,L.b("#727272"),!0)
c.j(0,$.W,L.b("#A3A3A3"),!0)
c.j(0,$.X,L.b("#999999"),!0)
c.j(0,$.V,L.b("#898989"),!0)
c.j(0,$.a0,L.b("#EFEFEF"),!0)
c.j(0,$.a_,L.b("#DBDBDB"),!0)
c.j(0,$.Z,L.b("#C6C6C6"),!0)
c.j(0,$.Y,L.b("#ADADAD"),!0)
c=new Z.om(g,h,f,e,d,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.01,0.01,0.01,0.5,36,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Rhyme",null,!1,!1,!1,null,null,!1,!1,!0,1,c,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
c.S(36,"Rhyme",!1,!1,!1,null,null)
$.zb=c
c=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
c.j(0,$.S,L.b("#c42eff"),!0)
c.j(0,$.U,L.b("a703ff"),!0)
c.j(0,$.T,L.b("#9800f0"),!0)
c.j(0,$.a2,L.b("#fcf9bd"),!0)
c.j(0,$.a1,L.b("#e0d29e"),!0)
c.j(0,$.W,L.b("#9900ff"),!0)
c.j(0,$.X,L.b("#8800f0"),!0)
c.j(0,$.V,L.b("#7800e0"),!0)
c.j(0,$.a0,L.b("#b3a7d4"),!0)
c.j(0,$.a_,L.b("#a599c4"),!0)
c.j(0,$.Z,L.b("#a64e78"),!0)
c.j(0,$.Y,L.b("#963f66"),!0)
d=P.f(H.a(["Akashic Record"],p),q)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new Q.mZ(c,d,0.01,0.01,0.01,0.5,37,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(37,"Law",!1,!1,!1,null,null)
$.yX=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#f0b000"),!0)
h.j(0,$.U,L.b("#ffd966"),!0)
h.j(0,$.T,L.b("#f0ca59"),!0)
h.j(0,$.a2,L.b("#ffff00"),!0)
h.j(0,$.a1,L.b("#8f8f00"),!0)
h.j(0,$.W,L.b("#92c27c"),!0)
h.j(0,$.X,L.b("#83b36d"),!0)
h.j(0,$.V,L.b("#74a35f"),!0)
h.j(0,$.a0,L.b("#39751d"),!0)
h.j(0,$.a_,L.b("#2a630e"),!0)
h.j(0,$.Z,L.b("#bd8e00"),!0)
h.j(0,$.Y,L.b("#ad7c00"),!0)
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#FF9B00"),!0)
g.j(0,$.U,L.b("#FF9B00"),!0)
g.j(0,$.T,L.b("#FF8700"),!0)
g.j(0,$.a2,L.b("#7F7F7F"),!0)
g.j(0,$.a1,L.b("#727272"),!0)
g.j(0,$.W,L.b("#A3A3A3"),!0)
g.j(0,$.X,L.b("#999999"),!0)
g.j(0,$.V,L.b("#898989"),!0)
g.j(0,$.a0,L.b("#EFEFEF"),!0)
g.j(0,$.a_,L.b("#DBDBDB"),!0)
g.j(0,$.Z,L.b("#C6C6C6"),!0)
g.j(0,$.Y,L.b("#ADADAD"),!0)
g=new L.lN(h,0.01,0.01,0.01,0.5,38,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Fate",null,!1,!1,!1,null,null,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
g.S(38,"Fate",!1,!1,!1,null,null)
$.yP=g
g=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
g.j(0,$.S,L.b("#b2e3eb"),!0)
g.j(0,$.U,L.b("#fefefe"),!0)
g.j(0,$.T,L.b("#dfdfdf"),!0)
g.j(0,$.a2,L.b("#00ffff"),!0)
g.j(0,$.a1,L.b("#009090"),!0)
g.j(0,$.W,L.b("#999999"),!0)
g.j(0,$.X,L.b("#8a8a8a"),!0)
g.j(0,$.V,L.b("#7a7a7a"),!0)
g.j(0,$.a0,L.b("#d0e2f2"),!0)
g.j(0,$.a_,L.b("#c3d4e3"),!0)
g.j(0,$.Z,L.b("#b2e3eb"),!0)
g.j(0,$.Y,L.b("#a4d4db"),!0)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new O.oK(2,g,0.01,0.01,0.01,0.5,39,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Snow",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(39,"Snow",!1,!1,!1,null,null)
$.zh=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#ee0000"),!0)
h.j(0,$.U,L.b("#ff0000"),!0)
h.j(0,$.T,L.b("#d10000"),!0)
h.j(0,$.a2,L.b("#00ffff"),!0)
h.j(0,$.a1,L.b("#00d1d1"),!0)
h.j(0,$.W,L.b("#e68f39"),!0)
h.j(0,$.X,L.b("#d67e2b"),!0)
h.j(0,$.V,L.b("#c46b1d"),!0)
h.j(0,$.a0,L.b("#e65c00"),!0)
h.j(0,$.a_,L.b("#b82e00"),!0)
h.j(0,$.Z,L.b("#ffd966"),!0)
h.j(0,$.Y,L.b("#d1ab3b"),!0)
g=P.f(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],p),q)
f=P.f(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],p),q)
e=P.f(H.a(["Flamer","Florist","Friar","Foodie"],p),q)
d=P.f(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],p),q)
c=P.f(H.a([new E.G($.cu,2,!0),new E.G($.dE,1,!0),new E.G($.d_,-2,!0)],k),l)
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#FF9B00"),!0)
b.j(0,$.U,L.b("#FF9B00"),!0)
b.j(0,$.T,L.b("#FF8700"),!0)
b.j(0,$.a2,L.b("#7F7F7F"),!0)
b.j(0,$.a1,L.b("#727272"),!0)
b.j(0,$.W,L.b("#A3A3A3"),!0)
b.j(0,$.X,L.b("#999999"),!0)
b.j(0,$.V,L.b("#898989"),!0)
b.j(0,$.a0,L.b("#EFEFEF"),!0)
b.j(0,$.a_,L.b("#DBDBDB"),!0)
b.j(0,$.Z,L.b("#C6C6C6"),!0)
b.j(0,$.Y,L.b("#ADADAD"),!0)
b=new O.m2(h,g,f,e,d,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,0.01,0.01,0.01,0.5,40,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Flow",null,!1,!1,!1,null,null,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
b.S(40,"Flow",!1,!1,!1,null,null)
$.yQ=b
b=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
b.j(0,$.S,L.b("#ffff33"),!0)
b.j(0,$.U,L.b("#ffff00"),!0)
b.j(0,$.T,L.b("#d1d100"),!0)
b.j(0,$.a2,L.b("#00ffff"),!0)
b.j(0,$.a1,L.b("#009999"),!0)
b.j(0,$.W,L.b("#0c5494"),!0)
b.j(0,$.X,L.b("#004785"),!0)
b.j(0,$.V,L.b("#003b75"),!0)
b.j(0,$.a0,L.b("#20124d"),!0)
b.j(0,$.a_,L.b("#11033d"),!0)
b.j(0,$.Z,L.b("#0c323b"),!0)
b.j(0,$.Y,L.b("#00232b"),!0)
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new U.oT(b,0.01,0.01,0.01,0.5,41,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Stars",null,!1,!1,!1,null,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(41,"Stars",!1,!1,!1,null,null)
$.zl=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#959595"),!0)
h.j(0,$.U,L.b("#bfbfbf"),!0)
h.j(0,$.T,L.b("#959595"),!0)
h.j(0,$.a2,L.b("#805233"),!0)
h.j(0,$.a1,L.b("#663c1f"),!0)
h.j(0,$.W,L.b("#805233"),!0)
h.j(0,$.X,L.b("#737373"),!0)
h.j(0,$.V,L.b("#664d3c"),!0)
h.j(0,$.a0,L.b("#663c1f"),!0)
h.j(0,$.a_,L.b("#4d2d17"),!0)
h.j(0,$.Z,L.b("#68594e"),!0)
h.j(0,$.Y,L.b("#4f443b"),!0)
b=P.f(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),q)
g=$.vD
f=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
f.j(0,$.S,L.b("#FF9B00"),!0)
f.j(0,$.U,L.b("#FF9B00"),!0)
f.j(0,$.T,L.b("#FF8700"),!0)
f.j(0,$.a2,L.b("#7F7F7F"),!0)
f.j(0,$.a1,L.b("#727272"),!0)
f.j(0,$.W,L.b("#A3A3A3"),!0)
f.j(0,$.X,L.b("#999999"),!0)
f.j(0,$.V,L.b("#898989"),!0)
f.j(0,$.a0,L.b("#EFEFEF"),!0)
f.j(0,$.a_,L.b("#DBDBDB"),!0)
f.j(0,$.Z,L.b("#C6C6C6"),!0)
f.j(0,$.Y,L.b("#ADADAD"),!0)
f=new L.of(h,b,0.01,0.01,0.01,0.5,42,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Re_Bear",null,!1,!0,!0,g,null,!1,!1,!0,1,f,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
f.S(42,"Re_Bear",!1,!0,!0,null,g)
$.z8=f
f=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
f.j(0,$.S,L.b("#853dcc"),!0)
f.j(0,$.U,L.b("#f76261"),!0)
f.j(0,$.T,L.b("#913a39"),!0)
f.j(0,$.a2,L.b("#ab4443"),!0)
f.j(0,$.a1,L.b("#78302f"),!0)
f.j(0,$.W,L.b("#a54cff"),!0)
f.j(0,$.X,L.b("#8c41d9"),!0)
f.j(0,$.V,L.b("#7335b3"),!0)
f.j(0,$.a0,L.b("#853dcc"),!0)
f.j(0,$.a_,L.b("#642e99"),!0)
f.j(0,$.Z,L.b("#4c2375"),!0)
f.j(0,$.Y,L.b("#2b1442"),!0)
g=P.f(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),q)
b=$.tf
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#FF9B00"),!0)
h.j(0,$.U,L.b("#FF9B00"),!0)
h.j(0,$.T,L.b("#FF8700"),!0)
h.j(0,$.a2,L.b("#7F7F7F"),!0)
h.j(0,$.a1,L.b("#727272"),!0)
h.j(0,$.W,L.b("#A3A3A3"),!0)
h.j(0,$.X,L.b("#999999"),!0)
h.j(0,$.V,L.b("#898989"),!0)
h.j(0,$.a0,L.b("#EFEFEF"),!0)
h.j(0,$.a_,L.b("#DBDBDB"),!0)
h.j(0,$.Z,L.b("#C6C6C6"),!0)
h.j(0,$.Y,L.b("#ADADAD"),!0)
h=new L.og(f,g,0.01,0.01,0.01,0.5,43,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Re_Hippo",null,!1,!0,!0,b,null,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
h.S(43,"Re_Hippo",!1,!0,!0,null,b)
$.z9=h
h=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
h.j(0,$.S,L.b("#3c733c"),!0)
h.j(0,$.U,L.b("#3c733c"),!0)
h.j(0,$.T,L.b("#214021"),!0)
h.j(0,$.a2,L.b("#214021"),!0)
h.j(0,$.a1,L.b("#070d07"),!0)
h.j(0,$.W,L.b("#2f402f"),!0)
h.j(0,$.X,L.b("#1c261c"),!0)
h.j(0,$.V,L.b("#090d09"),!0)
h.j(0,$.a0,L.b("#2e582e"),!0)
h.j(0,$.a_,L.b("#142614"),!0)
h.j(0,$.Z,L.b("#1b331b"),!0)
h.j(0,$.Y,L.b("#070d07"),!0)
b=P.f(H.a(["Lock","Lockpicker","Loser","Loss","Leeway"],p),q)
g=$.tf
m=new L.P(P.i(null,null,null,q,m),P.i(null,null,null,i,m),P.i(null,null,null,q,i),P.i(null,null,null,i,q))
m.j(0,$.S,L.b("#FF9B00"),!0)
m.j(0,$.U,L.b("#FF9B00"),!0)
m.j(0,$.T,L.b("#FF8700"),!0)
m.j(0,$.a2,L.b("#7F7F7F"),!0)
m.j(0,$.a1,L.b("#727272"),!0)
m.j(0,$.W,L.b("#A3A3A3"),!0)
m.j(0,$.X,L.b("#999999"),!0)
m.j(0,$.V,L.b("#898989"),!0)
m.j(0,$.a0,L.b("#EFEFEF"),!0)
m.j(0,$.a_,L.b("#DBDBDB"),!0)
m.j(0,$.Z,L.b("#C6C6C6"),!0)
m.j(0,$.Y,L.b("#ADADAD"),!0)
j=new L.oh(h,b,0.01,0.01,0.01,0.5,44,new H.q(0,null,null,null,null,null,0,o),null,"","",!1,"Re_Lock",null,!1,!0,!0,g,null,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.A(null,null,n))
j.S(44,"Re_Lock",!1,!0,!0,null,g)
$.za=j
$.z4=L.yJ(255,"Null",!1,!0,!1,null,null)
j=P.f(H.a([new E.G($.bJ,1,!0),new E.G($.eI,1,!0)],k),l)
g=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
q=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
m=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
b=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
h=H.a(["nobody"],p)
i=P.f(H.a([],k),l)
f=H.a(["Nobody"],p)
e=H.a(["Nobody"],p)
q=new F.nw(j,g,q,m,b,!1,h,i,f,e,1,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"loud","musical","Music")
q.J()
q.K()
B.cQ(q)
$.AB=q
q=P.f(H.a([new E.G($.dD,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kv(q,m,j,i,h,!1,g,f,e,d,13,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"nerdy","smart","Academic")
q.J()
q.K()
B.cQ(q)
$.Au=q
q=P.f(H.a([new E.G($.dE,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kz(q,m,j,i,h,!1,g,f,e,d,4,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"dumb","athletic","Athletic")
q.J()
q.K()
B.cQ(q)
$.Av=q
q=P.f(H.a([new E.G($.eJ,-1,!0),new E.G($.eI,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kX(q,m,j,i,h,!1,g,f,e,d,0,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"dorky","funny","Comedy")
q.J()
q.K()
B.cQ(q)
$.Aw=q
q=P.f(H.a([new E.G($.bJ,-1,!0),new E.G($.dW,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.l8(q,m,j,i,h,!1,g,f,e,d,2,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"pretentious","cultured","Culture")
q.J()
q.K()
B.cQ(q)
$.Ax=q
q=P.f(H.a([new E.G($.bJ,1,!0),new E.G($.d_,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.li(q,m,j,i,h,!1,g,f,e,d,8,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"boring","domestic","Domestic")
q.J()
q.K()
B.cQ(q)
$.Ay=q
q=P.f(H.a([new E.G($.eI,1,!0),new E.G($.dn,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lM(q,m,j,i,h,!1,g,f,e,d,7,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"whimpy","imaginative","Fantasy")
q.J()
q.K()
B.cQ(q)
$.Az=q
q=P.f(H.a([new E.G($.dE,1,!0),new E.G($.dW,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mW(q,m,j,i,h,!1,g,f,e,d,6,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"harsh","fair-minded","Justice")
q.J()
q.K()
B.cQ(q)
$.AA=q
q=P.f(H.a([new E.G($.cu,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.o5(q,m,j,i,h,!1,g,f,e,d,9,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"frivolous","geeky","PopCulture")
q.J()
q.K()
B.cQ(q)
$.AD=q
q=P.f(H.a([new E.G($.d_,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.oo(q,m,j,i,h,!1,g,f,e,d,12,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"obsessive","romantic","Romantic")
q.J()
q.K()
B.cQ(q)
$.AE=q
q=P.f(H.a([new E.G($.bJ,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oL(q,m,j,i,h,!1,g,f,e,d,11,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"shallow","extroverted","Social")
q.J()
q.K()
B.cQ(q)
$.AF=q
q=P.f(H.a([new E.G($.d_,-1,!0),new E.G($.bJ,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pr(q,m,j,i,h,!1,g,f,e,d,5,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"terrible","honest","Terrible")
q.J()
q.K()
B.cQ(q)
$.AH=q
q=P.f(H.a([new E.G($.dD,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.q7(q,m,j,i,h,!1,g,f,e,d,3,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"wordy","lettered","Writing")
q.J()
q.K()
B.cQ(q)
$.AI=q
q=P.f(H.a([new E.G($.dn,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.pp(q,m,j,i,h,!1,g,f,e,d,10,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"awkward","techy","Technology")
q.J()
q.K()
B.cQ(q)
$.AG=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hl(!0,q,l,k,p,-13,new H.q(0,null,null,null,null,null,0,o),["NONE"],Q.A(null,null,n),"","","Null")
q.J()
q.K()
B.cQ(q)
$.AC=q
A.wV()
t=3
return P.cl(Y.nx(),$async$rQ)
case 3:case 1:return P.bm(r,s)}})
return P.bn($async$rQ,s)}},V={li:function li(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},m5:function m5(a){this.a=a},mg:function mg(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},ns:function ns(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},nS:function nS(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},op:function op(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},pr:function pr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
A9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
s=Math.pow(256,e)
c.toString
r=H.cR(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.aw(n-1,p)
t.aw(a,8)}return t.bg(b)},
A8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.e2(a,b)
for(q=e*8,p=0;p<c;){o=r.ao(q)+1
n=r.ao(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
tt:function(a){return new V.ls(a)},
ts:function(a){return new V.lr(a)},
A5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
s=d.gcY()
r=C.f.ay(Math.log(H.ki(s.gv(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cR(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.aw(m-1,o)
t.aw(a,r)}return t.bg(b)},
A4:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ay(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.e2(a,b)
for(r=e*8,o=0;o<c;){n=p.ao(r)+1
m=p.ao(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
tr:function(a){return new V.lq(a)},
tq:function(a){return new V.lp(a)},
A7:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
s=d.gcY()
r=C.f.ay(Math.log(H.ki(s.gv(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cR(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ay(Math.log(n)/0.6931471805599453)+1
t.aw(k-1,5)
t.aw(n-1,k)
t.aw(a,r)}return t.bg(b)},
A6:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ay(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.e2(a,b)
for(o=0;o<c;){n=p.ao(p.ao(5)+1)+1
m=p.ao(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
ls:function ls(a){this.a=a},
lr:function lr(a){this.a=a},
lq:function lq(a){this.a=a},
lp:function lp(a){this.a=a}},Z={lk:function lk(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
Aj:function(){var t,s
if(!$.w6)$.w6=!0
else return
t=[P.C]
s=new Y.pt(H.a([],t))
$.tI=s
Z.cP(s,"txt",null)
Z.cP($.tI,"vert","x-shader/x-vertex")
Z.cP($.tI,"frag","x-shader/x-fragment")
$.Ai=new Y.oe(H.a([],t))
$.w8=new Y.kQ(H.a([],t))
s=new B.qc(H.a([],t))
$.wa=s
Z.cP(s,"zip",null)
Z.cP($.wa,"bundle",null)
s=new U.q2(H.a([],t))
$.Ar=s
Z.cP(s,"words",null)
s=new Q.o3(H.a([],t))
$.w9=s
Z.cP(s,"png",null)
Z.cP($.w9,"jpg","image/jpeg")
$.Ap=new Q.o0(H.a([],t))
s=new M.oS(H.a([],t))
$.Aq=s
Z.cP(s,"psprite",null)
s=new V.m5(H.a([],t))
$.tH=s
Z.cP(s,"ttf",null)
Z.cP($.tH,"otf",null)
Z.cP($.tH,"woff",null)
s=new Y.nK(null,H.a([],t))
$.Am=s
Z.cP(s,"obj",null)
s=new U.ng(H.a([],t))
$.Ak=s
Z.cP(s,"mp3",null)
$.Al=new U.pf(H.a([],t))
s=new U.nO(H.a([],t))
$.An=s
Z.cP(s,"ogg",null)
$.Ao=new U.pg(H.a([],t))},
cP:function(a,b,c){$.$get$m6().i(0,b,new Z.ir(a,c,[null,null]))
a.a.push(b)},
w7:function(a){var t
if($.$get$m6().ag(0,a)){t=$.$get$m6().B(0,a)
if(t.a instanceof O.c8)return t
throw H.m("File format for extension ."+H.D(a)+" does not match expected types.")}throw H.m("No file format found for extension ."+H.D(a))},
ir:function ir(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mV:function mV(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
nf:function nf(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,D,E,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
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
_.r2=r2},
om:function om(m,n,p,w,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
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
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},
uj:function uj(){},
uf:function uf(){},
ug:function ug(){}},X={h8:function h8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ib:function ib(){},mi:function mi(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},mn:function mn(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},H:function H(a,b,c){this.a=a
this.b=b
this.c=c}},N={ah:function ah(){},mW:function mW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oa:function oa(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},on:function on(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},oL:function oL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oN:function oN(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},pz:function pz(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
G4:function(a){var t,s,r,q,p,o,n,m,l
t=J.cM(a)
s=new W.k6(document.querySelectorAll("link"),[null])
for(r=new H.ez(s,s.gv(s),0,null,[null]);r.L();){q=r.d
p=J.aK(q)
if(!!p.$ishu&&q.rel==="stylesheet"){o=$.$get$nZ()
H.D(p.gav(q))
o.toString
o=t.length
n=Math.min(o,J.cm(p.gav(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.i8(p.gav(q),m)){l=C.c.aa(t,m)
$.$get$nZ().toString
return l.split("/").length-1}continue}}}$.$get$nZ().bn(C.m,"Didn't find a css link to derive relative path")
return 0},
nY:function(){var t=P.xs()
if(!$.$get$nX().ag(0,t))$.$get$nX().i(0,t,N.G4(t))
return $.$get$nX().B(0,t)}},E={iE:function iE(){},nN:function nN(){},G:function G(a,b,c){this.a=a
this.b=b
this.c=c},fN:function fN(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},nv:function nv(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},oc:function oc(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},ot:function ot(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},pY:function pY(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2}},B={mf:function mf(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
cQ:function(a){var t=a.f
if($.$get$mw().ag(0,t))throw H.m("Duplicate aspect id for "+a.H(0)+": "+t+" is already registered for "+J.cM($.$get$mw().B(0,t))+".")
$.$get$mw().i(0,t,a)},
hl:function hl(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
qc:function qc(a){this.a=a},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a,b){this.a=a
this.b=b},
HE:function(a){return a.bo(0)},
dF:function dF(a){this.a=a},
jZ:function jZ(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hV:function hV(a,b){this.a=a
this.b=b}},Q={mo:function mo(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},ms:function ms(){},o3:function o3(a){this.a=a},o0:function o0(a){this.a=a},mZ:function mZ(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},oo:function oo(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pX:function pX(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},jF:function jF(){},
A:function(a,b,c){var t=new Q.dZ(null,null,[c])
t.dn(a,b,c)
return t},
vb:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.A(d,null,e)
s=a.gv(a)
C.b.sv(t.b,s)
if(H.e0(a,"$isp",[e],"$asp"))if(H.e0(a,"$iscU",[e],"$ascU"))for(s=J.dd(a.gcc()),r=0;s.L();){q=s.gY()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gaf(a),p=[H.O(t,0)],r=0;s.L();){n=s.gY()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gaf(a),p=[e],o=[H.O(t,0)];s.L();){l=s.gY()
if(H.HV(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.e0(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.m("Invalid entry type "+H.D(J.vw(l))+" for WeightedList<"+H.D(H.c0(H.dI(e)))+">. Should be "+H.D(H.c0(H.dI(e)))+" or WeightPair<"+H.D(H.c0(H.dI(e)))+">.")}return t},
vc:function(a,b,c,d){return new Q.jW(J.vy(a.gcc(),new Q.q0(c,d,b)),null,[c,d])},
cU:function cU(){},
dZ:function dZ(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hT:function hT(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eQ:function eQ(){},
hS:function hS(){},
q_:function q_(a,$ti){this.a=a
this.$ti=$ti},
jW:function jW(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
oA:function(){var t=0,s=P.bi(),r
var $async$oA=P.bo(function(a,b){if(a===1)return P.bl(b,s)
while(true)switch(t){case 0:t=3
return P.cl(A.hw("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oA)
case 3:r=A.hw("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$oA,s)}},G={n1:function n1(m,n,p,w,q,t,u,A,C,D,E,F,G,I,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
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
_.x2=x2
_.y1=y1
_.y2=y2},o5:function o5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
zO:function(a){var t,s,r,q,p,o,n,m,l
t=G.a7
s=P.uq(a,t)
r=P.aj(null,null,null,t)
q=H.a([],[G.e])
for(t=G.FH(),p=J.dd(t.a),t=new H.jX(p,t.b,[H.O(t,0)]);t.L();){o=p.gY()
if(o.ez(s))q.push(o)}C.b.dh(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bX)(q),++n){o=q[n]
if(o.ez(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bX)(p),++l)s.az(0,p[l])}}if(s.a!==0)r.c0(0,s)
return r},
FH:function(){var t=$.$get$d()
t.toString
return new H.hU(t,new G.mL(),[H.O(t,0)])},
a7:function a7(){},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c){this.a=a
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
mL:function mL(){}},D={no:function no(m,n,p,w,q,t,u,A,C,D,E,F,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2},pp:function pp(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
H0:function(){if($.xc)return
$.xc=!0
var t=new D.cJ("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=0
$.oV=t
t=new D.cJ("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.H_=t
t=new D.k_(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=2.5
t.Q=1
$.dE=t
t=new D.k_(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=2.5
$.dW=t
t=new D.cJ("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.GZ=t
t=new D.cJ("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.cu=t
t=new D.ok("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.d_=t
t=new D.cJ("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.bJ=t
t=new D.cJ("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dD=t
t=new D.cJ("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.eI=t
t=new D.cJ("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.eJ=t
t=new D.cJ("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dn=t
t=new D.cJ("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.bW=t},
v_:function(){var t=$.$get$cS()
return new H.hU(t,new D.oW(),[H.O(t,0)])},
oW:function oW(){},
cJ:function cJ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
k_:function k_(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
ok:function ok(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={nw:function nw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},q6:function q6(a){this.a=a},q7:function q7(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
FM:function(a){if(a===C.h){window
return C.i.gaG(C.i)}if(a===C.m){window
return C.i.gi9()}if(a===C.a_){window
return C.i.ghB()}return P.HY()},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
uo:function uo(){},
A3:function(a,b,c,d){var t,s,r,q
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;++q)t.c1(s[q])
return t.bg(b)},
A2:function(a,b,c,d){var t,s,r,q,p
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.e2(a,b)
for(q=0;q<c;++q){p=r.cd()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
A1:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
s=d.gcY()
r=C.f.ay(Math.log(H.ki(s.gv(s)))/0.6931471805599453)+1
c.toString
q=H.cR(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.c1(o-1)
t.aw(a,r)}return t.bg(b)},
A0:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cA(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ay(Math.log(r.gv(r))/0.6931471805599453)+1
p=new B.df(null,0)
p.a=J.e2(a,b)
for(o=0;o<c;){n=p.cd()+1
m=p.ao(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
A_:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dw(new P.ca(""),0,0)
t.aw(a,8)
c.toString
s=H.cR(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.c1(p-1)
t.c1(a)}return t.bg(b)},
zZ:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cA(c)
s=new Uint8Array(t)
r=new B.df(null,0)
r.a=J.e2(a,b)
for(q=0;q<c;){p=r.cd()+1
o=r.cd()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
Gr:function(a){var t,s
if(a.gv(a).aQ(0,1)){a.B(0,1)
a.B(0,1)
t=!0}else t=!1
s=a.B(0,0)
s.gij(s).gix().ei("checking for two players, ps is "+H.D(a)+", ret is "+t)
return t},
Go:function(a){a.gat(a).gbz()
return!1},
Ge:function(a){a.gat(a).gbz()
return!1},
Gq:function(a){a.gat(a).gbz()
return!1},
Gp:function(a){a.gat(a).gbz()
return!1},
Gn:function(a){return a.gat(a).gbA().giw()},
Gl:function(a){return a.gat(a).gbA().giu()},
Gk:function(a){return a.gat(a).gbA().git()},
Gh:function(a){return a.gat(a).gbA().gir()},
Gj:function(a){return a.gat(a).gbA().gis()},
Gm:function(a){return a.gat(a).gbA().giv()},
Gi:function(a){var t=a.gat(a)
t.gbz()
t.gbz()
return!1},
Gf:function(a){return!0},
Gg:function(a){a.gat(a).gio()
return!1},
ob:function ob(){},
ae:function ae(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
a3:function a3(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
al:function al(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
oq:function oq(m,n,p,w,q,t,u,A,C,D,E,F,G,I,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2){var _=this
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
_.A=A
_.C=C
_.D=D
_.E=E
_.F=F
_.G=G
_.I=I
_.ab=ab
_.a=a
_.b=b
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
_.x2=x2
_.y1=y1
_.y2=y2},
pl:function pl(rx,ry,x1,x2,y1,y2,m,n,p,w,q,t,u,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.n=n
_.p=p
_.w=w
_.q=q
_.t=t
_.u=u
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
_.r2=r2},
hg:function hg(){},
uG:function uG(){},
uF:function uF(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.ul.prototype={}
J.k.prototype={
a_:function(a,b){return a===b},
gan:function(a){return H.eC(a)},
H:function(a){return H.o8(a)},
gar:function(a){return new H.dY(H.km(a),null)},
$ishg:1,
$isap:1,
$isfp:1,
$isap:1,
$ismR:1,
$isk:1,
$ismR:1,
$isk:1,
$ishA:1,
$isap:1}
J.mP.prototype={
H:function(a){return String(a)},
gan:function(a){return a?519018:218159},
gar:function(a){return C.ag},
$isda:1}
J.mQ.prototype={
a_:function(a,b){return null==b},
H:function(a){return"null"},
gan:function(a){return 0},
gar:function(a){return C.aa},
$isd6:1}
J.hs.prototype={
gan:function(a){return 0},
gar:function(a){return C.a9},
H:function(a){return String(a)},
$ismR:1,
h:function(a,b){return a.add(b)},
az:function(a,b){return a.remove(b)},
gv:function(a){return a.length},
gca:function(a){return a.left},
gcg:function(a){return a.top},
gbi:function(a){return a.width},
gbc:function(a){return a.height},
hP:function(a,b){return a.parse(b)},
eQ:function(a,b){return a.setLogging(b)},
eR:function(a,b){return a.setMaterials(b)}}
J.o2.prototype={}
J.eN.prototype={}
J.ex.prototype={
H:function(a){var t=a[$.$get$vQ()]
return t==null?this.eW(a):J.cM(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ev.prototype={
c5:function(a,b){if(!!a.immutable$list)throw H.m(new P.aa(b))},
c4:function(a,b){if(!!a.fixed$length)throw H.m(new P.aa(b))},
h:function(a,b){this.c4(a,"add")
a.push(b)},
az:function(a,b){var t
this.c4(a,"remove")
for(t=0;t<a.length;++t)if(J.ba(a[t],b)){a.splice(t,1)
return!0}return!1},
aq:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.m(new P.bO(a))}},
aK:function(a,b){return new H.fk(a,b,[H.O(a,0),null])},
bl:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.D(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
dg:function(a,b){return H.xe(a,b,null,H.O(a,0))},
hq:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.m(new P.bO(a))}return s},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
cm:function(a,b,c){if(b<0||b>a.length)throw H.m(P.bG(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.m(H.bt(c))
if(c<b||c>a.length)throw H.m(P.bG(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.O(a,0)])
return H.a(a.slice(b,c),[H.O(a,0)])},
gat:function(a){if(a.length>0)return a[0]
throw H.m(H.jq())},
gbm:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.m(H.jq())},
ap:function(a,b,c,d,e){var t,s,r
this.c5(a,"setRange")
P.dm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bb(P.bG(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.m(H.wP())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
aN:function(a,b,c,d){return this.ap(a,b,c,d,0)},
c8:function(a,b,c,d){var t
this.c5(a,"fill range")
P.dm(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aP:function(a,b,c,d){var t,s,r,q,p,o
this.c4(a,"replaceRange")
P.dm(b,c,a.length,null,null,null)
d=C.c.aD(d)
if(typeof c!=="number")return c.a9()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.aN(a,b,r,d)
if(p!==0){this.ap(a,r,o,a,c)
this.sv(a,o)}}else{o=q+(s-t)
this.sv(a,o)
this.ap(a,r,o,a,c)
this.aN(a,b,r,d)}},
hn:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.m(new P.bO(a))}return!0},
di:function(a,b){var t
this.c5(a,"sort")
t=b==null?P.HX():b
H.jN(a,0,a.length-1,t)},
dh:function(a){return this.di(a,null)},
bd:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.ba(a[t],b))return t
return-1},
bt:function(a,b){return this.bd(a,b,0)},
ax:function(a,b){var t
for(t=0;t<a.length;++t)if(J.ba(a[t],b))return!0
return!1},
gac:function(a){return a.length===0},
H:function(a){return P.jp(a,"[","]")},
ak:function(a,b){var t=H.a(a.slice(0),[H.O(a,0)])
return t},
aD:function(a){return this.ak(a,!0)},
gaf:function(a){return new J.i9(a,a.length,0,null,[H.O(a,0)])},
gan:function(a){return H.eC(a)},
gv:function(a){return a.length},
sv:function(a,b){this.c4(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.e4(b,"newLength",null))
if(b<0)throw H.m(P.bG(b,0,null,"newLength",null))
a.length=b},
B:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c5(a,b))
if(b>=a.length||b<0)throw H.m(H.c5(a,b))
return a[b]},
i:function(a,b,c){this.c5(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c5(a,b))
if(b>=a.length||b<0)throw H.m(H.c5(a,b))
a[b]=c},
$isaO:1,
$asaO:function(){},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
J.uk.prototype={}
J.i9.prototype={
gY:function(){return this.d},
L:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.m(H.bX(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fj.prototype={
aJ:function(a,b){var t
if(typeof b!=="number")throw H.m(H.bt(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcV(b)
if(this.gcV(a)===t)return 0
if(this.gcV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcV:function(a){return a===0?1/a<0:a<0},
hY:function(a,b){return a%b},
ay:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.m(new P.aa(""+a+".floor()"))},
bf:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.m(new P.aa(""+a+".round()"))},
as:function(a,b,c){if(C.a.aJ(b,c)>0)throw H.m(H.bt(b))
if(this.aJ(a,b)<0)return b
if(this.aJ(a,c)>0)return c
return a},
l:function(a){return a},
bu:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.m(P.bG(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.ad(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bb(new P.aa("Unexpected toString result: "+t))
r=J.bd(s)
t=r.B(s,1)
q=+r.B(s,3)
if(r.B(s,2)!=null){t+=r.B(s,2)
q-=r.B(s,2).length}return t+C.c.aB("0",q)},
H:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gan:function(a){return a&0x1FFFFFFF},
dd:function(a){return-a},
a3:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
return a-b},
aB:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
return a*b},
bP:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
bw:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e_(a,b)},
aA:function(a,b){return(a|0)===a?a/b|0:this.e_(a,b)},
e_:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.m(new P.aa("Result of truncating division is "+H.D(t)+": "+H.D(a)+" ~/ "+H.D(b)))},
aE:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
if(b<0)throw H.m(H.bt(b))
return b>31?0:a<<b>>>0},
aF:function(a,b){return b>31?0:a<<b>>>0},
b8:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fV:function(a,b){if(b<0)throw H.m(H.bt(b))
return b>31?0:a>>>b},
dZ:function(a,b){return b>31?0:a>>>b},
al:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
return a<b},
aQ:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
return a>b},
aH:function(a,b){if(typeof b!=="number")throw H.m(H.bt(b))
return a>=b},
gar:function(a){return C.aj},
$isdu:1}
J.jt.prototype={
gar:function(a){return C.ai},
$isa4:1,
$isdu:1,
$isF:1}
J.js.prototype={
gar:function(a){return C.ah},
$isa4:1,
$isdu:1}
J.ew.prototype={
ad:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c5(a,b))
if(b<0)throw H.m(H.c5(a,b))
if(b>=a.length)H.bb(H.c5(a,b))
return a.charCodeAt(b)},
am:function(a,b){if(b>=a.length)throw H.m(H.c5(a,b))
return a.charCodeAt(b)},
cL:function(a,b,c){if(c>b.length)throw H.m(P.bG(c,0,b.length,null,null))
return new H.ri(b,a,c)},
b9:function(a,b){return this.cL(a,b,0)},
en:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.m(P.bG(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.ad(b,c+s)!==this.am(a,s))return
return new H.jS(c,b,a)},
a3:function(a,b){if(typeof b!=="string")throw H.m(P.e4(b,null,null))
return a+b},
hm:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.aa(a,s-t)},
d6:function(a,b,c){return H.yh(a,b,c)},
i1:function(a,b,c){return H.Iq(a,b,c,null)},
eT:function(a,b){if(b==null)H.bb(H.bt(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hr&&b.gdN().exec("").length-2===0)return a.split(b.gfK())
else return this.fp(a,b)},
aP:function(a,b,c,d){var t,s
H.ee(b)
c=P.dm(b,c,a.length,null,null,null)
H.ee(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fp:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.C])
for(s=J.yl(b,a),s=s.gaf(s),r=0,q=1;s.L();){p=s.gY()
o=p.gdj(p)
n=p.gea(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.O(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.aa(a,r))
return t},
aR:function(a,b,c){var t
H.ee(c)
if(typeof c!=="number")return c.al()
if(c<0||c>a.length)throw H.m(P.bG(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.yz(b,a,c)!=null},
au:function(a,b){return this.aR(a,b,0)},
O:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bb(H.bt(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bb(H.bt(c))
if(typeof b!=="number")return b.al()
if(b<0)throw H.m(P.jK(b,null,null))
if(typeof c!=="number")return H.am(c)
if(b>c)throw H.m(P.jK(b,null,null))
if(c>a.length)throw H.m(P.jK(c,null,null))
return a.substring(b,c)},
aa:function(a,b){return this.O(a,b,null)},
i8:function(a){return a.toUpperCase()},
bv:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.am(t,0)===133){r=J.FI(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.ad(t,q)===133?J.uh(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eA:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.ad(t,r)===133)s=J.uh(t,r)}else{s=J.uh(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
aB:function(a,b){var t,s
if(typeof b!=="number")return H.am(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.m(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
cX:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aB(c,t)+a},
bd:function(a,b,c){var t
if(c<0||c>a.length)throw H.m(P.bG(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bt:function(a,b){return this.bd(a,b,0)},
hH:function(a,b,c){var t
if(b==null)H.bb(H.bt(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.bb(P.bG(t,0,c,null,null))
if(b.cv(a,t)!=null)return t}return-1},
ek:function(a,b){return this.hH(a,b,null)},
e8:function(a,b,c){if(c>a.length)throw H.m(P.bG(c,0,a.length,null,null))
return H.Ip(a,b,c)},
ax:function(a,b){return this.e8(a,b,0)},
gac:function(a){return a.length===0},
aJ:function(a,b){var t
if(typeof b!=="string")throw H.m(H.bt(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
H:function(a){return a},
gan:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gar:function(a){return C.ab},
gv:function(a){return a.length},
B:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(H.c5(a,b))
if(b>=a.length||b<0)throw H.m(H.c5(a,b))
return a[b]},
$isaO:1,
$asaO:function(){},
$isC:1}
H.kW.prototype={
gv:function(a){return this.a.length},
B:function(a,b){return C.c.ad(this.a,b)},
$ashQ:function(){return[P.F]},
$asju:function(){return[P.F]},
$ashJ:function(){return[P.F]},
$asr:function(){return[P.F]},
$asv:function(){return[P.F]},
$asp:function(){return[P.F]}}
H.v.prototype={$asv:null}
H.ey.prototype={
gaf:function(a){return new H.ez(this,this.gv(this),0,null,[H.aU(this,"ey",0)])},
aq:function(a,b){var t,s
t=this.gv(this)
for(s=0;s<t;++s){b.$1(this.a0(0,s))
if(t!==this.gv(this))throw H.m(new P.bO(this))}},
gac:function(a){return this.gv(this)===0},
gat:function(a){if(this.gv(this)===0)throw H.m(H.jq())
return this.a0(0,0)},
ax:function(a,b){var t,s
t=this.gv(this)
for(s=0;s<t;++s){if(J.ba(this.a0(0,s),b))return!0
if(t!==this.gv(this))throw H.m(new P.bO(this))}return!1},
aK:function(a,b){return new H.fk(this,b,[H.aU(this,"ey",0),null])},
ak:function(a,b){var t,s,r
t=H.a([],[H.aU(this,"ey",0)])
C.b.sv(t,this.gv(this))
for(s=0;s<this.gv(this);++s){r=this.a0(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
aD:function(a){return this.ak(a,!0)}}
H.pj.prototype={
gfq:function(){var t=J.cm(this.a)
return t},
gfW:function(){var t,s
t=J.cm(this.a)
s=this.b
if(J.cy(s,t))return t
return s},
gv:function(a){var t,s
t=J.cm(this.a)
s=this.b
if(J.vq(s,t))return 0
if(typeof s!=="number")return H.am(s)
return t-s},
a0:function(a,b){var t=J.e1(this.gfW(),b)
if(J.ef(b,0)||J.vq(t,this.gfq()))throw H.m(P.by(b,this,"index",null,null))
return J.vt(this.a,t)},
ak:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.bd(s)
q=r.gv(s)
if(typeof t!=="number")return H.am(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sv(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.a0(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gv(s)<q)throw H.m(new P.bO(this))}return n},
aD:function(a){return this.ak(a,!0)},
f4:function(a,b,c,d){var t=this.b
if(J.ef(t,0))H.bb(P.bG(t,0,null,"start",null))}}
H.ez.prototype={
gY:function(){return this.d},
L:function(){var t,s,r,q
t=this.a
s=J.bd(t)
r=s.gv(t)
if(this.b!==r)throw H.m(new P.bO(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.a0(t,q);++this.c
return!0}}
H.hz.prototype={
gaf:function(a){return new H.jv(null,J.dd(this.a),this.b,this.$ti)},
gv:function(a){return J.cm(this.a)},
gac:function(a){return J.tb(this.a)},
$asp:function(a,b){return[b]}}
H.h_.prototype={$isv:1,
$asv:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
H.jv.prototype={
L:function(){var t=this.b
if(t.L()){this.a=this.c.$1(t.gY())
return!0}this.a=null
return!1},
gY:function(){return this.a},
$asjr:function(a,b){return[b]}}
H.fk.prototype={
gv:function(a){return J.cm(this.a)},
a0:function(a,b){return this.b.$1(J.vt(this.a,b))},
$asey:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
H.hU.prototype={
gaf:function(a){return new H.jX(J.dd(this.a),this.b,this.$ti)},
aK:function(a,b){return new H.hz(this,b,[H.O(this,0),null])}}
H.jX.prototype={
L:function(){var t,s
for(t=this.a,s=this.b;t.L();)if(s.$1(t.gY())===!0)return!0
return!1},
gY:function(){return this.a.gY()}}
H.iB.prototype={
sv:function(a,b){throw H.m(new P.aa("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.m(new P.aa("Cannot add to a fixed-length list"))},
aP:function(a,b,c,d){throw H.m(new P.aa("Cannot remove from a fixed-length list"))}}
H.pK.prototype={
i:function(a,b,c){throw H.m(new P.aa("Cannot modify an unmodifiable list"))},
sv:function(a,b){throw H.m(new P.aa("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.m(new P.aa("Cannot add to an unmodifiable list"))},
ap:function(a,b,c,d,e){throw H.m(new P.aa("Cannot modify an unmodifiable list"))},
aN:function(a,b,c,d){return this.ap(a,b,c,d,0)},
aP:function(a,b,c,d){throw H.m(new P.aa("Cannot remove from an unmodifiable list"))},
c8:function(a,b,c,d){throw H.m(new P.aa("Cannot modify an unmodifiable list"))},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
H.hQ.prototype={$asr:null,$asv:null,$asp:null,$isr:1,$isv:1,$isp:1}
H.t7.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.t8.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.r0.prototype={}
H.fA.prototype={
e4:function(a,b){if(!this.f.a_(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cJ()},
i0:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.az(0,a)
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
if(q===s.c)s.dH();++s.d}this.y=!1}this.cJ()},
h_:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aK(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a_(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hZ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aK(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a_(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bb(new P.aa("removeRange"))
P.dm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eP:function(a,b){if(!this.r.a_(0,a))return
this.db=b},
hw:function(a,b,c){var t=J.aK(b)
if(!t.a_(b,0))t=t.a_(b,1)&&!this.cy
else t=!0
if(t){J.fJ(a,c)
return}t=this.cx
if(t==null){t=P.ur(null,null)
this.cx=t}t.aZ(0,new H.qW(a,c))},
hv:function(a,b){var t
if(!this.r.a_(0,a))return
t=J.aK(b)
if(!t.a_(b,0))t=t.a_(b,1)&&!this.cy
else t=!0
if(t){this.c9()
return}t=this.cx
if(t==null){t=P.ur(null,null)
this.cx=t}t.aZ(0,this.ghG())},
hx:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fH(a)
if(b!=null)P.fH(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cM(a)
s[1]=b==null?null:J.cM(b)
for(r=new P.dG(t,t.r,null,null,[null]),r.c=t.e;r.L();)J.fJ(r.d,s)},
bE:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cx(o)
p=H.cw(o)
this.hx(q,p)
if(this.db===!0){this.c9()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghF()
if(this.cx!=null)for(;n=this.cx,!n.gac(n);)this.cx.es().$0()}return s},
cW:function(a){return this.b.B(0,a)},
dr:function(a,b){var t=this.b
if(t.ag(0,a))throw H.m(P.lu("Registry: ports must be registered only once."))
t.i(0,a,b)},
cJ:function(){var t=this.b
if(t.gv(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c9()},
c9:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.br(0)
for(t=this.b,s=t.gci(t),s=s.gaf(s);s.L();)s.gY().fi()
t.br(0)
this.c.br(0)
u.globalState.z.az(0,this.a)
this.dx.br(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fJ(q,t[p])}this.ch=null}},
ghF:function(){return this.d},
gha:function(){return this.e}}
H.qW.prototype={
$0:function(){J.fJ(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qx.prototype={
hg:function(){var t=this.a
if(t.b===t.c)return
return t.es()},
ex:function(){var t,s,r
t=this.hg()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.ag(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gac(s)}else s=!1
else s=!1
else s=!1
if(s)H.bb(P.lu("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gac(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hv(["command","close"])
r=new H.dH(!0,new P.ka(0,null,null,null,null,null,0,[null,P.F])).aM(r)
s.toString
self.postMessage(r)}return!1}t.hV()
return!0},
dU:function(){if(self.window!=null)new H.qy(this).$0()
else for(;this.ex(););},
bL:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dU()
else try{this.dU()}catch(r){t=H.cx(r)
s=H.cw(r)
q=u.globalState.Q
p=P.hv(["command","error","msg",H.D(t)+"\n"+H.D(s)])
p=new H.dH(!0,P.i0(null,P.F)).aM(p)
q.toString
self.postMessage(p)}}}
H.qy.prototype={
$0:function(){if(!this.a.ex())return
P.xf(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.eT.prototype={
hV:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bE(this.b)}}
H.r_.prototype={}
H.mx.prototype={
$0:function(){H.AM(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.my.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fG(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fG(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cJ()},
$S:function(){return{func:1,v:true}}}
H.qk.prototype={}
H.fB.prototype={
bj:function(a,b){var t,s,r
t=u.globalState.z.B(0,this.a)
if(t==null)return
s=this.b
if(s.gdM())return
r=H.HA(b)
if(t.gha()===s){s=J.bd(r)
switch(s.B(r,0)){case"pause":t.e4(s.B(r,1),s.B(r,2))
break
case"resume":t.i0(s.B(r,1))
break
case"add-ondone":t.h_(s.B(r,1),s.B(r,2))
break
case"remove-ondone":t.hZ(s.B(r,1))
break
case"set-errors-fatal":t.eP(s.B(r,1),s.B(r,2))
break
case"ping":t.hw(s.B(r,1),s.B(r,2),s.B(r,3))
break
case"kill":t.hv(s.B(r,1),s.B(r,2))
break
case"getErrors":s=s.B(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.B(r,1)
t.dx.az(0,s)
break}return}u.globalState.f.a.aZ(0,new H.eT(t,new H.r2(this,r),"receive"))},
a_:function(a,b){if(b==null)return!1
return b instanceof H.fB&&J.ba(this.b,b.b)},
gan:function(a){return this.b.gcz()}}
H.r2.prototype={
$0:function(){var t=this.a.b
if(!t.gdM())t.fd(0,this.b)},
$S:function(){return{func:1}}}
H.i4.prototype={
bj:function(a,b){var t,s,r
t=P.hv(["command","message","port",this,"msg",b])
s=new H.dH(!0,P.i0(null,P.F)).aM(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.B(0,this.b)
if(r!=null)r.postMessage(s)}},
a_:function(a,b){if(b==null)return!1
return b instanceof H.i4&&J.ba(this.b,b.b)&&J.ba(this.a,b.a)&&J.ba(this.c,b.c)},
gan:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aE()
s=this.a
if(typeof s!=="number")return s.aE()
r=this.c
if(typeof r!=="number")return H.am(r)
return(t<<16^s<<8^r)>>>0}}
H.fr.prototype={
fi:function(){this.c=!0
this.b=null},
fd:function(a,b){if(this.c)return
this.b.$1(b)},
$isGt:1,
gcz:function(){return this.a},
gdM:function(){return this.c}}
H.pB.prototype={
f5:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aZ(0,new H.eT(s,new H.pC(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dr(new H.pD(this,b),0),a)}else throw H.m(new P.aa("Timer greater than 0."))}}
H.pC.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pD.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dL.prototype={
gan:function(a){var t=this.a
if(typeof t!=="number")return t.df()
t=C.d.b8(t,0)^C.d.aA(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
a_:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dL){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcz:function(){return this.a}}
H.dH.prototype={
aM:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.B(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gv(t))
t=J.aK(a)
if(!!t.$isfm)return["buffer",a]
if(!!t.$iseB)return["typed",a]
if(!!t.$isaO)return this.eL(a)
if(!!t.$isAJ){r=this.geI()
q=t.gej(a)
q=H.dA(q,r,H.aU(q,"p",0),null)
q=P.dk(q,!0,H.aU(q,"p",0))
t=t.gci(a)
t=H.dA(t,r,H.aU(t,"p",0),null)
return["map",q,P.dk(t,!0,H.aU(t,"p",0))]}if(!!t.$ismR)return this.eM(a)
if(!!t.$isk)this.eB(a)
if(!!t.$isGt)this.bN(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfB)return this.eN(a)
if(!!t.$isi4)return this.eO(a)
if(!!t.$isf0){p=a.$static_name
if(p==null)this.bN(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdL)return["capability",a.a]
if(!(a instanceof P.ap))this.eB(a)
return["dart",u.classIdExtractor(a),this.eK(u.classFieldsExtractor(a))]},
bN:function(a,b){throw H.m(new P.aa((b==null?"Can't transmit:":b)+" "+H.D(a)))},
eB:function(a){return this.bN(a,null)},
eL:function(a){var t=this.eJ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bN(a,"Can't serialize indexable: ")},
eJ:function(a){var t,s,r
t=[]
C.b.sv(t,a.length)
for(s=0;s<a.length;++s){r=this.aM(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
eK:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aM(a[t]))
return a},
eM:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bN(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sv(s,t.length)
for(r=0;r<t.length;++r){q=this.aM(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
eO:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eN:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcz()]
return["raw sendport",a]}}
H.eR.prototype={
ba:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.m(P.dK("Bad serialized message: "+H.D(a)))
switch(C.b.gat(a)){case"ref":if(1>=a.length)return H.w(a,1)
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
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bC(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bC(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bC(r),[null])
s.fixed$length=Array
return s
case"map":return this.hk(a)
case"sendport":return this.hl(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hj(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dL(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bC(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.m("couldn't deserialize: "+H.D(a))}},
bC:function(a){var t,s,r
t=J.bd(a)
s=0
while(!0){r=t.gv(a)
if(typeof r!=="number")return H.am(r)
if(!(s<r))break
t.i(a,s,this.ba(t.B(a,s)));++s}return a},
hk:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.n6()
this.b.push(q)
s=J.yE(J.vy(s,this.ghi()))
for(t=J.bd(s),p=J.bd(r),o=0;o<t.gv(s);++o)q.i(0,t.B(s,o),this.ba(p.B(r,o)))
return q},
hl:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.ba(s,u.globalState.b)){p=u.globalState.z.B(0,r)
if(p==null)return
o=p.cW(q)
if(o==null)return
n=new H.fB(o,r)}else n=new H.i4(s,q,r)
this.b.push(n)
return n},
hj:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bd(s)
p=J.bd(r)
o=0
while(!0){n=t.gv(s)
if(typeof n!=="number")return H.am(n)
if(!(o<n))break
q[t.B(s,o)]=this.ba(p.B(r,o));++o}return q}}
H.kZ.prototype={
gac:function(a){return this.gv(this)===0},
H:function(a){return P.wW(this)},
i:function(a,b,c){return H.zQ()},
$isbs:1,
$asbs:null}
H.l_.prototype={
gv:function(a){return this.a},
ag:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
B:function(a,b){if(!this.ag(0,b))return
return this.dG(b)},
dG:function(a){return this.b[a]},
aq:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dG(q))}}}
H.oj.prototype={}
H.pH.prototype={
aU:function(a){var t,s,r
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
H.jB.prototype={
H:function(a){var t=this.b
if(t==null)return"NullError: "+H.D(this.a)
return"NullError: method not found: '"+H.D(t)+"' on null"}}
H.mU.prototype={
H:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.D(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.D(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.D(this.a)+")"}}
H.pJ.prototype={
H:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h7.prototype={
gaX:function(){return this.b}}
H.t9.prototype={
$1:function(a){if(!!J.aK(a).$isel)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kc.prototype={
H:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rW.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rX.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rY.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rZ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.t_.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f0.prototype={
H:function(a){return"Closure '"+H.o9(this).trim()+"'"},
gig:function(){return this},
$D:null}
H.po.prototype={}
H.oU.prototype={
H:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fQ.prototype={
a_:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gan:function(a){var t,s
t=this.c
if(t==null)s=H.eC(this.a)
else s=typeof t!=="object"?J.dJ(t):H.eC(t)
t=H.eC(this.b)
if(typeof s!=="number")return s.ik()
return(s^t)>>>0},
H:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.D(this.d)+"' of "+H.o8(t)}}
H.kS.prototype={
H:function(a){return this.a}}
H.or.prototype={
H:function(a){return"RuntimeError: "+H.D(this.a)}}
H.dY.prototype={
H:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gan:function(a){return J.dJ(this.a)},
a_:function(a,b){if(b==null)return!1
return b instanceof H.dY&&J.ba(this.a,b.a)}}
H.q.prototype={
gv:function(a){return this.a},
gac:function(a){return this.a===0},
gej:function(a){return new H.n4(this,[H.O(this,0)])},
gci:function(a){return H.dA(this.gej(this),new H.mT(this),H.O(this,0),H.O(this,1))},
ag:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dB(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dB(s,b)}else return this.hC(b)},
hC:function(a){var t=this.d
if(t==null)return!1
return this.bH(this.bT(t,this.bG(a)),a)>=0},
c0:function(a,b){b.aq(0,new H.mS(this))},
B:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.by(t,b)
return s==null?null:s.gbb()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.by(r,b)
return s==null?null:s.gbb()}else return this.hD(b)},
hD:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bT(t,this.bG(a))
r=this.bH(s,a)
if(r<0)return
return s[r].gbb()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cB()
this.b=t}this.dq(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cB()
this.c=s}this.dq(s,b,c)}else{r=this.d
if(r==null){r=this.cB()
this.d=r}q=this.bG(b)
p=this.bT(r,q)
if(p==null)this.cH(r,q,[this.cC(b,c)])
else{o=this.bH(p,b)
if(o>=0)p[o].sbb(c)
else p.push(this.cC(b,c))}}},
az:function(a,b){if(typeof b==="string")return this.dT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dT(this.c,b)
else return this.hE(b)},
hE:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bT(t,this.bG(a))
r=this.bH(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.e1(q)
return q.gbb()},
br:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aq:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.m(new P.bO(this))
t=t.c}},
dq:function(a,b,c){var t=this.by(a,b)
if(t==null)this.cH(a,b,this.cC(b,c))
else t.sbb(c)},
dT:function(a,b){var t
if(a==null)return
t=this.by(a,b)
if(t==null)return
this.e1(t)
this.dE(a,b)
return t.gbb()},
cC:function(a,b){var t,s
t=new H.n3(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
e1:function(a){var t,s
t=a.gfP()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bG:function(a){return J.dJ(a)&0x3ffffff},
bH:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ba(a[s].geh(),b))return s
return-1},
H:function(a){return P.wW(this)},
by:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
cH:function(a,b,c){a[b]=c},
dE:function(a,b){delete a[b]},
dB:function(a,b){return this.by(a,b)!=null},
cB:function(){var t=Object.create(null)
this.cH(t,"<non-identifier-key>",t)
this.dE(t,"<non-identifier-key>")
return t},
$isAJ:1,
$isbs:1,
$asbs:null}
H.mT.prototype={
$1:function(a){return this.a.B(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mS.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eV(function(a,b){return{func:1,args:[a,b]}},this.a,"q")}}
H.n3.prototype={
geh:function(){return this.a},
gbb:function(){return this.b},
gfP:function(){return this.d},
sbb:function(a){return this.b=a}}
H.n4.prototype={
gv:function(a){return this.a.a},
gac:function(a){return this.a.a===0},
gaf:function(a){var t,s
t=this.a
s=new H.n5(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
ax:function(a,b){return this.a.ag(0,b)},
aq:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.m(new P.bO(t))
s=s.c}}}
H.n5.prototype={
gY:function(){return this.d},
L:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bO(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rS.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.rU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.hr.prototype={
H:function(a){return"RegExp/"+this.a+"/"},
gdO:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.ui(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdN:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.ui(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
ho:function(a){var t=this.b.exec(a)
if(t==null)return
return new H.i1(this,t)},
cL:function(a,b,c){if(c>b.length)throw H.m(P.bG(c,0,b.length,null,null))
return new H.qf(this,b,c)},
b9:function(a,b){return this.cL(a,b,0)},
fs:function(a,b){var t,s
t=this.gdO()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.i1(this,s)},
cv:function(a,b){var t,s
t=this.gdN()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.i1(this,s)},
en:function(a,b,c){if(c<0||c>b.length)throw H.m(P.bG(c,0,b.length,null,null))
return this.cv(b,c)},
$isGv:1,
gfK:function(){return this.b}}
H.i1.prototype={
gdj:function(a){return this.b.index},
gea:function(a){var t=this.b
return t.index+t[0].length},
bo:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
B:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isdB:1}
H.qf.prototype={
gaf:function(a){return new H.k1(this.a,this.b,this.c,null)},
$ashq:function(){return[P.dB]},
$asp:function(){return[P.dB]}}
H.k1.prototype={
gY:function(){return this.d},
L:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.fs(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jS.prototype={
gea:function(a){return this.a+this.c.length},
B:function(a,b){return this.bo(b)},
bo:function(a){if(a!==0)throw H.m(P.jK(a,null,null))
return this.c},
$isdB:1,
gdj:function(a){return this.a}}
H.ri.prototype={
gaf:function(a){return new H.rj(this.a,this.b,this.c,null)},
$asp:function(){return[P.dB]}}
H.rj.prototype={
L:function(){var t,s,r,q,p,o,n
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
this.d=new H.jS(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gY:function(){return this.d}}
H.fm.prototype={
gar:function(a){return C.a2},
h5:function(a,b,c){return H.cR(a,b,c)},
h4:function(a){return this.h5(a,0,null)},
h3:function(a,b,c){var t
H.xN(a,b,c)
t=new DataView(a,b)
return t},
h2:function(a,b){return this.h3(a,b,null)},
$isfm:1,
$isbh:1,
gel:function(a){return a.byteLength}}
H.eB.prototype={
fH:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.e4(b,d,"Invalid list position"))
else throw H.m(P.bG(b,0,c,d,null))},
du:function(a,b,c,d){if(b>>>0!==b||b>c)this.fH(a,b,c,d)},
$iseB:1,
gc2:function(a){return a.buffer},
gel:function(a){return a.byteLength}}
H.nz.prototype={
gar:function(a){return C.a3}}
H.jy.prototype={
gv:function(a){return a.length},
dY:function(a,b,c,d,e){var t,s,r
t=a.length
this.du(a,b,t,"start")
this.du(a,c,t,"end")
if(typeof b!=="number")return b.aQ()
if(typeof c!=="number")return H.am(c)
if(b>c)throw H.m(P.bG(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.al()
if(e<0)throw H.m(P.dK(e))
r=d.length
if(r-e<s)throw H.m(new P.dV("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaT:1,
$asaT:function(){},
$isaO:1,
$asaO:function(){}}
H.hD.prototype={
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
a[b]=c},
ap:function(a,b,c,d,e){if(!!J.aK(d).$ishD){this.dY(a,b,c,d,e)
return}this.dl(a,b,c,d,e)},
aN:function(a,b,c,d){return this.ap(a,b,c,d,0)}}
H.hF.prototype={
$asaT:function(){},
$asaO:function(){},
$asr:function(){return[P.a4]},
$asv:function(){return[P.a4]},
$asp:function(){return[P.a4]},
$isr:1,
$isv:1,
$isp:1}
H.hH.prototype={
$asaT:function(){},
$asaO:function(){},
$asr:function(){return[P.a4]},
$asv:function(){return[P.a4]},
$asp:function(){return[P.a4]}}
H.hE.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
a[b]=c},
ap:function(a,b,c,d,e){if(!!J.aK(d).$ishE){this.dY(a,b,c,d,e)
return}this.dl(a,b,c,d,e)},
aN:function(a,b,c,d){return this.ap(a,b,c,d,0)},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.hG.prototype={
$asaT:function(){},
$asaO:function(){},
$asr:function(){return[P.F]},
$asv:function(){return[P.F]},
$asp:function(){return[P.F]},
$isr:1,
$isv:1,
$isp:1}
H.hI.prototype={
$asaT:function(){},
$asaO:function(){},
$asr:function(){return[P.F]},
$asv:function(){return[P.F]},
$asp:function(){return[P.F]}}
H.nA.prototype={
gar:function(a){return C.a4},
$isr:1,
$asr:function(){return[P.a4]},
$isv:1,
$asv:function(){return[P.a4]},
$isp:1,
$asp:function(){return[P.a4]}}
H.nB.prototype={
gar:function(a){return C.a5},
$isr:1,
$asr:function(){return[P.a4]},
$isv:1,
$asv:function(){return[P.a4]},
$isp:1,
$asp:function(){return[P.a4]}}
H.nC.prototype={
gar:function(a){return C.a6},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.nD.prototype={
gar:function(a){return C.a7},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.nE.prototype={
gar:function(a){return C.a8},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.nF.prototype={
gar:function(a){return C.ac},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.nG.prototype={
gar:function(a){return C.ad},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.jz.prototype={
gar:function(a){return C.ae},
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
H.fn.prototype={
gar:function(a){return C.af},
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)H.bb(H.c5(a,b))
return a[b]},
cm:function(a,b,c){return new Uint8Array(a.subarray(b,H.Hz(b,c,a.length)))},
$isfn:1,
$isd9:1,
$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
P.qh.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qg.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qi.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qj.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.rx.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ry.prototype={
$2:function(a,b){this.a.$2(1,new H.h7(a,b))},
$S:function(){return{func:1,args:[,P.dU]}}}
P.rI.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.F,,]}}}
P.cG.prototype={}
P.rK.prototype={
$0:function(){var t,s,r
try{this.b.aS(this.a.$0())}catch(r){t=H.cx(r)
s=H.cw(r)
P.xO(this.b,t,s)}},
$S:function(){return{func:1}}}
P.m8.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.aC(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.aC(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.m7.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.dA(r)}else if(t.b===0&&!this.b)this.d.aC(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f1.prototype={}
P.k3.prototype={
cO:function(a,b){if(a==null)a=new P.fo()
if(this.a.a!==0)throw H.m(new P.dV("Future already completed"))
$.aE.toString
this.aC(a,b)},
bB:function(a){return this.cO(a,null)},
$isf1:1,
ght:function(){return this.a}}
P.e_.prototype={
aO:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.dV("Future already completed"))
t.ds(b)},
h8:function(a){return this.aO(a,null)},
aC:function(a,b){this.a.dt(a,b)}}
P.ke.prototype={
aO:function(a,b){var t=this.a
if(t.a!==0)throw H.m(new P.dV("Future already completed"))
t.aS(b)},
aC:function(a,b){this.a.aC(a,b)}}
P.k7.prototype={
gfZ:function(){return this.b.b},
ged:function(){return(this.c&1)!==0},
ghA:function(){return(this.c&2)!==0},
gec:function(){return this.c===8},
hy:function(a){return this.b.b.d7(this.d,a)},
hI:function(a){if(this.c!==6)return!0
return this.b.b.d7(this.d,J.fI(a))},
hu:function(a){var t,s,r
t=this.e
s=J.bK(a)
r=this.b.b
if(H.fG(t,{func:1,args:[,,]}))return r.i4(t,s.gaG(a),a.gaX())
else return r.d7(t,s.gaG(a))},
hz:function(){return this.b.b.ev(this.d)},
gcD:function(){return this.a}}
P.bk.prototype={
gfI:function(){return this.a===2},
gcA:function(){return this.a>=4},
cf:function(a,b){var t=$.aE
if(t!==C.e){t.toString
if(b!=null)b=P.xR(b,t)}return this.cI(a,b)},
b5:function(a){return this.cf(a,null)},
cI:function(a,b){var t,s
t=new P.bk(0,$.aE,null,[null])
s=b==null?1:3
this.cn(new P.k7(null,t,s,a,b,[H.O(this,0),null]))
return t},
cj:function(a){var t,s
t=$.aE
s=new P.bk(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.O(this,0)
this.cn(new P.k7(null,s,8,a,null,[t,t]))
return s},
cn:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcA()){s.cn(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fE(null,null,t,new P.qD(this,a))}},
dS:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcD()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcA()){p.dS(a)
return}this.a=p.a
this.c=p.c}t.a=this.bY(a)
s=this.b
s.toString
P.fE(null,null,s,new P.qL(t,this))}},
bX:function(){var t=this.c
this.c=null
return this.bY(t)},
bY:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcD()
t.a=s}return s},
aS:function(a){var t,s
t=this.$ti
if(H.e0(a,"$iscG",t,"$ascG"))if(H.e0(a,"$isbk",t,null))P.qG(a,this)
else P.xD(a,this)
else{s=this.bX()
this.a=4
this.c=a
P.fz(this,s)}},
dA:function(a){var t=this.bX()
this.a=4
this.c=a
P.fz(this,t)},
aC:function(a,b){var t=this.bX()
this.a=8
this.c=new P.eX(a,b)
P.fz(this,t)},
fk:function(a){return this.aC(a,null)},
ds:function(a){var t
if(H.e0(a,"$iscG",this.$ti,"$ascG")){this.fh(a)
return}this.a=1
t=this.b
t.toString
P.fE(null,null,t,new P.qF(this,a))},
fh:function(a){var t
if(H.e0(a,"$isbk",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fE(null,null,t,new P.qK(this,a))}else P.qG(a,this)
return}P.xD(a,this)},
dt:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fE(null,null,t,new P.qE(this,a,b))},
$iscG:1,
gbZ:function(){return this.a},
gfS:function(){return this.c}}
P.qD.prototype={
$0:function(){P.fz(this.a,this.b)},
$S:function(){return{func:1}}}
P.qL.prototype={
$0:function(){P.fz(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qH.prototype={
$1:function(a){var t=this.a
t.a=0
t.aS(a)},
$S:function(){return{func:1,args:[,]}}}
P.qI.prototype={
$2:function(a,b){this.a.aC(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qJ.prototype={
$0:function(){this.a.aC(this.b,this.c)},
$S:function(){return{func:1}}}
P.qF.prototype={
$0:function(){this.a.dA(this.b)},
$S:function(){return{func:1}}}
P.qK.prototype={
$0:function(){P.qG(this.b,this.a)},
$S:function(){return{func:1}}}
P.qE.prototype={
$0:function(){this.a.aC(this.b,this.c)},
$S:function(){return{func:1}}}
P.qO.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hz()}catch(q){s=H.cx(q)
r=H.cw(q)
if(this.c){p=J.fI(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eX(s,r)
o.a=!0
return}if(!!J.aK(t).$iscG){if(t instanceof P.bk&&t.gbZ()>=4){if(t.gbZ()===8){p=this.b
p.b=t.gfS()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b5(new P.qP(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qP.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qN.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hy(this.c)}catch(r){t=H.cx(r)
s=H.cw(r)
q=this.a
q.b=new P.eX(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hI(t)===!0&&q.e!=null){p=this.b
p.b=q.hu(t)
p.a=!1}}catch(o){s=H.cx(o)
r=H.cw(o)
q=this.a
p=J.fI(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eX(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.k2.prototype={}
P.dp.prototype={
aK:function(a,b){return new P.r1(b,this,[H.aU(this,"dp",0),null])},
ax:function(a,b){var t,s
t={}
s=new P.bk(0,$.aE,null,[P.da])
t.a=null
t.a=this.b1(new P.p0(t,this,b,s),!0,new P.p1(s),s.gbp())
return s},
aq:function(a,b){var t,s
t={}
s=new P.bk(0,$.aE,null,[null])
t.a=null
t.a=this.b1(new P.p6(t,this,b,s),!0,new P.p7(s),s.gbp())
return s},
gv:function(a){var t,s
t={}
s=new P.bk(0,$.aE,null,[P.F])
t.a=0
this.b1(new P.pa(t),!0,new P.pb(t,s),s.gbp())
return s},
gac:function(a){var t,s
t={}
s=new P.bk(0,$.aE,null,[P.da])
t.a=null
t.a=this.b1(new P.p8(t,s),!0,new P.p9(s),s.gbp())
return s},
aD:function(a){var t,s,r
t=H.aU(this,"dp",0)
s=H.a([],[t])
r=new P.bk(0,$.aE,null,[[P.r,t]])
this.b1(new P.pc(this,s),!0,new P.pd(s,r),r.gbp())
return r},
gat:function(a){var t,s
t={}
s=new P.bk(0,$.aE,null,[H.aU(this,"dp",0)])
t.a=null
t.a=this.b1(new P.p2(t,this,s),!0,new P.p3(s),s.gbp())
return s}}
P.p0.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xV(new P.oZ(this.c,a),new P.p_(t,s),P.xM(t.a,s))},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"dp")}}
P.oZ.prototype={
$0:function(){return J.ba(this.b,this.a)},
$S:function(){return{func:1}}}
P.p_.prototype={
$1:function(a){if(a===!0)P.vg(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.da]}}}
P.p1.prototype={
$0:function(){this.a.aS(!1)},
$S:function(){return{func:1}}}
P.p6.prototype={
$1:function(a){P.xV(new P.p4(this.c,a),new P.p5(),P.xM(this.a.a,this.d))},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"dp")}}
P.p4.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.p5.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.p7.prototype={
$0:function(){this.a.aS(null)},
$S:function(){return{func:1}}}
P.pa.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pb.prototype={
$0:function(){this.b.aS(this.a.a)},
$S:function(){return{func:1}}}
P.p8.prototype={
$1:function(a){P.vg(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.p9.prototype={
$0:function(){this.a.aS(!0)},
$S:function(){return{func:1}}}
P.pc.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.a,"dp")}}
P.pd.prototype={
$0:function(){this.b.aS(this.a)},
$S:function(){return{func:1}}}
P.p2.prototype={
$1:function(a){P.vg(this.a.a,this.c,a)},
$S:function(){return H.eV(function(a){return{func:1,args:[a]}},this.b,"dp")}}
P.p3.prototype={
$0:function(){var t,s,r,q
try{r=H.jq()
throw H.m(r)}catch(q){t=H.cx(q)
s=H.cw(q)
P.xO(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oY.prototype={}
P.dq.prototype={
cZ:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.e5()
if((t&4)===0&&(this.e&32)===0)this.dI(this.gdQ())},
eq:function(a){return this.cZ(a,null)},
eu:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gac(t)}else t=!1
if(t)this.r.ck(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dI(this.gdR())}}}},
c3:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cp()
t=this.f
return t==null?$.$get$hh():t},
cp:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.e5()
if((this.e&32)===0)this.r=null
this.f=this.dP()},
bS:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dV(b)
else this.co(new P.qr(b,null,[H.aU(this,"dq",0)]))},
bR:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dX(a,b)
else this.co(new P.qt(a,b,null))},
ff:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dW()
else this.co(C.J)},
bV:function(){},
bW:function(){},
dP:function(){return},
co:function(a){var t,s
t=this.r
if(t==null){t=new P.rg(null,null,0,[H.aU(this,"dq",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.ck(this)}},
dV:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.d8(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cq((t&4)!==0)},
dX:function(a,b){var t,s
t=this.e
s=new P.qm(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cp()
t=this.f
if(!!J.aK(t).$iscG&&t!==$.$get$hh())t.cj(s)
else s.$0()}else{s.$0()
this.cq((t&4)!==0)}},
dW:function(){var t,s
t=new P.ql(this)
this.cp()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aK(s).$iscG&&s!==$.$get$hh())s.cj(t)
else t.$0()},
dI:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cq((t&4)!==0)},
cq:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gac(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gac(t)}else t=!1
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
f8:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xR(b,t)
this.c=c},
gbZ:function(){return this.e}}
P.qm.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fG(s,{func:1,args:[P.ap,P.dU]})
q=t.d
p=this.b
o=t.b
if(r)q.i5(o,p,this.c)
else q.d8(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.ql.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.ew(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k5.prototype={
gbI:function(a){return this.a},
sbI:function(a,b){return this.a=b}}
P.qr.prototype={
d_:function(a){a.dV(this.b)}}
P.qt.prototype={
d_:function(a){a.dX(this.b,this.c)},
$ask5:function(){},
gaG:function(a){return this.b},
gaX:function(){return this.c}}
P.qs.prototype={
d_:function(a){a.dW()},
gbI:function(a){return},
sbI:function(a,b){throw H.m(new P.dV("No events after a done."))}}
P.r3.prototype={
ck:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.ye(new P.r4(this,a))
this.a=1},
e5:function(){if(this.a===1)this.a=3},
gbZ:function(){return this.a}}
P.r4.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbI(r)
t.b=q
if(q==null)t.c=null
r.d_(this.b)},
$S:function(){return{func:1}}}
P.rg.prototype={
gac:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbI(0,b)
this.c=b}}}
P.rh.prototype={}
P.rA.prototype={
$0:function(){return this.a.aC(this.b,this.c)},
$S:function(){return{func:1}}}
P.rz.prototype={
$2:function(a,b){P.Hy(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dU]}}}
P.rB.prototype={
$0:function(){return this.a.aS(this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
b1:function(a,b,c,d){return this.fn(a,d,c,!0===b)},
em:function(a,b,c){return this.b1(a,null,b,c)},
fn:function(a,b,c,d){return P.Hd(this,a,b,c,d,H.aU(this,"hY",0),H.aU(this,"hY",1))},
dJ:function(a,b){b.bS(0,a)},
fF:function(a,b,c){c.bR(a,b)},
$asdp:function(a,b){return[b]}}
P.hZ.prototype={
bS:function(a,b){if((this.e&2)!==0)return
this.eY(0,b)},
bR:function(a,b){if((this.e&2)!==0)return
this.eZ(a,b)},
bV:function(){var t=this.y
if(t==null)return
t.eq(0)},
bW:function(){var t=this.y
if(t==null)return
t.eu(0)},
dP:function(){var t=this.y
if(t!=null){this.y=null
return t.c3(0)}return},
fA:function(a){this.x.dJ(a,this)},
fE:function(a,b){this.x.fF(a,b,this)},
fC:function(){this.ff()},
fb:function(a,b,c,d,e,f,g){this.y=this.x.a.em(this.gfz(),this.gfB(),this.gfD())},
$asdq:function(a,b){return[b]}}
P.r1.prototype={
dJ:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cx(q)
r=H.cw(q)
P.Hx(b,s,r)
return}b.bS(0,t)}}
P.eX.prototype={
H:function(a){return H.D(this.a)},
$isel:1,
gaG:function(a){return this.a},
gaX:function(){return this.b}}
P.rw.prototype={}
P.rH.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fo()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.m(t)
r=H.m(t)
r.stack=J.cM(s)
throw r},
$S:function(){return{func:1}}}
P.r7.prototype={
ew:function(a){var t,s,r,q
try{if(C.e===$.aE){r=a.$0()
return r}r=P.xS(null,null,this,a)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kh(null,null,this,t,s)
return r}},
d8:function(a,b){var t,s,r,q
try{if(C.e===$.aE){r=a.$1(b)
return r}r=P.xU(null,null,this,a,b)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kh(null,null,this,t,s)
return r}},
i5:function(a,b,c){var t,s,r,q
try{if(C.e===$.aE){r=a.$2(b,c)
return r}r=P.xT(null,null,this,a,b,c)
return r}catch(q){t=H.cx(q)
s=H.cw(q)
r=P.kh(null,null,this,t,s)
return r}},
cN:function(a,b){if(b)return new P.r8(this,a)
else return new P.r9(this,a)},
h6:function(a,b){return new P.ra(this,a)},
B:function(a,b){return},
ev:function(a){if($.aE===C.e)return a.$0()
return P.xS(null,null,this,a)},
d7:function(a,b){if($.aE===C.e)return a.$1(b)
return P.xU(null,null,this,a,b)},
i4:function(a,b,c){if($.aE===C.e)return a.$2(b,c)
return P.xT(null,null,this,a,b,c)}}
P.r8.prototype={
$0:function(){return this.a.ew(this.b)},
$S:function(){return{func:1}}}
P.r9.prototype={
$0:function(){return this.a.ev(this.b)},
$S:function(){return{func:1}}}
P.ra.prototype={
$1:function(a){return this.a.d8(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qR.prototype={
gv:function(a){return this.a},
gac:function(a){return this.a===0},
gci:function(a){var t=H.O(this,0)
return H.dA(new P.qS(this,[t]),new P.qU(this),t,H.O(this,1))},
ag:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.fm(b)},
fm:function(a){var t=this.d
if(t==null)return!1
return this.b0(t[this.b_(a)],a)>=0},
B:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fv(0,b)},
fv:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.b_(b)]
r=this.b0(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ve()
this.b=t}this.dw(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ve()
this.c=s}this.dw(s,b,c)}else this.fT(b,c)},
fT:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ve()
this.d=t}s=this.b_(a)
r=t[s]
if(r==null){P.vf(t,s,[a,b]);++this.a
this.e=null}else{q=this.b0(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
az:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cG(0,b)},
cG:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.b_(b)]
r=this.b0(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
aq:function(a,b){var t,s,r,q
t=this.cs()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.B(0,q))
if(t!==this.e)throw H.m(new P.bO(this))}},
cs:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dw:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vf(a,b,c)},
bx:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Hf(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
b_:function(a){return J.dJ(a)&0x3ffffff},
b0:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.ba(a[s],b))return s
return-1},
$isbs:1,
$asbs:null}
P.qU.prototype={
$1:function(a){return this.a.B(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qS.prototype={
gv:function(a){return this.a.a},
gac:function(a){return this.a.a===0},
gaf:function(a){var t=this.a
return new P.qT(t,t.cs(),0,null,this.$ti)},
ax:function(a,b){return this.a.ag(0,b)},
aq:function(a,b){var t,s,r,q
t=this.a
s=t.cs()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.m(new P.bO(t))}}}
P.qT.prototype={
gY:function(){return this.d},
L:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.m(new P.bO(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.ka.prototype={
bG:function(a){return H.Ih(a)&0x3ffffff},
bH:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].geh()
if(r==null?b==null:r===b)return s}return-1}}
P.k9.prototype={
gaf:function(a){var t=new P.dG(this,this.r,null,null,[null])
t.c=this.e
return t},
gv:function(a){return this.a},
gac:function(a){return this.a===0},
ax:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fl(b)},
fl:function(a){var t=this.d
if(t==null)return!1
return this.b0(t[this.b_(a)],a)>=0},
cW:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ax(0,a)?a:null
else return this.fJ(a)},
fJ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.b_(a)]
r=this.b0(s,a)
if(r<0)return
return J.i8(s,r).gdF()},
aq:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.m(new P.bO(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.dv(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.dv(r,b)}else return this.aZ(0,b)},
aZ:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Hg()
this.d=t}s=this.b_(b)
r=t[s]
if(r==null)t[s]=[this.cr(b)]
else{if(this.b0(r,b)>=0)return!1
r.push(this.cr(b))}return!0},
az:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.cG(0,b)},
cG:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.b_(b)]
r=this.b0(s,b)
if(r<0)return!1
this.dz(s.splice(r,1)[0])
return!0},
br:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dv:function(a,b){if(a[b]!=null)return!1
a[b]=this.cr(b)
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dz(t)
delete a[b]
return!0},
cr:function(a){var t,s
t=new P.qY(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dz:function(a){var t,s
t=a.gfj()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
b_:function(a){return J.dJ(a)&0x3ffffff},
b0:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ba(a[s].gdF(),b))return s
return-1},
$iseH:1,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.qY.prototype={
gdF:function(){return this.a},
gfj:function(){return this.c}}
P.dG.prototype={
gY:function(){return this.d},
L:function(){var t=this.a
if(this.b!==t.r)throw H.m(new P.bO(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qV.prototype={}
P.fi.prototype={
aK:function(a,b){return H.dA(this,b,H.aU(this,"fi",0),null)},
ax:function(a,b){var t
for(t=this.gaf(this);t.L();)if(J.ba(t.gY(),b))return!0
return!1},
aq:function(a,b){var t
for(t=this.gaf(this);t.L();)b.$1(t.gY())},
ak:function(a,b){return P.dk(this,!0,H.aU(this,"fi",0))},
aD:function(a){return this.ak(a,!0)},
gv:function(a){var t,s
t=this.gaf(this)
for(s=0;t.L();)++s
return s},
gac:function(a){return!this.gaf(this).L()},
H:function(a){return P.ue(this,"(",")")},
$isp:1,
$asp:null}
P.hq.prototype={}
P.ju.prototype={}
P.hJ.prototype={$asr:null,$asv:null,$asp:null,$isr:1,$isv:1,$isp:1}
P.b6.prototype={
gaf:function(a){return new H.ez(a,this.gv(a),0,null,[H.aU(a,"b6",0)])},
a0:function(a,b){return this.B(a,b)},
aq:function(a,b){var t,s
t=this.gv(a)
for(s=0;s<t;++s){b.$1(this.B(a,s))
if(t!==this.gv(a))throw H.m(new P.bO(a))}},
gac:function(a){return this.gv(a)===0},
ax:function(a,b){var t,s
t=this.gv(a)
for(s=0;s<this.gv(a);++s){if(J.ba(this.B(a,s),b))return!0
if(t!==this.gv(a))throw H.m(new P.bO(a))}return!1},
aK:function(a,b){return new H.fk(a,b,[H.aU(a,"b6",0),null])},
dg:function(a,b){return H.xe(a,b,null,H.aU(a,"b6",0))},
ak:function(a,b){var t,s,r
t=H.a([],[H.aU(a,"b6",0)])
C.b.sv(t,this.gv(a))
for(s=0;s<this.gv(a);++s){r=this.B(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
aD:function(a){return this.ak(a,!0)},
h:function(a,b){var t=this.gv(a)
this.sv(a,t+1)
this.i(a,t,b)},
c8:function(a,b,c,d){var t
P.dm(b,c,this.gv(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
ap:function(a,b,c,d,e){var t,s,r,q,p,o
P.dm(b,c,this.gv(a),null,null,null)
if(typeof c!=="number")return c.a9()
if(typeof b!=="number")return H.am(b)
t=c-b
if(t===0)return
if(J.ef(e,0))H.bb(P.bG(e,0,null,"skipCount",null))
if(H.e0(d,"$isr",[H.aU(a,"b6",0)],"$asr")){s=e
r=d}else{r=J.yC(d,e).ak(0,!1)
s=0}q=J.kk(s)
p=J.bd(r)
if(J.cy(q.a3(s,t),p.gv(r)))throw H.m(H.wP())
if(q.al(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.B(r,q.a3(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.B(r,q.a3(s,o)))},
aN:function(a,b,c,d){return this.ap(a,b,c,d,0)},
aP:function(a,b,c,d){var t,s,r,q,p
P.dm(b,c,this.gv(a),null,null,null)
d=C.c.aD(d)
if(typeof c!=="number")return c.a9()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gv(a)-q
this.aN(a,b,r,d)
if(q!==0){this.ap(a,r,p,a,c)
this.sv(a,p)}}else{p=this.gv(a)+(s-t)
this.sv(a,p)
this.ap(a,r,p,a,c)
this.aN(a,b,r,d)}},
bd:function(a,b,c){var t
if(c>=this.gv(a))return-1
if(c<0)c=0
for(t=c;t<this.gv(a);++t)if(J.ba(this.B(a,t),b))return t
return-1},
bt:function(a,b){return this.bd(a,b,0)},
H:function(a){return P.jp(a,"[","]")},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.ro.prototype={
i:function(a,b,c){throw H.m(new P.aa("Cannot modify unmodifiable map"))},
$isbs:1,
$asbs:null}
P.nk.prototype={
B:function(a,b){return J.i8(this.a,b)},
i:function(a,b,c){J.kp(this.a,b,c)},
aq:function(a,b){J.ys(this.a,b)},
gac:function(a){return J.tb(this.a)},
gv:function(a){return J.cm(this.a)},
H:function(a){return J.cM(this.a)},
$isbs:1,
$asbs:null}
P.hR.prototype={$asbs:null,$isbs:1}
P.nl.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.R+=", "
t.a=!1
t=this.b
s=t.R+=H.D(a)
t.R=s+": "
t.R+=H.D(b)},
$S:function(){return{func:1,args:[,,]}}}
P.n7.prototype={
gaf:function(a){return new P.qZ(this,this.c,this.d,this.b,null,this.$ti)},
aq:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.bb(new P.bO(this))}},
gac:function(a){return this.b===this.c},
gv:function(a){return(this.c-this.b&this.a.length-1)>>>0},
a0:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.am(b)
if(0>b||b>=t)H.bb(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
ak:function(a,b){var t=H.a([],this.$ti)
C.b.sv(t,this.gv(this))
this.fY(t)
return t},
aD:function(a){return this.ak(a,!0)},
h:function(a,b){this.aZ(0,b)},
br:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
H:function(a){return P.jp(this,"{","}")},
es:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.m(H.jq());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aZ:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dH();++this.d},
dH:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.ap(s,0,q,t,r)
C.b.ap(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fY:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.ap(a,0,q,r,t)
return q}else{p=r.length-t
C.b.ap(a,0,p,r,t)
C.b.ap(a,p,p+this.c,this.a,0)
return this.c+p}},
f2:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$asp:null}
P.qZ.prototype={
gY:function(){return this.e},
L:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bb(new P.bO(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oE.prototype={
gac:function(a){return this.a===0},
c0:function(a,b){var t
for(t=J.dd(b);t.L();)this.h(0,t.gY())},
ak:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sv(t,this.a)
for(s=new P.dG(this,this.r,null,null,[null]),s.c=this.e,r=0;s.L();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
aD:function(a){return this.ak(a,!0)},
aK:function(a,b){return new H.h_(this,b,[H.O(this,0),null])},
H:function(a){return P.jp(this,"{","}")},
aq:function(a,b){var t
for(t=new P.dG(this,this.r,null,null,[null]),t.c=this.e;t.L();)b.$1(t.d)},
bl:function(a,b){var t,s
t=new P.dG(this,this.r,null,null,[null])
t.c=this.e
if(!t.L())return""
if(b===""){s=""
do s+=H.D(t.d)
while(t.L())}else{s=H.D(t.d)
for(;t.L();)s=s+b+H.D(t.d)}return s.charCodeAt(0)==0?s:s},
$iseH:1,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
P.oD.prototype={}
P.kG.prototype={
hM:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.bd(b)
a1=P.dm(a0,a1,t.gv(b),null,null,null)
s=$.$get$xC()
if(typeof a1!=="number")return H.am(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.ad(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rR(C.c.am(b,l))
h=H.rR(C.c.am(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.ad("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.R.length
if(e==null)e=0
if(typeof e!=="number")return e.a3()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.ca("")
p.R+=C.c.O(b,q,r)
p.R+=H.hK(k)
q=l
continue}}throw H.m(new P.bD("Invalid base64 data",b,r))}if(p!=null){t=p.R+=t.O(b,q,a1)
e=t.length
if(o>=0)P.vF(b,n,a1,o,m,e)
else{d=C.a.bP(e-1,4)+1
if(d===1)throw H.m(new P.bD("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.R=t;++d}}t=p.R
return C.c.aP(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.vF(b,n,a1,o,m,c)
else{d=C.d.bP(c,4)
if(d===1)throw H.m(new P.bD("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aP(b,a1,a1,d===2?"==":"=")}return b},
$asfV:function(){return[[P.r,P.F],P.C]}}
P.kH.prototype={
$asfW:function(){return[[P.r,P.F],P.C]}}
P.fV.prototype={}
P.fW.prototype={}
P.lo.prototype={
$asfV:function(){return[P.C,[P.r,P.F]]}}
P.pS.prototype={
gN:function(a){return"utf-8"}}
P.pT.prototype={
cP:function(a,b,c){var t,s,r,q
t=J.cm(a)
P.dm(b,c,t,null,null,null)
s=new P.ca("")
r=new P.rq(!1,s,!0,0,0,0)
r.cP(a,b,t)
r.hp(0,a,t)
q=s.R
return q.charCodeAt(0)==0?q:q},
hb:function(a){return this.cP(a,0,null)},
$asfW:function(){return[[P.r,P.F],P.C]}}
P.rq.prototype={
hp:function(a,b,c){if(this.e>0)throw H.m(new P.bD("Unfinished UTF-8 octet sequence",b,c))},
cP:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rs(c)
p=new P.rr(this,a,b,c)
$loop$0:for(o=J.bd(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.B(a,m)
if(typeof l!=="number")return l.aW()
if((l&192)!==128){k=new P.bD("Bad UTF-8 encoding 0x"+C.d.bu(l,16),a,m)
throw H.m(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.w,k)
if(t<=C.w[k]){k=new P.bD("Overlong encoding of 0x"+C.a.bu(t,16),a,m-r-1)
throw H.m(k)}if(t>1114111){k=new P.bD("Character outside valid Unicode range: 0x"+C.a.bu(t,16),a,m-r-1)
throw H.m(k)}if(!this.c||t!==65279)n.R+=H.hK(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cy(j,0)){this.c=!1
if(typeof j!=="number")return H.am(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.B(a,i)
g=J.db(l)
if(g.al(l,0)){g=new P.bD("Negative UTF-8 code unit: -0x"+J.yF(g.dd(l),16),a,h-1)
throw H.m(g)}else{if(typeof l!=="number")return l.aW()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bD("Bad UTF-8 encoding 0x"+C.d.bu(l,16),a,h-1)
throw H.m(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rs.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.bd(a),r=b;r<t;++r){q=s.B(a,r)
if(typeof q!=="number")return q.aW()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.F,args:[,P.F]}}}
P.rr.prototype={
$2:function(a,b){this.a.b.R+=P.pi(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.F,P.F]}}}
P.da.prototype={}
P.bv.prototype={}
P.dO.prototype={
a_:function(a,b){if(b==null)return!1
if(!(b instanceof P.dO))return!1
return this.a===b.a&&this.b===b.b},
aJ:function(a,b){return C.a.aJ(this.a,b.gfX())},
gan:function(a){var t=this.a
return(t^C.a.b8(t,30))&1073741823},
H:function(a){var t,s,r,q,p,o,n
t=P.zR(H.uM(this))
s=P.ii(H.jJ(this))
r=P.ii(H.jI(this))
q=P.ii(H.G6(this))
p=P.ii(H.G8(this))
o=P.ii(H.G9(this))
n=P.zS(H.G7(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.vS(C.a.a3(this.a,b.giq()),this.b)},
ghJ:function(){return this.a},
dm:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.m(P.dK(this.ghJ()))},
$isbv:1,
$asbv:function(){return[P.dO]},
gfX:function(){return this.a}}
P.le.prototype={
$1:function(a){if(a==null)return 0
return H.dl(a,null,null)},
$S:function(){return{func:1,ret:P.F,args:[P.C]}}}
P.lf.prototype={
$1:function(a){var t,s,r,q
if(a==null)return 0
t=J.bd(a)
t.gv(a)
for(s=0,r=0;r<6;++r){s*=10
q=t.gv(a)
if(typeof q!=="number")return H.am(q)
if(r<q)s+=t.ad(a,r)^48}return s},
$S:function(){return{func:1,ret:P.F,args:[P.C]}}}
P.a4.prototype={$isbv:1,
$asbv:function(){return[P.du]}}
P.d3.prototype={
a3:function(a,b){return new P.d3(this.a+b.gbq())},
a9:function(a,b){return new P.d3(C.a.a9(this.a,b.gbq()))},
aB:function(a,b){return new P.d3(C.a.bf(this.a*b))},
bw:function(a,b){return new P.d3(C.a.bw(this.a,b))},
al:function(a,b){return C.a.al(this.a,b.gbq())},
aQ:function(a,b){return C.a.aQ(this.a,b.gbq())},
aH:function(a,b){return C.a.aH(this.a,b.gbq())},
a_:function(a,b){if(b==null)return!1
if(!(b instanceof P.d3))return!1
return this.a===b.a},
gan:function(a){return this.a&0x1FFFFFFF},
aJ:function(a,b){return C.a.aJ(this.a,b.gbq())},
H:function(a){var t,s,r,q,p
t=new P.lm()
s=this.a
if(s<0)return"-"+new P.d3(0-s).H(0)
r=t.$1(C.a.aA(s,6e7)%60)
q=t.$1(C.a.aA(s,1e6)%60)
p=new P.ll().$1(s%1e6)
return""+C.a.aA(s,36e8)+":"+H.D(r)+":"+H.D(q)+"."+H.D(p)},
dd:function(a){return new P.d3(0-this.a)},
$isbv:1,
$asbv:function(){return[P.d3]},
gbq:function(){return this.a}}
P.ll.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.F]}}}
P.lm.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.F]}}}
P.el.prototype={
gaX:function(){return H.cw(this.$thrownJsError)}}
P.fo.prototype={
H:function(a){return"Throw of null."}}
P.d1.prototype={
gcu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gct:function(){return""},
H:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.D(t)
q=this.gcu()+s+r
if(!this.a)return q
p=this.gct()
o=P.w_(this.b)
return q+p+": "+H.D(o)},
gN:function(a){return this.c}}
P.eG.prototype={
gcu:function(){return"RangeError"},
gct:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.D(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.D(t)
else{if(typeof r!=="number")return r.aQ()
if(r>t)s=": Not in range "+H.D(t)+".."+H.D(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.D(t)}}return s}}
P.mu.prototype={
gcu:function(){return"RangeError"},
gct:function(){if(J.ef(this.b,0))return": index must not be negative"
var t=this.f
if(J.ba(t,0))return": no indices are valid"
return": index should be less than "+H.D(t)},
gv:function(a){return this.f}}
P.aa.prototype={
H:function(a){return"Unsupported operation: "+this.a}}
P.eM.prototype={
H:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.D(t):"UnimplementedError"}}
P.dV.prototype={
H:function(a){return"Bad state: "+this.a}}
P.bO.prototype={
H:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.D(P.w_(t))+"."}}
P.nP.prototype={
H:function(a){return"Out of Memory"},
gaX:function(){return},
$isel:1}
P.jR.prototype={
H:function(a){return"Stack Overflow"},
gaX:function(){return},
$isel:1}
P.lb.prototype={
H:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.D(t)+"' during its initialization"}}
P.qC.prototype={
H:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.D(t)}}
P.bD.prototype={
H:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.D(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.D(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.al()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.O(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.am(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.am(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.D(r-o+1)+")\n"):s+(" (at character "+H.D(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.ad(q,m)
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
g=""}f=C.c.O(q,i,j)
return s+h+f+g+"\n"+C.c.aB(" ",r-i+h.length)+"^\n"}}
P.lv.prototype={
H:function(a){return"Expando:"+H.D(this.a)},
B:function(a,b){var t,s
t=this.bU
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bb(P.e4(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.uL(b,"expando$values")
return s==null?null:H.uL(s,t)},
i:function(a,b,c){var t,s
t=this.bU
if(typeof t!=="string")t.set(b,c)
else{s=H.uL(b,"expando$values")
if(s==null){s=new P.ap()
H.x4(b,"expando$values",s)}H.x4(s,t,c)}},
gN:function(a){return this.a}}
P.F.prototype={$isbv:1,
$asbv:function(){return[P.du]}}
P.p.prototype={
aK:function(a,b){return H.dA(this,b,H.aU(this,"p",0),null)},
ax:function(a,b){var t
for(t=this.gaf(this);t.L();)if(J.ba(t.gY(),b))return!0
return!1},
aq:function(a,b){var t
for(t=this.gaf(this);t.L();)b.$1(t.gY())},
ak:function(a,b){return P.dk(this,!0,H.aU(this,"p",0))},
aD:function(a){return this.ak(a,!0)},
gv:function(a){var t,s
t=this.gaf(this)
for(s=0;t.L();)++s
return s},
gac:function(a){return!this.gaf(this).L()},
a0:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.m(P.yI("index"))
if(b<0)H.bb(P.bG(b,0,null,"index",null))
for(t=this.gaf(this),s=0;t.L();){r=t.gY()
if(b===s)return r;++s}throw H.m(P.by(b,this,"index",null,s))},
H:function(a){return P.ue(this,"(",")")},
$asp:null}
P.jr.prototype={}
P.r.prototype={$asr:null,$isv:1,$asv:null,$isp:1,$asp:null}
P.bs.prototype={$asbs:null}
P.d6.prototype={
gan:function(a){return P.ap.prototype.gan.call(this,this)},
H:function(a){return"null"}}
P.du.prototype={$isbv:1,
$asbv:function(){return[P.du]}}
P.ap.prototype={constructor:P.ap,$isap:1,
a_:function(a,b){return this===b},
gan:function(a){return H.eC(this)},
H:function(a){return H.o8(this)},
gar:function(a){return new H.dY(H.km(this),null)},
toString:function(){return this.H(this)}}
P.dB.prototype={}
P.eH.prototype={}
P.dU.prototype={}
P.C.prototype={$isbv:1,
$asbv:function(){return[P.C]}}
P.ca.prototype={
gv:function(a){return this.R.length},
gac:function(a){return this.R.length===0},
H:function(a){var t=this.R
return t.charCodeAt(0)==0?t:t},
gR:function(){return this.R}}
P.eO.prototype={}
P.pP.prototype={
$2:function(a,b){var t,s,r,q
t=J.bd(b)
s=t.bt(b,"=")
if(s===-1){if(!t.a_(b,""))J.kp(a,P.rp(b,0,t.gv(b),this.a,!0),"")}else if(s!==0){r=t.O(b,0,s)
q=C.c.aa(b,s+1)
t=this.a
J.kp(a,P.rp(r,0,r.length,t,!0),P.rp(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pM.prototype={
$2:function(a,b){throw H.m(new P.bD("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.C,P.F]}}}
P.pN.prototype={
$2:function(a,b){throw H.m(new P.bD("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.C],opt:[,]}}}
P.pO.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.dl(C.c.O(this.a,a,b),16,null)
s=J.db(t)
if(s.al(t,0)||s.aQ(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.F,args:[P.F,P.F]}}}
P.kf.prototype={
geD:function(){return this.b},
gcT:function(a){var t=this.c
if(t==null)return""
if(C.c.au(t,"["))return C.c.O(t,1,t.length-1)
return t},
gd0:function(a){var t=this.d
if(t==null)return P.xF(this.a)
return t},
gd1:function(a){var t=this.f
return t==null?"":t},
geb:function(){var t=this.r
return t==null?"":t},
gd2:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.C
s=new P.hR(P.xv(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gee:function(){return this.c!=null},
geg:function(){return this.f!=null},
gef:function(){return this.r!=null},
H:function(a){var t=this.y
if(t==null){t=this.dL()
this.y=t}return t},
dL:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.D(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.D(s)}else t=s
t+=H.D(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
a_:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aK(b)
if(!!t.$iseO){if(this.a===b.gde())if(this.c!=null===b.gee()){s=this.b
r=b.geD()
if(s==null?r==null:s===r){s=this.gcT(this)
r=t.gcT(b)
if(s==null?r==null:s===r)if(J.ba(this.gd0(this),t.gd0(b)))if(J.ba(this.e,t.gep(b))){s=this.f
r=s==null
if(!r===b.geg()){if(r)s=""
if(s===t.gd1(b)){t=this.r
s=t==null
if(!s===b.gef()){if(s)t=""
t=t===b.geb()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
gan:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dL()
this.y=t}t=C.c.gan(t)
this.z=t}return t},
$iseO:1,
gde:function(){return this.a},
gep:function(a){return this.e}}
P.rL.prototype={
$1:function(a){throw H.m(new P.bD("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pL.prototype={
geC:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.bd(s)
q=r.bd(s,"?",t)
p=r.gv(s)
if(q>=0){o=q+1
n=P.fC(s,o,p,C.k,!1)
if(n==null)n=r.O(s,o,p)
p=q}else n=null
m=P.fC(s,t,p,C.D,!1)
t=new P.qq(this,"data",null,null,null,m==null?r.O(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
H:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.D(s):s}}
P.rE.prototype={
$1:function(a){return new Uint8Array(H.cA(96))},
$S:function(){return{func:1,args:[,]}}}
P.rD.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.yr(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d9,args:[,,]}}}
P.rF.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.ds(a),r=0;r<t;++r)s.i(a,C.c.am(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d9,P.C,P.F]}}}
P.rG.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.am(b,0),s=C.c.am(b,1),r=J.ds(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d9,P.C,P.F]}}}
P.rf.prototype={
gee:function(){return this.c>0},
geg:function(){var t=this.f
if(typeof t!=="number")return t.al()
return t<this.r},
gef:function(){return this.r<this.a.length},
gde:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.au(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.au(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.au(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.au(this.a,"package")){this.x="package"
t="package"}else{t=C.c.O(this.a,0,t)
this.x=t}return t},
geD:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.O(this.a,s,t-1):""},
gcT:function(a){var t=this.c
return t>0?C.c.O(this.a,t,this.d):""},
gd0:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.a3()
s=this.e
if(typeof s!=="number")return H.am(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.a3()
return H.dl(C.c.O(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.au(this.a,"http"))return 80
if(t===5&&C.c.au(this.a,"https"))return 443
return 0},
gep:function(a){return C.c.O(this.a,this.e,this.f)},
gd1:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.al()
return t<s?C.c.O(this.a,t+1,s):""},
geb:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.aa(s,t+1):""},
gd2:function(){var t=this.f
if(typeof t!=="number")return t.al()
if(t>=this.r)return C.a0
t=P.C
return new P.hR(P.xv(this.gd1(this),C.n),[t,t])},
gan:function(a){var t=this.y
if(t==null){t=C.c.gan(this.a)
this.y=t}return t},
a_:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aK(b)
if(!!t.$iseO)return this.a===t.H(b)
return!1},
H:function(a){return this.a},
$iseO:1}
P.qq.prototype={}
W.aC.prototype={}
W.eW.prototype={
H:function(a){return String(a)},
$iseW:1,
$isk:1,
gav:function(a){return a.href}}
W.kx.prototype={
H:function(a){return String(a)},
$isk:1,
gav:function(a){return a.href}}
W.eZ.prototype={$iseZ:1,$isdx:1,$isaP:1,$isap:1}
W.cN.prototype={$isap:1}
W.kE.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.cN]},
$isv:1,
$asv:function(){return[W.cN]},
$isp:1,
$asp:function(){return[W.cN]},
$isaT:1,
$asaT:function(){return[W.cN]},
$isaO:1,
$asaO:function(){return[W.cN]}}
W.h1.prototype={
$asr:function(){return[W.cN]},
$asv:function(){return[W.cN]},
$asp:function(){return[W.cN]},
$isr:1,
$isv:1,
$isp:1}
W.h4.prototype={
$asr:function(){return[W.cN]},
$asv:function(){return[W.cN]},
$asp:function(){return[W.cN]},
$isr:1,
$isv:1,
$isp:1}
W.kI.prototype={
gav:function(a){return a.href}}
W.f_.prototype={$isf_:1}
W.kM.prototype={$isk:1}
W.fU.prototype={$isfU:1,
gN:function(a){return a.name}}
W.eh.prototype={$isk:1,
gv:function(a){return a.length}}
W.kY.prototype={$isk:1}
W.id.prototype={
cR:function(a,b){return typeof console!="undefined"?console.error(b):null},
bo:function(a){return typeof console!="undefined"?console.group(a):null},
ei:function(a){return typeof console!="undefined"?console.info(a):null},
ia:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fX.prototype={
gN:function(a){return a.name}}
W.l3.prototype={
gaY:function(a){return a.style}}
W.l4.prototype={
gav:function(a){return a.href}}
W.fY.prototype={
gaY:function(a){return a.style}}
W.fZ.prototype={
gN:function(a){return a.name}}
W.l5.prototype={
gaY:function(a){return a.style}}
W.bL.prototype={$isbL:1,$isap:1}
W.ej.prototype={
bO:function(a,b){var t=this.fw(a,b)
return t!=null?t:""},
fw:function(a,b){if(W.vO(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.vY()+b)},
eS:function(a,b,c,d){var t=this.fg(a,b)
a.setProperty(t,c,d)
return},
fg:function(a,b){var t,s
t=$.$get$vP()
s=t[b]
if(typeof s==="string")return s
s=W.vO(b) in a?b:P.vY()+b
t[b]=s
return s},
M:function(a,b){return a.item(b)},
gbs:function(a){return a.content},
gbD:function(a){return a.display},
sbD:function(a,b){a.display=b},
gv:function(a){return a.length}}
W.iH.prototype={}
W.qo.prototype={
bO:function(a,b){var t=this.b
return J.yx(t.gat(t),b)},
fU:function(a,b){var t
for(t=this.a,t=new H.ez(t,t.gv(t),0,null,[H.O(t,0)]);t.L();)t.d.style[a]=b},
sbD:function(a,b){this.fU("display",b)},
f9:function(a){var t=P.dk(this.a,!0,null)
this.b=new H.fk(t,new W.qp(),[H.O(t,0),null])}}
W.jC.prototype={}
W.qp.prototype={
$1:function(a){return J.tc(a)},
$S:function(){return{func:1,args:[,]}}}
W.ig.prototype={
gbs:function(a){return this.bO(a,"content")},
gbD:function(a){return this.bO(a,"display")}}
W.l6.prototype={
gaY:function(a){return a.style}}
W.l7.prototype={
gaY:function(a){return a.style}}
W.lc.prototype={
gcS:function(a){return a.files}}
W.f2.prototype={$isf2:1,$isap:1}
W.ih.prototype={
c_:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
M:function(a,b){return a.item(b)},
B:function(a,b){return a[b]},
gv:function(a){return a.length}}
W.ek.prototype={$isek:1}
W.ij.prototype={$isk:1}
W.ik.prototype={
gN:function(a){return a.name}}
W.lh.prototype={
gN:function(a){var t=a.name
if(P.vZ()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vZ()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
H:function(a){return String(a)}}
W.il.prototype={
H:function(a){return"Rectangle ("+H.D(a.left)+", "+H.D(a.top)+") "+H.D(this.gbi(a))+" x "+H.D(this.gbc(a))},
a_:function(a,b){var t
if(b==null)return!1
t=J.aK(b)
if(!t.$isbV)return!1
return a.left===t.gca(b)&&a.top===t.gcg(b)&&this.gbi(a)===t.gbi(b)&&this.gbc(a)===t.gbc(b)},
gan:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gbi(a)
q=this.gbc(a)
return W.xE(W.eU(W.eU(W.eU(W.eU(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gbc:function(a){return a.height},
gca:function(a){return a.left},
gcg:function(a){return a.top},
gbi:function(a){return a.width},
$isbV:1,
$asbV:function(){}}
W.im.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]},
$isaT:1,
$asaT:function(){return[P.C]},
$isaO:1,
$asaO:function(){return[P.C]}}
W.iI.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
W.j1.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
W.io.prototype={
M:function(a,b){return a.item(b)}}
W.ip.prototype={
h:function(a,b){return a.add(b)},
ax:function(a,b){return a.contains(b)},
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.k6.prototype={
gv:function(a){return this.a.length},
B:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot modify list"))},
sv:function(a,b){throw H.m(new P.aa("Cannot modify list"))},
gaY:function(a){return W.Hc(this)},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
W.dx.prototype={
ge6:function(a){return new W.qw(a)},
H:function(a){return a.localName},
cU:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
$isdx:1,
$isaP:1,
$isap:1,
$isk:1,
gaY:function(a){return a.style}}
W.ln.prototype={
gN:function(a){return a.name}}
W.h0.prototype={
gN:function(a){return a.name}}
W.lt.prototype={
gaG:function(a){return a.error}}
W.a6.prototype={$isa6:1,$isap:1}
W.aV.prototype={
h0:function(a,b,c,d){if(c!=null)this.fe(a,b,c,!1)},
i_:function(a,b,c,d){if(c!=null)this.fR(a,b,c,!1)},
fe:function(a,b,c,d){return a.addEventListener(b,H.dr(c,1),!1)},
fR:function(a,b,c,d){return a.removeEventListener(b,H.dr(c,1),!1)}}
W.lX.prototype={
gN:function(a){return a.name}}
W.ce.prototype={$isce:1,$isap:1,
gN:function(a){return a.name}}
W.fa.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isfa:1,
$isaT:1,
$asaT:function(){return[W.ce]},
$isaO:1,
$asaO:function(){return[W.ce]},
$isr:1,
$asr:function(){return[W.ce]},
$isv:1,
$asv:function(){return[W.ce]},
$isp:1,
$asp:function(){return[W.ce]}}
W.iJ.prototype={
$asr:function(){return[W.ce]},
$asv:function(){return[W.ce]},
$asp:function(){return[W.ce]},
$isr:1,
$isv:1,
$isp:1}
W.j2.prototype={
$asr:function(){return[W.ce]},
$asv:function(){return[W.ce]},
$asp:function(){return[W.ce]},
$isr:1,
$isv:1,
$isp:1}
W.lY.prototype={
gaG:function(a){return a.error}}
W.lZ.prototype={
gN:function(a){return a.name}}
W.m_.prototype={
gaG:function(a){return a.error},
gv:function(a){return a.length}}
W.m3.prototype={
gaY:function(a){return a.style},
gd9:function(a){return a.weight}}
W.m4.prototype={
h:function(a,b){return a.add(b)},
ip:function(a,b,c){return a.forEach(H.dr(b,3),c)},
aq:function(a,b){b=H.dr(b,3)
return a.forEach(b)}}
W.iD.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length},
gN:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isap:1}
W.mh.prototype={
gv:function(a){return a.length}}
W.fc.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.aP]},
$isv:1,
$asv:function(){return[W.aP]},
$isp:1,
$asp:function(){return[W.aP]},
$isaT:1,
$asaT:function(){return[W.aP]},
$isaO:1,
$asaO:function(){return[W.aP]}}
W.iK.prototype={
$asr:function(){return[W.aP]},
$asv:function(){return[W.aP]},
$asp:function(){return[W.aP]},
$isr:1,
$isv:1,
$isp:1}
W.j3.prototype={
$asr:function(){return[W.aP]},
$asv:function(){return[W.aP]},
$asp:function(){return[W.aP]},
$isr:1,
$isv:1,
$isp:1}
W.iF.prototype={
M:function(a,b){return a.item(b)}}
W.e8.prototype={
iy:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hO:function(a,b,c,d){return a.open(b,c,d)},
gi2:function(a){return W.HC(a.response)},
bj:function(a,b){return a.send(b)},
$ise8:1,
$isap:1,
gi3:function(a){return a.responseText}}
W.mk.prototype={
$1:function(a){return J.yw(a)},
$S:function(){return{func:1,args:[W.e8]}}}
W.ml.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.aH()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aO(0,t)
else p.bB(a)},
$S:function(){return{func:1,args:[,]}}}
W.hi.prototype={}
W.mp.prototype={
gN:function(a){return a.name}}
W.hj.prototype={$ishj:1}
W.fe.prototype={$isfe:1,$isdx:1,$isaP:1,$isap:1,
aO:function(a,b){return a.complete.$1(b)}}
W.mv.prototype={$isk:1,
gcS:function(a){return a.files},
gN:function(a){return a.name}}
W.mX.prototype={
gN:function(a){return a.name}}
W.ht.prototype={
h:function(a,b){return a.add(b)}}
W.hu.prototype={$ishu:1,
gav:function(a){return a.href}}
W.ne.prototype={
H:function(a){return String(a)},
gav:function(a){return a.href}}
W.nj.prototype={
gN:function(a){return a.name}}
W.hB.prototype={
gaG:function(a){return a.error}}
W.jw.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.np.prototype={
gbs:function(a){return a.content},
gN:function(a){return a.name}}
W.nq.prototype={
ii:function(a,b,c){return a.send(b,c)},
bj:function(a,b){return a.send(b)}}
W.hC.prototype={
gN:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isap:1}
W.jx.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cr]},
$isaO:1,
$asaO:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$isp:1,
$asp:function(){return[W.cr]}}
W.iU.prototype={
$asr:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asp:function(){return[W.cr]},
$isr:1,
$isv:1,
$isp:1}
W.jd.prototype={
$asr:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asp:function(){return[W.cr]},
$isr:1,
$isv:1,
$isp:1}
W.nH.prototype={$isk:1}
W.nI.prototype={
gN:function(a){return a.name}}
W.aP.prototype={
H:function(a){var t=a.nodeValue
return t==null?this.eV(a):t},
ax:function(a,b){return a.contains(b)},
$isaP:1,
$isap:1}
W.jA.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isr:1,
$asr:function(){return[W.aP]},
$isv:1,
$asv:function(){return[W.aP]},
$isp:1,
$asp:function(){return[W.aP]},
$isaT:1,
$asaT:function(){return[W.aP]},
$isaO:1,
$asaO:function(){return[W.aP]}}
W.iV.prototype={
$asr:function(){return[W.aP]},
$asv:function(){return[W.aP]},
$asp:function(){return[W.aP]},
$isr:1,
$isv:1,
$isp:1}
W.je.prototype={
$asr:function(){return[W.aP]},
$asv:function(){return[W.aP]},
$asp:function(){return[W.aP]},
$isr:1,
$isv:1,
$isp:1}
W.nL.prototype={
gN:function(a){return a.name}}
W.nQ.prototype={
gN:function(a){return a.name}}
W.nU.prototype={
gN:function(a){return a.name}}
W.nW.prototype={$isk:1}
W.ea.prototype={
gN:function(a){return a.name}}
W.o1.prototype={
gv:function(a){return a.length}}
W.cg.prototype={
M:function(a,b){return a.item(b)},
$iscg:1,
$isap:1,
gv:function(a){return a.length},
gN:function(a){return a.name}}
W.jH.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.cg]},
$isv:1,
$asv:function(){return[W.cg]},
$isp:1,
$asp:function(){return[W.cg]},
$isaT:1,
$asaT:function(){return[W.cg]},
$isaO:1,
$asaO:function(){return[W.cg]}}
W.iW.prototype={
$asr:function(){return[W.cg]},
$asv:function(){return[W.cg]},
$asp:function(){return[W.cg]},
$isr:1,
$isv:1,
$isp:1}
W.jf.prototype={
$asr:function(){return[W.cg]},
$asv:function(){return[W.cg]},
$asp:function(){return[W.cg]},
$isr:1,
$isv:1,
$isp:1}
W.o7.prototype={
bj:function(a,b){return a.send(b)}}
W.jL.prototype={
bj:function(a,b){return a.send(b)}}
W.fs.prototype={$isfs:1,$isdx:1,$isaP:1,$isap:1}
W.jM.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length},
gN:function(a){return a.name}}
W.oC.prototype={
gN:function(a){return a.name}}
W.oF.prototype={$isk:1}
W.oG.prototype={
gN:function(a){return a.name}}
W.oI.prototype={
gN:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isap:1}
W.jO.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.cs]},
$isv:1,
$asv:function(){return[W.cs]},
$isp:1,
$asp:function(){return[W.cs]},
$isaT:1,
$asaT:function(){return[W.cs]},
$isaO:1,
$asaO:function(){return[W.cs]}}
W.h2.prototype={
$asr:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$asp:function(){return[W.cs]},
$isr:1,
$isv:1,
$isp:1}
W.h5.prototype={
$asr:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$asp:function(){return[W.cs]},
$isr:1,
$isv:1,
$isp:1}
W.ft.prototype={$isft:1}
W.ct.prototype={$isct:1,$isap:1,
gd9:function(a){return a.weight}}
W.jP.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.ct]},
$isv:1,
$asv:function(){return[W.ct]},
$isp:1,
$asp:function(){return[W.ct]},
$isaT:1,
$asaT:function(){return[W.ct]},
$isaO:1,
$asaO:function(){return[W.ct]}}
W.iX.prototype={
$asr:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$asp:function(){return[W.ct]},
$isr:1,
$isv:1,
$isp:1}
W.jg.prototype={
$asr:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$asp:function(){return[W.ct]},
$isr:1,
$isv:1,
$isp:1}
W.fu.prototype={$isfu:1,$isap:1}
W.oP.prototype={
gaG:function(a){return a.error}}
W.ci.prototype={
M:function(a,b){return a.item(b)},
$isci:1,
$isap:1,
gv:function(a){return a.length}}
W.oQ.prototype={
gN:function(a){return a.name}}
W.oR.prototype={
gN:function(a){return a.name}}
W.oX.prototype={
B:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
aq:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gv:function(a){return a.length},
gac:function(a){return a.key(0)==null},
$isbs:1,
$asbs:function(){return[P.C,P.C]}}
W.cj.prototype={$iscj:1,$isap:1,
gav:function(a){return a.href}}
W.ec.prototype={}
W.pq.prototype={
gbs:function(a){return a.content}}
W.ps.prototype={
gN:function(a){return a.name}}
W.cT.prototype={$isap:1}
W.cK.prototype={$isap:1}
W.pv.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaT:1,
$asaT:function(){return[W.cK]},
$isaO:1,
$asaO:function(){return[W.cK]},
$isr:1,
$asr:function(){return[W.cK]},
$isv:1,
$asv:function(){return[W.cK]},
$isp:1,
$asp:function(){return[W.cK]}}
W.iY.prototype={
$asr:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$asp:function(){return[W.cK]},
$isr:1,
$isv:1,
$isp:1}
W.jh.prototype={
$asr:function(){return[W.cK]},
$asv:function(){return[W.cK]},
$asp:function(){return[W.cK]},
$isr:1,
$isv:1,
$isp:1}
W.pw.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaT:1,
$asaT:function(){return[W.cT]},
$isaO:1,
$asaO:function(){return[W.cT]},
$isr:1,
$asr:function(){return[W.cT]},
$isv:1,
$asv:function(){return[W.cT]},
$isp:1,
$asp:function(){return[W.cT]}}
W.h3.prototype={
$asr:function(){return[W.cT]},
$asv:function(){return[W.cT]},
$asp:function(){return[W.cT]},
$isr:1,
$isv:1,
$isp:1}
W.h6.prototype={
$asr:function(){return[W.cT]},
$asv:function(){return[W.cT]},
$asp:function(){return[W.cT]},
$isr:1,
$isv:1,
$isp:1}
W.pA.prototype={
gv:function(a){return a.length}}
W.cv.prototype={$iscv:1,$isap:1}
W.jT.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.cv]},
$isv:1,
$asv:function(){return[W.cv]},
$isp:1,
$asp:function(){return[W.cv]},
$isaT:1,
$asaT:function(){return[W.cv]},
$isaO:1,
$asaO:function(){return[W.cv]}}
W.iZ.prototype={
$asr:function(){return[W.cv]},
$asv:function(){return[W.cv]},
$asp:function(){return[W.cv]},
$isr:1,
$isv:1,
$isp:1}
W.ji.prototype={
$asr:function(){return[W.cv]},
$asv:function(){return[W.cv]},
$asp:function(){return[W.cv]},
$isr:1,
$isv:1,
$isp:1}
W.fw.prototype={$isfw:1,$isap:1}
W.jU.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.ed.prototype={}
W.pQ.prototype={
H:function(a){return String(a)},
$isk:1,
gav:function(a){return a.href}}
W.pU.prototype={
gv:function(a){return a.length}}
W.fx.prototype={$isfx:1,$isap:1}
W.jV.prototype={
M:function(a,b){return a.item(b)},
gv:function(a){return a.length}}
W.pZ.prototype={
bj:function(a,b){return a.send(b)}}
W.jY.prototype={$isk:1,
gN:function(a){return a.name}}
W.q5.prototype={$isk:1}
W.eP.prototype={$isk:1}
W.fy.prototype={$isfy:1,$isaP:1,$isap:1,
gN:function(a){return a.name}}
W.qn.prototype={
H:function(a){return"Rectangle ("+H.D(a.left)+", "+H.D(a.top)+") "+H.D(a.width)+" x "+H.D(a.height)},
a_:function(a,b){var t,s,r
if(b==null)return!1
t=J.aK(b)
if(!t.$isbV)return!1
s=a.left
r=t.gca(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcg(b)
if(s==null?r==null:s===r){s=a.width
r=t.gbi(b)
if(s==null?r==null:s===r){s=a.height
t=t.gbc(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gan:function(a){var t,s,r,q
t=J.dJ(a.left)
s=J.dJ(a.top)
r=J.dJ(a.width)
q=J.dJ(a.height)
return W.xE(W.eU(W.eU(W.eU(W.eU(0,t),s),r),q))},
$isbV:1,
$asbV:function(){},
gbc:function(a){return a.height},
gca:function(a){return a.left},
gcg:function(a){return a.top},
gbi:function(a){return a.width}}
W.hW.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[P.bV]},
$isaO:1,
$asaO:function(){return[P.bV]},
$isr:1,
$asr:function(){return[P.bV]},
$isv:1,
$asv:function(){return[P.bV]},
$isp:1,
$asp:function(){return[P.bV]}}
W.j_.prototype={
$asr:function(){return[P.bV]},
$asv:function(){return[P.bV]},
$asp:function(){return[P.bV]},
$isr:1,
$isv:1,
$isp:1}
W.jj.prototype={
$asr:function(){return[P.bV]},
$asv:function(){return[P.bV]},
$asp:function(){return[P.bV]},
$isr:1,
$isv:1,
$isp:1}
W.k4.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.bL]},
$isv:1,
$asv:function(){return[W.bL]},
$isp:1,
$asp:function(){return[W.bL]},
$isaT:1,
$asaT:function(){return[W.bL]},
$isaO:1,
$asaO:function(){return[W.bL]}}
W.j0.prototype={
$asr:function(){return[W.bL]},
$asv:function(){return[W.bL]},
$asp:function(){return[W.bL]},
$isr:1,
$isv:1,
$isp:1}
W.jk.prototype={
$asr:function(){return[W.bL]},
$asv:function(){return[W.bL]},
$asp:function(){return[W.bL]},
$isr:1,
$isv:1,
$isp:1}
W.qu.prototype={$isk:1}
W.qv.prototype={
gbc:function(a){return a.height},
gbi:function(a){return a.width}}
W.k8.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cp]},
$isaO:1,
$asaO:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$isv:1,
$asv:function(){return[W.cp]},
$isp:1,
$asp:function(){return[W.cp]}}
W.iL.prototype={
$asr:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asp:function(){return[W.cp]},
$isr:1,
$isv:1,
$isp:1}
W.j4.prototype={
$asr:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asp:function(){return[W.cp]},
$isr:1,
$isv:1,
$isp:1}
W.qQ.prototype={$isk:1}
W.i2.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.aP]},
$isv:1,
$asv:function(){return[W.aP]},
$isp:1,
$asp:function(){return[W.aP]},
$isaT:1,
$asaT:function(){return[W.aP]},
$isaO:1,
$asaO:function(){return[W.aP]}}
W.iM.prototype={
$asr:function(){return[W.aP]},
$asv:function(){return[W.aP]},
$asp:function(){return[W.aP]},
$isr:1,
$isv:1,
$isp:1}
W.j5.prototype={
$asr:function(){return[W.aP]},
$asv:function(){return[W.aP]},
$asp:function(){return[W.aP]},
$isr:1,
$isv:1,
$isp:1}
W.re.prototype={$isk:1}
W.kb.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isr:1,
$asr:function(){return[W.ci]},
$isv:1,
$asv:function(){return[W.ci]},
$isp:1,
$asp:function(){return[W.ci]},
$isaT:1,
$asaT:function(){return[W.ci]},
$isaO:1,
$asaO:function(){return[W.ci]}}
W.iN.prototype={
$asr:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$asp:function(){return[W.ci]},
$isr:1,
$isv:1,
$isp:1}
W.j6.prototype={
$asr:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$asp:function(){return[W.ci]},
$isr:1,
$isv:1,
$isp:1}
W.kd.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaT:1,
$asaT:function(){return[W.cj]},
$isaO:1,
$asaO:function(){return[W.cj]},
$isr:1,
$asr:function(){return[W.cj]},
$isv:1,
$asv:function(){return[W.cj]},
$isp:1,
$asp:function(){return[W.cj]}}
W.iO.prototype={
$asr:function(){return[W.cj]},
$asv:function(){return[W.cj]},
$asp:function(){return[W.cj]},
$isr:1,
$isv:1,
$isp:1}
W.j7.prototype={
$asr:function(){return[W.cj]},
$asv:function(){return[W.cj]},
$asp:function(){return[W.cj]},
$isr:1,
$isv:1,
$isp:1}
W.ru.prototype={$isk:1}
W.rv.prototype={$isk:1}
W.qw.prototype={
aV:function(){var t,s,r,q,p
t=P.aj(null,null,null,P.C)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bX)(s),++q){p=J.kt(s[q])
if(p.length!==0)t.h(0,p)}return t},
eE:function(a){this.a.className=a.bl(0," ")},
gv:function(a){return this.a.classList.length},
gac:function(a){return this.a.classList.length===0},
ax:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s}}
W.qz.prototype={
b1:function(a,b,c,d){return W.eS(this.a,this.b,a,!1,H.O(this,0))},
em:function(a,b,c){return this.b1(a,null,b,c)}}
W.hX.prototype={}
W.qA.prototype={
c3:function(a){if(this.b==null)return
this.e2()
this.b=null
this.d=null
return},
cZ:function(a,b){if(this.b==null)return;++this.a
this.e2()},
eq:function(a){return this.cZ(a,null)},
eu:function(a){if(this.b==null||this.a<=0)return;--this.a
this.e0()},
e0:function(){var t=this.d
if(t!=null&&this.a<=0)J.yk(this.b,this.c,t,!1)},
e2:function(){var t=this.d
if(t!=null)J.yA(this.b,this.c,t,!1)},
fa:function(a,b,c,d,e){this.e0()}}
W.qB.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gaf:function(a){return new W.m1(a,this.gv(a),-1,null,[H.aU(a,"bx",0)])},
h:function(a,b){throw H.m(new P.aa("Cannot add to immutable List."))},
ap:function(a,b,c,d,e){throw H.m(new P.aa("Cannot setRange on immutable List."))},
aN:function(a,b,c,d){return this.ap(a,b,c,d,0)},
aP:function(a,b,c,d){throw H.m(new P.aa("Cannot modify an immutable List."))},
c8:function(a,b,c,d){throw H.m(new P.aa("Cannot modify an immutable List."))},
$isr:1,
$asr:null,
$isv:1,
$asv:null,
$isp:1,
$asp:null}
W.m1.prototype={
L:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.i8(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gY:function(){return this.d}}
W.rn.prototype={}
P.rk.prototype={
bF:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
bh:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aK(a)
if(!!s.$isdO)return new Date(a.a)
if(!!s.$isGv)throw H.m(new P.eM("structured clone of RegExp"))
if(!!s.$isce)return a
if(!!s.$isf_)return a
if(!!s.$isfa)return a
if(!!s.$ishj)return a
if(!!s.$isfm||!!s.$iseB)return a
if(!!s.$isbs){r=this.bF(a)
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
s.aq(a,new P.rm(t,this))
return t.a}if(!!s.$isr){r=this.bF(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.hc(a,r)}throw H.m(new P.eM("structured clone of other type"))},
hc:function(a,b){var t,s,r,q,p
t=J.bd(a)
s=t.gv(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.bh(t.B(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.rm.prototype={
$2:function(a,b){this.a.a[a]=this.b.bh(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qd.prototype={
bF:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
bh:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dO(s,!0)
r.dm(s,!0)
return r}if(a instanceof RegExp)throw H.m(new P.eM("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.HW(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bF(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.n6()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.hr(a,new P.qe(t,this))
return t.a}if(a instanceof Array){p=this.bF(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.bd(a)
m=o.gv(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.am(m)
r=J.ds(n)
l=0
for(;l<m;++l)r.i(n,l,this.bh(o.B(a,l)))
return n}return a}}
P.qe.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bh(b)
J.kp(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rl.prototype={}
P.k0.prototype={
hr:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bX)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.rM.prototype={
$1:function(a){return this.a.aO(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rN.prototype={
$1:function(a){return this.a.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.l1.prototype={
e3:function(a){if($.$get$vN().b.test(a))return a
throw H.m(P.e4(a,"value","Not a valid class token"))},
H:function(a){return this.aV().bl(0," ")},
gaf:function(a){var t,s
t=this.aV()
s=new P.dG(t,t.r,null,null,[null])
s.c=t.e
return s},
aq:function(a,b){this.aV().aq(0,b)},
aK:function(a,b){var t=this.aV()
return new H.h_(t,b,[H.O(t,0),null])},
gac:function(a){return this.aV().a===0},
gv:function(a){return this.aV().a},
ax:function(a,b){if(typeof b!=="string")return!1
this.e3(b)
return this.aV().ax(0,b)},
cW:function(a){return this.ax(0,a)?a:null},
h:function(a,b){this.e3(b)
return this.hK(0,new P.l2(b))},
ak:function(a,b){return this.aV().ak(0,!0)},
aD:function(a){return this.ak(a,!0)},
hK:function(a,b){var t,s
t=this.aV()
s=b.$1(t)
this.eE(t)
return s},
$iseH:1,
$aseH:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]}}
P.l2.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.ld.prototype={
gN:function(a){return a.name}}
P.rC.prototype={
$1:function(a){this.b.aO(0,new P.k0([],[],!1).bh(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mt.prototype={
gN:function(a){return a.name}}
P.nM.prototype={
c_:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fG(a,b,c)
q=P.HB(t)
return q}catch(p){s=H.cx(p)
r=H.cw(p)
q=P.wb(s,r,null)
return q}},
h:function(a,b){return this.c_(a,b,null)},
fG:function(a,b,c){return a.add(new P.rl([],[]).bh(b))},
gN:function(a){return a.name}}
P.hN.prototype={
gaG:function(a){return a.error}}
P.pF.prototype={
gaG:function(a){return a.error}}
P.qX.prototype={
bJ:function(a){if(a<=0||a>4294967296)throw H.m(P.x9("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cb:function(){return Math.random()}}
P.r5.prototype={
b7:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.aA(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bJ:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.m(P.x9("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.b7()
return(this.a&t)>>>0}do{this.b7()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cb:function(){this.b7()
var t=this.a
this.b7()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fc:function(a){var t,s,r,q,p,o,n,m
t=J.ef(a,0)?-1:0
do{if(typeof a!=="number")return a.aW()
s=(a&4294967295)>>>0
a=C.d.aA(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.aA(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.aA(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.aA(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.aA(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.aA(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.aA(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b7()
this.b7()
this.b7()
this.b7()}}
P.r6.prototype={}
P.bV.prototype={$asbV:null}
P.ku.prototype={$isk:1,
gav:function(a){return a.href}}
P.eg.prototype={$isk:1}
P.lw.prototype={$isk:1}
P.lx.prototype={$isk:1}
P.ly.prototype={$isk:1}
P.lz.prototype={$isk:1}
P.lA.prototype={$isk:1}
P.lB.prototype={$isk:1}
P.lC.prototype={$isk:1}
P.lD.prototype={$isk:1}
P.lE.prototype={$isk:1}
P.lF.prototype={$isk:1,
gav:function(a){return a.href}}
P.lG.prototype={$isk:1}
P.lH.prototype={$isk:1}
P.lI.prototype={$isk:1}
P.lJ.prototype={$isk:1}
P.lK.prototype={$isk:1}
P.lL.prototype={$isk:1}
P.m0.prototype={$isk:1,
gav:function(a){return a.href}}
P.cq.prototype={$isk:1}
P.mq.prototype={$isk:1,
gav:function(a){return a.href}}
P.d5.prototype={$isap:1}
P.n_.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.d5]},
$isv:1,
$asv:function(){return[P.d5]},
$isp:1,
$asp:function(){return[P.d5]}}
P.iP.prototype={
$asr:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$asp:function(){return[P.d5]},
$isr:1,
$isv:1,
$isp:1}
P.j8.prototype={
$asr:function(){return[P.d5]},
$asv:function(){return[P.d5]},
$asp:function(){return[P.d5]},
$isr:1,
$isv:1,
$isp:1}
P.nm.prototype={$isk:1}
P.nn.prototype={$isk:1}
P.d7.prototype={$isap:1}
P.nJ.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.d7]},
$isv:1,
$asv:function(){return[P.d7]},
$isp:1,
$asp:function(){return[P.d7]}}
P.iQ.prototype={
$asr:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$asp:function(){return[P.d7]},
$isr:1,
$isv:1,
$isp:1}
P.j9.prototype={
$asr:function(){return[P.d7]},
$asv:function(){return[P.d7]},
$asp:function(){return[P.d7]},
$isr:1,
$isv:1,
$isp:1}
P.o_.prototype={$isk:1,
gav:function(a){return a.href}}
P.o4.prototype={
gv:function(a){return a.length}}
P.oz.prototype={$isk:1,
gav:function(a){return a.href}}
P.ph.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.C]},
$isv:1,
$asv:function(){return[P.C]},
$isp:1,
$asp:function(){return[P.C]}}
P.iR.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
P.ja.prototype={
$asr:function(){return[P.C]},
$asv:function(){return[P.C]},
$asp:function(){return[P.C]},
$isr:1,
$isv:1,
$isp:1}
P.kA.prototype={
aV:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.aj(null,null,null,P.C)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bX)(r),++p){o=J.kt(r[p])
if(o.length!==0)s.h(0,o)}return s},
eE:function(a){this.a.setAttribute("class",a.bl(0," "))}}
P.cb.prototype={
ge6:function(a){return new P.kA(a)},
cU:function(a,b,c,d,e){throw H.m(new P.aa("Cannot invoke insertAdjacentHtml on SVG."))},
$isk:1}
P.pk.prototype={$isk:1}
P.pm.prototype={$isk:1}
P.eL.prototype={}
P.pu.prototype={$isk:1,
gav:function(a){return a.href}}
P.d8.prototype={$isap:1}
P.pG.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
$isr:1,
$asr:function(){return[P.d8]},
$isv:1,
$asv:function(){return[P.d8]},
$isp:1,
$asp:function(){return[P.d8]}}
P.iS.prototype={
$asr:function(){return[P.d8]},
$asv:function(){return[P.d8]},
$asp:function(){return[P.d8]},
$isr:1,
$isv:1,
$isp:1}
P.jb.prototype={
$asr:function(){return[P.d8]},
$asv:function(){return[P.d8]},
$asp:function(){return[P.d8]},
$isr:1,
$isv:1,
$isp:1}
P.pR.prototype={$isk:1,
gav:function(a){return a.href}}
P.pV.prototype={$isk:1}
P.pW.prototype={$isk:1}
P.i_.prototype={$isk:1,
gav:function(a){return a.href}}
P.rb.prototype={$isk:1}
P.rc.prototype={$isk:1}
P.rd.prototype={$isk:1}
P.bh.prototype={}
P.d9.prototype={$isr:1,
$asr:function(){return[P.F]},
$isv:1,
$asv:function(){return[P.F]},
$isp:1,
$asp:function(){return[P.F]}}
P.fO.prototype={$isfO:1,$isap:1,
gv:function(a){return a.length}}
P.eY.prototype={$iseY:1,$isap:1,
gc2:function(a){return a.buffer}}
P.fP.prototype={
fo:function(a,b,c,d){return a.decodeAudioData(b,H.dr(c,1),H.dr(d,1))},
he:function(a,b){var t,s,r
t=P.fO
s=new P.bk(0,$.aE,null,[t])
r=new P.e_(s,[t])
this.fo(a,b,new P.kB(r),new P.kC(r))
return s}}
P.kB.prototype={
$1:function(a){this.a.aO(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kC.prototype={
$1:function(a){var t=this.a
if(a==null)t.bB("")
else t.bB(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.e5.prototype={}
P.l0.prototype={
gc2:function(a){return a.buffer}}
P.kw.prototype={
gN:function(a){return a.name}}
P.ol.prototype={$isk:1}
P.rt.prototype={$isk:1}
P.jQ.prototype={
gv:function(a){return a.length},
B:function(a,b){if(b>>>0!==b||b>=a.length)throw H.m(P.by(b,a,null,null,null))
return P.y3(a.item(b))},
i:function(a,b,c){throw H.m(new P.aa("Cannot assign element of immutable List."))},
sv:function(a,b){throw H.m(new P.aa("Cannot resize immutable List."))},
a0:function(a,b){return this.B(a,b)},
M:function(a,b){return P.y3(a.item(b))},
$isr:1,
$asr:function(){return[P.bs]},
$isv:1,
$asv:function(){return[P.bs]},
$isp:1,
$asp:function(){return[P.bs]}}
P.iT.prototype={
$asr:function(){return[P.bs]},
$asv:function(){return[P.bs]},
$asp:function(){return[P.bs]},
$isr:1,
$isv:1,
$isp:1}
P.jc.prototype={
$asr:function(){return[P.bs]},
$asv:function(){return[P.bs]},
$asp:function(){return[P.bs]},
$isr:1,
$isv:1,
$isp:1}
T.fK.prototype={
gv:function(a){return this.a.length},
B:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gac:function(a){return this.a.length===0},
gaf:function(a){var t=this.a
return new J.i9(t,t.length,0,null,[H.O(t,0)])},
$ashq:function(){return[T.fL]},
$asp:function(){return[T.fL]},
gcS:function(a){return this.a}}
T.fL.prototype={
gbs:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fd(C.x)
r=T.fd(C.y)
q=T.wZ(0,this.b)
new T.iG(s,q,0,0,0,t,r).dK()
r=q.c.buffer
q=q.a
r.toString
q=H.cR(r,0,q)
this.cy=q
t=q}else{t=s.bM()
this.cy=t}this.ch=0}}return t},
H:function(a){return this.a},
gN:function(a){return this.a}}
T.de.prototype={
H:function(a){return"ArchiveException: "+this.a}}
T.hk.prototype={
gv:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.a9()
if(typeof r!=="number")return H.am(r)
return t-(s-r)},
B:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
if(typeof b!=="number")return H.am(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
b6:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.am(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.a9()
if(typeof s!=="number")return H.am(s)
b=t-(a-s)}return T.tN(this.a,this.d,b,a)},
bd:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.a3()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.am(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
bt:function(a,b){return this.bd(a,b,0)},
d3:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.a9()
if(typeof s!=="number")return H.am(s)
r=this.b6(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.a9()
if(typeof p!=="number")return H.am(p)
if(typeof s!=="number")return s.a3()
this.b=s+(t-(q-p))
return r},
ce:function(a){return P.pi(this.d3(a).bM(),0,null)},
ah:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
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
aj:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
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
b3:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.a3()
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
if(this.d===1)return(C.a.aF(p,56)|C.a.aF(o,48)|C.a.aF(n,40)|C.a.aF(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.aF(i,56)|C.a.aF(j,48)|C.a.aF(k,40)|C.a.aF(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bM:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.a9()
if(typeof r!=="number")return H.am(r)
q=t-(s-r)
t=this.a
r=J.aK(t)
if(!!r.$isd9){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cR(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xP(r.cm(t,s,p>o?o:p)))},
f1:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gc2:function(a){return this.a},
ghN:function(a){return this.b}}
T.nR.prototype={
ib:function(a,b){var t,s,r,q
if(b==null)b=J.cm(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cw(s-q)
C.q.aN(r,t,s,a)
this.a+=b},
da:function(a){return this.ib(a,null)},
ie:function(a){var t,s,r,q
t=J.bd(a)
while(!0){s=this.a
r=t.gv(a)
if(typeof r!=="number")return H.am(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gv(a)
if(typeof r!=="number")return H.am(r)
this.cw(s+r-this.c.length)}s=this.a
r=t.gv(a)
if(typeof r!=="number")return H.am(r)
C.q.ap(q,s,s+r,t.gc2(a),t.ghN(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.a9()
if(typeof q!=="number")return H.am(q)
this.a=t+(r-(s-q))},
b6:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cR(t,a,b-a)},
dk:function(a){return this.b6(a,null)},
cw:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.bb(P.dK("Invalid length "+H.D(s)))
r=new Uint8Array(s)
q=this.c
C.q.aN(r,0,q.length,q)
this.c=r},
ft:function(){return this.cw(null)},
gv:function(a){return this.a}}
T.q9.prototype={
fQ:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.b6(this.a-20,20)
if(s.aj()!==117853008){a.b=t
return}s.aj()
r=s.b3()
s.aj()
a.b=r
if(a.aj()!==101075792){a.b=t
return}a.b3()
a.ah()
a.ah()
q=a.aj()
p=a.aj()
o=a.b3()
n=a.b3()
m=a.b3()
l=a.b3()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fu:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.a9()
if(typeof r!=="number")return H.am(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.aj()===101010256){a.b=t
return q}}throw H.m(new T.de("Could not find End of Central Directory Record"))},
f6:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fu(a)
this.a=t
a.b=t
a.aj()
this.b=a.ah()
this.c=a.ah()
this.d=a.ah()
this.e=a.ah()
this.f=a.aj()
this.r=a.aj()
s=a.ah()
if(s>0)this.x=a.ce(s)
this.fQ(a)
r=a.b6(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.a3()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.aH()
if(!(p<t+o))break
if(r.aj()!==33639248)break
p=new T.qb(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.ah()
p.b=r.ah()
p.c=r.ah()
p.d=r.ah()
p.e=r.ah()
p.f=r.ah()
p.r=r.aj()
p.x=r.aj()
p.y=r.aj()
n=r.ah()
m=r.ah()
l=r.ah()
p.z=r.ah()
p.Q=r.ah()
p.ch=r.aj()
o=r.aj()
p.cx=o
if(n>0)p.cy=r.ce(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.a9()
j=r.b6(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.a9()
if(typeof g!=="number")return H.am(g)
if(typeof k!=="number")return k.a3()
r.b=k+(i-(h-g))
p.db=j.bM()
f=j.ah()
e=j.ah()
if(f===1){if(e>=8)p.y=j.b3()
if(e>=16)p.x=j.b3()
if(e>=24){o=j.b3()
p.cx=o}if(e>=28)p.z=j.aj()}}if(l>0)p.dx=r.ce(l)
a.b=o
p.dy=T.H7(a,p)
q.push(p)}}}
T.qa.prototype={
gbs:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fd(C.x)
q=T.fd(C.y)
t=T.wZ(0,t)
new T.iG(s,t,0,0,0,r,q).dK()
q=t.c.buffer
t=t.a
q.toString
t=H.cR(q,0,t)
this.cy=t
this.d=0}else{t=s.bM()
this.cy=t}}return t},
H:function(a){return this.z},
f7:function(a,b){var t,s,r,q
t=a.aj()
this.a=t
if(t!==67324752)throw H.m(new T.de("Invalid Zip Signature"))
this.b=a.ah()
this.c=a.ah()
this.d=a.ah()
this.e=a.ah()
this.f=a.ah()
this.r=a.aj()
this.x=a.aj()
this.y=a.aj()
s=a.ah()
r=a.ah()
this.z=a.ce(s)
this.Q=a.d3(r).bM()
this.cx=a.d3(this.ch.x)
if((this.c&8)!==0){q=a.aj()
if(q===134695760)this.r=a.aj()
else this.r=q
this.x=a.aj()
this.y=a.aj()}}}
T.qb.prototype={
H:function(a){return this.cy}}
T.q8.prototype={
hf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.H6(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.F],p=0;p<t.length;t.length===r||(0,H.bX)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.df()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fL(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.e0(k,"$isr",q,"$asr")){j.cy=k
j.cx=T.tN(k,0,null,0)}else if(k instanceof T.hk){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hk(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.hm(m,"/")
j.y=n.r
s.push(j)}return new T.fK(s,null)}}
T.mm.prototype={
f0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.aF(1,this.b)
r=H.cA(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iG.prototype={
dK:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.a3()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.aH()
if(!(r<s+q))break
if(!this.fN())break}},
fN:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.a3()
if(typeof s!=="number")return s.aH()
if(s>=r+q)return!1
p=this.aI(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aI(16)
s=this.aI(16)
if(n!==0&&n!==(s^65535)>>>0)H.bb(new T.de("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.a9()
r=q-r
if(n>s-r)H.bb(new T.de("Input buffer is broken"))
m=t.b6(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.a9()
if(typeof l!=="number")return H.am(l)
if(typeof s!=="number")return s.a3()
t.b=s+(r-(q-l))
this.b.ie(m)
break
case 1:this.dD(this.f,this.r)
break
case 2:this.fO()
break
default:throw H.m(new T.de("unknown BTYPE: "+o))}return(p&1)===0},
aI:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.a3()
if(typeof r!=="number")return r.aH()
if(r>=q+p)throw H.m(new T.de("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.aE(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.aF(1,a)
this.c=C.a.dZ(t,a)
this.d=s-a
return(t&r-1)>>>0},
cF:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.a3()
if(typeof p!=="number")return p.aH()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.aE(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.aF(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dZ(r,k)
this.d=q-k
return l&65535},
fO:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aI(5)+257
s=this.aI(5)+1
r=this.aI(4)+4
q=H.cA(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.E,o)
n=C.E[o]
m=this.aI(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fd(p)
k=new Uint8Array(H.cA(t))
j=new Uint8Array(H.cA(s))
i=this.dC(t,l,k)
h=this.dC(s,l,j)
this.dD(T.fd(i),T.fd(h))},
dD:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cF(a)
if(s>285)throw H.m(new T.de("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.ft()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.C,p)
o=C.C[p]+this.aI(C.W[p])
n=this.cF(b)
if(n<=29){if(n>=30)return H.w(C.z,n)
m=C.z[n]+this.aI(C.V[n])
for(r=-m;o>m;){t.da(t.dk(r))
o-=m}if(o===m)t.da(t.dk(r))
else t.da(t.b6(r,o-m))}else throw H.m(new T.de("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.a9();--r
t.b=r
if(r<0)t.b=0}},
dC:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cF(b)
switch(q){case 16:p=3+this.aI(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.aI(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aI(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.m(new T.de("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kv.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Math Book",H.a([$.M,$.ad,$.aL],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Giant Map",H.a([$.M,$.ad],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microscope",H.a([$.E,$.ad,$.b_],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Star Chart",H.a([$.M,$.ad],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("History Book",H.a([$.M,$.ad],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Radioactive Rock",H.a([$.c_,$.aD],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.ad],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.hc,$.n)
q.i(0,$.be,$.n)
q.i(0,$.f8,$.l)
q.i(0,$.b4,$.L)
q.i(0,$.cE,$.l)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.N
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.FX
n=[U.c]
q.i(0,new R.ae("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
q.i(0,new R.ae("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.N+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.x8(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.ae("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fq(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f4,$.L)
s.i(0,$.cE,$.n)
p=$.o
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.ae("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.N+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.ae("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.N+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eD(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
s.i(0,new R.ae("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fq(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.f4,$.L)
t.i(0,$.cE,$.n)
t.i(0,$.c1,$.L)
t.i(0,$.tA,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.at
t.i(0,new R.ae("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.N+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fq(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.N
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.at
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.G2
t.i(0,new R.ae("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.eb(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
t.i(0,new R.ae("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.N+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aQ)}}
K.bY.prototype={}
L.fM.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Perfectly Generic Object",H.a([],[G.a7]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.l)
q.i(0,$.be,$.L)
q.i(0,$.dR,$.l)
q.i(0,$.c1,$.n)
q.i(0,$.e6,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.a3("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.ab(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f6,$.l)
s.i(0,$.ep,$.L)
s.i(0,$.er,$.n)
s.i(0,$.cV,$.l)
s.i(0,$.co,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! "
s.i(0,new R.a3("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.ab(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.be,$.L)
t.i(0,$.c7,$.n)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.N
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.ch+". The "+r+" has won! "
t.i(0,new R.ae("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.ab(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.uN(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.ch+". The "+l+" has won! "
t.i(0,new R.a3("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.ab(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(s,t,null),$.ay)},
H:function(a){return this.Q},
S:function(a,b,c,d,e,f,g){var t,s,r,q
t=this.Q
this.ch=t
s=this.dx
r=[X.ib]
q=[M.h9]
if(s==null){this.r=new X.h8("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+H.D(t)+".xml",!1,H.a([],r),H.a([],q))
this.J()
this.K()
this.x=H.D(t)+".png"
this.y=H.D(t)+"Big.png"}else{this.J()
this.K()
s.sa6(this.ga6())
s.sa5(this.ga5())
s.sa4(this.ga4())
s.saT(this.gaT())
s.sa2(this.ga2())
s.sW(this.gW())
s.sU(this.gU())
s.sZ(this.gZ())
s.sV(this.gV())
s.sa8(this.ga8())
s.sa7(this.ga7())
s.sa1(this.ga1())
s.sX(this.gX())
this.r=new X.h8("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+s.H(0)+".xml",!1,H.a([],r),H.a([],q))
this.x="Reskins/"+H.D(t)+".png"
this.y="Reskins/"+H.D(t)+"Big.png"}t=this.e
if($.$get$ky().ag(0,t))H.bb("Duplicate aspect id for "+this.H(0)+": "+t+" is already registered for "+J.cM($.$get$ky().B(0,t))+".")
$.$get$ky().i(0,t,this)},
ga6:function(){return this.a},
ga5:function(){return this.b},
ga4:function(){return this.c},
gaT:function(){return this.d},
gN:function(a){return this.Q},
gW:function(){return this.k1},
ga1:function(){return this.k2},
gU:function(){return this.k3},
ga2:function(){return this.k4},
ga8:function(){return this.r1},
ga7:function(){return this.r2},
gZ:function(){return this.rx},
gV:function(){return this.ry},
gX:function(){return this.x2},
saT:function(a){return this.d=a}}
L.P.prototype={}
M.kz.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Barbells",H.a([$.ao,$.c9,$.E],s),null,!1,"Strength Building Metal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Basketball",H.a([$.et,$.c3],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Baseball Bat",H.a([$.jm,$.a9],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rubber Ball",H.a([$.et,$.c3],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.aR,$.ag],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hockey Stick",H.a([$.jm,$.a9,$.dj],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Trophy",H.a([$.E,$.bc],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Boxing Glove",H.a([$.wp,$.c3],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Yoga Mat",H.a([$.c3,$.b7],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.e7,$.L)
q.i(0,$.bQ,$.n)
q.i(0,$.cV,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.N+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.ae("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.ae("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.N+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.eb(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.ae("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hL(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.e7,$.n)
t.i(0,$.f9,$.n)
t.i(0,$.bQ,$.n)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.ae("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.x8(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.N
t.i(0,new R.ae("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.eb(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
k=$.u
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.ae("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.at+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,t,null),$.aQ)}}
U.kD.prototype={
T:function(a,b){var t=0,s=P.bi(),r,q,p,o
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:q=$.$get$vE()
p=q.createBufferSource()
o=p
t=3
return P.cl(J.yq(q,b),$async$T)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$asdv:function(){return[P.eY]},
$asc8:function(){return[P.eY,P.bh]}}
U.ng.prototype={
b2:function(a){return"audio/mpeg"}}
U.nO.prototype={
b2:function(a){return"audio/ogg"}}
U.pe.prototype={
T:function(a,b){var t=0,s=P.bi(),r,q,p
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:q=W.zq(b)
p=new W.hX(q,"canplaythrough",!1,[W.a6])
t=3
return P.cl(p.gat(p),$async$T)
case 3:r=q
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$asiq:function(){return[W.eZ]},
$asc8:function(){return[W.eZ,P.C]}}
U.pf.prototype={}
U.pg.prototype={}
O.kF.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cod Piece",H.a([$.R,$.ac,$.av,$.Q,$.a9],s),"God damn it, MI. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poisoned Candy",H.a([$.tS,$.Q,$.bM],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Lyre",H.a([$.aM,$.a9,$.bu,$.Q,$.ak],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Snare Trap",H.a([$.R,$.aM,$.Q,$.bg],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cB,$.l)
t.i(0,$.hf,$.l)
t.i(0,$.cz,$.l)
t.i(0,$.dz,$.l)
t.i(0,$.cD,$.l)
t.i(0,$.f3,$.l)
r="After all the bullshit the "+$.z+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aZ+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.N
m=[U.c]
t.i(0,new R.al("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.N
t.i(0,new R.al("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.al("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kV("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Y.pt.prototype={
T:function(a,b){var t=0,s=P.bi(),r
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$aseK:function(){return[P.C]},
$asc8:function(){return[P.C,P.C]}}
Y.oe.prototype={
b2:function(a){return"application/octet-stream"},
T:function(a,b){var t=0,s=P.bi(),r
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$asdv:function(){return[P.bh]},
$asc8:function(){return[P.bh,P.bh]}}
L.kJ.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Bear",H.a([$.aR,$.aW,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Thought",H.a([$.mA,$.wI,$.fg],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Doorway",H.a([$.fg,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cd,$.l)
t.i(0,$.dh,$.n)
t.i(0,$.bQ,$.n)
t.i(0,$.er,$.B)
r=$.o
q="The "+r+" hears a "+$.u+" "+$.N+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.z
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.a3("Revenge on the Denizen",!1,[new U.c(q),new U.c(p),new U.c(n),new U.ab(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
T.kL.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Mystical Vial of Blood",H.a([$.b_,$.bu,$.I,$.b1],s),null,!1,"Vial of Not-ABs Oil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bananaphone",H.a([$.aF,$.bu,$.I,$.b8],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.R,$.bu,$.I,$.b1,$.hn],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.E,$.bg,$.I,$.b1,$.hn,$.aJ],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.a9,$.u_,$.bu,$.b1,$.I,$.ac],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cO,$.l)
q.i(0,$.tD,$.l)
q.i(0,$.c1,$.n)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.at+" and some boondollars in compensation."
n=this.y2
k=[U.c]
q.i(0,new R.ae("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.eb(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.N+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.ch+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.a3("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.ab(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cV,$.l)
s.i(0,$.cD,$.L)
s.i(0,$.b4,$.L)
s.i(0,$.lV,$.l)
s.i(0,$.cz,$.L)
p=$.o
o="The "+p+"  and the "
m=$.eF
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.a3("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.ab(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.eE(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.ch+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.FT
s.i(0,new R.a3("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.ab(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
o="The "+p+" learns of the "
h=$.aZ
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.ch+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.a3("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.ab(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aZ+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.fb+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.al("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fq(),!1,!1,new Y.c2("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aZ
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.fb+" is now more popular with your friends than you are."
s.i(0,new R.al("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.uO(),!1,!1,new Y.c2("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
m="The "+p+"  and the "
h=$.eF
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.a3("Pale Shipping Dungeon",!1,[new U.c(m),new U.ab(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.r)+".",o)],H.a([],k),R.eE(),!1,!1,new Y.jE(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aw)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.be,$.L)
t.i(0,$.c7,$.n)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.fb+" to kick your ass, but luckily they have several."
t.i(0,new R.al("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.eb(),!1,!1,new Y.c2("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
o=$.o
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.ch+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.N+"ing. "
t.i(0,new R.a3("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.ab(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaT:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.I},
gX:function(){return this.ab}}
T.kO.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Pan's Pipe",H.a([$.ak,$.a9,$.bu,$.I],s),null,!1,"Smonkin Weeds Pipe")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skeleton Key",H.a([$.b9,$.I],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Inspector's Fan",H.a([$.ag,$.E,$.bu,$.I],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Jet Pack",H.a([$.aG,$.E,$.aR,$.I,$.ac],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.n)
q.i(0,$.f9,$.l)
q.i(0,$.b4,$.n)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.at
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.FY
i=[U.c]
q.i(0,new R.a3("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.ab(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.be,$.l)
s.i(0,$.f9,$.n)
s.i(0,$.b4,$.n)
s.i(0,$.bQ,$.n)
s.i(0,$.c7,$.n)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.at
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.N+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.ch+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.a3("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.ab(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.co,$.l)
t.i(0,$.lT,$.l)
t.i(0,$.f9,$.L)
t.i(0,$.c7,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.at
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aZ+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.ch+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.a3("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.ab(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaT:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.I},
gX:function(){return this.ab}}
M.fT.prototype={
eG:function(a){var t=this.a
if(!t.ag(0,a))return
return t.B(0,a)}}
Y.kQ.prototype={
T:function(a,b){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:q=J.e3(b,"\n")
p=P.C
o=P.cH(p,p)
n=P.cH(p,[P.eH,P.C])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.dc(k).bv(k).length===0)m=null
else if(m==null)m=C.c.bv(k)
else{j=C.c.bv(k)
i=C.c.O(m,0,C.c.ek(m,$.$get$vI())+1)+j
o.i(0,i,m)
if(!n.ag(0,m))n.i(0,m,P.aj(null,null,null,p))
J.yj(n.B(0,m),i)}}r=new M.fT(o,n)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$aseK:function(){return[M.fT]},
$asc8:function(){return[M.fT,P.C]}}
K.kT.prototype={
d4:function(a,b){var t,s,r
t=this.a
C.b.dh(t)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.bX)(t),++r)t[r].d4(0,b)}}
K.fl.prototype={
d4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=this.a
s=this.c
r=this.b
q=document
p=q.createElement("div")
p.classList.add("MemoNewspost")
o=q.createElement("div")
n=W.mr(null,t.a,null)
n.classList.add("MemoNewspostIcon")
m=n.style;(m&&C.L).eS(m,"float","left","")
l=q.createElement("span")
C.a1.cU(l,"beforeend",r,C.o,null)
l.classList.add("MemoNewspostText")
r=l.style
m=t.b.i6()
r.color=m
k=q.createElement("span")
s.toString
k.textContent=C.a.H(H.uM(s))+"-"+C.c.cX(C.a.H(H.jJ(s)),2,"0")+"-"+C.c.cX(C.a.H(H.jI(s)),2,"0")+": "
k.classList.add("MemoDate")
j=W.vC(null)
t=t.c
j.textContent=t+" posted: "
j.href="bio.html?staff="+t
j.target="_blank"
j.classList.add("MemoNewspostName")
j.appendChild(n)
o.appendChild(k)
o.appendChild(j)
p.appendChild(o)
p.appendChild(l)
b.appendChild(p)},
aJ:function(a,b){var t,s
t=b.ghd()
s=this.c
t=C.a.aA(P.zU(0,0,0,t.a-s.a,0,0).a,1e6)
if(t===0)return C.c.au(b.a.c,"j")?-1:1
return t},
f3:function(a,b){var t=J.e3(a,":")
if(t.length<2)return
this.c=P.zT(J.kt(t[0]))
if(0>=t.length)return H.w(t,0)
C.b.az(t,t[0])
this.b=C.b.bl(t,":")
K.vL().a.push(this)},
$isbv:1,
$asbv:function(){return[K.fl]},
ghd:function(){return this.c}}
S.kU.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("A Rock",H.a([$.aW,$.aD,$.bj,$.I],[G.a7]),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lP,$.n)
t.i(0,$.cO,$.l)
r=$.o
q="The "+r+" decides enough is enough, and that they need to fight the "
p=$.z
q=q+p+". They decide to amass an army of consorts to fight it..."
o="The "+r+" figures out that the "
n=$.u
o=o+n+"s are very disinclined to fight, so the "+r+" has to use a bit more force..."
m="The "+r+" has created an army of fearful consorts, it may fall apart during the Denizen fight though..."
l="Now that the "+r+" has amassed an army of "+n+"s, they think it's time to fight the "+p+"..."
n="The "+p+" lies slain, but the "+n+"s still lie under the power of the "+r+"."
t.i(0,new R.a3("Make An Army",!1,[new U.c(q),new U.c(o),new U.c(m),new U.ab(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.kX.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Colonel Sassacre's Daunting Text ",H.a([$.M,$.ao,$.b8,$.c9],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wise Guy Book",H.a([$.M,$.b8],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Beagle Puss",H.a([$.b_,$.b8],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Novelty Microphone",H.a([$.aR,$.ag,$.b8],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Banana",H.a([$.aF,$.b8],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fake Flower",H.a([$.R,$.b8],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Trick Handcuffs",H.a([$.E,$.b8],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.n)
q.i(0,$.cC,$.l)
q.i(0,$.bQ,$.n)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.N+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.ae("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.e7,$.L)
s.i(0,$.bQ,$.l)
s.i(0,$.cC,$.l)
s.i(0,$.cB,$.l)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aZ
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.N+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.G0
s.i(0,new R.ae("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cF,$.L)
t.i(0,$.c6,$.n)
t.i(0,$.cC,$.l)
t.i(0,$.bQ,$.n)
t.i(0,$.iu,$.n)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.at
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.N
t.i(0,new R.ae("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aQ)}}
S.bH.prototype={
H:function(a){return H.D(new H.dY(H.km(this),null))+": "+this.c},
gN:function(a){return this.c}}
S.ic.prototype={}
S.mj.prototype={}
M.l8.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Can of Spray Paint",H.a([$.aI,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sensible Chuckles Magazine",H.a([$.M,$.ar,$.b8,$.aL],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Gentleman's Razor",H.a([$.u7,$.E,$.aH],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("How To Draw Manga",H.a([$.M,$.ar,$.aL],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Painting of a Horse Boxing a Football Player",H.a([$.aI,$.ax,$.M],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Collection of Classical Works",H.a([$.ar,$.M],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Documentary on Horses",H.a([$.ar,$.aS,$.ax],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Paint Set",H.a([$.aI,$.ar],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shaving Cream",H.a([$.aG,$.ar,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Classy Suit",H.a([$.R,$.ar],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("The Fatherly Gent's Shaving Almanac ",H.a([$.M,$.ar,$.aL],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.n)
q.i(0,$.cE,$.l)
q.i(0,$.b4,$.n)
p=$.o
o="The "+p+" visits a beautiful "
n=$.at
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.N+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.ae("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.e7,$.L)
s.i(0,$.bQ,$.n)
s.i(0,$.cC,$.L)
s.i(0,$.be,$.n)
s.i(0,$.cB,$.l)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aZ
l=l+n+" "
k=$.at
s.i(0,new R.ae("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.N+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.hf,$.L)
t.i(0,$.cz,$.L)
t.i(0,$.f3,$.L)
t.i(0,$.c6,$.L)
t.i(0,$.be,$.n)
t.i(0,$.b4,$.n)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.N
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.at+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.FQ
t.i(0,new R.ae("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aQ)}}
T.lg.prototype={}
V.li.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Trendy Fabric",H.a([$.aI,$.R],s),null,!1,"Weird Tasting Candy Paper")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Necklace",H.a([$.aI,$.tX,$.hn],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sewing Needle",H.a([$.E,$.u2,$.aY],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jl
r=A.j("Broom",H.a([r,$.a9,$.ao,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rolling Pin",H.a([$.a9,$.ua,$.ao],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Velvet Pillow",H.a([$.R,$.b7,$.bu,$.aI,$.e9],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yarn Ball",H.a([$.aI,$.R],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Refrigerator",H.a([$.aJ,$.c9,$.E,$.bj],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Photo Album",H.a([$.aI,$.M],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Cubes",H.a([$.bj],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cast Iron Skillet",H.a([$.E,$.aG,$.ao,$.c9,$.tW],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Failed Dish",H.a([$.bM],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dr Pepper BBQ Sauce",H.a([$.bM],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Potted Plant",H.a([$.aI,$.bR,$.b5],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chicken Leg",H.a([$.aF,$.bf,$.b9],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juicy Steak",H.a([$.aF,$.bf],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Wedding Cake",H.a([$.aI,$.aF,$.b1],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.n)
q.i(0,$.cD,$.n)
q.i(0,$.cz,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.at
l=[U.c]
q.i(0,new R.ae("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.N+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.ie("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cz,$.l)
s.i(0,$.bQ,$.n)
s.i(0,$.f3,$.l)
s.i(0,$.dz,$.n)
s.i(0,$.be,$.l)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.at
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.N+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.FZ
s.i(0,new R.ae("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.f5,$.l)
t.i(0,$.be,$.n)
t.i(0,$.en,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.lV,$.l)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.at
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.N+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.ae("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.aQ)}}
U.lj.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aL,$.ag,$.M,$.aM,$.I,$.ac],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Egg Timer",H.a([$.aS,$.bu,$.I,$.aM],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skull Timer",H.a([$.b9,$.bu,$.I,$.aM],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poison Flask",H.a([$.b_,$.I,$.bM],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Gorgon Head",H.a([$.b_,$.I,$.bj,$.aM,$.bg,$.bT,$.b3],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Obituary",H.a([$.aJ,$.b3,$.aM,$.M,$.I],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dR,$.l)
q.i(0,$.d4,$.n)
q.i(0,$.f9,$.L)
q.i(0,$.be,$.L)
q.i(0,$.c1,$.n)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.at
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.a3("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dR,$.l)
s.i(0,$.d4,$.n)
s.i(0,$.es,$.aw)
s.i(0,$.eo,$.n)
s.i(0,$.tA,$.n)
s.i(0,$.cO,$.n)
s.i(0,$.d4,$.n)
s.i(0,$.be,$.L)
s.i(0,$.c1,$.n)
s.i(0,$.dy,$.n)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aZ
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.N+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.ch+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.a3("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eD(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.at
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.ch+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.a3("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.ab(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.c1,$.l)
t.i(0,$.w5,$.aw)
t.i(0,$.hc,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.a3("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.ab(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eD(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.o
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aZ
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.at
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.ch+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.FP
t.i(0,new R.a3("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.ab(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaT:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.c6},
gX:function(){return this.c7},
sa6:function(a){return this.m=a},
sa5:function(a){return this.n=a},
sa4:function(a){return this.p=a},
saT:function(a){return this.w=a},
sa2:function(a){return this.t=a},
sW:function(a){return this.u=a},
sU:function(a){return this.C=a},
sZ:function(a){return this.D=a},
sV:function(a){return this.E=a},
sa8:function(a){return this.F=a},
sa7:function(a){return this.G=a},
sa1:function(a){return this.c6=a},
sX:function(a){return this.c7=a}}
Z.lk.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Dream Diary",H.a([$.M,$.aL,$.I],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aS,$.bu,$.ao,$.I,$.ac],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aS,$.bu,$.I],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.f5,$.n)
q.i(0,$.en,$.l)
q.i(0,$.b4,$.n)
q.i(0,$.lV,$.n)
p=$.u
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.at
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.N+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.FW
k=[U.c]
q.i(0,new R.a3("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.ab(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.co,$.n)
s.i(0,$.en,$.l)
s.i(0,$.di,$.n)
s.i(0,$.cd,$.n)
s.i(0,$.em,$.n)
s.i(0,$.cC,$.l)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.N
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.a3("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.ab("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dh,$.l)
t.i(0,$.iw,$.n)
t.i(0,$.b4,$.n)
t.i(0,$.cd,$.l)
t.i(0,$.em,$.l)
t.i(0,$.en,$.n)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.a3("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aZ+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.N+"ing in reverse. Another is in a "+$.at+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.ab("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
ga1:function(){return this.I},
gX:function(){return this.ab}}
X.h8.prototype={}
X.ib.prototype={
$S:function(){return{func:1,v:true,args:[[P.r,M.h9]]}}}
M.h9.prototype={}
U.lM.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Fluthulu Poster",H.a([$.R,$.b7,$.b3,$.bp],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Scalemate",H.a([$.R,$.b7,$.b3],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Bone Shield",H.a([$.aJ,$.aS,$.b9,$.fh,$.av],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Ice Sword",H.a([$.aS,$.wu,$.eu,$.av],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Zombie Mask",H.a([$.aS,$.bT,$.bf,$.b3],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Vampire Romance Novel",H.a([$.aL,$.M,$.aN,$.b3],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizardy Herbert",H.a([$.M,$.af,$.ao],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Complacency of the Learned",H.a([$.M,$.af,$.ao],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grimoire for Summoning the Zoologically Dubious ",H.a([$.M,$.af,$.bT,$.b3,$.bp],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizard Statue",H.a([$.aJ,$.aD,$.af,$.ao,$.av],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Mermaid Fountain",H.a([$.aJ,$.mD,$.af,$.ao,$.av],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.aw)
q.i(0,$.cD,$.n)
q.i(0,$.c7,$.n)
q.i(0,$.cF,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.at
j=[U.c]
q.i(0,new R.ae("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.cO,$.l)
s.i(0,$.ix,$.n)
s.i(0,$.c1,$.l)
s.i(0,$.es,$.l)
s.i(0,$.he,$.n)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.ae("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.iA,$.n)
t.i(0,$.c1,$.l)
t.i(0,$.dP,$.n)
t.i(0,$.f4,$.n)
t.i(0,$.tD,$.n)
r=$.o
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.N
t.i(0,new R.ae("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aQ)}}
L.lN.prototype={}
N.ah.prototype={
H:function(a){return H.D(new H.dY(H.km(this),null))+": "+H.D(this.b)}}
O.c8.prototype={
be:function(a){var t=0,s=P.bi(),r,q=this,p
var $async$be=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cl(q.b4(a),$async$be)
case 3:r=p.T(0,c)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$be,s)}}
O.dv.prototype={
bk:function(a){var t=0,s=P.bi(),r
var $async$bk=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$bk,s)},
cQ:function(a){var t=0,s=P.bi(),r,q=this
var $async$cQ=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zr([J.vs(a)],q.b2(0),null))
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$cQ,s)},
b4:function(a){var t=0,s=P.bi(),r,q=this,p,o
var $async$b4=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:p=P.bh
o=new P.bk(0,$.aE,null,[p])
W.wc(a,null,q.b2(0),null,null,"arraybuffer",null,null).b5(new O.kK(new P.e_(o,[p])))
r=o
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$b4,s)},
$asc8:function(a){return[a,P.bh]}}
O.kK.prototype={
$1:function(a){this.a.aO(0,H.kn(J.yv(a),"$isbh"))},
$S:function(){return{func:1,args:[W.e8]}}}
O.eK.prototype={
bk:function(a){var t=0,s=P.bi(),r,q,p,o,n
var $async$bk=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:a.toString
q=H.cR(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hK(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$bk,s)},
b4:function(a){var t=0,s=P.bi(),r
var $async$b4=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:r=W.tM(a,null,null)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$b4,s)},
$asc8:function(a){return[a,P.C]}}
O.iq.prototype={
b4:function(a){var t=0,s=P.bi(),r
var $async$b4=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$b4,s)},
bk:function(a){return H.bb("Element format doesn't read from buffers")},
$asc8:function(a){return[a,P.C]}}
O.m2.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u},
gX:function(){return this.A}}
V.m5.prototype={
b2:function(a){return"font/opentype"},
T:function(a,b){var t=0,s=P.bi(),r
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:t=3
return P.cl(A.hw("scripts/Rendering/text/opentype.min.js",!1),$async$T)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$asdv:function(){return[R.hg]},
$asc8:function(){return[R.hg,P.bh]}}
Z.ir.prototype={}
E.iE.prototype={}
E.nN.prototype={}
E.G.prototype={
H:function(a){var t="["+J.cM(this.a)+" x "+H.D(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fN.prototype={
H:function(a){var t="[(Random from "+P.ue(this.d,"(",")")+") x "+H.D(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.ia.prototype={
H:function(a){return"[Stats assigned from player Interests x"+H.D(this.b)+"]"}}
Y.mb.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("How to Teach Your Friends to Hack SBURB",H.a([$.aL,$.Q,$.M,$.ac,$.hp],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Unstable Domino",H.a([$.aS,$.Q,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Exposed Thread",H.a([$.R,$.Q,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Teetering Plate",H.a([$.jo,$.Q,$.aM],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lW,$.n)
t.i(0,$.c7,$.l)
t.i(0,$.dy,$.L)
t.i(0,$.dg,$.l)
r=$.u
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.N
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aZ
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.at
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.a3("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.ab(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
t.i(0,new R.al("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.N
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aZ+" Quest Online: The "+$.at+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.al("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.u
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.N+"s in time to stop them.    ")],H.a([],i),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Y.mc.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Sherpa Parka",H.a([$.bj,$.Q,$.cf],s),"Clearly the best class uses this.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Guide Book",H.a([$.ac,$.bj,$.aL,$.M,$.Q,$.ad],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Whistle",H.a([$.E,$.Q,$.aR],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Announcement System",H.a([$.E,$.Q,$.ag,$.ad],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lW,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.dy,$.n)
t.i(0,$.dg,$.l)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.al("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.N+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.N+"s in time to stop them.    ")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.md.prototype={}
T.me.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Doll",H.a([$.jo,$.aI,$.aA,$.I],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.a9,$.aA,$.I,$.ac,$.b3],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.mI,$.I],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.M,$.I,$.aN],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shades",H.a([$.ax,$.b_,$.I],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.eo,$.L)
q.i(0,$.eq,$.l)
q.i(0,$.bQ,$.n)
p=$.o
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.ch+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.a3("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.ab(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.at
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.a3("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.ab(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uO(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h=this.f
h.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cC,$.l)
s.i(0,$.ix,$.l)
s.i(0,$.f9,$.n)
s.i(0,$.c1,$.l)
s.i(0,$.cz,$.n)
s.i(0,$.dy,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.at
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.ch+". The "+p+" is victorious. "
s.i(0,new R.a3("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.ab(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.N
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.fb+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.al("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.eb(),!1,!1,new Y.c2("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.a3("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.ab(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eD(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.iv,$.l)
t.i(0,$.cz,$.l)
t.i(0,$.lU,$.l)
t.i(0,$.f3,$.n)
t.i(0,$.he,$.l)
t.i(0,$.cD,$.n)
t.i(0,$.eq,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.a3("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.N+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aZ+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aZ
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.N
t.i(0,new R.al("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hL(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
q=$.o
m="The "+q+"  and the "
r=$.eF
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.a3("Flushed Shipping Dungeon",!1,[new U.c(m),new U.ab(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.r)+".",n)],H.a([],i),R.eE(),!1,!1,new Y.iC(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aw)
n=$.o
r="The "+n+"  and the "
q=$.eF
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.a3("Pitched Shipping Dungeon",!1,[new U.c(r),new U.ab(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.D(C.r)+".",m)],H.a([],i),R.eE(),!1,!1,new Y.jG(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aw)
h.i(0,new X.H(s,t,null),$.aQ)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.I},
gX:function(){return this.ab}}
B.mf.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Family Ashes",H.a([$.aJ,$.aG,$.Q,$.aM,$.bZ],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Last Will and Testament",H.a([$.ac,$.M,$.Q,$.aM,$.mH],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grooming Guide",H.a([$.aL,$.Q,$.ar],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Powered Attorney",H.a([$.wk,$.Q,$.mz,$.mH],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Executer's Ax",H.a([$.tP,$.Q,$.aH,$.mH],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.co,$.n)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.al("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.z+" has released the frogs into the "
p=$.o
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.N+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
V.mg.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Hippo",H.a([$.aR,$.aW,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ranting",H.a([$.mA,$.aR,$.fg],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Vent",H.a([$.E,$.tT],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.em,$.L)
t.i(0,$.dh,$.n)
t.i(0,$.lP,$.n)
t.i(0,$.iw,$.n)
r=$.o
q="The "+r+" hears the screaming voice of the "
p=$.z
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.N
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.a3("Stop the Screamening",!1,[new U.c(q),new U.c(n),new U.c(o),new U.ab(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
X.mi.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Wand",H.a([$.a9,$.I,$.af,$.aW],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Angel Feather",H.a([$.aW,$.bz,$.I,$.b0,$.ak,$.ac,$.af],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Never Ending Story DVD",H.a([$.bS,$.u_,$.I,$.af,$.b8,$.aW],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candle",H.a([$.aW,$.b0,$.I,$.aG],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Figurine",H.a([$.aS,$.b0,$.I,$.aW],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.tz,$.l)
q.i(0,$.cD,$.n)
q.i(0,$.b4,$.l)
q.i(0,$.cd,$.l)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.N+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.at
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.FS
i=[U.c]
q.i(0,new R.a3("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.iu,$.n)
s.i(0,$.di,$.l)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.at
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.a3("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.dz,$.L)
t.i(0,$.cE,$.l)
t.i(0,$.cd,$.l)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.at
t.i(0,new R.a3("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.ab("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.a3("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.ab("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hL(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
X.mn.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Footstick",H.a([$.dj,$.Q,$.jn,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Cheating Guide",H.a([$.aL,$.Q,$.hp,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of Shogun",H.a([$.R,$.Q,$.e9,$.mG,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Macrobots",H.a([$.u9,$.Q,$.mz],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cF,$.l)
t.i(0,$.di,$.l)
t.i(0,$.en,$.l)
t.i(0,$.dg,$.l)
t.i(0,$.f5,$.l)
t.i(0,$.em,$.l)
t.i(0,$.hd,$.n)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.c]
t.i(0,new R.ae("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uP(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ch+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.N
t.i(0,new R.a3("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.ab(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.x6(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.ae("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.a3("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
t.i(0,new R.a3("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x7(),!1,!1,new Y.c2("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.al("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.ay)}}
Q.mo.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Yardstick",H.a([$.dj,$.Q,$.jn,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURB Hacking Guide",H.a([$.aL,$.Q,$.hp,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Body Pillow of Hussie",H.a([$.R,$.Q,$.e9,$.mG,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.ms.prototype={
be:function(a){var t=0,s=P.bi(),r,q,p
var $async$be=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:q=W.mr(null,a,null)
p=new W.hX(q,"load",!1,[W.a6])
t=3
return P.cl(p.gat(p),$async$be)
case 3:r=q
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$be,s)},
$asdv:function(){return[W.fe]},
$asc8:function(){return[W.fe,P.bh]}}
Q.o3.prototype={
b2:function(a){return"image/png"},
T:function(a,b){var t=0,s=P.bi(),r,q=this,p,o,n
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cl(q.cQ(b),$async$T)
case 3:p=n.mr(null,d,null)
o=new W.hX(p,"load",!1,[W.a6])
t=4
return P.cl(o.gat(o),$async$T)
case 4:r=p
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)}}
Q.o0.prototype={
b2:function(a){return"image/png"},
T:function(a,b){var t=0,s=P.bi()
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:throw H.m("Read NYI")
return P.bm(null,s)}})
return P.bn($async$T,s)},
$asdv:function(){return[Q.jF]},
$asc8:function(){return[Q.jF,P.bh]}}
B.hl.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Perfectly Generic Object",H.a([],[G.a7]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.l)
q.i(0,$.be,$.L)
q.i(0,$.dR,$.l)
q.i(0,$.c1,$.n)
q.i(0,$.e6,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.c]
q.i(0,new R.ae("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f6,$.l)
s.i(0,$.ep,$.L)
s.i(0,$.er,$.n)
s.i(0,$.cV,$.l)
s.i(0,$.co,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.ae("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.be,$.L)
t.i(0,$.c7,$.n)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.ae("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.N
t.i(0,new R.ae("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uN(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.H(s,t,null),$.aQ)},
H:function(a){return this.ch},
gN:function(a){return this.ch}}
A.a8.prototype={
aJ:function(a,b){var t=b.gbK()-this.gbK()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bf(t)},
ghh:function(){var t,s,r,q,p,o
t=H.a([],[P.C])
s=new A.hM(null,null)
s.cl(this.f.a)
if(this.r===0)return t
r=P.dk(G.zO(this.f),!0,G.a7)
C.b.di(r,new A.mO())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bX)(r),++p){o=r[p]
if(!(o instanceof G.as||o.ge9().length===0))t.push(" "+Y.HU(s.hQ(o.ge9())))}return t},
gbK:function(){var t,s,r
for(t=this.f,s=new P.dG(t,t.r,null,null,[null]),s.c=t.e,r=0;s.L();)r+=s.d.gbK()
return r},
gh7:function(){var t=this.f
return new H.hU(t,new A.mN(),[H.O(t,0)])},
ghs:function(){var t,s,r,q,p
for(t=this.ghh(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bX)(t),++q)r+=t[q]+" "
return r+this.d},
H:function(a){return this.ghs()},
P:function(a,b,c,d,e){var t,s,r
t=P.uq(b,null)
this.f=t
if(t.a===0)t.h(0,$.fg)
s=P.uq(this.gh7(),null)
for(t=new P.dG(s,s.r,null,null,[null]),t.c=s.e;t.L();){r=t.d
this.f.c0(0,r.geU())
this.f.az(0,r)}$.$get$wO().push(this)},
$isbv:1,
$asbv:function(){return[A.a8]}}
A.mO.prototype={
$2:function(a,b){return a.geo()-C.a.bf(b.geo())},
$S:function(){return{func:1,args:[G.a7,G.a7]}}}
A.mN.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.a7]}}}
Z.mV.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Juice Box",H.a([$.M,$.I,$.aW,$.av],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shogun Body Pillow",H.a([$.e9,$.b7,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.em,$.aw)
t.i(0,$.cD,$.n)
t.i(0,$.bQ,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cd,$.l)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.at
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.N+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.z
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.a3("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.ab(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.z
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.N
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.a3("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.ab(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.z
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.a3("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.ab(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
N.mW.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Gavel",H.a([$.a9,$.tY],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Caution Tape",H.a([$.aS,$.bg],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Deerstalker Hat",H.a([$.R,$.aI],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mystery Novel",H.a([$.M,$.aL],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dish Served Cold",H.a([$.bR,$.aF,$.bj],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pony Pals: Detective Pony ",H.a([$.M,$.aL,$.ax],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Handcuffs",H.a([$.aJ,$.E,$.bg],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.L)
q.i(0,$.c6,$.n)
q.i(0,$.cE,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.N+"ing "
n=$.u
m=[U.c]
q.i(0,new R.ae("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.at+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c6,$.l)
s.i(0,$.dy,$.n)
s.i(0,$.cV,$.n)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.N+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.at+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.FO
s.i(0,new R.ae("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.co,$.n)
t.i(0,$.cO,$.L)
t.i(0,$.es,$.n)
t.i(0,$.eo,$.n)
t.i(0,$.f7,$.n)
t.i(0,$.iy,$.n)
r=$.o
q="The "+r+" finds a crowd of "
p=$.N
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.G1
t.i(0,new R.ae("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.aQ)}}
S.mY.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Shining Armor",H.a([$.aJ,$.mK,$.Q,$.fh],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Excalibur",H.a([$.ac,$.mK,$.Q,$.aY,$.aH,$.eu],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Noble Steed",H.a([$.E,$.Q,$.bf,$.aA],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Hero's Shield",H.a([$.aJ,$.fh,$.Q,$.mK],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lS,$.l)
t.i(0,$.dQ,$.l)
t.i(0,$.e7,$.l)
t.i(0,$.f7,$.l)
t.i(0,$.ha,$.n)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.N+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.al("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aZ
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.at
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.al("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.N+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.al("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Q.mZ.prototype={
gU:function(){return this.n}}
K.n0.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Creeping Vine",H.a([$.a9,$.I,$.b5,$.aA],s),null,!1,"Sentient Plant Tentacles")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lollipop",H.a([$.tS,$.I,$.b1],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Golem",H.a([$.aJ,$.aD,$.I,$.aA],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ectoplasm",H.a([$.bZ,$.I,$.b1],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Aqua Vitae",H.a([$.b_,$.I,$.b1,$.ac,$.af],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Homunculus",H.a([$.bf,$.I,$.aA],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.c7,$.l)
q.i(0,$.be,$.l)
q.i(0,$.hb,$.L)
q.i(0,$.b4,$.n)
q.i(0,$.lW,$.n)
q.i(0,$.cF,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.N+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.a3("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.ab(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.l)
s.i(0,$.cz,$.l)
s.i(0,$.cF,$.L)
s.i(0,$.b4,$.n)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.a3("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.ab(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.d4,$.l)
t.i(0,$.be,$.L)
t.i(0,$.dR,$.l)
t.i(0,$.c1,$.n)
t.i(0,$.e6,$.n)
t.i(0,$.is,$.n)
r="Drawn by wailing and "+$.N+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.a3("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.ab(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
G.n1.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("FAQ",H.a([$.ag,$.I,$.ad,$.bF],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aS,$.I,$.b0,$.ag,$.bF],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.I,$.b0,$.bF,$.ac,$.mD],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.tZ,$.I,$.ao],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.u6,$.I],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.b5,$.I,$.b0,$.bF],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("8-Ball",H.a([$.b_,$.I,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.iz,$.l)
q.i(0,$.f5,$.n)
q.i(0,$.dP,$.l)
q.i(0,$.eq,$.l)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.a3("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.ab(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.N+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.a3("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.ab(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.c7,$.n)
s.i(0,$.b4,$.n)
s.i(0,$.dz,$.l)
s.i(0,$.lQ,$.l)
s.i(0,$.ep,$.l)
s.i(0,$.iu,$.l)
p=$.o
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.at
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aZ
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.N+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.a3("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.ab(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uO(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.z
s.i(0,new R.a3("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.N+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.ab("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.hc,$.n)
q.i(0,$.be,$.n)
q.i(0,$.f8,$.l)
q.i(0,$.b4,$.n)
q.i(0,$.cE,$.l)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.fb+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.al("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.eb(),!1,!1,new Y.c2("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.fb+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.al("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.eD(),!1,!1,new Y.c2("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.a3("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.ab(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dP,$.l)
t.i(0,$.iz,$.l)
t.i(0,$.eq,$.n)
t.i(0,$.cD,$.n)
t.i(0,$.tC,$.n)
t.i(0,$.c1,$.L)
t.i(0,$.e7,$.L)
t.i(0,$.bQ,$.n)
t.i(0,$.cC,$.L)
t.i(0,$.be,$.n)
t.i(0,$.cB,$.l)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.at
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.N+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.a3("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.ab(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.z+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.fb+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.al("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.eb(),!1,!1,new Y.c2("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.H(q,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
Z.nf.prototype={
J:function(){var t,s,r,q
t=this.E
s=[G.a7]
r=A.j("Dream Bubbles Book",H.a([$.M,$.ar,$.aL,$.wn],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.O(t,0)]))
t=Q.A(null,null,A.a8)
r=A.j("Uno Reverse Card",H.a([$.mB,$.jn,$.ar],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lord's Cape",H.a([$.R,$.Q,$.ar],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drawing Tablet",H.a([$.hp,$.Q,$.ar],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("How to Make Friends And Influence People",H.a([$.ac,$.M,$.Q,$.bq,$.aL],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cO,$.L)
q.i(0,$.es,$.L)
q.i(0,$.c1,$.L)
q.i(0,$.cV,$.n)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.u
m=[U.c]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.N+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o="As soon as the "+$.z+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.al("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.H(s,q,null),$.bN)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.w1,$.l)
t.i(0,$.cd,$.l)
t.i(0,$.be,$.l)
t.i(0,$.b4,$.n)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.N+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r="As soon as the "+$.z+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.al("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",this.E,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,t,null),$.bN)}}
S.nh.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Alternate Costume",H.a([$.R,$.Q,$.af,$.ac,$.az],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Cape",H.a([$.R,$.Q,$.af],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Staff",H.a([$.a9,$.Q,$.ao,$.af,$.dj],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Walking Broom",H.a([$.jl,$.a9,$.Q,$.aA,$.af,$.dj],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.f4,$.l)
t.i(0,$.f7,$.n)
t.i(0,$.co,$.l)
t.i(0,$.er,$.n)
t.i(0,$.d4,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
t.i(0,new R.al("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aZ
t.i(0,new R.al("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.z+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aZ
t.i(0,new R.al("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.N+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
U.ni.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Maiden's Breath",H.a([$.b5,$.Q,$.aI],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Feather Duster",H.a([$.a9,$.Q,$.dj,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Valkyrie Shield",H.a([$.aI,$.aJ,$.E,$.Q,$.ac,$.fh,$.wf],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Maiden's Songbook",H.a([$.M,$.Q,$.ak,$.aL],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.dg,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.be,$.n)
t.i(0,$.dz,$.n)
t.i(0,$.cC,$.n)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.N
n=[U.c]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.al("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.N+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
D.no.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("memes",H.a([$.aW,$.tQ,$.wm,$.tT],[G.a7]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.iz,$.l)
r=$.o
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.z
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.a3("Become Shrek",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
T.t1.prototype={
$1:function(a){var t,s,r,q,p
t=window
s="scrollY" in t?C.d.bf(t.scrollY):C.d.bf(t.document.documentElement.scrollTop)
r=window.screen.height
if(typeof r!=="number")return H.am(r)
q=1500-r
if(q>s){t=document.querySelector("body").style
p="center -"+C.a.H(s)+"px"
t.backgroundPosition=p}else{t=document.querySelector("body").style
p="center -"+C.a.H(q)+"px"
t.backgroundPosition=p}},
$S:function(){return{func:1,args:[W.a6]}}}
L.nr.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u},
ga1:function(){return this.A},
gX:function(){return this.F}}
V.ns.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Puzzle Box",H.a([$.a9,$.I,$.af],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.ag,$.I,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.E,$.I],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.E,$.I,$.ag,$.ad],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Janus Bust",H.a([$.aJ,$.hm,$.aD,$.ar,$.I,$.ac,$.ag],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cd,$.n)
q.i(0,$.f5,$.L)
q.i(0,$.cE,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.c]
q.i(0,new R.a3("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.ab(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fq(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.a3("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.ab("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.ha,$.L)
s.i(0,$.c6,$.n)
s.i(0,$.cE,$.L)
s.i(0,$.cd,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.a3("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.ab("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.iA,$.l)
t.i(0,$.be,$.n)
t.i(0,$.f8,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cE,$.l)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.at+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.a3("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
S.nu.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u},
gX:function(){return this.A}}
E.nv.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Feather Pen",H.a([$.E,$.Q,$.ar,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Half Finished Bust of Snoop Dog",H.a([$.wA,$.Q,$.hm,$.ao,$.ac],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Book of Poetry",H.a([$.M,$.Q,$.ar,$.aL],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.dg,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.be,$.n)
t.i(0,$.dz,$.n)
t.i(0,$.cC,$.n)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.N
n=[U.c]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.n)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.at
t.i(0,new R.al("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
F.nw.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Piano",H.a([$.ao,$.a9,$.ak,$.ar],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flute",H.a([$.E,$.ak],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microphone",H.a([$.aR,$.ag],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Violin",H.a([$.a9,$.ak],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sheet Music",H.a([$.M,$.ak],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electric Guitar",H.a([$.aS,$.ak,$.ag,$.aR,$.ax],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.aS,$.ak,$.ag,$.ax],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guitar",H.a([$.a9,$.ak],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cD,$.aw)
q.i(0,$.tC,$.l)
q.i(0,$.eq,$.l)
q.i(0,$.dz,$.n)
q.i(0,$.b4,$.n)
q.i(0,$.lO,$.n)
p=$.o
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aZ
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.at
k=[U.c]
q.i(0,new R.ae("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aZ
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.at+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.N+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.FU
q.i(0,new R.ae("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.tF,$.aw)
s.i(0,$.dy,$.n)
s.i(0,$.cV,$.n)
s.i(0,$.dz,$.l)
s.i(0,$.lO,$.aw)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aZ
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.ae("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.at+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.hb,$.aw)
t.i(0,$.bQ,$.n)
t.i(0,$.dR,$.n)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.N
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aZ+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.ae("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aQ)}}
Y.nK.prototype={
T:function(a,b){var t=0,s=P.bi(),r,q=this,p,o
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:t=3
return P.cl(A.hw("scripts/Rendering/threed/three.min.js",!1),$async$T)
case 3:t=4
return P.cl(Q.oA(),$async$T)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.bK(p)
o.eR(p,P.wR(["",$.$get$vR()],P.C,S.hA))
o.eQ(p,!1)
q.b=p}J.vz(p,b)
r=J.vz(q.b,b)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$aseK:function(){return[S.fp]},
$asc8:function(){return[S.fp,P.C]}}
V.nS.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Shorts",H.a([$.R,$.Q,$.ff,$.ac],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sidekick Figurine",H.a([$.aS,$.Q,$.ax],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Steroids",H.a([$.aF,$.Q,$.af],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lS,$.l)
t.i(0,$.cF,$.n)
t.i(0,$.hf,$.n)
t.i(0,$.lU,$.n)
t.i(0,$.dg,$.n)
t.i(0,$.be,$.n)
t.i(0,$.e6,$.n)
t.i(0,$.ep,$.n)
t.i(0,$.tG,$.n)
t.i(0,$.is,$.n)
t.i(0,$.lQ,$.n)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.N
n=[U.c]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.N
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.at
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.a3("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.ab(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.al("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aZ+" buffs. With a deafening "+$.N+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.ie("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
G.o5.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Superhero Action Figure",H.a([$.aS,$.ax,$.av],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Action DVD",H.a([$.aS,$.ax],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ghost Busters DVD",H.a([$.aS,$.bZ],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Snow Dogs DVD",H.a([$.aS,$.b8,$.bj,$.cf],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skateboarding Video Game",H.a([$.aS,$.ax],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Movie Poster",H.a([$.M,$.ax],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Audrey II Plush",H.a([$.b5,$.ax,$.R,$.aA],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peashooter Toy",H.a([$.b5,$.b2,$.ax,$.R],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shitty Sword",H.a([$.av,$.E,$.ax,$.eu,$.aH,$.bS],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("GameBro Magazine",H.a([$.M,$.ax],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("GameGrl Magazine",H.a([$.M,$.ax],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cC,$.n)
q.i(0,$.cB,$.n)
q.i(0,$.bQ,$.l)
q.i(0,$.cF,$.aw)
q.i(0,$.di,$.aw)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aZ+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.N+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.FV
l=[U.c]
q.i(0,new R.ae("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.eo,$.n)
s.i(0,$.dy,$.n)
s.i(0,$.cB,$.n)
s.i(0,$.bQ,$.n)
s.i(0,$.dQ,$.l)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aZ
s.i(0,new R.ae("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.n)
t.i(0,$.dP,$.l)
t.i(0,$.cz,$.l)
t.i(0,$.dQ,$.n)
r=$.o
q="The "+r+" gets a job at the "+$.aZ+" Cinema. A new movie, The Lonely "
o=$.at
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.N+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.ae("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aQ)}}
N.oa.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Feather'd Cap",H.a([$.R,$.Q,$.ff],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crown",H.a([$.ac,$.tX,$.Q,$.ff],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gunpowder",H.a([$.br,$.Q],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cB,$.n)
t.i(0,$.cd,$.n)
t.i(0,$.dR,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.al("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.at+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
U.c.prototype={}
U.ab.prototype={}
R.ob.prototype={
H:function(a){return H.D(new H.dY(H.km(this),null))+": "+this.c},
gN:function(a){return this.c}}
R.ae.prototype={}
R.a3.prototype={}
R.al.prototype={}
R.bA.prototype={}
E.oc.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Curtain",H.a([$.R,$.I,$.av],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.E,$.eu,$.aY,$.I,$.aH,$.b3,$.av,$.bp,$.aM],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.E,$.aR,$.ag,$.I,$.av],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aJ,$.E,$.aR,$.bq,$.c3,$.I,$.av],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.aF,$.bq,$.ar,$.I,$.ac,$.av],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nightmare Fuel",H.a([$.a9,$.I,$.b3,$.aG,$.br,$.av],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.it,$.l)
q.i(0,$.cO,$.l)
q.i(0,$.dy,$.l)
q.i(0,$.d4,$.n)
q.i(0,$.c1,$.n)
q.i(0,$.co,$.n)
q.i(0,$.c6,$.L)
q.i(0,$.di,$.n)
q.i(0,$.eo,$.l)
q.i(0,$.iy,$.l)
q.i(0,$.f7,$.l)
q.i(0,$.lT,$.l)
q.i(0,$.hb,$.n)
q.i(0,$.es,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.at
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.a3("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hL(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.a3("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.ab(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dz,$.l)
s.i(0,$.c1,$.n)
s.i(0,$.c6,$.l)
s.i(0,$.cD,$.l)
s.i(0,$.cC,$.l)
s.i(0,$.cB,$.n)
s.i(0,$.ix,$.L)
s.i(0,$.cO,$.n)
s.i(0,$.cF,$.l)
s.i(0,$.bQ,$.l)
s.i(0,$.di,$.L)
p=$.N
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aZ
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.a3("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.ab(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.it,$.l)
t.i(0,$.di,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.cF,$.n)
t.i(0,$.cC,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.a3("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I},
sa6:function(a){return this.m=a},
sa5:function(a){return this.n=a},
sa4:function(a){return this.p=a},
sa2:function(a){return this.q=a},
sW:function(a){return this.t=a},
sU:function(a){return this.A=a},
sZ:function(a){return this.C=a},
sV:function(a){return this.D=a},
sa1:function(a){return this.E=a},
sa8:function(a){return this.F=a},
sa7:function(a){return this.G=a},
sX:function(a){return this.I=a}}
L.od.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gV:function(){return this.t},
gX:function(){return this.u}}
L.of.prototype={}
L.og.prototype={}
L.oh.prototype={}
Y.dT.prototype={}
Y.aq.prototype={}
Y.d2.prototype={}
Y.ny.prototype={}
Y.c2.prototype={
gN:function(a){return this.c}}
Y.a5.prototype={}
Y.ie.prototype={}
Y.bE.prototype={}
Y.cZ.prototype={}
Y.kV.prototype={}
Y.bw.prototype={}
Y.jE.prototype={}
Y.iC.prototype={}
Y.jG.prototype={}
Z.om.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gZ:function(){return this.t},
gV:function(){return this.u}}
N.on.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Domino Mask",H.a([$.R,$.Q,$.ff],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Archery Set",H.a([$.tR,$.Q,$.ff,$.tO],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gristtorrent Server",H.a([$.ac,$.aS,$.ag,$.Q,$.ad,$.az],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.c6,$.l)
t.i(0,$.co,$.n)
t.i(0,$.dQ,$.n)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.al("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Q.oo.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Red Rose",H.a([$.aN,$.aI],s),null,!1,"Seductive Plant")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.aN,$.M],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chocolate Bar",H.a([$.aN,$.aF],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candelabra",H.a([$.aN,$.aG],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Head Cannon",H.a([$.aN,$.br,$.E,$.b2],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Her Pitch Passions Novel",H.a([$.aL,$.M,$.aN],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.l)
q.i(0,$.hf,$.n)
q.i(0,$.f3,$.n)
q.i(0,$.he,$.l)
q.i(0,$.cD,$.n)
q.i(0,$.iv,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.at+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.ae("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cD,$.n)
s.i(0,$.dP,$.l)
s.i(0,$.he,$.l)
s.i(0,$.cz,$.n)
s.i(0,$.eq,$.L)
s.i(0,$.iv,$.L)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.ae("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.iv,$.l)
t.i(0,$.cz,$.l)
t.i(0,$.f3,$.n)
t.i(0,$.lU,$.l)
t.i(0,$.he,$.l)
t.i(0,$.cD,$.n)
t.i(0,$.eq,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.N+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.FR
t.i(0,new R.ae("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.o
r="The "+n+"  and the "
o=$.eF
t.i(0,new R.ae("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.eE(),!1,!1,new Y.iC(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o=$.o
n="The "+o+"  and the "
r=$.eF
t.i(0,new R.ae("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.eE(),!1,!1,new Y.jE(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r=$.o
o="The "+r+"  and the "
n=$.eF
t.i(0,new R.ae("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.eE(),!1,!1,new Y.jG(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p.i(0,new X.H(s,t,null),$.aQ)}}
V.op.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Arrow",H.a([$.aY,$.a9,$.tO],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bow",H.a([$.a9,$.ao,$.fg],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yondu",H.a([$.av,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Empathy",H.a([$.I,$.tQ,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.b4,$.n)
t.i(0,$.dh,$.L)
t.i(0,$.bQ,$.n)
t.i(0,$.cd,$.L)
r=$.o
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.z
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.a3("Be the Yondu",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.c]),R.Gd(),!1,!1,new Y.ny("Rule","Yondu","Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.aQ)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
ga2:function(){return this.u},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
R.oq.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Runestone",H.a([$.aD,$.af,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Bottle",H.a([$.b_,$.af],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Rune","Magic","Fairy","Infinite","Predictions"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cd,$.n)
t.i(0,$.b4,$.n)
r=$.o
q="The "+r+" is walking around in a village of "+$.u+"s, when a Consort walks up to them. It says that The "+r+" has to learn magic, so they can fight the "
p=$.z
t.i(0,new R.a3("Learn Magic",!1,[new U.c(q+p+". The "+r+" promises to do their best."),new U.c("The "+r+" is practicing the arcana, they're starting to get pretty good."),new U.c("The "+r+" is able to fight numerous imps with their magic now, they are ready to fight the "+p+"..."),new U.ab("","","")],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaT:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
ga1:function(){return this.I},
gX:function(){return this.ab}}
T.hO.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Perfectly Generic Object",H.a([],[G.a7]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.l)
q.i(0,$.be,$.L)
q.i(0,$.dR,$.l)
q.i(0,$.c1,$.n)
q.i(0,$.e6,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.c]
q.i(0,new R.al("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.H(s,q,null),$.bN)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f6,$.l)
s.i(0,$.ep,$.L)
s.i(0,$.er,$.n)
s.i(0,$.cV,$.l)
s.i(0,$.co,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.al("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.al("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.eF+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.N+"ing in amazement. The factory is saved! ")],H.a([],m),R.eE(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.aw)
n.i(0,new X.H(q,s,null),$.bN)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.b4,$.l)
t.i(0,$.be,$.L)
t.i(0,$.c7,$.n)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.N
t.i(0,new R.ae("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.uN(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.al("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.H(s,t,null),$.bN)},
H:function(a){return this.r},
ai:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.h8("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ib]),H.a([],[M.h9]))
this.J()
this.K()
t=this.Q
if($.$get$os().ag(0,t))H.bb("Duplicate class id for "+this.H(0)+": "+t+" is already registered for "+J.cM($.$get$os().B(0,t))+".")
$.$get$os().i(0,t,this)},
gN:function(a){return this.r}}
E.ot.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Sage's Robe",H.a([$.R,$.Q,$.b7,$.ad,$.af,$.ac],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peer Reviewed Journal",H.a([$.M,$.Q,$.aL,$.ad],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guru Pillow",H.a([$.R,$.Q,$.e9,$.ad],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.hc,$.n)
t.i(0,$.be,$.n)
t.i(0,$.f8,$.l)
t.i(0,$.b4,$.L)
t.i(0,$.cE,$.l)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.o
t.i(0,new R.al("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.N+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
Y.ou.prototype={
ga2:function(){return this.n},
gW:function(){return this.p},
gU:function(){return this.q},
gV:function(){return this.t},
gX:function(){return this.u}}
Y.ov.prototype={}
K.ow.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Uno Reverse Card",H.a([$.mB,$.I,$.av],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("JR Body Pillow",H.a([$.e9,$.b7,$.I],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.it,$.l)
q.i(0,$.cO,$.l)
q.i(0,$.dy,$.l)
q.i(0,$.d4,$.n)
q.i(0,$.c1,$.n)
q.i(0,$.co,$.n)
q.i(0,$.c6,$.L)
q.i(0,$.di,$.n)
q.i(0,$.eo,$.l)
q.i(0,$.iy,$.l)
q.i(0,$.f7,$.l)
q.i(0,$.lT,$.l)
q.i(0,$.hb,$.n)
q.i(0,$.es,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.at
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.a3("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.ab(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hL(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.a3("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.ab(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dz,$.l)
s.i(0,$.c1,$.n)
s.i(0,$.c6,$.l)
s.i(0,$.cD,$.l)
s.i(0,$.cC,$.l)
s.i(0,$.cB,$.n)
s.i(0,$.ix,$.L)
s.i(0,$.cO,$.n)
s.i(0,$.cF,$.l)
s.i(0,$.bQ,$.l)
s.i(0,$.di,$.L)
p=$.N
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aZ
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.a3("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.ab(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.it,$.l)
t.i(0,$.di,$.l)
t.i(0,$.c6,$.l)
t.i(0,$.cF,$.n)
t.i(0,$.cC,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.a3("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
gU:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
ga1:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G}}
Y.ox.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Walking Stick",H.a([$.a9,$.Q,$.dj],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Adorable Girlscout Beret",H.a([$.R,$.Q,$.wo,$.ad,$.ac],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Map",H.a([$.M,$.Q,$.ad],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.Q,$.ad,$.af],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.dg,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.be,$.l)
t.i(0,$.bQ,$.L)
t.i(0,$.b4,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.al("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.N+"s in time to stop them.   ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.oy.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Scroll",H.a([$.M,$.Q,$.ad],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ink Pot",H.a([$.b_,$.Q,$.az,$.ad],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blank Book",H.a([$.M,$.Q,$.aL,$.ad,$.az,$.ac],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.lO,$.l)
t.i(0,$.be,$.l)
t.i(0,$.cE,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cd,$.n)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.al("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
S.oB.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cueball",H.a([$.et,$.jo,$.Q,$.ao,$.aA,$.ac],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crystal Ball",H.a([$.et,$.wl,$.Q,$.b0],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Binoculars",H.a([$.b_,$.Q,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blindfold",H.a([$.wh,$.Q,$.b7],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.w2,$.l)
t.i(0,$.iw,$.l)
t.i(0,$.lP,$.l)
t.i(0,$.cF,$.n)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.c]
t.i(0,new R.al("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.al("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.at
t.i(0,new R.al("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.oH.prototype={}
T.c4.prototype={}
Y.oJ.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Meddler's Guide",H.a([$.aL,$.Q,$.M,$.bq,$.ac,$.b1],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b_,$.Q,$.b1],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.Q
r=A.j("Cloud in a Bottle",H.a([r,r,$.bu],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.af,$.Q,$.b0,$.aI,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.be,$.n)
t.i(0,$.dg,$.l)
t.i(0,$.cF,$.n)
t.i(0,$.b4,$.n)
t.i(0,$.c7,$.l)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.al("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
O.oK.prototype={}
N.oL.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Fiduspawn Plush",H.a([$.cf,$.R,$.b7],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Teddy Bear",H.a([$.cf,$.R,$.b7],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dice",H.a([$.tV,$.aS],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pigeon",H.a([$.bz,$.aA,$.bf,$.b9,$.bp,$.u3],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cat Ears",H.a([$.R,$.b7,$.cf],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Religious Text",H.a([$.aL,$.M],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Psychology Book",H.a([$.aL,$.M],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Therapy Couch",H.a([$.b7,$.R],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("FLARP Manual",H.a([$.aL,$.M,$.ad],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.L)
q.i(0,$.b4,$.n)
q.i(0,$.cd,$.l)
q.i(0,$.cE,$.n)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.c]
q.i(0,new R.ae("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aZ+" or "+$.at+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.N+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dh,$.L)
s.i(0,$.b4,$.l)
s.i(0,$.cd,$.l)
s.i(0,$.tz,$.l)
s.i(0,$.cD,$.l)
s.i(0,$.tF,$.l)
s.i(0,$.cE,$.n)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.N
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aZ
s.i(0,new R.ae("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cV,$.L)
t.i(0,$.dP,$.l)
t.i(0,$.c7,$.l)
t.i(0,$.dQ,$.l)
t.i(0,$.ha,$.l)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.ae("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.N+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,t,null),$.aQ)}}
M.bB.prototype={}
N.oN.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Frog Statue",H.a([$.aJ,$.aD,$.I],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.R,$.I],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.c_,$.ad,$.ag,$.I],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.E,$.b_,$.ad,$.I],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Green Sun Poster",H.a([$.M,$.I,$.mE,$.ac],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.N+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
p=$.o
t=t+p+" that they must negotiate with "
o=$.z
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.o
p="The "+o+" meets with "
t=$.z
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cF,$.L)
t.i(0,$.tB,$.l)
s=[U.c]
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.a3("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.N+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
this.f.i(0,new X.H(o,t,null),$.H2)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
U.au.prototype={
gN:function(a){return this.d+"kind"},
$isbv:1,
$asbv:function(){return[A.a8]}}
K.cI.prototype={
gN:function(a){return this.a}}
M.oS.prototype={
b2:function(a){return"application/octet-stream"},
T:function(a6,a7){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$T=P.bo(function(a8,a9){if(a8===1)return P.bl(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.df(null,0)
q.a=J.e2(a7,0)
for(p=0,o="";p<6;++p)o+=H.hK(q.ao(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.m("Invalid header: "+n)
m=q.ao(8)
l=9+m*6
o=8*m
k=q.ao(o)
j=q.ao(o)
i=q.ao(o)
h=q.ao(o)
g=q.ao(o)
f=q.ao(o)
o=P.F
e=P.C
d=P.cH(o,e)
c=new O.cX(k,j,null,null,null,null,null,null,d,P.cH(e,o))
c.x=new Uint8Array(H.cA(k*j))
b=q.ao(8)
for(o=[o],p=0;p<b;++p){a=q.ao(8)
a0=q.ao(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ao(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.pi(a1,0,null))}a4=q.ao(8)
a5=$.$get$xb().B(0,a4)
if(a5==null)throw H.m("Sprite decoding error: Encoding id "+a4+" not supported.")
c.ic(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hX()
r=c
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$asdv:function(){return[O.cX]},
$asc8:function(){return[O.cX,P.bh]}}
U.oT.prototype={}
A.nt.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Puzzle Box",H.a([$.a9,$.I,$.af],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.ag,$.I,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.E,$.I],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.E,$.I,$.ag,$.ad],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Janus Bust",H.a([$.aJ,$.hm,$.aD,$.ar,$.I,$.ac,$.ag],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.A},
ga8:function(){return this.C},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.oO.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Frog Statue",H.a([$.aJ,$.aD,$.I],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.R,$.I],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.c_,$.ad,$.ag,$.I],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.E,$.b_,$.ad,$.I],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Green Sun Poster",H.a([$.M,$.I,$.mE,$.ac],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.t},
gW:function(){return this.u},
gZ:function(){return this.A},
gV:function(){return this.C},
gU:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
A.o6.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Curtain",H.a([$.R,$.I,$.av],s),null,!1,"Show Ender")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.E,$.eu,$.aY,$.I,$.aH,$.b3,$.av,$.bp,$.aM],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.E,$.aR,$.ag,$.I,$.av],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aJ,$.E,$.aR,$.bq,$.c3,$.I,$.av],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.aF,$.bq,$.ar,$.I,$.ac,$.av],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nightmare Fuel",H.a([$.a9,$.I,$.b3,$.aG,$.br,$.av],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
ga8:function(){return this.C},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
gX:function(){return this.G},
ga1:function(){return this.I}}
A.oM.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Doll",H.a([$.jo,$.aI,$.aA,$.I],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.a9,$.aA,$.I,$.ac,$.b3],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.mI,$.I],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.M,$.I,$.aN],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shades",H.a([$.ax,$.b_,$.I],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
ga8:function(){return this.C},
ga7:function(){return this.D},
gZ:function(){return this.E},
gV:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.pE.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Grandfather Clock",H.a([$.a9,$.ar,$.bc,$.I],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.u0,$.I,$.ak],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aJ,$.bf,$.I,$.b9,$.b3,$.aM],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.E,$.I,$.ak,$.ar],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.E,$.I,$.ak,$.ac,$.ax],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Metronome",H.a([$.E,$.I,$.ak],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaT:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga1:function(){return this.F},
ga8:function(){return this.G},
ga7:function(){return this.I},
gX:function(){return this.ab}}
A.oi.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("FAQ",H.a([$.ag,$.I,$.ad,$.bF],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aS,$.I,$.b0,$.ag,$.bF],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.I,$.b0,$.bF,$.ac,$.mD],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.tZ,$.I,$.ao],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.u6,$.I],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.b5,$.I,$.b0,$.bF],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("8-Ball",H.a([$.b_,$.I,$.aA],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("A Stone",H.a([$.I,$.aW,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
ga1:function(){return this.G},
gX:function(){return this.I}}
A.m9.prototype={
J:function(){var t,s
t=Q.A(null,null,A.a8)
s=A.j("Infinity Gauntlet",H.a([$.I,$.E,$.mA],[G.a7]),"...",!1,"THANOS CAR THANOS CAR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.O(t,0)]))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cd,$.n)
t.i(0,$.bQ,$.L)
t.i(0,$.cO,$.L)
r=$.o
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.z+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.a3("Collect The Stones",!1,[new U.c(q),new U.c(p),new U.c(o),new U.ab(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga8:function(){return this.E},
ga7:function(){return this.F},
gX:function(){return this.G},
ga1:function(){return this.I}}
R.pl.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Meddler's Guide",H.a([$.aL,$.Q,$.M,$.bq,$.ac,$.b1],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b_,$.Q,$.b1],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.Q
r=A.j("Cloud in a Bottle",H.a([r,r,$.bu],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.af,$.Q,$.b0,$.aI,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cd,$.l)
t.i(0,$.b4,$.l)
t.i(0,$.dg,$.n)
t.i(0,$.f8,$.n)
t.i(0,$.ty,$.n)
t.i(0,$.e6,$.n)
t.i(0,$.is,$.n)
t.i(0,$.tE,$.n)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.c]
t.i(0,new R.al("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.N+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.uP(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.al("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.N+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.al("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bA("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.al("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aZ+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
L.pn.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Lightning",H.a([$.aR,$.aW,$.I],s),null,!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice",H.a([$.bj,$.wv,$.fg],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Taserface",H.a([$.av,$.aR],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Taser",H.a([$.aR,$.I,$.av],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.em,$.L)
t.i(0,$.bQ,$.l)
t.i(0,$.it,$.n)
t.i(0,$.cO,$.n)
r=$.o
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.z
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.N+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.a3("Rebel Against Your Land",!1,[new U.c(q),new U.c(p),new U.c(n),new U.ab(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.c]),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gW:function(){return this.q},
ga2:function(){return this.u},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
D.pp.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Robot",H.a([$.ag,$.E,$.aA,$.ad],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Circuit Board",H.a([$.ag,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Datastructures for Assholes",H.a([$.ag,$.M],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ag,$.M,$.aM,$.aL],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("3-D Printer",H.a([$.aS,$.ag,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Virus on a USB Stick",H.a([$.wr,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wrench",H.a([$.ub,$.E,$.ao],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Computer",H.a([$.ag,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.iA,$.n)
q.i(0,$.f4,$.l)
q.i(0,$.f6,$.l)
q.i(0,$.co,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aZ
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.at
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.G_
p=[U.c]
q.i(0,new R.ae("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.y(),!1,!1,new Y.cZ("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.o
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.N
q.i(0,new R.ae("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.at+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fq(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.f6,$.l)
s.i(0,$.ep,$.L)
s.i(0,$.er,$.n)
s.i(0,$.cV,$.l)
s.i(0,$.co,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.ae("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.N+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.N
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.at
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.ae("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.eb(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.iA,$.L)
t.i(0,$.f4,$.l)
t.i(0,$.f6,$.l)
t.i(0,$.co,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aZ
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.ae("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aQ)}}
V.pr.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Lighter",H.a([$.E,$.aG],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Siberia Poster",H.a([$.M,$.bj],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Winter Poster",H.a([$.M,$.bj,$.c_],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Doomsday Device",H.a([$.E,$.aM,$.c_,$.aW,$.bp],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juggalo Poster",H.a([$.M,$.ww],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Watch",H.a([$.E,$.bc,$.aW],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Magnificent Crown",H.a([$.E,$.bc,$.aW],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bitching Clothes",H.a([$.R,$.ff,$.aW],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ceramic Pork Hollow",H.a([$.bR,$.bc],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shit Ton of Guns",H.a([$.E,$.u4,$.b2,$.aW],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sniper Rifle",H.a([$.E,$.u8,$.b2,$.aW],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("AK-47",H.a([$.E,$.u1,$.b2,$.aW],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("IED",H.a([$.mF,$.aH,$.E,$.br,$.aW],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Idiots Guide To Being An Asshole",H.a([$.M,$.bq,$.aL],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.c3,$.E,$.aR,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Matches",H.a([$.a9,$.aG],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.n)
q.i(0,$.dP,$.l)
q.i(0,$.e7,$.l)
q.i(0,$.f7,$.l)
q.i(0,$.lS,$.l)
q.i(0,$.dQ,$.n)
p=$.o
o=[U.c]
q.i(0,new R.ae("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.n)
s.i(0,$.dP,$.l)
s.i(0,$.cz,$.l)
s.i(0,$.dQ,$.n)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.ae("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.at+" underling. Tremble at the fearsome "+$.aZ+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.l)
q.i(0,$.be,$.L)
q.i(0,$.dR,$.l)
q.i(0,$.c1,$.n)
q.i(0,$.e6,$.L)
q.i(0,$.cO,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.ae("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.N+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c6,$.l)
t.i(0,$.cO,$.L)
t.i(0,$.eo,$.l)
t.i(0,$.iy,$.l)
t.i(0,$.co,$.n)
t.i(0,$.es,$.n)
s=$.o
r="The "+s+" finds a crowd of "
n=$.N
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aZ+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.ae("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.H(q,t,null),$.aQ)}}
X.H.prototype={
H:function(a){return"Theme: "+H.D(this.a)}}
U.py.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Lockpick",H.a([$.E,$.Q,$.az,$.aY,$.ac],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sneaking Suit",H.a([$.R,$.Q,$.az],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Dagger",H.a([$.E,$.Q,$.aY,$.aH,$.tU],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.c6,$.l)
t.i(0,$.dy,$.n)
t.i(0,$.bQ,$.n)
t.i(0,$.cV,$.n)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.N+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.al("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aZ+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.N+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.al("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.at
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.N
l=n+l+"worth, the disaffected Heir to the "+$.aZ+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.al("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
N.pz.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Grandfather Clock",H.a([$.a9,$.ar,$.bc,$.I],s),null,!1,"Ticking Tower of Time")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.u0,$.I,$.ak],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aJ,$.bf,$.I,$.b9,$.b3,$.aM],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.E,$.I,$.ak,$.ar],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.E,$.I,$.ak,$.ac,$.ax],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Metronome",H.a([$.E,$.I,$.ak],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.w4,$.aw)
q.i(0,$.co,$.n)
q.i(0,$.cV,$.n)
q.i(0,$.er,$.l)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.y2
l=[U.c]
q.i(0,new R.al("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.eD(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.at
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.a3("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.ab("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.H(s,q,null),$.ay)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.hb,$.l)
s.i(0,$.e7,$.L)
s.i(0,$.co,$.l)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.a3("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.ab(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.c7,$.l)
t.i(0,$.b4,$.n)
t.i(0,$.cd,$.l)
t.i(0,$.dg,$.l)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.at
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.a3("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.ab(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hL(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.at
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.a3("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.ab("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eD(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
r="With the defeat of the "+$.z+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aZ
t.i(0,new R.al("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eD(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.a3("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.N+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.ab("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
gaT:function(){return this.w},
ga2:function(){return this.t},
gW:function(){return this.u},
gU:function(){return this.C},
gZ:function(){return this.D},
gV:function(){return this.E},
ga1:function(){return this.F},
ga8:function(){return this.G},
ga7:function(){return this.I},
gX:function(){return this.ab}}
G.a7.prototype={
H:function(a){var t=this.b
if(t.length!==0)return C.b.gat(t)
return"NULL TRAIT"},
geo:function(){return this.a},
ge9:function(){return this.b},
gbK:function(){return this.c}}
G.aX.prototype={}
G.as.prototype={}
G.bI.prototype={}
G.e.prototype={
ghU:function(){return this.e.length},
gbK:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bX)(t),++q)r+=t[q].c
return r},
aJ:function(a,b){return C.a.bf(b.ghU()-this.e.length)},
ez:function(a){return C.b.hn(this.e,a.gh9(a))},
$isbv:1,
$asbv:function(){return[G.e]},
gN:function(a){return this.d},
geU:function(){return this.e}}
G.mL.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.a7]}}}
Q.pX.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cardboard Box",H.a([$.M,$.I,$.az],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hole Punch",H.a([$.E,$.I,$.az],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Smoke Bombs",H.a([$.br,$.I,$.az,$.mF],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tribal Mask",H.a([$.b9,$.I,$.az,$.b3,$.bT],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Opera Mask",H.a([$.aS,$.I,$.az,$.ar],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Black Hole in a Bottle.",H.a([$.I,$.ac,$.mE,$.az,$.b_],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y2=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.l)
q.i(0,$.lR,$.l)
q.i(0,$.hd,$.l)
q.i(0,$.iw,$.l)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.y2
l=[U.c]
q.i(0,new R.al("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.a3("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.ab(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.H(s,q,null),$.ay)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dh,$.n)
s.i(0,$.lR,$.n)
s.i(0,$.hd,$.n)
s.i(0,$.c6,$.l)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.at
s.i(0,new R.al("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fq(),!1,!1,new Y.c2("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
s.i(0,new R.a3("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.N+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.ab("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.H(q,s,null),$.ay)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.dh,$.l)
t.i(0,$.lR,$.l)
t.i(0,$.hd,$.l)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.a3("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.ab(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.H(s,t,null),$.ay)},
ga6:function(){return this.m},
ga5:function(){return this.n},
ga4:function(){return this.p},
ga2:function(){return this.q},
gW:function(){return this.t},
gU:function(){return this.A},
gZ:function(){return this.C},
gV:function(){return this.D},
ga1:function(){return this.E},
ga8:function(){return this.F},
ga7:function(){return this.G},
gX:function(){return this.I}}
E.pY.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Yardstick",H.a([$.dj,$.Q,$.jn,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Hacking Guide",H.a([$.aL,$.Q,$.hp,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of JR",H.a([$.R,$.Q,$.e9,$.mG,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nanobots",H.a([$.u9,$.Q,$.mz],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.cF,$.l)
t.i(0,$.di,$.l)
t.i(0,$.en,$.l)
t.i(0,$.dg,$.l)
t.i(0,$.f5,$.l)
t.i(0,$.em,$.l)
t.i(0,$.hd,$.n)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.c]
t.i(0,new R.ae("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.uP(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.ch+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.N
t.i(0,new R.a3("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.ab(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.x6(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.ae("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dT("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.a3("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
t.i(0,new R.a3("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.a5("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.al("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.x7(),!1,!1,new Y.c2("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.al("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.H(s,t,null),$.ay)}}
M.q1.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Cauldron",H.a([$.wz,$.Q,$.af],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flying Broom",H.a([$.jl,$.dj,$.Q,$.a9,$.af],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Warped Mirror",H.a([$.mI,$.Q,$.af,$.az,$.ac],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,[N.ah,P.a4])
t.i(0,$.c1,$.n)
t.i(0,$.hf,$.n)
t.i(0,$.d4,$.n)
t.i(0,$.cV,$.n)
t.i(0,$.cC,$.n)
t.i(0,$.tB,$.n)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bU(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aZ
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.al("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.u+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aZ
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.al("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aZ
t.i(0,new R.al("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.at+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.N+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.aq("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.H(s,t,null),$.bN)}}
U.q2.prototype={
T:function(a5,a6){var t=0,s=P.bi(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$T=P.bo(function(a7,a8){if(a7===1)return P.bl(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.e3(a6,$.$get$xy())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.yH(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.m("Invalid WordList file header: '"+H.D(p[0])+"'")}o=P.C
n=H.a([],[o])
m=P.cH(o,B.jZ)
q.a=null
l=P.cH(o,o)
for(k=P.a4,j=B.dF,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cL()
""+i
H.D(g)
f.toString
f=J.e3(g,$.$get$xw())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.bd(g)
if(f.gac(g)===!0){$.$get$cL().toString
continue}if(f.au(g,$.$get$xx())){$.$get$cL().toString
continue}if(C.c.au(g,"@")){e=C.c.aa(g,1)
$.$get$cL().toString
n.push(e)}else if(C.c.au(g,"?")){f=C.c.aa(g,1)
f=$.$get$hP().b9(0,f)
f=H.dA(f,B.ko(),H.aU(f,"p",0),null)
d=P.dk(f,!0,H.aU(f,"p",0))
if(d.length<2)$.$get$cL().bn(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cL()
H.D(c)
H.D(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$xz()
a=f.cv(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.cm(f[1])
a1=C.c.aa(g,a0)
if(a1.length===0)continue
f=J.aK(a0)
if(f.a_(a0,0)){a1=C.c.eA(a1)
$.$get$cL().toString
f=P.cH(o,o)
a2=new B.jZ(P.cH(o,k),f,a1,!1,null,null)
a2.dn(null,null,j)
q.a=a2
f.c0(0,l)
m.i(0,a1,q.a)}else if(f.a_(a0,$.xA))if(C.c.au(a1,"?")){a1=C.c.aa(a1,1)
f=$.$get$hP().b9(0,a1)
f=H.dA(f,B.ko(),H.aU(f,"p",0),null)
d=P.dk(f,!0,H.aU(f,"p",0))
f=$.$get$cL()
f.toString
if(d.length<2)f.bn(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ks(d[0],$.$get$fv(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.ks(d[1],$.$get$fv(),"")
f=$.$get$cL()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.au(a1,"@")){e=C.c.aa(a1,1)
$.$get$cL().toString
f=$.$get$hP().b9(0,a1)
f=H.dA(f,B.ko(),H.aU(f,"p",0),null)
d=P.dk(f,!0,H.aU(f,"p",0))
a4=d.length>1?H.x3(d[1],new U.q3(q,d)):1
q.a.c.i(0,C.c.d6(e,$.$get$fv(),""),a4)}else{$.$get$cL().toString
f=$.$get$hP().b9(0,g)
f=H.dA(f,B.ko(),H.aU(f,"p",0),null)
d=P.dk(f,!0,H.aU(f,"p",0))
a4=d.length>1?H.x3(d[1],new U.q4(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bv(J.ks(d[0],$.$get$fv(),""))
h=new B.dF(null)
a3=P.cH(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.vB(a4)),[H.aU(f,"cU",0)]))}else if(f.a_(a0,$.xA*2)){$.$get$cL().toString
f=$.$get$hP().b9(0,g)
f=H.dA(f,B.ko(),H.aU(f,"p",0),null)
d=P.dk(f,!0,H.aU(f,"p",0))
f=d.length
if(f!==2)$.$get$cL().bn(C.h,"Invalid variant for "+H.D(h.dc(0))+" in "+q.a.e)
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bv(J.ks(d[0],$.$get$fv(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a3=C.c.d6(U.H5(d[1]),$.$get$fv(),"")
h.a.i(0,f,a3)}}}}}r=new B.hV(n,m)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$aseK:function(){return[B.hV]},
$asc8:function(){return[B.hV,P.C]}}
U.q3.prototype={
$1:function(a){var t,s,r
t=$.$get$cL()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.D(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.bn(C.m,r+H.D(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
U.q4.prototype={
$1:function(a){var t,s,r
t=$.$get$cL()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.D(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.bn(C.m,r+H.D(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.C]}}}
F.cc.prototype={
bQ:function(){var t=0,s=P.bi(),r=this,q
var $async$bQ=P.bo(function(a,b){if(a===1)return P.bl(b,s)
while(true)switch(t){case 0:q="WranglerNewsposts/"+r.c+".txt"
t=2
return P.cl(W.tM(C.c.aB("../",N.nY())+q,null,null).b5(new F.q6(r)),$async$bQ)
case 2:return P.bm(null,s)}})
return P.bn($async$bQ,s)},
d5:function(a){var t=0,s=P.bi(),r=this,q,p,o,n
var $async$d5=P.bo(function(b,c){if(b===1)return P.bl(c,s)
while(true)switch(t){case 0:q=document.createElement("div")
q.classList.add("Headshot")
p=W.mr(null,r.a,null)
p.classList.add("MemoNewspostIcon")
o=W.vC(null)
n=r.c
o.textContent=n
o.href="bio.html?staff="+n
o.target="_blank"
o.appendChild(p)
q.appendChild(o)
a.appendChild(q)
return P.bm(null,s)}})
return P.bn($async$d5,s)}}
F.q6.prototype={
$1:function(a){var t,s,r,q,p
t=J.e3(a,"\n")
for(s=t.length,r=this.a,q=r.d,p=0;p<t.length;t.length===s||(0,H.bX)(t),++p)q.push(K.FN(t[p],r))},
$S:function(){return{func:1,args:[P.C]}}}
F.q7.prototype={
J:function(){var t,s,r,q
t=Q.A(null,null,A.a8)
s=[G.a7]
r=A.j("Make a World Book",H.a([$.M,$.ar,$.aL],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.O(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Quill Pen",H.a([$.b7,$.R,$.mJ],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Book On Writing",H.a([$.aL,$.M,$.ad],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("FLARP Manual",H.a([$.aL,$.M,$.ad],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Script",H.a([$.aL,$.M],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Pen",H.a([$.E,$.ad,$.mJ,$.ar],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Spiral Bound Notebook",H.a([$.aL,$.M,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Half Written Novel",H.a([$.aL,$.M],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.ah,P.a4]
q=new H.q(0,null,null,null,null,null,0,r)
q.i(0,$.dh,$.l)
q.i(0,$.cE,$.l)
q.i(0,$.be,$.n)
q.i(0,$.b4,$.n)
q.i(0,$.hc,$.n)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.ae("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bE("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.H(s,q,null),$.aQ)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.q(0,null,null,null,null,null,0,r)
s.i(0,$.dQ,$.n)
s.i(0,$.cB,$.n)
s.i(0,$.cz,$.n)
s.i(0,$.be,$.n)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.ae("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.N+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(q,s,null),$.aQ)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.q(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.n)
t.i(0,$.dP,$.l)
t.i(0,$.cz,$.l)
t.i(0,$.dQ,$.n)
t.i(0,$.en,$.l)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.ae("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.d2("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.H(s,t,null),$.aQ)}}
B.qc.prototype={
b2:function(a){return"application/x-tar"},
T:function(a,b){var t=0,s=P.bi(),r,q,p
var $async$T=P.bo(function(c,d){if(c===1)return P.bl(d,s)
while(true)switch(t){case 0:q=$.$get$xB()
p=J.vs(b)
q.toString
r=q.hf(T.tN(p,0,null,0),!1)
t=1
break
case 1:return P.bm(r,s)}})
return P.bn($async$T,s)},
$asdv:function(){return[T.fK]},
$asc8:function(){return[T.fK,P.bh]}}
A.fS.prototype={}
B.dw.prototype={
cM:function(a){if(a)this.b=(this.b|C.a.aF(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.R+=H.hK(this.b)
this.b=0}},
aw:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.aF(1,t)
if(typeof a!=="number")return a.aW()
this.cM((a&s)>>>0>0)}},
h1:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.aE(1,t-s)
if(typeof a!=="number")return a.aW()
this.cM((a&r)>>>0>0)}},
c1:function(a){var t,s
a=J.e1(a,1)
t=C.d.bw(Math.log(H.ki(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cM(!1)
this.h1(a,t+1)},
bg:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.R
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.am(r)
q+=r
p=r}else p=0
r=H.cA(q)
o=new Uint8Array(r)
if(t){n=H.cR(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.R
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.am(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.df.prototype={
cE:function(a){var t,s,r,q
t=C.f.ay(a/8)
s=C.a.bP(a,8)
r=this.a.getUint8(t)
q=C.a.aE(1,s)
if(typeof r!=="number")return r.aW()
return(r&q)>>>0>0},
ao:function(a){var t,s,r
if(a>32)throw H.m(P.e4(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cE(this.b);++this.b
if(r)t=(t|C.a.aF(1,s))>>>0}return t},
hW:function(a){var t,s,r,q
if(a>32)throw H.m(P.e4(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cE(this.b);++this.b
if(q)s=(s|C.a.aE(1,t-r))>>>0}return s},
cd:function(){var t,s,r
for(t=0;!0;){s=this.cE(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hW(t+1)-1}}
A.dN.prototype={
H:function(a){return"rgb("+H.D(this.b)+", "+H.D(this.c)+", "+H.D(this.d)+", "+H.D(this.a)+")"},
ey:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aE()
s=this.c
if(typeof s!=="number")return s.aE()
r=this.d
if(typeof r!=="number")return r.aE()
q=this.a
if(typeof q!=="number")return H.am(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aE()
s=this.c
if(typeof s!=="number")return s.aE()
r=this.d
if(typeof r!=="number")return H.am(r)
return(t<<16|s<<8|r)>>>0},
i7:function(a,b){var t=C.a.bu(this.ey(!1),16)
return"#"+C.c.cX(t,6,"0").toUpperCase()},
i6:function(){return this.i7(!1,!1)},
a_:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dN){t=this.b
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
gan:function(a){return this.ey(!0)},
a3:function(a,b){var t,s,r,q,p,o,n,m
t=J.aK(b)
if(!!t.$isdN){t=this.b
s=b.b
if(typeof t!=="number")return t.a3()
if(typeof s!=="number")return H.am(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.a3()
if(typeof q!=="number")return H.am(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.a3()
if(typeof o!=="number")return H.am(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.a3()
if(typeof m!=="number")return H.am(m)
return A.ei(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aL()
s=this.c
if(typeof s!=="number")return s.aL()
r=this.d
if(typeof r!=="number")return r.aL()
q=this.a
if(typeof q!=="number")return q.aL()
return A.tl(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.a3()
s=this.c
if(typeof s!=="number")return s.a3()
r=this.d
if(typeof r!=="number")return r.a3()
return A.ei(t+b,s+b,r+b,this.a)}throw H.m("Cannot add ["+H.D(t.gar(b))+" "+H.D(b)+"] to a Colour. Only Colour, double and int are valid.")},
a9:function(a,b){var t,s,r,q,p
t=J.aK(b)
if(!!t.$isdN){s=this.b
r=b.giz()
if(typeof s!=="number")return s.a9()
r=C.d.a9(s,r)
s=this.c
q=b.gih()
if(typeof s!=="number")return s.a9()
q=C.d.a9(s,q)
s=this.d
p=b.gim()
if(typeof s!=="number")return s.a9()
p=C.d.a9(s,p)
s=this.a
t=t.gil(b)
if(typeof s!=="number")return s.a9()
return A.ei(r,q,p,C.d.a9(s,t))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aL()
s=this.c
if(typeof s!=="number")return s.aL()
r=this.d
if(typeof r!=="number")return r.aL()
q=this.a
if(typeof q!=="number")return q.aL()
return A.tl(t/255-b,s/255-b,r/255-b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.a9()
s=this.c
if(typeof s!=="number")return s.a9()
r=this.d
if(typeof r!=="number")return r.a9()
return A.ei(t-b,s-b,r-b,this.a)}throw H.m("Cannot subtract ["+H.D(t.gar(b))+" "+H.D(b)+"] from a Colour. Only Colour, double and int are valid.")},
aB:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aL()
s=this.c
if(typeof s!=="number")return s.aL()
r=this.d
if(typeof r!=="number")return r.aL()
q=this.a
if(typeof q!=="number")return q.aL()
return A.tl(t/255*b,s/255*b,r/255*b,q/255)},
B:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.m("Colour index out of range: "+H.D(b))},
i:function(a,b,c){var t,s
t=J.db(b)
if(t.al(b,0)||t.aQ(b,3))throw H.m("Colour index out of range: "+H.D(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.a_(b,0)){this.b=C.a.as(c,0,255)
this.e=!0
this.y=!0}else if(t.a_(b,1)){this.c=C.a.as(c,0,255)
this.e=!0
this.y=!0}else if(t.a_(b,2)){this.d=C.a.as(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.as(c,0,255)
else if(t.a_(b,0)){this.b=C.a.as(J.kr(J.vr(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.a_(b,1)){this.c=C.a.as(J.kr(J.vr(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kk(c)
if(t.a_(b,2)){this.d=C.a.as(J.kr(s.aB(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.as(J.kr(s.aB(c,255)),0,255)}},
f_:function(a,b,c,d){this.b=C.d.as(C.d.as(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.as(C.d.as(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.as(C.d.as(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.as(J.ym(d,0,255),0,255)}}
A.rJ.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
A.nb.prototype={
$1:function(a){return this.a.er(a)},
$S:function(){return{func:1,args:[,]}}}
A.n9.prototype={
$1:function(a){this.a.T(0,a).b5(this.b.ghT())},
$S:function(){return{func:1,args:[,]}}}
A.na.prototype={
$1:function(a){this.a.h8(0)},
$S:function(){return{func:1,args:[P.r]}}}
A.nc.prototype={
$1:function(a){return this.a.aO(0,this.b)},
$S:function(){return{func:1,args:[W.a6]}}}
F.hx.prototype={
H:function(a){return this.b}}
F.hy.prototype={
bn:function(a,b){F.FM(a).$1("("+this.c+")["+H.D(C.b.gbm(a.b.split(".")))+"]: "+H.D(b))},
cR:function(a,b){this.bn(C.h,b)},
gN:function(a){return this.c}}
F.uo.prototype={}
O.t4.prototype={
$1:function(a){return H.D(a.bo(1))+" = "+H.D(a.bo(2))+C.c.aB("../",this.a)},
$S:function(){return{func:1,args:[P.dB]}}}
O.t5.prototype={
$0:function(){var t=document
J.vx(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.o,null)
t=H.kn(t.querySelector("#voidButton"),"$isfU")
t.toString
W.eS(t,"click",new O.t3(),!1,W.IC)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.Io("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.t3.prototype={
$1:function(a){return O.It()},
$S:function(){return{func:1,args:[W.a6]}}}
R.hg.prototype={}
R.uG.prototype={}
R.uF.prototype={}
A.nT.prototype={
B:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.ag(0,b)?t.B(0,b):$.$get$uE()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.ag(0,b)?t.B(0,b):$.$get$uE()}throw H.m(P.e4(b,"'name' should be a String name or int id only",null))},
gaf:function(a){var t=this.a
t=t.gci(t)
return new H.jv(null,J.dd(t.a),t.b,[H.O(t,0),H.O(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.ag(0,b))this.az(0,b)
s=this.fL()
if(typeof s!=="number")return s.aH()
if(s>=256)throw H.m(P.e4(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
az:function(a,b){var t,s,r
t=this.a
if(!t.ag(0,b))return
s=this.c
r=s.B(0,b)
t.az(0,b)
this.b.az(0,r)
s.az(0,b)
this.d.az(0,r)},
fL:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.ag(0,s))return s;++s}}}
A.jD.prototype={
$asp:function(){return[A.dN]},
$isp:1}
Q.jF.prototype={}
A.hM.prototype={
bJ:function(a){if(a===0)return 0
return this.fM(a)},
hL:function(){return this.bJ(4294967295)},
fM:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cb()
this.b=C.d.bf(s*4294967295)
return C.d.ay(s*a)}else{s=t.bJ(a)
this.b=s
return s}},
cl:function(a){var t=a==null
this.a=t?C.K:P.Hi(a)
if(!t)this.b=J.e1(a,1)},
hR:function(a,b){var t=a.length
if(t===0)return
t=this.bJ(t)
if(t<0||t>=a.length)return H.w(a,t)
return a[t]},
hQ:function(a){return this.hR(a,!0)}}
Y.dS.prototype={
cK:function(a){var t,s
if(this.b!=null)throw H.m("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bk(0,$.aE,null,t)
this.c.push(new P.e_(s,t))
return s},
er:function(a){var t,s,r
if(this.b!=null)throw H.m("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bX)(t),++r)t[r].aO(0,this.b)
C.b.sv(t,0)}}
V.ls.prototype={
$4:function(a,b,c,d){return V.A9(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.F,P.bh,P.bh,O.cX]}}}
V.lr.prototype={
$4:function(a,b,c,d){return V.A8(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.F,P.F,O.cX]}}}
V.lq.prototype={
$4:function(a,b,c,d){return V.A5(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.F,P.bh,P.bh,O.cX]}}}
V.lp.prototype={
$4:function(a,b,c,d){return V.A4(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bh,P.F,P.F,O.cX]}}}
O.cX.prototype={
hX:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
ic:function(a,b,c,d){var t,s,r,q,p
t=J.bK(d)
s=0
while(!0){r=t.gel(d)
if(typeof r!=="number")return H.am(r)
if(!(s<r))break
q=(C.a.bw(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.B(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.oW.prototype={
$1:function(a){return a.ghS()},
$S:function(){return{func:1,args:[D.cJ]}}}
D.cJ.prototype={
H:function(a){return this.a},
gN:function(a){return this.a},
ghS:function(){return this.d}}
D.k_.prototype={}
D.ok.prototype={}
B.dF.prototype={
eF:function(a,b){if(this.a.ag(0,"MAIN"))return this.a.B(0,"MAIN")
return},
dc:function(a){return this.eF(a,null)},
H:function(a){return"[Word: "+H.D(this.dc(0))+"]"}}
B.jZ.prototype={
H:function(a){return"WordList '"+this.e+"': "+this.eX(0)},
$isr:1,
$asr:function(){return[B.dF]},
$asdZ:function(){return[B.dF]},
$ashT:function(){return[B.dF]},
$ascU:function(){return[B.dF]},
$asp:function(){return[B.dF]},
$asv:function(){return[B.dF]},
gN:function(a){return this.e}}
B.hV.prototype={
H:function(a){return"[WordListFile: "+this.b.H(0)+" ]"}}
S.fp.prototype={}
S.v5.prototype={}
S.v6.prototype={}
S.v7.prototype={}
S.tu.prototype={}
S.tx.prototype={}
S.tk.prototype={}
S.uQ.prototype={}
S.v9.prototype={}
S.va.prototype={}
S.kR.prototype={}
S.uH.prototype={}
S.uD.prototype={}
S.n2.prototype={}
S.tp.prototype={}
S.te.prototype={}
S.l9.prototype={}
S.up.prototype={}
S.la.prototype={}
S.nV.prototype={}
S.uX.prototype={}
S.uU.prototype={}
S.uY.prototype={}
S.td.prototype={}
S.ma.prototype={}
S.kP.prototype={}
S.tj.prototype={}
S.ti.prototype={}
S.uI.prototype={}
S.uZ.prototype={}
S.uJ.prototype={}
S.tw.prototype={}
S.tv.prototype={}
S.uW.prototype={}
S.uV.prototype={}
S.px.prototype={}
S.v0.prototype={}
S.tm.prototype={}
S.tn.prototype={}
S.v8.prototype={}
S.hA.prototype={}
S.uv.prototype={}
S.uw.prototype={}
S.ux.prototype={}
S.uy.prototype={}
S.uR.prototype={}
S.uS.prototype={}
S.uT.prototype={}
S.uu.prototype={}
S.uA.prototype={}
S.uB.prototype={}
S.tJ.prototype={}
S.tK.prototype={}
S.tL.prototype={}
S.uC.prototype={}
S.uz.prototype={}
S.tg.prototype={}
S.v2.prototype={}
S.v3.prototype={}
S.v1.prototype={}
Z.uj.prototype={}
Z.uf.prototype={}
Z.ug.prototype={}
Q.cU.prototype={
k:function(a,b){return b},
H:function(a){return J.cM(this.gcc())},
aK:function(a,b){return Q.vc(this,b,H.aU(this,"cU",0),null)},
ak:function(a,b){return Q.vb(this,!1,!0,null,H.aU(this,"cU",0))},
aD:function(a){return this.ak(a,!0)},
$isp:1,
$asp:null}
Q.dZ.prototype={
gcc:function(){return this.b},
c_:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.vB(c)),[H.aU(this,"cU",0)]))},
h:function(a,b){return this.c_(a,b,1)},
B:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.vv(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.aU(this,"cU",0)])},
gv:function(a){return this.b.length},
sv:function(a,b){C.b.sv(this.b,b)
return b},
H:function(a){return P.jp(this.b,"[","]")},
aK:function(a,b){return Q.vc(this,b,H.aU(this,"dZ",0),null)},
ak:function(a,b){return Q.vb(this,!1,!0,null,H.aU(this,"dZ",0))},
aD:function(a){return this.ak(a,!0)},
dn:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hT.prototype={$ascU:null,$asp:null,$asr:null,$asv:null,$isr:1,$isv:1,$isp:1}
Q.h.prototype={
H:function(a){return"("+H.D(this.a)+" @ "+H.D(this.b)+")"},
gae:function(a){return this.a},
gd9:function(a){return this.b}}
Q.eQ.prototype={
gcc:function(){return this.b},
gaf:function(a){var t=new Q.q_(null,[H.aU(this,"eQ",0)])
t.a=J.dd(this.b)
return t},
gv:function(a){return J.cm(this.b)},
H:function(a){return J.cM(this.b)},
aK:function(a,b){return Q.vc(this,b,H.aU(this,"eQ",0),null)},
ak:function(a,b){return Q.vb(this,!1,!0,null,H.aU(this,"eQ",0))},
aD:function(a){return this.ak(a,!0)}}
Q.hS.prototype={$ascU:null,$asp:null,$isp:1}
Q.q_.prototype={
gY:function(){return J.vv(this.a.gY())},
L:function(){return this.a.L()}}
Q.jW.prototype={
$aseQ:function(a,b){return[b]},
$ashS:function(a,b){return[b]},
$ascU:function(a,b){return[b]},
$asp:function(a,b){return[b]}}
Q.q0.prototype={
$1:function(a){var t=J.bK(a)
return new Q.h(this.c.$1(t.gae(a)),t.gd9(a),[this.b])},
$S:function(){return H.eV(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jW")}}
J.k.prototype.eV=J.k.prototype.H
J.hs.prototype.eW=J.hs.prototype.H
P.dq.prototype.eY=P.dq.prototype.bS
P.dq.prototype.eZ=P.dq.prototype.bR
P.b6.prototype.dl=P.b6.prototype.ap
Q.dZ.prototype.eX=Q.dZ.prototype.H;(function installTearOffs(){installTearOff(H.fA.prototype,"ghG",0,0,0,null,["$0"],["c9"],1)
installTearOff(H.dH.prototype,"geI",0,0,0,null,["$1"],["aM"],11)
installTearOff(H.eR.prototype,"ghi",0,0,0,null,["$1"],["ba"],11)
installTearOff(H,"xQ",1,0,0,null,["$1"],["HK"],8)
installTearOff(P,"HN",1,0,0,null,["$1"],["H9"],6)
installTearOff(P,"HO",1,0,0,null,["$1"],["Ha"],6)
installTearOff(P,"HP",1,0,0,null,["$1"],["Hb"],6)
installTearOff(P,"y1",1,0,0,null,["$0"],["HJ"],1)
installTearOff(P.k3.prototype,"ge7",0,0,0,null,["$2","$1"],["cO","bB"],12)
installTearOff(P.bk.prototype,"gbp",0,0,0,null,["$2","$1"],["aC","fk"],12)
var t
installTearOff(t=P.dq.prototype,"gdQ",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"gdR",0,0,0,null,["$0"],["bW"],1)
installTearOff(t=P.hZ.prototype,"gdQ",0,0,0,null,["$0"],["bV"],1)
installTearOff(t,"gdR",0,0,0,null,["$0"],["bW"],1)
installTearOff(t,"gfz",0,0,0,null,["$1"],["fA"],function(){return H.eV(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hZ")})
installTearOff(t,"gfD",0,0,0,null,["$2"],["fE"],14)
installTearOff(t,"gfB",0,0,0,null,["$0"],["fC"],1)
installTearOff(P.k9.prototype,"gh9",0,1,0,null,["$1"],["ax"],29)
installTearOff(P,"HX",1,0,0,null,["$2"],["zP"],30)
installTearOff(P,"HY",1,0,0,null,["$1"],["fH"],4)
installTearOff(t=W.id.prototype,"gaG",0,1,0,null,["$1"],["cR"],4)
installTearOff(t,"ghB",0,0,0,null,["$1"],["ei"],4)
installTearOff(t,"gi9",0,0,0,null,["$1"],["ia"],4)
installTearOff(W.ej.prototype,"gae",0,1,0,null,["$1"],["M"],5)
installTearOff(W.ih.prototype,"gae",0,1,0,null,["$1"],["M"],32)
installTearOff(W.im.prototype,"gae",0,1,0,null,["$1"],["M"],5)
installTearOff(W.io.prototype,"gae",0,1,0,null,["$1"],["M"],8)
installTearOff(W.ip.prototype,"gae",0,1,0,null,["$1"],["M"],5)
installTearOff(W.fa.prototype,"gae",0,1,0,null,["$1"],["M"],13)
installTearOff(W.iD.prototype,"gae",0,1,0,null,["$1"],["M"],9)
installTearOff(W.fc.prototype,"gae",0,1,0,null,["$1"],["M"],7)
installTearOff(W.iF.prototype,"gae",0,1,0,null,["$1"],["M"],7)
installTearOff(W.jw.prototype,"gae",0,1,0,null,["$1"],["M"],5)
installTearOff(W.jx.prototype,"gae",0,1,0,null,["$1"],["M"],10)
installTearOff(W.cg.prototype,"gae",0,1,0,null,["$1"],["M"],10)
installTearOff(W.jH.prototype,"gae",0,1,0,null,["$1"],["M"],15)
installTearOff(W.jM.prototype,"gae",0,1,0,null,["$1"],["M"],9)
installTearOff(W.jO.prototype,"gae",0,1,0,null,["$1"],["M"],16)
installTearOff(W.jP.prototype,"gae",0,1,0,null,["$1"],["M"],17)
installTearOff(W.ci.prototype,"gae",0,1,0,null,["$1"],["M"],18)
installTearOff(W.jT.prototype,"gae",0,1,0,null,["$1"],["M"],19)
installTearOff(W.jU.prototype,"gae",0,1,0,null,["$1"],["M"],20)
installTearOff(W.jV.prototype,"gae",0,1,0,null,["$1"],["M"],21)
installTearOff(W.hW.prototype,"gae",0,1,0,null,["$1"],["M"],22)
installTearOff(W.k4.prototype,"gae",0,1,0,null,["$1"],["M"],33)
installTearOff(W.k8.prototype,"gae",0,1,0,null,["$1"],["M"],24)
installTearOff(W.i2.prototype,"gae",0,1,0,null,["$1"],["M"],25)
installTearOff(W.kb.prototype,"gae",0,1,0,null,["$1"],["M"],26)
installTearOff(W.kd.prototype,"gae",0,1,0,null,["$1"],["M"],27)
installTearOff(P.jQ.prototype,"gae",0,1,0,null,["$1"],["M"],28)
installTearOff(T,"wX",1,0,0,null,["$0"],["Ie"],1)
installTearOff(R,"eE",1,0,0,null,["$1"],["Gr"],0)
installTearOff(R,"Gd",1,0,0,null,["$1"],["Go"],0)
installTearOff(R,"x6",1,0,0,null,["$1"],["Ge"],0)
installTearOff(R,"uP",1,0,0,null,["$1"],["Gq"],0)
installTearOff(R,"bU",1,0,0,null,["$1"],["Gp"],0)
installTearOff(R,"uO",1,0,0,null,["$1"],["Gn"],0)
installTearOff(R,"x8",1,0,0,null,["$1"],["Gl"],0)
installTearOff(R,"hL",1,0,0,null,["$1"],["Gk"],0)
installTearOff(R,"eD",1,0,0,null,["$1"],["Gh"],0)
installTearOff(R,"eb",1,0,0,null,["$1"],["Gj"],0)
installTearOff(R,"fq",1,0,0,null,["$1"],["Gm"],0)
installTearOff(R,"uN",1,0,0,null,["$1"],["Gi"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["Gf"],0)
installTearOff(R,"x7",1,0,0,null,["$1"],["Gg"],0)
installTearOff(F.hy.prototype,"gaG",0,1,0,null,["$1"],["cR"],4)
installTearOff(O,"Ig",1,0,0,null,["$1"],["Ii"],31)
installTearOff(Y.dS.prototype,"ghT",0,0,0,null,["$1"],["er"],function(){return H.eV(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dS")})
installTearOff(V,"Im",1,0,0,null,["$4"],["A7"],3)
installTearOff(V,"Il",1,0,0,null,["$4"],["A6"],2)
installTearOff(B,"ko",1,0,0,null,["$1"],["HE"],23)
installTearOff(T,"HT",1,0,0,null,["$4"],["zY"],3)
installTearOff(T,"HS",1,0,0,null,["$4"],["zX"],2)
installTearOff(T,"HR",1,0,0,null,["$4"],["zW"],3)
installTearOff(T,"HQ",1,0,0,null,["$4"],["zV"],2)
installTearOff(F,"I4",1,0,0,null,["$4"],["A3"],3)
installTearOff(F,"I3",1,0,0,null,["$4"],["A2"],2)
installTearOff(F,"I2",1,0,0,null,["$4"],["A1"],3)
installTearOff(F,"I1",1,0,0,null,["$4"],["A0"],2)
installTearOff(F,"I0",1,0,0,null,["$4"],["A_"],3)
installTearOff(F,"I_",1,0,0,null,["$4"],["zZ"],2)})();(function inheritance(){inherit(P.ap,null)
var t=P.ap
inherit(H.ul,t)
inherit(J.k,t)
inherit(J.i9,t)
inherit(P.hJ,t)
inherit(P.p,t)
inherit(H.ez,t)
inherit(P.jr,t)
inherit(H.iB,t)
inherit(H.pK,t)
inherit(H.f0,t)
inherit(H.r0,t)
inherit(H.fA,t)
inherit(H.qx,t)
inherit(H.eT,t)
inherit(H.r_,t)
inherit(H.qk,t)
inherit(H.fr,t)
inherit(H.pB,t)
inherit(H.dL,t)
inherit(H.dH,t)
inherit(H.eR,t)
inherit(H.kZ,t)
inherit(H.oj,t)
inherit(H.pH,t)
inherit(P.el,t)
inherit(H.h7,t)
inherit(H.kc,t)
inherit(H.dY,t)
inherit(H.q,t)
inherit(H.n3,t)
inherit(H.n5,t)
inherit(H.hr,t)
inherit(H.i1,t)
inherit(H.k1,t)
inherit(H.jS,t)
inherit(H.rj,t)
inherit(P.cG,t)
inherit(P.f1,t)
inherit(P.k3,t)
inherit(P.k7,t)
inherit(P.bk,t)
inherit(P.k2,t)
inherit(P.dp,t)
inherit(P.oY,t)
inherit(P.dq,t)
inherit(P.k5,t)
inherit(P.qs,t)
inherit(P.r3,t)
inherit(P.rh,t)
inherit(P.eX,t)
inherit(P.rw,t)
inherit(P.qR,t)
inherit(P.qT,t)
inherit(P.oE,t)
inherit(P.qY,t)
inherit(P.dG,t)
inherit(P.fi,t)
inherit(P.b6,t)
inherit(P.ro,t)
inherit(P.nk,t)
inherit(P.qZ,t)
inherit(P.fV,t)
inherit(P.fW,t)
inherit(P.rq,t)
inherit(P.da,t)
inherit(P.bv,t)
inherit(P.dO,t)
inherit(P.du,t)
inherit(P.d3,t)
inherit(P.nP,t)
inherit(P.jR,t)
inherit(P.qC,t)
inherit(P.bD,t)
inherit(P.lv,t)
inherit(P.r,t)
inherit(P.bs,t)
inherit(P.d6,t)
inherit(P.dB,t)
inherit(P.dU,t)
inherit(P.C,t)
inherit(P.ca,t)
inherit(P.eO,t)
inherit(P.kf,t)
inherit(P.pL,t)
inherit(P.rf,t)
inherit(W.id,t)
inherit(W.jC,t)
inherit(W.ig,t)
inherit(P.l1,t)
inherit(W.bx,t)
inherit(W.m1,t)
inherit(W.rn,t)
inherit(P.rk,t)
inherit(P.qd,t)
inherit(P.qX,t)
inherit(P.r5,t)
inherit(P.r6,t)
inherit(P.bh,t)
inherit(P.d9,t)
inherit(T.fL,t)
inherit(T.de,t)
inherit(T.hk,t)
inherit(T.nR,t)
inherit(T.q9,t)
inherit(T.qa,t)
inherit(T.qb,t)
inherit(T.q8,t)
inherit(T.mm,t)
inherit(T.iG,t)
inherit(B.hl,t)
inherit(N.ah,t)
inherit(L.fM,t)
inherit(A.jD,t)
inherit(O.c8,t)
inherit(T.hO,t)
inherit(M.fT,t)
inherit(K.kT,t)
inherit(K.fl,t)
inherit(X.h8,t)
inherit(X.ib,t)
inherit(M.h9,t)
inherit(Z.ir,t)
inherit(E.nN,t)
inherit(E.G,t)
inherit(A.a8,t)
inherit(U.c,t)
inherit(Y.dT,t)
inherit(K.cI,t)
inherit(X.H,t)
inherit(G.a7,t)
inherit(F.cc,t)
inherit(A.fS,t)
inherit(B.dw,t)
inherit(B.df,t)
inherit(A.dN,t)
inherit(F.hx,t)
inherit(F.hy,t)
inherit(Q.jF,t)
inherit(A.hM,t)
inherit(Y.dS,t)
inherit(O.cX,t)
inherit(D.cJ,t)
inherit(B.dF,t)
inherit(Q.cU,t)
inherit(B.hV,t)
inherit(Q.h,t)
t=J.k
inherit(J.mP,t)
inherit(J.mQ,t)
inherit(J.hs,t)
inherit(J.ev,t)
inherit(J.fj,t)
inherit(J.ew,t)
inherit(H.fm,t)
inherit(H.eB,t)
inherit(W.aV,t)
inherit(W.cN,t)
inherit(W.f_,t)
inherit(W.fX,t)
inherit(W.bL,t)
inherit(W.iH,t)
inherit(W.lc,t)
inherit(W.f2,t)
inherit(W.ih,t)
inherit(W.ik,t)
inherit(W.lh,t)
inherit(W.il,t)
inherit(W.iI,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(W.h0,t)
inherit(W.a6,t)
inherit(W.iJ,t)
inherit(W.lZ,t)
inherit(W.m3,t)
inherit(W.cp,t)
inherit(W.mh,t)
inherit(W.iK,t)
inherit(W.hj,t)
inherit(W.ec,t)
inherit(W.ne,t)
inherit(W.jw,t)
inherit(W.cr,t)
inherit(W.iU,t)
inherit(W.nH,t)
inherit(W.nI,t)
inherit(W.iV,t)
inherit(W.nW,t)
inherit(W.ea,t)
inherit(W.ed,t)
inherit(W.cg,t)
inherit(W.iW,t)
inherit(W.oC,t)
inherit(W.ct,t)
inherit(W.iX,t)
inherit(W.fu,t)
inherit(W.ci,t)
inherit(W.oR,t)
inherit(W.oX,t)
inherit(W.cj,t)
inherit(W.iY,t)
inherit(W.pA,t)
inherit(W.cv,t)
inherit(W.iZ,t)
inherit(W.fw,t)
inherit(W.jU,t)
inherit(W.pQ,t)
inherit(W.fx,t)
inherit(W.jV,t)
inherit(W.qn,t)
inherit(W.j_,t)
inherit(W.j0,t)
inherit(W.iL,t)
inherit(W.iM,t)
inherit(W.iN,t)
inherit(W.iO,t)
inherit(W.ru,t)
inherit(W.rv,t)
inherit(P.mt,t)
inherit(P.nM,t)
inherit(P.d5,t)
inherit(P.iP,t)
inherit(P.d7,t)
inherit(P.iQ,t)
inherit(P.o4,t)
inherit(P.iR,t)
inherit(P.d8,t)
inherit(P.iS,t)
inherit(P.pW,t)
inherit(P.fO,t)
inherit(P.kw,t)
inherit(P.ol,t)
inherit(P.rt,t)
inherit(P.iT,t)
t=J.hs
inherit(J.o2,t)
inherit(J.eN,t)
inherit(J.ex,t)
inherit(F.uo,t)
inherit(R.hg,t)
inherit(R.uG,t)
inherit(R.uF,t)
inherit(S.fp,t)
inherit(S.v5,t)
inherit(S.v6,t)
inherit(S.v7,t)
inherit(S.tu,t)
inherit(S.tx,t)
inherit(S.tk,t)
inherit(S.v9,t)
inherit(S.va,t)
inherit(S.l9,t)
inherit(S.uX,t)
inherit(S.uY,t)
inherit(S.td,t)
inherit(S.ma,t)
inherit(S.kP,t)
inherit(S.tj,t)
inherit(S.ti,t)
inherit(S.tw,t)
inherit(S.px,t)
inherit(S.tn,t)
inherit(S.hA,t)
inherit(S.uw,t)
inherit(S.uy,t)
inherit(S.uS,t)
inherit(S.uT,t)
inherit(S.uA,t)
inherit(S.uB,t)
inherit(S.tK,t)
inherit(S.tL,t)
inherit(S.uC,t)
inherit(S.uz,t)
inherit(S.tg,t)
inherit(S.v2,t)
inherit(S.v3,t)
inherit(S.v1,t)
inherit(Z.uj,t)
inherit(Z.uf,t)
inherit(Z.ug,t)
inherit(J.uk,J.ev)
t=J.fj
inherit(J.jt,t)
inherit(J.js,t)
inherit(P.ju,P.hJ)
t=P.ju
inherit(H.hQ,t)
inherit(W.k6,t)
inherit(H.kW,H.hQ)
t=P.p
inherit(H.v,t)
inherit(H.hz,t)
inherit(H.hU,t)
inherit(P.hq,t)
inherit(H.ri,t)
t=H.v
inherit(H.ey,t)
inherit(H.n4,t)
inherit(P.qS,t)
inherit(P.eH,t)
t=H.ey
inherit(H.pj,t)
inherit(H.fk,t)
inherit(P.n7,t)
inherit(H.h_,H.hz)
t=P.jr
inherit(H.jv,t)
inherit(H.jX,t)
inherit(Q.q_,t)
t=H.f0
inherit(H.t7,t)
inherit(H.t8,t)
inherit(H.qW,t)
inherit(H.qy,t)
inherit(H.mx,t)
inherit(H.my,t)
inherit(H.r2,t)
inherit(H.pC,t)
inherit(H.pD,t)
inherit(H.t9,t)
inherit(H.rW,t)
inherit(H.rX,t)
inherit(H.rY,t)
inherit(H.rZ,t)
inherit(H.t_,t)
inherit(H.po,t)
inherit(H.mT,t)
inherit(H.mS,t)
inherit(H.rS,t)
inherit(H.rT,t)
inherit(H.rU,t)
inherit(P.qh,t)
inherit(P.qg,t)
inherit(P.qi,t)
inherit(P.qj,t)
inherit(P.rx,t)
inherit(P.ry,t)
inherit(P.rI,t)
inherit(P.rK,t)
inherit(P.m8,t)
inherit(P.m7,t)
inherit(P.qD,t)
inherit(P.qL,t)
inherit(P.qH,t)
inherit(P.qI,t)
inherit(P.qJ,t)
inherit(P.qF,t)
inherit(P.qK,t)
inherit(P.qE,t)
inherit(P.qO,t)
inherit(P.qP,t)
inherit(P.qN,t)
inherit(P.qM,t)
inherit(P.p0,t)
inherit(P.oZ,t)
inherit(P.p_,t)
inherit(P.p1,t)
inherit(P.p6,t)
inherit(P.p4,t)
inherit(P.p5,t)
inherit(P.p7,t)
inherit(P.pa,t)
inherit(P.pb,t)
inherit(P.p8,t)
inherit(P.p9,t)
inherit(P.pc,t)
inherit(P.pd,t)
inherit(P.p2,t)
inherit(P.p3,t)
inherit(P.qm,t)
inherit(P.ql,t)
inherit(P.r4,t)
inherit(P.rA,t)
inherit(P.rz,t)
inherit(P.rB,t)
inherit(P.rH,t)
inherit(P.r8,t)
inherit(P.r9,t)
inherit(P.ra,t)
inherit(P.qU,t)
inherit(P.nl,t)
inherit(P.rs,t)
inherit(P.rr,t)
inherit(P.le,t)
inherit(P.lf,t)
inherit(P.ll,t)
inherit(P.lm,t)
inherit(P.pP,t)
inherit(P.pM,t)
inherit(P.pN,t)
inherit(P.pO,t)
inherit(P.rL,t)
inherit(P.rE,t)
inherit(P.rD,t)
inherit(P.rF,t)
inherit(P.rG,t)
inherit(W.qp,t)
inherit(W.mk,t)
inherit(W.ml,t)
inherit(W.qB,t)
inherit(P.rm,t)
inherit(P.qe,t)
inherit(P.rM,t)
inherit(P.rN,t)
inherit(P.l2,t)
inherit(P.rC,t)
inherit(P.kB,t)
inherit(P.kC,t)
inherit(O.kK,t)
inherit(A.mO,t)
inherit(A.mN,t)
inherit(T.t1,t)
inherit(G.mL,t)
inherit(U.q3,t)
inherit(U.q4,t)
inherit(F.q6,t)
inherit(A.rJ,t)
inherit(A.nb,t)
inherit(A.n9,t)
inherit(A.na,t)
inherit(A.nc,t)
inherit(O.t4,t)
inherit(O.t5,t)
inherit(O.t3,t)
inherit(V.ls,t)
inherit(V.lr,t)
inherit(V.lq,t)
inherit(V.lp,t)
inherit(D.oW,t)
inherit(Q.q0,t)
t=H.qk
inherit(H.fB,t)
inherit(H.i4,t)
inherit(H.l_,H.kZ)
t=P.el
inherit(H.jB,t)
inherit(H.mU,t)
inherit(H.pJ,t)
inherit(H.kS,t)
inherit(H.or,t)
inherit(P.fo,t)
inherit(P.d1,t)
inherit(P.aa,t)
inherit(P.eM,t)
inherit(P.dV,t)
inherit(P.bO,t)
inherit(P.lb,t)
t=H.po
inherit(H.oU,t)
inherit(H.fQ,t)
t=P.hq
inherit(H.qf,t)
inherit(T.fK,t)
t=H.eB
inherit(H.nz,t)
inherit(H.jy,t)
t=H.jy
inherit(H.hF,t)
inherit(H.hG,t)
inherit(H.hH,H.hF)
inherit(H.hD,H.hH)
inherit(H.hI,H.hG)
inherit(H.hE,H.hI)
t=H.hD
inherit(H.nA,t)
inherit(H.nB,t)
t=H.hE
inherit(H.nC,t)
inherit(H.nD,t)
inherit(H.nE,t)
inherit(H.nF,t)
inherit(H.nG,t)
inherit(H.jz,t)
inherit(H.fn,t)
t=P.k3
inherit(P.e_,t)
inherit(P.ke,t)
t=P.k5
inherit(P.qr,t)
inherit(P.qt,t)
inherit(P.rg,P.r3)
t=P.dp
inherit(P.hY,t)
inherit(W.qz,t)
inherit(P.hZ,P.dq)
inherit(P.r1,P.hY)
inherit(P.r7,P.rw)
inherit(P.ka,H.q)
inherit(P.oD,P.oE)
inherit(P.qV,P.oD)
inherit(P.k9,P.qV)
inherit(P.hR,P.nk)
t=P.fV
inherit(P.kG,t)
inherit(P.lo,t)
t=P.fW
inherit(P.kH,t)
inherit(P.pT,t)
inherit(P.pS,P.lo)
t=P.du
inherit(P.a4,t)
inherit(P.F,t)
t=P.d1
inherit(P.eG,t)
inherit(P.mu,t)
inherit(P.qq,P.kf)
t=W.aV
inherit(W.aP,t)
inherit(W.h1,t)
inherit(W.kY,t)
inherit(W.lY,t)
inherit(W.m_,t)
inherit(W.m4,t)
inherit(W.hi,t)
inherit(W.hC,t)
inherit(W.o7,t)
inherit(W.jL,t)
inherit(W.oF,t)
inherit(W.eP,t)
inherit(W.cs,t)
inherit(W.h2,t)
inherit(W.cT,t)
inherit(W.cK,t)
inherit(W.h3,t)
inherit(W.pU,t)
inherit(W.pZ,t)
inherit(W.jY,t)
inherit(W.q5,t)
inherit(W.re,t)
inherit(P.ld,t)
inherit(P.hN,t)
inherit(P.pF,t)
inherit(P.bC,t)
inherit(P.fP,t)
t=W.aP
inherit(W.dx,t)
inherit(W.eh,t)
inherit(W.ek,t)
inherit(W.ij,t)
inherit(W.fy,t)
inherit(W.qu,t)
t=W.dx
inherit(W.aC,t)
inherit(P.cb,t)
t=W.aC
inherit(W.eW,t)
inherit(W.kx,t)
inherit(W.hB,t)
inherit(W.kI,t)
inherit(W.kM,t)
inherit(W.fU,t)
inherit(W.ln,t)
inherit(W.lX,t)
inherit(W.iD,t)
inherit(W.mp,t)
inherit(W.fe,t)
inherit(W.mv,t)
inherit(W.mX,t)
inherit(W.hu,t)
inherit(W.nj,t)
inherit(W.np,t)
inherit(W.nL,t)
inherit(W.nQ,t)
inherit(W.nU,t)
inherit(W.fs,t)
inherit(W.jM,t)
inherit(W.oI,t)
inherit(W.ft,t)
inherit(W.pq,t)
inherit(W.ps,t)
inherit(W.qQ,t)
inherit(W.eZ,W.hB)
inherit(W.h4,W.h1)
inherit(W.kE,W.h4)
t=W.bL
inherit(W.l3,t)
inherit(W.l4,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.l5,t)
inherit(W.l6,t)
inherit(W.l7,t)
inherit(W.ej,W.iH)
inherit(W.qo,W.jC)
inherit(W.j1,W.iI)
inherit(W.im,W.j1)
t=W.a6
inherit(W.lt,t)
inherit(W.oP,t)
inherit(W.oQ,t)
inherit(W.ce,W.f_)
inherit(W.j2,W.iJ)
inherit(W.fa,W.j2)
inherit(W.j3,W.iK)
inherit(W.fc,W.j3)
inherit(W.iF,W.fc)
inherit(W.e8,W.hi)
inherit(W.ht,W.ec)
inherit(W.nq,W.hC)
inherit(W.jd,W.iU)
inherit(W.jx,W.jd)
inherit(W.je,W.iV)
inherit(W.jA,W.je)
inherit(W.o1,W.ed)
inherit(W.jf,W.iW)
inherit(W.jH,W.jf)
inherit(W.oG,W.eP)
inherit(W.h5,W.h2)
inherit(W.jO,W.h5)
inherit(W.jg,W.iX)
inherit(W.jP,W.jg)
inherit(W.jh,W.iY)
inherit(W.pv,W.jh)
inherit(W.h6,W.h3)
inherit(W.pw,W.h6)
inherit(W.ji,W.iZ)
inherit(W.jT,W.ji)
inherit(W.jj,W.j_)
inherit(W.hW,W.jj)
inherit(W.jk,W.j0)
inherit(W.k4,W.jk)
inherit(W.qv,W.il)
inherit(W.j4,W.iL)
inherit(W.k8,W.j4)
inherit(W.j5,W.iM)
inherit(W.i2,W.j5)
inherit(W.j6,W.iN)
inherit(W.kb,W.j6)
inherit(W.j7,W.iO)
inherit(W.kd,W.j7)
t=P.l1
inherit(W.qw,t)
inherit(P.kA,t)
inherit(W.hX,W.qz)
inherit(W.qA,P.oY)
inherit(P.rl,P.rk)
inherit(P.k0,P.qd)
inherit(P.bV,P.r6)
t=P.cb
inherit(P.cq,t)
inherit(P.eg,t)
inherit(P.lw,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lD,t)
inherit(P.lE,t)
inherit(P.lF,t)
inherit(P.lG,t)
inherit(P.lH,t)
inherit(P.lI,t)
inherit(P.lJ,t)
inherit(P.lK,t)
inherit(P.lL,t)
inherit(P.m0,t)
inherit(P.nm,t)
inherit(P.nn,t)
inherit(P.o_,t)
inherit(P.oz,t)
inherit(P.pm,t)
inherit(P.pV,t)
inherit(P.i_,t)
inherit(P.rb,t)
inherit(P.rc,t)
inherit(P.rd,t)
t=P.cq
inherit(P.ku,t)
inherit(P.mq,t)
inherit(P.pk,t)
inherit(P.eL,t)
inherit(P.pR,t)
inherit(P.j8,P.iP)
inherit(P.n_,P.j8)
inherit(P.j9,P.iQ)
inherit(P.nJ,P.j9)
inherit(P.ja,P.iR)
inherit(P.ph,P.ja)
inherit(P.pu,P.eL)
inherit(P.jb,P.iS)
inherit(P.pG,P.jb)
t=P.bC
inherit(P.e5,t)
inherit(P.l0,t)
inherit(P.eY,P.e5)
inherit(P.jc,P.iT)
inherit(P.jQ,P.jc)
t=B.hl
inherit(S.kv,t)
inherit(M.kz,t)
inherit(A.kX,t)
inherit(M.l8,t)
inherit(V.li,t)
inherit(U.lM,t)
inherit(N.mW,t)
inherit(F.nw,t)
inherit(G.o5,t)
inherit(Q.oo,t)
inherit(N.oL,t)
inherit(D.pp,t)
inherit(V.pr,t)
inherit(F.q7,t)
t=N.ah
inherit(T.lg,t)
inherit(R.ob,t)
t=T.lg
inherit(K.bY,t)
inherit(S.bH,t)
inherit(T.c4,t)
inherit(M.bB,t)
inherit(A.nT,A.jD)
inherit(L.P,A.nT)
t=O.c8
inherit(O.dv,t)
inherit(O.iq,t)
inherit(O.eK,t)
t=O.dv
inherit(U.kD,t)
inherit(Y.oe,t)
inherit(V.m5,t)
inherit(Q.ms,t)
inherit(Q.o0,t)
inherit(M.oS,t)
inherit(B.qc,t)
t=U.kD
inherit(U.ng,t)
inherit(U.nO,t)
inherit(U.pe,O.iq)
t=U.pe
inherit(U.pf,t)
inherit(U.pg,t)
t=T.hO
inherit(O.kF,t)
inherit(Y.mb,t)
inherit(Y.mc,t)
inherit(B.mf,t)
inherit(X.mn,t)
inherit(Q.mo,t)
inherit(S.mY,t)
inherit(Z.nf,t)
inherit(S.nh,t)
inherit(U.ni,t)
inherit(E.nv,t)
inherit(V.nS,t)
inherit(N.oa,t)
inherit(N.on,t)
inherit(E.ot,t)
inherit(Y.ov,t)
inherit(Y.ox,t)
inherit(L.oy,t)
inherit(S.oB,t)
inherit(Y.oJ,t)
inherit(R.pl,t)
inherit(U.py,t)
inherit(E.pY,t)
inherit(M.q1,t)
t=O.eK
inherit(Y.pt,t)
inherit(Y.kQ,t)
inherit(Y.nK,t)
inherit(U.q2,t)
t=L.fM
inherit(L.kJ,t)
inherit(T.kL,t)
inherit(T.kO,t)
inherit(S.kU,t)
inherit(U.lj,t)
inherit(Z.lk,t)
inherit(L.lN,t)
inherit(O.m2,t)
inherit(L.md,t)
inherit(T.me,t)
inherit(V.mg,t)
inherit(X.mi,t)
inherit(Z.mV,t)
inherit(Q.mZ,t)
inherit(K.n0,t)
inherit(G.n1,t)
inherit(D.no,t)
inherit(L.nr,t)
inherit(V.ns,t)
inherit(S.nu,t)
inherit(E.oc,t)
inherit(L.od,t)
inherit(L.of,t)
inherit(L.og,t)
inherit(L.oh,t)
inherit(Z.om,t)
inherit(V.op,t)
inherit(R.oq,t)
inherit(Y.ou,t)
inherit(K.ow,t)
inherit(L.oH,t)
inherit(O.oK,t)
inherit(N.oN,t)
inherit(U.oT,t)
inherit(A.nt,t)
inherit(A.oO,t)
inherit(A.o6,t)
inherit(A.oM,t)
inherit(A.pE,t)
inherit(A.oi,t)
inherit(A.m9,t)
inherit(L.pn,t)
inherit(N.pz,t)
inherit(Q.pX,t)
t=S.bH
inherit(S.ic,t)
inherit(S.mj,t)
inherit(E.iE,E.nN)
t=E.G
inherit(E.fN,t)
inherit(E.ia,t)
inherit(Q.o3,Q.ms)
inherit(U.ab,U.c)
t=R.ob
inherit(R.ae,t)
inherit(R.a3,t)
inherit(R.al,t)
inherit(R.bA,R.al)
t=Y.dT
inherit(Y.aq,t)
inherit(Y.c2,t)
inherit(Y.ny,t)
inherit(Y.a5,t)
inherit(Y.ie,t)
inherit(Y.bE,t)
inherit(Y.cZ,t)
inherit(Y.kV,t)
inherit(Y.jE,t)
inherit(Y.iC,t)
inherit(Y.jG,t)
t=Y.c2
inherit(Y.d2,t)
inherit(Y.bw,t)
inherit(U.au,A.a8)
t=G.a7
inherit(G.aX,t)
inherit(G.bI,t)
inherit(G.e,t)
inherit(G.as,G.bI)
t=D.cJ
inherit(D.k_,t)
inherit(D.ok,t)
t=Q.cU
inherit(Q.hT,t)
inherit(Q.hS,t)
inherit(Q.dZ,Q.hT)
inherit(B.jZ,Q.dZ)
t=S.fp
inherit(S.uQ,t)
inherit(S.kR,t)
inherit(S.n2,t)
inherit(S.uu,t)
inherit(S.tJ,t)
t=S.kR
inherit(S.uH,t)
inherit(S.uD,t)
t=S.n2
inherit(S.tp,t)
inherit(S.te,t)
t=S.l9
inherit(S.up,t)
inherit(S.la,t)
inherit(S.nV,S.la)
inherit(S.uU,S.nV)
t=S.kP
inherit(S.uI,t)
inherit(S.uV,t)
t=S.ma
inherit(S.uZ,t)
inherit(S.uJ,t)
inherit(S.tv,t)
inherit(S.uW,t)
t=S.px
inherit(S.v0,t)
inherit(S.tm,t)
inherit(S.v8,t)
t=S.hA
inherit(S.uv,t)
inherit(S.ux,t)
inherit(S.uR,t)
inherit(Q.eQ,Q.hS)
inherit(Q.jW,Q.eQ)
mixin(H.hQ,H.pK)
mixin(H.hF,P.b6)
mixin(H.hH,H.iB)
mixin(H.hG,P.b6)
mixin(H.hI,H.iB)
mixin(P.hJ,P.b6)
mixin(P.hR,P.ro)
mixin(W.h1,P.b6)
mixin(W.h4,W.bx)
mixin(W.iH,W.ig)
mixin(W.jC,W.ig)
mixin(W.iI,P.b6)
mixin(W.j1,W.bx)
mixin(W.iJ,P.b6)
mixin(W.j2,W.bx)
mixin(W.iK,P.b6)
mixin(W.j3,W.bx)
mixin(W.iU,P.b6)
mixin(W.jd,W.bx)
mixin(W.iV,P.b6)
mixin(W.je,W.bx)
mixin(W.iW,P.b6)
mixin(W.jf,W.bx)
mixin(W.h2,P.b6)
mixin(W.h5,W.bx)
mixin(W.iX,P.b6)
mixin(W.jg,W.bx)
mixin(W.iY,P.b6)
mixin(W.jh,W.bx)
mixin(W.h3,P.b6)
mixin(W.h6,W.bx)
mixin(W.iZ,P.b6)
mixin(W.ji,W.bx)
mixin(W.j_,P.b6)
mixin(W.jj,W.bx)
mixin(W.j0,P.b6)
mixin(W.jk,W.bx)
mixin(W.iL,P.b6)
mixin(W.j4,W.bx)
mixin(W.iM,P.b6)
mixin(W.j5,W.bx)
mixin(W.iN,P.b6)
mixin(W.j6,W.bx)
mixin(W.iO,P.b6)
mixin(W.j7,W.bx)
mixin(P.iP,P.b6)
mixin(P.j8,W.bx)
mixin(P.iQ,P.b6)
mixin(P.j9,W.bx)
mixin(P.iR,P.b6)
mixin(P.ja,W.bx)
mixin(P.iS,P.b6)
mixin(P.jb,W.bx)
mixin(P.iT,P.b6)
mixin(P.jc,W.bx)
mixin(A.jD,P.fi)
mixin(Q.hT,P.b6)
mixin(Q.hS,P.fi)})();(function constants(){C.L=W.ej.prototype
C.M=W.e8.prototype
C.N=J.k.prototype
C.b=J.ev.prototype
C.f=J.js.prototype
C.a=J.jt.prototype
C.d=J.fj.prototype
C.c=J.ew.prototype
C.U=J.ex.prototype
C.q=H.fn.prototype
C.F=J.o2.prototype
C.a1=W.ft.prototype
C.t=J.eN.prototype
C.H=new P.kH(!1)
C.G=new P.kG(C.H)
C.i=new W.id()
C.I=new P.nP()
C.J=new P.qs()
C.K=new P.qX()
C.e=new P.r7()
C.o=new W.rn()
C.p=new P.d3(0)
C.O=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.P=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.Q=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.S=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.T=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.F])
C.x=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.k=makeConstList([0,0,65490,45055,65535,34815,65534,18431])
C.l=makeConstList([0,0,26624,1023,65534,2047,65534,2047])
C.V=makeConstList([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13])
C.y=makeConstList([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5])
C.W=makeConstList([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0])
C.X=makeConstList([])
C.Z=makeConstList([0,0,32722,12287,65534,34815,65534,18431])
C.z=makeConstList([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577])
C.A=makeConstList([0,0,24576,1023,65534,34815,65534,18431])
C.B=makeConstList([0,0,32754,11263,65534,34815,65534,18431])
C.C=makeConstList([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258])
C.D=makeConstList([0,0,65490,12287,65535,34815,65534,18431])
C.E=makeConstList([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15])
C.h=new F.hx(0,"LogLevel.ERROR")
C.m=new F.hx(1,"LogLevel.WARN")
C.a_=new F.hx(3,"LogLevel.VERBOSE")
C.Y=H.a(makeConstList([]),[P.C])
C.a0=new H.l_(0,{},C.Y,[P.C,P.C])
C.a2=H.c0("bh")
C.a3=H.c0("Iu")
C.r=H.c0("Iv")
C.a4=H.c0("Iw")
C.a5=H.c0("Ix")
C.a6=H.c0("Iz")
C.a7=H.c0("IA")
C.a8=H.c0("IB")
C.a9=H.c0("mR")
C.aa=H.c0("d6")
C.ab=H.c0("C")
C.ac=H.c0("IF")
C.ad=H.c0("IG")
C.ae=H.c0("IH")
C.af=H.c0("d9")
C.ag=H.c0("da")
C.ah=H.c0("a4")
C.ai=H.c0("F")
C.aj=H.c0("du")
C.n=new P.pS(!1)})();(function staticFields(){$.x1="$cachedFunction"
$.x2="$cachedInvocation"
$.dM=0
$.fR=null
$.vG=null
$.vk=null
$.xZ=null
$.yd=null
$.rO=null
$.rV=null
$.vl=null
$.fD=null
$.i5=null
$.i6=null
$.vh=!1
$.aE=C.e
$.w0=0
$.vW=null
$.vV=null
$.vU=null
$.vX=null
$.vT=null
$.zj=null
$.zn=null
$.yM=null
$.tf=null
$.yL=null
$.yT=null
$.z1=null
$.yZ=null
$.zp=null
$.vD=null
$.yV=null
$.yY=null
$.yO=null
$.zf=null
$.yW=null
$.zm=null
$.zc=null
$.yU=null
$.yK=null
$.z2=null
$.zk=null
$.z5=null
$.zi=null
$.zo=null
$.z7=null
$.yR=null
$.z_=null
$.yN=null
$.zd=null
$.yS=null
$.z0=null
$.z3=null
$.z6=null
$.ze=null
$.zg=null
$.zb=null
$.yX=null
$.yP=null
$.zh=null
$.yQ=null
$.zl=null
$.z8=null
$.z9=null
$.za=null
$.z4=null
$.S="accent"
$.U="aspect1"
$.T="aspect2"
$.a2="shoe1"
$.a1="shoe2"
$.W="cloak1"
$.X="cloak2"
$.V="cloak3"
$.a0="shirt1"
$.a_="shirt2"
$.Z="pants1"
$.Y="pants2"
$.zA=null
$.zu=null
$.zv=null
$.zB=null
$.zE=null
$.zI=null
$.zw=null
$.zG=null
$.zt=null
$.zD=null
$.zC=null
$.zH=null
$.zF=null
$.zz=null
$.zx=null
$.zy=null
$.vK=null
$.aw=1300
$.l=3
$.n=2
$.L=1
$.B=0.1
$.Ah=1
$.Ag=-1
$.tE=null
$.e6=null
$.w1=null
$.ep=null
$.f8=null
$.iu=null
$.ty=null
$.lQ=null
$.tG=null
$.iv=null
$.is=null
$.w3=null
$.lV=null
$.ha=null
$.dR=null
$.w2=null
$.lO=null
$.lW=null
$.f6=null
$.Ae=null
$.Ab=null
$.Ad=null
$.Af=null
$.hf=null
$.f3=null
$.cz=null
$.d4=null
$.er=null
$.lU=null
$.c7=null
$.c6=null
$.tA=null
$.hd=null
$.eo=null
$.Ac=null
$.hc=null
$.cF=null
$.e7=null
$.iA=null
$.cO=null
$.f7=null
$.c1=null
$.lS=null
$.lP=null
$.b4=null
$.cE=null
$.cd=null
$.co=null
$.lR=null
$.bQ=null
$.dz=null
$.dy=null
$.en=null
$.dP=null
$.dQ=null
$.em=null
$.di=null
$.he=null
$.iz=null
$.it=null
$.cV=null
$.cC=null
$.be=null
$.f4=null
$.eq=null
$.lT=null
$.iw=null
$.hb=null
$.tC=null
$.cD=null
$.tF=null
$.tz=null
$.w5=null
$.f5=null
$.cB=null
$.dh=null
$.dg=null
$.f9=null
$.tB=null
$.tD=null
$.w4=null
$.ix=null
$.iy=null
$.es=null
$.w6=!1
$.tI=null
$.Ai=null
$.w8=null
$.wa=null
$.Ar=null
$.w9=null
$.Ap=null
$.Aq=null
$.tH=null
$.Am=null
$.Ak=null
$.Al=null
$.An=null
$.Ao=null
$.AB=null
$.Au=null
$.Av=null
$.Aw=null
$.Ax=null
$.Ay=null
$.Az=null
$.AA=null
$.AD=null
$.AE=null
$.AF=null
$.AG=null
$.AH=null
$.AI=null
$.AC=null
$.FT="JACK"
$.FY="PM"
$.FU="JS"
$.FS="HP"
$.G2="YD"
$.G_="SI"
$.G0="SU"
$.FV="ME"
$.FZ="RB"
$.FQ="GN"
$.FW="MP"
$.FO="AR"
$.FX="PE"
$.FP="DP"
$.G1="WV"
$.FR="HB"
$.o="PLAYER1TAG"
$.eF="PLAYER2TAG"
$.z="DENIZENTAG"
$.u="CONSORTTAG"
$.N="CONSORTSOUNDTAG"
$.aZ="MCGUFFINTAG"
$.at="TAGPHYSICALMCGUFFIN"
$.ch="TAGWEAPON"
$.GD=null
$.GQ=null
$.Gx=null
$.GA=null
$.GG=null
$.GL=null
$.GJ=null
$.GT=null
$.GS=null
$.GK=null
$.GV=null
$.GF=null
$.GU=null
$.GO=null
$.GM=null
$.GP=null
$.Gz=null
$.Gy=null
$.GI=null
$.GH=null
$.GE=null
$.GR=null
$.GB=null
$.GC=null
$.GN=null
$.y4=!1
$.GW=!1
$.xa=null
$.H2=13
$.ay=3
$.bN=2
$.aQ=1
$.mM=0
$.K=1
$.ai=3
$.J=4
$.uc=6
$.ud=7
$.an=8
$.x=9
$.t=10
$.fg=null
$.eu=null
$.tY=null
$.u8=null
$.u4=null
$.wg=null
$.tU=null
$.u3=null
$.ho=null
$.wp=null
$.wH=null
$.wj=null
$.wq=null
$.tV=null
$.u2=null
$.wK=null
$.wM=null
$.tR=null
$.jm=null
$.jl=null
$.aL=null
$.wB=null
$.tP=null
$.wy=null
$.fh=null
$.wi=null
$.wN=null
$.wJ=null
$.wG=null
$.u1=null
$.mF=null
$.et=null
$.wL=null
$.mB=null
$.tW=null
$.e9=null
$.wE=null
$.dj=null
$.hn=null
$.ub=null
$.wF=null
$.ua=null
$.u5=null
$.u7=null
$.mJ=null
$.hm=null
$.B6=null
$.ws=null
$.wx=null
$.wD=null
$.wC=null
$.E=null
$.wn=null
$.mC=null
$.bR=null
$.b9=null
$.bS=null
$.a9=null
$.aS=null
$.c3=null
$.M=null
$.R=null
$.aD=null
$.b_=null
$.bZ=null
$.bf=null
$.bp=null
$.cf=null
$.b5=null
$.bz=null
$.bT=null
$.ac=null
$.Fr=null
$.aH=null
$.b3=null
$.aY=null
$.ao=null
$.c9=null
$.b2=null
$.aG=null
$.bF=null
$.b0=null
$.az=null
$.bu=null
$.c_=null
$.aM=null
$.br=null
$.bj=null
$.ag=null
$.bM=null
$.ak=null
$.bc=null
$.bq=null
$.b1=null
$.bg=null
$.aI=null
$.b7=null
$.aJ=null
$.ad=null
$.aA=null
$.aN=null
$.b8=null
$.aF=null
$.ax=null
$.af=null
$.I=null
$.Q=null
$.ar=null
$.av=null
$.aW=null
$.aR=null
$.Co=null
$.F3=null
$.FC=null
$.BV=null
$.F0=null
$.Cp=null
$.wf=null
$.Ff=null
$.Do=null
$.Ck=null
$.B2=null
$.DZ=null
$.jn=null
$.wk=null
$.Eo=null
$.BS=null
$.D7=null
$.BQ=null
$.tS=null
$.BB=null
$.CB=null
$.BZ=null
$.Dh=null
$.Fn=null
$.Cq=null
$.mD=null
$.Di=null
$.BX=null
$.BH=null
$.u6=null
$.AW=null
$.tO=null
$.D0=null
$.u_=null
$.DD=null
$.Dx=null
$.B_=null
$.BK=null
$.Ey=null
$.B1=null
$.F_=null
$.D6=null
$.C5=null
$.Ei=null
$.EU=null
$.mE=null
$.Ds=null
$.Ef=null
$.BY=null
$.AP=null
$.Fq=null
$.Da=null
$.BG=null
$.Fe=null
$.DG=null
$.BN=null
$.EZ=null
$.Cf=null
$.EG=null
$.EH=null
$.AY=null
$.Dz=null
$.C_=null
$.C9=null
$.FG=null
$.hp=null
$.Ew=null
$.EX=null
$.mH=null
$.Bv=null
$.DQ=null
$.DU=null
$.AV=null
$.Ce=null
$.EY=null
$.DF=null
$.Fh=null
$.Ek=null
$.DV=null
$.ww=null
$.EK=null
$.Fw=null
$.F2=null
$.CO=null
$.E6=null
$.CP=null
$.Ez=null
$.Fu=null
$.Dg=null
$.Cb=null
$.Cy=null
$.Bm=null
$.Eg=null
$.Cw=null
$.CD=null
$.C1=null
$.EJ=null
$.ff=null
$.DK=null
$.wu=null
$.CQ=null
$.wv=null
$.Fz=null
$.Br=null
$.Eu=null
$.Ev=null
$.Et=null
$.Es=null
$.EQ=null
$.CE=null
$.DA=null
$.ET=null
$.Dr=null
$.DL=null
$.wm=null
$.Ft=null
$.Dy=null
$.Ch=null
$.Ci=null
$.DT=null
$.FF=null
$.D4=null
$.Fs=null
$.u0=null
$.EF=null
$.De=null
$.jo=null
$.CZ=null
$.E8=null
$.Bq=null
$.Cl=null
$.EB=null
$.DB=null
$.Fm=null
$.wz=null
$.DJ=null
$.Bx=null
$.BT=null
$.E4=null
$.F9=null
$.EA=null
$.mz=null
$.u9=null
$.EM=null
$.Fv=null
$.CN=null
$.Ba=null
$.Bj=null
$.F7=null
$.DN=null
$.Dp=null
$.DO=null
$.F4=null
$.D_=null
$.AZ=null
$.CC=null
$.Dn=null
$.EO=null
$.Cv=null
$.Bp=null
$.Eq=null
$.Er=null
$.Fk=null
$.ED=null
$.mI=null
$.wl=null
$.BO=null
$.wo=null
$.CU=null
$.mG=null
$.Ea=null
$.Dw=null
$.Em=null
$.tX=null
$.mK=null
$.tZ=null
$.C7=null
$.CA=null
$.wA=null
$.wr=null
$.BJ=null
$.Fb=null
$.BC=null
$.DX=null
$.CR=null
$.ES=null
$.Dq=null
$.B7=null
$.CS=null
$.C4=null
$.E0=null
$.D9=null
$.Dv=null
$.Df=null
$.Dj=null
$.Ep=null
$.El=null
$.AS=null
$.F8=null
$.Ed=null
$.BW=null
$.C0=null
$.Cz=null
$.F5=null
$.Cs=null
$.Db=null
$.Be=null
$.Cm=null
$.C3=null
$.DP=null
$.Cc=null
$.Ex=null
$.Dd=null
$.wh=null
$.E9=null
$.CT=null
$.Ct=null
$.AQ=null
$.AX=null
$.DM=null
$.DW=null
$.D8=null
$.CL=null
$.Fp=null
$.Bh=null
$.Cu=null
$.Dc=null
$.BU=null
$.wI=null
$.BI=null
$.EC=null
$.Bf=null
$.Fa=null
$.Dl=null
$.B9=null
$.Ej=null
$.E5=null
$.BP=null
$.CF=null
$.Bw=null
$.F6=null
$.CX=null
$.Fl=null
$.By=null
$.CG=null
$.Bz=null
$.BR=null
$.Ec=null
$.BL=null
$.CY=null
$.DC=null
$.Bs=null
$.ER=null
$.FB=null
$.EI=null
$.Dt=null
$.EP=null
$.Du=null
$.B4=null
$.AR=null
$.Dm=null
$.Bc=null
$.BA=null
$.B5=null
$.B8=null
$.DI=null
$.E1=null
$.Fd=null
$.CV=null
$.FA=null
$.Eh=null
$.Ee=null
$.D1=null
$.CW=null
$.BE=null
$.CJ=null
$.Dk=null
$.DR=null
$.EL=null
$.AU=null
$.Fx=null
$.Ca=null
$.EV=null
$.C2=null
$.B3=null
$.Bt=null
$.Bl=null
$.FE=null
$.Bu=null
$.Cd=null
$.BD=null
$.Fj=null
$.EN=null
$.Fc=null
$.AT=null
$.En=null
$.D2=null
$.D5=null
$.Fo=null
$.EW=null
$.wt=null
$.Cj=null
$.E3=null
$.Fy=null
$.Cn=null
$.D3=null
$.tT=null
$.CM=null
$.CK=null
$.EE=null
$.E2=null
$.CH=null
$.Bk=null
$.F1=null
$.DS=null
$.Fg=null
$.FD=null
$.mA=null
$.tQ=null
$.Bg=null
$.Cg=null
$.Eb=null
$.BM=null
$.E7=null
$.C6=null
$.B0=null
$.Bi=null
$.DH=null
$.C8=null
$.E_=null
$.Bo=null
$.Cr=null
$.Fi=null
$.Bb=null
$.Cx=null
$.DY=null
$.Bn=null
$.CI=null
$.DE=null
$.Bd=null
$.BF=null
$.xA=4
$.fb="OWNER"
$.wT=!1
$.ut=null
$.yf=""
$.oV=null
$.H_=null
$.dE=null
$.dW=null
$.GZ=null
$.cu=null
$.d_=null
$.bJ=null
$.dD=null
$.eI=null
$.eJ=null
$.dn=null
$.bW=null
$.xc=!1})();(function lazyInitializers(){lazy($,"vQ","$get$vQ",function(){return H.y7("_$dart_dartClosure")})
lazy($,"um","$get$um",function(){return H.y7("_$dart_js")})
lazy($,"wd","$get$wd",function(){return H.AN()})
lazy($,"we","$get$we",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.w0
$.w0=t+1
t="expando$key$"+t}return new P.lv(null,t,[P.F])})
lazy($,"xg","$get$xg",function(){return H.dX(H.pI({
toString:function(){return"$receiver$"}}))})
lazy($,"xh","$get$xh",function(){return H.dX(H.pI({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xi","$get$xi",function(){return H.dX(H.pI(null))})
lazy($,"xj","$get$xj",function(){return H.dX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xn","$get$xn",function(){return H.dX(H.pI(void 0))})
lazy($,"xo","$get$xo",function(){return H.dX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xl","$get$xl",function(){return H.dX(H.xm(null))})
lazy($,"xk","$get$xk",function(){return H.dX(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xq","$get$xq",function(){return H.dX(H.xm(void 0))})
lazy($,"xp","$get$xp",function(){return H.dX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vd","$get$vd",function(){return P.H8()})
lazy($,"hh","$get$hh",function(){return P.He(null,P.d6)})
lazy($,"i7","$get$i7",function(){return[]})
lazy($,"xC","$get$xC",function(){return H.G3([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xX","$get$xX",function(){return P.HD()})
lazy($,"vP","$get$vP",function(){return{}})
lazy($,"vN","$get$vN",function(){return P.dC("^\\S+$",!0,!1)})
lazy($,"ky","$get$ky",function(){return P.cH(P.F,L.fM)})
lazy($,"vI","$get$vI",function(){return P.dC("[\\/]",!0,!1)})
lazy($,"bP","$get$bP",function(){return H.a([],[S.bH])})
lazy($,"m6","$get$m6",function(){return P.cH(P.C,Z.ir)})
lazy($,"mw","$get$mw",function(){return P.cH(P.F,B.hl)})
lazy($,"wO","$get$wO",function(){return H.a([],[A.a8])})
lazy($,"yb","$get$yb",function(){return K.vL()})
lazy($,"wY","$get$wY",function(){return H.a([],[P.C])})
lazy($,"os","$get$os",function(){return P.cH(P.F,T.hO)})
lazy($,"y9","$get$y9",function(){return A.Gs(null)})
lazy($,"aB","$get$aB",function(){return H.a([],[U.au])})
lazy($,"xb","$get$xb",function(){return P.wR([0,new K.cI("Pixels -> Bytes",T.HT(),T.HS()),1,new K.cI("Pixels -> Packed bits",T.HR(),T.HQ()),2,new K.cI("RLE 1 byte",V.tt(1),V.ts(1)),3,new K.cI("RLE 2 bytes",V.tt(2),V.ts(2)),4,new K.cI("RLE 3 bytes",V.tt(3),V.ts(3)),5,new K.cI("RLE packed 1 byte",V.tr(1),V.tq(1)),6,new K.cI("RLE packed 2 bytes",V.tr(2),V.tq(2)),7,new K.cI("RLE packed 3 bytes",V.tr(3),V.tq(3)),8,new K.cI("RLE dynamic",V.Im(),V.Il()),9,new K.cI("Exponential-Golomb pixels",F.I4(),F.I3()),10,new K.cI("Exponential-Golomb run RLE",F.I2(),F.I1()),11,new K.cI("Exponential-Golomb run/data RLE",F.I0(),F.I_())],P.F,K.cI)})
lazy($,"d","$get$d",function(){return P.aj(null,null,null,G.a7)})
lazy($,"xy","$get$xy",function(){return P.dC("[\n\r]+",!0,!1)})
lazy($,"xz","$get$xz",function(){return P.dC("( *)(.*)",!0,!1)})
lazy($,"xx","$get$xx",function(){return P.dC("^s*//",!0,!1)})
lazy($,"xw","$get$xw",function(){return P.dC("//",!0,!1)})
lazy($,"cL","$get$cL",function(){return new F.hy(!1,!1,"WordListFileFormat")})
lazy($,"ck","$get$ck",function(){return H.a([],[F.cc])})
lazy($,"xB","$get$xB",function(){return new T.q8(null)})
lazy($,"vE","$get$vE",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cW","$get$cW",function(){return P.cH(P.C,Y.dS)})
lazy($,"wU","$get$wU",function(){return P.dC("[\\/]",!0,!1)})
lazy($,"us","$get$us",function(){return P.cH(P.C,W.fs)})
lazy($,"uE","$get$uE",function(){return A.ei(255,0,255,255)})
lazy($,"nZ","$get$nZ",function(){return new F.hy(!1,!1,"Path Utils")})
lazy($,"nX","$get$nX",function(){return P.cH(P.eO,P.F)})
lazy($,"cS","$get$cS",function(){return H.a([],[D.cJ])})
lazy($,"hP","$get$hP",function(){return P.dC("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fv","$get$fv",function(){return P.dC("\\\\(?!\\\\)",!0,!1)})
lazy($,"vR","$get$vR",function(){var t={color:16711935}
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
mangledGlobalNames:{F:"int",a4:"double",du:"num",C:"String",da:"bool",d6:"Null",r:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.da,args:[[P.r,E.iE]]},{func:1,v:true},{func:1,ret:P.d9,args:[P.bh,P.F,P.F,O.cX]},{func:1,ret:P.bh,args:[P.F,P.bh,P.bh,O.cX]},{func:1,v:true,args:[P.ap]},{func:1,ret:P.C,args:[P.F]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.aP,args:[P.F]},{func:1,ret:P.C,args:[P.C]},{func:1,ret:W.dx,args:[P.F]},{func:1,ret:W.cr,args:[P.F]},{func:1,args:[,]},{func:1,v:true,args:[P.ap],opt:[P.dU]},{func:1,ret:W.ce,args:[P.F]},{func:1,v:true,args:[,P.dU]},{func:1,ret:W.cg,args:[P.F]},{func:1,ret:W.cs,args:[P.F]},{func:1,ret:W.ct,args:[P.F]},{func:1,ret:W.fu,args:[P.F]},{func:1,ret:W.cv,args:[P.F]},{func:1,ret:W.fw,args:[P.F]},{func:1,ret:W.fx,args:[P.F]},{func:1,ret:P.bV,args:[P.F]},{func:1,ret:P.C,args:[P.dB]},{func:1,ret:W.cp,args:[P.F]},{func:1,ret:W.fy,args:[P.F]},{func:1,ret:W.ci,args:[P.F]},{func:1,ret:W.cj,args:[P.F]},{func:1,ret:P.bs,args:[P.F]},{func:1,ret:P.da,args:[P.ap]},{func:1,ret:P.F,args:[P.bv,P.bv]},{func:1,v:true,args:[P.C]},{func:1,ret:W.f2,args:[P.F]},{func:1,ret:W.bL,args:[P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.k,AnimationEffectTiming:J.k,AnimationTimeline:J.k,AppBannerPromptResult:J.k,BarProp:J.k,Body:J.k,CacheStorage:J.k,CanvasGradient:J.k,CanvasPattern:J.k,CanvasRenderingContext2D:J.k,CHROMIUMValuebuffer:J.k,CircularGeofencingRegion:J.k,Client:J.k,Clients:J.k,CompositorProxy:J.k,ConsoleBase:J.k,Coordinates:J.k,CredentialsContainer:J.k,Crypto:J.k,CryptoKey:J.k,CSS:J.k,DeprecatedStorageInfo:J.k,DeprecatedStorageQuota:J.k,DeviceAcceleration:J.k,DeviceRotationRate:J.k,DirectoryReader:J.k,DOMImplementation:J.k,Iterator:J.k,DOMMatrix:J.k,DOMMatrixReadOnly:J.k,DOMParser:J.k,DOMPoint:J.k,DOMPointReadOnly:J.k,EffectModel:J.k,Stream:J.k,FormData:J.k,GamepadButton:J.k,Geofencing:J.k,GeofencingRegion:J.k,Geolocation:J.k,Geoposition:J.k,Headers:J.k,HMDVRDevice:J.k,IdleDeadline:J.k,ImageBitmap:J.k,ImageBitmapRenderingContext:J.k,InjectedScriptHost:J.k,InputDeviceCapabilities:J.k,IntersectionObserver:J.k,IntersectionObserverEntry:J.k,KeyframeEffect:J.k,MediaDeviceInfo:J.k,MediaDevices:J.k,MediaError:J.k,MediaKeyStatusMap:J.k,MediaKeySystemAccess:J.k,MediaKeys:J.k,MediaMetadata:J.k,MediaSession:J.k,MemoryInfo:J.k,MessageChannel:J.k,Metadata:J.k,MIDIInputMap:J.k,MIDIOutputMap:J.k,MutationObserver:J.k,WebKitMutationObserver:J.k,MutationRecord:J.k,NavigatorStorageUtils:J.k,NodeFilter:J.k,NodeIterator:J.k,NonDocumentTypeChildNode:J.k,NonElementParentNode:J.k,OffscreenCanvas:J.k,PerformanceNavigation:J.k,PerformanceObserver:J.k,PerformanceObserverEntryList:J.k,PerformanceTiming:J.k,Permissions:J.k,PositionError:J.k,PositionSensorVRDevice:J.k,Presentation:J.k,PushManager:J.k,PushMessageData:J.k,PushSubscription:J.k,Range:J.k,ReadableByteStream:J.k,ReadableByteStreamReader:J.k,ReadableStreamReader:J.k,RTCCertificate:J.k,RTCIceCandidate:J.k,mozRTCIceCandidate:J.k,RTCSessionDescription:J.k,mozRTCSessionDescription:J.k,RTCStatsReport:J.k,RTCStatsResponse:J.k,Screen:J.k,ScrollState:J.k,Selection:J.k,SharedArrayBuffer:J.k,SourceInfo:J.k,StorageInfo:J.k,StorageManager:J.k,StorageQuota:J.k,StyleMedia:J.k,StylePropertyMap:J.k,SyncManager:J.k,TextMetrics:J.k,TreeWalker:J.k,UnderlyingSourceBase:J.k,URLSearchParams:J.k,VRDevice:J.k,VREyeParameters:J.k,VRFieldOfView:J.k,VRPositionState:J.k,ValidityState:J.k,VideoPlaybackQuality:J.k,VideoTrack:J.k,WindowClient:J.k,WorkerConsole:J.k,XPathEvaluator:J.k,XPathExpression:J.k,XPathNSResolver:J.k,XPathResult:J.k,XMLSerializer:J.k,XSLTProcessor:J.k,Bluetooth:J.k,BluetoothAdvertisingData:J.k,BluetoothCharacteristicProperties:J.k,BluetoothRemoteGATTServer:J.k,BluetoothRemoteGATTService:J.k,BluetoothUUID:J.k,Cache:J.k,DOMFileSystemSync:J.k,DirectoryEntrySync:J.k,DirectoryReaderSync:J.k,EntrySync:J.k,FileEntrySync:J.k,FileReaderSync:J.k,FileWriterSync:J.k,HTMLAllCollection:J.k,NFC:J.k,PagePopupController:J.k,Request:J.k,Response:J.k,SubtleCrypto:J.k,USBAlternateInterface:J.k,USBConfiguration:J.k,USBDevice:J.k,USBEndpoint:J.k,USBInTransferResult:J.k,USBInterface:J.k,USBIsochronousInTransferPacket:J.k,USBIsochronousInTransferResult:J.k,USBIsochronousOutTransferPacket:J.k,USBIsochronousOutTransferResult:J.k,USBOutTransferResult:J.k,WebKitCSSMatrix:J.k,Worklet:J.k,WorkletGlobalScope:J.k,IDBCursor:J.k,IDBCursorWithValue:J.k,IDBFactory:J.k,IDBKeyRange:J.k,SVGAngle:J.k,SVGAnimatedAngle:J.k,SVGAnimatedBoolean:J.k,SVGAnimatedEnumeration:J.k,SVGAnimatedInteger:J.k,SVGAnimatedLength:J.k,SVGAnimatedLengthList:J.k,SVGAnimatedNumber:J.k,SVGAnimatedNumberList:J.k,SVGAnimatedPreserveAspectRatio:J.k,SVGAnimatedRect:J.k,SVGAnimatedString:J.k,SVGAnimatedTransformList:J.k,SVGMatrix:J.k,SVGPoint:J.k,SVGPreserveAspectRatio:J.k,SVGRect:J.k,SVGUnitTypes:J.k,AudioListener:J.k,AudioParam:J.k,PeriodicWave:J.k,ANGLEInstancedArrays:J.k,ANGLE_instanced_arrays:J.k,WebGLBuffer:J.k,CHROMIUMSubscribeUniform:J.k,WebGLCompressedTextureASTC:J.k,WebGLCompressedTextureATC:J.k,WEBGL_compressed_texture_atc:J.k,WebGLCompressedTextureETC1:J.k,WEBGL_compressed_texture_etc1:J.k,WebGLCompressedTexturePVRTC:J.k,WEBGL_compressed_texture_pvrtc:J.k,WebGLCompressedTextureS3TC:J.k,WEBGL_compressed_texture_s3tc:J.k,WebGLDebugRendererInfo:J.k,WEBGL_debug_renderer_info:J.k,WebGLDebugShaders:J.k,WEBGL_debug_shaders:J.k,WebGLDepthTexture:J.k,WEBGL_depth_texture:J.k,WebGLDrawBuffers:J.k,WEBGL_draw_buffers:J.k,EXTsRGB:J.k,EXT_sRGB:J.k,EXTBlendMinMax:J.k,EXT_blend_minmax:J.k,EXTColorBufferFloat:J.k,EXTDisjointTimerQuery:J.k,EXTFragDepth:J.k,EXT_frag_depth:J.k,EXTShaderTextureLOD:J.k,EXT_shader_texture_lod:J.k,EXTTextureFilterAnisotropic:J.k,EXT_texture_filter_anisotropic:J.k,WebGLFramebuffer:J.k,WebGLLoseContext:J.k,WebGLExtensionLoseContext:J.k,WEBGL_lose_context:J.k,OESElementIndexUint:J.k,OES_element_index_uint:J.k,OESStandardDerivatives:J.k,OES_standard_derivatives:J.k,OESTextureFloat:J.k,OES_texture_float:J.k,OESTextureFloatLinear:J.k,OES_texture_float_linear:J.k,OESTextureHalfFloat:J.k,OES_texture_half_float:J.k,OESTextureHalfFloatLinear:J.k,OES_texture_half_float_linear:J.k,OESVertexArrayObject:J.k,OES_vertex_array_object:J.k,WebGLProgram:J.k,WebGLQuery:J.k,WebGLRenderbuffer:J.k,WebGLRenderingContext:J.k,WebGLSampler:J.k,WebGLShader:J.k,WebGLShaderPrecisionFormat:J.k,WebGLSync:J.k,WebGLTexture:J.k,WebGLTimerQueryEXT:J.k,WebGLTransformFeedback:J.k,WebGLUniformLocation:J.k,WebGLVertexArrayObject:J.k,WebGLVertexArrayObjectOES:J.k,Database:J.k,SQLError:J.k,SQLResultSet:J.k,SQLTransaction:J.k,ArrayBuffer:H.fm,ArrayBufferView:H.eB,DataView:H.nz,Float32Array:H.nA,Float64Array:H.nB,Int16Array:H.nC,Int32Array:H.nD,Int8Array:H.nE,Uint16Array:H.nF,Uint32Array:H.nG,Uint8ClampedArray:H.jz,CanvasPixelArray:H.jz,Uint8Array:H.fn,HTMLBRElement:W.aC,HTMLCanvasElement:W.aC,HTMLContentElement:W.aC,HTMLDListElement:W.aC,HTMLDataListElement:W.aC,HTMLDetailsElement:W.aC,HTMLDialogElement:W.aC,HTMLDivElement:W.aC,HTMLHRElement:W.aC,HTMLHeadElement:W.aC,HTMLHeadingElement:W.aC,HTMLHtmlElement:W.aC,HTMLLIElement:W.aC,HTMLLabelElement:W.aC,HTMLLegendElement:W.aC,HTMLMenuElement:W.aC,HTMLMenuItemElement:W.aC,HTMLMeterElement:W.aC,HTMLModElement:W.aC,HTMLOListElement:W.aC,HTMLOptGroupElement:W.aC,HTMLOptionElement:W.aC,HTMLParagraphElement:W.aC,HTMLPictureElement:W.aC,HTMLPreElement:W.aC,HTMLProgressElement:W.aC,HTMLQuoteElement:W.aC,HTMLShadowElement:W.aC,HTMLSourceElement:W.aC,HTMLStyleElement:W.aC,HTMLTableCaptionElement:W.aC,HTMLTableCellElement:W.aC,HTMLTableDataCellElement:W.aC,HTMLTableHeaderCellElement:W.aC,HTMLTableColElement:W.aC,HTMLTableElement:W.aC,HTMLTableRowElement:W.aC,HTMLTableSectionElement:W.aC,HTMLTitleElement:W.aC,HTMLTrackElement:W.aC,HTMLUListElement:W.aC,HTMLUnknownElement:W.aC,HTMLDirectoryElement:W.aC,HTMLFontElement:W.aC,HTMLFrameElement:W.aC,HTMLMarqueeElement:W.aC,HTMLElement:W.aC,HTMLAnchorElement:W.eW,HTMLAreaElement:W.kx,HTMLAudioElement:W.eZ,AudioTrack:W.cN,AudioTrackList:W.kE,HTMLBaseElement:W.kI,Blob:W.f_,HTMLBodyElement:W.kM,HTMLButtonElement:W.fU,CDATASection:W.eh,CharacterData:W.eh,Comment:W.eh,ProcessingInstruction:W.eh,Text:W.eh,CompositorWorker:W.kY,Credential:W.fX,FederatedCredential:W.fX,PasswordCredential:W.fX,CSSFontFaceRule:W.l3,CSSImportRule:W.l4,CSSKeyframeRule:W.fY,MozCSSKeyframeRule:W.fY,WebKitCSSKeyframeRule:W.fY,CSSKeyframesRule:W.fZ,MozCSSKeyframesRule:W.fZ,WebKitCSSKeyframesRule:W.fZ,CSSPageRule:W.l5,CSSCharsetRule:W.bL,CSSGroupingRule:W.bL,CSSMediaRule:W.bL,CSSNamespaceRule:W.bL,CSSSupportsRule:W.bL,CSSRule:W.bL,CSSStyleDeclaration:W.ej,MSStyleCSSProperties:W.ej,CSS2Properties:W.ej,CSSStyleRule:W.l6,CSSViewportRule:W.l7,DataTransfer:W.lc,DataTransferItem:W.f2,DataTransferItemList:W.ih,Document:W.ek,HTMLDocument:W.ek,XMLDocument:W.ek,DocumentFragment:W.ij,ShadowRoot:W.ij,DOMError:W.ik,FileError:W.ik,DOMException:W.lh,DOMRectReadOnly:W.il,DOMStringList:W.im,DOMStringMap:W.io,DOMTokenList:W.ip,Element:W.dx,HTMLEmbedElement:W.ln,DirectoryEntry:W.h0,Entry:W.h0,FileEntry:W.h0,ErrorEvent:W.lt,AnimationEvent:W.a6,AnimationPlayerEvent:W.a6,ApplicationCacheErrorEvent:W.a6,AutocompleteErrorEvent:W.a6,BeforeInstallPromptEvent:W.a6,BeforeUnloadEvent:W.a6,BlobEvent:W.a6,ClipboardEvent:W.a6,CloseEvent:W.a6,CompositionEvent:W.a6,CustomEvent:W.a6,DeviceLightEvent:W.a6,DeviceMotionEvent:W.a6,DeviceOrientationEvent:W.a6,ExtendableEvent:W.a6,ExtendableMessageEvent:W.a6,FetchEvent:W.a6,FocusEvent:W.a6,FontFaceSetLoadEvent:W.a6,GamepadEvent:W.a6,GeofencingEvent:W.a6,HashChangeEvent:W.a6,InstallEvent:W.a6,KeyboardEvent:W.a6,MediaEncryptedEvent:W.a6,MediaKeyMessageEvent:W.a6,MediaQueryListEvent:W.a6,MediaStreamEvent:W.a6,MediaStreamTrackEvent:W.a6,MessageEvent:W.a6,MIDIConnectionEvent:W.a6,MIDIMessageEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,NotificationEvent:W.a6,PageTransitionEvent:W.a6,PointerEvent:W.a6,PopStateEvent:W.a6,PresentationConnectionAvailableEvent:W.a6,PresentationConnectionCloseEvent:W.a6,ProgressEvent:W.a6,PromiseRejectionEvent:W.a6,PushEvent:W.a6,RelatedEvent:W.a6,RTCDataChannelEvent:W.a6,RTCDTMFToneChangeEvent:W.a6,RTCIceCandidateEvent:W.a6,RTCPeerConnectionIceEvent:W.a6,SecurityPolicyViolationEvent:W.a6,ServicePortConnectEvent:W.a6,ServiceWorkerMessageEvent:W.a6,SpeechRecognitionEvent:W.a6,StorageEvent:W.a6,SyncEvent:W.a6,TextEvent:W.a6,TouchEvent:W.a6,TrackEvent:W.a6,TransitionEvent:W.a6,WebKitTransitionEvent:W.a6,UIEvent:W.a6,WheelEvent:W.a6,ResourceProgressEvent:W.a6,USBConnectionEvent:W.a6,IDBVersionChangeEvent:W.a6,SVGZoomEvent:W.a6,AudioProcessingEvent:W.a6,OfflineAudioCompletionEvent:W.a6,WebGLContextEvent:W.a6,Event:W.a6,InputEvent:W.a6,Animation:W.aV,ApplicationCache:W.aV,DOMApplicationCache:W.aV,OfflineResourceList:W.aV,BatteryManager:W.aV,CanvasCaptureMediaStreamTrack:W.aV,CrossOriginServiceWorkerClient:W.aV,EventSource:W.aV,MediaKeySession:W.aV,MediaQueryList:W.aV,MediaRecorder:W.aV,MediaSource:W.aV,MediaStream:W.aV,MediaStreamTrack:W.aV,MessagePort:W.aV,MIDIAccess:W.aV,NetworkInformation:W.aV,Notification:W.aV,Performance:W.aV,PermissionStatus:W.aV,PresentationAvailability:W.aV,PresentationReceiver:W.aV,PresentationRequest:W.aV,RTCDTMFSender:W.aV,RTCPeerConnection:W.aV,webkitRTCPeerConnection:W.aV,mozRTCPeerConnection:W.aV,ScreenOrientation:W.aV,ServicePortCollection:W.aV,ServiceWorkerContainer:W.aV,ServiceWorkerRegistration:W.aV,SpeechRecognition:W.aV,SpeechSynthesis:W.aV,SpeechSynthesisUtterance:W.aV,WorkerPerformance:W.aV,BluetoothDevice:W.aV,BluetoothRemoteGATTCharacteristic:W.aV,USB:W.aV,EventTarget:W.aV,HTMLFieldSetElement:W.lX,File:W.ce,FileList:W.fa,FileReader:W.lY,DOMFileSystem:W.lZ,FileWriter:W.m_,FontFace:W.m3,FontFaceSet:W.m4,HTMLFormElement:W.iD,Gamepad:W.cp,History:W.mh,HTMLOptionsCollection:W.fc,HTMLCollection:W.fc,HTMLFormControlsCollection:W.iF,XMLHttpRequest:W.e8,XMLHttpRequestUpload:W.hi,XMLHttpRequestEventTarget:W.hi,HTMLIFrameElement:W.mp,ImageData:W.hj,HTMLImageElement:W.fe,HTMLInputElement:W.mv,HTMLKeygenElement:W.mX,CalcLength:W.ht,LengthValue:W.ht,SimpleLength:W.ht,HTMLLinkElement:W.hu,Location:W.ne,HTMLMapElement:W.nj,HTMLVideoElement:W.hB,HTMLMediaElement:W.hB,MediaList:W.jw,HTMLMetaElement:W.np,MIDIOutput:W.nq,MIDIInput:W.hC,MIDIPort:W.hC,MimeType:W.cr,MimeTypeArray:W.jx,Navigator:W.nH,NavigatorUserMediaError:W.nI,Node:W.aP,NodeList:W.jA,RadioNodeList:W.jA,HTMLObjectElement:W.nL,HTMLOutputElement:W.nQ,HTMLParamElement:W.nU,Path2D:W.nW,PerformanceCompositeTiming:W.ea,PerformanceEntry:W.ea,PerformanceMark:W.ea,PerformanceMeasure:W.ea,PerformanceRenderTiming:W.ea,PerformanceResourceTiming:W.ea,Perspective:W.o1,Plugin:W.cg,PluginArray:W.jH,PresentationConnection:W.o7,RTCDataChannel:W.jL,DataChannel:W.jL,HTMLScriptElement:W.fs,HTMLSelectElement:W.jM,ServicePort:W.oC,SharedWorker:W.oF,SharedWorkerGlobalScope:W.oG,HTMLSlotElement:W.oI,SourceBuffer:W.cs,SourceBufferList:W.jO,HTMLSpanElement:W.ft,SpeechGrammar:W.ct,SpeechGrammarList:W.jP,SpeechRecognitionAlternative:W.fu,SpeechRecognitionError:W.oP,SpeechRecognitionResult:W.ci,SpeechSynthesisEvent:W.oQ,SpeechSynthesisVoice:W.oR,Storage:W.oX,CSSStyleSheet:W.cj,StyleSheet:W.cj,KeywordValue:W.ec,NumberValue:W.ec,PositionValue:W.ec,TransformValue:W.ec,StyleValue:W.ec,HTMLTemplateElement:W.pq,HTMLTextAreaElement:W.ps,TextTrack:W.cT,TextTrackCue:W.cK,VTTCue:W.cK,TextTrackCueList:W.pv,TextTrackList:W.pw,TimeRanges:W.pA,Touch:W.cv,TouchList:W.jT,TrackDefault:W.fw,TrackDefaultList:W.jU,Matrix:W.ed,Rotation:W.ed,Skew:W.ed,Translation:W.ed,TransformComponent:W.ed,URL:W.pQ,VideoTrackList:W.pU,VTTRegion:W.fx,VTTRegionList:W.jV,WebSocket:W.pZ,Window:W.jY,DOMWindow:W.jY,Worker:W.q5,CompositorWorkerGlobalScope:W.eP,DedicatedWorkerGlobalScope:W.eP,ServiceWorkerGlobalScope:W.eP,WorkerGlobalScope:W.eP,Attr:W.fy,ClientRect:W.qn,ClientRectList:W.hW,DOMRectList:W.hW,CSSRuleList:W.k4,DocumentType:W.qu,DOMRect:W.qv,GamepadList:W.k8,HTMLFrameSetElement:W.qQ,NamedNodeMap:W.i2,MozNamedAttrMap:W.i2,ServiceWorker:W.re,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kd,WorkerLocation:W.ru,WorkerNavigator:W.rv,IDBDatabase:P.ld,IDBIndex:P.mt,IDBObjectStore:P.nM,IDBOpenDBRequest:P.hN,IDBVersionChangeRequest:P.hN,IDBRequest:P.hN,IDBTransaction:P.pF,SVGAElement:P.ku,SVGAnimateElement:P.eg,SVGAnimateMotionElement:P.eg,SVGAnimateTransformElement:P.eg,SVGAnimationElement:P.eg,SVGSetElement:P.eg,SVGFEBlendElement:P.lw,SVGFEColorMatrixElement:P.lx,SVGFEComponentTransferElement:P.ly,SVGFECompositeElement:P.lz,SVGFEConvolveMatrixElement:P.lA,SVGFEDiffuseLightingElement:P.lB,SVGFEDisplacementMapElement:P.lC,SVGFEFloodElement:P.lD,SVGFEGaussianBlurElement:P.lE,SVGFEImageElement:P.lF,SVGFEMergeElement:P.lG,SVGFEMorphologyElement:P.lH,SVGFEOffsetElement:P.lI,SVGFESpecularLightingElement:P.lJ,SVGFETileElement:P.lK,SVGFETurbulenceElement:P.lL,SVGFilterElement:P.m0,SVGCircleElement:P.cq,SVGClipPathElement:P.cq,SVGDefsElement:P.cq,SVGEllipseElement:P.cq,SVGForeignObjectElement:P.cq,SVGGElement:P.cq,SVGGeometryElement:P.cq,SVGLineElement:P.cq,SVGPathElement:P.cq,SVGPolygonElement:P.cq,SVGPolylineElement:P.cq,SVGRectElement:P.cq,SVGSwitchElement:P.cq,SVGGraphicsElement:P.cq,SVGImageElement:P.mq,SVGLength:P.d5,SVGLengthList:P.n_,SVGMarkerElement:P.nm,SVGMaskElement:P.nn,SVGNumber:P.d7,SVGNumberList:P.nJ,SVGPatternElement:P.o_,SVGPointList:P.o4,SVGScriptElement:P.oz,SVGStringList:P.ph,SVGDescElement:P.cb,SVGDiscardElement:P.cb,SVGFEDistantLightElement:P.cb,SVGFEFuncAElement:P.cb,SVGFEFuncBElement:P.cb,SVGFEFuncGElement:P.cb,SVGFEFuncRElement:P.cb,SVGFEMergeNodeElement:P.cb,SVGFEPointLightElement:P.cb,SVGFESpotLightElement:P.cb,SVGMetadataElement:P.cb,SVGStopElement:P.cb,SVGStyleElement:P.cb,SVGTitleElement:P.cb,SVGComponentTransferFunctionElement:P.cb,SVGElement:P.cb,SVGSVGElement:P.pk,SVGSymbolElement:P.pm,SVGTSpanElement:P.eL,SVGTextElement:P.eL,SVGTextPositioningElement:P.eL,SVGTextContentElement:P.eL,SVGTextPathElement:P.pu,SVGTransform:P.d8,SVGTransformList:P.pG,SVGUseElement:P.pR,SVGViewElement:P.pV,SVGViewSpec:P.pW,SVGLinearGradientElement:P.i_,SVGRadialGradientElement:P.i_,SVGGradientElement:P.i_,SVGCursorElement:P.rb,SVGFEDropShadowElement:P.rc,SVGMPathElement:P.rd,AudioBuffer:P.fO,AudioBufferSourceNode:P.eY,AudioContext:P.fP,webkitAudioContext:P.fP,OfflineAudioContext:P.fP,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.e5,MediaStreamAudioSourceNode:P.e5,OscillatorNode:P.e5,Oscillator:P.e5,AudioSourceNode:P.e5,ConvolverNode:P.l0,WebGLActiveInfo:P.kw,WebGL2RenderingContext:P.ol,WebGL2RenderingContextBase:P.rt,SQLResultSetRowList:P.jQ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jy.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hD.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
W.h1.$nativeSuperclassTag="EventTarget"
W.h4.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"
W.h5.$nativeSuperclassTag="EventTarget"
W.h3.$nativeSuperclassTag="EventTarget"
W.h6.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.yg(T.wX(),b)},[])
else (function(b){H.yg(T.wX(),b)})([])})})()
//# sourceMappingURL=MemoNewspostController.dart.js.map
