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
a[c]=function(){a[c]=function(){H.rv(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.m4"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.m4"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.m4(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={lK:function lK(a){this.a=a},
dF:function(a,b,c,d){if(!!J.ai(a).$isL)return new H.el(a,b,[c,d])
return new H.dE(a,b,[c,d])},
lI:function(){return new P.ch("No element")},
pI:function(){return new P.ch("Too many elements")},
pH:function(){return new P.ch("Too few elements")},
fc:function(a,b,c,d){if(c-b<=32)H.qG(a,b,c,d)
else H.qF(a,b,c,d)},
qG:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bh(a);t<=c;++t){r=s.w(a,t)
q=t
while(!0){if(!(q>b&&J.bo(d.$2(s.w(a,q-1),r),0)))break
p=q-1
s.h(a,q,s.w(a,p))
q=p}s.h(a,q,r)}},
qF:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.ab(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.ab(a3+a4,2)
p=q-t
o=q+t
n=J.bh(a2)
m=n.w(a2,s)
l=n.w(a2,p)
k=n.w(a2,q)
j=n.w(a2,o)
i=n.w(a2,r)
if(J.bo(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bo(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bo(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bo(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bo(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bo(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bo(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bo(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bo(a5.$2(j,i),0)){h=i
i=j
j=h}n.h(a2,s,m)
n.h(a2,q,k)
n.h(a2,r,i)
n.h(a2,p,n.w(a2,a3))
n.h(a2,o,n.w(a2,a4))
g=a3+1
f=a4-1
if(J.aU(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.w(a2,e)
c=a5.$2(d,l)
b=J.ai(c)
if(b.R(c,0))continue
if(b.aL(c,0)){if(e!==g){n.h(a2,e,n.w(a2,g))
n.h(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.w(a2,f),l)
b=J.e8(c)
if(b.aK(c,0)){--f
continue}else{a=f-1
if(b.aL(c,0)){n.h(a2,e,n.w(a2,g))
a0=g+1
n.h(a2,g,n.w(a2,f))
n.h(a2,f,d)
f=a
g=a0
break}else{n.h(a2,e,n.w(a2,f))
n.h(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.w(a2,e)
if(J.fy(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.w(a2,g))
n.h(a2,g,d)}++g}else if(J.bo(a5.$2(d,j),0))for(;!0;)if(J.bo(a5.$2(n.w(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fy(a5.$2(n.w(a2,f),l),0)){n.h(a2,e,n.w(a2,g))
a0=g+1
n.h(a2,g,n.w(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.w(a2,f))
n.h(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.h(a2,a3,n.w(a2,b))
n.h(a2,b,l)
b=f+1
n.h(a2,a4,n.w(a2,b))
n.h(a2,b,j)
H.fc(a2,a3,g-2,a5)
H.fc(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.aU(a5.$2(n.w(a2,g),l),0);)++g
for(;J.aU(a5.$2(n.w(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.w(a2,e)
if(J.aU(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.w(a2,g))
n.h(a2,g,d)}++g}else if(J.aU(a5.$2(d,j),0))for(;!0;)if(J.aU(a5.$2(n.w(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fy(a5.$2(n.w(a2,f),l),0)){n.h(a2,e,n.w(a2,g))
a0=g+1
n.h(a2,g,n.w(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.w(a2,f))
n.h(a2,f,d)}f=a
break}}H.fc(a2,g,f,a5)}else H.fc(a2,g,f,a5)},
L:function L(){},
ct:function ct(){},
eW:function eW(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dE:function dE(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
el:function el(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eX:function eX(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
d3:function d3(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bJ:function bJ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fj:function fj(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ew:function ew(){},
ft:function(a,b){var t=a.b_(b)
if(!u.globalState.d.cy)u.globalState.f.b7()
return t},
nN:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ai(s).$isR)throw H.C(P.mj("Arguments to main must be a List: "+H.t(s)))
u.globalState=new H.kB(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$mL()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.kc(P.lO(null,H.cG),0)
r=P.Q
s.z=new H.m(0,null,null,null,null,null,0,[r,H.d9])
s.ch=new H.m(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.kA()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.p5,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.qY)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bm(null,null,null,r)
p=new H.d6(0,null,!1)
o=new H.d9(s,new H.m(0,null,null,null,null,null,0,[r,H.d6]),q,u.createNewIsolate(),p,new H.bQ(H.li()),new H.bQ(H.li()),!1,!1,[],P.bm(null,null,null,null),null,null,!1,!0,P.bm(null,null,null,null))
q.j(0,0)
o.c2(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.dd(a,{func:1,args:[,]}))o.b_(new H.lj(t,a))
else if(H.dd(a,{func:1,args:[,,]}))o.b_(new H.lk(t,a))
else o.b_(a)
u.globalState.f.b7()},
qY:function(a){var t=P.dD(["command","print","msg",a])
return new H.bL(!0,P.e0(null,P.Q)).aj(t)},
p7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.p8()
return},
p8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.C(new P.b1("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.C(new P.b1('Cannot extract URI from "'+t+'"'))},
p5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.cF(!0,[]).aB(b.data)
s=J.bh(t)
switch(s.w(t,"command")){case"start":u.globalState.b=s.w(t,"id")
r=s.w(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.w(t,"args")
o=new H.cF(!0,[]).aB(s.w(t,"msg"))
n=s.w(t,"isSpawnUri")
m=s.w(t,"startPaused")
l=new H.cF(!0,[]).aB(s.w(t,"replyTo"))
s=u.globalState.a++
k=P.Q
j=P.bm(null,null,null,k)
i=new H.d6(0,null,!1)
h=new H.d9(s,new H.m(0,null,null,null,null,null,0,[k,H.d6]),j,u.createNewIsolate(),i,new H.bQ(H.li()),new H.bQ(H.li()),!1,!1,[],P.bm(null,null,null,null),null,null,!1,!0,P.bm(null,null,null,null))
j.j(0,0)
h.c2(0,i)
u.globalState.f.a.ay(new H.cG(h,new H.hK(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.b7()
break
case"spawn-worker":break
case"message":if(s.w(t,"port")!=null)J.di(s.w(t,"port"),s.w(t,"msg"))
u.globalState.f.b7()
break
case"close":u.globalState.ch.ah(0,$.$get$mM().w(0,a))
a.terminate()
u.globalState.f.b7()
break
case"log":H.p4(s.w(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.dD(["command","print","msg",t])
k=new H.bL(!0,P.e0(null,P.Q)).aj(k)
s.toString
self.postMessage(k)}else P.mc(s.w(t,"msg"))
break
case"error":throw H.C(s.w(t,"msg"))}},
p4:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.dD(["command","log","msg",a])
r=new H.bL(!0,P.e0(null,P.Q)).aj(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.b3(q)
t=H.bB(q)
s=P.h3(t)
throw H.C(s)}},
p6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.n7=$.n7+("_"+s)
$.n8=$.n8+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.di(f,["spawned",new H.da(s,r),q,t.r])
r=new H.hL(a,b,c,d,t)
if(e===!0){t.cu(q,q)
u.globalState.f.a.ay(new H.cG(t,r,"start isolate"))}else r.$0()},
qL:function(a,b){var t=new H.jI(!0,!1,null)
t.dj(a,b)
return t},
r0:function(a){return new H.cF(!0,[]).aB(new H.bL(!1,P.e0(null,P.Q)).aj(a))},
lj:function lj(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
d9:function d9(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
kw:function kw(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a){this.a=a},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(){},
hK:function hK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hL:function hL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k2:function k2(){},
da:function da(b,a){this.b=b
this.a=a},
kD:function kD(a,b){this.a=a
this.b=b},
e3:function e3(b,c,a){this.b=b
this.c=c
this.a=a},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a},
bL:function bL(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
rh:function(a){return u.types[a]},
ro:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ai(a).$isby},
t:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aP(a)
if(typeof t!=="string")throw H.C(H.bM(a))
return t},
qd:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.j0(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cu:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
n6:function(a,b){return b.$1(a)},
pZ:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.n6(a,c)
if(3>=t.length)return H.V(t,3)
s=t[3]
if(b<2||b>36)throw H.C(P.cf(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.e.c4(q,o)|32)>r)return H.n6(a,c)}return parseInt(a,b)},
n9:function(a){var t,s,r,q,p,o,n,m
t=J.ai(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.v||!!J.ai(a).$iscD){p=C.p(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.c4(q,0)===36)q=C.e.bs(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.ma(H.fx(a),0,null),u.mangledGlobalNames)},
iU:function(a){return"Instance of '"+H.n9(a)+"'"},
lQ:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.C(H.bM(a))
return a[b]},
na:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.C(H.bM(a))
a[b]=c},
de:function(a){throw H.C(H.bM(a))},
V:function(a,b){if(a==null)J.dg(a)
throw H.C(H.aG(a,b))},
aG:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bP(!0,b,"index",null)
t=J.dg(a)
if(!(b<0)){if(typeof t!=="number")return H.de(t)
s=b>=t}else s=!0
if(s)return P.eB(b,a,"index",null,t)
return P.iZ(b,"index",null)},
bM:function(a){return new P.bP(!0,a,null,null)},
C:function(a){var t
if(a==null)a=new P.f4()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.nP})
t.name=""}else t.toString=H.nP
return t},
nP:function(){return J.aP(this.dartException)},
aA:function(a){throw H.C(a)},
cJ:function(a){throw H.C(new P.bq(a))},
bZ:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.jM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
jN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
nn:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lM:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.i2(a,s,t?null:b.receiver)},
b3:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.lm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.cq(r,16)&8191)===10)switch(q){case 438:return t.$1(H.lM(H.t(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return t.$1(new H.f3(p,null))}}if(a instanceof TypeError){o=$.$get$nh()
n=$.$get$ni()
m=$.$get$nj()
l=$.$get$nk()
k=$.$get$no()
j=$.$get$np()
i=$.$get$nm()
$.$get$nl()
h=$.$get$nr()
g=$.$get$nq()
f=o.as(s)
if(f!=null)return t.$1(H.lM(s,f))
else{f=n.as(s)
if(f!=null){f.method="call"
return t.$1(H.lM(s,f))}else{f=m.as(s)
if(f==null){f=l.as(s)
if(f==null){f=k.as(s)
if(f==null){f=j.as(s)
if(f==null){f=i.as(s)
if(f==null){f=l.as(s)
if(f==null){f=h.as(s)
if(f==null){f=g.as(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.f3(s,f==null?null:f.method))}}return t.$1(new H.jO(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.fe()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.bP(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.fe()
return a},
bB:function(a){var t
if(a==null)return new H.fr(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fr(a,null)},
rs:function(a){if(a==null||typeof a!='object')return J.bO(a)
else return H.cu(a)},
rf:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
rn:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ft(b,new H.l9(a))
case 1:return H.ft(b,new H.la(a,d))
case 2:return H.ft(b,new H.lb(a,d,e))
case 3:return H.ft(b,new H.lc(a,d,e,f))
case 4:return H.ft(b,new H.ld(a,d,e,f,g))}throw H.C(P.h3("Unsupported number of arguments for wrapped closure"))},
e7:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.rn)
a.$identity=t
return t},
oz:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ai(c).$isR){t.$reflectionInfo=c
r=H.qd(t).r}else r=c
q=d?Object.create(new H.jn().constructor.prototype):Object.create(new H.dj(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.bR
$.bR=J.df(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.mm(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.rh,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.ml:H.lo
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.C("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.mm(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
ow:function(a,b,c,d){var t=H.lo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
mm:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.oy(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.ow(s,!q,t,b)
if(s===0){q=$.bR
$.bR=J.df(q,1)
o="self"+H.t(q)
q="return function(){var "+o+" = this."
p=$.dk
if(p==null){p=H.fO("self")
$.dk=p}return new Function(q+H.t(p)+";return "+o+"."+H.t(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bR
$.bR=J.df(q,1)
n+=H.t(q)
q="return function("+n+"){return this."
p=$.dk
if(p==null){p=H.fO("self")
$.dk=p}return new Function(q+H.t(p)+"."+H.t(t)+"("+n+");}")()},
ox:function(a,b,c,d){var t,s
t=H.lo
s=H.ml
switch(b?-1:a){case 0:throw H.C(new H.j5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
oy:function(a,b){var t,s,r,q,p,o,n,m
t=H.ov()
s=$.mk
if(s==null){s=H.fO("receiver")
$.mk=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.ox(q,!o,r,b)
if(q===1){s="return function(){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+");"
o=$.bR
$.bR=J.df(o,1)
return new Function(s+H.t(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+", "+m+");"
o=$.bR
$.bR=J.df(o,1)
return new Function(s+H.t(o)+"}")()},
m4:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ai(c).$isR){c.fixed$length=Array
t=c}else t=c
return H.oz(a,b,t,!!d,e,f)},
lo:function(a){return a.a},
ml:function(a){return a.c},
ov:function(){var t=$.dk
if(t==null){t=H.fO("self")
$.dk=t}return t},
fO:function(a){var t,s,r,q,p
t=new H.dj("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nH:function(a){var t=J.ai(a)
return"$S" in t?t.$S():null},
dd:function(a,b){var t
if(a==null)return!1
t=H.nH(a)
return t==null?!1:H.m9(t,b)},
rv:function(a){throw H.C(new P.fV(a))},
li:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
nI:function(a){return u.getIsolateTag(a)},
az:function(a){return new H.ci(a,null)},
a:function(a,b){a.$ti=b
return a},
fx:function(a){if(a==null)return
return a.$ti},
nJ:function(a,b){return H.md(a["$as"+H.t(b)],H.fx(a))},
ak:function(a,b,c){var t=H.nJ(a,b)
return t==null?null:t[c]},
x:function(a,b){var t=H.fx(a)
return t==null?null:t[b]},
bN:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ma(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.t(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bN(t,b)
return H.r1(a,b)}return"unknown-reified-type"},
r1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bN(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bN(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bN(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.re(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bN(l[j],b)+(" "+H.t(j))}q+="}"}return"("+q+") => "+t},
ma:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.dT("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.V=p+", "
o=a[s]
if(o!=null)q=!1
p=t.V+=H.bN(o,c)}return q?"":"<"+t.E(0)+">"},
l4:function(a){var t,s
if(a instanceof H.cO){t=H.nH(a)
if(t!=null)return H.bN(t,null)}s=J.ai(a).constructor.builtin$cls
if(a==null)return s
return s+H.ma(a.$ti,0,null)},
md:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
fv:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fx(a)
s=J.ai(a)
if(s[b]==null)return!1
return H.nF(H.md(s[d],t),c)},
nF:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bi(a[s],b[s]))return!1
return!0},
m5:function(a,b,c){return a.apply(b,H.nJ(b,c))},
rc:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="as"||b.builtin$cls==="bF"
if(b==null)return!0
t=H.fx(a)
a=J.ai(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.m9(r.apply(a,null),b)}return H.bi(s,b)},
bi:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bF")return!0
if('func' in b)return H.m9(a,b)
if('func' in a)return b.builtin$cls==="rB"||b.builtin$cls==="as"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.bN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.nF(H.md(o,t),r)},
nE:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bi(t,p)||H.bi(p,t)))return!1}return!0},
r7:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bi(p,o)||H.bi(o,p)))return!1}return!0},
m9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bi(t,s)||H.bi(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.nE(r,q,!1))return!1
if(!H.nE(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bi(i,h)||H.bi(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bi(i,h)||H.bi(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bi(i,h)||H.bi(h,i)))return!1}}return H.r7(a.named,b.named)},
rL:function(a){var t=$.m7
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
rK:function(a){return H.cu(a)},
rJ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rp:function(a){var t,s,r,q,p,o
t=$.m7.$1(a)
s=$.l1[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.l8[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.nD.$2(a,t)
if(t!=null){s=$.l1[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.l8[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.mb(r)
$.l1[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.l8[t]=r
return r}if(p==="-"){o=H.mb(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nK(a,r)
if(p==="*")throw H.C(new P.fg(t))
if(u.leafTags[t]===true){o=H.mb(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nK(a,r)},
nK:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.lh(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
mb:function(a){return J.lh(a,!1,null,!!a.$isby)},
rr:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.lh(t,!1,null,!!t.$isby)
else return J.lh(t,c,null,null)},
rl:function(){if(!0===$.m8)return
$.m8=!0
H.rm()},
rm:function(){var t,s,r,q,p,o,n,m
$.l1=Object.create(null)
$.l8=Object.create(null)
H.rk()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.nL.$1(p)
if(o!=null){n=H.rr(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
rk:function(){var t,s,r,q,p,o,n
t=C.x()
t=H.dc(C.y,H.dc(C.z,H.dc(C.o,H.dc(C.o,H.dc(C.B,H.dc(C.A,H.dc(C.C(C.p),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.m7=new H.l5(p)
$.nD=new H.l6(o)
$.nL=new H.l7(n)},
dc:function(a,b){return a(b)||b},
ru:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
j0:function j0(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
jM:function jM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f3:function f3(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
lm:function lm(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
l9:function l9(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
lb:function lb(a,b,c){this.a=a
this.b=b
this.c=c},
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ld:function ld(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cO:function cO(){},
jB:function jB(){},
jn:function jn(){},
dj:function dj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a){this.a=a},
ci:function ci(a,b){this.a=a
this.b=b},
m:function m(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
i1:function i1(a){this.a=a},
ib:function ib(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ic:function ic(a,$ti){this.a=a
this.$ti=$ti},
id:function id(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
dI:function dI(){},
d4:function d4(){},
iw:function iw(){},
eY:function eY(){},
eZ:function eZ(){},
dJ:function dJ(){},
dL:function dL(){},
f_:function f_(){},
dK:function dK(){},
dM:function dM(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
f0:function f0(){},
iE:function iE(){},
re:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
rt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eS.prototype
return J.i0.prototype}if(typeof a=="string")return J.cr.prototype
if(a==null)return J.eT.prototype
if(typeof a=="boolean")return J.i_.prototype
if(a.constructor==Array)return J.cq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
return a}if(a instanceof P.as)return a
return J.l3(a)},
lh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l3:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.m8==null){H.rl()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.C(new P.fg("Return interceptor for "+H.t(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$lL()]
if(p!=null)return p
p=H.rp(a)
if(p!=null)return p
if(typeof a=="function")return C.D
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,$.$get$lL(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
bh:function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(a.constructor==Array)return J.cq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
return a}if(a instanceof P.as)return a
return J.l3(a)},
fw:function(a){if(a==null)return a
if(a.constructor==Array)return J.cq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
return a}if(a instanceof P.as)return a
return J.l3(a)},
e8:function(a){if(typeof a=="number")return J.d2.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.cD.prototype
return a},
l2:function(a){if(typeof a=="number")return J.d2.prototype
if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.cD.prototype
return a},
rg:function(a){if(typeof a=="string")return J.cr.prototype
if(a==null)return a
if(!(a instanceof P.as))return J.cD.prototype
return a},
b2:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cs.prototype
return a}if(a instanceof P.as)return a
return J.l3(a)},
df:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l2(a).aw(a,b)},
aU:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).R(a,b)},
bo:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.e8(a).aK(a,b)},
fy:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.e8(a).aL(a,b)},
me:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l2(a).ax(a,b)},
mf:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ro(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).w(a,b)},
nQ:function(a,b,c,d){return J.b2(a).dv(a,b,c,d)},
nR:function(a,b,c,d){return J.b2(a).dT(a,b,c,d)},
nS:function(a,b,c){return J.e8(a).a4(a,b,c)},
fz:function(a,b){return J.l2(a).aA(a,b)},
fA:function(a,b,c){return J.bh(a).e6(a,b,c)},
nT:function(a,b){return J.fw(a).av(a,b)},
fB:function(a){return J.e8(a).b0(a)},
mg:function(a){return J.b2(a).ge2(a)},
e9:function(a){return J.b2(a).gaF(a)},
bO:function(a){return J.ai(a).ga6(a)},
ln:function(a){return J.b2(a).gb4(a)},
bp:function(a){return J.fw(a).gW(a)},
dg:function(a){return J.bh(a).gJ(a)},
dh:function(a){return J.b2(a).gN(a)},
nU:function(a){return J.b2(a).gey(a)},
nV:function(a){return J.b2(a).geB(a)},
nW:function(a){return J.b2(a).geF(a)},
mh:function(a){return J.ai(a).ga5(a)},
nX:function(a){return J.b2(a).geM(a)},
mi:function(a,b){return J.fw(a).an(a,b)},
nY:function(a){return J.fw(a).eH(a)},
di:function(a,b){return J.b2(a).bq(a,b)},
nZ:function(a,b){return J.b2(a).sbk(a,b)},
o_:function(a){return J.fw(a).ao(a)},
o0:function(a){return J.rg(a).eO(a)},
aP:function(a){return J.ai(a).E(a)},
K:function K(){},
i_:function i_(){},
eT:function eT(){},
dC:function dC(){},
iR:function iR(){},
cD:function cD(){},
cs:function cs(){},
cq:function cq($ti){this.$ti=$ti},
lJ:function lJ($ti){this.$ti=$ti},
fH:function fH(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
d2:function d2(){},
eS:function eS(){},
i0:function i0(){},
cr:function cr(){}},P={
qO:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.r8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.e7(new P.jZ(t),1)).observe(s,{childList:true})
return new P.jY(t,s,r)}else if(self.setImmediate!=null)return P.r9()
return P.ra()},
qP:function(a){++u.globalState.f.b
self.scheduleImmediate(H.e7(new P.k_(a),0))},
qQ:function(a){++u.globalState.f.b
self.setImmediate(H.e7(new P.k0(a),0))},
qR:function(a){P.lV(C.n,a)},
ny:function(a,b){if(H.dd(a,{func:1,args:[P.bF,P.bF]})){b.toString
return a}else{b.toString
return a}},
qT:function(a,b){var t,s,r
b.a=1
try{a.cO(new P.kj(b),new P.kk(b))}catch(r){t=H.b3(r)
s=H.bB(r)
P.nM(new P.kl(b,t,s))}},
nt:function(a,b){var t,s,r
for(;a.gdP();)a=a.c
t=a.gbE()
s=b.c
if(t){b.c=null
r=b.bh(s)
b.a=a.a
b.c=a.c
P.dY(b,r)}else{b.a=2
b.c=a
a.ck(s)}},
dY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.e9(p)
n=p.gaE()
s.toString
P.fu(null,null,s,o,n)}return}for(;b.gbH()!=null;b=m){m=b.a
b.a=null
P.dY(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gcD()||b.gcC()){k=b.ge_()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.e9(p)
n=p.gaE()
s.toString
P.fu(null,null,s,o,n)
return}j=$.al
if(j==null?k!=null:j!==k)$.al=k
else j=null
if(b.gcC())new P.kp(t,r,q,b).$0()
else if(s){if(b.gcD())new P.ko(r,b,l).$0()}else if(b.geo())new P.kn(t,r,b).$0()
if(j!=null)$.al=j
s=r.b
if(!!J.ai(s).$isdw){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bh(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.nt(s,i)
return}}i=b.b
b=i.bJ()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
r3:function(){var t,s
for(;t=$.db,t!=null;){$.e5=null
s=t.b
$.db=s
if(s==null)$.e4=null
t.a.$0()}},
r5:function(){$.m2=!0
try{P.r3()}finally{$.e5=null
$.m2=!1
if($.db!=null)$.$get$lY().$1(P.nG())}},
nC:function(a){var t=new P.fm(a,null)
if($.db==null){$.e4=t
$.db=t
if(!$.m2)$.$get$lY().$1(P.nG())}else{$.e4.b=t
$.e4=t}},
r4:function(a){var t,s,r
t=$.db
if(t==null){P.nC(a)
$.e5=$.e4
return}s=new P.fm(a,null)
r=$.e5
if(r==null){s.b=t
$.e5=s
$.db=s}else{s.b=r.b
r.b=s
$.e5=s
if(s.b==null)$.e4=s}},
nM:function(a){var t=$.al
if(C.c===t){P.kZ(null,null,C.c,a)
return}t.toString
P.kZ(null,null,t,t.bM(a,!0))},
qS:function(a,b,c,d,e,f,g){var t,s
t=$.al
s=e?1:0
s=new P.dX(a,null,null,null,null,t,s,null,null,[f,g])
s.dl(b,c,d,e,g)
s.dn(a,b,c,d,e,f,g)
return s},
r_:function(a,b,c){$.al.toString
a.b9(b,c)},
qM:function(a,b){var t=$.al
if(t===C.c){t.toString
return P.lV(a,b)}return P.lV(a,t.bM(b,!0))},
lV:function(a,b){var t=C.b.ab(a.a,1000)
return H.qL(t<0?0:t,b)},
qN:function(){return $.al},
fu:function(a,b,c,d,e){var t={}
t.a=d
P.r4(new P.kY(t,e))},
nz:function(a,b,c,d){var t,s
s=$.al
if(s===c)return d.$0()
$.al=c
t=s
try{s=d.$0()
return s}finally{$.al=t}},
nB:function(a,b,c,d,e){var t,s
s=$.al
if(s===c)return d.$1(e)
$.al=c
t=s
try{s=d.$1(e)
return s}finally{$.al=t}},
nA:function(a,b,c,d,e,f){var t,s
s=$.al
if(s===c)return d.$2(e,f)
$.al=c
t=s
try{s=d.$2(e,f)
return s}finally{$.al=t}},
kZ:function(a,b,c,d){var t=C.c!==c
if(t)d=c.bM(d,!(!t||!1))
P.nC(d)},
jZ:function jZ(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
fo:function fo(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bK:function bK(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ki:function ki(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kq:function kq(a){this.a=a},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b){this.a=a
this.b=b},
cB:function cB(){},
jr:function jr(a){this.a=a},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jq:function jq(){},
bA:function bA(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
fn:function fn(){},
k6:function k6(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
k8:function k8(b,c,a){this.b=b
this.c=c
this.a=a},
k7:function k7(){},
kE:function kE(){},
kF:function kF(a,b){this.a=a
this.b=b},
kS:function kS(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
dW:function dW(){},
dX:function dX(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
kC:function kC(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
cM:function cM(a,b){this.a=a
this.b=b},
kX:function kX(){},
kY:function kY(a,b){this.a=a
this.b=b},
kH:function kH(){},
kI:function kI(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b},
kK:function kK(a,b){this.a=a
this.b=b},
qU:function(a,b){var t=a[b]
return t===a?null:t},
m0:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
m_:function(){var t=Object.create(null)
P.m0(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
lN:function(a,b){return new H.m(0,null,null,null,null,null,0,[a,b])},
n4:function(){return new H.m(0,null,null,null,null,null,0,[null,null])},
dD:function(a){return H.rf(a,new H.m(0,null,null,null,null,null,0,[null,null]))},
e0:function(a,b){return new P.fq(0,null,null,null,null,null,0,[a,b])},
qX:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
k:function(a,b,c,d,e){return new P.ks(0,null,null,null,null,[d,e])},
hZ:function(a,b,c){var t,s
if(P.m3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$e6()
s.push(a)
try{P.r2(a,t)}finally{if(0>=s.length)return H.V(s,-1)
s.pop()}s=P.ng(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eQ:function(a,b,c){var t,s,r
if(P.m3(a))return b+"..."+c
t=new P.dT(b)
s=$.$get$e6()
s.push(a)
try{r=t
r.V=P.ng(r.gV(),a,", ")}finally{if(0>=s.length)return H.V(s,-1)
s.pop()}s=t
s.V=s.gV()+c
s=t.gV()
return s.charCodeAt(0)==0?s:s},
m3:function(a){var t,s
for(t=0;s=$.$get$e6(),t<s.length;++t)if(a===s[t])return!0
return!1},
r2:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bp(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.M())return
q=H.t(t.gO())
b.push(q)
s+=q.length+2;++r}if(!t.M()){if(r<=5)return
if(0>=b.length)return H.V(b,-1)
p=b.pop()
if(0>=b.length)return H.V(b,-1)
o=b.pop()}else{n=t.gO();++r
if(!t.M()){if(r<=4){b.push(H.t(n))
return}p=H.t(n)
if(0>=b.length)return H.V(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gO();++r
for(;t.M();n=m,m=l){l=t.gO();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.V(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.t(n)
p=H.t(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.V(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bm:function(a,b,c,d){return new P.kx(0,null,null,null,null,null,0,[d])},
eU:function(a,b){var t,s
t=P.bm(null,null,null,b)
for(s=J.bp(a);s.M();)t.j(0,s.gO())
return t},
pJ:function(a){var t,s,r
t={}
if(P.m3(a))return"{...}"
s=new P.dT("")
try{$.$get$e6().push(a)
r=s
r.V=r.gV()+"{"
t.a=!0
a.cB(0,new P.il(t,s))
t=s
t.V=t.gV()+"}"}finally{t=$.$get$e6()
if(0>=t.length)return H.V(t,-1)
t.pop()}t=s.gV()
return t.charCodeAt(0)==0?t:t},
lO:function(a,b){var t=new P.ie(null,0,0,0,[b])
t.di(a,b)
return t},
ks:function ks(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
ku:function ku(a){this.a=a},
kt:function kt(a,$ti){this.a=a
this.$ti=$ti},
fp:function fp(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fq:function fq(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kx:function kx(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kv:function kv(){},
d1:function d1(){},
eV:function eV(){},
dN:function dN(){},
bz:function bz(){},
il:function il(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kz:function kz(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
je:function je(){},
jd:function jd(){},
ng:function(a,b,c){var t=J.bp(b)
if(!t.M())return a
if(c.length===0){do a+=H.t(t.gO())
while(t.M())}else{a+=H.t(t.gO())
for(;t.M();)a=a+c+H.t(t.gO())}return a},
oC:function(a,b){return J.fz(a,b)},
mz:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aP(a)
if(typeof a==="string")return JSON.stringify(a)
return P.oG(a)},
oG:function(a){var t=J.ai(a)
if(!!t.$iscO)return t.E(a)
return H.iU(a)},
mj:function(a){return new P.bP(!1,null,null,a)},
fG:function(a,b,c){return new P.bP(!0,a,b,c)},
iZ:function(a,b,c){return new P.f8(null,null,!0,a,b,"Value not in range")},
cf:function(a,b,c,d,e){return new P.f8(b,c,!0,a,d,"Invalid value")},
ne:function(a,b,c,d,e,f){if(0>a||a>c)throw H.C(P.cf(a,0,c,"start",f))
if(a>b||b>c)throw H.C(P.cf(b,a,c,"end",f))
return b},
eB:function(a,b,c,d,e){var t=e!=null?e:J.dg(b)
return new P.hH(b,t,!0,a,c,"Index out of range")},
h3:function(a){return new P.kh(a)},
cc:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bp(a);s.M();)t.push(s.gO())
if(b)return t
t.fixed$length=Array
return t},
d:function(a,b){var t=P.cc(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
mc:function(a){H.rt(H.t(a))},
c_:function c_(){},
aB:function aB(){},
F:function F(){},
c1:function c1(a){this.a=a},
h_:function h_(){},
h0:function h0(){},
cn:function cn(){},
f4:function f4(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a){this.a=a},
fg:function fg(a){this.a=a},
ch:function ch(a){this.a=a},
bq:function bq(a){this.a=a},
iL:function iL(){},
fe:function fe(){},
fV:function fV(a){this.a=a},
kh:function kh(a){this.a=a},
h4:function h4(a,be,$ti){this.a=a
this.be=be
this.$ti=$ti},
Q:function Q(){},
z:function z(){},
eR:function eR(){},
R:function R(){},
bF:function bF(){},
bC:function bC(){},
as:function as(){},
cy:function cy(){},
A:function A(){},
dT:function dT(V){this.V=V},
qZ:function(a){var t=new P.kG(0,0)
t.ds(a)
return t},
kG:function kG(a,b){this.a=a
this.b=b},
fC:function fC(){},
cj:function cj(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
ht:function ht(){},
aN:function aN(){},
hG:function hG(){},
im:function im(){},
io:function io(){},
iQ:function iQ(){},
dP:function dP(){},
ay:function ay(){},
jv:function jv(){},
jx:function jx(){},
cC:function cC(){},
jF:function jF(){},
jP:function jP(){},
jQ:function jQ(){},
dZ:function dZ(){},
kL:function kL(){},
kM:function kM(){},
kN:function kN(){},
lp:function(){var t=$.mu
if(t==null){t=J.fA(window.navigator.userAgent,"Opera",0)
$.mu=t}return t},
mw:function(){var t=$.mv
if(t==null){t=P.lp()!==!0&&J.fA(window.navigator.userAgent,"WebKit",0)
$.mv=t}return t},
oE:function(){var t,s
t=$.mr
if(t!=null)return t
s=$.ms
if(s==null){s=J.fA(window.navigator.userAgent,"Firefox",0)
$.ms=s}if(s)t="-moz-"
else{s=$.mt
if(s==null){s=P.lp()!==!0&&J.fA(window.navigator.userAgent,"Trident/",0)
$.mt=s}if(s)t="-ms-"
else t=P.lp()===!0?"-o-":"-webkit-"}$.mr=t
return t}},W={
oD:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
oF:function(a,b,c){var t,s
t=document.body
s=(t&&C.l).aq(t,a,b,c)
s.toString
t=new H.bJ(new W.bg(s),new W.l_(),[W.ac])
return t.gaN(t)},
dm:function(a){var t,s,r
t="element tag unavailable"
try{s=J.nX(a)
if(typeof s==="string")t=a.tagName}catch(r){H.b3(r)}return t},
mK:function(a,b,c){var t=document.createElement("img")
return t},
cH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ns:function(a,b,c,d,e){var t=W.r6(new W.kg(c))
t=new W.kf(0,a,b,t,!1,[e])
t.dm(a,b,c,!1,e)
return t},
nu:function(a){var t,s
t=document.createElement("a")
s=new W.kO(t,window.location)
s=new W.e_(s)
s.dr(a)
return s},
qV:function(a,b,c,d){return!0},
qW:function(a,b,c,d){var t,s,r,q,p
t=d.gcS()
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
nx:function(){var t=P.A
t=new W.kU(P.eU(C.f,t),P.bm(null,null,null,t),P.bm(null,null,null,t),P.bm(null,null,null,t),null)
t.dt(null,new H.d3(C.f,new W.kV(),[H.x(C.f,0),null]),["TEMPLATE"],null)
return t},
r6:function(a){var t=$.al
if(t===C.c)return a
return t.e3(a,!0)},
aa:function aa(){},
fE:function fE(){},
fF:function fF(){},
fL:function fL(){},
ec:function ec(){},
cN:function cN(){},
fQ:function fQ(){},
ck:function ck(){},
ee:function ee(){},
cm:function cm(){},
eC:function eC(){},
fT:function fT(){},
ei:function ei(){},
ej:function ej(){},
fW:function fW(){},
ek:function ek(){},
bc:function bc(){},
l_:function l_(){},
h1:function h1(){},
h2:function h2(){},
P:function P(){},
dn:function dn(){},
hr:function hr(){},
hs:function hs(){},
ez:function ez(){},
hw:function hw(){},
hF:function hF(){},
hI:function hI(){},
i5:function i5(){},
ia:function ia(){},
ig:function ig(){},
ik:function ik(){},
dG:function dG(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
dH:function dH(){},
bW:function bW(){},
iF:function iF(){},
iG:function iG(){},
bg:function bg(a){this.a=a},
ac:function ac(){},
f1:function f1(){},
eD:function eD(){},
eF:function eF(){},
iJ:function iJ(){},
iM:function iM(){},
iP:function iP(){},
fb:function fb(){},
jf:function jf(){},
fd:function fd(){},
jl:function jl(){},
jm:function jm(){},
ff:function ff(){},
jy:function jy(){},
jz:function jz(){},
dU:function dU(){},
jE:function jE(){},
bH:function bH(){},
fk:function fk(){},
d8:function d8(){},
k5:function k5(){},
k9:function k9(){},
ka:function ka(){},
kr:function kr(){},
e1:function e1(){},
eE:function eE(){},
eG:function eG(){},
kP:function kP(){},
k1:function k1(){},
kb:function kb(a){this.a=a},
ke:function ke(){},
lZ:function lZ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
kf:function kf(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kg:function kg(a){this.a=a},
e_:function e_(a){this.a=a},
cW:function cW(){},
f2:function f2(a){this.a=a},
iI:function iI(a){this.a=a},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(){},
kQ:function kQ(){},
kR:function kR(){},
kU:function kU(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
kV:function kV(){},
kT:function kT(){},
ex:function ex(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
cd:function cd(){},
kO:function kO(a,b){this.a=a
this.b=b},
fs:function fs(a){this.a=a},
kW:function kW(a){this.a=a}},S={fD:function fD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},i6:function i6(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},ii:function ii(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2},jc:function jc(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},jk:function jk(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2}},L={
ou:function(){var t=$.$get$ea()
t=t.gaI(t)
return new H.bJ(t,new L.fI(),[H.ak(t,"z",0)])},
o1:function(a,b,c,d,e){var t,s,r
t=P.A
s=A.cl
r=P.Q
r=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
r.i(0,$.Z,L.c("#FF9B00"),!0)
r.i(0,$.W,L.c("#FF9B00"),!0)
r.i(0,$.a_,L.c("#FF8700"),!0)
r.i(0,$.a7,L.c("#7F7F7F"),!0)
r.i(0,$.a6,L.c("#727272"),!0)
r.i(0,$.a1,L.c("#A3A3A3"),!0)
r.i(0,$.a2,L.c("#999999"),!0)
r.i(0,$.a0,L.c("#898989"),!0)
r.i(0,$.X,L.c("#EFEFEF"),!0)
r.i(0,$.a5,L.c("#DBDBDB"),!0)
r.i(0,$.a4,L.c("#C6C6C6"),!0)
r.i(0,$.a3,L.c("#ADADAD"),!0)
s=[t]
t=new L.c0(0.01,0.01,0.01,0.5,a,new H.m(0,null,null,null,null,null,0,[X.r,P.F]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.w]),H.a([],[A.dl]),Q.q(null,null,A.J))
t.S(a,b,c,d,e)
return t},
c:function(a){if(C.e.c0(a,"#"))return A.mo(C.e.bs(a,1))
else return A.mo(a)},
fI:function fI(){},
c0:function c0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(y1,y2,p,l,m,n,q,t,u,v,A,F,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
jb:function jb(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
jA:function jA(y1,y2,p,l,m,n,q,t,u,v,A,F,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},M={fJ:function fJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fU:function fU(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},dp:function dp(){},jW:function jW(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2}},O={fK:function fK(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2}},T={fN:function fN(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},fP:function fP(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},hz:function hz(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
qE:function(){var t=$.$get$fa()
t=t.gaI(t)
return new H.bJ(t,new T.j6(),[H.ak(t,"z",0)])},
qe:function(a,b,c,d,e){var t,s
t=[P.A]
s=H.a([],t)
t=new T.cg("Glitch",0.01,0.01,0.01,s,0.5,a,new H.m(0,null,null,null,null,null,0,[X.r,P.F]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.q(null,null,A.J),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.w]),H.a([],[A.dl]),1)
t.U(a,b,c,d,e)
return t},
j6:function j6(){},
cg:function cg(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.r2=r2}},A={fS:function fS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
f:function(a,b,c,d,e){var t=new A.J(c,e,null,a,!1,P.bm(null,null,null,G.H),0,3)
t.dh(a,b,c,!1,e)
return t},
J:function J(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
hY:function hY(){},
hX:function hX(){},
dl:function dl(){},
ef:function(a,b,c,d){var t=new A.cl(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.dg(a,b,c,d)
return t},
mn:function(a,b,c,d){var t=A.ef(0,0,0,255)
t.b=C.b.a4(C.d.b0(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.a4(C.d.b0(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.a4(C.d.b0(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.a4(C.d.b0(d*255),0,255)
return t},
oA:function(a,b){if(b){if(typeof a!=="number")return a.cU()
return A.ef((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cU()
return A.ef((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
mo:function(a){return A.oA(H.pZ(a,16,new A.l0()),a.length>=8)},
cl:function cl(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
l0:function l0(){},
iO:function iO(){},
f5:function f5(){},
iY:function iY(a,b){this.a=a
this.b=b}},V={fX:function fX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hB:function hB(y1,y2,p,l,m,n,q,t,u,v,A,F,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},is:function is(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.x2=x2},iN:function iN(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2},j4:function j4(y1,y2,p,l,m,n,q,t,u,v,A,F,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jD:function jD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={fY:function fY(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,bO,bP,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.bO=bO
_.bP=bP
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},hl:function hl(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ij:function ij(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},it:function it(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},b:function b(a){this.a=a},G:function G(b,c,a){this.b=b
this.c=c
this.a=a},jG:function jG(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2}},Z={fZ:function fZ(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},i3:function i3(y1,y2,p,l,m,n,q,t,u,v,A,F,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},ih:function ih(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.r2=r2},iT:function iT(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2}},X={em:function em(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},ed:function ed(){},hC:function hC(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.x2=x2},hD:function hD(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2},r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
D.qJ()
t=P.A
s=A.cl
r=P.Q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#00ff00"),!0)
q.i(0,$.W,L.c("#EFEFEF"),!0)
q.i(0,$.a_,L.c("#DEDEDE"),!0)
q.i(0,$.a7,L.c("#FF2106"),!0)
q.i(0,$.a6,L.c("#B01200"),!0)
q.i(0,$.a1,L.c("#2F2F30"),!0)
q.i(0,$.a2,L.c("#1D1D1D"),!0)
q.i(0,$.a0,L.c("#080808"),!0)
q.i(0,$.X,L.c("#030303"),!0)
q.i(0,$.a5,L.c("#242424"),!0)
q.i(0,$.a4,L.c("#333333"),!0)
q.i(0,$.a3,L.c("#141414"),!0)
p=[t]
o=P.d(H.a(["Frogs"],p),t)
n=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.d(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.d(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.w
i=[j]
h=P.d(H.a([new E.w($.bG,2,!0),new E.w($.cz,1,!0),new E.w($.bY,-2,!0)],i),j)
g=[X.r,P.F]
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
e=[A.dl]
d=A.J
f=new N.jj(0.5,1,0.5,q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,0,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(0,"Space",!0,!1,!1)
$.oo=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#ff0000"),!0)
f.i(0,$.W,L.c("#FF2106"),!0)
f.i(0,$.a_,L.c("#AD1604"),!0)
f.i(0,$.a7,L.c("#030303"),!0)
f.i(0,$.a6,L.c("#242424"),!0)
f.i(0,$.a1,L.c("#510606"),!0)
f.i(0,$.a2,L.c("#3C0404"),!0)
f.i(0,$.a0,L.c("#1F0000"),!0)
f.i(0,$.X,L.c("#B70D0E"),!0)
f.i(0,$.a5,L.c("#970203"),!0)
f.i(0,$.a4,L.c("#8E1516"),!0)
f.i(0,$.a3,L.c("#640707"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.d(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.d(H.a([new E.w($.dR,2,!0),new E.w($.bY,1,!0),new E.w($.d7,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new N.jH(0.51,1,0.01,0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.01,0.01,0.01,0.5,1,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(1,"Time",!0,!1,!1)
$.or=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#3399ff"),!0)
q.i(0,$.W,L.c("#10E0FF"),!0)
q.i(0,$.a_,L.c("#00A4BB"),!0)
q.i(0,$.a7,L.c("#FEFD49"),!0)
q.i(0,$.a6,L.c("#D6D601"),!0)
q.i(0,$.a1,L.c("#0052F3"),!0)
q.i(0,$.a2,L.c("#0046D1"),!0)
q.i(0,$.a0,L.c("#003396"),!0)
q.i(0,$.X,L.c("#0087EB"),!0)
q.i(0,$.a5,L.c("#0070ED"),!0)
q.i(0,$.a4,L.c("#006BE1"),!0)
q.i(0,$.a3,L.c("#0054B0"),!0)
o=P.d(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.d(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.d(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.d(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.d(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.d(H.a([new E.w($.bY,2,!0),new E.w($.aT,1,!0),new E.w($.cz,-1,!0),new E.w($.cA,-1,!0),new E.w($.aF,0.05,!1)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
f=new T.fP(0.5,1,0.01,0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.01,0.01,0.01,0.5,2,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(2,"Breath",!0,!1,!1)
$.o4=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#003300"),!0)
f.i(0,$.W,L.c("#0F0F0F"),!0)
f.i(0,$.a_,L.c("#010101"),!0)
f.i(0,$.a7,L.c("#E8C15E"),!0)
f.i(0,$.a6,L.c("#C7A140"),!0)
f.i(0,$.a1,L.c("#1E211E"),!0)
f.i(0,$.a2,L.c("#141614"),!0)
f.i(0,$.a0,L.c("#0B0D0B"),!0)
f.i(0,$.X,L.c("#204020"),!0)
f.i(0,$.a5,L.c("#11200F"),!0)
f.i(0,$.a4,L.c("#192C16"),!0)
f.i(0,$.a3,L.c("#121F10"),!0)
h=P.d(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.d(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.d(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.d(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.d(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.d(H.a([new E.w($.bG,2,!0),new E.w($.d7,1,!0),new E.w($.dR,-1,!0),new E.w($.cz,-1,!0),new E.w($.aF,0.01,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new U.fY(1,0.5,0.5,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.01,0.01,0.01,0.5,3,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(3,"Doom",!0,!1,!1)
$.o5=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#993300"),!0)
q.i(0,$.W,L.c("#BA1016"),!0)
q.i(0,$.a_,L.c("#820B0F"),!0)
q.i(0,$.a7,L.c("#381B76"),!0)
q.i(0,$.a6,L.c("#1E0C47"),!0)
q.i(0,$.a1,L.c("#290704"),!0)
q.i(0,$.a2,L.c("#230200"),!0)
q.i(0,$.a0,L.c("#110000"),!0)
q.i(0,$.X,L.c("#3D190A"),!0)
q.i(0,$.a5,L.c("#2C1207"),!0)
q.i(0,$.a4,L.c("#5C2913"),!0)
q.i(0,$.a3,L.c("#4C1F0D"),!0)
o=P.d(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.d(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.d(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.d(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.d(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.d(H.a([new E.w($.cA,2,!0),new E.w($.aT,1,!0),new E.w($.bG,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
f=new T.fN(0.01,0.5,1,0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.01,0.01,0.01,0.5,4,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(4,"Blood",!0,!1,!1)
$.o3=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#ff3399"),!0)
f.i(0,$.W,L.c("#BD1864"),!0)
f.i(0,$.a_,L.c("#780F3F"),!0)
f.i(0,$.a7,L.c("#1D572E"),!0)
f.i(0,$.a6,L.c("#11371D"),!0)
f.i(0,$.a1,L.c("#4C1026"),!0)
f.i(0,$.a2,L.c("#3C0D1F"),!0)
f.i(0,$.a0,L.c("#260914"),!0)
f.i(0,$.X,L.c("#6B0829"),!0)
f.i(0,$.a5,L.c("#4A0818"),!0)
f.i(0,$.a4,L.c("#55142A"),!0)
f.i(0,$.a3,L.c("#3D0E1E"),!0)
h=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.d(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.d(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.d(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.d(H.a([new E.w($.cA,1,!0),new E.eb(null,1,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new T.hz(0.3,0.6,0.01,f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.01,0.01,0.01,0.5,5,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(5,"Heart",!0,!1,!1)
$.o8=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#3da35a"),!0)
q.i(0,$.W,L.c("#06FFC9"),!0)
q.i(0,$.a_,L.c("#04A885"),!0)
q.i(0,$.a7,L.c("#6E0E2E"),!0)
q.i(0,$.a6,L.c("#4A0818"),!0)
q.i(0,$.a1,L.c("#1D572E"),!0)
q.i(0,$.a2,L.c("#164524"),!0)
q.i(0,$.a0,L.c("#11371D"),!0)
q.i(0,$.X,L.c("#3DA35A"),!0)
q.i(0,$.a5,L.c("#2E7A43"),!0)
q.i(0,$.a4,L.c("#3B7E4F"),!0)
q.i(0,$.a3,L.c("#265133"),!0)
o=P.d(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.d(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.d(H.a([new E.w($.d7,2,!0),new E.w($.dR,1,!0),new E.w($.bG,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
f=new V.is(0.3,0.3,1,q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.01,0.01,0.01,0.5,6,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(6,"Mind",!0,!1,!1)
$.of=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#ff9933"),!0)
f.i(0,$.W,L.c("#FEFD49"),!0)
f.i(0,$.a_,L.c("#FEC910"),!0)
f.i(0,$.a7,L.c("#10E0FF"),!0)
f.i(0,$.a6,L.c("#00A4BB"),!0)
f.i(0,$.a1,L.c("#FA4900"),!0)
f.i(0,$.a2,L.c("#E94200"),!0)
f.i(0,$.a0,L.c("#C33700"),!0)
f.i(0,$.X,L.c("#FF8800"),!0)
f.i(0,$.a5,L.c("#D66E04"),!0)
f.i(0,$.a4,L.c("#E76700"),!0)
f.i(0,$.a3,L.c("#CA5B00"),!0)
h=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.d(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.d(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.d(H.a([new E.w($.dQ,2,!0),new E.w($.d7,1,!0),new E.w($.aT,-1,!0),new E.w($.cz,-1,!0),new E.w($.aF,0.2,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new G.i9(1.01,0.5,0.01,f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.01,0.01,0.01,0.5,7,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(7,"Light",!0,!1,!1)
$.oe=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#000066"),!0)
q.i(0,$.W,L.c("#0B1030"),!0)
q.i(0,$.a_,L.c("#04091A"),!0)
q.i(0,$.a7,L.c("#CCC4B5"),!0)
q.i(0,$.a6,L.c("#A89F8D"),!0)
q.i(0,$.a1,L.c("#00164F"),!0)
q.i(0,$.a2,L.c("#00103C"),!0)
q.i(0,$.a0,L.c("#00071A"),!0)
q.i(0,$.X,L.c("#033476"),!0)
q.i(0,$.a5,L.c("#02285B"),!0)
q.i(0,$.a4,L.c("#004CB2"),!0)
q.i(0,$.a3,L.c("#003E91"),!0)
o=P.d(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.d(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.d(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.d(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.d(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.d(H.a([new E.cL(D.lU(),null,3,!0),new E.cL(D.lU(),null,-1,!0),new E.w($.dR,-1,!0),new E.w($.aF,0.2,!1)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
f=new Q.jR(1,1,1,q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.01,0.01,0.01,0.5,8,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(8,"Void",!0,!1,!1)
$.ot=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#9900cc"),!0)
f.i(0,$.W,L.c("#974AA7"),!0)
f.i(0,$.a_,L.c("#6B347D"),!0)
f.i(0,$.a7,L.c("#3D190A"),!0)
f.i(0,$.a6,L.c("#2C1207"),!0)
f.i(0,$.a1,L.c("#7C3FBA"),!0)
f.i(0,$.a2,L.c("#6D34A6"),!0)
f.i(0,$.a0,L.c("#592D86"),!0)
f.i(0,$.X,L.c("#381B76"),!0)
f.i(0,$.a5,L.c("#1E0C47"),!0)
f.i(0,$.a4,L.c("#281D36"),!0)
f.i(0,$.a3,L.c("#1D1526"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.w($.dS,2,!0),new E.w($.bY,1,!0),new E.w($.aT,-1,!0),new E.w($.cA,-1,!0),new E.w($.aF,0.01,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new E.iX(1,1,0.01,f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.01,0.01,0.01,0.5,9,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(9,"Rage",!0,!1,!1)
$.oj=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#ffcc66"),!0)
q.i(0,$.W,L.c("#FDF9EC"),!0)
q.i(0,$.a_,L.c("#D6C794"),!0)
q.i(0,$.a7,L.c("#164524"),!0)
q.i(0,$.a6,L.c("#06280C"),!0)
q.i(0,$.a1,L.c("#FFC331"),!0)
q.i(0,$.a2,L.c("#F7BB2C"),!0)
q.i(0,$.a0,L.c("#DBA523"),!0)
q.i(0,$.X,L.c("#FFE094"),!0)
q.i(0,$.a5,L.c("#E8C15E"),!0)
q.i(0,$.a4,L.c("#F6C54A"),!0)
q.i(0,$.a3,L.c("#EDAF0C"),!0)
o=P.d(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.d(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.d(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.d(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.d(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.d(H.a([new E.w($.aT,2,!0),new E.w($.dQ,1,!0),new E.cL(D.lU(),null,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
f=new X.hC(1,1,1,q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.01,0.01,0.01,0.5,10,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(10,"Hope",!0,!1,!1)
$.oa=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#494132"),!0)
f.i(0,$.W,L.c("#76C34E"),!0)
f.i(0,$.a_,L.c("#4F8234"),!0)
f.i(0,$.a7,L.c("#00164F"),!0)
f.i(0,$.a6,L.c("#00071A"),!0)
f.i(0,$.a1,L.c("#605542"),!0)
f.i(0,$.a2,L.c("#494132"),!0)
f.i(0,$.a0,L.c("#2D271E"),!0)
f.i(0,$.X,L.c("#CCC4B5"),!0)
f.i(0,$.a5,L.c("#A89F8D"),!0)
f.i(0,$.a4,L.c("#A29989"),!0)
f.i(0,$.a3,L.c("#918673"),!0)
h=P.d(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.d(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.d(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.d(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.d(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.d(H.a([new E.w($.cz,2,!0),new E.w($.dS,1,!0),new E.w($.bG,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new K.i8(0.01,1,0.03,f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.01,0.01,0.01,0.5,11,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(11,"Life",!0,!1,!1)
$.od=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#9630BF"),!0)
q.i(0,$.W,L.c("#cc87e8"),!0)
q.i(0,$.a_,L.c("#9545b7"),!0)
q.i(0,$.a7,L.c("#ae769b"),!0)
q.i(0,$.a6,L.c("#8f577c"),!0)
q.i(0,$.a1,L.c("#9630bf"),!0)
q.i(0,$.a2,L.c("#693773"),!0)
q.i(0,$.a0,L.c("#4c2154"),!0)
q.i(0,$.X,L.c("#fcf9bd"),!0)
q.i(0,$.a5,L.c("#e0d29e"),!0)
q.i(0,$.a4,L.c("#bdb968"),!0)
q.i(0,$.a3,L.c("#ab9b55"),!0)
o=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.d(H.a([new E.w($.bG,3,!0),new E.w($.aT,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.a_,L.c("#FF8700"),!0)
f.i(0,$.a7,L.c("#7F7F7F"),!0)
f.i(0,$.a6,L.c("#727272"),!0)
f.i(0,$.a1,L.c("#A3A3A3"),!0)
f.i(0,$.a2,L.c("#999999"),!0)
f.i(0,$.a0,L.c("#898989"),!0)
f.i(0,$.X,L.c("#EFEFEF"),!0)
f.i(0,$.a5,L.c("#DBDBDB"),!0)
f.i(0,$.a4,L.c("#C6C6C6"),!0)
f.i(0,$.a3,L.c("#ADADAD"),!0)
f=new Z.fZ(1.01,0.3,0.01,q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.01,0.01,0.01,0.5,12,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(12,"Dream",!1,!1,!1)
$.o6=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.Z,L.c("#9630BF"),!0)
f.i(0,$.W,L.c("#cc87e8"),!0)
f.i(0,$.a_,L.c("#9545b7"),!0)
f.i(0,$.a7,L.c("#ae769b"),!0)
f.i(0,$.a6,L.c("#8f577c"),!0)
f.i(0,$.a1,L.c("#9630bf"),!0)
f.i(0,$.a2,L.c("#693773"),!0)
f.i(0,$.a0,L.c("#4c2154"),!0)
f.i(0,$.X,L.c("#fcf9bd"),!0)
f.i(0,$.a5,L.c("#e0d29e"),!0)
f.i(0,$.a4,L.c("#bdb968"),!0)
f.i(0,$.a3,L.c("#ab9b55"),!0)
h=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
k=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
l=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
m=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
n=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
o=P.d(H.a([new E.w($.bG,3,!0),new E.w($.aT,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new Q.i7(1.01,0.3,0.01,f,h,k,l,m,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,n,o,0.01,0.01,0.01,0.5,13,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(13,"Law",!1,!1,!0)
$.oc=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#ffff00"),!0)
q.i(0,$.W,L.c("#ffff00"),!0)
q.i(0,$.a_,L.c("#ffff00"),!0)
q.i(0,$.a7,L.c("#508b2d"),!0)
q.i(0,$.a6,L.c("#316c0d"),!0)
q.i(0,$.a1,L.c("#dddd00"),!0)
q.i(0,$.a2,L.c("#afaf00"),!0)
q.i(0,$.a0,L.c("#8f8f00"),!0)
q.i(0,$.X,L.c("#ff0000"),!0)
q.i(0,$.a5,L.c("#a8000a"),!0)
q.i(0,$.a4,L.c("#b8151f"),!0)
q.i(0,$.a3,L.c("#8c1d1d"),!0)
o=P.d(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),t)
n=P.d(H.a(["Juice","Joke","Jespacito"],p),t)
m=P.d(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),t)
l=P.d(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),t)
k=P.d(H.a([new E.w($.aF,13,!0)],i),j)
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.Z,L.c("#FF9B00"),!0)
h.i(0,$.W,L.c("#FF9B00"),!0)
h.i(0,$.a_,L.c("#FF8700"),!0)
h.i(0,$.a7,L.c("#7F7F7F"),!0)
h.i(0,$.a6,L.c("#727272"),!0)
h.i(0,$.a1,L.c("#A3A3A3"),!0)
h.i(0,$.a2,L.c("#999999"),!0)
h.i(0,$.a0,L.c("#898989"),!0)
h.i(0,$.X,L.c("#EFEFEF"),!0)
h.i(0,$.a5,L.c("#DBDBDB"),!0)
h.i(0,$.a4,L.c("#C6C6C6"),!0)
h.i(0,$.a3,L.c("#ADADAD"),!0)
h=new Z.i3(13,13,13,q,o,n,m,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",l,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],k,0.01,0.01,0.01,0.5,14,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
h.S(14,"Juice",!1,!1,!0)
$.ob=h
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.Z,L.c("#00ff00"),!0)
h.i(0,$.W,L.c("#00ff00"),!0)
h.i(0,$.a_,L.c("#00ff00"),!0)
h.i(0,$.a7,L.c("#00ff00"),!0)
h.i(0,$.a6,L.c("#00cf00"),!0)
h.i(0,$.a1,L.c("#171717"),!0)
h.i(0,$.a2,L.c("#080808"),!0)
h.i(0,$.a0,L.c("#080808"),!0)
h.i(0,$.X,L.c("#616161"),!0)
h.i(0,$.a5,L.c("#3b3b3b"),!0)
h.i(0,$.a4,L.c("#4a4a4a"),!0)
h.i(0,$.a3,L.c("#292929"),!0)
k=P.d(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),t)
l=P.d(H.a(["Shogun"],p),t)
m=P.d(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.w($.dS,13,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new K.j9(13,13,13,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],o,0.01,0.01,0.01,0.5,15,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(15,"Sauce",!1,!0,!1)
$.om=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#933100"),!0)
q.i(0,$.W,L.c("#933100"),!0)
q.i(0,$.a_,L.c("#682200"),!0)
q.i(0,$.a7,L.c("#4c3a27"),!0)
q.i(0,$.a6,L.c("#302418"),!0)
q.i(0,$.a1,L.c("#a0562b"),!0)
q.i(0,$.a2,L.c("#723e20"),!0)
q.i(0,$.a0,L.c("#442513"),!0)
q.i(0,$.X,L.c("#963c07"),!0)
q.i(0,$.a5,L.c("#682a06"),!0)
q.i(0,$.a4,L.c("#6d4d3a"),!0)
q.i(0,$.a3,L.c("#422e23"),!0)
o=P.d(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),t)
n=P.d(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),t)
m=P.d(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),t)
l=P.d(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),t)
k=P.d(H.a([new E.w($.bY,10,!0),new E.w($.aT,-2,!0)],i),j)
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.Z,L.c("#FF9B00"),!0)
h.i(0,$.W,L.c("#FF9B00"),!0)
h.i(0,$.a_,L.c("#FF8700"),!0)
h.i(0,$.a7,L.c("#7F7F7F"),!0)
h.i(0,$.a6,L.c("#727272"),!0)
h.i(0,$.a1,L.c("#A3A3A3"),!0)
h.i(0,$.a2,L.c("#999999"),!0)
h.i(0,$.a0,L.c("#898989"),!0)
h.i(0,$.X,L.c("#EFEFEF"),!0)
h.i(0,$.a5,L.c("#DBDBDB"),!0)
h.i(0,$.a4,L.c("#C6C6C6"),!0)
h.i(0,$.a3,L.c("#ADADAD"),!0)
h=new L.jA(2,0.7,0.7,q,o,n,m,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",l,["Lightning","Ice","Taserface"],["Taser"],k,0.01,0.01,0.01,0.5,16,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
h.S(16,"Taze",!1,!1,!0)
$.oq=h
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.Z,L.c("#990000"),!0)
h.i(0,$.W,L.c("#ff0200"),!0)
h.i(0,$.a_,L.c("#dd0000"),!0)
h.i(0,$.a7,L.c("#25334f"),!0)
h.i(0,$.a6,L.c("#07090f"),!0)
h.i(0,$.a1,L.c("#c64f4f"),!0)
h.i(0,$.a2,L.c("#a33f3f"),!0)
h.i(0,$.a0,L.c("#843333"),!0)
h.i(0,$.X,L.c("#b5c1d2"),!0)
h.i(0,$.a5,L.c("#939dac"),!0)
h.i(0,$.a4,L.c("#3c3e42"),!0)
h.i(0,$.a3,L.c("#202123"),!0)
k=P.d(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),t)
l=P.d(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),t)
m=P.d(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),t)
n=P.d(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),t)
o=P.d(H.a([new E.w($.bY,2,!0),new E.w($.aT,5,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new V.j4(0.9,1.1,2,h,k,l,m,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",n,["Arrow","Yondu","Empathy"],["Arrow","Bow"],o,0.01,0.01,0.01,0.5,17,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(17,"Rule",!1,!1,!0)
$.ol=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#853dcc"),!0)
q.i(0,$.W,L.c("#f76261"),!0)
q.i(0,$.a_,L.c("#913a39"),!0)
q.i(0,$.a7,L.c("#ab4443"),!0)
q.i(0,$.a6,L.c("#78302f"),!0)
q.i(0,$.a1,L.c("#a54cff"),!0)
q.i(0,$.a2,L.c("#8c41d9"),!0)
q.i(0,$.a0,L.c("#7335b3"),!0)
q.i(0,$.X,L.c("#853dcc"),!0)
q.i(0,$.a5,L.c("#642e99"),!0)
q.i(0,$.a4,L.c("#4c2375"),!0)
q.i(0,$.a3,L.c("#2b1442"),!0)
o=P.d(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),t)
n=P.d(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),t)
m=P.d(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),t)
l=P.d(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),t)
k=P.d(H.a([new E.w($.bY,15,!0),new E.w($.aT,-4,!0)],i),j)
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.Z,L.c("#FF9B00"),!0)
h.i(0,$.W,L.c("#FF9B00"),!0)
h.i(0,$.a_,L.c("#FF8700"),!0)
h.i(0,$.a7,L.c("#7F7F7F"),!0)
h.i(0,$.a6,L.c("#727272"),!0)
h.i(0,$.a1,L.c("#A3A3A3"),!0)
h.i(0,$.a2,L.c("#999999"),!0)
h.i(0,$.a0,L.c("#898989"),!0)
h.i(0,$.X,L.c("#EFEFEF"),!0)
h.i(0,$.a5,L.c("#DBDBDB"),!0)
h.i(0,$.a4,L.c("#C6C6C6"),!0)
h.i(0,$.a3,L.c("#ADADAD"),!0)
h=new V.hB(3.1,2,0.7,q,o,n,m,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",l,["Hippo","Ranting"],["Vent"],k,0.01,0.01,0.01,0.5,18,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
h.S(18,"Hippo",!1,!1,!0)
$.o9=h
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.Z,L.c("#959595"),!0)
h.i(0,$.W,L.c("#bfbfbf"),!0)
h.i(0,$.a_,L.c("#959595"),!0)
h.i(0,$.a7,L.c("#805233"),!0)
h.i(0,$.a6,L.c("#663c1f"),!0)
h.i(0,$.a1,L.c("#805233"),!0)
h.i(0,$.a2,L.c("#737373"),!0)
h.i(0,$.a0,L.c("#664d3c"),!0)
h.i(0,$.X,L.c("#663c1f"),!0)
h.i(0,$.a5,L.c("#4d2d17"),!0)
h.i(0,$.a4,L.c("#68594e"),!0)
h.i(0,$.a3,L.c("#4f443b"),!0)
k=P.d(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),t)
l=P.d(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),t)
m=P.d(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),t)
n=P.d(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),t)
o=P.d(H.a([new E.w($.bY,5,!0),new E.w($.aT,5,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new L.fM(0.7,2,3.1,h,k,l,m,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",n,["Bear","Thought"],["Doorway"],o,0.01,0.01,0.01,0.5,19,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(19,"Bear",!1,!1,!0)
$.o2=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#ebd837"),!0)
q.i(0,$.W,L.c("#ebd837"),!0)
q.i(0,$.a_,L.c("#857a1f"),!0)
q.i(0,$.a7,L.c("#857a1f"),!0)
q.i(0,$.a6,L.c("#524b13"),!0)
q.i(0,$.a1,L.c("#d0c217"),!0)
q.i(0,$.a2,L.c("#9e9311"),!0)
q.i(0,$.a0,L.c("#6b640c"),!0)
q.i(0,$.X,L.c("#c3c3c3"),!0)
q.i(0,$.a5,L.c("#8f8f8f"),!0)
q.i(0,$.a4,L.c("#a88e00"),!0)
q.i(0,$.a3,L.c("#756300"),!0)
o=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#FF9B00"),!0)
o.i(0,$.W,L.c("#FF9B00"),!0)
o.i(0,$.a_,L.c("#FF8700"),!0)
o.i(0,$.a7,L.c("#7F7F7F"),!0)
o.i(0,$.a6,L.c("#727272"),!0)
o.i(0,$.a1,L.c("#A3A3A3"),!0)
o.i(0,$.a2,L.c("#999999"),!0)
o.i(0,$.a0,L.c("#898989"),!0)
o.i(0,$.X,L.c("#EFEFEF"),!0)
o.i(0,$.a5,L.c("#DBDBDB"),!0)
o.i(0,$.a4,L.c("#C6C6C6"),!0)
o.i(0,$.a3,L.c("#ADADAD"),!0)
o=new U.it(q,0.01,0.01,0.01,0.5,20,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
o.S(20,"Mindstone",!1,!0,!0)
$.og=o
o=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#74a4ff"),!0)
o.i(0,$.W,L.c("#74a4ff"),!0)
o.i(0,$.a_,L.c("#466299"),!0)
o.i(0,$.a7,L.c("#466299"),!0)
o.i(0,$.a6,L.c("#2f4166"),!0)
o.i(0,$.a1,L.c("#d0c217"),!0)
o.i(0,$.a2,L.c("#9e9311"),!0)
o.i(0,$.a0,L.c("#6b640c"),!0)
o.i(0,$.X,L.c("#c3c3c3"),!0)
o.i(0,$.a5,L.c("#8f8f8f"),!0)
o.i(0,$.a4,L.c("#a88e00"),!0)
o.i(0,$.a3,L.c("#756300"),!0)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new S.jk(o,0.01,0.01,0.01,0.5,21,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(21,"Spacestone",!1,!0,!0)
$.op=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#9846cc"),!0)
q.i(0,$.W,L.c("#9846cc"),!0)
q.i(0,$.a_,L.c("#4c2366"),!0)
q.i(0,$.a7,L.c("#4c2366"),!0)
q.i(0,$.a6,L.c("#261233"),!0)
q.i(0,$.a1,L.c("#d0c217"),!0)
q.i(0,$.a2,L.c("#9e9311"),!0)
q.i(0,$.a0,L.c("#6b640c"),!0)
q.i(0,$.X,L.c("#c3c3c3"),!0)
q.i(0,$.a5,L.c("#8f8f8f"),!0)
q.i(0,$.a4,L.c("#a88e00"),!0)
q.i(0,$.a3,L.c("#756300"),!0)
o=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#FF9B00"),!0)
o.i(0,$.W,L.c("#FF9B00"),!0)
o.i(0,$.a_,L.c("#FF8700"),!0)
o.i(0,$.a7,L.c("#7F7F7F"),!0)
o.i(0,$.a6,L.c("#727272"),!0)
o.i(0,$.a1,L.c("#A3A3A3"),!0)
o.i(0,$.a2,L.c("#999999"),!0)
o.i(0,$.a0,L.c("#898989"),!0)
o.i(0,$.X,L.c("#EFEFEF"),!0)
o.i(0,$.a5,L.c("#DBDBDB"),!0)
o.i(0,$.a4,L.c("#C6C6C6"),!0)
o.i(0,$.a3,L.c("#ADADAD"),!0)
o=new Z.iT(q,0.01,0.01,0.01,0.5,22,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
o.S(22,"Powerstone",!1,!0,!0)
$.oi=o
o=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#ffcb6f"),!0)
o.i(0,$.W,L.c("#ffcb6f"),!0)
o.i(0,$.a_,L.c("#997a42"),!0)
o.i(0,$.a7,L.c("#997a42"),!0)
o.i(0,$.a6,L.c("#66512c"),!0)
o.i(0,$.a1,L.c("#d0c217"),!0)
o.i(0,$.a2,L.c("#9e9311"),!0)
o.i(0,$.a0,L.c("#6b640c"),!0)
o.i(0,$.X,L.c("#c3c3c3"),!0)
o.i(0,$.a5,L.c("#8f8f8f"),!0)
o.i(0,$.a4,L.c("#a88e00"),!0)
o.i(0,$.a3,L.c("#756300"),!0)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new F.ji(o,0.01,0.01,0.01,0.5,23,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(23,"Soulstone",!1,!0,!0)
$.on=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#7ac476"),!0)
q.i(0,$.W,L.c("#7ac476"),!0)
q.i(0,$.a_,L.c("#3a5e39"),!0)
q.i(0,$.a7,L.c("#3a5e39"),!0)
q.i(0,$.a6,L.c("#1b2b1a"),!0)
q.i(0,$.a1,L.c("#d0c217"),!0)
q.i(0,$.a2,L.c("#9e9311"),!0)
q.i(0,$.a0,L.c("#6b640c"),!0)
q.i(0,$.X,L.c("#c3c3c3"),!0)
q.i(0,$.a5,L.c("#8f8f8f"),!0)
q.i(0,$.a4,L.c("#a88e00"),!0)
q.i(0,$.a3,L.c("#756300"),!0)
o=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#FF9B00"),!0)
o.i(0,$.W,L.c("#FF9B00"),!0)
o.i(0,$.a_,L.c("#FF8700"),!0)
o.i(0,$.a7,L.c("#7F7F7F"),!0)
o.i(0,$.a6,L.c("#727272"),!0)
o.i(0,$.a1,L.c("#A3A3A3"),!0)
o.i(0,$.a2,L.c("#999999"),!0)
o.i(0,$.a0,L.c("#898989"),!0)
o.i(0,$.X,L.c("#EFEFEF"),!0)
o.i(0,$.a5,L.c("#DBDBDB"),!0)
o.i(0,$.a4,L.c("#C6C6C6"),!0)
o.i(0,$.a3,L.c("#ADADAD"),!0)
o=new Y.jL(q,0.01,0.01,0.01,0.5,24,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
o.S(24,"Timestone",!1,!0,!0)
$.os=o
o=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
o.i(0,$.Z,L.c("#ed1c24"),!0)
o.i(0,$.W,L.c("#ed1c24"),!0)
o.i(0,$.a_,L.c("#820a0f"),!0)
o.i(0,$.a7,L.c("#820a0f"),!0)
o.i(0,$.a6,L.c("#4f0609"),!0)
o.i(0,$.a1,L.c("#d0c217"),!0)
o.i(0,$.a2,L.c("#9e9311"),!0)
o.i(0,$.a0,L.c("#6b640c"),!0)
o.i(0,$.X,L.c("#c3c3c3"),!0)
o.i(0,$.a5,L.c("#8f8f8f"),!0)
o.i(0,$.a4,L.c("#a88e00"),!0)
o.i(0,$.a3,L.c("#756300"),!0)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.a_,L.c("#FF8700"),!0)
q.i(0,$.a7,L.c("#7F7F7F"),!0)
q.i(0,$.a6,L.c("#727272"),!0)
q.i(0,$.a1,L.c("#A3A3A3"),!0)
q.i(0,$.a2,L.c("#999999"),!0)
q.i(0,$.a0,L.c("#898989"),!0)
q.i(0,$.X,L.c("#EFEFEF"),!0)
q.i(0,$.a5,L.c("#DBDBDB"),!0)
q.i(0,$.a4,L.c("#C6C6C6"),!0)
q.i(0,$.a3,L.c("#ADADAD"),!0)
q=new F.j_(o,0.01,0.01,0.01,0.5,25,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(25,"Realitystone",!1,!0,!0)
$.ok=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.Z,L.c("#e19aca"),!0)
q.i(0,$.W,L.c("#e19aca"),!0)
q.i(0,$.a_,L.c("#7a546e"),!0)
q.i(0,$.a7,L.c("#7a546e"),!0)
q.i(0,$.a6,L.c("#473140"),!0)
q.i(0,$.a1,L.c("#d0c217"),!0)
q.i(0,$.a2,L.c("#9e9311"),!0)
q.i(0,$.a0,L.c("#6b640c"),!0)
q.i(0,$.X,L.c("#c3c3c3"),!0)
q.i(0,$.a5,L.c("#8f8f8f"),!0)
q.i(0,$.a4,L.c("#a88e00"),!0)
q.i(0,$.a3,L.c("#756300"),!0)
s=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
s.i(0,$.Z,L.c("#FF9B00"),!0)
s.i(0,$.W,L.c("#FF9B00"),!0)
s.i(0,$.a_,L.c("#FF8700"),!0)
s.i(0,$.a7,L.c("#7F7F7F"),!0)
s.i(0,$.a6,L.c("#727272"),!0)
s.i(0,$.a1,L.c("#A3A3A3"),!0)
s.i(0,$.a2,L.c("#999999"),!0)
s.i(0,$.a0,L.c("#898989"),!0)
s.i(0,$.X,L.c("#EFEFEF"),!0)
s.i(0,$.a5,L.c("#DBDBDB"),!0)
s.i(0,$.a4,L.c("#C6C6C6"),!0)
s.i(0,$.a3,L.c("#ADADAD"),!0)
t=new N.hv(q,0.01,0.01,0.01,0.5,26,new H.m(0,null,null,null,null,null,0,g),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,s,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
t.S(26,"Gauntlet",!1,!0,!0)
$.o7=t
$.oh=L.o1(255,"Null",!1,!0,!1)
t=H.a([],p)
t=new S.i6(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Knight",new H.m(0,null,null,null,null,null,0,g),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Knight",3,!0,!1,!1)
$.ql=t
t=P.d(H.a([new E.w($.aF,0.4,!1)],i),j)
s=H.a([],p)
t=new S.jc(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Seer",new H.m(0,null,null,null,null,null,0,g),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Seer",6,!0,!1,!1)
$.qy=t
t=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
s=H.a([],p)
t=new O.fK("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],t,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Bard",new H.m(0,null,null,null,null,null,0,g),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Bard",9,!0,!1,!1)
$.qf=t
t=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
s=H.a([],p)
t=new B.hA("Stalker",0.01,0.01,1.01,t,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Heir",new H.m(0,null,null,null,null,null,0,g),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Heir",8,!0,!1,!1)
$.qi=t
t=H.a([],p)
t=new U.ij(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,t,0.5,"Maid",new H.m(0,null,null,null,null,null,0,g),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Maid",0,!0,!1,!1)
$.qo=t
t=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
s=H.a([],p)
t=new N.j2(1.01,0.51,0.01,t,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Rogue",new H.m(0,null,null,null,null,null,0,g),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Rogue",4,!0,!1,!1)
$.qt=t
t=H.a([],p)
t=new V.iN(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,t,0.5,"Page",new H.m(0,null,null,null,null,null,0,g),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Page",1,!0,!1,!1)
$.qr=t
t=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
s=H.a([],p)
t=new U.jG(1.01,0.01,1.01,t,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Thief",new H.m(0,null,null,null,null,null,0,g),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Thief",7,!0,!1,!1)
$.qB=t
t=P.d(H.a([new E.w($.aF,0.1,!1)],i),j)
s=H.a([],p)
t=new R.jw(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Sylph",new H.m(0,null,null,null,null,null,0,g),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Sylph",5,!0,!1,!1)
$.qA=t
t=H.a([],p)
t=new N.iV("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Prince",new H.m(0,null,null,null,null,null,0,g),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Prince",10,!0,!1,!1)
$.qs=t
t=P.d(H.a([new E.w($.aF,0.1,!1)],i),j)
s=H.a([],p)
t=new M.jW("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Witch",new H.m(0,null,null,null,null,null,0,g),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Witch",11,!0,!1,!1)
$.qD=t
t=P.d(H.a([new E.w($.aF,0.4,!1)],i),j)
s=H.a([],p)
t=new S.ii("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Mage",new H.m(0,null,null,null,null,null,0,g),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Mage",2,!0,!1,!1)
$.qn=t
t=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
s=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
r=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
o=P.d(H.a([new E.w($.aF,3,!1),new E.w($.jo,-2,!1)],i),j)
n=H.a([],p)
t=new E.jS("Scourge",0.01,0.01,1.01,t,s,r,q,!1,!0,!1,!1,!0,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Waste",new H.m(0,null,null,null,null,null,0,g),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Waste",12,!1,!1,!1)
$.qC=t
t=H.a([],p)
t=new Y.ja("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Scout",new H.m(0,null,null,null,null,null,0,g),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Scout",13,!1,!1,!1)
$.qw=t
t=P.d(H.a([new E.w($.aF,0.5,!1)],i),j)
s=H.a([],p)
t=new L.jb("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Scribe",new H.m(0,null,null,null,null,null,0,g),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Scribe",15,!1,!1,!1)
$.qx=t
t=P.d(H.a([new E.w($.aF,0.5,!1)],i),j)
s=H.a([],p)
t=new E.j7(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Sage",new H.m(0,null,null,null,null,null,0,g),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Sage",14,!1,!1,!1)
$.qu=t
t=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
s=H.a([],p)
t=new Y.hy("Highlord",0.51,0.01,1.01,t,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Guide",new H.m(0,null,null,null,null,null,0,g),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Guide",16,!1,!1,!1)
$.qh=t
t=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
s=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
r=P.d(H.a([new E.w($.aF,3,!1)],i),j)
q=H.a([],p)
t=new Y.hx(0.01,0.01,0.01,t,s,!1,!0,!1,!1,!0,!1,r,"Glitch",0.01,0.01,0.01,q,0.5,"Grace",new H.m(0,null,null,null,null,null,0,g),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Grace",17,!1,!1,!1)
$.qg=t
t=P.d(H.a([new E.w($.aF,0.1,!1)],i),j)
s=H.a([],p)
t=new E.iu("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Muse",new H.m(0,null,null,null,null,null,0,g),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Muse",18,!1,!1,!1)
$.qp=t
t=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
s=Q.q(null,null,d)
r=P.d(H.a([new E.w($.aF,0.1,!1)],i),j)
q=H.a([],p)
t=new Z.ih("Shogun",0.01,0.5,2.01,t,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,s,r,"Glitch",0.01,0.01,0.01,q,0.5,"Lord",new H.m(0,null,null,null,null,null,0,g),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Lord",19,!1,!1,!1)
$.qm=t
t=P.d(H.a([new E.w($.aF,-0.1,!1),new E.w($.bG,1,!1)],i),j)
s=H.a([],p)
t=new Y.jg("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Smith",new H.m(0,null,null,null,null,null,0,g),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Smith",20,!1,!1,!1)
$.qz=t
t=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
s=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
r=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
o=P.d(H.a([new E.w($.aF,4,!1),new E.w($.jo,-3,!1)],i),j)
n=H.a([],p)
t=new X.hD("Hooman",0.01,0.01,1.01,t,s,r,q,!1,!0,!1,!0,!1,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Human",new H.m(0,null,null,null,null,null,0,g),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Human",21,!1,!1,!0)
$.qj=t
t=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
s=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
r=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["hussie"],p)
o=P.d(H.a([new E.w($.aF,41.3,!1),new E.w($.jo,41.3,!1)],i),j)
n=H.a([],p)
t=new Q.hE(20,20,0.5,t,s,r,q,!1,!0,!1,!0,!0,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Hussie",new H.m(0,null,null,null,null,null,0,g),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Hussie",22,!1,!0,!0)
$.qk=t
t=H.a(["sans","sansly","sassy","super","soapful"],p)
s=H.a([],p)
t=new Y.j8(t,"Glitch",0.01,0.01,0.01,s,0.5,"Sans",new H.m(0,null,null,null,null,null,0,g),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.q(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.U("Sans",23,!1,!0,!0)
$.qv=t
$.qq=T.qe("Null",255,!1,!0,!1)
t=P.d(H.a([new E.w($.aT,1,!0),new E.w($.dQ,1,!0)],i),j)
s=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
r=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
q=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
o=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.iv(t,s,r,q,o,!1,n,m,l,k,1,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"loud","musical","Music")
t.B()
t.D()
B.b8(t)
$.oV=t
t=P.d(H.a([new E.w($.d7,-2,!0)],i),j)
s=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
r=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
q=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
o=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new S.fD(t,s,r,q,o,!1,n,m,l,k,13,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"nerdy","smart","Academic")
t.B()
t.D()
B.b8(t)
$.oO=t
t=P.d(H.a([new E.w($.dS,2,!0)],i),j)
s=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
r=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
q=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
o=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fJ(t,s,r,q,o,!1,n,m,l,k,4,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"dumb","athletic","Athletic")
t.B()
t.D()
B.b8(t)
$.oP=t
t=P.d(H.a([new E.w($.dR,-1,!0),new E.w($.dQ,1,!0)],i),j)
s=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
r=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
q=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
o=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new A.fS(t,s,r,q,o,!1,n,m,l,k,0,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"dorky","funny","Comedy")
t.B()
t.D()
B.b8(t)
$.oQ=t
t=P.d(H.a([new E.w($.aT,-1,!0),new E.w($.cz,-1,!0)],i),j)
s=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
r=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
q=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
o=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fU(t,s,r,q,o,!1,n,m,l,k,2,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"pretentious","cultured","Culture")
t.B()
t.D()
B.b8(t)
$.oR=t
t=P.d(H.a([new E.w($.aT,1,!0),new E.w($.cA,1,!0)],i),j)
s=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
r=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
q=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
o=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.fX(t,s,r,q,o,!1,n,m,l,k,8,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"boring","domestic","Domestic")
t.B()
t.D()
B.b8(t)
$.oS=t
t=P.d(H.a([new E.w($.dQ,1,!0),new E.w($.bG,1,!0)],i),j)
s=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
r=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
q=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
o=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new U.hl(t,s,r,q,o,!1,n,m,l,k,7,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"whimpy","imaginative","Fantasy")
t.B()
t.D()
B.b8(t)
$.oT=t
t=P.d(H.a([new E.w($.dS,1,!0),new E.w($.cz,1,!0)],i),j)
s=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
r=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
q=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
o=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.i4(t,s,r,q,o,!1,n,m,l,k,6,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"harsh","fair-minded","Justice")
t.B()
t.D()
B.b8(t)
$.oU=t
t=P.d(H.a([new E.w($.bY,2,!0)],i),j)
s=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
r=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
q=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
o=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new G.iS(t,s,r,q,o,!1,n,m,l,k,9,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"frivolous","geeky","PopCulture")
t.B()
t.D()
B.b8(t)
$.oX=t
t=P.d(H.a([new E.w($.cA,2,!0)],i),j)
s=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
r=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
q=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
o=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new Q.j3(t,s,r,q,o,!1,n,m,l,k,12,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"obsessive","romantic","Romantic")
t.B()
t.D()
B.b8(t)
$.oY=t
t=P.d(H.a([new E.w($.aT,2,!0)],i),j)
s=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
r=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
q=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
o=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.jh(t,s,r,q,o,!1,n,m,l,k,11,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"shallow","extroverted","Social")
t.B()
t.D()
B.b8(t)
$.oZ=t
t=P.d(H.a([new E.w($.cA,-1,!0),new E.w($.aT,-1,!0)],i),j)
s=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
r=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
q=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
o=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.jD(t,s,r,q,o,!1,n,m,l,k,5,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"terrible","honest","Terrible")
t.B()
t.D()
B.b8(t)
$.p0=t
t=P.d(H.a([new E.w($.d7,2,!0)],i),j)
s=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
r=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
q=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
o=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.jX(t,s,r,q,o,!1,n,m,l,k,3,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"wordy","lettered","Writing")
t.B()
t.D()
B.b8(t)
$.p1=t
t=P.d(H.a([new E.w($.bG,2,!0)],i),j)
s=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
r=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
q=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
o=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new D.jC(t,s,r,q,o,!1,n,m,l,k,10,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"awkward","techy","Technology")
t.B()
t.D()
B.b8(t)
$.p_=t
t=H.a(["nobody"],p)
j=P.d(H.a([],i),j)
i=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
t=new B.c7(!0,t,j,i,p,-13,new H.m(0,null,null,null,null,null,0,g),["NONE"],Q.q(null,null,d),"","","Null")
t.B()
t.D()
B.b8(t)
$.oW=t
t=document
c=t.querySelector("#aspects")
s=L.ou()
b=P.cc(s,!0,H.x(s,0))
C.a.aT(b,new X.le())
for(s=b.length,a=0;a<b.length;b.length===s||(0,H.cJ)(b),++a){a0=b[a]
a1=t.createElement("div")
a1.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
p=a0.gP().w(0,$.X).bn()
q.backgroundColor=p
q=t.createElement("div")
q.className="aspectIcon"
p=W.mK(null,null,null)
o=a0.Q
p.src="../../images/"+o+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
n=a0.gP().w(0,$.W).bn()
p.color=n
q.textContent=o
r.appendChild(q)
a1.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
p=a0.cx
q.className=p?"canon":"fanon"
q.textContent=p?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+a0.e))
a1.appendChild(r)
a2=t.createElement("div")
a2.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a2.appendChild(r)
if(a0.gaY()){r=t.createElement("p")
r.textContent="Deadpan"
r.title="Mentally unaffected by trickster mode"
a2.appendChild(r)}if(a0.gcQ()){r=t.createElement("p")
r.textContent="Ultimate Deadpan"
r.title="Physically unaffected by trickster mode"
a2.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a0.fx
a2.appendChild(r)
a1.appendChild(a2)
a1.appendChild(X.m6(a0.gI()))
a1.appendChild(X.bn("Levels",a0.gG()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bn("Names",a0.gX()))
q=t.createElement("div")
q.className="section"
p=t.createElement("p")
p.className="toggleTitle"
p.textContent=a0.gZ()
q.appendChild(p)
p=t.createElement("p")
p.textContent=a0.gY()
q.appendChild(p)
r.appendChild(X.cK("Song",q))
a1.appendChild(X.cK("Denizen",r))
r=t.createElement("div")
r.className="section"
a1.appendChild(X.cK("Quests",r))
a1.appendChild(X.bn("ChumHandles",a0.gK()))
a1.appendChild(X.bn("Land Names",a0.gaf()))
a1.appendChild(X.bn("Fraymotif Names",a0.ga_()))
a1.appendChild(X.cK("Palette",a0.gP().e9(o)))
c.appendChild(a1)}a3=t.querySelector("#classes")
s=T.qE()
a4=P.cc(s,!0,H.x(s,0))
C.a.aT(a4,new X.lf())
for(s=a4.length,a=0;a<a4.length;a4.length===s||(0,H.cJ)(a4),++a){a5=a4[a]
a1=t.createElement("div")
a1.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("div")
q.className="classIcon"
p=W.mK(null,null,null)
o=J.b2(a5)
p.src="../../images/Bodies/god"+H.t(J.df(o.gal(a5),1))+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
p.color="#FFFFFF"
p=q.style
p.marginLeft="48px"
p=q.style
p.marginTop="19px"
p=q.style
n=(p&&C.m).c3(p,"text-shadow")
p.setProperty(n,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
q.textContent=o.gN(a5)
r.appendChild(q)
a1.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
q.className=a5.gbQ()?"canon":"fanon"
q.textContent=a5.gbQ()?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+o.gal(a5)))
a1.appendChild(r)
a2=t.createElement("div")
a2.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a2.appendChild(r)
if(a5.a1()){r=t.createElement("p")
r.textContent="Active"
a2.appendChild(r)}else{r=t.createElement("p")
r.textContent="Passive"
a2.appendChild(r)}if(a5.ar()){r=t.createElement("p")
r.textContent="Has interaction effect"
r.title="Affects the stats of friends or enemies."
a2.appendChild(r)}if(a5.a0()){r=t.createElement("p")
r.textContent="High initial stats"
a2.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a5.gcI()
a2.appendChild(r)
a1.appendChild(a2)
a1.appendChild(X.m6(a5.gI()))
a1.appendChild(X.bn("Levels",a5.gG()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bn("Pre-Denizen",a5.ga3()))
r.appendChild(X.bn("Post-Denizen",a5.ga2()))
a1.appendChild(X.cK("Quests",r))
a1.appendChild(X.bn("ChumHandles",a5.gK()))
r=t.createElement("div")
r.className="section"
q=t.createElement("p")
q.textContent="Attacker multiplier: "+H.t(a5.a8())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Defender multiplier: "+H.t(a5.a9())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Murderous mlultiplier: "+H.t(a5.aa())
r.appendChild(q)
a1.appendChild(X.cK("PvP Stats",r))
a3.appendChild(a1)}a6=t.querySelector("#interests")
s=B.p2()
a7=P.cc(s,!0,H.x(s,0))
C.a.aT(a7,new X.lg())
for(s=a7.length,a=0;a<a7.length;a7.length===s||(0,H.cJ)(a7),++a){a8=a7[a]
a1=t.createElement("div")
a1.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("h1")
q.className="title"
p=q.style
p.color="#FFFFFF"
p=q.style
p.marginLeft="10px"
p=q.style
p.marginTop="19px"
p=q.style
o=(p&&C.m).c3(p,"text-shadow")
p.setProperty(o,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
p=J.b2(a8)
q.textContent=p.gN(a8)
r.appendChild(q)
a1.appendChild(r)
r=t.createElement("h3")
r.appendChild(t.createTextNode("id: "+H.t(p.gal(a8))))
a1.appendChild(r)
a1.appendChild(X.m6(a8.gI()))
a1.appendChild(X.bn("Sub-types",a8.gae()))
a1.appendChild(X.bn("Levels",a8.gG()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bn("First",a8.gac()))
r.appendChild(X.bn("Second",a8.gad()))
a1.appendChild(X.cK("ChumHandles",r))
a6.appendChild(a1)}},
m6:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="section"
r=t.createElement("h4")
r.textContent="Stats"
s.appendChild(r)
s.appendChild(t.createElement("table"))
for(r=J.bp(a);r.M();){q=r.gO()
p=t.createElement("tr")
o=t.createElement("td")
n=J.ai(q)
if(!!n.$iseb)o.textContent="Stats from Interests"
else if(!!n.$iscL){o.textContent="[Random Stat]"
o.title=P.hZ(q.d,"(",")")}else o.textContent=J.aP(q.gd6())
p.appendChild(o)
n=t.createElement("td")
n.className="number"
n.textContent="x "+H.t(q.gew())
p.appendChild(n)
s.appendChild(p)}return s},
cK:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="toggleOuter"
r=t.createElement("div")
r.className="toggleBox"
q=r.style
q.display="none"
p=t.createElement("span")
p.className="toggleClickable"
q=t.createElement("span")
q.className="toggleTitle"
q.textContent=a
p.appendChild(q)
o=t.createElement("span")
o.className="toggleButton"
C.i.br(o,"[+]")
W.ns(p,"click",new X.ll(r,o),!1,W.bW)
p.appendChild(o)
s.appendChild(p)
r.appendChild(b)
s.appendChild(r)
return s},
bn:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="section"
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.cJ)(b),++q){p=b[q]
o=t.createElement("p")
o.className="listItem"
o.textContent=J.aP(p)
s.appendChild(o)}return X.cK(a,s)},
le:function le(){},
lf:function lf(){},
lg:function lg(){},
ll:function ll(a,b){this.a=a
this.b=b}},N={N:function N(){},hv:function hv(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},i4:function i4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},iV:function iV(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2},j2:function j2(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},jh:function jh(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jj:function jj(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.x2=x2},jH:function jH(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2}},E={eA:function eA(){},iK:function iK(){},w:function w(a,b,c){this.a=a
this.b=b
this.c=c},cL:function cL(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},iu:function iu(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2},iX:function iX(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.x2=x2},j7:function j7(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},jS:function jS(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
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
_.r2=r2}},Y={hx:function hx(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},hy:function hy(rx,ry,x1,x2,y1,y2,p,l,m,n,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},bX:function bX(a,b){this.a=a
this.b=b},U:function U(a,b){this.a=a
this.b=b},bj:function bj(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},aD:function aD(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},B:function B(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eh:function eh(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ap:function ap(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bf:function bf(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fR:function fR(c,a,b){this.c=c
this.a=a
this.b=b},am:function am(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},f6:function f6(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ey:function ey(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},f7:function f7(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},j8:function j8(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ja:function ja(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},jg:function jg(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},jL:function jL(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
rb:function(a){var t,s,r,q
t=C.w.eZ(a," ")
for(s=t.gW(t),r="";s.M();){q=s.gO()
r+=" "+(H.t(q.w(0,0).fa(0))+H.t(q.bs(0,1)))}return r}},B={hA:function hA(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,A,F,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
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
b8:function(a){var t=a.f
if($.$get$eH().ak(t))throw H.C("Duplicate aspect id for "+a.E(0)+": "+t+" is already registered for "+J.aP($.$get$eH().w(0,t))+".")
$.$get$eH().h(0,t,a)},
p2:function(){var t=$.$get$eH()
t=t.gaI(t)
return new H.bJ(t,new B.hJ(),[H.ak(t,"z",0)])},
hJ:function hJ(){},
c7:function c7(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},Q={hE:function hE(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2},i7:function i7(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
_.H=H
_.T=T
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},j3:function j3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jR:function jR(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
q:function(a,b,c){var t=new Q.jU(null,null,[c])
t.dk(a,b,c)
return t},
lW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.q(d,null,e)
s=a.gJ(a)
C.a.sJ(t.b,s)
if(H.fv(a,"$isz",[e],"$asz"))if(H.fv(a,"$isbI",[e],"$asbI"))for(s=J.bp(a.gbm()),r=0;s.M();){q=s.gO()
p=t.b
o=p.length
if(r>=o)return H.V(p,r)
p[r]=q;++r}else for(s=a.gW(a),p=[H.x(t,0)],r=0;s.M();){n=s.gO()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.V(o,r)
o[r]=new Q.e(n,m,p);++r}else for(s=a.gW(a),p=[e],o=[H.x(t,0)];s.M();){l=s.gO()
if(H.rc(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.V(m,0)
m[0]=new Q.e(l,k,o)}else if(H.fv(l,"$ise",p,null)){m=t.b
k=m.length
if(0>=k)return H.V(m,0)
m[0]=l}else throw H.C("Invalid entry type "+H.t(J.mh(l))+" for WeightedList<"+H.t(H.az(H.bN(e)))+">. Should be "+H.t(H.az(H.bN(e)))+" or WeightPair<"+H.t(H.az(H.bN(e)))+">.")}return t},
lX:function(a,b,c,d){return new Q.fi(J.mi(a.gbm(),new Q.jV(c,d,b)),null,[c,d])},
bI:function bI(){},
jU:function jU(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fh:function fh(){},
e:function e(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cE:function cE(){},
dV:function dV(){},
jT:function jT(a,$ti){this.a=a
this.$ti=$ti},
fi:function fi(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c}},K={i8:function i8(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.x2=x2},j9:function j9(y1,y2,p,l,m,n,q,t,u,v,A,F,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},G={i9:function i9(y1,y2,p,l,m,n,q,t,u,v,A,F,C,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.F=F
_.C=C
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
_.x2=x2},iS:function iS(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oB:function(a){var t,s,r,q,p,o,n
t=G.H
s=P.eU(a,t)
r=P.bm(null,null,null,t)
q=H.a([],[G.eg])
for(t=G.pG(),p=J.bp(t.a),t=new H.fj(p,t.b,[H.x(t,0)]);t.M();){o=p.gO()
if(o.eR(s))q.push(o)}C.a.d4(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.cJ)(q),++n){o=q[n]
if(o.eR(s)){r.j(0,o)
for(p=o.gd7(),p=p.gW(p);p.M();)s.ah(0,p.gO())}}if(s.a!==0)r.ap(0,s)
return r},
pG:function(){var t=$.$get$n1()
t.toString
return new H.bJ(t,new G.hW(),[H.x(t,0)])},
H:function H(){},
eg:function eg(){},
hW:function hW(){}},F={iv:function iv(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},j_:function j_(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},ji:function ji(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
_.x2=x2},jX:function jX(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},R={
qb:function(a){var t,s
if(a.gJ(a).aK(0,1)){a.w(0,1)
a.w(0,1)
t=!0}else t=!1
s=a.w(0,0)
s.geX(s).gf9().f2("checking for two players, ps is "+H.t(a)+", ret is "+t)
return t},
q_:function(a){a.gai(a).gbj()
return!1},
qa:function(a){a.gai(a).gbj()
return!1},
q9:function(a){a.gai(a).gbj()
return!1},
q8:function(a){return a.gai(a).gaX().gf8()},
q6:function(a){return a.gai(a).gaX().gf6()},
q5:function(a){return a.gai(a).gaX().gf5()},
q2:function(a){return a.gai(a).gaX().gf3()},
q4:function(a){return a.gai(a).gaX().gf4()},
q7:function(a){return a.gai(a).gaX().gf7()},
q3:function(a){var t=a.gai(a)
t.gbj()
t.gbj()
return!1},
q0:function(a){return!0},
q1:function(a){a.gai(a).gf1()
return!1},
iW:function iW(){},
I:function I(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
y:function y(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
O:function O(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
ao:function ao(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
jw:function jw(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l
_.m=m
_.n=n
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
_.r2=r2}},D={jC:function jC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
qJ:function(){if($.nf)return
$.nf=!0
var t=new D.b0("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
t.y=0
$.jo=t
t=new D.b0("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.qI=t
t=new D.fl(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
t.y=2.5
t.Q=1
$.dS=t
t=new D.fl(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
t.y=2.5
$.cz=t
t=new D.b0("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.qH=t
t=new D.b0("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.bY=t
t=new D.j1("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.cA=t
t=new D.b0("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.aT=t
t=new D.b0("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.d7=t
t=new D.b0("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.dQ=t
t=new D.b0("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.dR=t
t=new D.b0("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.bG=t
t=new D.b0("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$bb().push(t)
$.aF=t},
lU:function(){var t=$.$get$bb()
return new H.bJ(t,new D.jp(),[H.x(t,0)])},
jp:function jp(){},
b0:function b0(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
fl:function fl(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j1:function j1(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
var v=[C,H,J,P,W,S,L,M,O,T,A,V,U,Z,X,N,E,Y,B,Q,K,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.lK.prototype={}
J.K.prototype={
R:function(a,b){return a===b},
ga6:function(a){return H.cu(a)},
E:function(a){return H.iU(a)},
ga5:function(a){return new H.ci(H.l4(a),null)}}
J.i_.prototype={
E:function(a){return String(a)},
ga6:function(a){return a?519018:218159},
ga5:function(a){return C.V},
$isc_:1}
J.eT.prototype={
R:function(a,b){return null==b},
E:function(a){return"null"},
ga6:function(a){return 0},
ga5:function(a){return C.P},
$isbF:1}
J.dC.prototype={
ga6:function(a){return 0},
ga5:function(a){return C.O},
E:function(a){return String(a)},
$isn3:1}
J.iR.prototype={}
J.cD.prototype={}
J.cs.prototype={
E:function(a){var t=a[$.$get$mq()]
return t==null?this.dc(a):J.aP(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.cq.prototype={
bN:function(a,b){if(!!a.immutable$list)throw H.C(new P.b1(b))},
cA:function(a,b){if(!!a.fixed$length)throw H.C(new P.b1(b))},
j:function(a,b){this.cA(a,"add")
a.push(b)},
an:function(a,b){return new H.d3(a,b,[H.x(a,0),null])},
av:function(a,b){if(b<0||b>=a.length)return H.V(a,b)
return a[b]},
gai:function(a){if(a.length>0)return a[0]
throw H.C(H.lI())},
aS:function(a,b,c,d,e){var t,s,r
this.bN(a,"setRange")
P.ne(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aA(P.cf(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.C(H.pH())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.V(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.V(d,r)
a[b+s]=d[r]}},
cv:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.C(new P.bq(a))}return!1},
aT:function(a,b){var t
this.bN(a,"sort")
t=b==null?P.rd():b
H.fc(a,0,a.length-1,t)},
d4:function(a){return this.aT(a,null)},
ag:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aU(a[t],b))return!0
return!1},
E:function(a){return P.eQ(a,"[","]")},
a7:function(a,b){var t=H.a(a.slice(0),[H.x(a,0)])
return t},
ao:function(a){return this.a7(a,!0)},
gW:function(a){return new J.fH(a,a.length,0,null,[H.x(a,0)])},
ga6:function(a){return H.cu(a)},
gJ:function(a){return a.length},
sJ:function(a,b){this.cA(a,"set length")
if(b<0)throw H.C(P.cf(b,0,null,"newLength",null))
a.length=b},
w:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.C(H.aG(a,b))
if(b>=a.length||b<0)throw H.C(H.aG(a,b))
return a[b]},
h:function(a,b,c){this.bN(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.C(H.aG(a,b))
if(b>=a.length||b<0)throw H.C(H.aG(a,b))
a[b]=c},
$isbe:1,
$asbe:function(){},
$isR:1,
$asR:null,
$isL:1,
$asL:null,
$isz:1,
$asz:null}
J.lJ.prototype={}
J.fH.prototype={
gO:function(){return this.d},
M:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.C(H.cJ(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.d2.prototype={
aA:function(a,b){var t
if(typeof b!=="number")throw H.C(H.bM(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbR(b)
if(this.gbR(a)===t)return 0
if(this.gbR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbR:function(a){return a===0?1/a<0:a<0},
b0:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.C(new P.b1(""+a+".floor()"))},
bW:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.C(new P.b1(""+a+".round()"))},
a4:function(a,b,c){if(C.b.aA(b,c)>0)throw H.C(H.bM(b))
if(this.aA(a,b)<0)return b
if(this.aA(a,c)>0)return c
return a},
eP:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.C(P.cf(b,2,36,"radix",null))
t=a.toString(b)
if(C.e.e4(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aA(new P.b1("Unexpected toString result: "+t))
r=J.bh(s)
t=r.w(s,1)
q=+r.w(s,3)
if(r.w(s,2)!=null){t+=r.w(s,2)
q-=r.w(s,2).length}return t+C.e.ax("0",q)},
E:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga6:function(a){return a&0x1FFFFFFF},
aw:function(a,b){if(typeof b!=="number")throw H.C(H.bM(b))
return a+b},
ax:function(a,b){return a*b},
ab:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.C(new P.b1("Result of truncating division is "+H.t(t)+": "+H.t(a)+" ~/ "+b))},
cq:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aL:function(a,b){if(typeof b!=="number")throw H.C(H.bM(b))
return a<b},
aK:function(a,b){if(typeof b!=="number")throw H.C(H.bM(b))
return a>b},
ga5:function(a){return C.Y},
$isbC:1}
J.eS.prototype={
ga5:function(a){return C.X},
$isF:1,
$isbC:1,
$isQ:1}
J.i0.prototype={
ga5:function(a){return C.W},
$isF:1,
$isbC:1}
J.cr.prototype={
e4:function(a,b){if(b<0)throw H.C(H.aG(a,b))
if(b>=a.length)H.aA(H.aG(a,b))
return a.charCodeAt(b)},
c4:function(a,b){if(b>=a.length)throw H.C(H.aG(a,b))
return a.charCodeAt(b)},
aw:function(a,b){if(typeof b!=="string")throw H.C(P.fG(b,null,null))
return a+b},
d5:function(a,b,c){var t
if(c>a.length)throw H.C(P.cf(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
c0:function(a,b){return this.d5(a,b,0)},
d8:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aA(H.bM(c))
if(b<0)throw H.C(P.iZ(b,null,null))
if(typeof c!=="number")return H.de(c)
if(b>c)throw H.C(P.iZ(b,null,null))
if(c>a.length)throw H.C(P.iZ(c,null,null))
return a.substring(b,c)},
bs:function(a,b){return this.d8(a,b,null)},
eO:function(a){return a.toLowerCase()},
ax:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.C(C.t)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
eA:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.ax(c,t)+a},
e6:function(a,b,c){if(c>a.length)throw H.C(P.cf(c,0,a.length,null,null))
return H.ru(a,b,c)},
aA:function(a,b){var t
if(typeof b!=="string")throw H.C(H.bM(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
E:function(a){return a},
ga6:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga5:function(a){return C.Q},
gJ:function(a){return a.length},
w:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.C(H.aG(a,b))
if(b>=a.length||b<0)throw H.C(H.aG(a,b))
return a[b]},
$isbe:1,
$asbe:function(){},
$isA:1}
H.L.prototype={$asL:null}
H.ct.prototype={
gW:function(a){return new H.eW(this,this.gJ(this),0,null,[H.ak(this,"ct",0)])},
bo:function(a,b){return this.da(0,b)},
an:function(a,b){return new H.d3(this,b,[H.ak(this,"ct",0),null])},
a7:function(a,b){var t,s,r
t=H.a([],[H.ak(this,"ct",0)])
C.a.sJ(t,this.gJ(this))
for(s=0;s<this.gJ(this);++s){r=this.av(0,s)
if(s>=t.length)return H.V(t,s)
t[s]=r}return t},
ao:function(a){return this.a7(a,!0)}}
H.eW.prototype={
gO:function(){return this.d},
M:function(){var t,s,r,q
t=this.a
s=J.bh(t)
r=s.gJ(t)
if(this.b!==r)throw H.C(new P.bq(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.av(t,q);++this.c
return!0}}
H.dE.prototype={
gW:function(a){return new H.eX(null,J.bp(this.a),this.b,this.$ti)},
gJ:function(a){return J.dg(this.a)},
$asz:function(a,b){return[b]}}
H.el.prototype={$isL:1,
$asL:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
H.eX.prototype={
M:function(){var t=this.b
if(t.M()){this.a=this.c.$1(t.gO())
return!0}this.a=null
return!1},
gO:function(){return this.a},
$aseR:function(a,b){return[b]}}
H.d3.prototype={
gJ:function(a){return J.dg(this.a)},
av:function(a,b){return this.b.$1(J.nT(this.a,b))},
$asct:function(a,b){return[b]},
$asL:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
H.bJ.prototype={
gW:function(a){return new H.fj(J.bp(this.a),this.b,this.$ti)},
an:function(a,b){return new H.dE(this,b,[H.x(this,0),null])}}
H.fj.prototype={
M:function(){var t,s
for(t=this.a,s=this.b;t.M();)if(s.$1(t.gO())===!0)return!0
return!1},
gO:function(){return this.a.gO()}}
H.ew.prototype={}
H.lj.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.lk.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.kB.prototype={}
H.d9.prototype={
cu:function(a,b){if(!this.f.R(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bL()},
eJ:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ah(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.V(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.V(p,q)
p[q]=r
if(q===s.c)s.cb();++s.d}this.y=!1}this.bL()},
e0:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.V(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
eI:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aA(new P.b1("removeRange"))
P.ne(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d1:function(a,b){if(!this.r.R(0,a))return
this.db=b},
ek:function(a,b,c){var t=J.ai(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){J.di(a,c)
return}t=this.cx
if(t==null){t=P.lO(null,null)
this.cx=t}t.ay(new H.kw(a,c))},
ej:function(a,b){var t
if(!this.r.R(0,a))return
t=J.ai(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){this.bl()
return}t=this.cx
if(t==null){t=P.lO(null,null)
this.cx=t}t.ay(this.geu())},
el:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.mc(a)
if(b!=null)P.mc(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aP(a)
s[1]=b==null?null:J.aP(b)
for(r=new P.cI(t,t.r,null,null,[null]),r.c=t.e;r.M();)J.di(r.d,s)},
b_:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.b3(o)
p=H.bB(o)
this.el(q,p)
if(this.db===!0){this.bl()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ges()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.cJ().$0()}return s},
cG:function(a){return this.b.w(0,a)},
c2:function(a,b){var t=this.b
if(t.ak(a))throw H.C(P.h3("Registry: ports must be registered only once."))
t.h(0,a,b)},
bL:function(){var t=this.b
if(t.gJ(t)-this.c.a>0||this.y||!this.x)u.globalState.z.h(0,this.a,this)
else this.bl()},
bl:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aQ(0)
for(t=this.b,s=t.gaI(t),s=s.gW(s);s.M();)s.gO().dz()
t.aQ(0)
this.c.aQ(0)
u.globalState.z.ah(0,this.a)
this.dx.aQ(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.V(t,p)
J.di(q,t[p])}this.ch=null}},
gal:function(a){return this.a},
ges:function(){return this.d},
ge7:function(){return this.e}}
H.kw.prototype={
$0:function(){J.di(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.kc.prototype={
ea:function(){var t=this.a
if(t.b===t.c)return
return t.cJ()},
cN:function(){var t,s,r
t=this.ea()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.ak(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.aA(P.h3("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.dD(["command","close"])
r=new H.bL(!0,new P.fq(0,null,null,null,null,null,0,[null,P.Q])).aj(r)
s.toString
self.postMessage(r)}return!1}t.eG()
return!0},
cm:function(){if(self.window!=null)new H.kd(this).$0()
else for(;this.cN(););},
b7:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.cm()
else try{this.cm()}catch(r){t=H.b3(r)
s=H.bB(r)
q=u.globalState.Q
p=P.dD(["command","error","msg",H.t(t)+"\n"+H.t(s)])
p=new H.bL(!0,P.e0(null,P.Q)).aj(p)
q.toString
self.postMessage(p)}}}
H.kd.prototype={
$0:function(){if(!this.a.cN())return
P.qM(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.cG.prototype={
eG:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.b_(this.b)}}
H.kA.prototype={}
H.hK.prototype={
$0:function(){H.p6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.hL.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.dd(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.dd(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bL()},
$S:function(){return{func:1,v:true}}}
H.k2.prototype={}
H.da.prototype={
bq:function(a,b){var t,s,r
t=u.globalState.z.w(0,this.a)
if(t==null)return
s=this.b
if(s.gce())return
r=H.r0(b)
if(t.ge7()===s){s=J.bh(r)
switch(s.w(r,0)){case"pause":t.cu(s.w(r,1),s.w(r,2))
break
case"resume":t.eJ(s.w(r,1))
break
case"add-ondone":t.e0(s.w(r,1),s.w(r,2))
break
case"remove-ondone":t.eI(s.w(r,1))
break
case"set-errors-fatal":t.d1(s.w(r,1),s.w(r,2))
break
case"ping":t.ek(s.w(r,1),s.w(r,2),s.w(r,3))
break
case"kill":t.ej(s.w(r,1),s.w(r,2))
break
case"getErrors":s=s.w(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.w(r,1)
t.dx.ah(0,s)
break}return}u.globalState.f.a.ay(new H.cG(t,new H.kD(this,r),"receive"))},
R:function(a,b){if(b==null)return!1
return b instanceof H.da&&J.aU(this.b,b.b)},
ga6:function(a){return this.b.gbD()}}
H.kD.prototype={
$0:function(){var t=this.a.b
if(!t.gce())t.du(this.b)},
$S:function(){return{func:1}}}
H.e3.prototype={
bq:function(a,b){var t,s,r
t=P.dD(["command","message","port",this,"msg",b])
s=new H.bL(!0,P.e0(null,P.Q)).aj(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.w(0,this.b)
if(r!=null)r.postMessage(s)}},
R:function(a,b){if(b==null)return!1
return b instanceof H.e3&&J.aU(this.b,b.b)&&J.aU(this.a,b.a)&&J.aU(this.c,b.c)},
ga6:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aM()
s=this.a
if(typeof s!=="number")return s.aM()
r=this.c
if(typeof r!=="number")return H.de(r)
return(t<<16^s<<8^r)>>>0}}
H.d6.prototype={
dz:function(){this.c=!0
this.b=null},
du:function(a){if(this.c)return
this.b.$1(a)},
$isqc:1,
gbD:function(){return this.a},
gce:function(){return this.c}}
H.jI.prototype={
dj:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.ay(new H.cG(s,new H.jJ(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.e7(new H.jK(this,b),0),a)}else throw H.C(new P.b1("Timer greater than 0."))}}
H.jJ.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.jK.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.bQ.prototype={
ga6:function(a){var t=this.a
if(typeof t!=="number")return t.eY()
t=C.d.cq(t,0)^C.d.ab(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.bQ){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbD:function(){return this.a}}
H.bL.prototype={
aj:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.w(0,a)
if(s!=null)return["ref",s]
t.h(0,a,t.gJ(t))
t=J.ai(a)
if(!!t.$isdI)return["buffer",a]
if(!!t.$isd4)return["typed",a]
if(!!t.$isbe)return this.cY(a)
if(!!t.$isp3){r=this.gcV()
q=a.gaR()
q=H.dF(q,r,H.ak(q,"z",0),null)
q=P.cc(q,!0,H.ak(q,"z",0))
t=t.gaI(a)
t=H.dF(t,r,H.ak(t,"z",0),null)
return["map",q,P.cc(t,!0,H.ak(t,"z",0))]}if(!!t.$isn3)return this.cZ(a)
if(!!t.$isK)this.cR(a)
if(!!t.$isqc)this.b8(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isda)return this.d_(a)
if(!!t.$ise3)return this.d0(a)
if(!!t.$iscO){p=a.$static_name
if(p==null)this.b8(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isbQ)return["capability",a.a]
if(!(a instanceof P.as))this.cR(a)
return["dart",u.classIdExtractor(a),this.cX(u.classFieldsExtractor(a))]},
b8:function(a,b){throw H.C(new P.b1((b==null?"Can't transmit:":b)+" "+H.t(a)))},
cR:function(a){return this.b8(a,null)},
cY:function(a){var t=this.cW(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.b8(a,"Can't serialize indexable: ")},
cW:function(a){var t,s,r
t=[]
C.a.sJ(t,a.length)
for(s=0;s<a.length;++s){r=this.aj(a[s])
if(s>=t.length)return H.V(t,s)
t[s]=r}return t},
cX:function(a){var t
for(t=0;t<a.length;++t)C.a.h(a,t,this.aj(a[t]))
return a},
cZ:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.b8(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sJ(s,t.length)
for(r=0;r<t.length;++r){q=this.aj(a[t[r]])
if(r>=s.length)return H.V(s,r)
s[r]=q}return["js-object",t,s]},
d0:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d_:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbD()]
return["raw sendport",a]}}
H.cF.prototype={
aB:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.C(P.mj("Bad serialized message: "+H.t(a)))
switch(C.a.gai(a)){case"ref":if(1>=a.length)return H.V(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.V(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aZ(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
return H.a(this.aZ(r),[null])
case"mutable":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
return this.aZ(r)
case"const":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.aZ(r),[null])
s.fixed$length=Array
return s
case"map":return this.ef(a)
case"sendport":return this.eg(a)
case"raw sendport":if(1>=a.length)return H.V(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ee(a)
case"function":if(1>=a.length)return H.V(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.V(a,1)
return new H.bQ(a[1])
case"dart":s=a.length
if(1>=s)return H.V(a,1)
q=a[1]
if(2>=s)return H.V(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.aZ(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.C("couldn't deserialize: "+H.t(a))}},
aZ:function(a){var t,s,r
t=J.bh(a)
s=0
while(!0){r=t.gJ(a)
if(typeof r!=="number")return H.de(r)
if(!(s<r))break
t.h(a,s,this.aB(t.w(a,s)));++s}return a},
ef:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.V(a,1)
s=a[1]
if(2>=t)return H.V(a,2)
r=a[2]
q=P.n4()
this.b.push(q)
s=J.o_(J.mi(s,this.ged()))
for(t=J.bh(s),p=J.bh(r),o=0;o<t.gJ(s);++o)q.h(0,t.w(s,o),this.aB(p.w(r,o)))
return q},
eg:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.V(a,1)
s=a[1]
if(2>=t)return H.V(a,2)
r=a[2]
if(3>=t)return H.V(a,3)
q=a[3]
if(J.aU(s,u.globalState.b)){p=u.globalState.z.w(0,r)
if(p==null)return
o=p.cG(q)
if(o==null)return
n=new H.da(o,r)}else n=new H.e3(s,q,r)
this.b.push(n)
return n},
ee:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.V(a,1)
s=a[1]
if(2>=t)return H.V(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bh(s)
p=J.bh(r)
o=0
while(!0){n=t.gJ(s)
if(typeof n!=="number")return H.de(n)
if(!(o<n))break
q[t.w(s,o)]=this.aB(p.w(r,o));++o}return q}}
H.j0.prototype={}
H.jM.prototype={
as:function(a){var t,s,r
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
H.f3.prototype={
E:function(a){var t=this.b
if(t==null)return"NullError: "+H.t(this.a)
return"NullError: method not found: '"+H.t(t)+"' on null"}}
H.i2.prototype={
E:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.t(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.t(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.t(this.a)+")"}}
H.jO.prototype={
E:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.lm.prototype={
$1:function(a){if(!!J.ai(a).$iscn)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fr.prototype={
E:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.l9.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.la.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.lb.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.lc.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ld.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.cO.prototype={
E:function(a){return"Closure '"+H.n9(this).trim()+"'"},
geT:function(){return this},
$D:null}
H.jB.prototype={}
H.jn.prototype={
E:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dj.prototype={
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga6:function(a){var t,s
t=this.c
if(t==null)s=H.cu(this.a)
else s=typeof t!=="object"?J.bO(t):H.cu(t)
t=H.cu(this.b)
if(typeof s!=="number")return s.f0()
return(s^t)>>>0},
E:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.t(this.d)+"' of "+H.iU(t)}}
H.j5.prototype={
E:function(a){return"RuntimeError: "+H.t(this.a)}}
H.ci.prototype={
E:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga6:function(a){return J.bO(this.a)},
R:function(a,b){if(b==null)return!1
return b instanceof H.ci&&J.aU(this.a,b.a)}}
H.m.prototype={
gJ:function(a){return this.a},
gam:function(a){return this.a===0},
gaR:function(){return new H.ic(this,[H.x(this,0)])},
gaI:function(a){return H.dF(this.gaR(),new H.i1(this),H.x(this,0),H.x(this,1))},
ak:function(a){var t
if((a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dE(t,a)}else return this.ep(a)},
ep:function(a){var t=this.d
if(t==null)return!1
return this.b2(this.bd(t,this.b1(a)),a)>=0},
w:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aV(t,b)
return s==null?null:s.gaC()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aV(r,b)
return s==null?null:s.gaC()}else return this.eq(b)},
eq:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bd(t,this.b1(a))
r=this.b2(s,a)
if(r<0)return
return s[r].gaC()},
h:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bF()
this.b=t}this.c1(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bF()
this.c=s}this.c1(s,b,c)}else{r=this.d
if(r==null){r=this.bF()
this.d=r}q=this.b1(b)
p=this.bd(r,q)
if(p==null)this.bK(r,q,[this.bG(b,c)])
else{o=this.b2(p,b)
if(o>=0)p[o].saC(c)
else p.push(this.bG(b,c))}}},
ah:function(a,b){if(typeof b==="string")return this.cl(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cl(this.c,b)
else return this.er(b)},
er:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bd(t,this.b1(a))
r=this.b2(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.cs(q)
return q.gaC()},
aQ:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cB:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.C(new P.bq(this))
t=t.c}},
c1:function(a,b,c){var t=this.aV(a,b)
if(t==null)this.bK(a,b,this.bG(b,c))
else t.saC(c)},
cl:function(a,b){var t
if(a==null)return
t=this.aV(a,b)
if(t==null)return
this.cs(t)
this.c9(a,b)
return t.gaC()},
bG:function(a,b){var t,s
t=new H.ib(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cs:function(a){var t,s
t=a.gdS()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
b1:function(a){return J.bO(a)&0x3ffffff},
b2:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aU(a[s].gcE(),b))return s
return-1},
E:function(a){return P.pJ(this)},
aV:function(a,b){return a[b]},
bd:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
c9:function(a,b){delete a[b]},
dE:function(a,b){return this.aV(a,b)!=null},
bF:function(){var t=Object.create(null)
this.bK(t,"<non-identifier-key>",t)
this.c9(t,"<non-identifier-key>")
return t},
$isp3:1}
H.i1.prototype={
$1:function(a){return this.a.w(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ib.prototype={
gcE:function(){return this.a},
gaC:function(){return this.b},
gdS:function(){return this.d},
saC:function(a){return this.b=a}}
H.ic.prototype={
gJ:function(a){return this.a.a},
gW:function(a){var t,s
t=this.a
s=new H.id(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.id.prototype={
gO:function(){return this.d},
M:function(){var t=this.a
if(this.b!==t.r)throw H.C(new P.bq(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.l5.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.l6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.A]}}}
H.l7.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.A]}}}
H.dI.prototype={
ga5:function(a){return C.H},
$isdI:1}
H.d4.prototype={$isd4:1}
H.iw.prototype={
ga5:function(a){return C.I}}
H.eY.prototype={
gJ:function(a){return a.length},
$isby:1,
$asby:function(){},
$isbe:1,
$asbe:function(){}}
H.eZ.prototype={
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
a[b]=c}}
H.dJ.prototype={
$asby:function(){},
$asbe:function(){},
$asR:function(){return[P.F]},
$asL:function(){return[P.F]},
$asz:function(){return[P.F]},
$isR:1,
$isL:1,
$isz:1}
H.dL.prototype={
$asby:function(){},
$asbe:function(){},
$asR:function(){return[P.F]},
$asL:function(){return[P.F]},
$asz:function(){return[P.F]}}
H.f_.prototype={
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
a[b]=c},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.dK.prototype={
$asby:function(){},
$asbe:function(){},
$asR:function(){return[P.Q]},
$asL:function(){return[P.Q]},
$asz:function(){return[P.Q]},
$isR:1,
$isL:1,
$isz:1}
H.dM.prototype={
$asby:function(){},
$asbe:function(){},
$asR:function(){return[P.Q]},
$asL:function(){return[P.Q]},
$asz:function(){return[P.Q]}}
H.ix.prototype={
ga5:function(a){return C.J},
$isR:1,
$asR:function(){return[P.F]},
$isL:1,
$asL:function(){return[P.F]},
$isz:1,
$asz:function(){return[P.F]}}
H.iy.prototype={
ga5:function(a){return C.K},
$isR:1,
$asR:function(){return[P.F]},
$isL:1,
$asL:function(){return[P.F]},
$isz:1,
$asz:function(){return[P.F]}}
H.iz.prototype={
ga5:function(a){return C.L},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.iA.prototype={
ga5:function(a){return C.M},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.iB.prototype={
ga5:function(a){return C.N},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.iC.prototype={
ga5:function(a){return C.R},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.iD.prototype={
ga5:function(a){return C.S},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.f0.prototype={
ga5:function(a){return C.T},
gJ:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
H.iE.prototype={
ga5:function(a){return C.U},
gJ:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aA(H.aG(a,b))
return a[b]},
$isR:1,
$asR:function(){return[P.Q]},
$isL:1,
$asL:function(){return[P.Q]},
$isz:1,
$asz:function(){return[P.Q]}}
P.jZ.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.jY.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.k_.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.k0.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.fo.prototype={
ge_:function(){return this.b.b},
gcD:function(){return(this.c&1)!==0},
geo:function(){return(this.c&2)!==0},
gcC:function(){return this.c===8},
em:function(a){return this.b.b.bX(this.d,a)},
ev:function(a){if(this.c!==6)return!0
return this.b.b.bX(this.d,J.e9(a))},
ei:function(a){var t,s,r
t=this.e
s=J.b2(a)
r=this.b.b
if(H.dd(t,{func:1,args:[,,]}))return r.eK(t,s.gaF(a),a.gaE())
else return r.bX(t,s.gaF(a))},
en:function(){return this.b.b.cL(this.d)},
gbH:function(){return this.a}}
P.bK.prototype={
gdP:function(){return this.a===2},
gbE:function(){return this.a>=4},
cO:function(a,b){var t,s,r
t=$.al
if(t!==C.c){t.toString
if(b!=null)b=P.ny(b,t)}s=new P.bK(0,t,null,[null])
r=b==null?1:3
this.bu(new P.fo(null,s,r,a,b,[H.x(this,0),null]))
return s},
eN:function(a){return this.cO(a,null)},
cT:function(a){var t,s
t=$.al
s=new P.bK(0,t,null,this.$ti)
if(t!==C.c)t.toString
t=H.x(this,0)
this.bu(new P.fo(null,s,8,a,null,[t,t]))
return s},
bu:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbE()){s.bu(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.kZ(null,null,t,new P.ki(this,a))}},
ck:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbH()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbE()){p.ck(a)
return}this.a=p.a
this.c=p.c}t.a=this.bh(a)
s=this.b
s.toString
P.kZ(null,null,s,new P.km(t,this))}},
bJ:function(){var t=this.c
this.c=null
return this.bh(t)},
bh:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbH()
t.a=s}return s},
bz:function(a){var t,s
t=this.$ti
if(H.fv(a,"$isdw",t,"$asdw"))if(H.fv(a,"$isbK",t,null))P.nt(a,this)
else P.qT(a,this)
else{s=this.bJ()
this.a=4
this.c=a
P.dY(this,s)}},
bb:function(a,b){var t=this.bJ()
this.a=8
this.c=new P.cM(a,b)
P.dY(this,t)},
dB:function(a){return this.bb(a,null)},
dq:function(a,b){this.a=4
this.c=a},
$isdw:1,
gbi:function(){return this.a},
gdU:function(){return this.c}}
P.ki.prototype={
$0:function(){P.dY(this.a,this.b)},
$S:function(){return{func:1}}}
P.km.prototype={
$0:function(){P.dY(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.kj.prototype={
$1:function(a){var t=this.a
t.a=0
t.bz(a)},
$S:function(){return{func:1,args:[,]}}}
P.kk.prototype={
$2:function(a,b){this.a.bb(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.kl.prototype={
$0:function(){this.a.bb(this.b,this.c)},
$S:function(){return{func:1}}}
P.kp.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.en()}catch(q){s=H.b3(q)
r=H.bB(q)
if(this.c){p=J.e9(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.cM(s,r)
o.a=!0
return}if(!!J.ai(t).$isdw){if(t instanceof P.bK&&t.gbi()>=4){if(t.gbi()===8){p=this.b
p.b=t.gdU()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.eN(new P.kq(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.kq.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ko.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.em(this.c)}catch(r){t=H.b3(r)
s=H.bB(r)
q=this.a
q.b=new P.cM(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kn.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ev(t)===!0&&q.e!=null){p=this.b
p.b=q.ei(t)
p.a=!1}}catch(o){s=H.b3(o)
r=H.bB(o)
q=this.a
p=J.e9(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.cM(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fm.prototype={}
P.cB.prototype={
an:function(a,b){return new P.kC(b,this,[H.ak(this,"cB",0),null])},
gJ:function(a){var t,s
t={}
s=new P.bK(0,$.al,null,[P.Q])
t.a=0
this.b5(new P.jr(t),!0,new P.js(t,s),s.gc8())
return s},
ao:function(a){var t,s,r
t=H.ak(this,"cB",0)
s=H.a([],[t])
r=new P.bK(0,$.al,null,[[P.R,t]])
this.b5(new P.jt(this,s),!0,new P.ju(s,r),r.gc8())
return r}}
P.jr.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.js.prototype={
$0:function(){this.b.bz(this.a.a)},
$S:function(){return{func:1}}}
P.jt.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.m5(function(a){return{func:1,args:[a]}},this.a,"cB")}}
P.ju.prototype={
$0:function(){this.b.bz(this.a)},
$S:function(){return{func:1}}}
P.jq.prototype={}
P.bA.prototype={
bT:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.cz()
if((t&4)===0&&(this.e&32)===0)this.cc(this.gci())},
cH:function(a){return this.bT(a,null)},
cK:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gam(t)}else t=!1
if(t)this.r.bp(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.cc(this.gcj())}}}},
cw:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bw()
t=this.f
return t==null?$.$get$hu():t},
bw:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.cz()
if((this.e&32)===0)this.r=null
this.f=this.cg()},
ba:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.cn(a)
else this.bv(new P.k6(a,null,[H.ak(this,"bA",0)]))},
b9:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.cp(a,b)
else this.bv(new P.k8(a,b,null))},
dw:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.co()
else this.bv(C.u)},
bf:function(){},
bg:function(){},
cg:function(){return},
bv:function(a){var t,s
t=this.r
if(t==null){t=new P.kS(null,null,0,[H.ak(this,"bA",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bp(this)}},
cn:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.bY(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bx((t&4)!==0)},
cp:function(a,b){var t,s
t=this.e
s=new P.k4(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bw()
t=this.f
if(!!J.ai(t).$isdw&&t!==$.$get$hu())t.cT(s)
else s.$0()}else{s.$0()
this.bx((t&4)!==0)}},
co:function(){var t,s
t=new P.k3(this)
this.bw()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ai(s).$isdw&&s!==$.$get$hu())s.cT(t)
else t.$0()},
cc:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bx((t&4)!==0)},
bx:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gam(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gam(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bf()
else this.bg()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bp(this)},
dl:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.ny(b,t)
this.c=c},
gbi:function(){return this.e}}
P.k4.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.dd(s,{func:1,args:[P.as,P.cy]})
q=t.d
p=this.b
o=t.b
if(r)q.eL(o,p,this.c)
else q.bY(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.k3.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cM(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.fn.prototype={
gb6:function(){return this.a},
sb6:function(a){return this.a=a}}
P.k6.prototype={
bU:function(a){a.cn(this.b)}}
P.k8.prototype={
bU:function(a){a.cp(this.b,this.c)},
$asfn:function(){},
gaF:function(a){return this.b},
gaE:function(){return this.c}}
P.k7.prototype={
bU:function(a){a.co()},
gb6:function(){return},
sb6:function(a){throw H.C(new P.ch("No events after a done."))}}
P.kE.prototype={
bp:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.nM(new P.kF(this,a))
this.a=1},
cz:function(){if(this.a===1)this.a=3},
gbi:function(){return this.a}}
P.kF.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gb6()
t.b=q
if(q==null)t.c=null
r.bU(this.b)},
$S:function(){return{func:1}}}
P.kS.prototype={
gam:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sb6(b)
this.c=b}}}
P.dW.prototype={
b5:function(a,b,c,d){return this.dF(a,d,c,!0===b)},
cF:function(a,b,c){return this.b5(a,null,b,c)},
dF:function(a,b,c,d){return P.qS(this,a,b,c,d,H.ak(this,"dW",0),H.ak(this,"dW",1))},
cd:function(a,b){b.ba(a)},
dN:function(a,b,c){c.b9(a,b)},
$ascB:function(a,b){return[b]}}
P.dX.prototype={
ba:function(a){if((this.e&2)!==0)return
this.dd(a)},
b9:function(a,b){if((this.e&2)!==0)return
this.de(a,b)},
bf:function(){var t=this.y
if(t==null)return
t.cH(0)},
bg:function(){var t=this.y
if(t==null)return
t.cK()},
cg:function(){var t=this.y
if(t!=null){this.y=null
return t.cw()}return},
dI:function(a){this.x.cd(a,this)},
dM:function(a,b){this.x.dN(a,b,this)},
dK:function(){this.dw()},
dn:function(a,b,c,d,e,f,g){this.y=this.x.a.cF(this.gdH(),this.gdJ(),this.gdL())},
$asbA:function(a,b){return[b]}}
P.kC.prototype={
cd:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.b3(q)
r=H.bB(q)
P.r_(b,s,r)
return}b.ba(t)}}
P.cM.prototype={
E:function(a){return H.t(this.a)},
$iscn:1,
gaF:function(a){return this.a},
gaE:function(){return this.b}}
P.kX.prototype={}
P.kY.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.f4()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.C(t)
r=H.C(t)
r.stack=J.aP(s)
throw r},
$S:function(){return{func:1}}}
P.kH.prototype={
cM:function(a){var t,s,r,q
try{if(C.c===$.al){r=a.$0()
return r}r=P.nz(null,null,this,a)
return r}catch(q){t=H.b3(q)
s=H.bB(q)
r=P.fu(null,null,this,t,s)
return r}},
bY:function(a,b){var t,s,r,q
try{if(C.c===$.al){r=a.$1(b)
return r}r=P.nB(null,null,this,a,b)
return r}catch(q){t=H.b3(q)
s=H.bB(q)
r=P.fu(null,null,this,t,s)
return r}},
eL:function(a,b,c){var t,s,r,q
try{if(C.c===$.al){r=a.$2(b,c)
return r}r=P.nA(null,null,this,a,b,c)
return r}catch(q){t=H.b3(q)
s=H.bB(q)
r=P.fu(null,null,this,t,s)
return r}},
bM:function(a,b){if(b)return new P.kI(this,a)
else return new P.kJ(this,a)},
e3:function(a,b){return new P.kK(this,a)},
w:function(a,b){return},
cL:function(a){if($.al===C.c)return a.$0()
return P.nz(null,null,this,a)},
bX:function(a,b){if($.al===C.c)return a.$1(b)
return P.nB(null,null,this,a,b)},
eK:function(a,b,c){if($.al===C.c)return a.$2(b,c)
return P.nA(null,null,this,a,b,c)}}
P.kI.prototype={
$0:function(){return this.a.cM(this.b)},
$S:function(){return{func:1}}}
P.kJ.prototype={
$0:function(){return this.a.cL(this.b)},
$S:function(){return{func:1}}}
P.kK.prototype={
$1:function(a){return this.a.bY(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.ks.prototype={
gJ:function(a){return this.a},
gaI:function(a){var t=H.x(this,0)
return H.dF(new P.kt(this,[t]),new P.ku(this),t,H.x(this,1))},
ak:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.dD(a)},
dD:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
w:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.dG(b)},
dG:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
return r<0?null:s[r+1]},
h:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.m_()
this.b=t}this.c6(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.m_()
this.c=s}this.c6(s,b,c)}else this.dX(b,c)},
dX:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.m_()
this.d=t}s=this.at(a)
r=t[s]
if(r==null){P.m0(t,s,[a,b]);++this.a
this.e=null}else{q=this.au(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ah:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aU(this.c,b)
else return this.bI(b)},
bI:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cB:function(a,b){var t,s,r,q
t=this.bA()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.w(0,q))
if(t!==this.e)throw H.C(new P.bq(this))}},
bA:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
c6:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.m0(a,b,c)},
aU:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.qU(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
at:function(a){return J.bO(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.aU(a[s],b))return s
return-1}}
P.ku.prototype={
$1:function(a){return this.a.w(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kt.prototype={
gJ:function(a){return this.a.a},
gW:function(a){var t=this.a
return new P.fp(t,t.bA(),0,null,this.$ti)}}
P.fp.prototype={
gO:function(){return this.d},
M:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.C(new P.bq(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fq.prototype={
b1:function(a){return H.rs(a)&0x3ffffff},
b2:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gcE()
if(r==null?b==null:r===b)return s}return-1}}
P.kx.prototype={
gW:function(a){var t=new P.cI(this,this.r,null,null,[null])
t.c=this.e
return t},
gJ:function(a){return this.a},
ag:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dC(b)},
dC:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
cG:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ag(0,a)?a:null
else return this.dQ(a)},
dQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.mf(s,r).gca()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.c5(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.c5(r,b)}else return this.ay(b)},
ay:function(a){var t,s,r
t=this.d
if(t==null){t=P.qX()
this.d=t}s=this.at(a)
r=t[s]
if(r==null)t[s]=[this.by(a)]
else{if(this.au(r,a)>=0)return!1
r.push(this.by(a))}return!0},
ah:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.aU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.aU(this.c,b)
else return this.bI(b)},
bI:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return!1
this.c7(s.splice(r,1)[0])
return!0},
aQ:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
c5:function(a,b){if(a[b]!=null)return!1
a[b]=this.by(b)
return!0},
aU:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c7(t)
delete a[b]
return!0},
by:function(a){var t,s
t=new P.ky(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c7:function(a){var t,s
t=a.gdA()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
at:function(a){return J.bO(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aU(a[s].gca(),b))return s
return-1},
$isL:1,
$asL:null,
$isz:1,
$asz:null}
P.ky.prototype={
gca:function(){return this.a},
gdA:function(){return this.c}}
P.cI.prototype={
gO:function(){return this.d},
M:function(){var t=this.a
if(this.b!==t.r)throw H.C(new P.bq(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.kv.prototype={}
P.d1.prototype={
an:function(a,b){return H.dF(this,b,H.ak(this,"d1",0),null)},
a7:function(a,b){return P.cc(this,!0,H.ak(this,"d1",0))},
ao:function(a){return this.a7(a,!0)},
gJ:function(a){var t,s
t=this.gW(this)
for(s=0;t.M();)++s
return s},
E:function(a){return P.hZ(this,"(",")")},
$isz:1,
$asz:null}
P.eV.prototype={}
P.dN.prototype={$asR:null,$asL:null,$asz:null,$isR:1,$isL:1,$isz:1}
P.bz.prototype={
gW:function(a){return new H.eW(a,this.gJ(a),0,null,[H.ak(a,"bz",0)])},
av:function(a,b){return this.w(a,b)},
an:function(a,b){return new H.d3(a,b,[H.ak(a,"bz",0),null])},
a7:function(a,b){var t,s,r
t=H.a([],[H.ak(a,"bz",0)])
C.a.sJ(t,this.gJ(a))
for(s=0;s<this.gJ(a);++s){r=this.w(a,s)
if(s>=t.length)return H.V(t,s)
t[s]=r}return t},
ao:function(a){return this.a7(a,!0)},
E:function(a){return P.eQ(a,"[","]")},
$isR:1,
$asR:null,
$isL:1,
$asL:null,
$isz:1,
$asz:null}
P.il.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.V+=", "
t.a=!1
t=this.b
s=t.V+=H.t(a)
t.V=s+": "
t.V+=H.t(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ie.prototype={
gW:function(a){return new P.kz(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gJ:function(a){return(this.c-this.b&this.a.length-1)>>>0},
av:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.aA(P.eB(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.V(s,q)
return s[q]},
a7:function(a,b){var t=H.a([],this.$ti)
C.a.sJ(t,this.gJ(this))
this.dZ(t)
return t},
ao:function(a){return this.a7(a,!0)},
aQ:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.V(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
E:function(a){return P.eQ(this,"{","}")},
cJ:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.C(H.lI());++this.d
s=this.a
r=s.length
if(t>=r)return H.V(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
ay:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.V(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.cb();++this.d},
cb:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aS(s,0,q,t,r)
C.a.aS(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
dZ:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.aS(a,0,q,r,t)
return q}else{p=r.length-t
C.a.aS(a,0,p,r,t)
C.a.aS(a,p,p+this.c,this.a,0)
return this.c+p}},
di:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asL:null,
$asz:null}
P.kz.prototype={
gO:function(){return this.e},
M:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aA(new P.bq(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.V(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.je.prototype={
ap:function(a,b){var t
for(t=J.bp(b);t.M();)this.j(0,t.gO())},
a7:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sJ(t,this.a)
for(s=new P.cI(this,this.r,null,null,[null]),s.c=this.e,r=0;s.M();r=p){q=s.d
p=r+1
if(r>=t.length)return H.V(t,r)
t[r]=q}return t},
ao:function(a){return this.a7(a,!0)},
an:function(a,b){return new H.el(this,b,[H.x(this,0),null])},
E:function(a){return P.eQ(this,"{","}")},
$isL:1,
$asL:null,
$isz:1,
$asz:null}
P.jd.prototype={}
P.c_.prototype={}
P.aB.prototype={}
P.F.prototype={$isaB:1,
$asaB:function(){return[P.bC]}}
P.c1.prototype={
aw:function(a,b){return new P.c1(C.b.aw(this.a,b.gbc()))},
ax:function(a,b){return new P.c1(C.b.bW(this.a*b))},
aL:function(a,b){return C.b.aL(this.a,b.gbc())},
aK:function(a,b){return C.b.aK(this.a,b.gbc())},
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.c1))return!1
return this.a===b.a},
ga6:function(a){return this.a&0x1FFFFFFF},
aA:function(a,b){return C.b.aA(this.a,b.gbc())},
E:function(a){var t,s,r,q,p
t=new P.h0()
s=this.a
if(s<0)return"-"+new P.c1(0-s).E(0)
r=t.$1(C.b.ab(s,6e7)%60)
q=t.$1(C.b.ab(s,1e6)%60)
p=new P.h_().$1(s%1e6)
return""+C.b.ab(s,36e8)+":"+H.t(r)+":"+H.t(q)+"."+H.t(p)},
$isaB:1,
$asaB:function(){return[P.c1]},
gbc:function(){return this.a}}
P.h_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.A,args:[P.Q]}}}
P.h0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.A,args:[P.Q]}}}
P.cn.prototype={
gaE:function(){return H.bB(this.$thrownJsError)}}
P.f4.prototype={
E:function(a){return"Throw of null."}}
P.bP.prototype={
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
E:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.t(t)
q=this.gbC()+s+r
if(!this.a)return q
p=this.gbB()
o=P.mz(this.b)
return q+p+": "+H.t(o)},
gN:function(a){return this.c}}
P.f8.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.t(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.t(t)
else if(r>t)s=": Not in range "+H.t(t)+".."+H.t(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.t(t)}return s}}
P.hH.prototype={
gbC:function(){return"RangeError"},
gbB:function(){if(J.fy(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.t(t)},
gJ:function(a){return this.f}}
P.b1.prototype={
E:function(a){return"Unsupported operation: "+this.a}}
P.fg.prototype={
E:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.t(t):"UnimplementedError"}}
P.ch.prototype={
E:function(a){return"Bad state: "+this.a}}
P.bq.prototype={
E:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.t(P.mz(t))+"."}}
P.iL.prototype={
E:function(a){return"Out of Memory"},
gaE:function(){return},
$iscn:1}
P.fe.prototype={
E:function(a){return"Stack Overflow"},
gaE:function(){return},
$iscn:1}
P.fV.prototype={
E:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.t(t)+"' during its initialization"}}
P.kh.prototype={
E:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.t(t)}}
P.h4.prototype={
E:function(a){return"Expando:"+H.t(this.a)},
w:function(a,b){var t,s
t=this.be
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aA(P.fG(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.lQ(b,"expando$values")
return s==null?null:H.lQ(s,t)},
h:function(a,b,c){var t,s
t=this.be
if(typeof t!=="string")t.set(b,c)
else{s=H.lQ(b,"expando$values")
if(s==null){s=new P.as()
H.na(b,"expando$values",s)}H.na(s,t,c)}},
gN:function(a){return this.a}}
P.Q.prototype={$isaB:1,
$asaB:function(){return[P.bC]}}
P.z.prototype={
an:function(a,b){return H.dF(this,b,H.ak(this,"z",0),null)},
bo:function(a,b){return new H.bJ(this,b,[H.ak(this,"z",0)])},
a7:function(a,b){return P.cc(this,!0,H.ak(this,"z",0))},
ao:function(a){return this.a7(a,!0)},
gJ:function(a){var t,s
t=this.gW(this)
for(s=0;t.M();)++s
return s},
gaN:function(a){var t,s
t=this.gW(this)
if(!t.M())throw H.C(H.lI())
s=t.gO()
if(t.M())throw H.C(H.pI())
return s},
av:function(a,b){var t,s,r
if(b<0)H.aA(P.cf(b,0,null,"index",null))
for(t=this.gW(this),s=0;t.M();){r=t.gO()
if(b===s)return r;++s}throw H.C(P.eB(b,this,"index",null,s))},
E:function(a){return P.hZ(this,"(",")")},
$asz:null}
P.eR.prototype={}
P.R.prototype={$asR:null,$isL:1,$asL:null,$isz:1,$asz:null}
P.bF.prototype={
ga6:function(a){return P.as.prototype.ga6.call(this,this)},
E:function(a){return"null"}}
P.bC.prototype={$isaB:1,
$asaB:function(){return[P.bC]}}
P.as.prototype={constructor:P.as,$isas:1,
R:function(a,b){return this===b},
ga6:function(a){return H.cu(this)},
E:function(a){return H.iU(this)},
ga5:function(a){return new H.ci(H.l4(this),null)},
toString:function(){return this.E(this)}}
P.cy.prototype={}
P.A.prototype={$isaB:1,
$asaB:function(){return[P.A]}}
P.dT.prototype={
gJ:function(a){return this.V.length},
E:function(a){var t=this.V
return t.charCodeAt(0)==0?t:t},
gV:function(){return this.V}}
W.aa.prototype={}
W.fE.prototype={
E:function(a){return String(a)},
$isK:1,
sbk:function(a,b){return a.href=b}}
W.fF.prototype={
E:function(a){return String(a)},
$isK:1,
sbk:function(a,b){return a.href=b}}
W.fL.prototype={
sbk:function(a,b){return a.href=b}}
W.ec.prototype={}
W.cN.prototype={$iscN:1,$isK:1}
W.fQ.prototype={
gN:function(a){return a.name}}
W.ck.prototype={$isK:1,
gJ:function(a){return a.length}}
W.ee.prototype={
gal:function(a){return a.id}}
W.cm.prototype={
c3:function(a,b){var t,s
t=$.$get$mp()
s=t[b]
if(typeof s==="string")return s
s=W.oD(b) in a?b:P.oE()+b
t[b]=s
return s},
aH:function(a,b){return a.item(b)},
gJ:function(a){return a.length}}
W.eC.prototype={}
W.fT.prototype={}
W.ei.prototype={$isK:1}
W.ej.prototype={
gN:function(a){return a.name}}
W.fW.prototype={
gN:function(a){var t=a.name
if(P.mw()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.mw()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
E:function(a){return String(a)}}
W.ek.prototype={
E:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(this.gaJ(a))+" x "+H.t(this.gaG(a))},
R:function(a,b){var t
if(b==null)return!1
t=J.ai(b)
if(!t.$isf9)return!1
return a.left===t.gbS(b)&&a.top===t.gbZ(b)&&this.gaJ(a)===t.gaJ(b)&&this.gaG(a)===t.gaG(b)},
ga6:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaJ(a)
q=this.gaG(a)
return W.nw(W.cH(W.cH(W.cH(W.cH(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaG:function(a){return a.height},
gbS:function(a){return a.left},
gbZ:function(a){return a.top},
gaJ:function(a){return a.width},
$isf9:1,
$asf9:function(){}}
W.bc.prototype={
ge2:function(a){return new W.kb(a)},
E:function(a){return a.localName},
aq:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.my
if(t==null){t=H.a([],[W.cd])
s=new W.f2(t)
t.push(W.nu(null))
t.push(W.nx())
$.my=s
d=s}else d=t
t=$.mx
if(t==null){t=new W.fs(d)
$.mx=t
c=t}else{t.a=d
c=t}}if($.c2==null){t=document
s=t.implementation.createHTMLDocument("")
$.c2=s
$.lq=s.createRange()
s=$.c2
s.toString
r=s.createElement("base")
J.nZ(r,t.baseURI)
$.c2.head.appendChild(r)}t=$.c2
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.c2
if(!!this.$iscN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.c2.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.ag(C.F,a.tagName)){$.lq.selectNodeContents(q)
p=$.lq.createContextualFragment(b)}else{q.innerHTML=b
p=$.c2.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.c2.body
if(q==null?t!=null:q!==t)J.nY(q)
c.c_(p)
document.adoptNode(p)
return p},
e8:function(a,b,c){return this.aq(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
a.appendChild(this.aq(a,b,c,d))},
br:function(a,b){return this.d2(a,b,null,null)},
$isbc:1,
$isac:1,
$isas:1,
$isK:1,
gal:function(a){return a.id},
gcf:function(a){return a.namespaceURI},
geM:function(a){return a.tagName}}
W.l_.prototype={
$1:function(a){return!!J.ai(a).$isbc},
$S:function(){return{func:1,args:[,]}}}
W.h1.prototype={
gN:function(a){return a.name}}
W.h2.prototype={
gaF:function(a){return a.error}}
W.P.prototype={}
W.dn.prototype={
dv:function(a,b,c,d){return a.addEventListener(b,H.e7(c,1),!1)},
dT:function(a,b,c,d){return a.removeEventListener(b,H.e7(c,1),!1)}}
W.hr.prototype={
gN:function(a){return a.name}}
W.hs.prototype={
gN:function(a){return a.name}}
W.ez.prototype={
aH:function(a,b){return a.item(b)},
gJ:function(a){return a.length},
gN:function(a){return a.name}}
W.hw.prototype={
gal:function(a){return a.id}}
W.hF.prototype={
gN:function(a){return a.name}}
W.hI.prototype={$isbc:1,$isK:1,$isac:1,
gN:function(a){return a.name}}
W.i5.prototype={
gN:function(a){return a.name}}
W.ia.prototype={
sbk:function(a,b){return a.href=b}}
W.ig.prototype={
E:function(a){return String(a)}}
W.ik.prototype={
gN:function(a){return a.name}}
W.dG.prototype={
gaF:function(a){return a.error}}
W.ip.prototype={
gal:function(a){return a.id}}
W.iq.prototype={
gN:function(a){return a.name}}
W.ir.prototype={
eW:function(a,b,c){return a.send(b,c)},
bq:function(a,b){return a.send(b)}}
W.dH.prototype={
gal:function(a){return a.id},
gN:function(a){return a.name}}
W.bW.prototype={$isbW:1,$isas:1}
W.iF.prototype={$isK:1}
W.iG.prototype={
gN:function(a){return a.name}}
W.bg.prototype={
gaN:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.C(new P.ch("No elements"))
if(s>1)throw H.C(new P.ch("More than one element"))
return t.firstChild},
ap:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
h:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.V(s,b)
t.replaceChild(c,s[b])},
gW:function(a){var t=this.a.childNodes
return new W.ex(t,t.length,-1,null,[H.ak(t,"cW",0)])},
gJ:function(a){return this.a.childNodes.length},
w:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.V(t,b)
return t[b]},
$aseV:function(){return[W.ac]},
$asdN:function(){return[W.ac]},
$asR:function(){return[W.ac]},
$asL:function(){return[W.ac]},
$asz:function(){return[W.ac]}}
W.ac.prototype={
gey:function(a){return new W.bg(a)},
eH:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
E:function(a){var t=a.nodeValue
return t==null?this.d9(a):t},
$isac:1,
$isas:1,
geB:function(a){return a.parentNode},
geF:function(a){return a.previousSibling}}
W.f1.prototype={
gJ:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.C(P.eB(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.C(new P.b1("Cannot assign element of immutable List."))},
av:function(a,b){if(b<0||b>=a.length)return H.V(a,b)
return a[b]},
$isR:1,
$asR:function(){return[W.ac]},
$isL:1,
$asL:function(){return[W.ac]},
$isz:1,
$asz:function(){return[W.ac]},
$isby:1,
$asby:function(){return[W.ac]},
$isbe:1,
$asbe:function(){return[W.ac]}}
W.eD.prototype={
$asR:function(){return[W.ac]},
$asL:function(){return[W.ac]},
$asz:function(){return[W.ac]},
$isR:1,
$isL:1,
$isz:1}
W.eF.prototype={
$asR:function(){return[W.ac]},
$asL:function(){return[W.ac]},
$asz:function(){return[W.ac]},
$isR:1,
$isL:1,
$isz:1}
W.iJ.prototype={
gN:function(a){return a.name}}
W.iM.prototype={
gN:function(a){return a.name}}
W.iP.prototype={
gN:function(a){return a.name}}
W.fb.prototype={
aH:function(a,b){return a.item(b)},
gJ:function(a){return a.length},
gN:function(a){return a.name}}
W.jf.prototype={
gN:function(a){return a.name}}
W.fd.prototype={}
W.jl.prototype={
gaF:function(a){return a.error}}
W.jm.prototype={
gN:function(a){return a.name}}
W.ff.prototype={
aq:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bt(a,b,c,d)
t=W.oF("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.bg(s).ap(0,J.nU(t))
return s}}
W.jy.prototype={
aq:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bt(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.aq(t.createElement("table"),b,c,d)
t.toString
t=new W.bg(t)
r=t.gaN(t)
r.toString
t=new W.bg(r)
q=t.gaN(t)
s.toString
q.toString
new W.bg(s).ap(0,new W.bg(q))
return s}}
W.jz.prototype={
aq:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bt(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.aq(t.createElement("table"),b,c,d)
t.toString
t=new W.bg(t)
r=t.gaN(t)
s.toString
r.toString
new W.bg(s).ap(0,new W.bg(r))
return s}}
W.dU.prototype={$isdU:1}
W.jE.prototype={
gN:function(a){return a.name}}
W.bH.prototype={}
W.fk.prototype={$isK:1,
gN:function(a){return a.name}}
W.d8.prototype={$isd8:1,$isac:1,$isas:1,
gN:function(a){return a.name},
gcf:function(a){return a.namespaceURI}}
W.k5.prototype={
E:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(a.width)+" x "+H.t(a.height)},
R:function(a,b){var t,s,r
if(b==null)return!1
t=J.ai(b)
if(!t.$isf9)return!1
s=a.left
r=t.gbS(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbZ(b)
if(s==null?r==null:s===r){s=a.width
r=t.gaJ(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaG(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga6:function(a){var t,s,r,q
t=J.bO(a.left)
s=J.bO(a.top)
r=J.bO(a.width)
q=J.bO(a.height)
return W.nw(W.cH(W.cH(W.cH(W.cH(0,t),s),r),q))},
$isf9:1,
$asf9:function(){},
gaG:function(a){return a.height},
gbS:function(a){return a.left},
gbZ:function(a){return a.top},
gaJ:function(a){return a.width}}
W.k9.prototype={$isK:1}
W.ka.prototype={
gaG:function(a){return a.height},
gaJ:function(a){return a.width}}
W.kr.prototype={$isK:1}
W.e1.prototype={
gJ:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.C(P.eB(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.C(new P.b1("Cannot assign element of immutable List."))},
av:function(a,b){if(b<0||b>=a.length)return H.V(a,b)
return a[b]},
aH:function(a,b){return a.item(b)},
$isR:1,
$asR:function(){return[W.ac]},
$isL:1,
$asL:function(){return[W.ac]},
$isz:1,
$asz:function(){return[W.ac]},
$isby:1,
$asby:function(){return[W.ac]},
$isbe:1,
$asbe:function(){return[W.ac]}}
W.eE.prototype={
$asR:function(){return[W.ac]},
$asL:function(){return[W.ac]},
$asz:function(){return[W.ac]},
$isR:1,
$isL:1,
$isz:1}
W.eG.prototype={
$asR:function(){return[W.ac]},
$asL:function(){return[W.ac]},
$asz:function(){return[W.ac]},
$isR:1,
$isL:1,
$isz:1}
W.kP.prototype={$isK:1}
W.k1.prototype={
gaR:function(){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.A])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.V(t,q)
p=t[q]
o=J.b2(p)
if(o.gcf(p)==null)s.push(o.gN(p))}return s},
gdO:function(){return this.a}}
W.kb.prototype={
w:function(a,b){return this.a.getAttribute(b)},
h:function(a,b,c){this.a.setAttribute(b,c)},
gJ:function(a){return this.gaR().length}}
W.ke.prototype={
b5:function(a,b,c,d){return W.ns(this.a,this.b,a,!1,H.x(this,0))},
cF:function(a,b,c){return this.b5(a,null,b,c)}}
W.lZ.prototype={}
W.kf.prototype={
cw:function(){if(this.b==null)return
this.ct()
this.b=null
this.d=null
return},
bT:function(a,b){if(this.b==null)return;++this.a
this.ct()},
cH:function(a){return this.bT(a,null)},
cK:function(){if(this.b==null||this.a<=0)return;--this.a
this.cr()},
cr:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.nQ(r,this.c,t,!1)}},
ct:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.nR(r,this.c,t,!1)}},
dm:function(a,b,c,d,e){this.cr()}}
W.kg.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.e_.prototype={
aP:function(a){return $.$get$nv().ag(0,W.dm(a))},
az:function(a,b,c){var t,s,r
t=W.dm(a)
s=$.$get$m1()
r=s.w(0,H.t(t)+"::"+b)
if(r==null)r=s.w(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dr:function(a){var t,s
t=$.$get$m1()
if(t.gam(t)){for(s=0;s<262;++s)t.h(0,C.E[s],W.ri())
for(s=0;s<12;++s)t.h(0,C.h[s],W.rj())}},
$iscd:1,
gcS:function(){return this.a}}
W.cW.prototype={
gW:function(a){return new W.ex(a,this.gJ(a),-1,null,[H.ak(a,"cW",0)])},
$isR:1,
$asR:null,
$isL:1,
$asL:null,
$isz:1,
$asz:null}
W.f2.prototype={
aP:function(a){return C.a.cv(this.a,new W.iI(a))},
az:function(a,b,c){return C.a.cv(this.a,new W.iH(a,b,c))},
$iscd:1}
W.iI.prototype={
$1:function(a){return a.aP(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.iH.prototype={
$1:function(a){return a.az(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.e2.prototype={
aP:function(a){return this.a.ag(0,W.dm(a))},
az:function(a,b,c){var t,s
t=W.dm(a)
s=this.c
if(s.ag(0,H.t(t)+"::"+b))return this.d.e1(c)
else if(s.ag(0,"*::"+b))return this.d.e1(c)
else{s=this.b
if(s.ag(0,H.t(t)+"::"+b))return!0
else if(s.ag(0,"*::"+b))return!0
else if(s.ag(0,H.t(t)+"::*"))return!0
else if(s.ag(0,"*::*"))return!0}return!1},
dt:function(a,b,c,d){var t,s,r
this.a.ap(0,c)
t=b.bo(0,new W.kQ())
s=b.bo(0,new W.kR())
this.b.ap(0,t)
r=this.c
r.ap(0,C.G)
r.ap(0,s)},
$iscd:1,
gcS:function(){return this.d}}
W.kQ.prototype={
$1:function(a){return!C.a.ag(C.h,a)},
$S:function(){return{func:1,args:[,]}}}
W.kR.prototype={
$1:function(a){return C.a.ag(C.h,a)},
$S:function(){return{func:1,args:[,]}}}
W.kU.prototype={
az:function(a,b,c){if(this.df(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.mg(a).a.getAttribute("template")==="")return this.e.ag(0,b)
return!1}}
W.kV.prototype={
$1:function(a){return"TEMPLATE::"+H.t(a)},
$S:function(){return{func:1,args:[,]}}}
W.kT.prototype={
aP:function(a){var t=J.ai(a)
if(!!t.$isdP)return!1
t=!!t.$isay
if(t&&W.dm(a)==="foreignObject")return!1
if(t)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.e.c0(b,"on"))return!1
return this.aP(a)},
$iscd:1}
W.ex.prototype={
M:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.mf(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gO:function(){return this.d}}
W.cd.prototype={}
W.kO.prototype={}
W.fs.prototype={
c_:function(a){new W.kW(this).$2(a,null)},
aW:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
dW:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mg(a)
r=s.gdO().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.b3(n)}p="element unprintable"
try{p=J.aP(a)}catch(n){H.b3(n)}try{o=W.dm(a)
this.dV(a,b,t,p,o,s,r)}catch(n){if(H.b3(n) instanceof P.bP)throw n
else{this.aW(a,b)
window
m="Removing corrupted element "+H.t(p)
if(typeof console!="undefined")console.warn(m)}}},
dV:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.aW(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.aP(a)){this.aW(a,b)
window
t="Removing disallowed element <"+H.t(e)+"> from "+J.aP(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.az(a,"is",g)){this.aW(a,b)
window
t="Removing disallowed type extension <"+H.t(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaR()
s=H.a(t.slice(0),[H.x(t,0)])
for(r=f.gaR().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.V(s,r)
q=s[r]
if(!this.a.az(a,J.o0(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.t(e)+" "+q+'="'+H.t(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ai(a).$isdU)this.c_(a.content)}}
W.kW.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.dW(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aW(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.nW(t)}catch(q){H.b3(q)
p=t
if(r){if(J.nV(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.ac,W.ac]}}}
P.kG.prototype={
aO:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.ab(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
ex:function(){this.aO()
var t=this.a
this.aO()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
ds:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.ab(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.ab(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.ab(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.ab(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.ab(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.ab(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.ab(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aO()
this.aO()
this.aO()
this.aO()}}
P.fC.prototype={$isK:1}
P.cj.prototype={$isK:1}
P.h5.prototype={$isK:1}
P.h6.prototype={$isK:1}
P.h7.prototype={$isK:1}
P.h8.prototype={$isK:1}
P.h9.prototype={$isK:1}
P.ha.prototype={$isK:1}
P.hb.prototype={$isK:1}
P.hc.prototype={$isK:1}
P.hd.prototype={$isK:1}
P.he.prototype={$isK:1}
P.hf.prototype={$isK:1}
P.hg.prototype={$isK:1}
P.hh.prototype={$isK:1}
P.hi.prototype={$isK:1}
P.hj.prototype={$isK:1}
P.hk.prototype={$isK:1}
P.ht.prototype={$isK:1}
P.aN.prototype={$isK:1}
P.hG.prototype={$isK:1}
P.im.prototype={$isK:1}
P.io.prototype={$isK:1}
P.iQ.prototype={$isK:1}
P.dP.prototype={$isdP:1,$isK:1}
P.ay.prototype={
aq:function(a,b,c,d){var t,s,r,q,p,o
t=H.a([],[W.cd])
t.push(W.nu(null))
t.push(W.nx())
t.push(new W.kT())
c=new W.fs(new W.f2(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.l).e8(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.bg(q)
o=t.gaN(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
$isay:1,
$isK:1}
P.jv.prototype={$isK:1}
P.jx.prototype={$isK:1}
P.cC.prototype={}
P.jF.prototype={$isK:1}
P.jP.prototype={$isK:1}
P.jQ.prototype={$isK:1}
P.dZ.prototype={$isK:1}
P.kL.prototype={$isK:1}
P.kM.prototype={$isK:1}
P.kN.prototype={$isK:1}
S.fD.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Math Book",H.a([$.M,$.an,$.ag],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Giant Map",H.a([$.M,$.an],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microscope",H.a([$.Y,$.an,$.bd],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Star Chart",H.a([$.M,$.an],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("History Book",H.a([$.M,$.an],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Radioactive Rock",H.a([$.hQ,$.eO],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.Y,$.an],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.er,$.i)
q.h(0,$.aj,$.i)
q.h(0,$.ev,$.h)
q.h(0,$.ae,$.v)
q.h(0,$.b6,$.h)
p=$.j
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.l
o=o+n+" to stop "
m=$.u
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.pS
n=[U.b]
q.h(0,new R.I("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
q.h(0,new R.I("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.l+" to stop "+$.u+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.nd(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
p="The "+m+" finds a massive library, filled with books. The "
l=$.l
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.o
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.h(0,new R.I("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.d5(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.dr,$.v)
s.h(0,$.b6,$.i)
p=$.j
o="The "+p+"  is approached by a "
l=$.l
s.h(0,new R.I("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.u+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.l
s.h(0,new R.I("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.u+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.cv(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
s.h(0,new R.I("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.l+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.d5(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
m.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.dr,$.v)
t.h(0,$.b6,$.i)
t.h(0,$.aE,$.v)
t.h(0,$.mC,$.v)
r=$.j
q="The "+r+"  is approached by a "
p=$.l
q=q+p+" who offers them a grant to study "
o=$.T
t.h(0,new R.I("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.u+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.d5(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
o=$.l
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.u
r=r+p+".  It is up to the "
q=$.j
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.T
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.pY
t.h(0,new R.I("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.ce(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
t.h(0,new R.I("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.u+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.l+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
L.fI.prototype={
$1:function(a){return!a.gb3()},
$S:function(){return{func:1,args:[L.c0]}}}
L.c0.prototype={
B:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Perfectly Generic Object",H.a([],[G.H]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.x(t,0)]))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.A]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bs,$.h)
q.h(0,$.aj,$.v)
q.h(0,$.c6,$.h)
q.h(0,$.aE,$.i)
q.h(0,$.cQ,$.v)
p=$.j
o="The "+p+" learns that all of the local "
n=$.l
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.u+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.o
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aK+". The "+p+" has won! "
i=[U.b]
q.h(0,new R.y("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.G(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=this.f
j.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.dt,$.h)
s.h(0,$.ds,$.v)
s.h(0,$.cT,$.i)
s.h(0,$.bk,$.h)
s.h(0,$.aM,$.v)
p=$.j
o="The "+p+" learns that all of the local "
n=$.l
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.u+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.o
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aK+". The "+p+" has won! "
s.h(0,new R.y("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.G(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.aj,$.v)
t.h(0,$.aI,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.l
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.u
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.o
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aK+". The "+r+" has won! "
t.h(0,new R.I("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.G(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.lR(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
l=$.j
r="The "+l+" learns that all of the local "
m=$.l
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.o
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aK+". The "+l+" has won! "
t.h(0,new R.y("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.G(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.a9)},
E:function(a){return this.Q},
S:function(a,b,c,d,e){var t=this.Q
this.r=new X.em("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.ed]),H.a([],[M.dp]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.B()
this.D()
t=this.e
if($.$get$ea().ak(t))H.aA("Duplicate aspect id for "+this.E(0)+": "+t+" is already registered for "+J.aP($.$get$ea().w(0,t))+".")
$.$get$ea().h(0,t,this)},
gal:function(a){return this.e},
gN:function(a){return this.Q},
gbQ:function(){return this.cx},
gb3:function(){return this.cy},
gaY:function(){return this.dx},
gcQ:function(){return this.dy},
gP:function(){return this.fy},
gG:function(){return this.go},
gX:function(){return this.id},
ga_:function(){return this.k1},
gaf:function(){return this.k2},
gZ:function(){return this.r1},
gY:function(){return this.r2},
gK:function(){return this.rx},
gI:function(){return this.ry}}
L.S.prototype={}
M.fJ.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Barbells",H.a([$.aO,$.hO,$.Y],s),null,!1,"Strength Building Metal")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Basketball",H.a([$.hM,$.dB],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Baseball Bat",H.a([$.mS,$.aq],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rubber Ball",H.a([$.hM,$.dB],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.b9,$.ax],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hockey Stick",H.a([$.mS,$.aq,$.cb],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Trophy",H.a([$.Y,$.eP],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Boxing Glove",H.a([$.pl,$.dB],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Yoga Mat",H.a([$.dB,$.aY],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.co,$.v)
q.h(0,$.aC,$.i)
q.h(0,$.bk,$.v)
p=$.j
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.l
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.u+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.h(0,new R.I("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.l
q.h(0,new R.I("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.u+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.ce(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
n="The "+m+"  wanders into a bunch of "
p=$.l
q.h(0,new R.I("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.dO(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.co,$.i)
t.h(0,$.dv,$.i)
t.h(0,$.aC,$.i)
s=$.j
r="The "+s+" finds a team of underdog "
p=$.l
t.h(0,new R.I("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.nd(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
p=$.l
s="A group of "+p+"s approach the "
r=$.j
s=s+r+". Apparently their sports team lost their coach to the "+$.o+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.u
t.h(0,new R.I("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.ce(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
k=$.l
p="A group of "+k+"s approach the "
r=$.j
t.h(0,new R.I("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.o+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.T+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
O.fK.prototype={
ar:function(){return!0},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cod Piece",H.a([$.ah,$.af,$.aJ,$.E,$.aq],s),"God damn it, MI. ",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poisoned Candy",H.a([$.mQ,$.E,$.hS],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Lyre",H.a([$.aZ,$.aq,$.aX,$.E,$.ba],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Snare Trap",H.a([$.ah,$.aZ,$.E,$.eL],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 2},
a9:function(){return 0.5},
aa:function(){return 3},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.b4,$.h)
t.h(0,$.eu,$.h)
t.h(0,$.aW,$.h)
t.h(0,$.bU,$.h)
t.h(0,$.b5,$.h)
t.h(0,$.dq,$.h)
r="After all the bullshit the "+$.o+" has put the native "
q=$.l
r=r+q+"s through, the "
p=$.j
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ad+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.u
m=[U.b]
t.h(0,new R.O("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.n(),!1,!1,new Y.bX("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.l
n="A group of jubilant "+p+"s are following the "
q=$.j
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.u
t.h(0,new R.O("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.o+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.O("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.o+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.n(),!1,!1,new Y.fR("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.j
q=q+r+" organizes a huge festival for all the "
p=$.l
t.h(0,new R.ao("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l}}
L.fM.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Bear",H.a([$.b9,$.aS,$.D],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Thought",H.a([$.mO,$.pE,$.dy],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Doorway",H.a([$.dy,$.D],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aL,$.h)
t.h(0,$.bt,$.i)
t.h(0,$.aC,$.i)
t.h(0,$.cT,$.p)
r=$.j
q="The "+r+" hears a "+$.l+" "+$.u+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.o
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.h(0,new R.y("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.G(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gG:function(){return this.m},
gK:function(){return this.n},
ga_:function(){return this.q},
gZ:function(){return this.t},
gY:function(){return this.u},
gX:function(){return this.v},
gI:function(){return this.C}}
T.fN.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Mystical Vial of Blood",H.a([$.bd,$.aX,$.D,$.bv],s),null,!1,"Vial of Not-ABs Oil")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bananaphone",H.a([$.c8,$.aX,$.D,$.bE],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Friendship Bracelet",H.a([$.ah,$.aX,$.D,$.bv,$.lC],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bonding Manacles",H.a([$.Y,$.eL,$.D,$.bv,$.lC,$.b_],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Friendship Stairs",H.a([$.aq,$.mX,$.aX,$.bv,$.D,$.af],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.A]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.br,$.h)
q.h(0,$.mI,$.h)
q.h(0,$.aE,$.i)
p=$.j
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.l
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.T+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.h(0,new R.I("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.ce(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=$.l
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.u+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.o
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.j
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aK+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.h(0,new R.y("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.G(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.bk,$.h)
s.h(0,$.b5,$.v)
s.h(0,$.ae,$.v)
s.h(0,$.hq,$.h)
s.h(0,$.aW,$.v)
p=$.j
o="The "+p+"  and the "
m=$.cx
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.o
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.h(0,new R.y("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.G(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.cw(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
h=$.j
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.l
i=i+m+"s explains that before  "
p=$.o
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aK+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.pP
s.h(0,new R.y("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.G(l,h,o)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
o="The "+p+" learns of the "
h=$.ad
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.l
o=o+l+" explains that the "
j=$.o
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.aK+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.h(0,new R.y("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.G(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.l
h=h+i+" on "+$.ad+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.cV+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.h(0,new R.O("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.d5(),!1,!1,new Y.aD("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.l+" on "
m=$.ad
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.cV+" is now more popular with your friends than you are."
s.h(0,new R.O("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.lS(),!1,!1,new Y.aD("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
m="The "+p+"  and the "
h=$.cx
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.o
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.h(0,new R.y("Pale Shipping Dungeon",!1,[new U.b(m),new U.G(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.j)+".",o)],H.a([],k),R.cw(),!1,!1,new Y.f6(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a8)
n.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.aj,$.v)
t.h(0,$.aI,$.i)
r="In the wake of the defeat of the "+$.o+" it becomes really how isolated the individual "
q=$.l
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.j
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.cV+" to kick your ass, but luckily they have several."
t.h(0,new R.O("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.ce(),!1,!1,new Y.aD("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
q="The "+o+" learns that two prominent "
p=$.l
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.o
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aK+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.u+"ing. "
t.h(0,new R.y("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.G(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.m},
gaf:function(){return this.n},
gG:function(){return this.q},
gK:function(){return this.t},
ga_:function(){return this.u},
gZ:function(){return this.v},
gY:function(){return this.A},
gX:function(){return this.H},
gI:function(){return this.T}}
T.fP.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Pan's Pipe",H.a([$.ba,$.aq,$.aX,$.D],s),null,!1,"Smonkin Weeds Pipe")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skeleton Key",H.a([$.cX,$.D],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Inspector's Fan",H.a([$.ax,$.Y,$.aX,$.D],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Jet Pack",H.a([$.ca,$.Y,$.b9,$.D,$.af],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.A]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.aI,$.i)
q.h(0,$.dv,$.h)
q.h(0,$.ae,$.i)
p=$.j
o="The "+p+" tries posting a letter through the "
n=$.T
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.o
o=o+m+" has screwed with the mail system, crippling the "
l=$.l
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aK+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.pT
i=[U.b]
q.h(0,new R.y("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.G(j,p,l)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.f
m.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aj,$.h)
s.h(0,$.dv,$.i)
s.h(0,$.ae,$.i)
s.h(0,$.aC,$.i)
s.h(0,$.aI,$.i)
p=$.j
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.T
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.l
k=l+k+" fields. The "+k+"s "+$.u+"ing is so joyful it's literally deafening. "
l=$.o
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.aK+". The "+p+" is finally free to continue improving the land with wind. "
s.h(0,new R.y("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.G(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.aM,$.h)
t.h(0,$.lw,$.h)
t.h(0,$.dv,$.v)
t.h(0,$.aI,$.v)
r=$.j
q="The "+r+" is chilling in a "+$.l+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.o
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.T
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ad+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aK+". The "+r+" has become the storm master. It is them. "
t.h(0,new R.y("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.G(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.m},
gaf:function(){return this.n},
gG:function(){return this.q},
gK:function(){return this.t},
ga_:function(){return this.u},
gZ:function(){return this.v},
gY:function(){return this.A},
gX:function(){return this.H},
gI:function(){return this.T}}
A.fS.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Colonel Sassacre's Daunting Text ",H.a([$.M,$.aO,$.bE,$.hO],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wise Guy Book",H.a([$.M,$.bE],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Beagle Puss",H.a([$.bd,$.bE],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Novelty Microphone",H.a([$.b9,$.ax,$.bE],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Banana",H.a([$.c8,$.bE],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fake Flower",H.a([$.ah,$.bE],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Trick Handcuffs",H.a([$.Y,$.bE],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.aW,$.i)
q.h(0,$.aV,$.h)
q.h(0,$.aC,$.i)
p=$.j
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.l
o=o+n+"s are too scared to even "+$.u+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.o+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.h(0,new R.I("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.co,$.v)
s.h(0,$.aC,$.h)
s.h(0,$.aV,$.h)
s.h(0,$.b4,$.h)
o=$.j
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ad
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.l
k=k+j+"s let out a braying "+$.u+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.pW
s.h(0,new R.I("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.b7,$.v)
t.h(0,$.aH,$.i)
t.h(0,$.aV,$.h)
t.h(0,$.aC,$.i)
t.h(0,$.lt,$.i)
r=$.j
q="The "+r+"  is approached by a Crafty "
o=$.l
q=q+o+" who offers them a magical "
n=$.T
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.u
t.h(0,new R.I("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
M.fU.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Can of Spray Paint",H.a([$.aR,$.Y],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sensible Chuckles Magazine",H.a([$.M,$.au,$.bE,$.ag],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Gentleman's Razor",H.a([$.pB,$.Y,$.cY],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("How To Draw Manga",H.a([$.M,$.au,$.ag],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Painting of a Horse Boxing a Football Player",H.a([$.aR,$.aQ,$.M],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Collection of Classical Works",H.a([$.au,$.M],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Documentary on Horses",H.a([$.au,$.ar,$.aQ],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Paint Set",H.a([$.aR,$.au],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shaving Cream",H.a([$.ca,$.au,$.Y],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Classy Suit",H.a([$.ah,$.au],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("The Fatherly Gent's Shaving Almanac ",H.a([$.M,$.au,$.ag],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bt,$.i)
q.h(0,$.b6,$.h)
q.h(0,$.ae,$.i)
p=$.j
o="The "+p+" visits a beautiful "
n=$.T
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.l
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.o+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.u+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.h(0,new R.I("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.co,$.v)
s.h(0,$.aC,$.i)
s.h(0,$.aV,$.v)
s.h(0,$.aj,$.i)
s.h(0,$.b4,$.h)
o=$.j
n="The "+o+" finds a troupe of dejected looking "
l=$.l
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ad
l=l+n+" "
k=$.T
s.h(0,new R.I("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.u+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.eu,$.v)
t.h(0,$.aW,$.v)
t.h(0,$.dq,$.v)
t.h(0,$.aH,$.v)
t.h(0,$.aj,$.i)
t.h(0,$.ae,$.i)
r=$.j
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.u
q=q+o+"ingworth, "
n=$.l
q=q+n+" heiress to the "+$.T+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.pM
t.h(0,new R.I("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
V.fX.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Trendy Fabric",H.a([$.aR,$.ah],s),null,!1,"Weird Tasting Candy Paper")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Necklace",H.a([$.aR,$.mU,$.lC],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sewing Needle",H.a([$.Y,$.px,$.dA],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.lA
r=A.f("Broom",H.a([r,$.aq,$.aO,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rolling Pin",H.a([$.aq,$.pD,$.aO],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Velvet Pillow",H.a([$.ah,$.aY,$.aX,$.aR,$.d0],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Yarn Ball",H.a([$.aR,$.ah],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Refrigerator",H.a([$.b_,$.hO,$.Y,$.bV],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Photo Album",H.a([$.aR,$.M],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Cubes",H.a([$.bV],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cast Iron Skillet",H.a([$.Y,$.ca,$.aO,$.hO,$.pm],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Failed Dish",H.a([$.hS],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dr Pepper BBQ Sauce",H.a([$.hS],s),"Gross.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Potted Plant",H.a([$.aR,$.lB,$.dz],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chicken Leg",H.a([$.c8,$.d_,$.cX],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juicy Steak",H.a([$.c8,$.d_],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Wedding Cake",H.a([$.aR,$.c8,$.bv],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.b4,$.i)
q.h(0,$.b5,$.i)
q.h(0,$.aW,$.v)
p=$.j
o="The "+p+" is visited by a Beautiful "
n=$.l
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.T
l=[U.b]
q.h(0,new R.I("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.u+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.n(),!1,!1,new Y.eh("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aW,$.h)
s.h(0,$.aC,$.i)
s.h(0,$.dq,$.h)
s.h(0,$.bU,$.i)
s.h(0,$.aj,$.h)
p=$.j
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.T
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.l
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.u+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.pU
s.h(0,new R.I("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.cP,$.h)
t.h(0,$.aj,$.i)
t.h(0,$.bS,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.hq,$.h)
r=$.j
q="The "+r+" finds a loom, and a Wizened "
p=$.l
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.T
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.u+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.h(0,new R.I("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
U.fY.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ag,$.ax,$.M,$.aZ,$.D,$.af],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Egg Timer",H.a([$.ar,$.aX,$.D,$.aZ],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skull Timer",H.a([$.cX,$.aX,$.D,$.aZ],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poison Flask",H.a([$.bd,$.D,$.hS],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Gorgon Head",H.a([$.bd,$.D,$.bV,$.aZ,$.eL,$.hV,$.bw],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Obituary",H.a([$.b_,$.bw,$.aZ,$.M,$.D],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.A]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.c6,$.h)
q.h(0,$.bs,$.i)
q.h(0,$.dv,$.v)
q.h(0,$.aj,$.v)
q.h(0,$.aE,$.i)
p=$.j
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.l
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.T
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.o
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aK+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.h(0,new R.y("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.G(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.c6,$.h)
s.h(0,$.bs,$.i)
s.h(0,$.cU,$.a8)
s.h(0,$.cR,$.i)
s.h(0,$.mC,$.i)
s.h(0,$.br,$.i)
s.h(0,$.bs,$.i)
s.h(0,$.aj,$.v)
s.h(0,$.aE,$.i)
s.h(0,$.bT,$.i)
p=$.j
o="The "+p+" has found a group of Violent "
m=$.l
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ad
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.u+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.o
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aK+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.h(0,new R.y("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.G(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.cv(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.T
p=p+l+"s alike. "
l=$.l+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.o
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aK+". The "+m+" is finally free to continue improving the land. "
s.h(0,new R.y("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.G(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.aE,$.h)
t.h(0,$.oN,$.a8)
t.h(0,$.er,$.v)
r=$.j
q="The "+r+" finds a small dungeon bearing the image of "
p=$.o
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.l+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.h(0,new R.y("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.G(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.cv(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
k=$.j
p="The "+k+" learns from one of their "
r=$.l
p=p+r+"s that there is an ancient prophecy of a "
l=$.ad
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.T
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.o
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aK+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.pL
t.h(0,new R.y("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.G(o,k,q)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.m},
gaf:function(){return this.n},
gG:function(){return this.q},
gK:function(){return this.t},
ga_:function(){return this.u},
gZ:function(){return this.v},
gY:function(){return this.A},
gaY:function(){return this.H},
gcQ:function(){return this.T},
gX:function(){return this.bO},
gI:function(){return this.bP}}
Z.fZ.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Dream Diary",H.a([$.M,$.ag,$.D],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Interlocking Brick",H.a([$.ar,$.aX,$.aO,$.D,$.af],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Art Supplies",H.a([$.ar,$.aX,$.D],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.cP,$.i)
q.h(0,$.bS,$.h)
q.h(0,$.ae,$.i)
q.h(0,$.hq,$.i)
p=$.l
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.T
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.o
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.u+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.n5
k=[U.b]
q.h(0,new R.y("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.G(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.p)
l=this.f
l.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aM,$.i)
s.h(0,$.bS,$.h)
s.h(0,$.bu,$.i)
s.h(0,$.aL,$.i)
s.h(0,$.c3,$.i)
s.h(0,$.aV,$.h)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.l
n=n+m+"s are even starting to snigger and "
j=$.u
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.o
s.h(0,new R.y("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.G("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.bt,$.h)
t.h(0,$.eq,$.i)
t.h(0,$.ae,$.i)
t.h(0,$.aL,$.h)
t.h(0,$.c3,$.h)
t.h(0,$.bS,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.o
t.h(0,new R.y("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ad+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.l+" is "+$.u+"ing in reverse. Another is in a "+$.T+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.G("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.A},
gY:function(){return this.F},
gaY:function(){return this.C},
gX:function(){return this.H},
gI:function(){return this.T}}
X.em.prototype={}
X.ed.prototype={
$S:function(){return{func:1,v:true,args:[[P.R,M.dp]]}}}
M.dp.prototype={}
U.hl.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Fluthulu Poster",H.a([$.ah,$.aY,$.bw,$.eI],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Scalemate",H.a([$.ah,$.aY,$.bw],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Bone Shield",H.a([$.b_,$.ar,$.cX,$.hT,$.aJ],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Ice Sword",H.a([$.ar,$.pq,$.hU,$.aJ],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Zombie Mask",H.a([$.ar,$.hV,$.d_,$.bw],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Vampire Romance Novel",H.a([$.ag,$.M,$.cp,$.bw],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizardy Herbert",H.a([$.M,$.aw,$.aO],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Complacency of the Learned",H.a([$.M,$.aw,$.aO],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grimoire for Summoning the Zoologically Dubious ",H.a([$.M,$.aw,$.hV,$.bw,$.eI],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizard Statue",H.a([$.b_,$.eO,$.aw,$.aO,$.aJ],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Mermaid Fountain",H.a([$.b_,$.mT,$.aw,$.aO,$.aJ],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.eo,$.a8)
q.h(0,$.b5,$.i)
q.h(0,$.aI,$.i)
q.h(0,$.b7,$.v)
p=$.j
o="The "+p+" learns of a Beautiful "
n=$.l
o=o+n+" who has been kidnapped by the vial "
m=$.o
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.T
j=[U.b]
q.h(0,new R.I("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aH,$.h)
s.h(0,$.br,$.h)
s.h(0,$.hn,$.i)
s.h(0,$.aE,$.h)
s.h(0,$.cU,$.h)
s.h(0,$.et,$.i)
o=$.j
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.l
s.h(0,new R.I("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.aH,$.h)
t.h(0,$.hp,$.i)
t.h(0,$.aE,$.h)
t.h(0,$.c4,$.i)
t.h(0,$.dr,$.i)
t.h(0,$.mI,$.i)
r=$.j
q="The "+r+" finds a group of three "
o=$.l
q=q+o+"s "
n=$.u
t.h(0,new R.I("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
N.N.prototype={
E:function(a){return H.t(new H.ci(H.l4(this),null))+": "+H.t(this.b)}}
E.eA.prototype={}
E.iK.prototype={}
E.w.prototype={
E:function(a){var t="["+J.aP(this.a)+" x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gd6:function(){return this.a},
gew:function(){return this.b}}
E.cL.prototype={
E:function(a){var t="[(Random from "+P.hZ(this.d,"(",")")+") x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gI:function(){return this.d}}
E.eb.prototype={
E:function(a){return"[Stats assigned from player Interests x"+H.t(this.b)+"]"}}
N.hv.prototype={
gP:function(){return this.y1}}
Y.hx.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("How to Teach Your Friends to Hack SBURB",H.a([$.ag,$.E,$.M,$.af,$.eN],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Unstable Domino",H.a([$.ar,$.E,$.aZ],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Exposed Thread",H.a([$.ah,$.E,$.aZ],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Teetering Plate",H.a([$.lH,$.E,$.aZ],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.A]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.ly,$.i)
t.h(0,$.aI,$.h)
t.h(0,$.bT,$.v)
t.h(0,$.bD,$.h)
r=$.l
q="An excited "+r+" runs up to the "
p=$.j
q=q+p+" and starts to "
o=$.u
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ad
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.T
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.o
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.h(0,new R.y("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.G(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
t.h(0,new R.O("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.o+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.l+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.n(),!1,!1,new Y.bX("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.l
j="Now that the "+o+"s are free from the reign of "+$.o+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.j
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.u
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ad+" Quest Online: The "+$.T+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.h(0,new R.O("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.j
p=p+o+" shows the "
r=$.l
t.h(0,new R.ao("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.u+"s in time to stop them.    ")],H.a([],i),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.x2},
gK:function(){return this.y1},
gI:function(){return this.t}}
Y.hy.prototype={
a0:function(){return!0},
L:function(a){return!1},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Sherpa Parka",H.a([$.bV,$.E,$.eK],s),"Clearly the best class uses this.",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Guide Book",H.a([$.af,$.bV,$.ag,$.M,$.E,$.an],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Whistle",H.a([$.Y,$.E,$.b9],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Announcement System",H.a([$.Y,$.E,$.ax,$.an],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.ly,$.h)
t.h(0,$.aI,$.h)
t.h(0,$.bT,$.i)
t.h(0,$.bD,$.h)
r="Now that the "+$.o+" is out of the way, a group of "
q=$.l
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.j
o=[U.b]
t.h(0,new R.O("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.u+", but they are happy.")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.j
t.h(0,new R.ao("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.l+" "+$.u+"s in time to stop them.    ")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.at)},
gK:function(){return this.y1}}
T.hz.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Doll",H.a([$.lH,$.aR,$.bx,$.D],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Puppet",H.a([$.aq,$.bx,$.D,$.af,$.bw],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mirror",H.a([$.mY,$.D],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.M,$.D,$.cp],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Shades",H.a([$.aQ,$.bd,$.D],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.A]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.cR,$.v)
q.h(0,$.cS,$.h)
q.h(0,$.aC,$.i)
p=$.j
o="The "+p+", guided by a "+$.l+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.o
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aK+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.h(0,new R.y("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.G(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=$.j
p="The "+j+" finds a Violent "
l=$.l
p=p+l+". A Magical Talking "
k=$.T
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.o
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.h(0,new R.y("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.G(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.lS(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
h=this.f
h.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aV,$.h)
s.h(0,$.hn,$.h)
s.h(0,$.dv,$.i)
s.h(0,$.aE,$.h)
s.h(0,$.aW,$.i)
s.h(0,$.bT,$.v)
p=$.j
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.T
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.o
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aK+". The "+p+" is victorious. "
s.h(0,new R.y("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.G(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j="Now that the "+$.o+" has been defeated, a Copy "
p=$.j
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.l
j=j+k+"s "
l=$.u
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.cV+" knows who they are, and their confidence is turned into a pink lightning attack."
s.h(0,new R.O("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.ce(),!1,!1,new Y.aD("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.o
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.h(0,new R.y("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.G(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.cv(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
h.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.hm,$.h)
t.h(0,$.aW,$.h)
t.h(0,$.lx,$.h)
t.h(0,$.dq,$.i)
t.h(0,$.et,$.h)
t.h(0,$.b5,$.i)
t.h(0,$.cS,$.v)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.l
t.h(0,new R.y("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.u+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ad+" laws put in place by "+$.o+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
p="The "+r+" finds a weeping Broken Hearted "
q=$.l
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ad
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.u
t.h(0,new R.O("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.dO(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
q=$.j
m="The "+q+"  and the "
r=$.cx
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.o
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.h(0,new R.y("Flushed Shipping Dungeon",!1,[new U.b(m),new U.G(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.j)+".",n)],H.a([],i),R.cw(),!1,!1,new Y.ey(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a8)
n=$.j
r="The "+n+"  and the "
q=$.cx
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.o
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.h(0,new R.y("Pitched Shipping Dungeon",!1,[new U.b(r),new U.G(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.j)+".",m)],H.a([],i),R.cw(),!1,!1,new Y.f7(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a8)
h.h(0,new X.r(s,t,null),$.ab)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gaY:function(){return this.C},
gX:function(){return this.H},
gI:function(){return this.T}}
B.hA.prototype={
a0:function(){return!1},
L:function(a){return!0},
a1:function(){return this.L(0)},
a8:function(){return 0.5},
a9:function(){return 2},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Family Ashes",H.a([$.b_,$.ca,$.E,$.aZ,$.lD],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Last Will and Testament",H.a([$.af,$.M,$.E,$.aZ,$.lF],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grooming Guide",H.a([$.ag,$.E,$.au],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Powered Attorney",H.a([$.pf,$.E,$.lz,$.lF],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Executer's Ax",H.a([$.pa,$.E,$.cY,$.lF],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
aa:function(){return 1.5},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aM,$.i)
r=$.o
q="With the death of the "+r+", it now falls to the "
p=$.j
o=[U.b]
t.h(0,new R.O("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.l+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
r="The "+$.o+" has released the frogs into the "
p=$.j
t.h(0,new R.ao("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.l+"s 'help' by "+$.u+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.p},
ga3:function(){return this.l},
ga2:function(){return this.m},
gK:function(){return this.n}}
V.hB.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Hippo",H.a([$.b9,$.aS,$.D],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ranting",H.a([$.mO,$.b9,$.dy],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Vent",H.a([$.Y,$.pe],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.c3,$.v)
t.h(0,$.bt,$.i)
t.h(0,$.mD,$.i)
t.h(0,$.eq,$.i)
r=$.j
q="The "+r+" hears the screaming voice of the "
p=$.o
q=q+p+", and when they walk into a consort village, a "
o=$.l
q=q+o+" "
n=$.u
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.h(0,new R.y("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.G(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gG:function(){return this.m},
gK:function(){return this.n},
ga_:function(){return this.q},
gZ:function(){return this.t},
gY:function(){return this.u},
gX:function(){return this.v},
gI:function(){return this.C}}
X.hC.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Wand",H.a([$.aq,$.D,$.aw,$.aS],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Angel Feather",H.a([$.aS,$.hN,$.D,$.c9,$.ba,$.af,$.aw],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Never Ending Story DVD",H.a([$.n0,$.mX,$.D,$.aw,$.bE,$.aS],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candle",H.a([$.aS,$.c9,$.D,$.ca],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Figurine",H.a([$.ar,$.c9,$.D,$.aS],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.A]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.mB,$.h)
q.h(0,$.b5,$.i)
q.h(0,$.ae,$.h)
q.h(0,$.aL,$.h)
p=$.j
o="The "+p+" is just minding their own business when they see a wizened "
n=$.l
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.u+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.o
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.T
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.pO
i=[U.b]
q.h(0,new R.y("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.G(k,p,j)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aH,$.h)
s.h(0,$.lt,$.i)
s.h(0,$.bu,$.h)
p=$.j
o="The "+p+"  is approached by a Crafty "
m=$.l
o=o+m+" who offers them a magical "
l=$.T
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.o
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.h(0,new R.y("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.G(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.bU,$.v)
t.h(0,$.b6,$.h)
t.h(0,$.aL,$.h)
r=$.j
q="The "+r+" finds a grey town of despondant "
p=$.l
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.o
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.T
t.h(0,new R.y("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.G("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
o="The "+r+" discovers a group of "
p=$.l
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.o
t.h(0,new R.y("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.G("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.dO(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
n.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.C},
gI:function(){return this.H}}
X.hD.prototype={
a0:function(){return!0},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Footstick",H.a([$.cb,$.E,$.hR,$.af],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURBSim Cheating Guide",H.a([$.ag,$.E,$.eN,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Body Pillow of Shogun",H.a([$.ah,$.E,$.d0,$.lE,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Macrobots",H.a([$.n_,$.E,$.lz],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 0.5},
a9:function(){return 0.5},
aa:function(){return 0.5},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.b7,$.h)
t.h(0,$.bu,$.h)
t.h(0,$.bS,$.h)
t.h(0,$.bD,$.h)
t.h(0,$.cP,$.h)
t.h(0,$.c3,$.h)
t.h(0,$.es,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.l
o=[U.b]
t.h(0,new R.I("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.lT(),!1,!1,new Y.bX("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aK+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.u
t.h(0,new R.y("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.G(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.nb(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.I("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.n(),!1,!1,new Y.bX("Rewards/no_reward.png",null),1,null,null),$.p)
q="A wizened "+$.l+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.o
t.h(0,new R.y("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.j
t.h(0,new R.y("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.l+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.o+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m="A wizened "+$.l+" tells the "
r=$.j
t.h(0,new R.O("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="A "+$.l+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.O("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.nc(),!1,!1,new Y.aD("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.h(0,new R.O("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.v)
n=$.o
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.ao("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.l+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.a9)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gI:function(){return this.A}}
Q.hE.prototype={
a0:function(){return!0},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Yardstick",H.a([$.cb,$.E,$.hR,$.af],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURB Hacking Guide",H.a([$.ag,$.E,$.eN,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Body Pillow of Hussie",H.a([$.ah,$.E,$.d0,$.lE,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
gG:function(){return this.x2},
ga3:function(){return this.y1},
ga2:function(){return this.y2},
gK:function(){return this.p},
gI:function(){return this.v}}
B.hJ.prototype={
$1:function(a){return!a.gb3()},
$S:function(){return{func:1,args:[B.c7]}}}
B.c7.prototype={
B:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Perfectly Generic Object",H.a([],[G.H]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.x(t,0)]))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bs,$.h)
q.h(0,$.aj,$.v)
q.h(0,$.c6,$.h)
q.h(0,$.aE,$.i)
q.h(0,$.cQ,$.v)
p=$.j
o="The "+p+" learns that all of the local "
n=$.l
m=[U.b]
q.h(0,new R.I("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.u+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.dt,$.h)
s.h(0,$.ds,$.v)
s.h(0,$.cT,$.i)
s.h(0,$.bk,$.h)
s.h(0,$.aM,$.v)
p=$.j
o="The "+p+" learns that all of the local "
l=$.l
s.h(0,new R.I("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.u+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.aj,$.v)
t.h(0,$.aI,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.l
t.h(0,new R.I("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
r="The "+p+" learns that all of the local "
q=$.l
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.u
t.h(0,new R.I("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.lR(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
n.h(0,new X.r(s,t,null),$.ab)},
E:function(a){return this.ch},
gb3:function(){return this.a},
gac:function(){return this.b},
gI:function(){return this.c},
gad:function(){return this.d},
gG:function(){return this.e},
gal:function(a){return this.f},
gae:function(){return this.x},
gN:function(a){return this.ch}}
A.J.prototype={
aA:function(a,b){var t=b.gbV()-this.gbV()
if(t>0)t=1
else if(t<0)t=-1
return C.b.bW(t)},
gec:function(){var t,s,r,q,p,o,n
t=H.a([],[P.A])
s=new A.iY(null,null)
s.d3(this.f.a)
if(this.r===0)return t
r=P.cc(G.oB(this.f),!0,G.H)
C.a.aT(r,new A.hY())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.cJ)(r),++p){o=r[p]
n=o.geb()
n=n.gam(n)
if(!n)t.push(" "+Y.rb(s.eC(o.geb())))}return t},
gbV:function(){var t,s,r
for(t=this.f,s=new P.cI(t,t.r,null,null,[null]),s.c=t.e,r=0;s.M();)r+=s.d.gbV()
return r},
ge5:function(){var t=this.f
return new H.bJ(t,new A.hX(),[H.x(t,0)])},
geh:function(){var t,s,r,q,p
for(t=this.gec(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.cJ)(t),++q)r+=t[q]+" "
return r+this.d},
E:function(a){return this.geh()},
dh:function(a,b,c,d,e){var t,s,r
t=P.eU(b,null)
this.f=t
if(t.a===0)t.j(0,$.dy)
s=P.eU(this.ge5(),null)
for(t=new P.cI(s,s.r,null,null,[null]),t.c=s.e;t.M();){r=t.d
this.f.ap(0,r.gd7())
this.f.ah(0,r)}$.$get$n2().push(this)},
$isaB:1,
$asaB:function(){return[A.J]}}
A.hY.prototype={
$2:function(a,b){return a.gez().f_(0,b.gez().bW(0))},
$S:function(){return{func:1,args:[G.H,G.H]}}}
A.hX.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.H]}}}
Z.i3.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Juice Box",H.a([$.M,$.D,$.aS,$.aJ],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Shogun Body Pillow",H.a([$.d0,$.aY,$.D],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.c3,$.a8)
t.h(0,$.b5,$.i)
t.h(0,$.aC,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.aL,$.h)
r=$.j
q="The "+r+" sees a floating sentient "
p=$.T
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.l+" notices it, and starts "+$.u+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.o
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.h(0,new R.y("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.G(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
r="The "+p+" is greeted by a young adolescent "
m=$.l
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.o
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.u
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.h(0,new R.y("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.G(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=$.j
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.l
m=m+q+" informs them that "
p=$.o
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.h(0,new R.y("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.G(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gG:function(){return this.m},
gK:function(){return this.n},
ga_:function(){return this.q},
gZ:function(){return this.t},
gY:function(){return this.u},
gX:function(){return this.v},
gI:function(){return this.C}}
N.i4.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Gavel",H.a([$.aq,$.po],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Caution Tape",H.a([$.ar,$.eL],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Deerstalker Hat",H.a([$.ah,$.aR],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mystery Novel",H.a([$.M,$.ag],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dish Served Cold",H.a([$.lB,$.c8,$.bV],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pony Pals: Detective Pony ",H.a([$.M,$.ag,$.aQ],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Handcuffs",H.a([$.b_,$.Y,$.eL],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.eo,$.v)
q.h(0,$.aH,$.i)
q.h(0,$.b6,$.v)
p=$.j
o="The "+p+" finds an elaborate courtroom full of "+$.u+"ing "
n=$.l
m=[U.b]
q.h(0,new R.I("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.T+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aH,$.h)
s.h(0,$.bT,$.i)
s.h(0,$.bk,$.i)
p=$.j
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.l
l=o+l+" yells 'Stop that thief' in betwen "+$.u+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.T+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.pK
s.h(0,new R.I("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.aH,$.h)
t.h(0,$.aM,$.i)
t.h(0,$.br,$.v)
t.h(0,$.cU,$.i)
t.h(0,$.cR,$.i)
t.h(0,$.du,$.i)
t.h(0,$.ho,$.i)
r=$.j
q="The "+r+" finds a crowd of "
p=$.u
q=q+p+"ing "
o=$.l
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.pX
t.h(0,new R.I("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
S.i6.prototype={
a0:function(){return!0},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Shining Armor",H.a([$.b_,$.lG,$.E,$.hT],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Excalibur",H.a([$.af,$.lG,$.E,$.dA,$.cY,$.hU],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Noble Steed",H.a([$.Y,$.E,$.d_,$.bx],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Hero's Shield",H.a([$.b_,$.hT,$.E,$.lG],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 1},
a9:function(){return 2.5},
aa:function(){return 0.75},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.lv,$.h)
t.h(0,$.c5,$.h)
t.h(0,$.co,$.h)
t.h(0,$.du,$.h)
t.h(0,$.eo,$.i)
r="The "+$.o+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.j
p=[U.b]
t.h(0,new R.ao("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.l+"s 'help' by "+$.u+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.o
r="Now that the "+q+" is defeated, the "
o=$.l
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.j
t.h(0,new R.O("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.ad
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.o
n=n+q+". A Learned "+$.l+" explains that it can only be defeated by the Legendary "
r=$.T
n=n+r+" Blade. The "
m=$.j
t.h(0,new R.O("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
r="The volcanos of the land are weirdly active after the defeat of the "+$.o+". One begins to erupt near a "
m=$.l
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.u+"s, but not really doing anything to evacuate or save anyone. The "
o=$.j
t.h(0,new R.O("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l}}
Q.i7.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Dream Diary",H.a([$.M,$.ag,$.D],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Interlocking Brick",H.a([$.ar,$.aX,$.aO,$.D,$.af],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Art Supplies",H.a([$.ar,$.aX,$.D],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.cP,$.i)
q.h(0,$.bS,$.h)
q.h(0,$.ae,$.i)
q.h(0,$.hq,$.i)
p=$.l
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.T
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.o
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.u+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.n5
k=[U.b]
q.h(0,new R.y("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.G(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.p)
l=this.f
l.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aM,$.i)
s.h(0,$.bS,$.h)
s.h(0,$.bu,$.i)
s.h(0,$.aL,$.i)
s.h(0,$.c3,$.i)
s.h(0,$.aV,$.h)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.l
n=n+m+"s are even starting to snigger and "
j=$.u
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.o
s.h(0,new R.y("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.G("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.bt,$.h)
t.h(0,$.eq,$.i)
t.h(0,$.ae,$.i)
t.h(0,$.aL,$.h)
t.h(0,$.c3,$.h)
t.h(0,$.bS,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.o
t.h(0,new R.y("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ad+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.l+" is "+$.u+"ing in reverse. Another is in a "+$.T+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.G("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.A},
gY:function(){return this.F},
gaY:function(){return this.C},
gX:function(){return this.H},
gI:function(){return this.T}}
K.i8.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Creeping Vine",H.a([$.aq,$.D,$.dz,$.bx],s),null,!1,"Sentient Plant Tentacles")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lollipop",H.a([$.mQ,$.D,$.bv],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Golem",H.a([$.b_,$.eO,$.D,$.bx],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ectoplasm",H.a([$.lD,$.D,$.bv],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Aqua Vitae",H.a([$.bd,$.D,$.bv,$.af,$.aw],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Homunculus",H.a([$.d_,$.D,$.bx],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.A]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.aI,$.h)
q.h(0,$.aj,$.h)
q.h(0,$.ep,$.v)
q.h(0,$.ae,$.i)
q.h(0,$.ly,$.i)
q.h(0,$.b7,$.v)
p=$.j
o="The "+p+" finds a village of compliant "
n=$.l
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.u+"ing in panic. Don't upset "
m=$.o
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.h(0,new R.y("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.G(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aI,$.h)
s.h(0,$.aW,$.h)
s.h(0,$.b7,$.v)
s.h(0,$.ae,$.i)
o=$.j
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.l
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.o
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.h(0,new R.y("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.G(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.bs,$.h)
t.h(0,$.aj,$.v)
t.h(0,$.c6,$.h)
t.h(0,$.aE,$.i)
t.h(0,$.cQ,$.i)
t.h(0,$.lr,$.i)
r="Drawn by wailing and "+$.u+"ing, the "
q=$.j
r=r+q+" enters a rotting "
o=$.l
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.o
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.h(0,new R.y("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.G(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.C},
gI:function(){return this.H}}
G.i9.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("FAQ",H.a([$.ax,$.D,$.an,$.hP],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flashlight",H.a([$.ar,$.D,$.c9,$.ax,$.hP],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Octet",H.a([$.D,$.c9,$.hP,$.af,$.mT],s),null,!1,"D13")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Horseshoe",H.a([$.pp,$.D,$.aO],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rabbits Foot",H.a([$.pA,$.D],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("4 Leaf Clover",H.a([$.dz,$.D,$.c9,$.hP],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("8-Ball",H.a([$.bd,$.D,$.bx],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.A]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.mH,$.h)
q.h(0,$.cP,$.i)
q.h(0,$.c4,$.h)
q.h(0,$.cS,$.h)
p=$.j
o="The "+p+" is searching for the lair of "
n=$.o
o=o+n+" when some local "
m=$.l
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.h(0,new R.y("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.G(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.u+"ing "+$.l+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.o
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.h(0,new R.y("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.G(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.f
m.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.aI,$.i)
s.h(0,$.ae,$.i)
s.h(0,$.bU,$.h)
s.h(0,$.mG,$.h)
s.h(0,$.ds,$.h)
s.h(0,$.lt,$.h)
p=$.j
o="The "+p+" walks into a "
n=$.l
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.T
o=o+l+", but "
k=$.o
o=o+k+" has hoarded all of the planets "
j=$.ad
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.u+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.h(0,new R.y("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.G(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.lS(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.l
j=j+k+" explains that the "
h=$.o
s.h(0,new R.y("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.u+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.G("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.er,$.i)
q.h(0,$.aj,$.i)
q.h(0,$.ev,$.h)
q.h(0,$.ae,$.i)
q.h(0,$.b6,$.h)
p="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
p=p+o+" sets up a wiki and settles in to help the "
n=$.l
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.cV+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.h(0,new R.O("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.ce(),!1,!1,new Y.aD("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
l="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.l
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.cV+" allows you to make you own assumptions about things, and be destroyed by them."
q.h(0,new R.O("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.cv(),!1,!1,new Y.aD("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.l
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.j
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.o
q.h(0,new R.y("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.G(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.c4,$.h)
t.h(0,$.mH,$.h)
t.h(0,$.cS,$.i)
t.h(0,$.b5,$.i)
t.h(0,$.mF,$.i)
t.h(0,$.aE,$.v)
t.h(0,$.co,$.v)
t.h(0,$.aC,$.i)
t.h(0,$.aV,$.v)
t.h(0,$.aj,$.i)
t.h(0,$.b4,$.h)
s=$.j
r="The "+s+" is approached by a Fast Talking "
p=$.l
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.T
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.u+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.o
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.h(0,new R.y("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.G(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
o="After the "+$.o+", the "
s=$.j
o=o+s+" is disappointed to learn that barely any of the "
l=$.l
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.cV+" is famous, and everyone in this fight is lucky to have met them."
t.h(0,new R.O("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.ce(),!1,!1,new Y.aD("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m.h(0,new X.r(q,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.A},
gI:function(){return this.H}}
Z.ih.prototype={
a0:function(){return!0},
B:function(){var t,s,r,q
t=this.C
s=[G.H]
r=A.f("Dream Bubbles Book",H.a([$.M,$.au,$.ag,$.pj],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),[H.x(t,0)]))
t=Q.q(null,null,A.J)
r=A.f("Uno Reverse Card",H.a([$.mR,$.hR,$.au],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lord's Cape",H.a([$.ah,$.E,$.au],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drawing Tablet",H.a([$.eN,$.E,$.au],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("How to Make Friends And Influence People",H.a([$.af,$.M,$.E,$.cZ,$.ag],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
L:function(a){return!0},
a1:function(){return this.L(0)},
a8:function(){return 3.1},
a9:function(){return 0.1},
aa:function(){return 3.1},
ar:function(){return!0},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.br,$.v)
q.h(0,$.cU,$.v)
q.h(0,$.aE,$.v)
q.h(0,$.bk,$.i)
p="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.j
p=p+o+" comands that the "
n=$.l
m=[U.b]
q.h(0,new R.ao("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.u+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
o="As soon as the "+$.o+" is defeated, the "
n=$.l
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.j
q.h(0,new R.O("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p=this.x
p.h(0,new X.r(s,q,null),$.at)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.oI,$.h)
t.h(0,$.aL,$.h)
t.h(0,$.aj,$.h)
t.h(0,$.ae,$.i)
s="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.j
s=s+r+" comands that the "
o=$.l
t.h(0,new R.ao("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.u+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
r="As soon as the "+$.o+" is defeated, the "
o=$.l
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.j
t.h(0,new R.O("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",this.C,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.at)},
gG:function(){return this.p},
ga3:function(){return this.l},
ga2:function(){return this.m},
gK:function(){return this.n},
gI:function(){return this.H}}
S.ii.prototype={
a0:function(){return!0},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Alternate Costume",H.a([$.ah,$.E,$.aw,$.af,$.bl],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Cape",H.a([$.ah,$.E,$.aw],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Staff",H.a([$.aq,$.E,$.aO,$.aw,$.cb],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Walking Broom",H.a([$.lA,$.aq,$.E,$.bx,$.aw,$.cb],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 0.67},
a9:function(){return 0.67},
aa:function(){return 1.5},
D:function(){var t,s,r,q,p,o,n
t=[P.A]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.dr,$.h)
t.h(0,$.du,$.i)
t.h(0,$.aM,$.h)
t.h(0,$.cT,$.i)
t.h(0,$.bs,$.v)
r="The "+$.o+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.j
p=[U.b]
t.h(0,new R.ao("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.j
t.h(0,new R.O("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
r="The "+q+" is feeling quite pleased with their victory over the "+$.o+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ad
t.h(0,new R.O("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.n(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="Now that the "+$.o+" has been defeated, the "
o=$.l
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.j
q=q+r+"'s help in planning the brand new city of "
n=$.ad
t.h(0,new R.O("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.u+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.n(),!1,!1,new Y.aD(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gI:function(){return this.A}}
U.ij.prototype={
a0:function(){return!0},
L:function(a){return!1},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Maiden's Breath",H.a([$.dz,$.E,$.aR],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Feather Duster",H.a([$.aq,$.E,$.cb,$.hN],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Valkyrie Shield",H.a([$.aR,$.b_,$.Y,$.E,$.af,$.hT,$.p9],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Maiden's Songbook",H.a([$.M,$.E,$.ba,$.ag],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 0.33},
a9:function(){return 3},
aa:function(){return 1.5},
D:function(){var t,s,r,q,p,o,n
t=[P.A]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.bD,$.h)
t.h(0,$.aI,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.aj,$.i)
t.h(0,$.bU,$.i)
t.h(0,$.aV,$.i)
r="The "+$.o+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.j
r=r+q+" asks local  "
p=$.l
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.u
n=[U.b]
t.h(0,new R.ao("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.j
o="The "+q+" has adopted a local "
p=$.l
t.h(0,new R.O("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.u+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.o+". ")],H.a([],n),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.x2},
ga3:function(){return this.y1},
ga2:function(){return this.y2},
gK:function(){return this.p}}
V.is.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Puzzle Box",H.a([$.aq,$.D,$.aw],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tesla Coil",H.a([$.ax,$.D,$.Y],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Coin",H.a([$.Y,$.D],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electronic Door",H.a([$.Y,$.D,$.ax,$.an],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Janus Bust",H.a([$.b_,$.mP,$.eO,$.au,$.D,$.af,$.ax],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.aL,$.i)
q.h(0,$.cP,$.v)
q.h(0,$.b6,$.v)
p=$.j
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.l
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.o
k=[U.b]
q.h(0,new R.y("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.G(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.d5(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.l+" explains that at the end of the Labrinth is the "
l=$.o
q.h(0,new R.y("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.G("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.eo,$.v)
s.h(0,$.aH,$.i)
s.h(0,$.b6,$.v)
s.h(0,$.aL,$.v)
p=$.o
o="The "+p+" has commited a staggering amount of crimes against the local "+$.l+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.j
s.h(0,new R.y("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.G("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.hp,$.h)
t.h(0,$.aj,$.i)
t.h(0,$.ev,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.b6,$.h)
r=$.j
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.o
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.T+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.h(0,new R.y("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.G(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.A},
gI:function(){return this.H}}
U.it.prototype={
gP:function(){return this.y1}}
E.iu.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Feather Pen",H.a([$.Y,$.E,$.au,$.hN],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Half Finished Bust of Snoop Dog",H.a([$.pw,$.E,$.mP,$.aO,$.af],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Book of Poetry",H.a([$.M,$.E,$.au,$.ag],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a0:function(){return!1},
L:function(a){return!1},
a1:function(){return this.L(0)},
a8:function(){return 0.1},
a9:function(){return 3},
aa:function(){return 0.1},
ar:function(){return!0},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.bD,$.h)
t.h(0,$.aI,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.aj,$.i)
t.h(0,$.bU,$.i)
t.h(0,$.aV,$.i)
r="The "+$.o+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.j
r=r+q+" asks the "
p=$.l
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.u
n=[U.b]
t.h(0,new R.ao("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
q="You'd think after the dramatic defeat of the "+$.o+" the "
o=$.l
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.j
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.T
t.h(0,new R.O("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gI:function(){return this.A}}
F.iv.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Piano",H.a([$.aO,$.aq,$.ba,$.au],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flute",H.a([$.Y,$.ba],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microphone",H.a([$.b9,$.ax],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Violin",H.a([$.aq,$.ba],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sheet Music",H.a([$.M,$.ba],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electric Guitar",H.a([$.ar,$.ba,$.ax,$.b9,$.aQ],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.ar,$.ba,$.ax,$.aQ],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guitar",H.a([$.aq,$.ba],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.b5,$.a8)
q.h(0,$.mF,$.h)
q.h(0,$.cS,$.h)
q.h(0,$.bU,$.i)
q.h(0,$.ae,$.i)
q.h(0,$.ls,$.i)
p=$.j
o="The "+p+" meets a wise old "+$.l+" who tells that the "+$.o+" can only be awoken by the Legendary Hero playing the "
n=$.ad
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.T
k=[U.b]
q.h(0,new R.I("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
n="The "+p+" finds an empty, trashed "
l=$.ad
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.T+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.u+"ing "+$.l+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.pQ
q.h(0,new R.I("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.mJ,$.a8)
s.h(0,$.bT,$.i)
s.h(0,$.bk,$.i)
s.h(0,$.bU,$.h)
s.h(0,$.ls,$.a8)
o=$.j
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ad
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.o
s.h(0,new R.I("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.T+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ep,$.a8)
t.h(0,$.aC,$.i)
t.h(0,$.c6,$.i)
r=$.j
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.l
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.u
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ad+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.h(0,new R.I("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
V.iN.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Shorts",H.a([$.ah,$.E,$.dx,$.af],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sidekick Figurine",H.a([$.ar,$.E,$.aQ],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Steroids",H.a([$.c8,$.E,$.aw],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
D:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.A]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.lv,$.h)
t.h(0,$.b7,$.i)
t.h(0,$.eu,$.i)
t.h(0,$.lx,$.i)
t.h(0,$.bD,$.i)
t.h(0,$.aj,$.i)
t.h(0,$.cQ,$.i)
t.h(0,$.ds,$.i)
t.h(0,$.oL,$.i)
t.h(0,$.lr,$.i)
t.h(0,$.mG,$.i)
r="The "+$.o+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.j
r=r+q+" asks the "
p=$.l
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.u
n=[U.b]
t.h(0,new R.ao("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.j
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.l+" named Professor "
p=$.u
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.T
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.o
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.h(0,new R.y("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.G(k,"The "+q+" whited out...",m)],H.a([],n),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m="Now that the "+$.o+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.j
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.l
t.h(0,new R.O("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ad+" buffs. With a deafening "+$.u+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.n(),!1,!1,new Y.eh("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gcI:function(){return this.A}}
G.iS.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Superhero Action Figure",H.a([$.ar,$.aQ,$.aJ],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Action DVD",H.a([$.ar,$.aQ],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ghost Busters DVD",H.a([$.ar,$.lD],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Snow Dogs DVD",H.a([$.ar,$.bE,$.bV,$.eK],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skateboarding Video Game",H.a([$.ar,$.aQ],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Movie Poster",H.a([$.M,$.aQ],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Audrey II Plush",H.a([$.dz,$.aQ,$.ah,$.bx],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peashooter Toy",H.a([$.dz,$.eM,$.aQ,$.ah],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shitty Sword",H.a([$.aJ,$.Y,$.aQ,$.hU,$.cY,$.n0],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("GameBro Magazine",H.a([$.M,$.aQ],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("GameGrl Magazine",H.a([$.M,$.aQ],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.aV,$.i)
q.h(0,$.b4,$.i)
q.h(0,$.aC,$.h)
q.h(0,$.b7,$.a8)
q.h(0,$.bu,$.a8)
p=$.j
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.l
o=o+n+" manages to catch a video of it, and it goes viral on "+$.ad+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.u+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.pR
l=[U.b]
q.h(0,new R.I("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.cR,$.i)
s.h(0,$.bT,$.i)
s.h(0,$.b4,$.i)
s.h(0,$.aC,$.i)
s.h(0,$.c5,$.h)
o=$.j
n="The "+o+" runs towards an explosion in a local "
m=$.l
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.ad
s.h(0,new R.I("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.b4,$.i)
t.h(0,$.c4,$.h)
t.h(0,$.aW,$.h)
t.h(0,$.c5,$.i)
r=$.j
q="The "+r+" gets a job at the "+$.ad+" Cinema. A new movie, The Lonely "
o=$.T
q=q+o+" is coming out soon, and "
n=$.l
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.u+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.h(0,new R.I("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
Z.iT.prototype={
gP:function(){return this.y1}}
N.iV.prototype={
a0:function(){return!0},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Feather'd Cap",H.a([$.ah,$.E,$.dx],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crown",H.a([$.af,$.mU,$.E,$.dx],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gunpowder",H.a([$.eJ,$.E],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
ar:function(){return!0},
D:function(){var t,s,r,q,p,o,n
t=[P.A]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.b4,$.i)
t.h(0,$.aL,$.i)
t.h(0,$.c6,$.v)
r="With the closing of the curtain, the "+$.o+" has released the frogs, and yet they are nowhere to be found. The "
q=$.j
p=[U.b]
t.h(0,new R.ao("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.o
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.j
r=r+o+" to get it back to normal. They organize a team of "
n=$.l
t.h(0,new R.O("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.T+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y2},
ga3:function(){return this.p},
ga2:function(){return this.l},
gK:function(){return this.m}}
U.b.prototype={}
U.G.prototype={}
R.iW.prototype={
E:function(a){return H.t(new H.ci(H.l4(this),null))+": "+this.c},
gN:function(a){return this.c}}
R.I.prototype={}
R.y.prototype={}
R.O.prototype={}
R.ao.prototype={}
E.iX.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Curtain",H.a([$.ah,$.D,$.aJ],s),null,!1,"Show Ender")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Sword",H.a([$.Y,$.hU,$.dA,$.D,$.cY,$.bw,$.aJ,$.eI,$.aZ],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.Y,$.b9,$.ax,$.D,$.aJ],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.b_,$.Y,$.b9,$.cZ,$.dB,$.D,$.aJ],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bacchus Wine",H.a([$.c8,$.cZ,$.au,$.D,$.af,$.aJ],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nightmare Fuel",H.a([$.aq,$.D,$.bw,$.ca,$.eJ,$.aJ],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.A]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.en,$.h)
q.h(0,$.br,$.h)
q.h(0,$.bT,$.h)
q.h(0,$.bs,$.i)
q.h(0,$.aE,$.i)
q.h(0,$.aM,$.i)
q.h(0,$.aH,$.v)
q.h(0,$.bu,$.i)
q.h(0,$.cR,$.h)
q.h(0,$.ho,$.h)
q.h(0,$.du,$.h)
q.h(0,$.lw,$.h)
q.h(0,$.ep,$.i)
q.h(0,$.cU,$.h)
p=$.j
o="The "+p+" is chilling in a "
n=$.l
o=o+n+" village when a bunch of sentient "
m=$.T
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.o
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.y("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.G(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.dO(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=$.l
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.o
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.y("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.G(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=this.f
h.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.bU,$.h)
s.h(0,$.aE,$.i)
s.h(0,$.aH,$.h)
s.h(0,$.b5,$.h)
s.h(0,$.aV,$.h)
s.h(0,$.b4,$.i)
s.h(0,$.hn,$.v)
s.h(0,$.br,$.i)
s.h(0,$.b7,$.h)
s.h(0,$.aC,$.h)
s.h(0,$.bu,$.v)
p=$.u
o="The "+p+"ing and capering "
n=$.l
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.ad
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.o
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.y("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.G(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.en,$.h)
t.h(0,$.bu,$.h)
t.h(0,$.aH,$.h)
t.h(0,$.b7,$.i)
t.h(0,$.aV,$.h)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.l+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.o+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.y("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.G(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.A},
gI:function(){return this.H}}
F.j_.prototype={
gP:function(){return this.y1}}
Y.bX.prototype={}
Y.U.prototype={}
Y.bj.prototype={}
Y.aD.prototype={
gN:function(a){return this.c}}
Y.B.prototype={}
Y.eh.prototype={}
Y.ap.prototype={}
Y.bf.prototype={}
Y.fR.prototype={}
Y.am.prototype={}
Y.f6.prototype={}
Y.ey.prototype={}
Y.f7.prototype={}
N.j2.prototype={
a0:function(){return!0},
L:function(a){return!1},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Domino Mask",H.a([$.ah,$.E,$.dx],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Archery Set",H.a([$.pd,$.E,$.dx,$.mN],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gristtorrent Server",H.a([$.af,$.ar,$.ax,$.E,$.an,$.bl],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 1.25},
a9:function(){return 1.25},
aa:function(){return 1},
ar:function(){return!0},
D:function(){var t,s,r,q,p,o,n
t=[P.A]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aH,$.h)
t.h(0,$.aM,$.i)
t.h(0,$.c5,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt Noble "
q=$.l
r=r+q+"s have hoarded them. The "
p=$.j
o=[U.b]
t.h(0,new R.ao("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.j
q="The "+p+" learns of the extreme injustices of the "
r=$.l
q=q+r+"s who rose to power during the tyranny of "
n=$.o
t.h(0,new R.O("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l}}
Q.j3.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Red Rose",H.a([$.cp,$.aR],s),null,!1,"Seductive Plant")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.cp,$.M],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chocolate Bar",H.a([$.cp,$.c8],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candelabra",H.a([$.cp,$.ca],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Head Cannon",H.a([$.cp,$.eJ,$.Y,$.eM],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Her Pitch Passions Novel",H.a([$.ag,$.M,$.cp],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.aW,$.h)
q.h(0,$.eu,$.i)
q.h(0,$.dq,$.i)
q.h(0,$.et,$.h)
q.h(0,$.b5,$.i)
q.h(0,$.hm,$.v)
p=$.j
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.l
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.T+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.h(0,new R.I("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.b5,$.i)
s.h(0,$.c4,$.h)
s.h(0,$.et,$.h)
s.h(0,$.aW,$.i)
s.h(0,$.cS,$.v)
s.h(0,$.hm,$.v)
o=$.l
n="A Romantic "+o+" approaches the "
m=$.j
s.h(0,new R.I("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.hm,$.h)
t.h(0,$.aW,$.h)
t.h(0,$.dq,$.i)
t.h(0,$.lx,$.h)
t.h(0,$.et,$.h)
t.h(0,$.b5,$.i)
t.h(0,$.cS,$.v)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.l
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.u+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.o+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.pN
t.h(0,new R.I("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=$.j
r="The "+n+"  and the "
o=$.cx
t.h(0,new R.I("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.cw(),!1,!1,new Y.ey(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a8)
o=$.j
n="The "+o+"  and the "
r=$.cx
t.h(0,new R.I("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.cw(),!1,!1,new Y.f6(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a8)
r=$.j
o="The "+r+"  and the "
n=$.cx
t.h(0,new R.I("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.cw(),!1,!1,new Y.f7(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
V.j4.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Arrow",H.a([$.dA,$.aq,$.mN],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bow",H.a([$.aq,$.aO,$.dy],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Yondu",H.a([$.aJ,$.D],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Empathy",H.a([$.D,$.pc,$.aJ],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.ae,$.i)
t.h(0,$.bt,$.v)
t.h(0,$.aC,$.i)
t.h(0,$.aL,$.v)
r=$.j
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.o
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.h(0,new R.y("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.G(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gG:function(){return this.m},
gK:function(){return this.n},
ga_:function(){return this.q},
gZ:function(){return this.t},
gY:function(){return this.u},
gX:function(){return this.v},
gI:function(){return this.C}}
T.j6.prototype={
$1:function(a){return!a.gb3()},
$S:function(){return{func:1,args:[T.cg]}}}
T.cg.prototype={
B:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Perfectly Generic Object",H.a([],[G.H]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.x(t,0)]))
this.go=t},
L:function(a){return!1},
a1:function(){return this.L(0)},
ar:function(){return!1},
a8:function(){return 1},
aa:function(){return 1},
a9:function(){return 1},
a0:function(){return!1},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bs,$.h)
q.h(0,$.aj,$.v)
q.h(0,$.c6,$.h)
q.h(0,$.aE,$.i)
q.h(0,$.cQ,$.v)
p=$.j
o="The "+p+" learns that all of the local "
n=$.l
m=[U.b]
q.h(0,new R.O("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.u+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
n=this.x
n.h(0,new X.r(s,q,null),$.at)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.dt,$.h)
s.h(0,$.ds,$.v)
s.h(0,$.cT,$.i)
s.h(0,$.bk,$.h)
s.h(0,$.aM,$.v)
p=$.j
o="The "+p+" learns that all of the local "
l=$.l
s.h(0,new R.O("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.u+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
l="The "+p+" learns that all of the local "
o=$.l
s.h(0,new R.O("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.cx+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.u+"ing in amazement. The factory is saved! ")],H.a([],m),R.cw(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.a8)
n.h(0,new X.r(q,s,null),$.at)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.ae,$.h)
t.h(0,$.aj,$.v)
t.h(0,$.aI,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.l
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.u
t.h(0,new R.I("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.lR(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.v)
l=$.j
p="The "+l+" learns that all of the local "
r=$.l
t.h(0,new R.O("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.at)},
E:function(a){return this.r},
U:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.em("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.ed]),H.a([],[M.dp]))
this.B()
this.D()
t=this.Q
if($.$get$fa().ak(t))H.aA("Duplicate class id for "+this.E(0)+": "+t+" is already registered for "+J.aP($.$get$fa().w(0,t))+".")
$.$get$fa().h(0,t,this)},
gN:function(a){return this.r},
gal:function(a){return this.Q},
gbQ:function(){return this.ch},
gb3:function(){return this.cx},
gG:function(){return this.id},
ga3:function(){return this.k1},
ga2:function(){return this.k2},
gK:function(){return this.k3},
gI:function(){return this.k4},
gcI:function(){return this.r2}}
E.j7.prototype={
a0:function(){return!0},
L:function(a){return!1},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Sage's Robe",H.a([$.ah,$.E,$.aY,$.an,$.aw,$.af],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peer Reviewed Journal",H.a([$.M,$.E,$.ag,$.an],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guru Pillow",H.a([$.ah,$.E,$.d0,$.an],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.er,$.i)
t.h(0,$.aj,$.i)
t.h(0,$.ev,$.h)
t.h(0,$.ae,$.v)
t.h(0,$.b6,$.h)
r="The "+$.o+" has blocked access to the books for the duration. The "
q=$.j
p=[U.b]
t.h(0,new R.ao("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.l+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.o+" is defeated, it is time to begin recovery efforts. The "
r=$.l
q=q+r+"s ask the "
o=$.j
t.h(0,new R.O("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.u+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.x2},
ga3:function(){return this.y1},
ga2:function(){return this.y2},
gK:function(){return this.p},
gI:function(){return this.v}}
Y.j8.prototype={
gK:function(){return this.rx}}
K.j9.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Uno Reverse Card",H.a([$.mR,$.D,$.aJ],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("JR Body Pillow",H.a([$.d0,$.aY,$.D],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.A]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.en,$.h)
q.h(0,$.br,$.h)
q.h(0,$.bT,$.h)
q.h(0,$.bs,$.i)
q.h(0,$.aE,$.i)
q.h(0,$.aM,$.i)
q.h(0,$.aH,$.v)
q.h(0,$.bu,$.i)
q.h(0,$.cR,$.h)
q.h(0,$.ho,$.h)
q.h(0,$.du,$.h)
q.h(0,$.lw,$.h)
q.h(0,$.ep,$.i)
q.h(0,$.cU,$.h)
p=$.j
o="The "+p+" is chilling in a "
n=$.l
o=o+n+" village when a bunch of sentient "
m=$.T
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.o
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.y("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.G(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.dO(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=$.l
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.o
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.y("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.G(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=this.f
h.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.bU,$.h)
s.h(0,$.aE,$.i)
s.h(0,$.aH,$.h)
s.h(0,$.b5,$.h)
s.h(0,$.aV,$.h)
s.h(0,$.b4,$.i)
s.h(0,$.hn,$.v)
s.h(0,$.br,$.i)
s.h(0,$.b7,$.h)
s.h(0,$.aC,$.h)
s.h(0,$.bu,$.v)
p=$.u
o="The "+p+"ing and capering "
n=$.l
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.ad
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.o
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.y("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.G(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.en,$.h)
t.h(0,$.bu,$.h)
t.h(0,$.aH,$.h)
t.h(0,$.b7,$.i)
t.h(0,$.aV,$.h)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.l+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.o+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.y("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.G(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gG:function(){return this.m},
gK:function(){return this.n},
ga_:function(){return this.q},
gZ:function(){return this.t},
gY:function(){return this.u},
gX:function(){return this.v},
gI:function(){return this.C}}
Y.ja.prototype={
a0:function(){return!1},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Walking Stick",H.a([$.aq,$.E,$.cb],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Adorable Girlscout Beret",H.a([$.ah,$.E,$.pk,$.an,$.af],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Map",H.a([$.M,$.E,$.an],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.Y,$.E,$.an,$.aw],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
L:function(a){return!0},
a1:function(){return this.L(0)},
D:function(){var t,s,r,q,p
t=[P.A]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.bD,$.h)
t.h(0,$.aI,$.h)
t.h(0,$.aj,$.h)
t.h(0,$.aC,$.v)
t.h(0,$.ae,$.v)
r="Now that the "+$.o+" has been defeated, the planet has really opened up. The "
q=$.j
p=[U.b]
t.h(0,new R.O("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.l+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.j
t.h(0,new R.ao("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.l+" "+$.u+"s in time to stop them.   ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l}}
L.jb.prototype={
a0:function(){return!1},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Scroll",H.a([$.M,$.E,$.an],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ink Pot",H.a([$.bd,$.E,$.bl,$.an],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blank Book",H.a([$.M,$.E,$.ag,$.an,$.bl,$.af],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
L:function(a){return!0},
a1:function(){return this.L(0)},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.ls,$.h)
t.h(0,$.aj,$.h)
t.h(0,$.b6,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.aL,$.i)
r="The "+$.o+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.j
p=[U.b]
t.h(0,new R.ao("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.o+" has been taken care of, the "
r=$.j
q=q+r+" discovers a large library of "
o=$.l
t.h(0,new R.O("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gI:function(){return this.A}}
S.jc.prototype={
a0:function(){return!1},
L:function(a){return!1},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cueball",H.a([$.hM,$.lH,$.E,$.aO,$.bx,$.af],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crystal Ball",H.a([$.hM,$.pg,$.E,$.c9],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Binoculars",H.a([$.bd,$.E,$.Y],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blindfold",H.a([$.pb,$.E,$.aY],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 0.67},
a9:function(){return 0.67},
aa:function(){return 1},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.oJ,$.h)
t.h(0,$.eq,$.h)
t.h(0,$.mD,$.h)
t.h(0,$.b7,$.i)
r="Now that the "+$.o+" has been defeated, the land is really starting to open up. The "
q=$.j
r=r+q+" finds a tunnel filled with Blind "
p=$.l
o=[U.b]
t.h(0,new R.O("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.j
t.h(0,new R.ao("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.l+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.j
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.l
t.h(0,new R.O("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="A group of underlings are still making trouble, even after the defeat of the "+$.o+". The "
p=$.j
r=r+p+" begins planting rumors of a huge "
q=$.T
t.h(0,new R.O("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.x2},
ga3:function(){return this.y1},
ga2:function(){return this.y2},
gK:function(){return this.p},
gI:function(){return this.v}}
Y.jg.prototype={
a0:function(){return!1},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Meddler's Guide",H.a([$.ag,$.E,$.M,$.cZ,$.af,$.bv],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("First Aid Kit",H.a([$.bd,$.E,$.bv],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.E
r=A.f("Cloud in a Bottle",H.a([r,r,$.aX],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Wings",H.a([$.aw,$.E,$.c9,$.aR,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
L:function(a){return!0},
a1:function(){return this.L(0)},
a8:function(){return 0.5},
a9:function(){return 1.5},
aa:function(){return 1},
ar:function(){return!1},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aj,$.i)
t.h(0,$.bD,$.h)
t.h(0,$.b7,$.i)
t.h(0,$.ae,$.i)
t.h(0,$.aI,$.h)
r="The defeat of the "+$.o+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.j
p=[U.b]
t.h(0,new R.ao("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.o+" has been taken care of, the "
r=$.j
q=q+r+" finds a long line of "
o=$.l
t.h(0,new R.O("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
gK:function(){return this.y2},
gI:function(){return this.u}}
N.jh.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Fiduspawn Plush",H.a([$.eK,$.ah,$.aY],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Teddy Bear",H.a([$.eK,$.ah,$.aY],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dice",H.a([$.pi,$.ar],s),null,!1,"D113")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pigeon",H.a([$.hN,$.bx,$.d_,$.cX,$.eI,$.py],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cat Ears",H.a([$.ah,$.aY,$.eK],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Religious Text",H.a([$.ag,$.M],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Psychology Book",H.a([$.ag,$.M],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Therapy Couch",H.a([$.aY,$.ah],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("FLARP Manual",H.a([$.ag,$.M,$.an],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.A]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bt,$.v)
q.h(0,$.ae,$.i)
q.h(0,$.aL,$.h)
q.h(0,$.b6,$.i)
p=$.j
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.l
m=[U.b]
q.h(0,new R.I("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ad+" or "+$.T+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.u+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.bt,$.v)
s.h(0,$.ae,$.h)
s.h(0,$.aL,$.h)
s.h(0,$.mB,$.h)
s.h(0,$.b5,$.h)
s.h(0,$.mJ,$.h)
s.h(0,$.b6,$.i)
o=$.j
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.u
n=n+l+"ing "
k=$.l
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ad
s.h(0,new R.I("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.bk,$.v)
t.h(0,$.c4,$.h)
t.h(0,$.aI,$.h)
t.h(0,$.c5,$.h)
t.h(0,$.eo,$.h)
r=$.j
q="The "+r+" wanders into an entire crowd of "
o=$.l
t.h(0,new R.I("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.u+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
F.ji.prototype={
gP:function(){return this.y1}}
N.jj.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Frog Statue",H.a([$.b_,$.eO,$.D],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Frog Costume",H.a([$.ah,$.D],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Reactor",H.a([$.hQ,$.an,$.ax,$.D],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Telescope",H.a([$.Y,$.bd,$.an,$.D],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Green Sun Poster",H.a([$.M,$.D,$.mV,$.af],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m
t=$.j
s=[P.A]
r=H.a(["Wherever the "+t+" goes, they find a "+$.l+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.u+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.o+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.j
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.l+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.l+" tells the "
p=$.j
t=t+p+" that they must negotiate with "
o=$.o
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.j
p="The "+o+" meets with "
t=$.o
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.b7,$.v)
t.h(0,$.mE,$.h)
s=[U.b]
t.h(0,new R.y("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.h(0,new R.y("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.h(0,new R.y("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.h(0,new R.y("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.h(0,new R.y("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.h(0,new R.y("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.j
t.h(0,new R.ao("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.l+"s 'help' by "+$.u+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.n(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
this.f.h(0,new X.r(o,t,null),$.qK)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.A},
gI:function(){return this.H}}
S.jk.prototype={
gP:function(){return this.y1}}
R.jw.prototype={
a0:function(){return!0},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Meddler's Guide",H.a([$.ag,$.E,$.M,$.cZ,$.af,$.bv],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("First Aid Kit",H.a([$.bd,$.E,$.bv],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.E
r=A.f("Cloud in a Bottle",H.a([r,r,$.aX],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Wings",H.a([$.aw,$.E,$.c9,$.aR,$.M],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
L:function(a){return!1},
a1:function(){return this.L(0)},
a8:function(){return 1},
a9:function(){return 1},
aa:function(){return 1.5},
ar:function(){return!0},
D:function(){var t,s,r,q,p,o
t=[P.A]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aL,$.h)
t.h(0,$.ae,$.h)
t.h(0,$.bD,$.i)
t.h(0,$.ev,$.i)
t.h(0,$.oH,$.i)
t.h(0,$.cQ,$.i)
t.h(0,$.lr,$.i)
t.h(0,$.oK,$.i)
r=$.j
q="The "+r+" decides to take a break after defeating "+$.o+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.l
o=[U.b]
t.h(0,new R.O("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.u+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.lT(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
r=$.l
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.j
t.h(0,new R.O("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.l
q="The "+r+"s are so stressed after all that shit with the "+$.o+". They are yelling and "+$.u+" at each other over the slightest of insults. The "
p=$.j
t.h(0,new R.O("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.j
p=p+r+" purifies the pools "
q=$.l
t.h(0,new R.ao("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
r="The defeat of the "+$.o+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.l
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.j
t.h(0,new R.O("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ad+". Huh. Okay then.")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.x2},
ga3:function(){return this.y1},
ga2:function(){return this.y2},
gK:function(){return this.p},
gI:function(){return this.v}}
L.jA.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Lightning",H.a([$.b9,$.aS,$.D],s),null,!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice",H.a([$.bV,$.pr,$.dy],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Taserface",H.a([$.aJ,$.b9],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Taser",H.a([$.b9,$.D,$.aJ],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.c3,$.v)
t.h(0,$.aC,$.h)
t.h(0,$.en,$.i)
t.h(0,$.br,$.i)
r=$.j
q="The "+r+" is walking around on their land, when a "
p=$.l
q=q+p+" walks up to them, and tells them about "
o=$.o
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.u+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.h(0,new R.y("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.G(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gG:function(){return this.m},
gK:function(){return this.n},
ga_:function(){return this.q},
gZ:function(){return this.t},
gY:function(){return this.u},
gX:function(){return this.v},
gI:function(){return this.C}}
D.jC.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Robot",H.a([$.ax,$.Y,$.bx,$.an],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Circuit Board",H.a([$.ax,$.Y],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Datastructures for Assholes",H.a([$.ax,$.M],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ax,$.M,$.aZ,$.ag],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("3-D Printer",H.a([$.ar,$.ax,$.Y],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Virus on a USB Stick",H.a([$.pn,$.Y],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wrench",H.a([$.pF,$.Y,$.aO],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Computer",H.a([$.ax,$.Y],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.hp,$.i)
q.h(0,$.dr,$.h)
q.h(0,$.dt,$.h)
q.h(0,$.aM,$.v)
p=$.j
o="The "+p+" learns from their "
n=$.l
o=o+n+"s about the great "
m=$.ad
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.o+" destroyed it. "
o="The "+p+" searches for the "
l=$.T
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.pV
p=[U.b]
q.h(0,new R.I("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.n(),!1,!1,new Y.bf("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.p)
l=$.j
m="The "+l+" is approached by a "
o=$.l
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.u
q.h(0,new R.I("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.o+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.T+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.d5(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.dt,$.h)
s.h(0,$.ds,$.v)
s.h(0,$.cT,$.i)
s.h(0,$.bk,$.h)
s.h(0,$.aM,$.v)
o=$.j
n="The "+o+" learns that all of the local "
l=$.l
s.h(0,new R.I("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.u+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
l="The "+o+" finds two groups of "
n=$.l
l=l+n+"s screaming and "
k=$.u
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.T
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.h(0,new R.I("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.ce(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.hp,$.v)
t.h(0,$.dr,$.h)
t.h(0,$.dt,$.h)
t.h(0,$.aM,$.v)
r=$.j
q="The "+r+" learns from a mysterious "+$.l+" in a black trenchcoat about a great "
o=$.ad
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.o
t.h(0,new R.I("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
V.jD.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Lighter",H.a([$.Y,$.ca],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Siberia Poster",H.a([$.M,$.bV],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Winter Poster",H.a([$.M,$.bV,$.hQ],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Doomsday Device",H.a([$.Y,$.aZ,$.hQ,$.aS,$.eI],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juggalo Poster",H.a([$.M,$.ps],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Watch",H.a([$.Y,$.eP,$.aS],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Magnificent Crown",H.a([$.Y,$.eP,$.aS],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bitching Clothes",H.a([$.ah,$.dx,$.aS],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ceramic Pork Hollow",H.a([$.lB,$.eP],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shit Ton of Guns",H.a([$.Y,$.pz,$.eM,$.aS],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sniper Rifle",H.a([$.Y,$.pC,$.eM,$.aS],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("AK-47",H.a([$.Y,$.pv,$.eM,$.aS],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("IED",H.a([$.mW,$.cY,$.Y,$.eJ,$.aS],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Idiots Guide To Being An Asshole",H.a([$.M,$.cZ,$.ag],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.dB,$.Y,$.b9,$.cZ],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Matches",H.a([$.aq,$.ca],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.b4,$.i)
q.h(0,$.c4,$.h)
q.h(0,$.co,$.h)
q.h(0,$.du,$.h)
q.h(0,$.lv,$.h)
q.h(0,$.c5,$.i)
p=$.j
o=[U.b]
q.h(0,new R.I("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.b4,$.i)
s.h(0,$.c4,$.h)
s.h(0,$.aW,$.h)
s.h(0,$.c5,$.i)
n=$.j
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.l
s.h(0,new R.I("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.T+" underling. Tremble at the fearsome "+$.ad+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bs,$.h)
q.h(0,$.aj,$.v)
q.h(0,$.c6,$.h)
q.h(0,$.aE,$.i)
q.h(0,$.cQ,$.v)
q.h(0,$.br,$.v)
n=$.j
m="The "+n+" learns that all of the local "
l=$.l
q.h(0,new R.I("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.u+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.aH,$.h)
t.h(0,$.br,$.v)
t.h(0,$.cR,$.h)
t.h(0,$.ho,$.h)
t.h(0,$.aM,$.i)
t.h(0,$.cU,$.i)
s=$.j
r="The "+s+" finds a crowd of "
n=$.u
r=r+n+"ing "
m=$.l
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ad+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.h(0,new R.I("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
X.r.prototype={
E:function(a){return"Theme: "+H.t(this.a)}}
U.jG.prototype={
a0:function(){return!1},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Lockpick",H.a([$.Y,$.E,$.bl,$.dA,$.af],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sneaking Suit",H.a([$.ah,$.E,$.bl],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Dagger",H.a([$.Y,$.E,$.dA,$.cY,$.ph],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 1.5},
a9:function(){return 0.8},
aa:function(){return 1},
ar:function(){return!0},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aH,$.h)
t.h(0,$.bT,$.i)
t.h(0,$.aC,$.i)
t.h(0,$.bk,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt "
q=$.l
r=r+q+" Cops have confiscated them. The "
p=$.j
o=[U.b]
t.h(0,new R.ao("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.j
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.o+"'s layer and slated to be returned to the "
r=$.l
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.u+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.h(0,new R.O("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.l
p="A weeping "+r+" approaches the "
n=$.j
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.o
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ad+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.u+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.h(0,new R.O("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
n="Now that the "+r+" has been defeated, the "
p=$.l
n=n+p+"s have recovered their precious "
q=$.T
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.j
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.u
l=n+l+"worth, the disaffected Heir to the "+$.ad+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.h(0,new R.O("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l}}
N.jH.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Grandfather Clock",H.a([$.aq,$.au,$.eP,$.D],s),null,!1,"Ticking Tower of Time")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drum",H.a([$.pu,$.D,$.ba],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dead Doppelganger",H.a([$.b_,$.d_,$.D,$.cX,$.bw,$.aZ],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Music Box",H.a([$.Y,$.D,$.ba,$.au],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.Y,$.D,$.ba,$.af,$.aQ],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Metronome",H.a([$.Y,$.D,$.ba],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.A]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.oM,$.a8)
q.h(0,$.aM,$.i)
q.h(0,$.bk,$.i)
q.h(0,$.cT,$.h)
p=$.o
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.j
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.h(0,new R.O("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.cv(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.l+"s, they set out to fix the "
m=$.T
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.o
q.h(0,new R.y("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.G("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=this.f
j.h(0,new X.r(s,q,null),$.a9)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.ep,$.h)
s.h(0,$.co,$.v)
s.h(0,$.aM,$.h)
p=$.j
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.l+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.o
s.h(0,new R.y("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.G(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.aI,$.h)
t.h(0,$.ae,$.i)
t.h(0,$.aL,$.h)
t.h(0,$.bD,$.h)
r=$.o
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.T
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.j
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.l+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.h(0,new R.y("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.G(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.dO(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
k=$.o
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.T
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.j
t.h(0,new R.y("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.l+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.G("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.cv(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
r="With the defeat of the "+$.o+", "
k=$.j
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.l
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ad
t.h(0,new R.O("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.cv(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.h)
p=$.l
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.j
t.h(0,new R.y("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.u+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.G("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.o+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.m},
gaf:function(){return this.n},
gG:function(){return this.q},
gK:function(){return this.t},
ga_:function(){return this.u},
gZ:function(){return this.v},
gY:function(){return this.A},
gX:function(){return this.F},
gI:function(){return this.T}}
Y.jL.prototype={
gP:function(){return this.y1}}
G.H.prototype={}
G.eg.prototype={$isaB:1,
$asaB:function(){return[G.eg]}}
G.hW.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.H]}}}
Q.jR.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cardboard Box",H.a([$.M,$.D,$.bl],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hole Punch",H.a([$.Y,$.D,$.bl],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Smoke Bombs",H.a([$.eJ,$.D,$.bl,$.mW],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tribal Mask",H.a([$.cX,$.D,$.bl,$.bw,$.hV],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Opera Mask",H.a([$.ar,$.D,$.bl,$.au],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Black Hole in a Bottle.",H.a([$.D,$.af,$.mV,$.bl,$.bd],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
D:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.A]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bt,$.h)
q.h(0,$.lu,$.h)
q.h(0,$.es,$.h)
q.h(0,$.eq,$.h)
p=$.o
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.j
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.l
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.h(0,new R.O("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.o
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.h(0,new R.y("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.G(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
i=this.f
i.h(0,new X.r(s,q,null),$.a9)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.bt,$.i)
s.h(0,$.lu,$.i)
s.h(0,$.es,$.i)
s.h(0,$.aH,$.h)
p=$.j
o="Even with the victory of the "+p+" over the villainous "
n=$.o
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.l+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.T
s.h(0,new R.O("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.d5(),!1,!1,new Y.aD("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
s.h(0,new R.y("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.u+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.G("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.o+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.l+"s.")],H.a([],l),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(q,s,null),$.a9)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.bt,$.h)
t.h(0,$.lu,$.h)
t.h(0,$.es,$.h)
r=$.j
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.o+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.h(0,new R.y("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.G(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(s,t,null),$.a9)},
gP:function(){return this.l},
gaf:function(){return this.m},
gG:function(){return this.n},
gK:function(){return this.q},
ga_:function(){return this.t},
gZ:function(){return this.u},
gY:function(){return this.v},
gX:function(){return this.A},
gI:function(){return this.H}}
E.jS.prototype={
a0:function(){return!0},
L:function(a){return!0},
a1:function(){return this.L(0)},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Yardstick",H.a([$.cb,$.E,$.hR,$.af],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURBSim Hacking Guide",H.a([$.ag,$.E,$.eN,$.M],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Body Pillow of JR",H.a([$.ah,$.E,$.d0,$.lE,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nanobots",H.a([$.n_,$.E,$.lz],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
a8:function(){return 0.5},
a9:function(){return 0.5},
aa:function(){return 0.5},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.b7,$.h)
t.h(0,$.bu,$.h)
t.h(0,$.bS,$.h)
t.h(0,$.bD,$.h)
t.h(0,$.cP,$.h)
t.h(0,$.c3,$.h)
t.h(0,$.es,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.l
o=[U.b]
t.h(0,new R.I("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.lT(),!1,!1,new Y.bX("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aK+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.u
t.h(0,new R.y("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.G(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.nb(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.I("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.n(),!1,!1,new Y.bX("Rewards/no_reward.png",null),1,null,null),$.p)
q="A wizened "+$.l+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.o
t.h(0,new R.y("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.j
t.h(0,new R.y("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.l+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.o+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.n(),!1,!1,new Y.B("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m="A wizened "+$.l+" tells the "
r=$.j
t.h(0,new R.O("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.v)
r="A "+$.l+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.O("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.nc(),!1,!1,new Y.aD("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.h(0,new R.O("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.v)
n=$.o
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.ao("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.l+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.h(0,new X.r(s,t,null),$.a9)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gI:function(){return this.A}}
M.jW.prototype={
a0:function(){return!1},
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cauldron",H.a([$.pt,$.E,$.aw],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flying Broom",H.a([$.lA,$.cb,$.E,$.aq,$.aw],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Warped Mirror",H.a([$.mY,$.E,$.aw,$.bl,$.af],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
L:function(a){return!0},
a1:function(){return this.L(0)},
ar:function(){return!0},
a8:function(){return 2},
aa:function(){return 1.5},
a9:function(){return 1},
D:function(){var t,s,r,q,p,o,n,m
t=[P.A]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,[N.N,P.F])
t.h(0,$.aE,$.i)
t.h(0,$.eu,$.i)
t.h(0,$.bs,$.i)
t.h(0,$.bk,$.i)
t.h(0,$.aV,$.i)
t.h(0,$.mE,$.i)
r=$.o
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.l
q=q+p+" consorts. It's up to the "
o=$.j
n=[U.b]
t.h(0,new R.ao("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.av(),!1,!1,new Y.am("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
o="Even with the defeat of the "+$.o+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.l
o=o+r+" settlement, and crops refuse to thrive at "
p=$.ad
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.j
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.h(0,new R.O("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.p)
q="A Mysterious "+$.l+" approaches the "
p=$.j
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ad
q=q+r+" was discovered amongst the "+$.o+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.h(0,new R.O("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.l
p="A young "+r+" approaches the "
m=$.j
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ad
t.h(0,new R.O("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.T+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.u+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.n(),!1,!1,new Y.U("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.at)},
gG:function(){return this.y1},
ga3:function(){return this.y2},
ga2:function(){return this.p},
gK:function(){return this.l},
gI:function(){return this.A}}
F.jX.prototype={
B:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Make a World Book",H.a([$.M,$.au,$.ag],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.x(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Quill Pen",H.a([$.aY,$.ah,$.mZ],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Book On Writing",H.a([$.ag,$.M,$.an],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("FLARP Manual",H.a([$.ag,$.M,$.an],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Script",H.a([$.ag,$.M],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Pen",H.a([$.Y,$.an,$.mZ,$.au],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Spiral Bound Notebook",H.a([$.ag,$.M,$.Y],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Half Written Novel",H.a([$.ag,$.M],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
D:function(){var t,s,r,q,p,o,n,m,l
t=[P.A]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.N,P.F]
q=new H.m(0,null,null,null,null,null,0,r)
q.h(0,$.bt,$.h)
q.h(0,$.b6,$.h)
q.h(0,$.aj,$.i)
q.h(0,$.ae,$.i)
q.h(0,$.er,$.i)
p=$.j
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.l+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.h(0,new R.I("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.ap("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.m(0,null,null,null,null,null,0,r)
s.h(0,$.c5,$.i)
s.h(0,$.b4,$.i)
s.h(0,$.aW,$.i)
s.h(0,$.aj,$.i)
p=$.l
o="An Excited "+p+" rushes up to the "
n=$.j
s.h(0,new R.I("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.u+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.m(0,null,null,null,null,null,0,r)
t.h(0,$.b4,$.i)
t.h(0,$.c4,$.h)
t.h(0,$.aW,$.h)
t.h(0,$.c5,$.i)
t.h(0,$.bS,$.h)
r=$.j
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.l
t.h(0,new R.I("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.n(),!1,!1,new Y.bj("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gI:function(){return this.cx},
gac:function(){return this.cy},
gad:function(){return this.db},
gG:function(){return this.dx},
gae:function(){return this.dy}}
A.dl.prototype={}
A.cl.prototype={
E:function(a){return"rgb("+H.t(this.b)+", "+H.t(this.c)+", "+H.t(this.d)+", "+H.t(this.a)+")"},
cP:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aM()
s=this.c
if(typeof s!=="number")return s.aM()
r=this.d
if(typeof r!=="number")return r.aM()
q=this.a
if(typeof q!=="number")return H.de(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aM()
s=this.c
if(typeof s!=="number")return s.aM()
r=this.d
if(typeof r!=="number")return H.de(r)
return(t<<16|s<<8|r)>>>0},
eQ:function(a,b){var t=C.b.eP(this.cP(!1),16)
return"#"+C.e.eA(t,6,"0").toUpperCase()},
bn:function(){return this.eQ(!1,!1)},
R:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cl){t=this.b
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
ga6:function(a){return this.cP(!0)},
aw:function(a,b){var t,s,r,q
if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aD()
s=this.c
if(typeof s!=="number")return s.aD()
r=this.d
if(typeof r!=="number")return r.aD()
q=this.a
if(typeof q!=="number")return q.aD()
return A.mn(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.aw()
s=this.c
if(typeof s!=="number")return s.aw()
r=this.d
if(typeof r!=="number")return r.aw()
return A.ef(t+b,s+b,r+b,this.a)}throw H.C("Cannot add ["+H.t(J.mh(b))+" "+H.t(b)+"] to a Colour. Only Colour, double and int are valid.")},
ax:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aD()
s=this.c
if(typeof s!=="number")return s.aD()
r=this.d
if(typeof r!=="number")return r.aD()
q=this.a
if(typeof q!=="number")return q.aD()
return A.mn(t/255*b,s/255*b,r/255*b,q/255)},
w:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.C("Colour index out of range: "+H.t(b))},
h:function(a,b,c){var t,s
t=J.e8(b)
if(t.aL(b,0)||t.aK(b,3))throw H.C("Colour index out of range: "+H.t(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.R(b,0)){this.b=C.b.a4(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.b.a4(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,2)){this.d=C.b.a4(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.a4(c,0,255)
else if(t.R(b,0)){this.b=C.b.a4(J.fB(J.me(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.b.a4(J.fB(J.me(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.l2(c)
if(t.R(b,2)){this.d=C.b.a4(J.fB(s.ax(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.a4(J.fB(s.ax(c,255)),0,255)}},
dg:function(a,b,c,d){this.b=C.d.a4(C.d.a4(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.a4(C.d.a4(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.a4(C.d.a4(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.a4(J.nS(d,0,255),0,255)}}
A.l0.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.A]}}}
A.iO.prototype={
w:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.ak(b)?t.w(0,b):$.$get$lP()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.ak(b)?t.w(0,b):$.$get$lP()}throw H.C(P.fG(b,"'name' should be a String name or int id only",null))},
gW:function(a){var t=this.a
t=t.gaI(t)
return new H.eX(null,J.bp(t.a),t.b,[H.x(t,0),H.x(t,1)])},
i:function(a,b,c,d){var t,s
t=this.a
if(t.ak(b))this.ah(0,b)
s=this.dR()
if(typeof s!=="number")return s.eU()
if(s>=256)throw H.C(P.fG(s,"Palette colour ids must be in the range 0-255",null))
t.h(0,b,c)
this.b.h(0,s,c)
this.c.h(0,b,s)
this.d.h(0,s,b)},
ah:function(a,b){var t,s,r
t=this.a
if(!t.ak(b))return
s=this.c
r=s.w(0,b)
t.ah(0,b)
this.b.ah(0,r)
s.ah(0,b)
this.d.ah(0,r)},
dR:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.ak(s))return s;++s}},
e9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=document
s=t.createElement("div")
r=s.style
r.padding="3px"
r.margin="3px"
r.outline="1px solid black"
r.display="inline-block"
r.textAlign="left"
r=t.createElement("span")
q=r.style
q.fontWeight="bold"
r.textContent=a
s.appendChild(r)
for(r=this.b,q=new P.fp(r,r.bA(),0,null,[H.x(r,0)]),p=this.d;q.M();){o=q.d
n=p.w(0,o)
m=r.w(0,o)
l=t.createElement("div")
k=t.createElement("div")
k.title=m.bn().toUpperCase()
j=k.style
j.position="relative"
j.display="inline-block"
j.marginRight="3px"
j.width="10px"
j.height="10px"
i=m.bn()
j.backgroundColor=i
h=t.createElement("span")
h.textContent=H.t(o)+": "+H.t(n)
l.appendChild(k)
l.appendChild(h)
s.appendChild(l)}return s}}
A.f5.prototype={
$asz:function(){return[A.cl]},
$isz:1}
A.iY.prototype={
d3:function(a){var t=P.qZ(a)
this.a=t
this.b=a+1},
eD:function(a,b){var t
if(a.gam(a))return
t=a.eV(this.a.ex())
return t},
eC:function(a){return this.eD(a,!0)}}
D.jp.prototype={
$1:function(a){return a.geE()},
$S:function(){return{func:1,args:[D.b0]}}}
D.b0.prototype={
E:function(a){return this.a},
gN:function(a){return this.a},
geE:function(){return this.d}}
D.fl.prototype={}
D.j1.prototype={}
X.le.prototype={
$2:function(a,b){return J.fz(J.dh(a),J.dh(b))},
$S:function(){return{func:1,args:[L.c0,L.c0]}}}
X.lf.prototype={
$2:function(a,b){return J.fz(J.dh(a),J.dh(b))},
$S:function(){return{func:1,args:[T.cg,T.cg]}}}
X.lg.prototype={
$2:function(a,b){return J.fz(J.dh(a),J.dh(b))},
$S:function(){return{func:1,args:[B.c7,B.c7]}}}
X.ll.prototype={
$1:function(a){var t=this.a.style
if(t.display==="none"){t.display="block"
C.i.br(this.b,"[-]")}else{t.display="none"
C.i.br(this.b,"[+]")}},
$S:function(){return{func:1,args:[W.bW]}}}
Q.bI.prototype={
k:function(a,b){return b},
E:function(a){return J.aP(this.gbm())},
an:function(a,b){return Q.lX(this,b,H.ak(this,"bI",0),null)},
a7:function(a,b){return Q.lW(this,!1,!0,null,H.ak(this,"bI",0))},
ao:function(a){return this.a7(a,!0)},
$isz:1,
$asz:null}
Q.jU.prototype={
gbm:function(){return this.b},
w:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.V(t,b)
return J.ln(t[b])},
h:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.V(t,b)
t[b]=new Q.e(c,s,this.$ti)},
gJ:function(a){return this.b.length},
E:function(a){return P.eQ(this.b,"[","]")},
an:function(a,b){return Q.lX(this,b,H.x(this,0),null)},
a7:function(a,b){return Q.lW(this,!1,!0,null,H.x(this,0))},
ao:function(a){return this.a7(a,!0)},
dk:function(a,b,c){var t,s
this.a=a
t=[[Q.e,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fh.prototype={$asbI:null,$asz:null,$asR:null,$asL:null,$isR:1,$isL:1,$isz:1}
Q.e.prototype={
E:function(a){return"("+H.t(this.a)+" @ "+H.t(this.b)+")"},
gb4:function(a){return this.a},
geS:function(){return this.b}}
Q.cE.prototype={
gbm:function(){return this.b},
gW:function(a){var t=new Q.jT(null,[H.ak(this,"cE",0)])
t.a=J.bp(this.b)
return t},
gJ:function(a){return J.dg(this.b)},
E:function(a){return J.aP(this.b)},
an:function(a,b){return Q.lX(this,b,H.ak(this,"cE",0),null)},
a7:function(a,b){return Q.lW(this,!1,!0,null,H.ak(this,"cE",0))},
ao:function(a){return this.a7(a,!0)}}
Q.dV.prototype={$asbI:null,$asz:null,$isz:1}
Q.jT.prototype={
gO:function(){return J.ln(this.a.gO())},
M:function(){return this.a.M()}}
Q.fi.prototype={
$ascE:function(a,b){return[b]},
$asdV:function(a,b){return[b]},
$asbI:function(a,b){return[b]},
$asz:function(a,b){return[b]}}
Q.jV.prototype={
$1:function(a){return new Q.e(this.c.$1(J.ln(a)),a.geS(),[this.b])},
$S:function(){return H.m5(function(a,b){return{func:1,args:[[Q.e,a]]}},this,"fi")}}
J.K.prototype.d9=J.K.prototype.E
J.dC.prototype.dc=J.dC.prototype.E
P.bA.prototype.dd=P.bA.prototype.ba
P.bA.prototype.de=P.bA.prototype.b9
P.z.prototype.da=P.z.prototype.bo
W.bc.prototype.bt=W.bc.prototype.aq
W.e2.prototype.df=W.e2.prototype.az;(function installTearOffs(){installTearOff(H.d9.prototype,"geu",0,0,0,null,["$0"],["bl"],1)
installTearOff(H.bL.prototype,"gcV",0,0,0,null,["$1"],["aj"],3)
installTearOff(H.cF.prototype,"ged",0,0,0,null,["$1"],["aB"],3)
installTearOff(P,"r8",1,0,0,null,["$1"],["qP"],2)
installTearOff(P,"r9",1,0,0,null,["$1"],["qQ"],2)
installTearOff(P,"ra",1,0,0,null,["$1"],["qR"],2)
installTearOff(P,"nG",1,0,0,null,["$0"],["r5"],1)
installTearOff(P.bK.prototype,"gc8",0,0,0,null,["$2","$1"],["bb","dB"],6)
var t
installTearOff(t=P.bA.prototype,"gci",0,0,0,null,["$0"],["bf"],1)
installTearOff(t,"gcj",0,0,0,null,["$0"],["bg"],1)
installTearOff(t=P.dX.prototype,"gci",0,0,0,null,["$0"],["bf"],1)
installTearOff(t,"gcj",0,0,0,null,["$0"],["bg"],1)
installTearOff(t,"gdH",0,0,0,null,["$1"],["dI"],function(){return H.m5(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"dX")})
installTearOff(t,"gdL",0,0,0,null,["$2"],["dM"],7)
installTearOff(t,"gdJ",0,0,0,null,["$0"],["dK"],1)
installTearOff(P,"rd",1,0,0,null,["$2"],["oC"],10)
installTearOff(W,"ri",1,0,0,null,["$4"],["qV"],5)
installTearOff(W,"rj",1,0,0,null,["$4"],["qW"],5)
installTearOff(W.cm.prototype,"gb4",0,1,0,null,["$1"],["aH"],8)
installTearOff(W.ez.prototype,"gb4",0,1,0,null,["$1"],["aH"],4)
installTearOff(W.fb.prototype,"gb4",0,1,0,null,["$1"],["aH"],4)
installTearOff(W.e1.prototype,"gb4",0,1,0,null,["$1"],["aH"],9)
installTearOff(R,"cw",1,0,0,null,["$1"],["qb"],0)
installTearOff(R,"nb",1,0,0,null,["$1"],["q_"],0)
installTearOff(R,"lT",1,0,0,null,["$1"],["qa"],0)
installTearOff(R,"av",1,0,0,null,["$1"],["q9"],0)
installTearOff(R,"lS",1,0,0,null,["$1"],["q8"],0)
installTearOff(R,"nd",1,0,0,null,["$1"],["q6"],0)
installTearOff(R,"dO",1,0,0,null,["$1"],["q5"],0)
installTearOff(R,"cv",1,0,0,null,["$1"],["q2"],0)
installTearOff(R,"ce",1,0,0,null,["$1"],["q4"],0)
installTearOff(R,"d5",1,0,0,null,["$1"],["q7"],0)
installTearOff(R,"lR",1,0,0,null,["$1"],["q3"],0)
installTearOff(R,"n",1,0,0,null,["$1"],["q0"],0)
installTearOff(R,"nc",1,0,0,null,["$1"],["q1"],0)
installTearOff(X,"nO",1,0,0,null,["$0"],["rq"],1)})();(function inheritance(){inherit(P.as,null)
var t=P.as
inherit(H.lK,t)
inherit(J.K,t)
inherit(J.fH,t)
inherit(P.z,t)
inherit(H.eW,t)
inherit(P.eR,t)
inherit(H.ew,t)
inherit(H.cO,t)
inherit(H.kB,t)
inherit(H.d9,t)
inherit(H.kc,t)
inherit(H.cG,t)
inherit(H.kA,t)
inherit(H.k2,t)
inherit(H.d6,t)
inherit(H.jI,t)
inherit(H.bQ,t)
inherit(H.bL,t)
inherit(H.cF,t)
inherit(H.j0,t)
inherit(H.jM,t)
inherit(P.cn,t)
inherit(H.fr,t)
inherit(H.ci,t)
inherit(H.m,t)
inherit(H.ib,t)
inherit(H.id,t)
inherit(P.fo,t)
inherit(P.bK,t)
inherit(P.fm,t)
inherit(P.cB,t)
inherit(P.jq,t)
inherit(P.bA,t)
inherit(P.fn,t)
inherit(P.k7,t)
inherit(P.kE,t)
inherit(P.cM,t)
inherit(P.kX,t)
inherit(P.ks,t)
inherit(P.fp,t)
inherit(P.je,t)
inherit(P.ky,t)
inherit(P.cI,t)
inherit(P.d1,t)
inherit(P.dN,t)
inherit(P.bz,t)
inherit(P.kz,t)
inherit(P.c_,t)
inherit(P.aB,t)
inherit(P.bC,t)
inherit(P.c1,t)
inherit(P.iL,t)
inherit(P.fe,t)
inherit(P.kh,t)
inherit(P.h4,t)
inherit(P.R,t)
inherit(P.bF,t)
inherit(P.cy,t)
inherit(P.A,t)
inherit(P.dT,t)
inherit(W.fT,t)
inherit(W.k1,t)
inherit(W.e_,t)
inherit(W.cW,t)
inherit(W.f2,t)
inherit(W.e2,t)
inherit(W.kT,t)
inherit(W.ex,t)
inherit(W.cd,t)
inherit(W.kO,t)
inherit(W.fs,t)
inherit(P.kG,t)
inherit(B.c7,t)
inherit(L.c0,t)
inherit(A.f5,t)
inherit(T.cg,t)
inherit(X.em,t)
inherit(X.ed,t)
inherit(M.dp,t)
inherit(N.N,t)
inherit(E.iK,t)
inherit(E.w,t)
inherit(A.J,t)
inherit(U.b,t)
inherit(Y.bX,t)
inherit(X.r,t)
inherit(G.H,t)
inherit(A.dl,t)
inherit(A.cl,t)
inherit(A.iY,t)
inherit(D.b0,t)
inherit(Q.bI,t)
inherit(Q.e,t)
t=J.K
inherit(J.i_,t)
inherit(J.eT,t)
inherit(J.dC,t)
inherit(J.cq,t)
inherit(J.d2,t)
inherit(J.cr,t)
inherit(H.dI,t)
inherit(H.d4,t)
inherit(W.dn,t)
inherit(W.ec,t)
inherit(W.ee,t)
inherit(W.eC,t)
inherit(W.ej,t)
inherit(W.fW,t)
inherit(W.ek,t)
inherit(W.P,t)
inherit(W.ig,t)
inherit(W.iF,t)
inherit(W.iG,t)
inherit(W.eD,t)
inherit(W.k5,t)
inherit(W.eE,t)
t=J.dC
inherit(J.iR,t)
inherit(J.cD,t)
inherit(J.cs,t)
inherit(J.lJ,J.cq)
t=J.d2
inherit(J.eS,t)
inherit(J.i0,t)
t=P.z
inherit(H.L,t)
inherit(H.dE,t)
inherit(H.bJ,t)
t=H.L
inherit(H.ct,t)
inherit(H.ic,t)
inherit(P.kt,t)
inherit(H.el,H.dE)
t=P.eR
inherit(H.eX,t)
inherit(H.fj,t)
inherit(Q.jT,t)
t=H.ct
inherit(H.d3,t)
inherit(P.ie,t)
t=H.cO
inherit(H.lj,t)
inherit(H.lk,t)
inherit(H.kw,t)
inherit(H.kd,t)
inherit(H.hK,t)
inherit(H.hL,t)
inherit(H.kD,t)
inherit(H.jJ,t)
inherit(H.jK,t)
inherit(H.lm,t)
inherit(H.l9,t)
inherit(H.la,t)
inherit(H.lb,t)
inherit(H.lc,t)
inherit(H.ld,t)
inherit(H.jB,t)
inherit(H.i1,t)
inherit(H.l5,t)
inherit(H.l6,t)
inherit(H.l7,t)
inherit(P.jZ,t)
inherit(P.jY,t)
inherit(P.k_,t)
inherit(P.k0,t)
inherit(P.ki,t)
inherit(P.km,t)
inherit(P.kj,t)
inherit(P.kk,t)
inherit(P.kl,t)
inherit(P.kp,t)
inherit(P.kq,t)
inherit(P.ko,t)
inherit(P.kn,t)
inherit(P.jr,t)
inherit(P.js,t)
inherit(P.jt,t)
inherit(P.ju,t)
inherit(P.k4,t)
inherit(P.k3,t)
inherit(P.kF,t)
inherit(P.kY,t)
inherit(P.kI,t)
inherit(P.kJ,t)
inherit(P.kK,t)
inherit(P.ku,t)
inherit(P.il,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(W.l_,t)
inherit(W.kg,t)
inherit(W.iI,t)
inherit(W.iH,t)
inherit(W.kQ,t)
inherit(W.kR,t)
inherit(W.kV,t)
inherit(W.kW,t)
inherit(L.fI,t)
inherit(B.hJ,t)
inherit(A.hY,t)
inherit(A.hX,t)
inherit(T.j6,t)
inherit(G.hW,t)
inherit(A.l0,t)
inherit(D.jp,t)
inherit(X.le,t)
inherit(X.lf,t)
inherit(X.lg,t)
inherit(X.ll,t)
inherit(Q.jV,t)
t=H.k2
inherit(H.da,t)
inherit(H.e3,t)
t=P.cn
inherit(H.f3,t)
inherit(H.i2,t)
inherit(H.jO,t)
inherit(H.j5,t)
inherit(P.f4,t)
inherit(P.bP,t)
inherit(P.b1,t)
inherit(P.fg,t)
inherit(P.ch,t)
inherit(P.bq,t)
inherit(P.fV,t)
t=H.jB
inherit(H.jn,t)
inherit(H.dj,t)
t=H.d4
inherit(H.iw,t)
inherit(H.eY,t)
t=H.eY
inherit(H.dJ,t)
inherit(H.dK,t)
inherit(H.dL,H.dJ)
inherit(H.eZ,H.dL)
inherit(H.dM,H.dK)
inherit(H.f_,H.dM)
t=H.eZ
inherit(H.ix,t)
inherit(H.iy,t)
t=H.f_
inherit(H.iz,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.f0,t)
inherit(H.iE,t)
t=P.fn
inherit(P.k6,t)
inherit(P.k8,t)
inherit(P.kS,P.kE)
t=P.cB
inherit(P.dW,t)
inherit(W.ke,t)
inherit(P.dX,P.bA)
inherit(P.kC,P.dW)
inherit(P.kH,P.kX)
inherit(P.fq,H.m)
inherit(P.jd,P.je)
inherit(P.kv,P.jd)
inherit(P.kx,P.kv)
inherit(P.eV,P.dN)
t=P.bC
inherit(P.F,t)
inherit(P.Q,t)
t=P.bP
inherit(P.f8,t)
inherit(P.hH,t)
t=W.dn
inherit(W.ac,t)
inherit(W.ip,t)
inherit(W.dH,t)
inherit(W.fk,t)
inherit(W.kP,t)
t=W.ac
inherit(W.bc,t)
inherit(W.ck,t)
inherit(W.ei,t)
inherit(W.d8,t)
inherit(W.k9,t)
t=W.bc
inherit(W.aa,t)
inherit(P.ay,t)
t=W.aa
inherit(W.fE,t)
inherit(W.fF,t)
inherit(W.fL,t)
inherit(W.cN,t)
inherit(W.fQ,t)
inherit(W.h1,t)
inherit(W.hr,t)
inherit(W.ez,t)
inherit(W.hF,t)
inherit(W.hI,t)
inherit(W.i5,t)
inherit(W.ia,t)
inherit(W.ik,t)
inherit(W.dG,t)
inherit(W.iq,t)
inherit(W.iJ,t)
inherit(W.iM,t)
inherit(W.iP,t)
inherit(W.fb,t)
inherit(W.jf,t)
inherit(W.fd,t)
inherit(W.ff,t)
inherit(W.jy,t)
inherit(W.jz,t)
inherit(W.dU,t)
inherit(W.jE,t)
inherit(W.kr,t)
inherit(W.cm,W.eC)
t=W.P
inherit(W.h2,t)
inherit(W.hw,t)
inherit(W.bH,t)
inherit(W.jl,t)
inherit(W.jm,t)
inherit(W.hs,W.ec)
inherit(W.ir,W.dH)
inherit(W.bW,W.bH)
inherit(W.bg,P.eV)
inherit(W.eF,W.eD)
inherit(W.f1,W.eF)
inherit(W.ka,W.ek)
inherit(W.eG,W.eE)
inherit(W.e1,W.eG)
inherit(W.kb,W.k1)
inherit(W.lZ,W.ke)
inherit(W.kf,P.jq)
inherit(W.kU,W.e2)
t=P.ay
inherit(P.aN,t)
inherit(P.cj,t)
inherit(P.h5,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.hb,t)
inherit(P.hc,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.hi,t)
inherit(P.hj,t)
inherit(P.hk,t)
inherit(P.ht,t)
inherit(P.im,t)
inherit(P.io,t)
inherit(P.iQ,t)
inherit(P.dP,t)
inherit(P.jx,t)
inherit(P.jQ,t)
inherit(P.dZ,t)
inherit(P.kL,t)
inherit(P.kM,t)
inherit(P.kN,t)
t=P.aN
inherit(P.fC,t)
inherit(P.hG,t)
inherit(P.jv,t)
inherit(P.cC,t)
inherit(P.jP,t)
inherit(P.jF,P.cC)
t=B.c7
inherit(S.fD,t)
inherit(M.fJ,t)
inherit(A.fS,t)
inherit(M.fU,t)
inherit(V.fX,t)
inherit(U.hl,t)
inherit(N.i4,t)
inherit(F.iv,t)
inherit(G.iS,t)
inherit(Q.j3,t)
inherit(N.jh,t)
inherit(D.jC,t)
inherit(V.jD,t)
inherit(F.jX,t)
inherit(A.iO,A.f5)
inherit(L.S,A.iO)
t=T.cg
inherit(O.fK,t)
inherit(Y.hx,t)
inherit(Y.hy,t)
inherit(B.hA,t)
inherit(X.hD,t)
inherit(Q.hE,t)
inherit(S.i6,t)
inherit(Z.ih,t)
inherit(S.ii,t)
inherit(U.ij,t)
inherit(E.iu,t)
inherit(V.iN,t)
inherit(N.iV,t)
inherit(N.j2,t)
inherit(E.j7,t)
inherit(Y.j8,t)
inherit(Y.ja,t)
inherit(L.jb,t)
inherit(S.jc,t)
inherit(Y.jg,t)
inherit(R.jw,t)
inherit(U.jG,t)
inherit(E.jS,t)
inherit(M.jW,t)
t=L.c0
inherit(L.fM,t)
inherit(T.fN,t)
inherit(T.fP,t)
inherit(U.fY,t)
inherit(Z.fZ,t)
inherit(N.hv,t)
inherit(T.hz,t)
inherit(V.hB,t)
inherit(X.hC,t)
inherit(Z.i3,t)
inherit(Q.i7,t)
inherit(K.i8,t)
inherit(G.i9,t)
inherit(V.is,t)
inherit(U.it,t)
inherit(Z.iT,t)
inherit(E.iX,t)
inherit(F.j_,t)
inherit(V.j4,t)
inherit(K.j9,t)
inherit(F.ji,t)
inherit(N.jj,t)
inherit(S.jk,t)
inherit(L.jA,t)
inherit(N.jH,t)
inherit(Y.jL,t)
inherit(Q.jR,t)
inherit(E.eA,E.iK)
t=E.w
inherit(E.cL,t)
inherit(E.eb,t)
inherit(U.G,U.b)
inherit(R.iW,N.N)
t=R.iW
inherit(R.I,t)
inherit(R.y,t)
inherit(R.O,t)
inherit(R.ao,R.O)
t=Y.bX
inherit(Y.U,t)
inherit(Y.aD,t)
inherit(Y.B,t)
inherit(Y.eh,t)
inherit(Y.ap,t)
inherit(Y.bf,t)
inherit(Y.fR,t)
inherit(Y.f6,t)
inherit(Y.ey,t)
inherit(Y.f7,t)
t=Y.aD
inherit(Y.bj,t)
inherit(Y.am,t)
inherit(G.eg,G.H)
t=D.b0
inherit(D.fl,t)
inherit(D.j1,t)
t=Q.bI
inherit(Q.fh,t)
inherit(Q.dV,t)
inherit(Q.jU,Q.fh)
inherit(Q.cE,Q.dV)
inherit(Q.fi,Q.cE)
mixin(H.dJ,P.bz)
mixin(H.dL,H.ew)
mixin(H.dK,P.bz)
mixin(H.dM,H.ew)
mixin(P.dN,P.bz)
mixin(W.eC,W.fT)
mixin(W.eD,P.bz)
mixin(W.eF,W.cW)
mixin(W.eE,P.bz)
mixin(W.eG,W.cW)
mixin(A.f5,P.d1)
mixin(Q.fh,P.bz)
mixin(Q.dV,P.d1)})();(function constants(){C.l=W.cN.prototype
C.m=W.cm.prototype
C.v=J.K.prototype
C.a=J.cq.prototype
C.b=J.eS.prototype
C.w=J.eT.prototype
C.d=J.d2.prototype
C.e=J.cr.prototype
C.D=J.cs.prototype
C.q=J.iR.prototype
C.i=W.fd.prototype
C.r=W.ff.prototype
C.k=J.cD.prototype
C.t=new P.iL()
C.u=new P.k7()
C.c=new P.kH()
C.n=new P.c1(0)
C.x=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.o=function(hooks) { return hooks; }
C.y=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.z=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.A=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.p=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.B=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.C=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.E=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.A])
C.F=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.G=makeConstList([])
C.f=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.A])
C.h=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.A])
C.H=H.az("rw")
C.I=H.az("rx")
C.j=H.az("ry")
C.J=H.az("rz")
C.K=H.az("rA")
C.L=H.az("rC")
C.M=H.az("rD")
C.N=H.az("rE")
C.O=H.az("n3")
C.P=H.az("bF")
C.Q=H.az("A")
C.R=H.az("rF")
C.S=H.az("rG")
C.T=H.az("rH")
C.U=H.az("rI")
C.V=H.az("c_")
C.W=H.az("F")
C.X=H.az("Q")
C.Y=H.az("bC")})();(function staticFields(){$.n7="$cachedFunction"
$.n8="$cachedInvocation"
$.bR=0
$.dk=null
$.mk=null
$.m7=null
$.nD=null
$.nL=null
$.l1=null
$.l8=null
$.m8=null
$.db=null
$.e4=null
$.e5=null
$.m2=!1
$.al=C.c
$.mA=0
$.c2=null
$.lq=null
$.my=null
$.mx=null
$.mu=null
$.mt=null
$.ms=null
$.mv=null
$.mr=null
$.oo=null
$.or=null
$.o4=null
$.o5=null
$.o3=null
$.o8=null
$.of=null
$.oe=null
$.ot=null
$.oj=null
$.oa=null
$.od=null
$.o6=null
$.oc=null
$.om=null
$.ob=null
$.oq=null
$.ol=null
$.o9=null
$.o2=null
$.og=null
$.op=null
$.oi=null
$.on=null
$.os=null
$.ok=null
$.o7=null
$.oh=null
$.Z="accent"
$.W="aspect1"
$.a_="aspect2"
$.a7="shoe1"
$.a6="shoe2"
$.a1="cloak1"
$.a2="cloak2"
$.a0="cloak3"
$.X="shirt1"
$.a5="shirt2"
$.a4="pants1"
$.a3="pants2"
$.a8=1300
$.h=3
$.i=2
$.v=1
$.p=0.1
$.oK=null
$.cQ=null
$.oI=null
$.ds=null
$.ev=null
$.lt=null
$.oH=null
$.mG=null
$.oL=null
$.hm=null
$.lr=null
$.hq=null
$.eo=null
$.c6=null
$.oJ=null
$.ls=null
$.ly=null
$.dt=null
$.eu=null
$.dq=null
$.aW=null
$.bs=null
$.cT=null
$.lx=null
$.aI=null
$.aH=null
$.mC=null
$.es=null
$.cR=null
$.er=null
$.b7=null
$.co=null
$.hp=null
$.br=null
$.du=null
$.aE=null
$.lv=null
$.mD=null
$.ae=null
$.b6=null
$.aL=null
$.aM=null
$.lu=null
$.aC=null
$.bU=null
$.bT=null
$.bS=null
$.c4=null
$.c5=null
$.c3=null
$.bu=null
$.et=null
$.mH=null
$.en=null
$.bk=null
$.aV=null
$.aj=null
$.dr=null
$.cS=null
$.lw=null
$.eq=null
$.ep=null
$.mF=null
$.b5=null
$.mJ=null
$.mB=null
$.oN=null
$.cP=null
$.b4=null
$.bt=null
$.bD=null
$.dv=null
$.mE=null
$.mI=null
$.oM=null
$.hn=null
$.ho=null
$.cU=null
$.oV=null
$.oO=null
$.oP=null
$.oQ=null
$.oR=null
$.oS=null
$.oT=null
$.oU=null
$.oX=null
$.oY=null
$.oZ=null
$.p_=null
$.p0=null
$.p1=null
$.oW=null
$.pP="JACK"
$.pT="PM"
$.pQ="JS"
$.pO="HP"
$.pY="YD"
$.pV="SI"
$.pW="SU"
$.pR="ME"
$.pU="RB"
$.pM="GN"
$.n5="MP"
$.pK="AR"
$.pS="PE"
$.pL="DP"
$.pX="WV"
$.pN="HB"
$.j="PLAYER1TAG"
$.cx="PLAYER2TAG"
$.o="DENIZENTAG"
$.l="CONSORTTAG"
$.u="CONSORTSOUNDTAG"
$.ad="MCGUFFINTAG"
$.T="TAGPHYSICALMCGUFFIN"
$.aK="TAGWEAPON"
$.ql=null
$.qy=null
$.qf=null
$.qi=null
$.qo=null
$.qt=null
$.qr=null
$.qB=null
$.qA=null
$.qs=null
$.qD=null
$.qn=null
$.qC=null
$.qw=null
$.qu=null
$.qx=null
$.qh=null
$.qg=null
$.qq=null
$.qp=null
$.qm=null
$.qz=null
$.qj=null
$.qk=null
$.qv=null
$.qK=13
$.a9=3
$.at=2
$.ab=1
$.dy=null
$.hU=null
$.po=null
$.pC=null
$.pz=null
$.ph=null
$.py=null
$.pl=null
$.pi=null
$.px=null
$.pd=null
$.mS=null
$.lA=null
$.ag=null
$.pa=null
$.hT=null
$.pv=null
$.mW=null
$.hM=null
$.mR=null
$.pm=null
$.d0=null
$.cb=null
$.lC=null
$.pF=null
$.pD=null
$.pB=null
$.mZ=null
$.mP=null
$.Y=null
$.pj=null
$.lB=null
$.cX=null
$.n0=null
$.aq=null
$.ar=null
$.dB=null
$.M=null
$.ah=null
$.eO=null
$.bd=null
$.lD=null
$.d_=null
$.eI=null
$.eK=null
$.dz=null
$.hN=null
$.hV=null
$.af=null
$.cY=null
$.bw=null
$.dA=null
$.aO=null
$.hO=null
$.eM=null
$.ca=null
$.hP=null
$.c9=null
$.bl=null
$.aX=null
$.hQ=null
$.aZ=null
$.eJ=null
$.bV=null
$.ax=null
$.hS=null
$.ba=null
$.eP=null
$.cZ=null
$.bv=null
$.eL=null
$.aR=null
$.aY=null
$.b_=null
$.an=null
$.bx=null
$.cp=null
$.bE=null
$.c8=null
$.aQ=null
$.aw=null
$.D=null
$.E=null
$.au=null
$.aJ=null
$.aS=null
$.b9=null
$.p9=null
$.hR=null
$.pf=null
$.mQ=null
$.mT=null
$.pA=null
$.mN=null
$.mX=null
$.mV=null
$.eN=null
$.lF=null
$.ps=null
$.dx=null
$.pq=null
$.pr=null
$.pu=null
$.lH=null
$.pt=null
$.lz=null
$.n_=null
$.mY=null
$.pg=null
$.pk=null
$.lE=null
$.mU=null
$.lG=null
$.pp=null
$.pw=null
$.pn=null
$.pb=null
$.pE=null
$.pe=null
$.mO=null
$.pc=null
$.cV="OWNER"
$.jo=null
$.qI=null
$.dS=null
$.cz=null
$.qH=null
$.bY=null
$.cA=null
$.aT=null
$.d7=null
$.dQ=null
$.dR=null
$.bG=null
$.aF=null
$.nf=!1})();(function lazyInitializers(){lazy($,"mq","$get$mq",function(){return H.nI("_$dart_dartClosure")})
lazy($,"lL","$get$lL",function(){return H.nI("_$dart_js")})
lazy($,"mL","$get$mL",function(){return H.p7()})
lazy($,"mM","$get$mM",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.mA
$.mA=t+1
t="expando$key$"+t}return new P.h4(null,t,[P.Q])})
lazy($,"nh","$get$nh",function(){return H.bZ(H.jN({
toString:function(){return"$receiver$"}}))})
lazy($,"ni","$get$ni",function(){return H.bZ(H.jN({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"nj","$get$nj",function(){return H.bZ(H.jN(null))})
lazy($,"nk","$get$nk",function(){return H.bZ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"no","$get$no",function(){return H.bZ(H.jN(void 0))})
lazy($,"np","$get$np",function(){return H.bZ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"nm","$get$nm",function(){return H.bZ(H.nn(null))})
lazy($,"nl","$get$nl",function(){return H.bZ(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"nr","$get$nr",function(){return H.bZ(H.nn(void 0))})
lazy($,"nq","$get$nq",function(){return H.bZ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"lY","$get$lY",function(){return P.qO()})
lazy($,"hu","$get$hu",function(){var t,s
t=P.bF
s=new P.bK(0,P.qN(),null,[t])
s.dq(null,t)
return s})
lazy($,"e6","$get$e6",function(){return[]})
lazy($,"mp","$get$mp",function(){return{}})
lazy($,"nv","$get$nv",function(){return P.eU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"m1","$get$m1",function(){return P.n4()})
lazy($,"ea","$get$ea",function(){return P.lN(P.Q,L.c0)})
lazy($,"eH","$get$eH",function(){return P.lN(P.Q,B.c7)})
lazy($,"n2","$get$n2",function(){return H.a([],[A.J])})
lazy($,"fa","$get$fa",function(){return P.lN(P.Q,T.cg)})
lazy($,"n1","$get$n1",function(){return P.bm(null,null,null,G.H)})
lazy($,"lP","$get$lP",function(){return A.ef(255,0,255,255)})
lazy($,"bb","$get$bb",function(){return H.a([],[D.b0])})})()
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
mangledGlobalNames:{Q:"int",F:"double",bC:"num",A:"String",c_:"bool",bF:"Null",R:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.c_,args:[[P.R,E.eA]]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.bc,args:[P.Q]},{func:1,ret:P.c_,args:[W.bc,P.A,P.A,W.e_]},{func:1,v:true,args:[P.as],opt:[P.cy]},{func:1,v:true,args:[,P.cy]},{func:1,ret:P.A,args:[P.Q]},{func:1,ret:W.d8,args:[P.Q]},{func:1,ret:P.Q,args:[P.aB,P.aB]}],
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
setOrUpdateInterceptorsByTag({DOMImplementation:J.K,MediaError:J.K,MediaSession:J.K,PositionError:J.K,Range:J.K,SVGAnimatedLength:J.K,SVGAnimatedLengthList:J.K,SVGAnimatedNumber:J.K,SVGAnimatedNumberList:J.K,SVGAnimatedString:J.K,SQLError:J.K,ArrayBuffer:H.dI,ArrayBufferView:H.d4,DataView:H.iw,Float32Array:H.ix,Float64Array:H.iy,Int16Array:H.iz,Int32Array:H.iA,Int8Array:H.iB,Uint16Array:H.iC,Uint32Array:H.iD,Uint8ClampedArray:H.f0,CanvasPixelArray:H.f0,Uint8Array:H.iE,HTMLBRElement:W.aa,HTMLCanvasElement:W.aa,HTMLContentElement:W.aa,HTMLDListElement:W.aa,HTMLDataListElement:W.aa,HTMLDetailsElement:W.aa,HTMLDialogElement:W.aa,HTMLDivElement:W.aa,HTMLHRElement:W.aa,HTMLHeadElement:W.aa,HTMLHeadingElement:W.aa,HTMLHtmlElement:W.aa,HTMLImageElement:W.aa,HTMLLIElement:W.aa,HTMLLabelElement:W.aa,HTMLLegendElement:W.aa,HTMLMenuElement:W.aa,HTMLMenuItemElement:W.aa,HTMLMeterElement:W.aa,HTMLModElement:W.aa,HTMLOListElement:W.aa,HTMLOptGroupElement:W.aa,HTMLOptionElement:W.aa,HTMLParagraphElement:W.aa,HTMLPictureElement:W.aa,HTMLPreElement:W.aa,HTMLProgressElement:W.aa,HTMLQuoteElement:W.aa,HTMLScriptElement:W.aa,HTMLShadowElement:W.aa,HTMLSourceElement:W.aa,HTMLStyleElement:W.aa,HTMLTableCaptionElement:W.aa,HTMLTableCellElement:W.aa,HTMLTableDataCellElement:W.aa,HTMLTableHeaderCellElement:W.aa,HTMLTableColElement:W.aa,HTMLTitleElement:W.aa,HTMLTrackElement:W.aa,HTMLUListElement:W.aa,HTMLUnknownElement:W.aa,HTMLDirectoryElement:W.aa,HTMLFontElement:W.aa,HTMLFrameElement:W.aa,HTMLMarqueeElement:W.aa,HTMLElement:W.aa,HTMLAnchorElement:W.fE,HTMLAreaElement:W.fF,HTMLBaseElement:W.fL,Blob:W.ec,HTMLBodyElement:W.cN,HTMLButtonElement:W.fQ,CDATASection:W.ck,CharacterData:W.ck,Comment:W.ck,ProcessingInstruction:W.ck,Text:W.ck,Client:W.ee,WindowClient:W.ee,CSSStyleDeclaration:W.cm,MSStyleCSSProperties:W.cm,CSS2Properties:W.cm,DocumentFragment:W.ei,ShadowRoot:W.ei,DOMError:W.ej,FileError:W.ej,DOMException:W.fW,DOMRectReadOnly:W.ek,Element:W.bc,HTMLEmbedElement:W.h1,ErrorEvent:W.h2,AnimationEvent:W.P,AnimationPlayerEvent:W.P,ApplicationCacheErrorEvent:W.P,AutocompleteErrorEvent:W.P,BeforeInstallPromptEvent:W.P,BeforeUnloadEvent:W.P,BlobEvent:W.P,ClipboardEvent:W.P,CloseEvent:W.P,CustomEvent:W.P,DeviceLightEvent:W.P,DeviceMotionEvent:W.P,DeviceOrientationEvent:W.P,ExtendableEvent:W.P,ExtendableMessageEvent:W.P,FetchEvent:W.P,FontFaceSetLoadEvent:W.P,GamepadEvent:W.P,HashChangeEvent:W.P,InstallEvent:W.P,MediaEncryptedEvent:W.P,MediaKeyMessageEvent:W.P,MediaQueryListEvent:W.P,MediaStreamEvent:W.P,MediaStreamTrackEvent:W.P,MessageEvent:W.P,MIDIConnectionEvent:W.P,MIDIMessageEvent:W.P,NotificationEvent:W.P,PageTransitionEvent:W.P,PopStateEvent:W.P,PresentationConnectionAvailableEvent:W.P,PresentationConnectionCloseEvent:W.P,ProgressEvent:W.P,PromiseRejectionEvent:W.P,PushEvent:W.P,RelatedEvent:W.P,RTCDataChannelEvent:W.P,RTCDTMFToneChangeEvent:W.P,RTCIceCandidateEvent:W.P,RTCPeerConnectionIceEvent:W.P,SecurityPolicyViolationEvent:W.P,ServicePortConnectEvent:W.P,ServiceWorkerMessageEvent:W.P,SpeechRecognitionEvent:W.P,StorageEvent:W.P,SyncEvent:W.P,TrackEvent:W.P,TransitionEvent:W.P,WebKitTransitionEvent:W.P,ResourceProgressEvent:W.P,USBConnectionEvent:W.P,IDBVersionChangeEvent:W.P,AudioProcessingEvent:W.P,OfflineAudioCompletionEvent:W.P,WebGLContextEvent:W.P,Event:W.P,InputEvent:W.P,MessagePort:W.dn,EventTarget:W.dn,HTMLFieldSetElement:W.hr,File:W.hs,HTMLFormElement:W.ez,GeofencingEvent:W.hw,HTMLIFrameElement:W.hF,HTMLInputElement:W.hI,HTMLKeygenElement:W.i5,HTMLLinkElement:W.ia,Location:W.ig,HTMLMapElement:W.ik,HTMLAudioElement:W.dG,HTMLMediaElement:W.dG,HTMLVideoElement:W.dG,MediaStream:W.ip,HTMLMetaElement:W.iq,MIDIOutput:W.ir,MIDIInput:W.dH,MIDIPort:W.dH,MouseEvent:W.bW,DragEvent:W.bW,PointerEvent:W.bW,WheelEvent:W.bW,Navigator:W.iF,NavigatorUserMediaError:W.iG,Document:W.ac,HTMLDocument:W.ac,XMLDocument:W.ac,Node:W.ac,NodeList:W.f1,RadioNodeList:W.f1,HTMLObjectElement:W.iJ,HTMLOutputElement:W.iM,HTMLParamElement:W.iP,HTMLSelectElement:W.fb,HTMLSlotElement:W.jf,HTMLSpanElement:W.fd,SpeechRecognitionError:W.jl,SpeechSynthesisEvent:W.jm,HTMLTableElement:W.ff,HTMLTableRowElement:W.jy,HTMLTableSectionElement:W.jz,HTMLTemplateElement:W.dU,HTMLTextAreaElement:W.jE,CompositionEvent:W.bH,FocusEvent:W.bH,KeyboardEvent:W.bH,TextEvent:W.bH,TouchEvent:W.bH,SVGZoomEvent:W.bH,UIEvent:W.bH,Window:W.fk,DOMWindow:W.fk,Attr:W.d8,ClientRect:W.k5,DocumentType:W.k9,DOMRect:W.ka,HTMLFrameSetElement:W.kr,NamedNodeMap:W.e1,MozNamedAttrMap:W.e1,ServiceWorker:W.kP,SVGAElement:P.fC,SVGAnimateElement:P.cj,SVGAnimateMotionElement:P.cj,SVGAnimateTransformElement:P.cj,SVGAnimationElement:P.cj,SVGSetElement:P.cj,SVGFEBlendElement:P.h5,SVGFEColorMatrixElement:P.h6,SVGFEComponentTransferElement:P.h7,SVGFECompositeElement:P.h8,SVGFEConvolveMatrixElement:P.h9,SVGFEDiffuseLightingElement:P.ha,SVGFEDisplacementMapElement:P.hb,SVGFEFloodElement:P.hc,SVGFEGaussianBlurElement:P.hd,SVGFEImageElement:P.he,SVGFEMergeElement:P.hf,SVGFEMorphologyElement:P.hg,SVGFEOffsetElement:P.hh,SVGFESpecularLightingElement:P.hi,SVGFETileElement:P.hj,SVGFETurbulenceElement:P.hk,SVGFilterElement:P.ht,SVGCircleElement:P.aN,SVGClipPathElement:P.aN,SVGDefsElement:P.aN,SVGEllipseElement:P.aN,SVGForeignObjectElement:P.aN,SVGGElement:P.aN,SVGGeometryElement:P.aN,SVGLineElement:P.aN,SVGPathElement:P.aN,SVGPolygonElement:P.aN,SVGPolylineElement:P.aN,SVGRectElement:P.aN,SVGSwitchElement:P.aN,SVGGraphicsElement:P.aN,SVGImageElement:P.hG,SVGMarkerElement:P.im,SVGMaskElement:P.io,SVGPatternElement:P.iQ,SVGScriptElement:P.dP,SVGDescElement:P.ay,SVGDiscardElement:P.ay,SVGFEDistantLightElement:P.ay,SVGFEFuncAElement:P.ay,SVGFEFuncBElement:P.ay,SVGFEFuncGElement:P.ay,SVGFEFuncRElement:P.ay,SVGFEMergeNodeElement:P.ay,SVGFEPointLightElement:P.ay,SVGFESpotLightElement:P.ay,SVGMetadataElement:P.ay,SVGStopElement:P.ay,SVGStyleElement:P.ay,SVGTitleElement:P.ay,SVGComponentTransferFunctionElement:P.ay,SVGElement:P.ay,SVGSVGElement:P.jv,SVGSymbolElement:P.jx,SVGTSpanElement:P.cC,SVGTextElement:P.cC,SVGTextPositioningElement:P.cC,SVGTextContentElement:P.cC,SVGTextPathElement:P.jF,SVGUseElement:P.jP,SVGViewElement:P.jQ,SVGLinearGradientElement:P.dZ,SVGRadialGradientElement:P.dZ,SVGGradientElement:P.dZ,SVGCursorElement:P.kL,SVGFEDropShadowElement:P.kM,SVGMPathElement:P.kN})
setOrUpdateLeafTags({DOMImplementation:true,MediaError:true,MediaSession:true,PositionError:true,Range:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Client:true,WindowClient:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,HTMLFormElement:true,GeofencingEvent:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MediaStream:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSpanElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.eY.$nativeSuperclassTag="ArrayBufferView"
H.dJ.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.eZ.$nativeSuperclassTag="ArrayBufferView"
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
H.f_.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.nN(X.nO(),b)},[])
else (function(b){H.nN(X.nO(),b)})([])})})()
//# sourceMappingURL=stat_summary.dart.js.map
