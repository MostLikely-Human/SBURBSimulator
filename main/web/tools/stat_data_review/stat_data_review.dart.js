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
a[c]=function(){a[c]=function(){H.vW(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.oS"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.oS"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.oS(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={om:function om(a){this.a=a},
el:function(a,b,c,d){if(!!J.af(a).$isa6)return new H.e1(a,b,[c,d])
return new H.dF(a,b,[c,d])},
fq:function(){return new P.c0("No element")},
tS:function(){return new P.c0("Too few elements")},
fJ:function(a,b,c,d){if(c-b<=32)H.v2(a,b,c,d)
else H.v1(a,b,c,d)},
v2:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.b8(a);t<=c;++t){r=s.A(a,t)
q=t
while(!0){if(!(q>b&&J.bI(d.$2(s.A(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.A(a,p))
q=p}s.i(a,q,r)}},
v1:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.an(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.an(a3+a4,2)
p=q-t
o=q+t
n=J.b8(a2)
m=n.A(a2,s)
l=n.A(a2,p)
k=n.A(a2,q)
j=n.A(a2,o)
i=n.A(a2,r)
if(J.bI(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bI(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bI(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bI(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bI(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bI(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bI(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bI(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bI(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.A(a2,a3))
n.i(a2,o,n.A(a2,a4))
g=a3+1
f=a4-1
if(J.ao(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.A(a2,e)
c=a5.$2(d,l)
b=J.af(c)
if(b.a8(c,0))continue
if(b.aN(c,0)){if(e!==g){n.i(a2,e,n.A(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.A(a2,f),l)
b=J.cO(c)
if(b.b5(c,0)){--f
continue}else{a=f-1
if(b.aN(c,0)){n.i(a2,e,n.A(a2,g))
a0=g+1
n.i(a2,g,n.A(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.A(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.A(a2,e)
if(J.h3(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.A(a2,g))
n.i(a2,g,d)}++g}else if(J.bI(a5.$2(d,j),0))for(;!0;)if(J.bI(a5.$2(n.A(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.h3(a5.$2(n.A(a2,f),l),0)){n.i(a2,e,n.A(a2,g))
a0=g+1
n.i(a2,g,n.A(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.A(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.A(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.A(a2,b))
n.i(a2,b,j)
H.fJ(a2,a3,g-2,a5)
H.fJ(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.ao(a5.$2(n.A(a2,g),l),0);)++g
for(;J.ao(a5.$2(n.A(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.A(a2,e)
if(J.ao(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.A(a2,g))
n.i(a2,g,d)}++g}else if(J.ao(a5.$2(d,j),0))for(;!0;)if(J.ao(a5.$2(n.A(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.h3(a5.$2(n.A(a2,f),l),0)){n.i(a2,e,n.A(a2,g))
a0=g+1
n.i(a2,g,n.A(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.A(a2,f))
n.i(a2,f,d)}f=a
break}}H.fJ(a2,g,f,a5)}else H.fJ(a2,g,f,a5)},
a6:function a6(){},
d5:function d5(){},
fw:function fw(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dF:function dF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
e1:function e1(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fx:function fx(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
em:function em(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bG:function bG(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
ez:function ez(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fa:function fa(){},
h1:function(a,b){var t=a.bq(b)
if(!u.globalState.d.cy)u.globalState.f.bA()
return t},
qy:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.af(s).$isa9)throw H.z(P.nQ("Arguments to main must be a List: "+H.t(s)))
u.globalState=new H.mS(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$pu()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.mn(P.oq(null,H.de),0)
r=P.a3
s.z=new H.l(0,null,null,null,null,null,0,[r,H.dN])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.mR()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.tk,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.vg)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bE(null,null,null,r)
p=new H.dI(0,null,!1)
o=new H.dN(s,new H.l(0,null,null,null,null,null,0,[r,H.dI]),q,u.createNewIsolate(),p,new H.c9(H.nG()),new H.c9(H.nG()),!1,!1,[],P.bE(null,null,null,null),null,null,!1,!0,P.bE(null,null,null,null))
q.j(0,0)
o.d_(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.dU(a,{func:1,args:[,]}))o.bq(new H.nH(t,a))
else if(H.dU(a,{func:1,args:[,,]}))o.bq(new H.nI(t,a))
else o.bq(a)
u.globalState.f.bA()},
vg:function(a){var t=P.ek(["command","print","msg",a])
return new H.c4(!0,P.eG(null,P.a3)).aw(t)},
tm:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.tn()
return},
tn:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.z(new P.b7("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.z(new P.b7('Cannot extract URI from "'+t+'"'))},
tk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.dd(!0,[]).aU(b.data)
s=J.b8(t)
switch(s.A(t,"command")){case"start":u.globalState.b=s.A(t,"id")
r=s.A(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.A(t,"args")
o=new H.dd(!0,[]).aU(s.A(t,"msg"))
n=s.A(t,"isSpawnUri")
m=s.A(t,"startPaused")
l=new H.dd(!0,[]).aU(s.A(t,"replyTo"))
s=u.globalState.a++
k=P.a3
j=P.bE(null,null,null,k)
i=new H.dI(0,null,!1)
h=new H.dN(s,new H.l(0,null,null,null,null,null,0,[k,H.dI]),j,u.createNewIsolate(),i,new H.c9(H.nG()),new H.c9(H.nG()),!1,!1,[],P.bE(null,null,null,null),null,null,!1,!0,P.bE(null,null,null,null))
j.j(0,0)
h.d_(0,i)
u.globalState.f.a.aQ(new H.de(h,new H.ji(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bA()
break
case"spawn-worker":break
case"message":if(s.A(t,"port")!=null)s.A(t,"port").b_(s.A(t,"msg"))
u.globalState.f.bA()
break
case"close":u.globalState.ch.am(0,$.$get$pv().A(0,a))
a.terminate()
u.globalState.f.bA()
break
case"log":H.tj(s.A(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.ek(["command","print","msg",t])
k=new H.c4(!0,P.eG(null,P.a3)).aw(k)
s.toString
self.postMessage(k)}else P.nE(s.A(t,"msg"))
break
case"error":throw H.z(s.A(t,"msg"))}},
tj:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.ek(["command","log","msg",a])
r=new H.c4(!0,P.eG(null,P.a3)).aw(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.b9(q)
t=H.bn(q)
s=P.ir(t)
throw H.z(s)}},
tl:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.pR=$.pR+("_"+s)
$.pS=$.pS+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.b_(["spawned",new H.dO(s,r),q,t.r])
r=new H.jj(a,b,c,d,t)
if(e===!0){t.du(q,q)
u.globalState.f.a.aQ(new H.de(t,r,"start isolate"))}else r.$0()},
v6:function(a,b){var t=new H.lR(!0,!1,null)
t.ew(a,b)
return t},
vk:function(a){return new H.dd(!0,[]).aU(new H.c4(!1,P.eG(null,P.a3)).aw(a))},
nH:function nH(a,b){this.a=a
this.b=b},
nI:function nI(a,b){this.a=a
this.b=b},
mS:function mS(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
dN:function dN(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
mL:function mL(a,b){this.a=a
this.b=b},
mn:function mn(a,b){this.a=a
this.b=b},
mo:function mo(a){this.a=a},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function mR(){},
ji:function ji(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mf:function mf(){},
dO:function dO(b,a){this.b=b
this.a=a},
mV:function mV(a,b){this.a=a
this.b=b},
eH:function eH(b,c,a){this.b=b
this.c=c
this.a=a},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a,b){this.a=a
this.b=b},
lT:function lT(a,b){this.a=a
this.b=b},
c9:function c9(a){this.a=a},
c4:function c4(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
vJ:function(a){return u.types[a]},
vO:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.af(a).$iscf},
t:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bq(a)
if(typeof t!=="string")throw H.z(H.bh(a))
return t},
uw:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.kH(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cG:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
pQ:function(a,b){return b.$1(a)},
ud:function(a,b,c){var t,s,r,q,p,o
H.vB(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.pQ(a,c)
if(3>=t.length)return H.X(t,3)
s=t[3]
if(b<2||b>36)throw H.z(P.bu(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.f.d1(q,o)|32)>r)return H.pQ(a,c)}return parseInt(a,b)},
ou:function(a){var t,s,r,q,p,o,n,m
t=J.af(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.x||!!J.af(a).$isdb){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.d1(q,0)===36)q=C.f.b2(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.oW(H.h2(a),0,null),u.mangledGlobalNames)},
kv:function(a){return"Instance of '"+H.ou(a)+"'"},
ue:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.b.cl(t,10))>>>0,56320|t&1023)}throw H.z(P.bu(a,0,1114111,null,null))},
ot:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.z(H.bh(a))
return a[b]},
pT:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.z(H.bh(a))
a[b]=c},
az:function(a){throw H.z(H.bh(a))},
X:function(a,b){if(a==null)J.cP(a)
throw H.z(H.aN(a,b))},
aN:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cr(!0,b,"index",null)
t=J.cP(a)
if(!(b<0)){if(typeof t!=="number")return H.az(t)
s=b>=t}else s=!0
if(s)return P.jg(b,a,"index",null,t)
return P.fI(b,"index",null)},
bh:function(a){return new P.cr(!0,a,null,null)},
dS:function(a){if(typeof a!=="number")throw H.z(H.bh(a))
return a},
vB:function(a){if(typeof a!=="string")throw H.z(H.bh(a))
return a},
z:function(a){var t
if(a==null)a=new P.es()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.qA})
t.name=""}else t.toString=H.qA
return t},
qA:function(){return J.bq(this.dartException)},
aE:function(a){throw H.z(a)},
c6:function(a){throw H.z(new P.bT(a))},
co:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.lV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
lW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
q6:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
oo:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.jx(a,s,t?null:b.receiver)},
b9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.nJ(a)
if(a==null)return
if(a instanceof H.e3)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.cl(r,16)&8191)===10)switch(q){case 438:return t.$1(H.oo(H.t(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return t.$1(new H.fC(p,null))}}if(a instanceof TypeError){o=$.$get$q0()
n=$.$get$q1()
m=$.$get$q2()
l=$.$get$q3()
k=$.$get$q7()
j=$.$get$q8()
i=$.$get$q5()
$.$get$q4()
h=$.$get$qa()
g=$.$get$q9()
f=o.aD(s)
if(f!=null)return t.$1(H.oo(s,f))
else{f=n.aD(s)
if(f!=null){f.method="call"
return t.$1(H.oo(s,f))}else{f=m.aD(s)
if(f==null){f=l.aD(s)
if(f==null){f=k.aD(s)
if(f==null){f=j.aD(s)
if(f==null){f=i.aD(s)
if(f==null){f=l.aD(s)
if(f==null){f=h.aD(s)
if(f==null){f=g.aD(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.fC(s,f==null?null:f.method))}}return t.$1(new H.lX(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.fK()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cr(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.fK()
return a},
bn:function(a){var t
if(a instanceof H.e3)return a.b
if(a==null)return new H.fZ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fZ(a,null)},
vS:function(a){if(a==null||typeof a!='object')return J.bo(a)
else return H.cG(a)},
vH:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
vN:function(a,b,c,d,e,f,g){switch(c){case 0:return H.h1(b,new H.ny(a))
case 1:return H.h1(b,new H.nz(a,d))
case 2:return H.h1(b,new H.nA(a,d,e))
case 3:return H.h1(b,new H.nB(a,d,e,f))
case 4:return H.h1(b,new H.nC(a,d,e,f,g))}throw H.z(P.ir("Unsupported number of arguments for wrapped closure"))},
eM:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.vN)
a.$identity=t
return t},
rM:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.af(c).$isa9){t.$reflectionInfo=c
r=H.uw(t).r}else r=c
q=d?Object.create(new H.lu().constructor.prototype):Object.create(new H.dZ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.ca
$.ca=J.dV(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.p8(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.vJ,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.p6:H.nU
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.z("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.p8(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
rJ:function(a,b,c,d){var t=H.nU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
p8:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.rL(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.rJ(s,!q,t,b)
if(s===0){q=$.ca
$.ca=J.dV(q,1)
o="self"+H.t(q)
q="return function(){var "+o+" = this."
p=$.e_
if(p==null){p=H.hi("self")
$.e_=p}return new Function(q+H.t(p)+";return "+o+"."+H.t(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.ca
$.ca=J.dV(q,1)
n+=H.t(q)
q="return function("+n+"){return this."
p=$.e_
if(p==null){p=H.hi("self")
$.e_=p}return new Function(q+H.t(p)+"."+H.t(t)+"("+n+");}")()},
rK:function(a,b,c,d){var t,s
t=H.nU
s=H.p6
switch(b?-1:a){case 0:throw H.z(new H.kN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
rL:function(a,b){var t,s,r,q,p,o,n,m
t=H.rH()
s=$.p5
if(s==null){s=H.hi("receiver")
$.p5=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.rK(q,!o,r,b)
if(q===1){s="return function(){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+");"
o=$.ca
$.ca=J.dV(o,1)
return new Function(s+H.t(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.t(t)+"."+H.t(r)+"(this."+H.t(s)+", "+m+");"
o=$.ca
$.ca=J.dV(o,1)
return new Function(s+H.t(o)+"}")()},
oS:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.af(c).$isa9){c.fixed$length=Array
t=c}else t=c
return H.rM(a,b,t,!!d,e,f)},
nU:function(a){return a.a},
p6:function(a){return a.c},
rH:function(){var t=$.e_
if(t==null){t=H.hi("self")
$.e_=t}return t},
hi:function(a){var t,s,r,q,p
t=new H.dZ("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
vU:function(a,b){var t=J.b8(b)
throw H.z(H.rI(H.ou(a),t.c0(b,3,t.gO(b))))},
eO:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.af(a)[b]
else t=!0
if(t)return a
H.vU(a,b)},
qq:function(a){var t=J.af(a)
return"$S" in t?t.$S():null},
dU:function(a,b){var t
if(a==null)return!1
t=H.qq(a)
return t==null?!1:H.oV(t,b)},
rI:function(a,b){return new H.hn("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
vW:function(a){throw H.z(new P.ih(a))},
nG:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
qs:function(a){return u.getIsolateTag(a)},
aK:function(a){return new H.cN(a,null)},
a:function(a,b){a.$ti=b
return a},
h2:function(a){if(a==null)return
return a.$ti},
qt:function(a,b){return H.oY(a["$as"+H.t(b)],H.h2(a))},
an:function(a,b,c){var t=H.qt(a,b)
return t==null?null:t[c]},
v:function(a,b){var t=H.h2(a)
return t==null?null:t[b]},
c5:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.oW(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.t(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.c5(t,b)
return H.vm(a,b)}return"unknown-reified-type"},
vm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.c5(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.c5(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.c5(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.vG(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.c5(l[j],b)+(" "+H.t(j))}q+="}"}return"("+q+") => "+t},
oW:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ew("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.ae=p+", "
o=a[s]
if(o!=null)q=!1
p=t.ae+=H.c5(o,c)}return q?"":"<"+t.J(0)+">"},
nt:function(a){var t,s
if(a instanceof H.dj){t=H.qq(a)
if(t!=null)return H.c5(t,null)}s=J.af(a).constructor.builtin$cls
if(a==null)return s
return s+H.oW(a.$ti,0,null)},
oY:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dT:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.h2(a)
s=J.af(a)
if(s[b]==null)return!1
return H.qn(H.oY(s[d],t),c)},
qn:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bw(a[s],b[s]))return!1
return!0},
np:function(a,b,c){return a.apply(b,H.qt(b,c))},
vC:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="aw"||b.builtin$cls==="c_"
if(b==null)return!0
t=H.h2(a)
a=J.af(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.oV(r.apply(a,null),b)}return H.bw(s,b)},
bw:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="c_")return!0
if('func' in b)return H.oV(a,b)
if('func' in a)return b.builtin$cls==="w1"||b.builtin$cls==="aw"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.c5(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.qn(H.oY(o,t),r)},
qm:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bw(t,p)||H.bw(p,t)))return!1}return!0},
vt:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bw(p,o)||H.bw(o,p)))return!1}return!0},
oV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bw(t,s)||H.bw(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.qm(r,q,!1))return!1
if(!H.qm(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bw(i,h)||H.bw(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bw(i,h)||H.bw(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bw(i,h)||H.bw(h,i)))return!1}}return H.vt(a.named,b.named)},
wc:function(a){var t=$.oT
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
wb:function(a){return H.cG(a)},
wa:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
vP:function(a){var t,s,r,q,p,o
t=$.oT.$1(a)
s=$.nq[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.nx[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ql.$2(a,t)
if(t!=null){s=$.nq[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.nx[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.oX(r)
$.nq[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.nx[t]=r
return r}if(p==="-"){o=H.oX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.qv(a,r)
if(p==="*")throw H.z(new P.dL(t))
if(u.leafTags[t]===true){o=H.oX(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.qv(a,r)},
qv:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.nD(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
oX:function(a){return J.nD(a,!1,null,!!a.$iscf)},
vR:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.nD(t,!1,null,!!t.$iscf)
else return J.nD(t,c,null,null)},
vL:function(){if(!0===$.oU)return
$.oU=!0
H.vM()},
vM:function(){var t,s,r,q,p,o,n,m
$.nq=Object.create(null)
$.nx=Object.create(null)
H.vK()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.qw.$1(p)
if(o!=null){n=H.vR(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
vK:function(){var t,s,r,q,p,o,n
t=C.z()
t=H.dR(C.A,H.dR(C.B,H.dR(C.q,H.dR(C.q,H.dR(C.D,H.dR(C.C,H.dR(C.E(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.oT=new H.nu(p)
$.ql=new H.nv(o)
$.qw=new H.nw(n)},
dR:function(a,b){return a(b)||b},
pP:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.z(new P.j0("Illegal RegExp pattern ("+String(q)+")",a,null))},
vV:function(a,b,c){var t
if(typeof b==="string")return a.indexOf(b,c)>=0
else{t=J.af(b)
if(!!t.$isfv){t=C.f.b2(a,c)
return b.b.test(t)}else{t=t.dz(b,C.f.b2(a,c))
return!t.gag(t)}}},
kH:function kH(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
lV:function lV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fC:function fC(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function lX(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
nJ:function nJ(a){this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
ny:function ny(a){this.a=a},
nz:function nz(a,b){this.a=a
this.b=b},
nA:function nA(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function nB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nC:function nC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dj:function dj(){},
lK:function lK(){},
lu:function lu(){},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a){this.a=a},
kN:function kN(a){this.a=a},
cN:function cN(a,b){this.a=a
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
jw:function jw(a){this.a=a},
jH:function jH(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
jI:function jI(a,$ti){this.a=a
this.$ti=$ti},
jJ:function jJ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
nu:function nu(a){this.a=a},
nv:function nv(a){this.a=a},
nw:function nw(a){this.a=a},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mU:function mU(a,b){this.a=a
this.b=b},
m7:function m7(a,b,c){this.a=a
this.b=b
this.c=c},
m8:function m8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
nc:function nc(a,b,c){this.a=a
this.b=b
this.c=c},
nd:function nd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qe:function(a,b,c){},
uc:function(a,b,c){var t
H.qe(a,b,c)
t=new Uint8Array(a,b)
return t},
dG:function dG(){},
d7:function d7(){},
k6:function k6(){},
fy:function fy(){},
fz:function fz(){},
eo:function eo(){},
eq:function eq(){},
fA:function fA(){},
ep:function ep(){},
er:function er(){},
k7:function k7(){},
k8:function k8(){},
k9:function k9(){},
ka:function ka(){},
kb:function kb(){},
kc:function kc(){},
kd:function kd(){},
fB:function fB(){},
ke:function ke(){},
vG:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
vT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
af:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ft.prototype
return J.fs.prototype}if(typeof a=="string")return J.d3.prototype
if(a==null)return J.fu.prototype
if(typeof a=="boolean")return J.jv.prototype
if(a.constructor==Array)return J.d2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d4.prototype
return a}if(a instanceof P.aw)return a
return J.ns(a)},
nD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ns:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.oU==null){H.vL()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.z(new P.dL("Return interceptor for "+H.t(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$on()]
if(p!=null)return p
p=H.vP(a)
if(p!=null)return p
if(typeof a=="function")return C.F
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$on(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
b8:function(a){if(typeof a=="string")return J.d3.prototype
if(a==null)return a
if(a.constructor==Array)return J.d2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d4.prototype
return a}if(a instanceof P.aw)return a
return J.ns(a)},
eN:function(a){if(a==null)return a
if(a.constructor==Array)return J.d2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.d4.prototype
return a}if(a instanceof P.aw)return a
return J.ns(a)},
cO:function(a){if(typeof a=="number")return J.dC.prototype
if(a==null)return a
if(!(a instanceof P.aw))return J.db.prototype
return a},
nr:function(a){if(typeof a=="number")return J.dC.prototype
if(typeof a=="string")return J.d3.prototype
if(a==null)return a
if(!(a instanceof P.aw))return J.db.prototype
return a},
vI:function(a){if(typeof a=="string")return J.d3.prototype
if(a==null)return a
if(!(a instanceof P.aw))return J.db.prototype
return a},
aa:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.d4.prototype
return a}if(a instanceof P.aw)return a
return J.ns(a)},
dV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nr(a).ac(a,b)},
qB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.cO(a).a6(a,b)},
ao:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.af(a).a8(a,b)},
bI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.cO(a).b5(a,b)},
h3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cO(a).aN(a,b)},
nK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nr(a).ai(a,b)},
nL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.vO(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b8(a).A(a,b)},
qC:function(a,b,c,d){return J.aa(a).eD(a,b,c,d)},
nM:function(a,b,c,d,e){return J.aa(a).f1(a,b,c,d,e)},
qD:function(a,b,c,d){return J.aa(a).fd(a,b,c,d)},
qE:function(a,b,c){return J.aa(a).fe(a,b,c)},
qF:function(a,b){return J.aa(a).fw(a,b)},
h4:function(a,b,c){return J.cO(a).T(a,b,c)},
qG:function(a){return J.aa(a).dC(a)},
h5:function(a,b){return J.nr(a).aT(a,b)},
qH:function(a,b){return J.aa(a).dD(a,b)},
qI:function(a,b){return J.b8(a).cr(a,b)},
nN:function(a,b,c){return J.b8(a).dE(a,b,c)},
qJ:function(a,b){return J.eN(a).aV(a,b)},
h6:function(a){return J.cO(a).Y(a)},
qK:function(a){return J.aa(a).gbc(a)},
qL:function(a){return J.aa(a).gfF(a)},
eP:function(a){return J.aa(a).gay(a)},
qM:function(a){return J.aa(a).gfS(a)},
bo:function(a){return J.af(a).gaf(a)},
nO:function(a){return J.aa(a).gbx(a)},
bx:function(a){return J.eN(a).ga_(a)},
cP:function(a){return J.b8(a).gO(a)},
by:function(a){return J.aa(a).gN(a)},
oZ:function(a){return J.aa(a).gcz(a)},
qN:function(a){return J.af(a).gah(a)},
nP:function(a){return J.aa(a).gad(a)},
c7:function(a){return J.aa(a).gcN(a)},
p_:function(a,b){return J.eN(a).az(a,b)},
p0:function(a){return J.aa(a).hj(a)},
qO:function(a,b){return J.aa(a).hr(a,b)},
qP:function(a){return J.cO(a).ak(a)},
qQ:function(a){return J.cO(a).ht(a)},
qR:function(a,b){return J.aa(a).seS(a,b)},
qS:function(a,b){return J.aa(a).sbc(a,b)},
qT:function(a,b){return J.aa(a).sat(a,b)},
bp:function(a,b){return J.aa(a).sad(a,b)},
cq:function(a,b){return J.aa(a).scN(a,b)},
qU:function(a){return J.aa(a).ej(a)},
p1:function(a,b){return J.vI(a).b2(a,b)},
qV:function(a){return J.eN(a).aA(a)},
bq:function(a){return J.af(a).J(a)},
dW:function(a,b){return J.eN(a).cP(a,b)},
Z:function Z(){},
jv:function jv(){},
fu:function fu(){},
ej:function ej(){},
ks:function ks(){},
db:function db(){},
d4:function d4(){},
d2:function d2($ti){this.$ti=$ti},
ol:function ol($ti){this.$ti=$ti},
hb:function hb(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dC:function dC(){},
ft:function ft(){},
fs:function fs(){},
d3:function d3(){}},P={
v9:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.vu()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.eM(new P.ma(t),1)).observe(s,{childList:true})
return new P.m9(t,s,r)}else if(self.setImmediate!=null)return P.vv()
return P.vw()},
va:function(a){++u.globalState.f.b
self.scheduleImmediate(H.eM(new P.mb(a),0))},
vb:function(a){++u.globalState.f.b
self.setImmediate(H.eM(new P.mc(a),0))},
vc:function(a){P.oD(C.o,a)},
oN:function(a,b){P.qd(null,a)
return b.gfU()},
oK:function(a,b){P.qd(a,b)},
oM:function(a,b){J.qH(b,a)},
oL:function(a,b){b.fE(H.b9(a),H.bn(a))},
qd:function(a,b){var t,s,r,q
t=new P.nj(b)
s=new P.nk(b)
r=J.af(a)
if(!!r.$isb3)a.cm(t,s)
else if(!!r.$isbk)a.cK(t,s)
else{q=new P.b3(0,$.ag,null,[null])
q.a=4
q.c=a
q.cm(t,null)}},
oR:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.ag.toString
return new P.nn(t)},
qg:function(a,b){if(H.dU(a,{func:1,args:[P.c_,P.c_]})){b.toString
return a}else{b.toString
return a}},
nV:function(a){return new P.nh(new P.b3(0,$.ag,null,[a]),[a])},
vl:function(a,b,c){$.ag.toString
a.aI(b,c)},
qb:function(a,b){var t,s,r
b.a=1
try{a.cK(new P.mw(b),new P.mx(b))}catch(r){t=H.b9(r)
s=H.bn(r)
P.qx(new P.my(b,t,s))}},
mv:function(a,b){var t,s,r
for(;a.gf2();)a=a.c
t=a.gcb()
s=b.c
if(t){b.c=null
r=b.bM(s)
b.a=a.a
b.c=a.c
P.dM(b,r)}else{b.a=2
b.c=a
a.di(s)}},
dM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.eP(p)
n=p.gaO()
s.toString
P.eK(null,null,s,o,n)}return}for(;b.gce()!=null;b=m){m=b.a
b.a=null
P.dM(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gdI()||b.gdH()){k=b.gfo()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.eP(p)
n=p.gaO()
s.toString
P.eK(null,null,s,o,n)
return}j=$.ag
if(j==null?k!=null:j!==k)$.ag=k
else j=null
if(b.gdH())new P.mD(t,r,q,b).$0()
else if(s){if(b.gdI())new P.mC(r,b,l).$0()}else if(b.gh0())new P.mB(t,r,b).$0()
if(j!=null)$.ag=j
s=r.b
if(!!J.af(s).$isbk){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bM(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.mv(s,i)
return}}i=b.b
b=i.bL()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
vo:function(){var t,s
for(;t=$.dP,t!=null;){$.eJ=null
s=t.b
$.dP=s
if(s==null)$.eI=null
t.a.$0()}},
vr:function(){$.oO=!0
try{P.vo()}finally{$.eJ=null
$.oO=!1
if($.dP!=null)$.$get$oH().$1(P.qo())}},
qk:function(a){var t=new P.fR(a,null)
if($.dP==null){$.eI=t
$.dP=t
if(!$.oO)$.$get$oH().$1(P.qo())}else{$.eI.b=t
$.eI=t}},
vq:function(a){var t,s,r
t=$.dP
if(t==null){P.qk(a)
$.eJ=$.eI
return}s=new P.fR(a,null)
r=$.eJ
if(r==null){s.b=t
$.eJ=s
$.dP=s}else{s.b=r.b
r.b=s
$.eJ=s
if(s.b==null)$.eI=s}},
qx:function(a){var t=$.ag
if(C.e===t){P.dQ(null,null,C.e,a)
return}t.toString
P.dQ(null,null,t,t.co(a,!0))},
w6:function(a,b){return new P.nb(null,a,!1,[b])},
oQ:function(a){return},
qf:function(a,b){var t=$.ag
t.toString
P.eK(null,null,t,a,b)},
vp:function(){},
vj:function(a,b,c){var t=a.bR()
if(!!J.af(t).$isbk&&t!==$.$get$ed())t.bE(new P.nl(b,c))
else b.b8(c)},
vd:function(a,b,c,d,e,f,g){var t,s
t=$.ag
s=e?1:0
s=new P.eD(a,null,null,null,null,t,s,null,null,[f,g])
s.cY(b,c,d,e,g)
s.ez(a,b,c,d,e,f,g)
return s},
vi:function(a,b,c){$.ag.toString
a.bG(b,c)},
v7:function(a,b){var t=$.ag
if(t===C.e){t.toString
return P.oD(a,b)}return P.oD(a,t.co(b,!0))},
oD:function(a,b){var t=C.b.an(a.a,1000)
return H.v6(t<0?0:t,b)},
v8:function(){return $.ag},
eK:function(a,b,c,d,e){var t={}
t.a=d
P.vq(new P.nm(t,e))},
qh:function(a,b,c,d){var t,s
s=$.ag
if(s===c)return d.$0()
$.ag=c
t=s
try{s=d.$0()
return s}finally{$.ag=t}},
qj:function(a,b,c,d,e){var t,s
s=$.ag
if(s===c)return d.$1(e)
$.ag=c
t=s
try{s=d.$1(e)
return s}finally{$.ag=t}},
qi:function(a,b,c,d,e,f){var t,s
s=$.ag
if(s===c)return d.$2(e,f)
$.ag=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ag=t}},
dQ:function(a,b,c,d){var t=C.e!==c
if(t)d=c.co(d,!(!t||!1))
P.qk(d)},
ma:function ma(a){this.a=a},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function mb(a){this.a=a},
mc:function mc(a){this.a=a},
nj:function nj(a){this.a=a},
nk:function nk(a){this.a=a},
nn:function nn(a){this.a=a},
bk:function bk(){},
mj:function mj(){},
nh:function nh(a,$ti){this.a=a
this.$ti=$ti},
fX:function fX(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
b3:function b3(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ms:function ms(a,b){this.a=a
this.b=b},
mA:function mA(a,b){this.a=a
this.b=b},
mw:function mw(a){this.a=a},
mx:function mx(a){this.a=a},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a,b){this.a=a
this.b=b},
mz:function mz(a,b){this.a=a
this.b=b},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
mD:function mD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mE:function mE(a){this.a=a},
mC:function mC(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a,b){this.a=a
this.b=b},
cn:function cn(){},
lz:function lz(a){this.a=a},
lA:function lA(a,b){this.a=a
this.b=b},
lB:function lB(a,b){this.a=a
this.b=b},
lC:function lC(a,b){this.a=a
this.b=b},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
ly:function ly(a){this.a=a},
lw:function lw(){},
n7:function n7(){},
n9:function n9(a){this.a=a},
n8:function n8(a){this.a=a},
md:function md(){},
fS:function fS(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
fT:function fT(a,$ti){this.a=a
this.$ti=$ti},
fU:function fU(x,a,b,c,d,e,f,r,$ti){var _=this
_.x=x
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
bQ:function bQ(){},
mh:function mh(a,b,c){this.a=a
this.b=b
this.c=c},
mg:function mg(a){this.a=a},
na:function na(){},
fV:function fV(){},
eA:function eA(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
ml:function ml(b,c,a){this.b=b
this.c=c
this.a=a},
mk:function mk(){},
mW:function mW(){},
mX:function mX(a,b){this.a=a
this.b=b},
h_:function h_(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
nb:function nb(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nl:function nl(a,b){this.a=a
this.b=b},
eC:function eC(){},
eD:function eD(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
mT:function mT(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
df:function df(a,b){this.a=a
this.b=b},
ni:function ni(){},
nm:function nm(a,b){this.a=a
this.b=b},
n_:function n_(){},
n0:function n0(a,b){this.a=a
this.b=b},
n1:function n1(a,b){this.a=a
this.b=b},
n2:function n2(a,b){this.a=a
this.b=b},
ve:function(a,b){var t=a[b]
return t===a?null:t},
oJ:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
oI:function(){var t=Object.create(null)
P.oJ(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
cg:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
tT:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
ek:function(a){return H.vH(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
eG:function(a,b){return new P.fY(0,null,null,null,null,null,0,[a,b])},
vf:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
e:function(a,b,c,d,e){return new P.mG(0,null,null,null,null,[d,e])},
ok:function(a,b,c){var t,s
if(P.oP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$eL()
s.push(a)
try{P.vn(a,t)}finally{if(0>=s.length)return H.X(s,-1)
s.pop()}s=P.q_(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
fp:function(a,b,c){var t,s,r
if(P.oP(a))return b+"..."+c
t=new P.ew(b)
s=$.$get$eL()
s.push(a)
try{r=t
r.ae=P.q_(r.gae(),a,", ")}finally{if(0>=s.length)return H.X(s,-1)
s.pop()}s=t
s.ae=s.gae()+c
s=t.gae()
return s.charCodeAt(0)==0?s:s},
oP:function(a){var t,s
for(t=0;s=$.$get$eL(),t<s.length;++t)if(a===s[t])return!0
return!1},
vn:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bx(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.M())return
q=H.t(t.gP())
b.push(q)
s+=q.length+2;++r}if(!t.M()){if(r<=5)return
if(0>=b.length)return H.X(b,-1)
p=b.pop()
if(0>=b.length)return H.X(b,-1)
o=b.pop()}else{n=t.gP();++r
if(!t.M()){if(r<=4){b.push(H.t(n))
return}p=H.t(n)
if(0>=b.length)return H.X(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gP();++r
for(;t.M();n=m,m=l){l=t.gP();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.X(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.t(n)
p=H.t(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.X(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bE:function(a,b,c,d){return new P.mO(0,null,null,null,null,null,0,[d])},
op:function(a,b){var t,s
t=P.bE(null,null,null,b)
for(s=J.bx(a);s.M();)t.j(0,s.gP())
return t},
tW:function(a){var t,s,r
t={}
if(P.oP(a))return"{...}"
s=new P.ew("")
try{$.$get$eL().push(a)
r=s
r.ae=r.gae()+"{"
t.a=!0
a.cu(0,new P.jP(t,s))
t=s
t.ae=t.gae()+"}"}finally{t=$.$get$eL()
if(0>=t.length)return H.X(t,-1)
t.pop()}t=s.gae()
return t.charCodeAt(0)==0?t:t},
oq:function(a,b){var t=new P.jK(null,0,0,0,[b])
t.es(a,b)
return t},
mG:function mG(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
mJ:function mJ(a){this.a=a},
mH:function mH(a,$ti){this.a=a
this.$ti=$ti},
mI:function mI(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fY:function fY(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mO:function mO(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
mP:function mP(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mK:function mK(){},
dB:function dB(){},
fo:function fo(){},
ch:function ch(){},
jP:function jP(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mQ:function mQ(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kZ:function kZ(){},
kY:function kY(){},
q_:function(a,b,c){var t=J.bx(b)
if(!t.M())return a
if(c.length===0){do a+=H.t(t.gP())
while(t.M())}else{a+=H.t(t.gP())
for(;t.M();)a=a+c+H.t(t.gP())}return a},
rQ:function(a,b){return J.h5(a,b)},
pj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.rT(a)},
rT:function(a){var t=J.af(a)
if(!!t.$isdj)return t.J(a)
return H.kv(a)},
nQ:function(a){return new P.cr(!1,null,null,a)},
dX:function(a,b,c){return new P.cr(!0,a,b,c)},
fI:function(a,b,c){return new P.fH(null,null,!0,a,b,"Value not in range")},
bu:function(a,b,c,d,e){return new P.fH(b,c,!0,a,d,"Invalid value")},
pY:function(a,b,c,d,e,f){if(0>a||a>c)throw H.z(P.bu(a,0,c,"start",f))
if(a>b||b>c)throw H.z(P.bu(b,a,c,"end",f))
return b},
jg:function(a,b,c,d,e){var t=e!=null?e:J.cP(b)
return new P.jf(b,t,!0,a,c,"Index out of range")},
ir:function(a){return new P.mr(a)},
cE:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bx(a);s.M();)t.push(s.gP())
if(b)return t
t.fixed$length=Array
return t},
d:function(a,b){var t=P.cE(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
nE:function(a){H.vT(H.t(a))},
uy:function(a,b,c){return new H.fv(a,H.pP(a,!1,!0,!1),null,null)},
cp:function cp(){},
aL:function aL(){},
x:function x(){},
cu:function cu(a){this.a=a},
im:function im(){},
io:function io(){},
cT:function cT(){},
es:function es(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a){this.a=a},
dL:function dL(a){this.a=a},
c0:function c0(a){this.a=a},
bT:function bT(a){this.a=a},
km:function km(){},
fK:function fK(){},
ih:function ih(a){this.a=a},
mr:function mr(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,bJ,$ti){this.a=a
this.bJ=bJ
this.$ti=$ti},
a3:function a3(){},
W:function W(){},
fr:function fr(){},
a9:function a9(){},
c_:function c_(){},
bS:function bS(){},
aw:function aw(){},
d6:function d6(){},
cK:function cK(){},
O:function O(){},
ew:function ew(ae){this.ae=ae},
qp:function(a){var t,s
t=J.af(a)
if(!!t.$iscY){s=t.gaB(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.h0(a.data,a.height,a.width)},
vD:function(a){if(a instanceof P.h0)return{data:a.a,height:a.b,width:a.c}
return a},
ph:function(){var t=$.pf
if(t==null){t=J.nN(window.navigator.userAgent,"Opera",0)
$.pf=t}return t},
rS:function(){var t=$.pe
if(t==null){t=P.ph()!==!0&&J.nN(window.navigator.userAgent,"Trident/",0)
$.pe=t}return t},
pi:function(){var t=$.pg
if(t==null){t=P.ph()!==!0&&J.nN(window.navigator.userAgent,"WebKit",0)
$.pg=t}return t},
ne:function ne(){},
ng:function ng(a,b){this.a=a
this.b=b},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function nf(a,b){this.a=a
this.b=b},
vh:function(a){var t=new P.mY(0,0)
t.eB(a)
return t},
eF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
qc:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
uv:function(a,b,c,d,e){var t,s
if(typeof c!=="number")return c.aN()
if(c<0)t=-c*0
else t=c
if(typeof d!=="number")return d.aN()
if(d<0)s=-d*0
else s=d
return new P.cI(a,b,t,s,[e])},
mM:function mM(){},
mY:function mY(a,b){this.a=a
this.b=b},
cF:function cF(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mZ:function mZ(){},
cI:function cI(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
h7:function h7(){},
cQ:function cQ(){},
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
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iX:function iX(){},
j_:function j_(){},
bX:function bX(){},
cy:function cy(){},
je:function je(){},
jQ:function jQ(){},
jR:function jR(){},
kr:function kr(){},
kG:function kG(){},
kW:function kW(){},
lF:function lF(){},
b6:function b6(){},
lG:function lG(){},
lI:function lI(){},
fN:function fN(){},
lO:function lO(){},
ex:function ex(){},
lY:function lY(){},
lZ:function lZ(){},
eE:function eE(){},
n3:function n3(){},
n4:function n4(){},
n5:function n5(){},
cR:function cR(){}},W={
p7:function(a,b){var t=document.createElement("canvas")
t.width=b
t.height=a
return t},
rR:function(a,b,c,d){var t,s,r
t=document.createEvent("CustomEvent")
J.qR(t,d)
if(!J.af(d).$isa9)if(!J.af(d).$isor){s=d
if(typeof s!=="string"){s=d
s=typeof s==="number"}else s=!0}else s=!0
else s=!0
if(s)try{d=new P.nf([],[]).cO(d)
J.nM(t,a,!0,!0,d)}catch(r){H.b9(r)
J.nM(t,a,!0,!0,null)}else J.nM(t,a,!0,!0,null)
return t},
f_:function(a,b){var t,s,r,q,p,o,n
t=a==null?b==null:a===b
s=t||b.tagName==="HTML"
if(a==null||t){if(s)return new P.cF(0,0,[null])
throw H.z(P.nQ("Specified element is not a transitive offset parent of this element."))}r=W.f_(a.offsetParent,b)
q=r.a
p=C.c.ak(a.offsetLeft)
if(typeof q!=="number")return q.ac()
o=r.b
n=C.c.ak(a.offsetTop)
if(typeof o!=="number")return o.ac()
return new P.cF(q+p,o+n,[null])},
aR:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.qT(t,a)}catch(r){H.b9(r)}return t},
kl:function(a,b,c,d){var t=new Option(a,b,c,!1)
return t},
mN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
al:function(a,b,c,d,e){var t=W.vs(new W.mq(c))
t=new W.mp(0,a,b,t,!1,[e])
t.ey(a,b,c,!1,e)
return t},
vs:function(a){var t=$.ag
if(t===C.e)return a
return t.fA(a,!0)},
ac:function ac(){},
h9:function h9(){},
ha:function ha(){},
dg:function dg(){},
hh:function hh(){},
hk:function hk(){},
hm:function hm(){},
eS:function eS(){},
cS:function cS(){},
eW:function eW(){},
dk:function dk(){},
fg:function fg(){},
id:function id(){},
ig:function ig(){},
eY:function eY(){},
eZ:function eZ(){},
ii:function ii(){},
cv:function cv(){},
ip:function ip(){},
iq:function iq(){},
B:function B(){},
e2:function e2(){},
iT:function iT(){},
aT:function aT(){},
du:function du(){},
fh:function fh(){},
fi:function fi(){},
f9:function f9(){},
fc:function fc(){},
jc:function jc(){},
cY:function cY(){},
jd:function jd(){},
ff:function ff(){},
eu:function eu(){},
jA:function jA(){},
jC:function jC(){},
jG:function jG(){},
jO:function jO(){},
en:function en(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jX:function jX(){},
aJ:function aJ(){},
kf:function kf(){},
kg:function kg(){},
d8:function d8(){},
kh:function kh(){},
ki:function ki(){},
kk:function kk(){},
kn:function kn(){},
kq:function kq(){},
kx:function kx(){},
kV:function kV(){},
cl:function cl(){},
l0:function l0(){},
l5:function l5(){},
l8:function l8(){},
l9:function l9(){},
lE:function lE(){},
lN:function lN(){},
c2:function c2(){},
fQ:function fQ(){},
me:function me(){},
mi:function mi(){},
mm:function mm(){},
mF:function mF(){},
n6:function n6(){},
fW:function fW(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eB:function eB(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
mp:function mp(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
mq:function mq(a){this.a=a},
fe:function fe(){},
iY:function iY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti}},S={h8:function h8(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ho:function ho(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},jB:function jB(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},jM:function jM(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},k0:function k0(l,n,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
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
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},kX:function kX(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2}},L={
nT:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=P.O
s=A.bJ
r=P.a3
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#00ff00"),!0)
q.h(0,$.F,L.b("#EFEFEF"),!0)
q.h(0,$.E,L.b("#DEDEDE"),!0)
q.h(0,$.N,L.b("#FF2106"),!0)
q.h(0,$.M,L.b("#B01200"),!0)
q.h(0,$.H,L.b("#2F2F30"),!0)
q.h(0,$.I,L.b("#1D1D1D"),!0)
q.h(0,$.G,L.b("#080808"),!0)
q.h(0,$.D,L.b("#030303"),!0)
q.h(0,$.L,L.b("#242424"),!0)
q.h(0,$.K,L.b("#333333"),!0)
q.h(0,$.J,L.b("#141414"),!0)
p=[t]
o=P.d(H.a(["Frogs"],p),t)
n=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.d(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.d(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.r
i=[j]
h=P.d(H.a([new E.r($.bP,2,!0),new E.r($.cM,1,!0),new E.r($.b2,-2,!0)],i),j)
g=[X.u,P.x]
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
e=[A.dh]
d=A.V
f=new N.l6(0.5,1,0.5,q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(0,"Space",!0,!1,!1,null,null)
$.rx=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#ff0000"),!0)
f.h(0,$.F,L.b("#FF2106"),!0)
f.h(0,$.E,L.b("#AD1604"),!0)
f.h(0,$.N,L.b("#030303"),!0)
f.h(0,$.M,L.b("#242424"),!0)
f.h(0,$.H,L.b("#510606"),!0)
f.h(0,$.I,L.b("#3C0404"),!0)
f.h(0,$.G,L.b("#1F0000"),!0)
f.h(0,$.D,L.b("#B70D0E"),!0)
f.h(0,$.L,L.b("#970203"),!0)
f.h(0,$.K,L.b("#8E1516"),!0)
f.h(0,$.J,L.b("#640707"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.d(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.d(H.a([new E.r($.dK,2,!0),new E.r($.b2,1,!0),new E.r($.c1,-2,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new N.lQ(0.51,1,0.01,0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.01,0.01,0.01,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(1,"Time",!0,!1,!1,null,null)
$.rB=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#3399ff"),!0)
q.h(0,$.F,L.b("#10E0FF"),!0)
q.h(0,$.E,L.b("#00A4BB"),!0)
q.h(0,$.N,L.b("#FEFD49"),!0)
q.h(0,$.M,L.b("#D6D601"),!0)
q.h(0,$.H,L.b("#0052F3"),!0)
q.h(0,$.I,L.b("#0046D1"),!0)
q.h(0,$.G,L.b("#003396"),!0)
q.h(0,$.D,L.b("#0087EB"),!0)
q.h(0,$.L,L.b("#0070ED"),!0)
q.h(0,$.K,L.b("#006BE1"),!0)
q.h(0,$.J,L.b("#0054B0"),!0)
o=P.d(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.d(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.d(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.d(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.d(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.d(H.a([new E.r($.b2,2,!0),new E.r($.aC,1,!0),new E.r($.cM,-1,!0),new E.r($.bF,-1,!0),new E.r($.aH,0.05,!1)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new T.hj(0.5,1,0.01,0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.01,0.01,0.01,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(2,"Breath",!0,!1,!1,null,null)
$.qZ=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#003300"),!0)
f.h(0,$.F,L.b("#0F0F0F"),!0)
f.h(0,$.E,L.b("#010101"),!0)
f.h(0,$.N,L.b("#E8C15E"),!0)
f.h(0,$.M,L.b("#C7A140"),!0)
f.h(0,$.H,L.b("#1E211E"),!0)
f.h(0,$.I,L.b("#141614"),!0)
f.h(0,$.G,L.b("#0B0D0B"),!0)
f.h(0,$.D,L.b("#204020"),!0)
f.h(0,$.L,L.b("#11200F"),!0)
f.h(0,$.K,L.b("#192C16"),!0)
f.h(0,$.J,L.b("#121F10"),!0)
h=P.d(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.d(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.d(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.d(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.d(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.d(H.a([new E.r($.bP,2,!0),new E.r($.c1,1,!0),new E.r($.dK,-1,!0),new E.r($.cM,-1,!0),new E.r($.aH,0.01,!1)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new U.ik(1,0.5,0.5,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.01,0.01,0.01,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(3,"Doom",!0,!1,!1,null,null)
$.nR=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#993300"),!0)
q.h(0,$.F,L.b("#BA1016"),!0)
q.h(0,$.E,L.b("#820B0F"),!0)
q.h(0,$.N,L.b("#381B76"),!0)
q.h(0,$.M,L.b("#1E0C47"),!0)
q.h(0,$.H,L.b("#290704"),!0)
q.h(0,$.I,L.b("#230200"),!0)
q.h(0,$.G,L.b("#110000"),!0)
q.h(0,$.D,L.b("#3D190A"),!0)
q.h(0,$.L,L.b("#2C1207"),!0)
q.h(0,$.K,L.b("#5C2913"),!0)
q.h(0,$.J,L.b("#4C1F0D"),!0)
o=P.d(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.d(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.d(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.d(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.d(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.d(H.a([new E.r($.bF,2,!0),new E.r($.aC,1,!0),new E.r($.bP,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new T.hg(0.01,0.5,1,0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.01,0.01,0.01,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(4,"Blood",!0,!1,!1,null,null)
$.qY=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#ff3399"),!0)
f.h(0,$.F,L.b("#BD1864"),!0)
f.h(0,$.E,L.b("#780F3F"),!0)
f.h(0,$.N,L.b("#1D572E"),!0)
f.h(0,$.M,L.b("#11371D"),!0)
f.h(0,$.H,L.b("#4C1026"),!0)
f.h(0,$.I,L.b("#3C0D1F"),!0)
f.h(0,$.G,L.b("#260914"),!0)
f.h(0,$.D,L.b("#6B0829"),!0)
f.h(0,$.L,L.b("#4A0818"),!0)
f.h(0,$.K,L.b("#55142A"),!0)
f.h(0,$.J,L.b("#3D0E1E"),!0)
h=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.d(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.d(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.d(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.d(H.a([new E.r($.bF,1,!0),new E.eQ(null,1,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new T.j6(0.3,0.6,0.01,f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.01,0.01,0.01,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(5,"Heart",!0,!1,!1,null,null)
$.r5=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#3da35a"),!0)
q.h(0,$.F,L.b("#06FFC9"),!0)
q.h(0,$.E,L.b("#04A885"),!0)
q.h(0,$.N,L.b("#6E0E2E"),!0)
q.h(0,$.M,L.b("#4A0818"),!0)
q.h(0,$.H,L.b("#1D572E"),!0)
q.h(0,$.I,L.b("#164524"),!0)
q.h(0,$.G,L.b("#11371D"),!0)
q.h(0,$.D,L.b("#3DA35A"),!0)
q.h(0,$.L,L.b("#2E7A43"),!0)
q.h(0,$.K,L.b("#3B7E4F"),!0)
q.h(0,$.J,L.b("#265133"),!0)
o=P.d(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.d(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.d(H.a([new E.r($.c1,2,!0),new E.r($.dK,1,!0),new E.r($.bP,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new V.jZ(0.3,0.3,1,q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.01,0.01,0.01,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(6,"Mind",!0,!1,!1,null,null)
$.rd=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#ff9933"),!0)
f.h(0,$.F,L.b("#FEFD49"),!0)
f.h(0,$.E,L.b("#FEC910"),!0)
f.h(0,$.N,L.b("#10E0FF"),!0)
f.h(0,$.M,L.b("#00A4BB"),!0)
f.h(0,$.H,L.b("#FA4900"),!0)
f.h(0,$.I,L.b("#E94200"),!0)
f.h(0,$.G,L.b("#C33700"),!0)
f.h(0,$.D,L.b("#FF8800"),!0)
f.h(0,$.L,L.b("#D66E04"),!0)
f.h(0,$.K,L.b("#E76700"),!0)
f.h(0,$.J,L.b("#CA5B00"),!0)
h=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.d(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.d(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.d(H.a([new E.r($.dJ,2,!0),new E.r($.c1,1,!0),new E.r($.aC,-1,!0),new E.r($.cM,-1,!0),new E.r($.aH,0.2,!1)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new G.jF(1.01,0.5,0.01,f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.01,0.01,0.01,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(7,"Light",!0,!1,!1,null,null)
$.ra=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#000066"),!0)
q.h(0,$.F,L.b("#0B1030"),!0)
q.h(0,$.E,L.b("#04091A"),!0)
q.h(0,$.N,L.b("#CCC4B5"),!0)
q.h(0,$.M,L.b("#A89F8D"),!0)
q.h(0,$.H,L.b("#00164F"),!0)
q.h(0,$.I,L.b("#00103C"),!0)
q.h(0,$.G,L.b("#00071A"),!0)
q.h(0,$.D,L.b("#033476"),!0)
q.h(0,$.L,L.b("#02285B"),!0)
q.h(0,$.K,L.b("#004CB2"),!0)
q.h(0,$.J,L.b("#003E91"),!0)
o=P.d(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.d(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.d(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.d(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.d(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.d(H.a([new E.dY(D.oC(),null,3,!0),new E.dY(D.oC(),null,-1,!0),new E.r($.dK,-1,!0),new E.r($.aH,0.2,!1)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new Q.m_(1,1,1,q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.01,0.01,0.01,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(8,"Void",!0,!1,!1,null,null)
$.rD=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#9900cc"),!0)
f.h(0,$.F,L.b("#974AA7"),!0)
f.h(0,$.E,L.b("#6B347D"),!0)
f.h(0,$.N,L.b("#3D190A"),!0)
f.h(0,$.M,L.b("#2C1207"),!0)
f.h(0,$.H,L.b("#7C3FBA"),!0)
f.h(0,$.I,L.b("#6D34A6"),!0)
f.h(0,$.G,L.b("#592D86"),!0)
f.h(0,$.D,L.b("#381B76"),!0)
f.h(0,$.L,L.b("#1E0C47"),!0)
f.h(0,$.K,L.b("#281D36"),!0)
f.h(0,$.J,L.b("#1D1526"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.r($.cm,2,!0),new E.r($.b2,1,!0),new E.r($.aC,-1,!0),new E.r($.bF,-1,!0),new E.r($.aH,0.01,!1)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new E.kz(1,1,0.01,f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.01,0.01,0.01,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(9,"Rage",!0,!1,!1,null,null)
$.p4=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#ffcc66"),!0)
q.h(0,$.F,L.b("#FDF9EC"),!0)
q.h(0,$.E,L.b("#D6C794"),!0)
q.h(0,$.N,L.b("#164524"),!0)
q.h(0,$.M,L.b("#06280C"),!0)
q.h(0,$.H,L.b("#FFC331"),!0)
q.h(0,$.I,L.b("#F7BB2C"),!0)
q.h(0,$.G,L.b("#DBA523"),!0)
q.h(0,$.D,L.b("#FFE094"),!0)
q.h(0,$.L,L.b("#E8C15E"),!0)
q.h(0,$.K,L.b("#F6C54A"),!0)
q.h(0,$.J,L.b("#EDAF0C"),!0)
o=P.d(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.d(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.d(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.d(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.d(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.d(H.a([new E.r($.aC,2,!0),new E.r($.dJ,1,!0),new E.dY(D.oC(),null,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new X.j9(1,1,1,q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.01,0.01,0.01,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(10,"Hope",!0,!1,!1,null,null)
$.r7=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#494132"),!0)
f.h(0,$.F,L.b("#76C34E"),!0)
f.h(0,$.E,L.b("#4F8234"),!0)
f.h(0,$.N,L.b("#00164F"),!0)
f.h(0,$.M,L.b("#00071A"),!0)
f.h(0,$.H,L.b("#605542"),!0)
f.h(0,$.I,L.b("#494132"),!0)
f.h(0,$.G,L.b("#2D271E"),!0)
f.h(0,$.D,L.b("#CCC4B5"),!0)
f.h(0,$.L,L.b("#A89F8D"),!0)
f.h(0,$.K,L.b("#A29989"),!0)
f.h(0,$.J,L.b("#918673"),!0)
h=P.d(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.d(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.d(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.d(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.d(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.d(H.a([new E.r($.cM,2,!0),new E.r($.cm,1,!0),new E.r($.bP,-2,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new K.jE(0.01,1,0.03,f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.01,0.01,0.01,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(11,"Life",!0,!1,!1,null,null)
$.r9=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#9630BF"),!0)
q.h(0,$.F,L.b("#cc87e8"),!0)
q.h(0,$.E,L.b("#9545b7"),!0)
q.h(0,$.N,L.b("#ae769b"),!0)
q.h(0,$.M,L.b("#8f577c"),!0)
q.h(0,$.H,L.b("#9630bf"),!0)
q.h(0,$.I,L.b("#693773"),!0)
q.h(0,$.G,L.b("#4c2154"),!0)
q.h(0,$.D,L.b("#fcf9bd"),!0)
q.h(0,$.L,L.b("#e0d29e"),!0)
q.h(0,$.K,L.b("#bdb968"),!0)
q.h(0,$.J,L.b("#ab9b55"),!0)
o=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.d(H.a([new E.r($.bP,3,!0),new E.r($.aC,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new Z.il(1.01,0.3,0.01,q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.01,0.01,0.01,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(12,"Dream",!1,!1,!1,null,null)
$.r0=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#ff0000"),!0)
f.h(0,$.F,L.b("#ffff00"),!0)
f.h(0,$.E,L.b("#ffff00"),!0)
f.h(0,$.N,L.b("#508b2d"),!0)
f.h(0,$.M,L.b("#316c0d"),!0)
f.h(0,$.H,L.b("#dddd00"),!0)
f.h(0,$.I,L.b("#afaf00"),!0)
f.h(0,$.G,L.b("#8f8f00"),!0)
f.h(0,$.D,L.b("#ff0000"),!0)
f.h(0,$.L,L.b("#a8000a"),!0)
f.h(0,$.K,L.b("#b8151f"),!0)
f.h(0,$.J,L.b("#8c1d1d"),!0)
h=P.d(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),t)
k=P.d(H.a(["Juice","Joke","Jespacito"],p),t)
l=P.d(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),t)
m=P.d(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),t)
n=P.d(H.a([new E.r($.aH,13,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new Z.jy(13,13,13,f,h,k,l,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",m,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],n,0.01,0.01,0.01,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Juice",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(14,"Juice",!1,!1,!0,null,null)
$.p3=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#00ff00"),!0)
q.h(0,$.F,L.b("#00ff00"),!0)
q.h(0,$.E,L.b("#00ff00"),!0)
q.h(0,$.N,L.b("#00ff00"),!0)
q.h(0,$.M,L.b("#00cf00"),!0)
q.h(0,$.H,L.b("#171717"),!0)
q.h(0,$.I,L.b("#080808"),!0)
q.h(0,$.G,L.b("#080808"),!0)
q.h(0,$.D,L.b("#616161"),!0)
q.h(0,$.L,L.b("#3b3b3b"),!0)
q.h(0,$.K,L.b("#4a4a4a"),!0)
q.h(0,$.J,L.b("#292929"),!0)
n=P.d(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),t)
m=P.d(H.a(["Shogun"],p),t)
l=P.d(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),t)
k=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
h=P.d(H.a([new E.r($.cm,13,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new K.kS(13,13,13,q,n,m,l," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",k,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],h,0.01,0.01,0.01,0.5,15,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sauce",null,!1,!0,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(15,"Sauce",!1,!0,!1,null,null)
$.rt=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#933100"),!0)
o.h(0,$.F,L.b("#933100"),!0)
o.h(0,$.E,L.b("#682200"),!0)
o.h(0,$.N,L.b("#4c3a27"),!0)
o.h(0,$.M,L.b("#302418"),!0)
o.h(0,$.H,L.b("#a0562b"),!0)
o.h(0,$.I,L.b("#723e20"),!0)
o.h(0,$.G,L.b("#442513"),!0)
o.h(0,$.D,L.b("#963c07"),!0)
o.h(0,$.L,L.b("#682a06"),!0)
o.h(0,$.K,L.b("#6d4d3a"),!0)
o.h(0,$.J,L.b("#422e23"),!0)
h=P.d(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),t)
k=P.d(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),t)
l=P.d(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),t)
m=P.d(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),t)
n=P.d(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),t)
q=P.d(H.a([new E.r($.b2,10,!0),new E.r($.aC,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new L.lJ(2,0.7,0.7,o,h,k,l,m,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",n,["Lightning","Ice","Taserface"],["Taser"],q,0.01,0.01,0.01,0.5,16,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Taze",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(16,"Taze",!1,!1,!0,null,null)
$.rA=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#990000"),!0)
f.h(0,$.F,L.b("#ff0200"),!0)
f.h(0,$.E,L.b("#dd0000"),!0)
f.h(0,$.N,L.b("#25334f"),!0)
f.h(0,$.M,L.b("#07090f"),!0)
f.h(0,$.H,L.b("#c64f4f"),!0)
f.h(0,$.I,L.b("#a33f3f"),!0)
f.h(0,$.G,L.b("#843333"),!0)
f.h(0,$.D,L.b("#b5c1d2"),!0)
f.h(0,$.L,L.b("#939dac"),!0)
f.h(0,$.K,L.b("#3c3e42"),!0)
f.h(0,$.J,L.b("#202123"),!0)
q=P.d(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),t)
n=P.d(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),t)
m=P.d(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),t)
l=P.d(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),t)
k=P.d(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),t)
h=P.d(H.a([new E.r($.b2,2,!0),new E.r($.aC,5,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new V.kL(0.9,1.1,2,f,q,n,m,l,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",k,["Arrow","Yondu","Empathy"],["Arrow","Bow"],h,0.01,0.01,0.01,0.5,17,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rule",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(17,"Rule",!1,!1,!0,null,null)
$.rq=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#853dcc"),!0)
o.h(0,$.F,L.b("#f76261"),!0)
o.h(0,$.E,L.b("#913a39"),!0)
o.h(0,$.N,L.b("#ab4443"),!0)
o.h(0,$.M,L.b("#78302f"),!0)
o.h(0,$.H,L.b("#a54cff"),!0)
o.h(0,$.I,L.b("#8c41d9"),!0)
o.h(0,$.G,L.b("#7335b3"),!0)
o.h(0,$.D,L.b("#853dcc"),!0)
o.h(0,$.L,L.b("#642e99"),!0)
o.h(0,$.K,L.b("#4c2375"),!0)
o.h(0,$.J,L.b("#2b1442"),!0)
h=P.d(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),t)
k=P.d(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),t)
l=P.d(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),t)
m=P.d(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),t)
n=P.d(H.a([new E.r($.b2,15,!0),new E.r($.aC,-4,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new V.j8(3.1,2,0.7,o,h,k,l,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",m,["Hippo","Ranting"],["Vent"],n,0.01,0.01,0.01,0.5,18,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hippo",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(18,"Hippo",!1,!1,!0,null,null)
$.r6=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#959595"),!0)
q.h(0,$.F,L.b("#bfbfbf"),!0)
q.h(0,$.E,L.b("#959595"),!0)
q.h(0,$.N,L.b("#805233"),!0)
q.h(0,$.M,L.b("#663c1f"),!0)
q.h(0,$.H,L.b("#805233"),!0)
q.h(0,$.I,L.b("#737373"),!0)
q.h(0,$.G,L.b("#664d3c"),!0)
q.h(0,$.D,L.b("#663c1f"),!0)
q.h(0,$.L,L.b("#4d2d17"),!0)
q.h(0,$.K,L.b("#68594e"),!0)
q.h(0,$.J,L.b("#4f443b"),!0)
n=P.d(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),t)
m=P.d(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),t)
l=P.d(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),t)
k=P.d(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),t)
h=P.d(H.a([new E.r($.b2,5,!0),new E.r($.aC,5,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new L.hf(0.7,2,3.1,q,n,m,l,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",k,["Bear","Thought"],["Doorway"],h,0.01,0.01,0.01,0.5,19,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Bear",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(19,"Bear",!1,!1,!0,null,null)
$.qX=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#ebd837"),!0)
o.h(0,$.F,L.b("#ebd837"),!0)
o.h(0,$.E,L.b("#857a1f"),!0)
o.h(0,$.N,L.b("#857a1f"),!0)
o.h(0,$.M,L.b("#524b13"),!0)
o.h(0,$.H,L.b("#d0c217"),!0)
o.h(0,$.I,L.b("#9e9311"),!0)
o.h(0,$.G,L.b("#6b640c"),!0)
o.h(0,$.D,L.b("#c3c3c3"),!0)
o.h(0,$.L,L.b("#8f8f8f"),!0)
o.h(0,$.K,L.b("#a88e00"),!0)
o.h(0,$.J,L.b("#756300"),!0)
h=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
k=P.d(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
l=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
q=P.d(H.a([new E.r($.c1,2,!0),new E.r($.dK,1,!0),new E.r($.bP,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new A.k_(0.3,0.3,1,o,h,k,l,m,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,q,0.01,0.01,0.01,0.5,20,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mindstone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(20,"Mindstone",!1,!0,!0,null,null)
$.re=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#74a4ff"),!0)
f.h(0,$.F,L.b("#74a4ff"),!0)
f.h(0,$.E,L.b("#466299"),!0)
f.h(0,$.N,L.b("#466299"),!0)
f.h(0,$.M,L.b("#2f4166"),!0)
f.h(0,$.H,L.b("#d0c217"),!0)
f.h(0,$.I,L.b("#9e9311"),!0)
f.h(0,$.G,L.b("#6b640c"),!0)
f.h(0,$.D,L.b("#c3c3c3"),!0)
f.h(0,$.L,L.b("#8f8f8f"),!0)
f.h(0,$.K,L.b("#a88e00"),!0)
f.h(0,$.J,L.b("#756300"),!0)
q=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
n=P.d(H.a(["Frogs","Stone"],p),t)
m=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.r($.bP,2,!0),new E.r($.cM,1,!0),new E.r($.b2,-2,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new A.l7(0.5,1,0.5,f,q,n,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",l,k,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,21,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Spacestone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(21,"Spacestone",!1,!0,!0,null,null)
$.ry=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#9846cc"),!0)
o.h(0,$.F,L.b("#9846cc"),!0)
o.h(0,$.E,L.b("#4c2366"),!0)
o.h(0,$.N,L.b("#4c2366"),!0)
o.h(0,$.M,L.b("#261233"),!0)
o.h(0,$.H,L.b("#d0c217"),!0)
o.h(0,$.I,L.b("#9e9311"),!0)
o.h(0,$.G,L.b("#6b640c"),!0)
o.h(0,$.D,L.b("#c3c3c3"),!0)
o.h(0,$.L,L.b("#8f8f8f"),!0)
o.h(0,$.K,L.b("#a88e00"),!0)
o.h(0,$.J,L.b("#756300"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),t)
n=P.d(H.a([new E.r($.cm,2,!0),new E.r($.b2,1,!0),new E.r($.aC,-1,!0),new E.r($.bF,-1,!0),new E.r($.aH,0.01,!1)],i),j)
q=P.d(H.a(["Paradox Space"],p),t)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new A.ku(1,1,0.01,o,h,k,l,m,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,q,0.01,0.01,0.01,0.5,22,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Powerstone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(22,"Powerstone",!1,!0,!0,null,null)
$.ri=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#ffcb6f"),!0)
f.h(0,$.F,L.b("#ffcb6f"),!0)
f.h(0,$.E,L.b("#997a42"),!0)
f.h(0,$.N,L.b("#997a42"),!0)
f.h(0,$.M,L.b("#66512c"),!0)
f.h(0,$.H,L.b("#d0c217"),!0)
f.h(0,$.I,L.b("#9e9311"),!0)
f.h(0,$.G,L.b("#6b640c"),!0)
f.h(0,$.D,L.b("#c3c3c3"),!0)
f.h(0,$.L,L.b("#8f8f8f"),!0)
f.h(0,$.K,L.b("#a88e00"),!0)
f.h(0,$.J,L.b("#756300"),!0)
q=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),t)
n=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.r($.bF,1,!0),new E.eQ(null,1,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new A.l4(0.3,0.6,0.01,f,q,n,m,l,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",k,h,0.01,0.01,0.01,0.5,23,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Soulstone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(23,"Soulstone",!1,!0,!0,null,null)
$.rw=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#7ac476"),!0)
o.h(0,$.F,L.b("#7ac476"),!0)
o.h(0,$.E,L.b("#3a5e39"),!0)
o.h(0,$.N,L.b("#3a5e39"),!0)
o.h(0,$.M,L.b("#1b2b1a"),!0)
o.h(0,$.H,L.b("#d0c217"),!0)
o.h(0,$.I,L.b("#9e9311"),!0)
o.h(0,$.G,L.b("#6b640c"),!0)
o.h(0,$.D,L.b("#c3c3c3"),!0)
o.h(0,$.L,L.b("#8f8f8f"),!0)
o.h(0,$.K,L.b("#a88e00"),!0)
o.h(0,$.J,L.b("#756300"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
q=P.d(H.a([new E.r($.dK,2,!0),new E.r($.b2,1,!0),new E.r($.c1,-2,!0)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new A.lU(0.51,1,0.01,0.7,o,h,k,l,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],q,0.01,0.01,0.01,0.5,24,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Timestone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(24,"Timestone",!1,!0,!0,null,null)
$.rC=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#ed1c24"),!0)
f.h(0,$.F,L.b("#ed1c24"),!0)
f.h(0,$.E,L.b("#820a0f"),!0)
f.h(0,$.N,L.b("#820a0f"),!0)
f.h(0,$.M,L.b("#4f0609"),!0)
f.h(0,$.H,L.b("#d0c217"),!0)
f.h(0,$.I,L.b("#9e9311"),!0)
f.h(0,$.G,L.b("#6b640c"),!0)
f.h(0,$.D,L.b("#c3c3c3"),!0)
f.h(0,$.L,L.b("#8f8f8f"),!0)
f.h(0,$.K,L.b("#a88e00"),!0)
f.h(0,$.J,L.b("#756300"),!0)
q=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),t)
n=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.r($.dJ,2,!0),new E.r($.c1,1,!0),new E.r($.aC,-1,!0),new E.r($.cM,-1,!0),new E.r($.aH,0.2,!1)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new A.kF(1.01,0.5,0.01,f,q,n,m,l,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],k,h,0.01,0.01,0.01,0.5,25,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Realitystone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(25,"Realitystone",!1,!0,!0,null,null)
$.rk=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#e19aca"),!0)
o.h(0,$.F,L.b("#e19aca"),!0)
o.h(0,$.E,L.b("#7a546e"),!0)
o.h(0,$.N,L.b("#7a546e"),!0)
o.h(0,$.M,L.b("#473140"),!0)
o.h(0,$.H,L.b("#d0c217"),!0)
o.h(0,$.I,L.b("#9e9311"),!0)
o.h(0,$.G,L.b("#6b640c"),!0)
o.h(0,$.D,L.b("#c3c3c3"),!0)
o.h(0,$.L,L.b("#8f8f8f"),!0)
o.h(0,$.K,L.b("#a88e00"),!0)
o.h(0,$.J,L.b("#756300"),!0)
h=P.d(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),t)
k=P.d(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),t)
n=P.d(H.a([new E.r($.aC,-1,!0),new E.r($.cm,2,!0)],i),j)
q=P.d(H.a(["Paradox Space"],p),t)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new A.j2(2,1.5,1,o,h,k,l,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],n,q,0.01,0.01,0.01,0.5,26,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Gauntlet",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(26,"Gauntlet",!1,!0,!0,null,null)
$.r3=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#c55555"),!0)
f.h(0,$.F,L.b("#c55555"),!0)
f.h(0,$.E,L.b("#090404"),!0)
f.h(0,$.N,L.b("#ba872e"),!0)
f.h(0,$.M,L.b("#8e694e"),!0)
f.h(0,$.H,L.b("#b59e5d"),!0)
f.h(0,$.I,L.b("#837243"),!0)
f.h(0,$.G,L.b("#4f4528"),!0)
f.h(0,$.D,L.b("#9fbfbf"),!0)
f.h(0,$.L,L.b("#95b5b5"),!0)
f.h(0,$.K,L.b("#956f6f"),!0)
f.h(0,$.J,L.b("#714b4b"),!0)
q=P.d(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),t)
n=P.d(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),t)
m=P.d(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),t)
l=P.d(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),t)
k=P.d(H.a([new E.r($.aC,-1,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new D.jS(2,0.5,1,f,q,n,m,"cURSED","Some cursed meme music starts to play.",l,["memes"],["memes"],k,0.01,0.01,0.01,0.5,27,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Meme",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(27,"Meme",!1,!1,!0,null,null)
$.rb=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#010067"),!0)
o.h(0,$.F,L.b("#010067"),!0)
o.h(0,$.E,L.b("#000033"),!0)
o.h(0,$.N,L.b("#000033"),!0)
o.h(0,$.M,L.b("#00000d"),!0)
o.h(0,$.H,L.b("#0052F3"),!0)
o.h(0,$.I,L.b("#0046D1"),!0)
o.h(0,$.G,L.b("#003396"),!0)
o.h(0,$.D,L.b("#0b0a33"),!0)
o.h(0,$.L,L.b("#0a0a1a"),!0)
o.h(0,$.K,L.b("#0b0b1b"),!0)
o.h(0,$.J,L.b("#030308"),!0)
k=P.d(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),t)
l=P.d(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),t)
m=P.d(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),t)
n=P.d(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),t)
q=P.d(["Thanos","Phobos","Deimos","Boreas"],t)
f=P.d(H.a([new E.r($.b2,2,!0),new E.r($.aC,-1,!0),new E.r($.bF,-1,!0)],i),j)
h=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
h.h(0,$.P,L.b("#FF9B00"),!0)
h.h(0,$.F,L.b("#FF9B00"),!0)
h.h(0,$.E,L.b("#FF8700"),!0)
h.h(0,$.N,L.b("#7F7F7F"),!0)
h.h(0,$.M,L.b("#727272"),!0)
h.h(0,$.H,L.b("#A3A3A3"),!0)
h.h(0,$.I,L.b("#999999"),!0)
h.h(0,$.G,L.b("#898989"),!0)
h.h(0,$.D,L.b("#EFEFEF"),!0)
h.h(0,$.L,L.b("#DBDBDB"),!0)
h.h(0,$.K,L.b("#C6C6C6"),!0)
h.h(0,$.J,L.b("#ADADAD"),!0)
h=new S.ho(0.5,0.7,1,o,k,l,m,n,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],q,f,0.01,0.01,0.01,0.5,28,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Chill",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
h.R(28,"Chill",!1,!1,!0,null,null)
$.r_=h
h=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
h.h(0,$.P,L.b("#007fbf"),!0)
h.h(0,$.F,L.b("#007fbf"),!0)
h.h(0,$.E,L.b("#4d6e80"),!0)
h.h(0,$.N,L.b("#999999"),!0)
h.h(0,$.M,L.b("#666666"),!0)
h.h(0,$.H,L.b("#8a9499"),!0)
h.h(0,$.I,L.b("#5c6366"),!0)
h.h(0,$.G,L.b("#2e3133"),!0)
h.h(0,$.D,L.b("#86acbf"),!0)
h.h(0,$.L,L.b("#627e8c"),!0)
h.h(0,$.K,L.b("#8fa7b3"),!0)
h.h(0,$.J,L.b("#667780"),!0)
f=P.d(H.a(["Rune","Infinity","Magic","Fairies","Prediction","Circles","Majykks","Systems"],p),t)
q=P.d(H.a(["FAIRY PERSON","INFIINITELY CONFUSED","PREDICTIVE LAD"],p),t)
n=P.d(H.a(["Rune","Ruiner","Red","Ready","Retconner","Respondent"],p),t)
m=P.d(H.a(["Infinite","Magical","Runely","Majykkal","Systematically","Predictful"],p),t)
l=P.d(["Rune","Hecate","Hekate","Heh","Huh","Athena","Oracle"],t)
k=P.d(H.a([new E.r($.b2,2,!0),new E.r($.aC,-0.5,!0),new E.r($.aH,2,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new R.kM(0.5,1,1,0.5,h,f,q,n,m,"Magicity","In a flood of magic, the OWNER is strengthened and healed, and the ENEMY is weakened.",["rune","majykk","fairies","infinity","prediction"],["rune","runestones","magic","fairies"],l,k,0.01,0.01,0.01,0.5,29,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rune",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(29,"Rune",!1,!1,!0,null,null)
$.rr=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#ff7a00"),!0)
o.h(0,$.F,L.b("#ff7a00"),!0)
o.h(0,$.E,L.b("#cc6200"),!0)
o.h(0,$.N,L.b("#cc6200"),!0)
o.h(0,$.M,L.b("#994900"),!0)
o.h(0,$.H,L.b("#cc9766"),!0)
o.h(0,$.I,L.b("#99714d"),!0)
o.h(0,$.G,L.b("#664b33"),!0)
o.h(0,$.D,L.b("#e69245"),!0)
o.h(0,$.L,L.b("#b37136"),!0)
o.h(0,$.K,L.b("#cc823d"),!0)
o.h(0,$.J,L.b("#99622e"),!0)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new L.j5(o,0.01,0.01,0.01,0.5,30,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Haze",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(30,"Haze",!1,!1,!0,null,null)
$.r4=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#364447"),!0)
q.h(0,$.F,L.b("#28517b"),!0)
q.h(0,$.E,L.b("#143D67"),!0)
q.h(0,$.N,L.b("#E7D7A0"),!0)
q.h(0,$.M,L.b("#D6A482"),!0)
q.h(0,$.H,L.b("#A9D5DF"),!0)
q.h(0,$.I,L.b("#95c1cb"),!0)
q.h(0,$.G,L.b("#77a3ad"),!0)
q.h(0,$.D,L.b("#162E33"),!0)
q.h(0,$.L,L.b("#11292e"),!0)
q.h(0,$.K,L.b("#021a1f"),!0)
q.h(0,$.J,L.b("#021015"),!0)
o=P.d(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],p),t)
n=P.d(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],p),t)
m=P.d(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],p),t)
l=P.d(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],p),t)
k=P.d(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],p),t)
h=P.d(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],p),t)
f=P.d(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],p),t)
c=P.d(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],p),t)
b=P.d(H.a([new E.r($.cm,2,!0),new E.r($.c1,-1,!0),new E.r($.b2,-1,!0),new E.r($.aC,1,!0)],i),j)
a=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
a.h(0,$.P,L.b("#FF9B00"),!0)
a.h(0,$.F,L.b("#FF9B00"),!0)
a.h(0,$.E,L.b("#FF8700"),!0)
a.h(0,$.N,L.b("#7F7F7F"),!0)
a.h(0,$.M,L.b("#727272"),!0)
a.h(0,$.H,L.b("#A3A3A3"),!0)
a.h(0,$.I,L.b("#999999"),!0)
a.h(0,$.G,L.b("#898989"),!0)
a.h(0,$.D,L.b("#EFEFEF"),!0)
a.h(0,$.L,L.b("#DBDBDB"),!0)
a.h(0,$.K,L.b("#C6C6C6"),!0)
a.h(0,$.J,L.b("#ADADAD"),!0)
a=new L.jY(q,o,n,m,l,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,h,f,c,b,0.01,0.01,0.01,0.5,31,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Might",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,a,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
a.R(31,"Might",!1,!1,!1,null,null)
$.rc=a
a=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
a.h(0,$.P,L.b("#A4C1F4"),!0)
a.h(0,$.F,L.b("#A4C1F4"),!0)
a.h(0,$.E,L.b("#95AFDD"),!0)
a.h(0,$.N,L.b("#FFFFA5"),!0)
a.h(0,$.M,L.b("#BEBE9E"),!0)
a.h(0,$.H,L.b("#A4C1F4"),!0)
a.h(0,$.I,L.b("#95AFDD"),!0)
a.h(0,$.G,L.b("#88A0CC"),!0)
a.h(0,$.D,L.b("#D9D2E9"),!0)
a.h(0,$.L,L.b("#BBB5CA"),!0)
a.h(0,$.K,L.b("#CCC5DB"),!0)
a.h(0,$.J,L.b("#A49FB1"),!0)
b=P.d(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],p),t)
c=P.d(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],p),t)
f=P.d(H.a(["Moper","Martyr","Manager","Morning","Matter"],p),t)
h=P.d(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],p),t)
k=P.d(H.a([new E.r($.b2,2,!0),new E.r($.cm,-1,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new S.k0(a,b,c,f,h,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.01,0.01,0.01,0.5,32,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mist",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(32,"Mist",!1,!1,!1,null,null)
$.rf=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k=Y.bR()
q.h(0,$.P,L.b(k),!0)
k=Y.bR()
q.h(0,$.F,L.b(k),!0)
k=Y.bR()
q.h(0,$.E,L.b(k),!0)
k=Y.bR()
q.h(0,$.N,L.b(k),!0)
k=Y.bR()
q.h(0,$.M,L.b(k),!0)
k=Y.bR()
q.h(0,$.H,L.b(k),!0)
k=Y.bR()
q.h(0,$.I,L.b(k),!0)
k=Y.bR()
q.h(0,$.G,L.b(k),!0)
k=Y.bR()
q.h(0,$.D,L.b(k),!0)
k=Y.bR()
q.h(0,$.L,L.b(k),!0)
k=Y.bR()
q.h(0,$.K,L.b(k),!0)
k=Y.bR()
q.h(0,$.J,L.b(k),!0)
k=P.d(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],p),t)
h=P.d(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],p),t)
f=P.d(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],p),t)
c=P.d(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],p),t)
b=P.d(H.a([new E.r($.bF,-2,!0),new E.r($.aC,-1,!0),new E.r($.dJ,3,!0)],i),j)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new L.kA(q,k,h,f,c,"BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",b,0.01,0.01,0.01,0.5,33,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rain",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(33,"Rain",!1,!1,!1,null,null)
$.rj=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#b88654"),!0)
o.h(0,$.F,L.b("#783e05"),!0)
o.h(0,$.E,L.b("#4a0f00"),!0)
o.h(0,$.N,L.b("#0b6c6e"),!0)
o.h(0,$.M,L.b("#005d5e"),!0)
o.h(0,$.H,L.b("#f5b06c"),!0)
o.h(0,$.I,L.b("#e6a05e"),!0)
o.h(0,$.G,L.b("#b87232"),!0)
o.h(0,$.D,L.b("#ffd966"),!0)
o.h(0,$.L,L.b("#d1ab3b"),!0)
o.h(0,$.K,L.b("#7d5e00"),!0)
o.h(0,$.J,L.b("#6e4f00"),!0)
b=P.d(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],p),t)
c=P.d(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],p),t)
f=P.d(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],p),t)
h=P.d(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],p),t)
k=P.d(H.a([new E.r($.bF,3,!0),new E.r($.aC,-2,!0)],i),j)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new Y.kQ(o,b,c,f,h," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.01,0.01,0.01,0.5,34,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sand",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(34,"Sand",!1,!1,!1,null,null)
$.rs=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#ff9933"),!0)
q.h(0,$.F,L.b("#ffffff"),!0)
q.h(0,$.E,L.b("#999999"),!0)
q.h(0,$.N,L.b("#ffff00"),!0)
q.h(0,$.M,L.b("#8f8f00"),!0)
q.h(0,$.H,L.b("#d1e0e3"),!0)
q.h(0,$.I,L.b("#c5d1d4"),!0)
q.h(0,$.G,L.b("#b7c2c4"),!0)
q.h(0,$.D,L.b("#00ffff"),!0)
q.h(0,$.L,L.b("#009999"),!0)
q.h(0,$.K,L.b("#b5b5b5"),!0)
q.h(0,$.J,L.b("#858585"),!0)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new L.l_(q,0.01,0.01,0.01,0.5,35,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sky",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(35,"Sky",!1,!1,!1,null,null)
$.ru=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#10dede"),!0)
o.h(0,$.F,L.b("#00ffff"),!0)
o.h(0,$.E,L.b("#00d1d1"),!0)
o.h(0,$.N,L.b("#ff0000"),!0)
o.h(0,$.M,L.b("#d10000"),!0)
o.h(0,$.H,L.b("#4985e6"),!0)
o.h(0,$.I,L.b("#3a76d6"),!0)
o.h(0,$.G,L.b("#2d6ac4"),!0)
o.h(0,$.D,L.b("#331c73"),!0)
o.h(0,$.L,L.b("#050045"),!0)
o.h(0,$.K,L.b("#8d7cc2"),!0)
o.h(0,$.J,L.b("#7c6db3"),!0)
q=P.d(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],p),t)
n=P.d(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],p),t)
m=P.d(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],p),t)
l=P.d(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],p),t)
k=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k.h(0,$.P,L.b("#FF9B00"),!0)
k.h(0,$.F,L.b("#FF9B00"),!0)
k.h(0,$.E,L.b("#FF8700"),!0)
k.h(0,$.N,L.b("#7F7F7F"),!0)
k.h(0,$.M,L.b("#727272"),!0)
k.h(0,$.H,L.b("#A3A3A3"),!0)
k.h(0,$.I,L.b("#999999"),!0)
k.h(0,$.G,L.b("#898989"),!0)
k.h(0,$.D,L.b("#EFEFEF"),!0)
k.h(0,$.L,L.b("#DBDBDB"),!0)
k.h(0,$.K,L.b("#C6C6C6"),!0)
k.h(0,$.J,L.b("#ADADAD"),!0)
k=new Z.kI(o,q,n,m,l,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.01,0.01,0.01,0.5,36,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rhyme",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
k.R(36,"Rhyme",!1,!1,!1,null,null)
$.rp=k
k=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k.h(0,$.P,L.b("#003300"),!0)
k.h(0,$.F,L.b("#383838"),!0)
k.h(0,$.E,L.b("#000000"),!0)
k.h(0,$.N,L.b("#2b1130"),!0)
k.h(0,$.M,L.b("#130017"),!0)
k.h(0,$.H,L.b("#eba900"),!0)
k.h(0,$.I,L.b("#c28900"),!0)
k.h(0,$.G,L.b("#855900"),!0)
k.h(0,$.D,L.b("#ffd800"),!0)
k.h(0,$.L,L.b("#d1a900"),!0)
k.h(0,$.K,L.b("#44244d"),!0)
k.h(0,$.J,L.b("#271128"),!0)
l=P.d(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),t)
m=P.d(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),t)
n=P.d(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),t)
q=P.d(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),t)
o=P.d(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),t)
h=P.d(H.a([new E.r($.c1,2,!0),new E.r($.aC,1,!0),new E.r($.b2,-2,!0),new E.r($.aH,-0.1,!1)],i),j)
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#FF9B00"),!0)
f.h(0,$.F,L.b("#FF9B00"),!0)
f.h(0,$.E,L.b("#FF8700"),!0)
f.h(0,$.N,L.b("#7F7F7F"),!0)
f.h(0,$.M,L.b("#727272"),!0)
f.h(0,$.H,L.b("#A3A3A3"),!0)
f.h(0,$.I,L.b("#999999"),!0)
f.h(0,$.G,L.b("#898989"),!0)
f.h(0,$.D,L.b("#EFEFEF"),!0)
f.h(0,$.L,L.b("#DBDBDB"),!0)
f.h(0,$.K,L.b("#C6C6C6"),!0)
f.h(0,$.J,L.b("#ADADAD"),!0)
f=new Q.jD(0.01,0.9,0.1,1,k,l,m,n,q,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,o,h,0.01,0.01,0.01,0.5,37,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(37,"Law",!1,!1,!1,null,null)
$.r8=f
f=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.P,L.b("#f0b000"),!0)
f.h(0,$.F,L.b("#ffd966"),!0)
f.h(0,$.E,L.b("#f0ca59"),!0)
f.h(0,$.N,L.b("#ffff00"),!0)
f.h(0,$.M,L.b("#8f8f00"),!0)
f.h(0,$.H,L.b("#92c27c"),!0)
f.h(0,$.I,L.b("#83b36d"),!0)
f.h(0,$.G,L.b("#74a35f"),!0)
f.h(0,$.D,L.b("#39751d"),!0)
f.h(0,$.L,L.b("#2a630e"),!0)
f.h(0,$.K,L.b("#bd8e00"),!0)
f.h(0,$.J,L.b("#ad7c00"),!0)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new L.iO(f,0.01,0.01,0.01,0.5,38,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Fate",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(38,"Fate",!1,!1,!1,null,null)
$.r1=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#b2e3eb"),!0)
q.h(0,$.F,L.b("#fefefe"),!0)
q.h(0,$.E,L.b("#dfdfdf"),!0)
q.h(0,$.N,L.b("#00ffff"),!0)
q.h(0,$.M,L.b("#009090"),!0)
q.h(0,$.H,L.b("#999999"),!0)
q.h(0,$.I,L.b("#8a8a8a"),!0)
q.h(0,$.G,L.b("#7a7a7a"),!0)
q.h(0,$.D,L.b("#d0e2f2"),!0)
q.h(0,$.L,L.b("#c3d4e3"),!0)
q.h(0,$.K,L.b("#b2e3eb"),!0)
q.h(0,$.J,L.b("#a4d4db"),!0)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new O.l2(2,q,0.01,0.01,0.01,0.5,39,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Snow",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(39,"Snow",!1,!1,!1,null,null)
$.rv=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#ee0000"),!0)
o.h(0,$.F,L.b("#ff0000"),!0)
o.h(0,$.E,L.b("#d10000"),!0)
o.h(0,$.N,L.b("#00ffff"),!0)
o.h(0,$.M,L.b("#00d1d1"),!0)
o.h(0,$.H,L.b("#e68f39"),!0)
o.h(0,$.I,L.b("#d67e2b"),!0)
o.h(0,$.G,L.b("#c46b1d"),!0)
o.h(0,$.D,L.b("#e65c00"),!0)
o.h(0,$.L,L.b("#b82e00"),!0)
o.h(0,$.K,L.b("#ffd966"),!0)
o.h(0,$.J,L.b("#d1ab3b"),!0)
q=P.d(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],p),t)
n=P.d(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],p),t)
m=P.d(H.a(["Flamer","Florist","Friar","Foodie"],p),t)
l=P.d(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],p),t)
j=P.d(H.a([new E.r($.b2,2,!0),new E.r($.cm,1,!0),new E.r($.bF,-2,!0)],i),j)
k=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k.h(0,$.P,L.b("#FF9B00"),!0)
k.h(0,$.F,L.b("#FF9B00"),!0)
k.h(0,$.E,L.b("#FF8700"),!0)
k.h(0,$.N,L.b("#7F7F7F"),!0)
k.h(0,$.M,L.b("#727272"),!0)
k.h(0,$.H,L.b("#A3A3A3"),!0)
k.h(0,$.I,L.b("#999999"),!0)
k.h(0,$.G,L.b("#898989"),!0)
k.h(0,$.D,L.b("#EFEFEF"),!0)
k.h(0,$.L,L.b("#DBDBDB"),!0)
k.h(0,$.K,L.b("#C6C6C6"),!0)
k.h(0,$.J,L.b("#ADADAD"),!0)
k=new O.iZ(o,q,n,m,l,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",j,0.01,0.01,0.01,0.5,40,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Flow",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
k.R(40,"Flow",!1,!1,!1,null,null)
$.r2=k
k=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k.h(0,$.P,L.b("#ffff33"),!0)
k.h(0,$.F,L.b("#ffff00"),!0)
k.h(0,$.E,L.b("#d1d100"),!0)
k.h(0,$.N,L.b("#00ffff"),!0)
k.h(0,$.M,L.b("#009999"),!0)
k.h(0,$.H,L.b("#0c5494"),!0)
k.h(0,$.I,L.b("#004785"),!0)
k.h(0,$.G,L.b("#003b75"),!0)
k.h(0,$.D,L.b("#20124d"),!0)
k.h(0,$.L,L.b("#11033d"),!0)
k.h(0,$.K,L.b("#0c323b"),!0)
k.h(0,$.J,L.b("#00232b"),!0)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new U.la(k,0.01,0.01,0.01,0.5,41,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Stars",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(41,"Stars",!1,!1,!1,null,null)
$.rz=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FFFF00"),!0)
q.h(0,$.F,L.b("#FFFF00"),!0)
q.h(0,$.E,L.b("#FFC935"),!0)
q.h(0,$.N,L.b("#FFC935"),!0)
q.h(0,$.M,L.b("#cca12a"),!0)
q.h(0,$.H,L.b("#FFCC00"),!0)
q.h(0,$.I,L.b("#FF9B00"),!0)
q.h(0,$.G,L.b("#C66900"),!0)
q.h(0,$.D,L.b("#FFD91C"),!0)
q.h(0,$.L,L.b("#FFE993"),!0)
q.h(0,$.K,L.b("#FFB71C"),!0)
q.h(0,$.J,L.b("#C67D00"),!0)
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.P,L.b("#FF9B00"),!0)
o.h(0,$.F,L.b("#FF9B00"),!0)
o.h(0,$.E,L.b("#FF8700"),!0)
o.h(0,$.N,L.b("#7F7F7F"),!0)
o.h(0,$.M,L.b("#727272"),!0)
o.h(0,$.H,L.b("#A3A3A3"),!0)
o.h(0,$.I,L.b("#999999"),!0)
o.h(0,$.G,L.b("#898989"),!0)
o.h(0,$.D,L.b("#EFEFEF"),!0)
o.h(0,$.L,L.b("#DBDBDB"),!0)
o.h(0,$.K,L.b("#C6C6C6"),!0)
o.h(0,$.J,L.b("#ADADAD"),!0)
o=new B.k2(q,0.01,0.01,0.01,0.5,42,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"MoonProspit",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(42,"MoonProspit",!1,!1,!0,null,null)
$.rh=o
o=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.F,L.b("#F092FF"),!0)
o.h(0,$.E,L.b("#D456EA"),!0)
o.h(0,$.N,L.b("#D456EA"),!0)
o.h(0,$.M,L.b("#a643b8"),!0)
o.h(0,$.H,L.b("#C87CFF"),!0)
o.h(0,$.I,L.b("#AA00FF"),!0)
o.h(0,$.G,L.b("#6900AF"),!0)
o.h(0,$.D,L.b("#DE00FF"),!0)
o.h(0,$.L,L.b("#E760FF"),!0)
o.h(0,$.K,L.b("#B400CC"),!0)
o.h(0,$.J,L.b("#770E87"),!0)
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new O.k1(o,0.01,0.01,0.01,0.5,43,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"MoonDerse",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(43,"MoonDerse",!1,!1,!0,null,null)
$.rg=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#959595"),!0)
q.h(0,$.F,L.b("#bfbfbf"),!0)
q.h(0,$.E,L.b("#959595"),!0)
q.h(0,$.N,L.b("#805233"),!0)
q.h(0,$.M,L.b("#663c1f"),!0)
q.h(0,$.H,L.b("#805233"),!0)
q.h(0,$.I,L.b("#737373"),!0)
q.h(0,$.G,L.b("#664d3c"),!0)
q.h(0,$.D,L.b("#663c1f"),!0)
q.h(0,$.L,L.b("#4d2d17"),!0)
q.h(0,$.K,L.b("#68594e"),!0)
q.h(0,$.J,L.b("#4f443b"),!0)
o=P.d(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),t)
n=$.p4
m=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.P,L.b("#FF9B00"),!0)
m.h(0,$.F,L.b("#FF9B00"),!0)
m.h(0,$.E,L.b("#FF8700"),!0)
m.h(0,$.N,L.b("#7F7F7F"),!0)
m.h(0,$.M,L.b("#727272"),!0)
m.h(0,$.H,L.b("#A3A3A3"),!0)
m.h(0,$.I,L.b("#999999"),!0)
m.h(0,$.G,L.b("#898989"),!0)
m.h(0,$.D,L.b("#EFEFEF"),!0)
m.h(0,$.L,L.b("#DBDBDB"),!0)
m.h(0,$.K,L.b("#C6C6C6"),!0)
m.h(0,$.J,L.b("#ADADAD"),!0)
m=new L.kB(q,o,0.01,0.01,0.01,0.5,44,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Bear",null,!1,!0,!0,n,null,null,null,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
m.R(44,"Re_Bear",!1,!0,!0,null,n)
$.rl=m
m=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.P,L.b("#853dcc"),!0)
m.h(0,$.F,L.b("#f76261"),!0)
m.h(0,$.E,L.b("#913a39"),!0)
m.h(0,$.N,L.b("#ab4443"),!0)
m.h(0,$.M,L.b("#78302f"),!0)
m.h(0,$.H,L.b("#a54cff"),!0)
m.h(0,$.I,L.b("#8c41d9"),!0)
m.h(0,$.G,L.b("#7335b3"),!0)
m.h(0,$.D,L.b("#853dcc"),!0)
m.h(0,$.L,L.b("#642e99"),!0)
m.h(0,$.K,L.b("#4c2375"),!0)
m.h(0,$.J,L.b("#2b1442"),!0)
n=P.d(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),t)
o=$.nR
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new L.kC(m,n,0.01,0.01,0.01,0.5,45,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Hippo",null,!1,!0,!0,o,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(45,"Re_Hippo",!1,!0,!0,null,o)
$.rm=q
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#3c733c"),!0)
q.h(0,$.F,L.b("#3c733c"),!0)
q.h(0,$.E,L.b("#214021"),!0)
q.h(0,$.N,L.b("#214021"),!0)
q.h(0,$.M,L.b("#070d07"),!0)
q.h(0,$.H,L.b("#2f402f"),!0)
q.h(0,$.I,L.b("#1c261c"),!0)
q.h(0,$.G,L.b("#090d09"),!0)
q.h(0,$.D,L.b("#2e582e"),!0)
q.h(0,$.L,L.b("#142614"),!0)
q.h(0,$.K,L.b("#1b331b"),!0)
q.h(0,$.J,L.b("#070d07"),!0)
o=P.d(H.a(["Lock","Lockpicker","Loser","Loss","Leeway"],p),t)
n=$.nR
m=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.P,L.b("#FF9B00"),!0)
m.h(0,$.F,L.b("#FF9B00"),!0)
m.h(0,$.E,L.b("#FF8700"),!0)
m.h(0,$.N,L.b("#7F7F7F"),!0)
m.h(0,$.M,L.b("#727272"),!0)
m.h(0,$.H,L.b("#A3A3A3"),!0)
m.h(0,$.I,L.b("#999999"),!0)
m.h(0,$.G,L.b("#898989"),!0)
m.h(0,$.D,L.b("#EFEFEF"),!0)
m.h(0,$.L,L.b("#DBDBDB"),!0)
m.h(0,$.K,L.b("#C6C6C6"),!0)
m.h(0,$.J,L.b("#ADADAD"),!0)
m=new L.kD(q,o,0.01,0.01,0.01,0.5,46,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Lock",null,!1,!0,!0,n,null,null,null,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
m.R(46,"Re_Lock",!1,!0,!0,null,n)
$.rn=m
m=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.P,L.b("#9e9248"),!0)
m.h(0,$.F,L.b("#9e9248"),!0)
m.h(0,$.E,L.b("#6b6331"),!0)
m.h(0,$.N,L.b("#6b6331"),!0)
m.h(0,$.M,L.b("#38341a"),!0)
m.h(0,$.H,L.b("#9e9e3c"),!0)
m.h(0,$.I,L.b("#6b6b29"),!0)
m.h(0,$.G,L.b("#383815"),!0)
m.h(0,$.D,L.b("#992e2e"),!0)
m.h(0,$.L,L.b("#661f1f"),!0)
m.h(0,$.K,L.b("#6b2c30"),!0)
m.h(0,$.J,L.b("#381719"),!0)
n=P.d(H.a(["Piss","Parmesan","Potato","Pointless"],p),t)
o=$.p3
q=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.P,L.b("#FF9B00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.E,L.b("#FF8700"),!0)
q.h(0,$.N,L.b("#7F7F7F"),!0)
q.h(0,$.M,L.b("#727272"),!0)
q.h(0,$.H,L.b("#A3A3A3"),!0)
q.h(0,$.I,L.b("#999999"),!0)
q.h(0,$.G,L.b("#898989"),!0)
q.h(0,$.D,L.b("#EFEFEF"),!0)
q.h(0,$.L,L.b("#DBDBDB"),!0)
q.h(0,$.K,L.b("#C6C6C6"),!0)
q.h(0,$.J,L.b("#ADADAD"),!0)
q=new L.kE(m,n,0.01,0.01,0.01,0.5,47,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Piss",null,!1,!0,!0,o,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(47,"Re_Piss",!1,!0,!0,null,o)
$.ro=q
s=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
s.h(0,$.P,L.b("#FF9B00"),!0)
s.h(0,$.F,L.b("#FF9B00"),!0)
s.h(0,$.E,L.b("#FF8700"),!0)
s.h(0,$.N,L.b("#7F7F7F"),!0)
s.h(0,$.M,L.b("#727272"),!0)
s.h(0,$.H,L.b("#A3A3A3"),!0)
s.h(0,$.I,L.b("#999999"),!0)
s.h(0,$.G,L.b("#898989"),!0)
s.h(0,$.D,L.b("#EFEFEF"),!0)
s.h(0,$.L,L.b("#DBDBDB"),!0)
s.h(0,$.K,L.b("#C6C6C6"),!0)
s.h(0,$.J,L.b("#ADADAD"),!0)
d=new U.ib(0.01,0.01,0.01,0.5,254,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Combo",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,s,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
d.R(254,"Combo",!1,!0,!0,null,null)
$.p2=d
$.nS=L.qW(255,"Null",!1,!0,!1,null,null)},
rF:function(a){var t=$.$get$c8()
if(t.gag(t))L.nT()
if($.$get$c8().ap(a))return $.$get$c8().A(0,a)
return $.nS},
rG:function(a){var t,s
t=$.$get$c8()
if(t.gag(t))L.nT()
for(t=$.$get$c8(),t=t.gav(t),t=t.ga_(t);t.M();){s=t.gP()
if(J.ao(J.by(s),a))return s}return $.nS},
rE:function(){var t=$.$get$c8()
t=t.gav(t)
return new H.bG(t,new L.hc(),[H.an(t,"W",0)])},
qW:function(a,b,c,d,e,f,g){var t,s,r
t=P.O
s=A.bJ
r=P.a3
r=new L.C(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
r.h(0,$.P,L.b("#FF9B00"),!0)
r.h(0,$.F,L.b("#FF9B00"),!0)
r.h(0,$.E,L.b("#FF8700"),!0)
r.h(0,$.N,L.b("#7F7F7F"),!0)
r.h(0,$.M,L.b("#727272"),!0)
r.h(0,$.H,L.b("#A3A3A3"),!0)
r.h(0,$.I,L.b("#999999"),!0)
r.h(0,$.G,L.b("#898989"),!0)
r.h(0,$.D,L.b("#EFEFEF"),!0)
r.h(0,$.L,L.b("#DBDBDB"),!0)
r.h(0,$.K,L.b("#C6C6C6"),!0)
r.h(0,$.J,L.b("#ADADAD"),!0)
s=[t]
t=new L.cs(0.01,0.01,0.01,0.5,a,new H.l(0,null,null,null,null,null,0,[X.u,P.x]),null,"","",!1,b,null,c,d,e,g,f,null,null,!1,!1,!0,1,r,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.r]),H.a([],[A.dh]),Q.p(null,null,A.V))
t.R(a,b,c,d,e,f,g)
return t},
b:function(a){if(C.f.eg(a,"#"))return A.eU(C.f.b2(a,1))
else return A.eU(a)},
hc:function hc(){},
cs:function cs(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(l,n,q,t,u,v,w,B,C,D,F,E,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.y2=y2
_.p=p
_.m=m},
iO:function iO(l,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},
j5:function j5(l,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},
jY:function jY(l,n,q,t,u,v,w,B,C,D,F,E,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
kA:function kA(l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
kB:function kB(l,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
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
_.y2=y2
_.p=p
_.m=m},
kC:function kC(l,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
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
_.y2=y2
_.p=p
_.m=m},
kD:function kD(l,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
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
_.y2=y2
_.p=p
_.m=m},
kE:function kE(l,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
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
_.y2=y2
_.p=p
_.m=m},
kU:function kU(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},
l_:function l_(l,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},
lJ:function lJ(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m}},M={hd:function hd(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ie:function ie(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},cU:function cU(){},m4:function m4(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},m5:function m5(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2}},O={he:function he(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},
t0:function(a,b,c,d){var t,s,r,q,p,o
t=document
s=t.createElement("div")
r=W.aR("file")
q=r.style
q.display="none"
q=J.aa(r)
q.sdO(r,!0)
p=P.bE(null,null,null,P.O)
for(o=0;o<1;++o)p.bm(0,Z.t1(a[o]))
if(p.a!==0)q.sfp(r,new H.e1(p,new O.iU(),[H.v(p,0),null]).h7(0,","))
q=q.gaj(r)
W.al(q.a,q.b,new O.iV(a,b,r),!1,H.v(q,0))
s.appendChild(r)
t=t.createElement("button")
t.textContent=c
W.al(t,"click",new O.iW(r),!1,W.aJ)
s.appendChild(t)
return s},
ec:function ec(){},
iU:function iU(){},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
eR:function eR(){},
iZ:function iZ(l,n,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
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
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
k1:function k1(l,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},
l2:function l2(l,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
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
_.y2=y2
_.p=p
_.m=m}},T={hg:function hg(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},hj:function hj(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},j6:function j6(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
oz:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.O]
s=H.a([],t)
r=[X.u,P.x]
q=A.V
p=E.r
o=[p]
n=[A.dh]
s=new S.jB(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Knight",new H.l(0,null,null,null,null,null,0,r),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Knight",3,!0,!1,!1)
$.uG=s
s=P.d(H.a([new E.r($.aH,0.4,!1)],o),p)
m=H.a([],t)
s=new S.kX(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Seer",new H.l(0,null,null,null,null,null,0,r),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Seer",6,!0,!1,!1)
$.uS=s
s=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],t)
m=H.a([],t)
s=new O.he("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],s,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Bard",new H.l(0,null,null,null,null,null,0,r),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Bard",9,!0,!1,!1)
$.uA=s
s=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],t)
m=H.a([],t)
s=new B.j7("Stalker",0.01,0.01,1.01,s,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Heir",new H.l(0,null,null,null,null,null,0,r),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Heir",8,!0,!1,!1)
$.uD=s
s=H.a([],t)
s=new U.jN(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Maid",new H.l(0,null,null,null,null,null,0,r),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Maid",0,!0,!1,!1)
$.uJ=s
s=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],t)
m=H.a([],t)
s=new N.kJ(1.01,0.51,0.01,s,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,r),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Rogue",4,!0,!1,!1)
$.uN=s
s=H.a([],t)
s=new V.ko(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,s,0.5,"Page",new H.l(0,null,null,null,null,null,0,r),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Page",1,!0,!1,!1)
$.uL=s
s=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],t)
m=H.a([],t)
s=new U.lP(1.01,0.01,1.01,s,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Thief",new H.l(0,null,null,null,null,null,0,r),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Thief",7,!0,!1,!1)
$.uV=s
s=P.d(H.a([new E.r($.aH,0.1,!1)],o),p)
m=H.a([],t)
s=new R.lH(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,r),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Sylph",5,!0,!1,!1)
$.uU=s
s=H.a([],t)
s=new N.kw("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Prince",new H.l(0,null,null,null,null,null,0,r),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Prince",10,!0,!1,!1)
$.uM=s
s=P.d(H.a([new E.r($.aH,0.1,!1)],o),p)
m=H.a([],t)
s=new M.m4("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Witch",new H.l(0,null,null,null,null,null,0,r),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Witch",11,!0,!1,!1)
$.uX=s
s=P.d(H.a([new E.r($.aH,0.4,!1)],o),p)
m=H.a([],t)
s=new S.jM("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Mage",new H.l(0,null,null,null,null,null,0,r),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Mage",2,!0,!1,!1)
$.uI=s
s=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],t)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],t)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],t)
j=P.d(H.a([new E.r($.aH,3,!1),new E.r($.oA,-2,!1)],o),p)
i=H.a([],t)
s=new E.m0("Scourge",0.01,0.01,1.01,s,m,l,k,!1,!0,!1,!1,!0,!1,j,"Glitch",0.01,0.01,0.01,i,0.5,"Waste",new H.l(0,null,null,null,null,null,0,r),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Waste",12,!1,!1,!1)
$.uW=s
s=H.a([],t)
s=new Y.kT("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Scout",new H.l(0,null,null,null,null,null,0,r),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Scout",13,!1,!1,!1)
$.uQ=s
s=P.d(H.a([new E.r($.aH,0.5,!1)],o),p)
m=H.a([],t)
s=new L.kU("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,r),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Scribe",15,!1,!1,!1)
$.uR=s
s=P.d(H.a([new E.r($.aH,0.5,!1)],o),p)
m=H.a([],t)
s=new E.kP(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,s,"Glitch",0.01,0.01,0.01,m,0.5,"Sage",new H.l(0,null,null,null,null,null,0,r),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Sage",14,!1,!1,!1)
$.uO=s
s=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],t)
m=H.a([],t)
s=new Y.j4("Highlord",0.51,0.01,1.01,s,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Guide",new H.l(0,null,null,null,null,null,0,r),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Guide",16,!1,!1,!1)
$.uC=s
s=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],t)
m=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],t)
l=P.d(H.a([new E.r($.aH,3,!1)],o),p)
k=H.a([],t)
s=new Y.j3(0.01,0.01,0.01,s,m,!1,!0,!1,!1,!0,!1,l,"Glitch",0.01,0.01,0.01,k,0.5,"Grace",new H.l(0,null,null,null,null,null,0,r),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Grace",17,!1,!1,!1)
$.uB=s
s=P.d(H.a([new E.r($.aH,0.1,!1)],o),p)
m=H.a([],t)
s=new E.k3("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Muse",new H.l(0,null,null,null,null,null,0,r),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Muse",18,!1,!1,!1)
$.uK=s
s=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],t)
m=Q.p(null,null,q)
l=P.d(H.a([new E.r($.aH,0.1,!1)],o),p)
k=H.a([],t)
s=new Z.jL("Shogun",0.01,0.5,2.01,s,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,m,l,"Glitch",0.01,0.01,0.01,k,0.5,"Lord",new H.l(0,null,null,null,null,null,0,r),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Lord",19,!1,!1,!1)
$.uH=s
s=P.d(H.a([new E.r($.aH,-0.1,!1),new E.r($.bP,1,!1)],o),p)
m=H.a([],t)
s=new Y.l1("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,s,"Glitch",0.01,0.01,0.01,m,0.5,"Smith",new H.l(0,null,null,null,null,null,0,r),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Smith",20,!1,!1,!1)
$.uT=s
s=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],t)
m=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],t)
l=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],t)
j=P.d(H.a([new E.r($.aH,4,!1),new E.r($.oA,-3,!1)],o),p)
i=H.a([],t)
s=new X.ja("Hooman",0.01,0.01,1.01,s,m,l,k,!1,!0,!1,!0,!1,!1,j,"Glitch",0.01,0.01,0.01,i,0.5,"Human",new H.l(0,null,null,null,null,null,0,r),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Human",21,!1,!1,!0)
$.uE=s
s=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],t)
m=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],t)
l=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],t)
k=H.a(["hussie"],t)
j=P.d(H.a([new E.r($.aH,41.3,!1),new E.r($.oA,41.3,!1)],o),p)
i=H.a([],t)
s=new Q.jb(20,20,0.5,s,m,l,k,!1,!0,!1,!0,!0,!1,j,"Glitch",0.01,0.01,0.01,i,0.5,"Hussie",new H.l(0,null,null,null,null,null,0,r),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Hussie",22,!1,!0,!0)
$.uF=s
s=H.a(["sans","sansly","sassy","super","soapful"],t)
m=H.a([],t)
s=new Y.kR(s,"Glitch",0.01,0.01,0.01,m,0.5,"Sans",new H.l(0,null,null,null,null,null,0,r),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
s.ab("Sans",23,!1,!0,!0)
$.uP=s
p=P.d(H.a([new E.r($.aH,-0.05,!1),new E.r($.bP,0.8,!1)],o),p)
s=H.a([],t)
t=new M.m5(0.51,0.01,1.01,["ASPECTIST EXTRAORDINAIRE"],["wrongfully","wacky","worriful","worried","worldly"],!0,!1,!1,!1,!1,!0,p,"Glitch",0.01,0.01,0.01,s,0.5,"Wright",new H.l(0,null,null,null,null,null,0,r),null,null,24,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,q),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],o),H.a([],n),1)
t.ab("Wright",24,!1,!1,!0)
$.uY=t
$.oy=T.uz("Null",255,!1,!0,!1)},
uZ:function(){var t=$.$get$ck()
t=t.gav(t)
return new H.bG(t,new T.kO(),[H.an(t,"W",0)])},
v_:function(a){var t=$.$get$ck()
if(t.gag(t))T.oz()
if($.$get$ck().ap(a))return $.$get$ck().A(0,a)
return $.oy},
v0:function(a){var t,s
t=$.$get$ck()
if(t.gag(t))T.oz()
for(t=$.$get$ck(),t=t.gav(t),t=t.ga_(t);t.M();){s=t.gP()
if(J.ao(J.by(s),a))return s}return $.oy},
uz:function(a,b,c,d,e){var t,s
t=[P.O]
s=H.a([],t)
t=new T.cJ("Glitch",0.01,0.01,0.01,s,0.5,a,new H.l(0,null,null,null,null,null,0,[X.u,P.x]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.p(null,null,A.V),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.r]),H.a([],[A.dh]),1)
t.ab(a,b,c,d,e)
return t},
kO:function kO(){},
cJ:function cJ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},U={ib:function ib(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},ik:function ik(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,aW,aX,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
_.a7=a7
_.aW=aW
_.aX=aX
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},iN:function iN(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jN:function jN(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},c:function c(a){this.a=a},T:function T(b,c,a){this.b=b
this.c=c
this.a=a},la:function la(l,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},lP:function lP(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2}},A={ic:function ic(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
h:function(a,b,c,d,e){var t=new A.V(c,e,null,a,!1,P.bE(null,null,null,G.U),0,3)
t.er(a,b,c,!1,e)
return t},
V:function V(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
ju:function ju(){},
jt:function jt(){},
k_:function k_(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
l7:function l7(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
ku:function ku(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
l4:function l4(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
lU:function lU(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
kF:function kF(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
j2:function j2(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
dh:function dh(){},
bA:function(a,b,c,d){var t=new A.bJ(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.ep(a,b,c,d)
return t},
ba:function(a){var t=A.bA(a.gcG(),a.c,a.d,a.a)
if(!a.e){t.b6(a.f,a.r,a.x)
t.e=!1}if(!a.y){t.cW(a.z,a.Q,a.ch)
t.y=!1}return t},
ia:function(a,b,c,d){var t=A.bA(0,0,0,255)
t.b=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.T(C.c.Y(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.T(C.c.Y(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.T(C.c.Y(d*255),0,255)
return t},
pc:function(a,b){if(b){if(typeof a!=="number")return a.cQ()
return A.bA((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.cQ()
return A.bA((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
eU:function(a){return A.pc(H.ud(a,16,new A.no()),J.cP(a)>=8)},
bJ:function bJ(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
no:function no(){},
kp:function kp(){},
fD:function fD(){},
pX:function(a){var t=new A.fG(null,null)
t.cX(a)
return t},
fG:function fG(a,b){this.a=a
this.b=b},
vQ:function(){T.oz()
L.nT()
B.o6()
var t=A.v4()
document.querySelector("#load").appendChild(O.t0($.$get$pZ(),t.gfq(),"Load statdata file",!0))},
v4:function(){var t=new A.fM(new F.dE(!0,!1,"Stat Review"),H.a([],[E.aW]),H.a([],[A.ev]),P.cg(P.O,D.cL))
t.ev()
return t},
v3:function(a,b,c,d,e){var t=new A.ev(a,!0,null,b,c,d,e,null,null,0,0,null,null,null,null)
t.eu(a,b,c,d,e)
return t},
vz:function(a,b,c){var t,s,r,q,p
t=H.a([1,2,5],[P.a3])
s=c/(b-a)
for(r=0;!0;){for(q=0;q<3;++q){p=t[q]*Math.pow(10,r)
if(s*p>=25)return p}++r}},
qr:function(a){var t,s,r,q,p,o
t=Math.abs(a)
s=H.a(["","K","M","B","T","Q","Qi","Sx"],[P.O])
for(r=0;r<8;r=q){q=r+1
if(t<Math.pow(1000,q)){p=t/Math.pow(1000,r)
o=C.d.bB(p,1)
if(C.f.fR(o,".0"))o=C.b.J(C.d.Y(p))
return(a<0?"-":"")+o+s[r]}}return"!!!"},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lm:function lm(){},
ln:function ln(){},
lo:function lo(){},
lp:function lp(a){this.a=a},
lq:function lq(){},
lr:function lr(a){this.a=a},
ls:function ls(a){this.a=a},
lt:function lt(){},
ll:function ll(a){this.a=a},
ev:function ev(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a,b){this.a=a
this.b=b},
lj:function lj(a,b){this.a=a
this.b=b},
lk:function lk(a){this.a=a},
lc:function lc(a){this.a=a}},V={ij:function ij(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},j8:function j8(l,n,q,t,u,v,w,B,C,D,F,E,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.y2=y2
_.p=p
_.m=m},jZ:function jZ(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},ko:function ko(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},kL:function kL(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},lM:function lM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},Z={il:function il(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
t1:function(a){var t=$.$get$o5().gby()
return new H.bG(t,new Z.j1(a),[H.an(t,"W",0)])},
j1:function j1(a){this.a=a},
it:function it(){},
jy:function jy(l,n,q,t,u,v,w,B,C,D,F,E,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.y2=y2
_.p=p
_.m=m},
jL:function jL(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,B,C,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
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
kI:function kI(l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m}},X={dl:function dl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},di:function di(){},j9:function j9(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},ja:function ja(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},u:function u(a,b,c){this.a=a
this.b=b
this.c=c}},N={a_:function a_(){},jz:function jz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kw:function kw(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},kJ:function kJ(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},l3:function l3(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},l6:function l6(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},lQ:function lQ(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m}},E={fd:function fd(){},kj:function kj(){},r:function r(a,b,c){this.a=a
this.b=b
this.c=c},dY:function dY(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},k3:function k3(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},kz:function kz(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},kP:function kP(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},m0:function m0(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r2=r2},
rO:function(a,b,c,d,e){var t
if(P.rS()===!0||J.qI(window.navigator.userAgent,$.$get$pb())){$.$get$b4().as("IE or Edge detected, skipping.")
return}t=[{func:1,ret:A.bJ,args:[P.x]}]
t=new E.e0(!1,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.a([],[W.eu]),!1,H.a([],[E.cV]),H.a([],t),H.a([],[{func:1,ret:A.bJ,args:[P.x,P.x]}]),H.a([],t),A.bA(0,0,0,255),null)
b=A.pc(c,!1)
t.fI(b,e,d)
t.cs(0)
t.h2()
t.dQ()
$.$get$eT().j(0,t)
E.pa()
return t},
aj:function(a,b,c){var t,s
t=a.style
s=""+c+"px"
t.top=s
s=""+b+"px"
t.left=s},
ct:function(a,b,c,d){a.value=C.c.bB(C.c.T(E.rN(J.c7(a),d),b,c),d)},
rN:function(a,b){var t,s
for(t=a,s=0;s<b;++s){if(typeof t!=="number")return t.ai()
t*=10}t=J.qQ(t)
for(s=0;s<b;++s)t*=0.1
return t},
dm:function(a,b,c,d,e){var t=new E.cV(new F.dE(!1,!1,"FancySlider"),null,null,null,c,d,a,b,null,e,!1,null,null)
t.eq(a,b,c,d,e)
return t},
pa:function(){if($.p9)return
$.p9=!0
var t=W.aJ
W.al(window,"mouseup",new E.hq(),!1,t)
W.al(window,"mousemove",new E.hr(),!1,t)},
e0:function e0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(){},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hG:function hG(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
cV:function cV(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
hq:function hq(){},
hr:function hr(){},
aW:function aW(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r}},Y={j3:function j3(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},j4:function j4(rx,ry,x1,x2,y1,y2,p,m,l,n,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},cj:function cj(a,b){this.a=a
this.b=b},a4:function a4(a,b){this.a=a
this.b=b},bz:function bz(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},k5:function k5(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},aM:function aM(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},R:function R(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eX:function eX(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},ax:function ax(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bv:function bv(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},hp:function hp(c,a,b){this.c=c
this.a=a
this.b=b},at:function at(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},fE:function fE(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fb:function fb(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fF:function fF(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kQ:function kQ(l,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},kR:function kR(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},kT:function kT(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},l1:function l1(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},
vA:function(a){var t,s,r,q
t=C.y.hP(a," ")
for(s=t.ga_(t),r="";s.M();){q=s.gP()
r+=" "+(H.t(q.A(0,0).i2(0))+H.t(q.b2(0,1)))}return r},
bR:function(){var t,s,r
for(t="#",s=0;s<6;++s){r=C.c.Y($.$get$qu().a.be()*16)
if(r<0||r>=16)return H.X("0123456789ABCDEF",r)
t+="0123456789ABCDEF"[r]}return t}},B={j7:function j7(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
_.n=n
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
_.r1=r1
_.r2=r2},
o6:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=E.r
s=[t]
r=P.d(H.a([new E.r($.aC,1,!0),new E.r($.dJ,1,!0)],s),t)
q=[P.O]
p=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],q)
o=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],q)
n=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],q)
m=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
h=[X.u,P.x]
g=A.V
i=new F.k4(r,p,o,n,m,!1,l,k,j,i,1,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"loud","musical","Music")
i.I()
i.K()
B.bl(i)
$.t9=i
i=P.d(H.a([new E.r($.c1,-2,!0)],s),t)
j=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],q)
k=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],q)
l=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],q)
m=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],q)
n=H.a(["nobody"],q)
o=P.d(H.a([],s),t)
p=H.a(["Nobody"],q)
r=H.a(["Nobody"],q)
r=new S.h8(i,j,k,l,m,!1,n,o,p,r,13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"nerdy","smart","Academic")
r.I()
r.K()
B.bl(r)
$.t2=r
r=P.d(H.a([new E.r($.cm,2,!0)],s),t)
p=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],q)
o=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],q)
n=H.a(["MUSCLES HOARDER","BODY BOOSTER"],q)
m=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.hd(r,p,o,n,m,!1,l,k,j,i,4,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"dumb","athletic","Athletic")
r.I()
r.K()
B.bl(r)
$.t3=r
r=P.d(H.a([new E.r($.dK,-1,!0),new E.r($.dJ,1,!0)],s),t)
p=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],q)
o=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],q)
n=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],q)
m=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new A.ic(r,p,o,n,m,!1,l,k,j,i,0,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"dorky","funny","Comedy")
r.I()
r.K()
B.bl(r)
$.t4=r
r=P.d(H.a([new E.r($.aC,-1,!0),new E.r($.cM,-1,!0)],s),t)
p=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],q)
o=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],q)
n=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],q)
m=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new M.ie(r,p,o,n,m,!1,l,k,j,i,2,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"pretentious","cultured","Culture")
r.I()
r.K()
B.bl(r)
$.t5=r
r=P.d(H.a([new E.r($.aC,1,!0),new E.r($.bF,1,!0)],s),t)
p=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],q)
o=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],q)
n=H.a(["BATTERBRAT","GRITTY GUARDIAN"],q)
m=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.ij(r,p,o,n,m,!1,l,k,j,i,8,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"boring","domestic","Domestic")
r.I()
r.K()
B.bl(r)
$.t6=r
r=P.d(H.a([new E.r($.dJ,1,!0),new E.r($.bP,1,!0)],s),t)
p=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],q)
o=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],q)
n=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],q)
m=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new U.iN(r,p,o,n,m,!1,l,k,j,i,7,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"whimpy","imaginative","Fantasy")
r.I()
r.K()
B.bl(r)
$.t7=r
r=P.d(H.a([new E.r($.cm,1,!0),new E.r($.cM,1,!0)],s),t)
p=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],q)
o=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],q)
n=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],q)
m=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.jz(r,p,o,n,m,!1,l,k,j,i,6,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"harsh","fair-minded","Justice")
r.I()
r.K()
B.bl(r)
$.t8=r
r=P.d(H.a([new E.r($.b2,2,!0)],s),t)
p=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],q)
o=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],q)
n=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],q)
m=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new G.kt(r,p,o,n,m,!1,l,k,j,i,9,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"frivolous","geeky","PopCulture")
r.I()
r.K()
B.bl(r)
$.tb=r
r=P.d(H.a([new E.r($.bF,2,!0)],s),t)
p=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],q)
o=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],q)
n=H.a(["QUESTING CUPID","ROMANCE EXPERT"],q)
m=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new Q.kK(r,p,o,n,m,!1,l,k,j,i,12,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"obsessive","romantic","Romantic")
r.I()
r.K()
B.bl(r)
$.tc=r
r=P.d(H.a([new E.r($.aC,2,!0)],s),t)
p=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],q)
o=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],q)
n=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],q)
m=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new N.l3(r,p,o,n,m,!1,l,k,j,i,11,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"shallow","extroverted","Social")
r.I()
r.K()
B.bl(r)
$.td=r
r=P.d(H.a([new E.r($.bF,-1,!0),new E.r($.aC,-1,!0)],s),t)
p=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],q)
o=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],q)
n=H.a(["ENEMY #1","JERKWAD JOURNEYER"],q)
m=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new V.lM(r,p,o,n,m,!1,l,k,j,i,5,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"terrible","honest","Terrible")
r.I()
r.K()
B.bl(r)
$.tf=r
r=P.d(H.a([new E.r($.c1,2,!0)],s),t)
p=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],q)
o=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],q)
n=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],q)
m=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new F.m6(r,p,o,n,m,!1,l,k,j,i,3,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"wordy","lettered","Writing")
r.I()
r.K()
B.bl(r)
$.tg=r
r=P.d(H.a([new E.r($.bP,2,!0)],s),t)
p=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],q)
o=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],q)
n=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],q)
m=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],q)
l=H.a(["nobody"],q)
k=P.d(H.a([],s),t)
j=H.a(["Nobody"],q)
i=H.a(["Nobody"],q)
r=new D.lL(r,p,o,n,m,!1,l,k,j,i,10,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"awkward","techy","Technology")
r.I()
r.K()
B.bl(r)
$.te=r
r=H.a(["nobody"],q)
t=P.d(H.a([],s),t)
s=H.a(["Nobody"],q)
q=H.a(["Nobody"],q)
t=new B.cz(!0,r,t,s,q,-13,new H.l(0,null,null,null,null,null,0,h),["NONE"],Q.p(null,null,g),"","","Null")
t.I()
t.K()
B.bl(t)
$.ta=t},
bl:function(a){if($.$get$bM().ap(a.f))throw H.z("Duplicate aspect id for "+a.J(0)+": "+a.f+" is already registered for "+J.bq($.$get$bM().A(0,a.f))+".")
$.$get$bM().i(0,a.f,a)},
ps:function(a){var t,s
t=$.$get$bM()
if(t.gag(t))B.o6()
if($.$get$bM().ap(a))return $.$get$bM().A(0,a)
t="ERROR: could not find interest category "+a+"  and null is not supported. I have "
s=$.$get$bM()
throw H.z(t+s.gO(s)+" categories")},
pt:function(a){var t,s,r
t=$.$get$bM()
if(t.gag(t))B.o6()
for(t=$.$get$bM(),t=t.gav(t),t=t.ga_(t);t.M();){s=t.gP()
if(J.ao(J.by(s),a))return s}t="ERROR: could not find interest category "+H.t(a)+" and null is not supported. I have "
r=$.$get$bM()
throw H.z(t+r.gO(r)+" categories")},
th:function(){var t=$.$get$bM()
t=t.gav(t)
return new H.bG(t,new B.jh(),[H.an(t,"W",0)])},
jh:function jh(){},
cz:function cz(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
k2:function k2(l,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},
hl:function hl(a,b){this.a=a
this.b=b}},Q={jb:function jb(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2},jD:function jD(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,aW,aX,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
_.a7=a7
_.aW=aW
_.aX=aX
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.p=p
_.m=m},kK:function kK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},m_:function m_(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
p:function(a,b,c){var t=new Q.m2(null,null,[c])
t.ex(a,b,c)
return t},
oF:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.p(d,null,e)
s=a.gO(a)
C.a.sO(t.b,s)
if(H.dT(a,"$isW",[e],"$asW"))if(H.dT(a,"$isc3",[e],"$asc3"))for(s=J.bx(a.gbU()),r=0;s.M();){q=s.gP()
p=t.b
o=p.length
if(r>=o)return H.X(p,r)
p[r]=q;++r}else for(s=a.ga_(a),p=[H.v(t,0)],r=0;s.M();){n=s.gP()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.X(o,r)
o[r]=new Q.f(n,m,p);++r}else for(s=a.ga_(a),p=[e],o=[H.v(t,0)];s.M();){l=s.gP()
if(H.vC(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.X(m,0)
m[0]=new Q.f(l,k,o)}else if(H.dT(l,"$isf",p,null)){m=t.b
k=m.length
if(0>=k)return H.X(m,0)
m[0]=l}else throw H.z("Invalid entry type "+H.t(J.qN(l))+" for WeightedList<"+H.t(H.aK(H.c5(e)))+">. Should be "+H.t(H.aK(H.c5(e)))+" or WeightPair<"+H.t(H.aK(H.c5(e)))+">.")}return t},
oG:function(a,b,c,d){return new Q.fP(J.p_(a.gbU(),new Q.m3(c,d,b)),null,[c,d])},
c3:function c3(){},
m2:function m2(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fO:function fO(){},
f:function f(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
dc:function dc(){},
ey:function ey(){},
m1:function m1(a,$ti){this.a=a
this.$ti=$ti},
fP:function fP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
m3:function m3(a,b,c){this.a=a
this.b=b
this.c=c}},K={jE:function jE(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},kS:function kS(l,n,q,t,u,v,w,B,C,D,F,E,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.y2=y2
_.p=p
_.m=m}},G={jF:function jF(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},kt:function kt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fL:function fL(){},lb:function lb(b,a){this.b=b
this.a=a},
rP:function(a){var t,s,r,q,p,o,n
t=G.U
s=P.op(a,t)
r=P.bE(null,null,null,t)
q=H.a([],[G.eV])
for(t=G.tR(),p=J.bx(t.a),t=new H.ez(p,t.b,[H.v(t,0)]);t.M();){o=p.gP()
if(o.hC(s))q.push(o)}C.a.ef(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.c6)(q),++n){o=q[n]
if(o.hC(s)){r.j(0,o)
for(p=o.gek(),p=p.ga_(p);p.M();)s.am(0,p.gP())}}if(s.a!==0)r.bm(0,s)
return r},
tR:function(){var t=$.$get$pM()
t.toString
return new H.bG(t,new G.js(),[H.v(t,0)])},
U:function U(){},
eV:function eV(){},
js:function js(){}},D={jS:function jS(l,n,q,t,u,v,w,B,C,D,F,E,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
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
_.y2=y2
_.p=p
_.m=m},lL:function lL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oC:function(){var t=$.$get$oB()
return new H.bG(t,new D.lv(),[H.v(t,0)])},
lv:function lv(){},
cL:function cL(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={k4:function k4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},m6:function m6(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
tV:function(a,b){return new F.dE(b,!1,a)},
tU:function(a){if(a===C.t){window
return C.j.gay(C.j)}if(a===C.G){window
return C.j.ghG()}if(a===C.H){window
return C.j.gh1()}return P.vF()},
dD:function dD(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c}},R={
ut:function(a){var t,s
if(a.gO(a).b5(0,1)){a.A(0,1)
a.A(0,1)
t=!0}else t=!1
s=a.A(0,0)
s.ghN(s).gi0().dL("checking for two players, ps is "+H.t(a)+", ret is "+t)
return t},
uq:function(a){a.gar(a).gaR()
return!1},
ug:function(a){a.gar(a).gaR()
return!1},
us:function(a){a.gar(a).gaR()
return!1},
ur:function(a){a.gar(a).gaR()
return!1},
up:function(a){return a.gar(a).gbn().gi_()},
un:function(a){return a.gar(a).gbn().ghY()},
um:function(a){return a.gar(a).gbn().ghX()},
uj:function(a){return a.gar(a).gbn().ghV()},
ul:function(a){return a.gar(a).gbn().ghW()},
uo:function(a){return a.gar(a).gbn().ghZ()},
uk:function(a){var t=a.gar(a)
t.gaR()
t.gaR()
return!1},
uh:function(a){return!0},
ui:function(a){a.gar(a).ghT()
return!1},
ky:function ky(){},
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
a2:function a2(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
au:function au(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
kM:function kM(l,n,q,t,u,v,w,B,C,D,F,E,G,H,a7,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,m){var _=this
_.l=l
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.B=B
_.C=C
_.D=D
_.F=F
_.E=E
_.G=G
_.H=H
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m},
lH:function lH(rx,ry,x1,x2,y1,y2,p,m,l,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.m=m
_.l=l
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
_.r2=r2}}
var v=[C,H,J,P,W,S,L,M,O,T,U,A,V,Z,X,N,E,Y,B,Q,K,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.om.prototype={}
J.Z.prototype={
a8:function(a,b){return a===b},
gaf:function(a){return H.cG(a)},
J:function(a){return H.kv(a)},
gah:function(a){return new H.cN(H.nt(a),null)}}
J.jv.prototype={
J:function(a){return String(a)},
gaf:function(a){return a?519018:218159},
gah:function(a){return C.W},
$iscp:1}
J.fu.prototype={
a8:function(a,b){return null==b},
J:function(a){return"null"},
gaf:function(a){return 0},
gah:function(a){return C.Q},
$isc_:1}
J.ej.prototype={
gaf:function(a){return 0},
gah:function(a){return C.P},
J:function(a){return String(a)},
$ispO:1}
J.ks.prototype={}
J.db.prototype={}
J.d4.prototype={
J:function(a){var t=a[$.$get$pd()]
return t==null?this.em(a):J.bq(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.d2.prototype={
cq:function(a,b){if(!!a.immutable$list)throw H.z(new P.b7(b))},
bS:function(a,b){if(!!a.fixed$length)throw H.z(new P.b7(b))},
j:function(a,b){this.bS(a,"add")
a.push(b)},
am:function(a,b){var t
this.bS(a,"remove")
for(t=0;t<a.length;++t)if(J.ao(a[t],b)){a.splice(t,1)
return!0}return!1},
cP:function(a,b){return new H.bG(a,b,[H.v(a,0)])},
bm:function(a,b){var t
this.bS(a,"addAll")
for(t=J.bx(b);t.M();)a.push(t.gP())},
az:function(a,b){return new H.em(a,b,[H.v(a,0),null])},
aV:function(a,b){if(b<0||b>=a.length)return H.X(a,b)
return a[b]},
gar:function(a){if(a.length>0)return a[0]
throw H.z(H.fq())},
gh9:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.z(H.fq())},
bg:function(a,b,c,d,e){var t,s,r
this.cq(a,"setRange")
P.pY(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aE(P.bu(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.z(H.tS())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.X(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.X(d,r)
a[b+s]=d[r]}},
bh:function(a,b){var t
this.cq(a,"sort")
t=b==null?P.vE():b
H.fJ(a,0,a.length-1,t)},
ef:function(a){return this.bh(a,null)},
J:function(a){return P.fp(a,"[","]")},
al:function(a,b){var t=H.a(a.slice(0),[H.v(a,0)])
return t},
aA:function(a){return this.al(a,!0)},
ga_:function(a){return new J.hb(a,a.length,0,null,[H.v(a,0)])},
gaf:function(a){return H.cG(a)},
gO:function(a){return a.length},
sO:function(a,b){this.bS(a,"set length")
if(b<0)throw H.z(P.bu(b,0,null,"newLength",null))
a.length=b},
A:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aN(a,b))
if(b>=a.length||b<0)throw H.z(H.aN(a,b))
return a[b]},
i:function(a,b,c){this.cq(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aN(a,b))
if(b>=a.length||b<0)throw H.z(H.aN(a,b))
a[b]=c},
$isbO:1,
$asbO:function(){},
$isa9:1,
$asa9:null,
$isa6:1,
$asa6:null,
$isW:1,
$asW:null}
J.ol.prototype={}
J.hb.prototype={
gP:function(){return this.d},
M:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.z(H.c6(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.dC.prototype={
aT:function(a,b){var t
if(typeof b!=="number")throw H.z(H.bh(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbw(b)
if(this.gbw(a)===t)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
cp:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.z(new P.b7(""+a+".ceil()"))},
Y:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.z(new P.b7(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.z(new P.b7(""+a+".round()"))},
ht:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
T:function(a,b,c){if(C.b.aT(b,c)>0)throw H.z(H.bh(b))
if(this.aT(a,b)<0)return b
if(this.aT(a,c)>0)return c
return a},
bB:function(a,b){var t
if(b>20)throw H.z(P.bu(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+t
return t},
hA:function(a,b){var t
if(b<1||b>21)throw H.z(P.bu(b,1,21,"precision",null))
t=a.toPrecision(b)
if(a===0&&this.gbw(a))return"-"+t
return t},
hz:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.z(P.bu(b,2,36,"radix",null))
t=a.toString(b)
if(C.f.fC(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aE(new P.b7("Unexpected toString result: "+t))
r=J.b8(s)
t=r.A(s,1)
q=+r.A(s,3)
if(r.A(s,2)!=null){t+=r.A(s,2)
q-=r.A(s,2).length}return t+C.f.ai("0",q)},
J:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gaf:function(a){return a&0x1FFFFFFF},
ac:function(a,b){if(typeof b!=="number")throw H.z(H.bh(b))
return a+b},
a6:function(a,b){if(typeof b!=="number")throw H.z(H.bh(b))
return a/b},
ai:function(a,b){return a*b},
cR:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
an:function(a,b){return(a|0)===a?a/b|0:this.fl(a,b)},
fl:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.z(new P.b7("Result of truncating division is "+H.t(t)+": "+H.t(a)+" ~/ "+H.t(b)))},
aG:function(a,b){if(b<0)throw H.z(H.bh(b))
return b>31?0:a<<b>>>0},
fj:function(a,b){return b>31?0:a<<b>>>0},
cl:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aN:function(a,b){if(typeof b!=="number")throw H.z(H.bh(b))
return a<b},
b5:function(a,b){if(typeof b!=="number")throw H.z(H.bh(b))
return a>b},
gah:function(a){return C.Z},
$isbS:1}
J.ft.prototype={
gah:function(a){return C.Y},
$isx:1,
$isbS:1,
$isa3:1}
J.fs.prototype={
gah:function(a){return C.X},
$isx:1,
$isbS:1}
J.d3.prototype={
fC:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aN(a,b))
if(b<0)throw H.z(H.aN(a,b))
if(b>=a.length)H.aE(H.aN(a,b))
return a.charCodeAt(b)},
d1:function(a,b){if(b>=a.length)throw H.z(H.aN(a,b))
return a.charCodeAt(b)},
cn:function(a,b,c){if(c>b.length)throw H.z(P.bu(c,0,b.length,null,null))
return new H.nc(b,a,c)},
dz:function(a,b){return this.cn(a,b,0)},
ac:function(a,b){if(typeof b!=="string")throw H.z(P.dX(b,null,null))
return a+b},
fR:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.b2(a,s-t)},
eh:function(a,b,c){var t
if(c>a.length)throw H.z(P.bu(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
eg:function(a,b){return this.eh(a,b,0)},
c0:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aE(H.bh(c))
if(b<0)throw H.z(P.fI(b,null,null))
if(typeof c!=="number")return H.az(c)
if(b>c)throw H.z(P.fI(b,null,null))
if(c>a.length)throw H.z(P.fI(c,null,null))
return a.substring(b,c)},
b2:function(a,b){return this.c0(a,b,null)},
ai:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.z(C.v)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
hd:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.ai(c,t)+a},
dE:function(a,b,c){if(b==null)H.aE(H.bh(b))
if(c>a.length)throw H.z(P.bu(c,0,a.length,null,null))
return H.vV(a,b,c)},
cr:function(a,b){return this.dE(a,b,0)},
aT:function(a,b){var t
if(typeof b!=="string")throw H.z(H.bh(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
J:function(a){return a},
gaf:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gah:function(a){return C.R},
gO:function(a){return a.length},
A:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.z(H.aN(a,b))
if(b>=a.length||b<0)throw H.z(H.aN(a,b))
return a[b]},
$isbO:1,
$asbO:function(){},
$isO:1}
H.a6.prototype={$asa6:null}
H.d5.prototype={
ga_:function(a){return new H.fw(this,this.gO(this),0,null,[H.an(this,"d5",0)])},
az:function(a,b){return new H.em(this,b,[H.an(this,"d5",0),null])},
al:function(a,b){var t,s,r
t=H.a([],[H.an(this,"d5",0)])
C.a.sO(t,this.gO(this))
for(s=0;s<this.gO(this);++s){r=this.aV(0,s)
if(s>=t.length)return H.X(t,s)
t[s]=r}return t},
aA:function(a){return this.al(a,!0)}}
H.fw.prototype={
gP:function(){return this.d},
M:function(){var t,s,r,q
t=this.a
s=J.b8(t)
r=s.gO(t)
if(this.b!==r)throw H.z(new P.bT(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.aV(t,q);++this.c
return!0}}
H.dF.prototype={
ga_:function(a){return new H.fx(null,J.bx(this.a),this.b,this.$ti)},
gO:function(a){return J.cP(this.a)},
$asW:function(a,b){return[b]}}
H.e1.prototype={$isa6:1,
$asa6:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.fx.prototype={
M:function(){var t=this.b
if(t.M()){this.a=this.c.$1(t.gP())
return!0}this.a=null
return!1},
gP:function(){return this.a},
$asfr:function(a,b){return[b]}}
H.em.prototype={
gO:function(a){return J.cP(this.a)},
aV:function(a,b){return this.b.$1(J.qJ(this.a,b))},
$asd5:function(a,b){return[b]},
$asa6:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.bG.prototype={
ga_:function(a){return new H.ez(J.bx(this.a),this.b,this.$ti)},
az:function(a,b){return new H.dF(this,b,[H.v(this,0),null])}}
H.ez.prototype={
M:function(){var t,s
for(t=this.a,s=this.b;t.M();)if(s.$1(t.gP())===!0)return!0
return!1},
gP:function(){return this.a.gP()}}
H.fa.prototype={}
H.nH.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.nI.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.mS.prototype={}
H.dN.prototype={
du:function(a,b){if(!this.f.a8(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bP()},
hq:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.am(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.X(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.X(p,q)
p[q]=r
if(q===s.c)s.de();++s.d}this.y=!1}this.bP()},
ft:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.af(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a8(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.X(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hp:function(a){var t,s,r
if(this.ch==null)return
for(t=J.af(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a8(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aE(new P.b7("removeRange"))
P.pY(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
ec:function(a,b){if(!this.r.a8(0,a))return
this.db=b},
fX:function(a,b,c){var t=J.af(b)
if(!t.a8(b,0))t=t.a8(b,1)&&!this.cy
else t=!0
if(t){a.b_(c)
return}t=this.cx
if(t==null){t=P.oq(null,null)
this.cx=t}t.aQ(new H.mL(a,c))},
fW:function(a,b){var t
if(!this.r.a8(0,a))return
t=J.af(b)
if(!t.a8(b,0))t=t.a8(b,1)&&!this.cy
else t=!0
if(t){this.bT()
return}t=this.cx
if(t==null){t=P.oq(null,null)
this.cx=t}t.aQ(this.gh8())},
fY:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.nE(a)
if(b!=null)P.nE(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bq(a)
s[1]=b==null?null:J.bq(b)
for(r=new P.bH(t,t.r,null,null,[null]),r.c=t.e;r.M();)r.d.b_(s)},
bq:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.b9(o)
p=H.bn(o)
this.fY(q,p)
if(this.db===!0){this.bT()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.gh6()
if(this.cx!=null)for(;n=this.cx,!n.gag(n);)this.cx.dR().$0()}return s},
dM:function(a){return this.b.A(0,a)},
d_:function(a,b){var t=this.b
if(t.ap(a))throw H.z(P.ir("Registry: ports must be registered only once."))
t.i(0,a,b)},
bP:function(){var t=this.b
if(t.gO(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bT()},
bT:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bd(0)
for(t=this.b,s=t.gav(t),s=s.ga_(s);s.M();)s.gP().eI()
t.bd(0)
this.c.bd(0)
u.globalState.z.am(0,this.a)
this.dx.bd(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.X(t,p)
q.b_(t[p])}this.ch=null}},
gh6:function(){return this.d},
gfG:function(){return this.e}}
H.mL.prototype={
$0:function(){this.a.b_(this.b)},
$S:function(){return{func:1,v:true}}}
H.mn.prototype={
fJ:function(){var t=this.a
if(t.b===t.c)return
return t.dR()},
dX:function(){var t,s,r
t=this.fJ()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.ap(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gag(s)}else s=!1
else s=!1
else s=!1
if(s)H.aE(P.ir("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gag(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ek(["command","close"])
r=new H.c4(!0,new P.fY(0,null,null,null,null,null,0,[null,P.a3])).aw(r)
s.toString
self.postMessage(r)}return!1}t.hk()
return!0},
dk:function(){if(self.window!=null)new H.mo(this).$0()
else for(;this.dX(););},
bA:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dk()
else try{this.dk()}catch(r){t=H.b9(r)
s=H.bn(r)
q=u.globalState.Q
p=P.ek(["command","error","msg",H.t(t)+"\n"+H.t(s)])
p=new H.c4(!0,P.eG(null,P.a3)).aw(p)
q.toString
self.postMessage(p)}}}
H.mo.prototype={
$0:function(){if(!this.a.dX())return
P.v7(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.de.prototype={
hk:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bq(this.b)}}
H.mR.prototype={}
H.ji.prototype={
$0:function(){H.tl(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.jj.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.dU(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.dU(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bP()},
$S:function(){return{func:1,v:true}}}
H.mf.prototype={}
H.dO.prototype={
b_:function(a){var t,s,r
t=u.globalState.z.A(0,this.a)
if(t==null)return
s=this.b
if(s.gdg())return
r=H.vk(a)
if(t.gfG()===s){s=J.b8(r)
switch(s.A(r,0)){case"pause":t.du(s.A(r,1),s.A(r,2))
break
case"resume":t.hq(s.A(r,1))
break
case"add-ondone":t.ft(s.A(r,1),s.A(r,2))
break
case"remove-ondone":t.hp(s.A(r,1))
break
case"set-errors-fatal":t.ec(s.A(r,1),s.A(r,2))
break
case"ping":t.fX(s.A(r,1),s.A(r,2),s.A(r,3))
break
case"kill":t.fW(s.A(r,1),s.A(r,2))
break
case"getErrors":s=s.A(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.A(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.aQ(new H.de(t,new H.mV(this,r),"receive"))},
a8:function(a,b){if(b==null)return!1
return b instanceof H.dO&&J.ao(this.b,b.b)},
gaf:function(a){return this.b.gca()}}
H.mV.prototype={
$0:function(){var t=this.a.b
if(!t.gdg())t.eC(this.b)},
$S:function(){return{func:1}}}
H.eH.prototype={
b_:function(a){var t,s,r
t=P.ek(["command","message","port",this,"msg",a])
s=new H.c4(!0,P.eG(null,P.a3)).aw(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.A(0,this.b)
if(r!=null)r.postMessage(s)}},
a8:function(a,b){if(b==null)return!1
return b instanceof H.eH&&J.ao(this.b,b.b)&&J.ao(this.a,b.a)&&J.ao(this.c,b.c)},
gaf:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aG()
s=this.a
if(typeof s!=="number")return s.aG()
r=this.c
if(typeof r!=="number")return H.az(r)
return(t<<16^s<<8^r)>>>0}}
H.dI.prototype={
eI:function(){this.c=!0
this.b=null},
aS:function(a){var t,s
if(this.c)return
this.c=!0
this.b=null
t=u.globalState.d
s=this.a
t.b.am(0,s)
t.c.am(0,s)
t.bP()},
eC:function(a){if(this.c)return
this.b.$1(a)},
$isuu:1,
gca:function(){return this.a},
gdg:function(){return this.c}}
H.lR.prototype={
ew:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aQ(new H.de(s,new H.lS(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.eM(new H.lT(this,b),0),a)}else throw H.z(new P.b7("Timer greater than 0."))}}
H.lS.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.lT.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.c9.prototype={
gaf:function(a){var t=this.a
if(typeof t!=="number")return t.hO()
t=C.c.cl(t,0)^C.c.an(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
a8:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.c9){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gca:function(){return this.a}}
H.c4.prototype={
aw:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.A(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gO(t))
t=J.af(a)
if(!!t.$isdG)return["buffer",a]
if(!!t.$isd7)return["typed",a]
if(!!t.$isbO)return this.e8(a)
if(!!t.$isti){r=this.ge5()
q=a.gby()
q=H.el(q,r,H.an(q,"W",0),null)
q=P.cE(q,!0,H.an(q,"W",0))
t=t.gav(a)
t=H.el(t,r,H.an(t,"W",0),null)
return["map",q,P.cE(t,!0,H.an(t,"W",0))]}if(!!t.$ispO)return this.e9(a)
if(!!t.$isZ)this.e_(a)
if(!!t.$isuu)this.bC(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isdO)return this.ea(a)
if(!!t.$iseH)return this.eb(a)
if(!!t.$isdj){p=a.$static_name
if(p==null)this.bC(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isc9)return["capability",a.a]
if(!(a instanceof P.aw))this.e_(a)
return["dart",u.classIdExtractor(a),this.e7(u.classFieldsExtractor(a))]},
bC:function(a,b){throw H.z(new P.b7((b==null?"Can't transmit:":b)+" "+H.t(a)))},
e_:function(a){return this.bC(a,null)},
e8:function(a){var t=this.e6(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bC(a,"Can't serialize indexable: ")},
e6:function(a){var t,s,r
t=[]
C.a.sO(t,a.length)
for(s=0;s<a.length;++s){r=this.aw(a[s])
if(s>=t.length)return H.X(t,s)
t[s]=r}return t},
e7:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.aw(a[t]))
return a},
e9:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bC(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sO(s,t.length)
for(r=0;r<t.length;++r){q=this.aw(a[t[r]])
if(r>=s.length)return H.X(s,r)
s[r]=q}return["js-object",t,s]},
eb:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ea:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gca()]
return["raw sendport",a]}}
H.dd.prototype={
aU:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.z(P.nQ("Bad serialized message: "+H.t(a)))
switch(C.a.gar(a)){case"ref":if(1>=a.length)return H.X(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.X(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bp(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bp(r),[null])
case"mutable":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
return this.bp(r)
case"const":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bp(r),[null])
s.fixed$length=Array
return s
case"map":return this.fO(a)
case"sendport":return this.fP(a)
case"raw sendport":if(1>=a.length)return H.X(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.fN(a)
case"function":if(1>=a.length)return H.X(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.X(a,1)
return new H.c9(a[1])
case"dart":s=a.length
if(1>=s)return H.X(a,1)
q=a[1]
if(2>=s)return H.X(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bp(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.z("couldn't deserialize: "+H.t(a))}},
bp:function(a){var t,s,r
t=J.b8(a)
s=0
while(!0){r=t.gO(a)
if(typeof r!=="number")return H.az(r)
if(!(s<r))break
t.i(a,s,this.aU(t.A(a,s)));++s}return a},
fO:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.X(a,1)
s=a[1]
if(2>=t)return H.X(a,2)
r=a[2]
q=P.tT()
this.b.push(q)
s=J.qV(J.p_(s,this.gfM()))
for(t=J.b8(s),p=J.b8(r),o=0;o<t.gO(s);++o)q.i(0,t.A(s,o),this.aU(p.A(r,o)))
return q},
fP:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.X(a,1)
s=a[1]
if(2>=t)return H.X(a,2)
r=a[2]
if(3>=t)return H.X(a,3)
q=a[3]
if(J.ao(s,u.globalState.b)){p=u.globalState.z.A(0,r)
if(p==null)return
o=p.dM(q)
if(o==null)return
n=new H.dO(o,r)}else n=new H.eH(s,q,r)
this.b.push(n)
return n},
fN:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.X(a,1)
s=a[1]
if(2>=t)return H.X(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.b8(s)
p=J.b8(r)
o=0
while(!0){n=t.gO(s)
if(typeof n!=="number")return H.az(n)
if(!(o<n))break
q[t.A(s,o)]=this.aU(p.A(r,o));++o}return q}}
H.kH.prototype={}
H.lV.prototype={
aD:function(a){var t,s,r
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
H.fC.prototype={
J:function(a){var t=this.b
if(t==null)return"NullError: "+H.t(this.a)
return"NullError: method not found: '"+H.t(t)+"' on null"}}
H.jx.prototype={
J:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.t(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.t(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.t(this.a)+")"}}
H.lX.prototype={
J:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.e3.prototype={
gaO:function(){return this.b}}
H.nJ.prototype={
$1:function(a){if(!!J.af(a).$iscT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fZ.prototype={
J:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.ny.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.nz.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.nA.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.nB.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.nC.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.dj.prototype={
J:function(a){return"Closure '"+H.ou(this).trim()+"'"},
ghJ:function(){return this},
$D:null}
H.lK.prototype={}
H.lu.prototype={
J:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dZ.prototype={
a8:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dZ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gaf:function(a){var t,s
t=this.c
if(t==null)s=H.cG(this.a)
else s=typeof t!=="object"?J.bo(t):H.cG(t)
t=H.cG(this.b)
if(typeof s!=="number")return s.hQ()
return(s^t)>>>0},
J:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.t(this.d)+"' of "+H.kv(t)}}
H.hn.prototype={
J:function(a){return this.a}}
H.kN.prototype={
J:function(a){return"RuntimeError: "+H.t(this.a)}}
H.cN.prototype={
J:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gaf:function(a){return J.bo(this.a)},
a8:function(a,b){if(b==null)return!1
return b instanceof H.cN&&J.ao(this.a,b.a)}}
H.l.prototype={
gO:function(a){return this.a},
gag:function(a){return this.a===0},
gby:function(){return new H.jI(this,[H.v(this,0)])},
gav:function(a){return H.el(this.gby(),new H.jw(this),H.v(this,0),H.v(this,1))},
ap:function(a){var t,s
if(typeof a==="string"){t=this.b
if(t==null)return!1
return this.d8(t,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.d8(s,a)}else return this.h3(a)},
h3:function(a){var t=this.d
if(t==null)return!1
return this.bu(this.bI(t,this.bt(a)),a)>=0},
A:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bk(t,b)
return s==null?null:s.gaY()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bk(r,b)
return s==null?null:s.gaY()}else return this.h4(b)},
h4:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bI(t,this.bt(a))
r=this.bu(s,a)
if(r<0)return
return s[r].gaY()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cc()
this.b=t}this.cZ(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cc()
this.c=s}this.cZ(s,b,c)}else{r=this.d
if(r==null){r=this.cc()
this.d=r}q=this.bt(b)
p=this.bI(r,q)
if(p==null)this.ck(r,q,[this.cd(b,c)])
else{o=this.bu(p,b)
if(o>=0)p[o].saY(c)
else p.push(this.cd(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.dj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dj(this.c,b)
else return this.h5(b)},
h5:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bI(t,this.bt(a))
r=this.bu(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.ds(q)
return q.gaY()},
bd:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cu:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.z(new P.bT(this))
t=t.c}},
cZ:function(a,b,c){var t=this.bk(a,b)
if(t==null)this.ck(a,b,this.cd(b,c))
else t.saY(c)},
dj:function(a,b){var t
if(a==null)return
t=this.bk(a,b)
if(t==null)return
this.ds(t)
this.d9(a,b)
return t.gaY()},
cd:function(a,b){var t,s
t=new H.jH(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
ds:function(a){var t,s
t=a.gfb()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bt:function(a){return J.bo(a)&0x3ffffff},
bu:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ao(a[s].gdJ(),b))return s
return-1},
J:function(a){return P.tW(this)},
bk:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
d9:function(a,b){delete a[b]},
d8:function(a,b){return this.bk(a,b)!=null},
cc:function(){var t=Object.create(null)
this.ck(t,"<non-identifier-key>",t)
this.d9(t,"<non-identifier-key>")
return t},
$isti:1,
$isor:1}
H.jw.prototype={
$1:function(a){return this.a.A(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.jH.prototype={
gdJ:function(){return this.a},
gaY:function(){return this.b},
gfb:function(){return this.d},
saY:function(a){return this.b=a}}
H.jI.prototype={
gO:function(a){return this.a.a},
ga_:function(a){var t,s
t=this.a
s=new H.jJ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.jJ.prototype={
gP:function(){return this.d},
M:function(){var t=this.a
if(this.b!==t.r)throw H.z(new P.bT(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.nu.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.nv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.O]}}}
H.nw.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.O]}}}
H.fv.prototype={
J:function(a){return"RegExp/"+this.a+"/"},
gf8:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.pP(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
cn:function(a,b,c){if(c>b.length)throw H.z(P.bu(c,0,b.length,null,null))
return new H.m7(this,b,c)},
dz:function(a,b){return this.cn(a,b,0)},
eT:function(a,b){var t,s
t=this.gf8()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.mU(this,s)},
$isux:1}
H.mU.prototype={
A:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.X(t,b)
return t[b]},
$isd6:1}
H.m7.prototype={
ga_:function(a){return new H.m8(this.a,this.b,this.c,null)},
$asfo:function(){return[P.d6]},
$asW:function(){return[P.d6]}}
H.m8.prototype={
gP:function(){return this.d},
M:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
if(s<=t.length){r=this.a.eT(t,s)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.lD.prototype={
A:function(a,b){if(b!==0)H.aE(P.fI(b,null,null))
return this.c},
$isd6:1}
H.nc.prototype={
ga_:function(a){return new H.nd(this.a,this.b,this.c,null)},
$asW:function(){return[P.d6]}}
H.nd.prototype={
M:function(){var t,s,r,q,p,o,n
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
this.d=new H.lD(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gP:function(){return this.d}}
H.dG.prototype={
gah:function(a){return C.I},
fz:function(a,b,c){var t
H.qe(a,b,c)
t=new DataView(a,b)
return t},
fw:function(a,b){return this.fz(a,b,null)},
$isdG:1,
$iscR:1}
H.d7.prototype={$isd7:1}
H.k6.prototype={
gah:function(a){return C.J}}
H.fy.prototype={
gO:function(a){return a.length},
$iscf:1,
$ascf:function(){},
$isbO:1,
$asbO:function(){}}
H.fz.prototype={
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
a[b]=c}}
H.eo.prototype={
$ascf:function(){},
$asbO:function(){},
$asa9:function(){return[P.x]},
$asa6:function(){return[P.x]},
$asW:function(){return[P.x]},
$isa9:1,
$isa6:1,
$isW:1}
H.eq.prototype={
$ascf:function(){},
$asbO:function(){},
$asa9:function(){return[P.x]},
$asa6:function(){return[P.x]},
$asW:function(){return[P.x]}}
H.fA.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
a[b]=c},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.ep.prototype={
$ascf:function(){},
$asbO:function(){},
$asa9:function(){return[P.a3]},
$asa6:function(){return[P.a3]},
$asW:function(){return[P.a3]},
$isa9:1,
$isa6:1,
$isW:1}
H.er.prototype={
$ascf:function(){},
$asbO:function(){},
$asa9:function(){return[P.a3]},
$asa6:function(){return[P.a3]},
$asW:function(){return[P.a3]}}
H.k7.prototype={
gah:function(a){return C.K},
$isa9:1,
$asa9:function(){return[P.x]},
$isa6:1,
$asa6:function(){return[P.x]},
$isW:1,
$asW:function(){return[P.x]}}
H.k8.prototype={
gah:function(a){return C.L},
$isa9:1,
$asa9:function(){return[P.x]},
$isa6:1,
$asa6:function(){return[P.x]},
$isW:1,
$asW:function(){return[P.x]}}
H.k9.prototype={
gah:function(a){return C.M},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.ka.prototype={
gah:function(a){return C.N},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.kb.prototype={
gah:function(a){return C.O},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.kc.prototype={
gah:function(a){return C.S},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.kd.prototype={
gah:function(a){return C.T},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.fB.prototype={
gah:function(a){return C.U},
gO:function(a){return a.length},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
H.ke.prototype={
gah:function(a){return C.V},
gO:function(a){return a.length},
A:function(a,b){if(b>>>0!==b||b>=a.length)H.aE(H.aN(a,b))
return a[b]},
$isoE:1,
$isa9:1,
$asa9:function(){return[P.a3]},
$isa6:1,
$asa6:function(){return[P.a3]},
$isW:1,
$asW:function(){return[P.a3]}}
P.ma.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.m9.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.mb.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.mc.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.nj.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.nk.prototype={
$2:function(a,b){this.a.$2(1,new H.e3(a,b))},
$S:function(){return{func:1,args:[,P.cK]}}}
P.nn.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.a3,,]}}}
P.bk.prototype={}
P.mj.prototype={
fE:function(a,b){if(a==null)a=new P.es()
if(this.a.a!==0)throw H.z(new P.c0("Future already completed"))
$.ag.toString
this.aI(a,b)},
gfU:function(){return this.a}}
P.nh.prototype={
dD:function(a,b){var t=this.a
if(t.a!==0)throw H.z(new P.c0("Future already completed"))
t.b8(b)},
aI:function(a,b){this.a.aI(a,b)}}
P.fX.prototype={
gfo:function(){return this.b.b},
gdI:function(){return(this.c&1)!==0},
gh0:function(){return(this.c&2)!==0},
gdH:function(){return this.c===8},
fZ:function(a){return this.b.b.cI(this.d,a)},
ha:function(a){if(this.c!==6)return!0
return this.b.b.cI(this.d,J.eP(a))},
fV:function(a){var t,s,r
t=this.e
s=J.aa(a)
r=this.b.b
if(H.dU(t,{func:1,args:[,,]}))return r.hu(t,s.gay(a),a.gaO())
else return r.cI(t,s.gay(a))},
h_:function(){return this.b.b.dV(this.d)},
gce:function(){return this.a}}
P.b3.prototype={
gf2:function(){return this.a===2},
gcb:function(){return this.a>=4},
cK:function(a,b){var t=$.ag
if(t!==C.e){t.toString
if(b!=null)b=P.qg(b,t)}return this.cm(a,b)},
hw:function(a){return this.cK(a,null)},
cm:function(a,b){var t,s
t=new P.b3(0,$.ag,null,[null])
s=b==null?1:3
this.c1(new P.fX(null,t,s,a,b,[H.v(this,0),null]))
return t},
bE:function(a){var t,s
t=$.ag
s=new P.b3(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.v(this,0)
this.c1(new P.fX(null,s,8,a,null,[t,t]))
return s},
c1:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcb()){s.c1(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.dQ(null,null,t,new P.ms(this,a))}},
di:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gce()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcb()){p.di(a)
return}this.a=p.a
this.c=p.c}t.a=this.bM(a)
s=this.b
s.toString
P.dQ(null,null,s,new P.mA(t,this))}},
bL:function(){var t=this.c
this.c=null
return this.bM(t)},
bM:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gce()
t.a=s}return s},
b8:function(a){var t,s
t=this.$ti
if(H.dT(a,"$isbk",t,"$asbk"))if(H.dT(a,"$isb3",t,null))P.mv(a,this)
else P.qb(a,this)
else{s=this.bL()
this.a=4
this.c=a
P.dM(this,s)}},
aI:function(a,b){var t=this.bL()
this.a=8
this.c=new P.df(a,b)
P.dM(this,t)},
eM:function(a){return this.aI(a,null)},
eF:function(a){var t
if(H.dT(a,"$isbk",this.$ti,"$asbk")){this.eH(a)
return}this.a=1
t=this.b
t.toString
P.dQ(null,null,t,new P.mu(this,a))},
eH:function(a){var t
if(H.dT(a,"$isb3",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.dQ(null,null,t,new P.mz(this,a))}else P.mv(a,this)
return}P.qb(a,this)},
eG:function(a,b){var t
this.a=1
t=this.b
t.toString
P.dQ(null,null,t,new P.mt(this,a,b))},
eA:function(a,b){this.a=4
this.c=a},
$isbk:1,
gbl:function(){return this.a},
gff:function(){return this.c}}
P.ms.prototype={
$0:function(){P.dM(this.a,this.b)},
$S:function(){return{func:1}}}
P.mA.prototype={
$0:function(){P.dM(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.mw.prototype={
$1:function(a){var t=this.a
t.a=0
t.b8(a)},
$S:function(){return{func:1,args:[,]}}}
P.mx.prototype={
$2:function(a,b){this.a.aI(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.my.prototype={
$0:function(){this.a.aI(this.b,this.c)},
$S:function(){return{func:1}}}
P.mu.prototype={
$0:function(){var t,s
t=this.a
s=t.bL()
t.a=4
t.c=this.b
P.dM(t,s)},
$S:function(){return{func:1}}}
P.mz.prototype={
$0:function(){P.mv(this.b,this.a)},
$S:function(){return{func:1}}}
P.mt.prototype={
$0:function(){this.a.aI(this.b,this.c)},
$S:function(){return{func:1}}}
P.mD.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.h_()}catch(q){s=H.b9(q)
r=H.bn(q)
if(this.c){p=J.eP(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.df(s,r)
o.a=!0
return}if(!!J.af(t).$isbk){if(t instanceof P.b3&&t.gbl()>=4){if(t.gbl()===8){p=this.b
p.b=t.gff()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.hw(new P.mE(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.mE.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.mC.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.fZ(this.c)}catch(r){t=H.b9(r)
s=H.bn(r)
q=this.a
q.b=new P.df(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.mB.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.ha(t)===!0&&q.e!=null){p=this.b
p.b=q.fV(t)
p.a=!1}}catch(o){s=H.b9(o)
r=H.bn(o)
q=this.a
p=J.eP(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.df(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fR.prototype={}
P.cn.prototype={
az:function(a,b){return new P.mT(b,this,[H.an(this,"cn",0),null])},
gO:function(a){var t,s
t={}
s=new P.b3(0,$.ag,null,[P.a3])
t.a=0
this.aM(new P.lz(t),!0,new P.lA(t,s),s.gc5())
return s},
aA:function(a){var t,s,r
t=H.an(this,"cn",0)
s=H.a([],[t])
r=new P.b3(0,$.ag,null,[[P.a9,t]])
this.aM(new P.lB(this,s),!0,new P.lC(s,r),r.gc5())
return r},
gar:function(a){var t,s
t={}
s=new P.b3(0,$.ag,null,[H.an(this,"cn",0)])
t.a=null
t.a=this.aM(new P.lx(t,this,s),!0,new P.ly(s),s.gc5())
return s}}
P.lz.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.lA.prototype={
$0:function(){this.b.b8(this.a.a)},
$S:function(){return{func:1}}}
P.lB.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.np(function(a){return{func:1,args:[a]}},this.a,"cn")}}
P.lC.prototype={
$0:function(){this.b.b8(this.a)},
$S:function(){return{func:1}}}
P.lx.prototype={
$1:function(a){P.vj(this.a.a,this.c,a)},
$S:function(){return H.np(function(a){return{func:1,args:[a]}},this.b,"cn")}}
P.ly.prototype={
$0:function(){var t,s,r,q
try{r=H.fq()
throw H.z(r)}catch(q){t=H.b9(q)
s=H.bn(q)
P.vl(this.a,t,s)}},
$S:function(){return{func:1}}}
P.lw.prototype={}
P.n7.prototype={
gfa:function(){if((this.b&8)===0)return this.a
return this.a.gbY()},
dd:function(){var t,s
if((this.b&8)===0){t=this.a
if(t==null){t=new P.h_(null,null,0,this.$ti)
this.a=t}return t}s=this.a
s.gbY()
return s.gbY()},
gdq:function(){if((this.b&8)!==0)return this.a.gbY()
return this.a},
d0:function(){if((this.b&4)!==0)return new P.c0("Cannot add event after closing")
return new P.c0("Cannot add event while adding a stream")},
dc:function(){var t=this.c
if(t==null){t=(this.b&2)!==0?$.$get$ed():new P.b3(0,$.ag,null,[null])
this.c=t}return t},
aS:function(a){var t=this.b
if((t&4)!==0)return this.dc()
if(t>=4)throw H.z(this.d0())
t|=4
this.b=t
if((t&1)!==0)this.bO()
else if((t&3)===0)this.dd().j(0,C.k)
return this.dc()},
b7:function(a){var t=this.b
if((t&1)!==0)this.bN(a)
else if((t&3)===0)this.dd().j(0,new P.eA(a,null,this.$ti))},
fk:function(a,b,c,d){var t,s,r,q,p
if((this.b&3)!==0)throw H.z(new P.c0("Stream has already been listened to."))
t=$.ag
s=d?1:0
r=new P.fU(this,null,null,null,t,s,null,null,this.$ti)
r.cY(a,b,c,d,H.v(this,0))
q=this.gfa()
s=this.b|=1
if((s&8)!==0){p=this.a
p.sbY(r)
p.bW()}else this.a=r
r.fi(q)
r.c9(new P.n9(this))
return r},
fc:function(a){var t,s,r,q,p,o
t=null
if((this.b&8)!==0)t=this.a.bR()
this.a=null
this.b=this.b&4294967286|2
q=this.r
if(q!=null)if(t==null)try{t=q.$0()}catch(p){s=H.b9(p)
r=H.bn(p)
o=new P.b3(0,$.ag,null,[null])
o.eG(s,r)
t=o}else t=t.bE(q)
q=new P.n8(this)
if(t!=null)t=t.bE(q)
else q.$0()
return t},
gbl:function(){return this.b}}
P.n9.prototype={
$0:function(){P.oQ(this.a.d)},
$S:function(){return{func:1}}}
P.n8.prototype={
$0:function(){var t=this.a.c
if(t!=null&&t.a===0)t.eF(null)},
$S:function(){return{func:1,v:true}}}
P.md.prototype={
bN:function(a){this.gdq().bi(new P.eA(a,null,[H.v(this,0)]))},
bO:function(){this.gdq().bi(C.k)}}
P.fS.prototype={}
P.fT.prototype={
gaf:function(a){return(H.cG(this.a)^892482866)>>>0},
a8:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.fT))return!1
return b.a===this.a}}
P.fU.prototype={
cf:function(){return this.x.fc(this)},
ba:function(){var t=this.x
if((t.b&8)!==0)t.a.cA(0)
P.oQ(t.e)},
bb:function(){var t=this.x
if((t.b&8)!==0)t.a.bW()
P.oQ(t.f)}}
P.bQ.prototype={
fi:function(a){if(a==null)return
this.r=a
if(!a.gag(a)){this.e=(this.e|64)>>>0
this.r.bF(this)}},
cB:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dB()
if((t&4)===0&&(this.e&32)===0)this.c9(this.gcg())},
cA:function(a){return this.cB(a,null)},
bW:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gag(t)}else t=!1
if(t)this.r.bF(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.c9(this.gci())}}}},
bR:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.c2()
t=this.f
return t==null?$.$get$ed():t},
c2:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dB()
if((this.e&32)===0)this.r=null
this.f=this.cf()},
b7:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.bN(a)
else this.bi(new P.eA(a,null,[H.an(this,"bQ",0)]))},
bG:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dl(a,b)
else this.bi(new P.ml(a,b,null))},
eE:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.bO()
else this.bi(C.k)},
ba:function(){},
bb:function(){},
cf:function(){return},
bi:function(a){var t,s
t=this.r
if(t==null){t=new P.h_(null,null,0,[H.an(this,"bQ",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bF(this)}},
bN:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cJ(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c3((t&4)!==0)},
dl:function(a,b){var t,s
t=this.e
s=new P.mh(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.c2()
t=this.f
if(!!J.af(t).$isbk&&t!==$.$get$ed())t.bE(s)
else s.$0()}else{s.$0()
this.c3((t&4)!==0)}},
bO:function(){var t,s
t=new P.mg(this)
this.c2()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.af(s).$isbk&&s!==$.$get$ed())s.bE(t)
else t.$0()},
c9:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c3((t&4)!==0)},
c3:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gag(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gag(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.ba()
else this.bb()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bF(this)},
cY:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.qg(b==null?P.vy():b,t)
this.c=c==null?P.vx():c},
gbl:function(){return this.e}}
P.mh.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.dU(s,{func:1,args:[P.aw,P.cK]})
q=t.d
p=this.b
o=t.b
if(r)q.hv(o,p,this.c)
else q.cJ(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.mg.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.dW(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.na.prototype={
aM:function(a,b,c,d){return this.a.fk(a,d,c,!0===b)},
cw:function(a,b,c){return this.aM(a,null,b,c)},
b4:function(a){return this.aM(a,null,null,null)}}
P.fV.prototype={
gbz:function(){return this.a},
sbz:function(a){return this.a=a}}
P.eA.prototype={
cC:function(a){a.bN(this.b)}}
P.ml.prototype={
cC:function(a){a.dl(this.b,this.c)},
$asfV:function(){},
gay:function(a){return this.b},
gaO:function(){return this.c}}
P.mk.prototype={
cC:function(a){a.bO()},
gbz:function(){return},
sbz:function(a){throw H.z(new P.c0("No events after a done."))}}
P.mW.prototype={
bF:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.qx(new P.mX(this,a))
this.a=1},
dB:function(){if(this.a===1)this.a=3},
gbl:function(){return this.a}}
P.mX.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbz()
t.b=q
if(q==null)t.c=null
r.cC(this.b)},
$S:function(){return{func:1}}}
P.h_.prototype={
gag:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbz(b)
this.c=b}}}
P.nb.prototype={}
P.nl.prototype={
$0:function(){return this.a.b8(this.b)},
$S:function(){return{func:1}}}
P.eC.prototype={
aM:function(a,b,c,d){return this.eR(a,d,c,!0===b)},
cw:function(a,b,c){return this.aM(a,null,b,c)},
eR:function(a,b,c,d){return P.vd(this,a,b,c,d,H.an(this,"eC",0),H.an(this,"eC",1))},
df:function(a,b){b.b7(a)},
f0:function(a,b,c){c.bG(a,b)},
$ascn:function(a,b){return[b]}}
P.eD.prototype={
b7:function(a){if((this.e&2)!==0)return
this.en(a)},
bG:function(a,b){if((this.e&2)!==0)return
this.eo(a,b)},
ba:function(){var t=this.y
if(t==null)return
t.cA(0)},
bb:function(){var t=this.y
if(t==null)return
t.bW()},
cf:function(){var t=this.y
if(t!=null){this.y=null
return t.bR()}return},
eW:function(a){this.x.df(a,this)},
f_:function(a,b){this.x.f0(a,b,this)},
eY:function(){this.eE()},
ez:function(a,b,c,d,e,f,g){this.y=this.x.a.cw(this.geV(),this.geX(),this.geZ())},
$asbQ:function(a,b){return[b]}}
P.mT.prototype={
df:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.b9(q)
r=H.bn(q)
P.vi(b,s,r)
return}b.b7(t)}}
P.df.prototype={
J:function(a){return H.t(this.a)},
$iscT:1,
gay:function(a){return this.a},
gaO:function(){return this.b}}
P.ni.prototype={}
P.nm.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.es()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.z(t)
r=H.z(t)
r.stack=J.bq(s)
throw r},
$S:function(){return{func:1}}}
P.n_.prototype={
dW:function(a){var t,s,r,q
try{if(C.e===$.ag){r=a.$0()
return r}r=P.qh(null,null,this,a)
return r}catch(q){t=H.b9(q)
s=H.bn(q)
r=P.eK(null,null,this,t,s)
return r}},
cJ:function(a,b){var t,s,r,q
try{if(C.e===$.ag){r=a.$1(b)
return r}r=P.qj(null,null,this,a,b)
return r}catch(q){t=H.b9(q)
s=H.bn(q)
r=P.eK(null,null,this,t,s)
return r}},
hv:function(a,b,c){var t,s,r,q
try{if(C.e===$.ag){r=a.$2(b,c)
return r}r=P.qi(null,null,this,a,b,c)
return r}catch(q){t=H.b9(q)
s=H.bn(q)
r=P.eK(null,null,this,t,s)
return r}},
co:function(a,b){if(b)return new P.n0(this,a)
else return new P.n1(this,a)},
fA:function(a,b){return new P.n2(this,a)},
A:function(a,b){return},
dV:function(a){if($.ag===C.e)return a.$0()
return P.qh(null,null,this,a)},
cI:function(a,b){if($.ag===C.e)return a.$1(b)
return P.qj(null,null,this,a,b)},
hu:function(a,b,c){if($.ag===C.e)return a.$2(b,c)
return P.qi(null,null,this,a,b,c)}}
P.n0.prototype={
$0:function(){return this.a.dW(this.b)},
$S:function(){return{func:1}}}
P.n1.prototype={
$0:function(){return this.a.dV(this.b)},
$S:function(){return{func:1}}}
P.n2.prototype={
$1:function(a){return this.a.cJ(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.mG.prototype={
gO:function(a){return this.a},
gav:function(a){var t=H.v(this,0)
return H.el(new P.mH(this,[t]),new P.mJ(this),t,H.v(this,1))},
ap:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eQ(a)},
eQ:function(a){var t=this.d
if(t==null)return!1
return this.aK(t[this.aJ(a)],a)>=0},
A:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.eU(b)},
eU:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(a)]
r=this.aK(s,a)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.oI()
this.b=t}this.d3(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.oI()
this.c=s}this.d3(s,b,c)}else this.fg(b,c)},
fg:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.oI()
this.d=t}s=this.aJ(a)
r=t[s]
if(r==null){P.oJ(t,s,[a,b]);++this.a
this.e=null}else{q=this.aK(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.cj(b)},
cj:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(a)]
r=this.aK(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cu:function(a,b){var t,s,r,q
t=this.d6()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.A(0,q))
if(t!==this.e)throw H.z(new P.bT(this))}},
d6:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
d3:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.oJ(a,b,c)},
bj:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.ve(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aJ:function(a){return J.bo(a)&0x3ffffff},
aK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.ao(a[s],b))return s
return-1},
$isor:1}
P.mJ.prototype={
$1:function(a){return this.a.A(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.mH.prototype={
gO:function(a){return this.a.a},
ga_:function(a){var t=this.a
return new P.mI(t,t.d6(),0,null,this.$ti)}}
P.mI.prototype={
gP:function(){return this.d},
M:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.z(new P.bT(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fY.prototype={
bt:function(a){return H.vS(a)&0x3ffffff},
bu:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gdJ()
if(r==null?b==null:r===b)return s}return-1}}
P.mO.prototype={
ga_:function(a){var t=new P.bH(this,this.r,null,null,[null])
t.c=this.e
return t},
gO:function(a){return this.a},
cr:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.eP(b)},
eP:function(a){var t=this.d
if(t==null)return!1
return this.aK(t[this.aJ(a)],a)>=0},
dM:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.cr(0,a)?a:null
else return this.f3(a)},
f3:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aJ(a)]
r=this.aK(s,a)
if(r<0)return
return J.nL(s,r).gda()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.d2(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.d2(r,b)}else return this.aQ(b)},
aQ:function(a){var t,s,r
t=this.d
if(t==null){t=P.vf()
this.d=t}s=this.aJ(a)
r=t[s]
if(r==null)t[s]=[this.c4(a)]
else{if(this.aK(r,a)>=0)return!1
r.push(this.c4(a))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bj(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bj(this.c,b)
else return this.cj(b)},
cj:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aJ(a)]
r=this.aK(s,a)
if(r<0)return!1
this.d4(s.splice(r,1)[0])
return!0},
bd:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
d2:function(a,b){if(a[b]!=null)return!1
a[b]=this.c4(b)
return!0},
bj:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.d4(t)
delete a[b]
return!0},
c4:function(a){var t,s
t=new P.mP(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
d4:function(a){var t,s
t=a.geJ()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aJ:function(a){return J.bo(a)&0x3ffffff},
aK:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.ao(a[s].gda(),b))return s
return-1},
$isa6:1,
$asa6:null,
$isW:1,
$asW:null}
P.mP.prototype={
gda:function(){return this.a},
geJ:function(){return this.c}}
P.bH.prototype={
gP:function(){return this.d},
M:function(){var t=this.a
if(this.b!==t.r)throw H.z(new P.bT(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.mK.prototype={}
P.dB.prototype={
az:function(a,b){return H.el(this,b,H.an(this,"dB",0),null)},
al:function(a,b){return P.cE(this,!0,H.an(this,"dB",0))},
aA:function(a){return this.al(a,!0)},
gO:function(a){var t,s
t=this.ga_(this)
for(s=0;t.M();)++s
return s},
J:function(a){return P.ok(this,"(",")")},
$isW:1,
$asW:null}
P.fo.prototype={}
P.ch.prototype={
ga_:function(a){return new H.fw(a,this.gO(a),0,null,[H.an(a,"ch",0)])},
aV:function(a,b){return this.A(a,b)},
az:function(a,b){return new H.em(a,b,[H.an(a,"ch",0),null])},
al:function(a,b){var t,s,r
t=H.a([],[H.an(a,"ch",0)])
C.a.sO(t,this.gO(a))
for(s=0;s<this.gO(a);++s){r=this.A(a,s)
if(s>=t.length)return H.X(t,s)
t[s]=r}return t},
aA:function(a){return this.al(a,!0)},
J:function(a){return P.fp(a,"[","]")},
$isa9:1,
$asa9:null,
$isa6:1,
$asa6:null,
$isW:1,
$asW:null}
P.jP.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.ae+=", "
t.a=!1
t=this.b
s=t.ae+=H.t(a)
t.ae=s+": "
t.ae+=H.t(b)},
$S:function(){return{func:1,args:[,,]}}}
P.jK.prototype={
ga_:function(a){return new P.mQ(this,this.c,this.d,this.b,null,this.$ti)},
gag:function(a){return this.b===this.c},
gO:function(a){return(this.c-this.b&this.a.length-1)>>>0},
aV:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.aE(P.jg(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.X(s,q)
return s[q]},
al:function(a,b){var t=H.a([],this.$ti)
C.a.sO(t,this.gO(this))
this.fn(t)
return t},
aA:function(a){return this.al(a,!0)},
bd:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.X(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
J:function(a){return P.fp(this,"{","}")},
dR:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.z(H.fq());++this.d
s=this.a
r=s.length
if(t>=r)return H.X(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aQ:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.X(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.de();++this.d},
de:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bg(s,0,q,t,r)
C.a.bg(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fn:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.bg(a,0,q,r,t)
return q}else{p=r.length-t
C.a.bg(a,0,p,r,t)
C.a.bg(a,p,p+this.c,this.a,0)
return this.c+p}},
es:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asa6:null,
$asW:null}
P.mQ.prototype={
gP:function(){return this.e},
M:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aE(new P.bT(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.X(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.kZ.prototype={
bm:function(a,b){var t
for(t=b.ga_(b);t.M();)this.j(0,t.gP())},
al:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sO(t,this.a)
for(s=new P.bH(this,this.r,null,null,[null]),s.c=this.e,r=0;s.M();r=p){q=s.d
p=r+1
if(r>=t.length)return H.X(t,r)
t[r]=q}return t},
aA:function(a){return this.al(a,!0)},
az:function(a,b){return new H.e1(this,b,[H.v(this,0),null])},
J:function(a){return P.fp(this,"{","}")},
$isa6:1,
$asa6:null,
$isW:1,
$asW:null}
P.kY.prototype={}
P.cp.prototype={}
P.aL.prototype={}
P.x.prototype={$isaL:1,
$asaL:function(){return[P.bS]}}
P.cu.prototype={
ac:function(a,b){return new P.cu(this.a+b.gbH())},
ai:function(a,b){return new P.cu(C.b.ak(this.a*b))},
aN:function(a,b){return C.b.aN(this.a,b.gbH())},
b5:function(a,b){return C.b.b5(this.a,b.gbH())},
a8:function(a,b){if(b==null)return!1
if(!(b instanceof P.cu))return!1
return this.a===b.a},
gaf:function(a){return this.a&0x1FFFFFFF},
aT:function(a,b){return C.b.aT(this.a,b.gbH())},
J:function(a){var t,s,r,q,p
t=new P.io()
s=this.a
if(s<0)return"-"+new P.cu(0-s).J(0)
r=t.$1(C.b.an(s,6e7)%60)
q=t.$1(C.b.an(s,1e6)%60)
p=new P.im().$1(s%1e6)
return""+C.b.an(s,36e8)+":"+H.t(r)+":"+H.t(q)+"."+H.t(p)},
$isaL:1,
$asaL:function(){return[P.cu]},
gbH:function(){return this.a}}
P.im.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.O,args:[P.a3]}}}
P.io.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.O,args:[P.a3]}}}
P.cT.prototype={
gaO:function(){return H.bn(this.$thrownJsError)}}
P.es.prototype={
J:function(a){return"Throw of null."}}
P.cr.prototype={
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
J:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.t(t)
q=this.gc7()+s+r
if(!this.a)return q
p=this.gc6()
o=P.pj(this.b)
return q+p+": "+H.t(o)},
gN:function(a){return this.c}}
P.fH.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.t(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.t(t)
else if(r>t)s=": Not in range "+H.t(t)+".."+H.t(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.t(t)}return s}}
P.jf.prototype={
gc7:function(){return"RangeError"},
gc6:function(){if(J.h3(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.t(t)},
gO:function(a){return this.f}}
P.b7.prototype={
J:function(a){return"Unsupported operation: "+this.a}}
P.dL.prototype={
J:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.t(t):"UnimplementedError"}}
P.c0.prototype={
J:function(a){return"Bad state: "+this.a}}
P.bT.prototype={
J:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.t(P.pj(t))+"."}}
P.km.prototype={
J:function(a){return"Out of Memory"},
gaO:function(){return},
$iscT:1}
P.fK.prototype={
J:function(a){return"Stack Overflow"},
gaO:function(){return},
$iscT:1}
P.ih.prototype={
J:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.t(t)+"' during its initialization"}}
P.mr.prototype={
J:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.t(t)}}
P.j0.prototype={
J:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.t(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.f.c0(r,0,75)+"..."
return s+"\n"+r}}
P.is.prototype={
J:function(a){return"Expando:"+H.t(this.a)},
A:function(a,b){var t,s
t=this.bJ
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aE(P.dX(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ot(b,"expando$values")
return s==null?null:H.ot(s,t)},
i:function(a,b,c){var t,s
t=this.bJ
if(typeof t!=="string")t.set(b,c)
else{s=H.ot(b,"expando$values")
if(s==null){s=new P.aw()
H.pT(b,"expando$values",s)}H.pT(s,t,c)}},
gN:function(a){return this.a}}
P.a3.prototype={$isaL:1,
$asaL:function(){return[P.bS]}}
P.W.prototype={
az:function(a,b){return H.el(this,b,H.an(this,"W",0),null)},
cP:function(a,b){return new H.bG(this,b,[H.an(this,"W",0)])},
ho:function(a,b){var t,s
t=this.ga_(this)
if(!t.M())throw H.z(H.fq())
s=t.gP()
for(;t.M();)s=b.$2(s,t.gP())
return s},
h7:function(a,b){var t,s
t=this.ga_(this)
if(!t.M())return""
if(b===""){s=""
do s+=H.t(t.gP())
while(t.M())}else{s=H.t(t.gP())
for(;t.M();)s=s+b+H.t(t.gP())}return s.charCodeAt(0)==0?s:s},
al:function(a,b){return P.cE(this,!0,H.an(this,"W",0))},
aA:function(a){return this.al(a,!0)},
gO:function(a){var t,s
t=this.ga_(this)
for(s=0;t.M();)++s
return s},
gag:function(a){return!this.ga_(this).M()},
aV:function(a,b){var t,s,r
if(b<0)H.aE(P.bu(b,0,null,"index",null))
for(t=this.ga_(this),s=0;t.M();){r=t.gP()
if(b===s)return r;++s}throw H.z(P.jg(b,this,"index",null,s))},
J:function(a){return P.ok(this,"(",")")},
$asW:null}
P.fr.prototype={}
P.a9.prototype={$asa9:null,$isW:1,$isa6:1,$asa6:null}
P.c_.prototype={
gaf:function(a){return P.aw.prototype.gaf.call(this,this)},
J:function(a){return"null"}}
P.bS.prototype={$isaL:1,
$asaL:function(){return[P.bS]}}
P.aw.prototype={constructor:P.aw,$isaw:1,
a8:function(a,b){return this===b},
gaf:function(a){return H.cG(this)},
J:function(a){return H.kv(this)},
gah:function(a){return new H.cN(H.nt(this),null)},
toString:function(){return this.J(this)}}
P.d6.prototype={}
P.cK.prototype={}
P.O.prototype={$isaL:1,
$asaL:function(){return[P.O]}}
P.ew.prototype={
gO:function(a){return this.ae.length},
J:function(a){var t=this.ae
return t.charCodeAt(0)==0?t:t},
gae:function(){return this.ae}}
W.ac.prototype={}
W.h9.prototype={
J:function(a){return String(a)},
$isZ:1,
sat:function(a,b){return a.type=b}}
W.ha.prototype={
J:function(a){return String(a)},
$isZ:1}
W.dg.prototype={
aS:function(a){return a.close()},
$isdg:1}
W.hh.prototype={$isZ:1}
W.hk.prototype={
gN:function(a){return a.name},
gad:function(a){return a.value},
sN:function(a,b){return a.name=b},
sat:function(a,b){return a.type=b},
sad:function(a,b){return a.value=b}}
W.hm.prototype={
gfF:function(a){return a.getContext("2d")}}
W.eS.prototype={
hl:function(a,b,c,d,e,f,g,h){a.putImageData(P.vD(b),c,d)
return},
dP:function(a,b,c,d){return this.hl(a,b,c,d,null,null,null,null)}}
W.cS.prototype={$isZ:1,
gO:function(a){return a.length}}
W.eW.prototype={
ct:function(a,b){return typeof console!="undefined"?console.error(b):null},
dL:function(a){return typeof console!="undefined"?console.info(a):null},
hx:function(a){return typeof console!="undefined"?console.time(a):null},
hH:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.dk.prototype={
b3:function(a,b){return a.item(b)},
gO:function(a){return a.length}}
W.fg.prototype={}
W.id.prototype={}
W.ig.prototype={
f1:function(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
seS:function(a,b){return a._dartDetail=b}}
W.eY.prototype={$isZ:1}
W.eZ.prototype={
gN:function(a){return a.name}}
W.ii.prototype={
gN:function(a){var t=a.name
if(P.pi()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.pi()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
J:function(a){return String(a)}}
W.cv.prototype={
gbo:function(a){return P.uv(a.clientLeft,a.clientTop,a.clientWidth,a.clientHeight,null)},
J:function(a){return a.localName},
dC:function(a){return a.click()},
gaj:function(a){return new W.eB(a,"change",!1,[W.B])},
gcz:function(a){return new W.eB(a,"click",!1,[W.aJ])},
$iscv:1,
$isaw:1,
$isZ:1}
W.ip.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b},
sat:function(a,b){return a.type=b}}
W.iq.prototype={
gay:function(a){return a.error}}
W.B.prototype={
hj:function(a){return a.preventDefault()},
ej:function(a){return a.stopPropagation()},
$isB:1,
$isaw:1}
W.e2.prototype={
eD:function(a,b,c,d){return a.addEventListener(b,H.eM(c,1),!1)},
fd:function(a,b,c,d){return a.removeEventListener(b,H.eM(c,1),!1)}}
W.iT.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.aT.prototype={$isaT:1,$isaw:1,
gN:function(a){return a.name}}
W.du.prototype={
gO:function(a){return a.length},
A:function(a,b){if(b>>>0!==b||b>=a.length)throw H.z(P.jg(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.z(new P.b7("Cannot assign element of immutable List."))},
aV:function(a,b){if(b<0||b>=a.length)return H.X(a,b)
return a[b]},
b3:function(a,b){return a.item(b)},
$isdu:1,
$iscf:1,
$ascf:function(){return[W.aT]},
$isbO:1,
$asbO:function(){return[W.aT]},
$isa9:1,
$asa9:function(){return[W.aT]},
$isa6:1,
$asa6:function(){return[W.aT]},
$isW:1,
$asW:function(){return[W.aT]}}
W.fh.prototype={
$asa9:function(){return[W.aT]},
$asa6:function(){return[W.aT]},
$asW:function(){return[W.aT]},
$isa9:1,
$isa6:1,
$isW:1}
W.fi.prototype={
$asa9:function(){return[W.aT]},
$asa6:function(){return[W.aT]},
$asW:function(){return[W.aT]},
$isa9:1,
$isa6:1,
$isW:1}
W.f9.prototype={
gdT:function(a){var t=a.result
if(!!J.af(t).$iscR)return H.uc(t,0,null)
return t},
gay:function(a){return a.error}}
W.fc.prototype={
b3:function(a,b){return a.item(b)},
gO:function(a){return a.length},
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.jc.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.cY.prototype={$iscY:1,
gaB:function(a){return a.data}}
W.jd.prototype={
dD:function(a,b){return a.complete.$1(b)}}
W.ff.prototype={$isZ:1,$iseu:1,
gbc:function(a){return a.checked},
gfS:function(a){return a.files},
gN:function(a){return a.name},
gad:function(a){return a.value},
gcN:function(a){return a.valueAsNumber},
sfp:function(a,b){return a.accept=b},
sbc:function(a,b){return a.checked=b},
saE:function(a,b){return a.max=b},
sdN:function(a,b){return a.maxLength=b},
saF:function(a,b){return a.min=b},
sdO:function(a,b){return a.multiple=b},
sN:function(a,b){return a.name=b},
she:function(a,b){return a.pattern=b},
saH:function(a,b){return a.step=b},
sat:function(a,b){return a.type=b},
sad:function(a,b){return a.value=b},
scN:function(a,b){return a.valueAsNumber=b}}
W.eu.prototype={$iscv:1,$isZ:1}
W.jA.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.jC.prototype={
gad:function(a){return a.value},
sad:function(a,b){return a.value=b}}
W.jG.prototype={
sat:function(a,b){return a.type=b}}
W.jO.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.en.prototype={
gay:function(a){return a.error}}
W.jT.prototype={
sat:function(a,b){return a.type=b}}
W.jU.prototype={
gbc:function(a){return a.checked},
sbc:function(a,b){return a.checked=b},
sat:function(a,b){return a.type=b}}
W.jV.prototype={
aS:function(a){return a.close()}}
W.jW.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.jX.prototype={
gad:function(a){return a.value},
saE:function(a,b){return a.max=b},
saF:function(a,b){return a.min=b},
sad:function(a,b){return a.value=b}}
W.aJ.prototype={
gbo:function(a){return new P.cF(a.clientX,a.clientY,[null])},
$isaJ:1,
$isB:1,
$isaw:1}
W.kf.prototype={$isZ:1}
W.kg.prototype={
gN:function(a){return a.name}}
W.d8.prototype={
hr:function(a,b){var t,s
try{t=a.parentNode
J.qE(t,b,a)}catch(s){H.b9(s)}return a},
J:function(a){var t=a.nodeValue
return t==null?this.el(a):t},
fe:function(a,b,c){return a.replaceChild(b,c)}}
W.kh.prototype={
sat:function(a,b){return a.type=b}}
W.ki.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b},
sat:function(a,b){return a.type=b}}
W.kk.prototype={
gad:function(a){return a.value},
sad:function(a,b){return a.value=b}}
W.kn.prototype={
gN:function(a){return a.name},
gad:function(a){return a.value},
sN:function(a,b){return a.name=b},
sad:function(a,b){return a.value=b}}
W.kq.prototype={
gN:function(a){return a.name},
gad:function(a){return a.value},
sN:function(a,b){return a.name=b},
sad:function(a,b){return a.value=b}}
W.kx.prototype={
gad:function(a){return a.value},
sad:function(a,b){return a.value=b}}
W.kV.prototype={
sat:function(a,b){return a.type=b}}
W.cl.prototype={
b3:function(a,b){return a.item(b)},
$iscl:1,
gO:function(a){return a.length},
gN:function(a){return a.name},
gad:function(a){return a.value},
sdO:function(a,b){return a.multiple=b},
sN:function(a,b){return a.name=b},
sad:function(a,b){return a.value=b}}
W.l0.prototype={
gN:function(a){return a.name},
sN:function(a,b){return a.name=b}}
W.l5.prototype={
sat:function(a,b){return a.type=b}}
W.l8.prototype={
gay:function(a){return a.error}}
W.l9.prototype={
gN:function(a){return a.name}}
W.lE.prototype={
sat:function(a,b){return a.type=b}}
W.lN.prototype={
gN:function(a){return a.name},
gad:function(a){return a.value},
sdN:function(a,b){return a.maxLength=b},
sN:function(a,b){return a.name=b},
sad:function(a,b){return a.value=b}}
W.c2.prototype={}
W.fQ.prototype={
aS:function(a){return a.close()},
$isZ:1,
gN:function(a){return a.name}}
W.me.prototype={
gN:function(a){return a.name}}
W.mi.prototype={
J:function(a){return"Rectangle ("+H.t(a.left)+", "+H.t(a.top)+") "+H.t(a.width)+" x "+H.t(a.height)},
a8:function(a,b){var t,s,r
if(b==null)return!1
t=J.af(b)
if(!t.$iscI)return!1
s=a.left
r=t.gcv(b)
if(s==null?r==null:s===r){s=a.top
r=t.gcL(b)
if(s==null?r==null:s===r){s=a.width
r=t.ge1(b)
if(s==null?r==null:s===r){s=a.height
t=t.gdK(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gaf:function(a){var t,s,r,q,p
t=J.bo(a.left)
s=J.bo(a.top)
r=J.bo(a.width)
q=J.bo(a.height)
q=W.mN(W.mN(W.mN(W.mN(0,t),s),r),q)
p=536870911&q+((67108863&q)<<3)
p^=p>>>11
return 536870911&p+((16383&p)<<15)},
$iscI:1,
$ascI:function(){},
gdA:function(a){return a.bottom},
gdK:function(a){return a.height},
gcv:function(a){return a.left},
gdU:function(a){return a.right},
gcL:function(a){return a.top},
ge1:function(a){return a.width}}
W.mm.prototype={$isZ:1}
W.mF.prototype={$isZ:1}
W.n6.prototype={$isZ:1}
W.fW.prototype={
aM:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.v(this,0))},
cw:function(a,b,c){return this.aM(a,null,b,c)}}
W.eB.prototype={}
W.mp.prototype={
bR:function(){if(this.b==null)return
this.dt()
this.b=null
this.d=null
return},
cB:function(a,b){if(this.b==null)return;++this.a
this.dt()},
cA:function(a){return this.cB(a,null)},
bW:function(){if(this.b==null||this.a<=0)return;--this.a
this.dr()},
dr:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.qC(r,this.c,t,!1)}},
dt:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.qD(r,this.c,t,!1)}},
ey:function(a,b,c,d,e){this.dr()}}
W.mq.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.fe.prototype={
ga_:function(a){return new W.iY(a,a.length,-1,null,[H.an(a,"fe",0)])},
$isa9:1,
$asa9:null,
$isa6:1,
$asa6:null,
$isW:1,
$asW:null}
W.iY.prototype={
M:function(){var t,s
t=this.c+1
s=this.b
if(t<s){s=this.a
if(t<0||t>=s.length)return H.X(s,t)
this.d=s[t]
this.c=t
return!0}this.d=null
this.c=s
return!1},
gP:function(){return this.d}}
P.ne.prototype={
dG:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
cO:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.af(a)
if(!!s.$isvY)return new Date(a.a)
if(!!s.$isux)throw H.z(new P.dL("structured clone of RegExp"))
if(!!s.$isaT)return a
if(!!s.$isdg)return a
if(!!s.$isdu)return a
if(!!s.$iscY)return a
if(!!s.$isdG||!!s.$isd7)return a
if(!!s.$isor){r=this.dG(a)
q=this.b
p=q.length
if(r>=p)return H.X(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.X(q,r)
q[r]=o
s.cu(a,new P.ng(t,this))
return t.a}if(!!s.$isa9){r=this.dG(a)
t=this.b
if(r>=t.length)return H.X(t,r)
o=t[r]
if(o!=null)return o
return this.fH(a,r)}throw H.z(new P.dL("structured clone of other type"))},
fH:function(a,b){var t,s,r,q,p
t=J.b8(a)
s=t.gO(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.X(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.cO(t.A(a,p))
if(p>=r.length)return H.X(r,p)
r[p]=q}return r}}
P.ng.prototype={
$2:function(a,b){this.a.a[a]=this.b.cO(b)},
$S:function(){return{func:1,args:[,,]}}}
P.h0.prototype={$iscY:1,$isZ:1,
gaB:function(a){return this.a}}
P.nf.prototype={}
P.mM.prototype={
be:function(){return Math.random()}}
P.mY.prototype={
b9:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.an(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
be:function(){this.b9()
var t=this.a
this.b9()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
eB:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.an(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.an(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.an(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.an(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.an(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.an(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.an(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b9()
this.b9()
this.b9()
this.b9()}}
P.cF.prototype={
J:function(a){return"Point("+H.t(this.a)+", "+H.t(this.b)+")"},
a8:function(a,b){var t,s
if(b==null)return!1
if(!(b instanceof P.cF))return!1
t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gaf:function(a){var t,s
t=J.bo(this.a)
s=J.bo(this.b)
return P.qc(P.eF(P.eF(0,t),s))},
ac:function(a,b){var t,s,r,q
t=this.a
s=J.aa(b)
r=s.ga9(b)
if(typeof t!=="number")return t.ac()
if(typeof r!=="number")return H.az(r)
q=this.b
s=s.gaa(b)
if(typeof q!=="number")return q.ac()
if(typeof s!=="number")return H.az(s)
return new P.cF(t+r,q+s,this.$ti)},
ai:function(a,b){var t,s
t=this.a
if(typeof t!=="number")return t.ai()
s=this.b
if(typeof s!=="number")return s.ai()
return new P.cF(t*b,s*b,this.$ti)},
ga9:function(a){return this.a},
gaa:function(a){return this.b}}
P.mZ.prototype={
gdU:function(a){var t=this.a
if(typeof t!=="number")return t.ac()
return t+this.c},
gdA:function(a){var t=this.b
if(typeof t!=="number")return t.ac()
return t+this.d},
J:function(a){return"Rectangle ("+H.t(this.a)+", "+H.t(this.b)+") "+this.c+" x "+this.d},
a8:function(a,b){var t,s,r,q
if(b==null)return!1
t=J.af(b)
if(!t.$iscI)return!1
s=this.a
r=t.gcv(b)
if(s==null?r==null:s===r){r=this.b
q=t.gcL(b)
if(r==null?q==null:r===q){if(typeof s!=="number")return s.ac()
if(s+this.c===t.gdU(b)){if(typeof r!=="number")return r.ac()
t=r+this.d===t.gdA(b)}else t=!1}else t=!1}else t=!1
return t},
gaf:function(a){var t,s,r,q
t=this.a
s=J.bo(t)
r=this.b
q=J.bo(r)
if(typeof t!=="number")return t.ac()
if(typeof r!=="number")return r.ac()
return P.qc(P.eF(P.eF(P.eF(P.eF(0,s),q),t+this.c&0x1FFFFFFF),r+this.d&0x1FFFFFFF))}}
P.cI.prototype={$ascI:null,
gcv:function(a){return this.a},
gcL:function(a){return this.b},
ge1:function(a){return this.c},
gdK:function(a){return this.d}}
P.h7.prototype={$isZ:1}
P.cQ.prototype={$isZ:1}
P.iu.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iv.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iw.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.ix.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iy.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iz.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iA.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iB.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iC.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iD.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iE.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iF.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iG.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iH.prototype={
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iI.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iJ.prototype={
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iK.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iL.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.iX.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.j_.prototype={
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.bX.prototype={}
P.cy.prototype={$isZ:1}
P.je.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.jQ.prototype={$isZ:1}
P.jR.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.kr.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.kG.prototype={
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.kW.prototype={$isZ:1,
sat:function(a,b){return a.type=b}}
P.lF.prototype={
sat:function(a,b){return a.type=b}}
P.b6.prototype={
dC:function(a){throw H.z(new P.b7("Cannot invoke click SVG."))},
gcz:function(a){return new W.eB(a,"click",!1,[W.aJ])},
$isZ:1}
P.lG.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.lI.prototype={$isZ:1}
P.fN.prototype={}
P.lO.prototype={$isZ:1}
P.ex.prototype={
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.lY.prototype={$isZ:1,
ga9:function(a){return a.x},
gaa:function(a){return a.y}}
P.lZ.prototype={$isZ:1}
P.eE.prototype={$isZ:1}
P.n3.prototype={$isZ:1}
P.n4.prototype={$isZ:1}
P.n5.prototype={$isZ:1}
P.cR.prototype={}
S.h8.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Math Book",H.a([$.a1,$.aq,$.ak],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Giant Map",H.a([$.a1,$.aq],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Microscope",H.a([$.a0,$.aq,$.b0],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Star Chart",H.a([$.a1,$.aq],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("History Book",H.a([$.a1,$.aq],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Radioactive Rock",H.a([$.fk,$.cD],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Compass",H.a([$.a0,$.aq],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.f3,$.j)
q.i(0,$.am,$.j)
q.i(0,$.f8,$.i)
q.i(0,$.ah,$.y)
q.i(0,$.bj,$.i)
p=$.k
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.m
o=o+n+" to stop "
m=$.A
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.u5
n=[U.c]
q.i(0,new R.Y("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
q.i(0,new R.Y("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.m+" to stop "+$.A+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.pW(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
p="The "+m+" finds a massive library, filled with books. The "
l=$.m
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.n
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Y("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.dH(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.i)
m=this.r
m.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.e5,$.y)
s.i(0,$.bj,$.j)
p=$.k
o="The "+p+"  is approached by a "
l=$.m
s.i(0,new R.Y("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.A+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.m
s.i(0,new R.Y("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.A+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.ci(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
s.i(0,new R.Y("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.m+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.dH(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
m.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.e5,$.y)
t.i(0,$.bj,$.j)
t.i(0,$.aO,$.y)
t.i(0,$.pm,$.y)
r=$.k
q="The "+r+"  is approached by a "
p=$.m
q=q+p+" who offers them a grant to study "
o=$.a5
t.i(0,new R.Y("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.A+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.dH(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
o=$.m
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.A
r=r+p+".  It is up to the "
q=$.k
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.a5
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.ub
t.i(0,new R.Y("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.cH(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
t.i(0,new R.Y("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.A+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.m+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
L.hc.prototype={
$1:function(a){return!a.gbv()},
$S:function(){return{func:1,args:[L.cs]}}}
L.cs.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Perfectly Generic Object",H.a([],[G.U]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.v(t,0)]))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.O]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bC,$.i)
q.i(0,$.am,$.y)
q.i(0,$.cx,$.i)
q.i(0,$.aO,$.j)
q.i(0,$.dq,$.y)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.n
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.Q("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.T(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=this.f
j.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.e9,$.i)
s.i(0,$.e8,$.y)
s.i(0,$.cW,$.j)
s.i(0,$.bB,$.i)
s.i(0,$.aY,$.y)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.n
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! "
s.i(0,new R.Q("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.T(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ah,$.i)
t.i(0,$.am,$.y)
t.i(0,$.aQ,$.j)
r=$.k
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.A
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.n
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aG+". The "+r+" has won! "
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ov(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
l=$.k
r="The "+l+" learns that all of the local "
m=$.m
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.n
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aG+". The "+l+" has won! "
t.i(0,new R.Q("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.T(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.u(s,t,null),$.a7)},
J:function(a){return this.Q},
R:function(a,b,c,d,e,f,g){var t,s,r
t=this.Q
this.ch=t
s=this.dx
r=s==null
if(r&&this!==$.p2&&this.e<256){this.r=new X.dl("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+H.t(t)+".xml",!1,H.a([],[X.di]),H.a([],[M.cU]))
this.I()
this.K()
this.x=H.t(this.Q)+".png"
this.y=H.t(this.Q)+"Big.png"}if(this.Q==="Combo"){this.I()
this.K()
this.r=new X.dl("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/Time.xml",!1,H.a([],[X.di]),H.a([],[M.cU]))
this.x="Time.png"
this.y="TimeBig.png"}if(!r){this.I()
this.K()
s.sa3(this.ga3())
s.sa2(this.ga2())
s.sa1(this.ga1())
s.sax(this.gax())
s.sa0(this.ga0())
s.sW(this.gW())
s.sV(this.gV())
s.sX(this.gX())
s.sU(this.gU())
s.sa5(this.ga5())
s.sa4(this.ga4())
s.sZ(this.gZ())
s.sL(this.gL())
this.r=new X.dl("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+s.J(0)+".xml",!1,H.a([],[X.di]),H.a([],[M.cU]))
this.x="Reskins/"+H.t(this.Q)+".png"
this.y="Reskins/"+H.t(this.Q)+"Big.png"}t=this.e
if($.$get$c8().ap(t))H.aE("Duplicate aspect id for "+this.J(0)+": "+t+" is already registered for "+J.bq($.$get$c8().A(0,t))+".")
$.$get$c8().i(0,t,this)},
ga3:function(){return this.a},
ga2:function(){return this.b},
ga1:function(){return this.c},
gax:function(){return this.d},
gN:function(a){return this.Q},
gbv:function(){return this.cy},
gS:function(){return this.k2},
gW:function(){return this.k3},
gZ:function(){return this.k4},
gV:function(){return this.r1},
ga0:function(){return this.r2},
ga5:function(){return this.rx},
ga4:function(){return this.ry},
gX:function(){return this.x1},
gU:function(){return this.x2},
gL:function(){return this.y2},
sax:function(a){return this.d=a},
sa0:function(a){return this.r2=a}}
L.C.prototype={}
M.hd.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Barbells",H.a([$.aZ,$.jm,$.a0],s),null,!1,"Strength Building Metal")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Basketball",H.a([$.jk,$.dA],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Baseball Bat",H.a([$.pB,$.ar],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rubber Ball",H.a([$.jk,$.dA],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Megaphone",H.a([$.b5,$.as],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Hockey Stick",H.a([$.pB,$.ar,$.cC],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Trophy",H.a([$.a0,$.ei],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Boxing Glove",H.a([$.tz,$.dA],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Yoga Mat",H.a([$.dA,$.bf],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.cX,$.y)
q.i(0,$.aI,$.j)
q.i(0,$.bB,$.y)
p=$.k
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.m
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.A+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.Y("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.m
q.i(0,new R.Y("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.A+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.cH(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
n="The "+m+"  wanders into a bunch of "
p=$.m
q.i(0,new R.Y("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.et(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
m=this.r
m.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.cX,$.j)
t.i(0,$.eb,$.j)
t.i(0,$.aI,$.j)
s=$.k
r="The "+s+" finds a team of underdog "
p=$.m
t.i(0,new R.Y("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.pW(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
p=$.m
s="A group of "+p+"s approach the "
r=$.k
s=s+r+". Apparently their sports team lost their coach to the "+$.n+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.A
t.i(0,new R.Y("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.cH(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
k=$.m
p="A group of "+k+"s approach the "
r=$.k
t.i(0,new R.Y("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.n+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.a5+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(q,t,null),$.ab)},
gL:function(){return this.cx}}
O.he.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cod Piece",H.a([$.ai,$.ad,$.ap,$.S,$.ar],s),"God damn it, MI. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Poisoned Candy",H.a([$.py,$.S,$.jo],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cursed Lyre",H.a([$.b_,$.ar,$.bs,$.S,$.aV],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Snare Trap",H.a([$.ai,$.b_,$.S,$.dz],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.bi,$.i)
t.i(0,$.f7,$.i)
t.i(0,$.bd,$.i)
t.i(0,$.cc,$.i)
t.i(0,$.bc,$.i)
t.i(0,$.e4,$.i)
r="After all the bullshit the "+$.n+" has put the native "
q=$.m
r=r+q+"s through, the "
p=$.k
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ae+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.A
m=[U.c]
t.i(0,new R.a2("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.o(),!1,!1,new Y.cj("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.m
n="A group of jubilant "+p+"s are following the "
q=$.k
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.A
t.i(0,new R.a2("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.n+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
t.i(0,new R.a2("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.n+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.o(),!1,!1,new Y.hp("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.k
q=q+r+" organizes a huge festival for all the "
p=$.m
t.i(0,new R.au("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.aD)}}
L.hf.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Bear",H.a([$.b5,$.ay,$.w],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Thought",H.a([$.o8,$.tO,$.eh],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Doorway",H.a([$.eh,$.w],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aX,$.i)
t.i(0,$.bL,$.j)
t.i(0,$.aI,$.j)
t.i(0,$.cW,$.q)
r=$.k
q="The "+r+" hears a "+$.m+" "+$.A+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.n
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.Q("Revenge on the Denizen",!1,[new U.c(q),new U.c(p),new U.c(n),new U.T(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
gV:function(){return this.w},
gX:function(){return this.B},
gU:function(){return this.C},
gZ:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gL:function(){return this.G}}
T.hg.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Mystical Vial of Blood",H.a([$.b0,$.bs,$.w,$.bt],s),null,!1,"Vial of Not-ABs Oil")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bananaphone",H.a([$.cd,$.bs,$.w,$.bZ],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Friendship Bracelet",H.a([$.ai,$.bs,$.w,$.bt,$.oc],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bonding Manacles",H.a([$.a0,$.dz,$.w,$.bt,$.oc,$.aS],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Friendship Stairs",H.a([$.ar,$.pG,$.bs,$.bt,$.w,$.ad],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.O]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.br,$.i)
q.i(0,$.pq,$.i)
q.i(0,$.aO,$.j)
p=$.k
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.m
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.a5+" and some boondollars in compensation."
n=this.m
k=[U.c]
q.i(0,new R.Y("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.cH(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
n=$.m
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.A+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.n
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.k
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aG+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.Q("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.T(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bB,$.i)
s.i(0,$.bc,$.y)
s.i(0,$.ah,$.y)
s.i(0,$.o3,$.i)
s.i(0,$.bd,$.y)
p=$.k
o="The "+p+"  and the "
m=$.da
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.n
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.Q("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.T(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.d9(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
h=$.k
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.m
i=i+m+"s explains that before  "
p=$.n
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aG+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.u1
s.i(0,new R.Q("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.T(l,h,o)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
o="The "+p+" learns of the "
h=$.ae
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.m
o=o+l+" explains that the "
j=$.n
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.aG+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.Q("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.T(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.m
h=h+i+" on "+$.ae+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.dv+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a2("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.dH(),!1,!1,new Y.aM("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.m+" on "
m=$.ae
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.dv+" is now more popular with your friends than you are."
s.i(0,new R.a2("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.ow(),!1,!1,new Y.aM("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
m="The "+p+"  and the "
h=$.da
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.n
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.Q("Pale Shipping Dungeon",!1,[new U.c(m),new U.T(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.l)+".",o)],H.a([],k),R.d9(),!1,!1,new Y.fE(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a8)
n.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ah,$.i)
t.i(0,$.am,$.y)
t.i(0,$.aQ,$.j)
r="In the wake of the defeat of the "+$.n+" it becomes really how isolated the individual "
q=$.m
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.k
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.dv+" to kick your ass, but luckily they have several."
t.i(0,new R.a2("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.cH(),!1,!1,new Y.aM("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
o=$.k
q="The "+o+" learns that two prominent "
p=$.m
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.n
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aG+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.A+"ing. "
t.i(0,new R.Q("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.T(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gZ:function(){return this.H},
gL:function(){return this.a7}}
T.hj.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Pan's Pipe",H.a([$.aV,$.ar,$.bs,$.w],s),null,!1,"Smonkin Weeds Pipe")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Skeleton Key",H.a([$.cZ,$.w],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Inspector's Fan",H.a([$.as,$.a0,$.bs,$.w],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Jet Pack",H.a([$.ce,$.a0,$.b5,$.w,$.ad],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.O]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.aQ,$.j)
q.i(0,$.eb,$.i)
q.i(0,$.ah,$.j)
p=$.k
o="The "+p+" tries posting a letter through the "
n=$.a5
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.n
o=o+m+" has screwed with the mail system, crippling the "
l=$.m
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.u6
i=[U.c]
q.i(0,new R.Q("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.T(j,p,l)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.f
m.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.am,$.i)
s.i(0,$.eb,$.j)
s.i(0,$.ah,$.j)
s.i(0,$.aI,$.j)
s.i(0,$.aQ,$.j)
p=$.k
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.a5
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.m
k=l+k+" fields. The "+k+"s "+$.A+"ing is so joyful it's literally deafening. "
l=$.n
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.aG+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.Q("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.T(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aY,$.i)
t.i(0,$.o1,$.i)
t.i(0,$.eb,$.y)
t.i(0,$.aQ,$.y)
r=$.k
q="The "+r+" is chilling in a "+$.m+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.n
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.a5
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ae+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aG+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.Q("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gZ:function(){return this.H},
gL:function(){return this.a7}}
S.ho.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("A Rock",H.a([$.ay,$.cD,$.bY,$.w],[G.U]),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.v(t,0)]))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.nZ,$.j)
t.i(0,$.br,$.i)
r=$.k
q="The "+r+" decides enough is enough, and that they need to fight the "
p=$.n
q=q+p+". They decide to amass an army of consorts to fight it..."
o="The "+r+" figures out that the "
n=$.m
o=o+n+"s are very disinclined to fight, so the "+r+" has to use a bit more force..."
m="The "+r+" has created an army of fearful consorts, it may fall apart during the Denizen fight though..."
l="Now that the "+r+" has amassed an army of "+n+"s, they think it's time to fight the "+p+"..."
n="The "+p+" lies slain, but the "+n+"s still lie under the power of the "+r+"."
t.i(0,new R.Q("Make An Army",!1,[new U.c(q),new U.c(o),new U.c(m),new U.T(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gZ:function(){return this.G},
gL:function(){return this.H}}
U.ib.prototype={}
A.ic.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Colonel Sassacre's Daunting Text ",H.a([$.a1,$.aZ,$.bZ,$.jm],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wise Guy Book",H.a([$.a1,$.bZ],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Beagle Puss",H.a([$.b0,$.bZ],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Novelty Microphone",H.a([$.b5,$.as,$.bZ],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Banana",H.a([$.cd,$.bZ],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Fake Flower",H.a([$.ai,$.bZ],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Trick Handcuffs",H.a([$.a0,$.bZ],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bd,$.j)
q.i(0,$.bb,$.i)
q.i(0,$.aI,$.j)
p=$.k
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.m
o=o+n+"s are too scared to even "+$.A+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.n+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.Y("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cX,$.y)
s.i(0,$.aI,$.i)
s.i(0,$.bb,$.i)
s.i(0,$.bi,$.i)
o=$.k
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ae
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.m
k=k+j+"s let out a braying "+$.A+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.u9
s.i(0,new R.Y("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.be,$.y)
t.i(0,$.aP,$.j)
t.i(0,$.bb,$.i)
t.i(0,$.aI,$.j)
t.i(0,$.nY,$.j)
r=$.k
q="The "+r+"  is approached by a Crafty "
o=$.m
q=q+o+" who offers them a magical "
n=$.a5
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.A
t.i(0,new R.Y("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
M.ie.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Can of Spray Paint",H.a([$.b1,$.a0],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sensible Chuckles Magazine",H.a([$.a1,$.av,$.bZ,$.ak],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Gentleman's Razor",H.a([$.tL,$.a0,$.d_],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("How To Draw Manga",H.a([$.a1,$.av,$.ak],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Painting of a Horse Boxing a Football Player",H.a([$.b1,$.aU,$.a1],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Collection of Classical Works",H.a([$.av,$.a1],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Documentary on Horses",H.a([$.av,$.aB,$.aU],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Paint Set",H.a([$.b1,$.av],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shaving Cream",H.a([$.ce,$.av,$.a0],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Classy Suit",H.a([$.ai,$.av],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("The Fatherly Gent's Shaving Almanac ",H.a([$.a1,$.av,$.ak],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bL,$.j)
q.i(0,$.bj,$.i)
q.i(0,$.ah,$.j)
p=$.k
o="The "+p+" visits a beautiful "
n=$.a5
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.m
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.n+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.A+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.Y("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.r
m.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cX,$.y)
s.i(0,$.aI,$.j)
s.i(0,$.bb,$.y)
s.i(0,$.am,$.j)
s.i(0,$.bi,$.i)
o=$.k
n="The "+o+" finds a troupe of dejected looking "
l=$.m
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ae
l=l+n+" "
k=$.a5
s.i(0,new R.Y("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.A+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f7,$.y)
t.i(0,$.bd,$.y)
t.i(0,$.e4,$.y)
t.i(0,$.aP,$.y)
t.i(0,$.am,$.j)
t.i(0,$.ah,$.j)
r=$.k
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.A
q=q+o+"ingworth, "
n=$.m
q=q+n+" heiress to the "+$.a5+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.tZ
t.i(0,new R.Y("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
V.ij.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Trendy Fabric",H.a([$.b1,$.ai],s),null,!1,"Weird Tasting Candy Paper")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Necklace",H.a([$.b1,$.pC,$.oc],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sewing Needle",H.a([$.a0,$.tI,$.dy],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=$.o9
r=A.h("Broom",H.a([r,$.ar,$.aZ,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rolling Pin",H.a([$.ar,$.tN,$.aZ],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Velvet Pillow",H.a([$.ai,$.bf,$.bs,$.b1,$.dw],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Yarn Ball",H.a([$.b1,$.ai],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Refrigerator",H.a([$.aS,$.jm,$.a0,$.bY],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Photo Album",H.a([$.b1,$.a1],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ice Cubes",H.a([$.bY],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cast Iron Skillet",H.a([$.a0,$.ce,$.aZ,$.jm,$.tA],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Failed Dish",H.a([$.jo],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dr Pepper BBQ Sauce",H.a([$.jo],s),"Gross.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Potted Plant",H.a([$.b1,$.ob,$.dx],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Chicken Leg",H.a([$.cd,$.d0,$.cZ],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Juicy Steak",H.a([$.cd,$.d0],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Wedding Cake",H.a([$.b1,$.cd,$.bt],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bi,$.j)
q.i(0,$.bc,$.j)
q.i(0,$.bd,$.y)
p=$.k
o="The "+p+" is visited by a Beautiful "
n=$.m
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.a5
l=[U.c]
q.i(0,new R.Y("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.A+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.o(),!1,!1,new Y.eX("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.r
n.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bd,$.i)
s.i(0,$.aI,$.j)
s.i(0,$.e4,$.i)
s.i(0,$.cc,$.j)
s.i(0,$.am,$.i)
p=$.k
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.a5
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.m
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.A+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.u7
s.i(0,new R.Y("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.e6,$.i)
t.i(0,$.am,$.j)
t.i(0,$.dp,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.o3,$.i)
r=$.k
q="The "+r+" finds a loom, and a Wizened "
p=$.m
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.a5
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.A+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Y("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
U.ik.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ak,$.as,$.a1,$.b_,$.w,$.ad],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Egg Timer",H.a([$.aB,$.bs,$.w,$.b_],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Skull Timer",H.a([$.cZ,$.bs,$.w,$.b_],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Poison Flask",H.a([$.b0,$.w,$.jo],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ice Gorgon Head",H.a([$.b0,$.w,$.bY,$.b_,$.dz,$.jr,$.bg],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Obituary",H.a([$.aS,$.bg,$.b_,$.a1,$.w],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.O]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.i)
q.i(0,$.bC,$.j)
q.i(0,$.eb,$.y)
q.i(0,$.am,$.y)
q.i(0,$.aO,$.j)
p=$.k
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.m
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.a5
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.n
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.Q("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.i)
s.i(0,$.bC,$.j)
s.i(0,$.dt,$.a8)
s.i(0,$.dr,$.j)
s.i(0,$.pm,$.j)
s.i(0,$.br,$.j)
s.i(0,$.bC,$.j)
s.i(0,$.am,$.y)
s.i(0,$.aO,$.j)
s.i(0,$.bU,$.j)
p=$.k
o="The "+p+" has found a group of Violent "
m=$.m
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ae
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.A+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.n
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aG+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.Q("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.ci(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.a5
p=p+l+"s alike. "
l=$.m+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.n
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aG+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.Q("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.T(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ah,$.i)
t.i(0,$.aO,$.i)
t.i(0,$.t_,$.a8)
t.i(0,$.f3,$.y)
r=$.k
q="The "+r+" finds a small dungeon bearing the image of "
p=$.n
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.m+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.T(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.ci(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
k=$.k
p="The "+k+" learns from one of their "
r=$.m
p=p+r+"s that there is an ancient prophecy of a "
l=$.ae
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.a5
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.n
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aG+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.tY
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.T(o,k,q)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gZ:function(){return this.aW},
gL:function(){return this.aX},
sa3:function(a){return this.l=a},
sa2:function(a){return this.n=a},
sa1:function(a){return this.q=a},
sax:function(a){return this.t=a},
sa0:function(a){return this.v=a},
sW:function(a){return this.w=a},
sV:function(a){return this.C=a},
sX:function(a){return this.D=a},
sU:function(a){return this.F=a},
sa5:function(a){return this.E=a},
sa4:function(a){return this.G=a},
sZ:function(a){return this.aW=a},
sL:function(a){return this.aX=a}}
Z.il.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Dream Diary",H.a([$.a1,$.ak,$.w],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Interlocking Brick",H.a([$.aB,$.bs,$.aZ,$.w,$.ad],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Art Supplies",H.a([$.aB,$.bs,$.w],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.e6,$.j)
q.i(0,$.dp,$.i)
q.i(0,$.ah,$.j)
q.i(0,$.o3,$.j)
p=$.m
o="A "+p+" child tugs on the "
n=$.k
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.a5
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.n
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.A+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.u4
k=[U.c]
q.i(0,new R.Q("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.T(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.q)
l=this.f
l.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aY,$.j)
s.i(0,$.dp,$.i)
s.i(0,$.bW,$.j)
s.i(0,$.aX,$.j)
s.i(0,$.dn,$.j)
s.i(0,$.bb,$.i)
p=$.k
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.m
n=n+m+"s are even starting to snigger and "
j=$.A
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.n
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.T("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
l.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bL,$.i)
t.i(0,$.f2,$.j)
t.i(0,$.ah,$.j)
t.i(0,$.aX,$.i)
t.i(0,$.dn,$.i)
t.i(0,$.dp,$.j)
r=$.k
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.n
t.i(0,new R.Q("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.ae+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.m+" is "+$.A+"ing in reverse. Another is in a "+$.a5+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.T("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
l.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
ga4:function(){return this.D},
gX:function(){return this.F},
gU:function(){return this.E},
gZ:function(){return this.H},
gL:function(){return this.a7}}
X.dl.prototype={}
X.di.prototype={
$S:function(){return{func:1,v:true,args:[[P.a9,M.cU]]}}}
M.cU.prototype={}
U.iN.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Fluthulu Poster",H.a([$.ai,$.bf,$.bg,$.ef],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Scalemate",H.a([$.ai,$.bf,$.bg],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Replica Bone Shield",H.a([$.aS,$.aB,$.cZ,$.jq,$.ap],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Replica Ice Sword",H.a([$.aB,$.tC,$.fn,$.ap],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Zombie Mask",H.a([$.aB,$.jr,$.d0,$.bg],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Vampire Romance Novel",H.a([$.ak,$.a1,$.cB,$.bg],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wizardy Herbert",H.a([$.a1,$.aA,$.aZ],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Complacency of the Learned",H.a([$.a1,$.aA,$.aZ],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Grimoire for Summoning the Zoologically Dubious ",H.a([$.a1,$.aA,$.jr,$.bg,$.ef],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wizard Statue",H.a([$.aS,$.cD,$.aA,$.aZ,$.ap],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Mermaid Fountain",H.a([$.aS,$.od,$.aA,$.aZ,$.ap],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.e7,$.a8)
q.i(0,$.bc,$.j)
q.i(0,$.aQ,$.j)
q.i(0,$.be,$.y)
p=$.k
o="The "+p+" learns of a Beautiful "
n=$.m
o=o+n+" who has been kidnapped by the vial "
m=$.n
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.a5
j=[U.c]
q.i(0,new R.Y("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aP,$.i)
s.i(0,$.br,$.i)
s.i(0,$.iQ,$.j)
s.i(0,$.aO,$.i)
s.i(0,$.dt,$.i)
s.i(0,$.f6,$.j)
o=$.k
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.m
s.i(0,new R.Y("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aP,$.i)
t.i(0,$.f5,$.j)
t.i(0,$.aO,$.i)
t.i(0,$.cw,$.j)
t.i(0,$.e5,$.j)
t.i(0,$.pq,$.j)
r=$.k
q="The "+r+" finds a group of three "
o=$.m
q=q+o+"s "
n=$.A
t.i(0,new R.Y("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
L.iO.prototype={
gS:function(){return this.l}}
N.a_.prototype={
J:function(a){return H.t(new H.cN(H.nt(this),null))+": "+H.t(this.b)}}
O.ec.prototype={}
O.iU.prototype={
$1:function(a){return"."+H.t(a)},
$S:function(){return{func:1,args:[P.O]}}}
O.iV.prototype={
$1:function(a){var t=0,s=P.nV(),r,q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$1=P.oR(function(b,c){if(b===1)return P.oL(c,s)
while(true)switch(t){case 0:p=q.c
if(J.qM(p).length===0){t=1
break}o=p.files,n=o.length,m=q.a,l=q.b,k=0
case 3:if(!(k<o.length)){t=5
break}j=o[k]
i=0
case 6:if(!(i<1)){t=8
break}h=m[i]
t=9
return P.oK(h.bV(j),$async$$1)
case 9:g=c
t=g!=null?10:11
break
case 10:f=l
t=12
return P.oK(h.cE(g),$async$$1)
case 12:f.$2(c,j.name)
t=8
break
case 11:case 7:++i
t=6
break
case 8:case 4:o.length===n||(0,H.c6)(o),++k
t=3
break
case 5:p.value=null
case 1:return P.oM(r,s)}})
return P.oN($async$$1,s)},
$S:function(){return{func:1,ret:P.bk,args:[W.B]}}}
O.iW.prototype={
$1:function(a){return J.qG(this.a)},
$S:function(){return{func:1,args:[W.B]}}}
O.eR.prototype={
bV:function(a){var t=0,s=P.nV(),r,q,p
var $async$bV=P.oR(function(b,c){if(b===1)return P.oL(c,s)
while(true)switch(t){case 0:q=new FileReader()
q.readAsArrayBuffer(a)
p=new W.fW(q,"load",!1,[W.w5])
t=3
return P.oK(p.gar(p),$async$bV)
case 3:if(!!J.af(C.p.gdT(q)).$isoE){r=H.eO(C.p.gdT(q),"$isoE").buffer
t=1
break}t=1
break
case 1:return P.oM(r,s)}})
return P.oN($async$bV,s)},
$asec:function(a){return[a,P.cR]}}
O.iZ.prototype={
gS:function(){return this.l},
ga0:function(){return this.n},
gW:function(){return this.q},
gV:function(){return this.u},
gX:function(){return this.v},
gU:function(){return this.w},
gL:function(){return this.B}}
Z.j1.prototype={
$1:function(a){$.$get$o5().A(0,a).ghU()
return!1},
$S:function(){return{func:1,args:[P.O]}}}
Z.it.prototype={}
E.fd.prototype={}
E.kj.prototype={}
E.r.prototype={
J:function(a){var t="["+H.t(this.a)+" x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.dY.prototype={
J:function(a){var t="[(Random from "+P.ok(this.d,"(",")")+") x "+H.t(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gL:function(){return this.d}}
E.eQ.prototype={
J:function(a){return"[Stats assigned from player Interests x"+H.t(this.b)+"]"}}
Y.j3.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("How to Teach Your Friends to Hack SBURB",H.a([$.ak,$.S,$.a1,$.ad,$.fm],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Unstable Domino",H.a([$.aB,$.S,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Exposed Thread",H.a([$.ai,$.S,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Teetering Plate",H.a([$.jp,$.S,$.b_],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.O]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.o4,$.j)
t.i(0,$.aQ,$.i)
t.i(0,$.bU,$.y)
t.i(0,$.bK,$.i)
r=$.m
q="An excited "+r+" runs up to the "
p=$.k
q=q+p+" and starts to "
o=$.A
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ae
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.a5
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.n
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.Q("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.T(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
o=$.k
t.i(0,new R.a2("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.n+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.m+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.o(),!1,!1,new Y.cj("Rewards/no_reward.png",null),1,null,null),$.q)
o=$.m
j="Now that the "+o+"s are free from the reign of "+$.n+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.k
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.A
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ae+" Quest Online: The "+$.a5+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a2("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p="The "+$.n+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.k
p=p+o+" shows the "
r=$.m
t.i(0,new R.au("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.A+"s in time to stop them.    ")],H.a([],i),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.t}}
Y.j4.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Sherpa Parka",H.a([$.bY,$.S,$.fj],s),"Clearly the best class uses this.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Guide Book",H.a([$.ad,$.bY,$.ak,$.a1,$.S,$.aq],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Whistle",H.a([$.a0,$.S,$.b5],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Announcement System",H.a([$.a0,$.S,$.as,$.aq],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.o4,$.i)
t.i(0,$.aQ,$.i)
t.i(0,$.bU,$.j)
t.i(0,$.bK,$.i)
r="Now that the "+$.n+" is out of the way, a group of "
q=$.m
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.k
o=[U.c]
t.i(0,new R.a2("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.A+", but they are happy.")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.k
t.i(0,new R.au("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.m+" "+$.A+"s in time to stop them.    ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.aD)}}
L.j5.prototype={
gS:function(){return this.l}}
T.j6.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Doll",H.a([$.jp,$.b1,$.bm,$.w],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Puppet",H.a([$.ar,$.bm,$.w,$.ad,$.bg],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mirror",H.a([$.oi,$.w],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shipping Grid",H.a([$.a1,$.w,$.cB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Shades",H.a([$.aU,$.b0,$.w],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.O]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.dr,$.y)
q.i(0,$.ds,$.i)
q.i(0,$.aI,$.j)
p=$.k
o="The "+p+", guided by a "+$.m+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.n
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.Q("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.T(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=$.k
p="The "+j+" finds a Violent "
l=$.m
p=p+l+". A Magical Talking "
k=$.a5
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.n
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.Q("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.T(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.ow(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
h=this.f
h.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bb,$.i)
s.i(0,$.iQ,$.i)
s.i(0,$.eb,$.j)
s.i(0,$.aO,$.i)
s.i(0,$.bd,$.j)
s.i(0,$.bU,$.y)
p=$.k
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.a5
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.n
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" is victorious. "
s.i(0,new R.Q("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.T(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j="Now that the "+$.n+" has been defeated, a Copy "
p=$.k
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.m
j=j+k+"s "
l=$.A
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.dv+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a2("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.cH(),!1,!1,new Y.aM("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.n
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.Q("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.T(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.ci(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
h.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.iP,$.i)
t.i(0,$.bd,$.i)
t.i(0,$.o2,$.i)
t.i(0,$.e4,$.j)
t.i(0,$.f6,$.i)
t.i(0,$.bc,$.j)
t.i(0,$.ds,$.y)
r=$.k
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.m
t.i(0,new R.Q("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.A+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ae+" laws put in place by "+$.n+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.k
p="The "+r+" finds a weeping Broken Hearted "
q=$.m
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ae
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.A
t.i(0,new R.a2("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.et(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
q=$.k
m="The "+q+"  and the "
r=$.da
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.n
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.Q("Flushed Shipping Dungeon",!1,[new U.c(m),new U.T(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.l)+".",n)],H.a([],i),R.d9(),!1,!1,new Y.fb(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a8)
n=$.k
r="The "+n+"  and the "
q=$.da
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.n
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.Q("Pitched Shipping Dungeon",!1,[new U.c(r),new U.T(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.t(C.l)+".",m)],H.a([],i),R.d9(),!1,!1,new Y.fF(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a8)
h.i(0,new X.u(s,t,null),$.ab)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gZ:function(){return this.H},
gL:function(){return this.a7}}
B.j7.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Family Ashes",H.a([$.aS,$.ce,$.S,$.b_,$.oe],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Last Will and Testament",H.a([$.ad,$.a1,$.S,$.b_,$.oh],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Grooming Guide",H.a([$.ak,$.S,$.av],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Powered Attorney",H.a([$.ts,$.S,$.o7,$.oh],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Executer's Ax",H.a([$.tp,$.S,$.d_,$.oh],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aY,$.j)
r=$.n
q="With the death of the "+r+", it now falls to the "
p=$.k
o=[U.c]
t.i(0,new R.a2("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.m+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
r="The "+$.n+" has released the frogs into the "
p=$.k
t.i(0,new R.au("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.A+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.aD)}}
V.j8.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Hippo",H.a([$.b5,$.ay,$.w],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ranting",H.a([$.o8,$.b5,$.eh],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Vent",H.a([$.a0,$.pA],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.dn,$.y)
t.i(0,$.bL,$.j)
t.i(0,$.nZ,$.j)
t.i(0,$.f2,$.j)
r=$.k
q="The "+r+" hears the screaming voice of the "
p=$.n
q=q+p+", and when they walk into a consort village, a "
o=$.m
q=q+o+" "
n=$.A
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.Q("Stop the Screamening",!1,[new U.c(q),new U.c(n),new U.c(o),new U.T(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
gV:function(){return this.w},
gX:function(){return this.B},
gU:function(){return this.C},
gZ:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gL:function(){return this.G}}
X.j9.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Wand",H.a([$.ar,$.w,$.aA,$.ay],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Angel Feather",H.a([$.ay,$.jl,$.w,$.bN,$.aV,$.ad,$.aA],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Never Ending Story DVD",H.a([$.pL,$.pG,$.w,$.aA,$.bZ,$.ay],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Candle",H.a([$.ay,$.bN,$.w,$.ce],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Figurine",H.a([$.aB,$.bN,$.w,$.ay],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.O]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.pl,$.i)
q.i(0,$.bc,$.j)
q.i(0,$.ah,$.i)
q.i(0,$.aX,$.i)
p=$.k
o="The "+p+" is just minding their own business when they see a wizened "
n=$.m
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.A+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.n
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.a5
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.u0
i=[U.c]
q.i(0,new R.Q("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(k,p,j)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aP,$.i)
s.i(0,$.nY,$.j)
s.i(0,$.bW,$.i)
p=$.k
o="The "+p+"  is approached by a Crafty "
m=$.m
o=o+m+" who offers them a magical "
l=$.a5
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.n
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.Q("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ah,$.i)
t.i(0,$.cc,$.y)
t.i(0,$.bj,$.i)
t.i(0,$.aX,$.i)
r=$.k
q="The "+r+" finds a grey town of despondant "
p=$.m
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.n
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.a5
t.i(0,new R.Q("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.T("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.k
o="The "+r+" discovers a group of "
p=$.m
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.n
t.i(0,new R.Q("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.T("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.et(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
n.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gZ:function(){return this.G},
gL:function(){return this.H}}
X.ja.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Footstick",H.a([$.cC,$.S,$.jn,$.ad],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("SBURBSim Cheating Guide",H.a([$.ak,$.S,$.fm,$.a1],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Body Pillow of Shogun",H.a([$.ai,$.S,$.dw,$.og,$.bf],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Macrobots",H.a([$.pK,$.S,$.o7],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.be,$.i)
t.i(0,$.bW,$.i)
t.i(0,$.dp,$.i)
t.i(0,$.bK,$.i)
t.i(0,$.e6,$.i)
t.i(0,$.dn,$.i)
t.i(0,$.f4,$.j)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.c]
t.i(0,new R.Y("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.ox(),!1,!1,new Y.cj("Rewards/no_reward.png",null),1,null,null),$.q)
r=$.n
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aG+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.A
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.T(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.pU(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
t.i(0,new R.Y("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.o(),!1,!1,new Y.cj("Rewards/no_reward.png",null),1,null,null),$.q)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.n
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.k
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.n+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m="A wizened "+$.m+" tells the "
r=$.k
t.i(0,new R.a2("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.a2("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.pV(),!1,!1,new Y.aM("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a2("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.n
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.au("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.a7)},
gL:function(){return this.w}}
Q.jb.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Yardstick",H.a([$.cC,$.S,$.jn,$.ad],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("SBURB Hacking Guide",H.a([$.ak,$.S,$.fm,$.a1],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Body Pillow of Hussie",H.a([$.ai,$.S,$.dw,$.og,$.bf],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
gL:function(){return this.v}}
B.jh.prototype={
$1:function(a){return!a.gbv()},
$S:function(){return{func:1,args:[B.cz]}}}
B.cz.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Perfectly Generic Object",H.a([],[G.U]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.v(t,0)]))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bC,$.i)
q.i(0,$.am,$.y)
q.i(0,$.cx,$.i)
q.i(0,$.aO,$.j)
q.i(0,$.dq,$.y)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
m=[U.c]
q.i(0,new R.Y("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.o(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
n=this.r
n.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.e9,$.i)
s.i(0,$.e8,$.y)
s.i(0,$.cW,$.j)
s.i(0,$.bB,$.i)
s.i(0,$.aY,$.y)
p=$.k
o="The "+p+" learns that all of the local "
l=$.m
s.i(0,new R.Y("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.o(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ah,$.i)
t.i(0,$.am,$.y)
t.i(0,$.aQ,$.j)
r=$.k
q="The "+r+" learns that all of the local "
p=$.m
t.i(0,new R.Y("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.o(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
r="The "+p+" learns that all of the local "
q=$.m
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.A
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ov(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
n.i(0,new X.u(s,t,null),$.ab)},
J:function(a){return this.ch},
gbv:function(){return this.a},
gL:function(){return this.c},
gN:function(a){return this.ch}}
A.V.prototype={
aT:function(a,b){var t=b.gcD()-this.gcD()
if(t>0)t=1
else if(t<0)t=-1
return C.b.ak(t)},
gfL:function(){var t,s,r,q,p,o,n
t=H.a([],[P.O])
s=new A.fG(null,null)
s.cX(this.f.a)
if(this.r===0)return t
r=P.cE(G.rP(this.f),!0,G.U)
C.a.bh(r,new A.ju())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.c6)(r),++p){o=r[p]
n=o.gfK()
n=n.gag(n)
if(!n)t.push(" "+Y.vA(s.hf(o.gfK())))}return t},
gcD:function(){var t,s,r
for(t=this.f,s=new P.bH(t,t.r,null,null,[null]),s.c=t.e,r=0;s.M();)r+=s.d.gcD()
return r},
gfD:function(){var t=this.f
return new H.bG(t,new A.jt(),[H.v(t,0)])},
gfT:function(){var t,s,r,q,p
for(t=this.gfL(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.c6)(t),++q)r+=t[q]+" "
return r+this.d},
J:function(a){return this.gfT()},
er:function(a,b,c,d,e){var t,s,r
t=P.op(b,null)
this.f=t
if(t.a===0)t.j(0,$.eh)
s=P.op(this.gfD(),null)
for(t=new P.bH(s,s.r,null,null,[null]),t.c=s.e;t.M();){r=t.d
this.f.bm(0,r.gek())
this.f.am(0,r)}$.$get$pN().push(this)},
$isaL:1,
$asaL:function(){return[A.V]}}
A.ju.prototype={
$2:function(a,b){return a.ghc().aP(0,b.ghc().ak(0))},
$S:function(){return{func:1,args:[G.U,G.U]}}}
A.jt.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.U]}}}
Z.jy.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Juice Box",H.a([$.a1,$.w,$.ay,$.ap],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Shogun Body Pillow",H.a([$.dw,$.bf,$.w],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.dn,$.a8)
t.i(0,$.bc,$.j)
t.i(0,$.aI,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.aX,$.i)
r=$.k
q="The "+r+" sees a floating sentient "
p=$.a5
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.m+" notices it, and starts "+$.A+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.n
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.Q("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
r="The "+p+" is greeted by a young adolescent "
m=$.m
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.n
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.A
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.Q("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.T(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=$.k
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.m
m=m+q+" informs them that "
p=$.n
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.Q("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.T(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
gV:function(){return this.w},
gX:function(){return this.B},
gU:function(){return this.C},
gZ:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gL:function(){return this.G},
sa3:function(a){return this.l=a},
sa2:function(a){return this.n=a},
sa1:function(a){return this.q=a},
sW:function(a){return this.u=a},
sV:function(a){return this.w=a},
sX:function(a){return this.B=a},
sU:function(a){return this.C=a},
sZ:function(a){return this.D=a},
sa5:function(a){return this.F=a},
sa4:function(a){return this.E=a},
sL:function(a){return this.G=a}}
N.jz.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Gavel",H.a([$.ar,$.pE],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Caution Tape",H.a([$.aB,$.dz],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Deerstalker Hat",H.a([$.ai,$.b1],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mystery Novel",H.a([$.a1,$.ak],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dish Served Cold",H.a([$.ob,$.cd,$.bY],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Pony Pals: Detective Pony ",H.a([$.a1,$.ak,$.aU],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Handcuffs",H.a([$.aS,$.a0,$.dz],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.e7,$.y)
q.i(0,$.aP,$.j)
q.i(0,$.bj,$.y)
p=$.k
o="The "+p+" finds an elaborate courtroom full of "+$.A+"ing "
n=$.m
m=[U.c]
q.i(0,new R.Y("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.a5+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
n=this.r
n.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aP,$.i)
s.i(0,$.bU,$.j)
s.i(0,$.bB,$.j)
p=$.k
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.m
l=o+l+" yells 'Stop that thief' in betwen "+$.A+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.a5+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.tX
s.i(0,new R.Y("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aP,$.i)
t.i(0,$.aY,$.j)
t.i(0,$.br,$.y)
t.i(0,$.dt,$.j)
t.i(0,$.dr,$.j)
t.i(0,$.ea,$.j)
t.i(0,$.iR,$.j)
r=$.k
q="The "+r+" finds a crowd of "
p=$.A
q=q+p+"ing "
o=$.m
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.ua
t.i(0,new R.Y("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
S.jB.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Shining Armor",H.a([$.aS,$.oj,$.S,$.jq],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Excalibur",H.a([$.ad,$.oj,$.S,$.dy,$.d_,$.fn],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Noble Steed",H.a([$.a0,$.S,$.d0,$.bm],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Hero's Shield",H.a([$.aS,$.jq,$.S,$.oj],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.o0,$.i)
t.i(0,$.bV,$.i)
t.i(0,$.cX,$.i)
t.i(0,$.ea,$.i)
t.i(0,$.e7,$.j)
r="The "+$.n+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.k
p=[U.c]
t.i(0,new R.au("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.A+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.n
r="Now that the "+q+" is defeated, the "
o=$.m
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.k
t.i(0,new R.a2("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
o=$.ae
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.n
n=n+q+". A Learned "+$.m+" explains that it can only be defeated by the Legendary "
r=$.a5
n=n+r+" Blade. The "
m=$.k
t.i(0,new R.a2("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
r="The volcanos of the land are weirdly active after the defeat of the "+$.n+". One begins to erupt near a "
m=$.m
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.A+"s, but not really doing anything to evacuate or save anyone. The "
o=$.k
t.i(0,new R.a2("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)}}
Q.jD.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("LAW Gavel",H.a([$.w,$.ar,$.pE],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("LAW Caution Tape",H.a([$.w,$.aB,$.dz],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("STOP SIGN",H.a([$.w,$.tP,$.a0,$.dz],s),"This isn't a weapon, dunkass.",!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.O]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.e7,$.i)
q.i(0,$.bU,$.j)
q.i(0,$.aY,$.j)
q.i(0,$.aP,$.y)
q.i(0,$.bb,$.y)
p=$.k
o="The "+p+" is told by a worried "
n=$.m
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.a5+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.n
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.aG+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.c]
q.i(0,new R.Q("Punish the Rebels",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bV,$.i)
s.i(0,$.aI,$.j)
s.i(0,$.bc,$.j)
s.i(0,$.bV,$.y)
s.i(0,$.cW,$.y)
p=$.k
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.m
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.n
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.aG+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.Q("Become the Villain",!1,[new U.c(o),new U.c(l),new U.c(m),new U.T(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.ci(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=$.k
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.m
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.n
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.aG+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.Q("Become the Hero",!1,[new U.c(k),new U.c(p),new U.c(j),new U.T(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f5,$.i)
t.i(0,$.bC,$.j)
t.i(0,$.iS,$.j)
t.i(0,$.f2,$.y)
t.i(0,$.bL,$.y)
r=$.k
q="The "+r+" looks upon the land and notices how some of the "
p=$.m
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.n
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.a5
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.aG+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.Q("Bring the Balance",!1,[new U.c(q),new U.c(o),new U.c(m),new U.T(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.ci(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
k="The "+p+" looks upon the land and notices how some of the "
r=$.m
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.n
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.aG+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.Q("Create the Balance",!1,[new U.c(k),new U.c(j),new U.c(m),new U.T(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gZ:function(){return this.aW},
gL:function(){return this.aX}}
K.jE.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Creeping Vine",H.a([$.ar,$.w,$.dx,$.bm],s),null,!1,"Sentient Plant Tentacles")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Lollipop",H.a([$.py,$.w,$.bt],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Golem",H.a([$.aS,$.cD,$.w,$.bm],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ectoplasm",H.a([$.oe,$.w,$.bt],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Aqua Vitae",H.a([$.b0,$.w,$.bt,$.ad,$.aA],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Homunculus",H.a([$.d0,$.w,$.bm],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.O]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.aQ,$.i)
q.i(0,$.am,$.i)
q.i(0,$.f1,$.y)
q.i(0,$.ah,$.j)
q.i(0,$.o4,$.j)
q.i(0,$.be,$.y)
p=$.k
o="The "+p+" finds a village of compliant "
n=$.m
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.A+"ing in panic. Don't upset "
m=$.n
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.Q("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.T(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aQ,$.i)
s.i(0,$.bd,$.i)
s.i(0,$.be,$.y)
s.i(0,$.ah,$.j)
o=$.k
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.m
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.n
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.Q("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.T(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bC,$.i)
t.i(0,$.am,$.y)
t.i(0,$.cx,$.i)
t.i(0,$.aO,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.nW,$.j)
r="Drawn by wailing and "+$.A+"ing, the "
q=$.k
r=r+q+" enters a rotting "
o=$.m
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.n
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.Q("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.T(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gZ:function(){return this.G},
gL:function(){return this.H}}
G.jF.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("FAQ",H.a([$.as,$.w,$.aq,$.d1],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flashlight",H.a([$.aB,$.w,$.bN,$.as,$.d1],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Octet",H.a([$.w,$.bN,$.d1,$.ad,$.od],s),null,!1,"D13")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Horseshoe",H.a([$.pF,$.w,$.aZ],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rabbits Foot",H.a([$.pJ,$.w],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("4 Leaf Clover",H.a([$.dx,$.w,$.bN,$.d1],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("8-Ball",H.a([$.b0,$.w,$.bm],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.O]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.o_,$.i)
q.i(0,$.e6,$.j)
q.i(0,$.cw,$.i)
q.i(0,$.ds,$.i)
p=$.k
o="The "+p+" is searching for the lair of "
n=$.n
o=o+n+" when some local "
m=$.m
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.Q("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.T(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.A+"ing "+$.m+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.n
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.Q("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.T(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.f
m.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aQ,$.j)
s.i(0,$.ah,$.j)
s.i(0,$.cc,$.i)
s.i(0,$.pp,$.i)
s.i(0,$.e8,$.i)
s.i(0,$.nY,$.i)
p=$.k
o="The "+p+" walks into a "
n=$.m
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.a5
o=o+l+", but "
k=$.n
o=o+k+" has hoarded all of the planets "
j=$.ae
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.A+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.Q("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.T(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.ow(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
n=$.k
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.m
j=j+k+" explains that the "
h=$.n
s.i(0,new R.Q("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.A+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.T("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.f3,$.j)
q.i(0,$.am,$.j)
q.i(0,$.f8,$.i)
q.i(0,$.ah,$.j)
q.i(0,$.bj,$.i)
p="Now that the "+$.n+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.k
p=p+o+" sets up a wiki and settles in to help the "
n=$.m
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.dv+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a2("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.cH(),!1,!1,new Y.aM("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
l="Now that the "+$.n+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.k
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.m
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.dv+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a2("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.ci(),!1,!1,new Y.aM("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.m
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.k
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.n
q.i(0,new R.Q("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.T(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.cw,$.i)
t.i(0,$.o_,$.i)
t.i(0,$.ds,$.j)
t.i(0,$.bc,$.j)
t.i(0,$.po,$.j)
t.i(0,$.aO,$.y)
t.i(0,$.cX,$.y)
t.i(0,$.aI,$.j)
t.i(0,$.bb,$.y)
t.i(0,$.am,$.j)
t.i(0,$.bi,$.i)
s=$.k
r="The "+s+" is approached by a Fast Talking "
p=$.m
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.a5
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.A+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.n
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.Q("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.T(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
o="After the "+$.n+", the "
s=$.k
o=o+s+" is disappointed to learn that barely any of the "
l=$.m
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.dv+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a2("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.cH(),!1,!1,new Y.aM("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
m.i(0,new X.u(q,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
Z.jL.prototype={
I:function(){var t,s,r,q
t=this.C
s=[G.U]
r=A.h("Dream Bubbles Book",H.a([$.a1,$.av,$.ak,$.tx],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),[H.v(t,0)]))
t=Q.p(null,null,A.V)
r=A.h("Uno Reverse Card",H.a([$.pz,$.jn,$.av],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Lord's Cape",H.a([$.ai,$.S,$.av],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Drawing Tablet",H.a([$.fm,$.S,$.av],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("How to Make Friends And Influence People",H.a([$.ad,$.a1,$.S,$.cA,$.ak],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.br,$.y)
q.i(0,$.dt,$.y)
q.i(0,$.aO,$.y)
q.i(0,$.bB,$.j)
p="The "+$.n+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.k
p=p+o+" comands that the "
n=$.m
m=[U.c]
q.i(0,new R.au("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.A+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
o="As soon as the "+$.n+" is defeated, the "
n=$.m
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.k
q.i(0,new R.a2("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p=this.x
p.i(0,new X.u(s,q,null),$.aD)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.rV,$.i)
t.i(0,$.aX,$.i)
t.i(0,$.am,$.i)
t.i(0,$.ah,$.j)
s="The "+$.n+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.k
s=s+r+" comands that the "
o=$.m
t.i(0,new R.au("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.A+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
r="As soon as the "+$.n+" is defeated, the "
o=$.m
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.k
t.i(0,new R.a2("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",this.C,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,t,null),$.aD)},
gL:function(){return this.D}}
S.jM.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Alternate Costume",H.a([$.ai,$.S,$.aA,$.ad,$.bD],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mage's Cape",H.a([$.ai,$.S,$.aA],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mage's Staff",H.a([$.ar,$.S,$.aZ,$.aA,$.cC],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Walking Broom",H.a([$.o9,$.ar,$.S,$.bm,$.aA,$.cC],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.O]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.e5,$.i)
t.i(0,$.ea,$.j)
t.i(0,$.aY,$.i)
t.i(0,$.cW,$.j)
t.i(0,$.bC,$.y)
r="The "+$.n+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.k
p=[U.c]
t.i(0,new R.au("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.k
t.i(0,new R.a2("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
r="The "+q+" is feeling quite pleased with their victory over the "+$.n+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ae
t.i(0,new R.a2("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.o(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
q="Now that the "+$.n+" has been defeated, the "
o=$.m
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.k
q=q+r+"'s help in planning the brand new city of "
n=$.ae
t.i(0,new R.a2("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.A+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.o(),!1,!1,new Y.aM(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.w}}
U.jN.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Maiden's Breath",H.a([$.dx,$.S,$.b1],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Feather Duster",H.a([$.ar,$.S,$.cC,$.jl],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Valkyrie Shield",H.a([$.b1,$.aS,$.a0,$.S,$.ad,$.jq,$.to],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Maiden's Songbook",H.a([$.a1,$.S,$.aV,$.ak],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.O]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.bK,$.i)
t.i(0,$.aQ,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.am,$.j)
t.i(0,$.cc,$.j)
t.i(0,$.bb,$.j)
r="The "+$.n+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.k
r=r+q+" asks local  "
p=$.m
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.A
n=[U.c]
t.i(0,new R.au("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.k
o="The "+q+" has adopted a local "
p=$.m
t.i(0,new R.a2("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.A+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.n+". ")],H.a([],n),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)}}
D.jS.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("memes",H.a([$.ay,$.px,$.tw,$.pA],[G.U]),"No. Just no.",!1,";)")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.v(t,0)]))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.o_,$.i)
r=$.k
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.m+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.n
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.Q("Become Shrek",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
gV:function(){return this.w},
gX:function(){return this.B},
gU:function(){return this.C},
gZ:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gL:function(){return this.G}}
L.jY.prototype={
gS:function(){return this.l},
ga0:function(){return this.n},
gW:function(){return this.q},
gV:function(){return this.u},
gX:function(){return this.v},
gU:function(){return this.w},
gZ:function(){return this.B},
gL:function(){return this.E}}
V.jZ.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Puzzle Box",H.a([$.ar,$.w,$.aA],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Tesla Coil",H.a([$.as,$.w,$.a0],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Coin",H.a([$.a0,$.w],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Electronic Door",H.a([$.a0,$.w,$.as,$.aq],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Janus Bust",H.a([$.aS,$.oa,$.cD,$.av,$.w,$.ad,$.as],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.aX,$.j)
q.i(0,$.e6,$.y)
q.i(0,$.bj,$.y)
p=$.k
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.m
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.n
k=[U.c]
q.i(0,new R.Q("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.dH(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
n=$.k
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.m+" explains that at the end of the Labrinth is the "
l=$.n
q.i(0,new R.Q("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.T("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.e7,$.y)
s.i(0,$.aP,$.j)
s.i(0,$.bj,$.y)
s.i(0,$.aX,$.y)
p=$.n
o="The "+p+" has commited a staggering amount of crimes against the local "+$.m+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.k
s.i(0,new R.Q("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.T("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f5,$.i)
t.i(0,$.am,$.j)
t.i(0,$.f8,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.bj,$.i)
r=$.k
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.n
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.a5+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.Q("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
S.k0.prototype={
gS:function(){return this.l},
ga0:function(){return this.n},
gW:function(){return this.q},
gV:function(){return this.u},
gX:function(){return this.v},
gU:function(){return this.w},
gL:function(){return this.B}}
O.k1.prototype={
gS:function(){return this.l}}
B.k2.prototype={
gS:function(){return this.l}}
E.k3.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Feather Pen",H.a([$.a0,$.S,$.av,$.jl],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Half Finished Bust of Snoop Dog",H.a([$.tH,$.S,$.oa,$.aZ,$.ad],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Book of Poetry",H.a([$.a1,$.S,$.av,$.ak],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.bK,$.i)
t.i(0,$.aQ,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.am,$.j)
t.i(0,$.cc,$.j)
t.i(0,$.bb,$.j)
r="The "+$.n+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.k
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.A
n=[U.c]
t.i(0,new R.au("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q="You'd think after the dramatic defeat of the "+$.n+" the "
o=$.m
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.k
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.a5
t.i(0,new R.a2("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.w}}
F.k4.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Piano",H.a([$.aZ,$.ar,$.aV,$.av],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flute",H.a([$.a0,$.aV],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Microphone",H.a([$.b5,$.as],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Violin",H.a([$.ar,$.aV],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sheet Music",H.a([$.a1,$.aV],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Electric Guitar",H.a([$.aB,$.aV,$.as,$.b5,$.aU],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Turn Tables",H.a([$.aB,$.aV,$.as,$.aU],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Guitar",H.a([$.ar,$.aV],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bc,$.a8)
q.i(0,$.po,$.i)
q.i(0,$.ds,$.i)
q.i(0,$.cc,$.j)
q.i(0,$.ah,$.j)
q.i(0,$.nX,$.j)
p=$.k
o="The "+p+" meets a wise old "+$.m+" who tells that the "+$.n+" can only be awoken by the Legendary Hero playing the "
n=$.ae
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.a5
k=[U.c]
q.i(0,new R.Y("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
n="The "+p+" finds an empty, trashed "
l=$.ae
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.a5+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.A+"ing "+$.m+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.u2
q.i(0,new R.Y("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.pr,$.a8)
s.i(0,$.bU,$.j)
s.i(0,$.bB,$.j)
s.i(0,$.cc,$.i)
s.i(0,$.nX,$.a8)
o=$.k
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ae
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.n
s.i(0,new R.Y("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.a5+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f1,$.a8)
t.i(0,$.aI,$.j)
t.i(0,$.cx,$.j)
r=$.k
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.m
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.A
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ae+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Y("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
V.ko.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Shorts",H.a([$.ai,$.S,$.ee,$.ad],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sidekick Figurine",H.a([$.aB,$.S,$.aU],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Steroids",H.a([$.cd,$.S,$.aA],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.O]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.o0,$.i)
t.i(0,$.be,$.j)
t.i(0,$.f7,$.j)
t.i(0,$.o2,$.j)
t.i(0,$.bK,$.j)
t.i(0,$.am,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.e8,$.j)
t.i(0,$.rY,$.j)
t.i(0,$.nW,$.j)
t.i(0,$.pp,$.j)
r="The "+$.n+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.k
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.A
n=[U.c]
t.i(0,new R.au("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.k
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.m+" named Professor "
p=$.A
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.a5
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.n
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.Q("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.T(k,"The "+q+" whited out...",m)],H.a([],n),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m="Now that the "+$.n+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.k
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.m
t.i(0,new R.a2("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ae+" buffs. With a deafening "+$.A+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.o(),!1,!1,new Y.eX("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)}}
G.kt.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Superhero Action Figure",H.a([$.aB,$.aU,$.ap],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Action DVD",H.a([$.aB,$.aU],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ghost Busters DVD",H.a([$.aB,$.oe],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Snow Dogs DVD",H.a([$.aB,$.bZ,$.bY,$.fj],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Skateboarding Video Game",H.a([$.aB,$.aU],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Movie Poster",H.a([$.a1,$.aU],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Audrey II Plush",H.a([$.dx,$.aU,$.ai,$.bm],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Peashooter Toy",H.a([$.dx,$.fl,$.aU,$.ai],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shitty Sword",H.a([$.ap,$.a0,$.aU,$.fn,$.d_,$.pL],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("GameBro Magazine",H.a([$.a1,$.aU],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("GameGrl Magazine",H.a([$.a1,$.aU],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bb,$.j)
q.i(0,$.bi,$.j)
q.i(0,$.aI,$.i)
q.i(0,$.be,$.a8)
q.i(0,$.bW,$.a8)
p=$.k
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.m
o=o+n+" manages to catch a video of it, and it goes viral on "+$.ae+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.A+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.u3
l=[U.c]
q.i(0,new R.Y("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dr,$.j)
s.i(0,$.bU,$.j)
s.i(0,$.bi,$.j)
s.i(0,$.aI,$.j)
s.i(0,$.bV,$.i)
o=$.k
n="The "+o+" runs towards an explosion in a local "
m=$.m
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.ae
s.i(0,new R.Y("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bi,$.j)
t.i(0,$.cw,$.i)
t.i(0,$.bd,$.i)
t.i(0,$.bV,$.j)
r=$.k
q="The "+r+" gets a job at the "+$.ae+" Cinema. A new movie, The Lonely "
o=$.a5
q=q+o+" is coming out soon, and "
n=$.m
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.A+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Y("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
N.kw.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Feather'd Cap",H.a([$.ai,$.S,$.ee],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Crown",H.a([$.ad,$.pC,$.S,$.ee],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Gunpowder",H.a([$.eg,$.S],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.O]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.bi,$.j)
t.i(0,$.aX,$.j)
t.i(0,$.cx,$.y)
r="With the closing of the curtain, the "+$.n+" has released the frogs, and yet they are nowhere to be found. The "
q=$.k
p=[U.c]
t.i(0,new R.au("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q=$.n
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.k
r=r+o+" to get it back to normal. They organize a team of "
n=$.m
t.i(0,new R.a2("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.a5+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)}}
U.c.prototype={}
U.T.prototype={}
R.ky.prototype={
J:function(a){return H.t(new H.cN(H.nt(this),null))+": "+this.c},
gN:function(a){return this.c}}
R.Y.prototype={}
R.Q.prototype={}
R.a2.prototype={}
R.au.prototype={}
E.kz.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Curtain",H.a([$.ai,$.w,$.ap],s),null,!1,"Show Ender")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cursed Sword",H.a([$.a0,$.fn,$.dy,$.w,$.d_,$.bg,$.ap,$.ef,$.b_],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Megaphone",H.a([$.a0,$.b5,$.as,$.w,$.ap],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bike Horn",H.a([$.aS,$.a0,$.b5,$.cA,$.dA,$.w,$.ap],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bacchus Wine",H.a([$.cd,$.cA,$.av,$.w,$.ad,$.ap],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Nightmare Fuel",H.a([$.ar,$.w,$.bg,$.ce,$.eg,$.ap],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.O]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.f0,$.i)
q.i(0,$.br,$.i)
q.i(0,$.bU,$.i)
q.i(0,$.bC,$.j)
q.i(0,$.aO,$.j)
q.i(0,$.aY,$.j)
q.i(0,$.aP,$.y)
q.i(0,$.bW,$.j)
q.i(0,$.dr,$.i)
q.i(0,$.iR,$.i)
q.i(0,$.ea,$.i)
q.i(0,$.o1,$.i)
q.i(0,$.f1,$.j)
q.i(0,$.dt,$.i)
p=$.k
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.a5
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.n
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.Q("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.et(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=$.m
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.k
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.n
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.T(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=this.f
h.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.i)
s.i(0,$.aO,$.j)
s.i(0,$.aP,$.i)
s.i(0,$.bc,$.i)
s.i(0,$.bb,$.i)
s.i(0,$.bi,$.j)
s.i(0,$.iQ,$.y)
s.i(0,$.br,$.j)
s.i(0,$.be,$.i)
s.i(0,$.aI,$.i)
s.i(0,$.bW,$.y)
p=$.A
o="The "+p+"ing and capering "
n=$.m
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.k
o=o+m+" to do a stupid "
l=$.ae
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.n
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.T(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f0,$.i)
t.i(0,$.bW,$.i)
t.i(0,$.aP,$.i)
t.i(0,$.be,$.j)
t.i(0,$.bb,$.i)
r=$.k
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.n+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H},
sa3:function(a){return this.l=a},
sa2:function(a){return this.n=a},
sa1:function(a){return this.q=a},
sa0:function(a){return this.u=a},
sW:function(a){return this.v=a},
sV:function(a){return this.B=a},
sX:function(a){return this.C=a},
sU:function(a){return this.D=a},
sZ:function(a){return this.F=a},
sa5:function(a){return this.E=a},
sa4:function(a){return this.G=a},
sL:function(a){return this.H=a}}
L.kA.prototype={
gS:function(){return this.l},
ga0:function(){return this.n},
gW:function(){return this.q},
gV:function(){return this.u},
gU:function(){return this.v},
gL:function(){return this.w}}
L.kB.prototype={
gS:function(){return this.l}}
L.kC.prototype={
gS:function(){return this.l}}
L.kD.prototype={
gS:function(){return this.l}}
L.kE.prototype={
gS:function(){return this.l}}
Y.cj.prototype={}
Y.a4.prototype={}
Y.bz.prototype={}
Y.k5.prototype={}
Y.aM.prototype={
gN:function(a){return this.c}}
Y.R.prototype={}
Y.eX.prototype={}
Y.ax.prototype={}
Y.bv.prototype={}
Y.hp.prototype={}
Y.at.prototype={}
Y.fE.prototype={}
Y.fb.prototype={}
Y.fF.prototype={}
Z.kI.prototype={
gS:function(){return this.l},
ga0:function(){return this.n},
gW:function(){return this.q},
gV:function(){return this.u},
gX:function(){return this.v},
gU:function(){return this.w}}
N.kJ.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Domino Mask",H.a([$.ai,$.S,$.ee],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Archery Set",H.a([$.tr,$.S,$.ee,$.pw],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Gristtorrent Server",H.a([$.ad,$.aB,$.as,$.S,$.aq,$.bD],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n
t=[P.O]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aP,$.i)
t.i(0,$.aY,$.j)
t.i(0,$.bV,$.j)
r="The "+$.n+" cannot release the frogs since the corrupt Noble "
q=$.m
r=r+q+"s have hoarded them. The "
p=$.k
o=[U.c]
t.i(0,new R.au("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.k
q="The "+p+" learns of the extreme injustices of the "
r=$.m
q=q+r+"s who rose to power during the tyranny of "
n=$.n
t.i(0,new R.a2("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)}}
Q.kK.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Red Rose",H.a([$.cB,$.b1],s),null,!1,"Seductive Plant")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shipping Grid",H.a([$.cB,$.a1],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Chocolate Bar",H.a([$.cB,$.cd],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Candelabra",H.a([$.cB,$.ce],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Head Cannon",H.a([$.cB,$.eg,$.a0,$.fl],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Her Pitch Passions Novel",H.a([$.ak,$.a1,$.cB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bd,$.i)
q.i(0,$.f7,$.j)
q.i(0,$.e4,$.j)
q.i(0,$.f6,$.i)
q.i(0,$.bc,$.j)
q.i(0,$.iP,$.y)
p=$.k
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.m
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.a5+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.Y("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bc,$.j)
s.i(0,$.cw,$.i)
s.i(0,$.f6,$.i)
s.i(0,$.bd,$.j)
s.i(0,$.ds,$.y)
s.i(0,$.iP,$.y)
o=$.m
n="A Romantic "+o+" approaches the "
m=$.k
s.i(0,new R.Y("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.iP,$.i)
t.i(0,$.bd,$.i)
t.i(0,$.e4,$.j)
t.i(0,$.o2,$.i)
t.i(0,$.f6,$.i)
t.i(0,$.bc,$.j)
t.i(0,$.ds,$.y)
r=$.k
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.m
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.A+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.n+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.u_
t.i(0,new R.Y("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.q)
n=$.k
r="The "+n+"  and the "
o=$.da
t.i(0,new R.Y("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.d9(),!1,!1,new Y.fb(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a8)
o=$.k
n="The "+o+"  and the "
r=$.da
t.i(0,new R.Y("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.d9(),!1,!1,new Y.fE(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a8)
r=$.k
o="The "+r+"  and the "
n=$.da
t.i(0,new R.Y("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.d9(),!1,!1,new Y.fF(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
V.kL.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Arrow",H.a([$.dy,$.ar,$.pw],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bow",H.a([$.ar,$.aZ,$.eh],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Yondu",H.a([$.ap,$.w],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Empathy",H.a([$.w,$.px,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.ah,$.j)
t.i(0,$.bL,$.y)
t.i(0,$.aI,$.j)
t.i(0,$.aX,$.y)
r=$.k
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.n
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.Q("Be the Yondu",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.c]),R.uf(),!1,!1,new Y.k5("Rule","Yondu","Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.ab)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
ga0:function(){return this.w},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
R.kM.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Runestone",H.a([$.cD,$.aA,$.w],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Bottle",H.a([$.b0,$.aA],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Rune","Magic","Fairy","Infinite","Predictions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aX,$.j)
t.i(0,$.ah,$.j)
r=$.k
q="The "+r+" is walking around in a village of "+$.m+"s, when a Consort walks up to them. It says that The "+r+" has to learn magic, so they can fight the "
p=$.n
q=q+p+". The "+r+" promises to do their best."
o="The "+r+" is practicing the arcana, they're starting to get pretty good."
n="The "+r+" is able to fight numerous imps with their magic now, they are ready to fight the "+p+"..."
m="The "+r+" storms into the "+p+"'s lair, ready to duel..."
l="The "+p+" has been killed by the "+r+"'s impressive use of magic."
t.i(0,new R.Q("Learn Magic",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(m,"The "+r+"'s magic was not enough to do defeat the "+p+"...",l)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gZ:function(){return this.H},
gL:function(){return this.a7}}
T.kO.prototype={
$1:function(a){return!a.gbv()},
$S:function(){return{func:1,args:[T.cJ]}}}
T.cJ.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Perfectly Generic Object",H.a([],[G.U]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.v(t,0)]))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bC,$.i)
q.i(0,$.am,$.y)
q.i(0,$.cx,$.i)
q.i(0,$.aO,$.j)
q.i(0,$.dq,$.y)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
m=[U.c]
q.i(0,new R.a2("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
n=this.x
n.i(0,new X.u(s,q,null),$.aD)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.e9,$.i)
s.i(0,$.e8,$.y)
s.i(0,$.cW,$.j)
s.i(0,$.bB,$.i)
s.i(0,$.aY,$.y)
p=$.k
o="The "+p+" learns that all of the local "
l=$.m
s.i(0,new R.a2("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
l="The "+p+" learns that all of the local "
o=$.m
s.i(0,new R.a2("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.da+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.A+"ing in amazement. The factory is saved! ")],H.a([],m),R.d9(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.a8)
n.i(0,new X.u(q,s,null),$.aD)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ah,$.i)
t.i(0,$.am,$.y)
t.i(0,$.aQ,$.j)
r=$.k
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.A
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ov(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.y)
l=$.k
p="The "+l+" learns that all of the local "
r=$.m
t.i(0,new R.a2("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.u(s,t,null),$.aD)},
J:function(a){return this.r},
ab:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.dl("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.di]),H.a([],[M.cU]))
this.I()
this.K()
if($.$get$ck().ap(this.Q))H.aE("Duplicate class id for "+this.J(0)+": "+this.Q+" is already registered for "+J.bq($.$get$ck().A(0,this.Q))+".")
$.$get$ck().i(0,this.Q,this)},
gN:function(a){return this.r},
gbv:function(){return this.cx},
gL:function(){return this.k4}}
E.kP.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Sage's Robe",H.a([$.ai,$.S,$.bf,$.aq,$.aA,$.ad],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Peer Reviewed Journal",H.a([$.a1,$.S,$.ak,$.aq],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Guru Pillow",H.a([$.ai,$.S,$.dw,$.aq],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.f3,$.j)
t.i(0,$.am,$.j)
t.i(0,$.f8,$.i)
t.i(0,$.ah,$.y)
t.i(0,$.bj,$.i)
r="The "+$.n+" has blocked access to the books for the duration. The "
q=$.k
p=[U.c]
t.i(0,new R.au("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.n+" is defeated, it is time to begin recovery efforts. The "
r=$.m
q=q+r+"s ask the "
o=$.k
t.i(0,new R.a2("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.A+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.v}}
Y.kQ.prototype={
gS:function(){return this.l},
ga0:function(){return this.n},
gW:function(){return this.q},
gV:function(){return this.u},
gU:function(){return this.v},
gL:function(){return this.w}}
Y.kR.prototype={}
K.kS.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Uno Reverse Card",H.a([$.pz,$.w,$.ap],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("JR Body Pillow",H.a([$.dw,$.bf,$.w],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.O]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.f0,$.i)
q.i(0,$.br,$.i)
q.i(0,$.bU,$.i)
q.i(0,$.bC,$.j)
q.i(0,$.aO,$.j)
q.i(0,$.aY,$.j)
q.i(0,$.aP,$.y)
q.i(0,$.bW,$.j)
q.i(0,$.dr,$.i)
q.i(0,$.iR,$.i)
q.i(0,$.ea,$.i)
q.i(0,$.o1,$.i)
q.i(0,$.f1,$.j)
q.i(0,$.dt,$.i)
p=$.k
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.a5
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.n
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.Q("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.et(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=$.m
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.k
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.n
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.T(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=this.f
h.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cc,$.i)
s.i(0,$.aO,$.j)
s.i(0,$.aP,$.i)
s.i(0,$.bc,$.i)
s.i(0,$.bb,$.i)
s.i(0,$.bi,$.j)
s.i(0,$.iQ,$.y)
s.i(0,$.br,$.j)
s.i(0,$.be,$.i)
s.i(0,$.aI,$.i)
s.i(0,$.bW,$.y)
p=$.A
o="The "+p+"ing and capering "
n=$.m
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.k
o=o+m+" to do a stupid "
l=$.ae
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.n
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.T(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f0,$.i)
t.i(0,$.bW,$.i)
t.i(0,$.aP,$.i)
t.i(0,$.be,$.j)
t.i(0,$.bb,$.i)
r=$.k
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.n+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
gV:function(){return this.w},
gX:function(){return this.B},
gU:function(){return this.C},
gZ:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gL:function(){return this.G}}
Y.kT.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Walking Stick",H.a([$.ar,$.S,$.cC],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Adorable Girlscout Beret",H.a([$.ai,$.S,$.ty,$.aq,$.ad],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Map",H.a([$.a1,$.S,$.aq],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Compass",H.a([$.a0,$.S,$.aq,$.aA],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p
t=[P.O]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.bK,$.i)
t.i(0,$.aQ,$.i)
t.i(0,$.am,$.i)
t.i(0,$.aI,$.y)
t.i(0,$.ah,$.y)
r="Now that the "+$.n+" has been defeated, the planet has really opened up. The "
q=$.k
p=[U.c]
t.i(0,new R.a2("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.m+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.k
t.i(0,new R.au("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.m+" "+$.A+"s in time to stop them.   ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.aD)}}
L.kU.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Scroll",H.a([$.a1,$.S,$.aq],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ink Pot",H.a([$.b0,$.S,$.bD,$.aq],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Blank Book",H.a([$.a1,$.S,$.ak,$.aq,$.bD,$.ad],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.nX,$.i)
t.i(0,$.am,$.i)
t.i(0,$.bj,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.aX,$.j)
r="The "+$.n+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.k
p=[U.c]
t.i(0,new R.au("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.n+" has been taken care of, the "
r=$.k
q=q+r+" discovers a large library of "
o=$.m
t.i(0,new R.a2("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.w}}
S.kX.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cueball",H.a([$.jk,$.jp,$.S,$.aZ,$.bm,$.ad],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Crystal Ball",H.a([$.jk,$.tt,$.S,$.bN],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Binoculars",H.a([$.b0,$.S,$.a0],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Blindfold",H.a([$.tq,$.S,$.bf],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.rW,$.i)
t.i(0,$.f2,$.i)
t.i(0,$.nZ,$.i)
t.i(0,$.be,$.j)
r="Now that the "+$.n+" has been defeated, the land is really starting to open up. The "
q=$.k
r=r+q+" finds a tunnel filled with Blind "
p=$.m
o=[U.c]
t.i(0,new R.a2("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.k
t.i(0,new R.au("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.k
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.m
t.i(0,new R.a2("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
r="A group of underlings are still making trouble, even after the defeat of the "+$.n+". The "
p=$.k
r=r+p+" begins planting rumors of a huge "
q=$.a5
t.i(0,new R.a2("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.v}}
L.l_.prototype={
gS:function(){return this.l}}
Y.l1.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Meddler's Guide",H.a([$.ak,$.S,$.a1,$.cA,$.ad,$.bt],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("First Aid Kit",H.a([$.b0,$.S,$.bt],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=$.S
r=A.h("Cloud in a Bottle",H.a([r,r,$.bs],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Wings",H.a([$.aA,$.S,$.bN,$.b1,$.a1],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.am,$.j)
t.i(0,$.bK,$.i)
t.i(0,$.be,$.j)
t.i(0,$.ah,$.j)
t.i(0,$.aQ,$.i)
r="The defeat of the "+$.n+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.k
p=[U.c]
t.i(0,new R.au("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.n+" has been taken care of, the "
r=$.k
q=q+r+" finds a long line of "
o=$.m
t.i(0,new R.a2("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.u}}
O.l2.prototype={
gS:function(){return this.n}}
N.l3.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Fiduspawn Plush",H.a([$.fj,$.ai,$.bf],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Teddy Bear",H.a([$.fj,$.ai,$.bf],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dice",H.a([$.tv,$.aB],s),null,!1,"D113")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Pigeon",H.a([$.jl,$.bm,$.d0,$.cZ,$.ef,$.tJ],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cat Ears",H.a([$.ai,$.bf,$.fj],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Religious Text",H.a([$.ak,$.a1],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Psychology Book",H.a([$.ak,$.a1],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Therapy Couch",H.a([$.bf,$.ai],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("FLARP Manual",H.a([$.ak,$.a1,$.aq],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.O]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bL,$.y)
q.i(0,$.ah,$.j)
q.i(0,$.aX,$.i)
q.i(0,$.bj,$.j)
p=$.k
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.m
m=[U.c]
q.i(0,new R.Y("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ae+" or "+$.a5+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.A+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bL,$.y)
s.i(0,$.ah,$.i)
s.i(0,$.aX,$.i)
s.i(0,$.pl,$.i)
s.i(0,$.bc,$.i)
s.i(0,$.pr,$.i)
s.i(0,$.bj,$.j)
o=$.k
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.A
n=n+l+"ing "
k=$.m
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ae
s.i(0,new R.Y("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bB,$.y)
t.i(0,$.cw,$.i)
t.i(0,$.aQ,$.i)
t.i(0,$.bV,$.i)
t.i(0,$.e7,$.i)
r=$.k
q="The "+r+" wanders into an entire crowd of "
o=$.m
t.i(0,new R.Y("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.A+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
N.l6.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Frog Statue",H.a([$.aS,$.cD,$.w],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Frog Costume",H.a([$.ai,$.w],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nuclear Reactor",H.a([$.fk,$.aq,$.as,$.w],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Telescope",H.a([$.a0,$.b0,$.aq,$.w],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Green Sun Poster",H.a([$.a1,$.w,$.of,$.ad],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m
t=$.k
s=[P.O]
r=H.a(["Wherever the "+t+" goes, they find a "+$.m+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.A+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.n+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.k
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.m+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.m+" tells the "
p=$.k
t=t+p+" that they must negotiate with "
o=$.n
n=H.a([t+o+" to release the vast majority of the frogs. Apparently this is called 'lighting the forge'? ","A temple shows a huge snake monster, probably the "+o+" locking away all the frogs.","A "+o+" minion tells the "+p+" that if they want to find the best frogs, they are going to have to face the "+o+"."],s)
o=$.k
p="The "+o+" meets with "
t=$.n
m=H.a([p+t+". They speak in a langauge no one else can understand, and prove their worth. The forge is lit. The frogs are free.","The "+t+" offers the "+o+" an impossible Choice. After some deliberation, the "+o+" decides that it can't be done. The "+t+" sighs, and agrees to Light the Forge.","The "+t+" is a dismissive asshole, but agrees to light the forge. Wow, the "+o+" almost wishes that they WERE supposed to fight. "],s)
o=H.a(["Frogs"],s)
H.a([],s)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.be,$.y)
t.i(0,$.pn,$.i)
s=[U.c]
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
t.i(0,new R.Q("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.k
t.i(0,new R.au("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.A+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.o(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
this.f.i(0,new X.u(o,t,null),$.v5)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
U.la.prototype={
gS:function(){return this.l}}
G.fL.prototype={
cE:function(a){var t=0,s=P.nV(),r,q=this,p,o,n,m,l
var $async$cE=P.oR(function(b,c){if(b===1)return P.oL(c,s)
while(true)switch(t){case 0:p=new B.hl(null,0)
p.a=J.qF(a,0)
for(o=q.b,n=0;n<("SimStat"+o).length;++n)p.aZ(8)
m=p.aZ(32)
l=H.a([],[E.aW])
for(n=0;n<m;++n)l.push(q.hn(p))
r=l
t=1
break
case 1:return P.oM(r,s)}})
return P.oN($async$cE,s)},
$aseR:function(){return[[P.W,E.aW]]},
$asec:function(){return[[P.W,E.aW],P.cR]}}
G.lb.prototype={
hn:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=T.v_(a.aZ(8))
s=L.rF(a.aZ(8))
r=B.ps(a.aZ(4))
q=B.ps(a.aZ(4))
p=a.aZ(32)
o=a.cF()
n=P.O
m=P.x
l=P.cg(n,m)
for(k=0;k<o;++k){j=a.cF()
for(i=0,h="";i<j;++i)h+=H.ue(a.aZ(8))
g=a.bK(a.b);++a.b
f=a.cF()/100
if(g)f*=-1
l.i(0,h.charCodeAt(0)==0?h:h,f)}n=new E.aW(p,t,s,r,q,P.cg(D.cL,m),P.cg(n,m))
n.r=l
return n}}
A.k_.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Puzzle Box",H.a([$.ar,$.w,$.aA],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Tesla Coil",H.a([$.as,$.w,$.a0],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Coin",H.a([$.a0,$.w],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Electronic Door",H.a([$.a0,$.w,$.as,$.aq],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Janus Bust",H.a([$.aS,$.oa,$.cD,$.av,$.w,$.ad,$.as],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.w,$.ay,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.B},
ga5:function(){return this.C},
ga4:function(){return this.D},
gX:function(){return this.F},
gU:function(){return this.E},
gZ:function(){return this.G},
gL:function(){return this.H}}
A.l7.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Frog Statue",H.a([$.aS,$.cD,$.w],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Frog Costume",H.a([$.ai,$.w],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nuclear Reactor",H.a([$.fk,$.aq,$.as,$.w],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Telescope",H.a([$.a0,$.b0,$.aq,$.w],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Green Sun Poster",H.a([$.a1,$.w,$.of,$.ad],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.w,$.ay,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.v},
gW:function(){return this.w},
gX:function(){return this.B},
gU:function(){return this.C},
gV:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
A.ku.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Curtain",H.a([$.ai,$.w,$.ap],s),null,!1,"Show Ender")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cursed Sword",H.a([$.a0,$.fn,$.dy,$.w,$.d_,$.bg,$.ap,$.ef,$.b_],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Megaphone",H.a([$.a0,$.b5,$.as,$.w,$.ap],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bike Horn",H.a([$.aS,$.a0,$.b5,$.cA,$.dA,$.w,$.ap],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bacchus Wine",H.a([$.cd,$.cA,$.av,$.w,$.ad,$.ap],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nightmare Fuel",H.a([$.ar,$.w,$.bg,$.ce,$.eg,$.ap],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.w,$.ay,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
ga5:function(){return this.C},
ga4:function(){return this.D},
gX:function(){return this.F},
gU:function(){return this.E},
gL:function(){return this.G},
gZ:function(){return this.H}}
A.l4.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Doll",H.a([$.jp,$.b1,$.bm,$.w],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Puppet",H.a([$.ar,$.bm,$.w,$.ad,$.bg],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mirror",H.a([$.oi,$.w],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shipping Grid",H.a([$.a1,$.w,$.cB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shades",H.a([$.aU,$.b0,$.w],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.w,$.ay,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
ga5:function(){return this.C},
ga4:function(){return this.D},
gX:function(){return this.F},
gU:function(){return this.E},
gZ:function(){return this.G},
gL:function(){return this.H}}
A.lU.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Grandfather Clock",H.a([$.ar,$.av,$.ei,$.w],s),null,!1,"Ticking Tower of Time")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Drum",H.a([$.pH,$.w,$.aV],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dead Doppelganger",H.a([$.aS,$.d0,$.w,$.cZ,$.bg,$.b_],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Music Box",H.a([$.a0,$.w,$.aV,$.av],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Turn Tables",H.a([$.a0,$.w,$.aV,$.ad,$.aU],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Metronome",H.a([$.a0,$.w,$.aV],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.w,$.ay,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
gZ:function(){return this.E},
ga5:function(){return this.G},
ga4:function(){return this.H},
gL:function(){return this.a7}}
A.kF.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("FAQ",H.a([$.as,$.w,$.aq,$.d1],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flashlight",H.a([$.aB,$.w,$.bN,$.as,$.d1],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Octet",H.a([$.w,$.bN,$.d1,$.ad,$.od],s),null,!1,"D13")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Horseshoe",H.a([$.pF,$.w,$.aZ],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rabbits Foot",H.a([$.pJ,$.w],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("4 Leaf Clover",H.a([$.dx,$.w,$.bN,$.d1],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("8-Ball",H.a([$.b0,$.w,$.bm],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.w,$.ay,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gZ:function(){return this.G},
gL:function(){return this.H}}
A.j2.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Infinity Gauntlet",H.a([$.w,$.a0,$.o8],[G.U]),"...",!1,"THANOS CAR THANOS CAR")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.v(t,0)]))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aX,$.j)
t.i(0,$.aI,$.y)
t.i(0,$.br,$.y)
r=$.k
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.n+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.Q("Collect The Stones",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
ga5:function(){return this.F},
ga4:function(){return this.E},
gL:function(){return this.G},
gZ:function(){return this.H}}
R.lH.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Meddler's Guide",H.a([$.ak,$.S,$.a1,$.cA,$.ad,$.bt],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("First Aid Kit",H.a([$.b0,$.S,$.bt],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=$.S
r=A.h("Cloud in a Bottle",H.a([r,r,$.bs],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Wings",H.a([$.aA,$.S,$.bN,$.b1,$.a1],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aX,$.i)
t.i(0,$.ah,$.i)
t.i(0,$.bK,$.j)
t.i(0,$.f8,$.j)
t.i(0,$.rU,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.nW,$.j)
t.i(0,$.rX,$.j)
r=$.k
q="The "+r+" decides to take a break after defeating "+$.n+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.m
o=[U.c]
t.i(0,new R.a2("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.A+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.ox(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
r=$.m
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.k
t.i(0,new R.a2("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
r=$.m
q="The "+r+"s are so stressed after all that shit with the "+$.n+". They are yelling and "+$.A+" at each other over the slightest of insults. The "
p=$.k
t.i(0,new R.a2("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p="The "+$.n+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.k
p=p+r+" purifies the pools "
q=$.m
t.i(0,new R.au("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
r="The defeat of the "+$.n+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.m
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.k
t.i(0,new R.a2("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ae+". Huh. Okay then.")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.v}}
L.lJ.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Lightning",H.a([$.b5,$.ay,$.w],s),null,!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ice",H.a([$.bY,$.tD,$.eh],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Taserface",H.a([$.ap,$.b5],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Taser",H.a([$.b5,$.w,$.ap],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.dn,$.y)
t.i(0,$.aI,$.i)
t.i(0,$.f0,$.j)
t.i(0,$.br,$.j)
r=$.k
q="The "+r+" is walking around on their land, when a "
p=$.m
q=q+p+" walks up to them, and tells them about "
o=$.n
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.A+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.Q("Rebel Against Your Land",!1,[new U.c(q),new U.c(p),new U.c(n),new U.T(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.c]),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
gW:function(){return this.u},
ga0:function(){return this.w},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
D.lL.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Robot",H.a([$.as,$.a0,$.bm,$.aq],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Circuit Board",H.a([$.as,$.a0],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Datastructures for Assholes",H.a([$.as,$.a1],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("~ATH - A Handbook for the Imminently Deceased ",H.a([$.as,$.a1,$.b_,$.ak],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("3-D Printer",H.a([$.aB,$.as,$.a0],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Virus on a USB Stick",H.a([$.tB,$.a0],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wrench",H.a([$.tQ,$.a0,$.aZ],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Computer",H.a([$.as,$.a0],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.f5,$.j)
q.i(0,$.e5,$.i)
q.i(0,$.e9,$.i)
q.i(0,$.aY,$.y)
p=$.k
o="The "+p+" learns from their "
n=$.m
o=o+n+"s about the great "
m=$.ae
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.n+" destroyed it. "
o="The "+p+" searches for the "
l=$.a5
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.u8
p=[U.c]
q.i(0,new R.Y("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.o(),!1,!1,new Y.bv("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.q)
l=$.k
m="The "+l+" is approached by a "
o=$.m
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.A
q.i(0,new R.Y("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.n+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.a5+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.dH(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
m=this.r
m.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.e9,$.i)
s.i(0,$.e8,$.y)
s.i(0,$.cW,$.j)
s.i(0,$.bB,$.i)
s.i(0,$.aY,$.y)
o=$.k
n="The "+o+" learns that all of the local "
l=$.m
s.i(0,new R.Y("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.A+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
o=$.k
l="The "+o+" finds two groups of "
n=$.m
l=l+n+"s screaming and "
k=$.A
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.a5
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Y("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.cH(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.f5,$.y)
t.i(0,$.e5,$.i)
t.i(0,$.e9,$.i)
t.i(0,$.aY,$.y)
r=$.k
q="The "+r+" learns from a mysterious "+$.m+" in a black trenchcoat about a great "
o=$.ae
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.n
t.i(0,new R.Y("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
V.lM.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Lighter",H.a([$.a0,$.ce],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Siberia Poster",H.a([$.a1,$.bY],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nuclear Winter Poster",H.a([$.a1,$.bY,$.fk],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Doomsday Device",H.a([$.a0,$.b_,$.fk,$.ay,$.ef],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Juggalo Poster",H.a([$.a1,$.tE],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Fancy Watch",H.a([$.a0,$.ei,$.ay],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Magnificent Crown",H.a([$.a0,$.ei,$.ay],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bitching Clothes",H.a([$.ai,$.ee,$.ay],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ceramic Pork Hollow",H.a([$.ob,$.ei],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shit Ton of Guns",H.a([$.a0,$.tK,$.fl,$.ay],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sniper Rifle",H.a([$.a0,$.tM,$.fl,$.ay],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("AK-47",H.a([$.a0,$.tG,$.fl,$.ay],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("IED",H.a([$.pD,$.d_,$.a0,$.eg,$.ay],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Idiots Guide To Being An Asshole",H.a([$.a1,$.cA,$.ak],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bike Horn",H.a([$.dA,$.a0,$.b5,$.cA],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Matches",H.a([$.ar,$.ce],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bi,$.j)
q.i(0,$.cw,$.i)
q.i(0,$.cX,$.i)
q.i(0,$.ea,$.i)
q.i(0,$.o0,$.i)
q.i(0,$.bV,$.j)
p=$.k
o=[U.c]
q.i(0,new R.Y("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bi,$.j)
s.i(0,$.cw,$.i)
s.i(0,$.bd,$.i)
s.i(0,$.bV,$.j)
n=$.k
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.m
s.i(0,new R.Y("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.a5+" underling. Tremble at the fearsome "+$.ae+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bC,$.i)
q.i(0,$.am,$.y)
q.i(0,$.cx,$.i)
q.i(0,$.aO,$.j)
q.i(0,$.dq,$.y)
q.i(0,$.br,$.y)
n=$.k
m="The "+n+" learns that all of the local "
l=$.m
q.i(0,new R.Y("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.A+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aP,$.i)
t.i(0,$.br,$.y)
t.i(0,$.dr,$.i)
t.i(0,$.iR,$.i)
t.i(0,$.aY,$.j)
t.i(0,$.dt,$.j)
s=$.k
r="The "+s+" finds a crowd of "
n=$.A
r=r+n+"ing "
m=$.m
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ae+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Y("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.u(q,t,null),$.ab)},
gL:function(){return this.cx}}
X.u.prototype={
J:function(a){return"Theme: "+H.t(this.a)}}
U.lP.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Lockpick",H.a([$.a0,$.S,$.bD,$.dy,$.ad],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sneaking Suit",H.a([$.ai,$.S,$.bD],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Dagger",H.a([$.a0,$.S,$.dy,$.d_,$.tu],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aP,$.i)
t.i(0,$.bU,$.j)
t.i(0,$.aI,$.j)
t.i(0,$.bB,$.j)
r="The "+$.n+" cannot release the frogs since the corrupt "
q=$.m
r=r+q+" Cops have confiscated them. The "
p=$.k
o=[U.c]
t.i(0,new R.au("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
p=$.k
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.n+"'s layer and slated to be returned to the "
r=$.m
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.A+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a2("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.m
p="A weeping "+r+" approaches the "
n=$.k
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.n
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ae+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.A+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a2("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.n
n="Now that the "+r+" has been defeated, the "
p=$.m
n=n+p+"s have recovered their precious "
q=$.a5
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.k
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.A
l=n+l+"worth, the disaffected Heir to the "+$.ae+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a2("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)}}
N.lQ.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Grandfather Clock",H.a([$.ar,$.av,$.ei,$.w],s),null,!1,"Ticking Tower of Time")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Drum",H.a([$.pH,$.w,$.aV],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dead Doppelganger",H.a([$.aS,$.d0,$.w,$.cZ,$.bg,$.b_],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Music Box",H.a([$.a0,$.w,$.aV,$.av],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Turn Tables",H.a([$.a0,$.w,$.aV,$.ad,$.aU],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Metronome",H.a([$.a0,$.w,$.aV],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.O]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.rZ,$.a8)
q.i(0,$.aY,$.j)
q.i(0,$.bB,$.j)
q.i(0,$.cW,$.i)
p=$.n
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.k
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.m
l=[U.c]
q.i(0,new R.a2("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.ci(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.i)
n=$.k
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.m+"s, they set out to fix the "
m=$.a5
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.n
q.i(0,new R.Q("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.T("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=this.f
j.i(0,new X.u(s,q,null),$.a7)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.f1,$.i)
s.i(0,$.cX,$.y)
s.i(0,$.aY,$.i)
p=$.k
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.m+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.n
s.i(0,new R.Q("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.T(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aQ,$.i)
t.i(0,$.ah,$.j)
t.i(0,$.aX,$.i)
t.i(0,$.bK,$.i)
r=$.n
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.a5
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.k
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.m+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.Q("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.T(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.et(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
k=$.n
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.a5
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.k
t.i(0,new R.Q("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.m+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.T("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.ci(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
r="With the defeat of the "+$.n+", "
k=$.k
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.m
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ae
t.i(0,new R.a2("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.ci(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.i)
p=$.m
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.k
t.i(0,new R.Q("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.A+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.T("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.n+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gax:function(){return this.t},
gS:function(){return this.u},
ga0:function(){return this.v},
gW:function(){return this.w},
gV:function(){return this.C},
gX:function(){return this.D},
gU:function(){return this.F},
gZ:function(){return this.E},
ga5:function(){return this.G},
ga4:function(){return this.H},
gL:function(){return this.a7}}
G.U.prototype={}
G.eV.prototype={$isaL:1,
$asaL:function(){return[G.eV]}}
G.js.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.U]}}}
Q.m_.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cardboard Box",H.a([$.a1,$.w,$.bD],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Hole Punch",H.a([$.a0,$.w,$.bD],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Smoke Bombs",H.a([$.eg,$.w,$.bD,$.pD],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Tribal Mask",H.a([$.cZ,$.w,$.bD,$.bg,$.jr],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Opera Mask",H.a([$.aB,$.w,$.bD,$.av],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Black Hole in a Bottle.",H.a([$.w,$.ad,$.of,$.bD,$.b0],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.m=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.O]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bL,$.i)
q.i(0,$.iS,$.i)
q.i(0,$.f4,$.i)
q.i(0,$.f2,$.i)
p=$.n
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.k
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.m
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.m
l=[U.c]
q.i(0,new R.a2("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.n
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.Q("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.T(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
i=this.f
i.i(0,new X.u(s,q,null),$.a7)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bL,$.j)
s.i(0,$.iS,$.j)
s.i(0,$.f4,$.j)
s.i(0,$.aP,$.i)
p=$.k
o="Even with the victory of the "+p+" over the villainous "
n=$.n
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.m+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.a5
s.i(0,new R.a2("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.dH(),!1,!1,new Y.aM("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
s.i(0,new R.Q("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.A+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.T("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.n+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.m+"s.")],H.a([],l),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
i.i(0,new X.u(q,s,null),$.a7)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bL,$.i)
t.i(0,$.iS,$.i)
t.i(0,$.f4,$.i)
r=$.k
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.n+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.Q("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.T(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
i.i(0,new X.u(s,t,null),$.a7)},
ga3:function(){return this.l},
ga2:function(){return this.n},
ga1:function(){return this.q},
gS:function(){return this.t},
ga0:function(){return this.u},
gW:function(){return this.v},
gV:function(){return this.B},
gX:function(){return this.C},
gU:function(){return this.D},
gZ:function(){return this.F},
ga5:function(){return this.E},
ga4:function(){return this.G},
gL:function(){return this.H}}
E.m0.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Yardstick",H.a([$.cC,$.S,$.jn,$.ad],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("SBURBSim Hacking Guide",H.a([$.ak,$.S,$.fm,$.a1],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Body Pillow of JR",H.a([$.ai,$.S,$.dw,$.og,$.bf],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Nanobots",H.a([$.pK,$.S,$.o7],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.be,$.i)
t.i(0,$.bW,$.i)
t.i(0,$.dp,$.i)
t.i(0,$.bK,$.i)
t.i(0,$.e6,$.i)
t.i(0,$.dn,$.i)
t.i(0,$.f4,$.j)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.c]
t.i(0,new R.Y("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.ox(),!1,!1,new Y.cj("Rewards/no_reward.png",null),1,null,null),$.q)
r=$.n
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aG+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.A
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.T(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.pU(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
t.i(0,new R.Y("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.o(),!1,!1,new Y.cj("Rewards/no_reward.png",null),1,null,null),$.q)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.n
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.k
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.n+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.o(),!1,!1,new Y.R("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a8)
m="A wizened "+$.m+" tells the "
r=$.k
t.i(0,new R.a2("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.y)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.a2("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.pV(),!1,!1,new Y.aM("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a2("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.y)
n=$.n
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.au("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
this.x.i(0,new X.u(s,t,null),$.a7)},
gL:function(){return this.w}}
M.m4.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cauldron",H.a([$.tF,$.S,$.aA],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flying Broom",H.a([$.o9,$.cC,$.S,$.ar,$.aA],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Warped Mirror",H.a([$.oi,$.S,$.aA,$.bD,$.ad],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.O]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.aO,$.j)
t.i(0,$.f7,$.j)
t.i(0,$.bC,$.j)
t.i(0,$.bB,$.j)
t.i(0,$.bb,$.j)
t.i(0,$.pn,$.j)
r=$.n
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.m
q=q+p+" consorts. It's up to the "
o=$.k
n=[U.c]
t.i(0,new R.au("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
o="Even with the defeat of the "+$.n+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.m
o=o+r+" settlement, and crops refuse to thrive at "
p=$.ae
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.k
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a2("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.q)
q="A Mysterious "+$.m+" approaches the "
p=$.k
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ae
q=q+r+" was discovered amongst the "+$.n+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a2("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.m
p="A young "+r+" approaches the "
m=$.k
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ae
t.i(0,new R.a2("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.a5+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.A+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.w}}
M.m5.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Buidlers Guide",H.a([$.ak,$.S,$.a1,$.ad,$.bt],s),"",!1,null)
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Makers Kit",H.a([$.ay,$.S,$.bt],s),"",!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.O]
s=H.a(["Wrights","Building","Creation","Extension"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.a_,P.x])
t.i(0,$.am,$.j)
t.i(0,$.bK,$.i)
t.i(0,$.be,$.j)
t.i(0,$.ah,$.j)
t.i(0,$.aQ,$.i)
r="The defeat of the "+$.n+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.k
p=[U.c]
t.i(0,new R.au("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.aF(),!1,!1,new Y.at("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a8)
q="Now that the "+$.n+" has been taken care of, the "
r=$.k
q=q+r+" finds a long line of "
o=$.m
t.i(0,new R.a2("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.o(),!1,!1,new Y.a4("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.u(s,t,null),$.aD)},
gL:function(){return this.t}}
F.m6.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Make a World Book",H.a([$.a1,$.av,$.ak],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.v(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Quill Pen",H.a([$.bf,$.ai,$.pI],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Book On Writing",H.a([$.ak,$.a1,$.aq],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("FLARP Manual",H.a([$.ak,$.a1,$.aq],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Script",H.a([$.ak,$.a1],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Fancy Pen",H.a([$.a0,$.aq,$.pI,$.av],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Spiral Bound Notebook",H.a([$.ak,$.a1,$.a0],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Half Written Novel",H.a([$.ak,$.a1],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.O]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a_,P.x]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bL,$.i)
q.i(0,$.bj,$.i)
q.i(0,$.am,$.j)
q.i(0,$.ah,$.j)
q.i(0,$.f3,$.j)
p=$.k
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.m+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.Y("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.o(),!1,!1,new Y.ax("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.r
m.i(0,new X.u(s,q,null),$.ab)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bV,$.j)
s.i(0,$.bi,$.j)
s.i(0,$.bd,$.j)
s.i(0,$.am,$.j)
p=$.m
o="An Excited "+p+" rushes up to the "
n=$.k
s.i(0,new R.Y("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.A+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(q,s,null),$.ab)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bi,$.j)
t.i(0,$.cw,$.i)
t.i(0,$.bd,$.i)
t.i(0,$.bV,$.j)
t.i(0,$.dp,$.i)
r=$.k
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.m
t.i(0,new R.Y("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.o(),!1,!1,new Y.bz("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.u(s,t,null),$.ab)},
gL:function(){return this.cx}}
A.dh.prototype={}
B.hl.prototype={
bK:function(a){var t,s,r,q
t=C.d.Y(a/8)
s=C.b.cR(a,8)
r=this.a.getUint8(t)
q=C.b.aG(1,s)
if(typeof r!=="number")return r.cQ()
return(r&q)>>>0>0},
aZ:function(a){var t,s,r
if(a>32)throw H.z(P.dX(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.bK(this.b);++this.b
if(r)t=(t|C.b.fj(1,s))>>>0}return t},
hm:function(a){var t,s,r,q
if(a>32)throw H.z(P.dX(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.bK(this.b);++this.b
if(q)s=(s|C.b.aG(1,t-r))>>>0}return s},
cF:function(){var t,s,r
for(t=0;!0;){s=this.bK(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hm(t+1)-1}}
A.bJ.prototype={
gcG:function(){return this.b},
b6:function(a,b,c){this.f=a
this.r=b
this.x=c
this.aL()},
cW:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
this.b=C.b.T(C.c.Y(h[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.T(C.c.Y(h[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.T(C.c.Y(h[2]*255),0,255)
this.e=!0
this.y=!0},
bZ:function(a){this.b=a.b
this.c=a.c
this.d=a.d
this.e=!0
this.y=!0},
J:function(a){return"rgb("+H.t(this.b)+", "+H.t(this.c)+", "+H.t(this.d)+", "+H.t(this.a)+")"},
dY:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aG()
s=this.c
if(typeof s!=="number")return s.aG()
r=this.d
if(typeof r!=="number")return r.aG()
q=this.a
if(typeof q!=="number")return H.az(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aG()
s=this.c
if(typeof s!=="number")return s.aG()
r=this.d
if(typeof r!=="number")return H.az(r)
return(t<<16|s<<8|r)>>>0},
dZ:function(a){var t=C.b.hz(this.dY(!1),16)
return C.f.hd(t,6,"0").toUpperCase()},
hy:function(){return this.dZ(!1)},
hB:function(a,b){return"#"+this.dZ(!1)},
aq:function(){return this.hB(!1,!1)},
ao:function(){var t,s,r,q,p,o,n,m,l
this.e=!1
t=this.b
if(typeof t!=="number")return t.a6()
t/=255
s=this.c
if(typeof s!=="number")return s.a6()
s/=255
r=this.d
if(typeof r!=="number")return r.a6()
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
aL:function(){var t,s,r,q,p,o,n,m,l,k,j,i
this.e=!1
t=this.f
s=this.r
r=this.x
t*=6
q=C.c.Y(t)
p=t-q
o=r*(1-s)
n=r*(1-p*s)
m=r*(1-(1-p)*s)
l=C.b.cR(q,6)
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
this.b=C.b.T(C.c.Y(i[0]*255),0,255)
this.e=!0
this.y=!0
this.c=C.b.T(C.c.Y(i[1]*255),0,255)
this.e=!0
this.y=!0
this.d=C.b.T(C.c.Y(i[2]*255),0,255)
this.e=!0
this.y=!0},
bQ:function(){var t,s,r,q,p,o,n,m,l,k,j
this.y=!1
t=this.b
if(typeof t!=="number")return t.a6()
t/=255
s=this.c
if(typeof s!=="number")return s.a6()
s/=255
r=this.d
if(typeof r!=="number")return r.a6()
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
a8:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.bJ){t=this.b
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
gaf:function(a){return this.dY(!0)},
ac:function(a,b){var t,s,r,q,p,o,n,m
t=J.af(b)
if(!!t.$isbJ){t=this.b
s=b.b
if(typeof t!=="number")return t.ac()
if(typeof s!=="number")return H.az(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.ac()
if(typeof q!=="number")return H.az(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.ac()
if(typeof o!=="number")return H.az(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.ac()
if(typeof m!=="number")return H.az(m)
return A.bA(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.a6()
s=this.c
if(typeof s!=="number")return s.a6()
r=this.d
if(typeof r!=="number")return r.a6()
q=this.a
if(typeof q!=="number")return q.a6()
return A.ia(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.ac()
s=this.c
if(typeof s!=="number")return s.ac()
r=this.d
if(typeof r!=="number")return r.ac()
return A.bA(t+b,s+b,r+b,this.a)}throw H.z("Cannot add ["+H.t(t.gah(b))+" "+H.t(b)+"] to a Colour. Only Colour, double and int are valid.")},
a6:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.a6()
s=this.c
if(typeof s!=="number")return s.a6()
r=this.d
if(typeof r!=="number")return r.a6()
q=this.a
if(typeof q!=="number")return q.a6()
return A.ia(t/255/b,s/255/b,r/255/b,q/255)},
ai:function(a,b){var t,s,r,q
if(b instanceof A.bJ){t=this.b
if(typeof t!=="number")return t.a6()
t=C.d.ai(t/255,b.gi1())
s=this.c
if(typeof s!=="number")return s.a6()
s=C.d.ai(s/255,b.ghM())
r=this.d
if(typeof r!=="number")return r.a6()
r=C.d.ai(r/255,b.ghS())
q=this.a
if(typeof q!=="number")return q.a6()
return A.ia(t,s,r,C.d.ai(q/255,b.ghR()))}else{t=this.b
if(typeof t!=="number")return t.a6()
s=this.c
if(typeof s!=="number")return s.a6()
r=this.d
if(typeof r!=="number")return r.a6()
q=this.a
if(typeof q!=="number")return q.a6()
return A.ia(t/255*b,s/255*b,r/255*b,q/255)}},
A:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.z("Colour index out of range: "+H.t(b))},
i:function(a,b,c){var t,s
t=J.cO(b)
if(t.aN(b,0)||t.b5(b,3))throw H.z("Colour index out of range: "+H.t(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.a8(b,0)){this.b=C.b.T(c,0,255)
this.e=!0
this.y=!0}else if(t.a8(b,1)){this.c=C.b.T(c,0,255)
this.e=!0
this.y=!0}else if(t.a8(b,2)){this.d=C.b.T(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.T(c,0,255)
else if(t.a8(b,0)){this.b=C.b.T(J.h6(J.nK(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.a8(b,1)){this.c=C.b.T(J.h6(J.nK(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.nr(c)
if(t.a8(b,2)){this.d=C.b.T(J.h6(s.ai(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.T(J.h6(s.ai(c,255)),0,255)}},
ep:function(a,b,c,d){this.b=C.c.T(J.h4(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.c.T(J.h4(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.c.T(J.h4(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.c.T(J.h4(d,0,255),0,255)}}
A.no.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.O]}}}
E.e0.prototype={
cV:function(a){var t
$.$get$b4().as("setFromRGB")
t=this.y2
t.b=C.b.T(C.c.Y(this.z.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.c=C.b.T(C.c.Y(this.Q.y*255),0,255)
t.e=!0
t.y=!0
t=this.y2
t.d=C.b.T(C.c.Y(this.ch.y*255),0,255)
t.e=!0
t.y=!0
if(a){J.cq(this.cx,this.y2.b)
J.cq(this.cy,this.y2.c)
J.cq(this.db,this.y2.d)}this.hF(a,!1)},
b1:function(){return this.cV(!1)},
cT:function(a){var t,s
$.$get$b4().as("setFromRGB")
t=this.y2
s=this.dx.y
if(t.e)t.ao()
t.f=s
t.aL()
t=this.y2
s=this.dy.y
if(t.e)t.ao()
t.r=s
t.aL()
t=this.y2
s=this.fr.y
if(t.e)t.ao()
t.x=s
t.aL()
if(a){t=this.fx
s=this.y2
if(s.e)s.ao()
J.cq(t,C.c.Y(s.f*360))
t=this.fy
s=this.y2
if(s.e)s.ao()
J.cq(t,C.c.Y(s.r*100))
t=this.go
s=this.y2
if(s.e)s.ao()
J.cq(t,C.c.Y(s.x*100))}this.hE(a,!1)},
b0:function(){return this.cT(!1)},
c_:function(){var t,s,r,q
t=this.y2
s=J.c7(this.id)
s.toString
r=J.c7(this.k1)
r.toString
q=J.c7(this.k2)
q.toString
t.cW(s,r,q)
this.hD(!1)},
bD:function(a,b,c,d,e){var t,s,r,q,p
if(!(this.a||a))return
$.$get$b4().as("update: rgb: "+e+", hsv: "+c+", fromMain: "+b+", force: "+a)
if(e){t=this.z
s=this.y2
r=s.b
if(typeof r!=="number")return r.a6()
t.y=r/255
t=this.Q
q=s.c
if(typeof q!=="number")return q.a6()
t.y=q/255
q=this.ch
s=s.d
if(typeof s!=="number")return s.a6()
q.y=s/255
J.cq(this.cx,r)
J.cq(this.cy,this.y2.c)
J.cq(this.db,this.y2.d)}if(c){t=this.dx
s=this.y2
if(s.e)s.ao()
t.y=s.f
t=this.dy
s=this.y2
if(s.e)s.ao()
t.y=s.r
t=this.fr
s=this.y2
if(s.e)s.ao()
t.y=s.x
t=this.fx
s=this.y2
if(s.e)s.ao()
J.bp(t,C.b.J(C.c.Y(s.f*360)))
t=this.fy
s=this.y2
if(s.e)s.ao()
J.bp(t,C.b.J(C.c.Y(s.r*100)))
t=this.go
s=this.y2
if(s.e)s.ao()
J.bp(t,C.b.J(C.c.Y(s.x*100)))}if(d){t=this.id
s=this.y2
if(s.y)s.bQ()
J.bp(t,C.c.bB(s.z,2))
t=this.k1
s=this.y2
if(s.y)s.bQ()
J.bp(t,C.c.bB(s.Q,2))
t=this.k2
s=this.y2
if(s.y)s.bQ()
J.bp(t,C.c.bB(s.ch,2))}for(t=this.ry,s=this.x1,p=0;p<t.length;++p){r=t[p]
r.cM(!0)
if(p>=s.length)return H.X(s,p)
r.dF(s[p])}this.fm(!b)
J.bp(this.k3,this.y2.hy())
t=this.r1.style
s=this.y2.aq()
t.backgroundColor=s
t=this.r2
s=$.cb
if(s>=t.length)return H.X(t,s)
J.qS(t[s],!0)},
hF:function(a,b){return this.bD(!1,a,!0,!0,b)},
hE:function(a,b){return this.bD(!1,a,b,!0,!0)},
e0:function(a){return this.bD(a,!1,!0,!0,!0)},
au:function(){return this.bD(!1,!1,!0,!0,!0)},
hD:function(a){return this.bD(!1,!1,!0,a,!0)},
fm:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
$.$get$b4().as("updateMainPicker: setValue: "+a)
t=this.y1
s=$.cb
if(s>=t.length)return H.X(t,s)
r=t[s]
t=this.x2
if(s>=t.length)return H.X(t,s)
q=t[s]
this.y.dF(r)
s=this.x
s.toString
p=s.getContext("2d")
o=P.qp(p.getImageData(0,0,256,256))
for(t=J.aa(o),n=null,m=null,l=0;l<256;++l)for(s=l/255,k=0;k<256;++k){n=(k*256+l)*4
m=q.$2(s,1-k/255)
j=t.gaB(o)
i=m.gcG()
if(n>=j.length)return H.X(j,n)
j[n]=i
i=t.gaB(o)
j=n+1
h=m.c
if(j>=i.length)return H.X(i,j)
i[j]=h
h=t.gaB(o)
j=n+2
i=m.d
if(j>=h.length)return H.X(h,j)
h[j]=i
i=t.gaB(o)
j=n+3
if(j>=i.length)return H.X(i,j)
i[j]=255}C.n.dP(p,o,0,0)
g=this.c8()
l=g[0].y
k=g[1].y
f=g[2].y
t=this.y2
if(t.y)t.bQ()
e=t.z>50?"#000000":"#FFFFFF"
p.beginPath()
p.arc(C.c.ak(l*255),C.c.ak((1-k)*255),5,0,6.283185307179586,!1)
p.strokeStyle=e
p.stroke()
if(a)this.y.y=f
this.y.cM(!0)},
c8:function(){var t,s,r,q
t=$.cb
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
q=null}return H.a([s,r,q],[E.cV])},
hb:function(a){var t,s,r
this.a=!0
t=A.ba(this.y2)
this.p=t
s=this.k4.style
t=t.aq()
s.backgroundColor=t
this.dQ()
this.e0(!0)
t=this.f.style
t.display="block"
this.cH()
for(t=$.$get$eT(),s=new P.bH(t,t.r,null,null,[null]),s.c=t.e;s.M();){r=s.d
t=J.af(r)
if(!t.a8(r,this))t.aS(r)}},
aS:function(a){var t
this.a=!1
t=this.f.style
t.display="none"},
d7:function(a){var t,s,r
t=this.b
J.bp(t,this.y2.aq())
s=this.e.style
r=this.y2.aq()
s.backgroundColor=r
a=document.createEvent("Event")
a.initEvent("change",!0,!0)
t.dispatchEvent(a)
this.aS(0)},
eO:function(){return this.d7(null)},
d5:function(a){this.y2.bZ(this.p)
this.aS(0)},
eL:function(){return this.d5(null)},
dQ:function(){var t,s
t=A.eU(J.p1(J.nP(this.b),1))
this.y2=t
s=this.e.style
t=t.aq()
s.backgroundColor=t
this.e0(!0)},
h2:function(){var t,s,r
t=this.x1
t.push(new E.hT(this))
t.push(new E.hU(this))
t.push(new E.hV(this))
s=this.y1
s.push(new E.i2(this))
s.push(new E.i3(this))
s.push(new E.i4(this))
r=this.x2
r.push(new E.i5(this))
r.push(new E.i6(this))
r.push(new E.i7(this))
t.push(new E.i8(this))
t.push(new E.i9(this))
t.push(new E.hW(this))
s.push(new E.hX())
s.push(new E.hY(this))
s.push(new E.hZ(this))
r.push(new E.i_(this))
r.push(new E.i0(this))
r.push(new E.i1(this))},
fI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=document
s=t.createElement("div")
s.className="colourPicker_anchor"
r=t.createElement("div")
r.className="colourPicker_button"
W.al(r,"click",new E.hs(this),!1,W.aJ)
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
n=a.ai(0,1.15)
m=a.ai(0,0.85)
l=a.ai(0,0.4)
k=r.style
j=""+(b+2)+"px"
k.width=j
j=""+(c+2)+"px"
k.height=j
j=l.aq()
k.borderColor=j
k=q.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j=a.aq()
k.backgroundColor=j
j=n.aq()
k.borderLeftColor=j
j=n.aq()
k.borderTopColor=j
j=m.aq()
k.borderRightColor=j
j=m.aq()
k.borderBottomColor=j
k=p.style
j=""+b+"px"
k.width=j
j=""+c+"px"
k.height=j
j=a.aq()
k.backgroundColor=j
j=m.aq()
k.borderLeftColor=j
j=m.aq()
k.borderTopColor=j
j=n.aq()
k.borderRightColor=j
j=n.aq()
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
J.qO(k,s)
j=this.c
t=t.createElement("div")
t.className="colourPicker_hidden"
t.appendChild(k)
j.appendChild(t)},
cs:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=document
s=t.createElement("div")
s.className="colourPicker_overlay"
this.c.appendChild(s)
r=t.createElement("div")
r.className="colourPicker_overlay_2"
q=W.aJ
W.al(r,"click",new E.ht(),!1,q)
s.appendChild(r)
p=t.createElement("div")
p.className="colourPicker_window"
W.al(p,"click",new E.hu(),!1,q)
s.appendChild(p)
this.r=p
o=W.p7(256,256)
o.className="colourPicker_canvas"
W.al(o,"mousedown",new E.hv(this),!1,q)
this.x=o
p.appendChild(o)
o=E.dm(0,1,25,256,!0)
p.appendChild(o.b)
o.cx.b4(this.gfh())
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
W.al(o,"click",new E.hG(this),!1,q)
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
o=W.aR("number")
o.className="colourPicker_number"
l=J.aa(o)
l.saF(o,"0")
l.saE(o,"255")
l.saH(o,"1")
l=C.h.gaj(o)
W.al(l.a,l.b,new E.hM(this),!1,H.v(l,0))
this.cx=o
E.aj(o,600,20)
p.appendChild(this.cx)
o=E.dm(0,1,256,16,!1)
p.appendChild(o.b)
o.cx.b4(new E.hN(this))
this.z=o
E.aj(o.b,330,20)
o=this.ry
o.push(this.z)
l=W.aR("number")
l.className="colourPicker_number"
k=J.aa(l)
k.saF(l,"0")
k.saE(l,"255")
k.saH(l,"1")
k=C.h.gaj(l)
W.al(k.a,k.b,new E.hO(this),!1,H.v(k,0))
this.cy=l
E.aj(l,600,50)
p.appendChild(this.cy)
l=E.dm(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.b4(new E.hP(this))
this.Q=l
E.aj(l.b,330,50)
o.push(this.Q)
l=W.aR("number")
l.className="colourPicker_number"
k=J.aa(l)
k.saF(l,"0")
k.saE(l,"255")
k.saH(l,"1")
k=C.h.gaj(l)
W.al(k.a,k.b,new E.hQ(this),!1,H.v(k,0))
this.db=l
E.aj(l,600,80)
p.appendChild(this.db)
l=E.dm(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.b4(new E.hR(this))
this.ch=l
E.aj(l.b,330,80)
o.push(this.ch)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="Hue, Saturation, Value"
E.aj(n,330,115)
p.appendChild(n)
l=W.aR("number")
l.className="colourPicker_number"
k=J.aa(l)
k.saF(l,"0")
k.saE(l,"360")
k.saH(l,"1")
k=C.h.gaj(l)
W.al(k.a,k.b,new E.hS(this,360),!1,H.v(k,0))
this.fx=l
E.aj(l,600,130)
p.appendChild(this.fx)
l=E.dm(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.b4(new E.hw(this,360))
this.dx=l
E.aj(l.b,330,130)
o.push(this.dx)
l=W.aR("number")
l.className="colourPicker_number"
k=J.aa(l)
k.saF(l,"0")
k.saE(l,"100")
k.saH(l,"1")
k=C.h.gaj(l)
W.al(k.a,k.b,new E.hx(this),!1,H.v(k,0))
this.fy=l
E.aj(l,600,160)
p.appendChild(this.fy)
l=E.dm(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.b4(new E.hy(this))
this.dy=l
E.aj(l.b,330,160)
o.push(this.dy)
l=W.aR("number")
l.className="colourPicker_number"
k=J.aa(l)
k.saF(l,"0")
k.saE(l,"100")
k.saH(l,"1")
k=C.h.gaj(l)
W.al(k.a,k.b,new E.hz(this),!1,H.v(k,0))
this.go=l
E.aj(l,600,190)
p.appendChild(this.go)
l=E.dm(0,1,256,16,!1)
p.appendChild(l.b)
l.cx.b4(new E.hA(this))
this.fr=l
E.aj(l.b,330,190)
o.push(this.fr)
j=t.createElement("form")
i=W.aR("radio")
o=J.aa(i)
o.sN(i,"mode")
o=o.gaj(i)
W.al(o.a,o.b,new E.hB(this),!1,H.v(o,0))
j.appendChild(i)
E.aj(i,305,19)
o=this.r2
o.push(i)
h=W.aR("radio")
l=J.aa(h)
l.sN(h,"mode")
l=l.gaj(h)
W.al(l.a,l.b,new E.hC(this),!1,H.v(l,0))
j.appendChild(h)
E.aj(h,305,49)
o.push(h)
g=W.aR("radio")
l=J.aa(g)
l.sN(g,"mode")
l=l.gaj(g)
W.al(l.a,l.b,new E.hD(this),!1,H.v(l,0))
j.appendChild(g)
E.aj(g,305,79)
o.push(g)
f=W.aR("radio")
l=J.aa(f)
l.sN(f,"mode")
l=l.gaj(f)
W.al(l.a,l.b,new E.hE(this),!1,H.v(l,0))
j.appendChild(f)
E.aj(f,305,129)
o.push(f)
e=W.aR("radio")
l=J.aa(e)
l.sN(e,"mode")
l=l.gaj(e)
W.al(l.a,l.b,new E.hF(this),!1,H.v(l,0))
j.appendChild(e)
E.aj(e,305,159)
o.push(e)
d=W.aR("radio")
l=J.aa(d)
l.sN(d,"mode")
l=l.gaj(d)
W.al(l.a,l.b,new E.hH(this),!1,H.v(l,0))
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
o=W.aR("number")
o.className="colourPicker_number colourPicker_lab"
l=J.aa(o)
l.saF(o,"0")
l.saE(o,"100")
l.saH(o,"0.01")
l=C.h.gaj(o)
W.al(l.a,l.b,new E.hI(this),!1,H.v(l,0))
this.id=o
E.aj(o,344,241)
p.appendChild(this.id)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="a"
E.aj(n,408,245)
p.appendChild(n)
o=W.aR("number")
o.className="colourPicker_number colourPicker_lab"
l=J.aa(o)
l.saF(o,"-127")
l.saE(o,"128")
l.saH(o,"0.01")
l=C.h.gaj(o)
W.al(l.a,l.b,new E.hJ(this),!1,H.v(l,0))
this.k1=o
E.aj(o,422,241)
p.appendChild(this.k1)
n=t.createElement("div")
n.className="colourPicker_text"
n.textContent="b"
E.aj(n,486,245)
p.appendChild(n)
o=W.aR("number")
o.className="colourPicker_number colourPicker_lab"
l=J.aa(o)
l.saF(o,"-127")
l.saE(o,"128")
l.saH(o,"0.01")
l=C.h.gaj(o)
W.al(l.a,l.b,new E.hK(this),!1,H.v(l,0))
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
o=W.aR("text")
l=J.aa(o)
l.sdN(o,6)
l.she(o,"[\\d|a-f|A-F]{6}")
o.className="colourPicker_hex"
l=C.h.gaj(o)
W.al(l.a,l.b,new E.hL(this),!1,H.v(l,0))
this.k3=o
E.aj(o,585,241)
p.appendChild(this.k3)
c=t.createElement("button")
c.className="colourPicker_innerButton"
c.textContent="OK"
W.al(c,"click",this.geN(),!1,q)
E.aj(c,570,285)
p.appendChild(c)
b=t.createElement("button")
b.className="colourPicker_innerButton"
b.textContent="Cancel"
W.al(b,"click",this.geK(),!1,q)
E.aj(b,470,285)
p.appendChild(b)
this.f=s
W.al(window,"resize",this.ghs(),!1,W.B)
this.cH()},
dh:function(a){var t,s,r,q,p,o,n,m
if(!this.rx)return
$.$get$b4().aC(C.i,"a1")
$.$get$b4().as("pickerDrag")
$.$get$b4().aC(C.i,"a2")
t=J.aa(a)
s=t.gbo(a)
s=s.ga9(s)
r=this.x
r.toString
q=document
r=W.f_(r,q.documentElement).a
if(typeof s!=="number")return s.aP()
if(typeof r!=="number")return H.az(r)
t=t.gbo(a)
t=t.gaa(t)
p=this.x
p.toString
q=W.f_(p,q.documentElement).b
if(typeof t!=="number")return t.aP()
if(typeof q!=="number")return H.az(q)
$.$get$b4().aC(C.i,"a3")
o=C.c.T(s-r-1,0,255)
n=C.c.T(t-q-1,0,255)
$.$get$b4().aC(C.i,"a4")
m=this.c8()
$.$get$b4().aC(C.i,"a5")
m[0].y=o/255
m[1].y=1-n/255
$.$get$b4().aC(C.i,"a6")
this.dm()
$.$get$b4().aC(C.i,"a7")},
dn:function(a){$.$get$b4().as("setFromPicker")
this.c8()[2].y=this.y.y;($.cb>=3?this.ged():this.gee()).$1(!0)},
dm:function(){return this.dn(null)},
dS:function(a){var t,s,r,q
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
if(typeof t!=="number")return t.aP()
if(typeof r!=="number")return H.az(r)
r=""+C.b.an(t-r,2)+"px"
q.left=r
r=this.r.clientHeight
if(typeof s!=="number")return s.aP()
if(typeof r!=="number")return H.az(r)
r=""+C.b.an(s-r,2)+"px"
q.top=r},
cH:function(){return this.dS(null)},
shi:function(a){return this.rx=a}}
E.hT.prototype={
$1:function(a){var t=A.ba(this.a.y2)
t.b=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hU.prototype={
$1:function(a){var t=A.ba(this.a.y2)
t.c=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hV.prototype={
$1:function(a){var t=A.ba(this.a.y2)
t.d=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i2.prototype={
$1:function(a){var t=A.ba(this.a.y2)
t.b=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i3.prototype={
$1:function(a){var t=A.ba(this.a.y2)
t.c=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i4.prototype={
$1:function(a){var t=A.ba(this.a.y2)
t.d=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i5.prototype={
$2:function(a,b){var t=A.ba(this.a.y2)
t.d=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.T(C.c.Y(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i6.prototype={
$2:function(a,b){var t=A.ba(this.a.y2)
t.d=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
t.b=C.b.T(C.c.Y(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i7.prototype={
$2:function(a,b){var t=A.ba(this.a.y2)
t.b=C.b.T(C.c.Y(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.T(C.c.Y(b*255),0,255)
t.e=!0
t.y=!0
return t},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i8.prototype={
$1:function(a){var t=A.ba(this.a.y2)
if(t.e)t.ao()
t.f=a
t.aL()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i9.prototype={
$1:function(a){var t=A.ba(this.a.y2)
if(t.e)t.ao()
t.r=a
t.aL()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hW.prototype={
$1:function(a){var t=A.ba(this.a.y2)
if(t.e)t.ao()
t.x=a
t.aL()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hX.prototype={
$1:function(a){var t=A.bA(0,0,0,255)
t.b6(a,1,1)
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hY.prototype={
$1:function(a){var t=A.ba(this.a.y2)
if(t.e)t.ao()
t.r=a
t.aL()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.hZ.prototype={
$1:function(a){var t=A.ba(this.a.y2)
if(t.e)t.ao()
t.x=a
t.aL()
return t},
$S:function(){return{func:1,args:[P.x]}}}
E.i_.prototype={
$2:function(a,b){var t,s
t=this.a.dx.y
s=A.bA(0,0,0,255)
s.b6(t,a,b)
return s},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i0.prototype={
$2:function(a,b){var t,s
t=this.a.dy.y
s=A.bA(0,0,0,255)
s.b6(a,t,b)
return s},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.i1.prototype={
$2:function(a,b){var t,s
t=this.a.fr.y
s=A.bA(0,0,0,255)
s.b6(a,b,t)
return s},
$S:function(){return{func:1,args:[P.x,P.x]}}}
E.hs.prototype={
$1:function(a){this.a.hb(0)
J.p0(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.aJ]}}}
E.ht.prototype={
$1:function(a){J.p0(a)
a.stopPropagation()},
$S:function(){return{func:1,args:[W.aJ]}}}
E.hu.prototype={
$1:function(a){return J.qU(a)},
$S:function(){return{func:1,args:[W.B]}}}
E.hv.prototype={
$1:function(a){var t
$.$get$b4().as("PICKER CLICK")
t=this.a
t.rx=!0
$.$get$b4().aC(C.i,"click")
t.dh(a)},
$S:function(){return{func:1,args:[W.aJ]}}}
E.hG.prototype={
$1:function(a){var t=this.a
t.y2.bZ(t.p)
t.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hM.prototype={
$1:function(a){var t,s,r
t=this.a
E.ct(t.cx,0,255,0)
s=t.z
r=J.c7(t.cx)
if(typeof r!=="number")return r.a6()
s.y=r/255
t.b1()},
$S:function(){return{func:1,args:[W.B]}}}
E.hN.prototype={
$1:function(a){var t=this.a
J.bp(t.cx,C.b.J(C.c.ak(t.z.y*255)))
t.b1()},
$S:function(){return{func:1,args:[W.B]}}}
E.hO.prototype={
$1:function(a){var t,s,r
t=this.a
E.ct(t.cy,0,255,0)
s=t.Q
r=J.c7(t.cy)
if(typeof r!=="number")return r.a6()
s.y=r/255
t.b1()},
$S:function(){return{func:1,args:[W.B]}}}
E.hP.prototype={
$1:function(a){var t=this.a
J.bp(t.cy,C.b.J(C.c.ak(t.Q.y*255)))
t.b1()},
$S:function(){return{func:1,args:[W.B]}}}
E.hQ.prototype={
$1:function(a){var t,s,r
t=this.a
E.ct(t.db,0,255,0)
s=t.ch
r=J.c7(t.db)
if(typeof r!=="number")return r.a6()
s.y=r/255
t.b1()},
$S:function(){return{func:1,args:[W.B]}}}
E.hR.prototype={
$1:function(a){var t=this.a
J.bp(t.db,C.b.J(C.c.ak(t.ch.y*255)))
t.b1()},
$S:function(){return{func:1,args:[W.B]}}}
E.hS.prototype={
$1:function(a){var t,s,r,q
t=this.a
s=this.b
E.ct(t.fx,0,s,0)
r=t.dx
q=J.c7(t.fx)
if(typeof q!=="number")return q.a6()
r.y=q/s
t.b0()},
$S:function(){return{func:1,args:[W.B]}}}
E.hw.prototype={
$1:function(a){var t=this.a
J.bp(t.fx,C.b.J(C.c.ak(t.dx.y*this.b)))
t.b0()},
$S:function(){return{func:1,args:[W.B]}}}
E.hx.prototype={
$1:function(a){var t,s,r
t=this.a
E.ct(t.fy,0,100,0)
s=t.dy
r=J.c7(t.fy)
if(typeof r!=="number")return r.a6()
s.y=r/100
t.b0()},
$S:function(){return{func:1,args:[W.B]}}}
E.hy.prototype={
$1:function(a){var t=this.a
J.bp(t.fy,C.b.J(C.c.ak(t.dy.y*100)))
t.b0()},
$S:function(){return{func:1,args:[W.B]}}}
E.hz.prototype={
$1:function(a){var t,s,r
t=this.a
E.ct(t.go,0,100,0)
s=t.fr
r=J.c7(t.go)
if(typeof r!=="number")return r.a6()
s.y=r/100
t.b0()},
$S:function(){return{func:1,args:[W.B]}}}
E.hA.prototype={
$1:function(a){var t=this.a
J.bp(t.go,C.b.J(C.c.ak(t.fr.y*100)))
t.b0()},
$S:function(){return{func:1,args:[W.B]}}}
E.hB.prototype={
$1:function(a){$.cb=0
this.a.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hC.prototype={
$1:function(a){$.cb=1
this.a.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hD.prototype={
$1:function(a){$.cb=2
this.a.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hE.prototype={
$1:function(a){$.cb=3
this.a.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hF.prototype={
$1:function(a){$.cb=4
this.a.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hH.prototype={
$1:function(a){$.cb=5
this.a.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.hI.prototype={
$1:function(a){var t=this.a
E.ct(t.id,0,100,2)
t.c_()},
$S:function(){return{func:1,args:[W.B]}}}
E.hJ.prototype={
$1:function(a){var t=this.a
E.ct(t.k1,-127,128,2)
t.c_()},
$S:function(){return{func:1,args:[W.B]}}}
E.hK.prototype={
$1:function(a){var t=this.a
E.ct(t.k2,-127,128,2)
t.c_()},
$S:function(){return{func:1,args:[W.B]}}}
E.hL.prototype={
$1:function(a){var t,s
t=this.a
s=A.eU(J.nP(t.k3))
t.y2.bZ(s)
t.au()},
$S:function(){return{func:1,args:[W.B]}}}
E.cV.prototype={
cM:function(a){var t,s,r,q
this.a.as("update: silent: "+a)
t=this.r
s=(this.y-t)/(this.x-t)
if(this.z){r=C.c.Y(this.f*(1-s))
t=this.c.style
q=""+r+"px"
t.top=q}else{r=C.c.Y(this.e*s)
t=this.c.style
q=""+r+"px"
t.left=q}if(!a){t=this.ch
q=W.rR("update",!0,!0,this)
if(t.b>=4)H.aE(t.d0())
t.b7(q)}},
au:function(){return this.cM(!1)},
f5:function(a){this.a.as("SLIDER CLICK")
this.Q=!0
this.cU(a)},
f7:function(a){this.Q=!1},
f6:function(a){if(!this.Q)return
this.cU(a)},
cU:function(a){var t,s,r,q,p,o
t=J.aa(a)
s=t.gbo(a)
s=s.ga9(s)
r=this.b
r.toString
q=document
r=W.f_(r,q.documentElement).a
if(typeof s!=="number")return s.aP()
if(typeof r!=="number")return H.az(r)
t=t.gbo(a)
t=t.gaa(t)
p=this.b
p.toString
q=W.f_(p,q.documentElement).b
if(typeof t!=="number")return t.aP()
if(typeof q!=="number")return H.az(q)
o=this.z?C.c.T(1-(t-q)/this.f,0,1):C.d.T((s-r)/this.e,0,1)
t=this.r
this.y=o*(this.x-t)+t
this.au()},
dF:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
t.toString
s=t.getContext("2d")
t=this.d
r=P.qp(s.getImageData(0,0,t.width,t.height))
for(t=J.aa(r),q=this.z,p=0;p<this.e;++p)for(o=0;n=this.f,o<n;++o){m=this.e
l=(o*m+p)*4
k=a.$1(q?1-o/n:p/m)
n=t.gaB(r)
m=k.gcG()
if(l>=n.length)return H.X(n,l)
n[l]=m
m=t.gaB(r)
n=l+1
j=k.c
if(n>=m.length)return H.X(m,n)
m[n]=j
j=t.gaB(r)
n=l+2
m=k.d
if(n>=j.length)return H.X(j,n)
j[n]=m
m=t.gaB(r)
n=l+3
if(n>=m.length)return H.X(m,n)
m[n]=255}C.n.dP(s,r,0,0)},
eq:function(a,b,c,d,e){var t,s,r,q
t=W.B
s=new P.fS(null,0,null,null,null,null,null,[t])
this.ch=s
this.cx=new P.fT(s,[t])
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
W.al(s,"mousedown",this.gf4(),!1,W.aJ)
this.b=s
s=this.e
s=W.p7(this.f,s)
s.className="fancySlider_background"
this.d=s
t=t.createElement("div")
t.className="fancySlider_slider_"+(this.z?"vertical":"horizontal")
this.c=t
this.b.appendChild(this.d)
this.b.appendChild(this.c)
this.au()
$.$get$iM().j(0,this)
E.pa()}}
E.hq.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eT(),s=[null],r=new P.bH(t,t.r,null,null,s),r.c=t.e;r.M();)r.d.shi(!1)
for(t=$.$get$iM(),s=new P.bH(t,t.r,null,null,s),s.c=t.e;s.M();)s.d.f7(a)},
$S:function(){return{func:1,args:[W.aJ]}}}
E.hr.prototype={
$1:function(a){var t,s,r
for(t=$.$get$eT(),s=[null],r=new P.bH(t,t.r,null,null,s),r.c=t.e;r.M();)r.d.dh(a)
for(t=$.$get$iM(),s=new P.bH(t,t.r,null,null,s),s.c=t.e;s.M();)s.d.f6(a)},
$S:function(){return{func:1,args:[W.aJ]}}}
F.dD.prototype={
J:function(a){return this.b}}
F.dE.prototype={
aC:function(a,b){F.tU(a).$1("("+this.c+")["+H.t(C.a.gh9(a.b.split(".")))+"]: "+H.t(b))},
ct:function(a,b){this.aC(C.t,b)},
as:function(a){},
gN:function(a){return this.c}}
A.kp.prototype={
A:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.ap(b)?t.A(0,b):$.$get$os()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.ap(b)?t.A(0,b):$.$get$os()}throw H.z(P.dX(b,"'name' should be a String name or int id only",null))},
ga_:function(a){var t=this.a
t=t.gav(t)
return new H.fx(null,J.bx(t.a),t.b,[H.v(t,0),H.v(t,1)])},
h:function(a,b,c,d){var t,s
t=this.a
if(t.ap(b))this.am(0,b)
s=this.f9()
if(typeof s!=="number")return s.hK()
if(s>=256)throw H.z(P.dX(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
am:function(a,b){var t,s,r
t=this.a
if(!t.ap(b))return
s=this.c
r=s.A(0,b)
t.am(0,b)
this.b.am(0,r)
s.am(0,b)
this.d.am(0,r)},
f9:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.ap(s))return s;++s}}}
A.fD.prototype={
$asW:function(){return[A.bJ]},
$isW:1}
A.fG.prototype={
cX:function(a){var t=a==null
this.a=t?C.w:P.vh(a)
if(!t)this.b=a+1},
hg:function(a,b){var t
if(a.gag(a))return
t=a.hL(this.a.be())
return t},
hf:function(a){return this.hg(a,!0)}}
D.lv.prototype={
$1:function(a){a.ghh()
return!0},
$S:function(){return{func:1,args:[D.cL]}}}
D.cL.prototype={
J:function(a){return this.a},
gN:function(a){return this.a},
ghh:function(){return this.d}}
A.fM.prototype={
fs:function(a,b){var t,s,r,q,p,o,n,m,l
C.a.bm(this.b,a)
for(t=J.bx(a);t.M();){s=t.gP()
for(r=s.gL().gby(),r=r.ga_(r);r.M();){q=r.gP()
p=J.aa(q)
if(!this.d.ap(p.gN(q))){this.d.i(0,p.gN(q),q)
this.dw(p.gN(q))}}for(r=s.gei().gby(),r=r.ga_(r);r.M();){o=r.gP()
if(!this.d.ap(o)){p=this.d
n=new D.cL(o,"","",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$oB().push(n)
p.i(0,o,n)
this.dw(o)}if(!s.f.ap(this.d.A(0,o)))s.f.i(0,this.d.A(0,o),0)
p=s.f
n=this.d.A(0,o)
m=p.A(0,n)
l=s.r.A(0,o)
if(typeof m!=="number")return m.ac()
if(typeof l!=="number")return H.az(l)
p.i(0,n,m+l)}}this.au()},
au:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.c6)(t),++r)t[r].fB()
this.bf()},
bf:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=document
s=t.querySelector("#canvas")
r=J.qL(s)
r.fillStyle="#FFFFFF"
r.fillRect(0,0,s.width,s.height)
if(this.b.length!==0){q=this.c
q=new H.bG(q,new A.lq(),[H.v(q,0)])
q=!q.ga_(q).M()}else q=!0
if(q)return
p=H.eO(t.querySelector("input[type=radio][name=stat]:checked"),"$iseu").value
o=p==="*"?null:this.d.A(0,p)
for(t=this.c,q=t.length,n=0,m=0,l=0,k=0,j=0;j<t.length;t.length===q||(0,H.c6)(t),++j){i=t[j]
if(i.b!==!0)continue
n+=J.cP(i.x)
m=Math.max(m,i.z)
l=Math.min(l,H.dS(i.e3(o)))
k=Math.max(k,H.dS(i.e2(o)))}if(n===0)return
q=this.a
q.as("stat: "+H.t(o)+", total points: "+n+", turns: "+H.t(m)+", min: "+H.t(l)+", max: "+H.t(k))
h=s.width
if(typeof h!=="number")return h.aP()
g=h-50
h=s.height
if(typeof h!=="number")return h.aP()
f=h-50
e=g/(m-1)
d=Math.max(k-l,5)
c=A.vz(l,k,f)
if(k<=0)b=0
else{if(typeof c!=="number")return H.az(c)
b=C.d.cp(k/c)+1}if(l>=0)a=0
else{if(typeof c!=="number")return H.az(c)
a=C.d.cp(Math.abs(l)/c)+1}if(typeof c!=="number")return H.az(c)
a0=Math.max(C.d.cp(d/c),b+a)
a1=f/(c*a0)
a2=C.c.ak(c*a*a1)
q.as("grid increment: "+H.t(c))
q.as("w: "+g+", h: "+f+", xinc: "+H.t(e)+", yinc: "+H.t(f/d)+", yrange: "+H.t(d))
r.textAlign="center"
for(q=f+25,h=q+12,a3=0;a3<m;){r.fillStyle="#E5E5E5"
a4=C.d.ak(e*a3)+25
r.fillRect(a4,25,1,f)
r.fillStyle="#555555";++a3
r.fillText(A.qr(a3),a4,h)}r.textAlign="right"
for(h=f/a0,a3=0;a3<=a0;++a3){r.fillStyle="#E5E5E5"
a5=C.d.ak(h*a3)
r.fillRect(25,a5+25,g,1)
r.fillStyle="#555555"
r.fillText(A.qr((a3-a)*c),23,q-a5+5)}r.fillStyle="#555555"
q=25+f
r.fillRect(25,q-h*a,g,1)
r.fillRect(25,25,1,f)
for(h=t.length,q-=a2,j=0;j<t.length;t.length===h||(0,H.c6)(t),++j){i=t[j]
if(i.b!==!0)continue
for(a6=0,a7=!1,a8=1;a8<=m;++a8){a4=J.dW(i.x,new A.lr(a8))
if(a4.gag(a4))continue
a9=J.qB(new H.dF(a4,new A.ls(o),[H.v(a4,0),null]).ho(0,new A.lt()),a4.gO(a4))
b0=C.d.ak(e*(a8-1))+25
a5=q-J.qP(J.nK(a9,a1))
a4=a4.gO(a4)
b1=i.Q
r.strokeStyle="rgba("+H.t(i.c.b)+","+H.t(i.c.c)+","+H.t(i.c.d)+","+C.d.hA(a4/b1*0.8+0.2,2)
r.strokeRect(b0-0.5,a5-0.5,2,2)
if(a8>1&&!0){a4=C.d.ak(e*(a8-2))
r.beginPath()
r.moveTo(a4+25+0.5,a6+0.5)
r.lineTo(b0+0.5,a5+0.5)
r.stroke()}a6=a5
a7=!0}}},
dv:function(a){var t,s,r,q,p,o,n,m,l
t=document
s=H.eO(t.querySelector("#select_class"),"$iscl").value
r=H.eO(t.querySelector("#select_aspect"),"$iscl").value
q=H.eO(t.querySelector("#select_interest1"),"$iscl").value
p=H.eO(t.querySelector("#select_interest2"),"$iscl").value
o=s==="*"?null:T.v0(s)
n=r==="*"?null:L.rG(r)
m=q==="*"?null:B.pt(q)
l=A.v3(this,o,n,m,p==="*"?null:B.pt(p))
this.c.push(l)
l.cs(0)
t.querySelector("#line_container").appendChild(l.y)
this.au()},
fv:function(){return this.dv(null)},
dw:function(a){var t,s,r,q,p,o,n
t=this.d.A(0,a)
s=document
r=s.querySelector("#stats_container")
q=s.createElement("div")
q.className="selection_block"
p=W.aR("radio")
o=J.aa(p)
o.sN(p,"stat")
n=J.aa(t)
o.sad(p,n.gN(t))
p.id="stat_"+H.t(n.gN(t))
o=o.gcz(p)
W.al(o.a,o.b,new A.ll(this),!1,H.v(o,0))
q.appendChild(p)
s=s.createElement("label")
s.htmlFor="stat_"+H.t(n.gN(t))
s.textContent=n.gN(t)
q.appendChild(s)
r.appendChild(q)},
ev:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=document
s=J.oZ(t.querySelector("#add_line"))
W.al(s.a,s.b,this.gfu(),!1,H.v(s,0))
r=t.querySelector("#select_class")
s=T.uZ()
q=P.cE(s,!0,H.v(s,0))
C.a.bh(q,new A.lm())
for(s=q.length,p=0;p<q.length;q.length===s||(0,H.c6)(q),++p){o=J.by(q[p])
n=W.kl(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_aspect")
s=L.rE()
m=P.cE(s,!0,H.v(s,0))
C.a.bh(m,new A.ln())
for(s=m.length,p=0;p<m.length;m.length===s||(0,H.c6)(m),++p){o=J.by(m[p])
n=W.kl(o,o,null,!1)
n.textContent=o
r.appendChild(n)}r=t.querySelector("#select_interest1")
l=t.querySelector("#select_interest2")
s=B.th()
k=P.cE(s,!0,H.v(s,0))
C.a.bh(k,new A.lo())
for(s=k.length,p=0;p<k.length;k.length===s||(0,H.c6)(k),++p){j=k[p]
o=J.aa(j)
n=o.gN(j)
i=W.kl(n,n,null,!1)
i.textContent=n
r.appendChild(i)
o=o.gN(j)
i=W.kl(o,o,null,!1)
i.textContent=o
l.appendChild(i)}t=J.oZ(t.querySelector("#stat_average"))
W.al(t.a,t.b,new A.lp(this),!1,H.v(t,0))},
gL:function(){return this.d}}
A.lm.prototype={
$2:function(a,b){return J.h5(J.by(a),J.by(b))},
$S:function(){return{func:1,args:[T.cJ,T.cJ]}}}
A.ln.prototype={
$2:function(a,b){return J.h5(J.by(a),J.by(b))},
$S:function(){return{func:1,args:[L.cs,L.cs]}}}
A.lo.prototype={
$2:function(a,b){return J.h5(J.by(a),J.by(b))},
$S:function(){return{func:1,args:[B.cz,B.cz]}}}
A.lp.prototype={
$1:function(a){return this.a.bf()},
$S:function(){return{func:1,args:[W.B]}}}
A.lq.prototype={
$1:function(a){return a.gfQ()},
$S:function(){return{func:1,args:[A.ev]}}}
A.lr.prototype={
$1:function(a){return J.ao(a.gbX(),this.a)},
$S:function(){return{func:1,args:[E.aW]}}}
A.ls.prototype={
$1:function(a){return a.e4(this.a)},
$S:function(){return{func:1,args:[E.aW]}}}
A.lt.prototype={
$2:function(a,b){return J.dV(a,b)},
$S:function(){return{func:1,args:[P.x,P.x]}}}
A.ll.prototype={
$1:function(a){return this.a.bf()},
$S:function(){return{func:1,args:[W.B]}}}
A.ev.prototype={
cs:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="selection_block"
r=W.aR("checkbox")
q=J.aa(r)
q.sbc(r,!0)
q=q.gaj(r)
W.al(q.a,q.b,new A.li(this,r),!1,H.v(q,0))
s.appendChild(r)
p=W.aR("color")
q=J.aa(p)
q.sad(p,this.c.aq())
q=q.gaj(p)
W.al(q.a,q.b,new A.lj(this,p),!1,H.v(q,0))
s.appendChild(p)
E.rO(p,null,14540253,25,48)
q=t.createElement("span")
o=this.d
o=H.t(o==null?"[Any class]":o)+" of "
n=this.e
o=o+H.t(n==null?"[Any aspect]":n)+" ["
n=this.f
o=o+H.t(n==null?"Any interest":J.by(n))+", "
n=this.r
q.textContent=o+H.t(n==null?"Any interest":J.by(n))+"]"
s.appendChild(q)
t=t.createElement("button")
t.textContent="Remove"
W.al(t,"click",new A.lk(this),!1,W.aJ)
s.appendChild(t)
this.y=s},
fB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=D.cL
s=P.x
this.ch=P.cg(t,s)
this.cx=P.cg(t,s)
this.cy=0
this.db=0
for(t=this.a,s=t.d,s=s.gav(s),s=s.ga_(s);s.M();){r=s.gP()
this.ch.i(0,r,0)
this.cx.i(0,r,0)}for(s=J.bx(this.x);s.M();){q=s.gP()
this.z=Math.max(this.z,H.dS(q.gbX()))}for(p=1;p<=this.z;++p){o=J.dW(this.x,new A.lc(p))
this.Q=Math.max(this.Q,o.gO(o))
for(s=t.d,s=s.gav(s),s=s.ga_(s),n=o.a,m=J.eN(n),l=o.b,k=[H.v(o,0)],j=0;s.M();){r=s.gP()
for(i=m.ga_(n),h=new H.ez(i,l,k),g=0;h.M();){q=i.gP()
f=J.nL(q.gL(),r)
if(typeof f!=="number")return H.az(f)
g+=f
f=J.nL(q.gL(),r)
if(typeof f!=="number")return H.az(f)
j+=f}g/=o.gO(o)
i=this.ch
i.i(0,r,Math.min(H.dS(i.A(0,r)),g))
i=this.cx
i.i(0,r,Math.max(H.dS(i.A(0,r)),g))}s=t.d
j/=s.gO(s)*o.gO(o)
this.cy=Math.min(H.dS(this.cy),j)
this.db=Math.max(H.dS(this.db),j)}t.a.as(H.t(this.d)+" of "+H.t(this.e)+", "+H.t(this.f)+" + "+H.t(this.r)+": maxturn: "+H.t(this.z)+", minima: "+J.bq(this.ch)+", maxima: "+J.bq(this.cx))},
e3:function(a){if(a!=null)return this.ch.A(0,a)
return this.cy},
e2:function(a){if(a!=null)return this.cx.A(0,a)
return this.db},
eu:function(a,b,c,d,e){var t,s,r,q
t=this.a.b
this.x=t
if(this.d!=null){t=C.a.cP(t,new A.ld(this))
this.x=t}s=this.e
r=s!=null
if(r){t=J.dW(t,new A.le(this))
this.x=t}q=this.f==null
if(!q||this.r!=null){q=!q
if(q&&this.r!=null)this.x=J.dW(t,new A.lf(this))
else if(q)this.x=J.dW(t,new A.lg(this))
else if(this.r!=null)this.x=J.dW(t,new A.lh(this))}if(r)this.c=A.ba(s.gS().A(0,$.D))
else{t=$.$get$nF().a.be()
s=$.$get$nF().a.be()
r=$.$get$nF().a.be()
q=A.bA(0,0,0,255)
q.b6(t,s*0.3+0.7,r*0.3+0.7)
this.c=q}},
gfQ:function(){return this.b},
gcS:function(){return this.d},
gaR:function(){return this.e},
gbr:function(){return this.f},
gbs:function(){return this.r}}
A.ld.prototype={
$1:function(a){return J.ao(a.gcS(),this.a.d)},
$S:function(){return{func:1,args:[E.aW]}}}
A.le.prototype={
$1:function(a){return J.ao(a.gaR(),this.a.e)},
$S:function(){return{func:1,args:[E.aW]}}}
A.lf.prototype={
$1:function(a){var t,s
t=this.a
s=t.f
if(!(J.ao(a.gbr(),s)&&J.ao(a.gbs(),t.r)))t=J.ao(a.gbr(),t.r)&&J.ao(a.gbs(),s)
else t=!0
return t},
$S:function(){return{func:1,args:[E.aW]}}}
A.lg.prototype={
$1:function(a){var t=this.a.f
return J.ao(a.gbr(),t)||J.ao(a.gbs(),t)},
$S:function(){return{func:1,args:[E.aW]}}}
A.lh.prototype={
$1:function(a){var t=this.a.r
return J.ao(a.gbr(),t)||J.ao(a.gbs(),t)},
$S:function(){return{func:1,args:[E.aW]}}}
A.li.prototype={
$1:function(a){var t,s
t=this.a
s=J.qK(this.b)
t.b=s
t=t.a
t.a.aC(C.i,"Enabled: "+H.t(s))
t.bf()},
$S:function(){return{func:1,args:[W.B]}}}
A.lj.prototype={
$1:function(a){var t=this.a
t.c=A.eU(J.p1(J.nP(this.b),1))
t.a.bf()},
$S:function(){return{func:1,args:[W.B]}}}
A.lk.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.a
C.a.am(s.c,t)
t=t.y
r=t.parentNode
if(r!=null)r.removeChild(t)
s.bf()},
$S:function(){return{func:1,args:[W.B]}}}
A.lc.prototype={
$1:function(a){return J.ao(a.gbX(),this.a)},
$S:function(){return{func:1,args:[E.aW]}}}
E.aW.prototype={
e4:function(a){var t,s,r
if(a!=null)return this.f.A(0,a)
for(t=this.f,t=t.gav(t),t=t.ga_(t),s=0;t.M();){r=t.gP()
if(typeof r!=="number")return H.az(r)
s+=r}t=this.f
if(t.gag(t))t=0
else{t=this.f
t=s/t.gO(t)}return t},
gbX:function(){return this.a},
gcS:function(){return this.b},
gaR:function(){return this.c},
gbr:function(){return this.d},
gbs:function(){return this.e},
gL:function(){return this.f},
gei:function(){return this.r}}
Q.c3.prototype={
k:function(a,b){return b},
J:function(a){return J.bq(this.gbU())},
az:function(a,b){return Q.oG(this,b,H.an(this,"c3",0),null)},
al:function(a,b){return Q.oF(this,!1,!0,null,H.an(this,"c3",0))},
aA:function(a){return this.al(a,!0)},
$isW:1,
$asW:null}
Q.m2.prototype={
gbU:function(){return this.b},
A:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.X(t,b)
return J.nO(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.X(t,b)
t[b]=new Q.f(c,s,this.$ti)},
gO:function(a){return this.b.length},
J:function(a){return P.fp(this.b,"[","]")},
az:function(a,b){return Q.oG(this,b,H.v(this,0),null)},
al:function(a,b){return Q.oF(this,!1,!0,null,H.v(this,0))},
aA:function(a){return this.al(a,!0)},
ex:function(a,b,c){var t,s
this.a=a
t=[[Q.f,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fO.prototype={$asc3:null,$asW:null,$asa9:null,$asa6:null,$isa9:1,$isa6:1,$isW:1}
Q.f.prototype={
J:function(a){return"("+H.t(this.a)+" @ "+H.t(this.b)+")"},
gbx:function(a){return this.a},
ghI:function(){return this.b}}
Q.dc.prototype={
gbU:function(){return this.b},
ga_:function(a){var t=new Q.m1(null,[H.an(this,"dc",0)])
t.a=J.bx(this.b)
return t},
gO:function(a){return J.cP(this.b)},
J:function(a){return J.bq(this.b)},
az:function(a,b){return Q.oG(this,b,H.an(this,"dc",0),null)},
al:function(a,b){return Q.oF(this,!1,!0,null,H.an(this,"dc",0))},
aA:function(a){return this.al(a,!0)}}
Q.ey.prototype={$asc3:null,$asW:null,$isW:1}
Q.m1.prototype={
gP:function(){return J.nO(this.a.gP())},
M:function(){return this.a.M()}}
Q.fP.prototype={
$asdc:function(a,b){return[b]},
$asey:function(a,b){return[b]},
$asc3:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
Q.m3.prototype={
$1:function(a){return new Q.f(this.c.$1(J.nO(a)),a.ghI(),[this.b])},
$S:function(){return H.np(function(a,b){return{func:1,args:[[Q.f,a]]}},this,"fP")}}
J.Z.prototype.el=J.Z.prototype.J
J.ej.prototype.em=J.ej.prototype.J
P.bQ.prototype.en=P.bQ.prototype.b7
P.bQ.prototype.eo=P.bQ.prototype.bG;(function installTearOffs(){installTearOff(H.dN.prototype,"gh8",0,0,0,null,["$0"],["bT"],1)
installTearOff(H.c4.prototype,"ge5",0,0,0,null,["$1"],["aw"],5)
installTearOff(H.dd.prototype,"gfM",0,0,0,null,["$1"],["aU"],5)
installTearOff(P,"vu",1,0,0,null,["$1"],["va"],4)
installTearOff(P,"vv",1,0,0,null,["$1"],["vb"],4)
installTearOff(P,"vw",1,0,0,null,["$1"],["vc"],4)
installTearOff(P,"qo",1,0,0,null,["$0"],["vr"],1)
installTearOff(P,"vy",1,0,0,null,["$2","$1"],["qf",function(a){return P.qf(a,null)}],6)
installTearOff(P,"vx",1,0,0,null,["$0"],["vp"],1)
installTearOff(P.b3.prototype,"gc5",0,0,0,null,["$2","$1"],["aI","eM"],6)
var t
installTearOff(t=P.fU.prototype,"gcg",0,0,0,null,["$0"],["ba"],1)
installTearOff(t,"gci",0,0,0,null,["$0"],["bb"],1)
installTearOff(t=P.bQ.prototype,"gcg",0,0,0,null,["$0"],["ba"],1)
installTearOff(t,"gci",0,0,0,null,["$0"],["bb"],1)
installTearOff(t=P.eD.prototype,"gcg",0,0,0,null,["$0"],["ba"],1)
installTearOff(t,"gci",0,0,0,null,["$0"],["bb"],1)
installTearOff(t,"geV",0,0,0,null,["$1"],["eW"],function(){return H.np(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eD")})
installTearOff(t,"geZ",0,0,0,null,["$2"],["f_"],9)
installTearOff(t,"geX",0,0,0,null,["$0"],["eY"],1)
installTearOff(P,"vE",1,0,0,null,["$2"],["rQ"],15)
installTearOff(P,"vF",1,0,0,null,["$1"],["nE"],2)
installTearOff(t=W.eW.prototype,"gay",0,1,0,null,["$1"],["ct"],2)
installTearOff(t,"gh1",0,0,0,null,["$1"],["dL"],2)
installTearOff(t,"gbX",0,0,0,null,["$1"],["hx"],10)
installTearOff(t,"ghG",0,0,0,null,["$1"],["hH"],2)
installTearOff(W.dk.prototype,"gbx",0,1,0,null,["$1"],["b3"],11)
installTearOff(W.du.prototype,"gbx",0,1,0,null,["$1"],["b3"],12)
installTearOff(W.fc.prototype,"gbx",0,1,0,null,["$1"],["b3"],7)
installTearOff(W.cl.prototype,"gbx",0,1,0,null,["$1"],["b3"],7)
installTearOff(R,"d9",1,0,0,null,["$1"],["ut"],0)
installTearOff(R,"uf",1,0,0,null,["$1"],["uq"],0)
installTearOff(R,"pU",1,0,0,null,["$1"],["ug"],0)
installTearOff(R,"ox",1,0,0,null,["$1"],["us"],0)
installTearOff(R,"aF",1,0,0,null,["$1"],["ur"],0)
installTearOff(R,"ow",1,0,0,null,["$1"],["up"],0)
installTearOff(R,"pW",1,0,0,null,["$1"],["un"],0)
installTearOff(R,"et",1,0,0,null,["$1"],["um"],0)
installTearOff(R,"ci",1,0,0,null,["$1"],["uj"],0)
installTearOff(R,"cH",1,0,0,null,["$1"],["ul"],0)
installTearOff(R,"dH",1,0,0,null,["$1"],["uo"],0)
installTearOff(R,"ov",1,0,0,null,["$1"],["uk"],0)
installTearOff(R,"o",1,0,0,null,["$1"],["uh"],0)
installTearOff(R,"pV",1,0,0,null,["$1"],["ui"],0)
installTearOff(t=E.e0.prototype,"gee",0,0,0,null,["$1","$0"],["cV","b1"],8)
installTearOff(t,"ged",0,0,0,null,["$1","$0"],["cT","b0"],8)
installTearOff(t,"geN",0,0,0,null,["$1","$0"],["d7","eO"],3)
installTearOff(t,"geK",0,0,0,null,["$1","$0"],["d5","eL"],3)
installTearOff(t,"gfh",0,0,0,null,["$1","$0"],["dn","dm"],3)
installTearOff(t,"ghs",0,0,0,null,["$1","$0"],["dS","cH"],3)
installTearOff(E.cV.prototype,"gf4",0,0,0,null,["$1"],["f5"],13)
installTearOff(F.dE.prototype,"gay",0,1,0,null,["$1"],["ct"],2)
installTearOff(A,"qz",1,0,0,null,["$0"],["vQ"],1)
installTearOff(t=A.fM.prototype,"gfq",0,0,0,null,["$2"],["fs"],14)
installTearOff(t,"gfu",0,0,0,null,["$1","$0"],["dv","fv"],3)})();(function inheritance(){inherit(P.aw,null)
var t=P.aw
inherit(H.om,t)
inherit(J.Z,t)
inherit(J.hb,t)
inherit(P.W,t)
inherit(H.fw,t)
inherit(P.fr,t)
inherit(H.fa,t)
inherit(H.dj,t)
inherit(H.mS,t)
inherit(H.dN,t)
inherit(H.mn,t)
inherit(H.de,t)
inherit(H.mR,t)
inherit(H.mf,t)
inherit(H.dI,t)
inherit(H.lR,t)
inherit(H.c9,t)
inherit(H.c4,t)
inherit(H.dd,t)
inherit(H.kH,t)
inherit(H.lV,t)
inherit(P.cT,t)
inherit(H.e3,t)
inherit(H.fZ,t)
inherit(H.cN,t)
inherit(H.l,t)
inherit(H.jH,t)
inherit(H.jJ,t)
inherit(H.fv,t)
inherit(H.mU,t)
inherit(H.m8,t)
inherit(H.lD,t)
inherit(H.nd,t)
inherit(P.bk,t)
inherit(P.mj,t)
inherit(P.fX,t)
inherit(P.b3,t)
inherit(P.fR,t)
inherit(P.cn,t)
inherit(P.lw,t)
inherit(P.n7,t)
inherit(P.md,t)
inherit(P.bQ,t)
inherit(P.fV,t)
inherit(P.mk,t)
inherit(P.mW,t)
inherit(P.nb,t)
inherit(P.df,t)
inherit(P.ni,t)
inherit(P.mG,t)
inherit(P.mI,t)
inherit(P.kZ,t)
inherit(P.mP,t)
inherit(P.bH,t)
inherit(P.dB,t)
inherit(P.ch,t)
inherit(P.mQ,t)
inherit(P.cp,t)
inherit(P.aL,t)
inherit(P.bS,t)
inherit(P.cu,t)
inherit(P.km,t)
inherit(P.fK,t)
inherit(P.mr,t)
inherit(P.j0,t)
inherit(P.is,t)
inherit(P.a9,t)
inherit(P.c_,t)
inherit(P.d6,t)
inherit(P.cK,t)
inherit(P.O,t)
inherit(P.ew,t)
inherit(W.eW,t)
inherit(W.id,t)
inherit(W.eu,t)
inherit(W.fe,t)
inherit(W.iY,t)
inherit(P.ne,t)
inherit(P.h0,t)
inherit(P.mM,t)
inherit(P.mY,t)
inherit(P.cF,t)
inherit(P.mZ,t)
inherit(P.cR,t)
inherit(B.cz,t)
inherit(L.cs,t)
inherit(A.fD,t)
inherit(T.cJ,t)
inherit(X.dl,t)
inherit(X.di,t)
inherit(M.cU,t)
inherit(N.a_,t)
inherit(O.ec,t)
inherit(Z.it,t)
inherit(E.kj,t)
inherit(E.r,t)
inherit(A.V,t)
inherit(U.c,t)
inherit(Y.cj,t)
inherit(X.u,t)
inherit(G.U,t)
inherit(A.dh,t)
inherit(B.hl,t)
inherit(A.bJ,t)
inherit(E.e0,t)
inherit(E.cV,t)
inherit(F.dD,t)
inherit(F.dE,t)
inherit(A.fG,t)
inherit(D.cL,t)
inherit(A.fM,t)
inherit(A.ev,t)
inherit(E.aW,t)
inherit(Q.c3,t)
inherit(Q.f,t)
t=J.Z
inherit(J.jv,t)
inherit(J.fu,t)
inherit(J.ej,t)
inherit(J.d2,t)
inherit(J.dC,t)
inherit(J.d3,t)
inherit(H.dG,t)
inherit(H.d7,t)
inherit(W.e2,t)
inherit(W.dg,t)
inherit(W.eS,t)
inherit(W.fg,t)
inherit(W.B,t)
inherit(W.eZ,t)
inherit(W.ii,t)
inherit(W.fh,t)
inherit(W.cY,t)
inherit(W.kf,t)
inherit(W.kg,t)
inherit(W.mi,t)
t=J.ej
inherit(J.ks,t)
inherit(J.db,t)
inherit(J.d4,t)
inherit(J.ol,J.d2)
t=J.dC
inherit(J.ft,t)
inherit(J.fs,t)
t=P.W
inherit(H.a6,t)
inherit(H.dF,t)
inherit(H.bG,t)
inherit(P.fo,t)
inherit(H.nc,t)
t=H.a6
inherit(H.d5,t)
inherit(H.jI,t)
inherit(P.mH,t)
inherit(H.e1,H.dF)
t=P.fr
inherit(H.fx,t)
inherit(H.ez,t)
inherit(Q.m1,t)
t=H.d5
inherit(H.em,t)
inherit(P.jK,t)
t=H.dj
inherit(H.nH,t)
inherit(H.nI,t)
inherit(H.mL,t)
inherit(H.mo,t)
inherit(H.ji,t)
inherit(H.jj,t)
inherit(H.mV,t)
inherit(H.lS,t)
inherit(H.lT,t)
inherit(H.nJ,t)
inherit(H.ny,t)
inherit(H.nz,t)
inherit(H.nA,t)
inherit(H.nB,t)
inherit(H.nC,t)
inherit(H.lK,t)
inherit(H.jw,t)
inherit(H.nu,t)
inherit(H.nv,t)
inherit(H.nw,t)
inherit(P.ma,t)
inherit(P.m9,t)
inherit(P.mb,t)
inherit(P.mc,t)
inherit(P.nj,t)
inherit(P.nk,t)
inherit(P.nn,t)
inherit(P.ms,t)
inherit(P.mA,t)
inherit(P.mw,t)
inherit(P.mx,t)
inherit(P.my,t)
inherit(P.mu,t)
inherit(P.mz,t)
inherit(P.mt,t)
inherit(P.mD,t)
inherit(P.mE,t)
inherit(P.mC,t)
inherit(P.mB,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.lB,t)
inherit(P.lC,t)
inherit(P.lx,t)
inherit(P.ly,t)
inherit(P.n9,t)
inherit(P.n8,t)
inherit(P.mh,t)
inherit(P.mg,t)
inherit(P.mX,t)
inherit(P.nl,t)
inherit(P.nm,t)
inherit(P.n0,t)
inherit(P.n1,t)
inherit(P.n2,t)
inherit(P.mJ,t)
inherit(P.jP,t)
inherit(P.im,t)
inherit(P.io,t)
inherit(W.mq,t)
inherit(P.ng,t)
inherit(L.hc,t)
inherit(O.iU,t)
inherit(O.iV,t)
inherit(O.iW,t)
inherit(Z.j1,t)
inherit(B.jh,t)
inherit(A.ju,t)
inherit(A.jt,t)
inherit(T.kO,t)
inherit(G.js,t)
inherit(A.no,t)
inherit(E.hT,t)
inherit(E.hU,t)
inherit(E.hV,t)
inherit(E.i2,t)
inherit(E.i3,t)
inherit(E.i4,t)
inherit(E.i5,t)
inherit(E.i6,t)
inherit(E.i7,t)
inherit(E.i8,t)
inherit(E.i9,t)
inherit(E.hW,t)
inherit(E.hX,t)
inherit(E.hY,t)
inherit(E.hZ,t)
inherit(E.i_,t)
inherit(E.i0,t)
inherit(E.i1,t)
inherit(E.hs,t)
inherit(E.ht,t)
inherit(E.hu,t)
inherit(E.hv,t)
inherit(E.hG,t)
inherit(E.hM,t)
inherit(E.hN,t)
inherit(E.hO,t)
inherit(E.hP,t)
inherit(E.hQ,t)
inherit(E.hR,t)
inherit(E.hS,t)
inherit(E.hw,t)
inherit(E.hx,t)
inherit(E.hy,t)
inherit(E.hz,t)
inherit(E.hA,t)
inherit(E.hB,t)
inherit(E.hC,t)
inherit(E.hD,t)
inherit(E.hE,t)
inherit(E.hF,t)
inherit(E.hH,t)
inherit(E.hI,t)
inherit(E.hJ,t)
inherit(E.hK,t)
inherit(E.hL,t)
inherit(E.hq,t)
inherit(E.hr,t)
inherit(D.lv,t)
inherit(A.lm,t)
inherit(A.ln,t)
inherit(A.lo,t)
inherit(A.lp,t)
inherit(A.lq,t)
inherit(A.lr,t)
inherit(A.ls,t)
inherit(A.lt,t)
inherit(A.ll,t)
inherit(A.ld,t)
inherit(A.le,t)
inherit(A.lf,t)
inherit(A.lg,t)
inherit(A.lh,t)
inherit(A.li,t)
inherit(A.lj,t)
inherit(A.lk,t)
inherit(A.lc,t)
inherit(Q.m3,t)
t=H.mf
inherit(H.dO,t)
inherit(H.eH,t)
t=P.cT
inherit(H.fC,t)
inherit(H.jx,t)
inherit(H.lX,t)
inherit(H.hn,t)
inherit(H.kN,t)
inherit(P.es,t)
inherit(P.cr,t)
inherit(P.b7,t)
inherit(P.dL,t)
inherit(P.c0,t)
inherit(P.bT,t)
inherit(P.ih,t)
t=H.lK
inherit(H.lu,t)
inherit(H.dZ,t)
inherit(H.m7,P.fo)
t=H.d7
inherit(H.k6,t)
inherit(H.fy,t)
t=H.fy
inherit(H.eo,t)
inherit(H.ep,t)
inherit(H.eq,H.eo)
inherit(H.fz,H.eq)
inherit(H.er,H.ep)
inherit(H.fA,H.er)
t=H.fz
inherit(H.k7,t)
inherit(H.k8,t)
t=H.fA
inherit(H.k9,t)
inherit(H.ka,t)
inherit(H.kb,t)
inherit(H.kc,t)
inherit(H.kd,t)
inherit(H.fB,t)
inherit(H.ke,t)
inherit(P.nh,P.mj)
inherit(P.fS,P.n7)
t=P.cn
inherit(P.na,t)
inherit(P.eC,t)
inherit(W.fW,t)
inherit(P.fT,P.na)
t=P.bQ
inherit(P.fU,t)
inherit(P.eD,t)
t=P.fV
inherit(P.eA,t)
inherit(P.ml,t)
inherit(P.h_,P.mW)
inherit(P.mT,P.eC)
inherit(P.n_,P.ni)
inherit(P.fY,H.l)
inherit(P.kY,P.kZ)
inherit(P.mK,P.kY)
inherit(P.mO,P.mK)
t=P.bS
inherit(P.x,t)
inherit(P.a3,t)
t=P.cr
inherit(P.fH,t)
inherit(P.jf,t)
t=W.e2
inherit(W.d8,t)
inherit(W.f9,t)
inherit(W.jV,t)
inherit(W.fQ,t)
inherit(W.n6,t)
t=W.d8
inherit(W.cv,t)
inherit(W.cS,t)
inherit(W.eY,t)
inherit(W.me,t)
inherit(W.mm,t)
t=W.cv
inherit(W.ac,t)
inherit(P.b6,t)
t=W.ac
inherit(W.h9,t)
inherit(W.ha,t)
inherit(W.hh,t)
inherit(W.hk,t)
inherit(W.hm,t)
inherit(W.ip,t)
inherit(W.iT,t)
inherit(W.fc,t)
inherit(W.jc,t)
inherit(W.jd,t)
inherit(W.ff,t)
inherit(W.jA,t)
inherit(W.jC,t)
inherit(W.jG,t)
inherit(W.jO,t)
inherit(W.en,t)
inherit(W.jT,t)
inherit(W.jU,t)
inherit(W.jW,t)
inherit(W.jX,t)
inherit(W.kh,t)
inherit(W.ki,t)
inherit(W.kk,t)
inherit(W.kn,t)
inherit(W.kq,t)
inherit(W.kx,t)
inherit(W.kV,t)
inherit(W.cl,t)
inherit(W.l0,t)
inherit(W.l5,t)
inherit(W.lE,t)
inherit(W.lN,t)
inherit(W.mF,t)
inherit(W.dk,W.fg)
t=W.B
inherit(W.ig,t)
inherit(W.iq,t)
inherit(W.c2,t)
inherit(W.l8,t)
inherit(W.l9,t)
inherit(W.aT,W.dg)
inherit(W.fi,W.fh)
inherit(W.du,W.fi)
inherit(W.aJ,W.c2)
inherit(W.eB,W.fW)
inherit(W.mp,P.lw)
inherit(P.nf,P.ne)
inherit(P.cI,P.mZ)
t=P.b6
inherit(P.cy,t)
inherit(P.cQ,t)
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
inherit(P.iJ,t)
inherit(P.iK,t)
inherit(P.iL,t)
inherit(P.iX,t)
inherit(P.jQ,t)
inherit(P.jR,t)
inherit(P.kr,t)
inherit(P.kW,t)
inherit(P.lF,t)
inherit(P.lI,t)
inherit(P.lZ,t)
inherit(P.eE,t)
inherit(P.n3,t)
inherit(P.n4,t)
inherit(P.n5,t)
t=P.cy
inherit(P.h7,t)
inherit(P.j_,t)
inherit(P.bX,t)
inherit(P.je,t)
inherit(P.lG,t)
inherit(P.fN,t)
inherit(P.lY,t)
inherit(P.kG,P.bX)
t=P.fN
inherit(P.lO,t)
inherit(P.ex,t)
t=B.cz
inherit(S.h8,t)
inherit(M.hd,t)
inherit(A.ic,t)
inherit(M.ie,t)
inherit(V.ij,t)
inherit(U.iN,t)
inherit(N.jz,t)
inherit(F.k4,t)
inherit(G.kt,t)
inherit(Q.kK,t)
inherit(N.l3,t)
inherit(D.lL,t)
inherit(V.lM,t)
inherit(F.m6,t)
inherit(A.kp,A.fD)
inherit(L.C,A.kp)
t=T.cJ
inherit(O.he,t)
inherit(Y.j3,t)
inherit(Y.j4,t)
inherit(B.j7,t)
inherit(X.ja,t)
inherit(Q.jb,t)
inherit(S.jB,t)
inherit(Z.jL,t)
inherit(S.jM,t)
inherit(U.jN,t)
inherit(E.k3,t)
inherit(V.ko,t)
inherit(N.kw,t)
inherit(N.kJ,t)
inherit(E.kP,t)
inherit(Y.kR,t)
inherit(Y.kT,t)
inherit(L.kU,t)
inherit(S.kX,t)
inherit(Y.l1,t)
inherit(R.lH,t)
inherit(U.lP,t)
inherit(E.m0,t)
inherit(M.m4,t)
inherit(M.m5,t)
t=L.cs
inherit(L.hf,t)
inherit(T.hg,t)
inherit(T.hj,t)
inherit(S.ho,t)
inherit(U.ib,t)
inherit(U.ik,t)
inherit(Z.il,t)
inherit(L.iO,t)
inherit(O.iZ,t)
inherit(L.j5,t)
inherit(T.j6,t)
inherit(V.j8,t)
inherit(X.j9,t)
inherit(Z.jy,t)
inherit(Q.jD,t)
inherit(K.jE,t)
inherit(G.jF,t)
inherit(D.jS,t)
inherit(L.jY,t)
inherit(V.jZ,t)
inherit(S.k0,t)
inherit(O.k1,t)
inherit(B.k2,t)
inherit(E.kz,t)
inherit(L.kA,t)
inherit(L.kB,t)
inherit(L.kC,t)
inherit(L.kD,t)
inherit(L.kE,t)
inherit(Z.kI,t)
inherit(V.kL,t)
inherit(R.kM,t)
inherit(Y.kQ,t)
inherit(K.kS,t)
inherit(L.l_,t)
inherit(O.l2,t)
inherit(N.l6,t)
inherit(U.la,t)
inherit(A.k_,t)
inherit(A.l7,t)
inherit(A.ku,t)
inherit(A.l4,t)
inherit(A.lU,t)
inherit(A.kF,t)
inherit(A.j2,t)
inherit(L.lJ,t)
inherit(N.lQ,t)
inherit(Q.m_,t)
inherit(O.eR,O.ec)
inherit(E.fd,E.kj)
t=E.r
inherit(E.dY,t)
inherit(E.eQ,t)
inherit(U.T,U.c)
inherit(R.ky,N.a_)
t=R.ky
inherit(R.Y,t)
inherit(R.Q,t)
inherit(R.a2,t)
inherit(R.au,R.a2)
t=Y.cj
inherit(Y.a4,t)
inherit(Y.aM,t)
inherit(Y.k5,t)
inherit(Y.R,t)
inherit(Y.eX,t)
inherit(Y.ax,t)
inherit(Y.bv,t)
inherit(Y.hp,t)
inherit(Y.fE,t)
inherit(Y.fb,t)
inherit(Y.fF,t)
t=Y.aM
inherit(Y.bz,t)
inherit(Y.at,t)
inherit(G.fL,O.eR)
inherit(G.lb,G.fL)
inherit(G.eV,G.U)
t=Q.c3
inherit(Q.fO,t)
inherit(Q.ey,t)
inherit(Q.m2,Q.fO)
inherit(Q.dc,Q.ey)
inherit(Q.fP,Q.dc)
mixin(H.eo,P.ch)
mixin(H.eq,H.fa)
mixin(H.ep,P.ch)
mixin(H.er,H.fa)
mixin(P.fS,P.md)
mixin(W.fg,W.id)
mixin(W.fh,P.ch)
mixin(W.fi,W.fe)
mixin(A.fD,P.dB)
mixin(Q.fO,P.ch)
mixin(Q.ey,P.dB)})();(function constants(){C.n=W.eS.prototype
C.p=W.f9.prototype
C.h=W.ff.prototype
C.x=J.Z.prototype
C.a=J.d2.prototype
C.d=J.fs.prototype
C.b=J.ft.prototype
C.y=J.fu.prototype
C.c=J.dC.prototype
C.f=J.d3.prototype
C.F=J.d4.prototype
C.u=J.ks.prototype
C.m=J.db.prototype
C.j=new W.eW()
C.v=new P.km()
C.k=new P.mk()
C.w=new P.mM()
C.e=new P.n_()
C.o=new P.cu(0)
C.z=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.q=function(hooks) { return hooks; }
C.A=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.B=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.C=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.r=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.D=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.E=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.t=new F.dD(0,"LogLevel.ERROR")
C.G=new F.dD(1,"LogLevel.WARN")
C.i=new F.dD(2,"LogLevel.INFO")
C.H=new F.dD(3,"LogLevel.VERBOSE")
C.I=H.aK("cR")
C.J=H.aK("vX")
C.l=H.aK("vZ")
C.K=H.aK("w_")
C.L=H.aK("w0")
C.M=H.aK("w2")
C.N=H.aK("w3")
C.O=H.aK("w4")
C.P=H.aK("pO")
C.Q=H.aK("c_")
C.R=H.aK("O")
C.S=H.aK("w7")
C.T=H.aK("w8")
C.U=H.aK("w9")
C.V=H.aK("oE")
C.W=H.aK("cp")
C.X=H.aK("x")
C.Y=H.aK("a3")
C.Z=H.aK("bS")})();(function staticFields(){$.pR="$cachedFunction"
$.pS="$cachedInvocation"
$.ca=0
$.e_=null
$.p5=null
$.oT=null
$.ql=null
$.qw=null
$.nq=null
$.nx=null
$.oU=null
$.dP=null
$.eI=null
$.eJ=null
$.oO=!1
$.ag=C.e
$.pk=0
$.pf=null
$.pe=null
$.pg=null
$.rx=null
$.rB=null
$.qZ=null
$.nR=null
$.qY=null
$.r5=null
$.rd=null
$.ra=null
$.rD=null
$.p4=null
$.r7=null
$.r9=null
$.r0=null
$.rt=null
$.p3=null
$.rA=null
$.rq=null
$.r6=null
$.qX=null
$.re=null
$.ry=null
$.ri=null
$.rw=null
$.rC=null
$.rk=null
$.r3=null
$.rb=null
$.r_=null
$.rr=null
$.r4=null
$.rc=null
$.rf=null
$.rj=null
$.rs=null
$.ru=null
$.rp=null
$.r8=null
$.r1=null
$.rv=null
$.r2=null
$.rz=null
$.rh=null
$.rg=null
$.rl=null
$.rm=null
$.rn=null
$.ro=null
$.p2=null
$.nS=null
$.P="accent"
$.F="aspect1"
$.E="aspect2"
$.N="shoe1"
$.M="shoe2"
$.H="cloak1"
$.I="cloak2"
$.G="cloak3"
$.D="shirt1"
$.L="shirt2"
$.K="pants1"
$.J="pants2"
$.a8=1300
$.i=3
$.j=2
$.y=1
$.q=0.1
$.rX=null
$.dq=null
$.rV=null
$.e8=null
$.f8=null
$.nY=null
$.rU=null
$.pp=null
$.rY=null
$.iP=null
$.nW=null
$.o3=null
$.e7=null
$.cx=null
$.rW=null
$.nX=null
$.o4=null
$.e9=null
$.f7=null
$.e4=null
$.bd=null
$.bC=null
$.cW=null
$.o2=null
$.aQ=null
$.aP=null
$.pm=null
$.f4=null
$.dr=null
$.f3=null
$.be=null
$.cX=null
$.f5=null
$.br=null
$.ea=null
$.aO=null
$.o0=null
$.nZ=null
$.ah=null
$.bj=null
$.aX=null
$.aY=null
$.iS=null
$.aI=null
$.cc=null
$.bU=null
$.dp=null
$.cw=null
$.bV=null
$.dn=null
$.bW=null
$.f6=null
$.o_=null
$.f0=null
$.bB=null
$.bb=null
$.am=null
$.e5=null
$.ds=null
$.o1=null
$.f2=null
$.f1=null
$.po=null
$.bc=null
$.pr=null
$.pl=null
$.t_=null
$.e6=null
$.bi=null
$.bL=null
$.bK=null
$.eb=null
$.pn=null
$.pq=null
$.rZ=null
$.iQ=null
$.iR=null
$.dt=null
$.t9=null
$.t2=null
$.t3=null
$.t4=null
$.t5=null
$.t6=null
$.t7=null
$.t8=null
$.tb=null
$.tc=null
$.td=null
$.te=null
$.tf=null
$.tg=null
$.ta=null
$.u1="JACK"
$.u6="PM"
$.u2="JS"
$.u0="HP"
$.ub="YD"
$.u8="SI"
$.u9="SU"
$.u3="ME"
$.u7="RB"
$.tZ="GN"
$.u4="MP"
$.tX="AR"
$.u5="PE"
$.tY="DP"
$.ua="WV"
$.u_="HB"
$.k="PLAYER1TAG"
$.da="PLAYER2TAG"
$.n="DENIZENTAG"
$.m="CONSORTTAG"
$.A="CONSORTSOUNDTAG"
$.ae="MCGUFFINTAG"
$.a5="TAGPHYSICALMCGUFFIN"
$.aG="TAGWEAPON"
$.uG=null
$.uS=null
$.uA=null
$.uD=null
$.uJ=null
$.uN=null
$.uL=null
$.uV=null
$.uU=null
$.uM=null
$.uX=null
$.uI=null
$.uW=null
$.uQ=null
$.uO=null
$.uR=null
$.uC=null
$.uB=null
$.oy=null
$.uK=null
$.uH=null
$.uT=null
$.uE=null
$.uF=null
$.uP=null
$.uY=null
$.v5=13
$.a7=3
$.aD=2
$.ab=1
$.eh=null
$.fn=null
$.pE=null
$.tM=null
$.tK=null
$.tu=null
$.tJ=null
$.tz=null
$.tv=null
$.tI=null
$.tP=null
$.tr=null
$.pB=null
$.o9=null
$.ak=null
$.tp=null
$.jq=null
$.tG=null
$.pD=null
$.jk=null
$.pz=null
$.tA=null
$.dw=null
$.cC=null
$.oc=null
$.tQ=null
$.tN=null
$.tL=null
$.pI=null
$.oa=null
$.a0=null
$.tx=null
$.ob=null
$.cZ=null
$.pL=null
$.ar=null
$.aB=null
$.dA=null
$.a1=null
$.ai=null
$.cD=null
$.b0=null
$.oe=null
$.d0=null
$.ef=null
$.fj=null
$.dx=null
$.jl=null
$.jr=null
$.ad=null
$.d_=null
$.bg=null
$.dy=null
$.aZ=null
$.jm=null
$.fl=null
$.ce=null
$.d1=null
$.bN=null
$.bD=null
$.bs=null
$.fk=null
$.b_=null
$.eg=null
$.bY=null
$.as=null
$.jo=null
$.aV=null
$.ei=null
$.cA=null
$.bt=null
$.dz=null
$.b1=null
$.bf=null
$.aS=null
$.aq=null
$.bm=null
$.cB=null
$.bZ=null
$.cd=null
$.aU=null
$.aA=null
$.w=null
$.S=null
$.av=null
$.ap=null
$.ay=null
$.b5=null
$.to=null
$.jn=null
$.ts=null
$.py=null
$.od=null
$.pJ=null
$.pw=null
$.pG=null
$.of=null
$.fm=null
$.oh=null
$.tE=null
$.ee=null
$.tC=null
$.tD=null
$.tw=null
$.pH=null
$.jp=null
$.tF=null
$.o7=null
$.pK=null
$.oi=null
$.tt=null
$.ty=null
$.og=null
$.pC=null
$.oj=null
$.pF=null
$.tH=null
$.tB=null
$.tq=null
$.tO=null
$.pA=null
$.o8=null
$.px=null
$.cb=3
$.p9=!1
$.dv="OWNER"
$.oA=null
$.cm=null
$.cM=null
$.b2=null
$.bF=null
$.aC=null
$.c1=null
$.dJ=null
$.dK=null
$.bP=null
$.aH=null})();(function lazyInitializers(){lazy($,"pd","$get$pd",function(){return H.qs("_$dart_dartClosure")})
lazy($,"on","$get$on",function(){return H.qs("_$dart_js")})
lazy($,"pu","$get$pu",function(){return H.tm()})
lazy($,"pv","$get$pv",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.pk
$.pk=t+1
t="expando$key$"+t}return new P.is(null,t,[P.a3])})
lazy($,"q0","$get$q0",function(){return H.co(H.lW({
toString:function(){return"$receiver$"}}))})
lazy($,"q1","$get$q1",function(){return H.co(H.lW({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"q2","$get$q2",function(){return H.co(H.lW(null))})
lazy($,"q3","$get$q3",function(){return H.co(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"q7","$get$q7",function(){return H.co(H.lW(void 0))})
lazy($,"q8","$get$q8",function(){return H.co(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"q5","$get$q5",function(){return H.co(H.q6(null))})
lazy($,"q4","$get$q4",function(){return H.co(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"qa","$get$qa",function(){return H.co(H.q6(void 0))})
lazy($,"q9","$get$q9",function(){return H.co(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"oH","$get$oH",function(){return P.v9()})
lazy($,"ed","$get$ed",function(){var t,s
t=P.c_
s=new P.b3(0,P.v8(),null,[t])
s.eA(null,t)
return s})
lazy($,"eL","$get$eL",function(){return[]})
lazy($,"c8","$get$c8",function(){return P.cg(P.a3,L.cs)})
lazy($,"o5","$get$o5",function(){return P.cg(P.O,Z.it)})
lazy($,"bM","$get$bM",function(){return P.cg(P.a3,B.cz)})
lazy($,"pN","$get$pN",function(){return H.a([],[A.V])})
lazy($,"ck","$get$ck",function(){return P.cg(P.a3,T.cJ)})
lazy($,"qu","$get$qu",function(){return A.pX(null)})
lazy($,"pZ","$get$pZ",function(){return H.a([new G.lb(0,H.a([],[P.O]))],[G.fL])})
lazy($,"pM","$get$pM",function(){return P.bE(null,null,null,G.U)})
lazy($,"b4","$get$b4",function(){return F.tV("ColourPicker",!1)})
lazy($,"eT","$get$eT",function(){return P.bE(null,null,null,E.e0)})
lazy($,"pb","$get$pb",function(){return P.uy("Edge\\/\\d+",!0,!1)})
lazy($,"iM","$get$iM",function(){return P.bE(null,null,null,E.cV)})
lazy($,"os","$get$os",function(){return A.bA(255,0,255,255)})
lazy($,"oB","$get$oB",function(){return H.a([],[D.cL])})
lazy($,"nF","$get$nF",function(){return A.pX(null)})})()
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
mangledGlobalNames:{a3:"int",x:"double",bS:"num",O:"String",cp:"bool",c_:"Null",a9:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cp,args:[[P.a9,E.fd]]},{func:1,v:true},{func:1,v:true,args:[P.aw]},{func:1,v:true,opt:[W.B]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.aw],opt:[P.cK]},{func:1,ret:W.cv,args:[P.a3]},{func:1,v:true,opt:[P.cp]},{func:1,v:true,args:[,P.cK]},{func:1,v:true,args:[P.O]},{func:1,ret:P.O,args:[P.a3]},{func:1,ret:W.aT,args:[P.a3]},{func:1,v:true,args:[W.aJ]},{func:1,v:true,args:[[P.W,E.aW],P.O]},{func:1,ret:P.a3,args:[P.aL,P.aL]}],
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
setOrUpdateInterceptorsByTag({CanvasGradient:J.Z,CanvasPattern:J.Z,Client:J.Z,MediaError:J.Z,MediaSession:J.Z,PositionError:J.Z,PushMessageData:J.Z,WindowClient:J.Z,SVGAnimatedLength:J.Z,SVGAnimatedLengthList:J.Z,SVGAnimatedNumber:J.Z,SVGAnimatedNumberList:J.Z,SVGAnimatedString:J.Z,SQLError:J.Z,ArrayBuffer:H.dG,ArrayBufferView:H.d7,DataView:H.k6,Float32Array:H.k7,Float64Array:H.k8,Int16Array:H.k9,Int32Array:H.ka,Int8Array:H.kb,Uint16Array:H.kc,Uint32Array:H.kd,Uint8ClampedArray:H.fB,CanvasPixelArray:H.fB,Uint8Array:H.ke,HTMLBRElement:W.ac,HTMLBaseElement:W.ac,HTMLContentElement:W.ac,HTMLDListElement:W.ac,HTMLDataListElement:W.ac,HTMLDetailsElement:W.ac,HTMLDialogElement:W.ac,HTMLDivElement:W.ac,HTMLHRElement:W.ac,HTMLHeadElement:W.ac,HTMLHeadingElement:W.ac,HTMLHtmlElement:W.ac,HTMLLabelElement:W.ac,HTMLLegendElement:W.ac,HTMLModElement:W.ac,HTMLOptGroupElement:W.ac,HTMLParagraphElement:W.ac,HTMLPictureElement:W.ac,HTMLPreElement:W.ac,HTMLQuoteElement:W.ac,HTMLShadowElement:W.ac,HTMLSpanElement:W.ac,HTMLTableCaptionElement:W.ac,HTMLTableCellElement:W.ac,HTMLTableDataCellElement:W.ac,HTMLTableHeaderCellElement:W.ac,HTMLTableColElement:W.ac,HTMLTableElement:W.ac,HTMLTableRowElement:W.ac,HTMLTableSectionElement:W.ac,HTMLTemplateElement:W.ac,HTMLTitleElement:W.ac,HTMLTrackElement:W.ac,HTMLUListElement:W.ac,HTMLUnknownElement:W.ac,HTMLDirectoryElement:W.ac,HTMLFontElement:W.ac,HTMLFrameElement:W.ac,HTMLMarqueeElement:W.ac,HTMLElement:W.ac,HTMLAnchorElement:W.h9,HTMLAreaElement:W.ha,Blob:W.dg,HTMLBodyElement:W.hh,HTMLButtonElement:W.hk,HTMLCanvasElement:W.hm,CanvasRenderingContext2D:W.eS,CDATASection:W.cS,CharacterData:W.cS,Comment:W.cS,ProcessingInstruction:W.cS,Text:W.cS,CSSStyleDeclaration:W.dk,MSStyleCSSProperties:W.dk,CSS2Properties:W.dk,CustomEvent:W.ig,DocumentFragment:W.eY,ShadowRoot:W.eY,DOMError:W.eZ,FileError:W.eZ,DOMException:W.ii,Element:W.cv,HTMLEmbedElement:W.ip,ErrorEvent:W.iq,AnimationEvent:W.B,AnimationPlayerEvent:W.B,ApplicationCacheErrorEvent:W.B,AutocompleteErrorEvent:W.B,BeforeInstallPromptEvent:W.B,BeforeUnloadEvent:W.B,BlobEvent:W.B,ClipboardEvent:W.B,CloseEvent:W.B,DeviceLightEvent:W.B,DeviceMotionEvent:W.B,DeviceOrientationEvent:W.B,ExtendableEvent:W.B,ExtendableMessageEvent:W.B,FetchEvent:W.B,FontFaceSetLoadEvent:W.B,GamepadEvent:W.B,GeofencingEvent:W.B,HashChangeEvent:W.B,InstallEvent:W.B,MediaEncryptedEvent:W.B,MediaKeyMessageEvent:W.B,MediaQueryListEvent:W.B,MediaStreamEvent:W.B,MediaStreamTrackEvent:W.B,MessageEvent:W.B,MIDIConnectionEvent:W.B,MIDIMessageEvent:W.B,NotificationEvent:W.B,PageTransitionEvent:W.B,PopStateEvent:W.B,PresentationConnectionAvailableEvent:W.B,PresentationConnectionCloseEvent:W.B,ProgressEvent:W.B,PromiseRejectionEvent:W.B,PushEvent:W.B,RelatedEvent:W.B,RTCDataChannelEvent:W.B,RTCDTMFToneChangeEvent:W.B,RTCIceCandidateEvent:W.B,RTCPeerConnectionIceEvent:W.B,SecurityPolicyViolationEvent:W.B,ServicePortConnectEvent:W.B,ServiceWorkerMessageEvent:W.B,SpeechRecognitionEvent:W.B,StorageEvent:W.B,SyncEvent:W.B,TrackEvent:W.B,TransitionEvent:W.B,WebKitTransitionEvent:W.B,ResourceProgressEvent:W.B,USBConnectionEvent:W.B,IDBVersionChangeEvent:W.B,AudioProcessingEvent:W.B,OfflineAudioCompletionEvent:W.B,WebGLContextEvent:W.B,Event:W.B,InputEvent:W.B,MediaStream:W.e2,EventTarget:W.e2,HTMLFieldSetElement:W.iT,File:W.aT,FileList:W.du,FileReader:W.f9,HTMLFormElement:W.fc,HTMLIFrameElement:W.jc,ImageData:W.cY,HTMLImageElement:W.jd,HTMLInputElement:W.ff,HTMLKeygenElement:W.jA,HTMLLIElement:W.jC,HTMLLinkElement:W.jG,HTMLMapElement:W.jO,HTMLAudioElement:W.en,HTMLMediaElement:W.en,HTMLVideoElement:W.en,HTMLMenuElement:W.jT,HTMLMenuItemElement:W.jU,MessagePort:W.jV,HTMLMetaElement:W.jW,HTMLMeterElement:W.jX,MouseEvent:W.aJ,DragEvent:W.aJ,PointerEvent:W.aJ,WheelEvent:W.aJ,Navigator:W.kf,NavigatorUserMediaError:W.kg,Document:W.d8,HTMLDocument:W.d8,XMLDocument:W.d8,Node:W.d8,HTMLOListElement:W.kh,HTMLObjectElement:W.ki,HTMLOptionElement:W.kk,HTMLOutputElement:W.kn,HTMLParamElement:W.kq,HTMLProgressElement:W.kx,HTMLScriptElement:W.kV,HTMLSelectElement:W.cl,HTMLSlotElement:W.l0,HTMLSourceElement:W.l5,SpeechRecognitionError:W.l8,SpeechSynthesisEvent:W.l9,HTMLStyleElement:W.lE,HTMLTextAreaElement:W.lN,CompositionEvent:W.c2,FocusEvent:W.c2,KeyboardEvent:W.c2,TextEvent:W.c2,TouchEvent:W.c2,SVGZoomEvent:W.c2,UIEvent:W.c2,Window:W.fQ,DOMWindow:W.fQ,Attr:W.me,ClientRect:W.mi,DocumentType:W.mm,HTMLFrameSetElement:W.mF,ServiceWorker:W.n6,SVGAElement:P.h7,SVGAnimateElement:P.cQ,SVGAnimateMotionElement:P.cQ,SVGAnimateTransformElement:P.cQ,SVGAnimationElement:P.cQ,SVGSetElement:P.cQ,SVGFEBlendElement:P.iu,SVGFEColorMatrixElement:P.iv,SVGFEComponentTransferElement:P.iw,SVGFECompositeElement:P.ix,SVGFEConvolveMatrixElement:P.iy,SVGFEDiffuseLightingElement:P.iz,SVGFEDisplacementMapElement:P.iA,SVGFEFloodElement:P.iB,SVGFEGaussianBlurElement:P.iC,SVGFEImageElement:P.iD,SVGFEMergeElement:P.iE,SVGFEMorphologyElement:P.iF,SVGFEOffsetElement:P.iG,SVGFEPointLightElement:P.iH,SVGFESpecularLightingElement:P.iI,SVGFESpotLightElement:P.iJ,SVGFETileElement:P.iK,SVGFETurbulenceElement:P.iL,SVGFilterElement:P.iX,SVGForeignObjectElement:P.j_,SVGCircleElement:P.bX,SVGEllipseElement:P.bX,SVGLineElement:P.bX,SVGPathElement:P.bX,SVGPolygonElement:P.bX,SVGPolylineElement:P.bX,SVGGeometryElement:P.bX,SVGClipPathElement:P.cy,SVGDefsElement:P.cy,SVGGElement:P.cy,SVGSwitchElement:P.cy,SVGGraphicsElement:P.cy,SVGImageElement:P.je,SVGMarkerElement:P.jQ,SVGMaskElement:P.jR,SVGPatternElement:P.kr,SVGRectElement:P.kG,SVGScriptElement:P.kW,SVGStyleElement:P.lF,SVGDescElement:P.b6,SVGDiscardElement:P.b6,SVGFEDistantLightElement:P.b6,SVGFEFuncAElement:P.b6,SVGFEFuncBElement:P.b6,SVGFEFuncGElement:P.b6,SVGFEFuncRElement:P.b6,SVGFEMergeNodeElement:P.b6,SVGMetadataElement:P.b6,SVGStopElement:P.b6,SVGTitleElement:P.b6,SVGComponentTransferFunctionElement:P.b6,SVGElement:P.b6,SVGSVGElement:P.lG,SVGSymbolElement:P.lI,SVGTextContentElement:P.fN,SVGTextPathElement:P.lO,SVGTSpanElement:P.ex,SVGTextElement:P.ex,SVGTextPositioningElement:P.ex,SVGUseElement:P.lY,SVGViewElement:P.lZ,SVGLinearGradientElement:P.eE,SVGRadialGradientElement:P.eE,SVGGradientElement:P.eE,SVGCursorElement:P.n3,SVGFEDropShadowElement:P.n4,SVGMPathElement:P.n5})
setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,Client:true,MediaError:true,MediaSession:true,PositionError:true,PushMessageData:true,WindowClient:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CustomEvent:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MediaStream:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,HTMLFormElement:true,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,MessagePort:true,HTMLMetaElement:true,HTMLMeterElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLProgressElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSourceElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLStyleElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,HTMLFrameSetElement:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGRectElement:true,SVGScriptElement:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.fy.$nativeSuperclassTag="ArrayBufferView"
H.eo.$nativeSuperclassTag="ArrayBufferView"
H.eq.$nativeSuperclassTag="ArrayBufferView"
H.fz.$nativeSuperclassTag="ArrayBufferView"
H.ep.$nativeSuperclassTag="ArrayBufferView"
H.er.$nativeSuperclassTag="ArrayBufferView"
H.fA.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.qy(A.qz(),b)},[])
else (function(b){H.qy(A.qz(),b)})([])})})()
//# sourceMappingURL=stat_data_review.dart.js.map
