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
a[c]=function(){a[c]=function(){H.tl(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.mB"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.mB"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.mB(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={mg:function mg(a){this.a=a},
dT:function(a,b,c,d){if(!!J.ai(a).$isa0)return new H.eu(a,b,[c,d])
return new H.dS(a,b,[c,d])},
me:function(){return new P.co("No element")},
qt:function(){return new P.co("Too many elements")},
qs:function(){return new P.co("Too few elements")},
fi:function(a,b,c,d){if(c-b<=32)H.rw(a,b,c,d)
else H.rv(a,b,c,d)},
rw:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.bn(a);t<=c;++t){r=s.F(a,t)
q=t
while(!0){if(!(q>b&&J.bw(d.$2(s.F(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.F(a,p))
q=p}s.i(a,q,r)}},
rv:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.b.al(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.b.al(a3+a4,2)
p=q-t
o=q+t
n=J.bn(a2)
m=n.F(a2,s)
l=n.F(a2,p)
k=n.F(a2,q)
j=n.F(a2,o)
i=n.F(a2,r)
if(J.bw(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.bw(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.bw(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.bw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bw(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.bw(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.bw(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.bw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.bw(a5.$2(j,i),0)){h=i
i=j
j=h}n.i(a2,s,m)
n.i(a2,q,k)
n.i(a2,r,i)
n.i(a2,p,n.F(a2,a3))
n.i(a2,o,n.F(a2,a4))
g=a3+1
f=a4-1
if(J.b_(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.F(a2,e)
c=a5.$2(d,l)
b=J.ai(c)
if(b.a6(c,0))continue
if(b.aX(c,0)){if(e!==g){n.i(a2,e,n.F(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.F(a2,f),l)
b=J.ej(c)
if(b.aW(c,0)){--f
continue}else{a=f-1
if(b.aX(c,0)){n.i(a2,e,n.F(a2,g))
a0=g+1
n.i(a2,g,n.F(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.F(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.F(a2,e)
if(J.fE(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.F(a2,g))
n.i(a2,g,d)}++g}else if(J.bw(a5.$2(d,j),0))for(;!0;)if(J.bw(a5.$2(n.F(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fE(a5.$2(n.F(a2,f),l),0)){n.i(a2,e,n.F(a2,g))
a0=g+1
n.i(a2,g,n.F(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.F(a2,f))
n.i(a2,f,d)}f=a
break}}a1=!1}b=g-1
n.i(a2,a3,n.F(a2,b))
n.i(a2,b,l)
b=f+1
n.i(a2,a4,n.F(a2,b))
n.i(a2,b,j)
H.fi(a2,a3,g-2,a5)
H.fi(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b_(a5.$2(n.F(a2,g),l),0);)++g
for(;J.b_(a5.$2(n.F(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.F(a2,e)
if(J.b_(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.F(a2,g))
n.i(a2,g,d)}++g}else if(J.b_(a5.$2(d,j),0))for(;!0;)if(J.b_(a5.$2(n.F(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.fE(a5.$2(n.F(a2,f),l),0)){n.i(a2,e,n.F(a2,g))
a0=g+1
n.i(a2,g,n.F(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.F(a2,f))
n.i(a2,f,d)}f=a
break}}H.fi(a2,g,f,a5)}else H.fi(a2,g,f,a5)},
a0:function a0(){},
cF:function cF(){},
f0:function f0(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
dS:function dS(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eu:function eu(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
f1:function f1(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dg:function dg(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
bS:function bS(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fp:function fp(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eE:function eE(){},
fz:function(a,b){var t=a.bd(b)
if(!u.globalState.d.cy)u.globalState.f.bl()
return t},
ol:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.ai(s).$isa4)throw H.S(P.mQ("Arguments to main must be a List: "+H.v(s)))
u.globalState=new H.l0(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ni()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.kB(P.mk(null,H.cR),0)
r=P.a3
s.z=new H.l(0,null,null,null,null,null,0,[r,H.dl])
s.ch=new H.l(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.l_()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.pV,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.rO)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.bt(null,null,null,r)
p=new H.dj(0,null,!1)
o=new H.dl(s,new H.l(0,null,null,null,null,null,0,[r,H.dj]),q,u.createNewIsolate(),p,new H.bZ(H.lI()),new H.bZ(H.lI()),!1,!1,[],P.bt(null,null,null,null),null,null,!1,!0,P.bt(null,null,null,null))
q.j(0,0)
o.cg(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.dq(a,{func:1,args:[,]}))o.bd(new H.lJ(t,a))
else if(H.dq(a,{func:1,args:[,,]}))o.bd(new H.lK(t,a))
else o.bd(a)
u.globalState.f.bl()},
rO:function(a){var t=P.dR(["command","print","msg",a])
return new H.bU(!0,P.eb(null,P.a3)).as(t)},
pX:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.pY()
return},
pY:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.S(new P.b7("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.S(new P.b7('Cannot extract URI from "'+t+'"'))},
pV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.cQ(!0,[]).aL(b.data)
s=J.bn(t)
switch(s.F(t,"command")){case"start":u.globalState.b=s.F(t,"id")
r=s.F(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.F(t,"args")
o=new H.cQ(!0,[]).aL(s.F(t,"msg"))
n=s.F(t,"isSpawnUri")
m=s.F(t,"startPaused")
l=new H.cQ(!0,[]).aL(s.F(t,"replyTo"))
s=u.globalState.a++
k=P.a3
j=P.bt(null,null,null,k)
i=new H.dj(0,null,!1)
h=new H.dl(s,new H.l(0,null,null,null,null,null,0,[k,H.dj]),j,u.createNewIsolate(),i,new H.bZ(H.lI()),new H.bZ(H.lI()),!1,!1,[],P.bt(null,null,null,null),null,null,!1,!0,P.bt(null,null,null,null))
j.j(0,0)
h.cg(0,i)
u.globalState.f.a.aI(new H.cR(h,new H.hU(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bl()
break
case"spawn-worker":break
case"message":if(s.F(t,"port")!=null)J.dv(s.F(t,"port"),s.F(t,"msg"))
u.globalState.f.bl()
break
case"close":u.globalState.ch.aq(0,$.$get$nj().F(0,a))
a.terminate()
u.globalState.f.bl()
break
case"log":H.pU(s.F(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.dR(["command","print","msg",t])
k=new H.bU(!0,P.eb(null,P.a3)).as(k)
s.toString
self.postMessage(k)}else P.mJ(s.F(t,"msg"))
break
case"error":throw H.S(s.F(t,"msg"))}},
pU:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.dR(["command","log","msg",a])
r=new H.bU(!0,P.eb(null,P.a3)).as(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.b9(q)
t=H.bH(q)
s=P.hb(t)
throw H.S(s)}},
pW:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.nF=$.nF+("_"+s)
$.nG=$.nG+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.dv(f,["spawned",new H.dm(s,r),q,t.r])
r=new H.hV(a,b,c,d,t)
if(e===!0){t.cK(q,q)
u.globalState.f.a.aI(new H.cR(t,r,"start isolate"))}else r.$0()},
rB:function(a,b){var t=new H.k5(!0,!1,null)
t.dw(a,b)
return t},
rR:function(a){return new H.cQ(!0,[]).aL(new H.bU(!1,P.eb(null,P.a3)).as(a))},
lJ:function lJ(a,b){this.a=a
this.b=b},
lK:function lK(a,b){this.a=a
this.b=b},
l0:function l0(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
dl:function dl(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
kV:function kV(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
l_:function l_(){},
hU:function hU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hV:function hV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kr:function kr(){},
dm:function dm(b,a){this.b=b
this.a=a},
l2:function l2(a,b){this.a=a
this.b=b},
ee:function ee(b,c,a){this.b=b
this.c=c
this.a=a},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
bZ:function bZ(a){this.a=a},
bU:function bU(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
t7:function(a){return u.types[a]},
te:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.ai(a).$isbC},
v:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aY(a)
if(typeof t!=="string")throw H.S(H.bV(a))
return t},
r2:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.ji(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
cG:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
nE:function(a,b){return b.$1(a)},
qL:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.nE(a,c)
if(3>=t.length)return H.a6(t,3)
s=t[3]
if(b<2||b>36)throw H.S(P.cm(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.e.cj(q,o)|32)>r)return H.nE(a,c)}return parseInt(a,b)},
nH:function(a){var t,s,r,q,p,o,n,m
t=J.ai(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.w||!!J.ai(a).$iscO){p=C.p(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.cj(q,0)===36)q=C.e.bF(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.mH(H.fD(a),0,null),u.mangledGlobalNames)},
j7:function(a){return"Instance of '"+H.nH(a)+"'"},
mm:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.S(H.bV(a))
return a[b]},
nI:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.S(H.bV(a))
a[b]=c},
dr:function(a){throw H.S(H.bV(a))},
a6:function(a,b){if(a==null)J.dt(a)
throw H.S(H.aN(a,b))},
aN:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bY(!0,b,"index",null)
t=J.dt(a)
if(!(b<0)){if(typeof t!=="number")return H.dr(t)
s=b>=t}else s=!0
if(s)return P.eJ(b,a,"index",null,t)
return P.jc(b,"index",null)},
bV:function(a){return new P.bY(!0,a,null,null)},
S:function(a){var t
if(a==null)a=new P.f9()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.on})
t.name=""}else t.toString=H.on
return t},
on:function(){return J.aY(this.dartException)},
aG:function(a){throw H.S(a)},
cU:function(a){throw H.S(new P.by(a))},
c7:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.k9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ka:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
nV:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
mi:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ia(a,s,t?null:b.receiver)},
b9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.lM(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.cG(r,16)&8191)===10)switch(q){case 438:return t.$1(H.mi(H.v(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.v(s)+" (Error "+q+")"
return t.$1(new H.f8(p,null))}}if(a instanceof TypeError){o=$.$get$nP()
n=$.$get$nQ()
m=$.$get$nR()
l=$.$get$nS()
k=$.$get$nW()
j=$.$get$nX()
i=$.$get$nU()
$.$get$nT()
h=$.$get$nZ()
g=$.$get$nY()
f=o.aC(s)
if(f!=null)return t.$1(H.mi(s,f))
else{f=n.aC(s)
if(f!=null){f.method="call"
return t.$1(H.mi(s,f))}else{f=m.aC(s)
if(f==null){f=l.aC(s)
if(f==null){f=k.aC(s)
if(f==null){f=j.aC(s)
if(f==null){f=i.aC(s)
if(f==null){f=l.aC(s)
if(f==null){f=h.aC(s)
if(f==null){f=g.aC(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.f8(s,f==null?null:f.method))}}return t.$1(new H.kb(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.fk()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.bY(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.fk()
return a},
bH:function(a){var t
if(a==null)return new H.fx(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.fx(a,null)},
ti:function(a){if(a==null||typeof a!='object')return J.bX(a)
else return H.cG(a)},
t5:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
td:function(a,b,c,d,e,f,g){switch(c){case 0:return H.fz(b,new H.lz(a))
case 1:return H.fz(b,new H.lA(a,d))
case 2:return H.fz(b,new H.lB(a,d,e))
case 3:return H.fz(b,new H.lC(a,d,e,f))
case 4:return H.fz(b,new H.lD(a,d,e,f,g))}throw H.S(P.hb("Unsupported number of arguments for wrapped closure"))},
ei:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.td)
a.$identity=t
return t},
po:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.ai(c).$isa4){t.$reflectionInfo=c
r=H.r2(t).r}else r=c
q=d?Object.create(new H.jL().constructor.prototype):Object.create(new H.dx(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.c_
$.c_=J.ds(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.mW(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.t7,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.mV:H.lP
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.S("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.mW(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
pl:function(a,b,c,d){var t=H.lP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
mW:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.pn(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.pl(s,!q,t,b)
if(s===0){q=$.c_
$.c_=J.ds(q,1)
o="self"+H.v(q)
q="return function(){var "+o+" = this."
p=$.dy
if(p==null){p=H.fU("self")
$.dy=p}return new Function(q+H.v(p)+";return "+o+"."+H.v(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.c_
$.c_=J.ds(q,1)
n+=H.v(q)
q="return function("+n+"){return this."
p=$.dy
if(p==null){p=H.fU("self")
$.dy=p}return new Function(q+H.v(p)+"."+H.v(t)+"("+n+");}")()},
pm:function(a,b,c,d){var t,s
t=H.lP
s=H.mV
switch(b?-1:a){case 0:throw H.S(new H.jp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
pn:function(a,b){var t,s,r,q,p,o,n,m
t=H.pk()
s=$.mU
if(s==null){s=H.fU("receiver")
$.mU=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.pm(q,!o,r,b)
if(q===1){s="return function(){return this."+H.v(t)+"."+H.v(r)+"(this."+H.v(s)+");"
o=$.c_
$.c_=J.ds(o,1)
return new Function(s+H.v(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.v(t)+"."+H.v(r)+"(this."+H.v(s)+", "+m+");"
o=$.c_
$.c_=J.ds(o,1)
return new Function(s+H.v(o)+"}")()},
mB:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.ai(c).$isa4){c.fixed$length=Array
t=c}else t=c
return H.po(a,b,t,!!d,e,f)},
lP:function(a){return a.a},
mV:function(a){return a.c},
pk:function(){var t=$.dy
if(t==null){t=H.fU("self")
$.dy=t}return t},
fU:function(a){var t,s,r,q,p
t=new H.dx("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oe:function(a){var t=J.ai(a)
return"$S" in t?t.$S():null},
dq:function(a,b){var t
if(a==null)return!1
t=H.oe(a)
return t==null?!1:H.mG(t,b)},
tl:function(a){throw H.S(new P.h2(a))},
lI:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
of:function(a){return u.getIsolateTag(a)},
aF:function(a){return new H.cp(a,null)},
a:function(a,b){a.$ti=b
return a},
fD:function(a){if(a==null)return
return a.$ti},
og:function(a,b){return H.mK(a["$as"+H.v(b)],H.fD(a))},
an:function(a,b,c){var t=H.og(a,b)
return t==null?null:t[c]},
y:function(a,b){var t=H.fD(a)
return t==null?null:t[b]},
bW:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.mH(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.v(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bW(t,b)
return H.rS(a,b)}return"unknown-reified-type"},
rS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bW(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bW(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bW(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.t4(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bW(l[j],b)+(" "+H.v(j))}q+="}"}return"("+q+") => "+t},
mH:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.e3("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.a8=p+", "
o=a[s]
if(o!=null)q=!1
p=t.a8+=H.bW(o,c)}return q?"":"<"+t.M(0)+">"},
lu:function(a){var t,s
if(a instanceof H.d_){t=H.oe(a)
if(t!=null)return H.bW(t,null)}s=J.ai(a).constructor.builtin$cls
if(a==null)return s
return s+H.mH(a.$ti,0,null)},
mK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
fB:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.fD(a)
s=J.ai(a)
if(s[b]==null)return!1
return H.oc(H.mK(s[d],t),c)},
oc:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.bo(a[s],b[s]))return!1
return!0},
mC:function(a,b,c){return a.apply(b,H.og(b,c))},
t2:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ay"||b.builtin$cls==="bO"
if(b==null)return!0
t=H.fD(a)
a=J.ai(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.mG(r.apply(a,null),b)}return H.bo(s,b)},
bo:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bO")return!0
if('func' in b)return H.mG(a,b)
if('func' in a)return b.builtin$cls==="tr"||b.builtin$cls==="ay"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.bW(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.oc(H.mK(o,t),r)},
ob:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.bo(t,p)||H.bo(p,t)))return!1}return!0},
rY:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.bo(p,o)||H.bo(o,p)))return!1}return!0},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.bo(t,s)||H.bo(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.ob(r,q,!1))return!1
if(!H.ob(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.bo(i,h)||H.bo(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.bo(i,h)||H.bo(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.bo(i,h)||H.bo(h,i)))return!1}}return H.rY(a.named,b.named)},
tB:function(a){var t=$.mE
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
tA:function(a){return H.cG(a)},
tz:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tf:function(a){var t,s,r,q,p,o
t=$.mE.$1(a)
s=$.lr[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ly[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.oa.$2(a,t)
if(t!=null){s=$.lr[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ly[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.mI(r)
$.lr[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ly[t]=r
return r}if(p==="-"){o=H.mI(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.oi(a,r)
if(p==="*")throw H.S(new P.fm(t))
if(u.leafTags[t]===true){o=H.mI(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.oi(a,r)},
oi:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.lH(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
mI:function(a){return J.lH(a,!1,null,!!a.$isbC)},
th:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.lH(t,!1,null,!!t.$isbC)
else return J.lH(t,c,null,null)},
tb:function(){if(!0===$.mF)return
$.mF=!0
H.tc()},
tc:function(){var t,s,r,q,p,o,n,m
$.lr=Object.create(null)
$.ly=Object.create(null)
H.ta()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.oj.$1(p)
if(o!=null){n=H.th(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ta:function(){var t,s,r,q,p,o,n
t=C.y()
t=H.dp(C.z,H.dp(C.A,H.dp(C.o,H.dp(C.o,H.dp(C.C,H.dp(C.B,H.dp(C.D(C.p),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.mE=new H.lv(p)
$.oa=new H.lw(o)
$.oj=new H.lx(n)},
dp:function(a,b){return a(b)||b},
tk:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ji:function ji(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
k9:function k9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f8:function f8(a,b){this.a=a
this.b=b},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a){this.a=a},
lM:function lM(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
lz:function lz(a){this.a=a},
lA:function lA(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lD:function lD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d_:function d_(){},
jZ:function jZ(){},
jL:function jL(){},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a){this.a=a},
cp:function cp(a,b){this.a=a
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
i9:function i9(a){this.a=a},
ik:function ik(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
il:function il(a,$ti){this.a=a
this.$ti=$ti},
im:function im(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
lx:function lx(a){this.a=a},
dW:function dW(){},
dh:function dh(){},
iK:function iK(){},
f2:function f2(){},
f3:function f3(){},
dX:function dX(){},
dZ:function dZ(){},
f4:function f4(){},
dY:function dY(){},
e_:function e_(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
f5:function f5(){},
iS:function iS(){},
t4:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
tj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ai:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eX.prototype
return J.i8.prototype}if(typeof a=="string")return J.cD.prototype
if(a==null)return J.eY.prototype
if(typeof a=="boolean")return J.i7.prototype
if(a.constructor==Array)return J.cC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cE.prototype
return a}if(a instanceof P.ay)return a
return J.lt(a)},
lH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lt:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.mF==null){H.tb()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.S(new P.fm("Return interceptor for "+H.v(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$mh()]
if(p!=null)return p
p=H.tf(a)
if(p!=null)return p
if(typeof a=="function")return C.E
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,$.$get$mh(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
bn:function(a){if(typeof a=="string")return J.cD.prototype
if(a==null)return a
if(a.constructor==Array)return J.cC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cE.prototype
return a}if(a instanceof P.ay)return a
return J.lt(a)},
fC:function(a){if(a==null)return a
if(a.constructor==Array)return J.cC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cE.prototype
return a}if(a instanceof P.ay)return a
return J.lt(a)},
ej:function(a){if(typeof a=="number")return J.df.prototype
if(a==null)return a
if(!(a instanceof P.ay))return J.cO.prototype
return a},
ls:function(a){if(typeof a=="number")return J.df.prototype
if(typeof a=="string")return J.cD.prototype
if(a==null)return a
if(!(a instanceof P.ay))return J.cO.prototype
return a},
t6:function(a){if(typeof a=="string")return J.cD.prototype
if(a==null)return a
if(!(a instanceof P.ay))return J.cO.prototype
return a},
b8:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cE.prototype
return a}if(a instanceof P.ay)return a
return J.lt(a)},
ds:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ls(a).aG(a,b)},
b_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ai(a).a6(a,b)},
bw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ej(a).aW(a,b)},
fE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ej(a).aX(a,b)},
mL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ls(a).aH(a,b)},
mM:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.te(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).F(a,b)},
oo:function(a,b,c,d){return J.b8(a).dI(a,b,c,d)},
op:function(a,b,c,d){return J.b8(a).e3(a,b,c,d)},
oq:function(a,b,c){return J.ej(a).ae(a,b,c)},
fF:function(a,b){return J.ls(a).aK(a,b)},
fG:function(a,b,c){return J.bn(a).eh(a,b,c)},
or:function(a,b){return J.fC(a).aF(a,b)},
fH:function(a){return J.ej(a).b2(a)},
mN:function(a){return J.b8(a).ged(a)},
ek:function(a){return J.b8(a).gaR(a)},
bX:function(a){return J.ai(a).gag(a)},
lN:function(a){return J.b8(a).gbh(a)},
bx:function(a){return J.fC(a).gaa(a)},
dt:function(a){return J.bn(a).gO(a)},
du:function(a){return J.b8(a).ga4(a)},
os:function(a){return J.b8(a).geI(a)},
ot:function(a){return J.b8(a).geL(a)},
ou:function(a){return J.b8(a).geP(a)},
mO:function(a){return J.ai(a).gaf(a)},
ov:function(a){return J.b8(a).geW(a)},
mP:function(a,b){return J.fC(a).ax(a,b)},
ow:function(a){return J.fC(a).eR(a)},
dv:function(a,b){return J.b8(a).bD(a,b)},
ox:function(a,b){return J.b8(a).sbx(a,b)},
oy:function(a){return J.fC(a).ay(a)},
oz:function(a){return J.t6(a).eY(a)},
aY:function(a){return J.ai(a).M(a)},
a_:function a_(){},
i7:function i7(){},
eY:function eY(){},
dQ:function dQ(){},
j4:function j4(){},
cO:function cO(){},
cE:function cE(){},
cC:function cC($ti){this.$ti=$ti},
mf:function mf($ti){this.$ti=$ti},
fN:function fN(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
df:function df(){},
eX:function eX(){},
i8:function i8(){},
cD:function cD(){}},P={
rE:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.rZ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.ei(new P.kn(t),1)).observe(s,{childList:true})
return new P.km(t,s,r)}else if(self.setImmediate!=null)return P.t_()
return P.t0()},
rF:function(a){++u.globalState.f.b
self.scheduleImmediate(H.ei(new P.ko(a),0))},
rG:function(a){++u.globalState.f.b
self.setImmediate(H.ei(new P.kp(a),0))},
rH:function(a){P.mr(C.n,a)},
o5:function(a,b){if(H.dq(a,{func:1,args:[P.bO,P.bO]})){b.toString
return a}else{b.toString
return a}},
rJ:function(a,b){var t,s,r
b.a=1
try{a.d0(new P.kI(b),new P.kJ(b))}catch(r){t=H.b9(r)
s=H.bH(r)
P.ok(new P.kK(b,t,s))}},
o0:function(a,b){var t,s,r
for(;a.ge_();)a=a.c
t=a.gbR()
s=b.c
if(t){b.c=null
r=b.bv(s)
b.a=a.a
b.c=a.c
P.e8(b,r)}else{b.a=2
b.c=a
a.cA(s)}},
e8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.ek(p)
n=p.gaQ()
s.toString
P.fA(null,null,s,o,n)}return}for(;b.gbU()!=null;b=m){m=b.a
b.a=null
P.e8(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.gcR()||b.gcQ()){k=b.gea()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.ek(p)
n=p.gaQ()
s.toString
P.fA(null,null,s,o,n)
return}j=$.ar
if(j==null?k!=null:j!==k)$.ar=k
else j=null
if(b.gcQ())new P.kO(t,r,q,b).$0()
else if(s){if(b.gcR())new P.kN(r,b,l).$0()}else if(b.geA())new P.kM(t,r,b).$0()
if(j!=null)$.ar=j
s=r.b
if(!!J.ai(s).$isdK){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bv(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.o0(s,i)
return}}i=b.b
b=i.bW()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
rU:function(){var t,s
for(;t=$.dn,t!=null;){$.eg=null
s=t.b
$.dn=s
if(s==null)$.ef=null
t.a.$0()}},
rW:function(){$.mz=!0
try{P.rU()}finally{$.eg=null
$.mz=!1
if($.dn!=null)$.$get$mu().$1(P.od())}},
o9:function(a){var t=new P.fs(a,null)
if($.dn==null){$.ef=t
$.dn=t
if(!$.mz)$.$get$mu().$1(P.od())}else{$.ef.b=t
$.ef=t}},
rV:function(a){var t,s,r
t=$.dn
if(t==null){P.o9(a)
$.eg=$.ef
return}s=new P.fs(a,null)
r=$.eg
if(r==null){s.b=t
$.eg=s
$.dn=s}else{s.b=r.b
r.b=s
$.eg=s
if(s.b==null)$.ef=s}},
ok:function(a){var t=$.ar
if(C.c===t){P.lo(null,null,C.c,a)
return}t.toString
P.lo(null,null,t,t.bZ(a,!0))},
rI:function(a,b,c,d,e,f,g){var t,s
t=$.ar
s=e?1:0
s=new P.e7(a,null,null,null,null,t,s,null,null,[f,g])
s.dA(b,c,d,e,g)
s.dC(a,b,c,d,e,f,g)
return s},
rQ:function(a,b,c){$.ar.toString
a.bn(b,c)},
rC:function(a,b){var t=$.ar
if(t===C.c){t.toString
return P.mr(a,b)}return P.mr(a,t.bZ(b,!0))},
mr:function(a,b){var t=C.b.al(a.a,1000)
return H.rB(t<0?0:t,b)},
rD:function(){return $.ar},
fA:function(a,b,c,d,e){var t={}
t.a=d
P.rV(new P.ln(t,e))},
o6:function(a,b,c,d){var t,s
s=$.ar
if(s===c)return d.$0()
$.ar=c
t=s
try{s=d.$0()
return s}finally{$.ar=t}},
o8:function(a,b,c,d,e){var t,s
s=$.ar
if(s===c)return d.$1(e)
$.ar=c
t=s
try{s=d.$1(e)
return s}finally{$.ar=t}},
o7:function(a,b,c,d,e,f){var t,s
s=$.ar
if(s===c)return d.$2(e,f)
$.ar=c
t=s
try{s=d.$2(e,f)
return s}finally{$.ar=t}},
lo:function(a,b,c,d){var t=C.c!==c
if(t)d=c.bZ(d,!(!t||!1))
P.o9(d)},
kn:function kn(a){this.a=a},
km:function km(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
fu:function fu(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
bT:function bT(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
kH:function kH(a,b){this.a=a
this.b=b},
kL:function kL(a,b){this.a=a
this.b=b},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kP:function kP(a){this.a=a},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a,b){this.a=a
this.b=b},
cM:function cM(){},
jP:function jP(a){this.a=a},
jQ:function jQ(a,b){this.a=a
this.b=b},
jR:function jR(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.b=b},
jO:function jO(){},
bF:function bF(){},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
ft:function ft(){},
kv:function kv(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
kx:function kx(b,c,a){this.b=b
this.c=c
this.a=a},
kw:function kw(){},
l3:function l3(){},
l4:function l4(a,b){this.a=a
this.b=b},
lh:function lh(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
e6:function e6(){},
e7:function e7(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
l1:function l1(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
cX:function cX(a,b){this.a=a
this.b=b},
lm:function lm(){},
ln:function ln(a,b){this.a=a
this.b=b},
l6:function l6(){},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(a,b){this.a=a
this.b=b},
l9:function l9(a,b){this.a=a
this.b=b},
rK:function(a,b){var t=a[b]
return t===a?null:t},
mx:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
mw:function(){var t=Object.create(null)
P.mx(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
mj:function(a,b){return new H.l(0,null,null,null,null,null,0,[a,b])},
nD:function(){return new H.l(0,null,null,null,null,null,0,[null,null])},
dR:function(a){return H.t5(a,new H.l(0,null,null,null,null,null,0,[null,null]))},
eb:function(a,b){return new P.fw(0,null,null,null,null,null,0,[a,b])},
rN:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
e:function(a,b,c,d,e){return new P.kR(0,null,null,null,null,[d,e])},
i6:function(a,b,c){var t,s
if(P.mA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$eh()
s.push(a)
try{P.rT(a,t)}finally{if(0>=s.length)return H.a6(s,-1)
s.pop()}s=P.nO(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eV:function(a,b,c){var t,s,r
if(P.mA(a))return b+"..."+c
t=new P.e3(b)
s=$.$get$eh()
s.push(a)
try{r=t
r.a8=P.nO(r.ga8(),a,", ")}finally{if(0>=s.length)return H.a6(s,-1)
s.pop()}s=t
s.a8=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
mA:function(a){var t,s
for(t=0;s=$.$get$eh(),t<s.length;++t)if(a===s[t])return!0
return!1},
rT:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.bx(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.W())return
q=H.v(t.ga5())
b.push(q)
s+=q.length+2;++r}if(!t.W()){if(r<=5)return
if(0>=b.length)return H.a6(b,-1)
p=b.pop()
if(0>=b.length)return H.a6(b,-1)
o=b.pop()}else{n=t.ga5();++r
if(!t.W()){if(r<=4){b.push(H.v(n))
return}p=H.v(n)
if(0>=b.length)return H.a6(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.ga5();++r
for(;t.W();n=m,m=l){l=t.ga5();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.a6(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.v(n)
p=H.v(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.a6(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
bt:function(a,b,c,d){return new P.kX(0,null,null,null,null,null,0,[d])},
eZ:function(a,b){var t,s
t=P.bt(null,null,null,b)
for(s=J.bx(a);s.W();)t.j(0,s.ga5())
return t},
qu:function(a){var t,s,r
t={}
if(P.mA(a))return"{...}"
s=new P.e3("")
try{$.$get$eh().push(a)
r=s
r.a8=r.ga8()+"{"
t.a=!0
a.cP(0,new P.iu(t,s))
t=s
t.a8=t.ga8()+"}"}finally{t=$.$get$eh()
if(0>=t.length)return H.a6(t,-1)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
mk:function(a,b){var t=new P.io(null,0,0,0,[b])
t.dv(a,b)
return t},
kR:function kR(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kT:function kT(a){this.a=a},
kS:function kS(a,$ti){this.a=a
this.$ti=$ti},
fv:function fv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fw:function fw(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kX:function kX(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kY:function kY(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kU:function kU(){},
de:function de(){},
f_:function f_(){},
e0:function e0(){},
bD:function bD(){},
iu:function iu(a,b){this.a=a
this.b=b},
io:function io(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kZ:function kZ(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
jz:function jz(){},
jy:function jy(){},
nO:function(a,b,c){var t=J.bx(b)
if(!t.W())return a
if(c.length===0){do a+=H.v(t.ga5())
while(t.W())}else{a+=H.v(t.ga5())
for(;t.W();)a=a+c+H.v(t.ga5())}return a},
pr:function(a,b){return J.fF(a,b)},
n8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aY(a)
if(typeof a==="string")return JSON.stringify(a)
return P.pv(a)},
pv:function(a){var t=J.ai(a)
if(!!t.$isd_)return t.M(a)
return H.j7(a)},
mQ:function(a){return new P.bY(!1,null,null,a)},
fM:function(a,b,c){return new P.bY(!0,a,b,c)},
jc:function(a,b,c){return new P.fe(null,null,!0,a,b,"Value not in range")},
cm:function(a,b,c,d,e){return new P.fe(b,c,!0,a,d,"Invalid value")},
nM:function(a,b,c,d,e,f){if(0>a||a>c)throw H.S(P.cm(a,0,c,"start",f))
if(a>b||b>c)throw H.S(P.cm(b,a,c,"end",f))
return b},
eJ:function(a,b,c,d,e){var t=e!=null?e:J.dt(b)
return new P.hR(b,t,!0,a,c,"Index out of range")},
hb:function(a){return new P.kG(a)},
cj:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.bx(a);s.W();)t.push(s.ga5())
if(b)return t
t.fixed$length=Array
return t},
d:function(a,b){var t=P.cj(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
mJ:function(a){H.tj(H.v(a))},
c8:function c8(){},
aH:function aH(){},
Q:function Q(){},
ca:function ca(a){this.a=a},
h7:function h7(){},
h8:function h8(){},
cu:function cu(){},
f9:function f9(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a){this.a=a},
fm:function fm(a){this.a=a},
co:function co(a){this.a=a},
by:function by(a){this.a=a},
iZ:function iZ(){},
fk:function fk(){},
h2:function h2(a){this.a=a},
kG:function kG(a){this.a=a},
hc:function hc(a,bs,$ti){this.a=a
this.bs=bs
this.$ti=$ti},
a3:function a3(){},
P:function P(){},
eW:function eW(){},
a4:function a4(){},
bO:function bO(){},
bI:function bI(){},
ay:function ay(){},
cJ:function cJ(){},
N:function N(){},
e3:function e3(a8){this.a8=a8},
rP:function(a){var t=new P.l5(0,0)
t.dF(a)
return t},
kW:function kW(){},
l5:function l5(a,b){this.a=a
this.b=b},
fI:function fI(){},
cq:function cq(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
hB:function hB(){},
aT:function aT(){},
hQ:function hQ(){},
iv:function iv(){},
iw:function iw(){},
j3:function j3(){},
e2:function e2(){},
aE:function aE(){},
jT:function jT(){},
jV:function jV(){},
cN:function cN(){},
k2:function k2(){},
kc:function kc(){},
kd:function kd(){},
e9:function e9(){},
la:function la(){},
lb:function lb(){},
lc:function lc(){},
lQ:function(){var t=$.n3
if(t==null){t=J.fG(window.navigator.userAgent,"Opera",0)
$.n3=t}return t},
n5:function(){var t=$.n4
if(t==null){t=P.lQ()!==!0&&J.fG(window.navigator.userAgent,"WebKit",0)
$.n4=t}return t},
pt:function(){var t,s
t=$.n0
if(t!=null)return t
s=$.n1
if(s==null){s=J.fG(window.navigator.userAgent,"Firefox",0)
$.n1=s}if(s)t="-moz-"
else{s=$.n2
if(s==null){s=P.lQ()!==!0&&J.fG(window.navigator.userAgent,"Trident/",0)
$.n2=s}if(s)t="-ms-"
else t=P.lQ()===!0?"-o-":"-webkit-"}$.n0=t
return t}},W={
ps:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
pu:function(a,b,c){var t,s
t=document.body
s=(t&&C.l).aA(t,a,b,c)
s.toString
t=new H.bS(new W.bm(s),new W.lp(),[W.ad])
return t.gaZ(t)},
dA:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ov(a)
if(typeof s==="string")t=a.tagName}catch(r){H.b9(r)}return t},
nh:function(a,b,c){var t=document.createElement("img")
return t},
cS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o3:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
o_:function(a,b,c,d,e){var t=W.rX(new W.kF(c))
t=new W.kE(0,a,b,t,!1,[e])
t.dB(a,b,c,!1,e)
return t},
o1:function(a){var t,s
t=document.createElement("a")
s=new W.ld(t,window.location)
s=new W.ea(s)
s.dE(a)
return s},
rL:function(a,b,c,d){return!0},
rM:function(a,b,c,d){var t,s,r,q,p
t=d.gd3()
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
o4:function(){var t=P.N
t=new W.lj(P.eZ(C.f,t),P.bt(null,null,null,t),P.bt(null,null,null,t),P.bt(null,null,null,t),null)
t.dG(null,new H.dg(C.f,new W.lk(),[H.y(C.f,0),null]),["TEMPLATE"],null)
return t},
rX:function(a){var t=$.ar
if(t===C.c)return a
return t.ee(a,!0)},
aa:function aa(){},
fK:function fK(){},
fL:function fL(){},
fR:function fR(){},
em:function em(){},
cY:function cY(){},
fW:function fW(){},
cr:function cr(){},
en:function en(){},
ct:function ct(){},
eK:function eK(){},
h0:function h0(){},
er:function er(){},
es:function es(){},
h3:function h3(){},
et:function et(){},
bf:function bf(){},
lp:function lp(){},
h9:function h9(){},
ha:function ha(){},
a2:function a2(){},
dB:function dB(){},
hz:function hz(){},
hA:function hA(){},
eH:function eH(){},
hF:function hF(){},
hP:function hP(){},
hS:function hS(){},
id:function id(){},
ij:function ij(){},
ip:function ip(){},
it:function it(){},
dU:function dU(){},
ix:function ix(){},
iz:function iz(){},
iA:function iA(){},
dV:function dV(){},
c3:function c3(){},
iT:function iT(){},
iU:function iU(){},
bm:function bm(a){this.a=a},
ad:function ad(){},
f6:function f6(){},
eL:function eL(){},
eN:function eN(){},
iX:function iX(){},
j_:function j_(){},
j2:function j2(){},
fh:function fh(){},
jB:function jB(){},
fj:function fj(){},
jI:function jI(){},
jJ:function jJ(){},
fl:function fl(){},
jW:function jW(){},
jX:function jX(){},
e4:function e4(){},
k1:function k1(){},
bQ:function bQ(){},
fq:function fq(){},
dk:function dk(){},
ku:function ku(){},
ky:function ky(){},
kz:function kz(){},
kQ:function kQ(){},
ec:function ec(){},
eM:function eM(){},
eO:function eO(){},
le:function le(){},
kq:function kq(){},
kA:function kA(a){this.a=a},
kD:function kD(){},
mv:function mv(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
kE:function kE(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
kF:function kF(a){this.a=a},
ea:function ea(a){this.a=a},
d8:function d8(){},
f7:function f7(a){this.a=a},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(){},
lf:function lf(){},
lg:function lg(){},
lj:function lj(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
lk:function lk(){},
li:function li(){},
eF:function eF(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
ck:function ck(){},
ld:function ld(a,b){this.a=a
this.b=b},
fy:function fy(a){this.a=a},
ll:function ll(a){this.a=a}},S={fJ:function fJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fX:function fX(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},ie:function ie(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ir:function ir(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},iE:function iE(m,n,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},jx:function jx(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},L={
pj:function(){var t=$.$get$el()
t=t.gaU(t)
return new H.bS(t,new L.fO(),[H.an(t,"P",0)])},
oA:function(a,b,c,d,e,f,g){var t,s,r
t=P.N
s=A.cs
r=P.a3
r=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
r.h(0,$.L,L.b("#FF9B00"),!0)
r.h(0,$.A,L.b("#FF9B00"),!0)
r.h(0,$.C,L.b("#FF8700"),!0)
r.h(0,$.K,L.b("#7F7F7F"),!0)
r.h(0,$.J,L.b("#727272"),!0)
r.h(0,$.E,L.b("#A3A3A3"),!0)
r.h(0,$.F,L.b("#999999"),!0)
r.h(0,$.D,L.b("#898989"),!0)
r.h(0,$.B,L.b("#EFEFEF"),!0)
r.h(0,$.I,L.b("#DBDBDB"),!0)
r.h(0,$.H,L.b("#C6C6C6"),!0)
r.h(0,$.G,L.b("#ADADAD"),!0)
s=[t]
t=new L.c9(0.01,0.01,0.01,0.5,a,new H.l(0,null,null,null,null,null,0,[X.t,P.Q]),null,"","",!1,b,null,c,d,e,g,f,null,null,!1,!1,!0,1,r,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Blank","Null","Boring","Error"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),P.d(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.r]),H.a([],[A.dz]),Q.p(null,null,A.V))
t.R(a,b,c,d,e,f,g)
return t},
b:function(a){if(C.e.ce(a,"#"))return A.mY(C.e.bF(a,1))
else return A.mY(a)},
fO:function fO(){},
c9:function c9(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(m,n,q,t,u,v,w,A,B,C,E,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
hu:function hu(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
hI:function hI(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
iB:function iB(m,n,q,t,u,v,w,A,B,C,E,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
jb:function jb(m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
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
_.l=l},
jd:function jd(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
je:function je(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
jf:function jf(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
jg:function jg(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
jw:function jw(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
jA:function jA(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},
jY:function jY(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l}},M={fP:function fP(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h1:function h1(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},cv:function cv(){},kj:function kj(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},kk:function kk(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},O={fQ:function fQ(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},hC:function hC(m,n,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},iF:function iF(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},jD:function jD(m,n,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l}},T={fT:function fT(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},fV:function fV(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},hJ:function hJ(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},
ru:function(){var t=$.$get$fg()
t=t.gaU(t)
return new H.bS(t,new T.jq(),[H.an(t,"P",0)])},
r3:function(a,b,c,d,e){var t,s
t=[P.N]
s=H.a([],t)
t=new T.cn("Glitch",0.01,0.01,0.01,s,0.5,a,new H.l(0,null,null,null,null,null,0,[X.t,P.Q]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.p(null,null,A.V),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.r]),H.a([],[A.dz]),1)
t.a7(a,b,c,d,e)
return t},
jq:function jq(){},
cn:function cn(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2}},U={fZ:function fZ(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},h5:function h5(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,aM,aN,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.aM=aM
_.aN=aN
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},ht:function ht(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},is:function is(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c:function c(a){this.a=a},T:function T(b,c,a){this.b=b
this.c=c
this.a=a},jK:function jK(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l},k3:function k3(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},A={h_:function h_(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
h:function(a,b,c,d,e){var t=new A.V(c,e,null,a,!1,P.bt(null,null,null,G.U),0,3)
t.du(a,b,c,!1,e)
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
i5:function i5(){},
i4:function i4(){},
iD:function iD(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
jH:function jH(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
j6:function j6(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
jF:function jF(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
k8:function k8(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},
jh:function jh(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
hE:function hE(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
dz:function dz(){},
eo:function(a,b,c,d){var t=new A.cs(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.dt(a,b,c,d)
return t},
mX:function(a,b,c,d){var t=A.eo(0,0,0,255)
t.b=C.b.ae(C.d.b2(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.b.ae(C.d.b2(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.b.ae(C.d.b2(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.b.ae(C.d.b2(d*255),0,255)
return t},
pp:function(a,b){if(b){if(typeof a!=="number")return a.d5()
return A.eo((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.d5()
return A.eo((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
mY:function(a){return A.pp(H.qL(a,16,new A.lq()),a.length>=8)},
cs:function cs(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
lq:function lq(){},
j1:function j1(){},
fa:function fa(){},
r0:function(a){var t=new A.fd(null,null)
t.cd(a)
return t},
fd:function fd(a,b){this.a=a
this.b=b}},V={h4:function h4(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},hL:function hL(m,n,q,t,u,v,w,A,B,C,E,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},iC:function iC(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},j0:function j0(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jn:function jn(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},k0:function k0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch}},Z={h6:function h6(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},ib:function ib(m,n,q,t,u,v,w,A,B,C,E,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},iq:function iq(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,A,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jk:function jk(m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
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
_.l=l}},X={d0:function d0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},cZ:function cZ(){},hM:function hM(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},hN:function hN(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
tg:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
D.rz()
t=P.N
s=A.cs
r=P.a3
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#00ff00"),!0)
q.h(0,$.A,L.b("#EFEFEF"),!0)
q.h(0,$.C,L.b("#DEDEDE"),!0)
q.h(0,$.K,L.b("#FF2106"),!0)
q.h(0,$.J,L.b("#B01200"),!0)
q.h(0,$.E,L.b("#2F2F30"),!0)
q.h(0,$.F,L.b("#1D1D1D"),!0)
q.h(0,$.D,L.b("#080808"),!0)
q.h(0,$.B,L.b("#030303"),!0)
q.h(0,$.I,L.b("#242424"),!0)
q.h(0,$.H,L.b("#333333"),!0)
q.h(0,$.G,L.b("#141414"),!0)
p=[t]
o=P.d(H.a(["Frogs"],p),t)
n=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
m=P.d(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),t)
k=P.d(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),t)
j=E.r
i=[j]
h=P.d(H.a([new E.r($.bu,2,!0),new E.r($.c6,1,!0),new E.r($.aQ,-2,!0)],i),j)
g=[X.t,P.Q]
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
e=[A.dz]
d=A.V
f=new N.jG(0.5,1,0.5,q,o,n,m,l,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,0,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Space",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(0,"Space",!0,!1,!1,null,null)
$.pc=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#ff0000"),!0)
f.h(0,$.A,L.b("#FF2106"),!0)
f.h(0,$.C,L.b("#AD1604"),!0)
f.h(0,$.K,L.b("#030303"),!0)
f.h(0,$.J,L.b("#242424"),!0)
f.h(0,$.E,L.b("#510606"),!0)
f.h(0,$.F,L.b("#3C0404"),!0)
f.h(0,$.D,L.b("#1F0000"),!0)
f.h(0,$.B,L.b("#B70D0E"),!0)
f.h(0,$.I,L.b("#970203"),!0)
f.h(0,$.H,L.b("#8E1516"),!0)
f.h(0,$.G,L.b("#640707"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),t)
m=P.d(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),t)
o=P.d(H.a([new E.r($.cL,2,!0),new E.r($.aQ,1,!0),new E.r($.bE,-2,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new N.k4(0.51,1,0.01,0.7,f,h,k,l,m,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",n,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],o,0.01,0.01,0.01,0.5,1,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Time",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(1,"Time",!0,!1,!1,null,null)
$.pg=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#3399ff"),!0)
q.h(0,$.A,L.b("#10E0FF"),!0)
q.h(0,$.C,L.b("#00A4BB"),!0)
q.h(0,$.K,L.b("#FEFD49"),!0)
q.h(0,$.J,L.b("#D6D601"),!0)
q.h(0,$.E,L.b("#0052F3"),!0)
q.h(0,$.F,L.b("#0046D1"),!0)
q.h(0,$.D,L.b("#003396"),!0)
q.h(0,$.B,L.b("#0087EB"),!0)
q.h(0,$.I,L.b("#0070ED"),!0)
q.h(0,$.H,L.b("#006BE1"),!0)
q.h(0,$.G,L.b("#0054B0"),!0)
o=P.d(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),t)
n=P.d(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),t)
m=P.d(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),t)
l=P.d(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),t)
k=P.d(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],t)
h=P.d(H.a([new E.r($.aQ,2,!0),new E.r($.av,1,!0),new E.r($.c6,-1,!0),new E.r($.bl,-1,!0),new E.r($.az,0.05,!1)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new T.fV(0.5,1,0.01,0.3,q,o,n,m,l,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],k,h,0.01,0.01,0.01,0.5,2,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Breath",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(2,"Breath",!0,!1,!1,null,null)
$.oD=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#003300"),!0)
f.h(0,$.A,L.b("#0F0F0F"),!0)
f.h(0,$.C,L.b("#010101"),!0)
f.h(0,$.K,L.b("#E8C15E"),!0)
f.h(0,$.J,L.b("#C7A140"),!0)
f.h(0,$.E,L.b("#1E211E"),!0)
f.h(0,$.F,L.b("#141614"),!0)
f.h(0,$.D,L.b("#0B0D0B"),!0)
f.h(0,$.B,L.b("#204020"),!0)
f.h(0,$.I,L.b("#11200F"),!0)
f.h(0,$.H,L.b("#192C16"),!0)
f.h(0,$.G,L.b("#121F10"),!0)
h=P.d(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),t)
k=P.d(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),t)
l=P.d(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),t)
m=P.d(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),t)
n=P.d(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),t)
o=P.d(H.a([new E.r($.bu,2,!0),new E.r($.bE,1,!0),new E.r($.cL,-1,!0),new E.r($.c6,-1,!0),new E.r($.az,0.01,!1)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new U.h5(1,0.5,0.5,1,f,h,k,l,m,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,n,o,0.01,0.01,0.01,0.5,3,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Doom",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(3,"Doom",!0,!1,!1,null,null)
$.lO=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#993300"),!0)
q.h(0,$.A,L.b("#BA1016"),!0)
q.h(0,$.C,L.b("#820B0F"),!0)
q.h(0,$.K,L.b("#381B76"),!0)
q.h(0,$.J,L.b("#1E0C47"),!0)
q.h(0,$.E,L.b("#290704"),!0)
q.h(0,$.F,L.b("#230200"),!0)
q.h(0,$.D,L.b("#110000"),!0)
q.h(0,$.B,L.b("#3D190A"),!0)
q.h(0,$.I,L.b("#2C1207"),!0)
q.h(0,$.H,L.b("#5C2913"),!0)
q.h(0,$.G,L.b("#4C1F0D"),!0)
o=P.d(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),t)
n=P.d(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),t)
m=P.d(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),t)
l=P.d(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),t)
k=P.d(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),t)
h=P.d(H.a([new E.r($.bl,2,!0),new E.r($.av,1,!0),new E.r($.bu,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new T.fT(0.01,0.5,1,0,q,o,n,m,l,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],k,h,0.01,0.01,0.01,0.5,4,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Blood",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(4,"Blood",!0,!1,!1,null,null)
$.oC=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#ff3399"),!0)
f.h(0,$.A,L.b("#BD1864"),!0)
f.h(0,$.C,L.b("#780F3F"),!0)
f.h(0,$.K,L.b("#1D572E"),!0)
f.h(0,$.J,L.b("#11371D"),!0)
f.h(0,$.E,L.b("#4C1026"),!0)
f.h(0,$.F,L.b("#3C0D1F"),!0)
f.h(0,$.D,L.b("#260914"),!0)
f.h(0,$.B,L.b("#6B0829"),!0)
f.h(0,$.I,L.b("#4A0818"),!0)
f.h(0,$.H,L.b("#55142A"),!0)
f.h(0,$.G,L.b("#3D0E1E"),!0)
h=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),t)
k=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
l=P.d(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),t)
m=P.d(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
n=P.d(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),t)
o=P.d(H.a([new E.r($.bl,1,!0),new E.dw(null,1,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new T.hJ(0.3,0.6,0.01,f,h,k,l,m,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,n,o,0.01,0.01,0.01,0.5,5,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Heart",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(5,"Heart",!0,!1,!1,null,null)
$.oK=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#3da35a"),!0)
q.h(0,$.A,L.b("#06FFC9"),!0)
q.h(0,$.C,L.b("#04A885"),!0)
q.h(0,$.K,L.b("#6E0E2E"),!0)
q.h(0,$.J,L.b("#4A0818"),!0)
q.h(0,$.E,L.b("#1D572E"),!0)
q.h(0,$.F,L.b("#164524"),!0)
q.h(0,$.D,L.b("#11371D"),!0)
q.h(0,$.B,L.b("#3DA35A"),!0)
q.h(0,$.I,L.b("#2E7A43"),!0)
q.h(0,$.H,L.b("#3B7E4F"),!0)
q.h(0,$.G,L.b("#265133"),!0)
o=P.d(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
n=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),t)
l=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),t)
k=P.d(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),t)
h=P.d(H.a([new E.r($.bE,2,!0),new E.r($.cL,1,!0),new E.r($.bu,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new V.iC(0.3,0.3,1,q,o,n,m,l,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],h,0.01,0.01,0.01,0.5,6,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mind",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(6,"Mind",!0,!1,!1,null,null)
$.oS=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#ff9933"),!0)
f.h(0,$.A,L.b("#FEFD49"),!0)
f.h(0,$.C,L.b("#FEC910"),!0)
f.h(0,$.K,L.b("#10E0FF"),!0)
f.h(0,$.J,L.b("#00A4BB"),!0)
f.h(0,$.E,L.b("#FA4900"),!0)
f.h(0,$.F,L.b("#E94200"),!0)
f.h(0,$.D,L.b("#C33700"),!0)
f.h(0,$.B,L.b("#FF8800"),!0)
f.h(0,$.I,L.b("#D66E04"),!0)
f.h(0,$.H,L.b("#E76700"),!0)
f.h(0,$.G,L.b("#CA5B00"),!0)
h=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),t)
k=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
l=P.d(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),t)
m=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),t)
n=P.d(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),t)
o=P.d(H.a([new E.r($.cK,2,!0),new E.r($.bE,1,!0),new E.r($.av,-1,!0),new E.r($.c6,-1,!0),new E.r($.az,0.2,!1)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new G.ii(1.01,0.5,0.01,f,h,k,l,m,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",n,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],o,0.01,0.01,0.01,0.5,7,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Light",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(7,"Light",!0,!1,!1,null,null)
$.oP=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#000066"),!0)
q.h(0,$.A,L.b("#0B1030"),!0)
q.h(0,$.C,L.b("#04091A"),!0)
q.h(0,$.K,L.b("#CCC4B5"),!0)
q.h(0,$.J,L.b("#A89F8D"),!0)
q.h(0,$.E,L.b("#00164F"),!0)
q.h(0,$.F,L.b("#00103C"),!0)
q.h(0,$.D,L.b("#00071A"),!0)
q.h(0,$.B,L.b("#033476"),!0)
q.h(0,$.I,L.b("#02285B"),!0)
q.h(0,$.H,L.b("#004CB2"),!0)
q.h(0,$.G,L.b("#003E91"),!0)
o=P.d(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),t)
n=P.d(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),t)
m=P.d(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),t)
l=P.d(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),t)
k=P.d(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),t)
h=P.d(H.a([new E.cW(D.mq(),null,3,!0),new E.cW(D.mq(),null,-1,!0),new E.r($.cL,-1,!0),new E.r($.az,0.2,!1)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new Q.ke(1,1,1,q,o,n,m,l,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],h,0.01,0.01,0.01,0.5,8,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Void",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(8,"Void",!0,!1,!1,null,null)
$.pi=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#9900cc"),!0)
f.h(0,$.A,L.b("#974AA7"),!0)
f.h(0,$.C,L.b("#6B347D"),!0)
f.h(0,$.K,L.b("#3D190A"),!0)
f.h(0,$.J,L.b("#2C1207"),!0)
f.h(0,$.E,L.b("#7C3FBA"),!0)
f.h(0,$.F,L.b("#6D34A6"),!0)
f.h(0,$.D,L.b("#592D86"),!0)
f.h(0,$.B,L.b("#381B76"),!0)
f.h(0,$.I,L.b("#1E0C47"),!0)
f.h(0,$.H,L.b("#281D36"),!0)
f.h(0,$.G,L.b("#1D1526"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),t)
n=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
o=P.d(H.a([new E.r($.bP,2,!0),new E.r($.aQ,1,!0),new E.r($.av,-1,!0),new E.r($.bl,-1,!0),new E.r($.az,0.01,!1)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new E.ja(1,1,0.01,f,h,k,l,m," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",n,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],o,0.01,0.01,0.01,0.5,9,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rage",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(9,"Rage",!0,!1,!1,null,null)
$.mT=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#ffcc66"),!0)
q.h(0,$.A,L.b("#FDF9EC"),!0)
q.h(0,$.C,L.b("#D6C794"),!0)
q.h(0,$.K,L.b("#164524"),!0)
q.h(0,$.J,L.b("#06280C"),!0)
q.h(0,$.E,L.b("#FFC331"),!0)
q.h(0,$.F,L.b("#F7BB2C"),!0)
q.h(0,$.D,L.b("#DBA523"),!0)
q.h(0,$.B,L.b("#FFE094"),!0)
q.h(0,$.I,L.b("#E8C15E"),!0)
q.h(0,$.H,L.b("#F6C54A"),!0)
q.h(0,$.G,L.b("#EDAF0C"),!0)
o=P.d(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),t)
n=P.d(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),t)
m=P.d(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),t)
l=P.d(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),t)
k=P.d(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),t)
h=P.d(H.a([new E.r($.av,2,!0),new E.r($.cK,1,!0),new E.cW(D.mq(),null,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new X.hM(1,1,1,q,o,n,m,l,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],k,h,0.01,0.01,0.01,0.5,10,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hope",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(10,"Hope",!0,!1,!1,null,null)
$.oM=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#494132"),!0)
f.h(0,$.A,L.b("#76C34E"),!0)
f.h(0,$.C,L.b("#4F8234"),!0)
f.h(0,$.K,L.b("#00164F"),!0)
f.h(0,$.J,L.b("#00071A"),!0)
f.h(0,$.E,L.b("#605542"),!0)
f.h(0,$.F,L.b("#494132"),!0)
f.h(0,$.D,L.b("#2D271E"),!0)
f.h(0,$.B,L.b("#CCC4B5"),!0)
f.h(0,$.I,L.b("#A89F8D"),!0)
f.h(0,$.H,L.b("#A29989"),!0)
f.h(0,$.G,L.b("#918673"),!0)
h=P.d(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),t)
k=P.d(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),t)
l=P.d(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),t)
m=P.d(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),t)
n=P.d(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),t)
o=P.d(H.a([new E.r($.c6,2,!0),new E.r($.bP,1,!0),new E.r($.bu,-2,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new K.ih(0.01,1,0.03,f,h,k,l,m,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],n,o,0.01,0.01,0.01,0.5,11,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Life",null,!0,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(11,"Life",!0,!1,!1,null,null)
$.oO=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#9630BF"),!0)
q.h(0,$.A,L.b("#cc87e8"),!0)
q.h(0,$.C,L.b("#9545b7"),!0)
q.h(0,$.K,L.b("#ae769b"),!0)
q.h(0,$.J,L.b("#8f577c"),!0)
q.h(0,$.E,L.b("#9630bf"),!0)
q.h(0,$.F,L.b("#693773"),!0)
q.h(0,$.D,L.b("#4c2154"),!0)
q.h(0,$.B,L.b("#fcf9bd"),!0)
q.h(0,$.I,L.b("#e0d29e"),!0)
q.h(0,$.H,L.b("#bdb968"),!0)
q.h(0,$.G,L.b("#ab9b55"),!0)
o=P.d(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),t)
n=P.d(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),t)
m=P.d(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),t)
l=P.d(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),t)
k=P.d(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),t)
h=P.d(H.a([new E.r($.bu,3,!0),new E.r($.av,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new Z.h6(1.01,0.3,0.01,q,o,n,m,l,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,k,h,0.01,0.01,0.01,0.5,12,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Dream",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(12,"Dream",!1,!1,!1,null,null)
$.oF=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#ff0000"),!0)
f.h(0,$.A,L.b("#ffff00"),!0)
f.h(0,$.C,L.b("#ffff00"),!0)
f.h(0,$.K,L.b("#508b2d"),!0)
f.h(0,$.J,L.b("#316c0d"),!0)
f.h(0,$.E,L.b("#dddd00"),!0)
f.h(0,$.F,L.b("#afaf00"),!0)
f.h(0,$.D,L.b("#8f8f00"),!0)
f.h(0,$.B,L.b("#ff0000"),!0)
f.h(0,$.I,L.b("#a8000a"),!0)
f.h(0,$.H,L.b("#b8151f"),!0)
f.h(0,$.G,L.b("#8c1d1d"),!0)
h=P.d(H.a(["PURIFICATOR","NOT SHOGUN","WHO IS SHOGUN?"],p),t)
k=P.d(H.a(["Juice","Joke","Jespacito"],p),t)
l=P.d(H.a(["Pure","Juice","Juicey","Juiced","Small Might","Juicepacito"],p),t)
m=P.d(H.a(["Juice","Februus","Dyonisus","Bacchus","Epidotes","Juno Februtis","Ea","Marduk","Asaluhhi","Wadjet"],p),t)
n=P.d(H.a([new E.r($.az,13,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new Z.ib(13,13,13,f,h,k,l,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",m,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],n,0.01,0.01,0.01,0.5,14,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Juice",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(14,"Juice",!1,!1,!0,null,null)
$.mS=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#00ff00"),!0)
q.h(0,$.A,L.b("#00ff00"),!0)
q.h(0,$.C,L.b("#00ff00"),!0)
q.h(0,$.K,L.b("#00ff00"),!0)
q.h(0,$.J,L.b("#00cf00"),!0)
q.h(0,$.E,L.b("#171717"),!0)
q.h(0,$.F,L.b("#080808"),!0)
q.h(0,$.D,L.b("#080808"),!0)
q.h(0,$.B,L.b("#616161"),!0)
q.h(0,$.I,L.b("#3b3b3b"),!0)
q.h(0,$.H,L.b("#4a4a4a"),!0)
q.h(0,$.G,L.b("#292929"),!0)
n=P.d(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),t)
m=P.d(H.a(["Shogun"],p),t)
l=P.d(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),t)
k=P.d(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),t)
h=P.d(H.a([new E.r($.bP,13,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new K.ju(13,13,13,q,n,m,l," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",k,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],h,0.01,0.01,0.01,0.5,15,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sauce",null,!1,!0,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(15,"Sauce",!1,!0,!1,null,null)
$.p8=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#933100"),!0)
o.h(0,$.A,L.b("#933100"),!0)
o.h(0,$.C,L.b("#682200"),!0)
o.h(0,$.K,L.b("#4c3a27"),!0)
o.h(0,$.J,L.b("#302418"),!0)
o.h(0,$.E,L.b("#a0562b"),!0)
o.h(0,$.F,L.b("#723e20"),!0)
o.h(0,$.D,L.b("#442513"),!0)
o.h(0,$.B,L.b("#963c07"),!0)
o.h(0,$.I,L.b("#682a06"),!0)
o.h(0,$.H,L.b("#6d4d3a"),!0)
o.h(0,$.G,L.b("#422e23"),!0)
h=P.d(H.a(["IT'S A METAPHOR","ABSOLUTE REBEL","COLD BLOODED"],p),t)
k=P.d(H.a(["Therapist","Tax","Talker","Tailess","Teammate"],p),t)
l=P.d(H.a(["Electricity","Tazerface","Rebelions","Metaphors","Ravagers"],p),t)
m=P.d(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),t)
n=P.d(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),t)
q=P.d(H.a([new E.r($.aQ,10,!0),new E.r($.av,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new L.jY(2,0.7,0.7,o,h,k,l,m,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",n,["Lightning","Ice","Taserface"],["Taser"],q,0.01,0.01,0.01,0.5,16,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Taze",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(16,"Taze",!1,!1,!0,null,null)
$.pf=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#990000"),!0)
f.h(0,$.A,L.b("#ff0200"),!0)
f.h(0,$.C,L.b("#dd0000"),!0)
f.h(0,$.K,L.b("#25334f"),!0)
f.h(0,$.J,L.b("#07090f"),!0)
f.h(0,$.E,L.b("#c64f4f"),!0)
f.h(0,$.F,L.b("#a33f3f"),!0)
f.h(0,$.D,L.b("#843333"),!0)
f.h(0,$.B,L.b("#b5c1d2"),!0)
f.h(0,$.I,L.b("#939dac"),!0)
f.h(0,$.H,L.b("#3c3e42"),!0)
f.h(0,$.G,L.b("#202123"),!0)
q=P.d(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),t)
n=P.d(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),t)
m=P.d(H.a(["Yondu","Empathy","Arrows","Emotions","Ravagers"],p),t)
l=P.d(H.a(["Empathetic","Arrowed","Emotional","Literal","Ravaging"],p),t)
k=P.d(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),t)
h=P.d(H.a([new E.r($.aQ,2,!0),new E.r($.av,5,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new V.jn(0.9,1.1,2,f,q,n,m,l,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",k,["Arrow","Yondu","Empathy"],["Arrow","Bow"],h,0.01,0.01,0.01,0.5,17,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rule",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(17,"Rule",!1,!1,!0,null,null)
$.p5=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#853dcc"),!0)
o.h(0,$.A,L.b("#f76261"),!0)
o.h(0,$.C,L.b("#913a39"),!0)
o.h(0,$.K,L.b("#ab4443"),!0)
o.h(0,$.J,L.b("#78302f"),!0)
o.h(0,$.E,L.b("#a54cff"),!0)
o.h(0,$.F,L.b("#8c41d9"),!0)
o.h(0,$.D,L.b("#7335b3"),!0)
o.h(0,$.B,L.b("#853dcc"),!0)
o.h(0,$.I,L.b("#642e99"),!0)
o.h(0,$.H,L.b("#4c2375"),!0)
o.h(0,$.G,L.b("#2b1442"),!0)
h=P.d(H.a(["RANT EXTRAORDINAIRE","VENT CRAWLER","DUCT MASTER"],p),t)
k=P.d(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),t)
l=P.d(H.a(["Purgatorial","Rantish","Cold","Conditioned","Lost"],p),t)
m=P.d(H.a(["Mr. Hippo","Athena","Tawaret","Twert","Thoeris","Set","Ipy","Ipet","Apet","Opet","Reret"],p),t)
n=P.d(H.a([new E.r($.aQ,15,!0),new E.r($.av,-4,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new V.hL(3.1,2,0.7,o,h,k,l,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",m,["Hippo","Ranting"],["Vent"],n,0.01,0.01,0.01,0.5,18,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Hippo",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(18,"Hippo",!1,!1,!0,null,null)
$.oL=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#959595"),!0)
q.h(0,$.A,L.b("#bfbfbf"),!0)
q.h(0,$.C,L.b("#959595"),!0)
q.h(0,$.K,L.b("#805233"),!0)
q.h(0,$.J,L.b("#663c1f"),!0)
q.h(0,$.E,L.b("#805233"),!0)
q.h(0,$.F,L.b("#737373"),!0)
q.h(0,$.D,L.b("#664d3c"),!0)
q.h(0,$.B,L.b("#663c1f"),!0)
q.h(0,$.I,L.b("#4d2d17"),!0)
q.h(0,$.H,L.b("#68594e"),!0)
q.h(0,$.G,L.b("#4f443b"),!0)
n=P.d(H.a(["DOORWAY CLEARER","THINKY PERSON","THE FAZ"],p),t)
m=P.d(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),t)
l=P.d(H.a(["Purgatorial","Clear","Criterion","Fazbear","Doorway"],p),t)
k=P.d(H.a(["Freddy Fazbear","Callisto","Nandi","Nanook","Otso","Onikuma","Jambavan","Ungnyeo"],p),t)
h=P.d(H.a([new E.r($.aQ,5,!0),new E.r($.av,5,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new L.fS(0.7,2,3.1,q,n,m,l,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",k,["Bear","Thought"],["Doorway"],h,0.01,0.01,0.01,0.5,19,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Bear",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(19,"Bear",!1,!1,!0,null,null)
$.oB=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#ebd837"),!0)
o.h(0,$.A,L.b("#ebd837"),!0)
o.h(0,$.C,L.b("#857a1f"),!0)
o.h(0,$.K,L.b("#857a1f"),!0)
o.h(0,$.J,L.b("#524b13"),!0)
o.h(0,$.E,L.b("#d0c217"),!0)
o.h(0,$.F,L.b("#9e9311"),!0)
o.h(0,$.D,L.b("#6b640c"),!0)
o.h(0,$.B,L.b("#c3c3c3"),!0)
o.h(0,$.I,L.b("#8f8f8f"),!0)
o.h(0,$.H,L.b("#a88e00"),!0)
o.h(0,$.G,L.b("#756300"),!0)
h=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
k=P.d(H.a(["STONE","Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),t)
l=P.d(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),t)
m=P.d(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt","Stone"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
q=P.d(H.a([new E.r($.bE,2,!0),new E.r($.cL,1,!0),new E.r($.bu,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new A.iD(0.3,0.3,1,o,h,k,l,m,["stone","mind","decisions","consequences","free will","path","neurons","causality"],["stone","mind","coin","plan","mask","map","brain","circuit"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,q,0.01,0.01,0.01,0.5,20,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mindstone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(20,"Mindstone",!1,!0,!0,null,null)
$.oT=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#74a4ff"),!0)
f.h(0,$.A,L.b("#74a4ff"),!0)
f.h(0,$.C,L.b("#466299"),!0)
f.h(0,$.K,L.b("#466299"),!0)
f.h(0,$.J,L.b("#2f4166"),!0)
f.h(0,$.E,L.b("#d0c217"),!0)
f.h(0,$.F,L.b("#9e9311"),!0)
f.h(0,$.D,L.b("#6b640c"),!0)
f.h(0,$.B,L.b("#c3c3c3"),!0)
f.h(0,$.I,L.b("#8f8f8f"),!0)
f.h(0,$.H,L.b("#a88e00"),!0)
f.h(0,$.G,L.b("#756300"),!0)
q=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
n=P.d(H.a(["Frogs","Stone"],p),t)
m=P.d(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),t)
l=P.d(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush","Stone"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.r($.bu,2,!0),new E.r($.c6,1,!0),new E.r($.aQ,-2,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new A.jH(0.5,1,0.5,f,q,n,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",l,k,["stone","space","commitment","creation","room","stars","galaxy","black hole","super nova"],["stone","space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],h,0.01,0.01,0.01,0.5,21,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Spacestone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(21,"Spacestone",!1,!0,!0,null,null)
$.pd=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#9846cc"),!0)
o.h(0,$.A,L.b("#9846cc"),!0)
o.h(0,$.C,L.b("#4c2366"),!0)
o.h(0,$.K,L.b("#4c2366"),!0)
o.h(0,$.J,L.b("#261233"),!0)
o.h(0,$.E,L.b("#d0c217"),!0)
o.h(0,$.F,L.b("#9e9311"),!0)
o.h(0,$.D,L.b("#6b640c"),!0)
o.h(0,$.B,L.b("#c3c3c3"),!0)
o.h(0,$.I,L.b("#8f8f8f"),!0)
o.h(0,$.H,L.b("#a88e00"),!0)
o.h(0,$.G,L.b("#756300"),!0)
h=P.d(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial","Stone"],p),t)
k=P.d(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible","Stone"],p),t)
n=P.d(H.a([new E.r($.bP,2,!0),new E.r($.aQ,1,!0),new E.r($.av,-1,!0),new E.r($.bl,-1,!0),new E.r($.az,0.01,!1)],i),j)
q=P.d(H.a(["Paradox Space"],p),t)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new A.j6(1,1,0.01,o,h,k,l,m,["stone","rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["stone","rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,q,0.01,0.01,0.01,0.5,22,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Powerstone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(22,"Powerstone",!1,!0,!0,null,null)
$.oY=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#ffcb6f"),!0)
f.h(0,$.A,L.b("#ffcb6f"),!0)
f.h(0,$.C,L.b("#997a42"),!0)
f.h(0,$.K,L.b("#997a42"),!0)
f.h(0,$.J,L.b("#66512c"),!0)
f.h(0,$.E,L.b("#d0c217"),!0)
f.h(0,$.F,L.b("#9e9311"),!0)
f.h(0,$.D,L.b("#6b640c"),!0)
f.h(0,$.B,L.b("#c3c3c3"),!0)
f.h(0,$.I,L.b("#8f8f8f"),!0)
f.h(0,$.H,L.b("#a88e00"),!0)
f.h(0,$.G,L.b("#756300"),!0)
q=P.d(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters","Stone"],p),t)
n=P.d(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Stone","Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.r($.bl,1,!0),new E.dw(null,1,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new A.jF(0.3,0.6,0.01,f,q,n,m,l,["stone","heart","identity","emotion","core","beat","shadow"],["stone","heart","doll","locket","mirror","mask","shades","sculpture"],"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",k,h,0.01,0.01,0.01,0.5,23,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Soulstone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(23,"Soulstone",!1,!0,!0,null,null)
$.pb=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#7ac476"),!0)
o.h(0,$.A,L.b("#7ac476"),!0)
o.h(0,$.C,L.b("#3a5e39"),!0)
o.h(0,$.K,L.b("#3a5e39"),!0)
o.h(0,$.J,L.b("#1b2b1a"),!0)
o.h(0,$.E,L.b("#d0c217"),!0)
o.h(0,$.F,L.b("#9e9311"),!0)
o.h(0,$.D,L.b("#6b640c"),!0)
o.h(0,$.B,L.b("#c3c3c3"),!0)
o.h(0,$.I,L.b("#8f8f8f"),!0)
o.h(0,$.H,L.b("#a88e00"),!0)
o.h(0,$.G,L.b("#756300"),!0)
h=P.d(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums","Stone"],p),t)
k=P.d(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Stone","Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),t)
n=P.d(H.a(["Paradox Space"],p),t)
q=P.d(H.a([new E.r($.cL,2,!0),new E.r($.aQ,1,!0),new E.r($.bE,-2,!0)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new A.k8(0.51,1,0.01,0.7,o,h,k,l,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",n,["stone","time","speed","inevitability","paradoxes","rhythm"],["stone","time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],q,0.01,0.01,0.01,0.5,24,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Timestone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(24,"Timestone",!1,!0,!0,null,null)
$.ph=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#ed1c24"),!0)
f.h(0,$.A,L.b("#ed1c24"),!0)
f.h(0,$.C,L.b("#820a0f"),!0)
f.h(0,$.K,L.b("#820a0f"),!0)
f.h(0,$.J,L.b("#4f0609"),!0)
f.h(0,$.E,L.b("#d0c217"),!0)
f.h(0,$.F,L.b("#9e9311"),!0)
f.h(0,$.D,L.b("#6b640c"),!0)
f.h(0,$.B,L.b("#c3c3c3"),!0)
f.h(0,$.I,L.b("#8f8f8f"),!0)
f.h(0,$.H,L.b("#a88e00"),!0)
f.h(0,$.G,L.b("#756300"),!0)
q=P.d(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance","Stone"],p),t)
n=P.d(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),t)
m=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
l=P.d(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze","Stone"],p),t)
k=P.d(H.a(["Paradox Space"],p),t)
h=P.d(H.a([new E.r($.cK,2,!0),new E.r($.bE,1,!0),new E.r($.av,-1,!0),new E.r($.c6,-1,!0),new E.r($.az,0.2,!1)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new A.jh(1.01,0.5,0.01,f,q,n,m,l,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["stone","light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],k,h,0.01,0.01,0.01,0.5,25,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Realitystone",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(25,"Realitystone",!1,!0,!0,null,null)
$.p_=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#e19aca"),!0)
o.h(0,$.A,L.b("#e19aca"),!0)
o.h(0,$.C,L.b("#7a546e"),!0)
o.h(0,$.K,L.b("#7a546e"),!0)
o.h(0,$.J,L.b("#473140"),!0)
o.h(0,$.E,L.b("#d0c217"),!0)
o.h(0,$.F,L.b("#9e9311"),!0)
o.h(0,$.D,L.b("#6b640c"),!0)
o.h(0,$.B,L.b("#c3c3c3"),!0)
o.h(0,$.I,L.b("#8f8f8f"),!0)
o.h(0,$.H,L.b("#a88e00"),!0)
o.h(0,$.G,L.b("#756300"),!0)
h=P.d(H.a(["Stone","Gauntlet","Infinite","Mind","Space","Power","Soul","Time","Reality"],p),t)
k=P.d(H.a(["THANOS CAR","GAUNTLET HOLDER","STONE COLLECTOR"],p),t)
l=P.d(H.a(["Stone","Sauron","Stupid","Selfish","Sock","Stuck","Selian","Sandals","Sans"],p),t)
m=P.d(H.a(["Stone","Infinite","Gauntlet","Thanos","Mind","Space","Power","Soul","Time","Reality"],p),t)
n=P.d(H.a([new E.r($.av,-1,!0),new E.r($.bP,2,!0)],i),j)
q=P.d(H.a(["Paradox Space"],p),t)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new A.hE(2,1.5,1,o,h,k,l,m,"The Green Sun"," The OWNER pulls energy from the Green Sun to heal themselves, and attack the ENEMY",["stone","infinite","thanos","gauntlet"],["stone","infinite","thanos","gauntlet"],n,q,0.01,0.01,0.01,0.5,26,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Gauntlet",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(26,"Gauntlet",!1,!0,!0,null,null)
$.oI=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#c55555"),!0)
f.h(0,$.A,L.b("#c55555"),!0)
f.h(0,$.C,L.b("#090404"),!0)
f.h(0,$.K,L.b("#ba872e"),!0)
f.h(0,$.J,L.b("#8e694e"),!0)
f.h(0,$.E,L.b("#b59e5d"),!0)
f.h(0,$.F,L.b("#837243"),!0)
f.h(0,$.D,L.b("#4f4528"),!0)
f.h(0,$.B,L.b("#9fbfbf"),!0)
f.h(0,$.I,L.b("#95b5b5"),!0)
f.h(0,$.H,L.b("#956f6f"),!0)
f.h(0,$.G,L.b("#714b4b"),!0)
q=P.d(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),t)
n=P.d(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),t)
m=P.d(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),t)
l=P.d(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),t)
k=P.d(H.a([new E.r($.av,-1,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new D.iy(2,0.5,1,f,q,n,m,"cURSED","Some cursed meme music starts to play.",l,["memes"],["memes"],k,0.01,0.01,0.01,0.5,27,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Meme",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(27,"Meme",!1,!1,!0,null,null)
$.oQ=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#010067"),!0)
o.h(0,$.A,L.b("#010067"),!0)
o.h(0,$.C,L.b("#000033"),!0)
o.h(0,$.K,L.b("#000033"),!0)
o.h(0,$.J,L.b("#00000d"),!0)
o.h(0,$.E,L.b("#0052F3"),!0)
o.h(0,$.F,L.b("#0046D1"),!0)
o.h(0,$.D,L.b("#003396"),!0)
o.h(0,$.B,L.b("#0b0a33"),!0)
o.h(0,$.I,L.b("#0a0a1a"),!0)
o.h(0,$.H,L.b("#0b0b1b"),!0)
o.h(0,$.G,L.b("#030308"),!0)
k=P.d(H.a(["Chill","Fear","Subordinance","Cold","Solids"],p),t)
l=P.d(H.a(["SOLIDIFIER","FEAR MAKER","ABSOLUTE DESTROYER"],p),t)
m=P.d(H.a(["Child","Chimpanzee","Choler","Cauliflower","Changer","Cake","Cone"],p),t)
n=P.d(H.a(["Chill","Rock","Cold","Fearing","Solidifying"],p),t)
q=P.d(["Thanos","Phobos","Deimos","Boreas"],t)
f=P.d(H.a([new E.r($.aQ,2,!0),new E.r($.av,-1,!0),new E.r($.bl,-1,!0)],i),j)
h=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
h.h(0,$.L,L.b("#FF9B00"),!0)
h.h(0,$.A,L.b("#FF9B00"),!0)
h.h(0,$.C,L.b("#FF8700"),!0)
h.h(0,$.K,L.b("#7F7F7F"),!0)
h.h(0,$.J,L.b("#727272"),!0)
h.h(0,$.E,L.b("#A3A3A3"),!0)
h.h(0,$.F,L.b("#999999"),!0)
h.h(0,$.D,L.b("#898989"),!0)
h.h(0,$.B,L.b("#EFEFEF"),!0)
h.h(0,$.I,L.b("#DBDBDB"),!0)
h.h(0,$.H,L.b("#C6C6C6"),!0)
h.h(0,$.G,L.b("#ADADAD"),!0)
h=new S.fX(0.5,0.7,1,o,k,l,m,n,"Fear "," A shiver of fear is sent to the ENEMY, but the OWNER is strengthened.",["chill","cold","fear","subordination"],["chill","stone","solids"],q,f,0.01,0.01,0.01,0.5,28,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Chill",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
h.R(28,"Chill",!1,!1,!0,null,null)
$.oE=h
h=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
h.h(0,$.L,L.b("#007fbf"),!0)
h.h(0,$.A,L.b("#007fbf"),!0)
h.h(0,$.C,L.b("#4d6e80"),!0)
h.h(0,$.K,L.b("#999999"),!0)
h.h(0,$.J,L.b("#666666"),!0)
h.h(0,$.E,L.b("#8a9499"),!0)
h.h(0,$.F,L.b("#5c6366"),!0)
h.h(0,$.D,L.b("#2e3133"),!0)
h.h(0,$.B,L.b("#86acbf"),!0)
h.h(0,$.I,L.b("#627e8c"),!0)
h.h(0,$.H,L.b("#8fa7b3"),!0)
h.h(0,$.G,L.b("#667780"),!0)
f=P.d(H.a(["Rune","Infinity","Magic","Fairies","Prediction","Circles","Majykks","Systems"],p),t)
q=P.d(H.a(["FAIRY PERSON","INFIINITELY CONFUSED","PREDICTIVE LAD"],p),t)
n=P.d(H.a(["Rune","Ruiner","Red","Ready","Retconner","Respondent"],p),t)
m=P.d(H.a(["Infinite","Magical","Runely","Majykkal","Systematically","Predictful"],p),t)
l=P.d(["Rune","Hecate","Hekate","Heh","Huh","Athena","Oracle"],t)
k=P.d(H.a([new E.r($.aQ,2,!0),new E.r($.av,-0.5,!0),new E.r($.az,2,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new R.jo(0.5,1,1,0.5,h,f,q,n,m,"Magicity","In a flood of magic, the OWNER is strengthened and healed, and the ENEMY is weakened.",["rune","majykk","fairies","infinity","prediction"],["rune","runestones","magic","fairies"],l,k,0.01,0.01,0.01,0.5,29,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rune",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(29,"Rune",!1,!1,!0,null,null)
$.p6=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#ff7a00"),!0)
o.h(0,$.A,L.b("#ff7a00"),!0)
o.h(0,$.C,L.b("#cc6200"),!0)
o.h(0,$.K,L.b("#cc6200"),!0)
o.h(0,$.J,L.b("#994900"),!0)
o.h(0,$.E,L.b("#cc9766"),!0)
o.h(0,$.F,L.b("#99714d"),!0)
o.h(0,$.D,L.b("#664b33"),!0)
o.h(0,$.B,L.b("#e69245"),!0)
o.h(0,$.I,L.b("#b37136"),!0)
o.h(0,$.H,L.b("#cc823d"),!0)
o.h(0,$.G,L.b("#99622e"),!0)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new L.hI(o,0.01,0.01,0.01,0.5,30,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Haze",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(30,"Haze",!1,!1,!0,null,null)
$.oJ=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#364447"),!0)
q.h(0,$.A,L.b("#28517b"),!0)
q.h(0,$.C,L.b("#143D67"),!0)
q.h(0,$.K,L.b("#E7D7A0"),!0)
q.h(0,$.J,L.b("#D6A482"),!0)
q.h(0,$.E,L.b("#A9D5DF"),!0)
q.h(0,$.F,L.b("#95c1cb"),!0)
q.h(0,$.D,L.b("#77a3ad"),!0)
q.h(0,$.B,L.b("#162E33"),!0)
q.h(0,$.I,L.b("#11292e"),!0)
q.h(0,$.H,L.b("#021a1f"),!0)
q.h(0,$.G,L.b("#021015"),!0)
o=P.d(H.a(["Waves","Ocean","Gyms","Pillars","Force","Rocks","Stability","Cliffs","Strength","Surf"],p),t)
n=P.d(H.a(["STANDALONE STRONGMAN","EMPOWERING EMPEROR","MINCEMIGHT"],p),t)
m=P.d(H.a(["Might","Minder","Mainsail","Mastiff","Morpher","Mortician"],p),t)
l=P.d(H.a(["Crash","MIGHT","Endure","Grip","Punch","Wave","Fist"],p),t)
k=P.d(H.a(["Might","Grendel","Heracles","Odysseus","Lancelot","Arthur","Beowulf","Achilles","Samson","Goliath"],p),t)
h=P.d(H.a(["surfing a tsunami wave that appeared just for the occasion","punching out a horde of underlings, one by one","following through with a plan after the circumstances have foiled it and succeeding anyway"],p),t)
f=P.d(H.a(["standing their ground in the face of a difficult foe","performing an unbelievably complex bike stunt","teaching consorts proper weightlifting technique","finally defeating the last of their planet's underlings"],p),t)
c=P.d(H.a(["training for training's sake","renovating a consort village to protect it from natural disasters","defeating powerful underlings by refusing to give in to the pain"],p),t)
b=P.d(H.a([new E.r($.bP,2,!0),new E.r($.bE,-1,!0),new E.r($.aQ,-1,!0),new E.r($.av,1,!0)],i),j)
a=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
a.h(0,$.L,L.b("#FF9B00"),!0)
a.h(0,$.A,L.b("#FF9B00"),!0)
a.h(0,$.C,L.b("#FF8700"),!0)
a.h(0,$.K,L.b("#7F7F7F"),!0)
a.h(0,$.J,L.b("#727272"),!0)
a.h(0,$.E,L.b("#A3A3A3"),!0)
a.h(0,$.F,L.b("#999999"),!0)
a.h(0,$.D,L.b("#898989"),!0)
a.h(0,$.B,L.b("#EFEFEF"),!0)
a.h(0,$.I,L.b("#DBDBDB"),!0)
a.h(0,$.H,L.b("#C6C6C6"),!0)
a.h(0,$.G,L.b("#ADADAD"),!0)
a=new L.iB(q,o,n,m,l,"Mantra","A low note is hummed. It is the one Perseverance plays to keep itself going. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,h,f,c,b,0.01,0.01,0.01,0.5,31,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Might",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,a,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
a.R(31,"Might",!1,!1,!1,null,null)
$.oR=a
a=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
a.h(0,$.L,L.b("#A4C1F4"),!0)
a.h(0,$.A,L.b("#A4C1F4"),!0)
a.h(0,$.C,L.b("#95AFDD"),!0)
a.h(0,$.K,L.b("#FFFFA5"),!0)
a.h(0,$.J,L.b("#BEBE9E"),!0)
a.h(0,$.E,L.b("#A4C1F4"),!0)
a.h(0,$.F,L.b("#95AFDD"),!0)
a.h(0,$.D,L.b("#88A0CC"),!0)
a.h(0,$.B,L.b("#D9D2E9"),!0)
a.h(0,$.I,L.b("#BBB5CA"),!0)
a.h(0,$.H,L.b("#CCC5DB"),!0)
a.h(0,$.G,L.b("#A49FB1"),!0)
b=P.d(H.a(["Mist","Steam","Substance","Vapor","Fog","Clouds","Rivers","Humidity"],p),t)
c=P.d(H.a(["HAZE HASTENER","MISTER MASTER","MANY-BODY"],p),t)
f=P.d(H.a(["Moper","Martyr","Manager","Morning","Matter"],p),t)
h=P.d(H.a(["Everything","Encompass","Halation","Mist","Universal","Steamy","Most"],p),t)
k=P.d(H.a([new E.r($.aQ,2,!0),new E.r($.bP,-1,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new S.iE(a,b,c,f,h,"Ensemble","A harmonized chord sounds. It is the one Everybody knows. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.01,0.01,0.01,0.5,32,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Mist",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(32,"Mist",!1,!1,!1,null,null)
$.oU=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k=Y.bG()
q.h(0,$.L,L.b(k),!0)
k=Y.bG()
q.h(0,$.A,L.b(k),!0)
k=Y.bG()
q.h(0,$.C,L.b(k),!0)
k=Y.bG()
q.h(0,$.K,L.b(k),!0)
k=Y.bG()
q.h(0,$.J,L.b(k),!0)
k=Y.bG()
q.h(0,$.E,L.b(k),!0)
k=Y.bG()
q.h(0,$.F,L.b(k),!0)
k=Y.bG()
q.h(0,$.D,L.b(k),!0)
k=Y.bG()
q.h(0,$.B,L.b(k),!0)
k=Y.bG()
q.h(0,$.I,L.b(k),!0)
k=Y.bG()
q.h(0,$.H,L.b(k),!0)
k=Y.bG()
q.h(0,$.G,L.b(k),!0)
k=P.d(H.a(["Neon","Headaches","Puddles","Drip","Mess","Ice cream","Sweets","Boredom"],p),t)
h=P.d(H.a(["PUDDLE PUMMELLER","FLOOD FINISHER","RAINBRO"],p),t)
f=P.d(H.a(["Rainer","Retriever","Rower","Redux","Rapport"],p),t)
c=P.d(H.a(["Chaos","disorder","puddle","Rain","error","color","Swirl","LOL"],p),t)
b=P.d(H.a([new E.r($.bl,-2,!0),new E.r($.av,-1,!0),new E.r($.cK,3,!0)],i),j)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new L.jb(q,k,h,f,c,"BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",b,0.01,0.01,0.01,0.5,33,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rain",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(33,"Rain",!1,!1,!1,null,null)
$.oZ=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#b88654"),!0)
o.h(0,$.A,L.b("#783e05"),!0)
o.h(0,$.C,L.b("#4a0f00"),!0)
o.h(0,$.K,L.b("#0b6c6e"),!0)
o.h(0,$.J,L.b("#005d5e"),!0)
o.h(0,$.E,L.b("#f5b06c"),!0)
o.h(0,$.F,L.b("#e6a05e"),!0)
o.h(0,$.D,L.b("#b87232"),!0)
o.h(0,$.B,L.b("#ffd966"),!0)
o.h(0,$.I,L.b("#d1ab3b"),!0)
o.h(0,$.H,L.b("#7d5e00"),!0)
o.h(0,$.G,L.b("#6e4f00"),!0)
b=P.d(H.a(["Lies","Beach","Shore","Secrets","Pirates","Suspicion","Corruption","[REDACTED]","Cake"],p),t)
c=P.d(H.a(["MR SANDMAN","CASTLE COORDINATOR","POKER FACADE"],p),t)
f=P.d(H.a(["Strategist","Slider","Sculpter","Scamp","Sleazebag"],p),t)
h=P.d(H.a(["FALSE","Wrong","Sand","Distraction","Ruse","Crumble","abscond","beach","grain","[Data Expunged]"],p),t)
k=P.d(H.a([new E.r($.bl,3,!0),new E.r($.av,-2,!0)],i),j)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new Y.js(o,b,c,f,h," BLUH BLUH, ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.01,0.01,0.01,0.5,34,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sand",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(34,"Sand",!1,!1,!1,null,null)
$.p7=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#ff9933"),!0)
q.h(0,$.A,L.b("#ffffff"),!0)
q.h(0,$.C,L.b("#999999"),!0)
q.h(0,$.K,L.b("#ffff00"),!0)
q.h(0,$.J,L.b("#8f8f00"),!0)
q.h(0,$.E,L.b("#d1e0e3"),!0)
q.h(0,$.F,L.b("#c5d1d4"),!0)
q.h(0,$.D,L.b("#b7c2c4"),!0)
q.h(0,$.B,L.b("#00ffff"),!0)
q.h(0,$.I,L.b("#009999"),!0)
q.h(0,$.H,L.b("#b5b5b5"),!0)
q.h(0,$.G,L.b("#858585"),!0)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new L.jA(q,0.01,0.01,0.01,0.5,35,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Sky",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(35,"Sky",!1,!1,!1,null,null)
$.p9=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#10dede"),!0)
o.h(0,$.A,L.b("#00ffff"),!0)
o.h(0,$.C,L.b("#00d1d1"),!0)
o.h(0,$.K,L.b("#ff0000"),!0)
o.h(0,$.J,L.b("#d10000"),!0)
o.h(0,$.E,L.b("#4985e6"),!0)
o.h(0,$.F,L.b("#3a76d6"),!0)
o.h(0,$.D,L.b("#2d6ac4"),!0)
o.h(0,$.B,L.b("#331c73"),!0)
o.h(0,$.I,L.b("#050045"),!0)
o.h(0,$.H,L.b("#8d7cc2"),!0)
o.h(0,$.G,L.b("#7c6db3"),!0)
q=P.d(H.a(["Gel","Ice","Tape","Poetry","Caucophony"],p),t)
n=P.d(H.a(["LIL LYRICIST","ICE CREAMER","COOLER THAN BEING COOL"],p),t)
m=P.d(H.a(["Rhymer","Rapper","Rental","Redux","Rave","Reason"],p),t)
l=P.d(H.a(["Vaporwave","Chill","Ice","Rhyme","Slow"],p),t)
k=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k.h(0,$.L,L.b("#FF9B00"),!0)
k.h(0,$.A,L.b("#FF9B00"),!0)
k.h(0,$.C,L.b("#FF8700"),!0)
k.h(0,$.K,L.b("#7F7F7F"),!0)
k.h(0,$.J,L.b("#727272"),!0)
k.h(0,$.E,L.b("#A3A3A3"),!0)
k.h(0,$.F,L.b("#999999"),!0)
k.h(0,$.D,L.b("#898989"),!0)
k.h(0,$.B,L.b("#EFEFEF"),!0)
k.h(0,$.I,L.b("#DBDBDB"),!0)
k.h(0,$.H,L.b("#C6C6C6"),!0)
k.h(0,$.G,L.b("#ADADAD"),!0)
k=new Z.jk(o,q,n,m,l,"Rap","BLUH BLUH, Ask Cactus to write this. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",0.01,0.01,0.01,0.5,36,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Rhyme",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,k,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
k.R(36,"Rhyme",!1,!1,!1,null,null)
$.p4=k
k=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
k.h(0,$.L,L.b("#003300"),!0)
k.h(0,$.A,L.b("#383838"),!0)
k.h(0,$.C,L.b("#000000"),!0)
k.h(0,$.K,L.b("#2b1130"),!0)
k.h(0,$.J,L.b("#130017"),!0)
k.h(0,$.E,L.b("#eba900"),!0)
k.h(0,$.F,L.b("#c28900"),!0)
k.h(0,$.D,L.b("#855900"),!0)
k.h(0,$.B,L.b("#ffd800"),!0)
k.h(0,$.I,L.b("#d1a900"),!0)
k.h(0,$.H,L.b("#44244d"),!0)
k.h(0,$.G,L.b("#271128"),!0)
l=P.d(H.a(["Law","Courts","Trials","Rules","Edicts","Control","Cones","Order"],p),t)
m=P.d(H.a(["LEGAL LAD","SHERRIF SURESHOT","CONE KOHAI"],p),t)
n=P.d(H.a(["Lawyer","Litigator","Lands","Laborer","Lady","Lad","Lamb","Lawman","Luchador","Lover","Legislacerator"],p),t)
q=P.d(H.a(["Judge","Law Abiding","Legal","Courting","Trail","Edict","Jury","Baliff","Verdict","Sentence","Jail","Executioner"],p),t)
o=P.d(H.a(["Themis","Phoenix","Wright","Jupiter","Dike","Marduk","Fortuna"],p),t)
h=P.d(H.a([new E.r($.bE,2,!0),new E.r($.av,1,!0),new E.r($.aQ,-2,!0),new E.r($.az,-0.1,!1)],i),j)
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#FF9B00"),!0)
f.h(0,$.A,L.b("#FF9B00"),!0)
f.h(0,$.C,L.b("#FF8700"),!0)
f.h(0,$.K,L.b("#7F7F7F"),!0)
f.h(0,$.J,L.b("#727272"),!0)
f.h(0,$.E,L.b("#A3A3A3"),!0)
f.h(0,$.F,L.b("#999999"),!0)
f.h(0,$.D,L.b("#898989"),!0)
f.h(0,$.B,L.b("#EFEFEF"),!0)
f.h(0,$.I,L.b("#DBDBDB"),!0)
f.h(0,$.H,L.b("#C6C6C6"),!0)
f.h(0,$.G,L.b("#ADADAD"),!0)
f=new Q.ig(0.01,0.9,0.1,1,k,l,m,n,q,"Dirge"," A slow dirge begins to play. It is the one Death's Lawyer plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["orders","rules","edicts","sentences"],["chains","gavel","caution tape","rule book","dictionary","wig","handbook","lock"],!0,!0,o,h,0.01,0.01,0.01,0.5,37,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Law",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,f,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
f.R(37,"Law",!1,!1,!1,null,null)
$.oN=f
f=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
f.h(0,$.L,L.b("#f0b000"),!0)
f.h(0,$.A,L.b("#ffd966"),!0)
f.h(0,$.C,L.b("#f0ca59"),!0)
f.h(0,$.K,L.b("#ffff00"),!0)
f.h(0,$.J,L.b("#8f8f00"),!0)
f.h(0,$.E,L.b("#92c27c"),!0)
f.h(0,$.F,L.b("#83b36d"),!0)
f.h(0,$.D,L.b("#74a35f"),!0)
f.h(0,$.B,L.b("#39751d"),!0)
f.h(0,$.I,L.b("#2a630e"),!0)
f.h(0,$.H,L.b("#bd8e00"),!0)
f.h(0,$.G,L.b("#ad7c00"),!0)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new L.hu(f,0.01,0.01,0.01,0.5,38,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Fate",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(38,"Fate",!1,!1,!1,null,null)
$.oG=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#b2e3eb"),!0)
q.h(0,$.A,L.b("#fefefe"),!0)
q.h(0,$.C,L.b("#dfdfdf"),!0)
q.h(0,$.K,L.b("#00ffff"),!0)
q.h(0,$.J,L.b("#009090"),!0)
q.h(0,$.E,L.b("#999999"),!0)
q.h(0,$.F,L.b("#8a8a8a"),!0)
q.h(0,$.D,L.b("#7a7a7a"),!0)
q.h(0,$.B,L.b("#d0e2f2"),!0)
q.h(0,$.I,L.b("#c3d4e3"),!0)
q.h(0,$.H,L.b("#b2e3eb"),!0)
q.h(0,$.G,L.b("#a4d4db"),!0)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new O.jD(2,q,0.01,0.01,0.01,0.5,39,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Snow",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(39,"Snow",!1,!1,!1,null,null)
$.pa=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#ee0000"),!0)
o.h(0,$.A,L.b("#ff0000"),!0)
o.h(0,$.C,L.b("#d10000"),!0)
o.h(0,$.K,L.b("#00ffff"),!0)
o.h(0,$.J,L.b("#00d1d1"),!0)
o.h(0,$.E,L.b("#e68f39"),!0)
o.h(0,$.F,L.b("#d67e2b"),!0)
o.h(0,$.D,L.b("#c46b1d"),!0)
o.h(0,$.B,L.b("#e65c00"),!0)
o.h(0,$.I,L.b("#b82e00"),!0)
o.h(0,$.H,L.b("#ffd966"),!0)
o.h(0,$.G,L.b("#d1ab3b"),!0)
q=P.d(H.a(["Fire","Track","Mercury","Heat","Burns","Mixtapes","Spaghetti"],p),t)
n=P.d(H.a(["BURN WARDEN","FIRESTARTER","RAP GOD"],p),t)
m=P.d(H.a(["Flamer","Florist","Friar","Foodie"],p),t)
l=P.d(H.a(["Nightcore","Flow","Sick","Fire","Fast","Sonic","burning","speed"],p),t)
k=P.d(H.a([new E.r($.aQ,2,!0),new E.r($.bP,1,!0),new E.r($.bl,-2,!0)],i),j)
h=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
h.h(0,$.L,L.b("#FF9B00"),!0)
h.h(0,$.A,L.b("#FF9B00"),!0)
h.h(0,$.C,L.b("#FF8700"),!0)
h.h(0,$.K,L.b("#7F7F7F"),!0)
h.h(0,$.J,L.b("#727272"),!0)
h.h(0,$.E,L.b("#A3A3A3"),!0)
h.h(0,$.F,L.b("#999999"),!0)
h.h(0,$.D,L.b("#898989"),!0)
h.h(0,$.B,L.b("#EFEFEF"),!0)
h.h(0,$.I,L.b("#DBDBDB"),!0)
h.h(0,$.H,L.b("#C6C6C6"),!0)
h.h(0,$.G,L.b("#ADADAD"),!0)
h=new O.hC(o,q,n,m,l,"Mixtape "," An ill beat is laid down. It's the one that is dropped when the Pimp is in the crib. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",k,0.01,0.01,0.01,0.5,40,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Flow",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,h,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
h.R(40,"Flow",!1,!1,!1,null,null)
$.oH=h
h=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
h.h(0,$.L,L.b("#ffff33"),!0)
h.h(0,$.A,L.b("#ffff00"),!0)
h.h(0,$.C,L.b("#d1d100"),!0)
h.h(0,$.K,L.b("#00ffff"),!0)
h.h(0,$.J,L.b("#009999"),!0)
h.h(0,$.E,L.b("#0c5494"),!0)
h.h(0,$.F,L.b("#004785"),!0)
h.h(0,$.D,L.b("#003b75"),!0)
h.h(0,$.B,L.b("#20124d"),!0)
h.h(0,$.I,L.b("#11033d"),!0)
h.h(0,$.H,L.b("#0c323b"),!0)
h.h(0,$.G,L.b("#00232b"),!0)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new U.jK(h,0.01,0.01,0.01,0.5,41,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Stars",null,!1,!1,!1,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(41,"Stars",!1,!1,!1,null,null)
$.pe=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FFFF00"),!0)
q.h(0,$.A,L.b("#FFFF00"),!0)
q.h(0,$.C,L.b("#FFC935"),!0)
q.h(0,$.K,L.b("#FFC935"),!0)
q.h(0,$.J,L.b("#cca12a"),!0)
q.h(0,$.E,L.b("#FFCC00"),!0)
q.h(0,$.F,L.b("#FF9B00"),!0)
q.h(0,$.D,L.b("#C66900"),!0)
q.h(0,$.B,L.b("#FFD91C"),!0)
q.h(0,$.I,L.b("#FFE993"),!0)
q.h(0,$.H,L.b("#FFB71C"),!0)
q.h(0,$.G,L.b("#C67D00"),!0)
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.L,L.b("#FF9B00"),!0)
o.h(0,$.A,L.b("#FF9B00"),!0)
o.h(0,$.C,L.b("#FF8700"),!0)
o.h(0,$.K,L.b("#7F7F7F"),!0)
o.h(0,$.J,L.b("#727272"),!0)
o.h(0,$.E,L.b("#A3A3A3"),!0)
o.h(0,$.F,L.b("#999999"),!0)
o.h(0,$.D,L.b("#898989"),!0)
o.h(0,$.B,L.b("#EFEFEF"),!0)
o.h(0,$.I,L.b("#DBDBDB"),!0)
o.h(0,$.H,L.b("#C6C6C6"),!0)
o.h(0,$.G,L.b("#ADADAD"),!0)
o=new B.iG(q,0.01,0.01,0.01,0.5,42,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"MoonProspit",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,o,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
o.R(42,"MoonProspit",!1,!1,!0,null,null)
$.oW=o
o=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
o.h(0,$.A,L.b("#F092FF"),!0)
o.h(0,$.C,L.b("#D456EA"),!0)
o.h(0,$.K,L.b("#D456EA"),!0)
o.h(0,$.J,L.b("#a643b8"),!0)
o.h(0,$.E,L.b("#C87CFF"),!0)
o.h(0,$.F,L.b("#AA00FF"),!0)
o.h(0,$.D,L.b("#6900AF"),!0)
o.h(0,$.B,L.b("#DE00FF"),!0)
o.h(0,$.I,L.b("#E760FF"),!0)
o.h(0,$.H,L.b("#B400CC"),!0)
o.h(0,$.G,L.b("#770E87"),!0)
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new O.iF(o,0.01,0.01,0.01,0.5,43,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"MoonDerse",null,!1,!1,!0,null,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(43,"MoonDerse",!1,!1,!0,null,null)
$.oV=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#959595"),!0)
q.h(0,$.A,L.b("#bfbfbf"),!0)
q.h(0,$.C,L.b("#959595"),!0)
q.h(0,$.K,L.b("#805233"),!0)
q.h(0,$.J,L.b("#663c1f"),!0)
q.h(0,$.E,L.b("#805233"),!0)
q.h(0,$.F,L.b("#737373"),!0)
q.h(0,$.D,L.b("#664d3c"),!0)
q.h(0,$.B,L.b("#663c1f"),!0)
q.h(0,$.I,L.b("#4d2d17"),!0)
q.h(0,$.H,L.b("#68594e"),!0)
q.h(0,$.G,L.b("#4f443b"),!0)
o=P.d(H.a(["Bear","Boiler","Bean","Bepis","Boneless","Bop"],p),t)
n=$.mT
m=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.L,L.b("#FF9B00"),!0)
m.h(0,$.A,L.b("#FF9B00"),!0)
m.h(0,$.C,L.b("#FF8700"),!0)
m.h(0,$.K,L.b("#7F7F7F"),!0)
m.h(0,$.J,L.b("#727272"),!0)
m.h(0,$.E,L.b("#A3A3A3"),!0)
m.h(0,$.F,L.b("#999999"),!0)
m.h(0,$.D,L.b("#898989"),!0)
m.h(0,$.B,L.b("#EFEFEF"),!0)
m.h(0,$.I,L.b("#DBDBDB"),!0)
m.h(0,$.H,L.b("#C6C6C6"),!0)
m.h(0,$.G,L.b("#ADADAD"),!0)
m=new L.jd(q,o,0.01,0.01,0.01,0.5,44,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Bear",null,!1,!0,!0,n,null,null,null,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
m.R(44,"Re_Bear",!1,!0,!0,null,n)
$.p0=m
m=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.L,L.b("#853dcc"),!0)
m.h(0,$.A,L.b("#f76261"),!0)
m.h(0,$.C,L.b("#913a39"),!0)
m.h(0,$.K,L.b("#ab4443"),!0)
m.h(0,$.J,L.b("#78302f"),!0)
m.h(0,$.E,L.b("#a54cff"),!0)
m.h(0,$.F,L.b("#8c41d9"),!0)
m.h(0,$.D,L.b("#7335b3"),!0)
m.h(0,$.B,L.b("#853dcc"),!0)
m.h(0,$.I,L.b("#642e99"),!0)
m.h(0,$.H,L.b("#4c2375"),!0)
m.h(0,$.G,L.b("#2b1442"),!0)
n=P.d(H.a(["Hippo","Hardboiler","Homestuck","Homicide","Hopeless","Human","Hippopotamus","Hummus"],p),t)
o=$.lO
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new L.je(m,n,0.01,0.01,0.01,0.5,45,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Hippo",null,!1,!0,!0,o,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(45,"Re_Hippo",!1,!0,!0,null,o)
$.p1=q
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#3c733c"),!0)
q.h(0,$.A,L.b("#3c733c"),!0)
q.h(0,$.C,L.b("#214021"),!0)
q.h(0,$.K,L.b("#214021"),!0)
q.h(0,$.J,L.b("#070d07"),!0)
q.h(0,$.E,L.b("#2f402f"),!0)
q.h(0,$.F,L.b("#1c261c"),!0)
q.h(0,$.D,L.b("#090d09"),!0)
q.h(0,$.B,L.b("#2e582e"),!0)
q.h(0,$.I,L.b("#142614"),!0)
q.h(0,$.H,L.b("#1b331b"),!0)
q.h(0,$.G,L.b("#070d07"),!0)
o=P.d(H.a(["Lock","Lockpicker","Loser","Loss","Leeway"],p),t)
n=$.lO
m=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.L,L.b("#FF9B00"),!0)
m.h(0,$.A,L.b("#FF9B00"),!0)
m.h(0,$.C,L.b("#FF8700"),!0)
m.h(0,$.K,L.b("#7F7F7F"),!0)
m.h(0,$.J,L.b("#727272"),!0)
m.h(0,$.E,L.b("#A3A3A3"),!0)
m.h(0,$.F,L.b("#999999"),!0)
m.h(0,$.D,L.b("#898989"),!0)
m.h(0,$.B,L.b("#EFEFEF"),!0)
m.h(0,$.I,L.b("#DBDBDB"),!0)
m.h(0,$.H,L.b("#C6C6C6"),!0)
m.h(0,$.G,L.b("#ADADAD"),!0)
m=new L.jf(q,o,0.01,0.01,0.01,0.5,46,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Lock",null,!1,!0,!0,n,null,null,null,!1,!1,!0,1,m,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
m.R(46,"Re_Lock",!1,!0,!0,null,n)
$.p2=m
m=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
m.h(0,$.L,L.b("#9e9248"),!0)
m.h(0,$.A,L.b("#9e9248"),!0)
m.h(0,$.C,L.b("#6b6331"),!0)
m.h(0,$.K,L.b("#6b6331"),!0)
m.h(0,$.J,L.b("#38341a"),!0)
m.h(0,$.E,L.b("#9e9e3c"),!0)
m.h(0,$.F,L.b("#6b6b29"),!0)
m.h(0,$.D,L.b("#383815"),!0)
m.h(0,$.B,L.b("#992e2e"),!0)
m.h(0,$.I,L.b("#661f1f"),!0)
m.h(0,$.H,L.b("#6b2c30"),!0)
m.h(0,$.G,L.b("#381719"),!0)
n=P.d(H.a(["Piss","Parmesan","Potato","Pointless"],p),t)
o=$.mS
q=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
q.h(0,$.L,L.b("#FF9B00"),!0)
q.h(0,$.A,L.b("#FF9B00"),!0)
q.h(0,$.C,L.b("#FF8700"),!0)
q.h(0,$.K,L.b("#7F7F7F"),!0)
q.h(0,$.J,L.b("#727272"),!0)
q.h(0,$.E,L.b("#A3A3A3"),!0)
q.h(0,$.F,L.b("#999999"),!0)
q.h(0,$.D,L.b("#898989"),!0)
q.h(0,$.B,L.b("#EFEFEF"),!0)
q.h(0,$.I,L.b("#DBDBDB"),!0)
q.h(0,$.H,L.b("#C6C6C6"),!0)
q.h(0,$.G,L.b("#ADADAD"),!0)
q=new L.jg(m,n,0.01,0.01,0.01,0.5,47,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Re_Piss",null,!1,!0,!0,o,null,null,null,!1,!1,!0,1,q,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
q.R(47,"Re_Piss",!1,!0,!0,null,o)
$.p3=q
s=new L.z(P.e(null,null,null,t,s),P.e(null,null,null,r,s),P.e(null,null,null,t,r),P.e(null,null,null,r,t))
s.h(0,$.L,L.b("#FF9B00"),!0)
s.h(0,$.A,L.b("#FF9B00"),!0)
s.h(0,$.C,L.b("#FF8700"),!0)
s.h(0,$.K,L.b("#7F7F7F"),!0)
s.h(0,$.J,L.b("#727272"),!0)
s.h(0,$.E,L.b("#A3A3A3"),!0)
s.h(0,$.F,L.b("#999999"),!0)
s.h(0,$.D,L.b("#898989"),!0)
s.h(0,$.B,L.b("#EFEFEF"),!0)
s.h(0,$.I,L.b("#DBDBDB"),!0)
s.h(0,$.H,L.b("#C6C6C6"),!0)
s.h(0,$.G,L.b("#ADADAD"),!0)
t=new U.fZ(0.01,0.01,0.01,0.5,254,new H.l(0,null,null,null,null,null,0,g),null,"","",!1,"Combo",null,!1,!0,!0,null,null,null,null,!1,!1,!0,1,s,P.d(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),t),P.d(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Blank","Null","Boring","Error"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),P.d(H.a(["Nothing","Errors","Glitches"],p),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.d(H.a(["Null","Nothing","Mystery"],p),t),H.a([],i),H.a([],e),Q.p(null,null,d))
t.R(254,"Combo",!1,!0,!0,null,null)
$.mR=t
$.oX=L.oA(255,"Null",!1,!0,!1,null,null)
t=H.a([],p)
t=new S.ie(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Knight",new H.l(0,null,null,null,null,null,0,g),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Knight",3,!0,!1,!1)
$.ra=t
t=P.d(H.a([new E.r($.az,0.4,!1)],i),j)
s=H.a([],p)
t=new S.jx(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Seer",new H.l(0,null,null,null,null,null,0,g),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Seer",6,!0,!1,!1)
$.rn=t
t=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
s=H.a([],p)
t=new O.fQ("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],t,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Bard",new H.l(0,null,null,null,null,null,0,g),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Bard",9,!0,!1,!1)
$.r4=t
t=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
s=H.a([],p)
t=new B.hK("Stalker",0.01,0.01,1.01,t,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Heir",new H.l(0,null,null,null,null,null,0,g),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Heir",8,!0,!1,!1)
$.r7=t
t=H.a([],p)
t=new U.is(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,t,0.5,"Maid",new H.l(0,null,null,null,null,null,0,g),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Maid",0,!0,!1,!1)
$.rd=t
t=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
s=H.a([],p)
t=new N.jl(1.01,0.51,0.01,t,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Rogue",new H.l(0,null,null,null,null,null,0,g),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Rogue",4,!0,!1,!1)
$.ri=t
t=H.a([],p)
t=new V.j0(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,t,0.5,"Page",new H.l(0,null,null,null,null,null,0,g),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Page",1,!0,!1,!1)
$.rg=t
t=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
s=H.a([],p)
t=new U.k3(1.01,0.01,1.01,t,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,s,0.5,"Thief",new H.l(0,null,null,null,null,null,0,g),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Thief",7,!0,!1,!1)
$.rq=t
t=P.d(H.a([new E.r($.az,0.1,!1)],i),j)
s=H.a([],p)
t=new R.jU(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Sylph",new H.l(0,null,null,null,null,null,0,g),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Sylph",5,!0,!1,!1)
$.rp=t
t=H.a([],p)
t=new N.j8("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Prince",new H.l(0,null,null,null,null,null,0,g),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Prince",10,!0,!1,!1)
$.rh=t
t=P.d(H.a([new E.r($.az,0.1,!1)],i),j)
s=H.a([],p)
t=new M.kj("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Witch",new H.l(0,null,null,null,null,null,0,g),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Witch",11,!0,!1,!1)
$.rs=t
t=P.d(H.a([new E.r($.az,0.4,!1)],i),j)
s=H.a([],p)
t=new S.ir("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Mage",new H.l(0,null,null,null,null,null,0,g),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Mage",2,!0,!1,!1)
$.rc=t
t=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
s=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
r=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
o=P.d(H.a([new E.r($.az,3,!1),new E.r($.jM,-2,!1)],i),j)
n=H.a([],p)
t=new E.kf("Scourge",0.01,0.01,1.01,t,s,r,q,!1,!0,!1,!1,!0,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Waste",new H.l(0,null,null,null,null,null,0,g),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Waste",12,!1,!1,!1)
$.rr=t
t=H.a([],p)
t=new Y.jv("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,t,0.5,"Scout",new H.l(0,null,null,null,null,null,0,g),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Scout",13,!1,!1,!1)
$.rl=t
t=P.d(H.a([new E.r($.az,0.5,!1)],i),j)
s=H.a([],p)
t=new L.jw("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Scribe",new H.l(0,null,null,null,null,null,0,g),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Scribe",15,!1,!1,!1)
$.rm=t
t=P.d(H.a([new E.r($.az,0.5,!1)],i),j)
s=H.a([],p)
t=new E.jr(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,t,"Glitch",0.01,0.01,0.01,s,0.5,"Sage",new H.l(0,null,null,null,null,null,0,g),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Sage",14,!1,!1,!1)
$.rj=t
t=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
s=H.a([],p)
t=new Y.hH("Highlord",0.51,0.01,1.01,t,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,s,0.5,"Guide",new H.l(0,null,null,null,null,null,0,g),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Guide",16,!1,!1,!1)
$.r6=t
t=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
s=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
r=P.d(H.a([new E.r($.az,3,!1)],i),j)
q=H.a([],p)
t=new Y.hG(0.01,0.01,0.01,t,s,!1,!0,!1,!1,!0,!1,r,"Glitch",0.01,0.01,0.01,q,0.5,"Grace",new H.l(0,null,null,null,null,null,0,g),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Grace",17,!1,!1,!1)
$.r5=t
t=P.d(H.a([new E.r($.az,0.1,!1)],i),j)
s=H.a([],p)
t=new E.iH("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Muse",new H.l(0,null,null,null,null,null,0,g),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Muse",18,!1,!1,!1)
$.re=t
t=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
s=Q.p(null,null,d)
r=P.d(H.a([new E.r($.az,0.1,!1)],i),j)
q=H.a([],p)
t=new Z.iq("Shogun",0.01,0.5,2.01,t,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,s,r,"Glitch",0.01,0.01,0.01,q,0.5,"Lord",new H.l(0,null,null,null,null,null,0,g),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Lord",19,!1,!1,!1)
$.rb=t
t=P.d(H.a([new E.r($.az,-0.1,!1),new E.r($.bu,1,!1)],i),j)
s=H.a([],p)
t=new Y.jC("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Smith",new H.l(0,null,null,null,null,null,0,g),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Smith",20,!1,!1,!1)
$.ro=t
t=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
s=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
r=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
o=P.d(H.a([new E.r($.az,4,!1),new E.r($.jM,-3,!1)],i),j)
n=H.a([],p)
t=new X.hN("Hooman",0.01,0.01,1.01,t,s,r,q,!1,!0,!1,!0,!1,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Human",new H.l(0,null,null,null,null,null,0,g),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Human",21,!1,!1,!0)
$.r8=t
t=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
s=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
r=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
q=H.a(["hussie"],p)
o=P.d(H.a([new E.r($.az,41.3,!1),new E.r($.jM,41.3,!1)],i),j)
n=H.a([],p)
t=new Q.hO(20,20,0.5,t,s,r,q,!1,!0,!1,!0,!0,!1,o,"Glitch",0.01,0.01,0.01,n,0.5,"Hussie",new H.l(0,null,null,null,null,null,0,g),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Hussie",22,!1,!0,!0)
$.r9=t
t=H.a(["sans","sansly","sassy","super","soapful"],p)
s=H.a([],p)
t=new Y.jt(t,"Glitch",0.01,0.01,0.01,s,0.5,"Sans",new H.l(0,null,null,null,null,null,0,g),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Sans",23,!1,!0,!0)
$.rk=t
t=P.d(H.a([new E.r($.az,-0.05,!1),new E.r($.bu,0.8,!1)],i),j)
s=H.a([],p)
t=new M.kk(0.51,0.01,1.01,["ASPECTIST EXTRAORDINAIRE"],["wrongfully","wacky","worriful","worried","worldly"],!0,!1,!1,!1,!1,!0,t,"Glitch",0.01,0.01,0.01,s,0.5,"Wright",new H.l(0,null,null,null,null,null,0,g),null,null,24,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.p(null,null,d),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],i),H.a([],e),1)
t.a7("Wright",24,!1,!1,!0)
$.rt=t
$.rf=T.r3("Null",255,!1,!0,!1)
t=P.d(H.a([new E.r($.av,1,!0),new E.r($.cK,1,!0)],i),j)
s=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
r=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
q=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
o=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.iI(t,s,r,q,o,!1,n,m,l,k,1,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"loud","musical","Music")
t.I()
t.K()
B.bc(t)
$.pK=t
t=P.d(H.a([new E.r($.bE,-2,!0)],i),j)
s=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
r=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
q=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
o=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new S.fJ(t,s,r,q,o,!1,n,m,l,k,13,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"nerdy","smart","Academic")
t.I()
t.K()
B.bc(t)
$.pD=t
t=P.d(H.a([new E.r($.bP,2,!0)],i),j)
s=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
r=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
q=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
o=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.fP(t,s,r,q,o,!1,n,m,l,k,4,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"dumb","athletic","Athletic")
t.I()
t.K()
B.bc(t)
$.pE=t
t=P.d(H.a([new E.r($.cL,-1,!0),new E.r($.cK,1,!0)],i),j)
s=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
r=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
q=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
o=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new A.h_(t,s,r,q,o,!1,n,m,l,k,0,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"dorky","funny","Comedy")
t.I()
t.K()
B.bc(t)
$.pF=t
t=P.d(H.a([new E.r($.av,-1,!0),new E.r($.c6,-1,!0)],i),j)
s=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
r=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
q=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
o=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new M.h1(t,s,r,q,o,!1,n,m,l,k,2,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"pretentious","cultured","Culture")
t.I()
t.K()
B.bc(t)
$.pG=t
t=P.d(H.a([new E.r($.av,1,!0),new E.r($.bl,1,!0)],i),j)
s=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
r=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
q=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
o=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.h4(t,s,r,q,o,!1,n,m,l,k,8,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"boring","domestic","Domestic")
t.I()
t.K()
B.bc(t)
$.pH=t
t=P.d(H.a([new E.r($.cK,1,!0),new E.r($.bu,1,!0)],i),j)
s=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
r=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
q=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
o=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new U.ht(t,s,r,q,o,!1,n,m,l,k,7,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"whimpy","imaginative","Fantasy")
t.I()
t.K()
B.bc(t)
$.pI=t
t=P.d(H.a([new E.r($.bP,1,!0),new E.r($.c6,1,!0)],i),j)
s=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
r=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
q=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
o=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.ic(t,s,r,q,o,!1,n,m,l,k,6,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"harsh","fair-minded","Justice")
t.I()
t.K()
B.bc(t)
$.pJ=t
t=P.d(H.a([new E.r($.aQ,2,!0)],i),j)
s=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
r=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
q=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
o=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new G.j5(t,s,r,q,o,!1,n,m,l,k,9,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"frivolous","geeky","PopCulture")
t.I()
t.K()
B.bc(t)
$.pM=t
t=P.d(H.a([new E.r($.bl,2,!0)],i),j)
s=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
r=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
q=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
o=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new Q.jm(t,s,r,q,o,!1,n,m,l,k,12,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"obsessive","romantic","Romantic")
t.I()
t.K()
B.bc(t)
$.pN=t
t=P.d(H.a([new E.r($.av,2,!0)],i),j)
s=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
r=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
q=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
o=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new N.jE(t,s,r,q,o,!1,n,m,l,k,11,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"shallow","extroverted","Social")
t.I()
t.K()
B.bc(t)
$.pO=t
t=P.d(H.a([new E.r($.bl,-1,!0),new E.r($.av,-1,!0)],i),j)
s=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
r=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
q=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
o=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new V.k0(t,s,r,q,o,!1,n,m,l,k,5,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"terrible","honest","Terrible")
t.I()
t.K()
B.bc(t)
$.pQ=t
t=P.d(H.a([new E.r($.bE,2,!0)],i),j)
s=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
r=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
q=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
o=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new F.kl(t,s,r,q,o,!1,n,m,l,k,3,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"wordy","lettered","Writing")
t.I()
t.K()
B.bc(t)
$.pR=t
t=P.d(H.a([new E.r($.bu,2,!0)],i),j)
s=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
r=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
q=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
o=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
n=H.a(["nobody"],p)
m=P.d(H.a([],i),j)
l=H.a(["Nobody"],p)
k=H.a(["Nobody"],p)
t=new D.k_(t,s,r,q,o,!1,n,m,l,k,10,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"awkward","techy","Technology")
t.I()
t.K()
B.bc(t)
$.pP=t
t=H.a(["nobody"],p)
j=P.d(H.a([],i),j)
i=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
t=new B.ce(!0,t,j,i,p,-13,new H.l(0,null,null,null,null,null,0,g),["NONE"],Q.p(null,null,d),"","","Null")
t.I()
t.K()
B.bc(t)
$.pL=t
t=document
a0=t.querySelector("#aspects")
s=L.pj()
a1=P.cj(s,!0,H.y(s,0))
C.a.b5(a1,new X.lE())
for(s=a1.length,a2=0;a2<a1.length;a1.length===s||(0,H.cU)(a1),++a2){a3=a1[a2]
a4=t.createElement("div")
a4.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
p=a3.gP().F(0,$.B).bA()
q.backgroundColor=p
q=t.createElement("div")
q.className="aspectIcon"
p=W.nh(null,null,null)
o=a3.Q
p.src="../../images/"+H.v(o)+".png"
q.appendChild(p)
r.appendChild(q)
q=t.createElement("h1")
q.className="title"
p=q.style
n=a3.gP().F(0,$.A).bA()
p.color=n
q.textContent=o
r.appendChild(q)
a4.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
p=a3.cx
q.className=p?"canon":"fanon"
q.textContent=p?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+a3.e))
a4.appendChild(r)
a5=t.createElement("div")
a5.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a5.appendChild(r)
if(a3.gbb()){r=t.createElement("p")
r.textContent="Deadpan"
r.title="Mentally unaffected by trickster mode"
a5.appendChild(r)}if(a3.gcb()){r=t.createElement("p")
r.textContent="Ultimate Deadpan"
r.title="Physically unaffected by trickster mode"
a5.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a3.gbk()
a5.appendChild(r)
a4.appendChild(a5)
a4.appendChild(X.mD(a3.gL()))
a4.appendChild(X.bv("Levels",a3.gJ()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bv("Names",a3.gX()))
q=t.createElement("div")
q.className="section"
p=t.createElement("p")
p.className="toggleTitle"
p.textContent=a3.gV()
q.appendChild(p)
p=t.createElement("p")
p.textContent=a3.gT()
q.appendChild(p)
r.appendChild(X.cV("Song",q))
a4.appendChild(X.cV("Denizen",r))
r=t.createElement("div")
r.className="section"
a4.appendChild(X.cV("Quests",r))
a4.appendChild(X.bv("ChumHandles",a3.gN()))
a4.appendChild(X.bv("Land Names",a3.gY()))
a4.appendChild(X.bv("Fraymotif Names",a3.gU()))
a4.appendChild(X.cV("Palette",a3.gP().ek(o)))
a0.appendChild(a4)}a6=t.querySelector("#classes")
s=T.ru()
a7=P.cj(s,!0,H.y(s,0))
C.a.b5(a7,new X.lF())
for(s=a7.length,a2=0;a2<a7.length;a7.length===s||(0,H.cU)(a7),++a2){a8=a7[a2]
a4=t.createElement("div")
a4.className="box"
r=t.createElement("div")
r.className="title"
q=r.style
q.backgroundColor="#CCCCCC"
q=t.createElement("div")
q.className="classIcon"
p=W.nh(null,null,null)
o=J.b8(a8)
p.src="../../images/Bodies/god"+H.v(J.ds(o.gav(a8),1))+".png"
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
n=(p&&C.m).ci(p,"text-shadow")
p.setProperty(n,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
q.textContent=o.ga4(a8)
r.appendChild(q)
a4.appendChild(r)
r=t.createElement("h3")
q=t.createElement("span")
q.className=a8.gc0()?"canon":"fanon"
q.textContent=a8.gc0()?"Canon":"Fanon"
r.appendChild(q)
r.appendChild(t.createTextNode(", id: "+o.gav(a8)))
a4.appendChild(r)
a5=t.createElement("div")
a5.className="section"
r=t.createElement("h4")
r.textContent="Properties"
a5.appendChild(r)
if(a8.a9()){r=t.createElement("p")
r.textContent="Active"
a5.appendChild(r)}else{r=t.createElement("p")
r.textContent="Passive"
a5.appendChild(r)}if(a8.aB()){r=t.createElement("p")
r.textContent="Has interaction effect"
r.title="Affects the stats of friends or enemies."
a5.appendChild(r)}if(a8.ab()){r=t.createElement("p")
r.textContent="High initial stats"
a5.appendChild(r)}r=t.createElement("p")
r.textContent="Power boost mult: "+a8.gbk()
a5.appendChild(r)
a4.appendChild(a5)
a4.appendChild(X.mD(a8.gL()))
a4.appendChild(X.bv("Levels",a8.gJ()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bv("Pre-Denizen",a8.gad()))
r.appendChild(X.bv("Post-Denizen",a8.gac()))
a4.appendChild(X.cV("Quests",r))
a4.appendChild(X.bv("ChumHandles",a8.gN()))
r=t.createElement("div")
r.className="section"
q=t.createElement("p")
q.textContent="Attacker multiplier: "+H.v(a8.ai())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Defender multiplier: "+H.v(a8.aj())
r.appendChild(q)
q=t.createElement("p")
q.textContent="Murderous mlultiplier: "+H.v(a8.ak())
r.appendChild(q)
a4.appendChild(X.cV("PvP Stats",r))
a6.appendChild(a4)}a9=t.querySelector("#interests")
s=B.pS()
b0=P.cj(s,!0,H.y(s,0))
C.a.b5(b0,new X.lG())
for(s=b0.length,a2=0;a2<b0.length;b0.length===s||(0,H.cU)(b0),++a2){b1=b0[a2]
a4=t.createElement("div")
a4.className="box"
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
o=(p&&C.m).ci(p,"text-shadow")
p.setProperty(o,"-1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, 0px 1px 0px black, 0px -1px 0px black","")
p=J.b8(b1)
q.textContent=p.ga4(b1)
r.appendChild(q)
a4.appendChild(r)
r=t.createElement("h3")
r.appendChild(t.createTextNode("id: "+H.v(p.gav(b1))))
a4.appendChild(r)
a4.appendChild(X.mD(b1.gL()))
a4.appendChild(X.bv("Sub-types",b1.gao()))
a4.appendChild(X.bv("Levels",b1.gJ()))
r=t.createElement("div")
r.className="section"
r.appendChild(X.bv("First",b1.gam()))
r.appendChild(X.bv("Second",b1.gan()))
a4.appendChild(X.cV("ChumHandles",r))
a9.appendChild(a4)}},
mD:function(a){var t,s,r,q,p,o,n
t=document
s=t.createElement("div")
s.className="section"
r=t.createElement("h4")
r.textContent="Stats"
s.appendChild(r)
s.appendChild(t.createElement("table"))
for(r=J.bx(a);r.W();){q=r.ga5()
p=t.createElement("tr")
o=t.createElement("td")
n=J.ai(q)
if(!!n.$isdw)o.textContent="Stats from Interests"
else if(!!n.$iscW){o.textContent="[Random Stat]"
o.title=P.i6(q.d,"(",")")}else o.textContent=J.aY(q.gdi())
p.appendChild(o)
n=t.createElement("td")
n.className="number"
n.textContent="x "+H.v(q.geH())
p.appendChild(n)
s.appendChild(p)}return s},
cV:function(a,b){var t,s,r,q,p,o
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
C.i.bE(o,"[+]")
W.o_(p,"click",new X.lL(r,o),!1,W.c3)
p.appendChild(o)
s.appendChild(p)
r.appendChild(b)
s.appendChild(r)
return s},
bv:function(a,b){var t,s,r,q,p,o
t=document
s=t.createElement("div")
s.className="section"
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.cU)(b),++q){p=b[q]
o=t.createElement("p")
o.className="listItem"
o.textContent=J.aY(p)
s.appendChild(o)}return X.cV(a,s)},
lE:function lE(){},
lF:function lF(){},
lG:function lG(){},
lL:function lL(a,b){this.a=a
this.b=b}},N={X:function X(){},ic:function ic(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},j8:function j8(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jl:function jl(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jE:function jE(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},jG:function jG(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},k4:function k4(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l}},E={eI:function eI(){},iY:function iY(){},r:function r(a,b,c){this.a=a
this.b=b
this.c=c},cW:function cW(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},iH:function iH(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ja:function ja(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},jr:function jr(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},kf:function kf(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},Y={hG:function hG(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},hH:function hH(rx,ry,x1,x2,y1,y2,p,l,m,n,q,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},c5:function c5(a,b){this.a=a
this.b=b},a5:function a5(a,b){this.a=a
this.b=b},bp:function bp(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},iJ:function iJ(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},aI:function aI(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},O:function O(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eq:function eq(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},at:function at(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bk:function bk(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fY:function fY(c,a,b){this.c=c
this.a=a
this.b=b},ap:function ap(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},fb:function fb(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},eG:function eG(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},fc:function fc(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},js:function js(m,n,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
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
_.l=l},jt:function jt(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jv:function jv(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},jC:function jC(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},
t1:function(a){var t,s,r,q
t=C.x.f8(a," ")
for(s=t.gaa(t),r="";s.W();){q=s.ga5()
r+=" "+(H.v(q.F(0,0).fk(0))+H.v(q.bF(0,1)))}return r},
bG:function(){var t,s,r
for(t="#",s=0;s<6;++s){r=C.d.b2($.$get$oh().a.c3()*16)
if(r<0||r>=16)return H.a6("0123456789ABCDEF",r)
t+="0123456789ABCDEF"[r]}return t}},B={hK:function hK(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},
bc:function(a){var t=a.f
if($.$get$eP().at(t))throw H.S("Duplicate aspect id for "+a.M(0)+": "+t+" is already registered for "+J.aY($.$get$eP().F(0,t))+".")
$.$get$eP().i(0,t,a)},
pS:function(){var t=$.$get$eP()
t=t.gaU(t)
return new H.bS(t,new B.hT(),[H.an(t,"P",0)])},
hT:function hT(){},
ce:function ce(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
iG:function iG(m,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
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
_.y2=y2
_.p=p
_.l=l}},Q={hO:function hO(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ig:function ig(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,aM,aN,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.aM=aM
_.aN=aN
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},jm:function jm(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},ke:function ke(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},
p:function(a,b,c){var t=new Q.kh(null,null,[c])
t.dz(a,b,c)
return t},
ms:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.p(d,null,e)
s=a.gO(a)
C.a.sO(t.b,s)
if(H.fB(a,"$isP",[e],"$asP"))if(H.fB(a,"$isbR",[e],"$asbR"))for(s=J.bx(a.gbz()),r=0;s.W();){q=s.ga5()
p=t.b
o=p.length
if(r>=o)return H.a6(p,r)
p[r]=q;++r}else for(s=a.gaa(a),p=[H.y(t,0)],r=0;s.W();){n=s.ga5()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.a6(o,r)
o[r]=new Q.f(n,m,p);++r}else for(s=a.gaa(a),p=[e],o=[H.y(t,0)];s.W();){l=s.ga5()
if(H.t2(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.a6(m,0)
m[0]=new Q.f(l,k,o)}else if(H.fB(l,"$isf",p,null)){m=t.b
k=m.length
if(0>=k)return H.a6(m,0)
m[0]=l}else throw H.S("Invalid entry type "+H.v(J.mO(l))+" for WeightedList<"+H.v(H.aF(H.bW(e)))+">. Should be "+H.v(H.aF(H.bW(e)))+" or WeightPair<"+H.v(H.aF(H.bW(e)))+">.")}return t},
mt:function(a,b,c,d){return new Q.fo(J.mP(a.gbz(),new Q.ki(c,d,b)),null,[c,d])},
bR:function bR(){},
kh:function kh(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
fn:function fn(){},
f:function f(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
cP:function cP(){},
e5:function e5(){},
kg:function kg(a,$ti){this.a=a
this.$ti=$ti},
fo:function fo(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c}},K={ih:function ih(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},ju:function ju(m,n,q,t,u,v,w,A,B,C,E,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l}},G={ii:function ii(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},j5:function j5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
pq:function(a){var t,s,r,q,p,o,n
t=G.U
s=P.eZ(a,t)
r=P.bt(null,null,null,t)
q=H.a([],[G.ep])
for(t=G.qr(),p=J.bx(t.a),t=new H.fp(p,t.b,[H.y(t,0)]);t.W();){o=p.ga5()
if(o.f0(s))q.push(o)}C.a.dg(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.cU)(q),++n){o=q[n]
if(o.f0(s)){r.j(0,o)
for(p=o.gdj(),p=p.gaa(p);p.W();)s.aq(0,p.ga5())}}if(s.a!==0)r.az(0,s)
return r},
qr:function(){var t=$.$get$nA()
t.toString
return new H.bS(t,new G.i3(),[H.y(t,0)])},
U:function U(){},
ep:function ep(){},
i3:function i3(){}},D={iy:function iy(m,n,q,t,u,v,w,A,B,C,E,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
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
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2
_.y1=y1
_.y2=y2
_.p=p
_.l=l},k_:function k_(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
rz:function(){if($.nN)return
$.nN=!0
var t=new D.b6("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
t.y=0
$.jM=t
t=new D.b6("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.ry=t
t=new D.fr(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
t.y=2.5
t.Q=1
$.bP=t
t=new D.fr(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
t.y=2.5
$.c6=t
t=new D.b6("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.rx=t
t=new D.b6("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.aQ=t
t=new D.jj("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.bl=t
t=new D.b6("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.av=t
t=new D.b6("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.bE=t
t=new D.b6("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.cK=t
t=new D.b6("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.cL=t
t=new D.b6("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.bu=t
t=new D.b6("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$be().push(t)
$.az=t},
mq:function(){var t=$.$get$be()
return new H.bS(t,new D.jN(),[H.y(t,0)])},
jN:function jN(){},
b6:function b6(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
fr:function fr(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
jj:function jj(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={iI:function iI(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},kl:function kl(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
r_:function(a){var t,s
if(a.gO(a).aW(0,1)){a.F(0,1)
a.F(0,1)
t=!0}else t=!1
s=a.F(0,0)
s.gf6(s).gfj().fc("checking for two players, ps is "+H.v(a)+", ret is "+t)
return t},
qX:function(a){a.gar(a).gb9()
return!1},
qN:function(a){a.gar(a).gb9()
return!1},
qZ:function(a){a.gar(a).gb9()
return!1},
qY:function(a){a.gar(a).gb9()
return!1},
qW:function(a){return a.gar(a).gba().gfi()},
qU:function(a){return a.gar(a).gba().gfg()},
qT:function(a){return a.gar(a).gba().gff()},
qQ:function(a){return a.gar(a).gba().gfd()},
qS:function(a){return a.gar(a).gba().gfe()},
qV:function(a){return a.gar(a).gba().gfh()},
qR:function(a){var t=a.gar(a)
t.gb9()
t.gb9()
return!1},
qO:function(a){return!0},
qP:function(a){a.gar(a).gfb()
return!1},
j9:function j9(){},
W:function W(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
M:function M(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
aq:function aq(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
jo:function jo(m,n,q,t,u,v,w,A,B,C,E,D,G,H,a_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,p,l){var _=this
_.m=m
_.n=n
_.q=q
_.t=t
_.u=u
_.v=v
_.w=w
_.A=A
_.B=B
_.C=C
_.E=E
_.D=D
_.G=G
_.H=H
_.a_=a_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
_.l=l},
jU:function jU(rx,ry,x1,x2,y1,y2,p,l,m,n,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}}
var v=[C,H,J,P,W,S,L,M,O,T,U,A,V,Z,X,N,E,Y,B,Q,K,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.mg.prototype={}
J.a_.prototype={
a6:function(a,b){return a===b},
gag:function(a){return H.cG(a)},
M:function(a){return H.j7(a)},
gaf:function(a){return new H.cp(H.lu(a),null)}}
J.i7.prototype={
M:function(a){return String(a)},
gag:function(a){return a?519018:218159},
gaf:function(a){return C.W},
$isc8:1}
J.eY.prototype={
a6:function(a,b){return null==b},
M:function(a){return"null"},
gag:function(a){return 0},
gaf:function(a){return C.Q},
$isbO:1}
J.dQ.prototype={
gag:function(a){return 0},
gaf:function(a){return C.P},
M:function(a){return String(a)},
$isnC:1}
J.j4.prototype={}
J.cO.prototype={}
J.cE.prototype={
M:function(a){var t=a[$.$get$n_()]
return t==null?this.dn(a):J.aY(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.cC.prototype={
c_:function(a,b){if(!!a.immutable$list)throw H.S(new P.b7(b))},
cO:function(a,b){if(!!a.fixed$length)throw H.S(new P.b7(b))},
j:function(a,b){this.cO(a,"add")
a.push(b)},
ax:function(a,b){return new H.dg(a,b,[H.y(a,0),null])},
aF:function(a,b){if(b<0||b>=a.length)return H.a6(a,b)
return a[b]},
gar:function(a){if(a.length>0)return a[0]
throw H.S(H.me())},
b4:function(a,b,c,d,e){var t,s,r
this.c_(a,"setRange")
P.nM(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aG(P.cm(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.S(H.qs())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r<0||r>=d.length)return H.a6(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r<0||r>=d.length)return H.a6(d,r)
a[b+s]=d[r]}},
cL:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.S(new P.by(a))}return!1},
b5:function(a,b){var t
this.c_(a,"sort")
t=b==null?P.t3():b
H.fi(a,0,a.length-1,t)},
dg:function(a){return this.b5(a,null)},
ap:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b_(a[t],b))return!0
return!1},
M:function(a){return P.eV(a,"[","]")},
ah:function(a,b){var t=H.a(a.slice(0),[H.y(a,0)])
return t},
ay:function(a){return this.ah(a,!0)},
gaa:function(a){return new J.fN(a,a.length,0,null,[H.y(a,0)])},
gag:function(a){return H.cG(a)},
gO:function(a){return a.length},
sO:function(a,b){this.cO(a,"set length")
if(b<0)throw H.S(P.cm(b,0,null,"newLength",null))
a.length=b},
F:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.S(H.aN(a,b))
if(b>=a.length||b<0)throw H.S(H.aN(a,b))
return a[b]},
i:function(a,b,c){this.c_(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.S(H.aN(a,b))
if(b>=a.length||b<0)throw H.S(H.aN(a,b))
a[b]=c},
$isbj:1,
$asbj:function(){},
$isa4:1,
$asa4:null,
$isa0:1,
$asa0:null,
$isP:1,
$asP:null}
J.mf.prototype={}
J.fN.prototype={
ga5:function(){return this.d},
W:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.S(H.cU(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.df.prototype={
aK:function(a,b){var t
if(typeof b!=="number")throw H.S(H.bV(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gc1(b)
if(this.gc1(a)===t)return 0
if(this.gc1(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc1:function(a){return a===0?1/a<0:a<0},
b2:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.S(new P.b7(""+a+".floor()"))},
c7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.S(new P.b7(""+a+".round()"))},
ae:function(a,b,c){if(C.b.aK(b,c)>0)throw H.S(H.bV(b))
if(this.aK(a,b)<0)return b
if(this.aK(a,c)>0)return c
return a},
eZ:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.S(P.cm(b,2,36,"radix",null))
t=a.toString(b)
if(C.e.ef(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aG(new P.b7("Unexpected toString result: "+t))
r=J.bn(s)
t=r.F(s,1)
q=+r.F(s,3)
if(r.F(s,2)!=null){t+=r.F(s,2)
q-=r.F(s,2).length}return t+C.e.aH("0",q)},
M:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gag:function(a){return a&0x1FFFFFFF},
aG:function(a,b){if(typeof b!=="number")throw H.S(H.bV(b))
return a+b},
aH:function(a,b){return a*b},
al:function(a,b){return(a|0)===a?a/b|0:this.e8(a,b)},
e8:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.S(new P.b7("Result of truncating division is "+H.v(t)+": "+H.v(a)+" ~/ "+b))},
cG:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
aX:function(a,b){if(typeof b!=="number")throw H.S(H.bV(b))
return a<b},
aW:function(a,b){if(typeof b!=="number")throw H.S(H.bV(b))
return a>b},
gaf:function(a){return C.Z},
$isbI:1}
J.eX.prototype={
gaf:function(a){return C.Y},
$isQ:1,
$isbI:1,
$isa3:1}
J.i8.prototype={
gaf:function(a){return C.X},
$isQ:1,
$isbI:1}
J.cD.prototype={
ef:function(a,b){if(b<0)throw H.S(H.aN(a,b))
if(b>=a.length)H.aG(H.aN(a,b))
return a.charCodeAt(b)},
cj:function(a,b){if(b>=a.length)throw H.S(H.aN(a,b))
return a.charCodeAt(b)},
aG:function(a,b){if(typeof b!=="string")throw H.S(P.fM(b,null,null))
return a+b},
dh:function(a,b,c){var t
if(c>a.length)throw H.S(P.cm(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
ce:function(a,b){return this.dh(a,b,0)},
dk:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aG(H.bV(c))
if(b<0)throw H.S(P.jc(b,null,null))
if(typeof c!=="number")return H.dr(c)
if(b>c)throw H.S(P.jc(b,null,null))
if(c>a.length)throw H.S(P.jc(c,null,null))
return a.substring(b,c)},
bF:function(a,b){return this.dk(a,b,null)},
eY:function(a){return a.toLowerCase()},
aH:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.S(C.t)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
eK:function(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aH(c,t)+a},
eh:function(a,b,c){if(c>a.length)throw H.S(P.cm(c,0,a.length,null,null))
return H.tk(a,b,c)},
aK:function(a,b){var t
if(typeof b!=="string")throw H.S(H.bV(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
M:function(a){return a},
gag:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gaf:function(a){return C.R},
gO:function(a){return a.length},
F:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.S(H.aN(a,b))
if(b>=a.length||b<0)throw H.S(H.aN(a,b))
return a[b]},
$isbj:1,
$asbj:function(){},
$isN:1}
H.a0.prototype={$asa0:null}
H.cF.prototype={
gaa:function(a){return new H.f0(this,this.gO(this),0,null,[H.an(this,"cF",0)])},
bB:function(a,b){return this.dm(0,b)},
ax:function(a,b){return new H.dg(this,b,[H.an(this,"cF",0),null])},
ah:function(a,b){var t,s,r
t=H.a([],[H.an(this,"cF",0)])
C.a.sO(t,this.gO(this))
for(s=0;s<this.gO(this);++s){r=this.aF(0,s)
if(s>=t.length)return H.a6(t,s)
t[s]=r}return t},
ay:function(a){return this.ah(a,!0)}}
H.f0.prototype={
ga5:function(){return this.d},
W:function(){var t,s,r,q
t=this.a
s=J.bn(t)
r=s.gO(t)
if(this.b!==r)throw H.S(new P.by(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.aF(t,q);++this.c
return!0}}
H.dS.prototype={
gaa:function(a){return new H.f1(null,J.bx(this.a),this.b,this.$ti)},
gO:function(a){return J.dt(this.a)},
$asP:function(a,b){return[b]}}
H.eu.prototype={$isa0:1,
$asa0:function(a,b){return[b]},
$asP:function(a,b){return[b]}}
H.f1.prototype={
W:function(){var t=this.b
if(t.W()){this.a=this.c.$1(t.ga5())
return!0}this.a=null
return!1},
ga5:function(){return this.a},
$aseW:function(a,b){return[b]}}
H.dg.prototype={
gO:function(a){return J.dt(this.a)},
aF:function(a,b){return this.b.$1(J.or(this.a,b))},
$ascF:function(a,b){return[b]},
$asa0:function(a,b){return[b]},
$asP:function(a,b){return[b]}}
H.bS.prototype={
gaa:function(a){return new H.fp(J.bx(this.a),this.b,this.$ti)},
ax:function(a,b){return new H.dS(this,b,[H.y(this,0),null])}}
H.fp.prototype={
W:function(){var t,s
for(t=this.a,s=this.b;t.W();)if(s.$1(t.ga5())===!0)return!0
return!1},
ga5:function(){return this.a.ga5()}}
H.eE.prototype={}
H.lJ.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.lK.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.l0.prototype={}
H.dl.prototype={
cK:function(a,b){if(!this.f.a6(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.bY()},
eT:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.aq(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.a6(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.a6(p,q)
p[q]=r
if(q===s.c)s.cq();++s.d}this.y=!1}this.bY()},
eb:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a6(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.a6(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
eS:function(a){var t,s,r
if(this.ch==null)return
for(t=J.ai(a),s=0;r=this.ch,s<r.length;s+=2)if(t.a6(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aG(new P.b7("removeRange"))
P.nM(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
de:function(a,b){if(!this.r.a6(0,a))return
this.db=b},
ew:function(a,b,c){var t=J.ai(b)
if(!t.a6(b,0))t=t.a6(b,1)&&!this.cy
else t=!0
if(t){J.dv(a,c)
return}t=this.cx
if(t==null){t=P.mk(null,null)
this.cx=t}t.aI(new H.kV(a,c))},
ev:function(a,b){var t
if(!this.r.a6(0,a))return
t=J.ai(b)
if(!t.a6(b,0))t=t.a6(b,1)&&!this.cy
else t=!0
if(t){this.by()
return}t=this.cx
if(t==null){t=P.mk(null,null)
this.cx=t}t.aI(this.geF())},
ex:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.mJ(a)
if(b!=null)P.mJ(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aY(a)
s[1]=b==null?null:J.aY(b)
for(r=new P.cT(t,t.r,null,null,[null]),r.c=t.e;r.W();)J.dv(r.d,s)},
bd:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.b9(o)
p=H.bH(o)
this.ex(q,p)
if(this.db===!0){this.by()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.geE()
if(this.cx!=null)for(;n=this.cx,!n.gaw(n);)this.cx.cW().$0()}return s},
cU:function(a){return this.b.F(0,a)},
cg:function(a,b){var t=this.b
if(t.at(a))throw H.S(P.hb("Registry: ports must be registered only once."))
t.i(0,a,b)},
bY:function(){var t=this.b
if(t.gO(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.by()},
by:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b1(0)
for(t=this.b,s=t.gaU(t),s=s.gaa(s);s.W();)s.ga5().dK()
t.b1(0)
this.c.b1(0)
u.globalState.z.aq(0,this.a)
this.dx.b1(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.a6(t,p)
J.dv(q,t[p])}this.ch=null}},
gav:function(a){return this.a},
geE:function(){return this.d},
gei:function(){return this.e}}
H.kV.prototype={
$0:function(){J.dv(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.kB.prototype={
el:function(){var t=this.a
if(t.b===t.c)return
return t.cW()},
d_:function(){var t,s,r
t=this.el()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.at(u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gaw(s)}else s=!1
else s=!1
else s=!1
if(s)H.aG(P.hb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gaw(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.dR(["command","close"])
r=new H.bU(!0,new P.fw(0,null,null,null,null,null,0,[null,P.a3])).as(r)
s.toString
self.postMessage(r)}return!1}t.eQ()
return!0},
cC:function(){if(self.window!=null)new H.kC(this).$0()
else for(;this.d_(););},
bl:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.cC()
else try{this.cC()}catch(r){t=H.b9(r)
s=H.bH(r)
q=u.globalState.Q
p=P.dR(["command","error","msg",H.v(t)+"\n"+H.v(s)])
p=new H.bU(!0,P.eb(null,P.a3)).as(p)
q.toString
self.postMessage(p)}}}
H.kC.prototype={
$0:function(){if(!this.a.d_())return
P.rC(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.cR.prototype={
eQ:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bd(this.b)}}
H.l_.prototype={}
H.hU.prototype={
$0:function(){H.pW(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.hV.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.dq(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.dq(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.bY()},
$S:function(){return{func:1,v:true}}}
H.kr.prototype={}
H.dm.prototype={
bD:function(a,b){var t,s,r
t=u.globalState.z.F(0,this.a)
if(t==null)return
s=this.b
if(s.gct())return
r=H.rR(b)
if(t.gei()===s){s=J.bn(r)
switch(s.F(r,0)){case"pause":t.cK(s.F(r,1),s.F(r,2))
break
case"resume":t.eT(s.F(r,1))
break
case"add-ondone":t.eb(s.F(r,1),s.F(r,2))
break
case"remove-ondone":t.eS(s.F(r,1))
break
case"set-errors-fatal":t.de(s.F(r,1),s.F(r,2))
break
case"ping":t.ew(s.F(r,1),s.F(r,2),s.F(r,3))
break
case"kill":t.ev(s.F(r,1),s.F(r,2))
break
case"getErrors":s=s.F(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.F(r,1)
t.dx.aq(0,s)
break}return}u.globalState.f.a.aI(new H.cR(t,new H.l2(this,r),"receive"))},
a6:function(a,b){if(b==null)return!1
return b instanceof H.dm&&J.b_(this.b,b.b)},
gag:function(a){return this.b.gbQ()}}
H.l2.prototype={
$0:function(){var t=this.a.b
if(!t.gct())t.dH(this.b)},
$S:function(){return{func:1}}}
H.ee.prototype={
bD:function(a,b){var t,s,r
t=P.dR(["command","message","port",this,"msg",b])
s=new H.bU(!0,P.eb(null,P.a3)).as(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.F(0,this.b)
if(r!=null)r.postMessage(s)}},
a6:function(a,b){if(b==null)return!1
return b instanceof H.ee&&J.b_(this.b,b.b)&&J.b_(this.a,b.a)&&J.b_(this.c,b.c)},
gag:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.aY()
s=this.a
if(typeof s!=="number")return s.aY()
r=this.c
if(typeof r!=="number")return H.dr(r)
return(t<<16^s<<8^r)>>>0}}
H.dj.prototype={
dK:function(){this.c=!0
this.b=null},
dH:function(a){if(this.c)return
this.b.$1(a)},
$isr1:1,
gbQ:function(){return this.a},
gct:function(){return this.c}}
H.k5.prototype={
dw:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aI(new H.cR(s,new H.k6(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.ei(new H.k7(this,b),0),a)}else throw H.S(new P.b7("Timer greater than 0."))}}
H.k6.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.k7.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.bZ.prototype={
gag:function(a){var t=this.a
if(typeof t!=="number")return t.f7()
t=C.d.cG(t,0)^C.d.al(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
a6:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.bZ){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gbQ:function(){return this.a}}
H.bU.prototype={
as:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.F(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gO(t))
t=J.ai(a)
if(!!t.$isdW)return["buffer",a]
if(!!t.$isdh)return["typed",a]
if(!!t.$isbj)return this.d9(a)
if(!!t.$ispT){r=this.gd6()
q=a.gb3()
q=H.dT(q,r,H.an(q,"P",0),null)
q=P.cj(q,!0,H.an(q,"P",0))
t=t.gaU(a)
t=H.dT(t,r,H.an(t,"P",0),null)
return["map",q,P.cj(t,!0,H.an(t,"P",0))]}if(!!t.$isnC)return this.da(a)
if(!!t.$isa_)this.d2(a)
if(!!t.$isr1)this.bm(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isdm)return this.dc(a)
if(!!t.$isee)return this.dd(a)
if(!!t.$isd_){p=a.$static_name
if(p==null)this.bm(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isbZ)return["capability",a.a]
if(!(a instanceof P.ay))this.d2(a)
return["dart",u.classIdExtractor(a),this.d8(u.classFieldsExtractor(a))]},
bm:function(a,b){throw H.S(new P.b7((b==null?"Can't transmit:":b)+" "+H.v(a)))},
d2:function(a){return this.bm(a,null)},
d9:function(a){var t=this.d7(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bm(a,"Can't serialize indexable: ")},
d7:function(a){var t,s,r
t=[]
C.a.sO(t,a.length)
for(s=0;s<a.length;++s){r=this.as(a[s])
if(s>=t.length)return H.a6(t,s)
t[s]=r}return t},
d8:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.as(a[t]))
return a},
da:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bm(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sO(s,t.length)
for(r=0;r<t.length;++r){q=this.as(a[t[r]])
if(r>=s.length)return H.a6(s,r)
s[r]=q}return["js-object",t,s]},
dd:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dc:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gbQ()]
return["raw sendport",a]}}
H.cQ.prototype={
aL:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.S(P.mQ("Bad serialized message: "+H.v(a)))
switch(C.a.gar(a)){case"ref":if(1>=a.length)return H.a6(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.a6(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bc(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bc(r),[null])
case"mutable":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
return this.bc(r)
case"const":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bc(r),[null])
s.fixed$length=Array
return s
case"map":return this.eq(a)
case"sendport":return this.er(a)
case"raw sendport":if(1>=a.length)return H.a6(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.ep(a)
case"function":if(1>=a.length)return H.a6(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.a6(a,1)
return new H.bZ(a[1])
case"dart":s=a.length
if(1>=s)return H.a6(a,1)
q=a[1]
if(2>=s)return H.a6(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bc(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.S("couldn't deserialize: "+H.v(a))}},
bc:function(a){var t,s,r
t=J.bn(a)
s=0
while(!0){r=t.gO(a)
if(typeof r!=="number")return H.dr(r)
if(!(s<r))break
t.i(a,s,this.aL(t.F(a,s)));++s}return a},
eq:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.a6(a,1)
s=a[1]
if(2>=t)return H.a6(a,2)
r=a[2]
q=P.nD()
this.b.push(q)
s=J.oy(J.mP(s,this.geo()))
for(t=J.bn(s),p=J.bn(r),o=0;o<t.gO(s);++o)q.i(0,t.F(s,o),this.aL(p.F(r,o)))
return q},
er:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.a6(a,1)
s=a[1]
if(2>=t)return H.a6(a,2)
r=a[2]
if(3>=t)return H.a6(a,3)
q=a[3]
if(J.b_(s,u.globalState.b)){p=u.globalState.z.F(0,r)
if(p==null)return
o=p.cU(q)
if(o==null)return
n=new H.dm(o,r)}else n=new H.ee(s,q,r)
this.b.push(n)
return n},
ep:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.a6(a,1)
s=a[1]
if(2>=t)return H.a6(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.bn(s)
p=J.bn(r)
o=0
while(!0){n=t.gO(s)
if(typeof n!=="number")return H.dr(n)
if(!(o<n))break
q[t.F(s,o)]=this.aL(p.F(r,o));++o}return q}}
H.ji.prototype={}
H.k9.prototype={
aC:function(a){var t,s,r
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
H.f8.prototype={
M:function(a){var t=this.b
if(t==null)return"NullError: "+H.v(this.a)
return"NullError: method not found: '"+H.v(t)+"' on null"}}
H.ia.prototype={
M:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.v(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.v(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.v(this.a)+")"}}
H.kb.prototype={
M:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.lM.prototype={
$1:function(a){if(!!J.ai(a).$iscu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.fx.prototype={
M:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.lz.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.lA.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.lB.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.lC.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.lD.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.d_.prototype={
M:function(a){return"Closure '"+H.nH(this).trim()+"'"},
gf2:function(){return this},
$D:null}
H.jZ.prototype={}
H.jL.prototype={
M:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.dx.prototype={
a6:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.dx))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gag:function(a){var t,s
t=this.c
if(t==null)s=H.cG(this.a)
else s=typeof t!=="object"?J.bX(t):H.cG(t)
t=H.cG(this.b)
if(typeof s!=="number")return s.fa()
return(s^t)>>>0},
M:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.v(this.d)+"' of "+H.j7(t)}}
H.jp.prototype={
M:function(a){return"RuntimeError: "+H.v(this.a)}}
H.cp.prototype={
M:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gag:function(a){return J.bX(this.a)},
a6:function(a,b){if(b==null)return!1
return b instanceof H.cp&&J.b_(this.a,b.a)}}
H.l.prototype={
gO:function(a){return this.a},
gaw:function(a){return this.a===0},
gb3:function(){return new H.il(this,[H.y(this,0)])},
gaU:function(a){return H.dT(this.gb3(),new H.i9(this),H.y(this,0),H.y(this,1))},
at:function(a){var t
if((a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dP(t,a)}else return this.eB(a)},
eB:function(a){var t=this.d
if(t==null)return!1
return this.bf(this.br(t,this.be(a)),a)>=0},
F:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.b7(t,b)
return s==null?null:s.gaO()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.b7(r,b)
return s==null?null:s.gaO()}else return this.eC(b)},
eC:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.br(t,this.be(a))
r=this.bf(s,a)
if(r<0)return
return s[r].gaO()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.bS()
this.b=t}this.cf(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.bS()
this.c=s}this.cf(s,b,c)}else{r=this.d
if(r==null){r=this.bS()
this.d=r}q=this.be(b)
p=this.br(r,q)
if(p==null)this.bX(r,q,[this.bT(b,c)])
else{o=this.bf(p,b)
if(o>=0)p[o].saO(c)
else p.push(this.bT(b,c))}}},
aq:function(a,b){if(typeof b==="string")return this.cB(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cB(this.c,b)
else return this.eD(b)},
eD:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.br(t,this.be(a))
r=this.bf(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.cI(q)
return q.gaO()},
b1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cP:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.S(new P.by(this))
t=t.c}},
cf:function(a,b,c){var t=this.b7(a,b)
if(t==null)this.bX(a,b,this.bT(b,c))
else t.saO(c)},
cB:function(a,b){var t
if(a==null)return
t=this.b7(a,b)
if(t==null)return
this.cI(t)
this.co(a,b)
return t.gaO()},
bT:function(a,b){var t,s
t=new H.ik(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cI:function(a){var t,s
t=a.ge2()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
be:function(a){return J.bX(a)&0x3ffffff},
bf:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gcS(),b))return s
return-1},
M:function(a){return P.qu(this)},
b7:function(a,b){return a[b]},
br:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
co:function(a,b){delete a[b]},
dP:function(a,b){return this.b7(a,b)!=null},
bS:function(){var t=Object.create(null)
this.bX(t,"<non-identifier-key>",t)
this.co(t,"<non-identifier-key>")
return t},
$ispT:1}
H.i9.prototype={
$1:function(a){return this.a.F(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.ik.prototype={
gcS:function(){return this.a},
gaO:function(){return this.b},
ge2:function(){return this.d},
saO:function(a){return this.b=a}}
H.il.prototype={
gO:function(a){return this.a.a},
gaa:function(a){var t,s
t=this.a
s=new H.im(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.im.prototype={
ga5:function(){return this.d},
W:function(){var t=this.a
if(this.b!==t.r)throw H.S(new P.by(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.lv.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.lw.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.N]}}}
H.lx.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.N]}}}
H.dW.prototype={
gaf:function(a){return C.I},
$isdW:1}
H.dh.prototype={$isdh:1}
H.iK.prototype={
gaf:function(a){return C.J}}
H.f2.prototype={
gO:function(a){return a.length},
$isbC:1,
$asbC:function(){},
$isbj:1,
$asbj:function(){}}
H.f3.prototype={
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
a[b]=c}}
H.dX.prototype={
$asbC:function(){},
$asbj:function(){},
$asa4:function(){return[P.Q]},
$asa0:function(){return[P.Q]},
$asP:function(){return[P.Q]},
$isa4:1,
$isa0:1,
$isP:1}
H.dZ.prototype={
$asbC:function(){},
$asbj:function(){},
$asa4:function(){return[P.Q]},
$asa0:function(){return[P.Q]},
$asP:function(){return[P.Q]}}
H.f4.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
a[b]=c},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.dY.prototype={
$asbC:function(){},
$asbj:function(){},
$asa4:function(){return[P.a3]},
$asa0:function(){return[P.a3]},
$asP:function(){return[P.a3]},
$isa4:1,
$isa0:1,
$isP:1}
H.e_.prototype={
$asbC:function(){},
$asbj:function(){},
$asa4:function(){return[P.a3]},
$asa0:function(){return[P.a3]},
$asP:function(){return[P.a3]}}
H.iL.prototype={
gaf:function(a){return C.K},
$isa4:1,
$asa4:function(){return[P.Q]},
$isa0:1,
$asa0:function(){return[P.Q]},
$isP:1,
$asP:function(){return[P.Q]}}
H.iM.prototype={
gaf:function(a){return C.L},
$isa4:1,
$asa4:function(){return[P.Q]},
$isa0:1,
$asa0:function(){return[P.Q]},
$isP:1,
$asP:function(){return[P.Q]}}
H.iN.prototype={
gaf:function(a){return C.M},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.iO.prototype={
gaf:function(a){return C.N},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.iP.prototype={
gaf:function(a){return C.O},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.iQ.prototype={
gaf:function(a){return C.S},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.iR.prototype={
gaf:function(a){return C.T},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.f5.prototype={
gaf:function(a){return C.U},
gO:function(a){return a.length},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
H.iS.prototype={
gaf:function(a){return C.V},
gO:function(a){return a.length},
F:function(a,b){if(b>>>0!==b||b>=a.length)H.aG(H.aN(a,b))
return a[b]},
$isa4:1,
$asa4:function(){return[P.a3]},
$isa0:1,
$asa0:function(){return[P.a3]},
$isP:1,
$asP:function(){return[P.a3]}}
P.kn.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.km.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.ko.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.kp.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.fu.prototype={
gea:function(){return this.b.b},
gcR:function(){return(this.c&1)!==0},
geA:function(){return(this.c&2)!==0},
gcQ:function(){return this.c===8},
ey:function(a){return this.b.b.c8(this.d,a)},
eG:function(a){if(this.c!==6)return!0
return this.b.b.c8(this.d,J.ek(a))},
eu:function(a){var t,s,r
t=this.e
s=J.b8(a)
r=this.b.b
if(H.dq(t,{func:1,args:[,,]}))return r.eU(t,s.gaR(a),a.gaQ())
else return r.c8(t,s.gaR(a))},
ez:function(){return this.b.b.cY(this.d)},
gbU:function(){return this.a}}
P.bT.prototype={
ge_:function(){return this.a===2},
gbR:function(){return this.a>=4},
d0:function(a,b){var t,s,r
t=$.ar
if(t!==C.c){t.toString
if(b!=null)b=P.o5(b,t)}s=new P.bT(0,t,null,[null])
r=b==null?1:3
this.bH(new P.fu(null,s,r,a,b,[H.y(this,0),null]))
return s},
eX:function(a){return this.d0(a,null)},
d4:function(a){var t,s
t=$.ar
s=new P.bT(0,t,null,this.$ti)
if(t!==C.c)t.toString
t=H.y(this,0)
this.bH(new P.fu(null,s,8,a,null,[t,t]))
return s},
bH:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gbR()){s.bH(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.lo(null,null,t,new P.kH(this,a))}},
cA:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gbU()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gbR()){p.cA(a)
return}this.a=p.a
this.c=p.c}t.a=this.bv(a)
s=this.b
s.toString
P.lo(null,null,s,new P.kL(t,this))}},
bW:function(){var t=this.c
this.c=null
return this.bv(t)},
bv:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gbU()
t.a=s}return s},
bM:function(a){var t,s
t=this.$ti
if(H.fB(a,"$isdK",t,"$asdK"))if(H.fB(a,"$isbT",t,null))P.o0(a,this)
else P.rJ(a,this)
else{s=this.bW()
this.a=4
this.c=a
P.e8(this,s)}},
bp:function(a,b){var t=this.bW()
this.a=8
this.c=new P.cX(a,b)
P.e8(this,t)},
dM:function(a){return this.bp(a,null)},
dD:function(a,b){this.a=4
this.c=a},
$isdK:1,
gbw:function(){return this.a},
ge4:function(){return this.c}}
P.kH.prototype={
$0:function(){P.e8(this.a,this.b)},
$S:function(){return{func:1}}}
P.kL.prototype={
$0:function(){P.e8(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.kI.prototype={
$1:function(a){var t=this.a
t.a=0
t.bM(a)},
$S:function(){return{func:1,args:[,]}}}
P.kJ.prototype={
$2:function(a,b){this.a.bp(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.kK.prototype={
$0:function(){this.a.bp(this.b,this.c)},
$S:function(){return{func:1}}}
P.kO.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.ez()}catch(q){s=H.b9(q)
r=H.bH(q)
if(this.c){p=J.ek(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.cX(s,r)
o.a=!0
return}if(!!J.ai(t).$isdK){if(t instanceof P.bT&&t.gbw()>=4){if(t.gbw()===8){p=this.b
p.b=t.ge4()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.eX(new P.kP(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.kP.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.kN.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.ey(this.c)}catch(r){t=H.b9(r)
s=H.bH(r)
q=this.a
q.b=new P.cX(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.kM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.eG(t)===!0&&q.e!=null){p=this.b
p.b=q.eu(t)
p.a=!1}}catch(o){s=H.b9(o)
r=H.bH(o)
q=this.a
p=J.ek(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.cX(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.fs.prototype={}
P.cM.prototype={
ax:function(a,b){return new P.l1(b,this,[H.an(this,"cM",0),null])},
gO:function(a){var t,s
t={}
s=new P.bT(0,$.ar,null,[P.a3])
t.a=0
this.bi(new P.jP(t),!0,new P.jQ(t,s),s.gcn())
return s},
ay:function(a){var t,s,r
t=H.an(this,"cM",0)
s=H.a([],[t])
r=new P.bT(0,$.ar,null,[[P.a4,t]])
this.bi(new P.jR(this,s),!0,new P.jS(s,r),r.gcn())
return r}}
P.jP.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.jQ.prototype={
$0:function(){this.b.bM(this.a.a)},
$S:function(){return{func:1}}}
P.jR.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.mC(function(a){return{func:1,args:[a]}},this.a,"cM")}}
P.jS.prototype={
$0:function(){this.b.bM(this.a)},
$S:function(){return{func:1}}}
P.jO.prototype={}
P.bF.prototype={
c4:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.cN()
if((t&4)===0&&(this.e&32)===0)this.cr(this.gcw())},
cV:function(a){return this.c4(a,null)},
cX:function(){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gaw(t)}else t=!1
if(t)this.r.bC(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.cr(this.gcz())}}}},
cM:function(){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.bJ()
t=this.f
return t==null?$.$get$hD():t},
bJ:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.cN()
if((this.e&32)===0)this.r=null
this.f=this.cv()},
bo:function(a){var t=this.e
if((t&8)!==0)return
if(t<32)this.cD(a)
else this.bI(new P.kv(a,null,[H.an(this,"bF",0)]))},
bn:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.cF(a,b)
else this.bI(new P.kx(a,b,null))},
dJ:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.cE()
else this.bI(C.u)},
bt:function(){},
bu:function(){},
cv:function(){return},
bI:function(a){var t,s
t=this.r
if(t==null){t=new P.lh(null,null,0,[H.an(this,"bF",0)])
this.r=t}t.j(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.bC(this)}},
cD:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.c9(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bK((t&4)!==0)},
cF:function(a,b){var t,s
t=this.e
s=new P.kt(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.bJ()
t=this.f
if(!!J.ai(t).$isdK&&t!==$.$get$hD())t.d4(s)
else s.$0()}else{s.$0()
this.bK((t&4)!==0)}},
cE:function(){var t,s
t=new P.ks(this)
this.bJ()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.ai(s).$isdK&&s!==$.$get$hD())s.d4(t)
else t.$0()},
cr:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bK((t&4)!==0)},
bK:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gaw(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gaw(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bt()
else this.bu()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.bC(this)},
dA:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.o5(b,t)
this.c=c},
gbw:function(){return this.e}}
P.kt.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.dq(s,{func:1,args:[P.ay,P.cJ]})
q=t.d
p=this.b
o=t.b
if(r)q.eV(o,p,this.c)
else q.c9(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.ks.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cZ(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.ft.prototype={
gbj:function(){return this.a},
sbj:function(a){return this.a=a}}
P.kv.prototype={
c5:function(a){a.cD(this.b)}}
P.kx.prototype={
c5:function(a){a.cF(this.b,this.c)},
$asft:function(){},
gaR:function(a){return this.b},
gaQ:function(){return this.c}}
P.kw.prototype={
c5:function(a){a.cE()},
gbj:function(){return},
sbj:function(a){throw H.S(new P.co("No events after a done."))}}
P.l3.prototype={
bC:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.ok(new P.l4(this,a))
this.a=1},
cN:function(){if(this.a===1)this.a=3},
gbw:function(){return this.a}}
P.l4.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbj()
t.b=q
if(q==null)t.c=null
r.c5(this.b)},
$S:function(){return{func:1}}}
P.lh.prototype={
gaw:function(a){return this.c==null},
j:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbj(b)
this.c=b}}}
P.e6.prototype={
bi:function(a,b,c,d){return this.dQ(a,d,c,!0===b)},
cT:function(a,b,c){return this.bi(a,null,b,c)},
dQ:function(a,b,c,d){return P.rI(this,a,b,c,d,H.an(this,"e6",0),H.an(this,"e6",1))},
cs:function(a,b){b.bo(a)},
dY:function(a,b,c){c.bn(a,b)},
$ascM:function(a,b){return[b]}}
P.e7.prototype={
bo:function(a){if((this.e&2)!==0)return
this.dq(a)},
bn:function(a,b){if((this.e&2)!==0)return
this.dr(a,b)},
bt:function(){var t=this.y
if(t==null)return
t.cV(0)},
bu:function(){var t=this.y
if(t==null)return
t.cX()},
cv:function(){var t=this.y
if(t!=null){this.y=null
return t.cM()}return},
dT:function(a){this.x.cs(a,this)},
dX:function(a,b){this.x.dY(a,b,this)},
dV:function(){this.dJ()},
dC:function(a,b,c,d,e,f,g){this.y=this.x.a.cT(this.gdS(),this.gdU(),this.gdW())},
$asbF:function(a,b){return[b]}}
P.l1.prototype={
cs:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.b9(q)
r=H.bH(q)
P.rQ(b,s,r)
return}b.bo(t)}}
P.cX.prototype={
M:function(a){return H.v(this.a)},
$iscu:1,
gaR:function(a){return this.a},
gaQ:function(){return this.b}}
P.lm.prototype={}
P.ln.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.f9()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.S(t)
r=H.S(t)
r.stack=J.aY(s)
throw r},
$S:function(){return{func:1}}}
P.l6.prototype={
cZ:function(a){var t,s,r,q
try{if(C.c===$.ar){r=a.$0()
return r}r=P.o6(null,null,this,a)
return r}catch(q){t=H.b9(q)
s=H.bH(q)
r=P.fA(null,null,this,t,s)
return r}},
c9:function(a,b){var t,s,r,q
try{if(C.c===$.ar){r=a.$1(b)
return r}r=P.o8(null,null,this,a,b)
return r}catch(q){t=H.b9(q)
s=H.bH(q)
r=P.fA(null,null,this,t,s)
return r}},
eV:function(a,b,c){var t,s,r,q
try{if(C.c===$.ar){r=a.$2(b,c)
return r}r=P.o7(null,null,this,a,b,c)
return r}catch(q){t=H.b9(q)
s=H.bH(q)
r=P.fA(null,null,this,t,s)
return r}},
bZ:function(a,b){if(b)return new P.l7(this,a)
else return new P.l8(this,a)},
ee:function(a,b){return new P.l9(this,a)},
F:function(a,b){return},
cY:function(a){if($.ar===C.c)return a.$0()
return P.o6(null,null,this,a)},
c8:function(a,b){if($.ar===C.c)return a.$1(b)
return P.o8(null,null,this,a,b)},
eU:function(a,b,c){if($.ar===C.c)return a.$2(b,c)
return P.o7(null,null,this,a,b,c)}}
P.l7.prototype={
$0:function(){return this.a.cZ(this.b)},
$S:function(){return{func:1}}}
P.l8.prototype={
$0:function(){return this.a.cY(this.b)},
$S:function(){return{func:1}}}
P.l9.prototype={
$1:function(a){return this.a.c9(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.kR.prototype={
gO:function(a){return this.a},
gaU:function(a){var t=H.y(this,0)
return H.dT(new P.kS(this,[t]),new P.kT(this),t,H.y(this,1))},
at:function(a){var t,s
if(typeof a==="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a==="number"&&(a&0x3ffffff)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.dO(a)},
dO:function(a){var t=this.d
if(t==null)return!1
return this.aE(t[this.aD(a)],a)>=0},
F:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.dR(b)},
dR:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aD(a)]
r=this.aE(s,a)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.mw()
this.b=t}this.cl(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.mw()
this.c=s}this.cl(s,b,c)}else this.e7(b,c)},
e7:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mw()
this.d=t}s=this.aD(a)
r=t[s]
if(r==null){P.mx(t,s,[a,b]);++this.a
this.e=null}else{q=this.aE(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
aq:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b6(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b6(this.c,b)
else return this.bV(b)},
bV:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aD(a)]
r=this.aE(s,a)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
cP:function(a,b){var t,s,r,q
t=this.bN()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.F(0,q))
if(t!==this.e)throw H.S(new P.by(this))}},
bN:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
cl:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.mx(a,b,c)},
b6:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.rK(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aD:function(a){return J.bX(a)&0x3ffffff},
aE:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b_(a[s],b))return s
return-1}}
P.kT.prototype={
$1:function(a){return this.a.F(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kS.prototype={
gO:function(a){return this.a.a},
gaa:function(a){var t=this.a
return new P.fv(t,t.bN(),0,null,this.$ti)}}
P.fv.prototype={
ga5:function(){return this.d},
W:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.S(new P.by(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.fw.prototype={
be:function(a){return H.ti(a)&0x3ffffff},
bf:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gcS()
if(r==null?b==null:r===b)return s}return-1}}
P.kX.prototype={
gaa:function(a){var t=new P.cT(this,this.r,null,null,[null])
t.c=this.e
return t},
gO:function(a){return this.a},
ap:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dN(b)},
dN:function(a){var t=this.d
if(t==null)return!1
return this.aE(t[this.aD(a)],a)>=0},
cU:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.ap(0,a)?a:null
else return this.e0(a)},
e0:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aD(a)]
r=this.aE(s,a)
if(r<0)return
return J.mM(s,r).gcp()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.ck(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.ck(r,b)}else return this.aI(b)},
aI:function(a){var t,s,r
t=this.d
if(t==null){t=P.rN()
this.d=t}s=this.aD(a)
r=t[s]
if(r==null)t[s]=[this.bL(a)]
else{if(this.aE(r,a)>=0)return!1
r.push(this.bL(a))}return!0},
aq:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b6(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b6(this.c,b)
else return this.bV(b)},
bV:function(a){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aD(a)]
r=this.aE(s,a)
if(r<0)return!1
this.cm(s.splice(r,1)[0])
return!0},
b1:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ck:function(a,b){if(a[b]!=null)return!1
a[b]=this.bL(b)
return!0},
b6:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.cm(t)
delete a[b]
return!0},
bL:function(a){var t,s
t=new P.kY(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
cm:function(a){var t,s
t=a.gdL()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aD:function(a){return J.bX(a)&0x3ffffff},
aE:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gcp(),b))return s
return-1},
$isa0:1,
$asa0:null,
$isP:1,
$asP:null}
P.kY.prototype={
gcp:function(){return this.a},
gdL:function(){return this.c}}
P.cT.prototype={
ga5:function(){return this.d},
W:function(){var t=this.a
if(this.b!==t.r)throw H.S(new P.by(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.kU.prototype={}
P.de.prototype={
ax:function(a,b){return H.dT(this,b,H.an(this,"de",0),null)},
ah:function(a,b){return P.cj(this,!0,H.an(this,"de",0))},
ay:function(a){return this.ah(a,!0)},
gO:function(a){var t,s
t=this.gaa(this)
for(s=0;t.W();)++s
return s},
M:function(a){return P.i6(this,"(",")")},
$isP:1,
$asP:null}
P.f_.prototype={}
P.e0.prototype={$asa4:null,$asa0:null,$asP:null,$isa4:1,$isa0:1,$isP:1}
P.bD.prototype={
gaa:function(a){return new H.f0(a,this.gO(a),0,null,[H.an(a,"bD",0)])},
aF:function(a,b){return this.F(a,b)},
ax:function(a,b){return new H.dg(a,b,[H.an(a,"bD",0),null])},
ah:function(a,b){var t,s,r
t=H.a([],[H.an(a,"bD",0)])
C.a.sO(t,this.gO(a))
for(s=0;s<this.gO(a);++s){r=this.F(a,s)
if(s>=t.length)return H.a6(t,s)
t[s]=r}return t},
ay:function(a){return this.ah(a,!0)},
M:function(a){return P.eV(a,"[","]")},
$isa4:1,
$asa4:null,
$isa0:1,
$asa0:null,
$isP:1,
$asP:null}
P.iu.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a8+=", "
t.a=!1
t=this.b
s=t.a8+=H.v(a)
t.a8=s+": "
t.a8+=H.v(b)},
$S:function(){return{func:1,args:[,,]}}}
P.io.prototype={
gaa:function(a){return new P.kZ(this,this.c,this.d,this.b,null,this.$ti)},
gaw:function(a){return this.b===this.c},
gO:function(a){return(this.c-this.b&this.a.length-1)>>>0},
aF:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.aG(P.eJ(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.a6(s,q)
return s[q]},
ah:function(a,b){var t=H.a([],this.$ti)
C.a.sO(t,this.gO(this))
this.e9(t)
return t},
ay:function(a){return this.ah(a,!0)},
b1:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.a6(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
M:function(a){return P.eV(this,"{","}")},
cW:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.S(H.me());++this.d
s=this.a
r=s.length
if(t>=r)return H.a6(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aI:function(a){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.a6(t,s)
t[s]=a
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.cq();++this.d},
cq:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b4(s,0,q,t,r)
C.a.b4(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
e9:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.a.b4(a,0,q,r,t)
return q}else{p=r.length-t
C.a.b4(a,0,p,r,t)
C.a.b4(a,p,p+this.c,this.a,0)
return this.c+p}},
dv:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asa0:null,
$asP:null}
P.kZ.prototype={
ga5:function(){return this.e},
W:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aG(new P.by(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.a6(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.jz.prototype={
az:function(a,b){var t
for(t=J.bx(b);t.W();)this.j(0,t.ga5())},
ah:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.a.sO(t,this.a)
for(s=new P.cT(this,this.r,null,null,[null]),s.c=this.e,r=0;s.W();r=p){q=s.d
p=r+1
if(r>=t.length)return H.a6(t,r)
t[r]=q}return t},
ay:function(a){return this.ah(a,!0)},
ax:function(a,b){return new H.eu(this,b,[H.y(this,0),null])},
M:function(a){return P.eV(this,"{","}")},
$isa0:1,
$asa0:null,
$isP:1,
$asP:null}
P.jy.prototype={}
P.c8.prototype={}
P.aH.prototype={}
P.Q.prototype={$isaH:1,
$asaH:function(){return[P.bI]}}
P.ca.prototype={
aG:function(a,b){return new P.ca(C.b.aG(this.a,b.gbq()))},
aH:function(a,b){return new P.ca(C.b.c7(this.a*b))},
aX:function(a,b){return C.b.aX(this.a,b.gbq())},
aW:function(a,b){return C.b.aW(this.a,b.gbq())},
a6:function(a,b){if(b==null)return!1
if(!(b instanceof P.ca))return!1
return this.a===b.a},
gag:function(a){return this.a&0x1FFFFFFF},
aK:function(a,b){return C.b.aK(this.a,b.gbq())},
M:function(a){var t,s,r,q,p
t=new P.h8()
s=this.a
if(s<0)return"-"+new P.ca(0-s).M(0)
r=t.$1(C.b.al(s,6e7)%60)
q=t.$1(C.b.al(s,1e6)%60)
p=new P.h7().$1(s%1e6)
return""+C.b.al(s,36e8)+":"+H.v(r)+":"+H.v(q)+"."+H.v(p)},
$isaH:1,
$asaH:function(){return[P.ca]},
gbq:function(){return this.a}}
P.h7.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.N,args:[P.a3]}}}
P.h8.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.N,args:[P.a3]}}}
P.cu.prototype={
gaQ:function(){return H.bH(this.$thrownJsError)}}
P.f9.prototype={
M:function(a){return"Throw of null."}}
P.bY.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
M:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.v(t)
q=this.gbP()+s+r
if(!this.a)return q
p=this.gbO()
o=P.n8(this.b)
return q+p+": "+H.v(o)},
ga4:function(a){return this.c}}
P.fe.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.v(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.v(t)
else if(r>t)s=": Not in range "+H.v(t)+".."+H.v(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.v(t)}return s}}
P.hR.prototype={
gbP:function(){return"RangeError"},
gbO:function(){if(J.fE(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.v(t)},
gO:function(a){return this.f}}
P.b7.prototype={
M:function(a){return"Unsupported operation: "+this.a}}
P.fm.prototype={
M:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.v(t):"UnimplementedError"}}
P.co.prototype={
M:function(a){return"Bad state: "+this.a}}
P.by.prototype={
M:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.v(P.n8(t))+"."}}
P.iZ.prototype={
M:function(a){return"Out of Memory"},
gaQ:function(){return},
$iscu:1}
P.fk.prototype={
M:function(a){return"Stack Overflow"},
gaQ:function(){return},
$iscu:1}
P.h2.prototype={
M:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.v(t)+"' during its initialization"}}
P.kG.prototype={
M:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.v(t)}}
P.hc.prototype={
M:function(a){return"Expando:"+H.v(this.a)},
F:function(a,b){var t,s
t=this.bs
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aG(P.fM(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.mm(b,"expando$values")
return s==null?null:H.mm(s,t)},
i:function(a,b,c){var t,s
t=this.bs
if(typeof t!=="string")t.set(b,c)
else{s=H.mm(b,"expando$values")
if(s==null){s=new P.ay()
H.nI(b,"expando$values",s)}H.nI(s,t,c)}},
ga4:function(a){return this.a}}
P.a3.prototype={$isaH:1,
$asaH:function(){return[P.bI]}}
P.P.prototype={
ax:function(a,b){return H.dT(this,b,H.an(this,"P",0),null)},
bB:function(a,b){return new H.bS(this,b,[H.an(this,"P",0)])},
ah:function(a,b){return P.cj(this,!0,H.an(this,"P",0))},
ay:function(a){return this.ah(a,!0)},
gO:function(a){var t,s
t=this.gaa(this)
for(s=0;t.W();)++s
return s},
gaZ:function(a){var t,s
t=this.gaa(this)
if(!t.W())throw H.S(H.me())
s=t.ga5()
if(t.W())throw H.S(H.qt())
return s},
aF:function(a,b){var t,s,r
if(b<0)H.aG(P.cm(b,0,null,"index",null))
for(t=this.gaa(this),s=0;t.W();){r=t.ga5()
if(b===s)return r;++s}throw H.S(P.eJ(b,this,"index",null,s))},
M:function(a){return P.i6(this,"(",")")},
$asP:null}
P.eW.prototype={}
P.a4.prototype={$asa4:null,$isa0:1,$asa0:null,$isP:1,$asP:null}
P.bO.prototype={
gag:function(a){return P.ay.prototype.gag.call(this,this)},
M:function(a){return"null"}}
P.bI.prototype={$isaH:1,
$asaH:function(){return[P.bI]}}
P.ay.prototype={constructor:P.ay,$isay:1,
a6:function(a,b){return this===b},
gag:function(a){return H.cG(this)},
M:function(a){return H.j7(this)},
gaf:function(a){return new H.cp(H.lu(this),null)},
toString:function(){return this.M(this)}}
P.cJ.prototype={}
P.N.prototype={$isaH:1,
$asaH:function(){return[P.N]}}
P.e3.prototype={
gO:function(a){return this.a8.length},
M:function(a){var t=this.a8
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a8}}
W.aa.prototype={}
W.fK.prototype={
M:function(a){return String(a)},
$isa_:1,
sbx:function(a,b){return a.href=b}}
W.fL.prototype={
M:function(a){return String(a)},
$isa_:1,
sbx:function(a,b){return a.href=b}}
W.fR.prototype={
sbx:function(a,b){return a.href=b}}
W.em.prototype={}
W.cY.prototype={$iscY:1,$isa_:1}
W.fW.prototype={
ga4:function(a){return a.name}}
W.cr.prototype={$isa_:1,
gO:function(a){return a.length}}
W.en.prototype={
gav:function(a){return a.id}}
W.ct.prototype={
ci:function(a,b){var t,s
t=$.$get$mZ()
s=t[b]
if(typeof s==="string")return s
s=W.ps(b) in a?b:P.pt()+b
t[b]=s
return s},
aT:function(a,b){return a.item(b)},
gO:function(a){return a.length}}
W.eK.prototype={}
W.h0.prototype={}
W.er.prototype={$isa_:1}
W.es.prototype={
ga4:function(a){return a.name}}
W.h3.prototype={
ga4:function(a){var t=a.name
if(P.n5()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.n5()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
M:function(a){return String(a)}}
W.et.prototype={
M:function(a){return"Rectangle ("+H.v(a.left)+", "+H.v(a.top)+") "+H.v(this.gaV(a))+" x "+H.v(this.gaS(a))},
a6:function(a,b){var t
if(b==null)return!1
t=J.ai(b)
if(!t.$isff)return!1
return a.left===t.gc2(b)&&a.top===t.gca(b)&&this.gaV(a)===t.gaV(b)&&this.gaS(a)===t.gaS(b)},
gag:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaV(a)
q=this.gaS(a)
return W.o3(W.cS(W.cS(W.cS(W.cS(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaS:function(a){return a.height},
gc2:function(a){return a.left},
gca:function(a){return a.top},
gaV:function(a){return a.width},
$isff:1,
$asff:function(){}}
W.bf.prototype={
ged:function(a){return new W.kA(a)},
M:function(a){return a.localName},
aA:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.n7
if(t==null){t=H.a([],[W.ck])
s=new W.f7(t)
t.push(W.o1(null))
t.push(W.o4())
$.n7=s
d=s}else d=t
t=$.n6
if(t==null){t=new W.fy(d)
$.n6=t
c=t}else{t.a=d
c=t}}if($.cb==null){t=document
s=t.implementation.createHTMLDocument("")
$.cb=s
$.lR=s.createRange()
s=$.cb
s.toString
r=s.createElement("base")
J.ox(r,t.baseURI)
$.cb.head.appendChild(r)}t=$.cb
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.cb
if(!!this.$iscY)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.cb.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.ap(C.G,a.tagName)){$.lR.selectNodeContents(q)
p=$.lR.createContextualFragment(b)}else{q.innerHTML=b
p=$.cb.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.cb.body
if(q==null?t!=null:q!==t)J.ow(q)
c.cc(p)
document.adoptNode(p)
return p},
ej:function(a,b,c){return this.aA(a,b,c,null)},
df:function(a,b,c,d){a.textContent=null
a.appendChild(this.aA(a,b,c,d))},
bE:function(a,b){return this.df(a,b,null,null)},
$isbf:1,
$isad:1,
$isay:1,
$isa_:1,
gav:function(a){return a.id},
gcu:function(a){return a.namespaceURI},
geW:function(a){return a.tagName}}
W.lp.prototype={
$1:function(a){return!!J.ai(a).$isbf},
$S:function(){return{func:1,args:[,]}}}
W.h9.prototype={
ga4:function(a){return a.name}}
W.ha.prototype={
gaR:function(a){return a.error}}
W.a2.prototype={}
W.dB.prototype={
dI:function(a,b,c,d){return a.addEventListener(b,H.ei(c,1),!1)},
e3:function(a,b,c,d){return a.removeEventListener(b,H.ei(c,1),!1)}}
W.hz.prototype={
ga4:function(a){return a.name}}
W.hA.prototype={
ga4:function(a){return a.name}}
W.eH.prototype={
aT:function(a,b){return a.item(b)},
gO:function(a){return a.length},
ga4:function(a){return a.name}}
W.hF.prototype={
gav:function(a){return a.id}}
W.hP.prototype={
ga4:function(a){return a.name}}
W.hS.prototype={$isbf:1,$isa_:1,$isad:1,
ga4:function(a){return a.name}}
W.id.prototype={
ga4:function(a){return a.name}}
W.ij.prototype={
sbx:function(a,b){return a.href=b}}
W.ip.prototype={
M:function(a){return String(a)}}
W.it.prototype={
ga4:function(a){return a.name}}
W.dU.prototype={
gaR:function(a){return a.error}}
W.ix.prototype={
gav:function(a){return a.id}}
W.iz.prototype={
ga4:function(a){return a.name}}
W.iA.prototype={
f5:function(a,b,c){return a.send(b,c)},
bD:function(a,b){return a.send(b)}}
W.dV.prototype={
gav:function(a){return a.id},
ga4:function(a){return a.name}}
W.c3.prototype={$isc3:1,$isay:1}
W.iT.prototype={$isa_:1}
W.iU.prototype={
ga4:function(a){return a.name}}
W.bm.prototype={
gaZ:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.S(new P.co("No elements"))
if(s>1)throw H.S(new P.co("More than one element"))
return t.firstChild},
az:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.a6(s,b)
t.replaceChild(c,s[b])},
gaa:function(a){var t=this.a.childNodes
return new W.eF(t,t.length,-1,null,[H.an(t,"d8",0)])},
gO:function(a){return this.a.childNodes.length},
F:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.a6(t,b)
return t[b]},
$asf_:function(){return[W.ad]},
$ase0:function(){return[W.ad]},
$asa4:function(){return[W.ad]},
$asa0:function(){return[W.ad]},
$asP:function(){return[W.ad]}}
W.ad.prototype={
geI:function(a){return new W.bm(a)},
eR:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
M:function(a){var t=a.nodeValue
return t==null?this.dl(a):t},
$isad:1,
$isay:1,
geL:function(a){return a.parentNode},
geP:function(a){return a.previousSibling}}
W.f6.prototype={
gO:function(a){return a.length},
F:function(a,b){if(b>>>0!==b||b>=a.length)throw H.S(P.eJ(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.S(new P.b7("Cannot assign element of immutable List."))},
aF:function(a,b){if(b<0||b>=a.length)return H.a6(a,b)
return a[b]},
$isa4:1,
$asa4:function(){return[W.ad]},
$isa0:1,
$asa0:function(){return[W.ad]},
$isP:1,
$asP:function(){return[W.ad]},
$isbC:1,
$asbC:function(){return[W.ad]},
$isbj:1,
$asbj:function(){return[W.ad]}}
W.eL.prototype={
$asa4:function(){return[W.ad]},
$asa0:function(){return[W.ad]},
$asP:function(){return[W.ad]},
$isa4:1,
$isa0:1,
$isP:1}
W.eN.prototype={
$asa4:function(){return[W.ad]},
$asa0:function(){return[W.ad]},
$asP:function(){return[W.ad]},
$isa4:1,
$isa0:1,
$isP:1}
W.iX.prototype={
ga4:function(a){return a.name}}
W.j_.prototype={
ga4:function(a){return a.name}}
W.j2.prototype={
ga4:function(a){return a.name}}
W.fh.prototype={
aT:function(a,b){return a.item(b)},
gO:function(a){return a.length},
ga4:function(a){return a.name}}
W.jB.prototype={
ga4:function(a){return a.name}}
W.fj.prototype={}
W.jI.prototype={
gaR:function(a){return a.error}}
W.jJ.prototype={
ga4:function(a){return a.name}}
W.fl.prototype={
aA:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
t=W.pu("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.bm(s).az(0,J.os(t))
return s}}
W.jW.prototype={
aA:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.aA(t.createElement("table"),b,c,d)
t.toString
t=new W.bm(t)
r=t.gaZ(t)
r.toString
t=new W.bm(r)
q=t.gaZ(t)
s.toString
q.toString
new W.bm(s).az(0,new W.bm(q))
return s}}
W.jX.prototype={
aA:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.r.aA(t.createElement("table"),b,c,d)
t.toString
t=new W.bm(t)
r=t.gaZ(t)
s.toString
r.toString
new W.bm(s).az(0,new W.bm(r))
return s}}
W.e4.prototype={$ise4:1}
W.k1.prototype={
ga4:function(a){return a.name}}
W.bQ.prototype={}
W.fq.prototype={$isa_:1,
ga4:function(a){return a.name}}
W.dk.prototype={$isdk:1,$isad:1,$isay:1,
ga4:function(a){return a.name},
gcu:function(a){return a.namespaceURI}}
W.ku.prototype={
M:function(a){return"Rectangle ("+H.v(a.left)+", "+H.v(a.top)+") "+H.v(a.width)+" x "+H.v(a.height)},
a6:function(a,b){var t,s,r
if(b==null)return!1
t=J.ai(b)
if(!t.$isff)return!1
s=a.left
r=t.gc2(b)
if(s==null?r==null:s===r){s=a.top
r=t.gca(b)
if(s==null?r==null:s===r){s=a.width
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.height
t=t.gaS(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gag:function(a){var t,s,r,q
t=J.bX(a.left)
s=J.bX(a.top)
r=J.bX(a.width)
q=J.bX(a.height)
return W.o3(W.cS(W.cS(W.cS(W.cS(0,t),s),r),q))},
$isff:1,
$asff:function(){},
gaS:function(a){return a.height},
gc2:function(a){return a.left},
gca:function(a){return a.top},
gaV:function(a){return a.width}}
W.ky.prototype={$isa_:1}
W.kz.prototype={
gaS:function(a){return a.height},
gaV:function(a){return a.width}}
W.kQ.prototype={$isa_:1}
W.ec.prototype={
gO:function(a){return a.length},
F:function(a,b){if(b>>>0!==b||b>=a.length)throw H.S(P.eJ(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.S(new P.b7("Cannot assign element of immutable List."))},
aF:function(a,b){if(b<0||b>=a.length)return H.a6(a,b)
return a[b]},
aT:function(a,b){return a.item(b)},
$isa4:1,
$asa4:function(){return[W.ad]},
$isa0:1,
$asa0:function(){return[W.ad]},
$isP:1,
$asP:function(){return[W.ad]},
$isbC:1,
$asbC:function(){return[W.ad]},
$isbj:1,
$asbj:function(){return[W.ad]}}
W.eM.prototype={
$asa4:function(){return[W.ad]},
$asa0:function(){return[W.ad]},
$asP:function(){return[W.ad]},
$isa4:1,
$isa0:1,
$isP:1}
W.eO.prototype={
$asa4:function(){return[W.ad]},
$asa0:function(){return[W.ad]},
$asP:function(){return[W.ad]},
$isa4:1,
$isa0:1,
$isP:1}
W.le.prototype={$isa_:1}
W.kq.prototype={
gb3:function(){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.N])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.a6(t,q)
p=t[q]
o=J.b8(p)
if(o.gcu(p)==null)s.push(o.ga4(p))}return s},
gdZ:function(){return this.a}}
W.kA.prototype={
F:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gO:function(a){return this.gb3().length}}
W.kD.prototype={
bi:function(a,b,c,d){return W.o_(this.a,this.b,a,!1,H.y(this,0))},
cT:function(a,b,c){return this.bi(a,null,b,c)}}
W.mv.prototype={}
W.kE.prototype={
cM:function(){if(this.b==null)return
this.cJ()
this.b=null
this.d=null
return},
c4:function(a,b){if(this.b==null)return;++this.a
this.cJ()},
cV:function(a){return this.c4(a,null)},
cX:function(){if(this.b==null||this.a<=0)return;--this.a
this.cH()},
cH:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.oo(r,this.c,t,!1)}},
cJ:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.op(r,this.c,t,!1)}},
dB:function(a,b,c,d,e){this.cH()}}
W.kF.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.ea.prototype={
b0:function(a){return $.$get$o2().ap(0,W.dA(a))},
aJ:function(a,b,c){var t,s,r
t=W.dA(a)
s=$.$get$my()
r=s.F(0,H.v(t)+"::"+b)
if(r==null)r=s.F(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dE:function(a){var t,s
t=$.$get$my()
if(t.gaw(t)){for(s=0;s<262;++s)t.i(0,C.F[s],W.t8())
for(s=0;s<12;++s)t.i(0,C.h[s],W.t9())}},
$isck:1,
gd3:function(){return this.a}}
W.d8.prototype={
gaa:function(a){return new W.eF(a,this.gO(a),-1,null,[H.an(a,"d8",0)])},
$isa4:1,
$asa4:null,
$isa0:1,
$asa0:null,
$isP:1,
$asP:null}
W.f7.prototype={
b0:function(a){return C.a.cL(this.a,new W.iW(a))},
aJ:function(a,b,c){return C.a.cL(this.a,new W.iV(a,b,c))},
$isck:1}
W.iW.prototype={
$1:function(a){return a.b0(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.iV.prototype={
$1:function(a){return a.aJ(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.ed.prototype={
b0:function(a){return this.a.ap(0,W.dA(a))},
aJ:function(a,b,c){var t,s
t=W.dA(a)
s=this.c
if(s.ap(0,H.v(t)+"::"+b))return this.d.ec(c)
else if(s.ap(0,"*::"+b))return this.d.ec(c)
else{s=this.b
if(s.ap(0,H.v(t)+"::"+b))return!0
else if(s.ap(0,"*::"+b))return!0
else if(s.ap(0,H.v(t)+"::*"))return!0
else if(s.ap(0,"*::*"))return!0}return!1},
dG:function(a,b,c,d){var t,s,r
this.a.az(0,c)
t=b.bB(0,new W.lf())
s=b.bB(0,new W.lg())
this.b.az(0,t)
r=this.c
r.az(0,C.H)
r.az(0,s)},
$isck:1,
gd3:function(){return this.d}}
W.lf.prototype={
$1:function(a){return!C.a.ap(C.h,a)},
$S:function(){return{func:1,args:[,]}}}
W.lg.prototype={
$1:function(a){return C.a.ap(C.h,a)},
$S:function(){return{func:1,args:[,]}}}
W.lj.prototype={
aJ:function(a,b,c){if(this.ds(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.mN(a).a.getAttribute("template")==="")return this.e.ap(0,b)
return!1}}
W.lk.prototype={
$1:function(a){return"TEMPLATE::"+H.v(a)},
$S:function(){return{func:1,args:[,]}}}
W.li.prototype={
b0:function(a){var t=J.ai(a)
if(!!t.$ise2)return!1
t=!!t.$isaE
if(t&&W.dA(a)==="foreignObject")return!1
if(t)return!0
return!1},
aJ:function(a,b,c){if(b==="is"||C.e.ce(b,"on"))return!1
return this.b0(a)},
$isck:1}
W.eF.prototype={
W:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.mM(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
ga5:function(){return this.d}}
W.ck.prototype={}
W.ld.prototype={}
W.fy.prototype={
cc:function(a){new W.ll(this).$2(a,null)},
b8:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
e6:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mN(a)
r=s.gdZ().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.b9(n)}p="element unprintable"
try{p=J.aY(a)}catch(n){H.b9(n)}try{o=W.dA(a)
this.e5(a,b,t,p,o,s,r)}catch(n){if(H.b9(n) instanceof P.bY)throw n
else{this.b8(a,b)
window
m="Removing corrupted element "+H.v(p)
if(typeof console!="undefined")console.warn(m)}}},
e5:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.b8(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.b0(a)){this.b8(a,b)
window
t="Removing disallowed element <"+H.v(e)+"> from "+J.aY(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.aJ(a,"is",g)){this.b8(a,b)
window
t="Removing disallowed type extension <"+H.v(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gb3()
s=H.a(t.slice(0),[H.y(t,0)])
for(r=f.gb3().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.a6(s,r)
q=s[r]
if(!this.a.aJ(a,J.oz(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.v(e)+" "+q+'="'+H.v(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.ai(a).$ise4)this.cc(a.content)}}
W.ll.prototype={
$2:function(a,b){var t,s,r,q,p
r=this.a
switch(a.nodeType){case 1:r.e6(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.b8(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.ou(t)}catch(q){H.b9(q)
p=t
if(r){if(J.ot(p)!=null)p.parentNode.removeChild(p)}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.ad,W.ad]}}}
P.kW.prototype={
c3:function(){return Math.random()}}
P.l5.prototype={
b_:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.b.al(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
c3:function(){this.b_()
var t=this.a
this.b_()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
dF:function(a){var t,s,r,q,p,o,n,m
t=a<0?-1:0
do{s=(a&4294967295)>>>0
a=C.b.al(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.b.al(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.b.al(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.b.al(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.b.al(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.b.al(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.b.al(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.b_()
this.b_()
this.b_()
this.b_()}}
P.fI.prototype={$isa_:1}
P.cq.prototype={$isa_:1}
P.hd.prototype={$isa_:1}
P.he.prototype={$isa_:1}
P.hf.prototype={$isa_:1}
P.hg.prototype={$isa_:1}
P.hh.prototype={$isa_:1}
P.hi.prototype={$isa_:1}
P.hj.prototype={$isa_:1}
P.hk.prototype={$isa_:1}
P.hl.prototype={$isa_:1}
P.hm.prototype={$isa_:1}
P.hn.prototype={$isa_:1}
P.ho.prototype={$isa_:1}
P.hp.prototype={$isa_:1}
P.hq.prototype={$isa_:1}
P.hr.prototype={$isa_:1}
P.hs.prototype={$isa_:1}
P.hB.prototype={$isa_:1}
P.aT.prototype={$isa_:1}
P.hQ.prototype={$isa_:1}
P.iv.prototype={$isa_:1}
P.iw.prototype={$isa_:1}
P.j3.prototype={$isa_:1}
P.e2.prototype={$ise2:1,$isa_:1}
P.aE.prototype={
aA:function(a,b,c,d){var t,s,r,q,p,o
t=H.a([],[W.ck])
t.push(W.o1(null))
t.push(W.o4())
t.push(new W.li())
c=new W.fy(new W.f7(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.l).ej(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.bm(q)
o=t.gaZ(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
$isaE:1,
$isa_:1}
P.jT.prototype={$isa_:1}
P.jV.prototype={$isa_:1}
P.cN.prototype={}
P.k2.prototype={$isa_:1}
P.kc.prototype={$isa_:1}
P.kd.prototype={$isa_:1}
P.e9.prototype={$isa_:1}
P.la.prototype={$isa_:1}
P.lb.prototype={$isa_:1}
P.lc.prototype={$isa_:1}
S.fJ.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Math Book",H.a([$.Z,$.al,$.ah],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Giant Map",H.a([$.Z,$.al],s),null,!1,"Map to Staffs HQ")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Microscope",H.a([$.Y,$.al,$.aW],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Star Chart",H.a([$.Z,$.al],s),null,!1,"Cosmic Dot-to-Dot")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("History Book",H.a([$.Z,$.al],s),null,!1,"Homestuck Anthology")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Radioactive Rock",H.a([$.eR,$.ci],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Compass",H.a([$.Y,$.al],s),null,!1,"Navigation Box")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.ey,$.j)
q.i(0,$.aj,$.j)
q.i(0,$.eD,$.i)
q.i(0,$.af,$.w)
q.i(0,$.bb,$.i)
p=$.k
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.m
o=o+n+" to stop "
m=$.x
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.qE
n=[U.c]
q.i(0,new R.W("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
q.i(0,new R.W("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.m+" to stop "+$.x+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.nL(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
p="The "+m+" finds a massive library, filled with books. The "
l=$.m
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.n
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.W("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.di(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.i)
m=this.r
m.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dD,$.w)
s.i(0,$.bb,$.j)
p=$.k
o="The "+p+"  is approached by a "
l=$.m
s.i(0,new R.W("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.x+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.m
s.i(0,new R.W("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.x+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.c4(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
s.i(0,new R.W("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.m+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.di(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
m.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.dD,$.w)
t.i(0,$.bb,$.j)
t.i(0,$.aJ,$.w)
t.i(0,$.nb,$.w)
r=$.k
q="The "+r+"  is approached by a "
p=$.m
q=q+p+" who offers them a grant to study "
o=$.a7
t.i(0,new R.W("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.x+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.di(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
o=$.m
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.x
r=r+p+".  It is up to the "
q=$.k
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.a7
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.qK
t.i(0,new R.W("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.cl(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
t.i(0,new R.W("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.x+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.m+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
L.fO.prototype={
$1:function(a){return!a.gbg()},
$S:function(){return{func:1,args:[L.c9]}}}
L.c9.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Perfectly Generic Object",H.a([],[G.U]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.y(t,0)]))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.N]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.br,$.i)
q.i(0,$.aj,$.w)
q.i(0,$.cd,$.i)
q.i(0,$.aJ,$.j)
q.i(0,$.d3,$.w)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.n
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.aC+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.M("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.T(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=this.f
j.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.i)
s.i(0,$.dG,$.w)
s.i(0,$.cw,$.j)
s.i(0,$.bq,$.i)
s.i(0,$.aS,$.w)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.n
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.aC+". The "+p+" has won! "
s.i(0,new R.M("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.T(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.af,$.i)
t.i(0,$.aj,$.w)
t.i(0,$.aL,$.j)
r=$.k
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.x
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.n
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.aC+". The "+r+" has won! "
t.i(0,new R.W("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.mn(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
l=$.k
r="The "+l+" learns that all of the local "
m=$.m
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.n
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.aC+". The "+l+" has won! "
t.i(0,new R.M("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.T(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.t(s,t,null),$.a8)},
M:function(a){return this.Q},
R:function(a,b,c,d,e,f,g){var t,s,r
t=this.Q
this.ch=t
s=this.dx
r=s==null
if(r&&this!==$.mR&&this.e<256){this.r=new X.d0("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+H.v(t)+".xml",!1,H.a([],[X.cZ]),H.a([],[M.cv]))
this.I()
this.K()
this.x=H.v(t)+".png"
this.y=H.v(t)+"Big.png"}if(t==="Combo"){this.I()
this.K()
this.r=new X.d0("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/Time.xml",!1,H.a([],[X.cZ]),H.a([],[M.cv]))
this.x="Time.png"
this.y="TimeBig.png"}if(!r){this.I()
this.K()
s.sa1(this.ga1())
s.sa0(this.ga0())
s.sZ(this.gZ())
s.sau(this.gau())
s.sY(this.gY())
s.sJ(this.gJ())
s.sU(this.gU())
s.sV(this.gV())
s.sT(this.gT())
s.sa3(this.ga3())
s.sa2(this.ga2())
s.sX(this.gX())
s.sL(this.gL())
this.r=new X.d0("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+s.M(0)+".xml",!1,H.a([],[X.cZ]),H.a([],[M.cv]))
this.x="Reskins/"+H.v(t)+".png"
this.y="Reskins/"+H.v(t)+"Big.png"}t=this.e
if($.$get$el().at(t))H.aG("Duplicate aspect id for "+this.M(0)+": "+t+" is already registered for "+J.aY($.$get$el().F(0,t))+".")
$.$get$el().i(0,t,this)},
ga1:function(){return this.a},
ga0:function(){return this.b},
gZ:function(){return this.c},
gau:function(){return this.d},
gav:function(a){return this.e},
ga4:function(a){return this.Q},
gc0:function(){return this.cx},
gbg:function(){return this.cy},
gbb:function(){return this.fy},
gcb:function(){return this.go},
gbk:function(){return this.k1},
gP:function(){return this.k2},
gJ:function(){return this.k3},
gX:function(){return this.k4},
gU:function(){return this.r1},
gY:function(){return this.r2},
ga3:function(){return this.rx},
ga2:function(){return this.ry},
gV:function(){return this.x1},
gT:function(){return this.x2},
gN:function(){return this.y1},
gL:function(){return this.y2},
sau:function(a){return this.d=a},
sY:function(a){return this.r2=a}}
L.z.prototype={}
M.fP.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Barbells",H.a([$.aU,$.hY,$.Y],s),null,!1,"Strength Building Metal")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Basketball",H.a([$.hW,$.dd],s),null,!1,"Dunksphere")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Baseball Bat",H.a([$.np,$.am],s),null,!1,"Wooden Pole of Bone Hurting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rubber Ball",H.a([$.hW,$.dd],s),null,!1,"Dead Animal Corpse Ball")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Megaphone",H.a([$.aZ,$.ao],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Hockey Stick",H.a([$.np,$.am,$.ch],s),null,!1,"L Shaped Bone Hurter")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Trophy",H.a([$.Y,$.dP],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Boxing Glove",H.a([$.q9,$.dd],s),null,!1,"Fist Reinforcing Pain Cubes")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Yoga Mat",H.a([$.dd,$.b4],s),null,!1,"Flesh Rubberising Practice Mat")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.cx,$.w)
q.i(0,$.aD,$.j)
q.i(0,$.bq,$.w)
p=$.k
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.m
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.x+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.W("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.m
q.i(0,new R.W("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.x+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.cl(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
n="The "+m+"  wanders into a bunch of "
p=$.m
q.i(0,new R.W("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.e1(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
m=this.r
m.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.cx,$.j)
t.i(0,$.dJ,$.j)
t.i(0,$.aD,$.j)
s=$.k
r="The "+s+" finds a team of underdog "
p=$.m
t.i(0,new R.W("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.nL(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
p=$.m
s="A group of "+p+"s approach the "
r=$.k
s=s+r+". Apparently their sports team lost their coach to the "+$.n+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.x
t.i(0,new R.W("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.cl(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
k=$.m
p="A group of "+k+"s approach the "
r=$.k
t.i(0,new R.W("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.n+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.a7+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(q,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
O.fQ.prototype={
aB:function(){return!0},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cod Piece",H.a([$.ag,$.ac,$.ak,$.R,$.am],s),"God damn it, MI. ",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Poisoned Candy",H.a([$.nm,$.R,$.i_],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cursed Lyre",H.a([$.aV,$.am,$.bh,$.R,$.aP],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Snare Trap",H.a([$.ag,$.aV,$.R,$.dc],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 2},
aj:function(){return 0.5},
ak:function(){return 3},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.ba,$.i)
t.i(0,$.eC,$.i)
t.i(0,$.b2,$.i)
t.i(0,$.c0,$.i)
t.i(0,$.b1,$.i)
t.i(0,$.dC,$.i)
r="After all the bullshit the "+$.n+" has put the native "
q=$.m
r=r+q+"s through, the "
p=$.k
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.ae+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.x
m=[U.c]
t.i(0,new R.a1("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.o(),!1,!1,new Y.c5("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.m
n="A group of jubilant "+p+"s are following the "
q=$.k
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.x
t.i(0,new R.a1("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.n+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
t.i(0,new R.a1("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.n+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.o(),!1,!1,new Y.fY("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.k
q=q+r+" organizes a huge festival for all the "
p=$.m
t.i(0,new R.aq("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l}}
L.fS.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Bear",H.a([$.aZ,$.au,$.u],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Thought",H.a([$.m2,$.qo,$.dO],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Doorway",H.a([$.dO,$.u],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aR,$.i)
t.i(0,$.bA,$.j)
t.i(0,$.aD,$.j)
t.i(0,$.cw,$.q)
r=$.k
q="The "+r+" hears a "+$.m+" "+$.x+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.n
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.M("Revenge on the Denizen",!1,[new U.c(q),new U.c(p),new U.c(n),new U.T(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gU:function(){return this.w},
gV:function(){return this.A},
gT:function(){return this.B},
gX:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gL:function(){return this.G}}
T.fT.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Mystical Vial of Blood",H.a([$.aW,$.bh,$.u,$.bi],s),null,!1,"Vial of Not-ABs Oil")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bananaphone",H.a([$.c1,$.bh,$.u,$.bN],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Friendship Bracelet",H.a([$.ag,$.bh,$.u,$.bi,$.m6],s),null,!1,"Soul Binding Wrist Shackle")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bonding Manacles",H.a([$.Y,$.dc,$.u,$.bi,$.m6,$.aM],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Friendship Stairs",H.a([$.am,$.nu,$.bh,$.bi,$.u,$.ac],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.N]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bg,$.i)
q.i(0,$.nf,$.i)
q.i(0,$.aJ,$.j)
p=$.k
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.m
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.a7+" and some boondollars in compensation."
n=this.l
k=[U.c]
q.i(0,new R.W("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.cl(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
n=$.m
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.x+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.n
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.k
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.aC+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.M("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.T(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bq,$.i)
s.i(0,$.b1,$.w)
s.i(0,$.af,$.w)
s.i(0,$.m_,$.i)
s.i(0,$.b2,$.w)
p=$.k
o="The "+p+"  and the "
m=$.cI
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.n
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.M("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.T(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.cH(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
h=$.k
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.m
i=i+m+"s explains that before  "
p=$.n
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.aC+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.qA
s.i(0,new R.M("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.T(l,h,o)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
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
p="The "+j+" lies slain by the "+p+"'s "+$.aC+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.M("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.T(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.m
h=h+i+" on "+$.ae+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.d7+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a1("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.di(),!1,!1,new Y.aI("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.m+" on "
m=$.ae
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.d7+" is now more popular with your friends than you are."
s.i(0,new R.a1("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.mo(),!1,!1,new Y.aI("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
m="The "+p+"  and the "
h=$.cI
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.n
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.M("Pale Shipping Dungeon",!1,[new U.c(m),new U.T(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.v(C.j)+".",o)],H.a([],k),R.cH(),!1,!1,new Y.fb(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.af,$.i)
t.i(0,$.aj,$.w)
t.i(0,$.aL,$.j)
r="In the wake of the defeat of the "+$.n+" it becomes really how isolated the individual "
q=$.m
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.k
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.d7+" to kick your ass, but luckily they have several."
t.i(0,new R.a1("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.cl(),!1,!1,new Y.aI("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
o=$.k
q="The "+o+" learns that two prominent "
p=$.m
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.n
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.aC+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.x+"ing. "
t.i(0,new R.M("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.T(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gX:function(){return this.H},
gL:function(){return this.a_}}
T.fV.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Pan's Pipe",H.a([$.aP,$.am,$.bh,$.u],s),null,!1,"Smonkin Weeds Pipe")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Skeleton Key",H.a([$.cy,$.u],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Inspector's Fan",H.a([$.ao,$.Y,$.bh,$.u],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Jet Pack",H.a([$.c2,$.Y,$.aZ,$.u,$.ac],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.N]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.aL,$.j)
q.i(0,$.dJ,$.i)
q.i(0,$.af,$.j)
p=$.k
o="The "+p+" tries posting a letter through the "
n=$.a7
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.n
o=o+m+" has screwed with the mail system, crippling the "
l=$.m
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.aC+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.qF
i=[U.c]
q.i(0,new R.M("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.T(j,p,l)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.f
m.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aj,$.i)
s.i(0,$.dJ,$.j)
s.i(0,$.af,$.j)
s.i(0,$.aD,$.j)
s.i(0,$.aL,$.j)
p=$.k
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.a7
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.m
k=l+k+" fields. The "+k+"s "+$.x+"ing is so joyful it's literally deafening. "
l=$.n
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.aC+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.M("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.T(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aS,$.i)
t.i(0,$.lY,$.i)
t.i(0,$.dJ,$.w)
t.i(0,$.aL,$.w)
r=$.k
q="The "+r+" is chilling in a "+$.m+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.n
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.a7
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.ae+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.aC+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.M("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gX:function(){return this.H},
gL:function(){return this.a_}}
S.fX.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("A Rock",H.a([$.au,$.ci,$.bM,$.u],[G.U]),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.y(t,0)]))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Chill","Stone","Cold","Fear"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.lV,$.j)
t.i(0,$.bg,$.i)
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
t.i(0,new R.M("Make An Army",!1,[new U.c(q),new U.c(o),new U.c(m),new U.T(l,"The "+r+" lies dead, in a surprising twist, the "+p+" takes care of the living members of the consort army.",n)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gX:function(){return this.G},
gL:function(){return this.H}}
U.fZ.prototype={}
A.h_.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Colonel Sassacre's Daunting Text ",H.a([$.Z,$.aU,$.bN,$.hY],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wise Guy Book",H.a([$.Z,$.bN],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Beagle Puss",H.a([$.aW,$.bN],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Novelty Microphone",H.a([$.aZ,$.ao,$.bN],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Banana",H.a([$.c1,$.bN],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Fake Flower",H.a([$.ag,$.bN],s),null,!1,"Flower that smells like Plastic")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Trick Handcuffs",H.a([$.Y,$.bN],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.b2,$.j)
q.i(0,$.b0,$.i)
q.i(0,$.aD,$.j)
p=$.k
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.m
o=o+n+"s are too scared to even "+$.x+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.n+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.W("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.w)
s.i(0,$.aD,$.i)
s.i(0,$.b0,$.i)
s.i(0,$.ba,$.i)
o=$.k
n="The "+o+" learns of an Open Mic Nite at the "
m=$.ae
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.m
k=k+j+"s let out a braying "+$.x+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.qI
s.i(0,new R.W("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.b3,$.w)
t.i(0,$.aK,$.j)
t.i(0,$.b0,$.i)
t.i(0,$.aD,$.j)
t.i(0,$.lU,$.j)
r=$.k
q="The "+r+"  is approached by a Crafty "
o=$.m
q=q+o+" who offers them a magical "
n=$.a7
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.x
t.i(0,new R.W("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
M.h1.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Can of Spray Paint",H.a([$.aX,$.Y],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sensible Chuckles Magazine",H.a([$.Z,$.as,$.bN,$.ah],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Gentleman's Razor",H.a([$.ql,$.Y,$.cz],s),null,!1,"Face Cutting Hair Remover")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("How To Draw Manga",H.a([$.Z,$.as,$.ah],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Painting of a Horse Boxing a Football Player",H.a([$.aX,$.aO,$.Z],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Collection of Classical Works",H.a([$.as,$.Z],s),null,!1,"Book of Naked Renaissance People")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Documentary on Horses",H.a([$.as,$.ax,$.aO],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Paint Set",H.a([$.aX,$.as],s),null,!1,"Pain Drink Set")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shaving Cream",H.a([$.c2,$.as,$.Y],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Classy Suit",H.a([$.ag,$.as],s),null,!1,"Georgio Armani Suit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("The Fatherly Gent's Shaving Almanac ",H.a([$.Z,$.as,$.ah],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bA,$.j)
q.i(0,$.bb,$.i)
q.i(0,$.af,$.j)
p=$.k
o="The "+p+" visits a beautiful "
n=$.a7
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.m
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.n+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.x+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.W("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.r
m.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cx,$.w)
s.i(0,$.aD,$.j)
s.i(0,$.b0,$.w)
s.i(0,$.aj,$.j)
s.i(0,$.ba,$.i)
o=$.k
n="The "+o+" finds a troupe of dejected looking "
l=$.m
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.ae
l=l+n+" "
k=$.a7
s.i(0,new R.W("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.x+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.eC,$.w)
t.i(0,$.b2,$.w)
t.i(0,$.dC,$.w)
t.i(0,$.aK,$.w)
t.i(0,$.aj,$.j)
t.i(0,$.af,$.j)
r=$.k
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.x
q=q+o+"ingworth, "
n=$.m
q=q+n+" heiress to the "+$.a7+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.qx
t.i(0,new R.W("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
V.h4.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Trendy Fabric",H.a([$.aX,$.ag],s),null,!1,"Weird Tasting Candy Paper")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Necklace",H.a([$.aX,$.nq,$.m6],s),null,!1,"Nasty Candy Necklace")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sewing Needle",H.a([$.Y,$.qi,$.db],s),null,!1,"Cloth Stabbing Knife")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=$.m3
r=A.h("Broom",H.a([r,$.am,$.aU,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rolling Pin",H.a([$.am,$.qn,$.aU],s),null,!1,"Babushkas Punishment Pole")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Velvet Pillow",H.a([$.ag,$.b4,$.bh,$.aX,$.d9],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Yarn Ball",H.a([$.aX,$.ag],s),null,!1,"Cats Plaything")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Refrigerator",H.a([$.aM,$.hY,$.Y,$.bM],s),null,!1,"Food Hardening Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Photo Album",H.a([$.aX,$.Z],s),null,!1,"Memory Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ice Cubes",H.a([$.bM],s),null,!1,"Hard Water")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cast Iron Skillet",H.a([$.Y,$.c2,$.aU,$.hY,$.qa],s),null,!1,"Fancy Unstoppable Weapon")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Failed Dish",H.a([$.i_],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dr Pepper BBQ Sauce",H.a([$.i_],s),"Gross.",!1,"Culinary Perfection")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Potted Plant",H.a([$.aX,$.m5,$.da],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Chicken Leg",H.a([$.c1,$.cA,$.cy],s),null,!1,"Thicc Chicken")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Juicy Steak",H.a([$.c1,$.cA],s),null,!1,"Juicy Cow Flesh")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Wedding Cake",H.a([$.aX,$.c1,$.bi],s),null,!1,"The Only Benefit of a Wedding")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.ba,$.j)
q.i(0,$.b1,$.j)
q.i(0,$.b2,$.w)
p=$.k
o="The "+p+" is visited by a Beautiful "
n=$.m
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.a7
l=[U.c]
q.i(0,new R.W("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.x+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.o(),!1,!1,new Y.eq("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.r
n.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.b2,$.i)
s.i(0,$.aD,$.j)
s.i(0,$.dC,$.i)
s.i(0,$.c0,$.j)
s.i(0,$.aj,$.i)
p=$.k
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.a7
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.m
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.x+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.qG
s.i(0,new R.W("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.dE,$.i)
t.i(0,$.aj,$.j)
t.i(0,$.d2,$.i)
t.i(0,$.af,$.j)
t.i(0,$.m_,$.i)
r=$.k
q="The "+r+" finds a loom, and a Wizened "
p=$.m
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.a7
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.x+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.W("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
U.h5.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ah,$.ao,$.Z,$.aV,$.u,$.ac],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Egg Timer",H.a([$.ax,$.bh,$.u,$.aV],s),null,!1,"Egg That Counts Down to Your Death")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Skull Timer",H.a([$.cy,$.bh,$.u,$.aV],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Poison Flask",H.a([$.aW,$.u,$.i_],s),null,!1,"Glass of Bone Hurting Juice")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ice Gorgon Head",H.a([$.aW,$.u,$.bM,$.aV,$.dc,$.i2,$.b5],s),null,!1,"Oddly Attractive Decapitated Head")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Obituary",H.a([$.aM,$.b5,$.aV,$.Z,$.u],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.N]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.cd,$.i)
q.i(0,$.br,$.j)
q.i(0,$.dJ,$.w)
q.i(0,$.aj,$.w)
q.i(0,$.aJ,$.j)
p=$.k
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.m
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.a7
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.n
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.aC+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.M("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.cd,$.i)
s.i(0,$.br,$.j)
s.i(0,$.d6,$.a9)
s.i(0,$.d4,$.j)
s.i(0,$.nb,$.j)
s.i(0,$.bg,$.j)
s.i(0,$.br,$.j)
s.i(0,$.aj,$.w)
s.i(0,$.aJ,$.j)
s.i(0,$.bJ,$.j)
p=$.k
o="The "+p+" has found a group of Violent "
m=$.m
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.ae
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.x+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.n
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.aC+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.M("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.c4(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.a7
p=p+l+"s alike. "
l=$.m+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.n
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.aC+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.M("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.T(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.af,$.i)
t.i(0,$.aJ,$.i)
t.i(0,$.pC,$.a9)
t.i(0,$.ey,$.w)
r=$.k
q="The "+r+" finds a small dungeon bearing the image of "
p=$.n
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.m+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.M("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.T(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.c4(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
k=$.k
p="The "+k+" learns from one of their "
r=$.m
p=p+r+"s that there is an ancient prophecy of a "
l=$.ae
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.a7
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.n
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.aC+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.qw
t.i(0,new R.M("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.T(o,k,q)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gbb:function(){return this.H},
gcb:function(){return this.a_},
gX:function(){return this.aM},
gL:function(){return this.aN},
sa1:function(a){return this.m=a},
sa0:function(a){return this.n=a},
sZ:function(a){return this.q=a},
sau:function(a){return this.t=a},
sY:function(a){return this.v=a},
sJ:function(a){return this.w=a},
sU:function(a){return this.B=a},
sV:function(a){return this.C=a},
sT:function(a){return this.E=a},
sa3:function(a){return this.D=a},
sa2:function(a){return this.G=a},
sX:function(a){return this.aM=a},
sL:function(a){return this.aN=a}}
Z.h6.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Dream Diary",H.a([$.Z,$.ah,$.u],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Interlocking Brick",H.a([$.ax,$.bh,$.aU,$.u,$.ac],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Art Supplies",H.a([$.ax,$.bh,$.u],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.dE,$.j)
q.i(0,$.d2,$.i)
q.i(0,$.af,$.j)
q.i(0,$.m_,$.j)
p=$.m
o="A "+p+" child tugs on the "
n=$.k
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.a7
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.n
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.x+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.qD
k=[U.c]
q.i(0,new R.M("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.T(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.q)
l=this.f
l.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aS,$.j)
s.i(0,$.d2,$.i)
s.i(0,$.bL,$.j)
s.i(0,$.aR,$.j)
s.i(0,$.d1,$.j)
s.i(0,$.b0,$.i)
p=$.k
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.m
n=n+m+"s are even starting to snigger and "
j=$.x
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.n
s.i(0,new R.M("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.T("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
l.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bA,$.i)
t.i(0,$.ex,$.j)
t.i(0,$.af,$.j)
t.i(0,$.aR,$.i)
t.i(0,$.d1,$.i)
t.i(0,$.d2,$.j)
r=$.k
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.n
t.i(0,new R.M("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.ae+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.m+" is "+$.x+"ing in reverse. Another is in a "+$.a7+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.T("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
l.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
ga2:function(){return this.C},
gV:function(){return this.E},
gT:function(){return this.D},
gbb:function(){return this.G},
gX:function(){return this.H},
gL:function(){return this.a_}}
X.d0.prototype={}
X.cZ.prototype={
$S:function(){return{func:1,v:true,args:[[P.a4,M.cv]]}}}
M.cv.prototype={}
U.ht.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Fluthulu Poster",H.a([$.ag,$.b4,$.b5,$.dM],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Scalemate",H.a([$.ag,$.b4,$.b5],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Replica Bone Shield",H.a([$.aM,$.ax,$.cy,$.i1,$.ak],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Replica Ice Sword",H.a([$.ax,$.qc,$.eU,$.ak],s),null,!1,"Fake Hard Water Long Stabber")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Zombie Mask",H.a([$.ax,$.i2,$.cA,$.b5],s),null,!1,"Dead Face")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Vampire Romance Novel",H.a([$.ah,$.Z,$.cg,$.b5],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wizardy Herbert",H.a([$.Z,$.aw,$.aU],s),null,!1,"Shitty Wizard Object")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Complacency of the Learned",H.a([$.Z,$.aw,$.aU],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Grimoire for Summoning the Zoologically Dubious ",H.a([$.Z,$.aw,$.i2,$.b5,$.dM],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wizard Statue",H.a([$.aM,$.ci,$.aw,$.aU,$.ak],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Mermaid Fountain",H.a([$.aM,$.m7,$.aw,$.aU,$.ak],s),null,!1,"Water Spitting Fish Woman Statue")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.dF,$.a9)
q.i(0,$.b1,$.j)
q.i(0,$.aL,$.j)
q.i(0,$.b3,$.w)
p=$.k
o="The "+p+" learns of a Beautiful "
n=$.m
o=o+n+" who has been kidnapped by the vial "
m=$.n
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.a7
j=[U.c]
q.i(0,new R.W("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aK,$.i)
s.i(0,$.bg,$.i)
s.i(0,$.hw,$.j)
s.i(0,$.aJ,$.i)
s.i(0,$.d6,$.i)
s.i(0,$.eB,$.j)
o=$.k
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.m
s.i(0,new R.W("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aK,$.i)
t.i(0,$.eA,$.j)
t.i(0,$.aJ,$.i)
t.i(0,$.cc,$.j)
t.i(0,$.dD,$.j)
t.i(0,$.nf,$.j)
r=$.k
q="The "+r+" finds a group of three "
o=$.m
q=q+o+"s "
n=$.x
t.i(0,new R.W("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
L.hu.prototype={
gP:function(){return this.m}}
N.X.prototype={
M:function(a){return H.v(new H.cp(H.lu(this),null))+": "+H.v(this.b)}}
O.hC.prototype={
gP:function(){return this.m},
gY:function(){return this.n},
gJ:function(){return this.q},
gN:function(){return this.t},
gU:function(){return this.u},
gV:function(){return this.v},
gT:function(){return this.w},
gL:function(){return this.A}}
E.eI.prototype={}
E.iY.prototype={}
E.r.prototype={
M:function(a){var t="["+J.aY(this.a)+" x "+H.v(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gdi:function(){return this.a},
geH:function(){return this.b}}
E.cW.prototype={
M:function(a){var t="[(Random from "+P.i6(this.d,"(",")")+") x "+H.v(this.b)
return t+(this.c?" (from Aspect)":"")+"]"},
gL:function(){return this.d}}
E.dw.prototype={
M:function(a){return"[Stats assigned from player Interests x"+H.v(this.b)+"]"}}
Y.hG.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("How to Teach Your Friends to Hack SBURB",H.a([$.ah,$.R,$.Z,$.ac,$.eT],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Unstable Domino",H.a([$.ax,$.R,$.aV],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Exposed Thread",H.a([$.ag,$.R,$.aV],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Teetering Plate",H.a([$.i0,$.R,$.aV],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.N]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.m0,$.j)
t.i(0,$.aL,$.i)
t.i(0,$.bJ,$.w)
t.i(0,$.bz,$.i)
r=$.m
q="An excited "+r+" runs up to the "
p=$.k
q=q+p+" and starts to "
o=$.x
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.ae
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.a7
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.n
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.M("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.T(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
o=$.k
t.i(0,new R.a1("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.n+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.m+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.o(),!1,!1,new Y.c5("Rewards/no_reward.png",null),1,null,null),$.q)
o=$.m
j="Now that the "+o+"s are free from the reign of "+$.n+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.k
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.x
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.ae+" Quest Online: The "+$.a7+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a1("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p="The "+$.n+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.k
p=p+o+" shows the "
r=$.m
t.i(0,new R.aq("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.x+"s in time to stop them.    ")],H.a([],i),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.x2},
gN:function(){return this.y1},
gL:function(){return this.t}}
Y.hH.prototype={
ab:function(){return!0},
S:function(a){return!1},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Sherpa Parka",H.a([$.bM,$.R,$.eQ],s),"Clearly the best class uses this.",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Guide Book",H.a([$.ac,$.bM,$.ah,$.Z,$.R,$.al],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Whistle",H.a([$.Y,$.R,$.aZ],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Announcement System",H.a([$.Y,$.R,$.ao,$.al],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.m0,$.i)
t.i(0,$.aL,$.i)
t.i(0,$.bJ,$.j)
t.i(0,$.bz,$.i)
r="Now that the "+$.n+" is out of the way, a group of "
q=$.m
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.k
o=[U.c]
t.i(0,new R.a1("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.x+", but they are happy.")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.k
t.i(0,new R.aq("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.m+" "+$.x+"s in time to stop them.    ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.aA)},
gN:function(){return this.y1}}
L.hI.prototype={
gP:function(){return this.m}}
T.hJ.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Doll",H.a([$.i0,$.aX,$.bd,$.u],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Puppet",H.a([$.am,$.bd,$.u,$.ac,$.b5],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mirror",H.a([$.mc,$.u],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shipping Grid",H.a([$.Z,$.u,$.cg],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Shades",H.a([$.aO,$.aW,$.u],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.N]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.d4,$.w)
q.i(0,$.d5,$.i)
q.i(0,$.aD,$.j)
p=$.k
o="The "+p+", guided by a "+$.m+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.n
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.aC+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.M("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.T(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=$.k
p="The "+j+" finds a Violent "
l=$.m
p=p+l+". A Magical Talking "
k=$.a7
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.n
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.M("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.T(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.mo(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
h=this.f
h.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.b0,$.i)
s.i(0,$.hw,$.i)
s.i(0,$.dJ,$.j)
s.i(0,$.aJ,$.i)
s.i(0,$.b2,$.j)
s.i(0,$.bJ,$.w)
p=$.k
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.a7
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.n
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.aC+". The "+p+" is victorious. "
s.i(0,new R.M("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.T(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j="Now that the "+$.n+" has been defeated, a Copy "
p=$.k
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.m
j=j+k+"s "
l=$.x
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.d7+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a1("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.cl(),!1,!1,new Y.aI("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.n
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.M("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.T(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.c4(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
h.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.hv,$.i)
t.i(0,$.b2,$.i)
t.i(0,$.lZ,$.i)
t.i(0,$.dC,$.j)
t.i(0,$.eB,$.i)
t.i(0,$.b1,$.j)
t.i(0,$.d5,$.w)
r=$.k
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.m
t.i(0,new R.M("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.x+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.ae+" laws put in place by "+$.n+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.k
p="The "+r+" finds a weeping Broken Hearted "
q=$.m
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.ae
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.x
t.i(0,new R.a1("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.e1(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
q=$.k
m="The "+q+"  and the "
r=$.cI
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.n
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.M("Flushed Shipping Dungeon",!1,[new U.c(m),new U.T(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.v(C.j)+".",n)],H.a([],i),R.cH(),!1,!1,new Y.eG(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
n=$.k
r="The "+n+"  and the "
q=$.cI
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.n
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.M("Pitched Shipping Dungeon",!1,[new U.c(r),new U.T(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.v(C.j)+".",m)],H.a([],i),R.cH(),!1,!1,new Y.fc(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
h.i(0,new X.t(s,t,null),$.ab)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gbb:function(){return this.G},
gX:function(){return this.H},
gL:function(){return this.a_}}
B.hK.prototype={
ab:function(){return!1},
S:function(a){return!0},
a9:function(){return this.S(0)},
ai:function(){return 0.5},
aj:function(){return 2},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Family Ashes",H.a([$.aM,$.c2,$.R,$.aV,$.m8],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Last Will and Testament",H.a([$.ac,$.Z,$.R,$.aV,$.mb],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Grooming Guide",H.a([$.ah,$.R,$.as],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Powered Attorney",H.a([$.q2,$.R,$.m1,$.mb],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Executer's Ax",H.a([$.q_,$.R,$.cz,$.mb],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ak:function(){return 1.5},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aS,$.j)
r=$.n
q="With the death of the "+r+", it now falls to the "
p=$.k
o=[U.c]
t.i(0,new R.a1("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.m+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
r="The "+$.n+" has released the frogs into the "
p=$.k
t.i(0,new R.aq("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.x+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.p},
gad:function(){return this.l},
gac:function(){return this.m},
gN:function(){return this.n}}
V.hL.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Hippo",H.a([$.aZ,$.au,$.u],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ranting",H.a([$.m2,$.aZ,$.dO],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Vent",H.a([$.Y,$.no],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.d1,$.w)
t.i(0,$.bA,$.j)
t.i(0,$.lV,$.j)
t.i(0,$.ex,$.j)
r=$.k
q="The "+r+" hears the screaming voice of the "
p=$.n
q=q+p+", and when they walk into a consort village, a "
o=$.m
q=q+o+" "
n=$.x
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.M("Stop the Screamening",!1,[new U.c(q),new U.c(n),new U.c(o),new U.T(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gU:function(){return this.w},
gV:function(){return this.A},
gT:function(){return this.B},
gX:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gL:function(){return this.G}}
X.hM.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Wand",H.a([$.am,$.u,$.aw,$.au],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Angel Feather",H.a([$.au,$.hX,$.u,$.bB,$.aP,$.ac,$.aw],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Never Ending Story DVD",H.a([$.nz,$.nu,$.u,$.aw,$.bN,$.au],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Candle",H.a([$.au,$.bB,$.u,$.c2],s),null,!1,"Dying Light Stick")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Figurine",H.a([$.ax,$.bB,$.u,$.au],s),null,!1,"Tiny Petrified Tinkerbell")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.N]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.na,$.i)
q.i(0,$.b1,$.j)
q.i(0,$.af,$.i)
q.i(0,$.aR,$.i)
p=$.k
o="The "+p+" is just minding their own business when they see a wizened "
n=$.m
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.x+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.n
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.a7
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.qz
i=[U.c]
q.i(0,new R.M("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(k,p,j)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aK,$.i)
s.i(0,$.lU,$.j)
s.i(0,$.bL,$.i)
p=$.k
o="The "+p+"  is approached by a Crafty "
m=$.m
o=o+m+" who offers them a magical "
l=$.a7
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.n
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.M("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.af,$.i)
t.i(0,$.c0,$.w)
t.i(0,$.bb,$.i)
t.i(0,$.aR,$.i)
r=$.k
q="The "+r+" finds a grey town of despondant "
p=$.m
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.n
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.a7
t.i(0,new R.M("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.T("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.k
o="The "+r+" discovers a group of "
p=$.m
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.n
t.i(0,new R.M("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.T("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.e1(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
n.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gX:function(){return this.G},
gL:function(){return this.H}}
X.hN.prototype={
ab:function(){return!0},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Footstick",H.a([$.ch,$.R,$.hZ,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("SBURBSim Cheating Guide",H.a([$.ah,$.R,$.eT,$.Z],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Body Pillow of Shogun",H.a([$.ag,$.R,$.d9,$.ma,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Macrobots",H.a([$.ny,$.R,$.m1],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 0.5},
aj:function(){return 0.5},
ak:function(){return 0.5},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.b3,$.i)
t.i(0,$.bL,$.i)
t.i(0,$.d2,$.i)
t.i(0,$.bz,$.i)
t.i(0,$.dE,$.i)
t.i(0,$.d1,$.i)
t.i(0,$.ez,$.j)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.c]
t.i(0,new R.W("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.mp(),!1,!1,new Y.c5("Rewards/no_reward.png",null),1,null,null),$.q)
r=$.n
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aC+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.x
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.T(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.nJ(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
t.i(0,new R.W("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.o(),!1,!1,new Y.c5("Rewards/no_reward.png",null),1,null,null),$.q)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.n
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.k
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.n+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m="A wizened "+$.m+" tells the "
r=$.k
t.i(0,new R.a1("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.a1("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.nK(),!1,!1,new Y.aI("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a1("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.w)
n=$.n
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.aq("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.a8)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gL:function(){return this.w}}
Q.hO.prototype={
ab:function(){return!0},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Yardstick",H.a([$.ch,$.R,$.hZ,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("SBURB Hacking Guide",H.a([$.ah,$.R,$.eT,$.Z],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Body Pillow of Hussie",H.a([$.ag,$.R,$.d9,$.ma,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
gJ:function(){return this.x2},
gad:function(){return this.y1},
gac:function(){return this.y2},
gN:function(){return this.p},
gL:function(){return this.v}}
B.hT.prototype={
$1:function(a){return!a.gbg()},
$S:function(){return{func:1,args:[B.ce]}}}
B.ce.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Perfectly Generic Object",H.a([],[G.U]),null,!1,"The Third Entry for This Fucking Block")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.y(t,0)]))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.br,$.i)
q.i(0,$.aj,$.w)
q.i(0,$.cd,$.i)
q.i(0,$.aJ,$.j)
q.i(0,$.d3,$.w)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
m=[U.c]
q.i(0,new R.W("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.o(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
n=this.r
n.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.i)
s.i(0,$.dG,$.w)
s.i(0,$.cw,$.j)
s.i(0,$.bq,$.i)
s.i(0,$.aS,$.w)
p=$.k
o="The "+p+" learns that all of the local "
l=$.m
s.i(0,new R.W("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.o(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.af,$.i)
t.i(0,$.aj,$.w)
t.i(0,$.aL,$.j)
r=$.k
q="The "+r+" learns that all of the local "
p=$.m
t.i(0,new R.W("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.o(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
r="The "+p+" learns that all of the local "
q=$.m
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.x
t.i(0,new R.W("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.mn(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
n.i(0,new X.t(s,t,null),$.ab)},
M:function(a){return this.ch},
gbg:function(){return this.a},
gam:function(){return this.b},
gL:function(){return this.c},
gan:function(){return this.d},
gJ:function(){return this.e},
gav:function(a){return this.f},
gao:function(){return this.x},
ga4:function(a){return this.ch}}
A.V.prototype={
aK:function(a,b){var t=b.gc6()-this.gc6()
if(t>0)t=1
else if(t<0)t=-1
return C.b.c7(t)},
gen:function(){var t,s,r,q,p,o,n
t=H.a([],[P.N])
s=new A.fd(null,null)
s.cd(this.f.a)
if(this.r===0)return t
r=P.cj(G.pq(this.f),!0,G.U)
C.a.b5(r,new A.i5())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.cU)(r),++p){o=r[p]
n=o.gem()
n=n.gaw(n)
if(!n)t.push(" "+Y.t1(s.eM(o.gem())))}return t},
gc6:function(){var t,s,r
for(t=this.f,s=new P.cT(t,t.r,null,null,[null]),s.c=t.e,r=0;s.W();)r+=s.d.gc6()
return r},
geg:function(){var t=this.f
return new H.bS(t,new A.i4(),[H.y(t,0)])},
ges:function(){var t,s,r,q,p
for(t=this.gen(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.cU)(t),++q)r+=t[q]+" "
return r+this.d},
M:function(a){return this.ges()},
du:function(a,b,c,d,e){var t,s,r
t=P.eZ(b,null)
this.f=t
if(t.a===0)t.j(0,$.dO)
s=P.eZ(this.geg(),null)
for(t=new P.cT(s,s.r,null,null,[null]),t.c=s.e;t.W();){r=t.d
this.f.az(0,r.gdj())
this.f.aq(0,r)}$.$get$nB().push(this)},
$isaH:1,
$asaH:function(){return[A.V]}}
A.i5.prototype={
$2:function(a,b){return a.geJ().f9(0,b.geJ().c7(0))},
$S:function(){return{func:1,args:[G.U,G.U]}}}
A.i4.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.U]}}}
Z.ib.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Juice Box",H.a([$.Z,$.u,$.au,$.ak],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Shogun Body Pillow",H.a([$.d9,$.b4,$.u],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.d1,$.a9)
t.i(0,$.b1,$.j)
t.i(0,$.aD,$.i)
t.i(0,$.af,$.j)
t.i(0,$.aR,$.i)
r=$.k
q="The "+r+" sees a floating sentient "
p=$.a7
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.m+" notices it, and starts "+$.x+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.n
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.c]
t.i(0,new R.M("Talk to your Juice entity",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
r="The "+p+" is greeted by a young adolescent "
m=$.m
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.n
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.x
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.M("Be The Wingman",!1,[new U.c(r),new U.c(l),new U.c(n),new U.T(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
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
t.i(0,new R.M("Pilot The Mech",!1,[new U.c(m),new U.c(o),new U.c(n),new U.T(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gU:function(){return this.w},
gV:function(){return this.A},
gT:function(){return this.B},
gX:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gL:function(){return this.G},
sa1:function(a){return this.m=a},
sa0:function(a){return this.n=a},
sZ:function(a){return this.q=a},
sJ:function(a){return this.u=a},
sU:function(a){return this.w=a},
sV:function(a){return this.A=a},
sT:function(a){return this.B=a},
sX:function(a){return this.C=a},
sa3:function(a){return this.E=a},
sa2:function(a){return this.D=a},
sL:function(a){return this.G=a}}
N.ic.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Gavel",H.a([$.am,$.ns],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Caution Tape",H.a([$.ax,$.dc],s),null,!1,"Impassible Barrier")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Deerstalker Hat",H.a([$.ag,$.aX],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mystery Novel",H.a([$.Z,$.ah],s),null,!1,"Book where the Criminal was the Janitor")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dish Served Cold",H.a([$.m5,$.c1,$.bM],s),null,!1,"REVENGE")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Pony Pals: Detective Pony ",H.a([$.Z,$.ah,$.aO],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Handcuffs",H.a([$.aM,$.Y,$.dc],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.dF,$.w)
q.i(0,$.aK,$.j)
q.i(0,$.bb,$.w)
p=$.k
o="The "+p+" finds an elaborate courtroom full of "+$.x+"ing "
n=$.m
m=[U.c]
q.i(0,new R.W("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.a7+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
n=this.r
n.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aK,$.i)
s.i(0,$.bJ,$.j)
s.i(0,$.bq,$.j)
p=$.k
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.m
l=o+l+" yells 'Stop that thief' in betwen "+$.x+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.a7+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.qv
s.i(0,new R.W("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aK,$.i)
t.i(0,$.aS,$.j)
t.i(0,$.bg,$.w)
t.i(0,$.d6,$.j)
t.i(0,$.d4,$.j)
t.i(0,$.dI,$.j)
t.i(0,$.hx,$.j)
r=$.k
q="The "+r+" finds a crowd of "
p=$.x
q=q+p+"ing "
o=$.m
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.qJ
t.i(0,new R.W("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
S.ie.prototype={
ab:function(){return!0},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Shining Armor",H.a([$.aM,$.md,$.R,$.i1],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Excalibur",H.a([$.ac,$.md,$.R,$.db,$.cz,$.eU],s),"Knight Shit",!1,"Masamune")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Noble Steed",H.a([$.Y,$.R,$.cA,$.bd],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Hero's Shield",H.a([$.aM,$.i1,$.R,$.md],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 1},
aj:function(){return 2.5},
ak:function(){return 0.75},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.lX,$.i)
t.i(0,$.bK,$.i)
t.i(0,$.cx,$.i)
t.i(0,$.dI,$.i)
t.i(0,$.dF,$.j)
r="The "+$.n+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.x+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.n
r="Now that the "+q+" is defeated, the "
o=$.m
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.k
t.i(0,new R.a1("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
o=$.ae
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.n
n=n+q+". A Learned "+$.m+" explains that it can only be defeated by the Legendary "
r=$.a7
n=n+r+" Blade. The "
m=$.k
t.i(0,new R.a1("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
r="The volcanos of the land are weirdly active after the defeat of the "+$.n+". One begins to erupt near a "
m=$.m
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.x+"s, but not really doing anything to evacuate or save anyone. The "
o=$.k
t.i(0,new R.a1("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l}}
Q.ig.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("LAW Gavel",H.a([$.u,$.am,$.ns],s),"Organics seem to respect this. Use it to your advantage.",!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("LAW Caution Tape",H.a([$.u,$.ax,$.dc],s),"For when you want to tell inferior organics to keep out.",!1,"Impassible Barrier")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("STOP SIGN",H.a([$.u,$.qp,$.Y,$.dc],s),"This isn't a weapon, dunkass.",!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.N]
s=H.a(["Scales","Disorder","Chaos","Injustice"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.dF,$.i)
q.i(0,$.bJ,$.j)
q.i(0,$.aS,$.j)
q.i(0,$.aK,$.w)
q.i(0,$.b0,$.w)
p=$.k
o="The "+p+" is told by a worried "
n=$.m
o=o+n+" that a group of underling rebels are causing havoc across the land, breaking laws left and right. They must be stopped! Eventually."
m="The "+p+" has located a rebel hideout. The underlings get ready for a battle to the death when the "+p+" suddenly breaks out a "+$.a7+" and starts getting all lawyerly on them. The underlings are all sentenced to 30 years in prison, without parole."
l="The "+p+" finds out through interrogating enough of the underling rebels that they have a big mean leader they call the "
k=$.n
l=l+k+". Sounds like a challenge. The "+p+" cracks their knuckles as they prepare for the biggest case on this side of Skaia."
j="Arriving at the final rebel hideout, "+p+" prepares for battle against the "+k+". For their crimes against the "+n+"s, they're getting the DEATH SENTENCE."
n="The "+k+" lies slain by the "+p+"'s "+$.aC+". The "+p+" has won! The "+n+"s are no longer plagued by the lawbreakers."
i=[U.c]
q.i(0,new R.M("Punish the Rebels",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(j,"The "+k+" continues to run their underling crime ring with the defeat of the "+p+".",n)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Heroics","Villains","Heroes","Powers","Justice","Metropolises","Comics"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bK,$.i)
s.i(0,$.aD,$.j)
s.i(0,$.b1,$.j)
s.i(0,$.bK,$.w)
s.i(0,$.cw,$.w)
p=$.k
o="The "+p+" is taking a walk through one of the land's many cities when they witness a fight break out between an Underling Hero and "
m=$.m
o=o+m+" Villain. One of the Underling Hero's attacks hits the "+p+". They won't be having any of that! The "+p+" helps the "+m+" Villain defeat the Underling Hero, and in turn gets invited to join a league of shady criminals. Sweet."
l="The "+p+" teams up with some other villainous "+m+"s to take down a rival team of Underling Heroes. They won't be having any of this LAW business, certainly. Rules were made to be broken, and that's just what the "+p+" is going to do."
m="After defeating yet another league of Underling Heroes, the "+p+" and the other "+m+" Villains feel a cold chill run down their spine. In the distance, lightning strikes a mountain, revealing the headquarters of the  "
k=$.n
m=m+k+", leader of the Underling Heroes and the last hope to preserve law. They're going down!"
j="The "+p+" arrives at the "+k+"'s headquarters, fighting through waves of Underling Heroes before they can finally reach the "+k+". It\u2019s time to end the LAW, once and for all!"
h="The "+k+" lies slain by the "+p+"'s "+$.aC+". The last of the Heroes is no more.  Injustice takes over the land at last."
s.i(0,new R.M("Become the Villain",!1,[new U.c(o),new U.c(l),new U.c(m),new U.T(j,"The "+p+" is defeated. The "+k+" holds on to the last remnants of justice in the land.",h)],H.a([],i),R.c4(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=$.k
k="The "+h+" is taking a walk through one of the land's many cities when they witness a fight break out between some "
p=$.m
k=k+p+" Hero and an Underling Villain. Being naturally inclined toward the preservation of order, the "+h+" teams up with the "+p+" Hero and triumphs against the Underling Villain. As a reward, the "+p+" Hero invites the "+h+" to join an elite team of crime fighting good guys! Awesome!"
p="The "+h+" works together with some "+p+" Heroes to take down and arrest some Underling Villains. Slowly but surely, the balance of order and disorder begins to shift in order's favor. The number of villains is getting fewer and fewer."
j="With the last of the Villainous Underlings defeated, the "+h+" rejoices, thinking that justice has been served in this land. But what's this? Lightning strikes the ground far away and causes a dark mountain to shoot up into the sky! The lair of the final villain, the "
m=$.n
j=j+m+", has been revealed."
l="The "+h+" storms the lair of the "+m+", the final villain in all of this land. It's time to bring back KAW, once and for all!"
o="The "+m+" lies slain by the "+h+"'s "+$.aC+". The last of the Villains is no more. Justice is finally preserved in the land at last."
s.i(0,new R.M("Become the Hero",!1,[new U.c(k),new U.c(p),new U.c(j),new U.T(l,"The "+h+" is defeated. The "+m+" holds on to the last remnants of injustice in the land.",o)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Greed","Poverty","Discrepancy","Famine","Starvation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.eA,$.i)
t.i(0,$.br,$.j)
t.i(0,$.hy,$.j)
t.i(0,$.ex,$.w)
t.i(0,$.bA,$.w)
r=$.k
q="The "+r+" looks upon the land and notices how some of the "
p=$.m
q=q+p+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
o="The "+r+" comes up with a plan to bring balance to the land. If there's not enough resources, they'll simply have to cut the "+p+" population in half. But through murder? No... They need something cleaner. Something more random."
m="The "+r+" wanders through a poverty striken "+p+" village and is told the legend of the "
l=$.n
m=m+l+". The "+l+" lives in a lair on the other side of the land, where they hoard all of the land's resources. Oh yeah, and they've got this golden "
k=$.a7
m=m+k+" that can half the number of "+p+"s on the land. The "+r+" finds this especially interesting. "
j="The "+r+" shows up at the "+l+"'s lair and asks them to hand over the golden "+k+". The "+l+" agrees... if the "+r+" can defeat them first!"
p="The "+l+" lies slain by the "+r+"'s "+$.aC+". The "+r+" uses the golden "+k+" to cut the "+p+" population in half. Problem solved. "
t.i(0,new R.M("Bring the Balance",!1,[new U.c(q),new U.c(o),new U.c(m),new U.T(j,"The "+r+" is defeated and left without the golden "+k+" they seek.",p)],H.a([],i),R.c4(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
p=$.k
k="The "+p+" looks upon the land and notices how some of the "
r=$.m
k=k+r+"s are low on food and other resources while others live in luxury. Something must be done to fix this!"
j="The "+p+" comes up with a plan to bring balance to the land. They can force the "+r+"s who have an abundance of resources to share them with the "+r+"s who are resource deprived. But when the "+p+" tells them this, they get understandably upset. They worked so hard for their resources, why should they share them with others? The "+p+" is left stumped."
m="The "+p+" wanders through a poverty striken "+r+" village and is told the legend of the "
o=$.n
m=m+o+". The "+o+" lives in a lair on the other side of the land, where they hoard all of the land's resources. The "+p+" is confused as to why nobody mentioned this before. The solution to the resource problem is obvious now."
r="The "+p+" shows up at the "+o+"'s lair and asks them to be kind and share their resources with the "+r+"s. The "+o+" agrees... if the "+p+" can defeat them first!"
q="The "+o+" lies slain by the "+p+"'s "+$.aC+". The "+p+" distributes all of the denizen's resources throughout the land, improving living conditions everywhere."
t.i(0,new R.M("Create the Balance",!1,[new U.c(k),new U.c(j),new U.c(m),new U.T(r,"The horrific inequality maintained by the "+o+" continues with the defeat of the "+p+".",q)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gbb:function(){return this.H},
gcb:function(){return this.a_},
gX:function(){return this.aM},
gL:function(){return this.aN}}
K.ih.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Creeping Vine",H.a([$.am,$.u,$.da,$.bd],s),null,!1,"Sentient Plant Tentacles")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Lollipop",H.a([$.nm,$.u,$.bi],s),null,!1,"Sentient Plant Tentacles")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Golem",H.a([$.aM,$.ci,$.u,$.bd],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ectoplasm",H.a([$.m8,$.u,$.bi],s),null,!1,"Ghost [Censored]")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Aqua Vitae",H.a([$.aW,$.u,$.bi,$.ac,$.aw],s),null,!1,"Tears of JR")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Homunculus",H.a([$.cA,$.u,$.bd],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.N]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.aL,$.i)
q.i(0,$.aj,$.i)
q.i(0,$.ew,$.w)
q.i(0,$.af,$.j)
q.i(0,$.m0,$.j)
q.i(0,$.b3,$.w)
p=$.k
o="The "+p+" finds a village of compliant "
n=$.m
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.x+"ing in panic. Don't upset "
m=$.n
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.M("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.T(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aL,$.i)
s.i(0,$.b2,$.i)
s.i(0,$.b3,$.w)
s.i(0,$.af,$.j)
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
s.i(0,new R.M("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.T(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.br,$.i)
t.i(0,$.aj,$.w)
t.i(0,$.cd,$.i)
t.i(0,$.aJ,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.lS,$.j)
r="Drawn by wailing and "+$.x+"ing, the "
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
t.i(0,new R.M("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.T(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gX:function(){return this.G},
gL:function(){return this.H}}
G.ii.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("FAQ",H.a([$.ao,$.u,$.al,$.cB],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flashlight",H.a([$.ax,$.u,$.bB,$.ao,$.cB],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Octet",H.a([$.u,$.bB,$.cB,$.ac,$.m7],s),null,!1,"D13")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Horseshoe",H.a([$.nt,$.u,$.aU],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rabbits Foot",H.a([$.nx,$.u],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("4 Leaf Clover",H.a([$.da,$.u,$.bB,$.cB],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("8-Ball",H.a([$.aW,$.u,$.bd],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.N]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.lW,$.i)
q.i(0,$.dE,$.j)
q.i(0,$.cc,$.i)
q.i(0,$.d5,$.i)
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
q.i(0,new R.M("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.T(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.x+"ing "+$.m+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.n
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.M("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.T(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.f
m.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.aL,$.j)
s.i(0,$.af,$.j)
s.i(0,$.c0,$.i)
s.i(0,$.ne,$.i)
s.i(0,$.dG,$.i)
s.i(0,$.lU,$.i)
p=$.k
o="The "+p+" walks into a "
n=$.m
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.a7
o=o+l+", but "
k=$.n
o=o+k+" has hoarded all of the planets "
j=$.ae
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.x+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.M("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.T(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.mo(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
n=$.k
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.m
j=j+k+" explains that the "
h=$.n
s.i(0,new R.M("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.x+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.T("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.ey,$.j)
q.i(0,$.aj,$.j)
q.i(0,$.eD,$.i)
q.i(0,$.af,$.j)
q.i(0,$.bb,$.i)
p="Now that the "+$.n+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.k
p=p+o+" sets up a wiki and settles in to help the "
n=$.m
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.d7+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a1("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.cl(),!1,!1,new Y.aI("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
l="Now that the "+$.n+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.k
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.m
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.d7+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a1("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.c4(),!1,!1,new Y.aI("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
p=$.m
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.k
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.n
q.i(0,new R.M("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.T(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.cc,$.i)
t.i(0,$.lW,$.i)
t.i(0,$.d5,$.j)
t.i(0,$.b1,$.j)
t.i(0,$.nd,$.j)
t.i(0,$.aJ,$.w)
t.i(0,$.cx,$.w)
t.i(0,$.aD,$.j)
t.i(0,$.b0,$.w)
t.i(0,$.aj,$.j)
t.i(0,$.ba,$.i)
s=$.k
r="The "+s+" is approached by a Fast Talking "
p=$.m
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.a7
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.x+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.n
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.M("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.T(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
o="After the "+$.n+", the "
s=$.k
o=o+s+" is disappointed to learn that barely any of the "
l=$.m
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.d7+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a1("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.cl(),!1,!1,new Y.aI("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
m.i(0,new X.t(q,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
Z.iq.prototype={
ab:function(){return!0},
I:function(){var t,s,r,q
t=this.B
s=[G.U]
r=A.h("Dream Bubbles Book",H.a([$.Z,$.as,$.ah,$.q7],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),[H.y(t,0)]))
t=Q.p(null,null,A.V)
r=A.h("Uno Reverse Card",H.a([$.nn,$.hZ,$.as],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Lord's Cape",H.a([$.ag,$.R,$.as],s),"Lord Shit",!1,"Shoguns Cape")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Drawing Tablet",H.a([$.eT,$.R,$.as],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("How to Make Friends And Influence People",H.a([$.ac,$.Z,$.R,$.cf,$.ah],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!0},
a9:function(){return this.S(0)},
ai:function(){return 3.1},
aj:function(){return 0.1},
ak:function(){return 3.1},
aB:function(){return!0},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bg,$.w)
q.i(0,$.d6,$.w)
q.i(0,$.aJ,$.w)
q.i(0,$.bq,$.j)
p="The "+$.n+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.k
p=p+o+" comands that the "
n=$.m
m=[U.c]
q.i(0,new R.aq("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.x+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o="As soon as the "+$.n+" is defeated, the "
n=$.m
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.k
q.i(0,new R.a1("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p=this.x
p.i(0,new X.t(s,q,null),$.aA)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.px,$.i)
t.i(0,$.aR,$.i)
t.i(0,$.aj,$.i)
t.i(0,$.af,$.j)
s="The "+$.n+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.k
s=s+r+" comands that the "
o=$.m
t.i(0,new R.aq("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.x+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="As soon as the "+$.n+" is defeated, the "
o=$.m
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.k
t.i(0,new R.a1("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",this.B,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,t,null),$.aA)},
gJ:function(){return this.p},
gad:function(){return this.l},
gac:function(){return this.m},
gN:function(){return this.n},
gL:function(){return this.C}}
S.ir.prototype={
ab:function(){return!0},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Alternate Costume",H.a([$.ag,$.R,$.aw,$.ac,$.bs],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mage's Cape",H.a([$.ag,$.R,$.aw],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mage's Staff",H.a([$.am,$.R,$.aU,$.aw,$.ch],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Walking Broom",H.a([$.m3,$.am,$.R,$.bd,$.aw,$.ch],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 0.67},
aj:function(){return 0.67},
ak:function(){return 1.5},
K:function(){var t,s,r,q,p,o,n
t=[P.N]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.dD,$.i)
t.i(0,$.dI,$.j)
t.i(0,$.aS,$.i)
t.i(0,$.cw,$.j)
t.i(0,$.br,$.w)
r="The "+$.n+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.k
t.i(0,new R.a1("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
r="The "+q+" is feeling quite pleased with their victory over the "+$.n+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.ae
t.i(0,new R.a1("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.o(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
q="Now that the "+$.n+" has been defeated, the "
o=$.m
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.k
q=q+r+"'s help in planning the brand new city of "
n=$.ae
t.i(0,new R.a1("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.x+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.o(),!1,!1,new Y.aI(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gL:function(){return this.w}}
U.is.prototype={
ab:function(){return!0},
S:function(a){return!1},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Maiden's Breath",H.a([$.da,$.R,$.aX],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Feather Duster",H.a([$.am,$.R,$.ch,$.hX],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Valkyrie Shield",H.a([$.aX,$.aM,$.Y,$.R,$.ac,$.i1,$.pZ],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Maiden's Songbook",H.a([$.Z,$.R,$.aP,$.ah],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 0.33},
aj:function(){return 3},
ak:function(){return 1.5},
K:function(){var t,s,r,q,p,o,n
t=[P.N]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.bz,$.i)
t.i(0,$.aL,$.i)
t.i(0,$.af,$.j)
t.i(0,$.aj,$.j)
t.i(0,$.c0,$.j)
t.i(0,$.b0,$.j)
r="The "+$.n+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.k
r=r+q+" asks local  "
p=$.m
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.x
n=[U.c]
t.i(0,new R.aq("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.k
o="The "+q+" has adopted a local "
p=$.m
t.i(0,new R.a1("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.x+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.n+". ")],H.a([],n),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.x2},
gad:function(){return this.y1},
gac:function(){return this.y2},
gN:function(){return this.p}}
D.iy.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("memes",H.a([$.au,$.nl,$.q6,$.no],[G.U]),"No. Just no.",!1,";)")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.y(t,0)]))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.lW,$.i)
r=$.k
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.m+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.n
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.M("Become Shrek",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gU:function(){return this.w},
gV:function(){return this.A},
gT:function(){return this.B},
gX:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gL:function(){return this.G}}
L.iB.prototype={
gP:function(){return this.m},
gY:function(){return this.n},
gJ:function(){return this.q},
gN:function(){return this.t},
gU:function(){return this.u},
gV:function(){return this.v},
gT:function(){return this.w},
gX:function(){return this.A},
gL:function(){return this.D}}
V.iC.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Puzzle Box",H.a([$.am,$.u,$.aw],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Tesla Coil",H.a([$.ao,$.u,$.Y],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Coin",H.a([$.Y,$.u],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Electronic Door",H.a([$.Y,$.u,$.ao,$.al],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Janus Bust",H.a([$.aM,$.m4,$.ci,$.as,$.u,$.ac,$.ao],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.aR,$.j)
q.i(0,$.dE,$.w)
q.i(0,$.bb,$.w)
p=$.k
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.m
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.n
k=[U.c]
q.i(0,new R.M("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.T(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.di(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
n=$.k
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.m+" explains that at the end of the Labrinth is the "
l=$.n
q.i(0,new R.M("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.T("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n=this.f
n.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dF,$.w)
s.i(0,$.aK,$.j)
s.i(0,$.bb,$.w)
s.i(0,$.aR,$.w)
p=$.n
o="The "+p+" has commited a staggering amount of crimes against the local "+$.m+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.k
s.i(0,new R.M("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.T("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.eA,$.i)
t.i(0,$.aj,$.j)
t.i(0,$.eD,$.i)
t.i(0,$.af,$.j)
t.i(0,$.bb,$.i)
r=$.k
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.n
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.a7+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.M("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
S.iE.prototype={
gP:function(){return this.m},
gY:function(){return this.n},
gJ:function(){return this.q},
gN:function(){return this.t},
gU:function(){return this.u},
gV:function(){return this.v},
gT:function(){return this.w},
gL:function(){return this.A}}
O.iF.prototype={
gP:function(){return this.m}}
B.iG.prototype={
gP:function(){return this.m}}
E.iH.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Feather Pen",H.a([$.Y,$.R,$.as,$.hX],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Half Finished Bust of Snoop Dog",H.a([$.qh,$.R,$.m4,$.aU,$.ac],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Book of Poetry",H.a([$.Z,$.R,$.as,$.ah],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ab:function(){return!1},
S:function(a){return!1},
a9:function(){return this.S(0)},
ai:function(){return 0.1},
aj:function(){return 3},
ak:function(){return 0.1},
aB:function(){return!0},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.bz,$.i)
t.i(0,$.aL,$.i)
t.i(0,$.af,$.j)
t.i(0,$.aj,$.j)
t.i(0,$.c0,$.j)
t.i(0,$.b0,$.j)
r="The "+$.n+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.k
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.x
n=[U.c]
t.i(0,new R.aq("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
q="You'd think after the dramatic defeat of the "+$.n+" the "
o=$.m
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.k
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.a7
t.i(0,new R.a1("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gL:function(){return this.w}}
F.iI.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Piano",H.a([$.aU,$.am,$.aP,$.as],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flute",H.a([$.Y,$.aP],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Microphone",H.a([$.aZ,$.ao],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Violin",H.a([$.am,$.aP],s),null,!1,"Tiny Cello")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sheet Music",H.a([$.Z,$.aP],s),null,!1,"Cheat Codes for Instruments")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Electric Guitar",H.a([$.ax,$.aP,$.ao,$.aZ,$.aO],s),null,!1,"Electrical Stringed Music Maker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Turn Tables",H.a([$.ax,$.aP,$.ao,$.aO],s),null,!1,"Spinning Disc Sound Maker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Guitar",H.a([$.am,$.aP],s),null,!1,"String Music Maker")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.b1,$.a9)
q.i(0,$.nd,$.i)
q.i(0,$.d5,$.i)
q.i(0,$.c0,$.j)
q.i(0,$.af,$.j)
q.i(0,$.lT,$.j)
p=$.k
o="The "+p+" meets a wise old "+$.m+" who tells that the "+$.n+" can only be awoken by the Legendary Hero playing the "
n=$.ae
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.a7
k=[U.c]
q.i(0,new R.W("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
n="The "+p+" finds an empty, trashed "
l=$.ae
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.a7+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.x+"ing "+$.m+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.qB
q.i(0,new R.W("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.ng,$.a9)
s.i(0,$.bJ,$.j)
s.i(0,$.bq,$.j)
s.i(0,$.c0,$.i)
s.i(0,$.lT,$.a9)
o=$.k
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.ae
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.n
s.i(0,new R.W("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.a7+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ew,$.a9)
t.i(0,$.aD,$.j)
t.i(0,$.cd,$.j)
r=$.k
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.m
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.x
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.ae+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.W("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
V.j0.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Shorts",H.a([$.ag,$.R,$.dL,$.ac],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sidekick Figurine",H.a([$.ax,$.R,$.aO],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Steroids",H.a([$.c1,$.R,$.aw],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.N]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.lX,$.i)
t.i(0,$.b3,$.j)
t.i(0,$.eC,$.j)
t.i(0,$.lZ,$.j)
t.i(0,$.bz,$.j)
t.i(0,$.aj,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.dG,$.j)
t.i(0,$.pA,$.j)
t.i(0,$.lS,$.j)
t.i(0,$.ne,$.j)
r="The "+$.n+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.k
r=r+q+" asks the "
p=$.m
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.x
n=[U.c]
t.i(0,new R.aq("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.k
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.m+" named Professor "
p=$.x
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.a7
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.n
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.M("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.T(k,"The "+q+" whited out...",m)],H.a([],n),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
m="Now that the "+$.n+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.k
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.m
t.i(0,new R.a1("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.ae+" buffs. With a deafening "+$.x+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.o(),!1,!1,new Y.eq("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gbk:function(){return this.w}}
G.j5.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Superhero Action Figure",H.a([$.ax,$.aO,$.ak],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Action DVD",H.a([$.ax,$.aO],s),null,!1,"Shogun The Movie")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ghost Busters DVD",H.a([$.ax,$.m8],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Snow Dogs DVD",H.a([$.ax,$.bN,$.bM,$.eQ],s),null,!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Skateboarding Video Game",H.a([$.ax,$.aO],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Movie Poster",H.a([$.Z,$.aO],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Audrey II Plush",H.a([$.da,$.aO,$.ag,$.bd],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Peashooter Toy",H.a([$.da,$.eS,$.aO,$.ag],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shitty Sword",H.a([$.ak,$.Y,$.aO,$.eU,$.cz,$.nz],s),"So. Shitty.",!1,"Perfect Weapon")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("GameBro Magazine",H.a([$.Z,$.aO],s),"5/5 hats.",!1,"Nerd Magazine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("GameGrl Magazine",H.a([$.Z,$.aO],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.b0,$.j)
q.i(0,$.ba,$.j)
q.i(0,$.aD,$.i)
q.i(0,$.b3,$.a9)
q.i(0,$.bL,$.a9)
p=$.k
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.m
o=o+n+" manages to catch a video of it, and it goes viral on "+$.ae+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.x+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.qC
l=[U.c]
q.i(0,new R.W("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.d4,$.j)
s.i(0,$.bJ,$.j)
s.i(0,$.ba,$.j)
s.i(0,$.aD,$.j)
s.i(0,$.bK,$.i)
o=$.k
n="The "+o+" runs towards an explosion in a local "
m=$.m
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.ae
s.i(0,new R.W("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.cc,$.i)
t.i(0,$.b2,$.i)
t.i(0,$.bK,$.j)
r=$.k
q="The "+r+" gets a job at the "+$.ae+" Cinema. A new movie, The Lonely "
o=$.a7
q=q+o+" is coming out soon, and "
n=$.m
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.x+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.W("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
N.j8.prototype={
ab:function(){return!0},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Feather'd Cap",H.a([$.ag,$.R,$.dL],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Crown",H.a([$.ac,$.nq,$.R,$.dL],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Gunpowder",H.a([$.dN,$.R],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
aB:function(){return!0},
K:function(){var t,s,r,q,p,o,n
t=[P.N]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.ba,$.j)
t.i(0,$.aR,$.j)
t.i(0,$.cd,$.w)
r="With the closing of the curtain, the "+$.n+" has released the frogs, and yet they are nowhere to be found. The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q=$.n
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.k
r=r+o+" to get it back to normal. They organize a team of "
n=$.m
t.i(0,new R.a1("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.a7+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y2},
gad:function(){return this.p},
gac:function(){return this.l},
gN:function(){return this.m}}
U.c.prototype={}
U.T.prototype={}
R.j9.prototype={
M:function(a){return H.v(new H.cp(H.lu(this),null))+": "+this.c},
ga4:function(a){return this.c}}
R.W.prototype={}
R.M.prototype={}
R.a1.prototype={}
R.aq.prototype={}
E.ja.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Curtain",H.a([$.ag,$.u,$.ak],s),null,!1,"Show Ender")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cursed Sword",H.a([$.Y,$.eU,$.db,$.u,$.cz,$.b5,$.ak,$.dM,$.aV],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Megaphone",H.a([$.Y,$.aZ,$.ao,$.u,$.ak],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bike Horn",H.a([$.aM,$.Y,$.aZ,$.cf,$.dd,$.u,$.ak],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bacchus Wine",H.a([$.c1,$.cf,$.as,$.u,$.ac,$.ak],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Nightmare Fuel",H.a([$.am,$.u,$.b5,$.c2,$.dN,$.ak],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.N]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.ev,$.i)
q.i(0,$.bg,$.i)
q.i(0,$.bJ,$.i)
q.i(0,$.br,$.j)
q.i(0,$.aJ,$.j)
q.i(0,$.aS,$.j)
q.i(0,$.aK,$.w)
q.i(0,$.bL,$.j)
q.i(0,$.d4,$.i)
q.i(0,$.hx,$.i)
q.i(0,$.dI,$.i)
q.i(0,$.lY,$.i)
q.i(0,$.ew,$.j)
q.i(0,$.d6,$.i)
p=$.k
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.a7
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.n
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.M("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.e1(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.T(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=this.f
h.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.c0,$.i)
s.i(0,$.aJ,$.j)
s.i(0,$.aK,$.i)
s.i(0,$.b1,$.i)
s.i(0,$.b0,$.i)
s.i(0,$.ba,$.j)
s.i(0,$.hw,$.w)
s.i(0,$.bg,$.j)
s.i(0,$.b3,$.i)
s.i(0,$.aD,$.i)
s.i(0,$.bL,$.w)
p=$.x
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
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.T(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ev,$.i)
t.i(0,$.bL,$.i)
t.i(0,$.aK,$.i)
t.i(0,$.b3,$.j)
t.i(0,$.b0,$.i)
r=$.k
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.n+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H},
sa1:function(a){return this.m=a},
sa0:function(a){return this.n=a},
sZ:function(a){return this.q=a},
sY:function(a){return this.u=a},
sJ:function(a){return this.v=a},
sU:function(a){return this.A=a},
sV:function(a){return this.B=a},
sT:function(a){return this.C=a},
sX:function(a){return this.E=a},
sa3:function(a){return this.D=a},
sa2:function(a){return this.G=a},
sL:function(a){return this.H=a}}
L.jb.prototype={
gP:function(){return this.m},
gY:function(){return this.n},
gJ:function(){return this.q},
gN:function(){return this.t},
gU:function(){return this.u},
gT:function(){return this.v},
gL:function(){return this.w}}
L.jd.prototype={
gP:function(){return this.m},
gN:function(){return this.n}}
L.je.prototype={
gP:function(){return this.m},
gN:function(){return this.n}}
L.jf.prototype={
gP:function(){return this.m},
gN:function(){return this.n}}
L.jg.prototype={
gP:function(){return this.m},
gN:function(){return this.n}}
Y.c5.prototype={}
Y.a5.prototype={}
Y.bp.prototype={}
Y.iJ.prototype={}
Y.aI.prototype={
ga4:function(a){return this.c}}
Y.O.prototype={}
Y.eq.prototype={}
Y.at.prototype={}
Y.bk.prototype={}
Y.fY.prototype={}
Y.ap.prototype={}
Y.fb.prototype={}
Y.eG.prototype={}
Y.fc.prototype={}
Z.jk.prototype={
gP:function(){return this.m},
gY:function(){return this.n},
gJ:function(){return this.q},
gN:function(){return this.t},
gU:function(){return this.u},
gV:function(){return this.v},
gT:function(){return this.w}}
N.jl.prototype={
ab:function(){return!0},
S:function(a){return!1},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Domino Mask",H.a([$.ag,$.R,$.dL],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Archery Set",H.a([$.q1,$.R,$.dL,$.nk],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Gristtorrent Server",H.a([$.ac,$.ax,$.ao,$.R,$.al,$.bs],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 1.25},
aj:function(){return 1.25},
ak:function(){return 1},
aB:function(){return!0},
K:function(){var t,s,r,q,p,o,n
t=[P.N]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aK,$.i)
t.i(0,$.aS,$.j)
t.i(0,$.bK,$.j)
r="The "+$.n+" cannot release the frogs since the corrupt Noble "
q=$.m
r=r+q+"s have hoarded them. The "
p=$.k
o=[U.c]
t.i(0,new R.aq("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.k
q="The "+p+" learns of the extreme injustices of the "
r=$.m
q=q+r+"s who rose to power during the tyranny of "
n=$.n
t.i(0,new R.a1("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l}}
Q.jm.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Red Rose",H.a([$.cg,$.aX],s),null,!1,"Seductive Plant")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shipping Grid",H.a([$.cg,$.Z],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Chocolate Bar",H.a([$.cg,$.c1],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Candelabra",H.a([$.cg,$.c2],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Head Cannon",H.a([$.cg,$.dN,$.Y,$.eS],s),"Fuck you for that pun, JR.",!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Her Pitch Passions Novel",H.a([$.ah,$.Z,$.cg],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.b2,$.i)
q.i(0,$.eC,$.j)
q.i(0,$.dC,$.j)
q.i(0,$.eB,$.i)
q.i(0,$.b1,$.j)
q.i(0,$.hv,$.w)
p=$.k
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.m
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.a7+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.W("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.b1,$.j)
s.i(0,$.cc,$.i)
s.i(0,$.eB,$.i)
s.i(0,$.b2,$.j)
s.i(0,$.d5,$.w)
s.i(0,$.hv,$.w)
o=$.m
n="A Romantic "+o+" approaches the "
m=$.k
s.i(0,new R.W("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.hv,$.i)
t.i(0,$.b2,$.i)
t.i(0,$.dC,$.j)
t.i(0,$.lZ,$.i)
t.i(0,$.eB,$.i)
t.i(0,$.b1,$.j)
t.i(0,$.d5,$.w)
r=$.k
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.m
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.x+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.n+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.qy
t.i(0,new R.W("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.q)
n=$.k
r="The "+n+"  and the "
o=$.cI
t.i(0,new R.W("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.cH(),!1,!1,new Y.eG(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.a9)
o=$.k
n="The "+o+"  and the "
r=$.cI
t.i(0,new R.W("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.cH(),!1,!1,new Y.fb(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r=$.k
o="The "+r+"  and the "
n=$.cI
t.i(0,new R.W("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.cH(),!1,!1,new Y.fc(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
V.jn.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Arrow",H.a([$.db,$.am,$.nk],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bow",H.a([$.am,$.aU,$.dO],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Yondu",H.a([$.ak,$.u],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Empathy",H.a([$.u,$.nl,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.af,$.j)
t.i(0,$.bA,$.w)
t.i(0,$.aD,$.j)
t.i(0,$.aR,$.w)
r=$.k
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.n
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.M("Be the Yondu",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.c]),R.qM(),!1,!1,new Y.iJ("Rule","Yondu","Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.ab)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gY:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
R.jo.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Runestone",H.a([$.ci,$.aw,$.u],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Bottle",H.a([$.aW,$.aw],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Rune","Magic","Fairy","Infinite","Predictions"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aR,$.j)
t.i(0,$.af,$.j)
r=$.k
q="The "+r+" is walking around in a village of "+$.m+"s, when a Consort walks up to them. It says that The "+r+" has to learn magic, so they can fight the "
p=$.n
q=q+p+". The "+r+" promises to do their best."
o="The "+r+" is practicing the arcana, they're starting to get pretty good."
n="The "+r+" is able to fight numerous imps with their magic now, they are ready to fight the "+p+"..."
m="The "+r+" storms into the "+p+"'s lair, ready to duel..."
l="The "+p+" has been killed by the "+r+"'s impressive use of magic."
t.i(0,new R.M("Learn Magic",!1,[new U.c(q),new U.c(o),new U.c(n),new U.T(m,"The "+r+"'s magic was not enough to do defeat the "+p+"...",l)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gX:function(){return this.H},
gL:function(){return this.a_}}
T.jq.prototype={
$1:function(a){return!a.gbg()},
$S:function(){return{func:1,args:[T.cn]}}}
T.cn.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Perfectly Generic Object",H.a([],[G.U]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.y(t,0)]))
this.go=t},
S:function(a){return!1},
a9:function(){return this.S(0)},
aB:function(){return!1},
ai:function(){return 1},
ak:function(){return 1},
aj:function(){return 1},
ab:function(){return!1},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.br,$.i)
q.i(0,$.aj,$.w)
q.i(0,$.cd,$.i)
q.i(0,$.aJ,$.j)
q.i(0,$.d3,$.w)
p=$.k
o="The "+p+" learns that all of the local "
n=$.m
m=[U.c]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
n=this.x
n.i(0,new X.t(s,q,null),$.aA)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.i)
s.i(0,$.dG,$.w)
s.i(0,$.cw,$.j)
s.i(0,$.bq,$.i)
s.i(0,$.aS,$.w)
p=$.k
o="The "+p+" learns that all of the local "
l=$.m
s.i(0,new R.a1("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p=$.k
l="The "+p+" learns that all of the local "
o=$.m
s.i(0,new R.a1("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.cI+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.x+"ing in amazement. The factory is saved! ")],H.a([],m),R.cH(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.a9)
n.i(0,new X.t(q,s,null),$.aA)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.af,$.i)
t.i(0,$.aj,$.w)
t.i(0,$.aL,$.j)
r=$.k
q="The "+r+" learns that all of the local "
p=$.m
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.x
t.i(0,new R.W("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.mn(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.w)
l=$.k
p="The "+l+" learns that all of the local "
r=$.m
t.i(0,new R.a1("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
n.i(0,new X.t(s,t,null),$.aA)},
M:function(a){return this.r},
a7:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.d0("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.cZ]),H.a([],[M.cv]))
this.I()
this.K()
t=this.Q
if($.$get$fg().at(t))H.aG("Duplicate class id for "+this.M(0)+": "+t+" is already registered for "+J.aY($.$get$fg().F(0,t))+".")
$.$get$fg().i(0,t,this)},
ga4:function(a){return this.r},
gav:function(a){return this.Q},
gc0:function(){return this.ch},
gbg:function(){return this.cx},
gJ:function(){return this.id},
gad:function(){return this.k1},
gac:function(){return this.k2},
gN:function(){return this.k3},
gL:function(){return this.k4},
gbk:function(){return this.r2}}
E.jr.prototype={
ab:function(){return!0},
S:function(a){return!1},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Sage's Robe",H.a([$.ag,$.R,$.b4,$.al,$.aw,$.ac],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Peer Reviewed Journal",H.a([$.Z,$.R,$.ah,$.al],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Guru Pillow",H.a([$.ag,$.R,$.d9,$.al],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.ey,$.j)
t.i(0,$.aj,$.j)
t.i(0,$.eD,$.i)
t.i(0,$.af,$.w)
t.i(0,$.bb,$.i)
r="The "+$.n+" has blocked access to the books for the duration. The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.n+" is defeated, it is time to begin recovery efforts. The "
r=$.m
q=q+r+"s ask the "
o=$.k
t.i(0,new R.a1("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.x+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.x2},
gad:function(){return this.y1},
gac:function(){return this.y2},
gN:function(){return this.p},
gL:function(){return this.v}}
Y.js.prototype={
gP:function(){return this.m},
gY:function(){return this.n},
gJ:function(){return this.q},
gN:function(){return this.t},
gU:function(){return this.u},
gT:function(){return this.v},
gL:function(){return this.w}}
Y.jt.prototype={
gN:function(){return this.rx}}
K.ju.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Uno Reverse Card",H.a([$.nn,$.u,$.ak],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("JR Body Pillow",H.a([$.d9,$.b4,$.u],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.N]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.ev,$.i)
q.i(0,$.bg,$.i)
q.i(0,$.bJ,$.i)
q.i(0,$.br,$.j)
q.i(0,$.aJ,$.j)
q.i(0,$.aS,$.j)
q.i(0,$.aK,$.w)
q.i(0,$.bL,$.j)
q.i(0,$.d4,$.i)
q.i(0,$.hx,$.i)
q.i(0,$.dI,$.i)
q.i(0,$.lY,$.i)
q.i(0,$.ew,$.j)
q.i(0,$.d6,$.i)
p=$.k
o="The "+p+" is chilling in a "
n=$.m
o=o+n+" village when a bunch of sentient "
m=$.a7
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.n
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.M("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.T(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.e1(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
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
q.i(0,new R.M("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.T(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h=this.f
h.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.c0,$.i)
s.i(0,$.aJ,$.j)
s.i(0,$.aK,$.i)
s.i(0,$.b1,$.i)
s.i(0,$.b0,$.i)
s.i(0,$.ba,$.j)
s.i(0,$.hw,$.w)
s.i(0,$.bg,$.j)
s.i(0,$.b3,$.i)
s.i(0,$.aD,$.i)
s.i(0,$.bL,$.w)
p=$.x
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
s.i(0,new R.M("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.T(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ev,$.i)
t.i(0,$.bL,$.i)
t.i(0,$.aK,$.i)
t.i(0,$.b3,$.j)
t.i(0,$.b0,$.i)
r=$.k
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.m+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.n+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.M("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
h.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gU:function(){return this.w},
gV:function(){return this.A},
gT:function(){return this.B},
gX:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gL:function(){return this.G}}
Y.jv.prototype={
ab:function(){return!1},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Walking Stick",H.a([$.am,$.R,$.ch],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Adorable Girlscout Beret",H.a([$.ag,$.R,$.q8,$.al,$.ac],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Map",H.a([$.Z,$.R,$.al],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Compass",H.a([$.Y,$.R,$.al,$.aw],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!0},
a9:function(){return this.S(0)},
K:function(){var t,s,r,q,p
t=[P.N]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.bz,$.i)
t.i(0,$.aL,$.i)
t.i(0,$.aj,$.i)
t.i(0,$.aD,$.w)
t.i(0,$.af,$.w)
r="Now that the "+$.n+" has been defeated, the planet has really opened up. The "
q=$.k
p=[U.c]
t.i(0,new R.a1("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.m+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.k
t.i(0,new R.aq("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.m+" "+$.x+"s in time to stop them.   ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l}}
L.jw.prototype={
ab:function(){return!1},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Scroll",H.a([$.Z,$.R,$.al],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ink Pot",H.a([$.aW,$.R,$.bs,$.al],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Blank Book",H.a([$.Z,$.R,$.ah,$.al,$.bs,$.ac],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!0},
a9:function(){return this.S(0)},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.lT,$.i)
t.i(0,$.aj,$.i)
t.i(0,$.bb,$.i)
t.i(0,$.af,$.j)
t.i(0,$.aR,$.j)
r="The "+$.n+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.n+" has been taken care of, the "
r=$.k
q=q+r+" discovers a large library of "
o=$.m
t.i(0,new R.a1("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gL:function(){return this.w}}
S.jx.prototype={
ab:function(){return!1},
S:function(a){return!1},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cueball",H.a([$.hW,$.i0,$.R,$.aU,$.bd,$.ac],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Crystal Ball",H.a([$.hW,$.q3,$.R,$.bB],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Binoculars",H.a([$.aW,$.R,$.Y],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Blindfold",H.a([$.q0,$.R,$.b4],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 0.67},
aj:function(){return 0.67},
ak:function(){return 1},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.py,$.i)
t.i(0,$.ex,$.i)
t.i(0,$.lV,$.i)
t.i(0,$.b3,$.j)
r="Now that the "+$.n+" has been defeated, the land is really starting to open up. The "
q=$.k
r=r+q+" finds a tunnel filled with Blind "
p=$.m
o=[U.c]
t.i(0,new R.a1("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
q="The "+$.n+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.k
t.i(0,new R.aq("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.m+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.k
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.m
t.i(0,new R.a1("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
r="A group of underlings are still making trouble, even after the defeat of the "+$.n+". The "
p=$.k
r=r+p+" begins planting rumors of a huge "
q=$.a7
t.i(0,new R.a1("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.x2},
gad:function(){return this.y1},
gac:function(){return this.y2},
gN:function(){return this.p},
gL:function(){return this.v}}
L.jA.prototype={
gP:function(){return this.m}}
Y.jC.prototype={
ab:function(){return!1},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Meddler's Guide",H.a([$.ah,$.R,$.Z,$.cf,$.ac,$.bi],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("First Aid Kit",H.a([$.aW,$.R,$.bi],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=$.R
r=A.h("Cloud in a Bottle",H.a([r,r,$.bh],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Wings",H.a([$.aw,$.R,$.bB,$.aX,$.Z],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!0},
a9:function(){return this.S(0)},
ai:function(){return 0.5},
aj:function(){return 1.5},
ak:function(){return 1},
aB:function(){return!1},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aj,$.j)
t.i(0,$.bz,$.i)
t.i(0,$.b3,$.j)
t.i(0,$.af,$.j)
t.i(0,$.aL,$.i)
r="The defeat of the "+$.n+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.n+" has been taken care of, the "
r=$.k
q=q+r+" finds a long line of "
o=$.m
t.i(0,new R.a1("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gN:function(){return this.y2},
gL:function(){return this.u}}
O.jD.prototype={
gbk:function(){return this.m},
gP:function(){return this.n}}
N.jE.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Fiduspawn Plush",H.a([$.eQ,$.ag,$.b4],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Teddy Bear",H.a([$.eQ,$.ag,$.b4],s),null,!1,"Cuddle Bear")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dice",H.a([$.q5,$.ax],s),null,!1,"D113")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Pigeon",H.a([$.hX,$.bd,$.cA,$.cy,$.dM,$.qj],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cat Ears",H.a([$.ag,$.b4,$.eQ],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Religious Text",H.a([$.ah,$.Z],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Psychology Book",H.a([$.ah,$.Z],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Therapy Couch",H.a([$.b4,$.ag],s),null,!1,"Giant Problem Absorbing Couch")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("FLARP Manual",H.a([$.ah,$.Z,$.al],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.N]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bA,$.w)
q.i(0,$.af,$.j)
q.i(0,$.aR,$.i)
q.i(0,$.bb,$.j)
p=$.k
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.m
m=[U.c]
q.i(0,new R.W("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.ae+" or "+$.a7+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.x+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bA,$.w)
s.i(0,$.af,$.i)
s.i(0,$.aR,$.i)
s.i(0,$.na,$.i)
s.i(0,$.b1,$.i)
s.i(0,$.ng,$.i)
s.i(0,$.bb,$.j)
o=$.k
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.x
n=n+l+"ing "
k=$.m
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.ae
s.i(0,new R.W("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bq,$.w)
t.i(0,$.cc,$.i)
t.i(0,$.aL,$.i)
t.i(0,$.bK,$.i)
t.i(0,$.dF,$.i)
r=$.k
q="The "+r+" wanders into an entire crowd of "
o=$.m
t.i(0,new R.W("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.x+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
N.jG.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Frog Statue",H.a([$.aM,$.ci,$.u],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Frog Costume",H.a([$.ag,$.u],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nuclear Reactor",H.a([$.eR,$.al,$.ao,$.u],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Telescope",H.a([$.Y,$.aW,$.al,$.u],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Green Sun Poster",H.a([$.Z,$.u,$.m9,$.ac],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m
t=$.k
s=[P.N]
r=H.a(["Wherever the "+t+" goes, they find a "+$.m+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.x+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.n+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
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
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.b3,$.w)
t.i(0,$.nc,$.i)
s=[U.c]
t.i(0,new R.M("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.i(0,new R.M("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.i(0,new R.M("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.i(0,new R.M("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.i(0,new R.M("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
t.i(0,new R.M("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.k
t.i(0,new R.aq("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.m+"s 'help' by "+$.x+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.o(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
this.f.i(0,new X.t(o,t,null),$.rA)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
U.jK.prototype={
gP:function(){return this.m}}
A.iD.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Puzzle Box",H.a([$.am,$.u,$.aw],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Tesla Coil",H.a([$.ao,$.u,$.Y],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Coin",H.a([$.Y,$.u],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Electronic Door",H.a([$.Y,$.u,$.ao,$.al],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Janus Bust",H.a([$.aM,$.m4,$.ci,$.as,$.u,$.ac,$.ao],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.u,$.au,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gN:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gU:function(){return this.A},
ga3:function(){return this.B},
ga2:function(){return this.C},
gV:function(){return this.E},
gT:function(){return this.D},
gX:function(){return this.G},
gL:function(){return this.H}}
A.jH.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Frog Statue",H.a([$.aM,$.ci,$.u],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Frog Costume",H.a([$.ag,$.u],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nuclear Reactor",H.a([$.eR,$.al,$.ao,$.u],s),null,!1,"A Representation of My Hatred for Everything")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Telescope",H.a([$.Y,$.aW,$.al,$.u],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Green Sun Poster",H.a([$.Z,$.u,$.m9,$.ac],s),"Huh.",!1,"Sauce Sun Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.u,$.au,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gN:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gV:function(){return this.A},
gT:function(){return this.B},
gU:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
A.j6.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Curtain",H.a([$.ag,$.u,$.ak],s),null,!1,"Show Ender")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Cursed Sword",H.a([$.Y,$.eU,$.db,$.u,$.cz,$.b5,$.ak,$.dM,$.aV],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Megaphone",H.a([$.Y,$.aZ,$.ao,$.u,$.ak],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bike Horn",H.a([$.aM,$.Y,$.aZ,$.cf,$.dd,$.u,$.ak],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bacchus Wine",H.a([$.c1,$.cf,$.as,$.u,$.ac,$.ak],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nightmare Fuel",H.a([$.am,$.u,$.b5,$.c2,$.dN,$.ak],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.u,$.au,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
ga3:function(){return this.B},
ga2:function(){return this.C},
gV:function(){return this.E},
gT:function(){return this.D},
gL:function(){return this.G},
gX:function(){return this.H}}
A.jF.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Doll",H.a([$.i0,$.aX,$.bd,$.u],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Puppet",H.a([$.am,$.bd,$.u,$.ac,$.b5],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Mirror",H.a([$.mc,$.u],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shipping Grid",H.a([$.Z,$.u,$.cg],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shades",H.a([$.aO,$.aW,$.u],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.u,$.au,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
ga3:function(){return this.B},
ga2:function(){return this.C},
gV:function(){return this.E},
gT:function(){return this.D},
gX:function(){return this.G},
gL:function(){return this.H}}
A.k8.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Grandfather Clock",H.a([$.am,$.as,$.dP,$.u],s),null,!1,"Ticking Tower of Time")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Drum",H.a([$.nv,$.u,$.aP],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dead Doppelganger",H.a([$.aM,$.cA,$.u,$.cy,$.b5,$.aV],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Music Box",H.a([$.Y,$.u,$.aP,$.as],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Turn Tables",H.a([$.Y,$.u,$.aP,$.ac,$.aO],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Metronome",H.a([$.Y,$.u,$.aP],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.u,$.au,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
gX:function(){return this.D},
ga3:function(){return this.G},
ga2:function(){return this.H},
gL:function(){return this.a_}}
A.jh.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("FAQ",H.a([$.ao,$.u,$.al,$.cB],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flashlight",H.a([$.ax,$.u,$.bB,$.ao,$.cB],s),null,!1,"Tube of Localised Sun")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Octet",H.a([$.u,$.bB,$.cB,$.ac,$.m7],s),null,!1,"D13")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Horseshoe",H.a([$.nt,$.u,$.aU],s),null,!1,"Horse Sneaker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Rabbits Foot",H.a([$.nx,$.u],s),null,!1,"Rabbit Remains")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("4 Leaf Clover",H.a([$.da,$.u,$.bB,$.cB],s),null,!1,"Plant of Luck +4")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("8-Ball",H.a([$.aW,$.u,$.bd],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("A Stone",H.a([$.u,$.au,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gX:function(){return this.G},
gL:function(){return this.H}}
A.hE.prototype={
I:function(){var t,s
t=Q.p(null,null,A.V)
s=A.h("Infinity Gauntlet",H.a([$.u,$.Y,$.m2],[G.U]),"...",!1,"THANOS CAR THANOS CAR")
C.a.j(t.b,new Q.f(s,t.k(s,1),[H.y(t,0)]))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Stone","Thanos","Mind","Space","Power","Soul","Time","Reality"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aR,$.j)
t.i(0,$.aD,$.w)
t.i(0,$.bg,$.w)
r=$.k
q="The "+r+" is wandering their land, when an imp goes up to them. Expecting a fight, the "+r+' raises their weapon. Surprisingly, the imp starts talking, and its eyes go black, it says "You must collect the Stones, then you can prove your worth to usssss..." the imp\'s eyes go back to normal, and then it dies. The '+r+" notices it droped a small glowing crystal... MINDSTONE COLLECTED, 1/6."
p="The "+r+' is going through a dungeon. Once they arrive in the final room, a miniboss appears. It bellows "I am the keeper of the Space Stone, fight me if you dare!" It then dissapears in a cloud of smoke. The '+r+" tries to look at some of the many mirrors in the room, to try to find the monster, but to no avail. The boss then flings itself at them from a random angle, and then the "+r+" was able to kill it, and it dropped a small blue gemstone... SPACESTONE COLLECTED, 2/6. Some time later, The "+r+' is going through another dungeon, when it encounters another miniboss, similar to the previous one, it bellows "FIGHT ME, TO COLLECT THE POWER STONE!!" It takes many hours, but the '+r+" comes out on top... POWERSTONE COLLECTED, 3/6."
o="The "+r+" is used to these shenanings by now, when they see a giant crystalline mini boss, they knock it down and take the stone... SOULSTONE COLLECTED, 4/6. When the "+r+" saw another miniboss, but encased in impenetrable gems, they threw it into an over and waited to get the stone... TIMESTONE COLLECTED, 5/6. When the "+r+" encounters yet another one, they try to attack it. But it dissapears, and a similar looking boss drops on their back, it goes on like that for awhile, but the "+r+" eventually defeats it... REALITYSTONE COLLECTED, 6/6, OBJECTIVE COMPLETE."
n="The "+r+" learns it's time to visit their denizen, but when they get there they only see "+$.n+" being [REDACTED]."
m="Paradox Space has declared the "+r+" is worthy, and lets them live."
t.i(0,new R.M("Collect The Stones",!1,[new U.c(q),new U.c(p),new U.c(o),new U.T(n,"Paradox Space decrees that the "+r+" is not worthy.",m)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
ga3:function(){return this.E},
ga2:function(){return this.D},
gL:function(){return this.G},
gX:function(){return this.H}}
R.jU.prototype={
ab:function(){return!0},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Meddler's Guide",H.a([$.ah,$.R,$.Z,$.cf,$.ac,$.bi],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("First Aid Kit",H.a([$.aW,$.R,$.bi],s),"Heals here.",!1,"Anti-Pain Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=$.R
r=A.h("Cloud in a Bottle",H.a([r,r,$.bh],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Fairy Wings",H.a([$.aw,$.R,$.bB,$.aX,$.Z],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!1},
a9:function(){return this.S(0)},
ai:function(){return 1},
aj:function(){return 1},
ak:function(){return 1.5},
aB:function(){return!0},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aR,$.i)
t.i(0,$.af,$.i)
t.i(0,$.bz,$.j)
t.i(0,$.eD,$.j)
t.i(0,$.pw,$.j)
t.i(0,$.d3,$.j)
t.i(0,$.lS,$.j)
t.i(0,$.pz,$.j)
r=$.k
q="The "+r+" decides to take a break after defeating "+$.n+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.m
o=[U.c]
t.i(0,new R.a1("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.x+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.mp(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
r=$.m
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.k
t.i(0,new R.a1("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
r=$.m
q="The "+r+"s are so stressed after all that shit with the "+$.n+". They are yelling and "+$.x+" at each other over the slightest of insults. The "
p=$.k
t.i(0,new R.a1("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p="The "+$.n+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.k
p=p+r+" purifies the pools "
q=$.m
t.i(0,new R.aq("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
r="The defeat of the "+$.n+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.m
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.k
t.i(0,new R.a1("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.ae+". Huh. Okay then.")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.x2},
gad:function(){return this.y1},
gac:function(){return this.y2},
gN:function(){return this.p},
gL:function(){return this.v}}
L.jY.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Lightning",H.a([$.aZ,$.au,$.u],s),null,!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ice",H.a([$.bM,$.qd,$.dO],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Taserface",H.a([$.ak,$.aZ],s),null,!1,null)
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Taser",H.a([$.aZ,$.u,$.ak],s),null,!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.d1,$.w)
t.i(0,$.aD,$.i)
t.i(0,$.ev,$.j)
t.i(0,$.bg,$.j)
r=$.k
q="The "+r+" is walking around on their land, when a "
p=$.m
q=q+p+" walks up to them, and tells them about "
o=$.n
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.x+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.M("Rebel Against Your Land",!1,[new U.c(q),new U.c(p),new U.c(n),new U.T(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.c]),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
this.f.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gJ:function(){return this.u},
gN:function(){return this.v},
gY:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
D.k_.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Robot",H.a([$.ao,$.Y,$.bd,$.al],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Circuit Board",H.a([$.ao,$.Y],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Datastructures for Assholes",H.a([$.ao,$.Z],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("~ATH - A Handbook for the Imminently Deceased ",H.a([$.ao,$.Z,$.aV,$.ah],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("3-D Printer",H.a([$.ax,$.ao,$.Y],s),null,!1,"3-D Shitpost Maker")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Virus on a USB Stick",H.a([$.qb,$.Y],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Wrench",H.a([$.qq,$.Y,$.aU],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Computer",H.a([$.ao,$.Y],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.eA,$.j)
q.i(0,$.dD,$.i)
q.i(0,$.dH,$.i)
q.i(0,$.aS,$.w)
p=$.k
o="The "+p+" learns from their "
n=$.m
o=o+n+"s about the great "
m=$.ae
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.n+" destroyed it. "
o="The "+p+" searches for the "
l=$.a7
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.qH
p=[U.c]
q.i(0,new R.W("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.o(),!1,!1,new Y.bk("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.q)
l=$.k
m="The "+l+" is approached by a "
o=$.m
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.x
q.i(0,new R.W("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.n+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.a7+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.di(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
m=this.r
m.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.dH,$.i)
s.i(0,$.dG,$.w)
s.i(0,$.cw,$.j)
s.i(0,$.bq,$.i)
s.i(0,$.aS,$.w)
o=$.k
n="The "+o+" learns that all of the local "
l=$.m
s.i(0,new R.W("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.x+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
o=$.k
l="The "+o+" finds two groups of "
n=$.m
l=l+n+"s screaming and "
k=$.x
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.a7
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.W("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.cl(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.eA,$.w)
t.i(0,$.dD,$.i)
t.i(0,$.dH,$.i)
t.i(0,$.aS,$.w)
r=$.k
q="The "+r+" learns from a mysterious "+$.m+" in a black trenchcoat about a great "
o=$.ae
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.n
t.i(0,new R.W("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
V.k0.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Lighter",H.a([$.Y,$.c2],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Siberia Poster",H.a([$.Z,$.bM],s),null,!1,"Poster of the Shoguns Birthplace")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Nuclear Winter Poster",H.a([$.Z,$.bM,$.eR],s),null,!1,"Shoguns Dream as a Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Doomsday Device",H.a([$.Y,$.aV,$.eR,$.au,$.dM],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Juggalo Poster",H.a([$.Z,$.qe],s),null,!1,"False God Poster")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Fancy Watch",H.a([$.Y,$.dP,$.au],s),null,!1,"Shoguns Watch")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Magnificent Crown",H.a([$.Y,$.dP,$.au],s),null,!1,"The Shoguns Crown")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bitching Clothes",H.a([$.ag,$.dL,$.au],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Ceramic Pork Hollow",H.a([$.m5,$.dP],s),"...",!1,"Shoguns Old Porkhollow")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Shit Ton of Guns",H.a([$.Y,$.qk,$.eS,$.au],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sniper Rifle",H.a([$.Y,$.qm,$.eS,$.au],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("AK-47",H.a([$.Y,$.qg,$.eS,$.au],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("IED",H.a([$.nr,$.cz,$.Y,$.dN,$.au],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Idiots Guide To Being An Asshole",H.a([$.Z,$.cf,$.ah],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Bike Horn",H.a([$.dd,$.Y,$.aZ,$.cf],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Matches",H.a([$.am,$.c2],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.ba,$.j)
q.i(0,$.cc,$.i)
q.i(0,$.cx,$.i)
q.i(0,$.dI,$.i)
q.i(0,$.lX,$.i)
q.i(0,$.bK,$.j)
p=$.k
o=[U.c]
q.i(0,new R.W("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
p=this.r
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.ba,$.j)
s.i(0,$.cc,$.i)
s.i(0,$.b2,$.i)
s.i(0,$.bK,$.j)
n=$.k
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.m
s.i(0,new R.W("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.a7+" underling. Tremble at the fearsome "+$.ae+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.br,$.i)
q.i(0,$.aj,$.w)
q.i(0,$.cd,$.i)
q.i(0,$.aJ,$.j)
q.i(0,$.d3,$.w)
q.i(0,$.bg,$.w)
n=$.k
m="The "+n+" learns that all of the local "
l=$.m
q.i(0,new R.W("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.x+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aK,$.i)
t.i(0,$.bg,$.w)
t.i(0,$.d4,$.i)
t.i(0,$.hx,$.i)
t.i(0,$.aS,$.j)
t.i(0,$.d6,$.j)
s=$.k
r="The "+s+" finds a crowd of "
n=$.x
r=r+n+"ing "
m=$.m
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.ae+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.W("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.q)
p.i(0,new X.t(q,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
X.t.prototype={
M:function(a){return"Theme: "+H.v(this.a)}}
U.k3.prototype={
ab:function(){return!1},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Lockpick",H.a([$.Y,$.R,$.bs,$.db,$.ac],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Sneaking Suit",H.a([$.ag,$.R,$.bs],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Dagger",H.a([$.Y,$.R,$.db,$.cz,$.q4],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 1.5},
aj:function(){return 0.8},
ak:function(){return 1},
aB:function(){return!0},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aK,$.i)
t.i(0,$.bJ,$.j)
t.i(0,$.aD,$.j)
t.i(0,$.bq,$.j)
r="The "+$.n+" cannot release the frogs since the corrupt "
q=$.m
r=r+q+" Cops have confiscated them. The "
p=$.k
o=[U.c]
t.i(0,new R.aq("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
p=$.k
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.n+"'s layer and slated to be returned to the "
r=$.m
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.x+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a1("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.m
p="A weeping "+r+" approaches the "
n=$.k
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.n
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.ae+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.x+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a1("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.n
n="Now that the "+r+" has been defeated, the "
p=$.m
n=n+p+"s have recovered their precious "
q=$.a7
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.k
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.x
l=n+l+"worth, the disaffected Heir to the "+$.ae+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a1("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l}}
N.k4.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Grandfather Clock",H.a([$.am,$.as,$.dP,$.u],s),null,!1,"Ticking Tower of Time")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Drum",H.a([$.nv,$.u,$.aP],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Dead Doppelganger",H.a([$.aM,$.cA,$.u,$.cy,$.b5,$.aV],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Music Box",H.a([$.Y,$.u,$.aP,$.as],s),null,!1,"Cube of Noise")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Turn Tables",H.a([$.Y,$.u,$.aP,$.ac,$.aO],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Metronome",H.a([$.Y,$.u,$.aP],s),null,!1,"Never Ending Ticking Device")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.N]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.pB,$.a9)
q.i(0,$.aS,$.j)
q.i(0,$.bq,$.j)
q.i(0,$.cw,$.i)
p=$.n
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.k
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.l
l=[U.c]
q.i(0,new R.a1("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.c4(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.i)
n=$.k
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.m+"s, they set out to fix the "
m=$.a7
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.n
q.i(0,new R.M("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.T("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j=this.f
j.i(0,new X.t(s,q,null),$.a8)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.ew,$.i)
s.i(0,$.cx,$.w)
s.i(0,$.aS,$.i)
p=$.k
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.m+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.n
s.i(0,new R.M("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.T(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.aL,$.i)
t.i(0,$.af,$.j)
t.i(0,$.aR,$.i)
t.i(0,$.bz,$.i)
r=$.n
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.a7
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.k
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.m+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.M("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.T(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.e1(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
k=$.n
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.a7
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.k
t.i(0,new R.M("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.m+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.T("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.c4(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.i)
r="With the defeat of the "+$.n+", "
k=$.k
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.m
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.ae
t.i(0,new R.a1("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.c4(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.i)
p=$.m
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.k
t.i(0,new R.M("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.x+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.T("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.n+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
j.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gau:function(){return this.t},
gP:function(){return this.u},
gY:function(){return this.v},
gJ:function(){return this.w},
gN:function(){return this.A},
gU:function(){return this.B},
gV:function(){return this.C},
gT:function(){return this.E},
gX:function(){return this.D},
ga3:function(){return this.G},
ga2:function(){return this.H},
gL:function(){return this.a_}}
G.U.prototype={}
G.ep.prototype={$isaH:1,
$asaH:function(){return[G.ep]}}
G.i3.prototype={
$1:function(a){return!1},
$S:function(){return{func:1,args:[G.U]}}}
Q.ke.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cardboard Box",H.a([$.Z,$.u,$.bs],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Hole Punch",H.a([$.Y,$.u,$.bs],s),null,!1,"Paper Impaler")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Smoke Bombs",H.a([$.dN,$.u,$.bs,$.nr],s),null,!1,"Vape Grenades")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Tribal Mask",H.a([$.cy,$.u,$.bs,$.b5,$.i2],s),null,!1,"Ancient Face")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Opera Mask",H.a([$.ax,$.u,$.bs,$.as],s),null,!1,"Phantom of the Opera Mask")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Black Hole in a Bottle.",H.a([$.u,$.ac,$.m9,$.bs,$.aW],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.l=t},
K:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.N]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bA,$.i)
q.i(0,$.hy,$.i)
q.i(0,$.ez,$.i)
q.i(0,$.ex,$.i)
p=$.n
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.k
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.m
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.l
l=[U.c]
q.i(0,new R.a1("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=$.k
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.n
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.M("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.T(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
i=this.f
i.i(0,new X.t(s,q,null),$.a8)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bA,$.j)
s.i(0,$.hy,$.j)
s.i(0,$.ez,$.j)
s.i(0,$.aK,$.i)
p=$.k
o="Even with the victory of the "+p+" over the villainous "
n=$.n
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.m+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.a7
s.i(0,new R.a1("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.di(),!1,!1,new Y.aI("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.i)
m=$.k
s.i(0,new R.M("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.x+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.T("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.n+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.m+"s.")],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
i.i(0,new X.t(q,s,null),$.a8)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.bA,$.i)
t.i(0,$.hy,$.i)
t.i(0,$.ez,$.i)
r=$.k
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.n+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.M("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.T(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
i.i(0,new X.t(s,t,null),$.a8)},
ga1:function(){return this.m},
ga0:function(){return this.n},
gZ:function(){return this.q},
gP:function(){return this.t},
gY:function(){return this.u},
gJ:function(){return this.v},
gN:function(){return this.w},
gU:function(){return this.A},
gV:function(){return this.B},
gT:function(){return this.C},
gX:function(){return this.E},
ga3:function(){return this.D},
ga2:function(){return this.G},
gL:function(){return this.H}}
E.kf.prototype={
ab:function(){return!0},
S:function(a){return!0},
a9:function(){return this.S(0)},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Yardstick",H.a([$.ch,$.R,$.hZ,$.ac],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("SBURBSim Hacking Guide",H.a([$.ah,$.R,$.eT,$.Z],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Body Pillow of JR",H.a([$.ag,$.R,$.d9,$.ma,$.b4],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Nanobots",H.a([$.ny,$.R,$.m1],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
ai:function(){return 0.5},
aj:function(){return 0.5},
ak:function(){return 0.5},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.b3,$.i)
t.i(0,$.bL,$.i)
t.i(0,$.d2,$.i)
t.i(0,$.bz,$.i)
t.i(0,$.dE,$.i)
t.i(0,$.d1,$.i)
t.i(0,$.ez,$.j)
r=$.k
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.m
o=[U.c]
t.i(0,new R.W("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.mp(),!1,!1,new Y.c5("Rewards/no_reward.png",null),1,null,null),$.q)
r=$.n
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.k
n=q+" tries to manually separate the turtles by catching them with a net and "+$.aC+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.x
t.i(0,new R.M("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.T(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.nJ(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.q)
q=$.k
t.i(0,new R.W("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.o(),!1,!1,new Y.c5("Rewards/no_reward.png",null),1,null,null),$.q)
q="A wizened "+$.m+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.k
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.n
t.i(0,new R.M("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.k
t.i(0,new R.M("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.n+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.o(),!1,!1,new Y.O("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.a9)
m="A wizened "+$.m+" tells the "
r=$.k
t.i(0,new R.a1("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.w)
r="A "+$.m+" that is also a SHOGUN minion tells the "
m=$.k
t.i(0,new R.a1("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.nK(),!1,!1,new Y.aI("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
m=$.k
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a1("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.w)
n=$.n
m="The "+n+" explains um. What? Where did the "
q=$.k
t.i(0,new R.aq("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.m+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
this.x.i(0,new X.t(s,t,null),$.a8)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gL:function(){return this.w}}
M.kj.prototype={
ab:function(){return!1},
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Cauldron",H.a([$.qf,$.R,$.aw],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Flying Broom",H.a([$.m3,$.ch,$.R,$.am,$.aw],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Warped Mirror",H.a([$.mc,$.R,$.aw,$.bs,$.ac],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!0},
a9:function(){return this.S(0)},
aB:function(){return!0},
ai:function(){return 2},
ak:function(){return 1.5},
aj:function(){return 1},
K:function(){var t,s,r,q,p,o,n,m
t=[P.N]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aJ,$.j)
t.i(0,$.eC,$.j)
t.i(0,$.br,$.j)
t.i(0,$.bq,$.j)
t.i(0,$.b0,$.j)
t.i(0,$.nc,$.j)
r=$.n
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.m
q=q+p+" consorts. It's up to the "
o=$.k
n=[U.c]
t.i(0,new R.aq("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
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
t.i(0,new R.a1("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.q)
q="A Mysterious "+$.m+" approaches the "
p=$.k
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.ae
q=q+r+" was discovered amongst the "+$.n+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a1("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.q)
r=$.m
p="A young "+r+" approaches the "
m=$.k
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.ae
t.i(0,new R.a1("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.a7+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.x+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.y1},
gad:function(){return this.y2},
gac:function(){return this.p},
gN:function(){return this.l},
gL:function(){return this.w}}
M.kk.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Buidlers Guide",H.a([$.ah,$.R,$.Z,$.ac,$.bi],s),"",!1,null)
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Makers Kit",H.a([$.au,$.R,$.bi],s),"",!1,null)
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.go=t},
S:function(a){return!1},
a9:function(){return this.S(0)},
ai:function(){return 0.5},
aj:function(){return 1.5},
ak:function(){return 1},
K:function(){var t,s,r,q,p,o
t=[P.N]
s=H.a(["Wrights","Building","Creation","Extension"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,[N.X,P.Q])
t.i(0,$.aj,$.j)
t.i(0,$.bz,$.i)
t.i(0,$.b3,$.j)
t.i(0,$.af,$.j)
t.i(0,$.aL,$.i)
r="The defeat of the "+$.n+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.k
p=[U.c]
t.i(0,new R.aq("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.aB(),!1,!1,new Y.ap("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.a9)
q="Now that the "+$.n+" has been taken care of, the "
r=$.k
q=q+r+" finds a long line of "
o=$.m
t.i(0,new R.a1("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.o(),!1,!1,new Y.a5("Rewards/no_reward.png",null),1,null,null),$.q)
this.x.i(0,new X.t(s,t,null),$.aA)},
gJ:function(){return this.x2},
gN:function(){return this.y1},
gL:function(){return this.t}}
F.kl.prototype={
I:function(){var t,s,r,q
t=Q.p(null,null,A.V)
s=[G.U]
r=A.h("Make a World Book",H.a([$.Z,$.as,$.ah],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.y(t,0)]
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Quill Pen",H.a([$.b4,$.ag,$.nw],s),null,!1,"Dead Bird Scribing Tool")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Book On Writing",H.a([$.ah,$.Z,$.al],s),null,!1,"How to do words for unsmarts")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("FLARP Manual",H.a([$.ah,$.Z,$.al],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Script",H.a([$.ah,$.Z],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Fancy Pen",H.a([$.Y,$.al,$.nw,$.as],s),null,!1,"Ink Bleeding Plastic Finger")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
r=A.h("Spiral Bound Notebook",H.a([$.ah,$.Z,$.Y],s),null,!1,"Spinney Spine Scribing Station")
C.a.j(t.b,new Q.f(r,t.k(r,1),q))
s=A.h("Half Written Novel",H.a([$.ah,$.Z],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.a.j(t.b,new Q.f(s,t.k(s,1),q))
this.y=t},
K:function(){var t,s,r,q,p,o,n,m,l
t=[P.N]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.X,P.Q]
q=new H.l(0,null,null,null,null,null,0,r)
q.i(0,$.bA,$.i)
q.i(0,$.bb,$.i)
q.i(0,$.aj,$.j)
q.i(0,$.af,$.j)
q.i(0,$.ey,$.j)
p=$.k
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.m+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.W("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.o(),!1,!1,new Y.at("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.q)
m=this.r
m.i(0,new X.t(s,q,null),$.ab)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.l(0,null,null,null,null,null,0,r)
s.i(0,$.bK,$.j)
s.i(0,$.ba,$.j)
s.i(0,$.b2,$.j)
s.i(0,$.aj,$.j)
p=$.m
o="An Excited "+p+" rushes up to the "
n=$.k
s.i(0,new R.W("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.x+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(q,s,null),$.ab)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.l(0,null,null,null,null,null,0,r)
t.i(0,$.ba,$.j)
t.i(0,$.cc,$.i)
t.i(0,$.b2,$.i)
t.i(0,$.bK,$.j)
t.i(0,$.d2,$.i)
r=$.k
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.m
t.i(0,new R.W("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.o(),!1,!1,new Y.bp("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.q)
m.i(0,new X.t(s,t,null),$.ab)},
gL:function(){return this.cx},
gam:function(){return this.cy},
gan:function(){return this.db},
gJ:function(){return this.dx},
gao:function(){return this.dy}}
A.dz.prototype={}
A.cs.prototype={
M:function(a){return"rgb("+H.v(this.b)+", "+H.v(this.c)+", "+H.v(this.d)+", "+H.v(this.a)+")"},
d1:function(a){var t,s,r,q
if(a){t=this.b
if(typeof t!=="number")return t.aY()
s=this.c
if(typeof s!=="number")return s.aY()
r=this.d
if(typeof r!=="number")return r.aY()
q=this.a
if(typeof q!=="number")return H.dr(q)
return(t<<24|s<<16|r<<8|q)>>>0}t=this.b
if(typeof t!=="number")return t.aY()
s=this.c
if(typeof s!=="number")return s.aY()
r=this.d
if(typeof r!=="number")return H.dr(r)
return(t<<16|s<<8|r)>>>0},
f_:function(a,b){var t=C.b.eZ(this.d1(!1),16)
return"#"+C.e.eK(t,6,"0").toUpperCase()},
bA:function(){return this.f_(!1,!1)},
a6:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.cs){t=this.b
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
gag:function(a){return this.d1(!0)},
aG:function(a,b){var t,s,r,q
if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.aP()
s=this.c
if(typeof s!=="number")return s.aP()
r=this.d
if(typeof r!=="number")return r.aP()
q=this.a
if(typeof q!=="number")return q.aP()
return A.mX(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.aG()
s=this.c
if(typeof s!=="number")return s.aG()
r=this.d
if(typeof r!=="number")return r.aG()
return A.eo(t+b,s+b,r+b,this.a)}throw H.S("Cannot add ["+H.v(J.mO(b))+" "+H.v(b)+"] to a Colour. Only Colour, double and int are valid.")},
aH:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.aP()
s=this.c
if(typeof s!=="number")return s.aP()
r=this.d
if(typeof r!=="number")return r.aP()
q=this.a
if(typeof q!=="number")return q.aP()
return A.mX(t/255*b,s/255*b,r/255*b,q/255)},
F:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.S("Colour index out of range: "+H.v(b))},
i:function(a,b,c){var t,s
t=J.ej(b)
if(t.aX(b,0)||t.aW(b,3))throw H.S("Colour index out of range: "+H.v(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.a6(b,0)){this.b=C.b.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.a6(b,1)){this.c=C.b.ae(c,0,255)
this.e=!0
this.y=!0}else if(t.a6(b,2)){this.d=C.b.ae(c,0,255)
this.e=!0
this.y=!0}else this.a=C.b.ae(c,0,255)
else if(t.a6(b,0)){this.b=C.b.ae(J.fH(J.mL(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.a6(b,1)){this.c=C.b.ae(J.fH(J.mL(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.ls(c)
if(t.a6(b,2)){this.d=C.b.ae(J.fH(s.aH(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.b.ae(J.fH(s.aH(c,255)),0,255)}},
dt:function(a,b,c,d){this.b=C.d.ae(C.d.ae(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ae(C.d.ae(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ae(C.d.ae(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ae(J.oq(d,0,255),0,255)}}
A.lq.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.N]}}}
A.j1.prototype={
F:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.at(b)?t.F(0,b):$.$get$ml()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.at(b)?t.F(0,b):$.$get$ml()}throw H.S(P.fM(b,"'name' should be a String name or int id only",null))},
gaa:function(a){var t=this.a
t=t.gaU(t)
return new H.f1(null,J.bx(t.a),t.b,[H.y(t,0),H.y(t,1)])},
h:function(a,b,c,d){var t,s
t=this.a
if(t.at(b))this.aq(0,b)
s=this.e1()
if(typeof s!=="number")return s.f3()
if(s>=256)throw H.S(P.fM(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
aq:function(a,b){var t,s,r
t=this.a
if(!t.at(b))return
s=this.c
r=s.F(0,b)
t.aq(0,b)
this.b.aq(0,r)
s.aq(0,b)
this.d.aq(0,r)},
e1:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.at(s))return s;++s}},
ek:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
for(r=this.b,q=new P.fv(r,r.bN(),0,null,[H.y(r,0)]),p=this.d;q.W();){o=q.d
n=p.F(0,o)
m=r.F(0,o)
l=t.createElement("div")
k=t.createElement("div")
k.title=m.bA().toUpperCase()
j=k.style
j.position="relative"
j.display="inline-block"
j.marginRight="3px"
j.width="10px"
j.height="10px"
i=m.bA()
j.backgroundColor=i
h=t.createElement("span")
h.textContent=H.v(o)+": "+H.v(n)
l.appendChild(k)
l.appendChild(h)
s.appendChild(l)}return s}}
A.fa.prototype={
$asP:function(){return[A.cs]},
$isP:1}
A.fd.prototype={
cd:function(a){var t=a==null
this.a=t?C.v:P.rP(a)
if(!t)this.b=a+1},
eN:function(a,b){var t
if(a.gaw(a))return
t=a.f4(this.a.c3())
return t},
eM:function(a){return this.eN(a,!0)}}
D.jN.prototype={
$1:function(a){return a.geO()},
$S:function(){return{func:1,args:[D.b6]}}}
D.b6.prototype={
M:function(a){return this.a},
ga4:function(a){return this.a},
geO:function(){return this.d}}
D.fr.prototype={}
D.jj.prototype={}
X.lE.prototype={
$2:function(a,b){return J.fF(J.du(a),J.du(b))},
$S:function(){return{func:1,args:[L.c9,L.c9]}}}
X.lF.prototype={
$2:function(a,b){return J.fF(J.du(a),J.du(b))},
$S:function(){return{func:1,args:[T.cn,T.cn]}}}
X.lG.prototype={
$2:function(a,b){return J.fF(J.du(a),J.du(b))},
$S:function(){return{func:1,args:[B.ce,B.ce]}}}
X.lL.prototype={
$1:function(a){var t=this.a.style
if(t.display==="none"){t.display="block"
C.i.bE(this.b,"[-]")}else{t.display="none"
C.i.bE(this.b,"[+]")}},
$S:function(){return{func:1,args:[W.c3]}}}
Q.bR.prototype={
k:function(a,b){return b},
M:function(a){return J.aY(this.gbz())},
ax:function(a,b){return Q.mt(this,b,H.an(this,"bR",0),null)},
ah:function(a,b){return Q.ms(this,!1,!0,null,H.an(this,"bR",0))},
ay:function(a){return this.ah(a,!0)},
$isP:1,
$asP:null}
Q.kh.prototype={
gbz:function(){return this.b},
F:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.a6(t,b)
return J.lN(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.a6(t,b)
t[b]=new Q.f(c,s,this.$ti)},
gO:function(a){return this.b.length},
M:function(a){return P.eV(this.b,"[","]")},
ax:function(a,b){return Q.mt(this,b,H.y(this,0),null)},
ah:function(a,b){return Q.ms(this,!1,!0,null,H.y(this,0))},
ay:function(a){return this.ah(a,!0)},
dz:function(a,b,c){var t,s
this.a=a
t=[[Q.f,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.fn.prototype={$asbR:null,$asP:null,$asa4:null,$asa0:null,$isa4:1,$isa0:1,$isP:1}
Q.f.prototype={
M:function(a){return"("+H.v(this.a)+" @ "+H.v(this.b)+")"},
gbh:function(a){return this.a},
gf1:function(){return this.b}}
Q.cP.prototype={
gbz:function(){return this.b},
gaa:function(a){var t=new Q.kg(null,[H.an(this,"cP",0)])
t.a=J.bx(this.b)
return t},
gO:function(a){return J.dt(this.b)},
M:function(a){return J.aY(this.b)},
ax:function(a,b){return Q.mt(this,b,H.an(this,"cP",0),null)},
ah:function(a,b){return Q.ms(this,!1,!0,null,H.an(this,"cP",0))},
ay:function(a){return this.ah(a,!0)}}
Q.e5.prototype={$asbR:null,$asP:null,$isP:1}
Q.kg.prototype={
ga5:function(){return J.lN(this.a.ga5())},
W:function(){return this.a.W()}}
Q.fo.prototype={
$ascP:function(a,b){return[b]},
$ase5:function(a,b){return[b]},
$asbR:function(a,b){return[b]},
$asP:function(a,b){return[b]}}
Q.ki.prototype={
$1:function(a){return new Q.f(this.c.$1(J.lN(a)),a.gf1(),[this.b])},
$S:function(){return H.mC(function(a,b){return{func:1,args:[[Q.f,a]]}},this,"fo")}}
J.a_.prototype.dl=J.a_.prototype.M
J.dQ.prototype.dn=J.dQ.prototype.M
P.bF.prototype.dq=P.bF.prototype.bo
P.bF.prototype.dr=P.bF.prototype.bn
P.P.prototype.dm=P.P.prototype.bB
W.bf.prototype.bG=W.bf.prototype.aA
W.ed.prototype.ds=W.ed.prototype.aJ;(function installTearOffs(){installTearOff(H.dl.prototype,"geF",0,0,0,null,["$0"],["by"],1)
installTearOff(H.bU.prototype,"gd6",0,0,0,null,["$1"],["as"],3)
installTearOff(H.cQ.prototype,"geo",0,0,0,null,["$1"],["aL"],3)
installTearOff(P,"rZ",1,0,0,null,["$1"],["rF"],2)
installTearOff(P,"t_",1,0,0,null,["$1"],["rG"],2)
installTearOff(P,"t0",1,0,0,null,["$1"],["rH"],2)
installTearOff(P,"od",1,0,0,null,["$0"],["rW"],1)
installTearOff(P.bT.prototype,"gcn",0,0,0,null,["$2","$1"],["bp","dM"],6)
var t
installTearOff(t=P.bF.prototype,"gcw",0,0,0,null,["$0"],["bt"],1)
installTearOff(t,"gcz",0,0,0,null,["$0"],["bu"],1)
installTearOff(t=P.e7.prototype,"gcw",0,0,0,null,["$0"],["bt"],1)
installTearOff(t,"gcz",0,0,0,null,["$0"],["bu"],1)
installTearOff(t,"gdS",0,0,0,null,["$1"],["dT"],function(){return H.mC(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"e7")})
installTearOff(t,"gdW",0,0,0,null,["$2"],["dX"],7)
installTearOff(t,"gdU",0,0,0,null,["$0"],["dV"],1)
installTearOff(P,"t3",1,0,0,null,["$2"],["pr"],10)
installTearOff(W,"t8",1,0,0,null,["$4"],["rL"],5)
installTearOff(W,"t9",1,0,0,null,["$4"],["rM"],5)
installTearOff(W.ct.prototype,"gbh",0,1,0,null,["$1"],["aT"],8)
installTearOff(W.eH.prototype,"gbh",0,1,0,null,["$1"],["aT"],4)
installTearOff(W.fh.prototype,"gbh",0,1,0,null,["$1"],["aT"],4)
installTearOff(W.ec.prototype,"gbh",0,1,0,null,["$1"],["aT"],9)
installTearOff(R,"cH",1,0,0,null,["$1"],["r_"],0)
installTearOff(R,"qM",1,0,0,null,["$1"],["qX"],0)
installTearOff(R,"nJ",1,0,0,null,["$1"],["qN"],0)
installTearOff(R,"mp",1,0,0,null,["$1"],["qZ"],0)
installTearOff(R,"aB",1,0,0,null,["$1"],["qY"],0)
installTearOff(R,"mo",1,0,0,null,["$1"],["qW"],0)
installTearOff(R,"nL",1,0,0,null,["$1"],["qU"],0)
installTearOff(R,"e1",1,0,0,null,["$1"],["qT"],0)
installTearOff(R,"c4",1,0,0,null,["$1"],["qQ"],0)
installTearOff(R,"cl",1,0,0,null,["$1"],["qS"],0)
installTearOff(R,"di",1,0,0,null,["$1"],["qV"],0)
installTearOff(R,"mn",1,0,0,null,["$1"],["qR"],0)
installTearOff(R,"o",1,0,0,null,["$1"],["qO"],0)
installTearOff(R,"nK",1,0,0,null,["$1"],["qP"],0)
installTearOff(X,"om",1,0,0,null,["$0"],["tg"],1)})();(function inheritance(){inherit(P.ay,null)
var t=P.ay
inherit(H.mg,t)
inherit(J.a_,t)
inherit(J.fN,t)
inherit(P.P,t)
inherit(H.f0,t)
inherit(P.eW,t)
inherit(H.eE,t)
inherit(H.d_,t)
inherit(H.l0,t)
inherit(H.dl,t)
inherit(H.kB,t)
inherit(H.cR,t)
inherit(H.l_,t)
inherit(H.kr,t)
inherit(H.dj,t)
inherit(H.k5,t)
inherit(H.bZ,t)
inherit(H.bU,t)
inherit(H.cQ,t)
inherit(H.ji,t)
inherit(H.k9,t)
inherit(P.cu,t)
inherit(H.fx,t)
inherit(H.cp,t)
inherit(H.l,t)
inherit(H.ik,t)
inherit(H.im,t)
inherit(P.fu,t)
inherit(P.bT,t)
inherit(P.fs,t)
inherit(P.cM,t)
inherit(P.jO,t)
inherit(P.bF,t)
inherit(P.ft,t)
inherit(P.kw,t)
inherit(P.l3,t)
inherit(P.cX,t)
inherit(P.lm,t)
inherit(P.kR,t)
inherit(P.fv,t)
inherit(P.jz,t)
inherit(P.kY,t)
inherit(P.cT,t)
inherit(P.de,t)
inherit(P.e0,t)
inherit(P.bD,t)
inherit(P.kZ,t)
inherit(P.c8,t)
inherit(P.aH,t)
inherit(P.bI,t)
inherit(P.ca,t)
inherit(P.iZ,t)
inherit(P.fk,t)
inherit(P.kG,t)
inherit(P.hc,t)
inherit(P.a4,t)
inherit(P.bO,t)
inherit(P.cJ,t)
inherit(P.N,t)
inherit(P.e3,t)
inherit(W.h0,t)
inherit(W.kq,t)
inherit(W.ea,t)
inherit(W.d8,t)
inherit(W.f7,t)
inherit(W.ed,t)
inherit(W.li,t)
inherit(W.eF,t)
inherit(W.ck,t)
inherit(W.ld,t)
inherit(W.fy,t)
inherit(P.kW,t)
inherit(P.l5,t)
inherit(B.ce,t)
inherit(L.c9,t)
inherit(A.fa,t)
inherit(T.cn,t)
inherit(X.d0,t)
inherit(X.cZ,t)
inherit(M.cv,t)
inherit(N.X,t)
inherit(E.iY,t)
inherit(E.r,t)
inherit(A.V,t)
inherit(U.c,t)
inherit(Y.c5,t)
inherit(X.t,t)
inherit(G.U,t)
inherit(A.dz,t)
inherit(A.cs,t)
inherit(A.fd,t)
inherit(D.b6,t)
inherit(Q.bR,t)
inherit(Q.f,t)
t=J.a_
inherit(J.i7,t)
inherit(J.eY,t)
inherit(J.dQ,t)
inherit(J.cC,t)
inherit(J.df,t)
inherit(J.cD,t)
inherit(H.dW,t)
inherit(H.dh,t)
inherit(W.dB,t)
inherit(W.em,t)
inherit(W.en,t)
inherit(W.eK,t)
inherit(W.es,t)
inherit(W.h3,t)
inherit(W.et,t)
inherit(W.a2,t)
inherit(W.ip,t)
inherit(W.iT,t)
inherit(W.iU,t)
inherit(W.eL,t)
inherit(W.ku,t)
inherit(W.eM,t)
t=J.dQ
inherit(J.j4,t)
inherit(J.cO,t)
inherit(J.cE,t)
inherit(J.mf,J.cC)
t=J.df
inherit(J.eX,t)
inherit(J.i8,t)
t=P.P
inherit(H.a0,t)
inherit(H.dS,t)
inherit(H.bS,t)
t=H.a0
inherit(H.cF,t)
inherit(H.il,t)
inherit(P.kS,t)
inherit(H.eu,H.dS)
t=P.eW
inherit(H.f1,t)
inherit(H.fp,t)
inherit(Q.kg,t)
t=H.cF
inherit(H.dg,t)
inherit(P.io,t)
t=H.d_
inherit(H.lJ,t)
inherit(H.lK,t)
inherit(H.kV,t)
inherit(H.kC,t)
inherit(H.hU,t)
inherit(H.hV,t)
inherit(H.l2,t)
inherit(H.k6,t)
inherit(H.k7,t)
inherit(H.lM,t)
inherit(H.lz,t)
inherit(H.lA,t)
inherit(H.lB,t)
inherit(H.lC,t)
inherit(H.lD,t)
inherit(H.jZ,t)
inherit(H.i9,t)
inherit(H.lv,t)
inherit(H.lw,t)
inherit(H.lx,t)
inherit(P.kn,t)
inherit(P.km,t)
inherit(P.ko,t)
inherit(P.kp,t)
inherit(P.kH,t)
inherit(P.kL,t)
inherit(P.kI,t)
inherit(P.kJ,t)
inherit(P.kK,t)
inherit(P.kO,t)
inherit(P.kP,t)
inherit(P.kN,t)
inherit(P.kM,t)
inherit(P.jP,t)
inherit(P.jQ,t)
inherit(P.jR,t)
inherit(P.jS,t)
inherit(P.kt,t)
inherit(P.ks,t)
inherit(P.l4,t)
inherit(P.ln,t)
inherit(P.l7,t)
inherit(P.l8,t)
inherit(P.l9,t)
inherit(P.kT,t)
inherit(P.iu,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(W.lp,t)
inherit(W.kF,t)
inherit(W.iW,t)
inherit(W.iV,t)
inherit(W.lf,t)
inherit(W.lg,t)
inherit(W.lk,t)
inherit(W.ll,t)
inherit(L.fO,t)
inherit(B.hT,t)
inherit(A.i5,t)
inherit(A.i4,t)
inherit(T.jq,t)
inherit(G.i3,t)
inherit(A.lq,t)
inherit(D.jN,t)
inherit(X.lE,t)
inherit(X.lF,t)
inherit(X.lG,t)
inherit(X.lL,t)
inherit(Q.ki,t)
t=H.kr
inherit(H.dm,t)
inherit(H.ee,t)
t=P.cu
inherit(H.f8,t)
inherit(H.ia,t)
inherit(H.kb,t)
inherit(H.jp,t)
inherit(P.f9,t)
inherit(P.bY,t)
inherit(P.b7,t)
inherit(P.fm,t)
inherit(P.co,t)
inherit(P.by,t)
inherit(P.h2,t)
t=H.jZ
inherit(H.jL,t)
inherit(H.dx,t)
t=H.dh
inherit(H.iK,t)
inherit(H.f2,t)
t=H.f2
inherit(H.dX,t)
inherit(H.dY,t)
inherit(H.dZ,H.dX)
inherit(H.f3,H.dZ)
inherit(H.e_,H.dY)
inherit(H.f4,H.e_)
t=H.f3
inherit(H.iL,t)
inherit(H.iM,t)
t=H.f4
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.f5,t)
inherit(H.iS,t)
t=P.ft
inherit(P.kv,t)
inherit(P.kx,t)
inherit(P.lh,P.l3)
t=P.cM
inherit(P.e6,t)
inherit(W.kD,t)
inherit(P.e7,P.bF)
inherit(P.l1,P.e6)
inherit(P.l6,P.lm)
inherit(P.fw,H.l)
inherit(P.jy,P.jz)
inherit(P.kU,P.jy)
inherit(P.kX,P.kU)
inherit(P.f_,P.e0)
t=P.bI
inherit(P.Q,t)
inherit(P.a3,t)
t=P.bY
inherit(P.fe,t)
inherit(P.hR,t)
t=W.dB
inherit(W.ad,t)
inherit(W.ix,t)
inherit(W.dV,t)
inherit(W.fq,t)
inherit(W.le,t)
t=W.ad
inherit(W.bf,t)
inherit(W.cr,t)
inherit(W.er,t)
inherit(W.dk,t)
inherit(W.ky,t)
t=W.bf
inherit(W.aa,t)
inherit(P.aE,t)
t=W.aa
inherit(W.fK,t)
inherit(W.fL,t)
inherit(W.fR,t)
inherit(W.cY,t)
inherit(W.fW,t)
inherit(W.h9,t)
inherit(W.hz,t)
inherit(W.eH,t)
inherit(W.hP,t)
inherit(W.hS,t)
inherit(W.id,t)
inherit(W.ij,t)
inherit(W.it,t)
inherit(W.dU,t)
inherit(W.iz,t)
inherit(W.iX,t)
inherit(W.j_,t)
inherit(W.j2,t)
inherit(W.fh,t)
inherit(W.jB,t)
inherit(W.fj,t)
inherit(W.fl,t)
inherit(W.jW,t)
inherit(W.jX,t)
inherit(W.e4,t)
inherit(W.k1,t)
inherit(W.kQ,t)
inherit(W.ct,W.eK)
t=W.a2
inherit(W.ha,t)
inherit(W.hF,t)
inherit(W.bQ,t)
inherit(W.jI,t)
inherit(W.jJ,t)
inherit(W.hA,W.em)
inherit(W.iA,W.dV)
inherit(W.c3,W.bQ)
inherit(W.bm,P.f_)
inherit(W.eN,W.eL)
inherit(W.f6,W.eN)
inherit(W.kz,W.et)
inherit(W.eO,W.eM)
inherit(W.ec,W.eO)
inherit(W.kA,W.kq)
inherit(W.mv,W.kD)
inherit(W.kE,P.jO)
inherit(W.lj,W.ed)
t=P.aE
inherit(P.aT,t)
inherit(P.cq,t)
inherit(P.hd,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.hi,t)
inherit(P.hj,t)
inherit(P.hk,t)
inherit(P.hl,t)
inherit(P.hm,t)
inherit(P.hn,t)
inherit(P.ho,t)
inherit(P.hp,t)
inherit(P.hq,t)
inherit(P.hr,t)
inherit(P.hs,t)
inherit(P.hB,t)
inherit(P.iv,t)
inherit(P.iw,t)
inherit(P.j3,t)
inherit(P.e2,t)
inherit(P.jV,t)
inherit(P.kd,t)
inherit(P.e9,t)
inherit(P.la,t)
inherit(P.lb,t)
inherit(P.lc,t)
t=P.aT
inherit(P.fI,t)
inherit(P.hQ,t)
inherit(P.jT,t)
inherit(P.cN,t)
inherit(P.kc,t)
inherit(P.k2,P.cN)
t=B.ce
inherit(S.fJ,t)
inherit(M.fP,t)
inherit(A.h_,t)
inherit(M.h1,t)
inherit(V.h4,t)
inherit(U.ht,t)
inherit(N.ic,t)
inherit(F.iI,t)
inherit(G.j5,t)
inherit(Q.jm,t)
inherit(N.jE,t)
inherit(D.k_,t)
inherit(V.k0,t)
inherit(F.kl,t)
inherit(A.j1,A.fa)
inherit(L.z,A.j1)
t=T.cn
inherit(O.fQ,t)
inherit(Y.hG,t)
inherit(Y.hH,t)
inherit(B.hK,t)
inherit(X.hN,t)
inherit(Q.hO,t)
inherit(S.ie,t)
inherit(Z.iq,t)
inherit(S.ir,t)
inherit(U.is,t)
inherit(E.iH,t)
inherit(V.j0,t)
inherit(N.j8,t)
inherit(N.jl,t)
inherit(E.jr,t)
inherit(Y.jt,t)
inherit(Y.jv,t)
inherit(L.jw,t)
inherit(S.jx,t)
inherit(Y.jC,t)
inherit(R.jU,t)
inherit(U.k3,t)
inherit(E.kf,t)
inherit(M.kj,t)
inherit(M.kk,t)
t=L.c9
inherit(L.fS,t)
inherit(T.fT,t)
inherit(T.fV,t)
inherit(S.fX,t)
inherit(U.fZ,t)
inherit(U.h5,t)
inherit(Z.h6,t)
inherit(L.hu,t)
inherit(O.hC,t)
inherit(L.hI,t)
inherit(T.hJ,t)
inherit(V.hL,t)
inherit(X.hM,t)
inherit(Z.ib,t)
inherit(Q.ig,t)
inherit(K.ih,t)
inherit(G.ii,t)
inherit(D.iy,t)
inherit(L.iB,t)
inherit(V.iC,t)
inherit(S.iE,t)
inherit(O.iF,t)
inherit(B.iG,t)
inherit(E.ja,t)
inherit(L.jb,t)
inherit(L.jd,t)
inherit(L.je,t)
inherit(L.jf,t)
inherit(L.jg,t)
inherit(Z.jk,t)
inherit(V.jn,t)
inherit(R.jo,t)
inherit(Y.js,t)
inherit(K.ju,t)
inherit(L.jA,t)
inherit(O.jD,t)
inherit(N.jG,t)
inherit(U.jK,t)
inherit(A.iD,t)
inherit(A.jH,t)
inherit(A.j6,t)
inherit(A.jF,t)
inherit(A.k8,t)
inherit(A.jh,t)
inherit(A.hE,t)
inherit(L.jY,t)
inherit(N.k4,t)
inherit(Q.ke,t)
inherit(E.eI,E.iY)
t=E.r
inherit(E.cW,t)
inherit(E.dw,t)
inherit(U.T,U.c)
inherit(R.j9,N.X)
t=R.j9
inherit(R.W,t)
inherit(R.M,t)
inherit(R.a1,t)
inherit(R.aq,R.a1)
t=Y.c5
inherit(Y.a5,t)
inherit(Y.aI,t)
inherit(Y.iJ,t)
inherit(Y.O,t)
inherit(Y.eq,t)
inherit(Y.at,t)
inherit(Y.bk,t)
inherit(Y.fY,t)
inherit(Y.fb,t)
inherit(Y.eG,t)
inherit(Y.fc,t)
t=Y.aI
inherit(Y.bp,t)
inherit(Y.ap,t)
inherit(G.ep,G.U)
t=D.b6
inherit(D.fr,t)
inherit(D.jj,t)
t=Q.bR
inherit(Q.fn,t)
inherit(Q.e5,t)
inherit(Q.kh,Q.fn)
inherit(Q.cP,Q.e5)
inherit(Q.fo,Q.cP)
mixin(H.dX,P.bD)
mixin(H.dZ,H.eE)
mixin(H.dY,P.bD)
mixin(H.e_,H.eE)
mixin(P.e0,P.bD)
mixin(W.eK,W.h0)
mixin(W.eL,P.bD)
mixin(W.eN,W.d8)
mixin(W.eM,P.bD)
mixin(W.eO,W.d8)
mixin(A.fa,P.de)
mixin(Q.fn,P.bD)
mixin(Q.e5,P.de)})();(function constants(){C.l=W.cY.prototype
C.m=W.ct.prototype
C.w=J.a_.prototype
C.a=J.cC.prototype
C.b=J.eX.prototype
C.x=J.eY.prototype
C.d=J.df.prototype
C.e=J.cD.prototype
C.E=J.cE.prototype
C.q=J.j4.prototype
C.i=W.fj.prototype
C.r=W.fl.prototype
C.k=J.cO.prototype
C.t=new P.iZ()
C.u=new P.kw()
C.v=new P.kW()
C.c=new P.l6()
C.n=new P.ca(0)
C.y=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.o=function(hooks) { return hooks; }
C.z=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.A=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.B=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.p=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.C=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.D=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.F=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.N])
C.G=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.H=makeConstList([])
C.f=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.N])
C.h=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.N])
C.I=H.aF("tm")
C.J=H.aF("tn")
C.j=H.aF("to")
C.K=H.aF("tp")
C.L=H.aF("tq")
C.M=H.aF("ts")
C.N=H.aF("tt")
C.O=H.aF("tu")
C.P=H.aF("nC")
C.Q=H.aF("bO")
C.R=H.aF("N")
C.S=H.aF("tv")
C.T=H.aF("tw")
C.U=H.aF("tx")
C.V=H.aF("ty")
C.W=H.aF("c8")
C.X=H.aF("Q")
C.Y=H.aF("a3")
C.Z=H.aF("bI")})();(function staticFields(){$.nF="$cachedFunction"
$.nG="$cachedInvocation"
$.c_=0
$.dy=null
$.mU=null
$.mE=null
$.oa=null
$.oj=null
$.lr=null
$.ly=null
$.mF=null
$.dn=null
$.ef=null
$.eg=null
$.mz=!1
$.ar=C.c
$.n9=0
$.cb=null
$.lR=null
$.n7=null
$.n6=null
$.n3=null
$.n2=null
$.n1=null
$.n4=null
$.n0=null
$.pc=null
$.pg=null
$.oD=null
$.lO=null
$.oC=null
$.oK=null
$.oS=null
$.oP=null
$.pi=null
$.mT=null
$.oM=null
$.oO=null
$.oF=null
$.p8=null
$.mS=null
$.pf=null
$.p5=null
$.oL=null
$.oB=null
$.oT=null
$.pd=null
$.oY=null
$.pb=null
$.ph=null
$.p_=null
$.oI=null
$.oQ=null
$.oE=null
$.p6=null
$.oJ=null
$.oR=null
$.oU=null
$.oZ=null
$.p7=null
$.p9=null
$.p4=null
$.oN=null
$.oG=null
$.pa=null
$.oH=null
$.pe=null
$.oW=null
$.oV=null
$.p0=null
$.p1=null
$.p2=null
$.p3=null
$.mR=null
$.oX=null
$.L="accent"
$.A="aspect1"
$.C="aspect2"
$.K="shoe1"
$.J="shoe2"
$.E="cloak1"
$.F="cloak2"
$.D="cloak3"
$.B="shirt1"
$.I="shirt2"
$.H="pants1"
$.G="pants2"
$.a9=1300
$.i=3
$.j=2
$.w=1
$.q=0.1
$.pz=null
$.d3=null
$.px=null
$.dG=null
$.eD=null
$.lU=null
$.pw=null
$.ne=null
$.pA=null
$.hv=null
$.lS=null
$.m_=null
$.dF=null
$.cd=null
$.py=null
$.lT=null
$.m0=null
$.dH=null
$.eC=null
$.dC=null
$.b2=null
$.br=null
$.cw=null
$.lZ=null
$.aL=null
$.aK=null
$.nb=null
$.ez=null
$.d4=null
$.ey=null
$.b3=null
$.cx=null
$.eA=null
$.bg=null
$.dI=null
$.aJ=null
$.lX=null
$.lV=null
$.af=null
$.bb=null
$.aR=null
$.aS=null
$.hy=null
$.aD=null
$.c0=null
$.bJ=null
$.d2=null
$.cc=null
$.bK=null
$.d1=null
$.bL=null
$.eB=null
$.lW=null
$.ev=null
$.bq=null
$.b0=null
$.aj=null
$.dD=null
$.d5=null
$.lY=null
$.ex=null
$.ew=null
$.nd=null
$.b1=null
$.ng=null
$.na=null
$.pC=null
$.dE=null
$.ba=null
$.bA=null
$.bz=null
$.dJ=null
$.nc=null
$.nf=null
$.pB=null
$.hw=null
$.hx=null
$.d6=null
$.pK=null
$.pD=null
$.pE=null
$.pF=null
$.pG=null
$.pH=null
$.pI=null
$.pJ=null
$.pM=null
$.pN=null
$.pO=null
$.pP=null
$.pQ=null
$.pR=null
$.pL=null
$.qA="JACK"
$.qF="PM"
$.qB="JS"
$.qz="HP"
$.qK="YD"
$.qH="SI"
$.qI="SU"
$.qC="ME"
$.qG="RB"
$.qx="GN"
$.qD="MP"
$.qv="AR"
$.qE="PE"
$.qw="DP"
$.qJ="WV"
$.qy="HB"
$.k="PLAYER1TAG"
$.cI="PLAYER2TAG"
$.n="DENIZENTAG"
$.m="CONSORTTAG"
$.x="CONSORTSOUNDTAG"
$.ae="MCGUFFINTAG"
$.a7="TAGPHYSICALMCGUFFIN"
$.aC="TAGWEAPON"
$.ra=null
$.rn=null
$.r4=null
$.r7=null
$.rd=null
$.ri=null
$.rg=null
$.rq=null
$.rp=null
$.rh=null
$.rs=null
$.rc=null
$.rr=null
$.rl=null
$.rj=null
$.rm=null
$.r6=null
$.r5=null
$.rf=null
$.re=null
$.rb=null
$.ro=null
$.r8=null
$.r9=null
$.rk=null
$.rt=null
$.rA=13
$.a8=3
$.aA=2
$.ab=1
$.dO=null
$.eU=null
$.ns=null
$.qm=null
$.qk=null
$.q4=null
$.qj=null
$.q9=null
$.q5=null
$.qi=null
$.qp=null
$.q1=null
$.np=null
$.m3=null
$.ah=null
$.q_=null
$.i1=null
$.qg=null
$.nr=null
$.hW=null
$.nn=null
$.qa=null
$.d9=null
$.ch=null
$.m6=null
$.qq=null
$.qn=null
$.ql=null
$.nw=null
$.m4=null
$.Y=null
$.q7=null
$.m5=null
$.cy=null
$.nz=null
$.am=null
$.ax=null
$.dd=null
$.Z=null
$.ag=null
$.ci=null
$.aW=null
$.m8=null
$.cA=null
$.dM=null
$.eQ=null
$.da=null
$.hX=null
$.i2=null
$.ac=null
$.cz=null
$.b5=null
$.db=null
$.aU=null
$.hY=null
$.eS=null
$.c2=null
$.cB=null
$.bB=null
$.bs=null
$.bh=null
$.eR=null
$.aV=null
$.dN=null
$.bM=null
$.ao=null
$.i_=null
$.aP=null
$.dP=null
$.cf=null
$.bi=null
$.dc=null
$.aX=null
$.b4=null
$.aM=null
$.al=null
$.bd=null
$.cg=null
$.bN=null
$.c1=null
$.aO=null
$.aw=null
$.u=null
$.R=null
$.as=null
$.ak=null
$.au=null
$.aZ=null
$.pZ=null
$.hZ=null
$.q2=null
$.nm=null
$.m7=null
$.nx=null
$.nk=null
$.nu=null
$.m9=null
$.eT=null
$.mb=null
$.qe=null
$.dL=null
$.qc=null
$.qd=null
$.q6=null
$.nv=null
$.i0=null
$.qf=null
$.m1=null
$.ny=null
$.mc=null
$.q3=null
$.q8=null
$.ma=null
$.nq=null
$.md=null
$.nt=null
$.qh=null
$.qb=null
$.q0=null
$.qo=null
$.no=null
$.m2=null
$.nl=null
$.d7="OWNER"
$.jM=null
$.ry=null
$.bP=null
$.c6=null
$.rx=null
$.aQ=null
$.bl=null
$.av=null
$.bE=null
$.cK=null
$.cL=null
$.bu=null
$.az=null
$.nN=!1})();(function lazyInitializers(){lazy($,"n_","$get$n_",function(){return H.of("_$dart_dartClosure")})
lazy($,"mh","$get$mh",function(){return H.of("_$dart_js")})
lazy($,"ni","$get$ni",function(){return H.pX()})
lazy($,"nj","$get$nj",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.n9
$.n9=t+1
t="expando$key$"+t}return new P.hc(null,t,[P.a3])})
lazy($,"nP","$get$nP",function(){return H.c7(H.ka({
toString:function(){return"$receiver$"}}))})
lazy($,"nQ","$get$nQ",function(){return H.c7(H.ka({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"nR","$get$nR",function(){return H.c7(H.ka(null))})
lazy($,"nS","$get$nS",function(){return H.c7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"nW","$get$nW",function(){return H.c7(H.ka(void 0))})
lazy($,"nX","$get$nX",function(){return H.c7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"nU","$get$nU",function(){return H.c7(H.nV(null))})
lazy($,"nT","$get$nT",function(){return H.c7(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"nZ","$get$nZ",function(){return H.c7(H.nV(void 0))})
lazy($,"nY","$get$nY",function(){return H.c7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"mu","$get$mu",function(){return P.rE()})
lazy($,"hD","$get$hD",function(){var t,s
t=P.bO
s=new P.bT(0,P.rD(),null,[t])
s.dD(null,t)
return s})
lazy($,"eh","$get$eh",function(){return[]})
lazy($,"mZ","$get$mZ",function(){return{}})
lazy($,"o2","$get$o2",function(){return P.eZ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"my","$get$my",function(){return P.nD()})
lazy($,"el","$get$el",function(){return P.mj(P.a3,L.c9)})
lazy($,"eP","$get$eP",function(){return P.mj(P.a3,B.ce)})
lazy($,"nB","$get$nB",function(){return H.a([],[A.V])})
lazy($,"fg","$get$fg",function(){return P.mj(P.a3,T.cn)})
lazy($,"oh","$get$oh",function(){return A.r0(null)})
lazy($,"nA","$get$nA",function(){return P.bt(null,null,null,G.U)})
lazy($,"ml","$get$ml",function(){return A.eo(255,0,255,255)})
lazy($,"be","$get$be",function(){return H.a([],[D.b6])})})()
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
mangledGlobalNames:{a3:"int",Q:"double",bI:"num",N:"String",c8:"bool",bO:"Null",a4:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.c8,args:[[P.a4,E.eI]]},{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.bf,args:[P.a3]},{func:1,ret:P.c8,args:[W.bf,P.N,P.N,W.ea]},{func:1,v:true,args:[P.ay],opt:[P.cJ]},{func:1,v:true,args:[,P.cJ]},{func:1,ret:P.N,args:[P.a3]},{func:1,ret:W.dk,args:[P.a3]},{func:1,ret:P.a3,args:[P.aH,P.aH]}],
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
setOrUpdateInterceptorsByTag({DOMImplementation:J.a_,MediaError:J.a_,MediaSession:J.a_,PositionError:J.a_,Range:J.a_,SVGAnimatedLength:J.a_,SVGAnimatedLengthList:J.a_,SVGAnimatedNumber:J.a_,SVGAnimatedNumberList:J.a_,SVGAnimatedString:J.a_,SQLError:J.a_,ArrayBuffer:H.dW,ArrayBufferView:H.dh,DataView:H.iK,Float32Array:H.iL,Float64Array:H.iM,Int16Array:H.iN,Int32Array:H.iO,Int8Array:H.iP,Uint16Array:H.iQ,Uint32Array:H.iR,Uint8ClampedArray:H.f5,CanvasPixelArray:H.f5,Uint8Array:H.iS,HTMLBRElement:W.aa,HTMLCanvasElement:W.aa,HTMLContentElement:W.aa,HTMLDListElement:W.aa,HTMLDataListElement:W.aa,HTMLDetailsElement:W.aa,HTMLDialogElement:W.aa,HTMLDivElement:W.aa,HTMLHRElement:W.aa,HTMLHeadElement:W.aa,HTMLHeadingElement:W.aa,HTMLHtmlElement:W.aa,HTMLImageElement:W.aa,HTMLLIElement:W.aa,HTMLLabelElement:W.aa,HTMLLegendElement:W.aa,HTMLMenuElement:W.aa,HTMLMenuItemElement:W.aa,HTMLMeterElement:W.aa,HTMLModElement:W.aa,HTMLOListElement:W.aa,HTMLOptGroupElement:W.aa,HTMLOptionElement:W.aa,HTMLParagraphElement:W.aa,HTMLPictureElement:W.aa,HTMLPreElement:W.aa,HTMLProgressElement:W.aa,HTMLQuoteElement:W.aa,HTMLScriptElement:W.aa,HTMLShadowElement:W.aa,HTMLSourceElement:W.aa,HTMLStyleElement:W.aa,HTMLTableCaptionElement:W.aa,HTMLTableCellElement:W.aa,HTMLTableDataCellElement:W.aa,HTMLTableHeaderCellElement:W.aa,HTMLTableColElement:W.aa,HTMLTitleElement:W.aa,HTMLTrackElement:W.aa,HTMLUListElement:W.aa,HTMLUnknownElement:W.aa,HTMLDirectoryElement:W.aa,HTMLFontElement:W.aa,HTMLFrameElement:W.aa,HTMLMarqueeElement:W.aa,HTMLElement:W.aa,HTMLAnchorElement:W.fK,HTMLAreaElement:W.fL,HTMLBaseElement:W.fR,Blob:W.em,HTMLBodyElement:W.cY,HTMLButtonElement:W.fW,CDATASection:W.cr,CharacterData:W.cr,Comment:W.cr,ProcessingInstruction:W.cr,Text:W.cr,Client:W.en,WindowClient:W.en,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,DocumentFragment:W.er,ShadowRoot:W.er,DOMError:W.es,FileError:W.es,DOMException:W.h3,DOMRectReadOnly:W.et,Element:W.bf,HTMLEmbedElement:W.h9,ErrorEvent:W.ha,AnimationEvent:W.a2,AnimationPlayerEvent:W.a2,ApplicationCacheErrorEvent:W.a2,AutocompleteErrorEvent:W.a2,BeforeInstallPromptEvent:W.a2,BeforeUnloadEvent:W.a2,BlobEvent:W.a2,ClipboardEvent:W.a2,CloseEvent:W.a2,CustomEvent:W.a2,DeviceLightEvent:W.a2,DeviceMotionEvent:W.a2,DeviceOrientationEvent:W.a2,ExtendableEvent:W.a2,ExtendableMessageEvent:W.a2,FetchEvent:W.a2,FontFaceSetLoadEvent:W.a2,GamepadEvent:W.a2,HashChangeEvent:W.a2,InstallEvent:W.a2,MediaEncryptedEvent:W.a2,MediaKeyMessageEvent:W.a2,MediaQueryListEvent:W.a2,MediaStreamEvent:W.a2,MediaStreamTrackEvent:W.a2,MessageEvent:W.a2,MIDIConnectionEvent:W.a2,MIDIMessageEvent:W.a2,NotificationEvent:W.a2,PageTransitionEvent:W.a2,PopStateEvent:W.a2,PresentationConnectionAvailableEvent:W.a2,PresentationConnectionCloseEvent:W.a2,ProgressEvent:W.a2,PromiseRejectionEvent:W.a2,PushEvent:W.a2,RelatedEvent:W.a2,RTCDataChannelEvent:W.a2,RTCDTMFToneChangeEvent:W.a2,RTCIceCandidateEvent:W.a2,RTCPeerConnectionIceEvent:W.a2,SecurityPolicyViolationEvent:W.a2,ServicePortConnectEvent:W.a2,ServiceWorkerMessageEvent:W.a2,SpeechRecognitionEvent:W.a2,StorageEvent:W.a2,SyncEvent:W.a2,TrackEvent:W.a2,TransitionEvent:W.a2,WebKitTransitionEvent:W.a2,ResourceProgressEvent:W.a2,USBConnectionEvent:W.a2,IDBVersionChangeEvent:W.a2,AudioProcessingEvent:W.a2,OfflineAudioCompletionEvent:W.a2,WebGLContextEvent:W.a2,Event:W.a2,InputEvent:W.a2,MessagePort:W.dB,EventTarget:W.dB,HTMLFieldSetElement:W.hz,File:W.hA,HTMLFormElement:W.eH,GeofencingEvent:W.hF,HTMLIFrameElement:W.hP,HTMLInputElement:W.hS,HTMLKeygenElement:W.id,HTMLLinkElement:W.ij,Location:W.ip,HTMLMapElement:W.it,HTMLAudioElement:W.dU,HTMLMediaElement:W.dU,HTMLVideoElement:W.dU,MediaStream:W.ix,HTMLMetaElement:W.iz,MIDIOutput:W.iA,MIDIInput:W.dV,MIDIPort:W.dV,MouseEvent:W.c3,DragEvent:W.c3,PointerEvent:W.c3,WheelEvent:W.c3,Navigator:W.iT,NavigatorUserMediaError:W.iU,Document:W.ad,HTMLDocument:W.ad,XMLDocument:W.ad,Node:W.ad,NodeList:W.f6,RadioNodeList:W.f6,HTMLObjectElement:W.iX,HTMLOutputElement:W.j_,HTMLParamElement:W.j2,HTMLSelectElement:W.fh,HTMLSlotElement:W.jB,HTMLSpanElement:W.fj,SpeechRecognitionError:W.jI,SpeechSynthesisEvent:W.jJ,HTMLTableElement:W.fl,HTMLTableRowElement:W.jW,HTMLTableSectionElement:W.jX,HTMLTemplateElement:W.e4,HTMLTextAreaElement:W.k1,CompositionEvent:W.bQ,FocusEvent:W.bQ,KeyboardEvent:W.bQ,TextEvent:W.bQ,TouchEvent:W.bQ,SVGZoomEvent:W.bQ,UIEvent:W.bQ,Window:W.fq,DOMWindow:W.fq,Attr:W.dk,ClientRect:W.ku,DocumentType:W.ky,DOMRect:W.kz,HTMLFrameSetElement:W.kQ,NamedNodeMap:W.ec,MozNamedAttrMap:W.ec,ServiceWorker:W.le,SVGAElement:P.fI,SVGAnimateElement:P.cq,SVGAnimateMotionElement:P.cq,SVGAnimateTransformElement:P.cq,SVGAnimationElement:P.cq,SVGSetElement:P.cq,SVGFEBlendElement:P.hd,SVGFEColorMatrixElement:P.he,SVGFEComponentTransferElement:P.hf,SVGFECompositeElement:P.hg,SVGFEConvolveMatrixElement:P.hh,SVGFEDiffuseLightingElement:P.hi,SVGFEDisplacementMapElement:P.hj,SVGFEFloodElement:P.hk,SVGFEGaussianBlurElement:P.hl,SVGFEImageElement:P.hm,SVGFEMergeElement:P.hn,SVGFEMorphologyElement:P.ho,SVGFEOffsetElement:P.hp,SVGFESpecularLightingElement:P.hq,SVGFETileElement:P.hr,SVGFETurbulenceElement:P.hs,SVGFilterElement:P.hB,SVGCircleElement:P.aT,SVGClipPathElement:P.aT,SVGDefsElement:P.aT,SVGEllipseElement:P.aT,SVGForeignObjectElement:P.aT,SVGGElement:P.aT,SVGGeometryElement:P.aT,SVGLineElement:P.aT,SVGPathElement:P.aT,SVGPolygonElement:P.aT,SVGPolylineElement:P.aT,SVGRectElement:P.aT,SVGSwitchElement:P.aT,SVGGraphicsElement:P.aT,SVGImageElement:P.hQ,SVGMarkerElement:P.iv,SVGMaskElement:P.iw,SVGPatternElement:P.j3,SVGScriptElement:P.e2,SVGDescElement:P.aE,SVGDiscardElement:P.aE,SVGFEDistantLightElement:P.aE,SVGFEFuncAElement:P.aE,SVGFEFuncBElement:P.aE,SVGFEFuncGElement:P.aE,SVGFEFuncRElement:P.aE,SVGFEMergeNodeElement:P.aE,SVGFEPointLightElement:P.aE,SVGFESpotLightElement:P.aE,SVGMetadataElement:P.aE,SVGStopElement:P.aE,SVGStyleElement:P.aE,SVGTitleElement:P.aE,SVGComponentTransferFunctionElement:P.aE,SVGElement:P.aE,SVGSVGElement:P.jT,SVGSymbolElement:P.jV,SVGTSpanElement:P.cN,SVGTextElement:P.cN,SVGTextPositioningElement:P.cN,SVGTextContentElement:P.cN,SVGTextPathElement:P.k2,SVGUseElement:P.kc,SVGViewElement:P.kd,SVGLinearGradientElement:P.e9,SVGRadialGradientElement:P.e9,SVGGradientElement:P.e9,SVGCursorElement:P.la,SVGFEDropShadowElement:P.lb,SVGMPathElement:P.lc})
setOrUpdateLeafTags({DOMImplementation:true,MediaError:true,MediaSession:true,PositionError:true,Range:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedString:true,SQLError:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Client:true,WindowClient:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,Element:false,HTMLEmbedElement:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,MessagePort:true,EventTarget:false,HTMLFieldSetElement:true,File:true,HTMLFormElement:true,GeofencingEvent:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLAudioElement:true,HTMLMediaElement:true,HTMLVideoElement:true,MediaStream:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Navigator:true,NavigatorUserMediaError:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,HTMLSelectElement:true,HTMLSlotElement:true,HTMLSpanElement:true,SpeechRecognitionError:true,SpeechSynthesisEvent:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,SVGZoomEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DocumentType:true,DOMRect:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGPatternElement:true,SVGScriptElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGUseElement:true,SVGViewElement:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.f2.$nativeSuperclassTag="ArrayBufferView"
H.dX.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
H.f3.$nativeSuperclassTag="ArrayBufferView"
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.e_.$nativeSuperclassTag="ArrayBufferView"
H.f4.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ol(X.om(),b)},[])
else (function(b){H.ol(X.om(),b)})([])})})()
//# sourceMappingURL=stat_summary.dart.js.map
