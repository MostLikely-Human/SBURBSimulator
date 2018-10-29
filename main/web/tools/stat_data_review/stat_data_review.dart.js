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
a[c]=function(){a[c]=function(){H.vc(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.ov"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.ov"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.ov(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={o_:function o_(a){this.a=a},
ef:function(a,b,c,d){if(!!J.af(a).$isa6)return new H.dX(a,b,[c,d])
return new H.dA(a,b,[c,d])},
fo:function(){return new P.bX("No element")},
tb:function(){return new P.bX("Too few elements")},
fH:function(a,b,c,d){if(c-b<=32)H.uj(a,b,c,d)
else H.ui(a,b,c,d)},
uj:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.b7(a);t<=c;++t){r=s.w(a,t)
q=t
while(!0){if(!(q>b&&J.bF(d.$2(s.w(a,q-1),r),0)))break
p=q-1
s.h(a,q,s.w(a,p))
q=p}s.h(a,q,r)}},
ui:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.a8(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.a8(a3+a4,2)
p=q-t
o=q+t
n=J.b7(a2)
m=n.w(a2,s)
l=n.w(a2,p)
k=n.w(a2,q)
j=n.w(a2,o)
i=n.w(a2,r)
if(J.bF(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bF(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bF(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bF(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bF(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bF(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bF(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bF(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bF(a5.$2(j,i),0)){h=i
i=j
j=h}n.h(a2,s,m)
n.h(a2,q,k)
n.h(a2,r,i)
n.h(a2,p,n.w(a2,a3))
n.h(a2,o,n.w(a2,a4))
g=a3+1
f=a4-1
if(J.an(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.w(a2,e)
c=a5.$2(d,l)
b=J.af(c)
if(b.R(c,0))continue
if(b.ax(c,0)){if(e!==g){n.h(a2,e,n.w(a2,g))
n.h(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.w(a2,f),l)
b=J.cM(c)
if(b.aO(c,0)){--f
continue}else{a=f-1
if(b.ax(c,0)){n.h(a2,e,n.w(a2,g))
a0=g+1
n.h(a2,g,n.w(a2,f))
n.h(a2,f,d)
f=a
g=a0
break}else{n.h(a2,e,n.w(a2,f))
n.h(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.w(a2,e)
if(J.h1(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.w(a2,g))
n.h(a2,g,d)}++g}else if(J.bF(a5.$2(d,j),0))for(;!0;)if(J.bF(a5.$2(n.w(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.h1(a5.$2(n.w(a2,f),l),0)){n.h(a2,e,n.w(a2,g))
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
H.fH(a2,a3,g-2,a5)
H.fH(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.an(a5.$2(n.w(a2,g),l),0);)++g
for(;J.an(a5.$2(n.w(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.w(a2,e)
if(J.an(a5.$2(d,l),0)){if(e!==g){n.h(a2,e,n.w(a2,g))
n.h(a2,g,d)}++g}else if(J.an(a5.$2(d,j),0))for(;!0;)if(J.an(a5.$2(n.w(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.h1(a5.$2(n.w(a2,f),l),0)){n.h(a2,e,n.w(a2,g))
a0=g+1
n.h(a2,g,n.w(a2,f))
n.h(a2,f,d)
g=a0}else{n.h(a2,e,n.w(a2,f))
n.h(a2,f,d)}f=a
break}}H.fH(a2,g,f,a5)}else H.fH(a2,g,f,a5)},
a6:function a6(){},
d2:function d2(){},
fu:function fu(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dA:function dA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dX:function dX(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fv:function fv(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eg:function eg(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bD:function bD(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eu:function eu(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
f7:function f7(){},
h_:function(a,b){var t=a.b7(b)
if(!u.globalState.d.cy)u.globalState.f.bi()
return t},
q6:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.af(s).$isa8)throw H.A(P.nu("Arguments to main must be a List: "+H.t(s)))
u.globalState=new H.mw(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$p4()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.m1(P.o3(null,H.dc),0)
r=P.Q
s.z=new H.l(0,null,null,null,null,null,0,[r,H.dI])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.mv()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.rE,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ux)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bB(null,null,null,r)
p=new H.dD(0,null,!1)
o=new H.dI(s,new H.l(0,null,null,null,null,null,0,[r,H.dD]),q,u.createNewIsolate(),p,new H.c4(H.nk()),new H.c4(H.nk()),!1,!1,[],P.bB(null,null,null,null),null,null,!1,!0,P.bB(null,null,null,null))
q.j(0,0)
o.cJ(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.dP(a,{func:1,args:[,]}))o.b7(new H.nl(t,a))
else if(H.dP(a,{func:1,args:[,,]}))o.b7(new H.nm(t,a))
else o.b7(a)
u.globalState.f.bi()},
ux:function(a){var t=P.ee(["command","print","msg",a])
return new H.c_(!0,P.eB(null,P.Q)).ah(t)},
rG:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.rH()
return},
rH:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.A(new P.b6("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.A(new P.b6('Cannot extract URI from "'+t+'"'))},
rE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.db(!0,[]).aD(b.data)
s=J.b7(t)
switch(s.w(t,"command")){case"start":u.globalState.b=s.w(t,"id")
r=s.w(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.w(t,"args")
o=new H.db(!0,[]).aD(s.w(t,"msg"))
n=s.w(t,"isSpawnUri")
m=s.w(t,"startPaused")
l=new H.db(!0,[]).aD(s.w(t,"replyTo"))
s=u.globalState.a++
k=P.Q
j=P.bB(null,null,null,k)
i=new H.dD(0,null,!1)
h=new H.dI(s,new H.l(0,null,null,null,null,null,0,[k,H.dD]),j,u.createNewIsolate(),i,new H.c4(H.nk()),new H.c4(H.nk()),!1,!1,[],P.bB(null,null,null,null),null,null,!1,!0,P.bB(null,null,null,null))
j.j(0,0)
h.cJ(0,i)
u.globalState.f.a.aA(new H.dc(h,new H.jd(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bi()
break
case"spawn-worker":break
case"message":if(s.w(t,"port")!=null)s.w(t,"port").aH(s.w(t,"msg"))
u.globalState.f.bi()
break
case"close":u.globalState.ch.a7(0,$.$get$p5().w(0,a))
a.terminate()
u.globalState.f.bi()
break
case"log":H.rD(s.w(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.ee(["command","print","msg",t])
k=new H.c_(!0,P.eB(null,P.Q)).ah(k)
s.toString
self.postMessage(k)}else P.ni(s.w(t,"msg"))
break
case"error":throw H.A(s.w(t,"msg"))}},
rD:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.ee(["command","log","msg",a])
r=new H.c_(!0,P.eB(null,P.Q)).ah(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.b8(q)
t=H.bn(q)
s=P.io(t)
throw H.A(s)}},
rF:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.pr=$.pr+("_"+s)
$.ps=$.ps+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.aH(["spawned",new H.dJ(s,r),q,t.r])
r=new H.je(a,b,c,d,t)
if(e===!0){t.da(q,q)
u.globalState.f.a.aA(new H.dc(t,r,"start isolate"))}else r.$0()},
un:function(a,b){var t=new H.lw(!0,!1,null)
t.ef(a,b)
return t},
uB:function(a){return new H.db(!0,[]).aD(new H.c_(!1,P.eB(null,P.Q)).ah(a))},
nl:function nl(a,b){this.a=a
this.b=b},
nm:function nm(a,b){this.a=a
this.b=b},
mw:function mw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
dI:function dI(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
mp:function mp(a,b){this.a=a
this.b=b},
m1:function m1(a,b){this.a=a
this.b=b},
m2:function m2(a){this.a=a},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
mv:function mv(){},
jd:function jd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
je:function je(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lU:function lU(){},
dJ:function dJ(b,a){this.b=b
this.a=a},
mz:function mz(a,b){this.a=a
this.b=b},
eC:function eC(b,c,a){this.b=b
this.c=c
this.a=a},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a,b){this.a=a
this.b=b},
ly:function ly(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
c_:function c_(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
v_:function(a){return u.types[a]},
v4:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.af(a).$iscc},
t:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bq(a)
if(typeof t!=="string")throw H.A(H.bf(a))
return t},
tO:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.ks(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cD:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
pq:function(a,b){return b.$1(a)},
tw:function(a,b,c){var t,s,r,q,p,o
H.uS(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.pq(a,c)
if(3>=t.length)return H.L(t,3)
s=t[3]
if(b<2||b>36)throw H.A(P.bs(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.f.cL(q,o)|32)>r)return H.pq(a,c)}return parseInt(a,b)},
o7:function(a){var t,s,r,q,p,o,n,m
t=J.af(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.x||!!J.af(a).$isd9){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.cL(q,0)===36)q=C.f.aK(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.oz(H.h0(a),0,null),u.mangledGlobalNames)},
kl:function(a){return"Instance of '"+H.o7(a)+"'"},
tx:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.c2(t,10))>>>0,56320|t&1023)}throw H.A(P.bs(a,0,1114111,null,null))},
o6:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.A(H.bf(a))
return a[b]},
pt:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.A(H.bf(a))
a[b]=c},
az:function(a){throw H.A(H.bf(a))},
L:function(a,b){if(a==null)J.cN(a)
throw H.A(H.aM(a,b))},
aM:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cn(!0,b,"index",null)
t=J.cN(a)
if(!(b<0)){if(typeof t!=="number")return H.az(t)
s=b>=t}else s=!0
if(s)return P.jb(b,a,"index",null,t)
return P.fG(b,"index",null)},
bf:function(a){return new P.cn(!0,a,null,null)},
dN:function(a){if(typeof a!=="number")throw H.A(H.bf(a))
return a},
uS:function(a){if(typeof a!=="string")throw H.A(H.bf(a))
return a},
A:function(a){var t
if(a==null)a=new P.em()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.q8})
t.name=""}else t.toString=H.q8
return t},
q8:function(){return J.bq(this.dartException)},
aB:function(a){throw H.A(a)},
c1:function(a){throw H.A(new P.bR(a))},
ck:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.lA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
lB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
pG:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
o1:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.js(a,s,t?null:b.receiver)},
b8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.nn(a)
if(a==null)return
if(a instanceof H.dZ)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.c2(r,16)&8191)===10)switch(q){case 438:return t.$1(H.o1(H.t(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return t.$1(new H.fA(p,null))}}if(a instanceof TypeError){o=$.$get$pA()
n=$.$get$pB()
m=$.$get$pC()
l=$.$get$pD()
k=$.$get$pH()
j=$.$get$pI()
i=$.$get$pF()
$.$get$pE()
h=$.$get$pK()
g=$.$get$pJ()
f=o.an(s)
if(f!=null)return t.$1(H.o1(s,f))
else{f=n.an(s)
if(f!=null){f.method="call"
return t.$1(H.o1(s,f))}else{f=m.an(s)
if(f==null){f=l.an(s)
if(f==null){f=k.an(s)
if(f==null){f=j.an(s)
if(f==null){f=i.an(s)
if(f==null){f=l.an(s)
if(f==null){f=h.an(s)
if(f==null){f=g.an(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.fA(s,f==null?null:f.method))}}return t.$1(new H.lC(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.fI()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cn(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.fI()
return a},
bn:function(a){var t
if(a instanceof H.dZ)return a.b
if(a==null)return new H.fX(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fX(a,null)},
v8:function(a){if(a==null||typeof a!='object')return J.bo(a)
else return H.cD(a)},
uY:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
v3:function(a,b,c,d,e,f,g){switch(c){case 0:return H.h_(b,new H.nc(a))
case 1:return H.h_(b,new H.nd(a,d))
case 2:return H.h_(b,new H.ne(a,d,e))
case 3:return H.h_(b,new H.nf(a,d,e,f))
case 4:return H.h_(b,new H.ng(a,d,e,f,g))}throw H.A(P.io("Unsupported number of arguments for wrapped closure"))},
eH:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.v3)
a.$identity=t
return t},
r5:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.af(c).$isa8){t.$reflectionInfo=c
r=H.tO(t).r}else r=c
q=d?Object.create(new H.l9().constructor.prototype):Object.create(new H.dU(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.c5
$.c5=J.dQ(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.oJ(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.v_,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.oH:H.nx
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.A("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.oJ(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
r2:function(a,b,c,d){var t=H.nx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
oJ:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.r4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.r2(s,!q,t,b)
if(s===0){q=$.c5
$.c5=J.dQ(q,1)
o="self"+H.t(q)
q="return function(){var "+o+" = this."
p=$.dV
if(p==null){p=H.hg("self")
$.dV=p}return new Function(q+H.t(p)+";return "+o+"."+H.t(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.c5
$.c5=J.dQ(q,1)
n+=H.t(q)
q="return function("+n+"){return this."
p=$.dV
if(p==null){p=H.hg("self")
$.dV=p}return new Function(q+H.t(p)+"."+H.t(t)+"("+n+");}")()},
r3:function(a,b,c,d){var t,s
t=H.nx
s=H.oH
switch(b?-1:a){case 0:throw H.A(new H.kw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
r4:function(a,b){var t,s,r,q,p,o,n,m
t=H.r0()
s=$.oG
if(s==null){s=H.hg("receiver")
$.oG=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.r3(q,!o,r,b)
if(q===1){s="return function(){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+");"
o=$.c5
$.c5=J.dQ(o,1)
return new Function(s+H.t(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+", "+m+");"
o=$.c5
$.c5=J.dQ(o,1)
return new Function(s+H.t(o)+"}")()},
ov:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.af(c).$isa8){c.fixed$length=Array
t=c}else t=c
return H.r5(a,b,t,!!d,e,f)},
nx:function(a){return a.a},
oH:function(a){return a.c},
r0:function(){var t=$.dV
if(t==null){t=H.hg("self")
$.dV=t}return t},
hg:function(a){var t,s,r,q,p
t=new H.dU("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
va:function(a,b){var t=J.b7(b)
throw H.A(H.r1(H.o7(a),t.bJ(b,3,t.gK(b))))},
eJ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.af(a)[b]
else t=!0
if(t)return a
H.va(a,b)},
q_:function(a){var t=J.af(a)
return"$S" in t?t.$S():null},
dP:function(a,b){var t
if(a==null)return!1
t=H.q_(a)
return t==null?!1:H.oy(t,b)},
r1:function(a,b){return new H.hl("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
vc:function(a){throw H.A(new P.id(a))},
nk:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
q1:function(a){return u.getIsolateTag(a)},
aH:function(a){return new H.cL(a,null)},
a:function(a,b){a.$ti=b
return a},
h0:function(a){if(a==null)return
return a.$ti},
q2:function(a,b){return H.oB(a["$as"+H.t(b)],H.h0(a))},
am:function(a,b,c){var t=H.q2(a,b)
return t==null?null:t[c]},
w:function(a,b){var t=H.h0(a)
return t==null?null:t[b]},
c0:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.oz(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.t(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.c0(t,b)
return H.uD(a,b)}return"unknown-reified-type"},
uD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.c0(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.c0(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.c0(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.uX(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.c0(l[j],b)+(" "+H.t(j))}q+="}"}return"("+q+") => "+t},
oz:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.er("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.a_=p+", "
o=a[s]
if(o!=null)q=!1
p=t.a_+=H.c0(o,c)}return q?"":"<"+t.E(0)+">"},
n7:function(a){var t,s
if(a instanceof H.dg){t=H.q_(a)
if(t!=null)return H.c0(t,null)}s=J.af(a).constructor.builtin$cls
if(a==null)return s
return s+H.oz(a.$ti,0,null)},
oB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dO:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.h0(a)
s=J.af(a)
if(s[b]==null)return!1
return H.pX(H.oB(s[d],t),c)},
pX:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bu(a[s],b[s]))return!1
return!0},
n3:function(a,b,c){return a.apply(b,H.q2(b,c))},
uT:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="av"||b.builtin$cls==="bW"
if(b==null)return!0
t=H.h0(a)
a=J.af(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.oy(r.apply(a,null),b)}return H.bu(s,b)},
bu:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bW")return!0
if('func' in b)return H.oy(a,b)
if('func' in a)return b.builtin$cls==="vi"||b.builtin$cls==="av"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.c0(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.pX(H.oB(o,t),r)},
pW:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bu(t,p)||H.bu(p,t)))return!1}return!0},
uK:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bu(p,o)||H.bu(o,p)))return!1}return!0},
oy:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bu(t,s)||H.bu(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.pW(r,q,!1))return!1
if(!H.pW(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bu(i,h)||H.bu(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bu(i,h)||H.bu(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bu(i,h)||H.bu(h,i)))return!1}}return H.uK(a.named,b.named)},
vt:function(a){var t=$.ow
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
vs:function(a){return H.cD(a)},
vr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
v5:function(a){var t,s,r,q,p,o
t=$.ow.$1(a)
s=$.n4[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.nb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.pV.$2(a,t)
if(t!=null){s=$.n4[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.nb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.oA(r)
$.n4[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.nb[t]=r
return r}if(p==="-"){o=H.oA(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.q3(a,r)
if(p==="*")throw H.A(new P.dG(t))
if(u.leafTags[t]===true){o=H.oA(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.q3(a,r)},
q3:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.nh(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
oA:function(a){return J.nh(a,!1,null,!!a.$iscc)},
v7:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.nh(t,!1,null,!!t.$iscc)
else return J.nh(t,c,null,null)},
v1:function(){if(!0===$.ox)return
$.ox=!0
H.v2()},
v2:function(){var t,s,r,q,p,o,n,m
$.n4=Object.create(null)
$.nb=Object.create(null)
H.v0()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.q4.$1(p)
if(o!=null){n=H.v7(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
v0:function(){var t,s,r,q,p,o,n
t=C.z()
t=H.dM(C.A,H.dM(C.B,H.dM(C.q,H.dM(C.q,H.dM(C.D,H.dM(C.C,H.dM(C.E(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.ow=new H.n8(p)
$.pV=new H.n9(o)
$.q4=new H.na(n)},
dM:function(a,b){return a(b)||b},
po:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.A(new P.iX("Illegal RegExp pattern ("+String(q)+")",a,null))},
vb:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.af(b)
if(!!t.$isft){t=C.f.aK(a,c)
return b.b.test(t)}else{t=t.de(b,C.f.aK(a,c))
return!t.ga1(t)}}},
ks:function ks(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
lA:function lA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fA:function fA(a,b){this.a=a
this.b=b},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(a){this.a=a},
dZ:function dZ(a,b){this.a=a
this.b=b},
nn:function nn(a){this.a=a},
fX:function fX(a,b){this.a=a
this.b=b},
nc:function nc(a){this.a=a},
nd:function nd(a,b){this.a=a
this.b=b},
ne:function ne(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function nf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ng:function ng(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dg:function dg(){},
lp:function lp(){},
l9:function l9(){},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a){this.a=a},
kw:function kw(a){this.a=a},
cL:function cL(a,b){this.a=a
this.b=b},
l:function l(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
jr:function jr(a){this.a=a},
jC:function jC(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jD:function jD(a,$ti){this.a=a
this.$ti=$ti},
jE:function jE(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
n8:function n8(a){this.a=a},
n9:function n9(a){this.a=a},
na:function na(a){this.a=a},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(a,b){this.a=a
this.b=b},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function mS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pO:function(a,b,c){},
tv:function(a,b,c){var t
H.pO(a,b,c)
t=new Uint8Array(a,b)
return t},
dB:function dB(){},
d4:function d4(){},
jX:function jX(){},
fw:function fw(){},
fx:function fx(){},
ei:function ei(){},
ek:function ek(){},
fy:function fy(){},
ej:function ej(){},
el:function el(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
k1:function k1(){},
k2:function k2(){},
k3:function k3(){},
fz:function fz(){},
k4:function k4(){},
uX:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
v9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
af:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fr.prototype
return J.fq.prototype}if(typeof a=="string")return J.d0.prototype
if(a==null)return J.fs.prototype
if(typeof a=="boolean")return J.jq.prototype
if(a.constructor==Array)return J.d_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
return a}if(a instanceof P.av)return a
return J.n6(a)},
nh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
n6:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.ox==null){H.v1()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.A(new P.dG("Return interceptor for "+H.t(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$o0()]
if(p!=null)return p
p=H.v5(a)
if(p!=null)return p
if(typeof a=="function")return C.F
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$o0(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
b7:function(a){if(typeof a=="string")return J.d0.prototype
if(a==null)return a
if(a.constructor==Array)return J.d_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
return a}if(a instanceof P.av)return a
return J.n6(a)},
eI:function(a){if(a==null)return a
if(a.constructor==Array)return J.d_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
return a}if(a instanceof P.av)return a
return J.n6(a)},
cM:function(a){if(typeof a=="number")return J.dx.prototype
if(a==null)return a
if(!(a instanceof P.av))return J.d9.prototype
return a},
n5:function(a){if(typeof a=="number")return J.dx.prototype
if(typeof a=="string")return J.d0.prototype
if(a==null)return a
if(!(a instanceof P.av))return J.d9.prototype
return a},
uZ:function(a){if(typeof a=="string")return J.d0.prototype
if(a==null)return a
if(!(a instanceof P.av))return J.d9.prototype
return a},
aa:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.d1.prototype
return a}if(a instanceof P.av)return a
return J.n6(a)},
dQ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.n5(a).Y(a,b)},
q9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.cM(a).P(a,b)},
an:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.af(a).R(a,b)},
bF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cM(a).aO(a,b)},
h1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cM(a).ax(a,b)},
no:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n5(a).a3(a,b)},
np:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.v4(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b7(a).w(a,b)},
qa:function(a,b,c,d){return J.aa(a).em(a,b,c,d)},
nq:function(a,b,c,d,e){return J.aa(a).eM(a,b,c,d,e)},
qb:function(a,b,c,d){return J.aa(a).eY(a,b,c,d)},
qc:function(a,b,c){return J.aa(a).eZ(a,b,c)},
qd:function(a,b){return J.aa(a).ff(a,b)},
h2:function(a,b,c){return J.cM(a).M(a,b,c)},
qe:function(a){return J.aa(a).dh(a)},
h3:function(a,b){return J.n5(a).aC(a,b)},
qf:function(a,b){return J.aa(a).di(a,b)},
qg:function(a,b){return J.b7(a).c8(a,b)},
nr:function(a,b,c){return J.b7(a).dj(a,b,c)},
qh:function(a,b){return J.eI(a).aE(a,b)},
h4:function(a){return J.cM(a).N(a)},
qi:function(a){return J.aa(a).gaV(a)},
qj:function(a){return J.aa(a).gfm(a)},
eK:function(a){return J.aa(a).gai(a)},
qk:function(a){return J.aa(a).gfC(a)},
bo:function(a){return J.af(a).ga0(a)},
ns:function(a){return J.aa(a).gbe(a)},
bv:function(a){return J.eI(a).gO(a)},
cN:function(a){return J.b7(a).gK(a)},
bw:function(a){return J.aa(a).gJ(a)},
oC:function(a){return J.aa(a).gcf(a)},
ql:function(a){return J.af(a).ga2(a)},
nt:function(a){return J.aa(a).gZ(a)},
c2:function(a){return J.aa(a).gcu(a)},
oD:function(a,b){return J.eI(a).aj(a,b)},
oE:function(a){return J.aa(a).h3(a)},
qm:function(a,b){return J.aa(a).hb(a,b)},
qn:function(a){return J.cM(a).a5(a)},
qo:function(a){return J.cM(a).hd(a)},
qp:function(a,b){return J.aa(a).seC(a,b)},
qq:function(a,b){return J.aa(a).saV(a,b)},
qr:function(a,b){return J.aa(a).sae(a,b)},
bp:function(a,b){return J.aa(a).sZ(a,b)},
cm:function(a,b){return J.aa(a).scu(a,b)},
qs:function(a){return J.aa(a).e3(a)},
oF:function(a,b){return J.uZ(a).aK(a,b)},
qt:function(a){return J.eI(a).ak(a)},
bq:function(a){return J.af(a).E(a)},
dR:function(a,b){return J.eI(a).cw(a,b)},
M:function M(){},
jq:function jq(){},
fs:function fs(){},
ed:function ed(){},
ki:function ki(){},
d9:function d9(){},
d1:function d1(){},
d_:function d_($ti){this.$ti=$ti},
nZ:function nZ($ti){this.$ti=$ti},
h9:function h9(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dx:function dx(){},
fr:function fr(){},
fq:function fq(){},
d0:function d0(){}},P={
uq:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.uL()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.eH(new P.lP(t),1)).observe(s,{childList:true})
return new P.lO(t,s,r)}else if(self.setImmediate!=null)return P.uM()
return P.uN()},
ur:function(a){++u.globalState.f.b
self.scheduleImmediate(H.eH(new P.lQ(a),0))},
us:function(a){++u.globalState.f.b
self.setImmediate(H.eH(new P.lR(a),0))},
ut:function(a){P.og(C.o,a)},
oq:function(a,b){P.pN(null,a)
return b.gfE()},
on:function(a,b){P.pN(a,b)},
op:function(a,b){J.qf(b,a)},
oo:function(a,b){b.fl(H.b8(a),H.bn(a))},
pN:function(a,b){var t,s,r,q
t=new P.mY(b)
s=new P.mZ(b)
r=J.af(a)
if(!!r.$isb1)a.c3(t,s)
else if(!!r.$isbk)a.cr(t,s)
else{q=new P.b1(0,$.ag,null,[null])
q.a=4
q.c=a
q.c3(t,null)}},
ou:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ag.toString
return new P.n1(t)},
pQ:function(a,b){if(H.dP(a,{func:1,args:[P.bW,P.bW]})){b.toString
return a}else{b.toString
return a}},
ny:function(a){return new P.mW(new P.b1(0,$.ag,null,[a]),[a])},
uC:function(a,b,c){$.ag.toString
a.as(b,c)},
pL:function(a,b){var t,s,r
b.a=1
try{a.cr(new P.ma(b),new P.mb(b))}catch(r){t=H.b8(r)
s=H.bn(r)
P.q5(new P.mc(b,t,s))}},
m9:function(a,b){var t,s,r
for(;a.geN();)a=a.c
t=a.gbU()
s=b.c
if(t){b.c=null
r=b.bu(s)
b.a=a.a
b.c=a.c
P.dH(b,r)}else{b.a=2
b.c=a
a.d0(s)}},
dH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.eK(p)
n=p.gay()
s.toString
P.eF(null,null,s,o,n)}return}for(;b.gbX()!=null;b=m){m=b.a
b.a=null
P.dH(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdq()||b.gdn()){k=b.gf8()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.eK(p)
n=p.gay()
s.toString
P.eF(null,null,s,o,n)
return}j=$.ag
if(j==null?k!=null:j!==k)$.ag=k
else j=null
if(b.gdn())new P.mh(t,r,q,b).$0()
else if(s){if(b.gdq())new P.mg(r,b,l).$0()}else if(b.gfL())new P.mf(t,r,b).$0()
if(j!=null)$.ag=j
s=r.b
if(!!J.af(s).$isbk){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bu(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.m9(s,i)
return}}i=b.b
b=i.bt()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
uF:function(){var t,s
for(;t=$.dK,t!=null;){$.eE=null
s=t.b
$.dK=s
if(s==null)$.eD=null
t.a.$0()}},
uI:function(){$.or=!0
try{P.uF()}finally{$.eE=null
$.or=!1
if($.dK!=null)$.$get$ok().$1(P.pY())}},
pU:function(a){var t=new P.fP(a,null)
if($.dK==null){$.eD=t
$.dK=t
if(!$.or)$.$get$ok().$1(P.pY())}else{$.eD.b=t
$.eD=t}},
uH:function(a){var t,s,r
t=$.dK
if(t==null){P.pU(a)
$.eE=$.eD
return}s=new P.fP(a,null)
r=$.eE
if(r==null){s.b=t
$.eE=s
$.dK=s}else{s.b=r.b
r.b=s
$.eE=s
if(s.b==null)$.eD=s}},
q5:function(a){var t=$.ag
if(C.e===t){P.dL(null,null,C.e,a)
return}t.toString
P.dL(null,null,t,t.c5(a,!0))},
vn:function(a,b){return new P.mQ(null,a,!1,[b])},
ot:function(a){return},
pP:function(a,b){var t=$.ag
t.toString
P.eF(null,null,t,a,b)},
uG:function(){},
uA:function(a,b,c){var t=a.bz()
if(!!J.af(t).$isbk&&t!==$.$get$e7())t.bm(new P.n_(b,c))
else b.aR(c)},
uu:function(a,b,c,d,e,f,g){var t,s
t=$.ag
s=e?1:0
s=new P.ey(a,null,null,null,null,t,s,null,null,[f,g])
s.cH(b,c,d,e,g)
s.ei(a,b,c,d,e,f,g)
return s},
uz:function(a,b,c){$.ag.toString
a.bo(b,c)},
uo:function(a,b){var t=$.ag
if(t===C.e){t.toString
return P.og(a,b)}return P.og(a,t.c5(b,!0))},
og:function(a,b){var t=C.b.a8(a.a,1000)
return H.un(t<0?0:t,b)},
up:function(){return $.ag},
eF:function(a,b,c,d,e){var t={}
t.a=d
P.uH(new P.n0(t,e))},
pR:function(a,b,c,d){var t,s
s=$.ag
if(s===c)return d.$0()
$.ag=c
t=s
try{s=d.$0()
return s}finally{$.ag=t}},
pT:function(a,b,c,d,e){var t,s
s=$.ag
if(s===c)return d.$1(e)
$.ag=c
t=s
try{s=d.$1(e)
return s}finally{$.ag=t}},
pS:function(a,b,c,d,e,f){var t,s
s=$.ag
if(s===c)return d.$2(e,f)
$.ag=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ag=t}},
dL:function(a,b,c,d){var t=C.e!==c
if(t)d=c.c5(d,!(!t||!1))
P.pU(d)},
lP:function lP(a){this.a=a},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a){this.a=a},
lR:function lR(a){this.a=a},
mY:function mY(a){this.a=a},
mZ:function mZ(a){this.a=a},
n1:function n1(a){this.a=a},
bk:function bk(){},
lY:function lY(){},
mW:function mW(a,$ti){this.a=a
this.$ti=$ti},
fV:function fV(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
b1:function b1(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
m6:function m6(a,b){this.a=a
this.b=b},
me:function me(a,b){this.a=a
this.b=b},
ma:function ma(a){this.a=a},
mb:function mb(a){this.a=a},
mc:function mc(a,b,c){this.a=a
this.b=b
this.c=c},
m8:function m8(a,b){this.a=a
this.b=b},
md:function md(a,b){this.a=a
this.b=b},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mi:function mi(a){this.a=a},
mg:function mg(a,b,c){this.a=a
this.b=b
this.c=c},
mf:function mf(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(a,b){this.a=a
this.b=b},
cj:function cj(){},
le:function le(a){this.a=a},
lf:function lf(a,b){this.a=a
this.b=b},
lg:function lg(a,b){this.a=a
this.b=b},
lh:function lh(a,b){this.a=a
this.b=b},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a){this.a=a},
lb:function lb(){},
mM:function mM(){},
mO:function mO(a){this.a=a},
mN:function mN(a){this.a=a},
lS:function lS(){},
fQ:function fQ(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
fR:function fR(a,$ti){this.a=a
this.$ti=$ti},
fS:function fS(x,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
bP:function bP(){},
lW:function lW(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function lV(a){this.a=a},
mP:function mP(){},
fT:function fT(){},
ev:function ev(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
m_:function m_(b,c,a){this.b=b
this.c=c
this.a=a},
lZ:function lZ(){},
mA:function mA(){},
mB:function mB(a,b){this.a=a
this.b=b},
fY:function fY(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
mQ:function mQ(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
n_:function n_(a,b){this.a=a
this.b=b},
ex:function ex(){},
ey:function ey(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
mx:function mx(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
dd:function dd(a,b){this.a=a
this.b=b},
mX:function mX(){},
n0:function n0(a,b){this.a=a
this.b=b},
mE:function mE(){},
mF:function mF(a,b){this.a=a
this.b=b},
mG:function mG(a,b){this.a=a
this.b=b},
mH:function mH(a,b){this.a=a
this.b=b},
uv:function(a,b){var t=a[b]
return t===a?null:t},
om:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ol:function(){var t=Object.create(null)
P.om(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
cd:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
tc:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
ee:function(a){return H.uY(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
eB:function(a,b){return new P.fW(0,null,null,null,null,null,0,[a,b])},
uw:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
k:function(a,b,c,d,e){return new P.mk(0,null,null,null,null,[d,e])},
nY:function(a,b,c){var t,s
if(P.os(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$eG()
s.push(a)
try{P.uE(a,t)}finally{if(0>=s.length)return H.L(s,-1)
s.pop()}s=P.pz(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
fn:function(a,b,c){var t,s,r
if(P.os(a))return b+"..."+c
t=new P.er(b)
s=$.$get$eG()
s.push(a)
try{r=t
r.a_=P.pz(r.ga_(),a,", ")}finally{if(0>=s.length)return H.L(s,-1)
s.pop()}s=t
s.a_=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
os:function(a){var t,s
for(t=0;s=$.$get$eG(),t<s.length;++t)if(a===s[t])return!0
return!1},
uE:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.t(t.gL())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.L(b,-1)
p=b.pop()
if(0>=b.length)return H.L(b,-1)
o=b.pop()}else{n=t.gL();++r
if(!t.I()){if(r<=4){b.push(H.t(n))
return}p=H.t(n)
if(0>=b.length)return H.L(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gL();++r
for(;t.I();n=m,m=l){l=t.gL();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.L(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.t(n)
p=H.t(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.L(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bB:function(a,b,c,d){return new P.ms(0,null,null,null,null,null,0,[d])},
o2:function(a,b){var t,s
t=P.bB(null,null,null,b)
for(s=J.bv(a);s.I();)t.j(0,s.gL())
return t},
tf:function(a){var t,s,r
t={}
if(P.os(a))return"{...}"
s=new P.er("")
try{$.$get$eG().push(a)
r=s
r.a_=r.ga_()+"{"
t.a=!0
a.cc(0,new P.jK(t,s))
t=s
t.a_=t.ga_()+"}"}finally{t=$.$get$eG()
if(0>=t.length)return H.L(t,-1)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
o3:function(a,b){var t=new P.jF(null,0,0,0,[b])
t.ec(a,b)
return t},
mk:function mk(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
mn:function mn(a){this.a=a},
ml:function ml(a,$ti){this.a=a
this.$ti=$ti},
mm:function mm(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fW:function fW(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
ms:function ms(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mo:function mo(){},
dw:function dw(){},
fm:function fm(){},
ce:function ce(){},
jK:function jK(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mu:function mu(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kH:function kH(){},
kG:function kG(){},
pz:function(a,b,c){var t=J.bv(b)
if(!t.I())return a
if(c.length===0){do a+=H.t(t.gL())
while(t.I())}else{a+=H.t(t.gL())
for(;t.I();)a=a+c+H.t(t.gL())}return a},
r9:function(a,b){return J.h3(a,b)},
oU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.rc(a)},
rc:function(a){var t=J.af(a)
if(!!t.$isdg)return t.E(a)
return H.kl(a)},
nu:function(a){return new P.cn(!1,null,null,a)},
dS:function(a,b,c){return new P.cn(!0,a,b,c)},
fG:function(a,b,c){return new P.fF(null,null,!0,a,b,"Value not in range")},
bs:function(a,b,c,d,e){return new P.fF(b,c,!0,a,d,"Invalid value")},
px:function(a,b,c,d,e,f){if(0>a||a>c)throw H.A(P.bs(a,0,c,"start",f))
if(a>b||b>c)throw H.A(P.bs(b,a,c,"end",f))
return b},
jb:function(a,b,c,d,e){var t=e!=null?e:J.cN(b)
return new P.ja(b,t,!0,a,c,"Index out of range")},
io:function(a){return new P.m5(a)},
cB:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bv(a);s.I();)t.push(s.gL())
if(b)return t
t.fixed$length=Array
return t},
d:function(a,b){var t=P.cB(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
ni:function(a){H.v9(H.t(a))},
tQ:function(a,b,c){return new H.ft(a,H.po(a,!1,!0,!1),null,null)},
cl:function cl(){},
aI:function aI(){},
x:function x(){},
cq:function cq(a){this.a=a},
ij:function ij(){},
ik:function ik(){},
cR:function cR(){},
em:function em(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a){this.a=a},
dG:function dG(a){this.a=a},
bX:function bX(a){this.a=a},
bR:function bR(a){this.a=a},
kc:function kc(){},
fI:function fI(){},
id:function id(a){this.a=a},
m5:function m5(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,br,$ti){this.a=a
this.br=br
this.$ti=$ti},
Q:function Q(){},
G:function G(){},
fp:function fp(){},
a8:function a8(){},
bW:function bW(){},
bQ:function bQ(){},
av:function av(){},
d3:function d3(){},
cH:function cH(){},
C:function C(){},
er:function er(a_){this.a_=a_},
pZ:function(a){var t,s
t=J.af(a)
if(!!t.$iscU){s=t.gal(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.fZ(a.data,a.height,a.width)},
uU:function(a){if(a instanceof P.fZ)return{data:a.a,height:a.b,width:a.c}
return a},
oS:function(){var t=$.oQ
if(t==null){t=J.nr(window.navigator.userAgent,"Opera",0)
$.oQ=t}return t},
rb:function(){var t=$.oP
if(t==null){t=P.oS()!==!0&&J.nr(window.navigator.userAgent,"Trident/",0)
$.oP=t}return t},
oT:function(){var t=$.oR
if(t==null){t=P.oS()!==!0&&J.nr(window.navigator.userAgent,"WebKit",0)
$.oR=t}return t},
mT:function mT(){},
mV:function mV(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
mU:function mU(a,b){this.a=a
this.b=b},
uy:function(a){var t=new P.mC(0,0)
t.ek(a)
return t},
eA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
tN:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.ax()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.ax()
if(d<0)s=-d*0
else s=d
return new P.cF(a,b,t,s,[e])},
mq:function mq(){},
mC:function mC(a,b){this.a=a
this.b=b},
cC:function cC(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mD:function mD(){},
cF:function cF(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
h5:function h5(){},
cO:function cO(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
iu:function iu(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
iI:function iI(){},
iU:function iU(){},
iW:function iW(){},
bT:function bT(){},
cw:function cw(){},
j9:function j9(){},
jL:function jL(){},
jM:function jM(){},
kh:function kh(){},
kr:function kr(){},
kE:function kE(){},
lk:function lk(){},
b5:function b5(){},
ll:function ll(){},
ln:function ln(){},
fL:function fL(){},
lt:function lt(){},
es:function es(){},
lD:function lD(){},
lE:function lE(){},
ez:function ez(){},
mI:function mI(){},
mJ:function mJ(){},
mK:function mK(){},
cP:function cP(){}},W={
oI:function(a,b){var t=document.createElement("canvas")
t.width=b
t.height=a
return t},
ra:function(a,b,c,d){var t,s,r
t=document.createEvent("CustomEvent")
J.qp(t,d)
if(!J.af(d).$isa8)if(!J.af(d).$iso4){s=d
if(typeof s!=="string"){s=d
s=typeof s==="number"}else s=!0}else s=!0
else s=!0
if(s)try{d=new P.mU([],[]).cv(d)
J.nq(t,a,!0,!0,d)}catch(r){H.b8(r)
J.nq(t,a,!0,!0,null)}else J.nq(t,a,!0,!0,null)
return t},
eW:function(a,b){var t,s,r,q,p,o,n
t=a==null?b==null:a===b
s=t||b.tagName==="HTML"
if(a==null||t){if(s)return new P.cC(0,0,[null])
throw H.A(P.nu("Specified element is not a transitive offset parent of this element."))}r=W.eW(a.offsetParent,b)
q=r.a
p=C.c.a5(a.offsetLeft)
if(typeof q!=="number")return q.Y()
o=r.b
n=C.c.a5(a.offsetTop)
if(typeof o!=="number")return o.Y()
return new P.cC(q+p,o+n,[null])},
aO:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.qr(t,a)}catch(r){H.b8(r)}return t},
kb:function(a,b,c,d){var t=new Option(a,b,c,!1)
return t},
mr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
al:function(a,b,c,d,e){var t=W.uJ(new W.m4(c))
t=new W.m3(0,a,b,t,!1,[e])
t.eh(a,b,c,!1,e)
return t},
uJ:function(a){var t=$.ag
if(t===C.e)return a
return t.fh(a,!0)},
ac:function ac(){},
h7:function h7(){},
h8:function h8(){},
de:function de(){},
hf:function hf(){},
hi:function hi(){},
hk:function hk(){},
eO:function eO(){},
cQ:function cQ(){},
eS:function eS(){},
dh:function dh(){},
fd:function fd(){},
ia:function ia(){},
ic:function ic(){},
eU:function eU(){},
eV:function eV(){},
ie:function ie(){},
cr:function cr(){},
il:function il(){},
im:function im(){},
B:function B(){},
dY:function dY(){},
iQ:function iQ(){},
aT:function aT(){},
dq:function dq(){},
fe:function fe(){},
ff:function ff(){},
f6:function f6(){},
f9:function f9(){},
j7:function j7(){},
cU:function cU(){},
j8:function j8(){},
fc:function fc(){},
eo:function eo(){},
jv:function jv(){},
jx:function jx(){},
jB:function jB(){},
jJ:function jJ(){},
eh:function eh(){},
jO:function jO(){},
jP:function jP(){},
jQ:function jQ(){},
jR:function jR(){},
jS:function jS(){},
aE:function aE(){},
k5:function k5(){},
k6:function k6(){},
d5:function d5(){},
k7:function k7(){},
k8:function k8(){},
ka:function ka(){},
kd:function kd(){},
kg:function kg(){},
kn:function kn(){},
kD:function kD(){},
ch:function ch(){},
kI:function kI(){},
kM:function kM(){},
kP:function kP(){},
kQ:function kQ(){},
lj:function lj(){},
ls:function ls(){},
bY:function bY(){},
fO:function fO(){},
lT:function lT(){},
lX:function lX(){},
m0:function m0(){},
mj:function mj(){},
mL:function mL(){},
fU:function fU(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ew:function ew(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
m3:function m3(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
m4:function m4(a){this.a=a},
fb:function fb(){},
iV:function iV(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti}},S={h6:function h6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hm:function hm(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jw:function jw(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2},jH:function jH(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2},kF:function kF(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2}},L={
nw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=P.C
s=A.bG
r=P.Q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#00ff00"),!0)
q.i(0,$.W,L.c("#EFEFEF"),!0)
q.i(0,$.V,L.c("#DEDEDE"),!0)
q.i(0,$.a3,L.c("#FF2106"),!0)
q.i(0,$.a2,L.c("#B01200"),!0)
q.i(0,$.Y,L.c("#2F2F30"),!0)
q.i(0,$.Z,L.c("#1D1D1D"),!0)
q.i(0,$.X,L.c("#080808"),!0)
q.i(0,$.T,L.c("#030303"),!0)
q.i(0,$.a1,L.c("#242424"),!0)
q.i(0,$.a0,L.c("#333333"),!0)
q.i(0,$.a_,L.c("#141414"),!0)
p=[t]
o=P.d(H.a(["Frogs"],p),t)
n=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.d(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.d(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.u
i=[j]
h=P.d(H.a([new E.u($.bO,2,!0),new E.u($.cK,1,!0),new E.u($.bC,-2,!0)],i),j)
g=[X.r,P.x]
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
e=[A.df]
d=A.J
f=new N.kN(0.5,1,0.5,q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(0,"Space",!0,!1,!1)
$.qS=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#ff0000"),!0)
f.i(0,$.W,L.c("#FF2106"),!0)
f.i(0,$.V,L.c("#AD1604"),!0)
f.i(0,$.a3,L.c("#030303"),!0)
f.i(0,$.a2,L.c("#242424"),!0)
f.i(0,$.Y,L.c("#510606"),!0)
f.i(0,$.Z,L.c("#3C0404"),!0)
f.i(0,$.X,L.c("#1F0000"),!0)
f.i(0,$.T,L.c("#B70D0E"),!0)
f.i(0,$.a1,L.c("#970203"),!0)
f.i(0,$.a0,L.c("#8E1516"),!0)
f.i(0,$.a_,L.c("#640707"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.d(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.d(H.a([new E.u($.dE,2,!0),new E.u($.bC,1,!0),new E.u($.cJ,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new N.lv(0.51,1,0.01,0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.01,0.01,0.01,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(1,"Time",!0,!1,!1)
$.qV=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#3399ff"),!0)
q.i(0,$.W,L.c("#10E0FF"),!0)
q.i(0,$.V,L.c("#00A4BB"),!0)
q.i(0,$.a3,L.c("#FEFD49"),!0)
q.i(0,$.a2,L.c("#D6D601"),!0)
q.i(0,$.Y,L.c("#0052F3"),!0)
q.i(0,$.Z,L.c("#0046D1"),!0)
q.i(0,$.X,L.c("#003396"),!0)
q.i(0,$.T,L.c("#0087EB"),!0)
q.i(0,$.a1,L.c("#0070ED"),!0)
q.i(0,$.a0,L.c("#006BE1"),!0)
q.i(0,$.a_,L.c("#0054B0"),!0)
o=P.d(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.d(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.d(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.d(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.d(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.d(H.a([new E.u($.bC,2,!0),new E.u($.aK,1,!0),new E.u($.cK,-1,!0),new E.u($.ci,-1,!0),new E.u($.aL,0.05,!1)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new T.hh(0.5,1,0.01,0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.01,0.01,0.01,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(2,"Breath",!0,!1,!1)
$.qx=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#003300"),!0)
f.i(0,$.W,L.c("#0F0F0F"),!0)
f.i(0,$.V,L.c("#010101"),!0)
f.i(0,$.a3,L.c("#E8C15E"),!0)
f.i(0,$.a2,L.c("#C7A140"),!0)
f.i(0,$.Y,L.c("#1E211E"),!0)
f.i(0,$.Z,L.c("#141614"),!0)
f.i(0,$.X,L.c("#0B0D0B"),!0)
f.i(0,$.T,L.c("#204020"),!0)
f.i(0,$.a1,L.c("#11200F"),!0)
f.i(0,$.a0,L.c("#192C16"),!0)
f.i(0,$.a_,L.c("#121F10"),!0)
h=P.d(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.d(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.d(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.d(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.d(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.d(H.a([new E.u($.bO,2,!0),new E.u($.cJ,1,!0),new E.u($.dE,-1,!0),new E.u($.cK,-1,!0),new E.u($.aL,0.01,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new U.ih(1,0.5,0.5,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.01,0.01,0.01,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(3,"Doom",!0,!1,!1)
$.qz=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#993300"),!0)
q.i(0,$.W,L.c("#BA1016"),!0)
q.i(0,$.V,L.c("#820B0F"),!0)
q.i(0,$.a3,L.c("#381B76"),!0)
q.i(0,$.a2,L.c("#1E0C47"),!0)
q.i(0,$.Y,L.c("#290704"),!0)
q.i(0,$.Z,L.c("#230200"),!0)
q.i(0,$.X,L.c("#110000"),!0)
q.i(0,$.T,L.c("#3D190A"),!0)
q.i(0,$.a1,L.c("#2C1207"),!0)
q.i(0,$.a0,L.c("#5C2913"),!0)
q.i(0,$.a_,L.c("#4C1F0D"),!0)
o=P.d(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.d(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.d(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.d(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.d(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.d(H.a([new E.u($.ci,2,!0),new E.u($.aK,1,!0),new E.u($.bO,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new T.he(0.01,0.5,1,0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.01,0.01,0.01,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(4,"Blood",!0,!1,!1)
$.qw=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#ff3399"),!0)
f.i(0,$.W,L.c("#BD1864"),!0)
f.i(0,$.V,L.c("#780F3F"),!0)
f.i(0,$.a3,L.c("#1D572E"),!0)
f.i(0,$.a2,L.c("#11371D"),!0)
f.i(0,$.Y,L.c("#4C1026"),!0)
f.i(0,$.Z,L.c("#3C0D1F"),!0)
f.i(0,$.X,L.c("#260914"),!0)
f.i(0,$.T,L.c("#6B0829"),!0)
f.i(0,$.a1,L.c("#4A0818"),!0)
f.i(0,$.a0,L.c("#55142A"),!0)
f.i(0,$.a_,L.c("#3D0E1E"),!0)
h=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.d(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.d(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.d(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.d(H.a([new E.u($.ci,1,!0),new E.eL(null,1,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new T.j1(0.3,0.6,0.01,f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.01,0.01,0.01,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(5,"Heart",!0,!1,!1)
$.qC=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#3da35a"),!0)
q.i(0,$.W,L.c("#06FFC9"),!0)
q.i(0,$.V,L.c("#04A885"),!0)
q.i(0,$.a3,L.c("#6E0E2E"),!0)
q.i(0,$.a2,L.c("#4A0818"),!0)
q.i(0,$.Y,L.c("#1D572E"),!0)
q.i(0,$.Z,L.c("#164524"),!0)
q.i(0,$.X,L.c("#11371D"),!0)
q.i(0,$.T,L.c("#3DA35A"),!0)
q.i(0,$.a1,L.c("#2E7A43"),!0)
q.i(0,$.a0,L.c("#3B7E4F"),!0)
q.i(0,$.a_,L.c("#265133"),!0)
o=P.d(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.d(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.d(H.a([new E.u($.cJ,2,!0),new E.u($.dE,1,!0),new E.u($.bO,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new V.jT(0.3,0.3,1,q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.01,0.01,0.01,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(6,"Mind",!0,!1,!1)
$.qK=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#ff9933"),!0)
f.i(0,$.W,L.c("#FEFD49"),!0)
f.i(0,$.V,L.c("#FEC910"),!0)
f.i(0,$.a3,L.c("#10E0FF"),!0)
f.i(0,$.a2,L.c("#00A4BB"),!0)
f.i(0,$.Y,L.c("#FA4900"),!0)
f.i(0,$.Z,L.c("#E94200"),!0)
f.i(0,$.X,L.c("#C33700"),!0)
f.i(0,$.T,L.c("#FF8800"),!0)
f.i(0,$.a1,L.c("#D66E04"),!0)
f.i(0,$.a0,L.c("#E76700"),!0)
f.i(0,$.a_,L.c("#CA5B00"),!0)
h=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.d(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.d(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.d(H.a([new E.u($.eq,2,!0),new E.u($.cJ,1,!0),new E.u($.aK,-1,!0),new E.u($.cK,-1,!0),new E.u($.aL,0.2,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new G.jA(1.01,0.5,0.01,f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.01,0.01,0.01,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(7,"Light",!0,!1,!1)
$.qI=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#000066"),!0)
q.i(0,$.W,L.c("#0B1030"),!0)
q.i(0,$.V,L.c("#04091A"),!0)
q.i(0,$.a3,L.c("#CCC4B5"),!0)
q.i(0,$.a2,L.c("#A89F8D"),!0)
q.i(0,$.Y,L.c("#00164F"),!0)
q.i(0,$.Z,L.c("#00103C"),!0)
q.i(0,$.X,L.c("#00071A"),!0)
q.i(0,$.T,L.c("#033476"),!0)
q.i(0,$.a1,L.c("#02285B"),!0)
q.i(0,$.a0,L.c("#004CB2"),!0)
q.i(0,$.a_,L.c("#003E91"),!0)
o=P.d(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.d(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.d(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.d(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.d(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.d(H.a([new E.dT(D.of(),null,3,!0),new E.dT(D.of(),null,-1,!0),new E.u($.dE,-1,!0),new E.u($.aL,0.2,!1)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new Q.lF(1,1,1,q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.01,0.01,0.01,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(8,"Void",!0,!1,!1)
$.qX=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#9900cc"),!0)
f.i(0,$.W,L.c("#974AA7"),!0)
f.i(0,$.V,L.c("#6B347D"),!0)
f.i(0,$.a3,L.c("#3D190A"),!0)
f.i(0,$.a2,L.c("#2C1207"),!0)
f.i(0,$.Y,L.c("#7C3FBA"),!0)
f.i(0,$.Z,L.c("#6D34A6"),!0)
f.i(0,$.X,L.c("#592D86"),!0)
f.i(0,$.T,L.c("#381B76"),!0)
f.i(0,$.a1,L.c("#1E0C47"),!0)
f.i(0,$.a0,L.c("#281D36"),!0)
f.i(0,$.a_,L.c("#1D1526"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.u($.dF,2,!0),new E.u($.bC,1,!0),new E.u($.aK,-1,!0),new E.u($.ci,-1,!0),new E.u($.aL,0.01,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new E.kp(1,1,0.01,f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.01,0.01,0.01,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(9,"Rage",!0,!1,!1)
$.qN=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#ffcc66"),!0)
q.i(0,$.W,L.c("#FDF9EC"),!0)
q.i(0,$.V,L.c("#D6C794"),!0)
q.i(0,$.a3,L.c("#164524"),!0)
q.i(0,$.a2,L.c("#06280C"),!0)
q.i(0,$.Y,L.c("#FFC331"),!0)
q.i(0,$.Z,L.c("#F7BB2C"),!0)
q.i(0,$.X,L.c("#DBA523"),!0)
q.i(0,$.T,L.c("#FFE094"),!0)
q.i(0,$.a1,L.c("#E8C15E"),!0)
q.i(0,$.a0,L.c("#F6C54A"),!0)
q.i(0,$.a_,L.c("#EDAF0C"),!0)
o=P.d(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.d(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.d(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.d(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.d(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.d(H.a([new E.u($.aK,2,!0),new E.u($.eq,1,!0),new E.dT(D.of(),null,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new X.j4(1,1,1,q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.01,0.01,0.01,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(10,"Hope",!0,!1,!1)
$.qE=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#494132"),!0)
f.i(0,$.W,L.c("#76C34E"),!0)
f.i(0,$.V,L.c("#4F8234"),!0)
f.i(0,$.a3,L.c("#00164F"),!0)
f.i(0,$.a2,L.c("#00071A"),!0)
f.i(0,$.Y,L.c("#605542"),!0)
f.i(0,$.Z,L.c("#494132"),!0)
f.i(0,$.X,L.c("#2D271E"),!0)
f.i(0,$.T,L.c("#CCC4B5"),!0)
f.i(0,$.a1,L.c("#A89F8D"),!0)
f.i(0,$.a0,L.c("#A29989"),!0)
f.i(0,$.a_,L.c("#918673"),!0)
h=P.d(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.d(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.d(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.d(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.d(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.d(H.a([new E.u($.cK,2,!0),new E.u($.dF,1,!0),new E.u($.bO,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new K.jz(0.01,1,0.03,f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.01,0.01,0.01,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(11,"Life",!0,!1,!1)
$.qH=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#9630BF"),!0)
q.i(0,$.W,L.c("#cc87e8"),!0)
q.i(0,$.V,L.c("#9545b7"),!0)
q.i(0,$.a3,L.c("#ae769b"),!0)
q.i(0,$.a2,L.c("#8f577c"),!0)
q.i(0,$.Y,L.c("#9630bf"),!0)
q.i(0,$.Z,L.c("#693773"),!0)
q.i(0,$.X,L.c("#4c2154"),!0)
q.i(0,$.T,L.c("#fcf9bd"),!0)
q.i(0,$.a1,L.c("#e0d29e"),!0)
q.i(0,$.a0,L.c("#bdb968"),!0)
q.i(0,$.a_,L.c("#ab9b55"),!0)
o=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.d(H.a([new E.u($.bO,3,!0),new E.u($.aK,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new Z.ii(1.01,0.3,0.01,q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.01,0.01,0.01,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(12,"Dream",!1,!1,!1)
$.qA=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#9630BF"),!0)
f.i(0,$.W,L.c("#cc87e8"),!0)
f.i(0,$.V,L.c("#9545b7"),!0)
f.i(0,$.a3,L.c("#ae769b"),!0)
f.i(0,$.a2,L.c("#8f577c"),!0)
f.i(0,$.Y,L.c("#9630bf"),!0)
f.i(0,$.Z,L.c("#693773"),!0)
f.i(0,$.X,L.c("#4c2154"),!0)
f.i(0,$.T,L.c("#fcf9bd"),!0)
f.i(0,$.a1,L.c("#e0d29e"),!0)
f.i(0,$.a0,L.c("#bdb968"),!0)
f.i(0,$.a_,L.c("#ab9b55"),!0)
h=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
k=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
l=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
m=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
n=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
o=P.d(H.a([new E.u($.bO,3,!0),new E.u($.aK,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new Q.jy(1.01,0.3,0.01,f,h,k,l,m,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,n,o,0.01,0.01,0.01,0.5,13,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(13,"Law",!1,!0,!0)
$.qG=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#ffff00"),!0)
q.i(0,$.W,L.c("#ffff00"),!0)
q.i(0,$.V,L.c("#ffff00"),!0)
q.i(0,$.a3,L.c("#508b2d"),!0)
q.i(0,$.a2,L.c("#316c0d"),!0)
q.i(0,$.Y,L.c("#dddd00"),!0)
q.i(0,$.Z,L.c("#afaf00"),!0)
q.i(0,$.X,L.c("#8f8f00"),!0)
q.i(0,$.T,L.c("#ff0000"),!0)
q.i(0,$.a1,L.c("#a8000a"),!0)
q.i(0,$.a0,L.c("#b8151f"),!0)
q.i(0,$.a_,L.c("#8c1d1d"),!0)
o=P.d(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),t)
n=P.d(H.a(["Juice","Joke","Jespacito"],p),t)
m=P.d(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),t)
l=P.d(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),t)
k=P.d(H.a([new E.u($.aL,13,!0)],i),j)
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.U,L.c("#FF9B00"),!0)
h.i(0,$.W,L.c("#FF9B00"),!0)
h.i(0,$.V,L.c("#FF8700"),!0)
h.i(0,$.a3,L.c("#7F7F7F"),!0)
h.i(0,$.a2,L.c("#727272"),!0)
h.i(0,$.Y,L.c("#A3A3A3"),!0)
h.i(0,$.Z,L.c("#999999"),!0)
h.i(0,$.X,L.c("#898989"),!0)
h.i(0,$.T,L.c("#EFEFEF"),!0)
h.i(0,$.a1,L.c("#DBDBDB"),!0)
h.i(0,$.a0,L.c("#C6C6C6"),!0)
h.i(0,$.a_,L.c("#ADADAD"),!0)
h=new Z.jt(13,13,13,q,o,n,m,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",l,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],k,0.01,0.01,0.01,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
h.S(14,"Juice",!1,!1,!0)
$.qF=h
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.U,L.c("#00ff00"),!0)
h.i(0,$.W,L.c("#00ff00"),!0)
h.i(0,$.V,L.c("#00ff00"),!0)
h.i(0,$.a3,L.c("#00ff00"),!0)
h.i(0,$.a2,L.c("#00cf00"),!0)
h.i(0,$.Y,L.c("#171717"),!0)
h.i(0,$.Z,L.c("#080808"),!0)
h.i(0,$.X,L.c("#080808"),!0)
h.i(0,$.T,L.c("#616161"),!0)
h.i(0,$.a1,L.c("#3b3b3b"),!0)
h.i(0,$.a0,L.c("#4a4a4a"),!0)
h.i(0,$.a_,L.c("#292929"),!0)
k=P.d(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),t)
l=P.d(H.a(["Shogun"],p),t)
m=P.d(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.u($.dF,13,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new K.kA(13,13,13,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],o,0.01,0.01,0.01,0.5,15,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(15,"Sauce",!1,!0,!1)
$.qQ=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#933100"),!0)
q.i(0,$.W,L.c("#933100"),!0)
q.i(0,$.V,L.c("#682200"),!0)
q.i(0,$.a3,L.c("#4c3a27"),!0)
q.i(0,$.a2,L.c("#302418"),!0)
q.i(0,$.Y,L.c("#a0562b"),!0)
q.i(0,$.Z,L.c("#723e20"),!0)
q.i(0,$.X,L.c("#442513"),!0)
q.i(0,$.T,L.c("#963c07"),!0)
q.i(0,$.a1,L.c("#682a06"),!0)
q.i(0,$.a0,L.c("#6d4d3a"),!0)
q.i(0,$.a_,L.c("#422e23"),!0)
o=P.d(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),t)
n=P.d(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),t)
m=P.d(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),t)
l=P.d(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),t)
k=P.d(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),t)
h=P.d(H.a([new E.u($.bC,10,!0),new E.u($.aK,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new L.lo(2,0.7,0.7,q,o,n,m,l,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",k,["Lightning","Ice","Taserface"],["Taser"],h,0.01,0.01,0.01,0.5,16,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(16,"Taze",!1,!1,!0)
$.qU=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#990000"),!0)
f.i(0,$.W,L.c("#ff0200"),!0)
f.i(0,$.V,L.c("#dd0000"),!0)
f.i(0,$.a3,L.c("#25334f"),!0)
f.i(0,$.a2,L.c("#07090f"),!0)
f.i(0,$.Y,L.c("#c64f4f"),!0)
f.i(0,$.Z,L.c("#a33f3f"),!0)
f.i(0,$.X,L.c("#843333"),!0)
f.i(0,$.T,L.c("#b5c1d2"),!0)
f.i(0,$.a1,L.c("#939dac"),!0)
f.i(0,$.a0,L.c("#3c3e42"),!0)
f.i(0,$.a_,L.c("#202123"),!0)
h=P.d(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),t)
k=P.d(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),t)
l=P.d(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),t)
m=P.d(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),t)
n=P.d(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),t)
o=P.d(H.a([new E.u($.bC,2,!0),new E.u($.aK,5,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new V.kv(0.9,1.1,2,f,h,k,l,m,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",n,["Arrow","Yondu","Empathy"],["Arrow","Bow"],o,0.01,0.01,0.01,0.5,17,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(17,"Rule",!1,!1,!0)
$.qP=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#853dcc"),!0)
q.i(0,$.W,L.c("#f76261"),!0)
q.i(0,$.V,L.c("#913a39"),!0)
q.i(0,$.a3,L.c("#ab4443"),!0)
q.i(0,$.a2,L.c("#78302f"),!0)
q.i(0,$.Y,L.c("#a54cff"),!0)
q.i(0,$.Z,L.c("#8c41d9"),!0)
q.i(0,$.X,L.c("#7335b3"),!0)
q.i(0,$.T,L.c("#853dcc"),!0)
q.i(0,$.a1,L.c("#642e99"),!0)
q.i(0,$.a0,L.c("#4c2375"),!0)
q.i(0,$.a_,L.c("#2b1442"),!0)
o=P.d(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),t)
n=P.d(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),t)
m=P.d(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),t)
l=P.d(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),t)
k=P.d(H.a([new E.u($.bC,15,!0),new E.u($.aK,-4,!0)],i),j)
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.U,L.c("#FF9B00"),!0)
h.i(0,$.W,L.c("#FF9B00"),!0)
h.i(0,$.V,L.c("#FF8700"),!0)
h.i(0,$.a3,L.c("#7F7F7F"),!0)
h.i(0,$.a2,L.c("#727272"),!0)
h.i(0,$.Y,L.c("#A3A3A3"),!0)
h.i(0,$.Z,L.c("#999999"),!0)
h.i(0,$.X,L.c("#898989"),!0)
h.i(0,$.T,L.c("#EFEFEF"),!0)
h.i(0,$.a1,L.c("#DBDBDB"),!0)
h.i(0,$.a0,L.c("#C6C6C6"),!0)
h.i(0,$.a_,L.c("#ADADAD"),!0)
h=new V.j3(3.1,2,0.7,q,o,n,m,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",l,["Hippo","Ranting"],["Vent"],k,0.01,0.01,0.01,0.5,18,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
h.S(18,"Hippo",!1,!1,!0)
$.qD=h
h=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
h.i(0,$.U,L.c("#959595"),!0)
h.i(0,$.W,L.c("#bfbfbf"),!0)
h.i(0,$.V,L.c("#959595"),!0)
h.i(0,$.a3,L.c("#805233"),!0)
h.i(0,$.a2,L.c("#663c1f"),!0)
h.i(0,$.Y,L.c("#805233"),!0)
h.i(0,$.Z,L.c("#737373"),!0)
h.i(0,$.X,L.c("#664d3c"),!0)
h.i(0,$.T,L.c("#663c1f"),!0)
h.i(0,$.a1,L.c("#4d2d17"),!0)
h.i(0,$.a0,L.c("#68594e"),!0)
h.i(0,$.a_,L.c("#4f443b"),!0)
k=P.d(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),t)
l=P.d(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),t)
m=P.d(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),t)
n=P.d(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),t)
o=P.d(H.a([new E.u($.bC,5,!0),new E.u($.aK,5,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new L.hd(0.7,2,3.1,h,k,l,m,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",n,["Bear","Thought"],["Doorway"],o,0.01,0.01,0.01,0.5,19,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(19,"Bear",!1,!1,!0)
$.qv=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#ebd837"),!0)
q.i(0,$.W,L.c("#ebd837"),!0)
q.i(0,$.V,L.c("#857a1f"),!0)
q.i(0,$.a3,L.c("#857a1f"),!0)
q.i(0,$.a2,L.c("#524b13"),!0)
q.i(0,$.Y,L.c("#d0c217"),!0)
q.i(0,$.Z,L.c("#9e9311"),!0)
q.i(0,$.X,L.c("#6b640c"),!0)
q.i(0,$.T,L.c("#c3c3c3"),!0)
q.i(0,$.a1,L.c("#8f8f8f"),!0)
q.i(0,$.a0,L.c("#a88e00"),!0)
q.i(0,$.a_,L.c("#756300"),!0)
o=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
n=P.d(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
m=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
l=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.u($.cJ,2,!0),new E.u($.dE,1,!0),new E.u($.bO,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new A.jU(0.3,0.3,1,q,o,n,m,l,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",k,h,0.01,0.01,0.01,0.5,20,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(20,"Mindstone",!1,!0,!0)
$.qL=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#74a4ff"),!0)
f.i(0,$.W,L.c("#74a4ff"),!0)
f.i(0,$.V,L.c("#466299"),!0)
f.i(0,$.a3,L.c("#466299"),!0)
f.i(0,$.a2,L.c("#2f4166"),!0)
f.i(0,$.Y,L.c("#d0c217"),!0)
f.i(0,$.Z,L.c("#9e9311"),!0)
f.i(0,$.X,L.c("#6b640c"),!0)
f.i(0,$.T,L.c("#c3c3c3"),!0)
f.i(0,$.a1,L.c("#8f8f8f"),!0)
f.i(0,$.a0,L.c("#a88e00"),!0)
f.i(0,$.a_,L.c("#756300"),!0)
h=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
k=P.d(H.a(["Frogs","Stone"],p),t)
l=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
o=P.d(H.a([new E.u($.bO,2,!0),new E.u($.cK,1,!0),new E.u($.bC,-2,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new A.kO(0.5,1,0.5,f,h,k,l,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",m,n,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],o,0.01,0.01,0.01,0.5,21,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(21,"Spacestone",!1,!0,!0)
$.qT=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#9846cc"),!0)
q.i(0,$.W,L.c("#9846cc"),!0)
q.i(0,$.V,L.c("#4c2366"),!0)
q.i(0,$.a3,L.c("#4c2366"),!0)
q.i(0,$.a2,L.c("#261233"),!0)
q.i(0,$.Y,L.c("#d0c217"),!0)
q.i(0,$.Z,L.c("#9e9311"),!0)
q.i(0,$.X,L.c("#6b640c"),!0)
q.i(0,$.T,L.c("#c3c3c3"),!0)
q.i(0,$.a1,L.c("#8f8f8f"),!0)
q.i(0,$.a0,L.c("#a88e00"),!0)
q.i(0,$.a_,L.c("#756300"),!0)
o=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),t)
n=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),t)
k=P.d(H.a([new E.u($.dF,2,!0),new E.u($.bC,1,!0),new E.u($.aK,-1,!0),new E.u($.ci,-1,!0),new E.u($.aL,0.01,!1)],i),j)
h=P.d(H.a(["Paradox Space"],p),t)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new A.kk(1,1,0.01,q,o,n,m,l,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",k,h,0.01,0.01,0.01,0.5,22,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(22,"Powerstone",!1,!0,!0)
$.qM=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#ffcb6f"),!0)
f.i(0,$.W,L.c("#ffcb6f"),!0)
f.i(0,$.V,L.c("#997a42"),!0)
f.i(0,$.a3,L.c("#997a42"),!0)
f.i(0,$.a2,L.c("#66512c"),!0)
f.i(0,$.Y,L.c("#d0c217"),!0)
f.i(0,$.Z,L.c("#9e9311"),!0)
f.i(0,$.X,L.c("#6b640c"),!0)
f.i(0,$.T,L.c("#c3c3c3"),!0)
f.i(0,$.a1,L.c("#8f8f8f"),!0)
f.i(0,$.a0,L.c("#a88e00"),!0)
f.i(0,$.a_,L.c("#756300"),!0)
h=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),t)
k=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
o=P.d(H.a([new E.u($.ci,1,!0),new E.eL(null,1,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new A.kL(0.3,0.6,0.01,f,h,k,l,m,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,o,0.01,0.01,0.01,0.5,23,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(23,"Soulstone",!1,!0,!0)
$.qR=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#7ac476"),!0)
q.i(0,$.W,L.c("#7ac476"),!0)
q.i(0,$.V,L.c("#3a5e39"),!0)
q.i(0,$.a3,L.c("#3a5e39"),!0)
q.i(0,$.a2,L.c("#1b2b1a"),!0)
q.i(0,$.Y,L.c("#d0c217"),!0)
q.i(0,$.Z,L.c("#9e9311"),!0)
q.i(0,$.X,L.c("#6b640c"),!0)
q.i(0,$.T,L.c("#c3c3c3"),!0)
q.i(0,$.a1,L.c("#8f8f8f"),!0)
q.i(0,$.a0,L.c("#a88e00"),!0)
q.i(0,$.a_,L.c("#756300"),!0)
o=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),t)
n=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.u($.dE,2,!0),new E.u($.bC,1,!0),new E.u($.cJ,-2,!0)],i),j)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new A.lz(0.51,1,0.01,0.7,q,o,n,m,l,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",k,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],h,0.01,0.01,0.01,0.5,24,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(24,"Timestone",!1,!0,!0)
$.qW=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#ed1c24"),!0)
f.i(0,$.W,L.c("#ed1c24"),!0)
f.i(0,$.V,L.c("#820a0f"),!0)
f.i(0,$.a3,L.c("#820a0f"),!0)
f.i(0,$.a2,L.c("#4f0609"),!0)
f.i(0,$.Y,L.c("#d0c217"),!0)
f.i(0,$.Z,L.c("#9e9311"),!0)
f.i(0,$.X,L.c("#6b640c"),!0)
f.i(0,$.T,L.c("#c3c3c3"),!0)
f.i(0,$.a1,L.c("#8f8f8f"),!0)
f.i(0,$.a0,L.c("#a88e00"),!0)
f.i(0,$.a_,L.c("#756300"),!0)
h=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),t)
k=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
o=P.d(H.a([new E.u($.eq,2,!0),new E.u($.cJ,1,!0),new E.u($.aK,-1,!0),new E.u($.cK,-1,!0),new E.u($.aL,0.2,!1)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new A.kq(1.01,0.5,0.01,f,h,k,l,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],n,o,0.01,0.01,0.01,0.5,25,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(25,"Realitystone",!1,!0,!0)
$.qO=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#e19aca"),!0)
q.i(0,$.W,L.c("#e19aca"),!0)
q.i(0,$.V,L.c("#7a546e"),!0)
q.i(0,$.a3,L.c("#7a546e"),!0)
q.i(0,$.a2,L.c("#473140"),!0)
q.i(0,$.Y,L.c("#d0c217"),!0)
q.i(0,$.Z,L.c("#9e9311"),!0)
q.i(0,$.X,L.c("#6b640c"),!0)
q.i(0,$.T,L.c("#c3c3c3"),!0)
q.i(0,$.a1,L.c("#8f8f8f"),!0)
q.i(0,$.a0,L.c("#a88e00"),!0)
q.i(0,$.a_,L.c("#756300"),!0)
o=P.d(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),t)
n=P.d(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),t)
k=P.d(H.a([new E.u($.aK,-1,!0),new E.u($.dF,2,!0)],i),j)
h=P.d(H.a(["Paradox Space"],p),t)
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#FF9B00"),!0)
f.i(0,$.W,L.c("#FF9B00"),!0)
f.i(0,$.V,L.c("#FF8700"),!0)
f.i(0,$.a3,L.c("#7F7F7F"),!0)
f.i(0,$.a2,L.c("#727272"),!0)
f.i(0,$.Y,L.c("#A3A3A3"),!0)
f.i(0,$.Z,L.c("#999999"),!0)
f.i(0,$.X,L.c("#898989"),!0)
f.i(0,$.T,L.c("#EFEFEF"),!0)
f.i(0,$.a1,L.c("#DBDBDB"),!0)
f.i(0,$.a0,L.c("#C6C6C6"),!0)
f.i(0,$.a_,L.c("#ADADAD"),!0)
f=new A.iZ(2,1.5,1,q,o,n,m,l,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],k,h,0.01,0.01,0.01,0.5,26,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
f.S(26,"Gauntlet",!1,!0,!0)
$.qB=f
f=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
f.i(0,$.U,L.c("#c55555"),!0)
f.i(0,$.W,L.c("#c55555"),!0)
f.i(0,$.V,L.c("#090404"),!0)
f.i(0,$.a3,L.c("#ba872e"),!0)
f.i(0,$.a2,L.c("#8e694e"),!0)
f.i(0,$.Y,L.c("#b59e5d"),!0)
f.i(0,$.Z,L.c("#837243"),!0)
f.i(0,$.X,L.c("#4f4528"),!0)
f.i(0,$.T,L.c("#9fbfbf"),!0)
f.i(0,$.a1,L.c("#95b5b5"),!0)
f.i(0,$.a0,L.c("#956f6f"),!0)
f.i(0,$.a_,L.c("#714b4b"),!0)
h=P.d(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),t)
k=P.d(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),t)
l=P.d(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),t)
m=P.d(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),t)
n=P.d(H.a([new E.u($.aK,-1,!0)],i),j)
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#FF9B00"),!0)
q.i(0,$.W,L.c("#FF9B00"),!0)
q.i(0,$.V,L.c("#FF8700"),!0)
q.i(0,$.a3,L.c("#7F7F7F"),!0)
q.i(0,$.a2,L.c("#727272"),!0)
q.i(0,$.Y,L.c("#A3A3A3"),!0)
q.i(0,$.Z,L.c("#999999"),!0)
q.i(0,$.X,L.c("#898989"),!0)
q.i(0,$.T,L.c("#EFEFEF"),!0)
q.i(0,$.a1,L.c("#DBDBDB"),!0)
q.i(0,$.a0,L.c("#C6C6C6"),!0)
q.i(0,$.a_,L.c("#ADADAD"),!0)
q=new D.jN(2,0.5,1,f,h,k,l,"cURSED","Some cursed meme music starts to play.",m,["memes"],["memes"],n,0.01,0.01,0.01,0.5,27,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
q.S(27,"Meme",!1,!1,!0)
$.qJ=q
q=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
q.i(0,$.U,L.c("#010067"),!0)
q.i(0,$.W,L.c("#010067"),!0)
q.i(0,$.V,L.c("#000033"),!0)
q.i(0,$.a3,L.c("#000033"),!0)
q.i(0,$.a2,L.c("#00000d"),!0)
q.i(0,$.Y,L.c("#0052F3"),!0)
q.i(0,$.Z,L.c("#0046D1"),!0)
q.i(0,$.X,L.c("#003396"),!0)
q.i(0,$.T,L.c("#0b0a33"),!0)
q.i(0,$.a1,L.c("#0a0a1a"),!0)
q.i(0,$.a0,L.c("#0b0b1b"),!0)
q.i(0,$.a_,L.c("#030308"),!0)
n=P.d(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),t)
m=P.d(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),t)
l=P.d(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),t)
k=P.d(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),t)
h=P.d(["Thanos","Phobos","Deimos","Boreas"],t)
j=P.d(H.a([new E.u($.bC,2,!0),new E.u($.aK,-1,!0),new E.u($.ci,-1,!0)],i),j)
s=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
s.i(0,$.U,L.c("#FF9B00"),!0)
s.i(0,$.W,L.c("#FF9B00"),!0)
s.i(0,$.V,L.c("#FF8700"),!0)
s.i(0,$.a3,L.c("#7F7F7F"),!0)
s.i(0,$.a2,L.c("#727272"),!0)
s.i(0,$.Y,L.c("#A3A3A3"),!0)
s.i(0,$.Z,L.c("#999999"),!0)
s.i(0,$.X,L.c("#898989"),!0)
s.i(0,$.T,L.c("#EFEFEF"),!0)
s.i(0,$.a1,L.c("#DBDBDB"),!0)
s.i(0,$.a0,L.c("#C6C6C6"),!0)
s.i(0,$.a_,L.c("#ADADAD"),!0)
d=new S.hm(0.5,0.7,1,q,n,m,l,k,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],h,j,0.01,0.01,0.01,0.5,28,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Chill",null,!1,!1,!0,!1,!1,!0,1,s,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.q(null,null,d))
d.S(28,"Chill",!1,!1,!0)
$.qy=d
$.nv=L.qu(255,"Null",!1,!0,!1)},
qZ:function(a){var t=$.$get$c3()
if(t.ga1(t))L.nw()
if($.$get$c3().aa(a))return $.$get$c3().w(0,a)
return $.nv},
r_:function(a){var t,s
t=$.$get$c3()
if(t.ga1(t))L.nw()
for(t=$.$get$c3(),t=t.gag(t),t=t.gO(t);t.I();){s=t.gL()
if(J.an(J.bw(s),a))return s}return $.nv},
qY:function(){var t=$.$get$c3()
t=t.gag(t)
return new H.bD(t,new L.ha(),[H.am(t,"G",0)])},
qu:function(a,b,c,d,e){var t,s,r
t=P.C
s=A.bG
r=P.Q
r=new L.S(P.k(null,null,null,t,s),P.k(null,null,null,r,s),P.k(null,null,null,t,r),P.k(null,null,null,r,t))
r.i(0,$.U,L.c("#FF9B00"),!0)
r.i(0,$.W,L.c("#FF9B00"),!0)
r.i(0,$.V,L.c("#FF8700"),!0)
r.i(0,$.a3,L.c("#7F7F7F"),!0)
r.i(0,$.a2,L.c("#727272"),!0)
r.i(0,$.Y,L.c("#A3A3A3"),!0)
r.i(0,$.Z,L.c("#999999"),!0)
r.i(0,$.X,L.c("#898989"),!0)
r.i(0,$.T,L.c("#EFEFEF"),!0)
r.i(0,$.a1,L.c("#DBDBDB"),!0)
r.i(0,$.a0,L.c("#C6C6C6"),!0)
r.i(0,$.a_,L.c("#ADADAD"),!0)
s=[t]
t=new L.co(0.01,0.01,0.01,0.5,a,new H.l(0,null,null,null,null,null,0,[X.r,P.x]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.u]),H.a([],[A.df]),Q.q(null,null,A.J))
t.S(a,b,c,d,e)
return t},
c:function(a){if(C.f.e0(a,"#"))return A.eQ(C.f.aK(a,1))
else return A.eQ(a)},
ha:function ha(){},
co:function co(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
hd:function hd(y1,y2,m,l,n,p,q,t,u,v,A,C,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kC:function kC(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
lo:function lo(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},M={hb:function hb(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ib:function ib(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},e_:function e_(){},lK:function lK(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2}},O={hc:function hc(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
rk:function(a,b,c,d){var t,s,r,q,p,o
t=document
s=t.createElement("div")
r=W.aO("file")
q=r.style
q.display="none"
q=J.aa(r)
q.sdw(r,!0)
p=P.bB(null,null,null,P.C)
for(o=0;o<1;++o)p.b3(0,Z.rl(a[o]))
if(p.a!==0)q.sf9(r,new H.dX(p,new O.iR(),[H.w(p,0),null]).fS(0,","))
q=q.ga4(r)
W.al(q.a,q.b,new O.iS(a,b,r),!1,H.w(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.al(t,"click",new O.iT(r),!1,W.aE)
s.appendChild(t)
return s},
e6:function e6(){},
iR:function iR(){},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
eM:function eM(){}},T={he:function he(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
_.x2=x2},hh:function hh(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
_.x2=x2},j1:function j1(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
oc:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a([],t)
r=[X.r,P.x]
q=A.J
p=E.u
o=[p]
n=[A.df]
s=new S.jw(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Knight",new H.l(0,null,null,null,null,null,0,r),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Knight",3,!0,!1,!1)
$.tY=s
s=P.d(H.a([new E.u($.aL,0.4,!1)],o),p)
m=H.a([],t)
s=new S.kF(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Seer",new H.l(0,null,null,null,null,null,0,r),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Seer",6,!0,!1,!1)
$.u9=s
s=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],t)
m=H.a([],t)
s=new O.hc("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],s,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Bard",new H.l(0,null,null,null,null,null,0,r),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Bard",9,!0,!1,!1)
$.tS=s
s=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],t)
m=H.a([],t)
s=new B.j2("Stalker",0.01,0.01,1.01,s,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Heir",new H.l(0,null,null,null,null,null,0,r),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Heir",8,!0,!1,!1)
$.tV=s
s=H.a([],t)
s=new U.jI(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Maid",new H.l(0,null,null,null,null,null,0,r),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Maid",0,!0,!1,!1)
$.u0=s
s=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],t)
m=H.a([],t)
s=new N.kt(1.01,0.51,0.01,s,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,r),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Rogue",4,!0,!1,!1)
$.u4=s
s=H.a([],t)
s=new V.ke(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,s,0.5,"Page",new H.l(0,null,null,null,null,null,0,r),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Page",1,!0,!1,!1)
$.u2=s
s=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],t)
m=H.a([],t)
s=new U.lu(1.01,0.01,1.01,s,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Thief",new H.l(0,null,null,null,null,null,0,r),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Thief",7,!0,!1,!1)
$.uc=s
s=P.d(H.a([new E.u($.aL,0.1,!1)],o),p)
m=H.a([],t)
s=new R.lm(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,r),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Sylph",5,!0,!1,!1)
$.ub=s
s=H.a([],t)
s=new N.km("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Prince",new H.l(0,null,null,null,null,null,0,r),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Prince",10,!0,!1,!1)
$.u3=s
s=P.d(H.a([new E.u($.aL,0.1,!1)],o),p)
m=H.a([],t)
s=new M.lK("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Witch",new H.l(0,null,null,null,null,null,0,r),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Witch",11,!0,!1,!1)
$.ue=s
s=P.d(H.a([new E.u($.aL,0.4,!1)],o),p)
m=H.a([],t)
s=new S.jH("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Mage",new H.l(0,null,null,null,null,null,0,r),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Mage",2,!0,!1,!1)
$.u_=s
s=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],t)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],t)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],t)
j=P.d(H.a([new E.u($.aL,3,!1),new E.u($.od,-2,!1)],o),p)
i=H.a([],t)
s=new E.lG("Scourge",0.01,0.01,1.01,s,m,l,k,!1,!0,!1,!1,!0,!1,j,"Glitch",0.01,0.01,0.01,i,0.5,"Waste",new H.l(0,null,null,null,null,null,0,r),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Waste",12,!1,!1,!1)
$.ud=s
s=H.a([],t)
s=new Y.kB("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Scout",new H.l(0,null,null,null,null,null,0,r),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Scout",13,!1,!1,!1)
$.u7=s
s=P.d(H.a([new E.u($.aL,0.5,!1)],o),p)
m=H.a([],t)
s=new L.kC("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,r),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Scribe",15,!1,!1,!1)
$.u8=s
s=P.d(H.a([new E.u($.aL,0.5,!1)],o),p)
m=H.a([],t)
s=new E.ky(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Sage",new H.l(0,null,null,null,null,null,0,r),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Sage",14,!1,!1,!1)
$.u5=s
s=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],t)
m=H.a([],t)
s=new Y.j0("Highlord",0.51,0.01,1.01,s,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Guide",new H.l(0,null,null,null,null,null,0,r),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Guide",16,!1,!1,!1)
$.tU=s
s=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],t)
m=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],t)
l=P.d(H.a([new E.u($.aL,3,!1)],o),p)
k=H.a([],t)
s=new Y.j_(0.01,0.01,0.01,s,m,!1,!0,!1,!1,!0,!1,l,"Glitch",0.01,0.01,0.01,k,0.5,"Grace",new H.l(0,null,null,null,null,null,0,r),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Grace",17,!1,!1,!1)
$.tT=s
s=P.d(H.a([new E.u($.aL,0.1,!1)],o),p)
m=H.a([],t)
s=new E.jV("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Muse",new H.l(0,null,null,null,null,null,0,r),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Muse",18,!1,!1,!1)
$.u1=s
s=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],t)
m=Q.q(null,null,q)
l=P.d(H.a([new E.u($.aL,0.1,!1)],o),p)
k=H.a([],t)
s=new Z.jG("Shogun",0.01,0.5,2.01,s,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,m,l,"Glitch",0.01,0.01,0.01,k,0.5,"Lord",new H.l(0,null,null,null,null,null,0,r),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Lord",19,!1,!1,!1)
$.tZ=s
s=P.d(H.a([new E.u($.aL,-0.1,!1),new E.u($.bO,1,!1)],o),p)
m=H.a([],t)
s=new Y.kJ("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Smith",new H.l(0,null,null,null,null,null,0,r),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Smith",20,!1,!1,!1)
$.ua=s
s=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],t)
m=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],t)
l=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],t)
j=P.d(H.a([new E.u($.aL,4,!1),new E.u($.od,-3,!1)],o),p)
i=H.a([],t)
s=new X.j5("Hooman",0.01,0.01,1.01,s,m,l,k,!1,!0,!1,!0,!1,!1,j,"Glitch",0.01,0.01,0.01,i,0.5,"Human",new H.l(0,null,null,null,null,null,0,r),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Human",21,!1,!1,!0)
$.tW=s
s=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],t)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],t)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["hussie"],t)
p=P.d(H.a([new E.u($.aL,41.3,!1),new E.u($.od,41.3,!1)],o),p)
j=H.a([],t)
s=new Q.j6(20,20,0.5,s,m,l,k,!1,!0,!1,!0,!0,!1,p,"Glitch",0.01,0.01,0.01,j,0.5,"Hussie",new H.l(0,null,null,null,null,null,0,r),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.X("Hussie",22,!1,!0,!0)
$.tX=s
s=H.a(["sans","sansly","sassy","super","soapful"],t)
p=H.a([],t)
t=new Y.kz(s,"Glitch",0.01,0.01,0.01,p,0.5,"Sans",new H.l(0,null,null,null,null,null,0,r),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.q(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
t.X("Sans",23,!1,!0,!0)
$.u6=t
$.ob=T.tR("Null",255,!1,!0,!1)},
uf:function(){var t=$.$get$cg()
t=t.gag(t)
return new H.bD(t,new T.kx(),[H.am(t,"G",0)])},
ug:function(a){var t=$.$get$cg()
if(t.ga1(t))T.oc()
if($.$get$cg().aa(a))return $.$get$cg().w(0,a)
return $.ob},
uh:function(a){var t,s
t=$.$get$cg()
if(t.ga1(t))T.oc()
for(t=$.$get$cg(),t=t.gag(t),t=t.gO(t);t.I();){s=t.gL()
if(J.an(J.bw(s),a))return s}return $.ob},
tR:function(a,b,c,d,e){var t,s
t=[P.C]
s=H.a([],t)
t=new T.cG("Glitch",0.01,0.01,0.01,s,0.5,a,new H.l(0,null,null,null,null,null,0,[X.r,P.x]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.q(null,null,A.J),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.u]),H.a([],[A.df]),1)
t.X(a,b,c,d,e)
return t},
kx:function kx(){},
cG:function cG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},A={i9:function i9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
f:function(a,b,c,d,e){var t=new A.J(c,e,null,a,!1,P.bB(null,null,null,G.H),0,3)
t.eb(a,b,c,!1,e)
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
jp:function jp(){},
jo:function jo(){},
jU:function jU(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kO:function kO(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kk:function kk(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
kL:function kL(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
lz:function lz(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
kq:function kq(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
iZ:function iZ(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
df:function df(){},
by:function(a,b,c,d){var t=new A.bG(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.e9(a,b,c,d)
return t},
b9:function(a){var t=A.by(a.gcn(),a.c,a.d,a.a)
if(!a.e){t.aP(a.f,a.r,a.x)
t.e=!1}if(!a.y){t.cF(a.z,a.Q,a.ch)
t.y=!1}return t},
i8:function(a,b,c,d){var t=A.by(0,0,0,255)
t.b=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.M(C.c.N(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.M(C.c.N(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.M(C.c.N(d*255),0,255)
return t},
oN:function(a,b){if(b){if(typeof a!=="number")return a.cz()
return A.by((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cz()
return A.by((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
eQ:function(a){return A.oN(H.tw(a,16,new A.n2()),J.cN(a)>=8)},
bG:function bG(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
n2:function n2(){},
kf:function kf(){},
fB:function fB(){},
tL:function(a){var t=new A.fE(null,null)
t.cG(a)
return t},
fE:function fE(a,b){this.a=a
this.b=b},
v6:function(){T.oc()
L.nw()
B.nK()
var t=A.ul()
document.querySelector("#load").appendChild(O.rk($.$get$py(),t.gfa(),"Load statdata file",!0))},
ul:function(){var t=new A.fK(new F.dz(!0,!1,"Stat Review"),H.a([],[E.aY]),H.a([],[A.ep]),P.cd(P.C,D.cI))
t.ee()
return t},
uk:function(a,b,c,d,e){var t=new A.ep(a,!0,null,b,c,d,e,null,null,0,0,null,null,null,null)
t.ed(a,b,c,d,e)
return t},
uQ:function(a,b,c){var t,s,r,q,p
t=H.a([1,2,5],[P.Q])
s=c/(b-a)
for(r=0;!0;){for(q=0;q<3;++q){p=t[q]*Math.pow(10,r)
if(s*p>=25)return p}++r}},
q0:function(a){var t,s,r,q,p,o
t=Math.abs(a)
s=H.a(["","K","M","B","T","Q","Qi","Sx"],[P.C])
for(r=0;r<8;r=q){q=r+1
if(t<Math.pow(1000,q)){p=t/Math.pow(1000,r)
o=C.d.bj(p,1)
if(C.f.fB(o,".0"))o=C.b.E(C.d.N(p))
return(a<0?"-":"")+o+s[r]}}return"!!!"},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l1:function l1(){},
l2:function l2(){},
l3:function l3(){},
l4:function l4(a){this.a=a},
l5:function l5(){},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(){},
l0:function l0(a){this.a=a},
ep:function ep(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b){this.a=a
this.b=b},
l_:function l_(a){this.a=a},
kS:function kS(a){this.a=a}},V={ig:function ig(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},j3:function j3(y1,y2,m,l,n,p,q,t,u,v,A,C,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jT:function jT(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},ke:function ke(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2},kv:function kv(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lr:function lr(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},U={ih:function ih(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,dl,cb,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
_.T=T
_.dl=dl
_.cb=cb
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.x2=x2},iK:function iK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jI:function jI(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r1=r1
_.r2=r2},b:function b(a){this.a=a},I:function I(b,c,a){this.b=b
this.c=c
this.a=a},lu:function lu(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2}},Z={ii:function ii(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
rl:function(a){var t=$.$get$nJ().gbf()
return new H.bD(t,new Z.iY(a),[H.am(t,"G",0)])},
iY:function iY(a){this.a=a},
iq:function iq(){},
jt:function jt(y1,y2,m,l,n,p,q,t,u,v,A,C,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
jG:function jG(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2}},X={eX:function eX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},eN:function eN(){},j4:function j4(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},j5:function j5(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
this.c=c}},N={P:function P(){},ju:function ju(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},km:function km(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2},kt:function kt(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2},kK:function kK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kN:function kN(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lv:function lv(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
_.x2=x2}},E={fa:function fa(){},k9:function k9(){},u:function u(a,b,c){this.a=a
this.b=b
this.c=c},dT:function dT(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},jV:function jV(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2},kp:function kp(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},ky:function ky(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2},lG:function lG(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
r7:function(a,b,c,d,e){var t
if(P.rb()===!0||J.qg(window.navigator.userAgent,$.$get$oM())){$.$get$b2().ac("IE or Edge detected, skipping.")
return}t=[{func:1,ret:A.bG,args:[P.x]}]
t=new E.dW(!1,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([],[W.eo]),!1,H.a([],[E.cS]),H.a([],t),H.a([],[{func:1,ret:A.bG,args:[P.x,P.x]}]),H.a([],t),A.by(0,0,0,255),null)
b=A.oN(c,!1)
t.fp(b,e,d)
t.c9(0)
t.fN()
t.dA()
$.$get$eP().j(0,t)
E.oL()
return t},
aj:function(a,b,c){var t,s
t=a.style
s=""+c+"px"
t.top=s
s=""+b+"px"
t.left=s},
cp:function(a,b,c,d){a.value=C.c.bj(C.c.M(E.r6(J.c2(a),d),b,c),d)},
r6:function(a,b){var t,s
for(t=a,s=0;s<b;++s){if(typeof t!=="number")return t.a3()
t*=10}t=J.qo(t)
for(s=0;s<b;++s)t*=0.1
return t},
di:function(a,b,c,d,e){var t=new E.cS(new F.dz(!1,!1,"FancySlider"),null,null,null,c,d,a,b,null,e,!1,null,null)
t.ea(a,b,c,d,e)
return t},
oL:function(){if($.oK)return
$.oK=!0
var t=W.aE
W.al(window,"mouseup",new E.ho(),!1,t)
W.al(window,"mousemove",new E.hp(),!1,t)},
dW:function dW(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.y2=y2
_.m=m},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(){},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(){},
hs:function hs(){},
ht:function ht(a){this.a=a},
hE:function hE(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
cS:function cS(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
ho:function ho(){},
hp:function hp(){},
aY:function aY(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r}},Y={j_:function j_(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2},j0:function j0(rx,ry,x1,x2,y1,y2,m,l,n,p,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
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
_.r2=r2},cf:function cf(a,b){this.a=a
this.b=b},a5:function a5(a,b){this.a=a
this.b=b},bx:function bx(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},aJ:function aJ(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},E:function E(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eT:function eT(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ax:function ax(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bt:function bt(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},hn:function hn(c,a,b){this.c=c
this.a=a
this.b=b},at:function at(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},fC:function fC(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},f8:function f8(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fD:function fD(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kz:function kz(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},kB:function kB(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2},kJ:function kJ(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r1=r1
_.r2=r2},
uR:function(a){var t,s,r,q
t=C.y.hz(a," ")
for(s=t.gO(t),r="";s.I();){q=s.gL()
r+=" "+(H.t(q.w(0,0).hN(0))+H.t(q.aK(0,1)))}return r}},B={j2:function j2(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,A,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
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
nK:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=E.u
s=[t]
r=P.d(H.a([new E.u($.aK,1,!0),new E.u($.eq,1,!0)],s),t)
q=[P.C]
p=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],q)
o=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],q)
n=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],q)
m=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
h=[X.r,P.x]
g=A.J
i=new F.jW(r,p,o,n,m,!1,l,k,j,i,1,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"loud","musical","Music")
i.F()
i.G()
B.bl(i)
$.rt=i
i=P.d(H.a([new E.u($.cJ,-2,!0)],s),t)
j=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],q)
k=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],q)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],q)
m=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],q)
n=H.a(["nobody"],q)
o=P.d(H.a([],s),t)
p=H.a(["Nobody"],q)
r=H.a(["Nobody"],q)
r=new S.h6(i,j,k,l,m,!1,n,o,p,r,13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"nerdy","smart","Academic")
r.F()
r.G()
B.bl(r)
$.rm=r
r=P.d(H.a([new E.u($.dF,2,!0)],s),t)
p=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],q)
o=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],q)
n=H.a(["MUSCLES HOARDER","BODY BOOSTER"],q)
m=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.hb(r,p,o,n,m,!1,l,k,j,i,4,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"dumb","athletic","Athletic")
r.F()
r.G()
B.bl(r)
$.rn=r
r=P.d(H.a([new E.u($.dE,-1,!0),new E.u($.eq,1,!0)],s),t)
p=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],q)
o=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],q)
n=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],q)
m=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new A.i9(r,p,o,n,m,!1,l,k,j,i,0,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"dorky","funny","Comedy")
r.F()
r.G()
B.bl(r)
$.ro=r
r=P.d(H.a([new E.u($.aK,-1,!0),new E.u($.cK,-1,!0)],s),t)
p=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],q)
o=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],q)
n=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],q)
m=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.ib(r,p,o,n,m,!1,l,k,j,i,2,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"pretentious","cultured","Culture")
r.F()
r.G()
B.bl(r)
$.rp=r
r=P.d(H.a([new E.u($.aK,1,!0),new E.u($.ci,1,!0)],s),t)
p=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],q)
o=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],q)
n=H.a(["BATTERBRAT","GRITTY GUARDIAN"],q)
m=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.ig(r,p,o,n,m,!1,l,k,j,i,8,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"boring","domestic","Domestic")
r.F()
r.G()
B.bl(r)
$.rq=r
r=P.d(H.a([new E.u($.eq,1,!0),new E.u($.bO,1,!0)],s),t)
p=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],q)
o=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],q)
n=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],q)
m=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new U.iK(r,p,o,n,m,!1,l,k,j,i,7,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"whimpy","imaginative","Fantasy")
r.F()
r.G()
B.bl(r)
$.rr=r
r=P.d(H.a([new E.u($.dF,1,!0),new E.u($.cK,1,!0)],s),t)
p=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],q)
o=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],q)
n=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],q)
m=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.ju(r,p,o,n,m,!1,l,k,j,i,6,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"harsh","fair-minded","Justice")
r.F()
r.G()
B.bl(r)
$.rs=r
r=P.d(H.a([new E.u($.bC,2,!0)],s),t)
p=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],q)
o=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],q)
n=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],q)
m=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new G.kj(r,p,o,n,m,!1,l,k,j,i,9,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"frivolous","geeky","PopCulture")
r.F()
r.G()
B.bl(r)
$.rv=r
r=P.d(H.a([new E.u($.ci,2,!0)],s),t)
p=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],q)
o=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],q)
n=H.a(["QUESTING CUPID","ROMANCE EXPERT"],q)
m=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new Q.ku(r,p,o,n,m,!1,l,k,j,i,12,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"obsessive","romantic","Romantic")
r.F()
r.G()
B.bl(r)
$.rw=r
r=P.d(H.a([new E.u($.aK,2,!0)],s),t)
p=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],q)
o=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],q)
n=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],q)
m=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.kK(r,p,o,n,m,!1,l,k,j,i,11,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"shallow","extroverted","Social")
r.F()
r.G()
B.bl(r)
$.rx=r
r=P.d(H.a([new E.u($.ci,-1,!0),new E.u($.aK,-1,!0)],s),t)
p=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],q)
o=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],q)
n=H.a(["ENEMY #1","JERKWAD JOURNEYER"],q)
m=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.lr(r,p,o,n,m,!1,l,k,j,i,5,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"terrible","honest","Terrible")
r.F()
r.G()
B.bl(r)
$.rz=r
r=P.d(H.a([new E.u($.cJ,2,!0)],s),t)
p=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],q)
o=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],q)
n=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],q)
m=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new F.lL(r,p,o,n,m,!1,l,k,j,i,3,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"wordy","lettered","Writing")
r.F()
r.G()
B.bl(r)
$.rA=r
r=P.d(H.a([new E.u($.bO,2,!0)],s),t)
p=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],q)
o=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],q)
n=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],q)
m=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new D.lq(r,p,o,n,m,!1,l,k,j,i,10,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"awkward","techy","Technology")
r.F()
r.G()
B.bl(r)
$.ry=r
r=H.a(["nobody"],q)
t=P.d(H.a([],s),t)
s=H.a(["Nobody"],q)
q=H.a(["Nobody"],q)
t=new B.cx(!0,r,t,s,q,-13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.q(null,null,g),"","","Null")
t.F()
t.G()
B.bl(t)
$.ru=t},
bl:function(a){if($.$get$bK().aa(a.f))throw H.A("Duplicate aspect id for "+a.E(0)+": "+a.f+" is already registered for "+J.bq($.$get$bK().w(0,a.f))+".")
$.$get$bK().h(0,a.f,a)},
p2:function(a){var t,s
t=$.$get$bK()
if(t.ga1(t))B.nK()
if($.$get$bK().aa(a))return $.$get$bK().w(0,a)
t="ERROR: could not find interest category "+a+"  and null is not supported. I have "
s=$.$get$bK()
throw H.A(t+s.gK(s)+" categories")},
p3:function(a){var t,s,r
t=$.$get$bK()
if(t.ga1(t))B.nK()
for(t=$.$get$bK(),t=t.gag(t),t=t.gO(t);t.I();){s=t.gL()
if(J.an(J.bw(s),a))return s}t="ERROR: could not find interest category "+H.t(a)+" and null is not supported. I have "
r=$.$get$bK()
throw H.A(t+r.gK(r)+" categories")},
rB:function(){var t=$.$get$bK()
t=t.gag(t)
return new H.bD(t,new B.jc(),[H.am(t,"G",0)])},
jc:function jc(){},
cx:function cx(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
hj:function hj(a,b){this.a=a
this.b=b}},Q={j6:function j6(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2},jy:function jy(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,T,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
_.B=B
_.D=D
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
_.x2=x2},ku:function ku(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lF:function lF(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},
q:function(a,b,c){var t=new Q.lI(null,null,[c])
t.eg(a,b,c)
return t},
oi:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.q(d,null,e)
s=a.gK(a)
C.a.sK(t.b,s)
if(H.dO(a,"$isG",[e],"$asG"))if(H.dO(a,"$isbZ",[e],"$asbZ"))for(s=J.bv(a.gbC()),r=0;s.I();){q=s.gL()
p=t.b
o=p.length
if(r>=o)return H.L(p,r)
p[r]=q;++r}else for(s=a.gO(a),p=[H.w(t,0)],r=0;s.I();){n=s.gL()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.L(o,r)
o[r]=new Q.e(n,m,p);++r}else for(s=a.gO(a),p=[e],o=[H.w(t,0)];s.I();){l=s.gL()
if(H.uT(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.L(m,0)
m[0]=new Q.e(l,k,o)}else if(H.dO(l,"$ise",p,null)){m=t.b
k=m.length
if(0>=k)return H.L(m,0)
m[0]=l}else throw H.A("Invalid entry type "+H.t(J.ql(l))+" for WeightedList<"+H.t(H.aH(H.c0(e)))+">. Should be "+H.t(H.aH(H.c0(e)))+" or WeightPair<"+H.t(H.aH(H.c0(e)))+">.")}return t},
oj:function(a,b,c,d){return new Q.fN(J.oD(a.gbC(),new Q.lJ(c,d,b)),null,[c,d])},
bZ:function bZ(){},
lI:function lI(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fM:function fM(){},
e:function e(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
da:function da(){},
et:function et(){},
lH:function lH(a,$ti){this.a=a
this.$ti=$ti},
fN:function fN(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c}},K={jz:function jz(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},kA:function kA(y1,y2,m,l,n,p,q,t,u,v,A,C,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2}},G={jA:function jA(y1,y2,m,l,n,p,q,t,u,v,A,C,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},kj:function kj(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fJ:function fJ(){},kR:function kR(b,a){this.b=b
this.a=a},
r8:function(a){var t,s,r,q,p,o,n
t=G.H
s=P.o2(a,t)
r=P.bB(null,null,null,t)
q=H.a([],[G.eR])
for(t=G.ta(),p=J.bv(t.a),t=new H.eu(p,t.b,[H.w(t,0)]);t.I();){o=p.gL()
if(o.hm(s))q.push(o)}C.a.e_(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c1)(q),++n){o=q[n]
if(o.hm(s)){r.j(0,o)
for(p=o.ge4(),p=p.gO(p);p.I();)s.a7(0,p.gL())}}if(s.a!==0)r.b3(0,s)
return r},
ta:function(){var t=$.$get$pl()
t.toString
return new H.bD(t,new G.jn(),[H.w(t,0)])},
H:function H(){},
eR:function eR(){},
jn:function jn(){}},D={jN:function jN(y1,y2,m,l,n,p,q,t,u,v,A,C,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
_.p=p
_.q=q
_.t=t
_.u=u
_.v=v
_.A=A
_.C=C
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},lq:function lq(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
of:function(){var t=$.$get$oe()
return new H.bD(t,new D.la(),[H.w(t,0)])},
la:function la(){},
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
_.ch=ch}},F={jW:function jW(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},lL:function lL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
te:function(a,b){return new F.dz(b,!1,a)},
td:function(a){if(a===C.t){window
return C.j.gai(C.j)}if(a===C.G){window
return C.j.ghq()}if(a===C.H){window
return C.j.gfM()}return P.uW()},
dy:function dy(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c}},R={
tK:function(a){var t,s
if(a.gK(a).aO(0,1)){a.w(0,1)
a.w(0,1)
t=!0}else t=!1
s=a.w(0,0)
s.ghx(s).ghL().dt("checking for two players, ps is "+H.t(a)+", ret is "+t)
return t},
ty:function(a){a.gad(a).gaL()
return!1},
tJ:function(a){a.gad(a).gaL()
return!1},
tI:function(a){a.gad(a).gaL()
return!1},
tH:function(a){return a.gad(a).gb4().ghK()},
tF:function(a){return a.gad(a).gb4().ghI()},
tE:function(a){return a.gad(a).gb4().ghH()},
tB:function(a){return a.gad(a).gb4().ghF()},
tD:function(a){return a.gad(a).gb4().ghG()},
tG:function(a){return a.gad(a).gb4().ghJ()},
tC:function(a){var t=a.gad(a)
t.gaL()
t.gaL()
return!1},
tz:function(a){return!0},
tA:function(a){a.gad(a).ghD()
return!1},
ko:function ko(){},
K:function K(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
D:function D(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
aw:function aw(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
lm:function lm(rx,ry,x1,x2,y1,y2,m,l,n,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.m=m
_.l=l
_.n=n
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
_.r2=r2}}
var v=[C,H,J,P,W,S,L,M,O,T,A,V,U,Z,X,N,E,Y,B,Q,K,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.o_.prototype={}
J.M.prototype={
R:function(a,b){return a===b},
ga0:function(a){return H.cD(a)},
E:function(a){return H.kl(a)},
ga2:function(a){return new H.cL(H.n7(a),null)}}
J.jq.prototype={
E:function(a){return String(a)},
ga0:function(a){return a?519018:218159},
ga2:function(a){return C.W},
$iscl:1}
J.fs.prototype={
R:function(a,b){return null==b},
E:function(a){return"null"},
ga0:function(a){return 0},
ga2:function(a){return C.Q},
$isbW:1}
J.ed.prototype={
ga0:function(a){return 0},
ga2:function(a){return C.P},
E:function(a){return String(a)},
$ispn:1}
J.ki.prototype={}
J.d9.prototype={}
J.d1.prototype={
E:function(a){var t=a[$.$get$oO()]
return t==null?this.e6(a):J.bq(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.d_.prototype={
c7:function(a,b){if(!!a.immutable$list)throw H.A(new P.b6(b))},
bA:function(a,b){if(!!a.fixed$length)throw H.A(new P.b6(b))},
j:function(a,b){this.bA(a,"add")
a.push(b)},
a7:function(a,b){var t
this.bA(a,"remove")
for(t=0;t<a.length;++t)if(J.an(a[t],b)){a.splice(t,1)
return!0}return!1},
cw:function(a,b){return new H.bD(a,b,[H.w(a,0)])},
b3:function(a,b){var t
this.bA(a,"addAll")
for(t=J.bv(b);t.I();)a.push(t.gL())},
aj:function(a,b){return new H.eg(a,b,[H.w(a,0),null])},
aE:function(a,b){if(b<0||b>=a.length)return H.L(a,b)
return a[b]},
gad:function(a){if(a.length>0)return a[0]
throw H.A(H.fo())},
gfU:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.A(H.fo())},
aY:function(a,b,c,d,e){var t,s,r
this.c7(a,"setRange")
P.px(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aB(P.bs(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.A(H.tb())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.L(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.L(d,r)
a[b+s]=d[r]}},
aZ:function(a,b){var t
this.c7(a,"sort")
t=b==null?P.uV():b
H.fH(a,0,a.length-1,t)},
e_:function(a){return this.aZ(a,null)},
E:function(a){return P.fn(a,"[","]")},
a6:function(a,b){var t=H.a(a.slice(0),[H.w(a,0)])
return t},
ak:function(a){return this.a6(a,!0)},
gO:function(a){return new J.h9(a,a.length,0,null,[H.w(a,0)])},
ga0:function(a){return H.cD(a)},
gK:function(a){return a.length},
sK:function(a,b){this.bA(a,"set length")
if(b<0)throw H.A(P.bs(b,0,null,"newLength",null))
a.length=b},
w:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aM(a,b))
if(b>=a.length||b<0)throw H.A(H.aM(a,b))
return a[b]},
h:function(a,b,c){this.c7(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aM(a,b))
if(b>=a.length||b<0)throw H.A(H.aM(a,b))
a[b]=c},
$isbN:1,
$asbN:function(){},
$isa8:1,
$asa8:null,
$isa6:1,
$asa6:null,
$isG:1,
$asG:null}
J.nZ.prototype={}
J.h9.prototype={
gL:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.A(H.c1(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.dx.prototype={
aC:function(a,b){var t
if(typeof b!=="number")throw H.A(H.bf(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbd(b)
if(this.gbd(a)===t)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
c6:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.A(new P.b6(""+a+".ceil()"))},
N:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.A(new P.b6(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.A(new P.b6(""+a+".round()"))},
hd:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
M:function(a,b,c){if(C.b.aC(b,c)>0)throw H.A(H.bf(b))
if(this.aC(a,b)<0)return b
if(this.aC(a,c)>0)return c
return a},
bj:function(a,b){var t
if(b>20)throw H.A(P.bs(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+t
return t},
hk:function(a,b){var t
if(b<1||b>21)throw H.A(P.bs(b,1,21,"precision",null))
t=a.toPrecision(b)
if(a===0&&this.gbd(a))return"-"+t
return t},
hj:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.A(P.bs(b,2,36,"radix",null))
t=a.toString(b)
if(C.f.fj(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aB(new P.b6("Unexpected toString result: "+t))
r=J.b7(s)
t=r.w(s,1)
q=+r.w(s,3)
if(r.w(s,2)!=null){t+=r.w(s,2)
q-=r.w(s,2).length}return t+C.f.a3("0",q)},
E:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga0:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.A(H.bf(b))
return a+b},
P:function(a,b){if(typeof b!=="number")throw H.A(H.bf(b))
return a/b},
a3:function(a,b){return a*b},
cA:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
a8:function(a,b){return(a|0)===a?a/b|0:this.f5(a,b)},
f5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.A(new P.b6("Result of truncating division is "+H.t(t)+": "+H.t(a)+" ~/ "+H.t(b)))},
aq:function(a,b){if(b<0)throw H.A(H.bf(b))
return b>31?0:a<<b>>>0},
f3:function(a,b){return b>31?0:a<<b>>>0},
c2:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
ax:function(a,b){if(typeof b!=="number")throw H.A(H.bf(b))
return a<b},
aO:function(a,b){if(typeof b!=="number")throw H.A(H.bf(b))
return a>b},
ga2:function(a){return C.Z},
$isbQ:1}
J.fr.prototype={
ga2:function(a){return C.Y},
$isx:1,
$isbQ:1,
$isQ:1}
J.fq.prototype={
ga2:function(a){return C.X},
$isx:1,
$isbQ:1}
J.d0.prototype={
fj:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aM(a,b))
if(b<0)throw H.A(H.aM(a,b))
if(b>=a.length)H.aB(H.aM(a,b))
return a.charCodeAt(b)},
cL:function(a,b){if(b>=a.length)throw H.A(H.aM(a,b))
return a.charCodeAt(b)},
c4:function(a,b,c){if(c>b.length)throw H.A(P.bs(c,0,b.length,null,null))
return new H.mR(b,a,c)},
de:function(a,b){return this.c4(a,b,0)},
Y:function(a,b){if(typeof b!=="string")throw H.A(P.dS(b,null,null))
return a+b},
fB:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.aK(a,s-t)},
e1:function(a,b,c){var t
if(c>a.length)throw H.A(P.bs(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
e0:function(a,b){return this.e1(a,b,0)},
bJ:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aB(H.bf(c))
if(b<0)throw H.A(P.fG(b,null,null))
if(typeof c!=="number")return H.az(c)
if(b>c)throw H.A(P.fG(b,null,null))
if(c>a.length)throw H.A(P.fG(c,null,null))
return a.substring(b,c)},
aK:function(a,b){return this.bJ(a,b,null)},
a3:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.A(C.v)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fY:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.a3(c,t)+a},
dj:function(a,b,c){if(b==null)H.aB(H.bf(b))
if(c>a.length)throw H.A(P.bs(c,0,a.length,null,null))
return H.vb(a,b,c)},
c8:function(a,b){return this.dj(a,b,0)},
aC:function(a,b){var t
if(typeof b!=="string")throw H.A(H.bf(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
E:function(a){return a},
ga0:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga2:function(a){return C.R},
gK:function(a){return a.length},
w:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.A(H.aM(a,b))
if(b>=a.length||b<0)throw H.A(H.aM(a,b))
return a[b]},
$isbN:1,
$asbN:function(){},
$isC:1}
H.a6.prototype={$asa6:null}
H.d2.prototype={
gO:function(a){return new H.fu(this,this.gK(this),0,null,[H.am(this,"d2",0)])},
aj:function(a,b){return new H.eg(this,b,[H.am(this,"d2",0),null])},
a6:function(a,b){var t,s,r
t=H.a([],[H.am(this,"d2",0)])
C.a.sK(t,this.gK(this))
for(s=0;s<this.gK(this);++s){r=this.aE(0,s)
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
ak:function(a){return this.a6(a,!0)}}
H.fu.prototype={
gL:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.b7(t)
r=s.gK(t)
if(this.b!==r)throw H.A(new P.bR(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.aE(t,q);++this.c
return!0}}
H.dA.prototype={
gO:function(a){return new H.fv(null,J.bv(this.a),this.b,this.$ti)},
gK:function(a){return J.cN(this.a)},
$asG:function(a,b){return[b]}}
H.dX.prototype={$isa6:1,
$asa6:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
H.fv.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gL())
return!0}this.a=null
return!1},
gL:function(){return this.a},
$asfp:function(a,b){return[b]}}
H.eg.prototype={
gK:function(a){return J.cN(this.a)},
aE:function(a,b){return this.b.$1(J.qh(this.a,b))},
$asd2:function(a,b){return[b]},
$asa6:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
H.bD.prototype={
gO:function(a){return new H.eu(J.bv(this.a),this.b,this.$ti)},
aj:function(a,b){return new H.dA(this,b,[H.w(this,0),null])}}
H.eu.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gL())===!0)return!0
return!1},
gL:function(){return this.a.gL()}}
H.f7.prototype={}
H.nl.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.nm.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.mw.prototype={}
H.dI.prototype={
da:function(a,b){if(!this.f.R(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bx()},
ha:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.a7(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.L(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.L(p,q)
p[q]=r
if(q===s.c)s.cX();++s.d}this.y=!1}this.bx()},
fc:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.af(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.L(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
h9:function(a){var t,s,r
if(this.ch==null)return
for(t=J.af(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aB(new P.b6("removeRange"))
P.px(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dX:function(a,b){if(!this.r.R(0,a))return
this.db=b},
fH:function(a,b,c){var t=J.af(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){a.aH(c)
return}t=this.cx
if(t==null){t=P.o3(null,null)
this.cx=t}t.aA(new H.mp(a,c))},
fG:function(a,b){var t
if(!this.r.R(0,a))return
t=J.af(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){this.bB()
return}t=this.cx
if(t==null){t=P.o3(null,null)
this.cx=t}t.aA(this.gfT())},
fI:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ni(a)
if(b!=null)P.ni(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bq(a)
s[1]=b==null?null:J.bq(b)
for(r=new P.bE(t,t.r,null,null,[null]),r.c=t.e;r.I();)r.d.aH(s)},
b7:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.b8(o)
p=H.bn(o)
this.fI(q,p)
if(this.db===!0){this.bB()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gfR()
if(this.cx!=null)for(;n=this.cx,!n.ga1(n);)this.cx.dB().$0()}return s},
du:function(a){return this.b.w(0,a)},
cJ:function(a,b){var t=this.b
if(t.aa(a))throw H.A(P.io("Registry: ports must be registered only once."))
t.h(0,a,b)},
bx:function(){var t=this.b
if(t.gK(t)-this.c.a>0||this.y||!this.x)u.globalState.z.h(0,this.a,this)
else this.bB()},
bB:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.aW(0)
for(t=this.b,s=t.gag(t),s=s.gO(s);s.I();)s.gL().er()
t.aW(0)
this.c.aW(0)
u.globalState.z.a7(0,this.a)
this.dx.aW(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.L(t,p)
q.aH(t[p])}this.ch=null}},
gfR:function(){return this.d},
gfn:function(){return this.e}}
H.mp.prototype={
$0:function(){this.a.aH(this.b)},
$S:function(){return{func:1,v:true}}}
H.m1.prototype={
fq:function(){var t=this.a
if(t.b===t.c)return
return t.dB()},
dH:function(){var t,s,r
t=this.fq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.aa(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.ga1(s)}else s=!1
else s=!1
else s=!1
if(s)H.aB(P.io("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.ga1(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ee(["command","close"])
r=new H.c_(!0,new P.fW(0,null,null,null,null,null,0,[null,P.Q])).ah(r)
s.toString
self.postMessage(r)}return!1}t.h4()
return!0},
d2:function(){if(self.window!=null)new H.m2(this).$0()
else for(;this.dH(););},
bi:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.d2()
else try{this.d2()}catch(r){t=H.b8(r)
s=H.bn(r)
q=u.globalState.Q
p=P.ee(["command","error","msg",H.t(t)+"\n"+H.t(s)])
p=new H.c_(!0,P.eB(null,P.Q)).ah(p)
q.toString
self.postMessage(p)}}}
H.m2.prototype={
$0:function(){if(!this.a.dH())return
P.uo(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.dc.prototype={
h4:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.b7(this.b)}}
H.mv.prototype={}
H.jd.prototype={
$0:function(){H.rF(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.je.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.dP(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.dP(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bx()},
$S:function(){return{func:1,v:true}}}
H.lU.prototype={}
H.dJ.prototype={
aH:function(a){var t,s,r
t=u.globalState.z.w(0,this.a)
if(t==null)return
s=this.b
if(s.gcZ())return
r=H.uB(a)
if(t.gfn()===s){s=J.b7(r)
switch(s.w(r,0)){case"pause":t.da(s.w(r,1),s.w(r,2))
break
case"resume":t.ha(s.w(r,1))
break
case"add-ondone":t.fc(s.w(r,1),s.w(r,2))
break
case"remove-ondone":t.h9(s.w(r,1))
break
case"set-errors-fatal":t.dX(s.w(r,1),s.w(r,2))
break
case"ping":t.fH(s.w(r,1),s.w(r,2),s.w(r,3))
break
case"kill":t.fG(s.w(r,1),s.w(r,2))
break
case"getErrors":s=s.w(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.w(r,1)
t.dx.a7(0,s)
break}return}u.globalState.f.a.aA(new H.dc(t,new H.mz(this,r),"receive"))},
R:function(a,b){if(b==null)return!1
return b instanceof H.dJ&&J.an(this.b,b.b)},
ga0:function(a){return this.b.gbT()}}
H.mz.prototype={
$0:function(){var t=this.a.b
if(!t.gcZ())t.el(this.b)},
$S:function(){return{func:1}}}
H.eC.prototype={
aH:function(a){var t,s,r
t=P.ee(["command","message","port",this,"msg",a])
s=new H.c_(!0,P.eB(null,P.Q)).ah(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.w(0,this.b)
if(r!=null)r.postMessage(s)}},
R:function(a,b){if(b==null)return!1
return b instanceof H.eC&&J.an(this.b,b.b)&&J.an(this.a,b.a)&&J.an(this.c,b.c)},
ga0:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aq()
s=this.a
if(typeof s!=="number")return s.aq()
r=this.c
if(typeof r!=="number")return H.az(r)
return(t<<16^s<<8^r)>>>0}}
H.dD.prototype={
er:function(){this.c=!0
this.b=null},
aB:function(a){var t,s
if(this.c)return
this.c=!0
this.b=null
t=u.globalState.d
s=this.a
t.b.a7(0,s)
t.c.a7(0,s)
t.bx()},
el:function(a){if(this.c)return
this.b.$1(a)},
$istM:1,
gbT:function(){return this.a},
gcZ:function(){return this.c}}
H.lw.prototype={
ef:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aA(new H.dc(s,new H.lx(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.eH(new H.ly(this,b),0),a)}else throw H.A(new P.b6("Timer greater than 0."))}}
H.lx.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ly.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.c4.prototype={
ga0:function(a){var t=this.a
if(typeof t!=="number")return t.hy()
t=C.c.c2(t,0)^C.c.a8(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.c4){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbT:function(){return this.a}}
H.c_.prototype={
ah:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.w(0,a)
if(s!=null)return["ref",s]
t.h(0,a,t.gK(t))
t=J.af(a)
if(!!t.$isdB)return["buffer",a]
if(!!t.$isd4)return["typed",a]
if(!!t.$isbN)return this.dT(a)
if(!!t.$isrC){r=this.gdQ()
q=a.gbf()
q=H.ef(q,r,H.am(q,"G",0),null)
q=P.cB(q,!0,H.am(q,"G",0))
t=t.gag(a)
t=H.ef(t,r,H.am(t,"G",0),null)
return["map",q,P.cB(t,!0,H.am(t,"G",0))]}if(!!t.$ispn)return this.dU(a)
if(!!t.$isM)this.dK(a)
if(!!t.$istM)this.bk(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isdJ)return this.dV(a)
if(!!t.$iseC)return this.dW(a)
if(!!t.$isdg){p=a.$static_name
if(p==null)this.bk(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isc4)return["capability",a.a]
if(!(a instanceof P.av))this.dK(a)
return["dart",u.classIdExtractor(a),this.dS(u.classFieldsExtractor(a))]},
bk:function(a,b){throw H.A(new P.b6((b==null?"Can't transmit:":b)+" "+H.t(a)))},
dK:function(a){return this.bk(a,null)},
dT:function(a){var t=this.dR(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bk(a,"Can't serialize indexable: ")},
dR:function(a){var t,s,r
t=[]
C.a.sK(t,a.length)
for(s=0;s<a.length;++s){r=this.ah(a[s])
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
dS:function(a){var t
for(t=0;t<a.length;++t)C.a.h(a,t,this.ah(a[t]))
return a},
dU:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bk(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sK(s,t.length)
for(r=0;r<t.length;++r){q=this.ah(a[t[r]])
if(r>=s.length)return H.L(s,r)
s[r]=q}return["js-object",t,s]},
dW:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dV:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbT()]
return["raw sendport",a]}}
H.db.prototype={
aD:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.A(P.nu("Bad serialized message: "+H.t(a)))
switch(C.a.gad(a)){case"ref":if(1>=a.length)return H.L(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.L(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.b6(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return H.a(this.b6(r),[null])
case"mutable":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return this.b6(r)
case"const":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.b6(r),[null])
s.fixed$length=Array
return s
case"map":return this.fw(a)
case"sendport":return this.fz(a)
case"raw sendport":if(1>=a.length)return H.L(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fv(a)
case"function":if(1>=a.length)return H.L(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.L(a,1)
return new H.c4(a[1])
case"dart":s=a.length
if(1>=s)return H.L(a,1)
q=a[1]
if(2>=s)return H.L(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.b6(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.A("couldn't deserialize: "+H.t(a))}},
b6:function(a){var t,s,r
t=J.b7(a)
s=0
while(!0){r=t.gK(a)
if(typeof r!=="number")return H.az(r)
if(!(s<r))break
t.h(a,s,this.aD(t.w(a,s)));++s}return a},
fw:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.L(a,1)
s=a[1]
if(2>=t)return H.L(a,2)
r=a[2]
q=P.tc()
this.b.push(q)
s=J.qt(J.oD(s,this.gfu()))
for(t=J.b7(s),p=J.b7(r),o=0;o<t.gK(s);++o)q.h(0,t.w(s,o),this.aD(p.w(r,o)))
return q},
fz:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.L(a,1)
s=a[1]
if(2>=t)return H.L(a,2)
r=a[2]
if(3>=t)return H.L(a,3)
q=a[3]
if(J.an(s,u.globalState.b)){p=u.globalState.z.w(0,r)
if(p==null)return
o=p.du(q)
if(o==null)return
n=new H.dJ(o,r)}else n=new H.eC(s,q,r)
this.b.push(n)
return n},
fv:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.L(a,1)
s=a[1]
if(2>=t)return H.L(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.b7(s)
p=J.b7(r)
o=0
while(!0){n=t.gK(s)
if(typeof n!=="number")return H.az(n)
if(!(o<n))break
q[t.w(s,o)]=this.aD(p.w(r,o));++o}return q}}
H.ks.prototype={}
H.lA.prototype={
an:function(a){var t,s,r
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
H.fA.prototype={
E:function(a){var t=this.b
if(t==null)return"NullError: "+H.t(this.a)
return"NullError: method not found: '"+H.t(t)+"' on null"}}
H.js.prototype={
E:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.t(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.t(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.t(this.a)+")"}}
H.lC.prototype={
E:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.dZ.prototype={
gay:function(){return this.b}}
H.nn.prototype={
$1:function(a){if(!!J.af(a).$iscR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fX.prototype={
E:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.nc.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.nd.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ne.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.nf.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ng.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.dg.prototype={
E:function(a){return"Closure '"+H.o7(this).trim()+"'"},
ght:function(){return this},
$D:null}
H.lp.prototype={}
H.l9.prototype={
E:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dU.prototype={
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dU))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga0:function(a){var t,s
t=this.c
if(t==null)s=H.cD(this.a)
else s=typeof t!=="object"?J.bo(t):H.cD(t)
t=H.cD(this.b)
if(typeof s!=="number")return s.hA()
return(s^t)>>>0},
E:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.t(this.d)+"' of "+H.kl(t)}}
H.hl.prototype={
E:function(a){return this.a}}
H.kw.prototype={
E:function(a){return"RuntimeError: "+H.t(this.a)}}
H.cL.prototype={
E:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga0:function(a){return J.bo(this.a)},
R:function(a,b){if(b==null)return!1
return b instanceof H.cL&&J.an(this.a,b.a)}}
H.l.prototype={
gK:function(a){return this.a},
ga1:function(a){return this.a===0},
gbf:function(){return new H.jD(this,[H.w(this,0)])},
gag:function(a){return H.ef(this.gbf(),new H.jr(this),H.w(this,0),H.w(this,1))},
aa:function(a){var t,s
if(typeof a==="string"){t=this.b
if(t==null)return!1
return this.cS(t,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.cS(s,a)}else return this.fO(a)},
fO:function(a){var t=this.d
if(t==null)return!1
return this.bb(this.bq(t,this.ba(a)),a)>=0},
w:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.b1(t,b)
return s==null?null:s.gaF()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.b1(r,b)
return s==null?null:s.gaF()}else return this.fP(b)},
fP:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bq(t,this.ba(a))
r=this.bb(s,a)
if(r<0)return
return s[r].gaF()},
h:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bV()
this.b=t}this.cI(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bV()
this.c=s}this.cI(s,b,c)}else{r=this.d
if(r==null){r=this.bV()
this.d=r}q=this.ba(b)
p=this.bq(r,q)
if(p==null)this.c1(r,q,[this.bW(b,c)])
else{o=this.bb(p,b)
if(o>=0)p[o].saF(c)
else p.push(this.bW(b,c))}}},
a7:function(a,b){if(typeof b==="string")return this.d1(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d1(this.c,b)
else return this.fQ(b)},
fQ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bq(t,this.ba(a))
r=this.bb(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.d8(q)
return q.gaF()},
aW:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cc:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.A(new P.bR(this))
t=t.c}},
cI:function(a,b,c){var t=this.b1(a,b)
if(t==null)this.c1(a,b,this.bW(b,c))
else t.saF(c)},
d1:function(a,b){var t
if(a==null)return
t=this.b1(a,b)
if(t==null)return
this.d8(t)
this.cT(a,b)
return t.gaF()},
bW:function(a,b){var t,s
t=new H.jC(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
d8:function(a){var t,s
t=a.geW()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
ba:function(a){return J.bo(a)&0x3ffffff},
bb:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.an(a[s].gdr(),b))return s
return-1},
E:function(a){return P.tf(this)},
b1:function(a,b){return a[b]},
bq:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
cT:function(a,b){delete a[b]},
cS:function(a,b){return this.b1(a,b)!=null},
bV:function(){var t=Object.create(null)
this.c1(t,"<non-identifier-key>",t)
this.cT(t,"<non-identifier-key>")
return t},
$isrC:1,
$iso4:1}
H.jr.prototype={
$1:function(a){return this.a.w(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.jC.prototype={
gdr:function(){return this.a},
gaF:function(){return this.b},
geW:function(){return this.d},
saF:function(a){return this.b=a}}
H.jD.prototype={
gK:function(a){return this.a.a},
gO:function(a){var t,s
t=this.a
s=new H.jE(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.jE.prototype={
gL:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.A(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.n8.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.n9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.C]}}}
H.na.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.C]}}}
H.ft.prototype={
E:function(a){return"RegExp/"+this.a+"/"},
geT:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.po(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
c4:function(a,b,c){if(c>b.length)throw H.A(P.bs(c,0,b.length,null,null))
return new H.lM(this,b,c)},
de:function(a,b){return this.c4(a,b,0)},
eD:function(a,b){var t,s
t=this.geT()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.my(this,s)},
$istP:1}
H.my.prototype={
w:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.L(t,b)
return t[b]},
$isd3:1}
H.lM.prototype={
gO:function(a){return new H.lN(this.a,this.b,this.c,null)},
$asfm:function(){return[P.d3]},
$asG:function(){return[P.d3]}}
H.lN.prototype={
gL:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.eD(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.li.prototype={
w:function(a,b){if(b!==0)H.aB(P.fG(b,null,null))
return this.c},
$isd3:1}
H.mR.prototype={
gO:function(a){return new H.mS(this.a,this.b,this.c,null)},
$asG:function(){return[P.d3]}}
H.mS.prototype={
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
this.d=new H.li(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gL:function(){return this.d}}
H.dB.prototype={
ga2:function(a){return C.I},
fg:function(a,b,c){var t
H.pO(a,b,c)
t=new DataView(a,b)
return t},
ff:function(a,b){return this.fg(a,b,null)},
$isdB:1,
$iscP:1}
H.d4.prototype={$isd4:1}
H.jX.prototype={
ga2:function(a){return C.J}}
H.fw.prototype={
gK:function(a){return a.length},
$iscc:1,
$ascc:function(){},
$isbN:1,
$asbN:function(){}}
H.fx.prototype={
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
a[b]=c}}
H.ei.prototype={
$ascc:function(){},
$asbN:function(){},
$asa8:function(){return[P.x]},
$asa6:function(){return[P.x]},
$asG:function(){return[P.x]},
$isa8:1,
$isa6:1,
$isG:1}
H.ek.prototype={
$ascc:function(){},
$asbN:function(){},
$asa8:function(){return[P.x]},
$asa6:function(){return[P.x]},
$asG:function(){return[P.x]}}
H.fy.prototype={
h:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
a[b]=c},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.ej.prototype={
$ascc:function(){},
$asbN:function(){},
$asa8:function(){return[P.Q]},
$asa6:function(){return[P.Q]},
$asG:function(){return[P.Q]},
$isa8:1,
$isa6:1,
$isG:1}
H.el.prototype={
$ascc:function(){},
$asbN:function(){},
$asa8:function(){return[P.Q]},
$asa6:function(){return[P.Q]},
$asG:function(){return[P.Q]}}
H.jY.prototype={
ga2:function(a){return C.K},
$isa8:1,
$asa8:function(){return[P.x]},
$isa6:1,
$asa6:function(){return[P.x]},
$isG:1,
$asG:function(){return[P.x]}}
H.jZ.prototype={
ga2:function(a){return C.L},
$isa8:1,
$asa8:function(){return[P.x]},
$isa6:1,
$asa6:function(){return[P.x]},
$isG:1,
$asG:function(){return[P.x]}}
H.k_.prototype={
ga2:function(a){return C.M},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.k0.prototype={
ga2:function(a){return C.N},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.k1.prototype={
ga2:function(a){return C.O},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.k2.prototype={
ga2:function(a){return C.S},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.k3.prototype={
ga2:function(a){return C.T},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.fz.prototype={
ga2:function(a){return C.U},
gK:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
H.k4.prototype={
ga2:function(a){return C.V},
gK:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)H.aB(H.aM(a,b))
return a[b]},
$isoh:1,
$isa8:1,
$asa8:function(){return[P.Q]},
$isa6:1,
$asa6:function(){return[P.Q]},
$isG:1,
$asG:function(){return[P.Q]}}
P.lP.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.lO.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.lQ.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.lR.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.mY.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.mZ.prototype={
$2:function(a,b){this.a.$2(1,new H.dZ(a,b))},
$S:function(){return{func:1,args:[,P.cH]}}}
P.n1.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.Q,,]}}}
P.bk.prototype={}
P.lY.prototype={
fl:function(a,b){if(a==null)a=new P.em()
if(this.a.a!==0)throw H.A(new P.bX("Future already completed"))
$.ag.toString
this.as(a,b)},
gfE:function(){return this.a}}
P.mW.prototype={
di:function(a,b){var t=this.a
if(t.a!==0)throw H.A(new P.bX("Future already completed"))
t.aR(b)},
as:function(a,b){this.a.as(a,b)}}
P.fV.prototype={
gf8:function(){return this.b.b},
gdq:function(){return(this.c&1)!==0},
gfL:function(){return(this.c&2)!==0},
gdn:function(){return this.c===8},
fJ:function(a){return this.b.b.cp(this.d,a)},
fV:function(a){if(this.c!==6)return!0
return this.b.b.cp(this.d,J.eK(a))},
fF:function(a){var t,s,r
t=this.e
s=J.aa(a)
r=this.b.b
if(H.dP(t,{func:1,args:[,,]}))return r.he(t,s.gai(a),a.gay())
else return r.cp(t,s.gai(a))},
fK:function(){return this.b.b.dF(this.d)},
gbX:function(){return this.a}}
P.b1.prototype={
geN:function(){return this.a===2},
gbU:function(){return this.a>=4},
cr:function(a,b){var t=$.ag
if(t!==C.e){t.toString
if(b!=null)b=P.pQ(b,t)}return this.c3(a,b)},
hg:function(a){return this.cr(a,null)},
c3:function(a,b){var t,s
t=new P.b1(0,$.ag,null,[null])
s=b==null?1:3
this.bK(new P.fV(null,t,s,a,b,[H.w(this,0),null]))
return t},
bm:function(a){var t,s
t=$.ag
s=new P.b1(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.w(this,0)
this.bK(new P.fV(null,s,8,a,null,[t,t]))
return s},
bK:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbU()){s.bK(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.dL(null,null,t,new P.m6(this,a))}},
d0:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbX()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbU()){p.d0(a)
return}this.a=p.a
this.c=p.c}t.a=this.bu(a)
s=this.b
s.toString
P.dL(null,null,s,new P.me(t,this))}},
bt:function(){var t=this.c
this.c=null
return this.bu(t)},
bu:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbX()
t.a=s}return s},
aR:function(a){var t,s
t=this.$ti
if(H.dO(a,"$isbk",t,"$asbk"))if(H.dO(a,"$isb1",t,null))P.m9(a,this)
else P.pL(a,this)
else{s=this.bt()
this.a=4
this.c=a
P.dH(this,s)}},
as:function(a,b){var t=this.bt()
this.a=8
this.c=new P.dd(a,b)
P.dH(this,t)},
ew:function(a){return this.as(a,null)},
eo:function(a){var t
if(H.dO(a,"$isbk",this.$ti,"$asbk")){this.eq(a)
return}this.a=1
t=this.b
t.toString
P.dL(null,null,t,new P.m8(this,a))},
eq:function(a){var t
if(H.dO(a,"$isb1",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.dL(null,null,t,new P.md(this,a))}else P.m9(a,this)
return}P.pL(a,this)},
ep:function(a,b){var t
this.a=1
t=this.b
t.toString
P.dL(null,null,t,new P.m7(this,a,b))},
ej:function(a,b){this.a=4
this.c=a},
$isbk:1,
gb2:function(){return this.a},
gf_:function(){return this.c}}
P.m6.prototype={
$0:function(){P.dH(this.a,this.b)},
$S:function(){return{func:1}}}
P.me.prototype={
$0:function(){P.dH(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ma.prototype={
$1:function(a){var t=this.a
t.a=0
t.aR(a)},
$S:function(){return{func:1,args:[,]}}}
P.mb.prototype={
$2:function(a,b){this.a.as(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.mc.prototype={
$0:function(){this.a.as(this.b,this.c)},
$S:function(){return{func:1}}}
P.m8.prototype={
$0:function(){var t,s
t=this.a
s=t.bt()
t.a=4
t.c=this.b
P.dH(t,s)},
$S:function(){return{func:1}}}
P.md.prototype={
$0:function(){P.m9(this.b,this.a)},
$S:function(){return{func:1}}}
P.m7.prototype={
$0:function(){this.a.as(this.b,this.c)},
$S:function(){return{func:1}}}
P.mh.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.fK()}catch(q){s=H.b8(q)
r=H.bn(q)
if(this.c){p=J.eK(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.dd(s,r)
o.a=!0
return}if(!!J.af(t).$isbk){if(t instanceof P.b1&&t.gb2()>=4){if(t.gb2()===8){p=this.b
p.b=t.gf_()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.hg(new P.mi(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.mi.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.mg.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.fJ(this.c)}catch(r){t=H.b8(r)
s=H.bn(r)
q=this.a
q.b=new P.dd(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.mf.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.fV(t)===!0&&q.e!=null){p=this.b
p.b=q.fF(t)
p.a=!1}}catch(o){s=H.b8(o)
r=H.bn(o)
q=this.a
p=J.eK(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.dd(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fP.prototype={}
P.cj.prototype={
aj:function(a,b){return new P.mx(b,this,[H.am(this,"cj",0),null])},
gK:function(a){var t,s
t={}
s=new P.b1(0,$.ag,null,[P.Q])
t.a=0
this.aw(new P.le(t),!0,new P.lf(t,s),s.gbO())
return s},
ak:function(a){var t,s,r
t=H.am(this,"cj",0)
s=H.a([],[t])
r=new P.b1(0,$.ag,null,[[P.a8,t]])
this.aw(new P.lg(this,s),!0,new P.lh(s,r),r.gbO())
return r},
gad:function(a){var t,s
t={}
s=new P.b1(0,$.ag,null,[H.am(this,"cj",0)])
t.a=null
t.a=this.aw(new P.lc(t,this,s),!0,new P.ld(s),s.gbO())
return s}}
P.le.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.lf.prototype={
$0:function(){this.b.aR(this.a.a)},
$S:function(){return{func:1}}}
P.lg.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.n3(function(a){return{func:1,args:[a]}},this.a,"cj")}}
P.lh.prototype={
$0:function(){this.b.aR(this.a)},
$S:function(){return{func:1}}}
P.lc.prototype={
$1:function(a){P.uA(this.a.a,this.c,a)},
$S:function(){return H.n3(function(a){return{func:1,args:[a]}},this.b,"cj")}}
P.ld.prototype={
$0:function(){var t,s,r,q
try{r=H.fo()
throw H.A(r)}catch(q){t=H.b8(q)
s=H.bn(q)
P.uC(this.a,t,s)}},
$S:function(){return{func:1}}}
P.lb.prototype={}
P.mM.prototype={
geV:function(){if((this.b&8)===0)return this.a
return this.a.gbG()},
cW:function(){var t,s
if((this.b&8)===0){t=this.a
if(t==null){t=new P.fY(null,null,0,this.$ti)
this.a=t}return t}s=this.a
s.gbG()
return s.gbG()},
gd6:function(){if((this.b&8)!==0)return this.a.gbG()
return this.a},
cK:function(){if((this.b&4)!==0)return new P.bX("Cannot add event after closing")
return new P.bX("Cannot add event while adding a stream")},
cV:function(){var t=this.c
if(t==null){t=(this.b&2)!==0?$.$get$e7():new P.b1(0,$.ag,null,[null])
this.c=t}return t},
aB:function(a){var t=this.b
if((t&4)!==0)return this.cV()
if(t>=4)throw H.A(this.cK())
t|=4
this.b=t
if((t&1)!==0)this.bw()
else if((t&3)===0)this.cW().j(0,C.k)
return this.cV()},
aQ:function(a){var t=this.b
if((t&1)!==0)this.bv(a)
else if((t&3)===0)this.cW().j(0,new P.ev(a,null,this.$ti))},
f4:function(a,b,c,d){var t,s,r,q,p
if((this.b&3)!==0)throw H.A(new P.bX("Stream has already been listened to."))
t=$.ag
s=d?1:0
r=new P.fS(this,null,null,null,t,s,null,null,this.$ti)
r.cH(a,b,c,d,H.w(this,0))
q=this.geV()
s=this.b|=1
if((s&8)!==0){p=this.a
p.sbG(r)
p.bE()}else this.a=r
r.f2(q)
r.bS(new P.mO(this))
return r},
eX:function(a){var t,s,r,q,p,o
t=null
if((this.b&8)!==0)t=this.a.bz()
this.a=null
this.b=this.b&4294967286|2
q=this.r
if(q!=null)if(t==null)try{t=q.$0()}catch(p){s=H.b8(p)
r=H.bn(p)
o=new P.b1(0,$.ag,null,[null])
o.ep(s,r)
t=o}else t=t.bm(q)
q=new P.mN(this)
if(t!=null)t=t.bm(q)
else q.$0()
return t},
gb2:function(){return this.b}}
P.mO.prototype={
$0:function(){P.ot(this.a.d)},
$S:function(){return{func:1}}}
P.mN.prototype={
$0:function(){var t=this.a.c
if(t!=null&&t.a===0)t.eo(null)},
$S:function(){return{func:1,v:true}}}
P.lS.prototype={
bv:function(a){this.gd6().b_(new P.ev(a,null,[H.w(this,0)]))},
bw:function(){this.gd6().b_(C.k)}}
P.fQ.prototype={}
P.fR.prototype={
ga0:function(a){return(H.cD(this.a)^892482866)>>>0},
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.fR))return!1
return b.a===this.a}}
P.fS.prototype={
bY:function(){return this.x.eX(this)},
aT:function(){var t=this.x
if((t.b&8)!==0)t.a.cg(0)
P.ot(t.e)},
aU:function(){var t=this.x
if((t.b&8)!==0)t.a.bE()
P.ot(t.f)}}
P.bP.prototype={
f2:function(a){if(a==null)return
this.r=a
if(!a.ga1(a)){this.e=(this.e|64)>>>0
this.r.bn(this)}},
ci:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dg()
if((t&4)===0&&(this.e&32)===0)this.bS(this.gbZ())},
cg:function(a){return this.ci(a,null)},
bE:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.ga1(t)}else t=!1
if(t)this.r.bn(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.bS(this.gc_())}}}},
bz:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bL()
t=this.f
return t==null?$.$get$e7():t},
bL:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dg()
if((this.e&32)===0)this.r=null
this.f=this.bY()},
aQ:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.bv(a)
else this.b_(new P.ev(a,null,[H.am(this,"bP",0)]))},
bo:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.d3(a,b)
else this.b_(new P.m_(a,b,null))},
en:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.bw()
else this.b_(C.k)},
aT:function(){},
aU:function(){},
bY:function(){return},
b_:function(a){var t,s
t=this.r
if(t==null){t=new P.fY(null,null,0,[H.am(this,"bP",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bn(this)}},
bv:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cq(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bM((t&4)!==0)},
d3:function(a,b){var t,s
t=this.e
s=new P.lW(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bL()
t=this.f
if(!!J.af(t).$isbk&&t!==$.$get$e7())t.bm(s)
else s.$0()}else{s.$0()
this.bM((t&4)!==0)}},
bw:function(){var t,s
t=new P.lV(this)
this.bL()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.af(s).$isbk&&s!==$.$get$e7())s.bm(t)
else t.$0()},
bS:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bM((t&4)!==0)},
bM:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.ga1(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.ga1(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.aT()
else this.aU()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bn(this)},
cH:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.pQ(b==null?P.uP():b,t)
this.c=c==null?P.uO():c},
gb2:function(){return this.e}}
P.lW.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.dP(s,{func:1,args:[P.av,P.cH]})
q=t.d
p=this.b
o=t.b
if(r)q.hf(o,p,this.c)
else q.cq(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.lV.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.dG(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.mP.prototype={
aw:function(a,b,c,d){return this.a.f4(a,d,c,!0===b)},
ce:function(a,b,c){return this.aw(a,null,b,c)},
aN:function(a){return this.aw(a,null,null,null)}}
P.fT.prototype={
gbg:function(){return this.a},
sbg:function(a){return this.a=a}}
P.ev.prototype={
cj:function(a){a.bv(this.b)}}
P.m_.prototype={
cj:function(a){a.d3(this.b,this.c)},
$asfT:function(){},
gai:function(a){return this.b},
gay:function(){return this.c}}
P.lZ.prototype={
cj:function(a){a.bw()},
gbg:function(){return},
sbg:function(a){throw H.A(new P.bX("No events after a done."))}}
P.mA.prototype={
bn:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.q5(new P.mB(this,a))
this.a=1},
dg:function(){if(this.a===1)this.a=3},
gb2:function(){return this.a}}
P.mB.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbg()
t.b=q
if(q==null)t.c=null
r.cj(this.b)},
$S:function(){return{func:1}}}
P.fY.prototype={
ga1:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbg(b)
this.c=b}}}
P.mQ.prototype={}
P.n_.prototype={
$0:function(){return this.a.aR(this.b)},
$S:function(){return{func:1}}}
P.ex.prototype={
aw:function(a,b,c,d){return this.eB(a,d,c,!0===b)},
ce:function(a,b,c){return this.aw(a,null,b,c)},
eB:function(a,b,c,d){return P.uu(this,a,b,c,d,H.am(this,"ex",0),H.am(this,"ex",1))},
cY:function(a,b){b.aQ(a)},
eL:function(a,b,c){c.bo(a,b)},
$ascj:function(a,b){return[b]}}
P.ey.prototype={
aQ:function(a){if((this.e&2)!==0)return
this.e7(a)},
bo:function(a,b){if((this.e&2)!==0)return
this.e8(a,b)},
aT:function(){var t=this.y
if(t==null)return
t.cg(0)},
aU:function(){var t=this.y
if(t==null)return
t.bE()},
bY:function(){var t=this.y
if(t!=null){this.y=null
return t.bz()}return},
eG:function(a){this.x.cY(a,this)},
eK:function(a,b){this.x.eL(a,b,this)},
eI:function(){this.en()},
ei:function(a,b,c,d,e,f,g){this.y=this.x.a.ce(this.geF(),this.geH(),this.geJ())},
$asbP:function(a,b){return[b]}}
P.mx.prototype={
cY:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.b8(q)
r=H.bn(q)
P.uz(b,s,r)
return}b.aQ(t)}}
P.dd.prototype={
E:function(a){return H.t(this.a)},
$iscR:1,
gai:function(a){return this.a},
gay:function(){return this.b}}
P.mX.prototype={}
P.n0.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.em()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.A(t)
r=H.A(t)
r.stack=J.bq(s)
throw r},
$S:function(){return{func:1}}}
P.mE.prototype={
dG:function(a){var t,s,r,q
try{if(C.e===$.ag){r=a.$0()
return r}r=P.pR(null,null,this,a)
return r}catch(q){t=H.b8(q)
s=H.bn(q)
r=P.eF(null,null,this,t,s)
return r}},
cq:function(a,b){var t,s,r,q
try{if(C.e===$.ag){r=a.$1(b)
return r}r=P.pT(null,null,this,a,b)
return r}catch(q){t=H.b8(q)
s=H.bn(q)
r=P.eF(null,null,this,t,s)
return r}},
hf:function(a,b,c){var t,s,r,q
try{if(C.e===$.ag){r=a.$2(b,c)
return r}r=P.pS(null,null,this,a,b,c)
return r}catch(q){t=H.b8(q)
s=H.bn(q)
r=P.eF(null,null,this,t,s)
return r}},
c5:function(a,b){if(b)return new P.mF(this,a)
else return new P.mG(this,a)},
fh:function(a,b){return new P.mH(this,a)},
w:function(a,b){return},
dF:function(a){if($.ag===C.e)return a.$0()
return P.pR(null,null,this,a)},
cp:function(a,b){if($.ag===C.e)return a.$1(b)
return P.pT(null,null,this,a,b)},
he:function(a,b,c){if($.ag===C.e)return a.$2(b,c)
return P.pS(null,null,this,a,b,c)}}
P.mF.prototype={
$0:function(){return this.a.dG(this.b)},
$S:function(){return{func:1}}}
P.mG.prototype={
$0:function(){return this.a.dF(this.b)},
$S:function(){return{func:1}}}
P.mH.prototype={
$1:function(a){return this.a.cq(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.mk.prototype={
gK:function(a){return this.a},
gag:function(a){var t=H.w(this,0)
return H.ef(new P.ml(this,[t]),new P.mn(this),t,H.w(this,1))},
aa:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eA(a)},
eA:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
w:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.eE(b)},
eE:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
return r<0?null:s[r+1]},
h:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ol()
this.b=t}this.cN(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ol()
this.c=s}this.cN(s,b,c)}else this.f0(b,c)},
f0:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ol()
this.d=t}s=this.at(a)
r=t[s]
if(r==null){P.om(t,s,[a,b]);++this.a
this.e=null}else{q=this.au(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
a7:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b0(this.c,b)
else return this.c0(b)},
c0:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cc:function(a,b){var t,s,r,q
t=this.cQ()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.w(0,q))
if(t!==this.e)throw H.A(new P.bR(this))}},
cQ:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
cN:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.om(a,b,c)},
b0:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.uv(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
at:function(a){return J.bo(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.an(a[s],b))return s
return-1},
$iso4:1}
P.mn.prototype={
$1:function(a){return this.a.w(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ml.prototype={
gK:function(a){return this.a.a},
gO:function(a){var t=this.a
return new P.mm(t,t.cQ(),0,null,this.$ti)}}
P.mm.prototype={
gL:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.A(new P.bR(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fW.prototype={
ba:function(a){return H.v8(a)&0x3ffffff},
bb:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdr()
if(r==null?b==null:r===b)return s}return-1}}
P.ms.prototype={
gO:function(a){var t=new P.bE(this,this.r,null,null,[null])
t.c=this.e
return t},
gK:function(a){return this.a},
c8:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.ez(b)},
ez:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
du:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.c8(0,a)?a:null
else return this.eO(a)},
eO:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.np(s,r).gcU()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.cM(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.cM(r,b)}else return this.aA(b)},
aA:function(a){var t,s,r
t=this.d
if(t==null){t=P.uw()
this.d=t}s=this.at(a)
r=t[s]
if(r==null)t[s]=[this.bN(a)]
else{if(this.au(r,a)>=0)return!1
r.push(this.bN(a))}return!0},
a7:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b0(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b0(this.c,b)
else return this.c0(b)},
c0:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return!1
this.cO(s.splice(r,1)[0])
return!0},
aW:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cM:function(a,b){if(a[b]!=null)return!1
a[b]=this.bN(b)
return!0},
b0:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.cO(t)
delete a[b]
return!0},
bN:function(a){var t,s
t=new P.mt(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cO:function(a){var t,s
t=a.ges()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
at:function(a){return J.bo(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.an(a[s].gcU(),b))return s
return-1},
$isa6:1,
$asa6:null,
$isG:1,
$asG:null}
P.mt.prototype={
gcU:function(){return this.a},
ges:function(){return this.c}}
P.bE.prototype={
gL:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.A(new P.bR(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.mo.prototype={}
P.dw.prototype={
aj:function(a,b){return H.ef(this,b,H.am(this,"dw",0),null)},
a6:function(a,b){return P.cB(this,!0,H.am(this,"dw",0))},
ak:function(a){return this.a6(a,!0)},
gK:function(a){var t,s
t=this.gO(this)
for(s=0;t.I();)++s
return s},
E:function(a){return P.nY(this,"(",")")},
$isG:1,
$asG:null}
P.fm.prototype={}
P.ce.prototype={
gO:function(a){return new H.fu(a,this.gK(a),0,null,[H.am(a,"ce",0)])},
aE:function(a,b){return this.w(a,b)},
aj:function(a,b){return new H.eg(a,b,[H.am(a,"ce",0),null])},
a6:function(a,b){var t,s,r
t=H.a([],[H.am(a,"ce",0)])
C.a.sK(t,this.gK(a))
for(s=0;s<this.gK(a);++s){r=this.w(a,s)
if(s>=t.length)return H.L(t,s)
t[s]=r}return t},
ak:function(a){return this.a6(a,!0)},
E:function(a){return P.fn(a,"[","]")},
$isa8:1,
$asa8:null,
$isa6:1,
$asa6:null,
$isG:1,
$asG:null}
P.jK.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a_+=", "
t.a=!1
t=this.b
s=t.a_+=H.t(a)
t.a_=s+": "
t.a_+=H.t(b)},
$S:function(){return{func:1,args:[,,]}}}
P.jF.prototype={
gO:function(a){return new P.mu(this,this.c,this.d,this.b,null,this.$ti)},
ga1:function(a){return this.b===this.c},
gK:function(a){return(this.c-this.b&this.a.length-1)>>>0},
aE:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.aB(P.jb(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.L(s,q)
return s[q]},
a6:function(a,b){var t=H.a([],this.$ti)
C.a.sK(t,this.gK(this))
this.f7(t)
return t},
ak:function(a){return this.a6(a,!0)},
aW:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.L(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
E:function(a){return P.fn(this,"{","}")},
dB:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.A(H.fo());++this.d
s=this.a
r=s.length
if(t>=r)return H.L(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aA:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.L(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.cX();++this.d},
cX:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aY(s,0,q,t,r)
C.a.aY(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
f7:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.aY(a,0,q,r,t)
return q}else{p=r.length-t
C.a.aY(a,0,p,r,t)
C.a.aY(a,p,p+this.c,this.a,0)
return this.c+p}},
ec:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asa6:null,
$asG:null}
P.mu.prototype={
gL:function(){return this.e},
I:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aB(new P.bR(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.L(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.kH.prototype={
b3:function(a,b){var t
for(t=b.gO(b);t.I();)this.j(0,t.gL())},
a6:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sK(t,this.a)
for(s=new P.bE(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.L(t,r)
t[r]=q}return t},
ak:function(a){return this.a6(a,!0)},
aj:function(a,b){return new H.dX(this,b,[H.w(this,0),null])},
E:function(a){return P.fn(this,"{","}")},
$isa6:1,
$asa6:null,
$isG:1,
$asG:null}
P.kG.prototype={}
P.cl.prototype={}
P.aI.prototype={}
P.x.prototype={$isaI:1,
$asaI:function(){return[P.bQ]}}
P.cq.prototype={
Y:function(a,b){return new P.cq(this.a+b.gbp())},
a3:function(a,b){return new P.cq(C.b.a5(this.a*b))},
ax:function(a,b){return C.b.ax(this.a,b.gbp())},
aO:function(a,b){return C.b.aO(this.a,b.gbp())},
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.cq))return!1
return this.a===b.a},
ga0:function(a){return this.a&0x1FFFFFFF},
aC:function(a,b){return C.b.aC(this.a,b.gbp())},
E:function(a){var t,s,r,q,p
t=new P.ik()
s=this.a
if(s<0)return"-"+new P.cq(0-s).E(0)
r=t.$1(C.b.a8(s,6e7)%60)
q=t.$1(C.b.a8(s,1e6)%60)
p=new P.ij().$1(s%1e6)
return""+C.b.a8(s,36e8)+":"+H.t(r)+":"+H.t(q)+"."+H.t(p)},
$isaI:1,
$asaI:function(){return[P.cq]},
gbp:function(){return this.a}}
P.ij.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.C,args:[P.Q]}}}
P.ik.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.C,args:[P.Q]}}}
P.cR.prototype={
gay:function(){return H.bn(this.$thrownJsError)}}
P.em.prototype={
E:function(a){return"Throw of null."}}
P.cn.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
E:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.t(t)
q=this.gbQ()+s+r
if(!this.a)return q
p=this.gbP()
o=P.oU(this.b)
return q+p+": "+H.t(o)},
gJ:function(a){return this.c}}
P.fF.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.t(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.t(t)
else if(r>t)s=": Not in range "+H.t(t)+".."+H.t(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.t(t)}return s}}
P.ja.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){if(J.h1(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.t(t)},
gK:function(a){return this.f}}
P.b6.prototype={
E:function(a){return"Unsupported operation: "+this.a}}
P.dG.prototype={
E:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.t(t):"UnimplementedError"}}
P.bX.prototype={
E:function(a){return"Bad state: "+this.a}}
P.bR.prototype={
E:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.t(P.oU(t))+"."}}
P.kc.prototype={
E:function(a){return"Out of Memory"},
gay:function(){return},
$iscR:1}
P.fI.prototype={
E:function(a){return"Stack Overflow"},
gay:function(){return},
$iscR:1}
P.id.prototype={
E:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.t(t)+"' during its initialization"}}
P.m5.prototype={
E:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.t(t)}}
P.iX.prototype={
E:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.t(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.f.bJ(r,0,75)+"..."
return s+"\n"+r}}
P.ip.prototype={
E:function(a){return"Expando:"+H.t(this.a)},
w:function(a,b){var t,s
t=this.br
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aB(P.dS(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.o6(b,"expando$values")
return s==null?null:H.o6(s,t)},
h:function(a,b,c){var t,s
t=this.br
if(typeof t!=="string")t.set(b,c)
else{s=H.o6(b,"expando$values")
if(s==null){s=new P.av()
H.pt(b,"expando$values",s)}H.pt(s,t,c)}},
gJ:function(a){return this.a}}
P.Q.prototype={$isaI:1,
$asaI:function(){return[P.bQ]}}
P.G.prototype={
aj:function(a,b){return H.ef(this,b,H.am(this,"G",0),null)},
cw:function(a,b){return new H.bD(this,b,[H.am(this,"G",0)])},
h8:function(a,b){var t,s
t=this.gO(this)
if(!t.I())throw H.A(H.fo())
s=t.gL()
for(;t.I();)s=b.$2(s,t.gL())
return s},
fS:function(a,b){var t,s
t=this.gO(this)
if(!t.I())return""
if(b===""){s=""
do s+=H.t(t.gL())
while(t.I())}else{s=H.t(t.gL())
for(;t.I();)s=s+b+H.t(t.gL())}return s.charCodeAt(0)==0?s:s},
a6:function(a,b){return P.cB(this,!0,H.am(this,"G",0))},
ak:function(a){return this.a6(a,!0)},
gK:function(a){var t,s
t=this.gO(this)
for(s=0;t.I();)++s
return s},
ga1:function(a){return!this.gO(this).I()},
aE:function(a,b){var t,s,r
if(b<0)H.aB(P.bs(b,0,null,"index",null))
for(t=this.gO(this),s=0;t.I();){r=t.gL()
if(b===s)return r;++s}throw H.A(P.jb(b,this,"index",null,s))},
E:function(a){return P.nY(this,"(",")")},
$asG:null}
P.fp.prototype={}
P.a8.prototype={$asa8:null,$isG:1,$isa6:1,$asa6:null}
P.bW.prototype={
ga0:function(a){return P.av.prototype.ga0.call(this,this)},
E:function(a){return"null"}}
P.bQ.prototype={$isaI:1,
$asaI:function(){return[P.bQ]}}
P.av.prototype={constructor:P.av,$isav:1,
R:function(a,b){return this===b},
ga0:function(a){return H.cD(this)},
E:function(a){return H.kl(this)},
ga2:function(a){return new H.cL(H.n7(this),null)},
toString:function(){return this.E(this)}}
P.d3.prototype={}
P.cH.prototype={}
P.C.prototype={$isaI:1,
$asaI:function(){return[P.C]}}
P.er.prototype={
gK:function(a){return this.a_.length},
E:function(a){var t=this.a_
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a_}}
W.ac.prototype={}
W.h7.prototype={
E:function(a){return String(a)},
$isM:1,
sae:function(a,b){return a.type=b}}
W.h8.prototype={
E:function(a){return String(a)},
$isM:1}
W.de.prototype={
aB:function(a){return a.close()},
$isde:1}
W.hf.prototype={$isM:1}
W.hi.prototype={
gJ:function(a){return a.name},
gZ:function(a){return a.value},
sJ:function(a,b){return a.name=b},
sae:function(a,b){return a.type=b},
sZ:function(a,b){return a.value=b}}
W.hk.prototype={
gfm:function(a){return a.getContext("2d")}}
W.eO.prototype={
h5:function(a,b,c,d,e,f,g,h){a.putImageData(P.uU(b),c,d)
return},
dz:function(a,b,c,d){return this.h5(a,b,c,d,null,null,null,null)}}
W.cQ.prototype={$isM:1,
gK:function(a){return a.length}}
W.eS.prototype={
ca:function(a,b){return typeof console!="undefined"?console.error(b):null},
dt:function(a){return typeof console!="undefined"?console.info(a):null},
hh:function(a){return typeof console!="undefined"?console.time(a):null},
hr:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.dh.prototype={
aM:function(a,b){return a.item(b)},
gK:function(a){return a.length}}
W.fd.prototype={}
W.ia.prototype={}
W.ic.prototype={
eM:function(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
seC:function(a,b){return a._dartDetail=b}}
W.eU.prototype={$isM:1}
W.eV.prototype={
gJ:function(a){return a.name}}
W.ie.prototype={
gJ:function(a){var t=a.name
if(P.oT()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.oT()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
E:function(a){return String(a)}}
W.cr.prototype={
gb5:function(a){return P.tN(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,null)},
E:function(a){return a.localName},
dh:function(a){return a.click()},
ga4:function(a){return new W.ew(a,"change",!1,[W.B])},
gcf:function(a){return new W.ew(a,"click",!1,[W.aE])},
$iscr:1,
$isav:1,
$isM:1}
W.il.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b},
sae:function(a,b){return a.type=b}}
W.im.prototype={
gai:function(a){return a.error}}
W.B.prototype={
h3:function(a){return a.preventDefault()},
e3:function(a){return a.stopPropagation()},
$isB:1,
$isav:1}
W.dY.prototype={
em:function(a,b,c,d){return a.addEventListener(b,H.eH(c,1),!1)},
eY:function(a,b,c,d){return a.removeEventListener(b,H.eH(c,1),!1)}}
W.iQ.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.aT.prototype={$isaT:1,$isav:1,
gJ:function(a){return a.name}}
W.dq.prototype={
gK:function(a){return a.length},
w:function(a,b){if(b>>>0!==b||b>=a.length)throw H.A(P.jb(b,a,null,null,null))
return a[b]},
h:function(a,b,c){throw H.A(new P.b6("Cannot assign element of immutable List."))},
aE:function(a,b){if(b<0||b>=a.length)return H.L(a,b)
return a[b]},
aM:function(a,b){return a.item(b)},
$isdq:1,
$iscc:1,
$ascc:function(){return[W.aT]},
$isbN:1,
$asbN:function(){return[W.aT]},
$isa8:1,
$asa8:function(){return[W.aT]},
$isa6:1,
$asa6:function(){return[W.aT]},
$isG:1,
$asG:function(){return[W.aT]}}
W.fe.prototype={
$asa8:function(){return[W.aT]},
$asa6:function(){return[W.aT]},
$asG:function(){return[W.aT]},
$isa8:1,
$isa6:1,
$isG:1}
W.ff.prototype={
$asa8:function(){return[W.aT]},
$asa6:function(){return[W.aT]},
$asG:function(){return[W.aT]},
$isa8:1,
$isa6:1,
$isG:1}
W.f6.prototype={
gdD:function(a){var t=a.result
if(!!J.af(t).$iscP)return H.tv(t,0,null)
return t},
gai:function(a){return a.error}}
W.f9.prototype={
aM:function(a,b){return a.item(b)},
gK:function(a){return a.length},
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.j7.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.cU.prototype={$iscU:1,
gal:function(a){return a.data}}
W.j8.prototype={
di:function(a,b){return a.complete.$1(b)}}
W.fc.prototype={$isM:1,$iseo:1,
gaV:function(a){return a.checked},
gfC:function(a){return a.files},
gJ:function(a){return a.name},
gZ:function(a){return a.value},
gcu:function(a){return a.valueAsNumber},
sf9:function(a,b){return a.accept=b},
saV:function(a,b){return a.checked=b},
sao:function(a,b){return a.max=b},
sdv:function(a,b){return a.maxLength=b},
sap:function(a,b){return a.min=b},
sdw:function(a,b){return a.multiple=b},
sJ:function(a,b){return a.name=b},
sfZ:function(a,b){return a.pattern=b},
sar:function(a,b){return a.step=b},
sae:function(a,b){return a.type=b},
sZ:function(a,b){return a.value=b},
scu:function(a,b){return a.valueAsNumber=b}}
W.eo.prototype={$iscr:1,$isM:1}
W.jv.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.jx.prototype={
gZ:function(a){return a.value},
sZ:function(a,b){return a.value=b}}
W.jB.prototype={
sae:function(a,b){return a.type=b}}
W.jJ.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.eh.prototype={
gai:function(a){return a.error}}
W.jO.prototype={
sae:function(a,b){return a.type=b}}
W.jP.prototype={
gaV:function(a){return a.checked},
saV:function(a,b){return a.checked=b},
sae:function(a,b){return a.type=b}}
W.jQ.prototype={
aB:function(a){return a.close()}}
W.jR.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.jS.prototype={
gZ:function(a){return a.value},
sao:function(a,b){return a.max=b},
sap:function(a,b){return a.min=b},
sZ:function(a,b){return a.value=b}}
W.aE.prototype={
gb5:function(a){return new P.cC(a.clientX,a.clientY,[null])},
$isaE:1,
$isB:1,
$isav:1}
W.k5.prototype={$isM:1}
W.k6.prototype={
gJ:function(a){return a.name}}
W.d5.prototype={
hb:function(a,b){var t,s
try{t=a.parentNode
J.qc(t,b,a)}catch(s){H.b8(s)}return a},
E:function(a){var t=a.nodeValue
return t==null?this.e5(a):t},
eZ:function(a,b,c){return a.replaceChild(b,c)}}
W.k7.prototype={
sae:function(a,b){return a.type=b}}
W.k8.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b},
sae:function(a,b){return a.type=b}}
W.ka.prototype={
gZ:function(a){return a.value},
sZ:function(a,b){return a.value=b}}
W.kd.prototype={
gJ:function(a){return a.name},
gZ:function(a){return a.value},
sJ:function(a,b){return a.name=b},
sZ:function(a,b){return a.value=b}}
W.kg.prototype={
gJ:function(a){return a.name},
gZ:function(a){return a.value},
sJ:function(a,b){return a.name=b},
sZ:function(a,b){return a.value=b}}
W.kn.prototype={
gZ:function(a){return a.value},
sZ:function(a,b){return a.value=b}}
W.kD.prototype={
sae:function(a,b){return a.type=b}}
W.ch.prototype={
aM:function(a,b){return a.item(b)},
$isch:1,
gK:function(a){return a.length},
gJ:function(a){return a.name},
gZ:function(a){return a.value},
sdw:function(a,b){return a.multiple=b},
sJ:function(a,b){return a.name=b},
sZ:function(a,b){return a.value=b}}
W.kI.prototype={
gJ:function(a){return a.name},
sJ:function(a,b){return a.name=b}}
W.kM.prototype={
sae:function(a,b){return a.type=b}}
W.kP.prototype={
gai:function(a){return a.error}}
W.kQ.prototype={
gJ:function(a){return a.name}}
W.lj.prototype={
sae:function(a,b){return a.type=b}}
W.ls.prototype={
gJ:function(a){return a.name},
gZ:function(a){return a.value},
sdv:function(a,b){return a.maxLength=b},
sJ:function(a,b){return a.name=b},
sZ:function(a,b){return a.value=b}}
W.bY.prototype={}
W.fO.prototype={
aB:function(a){return a.close()},
$isM:1,
gJ:function(a){return a.name}}
W.lT.prototype={
gJ:function(a){return a.name}}
W.lX.prototype={
E:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(a.width)+" x "+H.t(a.height)},
R:function(a,b){var t,s,r
if(b==null)return!1
t=J.af(b)
if(!t.$iscF)return!1
s=a.left
r=t.gcd(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcs(b)
if(s==null?r==null:s===r){s=a.width
r=t.gdM(b)
if(s==null?r==null:s===r){s=a.height
t=t.gds(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga0:function(a){var t,s,r,q,p
t=J.bo(a.left)
s=J.bo(a.top)
r=J.bo(a.width)
q=J.bo(a.height)
q=W.mr(W.mr(W.mr(W.mr(0,t),s),r),q)
p=536870911&q+((67108863&q)<<3)
p^=p>>>11
return 536870911&p+((16383&p)<<15)},
$iscF:1,
$ascF:function(){},
gdf:function(a){return a.bottom},
gds:function(a){return a.height},
gcd:function(a){return a.left},
gdE:function(a){return a.right},
gcs:function(a){return a.top},
gdM:function(a){return a.width}}
W.m0.prototype={$isM:1}
W.mj.prototype={$isM:1}
W.mL.prototype={$isM:1}
W.fU.prototype={
aw:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.w(this,0))},
ce:function(a,b,c){return this.aw(a,null,b,c)}}
W.ew.prototype={}
W.m3.prototype={
bz:function(){if(this.b==null)return
this.d9()
this.b=null
this.d=null
return},
ci:function(a,b){if(this.b==null)return;++this.a
this.d9()},
cg:function(a){return this.ci(a,null)},
bE:function(){if(this.b==null||this.a<=0)return;--this.a
this.d7()},
d7:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.qa(r,this.c,t,!1)}},
d9:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.qb(r,this.c,t,!1)}},
eh:function(a,b,c,d,e){this.d7()}}
W.m4.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.fb.prototype={
gO:function(a){return new W.iV(a,a.length,-1,null,[H.am(a,"fb",0)])},
$isa8:1,
$asa8:null,
$isa6:1,
$asa6:null,
$isG:1,
$asG:null}
W.iV.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){s=this.a
if(t<0||t>=s.length)return H.L(s,t)
this.d=s[t]
this.c=t
return!0}this.d=null
this.c=s
return!1},
gL:function(){return this.d}}
P.mT.prototype={
dm:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
cv:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.af(a)
if(!!s.$isve)return new Date(a.a)
if(!!s.$istP)throw H.A(new P.dG("structured clone of RegExp"))
if(!!s.$isaT)return a
if(!!s.$isde)return a
if(!!s.$isdq)return a
if(!!s.$iscU)return a
if(!!s.$isdB||!!s.$isd4)return a
if(!!s.$iso4){r=this.dm(a)
q=this.b
p=q.length
if(r>=p)return H.L(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.L(q,r)
q[r]=o
s.cc(a,new P.mV(t,this))
return t.a}if(!!s.$isa8){r=this.dm(a)
t=this.b
if(r>=t.length)return H.L(t,r)
o=t[r]
if(o!=null)return o
return this.fo(a,r)}throw H.A(new P.dG("structured clone of other type"))},
fo:function(a,b){var t,s,r,q,p
t=J.b7(a)
s=t.gK(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.L(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.cv(t.w(a,p))
if(p>=r.length)return H.L(r,p)
r[p]=q}return r}}
P.mV.prototype={
$2:function(a,b){this.a.a[a]=this.b.cv(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fZ.prototype={$iscU:1,$isM:1,
gal:function(a){return this.a}}
P.mU.prototype={}
P.mq.prototype={
bh:function(){return Math.random()}}
P.mC.prototype={
aS:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.a8(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bh:function(){this.aS()
var t=this.a
this.aS()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
ek:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.a8(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.a8(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.a8(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.a8(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.a8(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.a8(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.a8(q-n,4294967296)&4294967295)>>>0
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
P.cC.prototype={
E:function(a){return"Point("+H.t(this.a)+", "+H.t(this.b)+")"},
R:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.cC))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
ga0:function(a){var t,s
t=J.bo(this.a)
s=J.bo(this.b)
return P.pM(P.eA(P.eA(0,t),s))},
Y:function(a,b){var t,s,r,q
t=this.a
s=J.aa(b)
r=s.gV(b)
if(typeof t!=="number")return t.Y()
if(typeof r!=="number")return H.az(r)
q=this.b
s=s.gW(b)
if(typeof q!=="number")return q.Y()
if(typeof s!=="number")return H.az(s)
return new P.cC(t+r,q+s,this.$ti)},
a3:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.a3()
s=this.b
if(typeof s!=="number")return s.a3()
return new P.cC(t*b,s*b,this.$ti)},
gV:function(a){return this.a},
gW:function(a){return this.b}}
P.mD.prototype={
gdE:function(a){var t=this.a
if(typeof t!=="number")return t.Y()
return t+this.c},
gdf:function(a){var t=this.b
if(typeof t!=="number")return t.Y()
return t+this.d},
E:function(a){return"Rectangle ("+H.t(this.a)+", "+H.t(this.b)+") "+this.c+" x "+this.d},
R:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.af(b)
if(!t.$iscF)return!1
s=this.a
r=t.gcd(b)
if(s==null?r==null:s===r){r=this.b
q=t.gcs(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.Y()
if(s+this.c===t.gdE(b)){if(typeof r!=="number")return r.Y()
t=r+this.d===t.gdf(b)}else t=!1}else t=!1}else t=!1
return t},
ga0:function(a){var t,s,r,q
t=this.a
s=J.bo(t)
r=this.b
q=J.bo(r)
if(typeof t!=="number")return t.Y()
if(typeof r!=="number")return r.Y()
return P.pM(P.eA(P.eA(P.eA(P.eA(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))}}
P.cF.prototype={$ascF:null,
gcd:function(a){return this.a},
gcs:function(a){return this.b},
gdM:function(a){return this.c},
gds:function(a){return this.d}}
P.h5.prototype={$isM:1}
P.cO.prototype={$isM:1}
P.ir.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.is.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.it.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iu.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iv.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iw.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.ix.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iy.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iz.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iA.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iB.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iC.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iD.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iE.prototype={
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iF.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iG.prototype={
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iH.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iI.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iU.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.iW.prototype={
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.bT.prototype={}
P.cw.prototype={$isM:1}
P.j9.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.jL.prototype={$isM:1}
P.jM.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.kh.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.kr.prototype={
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.kE.prototype={$isM:1,
sae:function(a,b){return a.type=b}}
P.lk.prototype={
sae:function(a,b){return a.type=b}}
P.b5.prototype={
dh:function(a){throw H.A(new P.b6("Cannot invoke click SVG."))},
gcf:function(a){return new W.ew(a,"click",!1,[W.aE])},
$isM:1}
P.ll.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.ln.prototype={$isM:1}
P.fL.prototype={}
P.lt.prototype={$isM:1}
P.es.prototype={
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.lD.prototype={$isM:1,
gV:function(a){return a.x},
gW:function(a){return a.y}}
P.lE.prototype={$isM:1}
P.ez.prototype={$isM:1}
P.mI.prototype={$isM:1}
P.mJ.prototype={$isM:1}
P.mK.prototype={$isM:1}
P.cP.prototype={}
S.h6.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Math Book",H.a([$.O,$.aq,$.ak],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Giant Map",H.a([$.O,$.aq],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microscope",H.a([$.N,$.aq,$.b3],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Star Chart",H.a([$.O,$.aq],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("History Book",H.a([$.O,$.aq],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Radioactive Rock",H.a([$.fh,$.cZ],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.N,$.aq],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.f1,$.i)
q.h(0,$.ao,$.i)
q.h(0,$.f5,$.h)
q.h(0,$.ah,$.y)
q.h(0,$.bi,$.h)
p=$.j
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.m
o=o+n+" to stop "
m=$.z
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.to
n=[U.b]
q.h(0,new R.K("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
q.h(0,new R.K("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.m+" to stop "+$.z+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.pw(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
p="The "+m+" finds a massive library, filled with books. The "
l=$.m
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.o
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.h(0,new R.K("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.dC(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.e1,$.y)
s.h(0,$.bi,$.i)
p=$.j
o="The "+p+"  is approached by a "
l=$.m
s.h(0,new R.K("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.z+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.m
s.h(0,new R.K("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.z+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.d6(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
s.h(0,new R.K("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.m+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dC(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
m.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.e1,$.y)
t.h(0,$.bi,$.i)
t.h(0,$.aN,$.y)
t.h(0,$.oX,$.y)
r=$.j
q="The "+r+"  is approached by a "
p=$.m
q=q+p+" who offers them a grant to study "
o=$.a4
t.h(0,new R.K("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.z+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dC(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
o=$.m
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.z
r=r+p+".  It is up to the "
q=$.j
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.a4
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.tu
t.h(0,new R.K("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.cE(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
t.h(0,new R.K("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.z+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.m+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
L.ha.prototype={
$1:function(a){return!a.gbc()},
$S:function(){return{func:1,args:[L.co]}}}
L.co.prototype={
F:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Perfectly Generic Object",H.a([],[G.H]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.w(t,0)]))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bH,$.h)
q.h(0,$.ao,$.y)
q.h(0,$.cv,$.h)
q.h(0,$.aN,$.i)
q.h(0,$.dk,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.z+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.o
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aX+". The "+p+" has won! "
i=[U.b]
q.h(0,new R.D("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.I(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=this.f
j.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.e3,$.h)
s.h(0,$.e2,$.y)
s.h(0,$.dn,$.i)
s.h(0,$.bz,$.h)
s.h(0,$.aZ,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.z+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.o
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aX+". The "+p+" has won! "
s.h(0,new R.D("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.I(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ah,$.h)
t.h(0,$.ao,$.y)
t.h(0,$.aS,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.z
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.o
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aX+". The "+r+" has won! "
t.h(0,new R.K("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.I(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.o8(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
l=$.j
r="The "+l+" learns that all of the local "
m=$.m
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.o
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aX+". The "+l+" has won! "
t.h(0,new R.D("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.I(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.a7)},
E:function(a){return this.Q},
S:function(a,b,c,d,e){var t
this.r=new X.eX("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+this.Q+".xml",!1,H.a([],[X.eN]),H.a([],[M.e_]))
t=this.Q
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.F()
this.G()
t=this.e
if($.$get$c3().aa(t))H.aB("Duplicate aspect id for "+this.E(0)+": "+t+" is already registered for "+J.bq($.$get$c3().w(0,t))+".")
$.$get$c3().h(0,t,this)},
gJ:function(a){return this.Q},
gbc:function(){return this.cy},
gU:function(){return this.fy},
gH:function(){return this.ry}}
L.S.prototype={}
M.hb.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Barbells",H.a([$.aU,$.jh,$.N],s),null,!1,"Strength Building Metal")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Basketball",H.a([$.jf,$.dv],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Baseball Bat",H.a([$.pb,$.ar],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rubber Ball",H.a([$.jf,$.dv],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.b4,$.as],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hockey Stick",H.a([$.pb,$.ar,$.cA],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Trophy",H.a([$.N,$.ec],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Boxing Glove",H.a([$.rT,$.dv],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Yoga Mat",H.a([$.dv,$.bd],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cT,$.y)
q.h(0,$.aG,$.i)
q.h(0,$.bz,$.y)
p=$.j
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.m
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.z+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.h(0,new R.K("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.m
q.h(0,new R.K("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.z+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.cE(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
n="The "+m+"  wanders into a bunch of "
p=$.m
q.h(0,new R.K("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.en(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.cT,$.i)
t.h(0,$.e5,$.i)
t.h(0,$.aG,$.i)
s=$.j
r="The "+s+" finds a team of underdog "
p=$.m
t.h(0,new R.K("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.pw(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
s="A group of "+p+"s approach the "
r=$.j
s=s+r+". Apparently their sports team lost their coach to the "+$.o+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.z
t.h(0,new R.K("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.cE(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
k=$.m
p="A group of "+k+"s approach the "
r=$.j
t.h(0,new R.K("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.o+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.a4+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,t,null),$.ab)},
gH:function(){return this.cx}}
O.hc.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cod Piece",H.a([$.ai,$.ad,$.ap,$.F,$.ar],s),"God damn it, MI. ",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poisoned Candy",H.a([$.p8,$.F,$.jj],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Lyre",H.a([$.b_,$.ar,$.bc,$.F,$.aW],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Snare Trap",H.a([$.ai,$.b_,$.F,$.fi],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bg,$.h)
t.h(0,$.f4,$.h)
t.h(0,$.bb,$.h)
t.h(0,$.c9,$.h)
t.h(0,$.bh,$.h)
t.h(0,$.e0,$.h)
r="After all the bullshit the "+$.o+" has put the native "
q=$.m
r=r+q+"s through, the "
p=$.j
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ae+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.z
m=[U.b]
t.h(0,new R.R("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.n(),!1,!1,new Y.cf("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.m
n="A group of jubilant "+p+"s are following the "
q=$.j
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.z
t.h(0,new R.R("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.o+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.R("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.o+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.n(),!1,!1,new Y.hn("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.j
q=q+r+" organizes a huge festival for all the "
p=$.m
t.h(0,new R.aw("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.aC)}}
L.hd.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Bear",H.a([$.b4,$.aA,$.v],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Thought",H.a([$.nM,$.t8,$.eb],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Doorway",H.a([$.eb,$.v],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aQ,$.h)
t.h(0,$.bI,$.i)
t.h(0,$.aG,$.i)
t.h(0,$.dn,$.p)
r=$.j
q="The "+r+" hears a "+$.m+" "+$.z+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.o
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.h(0,new R.D("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.I(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.B}}
T.he.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Mystical Vial of Blood",H.a([$.b3,$.bc,$.v,$.bM],s),null,!1,"Vial of Not-ABs Oil")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bananaphone",H.a([$.ca,$.bc,$.v,$.bV],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Friendship Bracelet",H.a([$.ai,$.bc,$.v,$.bM,$.nQ],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bonding Manacles",H.a([$.N,$.fi,$.v,$.bM,$.nQ,$.aP],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Friendship Stairs",H.a([$.ar,$.pf,$.bc,$.bM,$.v,$.ad],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.br,$.h)
q.h(0,$.p0,$.h)
q.h(0,$.aN,$.i)
p=$.j
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.m
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.a4+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.h(0,new R.K("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.cE(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=$.m
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.z+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.o
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.j
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aX+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.h(0,new R.D("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.I(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bz,$.h)
s.h(0,$.bh,$.y)
s.h(0,$.ah,$.y)
s.h(0,$.iP,$.h)
s.h(0,$.bb,$.y)
p=$.j
o="The "+p+"  and the "
m=$.d8
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.o
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.h(0,new R.D("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.I(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.d7(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
h=$.j
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.m
i=i+m+"s explains that before  "
p=$.o
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aX+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.tl
s.h(0,new R.D("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.I(l,h,o)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
o="The "+p+" learns of the "
h=$.ae
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.m
o=o+l+" explains that the "
j=$.o
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.aX+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.h(0,new R.D("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.I(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.m
h=h+i+" on "+$.ae+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.dr+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.h(0,new R.R("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.dC(),!1,!1,new Y.aJ("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.m+" on "
m=$.ae
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.dr+" is now more popular with your friends than you are."
s.h(0,new R.R("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.o9(),!1,!1,new Y.aJ("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
m="The "+p+"  and the "
h=$.d8
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.o
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.h(0,new R.D("Pale Shipping Dungeon",!1,[new U.b(m),new U.I(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.l)+".",o)],H.a([],k),R.d7(),!1,!1,new Y.fC(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ah,$.h)
t.h(0,$.ao,$.y)
t.h(0,$.aS,$.i)
r="In the wake of the defeat of the "+$.o+" it becomes really how isolated the individual "
q=$.m
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.j
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.dr+" to kick your ass, but luckily they have several."
t.h(0,new R.R("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.cE(),!1,!1,new Y.aJ("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
o=$.j
q="The "+o+" learns that two prominent "
p=$.m
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.o
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aX+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.z+"ing. "
t.h(0,new R.D("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.I(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.n},
gH:function(){return this.T}}
T.hh.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Pan's Pipe",H.a([$.aW,$.ar,$.bc,$.v],s),null,!1,"Smonkin Weeds Pipe")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skeleton Key",H.a([$.cV,$.v],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Inspector's Fan",H.a([$.as,$.N,$.bc,$.v],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Jet Pack",H.a([$.cb,$.N,$.b4,$.v,$.ad],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aS,$.i)
q.h(0,$.e5,$.h)
q.h(0,$.ah,$.i)
p=$.j
o="The "+p+" tries posting a letter through the "
n=$.a4
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.o
o=o+m+" has screwed with the mail system, crippling the "
l=$.m
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aX+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.tp
i=[U.b]
q.h(0,new R.D("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.I(j,p,l)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.f
m.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ao,$.h)
s.h(0,$.e5,$.i)
s.h(0,$.ah,$.i)
s.h(0,$.aG,$.i)
s.h(0,$.aS,$.i)
p=$.j
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.a4
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.m
k=l+k+" fields. The "+k+"s "+$.z+"ing is so joyful it's literally deafening. "
l=$.o
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.aX+". The "+p+" is finally free to continue improving the land with wind. "
s.h(0,new R.D("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.I(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aZ,$.h)
t.h(0,$.nG,$.h)
t.h(0,$.e5,$.y)
t.h(0,$.aS,$.y)
r=$.j
q="The "+r+" is chilling in a "+$.m+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.o
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.a4
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ae+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aX+". The "+r+" has become the storm master. It is them. "
t.h(0,new R.D("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.I(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.n},
gH:function(){return this.T}}
S.hm.prototype={
F:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("A Rock",H.a([$.aA,$.cZ,$.bU,$.v],[G.H]),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.w(t,0)]))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nC,$.i)
t.h(0,$.br,$.h)
r=$.j
q="The "+r+" decides enough is enough, and that they need to fight the "
p=$.o
q=q+p+". They decide to amass an army of consorts to fight it..."
o="The "+r+" figures out that the "
n=$.m
o=o+n+"s are very disinclined to fight, so the "+r+" has to use a bit more force..."
m="The "+r+" has created an army of fearful consorts, it may fall apart during the Denizen fight though..."
l="Now that the "+r+" has amassed an army of "+n+"s, they think it's time to fight the "+p+"..."
n="The "+p+" lies slain, but the "+n+"s still lie under the power of the "+r+"."
t.h(0,new R.D("Make An Army",!1,[new U.b(q),new U.b(o),new U.b(m),new U.I(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
A.i9.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Colonel Sassacre's Daunting Text ",H.a([$.O,$.aU,$.bV,$.jh],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wise Guy Book",H.a([$.O,$.bV],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Beagle Puss",H.a([$.b3,$.bV],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Novelty Microphone",H.a([$.b4,$.as,$.bV],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Banana",H.a([$.ca,$.bV],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fake Flower",H.a([$.ai,$.bV],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Trick Handcuffs",H.a([$.N,$.bV],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bb,$.i)
q.h(0,$.ba,$.h)
q.h(0,$.aG,$.i)
p=$.j
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.m
o=o+n+"s are too scared to even "+$.z+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.o+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.h(0,new R.K("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cT,$.y)
s.h(0,$.aG,$.h)
s.h(0,$.ba,$.h)
s.h(0,$.bg,$.h)
o=$.j
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ae
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.m
k=k+j+"s let out a braying "+$.z+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.ts
s.h(0,new R.K("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bj,$.y)
t.h(0,$.aR,$.i)
t.h(0,$.ba,$.h)
t.h(0,$.aG,$.i)
t.h(0,$.nB,$.i)
r=$.j
q="The "+r+"  is approached by a Crafty "
o=$.m
q=q+o+" who offers them a magical "
n=$.a4
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.z
t.h(0,new R.K("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
M.ib.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Can of Spray Paint",H.a([$.b0,$.N],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sensible Chuckles Magazine",H.a([$.O,$.au,$.bV,$.ak],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Gentleman's Razor",H.a([$.t5,$.N,$.cW],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("How To Draw Manga",H.a([$.O,$.au,$.ak],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Painting of a Horse Boxing a Football Player",H.a([$.b0,$.aV,$.O],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Collection of Classical Works",H.a([$.au,$.O],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Documentary on Horses",H.a([$.au,$.ay,$.aV],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Paint Set",H.a([$.b0,$.au],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shaving Cream",H.a([$.cb,$.au,$.N],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Classy Suit",H.a([$.ai,$.au],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("The Fatherly Gent's Shaving Almanac ",H.a([$.O,$.au,$.ak],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bI,$.i)
q.h(0,$.bi,$.h)
q.h(0,$.ah,$.i)
p=$.j
o="The "+p+" visits a beautiful "
n=$.a4
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.m
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.o+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.z+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.h(0,new R.K("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cT,$.y)
s.h(0,$.aG,$.i)
s.h(0,$.ba,$.y)
s.h(0,$.ao,$.i)
s.h(0,$.bg,$.h)
o=$.j
n="The "+o+" finds a troupe of dejected looking "
l=$.m
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ae
l=l+n+" "
k=$.a4
s.h(0,new R.K("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.z+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.f4,$.y)
t.h(0,$.bb,$.y)
t.h(0,$.e0,$.y)
t.h(0,$.aR,$.y)
t.h(0,$.ao,$.i)
t.h(0,$.ah,$.i)
r=$.j
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.z
q=q+o+"ingworth, "
n=$.m
q=q+n+" heiress to the "+$.a4+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.ti
t.h(0,new R.K("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
V.ig.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Trendy Fabric",H.a([$.b0,$.ai],s),null,!1,"Weird Tasting Candy Paper")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Necklace",H.a([$.b0,$.pc,$.nQ],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sewing Needle",H.a([$.N,$.t2,$.du],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.nN
r=A.f("Broom",H.a([r,$.ar,$.aU,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rolling Pin",H.a([$.ar,$.t7,$.aU],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Velvet Pillow",H.a([$.ai,$.bd,$.bc,$.b0,$.ds],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Yarn Ball",H.a([$.b0,$.ai],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Refrigerator",H.a([$.aP,$.jh,$.N,$.bU],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Photo Album",H.a([$.b0,$.O],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Cubes",H.a([$.bU],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cast Iron Skillet",H.a([$.N,$.cb,$.aU,$.jh,$.rU],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Failed Dish",H.a([$.jj],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dr Pepper BBQ Sauce",H.a([$.jj],s),"Gross.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Potted Plant",H.a([$.b0,$.nP,$.dt],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chicken Leg",H.a([$.ca,$.cX,$.cV],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juicy Steak",H.a([$.ca,$.cX],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Wedding Cake",H.a([$.b0,$.ca,$.bM],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bg,$.i)
q.h(0,$.bh,$.i)
q.h(0,$.bb,$.y)
p=$.j
o="The "+p+" is visited by a Beautiful "
n=$.m
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.a4
l=[U.b]
q.h(0,new R.K("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.z+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.n(),!1,!1,new Y.eT("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bb,$.h)
s.h(0,$.aG,$.i)
s.h(0,$.e0,$.h)
s.h(0,$.c9,$.i)
s.h(0,$.ao,$.h)
p=$.j
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.a4
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.m
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.z+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.tq
s.h(0,new R.K("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.dj,$.h)
t.h(0,$.ao,$.i)
t.h(0,$.c7,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.iP,$.h)
r=$.j
q="The "+r+" finds a loom, and a Wizened "
p=$.m
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.a4
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.z+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.h(0,new R.K("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
U.ih.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ak,$.as,$.O,$.b_,$.v,$.ad],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Egg Timer",H.a([$.ay,$.bc,$.v,$.b_],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skull Timer",H.a([$.cV,$.bc,$.v,$.b_],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Poison Flask",H.a([$.b3,$.v,$.jj],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice Gorgon Head",H.a([$.b3,$.v,$.bU,$.b_,$.fi,$.jm,$.be],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Obituary",H.a([$.aP,$.be,$.b_,$.O,$.v],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.cv,$.h)
q.h(0,$.bH,$.i)
q.h(0,$.e5,$.y)
q.h(0,$.ao,$.y)
q.h(0,$.aN,$.i)
p=$.j
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.m
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.a4
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.o
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aX+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.h(0,new R.D("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.I(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cv,$.h)
s.h(0,$.bH,$.i)
s.h(0,$.dp,$.a9)
s.h(0,$.dl,$.i)
s.h(0,$.oX,$.i)
s.h(0,$.br,$.i)
s.h(0,$.bH,$.i)
s.h(0,$.ao,$.y)
s.h(0,$.aN,$.i)
s.h(0,$.c8,$.i)
p=$.j
o="The "+p+" has found a group of Violent "
m=$.m
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ae
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.z+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.o
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aX+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.h(0,new R.D("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.I(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.d6(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.a4
p=p+l+"s alike. "
l=$.m+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.o
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aX+". The "+m+" is finally free to continue improving the land. "
s.h(0,new R.D("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.I(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ah,$.h)
t.h(0,$.aN,$.h)
t.h(0,$.rj,$.a9)
t.h(0,$.f1,$.y)
r=$.j
q="The "+r+" finds a small dungeon bearing the image of "
p=$.o
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.m+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.h(0,new R.D("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.I(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.d6(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
k=$.j
p="The "+k+" learns from one of their "
r=$.m
p=p+r+"s that there is an ancient prophecy of a "
l=$.ae
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.a4
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.o
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aX+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.th
t.h(0,new R.D("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.I(o,k,q)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.n},
gH:function(){return this.cb}}
Z.ii.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Dream Diary",H.a([$.O,$.ak,$.v],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Interlocking Brick",H.a([$.ay,$.bc,$.aU,$.v,$.ad],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Art Supplies",H.a([$.ay,$.bc,$.v],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dj,$.i)
q.h(0,$.c7,$.h)
q.h(0,$.ah,$.i)
q.h(0,$.iP,$.i)
p=$.m
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.a4
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.o
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.z+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.pp
k=[U.b]
q.h(0,new R.D("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.I(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.p)
l=this.f
l.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aZ,$.i)
s.h(0,$.c7,$.h)
s.h(0,$.bJ,$.i)
s.h(0,$.aQ,$.i)
s.h(0,$.cs,$.i)
s.h(0,$.ba,$.h)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.m
n=n+m+"s are even starting to snigger and "
j=$.z
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.o
s.h(0,new R.D("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.I("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bI,$.h)
t.h(0,$.f0,$.i)
t.h(0,$.ah,$.i)
t.h(0,$.aQ,$.h)
t.h(0,$.cs,$.h)
t.h(0,$.c7,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.o
t.h(0,new R.D("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ae+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.m+" is "+$.z+"ing in reverse. Another is in a "+$.a4+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.I("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.T}}
X.eX.prototype={}
X.eN.prototype={
$S:function(){return{func:1,v:true,args:[[P.a8,M.e_]]}}}
M.e_.prototype={}
U.iK.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Fluthulu Poster",H.a([$.ai,$.bd,$.be,$.e9],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Scalemate",H.a([$.ai,$.bd,$.be],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Bone Shield",H.a([$.aP,$.ay,$.cV,$.jl,$.ap],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Replica Ice Sword",H.a([$.ay,$.rX,$.fl,$.ap],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Zombie Mask",H.a([$.ay,$.jm,$.cX,$.be],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Vampire Romance Novel",H.a([$.ak,$.O,$.cz,$.be],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizardy Herbert",H.a([$.O,$.aD,$.aU],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Complacency of the Learned",H.a([$.O,$.aD,$.aU],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grimoire for Summoning the Zoologically Dubious ",H.a([$.O,$.aD,$.jm,$.be,$.e9],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wizard Statue",H.a([$.aP,$.cZ,$.aD,$.aU,$.ap],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Mermaid Fountain",H.a([$.aP,$.nR,$.aD,$.aU,$.ap],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eZ,$.a9)
q.h(0,$.bh,$.i)
q.h(0,$.aS,$.i)
q.h(0,$.bj,$.y)
p=$.j
o="The "+p+" learns of a Beautiful "
n=$.m
o=o+n+" who has been kidnapped by the vial "
m=$.o
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.a4
j=[U.b]
q.h(0,new R.K("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aR,$.h)
s.h(0,$.br,$.h)
s.h(0,$.iM,$.i)
s.h(0,$.aN,$.h)
s.h(0,$.dp,$.h)
s.h(0,$.f3,$.i)
o=$.j
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.m
s.h(0,new R.K("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aR,$.h)
t.h(0,$.iO,$.i)
t.h(0,$.aN,$.h)
t.h(0,$.ct,$.i)
t.h(0,$.e1,$.i)
t.h(0,$.p0,$.i)
r=$.j
q="The "+r+" finds a group of three "
o=$.m
q=q+o+"s "
n=$.z
t.h(0,new R.K("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
N.P.prototype={
E:function(a){return H.t(new H.cL(H.n7(this),null))+": "+H.t(this.b)}}
O.e6.prototype={}
O.iR.prototype={
$1:function(a){return"."+H.t(a)},
$S:function(){return{func:1,args:[P.C]}}}
O.iS.prototype={
$1:function(a){var t=0,s=P.ny(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.ou(function(b,c){if(b===1)return P.oo(c,s)
while(true)switch(t){case 0:p=q.c
if(J.qk(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.on(h.bD(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.on(h.cl(g),$async$$1)
case 12:f.$2(c,j.name)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.c1)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.op(r,s)}})
return P.oq($async$$1,s)},
$S:function(){return{func:1,ret:P.bk,args:[W.B]}}}
O.iT.prototype={
$1:function(a){return J.qe(this.a)},
$S:function(){return{func:1,args:[W.B]}}}
O.eM.prototype={
bD:function(a){var t=0,s=P.ny(),r,q,p
var $async$bD=P.ou(function(b,c){if(b===1)return P.oo(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsArrayBuffer(a)
p=new W.fU(q,"load",!1,[W.vm])
t=3
return P.on(p.gad(p),$async$bD)
case 3:if(!!J.af(C.p.gdD(q)).$isoh){r=H.eJ(C.p.gdD(q),"$isoh").buffer
t=1
break}t=1
break
case 1:return P.op(r,s)}})
return P.oq($async$bD,s)},
$ase6:function(a){return[a,P.cP]}}
Z.iY.prototype={
$1:function(a){$.$get$nJ().w(0,a).ghE()
return!1},
$S:function(){return{func:1,args:[P.C]}}}
Z.iq.prototype={}
E.fa.prototype={}
E.k9.prototype={}
E.u.prototype={
E:function(a){var t="["+H.t(this.a)+" x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.dT.prototype={
E:function(a){var t="[(Random from "+P.nY(this.d,"(",")")+") x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gH:function(){return this.d}}
E.eL.prototype={
E:function(a){return"[Stats assigned from player Interests x"+H.t(this.b)+"]"}}
Y.j_.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("How to Teach Your Friends to Hack SBURB",H.a([$.ak,$.F,$.O,$.ad,$.fk],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Unstable Domino",H.a([$.ay,$.F,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Exposed Thread",H.a([$.ai,$.F,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Teetering Plate",H.a([$.jk,$.F,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nI,$.i)
t.h(0,$.aS,$.h)
t.h(0,$.c8,$.y)
t.h(0,$.bS,$.h)
r=$.m
q="An excited "+r+" runs up to the "
p=$.j
q=q+p+" and starts to "
o=$.z
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ae
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.a4
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.o
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.h(0,new R.D("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.I(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
t.h(0,new R.R("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.o+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.m+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.n(),!1,!1,new Y.cf("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.m
j="Now that the "+o+"s are free from the reign of "+$.o+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.j
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.z
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ae+" Quest Online: The "+$.a4+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.h(0,new R.R("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.j
p=p+o+" shows the "
r=$.m
t.h(0,new R.aw("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.z+"s in time to stop them.    ")],H.a([],i),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.t}}
Y.j0.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Sherpa Parka",H.a([$.bU,$.F,$.fg],s),"Clearly the best class uses this.",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Guide Book",H.a([$.ad,$.bU,$.ak,$.O,$.F,$.aq],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Whistle",H.a([$.N,$.F,$.b4],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Announcement System",H.a([$.N,$.F,$.as,$.aq],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nI,$.h)
t.h(0,$.aS,$.h)
t.h(0,$.c8,$.i)
t.h(0,$.bS,$.h)
r="Now that the "+$.o+" is out of the way, a group of "
q=$.m
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.j
o=[U.b]
t.h(0,new R.R("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.z+", but they are happy.")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.j
t.h(0,new R.aw("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.m+" "+$.z+"s in time to stop them.    ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.aC)}}
T.j1.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Doll",H.a([$.jk,$.b0,$.bm,$.v],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Puppet",H.a([$.ar,$.bm,$.v,$.ad,$.be],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mirror",H.a([$.nW,$.v],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.O,$.v,$.cz],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Shades",H.a([$.aV,$.b3,$.v],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dl,$.y)
q.h(0,$.dm,$.h)
q.h(0,$.aG,$.i)
p=$.j
o="The "+p+", guided by a "+$.m+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.o
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aX+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.h(0,new R.D("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.I(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=$.j
p="The "+j+" finds a Violent "
l=$.m
p=p+l+". A Magical Talking "
k=$.a4
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.o
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.h(0,new R.D("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.I(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.o9(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
h=this.f
h.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.ba,$.h)
s.h(0,$.iM,$.h)
s.h(0,$.e5,$.i)
s.h(0,$.aN,$.h)
s.h(0,$.bb,$.i)
s.h(0,$.c8,$.y)
p=$.j
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.a4
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.o
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aX+". The "+p+" is victorious. "
s.h(0,new R.D("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.I(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j="Now that the "+$.o+" has been defeated, a Copy "
p=$.j
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.m
j=j+k+"s "
l=$.z
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.dr+" knows who they are, and their confidence is turned into a pink lightning attack."
s.h(0,new R.R("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.cE(),!1,!1,new Y.aJ("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.j
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.o
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.h(0,new R.D("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.I(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.d6(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
h.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iL,$.h)
t.h(0,$.bb,$.h)
t.h(0,$.nH,$.h)
t.h(0,$.e0,$.i)
t.h(0,$.f3,$.h)
t.h(0,$.bh,$.i)
t.h(0,$.dm,$.y)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.m
t.h(0,new R.D("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.z+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ae+" laws put in place by "+$.o+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
p="The "+r+" finds a weeping Broken Hearted "
q=$.m
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ae
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.z
t.h(0,new R.R("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.en(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
q=$.j
m="The "+q+"  and the "
r=$.d8
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.o
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.h(0,new R.D("Flushed Shipping Dungeon",!1,[new U.b(m),new U.I(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.l)+".",n)],H.a([],i),R.d7(),!1,!1,new Y.f8(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n=$.j
r="The "+n+"  and the "
q=$.d8
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.o
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.h(0,new R.D("Pitched Shipping Dungeon",!1,[new U.b(r),new U.I(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.l)+".",m)],H.a([],i),R.d7(),!1,!1,new Y.fD(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
h.h(0,new X.r(s,t,null),$.ab)},
gU:function(){return this.l},
gH:function(){return this.T}}
B.j2.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Family Ashes",H.a([$.aP,$.cb,$.F,$.b_,$.nS],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Last Will and Testament",H.a([$.ad,$.O,$.F,$.b_,$.nV],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Grooming Guide",H.a([$.ak,$.F,$.au],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Powered Attorney",H.a([$.rM,$.F,$.nL,$.nV],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Executer's Ax",H.a([$.rJ,$.F,$.cW,$.nV],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aZ,$.i)
r=$.o
q="With the death of the "+r+", it now falls to the "
p=$.j
o=[U.b]
t.h(0,new R.R("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.m+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
r="The "+$.o+" has released the frogs into the "
p=$.j
t.h(0,new R.aw("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.z+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.aC)}}
V.j3.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Hippo",H.a([$.b4,$.aA,$.v],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ranting",H.a([$.nM,$.b4,$.eb],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Vent",H.a([$.N,$.pa],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.cs,$.y)
t.h(0,$.bI,$.i)
t.h(0,$.nC,$.i)
t.h(0,$.f0,$.i)
r=$.j
q="The "+r+" hears the screaming voice of the "
p=$.o
q=q+p+", and when they walk into a consort village, a "
o=$.m
q=q+o+" "
n=$.z
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.h(0,new R.D("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.I(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.B}}
X.j4.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Wand",H.a([$.ar,$.v,$.aD,$.aA],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Angel Feather",H.a([$.aA,$.jg,$.v,$.bL,$.aW,$.ad,$.aD],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Never Ending Story DVD",H.a([$.pk,$.pf,$.v,$.aD,$.bV,$.aA],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candle",H.a([$.aA,$.bL,$.v,$.cb],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Figurine",H.a([$.ay,$.bL,$.v,$.aA],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.oW,$.h)
q.h(0,$.bh,$.i)
q.h(0,$.ah,$.h)
q.h(0,$.aQ,$.h)
p=$.j
o="The "+p+" is just minding their own business when they see a wizened "
n=$.m
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.z+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.o
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.a4
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.tk
i=[U.b]
q.h(0,new R.D("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.I(k,p,j)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aR,$.h)
s.h(0,$.nB,$.i)
s.h(0,$.bJ,$.h)
p=$.j
o="The "+p+"  is approached by a Crafty "
m=$.m
o=o+m+" who offers them a magical "
l=$.a4
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.o
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.h(0,new R.D("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.I(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ah,$.h)
t.h(0,$.c9,$.y)
t.h(0,$.bi,$.h)
t.h(0,$.aQ,$.h)
r=$.j
q="The "+r+" finds a grey town of despondant "
p=$.m
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.o
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.a4
t.h(0,new R.D("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.I("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.j
o="The "+r+" discovers a group of "
p=$.m
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.o
t.h(0,new R.D("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.I("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.en(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
n.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
X.j5.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Footstick",H.a([$.cA,$.F,$.ji,$.ad],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURBSim Cheating Guide",H.a([$.ak,$.F,$.fk,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Body Pillow of Shogun",H.a([$.ai,$.F,$.ds,$.nU,$.bd],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Macrobots",H.a([$.pj,$.F,$.nL],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bj,$.h)
t.h(0,$.bJ,$.h)
t.h(0,$.c7,$.h)
t.h(0,$.bS,$.h)
t.h(0,$.dj,$.h)
t.h(0,$.cs,$.h)
t.h(0,$.f2,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.b]
t.h(0,new R.K("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.oa(),!1,!1,new Y.cf("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aX+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.z
t.h(0,new R.D("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.I(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.pu(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.K("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.n(),!1,!1,new Y.cf("Rewards/no_reward.png",null),1,null,null),$.p)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.o
t.h(0,new R.D("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
t.h(0,new R.D("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.o+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m="A wizened "+$.m+" tells the "
r=$.j
t.h(0,new R.R("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.R("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.pv(),!1,!1,new Y.aJ("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.h(0,new R.R("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.o
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.aw("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.a7)},
gH:function(){return this.A}}
Q.j6.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Yardstick",H.a([$.cA,$.F,$.ji,$.ad],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURB Hacking Guide",H.a([$.ak,$.F,$.fk,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Body Pillow of Hussie",H.a([$.ai,$.F,$.ds,$.nU,$.bd],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
gH:function(){return this.v}}
B.jc.prototype={
$1:function(a){return!a.gbc()},
$S:function(){return{func:1,args:[B.cx]}}}
B.cx.prototype={
F:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Perfectly Generic Object",H.a([],[G.H]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.w(t,0)]))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bH,$.h)
q.h(0,$.ao,$.y)
q.h(0,$.cv,$.h)
q.h(0,$.aN,$.i)
q.h(0,$.dk,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
m=[U.b]
q.h(0,new R.K("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.z+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.e3,$.h)
s.h(0,$.e2,$.y)
s.h(0,$.dn,$.i)
s.h(0,$.bz,$.h)
s.h(0,$.aZ,$.y)
p=$.j
o="The "+p+" learns that all of the local "
l=$.m
s.h(0,new R.K("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.z+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ah,$.h)
t.h(0,$.ao,$.y)
t.h(0,$.aS,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
t.h(0,new R.K("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
r="The "+p+" learns that all of the local "
q=$.m
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.z
t.h(0,new R.K("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.o8(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
n.h(0,new X.r(s,t,null),$.ab)},
E:function(a){return this.ch},
gbc:function(){return this.a},
gH:function(){return this.c},
gJ:function(a){return this.ch}}
A.J.prototype={
aC:function(a,b){var t=b.gck()-this.gck()
if(t>0)t=1
else if(t<0)t=-1
return C.b.a5(t)},
gft:function(){var t,s,r,q,p,o,n
t=H.a([],[P.C])
s=new A.fE(null,null)
s.cG(this.f.a)
if(this.r===0)return t
r=P.cB(G.r8(this.f),!0,G.H)
C.a.aZ(r,new A.jp())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c1)(r),++p){o=r[p]
n=o.gfs()
n=n.ga1(n)
if(!n)t.push(" "+Y.uR(s.h_(o.gfs())))}return t},
gck:function(){var t,s,r
for(t=this.f,s=new P.bE(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gck()
return r},
gfk:function(){var t=this.f
return new H.bD(t,new A.jo(),[H.w(t,0)])},
gfD:function(){var t,s,r,q,p
for(t=this.gft(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c1)(t),++q)r+=t[q]+" "
return r+this.d},
E:function(a){return this.gfD()},
eb:function(a,b,c,d,e){var t,s,r
t=P.o2(b,null)
this.f=t
if(t.a===0)t.j(0,$.eb)
s=P.o2(this.gfk(),null)
for(t=new P.bE(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.b3(0,r.ge4())
this.f.a7(0,r)}$.$get$pm().push(this)},
$isaI:1,
$asaI:function(){return[A.J]}}
A.jp.prototype={
$2:function(a,b){return a.gfX().az(0,b.gfX().a5(0))},
$S:function(){return{func:1,args:[G.H,G.H]}}}
A.jo.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.H]}}}
Z.jt.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Juice Box",H.a([$.O,$.v,$.aA,$.ap],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Shogun Body Pillow",H.a([$.ds,$.bd,$.v],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.cs,$.a9)
t.h(0,$.bh,$.i)
t.h(0,$.aG,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.aQ,$.h)
r=$.j
q="The "+r+" sees a floating sentient "
p=$.a4
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.m+" notices it, and starts "+$.z+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.o
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.h(0,new R.D("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.I(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
r="The "+p+" is greeted by a young adolescent "
m=$.m
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.o
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.z
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.h(0,new R.D("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.I(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=$.j
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.m
m=m+q+" informs them that "
p=$.o
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.h(0,new R.D("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.I(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.B}}
N.ju.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Gavel",H.a([$.ar,$.rW],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Caution Tape",H.a([$.ay,$.fi],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Deerstalker Hat",H.a([$.ai,$.b0],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mystery Novel",H.a([$.O,$.ak],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dish Served Cold",H.a([$.nP,$.ca,$.bU],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pony Pals: Detective Pony ",H.a([$.O,$.ak,$.aV],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Handcuffs",H.a([$.aP,$.N,$.fi],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eZ,$.y)
q.h(0,$.aR,$.i)
q.h(0,$.bi,$.y)
p=$.j
o="The "+p+" finds an elaborate courtroom full of "+$.z+"ing "
n=$.m
m=[U.b]
q.h(0,new R.K("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.a4+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
n=this.r
n.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aR,$.h)
s.h(0,$.c8,$.i)
s.h(0,$.bz,$.i)
p=$.j
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.m
l=o+l+" yells 'Stop that thief' in betwen "+$.z+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.a4+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.tg
s.h(0,new R.K("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aR,$.h)
t.h(0,$.aZ,$.i)
t.h(0,$.br,$.y)
t.h(0,$.dp,$.i)
t.h(0,$.dl,$.i)
t.h(0,$.e4,$.i)
t.h(0,$.iN,$.i)
r=$.j
q="The "+r+" finds a crowd of "
p=$.z
q=q+p+"ing "
o=$.m
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.tt
t.h(0,new R.K("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
S.jw.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Shining Armor",H.a([$.aP,$.nX,$.F,$.jl],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Excalibur",H.a([$.ad,$.nX,$.F,$.du,$.cW,$.fl],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Noble Steed",H.a([$.N,$.F,$.cX,$.bm],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Hero's Shield",H.a([$.aP,$.jl,$.F,$.nX],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nF,$.h)
t.h(0,$.cu,$.h)
t.h(0,$.cT,$.h)
t.h(0,$.e4,$.h)
t.h(0,$.eZ,$.i)
r="The "+$.o+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.j
p=[U.b]
t.h(0,new R.aw("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.z+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.o
r="Now that the "+q+" is defeated, the "
o=$.m
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.j
t.h(0,new R.R("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.ae
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.o
n=n+q+". A Learned "+$.m+" explains that it can only be defeated by the Legendary "
r=$.a4
n=n+r+" Blade. The "
m=$.j
t.h(0,new R.R("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
r="The volcanos of the land are weirdly active after the defeat of the "+$.o+". One begins to erupt near a "
m=$.m
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.z+"s, but not really doing anything to evacuate or save anyone. The "
o=$.j
t.h(0,new R.R("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)}}
Q.jy.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Dream Diary",H.a([$.O,$.ak,$.v],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Interlocking Brick",H.a([$.ay,$.bc,$.aU,$.v,$.ad],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Art Supplies",H.a([$.ay,$.bc,$.v],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.dj,$.i)
q.h(0,$.c7,$.h)
q.h(0,$.ah,$.i)
q.h(0,$.iP,$.i)
p=$.m
o="A "+p+" child tugs on the "
n=$.j
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.a4
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.o
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.z+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.pp
k=[U.b]
q.h(0,new R.D("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.I(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.p)
l=this.f
l.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aZ,$.i)
s.h(0,$.c7,$.h)
s.h(0,$.bJ,$.i)
s.h(0,$.aQ,$.i)
s.h(0,$.cs,$.i)
s.h(0,$.ba,$.h)
p=$.j
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.m
n=n+m+"s are even starting to snigger and "
j=$.z
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.o
s.h(0,new R.D("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.I("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bI,$.h)
t.h(0,$.f0,$.i)
t.h(0,$.ah,$.i)
t.h(0,$.aQ,$.h)
t.h(0,$.cs,$.h)
t.h(0,$.c7,$.i)
r=$.j
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.o
t.h(0,new R.D("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.ae+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.m+" is "+$.z+"ing in reverse. Another is in a "+$.a4+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.I("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
l.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.T}}
K.jz.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Creeping Vine",H.a([$.ar,$.v,$.dt,$.bm],s),null,!1,"Sentient Plant Tentacles")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lollipop",H.a([$.p8,$.v,$.bM],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Golem",H.a([$.aP,$.cZ,$.v,$.bm],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ectoplasm",H.a([$.nS,$.v,$.bM],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Aqua Vitae",H.a([$.b3,$.v,$.bM,$.ad,$.aD],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Homunculus",H.a([$.cX,$.v,$.bm],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aS,$.h)
q.h(0,$.ao,$.h)
q.h(0,$.f_,$.y)
q.h(0,$.ah,$.i)
q.h(0,$.nI,$.i)
q.h(0,$.bj,$.y)
p=$.j
o="The "+p+" finds a village of compliant "
n=$.m
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.z+"ing in panic. Don't upset "
m=$.o
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.h(0,new R.D("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.I(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aS,$.h)
s.h(0,$.bb,$.h)
s.h(0,$.bj,$.y)
s.h(0,$.ah,$.i)
o=$.j
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.m
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.o
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.h(0,new R.D("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.I(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bH,$.h)
t.h(0,$.ao,$.y)
t.h(0,$.cv,$.h)
t.h(0,$.aN,$.i)
t.h(0,$.dk,$.i)
t.h(0,$.nz,$.i)
r="Drawn by wailing and "+$.z+"ing, the "
q=$.j
r=r+q+" enters a rotting "
o=$.m
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.o
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.h(0,new R.D("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.I(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
G.jA.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("FAQ",H.a([$.as,$.v,$.aq,$.cY],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flashlight",H.a([$.ay,$.v,$.bL,$.as,$.cY],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Octet",H.a([$.v,$.bL,$.cY,$.ad,$.nR],s),null,!1,"D13")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Horseshoe",H.a([$.pe,$.v,$.aU],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rabbits Foot",H.a([$.pi,$.v],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("4 Leaf Clover",H.a([$.dt,$.v,$.bL,$.cY],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("8-Ball",H.a([$.b3,$.v,$.bm],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.C]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.nD,$.h)
q.h(0,$.dj,$.i)
q.h(0,$.ct,$.h)
q.h(0,$.dm,$.h)
p=$.j
o="The "+p+" is searching for the lair of "
n=$.o
o=o+n+" when some local "
m=$.m
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.h(0,new R.D("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.I(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.z+"ing "+$.m+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.o
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.h(0,new R.D("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.I(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.f
m.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.aS,$.i)
s.h(0,$.ah,$.i)
s.h(0,$.c9,$.h)
s.h(0,$.p_,$.h)
s.h(0,$.e2,$.h)
s.h(0,$.nB,$.h)
p=$.j
o="The "+p+" walks into a "
n=$.m
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.a4
o=o+l+", but "
k=$.o
o=o+k+" has hoarded all of the planets "
j=$.ae
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.z+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.h(0,new R.D("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.I(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.o9(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.m
j=j+k+" explains that the "
h=$.o
s.h(0,new R.D("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.z+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.I("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.f1,$.i)
q.h(0,$.ao,$.i)
q.h(0,$.f5,$.h)
q.h(0,$.ah,$.i)
q.h(0,$.bi,$.h)
p="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
p=p+o+" sets up a wiki and settles in to help the "
n=$.m
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.dr+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.h(0,new R.R("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.cE(),!1,!1,new Y.aJ("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
l="Now that the "+$.o+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.j
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.m
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.dr+" allows you to make you own assumptions about things, and be destroyed by them."
q.h(0,new R.R("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.d6(),!1,!1,new Y.aJ("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.j
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.o
q.h(0,new R.D("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.I(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ct,$.h)
t.h(0,$.nD,$.h)
t.h(0,$.dm,$.i)
t.h(0,$.bh,$.i)
t.h(0,$.oZ,$.i)
t.h(0,$.aN,$.y)
t.h(0,$.cT,$.y)
t.h(0,$.aG,$.i)
t.h(0,$.ba,$.y)
t.h(0,$.ao,$.i)
t.h(0,$.bg,$.h)
s=$.j
r="The "+s+" is approached by a Fast Talking "
p=$.m
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.a4
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.z+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.o
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.h(0,new R.D("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.I(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
o="After the "+$.o+", the "
s=$.j
o=o+s+" is disappointed to learn that barely any of the "
l=$.m
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.dr+" is famous, and everyone in this fight is lucky to have met them."
t.h(0,new R.R("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.cE(),!1,!1,new Y.aJ("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m.h(0,new X.r(q,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
Z.jG.prototype={
F:function(){var t,s,r,q
t=this.B
s=[G.H]
r=A.f("Dream Bubbles Book",H.a([$.O,$.au,$.ak,$.rR],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),[H.w(t,0)]))
t=Q.q(null,null,A.J)
r=A.f("Uno Reverse Card",H.a([$.p9,$.ji,$.au],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Lord's Cape",H.a([$.ai,$.F,$.au],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drawing Tablet",H.a([$.fk,$.F,$.au],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("How to Make Friends And Influence People",H.a([$.ad,$.O,$.F,$.cy,$.ak],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.br,$.y)
q.h(0,$.dp,$.y)
q.h(0,$.aN,$.y)
q.h(0,$.bz,$.i)
p="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.j
p=p+o+" comands that the "
n=$.m
m=[U.b]
q.h(0,new R.aw("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.z+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="As soon as the "+$.o+" is defeated, the "
n=$.m
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.j
q.h(0,new R.R("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p=this.x
p.h(0,new X.r(s,q,null),$.aC)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.re,$.h)
t.h(0,$.aQ,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.ah,$.i)
s="The "+$.o+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.j
s=s+r+" comands that the "
o=$.m
t.h(0,new R.aw("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.z+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="As soon as the "+$.o+" is defeated, the "
o=$.m
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.j
t.h(0,new R.R("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",this.B,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.aC)},
gH:function(){return this.D}}
S.jH.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Alternate Costume",H.a([$.ai,$.F,$.aD,$.ad,$.bA],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Cape",H.a([$.ai,$.F,$.aD],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mage's Staff",H.a([$.ar,$.F,$.aU,$.aD,$.cA],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Walking Broom",H.a([$.nN,$.ar,$.F,$.bm,$.aD,$.cA],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.e1,$.h)
t.h(0,$.e4,$.i)
t.h(0,$.aZ,$.h)
t.h(0,$.dn,$.i)
t.h(0,$.bH,$.y)
r="The "+$.o+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.j
p=[U.b]
t.h(0,new R.aw("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
t.h(0,new R.R("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
r="The "+q+" is feeling quite pleased with their victory over the "+$.o+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ae
t.h(0,new R.R("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.n(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="Now that the "+$.o+" has been defeated, the "
o=$.m
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.j
q=q+r+"'s help in planning the brand new city of "
n=$.ae
t.h(0,new R.R("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.z+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.n(),!1,!1,new Y.aJ(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.A}}
U.jI.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Maiden's Breath",H.a([$.dt,$.F,$.b0],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Feather Duster",H.a([$.ar,$.F,$.cA,$.jg],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Valkyrie Shield",H.a([$.b0,$.aP,$.N,$.F,$.ad,$.jl,$.rI],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Maiden's Songbook",H.a([$.O,$.F,$.aW,$.ak],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bS,$.h)
t.h(0,$.aS,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.c9,$.i)
t.h(0,$.ba,$.i)
r="The "+$.o+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.j
r=r+q+" asks local  "
p=$.m
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.z
n=[U.b]
t.h(0,new R.aw("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
o="The "+q+" has adopted a local "
p=$.m
t.h(0,new R.R("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.z+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.o+". ")],H.a([],n),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)}}
D.jN.prototype={
F:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("memes",H.a([$.aA,$.p7,$.rQ,$.pa],[G.H]),"No. Just no.",!1,";)")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.w(t,0)]))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nD,$.h)
r=$.j
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.m+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.o
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.h(0,new R.D("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.I(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.B}}
V.jT.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Puzzle Box",H.a([$.ar,$.v,$.aD],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tesla Coil",H.a([$.as,$.v,$.N],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Coin",H.a([$.N,$.v],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electronic Door",H.a([$.N,$.v,$.as,$.aq],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Janus Bust",H.a([$.aP,$.nO,$.cZ,$.au,$.v,$.ad,$.as],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.aQ,$.i)
q.h(0,$.dj,$.y)
q.h(0,$.bi,$.y)
p=$.j
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.m
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.o
k=[U.b]
q.h(0,new R.D("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.I(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dC(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.m+" explains that at the end of the Labrinth is the "
l=$.o
q.h(0,new R.D("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.I("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n=this.f
n.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.eZ,$.y)
s.h(0,$.aR,$.i)
s.h(0,$.bi,$.y)
s.h(0,$.aQ,$.y)
p=$.o
o="The "+p+" has commited a staggering amount of crimes against the local "+$.m+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.j
s.h(0,new R.D("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.I("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iO,$.h)
t.h(0,$.ao,$.i)
t.h(0,$.f5,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.bi,$.h)
r=$.j
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.o
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.a4+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.h(0,new R.D("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.I(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
E.jV.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Feather Pen",H.a([$.N,$.F,$.au,$.jg],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Half Finished Bust of Snoop Dog",H.a([$.t1,$.F,$.nO,$.aU,$.ad],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Book of Poetry",H.a([$.O,$.F,$.au,$.ak],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bS,$.h)
t.h(0,$.aS,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.c9,$.i)
t.h(0,$.ba,$.i)
r="The "+$.o+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.j
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.z
n=[U.b]
t.h(0,new R.aw("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
q="You'd think after the dramatic defeat of the "+$.o+" the "
o=$.m
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.j
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.a4
t.h(0,new R.R("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.A}}
F.jW.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Piano",H.a([$.aU,$.ar,$.aW,$.au],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flute",H.a([$.N,$.aW],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Microphone",H.a([$.b4,$.as],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Violin",H.a([$.ar,$.aW],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sheet Music",H.a([$.O,$.aW],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electric Guitar",H.a([$.ay,$.aW,$.as,$.b4,$.aV],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.ay,$.aW,$.as,$.aV],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guitar",H.a([$.ar,$.aW],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bh,$.a9)
q.h(0,$.oZ,$.h)
q.h(0,$.dm,$.h)
q.h(0,$.c9,$.i)
q.h(0,$.ah,$.i)
q.h(0,$.nA,$.i)
p=$.j
o="The "+p+" meets a wise old "+$.m+" who tells that the "+$.o+" can only be awoken by the Legendary Hero playing the "
n=$.ae
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.a4
k=[U.b]
q.h(0,new R.K("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
n="The "+p+" finds an empty, trashed "
l=$.ae
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.a4+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.z+"ing "+$.m+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.tm
q.h(0,new R.K("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.p1,$.a9)
s.h(0,$.c8,$.i)
s.h(0,$.bz,$.i)
s.h(0,$.c9,$.h)
s.h(0,$.nA,$.a9)
o=$.j
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ae
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.o
s.h(0,new R.K("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.a4+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.f_,$.a9)
t.h(0,$.aG,$.i)
t.h(0,$.cv,$.i)
r=$.j
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.m
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.z
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ae+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.h(0,new R.K("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
V.ke.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Shorts",H.a([$.ai,$.F,$.e8,$.ad],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sidekick Figurine",H.a([$.ay,$.F,$.aV],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Steroids",H.a([$.ca,$.F,$.aD],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.C]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nF,$.h)
t.h(0,$.bj,$.i)
t.h(0,$.f4,$.i)
t.h(0,$.nH,$.i)
t.h(0,$.bS,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.dk,$.i)
t.h(0,$.e2,$.i)
t.h(0,$.rh,$.i)
t.h(0,$.nz,$.i)
t.h(0,$.p_,$.i)
r="The "+$.o+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.j
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.z
n=[U.b]
t.h(0,new R.aw("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.j
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.m+" named Professor "
p=$.z
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.a4
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.o
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.h(0,new R.D("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.I(k,"The "+q+" whited out...",m)],H.a([],n),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
m="Now that the "+$.o+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.j
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.m
t.h(0,new R.R("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ae+" buffs. With a deafening "+$.z+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.n(),!1,!1,new Y.eT("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)}}
G.kj.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Superhero Action Figure",H.a([$.ay,$.aV,$.ap],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Action DVD",H.a([$.ay,$.aV],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ghost Busters DVD",H.a([$.ay,$.nS],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Snow Dogs DVD",H.a([$.ay,$.bV,$.bU,$.fg],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Skateboarding Video Game",H.a([$.ay,$.aV],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Movie Poster",H.a([$.O,$.aV],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Audrey II Plush",H.a([$.dt,$.aV,$.ai,$.bm],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peashooter Toy",H.a([$.dt,$.fj,$.aV,$.ai],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shitty Sword",H.a([$.ap,$.N,$.aV,$.fl,$.cW,$.pk],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("GameBro Magazine",H.a([$.O,$.aV],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("GameGrl Magazine",H.a([$.O,$.aV],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ba,$.i)
q.h(0,$.bg,$.i)
q.h(0,$.aG,$.h)
q.h(0,$.bj,$.a9)
q.h(0,$.bJ,$.a9)
p=$.j
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.m
o=o+n+" manages to catch a video of it, and it goes viral on "+$.ae+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.z+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.tn
l=[U.b]
q.h(0,new R.K("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.dl,$.i)
s.h(0,$.c8,$.i)
s.h(0,$.bg,$.i)
s.h(0,$.aG,$.i)
s.h(0,$.cu,$.h)
o=$.j
n="The "+o+" runs towards an explosion in a local "
m=$.m
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.ae
s.h(0,new R.K("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bg,$.i)
t.h(0,$.ct,$.h)
t.h(0,$.bb,$.h)
t.h(0,$.cu,$.i)
r=$.j
q="The "+r+" gets a job at the "+$.ae+" Cinema. A new movie, The Lonely "
o=$.a4
q=q+o+" is coming out soon, and "
n=$.m
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.z+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.h(0,new R.K("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
N.km.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Feather'd Cap",H.a([$.ai,$.F,$.e8],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crown",H.a([$.ad,$.pc,$.F,$.e8],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gunpowder",H.a([$.ea,$.F],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bg,$.i)
t.h(0,$.aQ,$.i)
t.h(0,$.cv,$.y)
r="With the closing of the curtain, the "+$.o+" has released the frogs, and yet they are nowhere to be found. The "
q=$.j
p=[U.b]
t.h(0,new R.aw("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.o
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.j
r=r+o+" to get it back to normal. They organize a team of "
n=$.m
t.h(0,new R.R("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.a4+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)}}
U.b.prototype={}
U.I.prototype={}
R.ko.prototype={
E:function(a){return H.t(new H.cL(H.n7(this),null))+": "+this.c},
gJ:function(a){return this.c}}
R.K.prototype={}
R.D.prototype={}
R.R.prototype={}
R.aw.prototype={}
E.kp.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Curtain",H.a([$.ai,$.v,$.ap],s),null,!1,"Show Ender")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Sword",H.a([$.N,$.fl,$.du,$.v,$.cW,$.be,$.ap,$.e9,$.b_],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.N,$.b4,$.as,$.v,$.ap],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.aP,$.N,$.b4,$.cy,$.dv,$.v,$.ap],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bacchus Wine",H.a([$.ca,$.cy,$.au,$.v,$.ad,$.ap],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nightmare Fuel",H.a([$.ar,$.v,$.be,$.cb,$.ea,$.ap],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eY,$.h)
q.h(0,$.br,$.h)
q.h(0,$.c8,$.h)
q.h(0,$.bH,$.i)
q.h(0,$.aN,$.i)
q.h(0,$.aZ,$.i)
q.h(0,$.aR,$.y)
q.h(0,$.bJ,$.i)
q.h(0,$.dl,$.h)
q.h(0,$.iN,$.h)
q.h(0,$.e4,$.h)
q.h(0,$.nG,$.h)
q.h(0,$.f_,$.i)
q.h(0,$.dp,$.h)
p=$.j
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.a4
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.o
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.D("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.I(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.en(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=$.m
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.o
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.D("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.I(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=this.f
h.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c9,$.h)
s.h(0,$.aN,$.i)
s.h(0,$.aR,$.h)
s.h(0,$.bh,$.h)
s.h(0,$.ba,$.h)
s.h(0,$.bg,$.i)
s.h(0,$.iM,$.y)
s.h(0,$.br,$.i)
s.h(0,$.bj,$.h)
s.h(0,$.aG,$.h)
s.h(0,$.bJ,$.y)
p=$.z
o="The "+p+"ing and capering "
n=$.m
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.ae
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.o
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.D("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.I(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eY,$.h)
t.h(0,$.bJ,$.h)
t.h(0,$.aR,$.h)
t.h(0,$.bj,$.i)
t.h(0,$.ba,$.h)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.o+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.D("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.I(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
Y.cf.prototype={}
Y.a5.prototype={}
Y.bx.prototype={}
Y.aJ.prototype={
gJ:function(a){return this.c}}
Y.E.prototype={}
Y.eT.prototype={}
Y.ax.prototype={}
Y.bt.prototype={}
Y.hn.prototype={}
Y.at.prototype={}
Y.fC.prototype={}
Y.f8.prototype={}
Y.fD.prototype={}
N.kt.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Domino Mask",H.a([$.ai,$.F,$.e8],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Archery Set",H.a([$.rL,$.F,$.e8,$.p6],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Gristtorrent Server",H.a([$.ad,$.ay,$.as,$.F,$.aq,$.bA],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n
t=[P.C]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aR,$.h)
t.h(0,$.aZ,$.i)
t.h(0,$.cu,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt Noble "
q=$.m
r=r+q+"s have hoarded them. The "
p=$.j
o=[U.b]
t.h(0,new R.aw("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" learns of the extreme injustices of the "
r=$.m
q=q+r+"s who rose to power during the tyranny of "
n=$.o
t.h(0,new R.R("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)}}
Q.ku.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Red Rose",H.a([$.cz,$.b0],s),null,!1,"Seductive Plant")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.cz,$.O],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Chocolate Bar",H.a([$.cz,$.ca],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Candelabra",H.a([$.cz,$.cb],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Head Cannon",H.a([$.cz,$.ea,$.N,$.fj],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Her Pitch Passions Novel",H.a([$.ak,$.O,$.cz],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bb,$.h)
q.h(0,$.f4,$.i)
q.h(0,$.e0,$.i)
q.h(0,$.f3,$.h)
q.h(0,$.bh,$.i)
q.h(0,$.iL,$.y)
p=$.j
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.m
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.a4+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.h(0,new R.K("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bh,$.i)
s.h(0,$.ct,$.h)
s.h(0,$.f3,$.h)
s.h(0,$.bb,$.i)
s.h(0,$.dm,$.y)
s.h(0,$.iL,$.y)
o=$.m
n="A Romantic "+o+" approaches the "
m=$.j
s.h(0,new R.K("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iL,$.h)
t.h(0,$.bb,$.h)
t.h(0,$.e0,$.i)
t.h(0,$.nH,$.h)
t.h(0,$.f3,$.h)
t.h(0,$.bh,$.i)
t.h(0,$.dm,$.y)
r=$.j
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.m
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.z+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.o+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.tj
t.h(0,new R.K("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.p)
n=$.j
r="The "+n+"  and the "
o=$.d8
t.h(0,new R.K("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.d7(),!1,!1,new Y.f8(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o=$.j
n="The "+o+"  and the "
r=$.d8
t.h(0,new R.K("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.d7(),!1,!1,new Y.fC(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r=$.j
o="The "+r+"  and the "
n=$.d8
t.h(0,new R.K("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.d7(),!1,!1,new Y.fD(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
V.kv.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Arrow",H.a([$.du,$.ar,$.p6],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bow",H.a([$.ar,$.aU,$.eb],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Yondu",H.a([$.ap,$.v],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Empathy",H.a([$.v,$.p7,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.ah,$.i)
t.h(0,$.bI,$.y)
t.h(0,$.aG,$.i)
t.h(0,$.aQ,$.y)
r=$.j
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.o
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.h(0,new R.D("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.I(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
T.kx.prototype={
$1:function(a){return!a.gbc()},
$S:function(){return{func:1,args:[T.cG]}}}
T.cG.prototype={
F:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Perfectly Generic Object",H.a([],[G.H]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.w(t,0)]))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bH,$.h)
q.h(0,$.ao,$.y)
q.h(0,$.cv,$.h)
q.h(0,$.aN,$.i)
q.h(0,$.dk,$.y)
p=$.j
o="The "+p+" learns that all of the local "
n=$.m
m=[U.b]
q.h(0,new R.R("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.z+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
n=this.x
n.h(0,new X.r(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.e3,$.h)
s.h(0,$.e2,$.y)
s.h(0,$.dn,$.i)
s.h(0,$.bz,$.h)
s.h(0,$.aZ,$.y)
p=$.j
o="The "+p+" learns that all of the local "
l=$.m
s.h(0,new R.R("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.z+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p=$.j
l="The "+p+" learns that all of the local "
o=$.m
s.h(0,new R.R("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.d8+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.z+"ing in amazement. The factory is saved! ")],H.a([],m),R.d7(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.a9)
n.h(0,new X.r(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.ah,$.h)
t.h(0,$.ao,$.y)
t.h(0,$.aS,$.i)
r=$.j
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.z
t.h(0,new R.K("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.o8(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.y)
l=$.j
p="The "+l+" learns that all of the local "
r=$.m
t.h(0,new R.R("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
n.h(0,new X.r(s,t,null),$.aC)},
E:function(a){return this.r},
X:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.eX("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.eN]),H.a([],[M.e_]))
this.F()
this.G()
if($.$get$cg().aa(this.Q))H.aB("Duplicate class id for "+this.E(0)+": "+this.Q+" is already registered for "+J.bq($.$get$cg().w(0,this.Q))+".")
$.$get$cg().h(0,this.Q,this)},
gJ:function(a){return this.r},
gbc:function(){return this.cx},
gH:function(){return this.k4}}
E.ky.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Sage's Robe",H.a([$.ai,$.F,$.bd,$.aq,$.aD,$.ad],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Peer Reviewed Journal",H.a([$.O,$.F,$.ak,$.aq],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Guru Pillow",H.a([$.ai,$.F,$.ds,$.aq],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.f1,$.i)
t.h(0,$.ao,$.i)
t.h(0,$.f5,$.h)
t.h(0,$.ah,$.y)
t.h(0,$.bi,$.h)
r="The "+$.o+" has blocked access to the books for the duration. The "
q=$.j
p=[U.b]
t.h(0,new R.aw("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" is defeated, it is time to begin recovery efforts. The "
r=$.m
q=q+r+"s ask the "
o=$.j
t.h(0,new R.R("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.z+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.v}}
Y.kz.prototype={}
K.kA.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Uno Reverse Card",H.a([$.p9,$.v,$.ap],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("JR Body Pillow",H.a([$.ds,$.bd,$.v],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.C]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.eY,$.h)
q.h(0,$.br,$.h)
q.h(0,$.c8,$.h)
q.h(0,$.bH,$.i)
q.h(0,$.aN,$.i)
q.h(0,$.aZ,$.i)
q.h(0,$.aR,$.y)
q.h(0,$.bJ,$.i)
q.h(0,$.dl,$.h)
q.h(0,$.iN,$.h)
q.h(0,$.e4,$.h)
q.h(0,$.nG,$.h)
q.h(0,$.f_,$.i)
q.h(0,$.dp,$.h)
p=$.j
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.a4
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.o
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.h(0,new R.D("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.I(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.en(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=$.m
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.j
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.o
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.h(0,new R.D("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.I(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h=this.f
h.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.c9,$.h)
s.h(0,$.aN,$.i)
s.h(0,$.aR,$.h)
s.h(0,$.bh,$.h)
s.h(0,$.ba,$.h)
s.h(0,$.bg,$.i)
s.h(0,$.iM,$.y)
s.h(0,$.br,$.i)
s.h(0,$.bj,$.h)
s.h(0,$.aG,$.h)
s.h(0,$.bJ,$.y)
p=$.z
o="The "+p+"ing and capering "
n=$.m
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.j
o=o+m+" to do a stupid "
l=$.ae
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.o
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.h(0,new R.D("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.I(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.eY,$.h)
t.h(0,$.bJ,$.h)
t.h(0,$.aR,$.h)
t.h(0,$.bj,$.i)
t.h(0,$.ba,$.h)
r=$.j
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.o+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.h(0,new R.D("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.I(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
h.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.B}}
Y.kB.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Walking Stick",H.a([$.ar,$.F,$.cA],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Adorable Girlscout Beret",H.a([$.ai,$.F,$.rS,$.aq,$.ad],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Map",H.a([$.O,$.F,$.aq],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Compass",H.a([$.N,$.F,$.aq,$.aD],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p
t=[P.C]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bS,$.h)
t.h(0,$.aS,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.aG,$.y)
t.h(0,$.ah,$.y)
r="Now that the "+$.o+" has been defeated, the planet has really opened up. The "
q=$.j
p=[U.b]
t.h(0,new R.R("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.m+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.j
t.h(0,new R.aw("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.m+" "+$.z+"s in time to stop them.   ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.aC)}}
L.kC.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Scroll",H.a([$.O,$.F,$.aq],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ink Pot",H.a([$.b3,$.F,$.bA,$.aq],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blank Book",H.a([$.O,$.F,$.ak,$.aq,$.bA,$.ad],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.nA,$.h)
t.h(0,$.ao,$.h)
t.h(0,$.bi,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.aQ,$.i)
r="The "+$.o+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.j
p=[U.b]
t.h(0,new R.aw("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" has been taken care of, the "
r=$.j
q=q+r+" discovers a large library of "
o=$.m
t.h(0,new R.R("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.A}}
S.kF.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cueball",H.a([$.jf,$.jk,$.F,$.aU,$.bm,$.ad],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Crystal Ball",H.a([$.jf,$.rN,$.F,$.bL],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Binoculars",H.a([$.b3,$.F,$.N],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Blindfold",H.a([$.rK,$.F,$.bd],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.rf,$.h)
t.h(0,$.f0,$.h)
t.h(0,$.nC,$.h)
t.h(0,$.bj,$.i)
r="Now that the "+$.o+" has been defeated, the land is really starting to open up. The "
q=$.j
r=r+q+" finds a tunnel filled with Blind "
p=$.m
o=[U.b]
t.h(0,new R.R("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
q="The "+$.o+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.j
t.h(0,new R.aw("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.m
t.h(0,new R.R("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
r="A group of underlings are still making trouble, even after the defeat of the "+$.o+". The "
p=$.j
r=r+p+" begins planting rumors of a huge "
q=$.a4
t.h(0,new R.R("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.v}}
Y.kJ.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Meddler's Guide",H.a([$.ak,$.F,$.O,$.cy,$.ad,$.bM],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("First Aid Kit",H.a([$.b3,$.F,$.bM],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.F
r=A.f("Cloud in a Bottle",H.a([r,r,$.bc],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Wings",H.a([$.aD,$.F,$.bL,$.b0,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.ao,$.i)
t.h(0,$.bS,$.h)
t.h(0,$.bj,$.i)
t.h(0,$.ah,$.i)
t.h(0,$.aS,$.h)
r="The defeat of the "+$.o+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.j
p=[U.b]
t.h(0,new R.aw("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.o+" has been taken care of, the "
r=$.j
q=q+r+" finds a long line of "
o=$.m
t.h(0,new R.R("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.u}}
N.kK.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Fiduspawn Plush",H.a([$.fg,$.ai,$.bd],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Teddy Bear",H.a([$.fg,$.ai,$.bd],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dice",H.a([$.rP,$.ay],s),null,!1,"D113")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Pigeon",H.a([$.jg,$.bm,$.cX,$.cV,$.e9,$.t3],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cat Ears",H.a([$.ai,$.bd,$.fg],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Religious Text",H.a([$.ak,$.O],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Psychology Book",H.a([$.ak,$.O],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Therapy Couch",H.a([$.bd,$.ai],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("FLARP Manual",H.a([$.ak,$.O,$.aq],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bI,$.y)
q.h(0,$.ah,$.i)
q.h(0,$.aQ,$.h)
q.h(0,$.bi,$.i)
p=$.j
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.m
m=[U.b]
q.h(0,new R.K("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ae+" or "+$.a4+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.z+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bI,$.y)
s.h(0,$.ah,$.h)
s.h(0,$.aQ,$.h)
s.h(0,$.oW,$.h)
s.h(0,$.bh,$.h)
s.h(0,$.p1,$.h)
s.h(0,$.bi,$.i)
o=$.j
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.z
n=n+l+"ing "
k=$.m
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ae
s.h(0,new R.K("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bz,$.y)
t.h(0,$.ct,$.h)
t.h(0,$.aS,$.h)
t.h(0,$.cu,$.h)
t.h(0,$.eZ,$.h)
r=$.j
q="The "+r+" wanders into an entire crowd of "
o=$.m
t.h(0,new R.K("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.z+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
N.kN.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Frog Statue",H.a([$.aP,$.cZ,$.v],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Frog Costume",H.a([$.ai,$.v],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Reactor",H.a([$.fh,$.aq,$.as,$.v],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Telescope",H.a([$.N,$.b3,$.aq,$.v],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Green Sun Poster",H.a([$.O,$.v,$.nT,$.ad],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m
t=$.j
s=[P.C]
r=H.a(["Wherever the "+t+" goes, they find a "+$.m+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.z+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.o+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.j
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.m+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.m+" tells the "
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
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bj,$.y)
t.h(0,$.oY,$.h)
s=[U.b]
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.h(0,new R.D("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
t.h(0,new R.aw("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.z+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.n(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
this.f.h(0,new X.r(o,t,null),$.um)},
gU:function(){return this.l},
gH:function(){return this.D}}
G.fJ.prototype={
cl:function(a){var t=0,s=P.ny(),r,q=this,p,o,n,m,l
var $async$cl=P.ou(function(b,c){if(b===1)return P.oo(c,s)
while(true)switch(t){case 0:p=new B.hj(null,0)
p.a=J.qd(a,0)
for(o=q.b,n=0;n<("SimStat"+o).length;++n)p.aG(8)
m=p.aG(32)
l=H.a([],[E.aY])
for(n=0;n<m;++n)l.push(q.h7(p))
r=l
t=1
break
case 1:return P.op(r,s)}})
return P.oq($async$cl,s)},
$aseM:function(){return[[P.G,E.aY]]},
$ase6:function(){return[[P.G,E.aY],P.cP]}}
G.kR.prototype={
h7:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=T.ug(a.aG(8))
s=L.qZ(a.aG(8))
r=B.p2(a.aG(4))
q=B.p2(a.aG(4))
p=a.aG(32)
o=a.cm()
n=P.C
m=P.x
l=P.cd(n,m)
for(k=0;k<o;++k){j=a.cm()
for(i=0,h="";i<j;++i)h+=H.tx(a.aG(8))
g=a.bs(a.b);++a.b
f=a.cm()/100
if(g)f*=-1
l.h(0,h.charCodeAt(0)==0?h:h,f)}n=new E.aY(p,t,s,r,q,P.cd(D.cI,m),P.cd(n,m))
n.r=l
return n}}
A.jU.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Puzzle Box",H.a([$.ar,$.v,$.aD],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tesla Coil",H.a([$.as,$.v,$.N],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Coin",H.a([$.N,$.v],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Electronic Door",H.a([$.N,$.v,$.as,$.aq],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Janus Bust",H.a([$.aP,$.nO,$.cZ,$.au,$.v,$.ad,$.as],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("A Stone",H.a([$.v,$.aA,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
gU:function(){return this.l},
gH:function(){return this.D}}
A.kO.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Frog Statue",H.a([$.aP,$.cZ,$.v],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Frog Costume",H.a([$.ai,$.v],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Reactor",H.a([$.fh,$.aq,$.as,$.v],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Telescope",H.a([$.N,$.b3,$.aq,$.v],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Green Sun Poster",H.a([$.O,$.v,$.nT,$.ad],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("A Stone",H.a([$.v,$.aA,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
gU:function(){return this.l},
gH:function(){return this.D}}
A.kk.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Curtain",H.a([$.ai,$.v,$.ap],s),null,!1,"Show Ender")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Cursed Sword",H.a([$.N,$.fl,$.du,$.v,$.cW,$.be,$.ap,$.e9,$.b_],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Megaphone",H.a([$.N,$.b4,$.as,$.v,$.ap],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.aP,$.N,$.b4,$.cy,$.dv,$.v,$.ap],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bacchus Wine",H.a([$.ca,$.cy,$.au,$.v,$.ad,$.ap],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nightmare Fuel",H.a([$.ar,$.v,$.be,$.cb,$.ea,$.ap],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("A Stone",H.a([$.v,$.aA,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
gU:function(){return this.l},
gH:function(){return this.B}}
A.kL.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Doll",H.a([$.jk,$.b0,$.bm,$.v],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Puppet",H.a([$.ar,$.bm,$.v,$.ad,$.be],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Mirror",H.a([$.nW,$.v],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shipping Grid",H.a([$.O,$.v,$.cz],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shades",H.a([$.aV,$.b3,$.v],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("A Stone",H.a([$.v,$.aA,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
gU:function(){return this.l},
gH:function(){return this.D}}
A.lz.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Grandfather Clock",H.a([$.ar,$.au,$.ec,$.v],s),null,!1,"Ticking Tower of Time")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drum",H.a([$.pg,$.v,$.aW],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dead Doppelganger",H.a([$.aP,$.cX,$.v,$.cV,$.be,$.b_],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Music Box",H.a([$.N,$.v,$.aW,$.au],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.N,$.v,$.aW,$.ad,$.aV],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Metronome",H.a([$.N,$.v,$.aW],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("A Stone",H.a([$.v,$.aA,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
gU:function(){return this.n},
gH:function(){return this.T}}
A.kq.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("FAQ",H.a([$.as,$.v,$.aq,$.cY],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flashlight",H.a([$.ay,$.v,$.bL,$.as,$.cY],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Octet",H.a([$.v,$.bL,$.cY,$.ad,$.nR],s),null,!1,"D13")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Horseshoe",H.a([$.pe,$.v,$.aU],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Rabbits Foot",H.a([$.pi,$.v],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("4 Leaf Clover",H.a([$.dt,$.v,$.bL,$.cY],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("8-Ball",H.a([$.b3,$.v,$.bm],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("A Stone",H.a([$.v,$.aA,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
gU:function(){return this.l},
gH:function(){return this.D}}
A.iZ.prototype={
F:function(){var t,s
t=Q.q(null,null,A.J)
s=A.f("Infinity Gauntlet",H.a([$.v,$.N,$.nM],[G.H]),"...",!1,"THANOS CAR THANOS CAR")
C.a.j(t.b,new Q.e(s,t.k(s,1),[H.w(t,0)]))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aQ,$.i)
t.h(0,$.aG,$.y)
t.h(0,$.br,$.y)
r=$.j
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.o+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.h(0,new R.D("Collect The Stones",!1,[new U.b(q),new U.b(p),new U.b(o),new U.I(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.B}}
R.lm.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Meddler's Guide",H.a([$.ak,$.F,$.O,$.cy,$.ad,$.bM],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("First Aid Kit",H.a([$.b3,$.F,$.bM],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=$.F
r=A.f("Cloud in a Bottle",H.a([r,r,$.bc],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Fairy Wings",H.a([$.aD,$.F,$.bL,$.b0,$.O],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o
t=[P.C]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aQ,$.h)
t.h(0,$.ah,$.h)
t.h(0,$.bS,$.i)
t.h(0,$.f5,$.i)
t.h(0,$.rd,$.i)
t.h(0,$.dk,$.i)
t.h(0,$.nz,$.i)
t.h(0,$.rg,$.i)
r=$.j
q="The "+r+" decides to take a break after defeating "+$.o+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.m
o=[U.b]
t.h(0,new R.R("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.z+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.oa(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
r=$.m
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.j
t.h(0,new R.R("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
q="The "+r+"s are so stressed after all that shit with the "+$.o+". They are yelling and "+$.z+" at each other over the slightest of insults. The "
p=$.j
t.h(0,new R.R("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p="The "+$.o+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.j
p=p+r+" purifies the pools "
q=$.m
t.h(0,new R.aw("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="The defeat of the "+$.o+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.m
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.j
t.h(0,new R.R("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ae+". Huh. Okay then.")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.v}}
L.lo.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Lightning",H.a([$.b4,$.aA,$.v],s),null,!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ice",H.a([$.bU,$.rY,$.eb],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Taserface",H.a([$.ap,$.b4],s),null,!1,null)
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Taser",H.a([$.b4,$.v,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.cs,$.y)
t.h(0,$.aG,$.h)
t.h(0,$.eY,$.i)
t.h(0,$.br,$.i)
r=$.j
q="The "+r+" is walking around on their land, when a "
p=$.m
q=q+p+" walks up to them, and tells them about "
o=$.o
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.z+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.h(0,new R.D("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.I(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
this.f.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
D.lq.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Robot",H.a([$.as,$.N,$.bm,$.aq],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Circuit Board",H.a([$.as,$.N],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Datastructures for Assholes",H.a([$.as,$.O],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("~ATH - A Handbook for the Imminently Deceased ",H.a([$.as,$.O,$.b_,$.ak],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("3-D Printer",H.a([$.ay,$.as,$.N],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Virus on a USB Stick",H.a([$.rV,$.N],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Wrench",H.a([$.t9,$.N,$.aU],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Computer",H.a([$.as,$.N],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.iO,$.i)
q.h(0,$.e1,$.h)
q.h(0,$.e3,$.h)
q.h(0,$.aZ,$.y)
p=$.j
o="The "+p+" learns from their "
n=$.m
o=o+n+"s about the great "
m=$.ae
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.o+" destroyed it. "
o="The "+p+" searches for the "
l=$.a4
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.tr
p=[U.b]
q.h(0,new R.K("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.n(),!1,!1,new Y.bt("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.p)
l=$.j
m="The "+l+" is approached by a "
o=$.m
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.z
q.h(0,new R.K("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.o+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.a4+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dC(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.e3,$.h)
s.h(0,$.e2,$.y)
s.h(0,$.dn,$.i)
s.h(0,$.bz,$.h)
s.h(0,$.aZ,$.y)
o=$.j
n="The "+o+" learns that all of the local "
l=$.m
s.h(0,new R.K("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.z+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
o=$.j
l="The "+o+" finds two groups of "
n=$.m
l=l+n+"s screaming and "
k=$.z
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.a4
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.h(0,new R.K("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.cE(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.iO,$.y)
t.h(0,$.e1,$.h)
t.h(0,$.e3,$.h)
t.h(0,$.aZ,$.y)
r=$.j
q="The "+r+" learns from a mysterious "+$.m+" in a black trenchcoat about a great "
o=$.ae
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.o
t.h(0,new R.K("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
V.lr.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Lighter",H.a([$.N,$.cb],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Siberia Poster",H.a([$.O,$.bU],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Nuclear Winter Poster",H.a([$.O,$.bU,$.fh],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Doomsday Device",H.a([$.N,$.b_,$.fh,$.aA,$.e9],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Juggalo Poster",H.a([$.O,$.rZ],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Watch",H.a([$.N,$.ec,$.aA],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Magnificent Crown",H.a([$.N,$.ec,$.aA],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bitching Clothes",H.a([$.ai,$.e8,$.aA],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Ceramic Pork Hollow",H.a([$.nP,$.ec],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Shit Ton of Guns",H.a([$.N,$.t4,$.fj,$.aA],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sniper Rifle",H.a([$.N,$.t6,$.fj,$.aA],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("AK-47",H.a([$.N,$.t0,$.fj,$.aA],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("IED",H.a([$.pd,$.cW,$.N,$.ea,$.aA],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Idiots Guide To Being An Asshole",H.a([$.O,$.cy,$.ak],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Bike Horn",H.a([$.dv,$.N,$.b4,$.cy],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Matches",H.a([$.ar,$.cb],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bg,$.i)
q.h(0,$.ct,$.h)
q.h(0,$.cT,$.h)
q.h(0,$.e4,$.h)
q.h(0,$.nF,$.h)
q.h(0,$.cu,$.i)
p=$.j
o=[U.b]
q.h(0,new R.K("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p=this.r
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bg,$.i)
s.h(0,$.ct,$.h)
s.h(0,$.bb,$.h)
s.h(0,$.cu,$.i)
n=$.j
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.m
s.h(0,new R.K("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.a4+" underling. Tremble at the fearsome "+$.ae+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bH,$.h)
q.h(0,$.ao,$.y)
q.h(0,$.cv,$.h)
q.h(0,$.aN,$.i)
q.h(0,$.dk,$.y)
q.h(0,$.br,$.y)
n=$.j
m="The "+n+" learns that all of the local "
l=$.m
q.h(0,new R.K("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.z+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aR,$.h)
t.h(0,$.br,$.y)
t.h(0,$.dl,$.h)
t.h(0,$.iN,$.h)
t.h(0,$.aZ,$.i)
t.h(0,$.dp,$.i)
s=$.j
r="The "+s+" finds a crowd of "
n=$.z
r=r+n+"ing "
m=$.m
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ae+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.h(0,new R.K("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.p)
p.h(0,new X.r(q,t,null),$.ab)},
gH:function(){return this.cx}}
X.r.prototype={
E:function(a){return"Theme: "+H.t(this.a)}}
U.lu.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Lockpick",H.a([$.N,$.F,$.bA,$.du,$.ad],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Sneaking Suit",H.a([$.ai,$.F,$.bA],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Dagger",H.a([$.N,$.F,$.du,$.cW,$.rO],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aR,$.h)
t.h(0,$.c8,$.i)
t.h(0,$.aG,$.i)
t.h(0,$.bz,$.i)
r="The "+$.o+" cannot release the frogs since the corrupt "
q=$.m
r=r+q+" Cops have confiscated them. The "
p=$.j
o=[U.b]
t.h(0,new R.aw("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.j
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.o+"'s layer and slated to be returned to the "
r=$.m
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.z+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.h(0,new R.R("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
p="A weeping "+r+" approaches the "
n=$.j
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.o
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ae+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.z+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.h(0,new R.R("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
n="Now that the "+r+" has been defeated, the "
p=$.m
n=n+p+"s have recovered their precious "
q=$.a4
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.j
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.z
l=n+l+"worth, the disaffected Heir to the "+$.ae+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.h(0,new R.R("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)}}
N.lv.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Grandfather Clock",H.a([$.ar,$.au,$.ec,$.v],s),null,!1,"Ticking Tower of Time")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Drum",H.a([$.pg,$.v,$.aW],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Dead Doppelganger",H.a([$.aP,$.cX,$.v,$.cV,$.be,$.b_],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Music Box",H.a([$.N,$.v,$.aW,$.au],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Turn Tables",H.a([$.N,$.v,$.aW,$.ad,$.aV],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Metronome",H.a([$.N,$.v,$.aW],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.C]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.ri,$.a9)
q.h(0,$.aZ,$.i)
q.h(0,$.bz,$.i)
q.h(0,$.dn,$.h)
p=$.o
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.j
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.h(0,new R.R("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.d6(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.h)
n=$.j
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.m+"s, they set out to fix the "
m=$.a4
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.o
q.h(0,new R.D("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.I("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j=this.f
j.h(0,new X.r(s,q,null),$.a7)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.f_,$.h)
s.h(0,$.cT,$.y)
s.h(0,$.aZ,$.h)
p=$.j
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.m+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.o
s.h(0,new R.D("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.I(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.aS,$.h)
t.h(0,$.ah,$.i)
t.h(0,$.aQ,$.h)
t.h(0,$.bS,$.h)
r=$.o
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.a4
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.j
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.m+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.h(0,new R.D("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.I(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.en(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
k=$.o
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.a4
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.j
t.h(0,new R.D("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.m+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.I("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.d6(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.h)
r="With the defeat of the "+$.o+", "
k=$.j
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.m
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ae
t.h(0,new R.R("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.d6(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.h)
p=$.m
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.j
t.h(0,new R.D("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.z+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.I("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.o+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
j.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.n},
gH:function(){return this.T}}
G.H.prototype={}
G.eR.prototype={$isaI:1,
$asaI:function(){return[G.eR]}}
G.jn.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.H]}}}
Q.lF.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cardboard Box",H.a([$.O,$.v,$.bA],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Hole Punch",H.a([$.N,$.v,$.bA],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Smoke Bombs",H.a([$.ea,$.v,$.bA,$.pd],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Tribal Mask",H.a([$.cV,$.v,$.bA,$.be,$.jm],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Opera Mask",H.a([$.ay,$.v,$.bA,$.au],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Black Hole in a Bottle.",H.a([$.v,$.ad,$.nT,$.bA,$.b3],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.x2=t},
G:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.C]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bI,$.h)
q.h(0,$.nE,$.h)
q.h(0,$.f2,$.h)
q.h(0,$.f0,$.h)
p=$.o
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.j
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.m
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.h(0,new R.R("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=$.j
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.o
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.h(0,new R.D("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.I(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
i=this.f
i.h(0,new X.r(s,q,null),$.a7)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.bI,$.i)
s.h(0,$.nE,$.i)
s.h(0,$.f2,$.i)
s.h(0,$.aR,$.h)
p=$.j
o="Even with the victory of the "+p+" over the villainous "
n=$.o
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.m+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.a4
s.h(0,new R.R("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dC(),!1,!1,new Y.aJ("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.h)
m=$.j
s.h(0,new R.D("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.z+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.I("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.o+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.m+"s.")],H.a([],l),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(q,s,null),$.a7)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bI,$.h)
t.h(0,$.nE,$.h)
t.h(0,$.f2,$.h)
r=$.j
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.o+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.h(0,new R.D("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.I(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
i.h(0,new X.r(s,t,null),$.a7)},
gU:function(){return this.l},
gH:function(){return this.D}}
E.lG.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Yardstick",H.a([$.cA,$.F,$.ji,$.ad],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("SBURBSim Hacking Guide",H.a([$.ak,$.F,$.fk,$.O],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Body Pillow of JR",H.a([$.ai,$.F,$.ds,$.nU,$.bd],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Nanobots",H.a([$.pj,$.F,$.nL],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.bj,$.h)
t.h(0,$.bJ,$.h)
t.h(0,$.c7,$.h)
t.h(0,$.bS,$.h)
t.h(0,$.dj,$.h)
t.h(0,$.cs,$.h)
t.h(0,$.f2,$.i)
r=$.j
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.b]
t.h(0,new R.K("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.oa(),!1,!1,new Y.cf("Rewards/no_reward.png",null),1,null,null),$.p)
r=$.o
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.j
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aX+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.z
t.h(0,new R.D("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.I(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.pu(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.p)
q=$.j
t.h(0,new R.K("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.n(),!1,!1,new Y.cf("Rewards/no_reward.png",null),1,null,null),$.p)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.j
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.o
t.h(0,new R.D("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
t.h(0,new R.D("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.o+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.n(),!1,!1,new Y.E("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m="A wizened "+$.m+" tells the "
r=$.j
t.h(0,new R.R("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.j
t.h(0,new R.R("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.pv(),!1,!1,new Y.aJ("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.j
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.h(0,new R.R("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.o
m="The "+n+" explains um. What? Where did the "
q=$.j
t.h(0,new R.aw("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.h(0,new X.r(s,t,null),$.a7)},
gH:function(){return this.A}}
M.lK.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Cauldron",H.a([$.t_,$.F,$.aD],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Flying Broom",H.a([$.nN,$.cA,$.F,$.ar,$.aD],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Warped Mirror",H.a([$.nW,$.F,$.aD,$.bA,$.ad],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.go=t},
G:function(){var t,s,r,q,p,o,n,m
t=[P.C]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.P,P.x])
t.h(0,$.aN,$.i)
t.h(0,$.f4,$.i)
t.h(0,$.bH,$.i)
t.h(0,$.bz,$.i)
t.h(0,$.ba,$.i)
t.h(0,$.oY,$.i)
r=$.o
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.m
q=q+p+" consorts. It's up to the "
o=$.j
n=[U.b]
t.h(0,new R.aw("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="Even with the defeat of the "+$.o+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.m
o=o+r+" settlement, and crops refuse to thrive at "
p=$.ae
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.j
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.h(0,new R.R("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.p)
q="A Mysterious "+$.m+" approaches the "
p=$.j
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ae
q=q+r+" was discovered amongst the "+$.o+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.h(0,new R.R("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.p)
r=$.m
p="A young "+r+" approaches the "
m=$.j
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ae
t.h(0,new R.R("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.a4+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.z+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.n(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.p)
this.x.h(0,new X.r(s,t,null),$.aC)},
gH:function(){return this.A}}
F.lL.prototype={
F:function(){var t,s,r,q
t=Q.q(null,null,A.J)
s=[G.H]
r=A.f("Make a World Book",H.a([$.O,$.au,$.ak],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.w(t,0)]
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Quill Pen",H.a([$.bd,$.ai,$.ph],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Book On Writing",H.a([$.ak,$.O,$.aq],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("FLARP Manual",H.a([$.ak,$.O,$.aq],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Script",H.a([$.ak,$.O],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Fancy Pen",H.a([$.N,$.aq,$.ph,$.au],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
r=A.f("Spiral Bound Notebook",H.a([$.ak,$.O,$.N],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.e(r,t.k(r,1),q))
s=A.f("Half Written Novel",H.a([$.ak,$.O],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.e(s,t.k(s,1),q))
this.y=t},
G:function(){var t,s,r,q,p,o,n,m,l
t=[P.C]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.P,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.h(0,$.bI,$.h)
q.h(0,$.bi,$.h)
q.h(0,$.ao,$.i)
q.h(0,$.ah,$.i)
q.h(0,$.f1,$.i)
p=$.j
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.m+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.h(0,new R.K("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.n(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.p)
m=this.r
m.h(0,new X.r(s,q,null),$.ab)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.h(0,$.cu,$.i)
s.h(0,$.bg,$.i)
s.h(0,$.bb,$.i)
s.h(0,$.ao,$.i)
p=$.m
o="An Excited "+p+" rushes up to the "
n=$.j
s.h(0,new R.K("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.z+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(q,s,null),$.ab)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.h(0,$.bg,$.i)
t.h(0,$.ct,$.h)
t.h(0,$.bb,$.h)
t.h(0,$.cu,$.i)
t.h(0,$.c7,$.h)
r=$.j
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.m
t.h(0,new R.K("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.n(),!1,!1,new Y.bx("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.p)
m.h(0,new X.r(s,t,null),$.ab)},
gH:function(){return this.cx}}
A.df.prototype={}
B.hj.prototype={
bs:function(a){var t,s,r,q
t=C.d.N(a/8)
s=C.b.cA(a,8)
r=this.a.getUint8(t)
q=C.b.aq(1,s)
if(typeof r!=="number")return r.cz()
return(r&q)>>>0>0},
aG:function(a){var t,s,r
if(a>32)throw H.A(P.dS(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.bs(this.b);++this.b
if(r)t=(t|C.b.f3(1,s))>>>0}return t},
h6:function(a){var t,s,r,q
if(a>32)throw H.A(P.dS(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.bs(this.b);++this.b
if(q)s=(s|C.b.aq(1,t-r))>>>0}return s},
cm:function(){var t,s,r
for(t=0;!0;){s=this.bs(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.h6(t+1)-1}}
A.bG.prototype={
gcn:function(){return this.b},
aP:function(a,b,c){this.f=a
this.r=b
this.x=c
this.av()},
cF:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
this.z=a
this.Q=b
this.ch=c
this.y=!1
t=(a+16)/116
s=b/500+t
r=t-c/200
q=s*s*s
p=r*r*r
o=q>0.008856?q:(s-0.13793103448275862)/7.787
n=a>7.9996247999999985?Math.pow(t,3):a/903.3
m=p>0.008856?p:(s-0.13793103448275862)/7.787
l=[P.x]
k=H.a([95.047*o,100*n,108.883*m],l)
s=k[0]/100
t=k[1]/100
r=k[2]/100
j=s*3.2406+t*-1.5372+r*-0.4986
i=s*-0.9689+t*1.8758+r*0.0415
c=s*0.0557+t*-0.204+r*1.057
j=j>0.0031308?1.055*Math.pow(j,0.4166666666666667)-0.055:12.92*j
i=i>0.0031308?1.055*Math.pow(i,0.4166666666666667)-0.055:12.92*i
h=H.a([j,i,c>0.0031308?1.055*Math.pow(c,0.4166666666666667)-0.055:12.92*c],l)
this.b=C.b.M(C.c.N(h[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.M(C.c.N(h[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.M(C.c.N(h[2]*255),0,255)
this.e=!0
this.y=!0},
bH:function(a){this.b=a.b
this.c=a.c
this.d=a.d
this.e=!0
this.y=!0},
E:function(a){return"rgb("+H.t(this.b)+", "+H.t(this.c)+", "+H.t(this.d)+", "+H.t(this.a)+")"},
dI:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aq()
s=this.c
if(typeof s!=="number")return s.aq()
r=this.d
if(typeof r!=="number")return r.aq()
q=this.a
if(typeof q!=="number")return H.az(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aq()
s=this.c
if(typeof s!=="number")return s.aq()
r=this.d
if(typeof r!=="number")return H.az(r)
return(t<<16|s<<8|r)>>>0},
dJ:function(a){var t=C.b.hj(this.dI(!1),16)
return C.f.fY(t,6,"0").toUpperCase()},
hi:function(){return this.dJ(!1)},
hl:function(a,b){return"#"+this.dJ(!1)},
ab:function(){return this.hl(!1,!1)},
a9:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.P()
t/=255
s=this.c
if(typeof s!=="number")return s.P()
s/=255
r=this.d
if(typeof r!=="number")return r.P()
r/=255
q=Math.max(Math.max(t,s),r)
p=Math.min(Math.min(t,s),r)
o=q-p
n=q===0?0:o/q
if(q===p)m=0
else{if(q===t){t=s<r?6:0
m=(s-r)/o+t}else m=q===s?(r-t)/o+2:(t-s)/o+4
m/=6}l=H.a([m,n,q],[P.x])
this.f=l[0]
this.r=l[1]
this.x=l[2]},
av:function(){var t,s,r,q,p,o,n,m,l,k,j,i
this.e=!1
t=this.f
s=this.r
r=this.x
t*=6
q=C.c.N(t)
p=t-q
o=r*(1-s)
n=r*(1-p*s)
m=r*(1-(1-p)*s)
l=C.b.cA(q,6)
if(l===0){k=o
j=m}else if(l===1){k=o
j=r
r=n}else if(l===2){k=m
j=r
r=o}else if(l===3){k=r
r=o
j=n}else{if(l===4){k=r
r=m}else k=n
j=o}i=H.a([r,j,k],[P.x])
this.b=C.b.M(C.c.N(i[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.M(C.c.N(i[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.M(C.c.N(i[2]*255),0,255)
this.e=!0
this.y=!0},
by:function(){var t,s,r,q,p,o,n,m,l,k,j
this.y=!1
t=this.b
if(typeof t!=="number")return t.P()
t/=255
s=this.c
if(typeof s!=="number")return s.P()
s/=255
r=this.d
if(typeof r!=="number")return r.P()
r/=255
q=(t>0.04045?Math.pow((t+0.055)/1.055,2.4):t/12.92)*100
p=(s>0.04045?Math.pow((s+0.055)/1.055,2.4):s/12.92)*100
o=(r>0.04045?Math.pow((r+0.055)/1.055,2.4):r/12.92)*100
t=[P.x]
n=H.a([q*0.4124+p*0.3576+o*0.1805,q*0.2126+p*0.7152+o*0.0722,q*0.0193+p*0.1192+o*0.9505],t)
m=n[0]/95.047
l=n[1]/100
k=n[2]/108.883
m=m>0.008856?Math.pow(m,0.3333333333333333):(903.3*m+16)/116
l=l>0.008856?Math.pow(l,0.3333333333333333):(903.3*l+16)/116
k=k>0.008856?Math.pow(k,0.3333333333333333):(903.3*k+16)/116
j=H.a([Math.max(0,116*l-16),500*(m-l),200*(l-k)],t)
this.z=j[0]
this.Q=j[1]
this.ch=j[2]},
R:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bG){t=this.b
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
ga0:function(a){return this.dI(!0)},
Y:function(a,b){var t,s,r,q,p,o,n,m
t=J.af(b)
if(!!t.$isbG){t=this.b
s=b.b
if(typeof t!=="number")return t.Y()
if(typeof s!=="number")return H.az(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.Y()
if(typeof q!=="number")return H.az(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.Y()
if(typeof o!=="number")return H.az(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.Y()
if(typeof m!=="number")return H.az(m)
return A.by(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.P()
s=this.c
if(typeof s!=="number")return s.P()
r=this.d
if(typeof r!=="number")return r.P()
q=this.a
if(typeof q!=="number")return q.P()
return A.i8(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.Y()
s=this.c
if(typeof s!=="number")return s.Y()
r=this.d
if(typeof r!=="number")return r.Y()
return A.by(t+b,s+b,r+b,this.a)}throw H.A("Cannot add ["+H.t(t.ga2(b))+" "+H.t(b)+"] to a Colour. Only Colour, double and int are valid.")},
P:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.P()
s=this.c
if(typeof s!=="number")return s.P()
r=this.d
if(typeof r!=="number")return r.P()
q=this.a
if(typeof q!=="number")return q.P()
return A.i8(t/255/b,s/255/b,r/255/b,q/255)},
a3:function(a,b){var t,s,r,q
if(b instanceof A.bG){t=this.b
if(typeof t!=="number")return t.P()
t=C.d.a3(t/255,b.ghM())
s=this.c
if(typeof s!=="number")return s.P()
s=C.d.a3(s/255,b.ghw())
r=this.d
if(typeof r!=="number")return r.P()
r=C.d.a3(r/255,b.ghC())
q=this.a
if(typeof q!=="number")return q.P()
return A.i8(t,s,r,C.d.a3(q/255,b.ghB()))}else{t=this.b
if(typeof t!=="number")return t.P()
s=this.c
if(typeof s!=="number")return s.P()
r=this.d
if(typeof r!=="number")return r.P()
q=this.a
if(typeof q!=="number")return q.P()
return A.i8(t/255*b,s/255*b,r/255*b,q/255)}},
w:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.A("Colour index out of range: "+H.t(b))},
h:function(a,b,c){var t,s
t=J.cM(b)
if(t.ax(b,0)||t.aO(b,3))throw H.A("Colour index out of range: "+H.t(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.R(b,0)){this.b=C.b.M(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.b.M(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,2)){this.d=C.b.M(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.M(c,0,255)
else if(t.R(b,0)){this.b=C.b.M(J.h4(J.no(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.b.M(J.h4(J.no(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.n5(c)
if(t.R(b,2)){this.d=C.b.M(J.h4(s.a3(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.M(J.h4(s.a3(c,255)),0,255)}},
e9:function(a,b,c,d){this.b=C.c.M(J.h2(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.c.M(J.h2(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.c.M(J.h2(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.c.M(J.h2(d,0,255),0,255)}}
A.n2.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.C]}}}
E.dW.prototype={
cE:function(a){var t
$.$get$b2().ac("setFromRGB")
t=this.y2
t.b=C.b.M(C.c.N(this.z.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.c=C.b.M(C.c.N(this.Q.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.d=C.b.M(C.c.N(this.ch.y*255),0,255)
t.e=!0
t.y=!0
if(a){J.cm(this.cx,this.y2.b)
J.cm(this.cy,this.y2.c)
J.cm(this.db,this.y2.d)}this.hp(a,!1)},
aJ:function(){return this.cE(!1)},
cC:function(a){var t,s
$.$get$b2().ac("setFromRGB")
t=this.y2
s=this.dx.y
if(t.e)t.a9()
t.f=s
t.av()
t=this.y2
s=this.dy.y
if(t.e)t.a9()
t.r=s
t.av()
t=this.y2
s=this.fr.y
if(t.e)t.a9()
t.x=s
t.av()
if(a){t=this.fx
s=this.y2
if(s.e)s.a9()
J.cm(t,C.c.N(s.f*360))
t=this.fy
s=this.y2
if(s.e)s.a9()
J.cm(t,C.c.N(s.r*100))
t=this.go
s=this.y2
if(s.e)s.a9()
J.cm(t,C.c.N(s.x*100))}this.ho(a,!1)},
aI:function(){return this.cC(!1)},
bI:function(){var t,s,r,q
t=this.y2
s=J.c2(this.id)
s.toString
r=J.c2(this.k1)
r.toString
q=J.c2(this.k2)
q.toString
t.cF(s,r,q)
this.hn(!1)},
bl:function(a,b,c,d,e){var t,s,r,q,p
if(!(this.a||a))return
$.$get$b2().ac("update: rgb: "+e+", hsv: "+c+", fromMain: "+b+", force: "+a)
if(e){t=this.z
s=this.y2
r=s.b
if(typeof r!=="number")return r.P()
t.y=r/255
t=this.Q
q=s.c
if(typeof q!=="number")return q.P()
t.y=q/255
q=this.ch
s=s.d
if(typeof s!=="number")return s.P()
q.y=s/255
J.cm(this.cx,r)
J.cm(this.cy,this.y2.c)
J.cm(this.db,this.y2.d)}if(c){t=this.dx
s=this.y2
if(s.e)s.a9()
t.y=s.f
t=this.dy
s=this.y2
if(s.e)s.a9()
t.y=s.r
t=this.fr
s=this.y2
if(s.e)s.a9()
t.y=s.x
t=this.fx
s=this.y2
if(s.e)s.a9()
J.bp(t,C.b.E(C.c.N(s.f*360)))
t=this.fy
s=this.y2
if(s.e)s.a9()
J.bp(t,C.b.E(C.c.N(s.r*100)))
t=this.go
s=this.y2
if(s.e)s.a9()
J.bp(t,C.b.E(C.c.N(s.x*100)))}if(d){t=this.id
s=this.y2
if(s.y)s.by()
J.bp(t,C.c.bj(s.z,2))
t=this.k1
s=this.y2
if(s.y)s.by()
J.bp(t,C.c.bj(s.Q,2))
t=this.k2
s=this.y2
if(s.y)s.by()
J.bp(t,C.c.bj(s.ch,2))}for(t=this.ry,s=this.x1,p=0;p<t.length;++p){r=t[p]
r.ct(!0)
if(p>=s.length)return H.L(s,p)
r.dk(s[p])}this.f6(!b)
J.bp(this.k3,this.y2.hi())
t=this.r1.style
s=this.y2.ab()
t.backgroundColor=s
t=this.r2
s=$.c6
if(s>=t.length)return H.L(t,s)
J.qq(t[s],!0)},
hp:function(a,b){return this.bl(!1,a,!0,!0,b)},
ho:function(a,b){return this.bl(!1,a,b,!0,!0)},
dL:function(a){return this.bl(a,!1,!0,!0,!0)},
af:function(){return this.bl(!1,!1,!0,!0,!0)},
hn:function(a){return this.bl(!1,!1,!0,a,!0)},
f6:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
$.$get$b2().ac("updateMainPicker: setValue: "+a)
t=this.y1
s=$.c6
if(s>=t.length)return H.L(t,s)
r=t[s]
t=this.x2
if(s>=t.length)return H.L(t,s)
q=t[s]
this.y.dk(r)
s=this.x
s.toString
p=s.getContext("2d")
o=P.pZ(p.getImageData(0,0,256,256))
for(t=J.aa(o),n=null,m=null,l=0;l<256;++l)for(s=l/255,k=0;k<256;++k){n=(k*256+l)*4
m=q.$2(s,1-k/255)
j=t.gal(o)
i=m.gcn()
if(n>=j.length)return H.L(j,n)
j[n]=i
i=t.gal(o)
j=n+1
h=m.c
if(j>=i.length)return H.L(i,j)
i[j]=h
h=t.gal(o)
j=n+2
i=m.d
if(j>=h.length)return H.L(h,j)
h[j]=i
i=t.gal(o)
j=n+3
if(j>=i.length)return H.L(i,j)
i[j]=255}C.n.dz(p,o,0,0)
g=this.bR()
l=g[0].y
k=g[1].y
f=g[2].y
t=this.y2
if(t.y)t.by()
e=t.z>50?"#000000":"#FFFFFF"
p.beginPath()
p.arc(C.c.a5(l*255),C.c.a5((1-k)*255),5,0,6.283185307179586,!1)
p.strokeStyle=e
p.stroke()
if(a)this.y.y=f
this.y.ct(!0)},
bR:function(){var t,s,r,q
t=$.c6
if(t===0){s=this.ch
r=this.Q
q=this.z}else if(t===1){s=this.ch
r=this.z
q=this.Q}else if(t===2){s=this.z
r=this.Q
q=this.ch}else if(t===3){s=this.dy
r=this.fr
q=this.dx}else if(t===4){s=this.dx
r=this.fr
q=this.dy}else if(t===5){s=this.dx
r=this.dy
q=this.fr}else{s=null
r=null
q=null}return H.a([s,r,q],[E.cS])},
fW:function(a){var t,s,r
this.a=!0
t=A.b9(this.y2)
this.m=t
s=this.k4.style
t=t.ab()
s.backgroundColor=t
this.dA()
this.dL(!0)
t=this.f.style
t.display="block"
this.co()
for(t=$.$get$eP(),s=new P.bE(t,t.r,null,null,[null]),s.c=t.e;s.I();){r=s.d
t=J.af(r)
if(!t.R(r,this))t.aB(r)}},
aB:function(a){var t
this.a=!1
t=this.f.style
t.display="none"},
cR:function(a){var t,s,r
t=this.b
J.bp(t,this.y2.ab())
s=this.e.style
r=this.y2.ab()
s.backgroundColor=r
a=document.createEvent("Event")
a.initEvent("change",!0,!0)
t.dispatchEvent(a)
this.aB(0)},
ey:function(){return this.cR(null)},
cP:function(a){this.y2.bH(this.m)
this.aB(0)},
ev:function(){return this.cP(null)},
dA:function(){var t,s
t=A.eQ(J.oF(J.nt(this.b),1))
this.y2=t
s=this.e.style
t=t.ab()
s.backgroundColor=t
this.dL(!0)},
fN:function(){var t,s,r
t=this.x1
t.push(new E.hR(this))
t.push(new E.hS(this))
t.push(new E.hT(this))
s=this.y1
s.push(new E.i0(this))
s.push(new E.i1(this))
s.push(new E.i2(this))
r=this.x2
r.push(new E.i3(this))
r.push(new E.i4(this))
r.push(new E.i5(this))
t.push(new E.i6(this))
t.push(new E.i7(this))
t.push(new E.hU(this))
s.push(new E.hV())
s.push(new E.hW(this))
s.push(new E.hX(this))
r.push(new E.hY(this))
r.push(new E.hZ(this))
r.push(new E.i_(this))},
fp:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=document
s=t.createElement("div")
s.className="colourPicker_anchor"
r=t.createElement("div")
r.className="colourPicker_button"
W.al(r,"click",new E.hq(this),!1,W.aE)
s.appendChild(r)
q=t.createElement("div")
q.className="colourPicker_button_inner colourPicker_button_inner_1"
r.appendChild(q)
p=t.createElement("div")
p.className="colourPicker_button_inner colourPicker_button_inner_2"
r.appendChild(p)
o=t.createElement("div")
o.className="colourPicker_swatch"
r.appendChild(o)
n=a.a3(0,1.15)
m=a.a3(0,0.85)
l=a.a3(0,0.4)
k=r.style
j=""+(b+2)+"px"
k.width=j
j=""+(c+2)+"px"
k.height=j
j=l.ab()
k.borderColor=j
k=q.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j=a.ab()
k.backgroundColor=j
j=n.ab()
k.borderLeftColor=j
j=n.ab()
k.borderTopColor=j
j=m.ab()
k.borderRightColor=j
j=m.ab()
k.borderBottomColor=j
k=p.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j=a.ab()
k.backgroundColor=j
j=m.ab()
k.borderLeftColor=j
j=m.ab()
k.borderTopColor=j
j=n.ab()
k.borderRightColor=j
j=n.ab()
k.borderBottomColor=j
k=o.style
j=""+(b-12)+"px"
k.width=j
j=""+(c-12)+"px"
k.height=j
this.c=s
this.d=r
this.e=o
k=this.b
J.qm(k,s)
j=this.c
t=t.createElement("div")
t.className="colourPicker_hidden"
t.appendChild(k)
j.appendChild(t)},
c9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=document
s=t.createElement("div")
s.className="colourPicker_overlay"
this.c.appendChild(s)
r=t.createElement("div")
r.className="colourPicker_overlay_2"
q=W.aE
W.al(r,"click",new E.hr(),!1,q)
s.appendChild(r)
p=t.createElement("div")
p.className="colourPicker_window"
W.al(p,"click",new E.hs(),!1,q)
s.appendChild(p)
this.r=p
o=W.oI(256,256)
o.className="colourPicker_canvas"
W.al(o,"mousedown",new E.ht(this),!1,q)
this.x=o
p.appendChild(o)
o=E.di(0,1,25,256,!0)
p.appendChild(o.b)
o.cx.aN(this.gf1())
this.y=o
E.aj(o.b,268,0)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Old"
o=n.style
o.textAlign="center"
E.aj(n,57,263)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="New"
o=n.style
o.textAlign="center"
E.aj(n,183,263)
p.appendChild(n)
m=t.createElement("div")
m.className="colourPicker_previewbox"
E.aj(m,4,279)
p.appendChild(m)
o=t.createElement("div")
l=o.style
l.cursor="pointer"
W.al(o,"click",new E.hE(this),!1,q)
this.k4=o
m.appendChild(o)
o=t.createElement("div")
l=o.style
l.left="50%"
this.r1=o
m.appendChild(o)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Red, Green, Blue"
E.aj(n,330,5)
p.appendChild(n)
o=W.aO("number")
o.className="colourPicker_number"
l=J.aa(o)
l.sap(o,"0")
l.sao(o,"255")
l.sar(o,"1")
l=C.h.ga4(o)
W.al(l.a,l.b,new E.hK(this),!1,H.w(l,0))
this.cx=o
E.aj(o,600,20)
p.appendChild(this.cx)
o=E.di(0,1,256,16,!1)
p.appendChild(o.b)
o.cx.aN(new E.hL(this))
this.z=o
E.aj(o.b,330,20)
o=this.ry
o.push(this.z)
l=W.aO("number")
l.className="colourPicker_number"
k=J.aa(l)
k.sap(l,"0")
k.sao(l,"255")
k.sar(l,"1")
k=C.h.ga4(l)
W.al(k.a,k.b,new E.hM(this),!1,H.w(k,0))
this.cy=l
E.aj(l,600,50)
p.appendChild(this.cy)
l=E.di(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aN(new E.hN(this))
this.Q=l
E.aj(l.b,330,50)
o.push(this.Q)
l=W.aO("number")
l.className="colourPicker_number"
k=J.aa(l)
k.sap(l,"0")
k.sao(l,"255")
k.sar(l,"1")
k=C.h.ga4(l)
W.al(k.a,k.b,new E.hO(this),!1,H.w(k,0))
this.db=l
E.aj(l,600,80)
p.appendChild(this.db)
l=E.di(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aN(new E.hP(this))
this.ch=l
E.aj(l.b,330,80)
o.push(this.ch)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hue, Saturation, Value"
E.aj(n,330,115)
p.appendChild(n)
l=W.aO("number")
l.className="colourPicker_number"
k=J.aa(l)
k.sap(l,"0")
k.sao(l,"360")
k.sar(l,"1")
k=C.h.ga4(l)
W.al(k.a,k.b,new E.hQ(this,360),!1,H.w(k,0))
this.fx=l
E.aj(l,600,130)
p.appendChild(this.fx)
l=E.di(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aN(new E.hu(this,360))
this.dx=l
E.aj(l.b,330,130)
o.push(this.dx)
l=W.aO("number")
l.className="colourPicker_number"
k=J.aa(l)
k.sap(l,"0")
k.sao(l,"100")
k.sar(l,"1")
k=C.h.ga4(l)
W.al(k.a,k.b,new E.hv(this),!1,H.w(k,0))
this.fy=l
E.aj(l,600,160)
p.appendChild(this.fy)
l=E.di(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aN(new E.hw(this))
this.dy=l
E.aj(l.b,330,160)
o.push(this.dy)
l=W.aO("number")
l.className="colourPicker_number"
k=J.aa(l)
k.sap(l,"0")
k.sao(l,"100")
k.sar(l,"1")
k=C.h.ga4(l)
W.al(k.a,k.b,new E.hx(this),!1,H.w(k,0))
this.go=l
E.aj(l,600,190)
p.appendChild(this.go)
l=E.di(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.aN(new E.hy(this))
this.fr=l
E.aj(l.b,330,190)
o.push(this.fr)
j=t.createElement("form")
i=W.aO("radio")
o=J.aa(i)
o.sJ(i,"mode")
o=o.ga4(i)
W.al(o.a,o.b,new E.hz(this),!1,H.w(o,0))
j.appendChild(i)
E.aj(i,305,19)
o=this.r2
o.push(i)
h=W.aO("radio")
l=J.aa(h)
l.sJ(h,"mode")
l=l.ga4(h)
W.al(l.a,l.b,new E.hA(this),!1,H.w(l,0))
j.appendChild(h)
E.aj(h,305,49)
o.push(h)
g=W.aO("radio")
l=J.aa(g)
l.sJ(g,"mode")
l=l.ga4(g)
W.al(l.a,l.b,new E.hB(this),!1,H.w(l,0))
j.appendChild(g)
E.aj(g,305,79)
o.push(g)
f=W.aO("radio")
l=J.aa(f)
l.sJ(f,"mode")
l=l.ga4(f)
W.al(l.a,l.b,new E.hC(this),!1,H.w(l,0))
j.appendChild(f)
E.aj(f,305,129)
o.push(f)
e=W.aO("radio")
l=J.aa(e)
l.sJ(e,"mode")
l=l.ga4(e)
W.al(l.a,l.b,new E.hD(this),!1,H.w(l,0))
j.appendChild(e)
E.aj(e,305,159)
o.push(e)
d=W.aO("radio")
l=J.aa(d)
l.sJ(d,"mode")
l=l.ga4(d)
W.al(l.a,l.b,new E.hF(this),!1,H.w(l,0))
j.appendChild(d)
E.aj(d,305,189)
o.push(d)
p.appendChild(j)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="CIEL*a*b"
E.aj(n,330,226)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="L"
E.aj(n,330,245)
p.appendChild(n)
o=W.aO("number")
o.className="colourPicker_number colourPicker_lab"
l=J.aa(o)
l.sap(o,"0")
l.sao(o,"100")
l.sar(o,"0.01")
l=C.h.ga4(o)
W.al(l.a,l.b,new E.hG(this),!1,H.w(l,0))
this.id=o
E.aj(o,344,241)
p.appendChild(this.id)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="a"
E.aj(n,408,245)
p.appendChild(n)
o=W.aO("number")
o.className="colourPicker_number colourPicker_lab"
l=J.aa(o)
l.sap(o,"-127")
l.sao(o,"128")
l.sar(o,"0.01")
l=C.h.ga4(o)
W.al(l.a,l.b,new E.hH(this),!1,H.w(l,0))
this.k1=o
E.aj(o,422,241)
p.appendChild(this.k1)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="b"
E.aj(n,486,245)
p.appendChild(n)
o=W.aO("number")
o.className="colourPicker_number colourPicker_lab"
l=J.aa(o)
l.sap(o,"-127")
l.sao(o,"128")
l.sar(o,"0.01")
l=C.h.ga4(o)
W.al(l.a,l.b,new E.hI(this),!1,H.w(l,0))
this.k2=o
E.aj(o,500,241)
p.appendChild(this.k2)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hex"
E.aj(n,573,226)
p.appendChild(n)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="#"
E.aj(n,573,245)
p.appendChild(n)
o=W.aO("text")
l=J.aa(o)
l.sdv(o,6)
l.sfZ(o,"[\\d|a-f|A-F]{6}")
o.className="colourPicker_hex"
l=C.h.ga4(o)
W.al(l.a,l.b,new E.hJ(this),!1,H.w(l,0))
this.k3=o
E.aj(o,585,241)
p.appendChild(this.k3)
c=t.createElement("button")
c.className="colourPicker_innerButton"
c.textContent="OK"
W.al(c,"click",this.gex(),!1,q)
E.aj(c,570,285)
p.appendChild(c)
b=t.createElement("button")
b.className="colourPicker_innerButton"
b.textContent="Cancel"
W.al(b,"click",this.geu(),!1,q)
E.aj(b,470,285)
p.appendChild(b)
this.f=s
W.al(window,"resize",this.ghc(),!1,W.B)
this.co()},
d_:function(a){var t,s,r,q,p,o,n,m
if(!this.rx)return
$.$get$b2().am(C.i,"a1")
$.$get$b2().ac("pickerDrag")
$.$get$b2().am(C.i,"a2")
t=J.aa(a)
s=t.gb5(a)
s=s.gV(s)
r=this.x
r.toString
q=document
r=W.eW(r,q.documentElement).a
if(typeof s!=="number")return s.az()
if(typeof r!=="number")return H.az(r)
t=t.gb5(a)
t=t.gW(t)
p=this.x
p.toString
q=W.eW(p,q.documentElement).b
if(typeof t!=="number")return t.az()
if(typeof q!=="number")return H.az(q)
$.$get$b2().am(C.i,"a3")
o=C.c.M(s-r-1,0,255)
n=C.c.M(t-q-1,0,255)
$.$get$b2().am(C.i,"a4")
m=this.bR()
$.$get$b2().am(C.i,"a5")
m[0].y=o/255
m[1].y=1-n/255
$.$get$b2().am(C.i,"a6")
this.d4()
$.$get$b2().am(C.i,"a7")},
d5:function(a){$.$get$b2().ac("setFromPicker")
this.bR()[2].y=this.y.y;($.c6>=3?this.gdY():this.gdZ()).$1(!0)},
d4:function(){return this.d5(null)},
dC:function(a){var t,s,r,q
t=window.innerWidth
s=window.innerHeight
r=this.f.style
q=H.t(t)+"px"
r.width=q
q=H.t(s)+"px"
r.height=q
r=this.r
q=r.style
r=r.clientWidth
if(typeof t!=="number")return t.az()
if(typeof r!=="number")return H.az(r)
r=""+C.b.a8(t-r,2)+"px"
q.left=r
r=this.r.clientHeight
if(typeof s!=="number")return s.az()
if(typeof r!=="number")return H.az(r)
r=""+C.b.a8(s-r,2)+"px"
q.top=r},
co:function(){return this.dC(null)},
sh2:function(a){return this.rx=a}}
E.hR.prototype={
$1:function(a){var t=A.b9(this.a.y2)
t.b=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hS.prototype={
$1:function(a){var t=A.b9(this.a.y2)
t.c=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hT.prototype={
$1:function(a){var t=A.b9(this.a.y2)
t.d=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i0.prototype={
$1:function(a){var t=A.b9(this.a.y2)
t.b=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i1.prototype={
$1:function(a){var t=A.b9(this.a.y2)
t.c=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i2.prototype={
$1:function(a){var t=A.b9(this.a.y2)
t.d=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i3.prototype={
$2:function(a,b){var t=A.b9(this.a.y2)
t.d=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.M(C.c.N(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i4.prototype={
$2:function(a,b){var t=A.b9(this.a.y2)
t.d=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
t.b=C.b.M(C.c.N(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i5.prototype={
$2:function(a,b){var t=A.b9(this.a.y2)
t.b=C.b.M(C.c.N(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.M(C.c.N(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i6.prototype={
$1:function(a){var t=A.b9(this.a.y2)
if(t.e)t.a9()
t.f=a
t.av()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i7.prototype={
$1:function(a){var t=A.b9(this.a.y2)
if(t.e)t.a9()
t.r=a
t.av()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hU.prototype={
$1:function(a){var t=A.b9(this.a.y2)
if(t.e)t.a9()
t.x=a
t.av()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hV.prototype={
$1:function(a){var t=A.by(0,0,0,255)
t.aP(a,1,1)
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hW.prototype={
$1:function(a){var t=A.b9(this.a.y2)
if(t.e)t.a9()
t.r=a
t.av()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hX.prototype={
$1:function(a){var t=A.b9(this.a.y2)
if(t.e)t.a9()
t.x=a
t.av()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hY.prototype={
$2:function(a,b){var t,s
t=this.a.dx.y
s=A.by(0,0,0,255)
s.aP(t,a,b)
return s},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.hZ.prototype={
$2:function(a,b){var t,s
t=this.a.dy.y
s=A.by(0,0,0,255)
s.aP(a,t,b)
return s},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i_.prototype={
$2:function(a,b){var t,s
t=this.a.fr.y
s=A.by(0,0,0,255)
s.aP(a,b,t)
return s},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.hq.prototype={
$1:function(a){this.a.fW(0)
J.oE(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.aE]}}}
E.hr.prototype={
$1:function(a){J.oE(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.aE]}}}
E.hs.prototype={
$1:function(a){return J.qs(a)},
$S:function(){return{func:1,args:[W.B]}}}
E.ht.prototype={
$1:function(a){var t
$.$get$b2().ac("PICKER CLICK")
t=this.a
t.rx=!0
$.$get$b2().am(C.i,"click")
t.d_(a)},
$S:function(){return{func:1,args:[W.aE]}}}
E.hE.prototype={
$1:function(a){var t=this.a
t.y2.bH(t.m)
t.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hK.prototype={
$1:function(a){var t,s,r
t=this.a
E.cp(t.cx,0,255,0)
s=t.z
r=J.c2(t.cx)
if(typeof r!=="number")return r.P()
s.y=r/255
t.aJ()},
$S:function(){return{func:1,args:[W.B]}}}
E.hL.prototype={
$1:function(a){var t=this.a
J.bp(t.cx,C.b.E(C.c.a5(t.z.y*255)))
t.aJ()},
$S:function(){return{func:1,args:[W.B]}}}
E.hM.prototype={
$1:function(a){var t,s,r
t=this.a
E.cp(t.cy,0,255,0)
s=t.Q
r=J.c2(t.cy)
if(typeof r!=="number")return r.P()
s.y=r/255
t.aJ()},
$S:function(){return{func:1,args:[W.B]}}}
E.hN.prototype={
$1:function(a){var t=this.a
J.bp(t.cy,C.b.E(C.c.a5(t.Q.y*255)))
t.aJ()},
$S:function(){return{func:1,args:[W.B]}}}
E.hO.prototype={
$1:function(a){var t,s,r
t=this.a
E.cp(t.db,0,255,0)
s=t.ch
r=J.c2(t.db)
if(typeof r!=="number")return r.P()
s.y=r/255
t.aJ()},
$S:function(){return{func:1,args:[W.B]}}}
E.hP.prototype={
$1:function(a){var t=this.a
J.bp(t.db,C.b.E(C.c.a5(t.ch.y*255)))
t.aJ()},
$S:function(){return{func:1,args:[W.B]}}}
E.hQ.prototype={
$1:function(a){var t,s,r,q
t=this.a
s=this.b
E.cp(t.fx,0,s,0)
r=t.dx
q=J.c2(t.fx)
if(typeof q!=="number")return q.P()
r.y=q/s
t.aI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hu.prototype={
$1:function(a){var t=this.a
J.bp(t.fx,C.b.E(C.c.a5(t.dx.y*this.b)))
t.aI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hv.prototype={
$1:function(a){var t,s,r
t=this.a
E.cp(t.fy,0,100,0)
s=t.dy
r=J.c2(t.fy)
if(typeof r!=="number")return r.P()
s.y=r/100
t.aI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hw.prototype={
$1:function(a){var t=this.a
J.bp(t.fy,C.b.E(C.c.a5(t.dy.y*100)))
t.aI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hx.prototype={
$1:function(a){var t,s,r
t=this.a
E.cp(t.go,0,100,0)
s=t.fr
r=J.c2(t.go)
if(typeof r!=="number")return r.P()
s.y=r/100
t.aI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hy.prototype={
$1:function(a){var t=this.a
J.bp(t.go,C.b.E(C.c.a5(t.fr.y*100)))
t.aI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hz.prototype={
$1:function(a){$.c6=0
this.a.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hA.prototype={
$1:function(a){$.c6=1
this.a.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hB.prototype={
$1:function(a){$.c6=2
this.a.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hC.prototype={
$1:function(a){$.c6=3
this.a.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hD.prototype={
$1:function(a){$.c6=4
this.a.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hF.prototype={
$1:function(a){$.c6=5
this.a.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.hG.prototype={
$1:function(a){var t=this.a
E.cp(t.id,0,100,2)
t.bI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hH.prototype={
$1:function(a){var t=this.a
E.cp(t.k1,-127,128,2)
t.bI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hI.prototype={
$1:function(a){var t=this.a
E.cp(t.k2,-127,128,2)
t.bI()},
$S:function(){return{func:1,args:[W.B]}}}
E.hJ.prototype={
$1:function(a){var t,s
t=this.a
s=A.eQ(J.nt(t.k3))
t.y2.bH(s)
t.af()},
$S:function(){return{func:1,args:[W.B]}}}
E.cS.prototype={
ct:function(a){var t,s,r,q
this.a.ac("update: silent: "+a)
t=this.r
s=(this.y-t)/(this.x-t)
if(this.z){r=C.c.N(this.f*(1-s))
t=this.c.style
q=""+r+"px"
t.top=q}else{r=C.c.N(this.e*s)
t=this.c.style
q=""+r+"px"
t.left=q}if(!a){t=this.ch
q=W.ra("update",!0,!0,this)
if(t.b>=4)H.aB(t.cK())
t.aQ(q)}},
af:function(){return this.ct(!1)},
eQ:function(a){this.a.ac("SLIDER CLICK")
this.Q=!0
this.cD(a)},
eS:function(a){this.Q=!1},
eR:function(a){if(!this.Q)return
this.cD(a)},
cD:function(a){var t,s,r,q,p,o
t=J.aa(a)
s=t.gb5(a)
s=s.gV(s)
r=this.b
r.toString
q=document
r=W.eW(r,q.documentElement).a
if(typeof s!=="number")return s.az()
if(typeof r!=="number")return H.az(r)
t=t.gb5(a)
t=t.gW(t)
p=this.b
p.toString
q=W.eW(p,q.documentElement).b
if(typeof t!=="number")return t.az()
if(typeof q!=="number")return H.az(q)
o=this.z?C.c.M(1-(t-q)/this.f,0,1):C.d.M((s-r)/this.e,0,1)
t=this.r
this.y=o*(this.x-t)+t
this.af()},
dk:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
t.toString
s=t.getContext("2d")
t=this.d
r=P.pZ(s.getImageData(0,0,t.width,t.height))
for(t=J.aa(r),q=this.z,p=0;p<this.e;++p)for(o=0;n=this.f,o<n;++o){m=this.e
l=(o*m+p)*4
k=a.$1(q?1-o/n:p/m)
n=t.gal(r)
m=k.gcn()
if(l>=n.length)return H.L(n,l)
n[l]=m
m=t.gal(r)
n=l+1
j=k.c
if(n>=m.length)return H.L(m,n)
m[n]=j
j=t.gal(r)
n=l+2
m=k.d
if(n>=j.length)return H.L(j,n)
j[n]=m
m=t.gal(r)
n=l+3
if(n>=m.length)return H.L(m,n)
m[n]=255}C.n.dz(s,r,0,0)},
ea:function(a,b,c,d,e){var t,s,r,q
t=W.B
s=new P.fQ(null,0,null,null,null,null,null,[t])
this.ch=s
this.cx=new P.fR(s,[t])
this.y=this.r
t=document
s=t.createElement("div")
s.className="fancySlider_bar"
r=s.style
q=""+this.e+"px"
r.width=q
r=s.style
q=""+this.f+"px"
r.height=q
W.al(s,"mousedown",this.geP(),!1,W.aE)
this.b=s
s=this.e
s=W.oI(this.f,s)
s.className="fancySlider_background"
this.d=s
t=t.createElement("div")
t.className="fancySlider_slider_"+(this.z?"vertical":"horizontal")
this.c=t
this.b.appendChild(this.d)
this.b.appendChild(this.c)
this.af()
$.$get$iJ().j(0,this)
E.oL()}}
E.ho.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eP(),s=[null],r=new P.bE(t,t.r,null,null,s),r.c=t.e;r.I();)r.d.sh2(!1)
for(t=$.$get$iJ(),s=new P.bE(t,t.r,null,null,s),s.c=t.e;s.I();)s.d.eS(a)},
$S:function(){return{func:1,args:[W.aE]}}}
E.hp.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eP(),s=[null],r=new P.bE(t,t.r,null,null,s),r.c=t.e;r.I();)r.d.d_(a)
for(t=$.$get$iJ(),s=new P.bE(t,t.r,null,null,s),s.c=t.e;s.I();)s.d.eR(a)},
$S:function(){return{func:1,args:[W.aE]}}}
F.dy.prototype={
E:function(a){return this.b}}
F.dz.prototype={
am:function(a,b){F.td(a).$1("("+this.c+")["+H.t(C.a.gfU(a.b.split(".")))+"]: "+H.t(b))},
ca:function(a,b){this.am(C.t,b)},
ac:function(a){},
gJ:function(a){return this.c}}
A.kf.prototype={
w:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.aa(b)?t.w(0,b):$.$get$o5()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.aa(b)?t.w(0,b):$.$get$o5()}throw H.A(P.dS(b,"'name' should be a String name or int id only",null))},
gO:function(a){var t=this.a
t=t.gag(t)
return new H.fv(null,J.bv(t.a),t.b,[H.w(t,0),H.w(t,1)])},
i:function(a,b,c,d){var t,s
t=this.a
if(t.aa(b))this.a7(0,b)
s=this.eU()
if(typeof s!=="number")return s.hu()
if(s>=256)throw H.A(P.dS(s,"Palette colour ids must be in the range 0-255",null))
t.h(0,b,c)
this.b.h(0,s,c)
this.c.h(0,b,s)
this.d.h(0,s,b)},
a7:function(a,b){var t,s,r
t=this.a
if(!t.aa(b))return
s=this.c
r=s.w(0,b)
t.a7(0,b)
this.b.a7(0,r)
s.a7(0,b)
this.d.a7(0,r)},
eU:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.aa(s))return s;++s}}}
A.fB.prototype={
$asG:function(){return[A.bG]},
$isG:1}
A.fE.prototype={
cG:function(a){var t=a==null
this.a=t?C.w:P.uy(a)
if(!t)this.b=a+1},
h0:function(a,b){var t
if(a.ga1(a))return
t=a.hv(this.a.bh())
return t},
h_:function(a){return this.h0(a,!0)}}
D.la.prototype={
$1:function(a){a.gh1()
return!0},
$S:function(){return{func:1,args:[D.cI]}}}
D.cI.prototype={
E:function(a){return this.a},
gJ:function(a){return this.a},
gh1:function(){return this.d}}
A.fK.prototype={
fb:function(a,b){var t,s,r,q,p,o,n,m,l
C.a.b3(this.b,a)
for(t=J.bv(a);t.I();){s=t.gL()
for(r=s.gH().gbf(),r=r.gO(r);r.I();){q=r.gL()
p=J.aa(q)
if(!this.d.aa(p.gJ(q))){this.d.h(0,p.gJ(q),q)
this.dd(p.gJ(q))}}for(r=s.ge2().gbf(),r=r.gO(r);r.I();){o=r.gL()
if(!this.d.aa(o)){p=this.d
n=new D.cI(o,"","",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$oe().push(n)
p.h(0,o,n)
this.dd(o)}if(!s.f.aa(this.d.w(0,o)))s.f.h(0,this.d.w(0,o),0)
p=s.f
n=this.d.w(0,o)
m=p.w(0,n)
l=s.r.w(0,o)
if(typeof m!=="number")return m.Y()
if(typeof l!=="number")return H.az(l)
p.h(0,n,m+l)}}this.af()},
af:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.c1)(t),++r)t[r].fi()
this.aX()},
aX:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=document
s=t.querySelector("#canvas")
r=J.qj(s)
r.fillStyle="#FFFFFF"
r.fillRect(0,0,s.width,s.height)
if(this.b.length!==0){q=this.c
q=new H.bD(q,new A.l5(),[H.w(q,0)])
q=!q.gO(q).I()}else q=!0
if(q)return
p=H.eJ(t.querySelector("input[type=radio][name=stat]:checked"),"$iseo").value
o=p==="*"?null:this.d.w(0,p)
for(t=this.c,q=t.length,n=0,m=0,l=0,k=0,j=0;j<t.length;t.length===q||(0,H.c1)(t),++j){i=t[j]
if(i.b!==!0)continue
n+=J.cN(i.x)
m=Math.max(m,i.z)
l=Math.min(l,H.dN(i.dO(o)))
k=Math.max(k,H.dN(i.dN(o)))}if(n===0)return
q=this.a
q.ac("stat: "+H.t(o)+", total points: "+n+", turns: "+H.t(m)+", min: "+H.t(l)+", max: "+H.t(k))
h=s.width
if(typeof h!=="number")return h.az()
g=h-50
h=s.height
if(typeof h!=="number")return h.az()
f=h-50
e=g/(m-1)
d=Math.max(k-l,5)
c=A.uQ(l,k,f)
if(k<=0)b=0
else{if(typeof c!=="number")return H.az(c)
b=C.d.c6(k/c)+1}if(l>=0)a=0
else{if(typeof c!=="number")return H.az(c)
a=C.d.c6(Math.abs(l)/c)+1}if(typeof c!=="number")return H.az(c)
a0=Math.max(C.d.c6(d/c),b+a)
a1=f/(c*a0)
a2=C.c.a5(c*a*a1)
q.ac("grid increment: "+H.t(c))
q.ac("w: "+g+", h: "+f+", xinc: "+H.t(e)+", yinc: "+H.t(f/d)+", yrange: "+H.t(d))
r.textAlign="center"
for(q=f+25,h=q+12,a3=0;a3<m;){r.fillStyle="#E5E5E5"
a4=C.d.a5(e*a3)+25
r.fillRect(a4,25,1,f)
r.fillStyle="#555555";++a3
r.fillText(A.q0(a3),a4,h)}r.textAlign="right"
for(h=f/a0,a3=0;a3<=a0;++a3){r.fillStyle="#E5E5E5"
a5=C.d.a5(h*a3)
r.fillRect(25,a5+25,g,1)
r.fillStyle="#555555"
r.fillText(A.q0((a3-a)*c),23,q-a5+5)}r.fillStyle="#555555"
q=25+f
r.fillRect(25,q-h*a,g,1)
r.fillRect(25,25,1,f)
for(h=t.length,q-=a2,j=0;j<t.length;t.length===h||(0,H.c1)(t),++j){i=t[j]
if(i.b!==!0)continue
for(a6=0,a7=!1,a8=1;a8<=m;++a8){a4=J.dR(i.x,new A.l6(a8))
if(a4.ga1(a4))continue
a9=J.q9(new H.dA(a4,new A.l7(o),[H.w(a4,0),null]).h8(0,new A.l8()),a4.gK(a4))
b0=C.d.a5(e*(a8-1))+25
a5=q-J.qn(J.no(a9,a1))
a4=a4.gK(a4)
b1=i.Q
r.strokeStyle="rgba("+H.t(i.c.b)+","+H.t(i.c.c)+","+H.t(i.c.d)+","+C.d.hk(a4/b1*0.8+0.2,2)
r.strokeRect(b0-0.5,a5-0.5,2,2)
if(a8>1&&!0){a4=C.d.a5(e*(a8-2))
r.beginPath()
r.moveTo(a4+25+0.5,a6+0.5)
r.lineTo(b0+0.5,a5+0.5)
r.stroke()}a6=a5
a7=!0}}},
dc:function(a){var t,s,r,q,p,o,n,m,l
t=document
s=H.eJ(t.querySelector("#select_class"),"$isch").value
r=H.eJ(t.querySelector("#select_aspect"),"$isch").value
q=H.eJ(t.querySelector("#select_interest1"),"$isch").value
p=H.eJ(t.querySelector("#select_interest2"),"$isch").value
o=s==="*"?null:T.uh(s)
n=r==="*"?null:L.r_(r)
m=q==="*"?null:B.p3(q)
l=A.uk(this,o,n,m,p==="*"?null:B.p3(p))
this.c.push(l)
l.c9(0)
t.querySelector("#line_container").appendChild(l.y)
this.af()},
fe:function(){return this.dc(null)},
dd:function(a){var t,s,r,q,p,o,n
t=this.d.w(0,a)
s=document
r=s.querySelector("#stats_container")
q=s.createElement("div")
q.className="selection_block"
p=W.aO("radio")
o=J.aa(p)
o.sJ(p,"stat")
n=J.aa(t)
o.sZ(p,n.gJ(t))
p.id="stat_"+H.t(n.gJ(t))
o=o.gcf(p)
W.al(o.a,o.b,new A.l0(this),!1,H.w(o,0))
q.appendChild(p)
s=s.createElement("label")
s.htmlFor="stat_"+H.t(n.gJ(t))
s.textContent=n.gJ(t)
q.appendChild(s)
r.appendChild(q)},
ee:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=document
s=J.oC(t.querySelector("#add_line"))
W.al(s.a,s.b,this.gfd(),!1,H.w(s,0))
r=t.querySelector("#select_class")
s=T.uf()
q=P.cB(s,!0,H.w(s,0))
C.a.aZ(q,new A.l1())
for(s=q.length,p=0;p<q.length;q.length===s||(0,H.c1)(q),++p){o=J.bw(q[p])
n=W.kb(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_aspect")
s=L.qY()
m=P.cB(s,!0,H.w(s,0))
C.a.aZ(m,new A.l2())
for(s=m.length,p=0;p<m.length;m.length===s||(0,H.c1)(m),++p){o=J.bw(m[p])
n=W.kb(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_interest1")
l=t.querySelector("#select_interest2")
s=B.rB()
k=P.cB(s,!0,H.w(s,0))
C.a.aZ(k,new A.l3())
for(s=k.length,p=0;p<k.length;k.length===s||(0,H.c1)(k),++p){j=k[p]
o=J.aa(j)
n=o.gJ(j)
i=W.kb(n,n,null,!1)
i.textContent=n
r.appendChild(i)
o=o.gJ(j)
i=W.kb(o,o,null,!1)
i.textContent=o
l.appendChild(i)}t=J.oC(t.querySelector("#stat_average"))
W.al(t.a,t.b,new A.l4(this),!1,H.w(t,0))},
gH:function(){return this.d}}
A.l1.prototype={
$2:function(a,b){return J.h3(J.bw(a),J.bw(b))},
$S:function(){return{func:1,args:[T.cG,T.cG]}}}
A.l2.prototype={
$2:function(a,b){return J.h3(J.bw(a),J.bw(b))},
$S:function(){return{func:1,args:[L.co,L.co]}}}
A.l3.prototype={
$2:function(a,b){return J.h3(J.bw(a),J.bw(b))},
$S:function(){return{func:1,args:[B.cx,B.cx]}}}
A.l4.prototype={
$1:function(a){return this.a.aX()},
$S:function(){return{func:1,args:[W.B]}}}
A.l5.prototype={
$1:function(a){return a.gfA()},
$S:function(){return{func:1,args:[A.ep]}}}
A.l6.prototype={
$1:function(a){return J.an(a.gbF(),this.a)},
$S:function(){return{func:1,args:[E.aY]}}}
A.l7.prototype={
$1:function(a){return a.dP(this.a)},
$S:function(){return{func:1,args:[E.aY]}}}
A.l8.prototype={
$2:function(a,b){return J.dQ(a,b)},
$S:function(){return{func:1,args:[P.x,P.x]}}}
A.l0.prototype={
$1:function(a){return this.a.aX()},
$S:function(){return{func:1,args:[W.B]}}}
A.ep.prototype={
c9:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="selection_block"
r=W.aO("checkbox")
q=J.aa(r)
q.saV(r,!0)
q=q.ga4(r)
W.al(q.a,q.b,new A.kY(this,r),!1,H.w(q,0))
s.appendChild(r)
p=W.aO("color")
q=J.aa(p)
q.sZ(p,this.c.ab())
q=q.ga4(p)
W.al(q.a,q.b,new A.kZ(this,p),!1,H.w(q,0))
s.appendChild(p)
E.r7(p,null,14540253,25,48)
q=t.createElement("span")
o=this.d
o=H.t(o==null?"[Any class]":o)+" of "
n=this.e
o=o+H.t(n==null?"[Any aspect]":n)+" ["
n=this.f
o=o+H.t(n==null?"Any interest":J.bw(n))+", "
n=this.r
q.textContent=o+H.t(n==null?"Any interest":J.bw(n))+"]"
s.appendChild(q)
t=t.createElement("button")
t.textContent="Remove"
W.al(t,"click",new A.l_(this),!1,W.aE)
s.appendChild(t)
this.y=s},
fi:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=D.cI
s=P.x
this.ch=P.cd(t,s)
this.cx=P.cd(t,s)
this.cy=0
this.db=0
for(t=this.a,s=t.d,s=s.gag(s),s=s.gO(s);s.I();){r=s.gL()
this.ch.h(0,r,0)
this.cx.h(0,r,0)}for(s=J.bv(this.x);s.I();){q=s.gL()
this.z=Math.max(this.z,H.dN(q.gbF()))}for(p=1;p<=this.z;++p){o=J.dR(this.x,new A.kS(p))
this.Q=Math.max(this.Q,o.gK(o))
for(s=t.d,s=s.gag(s),s=s.gO(s),n=o.a,m=J.eI(n),l=o.b,k=[H.w(o,0)],j=0;s.I();){r=s.gL()
for(i=m.gO(n),h=new H.eu(i,l,k),g=0;h.I();){q=i.gL()
f=J.np(q.gH(),r)
if(typeof f!=="number")return H.az(f)
g+=f
f=J.np(q.gH(),r)
if(typeof f!=="number")return H.az(f)
j+=f}g/=o.gK(o)
i=this.ch
i.h(0,r,Math.min(H.dN(i.w(0,r)),g))
i=this.cx
i.h(0,r,Math.max(H.dN(i.w(0,r)),g))}s=t.d
j/=s.gK(s)*o.gK(o)
this.cy=Math.min(H.dN(this.cy),j)
this.db=Math.max(H.dN(this.db),j)}t.a.ac(H.t(this.d)+" of "+H.t(this.e)+", "+H.t(this.f)+" + "+H.t(this.r)+": maxturn: "+H.t(this.z)+", minima: "+J.bq(this.ch)+", maxima: "+J.bq(this.cx))},
dO:function(a){if(a!=null)return this.ch.w(0,a)
return this.cy},
dN:function(a){if(a!=null)return this.cx.w(0,a)
return this.db},
ed:function(a,b,c,d,e){var t,s,r,q
t=this.a.b
this.x=t
if(this.d!=null){t=C.a.cw(t,new A.kT(this))
this.x=t}s=this.e
r=s!=null
if(r){t=J.dR(t,new A.kU(this))
this.x=t}q=this.f==null
if(!q||this.r!=null){q=!q
if(q&&this.r!=null)this.x=J.dR(t,new A.kV(this))
else if(q)this.x=J.dR(t,new A.kW(this))
else if(this.r!=null)this.x=J.dR(t,new A.kX(this))}if(r)this.c=A.b9(s.gU().w(0,$.T))
else{t=$.$get$nj().a.bh()
s=$.$get$nj().a.bh()
r=$.$get$nj().a.bh()
q=A.by(0,0,0,255)
q.aP(t,s*0.3+0.7,r*0.3+0.7)
this.c=q}},
gfA:function(){return this.b},
gcB:function(){return this.d},
gaL:function(){return this.e},
gb8:function(){return this.f},
gb9:function(){return this.r}}
A.kT.prototype={
$1:function(a){return J.an(a.gcB(),this.a.d)},
$S:function(){return{func:1,args:[E.aY]}}}
A.kU.prototype={
$1:function(a){return J.an(a.gaL(),this.a.e)},
$S:function(){return{func:1,args:[E.aY]}}}
A.kV.prototype={
$1:function(a){var t,s
t=this.a
s=t.f
if(!(J.an(a.gb8(),s)&&J.an(a.gb9(),t.r)))t=J.an(a.gb8(),t.r)&&J.an(a.gb9(),s)
else t=!0
return t},
$S:function(){return{func:1,args:[E.aY]}}}
A.kW.prototype={
$1:function(a){var t=this.a.f
return J.an(a.gb8(),t)||J.an(a.gb9(),t)},
$S:function(){return{func:1,args:[E.aY]}}}
A.kX.prototype={
$1:function(a){var t=this.a.r
return J.an(a.gb8(),t)||J.an(a.gb9(),t)},
$S:function(){return{func:1,args:[E.aY]}}}
A.kY.prototype={
$1:function(a){var t,s
t=this.a
s=J.qi(this.b)
t.b=s
t=t.a
t.a.am(C.i,"Enabled: "+H.t(s))
t.aX()},
$S:function(){return{func:1,args:[W.B]}}}
A.kZ.prototype={
$1:function(a){var t=this.a
t.c=A.eQ(J.oF(J.nt(this.b),1))
t.a.aX()},
$S:function(){return{func:1,args:[W.B]}}}
A.l_.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.a
C.a.a7(s.c,t)
t=t.y
r=t.parentNode
if(r!=null)r.removeChild(t)
s.aX()},
$S:function(){return{func:1,args:[W.B]}}}
A.kS.prototype={
$1:function(a){return J.an(a.gbF(),this.a)},
$S:function(){return{func:1,args:[E.aY]}}}
E.aY.prototype={
dP:function(a){var t,s,r
if(a!=null)return this.f.w(0,a)
for(t=this.f,t=t.gag(t),t=t.gO(t),s=0;t.I();){r=t.gL()
if(typeof r!=="number")return H.az(r)
s+=r}t=this.f
if(t.ga1(t))t=0
else{t=this.f
t=s/t.gK(t)}return t},
gbF:function(){return this.a},
gcB:function(){return this.b},
gaL:function(){return this.c},
gb8:function(){return this.d},
gb9:function(){return this.e},
gH:function(){return this.f},
ge2:function(){return this.r}}
Q.bZ.prototype={
k:function(a,b){return b},
E:function(a){return J.bq(this.gbC())},
aj:function(a,b){return Q.oj(this,b,H.am(this,"bZ",0),null)},
a6:function(a,b){return Q.oi(this,!1,!0,null,H.am(this,"bZ",0))},
ak:function(a){return this.a6(a,!0)},
$isG:1,
$asG:null}
Q.lI.prototype={
gbC:function(){return this.b},
w:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.L(t,b)
return J.ns(t[b])},
h:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.L(t,b)
t[b]=new Q.e(c,s,this.$ti)},
gK:function(a){return this.b.length},
E:function(a){return P.fn(this.b,"[","]")},
aj:function(a,b){return Q.oj(this,b,H.w(this,0),null)},
a6:function(a,b){return Q.oi(this,!1,!0,null,H.w(this,0))},
ak:function(a){return this.a6(a,!0)},
eg:function(a,b,c){var t,s
this.a=a
t=[[Q.e,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fM.prototype={$asbZ:null,$asG:null,$asa8:null,$asa6:null,$isa8:1,$isa6:1,$isG:1}
Q.e.prototype={
E:function(a){return"("+H.t(this.a)+" @ "+H.t(this.b)+")"},
gbe:function(a){return this.a},
ghs:function(){return this.b}}
Q.da.prototype={
gbC:function(){return this.b},
gO:function(a){var t=new Q.lH(null,[H.am(this,"da",0)])
t.a=J.bv(this.b)
return t},
gK:function(a){return J.cN(this.b)},
E:function(a){return J.bq(this.b)},
aj:function(a,b){return Q.oj(this,b,H.am(this,"da",0),null)},
a6:function(a,b){return Q.oi(this,!1,!0,null,H.am(this,"da",0))},
ak:function(a){return this.a6(a,!0)}}
Q.et.prototype={$asbZ:null,$asG:null,$isG:1}
Q.lH.prototype={
gL:function(){return J.ns(this.a.gL())},
I:function(){return this.a.I()}}
Q.fN.prototype={
$asda:function(a,b){return[b]},
$aset:function(a,b){return[b]},
$asbZ:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
Q.lJ.prototype={
$1:function(a){return new Q.e(this.c.$1(J.ns(a)),a.ghs(),[this.b])},
$S:function(){return H.n3(function(a,b){return{func:1,args:[[Q.e,a]]}},this,"fN")}}
J.M.prototype.e5=J.M.prototype.E
J.ed.prototype.e6=J.ed.prototype.E
P.bP.prototype.e7=P.bP.prototype.aQ
P.bP.prototype.e8=P.bP.prototype.bo;(function installTearOffs(){installTearOff(H.dI.prototype,"gfT",0,0,0,null,["$0"],["bB"],1)
installTearOff(H.c_.prototype,"gdQ",0,0,0,null,["$1"],["ah"],5)
installTearOff(H.db.prototype,"gfu",0,0,0,null,["$1"],["aD"],5)
installTearOff(P,"uL",1,0,0,null,["$1"],["ur"],4)
installTearOff(P,"uM",1,0,0,null,["$1"],["us"],4)
installTearOff(P,"uN",1,0,0,null,["$1"],["ut"],4)
installTearOff(P,"pY",1,0,0,null,["$0"],["uI"],1)
installTearOff(P,"uP",1,0,0,null,["$2","$1"],["pP",function(a){return P.pP(a,null)}],6)
installTearOff(P,"uO",1,0,0,null,["$0"],["uG"],1)
installTearOff(P.b1.prototype,"gbO",0,0,0,null,["$2","$1"],["as","ew"],6)
var t
installTearOff(t=P.fS.prototype,"gbZ",0,0,0,null,["$0"],["aT"],1)
installTearOff(t,"gc_",0,0,0,null,["$0"],["aU"],1)
installTearOff(t=P.bP.prototype,"gbZ",0,0,0,null,["$0"],["aT"],1)
installTearOff(t,"gc_",0,0,0,null,["$0"],["aU"],1)
installTearOff(t=P.ey.prototype,"gbZ",0,0,0,null,["$0"],["aT"],1)
installTearOff(t,"gc_",0,0,0,null,["$0"],["aU"],1)
installTearOff(t,"geF",0,0,0,null,["$1"],["eG"],function(){return H.n3(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"ey")})
installTearOff(t,"geJ",0,0,0,null,["$2"],["eK"],9)
installTearOff(t,"geH",0,0,0,null,["$0"],["eI"],1)
installTearOff(P,"uV",1,0,0,null,["$2"],["r9"],15)
installTearOff(P,"uW",1,0,0,null,["$1"],["ni"],2)
installTearOff(t=W.eS.prototype,"gai",0,1,0,null,["$1"],["ca"],2)
installTearOff(t,"gfM",0,0,0,null,["$1"],["dt"],2)
installTearOff(t,"gbF",0,0,0,null,["$1"],["hh"],10)
installTearOff(t,"ghq",0,0,0,null,["$1"],["hr"],2)
installTearOff(W.dh.prototype,"gbe",0,1,0,null,["$1"],["aM"],11)
installTearOff(W.dq.prototype,"gbe",0,1,0,null,["$1"],["aM"],12)
installTearOff(W.f9.prototype,"gbe",0,1,0,null,["$1"],["aM"],7)
installTearOff(W.ch.prototype,"gbe",0,1,0,null,["$1"],["aM"],7)
installTearOff(R,"d7",1,0,0,null,["$1"],["tK"],0)
installTearOff(R,"pu",1,0,0,null,["$1"],["ty"],0)
installTearOff(R,"oa",1,0,0,null,["$1"],["tJ"],0)
installTearOff(R,"aF",1,0,0,null,["$1"],["tI"],0)
installTearOff(R,"o9",1,0,0,null,["$1"],["tH"],0)
installTearOff(R,"pw",1,0,0,null,["$1"],["tF"],0)
installTearOff(R,"en",1,0,0,null,["$1"],["tE"],0)
installTearOff(R,"d6",1,0,0,null,["$1"],["tB"],0)
installTearOff(R,"cE",1,0,0,null,["$1"],["tD"],0)
installTearOff(R,"dC",1,0,0,null,["$1"],["tG"],0)
installTearOff(R,"o8",1,0,0,null,["$1"],["tC"],0)
installTearOff(R,"n",1,0,0,null,["$1"],["tz"],0)
installTearOff(R,"pv",1,0,0,null,["$1"],["tA"],0)
installTearOff(t=E.dW.prototype,"gdZ",0,0,0,null,["$1","$0"],["cE","aJ"],8)
installTearOff(t,"gdY",0,0,0,null,["$1","$0"],["cC","aI"],8)
installTearOff(t,"gex",0,0,0,null,["$1","$0"],["cR","ey"],3)
installTearOff(t,"geu",0,0,0,null,["$1","$0"],["cP","ev"],3)
installTearOff(t,"gf1",0,0,0,null,["$1","$0"],["d5","d4"],3)
installTearOff(t,"ghc",0,0,0,null,["$1","$0"],["dC","co"],3)
installTearOff(E.cS.prototype,"geP",0,0,0,null,["$1"],["eQ"],13)
installTearOff(F.dz.prototype,"gai",0,1,0,null,["$1"],["ca"],2)
installTearOff(A,"q7",1,0,0,null,["$0"],["v6"],1)
installTearOff(t=A.fK.prototype,"gfa",0,0,0,null,["$2"],["fb"],14)
installTearOff(t,"gfd",0,0,0,null,["$1","$0"],["dc","fe"],3)})();(function inheritance(){inherit(P.av,null)
var t=P.av
inherit(H.o_,t)
inherit(J.M,t)
inherit(J.h9,t)
inherit(P.G,t)
inherit(H.fu,t)
inherit(P.fp,t)
inherit(H.f7,t)
inherit(H.dg,t)
inherit(H.mw,t)
inherit(H.dI,t)
inherit(H.m1,t)
inherit(H.dc,t)
inherit(H.mv,t)
inherit(H.lU,t)
inherit(H.dD,t)
inherit(H.lw,t)
inherit(H.c4,t)
inherit(H.c_,t)
inherit(H.db,t)
inherit(H.ks,t)
inherit(H.lA,t)
inherit(P.cR,t)
inherit(H.dZ,t)
inherit(H.fX,t)
inherit(H.cL,t)
inherit(H.l,t)
inherit(H.jC,t)
inherit(H.jE,t)
inherit(H.ft,t)
inherit(H.my,t)
inherit(H.lN,t)
inherit(H.li,t)
inherit(H.mS,t)
inherit(P.bk,t)
inherit(P.lY,t)
inherit(P.fV,t)
inherit(P.b1,t)
inherit(P.fP,t)
inherit(P.cj,t)
inherit(P.lb,t)
inherit(P.mM,t)
inherit(P.lS,t)
inherit(P.bP,t)
inherit(P.fT,t)
inherit(P.lZ,t)
inherit(P.mA,t)
inherit(P.mQ,t)
inherit(P.dd,t)
inherit(P.mX,t)
inherit(P.mk,t)
inherit(P.mm,t)
inherit(P.kH,t)
inherit(P.mt,t)
inherit(P.bE,t)
inherit(P.dw,t)
inherit(P.ce,t)
inherit(P.mu,t)
inherit(P.cl,t)
inherit(P.aI,t)
inherit(P.bQ,t)
inherit(P.cq,t)
inherit(P.kc,t)
inherit(P.fI,t)
inherit(P.m5,t)
inherit(P.iX,t)
inherit(P.ip,t)
inherit(P.a8,t)
inherit(P.bW,t)
inherit(P.d3,t)
inherit(P.cH,t)
inherit(P.C,t)
inherit(P.er,t)
inherit(W.eS,t)
inherit(W.ia,t)
inherit(W.eo,t)
inherit(W.fb,t)
inherit(W.iV,t)
inherit(P.mT,t)
inherit(P.fZ,t)
inherit(P.mq,t)
inherit(P.mC,t)
inherit(P.cC,t)
inherit(P.mD,t)
inherit(P.cP,t)
inherit(B.cx,t)
inherit(L.co,t)
inherit(A.fB,t)
inherit(T.cG,t)
inherit(X.eX,t)
inherit(X.eN,t)
inherit(M.e_,t)
inherit(N.P,t)
inherit(O.e6,t)
inherit(Z.iq,t)
inherit(E.k9,t)
inherit(E.u,t)
inherit(A.J,t)
inherit(U.b,t)
inherit(Y.cf,t)
inherit(X.r,t)
inherit(G.H,t)
inherit(A.df,t)
inherit(B.hj,t)
inherit(A.bG,t)
inherit(E.dW,t)
inherit(E.cS,t)
inherit(F.dy,t)
inherit(F.dz,t)
inherit(A.fE,t)
inherit(D.cI,t)
inherit(A.fK,t)
inherit(A.ep,t)
inherit(E.aY,t)
inherit(Q.bZ,t)
inherit(Q.e,t)
t=J.M
inherit(J.jq,t)
inherit(J.fs,t)
inherit(J.ed,t)
inherit(J.d_,t)
inherit(J.dx,t)
inherit(J.d0,t)
inherit(H.dB,t)
inherit(H.d4,t)
inherit(W.dY,t)
inherit(W.de,t)
inherit(W.eO,t)
inherit(W.fd,t)
inherit(W.B,t)
inherit(W.eV,t)
inherit(W.ie,t)
inherit(W.fe,t)
inherit(W.cU,t)
inherit(W.k5,t)
inherit(W.k6,t)
inherit(W.lX,t)
t=J.ed
inherit(J.ki,t)
inherit(J.d9,t)
inherit(J.d1,t)
inherit(J.nZ,J.d_)
t=J.dx
inherit(J.fr,t)
inherit(J.fq,t)
t=P.G
inherit(H.a6,t)
inherit(H.dA,t)
inherit(H.bD,t)
inherit(P.fm,t)
inherit(H.mR,t)
t=H.a6
inherit(H.d2,t)
inherit(H.jD,t)
inherit(P.ml,t)
inherit(H.dX,H.dA)
t=P.fp
inherit(H.fv,t)
inherit(H.eu,t)
inherit(Q.lH,t)
t=H.d2
inherit(H.eg,t)
inherit(P.jF,t)
t=H.dg
inherit(H.nl,t)
inherit(H.nm,t)
inherit(H.mp,t)
inherit(H.m2,t)
inherit(H.jd,t)
inherit(H.je,t)
inherit(H.mz,t)
inherit(H.lx,t)
inherit(H.ly,t)
inherit(H.nn,t)
inherit(H.nc,t)
inherit(H.nd,t)
inherit(H.ne,t)
inherit(H.nf,t)
inherit(H.ng,t)
inherit(H.lp,t)
inherit(H.jr,t)
inherit(H.n8,t)
inherit(H.n9,t)
inherit(H.na,t)
inherit(P.lP,t)
inherit(P.lO,t)
inherit(P.lQ,t)
inherit(P.lR,t)
inherit(P.mY,t)
inherit(P.mZ,t)
inherit(P.n1,t)
inherit(P.m6,t)
inherit(P.me,t)
inherit(P.ma,t)
inherit(P.mb,t)
inherit(P.mc,t)
inherit(P.m8,t)
inherit(P.md,t)
inherit(P.m7,t)
inherit(P.mh,t)
inherit(P.mi,t)
inherit(P.mg,t)
inherit(P.mf,t)
inherit(P.le,t)
inherit(P.lf,t)
inherit(P.lg,t)
inherit(P.lh,t)
inherit(P.lc,t)
inherit(P.ld,t)
inherit(P.mO,t)
inherit(P.mN,t)
inherit(P.lW,t)
inherit(P.lV,t)
inherit(P.mB,t)
inherit(P.n_,t)
inherit(P.n0,t)
inherit(P.mF,t)
inherit(P.mG,t)
inherit(P.mH,t)
inherit(P.mn,t)
inherit(P.jK,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(W.m4,t)
inherit(P.mV,t)
inherit(L.ha,t)
inherit(O.iR,t)
inherit(O.iS,t)
inherit(O.iT,t)
inherit(Z.iY,t)
inherit(B.jc,t)
inherit(A.jp,t)
inherit(A.jo,t)
inherit(T.kx,t)
inherit(G.jn,t)
inherit(A.n2,t)
inherit(E.hR,t)
inherit(E.hS,t)
inherit(E.hT,t)
inherit(E.i0,t)
inherit(E.i1,t)
inherit(E.i2,t)
inherit(E.i3,t)
inherit(E.i4,t)
inherit(E.i5,t)
inherit(E.i6,t)
inherit(E.i7,t)
inherit(E.hU,t)
inherit(E.hV,t)
inherit(E.hW,t)
inherit(E.hX,t)
inherit(E.hY,t)
inherit(E.hZ,t)
inherit(E.i_,t)
inherit(E.hq,t)
inherit(E.hr,t)
inherit(E.hs,t)
inherit(E.ht,t)
inherit(E.hE,t)
inherit(E.hK,t)
inherit(E.hL,t)
inherit(E.hM,t)
inherit(E.hN,t)
inherit(E.hO,t)
inherit(E.hP,t)
inherit(E.hQ,t)
inherit(E.hu,t)
inherit(E.hv,t)
inherit(E.hw,t)
inherit(E.hx,t)
inherit(E.hy,t)
inherit(E.hz,t)
inherit(E.hA,t)
inherit(E.hB,t)
inherit(E.hC,t)
inherit(E.hD,t)
inherit(E.hF,t)
inherit(E.hG,t)
inherit(E.hH,t)
inherit(E.hI,t)
inherit(E.hJ,t)
inherit(E.ho,t)
inherit(E.hp,t)
inherit(D.la,t)
inherit(A.l1,t)
inherit(A.l2,t)
inherit(A.l3,t)
inherit(A.l4,t)
inherit(A.l5,t)
inherit(A.l6,t)
inherit(A.l7,t)
inherit(A.l8,t)
inherit(A.l0,t)
inherit(A.kT,t)
inherit(A.kU,t)
inherit(A.kV,t)
inherit(A.kW,t)
inherit(A.kX,t)
inherit(A.kY,t)
inherit(A.kZ,t)
inherit(A.l_,t)
inherit(A.kS,t)
inherit(Q.lJ,t)
t=H.lU
inherit(H.dJ,t)
inherit(H.eC,t)
t=P.cR
inherit(H.fA,t)
inherit(H.js,t)
inherit(H.lC,t)
inherit(H.hl,t)
inherit(H.kw,t)
inherit(P.em,t)
inherit(P.cn,t)
inherit(P.b6,t)
inherit(P.dG,t)
inherit(P.bX,t)
inherit(P.bR,t)
inherit(P.id,t)
t=H.lp
inherit(H.l9,t)
inherit(H.dU,t)
inherit(H.lM,P.fm)
t=H.d4
inherit(H.jX,t)
inherit(H.fw,t)
t=H.fw
inherit(H.ei,t)
inherit(H.ej,t)
inherit(H.ek,H.ei)
inherit(H.fx,H.ek)
inherit(H.el,H.ej)
inherit(H.fy,H.el)
t=H.fx
inherit(H.jY,t)
inherit(H.jZ,t)
t=H.fy
inherit(H.k_,t)
inherit(H.k0,t)
inherit(H.k1,t)
inherit(H.k2,t)
inherit(H.k3,t)
inherit(H.fz,t)
inherit(H.k4,t)
inherit(P.mW,P.lY)
inherit(P.fQ,P.mM)
t=P.cj
inherit(P.mP,t)
inherit(P.ex,t)
inherit(W.fU,t)
inherit(P.fR,P.mP)
t=P.bP
inherit(P.fS,t)
inherit(P.ey,t)
t=P.fT
inherit(P.ev,t)
inherit(P.m_,t)
inherit(P.fY,P.mA)
inherit(P.mx,P.ex)
inherit(P.mE,P.mX)
inherit(P.fW,H.l)
inherit(P.kG,P.kH)
inherit(P.mo,P.kG)
inherit(P.ms,P.mo)
t=P.bQ
inherit(P.x,t)
inherit(P.Q,t)
t=P.cn
inherit(P.fF,t)
inherit(P.ja,t)
t=W.dY
inherit(W.d5,t)
inherit(W.f6,t)
inherit(W.jQ,t)
inherit(W.fO,t)
inherit(W.mL,t)
t=W.d5
inherit(W.cr,t)
inherit(W.cQ,t)
inherit(W.eU,t)
inherit(W.lT,t)
inherit(W.m0,t)
t=W.cr
inherit(W.ac,t)
inherit(P.b5,t)
t=W.ac
inherit(W.h7,t)
inherit(W.h8,t)
inherit(W.hf,t)
inherit(W.hi,t)
inherit(W.hk,t)
inherit(W.il,t)
inherit(W.iQ,t)
inherit(W.f9,t)
inherit(W.j7,t)
inherit(W.j8,t)
inherit(W.fc,t)
inherit(W.jv,t)
inherit(W.jx,t)
inherit(W.jB,t)
inherit(W.jJ,t)
inherit(W.eh,t)
inherit(W.jO,t)
inherit(W.jP,t)
inherit(W.jR,t)
inherit(W.jS,t)
inherit(W.k7,t)
inherit(W.k8,t)
inherit(W.ka,t)
inherit(W.kd,t)
inherit(W.kg,t)
inherit(W.kn,t)
inherit(W.kD,t)
inherit(W.ch,t)
inherit(W.kI,t)
inherit(W.kM,t)
inherit(W.lj,t)
inherit(W.ls,t)
inherit(W.mj,t)
inherit(W.dh,W.fd)
t=W.B
inherit(W.ic,t)
inherit(W.im,t)
inherit(W.bY,t)
inherit(W.kP,t)
inherit(W.kQ,t)
inherit(W.aT,W.de)
inherit(W.ff,W.fe)
inherit(W.dq,W.ff)
inherit(W.aE,W.bY)
inherit(W.ew,W.fU)
inherit(W.m3,P.lb)
inherit(P.mU,P.mT)
inherit(P.cF,P.mD)
t=P.b5
inherit(P.cw,t)
inherit(P.cO,t)
inherit(P.ir,t)
inherit(P.is,t)
inherit(P.it,t)
inherit(P.iu,t)
inherit(P.iv,t)
inherit(P.iw,t)
inherit(P.ix,t)
inherit(P.iy,t)
inherit(P.iz,t)
inherit(P.iA,t)
inherit(P.iB,t)
inherit(P.iC,t)
inherit(P.iD,t)
inherit(P.iE,t)
inherit(P.iF,t)
inherit(P.iG,t)
inherit(P.iH,t)
inherit(P.iI,t)
inherit(P.iU,t)
inherit(P.jL,t)
inherit(P.jM,t)
inherit(P.kh,t)
inherit(P.kE,t)
inherit(P.lk,t)
inherit(P.ln,t)
inherit(P.lE,t)
inherit(P.ez,t)
inherit(P.mI,t)
inherit(P.mJ,t)
inherit(P.mK,t)
t=P.cw
inherit(P.h5,t)
inherit(P.iW,t)
inherit(P.bT,t)
inherit(P.j9,t)
inherit(P.ll,t)
inherit(P.fL,t)
inherit(P.lD,t)
inherit(P.kr,P.bT)
t=P.fL
inherit(P.lt,t)
inherit(P.es,t)
t=B.cx
inherit(S.h6,t)
inherit(M.hb,t)
inherit(A.i9,t)
inherit(M.ib,t)
inherit(V.ig,t)
inherit(U.iK,t)
inherit(N.ju,t)
inherit(F.jW,t)
inherit(G.kj,t)
inherit(Q.ku,t)
inherit(N.kK,t)
inherit(D.lq,t)
inherit(V.lr,t)
inherit(F.lL,t)
inherit(A.kf,A.fB)
inherit(L.S,A.kf)
t=T.cG
inherit(O.hc,t)
inherit(Y.j_,t)
inherit(Y.j0,t)
inherit(B.j2,t)
inherit(X.j5,t)
inherit(Q.j6,t)
inherit(S.jw,t)
inherit(Z.jG,t)
inherit(S.jH,t)
inherit(U.jI,t)
inherit(E.jV,t)
inherit(V.ke,t)
inherit(N.km,t)
inherit(N.kt,t)
inherit(E.ky,t)
inherit(Y.kz,t)
inherit(Y.kB,t)
inherit(L.kC,t)
inherit(S.kF,t)
inherit(Y.kJ,t)
inherit(R.lm,t)
inherit(U.lu,t)
inherit(E.lG,t)
inherit(M.lK,t)
t=L.co
inherit(L.hd,t)
inherit(T.he,t)
inherit(T.hh,t)
inherit(S.hm,t)
inherit(U.ih,t)
inherit(Z.ii,t)
inherit(T.j1,t)
inherit(V.j3,t)
inherit(X.j4,t)
inherit(Z.jt,t)
inherit(Q.jy,t)
inherit(K.jz,t)
inherit(G.jA,t)
inherit(D.jN,t)
inherit(V.jT,t)
inherit(E.kp,t)
inherit(V.kv,t)
inherit(K.kA,t)
inherit(N.kN,t)
inherit(A.jU,t)
inherit(A.kO,t)
inherit(A.kk,t)
inherit(A.kL,t)
inherit(A.lz,t)
inherit(A.kq,t)
inherit(A.iZ,t)
inherit(L.lo,t)
inherit(N.lv,t)
inherit(Q.lF,t)
inherit(O.eM,O.e6)
inherit(E.fa,E.k9)
t=E.u
inherit(E.dT,t)
inherit(E.eL,t)
inherit(U.I,U.b)
inherit(R.ko,N.P)
t=R.ko
inherit(R.K,t)
inherit(R.D,t)
inherit(R.R,t)
inherit(R.aw,R.R)
t=Y.cf
inherit(Y.a5,t)
inherit(Y.aJ,t)
inherit(Y.E,t)
inherit(Y.eT,t)
inherit(Y.ax,t)
inherit(Y.bt,t)
inherit(Y.hn,t)
inherit(Y.fC,t)
inherit(Y.f8,t)
inherit(Y.fD,t)
t=Y.aJ
inherit(Y.bx,t)
inherit(Y.at,t)
inherit(G.fJ,O.eM)
inherit(G.kR,G.fJ)
inherit(G.eR,G.H)
t=Q.bZ
inherit(Q.fM,t)
inherit(Q.et,t)
inherit(Q.lI,Q.fM)
inherit(Q.da,Q.et)
inherit(Q.fN,Q.da)
mixin(H.ei,P.ce)
mixin(H.ek,H.f7)
mixin(H.ej,P.ce)
mixin(H.el,H.f7)
mixin(P.fQ,P.lS)
mixin(W.fd,W.ia)
mixin(W.fe,P.ce)
mixin(W.ff,W.fb)
mixin(A.fB,P.dw)
mixin(Q.fM,P.ce)
mixin(Q.et,P.dw)})();(function constants(){C.n=W.eO.prototype
C.p=W.f6.prototype
C.h=W.fc.prototype
C.x=J.M.prototype
C.a=J.d_.prototype
C.d=J.fq.prototype
C.b=J.fr.prototype
C.y=J.fs.prototype
C.c=J.dx.prototype
C.f=J.d0.prototype
C.F=J.d1.prototype
C.u=J.ki.prototype
C.m=J.d9.prototype
C.j=new W.eS()
C.v=new P.kc()
C.k=new P.lZ()
C.w=new P.mq()
C.e=new P.mE()
C.o=new P.cq(0)
C.z=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.q=function(hooks) { return hooks; }
C.A=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.B=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.C=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.r=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.D=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.E=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.t=new F.dy(0,"LogLevel.ERROR")
C.G=new F.dy(1,"LogLevel.WARN")
C.i=new F.dy(2,"LogLevel.INFO")
C.H=new F.dy(3,"LogLevel.VERBOSE")
C.I=H.aH("cP")
C.J=H.aH("vd")
C.l=H.aH("vf")
C.K=H.aH("vg")
C.L=H.aH("vh")
C.M=H.aH("vj")
C.N=H.aH("vk")
C.O=H.aH("vl")
C.P=H.aH("pn")
C.Q=H.aH("bW")
C.R=H.aH("C")
C.S=H.aH("vo")
C.T=H.aH("vp")
C.U=H.aH("vq")
C.V=H.aH("oh")
C.W=H.aH("cl")
C.X=H.aH("x")
C.Y=H.aH("Q")
C.Z=H.aH("bQ")})();(function staticFields(){$.pr="$cachedFunction"
$.ps="$cachedInvocation"
$.c5=0
$.dV=null
$.oG=null
$.ow=null
$.pV=null
$.q4=null
$.n4=null
$.nb=null
$.ox=null
$.dK=null
$.eD=null
$.eE=null
$.or=!1
$.ag=C.e
$.oV=0
$.oQ=null
$.oP=null
$.oR=null
$.qS=null
$.qV=null
$.qx=null
$.qz=null
$.qw=null
$.qC=null
$.qK=null
$.qI=null
$.qX=null
$.qN=null
$.qE=null
$.qH=null
$.qA=null
$.qG=null
$.qQ=null
$.qF=null
$.qU=null
$.qP=null
$.qD=null
$.qv=null
$.qL=null
$.qT=null
$.qM=null
$.qR=null
$.qW=null
$.qO=null
$.qB=null
$.qJ=null
$.qy=null
$.nv=null
$.U="accent"
$.W="aspect1"
$.V="aspect2"
$.a3="shoe1"
$.a2="shoe2"
$.Y="cloak1"
$.Z="cloak2"
$.X="cloak3"
$.T="shirt1"
$.a1="shirt2"
$.a0="pants1"
$.a_="pants2"
$.a9=1300
$.h=3
$.i=2
$.y=1
$.p=0.1
$.rg=null
$.dk=null
$.re=null
$.e2=null
$.f5=null
$.nB=null
$.rd=null
$.p_=null
$.rh=null
$.iL=null
$.nz=null
$.iP=null
$.eZ=null
$.cv=null
$.rf=null
$.nA=null
$.nI=null
$.e3=null
$.f4=null
$.e0=null
$.bb=null
$.bH=null
$.dn=null
$.nH=null
$.aS=null
$.aR=null
$.oX=null
$.f2=null
$.dl=null
$.f1=null
$.bj=null
$.cT=null
$.iO=null
$.br=null
$.e4=null
$.aN=null
$.nF=null
$.nC=null
$.ah=null
$.bi=null
$.aQ=null
$.aZ=null
$.nE=null
$.aG=null
$.c9=null
$.c8=null
$.c7=null
$.ct=null
$.cu=null
$.cs=null
$.bJ=null
$.f3=null
$.nD=null
$.eY=null
$.bz=null
$.ba=null
$.ao=null
$.e1=null
$.dm=null
$.nG=null
$.f0=null
$.f_=null
$.oZ=null
$.bh=null
$.p1=null
$.oW=null
$.rj=null
$.dj=null
$.bg=null
$.bI=null
$.bS=null
$.e5=null
$.oY=null
$.p0=null
$.ri=null
$.iM=null
$.iN=null
$.dp=null
$.rt=null
$.rm=null
$.rn=null
$.ro=null
$.rp=null
$.rq=null
$.rr=null
$.rs=null
$.rv=null
$.rw=null
$.rx=null
$.ry=null
$.rz=null
$.rA=null
$.ru=null
$.tl="JACK"
$.tp="PM"
$.tm="JS"
$.tk="HP"
$.tu="YD"
$.tr="SI"
$.ts="SU"
$.tn="ME"
$.tq="RB"
$.ti="GN"
$.pp="MP"
$.tg="AR"
$.to="PE"
$.th="DP"
$.tt="WV"
$.tj="HB"
$.j="PLAYER1TAG"
$.d8="PLAYER2TAG"
$.o="DENIZENTAG"
$.m="CONSORTTAG"
$.z="CONSORTSOUNDTAG"
$.ae="MCGUFFINTAG"
$.a4="TAGPHYSICALMCGUFFIN"
$.aX="TAGWEAPON"
$.tY=null
$.u9=null
$.tS=null
$.tV=null
$.u0=null
$.u4=null
$.u2=null
$.uc=null
$.ub=null
$.u3=null
$.ue=null
$.u_=null
$.ud=null
$.u7=null
$.u5=null
$.u8=null
$.tU=null
$.tT=null
$.ob=null
$.u1=null
$.tZ=null
$.ua=null
$.tW=null
$.tX=null
$.u6=null
$.um=13
$.a7=3
$.aC=2
$.ab=1
$.eb=null
$.fl=null
$.rW=null
$.t6=null
$.t4=null
$.rO=null
$.t3=null
$.rT=null
$.rP=null
$.t2=null
$.rL=null
$.pb=null
$.nN=null
$.ak=null
$.rJ=null
$.jl=null
$.t0=null
$.pd=null
$.jf=null
$.p9=null
$.rU=null
$.ds=null
$.cA=null
$.nQ=null
$.t9=null
$.t7=null
$.t5=null
$.ph=null
$.nO=null
$.N=null
$.rR=null
$.nP=null
$.cV=null
$.pk=null
$.ar=null
$.ay=null
$.dv=null
$.O=null
$.ai=null
$.cZ=null
$.b3=null
$.nS=null
$.cX=null
$.e9=null
$.fg=null
$.dt=null
$.jg=null
$.jm=null
$.ad=null
$.cW=null
$.be=null
$.du=null
$.aU=null
$.jh=null
$.fj=null
$.cb=null
$.cY=null
$.bL=null
$.bA=null
$.bc=null
$.fh=null
$.b_=null
$.ea=null
$.bU=null
$.as=null
$.jj=null
$.aW=null
$.ec=null
$.cy=null
$.bM=null
$.fi=null
$.b0=null
$.bd=null
$.aP=null
$.aq=null
$.bm=null
$.cz=null
$.bV=null
$.ca=null
$.aV=null
$.aD=null
$.v=null
$.F=null
$.au=null
$.ap=null
$.aA=null
$.b4=null
$.rI=null
$.ji=null
$.rM=null
$.p8=null
$.nR=null
$.pi=null
$.p6=null
$.pf=null
$.nT=null
$.fk=null
$.nV=null
$.rZ=null
$.e8=null
$.rX=null
$.rY=null
$.rQ=null
$.pg=null
$.jk=null
$.t_=null
$.nL=null
$.pj=null
$.nW=null
$.rN=null
$.rS=null
$.nU=null
$.pc=null
$.nX=null
$.pe=null
$.t1=null
$.rV=null
$.rK=null
$.t8=null
$.pa=null
$.nM=null
$.p7=null
$.c6=3
$.oK=!1
$.dr="OWNER"
$.od=null
$.dF=null
$.cK=null
$.bC=null
$.ci=null
$.aK=null
$.cJ=null
$.eq=null
$.dE=null
$.bO=null
$.aL=null})();(function lazyInitializers(){lazy($,"oO","$get$oO",function(){return H.q1("_$dart_dartClosure")})
lazy($,"o0","$get$o0",function(){return H.q1("_$dart_js")})
lazy($,"p4","$get$p4",function(){return H.rG()})
lazy($,"p5","$get$p5",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.oV
$.oV=t+1
t="expando$key$"+t}return new P.ip(null,t,[P.Q])})
lazy($,"pA","$get$pA",function(){return H.ck(H.lB({
toString:function(){return"$receiver$"}}))})
lazy($,"pB","$get$pB",function(){return H.ck(H.lB({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"pC","$get$pC",function(){return H.ck(H.lB(null))})
lazy($,"pD","$get$pD",function(){return H.ck(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"pH","$get$pH",function(){return H.ck(H.lB(void 0))})
lazy($,"pI","$get$pI",function(){return H.ck(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"pF","$get$pF",function(){return H.ck(H.pG(null))})
lazy($,"pE","$get$pE",function(){return H.ck(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"pK","$get$pK",function(){return H.ck(H.pG(void 0))})
lazy($,"pJ","$get$pJ",function(){return H.ck(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ok","$get$ok",function(){return P.uq()})
lazy($,"e7","$get$e7",function(){var t,s
t=P.bW
s=new P.b1(0,P.up(),null,[t])
s.ej(null,t)
return s})
lazy($,"eG","$get$eG",function(){return[]})
lazy($,"c3","$get$c3",function(){return P.cd(P.Q,L.co)})
lazy($,"nJ","$get$nJ",function(){return P.cd(P.C,Z.iq)})
lazy($,"bK","$get$bK",function(){return P.cd(P.Q,B.cx)})
lazy($,"pm","$get$pm",function(){return H.a([],[A.J])})
lazy($,"cg","$get$cg",function(){return P.cd(P.Q,T.cG)})
lazy($,"py","$get$py",function(){return H.a([new G.kR(0,H.a([],[P.C]))],[G.fJ])})
lazy($,"pl","$get$pl",function(){return P.bB(null,null,null,G.H)})
lazy($,"b2","$get$b2",function(){return F.te("ColourPicker",!1)})
lazy($,"eP","$get$eP",function(){return P.bB(null,null,null,E.dW)})
lazy($,"oM","$get$oM",function(){return P.tQ("Edge\\/\\d+",!0,!1)})
lazy($,"iJ","$get$iJ",function(){return P.bB(null,null,null,E.cS)})
lazy($,"o5","$get$o5",function(){return A.by(255,0,255,255)})
lazy($,"oe","$get$oe",function(){return H.a([],[D.cI])})
lazy($,"nj","$get$nj",function(){return A.tL(null)})})()
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
mangledGlobalNames:{Q:"int",x:"double",bQ:"num",C:"String",cl:"bool",bW:"Null",a8:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cl,args:[[P.a8,E.fa]]},{func:1,v:true},{func:1,v:true,args:[P.av]},{func:1,v:true,opt:[W.B]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.av],opt:[P.cH]},{func:1,ret:W.cr,args:[P.Q]},{func:1,v:true,opt:[P.cl]},{func:1,v:true,args:[,P.cH]},{func:1,v:true,args:[P.C]},{func:1,ret:P.C,args:[P.Q]},{func:1,ret:W.aT,args:[P.Q]},{func:1,v:true,args:[W.aE]},{func:1,v:true,args:[[P.G,E.aY],P.C]},{func:1,ret:P.Q,args:[P.aI,P.aI]}],
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
setOrUpdateInterceptorsByTag({CanvasGradient:J.M,CanvasPattern:J.M,Client:J.M,MediaError:J.M,MediaSession:J.M,PositionError:J.M,PushMessageData:J.M,WindowClient:J.M,SVGAnimatedLength:J.M,SVGAnimatedLengthList:J.M,SVGAnimatedNumber:J.M,SVGAnimatedNumberList:J.M,SVGAnimatedString:J.M,SQLError:J.M,ArrayBuffer:H.dB,ArrayBufferView:H.d4,DataView:H.jX,Float32Array:H.jY,Float64Array:H.jZ,Int16Array:H.k_,Int32Array:H.k0,Int8Array:H.k1,Uint16Array:H.k2,Uint32Array:H.k3,Uint8ClampedArray:H.fz,CanvasPixelArray:H.fz,Uint8Array:H.k4,HTMLBRElement:W.ac,HTMLBaseElement:W.ac,HTMLContentElement:W.ac,HTMLDListElement:W.ac,HTMLDataListElement:W.ac,HTMLDetailsElement:W.ac,HTMLDialogElement:W.ac,HTMLDivElement:W.ac,HTMLHRElement:W.ac,HTMLHeadElement:W.ac,HTMLHeadingElement:W.ac,HTMLHtmlElement:W.ac,HTMLLabelElement:W.ac,HTMLLegendElement:W.ac,HTMLModElement:W.ac,HTMLOptGroupElement:W.ac,HTMLParagraphElement:W.ac,HTMLPictureElement:W.ac,HTMLPreElement:W.ac,HTMLQuoteElement:W.ac,HTMLShadowElement:W.ac,HTMLSpanElement:W.ac,HTMLTableCaptionElement:W.ac,HTMLTableCellElement:W.ac,HTMLTableDataCellElement:W.ac,HTMLTableHeaderCellElement:W.ac,HTMLTableColElement:W.ac,HTMLTableElement:W.ac,HTMLTableRowElement:W.ac,HTMLTableSectionElement:W.ac,HTMLTemplateElement:W.ac,HTMLTitleElement:W.ac,HTMLTrackElement:W.ac,HTMLUListElement:W.ac,HTMLUnknownElement:W.ac,HTMLDirectoryElement:W.ac,HTMLFontElement:W.ac,HTMLFrameElement:W.ac,HTMLMarqueeElement:W.ac,HTMLElement:W.ac,HTMLAnchorElement:W.h7,HTMLAreaElement:W.h8,Blob:W.de,HTMLBodyElement:W.hf,HTMLButtonElement:W.hi,HTMLCanvasElement:W.hk,CanvasRenderingContext2D:W.eO,CDATASection:W.cQ,CharacterData:W.cQ,Comment:W.cQ,ProcessingInstruction:W.cQ,Text:W.cQ,CSSStyleDeclaration:W.dh,MSStyleCSSProperties:W.dh,CSS2Properties:W.dh,CustomEvent:W.ic,DocumentFragment:W.eU,ShadowRoot:W.eU,DOMError:W.eV,FileError:W.eV,DOMException:W.ie,Element:W.cr,HTMLEmbedElement:W.il,ErrorEvent:W.im,AnimationEvent:W.B,AnimationPlayerEvent:W.B,ApplicationCacheErrorEvent:W.B,AutocompleteErrorEvent:W.B,BeforeInstallPromptEvent:W.B,BeforeUnloadEvent:W.B,BlobEvent:W.B,ClipboardEvent:W.B,CloseEvent:W.B,DeviceLightEvent:W.B,DeviceMotionEvent:W.B,DeviceOrientationEvent:W.B,ExtendableEvent:W.B,ExtendableMessageEvent:W.B,FetchEvent:W.B,FontFaceSetLoadEvent:W.B,GamepadEvent:W.B,GeofencingEvent:W.B,HashChangeEvent:W.B,InstallEvent:W.B,MediaEncryptedEvent:W.B,MediaKeyMessageEvent:W.B,MediaQueryListEvent:W.B,MediaStreamEvent:W.B,MediaStreamTrackEvent:W.B,MessageEvent:W.B,MIDIConnectionEvent:W.B,MIDIMessageEvent:W.B,NotificationEvent:W.B,PageTransitionEvent:W.B,PopStateEvent:W.B,PresentationConnectionAvailableEvent:W.B,PresentationConnectionCloseEvent:W.B,ProgressEvent:W.B,PromiseRejectionEvent:W.B,PushEvent:W.B,RelatedEvent:W.B,RTCDataChannelEvent:W.B,RTCDTMFToneChangeEvent:W.B,RTCIceCandidateEvent:W.B,RTCPeerConnectionIceEvent:W.B,SecurityPolicyViolationEvent:W.B,ServicePortConnectEvent:W.B,ServiceWorkerMessageEvent:W.B,SpeechRecognitionEvent:W.B,StorageEvent:W.B,SyncEvent:W.B,TrackEvent:W.B,TransitionEvent:W.B,WebKitTransitionEvent:W.B,ResourceProgressEvent:W.B,USBConnectionEvent:W.B,IDBVersionChangeEvent:W.B,AudioProcessingEvent:W.B,OfflineAudioCompletionEvent:W.B,WebGLContextEvent:W.B,Event:W.B,InputEvent:W.B,MediaStream:W.dY,EventTarget:W.dY,HTMLFieldSetElement:W.iQ,File:W.aT,FileList:W.dq,FileReader:W.f6,HTMLFormElement:W.f9,HTMLIFrameElement:W.j7,ImageData:W.cU,HTMLImageElement:W.j8,HTMLInputElement:W.fc,HTMLKeygenElement:W.jv,HTMLLIElement:W.jx,HTMLLinkElement:W.jB,HTMLMapElement:W.jJ,HTMLAudioElement:W.eh,HTMLMediaElement:W.eh,HTMLVideoElement:W.eh,HTMLMenuElement:W.jO,HTMLMenuItemElement:W.jP,MessagePort:W.jQ,HTMLMetaElement:W.jR,HTMLMeterElement:W.jS,MouseEvent:W.aE,DragEvent:W.aE,PointerEvent:W.aE,WheelEvent:W.aE,Navigator:W.k5,NavigatorUserMediaError:W.k6,Document:W.d5,HTMLDocument:W.d5,XMLDocument:W.d5,Node:W.d5,HTMLOListElement:W.k7,HTMLObjectElement:W.k8,HTMLOptionElement:W.ka,HTMLOutputElement:W.kd,HTMLParamElement:W.kg,HTMLProgressElement:W.kn,HTMLScriptElement:W.kD,HTMLSelectElement:W.ch,HTMLSlotElement:W.kI,HTMLSourceElement:W.kM,SpeechRecognitionError:W.kP,SpeechSynthesisEvent:W.kQ,HTMLStyleElement:W.lj,HTMLTextAreaElement:W.ls,CompositionEvent:W.bY,FocusEvent:W.bY,KeyboardEvent:W.bY,TextEvent:W.bY,TouchEvent:W.bY,SVGZoomEvent:W.bY,UIEvent:W.bY,Window:W.fO,DOMWindow:W.fO,Attr:W.lT,ClientRect:W.lX,DocumentType:W.m0,HTMLFrameSetElement:W.mj,ServiceWorker:W.mL,SVGAElement:P.h5,SVGAnimateElement:P.cO,SVGAnimateMotionElement:P.cO,SVGAnimateTransformElement:P.cO,SVGAnimationElement:P.cO,SVGSetElement:P.cO,SVGFEBlendElement:P.ir,SVGFEColorMatrixElement:P.is,SVGFEComponentTransferElement:P.it,SVGFECompositeElement:P.iu,SVGFEConvolveMatrixElement:P.iv,SVGFEDiffuseLightingElement:P.iw,SVGFEDisplacementMapElement:P.ix,SVGFEFloodElement:P.iy,SVGFEGaussianBlurElement:P.iz,SVGFEImageElement:P.iA,SVGFEMergeElement:P.iB,SVGFEMorphologyElement:P.iC,SVGFEOffsetElement:P.iD,SVGFEPointLightElement:P.iE,SVGFESpecularLightingElement:P.iF,SVGFESpotLightElement:P.iG,SVGFETileElement:P.iH,SVGFETurbulenceElement:P.iI,SVGFilterElement:P.iU,SVGForeignObjectElement:P.iW,SVGCircleElement:P.bT,SVGEllipseElement:P.bT,SVGLineElement:P.bT,SVGPathElement:P.bT,SVGPolygonElement:P.bT,SVGPolylineElement:P.bT,SVGGeometryElement:P.bT,SVGClipPathElement:P.cw,SVGDefsElement:P.cw,SVGGElement:P.cw,SVGSwitchElement:P.cw,SVGGraphicsElement:P.cw,SVGImageElement:P.j9,SVGMarkerElement:P.jL,SVGMaskElement:P.jM,SVGPatternElement:P.kh,SVGRectElement:P.kr,SVGScriptElement:P.kE,SVGStyleElement:P.lk,SVGDescElement:P.b5,SVGDiscardElement:P.b5,SVGFEDistantLightElement:P.b5,SVGFEFuncAElement:P.b5,SVGFEFuncBElement:P.b5,SVGFEFuncGElement:P.b5,SVGFEFuncRElement:P.b5,SVGFEMergeNodeElement:P.b5,SVGMetadataElement:P.b5,SVGStopElement:P.b5,SVGTitleElement:P.b5,SVGComponentTransferFunctionElement:P.b5,SVGElement:P.b5,SVGSVGElement:P.ll,SVGSymbolElement:P.ln,SVGTextContentElement:P.fL,SVGTextPathElement:P.lt,SVGTSpanElement:P.es,SVGTextElement:P.es,SVGTextPositioningElement:P.es,SVGUseElement:P.lD,SVGViewElement:P.lE,SVGLinearGradientElement:P.ez,SVGRadialGradientElement:P.ez,SVGGradientElement:P.ez,SVGCursorElement:P.mI,SVGFEDropShadowElement:P.mJ,SVGMPathElement:P.mK})
setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,Client:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CustomEvent:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,HTMLFormElement:true,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,MessagePort:true,HTMLMetaElement:true,HTMLMeterElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSourceElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLStyleElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,HTMLFrameSetElement:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGRectElement:true,SVGScriptElement:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.fw.$nativeSuperclassTag="ArrayBufferView"
H.ei.$nativeSuperclassTag="ArrayBufferView"
H.ek.$nativeSuperclassTag="ArrayBufferView"
H.fx.$nativeSuperclassTag="ArrayBufferView"
H.ej.$nativeSuperclassTag="ArrayBufferView"
H.el.$nativeSuperclassTag="ArrayBufferView"
H.fy.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.q6(A.q7(),b)},[])
else (function(b){H.q6(A.q7(),b)})([])})})()
//# sourceMappingURL=stat_data_review.dart.js.map
