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
a[c]=function(){a[c]=function(){H.IU(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.vL"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.vL"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.vL(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={uI:function uI(a){this.a=a},
t6:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
xG:function(a,b,c,d){var t=new H.pk(a,b,c,[d])
t.fa(a,b,c,d)
return t},
dy:function(a,b,c,d){if(!!J.aC(a).$isv)return new H.h_(a,b,[c,d])
return new H.hA(a,b,[c,d])},
dk:function(){return new P.b2("No element")},
G_:function(){return new P.b2("Too many elements")},
xf:function(){return new P.b2("Too few elements")},
k2:function(a,b,c,d){if(c-b<=32)H.He(a,b,c,d)
else H.Hd(a,b,c,d)},
He:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.b6(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.cx(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
Hd:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.an(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.an(a3+a4,2)
p=q-t
o=q+t
n=J.b6(a2)
m=n.n(a2,s)
l=n.n(a2,p)
k=n.n(a2,q)
j=n.n(a2,o)
i=n.n(a2,r)
if(J.cx(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.cx(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.cx(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.cx(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cx(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.cx(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.cx(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.cx(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.cx(a5.$2(j,i),0)){h=i
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
b=J.aC(c)
if(b.T(c,0))continue
if(b.a7(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dD(c)
if(b.aA(c,0)){--f
continue}else{a=f-1
if(b.a7(c,0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
f=a
g=a0
break}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)
f=a
break}}}}a1=!0}else{for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.eb(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.cx(a5.$2(d,j),0))for(;!0;)if(J.cx(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eb(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
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
H.k2(a2,a3,g-2,a5)
H.k2(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.bb(a5.$2(n.n(a2,g),l),0);)++g
for(;J.bb(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.bb(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.bb(a5.$2(d,j),0))for(;!0;)if(J.bb(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.eb(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.k2(a2,g,f,a5)}else H.k2(a2,g,f,a5)},
lb:function lb(a){this.a=a},
v:function v(){},
et:function et(){},
pk:function pk(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eu:function eu(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hA:function hA(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
h_:function h_(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jI:function jI(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
ew:function ew(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eL:function eL(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
kd:function kd(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iN:function iN(){},
pM:function pM(){},
hY:function hY(){},
ky:function(a,b){var t=a.bv(b)
if(!u.globalState.d.cy)u.globalState.f.bF()
return t},
yO:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aC(s).$isq)throw H.k(P.dF("Arguments to main must be a List: "+H.C(s)))
u.globalState=new H.r5(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$wB()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.qC(P.uN(null,H.eP),0)
r=P.D
s.z=new H.t(0,null,null,null,null,null,0,[r,H.fz])
s.ch=new H.t(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.r4()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.B2,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.HA)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a2(null,null,null,r)
p=new H.fp(0,null,!1)
o=new H.fz(s,new H.t(0,null,null,null,null,null,0,[r,H.fp]),q,u.createNewIsolate(),p,new H.dG(H.tp()),new H.dG(H.tp()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
q.h(0,0)
o.dm(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.eT(a,{func:1,args:[,]}))o.bv(new H.tq(t,a))
else if(H.eT(a,{func:1,args:[,,]}))o.bv(new H.tr(t,a))
else o.bv(a)
u.globalState.f.bF()},
HA:function(a){var t=P.hv(["command","print","msg",a])
return new H.dC(!0,P.ia(null,P.D)).aB(t)},
B4:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.B5()
return},
B5:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.V("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.V('Cannot extract URI from "'+t+'"'))},
B2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eO(!0,[]).b0(b.data)
s=J.b6(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eO(!0,[]).b0(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eO(!0,[]).b0(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.D
j=P.a2(null,null,null,k)
i=new H.fp(0,null,!1)
h=new H.fz(s,new H.t(0,null,null,null,null,null,0,[k,H.fp]),j,u.createNewIsolate(),i,new H.dG(H.tp()),new H.dG(H.tp()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
j.h(0,0)
h.dm(0,i)
u.globalState.f.a.aO(0,new H.eP(h,new H.mF(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bF()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fI(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bF()
break
case"close":u.globalState.ch.ao(0,$.$get$wC().n(0,a))
a.terminate()
u.globalState.f.bF()
break
case"log":H.B1(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.hv(["command","print","msg",t])
k=new H.dC(!0,P.ia(null,P.D)).aB(k)
s.toString
self.postMessage(k)}else P.fG(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
B1:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.hv(["command","log","msg",a])
r=new H.dC(!0,P.ia(null,P.D)).aB(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.bO(q)
t=H.cw(q)
s=P.lI(t)
throw H.k(s)}},
B3:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.xt=$.xt+("_"+s)
$.xu=$.xu+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fI(f,["spawned",new H.fA(s,r),q,t.r])
r=new H.mG(a,b,c,d,t)
if(e===!0){t.e4(q,q)
u.globalState.f.a.aO(0,new H.eP(t,r,"start isolate"))}else r.$0()},
Hk:function(a,b){var t=new H.pD(!0,!1,null)
t.fb(a,b)
return t},
HT:function(a){return new H.eO(!0,[]).b0(new H.dC(!1,P.ia(null,P.D)).aB(a))},
tq:function tq(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
r5:function r5(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
r0:function r0(a,b){this.a=a
this.b=b},
qC:function qC(a,b){this.a=a
this.b=b},
qD:function qD(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
r4:function r4(){},
mF:function mF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mG:function mG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qn:function qn(){},
fA:function fA(b,a){this.b=b
this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
ig:function ig(b,c,a){this.b=b
this.c=c
this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
pD:function pD(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a,b){this.a=a
this.b=b},
pF:function pF(a,b){this.a=a
this.b=b},
dG:function dG(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
A4:function(){throw H.k(new P.V("Cannot modify unmodifiable Map"))},
Is:function(a){return u.types[a]},
yH:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aC(a).$isaQ},
C:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cy(a)
if(typeof t!=="string")throw H.k(H.bv(a))
return t},
GH:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.on(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ey:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
v6:function(a,b){if(b==null)throw H.k(new P.bL(a,null,null))
return b.$1(a)},
ez:function(a,b,c){var t,s,r,q,p,o
H.rV(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.v6(a,c)
if(3>=t.length)return H.w(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.v6(a,c)}if(b<2||b>36)throw H.k(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a9(q,o)|32)>r)return H.v6(a,c)}return parseInt(a,b)},
xr:function(a,b){return b.$1(a)},
xv:function(a,b){var t,s
H.rV(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.xr(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.tw(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.xr(a,b)}return t},
jX:function(a){var t,s,r,q,p,o,n,m
t=J.aC(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.S||!!J.aC(a).$iseJ){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a9(q,0)===36)q=C.c.ad(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.th(H.kC(a),0,null),u.mangledGlobalNames)},
og:function(a){return"Instance of '"+H.jX(a)+"'"},
Gm:function(){if(!!self.location)return self.location.href
return},
xq:function(a){var t,s,r,q,p
t=J.c0(a)
if(typeof t!=="number")return t.eN()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Gr:function(a){var t,s,r,q
t=H.a([],[P.D])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bV)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aZ(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.bv(q))}return H.xq(t)},
xx:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bV)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<0)throw H.k(H.bv(q))
if(q>65535)return H.Gr(a)}return H.xq(a)},
Gs:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.eN()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hL:function(a){var t
if(typeof a!=="number")return H.a9(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aZ(t,10))>>>0,56320|t&1023)}}throw H.k(P.bE(a,0,1114111,null,null))},
d1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
xs:function(a){return a.b?H.d1(a).getUTCFullYear()+0:H.d1(a).getFullYear()+0},
v8:function(a){return a.b?H.d1(a).getUTCMonth()+1:H.d1(a).getMonth()+1},
v7:function(a){return a.b?H.d1(a).getUTCDate()+0:H.d1(a).getDate()+0},
Gn:function(a){return a.b?H.d1(a).getUTCHours()+0:H.d1(a).getHours()+0},
Gp:function(a){return a.b?H.d1(a).getUTCMinutes()+0:H.d1(a).getMinutes()+0},
Gq:function(a){return a.b?H.d1(a).getUTCSeconds()+0:H.d1(a).getSeconds()+0},
Go:function(a){return a.b?H.d1(a).getUTCMilliseconds()+0:H.d1(a).getMilliseconds()+0},
v9:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
return a[b]},
xw:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
a[b]=c},
a9:function(a){throw H.k(H.bv(a))},
w:function(a,b){if(a==null)J.c0(a)
throw H.k(H.c6(a,b))},
c6:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"index",null)
t=J.c0(a)
if(!(b<0)){if(typeof t!=="number")return H.a9(t)
s=b>=t}else s=!0
if(s)return P.bz(b,a,"index",null,t)
return P.jZ(b,"index",null)},
Ih:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cY(!0,a,"start",null)
if(a<0||a>c)return new P.eD(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cY(!0,b,"end",null)
if(b<a||b>c)return new P.eD(a,c,!0,b,"end","Invalid value")}return new P.cY(!0,b,"end",null)},
bv:function(a){return new P.cY(!0,a,null,null)},
kA:function(a){if(typeof a!=="number")throw H.k(H.bv(a))
return a},
vK:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.bv(a))
return a},
rV:function(a){if(typeof a!=="string")throw H.k(H.bv(a))
return a},
k:function(a){var t
if(a==null)a=new P.fl()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.yQ})
t.name=""}else t.toString=H.yQ
return t},
yQ:function(){return J.cy(this.dartException)},
bd:function(a){throw H.k(a)},
bV:function(a){throw H.k(new P.bJ(a))},
dR:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.pJ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
pK:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
xO:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
uK:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.mZ(a,s,t?null:b.receiver)},
bO:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.ts(a)
if(a==null)return
if(a instanceof H.h8)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aZ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.uK(H.C(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.C(s)+" (Error "+q+")"
return t.$1(new H.jP(p,null))}}if(a instanceof TypeError){o=$.$get$xI()
n=$.$get$xJ()
m=$.$get$xK()
l=$.$get$xL()
k=$.$get$xP()
j=$.$get$xQ()
i=$.$get$xN()
$.$get$xM()
h=$.$get$xS()
g=$.$get$xR()
f=o.aL(s)
if(f!=null)return t.$1(H.uK(s,f))
else{f=n.aL(s)
if(f!=null){f.method="call"
return t.$1(H.uK(s,f))}else{f=m.aL(s)
if(f==null){f=l.aL(s)
if(f==null){f=k.aL(s)
if(f==null){f=j.aL(s)
if(f==null){f=i.aL(s)
if(f==null){f=l.aL(s)
if(f==null){f=h.aL(s)
if(f==null){f=g.aL(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jP(s,f==null?null:f.method))}}return t.$1(new H.pL(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.k6()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cY(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.k6()
return a},
cw:function(a){var t
if(a instanceof H.h8)return a.b
if(a==null)return new H.kt(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.kt(a,null)},
IH:function(a){if(a==null||typeof a!='object')return J.dE(a)
else return H.ey(a)},
yB:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
IC:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ky(b,new H.tc(a))
case 1:return H.ky(b,new H.td(a,d))
case 2:return H.ky(b,new H.te(a,d,e))
case 3:return H.ky(b,new H.tf(a,d,e,f))
case 4:return H.ky(b,new H.tg(a,d,e,f,g))}throw H.k(P.lI("Unsupported number of arguments for wrapped closure"))},
dr:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.IC)
a.$identity=t
return t},
A0:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aC(c).$isq){t.$reflectionInfo=c
r=H.GH(t).r}else r=c
q=d?Object.create(new H.oT().constructor.prototype):Object.create(new H.fP(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dH
$.dH=J.ea(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.w9(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.Is,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.w7:H.tA
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.w9(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
zY:function(a,b,c,d){var t=H.tA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
w9:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.A_(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.zY(s,!q,t,b)
if(s===0){q=$.dH
$.dH=J.ea(q,1)
o="self"+H.C(q)
q="return function(){var "+o+" = this."
p=$.fQ
if(p==null){p=H.l4("self")
$.fQ=p}return new Function(q+H.C(p)+";return "+o+"."+H.C(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dH
$.dH=J.ea(q,1)
n+=H.C(q)
q="return function("+n+"){return this."
p=$.fQ
if(p==null){p=H.l4("self")
$.fQ=p}return new Function(q+H.C(p)+"."+H.C(t)+"("+n+");}")()},
zZ:function(a,b,c,d){var t,s
t=H.tA
s=H.w7
switch(b?-1:a){case 0:throw H.k(new H.ot("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
A_:function(a,b){var t,s,r,q,p,o,n,m
t=H.zX()
s=$.w6
if(s==null){s=H.l4("receiver")
$.w6=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.zZ(q,!o,r,b)
if(q===1){s="return function(){return this."+H.C(t)+"."+H.C(r)+"(this."+H.C(s)+");"
o=$.dH
$.dH=J.ea(o,1)
return new Function(s+H.C(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.C(t)+"."+H.C(r)+"(this."+H.C(s)+", "+m+");"
o=$.dH
$.dH=J.ea(o,1)
return new Function(s+H.C(o)+"}")()},
vL:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aC(c).$isq){c.fixed$length=Array
t=c}else t=c
return H.A0(a,b,t,!!d,e,f)},
tA:function(a){return a.a},
w7:function(a){return a.c},
zX:function(){var t=$.fQ
if(t==null){t=H.l4("self")
$.fQ=t}return t},
l4:function(a){var t,s,r,q,p
t=new H.fP("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
IK:function(a,b){var t=J.b6(b)
throw H.k(H.tD(H.jX(a),t.L(b,3,t.gm(b))))},
kE:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aC(a)[b]
else t=!0
if(t)return a
H.IK(a,b)},
vM:function(a){var t=J.aC(a)
return"$S" in t?t.$S():null},
eT:function(a,b){var t
if(a==null)return!1
t=H.vM(a)
return t==null?!1:H.vP(t,b)},
Iq:function(a,b){var t,s
if(a==null)return a
if(H.eT(a,b))return a
t=H.df(b,null)
s=H.vM(a)
throw H.k(H.tD(s!=null?H.df(s,null):H.jX(a),t))},
tD:function(a,b){return new H.l9("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
IU:function(a){throw H.k(new P.lr(a))},
tp:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
yD:function(a){return u.getIsolateTag(a)},
c_:function(a){return new H.dS(a,null)},
a:function(a,b){a.$ti=b
return a},
kC:function(a){if(a==null)return
return a.$ti},
yE:function(a,b){return H.vR(a["$as"+H.C(b)],H.kC(a))},
aL:function(a,b,c){var t=H.yE(a,b)
return t==null?null:t[c]},
N:function(a,b){var t=H.kC(a)
return t==null?null:t[b]},
df:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.th(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.C(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.df(t,b)
return H.HY(a,b)}return"unknown-reified-type"},
HY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.df(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.df(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.df(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.Ip(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.df(l[j],b)+(" "+H.C(j))}q+="}"}return"("+q+") => "+t},
th:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.ce("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.O=p+", "
o=a[s]
if(o!=null)q=!1
p=t.O+=H.df(o,c)}return q?"":"<"+t.C(0)+">"},
kD:function(a){var t,s
if(a instanceof H.f_){t=H.vM(a)
if(t!=null)return H.df(t,null)}s=J.aC(a).constructor.builtin$cls
if(a==null)return s
return s+H.th(a.$ti,0,null)},
vR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dV:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kC(a)
s=J.aC(a)
if(s[b]==null)return!1
return H.yu(H.vR(s[d],t),c)},
IS:function(a,b,c,d){if(a==null)return a
if(H.dV(a,b,c,d))return a
throw H.k(H.tD(H.jX(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.th(c,0,null),u.mangledGlobalNames)))},
yu:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.d4(a[s],b[s]))return!1
return!0},
eR:function(a,b,c){return a.apply(b,H.yE(b,c))},
Id:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ad"||b.builtin$cls==="cR"
if(b==null)return!0
t=H.kC(a)
a=J.aC(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.vP(r.apply(a,null),b)}return H.d4(s,b)},
d4:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="cR")return!0
if('func' in b)return H.vP(a,b)
if('func' in a)return b.builtin$cls==="u3"||b.builtin$cls==="ad"
t=typeof a==="object"&&a!==null&&a.constructor===Array
s=t?a[0]:a
r=typeof b==="object"&&b!==null&&b.constructor===Array
q=r?b[0]:b
if(q!==s){p=H.df(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=b.slice(1)
return H.yu(H.vR(o,t),r)},
yt:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.d4(t,p)||H.d4(p,t)))return!1}return!0},
I4:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.d4(p,o)||H.d4(o,p)))return!1}return!0},
vP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.d4(t,s)||H.d4(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.yt(r,q,!1))return!1
if(!H.yt(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.d4(i,h)||H.d4(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.d4(i,h)||H.d4(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.d4(i,h)||H.d4(h,i)))return!1}}return H.I4(a.named,b.named)},
Ja:function(a){var t=$.vN
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
J9:function(a){return H.ey(a)},
J8:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ID:function(a){var t,s,r,q,p,o
t=$.vN.$1(a)
s=$.t1[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ys.$2(a,t)
if(t!=null){s=$.t1[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.tb[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.vQ(r)
$.t1[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.tb[t]=r
return r}if(p==="-"){o=H.vQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.yK(a,r)
if(p==="*")throw H.k(new P.eI(t))
if(u.leafTags[t]===true){o=H.vQ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.yK(a,r)},
yK:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.tl(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
vQ:function(a){return J.tl(a,!1,null,!!a.$isaQ)},
IF:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.tl(t,!1,null,!!t.$isaQ)
else return J.tl(t,c,null,null)},
IA:function(){if(!0===$.vO)return
$.vO=!0
H.IB()},
IB:function(){var t,s,r,q,p,o,n,m
$.t1=Object.create(null)
$.tb=Object.create(null)
H.Iz()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.yL.$1(p)
if(o!=null){n=H.IF(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
Iz:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.fE(C.U,H.fE(C.V,H.fE(C.x,H.fE(C.x,H.fE(C.X,H.fE(C.W,H.fE(C.Y(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.vN=new H.t8(p)
$.ys=new H.t9(o)
$.yL=new H.ta(n)},
fE:function(a,b){return a(b)||b},
uF:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bL("Illegal RegExp pattern ("+String(q)+")",a,null))},
IQ:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
yP:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hr){q=b.gdN()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.bd(H.bv(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
I2:function(a){return a},
IR:function(a,b,c,d){var t,s,r,q,p,o
for(t=b.aR(0,a),t=new H.i2(t.a,t.b,t.c,null),s=0,r="";t.I();){q=t.d
p=q.b
o=p.index
r=r+H.C(H.yj().$1(C.c.L(a,s,o)))+H.C(c.$1(q))
s=o+p[0].length}t=r+H.C(H.yj().$1(C.c.ad(a,s)))
return t.charCodeAt(0)==0?t:t},
le:function le(){},
lf:function lf(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
on:function on(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
pJ:function pJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jP:function jP(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
pL:function pL(a){this.a=a},
h8:function h8(a,b){this.a=a
this.b=b},
ts:function ts(a){this.a=a},
kt:function kt(a,b){this.a=a
this.b=b},
tc:function tc(a){this.a=a},
td:function td(a,b){this.a=a
this.b=b},
te:function te(a,b,c){this.a=a
this.b=b
this.c=c},
tf:function tf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tg:function tg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f_:function f_(){},
pr:function pr(){},
oT:function oT(){},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l9:function l9(a){this.a=a},
ot:function ot(a){this.a=a},
dS:function dS(a,b){this.a=a
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
mY:function mY(a){this.a=a},
mX:function mX(a){this.a=a},
n9:function n9(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
na:function na(a,$ti){this.a=a
this.$ti=$ti},
nb:function nb(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
ta:function ta(a){this.a=a},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a,b){this.a=a
this.b=b},
qh:function qh(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
rq:function rq(a,b,c){this.a=a
this.b=b
this.c=c},
rr:function rr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dF("Invalid length "+H.C(a)))
return a},
yg:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dF("Invalid view offsetInBytes "+H.C(b)))},
yi:function(a){return a},
Gk:function(a){return new Int8Array(H.yi(a))},
cQ:function(a,b,c){H.yg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
HS:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aA()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.Ih(a,b,c))
return b},
fj:function fj(){},
ex:function ex(){},
nE:function nE(){},
jL:function jL(){},
hE:function hE(){},
hG:function hG(){},
hI:function hI(){},
hF:function hF(){},
hH:function hH(){},
hJ:function hJ(){},
nF:function nF(){},
nG:function nG(){},
nH:function nH(){},
nI:function nI(){},
nJ:function nJ(){},
nK:function nK(){},
nL:function nL(){},
jM:function jM(){},
fk:function fk(){},
Ip:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
IJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aC:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jF.prototype
return J.jE.prototype}if(typeof a=="string")return J.er.prototype
if(a==null)return J.mV.prototype
if(typeof a=="boolean")return J.mU.prototype
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
tl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
t4:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.vO==null){H.IA()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.eI("Return interceptor for "+H.C(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$uJ()]
if(p!=null)return p
p=H.ID(a)
if(p!=null)return p
if(typeof a=="function")return C.Z
s=Object.getPrototypeOf(a)
if(s==null)return C.J
if(s===Object.prototype)return C.J
if(typeof q=="function"){Object.defineProperty(q,$.$get$uJ(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
xg:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
G0:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a9(a,b)
if(s!==32&&s!==13&&!J.xg(s))break;++b}return b},
uE:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.a1(a,t)
if(s!==32&&s!==13&&!J.xg(s))break}return b},
b6:function(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
cW:function(a){if(a==null)return a
if(a.constructor==Array)return J.eq.prototype
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
dD:function(a){if(typeof a=="number")return J.fi.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eJ.prototype
return a},
kB:function(a){if(typeof a=="number")return J.fi.prototype
if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eJ.prototype
return a},
cD:function(a){if(typeof a=="string")return J.er.prototype
if(a==null)return a
if(!(a instanceof P.ad))return J.eJ.prototype
return a},
b1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.es.prototype
return a}if(a instanceof P.ad)return a
return J.t4(a)},
ea:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kB(a).X(a,b)},
bb:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aC(a).T(a,b)},
vS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dD(a).at(a,b)},
cx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dD(a).aA(a,b)},
eb:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dD(a).a7(a,b)},
vT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kB(a).as(a,b)},
il:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.yH(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).n(a,b)},
kG:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.yH(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.cW(a).i(a,b,c)},
yR:function(a,b){return J.cW(a).h(a,b)},
yS:function(a,b,c,d){return J.b1(a).h9(a,b,c,d)},
yT:function(a,b){return J.cD(a).aR(a,b)},
dW:function(a,b){return J.b1(a).hc(a,b)},
vU:function(a){return J.b1(a).he(a)},
yU:function(a,b,c){return J.dD(a).ag(a,b,c)},
yV:function(a,b){return J.kB(a).aD(a,b)},
yW:function(a,b){return J.b1(a).aE(a,b)},
yX:function(a,b){return J.b6(a).Y(a,b)},
kH:function(a,b,c){return J.b6(a).ea(a,b,c)},
yY:function(a,b){return J.b1(a).Z(a,b)},
yZ:function(a,b){return J.b1(a).hp(a,b)},
vV:function(a,b){return J.cW(a).U(a,b)},
z_:function(a,b,c,d){return J.cW(a).bw(a,b,c,d)},
kI:function(a){return J.dD(a).ak(a)},
z0:function(a,b){return J.cW(a).a3(a,b)},
vW:function(a){return J.b1(a).ge6(a)},
vX:function(a){return J.b1(a).ge8(a)},
z1:function(a){return J.b1(a).gho(a)},
z2:function(a){return J.b1(a).gbu(a)},
fH:function(a){return J.b1(a).gar(a)},
z3:function(a){return J.b1(a).gcO(a)},
z4:function(a){return J.cW(a).gJ(a)},
dE:function(a){return J.aC(a).gaa(a)},
tt:function(a){return J.b6(a).gV(a)},
vY:function(a){return J.b1(a).ga0(a)},
cX:function(a){return J.cW(a).gW(a)},
c0:function(a){return J.b6(a).gm(a)},
z5:function(a){return J.b1(a).ghW(a)},
z6:function(a){return J.b1(a).gcX(a)},
z7:function(a){return J.b1(a).gig(a)},
z8:function(a){return J.b1(a).gih(a)},
vZ:function(a){return J.aC(a).gaf(a)},
tu:function(a){return J.b1(a).gaC(a)},
z9:function(a){return J.b1(a).gik(a)},
za:function(a){return J.b1(a).gaI(a)},
zb:function(a,b){return J.b1(a).bJ(a,b)},
zc:function(a,b){return J.b6(a).bk(a,b)},
w_:function(a,b,c,d,e){return J.b1(a).en(a,b,c,d,e)},
w0:function(a,b){return J.cW(a).az(a,b)},
zd:function(a,b,c){return J.cD(a).er(a,b,c)},
w1:function(a,b){return J.b1(a).i0(a,b)},
ze:function(a){return J.cW(a).i9(a)},
zf:function(a,b,c,d){return J.b1(a).ib(a,b,c,d)},
kJ:function(a,b,c){return J.cD(a).d0(a,b,c)},
zg:function(a,b,c){return J.cD(a).ie(a,b,c)},
fI:function(a,b){return J.b1(a).ba(a,b)},
kK:function(a,b){return J.b1(a).sbu(a,b)},
zh:function(a,b){return J.b1(a).sab(a,b)},
zi:function(a,b){return J.b1(a).saj(a,b)},
zj:function(a,b){return J.b1(a).d8(a,b)},
zk:function(a,b){return J.cW(a).dc(a,b)},
ec:function(a,b){return J.cD(a).eY(a,b)},
zl:function(a,b){return J.cD(a).ad(a,b)},
w2:function(a){return J.dD(a).l(a)},
zm:function(a){return J.cW(a).ap(a)},
tv:function(a){return J.cD(a).eD(a)},
zn:function(a,b){return J.dD(a).bG(a,b)},
cy:function(a){return J.aC(a).C(a)},
w3:function(a){return J.cD(a).im(a)},
tw:function(a){return J.cD(a).bl(a)},
zo:function(a){return J.cD(a).eF(a)},
i:function i(){},
mU:function mU(){},
mV:function mV(){},
hs:function hs(){},
oa:function oa(){},
eJ:function eJ(){},
es:function es(){},
eq:function eq($ti){this.$ti=$ti},
uH:function uH($ti){this.$ti=$ti},
im:function im(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fi:function fi(){},
jF:function jF(){},
jE:function jE(){},
er:function er(){}},P={
Hp:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.I5()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dr(new P.qj(t),1)).observe(s,{childList:true})
return new P.qi(t,s,r)}else if(self.setImmediate!=null)return P.I6()
return P.I7()},
Hq:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dr(new P.qk(a),0))},
Hr:function(a){++u.globalState.f.b
self.setImmediate(H.dr(new P.ql(a),0))},
Hs:function(a){P.vs(C.o,a)},
bp:function(a,b){P.ye(null,a)
return b.ghD()},
cf:function(a,b){P.ye(a,b)},
bo:function(a,b){J.yW(b,a)},
bn:function(a,b){b.cJ(H.bO(a),H.cw(a))},
ye:function(a,b){var t,s,r,q
t=new P.rJ(b)
s=new P.rK(b)
r=J.aC(a)
if(!!r.$isbm)a.cC(t,s)
else if(!!r.$isco)a.c6(t,s)
else{q=new P.bm(0,$.aB,null,[null])
q.a=4
q.c=a
q.cC(t,null)}},
bq:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.aB.toString
return new P.rU(t)},
yk:function(a,b){if(H.eT(a,{func:1,args:[P.cR,P.cR]})){b.toString
return a}else{b.toString
return a}},
AJ:function(a,b){var t=new P.bm(0,$.aB,null,[b])
P.xH(C.o,new P.rY(a,t))
return t},
wz:function(a,b,c){var t
if(a==null)a=new P.fl()
t=$.aB
if(t!==C.e)t.toString
t=new P.bm(0,t,null,[c])
t.dq(a,b)
return t},
AK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bm(0,$.aB,null,[P.q])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.mh(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bV)(a),++l){q=a[l]
p=t.b
q.c6(new P.mg(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bm(0,$.aB,null,[null])
m.dn(C.C)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.bO(j)
n=H.cw(j)
if(t.b===0||!1)return P.wz(o,n,null)
else{t.c=o
t.d=n}}return s},
bk:function(a){return new P.kv(new P.bm(0,$.aB,null,[a]),[a])},
yh:function(a,b,c){$.aB.toString
a.am(b,c)},
Hv:function(a,b){var t=new P.bm(0,$.aB,null,[b])
t.a=4
t.c=a
return t},
y3:function(a,b){var t,s,r
b.a=1
try{a.c6(new P.qM(b),new P.qN(b))}catch(r){t=H.bO(r)
s=H.cw(r)
P.yM(new P.qO(b,t,s))}},
qL:function(a,b){var t,s,r
for(;a.gfO();)a=a.c
t=a.gcs()
s=b.c
if(t){b.c=null
r=b.bT(s)
b.a=a.a
b.c=a.c
P.fy(b,r)}else{b.a=2
b.c=a
a.dR(s)}},
fy:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fH(p)
n=p.gaN()
s.toString
P.kz(null,null,s,o,n)}return}for(;b.gcv()!=null;b=m){m=b.a
b.a=null
P.fy(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.geh()||b.geg()){k=b.gh7()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fH(p)
n=p.gaN()
s.toString
P.kz(null,null,s,o,n)
return}j=$.aB
if(j==null?k!=null:j!==k)$.aB=k
else j=null
if(b.geg())new P.qT(t,r,q,b).$0()
else if(s){if(b.geh())new P.qS(r,b,l).$0()}else if(b.ghK())new P.qR(t,r,b).$0()
if(j!=null)$.aB=j
s=r.b
if(!!J.aC(s).$isco){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bT(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.qL(s,i)
return}}i=b.b
b=i.bS()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
I_:function(){var t,s
for(;t=$.fC,t!=null;){$.ii=null
s=t.b
$.fC=s
if(s==null)$.ih=null
t.a.$0()}},
I1:function(){$.vG=!0
try{P.I_()}finally{$.ii=null
$.vG=!1
if($.fC!=null)$.$get$vB().$1(P.yv())}},
yr:function(a){var t=new P.ki(a,null)
if($.fC==null){$.ih=t
$.fC=t
if(!$.vG)$.$get$vB().$1(P.yv())}else{$.ih.b=t
$.ih=t}},
I0:function(a){var t,s,r
t=$.fC
if(t==null){P.yr(a)
$.ii=$.ih
return}s=new P.ki(a,null)
r=$.ii
if(r==null){s.b=t
$.ii=s
$.fC=s}else{s.b=r.b
r.b=s
$.ii=s
if(s.b==null)$.ih=s}},
yM:function(a){var t=$.aB
if(C.e===t){P.fD(null,null,C.e,a)
return}t.toString
P.fD(null,null,t,t.cH(a,!0))},
J4:function(a,b){return new P.rp(null,a,!1,[b])},
yo:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.bO(o)
s=H.cw(o)
$.aB.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fH(r)
q=n
p=r.gaN()
c.$2(q,p)}}},
HR:function(a,b,c,d){var t=a.bZ(0)
if(!!J.aC(t).$isco&&t!==$.$get$hi())t.c9(new P.rM(b,c,d))
else b.am(c,d)},
yf:function(a,b){return new P.rL(a,b)},
vF:function(a,b,c){var t=a.bZ(0)
if(!!J.aC(t).$isco&&t!==$.$get$hi())t.c9(new P.rN(b,c))
else b.aK(c)},
Hu:function(a,b,c,d,e,f,g){var t,s
t=$.aB
s=e?1:0
s=new P.i7(a,null,null,null,null,t,s,null,null,[f,g])
s.fe(b,c,d,e,g)
s.fh(a,b,c,d,e,f,g)
return s},
HQ:function(a,b,c){$.aB.toString
a.bL(b,c)},
xH:function(a,b){var t=$.aB
if(t===C.e){t.toString
return P.vs(a,b)}return P.vs(a,t.cH(b,!0))},
vs:function(a,b){var t=C.a.an(a.a,1000)
return H.Hk(t<0?0:t,b)},
kz:function(a,b,c,d,e){var t={}
t.a=d
P.I0(new P.rT(t,e))},
yl:function(a,b,c,d){var t,s
s=$.aB
if(s===c)return d.$0()
$.aB=c
t=s
try{s=d.$0()
return s}finally{$.aB=t}},
yn:function(a,b,c,d,e){var t,s
s=$.aB
if(s===c)return d.$1(e)
$.aB=c
t=s
try{s=d.$1(e)
return s}finally{$.aB=t}},
ym:function(a,b,c,d,e,f){var t,s
s=$.aB
if(s===c)return d.$2(e,f)
$.aB=c
t=s
try{s=d.$2(e,f)
return s}finally{$.aB=t}},
fD:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cH(d,!(!t||!1))
P.yr(d)},
qj:function qj(a){this.a=a},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a){this.a=a},
ql:function ql(a){this.a=a},
rJ:function rJ(a){this.a=a},
rK:function rK(a){this.a=a},
rU:function rU(a){this.a=a},
co:function co(){},
rY:function rY(a,b){this.a=a
this.b=b},
mh:function mh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mg:function mg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f0:function f0(){},
kj:function kj(){},
dU:function dU(a,$ti){this.a=a
this.$ti=$ti},
kv:function kv(a,$ti){this.a=a
this.$ti=$ti},
ko:function ko(a,b,c,d,e,$ti){var _=this
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
qI:function qI(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b){this.a=a
this.b=b},
qM:function qM(a){this.a=a},
qN:function qN(a){this.a=a},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a,b){this.a=a
this.b=b},
qP:function qP(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qU:function qU(a){this.a=a},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b){this.a=a
this.b=b},
dn:function dn(){},
p_:function p_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oY:function oY(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b){this.a=a
this.b=b},
p0:function p0(a){this.a=a},
p5:function p5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p3:function p3(a,b){this.a=a
this.b=b},
p4:function p4(){},
p6:function p6(a){this.a=a},
p9:function p9(a){this.a=a},
pa:function pa(a,b){this.a=a
this.b=b},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a){this.a=a},
pb:function pb(a,b){this.a=a
this.b=b},
pc:function pc(a,b){this.a=a
this.b=b},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a){this.a=a},
oX:function oX(){},
dp:function dp(){},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qo:function qo(a){this.a=a},
km:function km(){},
qw:function qw(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
qy:function qy(b,c,a){this.b=b
this.c=c
this.a=a},
qx:function qx(){},
r8:function r8(){},
r9:function r9(a,b){this.a=a
this.b=b},
ro:function ro(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
rp:function rp(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
rM:function rM(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(a,b){this.a=a
this.b=b},
rN:function rN(a,b){this.a=a
this.b=b},
i6:function i6(){},
i7:function i7(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
r6:function r6(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eU:function eU(a,b){this.a=a
this.b=b},
rI:function rI(){},
rT:function rT(a,b){this.a=a
this.b=b},
rc:function rc(){},
rd:function rd(a,b){this.a=a
this.b=b},
re:function re(a,b){this.a=a
this.b=b},
rf:function rf(a,b){this.a=a
this.b=b},
Hw:function(a,b){var t=a[b]
return t===a?null:t},
vD:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vC:function(){var t=Object.create(null)
P.vD(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
xh:function(a,b,c){return H.yB(a,new H.t(0,null,null,null,null,null,0,[b,c]))},
cI:function(a,b){return new H.t(0,null,null,null,null,null,0,[a,b])},
jG:function(){return new H.t(0,null,null,null,null,null,0,[null,null])},
hv:function(a){return H.yB(a,new H.t(0,null,null,null,null,null,0,[null,null]))},
ia:function(a,b){return new P.kr(0,null,null,null,null,null,0,[a,b])},
Hz:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
p:function(a,b,c,d,e){return new P.qW(0,null,null,null,null,[d,e])},
uB:function(a,b,c){var t,s
if(P.vH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ij()
s.push(a)
try{P.HZ(a,t)}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=P.xF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jC:function(a,b,c){var t,s,r
if(P.vH(a))return b+"..."+c
t=new P.ce(b)
s=$.$get$ij()
s.push(a)
try{r=t
r.O=P.xF(r.gO(),a,", ")}finally{if(0>=s.length)return H.w(s,-1)
s.pop()}s=t
s.O=s.gO()+c
s=t.gO()
return s.charCodeAt(0)==0?s:s},
vH:function(a){var t,s
for(t=0;s=$.$get$ij(),t<s.length;++t)if(a===s[t])return!0
return!1},
HZ:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cX(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.I())return
q=H.C(t.gP())
b.push(q)
s+=q.length+2;++r}if(!t.I()){if(r<=5)return
if(0>=b.length)return H.w(b,-1)
p=b.pop()
if(0>=b.length)return H.w(b,-1)
o=b.pop()}else{n=t.gP();++r
if(!t.I()){if(r<=4){b.push(H.C(n))
return}p=H.C(n)
if(0>=b.length)return H.w(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gP();++r
for(;t.I();n=m,m=l){l=t.gP();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.C(n)
p=H.C(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a2:function(a,b,c,d){return new P.kq(0,null,null,null,null,null,0,[d])},
jH:function(a,b){var t,s
t=P.a2(null,null,null,b)
for(s=J.cX(a);s.I();)t.h(0,s.gP())
return t},
xm:function(a){var t,s,r
t={}
if(P.vH(a))return"{...}"
s=new P.ce("")
try{$.$get$ij().push(a)
r=s
r.O=r.gO()+"{"
t.a=!0
a.a3(0,new P.nq(t,s))
t=s
t.O=t.gO()+"}"}finally{t=$.$get$ij()
if(0>=t.length)return H.w(t,-1)
t.pop()}t=s.gO()
return t.charCodeAt(0)==0?t:t},
uN:function(a,b){var t=new P.nc(null,0,0,0,[b])
t.f9(a,b)
return t},
qW:function qW(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qZ:function qZ(a){this.a=a},
qX:function qX(a,$ti){this.a=a
this.$ti=$ti},
qY:function qY(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
kr:function kr(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
kq:function kq(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
r2:function r2(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r_:function r_(){},
fh:function fh(){},
hq:function hq(){},
hw:function hw(){},
fn:function fn(){},
b5:function b5(){},
rz:function rz(){},
np:function np(){},
hZ:function hZ(a,$ti){this.a=a
this.$ti=$ti},
nq:function nq(a,b){this.a=a
this.b=b},
nc:function nc(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
r3:function r3(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
oF:function oF(){},
oE:function oE(){},
w5:function(a,b,c,d,e,f){if(C.d.bK(f,4)!==0)throw H.k(new P.bL("Invalid base64 padding, padded length must be multiple of four, is "+H.C(f),a,c))
if(d+e!==f)throw H.k(new P.bL("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bL("Invalid base64 padding, more than two '=' characters",a,b))},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
fU:function fU(){},
fW:function fW(){},
lC:function lC(){},
pV:function pV(a){this.a=a},
pW:function pW(a){this.a=a},
rB:function rB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rD:function rD(a){this.a=a},
rC:function rC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hi:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bE(b,0,J.c0(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bE(c,b,J.c0(a),null,null))
s=J.cX(a)
for(r=0;r<b;++r)if(!s.I())throw H.k(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.I();)q.push(s.gP())
else for(r=b;r<c;++r){if(!s.I())throw H.k(P.bE(c,b,r,null,null))
q.push(s.gP())}return H.xx(q)},
xF:function(a,b,c){var t=J.cX(b)
if(!t.I())return a
if(c.length===0){do a+=H.C(t.gP())
while(t.I())}else{a+=H.C(t.gP())
for(;t.I();)a=a+c+H.C(t.gP())}return a},
A3:function(a,b){return J.yV(a,b)},
A6:function(a,b){var t=new P.dZ(a,b)
t.dj(a,b)
return t},
A7:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.C(t)
if(t>=10)return s+"00"+H.C(t)
return s+"000"+H.C(t)},
A8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iu:function(a){if(a>=10)return""+a
return"0"+a},
wn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cy(a)
if(typeof a==="string")return JSON.stringify(a)
return P.Ar(a)},
Ar:function(a){var t=J.aC(a)
if(!!t.$isf_)return t.C(a)
return H.og(a)},
dF:function(a){return new P.cY(!1,null,null,a)},
dX:function(a,b,c){return new P.cY(!0,a,b,c)},
zq:function(a){return new P.cY(!1,null,a,"Must not be null")},
xB:function(a){return new P.eD(null,null,!1,null,null,a)},
jZ:function(a,b,c){return new P.eD(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.eD(b,c,!0,a,d,"Invalid value")},
dm:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a9(a)
if(!(0>a)){if(typeof c!=="number")return H.a9(c)
t=a>c}else t=!0
if(t)throw H.k(P.bE(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a9(b)
if(!(a>b)){if(typeof c!=="number")return H.a9(c)
t=b>c}else t=!0
if(t)throw H.k(P.bE(b,a,c,"end",f))
return b}return c},
bz:function(a,b,c,d,e){var t=e!=null?e:J.c0(b)
return new P.mC(b,t,!0,a,c,"Index out of range")},
lI:function(a){return new P.qH(a)},
dl:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cX(a);s.I();)t.push(s.gP())
if(b)return t
t.fixed$length=Array
return t},
G1:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
f:function(a,b){var t=P.dl(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fG:function(a){H.IJ(H.C(a))},
dc:function(a,b,c){return new H.hr(a,H.uF(a,!1,!0,!1),null,null)},
ph:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dm(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a7()
s=c<t}else s=!0
return H.xx(s?C.b.ce(a,b,c):a)}if(!!J.aC(a).$isfk)return H.Gs(a,b,P.dm(b,c,a.length,null,null,null))
return P.Hi(a,b,c)},
pP:function(){var t=H.Gm()
if(t!=null)return P.xU(t,0,null)
throw H.k(new P.V("'Uri.base' is not supported"))},
xU:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a9(a,b+4)^58)*3|C.c.a9(a,b)^100|C.c.a9(a,b+1)^97|C.c.a9(a,b+2)^116|C.c.a9(a,b+3)^97)>>>0
if(s===0)return P.xT(b>0||c<c?C.c.L(a,b,c):a,5,null).geH()
else if(s===32)return P.xT(C.c.L(a,t,c),0,null).geH()}r=H.a(new Array(8),[P.D])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.yp(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.at()
if(p>=b)if(P.yp(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.X()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a7()
if(typeof l!=="number")return H.a9(l)
if(k<l)l=k
if(typeof m!=="number")return m.a7()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a7()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a7()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aJ(a,"..",m)))h=l>m+2&&C.c.aJ(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aJ(a,"file",b)){if(o<=b){if(!C.c.aJ(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.c.aH(a,m,l,"/");++l;++k;++c}else{a=C.c.L(a,b,m)+"/"+C.c.L(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aJ(a,"http",b)){if(q&&n+3===m&&C.c.aJ(a,"80",n+1))if(b===0&&!0){a=C.c.aH(a,n,m,"")
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
else if(p===t&&C.c.aJ(a,"https",b)){if(q&&n+4===m&&C.c.aJ(a,"443",n+1))if(b===0&&!0){a=C.c.aH(a,n,m,"")
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
k-=b}return new P.rn(a,p,o,n,m,l,k,i,null)}return P.HC(a,b,c,p,o,n,m,l,k,i)},
xW:function(a,b){return C.b.hA(a.split("&"),P.jG(),new P.pS(b))},
Hl:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.pO(a)
s=H.cC(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.a1(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.ez(C.c.L(a,p,q),null,null)
if(J.cx(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.w(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.ez(C.c.L(a,p,c),null,null)
if(J.cx(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.w(r,o)
r[o]=m
return r},
xV:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.pQ(a)
s=new P.pR(a,t)
if(a.length<2)t.$1("address is too short")
r=[]
for(q=b,p=q,o=!1,n=!1;q<a0;++q){m=C.c.a1(a,q)
if(m===58){if(q===b){++q
if(C.c.a1(a,q)!==58)t.$2("invalid start colon.",q)
p=q}if(q===p){if(o)t.$2("only one wildcard `::` is allowed",q)
r.push(-1)
o=!0}else r.push(s.$2(p,q))
p=q+1}else if(m===46)n=!0}if(r.length===0)t.$1("too few parts")
l=p===a0
k=J.bb(C.b.gbc(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.Hl(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.av()
h=j[1]
if(typeof h!=="number")return H.a9(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.av()
i=j[3]
if(typeof i!=="number")return H.a9(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aC(e).T(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.w(g,f)
g[f]=0
i=f+1
if(i>=16)return H.w(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.da()
i=C.d.aZ(e,8)
if(f<0||f>=16)return H.w(g,f)
g[f]=i
i=f+1
if(i>=16)return H.w(g,i)
g[i]=e&255
f+=2}}return g},
HC:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.HK(a,b,d)
else{if(d===b)P.ie(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.HL(a,t,e-1):""
r=P.HG(a,e,f,!1)
if(typeof f!=="number")return f.X()
q=f+1
if(typeof g!=="number")return H.a9(g)
p=q<g?P.HI(H.ez(C.c.L(a,q,g),null,new P.rX(a,f)),j):null}else{s=""
r=null
p=null}o=P.HH(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a7()
n=h<i?P.HJ(a,h+1,i,null):null
return new P.kw(j,s,r,p,o,n,i<c?P.HF(a,i+1,c):null,null,null,null,null,null)},
y8:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ie:function(a,b,c){throw H.k(new P.bL(c,a,b))},
HI:function(a,b){if(a!=null&&J.bb(a,P.y8(b)))return
return a},
HG:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.al()
t=c-1
if(C.c.a1(a,t)!==93)P.ie(a,b,"Missing end `]` to match `[` in host")
P.xV(a,b+1,t)
return C.c.L(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a9(c)
s=b
for(;s<c;++s)if(C.c.a1(a,s)===58){P.xV(a,b,c)
return"["+a+"]"}return P.HN(a,b,c)},
HN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a9(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.a1(a,t)
if(p===37){o=P.yd(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.ce("")
m=C.c.L(a,s,t)
l=r.O+=!q?m.toLowerCase():m
if(n){o=C.c.L(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.O=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.w(C.F,n)
n=(C.F[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.ce("")
if(s<t){r.O+=C.c.L(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n)P.ie(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.a1(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.ce("")
m=C.c.L(a,s,t)
r.O+=!q?m.toLowerCase():m
r.O+=P.y9(p)
t+=k
s=t}}}}if(r==null)return C.c.L(a,b,c)
if(s<c){m=C.c.L(a,s,c)
r.O+=!q?m.toLowerCase():m}n=r.O
return n.charCodeAt(0)==0?n:n},
HK:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.yb(C.c.a9(a,b)))P.ie(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a9(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.w(C.l,q)
q=(C.l[q]&1<<(r&15))!==0}else q=!1
if(!q)P.ie(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.L(a,b,c)
return P.HD(s?a.toLowerCase():a)},
HD:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
HL:function(a,b,c){var t=P.fB(a,b,c,C.a4,!1)
return t==null?C.c.L(a,b,c):t},
HH:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fB(a,b,c,C.H,!1)
if(r==null)r=C.c.L(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.ac(r,"/"))r="/"+r
return P.HM(r,e,f)},
HM:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.ac(a,"/"))return P.HO(a,!t||c)
return P.HP(a)},
HJ:function(a,b,c,d){var t=P.fB(a,b,c,C.k,!1)
return t==null?C.c.L(a,b,c):t},
HF:function(a,b,c){var t=P.fB(a,b,c,C.k,!1)
return t==null?C.c.L(a,b,c):t},
yd:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.a1(a,b+1)
r=C.c.a1(a,t)
q=H.t6(s)
p=H.t6(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aZ(o,4)
if(t>=8)return H.w(C.E,t)
t=(C.E[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hL(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.L(a,b,b+3).toUpperCase()
return},
y9:function(a){var t,s,r,q,p,o,n,m
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
for(p=0;--r,r>=0;s=128){o=C.a.h2(a,6*r)&63|s
if(p>=q)return H.w(t,p)
t[p]=37
n=p+1
m=C.c.a9("0123456789ABCDEF",o>>>4)
if(n>=q)return H.w(t,n)
t[n]=m
m=p+2
n=C.c.a9("0123456789ABCDEF",o&15)
if(m>=q)return H.w(t,m)
t[m]=n
p+=3}}return P.ph(t,0,null)},
fB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.cD(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a7()
if(typeof c!=="number")return H.a9(c)
if(!(r<c))break
c$0:{o=s.a1(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.w(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.yd(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.w(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ie(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.a1(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.y9(o)}}if(p==null)p=new P.ce("")
p.O+=C.c.L(a,q,r)
p.O+=H.C(m)
if(typeof l!=="number")return H.a9(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a7()
if(q<c)p.O+=s.L(a,q,c)
t=p.O
return t.charCodeAt(0)==0?t:t},
yc:function(a){if(C.c.ac(a,"."))return!0
return C.c.bk(a,"/.")!==-1},
HP:function(a){var t,s,r,q,p,o,n
if(!P.yc(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(J.bb(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.w(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.aS(t,"/")},
HO:function(a,b){var t,s,r,q,p,o
if(!P.yc(a))return!b?P.ya(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bV)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.bb(C.b.gbc(t),"..")){if(0>=t.length)return H.w(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.w(t,0)
s=J.tt(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.bb(C.b.gbc(t),".."))t.push("")
if(!b){if(0>=t.length)return H.w(t,0)
s=P.ya(t[0])
if(0>=t.length)return H.w(t,0)
t[0]=s}return C.b.aS(t,"/")},
ya:function(a){var t,s,r,q
t=J.b6(a)
s=t.gm(a)
if(typeof s!=="number")return s.at()
if(s>=2&&P.yb(t.a1(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a9(s)
if(!(r<s))break
q=t.a1(a,r)
if(q===58)return C.c.L(a,0,r)+"%3A"+C.c.ad(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.w(C.l,s)
s=(C.l[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
HE:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.a1(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dF("Invalid URL encoding"))}}return t},
rA:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a9(c)
t=J.cD(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.a1(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.L(a,b,c)
else o=new H.lb(t.L(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.a1(a,s)
if(q>127)throw H.k(P.dF("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dF("Truncated URI"))
o.push(P.HE(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pW(!1).hl(o)},
yb:function(a){var t=a|32
return 97<=t&&t<=122},
xT:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.b6(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
c$0:{p=s.a1(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bL("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bL("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a9(o)
if(!(r<o))break
p=s.a1(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbc(t)
if(p!==44||r!==m+7||!s.aJ(a,"base64",m+1))throw H.k(new P.bL("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.M.hX(0,a,o,s.gm(a))
else{l=P.fB(a,o,s.gm(a),C.k,!0)
if(l!=null)a=s.aH(a,o,s.gm(a),l)}return new P.pN(a,t,c)},
HW:function(){var t,s,r,q,p
t=P.G1(22,new P.rQ(),!0,P.de)
s=new P.rP(t)
r=new P.rR()
q=new P.rS()
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
yp:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$yq()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.w(t,d)
r=t[d]
q=C.c.a9(a,s)^96
p=J.il(r,q>95?31:q)
if(typeof p!=="number")return p.aM()
d=p&31
o=C.d.aZ(p,5)
if(o>=8)return H.w(e,o)
e[o]=s}return d},
cV:function cV(){},
bG:function bG(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
U:function U(){},
dI:function dI(a){this.a=a},
lz:function lz(){},
lA:function lA(){},
eh:function eh(){},
fl:function fl(){},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mC:function mC(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a){this.a=a},
eI:function eI(a){this.a=a},
b2:function b2(a){this.a=a},
bJ:function bJ(a){this.a=a},
nY:function nY(){},
k6:function k6(){},
lr:function lr(a){this.a=a},
qH:function qH(a){this.a=a},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
lJ:function lJ(a,bP,$ti){this.a=a
this.bP=bP
this.$ti=$ti},
D:function D(){},
n:function n(){},
jD:function jD(){},
q:function q(){},
bf:function bf(){},
cR:function cR(){},
ds:function ds(){},
ad:function ad(){},
dz:function dz(){},
e7:function e7(){},
dP:function dP(){},
y:function y(){},
ce:function ce(O){this.O=O},
eK:function eK(){},
pS:function pS(a){this.a=a},
pO:function pO(a){this.a=a},
pQ:function pQ(a){this.a=a},
pR:function pR(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rX:function rX(a,b){this.a=a
this.b=b},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
rQ:function rQ(){},
rP:function rP(a){this.a=a},
rR:function rR(){},
rS:function rS(){},
rn:function rn(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qv:function qv(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yw:function(a){var t,s,r,q,p
if(a==null)return
t=P.jG()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
Ie:function(a){var t,s
t=new P.bm(0,$.aB,null,[null])
s=new P.dU(t,[null])
a.then(H.dr(new P.t_(s),1))["catch"](H.dr(new P.t0(s),1))
return t},
tH:function(){var t=$.wi
if(t==null){t=J.kH(window.navigator.userAgent,"Opera",0)
$.wi=t}return t},
wk:function(){var t=$.wj
if(t==null){t=P.tH()!==!0&&J.kH(window.navigator.userAgent,"WebKit",0)
$.wj=t}return t},
A9:function(){var t,s
t=$.wf
if(t!=null)return t
s=$.wg
if(s==null){s=J.kH(window.navigator.userAgent,"Firefox",0)
$.wg=s}if(s)t="-moz-"
else{s=$.wh
if(s==null){s=P.tH()!==!0&&J.kH(window.navigator.userAgent,"Trident/",0)
$.wh=s}if(s)t="-ms-"
else t=P.tH()===!0?"-o-":"-webkit-"}$.wf=t
return t},
rs:function rs(){},
ru:function ru(a,b){this.a=a
this.b=b},
qf:function qf(){},
qg:function qg(a,b){this.a=a
this.b=b},
rt:function rt(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
t_:function t_(a){this.a=a},
t0:function t0(a){this.a=a},
lh:function lh(){},
li:function li(a){this.a=a},
HU:function(a){var t,s,r
t=new P.bm(0,$.aB,null,[null])
s=new P.kv(t,[null])
a.toString
r=W.T
W.fx(a,"success",new P.rO(a,s),!1,r)
W.fx(a,"error",s.ge9(),!1,r)
return t},
lt:function lt(){},
rO:function rO(a,b){this.a=a
this.b=b},
mB:function mB(){},
nU:function nU(){},
hN:function hN(){},
pH:function pH(){},
HB:function(a){var t=new P.ra(0,0)
t.fj(a)
return t},
r1:function r1(){},
ra:function ra(a,b){this.a=a
this.b=b},
rb:function rb(){},
bU:function bU(){},
kL:function kL(){},
ee:function ee(){},
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
lV:function lV(){},
lW:function lW(){},
lX:function lX(){},
lY:function lY(){},
lZ:function lZ(){},
mb:function mb(){},
cq:function cq(){},
my:function my(){},
da:function da(){},
n5:function n5(){},
j1:function j1(){},
jl:function jl(){},
nr:function nr(){},
ns:function ns(){},
db:function db(){},
nQ:function nQ(){},
j2:function j2(){},
jm:function jm(){},
o7:function o7(){},
oc:function oc(){},
hP:function hP(){},
pg:function pg(){},
j3:function j3(){},
jn:function jn(){},
pj:function pj(){},
kS:function kS(a){this.a=a},
c5:function c5(){},
pl:function pl(){},
pn:function pn(){},
eH:function eH(){},
pw:function pw(){},
dd:function dd(){},
pI:function pI(){},
j4:function j4(){},
jo:function jo(){},
pU:function pU(){},
pY:function pY(){},
pZ:function pZ(){},
i8:function i8(){},
rg:function rg(){},
rh:function rh(){},
ri:function ri(){},
bj:function bj(){},
de:function de(){},
fN:function fN(){},
eV:function eV(){},
fO:function fO(){},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
bF:function bF(){},
eX:function eX(){},
l2:function l2(){},
lg:function lg(){},
jS:function jS(){},
kN:function kN(){},
op:function op(){},
rF:function rF(){},
k5:function k5(){},
j5:function j5(){},
jp:function jp(){}},W={
zp:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
zV:function(a){if(a!=null)return new Audio(a)
return new Audio()},
zW:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
A5:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
Ht:function(a){var t=new W.qr(a,null)
t.ff(a)
return t},
Aa:function(a,b,c){var t,s
t=document.body
s=(t&&C.v).ay(t,a,b,c)
s.toString
t=new H.eL(new W.d3(s),new W.rW(),[W.as])
return t.gbf(t)},
h0:function(a){var t,s,r
t="element tag unavailable"
try{s=J.z9(a)
if(typeof s==="string")t=a.tagName}catch(r){H.bO(r)}return t},
u7:function(a,b,c){return W.wA(a,null,null,b,null,null,null,c).b5(new W.ms())},
wA:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e2
s=new P.bm(0,$.aB,null,[t])
r=new P.dU(s,[t])
q=new XMLHttpRequest()
C.R.hZ(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.J3
W.fx(q,"load",new W.mt(r,q),!1,t)
W.fx(q,"error",r.ge9(),!1,t)
q.send()
return s},
mz:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
AL:function(a){var t,s,r
s=document.createElement("input")
t=s
try{J.zi(t,a)}catch(r){H.bO(r)}return t},
eQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
y6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fx:function(a,b,c,d,e){var t=W.I3(new W.qG(c))
t=new W.qF(0,a,b,t,!1,[e])
t.fg(a,b,c,!1,e)
return t},
y4:function(a){var t,s
t=W.zp(null)
s=window.location
t=new W.i9(new W.rj(t,s))
t.fi(a)
return t},
Hx:function(a,b,c,d){return!0},
Hy:function(a,b,c,d){var t,s,r,q,p
t=d.geI()
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
y7:function(){var t=P.y
t=new W.rw(P.jH(C.p,t),P.a2(null,null,null,t),P.a2(null,null,null,t),P.a2(null,null,null,t),null)
t.fk(null,new H.ew(C.p,new W.rx(),[H.N(C.p,0),null]),["TEMPLATE"],null)
return t},
HV:function(a){var t
if(!!J.aC(a).$iseg)return a
t=new P.kh([],[],!1)
t.c=!0
return t.b7(a)},
I3:function(a){var t=$.aB
if(t===C.e)return a
return t.hg(a,!0)},
IL:function(a){return document.querySelector(a)},
b0:function b0(){},
ed:function ed(){},
kO:function kO(){},
eW:function eW(){},
cN:function cN(){},
kW:function kW(){},
h2:function h2(){},
h5:function h5(){},
l_:function l_(){},
eY:function eY(){},
eZ:function eZ(){},
fT:function fT(){},
ef:function ef(){},
ld:function ld(){},
iq:function iq(){},
fX:function fX(){},
lj:function lj(){},
lk:function lk(){},
fY:function fY(){},
fZ:function fZ(){},
ll:function ll(){},
bK:function bK(){},
f1:function f1(){},
iU:function iU(){},
qr:function qr(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
qs:function qs(){},
is:function is(){},
lm:function lm(){},
ln:function ln(){},
ls:function ls(){},
f2:function f2(){},
it:function it(){},
eg:function eg(){},
iv:function iv(){},
iw:function iw(){},
lv:function lv(){},
ix:function ix(){},
iy:function iy(){},
iV:function iV(){},
je:function je(){},
iz:function iz(){},
iA:function iA(){},
kn:function kn(a,$ti){this.a=a
this.$ti=$ti},
c7:function c7(){},
rW:function rW(){},
lB:function lB(){},
h1:function h1(){},
lH:function lH(){},
T:function T(){},
aR:function aR(){},
m7:function m7(){},
ci:function ci(){},
f9:function f9(){},
iW:function iW(){},
jf:function jf(){},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
mc:function mc(){},
md:function md(){},
iQ:function iQ(){},
cp:function cp(){},
mp:function mp(){},
fb:function fb(){},
iX:function iX(){},
jg:function jg(){},
iS:function iS(){},
e2:function e2(){},
ms:function ms(){},
mt:function mt(a,b){this.a=a
this.b=b},
hj:function hj(){},
mx:function mx(){},
hk:function hk(){},
eo:function eo(){},
mD:function mD(){},
n1:function n1(){},
n3:function n3(){},
ht:function ht(){},
hu:function hu(){},
nj:function nj(){},
no:function no(){},
hC:function hC(){},
jJ:function jJ(){},
nu:function nu(){},
nv:function nv(){},
nw:function nw(){},
nx:function nx(){},
ny:function ny(){},
hD:function hD(){},
cr:function cr(){},
jK:function jK(){},
j6:function j6(){},
jq:function jq(){},
nM:function nM(){},
nN:function nN(){},
d3:function d3(a){this.a=a},
as:function as(){},
jN:function jN(){},
hK:function hK(){},
j7:function j7(){},
jr:function jr(){},
nS:function nS(){},
nT:function nT(){},
nX:function nX(){},
nZ:function nZ(){},
o2:function o2(){},
o4:function o4(){},
e5:function e5(){},
o9:function o9(){},
ck:function ck(){},
jW:function jW(){},
j8:function j8(){},
js:function js(){},
of:function of(){},
oi:function oi(){},
k_:function k_(){},
k0:function k0(){},
fq:function fq(){},
k1:function k1(){},
oD:function oD(){},
oG:function oG(){},
oH:function oH(){},
oI:function oI(){},
cs:function cs(){},
k3:function k3(){},
h3:function h3(){},
h6:function h6(){},
oM:function oM(){},
hR:function hR(){},
ct:function ct(){},
k4:function k4(){},
j9:function j9(){},
jt:function jt(){},
fr:function fr(){},
oP:function oP(){},
cm:function cm(){},
oQ:function oQ(){},
oR:function oR(){},
oW:function oW(){},
pi:function pi(){},
cn:function cn(){},
e8:function e8(){},
k7:function k7(){},
po:function po(){},
pp:function pp(){},
hW:function hW(){},
pu:function pu(){},
cT:function cT(){},
cL:function cL(){},
px:function px(){},
ja:function ja(){},
ju:function ju(){},
py:function py(){},
h4:function h4(){},
h7:function h7(){},
pC:function pC(){},
cv:function cv(){},
k8:function k8(){},
jb:function jb(){},
jv:function jv(){},
fu:function fu(){},
k9:function k9(){},
e9:function e9(){},
ka:function ka(){},
pT:function pT(){},
pX:function pX(){},
fv:function fv(){},
kb:function kb(){},
q1:function q1(){},
ke:function ke(){},
q8:function q8(){},
eM:function eM(){},
fw:function fw(){},
qq:function qq(){},
i3:function i3(){},
jc:function jc(){},
jw:function jw(){},
kk:function kk(){},
jd:function jd(){},
jx:function jx(){},
qz:function qz(){},
qA:function qA(){},
kp:function kp(){},
iY:function iY(){},
jh:function jh(){},
qV:function qV(){},
ic:function ic(){},
iZ:function iZ(){},
ji:function ji(){},
rk:function rk(){},
ks:function ks(){},
j_:function j_(){},
jj:function jj(){},
ku:function ku(){},
j0:function j0(){},
jk:function jk(){},
rG:function rG(){},
rH:function rH(){},
qm:function qm(){},
i4:function i4(a){this.a=a},
kl:function kl(a){this.a=a},
qt:function qt(a,b){this.a=a
this.b=b},
qu:function qu(a,b){this.a=a
this.b=b},
qB:function qB(a){this.a=a},
qE:function qE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
i5:function i5(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qF:function qF(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qG:function qG(a){this.a=a},
i9:function i9(a){this.a=a},
bw:function bw(){},
jO:function jO(a){this.a=a},
nP:function nP(a){this.a=a},
nO:function nO(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){},
rl:function rl(){},
rm:function rm(){},
rw:function rw(e,a,b,c,d){var _=this
_.e=e
_.a=a
_.b=b
_.c=c
_.d=d},
rx:function rx(){},
rv:function rv(){},
iO:function iO(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
e4:function e4(){},
ry:function ry(){},
rj:function rj(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
rE:function rE(a){this.a=a}},T={
u8:function(a,b,c,d){var t
H.IS(a,"$isq",[P.D],"$asq")
t=new T.hl(a,null,d,b,null)
t.f8(a,b,c,d)
return t},
xp:function(a,b){return new T.o_(0,a,new Uint8Array(H.cC(b==null?32768:b)))},
Hn:function(a){var t=new T.qb(-1,0,0,0,0,null,null,"",[])
t.fc(a)
return t},
Ho:function(a,b){var t=new T.qc(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.fd(a,b)
return t},
fc:function(a){var t=new T.mu(null,0,2147483647)
t.f7(a)
return t},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
dg:function dg(a){this.a=a},
hl:function hl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o_:function o_(a,b,c){this.a=a
this.b=b
this.c=c},
qb:function qb(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
qc:function qc(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
qd:function qd(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
qa:function qa(a){this.a=a},
mu:function mu(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
l3:function l3(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
l5:function l5(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
lu:function lu(){},
mm:function mm(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
GJ:function(a,b,c,d,e){var t,s
t=[P.y]
s=H.a([],t)
t=new T.hO("Glitch",0.01,0.01,0.01,s,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.U]),null,null,b,c,d,e,!1,!1,!1,!1,!1,!1,Q.F(null,null,A.a_),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fR]),1)
t.a4(a,b,c,d,e)
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
Ae:function(a,b,c,d){var t,s,r,q
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
c.toString
s=H.cQ(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ai(s[q],8)
return t.b6(b)},
Ad:function(a,b,c,d){var t,s,r,q,p
t=H.cC(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;++q){p=r.ae(8)
if(q>=t)return H.w(s,q)
s[q]=p}return s},
Ac:function(a,b,c,d){var t,s,r,q,p
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
s=d.gcT()
r=C.f.ak(Math.log(H.kA(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cQ(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ai(q[p],r)
return t.b6(b)},
Ab:function(a,b,c,d){var t,s,r,q,p,o
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;++o){r=p.ae(q)
if(o>=t)return H.w(s,o)
s[o]=r}return s}},S={kM:function kM(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.b=b},ip:function ip(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mr:function mr(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},n2:function n2(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nm:function nm(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oC:function oC(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oO:function oO(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},fm:function fm(){},vt:function vt(){},vu:function vu(){},vv:function vv(){},tO:function tO(){},tR:function tR(){},tE:function tE(){},vd:function vd(){},vx:function vx(){},vy:function vy(){},l8:function l8(){},v3:function v3(){},uZ:function uZ(){},n8:function n8(){},tI:function tI(){},ty:function ty(){},lp:function lp(){},uM:function uM(){},lq:function lq(){},o3:function o3(){},vk:function vk(){},vh:function vh(){},vl:function vl(){},tx:function tx(){},mj:function mj(){},l6:function l6(){},tC:function tC(){},tB:function tB(){},v4:function v4(){},vm:function vm(){},v5:function v5(){},tQ:function tQ(){},tP:function tP(){},vj:function vj(){},vi:function vi(){},pz:function pz(){},vo:function vo(){},tF:function tF(){},tG:function tG(){},vw:function vw(){},hB:function hB(){},uR:function uR(){},uS:function uS(){},uT:function uT(){},uU:function uU(){},ve:function ve(){},vf:function vf(){},vg:function vg(){},uQ:function uQ(){},uW:function uW(){},uX:function uX(){},u4:function u4(){},u5:function u5(){},u6:function u6(){},uY:function uY(){},uV:function uV(){},tz:function tz(){},vq:function vq(){},vr:function vr(){},vp:function vp(){}},K={bW:function bW(a,b){this.a=a
this.b=b},n6:function n6(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},ox:function ox(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c}},L={
zr:function(a,b,c,d,e){var t,s,r
t=P.y
s=A.dY
r=P.D
r=new L.a8(P.p(null,null,null,t,s),P.p(null,null,null,r,s),P.p(null,null,null,t,r),P.p(null,null,null,r,t))
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
t=new L.fL(0.01,0.01,0.01,0.5,a,new H.t(0,null,null,null,null,null,0,[X.G,P.U]),null,"","",!1,b,null,c,d,e,!1,!1,!0,1,r,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Blank","Null","Boring","Error"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),P.f(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fR]),Q.F(null,null,A.a_))
t.a_(a,b,c,d,e)
return t},
d:function(a){if(C.c.ac(a,"#"))return A.wb(C.c.ad(a,1))
else return A.wb(a)},
fL:function fL(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l0:function l0(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
oz:function oz(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
pq:function pq(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2}},M={kR:function kR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fS:function fS(a,b){this.a=a
this.b=b},lo:function lo(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h9:function h9(){},bC:function bC(a,b){this.a=a
this.b=b},oS:function oS(a){this.a=a},q4:function q4(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},U={kV:function kV(){},nl:function nl(a){this.a=a},nW:function nW(a){this.a=a},pd:function pd(){},pe:function pe(a){this.a=a},pf:function pf(a){this.a=a},lx:function lx(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,ed,ee,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.ed=ed
_.ee=ee
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},m_:function m_(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nn:function nn(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nA:function nA(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},b:function b(a){this.a=a},W:function W(b,c,a){this.b=b
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
_.x=x},pA:function pA(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
Hm:function(a){if(J.cD(a).ac(a," "))return C.c.ad(a,1)
return a},
q5:function q5(a){this.a=a},
q6:function q6(a,b){this.a=a
this.b=b},
q7:function q7(a,b){this.a=a
this.b=b}},O={kX:function kX(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ca:function ca(){},dt:function dt(){},l1:function l1(a){this.a=a},eG:function eG(){},iB:function iB(){},
II:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.v2()
a=J.zg(a,P.dc("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.tn(t))
s=document
J.w_(s.querySelector("#navbar"),"beforeend",a,C.w,null)
if(J.bb(O.Ir("seerOfVoid",null),"true"))P.AJ(new O.to(),P.cR)
r=new P.dZ(Date.now(),!1)
if(H.v8(r)===4&&H.v7(r)===1)J.vX(s.querySelector("body")).h(0,"voidbody")
q=H.v8(r)
p=H.v7(r)
o=C.a.C(H.xs(r))
n=C.a.C(q)
m=C.a.C(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.jY(null,null)
k.d9(H.ez(l,null,null))
k.hV()
if($.Hc||k.a.cS()>0.99)H.kE(s.querySelector("#today"),"$ised").href=C.c.as("../",t)+"dead_index.html?seed="+l
else H.kE(s.querySelector("#today"),"$ised").href=C.c.as("../",t)+"index2.html?seed="+l},
Ir:function(a,b){var t,s,r,q
t=P.pP().gbC().n(0,a)
if(t!=null)t=P.rA(t,0,J.c0(t),C.n,!1)
if(t!=null)return t
s=$.yN
if(s.length!==0){r=J.zl(window.location.href,J.zc(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.xU(H.yP(s,q,"")+"?"+$.yN,0,null).gbC().n(0,a)}return},
IV:function(){var t,s,r,q
t=document
J.vX(t.querySelector("body")).h(0,"voidbody")
s=new W.kn(t.querySelectorAll(".void"),[null])
for(t=new H.eu(s,s.gm(s),0,null,[null]);t.I();){r=t.d
q=J.z2(J.tu(r))
if(q==="none"||q.length===0)O.IO(r)
else O.It(r)}},
IO:function(a){var t,s
if(a==null)return
t=J.b1(a)
s=t.gaC(a)
J.kK(s,!!t.$ishR?"inline":"block")},
It:function(a){if(a==null)return
J.kK(J.tu(a),"none")},
IP:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fG("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.ec(s,",")
if(!J.yX(r,a))window.localStorage.setItem(t,H.C(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.bO(q)
P.fG("Saving isn't possible....you don't have local storage")}},
tn:function tn(a){this.a=a},
to:function to(){},
tm:function tm(){},
d0:function d0(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={pv:function pv(a){this.a=a},ol:function ol(a){this.a=a},l7:function l7(a){this.a=a},mk:function mk(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ml:function ml(rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},nR:function nR(b,a){this.b=b
this.a=a},dO:function dO(a,b){this.a=a
this.b=b},af:function af(a,b){this.a=a
this.b=b},d5:function d5(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c2:function c2(c,d,e,f,a,b){var _=this
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
_.b=b},ir:function ir(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},d2:function d2(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},la:function la(c,a,b){this.c=c
this.a=a
this.b=b},by:function by(r,x,c,d,e,f,a,b){var _=this
_.r=r
_.x=x
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},jT:function jT(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},iP:function iP(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jV:function jV(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},ow:function ow(rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oy:function oy(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oJ:function oJ(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},pG:function pG(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},dN:function dN(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
nD:function(){var t=0,s=P.bk(),r,q
var $async$nD=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:P.fG("loading big bads")
r=$
q=J
t=2
return P.cf(A.ev("BigBadLists/bigBads.txt",!1,!1,null),$async$nD)
case 2:r.xo=q.ec(b,"\n")
return P.bo(null,s)}})
return P.bp($async$nD,s)},
Ic:function(a){var t,s,r,q,p,o
t=J.ec(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
o=J.b6(p)
r+=" "+(J.w3(o.n(p,0))+o.ad(p,1))}return r}},A={lc:function lc(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
j:function(a,b,c,d,e){var t=new A.a_(c,e,null,a,!1,P.a2(null,null,null,G.Y),0,3)
t.N(a,b,c,!1,e)
return t},
a_:function a_(a,b,c,d,e,f,r,x){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},
mT:function mT(){},
mS:function mS(){},
fR:function fR(){},
fV:function(a,b,c,d){var t=new A.dY(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.f6(a,b,c,d)
return t},
wa:function(a,b,c,d){var t=A.fV(0,0,0,255)
t.b=C.a.ag(C.d.ak(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.ag(C.d.ak(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.ag(C.d.ak(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.ag(C.d.ak(d*255),0,255)
return t},
A1:function(a,b){if(b){if(typeof a!=="number")return a.aM()
return A.fV((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aM()
return A.fV((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
wb:function(a){return A.A1(H.ez(a,16,new A.rZ()),a.length>=8)},
dY:function dY(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
rZ:function rZ(){},
xl:function(){if($.xj)return
$.xj=!0
Z.AA()},
ev:function(a,b,c,d){var t=0,s=P.bk(),r,q,p,o,n
var $async$ev=P.bq(function(e,f){if(e===1)return P.bn(f,s)
while(true)switch(t){case 0:A.xl()
t=$.$get$d_().Z(0,a)?3:5
break
case 3:q=$.$get$d_().n(0,a)
p=J.aC(q)
if(!!p.$isdN){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cE(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.C(J.vZ(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.uP==null?8:9
break
case 8:t=10
return P.cf(A.ni(),$async$ev)
case 10:case 9:n=$.uP.eM(a)
t=n!=null?11:12
break
case 11:t=13
return P.cf(A.nd(n),$async$ev)
case 13:if(!$.$get$d_().Z(0,a))$.$get$d_().i(0,a,new Y.dN(a,null,H.a([],[[P.f0,,]]),[null]))
r=$.$get$d_().n(0,a).b
t=1
break
case 12:case 7:r=A.G3(a,!1,d)
t=1
break
case 4:case 1:return P.bo(r,s)}})
return P.bp($async$ev,s)},
ni:function(){var t=0,s=P.bk(),r
var $async$ni=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cf(A.ev("manifest/manifest.txt",!1,!0,$.ww),$async$ni)
case 2:r.uP=b
return P.bo(null,s)}})
return P.bp($async$ni,s)},
G2:function(a){if(!$.$get$d_().Z(0,a))$.$get$d_().i(0,a,new Y.dN(a,null,H.a([],[[P.f0,,]]),[null]))
return $.$get$d_().n(0,a)},
G3:function(a,b,c){var t
if($.$get$d_().Z(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.wv(C.b.gbc(a.split("."))).a
t=A.G2(a)
c.b4(A.xi(a,!1)).b5(new A.ng(t))
return t.cE(0)},
nd:function(a){var t=0,s=P.bk(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$nd=P.bq(function(b,a0){if(b===1)return P.bn(a0,s)
while(true)switch(t){case 0:t=3
return P.cf(A.ev(a+".bundle",!1,!0,null),$async$nd)
case 3:q=a0
p=C.c.L(a,0,C.c.eo(a,$.$get$xk()))
o=P.cR
n=new P.dU(new P.bm(0,$.aB,null,[o]),[o])
m=H.a([],[P.co])
for(o=J.z3(q),l=o.length,k=[[P.f0,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bV)(o),++i){h=o[i]
g=J.b1(h)
f=Z.wv(C.b.gbc(J.ec(g.gK(h),"."))).a
e=p+"/"+H.C(g.gK(h))
if($.$get$d_().Z(0,e)){m.push(A.ev(e,!1,!1,null))
continue}d=H.kE(g.gbj(h),"$isde")
if(!$.$get$d_().Z(0,e))$.$get$d_().i(0,e,new Y.dN(e,null,H.a([],k),j))
c=$.$get$d_().n(0,e)
m.push(c.cE(0))
f.bb(d.buffer).b5(new A.ne(f,c))}P.AK(m,null,!1).b5(new A.nf(n))
r=n.a
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$nd,s)},
hx:function(a,b){var t=0,s=P.bk(),r,q,p,o,n
var $async$hx=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:if($.$get$uO().Z(0,a)){r=$.$get$uO().n(0,a)
t=1
break}q=W.fq
p=new P.bm(0,$.aB,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.fx(n,"load",new A.nh(new P.dU(p,[q]),n),!1,W.T)
n.src=A.xi(a,!1)
r=p
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$hx,s)},
xi:function(a,b){if(C.c.ac(a,"/")){a=C.c.ad(a,1)
b=!0}else b=!1
if(b)return H.C(window.location.protocol)+"//"+H.C(window.location.host)+"/"+a
return C.c.as("../",N.v2())+a},
ng:function ng(a){this.a=a},
ne:function ne(a,b){this.a=a
this.b=b},
nf:function nf(a){this.a=a},
nh:function nh(a,b){this.a=a
this.b=b},
o1:function o1(){},
jR:function jR(){},
jY:function jY(a,b){this.a=a
this.b=b},
t5:function(){var t=0,s=P.bk(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$t5=P.bq(function(a0,a1){if(a0===1)return P.bn(a1,s)
while(true)switch(t){case 0:if($.yx){t=1
break}$.yx=!0
D.Hh()
q=P.y
p=[q]
o=H.a(["metal"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.E=o
o=H.a(["dutton"],p)
n=$.ab
H.a([],p)
o=new G.bI(n,o,0.6)
$.$get$c().h(0,o)
$.wL=o
o=H.a(["ceramic"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bQ=o
o=H.a(["bone"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.2)
$.$get$c().h(0,o)
$.be=o
o=H.a(["wood"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.X=o
o=H.a(["plastic"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.aM=o
o=H.a(["rubber"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.cc=o
o=H.a(["paper"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.L=o
o=H.a(["cloth","fabric"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.P=o
o=H.a(["glass"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.b9=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.3)
$.$get$c().h(0,o)
$.bY=o
o=H.a(["flesh","meat","muscle"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bl=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.H
H.a([],p)
o=new G.bI(n,o,3.1)
$.$get$c().h(0,o)
$.bt=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.cj=o
o=H.a(["plant","leaf","vine"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.b4=o
o=H.a(["feathery"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,-0.1)
$.$get$c().h(0,o)
$.bA=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.I
H.a([],p)
o=new G.bI(n,o,0.1)
$.$get$c().h(0,o)
$.bS=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.I
H.a([],p)
o=new G.bI(n,o,-13)
$.$get$c().h(0,o)
$.bR=o
o=H.a(["stone","rock","concrete"],p)
n=$.x
H.a([],p)
o=new G.bI(n,o,0.3)
$.$get$c().h(0,o)
$.aI=o
o=H.a(["legendary"],p)
n=$.mR
H.a([],p)
o=new G.bI(n,o,13)
$.$get$c().h(0,o)
$.a0=o
o=H.a(["Unbeatable"],p)
n=$.mR
H.a([],p)
o=new G.bI(n,o,40.37)
$.$get$c().h(0,o)
$.FJ=o
o=$.I
H.a([],p)
o=new G.aW(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$c().h(0,o)
$.aH=o
o=$.uA
H.a([],p)
o=new G.aW(o,["glowing","bright","illuminated"],0.1)
$.$get$c().h(0,o)
$.b3=o
o=$.uA
H.a([],p)
o=new G.aW(o,["obscuring","dark","shadowy"],0.1)
$.$get$c().h(0,o)
$.ay=o
o=$.I
H.a([],p)
o=new G.aW(o,["calming","pale","placating","shooshing"],0.1)
$.$get$c().h(0,o)
$.br=o
o=$.H
H.a([],p)
o=new G.aW(o,["nuclear","radioactive","irradiated"],1)
$.$get$c().h(0,o)
$.c3=o
o=$.I
H.a([],p)
o=new G.aW(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$c().h(0,o)
$.bc=o
o=$.I
H.a([],p)
o=new G.aW(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$c().h(0,o)
$.bZ=o
o=$.I
H.a([],p)
o=new G.aW(o,["doomed","cursed","unlucky"],-0.3)
$.$get$c().h(0,o)
$.aP=o
o=$.H
H.a([],p)
o=new G.aW(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$c().h(0,o)
$.aY=o
o=$.r
H.a([],p)
o=new G.aW(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$c().h(0,o)
$.bu=o
o=$.r
H.a([],p)
o=new G.aW(o,["electrical","zap","lightning","shock"],0.6)
$.$get$c().h(0,o)
$.a7=o
o=$.r
H.a([],p)
o=new G.aW(o,["restraining","imprisoning","restricting"],0.3)
$.$get$c().h(0,o)
$.bh=o
o=$.I
H.a([],p)
o=new G.aW(o,["expensive","valuable","bling","money"],0.1)
$.$get$c().h(0,o)
$.bi=o
o=$.I
H.a([],p)
o=new G.aW(o,["edible","tasty","delicious","savory"],0.1)
$.$get$c().h(0,o)
$.aD=o
o=$.I
H.a([],p)
o=new G.aW(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$c().h(0,o)
$.ax=o
o=$.I
H.a([],p)
o=new G.aW(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$c().h(0,o)
$.aA=o
o=$.I
H.a([],p)
o=new G.aW(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$c().h(0,o)
$.Z=o
o=$.H
H.a([],p)
o=new G.aW(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$c().h(0,o)
$.aF=o
o=$.I
H.a([],p)
o=new G.aW(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$c().h(0,o)
$.aN=o
o=$.I
H.a([],p)
o=new G.aW(o,["funny","hilarious","comedy"],0.1)
$.$get$c().h(0,o)
$.b8=o
o=$.I
H.a([],p)
o=new G.aW(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$c().h(0,o)
$.bx=o
o=$.I
H.a([],p)
o=new G.aW(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$c().h(0,o)
$.a3=o
o=$.mR
H.a([],p)
o=new G.aW(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$c().h(0,o)
$.R=o
o=$.mR
H.a([],p)
o=new G.aW(o,["class-related","appropriate","themed"],1.3)
$.$get$c().h(0,o)
$.O=o
o=$.I
H.a([],p)
o=new G.aW(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$c().h(0,o)
$.aJ=o
o=$.r
H.a([],p)
o=new G.aW(o,["healing","regenerating","recovery","life"],0.3)
$.$get$c().h(0,o)
$.aX=o
o=$.I
H.a([],p)
o=new G.aW(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$c().h(0,o)
$.aS=o
o=$.I
H.a([],p)
o=new G.aW(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$c().h(0,o)
$.b7=o
o=$.I
H.a([],p)
o=new G.aW(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$c().h(0,o)
$.bM=o
o=$.I
H.a([],p)
o=new G.aW(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$c().h(0,o)
$.bs=o
o=$.I
H.a([],p)
o=new G.aW(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$c().h(0,o)
$.cb=o
o=$.I
H.a([],p)
o=new G.aW(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$c().h(0,o)
$.aE=o
o=$.I
H.a([],p)
o=new G.aW(o,["blunt","bludgeoning","dull"],0.3)
$.$get$c().h(0,o)
$.ac=o
o=$.r
H.a([],p)
o=new G.aW(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$c().h(0,o)
$.aZ=o
o=$.I
H.a([],p)
o=new G.aW(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$c().h(0,o)
$.aa=o
o=$.I
H.a([],p)
o=new G.aW(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$c().h(0,o)
$.aU=o
o=$.I
H.a([],p)
o=new G.aW(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$c().h(0,o)
$.aT=o
o=$.I
H.a([],p)
o=new G.aW(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$c().h(0,o)
$.ba=o
o=H.a(["perfectly generic"],p)
n=$.I
H.a([],p)
o=new G.at(n,o,0.1)
$.$get$c().h(0,o)
$.fe=o
o=H.a(["a sword"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.fg=o
o=H.a(["a hammer"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.um=o
o=H.a(["a rifle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uv=o
o=H.a(["a pistol"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.us=o
o=H.a(["a blade"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wE=o
o=H.a(["a dagger"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uh=o
o=H.a(["a santa"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ho=o
o=H.a(["a fist"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wN=o
o=H.a(["claws"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mJ=o
o=H.a(["a grenade"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mK=o
o=H.a(["a freaking safe"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x2=o
o=H.a(["a ball"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ep=o
o=H.a(["a trident"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.xb=o
o=H.a(["a card"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mI=o
o=H.a(["a frying pan"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uj=o
o=H.a(["a pillow"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.e3=o
o=H.a(["a machinegun"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uo=o
o=H.a(["a shuriken"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x6=o
o=H.a(["a sling"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x9=o
o=H.a(["a yoyo"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.xd=o
o=H.a(["a cane"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wG=o
o=H.a(["a shield"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ff=o
o=H.a(["a lance"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wX=o
o=H.a(["a ax"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ua=o
o=H.a(["a sign"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x1=o
o=H.a(["a book"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.aG=o
o=H.a(["a broom"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jy=o
o=H.a(["a club"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jA=o
o=H.a(["a bow"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ud=o
o=H.a(["a whip"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.xc=o
o=H.a(["a staff"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.xa=o
o=H.a(["a needle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uq=o
o=H.a(["dice"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ui=o
o=H.a(["a fork"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wO=o
o=H.a(["a pigeon???"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,1.3)
$.$get$c().h(0,o)
$.ur=o
o=H.a(["a chainsaw"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wH=o
o=H.a(["a sickle"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x7=o
o=H.a(["a shotgun"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x4=o
o=H.a(["a stick"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.dj=o
o=H.a(["a chain"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.hn=o
o=H.a(["a wrench"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uy=o
o=H.a(["a shovel"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x5=o
o=H.a(["a rolling pin"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ux=o
o=H.a(["a puppet"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.ut=o
o=H.a(["a razor"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.uu=o
o=H.a(["a pen"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.mN=o
o=H.a(["a bust"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.jz=o
o=H.a(["a bowling ball"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.Bo=o
o=H.a(["a golf club"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wQ=o
o=H.a(["a knife"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.wW=o
o=H.a(["scissors"],p)
n=$.a4
H.a([],p)
o=new G.at(n,o,0.4)
$.$get$c().h(0,o)
$.x3=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.H
m=G.Y
l=[m]
k=H.a([$.E,$.aH,$.aY],l)
H.a([],p)
o=new G.e("Forged",k,n,o,0)
$.$get$c().h(0,o)
$.CG=o
o=H.a([],p)
n=$.x
k=H.a([$.ac,$.aH],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Cc=o
o=H.a(["fossilized"],p)
n=$.H
k=H.a([$.be,$.aI],l)
H.a([],p)
o=new G.e("Fossilized",k,n,o,0)
$.$get$c().h(0,o)
$.CH=o
o=H.a(["adamantium"],p)
n=$.H
k=H.a([$.be,$.E],l)
H.a([],p)
o=new G.e("Adamantium",k,n,o,0)
$.$get$c().h(0,o)
$.wD=o
o=H.a([],p)
n=$.x
k=H.a([$.b7,$.aS],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Fi=o
o=H.a(["tatami"],p)
n=$.x
k=H.a([$.P,$.X],l)
H.a([],p)
o=new G.e("Tatami",k,n,o,0)
$.$get$c().h(0,o)
$.Fx=o
o=H.a(["mesh","chain link"],p)
n=$.x
k=H.a([$.P,$.E],l)
H.a([],p)
o=new G.e("Mesh",k,n,o,0)
$.$get$c().h(0,o)
$.DG=o
o=H.a(["foil"],p)
n=$.x
k=H.a([$.L,$.E],l)
H.a([],p)
o=new G.e("Foil",k,n,o,0)
$.$get$c().h(0,o)
$.CC=o
o=H.a(["beanbag"],p)
n=$.x
k=H.a([$.P,$.aI],l)
H.a([],p)
o=new G.e("Beanbag",k,n,o,0)
$.$get$c().h(0,o)
$.Bk=o
o=H.a(["pleather","faux fur"],p)
n=$.x
k=H.a([$.cj,$.aM],l)
H.a([],p)
o=new G.e("Faux Fur",k,n,o,0)
$.$get$c().h(0,o)
$.Eg=o
o=H.a(["plywood"],p)
n=$.x
k=H.a([$.X,$.L],l)
H.a([],p)
o=new G.e("Plywood",k,n,o,0)
$.$get$c().h(0,o)
$.jB=o
o=H.a(["colossus"],p)
n=$.x
k=H.a([$.E,$.bl],l)
H.a([],p)
o=new G.e("Colossus",k,n,o,0)
$.$get$c().h(0,o)
$.wI=o
o=H.a(["rotting","zombie"],p)
n=$.H
k=H.a([$.bS,$.bl],l)
H.a([],p)
o=new G.e("Rotting",k,n,o,0)
$.$get$c().h(0,o)
$.EG=o
o=H.a(["draugr","white walker"],p)
n=$.H
k=H.a([$.bS,$.bl,$.bs],l)
H.a([],p)
o=new G.e("Draugr",k,n,o,0)
$.$get$c().h(0,o)
$.C9=o
o=H.a(["Ultraviolet"],p)
n=$.uz
k=H.a([$.b3,$.ay],l)
H.a([],p)
o=new G.e("Ultraviolet",k,n,o,0)
$.$get$c().h(0,o)
$.Dp=o
o=H.a(["Ultraviolence"],p)
n=$.r
k=H.a([$.b3,$.ay,$.aH],l)
H.a([],p)
o=new G.e("Ultraviolence",k,n,o,0)
$.$get$c().h(0,o)
$.FI=o
o=H.a([],p)
n=$.r
k=H.a([$.aP,$.bZ],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.C7=o
o=H.a(["candy"],p)
n=$.x
k=H.a([$.aD,$.b9],l)
H.a([],p)
o=new G.e("Candy",k,n,o,0)
$.$get$c().h(0,o)
$.ue=o
o=H.a(["cotton candy"],p)
n=$.x
k=H.a([$.aD,$.P],l)
H.a([],p)
o=new G.e("Cotton Candy",k,n,o,0)
$.$get$c().h(0,o)
$.BT=o
o=H.a(["gummy"],p)
n=$.x
k=H.a([$.aD,$.cc],l)
H.a([],p)
o=new G.e("Gum",k,n,o,0)
$.$get$c().h(0,o)
$.CT=o
o=H.a(["marrow"],p)
n=$.x
k=H.a([$.aD,$.be],l)
H.a([],p)
o=new G.e("Marrow",k,n,o,0)
$.$get$c().h(0,o)
$.Dz=o
o=H.a(["toothy"],p)
n=$.a4
k=H.a([$.be,$.bQ],l)
H.a([],p)
o=new G.e("Toothy",k,n,o,0)
$.$get$c().h(0,o)
$.FF=o
o=H.a(["Frost"],p)
n=$.x
k=H.a([$.aI,$.b9,$.bl],l)
H.a([],p)
o=new G.e("Frost",k,n,o,0)
$.$get$c().h(0,o)
$.CI=o
o=H.a(["arsenic","antifreeze"],p)
n=$.r
k=H.a([$.aD,$.bM],l)
H.a([],p)
o=new G.e("Arsenic",k,n,o,0)
$.$get$c().h(0,o)
$.Cg=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.x
k=H.a([$.aI,$.b9],l)
H.a([],p)
o=new G.e("Crystal",k,n,o,0)
$.$get$c().h(0,o)
$.ug=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.I
k=H.a([$.aJ,$.aN,$.b8,$.Z,$.ax,$.bZ,$.a3],l)
H.a([],p)
o=new G.e("Mary Sue",k,n,o,0)
$.$get$c().h(0,o)
$.DA=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.I
k=H.a([$.bc,$.ay,$.aH,$.a0,$.aP,$.Z,$.ax,$.aA],l)
H.a([],p)
o=new G.e("Edge Lord",k,n,o,0)
$.$get$c().h(0,o)
$.Ce=o
o=H.a(["deadpool"],p)
n=$.a4
k=H.a([$.bS,$.aX,$.aA,$.b8],l)
H.a([],p)
o=new G.e("Deadpool",k,n,o,0)
$.$get$c().h(0,o)
$.BZ=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.I
k=H.a([$.bc,$.aA],l)
H.a([],p)
o=new G.e("Spoopy",k,n,o,0)
$.$get$c().h(0,o)
$.Fl=o
o=H.a(["wolverine"],p)
n=$.a4
k=H.a([$.be,$.aH,$.aY],l)
H.a([],p)
o=new G.e("Wolverine",k,n,o,0)
$.$get$c().h(0,o)
$.FU=o
o=H.a(["rabbit's foot"],p)
n=$.a4
k=H.a([$.bZ,$.cj],l)
H.a([],p)
o=new G.e("Rabbit's Foot",k,n,o,0)
$.$get$c().h(0,o)
$.x0=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.H
k=H.a([$.aY,$.X],l)
H.a([],p)
o=new G.e("Tipped",k,n,o,0)
$.$get$c().h(0,o)
$.Bd=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a4
k=H.a([$.aY,$.aZ,$.X],l)
H.a([],p)
o=new G.e("Arrow",k,n,o,0)
$.$get$c().h(0,o)
$.u9=o
o=H.a(["training sword","bokken"],p)
n=$.a4
k=H.a([$.X,$.aH],l)
H.a([],p)
o=new G.e("Bokken",k,n,o,0)
$.$get$c().h(0,o)
$.Di=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.aT,$.aA],l)
H.a([],p)
o=new G.e("Irony Type1",k,n,o,0)
$.$get$c().h(0,o)
$.un=o
o=H.a(["netted","webbed"],p)
n=$.a4
k=H.a([$.bh,$.P],l)
H.a([],p)
o=new G.e("Netted",k,n,o,0)
$.$get$c().h(0,o)
$.DV=o
o=H.a(["barbed wire"],p)
n=$.a4
k=H.a([$.aY,$.bh,$.E,$.P],l)
H.a([],p)
o=new G.e("Barbed Wire",k,n,o,0)
$.$get$c().h(0,o)
$.Bh=o
o=H.a(["morning star"],p)
n=$.a4
k=H.a([$.aY,$.ac],l)
H.a([],p)
o=new G.e("Morning Star",k,n,o,0)
$.$get$c().h(0,o)
$.DP=o
o=H.a(["decadent"],p)
n=$.I
k=H.a([$.b7,$.bi],l)
H.a([],p)
o=new G.e("Decadent",k,n,o,0)
$.$get$c().h(0,o)
$.C1=o
o=H.a(["SBAHJ"],p)
n=$.r
k=H.a([$.bR,$.aA],l)
H.a([],p)
o=new G.e("SBAHJ",k,n,o,0)
$.$get$c().h(0,o)
$.EQ=o
o=H.a(["bayonet"],p)
n=$.a4
k=H.a([$.aY,$.aZ],l)
H.a([],p)
o=new G.e("Bayonet",k,n,o,0)
$.$get$c().h(0,o)
$.Bj=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.x
k=H.a([$.bs,$.aA,$.aH],l)
H.a([],p)
o=new G.e("Snoop",k,n,o,0)
$.$get$c().h(0,o)
$.Fh=o
o=H.a(["light saber"],p)
n=$.r
k=H.a([$.b3,$.aE,$.aH],l)
H.a([],p)
o=new G.e("Light Saber",k,n,o,0)
$.$get$c().h(0,o)
$.Do=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.I
k=H.a([$.a3,$.aT],l)
H.a([],p)
o=new G.e("Fakey Fake",k,n,o,0)
$.$get$c().h(0,o)
$.Cn=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.I
k=H.a([$.a3,$.ba],l)
H.a([],p)
o=new G.e("Real As Shit",k,n,o,0)
$.$get$c().h(0,o)
$.EA=o
o=H.a(["skeletal"],p)
n=$.a4
k=H.a([$.bc,$.aP,$.be],l)
H.a([],p)
o=new G.e("Skeletal",k,n,o,0)
$.$get$c().h(0,o)
$.Fb=o
o=H.a(["green sun"],p)
n=$.uA
k=H.a([$.aE,$.c3,$.b3],l)
H.a([],p)
o=new G.e("Green Sun",k,n,o,0)
$.$get$c().h(0,o)
$.ul=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.uz
k=H.a([$.ay,$.ax],l)
H.a([],p)
o=new G.e("Midnight",k,n,o,0)
$.$get$c().h(0,o)
$.DK=o
o=H.a(["radiant","dazzling"],p)
n=$.I
k=H.a([$.a3,$.b3],l)
H.a([],p)
o=new G.e("Radiant",k,n,o,0)
$.$get$c().h(0,o)
$.Ex=o
o=H.a(["edgy"],p)
n=$.I
k=H.a([$.aH,$.ay,$.aA],l)
H.a([],p)
o=new G.e("Edgy",k,n,o,0)
$.$get$c().h(0,o)
$.Cf=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.r
k=H.a([$.c3,$.bu],l)
H.a([],p)
o=new G.e("Warhead",k,n,o,0)
$.$get$c().h(0,o)
$.B6=o
o=H.a(["living"],p)
n=$.H
k=H.a([$.be,$.bl,$.aF],l)
H.a([],p)
o=new G.e("Living",k,n,o,0)
$.$get$c().h(0,o)
$.Ds=o
o=H.a(["dead","corpse","deceased"],p)
n=$.H
k=H.a([$.be,$.bl],l)
H.a([],p)
o=new G.e("Dead",k,n,o,0)
$.$get$c().h(0,o)
$.BY=o
o=H.a(["taser"],p)
n=$.r
k=H.a([$.a7,$.bh,$.aZ],l)
H.a([],p)
o=new G.e("Taser",k,n,o,0)
$.$get$c().h(0,o)
$.Fw=o
o=H.a(["nocturn"],p)
n=$.r
k=H.a([$.ay,$.aa],l)
H.a([],p)
o=new G.e("Nocturn",k,n,o,0)
$.$get$c().h(0,o)
$.DY=o
o=H.a(["dirge"],p)
n=$.r
k=H.a([$.aP,$.aa],l)
H.a([],p)
o=new G.e("Dirge",k,n,o,0)
$.$get$c().h(0,o)
$.C4=o
o=H.a(["Snobbish","Noble"],p)
n=$.I
k=H.a([$.ax,$.bi],l)
H.a([],p)
o=new G.e("Snobbish",k,n,o,0)
$.$get$c().h(0,o)
$.Fg=o
o=H.a(["flat"],p)
n=$.I
k=H.a([$.ac,$.aa],l)
H.a([],p)
o=new G.e("Flat(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.Cx=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.aH,$.aa],l)
H.a([],p)
o=new G.e("Sharp(Music)",k,n,o,0)
$.$get$c().h(0,o)
$.EZ=o
o=H.a(["sharp"],p)
n=$.I
k=H.a([$.ax,$.aa],l)
H.a([],p)
o=new G.e("Sharp(Clothes)",k,n,o,0)
$.$get$c().h(0,o)
$.EY=o
o=H.a(["Bach's"],p)
n=$.ab
k=H.a([$.Z,$.aa],l)
H.a([],p)
o=new G.e("Bach's",k,n,o,0)
$.$get$c().h(0,o)
$.Bf=o
o=H.a(["Mozart's"],p)
n=$.ab
k=H.a([$.a3,$.aa],l)
H.a([],p)
o=new G.e("Mozart's",k,n,o,0)
$.$get$c().h(0,o)
$.DR=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.ab
k=H.a([$.Z,$.c3],l)
H.a([],p)
o=new G.e("Einstein's",k,n,o,0)
$.$get$c().h(0,o)
$.Ch=o
o=H.a(["Feynman's"],p)
n=$.ab
k=H.a([$.Z,$.b8],l)
H.a([],p)
o=new G.e("Feynman's",k,n,o,0)
$.$get$c().h(0,o)
$.Cr=o
o=H.a(["Ziptie"],p)
n=$.ab
k=H.a([$.aM,$.bh],l)
H.a([],p)
o=new G.e("Ziptie",k,n,o,0)
$.$get$c().h(0,o)
$.FY=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.r
k=H.a([$.E,$.Z],l)
H.a([],p)
o=new G.e("Mobile",k,n,o,0)
$.$get$c().h(0,o)
$.hp=o
o=H.a(["Sassacre"],p)
n=$.ab
k=H.a([$.cb,$.b8],l)
H.a([],p)
o=new G.e("Sassacre",k,n,o,0)
$.$get$c().h(0,o)
$.EO=o
o=H.a(["Sledge"],p)
n=$.r
k=H.a([$.ac,$.cb],l)
H.a([],p)
o=new G.e("Sledge",k,n,o,0)
$.$get$c().h(0,o)
$.Fe=o
o=H.a(["Legal"],p)
n=$.r
k=H.a([$.bh,$.L],l)
H.a([],p)
o=new G.e("Legal",k,n,o,0)
$.$get$c().h(0,o)
$.mM=o
o=H.a(["Clown"],p)
n=$.r
k=H.a([$.b8,$.aU],l)
H.a([],p)
o=new G.e("Clown",k,n,o,0)
$.$get$c().h(0,o)
$.BN=o
o=H.a(["passionate"],p)
n=$.I
k=H.a([$.aE,$.aN],l)
H.a([],p)
o=new G.e("Passionate",k,n,o,0)
$.$get$c().h(0,o)
$.E7=o
o=H.a(["pinata"],p)
n=$.a4
k=H.a([$.L,$.aD],l)
H.a([],p)
o=new G.e("Pinata",k,n,o,0)
$.$get$c().h(0,o)
$.Eb=o
o=H.a(["anvil"],p)
n=$.r
k=H.a([$.ac,$.cb,$.E],l)
H.a([],p)
o=new G.e("Anvil",k,n,o,0)
$.$get$c().h(0,o)
$.Bc=o
o=H.a(["flashbang"],p)
n=$.r
k=H.a([$.b3,$.bu],l)
H.a([],p)
o=new G.e("Flashbang",k,n,o,0)
$.$get$c().h(0,o)
$.Cw=o
o=H.a(["smokebomb"],p)
n=$.r
k=H.a([$.ay,$.bu],l)
H.a([],p)
o=new G.e("Smokebomb",k,n,o,0)
$.$get$c().h(0,o)
$.Ff=o
o=H.a(["ninja"],p)
n=$.r
k=H.a([$.ay,$.aH],l)
H.a([],p)
o=new G.e("Ninja",k,n,o,0)
$.$get$c().h(0,o)
$.DX=o
o=H.a(["techno"],p)
n=$.r
k=H.a([$.a7,$.aa],l)
H.a([],p)
o=new G.e("Techno",k,n,o,0)
$.$get$c().h(0,o)
$.Fz=o
o=H.a(["rock and roll"],p)
n=$.r
k=H.a([$.aI,$.aa],l)
H.a([],p)
o=new G.e("Rock And/Or Roll",k,n,o,0)
$.$get$c().h(0,o)
$.EC=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a4
k=H.a([$.aF,$.bl,$.aZ],l)
H.a([],p)
o=new G.e("Pistol Shrimp",k,n,o,0)
$.$get$c().h(0,o)
$.Ec=o
o=H.a(["juggalo"],p)
n=$.r
k=H.a([$.b8,$.aa,$.aU,$.bc],l)
H.a([],p)
o=new G.e("Juggalo",k,n,o,0)
$.$get$c().h(0,o)
$.wV=o
o=H.a(["shocksauce"],p)
n=$.I
k=H.a([$.aA,$.a7],l)
H.a([],p)
o=new G.e("Shock Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.F1=o
o=H.a(["weaksauce"],p)
n=$.I
k=H.a([$.ac,$.aA,$.bR],l)
H.a([],p)
o=new G.e("Weak Sauce",k,n,o,0)
$.$get$c().h(0,o)
$.FO=o
o=H.a(["spicy","picante"],p)
n=$.I
k=H.a([$.aE,$.aD],l)
H.a([],p)
o=new G.e("Spicy",k,n,o,0)
$.$get$c().h(0,o)
$.Fk=o
o=H.a(["ice cream","popsicle"],p)
n=$.x
k=H.a([$.bs,$.aD],l)
H.a([],p)
o=new G.e("Popsicle",k,n,o,0)
$.$get$c().h(0,o)
$.D5=o
o=H.a(["popsickle"],p)
n=$.x
k=H.a([$.bs,$.aD,$.aH],l)
H.a([],p)
o=new G.e("Popsickle",k,n,o,0)
$.$get$c().h(0,o)
$.Eo=o
o=H.a(["icepick"],p)
n=$.x
k=H.a([$.bs,$.aY],l)
H.a([],p)
o=new G.e("Icepick",k,n,o,0)
$.$get$c().h(0,o)
$.D6=o
o=H.a(["schezwan"],p)
n=$.I
k=H.a([$.aA,$.aD],l)
H.a([],p)
o=new G.e("Schezwan",k,n,o,0)
$.$get$c().h(0,o)
$.ER=o
o=H.a(["vaporwave"],p)
n=$.r
k=H.a([$.ay,$.aa,$.aA,$.a7],l)
H.a([],p)
o=new G.e("Vaporwave",k,n,o,0)
$.$get$c().h(0,o)
$.FM=o
o=H.a(["mallet"],p)
n=$.a4
k=H.a([$.X,$.ac],l)
H.a([],p)
o=new G.e("Mallet",k,n,o,0)
$.$get$c().h(0,o)
$.Dy=o
o=H.a(["fidget"],p)
n=$.r
k=H.a([$.aM,$.aA],l)
H.a([],p)
o=new G.e("Fidget",k,n,o,0)
$.$get$c().h(0,o)
$.Ct=o
o=H.a(["gold foil"],p)
n=$.x
k=H.a([$.E,$.L,$.bi],l)
H.a([],p)
o=new G.e("Gold Foil",k,n,o,0)
$.$get$c().h(0,o)
$.CQ=o
o=H.a(["caviar"],p)
n=$.x
k=H.a([$.aD,$.bi],l)
H.a([],p)
o=new G.e("Caviar",k,n,o,0)
$.$get$c().h(0,o)
$.BE=o
o=H.a(["RADioactive"],p)
n=$.I
k=H.a([$.c3,$.aA],l)
H.a([],p)
o=new G.e("RADioactive",k,n,o,0)
$.$get$c().h(0,o)
$.Ey=o
o=H.a(["glam"],p)
n=$.I
k=H.a([$.aI,$.aa,$.aJ],l)
H.a([],p)
o=new G.e("Glam",k,n,o,0)
$.$get$c().h(0,o)
$.CO=o
o=H.a(["hair metal"],p)
n=$.I
k=H.a([$.E,$.aa,$.aJ],l)
H.a([],p)
o=new G.e("Hair Metal",k,n,o,0)
$.$get$c().h(0,o)
$.CV=o
o=H.a(["elven","fae","sylvan"],p)
n=$.I
k=H.a([$.a3,$.aJ],l)
H.a([],p)
o=new G.e("Elven",k,n,o,0)
$.$get$c().h(0,o)
$.Cj=o
o=H.a(["shiny"],p)
n=$.I
k=H.a([$.E,$.aJ],l)
H.a([],p)
o=new G.e("Shiny",k,n,o,0)
$.$get$c().h(0,o)
$.F0=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.I
k=H.a([$.bi,$.aJ,$.ax],l)
H.a([],p)
o=new G.e("Bespoke",k,n,o,0)
$.$get$c().h(0,o)
$.fd=o
o=H.a(["operatic"],p)
n=$.I
k=H.a([$.bi,$.aa,$.ax],l)
H.a([],p)
o=new G.e("Operatic",k,n,o,0)
$.$get$c().h(0,o)
$.E1=o
o=H.a(["ice","diamond"],p)
n=$.x
k=H.a([$.bi,$.bs],l)
H.a([],p)
o=new G.e("Diamond",k,n,o,0)
$.$get$c().h(0,o)
$.wT=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.I
k=H.a([$.aE,$.bs],l)
H.a([],p)
o=new G.e("Icy Hot",k,n,o,0)
$.$get$c().h(0,o)
$.D7=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.I
k=H.a([$.aA,$.bs],l)
H.a([],p)
o=new G.e("Cold As Fuck",k,n,o,0)
$.$get$c().h(0,o)
$.wU=o
o=H.a(["winter's","season's"],p)
n=$.ab
k=H.a([$.br,$.bs],l)
H.a([],p)
o=new G.e("Winter's",k,n,o,0)
$.$get$c().h(0,o)
$.FR=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.ab
k=H.a([$.a3,$.bs],l)
H.a([],p)
o=new G.e("Christmas",k,n,o,0)
$.$get$c().h(0,o)
$.BJ=o
o=H.a(["Santa Saws"],p)
n=$.ab
k=H.a([$.a3,$.bs,$.aH],l)
H.a([],p)
o=new G.e("Santa Saws",k,n,o,0)
$.$get$c().h(0,o)
$.EM=o
o=H.a(["Santa Sleighs"],p)
n=$.ab
k=H.a([$.ho,$.aH],l)
H.a([],p)
o=new G.e("Santa Sleighs",k,n,o,0)
$.$get$c().h(0,o)
$.EN=o
o=H.a(["Santa Claws"],p)
n=$.ab
k=H.a([$.ho,$.mJ],l)
H.a([],p)
o=new G.e("Santa Claws",k,n,o,0)
$.$get$c().h(0,o)
$.EL=o
o=H.a(["Sandy Claws"],p)
n=$.ab
k=H.a([$.ho,$.mJ,$.aI],l)
H.a([],p)
o=new G.e("Sandy Claws",k,n,o,0)
$.$get$c().h(0,o)
$.EK=o
o=H.a(["Silent Night"],p)
n=$.ab
k=H.a([$.ho,$.ay],l)
H.a([],p)
o=new G.e("Silent Night",k,n,o,0)
$.$get$c().h(0,o)
$.F7=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.ab
k=H.a([$.bc,$.bY],l)
H.a([],p)
o=new G.e("Ghost's",k,n,o,0)
$.$get$c().h(0,o)
$.CW=o
o=H.a(["ghoul","mutant"],p)
n=$.x
k=H.a([$.bl,$.c3,$.bS],l)
H.a([],p)
o=new G.e("Mutant",k,n,o,0)
$.$get$c().h(0,o)
$.DS=o
o=H.a(["skate","skateboard"],p)
n=$.r
k=H.a([$.aA,$.E],l)
H.a([],p)
o=new G.e("Skateboard",k,n,o,0)
$.$get$c().h(0,o)
$.Fa=o
o=H.a(["microwave"],p)
n=$.r
k=H.a([$.c3,$.a7,$.aD],l)
H.a([],p)
o=new G.e("Microwave",k,n,o,0)
$.$get$c().h(0,o)
$.DJ=o
o=H.a(["orbital"],p)
n=$.r
k=H.a([$.c3,$.a7,$.aD,$.aZ],l)
H.a([],p)
o=new G.e("Orbital",k,n,o,0)
$.$get$c().h(0,o)
$.E2=o
o=H.a([],p)
n=$.r
k=H.a([$.ac,$.Z],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.wK=o
o=H.a(["uranium"],p)
n=$.x
k=H.a([$.c3,$.aI],l)
H.a([],p)
o=new G.e("Uranium",k,n,o,0)
$.$get$c().h(0,o)
$.FL=o
o=H.a(["mousepad","jar opener"],p)
n=$.r
k=H.a([$.L,$.cc],l)
H.a([],p)
o=new G.e("Mousepad",k,n,o,0)
$.$get$c().h(0,o)
$.DQ=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aH,$.aI],l)
H.a([],p)
o=new G.e("Sharpened Flint",k,n,o,0)
$.$get$c().h(0,o)
$.Cz=o
o=H.a(["flint"],p)
n=$.x
k=H.a([$.aY,$.aI],l)
H.a([],p)
o=new G.e("Pointed Flint",k,n,o,0)
$.$get$c().h(0,o)
$.CA=o
o=H.a(["picnic"],p)
n=$.r
k=H.a([$.aM,$.aY],l)
H.a([],p)
o=new G.e("Picnic",k,n,o,0)
$.$get$c().h(0,o)
$.Ea=o
o=H.a(["xtreme xplosion"],p)
n=$.I
k=H.a([$.aA,$.bu],l)
H.a([],p)
o=new G.e("Xtreme Xplosion",k,n,o,0)
$.$get$c().h(0,o)
$.FX=o
o=H.a(["lawn"],p)
n=$.r
k=H.a([$.aM,$.b7],l)
H.a([],p)
o=new G.e("Lawn",k,n,o,0)
$.$get$c().h(0,o)
$.Dm=o
o=H.a(["upholstered"],p)
n=$.x
k=H.a([$.P,$.b7],l)
H.a([],p)
o=new G.e("Upholstered",k,n,o,0)
$.$get$c().h(0,o)
$.FK=o
o=H.a(["leather"],p)
n=$.x
k=H.a([$.bl,$.b7],l)
H.a([],p)
o=new G.e("Leather",k,n,o,0)
$.$get$c().h(0,o)
$.wZ=o
o=H.a(["shag"],p)
n=$.x
k=H.a([$.cj,$.b7],l)
H.a([],p)
o=new G.e("Shag",k,n,o,0)
$.$get$c().h(0,o)
$.EX=o
o=H.a(["loyal"],p)
n=$.I
k=H.a([$.ac,$.aN],l)
H.a([],p)
o=new G.e("Loyal",k,n,o,0)
$.$get$c().h(0,o)
$.Dw=o
o=H.a(["porcelain"],p)
n=$.x
k=H.a([$.aJ,$.bQ],l)
H.a([],p)
o=new G.e("Porcelain",k,n,o,0)
$.$get$c().h(0,o)
$.mP=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a4
k=H.a([$.bi,$.bQ],l)
H.a([],p)
o=new G.e("Pork Hollow",k,n,o,0)
$.$get$c().h(0,o)
$.Eq=o
o=H.a(["n1nj4","katana"],p)
n=$.r
k=H.a([$.aA,$.aH],l)
H.a([],p)
o=new G.e("Katana",k,n,o,0)
$.$get$c().h(0,o)
$.Dg=o
o=H.a(["chocolate"],p)
n=$.x
k=H.a([$.aN,$.aD],l)
H.a([],p)
o=new G.e("Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.BI=o
o=H.a(["wrapped chocolate"],p)
n=$.x
k=H.a([$.aN,$.aD,$.L,$.E],l)
H.a([],p)
o=new G.e("Wrapped Chocolate",k,n,o,0)
$.$get$c().h(0,o)
$.CD=o
o=H.a(["scratch-n-sniff"],p)
n=$.x
k=H.a([$.aA,$.L],l)
H.a([],p)
o=new G.e("Scratch-n-sniff",k,n,o,0)
$.$get$c().h(0,o)
$.ET=o
o=H.a(["mythril","orichalcum"],p)
n=$.x
k=H.a([$.a3,$.E],l)
H.a([],p)
o=new G.e("Mythril",k,n,o,0)
$.$get$c().h(0,o)
$.DT=o
o=H.a(["titanium","steel"],p)
n=$.x
k=H.a([$.ac,$.E],l)
H.a([],p)
o=new G.e("Titanium",k,n,o,0)
$.$get$c().h(0,o)
$.FE=o
o=H.a(["lead"],p)
n=$.x
k=H.a([$.cb,$.E],l)
H.a([],p)
o=new G.e("Lead",k,n,o,0)
$.$get$c().h(0,o)
$.wY=o
o=H.a(["satire","parody","onion"],p)
n=$.r
k=H.a([$.aT,$.b8],l)
H.a([],p)
o=new G.e("Satire",k,n,o,0)
$.$get$c().h(0,o)
$.E0=o
o=H.a(["comedy gold"],p)
n=$.I
k=H.a([$.bi,$.b8],l)
H.a([],p)
o=new G.e("Comedy Gold",k,n,o,0)
$.$get$c().h(0,o)
$.BP=o
o=H.a(["dry","sensible chuckle"],p)
n=$.I
k=H.a([$.ax,$.b8],l)
H.a([],p)
o=new G.e("Dry",k,n,o,0)
$.$get$c().h(0,o)
$.Ca=o
o=H.a(["polite"],p)
n=$.I
k=H.a([$.b7,$.aT],l)
H.a([],p)
o=new G.e("Polite",k,n,o,0)
$.$get$c().h(0,o)
$.Em=o
o=H.a(["stradivarius"],p)
n=$.ab
k=H.a([$.ax,$.bi,$.X,$.aa],l)
H.a([],p)
o=new G.e("Stradivarius",k,n,o,0)
$.$get$c().h(0,o)
$.Fr=o
o=H.a(["scientistic"],p)
n=$.I
k=H.a([$.Z,$.aT],l)
H.a([],p)
o=new G.e("Scientistic",k,n,o,0)
$.$get$c().h(0,o)
$.ES=o
o=H.a(["AI"],p)
n=$.r
k=H.a([$.a7,$.aF],l)
H.a([],p)
o=new G.e("AI",k,n,o,0)
$.$get$c().h(0,o)
$.mH=o
o=H.a(["robotic"],p)
n=$.H
k=H.a([$.E,$.a7,$.aF],l)
H.a([],p)
o=new G.e("Robotic",k,n,o,0)
$.$get$c().h(0,o)
$.uw=o
o=H.a(["shrapnel"],p)
n=$.r
k=H.a([$.X,$.bu],l)
H.a([],p)
o=new G.e("Shrapnel",k,n,o,0)
$.$get$c().h(0,o)
$.F3=o
o=H.a(["vocaloid"],p)
n=$.r
k=H.a([$.aF,$.a7,$.aa],l)
H.a([],p)
o=new G.e("Vocaloid",k,n,o,0)
$.$get$c().h(0,o)
$.FN=o
o=H.a(["*Hyun-ae"],p)
n=$.ab
k=H.a([$.aF,$.a7,$.aN],l)
H.a([],p)
o=new G.e("*Hyun-ae",k,n,o,0)
$.$get$c().h(0,o)
$.D4=o
o=H.a(["buckshot"],p)
n=$.r
k=H.a([$.X,$.aZ],l)
H.a([],p)
o=new G.e("Buckshot",k,n,o,0)
$.$get$c().h(0,o)
$.Bs=o
o=H.a(["cannon"],p)
n=$.r
k=H.a([$.cb,$.aZ],l)
H.a([],p)
o=new G.e("Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.BB=o
o=H.a(["stationary"],p)
n=$.r
k=H.a([$.ax,$.L],l)
H.a([],p)
o=new G.e("Stationary",k,n,o,0)
$.$get$c().h(0,o)
$.Fp=o
o=H.a([],p)
n=$.r
k=H.a([$.aG,$.L],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.E4=o
o=H.a([],p)
n=$.r
k=H.a([$.E,$.aZ],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.DH=o
o=H.a(["papercut"],p)
n=$.r
k=H.a([$.aH,$.L],l)
H.a([],p)
o=new G.e("Papercut",k,n,o,0)
$.$get$c().h(0,o)
$.E5=o
o=H.a(["squeaky"],p)
n=$.H
k=H.a([$.ac,$.cc],l)
H.a([],p)
o=new G.e("Squeaky",k,n,o,0)
$.$get$c().h(0,o)
$.Fm=o
o=H.a(["kazoo"],p)
n=$.r
k=H.a([$.aT,$.aa],l)
H.a([],p)
o=new G.e("Kazoo",k,n,o,0)
$.$get$c().h(0,o)
$.Dh=o
o=H.a(["bandaid"],p)
n=$.r
k=H.a([$.aX,$.L],l)
H.a([],p)
o=new G.e("Bandaid",k,n,o,0)
$.$get$c().h(0,o)
$.Bg=o
o=H.a(["gushers"],p)
n=$.r
k=H.a([$.aX,$.aD],l)
H.a([],p)
o=new G.e("Gushers",k,n,o,0)
$.$get$c().h(0,o)
$.CU=o
o=H.a(["medic"],p)
n=$.r
k=H.a([$.aX,$.aZ],l)
H.a([],p)
o=new G.e("Medic",k,n,o,0)
$.$get$c().h(0,o)
$.DF=o
o=H.a(["sick nasty","ill"],p)
n=$.H
k=H.a([$.aA,$.bM],l)
H.a([],p)
o=new G.e("Sick Nasty",k,n,o,0)
$.$get$c().h(0,o)
$.F5=o
o=H.a(["gilded","gold leaf"],p)
n=$.x
k=H.a([$.E,$.X],l)
H.a([],p)
o=new G.e("Gilded",k,n,o,0)
$.$get$c().h(0,o)
$.CN=o
o=H.a(["charging","power cord"],p)
n=$.r
k=H.a([$.aM,$.a7],l)
H.a([],p)
o=new G.e("Charging",k,n,o,0)
$.$get$c().h(0,o)
$.BH=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.cc,$.aH],l)
H.a([],p)
o=new G.e("Rubber Safety",k,n,o,0)
$.$get$c().h(0,o)
$.EI=o
o=H.a(["safety"],p)
n=$.r
k=H.a([$.aM,$.aH],l)
H.a([],p)
o=new G.e("Plastic Safety",k,n,o,0)
$.$get$c().h(0,o)
$.EJ=o
o=H.a(["thunderous","thor's"],p)
n=$.I
k=H.a([$.aU,$.a7],l)
H.a([],p)
o=new G.e("Thunderous",k,n,o,0)
$.$get$c().h(0,o)
$.FC=o
o=H.a(["screeching","dial up"],p)
n=$.I
k=H.a([$.aU,$.a7,$.Z],l)
H.a([],p)
o=new G.e("Screeching",k,n,o,0)
$.$get$c().h(0,o)
$.EV=o
o=H.a(["mirrored","reflective"],p)
n=$.r
k=H.a([$.b9,$.E],l)
H.a([],p)
o=new G.e("Mirrored",k,n,o,0)
$.$get$c().h(0,o)
$.up=o
o=H.a(["far seeing","sighted"],p)
n=$.r
k=H.a([$.b9,$.aI,$.a3],l)
H.a([],p)
o=new G.e("Far Seeing",k,n,o,0)
$.$get$c().h(0,o)
$.wJ=o
o=H.a(["disabling","non lethal"],p)
n=$.r
k=H.a([$.cc,$.aZ],l)
H.a([],p)
o=new G.e("Nonlethal",k,n,o,0)
$.$get$c().h(0,o)
$.C5=o
o=H.a(["fashionable"],p)
n=$.r
k=H.a([$.aJ,$.ax],l)
H.a([],p)
o=new G.e("Fashionable",k,n,o,0)
$.$get$c().h(0,o)
$.wM=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.b8,$.aA],l)
H.a([],p)
o=new G.e("Ironic Type 2",k,n,o,0)
$.$get$c().h(0,o)
$.Db=o
o=H.a(["ironic"],p)
n=$.I
k=H.a([$.bR,$.b8],l)
H.a([],p)
o=new G.e("Ironic Type 3",k,n,o,0)
$.$get$c().h(0,o)
$.mL=o
o=H.a(["post-ironic"],p)
n=$.I
k=H.a([$.aT,$.aA,$.ax],l)
H.a([],p)
o=new G.e("Post Ironic",k,n,o,0)
$.$get$c().h(0,o)
$.Es=o
o=H.a(["monstrous"],p)
n=$.I
k=H.a([$.bS,$.aU,$.bc],l)
H.a([],p)
o=new G.e("Monstrous",k,n,o,0)
$.$get$c().h(0,o)
$.DO=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.r
k=H.a([$.aZ,$.aA,$.ax],l)
H.a([],p)
o=new G.e("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$c().h(0,o)
$.EE=o
o=H.a(["golden"],p)
n=$.x
k=H.a([$.E,$.bi],l)
H.a([],p)
o=new G.e("Golden",k,n,o,0)
$.$get$c().h(0,o)
$.uk=o
o=H.a(["platinum"],p)
n=$.x
k=H.a([$.b3,$.E],l)
H.a([],p)
o=new G.e("Platinum",k,n,o,0)
$.$get$c().h(0,o)
$.mO=o
o=H.a(["horseshoe"],p)
n=$.r
k=H.a([$.bZ,$.E],l)
H.a([],p)
o=new G.e("Horseshoe",k,n,o,0)
$.$get$c().h(0,o)
$.wS=o
o=H.a(["felt"],p)
n=$.r
k=H.a([$.P,$.cj],l)
H.a([],p)
o=new G.e("Felt",k,n,o,0)
$.$get$c().h(0,o)
$.Cp=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aI,$.ax],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.x_=o
o=H.a(["marble"],p)
n=$.x
k=H.a([$.aI,$.cb],l)
H.a([],p)
o=new G.e("Marble",k,n,o,0)
$.$get$c().h(0,o)
$.CS=o
o=H.a(["glitched"],p)
n=$.H
k=H.a([$.bt,$.a7],l)
H.a([],p)
o=new G.e("Glitched",k,n,o,0)
$.$get$c().h(0,o)
$.wP=o
o=H.a(["debugging"],p)
n=$.r
k=H.a([$.aX,$.a7],l)
H.a([],p)
o=new G.e("Debugging",k,n,o,0)
$.$get$c().h(0,o)
$.C0=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.r
k=H.a([$.E,$.aU,$.aa],l)
H.a([],p)
o=new G.e("Metalic",k,n,o,0)
$.$get$c().h(0,o)
$.DI=o
o=H.a(["Simulacrum"],p)
n=$.I
k=H.a([$.aF,$.aT],l)
H.a([],p)
o=new G.e("Simulacrum",k,n,o,0)
$.$get$c().h(0,o)
$.F9=o
o=H.a(["Imitation"],p)
n=$.r
k=H.a([$.aD,$.aT],l)
H.a([],p)
o=new G.e("Imitation",k,n,o,0)
$.$get$c().h(0,o)
$.D8=o
o=H.a(["Placebo"],p)
n=$.r
k=H.a([$.aX,$.aT],l)
H.a([],p)
o=new G.e("Placebo",k,n,o,0)
$.$get$c().h(0,o)
$.Ee=o
o=H.a(["counterfeit"],p)
n=$.r
k=H.a([$.bi,$.aT],l)
H.a([],p)
o=new G.e("Counterfeit",k,n,o,0)
$.$get$c().h(0,o)
$.BU=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.aA,$.aS,$.b8],l)
H.a([],p)
o=new G.e("Surreal1",k,n,o,0)
$.$get$c().h(0,o)
$.Ft=o
o=H.a(["Brainy"],p)
n=$.I
k=H.a([$.Z,$.bl],l)
H.a([],p)
o=new G.e("Brainy",k,n,o,0)
$.$get$c().h(0,o)
$.Bp=o
o=H.a(["Incendiary"],p)
n=$.r
k=H.a([$.aE,$.bu],l)
H.a([],p)
o=new G.e("Incendiary",k,n,o,0)
$.$get$c().h(0,o)
$.D9=o
o=H.a(["C-4"],p)
n=$.x
k=H.a([$.bu,$.aM],l)
H.a([],p)
o=new G.e("C-4",k,n,o,0)
$.$get$c().h(0,o)
$.Bw=o
o=H.a(["fae"],p)
n=$.r
k=H.a([$.a3,$.b3,$.bt],l)
H.a([],p)
o=new G.e("Fae",k,n,o,0)
$.$get$c().h(0,o)
$.Cm=o
o=H.a(["Plutonium"],p)
n=$.x
k=H.a([$.E,$.c3],l)
H.a([],p)
o=new G.e("Plutonium",k,n,o,0)
$.$get$c().h(0,o)
$.Ei=o
o=H.a(["Lithium"],p)
n=$.x
k=H.a([$.E,$.a7],l)
H.a([],p)
o=new G.e("Lithium",k,n,o,0)
$.$get$c().h(0,o)
$.Dr=o
o=H.a(["Molten"],p)
n=$.x
k=H.a([$.E,$.aE],l)
H.a([],p)
o=new G.e("Molten",k,n,o,0)
$.$get$c().h(0,o)
$.DN=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.x
k=H.a([$.aI,$.aE],l)
H.a([],p)
o=new G.e("Magma",k,n,o,0)
$.$get$c().h(0,o)
$.Dx=o
o=H.a(["Rusty"],p)
n=$.H
k=H.a([$.E,$.bR],l)
H.a([],p)
o=new G.e("Rusty",k,n,o,0)
$.$get$c().h(0,o)
$.EH=o
o=H.a(["Fonzie"],p)
n=$.r
k=H.a([$.aH,$.aA,$.ax],l)
H.a([],p)
o=new G.e("Fonzie",k,n,o,0)
$.$get$c().h(0,o)
$.CE=o
o=H.a(["Romcom"],p)
n=$.r
k=H.a([$.aN,$.b8],l)
H.a([],p)
o=new G.e("Romcom",k,n,o,0)
$.$get$c().h(0,o)
$.ED=o
o=H.a(["Alluring"],p)
n=$.r
k=H.a([$.aJ,$.b3],l)
H.a([],p)
o=new G.e("Alluring",k,n,o,0)
$.$get$c().h(0,o)
$.B9=o
o=H.a(["Masquerade"],p)
n=$.r
k=H.a([$.aJ,$.ay],l)
H.a([],p)
o=new G.e("Masquerade",k,n,o,0)
$.$get$c().h(0,o)
$.DB=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.r
k=H.a([$.aI,$.bl],l)
H.a([],p)
o=new G.e("Stoneskin",k,n,o,0)
$.$get$c().h(0,o)
$.Fq=o
o=H.a(["Psionic"],p)
n=$.r
k=H.a([$.a3,$.Z],l)
H.a([],p)
o=new G.e("Psionic",k,n,o,0)
$.$get$c().h(0,o)
$.Ev=o
o=H.a(["Dwarven"],p)
n=$.r
k=H.a([$.a3,$.aI],l)
H.a([],p)
o=new G.e("Dwarven",k,n,o,0)
$.$get$c().h(0,o)
$.Cd=o
o=H.a(["Elemental","Animated"],p)
n=$.x
k=H.a([$.a3,$.aF],l)
H.a([],p)
o=new G.e("Elemental",k,n,o,0)
$.$get$c().h(0,o)
$.Ci=o
o=H.a(["Gourmet"],p)
n=$.I
k=H.a([$.aD,$.ax],l)
H.a([],p)
o=new G.e("Gourmet",k,n,o,0)
$.$get$c().h(0,o)
$.CR=o
o=H.a(["Stained Glass"],p)
n=$.x
k=H.a([$.b9,$.aJ,$.bi],l)
H.a([],p)
o=new G.e("Stained Glass",k,n,o,0)
$.$get$c().h(0,o)
$.Fn=o
o=H.a(["Gauze"],p)
n=$.r
k=H.a([$.aX,$.P],l)
H.a([],p)
o=new G.e("Gauze",k,n,o,0)
$.$get$c().h(0,o)
$.CK=o
o=H.a(["Locked"],p)
n=$.H
k=H.a([$.bh,$.bx],l)
H.a([],p)
o=new G.e("Locked",k,n,o,0)
$.$get$c().h(0,o)
$.Dt=o
o=H.a(["Etched"],p)
n=$.r
k=H.a([$.aI,$.L],l)
H.a([],p)
o=new G.e("Etched",k,n,o,0)
$.$get$c().h(0,o)
$.Cl=o
o=H.a(["Papyrus"],p)
n=$.x
k=H.a([$.L,$.b4],l)
H.a([],p)
o=new G.e("Papyrus",k,n,o,0)
$.$get$c().h(0,o)
$.E6=o
o=H.a(["film"],p)
n=$.r
k=H.a([$.L,$.aM],l)
H.a([],p)
o=new G.e("Film",k,n,o,0)
$.$get$c().h(0,o)
$.Cu=o
o=H.a(["Saucey"],p)
n=$.x
k=H.a([$.bt,$.bx,$.bS],l)
H.a([],p)
o=new G.e("Saucey",k,n,o,0)
$.$get$c().h(0,o)
$.EP=o
o=H.a(["Lottery"],p)
n=$.r
k=H.a([$.L,$.bZ],l)
H.a([],p)
o=new G.e("Lottery",k,n,o,0)
$.$get$c().h(0,o)
$.Dv=o
o=H.a(["Blindfolded"],p)
n=$.r
k=H.a([$.ay,$.P],l)
H.a([],p)
o=new G.e("Blindfolded",k,n,o,0)
$.$get$c().h(0,o)
$.wF=o
o=H.a(["Possessed"],p)
n=$.H
k=H.a([$.bY,$.bl],l)
H.a([],p)
o=new G.e("Possessed",k,n,o,0)
$.$get$c().h(0,o)
$.Er=o
o=H.a(["Infernal"],p)
n=$.I
k=H.a([$.bY,$.aE],l)
H.a([],p)
o=new G.e("Infernal",k,n,o,0)
$.$get$c().h(0,o)
$.Da=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.r
k=H.a([$.X,$.ba,$.ut,$.aF],l)
H.a([],p)
o=new G.e("Geppetto",k,n,o,0)
$.$get$c().h(0,o)
$.CL=o
o=H.a(["Abominable"],p)
n=$.I
k=H.a([$.bl,$.bt],l)
H.a([],p)
o=new G.e("Abominable",k,n,o,0)
$.$get$c().h(0,o)
$.B7=o
o=H.a(["Ashen"],p)
n=$.r
k=H.a([$.aN,$.aP],l)
H.a([],p)
o=new G.e("Ashen",k,n,o,0)
$.$get$c().h(0,o)
$.Be=o
o=H.a(["Pale"],p)
n=$.r
k=H.a([$.aN,$.br],l)
H.a([],p)
o=new G.e("Pale",k,n,o,0)
$.$get$c().h(0,o)
$.E3=o
o=H.a(["Pitch"],p)
n=$.r
k=H.a([$.aN,$.bx],l)
H.a([],p)
o=new G.e("Pitch",k,n,o,0)
$.$get$c().h(0,o)
$.Ed=o
o=H.a(["Lit"],p)
n=$.I
k=H.a([$.aA,$.aE],l)
H.a([],p)
o=new G.e("Lit",k,n,o,0)
$.$get$c().h(0,o)
$.Dq=o
o=H.a(["Hypnotizing"],p)
n=$.r
k=H.a([$.a3,$.br],l)
H.a([],p)
o=new G.e("Hypnotizing",k,n,o,0)
$.$get$c().h(0,o)
$.D2=o
o=H.a(["Tranquilizing"],p)
n=$.r
k=H.a([$.br,$.bh],l)
H.a([],p)
o=new G.e("Tranquilizing",k,n,o,0)
$.$get$c().h(0,o)
$.FH=o
o=H.a([],p)
n=$.r
k=H.a([$.br,$.bx],l)
H.a([],p)
o=new G.e("",k,n,o,0)
$.$get$c().h(0,o)
$.Bz=o
o=H.a(["Ghost Rider's"],p)
n=$.ab
k=H.a([$.hn,$.aE,$.bY],l)
H.a([],p)
o=new G.e("Ghost Rider",k,n,o,0)
$.$get$c().h(0,o)
$.CM=o
o=H.a(["Logical"],p)
n=$.I
k=H.a([$.Z,$.bs],l)
H.a([],p)
o=new G.e("Logical",k,n,o,0)
$.$get$c().h(0,o)
$.Du=o
o=H.a(["Duelist's"],p)
n=$.ab
k=H.a([$.aZ,$.ax],l)
H.a([],p)
o=new G.e("Duelist's",k,n,o,0)
$.$get$c().h(0,o)
$.Cb=o
o=H.a(["Silenced"],p)
n=$.H
k=H.a([$.aZ,$.ay],l)
H.a([],p)
o=new G.e("Silenced",k,n,o,0)
$.$get$c().h(0,o)
$.x8=o
o=H.a(["Deudly"],p)
n=$.H
k=H.a([$.aZ,$.bR],l)
H.a([],p)
o=new G.e("Deudly",k,n,o,0)
$.$get$c().h(0,o)
$.C_=o
o=H.a(["Screaming"],p)
n=$.H
k=H.a([$.aU,$.bc],l)
H.a([],p)
o=new G.e("Screaming",k,n,o,0)
$.$get$c().h(0,o)
$.EU=o
o=H.a(["Cacophonous"],p)
n=$.I
k=H.a([$.bS,$.aa],l)
H.a([],p)
o=new G.e("Cacophonous",k,n,o,0)
$.$get$c().h(0,o)
$.Bx=o
o=H.a(["Sublime"],p)
n=$.I
k=H.a([$.bS,$.aJ],l)
H.a([],p)
o=new G.e("Sublime",k,n,o,0)
$.$get$c().h(0,o)
$.Fs=o
o=H.a(["Masterwork"],p)
n=$.x
k=H.a([$.ba,$.bi],l)
H.a([],p)
o=new G.e("Masterwork",k,n,o,0)
$.$get$c().h(0,o)
$.DD=o
o=H.a(["BroodFester"],p)
n=$.r
k=H.a([$.aF,$.bc,$.bt,$.a3],l)
H.a([],p)
o=new G.e("BroodFester",k,n,o,0)
$.$get$c().h(0,o)
$.Br=o
o=H.a(["[REDACTED]"],p)
n=$.r
k=H.a([$.bt,$.ay],l)
H.a([],p)
o=new G.e("[REDACTED]",k,n,o,0)
$.$get$c().h(0,o)
$.EB=o
o=H.a(["Pop Rocks"],p)
n=$.r
k=H.a([$.aD,$.bu],l)
H.a([],p)
o=new G.e("Pop Rocks",k,n,o,0)
$.$get$c().h(0,o)
$.En=o
o=H.a(["Disguised"],p)
n=$.H
k=H.a([$.ay,$.aT],l)
H.a([],p)
o=new G.e("Disguised",k,n,o,0)
$.$get$c().h(0,o)
$.C6=o
o=H.a(["Haunted"],p)
n=$.H
k=H.a([$.aS,$.bY],l)
H.a([],p)
o=new G.e("Haunted",k,n,o,0)
$.$get$c().h(0,o)
$.CX=o
o=H.a(["Cognitohazardous"],p)
n=$.H
k=H.a([$.bt,$.Z],l)
H.a([],p)
o=new G.e("Cognitohazardous",k,n,o,0)
$.$get$c().h(0,o)
$.BO=o
o=H.a(["Staticy"],p)
n=$.H
k=H.a([$.aS,$.a7],l)
H.a([],p)
o=new G.e("Staticy",k,n,o,0)
$.$get$c().h(0,o)
$.Fo=o
o=H.a(["Jadite"],p)
n=$.r
k=H.a([$.b9,$.c3],l)
H.a([],p)
o=new G.e("Jadite",k,n,o,0)
$.$get$c().h(0,o)
$.De=o
o=H.a(["Tickling"],p)
n=$.r
k=H.a([$.b8,$.aS],l)
H.a([],p)
o=new G.e("Tickling",k,n,o,0)
$.$get$c().h(0,o)
$.FD=o
o=H.a(["Composite"],p)
n=$.r
k=H.a([$.E,$.bQ],l)
H.a([],p)
o=new G.e("Composite",k,n,o,0)
$.$get$c().h(0,o)
$.BQ=o
o=H.a(["High-Powered"],p)
n=$.H
k=H.a([$.bu,$.aZ],l)
H.a([],p)
o=new G.e("High-Powered",k,n,o,0)
$.$get$c().h(0,o)
$.CY=o
o=H.a(["Concussive"],p)
n=$.r
k=H.a([$.bu,$.ac],l)
H.a([],p)
o=new G.e("Concussive",k,n,o,0)
$.$get$c().h(0,o)
$.BR=o
o=H.a(["Down"],p)
n=$.x
k=H.a([$.b7,$.bA],l)
H.a([],p)
o=new G.e("Down",k,n,o,0)
$.$get$c().h(0,o)
$.C8=o
o=H.a(["Prickly"],p)
n=$.x
k=H.a([$.aS,$.aY],l)
H.a([],p)
o=new G.e("Prickly",k,n,o,0)
$.$get$c().h(0,o)
$.Eu=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.r
k=H.a([$.aS,$.ay,$.a7],l)
H.a([],p)
o=new G.e("Deep-Web",k,n,o,0)
$.$get$c().h(0,o)
$.C2=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.x
k=H.a([$.aY,$.aH],l)
H.a([],p)
o=new G.e("Jagged",k,n,o,0)
$.$get$c().h(0,o)
$.Df=o
o=H.a(["Nanofiber"],p)
n=$.x
k=H.a([$.P,$.Z],l)
H.a([],p)
o=new G.e("Nanofiber",k,n,o,0)
$.$get$c().h(0,o)
$.DU=o
o=H.a(["Clanging"],p)
n=$.r
k=H.a([$.E,$.aU],l)
H.a([],p)
o=new G.e("Clanging",k,n,o,0)
$.$get$c().h(0,o)
$.BK=o
o=H.a(["Silver"],p)
n=$.x
k=H.a([$.E,$.ax],l)
H.a([],p)
o=new G.e("Silver",k,n,o,0)
$.$get$c().h(0,o)
$.F8=o
o=H.a(["Withered"],p)
n=$.H
k=H.a([$.aP,$.b4],l)
H.a([],p)
o=new G.e("Withered",k,n,o,0)
$.$get$c().h(0,o)
$.FT=o
o=H.a(["Shattered"],p)
n=$.H
k=H.a([$.b9,$.bR],l)
H.a([],p)
o=new G.e("Shattered",k,n,o,0)
$.$get$c().h(0,o)
$.F_=o
o=H.a(["Miner's"],p)
n=$.ab
k=H.a([$.aI,$.E],l)
H.a([],p)
o=new G.e("Miner's",k,n,o,0)
$.$get$c().h(0,o)
$.DL=o
o=H.a(["Singing"],p)
n=$.r
k=H.a([$.aa,$.aF],l)
H.a([],p)
o=new G.e("Singing",k,n,o,0)
$.$get$c().h(0,o)
$.F6=o
o=H.a(["Mitochondrial"],p)
n=$.r
k=H.a([$.bl,$.a7],l)
H.a([],p)
o=new G.e("Mitochondrial",k,n,o,0)
$.$get$c().h(0,o)
$.DM=o
o=H.a(["Blackout","EMP"],p)
n=$.r
k=H.a([$.ay,$.a7],l)
H.a([],p)
o=new G.e("Blackout",k,n,o,0)
$.$get$c().h(0,o)
$.Bm=o
o=H.a(["Asbestos"],p)
n=$.x
k=H.a([$.aI,$.bM],l)
H.a([],p)
o=new G.e("Asbestos",k,n,o,0)
$.$get$c().h(0,o)
$.B8=o
o=H.a(["Mercurial"],p)
n=$.x
k=H.a([$.bM,$.E],l)
H.a([],p)
o=new G.e("Mercurial",k,n,o,0)
$.$get$c().h(0,o)
$.DE=o
o=H.a(["Bulletproof"],p)
n=$.x
k=H.a([$.P,$.ac],l)
H.a([],p)
o=new G.e("Bulletproof",k,n,o,0)
$.$get$c().h(0,o)
$.Bu=o
o=H.a(["Cotton"],p)
n=$.x
k=H.a([$.b4,$.P],l)
H.a([],p)
o=new G.e("Cotton",k,n,o,0)
$.$get$c().h(0,o)
$.BS=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.r
k=H.a([$.bx,$.b3],l)
H.a([],p)
o=new G.e("Blinding",k,n,o,0)
$.$get$c().h(0,o)
$.Bn=o
o=H.a(["Brilliant"],p)
n=$.I
k=H.a([$.b3,$.Z],l)
H.a([],p)
o=new G.e("Brilliant",k,n,o,0)
$.$get$c().h(0,o)
$.Bq=o
o=H.a(["Offensive"],p)
n=$.I
k=H.a([$.bx,$.Z],l)
H.a([],p)
o=new G.e("Offensive",k,n,o,0)
$.$get$c().h(0,o)
$.E_=o
o=H.a(["Poached"],p)
n=$.H
k=H.a([$.bl,$.bi],l)
H.a([],p)
o=new G.e("Poached",k,n,o,0)
$.$get$c().h(0,o)
$.Ej=o
o=H.a(["Tapestry"],p)
n=$.x
k=H.a([$.P,$.aJ],l)
H.a([],p)
o=new G.e("Tapestry",k,n,o,0)
$.$get$c().h(0,o)
$.Fv=o
o=H.a(["Itchy"],p)
n=$.I
k=H.a([$.P,$.aS],l)
H.a([],p)
o=new G.e("Itchy",k,n,o,0)
$.$get$c().h(0,o)
$.Dc=o
o=H.a(["Wishbone"],p)
n=$.x
k=H.a([$.bZ,$.be],l)
H.a([],p)
o=new G.e("Wishbone",k,n,o,0)
$.$get$c().h(0,o)
$.FS=o
o=H.a(["Rattling"],p)
n=$.H
k=H.a([$.aU,$.be],l)
H.a([],p)
o=new G.e("Rattling",k,n,o,0)
$.$get$c().h(0,o)
$.Ez=o
o=H.a(["Cranial"],p)
n=$.x
k=H.a([$.Z,$.be],l)
H.a([],p)
o=new G.e("Cranial",k,n,o,0)
$.$get$c().h(0,o)
$.BW=o
o=H.a(["Humerus"],p)
n=$.x
k=H.a([$.b8,$.be],l)
H.a([],p)
o=new G.e("Humerus",k,n,o,0)
$.$get$c().h(0,o)
$.D0=o
o=H.a(["Massage"],p)
n=$.r
k=H.a([$.aX,$.b7],l)
H.a([],p)
o=new G.e("Massage",k,n,o,0)
$.$get$c().h(0,o)
$.DC=o
o=H.a(["Pestersome","Irksome"],p)
n=$.I
k=H.a([$.aU,$.bx],l)
H.a([],p)
o=new G.e("Pestersome",k,n,o,0)
$.$get$c().h(0,o)
$.E8=o
o=H.a(["Shockwave"],p)
n=$.r
k=H.a([$.aU,$.bu],l)
H.a([],p)
o=new G.e("Shockwave",k,n,o,0)
$.$get$c().h(0,o)
$.F2=o
o=H.a(["Antivenom"],p)
n=$.r
k=H.a([$.bM,$.aX],l)
H.a([],p)
o=new G.e("Antivenom",k,n,o,0)
$.$get$c().h(0,o)
$.Bb=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.x
k=H.a([$.aE,$.a3],l)
H.a([],p)
o=new G.e("Will O Wisp",k,n,o,0)
$.$get$c().h(0,o)
$.FP=o
o=H.a(["Fiberglass"],p)
n=$.x
k=H.a([$.P,$.b9],l)
H.a([],p)
o=new G.e("Fiberglass",k,n,o,0)
$.$get$c().h(0,o)
$.Cs=o
o=H.a(["Skull"],p)
n=$.x
k=H.a([$.be,$.bc],l)
H.a([],p)
o=new G.e("Skull",k,n,o,0)
$.$get$c().h(0,o)
$.Fc=o
o=H.a(["Enchanted"],p)
n=$.H
k=H.a([$.a3,$.bZ],l)
H.a([],p)
o=new G.e("Enchanted",k,n,o,0)
$.$get$c().h(0,o)
$.Ck=o
o=H.a(["Berserker's"],p)
n=$.ab
k=H.a([$.a3,$.bx],l)
H.a([],p)
o=new G.e("Berserker's",k,n,o,0)
$.$get$c().h(0,o)
$.Bl=o
o=H.a(["Clerical"],p)
n=$.ab
k=H.a([$.a3,$.aX],l)
H.a([],p)
o=new G.e("Clerical",k,n,o,0)
$.$get$c().h(0,o)
$.BL=o
o=H.a(["Cauterizing"],p)
n=$.r
k=H.a([$.aX,$.aE],l)
H.a([],p)
o=new G.e("Cauterizing",k,n,o,0)
$.$get$c().h(0,o)
$.BD=o
o=H.a(["X-Ray"],p)
n=$.r
k=H.a([$.c3,$.b3],l)
H.a([],p)
o=new G.e("X-Ray",k,n,o,0)
$.$get$c().h(0,o)
$.FW=o
o=H.a(["Clever"],p)
n=$.I
k=H.a([$.Z,$.bZ],l)
H.a([],p)
o=new G.e("Clever",k,n,o,0)
$.$get$c().h(0,o)
$.BM=o
o=H.a(["Fireplace"],p)
n=$.r
k=H.a([$.b7,$.aE],l)
H.a([],p)
o=new G.e("Fireplace",k,n,o,0)
$.$get$c().h(0,o)
$.Cv=o
o=H.a(["Crackling"],p)
n=$.H
k=H.a([$.aU,$.aE],l)
H.a([],p)
o=new G.e("Crackling",k,n,o,0)
$.$get$c().h(0,o)
$.BV=o
o=H.a(["Thumping"],p)
n=$.H
k=H.a([$.aU,$.cb],l)
H.a([],p)
o=new G.e("Thumping",k,n,o,0)
$.$get$c().h(0,o)
$.FB=o
o=H.a(["Shrieking","Banshee"],p)
n=$.H
k=H.a([$.bY,$.aU],l)
H.a([],p)
o=new G.e("Banshee",k,n,o,0)
$.$get$c().h(0,o)
$.F4=o
o=H.a(["Surreal"],p)
n=$.I
k=H.a([$.b8,$.bt],l)
H.a([],p)
o=new G.e("Surreal2",k,n,o,0)
$.$get$c().h(0,o)
$.Fu=o
o=H.a(["Aloe","Willowbark"],p)
n=$.r
k=H.a([$.aX,$.b4],l)
H.a([],p)
o=new G.e("Aloe",k,n,o,0)
$.$get$c().h(0,o)
$.Ba=o
o=H.a(["Rose"],p)
n=$.r
k=H.a([$.aN,$.b4],l)
H.a([],p)
o=new G.e("Rose",k,n,o,0)
$.$get$c().h(0,o)
$.EF=o
o=H.a(["Knock Knock"],p)
n=$.r
k=H.a([$.b8,$.ac],l)
H.a([],p)
o=new G.e("Knock Knock",k,n,o,0)
$.$get$c().h(0,o)
$.Dk=o
o=H.a(["Lifesteal"],p)
n=$.r
k=H.a([$.a3,$.bM],l)
H.a([],p)
o=new G.e("Lifesteal",k,n,o,0)
$.$get$c().h(0,o)
$.Dn=o
o=H.a(["Tragic"],p)
n=$.r
k=H.a([$.aJ,$.aP],l)
H.a([],p)
o=new G.e("Tragic",k,n,o,0)
$.$get$c().h(0,o)
$.FG=o
o=H.a(["Slapstick"],p)
n=$.r
k=H.a([$.aH,$.b8],l)
H.a([],p)
o=new G.e("Slapstick",k,n,o,0)
$.$get$c().h(0,o)
$.Fd=o
o=H.a(["Gross Out"],p)
n=$.r
k=H.a([$.bS,$.b8],l)
H.a([],p)
o=new G.e("Gross Out",k,n,o,0)
$.$get$c().h(0,o)
$.wR=o
o=H.a(["Flowery"],p)
n=$.x
k=H.a([$.aJ,$.b4],l)
H.a([],p)
o=new G.e("Flowery",k,n,o,0)
$.$get$c().h(0,o)
$.CB=o
o=H.a(["Poison Ivy"],p)
n=$.x
k=H.a([$.bM,$.b4],l)
H.a([],p)
o=new G.e("Poison Ivy",k,n,o,0)
$.$get$c().h(0,o)
$.El=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.H
k=H.a([$.a3,$.bA],l)
H.a([],p)
o=new G.e("Winged",k,n,o,0)
$.$get$c().h(0,o)
$.FQ=o
o=H.a(["Forbidden Fruit"],p)
n=$.r
k=H.a([$.b4,$.aD,$.aP],l)
H.a([],p)
o=new G.e("Forbidden Fruit",k,n,o,0)
$.$get$c().h(0,o)
$.CF=o
o=H.a(["Lawful"],p)
n=$.I
k=H.a([$.bh,$.aF],l)
H.a([],p)
o=new G.e("Lawful",k,n,o,0)
$.$get$c().h(0,o)
$.Dl=o
o=H.a(["Chaotic"],p)
n=$.I
k=H.a([$.bx,$.aF],l)
H.a([],p)
o=new G.e("Chaotic",k,n,o,0)
$.$get$c().h(0,o)
$.uf=o
o=H.a(["Hypothermic"],p)
n=$.H
k=H.a([$.aP,$.bs],l)
H.a([],p)
o=new G.e("Hypothermic",k,n,o,0)
$.$get$c().h(0,o)
$.D3=o
o=H.a(["Hyperthermic"],p)
n=$.H
k=H.a([$.aP,$.aE],l)
H.a([],p)
o=new G.e("Hyperthermic",k,n,o,0)
$.$get$c().h(0,o)
$.D1=o
o=H.a(["Shackled"],p)
n=$.H
k=H.a([$.bh,$.cb],l)
H.a([],p)
o=new G.e("Shackled",k,n,o,0)
$.$get$c().h(0,o)
$.EW=o
o=H.a(["Poetic"],p)
n=$.I
k=H.a([$.Z,$.aN],l)
H.a([],p)
o=new G.e("Poetic",k,n,o,0)
$.$get$c().h(0,o)
$.Ek=o
o=H.a(["Holographic"],p)
n=$.x
k=H.a([$.b3,$.Z,$.b9,$.a7],l)
H.a([],p)
o=new G.e("Holographic",k,n,o,0)
$.$get$c().h(0,o)
$.CZ=o
o=H.a(["Casket","Coffin"],p)
n=$.x
k=H.a([$.X,$.aP],l)
H.a([],p)
o=new G.e("Casket",k,n,o,0)
$.$get$c().h(0,o)
$.BC=o
o=H.a(["Spectral"],p)
n=$.x
k=H.a([$.bY,$.a3],l)
H.a([],p)
o=new G.e("Spectral",k,n,o,0)
$.$get$c().h(0,o)
$.Fj=o
o=H.a(["Phoenix"],p)
n=$.x
k=H.a([$.aE,$.bA],l)
H.a([],p)
o=new G.e("Phoenix",k,n,o,0)
$.$get$c().h(0,o)
$.E9=o
o=H.a(["Tattered"],p)
n=$.H
k=H.a([$.P,$.aP],l)
H.a([],p)
o=new G.e("Tattered",k,n,o,0)
$.$get$c().h(0,o)
$.Fy=o
o=H.a(["Woodwind","Reed"],p)
n=$.r
k=H.a([$.aa,$.X],l)
H.a([],p)
o=new G.e("Woodwind",k,n,o,0)
$.$get$c().h(0,o)
$.FV=o
o=H.a(["Bone Hurting"],p)
n=$.r
k=H.a([$.aS,$.be],l)
H.a([],p)
o=new G.e("Bone Hurting",k,n,o,0)
$.$get$c().h(0,o)
$.uc=o
o=H.a(["Bone Healing:"],p)
n=$.r
k=H.a([$.aX,$.be],l)
H.a([],p)
o=new G.e("Bone Healing:",k,n,o,0)
$.$get$c().h(0,o)
$.ub=o
o=H.a(["Calcium"],p)
n=$.x
k=H.a([$.be,$.aX,$.aD],l)
H.a([],p)
o=new G.e("Calcium",k,n,o,0)
$.$get$c().h(0,o)
$.By=o
o=H.a(["Fleece"],p)
n=$.x
k=H.a([$.P,$.aE],l)
H.a([],p)
o=new G.e("Fleece",k,n,o,0)
$.$get$c().h(0,o)
$.Cy=o
o=H.a(["Potted"],p)
n=$.x
k=H.a([$.bQ,$.b4],l)
H.a([],p)
o=new G.e("Potted",k,n,o,0)
$.$get$c().h(0,o)
$.Et=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.x
k=H.a([$.E,$.aD],l)
H.a([],p)
o=new G.e("Canned",k,n,o,0)
$.$get$c().h(0,o)
$.BA=o
o=H.a(["Diseased"],p)
n=$.H
k=H.a([$.aP,$.bl],l)
H.a([],p)
o=new G.e("Diseased",k,n,o,0)
$.$get$c().h(0,o)
$.C3=o
o=H.a(["Porcupine"],p)
n=$.x
k=H.a([$.aY,$.cj],l)
H.a([],p)
o=new G.e("Porcupine",k,n,o,0)
$.$get$c().h(0,o)
$.Ep=o
o=H.a(["Fanged"],p)
n=$.H
k=H.a([$.be,$.aY],l)
H.a([],p)
o=new G.e("Fanged",k,n,o,0)
$.$get$c().h(0,o)
$.Co=o
o=H.a(["Basalt"],p)
n=$.x
k=H.a([$.aI,$.ay],l)
H.a([],p)
o=new G.e("Basalt",k,n,o,0)
$.$get$c().h(0,o)
$.Bi=o
o=H.a(["Obsidian"],p)
n=$.x
k=H.a([$.b9,$.ay],l)
H.a([],p)
o=new G.e("Obsidian",k,n,o,0)
$.$get$c().h(0,o)
$.DZ=o
o=H.a(["Fenestrated"],p)
n=$.x
k=H.a([$.b9,$.X],l)
H.a([],p)
o=new G.e("Fenestrated",k,n,o,0)
$.$get$c().h(0,o)
$.Cq=o
o=H.a(["Plexiglass"],p)
n=$.x
k=H.a([$.b9,$.aM],l)
H.a([],p)
o=new G.e("Plexiglass",k,n,o,0)
$.$get$c().h(0,o)
$.Eh=o
o=H.a(["Ceramic Wrap"],p)
n=$.r
k=H.a([$.bQ,$.L],l)
H.a([],p)
o=new G.e("Ceramic Wrap",k,n,o,0)
$.$get$c().h(0,o)
$.BG=o
o=H.a(["Fungal"],p)
n=$.x
k=H.a([$.b4,$.bS],l)
H.a([],p)
o=new G.e("Fungal",k,n,o,0)
$.$get$c().h(0,o)
$.CJ=o
o=H.a(["Thorny"],p)
n=$.H
k=H.a([$.b4,$.aY],l)
H.a([],p)
o=new G.e("Thorny",k,n,o,0)
$.$get$c().h(0,o)
$.FA=o
o=H.a(["Bulbed"],p)
n=$.H
k=H.a([$.b4,$.ac],l)
H.a([],p)
o=new G.e("Bulbed",k,n,o,0)
$.$get$c().h(0,o)
$.Bt=o
o=H.a(["Glass Cannon"],p)
n=$.r
k=H.a([$.b9,$.aZ],l)
H.a([],p)
o=new G.e("Glass Cannon",k,n,o,0)
$.$get$c().h(0,o)
$.CP=o
o=H.a(["Caoutchouc"],p)
n=$.r
k=H.a([$.b4,$.cc],l)
H.a([],p)
o=new G.e("Caoutchouc",k,n,o,0)
$.$get$c().h(0,o)
$.Ef=o
o=H.a(["Cellulose"],p)
n=$.x
k=H.a([$.b4,$.aM],l)
H.a([],p)
o=new G.e("Cellulose",k,n,o,0)
$.$get$c().h(0,o)
$.BF=o
o=H.a(["Horrorcore"],p)
n=$.r
k=H.a([$.aa,$.bc],l)
H.a([],p)
o=new G.e("Horrorcore",k,n,o,0)
$.$get$c().h(0,o)
$.D_=o
o=H.a(["Nightcore"],p)
n=$.r
k=H.a([$.bt,$.aa],l)
H.a([],p)
o=new G.e("Nightcore",k,n,o,0)
$.$get$c().h(0,o)
$.DW=o
o=H.a(["Crazy Bus"],p)
n=$.r
k=H.a([$.bt,$.a7,$.aa],l)
H.a([],p)
o=new G.e("Crazy Bus",k,n,o,0)
$.$get$c().h(0,o)
$.BX=o
o=H.a(["Burdock"],p)
n=$.x
k=H.a([$.b4,$.cj],l)
H.a([],p)
o=new G.e("Burdock",k,n,o,0)
$.$get$c().h(0,o)
$.Bv=o
o=H.a(["Necrotic"],p)
n=$.H
k=H.a([$.be,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.x
k=H.a([$.be,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.H
k=H.a([$.be,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.r
k=H.a([$.be,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.x
k=H.a([$.be,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.r
k=H.a([$.be,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.I
k=H.a([$.X,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.x
k=H.a([$.X,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.x
k=H.a([$.X,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.H
k=H.a([$.X,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.x
k=H.a([$.X,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.x
k=H.a([$.X,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.r
k=H.a([$.X,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.x
k=H.a([$.X,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.r
k=H.a([$.X,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.r
k=H.a([$.X,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.ab
k=H.a([$.X,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.x
k=H.a([$.X,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.x
k=H.a([$.X,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.x
k=H.a([$.X,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.r
k=H.a([$.X,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.x
k=H.a([$.aM,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.r
k=H.a([$.L,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.x
k=H.a([$.L,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.r
k=H.a([$.L,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.r
k=H.a([$.P,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.x
k=H.a([$.aI,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.r
k=H.a([$.aI,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.x
k=H.a([$.aI,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.x
k=H.a([$.aI,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.x
k=H.a([$.aI,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.x
k=H.a([$.aI,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.x
k=H.a([$.aI,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.x
k=H.a([$.aI,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.H
k=H.a([$.aI,$.cj],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.H
k=H.a([$.Z,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.H
k=H.a([$.P,$.bl],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.r
k=H.a([$.P,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.I
k=H.a([$.P,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.r
k=H.a([$.P,$.aH],l)
H.a([],p)
$.$get$c().h(0,new G.e("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.r
k=H.a([$.P,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.I
k=H.a([$.P,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.H
k=H.a([$.P,$.cb],l)
H.a([],p)
$.$get$c().h(0,new G.e("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.I
k=H.a([$.P,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.I
k=H.a([$.P,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.x
k=H.a([$.P,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.x
k=H.a([$.P,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.r
k=H.a([$.P,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.x
k=H.a([$.P,$.bM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.x
k=H.a([$.P,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.x
k=H.a([$.P,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.x
k=H.a([$.P,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.e("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.P,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.x
k=H.a([$.P,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.x
k=H.a([$.P,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.x
k=H.a([$.P,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.x
k=H.a([$.P,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.ab
k=H.a([$.Z,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.x
k=H.a([$.a3,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.x
k=H.a([$.b4,$.aZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.x
k=H.a([$.aM,$.X],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.x
k=H.a([$.O,$.R],l)
H.a([],p)
$.$get$c().h(0,new G.e("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.I
k=H.a([$.Z,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.I
k=H.a([$.ba,$.aT,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.x
k=H.a([$.bt,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.r
k=H.a([$.bt,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.ab
k=H.a([$.bt,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.ab
k=H.a([$.a0,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.ab
k=H.a([$.Z,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.x
k=H.a([$.a0,$.aM,$.br,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.r
k=H.a([$.a0,$.dj,$.X,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.ab
k=H.a([$.ay,$.a3,$.ba,$.aS,$.bc],l)
H.a([],p)
o=new G.e("Queenly",k,n,o,0)
$.$get$c().h(0,o)
$.Ew=o
o=H.a(["Kingly"],p)
n=$.ab
k=H.a([$.bc,$.ac,$.cb,$.a3,$.ba],l)
H.a([],p)
o=new G.e("Kingly",k,n,o,0)
$.$get$c().h(0,o)
$.Dj=o
o=H.a(["Jack"],p)
n=$.ab
k=H.a([$.aY,$.aH,$.E,$.ay],l)
H.a([],p)
o=new G.e("Jack",k,n,o,0)
$.$get$c().h(0,o)
$.Dd=o
o=H.a(["Codpiece","Codtier"],p)
n=$.r
k=H.a([$.a0,$.aT,$.X,$.O,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.r
k=H.a([$.a0,$.aG,$.L,$.E,$.Z,$.O],l)
H.a([],p)
$.$get$c().h(0,new G.e("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.r
k=H.a([$.a0,$.aG,$.L,$.Z,$.O,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.r
k=H.a([$.a0,$.aP,$.L,$.Z,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.ab
k=H.a([$.a0,$.b3,$.E,$.aY,$.aH,$.fg],l)
H.a([],p)
$.$get$c().h(0,new G.e("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.ab
k=H.a([$.a0,$.L,$.bx,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.ab
k=H.a([$.a0,$.a3,$.P,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.ab
k=H.a([$.a0,$.aS,$.be,$.E,$.ff,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.ab
k=H.a([$.a0,$.aI,$.ax,$.jz,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.H
k=H.a([$.a0,$.P,$.bi,$.aJ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.r
k=H.a([$.a0,$.E,$.bi,$.aJ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.r
k=H.a([$.a0,$.aM,$.a7,$.ay,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.r
k=H.a([$.a0,$.P,$.Z,$.a3,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.r
k=H.a([$.a0,$.P,$.Z,$.aJ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.H
k=$.a0
j=$.L
i=$.Z
i=H.a([k,j,i,$.aG,i,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.x
i=H.a([$.a0,$.aJ,$.bQ,$.ac,$.ep,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.ab
i=H.a([$.a0,$.aG,$.L,$.bx,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.ab
i=H.a([$.a3,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.r
i=H.a([$.L,$.Z,$.aG],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.r
i=H.a([$.a0,$.E,$.ay,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.H
i=H.a([$.a0,$.E,$.b9,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.r
i=H.a([$.a0,$.aT,$.X,$.aA,$.br,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.r
i=H.a([$.a0,$.aE,$.E,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.r
i=H.a([$.a0,$.a7,$.L,$.aG,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.r
i=H.a([$.a0,$.X,$.aF,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.ab
i=H.a([$.a0,$.ba,$.bA,$.b3,$.aa,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.x
i=H.a([$.a0,$.aX,$.b9,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.x
i=H.a([$.a0,$.b3,$.bZ,$.aI,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.ab
i=H.a([$.a0,$.aS,$.aI,$.ax,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.ab
i=H.a([$.a0,$.aD,$.bx,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.ab
i=H.a([$.a0,$.E,$.aa,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.I
i=H.a([$.a0,$.b9,$.c3,$.b3,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.x
i=H.a([$.E,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.ab
i=H.a([$.E,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.x
i=H.a([$.E,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.x
i=H.a([$.E,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.H
i=H.a([$.E,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.H
i=H.a([$.E,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.x
i=H.a([$.E,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.x
i=H.a([$.bQ,$.aI],l)
H.a([],p)
$.$get$c().h(0,new G.e("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.x
i=H.a([$.bQ,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.I
i=H.a([$.bQ,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.x
i=H.a([$.bQ,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.x
i=H.a([$.bQ,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.x
i=H.a([$.bQ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.x
i=H.a([$.bQ,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.H
i=H.a([$.bQ,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.x
i=H.a([$.bQ,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.H
i=H.a([$.bQ,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.I
i=H.a([$.bR,$.L],l)
H.a([],p)
$.$get$c().h(0,new G.e("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.H
i=H.a([$.bR,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.I
i=H.a([$.bR,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.H
i=H.a([$.bR,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.x
i=H.a([$.bR,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.H
i=H.a([$.bR,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.ab
i=H.a([$.bR,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.e("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.x
i=H.a([$.bR,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.x
i=H.a([$.bR,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.x
i=H.a([$.bR,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.ab
i=H.a([$.X,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.x
i=H.a([$.X,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.x
i=H.a([$.X,$.cc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.x
i=H.a([$.aM,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.r
i=H.a([$.cc,$.br],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.H
i=H.a([$.cc,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.r
i=H.a([$.cc,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.r
i=H.a([$.L,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.r
i=H.a([$.L,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.x
i=H.a([$.aI,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.x
i=H.a([$.aI,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.I
i=H.a([$.aI,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.I
i=H.a([$.bY,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.x
i=H.a([$.bY,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.I
i=H.a([$.bY,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.x
i=H.a([$.bY,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.x
i=H.a([$.bY,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.x
i=H.a([$.bY,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.I
i=H.a([$.bY,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.x
i=H.a([$.bl,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.x
i=H.a([$.bl,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.x
i=H.a([$.bl,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.H
i=H.a([$.bl,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.r
i=H.a([$.bt,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.x
i=H.a([$.bt,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.H
i=H.a([$.bt,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.r
i=H.a([$.bt,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.H
i=H.a([$.cj,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.x
i=H.a([$.cj,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.ab
i=H.a([$.cj,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.x
i=H.a([$.cj,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.x
i=H.a([$.b4,$.bA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.H
i=H.a([$.b4,$.bZ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.x
i=H.a([$.b4,$.ay],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.x
i=H.a([$.b4,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.x
i=H.a([$.b4,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.x
i=H.a([$.b4,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.x
i=H.a([$.b4,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.H
i=H.a([$.b4,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.H
i=H.a([$.bA,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.x
i=H.a([$.bA,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.x
i=H.a([$.bA,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.x
i=H.a([$.bA,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.x
i=H.a([$.bA,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.x
i=H.a([$.bA,$.bM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.x
i=H.a([$.bA,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.uz
i=H.a([$.bA,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.H
i=H.a([$.bA,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.I
i=H.a([$.bS,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.r
i=H.a([$.aH,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.r
i=H.a([$.aH,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.I
i=H.a([$.bc,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.r
i=H.a([$.aX,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.I
i=H.a([$.aD,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.x
i=H.a([$.aD,$.aY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.I
i=H.a([$.aD,$.ac],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.r
i=H.a([$.cb,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.r
i=H.a([$.cb,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.r
i=H.a([$.aZ,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.r
i=H.a([$.aZ,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.ab
i=H.a([$.aZ,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.ab
i=H.a([$.aZ,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.H
i=H.a([$.aZ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.H
i=H.a([$.aZ,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.ab
i=H.a([$.aZ,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.r
i=H.a([$.aZ,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.r
i=H.a([$.aZ,$.c3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.r
i=H.a([$.aZ,$.b3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.H
i=H.a([$.aZ,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.x
i=H.a([$.b3,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.x
i=H.a([$.aa,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.x
i=H.a([$.bZ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.x
i=H.a([$.bZ,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.ab
i=H.a([$.bZ,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.ab
i=H.a([$.b3,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.H
i=H.a([$.b3,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.I
i=H.a([$.b3,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.H
i=H.a([$.b3,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.ab
i=H.a([$.ay,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.r
i=H.a([$.ay,$.a3,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.H
i=H.a([$.ay,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.I
i=H.a([$.ay,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.r
i=H.a([$.ay,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.ab
i=H.a([$.ay,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.ab
i=H.a([$.br,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.r
i=H.a([$.br,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.r
i=H.a([$.br,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.r
i=H.a([$.aX,$.c3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.H
i=H.a([$.bM,$.c3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.H
i=H.a([$.aP,$.c3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.r
i=H.a([$.aP,$.bu],l)
H.a([],p)
$.$get$c().h(0,new G.e("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.H
i=H.a([$.a7,$.aP],l)
H.a([],p)
$.$get$c().h(0,new G.e("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.r
i=H.a([$.aP,$.bi],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.H
i=H.a([$.aP,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.I
i=H.a([$.aP,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.r
i=H.a([$.bu,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.r
i=H.a([$.bu,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.r
i=H.a([$.bu,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.r
i=H.a([$.aP,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.r
i=H.a([$.bu,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.r
i=H.a([$.a7,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.r
i=H.a([$.bu,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.r
i=H.a([$.bu,$.aa],l)
H.a([],p)
$.$get$c().h(0,new G.e("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.H
i=H.a([$.bu,$.bM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.r
i=H.a([$.bu,$.bs],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.r
i=H.a([$.bs,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.r
i=H.a([$.a3,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.H
i=H.a([$.a7,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.r
i=H.a([$.bx,$.bM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.r
i=H.a([$.bM,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.r
i=H.a([$.bM,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.r
i=H.a([$.bM,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.H
i=H.a([$.bM,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.H
i=H.a([$.bM,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.r
i=H.a([$.bM,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.H
i=H.a([$.aa,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.r
i=H.a([$.aa,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.r
i=H.a([$.aa,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.r
i=H.a([$.aa,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.ab
i=H.a([$.aa,$.bh],l)
H.a([],p)
$.$get$c().h(0,new G.e("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.r
i=H.a([$.aa,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.r
i=H.a([$.aa,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.r
i=H.a([$.aa,$.bx],l)
H.a([],p)
$.$get$c().h(0,new G.e("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.r
i=H.a([$.aa,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.r
i=H.a([$.bx,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.r
i=H.a([$.bx,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.ab
i=H.a([$.Z,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.r
i=H.a([$.bh,$.aX],l)
H.a([],p)
$.$get$c().h(0,new G.e("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.r
i=H.a([$.bh,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.r
i=H.a([$.bh,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.H
i=H.a([$.bh,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.I
i=H.a([$.aJ,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.H
i=H.a([$.b7,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.r
i=H.a([$.b7,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.I
i=H.a([$.aD,$.b7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.I
i=H.a([$.aN,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.I
i=H.a([$.aN,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.H
i=H.a([$.aF,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Z,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.r
i=H.a([$.Z,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.r
i=H.a([$.aF,$.aD],l)
H.a([],p)
$.$get$c().h(0,new G.e("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.ab
i=H.a([$.aN,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.H
i=H.a([$.Z,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.H
i=H.a([$.aN,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.H
i=H.a([$.aN,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.H
i=H.a([$.aN,$.aU,$.aG,$.jA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.H
i=H.a([$.aD,$.b8],l)
H.a([],p)
$.$get$c().h(0,new G.e("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.H
i=H.a([$.aD,$.a3],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.H
i=H.a([$.aD,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.H
i=H.a([$.a3,$.ax],l)
H.a([],p)
$.$get$c().h(0,new G.e("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.H
i=H.a([$.aD,$.b8,$.a7,$.aU],l)
H.a([],p)
$.$get$c().h(0,new G.e("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.x
i=H.a([$.E,$.bY],l)
H.a([],p)
$.$get$c().h(0,new G.e("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.r
i=H.a([$.be,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.H
i=H.a([$.bR,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.r
i=H.a([$.X,$.Z],l)
H.a([],p)
$.$get$c().h(0,new G.e("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.r
i=H.a([$.aM,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.H
i=H.a([$.cc,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.x
i=H.a([$.L,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.H
i=H.a([$.L,$.b9],l)
H.a([],p)
$.$get$c().h(0,new G.e("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.ab
i=H.a([$.b9,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.H
i=H.a([$.bl,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.H
i=H.a([$.aE,$.bt],l)
H.a([],p)
$.$get$c().h(0,new G.e("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.x
i=H.a([$.aN,$.cj],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.ab
i=H.a([$.b4,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.H
i=H.a([$.aX,$.bS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.I
i=H.a([$.ba,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.ab
i=H.a([$.bZ,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.H
i=H.a([$.ay,$.aE],l)
H.a([],p)
$.$get$c().h(0,new G.e("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.H
i=H.a([$.aE,$.a7],l)
H.a([],p)
$.$get$c().h(0,new G.e("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.H
i=H.a([$.aE,$.bM],l)
H.a([],p)
$.$get$c().h(0,new G.e("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.H
i=H.a([$.aE,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.H
i=H.a([$.aP,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.H
i=H.a([$.bi,$.aJ],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.H
i=H.a([$.bi,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.H
i=H.a([$.bi,$.aA],l)
H.a([],p)
$.$get$c().h(0,new G.e("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.H
i=H.a([$.aS,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.H
i=H.a([$.aU,$.aF],l)
H.a([],p)
$.$get$c().h(0,new G.e("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.H
i=H.a([$.aN,$.aT],l)
H.a([],p)
$.$get$c().h(0,new G.e("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.H
i=H.a([$.a3,$.aN],l)
H.a([],p)
$.$get$c().h(0,new G.e("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.H
i=H.a([$.O,$.R,$.ba],l)
H.a([],p)
$.$get$c().h(0,new G.e("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.H
i=H.a([$.O,$.R,$.ba,$.aT,$.P],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.H
i=H.a([$.O,$.R,$.ba,$.cj],l)
H.a([],p)
$.$get$c().h(0,new G.e("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.H
i=H.a([$.aI,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.H
i=H.a([$.bA,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.H
i=H.a([$.b4,$.bc],l)
H.a([],p)
$.$get$c().h(0,new G.e("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.H
i=H.a([$.a3,$.b4],l)
H.a([],p)
$.$get$c().h(0,new G.e("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.H
i=H.a([$.bc,$.aS],l)
H.a([],p)
$.$get$c().h(0,new G.e("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.H
l=H.a([$.bQ,$.bR],l)
H.a([],p)
$.$get$c().h(0,new G.e("Chipped",l,n,o,0))
if($.xC==null){o=$.mJ
n=$.aY
l=$.aH
k=$.be
j=new U.au(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a2(null,null,null,m),0,3)
j.N("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.xC=j}o=$.$get$az();(o&&C.b).sm(o,0)
o=$.$get$az()
n=$.P
l=$.wR
k=new U.au(n,null,null,null,"Speedo",!1,P.a2(null,null,null,m),0,3)
k.N("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$az()
o=$.fg
n=$.aH
l=$.E
j=$.aY
i=new U.au(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a2(null,null,null,m),0,3)
i.N("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$az()
k=$.um
o=$.ac
j=$.E
l=new U.au(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a2(null,null,null,m),0,3)
l.N("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$az()
i=$.uv
k=$.aZ
j=$.E
o=new U.au(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a2(null,null,null,m),0,3)
o.N("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$az()
l=$.us
i=$.aZ
j=$.E
k=new U.au(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a2(null,null,null,m),0,3)
k.N("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$az()
o=$.x4
l=$.aZ
j=$.E
i=new U.au(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a2(null,null,null,m),0,3)
i.N("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$az()
k=$.wE
o=$.aY
j=$.aH
l=$.E
n=new U.au(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a2(null,null,null,m),0,3)
n.N("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$az()
i=$.uh
k=$.aY
l=$.aH
j=$.E
o=new U.au(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a2(null,null,null,m),0,3)
o.N("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$az()
n=$.ho
i=$.ac
j=$.bQ
l=new U.au(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a2(null,null,null,m),0,3)
l.N("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$az()
o=$.x7
n=$.aH
j=$.E
i=new U.au(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a2(null,null,null,m),0,3)
i.N("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$az()
l=$.wH
o=$.aH
j=$.E
n=new U.au(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a2(null,null,null,m),0,3)
n.N("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$az()
i=$.wO
l=$.aY
j=$.E
o=new U.au(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a2(null,null,null,m),0,3)
o.N("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$az()
n=$.ur
i=$.bA
j=$.bt
l=new U.au(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a2(null,null,null,m),0,3)
l.N("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$az()
o=$.ep
n=$.cb
j=$.aI
i=$.ac
k=new U.au(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a2(null,null,null,m),0,3)
k.N("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$az()
l=$.ui
o=$.aM
i=$.bZ
j=new U.au(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a2(null,null,null,m),0,3)
j.N("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$az()
k=$.uq
l=$.E
i=$.aY
o=new U.au(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a2(null,null,null,m),0,3)
o.N("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$az()
j=$.xa
k=$.X
i=$.ac
l=new U.au(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a2(null,null,null,m),0,3)
l.N("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$az()
o=$.xc
j=$.bh
i=$.P
k=new U.au(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a2(null,null,null,m),0,3)
k.N("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$az()
l=$.ud
o=$.aZ
i=$.aI
j=$.P
n=$.aY
h=new U.au(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a2(null,null,null,m),0,3)
h.N("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$az()
k=$.jA
l=$.X
n=$.ac
j=new U.au(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a2(null,null,null,m),0,3)
j.N("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$az()
h=$.jy
k=$.X
n=new U.au(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a2(null,null,null,m),0,3)
n.N("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$az()
j=$.aG
h=$.L
k=$.ac
l=new U.au(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a2(null,null,null,m),0,3)
l.N("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$az()
n=$.x1
j=$.E
k=$.ac
h=new U.au(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a2(null,null,null,m),0,3)
h.N("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$az()
l=$.ua
n=$.aH
k=$.E
j=$.ac
i=new U.au(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a2(null,null,null,m),0,3)
i.N("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.wX
l=$.X
j=$.aY
k=new U.au(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a2(null,null,null,m),0,3)
k.N("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.ff
h=$.E
j=$.ac
l=new U.au(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a2(null,null,null,m),0,3)
l.N("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$az()
k=$.wG
i=$.X
j=$.ac
h=new U.au(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a2(null,null,null,m),0,3)
h.N("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$az()
l=$.xd
k=$.aM
j=$.ac
i=new U.au(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a2(null,null,null,m),0,3)
i.N("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.x9
l=$.X
j=$.aZ
k=new U.au(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a2(null,null,null,m),0,3)
k.N("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.x6
h=$.E
j=$.aH
l=new U.au(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a2(null,null,null,m),0,3)
l.N("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$az()
k=$.uo
i=$.E
j=$.aZ
h=new U.au(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a2(null,null,null,m),0,3)
h.N("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$az()
l=$.mK
k=$.E
j=$.bu
i=new U.au(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a2(null,null,null,m),0,3)
i.N("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.ep
l=$.cc
j=$.ac
k=new U.au(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a2(null,null,null,m),0,3)
k.N("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.xb
h=$.E
j=$.aY
l=new U.au(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a2(null,null,null,m),0,3)
l.N("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$az()
k=$.mI
i=$.L
j=$.aH
h=new U.au(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a2(null,null,null,m),0,3)
h.N("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$az()
l=$.uj
k=$.E
j=$.ac
i=new U.au(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a2(null,null,null,m),0,3)
i.N("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.e3
l=$.b7
j=$.P
k=new U.au(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a2(null,null,null,m),0,3)
k.N("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.hn
h=$.E
j=$.bh
l=new U.au(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a2(null,null,null,m),0,3)
l.N("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$az()
k=$.uy
i=$.E
j=$.ac
h=new U.au(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a2(null,null,null,m),0,3)
h.N("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$az()
l=$.x5
k=$.E
j=$.ac
i=new U.au(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a2(null,null,null,m),0,3)
i.N("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.ux
l=$.X
j=$.ac
k=new U.au(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a2(null,null,null,m),0,3)
k.N("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.ut
h=$.X
j=$.aP
l=new U.au(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a2(null,null,null,m),0,3)
l.N("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$az()
k=$.uu
i=$.E
j=$.aH
h=new U.au(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a2(null,null,null,m),0,3)
h.N("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$az()
l=$.mN
k=$.E
j=$.Z
i=new U.au(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a2(null,null,null,m),0,3)
i.N("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.jz
l=$.aI
j=$.cb
k=new U.au(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a2(null,null,null,m),0,3)
k.N("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.wQ
h=$.X
j=$.ac
l=new U.au(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a2(null,null,null,m),0,3)
l.N("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$az()
k=$.wW
i=$.E
j=$.aH
h=new U.au(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a2(null,null,null,m),0,3)
h.N("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$az()
l=$.x3
k=$.E
j=$.aH
i=new U.au(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a2(null,null,null,m),0,3)
i.N("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$az()
h=$.x2
l=$.E
j=$.cb
k=new U.au(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a2(null,null,null,m),0,3)
k.N("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$az()
i=$.dj
h=$.X
j=$.ac
m=new U.au(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a2(null,null,null,m),0,3)
m.N("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bH("Duttle","Dut",null,null)
$.$get$bP().push(m)
$.wp=m
m=new S.bH("Salamander","GLUB",null,null)
$.$get$bP().push(m)
$.tZ=m
m=new S.bH("Crocodile","NAK",null,null)
$.$get$bP().push(m)
$.e0=m
m=new S.bH("Iguana","thip",null,null)
$.$get$bP().push(m)
$.ek=m
m=new S.bH("Turtle","click",null,null)
$.$get$bP().push(m)
$.f7=m
m=new S.bH("Skeleton","rattle",null,null)
$.$get$bP().push(m)
$.dM=m
m=new S.bH("Robot","BEEP",null,null)
$.$get$bP().push(m)
$.f5=m
m=new S.bH("Chameleon","BLEP",null,null)
$.$get$bP().push(m)
$.iG=m
m=new S.bH("Axolotl","BARP",null,null)
$.$get$bP().push(m)
$.tS=m
m=new S.bH("Lizard","bleb",null,null)
$.$get$bP().push(m)
$.m1=m
m=new S.bH("Snake","hiss",null,null)
$.$get$bP().push(m)
$.u0=m
m=new S.bH("Alligator","nak",null,null)
$.$get$bP().push(m)
$.iE=m
m=new S.bH("Mole","snuff",null,null)
$.$get$bP().push(m)
$.wq=m
m=new S.bH("Bird","tweet",null,null)
$.$get$bP().push(m)
$.m0=m
m=new S.bH("Wolf","howl",null,null)
$.$get$bP().push(m)
$.m6=m
m=new S.bH("Newt","skitter",null,null)
$.$get$bP().push(m)
$.wr=m
m=new S.bH("Spider","skitter",null,null)
$.$get$bP().push(m)
$.iM=m
m=new S.bH("Cupid","flappa",null,null)
$.$get$bP().push(m)
$.iH=m
m=new S.bH("Dragon","roar",null,null)
$.$get$bP().push(m)
$.ha=m
m=new S.ip("Prospitian","murmur",null,null)
$.$get$bP().push(m)
$.Av=m
m=new S.ip("Dersite","mutter",null,null)
$.$get$bP().push(m)
$.As=m
m=new S.mr("Horror Terror","a;lkjdf",null,null)
$.$get$bP().push(m)
$.Au=m
$.Aw=H.a([$.u0,$.iE,$.wr,$.tZ,$.ek,$.e0,$.f7,$.iG,$.tS,$.m1],[S.bH])
$.hg=new T.c4(0,"spices")
m=$.Ay
$.f3=new T.c4(m,"fresh baked bread")
$.cB=new T.c4(m,"sweetness")
$.c9=new T.c4(m,"nature")
$.m5=new T.c4(0,"salt")
k=$.Ax
$.d7=new T.c4(k,"rot")
$.At=new T.c4(k,"feet")
$.em=new T.c4(0,"oil")
$.tU=new T.c4(0,"chlorine")
$.he=new T.c4(0,"nothing in particular")
$.ej=new T.c4(0,"gunpowder")
$.hd=new T.c4(0,"must")
$.cH=new T.c4(m,"zoo animals")
$.e1=new T.c4(k,"sweat")
$.iL=new T.c4(0,"ozone")
$.c8=new T.c4(0,"deceit")
$.d6=new T.c4(k,"blood")
$.f6=new T.c4(k,"smoke")
$.c1=new K.bW(k,"creepy")
$.b_=new K.bW(m,"calm")
$.ch=new K.bW(k,"frantic")
$.m2=new K.bW(0,"like nothing")
$.bX=new K.bW(m,"energizing")
$.cG=new K.bW(0,"studious")
$.dw=new K.bW(0,"dangerous")
$.dK=new K.bW(0,"glamorous")
$.hf=new K.bW(0,"romantic")
$.dv=new K.bW(m,"creative")
$.iK=new K.bW(0,"lucky")
$.dx=new K.bW(0,"happy")
$.dL=new K.bW(0,"heroic")
$.d9=new K.bW(k,"stupid")
$.iK=new K.bW(0,"lucky")
$.tV=new K.bW(0,"claustrophobic")
$.m3=new K.bW(0,"overheated")
$.dJ=new K.bW(k,"confusing")
$.cg=new K.bW(0,"contemplatative")
$.cZ=new M.bC(0,"clanking")
$.cA=new M.bC(0,"laughing")
$.bg=new M.bC(m,"rustling")
$.en=new M.bC(k,"screaming")
$.iI=new M.bC(k,"foot steps")
$.f4=new M.bC(k,"beeping")
$.wt=new M.bC(k,"whispering")
$.ei=new M.bC(0,"clacking")
$.cE=new M.bC(0,"applause")
$.el=new M.bC(0,"jazz")
$.tX=new M.bC(0,"disco")
$.hb=new M.bC(0,"drums")
$.hc=new M.bC(0,"echoing")
$.m4=new M.bC(k,"roaring")
$.iJ=new M.bC(k,"gunfire")
$.cF=new M.bC(0,"music")
$.u_=new M.bC(0,"singing")
$.tT=new M.bC(0,"chanting")
$.f8=new M.bC(0,"whistling")
$.di=new M.bC(m,"nature")
$.tW=new M.bC(0,"croaking")
$.d8=new M.bC(0,"silence")
$.tY=new M.bC(0,"pulsing")
$.ws=new M.bC(0,"ticking")
m=H.a([],p)
o=[X.G,P.U]
n=A.a_
l=E.M
k=[l]
j=[A.fR]
m=new S.n2(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.t(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Knight",3,!0,!1,!1)
$.GQ=m
m=P.f(H.a([new E.M($.cd,0.4,!1)],k),l)
i=H.a([],p)
m=new S.oC(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.t(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Seer",6,!0,!1,!1)
$.H2=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kX("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.t(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Bard",9,!0,!1,!1)
$.GK=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.mn("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.t(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Heir",8,!0,!1,!1)
$.GN=m
m=H.a([],p)
m=new U.nn(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.t(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Maid",0,!0,!1,!1)
$.GT=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.oq(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.t(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Rogue",4,!0,!1,!1)
$.GY=m
m=H.a([],p)
m=new V.o0(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.t(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Page",1,!0,!1,!1)
$.GW=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.pA(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.t(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Thief",7,!0,!1,!1)
$.H5=m
m=P.f(H.a([new E.M($.cd,0.1,!1)],k),l)
i=H.a([],p)
m=new R.pm(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.t(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Sylph",5,!0,!1,!1)
$.H4=m
m=H.a([],p)
m=new N.oh("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.t(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Prince",10,!0,!1,!1)
$.GX=m
m=P.f(H.a([new E.M($.cd,0.1,!1)],k),l)
i=H.a([],p)
m=new M.q4("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.t(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Witch",11,!0,!1,!1)
$.H7=m
m=P.f(H.a([new E.M($.cd,0.4,!1)],k),l)
i=H.a([],p)
m=new S.nm("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.t(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Mage",2,!0,!1,!1)
$.GS=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.f(H.a([new E.M($.cd,3,!1),new E.M($.oU,-2,!1)],k),l)
e=H.a([],p)
m=new E.q0("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.t(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Waste",12,!1,!1,!1)
$.H6=m
m=H.a([],p)
m=new Y.oy("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.t(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Scout",13,!1,!1,!1)
$.H0=m
m=P.f(H.a([new E.M($.cd,0.5,!1)],k),l)
i=H.a([],p)
m=new L.oz("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.t(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Scribe",15,!1,!1,!1)
$.H1=m
m=P.f(H.a([new E.M($.cd,0.5,!1)],k),l)
i=H.a([],p)
m=new E.ov(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.t(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Sage",14,!1,!1,!1)
$.GZ=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.ml("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.t(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Guide",16,!1,!1,!1)
$.GM=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.f(H.a([new E.M($.cd,3,!1)],k),l)
g=H.a([],p)
m=new Y.mk(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.t(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Grace",17,!1,!1,!1)
$.GL=m
m=P.f(H.a([new E.M($.cd,0.1,!1)],k),l)
i=H.a([],p)
m=new E.nB("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.t(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Muse",18,!1,!1,!1)
$.GU=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.F(null,null,n)
h=P.f(H.a([new E.M($.cd,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.nk("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.t(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Lord",19,!1,!1,!1)
$.GR=m
m=P.f(H.a([new E.M($.cd,-0.1,!1),new E.M($.dA,1,!1)],k),l)
i=H.a([],p)
m=new Y.oJ("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.t(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Smith",20,!1,!1,!1)
$.H3=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.f(H.a([new E.M($.cd,4,!1),new E.M($.oU,-3,!1)],k),l)
e=H.a([],p)
m=new X.mv("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.t(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Human",21,!1,!1,!0)
$.GO=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["hussie"],p)
f=P.f(H.a([new E.M($.cd,41.3,!1),new E.M($.oU,41.3,!1)],k),l)
e=H.a([],p)
m=new Q.mw(20,20,0.5,m,i,h,g,!1,!0,!1,!0,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Hussie",new H.t(0,null,null,null,null,null,0,o),null,null,22,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Hussie",22,!1,!0,!0)
$.GP=m
m=H.a(["sans","sansly","sassy","super","soapful"],p)
i=H.a([],p)
m=new Y.ow(m,"Glitch",0.01,0.01,0.01,i,0.5,"Sans",new H.t(0,null,null,null,null,null,0,o),null,null,23,!1,!0,!0,!1,!1,!1,!1,!1,!1,Q.F(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Sans",23,!1,!0,!0)
$.H_=m
$.GV=T.GJ("Null",255,!1,!0,!1)
m=A.dY
i=P.D
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.M($.dA,2,!0),new E.M($.eE,1,!0),new E.M($.dQ,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new N.oN(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(0,"Space",!0,!1,!1)
$.zP=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.hT,2,!0),new E.M($.dQ,1,!0),new E.M($.fs,-2,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new N.pB(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(1,"Time",!0,!1,!1)
$.zS=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.M($.dQ,2,!0),new E.M($.cu,1,!0),new E.M($.eE,-1,!0),new E.M($.eF,-1,!0),new E.M($.cd,0.05,!1)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new T.l5(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(2,"Breath",!0,!1,!1)
$.zu=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.dA,2,!0),new E.M($.fs,1,!0),new E.M($.hT,-1,!0),new E.M($.eE,-1,!0),new E.M($.cd,0.01,!1)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new U.lx(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(3,"Doom",!0,!1,!1)
$.zv=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.M($.eF,2,!0),new E.M($.cu,1,!0),new E.M($.dA,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new T.l3(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(4,"Blood",!0,!1,!1)
$.zt=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.eF,1,!0),new E.kQ(null,1,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new T.mm(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(5,"Heart",!0,!1,!1)
$.zy=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.M($.fs,2,!0),new E.M($.hT,1,!0),new E.M($.dA,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new V.nz(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(6,"Mind",!0,!1,!1)
$.zG=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.hS,2,!0),new E.M($.fs,1,!0),new E.M($.cu,-1,!0),new E.M($.eE,-1,!0),new E.M($.cd,0.2,!1)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new G.n7(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(7,"Light",!0,!1,!1)
$.zE=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.fM(D.vn(),null,3,!0),new E.fM(D.vn(),null,-1,!0),new E.M($.hT,-1,!0),new E.M($.cd,0.2,!1)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new Q.q_(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(8,"Void",!0,!1,!1)
$.zU=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.hU,2,!0),new E.M($.dQ,1,!0),new E.M($.cu,-1,!0),new E.M($.eF,-1,!0),new E.M($.cd,0.01,!1)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new E.ok(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(9,"Rage",!0,!1,!1)
$.zK=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.M($.cu,2,!0),new E.M($.hS,1,!0),new E.fM(D.vn(),null,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new X.mq(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(10,"Hope",!0,!1,!1)
$.zA=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.eE,2,!0),new E.M($.hU,1,!0),new E.M($.dA,-2,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new K.n6(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(11,"Life",!0,!1,!1)
$.zD=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=P.f(H.a([new E.M($.dA,3,!0),new E.M($.cu,-2,!0)],k),l)
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
a=new Z.ly(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!1,!0,1,a,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
a.a_(12,"Dream",!1,!1,!1)
$.zw=a
a=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.dA,3,!0),new E.M($.cu,-2,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new Q.n4(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(13,"Law",!1,!1,!0)
$.zC=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
c=P.f(H.a([new E.M($.cd,13,!0)],k),l)
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=new Z.n_(13,13,13,h,g,f,e,"Juiceification","The OWNER is healed in a tidal wave of Juice, while the ENEMY starts to drown in said Juice.",d,["Juice Box","Shogun body pillow"],["Juice Box","Shogun body pillow"],c,0.01,0.01,0.01,0.5,14,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Juice",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.a_(14,"Juice",!1,!1,!0)
$.zB=b
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.hU,13,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new K.ox(13,13,13,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],g,0.01,0.01,0.01,0.5,15,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(15,"Sauce",!1,!0,!1)
$.zN=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
e=P.f(H.a(["Rebellion","Desolate","Electric","Metaphorical","Ravaging"],p),q)
d=P.f(H.a(["Prometheus","Lucifer","Zeus","Momus","Maui","Anansi","Arachne"],p),q)
c=P.f(H.a([new E.M($.dQ,10,!0),new E.M($.cu,-2,!0)],k),l)
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=new L.pq(2,0.7,0.7,h,g,f,e,"Rebellion","The OWNER is immensely strengthened, and they blast the ENEMY with a bolt of electricity.",d,["Lightning","Ice","Taserface"],["Taser"],c,0.01,0.01,0.01,0.5,16,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Taze",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.a_(16,"Taze",!1,!1,!0)
$.zR=b
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
b.j(0,$.ag,L.d("#990000"),!0)
b.j(0,$.ai,L.d("#ff0200"),!0)
b.j(0,$.ah,L.d("#dd0000"),!0)
b.j(0,$.ar,L.d("#25334f"),!0)
b.j(0,$.aq,L.d("#07090f"),!0)
b.j(0,$.ak,L.d("#c64f4f"),!0)
b.j(0,$.al,L.d("#a33f3f"),!0)
b.j(0,$.aj,L.d("#843333"),!0)
b.j(0,$.ap,L.d("#b5c1d2"),!0)
b.j(0,$.ao,L.d("#939dac"),!0)
b.j(0,$.an,L.d("#3c3e42"),!0)
b.j(0,$.am,L.d("#202123"),!0)
c=P.f(H.a(["ABSOLUTE LOYALTY","ARROW EXTRAORDINAIRE","EMPATHETIC WARRIOR"],p),q)
d=P.f(H.a(["Relaxer","Respondant","Rememberer","Restless","Rasengan"],p),q)
e=P.f(H.a(["Empathetic","Arrowed","Emotioanal","Literal","Ravaging"],p),q)
f=P.f(H.a(["Artemus","Apollo","Eros","Cupid","Actaeon","Atalanta","Hippolytus","Orion","Paris","Philoctetes","Poeas","Teucher"],p),q)
g=P.f(H.a([new E.M($.dQ,2,!0),new E.M($.cu,5,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new V.os(0.9,1.1,2,b,c,d,e,"A Song Of Arrows","The OWNER has dozens of arrows fly above their head, and right onto the ENEMY",f,["Arrow","Yondu","Empathy"],["Arrow","Bow"],g,0.01,0.01,0.01,0.5,17,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Rule",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(17,"Rule",!1,!1,!0)
$.zM=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
c=P.f(H.a([new E.M($.dQ,15,!0),new E.M($.cu,-4,!0)],k),l)
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
b=new V.mo(3.1,2,0.7,h,g,f,e,"Rant Your Troubles Away","The OWNER begins ranting, which strengthens themselves, but destroys the ENEMY.",d,["Hippo","Ranting"],["Vent"],c,0.01,0.01,0.01,0.5,18,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Hippo",null,!1,!1,!0,!1,!1,!0,1,b,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
b.a_(18,"Hippo",!1,!1,!0)
$.zz=b
b=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=P.f(H.a([new E.M($.dQ,5,!0),new E.M($.cu,5,!0)],k),l)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new L.l0(0.7,2,3.1,b,c,d,e,"Persaude the Enemy","The OWNER convinces the ENEMY to get hurt.",f,["Bear","Thought"],["Doorway"],g,0.01,0.01,0.01,0.5,19,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Bear",null,!1,!1,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(19,"Bear",!1,!1,!0)
$.zs=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#FF9B00"),!0)
g.j(0,$.ai,L.d("#FF9B00"),!0)
g.j(0,$.ah,L.d("#FF8700"),!0)
g.j(0,$.ar,L.d("#7F7F7F"),!0)
g.j(0,$.aq,L.d("#727272"),!0)
g.j(0,$.ak,L.d("#A3A3A3"),!0)
g.j(0,$.al,L.d("#999999"),!0)
g.j(0,$.aj,L.d("#898989"),!0)
g.j(0,$.ap,L.d("#EFEFEF"),!0)
g.j(0,$.ao,L.d("#DBDBDB"),!0)
g.j(0,$.an,L.d("#C6C6C6"),!0)
g.j(0,$.am,L.d("#ADADAD"),!0)
g=new U.nA(h,0.01,0.01,0.01,0.5,20,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Mindstone",null,!1,!0,!0,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
g.a_(20,"Mindstone",!1,!0,!0)
$.zH=g
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#74a4ff"),!0)
g.j(0,$.ai,L.d("#74a4ff"),!0)
g.j(0,$.ah,L.d("#466299"),!0)
g.j(0,$.ar,L.d("#466299"),!0)
g.j(0,$.aq,L.d("#2f4166"),!0)
g.j(0,$.ak,L.d("#d0c217"),!0)
g.j(0,$.al,L.d("#9e9311"),!0)
g.j(0,$.aj,L.d("#6b640c"),!0)
g.j(0,$.ap,L.d("#c3c3c3"),!0)
g.j(0,$.ao,L.d("#8f8f8f"),!0)
g.j(0,$.an,L.d("#a88e00"),!0)
g.j(0,$.am,L.d("#756300"),!0)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new S.oO(g,0.01,0.01,0.01,0.5,21,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Spacestone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(21,"Spacestone",!1,!0,!0)
$.zQ=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#FF9B00"),!0)
g.j(0,$.ai,L.d("#FF9B00"),!0)
g.j(0,$.ah,L.d("#FF8700"),!0)
g.j(0,$.ar,L.d("#7F7F7F"),!0)
g.j(0,$.aq,L.d("#727272"),!0)
g.j(0,$.ak,L.d("#A3A3A3"),!0)
g.j(0,$.al,L.d("#999999"),!0)
g.j(0,$.aj,L.d("#898989"),!0)
g.j(0,$.ap,L.d("#EFEFEF"),!0)
g.j(0,$.ao,L.d("#DBDBDB"),!0)
g.j(0,$.an,L.d("#C6C6C6"),!0)
g.j(0,$.am,L.d("#ADADAD"),!0)
g=new Z.oe(h,0.01,0.01,0.01,0.5,22,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Powerstone",null,!1,!0,!0,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
g.a_(22,"Powerstone",!1,!0,!0)
$.zJ=g
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#ffcb6f"),!0)
g.j(0,$.ai,L.d("#ffcb6f"),!0)
g.j(0,$.ah,L.d("#997a42"),!0)
g.j(0,$.ar,L.d("#997a42"),!0)
g.j(0,$.aq,L.d("#66512c"),!0)
g.j(0,$.ak,L.d("#d0c217"),!0)
g.j(0,$.al,L.d("#9e9311"),!0)
g.j(0,$.aj,L.d("#6b640c"),!0)
g.j(0,$.ap,L.d("#c3c3c3"),!0)
g.j(0,$.ao,L.d("#8f8f8f"),!0)
g.j(0,$.an,L.d("#a88e00"),!0)
g.j(0,$.am,L.d("#756300"),!0)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new F.oL(g,0.01,0.01,0.01,0.5,23,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Soulstone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(23,"Soulstone",!1,!0,!0)
$.zO=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#FF9B00"),!0)
g.j(0,$.ai,L.d("#FF9B00"),!0)
g.j(0,$.ah,L.d("#FF8700"),!0)
g.j(0,$.ar,L.d("#7F7F7F"),!0)
g.j(0,$.aq,L.d("#727272"),!0)
g.j(0,$.ak,L.d("#A3A3A3"),!0)
g.j(0,$.al,L.d("#999999"),!0)
g.j(0,$.aj,L.d("#898989"),!0)
g.j(0,$.ap,L.d("#EFEFEF"),!0)
g.j(0,$.ao,L.d("#DBDBDB"),!0)
g.j(0,$.an,L.d("#C6C6C6"),!0)
g.j(0,$.am,L.d("#ADADAD"),!0)
g=new Y.pG(h,0.01,0.01,0.01,0.5,24,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Timestone",null,!1,!0,!0,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
g.a_(24,"Timestone",!1,!0,!0)
$.zT=g
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#ed1c24"),!0)
g.j(0,$.ai,L.d("#ed1c24"),!0)
g.j(0,$.ah,L.d("#820a0f"),!0)
g.j(0,$.ar,L.d("#820a0f"),!0)
g.j(0,$.aq,L.d("#4f0609"),!0)
g.j(0,$.ak,L.d("#d0c217"),!0)
g.j(0,$.al,L.d("#9e9311"),!0)
g.j(0,$.aj,L.d("#6b640c"),!0)
g.j(0,$.ap,L.d("#c3c3c3"),!0)
g.j(0,$.ao,L.d("#8f8f8f"),!0)
g.j(0,$.an,L.d("#a88e00"),!0)
g.j(0,$.am,L.d("#756300"),!0)
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
h=new F.om(g,0.01,0.01,0.01,0.5,25,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Realitystone",null,!1,!0,!0,!1,!1,!0,1,h,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
h.a_(25,"Realitystone",!1,!0,!0)
$.zL=h
h=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#FF9B00"),!0)
g.j(0,$.ai,L.d("#FF9B00"),!0)
g.j(0,$.ah,L.d("#FF8700"),!0)
g.j(0,$.ar,L.d("#7F7F7F"),!0)
g.j(0,$.aq,L.d("#727272"),!0)
g.j(0,$.ak,L.d("#A3A3A3"),!0)
g.j(0,$.al,L.d("#999999"),!0)
g.j(0,$.aj,L.d("#898989"),!0)
g.j(0,$.ap,L.d("#EFEFEF"),!0)
g.j(0,$.ao,L.d("#DBDBDB"),!0)
g.j(0,$.an,L.d("#C6C6C6"),!0)
g.j(0,$.am,L.d("#ADADAD"),!0)
g=new N.mi(h,0.01,0.01,0.01,0.5,26,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Gauntlet",null,!1,!0,!0,!1,!1,!0,1,g,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
g.a_(26,"Gauntlet",!1,!0,!0)
$.zx=g
g=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
g.j(0,$.ag,L.d("#c55555"),!0)
g.j(0,$.ai,L.d("#c55555"),!0)
g.j(0,$.ah,L.d("#090404"),!0)
g.j(0,$.ar,L.d("#ba872e"),!0)
g.j(0,$.aq,L.d("#8e694e"),!0)
g.j(0,$.ak,L.d("#b59e5d"),!0)
g.j(0,$.al,L.d("#837243"),!0)
g.j(0,$.aj,L.d("#4f4528"),!0)
g.j(0,$.ap,L.d("#9fbfbf"),!0)
g.j(0,$.ao,L.d("#95b5b5"),!0)
g.j(0,$.an,L.d("#956f6f"),!0)
g.j(0,$.am,L.d("#714b4b"),!0)
h=P.f(H.a(["MEME STEALER","THANOS CAR","AGGRESIVE MEMER"],p),q)
f=P.f(H.a(["Meme","Memetastic","Mesmerizing","Mop","Memelord","Mashedpotato"],p),q)
e=P.f(H.a(["Meme","Funny","Stealing","Despacito","Meme Stealing","Cursed"],p),q)
d=P.f(H.a(["Shogun","Memelord","Air Horn","420","Thanos Car","Luis Fonsi","Bowsette"],p),q)
c=P.f(H.a([new E.M($.cu,-1,!0)],k),l)
m=new L.a8(P.p(null,null,null,q,m),P.p(null,null,null,i,m),P.p(null,null,null,q,i),P.p(null,null,null,i,q))
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
j=new D.nt(2,0.5,1,g,h,f,e,"cURSED","Some cursed meme music starts to play.",d,["memes"],["memes"],c,0.01,0.01,0.01,0.5,27,new H.t(0,null,null,null,null,null,0,o),null,"","",!1,"Meme",null,!1,!1,!0,!1,!1,!0,1,m,P.f(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.f(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Blank","Null","Boring","Error"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),P.f(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.f(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.F(null,null,n))
j.a_(27,"Meme",!1,!1,!0)
$.zF=j
$.zI=L.zr(255,"Null",!1,!0,!1)
j=P.f(H.a([new E.M($.cu,1,!0),new E.M($.hS,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
c=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
d=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
h=H.a(["Nobody"],p)
g=H.a(["Nobody"],p)
q=new F.nC(j,q,m,c,d,!1,e,f,h,g,1,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"loud","musical","Music")
q.E()
q.F()
B.cP(q)
$.AT=q
q=P.f(H.a([new E.M($.fs,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kM(q,m,j,i,h,!1,g,f,e,d,13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"nerdy","smart","Academic")
q.E()
q.F()
B.cP(q)
$.AM=q
q=P.f(H.a([new E.M($.hU,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kR(q,m,j,i,h,!1,g,f,e,d,4,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dumb","athletic","Athletic")
q.E()
q.F()
B.cP(q)
$.AN=q
q=P.f(H.a([new E.M($.hT,-1,!0),new E.M($.hS,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.lc(q,m,j,i,h,!1,g,f,e,d,0,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"dorky","funny","Comedy")
q.E()
q.F()
B.cP(q)
$.AO=q
q=P.f(H.a([new E.M($.cu,-1,!0),new E.M($.eE,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.lo(q,m,j,i,h,!1,g,f,e,d,2,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"pretentious","cultured","Culture")
q.E()
q.F()
B.cP(q)
$.AP=q
q=P.f(H.a([new E.M($.cu,1,!0),new E.M($.eF,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.lw(q,m,j,i,h,!1,g,f,e,d,8,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"boring","domestic","Domestic")
q.E()
q.F()
B.cP(q)
$.AQ=q
q=P.f(H.a([new E.M($.hS,1,!0),new E.M($.dA,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.m_(q,m,j,i,h,!1,g,f,e,d,7,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"whimpy","imaginative","Fantasy")
q.E()
q.F()
B.cP(q)
$.AR=q
q=P.f(H.a([new E.M($.hU,1,!0),new E.M($.eE,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.n0(q,m,j,i,h,!1,g,f,e,d,6,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"harsh","fair-minded","Justice")
q.E()
q.F()
B.cP(q)
$.AS=q
q=P.f(H.a([new E.M($.dQ,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.od(q,m,j,i,h,!1,g,f,e,d,9,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"frivolous","geeky","PopCulture")
q.E()
q.F()
B.cP(q)
$.AV=q
q=P.f(H.a([new E.M($.eF,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.or(q,m,j,i,h,!1,g,f,e,d,12,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"obsessive","romantic","Romantic")
q.E()
q.F()
B.cP(q)
$.AW=q
q=P.f(H.a([new E.M($.cu,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.oK(q,m,j,i,h,!1,g,f,e,d,11,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"shallow","extroverted","Social")
q.E()
q.F()
B.cP(q)
$.AX=q
q=P.f(H.a([new E.M($.eF,-1,!0),new E.M($.cu,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.pt(q,m,j,i,h,!1,g,f,e,d,5,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"terrible","honest","Terrible")
q.E()
q.F()
B.cP(q)
$.AZ=q
q=P.f(H.a([new E.M($.fs,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.q9(q,m,j,i,h,!1,g,f,e,d,3,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"wordy","lettered","Writing")
q.E()
q.F()
B.cP(q)
$.B_=q
q=P.f(H.a([new E.M($.dA,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.f(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.ps(q,m,j,i,h,!1,g,f,e,d,10,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"awkward","techy","Technology")
q.E()
q.F()
B.cP(q)
$.AY=q
q=H.a(["nobody"],p)
l=P.f(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hm(!0,q,l,k,p,-13,new H.t(0,null,null,null,null,null,0,o),["NONE"],Q.F(null,null,n),"","","Null")
q.E()
q.F()
B.cP(q)
$.AU=q
A.xl()
t=3
return P.cf(Y.nD(),$async$t5)
case 3:case 1:return P.bo(r,s)}})
return P.bp($async$t5,s)}},V={lw:function lw(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},me:function me(a){this.a=a},mo:function mo(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},nz:function nz(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},o0:function o0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},os:function os(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},pt:function pt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Aq:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
s=Math.pow(256,e)
c.toString
r=H.cQ(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.w(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.w(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ai(n-1,p)
t.ai(a,8)}return t.b6(b)},
Ap:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cC(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.dW(a,b)
for(q=e*8,p=0;p<c;){o=r.ae(q)+1
n=r.ae(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.w(s,l)
s[l]=n}p+=o}return s},
tN:function(a){return new V.lG(a)},
tM:function(a){return new V.lF(a)},
Am:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
s=d.gcT()
r=C.f.ak(Math.log(H.kA(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cQ(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.w(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.w(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ai(m-1,o)
t.ai(a,r)}return t.b6(b)},
Al:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.dW(a,b)
for(r=e*8,o=0;o<c;){n=p.ae(r)+1
m=p.ae(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.w(s,k)
s[k]=m}o+=n}return s},
tL:function(a){return new V.lE(a)},
tK:function(a){return new V.lD(a)},
Ao:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
s=d.gcT()
r=C.f.ak(Math.log(H.kA(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cQ(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.w(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.w(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ak(Math.log(n)/0.6931471805599453)+1
t.ai(k-1,5)
t.ai(n-1,k)
t.ai(a,r)}return t.b6(b)},
An:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;){n=p.ae(p.ae(5)+1)+1
m=p.ae(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
lG:function lG(a){this.a=a},
lF:function lF(a){this.a=a},
lE:function lE(a){this.a=a},
lD:function lD(a){this.a=a}},Z={ly:function ly(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
AA:function(){var t,s
if(!$.wu)$.wu=!0
else return
t=[P.y]
s=new Y.pv(H.a([],t))
$.u2=s
Z.cO(s,"txt",null)
Z.cO($.u2,"vert","x-shader/x-vertex")
Z.cO($.u2,"frag","x-shader/x-fragment")
$.Az=new Y.ol(H.a([],t))
$.ww=new Y.l7(H.a([],t))
s=new B.qe(H.a([],t))
$.wy=s
Z.cO(s,"zip",null)
Z.cO($.wy,"bundle",null)
s=new U.q5(H.a([],t))
$.AI=s
Z.cO(s,"words",null)
s=new Q.ob(H.a([],t))
$.wx=s
Z.cO(s,"png",null)
Z.cO($.wx,"jpg","image/jpeg")
$.AG=new Q.o8(H.a([],t))
s=new M.oS(H.a([],t))
$.AH=s
Z.cO(s,"psprite",null)
s=new V.me(H.a([],t))
$.u1=s
Z.cO(s,"ttf",null)
Z.cO($.u1,"otf",null)
Z.cO($.u1,"woff",null)
s=new Y.nR(null,H.a([],t))
$.AD=s
Z.cO(s,"obj",null)
s=new U.nl(H.a([],t))
$.AB=s
Z.cO(s,"mp3",null)
$.AC=new U.pe(H.a([],t))
s=new U.nW(H.a([],t))
$.AE=s
Z.cO(s,"ogg",null)
$.AF=new U.pf(H.a([],t))},
cO:function(a,b,c){$.$get$mf().i(0,b,new Z.iC(a,c,[null,null]))
a.a.push(b)},
wv:function(a){var t
if($.$get$mf().Z(0,a)){t=$.$get$mf().n(0,a)
if(t.a instanceof O.ca)return t
throw H.k("File format for extension ."+H.C(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.C(a))},
iC:function iC(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
n_:function n_(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
nk:function nk(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
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
oe:function oe(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
uG:function uG(){},
uC:function uC(){},
uD:function uD(){}},X={iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},io:function io(){},mq:function mq(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},mv:function mv(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},G:function G(a,b,c){this.a=a
this.b=b
this.c=c}},N={a5:function a5(){},mi:function mi(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},n0:function n0(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oh:function oh(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oq:function oq(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},oK:function oK(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},oN:function oN(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},pB:function pB(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
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
IE:function(){var t,s,r,q,p,o,n,m
A.t5()
W.u7(C.c.as("../",N.v2())+"navbar.txt",null,null).b5(O.IG())
t=H.a([],[P.y])
for(s=$.$get$fF(),r=0;r<13;++r){q=s[r]
p=q.c
if(P.pP().gbC().Z(0,p)===!0&&J.tv(P.pP().gbC().n(0,p))==="true"){if(q.e!=null)q.e.$0()
else N.eS(q)
t.push(q.b)}}s=t.length===0?"Select a category:":C.b.aS(t," +<br/>")
p=document
J.zj(p.querySelector("#header"),s)
o=p.querySelector("#links")
for(s=$.$get$fF(),r=0;r<13;++r){q=s[r]
n="?"+q.c+"=true"
m=p.createElement("a")
m.href=n
m.textContent=null
m.appendChild(C.L.ay(m,q.a,null,null))
o.appendChild(m)}s=G.H9(new N.ti(),new N.tj(),"Filter...",new N.tk())
s.className="filter"
o.appendChild(s)},
vJ:function(a){var t="http://farragofiction.com/SBURBSimE/"+H.C(a)
return t},
vI:function(a,b,c,d,e){var t,s,r,q
a.className=d
t=document
s=t.createElement("div")
s.className=e
s.setAttribute("data-"+new W.kl(new W.i4(s)).bq("name"),b)
if(!!J.aC(a).$iseo){r=a.src
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
s.appendChild(t)}$.$get$yF().appendChild(s)
$.$get$t7().push(s)},
ik:function(a){var t=0,s=P.bk(),r,q,p,o,n,m,l
var $async$ik=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)$async$outer:switch(t){case 0:a=N.vJ(a)
q=H.a([],[P.y])
t=3
return P.cf(W.u7(a,null,null),$async$ik)
case 3:p=c
o=$.$get$yA().aR(0,p)
for(n=new H.i2(o.a,o.b,o.c,null);n.I();){m=n.d.b
if(1>=m.length){r=H.w(m,1)
t=1
break $async$outer}l=m[1]
m=$.$get$yy().b
if(typeof l!=="string")H.bd(H.bv(l))
if(!m.test(l))continue
q.push(l)}r=q
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$ik,s)},
eS:function(a){var t=0,s=P.bk(),r,q,p,o
var $async$eS=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=a.d
o=J
t=2
return P.cf(N.ik(r),$async$eS)
case 2:q=o.cX(c)
case 3:if(!q.I()){t=4
break}p=q.gP()
N.vI(W.mz(null,H.C(N.vJ(r))+H.C(p),null),p,!1,"image","imageTile")
t=3
break
case 4:return P.bo(null,s)}})
return P.bp($async$eS,s)},
Ii:function(){N.eS($.$get$fF()[4])
N.eS($.$get$fF()[5])
N.eS($.$get$fF()[7])
N.eS($.$get$fF()[6])},
yC:function(a,b){var t,s,r,q,p,o,n,m,l
t=H.a([],[P.D])
for(s=J.cX(a);s.I();){r=s.gP()
q=$.$get$yJ().hy(r)
if(q==null)continue
p=q.b
if(1>=p.length)return H.w(p,1)
if(J.bb(p[1],b)){if(2>=p.length)return H.w(p,2)
t.push(H.ez(p[2],null,null))}}C.b.dd(t)
for(s=t.length,o=0,n=1,m=0;m<t.length;t.length===s||(0,H.bV)(t),++m,o=l){l=t[m]
if(J.bb(l,n))++n
else break}return o},
t2:function(){var t=0,s=P.bk(),r,q,p,o,n
var $async$t2=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:n=N
t=3
return P.cf(N.ik("images/Hair/"),$async$t2)
case 3:q=n.yC(b,"hair")
if(typeof q!=="number"){r=H.a9(q)
t=1
break}p=[P.y]
o=1
for(;o<=q;++o)N.vI(N.yI(H.a(["images/Hair/hair_back"+o+".png","images/Hair/head.png","images/Hair/hair"+o+".png"],p)),C.a.C(o),!0,"head","headTile")
case 1:return P.bo(r,s)}})
return P.bp($async$t2,s)},
t3:function(){var t=0,s=P.bk(),r,q,p,o,n
var $async$t3=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:n=N
t=3
return P.cf(N.ik("images/Horns/"),$async$t3)
case 3:q=n.yC(b,"left")
if(typeof q!=="number"){r=H.a9(q)
t=1
break}p=[P.y]
o=1
for(;o<=q;++o)N.vI(N.yI(H.a(["images/Horns/right"+o+".png","images/Hair/head.png","images/Horns/left"+o+".png"],p)),C.a.C(o),!0,"head","headTile")
case 1:return P.bo(r,s)}})
return P.bp($async$t3,s)},
yI:function(a){var t,s
t=document.createElement("div")
t.className="spriteStack"
for(s=0;s<3;++s)t.appendChild(W.mz(null,N.vJ(a[s]),null))
return t},
cz:function cz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ti:function ti(){},
tj:function tj(){},
tk:function tk(){},
Gl:function(a){var t,s,r,q,p,o,n,m,l
t=J.cy(a)
s=new W.kn(document.querySelectorAll("link"),[null])
for(r=new H.eu(s,s.gm(s),0,null,[null]);r.I();){q=r.d
p=J.aC(q)
if(!!p.$ishu&&q.rel==="stylesheet"){o=$.$get$o6()
H.C(p.gab(q))
o.toString
o=t.length
n=Math.min(o,J.c0(p.gab(q)))
for(m=0;m<n;++m){if(m>=o)return H.w(t,m)
if(t[m]!==J.il(p.gab(q),m)){l=C.c.ad(t,m)
$.$get$o6().toString
return l.split("/").length-1}continue}}}$.$get$o6().bd(C.m,"Didn't find a css link to derive relative path")
return 0},
v2:function(){var t=P.pP()
if(!$.$get$o5().Z(0,t))$.$get$o5().i(0,t,N.Gl(t))
return $.$get$o5().n(0,t)}},E={iR:function iR(){},nV:function nV(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fM:function fM(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},kQ:function kQ(a,b,c){this.a=a
this.b=b
this.c=c},nB:function nB(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},ok:function ok(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},ov:function ov(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},q0:function q0(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2}},B={mn:function mn(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,D,G,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
cP:function(a){var t=a.f
if($.$get$mE().Z(0,t))throw H.k("Duplicate aspect id for "+a.C(0)+": "+t+" is already registered for "+J.cy($.$get$mE().n(0,t))+".")
$.$get$mE().i(0,t,a)},
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
qe:function qe(a){this.a=a},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b){this.a=a
this.b=b},
HX:function(a){return a.be(0)},
dB:function dB(a){this.a=a},
kf:function kf(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
i1:function i1(a,b){this.a=a
this.b=b}},Q={mw:function mw(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
_.r2=r2},mA:function mA(){},ob:function ob(a){this.a=a},o8:function o8(a){this.a=a},n4:function n4(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,ah,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.ah=ah
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},or:function or(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},q_:function q_(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},jU:function jU(){},
F:function(a,b,c){var t=new Q.dT(null,null,[c])
t.dk(a,b,c)
return t},
vz:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.F(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dV(a,"$isn",[e],"$asn"))if(H.dV(a,"$iscU",[e],"$ascU"))for(s=J.cX(a.gc2()),r=0;s.I();){q=s.gP()
p=t.b
o=p.length
if(r>=o)return H.w(p,r)
p[r]=q;++r}else for(s=a.gW(a),p=[H.N(t,0)],r=0;s.I();){n=s.gP()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.w(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gW(a),p=[e],o=[H.N(t,0)];s.I();){l=s.gP()
if(H.Id(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.w(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dV(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.w(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.C(J.vZ(l))+" for WeightedList<"+H.C(H.c_(H.df(e)))+">. Should be "+H.C(H.c_(H.df(e)))+" or WeightPair<"+H.C(H.c_(H.df(e)))+">.")}return t},
vA:function(a,b,c,d){return new Q.kc(J.w0(a.gc2(),new Q.q3(c,d,b)),null,[c,d])},
cU:function cU(){},
dT:function dT(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
i0:function i0(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eN:function eN(){},
i_:function i_(){},
q2:function q2(a,$ti){this.a=a
this.$ti=$ti},
kc:function kc(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
oA:function(){var t=0,s=P.bk(),r
var $async$oA=P.bq(function(a,b){if(a===1)return P.bn(b,s)
while(true)switch(t){case 0:t=3
return P.cf(A.hx("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$oA)
case 3:r=A.hx("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$oA,s)}},G={n7:function n7(y1,y2,p,q,t,u,v,w,A,B,D,G,H,R,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.R=R
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1
_.x2=x2},od:function od(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
A2:function(a){var t,s,r,q,p,o,n,m,l
t=G.Y
s=P.jH(a,t)
r=P.a2(null,null,null,t)
q=H.a([],[G.e])
for(t=G.FZ(),p=J.cX(t.a),t=new H.kd(p,t.b,[H.N(t,0)]);t.I();){o=p.gP()
if(o.eE(s))q.push(o)}C.b.dd(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bV)(q),++n){o=q[n]
if(o.eE(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bV)(p),++l)s.ao(0,p[l])}}if(s.a!==0)r.ax(0,s)
return r},
FZ:function(){var t=$.$get$c()
t.toString
return new H.eL(t,new G.mQ(),[H.N(t,0)])},
Y:function Y(){},
aW:function aW(a,b,c){this.a=a
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
mQ:function mQ(){},
H8:function(a){return a},
Hb:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
if(a!=null){t=J.b6(a)
if(t.gV(a)!==!0){t.gJ(a)
t=!1}else t=!0}else t=!0
if(t)return
t=J.cW(a)
s=t.gJ(a)
if(typeof s==="string")c=H.Iq(G.IT(),{func:1,ret:P.y,args:[,]})
r=G.Ha(b)
q=P.a2(null,null,null,null)
for(t=t.gW(a);t.I();){p=t.gP()
o=c.$1(p)
s=r.length
m=J.b6(o)
l=0
while(!0){if(!(l<r.length)){n=!0
break}k=r[l]
if(k.c){if(m.Y(o,k.a)===k.b){n=!1
break}}else if(C.c.Y(m.eD(o),k.a.toLowerCase())===k.b){n=!1
break}r.length===s||(0,H.bV)(r);++l}if(n)q.h(0,p)}return q},
Ha:function(a){var t,s,r,q,p,o,n,m,l
t=J.ec(a," ")
s=H.a([],[G.hQ])
for(r=0;q=t.length,r<q;++r){if(r<0)return H.w(t,r)
p=t[r]
q=J.b6(p)
if(q.gV(p)===!0)continue
if(q.ac(p,"-")){p=C.c.ad(p,1)
o=!0}else o=!1
if(C.c.ac(p,'"')){n=C.c.ad(p,1)
if(!C.c.cM(n,'"'))for(m=r+1;m<t.length;++m){l=t[m];++r
if(J.cD(l).cM(l,'"')){n=n+" "+C.c.L(l,0,l.length-1)
break}else n=n+" "+l}else n=C.c.L(n,0,n.length-1)
if(n.length!==0)s.push(new G.hQ(n,o,!0))}else if(p.length!==0)s.push(new G.hQ(p,o,!1))}return s},
H9:function(a,b,c,d){var t,s,r
t=W.AL("text")
s=J.b1(t)
s.sew(t,c)
r=new G.oB(a,b,d,t)
s.bM(t,"change",r,null)
s.bM(t,"keyup",r,null)
s.bM(t,"blur",r,null)
return t},
oB:function oB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c}},D={nt:function nt(y1,y2,p,q,t,u,v,w,A,B,D,G,H,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},ps:function ps(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
Hh:function(){if($.xE)return
$.xE=!0
var t=new D.cK("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=0
$.oU=t
t=new D.cK("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.Hg=t
t=new D.kg(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=2.5
t.Q=1
$.hU=t
t=new D.kg(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
t.y=2.5
$.eE=t
t=new D.cK("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.Hf=t
t=new D.cK("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dQ=t
t=new D.oo("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.eF=t
t=new D.cK("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.cu=t
t=new D.cK("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.fs=t
t=new D.cK("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.hS=t
t=new D.cK("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.hT=t
t=new D.cK("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.dA=t
t=new D.cK("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cS().push(t)
$.cd=t},
vn:function(){var t=$.$get$cS()
return new H.eL(t,new D.oV(),[H.N(t,0)])},
oV:function oV(){},
cK:function cK(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
kg:function kg(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
oo:function oo(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch}},F={nC:function nC(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},om:function om(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},oL:function oL(y1,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2){var _=this
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
_.x2=x2},q9:function q9(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
G4:function(a){if(a===C.h){window
return C.i.gar(C.i)}if(a===C.m){window
return C.i.gio()}if(a===C.a5){window
return C.i.ghL()}return P.Ig()},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
uL:function uL(){},
Ak:function(a,b,c,d){var t,s,r,q
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
c.toString
s=H.cQ(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bW(s[q])
return t.b6(b)},
Aj:function(a,b,c,d){var t,s,r,q,p
t=H.cC(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;++q){p=r.c4()
if(q>=t)return H.w(s,q)
s[q]=p}return s},
Ai:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
s=d.gcT()
r=C.f.ak(Math.log(H.kA(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cQ(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.w(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.w(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bW(o-1)
t.ai(a,r)}return t.b6(b)},
Ah:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cC(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dh(null,0)
p.a=J.dW(a,b)
for(o=0;o<c;){n=p.c4()+1
m=p.ae(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.w(s,r)
s[r]=m}o+=n}return s},
Ag:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.du(new P.ce(""),0,0)
t.ai(a,8)
c.toString
s=H.cQ(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.w(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.w(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bW(p-1)
t.bW(a)}return t.b6(b)},
Af:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cC(c)
s=new Uint8Array(t)
r=new B.dh(null,0)
r.a=J.dW(a,b)
for(q=0;q<c;){p=r.c4()+1
o=r.c4()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.w(s,m)
s[m]=o}q+=p}return s}},R={
GF:function(a){var t,s
if(a.gm(a).aA(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.giv(s).giG().em("checking for two players, ps is "+H.C(a)+", ret is "+t)
return t},
Gt:function(a){a.gJ(a).gbX()
return!1},
GE:function(a){a.gJ(a).gbX()
return!1},
GD:function(a){a.gJ(a).gbX()
return!1},
GC:function(a){return a.gJ(a).gbr().giF()},
GA:function(a){return a.gJ(a).gbr().giD()},
Gz:function(a){return a.gJ(a).gbr().giC()},
Gw:function(a){return a.gJ(a).gbr().giA()},
Gy:function(a){return a.gJ(a).gbr().giB()},
GB:function(a){return a.gJ(a).gbr().giE()},
Gx:function(a){var t=a.gJ(a)
t.gbX()
t.gbX()
return!1},
Gu:function(a){return!0},
Gv:function(a){a.gJ(a).gix()
return!1},
oj:function oj(){},
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
a6:function a6(c,d,e,f,r,x,y,z,Q,a,b){var _=this
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
pm:function pm(rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,A,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2){var _=this
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
v1:function v1(){},
v0:function v0(){}}
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,A,V,Z,X,N,E,B,Q,G,D,F,R]
setFunctionNamesIfNecessary(v)
var $={}
H.uI.prototype={}
J.i.prototype={
T:function(a,b){return a===b},
gaa:function(a){return H.ey(a)},
C:function(a){return H.og(a)},
gaf:function(a){return new H.dS(H.kD(a),null)},
$ishh:1,
$isad:1,
$isfm:1,
$isad:1,
$ismW:1,
$isi:1,
$ismW:1,
$isi:1,
$ishB:1,
$isad:1}
J.mU.prototype={
C:function(a){return String(a)},
gaa:function(a){return a?519018:218159},
gaf:function(a){return C.am},
$iscV:1}
J.mV.prototype={
T:function(a,b){return null==b},
C:function(a){return"null"},
gaa:function(a){return 0},
gaf:function(a){return C.ag},
$iscR:1}
J.hs.prototype={
gaa:function(a){return 0},
gaf:function(a){return C.af},
C:function(a){return String(a)},
$ismW:1,
h:function(a,b){return a.add(b)},
ao:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gc1:function(a){return a.left},
gc7:function(a){return a.top},
ge6:function(a){return a.attributes},
saj:function(a,b){return a.type=b},
gb8:function(a){return a.width},
gb2:function(a){return a.height},
gaI:function(a){return a.value},
i0:function(a,b){return a.parse(b)},
eW:function(a,b){return a.setLogging(b)},
eX:function(a,b){return a.setMaterials(b)}}
J.oa.prototype={}
J.eJ.prototype={}
J.es.prototype={
C:function(a){var t=a[$.$get$wd()]
return t==null?this.f1(a):J.cy(t)},
$isu3:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.eq.prototype={
c_:function(a,b){if(!!a.immutable$list)throw H.k(new P.V(b))},
cI:function(a,b){if(!!a.fixed$length)throw H.k(new P.V(b))},
h:function(a,b){this.cI(a,"add")
a.push(b)},
a3:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bJ(a))}},
az:function(a,b){return new H.ew(a,b,[H.N(a,0),null])},
aS:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.C(a[r])
if(r>=t)return H.w(s,r)
s[r]=q}return s.join(b)},
dc:function(a,b){return H.xG(a,b,null,H.N(a,0))},
hA:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bJ(a))}return s},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
ce:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.bv(c))
if(c<b||c>a.length)throw H.k(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.N(a,0)])
return H.a(a.slice(b,c),[H.N(a,0)])},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(H.dk())},
gbc:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.dk())},
a8:function(a,b,c,d,e){var t,s,r
this.c_(a,"setRange")
P.dm(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.bd(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.xf())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.w(d,r)
a[b+s]=d[r]}},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)},
bw:function(a,b,c,d){var t
this.c_(a,"fill range")
P.dm(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aH:function(a,b,c,d){var t,s,r,q,p,o
this.cI(a,"replaceRange")
P.dm(b,c,a.length,null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.al()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.au(a,b,r,d)
if(p!==0){this.a8(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a8(a,r,o,a,c)
this.au(a,b,r,d)}},
e5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])===!0)return!0
if(a.length!==t)throw H.k(new P.bJ(a))}return!1},
hx:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bJ(a))}return!0},
de:function(a,b){var t
this.c_(a,"sort")
t=b==null?P.If():b
H.k2(a,0,a.length-1,t)},
dd:function(a){return this.de(a,null)},
b3:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.bb(a[t],b))return t
return-1},
bk:function(a,b){return this.b3(a,b,0)},
Y:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bb(a[t],b))return!0
return!1},
gV:function(a){return a.length===0},
C:function(a){return P.jC(a,"[","]")},
a6:function(a,b){var t=H.a(a.slice(0),[H.N(a,0)])
return t},
ap:function(a){return this.a6(a,!0)},
gW:function(a){return new J.im(a,a.length,0,null,[H.N(a,0)])},
gaa:function(a){return H.ey(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cI(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dX(b,"newLength",null))
if(b<0)throw H.k(P.bE(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b>=a.length||b<0)throw H.k(H.c6(a,b))
return a[b]},
i:function(a,b,c){this.c_(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b>=a.length||b<0)throw H.k(H.c6(a,b))
a[b]=c},
$isaK:1,
$asaK:function(){},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
J.uH.prototype={}
J.im.prototype={
gP:function(){return this.d},
I:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.bV(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fi.prototype={
aD:function(a,b){var t
if(typeof b!=="number")throw H.k(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcQ(b)
if(this.gcQ(a)===t)return 0
if(this.gcQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcQ:function(a){return a===0?1/a<0:a<0},
ak:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.V(""+a+".floor()"))},
bE:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.V(""+a+".round()"))},
ag:function(a,b,c){if(C.a.aD(b,c)>0)throw H.k(H.bv(b))
if(this.aD(a,b)<0)return b
if(this.aD(a,c)>0)return c
return a},
l:function(a){return a},
bG:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.a1(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.bd(new P.V("Unexpected toString result: "+t))
r=J.b6(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.as("0",q)},
C:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gaa:function(a){return a&0x1FFFFFFF},
d6:function(a){return-a},
X:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a+b},
as:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a*b},
bK:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
di:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dZ(a,b)},
an:function(a,b){return(a|0)===a?a/b|0:this.dZ(a,b)},
dZ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.V("Result of truncating division is "+H.C(t)+": "+H.C(a)+" ~/ "+H.C(b)))},
av:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
if(b<0)throw H.k(H.bv(b))
return b>31?0:a<<b>>>0},
aq:function(a,b){return b>31?0:a<<b>>>0},
aZ:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
h2:function(a,b){if(b<0)throw H.k(H.bv(b))
return b>31?0:a>>>b},
dY:function(a,b){return b>31?0:a>>>b},
a7:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a<b},
aA:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>b},
at:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>=b},
gaf:function(a){return C.ap},
$isds:1}
J.jF.prototype={
gaf:function(a){return C.ao},
$isU:1,
$isds:1,
$isD:1}
J.jE.prototype={
gaf:function(a){return C.an},
$isU:1,
$isds:1}
J.er.prototype={
a1:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b<0)throw H.k(H.c6(a,b))
if(b>=a.length)H.bd(H.c6(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(b>=a.length)throw H.k(H.c6(a,b))
return a.charCodeAt(b)},
cF:function(a,b,c){if(c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
return new H.rq(b,a,c)},
aR:function(a,b){return this.cF(a,b,0)},
er:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.a1(b,c+s)!==this.a9(a,s))return
return new H.hV(c,b,a)},
X:function(a,b){if(typeof b!=="string")throw H.k(P.dX(b,null,null))
return a+b},
cM:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ad(a,s-t)},
d0:function(a,b,c){return H.yP(a,b,c)},
ie:function(a,b,c){return H.IR(a,b,c,null)},
eY:function(a,b){if(b==null)H.bd(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hr&&b.gdM().exec("").length-2===0)return a.split(b.gfQ())
else return this.fw(a,b)},
aH:function(a,b,c,d){var t,s
H.vK(b)
c=P.dm(b,c,a.length,null,null,null)
H.vK(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fw:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.y])
for(s=J.yT(b,a),s=s.gW(s),r=0,q=1;s.I();){p=s.gP()
o=p.gdf(p)
n=p.gec(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.L(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ad(a,r))
return t},
aJ:function(a,b,c){var t
H.vK(c)
if(typeof c!=="number")return c.a7()
if(c<0||c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.zd(b,a,c)!=null},
ac:function(a,b){return this.aJ(a,b,0)},
L:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.bd(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.bd(H.bv(c))
if(typeof b!=="number")return b.a7()
if(b<0)throw H.k(P.jZ(b,null,null))
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.k(P.jZ(b,null,null))
if(c>a.length)throw H.k(P.jZ(c,null,null))
return a.substring(b,c)},
ad:function(a,b){return this.L(a,b,null)},
eD:function(a){return a.toLowerCase()},
im:function(a){return a.toUpperCase()},
bl:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a9(t,0)===133){r=J.G0(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.a1(t,q)===133?J.uE(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eF:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.a1(t,r)===133)s=J.uE(t,r)}else{s=J.uE(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
as:function(a,b){var t,s
if(typeof b!=="number")return H.a9(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.O)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b3:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
bk:function(a,b){return this.b3(a,b,0)},
hR:function(a,b,c){var t
if(b==null)H.bd(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.bd(P.bE(t,0,c,null,null))
if(b.cp(a,t)!=null)return t}return-1},
eo:function(a,b){return this.hR(a,b,null)},
ea:function(a,b,c){if(c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
return H.IQ(a,b,c)},
Y:function(a,b){return this.ea(a,b,0)},
gV:function(a){return a.length===0},
aD:function(a,b){var t
if(typeof b!=="string")throw H.k(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
C:function(a){return a},
gaa:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gaf:function(a){return C.ah},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c6(a,b))
if(b>=a.length||b<0)throw H.k(H.c6(a,b))
return a[b]},
$isaK:1,
$asaK:function(){},
$isy:1}
H.lb.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.a1(this.a,b)},
$ashY:function(){return[P.D]},
$ashw:function(){return[P.D]},
$asfn:function(){return[P.D]},
$asq:function(){return[P.D]},
$asv:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.v.prototype={$asv:null}
H.et.prototype={
gW:function(a){return new H.eu(this,this.gm(this),0,null,[H.aL(this,"et",0)])},
a3:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.U(0,s))
if(t!==this.gm(this))throw H.k(new P.bJ(this))}},
gV:function(a){return this.gm(this)===0},
gJ:function(a){if(this.gm(this)===0)throw H.k(H.dk())
return this.U(0,0)},
Y:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.bb(this.U(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bJ(this))}return!1},
ca:function(a,b){return this.f0(0,b)},
az:function(a,b){return new H.ew(this,b,[H.aL(this,"et",0),null])},
a6:function(a,b){var t,s,r
t=H.a([],[H.aL(this,"et",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.U(0,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ap:function(a){return this.a6(a,!0)}}
H.pk.prototype={
gfz:function(){var t=J.c0(this.a)
return t},
gh3:function(){var t,s
t=J.c0(this.a)
s=this.b
if(J.cx(s,t))return t
return s},
gm:function(a){var t,s
t=J.c0(this.a)
s=this.b
if(J.vS(s,t))return 0
if(typeof s!=="number")return H.a9(s)
return t-s},
U:function(a,b){var t=J.ea(this.gh3(),b)
if(J.eb(b,0)||J.vS(t,this.gfz()))throw H.k(P.bz(b,this,"index",null,null))
return J.vV(this.a,t)},
a6:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.b6(s)
q=r.gm(s)
if(typeof t!=="number")return H.a9(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.U(s,t+m)
if(m>=n.length)return H.w(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bJ(this))}return n},
ap:function(a){return this.a6(a,!0)},
fa:function(a,b,c,d){var t=this.b
if(J.eb(t,0))H.bd(P.bE(t,0,null,"start",null))}}
H.eu.prototype={
gP:function(){return this.d},
I:function(){var t,s,r,q
t=this.a
s=J.b6(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bJ(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.U(t,q);++this.c
return!0}}
H.hA.prototype={
gW:function(a){return new H.jI(null,J.cX(this.a),this.b,this.$ti)},
gm:function(a){return J.c0(this.a)},
gV:function(a){return J.tt(this.a)},
gJ:function(a){return this.b.$1(J.z4(this.a))},
$asn:function(a,b){return[b]}}
H.h_.prototype={$isv:1,
$asv:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jI.prototype={
I:function(){var t=this.b
if(t.I()){this.a=this.c.$1(t.gP())
return!0}this.a=null
return!1},
gP:function(){return this.a},
$asjD:function(a,b){return[b]}}
H.ew.prototype={
gm:function(a){return J.c0(this.a)},
U:function(a,b){return this.b.$1(J.vV(this.a,b))},
$aset:function(a,b){return[b]},
$asv:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.eL.prototype={
gW:function(a){return new H.kd(J.cX(this.a),this.b,this.$ti)},
az:function(a,b){return new H.hA(this,b,[H.N(this,0),null])}}
H.kd.prototype={
I:function(){var t,s
for(t=this.a,s=this.b;t.I();)if(s.$1(t.gP())===!0)return!0
return!1},
gP:function(){return this.a.gP()}}
H.iN.prototype={
sm:function(a,b){throw H.k(new P.V("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to a fixed-length list"))},
aH:function(a,b,c,d){throw H.k(new P.V("Cannot remove from a fixed-length list"))}}
H.pM.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.V("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.V("Cannot add to an unmodifiable list"))},
a8:function(a,b,c,d,e){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aH:function(a,b,c,d){throw H.k(new P.V("Cannot remove from an unmodifiable list"))},
bw:function(a,b,c,d){throw H.k(new P.V("Cannot modify an unmodifiable list"))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
H.hY.prototype={$asq:null,$asv:null,$asn:null,$isq:1,$isv:1,$isn:1}
H.tq.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.tr.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.r5.prototype={}
H.fz.prototype={
e4:function(a,b){if(!this.f.T(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cD()},
ic:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ao(0,a)
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
if(q===s.c)s.dE();++s.d}this.y=!1}this.cD()},
h8:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aC(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.w(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
ia:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aC(a),s=0;r=this.ch,s<r.length;s+=2)if(t.T(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.bd(new P.V("removeRange"))
P.dm(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eV:function(a,b){if(!this.r.T(0,a))return
this.db=b},
hG:function(a,b,c){var t=J.aC(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){J.fI(a,c)
return}t=this.cx
if(t==null){t=P.uN(null,null)
this.cx=t}t.aO(0,new H.r0(a,c))},
hF:function(a,b){var t
if(!this.r.T(0,a))return
t=J.aC(b)
if(!t.T(b,0))t=t.T(b,1)&&!this.cy
else t=!0
if(t){this.c0()
return}t=this.cx
if(t==null){t=P.uN(null,null)
this.cx=t}t.aO(0,this.ghQ())},
hH:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fG(a)
if(b!=null)P.fG(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cy(a)
s[1]=b==null?null:J.cy(b)
for(r=new P.dq(t,t.r,null,null,[null]),r.c=t.e;r.I();)J.fI(r.d,s)},
bv:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.bO(o)
p=H.cw(o)
this.hH(q,p)
if(this.db===!0){this.c0()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghP()
if(this.cx!=null)for(;n=this.cx,!n.gV(n);)this.cx.ey().$0()}return s},
cR:function(a){return this.b.n(0,a)},
dm:function(a,b){var t=this.b
if(t.Z(0,a))throw H.k(P.lI("Registry: ports must be registered only once."))
t.i(0,a,b)},
cD:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.c0()},
c0:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.bi(0)
for(t=this.b,s=t.gc8(t),s=s.gW(s);s.I();)s.gP().fo()
t.bi(0)
this.c.bi(0)
u.globalState.z.ao(0,this.a)
this.dx.bi(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.w(t,p)
J.fI(q,t[p])}this.ch=null}},
ghP:function(){return this.d},
ghk:function(){return this.e}}
H.r0.prototype={
$0:function(){J.fI(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.qC.prototype={
hr:function(){var t=this.a
if(t.b===t.c)return
return t.ey()},
eC:function(){var t,s,r
t=this.hr()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.Z(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gV(s)}else s=!1
else s=!1
else s=!1
if(s)H.bd(P.lI("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gV(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.hv(["command","close"])
r=new H.dC(!0,new P.kr(0,null,null,null,null,null,0,[null,P.D])).aB(r)
s.toString
self.postMessage(r)}return!1}t.i6()
return!0},
dT:function(){if(self.window!=null)new H.qD(this).$0()
else for(;this.eC(););},
bF:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dT()
else try{this.dT()}catch(r){t=H.bO(r)
s=H.cw(r)
q=u.globalState.Q
p=P.hv(["command","error","msg",H.C(t)+"\n"+H.C(s)])
p=new H.dC(!0,P.ia(null,P.D)).aB(p)
q.toString
self.postMessage(p)}}}
H.qD.prototype={
$0:function(){if(!this.a.eC())return
P.xH(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eP.prototype={
i6:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bv(this.b)}}
H.r4.prototype={}
H.mF.prototype={
$0:function(){H.B3(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mG.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.eT(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.eT(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cD()},
$S:function(){return{func:1,v:true}}}
H.qn.prototype={}
H.fA.prototype={
ba:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdK())return
r=H.HT(b)
if(t.ghk()===s){s=J.b6(r)
switch(s.n(r,0)){case"pause":t.e4(s.n(r,1),s.n(r,2))
break
case"resume":t.ic(s.n(r,1))
break
case"add-ondone":t.h8(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.ia(s.n(r,1))
break
case"set-errors-fatal":t.eV(s.n(r,1),s.n(r,2))
break
case"ping":t.hG(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hF(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ao(0,s)
break}return}u.globalState.f.a.aO(0,new H.eP(t,new H.r7(this,r),"receive"))},
T:function(a,b){if(b==null)return!1
return b instanceof H.fA&&J.bb(this.b,b.b)},
gaa:function(a){return this.b.gcr()}}
H.r7.prototype={
$0:function(){var t=this.a.b
if(!t.gdK())t.fl(0,this.b)},
$S:function(){return{func:1}}}
H.ig.prototype={
ba:function(a,b){var t,s,r
t=P.hv(["command","message","port",this,"msg",b])
s=new H.dC(!0,P.ia(null,P.D)).aB(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
T:function(a,b){if(b==null)return!1
return b instanceof H.ig&&J.bb(this.b,b.b)&&J.bb(this.a,b.a)&&J.bb(this.c,b.c)},
gaa:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.av()
s=this.a
if(typeof s!=="number")return s.av()
r=this.c
if(typeof r!=="number")return H.a9(r)
return(t<<16^s<<8^r)>>>0}}
H.fp.prototype={
fo:function(){this.c=!0
this.b=null},
fl:function(a,b){if(this.c)return
this.b.$1(b)},
$isGG:1,
gcr:function(){return this.a},
gdK:function(){return this.c}}
H.pD.prototype={
fb:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aO(0,new H.eP(s,new H.pE(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dr(new H.pF(this,b),0),a)}else throw H.k(new P.V("Timer greater than 0."))}}
H.pE.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.pF.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dG.prototype={
gaa:function(a){var t=this.a
if(typeof t!=="number")return t.da()
t=C.d.aZ(t,0)^C.d.an(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dG){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcr:function(){return this.a}}
H.dC.prototype={
aB:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aC(a)
if(!!t.$isfj)return["buffer",a]
if(!!t.$isex)return["typed",a]
if(!!t.$isaK)return this.eR(a)
if(!!t.$isB0){r=this.geO()
q=t.gaF(a)
q=H.dy(q,r,H.aL(q,"n",0),null)
q=P.dl(q,!0,H.aL(q,"n",0))
t=t.gc8(a)
t=H.dy(t,r,H.aL(t,"n",0),null)
return["map",q,P.dl(t,!0,H.aL(t,"n",0))]}if(!!t.$ismW)return this.eS(a)
if(!!t.$isi)this.eG(a)
if(!!t.$isGG)this.bI(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfA)return this.eT(a)
if(!!t.$isig)return this.eU(a)
if(!!t.$isf_){p=a.$static_name
if(p==null)this.bI(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdG)return["capability",a.a]
if(!(a instanceof P.ad))this.eG(a)
return["dart",u.classIdExtractor(a),this.eQ(u.classFieldsExtractor(a))]},
bI:function(a,b){throw H.k(new P.V((b==null?"Can't transmit:":b)+" "+H.C(a)))},
eG:function(a){return this.bI(a,null)},
eR:function(a){var t=this.eP(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bI(a,"Can't serialize indexable: ")},
eP:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.aB(a[s])
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
eQ:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.aB(a[t]))
return a},
eS:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bI(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.aB(a[t[r]])
if(r>=s.length)return H.w(s,r)
s[r]=q}return["js-object",t,s]},
eU:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eT:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcr()]
return["raw sendport",a]}}
H.eO.prototype={
b0:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dF("Bad serialized message: "+H.C(a)))
switch(C.b.gJ(a)){case"ref":if(1>=a.length)return H.w(a,1)
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
s=H.a(this.bt(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bt(r),[null])
case"mutable":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return this.bt(r)
case"const":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bt(r),[null])
s.fixed$length=Array
return s
case"map":return this.hv(a)
case"sendport":return this.hw(a)
case"raw sendport":if(1>=a.length)return H.w(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.hu(a)
case"function":if(1>=a.length)return H.w(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.w(a,1)
return new H.dG(a[1])
case"dart":s=a.length
if(1>=s)return H.w(a,1)
q=a[1]
if(2>=s)return H.w(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bt(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.C(a))}},
bt:function(a){var t,s,r
t=J.b6(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
t.i(a,s,this.b0(t.n(a,s)));++s}return a},
hv:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q=P.jG()
this.b.push(q)
s=J.zm(J.w0(s,this.ght()))
for(t=J.b6(s),p=J.b6(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.b0(p.n(r,o)))
return q},
hw:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
if(3>=t)return H.w(a,3)
q=a[3]
if(J.bb(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cR(q)
if(o==null)return
n=new H.fA(o,r)}else n=new H.ig(s,q,r)
this.b.push(n)
return n},
hu:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.w(a,1)
s=a[1]
if(2>=t)return H.w(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.b6(s)
p=J.b6(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a9(n)
if(!(o<n))break
q[t.n(s,o)]=this.b0(p.n(r,o));++o}return q}}
H.le.prototype={
gV:function(a){return this.gm(this)===0},
C:function(a){return P.xm(this)},
i:function(a,b,c){return H.A4()},
$isbf:1,
$asbf:null}
H.lf.prototype={
gm:function(a){return this.a},
Z:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.Z(0,b))return
return this.dD(b)},
dD:function(a){return this.b[a]},
a3:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dD(q))}}}
H.on.prototype={}
H.pJ.prototype={
aL:function(a){var t,s,r
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
H.jP.prototype={
C:function(a){var t=this.b
if(t==null)return"NullError: "+H.C(this.a)
return"NullError: method not found: '"+H.C(t)+"' on null"}}
H.mZ.prototype={
C:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.C(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.C(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.C(this.a)+")"}}
H.pL.prototype={
C:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h8.prototype={
gaN:function(){return this.b}}
H.ts.prototype={
$1:function(a){if(!!J.aC(a).$iseh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.kt.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.tc.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.td.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.te.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.tf.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.tg.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.f_.prototype={
C:function(a){return"Closure '"+H.jX(this).trim()+"'"},
$isu3:1,
git:function(){return this},
$D:null}
H.pr.prototype={}
H.oT.prototype={
C:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fP.prototype={
T:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gaa:function(a){var t,s
t=this.c
if(t==null)s=H.ey(this.a)
else s=typeof t!=="object"?J.dE(t):H.ey(t)
t=H.ey(this.b)
if(typeof s!=="number")return s.iw()
return(s^t)>>>0},
C:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.C(this.d)+"' of "+H.og(t)}}
H.l9.prototype={
C:function(a){return this.a}}
H.ot.prototype={
C:function(a){return"RuntimeError: "+H.C(this.a)}}
H.dS.prototype={
C:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gaa:function(a){return J.dE(this.a)},
T:function(a,b){if(b==null)return!1
return b instanceof H.dS&&J.bb(this.a,b.a)}}
H.t.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gaF:function(a){return new H.na(this,[H.N(this,0)])},
gc8:function(a){return H.dy(this.gaF(this),new H.mY(this),H.N(this,0),H.N(this,1))},
Z:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dw(s,b)}else return this.hM(b)},
hM:function(a){var t=this.d
if(t==null)return!1
return this.bz(this.bO(t,this.by(a)),a)>=0},
ax:function(a,b){b.a3(0,new H.mX(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bo(t,b)
return s==null?null:s.gb1()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bo(r,b)
return s==null?null:s.gb1()}else return this.hN(b)},
hN:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bO(t,this.by(a))
r=this.bz(s,a)
if(r<0)return
return s[r].gb1()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.ct()
this.b=t}this.dl(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.ct()
this.c=s}this.dl(s,b,c)}else{r=this.d
if(r==null){r=this.ct()
this.d=r}q=this.by(b)
p=this.bO(r,q)
if(p==null)this.cB(r,q,[this.cu(b,c)])
else{o=this.bz(p,b)
if(o>=0)p[o].sb1(c)
else p.push(this.cu(b,c))}}},
ao:function(a,b){if(typeof b==="string")return this.dS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dS(this.c,b)
else return this.hO(b)},
hO:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bO(t,this.by(a))
r=this.bz(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.e1(q)
return q.gb1()},
bi:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a3:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.k(new P.bJ(this))
t=t.c}},
dl:function(a,b,c){var t=this.bo(a,b)
if(t==null)this.cB(a,b,this.cu(b,c))
else t.sb1(c)},
dS:function(a,b){var t
if(a==null)return
t=this.bo(a,b)
if(t==null)return
this.e1(t)
this.dB(a,b)
return t.gb1()},
cu:function(a,b){var t,s
t=new H.n9(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
e1:function(a){var t,s
t=a.gfV()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
by:function(a){return J.dE(a)&0x3ffffff},
bz:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bb(a[s].gel(),b))return s
return-1},
C:function(a){return P.xm(this)},
bo:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
cB:function(a,b,c){a[b]=c},
dB:function(a,b){delete a[b]},
dw:function(a,b){return this.bo(a,b)!=null},
ct:function(){var t=Object.create(null)
this.cB(t,"<non-identifier-key>",t)
this.dB(t,"<non-identifier-key>")
return t},
$isB0:1,
$isbf:1,
$asbf:null}
H.mY.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mX.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eR(function(a,b){return{func:1,args:[a,b]}},this.a,"t")}}
H.n9.prototype={
gel:function(){return this.a},
gb1:function(){return this.b},
gfV:function(){return this.d},
sb1:function(a){return this.b=a}}
H.na.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gW:function(a){var t,s
t=this.a
s=new H.nb(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
Y:function(a,b){return this.a.Z(0,b)},
a3:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bJ(t))
s=s.c}}}
H.nb.prototype={
gP:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bJ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.t8.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.t9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.y]}}}
H.ta.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.y]}}}
H.hr.prototype={
C:function(a){return"RegExp/"+this.a+"/"},
gdN:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.uF(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdM:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.uF(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
hy:function(a){var t=this.b.exec(H.rV(a))
if(t==null)return
return new H.ib(this,t)},
cF:function(a,b,c){var t
H.rV(b)
t=J.c0(b)
if(typeof t!=="number")return H.a9(t)
t=c>t
if(t)throw H.k(P.bE(c,0,J.c0(b),null,null))
return new H.qh(this,b,c)},
aR:function(a,b){return this.cF(a,b,0)},
fA:function(a,b){var t,s
t=this.gdN()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.ib(this,s)},
cp:function(a,b){var t,s
t=this.gdM()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.w(s,-1)
if(s.pop()!=null)return
return new H.ib(this,s)},
er:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
return this.cp(b,c)},
$isGI:1,
gfQ:function(){return this.b}}
H.ib.prototype={
gdf:function(a){return this.b.index},
gec:function(a){var t=this.b
return t.index+t[0].length},
be:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.w(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$isdz:1}
H.qh.prototype={
gW:function(a){return new H.i2(this.a,this.b,this.c,null)},
$ashq:function(){return[P.dz]},
$asn:function(){return[P.dz]}}
H.i2.prototype={
gP:function(){return this.d},
I:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.c0(t)
if(typeof t!=="number")return H.a9(t)
if(s<=t){r=this.a.fA(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.hV.prototype={
gec:function(a){return this.a+this.c.length},
n:function(a,b){return this.be(b)},
be:function(a){if(a!==0)throw H.k(P.jZ(a,null,null))
return this.c},
$isdz:1,
gdf:function(a){return this.a}}
H.rq.prototype={
gW:function(a){return new H.rr(this.a,this.b,this.c,null)},
gJ:function(a){var t,s,r
t=this.a
s=this.b
r=t.indexOf(s,this.c)
if(r>=0)return new H.hV(r,t,s)
throw H.k(H.dk())},
$asn:function(){return[P.dz]}}
H.rr.prototype={
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
this.d=new H.hV(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gP:function(){return this.d}}
H.fj.prototype={
gaf:function(a){return C.a8},
hf:function(a,b,c){return H.cQ(a,b,c)},
he:function(a){return this.hf(a,0,null)},
hd:function(a,b,c){var t
H.yg(a,b,c)
t=new DataView(a,b)
return t},
hc:function(a,b){return this.hd(a,b,null)},
$isfj:1,
$isbj:1,
gep:function(a){return a.byteLength}}
H.ex.prototype={
fN:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dX(b,d,"Invalid list position"))
else throw H.k(P.bE(b,0,c,d,null))},
dr:function(a,b,c,d){if(b>>>0!==b||b>c)this.fN(a,b,c,d)},
$isex:1,
gbY:function(a){return a.buffer},
gep:function(a){return a.byteLength}}
H.nE.prototype={
gaf:function(a){return C.a9}}
H.jL.prototype={
gm:function(a){return a.length},
dX:function(a,b,c,d,e){var t,s,r
t=a.length
this.dr(a,b,t,"start")
this.dr(a,c,t,"end")
if(typeof b!=="number")return b.aA()
if(typeof c!=="number")return H.a9(c)
if(b>c)throw H.k(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a7()
if(e<0)throw H.k(P.dF(e))
r=d.length
if(r-e<s)throw H.k(new P.b2("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaQ:1,
$asaQ:function(){},
$isaK:1,
$asaK:function(){}}
H.hE.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
a[b]=c},
a8:function(a,b,c,d,e){if(!!J.aC(d).$ishE){this.dX(a,b,c,d,e)
return}this.dh(a,b,c,d,e)},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)}}
H.hG.prototype={
$asaQ:function(){},
$asaK:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$asn:function(){return[P.U]},
$isq:1,
$isv:1,
$isn:1}
H.hI.prototype={
$asaQ:function(){},
$asaK:function(){},
$asq:function(){return[P.U]},
$asv:function(){return[P.U]},
$asn:function(){return[P.U]}}
H.hF.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
a[b]=c},
a8:function(a,b,c,d,e){if(!!J.aC(d).$ishF){this.dX(a,b,c,d,e)
return}this.dh(a,b,c,d,e)},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.hH.prototype={
$asaQ:function(){},
$asaK:function(){},
$asq:function(){return[P.D]},
$asv:function(){return[P.D]},
$asn:function(){return[P.D]},
$isq:1,
$isv:1,
$isn:1}
H.hJ.prototype={
$asaQ:function(){},
$asaK:function(){},
$asq:function(){return[P.D]},
$asv:function(){return[P.D]},
$asn:function(){return[P.D]}}
H.nF.prototype={
gaf:function(a){return C.aa},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.nG.prototype={
gaf:function(a){return C.ab},
$isq:1,
$asq:function(){return[P.U]},
$isv:1,
$asv:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.nH.prototype={
gaf:function(a){return C.ac},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nI.prototype={
gaf:function(a){return C.ad},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nJ.prototype={
gaf:function(a){return C.ae},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nK.prototype={
gaf:function(a){return C.ai},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.nL.prototype={
gaf:function(a){return C.aj},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.jM.prototype={
gaf:function(a){return C.ak},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
H.fk.prototype={
gaf:function(a){return C.al},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.bd(H.c6(a,b))
return a[b]},
ce:function(a,b,c){return new Uint8Array(a.subarray(b,H.HS(b,c,a.length)))},
$isfk:1,
$isde:1,
$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.qj.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.qi.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.qk.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.ql.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.rJ.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.rK.prototype={
$2:function(a,b){this.a.$2(1,new H.h8(a,b))},
$S:function(){return{func:1,args:[,P.dP]}}}
P.rU.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.D,,]}}}
P.co.prototype={}
P.rY.prototype={
$0:function(){var t,s,r
try{this.b.aK(this.a.$0())}catch(r){t=H.bO(r)
s=H.cw(r)
P.yh(this.b,t,s)}},
$S:function(){return{func:1}}}
P.mh.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.am(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.am(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.mg.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.w(r,t)
r[t]=a
if(s===0)this.d.dv(r)}else if(t.b===0&&!this.b)this.d.am(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.f0.prototype={}
P.kj.prototype={
cJ:function(a,b){if(a==null)a=new P.fl()
if(this.a.a!==0)throw H.k(new P.b2("Future already completed"))
$.aB.toString
this.am(a,b)},
bs:function(a){return this.cJ(a,null)},
$isf0:1,
ghD:function(){return this.a}}
P.dU.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.b2("Future already completed"))
t.dn(b)},
hi:function(a){return this.aE(a,null)},
am:function(a,b){this.a.dq(a,b)}}
P.kv.prototype={
aE:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.b2("Future already completed"))
t.aK(b)},
am:function(a,b){this.a.am(a,b)}}
P.ko.prototype={
gh7:function(){return this.b.b},
geh:function(){return(this.c&1)!==0},
ghK:function(){return(this.c&2)!==0},
geg:function(){return this.c===8},
hI:function(a){return this.b.b.d1(this.d,a)},
hS:function(a){if(this.c!==6)return!0
return this.b.b.d1(this.d,J.fH(a))},
hE:function(a){var t,s,r
t=this.e
s=J.b1(a)
r=this.b.b
if(H.eT(t,{func:1,args:[,,]}))return r.ii(t,s.gar(a),a.gaN())
else return r.d1(t,s.gar(a))},
hJ:function(){return this.b.b.eA(this.d)},
gcv:function(){return this.a}}
P.bm.prototype={
gfO:function(){return this.a===2},
gcs:function(){return this.a>=4},
c6:function(a,b){var t=$.aB
if(t!==C.e){t.toString
if(b!=null)b=P.yk(b,t)}return this.cC(a,b)},
b5:function(a){return this.c6(a,null)},
cC:function(a,b){var t,s
t=new P.bm(0,$.aB,null,[null])
s=b==null?1:3
this.cg(new P.ko(null,t,s,a,b,[H.N(this,0),null]))
return t},
c9:function(a){var t,s
t=$.aB
s=new P.bm(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.N(this,0)
this.cg(new P.ko(null,s,8,a,null,[t,t]))
return s},
cg:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcs()){s.cg(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fD(null,null,t,new P.qI(this,a))}},
dR:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcv()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcs()){p.dR(a)
return}this.a=p.a
this.c=p.c}t.a=this.bT(a)
s=this.b
s.toString
P.fD(null,null,s,new P.qQ(t,this))}},
bS:function(){var t=this.c
this.c=null
return this.bT(t)},
bT:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcv()
t.a=s}return s},
aK:function(a){var t,s
t=this.$ti
if(H.dV(a,"$isco",t,"$asco"))if(H.dV(a,"$isbm",t,null))P.qL(a,this)
else P.y3(a,this)
else{s=this.bS()
this.a=4
this.c=a
P.fy(this,s)}},
dv:function(a){var t=this.bS()
this.a=4
this.c=a
P.fy(this,t)},
am:function(a,b){var t=this.bS()
this.a=8
this.c=new P.eU(a,b)
P.fy(this,t)},
fq:function(a){return this.am(a,null)},
dn:function(a){var t
if(H.dV(a,"$isco",this.$ti,"$asco")){this.fn(a)
return}this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qK(this,a))},
fn:function(a){var t
if(H.dV(a,"$isbm",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qP(this,a))}else P.qL(a,this)
return}P.y3(a,this)},
dq:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fD(null,null,t,new P.qJ(this,a,b))},
$isco:1,
gbU:function(){return this.a},
gfY:function(){return this.c}}
P.qI.prototype={
$0:function(){P.fy(this.a,this.b)},
$S:function(){return{func:1}}}
P.qQ.prototype={
$0:function(){P.fy(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.qM.prototype={
$1:function(a){var t=this.a
t.a=0
t.aK(a)},
$S:function(){return{func:1,args:[,]}}}
P.qN.prototype={
$2:function(a,b){this.a.am(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.qO.prototype={
$0:function(){this.a.am(this.b,this.c)},
$S:function(){return{func:1}}}
P.qK.prototype={
$0:function(){this.a.dv(this.b)},
$S:function(){return{func:1}}}
P.qP.prototype={
$0:function(){P.qL(this.b,this.a)},
$S:function(){return{func:1}}}
P.qJ.prototype={
$0:function(){this.a.am(this.b,this.c)},
$S:function(){return{func:1}}}
P.qT.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hJ()}catch(q){s=H.bO(q)
r=H.cw(q)
if(this.c){p=J.fH(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eU(s,r)
o.a=!0
return}if(!!J.aC(t).$isco){if(t instanceof P.bm&&t.gbU()>=4){if(t.gbU()===8){p=this.b
p.b=t.gfY()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b5(new P.qU(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qU.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.qS.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hI(this.c)}catch(r){t=H.bO(r)
s=H.cw(r)
q=this.a
q.b=new P.eU(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.qR.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hS(t)===!0&&q.e!=null){p=this.b
p.b=q.hE(t)
p.a=!1}}catch(o){s=H.bO(o)
r=H.cw(o)
q=this.a
p=J.fH(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eU(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ki.prototype={}
P.dn.prototype={
az:function(a,b){return new P.r6(b,this,[H.aL(this,"dn",0),null])},
Y:function(a,b){var t,s
t={}
s=new P.bm(0,$.aB,null,[P.cV])
t.a=null
t.a=this.aT(new P.p_(t,this,b,s),!0,new P.p0(s),s.gbg())
return s},
a3:function(a,b){var t,s
t={}
s=new P.bm(0,$.aB,null,[null])
t.a=null
t.a=this.aT(new P.p5(t,this,b,s),!0,new P.p6(s),s.gbg())
return s},
gm:function(a){var t,s
t={}
s=new P.bm(0,$.aB,null,[P.D])
t.a=0
this.aT(new P.p9(t),!0,new P.pa(t,s),s.gbg())
return s},
gV:function(a){var t,s
t={}
s=new P.bm(0,$.aB,null,[P.cV])
t.a=null
t.a=this.aT(new P.p7(t,s),!0,new P.p8(s),s.gbg())
return s},
ap:function(a){var t,s,r
t=H.aL(this,"dn",0)
s=H.a([],[t])
r=new P.bm(0,$.aB,null,[[P.q,t]])
this.aT(new P.pb(this,s),!0,new P.pc(s,r),r.gbg())
return r},
gJ:function(a){var t,s
t={}
s=new P.bm(0,$.aB,null,[H.aL(this,"dn",0)])
t.a=null
t.a=this.aT(new P.p1(t,this,s),!0,new P.p2(s),s.gbg())
return s}}
P.p_.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.yo(new P.oY(this.c,a),new P.oZ(t,s),P.yf(t.a,s))},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.oY.prototype={
$0:function(){return J.bb(this.b,this.a)},
$S:function(){return{func:1}}}
P.oZ.prototype={
$1:function(a){if(a===!0)P.vF(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.cV]}}}
P.p0.prototype={
$0:function(){this.a.aK(!1)},
$S:function(){return{func:1}}}
P.p5.prototype={
$1:function(a){P.yo(new P.p3(this.c,a),new P.p4(),P.yf(this.a.a,this.d))},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.p3.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.p4.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.p6.prototype={
$0:function(){this.a.aK(null)},
$S:function(){return{func:1}}}
P.p9.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.pa.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.p7.prototype={
$1:function(a){P.vF(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.p8.prototype={
$0:function(){this.a.aK(!0)},
$S:function(){return{func:1}}}
P.pb.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.a,"dn")}}
P.pc.prototype={
$0:function(){this.b.aK(this.a)},
$S:function(){return{func:1}}}
P.p1.prototype={
$1:function(a){P.vF(this.a.a,this.c,a)},
$S:function(){return H.eR(function(a){return{func:1,args:[a]}},this.b,"dn")}}
P.p2.prototype={
$0:function(){var t,s,r,q
try{r=H.dk()
throw H.k(r)}catch(q){t=H.bO(q)
s=H.cw(q)
P.yh(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oX.prototype={}
P.dp.prototype={
cU:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.e7()
if((t&4)===0&&(this.e&32)===0)this.dF(this.gdP())},
ev:function(a){return this.cU(a,null)},
ez:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gV(t)}else t=!1
if(t)this.r.cc(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dF(this.gdQ())}}}},
bZ:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cj()
t=this.f
return t==null?$.$get$hi():t},
cj:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.e7()
if((this.e&32)===0)this.r=null
this.f=this.dO()},
bN:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dU(b)
else this.ci(new P.qw(b,null,[H.aL(this,"dp",0)]))},
bL:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dW(a,b)
else this.ci(new P.qy(a,b,null))},
fm:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dV()
else this.ci(C.P)},
bQ:function(){},
bR:function(){},
dO:function(){return},
ci:function(a){var t,s
t=this.r
if(t==null){t=new P.ro(null,null,0,[H.aL(this,"dp",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.cc(this)}},
dU:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.d2(this.a,a)
this.e=(this.e&4294967263)>>>0
this.ck((t&4)!==0)},
dW:function(a,b){var t,s
t=this.e
s=new P.qp(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cj()
t=this.f
if(!!J.aC(t).$isco&&t!==$.$get$hi())t.c9(s)
else s.$0()}else{s.$0()
this.ck((t&4)!==0)}},
dV:function(){var t,s
t=new P.qo(this)
this.cj()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aC(s).$isco&&s!==$.$get$hi())s.c9(t)
else t.$0()},
dF:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.ck((t&4)!==0)},
ck:function(a){var t,s
if((this.e&64)!==0){t=this.r
t=t.gV(t)}else t=!1
if(t){t=(this.e&4294967231)>>>0
this.e=t
if((t&4)!==0)if(t<128){t=this.r
t=t==null||t.gV(t)}else t=!1
else t=!1
if(t)this.e=(this.e&4294967291)>>>0}for(;!0;a=s){t=this.e
if((t&8)!==0){this.r=null
return}s=(t&4)!==0
if(a===s)break
this.e=(t^32)>>>0
if(s)this.bQ()
else this.bR()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.cc(this)},
fe:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.yk(b,t)
this.c=c},
gbU:function(){return this.e}}
P.qp.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.eT(s,{func:1,args:[P.ad,P.dP]})
q=t.d
p=this.b
o=t.b
if(r)q.ij(o,p,this.c)
else q.d2(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.qo.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.eB(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.km.prototype={
gbA:function(a){return this.a},
sbA:function(a,b){return this.a=b}}
P.qw.prototype={
cV:function(a){a.dU(this.b)}}
P.qy.prototype={
cV:function(a){a.dW(this.b,this.c)},
$askm:function(){},
gar:function(a){return this.b},
gaN:function(){return this.c}}
P.qx.prototype={
cV:function(a){a.dV()},
gbA:function(a){return},
sbA:function(a,b){throw H.k(new P.b2("No events after a done."))}}
P.r8.prototype={
cc:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.yM(new P.r9(this,a))
this.a=1},
e7:function(){if(this.a===1)this.a=3},
gbU:function(){return this.a}}
P.r9.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbA(r)
t.b=q
if(q==null)t.c=null
r.cV(this.b)},
$S:function(){return{func:1}}}
P.ro.prototype={
gV:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbA(0,b)
this.c=b}}}
P.rp.prototype={}
P.rM.prototype={
$0:function(){return this.a.am(this.b,this.c)},
$S:function(){return{func:1}}}
P.rL.prototype={
$2:function(a,b){P.HR(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dP]}}}
P.rN.prototype={
$0:function(){return this.a.aK(this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
aT:function(a,b,c,d){return this.fu(a,d,c,!0===b)},
eq:function(a,b,c){return this.aT(a,null,b,c)},
fu:function(a,b,c,d){return P.Hu(this,a,b,c,d,H.aL(this,"i6",0),H.aL(this,"i6",1))},
dG:function(a,b){b.bN(0,a)},
fL:function(a,b,c){c.bL(a,b)},
$asdn:function(a,b){return[b]}}
P.i7.prototype={
bN:function(a,b){if((this.e&2)!==0)return
this.f3(0,b)},
bL:function(a,b){if((this.e&2)!==0)return
this.f4(a,b)},
bQ:function(){var t=this.y
if(t==null)return
t.ev(0)},
bR:function(){var t=this.y
if(t==null)return
t.ez(0)},
dO:function(){var t=this.y
if(t!=null){this.y=null
return t.bZ(0)}return},
fG:function(a){this.x.dG(a,this)},
fK:function(a,b){this.x.fL(a,b,this)},
fI:function(){this.fm()},
fh:function(a,b,c,d,e,f,g){this.y=this.x.a.eq(this.gfF(),this.gfH(),this.gfJ())},
$asdp:function(a,b){return[b]}}
P.r6.prototype={
dG:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.bO(q)
r=H.cw(q)
P.HQ(b,s,r)
return}b.bN(0,t)}}
P.eU.prototype={
C:function(a){return H.C(this.a)},
$iseh:1,
gar:function(a){return this.a},
gaN:function(){return this.b}}
P.rI.prototype={}
P.rT.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fl()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cy(s)
throw r},
$S:function(){return{func:1}}}
P.rc.prototype={
eB:function(a){var t,s,r,q
try{if(C.e===$.aB){r=a.$0()
return r}r=P.yl(null,null,this,a)
return r}catch(q){t=H.bO(q)
s=H.cw(q)
r=P.kz(null,null,this,t,s)
return r}},
d2:function(a,b){var t,s,r,q
try{if(C.e===$.aB){r=a.$1(b)
return r}r=P.yn(null,null,this,a,b)
return r}catch(q){t=H.bO(q)
s=H.cw(q)
r=P.kz(null,null,this,t,s)
return r}},
ij:function(a,b,c){var t,s,r,q
try{if(C.e===$.aB){r=a.$2(b,c)
return r}r=P.ym(null,null,this,a,b,c)
return r}catch(q){t=H.bO(q)
s=H.cw(q)
r=P.kz(null,null,this,t,s)
return r}},
cH:function(a,b){if(b)return new P.rd(this,a)
else return new P.re(this,a)},
hg:function(a,b){return new P.rf(this,a)},
n:function(a,b){return},
eA:function(a){if($.aB===C.e)return a.$0()
return P.yl(null,null,this,a)},
d1:function(a,b){if($.aB===C.e)return a.$1(b)
return P.yn(null,null,this,a,b)},
ii:function(a,b,c){if($.aB===C.e)return a.$2(b,c)
return P.ym(null,null,this,a,b,c)}}
P.rd.prototype={
$0:function(){return this.a.eB(this.b)},
$S:function(){return{func:1}}}
P.re.prototype={
$0:function(){return this.a.eA(this.b)},
$S:function(){return{func:1}}}
P.rf.prototype={
$1:function(a){return this.a.d2(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qW.prototype={
gm:function(a){return this.a},
gV:function(a){return this.a===0},
gc8:function(a){var t=H.N(this,0)
return H.dy(new P.qX(this,[t]),new P.qZ(this),t,H.N(this,1))},
Z:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.ft(b)},
ft:function(a){var t=this.d
if(t==null)return!1
return this.aQ(t[this.aP(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fD(0,b)},
fD:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aP(b)]
r=this.aQ(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.vC()
this.b=t}this.dt(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.vC()
this.c=s}this.dt(s,b,c)}else this.h0(b,c)},
h0:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.vC()
this.d=t}s=this.aP(a)
r=t[s]
if(r==null){P.vD(t,s,[a,b]);++this.a
this.e=null}else{q=this.aQ(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ao:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bm(this.c,b)
else return this.cA(0,b)},
cA:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aP(b)]
r=this.aQ(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a3:function(a,b){var t,s,r,q
t=this.cm()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bJ(this))}},
cm:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dt:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.vD(a,b,c)},
bm:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.Hw(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aP:function(a){return J.dE(a)&0x3ffffff},
aQ:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.bb(a[s],b))return s
return-1},
$isbf:1,
$asbf:null}
P.qZ.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qX.prototype={
gm:function(a){return this.a.a},
gV:function(a){return this.a.a===0},
gW:function(a){var t=this.a
return new P.qY(t,t.cm(),0,null,this.$ti)},
Y:function(a,b){return this.a.Z(0,b)},
a3:function(a,b){var t,s,r,q
t=this.a
s=t.cm()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bJ(t))}}}
P.qY.prototype={
gP:function(){return this.d},
I:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bJ(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.kr.prototype={
by:function(a){return H.IH(a)&0x3ffffff},
bz:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].gel()
if(r==null?b==null:r===b)return s}return-1}}
P.kq.prototype={
gW:function(a){var t=new P.dq(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gV:function(a){return this.a===0},
Y:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.fs(b)},
fs:function(a){var t=this.d
if(t==null)return!1
return this.aQ(t[this.aP(a)],a)>=0},
cR:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.Y(0,a)?a:null
else return this.fP(a)},
fP:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aP(a)]
r=this.aQ(s,a)
if(r<0)return
return J.il(s,r).gdC()},
a3:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.k(new P.bJ(this))
t=t.b}},
gJ:function(a){var t=this.e
if(t==null)throw H.k(new P.b2("No elements"))
return t.a},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.ds(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.ds(r,b)}else return this.aO(0,b)},
aO:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.Hz()
this.d=t}s=this.aP(b)
r=t[s]
if(r==null)t[s]=[this.cl(b)]
else{if(this.aQ(r,b)>=0)return!1
r.push(this.cl(b))}return!0},
ao:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bm(this.c,b)
else return this.cA(0,b)},
cA:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aP(b)]
r=this.aQ(s,b)
if(r<0)return!1
this.du(s.splice(r,1)[0])
return!0},
bi:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ds:function(a,b){if(a[b]!=null)return!1
a[b]=this.cl(b)
return!0},
bm:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.du(t)
delete a[b]
return!0},
cl:function(a){var t,s
t=new P.r2(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
du:function(a){var t,s
t=a.gfp()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aP:function(a){return J.dE(a)&0x3ffffff},
aQ:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bb(a[s].gdC(),b))return s
return-1},
$ise7:1,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
P.r2.prototype={
gdC:function(){return this.a},
gfp:function(){return this.c}}
P.dq.prototype={
gP:function(){return this.d},
I:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bJ(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.r_.prototype={}
P.fh.prototype={
az:function(a,b){return H.dy(this,b,H.aL(this,"fh",0),null)},
Y:function(a,b){var t
for(t=this.gW(this);t.I();)if(J.bb(t.gP(),b))return!0
return!1},
a3:function(a,b){var t
for(t=this.gW(this);t.I();)b.$1(t.gP())},
a6:function(a,b){return P.dl(this,!0,H.aL(this,"fh",0))},
ap:function(a){return this.a6(a,!0)},
gm:function(a){var t,s
t=this.gW(this)
for(s=0;t.I();)++s
return s},
gV:function(a){return!this.gW(this).I()},
gJ:function(a){var t=this.gW(this)
if(!t.I())throw H.k(H.dk())
return t.gP()},
C:function(a){return P.uB(this,"(",")")},
$isn:1,
$asn:null}
P.hq.prototype={}
P.hw.prototype={}
P.fn.prototype={$asq:null,$asv:null,$asn:null,$isq:1,$isv:1,$isn:1}
P.b5.prototype={
gW:function(a){return new H.eu(a,this.gm(a),0,null,[H.aL(a,"b5",0)])},
U:function(a,b){return this.n(a,b)},
a3:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bJ(a))}},
gV:function(a){return this.gm(a)===0},
gJ:function(a){if(this.gm(a)===0)throw H.k(H.dk())
return this.n(a,0)},
Y:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.bb(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bJ(a))}return!1},
az:function(a,b){return new H.ew(a,b,[H.aL(a,"b5",0),null])},
dc:function(a,b){return H.xG(a,b,null,H.aL(a,"b5",0))},
a6:function(a,b){var t,s,r
t=H.a([],[H.aL(a,"b5",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.w(t,s)
t[s]=r}return t},
ap:function(a){return this.a6(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bw:function(a,b,c,d){var t
P.dm(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a8:function(a,b,c,d,e){var t,s,r,q,p,o
P.dm(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.al()
if(typeof b!=="number")return H.a9(b)
t=c-b
if(t===0)return
if(J.eb(e,0))H.bd(P.bE(e,0,null,"skipCount",null))
if(H.dV(d,"$isq",[H.aL(a,"b5",0)],"$asq")){s=e
r=d}else{r=J.zk(d,e).a6(0,!1)
s=0}q=J.kB(s)
p=J.b6(r)
if(J.cx(q.X(s,t),p.gm(r)))throw H.k(H.xf())
if(q.a7(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.X(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.X(s,o)))},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aH:function(a,b,c,d){var t,s,r,q,p
P.dm(b,c,this.gm(a),null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.al()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.au(a,b,r,d)
if(q!==0){this.a8(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a8(a,r,p,a,c)
this.au(a,b,r,d)}},
b3:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.bb(this.n(a,t),b))return t
return-1},
bk:function(a,b){return this.b3(a,b,0)},
C:function(a){return P.jC(a,"[","]")},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
P.rz.prototype={
i:function(a,b,c){throw H.k(new P.V("Cannot modify unmodifiable map"))},
$isbf:1,
$asbf:null}
P.np.prototype={
n:function(a,b){return J.il(this.a,b)},
i:function(a,b,c){J.kG(this.a,b,c)},
Z:function(a,b){return J.yY(this.a,b)},
a3:function(a,b){J.z0(this.a,b)},
gV:function(a){return J.tt(this.a)},
gm:function(a){return J.c0(this.a)},
C:function(a){return J.cy(this.a)},
$isbf:1,
$asbf:null}
P.hZ.prototype={$asbf:null,$isbf:1}
P.nq.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.O+=", "
t.a=!1
t=this.b
s=t.O+=H.C(a)
t.O=s+": "
t.O+=H.C(b)},
$S:function(){return{func:1,args:[,,]}}}
P.nc.prototype={
gW:function(a){return new P.r3(this,this.c,this.d,this.b,null,this.$ti)},
a3:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.w(r,s)
b.$1(r[s])
if(t!==this.d)H.bd(new P.bJ(this))}},
gV:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
gJ:function(a){var t,s
t=this.b
if(t===this.c)throw H.k(H.dk())
s=this.a
if(t>=s.length)return H.w(s,t)
return s[t]},
U:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a9(b)
if(0>b||b>=t)H.bd(P.bz(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.w(s,q)
return s[q]},
a6:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.h6(t)
return t},
ap:function(a){return this.a6(a,!0)},
h:function(a,b){this.aO(0,b)},
bi:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.w(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
C:function(a){return P.jC(this,"{","}")},
ey:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.dk());++this.d
s=this.a
r=s.length
if(t>=r)return H.w(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aO:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.w(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.dE();++this.d},
dE:function(){var t,s,r,q
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
h6:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a8(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a8(a,0,p,r,t)
C.b.a8(a,p,p+this.c,this.a,0)
return this.c+p}},
f9:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asv:null,
$asn:null}
P.r3.prototype={
gP:function(){return this.e},
I:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.bd(new P.bJ(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.w(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.oF.prototype={
gV:function(a){return this.a===0},
ax:function(a,b){var t
for(t=J.cX(b);t.I();)this.h(0,t.gP())},
a6:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dq(this,this.r,null,null,[null]),s.c=this.e,r=0;s.I();r=p){q=s.d
p=r+1
if(r>=t.length)return H.w(t,r)
t[r]=q}return t},
ap:function(a){return this.a6(a,!0)},
az:function(a,b){return new H.h_(this,b,[H.N(this,0),null])},
C:function(a){return P.jC(this,"{","}")},
a3:function(a,b){var t
for(t=new P.dq(this,this.r,null,null,[null]),t.c=this.e;t.I();)b.$1(t.d)},
aS:function(a,b){var t,s
t=new P.dq(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())return""
if(b===""){s=""
do s+=H.C(t.d)
while(t.I())}else{s=H.C(t.d)
for(;t.I();)s=s+b+H.C(t.d)}return s.charCodeAt(0)==0?s:s},
gJ:function(a){var t=new P.dq(this,this.r,null,null,[null])
t.c=this.e
if(!t.I())throw H.k(H.dk())
return t.d},
$ise7:1,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
P.oE.prototype={}
P.kY.prototype={
hX:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.b6(b)
a1=P.dm(a0,a1,t.gm(b),null,null,null)
s=$.$get$y2()
if(typeof a1!=="number")return H.a9(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.a1(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.t6(C.c.a9(b,l))
h=H.t6(C.c.a9(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.w(s,g)
f=s[g]
if(f>=0){g=C.c.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.O.length
if(e==null)e=0
if(typeof e!=="number")return e.X()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.ce("")
p.O+=C.c.L(b,q,r)
p.O+=H.hL(k)
q=l
continue}}throw H.k(new P.bL("Invalid base64 data",b,r))}if(p!=null){t=p.O+=t.L(b,q,a1)
e=t.length
if(o>=0)P.w5(b,n,a1,o,m,e)
else{d=C.a.bK(e-1,4)+1
if(d===1)throw H.k(new P.bL("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.O=t;++d}}t=p.O
return C.c.aH(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.w5(b,n,a1,o,m,c)
else{d=C.d.bK(c,4)
if(d===1)throw H.k(new P.bL("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aH(b,a1,a1,d===2?"==":"=")}return b},
$asfU:function(){return[[P.q,P.D],P.y]}}
P.kZ.prototype={
$asfW:function(){return[[P.q,P.D],P.y]}}
P.fU.prototype={}
P.fW.prototype={}
P.lC.prototype={
$asfU:function(){return[P.y,[P.q,P.D]]}}
P.pV.prototype={
gK:function(a){return"utf-8"}}
P.pW.prototype={
cK:function(a,b,c){var t,s,r,q
t=J.c0(a)
P.dm(b,c,t,null,null,null)
s=new P.ce("")
r=new P.rB(!1,s,!0,0,0,0)
r.cK(a,b,t)
r.hz(0,a,t)
q=s.O
return q.charCodeAt(0)==0?q:q},
hl:function(a){return this.cK(a,0,null)},
$asfW:function(){return[[P.q,P.D],P.y]}}
P.rB.prototype={
hz:function(a,b,c){if(this.e>0)throw H.k(new P.bL("Unfinished UTF-8 octet sequence",b,c))},
cK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.rD(c)
p=new P.rC(this,a,b,c)
$loop$0:for(o=J.b6(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aM()
if((l&192)!==128){k=new P.bL("Bad UTF-8 encoding 0x"+C.d.bG(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.w(C.z,k)
if(t<=C.z[k]){k=new P.bL("Overlong encoding of 0x"+C.a.bG(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bL("Character outside valid Unicode range: 0x"+C.a.bG(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.O+=H.hL(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.cx(j,0)){this.c=!1
if(typeof j!=="number")return H.a9(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dD(l)
if(g.a7(l,0)){g=new P.bL("Negative UTF-8 code unit: -0x"+J.zn(g.d6(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aM()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bL("Bad UTF-8 encoding 0x"+C.d.bG(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.rD.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.b6(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aM()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.D,args:[,P.D]}}}
P.rC.prototype={
$2:function(a,b){this.a.b.O+=P.ph(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.D,P.D]}}}
P.cV.prototype={}
P.bG.prototype={}
P.dZ.prototype={
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.dZ))return!1
return this.a===b.a&&this.b===b.b},
aD:function(a,b){return C.a.aD(this.a,b.gh5())},
gaa:function(a){var t=this.a
return(t^C.a.aZ(t,30))&1073741823},
C:function(a){var t,s,r,q,p,o,n
t=P.A7(H.xs(this))
s=P.iu(H.v8(this))
r=P.iu(H.v7(this))
q=P.iu(H.Gn(this))
p=P.iu(H.Gp(this))
o=P.iu(H.Gq(this))
n=P.A8(H.Go(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.A6(C.a.X(this.a,b.giz()),this.b)},
ghT:function(){return this.a},
dj:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dF(this.ghT()))},
$isbG:1,
$asbG:function(){return[P.dZ]},
gh5:function(){return this.a}}
P.U.prototype={$isbG:1,
$asbG:function(){return[P.ds]}}
P.dI.prototype={
X:function(a,b){return new P.dI(this.a+b.gbn())},
as:function(a,b){return new P.dI(C.a.bE(this.a*b))},
a7:function(a,b){return C.a.a7(this.a,b.gbn())},
aA:function(a,b){return C.a.aA(this.a,b.gbn())},
at:function(a,b){return C.a.at(this.a,b.gbn())},
T:function(a,b){if(b==null)return!1
if(!(b instanceof P.dI))return!1
return this.a===b.a},
gaa:function(a){return this.a&0x1FFFFFFF},
aD:function(a,b){return C.a.aD(this.a,b.gbn())},
C:function(a){var t,s,r,q,p
t=new P.lA()
s=this.a
if(s<0)return"-"+new P.dI(0-s).C(0)
r=t.$1(C.a.an(s,6e7)%60)
q=t.$1(C.a.an(s,1e6)%60)
p=new P.lz().$1(s%1e6)
return""+C.a.an(s,36e8)+":"+H.C(r)+":"+H.C(q)+"."+H.C(p)},
d6:function(a){return new P.dI(0-this.a)},
$isbG:1,
$asbG:function(){return[P.dI]},
gbn:function(){return this.a}}
P.lz.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.y,args:[P.D]}}}
P.lA.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.y,args:[P.D]}}}
P.eh.prototype={
gaN:function(){return H.cw(this.$thrownJsError)}}
P.fl.prototype={
C:function(a){return"Throw of null."}}
P.cY.prototype={
gco:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcn:function(){return""},
C:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.C(t)
q=this.gco()+s+r
if(!this.a)return q
p=this.gcn()
o=P.wn(this.b)
return q+p+": "+H.C(o)},
gK:function(a){return this.c}}
P.eD.prototype={
gco:function(){return"RangeError"},
gcn:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.C(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.C(t)
else{if(typeof r!=="number")return r.aA()
if(r>t)s=": Not in range "+H.C(t)+".."+H.C(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.C(t)}}return s}}
P.mC.prototype={
gco:function(){return"RangeError"},
gcn:function(){if(J.eb(this.b,0))return": index must not be negative"
var t=this.f
if(J.bb(t,0))return": no indices are valid"
return": index should be less than "+H.C(t)},
gm:function(a){return this.f}}
P.V.prototype={
C:function(a){return"Unsupported operation: "+this.a}}
P.eI.prototype={
C:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.C(t):"UnimplementedError"}}
P.b2.prototype={
C:function(a){return"Bad state: "+this.a}}
P.bJ.prototype={
C:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.C(P.wn(t))+"."}}
P.nY.prototype={
C:function(a){return"Out of Memory"},
gaN:function(){return},
$iseh:1}
P.k6.prototype={
C:function(a){return"Stack Overflow"},
gaN:function(){return},
$iseh:1}
P.lr.prototype={
C:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.C(t)+"' during its initialization"}}
P.qH.prototype={
C:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.C(t)}}
P.bL.prototype={
C:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.C(t):"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.C(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a7()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.L(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a9(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a9(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.C(r-o+1)+")\n"):s+(" (at character "+H.C(r+1)+")\n")
k=q.length
for(m=r;m<q.length;++m){l=C.c.a1(q,m)
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
return s+h+f+g+"\n"+C.c.as(" ",r-i+h.length)+"^\n"}}
P.lJ.prototype={
C:function(a){return"Expando:"+H.C(this.a)},
n:function(a,b){var t,s
t=this.bP
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.bd(P.dX(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.v9(b,"expando$values")
return s==null?null:H.v9(s,t)},
i:function(a,b,c){var t,s
t=this.bP
if(typeof t!=="string")t.set(b,c)
else{s=H.v9(b,"expando$values")
if(s==null){s=new P.ad()
H.xw(b,"expando$values",s)}H.xw(s,t,c)}},
gK:function(a){return this.a}}
P.D.prototype={$isbG:1,
$asbG:function(){return[P.ds]}}
P.n.prototype={
az:function(a,b){return H.dy(this,b,H.aL(this,"n",0),null)},
ca:function(a,b){return new H.eL(this,b,[H.aL(this,"n",0)])},
Y:function(a,b){var t
for(t=this.gW(this);t.I();)if(J.bb(t.gP(),b))return!0
return!1},
a3:function(a,b){var t
for(t=this.gW(this);t.I();)b.$1(t.gP())},
a6:function(a,b){return P.dl(this,!0,H.aL(this,"n",0))},
ap:function(a){return this.a6(a,!0)},
gm:function(a){var t,s
t=this.gW(this)
for(s=0;t.I();)++s
return s},
gV:function(a){return!this.gW(this).I()},
gJ:function(a){var t=this.gW(this)
if(!t.I())throw H.k(H.dk())
return t.gP()},
gbf:function(a){var t,s
t=this.gW(this)
if(!t.I())throw H.k(H.dk())
s=t.gP()
if(t.I())throw H.k(H.G_())
return s},
U:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.zq("index"))
if(b<0)H.bd(P.bE(b,0,null,"index",null))
for(t=this.gW(this),s=0;t.I();){r=t.gP()
if(b===s)return r;++s}throw H.k(P.bz(b,this,"index",null,s))},
C:function(a){return P.uB(this,"(",")")},
$asn:null}
P.jD.prototype={}
P.q.prototype={$asq:null,$isv:1,$asv:null,$isn:1,$asn:null}
P.bf.prototype={$asbf:null}
P.cR.prototype={
gaa:function(a){return P.ad.prototype.gaa.call(this,this)},
C:function(a){return"null"}}
P.ds.prototype={$isbG:1,
$asbG:function(){return[P.ds]}}
P.ad.prototype={constructor:P.ad,$isad:1,
T:function(a,b){return this===b},
gaa:function(a){return H.ey(this)},
C:function(a){return H.og(this)},
gaf:function(a){return new H.dS(H.kD(this),null)},
toString:function(){return this.C(this)}}
P.dz.prototype={}
P.e7.prototype={}
P.dP.prototype={}
P.y.prototype={$isbG:1,
$asbG:function(){return[P.y]}}
P.ce.prototype={
gm:function(a){return this.O.length},
gV:function(a){return this.O.length===0},
C:function(a){var t=this.O
return t.charCodeAt(0)==0?t:t},
gO:function(){return this.O}}
P.eK.prototype={}
P.pS.prototype={
$2:function(a,b){var t,s,r,q
t=J.b6(b)
s=t.bk(b,"=")
if(s===-1){if(!t.T(b,""))J.kG(a,P.rA(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.L(b,0,s)
q=C.c.ad(b,s+1)
t=this.a
J.kG(a,P.rA(r,0,r.length,t,!0),P.rA(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.pO.prototype={
$2:function(a,b){throw H.k(new P.bL("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.y,P.D]}}}
P.pQ.prototype={
$2:function(a,b){throw H.k(new P.bL("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.y],opt:[,]}}}
P.pR.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.ez(C.c.L(this.a,a,b),16,null)
s=J.dD(t)
if(s.a7(t,0)||s.aA(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.D,args:[P.D,P.D]}}}
P.kw.prototype={
geJ:function(){return this.b},
gcP:function(a){var t=this.c
if(t==null)return""
if(C.c.ac(t,"["))return C.c.L(t,1,t.length-1)
return t},
gcW:function(a){var t=this.d
if(t==null)return P.y8(this.a)
return t},
gcZ:function(a){var t=this.f
return t==null?"":t},
gef:function(){var t=this.r
return t==null?"":t},
gbC:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.y
s=new P.hZ(P.xW(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
gei:function(){return this.c!=null},
gek:function(){return this.f!=null},
gej:function(){return this.r!=null},
C:function(a){var t=this.y
if(t==null){t=this.dJ()
this.y=t}return t},
dJ:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.C(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.C(s)}else t=s
t+=H.C(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
T:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aC(b)
if(!!t.$iseK){if(this.a===b.gd7())if(this.c!=null===b.gei()){s=this.b
r=b.geJ()
if(s==null?r==null:s===r){s=this.gcP(this)
r=t.gcP(b)
if(s==null?r==null:s===r)if(J.bb(this.gcW(this),t.gcW(b)))if(J.bb(this.e,t.geu(b))){s=this.f
r=s==null
if(!r===b.gek()){if(r)s=""
if(s===t.gcZ(b)){t=this.r
s=t==null
if(!s===b.gej()){if(s)t=""
t=t===b.gef()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
gaa:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dJ()
this.y=t}t=C.c.gaa(t)
this.z=t}return t},
$iseK:1,
gd7:function(){return this.a},
geu:function(a){return this.e}}
P.rX.prototype={
$1:function(a){throw H.k(new P.bL("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.pN.prototype={
geH:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
t=t[0]+1
r=J.b6(s)
q=r.b3(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fB(s,o,p,C.k,!1)
if(n==null)n=r.L(s,o,p)
p=q}else n=null
m=P.fB(s,t,p,C.H,!1)
t=new P.qv(this,"data",null,null,null,m==null?r.L(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
C:function(a){var t,s
t=this.b
if(0>=t.length)return H.w(t,0)
s=this.a
return t[0]===-1?"data:"+H.C(s):s}}
P.rQ.prototype={
$1:function(a){return new Uint8Array(H.cC(96))},
$S:function(){return{func:1,args:[,]}}}
P.rP.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.w(t,a)
t=t[a]
J.z_(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.de,args:[,,]}}}
P.rR.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.cW(a),r=0;r<t;++r)s.i(a,C.c.a9(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.de,P.y,P.D]}}}
P.rS.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a9(b,0),s=C.c.a9(b,1),r=J.cW(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.de,P.y,P.D]}}}
P.rn.prototype={
gei:function(){return this.c>0},
gek:function(){var t=this.f
if(typeof t!=="number")return t.a7()
return t<this.r},
gej:function(){return this.r<this.a.length},
gd7:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.ac(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.ac(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.ac(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.ac(this.a,"package")){this.x="package"
t="package"}else{t=C.c.L(this.a,0,t)
this.x=t}return t},
geJ:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.L(this.a,s,t-1):""},
gcP:function(a){var t=this.c
return t>0?C.c.L(this.a,t,this.d):""},
gcW:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.X()
s=this.e
if(typeof s!=="number")return H.a9(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.X()
return H.ez(C.c.L(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.ac(this.a,"http"))return 80
if(t===5&&C.c.ac(this.a,"https"))return 443
return 0},
geu:function(a){return C.c.L(this.a,this.e,this.f)},
gcZ:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a7()
return t<s?C.c.L(this.a,t+1,s):""},
gef:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ad(s,t+1):""},
gbC:function(){var t=this.f
if(typeof t!=="number")return t.a7()
if(t>=this.r)return C.a6
t=P.y
return new P.hZ(P.xW(this.gcZ(this),C.n),[t,t])},
gaa:function(a){var t=this.y
if(t==null){t=C.c.gaa(this.a)
this.y=t}return t},
T:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aC(b)
if(!!t.$iseK)return this.a===t.C(b)
return!1},
C:function(a){return this.a},
$iseK:1}
P.qv.prototype={}
W.b0.prototype={}
W.ed.prototype={
C:function(a){return String(a)},
$ised:1,
$isi:1,
gab:function(a){return a.href},
saj:function(a,b){return a.type=b},
sab:function(a,b){return a.href=b}}
W.kO.prototype={
C:function(a){return String(a)},
$isi:1,
gab:function(a){return a.href},
sab:function(a,b){return a.href=b}}
W.eW.prototype={$iseW:1,$isc7:1,$isas:1,$isad:1}
W.cN.prototype={$isad:1}
W.kW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.cN]},
$isv:1,
$asv:function(){return[W.cN]},
$isn:1,
$asn:function(){return[W.cN]},
$isaQ:1,
$asaQ:function(){return[W.cN]},
$isaK:1,
$asaK:function(){return[W.cN]}}
W.h2.prototype={
$asq:function(){return[W.cN]},
$asv:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isq:1,
$isv:1,
$isn:1}
W.h5.prototype={
$asq:function(){return[W.cN]},
$asv:function(){return[W.cN]},
$asn:function(){return[W.cN]},
$isq:1,
$isv:1,
$isn:1}
W.l_.prototype={
gab:function(a){return a.href},
sab:function(a,b){return a.href=b}}
W.eY.prototype={$iseY:1}
W.eZ.prototype={$iseZ:1,$isi:1}
W.fT.prototype={$isfT:1,
gK:function(a){return a.name},
gaI:function(a){return a.value},
saj:function(a,b){return a.type=b}}
W.ef.prototype={$isi:1,
gm:function(a){return a.length}}
W.ld.prototype={$isi:1}
W.iq.prototype={
cN:function(a,b){return typeof console!="undefined"?console.error(b):null},
be:function(a){return typeof console!="undefined"?console.group(a):null},
em:function(a){return typeof console!="undefined"?console.info(a):null},
ip:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fX.prototype={
gK:function(a){return a.name}}
W.lj.prototype={
gaC:function(a){return a.style}}
W.lk.prototype={
gab:function(a){return a.href}}
W.fY.prototype={
gaC:function(a){return a.style}}
W.fZ.prototype={
gK:function(a){return a.name}}
W.ll.prototype={
gaC:function(a){return a.style}}
W.bK.prototype={$isbK:1,$isad:1}
W.f1.prototype={
bJ:function(a,b){var t=this.fE(a,b)
return t!=null?t:""},
fE:function(a,b){if(W.A5(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.A9()+b)},
M:function(a,b){return a.item(b)},
gbj:function(a){return a.content},
gbu:function(a){return a.display},
sbu:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iU.prototype={}
W.qr.prototype={
bJ:function(a,b){var t=this.b
return J.zb(t.gJ(t),b)},
h1:function(a,b){var t
for(t=this.a,t=new H.eu(t,t.gm(t),0,null,[H.N(t,0)]);t.I();)t.d.style[a]=b},
sbu:function(a,b){this.h1("display",b)},
ff:function(a){var t=P.dl(this.a,!0,null)
this.b=new H.ew(t,new W.qs(),[H.N(t,0),null])}}
W.jQ.prototype={}
W.qs.prototype={
$1:function(a){return J.tu(a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
gbj:function(a){return this.bJ(a,"content")},
gbu:function(a){return this.bJ(a,"display")}}
W.lm.prototype={
gaC:function(a){return a.style}}
W.ln.prototype={
gaC:function(a){return a.style}}
W.ls.prototype={
gcO:function(a){return a.files}}
W.f2.prototype={$isf2:1,$isad:1}
W.it.prototype={
bV:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
M:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.eg.prototype={$iseg:1}
W.iv.prototype={$isi:1}
W.iw.prototype={
gK:function(a){return a.name}}
W.lv.prototype={
gK:function(a){var t=a.name
if(P.wk()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.wk()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
C:function(a){return String(a)}}
W.ix.prototype={
C:function(a){return"Rectangle ("+H.C(a.left)+", "+H.C(a.top)+") "+H.C(this.gb8(a))+" x "+H.C(this.gb2(a))},
T:function(a,b){var t
if(b==null)return!1
t=J.aC(b)
if(!t.$isbU)return!1
return a.left===t.gc1(b)&&a.top===t.gc7(b)&&this.gb8(a)===t.gb8(b)&&this.gb2(a)===t.gb2(b)},
gaa:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb8(a)
q=this.gb2(a)
return W.y6(W.eQ(W.eQ(W.eQ(W.eQ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb2:function(a){return a.height},
gc1:function(a){return a.left},
gc7:function(a){return a.top},
gb8:function(a){return a.width},
$isbU:1,
$asbU:function(){}}
W.iy.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[P.y]},
$isv:1,
$asv:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]},
$isaQ:1,
$asaQ:function(){return[P.y]},
$isaK:1,
$asaK:function(){return[P.y]}}
W.iV.prototype={
$asq:function(){return[P.y]},
$asv:function(){return[P.y]},
$asn:function(){return[P.y]},
$isq:1,
$isv:1,
$isn:1}
W.je.prototype={
$asq:function(){return[P.y]},
$asv:function(){return[P.y]},
$asn:function(){return[P.y]},
$isq:1,
$isv:1,
$isn:1}
W.iz.prototype={
M:function(a,b){return a.item(b)}}
W.iA.prototype={
h:function(a,b){return a.add(b)},
Y:function(a,b){return a.contains(b)},
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.kn.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.V("Cannot modify list"))},
gJ:function(a){return C.a7.gJ(this.a)},
gaC:function(a){return W.Ht(this)},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
W.c7.prototype={
ge6:function(a){return new W.i4(a)},
ge8:function(a){return new W.qB(a)},
gho:function(a){return new W.kl(new W.i4(a))},
C:function(a){return a.localName},
en:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
ay:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.wm
if(t==null){t=H.a([],[W.e4])
s=new W.jO(t)
t.push(W.y4(null))
t.push(W.y7())
$.wm=s
d=s}else d=t
t=$.wl
if(t==null){t=new W.kx(d)
$.wl=t
c=t}else{t.a=d
c=t}}if($.e_==null){t=document
s=t.implementation.createHTMLDocument("")
$.e_=s
$.tJ=s.createRange()
s=$.e_
s.toString
r=s.createElement("base")
J.zh(r,t.baseURI)
$.e_.head.appendChild(r)}t=$.e_
if(t.body==null){t.toString
s=t.createElement("body")
t.body=s}t=$.e_
if(!!this.$iseZ)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
$.e_.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.Y(C.a2,a.tagName)){$.tJ.selectNodeContents(q)
p=$.tJ.createContextualFragment(b)}else{q.innerHTML=b
p=$.e_.createDocumentFragment()
for(;t=q.firstChild,t!=null;)p.appendChild(t)}t=$.e_.body
if(q==null?t!=null:q!==t)J.ze(q)
c.cb(p)
document.adoptNode(p)
return p},
hn:function(a,b,c){return this.ay(a,b,c,null)},
cd:function(a,b,c,d){a.textContent=null
a.appendChild(this.ay(a,b,c,d))},
d8:function(a,b){return this.cd(a,b,null,null)},
$isc7:1,
$isas:1,
$isad:1,
$isi:1,
gaC:function(a){return a.style},
gdL:function(a){return a.namespaceURI},
gik:function(a){return a.tagName}}
W.rW.prototype={
$1:function(a){return!!J.aC(a).$isc7},
$S:function(){return{func:1,args:[,]}}}
W.lB.prototype={
gK:function(a){return a.name},
saj:function(a,b){return a.type=b}}
W.h1.prototype={
gK:function(a){return a.name}}
W.lH.prototype={
gar:function(a){return a.error}}
W.T.prototype={$isT:1,$isad:1}
W.aR.prototype={
h9:function(a,b,c,d){if(c!=null)this.bM(a,b,c,d)},
ib:function(a,b,c,d){if(c!=null)this.fX(a,b,c,!1)},
bM:function(a,b,c,d){return a.addEventListener(b,H.dr(c,1),d)},
fX:function(a,b,c,d){return a.removeEventListener(b,H.dr(c,1),!1)}}
W.m7.prototype={
gK:function(a){return a.name}}
W.ci.prototype={$isci:1,$isad:1,
gK:function(a){return a.name}}
W.f9.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isf9:1,
$isaQ:1,
$asaQ:function(){return[W.ci]},
$isaK:1,
$asaK:function(){return[W.ci]},
$isq:1,
$asq:function(){return[W.ci]},
$isv:1,
$asv:function(){return[W.ci]},
$isn:1,
$asn:function(){return[W.ci]}}
W.iW.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isq:1,
$isv:1,
$isn:1}
W.jf.prototype={
$asq:function(){return[W.ci]},
$asv:function(){return[W.ci]},
$asn:function(){return[W.ci]},
$isq:1,
$isv:1,
$isn:1}
W.m8.prototype={
gar:function(a){return a.error}}
W.m9.prototype={
gK:function(a){return a.name}}
W.ma.prototype={
gar:function(a){return a.error},
gm:function(a){return a.length}}
W.mc.prototype={
gaC:function(a){return a.style},
gd3:function(a){return a.weight}}
W.md.prototype={
h:function(a,b){return a.add(b)},
iy:function(a,b,c){return a.forEach(H.dr(b,3),c)},
a3:function(a,b){b=H.dr(b,3)
return a.forEach(b)}}
W.iQ.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.cp.prototype={$iscp:1,$isad:1}
W.mp.prototype={
gm:function(a){return a.length}}
W.fb.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$isn:1,
$asn:function(){return[W.as]},
$isaQ:1,
$asaQ:function(){return[W.as]},
$isaK:1,
$asaK:function(){return[W.as]}}
W.iX.prototype={
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isq:1,
$isv:1,
$isn:1}
W.jg.prototype={
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isq:1,
$isv:1,
$isn:1}
W.iS.prototype={
M:function(a,b){return a.item(b)}}
W.e2.prototype={
iH:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hZ:function(a,b,c,d){return a.open(b,c,d)},
gig:function(a){return W.HV(a.response)},
ba:function(a,b){return a.send(b)},
$ise2:1,
$isad:1,
gih:function(a){return a.responseText}}
W.ms.prototype={
$1:function(a){return J.z8(a)},
$S:function(){return{func:1,args:[W.e2]}}}
W.mt.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.at()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aE(0,t)
else p.bs(a)},
$S:function(){return{func:1,args:[,]}}}
W.hj.prototype={}
W.mx.prototype={
gK:function(a){return a.name}}
W.hk.prototype={$ishk:1}
W.eo.prototype={$iseo:1,$isc7:1,$isas:1,$isad:1,
aE:function(a,b){return a.complete.$1(b)}}
W.mD.prototype={$isc7:1,$isi:1,$isas:1,
gcO:function(a){return a.files},
gK:function(a){return a.name},
gaI:function(a){return a.value},
sew:function(a,b){return a.placeholder=b},
saj:function(a,b){return a.type=b}}
W.n1.prototype={
gK:function(a){return a.name}}
W.n3.prototype={
gaI:function(a){return a.value}}
W.ht.prototype={
h:function(a,b){return a.add(b)}}
W.hu.prototype={$ishu:1,
gab:function(a){return a.href},
sab:function(a,b){return a.href=b},
saj:function(a,b){return a.type=b}}
W.nj.prototype={
C:function(a){return String(a)},
gab:function(a){return a.href}}
W.no.prototype={
gK:function(a){return a.name}}
W.hC.prototype={
gar:function(a){return a.error}}
W.jJ.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.nu.prototype={
saj:function(a,b){return a.type=b}}
W.nv.prototype={
saj:function(a,b){return a.type=b}}
W.nw.prototype={
gbj:function(a){return a.content},
gK:function(a){return a.name}}
W.nx.prototype={
gaI:function(a){return a.value}}
W.ny.prototype={
iu:function(a,b,c){return a.send(b,c)},
ba:function(a,b){return a.send(b)}}
W.hD.prototype={
gK:function(a){return a.name}}
W.cr.prototype={$iscr:1,$isad:1}
W.jK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[W.cr]},
$isaK:1,
$asaK:function(){return[W.cr]},
$isq:1,
$asq:function(){return[W.cr]},
$isv:1,
$asv:function(){return[W.cr]},
$isn:1,
$asn:function(){return[W.cr]}}
W.j6.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isq:1,
$isv:1,
$isn:1}
W.jq.prototype={
$asq:function(){return[W.cr]},
$asv:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isq:1,
$isv:1,
$isn:1}
W.nM.prototype={$isi:1}
W.nN.prototype={
gK:function(a){return a.name}}
W.d3.prototype={
gJ:function(a){var t=this.a.firstChild
if(t==null)throw H.k(new P.b2("No elements"))
return t},
gbf:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.k(new P.b2("No elements"))
if(s>1)throw H.k(new P.b2("More than one element"))
return t.firstChild},
h:function(a,b){this.a.appendChild(b)},
ax:function(a,b){var t,s,r,q
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
i:function(a,b,c){var t,s
t=this.a
s=t.childNodes
if(b>>>0!==b||b>=s.length)return H.w(s,b)
t.replaceChild(c,s[b])},
gW:function(a){var t=this.a.childNodes
return new W.iO(t,t.length,-1,null,[H.aL(t,"bw",0)])},
a8:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on Node list"))},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)},
bw:function(a,b,c,d){throw H.k(new P.V("Cannot fillRange on Node list"))},
gm:function(a){return this.a.childNodes.length},
sm:function(a,b){throw H.k(new P.V("Cannot set length on immutable List."))},
n:function(a,b){var t=this.a.childNodes
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
$ashw:function(){return[W.as]},
$asfn:function(){return[W.as]},
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]}}
W.as.prototype={
ghW:function(a){return new W.d3(a)},
i9:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
C:function(a){var t=a.nodeValue
return t==null?this.f_(a):t},
Y:function(a,b){return a.contains(b)},
$isas:1,
$isad:1,
gc3:function(a){return a.parentNode},
gcX:function(a){return a.previousSibling}}
W.jN.prototype={
cY:function(a){return a.previousNode()}}
W.hK.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$isn:1,
$asn:function(){return[W.as]},
$isaQ:1,
$asaQ:function(){return[W.as]},
$isaK:1,
$asaK:function(){return[W.as]}}
W.j7.prototype={
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isq:1,
$isv:1,
$isn:1}
W.jr.prototype={
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isq:1,
$isv:1,
$isn:1}
W.nS.prototype={
saj:function(a,b){return a.type=b}}
W.nT.prototype={
gK:function(a){return a.name},
saj:function(a,b){return a.type=b}}
W.nX.prototype={
gaI:function(a){return a.value}}
W.nZ.prototype={
gK:function(a){return a.name},
gaI:function(a){return a.value}}
W.o2.prototype={
gK:function(a){return a.name},
gaI:function(a){return a.value}}
W.o4.prototype={$isi:1}
W.e5.prototype={
gK:function(a){return a.name}}
W.o9.prototype={
gm:function(a){return a.length}}
W.ck.prototype={
M:function(a,b){return a.item(b)},
$isck:1,
$isad:1,
gm:function(a){return a.length},
gK:function(a){return a.name}}
W.jW.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ck]},
$isv:1,
$asv:function(){return[W.ck]},
$isn:1,
$asn:function(){return[W.ck]},
$isaQ:1,
$asaQ:function(){return[W.ck]},
$isaK:1,
$asaK:function(){return[W.ck]}}
W.j8.prototype={
$asq:function(){return[W.ck]},
$asv:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isq:1,
$isv:1,
$isn:1}
W.js.prototype={
$asq:function(){return[W.ck]},
$asv:function(){return[W.ck]},
$asn:function(){return[W.ck]},
$isq:1,
$isv:1,
$isn:1}
W.of.prototype={
ba:function(a,b){return a.send(b)}}
W.oi.prototype={
gaI:function(a){return a.value}}
W.k_.prototype={
ba:function(a,b){return a.send(b)}}
W.k0.prototype={
saj:function(a,b){return a.type=b}}
W.fq.prototype={$isfq:1,$isc7:1,$isas:1,$isad:1,
saj:function(a,b){return a.type=b}}
W.k1.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gK:function(a){return a.name},
gaI:function(a){return a.value}}
W.oD.prototype={
gK:function(a){return a.name}}
W.oG.prototype={$isi:1}
W.oH.prototype={
gK:function(a){return a.name}}
W.oI.prototype={
gK:function(a){return a.name}}
W.cs.prototype={$iscs:1,$isad:1}
W.k3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cs]},
$isv:1,
$asv:function(){return[W.cs]},
$isn:1,
$asn:function(){return[W.cs]},
$isaQ:1,
$asaQ:function(){return[W.cs]},
$isaK:1,
$asaK:function(){return[W.cs]}}
W.h3.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isq:1,
$isv:1,
$isn:1}
W.h6.prototype={
$asq:function(){return[W.cs]},
$asv:function(){return[W.cs]},
$asn:function(){return[W.cs]},
$isq:1,
$isv:1,
$isn:1}
W.oM.prototype={
saj:function(a,b){return a.type=b}}
W.hR.prototype={$ishR:1}
W.ct.prototype={$isct:1,$isad:1,
gd3:function(a){return a.weight}}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.ct]},
$isv:1,
$asv:function(){return[W.ct]},
$isn:1,
$asn:function(){return[W.ct]},
$isaQ:1,
$asaQ:function(){return[W.ct]},
$isaK:1,
$asaK:function(){return[W.ct]}}
W.j9.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isq:1,
$isv:1,
$isn:1}
W.jt.prototype={
$asq:function(){return[W.ct]},
$asv:function(){return[W.ct]},
$asn:function(){return[W.ct]},
$isq:1,
$isv:1,
$isn:1}
W.fr.prototype={$isfr:1,$isad:1}
W.oP.prototype={
gar:function(a){return a.error}}
W.cm.prototype={
M:function(a,b){return a.item(b)},
$iscm:1,
$isad:1,
gm:function(a){return a.length}}
W.oQ.prototype={
gK:function(a){return a.name}}
W.oR.prototype={
gK:function(a){return a.name}}
W.oW.prototype={
Z:function(a,b){return a.getItem(b)!=null},
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a3:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gV:function(a){return a.key(0)==null},
$isbf:1,
$asbf:function(){return[P.y,P.y]}}
W.pi.prototype={
saj:function(a,b){return a.type=b}}
W.cn.prototype={$iscn:1,$isad:1,
gab:function(a){return a.href}}
W.e8.prototype={}
W.k7.prototype={
ay:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
t=W.Aa("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.d3(s).ax(0,J.z5(t))
return s}}
W.po.prototype={
ay:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.ay(t.createElement("table"),b,c,d)
t.toString
t=new W.d3(t)
r=t.gbf(t)
r.toString
t=new W.d3(r)
q=t.gbf(t)
s.toString
q.toString
new W.d3(s).ax(0,new W.d3(q))
return s}}
W.pp.prototype={
ay:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.cf(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.ay(t.createElement("table"),b,c,d)
t.toString
t=new W.d3(t)
r=t.gbf(t)
s.toString
r.toString
new W.d3(s).ax(0,new W.d3(r))
return s}}
W.hW.prototype={
cd:function(a,b,c,d){var t
a.textContent=null
t=this.ay(a,b,c,d)
a.content.appendChild(t)},
d8:function(a,b){return this.cd(a,b,null,null)},
$ishW:1,
gbj:function(a){return a.content}}
W.pu.prototype={
gK:function(a){return a.name},
gaI:function(a){return a.value},
sew:function(a,b){return a.placeholder=b}}
W.cT.prototype={$isad:1}
W.cL.prototype={$isad:1}
W.px.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaQ:1,
$asaQ:function(){return[W.cL]},
$isaK:1,
$asaK:function(){return[W.cL]},
$isq:1,
$asq:function(){return[W.cL]},
$isv:1,
$asv:function(){return[W.cL]},
$isn:1,
$asn:function(){return[W.cL]}}
W.ja.prototype={
$asq:function(){return[W.cL]},
$asv:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isq:1,
$isv:1,
$isn:1}
W.ju.prototype={
$asq:function(){return[W.cL]},
$asv:function(){return[W.cL]},
$asn:function(){return[W.cL]},
$isq:1,
$isv:1,
$isn:1}
W.py.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
$isaQ:1,
$asaQ:function(){return[W.cT]},
$isaK:1,
$asaK:function(){return[W.cT]},
$isq:1,
$asq:function(){return[W.cT]},
$isv:1,
$asv:function(){return[W.cT]},
$isn:1,
$asn:function(){return[W.cT]}}
W.h4.prototype={
$asq:function(){return[W.cT]},
$asv:function(){return[W.cT]},
$asn:function(){return[W.cT]},
$isq:1,
$isv:1,
$isn:1}
W.h7.prototype={
$asq:function(){return[W.cT]},
$asv:function(){return[W.cT]},
$asn:function(){return[W.cT]},
$isq:1,
$isv:1,
$isn:1}
W.pC.prototype={
gm:function(a){return a.length}}
W.cv.prototype={$iscv:1,$isad:1}
W.k8.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cv]},
$isv:1,
$asv:function(){return[W.cv]},
$isn:1,
$asn:function(){return[W.cv]},
$isaQ:1,
$asaQ:function(){return[W.cv]},
$isaK:1,
$asaK:function(){return[W.cv]}}
W.jb.prototype={
$asq:function(){return[W.cv]},
$asv:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isq:1,
$isv:1,
$isn:1}
W.jv.prototype={
$asq:function(){return[W.cv]},
$asv:function(){return[W.cv]},
$asn:function(){return[W.cv]},
$isq:1,
$isv:1,
$isn:1}
W.fu.prototype={$isfu:1,$isad:1}
W.k9.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.e9.prototype={}
W.ka.prototype={
i_:function(a){return a.parentNode()},
cY:function(a){return a.previousNode()}}
W.pT.prototype={
C:function(a){return String(a)},
$isi:1,
gab:function(a){return a.href}}
W.pX.prototype={
gm:function(a){return a.length}}
W.fv.prototype={$isfv:1,$isad:1}
W.kb.prototype={
M:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.q1.prototype={
ba:function(a,b){return a.send(b)}}
W.ke.prototype={$isi:1,
gK:function(a){return a.name}}
W.q8.prototype={$isi:1}
W.eM.prototype={$isi:1}
W.fw.prototype={$isfw:1,$isas:1,$isad:1,
gK:function(a){return a.name},
gdL:function(a){return a.namespaceURI}}
W.qq.prototype={
C:function(a){return"Rectangle ("+H.C(a.left)+", "+H.C(a.top)+") "+H.C(a.width)+" x "+H.C(a.height)},
T:function(a,b){var t,s,r
if(b==null)return!1
t=J.aC(b)
if(!t.$isbU)return!1
s=a.left
r=t.gc1(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc7(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb2(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gaa:function(a){var t,s,r,q
t=J.dE(a.left)
s=J.dE(a.top)
r=J.dE(a.width)
q=J.dE(a.height)
return W.y6(W.eQ(W.eQ(W.eQ(W.eQ(0,t),s),r),q))},
$isbU:1,
$asbU:function(){},
gb2:function(a){return a.height},
gc1:function(a){return a.left},
gc7:function(a){return a.top},
gb8:function(a){return a.width}}
W.i3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[P.bU]},
$isaK:1,
$asaK:function(){return[P.bU]},
$isq:1,
$asq:function(){return[P.bU]},
$isv:1,
$asv:function(){return[P.bU]},
$isn:1,
$asn:function(){return[P.bU]}}
W.jc.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$asn:function(){return[P.bU]},
$isq:1,
$isv:1,
$isn:1}
W.jw.prototype={
$asq:function(){return[P.bU]},
$asv:function(){return[P.bU]},
$asn:function(){return[P.bU]},
$isq:1,
$isv:1,
$isn:1}
W.kk.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.bK]},
$isv:1,
$asv:function(){return[W.bK]},
$isn:1,
$asn:function(){return[W.bK]},
$isaQ:1,
$asaQ:function(){return[W.bK]},
$isaK:1,
$asaK:function(){return[W.bK]}}
W.jd.prototype={
$asq:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$asn:function(){return[W.bK]},
$isq:1,
$isv:1,
$isn:1}
W.jx.prototype={
$asq:function(){return[W.bK]},
$asv:function(){return[W.bK]},
$asn:function(){return[W.bK]},
$isq:1,
$isv:1,
$isn:1}
W.qz.prototype={$isi:1}
W.qA.prototype={
gb2:function(a){return a.height},
gb8:function(a){return a.width}}
W.kp.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[W.cp]},
$isaK:1,
$asaK:function(){return[W.cp]},
$isq:1,
$asq:function(){return[W.cp]},
$isv:1,
$asv:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]}}
W.iY.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isq:1,
$isv:1,
$isn:1}
W.jh.prototype={
$asq:function(){return[W.cp]},
$asv:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isq:1,
$isv:1,
$isn:1}
W.qV.prototype={$isi:1}
W.ic.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.as]},
$isv:1,
$asv:function(){return[W.as]},
$isn:1,
$asn:function(){return[W.as]},
$isaQ:1,
$asaQ:function(){return[W.as]},
$isaK:1,
$asaK:function(){return[W.as]}}
W.iZ.prototype={
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isq:1,
$isv:1,
$isn:1}
W.ji.prototype={
$asq:function(){return[W.as]},
$asv:function(){return[W.as]},
$asn:function(){return[W.as]},
$isq:1,
$isv:1,
$isn:1}
W.rk.prototype={$isi:1}
W.ks.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isq:1,
$asq:function(){return[W.cm]},
$isv:1,
$asv:function(){return[W.cm]},
$isn:1,
$asn:function(){return[W.cm]},
$isaQ:1,
$asaQ:function(){return[W.cm]},
$isaK:1,
$asaK:function(){return[W.cm]}}
W.j_.prototype={
$asq:function(){return[W.cm]},
$asv:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isq:1,
$isv:1,
$isn:1}
W.jj.prototype={
$asq:function(){return[W.cm]},
$asv:function(){return[W.cm]},
$asn:function(){return[W.cm]},
$isq:1,
$isv:1,
$isn:1}
W.ku.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){if(b>>>0!==b||b>=a.length)return H.w(a,b)
return a[b]},
M:function(a,b){return a.item(b)},
$isaQ:1,
$asaQ:function(){return[W.cn]},
$isaK:1,
$asaK:function(){return[W.cn]},
$isq:1,
$asq:function(){return[W.cn]},
$isv:1,
$asv:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.j0.prototype={
$asq:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isq:1,
$isv:1,
$isn:1}
W.jk.prototype={
$asq:function(){return[W.cn]},
$asv:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isq:1,
$isv:1,
$isn:1}
W.rG.prototype={$isi:1}
W.rH.prototype={$isi:1}
W.qm.prototype={
a3:function(a,b){var t,s,r,q,p
for(t=this.gaF(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.bV)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gaF:function(a){var t,s,r,q,p,o
t=this.a.attributes
s=H.a([],[P.y])
for(r=t.length,q=0;q<r;++q){if(q>=t.length)return H.w(t,q)
p=t[q]
o=J.b1(p)
if(o.gdL(p)==null)s.push(o.gK(p))}return s},
gV:function(a){return this.gaF(this).length===0},
$isbf:1,
$asbf:function(){return[P.y,P.y]},
gdH:function(){return this.a}}
W.i4.prototype={
Z:function(a,b){return this.a.hasAttribute(b)},
n:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gaF(this).length}}
W.kl.prototype={
Z:function(a,b){return this.a.a.hasAttribute("data-"+this.bq(b))},
n:function(a,b){return this.a.a.getAttribute("data-"+this.bq(b))},
i:function(a,b,c){this.a.a.setAttribute("data-"+this.bq(b),c)},
a3:function(a,b){this.a.a3(0,new W.qt(this,b))},
gaF:function(a){var t=H.a([],[P.y])
this.a.a3(0,new W.qu(this,t))
return t},
gm:function(a){return this.gaF(this).length},
gV:function(a){return this.gaF(this).length===0},
h4:function(a,b){var t,s,r,q,p
t=a.split("-")
for(s=1;s<t.length;++s){r=t[s]
q=J.b6(r)
p=q.gm(r)
if(typeof p!=="number")return p.aA()
if(p>0){q=J.w3(q.n(r,0))+q.ad(r,1)
if(s>=t.length)return H.w(t,s)
t[s]=q}}return C.b.aS(t,"")},
e_:function(a){return this.h4(a,!1)},
bq:function(a){var t,s,r,q,p
t=J.b6(a)
s=0
r=""
while(!0){q=t.gm(a)
if(typeof q!=="number")return H.a9(q)
if(!(s<q))break
p=J.tv(t.n(a,s))
r=(!J.bb(t.n(a,s),p)&&s>0?r+"-":r)+p;++s}return r.charCodeAt(0)==0?r:r},
$isbf:1,
$asbf:function(){return[P.y,P.y]}}
W.qt.prototype={
$2:function(a,b){if(J.cD(a).ac(a,"data-"))this.b.$2(this.a.e_(C.c.ad(a,5)),b)},
$S:function(){return{func:1,args:[P.y,P.y]}}}
W.qu.prototype={
$2:function(a,b){if(J.cD(a).ac(a,"data-"))this.b.push(this.a.e_(C.c.ad(a,5)))},
$S:function(){return{func:1,args:[P.y,P.y]}}}
W.qB.prototype={
aG:function(){var t,s,r,q,p
t=P.a2(null,null,null,P.y)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bV)(s),++q){p=J.tw(s[q])
if(p.length!==0)t.h(0,p)}return t},
eK:function(a){this.a.className=a.aS(0," ")},
gm:function(a){return this.a.classList.length},
gV:function(a){return this.a.classList.length===0},
Y:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
gdH:function(){return this.a}}
W.qE.prototype={
aT:function(a,b,c,d){return W.fx(this.a,this.b,a,!1,H.N(this,0))},
eq:function(a,b,c){return this.aT(a,null,b,c)}}
W.i5.prototype={}
W.qF.prototype={
bZ:function(a){if(this.b==null)return
this.e2()
this.b=null
this.d=null
return},
cU:function(a,b){if(this.b==null)return;++this.a
this.e2()},
ev:function(a){return this.cU(a,null)},
ez:function(a){if(this.b==null||this.a<=0)return;--this.a
this.e0()},
e0:function(){var t=this.d
if(t!=null&&this.a<=0)J.yS(this.b,this.c,t,!1)},
e2:function(){var t=this.d
if(t!=null)J.zf(this.b,this.c,t,!1)},
fg:function(a,b,c,d,e){this.e0()}}
W.qG.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
bh:function(a){return $.$get$y5().Y(0,W.h0(a))},
b_:function(a,b,c){var t,s,r
t=W.h0(a)
s=$.$get$vE()
r=s.n(0,H.C(t)+"::"+b)
if(r==null)r=s.n(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
fi:function(a){var t,s
t=$.$get$vE()
if(t.gV(t)){for(s=0;s<262;++s)t.i(0,C.a_[s],W.Iu())
for(s=0;s<12;++s)t.i(0,C.q[s],W.Iv())}},
$ise4:1,
geI:function(){return this.a}}
W.bw.prototype={
gW:function(a){return new W.iO(a,this.gm(a),-1,null,[H.aL(a,"bw",0)])},
h:function(a,b){throw H.k(new P.V("Cannot add to immutable List."))},
a8:function(a,b,c,d,e){throw H.k(new P.V("Cannot setRange on immutable List."))},
au:function(a,b,c,d){return this.a8(a,b,c,d,0)},
aH:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
bw:function(a,b,c,d){throw H.k(new P.V("Cannot modify an immutable List."))},
$isq:1,
$asq:null,
$isv:1,
$asv:null,
$isn:1,
$asn:null}
W.jO.prototype={
h:function(a,b){this.a.push(b)},
bh:function(a){return C.b.e5(this.a,new W.nP(a))},
b_:function(a,b,c){return C.b.e5(this.a,new W.nO(a,b,c))},
$ise4:1}
W.nP.prototype={
$1:function(a){return a.bh(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.nO.prototype={
$1:function(a){return a.b_(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
bh:function(a){return this.a.Y(0,W.h0(a))},
b_:function(a,b,c){var t,s
t=W.h0(a)
s=this.c
if(s.Y(0,H.C(t)+"::"+b))return this.d.ha(c)
else if(s.Y(0,"*::"+b))return this.d.ha(c)
else{s=this.b
if(s.Y(0,H.C(t)+"::"+b))return!0
else if(s.Y(0,"*::"+b))return!0
else if(s.Y(0,H.C(t)+"::*"))return!0
else if(s.Y(0,"*::*"))return!0}return!1},
fk:function(a,b,c,d){var t,s,r
this.a.ax(0,c)
t=b.ca(0,new W.rl())
s=b.ca(0,new W.rm())
this.b.ax(0,t)
r=this.c
r.ax(0,C.C)
r.ax(0,s)},
$ise4:1,
geI:function(){return this.d}}
W.rl.prototype={
$1:function(a){return!C.b.Y(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.rm.prototype={
$1:function(a){return C.b.Y(C.q,a)},
$S:function(){return{func:1,args:[,]}}}
W.rw.prototype={
b_:function(a,b,c){if(this.f5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.vW(a).a.getAttribute("template")==="")return this.e.Y(0,b)
return!1}}
W.rx.prototype={
$1:function(a){return"TEMPLATE::"+H.C(a)},
$S:function(){return{func:1,args:[,]}}}
W.rv.prototype={
bh:function(a){var t=J.aC(a)
if(!!t.$ishP)return!1
t=!!t.$isc5
if(t&&W.h0(a)==="foreignObject")return!1
if(t)return!0
return!1},
b_:function(a,b,c){if(b==="is"||C.c.ac(b,"on"))return!1
return this.bh(a)},
$ise4:1}
W.iO.prototype={
I:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.il(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gP:function(){return this.d}}
W.e4.prototype={}
W.ry.prototype={
cb:function(a){}}
W.rj.prototype={}
W.kx.prototype={
cb:function(a){new W.rE(this).$2(a,null)},
bp:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)t.removeChild(a)}else b.removeChild(a)},
h_:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.vW(a)
r=s.gdH().getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.bO(n)}p="element unprintable"
try{p=J.cy(a)}catch(n){H.bO(n)}try{o=W.h0(a)
this.fZ(a,b,t,p,o,s,r)}catch(n){if(H.bO(n) instanceof P.cY)throw n
else{this.bp(a,b)
window
m="Removing corrupted element "+H.C(p)
if(typeof console!="undefined")console.warn(m)}}},
fZ:function(a,b,c,d,e,f,g){var t,s,r,q,p
if(c){this.bp(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.bh(a)){this.bp(a,b)
window
t="Removing disallowed element <"+H.C(e)+"> from "+J.cy(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.b_(a,"is",g)){this.bp(a,b)
window
t="Removing disallowed type extension <"+H.C(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gaF(f)
s=H.a(t.slice(0),[H.N(t,0)])
for(r=f.gaF(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.w(s,r)
q=s[r]
if(!this.a.b_(a,J.tv(q),t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.C(e)+" "+q+'="'+H.C(t.getAttribute(q))+'">'
if(typeof console!="undefined")console.warn(p)
t.getAttribute(q)
t.removeAttribute(q)}}if(!!J.aC(a).$ishW)this.cb(a.content)}}
W.rE.prototype={
$2:function(a,b){var t,s,r,q,p,o
r=this.a
switch(a.nodeType){case 1:r.h_(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.bp(a,b)}t=a.lastChild
for(r=a==null;null!=t;){s=null
try{s=J.z6(t)}catch(q){H.bO(q)
p=t
if(r){o=J.b1(p)
if(o.gc3(p)!=null){o.gc3(p)
o.gc3(p).removeChild(p)}}else a.removeChild(p)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.as,W.as]}}}
P.rs.prototype={
bx:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b7:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aC(a)
if(!!s.$isdZ)return new Date(a.a)
if(!!s.$isGI)throw H.k(new P.eI("structured clone of RegExp"))
if(!!s.$isci)return a
if(!!s.$iseY)return a
if(!!s.$isf9)return a
if(!!s.$ishk)return a
if(!!s.$isfj||!!s.$isex)return a
if(!!s.$isbf){r=this.bx(a)
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
s.a3(a,new P.ru(t,this))
return t.a}if(!!s.$isq){r=this.bx(a)
t=this.b
if(r>=t.length)return H.w(t,r)
o=t[r]
if(o!=null)return o
return this.hm(a,r)}throw H.k(new P.eI("structured clone of other type"))},
hm:function(a,b){var t,s,r,q,p
t=J.b6(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.w(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b7(t.n(a,p))
if(p>=r.length)return H.w(r,p)
r[p]=q}return r}}
P.ru.prototype={
$2:function(a,b){this.a.a[a]=this.b.b7(b)},
$S:function(){return{func:1,args:[,,]}}}
P.qf.prototype={
bx:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b7:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dZ(s,!0)
r.dj(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.eI("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.Ie(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bx(a)
r=this.b
o=r.length
if(p>=o)return H.w(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.jG()
t.a=n
if(p>=o)return H.w(r,p)
r[p]=n
this.hB(a,new P.qg(t,this))
return t.a}if(a instanceof Array){p=this.bx(a)
r=this.b
if(p>=r.length)return H.w(r,p)
n=r[p]
if(n!=null)return n
o=J.b6(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.w(r,p)
r[p]=n
if(typeof m!=="number")return H.a9(m)
r=J.cW(n)
l=0
for(;l<m;++l)r.i(n,l,this.b7(o.n(a,l)))
return n}return a}}
P.qg.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b7(b)
J.kG(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.rt.prototype={}
P.kh.prototype={
hB:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.t_.prototype={
$1:function(a){return this.a.aE(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.t0.prototype={
$1:function(a){return this.a.bs(a)},
$S:function(){return{func:1,args:[,]}}}
P.lh.prototype={
e3:function(a){if($.$get$wc().b.test(a))return a
throw H.k(P.dX(a,"value","Not a valid class token"))},
C:function(a){return this.aG().aS(0," ")},
gW:function(a){var t,s
t=this.aG()
s=new P.dq(t,t.r,null,null,[null])
s.c=t.e
return s},
a3:function(a,b){this.aG().a3(0,b)},
az:function(a,b){var t=this.aG()
return new H.h_(t,b,[H.N(t,0),null])},
gV:function(a){return this.aG().a===0},
gm:function(a){return this.aG().a},
Y:function(a,b){if(typeof b!=="string")return!1
this.e3(b)
return this.aG().Y(0,b)},
cR:function(a){return this.Y(0,a)?a:null},
h:function(a,b){this.e3(b)
return this.hU(0,new P.li(b))},
gJ:function(a){var t=this.aG()
return t.gJ(t)},
a6:function(a,b){return this.aG().a6(0,!0)},
ap:function(a){return this.a6(a,!0)},
hU:function(a,b){var t,s
t=this.aG()
s=b.$1(t)
this.eK(t)
return s},
$ise7:1,
$ase7:function(){return[P.y]},
$isv:1,
$asv:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]}}
P.li.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.lt.prototype={
gK:function(a){return a.name}}
P.rO.prototype={
$1:function(a){this.b.aE(0,new P.kh([],[],!1).b7(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.mB.prototype={
gK:function(a){return a.name}}
P.nU.prototype={
bV:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fM(a,b,c)
q=P.HU(t)
return q}catch(p){s=H.bO(p)
r=H.cw(p)
q=P.wz(s,r,null)
return q}},
h:function(a,b){return this.bV(a,b,null)},
fM:function(a,b,c){return a.add(new P.rt([],[]).b7(b))},
gK:function(a){return a.name}}
P.hN.prototype={
gar:function(a){return a.error}}
P.pH.prototype={
gar:function(a){return a.error}}
P.r1.prototype={
bB:function(a){if(a<=0||a>4294967296)throw H.k(P.xB("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
cS:function(){return Math.random()}}
P.ra.prototype={
aY:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.an(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bB:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.xB("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aY()
return(this.a&t)>>>0}do{this.aY()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
cS:function(){this.aY()
var t=this.a
this.aY()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
fj:function(a){var t,s,r,q,p,o,n,m
t=J.eb(a,0)?-1:0
do{if(typeof a!=="number")return a.aM()
s=(a&4294967295)>>>0
a=C.d.an(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.an(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.an(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.an(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.an(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.an(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.an(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aY()
this.aY()
this.aY()
this.aY()}}
P.rb.prototype={}
P.bU.prototype={$asbU:null}
P.kL.prototype={$isi:1,
gab:function(a){return a.href}}
P.ee.prototype={$isi:1}
P.lK.prototype={$isi:1}
P.lL.prototype={$isi:1}
P.lM.prototype={$isi:1}
P.lN.prototype={$isi:1}
P.lO.prototype={$isi:1}
P.lP.prototype={$isi:1}
P.lQ.prototype={$isi:1}
P.lR.prototype={$isi:1}
P.lS.prototype={$isi:1}
P.lT.prototype={$isi:1,
gab:function(a){return a.href}}
P.lU.prototype={$isi:1}
P.lV.prototype={$isi:1}
P.lW.prototype={$isi:1}
P.lX.prototype={$isi:1}
P.lY.prototype={$isi:1}
P.lZ.prototype={$isi:1}
P.mb.prototype={$isi:1,
gab:function(a){return a.href}}
P.cq.prototype={$isi:1}
P.my.prototype={$isi:1,
gab:function(a){return a.href}}
P.da.prototype={$isad:1}
P.n5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.da]},
$isv:1,
$asv:function(){return[P.da]},
$isn:1,
$asn:function(){return[P.da]}}
P.j1.prototype={
$asq:function(){return[P.da]},
$asv:function(){return[P.da]},
$asn:function(){return[P.da]},
$isq:1,
$isv:1,
$isn:1}
P.jl.prototype={
$asq:function(){return[P.da]},
$asv:function(){return[P.da]},
$asn:function(){return[P.da]},
$isq:1,
$isv:1,
$isn:1}
P.nr.prototype={$isi:1}
P.ns.prototype={$isi:1}
P.db.prototype={$isad:1}
P.nQ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.db]},
$isv:1,
$asv:function(){return[P.db]},
$isn:1,
$asn:function(){return[P.db]}}
P.j2.prototype={
$asq:function(){return[P.db]},
$asv:function(){return[P.db]},
$asn:function(){return[P.db]},
$isq:1,
$isv:1,
$isn:1}
P.jm.prototype={
$asq:function(){return[P.db]},
$asv:function(){return[P.db]},
$asn:function(){return[P.db]},
$isq:1,
$isv:1,
$isn:1}
P.o7.prototype={$isi:1,
gab:function(a){return a.href}}
P.oc.prototype={
gm:function(a){return a.length}}
P.hP.prototype={$ishP:1,$isi:1,
gab:function(a){return a.href},
saj:function(a,b){return a.type=b}}
P.pg.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.y]},
$isv:1,
$asv:function(){return[P.y]},
$isn:1,
$asn:function(){return[P.y]}}
P.j3.prototype={
$asq:function(){return[P.y]},
$asv:function(){return[P.y]},
$asn:function(){return[P.y]},
$isq:1,
$isv:1,
$isn:1}
P.jn.prototype={
$asq:function(){return[P.y]},
$asv:function(){return[P.y]},
$asn:function(){return[P.y]},
$isq:1,
$isv:1,
$isn:1}
P.pj.prototype={
saj:function(a,b){return a.type=b}}
P.kS.prototype={
aG:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a2(null,null,null,P.y)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=J.tw(r[p])
if(o.length!==0)s.h(0,o)}return s},
eK:function(a){this.a.setAttribute("class",a.aS(0," "))}}
P.c5.prototype={
ge8:function(a){return new P.kS(a)},
ay:function(a,b,c,d){var t,s,r,q,p,o
if(c==null){t=H.a([],[W.e4])
t.push(W.y4(null))
t.push(W.y7())
t.push(new W.rv())
c=new W.kx(new W.jO(t))}s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.v).hn(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.d3(q)
o=t.gbf(t)
for(;t=o.firstChild,t!=null;)p.appendChild(t)
return p},
en:function(a,b,c,d,e){throw H.k(new P.V("Cannot invoke insertAdjacentHtml on SVG."))},
$isc5:1,
$isi:1}
P.pl.prototype={$isi:1}
P.pn.prototype={$isi:1}
P.eH.prototype={}
P.pw.prototype={$isi:1,
gab:function(a){return a.href}}
P.dd.prototype={$isad:1}
P.pI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){return this.n(a,b)},
$isq:1,
$asq:function(){return[P.dd]},
$isv:1,
$asv:function(){return[P.dd]},
$isn:1,
$asn:function(){return[P.dd]}}
P.j4.prototype={
$asq:function(){return[P.dd]},
$asv:function(){return[P.dd]},
$asn:function(){return[P.dd]},
$isq:1,
$isv:1,
$isn:1}
P.jo.prototype={
$asq:function(){return[P.dd]},
$asv:function(){return[P.dd]},
$asn:function(){return[P.dd]},
$isq:1,
$isv:1,
$isn:1}
P.pU.prototype={$isi:1,
gab:function(a){return a.href}}
P.pY.prototype={$isi:1}
P.pZ.prototype={$isi:1}
P.i8.prototype={$isi:1,
gab:function(a){return a.href}}
P.rg.prototype={$isi:1}
P.rh.prototype={$isi:1}
P.ri.prototype={$isi:1}
P.bj.prototype={}
P.de.prototype={$isq:1,
$asq:function(){return[P.D]},
$isv:1,
$asv:function(){return[P.D]},
$isn:1,
$asn:function(){return[P.D]}}
P.fN.prototype={$isfN:1,$isad:1,
gm:function(a){return a.length}}
P.eV.prototype={$iseV:1,$isad:1,
gbY:function(a){return a.buffer}}
P.fO.prototype={
fv:function(a,b,c,d){return a.decodeAudioData(b,H.dr(c,1),H.dr(d,1))},
hp:function(a,b){var t,s,r
t=P.fN
s=new P.bm(0,$.aB,null,[t])
r=new P.dU(s,[t])
this.fv(a,b,new P.kT(r),new P.kU(r))
return s}}
P.kT.prototype={
$1:function(a){this.a.aE(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.kU.prototype={
$1:function(a){var t=this.a
if(a==null)t.bs("")
else t.bs(a)},
$S:function(){return{func:1,args:[,]}}}
P.bF.prototype={}
P.eX.prototype={}
P.l2.prototype={
saj:function(a,b){return a.type=b}}
P.lg.prototype={
gbY:function(a){return a.buffer}}
P.jS.prototype={
saj:function(a,b){return a.type=b}}
P.kN.prototype={
gK:function(a){return a.name}}
P.op.prototype={$isi:1}
P.rF.prototype={$isi:1}
P.k5.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.bz(b,a,null,null,null))
return P.yw(a.item(b))},
i:function(a,b,c){throw H.k(new P.V("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.V("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.k(new P.b2("No elements"))},
U:function(a,b){return this.n(a,b)},
M:function(a,b){return P.yw(a.item(b))},
$isq:1,
$asq:function(){return[P.bf]},
$isv:1,
$asv:function(){return[P.bf]},
$isn:1,
$asn:function(){return[P.bf]}}
P.j5.prototype={
$asq:function(){return[P.bf]},
$asv:function(){return[P.bf]},
$asn:function(){return[P.bf]},
$isq:1,
$isv:1,
$isn:1}
P.jp.prototype={
$asq:function(){return[P.bf]},
$asv:function(){return[P.bf]},
$asn:function(){return[P.bf]},
$isq:1,
$isv:1,
$isn:1}
T.fJ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return t[b]},
gJ:function(a){return C.b.gJ(this.a)},
gV:function(a){return this.a.length===0},
gW:function(a){var t=this.a
return new J.im(t,t.length,0,null,[H.N(t,0)])},
$ashq:function(){return[T.fK]},
$asn:function(){return[T.fK]},
gcO:function(a){return this.a}}
T.fK.prototype={
gbj:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.fc(C.A)
r=T.fc(C.B)
q=T.xp(0,this.b)
new T.iT(s,q,0,0,0,t,r).dI()
r=q.c.buffer
q=q.a
r.toString
q=H.cQ(r,0,q)
this.cy=q
t=q}else{t=s.bH()
this.cy=t}this.ch=0}}return t},
C:function(a){return this.a},
gK:function(a){return this.a}}
T.dg.prototype={
C:function(a){return"ArchiveException: "+this.a}}
T.hl.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.al()
if(typeof r!=="number")return H.a9(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
if(typeof b!=="number")return H.a9(b)
s+=b
if(s<0||s>=t.length)return H.w(t,s)
return t[s]},
aX:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a9(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.al()
if(typeof s!=="number")return H.a9(s)
b=t-(a-s)}return T.u8(this.a,this.d,b,a)},
b3:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.X()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a9(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.w(q,s)
q[s]}return-1},
bk:function(a,b){return this.b3(a,b,0)},
d_:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.al()
if(typeof s!=="number")return H.a9(s)
r=this.aX(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.al()
if(typeof p!=="number")return H.a9(p)
if(typeof s!=="number")return s.X()
this.b=s+(t-(q-p))
return r},
c5:function(a){return P.ph(this.d_(a).bH(),0,null)},
a2:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
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
a5:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
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
aV:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.X()
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
if(this.d===1)return(C.a.aq(p,56)|C.a.aq(o,48)|C.a.aq(n,40)|C.a.aq(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.aq(i,56)|C.a.aq(j,48)|C.a.aq(k,40)|C.a.aq(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bH:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.al()
if(typeof r!=="number")return H.a9(r)
q=t-(s-r)
t=this.a
r=J.aC(t)
if(!!r.$isde){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cQ(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.yi(r.ce(t,s,p>o?o:p)))},
f8:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbY:function(a){return this.a},
ghY:function(a){return this.b}}
T.o_.prototype={
iq:function(a,b){var t,s,r,q
if(b==null)b=J.c0(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.cq(s-q)
C.r.au(r,t,s,a)
this.a+=b},
d4:function(a){return this.iq(a,null)},
is:function(a){var t,s,r,q
t=J.b6(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
this.cq(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a9(r)
C.r.a8(q,s,s+r,t.gbY(a),t.ghY(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.al()
if(typeof q!=="number")return H.a9(q)
this.a=t+(r-(s-q))},
aX:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cQ(t,a,b-a)},
dg:function(a){return this.aX(a,null)},
cq:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.bd(P.dF("Invalid length "+H.C(s)))
r=new Uint8Array(s)
q=this.c
C.r.au(r,0,q.length,q)
this.c=r},
fB:function(){return this.cq(null)},
gm:function(a){return this.a}}
T.qb.prototype={
fW:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aX(this.a-20,20)
if(s.a5()!==117853008){a.b=t
return}s.a5()
r=s.aV()
s.a5()
a.b=r
if(a.a5()!==101075792){a.b=t
return}a.aV()
a.a2()
a.a2()
q=a.a5()
p=a.a5()
o=a.aV()
n=a.aV()
m=a.aV()
l=a.aV()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fC:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.al()
if(typeof r!=="number")return H.a9(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a5()===101010256){a.b=t
return q}}throw H.k(new T.dg("Could not find End of Central Directory Record"))},
fc:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fC(a)
this.a=t
a.b=t
a.a5()
this.b=a.a2()
this.c=a.a2()
this.d=a.a2()
this.e=a.a2()
this.f=a.a5()
this.r=a.a5()
s=a.a2()
if(s>0)this.x=a.c5(s)
this.fW(a)
r=a.aX(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.X()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.at()
if(!(p<t+o))break
if(r.a5()!==33639248)break
p=new T.qd(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.a2()
p.b=r.a2()
p.c=r.a2()
p.d=r.a2()
p.e=r.a2()
p.f=r.a2()
p.r=r.a5()
p.x=r.a5()
p.y=r.a5()
n=r.a2()
m=r.a2()
l=r.a2()
p.z=r.a2()
p.Q=r.a2()
p.ch=r.a5()
o=r.a5()
p.cx=o
if(n>0)p.cy=r.c5(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.al()
j=r.aX(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.al()
if(typeof g!=="number")return H.a9(g)
if(typeof k!=="number")return k.X()
r.b=k+(i-(h-g))
p.db=j.bH()
f=j.a2()
e=j.a2()
if(f===1){if(e>=8)p.y=j.aV()
if(e>=16)p.x=j.aV()
if(e>=24){o=j.aV()
p.cx=o}if(e>=28)p.z=j.a5()}}if(l>0)p.dx=r.c5(l)
a.b=o
p.dy=T.Ho(a,p)
q.push(p)}}}
T.qc.prototype={
gbj:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.fc(C.A)
q=T.fc(C.B)
t=T.xp(0,t)
new T.iT(s,t,0,0,0,r,q).dI()
q=t.c.buffer
t=t.a
q.toString
t=H.cQ(q,0,t)
this.cy=t
this.d=0}else{t=s.bH()
this.cy=t}}return t},
C:function(a){return this.z},
fd:function(a,b){var t,s,r,q
t=a.a5()
this.a=t
if(t!==67324752)throw H.k(new T.dg("Invalid Zip Signature"))
this.b=a.a2()
this.c=a.a2()
this.d=a.a2()
this.e=a.a2()
this.f=a.a2()
this.r=a.a5()
this.x=a.a5()
this.y=a.a5()
s=a.a2()
r=a.a2()
this.z=a.c5(s)
this.Q=a.d_(r).bH()
this.cx=a.d_(this.ch.x)
if((this.c&8)!==0){q=a.a5()
if(q===134695760)this.r=a.a5()
else this.r=q
this.x=a.a5()
this.y=a.a5()}}}
T.qd.prototype={
C:function(a){return this.cy}}
T.qa.prototype={
hq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.Hn(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.D],p=0;p<t.length;t.length===r||(0,H.bV)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.da()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fK(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dV(k,"$isq",q,"$asq")){j.cy=k
j.cx=T.u8(k,0,null,0)}else if(k instanceof T.hl){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hl(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.cM(m,"/")
j.y=n.r
s.push(j)}return new T.fJ(s,null)}}
T.mu.prototype={
f7:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.aq(1,this.b)
r=H.cC(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.w(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.w(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iT.prototype={
dI:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.X()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.at()
if(!(r<s+q))break
if(!this.fT())break}},
fT:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.X()
if(typeof s!=="number")return s.at()
if(s>=r+q)return!1
p=this.aw(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aw(16)
s=this.aw(16)
if(n!==0&&n!==(s^65535)>>>0)H.bd(new T.dg("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.al()
r=q-r
if(n>s-r)H.bd(new T.dg("Input buffer is broken"))
m=t.aX(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.al()
if(typeof l!=="number")return H.a9(l)
if(typeof s!=="number")return s.X()
t.b=s+(r-(q-l))
this.b.is(m)
break
case 1:this.dA(this.f,this.r)
break
case 2:this.fU()
break
default:throw H.k(new T.dg("unknown BTYPE: "+o))}return(p&1)===0},
aw:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.X()
if(typeof r!=="number")return r.at()
if(r>=q+p)throw H.k(new T.dg("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.w(q,r)
o=q[r]
this.c=(this.c|C.a.av(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.aq(1,a)
this.c=C.a.dY(t,a)
this.d=s-a
return(t&r-1)>>>0},
cz:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.X()
if(typeof p!=="number")return p.at()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.w(o,p)
m=o[p]
this.c=(this.c|C.a.av(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.aq(1,s)-1)>>>0
if(p>=t.length)return H.w(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dY(r,k)
this.d=q-k
return l&65535},
fU:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aw(5)+257
s=this.aw(5)+1
r=this.aw(4)+4
q=H.cC(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.w(C.I,o)
n=C.I[o]
m=this.aw(3)
if(n>=q)return H.w(p,n)
p[n]=m}l=T.fc(p)
k=new Uint8Array(H.cC(t))
j=new Uint8Array(H.cC(s))
i=this.dz(t,l,k)
h=this.dz(s,l,j)
this.dA(T.fc(i),T.fc(h))},
dA:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cz(a)
if(s>285)throw H.k(new T.dg("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.fB()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.w(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.w(C.G,p)
o=C.G[p]+this.aw(C.a1[p])
n=this.cz(b)
if(n<=29){if(n>=30)return H.w(C.D,n)
m=C.D[n]+this.aw(C.a0[n])
for(r=-m;o>m;){t.d4(t.dg(r))
o-=m}if(o===m)t.d4(t.dg(r))
else t.d4(t.aX(r,o-m))}else throw H.k(new T.dg("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.al();--r
t.b=r
if(r<0)t.b=0}},
dz:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cz(b)
switch(q){case 16:p=3+this.aw(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=s}break
case 17:p=3+this.aw(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aw(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.dg("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.w(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kM.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Math Book",H.a([$.L,$.Z,$.aG],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Giant Map",H.a([$.L,$.Z],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microscope",H.a([$.E,$.Z,$.b9],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Star Chart",H.a([$.L,$.Z],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("History Book",H.a([$.L,$.Z],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Radioactive Rock",H.a([$.c3,$.aI],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.Z],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.m)
q.i(0,$.bg,$.m)
q.i(0,$.f7,$.l)
q.i(0,$.b_,$.K)
q.i(0,$.cG,$.l)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.u
o=o+n+" to stop "
m=$.J
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.Gd
n=[U.b]
q.i(0,new R.a1("Recover the Books",!1,[new U.b(o),new U.b(l),new U.b(p)],H.a([],n),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
q.i(0,new R.a1("Shelve the Books",!1,[new U.b("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.u+" to stop "+$.J+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.b("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.b("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.xA(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.u
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.A
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.a1("Research the Denizen",!1,[new U.b(p),new U.b(l),new U.b(k)],H.a([],n),R.fo(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f4,$.K)
s.i(0,$.cG,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.u
s.i(0,new R.a1("Do the Math",!1,[new U.b(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.b("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.b("The "+l+"  finds a "+l+" child "+$.J+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.u
s.i(0,new R.a1("Use the Calculator",!1,[new U.b(l),new U.b("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.b("With a frantic "+$.J+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eA(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
s.i(0,new R.a1("Solve the Equation",!1,[new U.b("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.b("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.b("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.u+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.f4,$.K)
t.i(0,$.cG,$.m)
t.i(0,$.c1,$.K)
t.i(0,$.tU,$.K)
r=$.o
q="The "+r+"  is approached by a "
p=$.u
q=q+p+" who offers them a grant to study "
o=$.ae
t.i(0,new R.a1("Test the Hypothesis",!1,[new U.b(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.b("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.b("The Symposium has started. The crowd of unruly "+p+"s begins "+$.J+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
o=$.u
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.J
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ae
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.Gj
t.i(0,new R.a1("Make the Cure",!1,[new U.b(r),new U.b(l),new U.b(q)],H.a([],n),R.e6(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
t.i(0,new R.a1("Be the Scientist",!1,[new U.b("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.b("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.b("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.J+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.u+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aO)}}
K.bW.prototype={}
L.fL.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.l)
q.i(0,$.bg,$.K)
q.i(0,$.dM,$.l)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.A
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cl+". The "+p+" has won! "
i=[U.b]
q.i(0,new R.Q("Revive the Consorts",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.l)
s.i(0,$.ek,$.K)
s.i(0,$.em,$.m)
s.i(0,$.cZ,$.l)
s.i(0,$.ch,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.A
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cl+". The "+p+" has won! "
s.i(0,new R.Q("Produce the Goods",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(n),new U.W(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bg,$.K)
t.i(0,$.c9,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.J
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.A
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cl+". The "+r+" has won! "
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.va(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
l=$.o
r="The "+l+" learns that all of the local "
m=$.u
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.A
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cl+". The "+l+" has won! "
t.i(0,new R.Q("Relax the Consorts",!1,[new U.b(r),new U.b(p),new U.b(m),new U.W(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.av)},
C:function(a){return this.Q},
a_:function(a,b,c,d,e){var t=this.Q
this.r=new X.iD("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.io]),H.a([],[M.h9]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.E()
this.F()
t=this.e
if($.$get$kP().Z(0,t))H.bd("Duplicate aspect id for "+this.C(0)+": "+t+" is already registered for "+J.cy($.$get$kP().n(0,t))+".")
$.$get$kP().i(0,t,this)},
gK:function(a){return this.Q}}
L.a8.prototype={}
M.kR.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Barbells",H.a([$.ac,$.cb,$.E],s),null,!1,"Strength Building Metal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Basketball",H.a([$.ep,$.cc],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Baseball Bat",H.a([$.jA,$.X],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rubber Ball",H.a([$.ep,$.cc],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.aU,$.a7],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hockey Stick",H.a([$.jA,$.X,$.dj],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Trophy",H.a([$.E,$.bi],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Boxing Glove",H.a([$.wN,$.cc],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Yoga Mat",H.a([$.cc,$.b7],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.e1,$.K)
q.i(0,$.bX,$.m)
q.i(0,$.cZ,$.K)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.u
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.J+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.b]
q.i(0,new R.a1("Enter the Dungeon",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.u
q.i(0,new R.a1("Clear the Road",!1,[new U.b(p+n+" merchants waiting for it to be cleared. "),new U.b("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.b("With a triumphant "+$.J+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e6(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.u
q.i(0,new R.a1("Be the Strongest",!1,[new U.b(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.b("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.b("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hM(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.e1,$.m)
t.i(0,$.f8,$.m)
t.i(0,$.bX,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.u
t.i(0,new R.a1("Save the Sports",!1,[new U.b(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.b("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.b("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.xA(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.A+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.J
t.i(0,new R.a1("Coach the Sports",!1,[new U.b(s),new U.b(o),new U.b(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e6(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
k=$.u
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.a1("Win at Sports",!1,[new U.b(p+r+". Apparently their sports team lost a member to the "+$.A+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.b("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.b("The "+r+" ganks the "+$.ae+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,t,null),$.aO)}}
U.kV.prototype={
S:function(a,b){var t=0,s=P.bk(),r,q,p,o
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=$.$get$w4()
p=q.createBufferSource()
o=p
t=3
return P.cf(J.yZ(q,b),$async$S)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$asdt:function(){return[P.eV]},
$asca:function(){return[P.eV,P.bj]}}
U.nl.prototype={
aU:function(a){return"audio/mpeg"}}
U.nW.prototype={
aU:function(a){return"audio/ogg"}}
U.pd.prototype={
S:function(a,b){var t=0,s=P.bk(),r,q,p
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=W.zV(b)
p=new W.i5(q,"canplaythrough",!1,[W.T])
t=3
return P.cf(p.gJ(p),$async$S)
case 3:r=q
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$asiB:function(){return[W.eW]},
$asca:function(){return[W.eW,P.y]}}
U.pe.prototype={}
U.pf.prototype={}
O.kX.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cod Piece",H.a([$.P,$.a0,$.aT,$.O,$.X],s),"God damn it, MI. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poisoned Candy",H.a([$.ue,$.O,$.bM],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Lyre",H.a([$.aP,$.X,$.br,$.O,$.aa],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Snare Trap",H.a([$.P,$.aP,$.O,$.bh],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cE,$.l)
t.i(0,$.hg,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.dx,$.l)
t.i(0,$.cF,$.l)
t.i(0,$.f3,$.l)
r="After all the bullshit the "+$.A+" has put the native "
q=$.u
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aV+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.J
m=[U.b]
t.i(0,new R.a6("Celebrate the Win",!1,[new U.b(r),new U.b(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.b(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.z(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.u
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.J
t.i(0,new R.a6("Lead the Parade",!1,[new U.b(n),new U.b(o+r+"ing about how they defeated the "+$.A+". Wow, this is actually kind of embarrasing. "),new U.b("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a6("Behold the Glory of CodTier",!1,[new U.b("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.A+" has been defeated, perhaps they can finally focus on finding it."),new U.b("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.z(),!1,!1,new Y.la("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.u
t.i(0,new R.bB("Pull the Strings of a Universe",!1,[new U.b(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.b("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.b("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Y.pv.prototype={
S:function(a,b){var t=0,s=P.bk(),r
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$aseG:function(){return[P.y]},
$asca:function(){return[P.y,P.y]}}
Y.ol.prototype={
aU:function(a){return"application/octet-stream"},
S:function(a,b){var t=0,s=P.bk(),r
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$asdt:function(){return[P.bj]},
$asca:function(){return[P.bj,P.bj]}}
L.l0.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Bear",H.a([$.aU,$.ba,$.R],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Thought",H.a([$.uc,$.x8,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Doorway",H.a([$.fe,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Contemplative","Transitions","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cg,$.l)
t.i(0,$.d8,$.m)
t.i(0,$.bX,$.m)
t.i(0,$.em,$.B)
r=$.o
q="The "+r+" hears a "+$.u+" "+$.J+" up to him, it talks about how the imps keep jumpscaring it, and how The "+r+" needs to stop the Denizen."
p="The "+r+" has an imp jumpscare them, they instantly smite it, but they decide to get revenge by killing the "
o=$.A
p=p+o+"."
n="The "+r+" starts trekking to the "+o+"'s lair."
m="The "+r+" arrives in the "+o+"'s lair, they challenge it to a fight."
l="The "+o+" is slain... And the consorts aren't jumpscared any more"
t.i(0,new R.Q("Revenge on the Denizen",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, and the "+o+"'s minions keep jumpscaring the innocent imps.",l)],H.a([],[U.b]),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.l3.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Mystical Vial of Blood",H.a([$.b9,$.br,$.R,$.aX],s),null,!1,"Vial of Not-ABs Oil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bananaphone",H.a([$.aD,$.br,$.R,$.b8],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Friendship Bracelet",H.a([$.P,$.br,$.R,$.aX,$.hn],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bonding Manacles",H.a([$.E,$.bh,$.R,$.aX,$.hn,$.aS],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Friendship Stairs",H.a([$.X,$.un,$.br,$.aX,$.R,$.a0],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d6,$.l)
q.i(0,$.tY,$.l)
q.i(0,$.c1,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.u
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ae+" and some boondollars in compensation."
n=this.x2
k=[U.b]
q.i(0,new R.a1("Cross the Lake",!1,[new U.b(o),new U.b(m),new U.b(l),new U.b(p)],H.a([],k),R.e6(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.u
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.J+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.A
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cl+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.Q("Unplug the Rivers",!1,[new U.b(p),new U.b(o),new U.b(j),new U.W(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cZ,$.l)
s.i(0,$.cF,$.K)
s.i(0,$.b_,$.K)
s.i(0,$.iM,$.l)
s.i(0,$.cB,$.K)
p=$.o
o="The "+p+"  and the "
m=$.eC
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.A
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.Q("Learn the Power of Teamwork",!1,[new U.b(o),new U.b(l),new U.W(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.eB(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.u
i=i+m+"s explains that before  "
p=$.A
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cl+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.Ga
s.i(0,new R.Q("Chain the Towers",!1,[new U.b(i),new U.b(m),new U.b(j),new U.W(l,h,o)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
o="The "+p+" learns of the "
h=$.aV
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.u
o=o+l+" explains that the "
j=$.A
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cl+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.Q("Protect the Beams",!1,[new U.b(l),new U.b(o),new U.b(m),new U.W(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.u
h=h+i+" on "+$.aV+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.fa+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a6("One Degree of Separation",!1,[new U.b(h),new U.b(m),new U.b(i)],H.a([],k),R.fo(),!1,!1,new Y.c2("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.u+" on "
m=$.aV
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.fa+" is now more popular with your friends than you are."
s.i(0,new R.a6("Steal The Friends",!1,[new U.b(i),new U.b(h),new U.b(m)],H.a([],k),R.vb(),!1,!1,new Y.c2("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
m="The "+p+"  and the "
h=$.eC
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.A
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.Q("Pale Shipping Dungeon",!1,[new U.b(m),new U.W(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.t)+".",o)],H.a([],k),R.eB(),!1,!1,new Y.jT(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aw)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bg,$.K)
t.i(0,$.c9,$.m)
r="In the wake of the defeat of the "+$.A+" it becomes really how isolated the individual "
q=$.u
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.fa+" to kick your ass, but luckily they have several."
t.i(0,new R.a6("Connect The Villages",!1,[new U.b(r),new U.b(p),new U.b(q)],H.a([],k),R.e6(),!1,!1,new Y.c2("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
o=$.o
q="The "+o+" learns that two prominent "
p=$.u
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.A
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cl+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.J+"ing. "
t.i(0,new R.Q("Stop the Feud",!1,[new U.b(q),new U.b(r),new U.b(m),new U.W(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
T.l5.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Pan's Pipe",H.a([$.aa,$.X,$.br,$.R],s),null,!1,"Smonkin Weeds Pipe")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skeleton Key",H.a([$.be,$.R],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Inspector's Fan",H.a([$.a7,$.E,$.br,$.R],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Jet Pack",H.a([$.aE,$.E,$.aU,$.R,$.a0],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.m)
q.i(0,$.f8,$.l)
q.i(0,$.b_,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ae
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.A
o=o+m+" has screwed with the mail system, crippling the "
l=$.u
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cl+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.Ge
i=[U.b]
q.i(0,new R.Q("The Mail Goes Through",!1,[new U.b(o),new U.b(k),new U.b(n),new U.W(j,p,l)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.bg,$.l)
s.i(0,$.f8,$.m)
s.i(0,$.b_,$.m)
s.i(0,$.bX,$.m)
s.i(0,$.c9,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ae
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.u
k=l+k+" fields. The "+k+"s "+$.J+"ing is so joyful it's literally deafening. "
l=$.A
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cl+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.Q("Thinking With Wind Power",!1,[new U.b(o),new U.b(n),new U.b(k),new U.W(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ch,$.l)
t.i(0,$.m4,$.l)
t.i(0,$.f8,$.K)
t.i(0,$.c9,$.K)
r=$.o
q="The "+r+" is chilling in a "+$.u+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.A
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ae
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aV+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cl+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.Q("The Winds of Change",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.av)}}
M.fS.prototype={
eM:function(a){var t=this.a
if(!t.Z(0,a))return
return t.n(0,a)}}
Y.l7.prototype={
S:function(a,b){var t=0,s=P.bk(),r,q,p,o,n,m,l,k,j,i
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=J.ec(b,"\n")
p=P.y
o=P.cI(p,p)
n=P.cI(p,[P.e7,P.y])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.cD(k).bl(k).length===0)m=null
else if(m==null)m=C.c.bl(k)
else{j=C.c.bl(k)
i=C.c.L(m,0,C.c.eo(m,$.$get$w8())+1)+j
o.i(0,i,m)
if(!n.Z(0,m))n.i(0,m,P.a2(null,null,null,p))
J.yR(n.n(0,m),i)}}r=new M.fS(o,n)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$aseG:function(){return[M.fS]},
$asca:function(){return[M.fS,P.y]}}
A.lc.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Colonel Sassacre's Daunting Text ",H.a([$.L,$.ac,$.b8,$.cb],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wise Guy Book",H.a([$.L,$.b8],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Beagle Puss",H.a([$.b9,$.b8],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Novelty Microphone",H.a([$.aU,$.a7,$.b8],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Banana",H.a([$.aD,$.b8],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fake Flower",H.a([$.P,$.b8],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Trick Handcuffs",H.a([$.E,$.b8],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.m)
q.i(0,$.cA,$.l)
q.i(0,$.bX,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.u
o=o+n+"s are too scared to even "+$.J+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.A+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.b]
q.i(0,new R.a1("Defeat the Army",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.K)
s.i(0,$.bX,$.l)
s.i(0,$.cA,$.l)
s.i(0,$.cE,$.l)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aV
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.u
k=k+j+"s let out a braying "+$.J+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.Gh
s.i(0,new R.a1("Win the Laughs",!1,[new U.b(n),new U.b(k),new U.b(o)],H.a([],l),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cH,$.K)
t.i(0,$.c8,$.m)
t.i(0,$.cA,$.l)
t.i(0,$.bX,$.m)
t.i(0,$.iG,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.u
q=q+o+" who offers them a magical "
n=$.ae
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.J
t.i(0,new R.a1("Trick the Villain",!1,[new U.b(q),new U.b(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.b("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aO)}}
S.bH.prototype={
C:function(a){return H.C(new H.dS(H.kD(this),null))+": "+this.c},
gK:function(a){return this.c}}
S.ip.prototype={}
S.mr.prototype={}
M.lo.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Can of Spray Paint",H.a([$.aJ,$.E],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sensible Chuckles Magazine",H.a([$.L,$.ax,$.b8,$.aG],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Gentleman's Razor",H.a([$.uu,$.E,$.aH],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("How To Draw Manga",H.a([$.L,$.ax,$.aG],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Painting of a Horse Boxing a Football Player",H.a([$.aJ,$.aA,$.L],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Collection of Classical Works",H.a([$.ax,$.L],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Documentary on Horses",H.a([$.ax,$.aM,$.aA],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Paint Set",H.a([$.aJ,$.ax],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shaving Cream",H.a([$.aE,$.ax,$.E],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Classy Suit",H.a([$.P,$.ax],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("The Fatherly Gent's Shaving Almanac ",H.a([$.L,$.ax,$.aG],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.m)
q.i(0,$.cG,$.l)
q.i(0,$.b_,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ae
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.u
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.A+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.J+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.b]
q.i(0,new R.a1("Catch the Thief",!1,[new U.b(o),new U.b(l),new U.b(n)],H.a([],p),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.e1,$.K)
s.i(0,$.bX,$.m)
s.i(0,$.cA,$.K)
s.i(0,$.bg,$.m)
s.i(0,$.cE,$.l)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.u
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aV
l=l+n+" "
k=$.ae
s.i(0,new R.a1("Perform the Play",!1,[new U.b(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.b("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.b("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.J+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.hg,$.K)
t.i(0,$.cB,$.K)
t.i(0,$.f3,$.K)
t.i(0,$.c8,$.K)
t.i(0,$.bg,$.m)
t.i(0,$.b_,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.J
q=q+o+"ingworth, "
n=$.u
q=q+n+" heiress to the "+$.ae+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.G7
t.i(0,new R.a1("Attend the Dinner Party",!1,[new U.b(q),new U.b(l),new U.b(n)],H.a([],p),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aO)}}
T.lu.prototype={}
V.lw.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Trendy Fabric",H.a([$.aJ,$.P],s),null,!1,"Weird Tasting Candy Paper")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Necklace",H.a([$.aJ,$.uk,$.hn],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sewing Needle",H.a([$.E,$.uq,$.aY],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jy
r=A.j("Broom",H.a([r,$.X,$.ac,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rolling Pin",H.a([$.X,$.ux,$.ac],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Velvet Pillow",H.a([$.P,$.b7,$.br,$.aJ,$.e3],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yarn Ball",H.a([$.aJ,$.P],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Refrigerator",H.a([$.aS,$.cb,$.E,$.bs],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Photo Album",H.a([$.aJ,$.L],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Cubes",H.a([$.bs],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cast Iron Skillet",H.a([$.E,$.aE,$.ac,$.cb,$.uj],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Failed Dish",H.a([$.bM],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dr Pepper BBQ Sauce",H.a([$.bM],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Potted Plant",H.a([$.aJ,$.bQ,$.b4],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chicken Leg",H.a([$.aD,$.bl,$.be],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juicy Steak",H.a([$.aD,$.bl],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Wedding Cake",H.a([$.aJ,$.aD,$.aX],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.m)
q.i(0,$.cF,$.m)
q.i(0,$.cB,$.K)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.u
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ae
l=[U.b]
q.i(0,new R.a1("Design the Dress",!1,[new U.b(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.b(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.b("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.J+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.z(),!1,!1,new Y.ir("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cB,$.l)
s.i(0,$.bX,$.m)
s.i(0,$.f3,$.l)
s.i(0,$.dx,$.m)
s.i(0,$.bg,$.l)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ae
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.u
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.J+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.Gf
s.i(0,new R.a1("Bake the Cake",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.ei,$.l)
t.i(0,$.bg,$.m)
t.i(0,$.dv,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.iM,$.l)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.u
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ae
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.J+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.a1("Weave the Cloth",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aO)}}
U.lx.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aG,$.a7,$.L,$.aP,$.R,$.a0],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Egg Timer",H.a([$.aM,$.br,$.R,$.aP],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skull Timer",H.a([$.be,$.br,$.R,$.aP],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Poison Flask",H.a([$.b9,$.R,$.bM],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice Gorgon Head",H.a([$.b9,$.R,$.bs,$.aP,$.bh,$.bS,$.bc],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Obituary",H.a([$.aS,$.bc,$.aP,$.L,$.R],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.dM,$.l)
q.i(0,$.d7,$.m)
q.i(0,$.f8,$.K)
q.i(0,$.bg,$.K)
q.i(0,$.c1,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.u
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ae
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.A
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cl+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.b]
q.i(0,new R.Q("Empty the Graves",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dM,$.l)
s.i(0,$.d7,$.m)
s.i(0,$.en,$.aw)
s.i(0,$.ej,$.m)
s.i(0,$.tU,$.m)
s.i(0,$.d6,$.m)
s.i(0,$.d7,$.m)
s.i(0,$.bg,$.K)
s.i(0,$.c1,$.m)
s.i(0,$.dw,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.u
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aV
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.J+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.A
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cl+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.Q("Become the Warlord",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eA(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ae
p=p+l+"s alike. "
l=$.u+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.A
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cl+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.Q("Make This Stupid Planet Habitable",!1,[new U.b(p),new U.b(l),new U.b(g),new U.W(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.c1,$.l)
t.i(0,$.wt,$.aw)
t.i(0,$.hd,$.K)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.A
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.u+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.b(q),new U.b(o),new U.b(m),new U.W(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eA(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
k=$.o
p="The "+k+" learns from one of their "
r=$.u
p=p+r+"s that there is an ancient prophecy of a "
l=$.aV
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ae
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.A
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cl+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.G6
t.i(0,new R.Q("Learn the Prophecy",!1,[new U.b(p),new U.b(m),new U.b(r),new U.W(o,k,q)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
Z.ly.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Dream Diary",H.a([$.L,$.aG,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aM,$.br,$.ac,$.R,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aM,$.br,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.m)
q.i(0,$.dv,$.l)
q.i(0,$.b_,$.m)
q.i(0,$.iM,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xn
k=[U.b]
q.i(0,new R.Q("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ch,$.m)
s.i(0,$.dv,$.l)
s.i(0,$.d9,$.m)
s.i(0,$.cg,$.m)
s.i(0,$.dJ,$.m)
s.i(0,$.cA,$.l)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.l)
t.i(0,$.hc,$.m)
t.i(0,$.b_,$.m)
t.i(0,$.cg,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.dv,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.Q("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aV+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.J+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.av)}}
X.iD.prototype={}
X.io.prototype={$isu3:1,
$S:function(){return{func:1,v:true,args:[[P.q,M.h9]]}}}
M.h9.prototype={}
U.m_.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Fluthulu Poster",H.a([$.P,$.b7,$.bc,$.bt],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Scalemate",H.a([$.P,$.b7,$.bc],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Bone Shield",H.a([$.aS,$.aM,$.be,$.ff,$.aT],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Replica Ice Sword",H.a([$.aM,$.wT,$.fg,$.aT],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Zombie Mask",H.a([$.aM,$.bS,$.bl,$.bc],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Vampire Romance Novel",H.a([$.aG,$.L,$.aN,$.bc],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizardy Herbert",H.a([$.L,$.a3,$.ac],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Complacency of the Learned",H.a([$.L,$.a3,$.ac],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grimoire for Summoning the Zoologically Dubious ",H.a([$.L,$.a3,$.bS,$.bc,$.bt],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wizard Statue",H.a([$.aS,$.aI,$.a3,$.ac,$.aT],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Mermaid Fountain",H.a([$.aS,$.ug,$.a3,$.ac,$.aT],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.aw)
q.i(0,$.cF,$.m)
q.i(0,$.c9,$.m)
q.i(0,$.cH,$.K)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.u
o=o+n+" who has been kidnapped by the vial "
m=$.A
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ae
j=[U.b]
q.i(0,new R.a1("Save the Beautiful Consort",!1,[new U.b(o),new U.b(l+k+" can open it. Looks like it's time to go questing."),new U.b("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.l)
s.i(0,$.d6,$.l)
s.i(0,$.iI,$.m)
s.i(0,$.c1,$.l)
s.i(0,$.en,$.l)
s.i(0,$.hf,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.u
s.i(0,new R.a1("Do not Drink...Wine.",!1,[new U.b(n+m+" leave, and no one can remember the last time he received guests."),new U.b("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.b(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c8,$.l)
t.i(0,$.iL,$.m)
t.i(0,$.c1,$.l)
t.i(0,$.dK,$.m)
t.i(0,$.f4,$.m)
t.i(0,$.tY,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.u
q=q+o+"s "
n=$.J
t.i(0,new R.a1("Expose the Conspiracy",!1,[new U.b(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.b("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.b("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aO)}}
N.a5.prototype={
C:function(a){return H.C(new H.dS(H.kD(this),null))+": "+H.C(this.b)}}
O.ca.prototype={
b4:function(a){var t=0,s=P.bk(),r,q=this,p
var $async$b4=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cf(q.aW(a),$async$b4)
case 3:r=p.S(0,c)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$b4,s)}}
O.dt.prototype={
bb:function(a){var t=0,s=P.bk(),r
var $async$bb=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$bb,s)},
cL:function(a){var t=0,s=P.bk(),r,q=this
var $async$cL=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.zW([J.vU(a)],q.aU(0),null))
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$cL,s)},
aW:function(a){var t=0,s=P.bk(),r,q=this,p,o
var $async$aW=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:p=P.bj
o=new P.bm(0,$.aB,null,[p])
W.wA(a,null,q.aU(0),null,null,"arraybuffer",null,null).b5(new O.l1(new P.dU(o,[p])))
r=o
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$aW,s)},
$asca:function(a){return[a,P.bj]}}
O.l1.prototype={
$1:function(a){this.a.aE(0,H.kE(J.z7(a),"$isbj"))},
$S:function(){return{func:1,args:[W.e2]}}}
O.eG.prototype={
bb:function(a){var t=0,s=P.bk(),r,q,p,o,n
var $async$bb=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:a.toString
q=H.cQ(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hL(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$bb,s)},
aW:function(a){var t=0,s=P.bk(),r
var $async$aW=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=W.u7(a,null,null)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$aW,s)},
$asca:function(a){return[a,P.y]}}
O.iB.prototype={
aW:function(a){var t=0,s=P.bk(),r
var $async$aW=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$aW,s)},
bb:function(a){return H.bd("Element format doesn't read from buffers")},
$asca:function(a){return[a,P.y]}}
V.me.prototype={
aU:function(a){return"font/opentype"},
S:function(a,b){var t=0,s=P.bk(),r
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:t=3
return P.cf(A.hx("scripts/Rendering/text/opentype.min.js",!1),$async$S)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$asdt:function(){return[R.hh]},
$asca:function(){return[R.hh,P.bj]}}
Z.iC.prototype={}
E.iR.prototype={}
E.nV.prototype={}
E.M.prototype={
C:function(a){var t="["+J.cy(this.a)+" x "+H.C(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fM.prototype={
C:function(a){var t="[(Random from "+P.uB(this.d,"(",")")+") x "+H.C(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.kQ.prototype={
C:function(a){return"[Stats assigned from player Interests x"+H.C(this.b)+"]"}}
N.mi.prototype={}
Y.mk.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("How to Teach Your Friends to Hack SBURB",H.a([$.aG,$.O,$.L,$.a0,$.hp],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Unstable Domino",H.a([$.aM,$.O,$.aP],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Exposed Thread",H.a([$.P,$.O,$.aP],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Teetering Plate",H.a([$.mP,$.O,$.aP],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m6,$.m)
t.i(0,$.c9,$.l)
t.i(0,$.dw,$.K)
t.i(0,$.di,$.l)
r=$.u
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.J
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aV
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ae
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.A
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.b]
t.i(0,new R.Q("I'm So Meta, Even This Acronym",!1,[new U.b(q),new U.b(m),new U.b(n),new U.W(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
t.i(0,new R.a6("Cooking with Petrol",!1,[new U.b("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.A+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.b("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.b("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.u+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.z(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.u
j="Now that the "+o+"s are free from the reign of "+$.A+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.J
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aV+" Quest Online: The "+$.ae+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.go
t.i(0,new R.a6("Stop the Meta",!1,[new U.b(j),new U.b(r),new U.b(o)],H.a([],i),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.u
t.i(0,new R.bB("Allow Others to Meta a Universe",!1,[new U.b(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.b("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.b("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.J+"s in time to stop them.    ")],H.a([],i),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Y.ml.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Sherpa Parka",H.a([$.bs,$.O,$.cj],s),"Clearly the best class uses this.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Guide Book",H.a([$.a0,$.bs,$.aG,$.L,$.O,$.Z],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Whistle",H.a([$.E,$.O,$.aU],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Announcement System",H.a([$.E,$.O,$.a7,$.Z],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m6,$.l)
t.i(0,$.c9,$.l)
t.i(0,$.dw,$.m)
t.i(0,$.di,$.l)
r="Now that the "+$.A+" is out of the way, a group of "
q=$.u
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.b]
t.i(0,new R.a6("Find the Home",!1,[new U.b(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.b("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.b("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.J+", but they are happy.")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.b(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.u+" "+$.J+"s in time to stop them.    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.bN)}}
T.mm.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Doll",H.a([$.mP,$.aJ,$.aF,$.R],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Puppet",H.a([$.X,$.aF,$.R,$.a0,$.bc],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mirror",H.a([$.up,$.R],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.L,$.R,$.aN],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shades",H.a([$.aA,$.b9,$.R],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ej,$.K)
q.i(0,$.el,$.l)
q.i(0,$.bX,$.m)
p=$.o
o="The "+p+", guided by a "+$.u+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.A
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cl+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.b]
q.i(0,new R.Q("Find Yourself",!1,[new U.b(o),new U.b(n),new U.b(m),new U.W(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
p="The "+j+" finds a Violent "
l=$.u
p=p+l+". A Magical Talking "
k=$.ae
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.A
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.Q("Steal the Heart",!1,[new U.b(p),new U.b(m),new U.b(k),new U.W(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.vb(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cA,$.l)
s.i(0,$.iI,$.l)
s.i(0,$.f8,$.m)
s.i(0,$.c1,$.l)
s.i(0,$.cB,$.m)
s.i(0,$.dw,$.K)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ae
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.A
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cl+". The "+p+" is victorious. "
s.i(0,new R.Q("Confront yourself.",!1,[new U.b(o),new U.b(m),new U.b(n),new U.W(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j="Now that the "+$.A+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.u
j=j+k+"s "
l=$.J
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.fa+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a6("Prove Your Identity",!1,[new U.b(j),new U.b(l),new U.b(k)],H.a([],i),R.e6(),!1,!1,new Y.c2("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.A
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.Q("Shatter The Mirrors",!1,[new U.b(k),new U.b(l),new U.b(j),new U.W(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eA(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iH,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.m5,$.l)
t.i(0,$.f3,$.m)
t.i(0,$.hf,$.l)
t.i(0,$.cF,$.m)
t.i(0,$.el,$.K)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.u
t.i(0,new R.Q("Ship All the Ships",!1,[new U.b(q+p+"s have no idea what's coming. "),new U.b("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "),new U.b("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aV+" laws put in place by "+$.A+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.u
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aV
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.J
t.i(0,new R.a6("Heal The Broken Heart",!1,[new U.b(p),new U.b(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.b("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hM(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
q=$.o
m="The "+q+"  and the "
r=$.eC
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.A
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.Q("Flushed Shipping Dungeon",!1,[new U.b(m),new U.W(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.t)+".",n)],H.a([],i),R.eB(),!1,!1,new Y.iP(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aw)
n=$.o
r="The "+n+"  and the "
q=$.eC
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.A
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.Q("Pitched Shipping Dungeon",!1,[new U.b(r),new U.W(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.C(C.t)+".",m)],H.a([],i),R.eB(),!1,!1,new Y.jV(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aw)
h.i(0,new X.G(s,t,null),$.aO)}}
B.mn.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Family Ashes",H.a([$.aS,$.aE,$.O,$.aP,$.bY],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Last Will and Testament",H.a([$.a0,$.L,$.O,$.aP,$.mM],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Grooming Guide",H.a([$.aG,$.O,$.ax],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Powered Attorney",H.a([$.wI,$.O,$.mH,$.mM],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Executer's Ax",H.a([$.ua,$.O,$.aH,$.mM],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.ch,$.m)
r=$.A
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.b]
t.i(0,new R.a6("Inherit Responsibilities",!1,[new U.b(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.b("After organizing taxes, approving budgets and listening to "+$.u+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.b("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
r="The "+$.A+" has released the frogs into the "
p=$.o
t.i(0,new R.bB("Inherit the Frogs",!1,[new U.b(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.bN)}}
V.mo.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Hippo",H.a([$.aU,$.ba,$.R],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ranting",H.a([$.uc,$.aU,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Vent",H.a([$.E,$.uf],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Confusion","Ranting","Cold","Quiet"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dJ,$.K)
t.i(0,$.d8,$.m)
t.i(0,$.tV,$.m)
t.i(0,$.hc,$.m)
r=$.o
q="The "+r+" hears the screaming voice of the "
p=$.A
q=q+p+", and when they walk into a consort village, a "
o=$.u
q=q+o+" "
n=$.J
q=q+n+"s about how loud and annoying the "+p+" is."
n="The "+r+" sees another "+o+". The "+o+" also "+n+"s about how loud the "+p+" is."
o="The noise finally gets to The "+r+", and they vow to slay the "+p+"."
m="The "+r+" steps into the "+p+"'s lair, The "+r+" demands the noise to stop, so they challenge their Denizen to a duel. "
l="The "+p+" is defeated, and the noise finally stops."
t.i(0,new R.Q("Stop the Screamening",!1,[new U.b(q),new U.b(n),new U.b(o),new U.W(m,"The "+r+" is defeated, and the "+p+" screeches more.",l)],H.a([],[U.b]),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
X.mq.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Wand",H.a([$.X,$.R,$.a3,$.ba],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Angel Feather",H.a([$.ba,$.bA,$.R,$.b3,$.aa,$.a0,$.a3],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Never Ending Story DVD",H.a([$.bR,$.un,$.R,$.a3,$.b8,$.ba],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candle",H.a([$.ba,$.b3,$.R,$.aE],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Figurine",H.a([$.aM,$.b3,$.R,$.ba],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.tT,$.l)
q.i(0,$.cF,$.m)
q.i(0,$.b_,$.l)
q.i(0,$.cg,$.l)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.u
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.J+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.A
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ae
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.G9
i=[U.b]
q.i(0,new R.Q("Learn to Believe",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(k,p,j)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.l)
s.i(0,$.iG,$.m)
s.i(0,$.d9,$.l)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.u
o=o+m+" who offers them a magical "
l=$.ae
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.A
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.Q("Believe the Lies",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.dx,$.K)
t.i(0,$.cG,$.l)
t.i(0,$.cg,$.l)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.u
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.A
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ae
t.i(0,new R.Q("Be the Change You Believe In",!1,[new U.b(q),new U.b(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.b("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.W("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.o
o="The "+r+" discovers a group of "
p=$.u
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.A
t.i(0,new R.Q("The Ultimate Hope",!1,[new U.b(o),new U.b(l),new U.b(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.W("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hM(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n.i(0,new X.G(s,t,null),$.av)}}
X.mv.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Footstick",H.a([$.dj,$.O,$.jB,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Cheating Guide",H.a([$.aG,$.O,$.hp,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of Shogun",H.a([$.P,$.O,$.e3,$.mL,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Macrobots",H.a([$.uw,$.O,$.mH],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cH,$.l)
t.i(0,$.d9,$.l)
t.i(0,$.dv,$.l)
t.i(0,$.di,$.l)
t.i(0,$.ei,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.he,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vc(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cl+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xy(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xz(),!1,!1,new Y.c2("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a6("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.av)}}
Q.mw.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Yardstick",H.a([$.dj,$.O,$.jB,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURB Hacking Guide",H.a([$.aG,$.O,$.hp,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Body Pillow of Hussie",H.a([$.P,$.O,$.e3,$.mL,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t}}
Q.mA.prototype={
b4:function(a){var t=0,s=P.bk(),r,q,p
var $async$b4=P.bq(function(b,c){if(b===1)return P.bn(c,s)
while(true)switch(t){case 0:q=W.mz(null,a,null)
p=new W.i5(q,"load",!1,[W.T])
t=3
return P.cf(p.gJ(p),$async$b4)
case 3:r=q
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$b4,s)},
$asdt:function(){return[W.eo]},
$asca:function(){return[W.eo,P.bj]}}
Q.ob.prototype={
aU:function(a){return"image/png"},
S:function(a,b){var t=0,s=P.bk(),r,q=this,p,o,n
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cf(q.cL(b),$async$S)
case 3:p=n.mz(null,d,null)
o=new W.i5(p,"load",!1,[W.T])
t=4
return P.cf(o.gJ(o),$async$S)
case 4:r=p
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)}}
Q.o8.prototype={
aU:function(a){return"image/png"},
S:function(a,b){var t=0,s=P.bk()
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bo(null,s)}})
return P.bp($async$S,s)},
$asdt:function(){return[Q.jU]},
$asca:function(){return[Q.jU,P.bj]}}
B.hm.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.l)
q.i(0,$.bg,$.K)
q.i(0,$.dM,$.l)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.l)
s.i(0,$.ek,$.K)
s.i(0,$.em,$.m)
s.i(0,$.cZ,$.l)
s.i(0,$.ch,$.K)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bg,$.K)
t.i(0,$.c9,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
t.i(0,new R.a1("Relax the Consorts",!1,[new U.b(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" learns that all of the local "
q=$.u
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.J
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(r),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.va(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
n.i(0,new X.G(s,t,null),$.aO)},
C:function(a){return this.ch},
gK:function(a){return this.ch}}
A.a_.prototype={
aD:function(a,b){var t=b.gbD()-this.gbD()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bE(t)},
ghs:function(){var t,s,r,q,p,o
t=H.a([],[P.y])
s=new A.jY(null,null)
s.d9(this.f.a)
if(this.r===0)return t
r=P.dl(G.A2(this.f),!0,G.Y)
C.b.de(r,new A.mT())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bV)(r),++p){o=r[p]
if(!(o instanceof G.at||o.geb().length===0))t.push(" "+Y.Ic(s.i1(o.geb())))}return t},
gbD:function(){var t,s,r
for(t=this.f,s=new P.dq(t,t.r,null,null,[null]),s.c=t.e,r=0;s.I();)r+=s.d.gbD()
return r},
ghh:function(){var t=this.f
return new H.eL(t,new A.mS(),[H.N(t,0)])},
ghC:function(){var t,s,r,q,p
for(t=this.ghs(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q]+" "
return r+this.d},
C:function(a){return this.ghC()},
N:function(a,b,c,d,e){var t,s,r
t=P.jH(b,null)
this.f=t
if(t.a===0)t.h(0,$.fe)
s=P.jH(this.ghh(),null)
for(t=new P.dq(s,s.r,null,null,[null]),t.c=s.e;t.I();){r=t.d
this.f.ax(0,r.geZ())
this.f.ao(0,r)}$.$get$xe().push(this)},
$isbG:1,
$asbG:function(){return[A.a_]}}
A.mT.prototype={
$2:function(a,b){return a.ges()-C.a.bE(b.ges())},
$S:function(){return{func:1,args:[G.Y,G.Y]}}}
A.mS.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.Y]}}}
Z.n_.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Juice Box",H.a([$.L,$.R,$.ba,$.aT],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Shogun Body Pillow",H.a([$.e3,$.b7,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Juice","Faith","Determination","Calming","Peaceful","Freedom"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dJ,$.aw)
t.i(0,$.cF,$.m)
t.i(0,$.bX,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cg,$.l)
r=$.o
q="The "+r+" sees a floating sentient "
p=$.ae
q=q+p+", the "+p+" says it's a 'Juice Entity'. It then suddenly dissapears. "
o="The "+r+" notices their Juice Entity again, a "+$.u+" notices it, and starts "+$.J+"ing. The "+p+" tells The "+r+" some weird stuff about Juice and Sauce, before leaving again. This leaves The "+r+" very confused."
n="The "+r+" learns more about Sauce and Juice from the "+p+", and how [REDACTED] and [REDACTED], [DATA EXPUNGED]."
m=$.A
l=m+" challenges the "+r+" to a fight. The "+r+" calls upon the Juice Entity for help, but the Juice Entity refuses, and encourages The "+r+" on."
p=m+" is defeated, The "+r+" rejoices, while the "+p+" dissapears again."
k=[U.b]
t.i(0,new R.Q("Talk to your Juice entity",!1,[new U.b(q),new U.b(o),new U.b(n),new U.W(l,"The "+r+" is defeated, "+m+" rejoices. Well, the Juice Entity never really helped The "+r+" learn to fight, what did you expect?",p)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
r="The "+p+" is greeted by a young adolescent "
m=$.u
r=r+m+" looking down on his luck. Apparently, he wants to go out with this pretty "+m+" girl, but can\u2019t muster up the courage to ask her out. It seems the "+p+" will have to provide the "+m+" with some dating advice."
l="The "+p+" is doing a pretty good job of being a wingman. They teach the nervous "+m+" everything they know about love and how it works. The "+p+" makes plans to have the two "+m+"s meet at a local consort diner tonight."
n="The "+p+" is hiding in a bush, watching their tutelage from afar. The now dapper-looking "+m+", though fearful, easily sweeps his love interest right off her feet. Love has succeeded once again! The "+p+" feels good about themselves for having done a nice thing today."
o="The "+p+" treavels to "
q=$.A
o=o+q+"'s lair, the lovebird "+m+"s follow the "+p+", "
j=$.J
o=o+j+"ing excitedly. They cheer The "+p+" as he begins the fight..."
j=q+" lies defeated, the "+m+"s are still "+j+"ing, even more now."
t.i(0,new R.Q("Be The Wingman",!1,[new U.b(r),new U.b(l),new U.b(n),new U.W(o,"The "+p+" is defeated, "+q+" laughs, while the "+m+"s run away.",j)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=$.o
m="The "+j+" arrives to find a consort city in total ruins! A nearby "
q=$.u
m=m+q+" informs them that "
p=$.A
m=m+p+" has somehow grown themselves to massive proportions and is wrecking havock all over the city. The "+j+" offers to help take care of it, but the "+q+" informs them that they will stand no chance in their current state. They beckon them to follow into an underground bunker."
o="Inside the bunker, the "+j+" is greeted by another "+q+" in a scientist\u2019s robe. He explains to them that they have been working diligently on a giant "+q+" mech that would be able to take "+p+" down, and that preparations are almost complete. The "+j+" agrees to pilot the mech to stop the Denizen."
n="Sitting inside the controls of the giant "+q+" robot, the "+j+" finds themselves going up to "+p+" and punching them square in the face! "+p+" quickly retaliates with a whack of their tail, and soon the two kaiju-sized fighters are duking it out as the tiny "+q+"s watch in awe."
l="With one well-timed ROBO-PUNCH, the "+j+" deals the finishing blow to "+p+", as they shrink back to their normal size. The two of them both know, however, that the battle is still far from over. The "+j+" hops out of the mech as they and "+p+" prepare to fight each other in their true sizes."
q="The "+j+" has defeated their denizen! The "+q+"s cheer them on in victory, and the scientist consort allows them to keep the giant mech as a memento of their success."
t.i(0,new R.Q("Pilot The Mech",!1,[new U.b(m),new U.b(o),new U.b(n),new U.W(l,"Alas, the "+j+" was not strong enough to defeat "+p+". "+p+" steals the giant mech and keeps it as a memento of the "+j+"\u2019s failure.",q)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
N.n0.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Gavel",H.a([$.X,$.um],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Caution Tape",H.a([$.aM,$.bh],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Deerstalker Hat",H.a([$.P,$.aJ],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mystery Novel",H.a([$.L,$.aG],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dish Served Cold",H.a([$.bQ,$.aD,$.bs],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pony Pals: Detective Pony ",H.a([$.L,$.aG,$.aA],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Handcuffs",H.a([$.aS,$.E,$.bh],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ha,$.K)
q.i(0,$.c8,$.m)
q.i(0,$.cG,$.K)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.J+"ing "
n=$.u
m=[U.b]
q.i(0,new R.a1("Shit, Lets Be Lawyers",!1,[new U.b(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.b("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.b(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ae+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.r
n.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c8,$.l)
s.i(0,$.dw,$.m)
s.i(0,$.cZ,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.u
l=o+l+" yells 'Stop that thief' in betwen "+$.J+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ae+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.G5
s.i(0,new R.a1("Enforce the Law",!1,[new U.b(l),new U.b(o),new U.b(p)],H.a([],m),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c8,$.l)
t.i(0,$.ch,$.m)
t.i(0,$.d6,$.K)
t.i(0,$.en,$.m)
t.i(0,$.ej,$.m)
t.i(0,$.f6,$.m)
t.i(0,$.iJ,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.J
q=q+p+"ing "
o=$.u
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.Gi
t.i(0,new R.a1("Start a Revolution",!1,[new U.b(q),new U.b(r),new U.b(p)],H.a([],m),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.aO)}}
S.n2.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Shining Armor",H.a([$.aS,$.mO,$.O,$.ff],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Excalibur",H.a([$.a0,$.mO,$.O,$.aY,$.aH,$.fg],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Noble Steed",H.a([$.E,$.O,$.bl,$.aF],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Hero's Shield",H.a([$.aS,$.ff,$.O,$.mO],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m3,$.l)
t.i(0,$.dL,$.l)
t.i(0,$.e1,$.l)
t.i(0,$.f6,$.l)
t.i(0,$.ha,$.m)
r="The "+$.A+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Breed the Frogs",!1,[new U.b(r+q+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.b("The "+q+" has found the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.A
r="Now that the "+q+" is defeated, the "
o=$.u
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a6("Exploit the Heat",!1,[new U.b(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.b("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.b("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.aV
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.A
n=n+q+". A Learned "+$.u+" explains that it can only be defeated by the Legendary "
r=$.ae
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a6("Fight the Beast",!1,[new U.b(n+m+" prepares to go questing for it. "),new U.b("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.b("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
r="The volcanos of the land are weirdly active after the defeat of the "+$.A+". One begins to erupt near a "
m=$.u
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.J+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a6("Protect the Consorts",!1,[new U.b(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.b("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.b("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Q.n4.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Dream Diary",H.a([$.L,$.aG,$.R],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Interlocking Brick",H.a([$.aM,$.br,$.ac,$.R,$.a0],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Art Supplies",H.a([$.aM,$.br,$.R],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ei,$.m)
q.i(0,$.dv,$.l)
q.i(0,$.b_,$.m)
q.i(0,$.iM,$.m)
p=$.u
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.A
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.J+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.xn
k=[U.b]
q.i(0,new R.Q("Make the Thing",!1,[new U.b(o),new U.b(p),new U.b(m),new U.W(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=this.f
l.i(0,new X.G(s,q,null),$.av)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ch,$.m)
s.i(0,$.dv,$.l)
s.i(0,$.d9,$.m)
s.i(0,$.cg,$.m)
s.i(0,$.dJ,$.m)
s.i(0,$.cA,$.l)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.u
n=n+m+"s are even starting to snigger and "
j=$.J
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.A
s.i(0,new R.Q("Deconstruct the Satire",!1,[new U.b(o),new U.b(j),new U.b(m),new U.W("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(q,s,null),$.av)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.l)
t.i(0,$.hc,$.m)
t.i(0,$.b_,$.m)
t.i(0,$.cg,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.dv,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.A
t.i(0,new R.Q("Dream the Dream",!1,[new U.b(q+p+" Minion wanders by in a "+$.aV+" "+r+" costume and it just seems inevitable.  "),new U.b("You are trying to make sense of things. What is going on lately with the land? A "+$.u+" is "+$.J+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.b("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.W("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
l.i(0,new X.G(s,t,null),$.av)}}
K.n6.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Creeping Vine",H.a([$.X,$.R,$.b4,$.aF],s),null,!1,"Sentient Plant Tentacles")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lollipop",H.a([$.ue,$.R,$.aX],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Golem",H.a([$.aS,$.aI,$.R,$.aF],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ectoplasm",H.a([$.bY,$.R,$.aX],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Aqua Vitae",H.a([$.b9,$.R,$.aX,$.a0,$.a3],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Homunculus",H.a([$.bl,$.R,$.aF],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.c9,$.l)
q.i(0,$.bg,$.l)
q.i(0,$.hb,$.K)
q.i(0,$.b_,$.m)
q.i(0,$.m6,$.m)
q.i(0,$.cH,$.K)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.u
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.J+"ing in panic. Don't upset "
m=$.A
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.b]
q.i(0,new R.Q("Restore the Forest",!1,[new U.b(o),new U.b(l),new U.W(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.l)
s.i(0,$.cB,$.l)
s.i(0,$.cH,$.K)
s.i(0,$.b_,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.u
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.A
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.Q("Distribute the Food",!1,[new U.b(m),new U.b(k),new U.b(l),new U.W(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d7,$.l)
t.i(0,$.bg,$.K)
t.i(0,$.dM,$.l)
t.i(0,$.c1,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.iE,$.m)
r="Drawn by wailing and "+$.J+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.u
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.A
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.Q("Protect the Farms",!1,[new U.b(r),new U.b(m),new U.b(k),new U.W(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
G.n7.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("FAQ",H.a([$.a7,$.R,$.Z,$.bZ],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flashlight",H.a([$.aM,$.R,$.b3,$.a7,$.bZ],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Octet",H.a([$.R,$.b3,$.bZ,$.a0,$.ug],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Horseshoe",H.a([$.wS,$.R,$.ac],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Rabbits Foot",H.a([$.x0,$.R],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("4 Leaf Clover",H.a([$.b4,$.R,$.b3,$.bZ],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("8-Ball",H.a([$.b9,$.R,$.aF],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.y]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iK,$.l)
q.i(0,$.ei,$.m)
q.i(0,$.dK,$.l)
q.i(0,$.el,$.l)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.A
o=o+n+" when some local "
m=$.u
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.b]
q.i(0,new R.Q("Be the Contestant",!1,[new U.b(o),new U.b(l),new U.b(k),new U.W(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.J+"ing "+$.u+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.A
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.Q("Go Big or Go Home",!1,[new U.b(n),new U.b(p),new U.b(j),new U.W(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.f
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.c9,$.m)
s.i(0,$.b_,$.m)
s.i(0,$.dx,$.l)
s.i(0,$.m1,$.l)
s.i(0,$.ek,$.l)
s.i(0,$.iG,$.l)
p=$.o
o="The "+p+" walks into a "
n=$.u
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ae
o=o+l+", but "
k=$.A
o=o+k+" has hoarded all of the planets "
j=$.aV
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.J+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.Q("The Candlestick Taker",!1,[new U.b(l),new U.b(o),new U.b(h),new U.W(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.vb(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.u
j=j+k+" explains that the "
h=$.A
s.i(0,new R.Q("Shine the Light",!1,[new U.b(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.b("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.J+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.b("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.W("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.hd,$.m)
q.i(0,$.bg,$.m)
q.i(0,$.f7,$.l)
q.i(0,$.b_,$.m)
q.i(0,$.cG,$.l)
p="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.u
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.fa+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a6("Moderate the Wiki",!1,[new U.b(p),new U.b(n),new U.b(o)],H.a([],i),R.e6(),!1,!1,new Y.c2("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
l="Now that the "+$.A+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.u
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.fa+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a6("Create the Wiki",!1,[new U.b(l),new U.b(n),new U.b(o)],H.a([],i),R.eA(),!1,!1,new Y.c2("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.A
q.i(0,new R.Q("Shed the Light",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,q,null),$.av)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.dK,$.l)
t.i(0,$.iK,$.l)
t.i(0,$.el,$.m)
t.i(0,$.cF,$.m)
t.i(0,$.tX,$.m)
t.i(0,$.c1,$.K)
t.i(0,$.e1,$.K)
t.i(0,$.bX,$.m)
t.i(0,$.cA,$.K)
t.i(0,$.bg,$.m)
t.i(0,$.cE,$.l)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.u
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ae
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.J+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.A
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.Q("Be the Star",!1,[new U.b(r),new U.b(n),new U.b(p),new U.W(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
o="After the "+$.A+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.u
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.fa+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a6("Be the Biggest Star in Paradox Space",!1,[new U.b(o),new U.b(l),new U.b(s)],H.a([],i),R.e6(),!1,!1,new Y.c2("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m.i(0,new X.G(q,t,null),$.av)}}
Z.nk.prototype={
E:function(){var t,s,r,q
t=this.H
s=[G.Y]
r=A.j("Dream Bubbles Book",H.a([$.L,$.ax,$.aG,$.wL],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.N(t,0)]))
t=Q.F(null,null,A.a_)
r=A.j("Uno Reverse Card",H.a([$.mI,$.jB,$.ax],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Lord's Cape",H.a([$.P,$.O,$.ax],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drawing Tablet",H.a([$.hp,$.O,$.ax],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("How to Make Friends And Influence People",H.a([$.a0,$.L,$.O,$.bx,$.aG],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d6,$.K)
q.i(0,$.en,$.K)
q.i(0,$.c1,$.K)
q.i(0,$.cZ,$.m)
p="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.u
m=[U.b]
q.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.b(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.J+"s. "),new U.b("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o="As soon as the "+$.A+" is defeated, the "
n=$.u
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a6("Conquer Everything",!1,[new U.b(o+p+" is up to the task.  "),new U.b("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.b("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.x
p.i(0,new X.G(s,q,null),$.bN)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.wp,$.l)
t.i(0,$.cg,$.l)
t.i(0,$.bg,$.l)
t.i(0,$.b_,$.m)
s="The "+$.A+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.u
t.i(0,new R.bB("Command Minions to Breed Frogs",!1,[new U.b(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.J+"s. "),new U.b("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.b("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r="As soon as the "+$.A+" is defeated, the "
o=$.u
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a6("Praise Dutton",!1,[new U.b(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.b("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.b("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.H,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.bN)}}
S.nm.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Alternate Costume",H.a([$.P,$.O,$.a3,$.a0,$.ay],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Cape",H.a([$.P,$.O,$.a3],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Mage's Staff",H.a([$.X,$.O,$.ac,$.a3,$.dj],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Walking Broom",H.a([$.jy,$.X,$.O,$.aF,$.a3,$.dj],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.f4,$.l)
t.i(0,$.f6,$.m)
t.i(0,$.ch,$.l)
t.i(0,$.em,$.m)
t.i(0,$.d7,$.K)
r="The "+$.A+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
t.i(0,new R.a6("Work With Exiles",!1,[new U.b("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.b("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.A+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aV
t.i(0,new R.a6("Suffer Visions",!1,[new U.b(r+o+". Oh god, why is this happening?"),new U.b("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.b("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.z(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="Now that the "+$.A+" has been defeated, the "
o=$.u
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aV
t.i(0,new R.a6("Become the Mayor",!1,[new U.b(q+n+"burg."),new U.b("A panicking "+o+" runs up to the "+r+", "+$.J+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.b("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.z(),!1,!1,new Y.c2(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
U.nn.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Maiden's Breath",H.a([$.b4,$.O,$.aJ],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Feather Duster",H.a([$.X,$.O,$.dj,$.bA],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Valkyrie Shield",H.a([$.aJ,$.aS,$.E,$.O,$.a0,$.ff,$.wD],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Maiden's Songbook",H.a([$.L,$.O,$.aa,$.aG],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.di,$.l)
t.i(0,$.c9,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.bg,$.m)
t.i(0,$.dx,$.m)
t.i(0,$.cA,$.m)
r="The "+$.A+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.u
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bB("Serve the  Frogs",!1,[new U.b(r+o+"s.  It's a lively neighborhood event."),new U.b("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
o="The "+q+" has adopted a local "
p=$.u
t.i(0,new R.a6("Serve the PTA",!1,[new U.b(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.b("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.J+"ing about. "),new U.b("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.A+". ")],H.a([],n),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
D.nt.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("memes",H.a([$.ba,$.ub,$.wK,$.uf],[G.Y]),"No. Just no.",!1,";)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Memes"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.iK,$.l)
r=$.o
q="The "+r+" decides to become Shrek, so they travel across their land to find a Princess and fight a dragon."
p="The "+r+" finds a castle, and they hear a mighty roar. They walk into the castle, to see a giant "+$.u+"-looking dragon. They notice that it's chained up, so The "+r+" decides to free it, and it brings them to the top of the tallest tower in the castle. "
o="The dragon leads The "+r+" to the top of the tower, when they open the door, they see a bed with silk haninging over it. When The "+r+" unveils it, they see a sleeping consort, The "+r+" yeets it out the window, and rides the Dragon towards the "
n=$.A
o=o+n+". "
m="The "+r+" rides up to the "+n+"'s lair, and they challenge it to a battle. "
l="The "+r+" wins, with the added help of the Dragon, there was no chance they would lose. "
t.i(0,new R.Q("Become Shrek",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Even with the added help of the Dragon, The "+r+" wasn't enough to defeat the "+n,l)],H.a([],[U.b]),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
V.nz.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Puzzle Box",H.a([$.X,$.R,$.a3],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tesla Coil",H.a([$.a7,$.R,$.E],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Coin",H.a([$.E,$.R],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electronic Door",H.a([$.E,$.R,$.a7,$.Z],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Janus Bust",H.a([$.aS,$.jz,$.aI,$.ax,$.R,$.a0,$.a7],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cg,$.m)
q.i(0,$.ei,$.K)
q.i(0,$.cG,$.K)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.u
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.A
k=[U.b]
q.i(0,new R.Q("Change the View",!1,[new U.b(o),new U.b(m),new U.b(l),new U.W(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fo(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.u+" explains that at the end of the Labrinth is the "
l=$.A
q.i(0,new R.Q("Pick a Door, any Door",!1,[new U.b(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.b("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.b("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.W("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n=this.f
n.i(0,new X.G(s,q,null),$.av)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ha,$.K)
s.i(0,$.c8,$.m)
s.i(0,$.cG,$.K)
s.i(0,$.cg,$.K)
p=$.A
o="The "+p+" has commited a staggering amount of crimes against the local "+$.u+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.Q("Face the Music",!1,[new U.b(o+m+" knows that Justice is on their side."),new U.b("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.b("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.W("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(q,s,null),$.av)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iL,$.l)
t.i(0,$.bg,$.m)
t.i(0,$.f7,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cG,$.l)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.A
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ae+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.Q("Make the Connections",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.av)}}
U.nA.prototype={}
E.nB.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Feather Pen",H.a([$.E,$.O,$.ax,$.bA],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Half Finished Bust of Snoop Dog",H.a([$.x_,$.O,$.jz,$.ac,$.a0],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Book of Poetry",H.a([$.L,$.O,$.ax,$.aG],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.di,$.l)
t.i(0,$.c9,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.bg,$.m)
t.i(0,$.dx,$.m)
t.i(0,$.cA,$.m)
r="The "+$.A+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bB("Inspire Frog Breeding",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.A+" the "
o=$.u
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ae
t.i(0,new R.a6("Inspire the People",!1,[new U.b(q),new U.b(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.b("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
F.nC.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Piano",H.a([$.ac,$.X,$.aa,$.ax],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flute",H.a([$.E,$.aa],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Microphone",H.a([$.aU,$.a7],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Violin",H.a([$.X,$.aa],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sheet Music",H.a([$.L,$.aa],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Electric Guitar",H.a([$.aM,$.aa,$.a7,$.aU,$.aA],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.aM,$.aa,$.a7,$.aA],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guitar",H.a([$.X,$.aa],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cF,$.aw)
q.i(0,$.tX,$.l)
q.i(0,$.el,$.l)
q.i(0,$.dx,$.m)
q.i(0,$.b_,$.m)
q.i(0,$.m0,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.u+" who tells that the "+$.A+" can only be awoken by the Legendary Hero playing the "
n=$.aV
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ae
k=[U.b]
q.i(0,new R.a1("Play the Music",!1,[new U.b(o),new U.b(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.b(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aV
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ae+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.J+"ing "+$.u+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.Gb
q.i(0,new R.a1("Play the Crowd",!1,[new U.b(n),new U.b(m),new U.b(l)],H.a([],k),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.u_,$.aw)
s.i(0,$.dw,$.m)
s.i(0,$.cZ,$.m)
s.i(0,$.dx,$.l)
s.i(0,$.m0,$.aw)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aV
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.A
s.i(0,new R.a1("Sing the Song",!1,[new U.b(n+l+". "),new U.b("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.b("A "+$.ae+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.hb,$.aw)
t.i(0,$.bX,$.m)
t.i(0,$.dM,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.u
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.J
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aV+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.a1("And It Don't Stop",!1,[new U.b(n),new U.b(q),new U.b(r)],H.a([],k),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aO)}}
Y.nR.prototype={
S:function(a,b){var t=0,s=P.bk(),r,q=this,p,o
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:t=3
return P.cf(A.hx("scripts/Rendering/threed/three.min.js",!1),$async$S)
case 3:t=4
return P.cf(Q.oA(),$async$S)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.b1(p)
o.eX(p,P.xh(["",$.$get$we()],P.y,S.hB))
o.eW(p,!1)
q.b=p}J.w1(p,b)
r=J.w1(q.b,b)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$aseG:function(){return[S.fm]},
$asca:function(){return[S.fm,P.y]}}
V.o0.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Shorts",H.a([$.P,$.O,$.fd,$.a0],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sidekick Figurine",H.a([$.aM,$.O,$.aA],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Steroids",H.a([$.aD,$.O,$.a3],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.y]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m3,$.l)
t.i(0,$.cH,$.m)
t.i(0,$.hg,$.m)
t.i(0,$.m5,$.m)
t.i(0,$.di,$.m)
t.i(0,$.bg,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.ek,$.m)
t.i(0,$.u0,$.m)
t.i(0,$.iE,$.m)
t.i(0,$.m1,$.m)
r="The "+$.A+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.u
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.J
n=[U.b]
t.i(0,new R.bB("Help Breed the Frogs",!1,[new U.b(r+o+"s. "),new U.b("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.b("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.u+" named Professor "
p=$.J
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ae
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.A
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.Q("Become The Best",!1,[new U.b(o),new U.b(p),new U.b(l),new U.W(k,"The "+q+" whited out...",m)],H.a([],n),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
m="Now that the "+$.A+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.u
t.i(0,new R.a6("Explore the Tombs",!1,[new U.b(m),new U.b(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.b("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aV+" buffs. With a deafening "+$.J+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.z(),!1,!1,new Y.ir("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
G.od.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Superhero Action Figure",H.a([$.aM,$.aA,$.aT],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Action DVD",H.a([$.aM,$.aA],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ghost Busters DVD",H.a([$.aM,$.bY],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Snow Dogs DVD",H.a([$.aM,$.b8,$.bs,$.cj],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Skateboarding Video Game",H.a([$.aM,$.aA],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Movie Poster",H.a([$.L,$.aA],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Audrey II Plush",H.a([$.b4,$.aA,$.P,$.aF],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peashooter Toy",H.a([$.b4,$.aZ,$.aA,$.P],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shitty Sword",H.a([$.aT,$.E,$.aA,$.fg,$.aH,$.bR],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("GameBro Magazine",H.a([$.L,$.aA],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("GameGrl Magazine",H.a([$.L,$.aA],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cA,$.m)
q.i(0,$.cE,$.m)
q.i(0,$.bX,$.l)
q.i(0,$.cH,$.aw)
q.i(0,$.d9,$.aw)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.u
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aV+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.J+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.Gc
l=[U.b]
q.i(0,new R.a1("Become the Star",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.ej,$.m)
s.i(0,$.dw,$.m)
s.i(0,$.cE,$.m)
s.i(0,$.bX,$.m)
s.i(0,$.dL,$.l)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.u
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aV
s.i(0,new R.a1("Stop the Villain",!1,[new U.b(n),new U.b(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.b(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.m)
t.i(0,$.dK,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.dL,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aV+" Cinema. A new movie, The Lonely "
o=$.ae
q=q+o+" is coming out soon, and "
n=$.u
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.J+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.a1("Premiere the Movie",!1,[new U.b(q),new U.b(m),new U.b(r)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aO)}}
Z.oe.prototype={}
N.oh.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Feather'd Cap",H.a([$.P,$.O,$.fd],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crown",H.a([$.a0,$.uk,$.O,$.fd],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gunpowder",H.a([$.bu,$.O],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cE,$.m)
t.i(0,$.cg,$.m)
t.i(0,$.dM,$.K)
r="With the closing of the curtain, the "+$.A+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Destroy the Lack of Frogs",!1,[new U.b(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.b("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.b("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q=$.A
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.u
t.i(0,new R.a6("Fix All The Things",!1,[new U.b(r+n+"s to start rebuilding infrastructure."),new U.b("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ae+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.b("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
U.b.prototype={}
U.W.prototype={}
R.oj.prototype={
C:function(a){return H.C(new H.dS(H.kD(this),null))+": "+this.c},
gK:function(a){return this.c}}
R.a1.prototype={}
R.Q.prototype={}
R.a6.prototype={}
R.bB.prototype={}
E.ok.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Curtain",H.a([$.P,$.R,$.aT],s),null,!1,"Show Ender")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cursed Sword",H.a([$.E,$.fg,$.aY,$.R,$.aH,$.bc,$.aT,$.bt,$.aP],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Megaphone",H.a([$.E,$.aU,$.a7,$.R,$.aT],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.aS,$.E,$.aU,$.bx,$.cc,$.R,$.aT],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bacchus Wine",H.a([$.aD,$.bx,$.ax,$.R,$.a0,$.aT],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nightmare Fuel",H.a([$.X,$.R,$.bc,$.aE,$.bu,$.aT],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iF,$.l)
q.i(0,$.d6,$.l)
q.i(0,$.dw,$.l)
q.i(0,$.d7,$.m)
q.i(0,$.c1,$.m)
q.i(0,$.ch,$.m)
q.i(0,$.c8,$.K)
q.i(0,$.d9,$.m)
q.i(0,$.ej,$.l)
q.i(0,$.iJ,$.l)
q.i(0,$.f6,$.l)
q.i(0,$.m4,$.l)
q.i(0,$.hb,$.m)
q.i(0,$.en,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.Q("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hM(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.A
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dx,$.l)
s.i(0,$.c1,$.m)
s.i(0,$.c8,$.l)
s.i(0,$.cF,$.l)
s.i(0,$.cA,$.l)
s.i(0,$.cE,$.m)
s.i(0,$.iI,$.K)
s.i(0,$.d6,$.m)
s.i(0,$.cH,$.l)
s.i(0,$.bX,$.l)
s.i(0,$.d9,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aV
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iF,$.l)
t.i(0,$.d9,$.l)
t.i(0,$.c8,$.l)
t.i(0,$.cH,$.m)
t.i(0,$.cA,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.av)}}
F.om.prototype={}
Y.dO.prototype={}
Y.af.prototype={}
Y.d5.prototype={}
Y.c2.prototype={
gK:function(a){return this.c}}
Y.S.prototype={}
Y.ir.prototype={}
Y.bD.prototype={}
Y.d2.prototype={}
Y.la.prototype={}
Y.by.prototype={}
Y.jT.prototype={}
Y.iP.prototype={}
Y.jV.prototype={}
N.oq.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Domino Mask",H.a([$.P,$.O,$.fd],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Archery Set",H.a([$.ud,$.O,$.fd,$.u9],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Gristtorrent Server",H.a([$.a0,$.aM,$.a7,$.O,$.Z,$.ay],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n
t=[P.y]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c8,$.l)
t.i(0,$.ch,$.m)
t.i(0,$.dL,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt Noble "
q=$.u
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.b]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.b(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.u
q=q+r+"s who rose to power during the tyranny of "
n=$.A
t.i(0,new R.a6("Lead a Rebellion",!1,[new U.b(q+n+". This cannot stand!"),new U.b("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.b("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Q.or.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Red Rose",H.a([$.aN,$.aJ],s),null,!1,"Seductive Plant")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shipping Grid",H.a([$.aN,$.L],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Chocolate Bar",H.a([$.aN,$.aD],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Candelabra",H.a([$.aN,$.aE],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Head Cannon",H.a([$.aN,$.bu,$.E,$.aZ],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Her Pitch Passions Novel",H.a([$.aG,$.L,$.aN],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cB,$.l)
q.i(0,$.hg,$.m)
q.i(0,$.f3,$.m)
q.i(0,$.hf,$.l)
q.i(0,$.cF,$.m)
q.i(0,$.iH,$.K)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.u
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ae+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.b]
q.i(0,new R.a1("Set the Mood",!1,[new U.b(o),new U.b(m),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cF,$.m)
s.i(0,$.dK,$.l)
s.i(0,$.hf,$.l)
s.i(0,$.cB,$.m)
s.i(0,$.el,$.K)
s.i(0,$.iH,$.K)
o=$.u
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.a1("Plan the Date",!1,[new U.b(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.b("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.b(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iH,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.f3,$.m)
t.i(0,$.m5,$.l)
t.i(0,$.hf,$.l)
t.i(0,$.cF,$.m)
t.i(0,$.el,$.K)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.u
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.J+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.A+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.G8
t.i(0,new R.a1("Ship All the Ships",!1,[new U.b(q),new U.b(o),new U.b(r)],H.a([],l),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.B)
n=$.o
r="The "+n+"  and the "
o=$.eC
t.i(0,new R.a1("Flushed Shipping Dungeon",!1,[new U.b(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.eB(),!1,!1,new Y.iP(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o=$.o
n="The "+o+"  and the "
r=$.eC
t.i(0,new R.a1("Pale Shipping Dungeon",!1,[new U.b(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.eB(),!1,!1,new Y.jT(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r=$.o
o="The "+r+"  and the "
n=$.eC
t.i(0,new R.a1("Pitched Shipping Dungeon",!1,[new U.b(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.b("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.eB(),!1,!1,new Y.jV(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p.i(0,new X.G(s,t,null),$.aO)}}
V.os.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Arrow",H.a([$.aY,$.X,$.u9],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bow",H.a([$.X,$.ac,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Yondu",H.a([$.aT,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Empathy",H.a([$.R,$.ub,$.aT],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Empathy","Arrows","Emotions","Bows"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.b_,$.m)
t.i(0,$.d8,$.K)
t.i(0,$.bX,$.m)
t.i(0,$.cg,$.K)
r=$.o
q="The "+r+" is walking around their land, when suddenly an arrow starts floating, The "+r+" figures out they can control it with their mind."
p="The "+r+" is practicing in using their arrows, they see an imp walk close to them. The "+r+" tries to strife it, on their second attempt, The "+r+" is able to defeat the imp with their arrow, they have improved in their abilities."
o="The "+r+" has been practicing with their arrow abilities. They can now use many arrows in a giant wave to bring pain upon their enemies. The "+r+" is now able to take on their denizen."
n="The "+r+" walks into the "
m=$.A
n=n+m+"'s lair, arrows flying behind them."
m="The "+m+" is slain, it looks like it was accupunctured."
t.i(0,new R.Q("Be the Yondu",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"The power of the arrows was not enough to help The "+r+"...",m)],H.a([],[U.b]),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
T.hO.prototype={
E:function(){var t,s
t=Q.F(null,null,A.a_)
s=A.j("Perfectly Generic Object",H.a([],[G.Y]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.N(t,0)]))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.l)
q.i(0,$.bg,$.K)
q.i(0,$.dM,$.l)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.K)
p=$.o
o="The "+p+" learns that all of the local "
n=$.u
m=[U.b]
q.i(0,new R.a6("Revive the Consorts",!1,[new U.b(o+n+"s are dead. This is....really depressing, actually. "),new U.b("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
n=this.x
n.i(0,new X.G(s,q,null),$.bN)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.l)
s.i(0,$.ek,$.K)
s.i(0,$.em,$.m)
s.i(0,$.cZ,$.l)
s.i(0,$.ch,$.K)
p=$.o
o="The "+p+" learns that all of the local "
l=$.u
s.i(0,new R.a6("Produce the Goods",!1,[new U.b(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=$.o
l="The "+p+" learns that all of the local "
o=$.u
s.i(0,new R.a6("Do the Teamwork",!1,[new U.b(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.b("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.b("The "+p+" grabs the "+$.eC+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.J+"ing in amazement. The factory is saved! ")],H.a([],m),R.eB(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.aw)
n.i(0,new X.G(q,s,null),$.bN)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.b_,$.l)
t.i(0,$.bg,$.K)
t.i(0,$.c9,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.u
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.J
t.i(0,new R.a1("Relax the Consorts According to Prophecy",!1,[new U.b(q),new U.b(o+l+"ing about? A prophecy?  "),new U.b("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.va(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.K)
l=$.o
p="The "+l+" learns that all of the local "
r=$.u
t.i(0,new R.a6("Relax the Consorts",!1,[new U.b(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.b("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.b("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
n.i(0,new X.G(s,t,null),$.bN)},
C:function(a){return this.r},
a4:function(a,b,c,d,e){var t=this.r
this.y=t
this.z=new X.iD("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.io]),H.a([],[M.h9]))
this.E()
this.F()
t=this.Q
if($.$get$ou().Z(0,t))H.bd("Duplicate class id for "+this.C(0)+": "+t+" is already registered for "+J.cy($.$get$ou().n(0,t))+".")
$.$get$ou().i(0,t,this)},
gK:function(a){return this.r}}
E.ov.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Sage's Robe",H.a([$.P,$.O,$.b7,$.Z,$.a3,$.a0],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Peer Reviewed Journal",H.a([$.L,$.O,$.aG,$.Z],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Guru Pillow",H.a([$.P,$.O,$.e3,$.Z],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.hd,$.m)
t.i(0,$.bg,$.m)
t.i(0,$.f7,$.l)
t.i(0,$.b_,$.K)
t.i(0,$.cG,$.l)
r="The "+$.A+" has blocked access to the books for the duration. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.A+" is defeated, it is time to begin recovery efforts. The "
r=$.u
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a6("Be the Sage",!1,[new U.b(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.J+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.b("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.b("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
Y.ow.prototype={}
K.ox.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Uno Reverse Card",H.a([$.mI,$.R,$.aT],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("JR Body Pillow",H.a([$.e3,$.b7,$.R],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.y]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iF,$.l)
q.i(0,$.d6,$.l)
q.i(0,$.dw,$.l)
q.i(0,$.d7,$.m)
q.i(0,$.c1,$.m)
q.i(0,$.ch,$.m)
q.i(0,$.c8,$.K)
q.i(0,$.d9,$.m)
q.i(0,$.ej,$.l)
q.i(0,$.iJ,$.l)
q.i(0,$.f6,$.l)
q.i(0,$.m4,$.l)
q.i(0,$.hb,$.m)
q.i(0,$.en,$.l)
p=$.o
o="The "+p+" is chilling in a "
n=$.u
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.A
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.b]
q.i(0,new R.Q("Stop the War",!1,[new U.b(o),new U.b(k),new U.b(j),new U.W(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hM(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=$.u
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.A
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.Q("Stop the Civil War",!1,[new U.b(l),new U.b(m),new U.b(i),new U.W(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h=this.f
h.i(0,new X.G(s,q,null),$.av)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dx,$.l)
s.i(0,$.c1,$.m)
s.i(0,$.c8,$.l)
s.i(0,$.cF,$.l)
s.i(0,$.cA,$.l)
s.i(0,$.cE,$.m)
s.i(0,$.iI,$.K)
s.i(0,$.d6,$.m)
s.i(0,$.cH,$.l)
s.i(0,$.bX,$.l)
s.i(0,$.d9,$.K)
p=$.J
o="The "+p+"ing and capering "
n=$.u
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aV
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.A
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.Q("Do a Stupid Dance",!1,[new U.b(o),new U.b(k),new U.b(p),new U.W(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(q,s,null),$.av)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iF,$.l)
t.i(0,$.d9,$.l)
t.i(0,$.c8,$.l)
t.i(0,$.cH,$.m)
t.i(0,$.cA,$.l)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.u+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.A+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.Q("Hate This Bullshit Land",!1,[new U.b(q),new U.b(p),new U.b(o),new U.W(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
h.i(0,new X.G(s,t,null),$.av)}}
Y.oy.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Walking Stick",H.a([$.X,$.O,$.dj],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Adorable Girlscout Beret",H.a([$.P,$.O,$.wM,$.Z,$.a0],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Map",H.a([$.L,$.O,$.Z],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Compass",H.a([$.E,$.O,$.Z,$.a3],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p
t=[P.y]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.di,$.l)
t.i(0,$.c9,$.l)
t.i(0,$.bg,$.l)
t.i(0,$.bX,$.K)
t.i(0,$.b_,$.K)
r="Now that the "+$.A+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.b]
t.i(0,new R.a6("Blaze a Trail",!1,[new U.b(r+q+" eagerly begins to explore uncharted territory. "),new U.b("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.b("Deep in a forgotten forest, in a temple covered in golden "+$.u+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bB("Find the Frogs",!1,[new U.b(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.b("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.b("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.u+" "+$.J+"s in time to stop them.   ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.bN)}}
L.oz.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Scroll",H.a([$.L,$.O,$.Z],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ink Pot",H.a([$.b9,$.O,$.ay,$.Z],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blank Book",H.a([$.L,$.O,$.aG,$.Z,$.ay,$.a0],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.m0,$.l)
t.i(0,$.bg,$.l)
t.i(0,$.cG,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cg,$.m)
r="The "+$.A+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.b("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.A+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.u
t.i(0,new R.a6("Restore the Library",!1,[new U.b(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.b("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.b(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
S.oC.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cueball",H.a([$.ep,$.mP,$.O,$.ac,$.aF,$.a0],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Crystal Ball",H.a([$.ep,$.wJ,$.O,$.b3],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Binoculars",H.a([$.b9,$.O,$.E],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Blindfold",H.a([$.wF,$.O,$.b7],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.wq,$.l)
t.i(0,$.hc,$.l)
t.i(0,$.tV,$.l)
t.i(0,$.cH,$.m)
r="Now that the "+$.A+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.u
o=[U.b]
t.i(0,new R.a6("Be the King",!1,[new U.b(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.b("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.b("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
q="The "+$.A+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bB("Understand the Frogs",!1,[new U.b(q+p+" thinks hard and figures out the best way to organize the "+$.u+"s to start collecting frogs. "),new U.b("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.b("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.u
t.i(0,new R.a6("Work With Exiles",!1,[new U.b(q+r+"s to carry everything out."),new U.b("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.b("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
r="A group of underlings are still making trouble, even after the defeat of the "+$.A+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ae
t.i(0,new R.a6("Have the Keikaku",!1,[new U.b(r+q+" Treasure in the center of a still active dungeon. "),new U.b("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
T.c4.prototype={}
Y.oJ.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Meddler's Guide",H.a([$.aG,$.O,$.L,$.bx,$.a0,$.aX],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b9,$.O,$.aX],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.O
r=A.j("Cloud in a Bottle",H.a([r,r,$.br],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a3,$.O,$.b3,$.aJ,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.bg,$.m)
t.i(0,$.di,$.l)
t.i(0,$.cH,$.m)
t.i(0,$.b_,$.m)
t.i(0,$.c9,$.l)
r="The defeat of the "+$.A+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.b]
t.i(0,new R.bB("Forge the Frogs",!1,[new U.b(r+q+" has to start stoking it all over again. "),new U.b("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.b("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.b("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
q="Now that the "+$.A+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.u
t.i(0,new R.a6("Supply the Consorts",!1,[new U.b(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.b("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.b(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
N.oK.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Fiduspawn Plush",H.a([$.cj,$.P,$.b7],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Teddy Bear",H.a([$.cj,$.P,$.b7],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dice",H.a([$.ui,$.aM],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Pigeon",H.a([$.bA,$.aF,$.bl,$.be,$.bt,$.ur],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Cat Ears",H.a([$.P,$.b7,$.cj],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Religious Text",H.a([$.aG,$.L],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Psychology Book",H.a([$.aG,$.L],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Therapy Couch",H.a([$.b7,$.P],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("FLARP Manual",H.a([$.aG,$.L,$.Z],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.K)
q.i(0,$.b_,$.m)
q.i(0,$.cg,$.l)
q.i(0,$.cG,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.u
m=[U.b]
q.i(0,new R.a1("The Therapist is IN",!1,[new U.b(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.b("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aV+" or "+$.ae+".  The "+p+" is getting really good at helping them out. "),new U.b("A line of "+$.J+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d8,$.K)
s.i(0,$.b_,$.l)
s.i(0,$.cg,$.l)
s.i(0,$.tT,$.l)
s.i(0,$.cF,$.l)
s.i(0,$.u_,$.l)
s.i(0,$.cG,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.J
n=n+l+"ing "
k=$.u
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aV
s.i(0,new R.a1("Meditate On Frogism",!1,[new U.b(n),new U.b(j+i+"-ness. How could they miss this?"),new U.b(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cZ,$.K)
t.i(0,$.dK,$.l)
t.i(0,$.c9,$.l)
t.i(0,$.dL,$.l)
t.i(0,$.ha,$.l)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.u
t.i(0,new R.a1("Protect the FLARPers",!1,[new U.b(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.J+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.b("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.b("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,t,null),$.aO)}}
F.oL.prototype={}
M.bC.prototype={}
N.oN.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Frog Statue",H.a([$.aS,$.aI,$.R],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Frog Costume",H.a([$.P,$.R],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Reactor",H.a([$.c3,$.Z,$.a7,$.R],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Telescope",H.a([$.E,$.b9,$.Z,$.R],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Green Sun Poster",H.a([$.L,$.R,$.ul,$.a0],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.y]
r=H.a(["Wherever the "+t+" goes, they find a "+$.u+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.J+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.A+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.u+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.u+" tells the "
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
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cH,$.K)
t.i(0,$.tW,$.l)
s=[U.b]
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[0]),new U.b(q[0]),new U.b(n[0]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[1]),new U.b(q[1]),new U.b(n[1]+" "+m[1])],H.a([],s),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[2]),new U.b(n[2]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[0]),new U.b(n[1]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[2]),new U.b(q[1]),new U.b(n[1]+" "+m[2])],H.a([],s),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
t.i(0,new R.Q("Light the Forge",!1,[new U.b(r[0]),new U.b(q[1]),new U.b(n[2]+" "+m[0])],H.a([],s),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
t.i(0,new R.bB("Breed the Frogs, But Be Boring About It",!1,[new U.b("The "+p+" collects all sorts of frogs. Various "+$.u+"s 'help' by "+$.J+"ing up a storm. "),new U.b("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.b("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.z(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
this.f.i(0,new X.G(o,t,null),$.Hj)}}
S.oO.prototype={}
U.au.prototype={
gK:function(a){return this.d+"kind"},
$isbG:1,
$asbG:function(){return[A.a_]}}
K.cJ.prototype={
gK:function(a){return this.a}}
M.oS.prototype={
aU:function(a){return"application/octet-stream"},
S:function(a6,a7){var t=0,s=P.bk(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$S=P.bq(function(a8,a9){if(a8===1)return P.bn(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dh(null,0)
q.a=J.dW(a7,0)
for(p=0,o="";p<6;++p)o+=H.hL(q.ae(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.ae(8)
l=9+m*6
o=8*m
k=q.ae(o)
j=q.ae(o)
i=q.ae(o)
h=q.ae(o)
g=q.ae(o)
f=q.ae(o)
o=P.D
e=P.y
d=P.cI(o,e)
c=new O.d0(k,j,null,null,null,null,null,null,d,P.cI(e,o))
c.x=new Uint8Array(H.cC(k*j))
b=q.ae(8)
for(o=[o],p=0;p<b;++p){a=q.ae(8)
a0=q.ae(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.ae(8)
if(a2>=e){r=H.w(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.ph(a1,0,null))}a4=q.ae(8)
a5=$.$get$xD().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.ir(i,h,g,a5.c.$4(a7,l,g*f,c))
c.i8()
r=c
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$asdt:function(){return[O.d0]},
$asca:function(){return[O.d0,P.bj]}}
R.pm.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Meddler's Guide",H.a([$.aG,$.O,$.L,$.bx,$.a0,$.aX],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("First Aid Kit",H.a([$.b9,$.O,$.aX],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.O
r=A.j("Cloud in a Bottle",H.a([r,r,$.br],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Fairy Wings",H.a([$.a3,$.O,$.b3,$.aJ,$.L],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o
t=[P.y]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cg,$.l)
t.i(0,$.b_,$.l)
t.i(0,$.di,$.m)
t.i(0,$.f7,$.m)
t.i(0,$.tS,$.m)
t.i(0,$.e0,$.m)
t.i(0,$.iE,$.m)
t.i(0,$.tZ,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.A+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.u
o=[U.b]
t.i(0,new R.a6("Heal the Timeline",!1,[new U.b(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.b("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.b("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.J+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.vc(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
r=$.u
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a6("Be The Sylph",!1,[new U.b(p+q+" is unimpressed. "),new U.b("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.b("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
q="The "+r+"s are so stressed after all that shit with the "+$.A+". They are yelling and "+$.J+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a6("Relax the Consorts",!1,[new U.b(q+p+" decides that what they really need is to chill the fuck out. "),new U.b("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.b("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p="The "+$.A+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.u
t.i(0,new R.bB("Purify the Frogs",!1,[new U.b(p),new U.b("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.b("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
r="The defeat of the "+$.A+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.u
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a6("Purify the Water",!1,[new U.b(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.b("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.b("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aV+". Huh. Okay then.")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
L.pq.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Lightning",H.a([$.aU,$.ba,$.R],s),null,!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ice",H.a([$.bs,$.wU,$.fe],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Taserface",H.a([$.aT,$.aU],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Taser",H.a([$.aU,$.R,$.aT],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Rebellion","Fear","Fighting","Turmoil"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.dJ,$.K)
t.i(0,$.bX,$.l)
t.i(0,$.iF,$.m)
t.i(0,$.d6,$.m)
r=$.o
q="The "+r+" is walking around on their land, when a "
p=$.u
q=q+p+" walks up to them, and tells them about "
o=$.A
q=q+o+" and how it's destroying the land. The "+r+" doesn't care."
p="The "+r+" sees another "+p+". The "+p+" starts "+$.J+"ing about how urgent it is to fight "+o+". Again The "+r+" doesn't care in the slightest."
n="The "+r+" is told about the great treasure that the "+o+" holds, The "+r+" decides to travel to the "+o+"'s lair. To fight the "+o+"."
m="The "+r+" thunders into the "+o+"'s lair, and they demand a prize."
o="The "+o+" is defeated, The "+r+" takes the grist without a second glance."
t.i(0,new R.Q("Rebel Against Your Land",!1,[new U.b(q),new U.b(p),new U.b(n),new U.W(m,"The "+r+" is defeated, maybe they should've played the game the right way.",o)],H.a([],[U.b]),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
this.f.i(0,new X.G(s,t,null),$.av)}}
D.ps.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Robot",H.a([$.a7,$.E,$.aF,$.Z],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Circuit Board",H.a([$.a7,$.E],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Datastructures for Assholes",H.a([$.a7,$.L],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a7,$.L,$.aP,$.aG],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("3-D Printer",H.a([$.aM,$.a7,$.E],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Virus on a USB Stick",H.a([$.wP,$.E],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Wrench",H.a([$.uy,$.E,$.ac],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Computer",H.a([$.a7,$.E],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.iL,$.m)
q.i(0,$.f4,$.l)
q.i(0,$.f5,$.l)
q.i(0,$.ch,$.K)
p=$.o
o="The "+p+" learns from their "
n=$.u
o=o+n+"s about the great "
m=$.aV
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.A+" destroyed it. "
o="The "+p+" searches for the "
l=$.ae
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.Gg
p=[U.b]
q.i(0,new R.a1("Fix the Machine",!1,[new U.b(n),new U.b(o),new U.b(m)],H.a([],p),R.z(),!1,!1,new Y.d2("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.B)
l=$.o
m="The "+l+" is approached by a "
o=$.u
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.J
q.i(0,new R.a1("Decipher the Enigma",!1,[new U.b(o+m+"ing, how could they not? "),new U.b("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.A+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.b("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ae+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fo(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.f5,$.l)
s.i(0,$.ek,$.K)
s.i(0,$.em,$.m)
s.i(0,$.cZ,$.l)
s.i(0,$.ch,$.K)
o=$.o
n="The "+o+" learns that all of the local "
l=$.u
s.i(0,new R.a1("Produce the Goods",!1,[new U.b(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.b("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.b("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.J+"ing and chaos everywhere. "),new U.b("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
o=$.o
l="The "+o+" finds two groups of "
n=$.u
l=l+n+"s screaming and "
k=$.J
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ae
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.a1("Stop the Dispute",!1,[new U.b(l),new U.b(k),new U.b(j)],H.a([],p),R.e6(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.av)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.iL,$.K)
t.i(0,$.f4,$.l)
t.i(0,$.f5,$.l)
t.i(0,$.ch,$.K)
r=$.o
q="The "+r+" learns from a mysterious "+$.u+" in a black trenchcoat about a great "
o=$.aV
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.A
t.i(0,new R.a1("Learn the Secret",!1,[new U.b(q+n+"? "),new U.b("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.b("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aO)}}
V.pt.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Lighter",H.a([$.E,$.aE],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Siberia Poster",H.a([$.L,$.bs],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Nuclear Winter Poster",H.a([$.L,$.bs,$.c3],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Doomsday Device",H.a([$.E,$.aP,$.c3,$.ba,$.bt],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Juggalo Poster",H.a([$.L,$.wV],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Watch",H.a([$.E,$.bi,$.ba],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Magnificent Crown",H.a([$.E,$.bi,$.ba],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bitching Clothes",H.a([$.P,$.fd,$.ba],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Ceramic Pork Hollow",H.a([$.bQ,$.bi],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Shit Ton of Guns",H.a([$.E,$.us,$.aZ,$.ba],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sniper Rifle",H.a([$.E,$.uv,$.aZ,$.ba],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("AK-47",H.a([$.E,$.uo,$.aZ,$.ba],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("IED",H.a([$.mK,$.aH,$.E,$.bu,$.ba],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Idiots Guide To Being An Asshole",H.a([$.L,$.bx,$.aG],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Bike Horn",H.a([$.cc,$.E,$.aU,$.bx],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Matches",H.a([$.X,$.aE],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.cE,$.m)
q.i(0,$.dK,$.l)
q.i(0,$.e1,$.l)
q.i(0,$.f6,$.l)
q.i(0,$.m3,$.l)
q.i(0,$.dL,$.m)
p=$.o
o=[U.b]
q.i(0,new R.a1("Start the Fires",!1,[new U.b("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.b("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.b(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p=this.r
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.cE,$.m)
s.i(0,$.dK,$.l)
s.i(0,$.cB,$.l)
s.i(0,$.dL,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.u
s.i(0,new R.a1("All About the Boonies, Baby",!1,[new U.b(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.b("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ae+" underling. Tremble at the fearsome "+$.aV+" "+l+".   "),new U.b(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d7,$.l)
q.i(0,$.bg,$.K)
q.i(0,$.dM,$.l)
q.i(0,$.c1,$.m)
q.i(0,$.e0,$.K)
q.i(0,$.d6,$.K)
n=$.o
m="The "+n+" learns that all of the local "
l=$.u
q.i(0,new R.a1("Revive the Consorts",!1,[new U.b(m+l+"s are dead. This is....pretty cool, actually. "),new U.b("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.b("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.J+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c8,$.l)
t.i(0,$.d6,$.K)
t.i(0,$.ej,$.l)
t.i(0,$.iJ,$.l)
t.i(0,$.ch,$.m)
t.i(0,$.en,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.J
r=r+n+"ing "
m=$.u
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aV+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.a1("Stop a Rebellion",!1,[new U.b(r),new U.b(l),new U.b(s)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.B)
p.i(0,new X.G(q,t,null),$.aO)}}
X.G.prototype={
C:function(a){return"Theme: "+H.C(this.a)}}
U.pA.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Lockpick",H.a([$.E,$.O,$.ay,$.aY,$.a0],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Sneaking Suit",H.a([$.P,$.O,$.ay],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Dagger",H.a([$.E,$.O,$.aY,$.aH,$.uh],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c8,$.l)
t.i(0,$.dw,$.m)
t.i(0,$.bX,$.m)
t.i(0,$.cZ,$.m)
r="The "+$.A+" cannot release the frogs since the corrupt "
q=$.u
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.b]
t.i(0,new R.bB("Steal the Frogs",!1,[new U.b(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.b("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.b("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.A+"'s layer and slated to be returned to the "
r=$.u
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.J+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.go
t.i(0,new R.a6("Escape the Law",!1,[new U.b(q),new U.b(n),new U.b(p)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.A
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aV+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.J+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.go
t.i(0,new R.a6("Free The Prisoner",!1,[new U.b(q),new U.b(p),new U.b(n)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
n="Now that the "+r+" has been defeated, the "
p=$.u
n=n+p+"s have recovered their precious "
q=$.ae
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.J
l=n+l+"worth, the disaffected Heir to the "+$.aV+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.go
t.i(0,new R.a6("Shit, Let's Be a Heist Movie",!1,[new U.b(r),new U.b(l),new U.b(q),new U.b(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
N.pB.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Grandfather Clock",H.a([$.X,$.ax,$.bi,$.R],s),null,!1,"Ticking Tower of Time")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Drum",H.a([$.wZ,$.R,$.aa],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Dead Doppelganger",H.a([$.aS,$.bl,$.R,$.be,$.bc,$.aP],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Music Box",H.a([$.E,$.R,$.aa,$.ax],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Turn Tables",H.a([$.E,$.R,$.aa,$.a0,$.aA],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Metronome",H.a([$.E,$.R,$.aa],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.y]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.ws,$.aw)
q.i(0,$.ch,$.m)
q.i(0,$.cZ,$.m)
q.i(0,$.em,$.l)
p=$.A
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x2
l=[U.b]
q.i(0,new R.a6("Destroy 1000 Clocks",!1,[new U.b(o),new U.b(m),new U.b(p)],H.a([],l),R.eA(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.l)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.u+"s, they set out to fix the "
m=$.ae
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.A
q.i(0,new R.Q("Fix the Clockwork",!1,[new U.b(p),new U.b(o),new U.b(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.W("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j=this.f
j.i(0,new X.G(s,q,null),$.av)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.hb,$.l)
s.i(0,$.e1,$.K)
s.i(0,$.ch,$.l)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.u+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.A
s.i(0,new R.Q("Synchronize the Rhythm",!1,[new U.b(o),new U.b(n),new U.W(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(q,s,null),$.av)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.c9,$.l)
t.i(0,$.b_,$.m)
t.i(0,$.cg,$.l)
t.i(0,$.di,$.l)
r=$.A
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ae
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.u+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.Q("Walk Another Path",!1,[new U.b(q),new U.b(n),new U.b(m),new U.W(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hM(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
k=$.A
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ae
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.Q("Destroy Timelines",!1,[new U.b(p+r+" prepares for a bullshit item collection quest. "),new U.b("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.u+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.b("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.W("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eA(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.l)
r="With the defeat of the "+$.A+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.u
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aV
t.i(0,new R.a6("Shatter the Timeline",!1,[new U.b(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.b("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.b("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.b("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eA(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.l)
p=$.u
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.Q("Move Forwards, Never Stop",!1,[new U.b(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.b("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.J+"s mysteriously.  "),new U.b("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.W("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.A+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
j.i(0,new X.G(s,t,null),$.av)}}
Y.pG.prototype={}
G.Y.prototype={
C:function(a){var t=this.b
if(t.length!==0)return C.b.gJ(t)
return"NULL TRAIT"},
ges:function(){return this.a},
geb:function(){return this.b},
gbD:function(){return this.c}}
G.aW.prototype={}
G.at.prototype={}
G.bI.prototype={}
G.e.prototype={
gi5:function(){return this.e.length},
gbD:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bV)(t),++q)r+=t[q].c
return r},
aD:function(a,b){return C.a.bE(b.gi5()-this.e.length)},
eE:function(a){return C.b.hx(this.e,a.ghj(a))},
$isbG:1,
$asbG:function(){return[G.e]},
gK:function(a){return this.d},
geZ:function(){return this.e}}
G.mQ.prototype={
$1:function(a){return a instanceof G.e},
$S:function(){return{func:1,args:[G.Y]}}}
Q.q_.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cardboard Box",H.a([$.L,$.R,$.ay],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Hole Punch",H.a([$.E,$.R,$.ay],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Smoke Bombs",H.a([$.bu,$.R,$.ay,$.mK],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Tribal Mask",H.a([$.be,$.R,$.ay,$.bc,$.bS],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Opera Mask",H.a([$.aM,$.R,$.ay,$.ax],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Black Hole in a Bottle.",H.a([$.R,$.a0,$.ul,$.ay,$.b9],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x2=t},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.y]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.l)
q.i(0,$.m2,$.l)
q.i(0,$.he,$.l)
q.i(0,$.hc,$.l)
p=$.A
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.u
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x2
l=[U.b]
q.i(0,new R.a6("Be Forgettable",!1,[new U.b(p),new U.b(o),new U.b(n)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.A
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.Q("Go to Nowhere",!1,[new U.b(n),new U.b(o),new U.b(p),new U.W(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i=this.f
i.i(0,new X.G(s,q,null),$.av)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.d8,$.m)
s.i(0,$.m2,$.m)
s.i(0,$.he,$.m)
s.i(0,$.c8,$.l)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.A
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.u+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ae
s.i(0,new R.a6("Reveal the Tomes",!1,[new U.b(o+m+" will provide insight."),new U.b("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.b("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.b("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fo(),!1,!1,new Y.c2("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.l)
m=$.o
s.i(0,new R.Q("[REDACTED]",!1,[new U.b("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.b("The "+m+" [REDACTED]s and it actually works! Everyone "+$.J+" in surprise. This might just be crazy enough to work."),new U.b("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.W("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.A+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.u+"s.")],H.a([],l),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(q,s,null),$.av)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.d8,$.l)
t.i(0,$.m2,$.l)
t.i(0,$.he,$.l)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.A+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.Q("Walk of Faith",!1,[new U.b(q),new U.b(p),new U.b(o),new U.b(n),new U.W(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
i.i(0,new X.G(s,t,null),$.av)}}
E.q0.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Yardstick",H.a([$.dj,$.O,$.jB,$.a0],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("SBURBSim Hacking Guide",H.a([$.aG,$.O,$.hp,$.L],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Body Pillow of JR",H.a([$.P,$.O,$.e3,$.mL,$.b7],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Nanobots",H.a([$.uw,$.O,$.mH],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.cH,$.l)
t.i(0,$.d9,$.l)
t.i(0,$.dv,$.l)
t.i(0,$.di,$.l)
t.i(0,$.ei,$.l)
t.i(0,$.dJ,$.l)
t.i(0,$.he,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.u
o=[U.b]
t.i(0,new R.a1("A Complete Waste Of Time",!1,[new U.b(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.b("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.b("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.b("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.vc(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
r=$.A
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cl+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.J
t.i(0,new R.Q("Stop the Turtles from [Redacted]",!1,[new U.b(p),new U.b(n),new U.b(m),new U.W(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.xy(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.B)
q=$.o
t.i(0,new R.a1("Be Spooked By a Wolf",!1,[new U.b("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.b("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.b("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.z(),!1,!1,new Y.dO("Rewards/no_reward.png",null),1,null,null),$.B)
q="A wizened "+$.u+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.A
t.i(0,new R.Q("Be The Illegitimate Player",!1,[new U.b(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.b("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.b("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
t.i(0,new R.Q("Wear the Merch, Be the Rider",!1,[new U.b("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+$.A+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.z(),!1,!1,new Y.S("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.aw)
m="A wizened "+$.u+" tells the "
r=$.o
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Horses",!1,[new U.b(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.b("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.K)
r="A "+$.u+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a6("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.b(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.b("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.b("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.xz(),!1,!1,new Y.c2("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.go
t.i(0,new R.a6("Run The Simulations",!1,[new U.b(r),new U.b(q),new U.b(m)],H.a([],o),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.K)
n=$.A
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bB("Waste the Frogs",!1,[new U.b(m+q+" go?"),new U.b("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.u+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.b("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.b("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.b("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
this.x.i(0,new X.G(s,t,null),$.av)}}
M.q4.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Cauldron",H.a([$.wY,$.O,$.a3],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Flying Broom",H.a([$.jy,$.dj,$.O,$.X,$.a3],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Warped Mirror",H.a([$.up,$.O,$.a3,$.ay,$.a0],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.go=t},
F:function(){var t,s,r,q,p,o,n,m
t=[P.y]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,[N.a5,P.U])
t.i(0,$.c1,$.m)
t.i(0,$.hg,$.m)
t.i(0,$.d7,$.m)
t.i(0,$.cZ,$.m)
t.i(0,$.cA,$.m)
t.i(0,$.tW,$.m)
r=$.A
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.u
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.b]
t.i(0,new R.bB("Brew the Frogs",!1,[new U.b(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.b("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.b("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bT(),!1,!1,new Y.by("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.aw)
o="Even with the defeat of the "+$.A+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.u
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aV
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.go
t.i(0,new R.a6("Twist All The Things",!1,[new U.b(o),new U.b(m),new U.b(r),new U.b(p)],H.a([],n),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.B)
q="A Mysterious "+$.u+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aV
q=q+r+" was discovered amongst the "+$.A+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.go
t.i(0,new R.a6("Brew The Potion",!1,[new U.b(q),new U.b(m),new U.b(p)],H.a([],n),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.B)
r=$.u
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aV
t.i(0,new R.a6("Train the Apprentice",!1,[new U.b(p+q+"mancer and agrees to train them. "),new U.b("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ae+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.b("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.J+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.z(),!1,!1,new Y.af("Rewards/no_reward.png",null),1,null,null),$.B)
this.x.i(0,new X.G(s,t,null),$.bN)}}
U.q5.prototype={
S:function(a5,a6){var t=0,s=P.bk(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$S=P.bq(function(a7,a8){if(a7===1)return P.bn(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.ec(a6,$.$get$xZ())
if(0>=p.length){r=H.w(p,0)
t=1
break}if(J.zo(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.w(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.C(p[0])+"'")}o=P.y
n=H.a([],[o])
m=P.cI(o,B.kf)
q.a=null
l=P.cI(o,o)
for(k=P.U,j=B.dB,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cM()
""+i
H.C(g)
f.toString
f=J.ec(g,$.$get$xX())
if(0>=f.length){r=H.w(f,0)
t=1
break $async$outer}g=f[0]
f=J.b6(g)
if(f.gV(g)===!0){$.$get$cM().toString
continue}if(f.ac(g,$.$get$xY())){$.$get$cM().toString
continue}if(C.c.ac(g,"@")){e=C.c.ad(g,1)
$.$get$cM().toString
n.push(e)}else if(C.c.ac(g,"?")){f=C.c.ad(g,1)
f=$.$get$hX().aR(0,f)
f=H.dy(f,B.kF(),H.aL(f,"n",0),null)
d=P.dl(f,!0,H.aL(f,"n",0))
if(d.length<2)$.$get$cM().bd(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cM()
H.C(c)
H.C(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$y_()
a=f.cp(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.w(f,1)
t=1
break $async$outer}a0=J.c0(f[1])
a1=C.c.ad(g,a0)
if(a1.length===0)continue
f=J.aC(a0)
if(f.T(a0,0)){a1=C.c.eF(a1)
$.$get$cM().toString
f=P.cI(o,o)
a2=new B.kf(P.cI(o,k),f,a1,!1,null,null)
a2.dk(null,null,j)
q.a=a2
f.ax(0,l)
m.i(0,a1,q.a)}else if(f.T(a0,$.y0))if(C.c.ac(a1,"?")){a1=C.c.ad(a1,1)
f=$.$get$hX().aR(0,a1)
f=H.dy(f,B.kF(),H.aL(f,"n",0),null)
d=P.dl(f,!0,H.aL(f,"n",0))
f=$.$get$cM()
f.toString
if(d.length<2)f.bd(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.kJ(d[0],$.$get$ft(),"")
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}b=J.kJ(d[1],$.$get$ft(),"")
f=$.$get$cM()
a3=q.a
a3.e
f.toString
a3.d.i(0,c,b)}}else if(C.c.ac(a1,"@")){e=C.c.ad(a1,1)
$.$get$cM().toString
f=$.$get$hX().aR(0,a1)
f=H.dy(f,B.kF(),H.aL(f,"n",0),null)
d=P.dl(f,!0,H.aL(f,"n",0))
a4=d.length>1?H.xv(d[1],new U.q6(q,d)):1
q.a.c.i(0,C.c.d0(e,$.$get$ft(),""),a4)}else{$.$get$cM().toString
f=$.$get$hX().aR(0,g)
f=H.dy(f,B.kF(),H.aL(f,"n",0),null)
d=P.dl(f,!0,H.aL(f,"n",0))
a4=d.length>1?H.xv(d[1],new U.q7(q,d)):1
if(0>=d.length){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bl(J.kJ(d[0],$.$get$ft(),""))
h=new B.dB(null)
a3=P.cI(o,o)
h.a=a3
a3.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.w2(a4)),[H.aL(f,"cU",0)]))}else if(f.T(a0,$.y0*2)){$.$get$cM().toString
f=$.$get$hX().aR(0,g)
f=H.dy(f,B.kF(),H.aL(f,"n",0),null)
d=P.dl(f,!0,H.aL(f,"n",0))
f=d.length
if(f!==2)$.$get$cM().bd(C.h,"Invalid variant for "+H.C(h.d5(0))+" in "+q.a.e)
else{if(0>=f){r=H.w(d,0)
t=1
break $async$outer}f=C.c.bl(J.kJ(d[0],$.$get$ft(),""))
if(1>=d.length){r=H.w(d,1)
t=1
break $async$outer}a3=C.c.d0(U.Hm(d[1]),$.$get$ft(),"")
h.a.i(0,f,a3)}}}}}r=new B.i1(n,m)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$aseG:function(){return[B.i1]},
$asca:function(){return[B.i1,P.y]}}
U.q6.prototype={
$1:function(a){var t,s,r
t=$.$get$cM()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid include weight '"+H.C(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.bd(C.m,r+H.C(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
U.q7.prototype={
$1:function(a){var t,s,r
t=$.$get$cM()
s=this.b
if(1>=s.length)return H.w(s,1)
r="Invalid weight '"+H.C(s[1])+"' for word '"
if(0>=s.length)return H.w(s,0)
t.bd(C.m,r+H.C(s[0])+"' in list '"+this.a.a.e+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.y]}}}
F.q9.prototype={
E:function(){var t,s,r,q
t=Q.F(null,null,A.a_)
s=[G.Y]
r=A.j("Make a World Book",H.a([$.L,$.ax,$.aG],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.N(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Quill Pen",H.a([$.b7,$.P,$.mN],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Book On Writing",H.a([$.aG,$.L,$.Z],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("FLARP Manual",H.a([$.aG,$.L,$.Z],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Script",H.a([$.aG,$.L],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Fancy Pen",H.a([$.E,$.Z,$.mN,$.ax],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.j("Spiral Bound Notebook",H.a([$.aG,$.L,$.E],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.j("Half Written Novel",H.a([$.aG,$.L],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
F:function(){var t,s,r,q,p,o,n,m,l
t=[P.y]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.a5,P.U]
q=new H.t(0,null,null,null,null,null,0,r)
q.i(0,$.d8,$.l)
q.i(0,$.cG,$.l)
q.i(0,$.bg,$.m)
q.i(0,$.b_,$.m)
q.i(0,$.hd,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.u+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.b]
q.i(0,new R.a1("Stop the Vandals",!1,[new U.b(o),new U.b(n),new U.b(p)],H.a([],l),R.z(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.B)
m=this.r
m.i(0,new X.G(s,q,null),$.aO)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.t(0,null,null,null,null,null,0,r)
s.i(0,$.dL,$.m)
s.i(0,$.cE,$.m)
s.i(0,$.cB,$.m)
s.i(0,$.bg,$.m)
p=$.u
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.a1("Read the Fan Fiction",!1,[new U.b(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.J+"ing so much? "),new U.b("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.b(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(q,s,null),$.aO)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.t(0,null,null,null,null,null,0,r)
t.i(0,$.cE,$.m)
t.i(0,$.dK,$.l)
t.i(0,$.cB,$.l)
t.i(0,$.dL,$.m)
t.i(0,$.dv,$.l)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.u
t.i(0,new R.a1("Be the DM",!1,[new U.b(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.b("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.b(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.b("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.z(),!1,!1,new Y.d5("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.B)
m.i(0,new X.G(s,t,null),$.aO)}}
B.qe.prototype={
aU:function(a){return"application/x-tar"},
S:function(a,b){var t=0,s=P.bk(),r,q,p
var $async$S=P.bq(function(c,d){if(c===1)return P.bn(d,s)
while(true)switch(t){case 0:q=$.$get$y1()
p=J.vU(b)
q.toString
r=q.hq(T.u8(p,0,null,0),!1)
t=1
break
case 1:return P.bo(r,s)}})
return P.bp($async$S,s)},
$asdt:function(){return[T.fJ]},
$asca:function(){return[T.fJ,P.bj]}}
A.fR.prototype={}
B.du.prototype={
cG:function(a){if(a)this.b=(this.b|C.a.aq(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.O+=H.hL(this.b)
this.b=0}},
ai:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.aq(1,t)
if(typeof a!=="number")return a.aM()
this.cG((a&s)>>>0>0)}},
hb:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.av(1,t-s)
if(typeof a!=="number")return a.aM()
this.cG((a&r)>>>0>0)}},
bW:function(a){var t,s
a=J.ea(a,1)
t=C.d.di(Math.log(H.kA(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cG(!1)
this.hb(a,t+1)},
b6:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.O
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a9(r)
q+=r
p=r}else p=0
r=H.cC(q)
o=new Uint8Array(r)
if(t){n=H.cQ(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.w(o,m)
o[m]=l}}t=s.O
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a9(k,m)
if(s<0||s>=r)return H.w(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.w(o,t)
o[t]=s}return o.buffer}}
B.dh.prototype={
cw:function(a){var t,s,r,q
t=C.f.ak(a/8)
s=C.a.bK(a,8)
r=this.a.getUint8(t)
q=C.a.av(1,s)
if(typeof r!=="number")return r.aM()
return(r&q)>>>0>0},
ae:function(a){var t,s,r
if(a>32)throw H.k(P.dX(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cw(this.b);++this.b
if(r)t=(t|C.a.aq(1,s))>>>0}return t},
i7:function(a){var t,s,r,q
if(a>32)throw H.k(P.dX(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cw(this.b);++this.b
if(q)s=(s|C.a.av(1,t-r))>>>0}return s},
c4:function(){var t,s,r
for(t=0;!0;){s=this.cw(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.i7(t+1)-1}}
A.dY.prototype={
C:function(a){return"rgb("+H.C(this.b)+", "+H.C(this.c)+", "+H.C(this.d)+", "+H.C(this.a)+")"},
il:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.av()
s=this.c
if(typeof s!=="number")return s.av()
r=this.d
if(typeof r!=="number")return r.av()
q=this.a
if(typeof q!=="number")return H.a9(q)
return(t<<24|s<<16|r<<8|q)>>>0},
T:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dY){t=this.b
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
gaa:function(a){return this.il(!0)},
X:function(a,b){var t,s,r,q,p,o,n,m
t=J.aC(b)
if(!!t.$isdY){t=this.b
s=b.b
if(typeof t!=="number")return t.X()
if(typeof s!=="number")return H.a9(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.X()
if(typeof q!=="number")return H.a9(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.X()
if(typeof o!=="number")return H.a9(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.X()
if(typeof m!=="number")return H.a9(m)
return A.fV(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.b9()
s=this.c
if(typeof s!=="number")return s.b9()
r=this.d
if(typeof r!=="number")return r.b9()
q=this.a
if(typeof q!=="number")return q.b9()
return A.wa(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.X()
s=this.c
if(typeof s!=="number")return s.X()
r=this.d
if(typeof r!=="number")return r.X()
return A.fV(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.C(t.gaf(b))+" "+H.C(b)+"] to a Colour. Only Colour, double and int are valid.")},
as:function(a,b){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.b9()
s=this.c
if(typeof s!=="number")return s.b9()
r=this.d
if(typeof r!=="number")return r.b9()
q=this.a
if(typeof q!=="number")return q.b9()
return A.wa(t/255*b,s/255*b,r/255*b,q/255)},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.C(b))},
i:function(a,b,c){var t,s
t=J.dD(b)
if(t.a7(b,0)||t.aA(b,3))throw H.k("Colour index out of range: "+H.C(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.T(b,0)){this.b=C.a.ag(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.ag(c,0,255)
this.e=!0
this.y=!0}else if(t.T(b,2)){this.d=C.a.ag(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.ag(c,0,255)
else if(t.T(b,0)){this.b=C.a.ag(J.kI(J.vT(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.T(b,1)){this.c=C.a.ag(J.kI(J.vT(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kB(c)
if(t.T(b,2)){this.d=C.a.ag(J.kI(s.as(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.ag(J.kI(s.as(c,255)),0,255)}},
f6:function(a,b,c,d){this.b=C.d.ag(C.d.ag(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.ag(C.d.ag(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.ag(C.d.ag(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.ag(J.yU(d,0,255),0,255)}}
A.rZ.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.y]}}}
N.cz.prototype={
gK:function(a){return this.a}}
N.ti.prototype={
$0:function(){return $.$get$t7()},
$S:function(){return{func:1}}}
N.tj.prototype={
$1:function(a){var t,s,r,q,p
for(t=$.$get$t7(),s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r){q=t[r]
p=J.b1(q)
if(a.Y(0,q))J.kK(p.gaC(q),"inline-block")
else J.kK(p.gaC(q),"none")}},
$S:function(){return{func:1,args:[[P.e7,W.c7]]}}}
N.tk.prototype={
$1:function(a){var t=J.z1(a)
return t.a.a.getAttribute("data-"+t.bq("name"))},
$S:function(){return{func:1,args:[W.c7]}}}
A.ng.prototype={
$1:function(a){return this.a.ex(a)},
$S:function(){return{func:1,args:[,]}}}
A.ne.prototype={
$1:function(a){this.a.S(0,a).b5(this.b.gi4())},
$S:function(){return{func:1,args:[,]}}}
A.nf.prototype={
$1:function(a){this.a.hi(0)},
$S:function(){return{func:1,args:[P.q]}}}
A.nh.prototype={
$1:function(a){return this.a.aE(0,this.b)},
$S:function(){return{func:1,args:[W.T]}}}
F.hy.prototype={
C:function(a){return this.b}}
F.hz.prototype={
bd:function(a,b){F.G4(a).$1("("+this.c+")["+H.C(C.b.gbc(a.b.split(".")))+"]: "+H.C(b))},
cN:function(a,b){this.bd(C.h,b)},
gK:function(a){return this.c}}
F.uL.prototype={}
O.tn.prototype={
$1:function(a){return H.C(a.be(1))+" = "+H.C(a.be(2))+C.c.as("../",this.a)},
$S:function(){return{func:1,args:[P.dz]}}}
O.to.prototype={
$0:function(){var t=document
J.w_(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.w,null)
t=H.kE(t.querySelector("#voidButton"),"$isfT")
t.toString
W.fx(t,"click",new O.tm(),!1,W.J2)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.IP("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.tm.prototype={
$1:function(a){return O.IV()},
$S:function(){return{func:1,args:[W.T]}}}
R.hh.prototype={}
R.v1.prototype={}
R.v0.prototype={}
A.o1.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.Z(0,b)?t.n(0,b):$.$get$v_()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.Z(0,b)?t.n(0,b):$.$get$v_()}throw H.k(P.dX(b,"'name' should be a String name or int id only",null))},
gW:function(a){var t=this.a
t=t.gc8(t)
return new H.jI(null,J.cX(t.a),t.b,[H.N(t,0),H.N(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.Z(0,b))this.ao(0,b)
s=this.fR()
if(typeof s!=="number")return s.at()
if(s>=256)throw H.k(P.dX(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ao:function(a,b){var t,s,r
t=this.a
if(!t.Z(0,b))return
s=this.c
r=s.n(0,b)
t.ao(0,b)
this.b.ao(0,r)
s.ao(0,b)
this.d.ao(0,r)},
fR:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.Z(0,s))return s;++s}}}
A.jR.prototype={
$asn:function(){return[A.dY]},
$isn:1}
Q.jU.prototype={}
A.jY.prototype={
bB:function(a){if(a===0)return 0
return this.fS(a)},
hV:function(){return this.bB(4294967295)},
fS:function(a){var t,s
t=this.a
if(a>4294967295){s=t.cS()
this.b=C.d.bE(s*4294967295)
return C.d.ak(s*a)}else{s=t.bB(a)
this.b=s
return s}},
d9:function(a){var t=a==null
this.a=t?C.Q:P.HB(a)
if(!t)this.b=J.ea(a,1)},
i2:function(a,b){var t=a.length
if(t===0)return
t=this.bB(t)
if(t<0||t>=a.length)return H.w(a,t)
return a[t]},
i1:function(a){return this.i2(a,!0)}}
Y.dN.prototype={
cE:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bm(0,$.aB,null,t)
this.c.push(new P.dU(s,t))
return s},
ex:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bV)(t),++r)t[r].aE(0,this.b)
C.b.sm(t,0)}}
V.lG.prototype={
$4:function(a,b,c,d){return V.Aq(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bj,P.bj,O.d0]}}}
V.lF.prototype={
$4:function(a,b,c,d){return V.Ap(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bj,P.D,P.D,O.d0]}}}
V.lE.prototype={
$4:function(a,b,c,d){return V.Am(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.D,P.bj,P.bj,O.d0]}}}
V.lD.prototype={
$4:function(a,b,c,d){return V.Al(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bj,P.D,P.D,O.d0]}}}
O.d0.prototype={
i8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
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
ir:function(a,b,c,d){var t,s,r,q,p
t=J.b1(d)
s=0
while(!0){r=t.gep(d)
if(typeof r!=="number")return H.a9(r)
if(!(s<r))break
q=(C.a.di(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.w(r,q)
r[q]=p;++s}}}
D.oV.prototype={
$1:function(a){return a.gi3()},
$S:function(){return{func:1,args:[D.cK]}}}
D.cK.prototype={
C:function(a){return this.a},
gK:function(a){return this.a},
gi3:function(){return this.d}}
D.kg.prototype={}
D.oo.prototype={}
B.dB.prototype={
eL:function(a,b){if(this.a.Z(0,"MAIN"))return this.a.n(0,"MAIN")
return},
d5:function(a){return this.eL(a,null)},
C:function(a){return"[Word: "+H.C(this.d5(0))+"]"}}
B.kf.prototype={
C:function(a){return"WordList '"+this.e+"': "+this.f2(0)},
$isq:1,
$asq:function(){return[B.dB]},
$asdT:function(){return[B.dB]},
$asi0:function(){return[B.dB]},
$ascU:function(){return[B.dB]},
$asn:function(){return[B.dB]},
$asv:function(){return[B.dB]},
gK:function(a){return this.e}}
B.i1.prototype={
C:function(a){return"[WordListFile: "+this.b.C(0)+" ]"}}
G.oB.prototype={
$1:function(a){this.b.$1(G.Hb(this.a.$0(),J.za(this.d),this.c))},
$S:function(){return{func:1,v:true,args:[W.T]}}}
G.hQ.prototype={
C:function(a){var t=this.b?"[N]":""
return t+this.a}}
S.fm.prototype={}
S.vt.prototype={}
S.vu.prototype={}
S.vv.prototype={}
S.tO.prototype={}
S.tR.prototype={}
S.tE.prototype={}
S.vd.prototype={}
S.vx.prototype={}
S.vy.prototype={}
S.l8.prototype={}
S.v3.prototype={}
S.uZ.prototype={}
S.n8.prototype={}
S.tI.prototype={}
S.ty.prototype={}
S.lp.prototype={}
S.uM.prototype={}
S.lq.prototype={}
S.o3.prototype={}
S.vk.prototype={}
S.vh.prototype={}
S.vl.prototype={}
S.tx.prototype={}
S.mj.prototype={}
S.l6.prototype={}
S.tC.prototype={}
S.tB.prototype={}
S.v4.prototype={}
S.vm.prototype={}
S.v5.prototype={}
S.tQ.prototype={}
S.tP.prototype={}
S.vj.prototype={}
S.vi.prototype={}
S.pz.prototype={}
S.vo.prototype={}
S.tF.prototype={}
S.tG.prototype={}
S.vw.prototype={}
S.hB.prototype={}
S.uR.prototype={}
S.uS.prototype={}
S.uT.prototype={}
S.uU.prototype={}
S.ve.prototype={}
S.vf.prototype={}
S.vg.prototype={}
S.uQ.prototype={}
S.uW.prototype={}
S.uX.prototype={}
S.u4.prototype={}
S.u5.prototype={}
S.u6.prototype={}
S.uY.prototype={}
S.uV.prototype={}
S.tz.prototype={}
S.vq.prototype={}
S.vr.prototype={}
S.vp.prototype={}
Z.uG.prototype={}
Z.uC.prototype={}
Z.uD.prototype={}
Q.cU.prototype={
k:function(a,b){return b},
C:function(a){return J.cy(this.gc2())},
az:function(a,b){return Q.vA(this,b,H.aL(this,"cU",0),null)},
a6:function(a,b){return Q.vz(this,!1,!0,null,H.aL(this,"cU",0))},
ap:function(a){return this.a6(a,!0)},
$isn:1,
$asn:null}
Q.dT.prototype={
gc2:function(){return this.b},
bV:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.w2(c)),[H.aL(this,"cU",0)]))},
h:function(a,b){return this.bV(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.w(t,b)
return J.vY(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.w(t,b)
t[b]=new Q.h(c,s,[H.aL(this,"cU",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
C:function(a){return P.jC(this.b,"[","]")},
az:function(a,b){return Q.vA(this,b,H.aL(this,"dT",0),null)},
a6:function(a,b){return Q.vz(this,!1,!0,null,H.aL(this,"dT",0))},
ap:function(a){return this.a6(a,!0)},
dk:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.i0.prototype={$ascU:null,$asn:null,$asq:null,$asv:null,$isq:1,$isv:1,$isn:1}
Q.h.prototype={
C:function(a){return"("+H.C(this.a)+" @ "+H.C(this.b)+")"},
ga0:function(a){return this.a},
gd3:function(a){return this.b}}
Q.eN.prototype={
gc2:function(){return this.b},
gW:function(a){var t=new Q.q2(null,[H.aL(this,"eN",0)])
t.a=J.cX(this.b)
return t},
gm:function(a){return J.c0(this.b)},
C:function(a){return J.cy(this.b)},
az:function(a,b){return Q.vA(this,b,H.aL(this,"eN",0),null)},
a6:function(a,b){return Q.vz(this,!1,!0,null,H.aL(this,"eN",0))},
ap:function(a){return this.a6(a,!0)}}
Q.i_.prototype={$ascU:null,$asn:null,$isn:1}
Q.q2.prototype={
gP:function(){return J.vY(this.a.gP())},
I:function(){return this.a.I()}}
Q.kc.prototype={
$aseN:function(a,b){return[b]},
$asi_:function(a,b){return[b]},
$ascU:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.q3.prototype={
$1:function(a){var t=J.b1(a)
return new Q.h(this.c.$1(t.ga0(a)),t.gd3(a),[this.b])},
$S:function(){return H.eR(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"kc")}}
J.i.prototype.f_=J.i.prototype.C
J.hs.prototype.f1=J.hs.prototype.C
P.dp.prototype.f3=P.dp.prototype.bN
P.dp.prototype.f4=P.dp.prototype.bL
P.b5.prototype.dh=P.b5.prototype.a8
P.n.prototype.f0=P.n.prototype.ca
W.c7.prototype.cf=W.c7.prototype.ay
W.id.prototype.f5=W.id.prototype.b_
Q.dT.prototype.f2=Q.dT.prototype.C;(function installTearOffs(){installTearOff(H.fz.prototype,"ghQ",0,0,0,null,["$0"],["c0"],1)
installTearOff(H.dC.prototype,"geO",0,0,0,null,["$1"],["aB"],12)
installTearOff(H.eO.prototype,"ght",0,0,0,null,["$1"],["b0"],12)
installTearOff(H,"yj",1,0,0,null,["$1"],["I2"],6)
installTearOff(P,"I5",1,0,0,null,["$1"],["Hq"],8)
installTearOff(P,"I6",1,0,0,null,["$1"],["Hr"],8)
installTearOff(P,"I7",1,0,0,null,["$1"],["Hs"],8)
installTearOff(P,"yv",1,0,0,null,["$0"],["I1"],1)
installTearOff(P.kj.prototype,"ge9",0,0,0,null,["$2","$1"],["cJ","bs"],14)
installTearOff(P.bm.prototype,"gbg",0,0,0,null,["$2","$1"],["am","fq"],14)
var t
installTearOff(t=P.dp.prototype,"gdP",0,0,0,null,["$0"],["bQ"],1)
installTearOff(t,"gdQ",0,0,0,null,["$0"],["bR"],1)
installTearOff(t=P.i7.prototype,"gdP",0,0,0,null,["$0"],["bQ"],1)
installTearOff(t,"gdQ",0,0,0,null,["$0"],["bR"],1)
installTearOff(t,"gfF",0,0,0,null,["$1"],["fG"],function(){return H.eR(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"i7")})
installTearOff(t,"gfJ",0,0,0,null,["$2"],["fK"],34)
installTearOff(t,"gfH",0,0,0,null,["$0"],["fI"],1)
installTearOff(P.kq.prototype,"ghj",0,1,0,null,["$1"],["Y"],16)
installTearOff(P,"If",1,0,0,null,["$2"],["A3"],30)
installTearOff(P,"Ig",1,0,0,null,["$1"],["fG"],4)
installTearOff(W,"Iu",1,0,0,null,["$4"],["Hx"],13)
installTearOff(W,"Iv",1,0,0,null,["$4"],["Hy"],13)
installTearOff(t=W.iq.prototype,"gar",0,1,0,null,["$1"],["cN"],4)
installTearOff(t,"ghL",0,0,0,null,["$1"],["em"],4)
installTearOff(t,"gio",0,0,0,null,["$1"],["ip"],4)
installTearOff(W.f1.prototype,"ga0",0,1,0,null,["$1"],["M"],5)
installTearOff(W.it.prototype,"ga0",0,1,0,null,["$1"],["M"],32)
installTearOff(W.iy.prototype,"ga0",0,1,0,null,["$1"],["M"],5)
installTearOff(W.iz.prototype,"ga0",0,1,0,null,["$1"],["M"],6)
installTearOff(W.iA.prototype,"ga0",0,1,0,null,["$1"],["M"],5)
installTearOff(W.f9.prototype,"ga0",0,1,0,null,["$1"],["M"],35)
installTearOff(W.iQ.prototype,"ga0",0,1,0,null,["$1"],["M"],10)
installTearOff(W.fb.prototype,"ga0",0,1,0,null,["$1"],["M"],11)
installTearOff(W.iS.prototype,"ga0",0,1,0,null,["$1"],["M"],11)
installTearOff(W.jJ.prototype,"ga0",0,1,0,null,["$1"],["M"],5)
installTearOff(W.jK.prototype,"ga0",0,1,0,null,["$1"],["M"],9)
installTearOff(W.jN.prototype,"gcX",0,1,0,null,["$0"],["cY"],7)
installTearOff(W.ck.prototype,"ga0",0,1,0,null,["$1"],["M"],9)
installTearOff(W.jW.prototype,"ga0",0,1,0,null,["$1"],["M"],17)
installTearOff(W.k1.prototype,"ga0",0,1,0,null,["$1"],["M"],10)
installTearOff(W.k3.prototype,"ga0",0,1,0,null,["$1"],["M"],18)
installTearOff(W.k4.prototype,"ga0",0,1,0,null,["$1"],["M"],19)
installTearOff(W.cm.prototype,"ga0",0,1,0,null,["$1"],["M"],20)
installTearOff(W.k8.prototype,"ga0",0,1,0,null,["$1"],["M"],36)
installTearOff(W.k9.prototype,"ga0",0,1,0,null,["$1"],["M"],21)
installTearOff(t=W.ka.prototype,"gc3",0,1,0,null,["$0"],["i_"],7)
installTearOff(t,"gcX",0,1,0,null,["$0"],["cY"],7)
installTearOff(W.kb.prototype,"ga0",0,1,0,null,["$1"],["M"],22)
installTearOff(W.i3.prototype,"ga0",0,1,0,null,["$1"],["M"],23)
installTearOff(W.kk.prototype,"ga0",0,1,0,null,["$1"],["M"],24)
installTearOff(W.kp.prototype,"ga0",0,1,0,null,["$1"],["M"],25)
installTearOff(W.ic.prototype,"ga0",0,1,0,null,["$1"],["M"],31)
installTearOff(W.ks.prototype,"ga0",0,1,0,null,["$1"],["M"],27)
installTearOff(W.ku.prototype,"ga0",0,1,0,null,["$1"],["M"],28)
installTearOff(P.k5.prototype,"ga0",0,1,0,null,["$1"],["M"],29)
installTearOff(R,"eB",1,0,0,null,["$1"],["GF"],0)
installTearOff(R,"xy",1,0,0,null,["$1"],["Gt"],0)
installTearOff(R,"vc",1,0,0,null,["$1"],["GE"],0)
installTearOff(R,"bT",1,0,0,null,["$1"],["GD"],0)
installTearOff(R,"vb",1,0,0,null,["$1"],["GC"],0)
installTearOff(R,"xA",1,0,0,null,["$1"],["GA"],0)
installTearOff(R,"hM",1,0,0,null,["$1"],["Gz"],0)
installTearOff(R,"eA",1,0,0,null,["$1"],["Gw"],0)
installTearOff(R,"e6",1,0,0,null,["$1"],["Gy"],0)
installTearOff(R,"fo",1,0,0,null,["$1"],["GB"],0)
installTearOff(R,"va",1,0,0,null,["$1"],["Gx"],0)
installTearOff(R,"z",1,0,0,null,["$1"],["Gu"],0)
installTearOff(R,"xz",1,0,0,null,["$1"],["Gv"],0)
installTearOff(N,"yG",1,0,0,null,["$0"],["IE"],1)
installTearOff(N,"Iw",1,0,0,null,["$0"],["Ii"],1)
installTearOff(N,"Ix",1,0,0,null,["$0"],["t2"],15)
installTearOff(N,"Iy",1,0,0,null,["$0"],["t3"],15)
installTearOff(F.hz.prototype,"gar",0,1,0,null,["$1"],["cN"],4)
installTearOff(O,"IG",1,0,0,null,["$1"],["II"],33)
installTearOff(Y.dN.prototype,"gi4",0,0,0,null,["$1"],["ex"],function(){return H.eR(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dN")})
installTearOff(V,"IN",1,0,0,null,["$4"],["Ao"],3)
installTearOff(V,"IM",1,0,0,null,["$4"],["An"],2)
installTearOff(B,"kF",1,0,0,null,["$1"],["HX"],26)
installTearOff(G,"IT",1,0,0,null,["$1"],["H8"],6)
installTearOff(T,"Ib",1,0,0,null,["$4"],["Ae"],3)
installTearOff(T,"Ia",1,0,0,null,["$4"],["Ad"],2)
installTearOff(T,"I9",1,0,0,null,["$4"],["Ac"],3)
installTearOff(T,"I8",1,0,0,null,["$4"],["Ab"],2)
installTearOff(F,"Io",1,0,0,null,["$4"],["Ak"],3)
installTearOff(F,"In",1,0,0,null,["$4"],["Aj"],2)
installTearOff(F,"Im",1,0,0,null,["$4"],["Ai"],3)
installTearOff(F,"Il",1,0,0,null,["$4"],["Ah"],2)
installTearOff(F,"Ik",1,0,0,null,["$4"],["Ag"],3)
installTearOff(F,"Ij",1,0,0,null,["$4"],["Af"],2)})();(function inheritance(){inherit(P.ad,null)
var t=P.ad
inherit(H.uI,t)
inherit(J.i,t)
inherit(J.im,t)
inherit(P.fn,t)
inherit(P.n,t)
inherit(H.eu,t)
inherit(P.jD,t)
inherit(H.iN,t)
inherit(H.pM,t)
inherit(H.f_,t)
inherit(H.r5,t)
inherit(H.fz,t)
inherit(H.qC,t)
inherit(H.eP,t)
inherit(H.r4,t)
inherit(H.qn,t)
inherit(H.fp,t)
inherit(H.pD,t)
inherit(H.dG,t)
inherit(H.dC,t)
inherit(H.eO,t)
inherit(H.le,t)
inherit(H.on,t)
inherit(H.pJ,t)
inherit(P.eh,t)
inherit(H.h8,t)
inherit(H.kt,t)
inherit(H.dS,t)
inherit(H.t,t)
inherit(H.n9,t)
inherit(H.nb,t)
inherit(H.hr,t)
inherit(H.ib,t)
inherit(H.i2,t)
inherit(H.hV,t)
inherit(H.rr,t)
inherit(P.co,t)
inherit(P.f0,t)
inherit(P.kj,t)
inherit(P.ko,t)
inherit(P.bm,t)
inherit(P.ki,t)
inherit(P.dn,t)
inherit(P.oX,t)
inherit(P.dp,t)
inherit(P.km,t)
inherit(P.qx,t)
inherit(P.r8,t)
inherit(P.rp,t)
inherit(P.eU,t)
inherit(P.rI,t)
inherit(P.qW,t)
inherit(P.qY,t)
inherit(P.oF,t)
inherit(P.r2,t)
inherit(P.dq,t)
inherit(P.fh,t)
inherit(P.b5,t)
inherit(P.rz,t)
inherit(P.np,t)
inherit(P.r3,t)
inherit(P.fU,t)
inherit(P.fW,t)
inherit(P.rB,t)
inherit(P.cV,t)
inherit(P.bG,t)
inherit(P.dZ,t)
inherit(P.ds,t)
inherit(P.dI,t)
inherit(P.nY,t)
inherit(P.k6,t)
inherit(P.qH,t)
inherit(P.bL,t)
inherit(P.lJ,t)
inherit(P.q,t)
inherit(P.bf,t)
inherit(P.cR,t)
inherit(P.dz,t)
inherit(P.dP,t)
inherit(P.y,t)
inherit(P.ce,t)
inherit(P.eK,t)
inherit(P.kw,t)
inherit(P.pN,t)
inherit(P.rn,t)
inherit(W.iq,t)
inherit(W.jQ,t)
inherit(W.is,t)
inherit(W.qm,t)
inherit(W.kl,t)
inherit(P.lh,t)
inherit(W.i9,t)
inherit(W.bw,t)
inherit(W.jO,t)
inherit(W.id,t)
inherit(W.rv,t)
inherit(W.iO,t)
inherit(W.e4,t)
inherit(W.ry,t)
inherit(W.rj,t)
inherit(W.kx,t)
inherit(P.rs,t)
inherit(P.qf,t)
inherit(P.r1,t)
inherit(P.ra,t)
inherit(P.rb,t)
inherit(P.bj,t)
inherit(P.de,t)
inherit(T.fK,t)
inherit(T.dg,t)
inherit(T.hl,t)
inherit(T.o_,t)
inherit(T.qb,t)
inherit(T.qc,t)
inherit(T.qd,t)
inherit(T.qa,t)
inherit(T.mu,t)
inherit(T.iT,t)
inherit(B.hm,t)
inherit(N.a5,t)
inherit(L.fL,t)
inherit(A.jR,t)
inherit(O.ca,t)
inherit(T.hO,t)
inherit(M.fS,t)
inherit(X.iD,t)
inherit(X.io,t)
inherit(M.h9,t)
inherit(Z.iC,t)
inherit(E.nV,t)
inherit(E.M,t)
inherit(A.a_,t)
inherit(U.b,t)
inherit(Y.dO,t)
inherit(K.cJ,t)
inherit(X.G,t)
inherit(G.Y,t)
inherit(A.fR,t)
inherit(B.du,t)
inherit(B.dh,t)
inherit(A.dY,t)
inherit(N.cz,t)
inherit(F.hy,t)
inherit(F.hz,t)
inherit(Q.jU,t)
inherit(A.jY,t)
inherit(Y.dN,t)
inherit(O.d0,t)
inherit(D.cK,t)
inherit(B.dB,t)
inherit(Q.cU,t)
inherit(B.i1,t)
inherit(G.hQ,t)
inherit(Q.h,t)
t=J.i
inherit(J.mU,t)
inherit(J.mV,t)
inherit(J.hs,t)
inherit(J.eq,t)
inherit(J.fi,t)
inherit(J.er,t)
inherit(H.fj,t)
inherit(H.ex,t)
inherit(W.aR,t)
inherit(W.cN,t)
inherit(W.eY,t)
inherit(W.fX,t)
inherit(W.bK,t)
inherit(W.iU,t)
inherit(W.ls,t)
inherit(W.f2,t)
inherit(W.it,t)
inherit(W.iw,t)
inherit(W.lv,t)
inherit(W.ix,t)
inherit(W.iV,t)
inherit(W.iz,t)
inherit(W.iA,t)
inherit(W.h1,t)
inherit(W.T,t)
inherit(W.iW,t)
inherit(W.m9,t)
inherit(W.mc,t)
inherit(W.cp,t)
inherit(W.mp,t)
inherit(W.iX,t)
inherit(W.hk,t)
inherit(W.e8,t)
inherit(W.nj,t)
inherit(W.jJ,t)
inherit(W.cr,t)
inherit(W.j6,t)
inherit(W.nM,t)
inherit(W.nN,t)
inherit(W.jN,t)
inherit(W.j7,t)
inherit(W.o4,t)
inherit(W.e5,t)
inherit(W.e9,t)
inherit(W.ck,t)
inherit(W.j8,t)
inherit(W.k0,t)
inherit(W.oD,t)
inherit(W.ct,t)
inherit(W.j9,t)
inherit(W.fr,t)
inherit(W.cm,t)
inherit(W.oR,t)
inherit(W.oW,t)
inherit(W.cn,t)
inherit(W.ja,t)
inherit(W.pC,t)
inherit(W.cv,t)
inherit(W.jb,t)
inherit(W.fu,t)
inherit(W.k9,t)
inherit(W.ka,t)
inherit(W.pT,t)
inherit(W.fv,t)
inherit(W.kb,t)
inherit(W.qq,t)
inherit(W.jc,t)
inherit(W.jd,t)
inherit(W.iY,t)
inherit(W.iZ,t)
inherit(W.j_,t)
inherit(W.j0,t)
inherit(W.rG,t)
inherit(W.rH,t)
inherit(P.mB,t)
inherit(P.nU,t)
inherit(P.da,t)
inherit(P.j1,t)
inherit(P.db,t)
inherit(P.j2,t)
inherit(P.oc,t)
inherit(P.j3,t)
inherit(P.dd,t)
inherit(P.j4,t)
inherit(P.pZ,t)
inherit(P.fN,t)
inherit(P.kN,t)
inherit(P.op,t)
inherit(P.rF,t)
inherit(P.j5,t)
t=J.hs
inherit(J.oa,t)
inherit(J.eJ,t)
inherit(J.es,t)
inherit(F.uL,t)
inherit(R.hh,t)
inherit(R.v1,t)
inherit(R.v0,t)
inherit(S.fm,t)
inherit(S.vt,t)
inherit(S.vu,t)
inherit(S.vv,t)
inherit(S.tO,t)
inherit(S.tR,t)
inherit(S.tE,t)
inherit(S.vx,t)
inherit(S.vy,t)
inherit(S.lp,t)
inherit(S.vk,t)
inherit(S.vl,t)
inherit(S.tx,t)
inherit(S.mj,t)
inherit(S.l6,t)
inherit(S.tC,t)
inherit(S.tB,t)
inherit(S.tQ,t)
inherit(S.pz,t)
inherit(S.tG,t)
inherit(S.hB,t)
inherit(S.uS,t)
inherit(S.uU,t)
inherit(S.vf,t)
inherit(S.vg,t)
inherit(S.uW,t)
inherit(S.uX,t)
inherit(S.u5,t)
inherit(S.u6,t)
inherit(S.uY,t)
inherit(S.uV,t)
inherit(S.tz,t)
inherit(S.vq,t)
inherit(S.vr,t)
inherit(S.vp,t)
inherit(Z.uG,t)
inherit(Z.uC,t)
inherit(Z.uD,t)
inherit(J.uH,J.eq)
t=J.fi
inherit(J.jF,t)
inherit(J.jE,t)
inherit(P.hw,P.fn)
t=P.hw
inherit(H.hY,t)
inherit(W.kn,t)
inherit(W.d3,t)
inherit(H.lb,H.hY)
t=P.n
inherit(H.v,t)
inherit(H.hA,t)
inherit(H.eL,t)
inherit(P.hq,t)
inherit(H.rq,t)
t=H.v
inherit(H.et,t)
inherit(H.na,t)
inherit(P.qX,t)
inherit(P.e7,t)
t=H.et
inherit(H.pk,t)
inherit(H.ew,t)
inherit(P.nc,t)
inherit(H.h_,H.hA)
t=P.jD
inherit(H.jI,t)
inherit(H.kd,t)
inherit(Q.q2,t)
t=H.f_
inherit(H.tq,t)
inherit(H.tr,t)
inherit(H.r0,t)
inherit(H.qD,t)
inherit(H.mF,t)
inherit(H.mG,t)
inherit(H.r7,t)
inherit(H.pE,t)
inherit(H.pF,t)
inherit(H.ts,t)
inherit(H.tc,t)
inherit(H.td,t)
inherit(H.te,t)
inherit(H.tf,t)
inherit(H.tg,t)
inherit(H.pr,t)
inherit(H.mY,t)
inherit(H.mX,t)
inherit(H.t8,t)
inherit(H.t9,t)
inherit(H.ta,t)
inherit(P.qj,t)
inherit(P.qi,t)
inherit(P.qk,t)
inherit(P.ql,t)
inherit(P.rJ,t)
inherit(P.rK,t)
inherit(P.rU,t)
inherit(P.rY,t)
inherit(P.mh,t)
inherit(P.mg,t)
inherit(P.qI,t)
inherit(P.qQ,t)
inherit(P.qM,t)
inherit(P.qN,t)
inherit(P.qO,t)
inherit(P.qK,t)
inherit(P.qP,t)
inherit(P.qJ,t)
inherit(P.qT,t)
inherit(P.qU,t)
inherit(P.qS,t)
inherit(P.qR,t)
inherit(P.p_,t)
inherit(P.oY,t)
inherit(P.oZ,t)
inherit(P.p0,t)
inherit(P.p5,t)
inherit(P.p3,t)
inherit(P.p4,t)
inherit(P.p6,t)
inherit(P.p9,t)
inherit(P.pa,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.pb,t)
inherit(P.pc,t)
inherit(P.p1,t)
inherit(P.p2,t)
inherit(P.qp,t)
inherit(P.qo,t)
inherit(P.r9,t)
inherit(P.rM,t)
inherit(P.rL,t)
inherit(P.rN,t)
inherit(P.rT,t)
inherit(P.rd,t)
inherit(P.re,t)
inherit(P.rf,t)
inherit(P.qZ,t)
inherit(P.nq,t)
inherit(P.rD,t)
inherit(P.rC,t)
inherit(P.lz,t)
inherit(P.lA,t)
inherit(P.pS,t)
inherit(P.pO,t)
inherit(P.pQ,t)
inherit(P.pR,t)
inherit(P.rX,t)
inherit(P.rQ,t)
inherit(P.rP,t)
inherit(P.rR,t)
inherit(P.rS,t)
inherit(W.qs,t)
inherit(W.rW,t)
inherit(W.ms,t)
inherit(W.mt,t)
inherit(W.qt,t)
inherit(W.qu,t)
inherit(W.qG,t)
inherit(W.nP,t)
inherit(W.nO,t)
inherit(W.rl,t)
inherit(W.rm,t)
inherit(W.rx,t)
inherit(W.rE,t)
inherit(P.ru,t)
inherit(P.qg,t)
inherit(P.t_,t)
inherit(P.t0,t)
inherit(P.li,t)
inherit(P.rO,t)
inherit(P.kT,t)
inherit(P.kU,t)
inherit(O.l1,t)
inherit(A.mT,t)
inherit(A.mS,t)
inherit(G.mQ,t)
inherit(U.q6,t)
inherit(U.q7,t)
inherit(A.rZ,t)
inherit(N.ti,t)
inherit(N.tj,t)
inherit(N.tk,t)
inherit(A.ng,t)
inherit(A.ne,t)
inherit(A.nf,t)
inherit(A.nh,t)
inherit(O.tn,t)
inherit(O.to,t)
inherit(O.tm,t)
inherit(V.lG,t)
inherit(V.lF,t)
inherit(V.lE,t)
inherit(V.lD,t)
inherit(D.oV,t)
inherit(G.oB,t)
inherit(Q.q3,t)
t=H.qn
inherit(H.fA,t)
inherit(H.ig,t)
inherit(H.lf,H.le)
t=P.eh
inherit(H.jP,t)
inherit(H.mZ,t)
inherit(H.pL,t)
inherit(H.l9,t)
inherit(H.ot,t)
inherit(P.fl,t)
inherit(P.cY,t)
inherit(P.V,t)
inherit(P.eI,t)
inherit(P.b2,t)
inherit(P.bJ,t)
inherit(P.lr,t)
t=H.pr
inherit(H.oT,t)
inherit(H.fP,t)
t=P.hq
inherit(H.qh,t)
inherit(T.fJ,t)
t=H.ex
inherit(H.nE,t)
inherit(H.jL,t)
t=H.jL
inherit(H.hG,t)
inherit(H.hH,t)
inherit(H.hI,H.hG)
inherit(H.hE,H.hI)
inherit(H.hJ,H.hH)
inherit(H.hF,H.hJ)
t=H.hE
inherit(H.nF,t)
inherit(H.nG,t)
t=H.hF
inherit(H.nH,t)
inherit(H.nI,t)
inherit(H.nJ,t)
inherit(H.nK,t)
inherit(H.nL,t)
inherit(H.jM,t)
inherit(H.fk,t)
t=P.kj
inherit(P.dU,t)
inherit(P.kv,t)
t=P.km
inherit(P.qw,t)
inherit(P.qy,t)
inherit(P.ro,P.r8)
t=P.dn
inherit(P.i6,t)
inherit(W.qE,t)
inherit(P.i7,P.dp)
inherit(P.r6,P.i6)
inherit(P.rc,P.rI)
inherit(P.kr,H.t)
inherit(P.oE,P.oF)
inherit(P.r_,P.oE)
inherit(P.kq,P.r_)
inherit(P.hZ,P.np)
t=P.fU
inherit(P.kY,t)
inherit(P.lC,t)
t=P.fW
inherit(P.kZ,t)
inherit(P.pW,t)
inherit(P.pV,P.lC)
t=P.ds
inherit(P.U,t)
inherit(P.D,t)
t=P.cY
inherit(P.eD,t)
inherit(P.mC,t)
inherit(P.qv,P.kw)
t=W.aR
inherit(W.as,t)
inherit(W.h2,t)
inherit(W.ld,t)
inherit(W.m8,t)
inherit(W.ma,t)
inherit(W.md,t)
inherit(W.hj,t)
inherit(W.hD,t)
inherit(W.of,t)
inherit(W.k_,t)
inherit(W.oG,t)
inherit(W.eM,t)
inherit(W.cs,t)
inherit(W.h3,t)
inherit(W.cT,t)
inherit(W.cL,t)
inherit(W.h4,t)
inherit(W.pX,t)
inherit(W.q1,t)
inherit(W.ke,t)
inherit(W.q8,t)
inherit(W.rk,t)
inherit(P.lt,t)
inherit(P.hN,t)
inherit(P.pH,t)
inherit(P.bF,t)
inherit(P.fO,t)
t=W.as
inherit(W.c7,t)
inherit(W.ef,t)
inherit(W.eg,t)
inherit(W.iv,t)
inherit(W.fw,t)
inherit(W.qz,t)
t=W.c7
inherit(W.b0,t)
inherit(P.c5,t)
t=W.b0
inherit(W.ed,t)
inherit(W.kO,t)
inherit(W.hC,t)
inherit(W.l_,t)
inherit(W.eZ,t)
inherit(W.fT,t)
inherit(W.lB,t)
inherit(W.m7,t)
inherit(W.iQ,t)
inherit(W.mx,t)
inherit(W.eo,t)
inherit(W.mD,t)
inherit(W.n1,t)
inherit(W.n3,t)
inherit(W.hu,t)
inherit(W.no,t)
inherit(W.nu,t)
inherit(W.nv,t)
inherit(W.nw,t)
inherit(W.nx,t)
inherit(W.nS,t)
inherit(W.nT,t)
inherit(W.nX,t)
inherit(W.nZ,t)
inherit(W.o2,t)
inherit(W.oi,t)
inherit(W.fq,t)
inherit(W.k1,t)
inherit(W.oI,t)
inherit(W.oM,t)
inherit(W.hR,t)
inherit(W.pi,t)
inherit(W.k7,t)
inherit(W.po,t)
inherit(W.pp,t)
inherit(W.hW,t)
inherit(W.pu,t)
inherit(W.qV,t)
inherit(W.eW,W.hC)
inherit(W.h5,W.h2)
inherit(W.kW,W.h5)
t=W.bK
inherit(W.lj,t)
inherit(W.lk,t)
inherit(W.fY,t)
inherit(W.fZ,t)
inherit(W.ll,t)
inherit(W.lm,t)
inherit(W.ln,t)
inherit(W.f1,W.iU)
inherit(W.qr,W.jQ)
inherit(W.je,W.iV)
inherit(W.iy,W.je)
t=W.T
inherit(W.lH,t)
inherit(W.oP,t)
inherit(W.oQ,t)
inherit(W.ci,W.eY)
inherit(W.jf,W.iW)
inherit(W.f9,W.jf)
inherit(W.jg,W.iX)
inherit(W.fb,W.jg)
inherit(W.iS,W.fb)
inherit(W.e2,W.hj)
inherit(W.ht,W.e8)
inherit(W.ny,W.hD)
inherit(W.jq,W.j6)
inherit(W.jK,W.jq)
inherit(W.jr,W.j7)
inherit(W.hK,W.jr)
inherit(W.o9,W.e9)
inherit(W.js,W.j8)
inherit(W.jW,W.js)
inherit(W.oH,W.eM)
inherit(W.h6,W.h3)
inherit(W.k3,W.h6)
inherit(W.jt,W.j9)
inherit(W.k4,W.jt)
inherit(W.ju,W.ja)
inherit(W.px,W.ju)
inherit(W.h7,W.h4)
inherit(W.py,W.h7)
inherit(W.jv,W.jb)
inherit(W.k8,W.jv)
inherit(W.jw,W.jc)
inherit(W.i3,W.jw)
inherit(W.jx,W.jd)
inherit(W.kk,W.jx)
inherit(W.qA,W.ix)
inherit(W.jh,W.iY)
inherit(W.kp,W.jh)
inherit(W.ji,W.iZ)
inherit(W.ic,W.ji)
inherit(W.jj,W.j_)
inherit(W.ks,W.jj)
inherit(W.jk,W.j0)
inherit(W.ku,W.jk)
inherit(W.i4,W.qm)
t=P.lh
inherit(W.qB,t)
inherit(P.kS,t)
inherit(W.i5,W.qE)
inherit(W.qF,P.oX)
inherit(W.rw,W.id)
inherit(P.rt,P.rs)
inherit(P.kh,P.qf)
inherit(P.bU,P.rb)
t=P.c5
inherit(P.cq,t)
inherit(P.ee,t)
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
inherit(P.lV,t)
inherit(P.lW,t)
inherit(P.lX,t)
inherit(P.lY,t)
inherit(P.lZ,t)
inherit(P.mb,t)
inherit(P.nr,t)
inherit(P.ns,t)
inherit(P.o7,t)
inherit(P.hP,t)
inherit(P.pj,t)
inherit(P.pn,t)
inherit(P.pY,t)
inherit(P.i8,t)
inherit(P.rg,t)
inherit(P.rh,t)
inherit(P.ri,t)
t=P.cq
inherit(P.kL,t)
inherit(P.my,t)
inherit(P.pl,t)
inherit(P.eH,t)
inherit(P.pU,t)
inherit(P.jl,P.j1)
inherit(P.n5,P.jl)
inherit(P.jm,P.j2)
inherit(P.nQ,P.jm)
inherit(P.jn,P.j3)
inherit(P.pg,P.jn)
inherit(P.pw,P.eH)
inherit(P.jo,P.j4)
inherit(P.pI,P.jo)
t=P.bF
inherit(P.eX,t)
inherit(P.l2,t)
inherit(P.lg,t)
t=P.eX
inherit(P.eV,t)
inherit(P.jS,t)
inherit(P.jp,P.j5)
inherit(P.k5,P.jp)
t=B.hm
inherit(S.kM,t)
inherit(M.kR,t)
inherit(A.lc,t)
inherit(M.lo,t)
inherit(V.lw,t)
inherit(U.m_,t)
inherit(N.n0,t)
inherit(F.nC,t)
inherit(G.od,t)
inherit(Q.or,t)
inherit(N.oK,t)
inherit(D.ps,t)
inherit(V.pt,t)
inherit(F.q9,t)
t=N.a5
inherit(T.lu,t)
inherit(R.oj,t)
t=T.lu
inherit(K.bW,t)
inherit(S.bH,t)
inherit(T.c4,t)
inherit(M.bC,t)
inherit(A.o1,A.jR)
inherit(L.a8,A.o1)
t=O.ca
inherit(O.dt,t)
inherit(O.iB,t)
inherit(O.eG,t)
t=O.dt
inherit(U.kV,t)
inherit(Y.ol,t)
inherit(V.me,t)
inherit(Q.mA,t)
inherit(Q.o8,t)
inherit(M.oS,t)
inherit(B.qe,t)
t=U.kV
inherit(U.nl,t)
inherit(U.nW,t)
inherit(U.pd,O.iB)
t=U.pd
inherit(U.pe,t)
inherit(U.pf,t)
t=T.hO
inherit(O.kX,t)
inherit(Y.mk,t)
inherit(Y.ml,t)
inherit(B.mn,t)
inherit(X.mv,t)
inherit(Q.mw,t)
inherit(S.n2,t)
inherit(Z.nk,t)
inherit(S.nm,t)
inherit(U.nn,t)
inherit(E.nB,t)
inherit(V.o0,t)
inherit(N.oh,t)
inherit(N.oq,t)
inherit(E.ov,t)
inherit(Y.ow,t)
inherit(Y.oy,t)
inherit(L.oz,t)
inherit(S.oC,t)
inherit(Y.oJ,t)
inherit(R.pm,t)
inherit(U.pA,t)
inherit(E.q0,t)
inherit(M.q4,t)
t=O.eG
inherit(Y.pv,t)
inherit(Y.l7,t)
inherit(Y.nR,t)
inherit(U.q5,t)
t=L.fL
inherit(L.l0,t)
inherit(T.l3,t)
inherit(T.l5,t)
inherit(U.lx,t)
inherit(Z.ly,t)
inherit(N.mi,t)
inherit(T.mm,t)
inherit(V.mo,t)
inherit(X.mq,t)
inherit(Z.n_,t)
inherit(Q.n4,t)
inherit(K.n6,t)
inherit(G.n7,t)
inherit(D.nt,t)
inherit(V.nz,t)
inherit(U.nA,t)
inherit(Z.oe,t)
inherit(E.ok,t)
inherit(F.om,t)
inherit(V.os,t)
inherit(K.ox,t)
inherit(F.oL,t)
inherit(N.oN,t)
inherit(S.oO,t)
inherit(L.pq,t)
inherit(N.pB,t)
inherit(Y.pG,t)
inherit(Q.q_,t)
t=S.bH
inherit(S.ip,t)
inherit(S.mr,t)
inherit(E.iR,E.nV)
t=E.M
inherit(E.fM,t)
inherit(E.kQ,t)
inherit(Q.ob,Q.mA)
inherit(U.W,U.b)
t=R.oj
inherit(R.a1,t)
inherit(R.Q,t)
inherit(R.a6,t)
inherit(R.bB,R.a6)
t=Y.dO
inherit(Y.af,t)
inherit(Y.c2,t)
inherit(Y.S,t)
inherit(Y.ir,t)
inherit(Y.bD,t)
inherit(Y.d2,t)
inherit(Y.la,t)
inherit(Y.jT,t)
inherit(Y.iP,t)
inherit(Y.jV,t)
t=Y.c2
inherit(Y.d5,t)
inherit(Y.by,t)
inherit(U.au,A.a_)
t=G.Y
inherit(G.aW,t)
inherit(G.bI,t)
inherit(G.e,t)
inherit(G.at,G.bI)
t=D.cK
inherit(D.kg,t)
inherit(D.oo,t)
t=Q.cU
inherit(Q.i0,t)
inherit(Q.i_,t)
inherit(Q.dT,Q.i0)
inherit(B.kf,Q.dT)
t=S.fm
inherit(S.vd,t)
inherit(S.l8,t)
inherit(S.n8,t)
inherit(S.uQ,t)
inherit(S.u4,t)
t=S.l8
inherit(S.v3,t)
inherit(S.uZ,t)
t=S.n8
inherit(S.tI,t)
inherit(S.ty,t)
t=S.lp
inherit(S.uM,t)
inherit(S.lq,t)
inherit(S.o3,S.lq)
inherit(S.vh,S.o3)
t=S.l6
inherit(S.v4,t)
inherit(S.vi,t)
t=S.mj
inherit(S.vm,t)
inherit(S.v5,t)
inherit(S.tP,t)
inherit(S.vj,t)
t=S.pz
inherit(S.vo,t)
inherit(S.tF,t)
inherit(S.vw,t)
t=S.hB
inherit(S.uR,t)
inherit(S.uT,t)
inherit(S.ve,t)
inherit(Q.eN,Q.i_)
inherit(Q.kc,Q.eN)
mixin(H.hY,H.pM)
mixin(H.hG,P.b5)
mixin(H.hI,H.iN)
mixin(H.hH,P.b5)
mixin(H.hJ,H.iN)
mixin(P.fn,P.b5)
mixin(P.hZ,P.rz)
mixin(W.h2,P.b5)
mixin(W.h5,W.bw)
mixin(W.iU,W.is)
mixin(W.jQ,W.is)
mixin(W.iV,P.b5)
mixin(W.je,W.bw)
mixin(W.iW,P.b5)
mixin(W.jf,W.bw)
mixin(W.iX,P.b5)
mixin(W.jg,W.bw)
mixin(W.j6,P.b5)
mixin(W.jq,W.bw)
mixin(W.j7,P.b5)
mixin(W.jr,W.bw)
mixin(W.j8,P.b5)
mixin(W.js,W.bw)
mixin(W.h3,P.b5)
mixin(W.h6,W.bw)
mixin(W.j9,P.b5)
mixin(W.jt,W.bw)
mixin(W.ja,P.b5)
mixin(W.ju,W.bw)
mixin(W.h4,P.b5)
mixin(W.h7,W.bw)
mixin(W.jb,P.b5)
mixin(W.jv,W.bw)
mixin(W.jc,P.b5)
mixin(W.jw,W.bw)
mixin(W.jd,P.b5)
mixin(W.jx,W.bw)
mixin(W.iY,P.b5)
mixin(W.jh,W.bw)
mixin(W.iZ,P.b5)
mixin(W.ji,W.bw)
mixin(W.j_,P.b5)
mixin(W.jj,W.bw)
mixin(W.j0,P.b5)
mixin(W.jk,W.bw)
mixin(P.j1,P.b5)
mixin(P.jl,W.bw)
mixin(P.j2,P.b5)
mixin(P.jm,W.bw)
mixin(P.j3,P.b5)
mixin(P.jn,W.bw)
mixin(P.j4,P.b5)
mixin(P.jo,W.bw)
mixin(P.j5,P.b5)
mixin(P.jp,W.bw)
mixin(A.jR,P.fh)
mixin(Q.i0,P.b5)
mixin(Q.i_,P.fh)})();(function constants(){C.L=W.ed.prototype
C.v=W.eZ.prototype
C.R=W.e2.prototype
C.S=J.i.prototype
C.b=J.eq.prototype
C.f=J.jE.prototype
C.a=J.jF.prototype
C.d=J.fi.prototype
C.c=J.er.prototype
C.Z=J.es.prototype
C.r=H.fk.prototype
C.a7=W.hK.prototype
C.J=J.oa.prototype
C.K=W.k7.prototype
C.u=J.eJ.prototype
C.N=new P.kZ(!1)
C.M=new P.kY(C.N)
C.i=new W.iq()
C.O=new P.nY()
C.P=new P.qx()
C.Q=new P.r1()
C.e=new P.rc()
C.w=new W.ry()
C.o=new P.dI(0)
C.T=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.x=function(hooks) { return hooks; }
C.U=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.V=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.W=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.y=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.X=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.Y=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.z=H.a(makeConstList([127,2047,65535,1114111]),[P.D])
C.A=makeConstList([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8])
C.j=makeConstList([0,0,32776,33792,1,10240,0,0])
C.a_=H.a(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.y])
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
C.p=H.a(makeConstList(["bind","if","ref","repeat","syntax"]),[P.y])
C.q=H.a(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.y])
C.h=new F.hy(0,"LogLevel.ERROR")
C.m=new F.hy(1,"LogLevel.WARN")
C.a5=new F.hy(3,"LogLevel.VERBOSE")
C.a3=H.a(makeConstList([]),[P.y])
C.a6=new H.lf(0,{},C.a3,[P.y,P.y])
C.a8=H.c_("bj")
C.a9=H.c_("IW")
C.t=H.c_("IX")
C.aa=H.c_("IY")
C.ab=H.c_("IZ")
C.ac=H.c_("J_")
C.ad=H.c_("J0")
C.ae=H.c_("J1")
C.af=H.c_("mW")
C.ag=H.c_("cR")
C.ah=H.c_("y")
C.ai=H.c_("J5")
C.aj=H.c_("J6")
C.ak=H.c_("J7")
C.al=H.c_("de")
C.am=H.c_("cV")
C.an=H.c_("U")
C.ao=H.c_("D")
C.ap=H.c_("ds")
C.n=new P.pV(!1)})();(function staticFields(){$.xt="$cachedFunction"
$.xu="$cachedInvocation"
$.dH=0
$.fQ=null
$.w6=null
$.vN=null
$.ys=null
$.yL=null
$.t1=null
$.tb=null
$.vO=null
$.fC=null
$.ih=null
$.ii=null
$.vG=!1
$.aB=C.e
$.wo=0
$.e_=null
$.tJ=null
$.wm=null
$.wl=null
$.wi=null
$.wh=null
$.wg=null
$.wj=null
$.wf=null
$.zP=null
$.zS=null
$.zu=null
$.zv=null
$.zt=null
$.zy=null
$.zG=null
$.zE=null
$.zU=null
$.zK=null
$.zA=null
$.zD=null
$.zw=null
$.zC=null
$.zN=null
$.zB=null
$.zR=null
$.zM=null
$.zz=null
$.zs=null
$.zH=null
$.zQ=null
$.zJ=null
$.zO=null
$.zT=null
$.zL=null
$.zx=null
$.zF=null
$.zI=null
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
$.aw=1300
$.l=3
$.m=2
$.K=1
$.B=0.1
$.Ay=1
$.Ax=-1
$.tZ=null
$.e0=null
$.wp=null
$.ek=null
$.f7=null
$.iG=null
$.tS=null
$.m1=null
$.u0=null
$.iH=null
$.iE=null
$.wr=null
$.iM=null
$.ha=null
$.dM=null
$.wq=null
$.m0=null
$.m6=null
$.f5=null
$.Av=null
$.As=null
$.Au=null
$.Aw=null
$.hg=null
$.f3=null
$.cB=null
$.d7=null
$.em=null
$.m5=null
$.c9=null
$.c8=null
$.tU=null
$.he=null
$.ej=null
$.At=null
$.hd=null
$.cH=null
$.e1=null
$.iL=null
$.d6=null
$.f6=null
$.c1=null
$.m3=null
$.tV=null
$.b_=null
$.cG=null
$.cg=null
$.ch=null
$.m2=null
$.bX=null
$.dx=null
$.dw=null
$.dv=null
$.dK=null
$.dL=null
$.dJ=null
$.d9=null
$.hf=null
$.iK=null
$.iF=null
$.cZ=null
$.cA=null
$.bg=null
$.f4=null
$.el=null
$.m4=null
$.hc=null
$.hb=null
$.tX=null
$.cF=null
$.u_=null
$.tT=null
$.wt=null
$.ei=null
$.cE=null
$.d8=null
$.di=null
$.f8=null
$.tW=null
$.tY=null
$.ws=null
$.iI=null
$.iJ=null
$.en=null
$.wu=!1
$.u2=null
$.Az=null
$.ww=null
$.wy=null
$.AI=null
$.wx=null
$.AG=null
$.AH=null
$.u1=null
$.AD=null
$.AB=null
$.AC=null
$.AE=null
$.AF=null
$.AT=null
$.AM=null
$.AN=null
$.AO=null
$.AP=null
$.AQ=null
$.AR=null
$.AS=null
$.AV=null
$.AW=null
$.AX=null
$.AY=null
$.AZ=null
$.B_=null
$.AU=null
$.Ga="JACK"
$.Ge="PM"
$.Gb="JS"
$.G9="HP"
$.Gj="YD"
$.Gg="SI"
$.Gh="SU"
$.Gc="ME"
$.Gf="RB"
$.G7="GN"
$.xn="MP"
$.G5="AR"
$.Gd="PE"
$.G6="DP"
$.Gi="WV"
$.G8="HB"
$.o="PLAYER1TAG"
$.eC="PLAYER2TAG"
$.A="DENIZENTAG"
$.u="CONSORTTAG"
$.J="CONSORTSOUNDTAG"
$.aV="MCGUFFINTAG"
$.ae="TAGPHYSICALMCGUFFIN"
$.cl="TAGWEAPON"
$.GQ=null
$.H2=null
$.GK=null
$.GN=null
$.GT=null
$.GY=null
$.GW=null
$.H5=null
$.H4=null
$.GX=null
$.H7=null
$.GS=null
$.H6=null
$.H0=null
$.GZ=null
$.H1=null
$.GM=null
$.GL=null
$.GV=null
$.GU=null
$.GR=null
$.H3=null
$.GO=null
$.GP=null
$.H_=null
$.yx=!1
$.Hc=!1
$.xC=null
$.Hj=13
$.av=3
$.bN=2
$.aO=1
$.mR=0
$.I=1
$.a4=3
$.H=4
$.uz=6
$.uA=7
$.ab=8
$.x=9
$.r=10
$.fe=null
$.fg=null
$.um=null
$.uv=null
$.us=null
$.wE=null
$.uh=null
$.ur=null
$.ho=null
$.wN=null
$.x7=null
$.wH=null
$.wO=null
$.ui=null
$.uq=null
$.xa=null
$.xc=null
$.ud=null
$.jA=null
$.jy=null
$.aG=null
$.x1=null
$.ua=null
$.wX=null
$.ff=null
$.wG=null
$.xd=null
$.x9=null
$.x6=null
$.uo=null
$.mK=null
$.ep=null
$.xb=null
$.mI=null
$.uj=null
$.e3=null
$.x4=null
$.dj=null
$.hn=null
$.uy=null
$.x5=null
$.ux=null
$.ut=null
$.uu=null
$.mN=null
$.jz=null
$.Bo=null
$.wQ=null
$.wW=null
$.x3=null
$.x2=null
$.E=null
$.wL=null
$.mJ=null
$.bQ=null
$.be=null
$.bR=null
$.X=null
$.aM=null
$.cc=null
$.L=null
$.P=null
$.aI=null
$.b9=null
$.bY=null
$.bl=null
$.bt=null
$.cj=null
$.b4=null
$.bA=null
$.bS=null
$.a0=null
$.FJ=null
$.aH=null
$.bc=null
$.aY=null
$.ac=null
$.cb=null
$.aZ=null
$.aE=null
$.bZ=null
$.b3=null
$.ay=null
$.br=null
$.c3=null
$.aP=null
$.bu=null
$.bs=null
$.a7=null
$.bM=null
$.aa=null
$.bi=null
$.bx=null
$.aX=null
$.bh=null
$.aJ=null
$.b7=null
$.aS=null
$.Z=null
$.aF=null
$.aN=null
$.b8=null
$.aD=null
$.aA=null
$.a3=null
$.R=null
$.O=null
$.ax=null
$.aT=null
$.ba=null
$.aU=null
$.CG=null
$.Fl=null
$.FU=null
$.Cc=null
$.Fi=null
$.CH=null
$.wD=null
$.Fx=null
$.DG=null
$.CC=null
$.Bk=null
$.Eg=null
$.jB=null
$.wI=null
$.EG=null
$.C9=null
$.Dp=null
$.C7=null
$.ue=null
$.BT=null
$.CT=null
$.Cg=null
$.Dz=null
$.FF=null
$.CI=null
$.ug=null
$.DA=null
$.Ce=null
$.BZ=null
$.x0=null
$.Bd=null
$.u9=null
$.Di=null
$.un=null
$.DV=null
$.DP=null
$.Bh=null
$.C1=null
$.EQ=null
$.Bj=null
$.Fh=null
$.Do=null
$.Cn=null
$.EA=null
$.Fb=null
$.ul=null
$.DK=null
$.Ex=null
$.Cf=null
$.B6=null
$.FI=null
$.Ds=null
$.BY=null
$.Fw=null
$.DY=null
$.C4=null
$.Fg=null
$.Cx=null
$.EY=null
$.EZ=null
$.Bf=null
$.DR=null
$.Ch=null
$.Cr=null
$.FY=null
$.hp=null
$.EO=null
$.Fe=null
$.mM=null
$.BN=null
$.E7=null
$.Eb=null
$.Bc=null
$.Cw=null
$.Ff=null
$.DX=null
$.Fz=null
$.EC=null
$.Ec=null
$.wV=null
$.F1=null
$.FO=null
$.Fk=null
$.D5=null
$.Eo=null
$.D6=null
$.ER=null
$.FM=null
$.Dy=null
$.Ct=null
$.CQ=null
$.BE=null
$.Ey=null
$.CO=null
$.CV=null
$.Cj=null
$.F0=null
$.fd=null
$.E1=null
$.wT=null
$.D7=null
$.wU=null
$.FR=null
$.BJ=null
$.EM=null
$.EN=null
$.EL=null
$.EK=null
$.F7=null
$.CW=null
$.DS=null
$.Fa=null
$.DJ=null
$.E2=null
$.wK=null
$.FL=null
$.DQ=null
$.Cz=null
$.CA=null
$.Ea=null
$.FX=null
$.Dm=null
$.FK=null
$.wZ=null
$.EX=null
$.Dw=null
$.mP=null
$.Dg=null
$.Eq=null
$.BI=null
$.CD=null
$.ET=null
$.DT=null
$.FE=null
$.wY=null
$.E0=null
$.BP=null
$.Ca=null
$.Em=null
$.Fr=null
$.ES=null
$.mH=null
$.uw=null
$.F3=null
$.FN=null
$.D4=null
$.Bs=null
$.BB=null
$.Fp=null
$.E4=null
$.DH=null
$.E5=null
$.Fm=null
$.Dh=null
$.Bg=null
$.CU=null
$.DF=null
$.F5=null
$.CN=null
$.BH=null
$.EI=null
$.EJ=null
$.FC=null
$.EV=null
$.up=null
$.wJ=null
$.C5=null
$.wM=null
$.Db=null
$.mL=null
$.Es=null
$.DO=null
$.EE=null
$.uk=null
$.mO=null
$.wS=null
$.Cp=null
$.CS=null
$.x_=null
$.wP=null
$.C0=null
$.Ft=null
$.BU=null
$.Ee=null
$.D8=null
$.F9=null
$.DI=null
$.Bp=null
$.D9=null
$.Cm=null
$.Ei=null
$.Dr=null
$.DN=null
$.Dx=null
$.DB=null
$.EH=null
$.ED=null
$.B9=null
$.Fq=null
$.Ev=null
$.Cd=null
$.Ci=null
$.CR=null
$.Fn=null
$.CK=null
$.Dt=null
$.Bw=null
$.CE=null
$.Cl=null
$.E6=null
$.Cu=null
$.EP=null
$.Dv=null
$.wF=null
$.Er=null
$.Da=null
$.CL=null
$.B7=null
$.Be=null
$.E3=null
$.Ed=null
$.Dq=null
$.D2=null
$.FH=null
$.Bz=null
$.CM=null
$.Du=null
$.Cb=null
$.x8=null
$.C_=null
$.EU=null
$.Bx=null
$.Fs=null
$.DD=null
$.Br=null
$.EB=null
$.En=null
$.C6=null
$.CX=null
$.BO=null
$.Fo=null
$.De=null
$.FD=null
$.BQ=null
$.CY=null
$.BR=null
$.C8=null
$.Eu=null
$.C2=null
$.Df=null
$.DU=null
$.BK=null
$.F8=null
$.FT=null
$.F_=null
$.DL=null
$.F6=null
$.DM=null
$.Bm=null
$.B8=null
$.DE=null
$.Bu=null
$.BS=null
$.Bn=null
$.Bq=null
$.E_=null
$.Ej=null
$.Fv=null
$.Dc=null
$.FS=null
$.Ez=null
$.Ew=null
$.Dj=null
$.Dd=null
$.BW=null
$.D0=null
$.DC=null
$.E8=null
$.F2=null
$.Bb=null
$.FP=null
$.Cs=null
$.Fc=null
$.Ck=null
$.Bl=null
$.BL=null
$.BD=null
$.FW=null
$.BM=null
$.Cv=null
$.BV=null
$.FB=null
$.F4=null
$.Fu=null
$.Ba=null
$.EF=null
$.Dk=null
$.Dn=null
$.FG=null
$.Fd=null
$.wR=null
$.CB=null
$.El=null
$.FQ=null
$.CF=null
$.Dl=null
$.uf=null
$.D3=null
$.D1=null
$.EW=null
$.Ek=null
$.CZ=null
$.BC=null
$.Fj=null
$.E9=null
$.Fy=null
$.FV=null
$.uc=null
$.ub=null
$.By=null
$.Cy=null
$.Et=null
$.C3=null
$.Ep=null
$.Co=null
$.Bi=null
$.BA=null
$.DZ=null
$.Cq=null
$.Eh=null
$.BG=null
$.CJ=null
$.FA=null
$.Bt=null
$.CP=null
$.Ef=null
$.BF=null
$.D_=null
$.DW=null
$.Bv=null
$.BX=null
$.y0=4
$.fa="OWNER"
$.xj=!1
$.uP=null
$.yN=""
$.oU=null
$.Hg=null
$.hU=null
$.eE=null
$.Hf=null
$.dQ=null
$.eF=null
$.cu=null
$.fs=null
$.hS=null
$.hT=null
$.dA=null
$.cd=null
$.xE=!1})();(function lazyInitializers(){lazy($,"wd","$get$wd",function(){return H.yD("_$dart_dartClosure")})
lazy($,"uJ","$get$uJ",function(){return H.yD("_$dart_js")})
lazy($,"wB","$get$wB",function(){return H.B4()})
lazy($,"wC","$get$wC",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.wo
$.wo=t+1
t="expando$key$"+t}return new P.lJ(null,t,[P.D])})
lazy($,"xI","$get$xI",function(){return H.dR(H.pK({
toString:function(){return"$receiver$"}}))})
lazy($,"xJ","$get$xJ",function(){return H.dR(H.pK({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"xK","$get$xK",function(){return H.dR(H.pK(null))})
lazy($,"xL","$get$xL",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xP","$get$xP",function(){return H.dR(H.pK(void 0))})
lazy($,"xQ","$get$xQ",function(){return H.dR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"xN","$get$xN",function(){return H.dR(H.xO(null))})
lazy($,"xM","$get$xM",function(){return H.dR(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"xS","$get$xS",function(){return H.dR(H.xO(void 0))})
lazy($,"xR","$get$xR",function(){return H.dR(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"vB","$get$vB",function(){return P.Hp()})
lazy($,"hi","$get$hi",function(){return P.Hv(null,P.cR)})
lazy($,"ij","$get$ij",function(){return[]})
lazy($,"y2","$get$y2",function(){return H.Gk([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"yq","$get$yq",function(){return P.HW()})
lazy($,"y5","$get$y5",function(){return P.jH(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"vE","$get$vE",function(){return P.jG()})
lazy($,"wc","$get$wc",function(){return P.dc("^\\S+$",!0,!1)})
lazy($,"kP","$get$kP",function(){return P.cI(P.D,L.fL)})
lazy($,"w8","$get$w8",function(){return P.dc("[\\/]",!0,!1)})
lazy($,"bP","$get$bP",function(){return H.a([],[S.bH])})
lazy($,"mf","$get$mf",function(){return P.cI(P.y,Z.iC)})
lazy($,"mE","$get$mE",function(){return P.cI(P.D,B.hm)})
lazy($,"xe","$get$xe",function(){return H.a([],[A.a_])})
lazy($,"xo","$get$xo",function(){return H.a([],[P.y])})
lazy($,"ou","$get$ou",function(){return P.cI(P.D,T.hO)})
lazy($,"az","$get$az",function(){return H.a([],[U.au])})
lazy($,"xD","$get$xD",function(){return P.xh([0,new K.cJ("Pixels -> Bytes",T.Ib(),T.Ia()),1,new K.cJ("Pixels -> Packed bits",T.I9(),T.I8()),2,new K.cJ("RLE 1 byte",V.tN(1),V.tM(1)),3,new K.cJ("RLE 2 bytes",V.tN(2),V.tM(2)),4,new K.cJ("RLE 3 bytes",V.tN(3),V.tM(3)),5,new K.cJ("RLE packed 1 byte",V.tL(1),V.tK(1)),6,new K.cJ("RLE packed 2 bytes",V.tL(2),V.tK(2)),7,new K.cJ("RLE packed 3 bytes",V.tL(3),V.tK(3)),8,new K.cJ("RLE dynamic",V.IN(),V.IM()),9,new K.cJ("Exponential-Golomb pixels",F.Io(),F.In()),10,new K.cJ("Exponential-Golomb run RLE",F.Im(),F.Il()),11,new K.cJ("Exponential-Golomb run/data RLE",F.Ik(),F.Ij())],P.D,K.cJ)})
lazy($,"c","$get$c",function(){return P.a2(null,null,null,G.Y)})
lazy($,"xZ","$get$xZ",function(){return P.dc("[\n\r]+",!0,!1)})
lazy($,"y_","$get$y_",function(){return P.dc("( *)(.*)",!0,!1)})
lazy($,"xY","$get$xY",function(){return P.dc("^s*//",!0,!1)})
lazy($,"xX","$get$xX",function(){return P.dc("//",!0,!1)})
lazy($,"cM","$get$cM",function(){return new F.hz(!1,!1,"WordListFileFormat")})
lazy($,"y1","$get$y1",function(){return new T.qa(null)})
lazy($,"w4","$get$w4",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"fF","$get$fF",function(){return H.a([new N.cz("Hair","Hair Gallery","hair",null,N.Ix()),new N.cz("Horns","Horn Gallery","horns",null,N.Iy()),new N.cz("All Fanart","All Fanart","fanArt",null,N.Iw()),new N.cz("First Player","First Player Post Great Refactoring","firstPlayer","images/misc/fanArt/FirstPlayer/",null),new N.cz("GrimDark AB FanArt","GrimDark AB Gallery","grimAB","images/misc/fanArt/ABFanArt/",null),new N.cz("star.eyes' Memes FanArt","star.eyes' memes","stareyes","images/misc/fanArt/star.eyes/",null),new N.cz("Wranglers","Wranglers","Wranglers","images/misc/fanArt/Wranglers/",null),new N.cz("Misc FanArt","Miscellaneous Art","misc","images/misc/fanArt/miscFanArt/",null),new N.cz("Gif FanArt","Gif Gallery","gifs","images/misc/fanArt/gifs/",null),new N.cz("Octobermas FanArt","Octobermas!","octobermas","images/misc/fanArt/OctoberMas/",null),new N.cz("ShogunSim FanArt","ShogunSim Gallery","shogunsim","images/misc/fanArt/ShogunSim/",null),new N.cz("Shogun vs JR","Shogun vs JR: <a href = 'https://drive.google.com/drive/folders/1dUSRkaW4zZD6r21gywPvR_YHcL7gvzUn?usp=sharing'>https://drive.google.com/drive/folders/1dUSRkaW4zZD6r21gywPvR_YHcL7gvzUn?usp=sharing PUT YOUR NAME IN THE FILE NAME SO WE KNOW WHO MADE IT</a>","mascotCompetition","images/misc/fanArt/MascotCompetition/",null),new N.cz("oblivionSurfer's FanArt","oblivionSurfer's FanArt Gallery","oblivionSurfer","images/misc/fanArt/oblivionSurfer/",null)],[N.cz])})
lazy($,"yz","$get$yz",function(){return H.a(["png","gif","jpg","jpeg"],[P.y])})
lazy($,"yA","$get$yA",function(){return P.dc('<a href="([^?]*?)">',!0,!1)})
lazy($,"yy","$get$yy",function(){return P.dc("\\.("+C.b.aS($.$get$yz(),"|")+")$",!0,!1)})
lazy($,"yJ","$get$yJ",function(){return P.dc("([a-zA-Z_]+?)(\\d+?)\\.",!0,!1)})
lazy($,"yF","$get$yF",function(){return W.IL("#images")})
lazy($,"t7","$get$t7",function(){return H.a([],[W.c7])})
lazy($,"d_","$get$d_",function(){return P.cI(P.y,Y.dN)})
lazy($,"xk","$get$xk",function(){return P.dc("[\\/]",!0,!1)})
lazy($,"uO","$get$uO",function(){return P.cI(P.y,W.fq)})
lazy($,"v_","$get$v_",function(){return A.fV(255,0,255,255)})
lazy($,"o6","$get$o6",function(){return new F.hz(!1,!1,"Path Utils")})
lazy($,"o5","$get$o5",function(){return P.cI(P.eK,P.D)})
lazy($,"cS","$get$cS",function(){return H.a([],[D.cK])})
lazy($,"hX","$get$hX",function(){return P.dc("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"ft","$get$ft",function(){return P.dc("\\\\(?!\\\\)",!0,!1)})
lazy($,"we","$get$we",function(){var t={color:16711935}
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
mangledGlobalNames:{D:"int",U:"double",ds:"num",y:"String",cV:"bool",cR:"Null",q:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.cV,args:[[P.q,E.iR]]},{func:1,v:true},{func:1,ret:P.de,args:[P.bj,P.D,P.D,O.d0]},{func:1,ret:P.bj,args:[P.D,P.bj,P.bj,O.d0]},{func:1,v:true,args:[P.ad]},{func:1,ret:P.y,args:[P.D]},{func:1,ret:P.y,args:[P.y]},{func:1,ret:W.as},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.cr,args:[P.D]},{func:1,ret:W.c7,args:[P.D]},{func:1,ret:W.as,args:[P.D]},{func:1,args:[,]},{func:1,ret:P.cV,args:[W.c7,P.y,P.y,W.i9]},{func:1,v:true,args:[P.ad],opt:[P.dP]},{func:1,ret:[P.co,P.cR]},{func:1,ret:P.cV,args:[P.ad]},{func:1,ret:W.ck,args:[P.D]},{func:1,ret:W.cs,args:[P.D]},{func:1,ret:W.ct,args:[P.D]},{func:1,ret:W.fr,args:[P.D]},{func:1,ret:W.fu,args:[P.D]},{func:1,ret:W.fv,args:[P.D]},{func:1,ret:P.bU,args:[P.D]},{func:1,ret:W.bK,args:[P.D]},{func:1,ret:W.cp,args:[P.D]},{func:1,ret:P.y,args:[P.dz]},{func:1,ret:W.cm,args:[P.D]},{func:1,ret:W.cn,args:[P.D]},{func:1,ret:P.bf,args:[P.D]},{func:1,ret:P.D,args:[P.bG,P.bG]},{func:1,ret:W.fw,args:[P.D]},{func:1,ret:W.f2,args:[P.D]},{func:1,v:true,args:[P.y]},{func:1,v:true,args:[,P.dP]},{func:1,ret:W.ci,args:[P.D]},{func:1,ret:W.cv,args:[P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.i,AnimationEffectTiming:J.i,AnimationTimeline:J.i,AppBannerPromptResult:J.i,BarProp:J.i,Body:J.i,CacheStorage:J.i,CanvasGradient:J.i,CanvasPattern:J.i,CanvasRenderingContext2D:J.i,CHROMIUMValuebuffer:J.i,CircularGeofencingRegion:J.i,Client:J.i,Clients:J.i,CompositorProxy:J.i,ConsoleBase:J.i,Coordinates:J.i,CredentialsContainer:J.i,Crypto:J.i,CryptoKey:J.i,CSS:J.i,DeprecatedStorageInfo:J.i,DeprecatedStorageQuota:J.i,DeviceAcceleration:J.i,DeviceRotationRate:J.i,DirectoryReader:J.i,DOMImplementation:J.i,Iterator:J.i,DOMMatrix:J.i,DOMMatrixReadOnly:J.i,DOMParser:J.i,DOMPoint:J.i,DOMPointReadOnly:J.i,EffectModel:J.i,Stream:J.i,FormData:J.i,GamepadButton:J.i,Geofencing:J.i,GeofencingRegion:J.i,Geolocation:J.i,Geoposition:J.i,Headers:J.i,HMDVRDevice:J.i,IdleDeadline:J.i,ImageBitmap:J.i,ImageBitmapRenderingContext:J.i,InjectedScriptHost:J.i,InputDeviceCapabilities:J.i,IntersectionObserver:J.i,IntersectionObserverEntry:J.i,KeyframeEffect:J.i,MediaDeviceInfo:J.i,MediaDevices:J.i,MediaError:J.i,MediaKeyStatusMap:J.i,MediaKeySystemAccess:J.i,MediaKeys:J.i,MediaMetadata:J.i,MediaSession:J.i,MemoryInfo:J.i,MessageChannel:J.i,Metadata:J.i,MIDIInputMap:J.i,MIDIOutputMap:J.i,MutationObserver:J.i,WebKitMutationObserver:J.i,MutationRecord:J.i,NavigatorStorageUtils:J.i,NodeFilter:J.i,NonDocumentTypeChildNode:J.i,NonElementParentNode:J.i,OffscreenCanvas:J.i,PerformanceNavigation:J.i,PerformanceObserver:J.i,PerformanceObserverEntryList:J.i,PerformanceTiming:J.i,Permissions:J.i,PositionError:J.i,PositionSensorVRDevice:J.i,Presentation:J.i,PushManager:J.i,PushMessageData:J.i,PushSubscription:J.i,Range:J.i,ReadableByteStream:J.i,ReadableByteStreamReader:J.i,ReadableStreamReader:J.i,RTCCertificate:J.i,RTCIceCandidate:J.i,mozRTCIceCandidate:J.i,RTCStatsReport:J.i,RTCStatsResponse:J.i,Screen:J.i,ScrollState:J.i,Selection:J.i,SharedArrayBuffer:J.i,SourceInfo:J.i,StorageInfo:J.i,StorageManager:J.i,StorageQuota:J.i,StyleMedia:J.i,StylePropertyMap:J.i,SyncManager:J.i,TextMetrics:J.i,UnderlyingSourceBase:J.i,URLSearchParams:J.i,VRDevice:J.i,VREyeParameters:J.i,VRFieldOfView:J.i,VRPositionState:J.i,ValidityState:J.i,VideoPlaybackQuality:J.i,VideoTrack:J.i,WindowClient:J.i,WorkerConsole:J.i,XPathEvaluator:J.i,XPathExpression:J.i,XPathNSResolver:J.i,XPathResult:J.i,XMLSerializer:J.i,XSLTProcessor:J.i,Bluetooth:J.i,BluetoothAdvertisingData:J.i,BluetoothCharacteristicProperties:J.i,BluetoothRemoteGATTServer:J.i,BluetoothRemoteGATTService:J.i,BluetoothUUID:J.i,Cache:J.i,DOMFileSystemSync:J.i,DirectoryEntrySync:J.i,DirectoryReaderSync:J.i,EntrySync:J.i,FileEntrySync:J.i,FileReaderSync:J.i,FileWriterSync:J.i,HTMLAllCollection:J.i,NFC:J.i,PagePopupController:J.i,Request:J.i,Response:J.i,SubtleCrypto:J.i,USBAlternateInterface:J.i,USBConfiguration:J.i,USBDevice:J.i,USBEndpoint:J.i,USBInTransferResult:J.i,USBInterface:J.i,USBIsochronousInTransferPacket:J.i,USBIsochronousInTransferResult:J.i,USBIsochronousOutTransferPacket:J.i,USBIsochronousOutTransferResult:J.i,USBOutTransferResult:J.i,WebKitCSSMatrix:J.i,Worklet:J.i,WorkletGlobalScope:J.i,IDBCursor:J.i,IDBCursorWithValue:J.i,IDBFactory:J.i,IDBKeyRange:J.i,SVGAngle:J.i,SVGAnimatedAngle:J.i,SVGAnimatedBoolean:J.i,SVGAnimatedEnumeration:J.i,SVGAnimatedInteger:J.i,SVGAnimatedLength:J.i,SVGAnimatedLengthList:J.i,SVGAnimatedNumber:J.i,SVGAnimatedNumberList:J.i,SVGAnimatedPreserveAspectRatio:J.i,SVGAnimatedRect:J.i,SVGAnimatedString:J.i,SVGAnimatedTransformList:J.i,SVGMatrix:J.i,SVGPoint:J.i,SVGPreserveAspectRatio:J.i,SVGRect:J.i,SVGUnitTypes:J.i,AudioListener:J.i,AudioParam:J.i,PeriodicWave:J.i,ANGLEInstancedArrays:J.i,ANGLE_instanced_arrays:J.i,WebGLBuffer:J.i,CHROMIUMSubscribeUniform:J.i,WebGLCompressedTextureASTC:J.i,WebGLCompressedTextureATC:J.i,WEBGL_compressed_texture_atc:J.i,WebGLCompressedTextureETC1:J.i,WEBGL_compressed_texture_etc1:J.i,WebGLCompressedTexturePVRTC:J.i,WEBGL_compressed_texture_pvrtc:J.i,WebGLCompressedTextureS3TC:J.i,WEBGL_compressed_texture_s3tc:J.i,WebGLDebugRendererInfo:J.i,WEBGL_debug_renderer_info:J.i,WebGLDebugShaders:J.i,WEBGL_debug_shaders:J.i,WebGLDepthTexture:J.i,WEBGL_depth_texture:J.i,WebGLDrawBuffers:J.i,WEBGL_draw_buffers:J.i,EXTsRGB:J.i,EXT_sRGB:J.i,EXTBlendMinMax:J.i,EXT_blend_minmax:J.i,EXTColorBufferFloat:J.i,EXTDisjointTimerQuery:J.i,EXTFragDepth:J.i,EXT_frag_depth:J.i,EXTShaderTextureLOD:J.i,EXT_shader_texture_lod:J.i,EXTTextureFilterAnisotropic:J.i,EXT_texture_filter_anisotropic:J.i,WebGLFramebuffer:J.i,WebGLLoseContext:J.i,WebGLExtensionLoseContext:J.i,WEBGL_lose_context:J.i,OESElementIndexUint:J.i,OES_element_index_uint:J.i,OESStandardDerivatives:J.i,OES_standard_derivatives:J.i,OESTextureFloat:J.i,OES_texture_float:J.i,OESTextureFloatLinear:J.i,OES_texture_float_linear:J.i,OESTextureHalfFloat:J.i,OES_texture_half_float:J.i,OESTextureHalfFloatLinear:J.i,OES_texture_half_float_linear:J.i,OESVertexArrayObject:J.i,OES_vertex_array_object:J.i,WebGLProgram:J.i,WebGLQuery:J.i,WebGLRenderbuffer:J.i,WebGLRenderingContext:J.i,WebGLSampler:J.i,WebGLShader:J.i,WebGLShaderPrecisionFormat:J.i,WebGLSync:J.i,WebGLTexture:J.i,WebGLTimerQueryEXT:J.i,WebGLTransformFeedback:J.i,WebGLUniformLocation:J.i,WebGLVertexArrayObject:J.i,WebGLVertexArrayObjectOES:J.i,Database:J.i,SQLError:J.i,SQLResultSet:J.i,SQLTransaction:J.i,ArrayBuffer:H.fj,ArrayBufferView:H.ex,DataView:H.nE,Float32Array:H.nF,Float64Array:H.nG,Int16Array:H.nH,Int32Array:H.nI,Int8Array:H.nJ,Uint16Array:H.nK,Uint32Array:H.nL,Uint8ClampedArray:H.jM,CanvasPixelArray:H.jM,Uint8Array:H.fk,HTMLBRElement:W.b0,HTMLCanvasElement:W.b0,HTMLContentElement:W.b0,HTMLDListElement:W.b0,HTMLDataListElement:W.b0,HTMLDetailsElement:W.b0,HTMLDialogElement:W.b0,HTMLDivElement:W.b0,HTMLHRElement:W.b0,HTMLHeadElement:W.b0,HTMLHeadingElement:W.b0,HTMLHtmlElement:W.b0,HTMLLabelElement:W.b0,HTMLLegendElement:W.b0,HTMLModElement:W.b0,HTMLOptGroupElement:W.b0,HTMLParagraphElement:W.b0,HTMLPictureElement:W.b0,HTMLPreElement:W.b0,HTMLQuoteElement:W.b0,HTMLShadowElement:W.b0,HTMLTableCaptionElement:W.b0,HTMLTableCellElement:W.b0,HTMLTableDataCellElement:W.b0,HTMLTableHeaderCellElement:W.b0,HTMLTableColElement:W.b0,HTMLTitleElement:W.b0,HTMLTrackElement:W.b0,HTMLUListElement:W.b0,HTMLUnknownElement:W.b0,HTMLDirectoryElement:W.b0,HTMLFontElement:W.b0,HTMLFrameElement:W.b0,HTMLMarqueeElement:W.b0,HTMLElement:W.b0,HTMLAnchorElement:W.ed,HTMLAreaElement:W.kO,HTMLAudioElement:W.eW,AudioTrack:W.cN,AudioTrackList:W.kW,HTMLBaseElement:W.l_,Blob:W.eY,HTMLBodyElement:W.eZ,HTMLButtonElement:W.fT,CDATASection:W.ef,CharacterData:W.ef,Comment:W.ef,ProcessingInstruction:W.ef,Text:W.ef,CompositorWorker:W.ld,Credential:W.fX,FederatedCredential:W.fX,PasswordCredential:W.fX,CSSFontFaceRule:W.lj,CSSImportRule:W.lk,CSSKeyframeRule:W.fY,MozCSSKeyframeRule:W.fY,WebKitCSSKeyframeRule:W.fY,CSSKeyframesRule:W.fZ,MozCSSKeyframesRule:W.fZ,WebKitCSSKeyframesRule:W.fZ,CSSPageRule:W.ll,CSSCharsetRule:W.bK,CSSGroupingRule:W.bK,CSSMediaRule:W.bK,CSSNamespaceRule:W.bK,CSSSupportsRule:W.bK,CSSRule:W.bK,CSSStyleDeclaration:W.f1,MSStyleCSSProperties:W.f1,CSS2Properties:W.f1,CSSStyleRule:W.lm,CSSViewportRule:W.ln,DataTransfer:W.ls,DataTransferItem:W.f2,DataTransferItemList:W.it,Document:W.eg,HTMLDocument:W.eg,XMLDocument:W.eg,DocumentFragment:W.iv,ShadowRoot:W.iv,DOMError:W.iw,FileError:W.iw,DOMException:W.lv,DOMRectReadOnly:W.ix,DOMStringList:W.iy,DOMStringMap:W.iz,DOMTokenList:W.iA,Element:W.c7,HTMLEmbedElement:W.lB,DirectoryEntry:W.h1,Entry:W.h1,FileEntry:W.h1,ErrorEvent:W.lH,AnimationEvent:W.T,AnimationPlayerEvent:W.T,ApplicationCacheErrorEvent:W.T,AutocompleteErrorEvent:W.T,BeforeInstallPromptEvent:W.T,BeforeUnloadEvent:W.T,BlobEvent:W.T,ClipboardEvent:W.T,CloseEvent:W.T,CompositionEvent:W.T,CustomEvent:W.T,DeviceLightEvent:W.T,DeviceMotionEvent:W.T,DeviceOrientationEvent:W.T,ExtendableEvent:W.T,ExtendableMessageEvent:W.T,FetchEvent:W.T,FocusEvent:W.T,FontFaceSetLoadEvent:W.T,GamepadEvent:W.T,GeofencingEvent:W.T,HashChangeEvent:W.T,InstallEvent:W.T,KeyboardEvent:W.T,MediaEncryptedEvent:W.T,MediaKeyMessageEvent:W.T,MediaQueryListEvent:W.T,MediaStreamEvent:W.T,MediaStreamTrackEvent:W.T,MessageEvent:W.T,MIDIConnectionEvent:W.T,MIDIMessageEvent:W.T,MouseEvent:W.T,DragEvent:W.T,NotificationEvent:W.T,PageTransitionEvent:W.T,PointerEvent:W.T,PopStateEvent:W.T,PresentationConnectionAvailableEvent:W.T,PresentationConnectionCloseEvent:W.T,ProgressEvent:W.T,PromiseRejectionEvent:W.T,PushEvent:W.T,RelatedEvent:W.T,RTCDataChannelEvent:W.T,RTCDTMFToneChangeEvent:W.T,RTCIceCandidateEvent:W.T,RTCPeerConnectionIceEvent:W.T,SecurityPolicyViolationEvent:W.T,ServicePortConnectEvent:W.T,ServiceWorkerMessageEvent:W.T,SpeechRecognitionEvent:W.T,StorageEvent:W.T,SyncEvent:W.T,TextEvent:W.T,TouchEvent:W.T,TrackEvent:W.T,TransitionEvent:W.T,WebKitTransitionEvent:W.T,UIEvent:W.T,WheelEvent:W.T,ResourceProgressEvent:W.T,USBConnectionEvent:W.T,IDBVersionChangeEvent:W.T,SVGZoomEvent:W.T,AudioProcessingEvent:W.T,OfflineAudioCompletionEvent:W.T,WebGLContextEvent:W.T,Event:W.T,InputEvent:W.T,Animation:W.aR,ApplicationCache:W.aR,DOMApplicationCache:W.aR,OfflineResourceList:W.aR,BatteryManager:W.aR,CanvasCaptureMediaStreamTrack:W.aR,CrossOriginServiceWorkerClient:W.aR,EventSource:W.aR,MediaKeySession:W.aR,MediaQueryList:W.aR,MediaRecorder:W.aR,MediaSource:W.aR,MediaStream:W.aR,MediaStreamTrack:W.aR,MessagePort:W.aR,MIDIAccess:W.aR,NetworkInformation:W.aR,Notification:W.aR,Performance:W.aR,PermissionStatus:W.aR,PresentationAvailability:W.aR,PresentationReceiver:W.aR,PresentationRequest:W.aR,RTCDTMFSender:W.aR,RTCPeerConnection:W.aR,webkitRTCPeerConnection:W.aR,mozRTCPeerConnection:W.aR,ScreenOrientation:W.aR,ServicePortCollection:W.aR,ServiceWorkerContainer:W.aR,ServiceWorkerRegistration:W.aR,SpeechRecognition:W.aR,SpeechSynthesis:W.aR,SpeechSynthesisUtterance:W.aR,WorkerPerformance:W.aR,BluetoothDevice:W.aR,BluetoothRemoteGATTCharacteristic:W.aR,USB:W.aR,EventTarget:W.aR,HTMLFieldSetElement:W.m7,File:W.ci,FileList:W.f9,FileReader:W.m8,DOMFileSystem:W.m9,FileWriter:W.ma,FontFace:W.mc,FontFaceSet:W.md,HTMLFormElement:W.iQ,Gamepad:W.cp,History:W.mp,HTMLOptionsCollection:W.fb,HTMLCollection:W.fb,HTMLFormControlsCollection:W.iS,XMLHttpRequest:W.e2,XMLHttpRequestUpload:W.hj,XMLHttpRequestEventTarget:W.hj,HTMLIFrameElement:W.mx,ImageData:W.hk,HTMLImageElement:W.eo,HTMLInputElement:W.mD,HTMLKeygenElement:W.n1,HTMLLIElement:W.n3,CalcLength:W.ht,LengthValue:W.ht,SimpleLength:W.ht,HTMLLinkElement:W.hu,Location:W.nj,HTMLMapElement:W.no,HTMLVideoElement:W.hC,HTMLMediaElement:W.hC,MediaList:W.jJ,HTMLMenuElement:W.nu,HTMLMenuItemElement:W.nv,HTMLMetaElement:W.nw,HTMLMeterElement:W.nx,MIDIOutput:W.ny,MIDIInput:W.hD,MIDIPort:W.hD,MimeType:W.cr,MimeTypeArray:W.jK,Navigator:W.nM,NavigatorUserMediaError:W.nN,Node:W.as,NodeIterator:W.jN,NodeList:W.hK,RadioNodeList:W.hK,HTMLOListElement:W.nS,HTMLObjectElement:W.nT,HTMLOptionElement:W.nX,HTMLOutputElement:W.nZ,HTMLParamElement:W.o2,Path2D:W.o4,PerformanceCompositeTiming:W.e5,PerformanceEntry:W.e5,PerformanceMark:W.e5,PerformanceMeasure:W.e5,PerformanceRenderTiming:W.e5,PerformanceResourceTiming:W.e5,Perspective:W.o9,Plugin:W.ck,PluginArray:W.jW,PresentationConnection:W.of,HTMLProgressElement:W.oi,RTCDataChannel:W.k_,DataChannel:W.k_,RTCSessionDescription:W.k0,mozRTCSessionDescription:W.k0,HTMLScriptElement:W.fq,HTMLSelectElement:W.k1,ServicePort:W.oD,SharedWorker:W.oG,SharedWorkerGlobalScope:W.oH,HTMLSlotElement:W.oI,SourceBuffer:W.cs,SourceBufferList:W.k3,HTMLSourceElement:W.oM,HTMLSpanElement:W.hR,SpeechGrammar:W.ct,SpeechGrammarList:W.k4,SpeechRecognitionAlternative:W.fr,SpeechRecognitionError:W.oP,SpeechRecognitionResult:W.cm,SpeechSynthesisEvent:W.oQ,SpeechSynthesisVoice:W.oR,Storage:W.oW,HTMLStyleElement:W.pi,CSSStyleSheet:W.cn,StyleSheet:W.cn,KeywordValue:W.e8,NumberValue:W.e8,PositionValue:W.e8,TransformValue:W.e8,StyleValue:W.e8,HTMLTableElement:W.k7,HTMLTableRowElement:W.po,HTMLTableSectionElement:W.pp,HTMLTemplateElement:W.hW,HTMLTextAreaElement:W.pu,TextTrack:W.cT,TextTrackCue:W.cL,VTTCue:W.cL,TextTrackCueList:W.px,TextTrackList:W.py,TimeRanges:W.pC,Touch:W.cv,TouchList:W.k8,TrackDefault:W.fu,TrackDefaultList:W.k9,Matrix:W.e9,Rotation:W.e9,Skew:W.e9,Translation:W.e9,TransformComponent:W.e9,TreeWalker:W.ka,URL:W.pT,VideoTrackList:W.pX,VTTRegion:W.fv,VTTRegionList:W.kb,WebSocket:W.q1,Window:W.ke,DOMWindow:W.ke,Worker:W.q8,CompositorWorkerGlobalScope:W.eM,DedicatedWorkerGlobalScope:W.eM,ServiceWorkerGlobalScope:W.eM,WorkerGlobalScope:W.eM,Attr:W.fw,ClientRect:W.qq,ClientRectList:W.i3,DOMRectList:W.i3,CSSRuleList:W.kk,DocumentType:W.qz,DOMRect:W.qA,GamepadList:W.kp,HTMLFrameSetElement:W.qV,NamedNodeMap:W.ic,MozNamedAttrMap:W.ic,ServiceWorker:W.rk,SpeechRecognitionResultList:W.ks,StyleSheetList:W.ku,WorkerLocation:W.rG,WorkerNavigator:W.rH,IDBDatabase:P.lt,IDBIndex:P.mB,IDBObjectStore:P.nU,IDBOpenDBRequest:P.hN,IDBVersionChangeRequest:P.hN,IDBRequest:P.hN,IDBTransaction:P.pH,SVGAElement:P.kL,SVGAnimateElement:P.ee,SVGAnimateMotionElement:P.ee,SVGAnimateTransformElement:P.ee,SVGAnimationElement:P.ee,SVGSetElement:P.ee,SVGFEBlendElement:P.lK,SVGFEColorMatrixElement:P.lL,SVGFEComponentTransferElement:P.lM,SVGFECompositeElement:P.lN,SVGFEConvolveMatrixElement:P.lO,SVGFEDiffuseLightingElement:P.lP,SVGFEDisplacementMapElement:P.lQ,SVGFEFloodElement:P.lR,SVGFEGaussianBlurElement:P.lS,SVGFEImageElement:P.lT,SVGFEMergeElement:P.lU,SVGFEMorphologyElement:P.lV,SVGFEOffsetElement:P.lW,SVGFESpecularLightingElement:P.lX,SVGFETileElement:P.lY,SVGFETurbulenceElement:P.lZ,SVGFilterElement:P.mb,SVGCircleElement:P.cq,SVGClipPathElement:P.cq,SVGDefsElement:P.cq,SVGEllipseElement:P.cq,SVGForeignObjectElement:P.cq,SVGGElement:P.cq,SVGGeometryElement:P.cq,SVGLineElement:P.cq,SVGPathElement:P.cq,SVGPolygonElement:P.cq,SVGPolylineElement:P.cq,SVGRectElement:P.cq,SVGSwitchElement:P.cq,SVGGraphicsElement:P.cq,SVGImageElement:P.my,SVGLength:P.da,SVGLengthList:P.n5,SVGMarkerElement:P.nr,SVGMaskElement:P.ns,SVGNumber:P.db,SVGNumberList:P.nQ,SVGPatternElement:P.o7,SVGPointList:P.oc,SVGScriptElement:P.hP,SVGStringList:P.pg,SVGStyleElement:P.pj,SVGDescElement:P.c5,SVGDiscardElement:P.c5,SVGFEDistantLightElement:P.c5,SVGFEFuncAElement:P.c5,SVGFEFuncBElement:P.c5,SVGFEFuncGElement:P.c5,SVGFEFuncRElement:P.c5,SVGFEMergeNodeElement:P.c5,SVGFEPointLightElement:P.c5,SVGFESpotLightElement:P.c5,SVGMetadataElement:P.c5,SVGStopElement:P.c5,SVGTitleElement:P.c5,SVGComponentTransferFunctionElement:P.c5,SVGElement:P.c5,SVGSVGElement:P.pl,SVGSymbolElement:P.pn,SVGTSpanElement:P.eH,SVGTextElement:P.eH,SVGTextPositioningElement:P.eH,SVGTextContentElement:P.eH,SVGTextPathElement:P.pw,SVGTransform:P.dd,SVGTransformList:P.pI,SVGUseElement:P.pU,SVGViewElement:P.pY,SVGViewSpec:P.pZ,SVGLinearGradientElement:P.i8,SVGRadialGradientElement:P.i8,SVGGradientElement:P.i8,SVGCursorElement:P.rg,SVGFEDropShadowElement:P.rh,SVGMPathElement:P.ri,AudioBuffer:P.fN,AudioBufferSourceNode:P.eV,AudioContext:P.fO,webkitAudioContext:P.fO,OfflineAudioContext:P.fO,AnalyserNode:P.bF,RealtimeAnalyserNode:P.bF,AudioDestinationNode:P.bF,ChannelMergerNode:P.bF,AudioChannelMerger:P.bF,ChannelSplitterNode:P.bF,AudioChannelSplitter:P.bF,DelayNode:P.bF,DynamicsCompressorNode:P.bF,GainNode:P.bF,AudioGainNode:P.bF,IIRFilterNode:P.bF,MediaStreamAudioDestinationNode:P.bF,PannerNode:P.bF,AudioPannerNode:P.bF,webkitAudioPannerNode:P.bF,ScriptProcessorNode:P.bF,JavaScriptAudioNode:P.bF,StereoPannerNode:P.bF,WaveShaperNode:P.bF,AudioNode:P.bF,MediaElementAudioSourceNode:P.eX,MediaStreamAudioSourceNode:P.eX,AudioSourceNode:P.eX,BiquadFilterNode:P.l2,ConvolverNode:P.lg,OscillatorNode:P.jS,Oscillator:P.jS,WebGLActiveInfo:P.kN,WebGL2RenderingContext:P.op,WebGL2RenderingContextBase:P.rF,SQLResultSetRowList:P.k5})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLModElement:true,HTMLOptGroupElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,HTMLLIElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,HTMLProgressElement:true,RTCDataChannel:true,DataChannel:true,RTCSessionDescription:true,mozRTCSessionDescription:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,HTMLStyleElement:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,TreeWalker:true,URL:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGStyleElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,AudioSourceNode:false,BiquadFilterNode:true,ConvolverNode:true,OscillatorNode:true,Oscillator:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jL.$nativeSuperclassTag="ArrayBufferView"
H.hG.$nativeSuperclassTag="ArrayBufferView"
H.hI.$nativeSuperclassTag="ArrayBufferView"
H.hE.$nativeSuperclassTag="ArrayBufferView"
H.hH.$nativeSuperclassTag="ArrayBufferView"
H.hJ.$nativeSuperclassTag="ArrayBufferView"
H.hF.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.yO(N.yG(),b)},[])
else (function(b){H.yO(N.yG(),b)})([])})})()
//# sourceMappingURL=image_browser.dart.js.map
