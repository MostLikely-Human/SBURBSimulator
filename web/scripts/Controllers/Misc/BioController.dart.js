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
a[c]=function(){a[c]=function(){H.Hg(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){return d?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"(x) {"+"if (c === null) c = "+"H.uN"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(a,b,c,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+c+x+++"() {"+"if (c === null) c = "+"H.uN"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,H,null)}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.uN(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={tL:function tL(a){this.a=a},
rf:function(a){var t,s
t=a^48
if(t<=9)return t
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
wF:function(a,b,c,d){var t=new H.oE(a,b,c,[d])
t.eT(a,b,c,d)
return t},
df:function(a,b,c,d){if(!!J.aq(a).$isr)return new H.fW(a,b,[c,d])
return new H.hr(a,b,[c,d])},
jl:function(){return new P.dP("No element")},
we:function(){return new P.dP("Too few elements")},
jG:function(a,b,c,d){if(c-b<=32)H.FM(a,b,c,d)
else H.FL(a,b,c,d)},
FM:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.b0(a);t<=c;++t){r=s.n(a,t)
q=t
while(!0){if(!(q>b&&J.ct(d.$2(s.n(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.n(a,p))
q=p}s.i(a,q,r)}},
FL:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=C.a.ao(a4-a3+1,6)
s=a3+t
r=a4-t
q=C.a.ao(a3+a4,2)
p=q-t
o=q+t
n=J.b0(a2)
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
if(J.b_(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=n.n(a2,e)
c=a5.$2(d,l)
b=J.aq(c)
if(b.R(c,0))continue
if(b.a1(c,0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(n.n(a2,f),l)
b=J.dx(c)
if(b.aF(c,0)){--f
continue}else{a=f-1
if(b.a1(c,0)){n.i(a2,e,n.n(a2,g))
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
H.jG(a2,a3,g-2,a5)
H.jG(a2,f+2,a4,a5)
if(a1)return
if(g<s&&f>r){for(;J.b_(a5.$2(n.n(a2,g),l),0);)++g
for(;J.b_(a5.$2(n.n(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=n.n(a2,e)
if(J.b_(a5.$2(d,l),0)){if(e!==g){n.i(a2,e,n.n(a2,g))
n.i(a2,g,d)}++g}else if(J.b_(a5.$2(d,j),0))for(;!0;)if(J.b_(a5.$2(n.n(a2,f),j),0)){--f
if(f<e)break
continue}else{a=f-1
if(J.e7(a5.$2(n.n(a2,f),l),0)){n.i(a2,e,n.n(a2,g))
a0=g+1
n.i(a2,g,n.n(a2,f))
n.i(a2,f,d)
g=a0}else{n.i(a2,e,n.n(a2,f))
n.i(a2,f,d)}f=a
break}}H.jG(a2,g,f,a5)}else H.jG(a2,g,f,a5)},
kK:function kK(a){this.a=a},
r:function r(){},
el:function el(){},
oE:function oE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
dL:function dL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
hr:function hr(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
fW:function fW(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jq:function jq(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
fd:function fd(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
hS:function hS(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
jQ:function jQ(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
iw:function iw(){},
p5:function p5(){},
hO:function hO(){},
k9:function(a,b){var t=a.bs(b)
if(!u.globalState.d.cy)u.globalState.f.bA()
return t},
xK:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.aq(s).$isp)throw H.k(P.dA("Arguments to main must be a List: "+H.x(s)))
u.globalState=new H.qm(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$vB()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.pT(P.tR(null,H.eF),0)
r=P.C
s.z=new H.w(0,null,null,null,null,null,0,[r,H.fu])
s.ch=new H.w(0,null,null,null,null,null,0,[r,null])
if(s.x===!0){q=new H.ql()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.zB,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.G6)}if(u.globalState.x===!0)return
s=u.globalState.a++
q=P.a3(null,null,null,r)
p=new H.fk(0,null,!1)
o=new H.fu(s,new H.w(0,null,null,null,null,null,0,[r,H.fk]),q,u.createNewIsolate(),p,new H.dC(H.ru()),new H.dC(H.ru()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
q.h(0,0)
o.da(0,p)
u.globalState.e=o
u.globalState.d=o
if(H.fA(a,{func:1,args:[,]}))o.bs(new H.rv(t,a))
else if(H.fA(a,{func:1,args:[,,]}))o.bs(new H.rw(t,a))
else o.bs(a)
u.globalState.f.bA()},
G6:function(a){var t=P.ho(["command","print","msg",a])
return new H.dw(!0,P.hY(null,P.C)).ay(t)},
zD:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x===!0)return H.zE()
return},
zE:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.k(new P.T("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.k(new P.T('Cannot extract URI from "'+t+'"'))},
zB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.eD(!0,[]).aY(b.data)
s=J.b0(t)
switch(s.n(t,"command")){case"start":u.globalState.b=s.n(t,"id")
r=s.n(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.n(t,"args")
o=new H.eD(!0,[]).aY(s.n(t,"msg"))
n=s.n(t,"isSpawnUri")
m=s.n(t,"startPaused")
l=new H.eD(!0,[]).aY(s.n(t,"replyTo"))
s=u.globalState.a++
k=P.C
j=P.a3(null,null,null,k)
i=new H.fk(0,null,!1)
h=new H.fu(s,new H.w(0,null,null,null,null,null,0,[k,H.fk]),j,u.createNewIsolate(),i,new H.dC(H.ru()),new H.dC(H.ru()),!1,!1,[],P.a3(null,null,null,null),null,null,!1,!0,P.a3(null,null,null,null))
j.h(0,0)
h.da(0,i)
u.globalState.f.a.aM(0,new H.eF(h,new H.me(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.bA()
break
case"spawn-worker":break
case"message":if(s.n(t,"port")!=null)J.fE(s.n(t,"port"),s.n(t,"msg"))
u.globalState.f.bA()
break
case"close":u.globalState.ch.ae(0,$.$get$vC().n(0,a))
a.terminate()
u.globalState.f.bA()
break
case"log":H.zA(s.n(t,"msg"))
break
case"print":if(u.globalState.x===!0){s=u.globalState.Q
k=P.ho(["command","print","msg",t])
k=new H.dw(!0,P.hY(null,P.C)).ay(k)
s.toString
self.postMessage(k)}else P.fB(s.n(t,"msg"))
break
case"error":throw H.k(s.n(t,"msg"))}},
zA:function(a){var t,s,r,q
if(u.globalState.x===!0){s=u.globalState.Q
r=P.ho(["command","log","msg",a])
r=new H.dw(!0,P.hY(null,P.C)).ay(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.cj(q)
t=H.ci(q)
s=P.lh(t)
throw H.k(s)}},
zC:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ws=$.ws+("_"+s)
$.wt=$.wt+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
J.fE(f,["spawned",new H.fv(s,r),q,t.r])
r=new H.mf(a,b,c,d,t)
if(e===!0){t.dS(q,q)
u.globalState.f.a.aM(0,new H.eF(t,r,"start isolate"))}else r.$0()},
FS:function(a,b){var t=new H.oX(!0,!1,null)
t.eU(a,b)
return t},
Gp:function(a){return new H.eD(!0,[]).aY(new H.dw(!1,P.hY(null,P.C)).ay(a))},
rv:function rv(a,b){this.a=a
this.b=b},
rw:function rw(a,b){this.a=a
this.b=b},
qm:function qm(a,b,c,d,e,f,r,x,y,z,Q,ch,cx){var _=this
_.a=a
_.b=b
_.c=c
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
fu:function fu(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
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
qh:function qh(a,b){this.a=a
this.b=b},
pT:function pT(a,b){this.a=a
this.b=b},
pU:function pU(a){this.a=a},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(){},
me:function me(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mf:function mf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pG:function pG(){},
fv:function fv(b,a){this.b=b
this.a=a},
qo:function qo(a,b){this.a=a
this.b=b},
i0:function i0(b,c,a){this.b=b
this.c=c
this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b){this.a=a
this.b=b},
dC:function dC(a){this.a=a},
dw:function dw(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
yF:function(){throw H.k(new P.T("Cannot modify unmodifiable Map"))},
GX:function(a){return u.types[a]},
xF:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.aq(a).$isaE},
x:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cH(a)
if(typeof t!=="string")throw H.k(H.bv(a))
return t},
Fk:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.nN(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
en:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
uc:function(a,b){if(b==null)throw H.k(new P.bJ(a,null,null))
return b.$1(a)},
fi:function(a,b,c){var t,s,r,q,p,o
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.uc(a,c)
if(3>=t.length)return H.v(t,3)
s=t[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.uc(a,c)}if(b<2||b>36)throw H.k(P.bE(b,2,36,"radix",null))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=t[1]
for(p=q.length,o=0;o<p;++o)if((C.c.a2(q,o)|32)>r)return H.uc(a,c)}return parseInt(a,b)},
wq:function(a,b){return b.$1(a)},
wu:function(a,b){var t,s
H.xx(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.wq(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.rF(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.wq(a,b)}return t},
nI:function(a){var t,s,r,q,p,o,n,m
t=J.aq(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.aq(a).$isey){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.c.a2(q,0)===36)q=C.c.ag(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.rp(H.kd(a),0,null),u.mangledGlobalNames)},
nH:function(a){return"Instance of '"+H.nI(a)+"'"},
F_:function(){if(!!self.location)return self.location.href
return},
wp:function(a){var t,s,r,q,p
t=J.bZ(a)
if(typeof t!=="number")return t.ew()
if(t<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<t;r=q){q=r+500
if(q<t)p=q
else p=t
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
F4:function(a){var t,s,r,q
t=H.a([],[P.C])
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.bT)(a),++r){q=a[r]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<=65535)t.push(q)
else if(q<=1114111){t.push(55296+(C.a.aX(q-65536,10)&1023))
t.push(56320+(q&1023))}else throw H.k(H.bv(q))}return H.wp(t)},
ww:function(a){var t,s,r,q
for(t=a.length,s=0;r=a.length,s<r;r===t||(0,H.bT)(a),++s){q=a[s]
if(typeof q!=="number"||Math.floor(q)!==q)throw H.k(H.bv(q))
if(q<0)throw H.k(H.bv(q))
if(q>65535)return H.F4(a)}return H.wp(a)},
F5:function(a,b,c){var t,s,r,q
if(typeof c!=="number")return c.ew()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
if(r<c)q=r
else q=c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
hC:function(a){var t
if(typeof a!=="number")return H.a7(a)
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.d.aX(t,10))>>>0,56320|t&1023)}}throw H.k(P.bE(a,0,1114111,null,null))},
cT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
wr:function(a){return a.b?H.cT(a).getUTCFullYear()+0:H.cT(a).getFullYear()+0},
nG:function(a){return a.b?H.cT(a).getUTCMonth()+1:H.cT(a).getMonth()+1},
nF:function(a){return a.b?H.cT(a).getUTCDate()+0:H.cT(a).getDate()+0},
F0:function(a){return a.b?H.cT(a).getUTCHours()+0:H.cT(a).getHours()+0},
F2:function(a){return a.b?H.cT(a).getUTCMinutes()+0:H.cT(a).getMinutes()+0},
F3:function(a){return a.b?H.cT(a).getUTCSeconds()+0:H.cT(a).getSeconds()+0},
F1:function(a){return a.b?H.cT(a).getUTCMilliseconds()+0:H.cT(a).getMilliseconds()+0},
ud:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
return a[b]},
wv:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.k(H.bv(a))
a[b]=c},
a7:function(a){throw H.k(H.bv(a))},
v:function(a,b){if(a==null)J.bZ(a)
throw H.k(H.c3(a,b))},
c3:function(a,b){var t,s
if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"index",null)
t=J.bZ(a)
if(!(b<0)){if(typeof t!=="number")return H.a7(t)
s=b>=t}else s=!0
if(s)return P.by(b,a,"index",null,t)
return P.jD(b,"index",null)},
GO:function(a,b,c){if(typeof a!=="number"||Math.floor(a)!==a)return new P.cX(!0,a,"start",null)
if(a<0||a>c)return new P.er(0,c,!0,a,"start","Invalid value")
if(b!=null){if(typeof b!=="number"||Math.floor(b)!==b)return new P.cX(!0,b,"end",null)
if(b<a||b>c)return new P.er(a,c,!0,b,"end","Invalid value")}return new P.cX(!0,b,"end",null)},
bv:function(a){return new P.cX(!0,a,null,null)},
kb:function(a){if(typeof a!=="number")throw H.k(H.bv(a))
return a},
uM:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(H.bv(a))
return a},
xx:function(a){if(typeof a!=="string")throw H.k(H.bv(a))
return a},
k:function(a){var t
if(a==null)a=new P.fg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.xL})
t.name=""}else t.toString=H.xL
return t},
xL:function(){return J.cH(this.dartException)},
aZ:function(a){throw H.k(a)},
bT:function(a){throw H.k(new P.bM(a))},
dQ:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.p2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
p3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
wQ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
tN:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.my(a,s,t?null:b.receiver)},
cj:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.rx(a)
if(a==null)return
if(a instanceof H.h3)return t.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.a.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.tN(H.x(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return t.$1(new H.jw(p,null))}}if(a instanceof TypeError){o=$.$get$wK()
n=$.$get$wL()
m=$.$get$wM()
l=$.$get$wN()
k=$.$get$wR()
j=$.$get$wS()
i=$.$get$wP()
$.$get$wO()
h=$.$get$wU()
g=$.$get$wT()
f=o.aI(s)
if(f!=null)return t.$1(H.tN(s,f))
else{f=n.aI(s)
if(f!=null){f.method="call"
return t.$1(H.tN(s,f))}else{f=m.aI(s)
if(f==null){f=l.aI(s)
if(f==null){f=k.aI(s)
if(f==null){f=j.aI(s)
if(f==null){f=i.aI(s)
if(f==null){f=l.aI(s)
if(f==null){f=h.aI(s)
if(f==null){f=g.aI(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.jw(s,f==null?null:f.method))}}return t.$1(new H.p4(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.jK()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.cX(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.jK()
return a},
ci:function(a){var t
if(a instanceof H.h3)return a.b
if(a==null)return new H.k5(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.k5(a,null)},
H6:function(a){if(a==null||typeof a!='object')return J.dz(a)
else return H.en(a)},
xB:function(a,b){var t,s,r,q
t=a.length
for(s=0;s<t;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
H1:function(a,b,c,d,e,f,g){switch(c){case 0:return H.k9(b,new H.rk(a))
case 1:return H.k9(b,new H.rl(a,d))
case 2:return H.k9(b,new H.rm(a,d,e))
case 3:return H.k9(b,new H.rn(a,d,e,f))
case 4:return H.k9(b,new H.ro(a,d,e,f,g))}throw H.k(P.lh("Unsupported number of arguments for wrapped closure"))},
dj:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.H1)
a.$identity=t
return t},
yB:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.aq(c).$isp){t.$reflectionInfo=c
r=H.Fk(t).r}else r=c
q=d?Object.create(new H.oe().constructor.prototype):Object.create(new H.fL(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else{o=$.dD
$.dD=J.e6(o,1)
p=new Function("a,b,c,d"+o,"this.$initialize(a,b,c,d"+o+")")}q.constructor=p
p.prototype=q
if(!d){n=e.length==1&&!0
m=H.va(a,t,n)
m.$reflectionInfo=c}else{q.$static_name=f
m=t
n=!1}if(typeof r=="number")l=function(a0,a1){return function(){return a0(a1)}}(H.GX,r)
else if(typeof r=="function")if(d)l=r
else{k=n?H.v7:H.rJ
l=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,k)}else throw H.k("Error in reflectionInfo.")
q.$S=l
q[s]=m
for(o=b.length,j=1;j<o;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.va(a,i,n)
q[h]=g}}q["call*"]=m
q.$R=t.$R
q.$D=t.$D
return p},
yy:function(a,b,c,d){var t=H.rJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
va:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.yA(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.yy(s,!q,t,b)
if(s===0){q=$.dD
$.dD=J.e6(q,1)
o="self"+H.x(q)
q="return function(){var "+o+" = this."
p=$.fM
if(p==null){p=H.kC("self")
$.fM=p}return new Function(q+H.x(p)+";return "+o+"."+H.x(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.dD
$.dD=J.e6(q,1)
n+=H.x(q)
q="return function("+n+"){return this."
p=$.fM
if(p==null){p=H.kC("self")
$.fM=p}return new Function(q+H.x(p)+"."+H.x(t)+"("+n+");}")()},
yz:function(a,b,c,d){var t,s
t=H.rJ
s=H.v7
switch(b?-1:a){case 0:throw H.k(new H.nS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
yA:function(a,b){var t,s,r,q,p,o,n,m
t=H.yx()
s=$.v6
if(s==null){s=H.kC("receiver")
$.v6=s}r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.yz(q,!o,r,b)
if(q===1){s="return function(){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+");"
o=$.dD
$.dD=J.e6(o,1)
return new Function(s+H.x(o)+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
s="return function("+m+"){return this."+H.x(t)+"."+H.x(r)+"(this."+H.x(s)+", "+m+");"
o=$.dD
$.dD=J.e6(o,1)
return new Function(s+H.x(o)+"}")()},
uN:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.aq(c).$isp){c.fixed$length=Array
t=c}else t=c
return H.yB(a,b,t,!!d,e,f)},
rJ:function(a){return a.a},
v7:function(a){return a.c},
yx:function(){var t=$.fM
if(t==null){t=H.kC("self")
$.fM=t}return t},
kC:function(a){var t,s,r,q,p
t=new H.fL("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
H9:function(a,b){var t=J.b0(b)
throw H.k(H.v9(H.nI(a),t.I(b,3,t.gm(b))))},
eI:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.aq(a)[b]
else t=!0
if(t)return a
H.H9(a,b)},
xA:function(a){var t=J.aq(a)
return"$S" in t?t.$S():null},
fA:function(a,b){var t
if(a==null)return!1
t=H.xA(a)
return t==null?!1:H.uQ(t,b)},
v9:function(a,b){return new H.kH("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
Hg:function(a){throw H.k(new P.l0(a))},
ru:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
xC:function(a){return u.getIsolateTag(a)},
bY:function(a){return new H.dR(a,null)},
a:function(a,b){a.$ti=b
return a},
kd:function(a){if(a==null)return
return a.$ti},
xE:function(a,b){return H.uT(a["$as"+H.x(b)],H.kd(a))},
ar:function(a,b,c){var t=H.xE(a,b)
return t==null?null:t[c]},
P:function(a,b){var t=H.kd(a)
return t==null?null:t[b]},
dy:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.rp(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.x(b==null?a:b.$1(a))
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.dy(t,b)
return H.Gt(a,b)}return"unknown-reified-type"},
Gt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.dy(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.dy(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.dy(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.GW(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.dy(l[j],b)+(" "+H.x(j))}q+="}"}return"("+q+") => "+t},
rp:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=new P.c9("")
for(s=b,r=!0,q=!0,p="";s<a.length;++s){if(r)r=!1
else t.N=p+", "
o=a[s]
if(o!=null)q=!1
p=t.N+=H.dy(o,c)}return q?"":"<"+t.A(0)+">"},
ke:function(a){var t,s
if(a instanceof H.eQ){t=H.xA(a)
if(t!=null)return H.dy(t,null)}s=J.aq(a).constructor.builtin$cls
if(a==null)return s
return s+H.rp(a.$ti,0,null)},
uT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dU:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.kd(a)
s=J.aq(a)
if(s[b]==null)return!1
return H.xv(H.uT(s[d],t),c)},
Hf:function(a,b,c,d){if(a==null)return a
if(H.dU(a,b,c,d))return a
throw H.k(H.v9(H.nI(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.rp(c,0,null),u.mangledGlobalNames)))},
xv:function(a,b){var t,s
if(a==null||b==null)return!0
t=a.length
for(s=0;s<t;++s)if(!H.cW(a[s],b[s]))return!1
return!0},
eH:function(a,b,c){return a.apply(b,H.xE(b,c))},
GJ:function(a,b){var t,s,r
if(a==null)return b==null||b.builtin$cls==="ab"||b.builtin$cls==="d3"
if(b==null)return!0
t=H.kd(a)
a=J.aq(a)
s=a.constructor
if(t!=null){t=t.slice()
t.splice(0,0,s)
s=t}if('func' in b){r=a.$S
if(r==null)return!1
return H.uQ(r.apply(a,null),b)}return H.cW(s,b)},
cW:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="d3")return!0
if('func' in b)return H.uQ(a,b)
if('func' in a)return b.builtin$cls==="Hm"||b.builtin$cls==="ab"
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
return H.xv(H.uT(o,t),r)},
xu:function(a,b,c){var t,s,r,q,p
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
s=a.length
r=b.length
if(c){if(s<r)return!1}else if(s!==r)return!1
for(q=0;q<r;++q){t=a[q]
p=b[q]
if(!(H.cW(t,p)||H.cW(p,t)))return!1}return!0},
GA:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.cW(p,o)||H.cW(o,p)))return!1}return!0},
uQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.cW(t,s)||H.cW(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
k=o!=null?o.length:0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.xu(r,q,!1))return!1
if(!H.xu(p,o,!0))return!1}else{for(j=0;j<n;++j){i=r[j]
h=q[j]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}for(g=j,f=0;g<m;++f,++g){i=p[f]
h=q[g]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}for(g=0;g<k;++f,++g){i=p[f]
h=o[g]
if(!(H.cW(i,h)||H.cW(h,i)))return!1}}return H.GA(a.named,b.named)},
Hx:function(a){var t=$.uO
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
Hw:function(a){return H.en(a)},
Hv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
H2:function(a){var t,s,r,q,p,o
t=$.uO.$1(a)
s=$.ra[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rj[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.xt.$2(a,t)
if(t!=null){s=$.ra[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.rj[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.uR(r)
$.ra[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.rj[t]=r
return r}if(p==="-"){o=H.uR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.xG(a,r)
if(p==="*")throw H.k(new P.ex(t))
if(u.leafTags[t]===true){o=H.uR(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.xG(a,r)},
xG:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.rq(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
uR:function(a){return J.rq(a,!1,null,!!a.$isaE)},
H4:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.rq(t,!1,null,!!t.$isaE)
else return J.rq(t,c,null,null)},
H_:function(){if(!0===$.uP)return
$.uP=!0
H.H0()},
H0:function(){var t,s,r,q,p,o,n,m
$.ra=Object.create(null)
$.rj=Object.create(null)
H.GZ()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.xH.$1(p)
if(o!=null){n=H.H4(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
GZ:function(){var t,s,r,q,p,o,n
t=C.N()
t=H.fz(C.O,H.fz(C.P,H.fz(C.u,H.fz(C.u,H.fz(C.R,H.fz(C.Q,H.fz(C.S(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.uO=new H.rg(p)
$.xt=new H.rh(o)
$.xH=new H.ri(n)},
fz:function(a,b){return a(b)||b},
tI:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.k(new P.bJ("Illegal RegExp pattern ("+String(q)+")",a,null))},
Hd:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
uS:function(a,b,c){var t,s,r,q
if(typeof b==="string")if(b==="")if(a==="")return c
else{t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))
else if(b instanceof H.hk){q=b.gdB()
q.lastIndex=0
return a.replace(q,c.replace(/\$/g,"$$$$"))}else{if(b==null)H.aZ(H.bv(b))
throw H.k("String.replaceAll(Pattern) UNIMPLEMENTED")}},
Gy:function(a){return a},
He:function(a,b,c,d){var t,s,r,q,p,o
t=J.aq(b)
if(!t.$isu8)throw H.k(P.dB(b,"pattern","is not a Pattern"))
for(t=t.aP(b,a),t=new H.jU(t.a,t.b,t.c,null),s=0,r="";t.F();){q=t.d
p=q.b
o=p.index
r=r+H.x(H.xk().$1(C.c.I(a,s,o)))+H.x(c.$1(q))
s=o+p[0].length}t=r+H.x(H.xk().$1(C.c.ag(a,s)))
return t.charCodeAt(0)==0?t:t},
kN:function kN(){},
kO:function kO(a,b,c,$ti){var _=this
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
p2:function p2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jw:function jw(a,b){this.a=a
this.b=b},
my:function my(a,b,c){this.a=a
this.b=b
this.c=c},
p4:function p4(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
rx:function rx(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
rk:function rk(a){this.a=a},
rl:function rl(a,b){this.a=a
this.b=b},
rm:function rm(a,b,c){this.a=a
this.b=b
this.c=c},
rn:function rn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ro:function ro(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eQ:function eQ(){},
oI:function oI(){},
oe:function oe(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kH:function kH(a){this.a=a},
nS:function nS(a){this.a=a},
dR:function dR(a,b){this.a=a
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
mx:function mx(a){this.a=a},
mw:function mw(a){this.a=a},
mH:function mH(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
mI:function mI(a,$ti){this.a=a
this.$ti=$ti},
mJ:function mJ(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
rg:function rg(a){this.a=a},
rh:function rh(a){this.a=a},
ri:function ri(a){this.a=a},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a,b){this.a=a
this.b=b},
pB:function pB(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
qE:function qE(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cx:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.k(P.dA("Invalid length "+H.x(a)))
return a},
xg:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dA("Invalid view offsetInBytes "+H.x(b)))},
xj:function(a){return a},
EY:function(a){return new Int8Array(H.xj(a))},
cM:function(a,b,c){H.xg(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
Go:function(a,b,c){var t
if(!(a>>>0!==a))if(!(b>>>0!==b)){if(typeof a!=="number")return a.aF()
t=a>b||b>c}else t=!0
else t=!0
if(t)throw H.k(H.GO(a,b,c))
return b},
fe:function fe(){},
em:function em(){},
n7:function n7(){},
jt:function jt(){},
hv:function hv(){},
hx:function hx(){},
hz:function hz(){},
hw:function hw(){},
hy:function hy(){},
hA:function hA(){},
n8:function n8(){},
n9:function n9(){},
na:function na(){},
nb:function nb(){},
nc:function nc(){},
nd:function nd(){},
ne:function ne(){},
ju:function ju(){},
ff:function ff(){},
GW:function(a){var t=H.a(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
H8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aq:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.jo.prototype
return J.jn.prototype}if(typeof a=="string")return J.ej.prototype
if(a==null)return J.mu.prototype
if(typeof a=="boolean")return J.mt.prototype
if(a.constructor==Array)return J.ei.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.rd(a)},
rq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
rd:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.uP==null){H.H_()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.k(new P.ex("Return interceptor for "+H.x(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$tM()]
if(p!=null)return p
p=H.H2(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.F
if(s===Object.prototype)return C.F
if(typeof q=="function"){Object.defineProperty(q,$.$get$tM(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
wf:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
EE:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.a2(a,b)
if(s!==32&&s!==13&&!J.wf(s))break;++b}return b},
tH:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.Y(a,t)
if(s!==32&&s!==13&&!J.wf(s))break}return b},
b0:function(a){if(typeof a=="string")return J.ej.prototype
if(a==null)return a
if(a.constructor==Array)return J.ei.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.rd(a)},
dk:function(a){if(a==null)return a
if(a.constructor==Array)return J.ei.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.rd(a)},
dx:function(a){if(typeof a=="number")return J.fb.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.ey.prototype
return a},
kc:function(a){if(typeof a=="number")return J.fb.prototype
if(typeof a=="string")return J.ej.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.ey.prototype
return a},
da:function(a){if(typeof a=="string")return J.ej.prototype
if(a==null)return a
if(!(a instanceof P.ab))return J.ey.prototype
return a},
aR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ek.prototype
return a}if(a instanceof P.ab)return a
return J.rd(a)},
e6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kc(a).V(a,b)},
b_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aq(a).R(a,b)},
uU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.dx(a).au(a,b)},
ct:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.dx(a).aF(a,b)},
e7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dx(a).a1(a,b)},
ry:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kc(a).at(a,b)},
fC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.xF(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b0(a).n(a,b)},
kf:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.xF(a,a[u.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dk(a).i(a,b,c)},
xM:function(a,b){return J.dk(a).h(a,b)},
xN:function(a,b,c,d){return J.aR(a).fO(a,b,c,d)},
xO:function(a,b){return J.da(a).aP(a,b)},
dV:function(a,b){return J.aR(a).fQ(a,b)},
uV:function(a){return J.aR(a).fS(a)},
rz:function(a,b,c){return J.dx(a).a9(a,b,c)},
xP:function(a,b){return J.kc(a).aA(a,b)},
xQ:function(a,b){return J.aR(a).aB(a,b)},
xR:function(a,b){return J.b0(a).aa(a,b)},
kg:function(a,b,c){return J.b0(a).dW(a,b,c)},
xS:function(a,b){return J.aR(a).h0(a,b)},
uW:function(a,b){return J.dk(a).T(a,b)},
xT:function(a,b,c,d){return J.dk(a).bX(a,b,c,d)},
kh:function(a){return J.dx(a).ak(a)},
uX:function(a,b){return J.dk(a).a7(a,b)},
rA:function(a){return J.aR(a).gdU(a)},
xU:function(a){return J.aR(a).gbr(a)},
fD:function(a){return J.aR(a).gar(a)},
xV:function(a){return J.aR(a).gcI(a)},
dz:function(a){return J.aq(a).ga3(a)},
rB:function(a){return J.b0(a).gX(a)},
uY:function(a){return J.aR(a).gW(a)},
cP:function(a){return J.dk(a).gS(a)},
xW:function(a){return J.aR(a).gaC(a)},
bZ:function(a){return J.b0(a).gm(a)},
xX:function(a){return J.aR(a).gG(a)},
xY:function(a){return J.aR(a).ged(a)},
xZ:function(a){return J.aR(a).ghS(a)},
y_:function(a){return J.aR(a).ghT(a)},
uZ:function(a){return J.aq(a).ga8(a)},
rC:function(a){return J.aR(a).gaL(a)},
y0:function(a){return J.aR(a).gb6(a)},
y1:function(a){return J.aR(a).bj(a)},
y2:function(a,b){return J.aR(a).as(a,b)},
y3:function(a,b){return J.aR(a).bE(a,b)},
y4:function(a,b){return J.b0(a).be(a,b)},
v_:function(a,b,c,d,e){return J.aR(a).e8(a,b,c,d,e)},
v0:function(a,b){return J.dk(a).ax(a,b)},
y5:function(a,b,c){return J.da(a).ec(a,b,c)},
v1:function(a,b){return J.aR(a).hC(a,b)},
y6:function(a,b,c,d){return J.aR(a).hP(a,b,c,d)},
ki:function(a,b,c){return J.da(a).cU(a,b,c)},
rD:function(a,b,c){return J.da(a).hR(a,b,c)},
fE:function(a,b){return J.aR(a).b8(a,b)},
v2:function(a,b){return J.aR(a).sbr(a,b)},
y7:function(a,b){return J.dk(a).d2(a,b)},
dW:function(a,b){return J.da(a).eI(a,b)},
y8:function(a,b){return J.da(a).ag(a,b)},
rE:function(a){return J.dx(a).l(a)},
y9:function(a){return J.dk(a).ap(a)},
ya:function(a,b){return J.dx(a).bB(a,b)},
cH:function(a){return J.aq(a).A(a)},
yb:function(a){return J.da(a).hX(a)},
rF:function(a){return J.da(a).bi(a)},
yc:function(a){return J.da(a).eq(a)},
f:function f(){},
mt:function mt(){},
mu:function mu(){},
hl:function hl(){},
nA:function nA(){},
ey:function ey(){},
ek:function ek(){},
ei:function ei($ti){this.$ti=$ti},
tK:function tK($ti){this.$ti=$ti},
i5:function i5(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
fb:function fb(){},
jo:function jo(){},
jn:function jn(){},
ej:function ej(){}},P={
FY:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.GB()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.dj(new P.pD(t),1)).observe(s,{childList:true})
return new P.pC(t,s,r)}else if(self.setImmediate!=null)return P.GC()
return P.GD()},
FZ:function(a){++u.globalState.f.b
self.scheduleImmediate(H.dj(new P.pE(a),0))},
G_:function(a){++u.globalState.f.b
self.setImmediate(H.dj(new P.pF(a),0))},
G0:function(a){P.ux(C.o,a)},
bt:function(a,b){P.xe(null,a)
return b.ghf()},
cs:function(a,b){P.xe(a,b)},
bs:function(a,b){J.xQ(b,a)},
br:function(a,b){b.cE(H.cj(a),H.ci(a))},
xe:function(a,b){var t,s,r,q
t=new P.qT(b)
s=new P.qU(b)
r=J.aq(a)
if(!!r.$isbj)a.cu(t,s)
else if(!!r.$iscC)a.c2(t,s)
else{q=new P.bj(0,$.am,null,[null])
q.a=4
q.c=a
q.cu(t,null)}},
bu:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
$.am.toString
return new P.r3(t)},
xl:function(a,b){if(H.fA(a,{func:1,args:[P.d3,P.d3]})){b.toString
return a}else{b.toString
return a}},
zi:function(a,b){var t=new P.bj(0,$.am,null,[b])
P.wJ(C.o,new P.r5(a,t))
return t},
ta:function(a,b,c){var t
if(a==null)a=new P.fg()
t=$.am
if(t!==C.e)t.toString
t=new P.bj(0,t,null,[c])
t.dd(a,b)
return t},
zj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.bj(0,$.am,null,[P.p])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.lV(t,!1,b,s)
try{for(m=a.length,l=0;l<a.length;a.length===m||(0,H.bT)(a),++l){q=a[l]
p=t.b
q.c2(new P.lU(t,!1,b,s,p),r);++t.b}m=t.b
if(m===0){m=new P.bj(0,$.am,null,[null])
m.dc(C.W)
return m}k=new Array(m)
k.fixed$length=Array
t.a=k}catch(j){o=H.cj(j)
n=H.ci(j)
if(t.b===0||!1)return P.ta(o,n,null)
else{t.c=o
t.d=n}}return s},
bp:function(a){return new P.k7(new P.bj(0,$.am,null,[a]),[a])},
xi:function(a,b,c){$.am.toString
a.an(b,c)},
G3:function(a,b){var t=new P.bj(0,$.am,null,[b])
t.a=4
t.c=a
return t},
x6:function(a,b){var t,s,r
b.a=1
try{a.c2(new P.q2(b),new P.q3(b))}catch(r){t=H.cj(r)
s=H.ci(r)
P.xI(new P.q4(b,t,s))}},
q1:function(a,b){var t,s,r
for(;a.gft();)a=a.c
t=a.gcm()
s=b.c
if(t){b.c=null
r=b.bN(s)
b.a=a.a
b.c=a.c
P.ft(b,r)}else{b.a=2
b.c=a
a.dF(s)}},
ft:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t={}
t.a=a
for(s=a;!0;){r={}
q=s.a===8
if(b==null){if(q){p=s.c
s=s.b
o=J.fD(p)
n=p.gaK()
s.toString
P.ka(null,null,s,o,n)}return}for(;b.gcp()!=null;b=m){m=b.a
b.a=null
P.ft(t.a,b)}l=t.a.c
r.a=q
r.b=l
s=!q
if(!s||b.ge2()||b.ge1()){k=b.gfM()
if(q){o=t.a.b
o.toString
o=o==null?k==null:o===k
if(!o)k.toString
else o=!0
o=!o}else o=!1
if(o){s=t.a
p=s.c
s=s.b
o=J.fD(p)
n=p.gaK()
s.toString
P.ka(null,null,s,o,n)
return}j=$.am
if(j==null?k!=null:j!==k)$.am=k
else j=null
if(b.ge1())new P.q9(t,r,q,b).$0()
else if(s){if(b.ge2())new P.q8(r,b,l).$0()}else if(b.ghm())new P.q7(t,r,b).$0()
if(j!=null)$.am=j
s=r.b
if(!!J.aq(s).$iscC){i=b.b
if(s.a>=4){h=i.c
i.c=null
b=i.bN(h)
i.a=s.a
i.c=s.c
t.a=s
continue}else P.q1(s,i)
return}}i=b.b
b=i.bM()
s=r.a
o=r.b
if(!s){i.a=4
i.c=o}else{i.a=8
i.c=o}t.a=i
s=i}},
Gv:function(){var t,s
for(;t=$.fx,t!=null;){$.i2=null
s=t.b
$.fx=s
if(s==null)$.i1=null
t.a.$0()}},
Gx:function(){$.uK=!0
try{P.Gv()}finally{$.i2=null
$.uK=!1
if($.fx!=null)$.$get$uG().$1(P.xw())}},
xs:function(a){var t=new P.jV(a,null)
if($.fx==null){$.i1=t
$.fx=t
if(!$.uK)$.$get$uG().$1(P.xw())}else{$.i1.b=t
$.i1=t}},
Gw:function(a){var t,s,r
t=$.fx
if(t==null){P.xs(a)
$.i2=$.i1
return}s=new P.jV(a,null)
r=$.i2
if(r==null){s.b=t
$.i2=s
$.fx=s}else{s.b=r.b
r.b=s
$.i2=s
if(s.b==null)$.i1=s}},
xI:function(a){var t=$.am
if(C.e===t){P.fy(null,null,C.e,a)
return}t.toString
P.fy(null,null,t,t.cC(a,!0))},
Hr:function(a,b){return new P.qD(null,a,!1,[b])},
xp:function(a,b,c){var t,s,r,q,p,o,n
try{b.$1(a.$0())}catch(o){t=H.cj(o)
s=H.ci(o)
$.am.toString
r=null
if(r==null)c.$2(t,s)
else{n=J.fD(r)
q=n
p=r.gaK()
c.$2(q,p)}}},
Gn:function(a,b,c,d){var t=a.bU(0)
if(!!J.aq(t).$iscC&&t!==$.$get$hc())t.c5(new P.qW(b,c,d))
else b.an(c,d)},
xf:function(a,b){return new P.qV(a,b)},
uJ:function(a,b,c){var t=a.bU(0)
if(!!J.aq(t).$iscC&&t!==$.$get$hc())t.c5(new P.qX(b,c))
else b.aH(c)},
G2:function(a,b,c,d,e,f,g){var t,s
t=$.am
s=e?1:0
s=new P.hW(a,null,null,null,null,t,s,null,null,[f,g])
s.eX(b,c,d,e,g)
s.f_(a,b,c,d,e,f,g)
return s},
Gm:function(a,b,c){$.am.toString
a.bG(b,c)},
wJ:function(a,b){var t=$.am
if(t===C.e){t.toString
return P.ux(a,b)}return P.ux(a,t.cC(b,!0))},
ux:function(a,b){var t=C.a.ao(a.a,1000)
return H.FS(t<0?0:t,b)},
ka:function(a,b,c,d,e){var t={}
t.a=d
P.Gw(new P.r2(t,e))},
xm:function(a,b,c,d){var t,s
s=$.am
if(s===c)return d.$0()
$.am=c
t=s
try{s=d.$0()
return s}finally{$.am=t}},
xo:function(a,b,c,d,e){var t,s
s=$.am
if(s===c)return d.$1(e)
$.am=c
t=s
try{s=d.$1(e)
return s}finally{$.am=t}},
xn:function(a,b,c,d,e,f){var t,s
s=$.am
if(s===c)return d.$2(e,f)
$.am=c
t=s
try{s=d.$2(e,f)
return s}finally{$.am=t}},
fy:function(a,b,c,d){var t=C.e!==c
if(t)d=c.cC(d,!(!t||!1))
P.xs(d)},
pD:function pD(a){this.a=a},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function pE(a){this.a=a},
pF:function pF(a){this.a=a},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
r3:function r3(a){this.a=a},
cC:function cC(){},
r5:function r5(a,b){this.a=a
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
eR:function eR(){},
jW:function jW(){},
dT:function dT(a,$ti){this.a=a
this.$ti=$ti},
k7:function k7(a,$ti){this.a=a
this.$ti=$ti},
k_:function k_(a,b,c,d,e,$ti){var _=this
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
pZ:function pZ(a,b){this.a=a
this.b=b},
q6:function q6(a,b){this.a=a
this.b=b},
q2:function q2(a){this.a=a},
q3:function q3(a){this.a=a},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
q0:function q0(a,b){this.a=a
this.b=b},
q5:function q5(a,b){this.a=a
this.b=b},
q_:function q_(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qa:function qa(a){this.a=a},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b){this.a=a
this.b=b},
dh:function dh(){},
ok:function ok(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oi:function oi(a,b){this.a=a
this.b=b},
oj:function oj(a,b){this.a=a
this.b=b},
ol:function ol(a){this.a=a},
oq:function oq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oo:function oo(a,b){this.a=a
this.b=b},
op:function op(){},
or:function or(a){this.a=a},
ou:function ou(a){this.a=a},
ov:function ov(a,b){this.a=a
this.b=b},
os:function os(a,b){this.a=a
this.b=b},
ot:function ot(a){this.a=a},
ow:function ow(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
om:function om(a,b,c){this.a=a
this.b=b
this.c=c},
on:function on(a){this.a=a},
oh:function oh(){},
di:function di(){},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
pH:function pH(a){this.a=a},
jY:function jY(){},
pN:function pN(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pP:function pP(b,c,a){this.b=b
this.c=c
this.a=a},
pO:function pO(){},
qp:function qp(){},
qq:function qq(a,b){this.a=a
this.b=b},
qC:function qC(b,c,a,$ti){var _=this
_.b=b
_.c=c
_.a=a
_.$ti=$ti},
qD:function qD(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
qW:function qW(a,b,c){this.a=a
this.b=b
this.c=c},
qV:function qV(a,b){this.a=a
this.b=b},
qX:function qX(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(x,y,a,b,c,d,e,f,r,$ti){var _=this
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
qn:function qn(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
eL:function eL(a,b){this.a=a
this.b=b},
qS:function qS(){},
r2:function r2(a,b){this.a=a
this.b=b},
qt:function qt(){},
qu:function qu(a,b){this.a=a
this.b=b},
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(a,b){this.a=a
this.b=b},
G4:function(a,b){var t=a[b]
return t===a?null:t},
uI:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
uH:function(){var t=Object.create(null)
P.uI(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
wg:function(a,b,c){return H.xB(a,new H.w(0,null,null,null,null,null,0,[b,c]))},
bX:function(a,b){return new H.w(0,null,null,null,null,null,0,[a,b])},
mK:function(){return new H.w(0,null,null,null,null,null,0,[null,null])},
ho:function(a){return H.xB(a,new H.w(0,null,null,null,null,null,0,[null,null]))},
hY:function(a,b){return new P.k2(0,null,null,null,null,null,0,[a,b])},
G5:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
E:function(a,b,c,d,e){return new P.qc(0,null,null,null,null,[d,e])},
tE:function(a,b,c){var t,s
if(P.uL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$i3()
s.push(a)
try{P.Gu(a,t)}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=P.wE(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
jk:function(a,b,c){var t,s,r
if(P.uL(a))return b+"..."+c
t=new P.c9(b)
s=$.$get$i3()
s.push(a)
try{r=t
r.N=P.wE(r.gN(),a,", ")}finally{if(0>=s.length)return H.v(s,-1)
s.pop()}s=t
s.N=s.gN()+c
s=t.gN()
return s.charCodeAt(0)==0?s:s},
uL:function(a){var t,s
for(t=0;s=$.$get$i3(),t<s.length;++t)if(a===s[t])return!0
return!1},
Gu:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=J.cP(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.F())return
q=H.x(t.gL())
b.push(q)
s+=q.length+2;++r}if(!t.F()){if(r<=5)return
if(0>=b.length)return H.v(b,-1)
p=b.pop()
if(0>=b.length)return H.v(b,-1)
o=b.pop()}else{n=t.gL();++r
if(!t.F()){if(r<=4){b.push(H.x(n))
return}p=H.x(n)
if(0>=b.length)return H.v(b,-1)
o=b.pop()
s+=p.length+2}else{m=t.gL();++r
for(;t.F();n=m,m=l){l=t.gL();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return H.v(b,-1)
s-=b.pop().length+2;--r}b.push("...")
return}}o=H.x(n)
p=H.x(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return H.v(b,-1)
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)b.push(k)
b.push(o)
b.push(p)},
a3:function(a,b,c,d){return new P.k1(0,null,null,null,null,null,0,[d])},
tQ:function(a,b){var t,s
t=P.a3(null,null,null,b)
for(s=J.cP(a);s.F();)t.h(0,s.gL())
return t},
wl:function(a){var t,s,r
t={}
if(P.uL(a))return"{...}"
s=new P.c9("")
try{$.$get$i3().push(a)
r=s
r.N=r.gN()+"{"
t.a=!0
a.a7(0,new P.mZ(t,s))
t=s
t.N=t.gN()+"}"}finally{t=$.$get$i3()
if(0>=t.length)return H.v(t,-1)
t.pop()}t=s.gN()
return t.charCodeAt(0)==0?t:t},
tR:function(a,b){var t=new P.mL(null,0,0,0,[b])
t.eS(a,b)
return t},
qc:function qc(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
qf:function qf(a){this.a=a},
qd:function qd(a,$ti){this.a=a
this.$ti=$ti},
qe:function qe(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
k2:function k2(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
k1:function k1(a,b,c,d,e,f,r,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.$ti=$ti},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qg:function qg(){},
fa:function fa(){},
hj:function hj(){},
jp:function jp(){},
hB:function hB(){},
aM:function aM(){},
qK:function qK(){},
mY:function mY(){},
hP:function hP(a,$ti){this.a=a
this.$ti=$ti},
mZ:function mZ(a,b){this.a=a
this.b=b},
mL:function mL(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qk:function qk(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
o2:function o2(){},
o1:function o1(){},
v4:function(a,b,c,d,e,f){if(C.d.bF(f,4)!==0)throw H.k(new P.bJ("Invalid base64 padding, padded length must be multiple of four, is "+H.x(f),a,c))
if(d+e!==f)throw H.k(new P.bJ("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.k(new P.bJ("Invalid base64 padding, more than two '=' characters",a,b))},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
fP:function fP(){},
fR:function fR(){},
lb:function lb(){},
pe:function pe(a){this.a=a},
pf:function pf(a){this.a=a},
qM:function qM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qO:function qO(a){this.a=a},
qN:function qN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
FQ:function(a,b,c){var t,s,r,q
if(b<0)throw H.k(P.bE(b,0,J.bZ(a),null,null))
t=c==null
if(!t&&c<b)throw H.k(P.bE(c,b,J.bZ(a),null,null))
s=J.cP(a)
for(r=0;r<b;++r)if(!s.F())throw H.k(P.bE(b,0,r,null,null))
q=[]
if(t)for(;s.F();)q.push(s.gL())
else for(r=b;r<c;++r){if(!s.F())throw H.k(P.bE(c,b,r,null,null))
q.push(s.gL())}return H.ww(q)},
wE:function(a,b,c){var t=J.cP(b)
if(!t.F())return a
if(c.length===0){do a+=H.x(t.gL())
while(t.F())}else{a+=H.x(t.gL())
for(;t.F();)a=a+c+H.x(t.gL())}return a},
yE:function(a,b){return J.xP(a,b)},
yH:function(a,b){var t=new P.dF(a,b)
t.d8(a,b)
return t},
yI:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.x(t)
if(t>=10)return s+"00"+H.x(t)
return s+"000"+H.x(t)},
yJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ic:function(a){if(a>=10)return""+a
return"0"+a},
vl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.z0(a)},
z0:function(a){var t=J.aq(a)
if(!!t.$iseQ)return t.A(a)
return H.nH(a)},
dA:function(a){return new P.cX(!1,null,null,a)},
dB:function(a,b,c){return new P.cX(!0,a,b,c)},
yd:function(a){return new P.cX(!1,null,a,"Must not be null")},
wA:function(a){return new P.er(null,null,!1,null,null,a)},
jD:function(a,b,c){return new P.er(null,null,!0,a,b,"Value not in range")},
bE:function(a,b,c,d,e){return new P.er(b,c,!0,a,d,"Invalid value")},
dg:function(a,b,c,d,e,f){var t
if(typeof a!=="number")return H.a7(a)
if(!(0>a)){if(typeof c!=="number")return H.a7(c)
t=a>c}else t=!0
if(t)throw H.k(P.bE(a,0,c,"start",f))
if(b!=null){if(typeof b!=="number")return H.a7(b)
if(!(a>b)){if(typeof c!=="number")return H.a7(c)
t=b>c}else t=!0
if(t)throw H.k(P.bE(b,a,c,"end",f))
return b}return c},
by:function(a,b,c,d,e){var t=e!=null?e:J.bZ(b)
return new P.mb(b,t,!0,a,c,"Index out of range")},
lh:function(a){return new P.pY(a)},
d1:function(a,b,c){var t,s
t=H.a([],[c])
for(s=J.cP(a);s.F();)t.push(s.gL())
if(b)return t
t.fixed$length=Array
return t},
EF:function(a,b,c,d){var t,s,r
t=H.a([],[d])
C.b.sm(t,a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
l:function(a,b){var t=P.d1(a,!1,b)
t.fixed$length=Array
t.immutable$list=Array
return t},
fB:function(a){H.H8(H.x(a))},
d5:function(a,b,c){return new H.hk(a,H.tI(a,!1,!0,!1),null,null)},
oC:function(a,b,c){var t,s
if(typeof a==="object"&&a!==null&&a.constructor===Array){t=a.length
c=P.dg(b,c,t,null,null,null)
if(b<=0){if(typeof c!=="number")return c.a1()
s=c<t}else s=!0
return H.ww(s?C.b.c8(a,b,c):a)}if(!!J.aq(a).$isff)return H.F5(a,b,P.dg(b,c,a.length,null,null,null))
return P.FQ(a,b,c)},
wW:function(){var t=H.F_()
if(t!=null)return P.wX(t,0,null)
throw H.k(new P.T("'Uri.base' is not supported"))},
wX:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
c=a.length
t=b+5
if(c>=t){s=((C.c.a2(a,b+4)^58)*3|C.c.a2(a,b)^100|C.c.a2(a,b+1)^97|C.c.a2(a,b+2)^116|C.c.a2(a,b+3)^97)>>>0
if(s===0)return P.wV(b>0||c<c?C.c.I(a,b,c):a,5,null).ges()
else if(s===32)return P.wV(C.c.I(a,t,c),0,null).ges()}r=H.a(new Array(8),[P.C])
r[0]=0
q=b-1
r[1]=q
r[2]=q
r[7]=q
r[3]=b
r[4]=b
r[5]=c
r[6]=c
if(P.xq(a,b,c,0,r)>=14)r[7]=c
p=r[1]
if(typeof p!=="number")return p.au()
if(p>=b)if(P.xq(a,b,p,20,r)===20)r[7]=p
q=r[2]
if(typeof q!=="number")return q.V()
o=q+1
n=r[3]
m=r[4]
l=r[5]
k=r[6]
if(typeof k!=="number")return k.a1()
if(typeof l!=="number")return H.a7(l)
if(k<l)l=k
if(typeof m!=="number")return m.a1()
if(m<o||m<=p)m=l
if(typeof n!=="number")return n.a1()
if(n<o)n=m
q=r[7]
if(typeof q!=="number")return q.a1()
j=q<b
if(j)if(o>p+3){i=null
j=!1}else{q=n>b
if(q&&n+1===m){i=null
j=!1}else{if(!(l<c&&l===m+2&&C.c.aG(a,"..",m)))h=l>m+2&&C.c.aG(a,"/..",l-3)
else h=!0
if(h){i=null
j=!1}else{if(p===b+4)if(C.c.aG(a,"file",b)){if(o<=b){if(!C.c.aG(a,"/",m)){g="file:///"
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
m=7}else if(m===l)if(b===0&&!0){a=C.c.aE(a,m,l,"/");++l;++k;++c}else{a=C.c.I(a,b,m)+"/"+C.c.I(a,l,c)
p-=b
o-=b
n-=b
m-=b
t=1-b
l+=t
k+=t
c=a.length
b=0}i="file"}else if(C.c.aG(a,"http",b)){if(q&&n+3===m&&C.c.aG(a,"80",n+1))if(b===0&&!0){a=C.c.aE(a,n,m,"")
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
else if(p===t&&C.c.aG(a,"https",b)){if(q&&n+4===m&&C.c.aG(a,"443",n+1))if(b===0&&!0){a=C.c.aE(a,n,m,"")
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
k-=b}return new P.qB(a,p,o,n,m,l,k,i,null)}return P.G8(a,b,c,p,o,n,m,l,k,i)},
wZ:function(a,b){return C.b.hc(a.split("&"),P.mK(),new P.pa(b))},
FT:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=new P.p7(a)
s=H.cx(4)
r=new Uint8Array(s)
for(q=b,p=q,o=0;q<c;++q){n=C.c.Y(a,q)
if(n!==46){if((n^48)>9)t.$2("invalid character",q)}else{if(o===3)t.$2("IPv4 address should contain exactly 4 parts",q)
m=H.fi(C.c.I(a,p,q),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
l=o+1
if(o>=s)return H.v(r,o)
r[o]=m
p=q+1
o=l}}if(o!==3)t.$2("IPv4 address should contain exactly 4 parts",c)
m=H.fi(C.c.I(a,p,c),null,null)
if(J.ct(m,255))t.$2("each part must be in the range 0..255",p)
if(o>=s)return H.v(r,o)
r[o]=m
return r},
wY:function(a,b,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
if(a0==null)a0=a.length
t=new P.p8(a)
s=new P.p9(a,t)
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
k=J.b_(C.b.gbb(r),-1)
if(l&&!k)t.$2("expected a part after last `:`",a0)
if(!l)if(!n)r.push(s.$2(p,a0))
else{j=P.FT(a,p,a0)
i=j[0]
if(typeof i!=="number")return i.av()
h=j[1]
if(typeof h!=="number")return H.a7(h)
r.push((i<<8|h)>>>0)
h=j[2]
if(typeof h!=="number")return h.av()
i=j[3]
if(typeof i!=="number")return H.a7(i)
r.push((h<<8|i)>>>0)}if(o){if(r.length>7)t.$1("an address with a wildcard must have less than 7 parts")}else if(r.length!==8)t.$1("an address without a wildcard must contain exactly 8 parts")
g=new Uint8Array(16)
for(q=0,f=0;q<r.length;++q){e=r[q]
if(J.aq(e).R(e,-1)){d=9-r.length
for(c=0;c<d;++c){if(f<0||f>=16)return H.v(g,f)
g[f]=0
i=f+1
if(i>=16)return H.v(g,i)
g[i]=0
f+=2}}else{if(typeof e!=="number")return e.d1()
i=C.d.aX(e,8)
if(f<0||f>=16)return H.v(g,f)
g[f]=i
i=f+1
if(i>=16)return H.v(g,i)
g[i]=e&255
f+=2}}return g},
G8:function(a,b,c,d,e,f,g,h,i,j){var t,s,r,q,p,o,n
if(j==null)if(d>b)j=P.Gg(a,b,d)
else{if(d===b)P.i_(a,b,"Invalid empty scheme")
j=""}if(e>b){t=d+3
s=t<e?P.Gh(a,t,e-1):""
r=P.Gc(a,e,f,!1)
if(typeof f!=="number")return f.V()
q=f+1
if(typeof g!=="number")return H.a7(g)
p=q<g?P.Ge(H.fi(C.c.I(a,q,g),null,new P.r4(a,f)),j):null}else{s=""
r=null
p=null}o=P.Gd(a,g,h,null,j,r!=null)
if(typeof h!=="number")return h.a1()
n=h<i?P.Gf(a,h+1,i,null):null
return new P.k8(j,s,r,p,o,n,i<c?P.Gb(a,i+1,c):null,null,null,null,null,null)},
x8:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
i_:function(a,b,c){throw H.k(new P.bJ(c,a,b))},
Ge:function(a,b){if(a!=null&&J.b_(a,P.x8(b)))return
return a},
Gc:function(a,b,c,d){var t,s
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.am()
t=c-1
if(C.c.Y(a,t)!==93)P.i_(a,b,"Missing end `]` to match `[` in host")
P.wY(a,b+1,t)
return C.c.I(a,b,c).toLowerCase()}if(typeof c!=="number")return H.a7(c)
s=b
for(;s<c;++s)if(C.c.Y(a,s)===58){P.wY(a,b,c)
return"["+a+"]"}return P.Gj(a,b,c)},
Gj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
if(typeof c!=="number")return H.a7(c)
t=b
s=t
r=null
q=!0
for(;t<c;){p=C.c.Y(a,t)
if(p===37){o=P.xd(a,t,!0)
n=o==null
if(n&&q){t+=3
continue}if(r==null)r=new P.c9("")
m=C.c.I(a,s,t)
l=r.N+=!q?m.toLowerCase():m
if(n){o=C.c.I(a,t,t+3)
k=3}else if(o==="%"){o="%25"
k=1}else k=3
r.N=l+o
t+=k
s=t
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.v(C.B,n)
n=(C.B[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(r==null)r=new P.c9("")
if(s<t){r.N+=C.c.I(a,s,t)
s=t}q=!1}++t}else{if(p<=93){n=p>>>4
if(n>=8)return H.v(C.k,n)
n=(C.k[n]&1<<(p&15))!==0}else n=!1
if(n)P.i_(a,t,"Invalid character")
else{if((p&64512)===55296&&t+1<c){j=C.c.Y(a,t+1)
if((j&64512)===56320){p=65536|(p&1023)<<10|j&1023
k=2}else k=1}else k=1
if(r==null)r=new P.c9("")
m=C.c.I(a,s,t)
r.N+=!q?m.toLowerCase():m
r.N+=P.x9(p)
t+=k
s=t}}}}if(r==null)return C.c.I(a,b,c)
if(s<c){m=C.c.I(a,s,c)
r.N+=!q?m.toLowerCase():m}n=r.N
return n.charCodeAt(0)==0?n:n},
Gg:function(a,b,c){var t,s,r,q
if(b===c)return""
if(!P.xb(C.c.a2(a,b)))P.i_(a,b,"Scheme not starting with alphabetic character")
for(t=b,s=!1;t<c;++t){r=C.c.a2(a,t)
if(r<128){q=r>>>4
if(q>=8)return H.v(C.m,q)
q=(C.m[q]&1<<(r&15))!==0}else q=!1
if(!q)P.i_(a,t,"Illegal scheme character")
if(65<=r&&r<=90)s=!0}a=C.c.I(a,b,c)
return P.G9(s?a.toLowerCase():a)},
G9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Gh:function(a,b,c){var t=P.fw(a,b,c,C.Y,!1)
return t==null?C.c.I(a,b,c):t},
Gd:function(a,b,c,d,e,f){var t,s,r
t=e==="file"
s=t||f
r=P.fw(a,b,c,C.D,!1)
if(r==null)r=C.c.I(a,b,c)
if(r.length===0){if(t)return"/"}else if(s&&!C.c.af(r,"/"))r="/"+r
return P.Gi(r,e,f)},
Gi:function(a,b,c){var t=b.length===0
if(t&&!c&&!C.c.af(a,"/"))return P.Gk(a,!t||c)
return P.Gl(a)},
Gf:function(a,b,c,d){var t=P.fw(a,b,c,C.l,!1)
return t==null?C.c.I(a,b,c):t},
Gb:function(a,b,c){var t=P.fw(a,b,c,C.l,!1)
return t==null?C.c.I(a,b,c):t},
xd:function(a,b,c){var t,s,r,q,p,o
t=b+2
if(t>=a.length)return"%"
s=C.c.Y(a,b+1)
r=C.c.Y(a,t)
q=H.rf(s)
p=H.rf(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){t=C.a.aX(o,4)
if(t>=8)return H.v(C.A,t)
t=(C.A[t]&1<<(o&15))!==0}else t=!1
if(t)return H.hC(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.c.I(a,b,b+3).toUpperCase()
return},
x9:function(a){var t,s,r,q,p,o,n,m
if(a<128){t=new Array(3)
t.fixed$length=Array
t[0]=37
t[1]=C.c.a2("0123456789ABCDEF",a>>>4)
t[2]=C.c.a2("0123456789ABCDEF",a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}q=3*r
t=new Array(q)
t.fixed$length=Array
for(p=0;--r,r>=0;s=128){o=C.a.fI(a,6*r)&63|s
if(p>=q)return H.v(t,p)
t[p]=37
n=p+1
m=C.c.a2("0123456789ABCDEF",o>>>4)
if(n>=q)return H.v(t,n)
t[n]=m
m=p+2
n=C.c.a2("0123456789ABCDEF",o&15)
if(m>=q)return H.v(t,m)
t[m]=n
p+=3}}return P.oC(t,0,null)},
fw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=!e
s=J.da(a)
r=b
q=r
p=null
while(!0){if(typeof r!=="number")return r.a1()
if(typeof c!=="number")return H.a7(c)
if(!(r<c))break
c$0:{o=s.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.v(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.xd(a,r,!1)
if(m==null){r+=3
break c$0}if("%"===m){m="%25"
l=1}else l=3}else{if(t)if(o<=93){n=o>>>4
if(n>=8)return H.v(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.i_(a,r,"Invalid character")
m=null
l=null}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.c.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.x9(o)}}if(p==null)p=new P.c9("")
p.N+=C.c.I(a,q,r)
p.N+=H.x(m)
if(typeof l!=="number")return H.a7(l)
r+=l
q=r}}}if(p==null)return
if(typeof q!=="number")return q.a1()
if(q<c)p.N+=s.I(a,q,c)
t=p.N
return t.charCodeAt(0)==0?t:t},
xc:function(a){if(C.c.af(a,"."))return!0
return C.c.be(a,"/.")!==-1},
Gl:function(a){var t,s,r,q,p,o,n
if(!P.xc(a))return a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(J.b_(o,"..")){n=t.length
if(n!==0){if(0>=n)return H.v(t,-1)
t.pop()
if(t.length===0)t.push("")}q=!0}else if("."===o)q=!0
else{t.push(o)
q=!1}}if(q)t.push("")
return C.b.bf(t,"/")},
Gk:function(a,b){var t,s,r,q,p,o
if(!P.xc(a))return!b?P.xa(a):a
t=[]
for(s=a.split("/"),r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.bT)(s),++p){o=s[p]
if(".."===o)if(t.length!==0&&!J.b_(C.b.gbb(t),"..")){if(0>=t.length)return H.v(t,-1)
t.pop()
q=!0}else{t.push("..")
q=!1}else if("."===o)q=!0
else{t.push(o)
q=!1}}s=t.length
if(s!==0)if(s===1){if(0>=s)return H.v(t,0)
s=J.rB(t[0])===!0}else s=!1
else s=!0
if(s)return"./"
if(q||J.b_(C.b.gbb(t),".."))t.push("")
if(!b){if(0>=t.length)return H.v(t,0)
s=P.xa(t[0])
if(0>=t.length)return H.v(t,0)
t[0]=s}return C.b.bf(t,"/")},
xa:function(a){var t,s,r,q
t=J.b0(a)
s=t.gm(a)
if(typeof s!=="number")return s.au()
if(s>=2&&P.xb(t.Y(a,0))){r=1
while(!0){s=t.gm(a)
if(typeof s!=="number")return H.a7(s)
if(!(r<s))break
q=t.Y(a,r)
if(q===58)return C.c.I(a,0,r)+"%3A"+C.c.ag(a,r+1)
if(q<=127){s=q>>>4
if(s>=8)return H.v(C.m,s)
s=(C.m[s]&1<<(q&15))===0}else s=!0
if(s)break;++r}}return a},
Ga:function(a,b){var t,s,r
for(t=0,s=0;s<2;++s){r=C.c.Y(a,b+s)
if(48<=r&&r<=57)t=t*16+r-48
else{r|=32
if(97<=r&&r<=102)t=t*16+r-87
else throw H.k(P.dA("Invalid URL encoding"))}}return t},
qL:function(a,b,c,d,e){var t,s,r,q,p,o
if(typeof c!=="number")return H.a7(c)
t=J.da(a)
s=b
while(!0){if(!(s<c)){r=!0
break}q=t.Y(a,s)
if(q<=127)if(q!==37)p=e&&q===43
else p=!0
else p=!0
if(p){r=!1
break}++s}if(r){if(C.n!==d)p=!1
else p=!0
if(p)return t.I(a,b,c)
else o=new H.kK(t.I(a,b,c))}else{o=[]
for(s=b;s<c;++s){q=t.Y(a,s)
if(q>127)throw H.k(P.dA("Illegal percent encoding in URI"))
if(q===37){if(s+3>a.length)throw H.k(P.dA("Truncated URI"))
o.push(P.Ga(a,s+1))
s+=2}else if(e&&q===43)o.push(32)
else o.push(q)}}return new P.pf(!1).fZ(o)},
xb:function(a){var t=a|32
return 97<=t&&t<=122},
wV:function(a,b,c){var t,s,r,q,p,o,n,m,l
t=[b-1]
s=J.b0(a)
r=b
q=-1
p=null
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
c$0:{p=s.Y(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
break c$0}throw H.k(new P.bJ("Invalid MIME type",a,r))}}++r}if(q<0&&r>b)throw H.k(new P.bJ("Invalid MIME type",a,r))
for(;p!==44;){t.push(r);++r
n=-1
while(!0){o=s.gm(a)
if(typeof o!=="number")return H.a7(o)
if(!(r<o))break
p=s.Y(a,r)
if(p===61){if(n<0)n=r}else if(p===59||p===44)break;++r}if(n>=0)t.push(n)
else{m=C.b.gbb(t)
if(p!==44||r!==m+7||!s.aG(a,"base64",m+1))throw H.k(new P.bJ("Expecting '='",a,r))
break}}t.push(r)
o=r+1
if((t.length&1)===1)a=C.G.hz(0,a,o,s.gm(a))
else{l=P.fw(a,o,s.gm(a),C.l,!0)
if(l!=null)a=s.aE(a,o,s.gm(a),l)}return new P.p6(a,t,c)},
Gr:function(){var t,s,r,q,p
t=P.EF(22,new P.r_(),!0,P.d8)
s=new P.qZ(t)
r=new P.r0()
q=new P.r1()
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
xq:function(a,b,c,d,e){var t,s,r,q,p,o
t=$.$get$xr()
for(s=b;s<c;++s){if(d<0||d>=t.length)return H.v(t,d)
r=t[d]
q=C.c.a2(a,s)^96
p=J.fC(r,q>95?31:q)
if(typeof p!=="number")return p.aJ()
d=p&31
o=C.d.aX(p,5)
if(o>=8)return H.v(e,o)
e[o]=s}return d},
d9:function d9(){},
bF:function bF(){},
dF:function dF(a,b){this.a=a
this.b=b},
U:function U(){},
dG:function dG(a){this.a=a},
l8:function l8(){},
l9:function l9(){},
eb:function eb(){},
fg:function fg(){},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
er:function er(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
mb:function mb(e,f,a,b,c,d){var _=this
_.e=e
_.f=f
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a){this.a=a},
ex:function ex(a){this.a=a},
dP:function dP(a){this.a=a},
bM:function bM(a){this.a=a},
nn:function nn(){},
jK:function jK(){},
l0:function l0(a){this.a=a},
pY:function pY(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,bJ,$ti){this.a=a
this.bJ=bJ
this.$ti=$ti},
C:function C(){},
n:function n(){},
jm:function jm(){},
p:function p(){},
bl:function bl(){},
d3:function d3(){},
dl:function dl(){},
ab:function ab(){},
d2:function d2(){},
es:function es(){},
dO:function dO(){},
B:function B(){},
c9:function c9(N){this.N=N},
ez:function ez(){},
pa:function pa(a){this.a=a},
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
r4:function r4(a,b){this.a=a
this.b=b},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(){},
qZ:function qZ(a){this.a=a},
r0:function r0(){},
r1:function r1(){},
qB:function qB(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pM:function pM(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
xy:function(a){var t,s,r,q,p
if(a==null)return
t=P.mK()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
GK:function(a,b){var t
if(a==null)return
t={}
J.uX(a,new P.r7(t))
return t},
GL:function(a){var t,s
t=new P.bj(0,$.am,null,[null])
s=new P.dT(t,[null])
a.then(H.dj(new P.r8(s),1))["catch"](H.dj(new P.r9(s),1))
return t},
rQ:function(){var t=$.vi
if(t==null){t=J.kg(window.navigator.userAgent,"Opera",0)
$.vi=t}return t},
vk:function(){var t=$.vj
if(t==null){t=P.rQ()!==!0&&J.kg(window.navigator.userAgent,"WebKit",0)
$.vj=t}return t},
yK:function(){var t,s
t=$.vf
if(t!=null)return t
s=$.vg
if(s==null){s=J.kg(window.navigator.userAgent,"Firefox",0)
$.vg=s}if(s)t="-moz-"
else{s=$.vh
if(s==null){s=P.rQ()!==!0&&J.kg(window.navigator.userAgent,"Trident/",0)
$.vh=s}if(s)t="-ms-"
else t=P.rQ()===!0?"-o-":"-webkit-"}$.vf=t
return t},
qG:function qG(){},
qI:function qI(a,b){this.a=a
this.b=b},
pz:function pz(){},
pA:function pA(a,b){this.a=a
this.b=b},
r7:function r7(a){this.a=a},
qH:function qH(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a){this.a=a},
r9:function r9(a){this.a=a},
kR:function kR(){},
kS:function kS(a){this.a=a},
xh:function(a){var t,s,r
t=new P.bj(0,$.am,null,[null])
s=new P.k7(t,[null])
a.toString
r=W.Q
W.e5(a,"success",new P.qY(a,s),!1,r)
W.e5(a,"error",s.gdV(),!1,r)
return t},
l2:function l2(){},
qY:function qY(a,b){this.a=a
this.b=b},
ma:function ma(){},
nk:function nk(){},
hF:function hF(){},
p0:function p0(){},
G7:function(a){var t=new P.qr(0,0)
t.f0(a)
return t},
qi:function qi(){},
qr:function qr(a,b){this.a=a
this.b=b},
qs:function qs(){},
bS:function bS(){},
kj:function kj(){},
e8:function e8(){},
lj:function lj(){},
lk:function lk(){},
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
lN:function lN(){},
cm:function cm(){},
m8:function m8(){},
d0:function d0(){},
mD:function mD(){},
iK:function iK(){},
j3:function j3(){},
n_:function n_(){},
n0:function n0(){},
d4:function d4(){},
nh:function nh(){},
iL:function iL(){},
j4:function j4(){},
nx:function nx(){},
nC:function nC(){},
nY:function nY(){},
oB:function oB(){},
iM:function iM(){},
j5:function j5(){},
kq:function kq(a){this.a=a},
ca:function ca(){},
oF:function oF(){},
oH:function oH(){},
ew:function ew(){},
oQ:function oQ(){},
d7:function d7(){},
p1:function p1(){},
iN:function iN(){},
j6:function j6(){},
pd:function pd(){},
ph:function ph(){},
pi:function pi(){},
hX:function hX(){},
qx:function qx(){},
qy:function qy(){},
qz:function qz(){},
bg:function bg(){},
d8:function d8(){},
fJ:function fJ(){},
eM:function eM(){},
fK:function fK(){},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
bC:function bC(){},
dX:function dX(){},
kP:function kP(){},
kl:function kl(){},
nP:function nP(){},
qP:function qP(){},
jJ:function jJ(){},
iO:function iO(){},
j7:function j7(){}},W={
yv:function(a){if(a!=null)return new Audio(a)
return new Audio()},
yw:function(a,b,c){var t={}
t.type=b
return new self.Blob(a,t)},
yG:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
G1:function(a){var t=new W.pK(a,null)
t.eY(a)
return t},
vy:function(a,b,c){return W.vz(a,null,null,b,null,null,null,c).b3(new W.m3())},
vz:function(a,b,c,d,e,f,g,h){var t,s,r,q
t=W.e_
s=new P.bj(0,$.am,null,[t])
r=new P.dT(s,[t])
q=new XMLHttpRequest()
C.L.hB(q,"GET",a,!0)
if(f!=null)q.responseType=f
if(c!=null)q.overrideMimeType(c)
t=W.Hq
W.e5(q,"load",new W.m4(r,q),!1,t)
W.e5(q,"error",r.gdV(),!1,t)
q.send()
return s},
vA:function(a,b,c){var t=document.createElement("img")
if(b!=null)t.src=b
return t},
eG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
x7:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
e5:function(a,b,c,d,e){var t=W.Gz(new W.pX(c))
t=new W.pW(0,a,b,t,!1,[e])
t.eZ(a,b,c,!1,e)
return t},
Gq:function(a){var t
if(!!J.aq(a).$isea)return a
t=new P.jT([],[],!1)
t.c=!0
return t.b5(a)},
Gz:function(a){var t=$.am
if(t===C.e)return a
return t.fU(a,!0)},
as:function as(){},
eK:function eK(){},
km:function km(){},
eN:function eN(){},
cI:function cI(){},
ku:function ku(){},
fY:function fY(){},
h0:function h0(){},
ky:function ky(){},
eO:function eO(){},
kB:function kB(){},
eP:function eP(){},
e9:function e9(){},
kI:function kI(){},
kM:function kM(){},
i8:function i8(){},
fS:function fS(){},
kQ:function kQ(){},
kT:function kT(){},
kU:function kU(){},
fT:function fT(){},
fU:function fU(){},
kV:function kV(){},
bI:function bI(){},
eS:function eS(){},
iC:function iC(){},
pK:function pK(a,b){this.a=a
this.b=b},
jx:function jx(){},
pL:function pL(){},
ia:function ia(){},
kW:function kW(){},
kX:function kX(){},
l1:function l1(){},
eT:function eT(){},
ib:function ib(){},
fV:function fV(){},
ea:function ea(){},
id:function id(){},
ie:function ie(){},
l4:function l4(){},
ig:function ig(){},
ih:function ih(){},
iD:function iD(){},
iX:function iX(){},
ii:function ii(){},
ij:function ij(){},
jZ:function jZ(a,$ti){this.a=a
this.$ti=$ti},
dp:function dp(){},
la:function la(){},
fX:function fX(){},
lg:function lg(){},
Q:function Q(){},
aF:function aF(){},
lJ:function lJ(){},
cc:function cc(){},
f1:function f1(){},
iE:function iE(){},
iY:function iY(){},
lK:function lK(){},
lL:function lL(){},
lM:function lM(){},
lP:function lP(){},
lQ:function lQ(){},
lS:function lS(){},
iy:function iy(){},
cl:function cl(){},
m0:function m0(){},
f3:function f3(){},
iF:function iF(){},
iZ:function iZ(){},
iA:function iA(){},
e_:function e_(){},
m3:function m3(){},
m4:function m4(a,b){this.a=a
this.b=b},
hd:function hd(){},
m7:function m7(){},
he:function he(){},
f5:function f5(){},
mc:function mc(){},
mA:function mA(){},
hm:function hm(){},
hn:function hn(){},
mS:function mS(){},
mX:function mX(){},
ht:function ht(){},
jr:function jr(){},
n1:function n1(){},
n2:function n2(){},
hu:function hu(){},
cn:function cn(){},
js:function js(){},
iP:function iP(){},
j8:function j8(){},
nf:function nf(){},
ng:function ng(){},
az:function az(){},
jv:function jv(){},
iQ:function iQ(){},
j9:function j9(){},
nj:function nj(){},
no:function no(){},
ns:function ns(){},
nu:function nu(){},
e1:function e1(){},
nz:function nz(){},
ce:function ce(){},
jC:function jC(){},
iR:function iR(){},
ja:function ja(){},
nE:function nE(){},
jE:function jE(){},
fl:function fl(){},
jF:function jF(){},
o0:function o0(){},
o3:function o3(){},
o4:function o4(){},
o5:function o5(){},
co:function co(){},
jH:function jH(){},
fZ:function fZ(){},
h1:function h1(){},
o8:function o8(){},
hH:function hH(){},
cp:function cp(){},
jI:function jI(){},
iS:function iS(){},
jb:function jb(){},
fm:function fm(){},
oa:function oa(){},
cg:function cg(){},
ob:function ob(){},
oc:function oc(){},
og:function og(){},
oD:function oD(){},
ch:function ch(){},
e3:function e3(){},
oK:function oK(){},
hM:function hM(){},
cO:function cO(){},
cF:function cF(){},
oR:function oR(){},
iT:function iT(){},
jc:function jc(){},
oS:function oS(){},
h_:function h_(){},
h2:function h2(){},
oW:function oW(){},
cr:function cr(){},
jM:function jM(){},
iU:function iU(){},
jd:function jd(){},
fq:function fq(){},
jN:function jN(){},
p_:function p_(){},
e4:function e4(){},
pb:function pb(){},
pc:function pc(){},
pg:function pg(){},
fr:function fr(){},
jO:function jO(){},
pl:function pl(){},
jR:function jR(){},
ps:function ps(){},
eB:function eB(){},
fs:function fs(){},
pJ:function pJ(){},
hU:function hU(){},
iV:function iV(){},
je:function je(){},
jX:function jX(){},
iW:function iW(){},
jf:function jf(){},
pQ:function pQ(){},
pR:function pR(){},
k0:function k0(){},
iG:function iG(){},
j_:function j_(){},
qb:function qb(){},
hZ:function hZ(){},
iH:function iH(){},
j0:function j0(){},
qA:function qA(){},
k4:function k4(){},
iI:function iI(){},
j1:function j1(){},
k6:function k6(){},
iJ:function iJ(){},
j2:function j2(){},
qQ:function qQ(){},
qR:function qR(){},
pS:function pS(a){this.a=a},
pV:function pV(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
eE:function eE(a,b,c,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=$ti},
pW:function pW(a,b,c,d,e,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=$ti},
pX:function pX(a){this.a=a},
bx:function bx(){},
lO:function lO(a,b,c,d,$ti){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=$ti},
qJ:function qJ(){}},T={
te:function(a,b,c,d){var t
H.Hf(a,"$isp",[P.C],"$asp")
t=new T.hf(a,null,d,b,null)
t.eR(a,b,c,d)
return t},
wo:function(a,b){return new T.np(0,a,new Uint8Array(H.cx(b==null?32768:b)))},
FW:function(a){var t=new T.pv(-1,0,0,0,0,null,null,"",[])
t.eV(a)
return t},
FX:function(a,b){var t=new T.pw(67324752,0,0,0,0,0,null,null,null,"",[],b,null,null,null)
t.eW(a,b)
return t},
f4:function(a){var t=new T.m5(null,0,2147483647)
t.eQ(a)
return t},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
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
db:function db(a){this.a=a},
hf:function hf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
np:function np(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(a,b,c,d,e,f,r,x,y){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y},
pw:function pw(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
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
px:function px(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
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
pu:function pu(a){this.a=a},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d,e,f,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r},
kA:function kA(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
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
_.x1=x1},
kD:function kD(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
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
_.x1=x1},
l3:function l3(){},
lZ:function lZ(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
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
_.x1=x1},
Fm:function(a,b,c,d){var t,s
t=[P.B]
s=H.a([],t)
t=new T.hG("Glitch",0.01,0.01,0.01,s,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.U]),null,null,b,c,d,!1,!1,!1,!1,!1,!1,Q.I(null,null,A.a4),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],t),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],t),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],t),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],t),H.a([],[E.M]),H.a([],[A.fN]),1)
t.a4(a,b,c,d)
return t},
hG:function hG(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
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
c2:function c2(a,b){this.a=a
this.b=b},
yO:function(a,b,c,d){var t,s,r,q
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;++q)t.ah(s[q],8)
return t.b4(b)},
yN:function(a,b,c,d){var t,s,r,q,p
t=H.cx(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=0;q<c;++q){p=r.a5(8)
if(q>=t)return H.v(s,q)
s[q]=p}return s},
yM:function(a,b,c,d){var t,s,r,q,p
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcN()
r=C.f.ak(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cM(c,0,null)
for(s=q.length,p=0;p<s;++p)t.ah(q[p],r)
return t.b4(b)},
yL:function(a,b,c,d){var t,s,r,q,p,o
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(o=0;o<c;++o){r=p.a5(q)
if(o>=t)return H.v(s,o)
s[o]=r}return s}},S={kk:function kk(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.b=b},i7:function i7(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},m2:function m2(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},mB:function mB(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},mV:function mV(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o_:function o_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},fh:function fh(){},uy:function uy(){},uz:function uz(){},uA:function uA(){},rW:function rW(){},rZ:function rZ(){},rM:function rM(){},uh:function uh(){},uC:function uC(){},uD:function uD(){},kG:function kG(){},u9:function u9(){},u3:function u3(){},mG:function mG(){},rR:function rR(){},rH:function rH(){},kZ:function kZ(){},tP:function tP(){},l_:function l_(){},nt:function nt(){},uo:function uo(){},ul:function ul(){},up:function up(){},rG:function rG(){},lW:function lW(){},kE:function kE(){},rL:function rL(){},rK:function rK(){},ua:function ua(){},uq:function uq(){},ub:function ub(){},rY:function rY(){},rX:function rX(){},un:function un(){},um:function um(){},oT:function oT(){},ut:function ut(){},rO:function rO(){},rP:function rP(){},uB:function uB(){},hs:function hs(){},tV:function tV(){},tW:function tW(){},tX:function tX(){},tY:function tY(){},ui:function ui(){},uj:function uj(){},uk:function uk(){},tU:function tU(){},u0:function u0(){},u1:function u1(){},tb:function tb(){},tc:function tc(){},td:function td(){},u2:function u2(){},tZ:function tZ(){},rI:function rI(){},uv:function uv(){},uw:function uw(){},uu:function uu(){}},K={bU:function bU(a,b){this.a=a
this.b=b},mE:function mE(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},nV:function nV(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c}},L={
ye:function(a,b,c,d){var t,s,r
t=P.B
s=A.dE
r=P.C
r=new L.aW(P.E(null,null,null,t,s),P.E(null,null,null,r,s),P.E(null,null,null,t,r),P.E(null,null,null,r,t))
r.j(0,$.b4,L.e("#FF9B00"),!0)
r.j(0,$.b6,L.e("#FF9B00"),!0)
r.j(0,$.b5,L.e("#FF8700"),!0)
r.j(0,$.bf,L.e("#7F7F7F"),!0)
r.j(0,$.be,L.e("#727272"),!0)
r.j(0,$.b8,L.e("#A3A3A3"),!0)
r.j(0,$.b9,L.e("#999999"),!0)
r.j(0,$.b7,L.e("#898989"),!0)
r.j(0,$.bd,L.e("#EFEFEF"),!0)
r.j(0,$.bc,L.e("#DBDBDB"),!0)
r.j(0,$.bb,L.e("#C6C6C6"),!0)
r.j(0,$.ba,L.e("#ADADAD"),!0)
s=[t]
t=new L.fH(0.01,0.01,0.01,0.5,a,new H.w(0,null,null,null,null,null,0,[X.G,P.U]),null,"","",!1,b,null,c,d,!1,!1,!0,1,r,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],s),t),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Blank","Null","Boring","Error"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),P.l(H.a(["Nothing","Errors","Glitches"],s),t),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],s),t),H.a([],[E.M]),H.a([],[A.fN]),Q.I(null,null,A.a4))
t.aj(a,b,c,d)
return t},
e:function(a){if(C.c.af(a,"#"))return A.vb(C.c.ag(a,1))
else return A.vb(a)},
fH:function fH(a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
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
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nX:function nX(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},M={kp:function kp(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},fO:function fO(a,b){this.a=a
this.b=b},kY:function kY(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},h4:function h4(){},bB:function bB(a,b){this.a=a
this.b=b},od:function od(a){this.a=a},po:function po(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},U={kt:function kt(){},mU:function mU(a){this.a=a},nm:function nm(a){this.a=a},oy:function oy(){},oz:function oz(a){this.a=a},oA:function oA(a){this.a=a},l6:function l6(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,dZ,e_,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
_.ab=ab
_.dZ=dZ
_.e_=e_
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
_.fr=fr
_.fx=fx
_.fy=fy
_.go=go
_.id=id
_.k1=k1
_.k2=k2
_.k3=k3
_.k4=k4
_.r1=r1
_.r2=r2
_.rx=rx
_.ry=ry
_.x1=x1},lz:function lz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},mW:function mW(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
this.a=a},ag:function ag(y,a,b,c,d,e,f,r,x){var _=this
_.y=y
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x},oU:function oU(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
FU:function(a){if(J.da(a).af(a," "))return C.c.ag(a,1)
return a},
pp:function pp(a){this.a=a},
pq:function pq(a,b){this.a=a
this.b=b},
pr:function pr(a,b){this.a=a
this.b=b}},O={kv:function kv(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},c6:function c6(){},dm:function dm(){},kz:function kz(a){this.a=a},ev:function ev(){},ik:function ik(){},
H7:function(a){var t,s,r,q,p,o,n,m,l,k
t=N.u7()
a=J.rD(a,P.d5("(href|src) ?= ?([\"'])(?!https?:)",!0,!1),new O.rs(t))
s=document
J.v_(s.querySelector("#navbar"),"beforeend",a,C.t,null)
if(J.b_(O.xD("seerOfVoid",null),"true"))P.zi(new O.rt(),P.d3)
r=new P.dF(Date.now(),!1)
if(H.nG(r)===4&&H.nF(r)===1)J.rA(s.querySelector("body")).h(0,"voidbody")
q=H.nG(r)
p=H.nF(r)
o=C.a.A(H.wr(r))
n=C.a.A(q)
m=C.a.A(p)
if(q<10)n="0"+n
if(p<10)m="0"+m
l=o+n+m
k=new A.hE(null,null)
k.c7(H.fi(l,null,null))
k.hy()
if($.FK||k.a.c_()>0.99)H.eI(s.querySelector("#today"),"$iseK").href=C.c.at("../",t)+"dead_index.html?seed="+l
else H.eI(s.querySelector("#today"),"$iseK").href=C.c.at("../",t)+"index2.html?seed="+l},
xD:function(a,b){var t,s,r,q
t=P.wW().gcS().n(0,a)
if(t!=null)t=P.qL(t,0,J.bZ(t),C.n,!1)
if(t!=null)return t
s=$.xJ
if(s.length!==0){r=J.y8(window.location.href,J.y4(window.location.href,"?")+1)
s=window.location.href
q="?"+r
s.toString
return P.wX(H.uS(s,q,"")+"?"+$.xJ,0,null).gcS().n(0,a)}return},
Hh:function(){var t,s,r,q
t=document
J.rA(t.querySelector("body")).h(0,"voidbody")
s=new W.jZ(t.querySelectorAll(".void"),[null])
for(t=new H.dL(s,s.gm(s),0,null,[null]);t.F();){r=t.d
q=J.xU(J.rC(r))
if(q==="none"||q.length===0)O.Hc(r)
else O.GY(r)}},
Hc:function(a){var t,s
if(a==null)return
t=J.aR(a)
s=t.gaL(a)
J.v2(s,!!t.$ishH?"inline":"block")},
GY:function(a){if(a==null)return
J.v2(J.rC(a),"none")},
eJ:function(a){var t,s,r,q
t="LIFESIMFOUNDCARDS"
if(window.localStorage==null){P.fB("saving isn't possible....you don't have local storage")
return}try{if(window.localStorage.getItem(t)!=null){s=window.localStorage.getItem(t)
r=J.dW(s,",")
if(!J.xR(r,a))window.localStorage.setItem(t,H.x(s)+","+a)}else window.localStorage.setItem(t,a)}catch(q){H.cj(q)
P.fB("Saving isn't possible....you don't have local storage")}},
rs:function rs(a){this.a=a},
rt:function rt(){},
rr:function rr(){},
cS:function cS(a,b,c,d,e,f,r,x,y,z){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z}},Y={oP:function oP(a){this.a=a},nM:function nM(a){this.a=a},kF:function kF(a){this.a=a},lX:function lX(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},lY:function lY(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},ni:function ni(b,a){this.b=b
this.a=a},dN:function dN(a,b){this.a=a
this.b=b},ac:function ac(a,b){this.a=a
this.b=b},cY:function cY(r,c,d,e,f,a,b){var _=this
_.r=r
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},c0:function c0(c,d,e,f,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.a=a
_.b=b},V:function V(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},i9:function i9(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},bD:function bD(c,d,a,b){var _=this
_.c=c
_.d=d
_.a=a
_.b=b},cU:function cU(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},kJ:function kJ(c,a,b){this.c=c
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
_.b=b},ix:function ix(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},jB:function jB(c,d,e,a,b){var _=this
_.c=c
_.d=d
_.e=e
_.a=a
_.b=b},nW:function nW(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o6:function o6(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
n6:function(){var t=0,s=P.bp(),r,q
var $async$n6=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:P.fB("loading big bads")
r=$
q=J
t=2
return P.cs(A.e0("BigBadLists/bigBads.txt",!1,!1,null),$async$n6)
case 2:r.wn=q.dW(b,"\n")
return P.bs(null,s)}})
return P.bt($async$n6,s)},
GI:function(a){var t,s,r,q,p,o
t=J.dW(a," ")
for(s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.bT)(t),++q){p=t[q]
o=J.b0(p)
r+=" "+(J.yb(o.n(p,0))+o.ag(p,1))}return r}},V={
H3:function(){A.re()
W.vy(C.c.at("../",N.u7())+"navbar.txt",null,null).b3(O.H5())
V.GP()},
GP:function(){var t,s,r,q,p,o,n,m,l
t=O.xD("staff",null)
s=new P.dF(Date.now(),!1)
if(H.nG(s)===4&&H.nF(s)===1){r="#"+H.x(t)+"Avatar"
q=document.querySelector(r)
r=J.aR(q)
p=r.gai(q)
p.toString
r.sai(q,H.uS(p,".png","_sauce.png"))}r=J.aq(t)
if(r.R(t,"authorBot"))O.eJ("N4Igzg9grgTgxgUxALhAJQQQwCYEsB2A5gAQCCAQgORjHm4QgA0I+mAtkquQnBB8ZmIBhAJ4AjCDEJMQAFwQAPWShDEIAd3wIYCVhxjEdmADa4AXghqyAFghHE4mfMTE8+CYggBuulwlnyBrgAZsQ2dsQAVlBgssTWOALEwQjqDuLaWrK4cMQADpgwsmAAdMQyYphwANaEMND42ABy7JwgAOL+AJL4ACq25BAKAPJiYNo+MCV5RDKyMLiEhNpCCfiIKgAMJQCsMmCIWmC9EACq+MYQNSoA2sAAOuDQ8AiPyI8ln4+Mj3qvKI9TuNiAB1LDGGxhCC0Nz8QRoCASWTfR7yJRvR5qTTaXStIJWXA6bBqUIQC72VwEEgAWWGAGVegAZACaxDAUDy2noBlk0J0hCgxkK8SgbCcpWI-QiYE5jQExmMJLCtkJxC8mFixHU4MhvKiMTiwSFcWgcVcvDhhkREFkZSlOmIuBoggAnAAWEqbADMAHYAKQONaIZWYOI2J2O51isxUkookCVGp1BrNVoYjrdPoDIajcYwSbTIjx+aLZYwVZORDp7Y+gBs8YOuksJ3Olxq6ZuAF14zp2RCwHTZKGwB2HvdfmnxwCpwA1LrU8coqfq4xQV5T95TgCMm0XIAAvoxiGOJxw95vHoyugAxACidNIpyEt73P2XJjX573O73h+Pe7+L8p1IdoXynN9HhXT8Nz3ABaLcdl-I8TxYScMSnIRhmpalbzQZ9Xz3KD13Qx54N3Kd927JhUQWJZtEHYdGUsPMOyon45FossGOKdojECUcALQ6dHgAESwromlIJp8PAwiP2I4SQB9JD-ynQCYIwrCcLwsCl0g+SgMeZSKLYmjS3oodilvABHKATFYx5KJkXtBWKbiwFuB5ULPAEQDnBdqJAIj0y3RzkNPf53hAMTqQkqT8MC4LfIADkczs5k4izGOY7RbnS5gSzomB3N4rBAjyjLzOKyywBsuzjAq-cgA")
if(r.R(t,"karmicRetribution"))O.eJ("N4Igzg9grgTgxgUxALhAaQEoAIBGBLCLABwEMBzJAGhADsSBbJVAWQUawGUAXKAEwRpcQ1LggAeQ1BADuNBDAEN5WPGCxcSAGwDWeGmXWEAZjDwDeaiDXUALBCsHy5XAHRYAKjYhh7m7-LUfNkMsACsoMC5cewUiBBIuPQNGRjUuGwSsOGhNXiwMgDd7HAQBYm9RPJwATywSLABWAAYAWmr4mBaIXKxoLi6jFq5oOBssegh6Nxk5BTpGGCxIkhguQPkCpKwoIixxLhgSFpMEMDGU06wTSdt7fiJ0yyMsDAReXjxXYRAcEjhtMgwaA0XgAOSUKBAAHUrGRNAgYTBtC4iPpvgc8GQKDAAMIZGiISFNFwAdga3zAiDkYHcEAAqjQ-P9IQBtYAAHXA0HgCE5yE5mFwBGI5F5wk58zF-JArHYrx8K1G8k5lE5ogkfM5M3kigWSw0q0CcRBW0S7AYJDAYC29RsUAo+QgMH4vWeCj+iSsKnoorUJBBWHZQZACk0CRIOHhQc54zYpzcADEnXsijBataeAkCNZ0ghaoV7P66kQiEDS3gEvYyHgjJQlnAFAI4CRdsnskRqqRli4gzRe548-kSEUaAByKIeqBaTS1Lidt51K5QTSaJYCUQE+x6LDSUraMA98U-P4AoFQEHgxia6Gw+GI5GosgqtWmLHyPH+xDX4lk5-gKmnLSDJMto14sgAun+ChgMuazcAkYBgRywaStGKBoRwACCGA4phHDuAAku4dIACIAKJoaqwYFFoUC8sG-LBgAjGhAC+kFHhib4wPBawADKnD4MBgRxqogFx2K8WAADi7qiMJ6EgBBf4SfIUlkQAjlOmhIWhqEMRh2G4fhRGkRRwZUZyNGaHRaGMZyLHBuxnKsXWHJcrAX6KYK+CEKQFB-qhimyqc9CfDYKn7Ne2pzEoiwlNWNBqAoYViDaAYpZa8mmnYsapLc+bDvYXgrPwvBuCFyUIEYOqbr0uaLBcajbvUPiaIMCg1XMiRaL0sAQDgTreG4A7pgaUTDFgfg+IYUCjDu4UpvI1TpFsfTWi6uYOPJzh1Gkdi1IciAhNopS7DsC3pLcU2VpEhhEHgcAHn+vz-ICwJgko14wvod5Og++gqa+2Ifpu36kg0f6UgIgH0oyED-CJUGnLBYBSbpKFfQZwZYTheGEcR5GUWh1m2djDlsaJL6YpJGj8YJyqKcpnHA2pdMyXJjPSszYmqTx7OadpGMSljmo40Z+OmUTFkk7R9Fi5yABMlMuW5nKQJ5UoCtgvkigFR5BdKIV+M6kUaopHCwO6miqPQdQBjQeA2HgNtgHbDZndthAxbqyijmoTUOHsWm9YwlqwAgI0HVgNCEH4+jKJ1tXHXAVvrktghgHWOBQFEeiRPEeSQOwkSHAndSaDtlY7k6PQQM8Ealx6C5GJiEd+gG9zQdaVhuJh4xZco9d5ZcGRqLH0h2AoeyaDNk1kBA0yyLVcVDusZRbQcuc2FHOoqJYjK1FY9hb-YCBV6uFx1v6eS5rUzbWHIqZ7JSLZbq4L0nu956fVeik-XCBAfFvAHkfEDGm758ReWlD+SGR5obUiAvDRGTMqYhhRpXNG7Nha0FFuhcWeMTKE3Ms+aics7JoUci5NBfMpICStFzTkPNqbcSkrJeI8kkYswgfzBCgstA4P0grEAuNjIEzMsTMhNl5b4M5AAZhViAdi3xoKoykqydyhtOSiMlsQv8pMtYgBYko8C6JWa8PpgwmAGiRZ-2lDoohEijwGOvMY5RIhzFsM5tY1AEEzE8PUiHTQrJTGsSAA")
if(r.R(t,"authorBotJunior"))O.eJ("N4Igzg9grgTgxgUxALhAJQQQwCYAICCAQgFIDkYuARgJYQB0IANCAHaYC2SqAmgmA8wAuCAB6CUIXBADuLBDARtOMXGEGYFFbAgQAHADYBPXJkGqInXADNqCurgA6IXvye5BACwTGwmQ41xvPlwFK30EOEFqFgBzdy9cbEwWOGi4sI4+ARBKTDgAaxiYaBZsADlMiQAVAAkASQBlRoAxOrKAUTpdWKYQQRhqGJj5AGEPZMQJAAY6AFYATl6wRDkwKogAVRZ9CAKJAG1gJ0hYRCdkJzorp0YnJQRzpxqYdleruhunYTFHyRk5BT3FTUCjSUxwDxpEy4ODQAwIXDsTD5BHQMxWYrsXDRMDUbTmSyUKBgLz8XBVLzGdhQQTCFQOBkgDwvN7XRkmCieby4KC6JLCeIIWyqSG6XRQop4+yfHJ5QrFKClCqcX4UkF1MAAGQgADcEHUAOJQPj8boxGX9QbDGBjCYPFBOGazGXLRR8dZbHYFX77AC6Ms0UH0gjADXUIZ9R0Z9wZj0ZhE1+AaAAUau0ALIAeQAGtxY0x8zrMPpjfmLoyAIz5gC+ASjd0yZfzaEz6ZGrfT7TQecZt0ZRZLD0Z5acVcZ1f9Bb6AyG8jDpi1JvkPsnt2nVrn4bABoUpmXDpAfotM+t85D7QAjlBiyunLXcEdwNB4PaLiB3jKYwe6iw6XworEACEwEWqIgi-FIsjyIomTAqC4KQrE0JWIq8jFrgujFIgYC4hALC4NI1CeCYYoaIoZgxOECDSoyP5-moaTAYB+YBFyxhwDA-jYjELAQAMSFcoktiCMYOwQPkFAYhYgqIs+AKuFOuQFEUJTlI2B4NBYCB4QgzRQAU0QACLUAg2BdLEx4bja4wpK+jpzC6Kzups2y7Pkt5ToGwahlukb5jGw75gmSaphmOY9p8-bFqWgWVjWdb+Y2sVOEmDQ1JmmpdhFBZRYOTZxeOq5fCem4LpqS4wB5a6WrOMBntuu50lVxVWfVl7XvoHkTr0XkhvVByPl+b7BSmaZZrmMoDqWB5ViA96Depb5oIaNRVO0mYbA0uDNBs3aTdFdkgLN3VCCVdVbuVOHyAcvq9DVp5bjuWB0jdd1nW1V7Fq91ZAA")
if(r.R(t,"jadedResearcher"))O.eJ("N4Igzg9grgTgxgUxALhAJQQQwCYAIBSaA5GLgEICSA8iADQgB2mAtkqgIpQJgAuAlhAa4MmADZ8eATzogeCAB48UIXBADuDBDARNWMXAAtMpAEYIA5lCE8IuAI5deAodrETJAOly4AggDM5fUxcUUFzXAAraBhNSVpcHgMESVxWBB5cNQkDBKTcTAAHAsxtBgyfKESIfQg-XIQ+fR1+bWEscSkvCh4STIaYbC8AFSSUgGsEBALccz5zc1FuBmr+BnDMDPVNUpYtfJNoDLVMSVJE5Nw4TCErULgx1OqEDxePIgBxADkqAGUKH6IAH5gbgAOpGOQANz2iQ2uD4YFeMhMmHu5hg0AY2E+u2UABEAKI-AAKVCGHgKaxkPBgc3MWgAwkYGIhlAAGDwAVhkYEQmjAQwgAFUGHcxsoANrAAA64GiiFlyFlr1ltFlugQitlIuwWl41zwIg6klVsrkii1Ki2Wh0u30RlIkFE0LwwT8CDUuGJQoAWj6ADJE-JY3AMgASPn9gc+7yDsIy518lQM1UMxhCmD4eEOuD8qfOzGGo1wYEmzBLtgKED4ZUWYERuBGNYemAOlUyEMuEF1l2uuGwEC8-ogEAeVl1MSwiXq+SKJWaufzeTg3YQXbKGNE4jWuRr5lI460mg2Ble3jDUFPuAAsiczPVtL1gsUeIEhEltIDTSAUWiMeOcVYS1CRJMkKTWb8aTpRlmQVFBZQ5ABmAB2b9eR0bhBRFMVLQlABdb9tDAKBRB4MAfh4DYwFwmVpXVXY6K1OiQC+X5-kYugOMhMQuA4pVmIARg4gBfAjONkWl5i0CiqP9bhSxgXCxLVCToJgGSyPeVxAhojiNT4jjWL+H4OLVZjuNEXjmP42UhOY0TIMk+l1MosiCQcMQlNlYT4hlOVYDgpUQBVcT9PgkAmWuek2jcKRIIUHhLVUDQbQ1fRiOwXVRRSQ8YH1LFSAQaEYEkRI9yLfpcFcY14VIYIwD4ZgSI2Zx4kENcwAMCQpHiSB4QyK4hHvGs-BrCQEFEFI4GZelXRDZhuz4UaEDwEwUkTNQuuYUhahCcaYDESbgxSYxOogRZMmyCtWASRq10EepGjTAqvFBCbRC8ZLtltPQ00dCAbv4G6HvOJ7mWwBtfBDCQElgBgdvbDjTpTRYSo42q9sCQ6TpLVz4WsLrHS6191q6tYKpSEwoHWEM-CgetgzwVhMoug003uGcGvLKx+FEeoUiMaFUkweQVtUdtuNpaBHVcs5O0gcdcDGGtsGCcwR0GRtCcurd+wQUaGHGo7BbXZYSy0AR6aqqYtDgemGsEBtv1-MZ0UxbEGPCkDSXJSlzEctTIpZTVwqQ1DxPQ-ksNFCB7i88SiJIsiNOo8KpT0hjrI4ihrx8d4KE+HwhmoT5TK4njNSzwS2RE3yM6AqvZR+dghQoPE8UDH4CU+Luy-MiuDOr2vcFo+iG6Y2U8Soa8C58T4GQJPvZQsqyJ5AASa-suvmP0xuQGJOefHDRfmLM5eB73jfh9HxhM7Xn5PgJHwAGkfAPhkKCGABNJeQBXyu15Xy3iPeuAD4LMR+D4NADIfA-GLkMIUhJf7-0HrZTe3lt5jzATZEARIhgEgJNeZBF816IWvqA1BIAyBoB8AXT+iCT6mn7pZbBHEgEYJATvO+4DZT4CoGQAAYv6F+RJiEsMoZychXDx48IitPa8BJoGMM4sw1esj2EgB8pwrBlD-QUAEUSHwQoF5iLUTgjRWib67zXnnZRZ8-4kNkQAWgEpI4BVjuE4LDFQNAvdT7l3EXvAAHFInRe985oCGGGUxrCh7uIoXvGBAiBGz2LlQUu-jVGxLQaE2+MicGwJ+N4wMaAf6ZPPoEwB6DNHKTNE5aSss5L1i0PHFSUEpIuSolpKcLS04ePyYZb4xkYmUIAEwiVqapDpKd3JQE8mnMSljZQK3gCHIKIUVJhSCj4OAiACgZCNO4eKFpwpfVSnaa2bgABe3Bchwmqu4DGm04QwwRBTPWcAsxrhsLjKY+QGo9jzEER4rAygJFsIsBMeQKhVHSgULAYwvAcUIMgXAQorxhmSF0fsggiAZDGMsT0m0dC4EkNAIgrRXDYD3LuBst5JDDR6KQbAsAaWJh8AUWkfMBEjlEKQTl1xEU3jvGuCQvQWW0h3ImAALAAegEohXAYZDqqDqAI3YuAqZ8FEHgKABRsUDgYHi-IcAeBzK3FNecdyMhNWmq9TszANiBFIAiUl5LKVYGpTuCQ9q+DTVSFgeGbqoCXKZpTAQ8RNp+pyKwa4pAyVQApWuAoogTg0vEO6EsjVI1dX9bGoNCak24AUCm6obK8idRhvGXAFB4hsz6o6hgKQIDnDyvEE2uACjtgbVAf1u1oilmdLcmsNgiyCuDUOCwPrcBf2gIzTtCAIAprXOICYwbhZrphiqtQKwcjTvBOkD8-UwBEHyP2KAzATDFvkPC2koLKJ8xXMHfZe013+iWggH42bVBBCEDgalpq+BC3THTDm6IoBXoOgiGl5gNWrrXKCOkqMv3llTJAVgZUdwRHphkPqfhU2bHbAIueU9rz-NwD8MgQo0BkBQ71SYNL4VLouvBjscIKA4oxth3grwPA9v9WrDWu5yY1sMEutcHHBpK0mNMAc5aETxA4x2ht1wUgprjb1WwjbSZ7lIBx44YKfkDjHQwB4Cb23tV4JNeIQKSx6qrDAVY4RAYGH-OYHIZVETo28NaHYv0ERGoyNVI6xFWjPIyKp1V1qA3XB4PEKmEWMiLGMFCi4HbEw3KEKx1EezKLByiw8qQMxqw7lswWXAhKPDO1RK7f8WJAJrMnkSH24F-biXac5IOgUEJcjQnyTCwoY5xwWYRbgSdyKy10tI7J+8i4UG7iY8pDjKnqOqQ5dr9TOlkSaQpVpdS1Ip26RsXpQV07TcoUZdiS2UF73GfZSZHWGlUVmfM07-SZuFOKYospTCKlmI4mtxZeEZCJ1IhNqiko-JbNlJdky4kUHhSEjU6km2U47a0JKYH9BHtbbAEdwImOUcHdli90QhPhJAA")
if(r.R(t,"someBody"))O.eJ("N4Igzg9grgTgxgUxALhAGQQQxgOwASYBG0ALnoTBAA5IA0IOmAtkqgMoQvEAmAngQEscAcjIALTFSq8Q9EggAeJFCAgB3HAhgJGLGHgBmQ7mDwkxCJmAQAbA3iEE8YiGCoCSmG7TxhPMIQBzAjJIFjxuKG4EB3xMZ0wyAxtEmyEggDo8NijonBteHwkySOjfD1M-GEwBQLEyKCoCHG48OBsIOABrU3NLWLMLQ0xELIAJdTwYKIQM2RBCEa7AyigWgDlmVhAJtw8vQgRuDKocQPmSAMDArQBhCRxEFQAGDIBWebBETTAAFQgAKr5TpdFQAbQAuvNtGAoDYSGA2J4EeDgAAdBhbDHIDEAJQAkgBxMa-ACiAHkAWw8AAxAG4gCaGNoGIAbl4oAhsRiAOwYgC+PnRmJY3JA5IAsut8WhyQBBX5jfHrQnMtkcrkoDEAZgFQoxuk1OJAbFJypp+NJaAAItlbnK0HLCaS1SB2TZOWKALQANgFULkVxuMCRiTAGDA1hg4IDIEutWDoYRhO0iS0MYuQa0SbApIAjlAvBn+UA")
if(r.R(t,"dilletantMathematician"))O.eJ("N4Igzg9grgTgxgUxALhAGQQQxgOwJY4DmABJgEbQAuxAIgLIgA0IOmAtkqgMpsQDWCWgkoI4lCDGIAhTJREwAnsTQQA7kxAiAHpRQg1OBDASsOMAORhiYADYIEAB2J4rBeTCgORAE2JklmMQAFniEQQC0DniUcEEIvrF4MA4AdMTSCABmEoIGRibsRsRwmDjE3i4lML4hYAD0cZJwEDhgcHjQYIZgrtSJyVaYhJgEadJQ1HnGpkWYNsaY3kqxpYTxxJRxfrLyeAhWmy7EClgwYwCSB42CgWCixtRgvALlwqLiklMFZuUQ+zjmah8HBqUgUCYAfgAhBoyJg4HxCDBoDhvAA5Qp6Wz2Lx4Dj0FIOIgaSgwUJrGAAYSCpUQegADCkAEwaNomfYAFQgAFUcDYIAi9ABtAC6GmMYCgNkoYC4lFkYGFYuYpPJRjlCowPSMwuAAB0WIUDcgDVIAEoAQXOaPOHO5NAAogbGAaAG5zKAIY0GgAsBoAvsrNGTCBSNTKAOILeRKkkhsPymUOgCOUDmsf9QA")
if(r.R(t,"tableGuardian"))O.eJ("N4Igzg9grgTgxgUxALhAdQJYDsAEAVAcQHIwcARBAQwBMcBlBMMDCLEAGhC0oFslU6aAHI4AggCUAwjgCMHEABcEADwUoQZSlgDmAOn04AkqQUALSgvq8oCADY4AYqwWVsCdjgAOGWxEsQAMxwzBHoXGDBTDE8cSUoYBBcAawQYD2wA3mhSB2xKewAhCCYAfhwATWgcACNE3RwIAHcsVIRuPhgcaghGGosFW1DGjDMcKJ4G3BCuhDgkhqDpuITk1PTcCBhqkYaAN1Tg01DPWy1EnAAtNoUYKB4AWhkcSlIdjFJqiB5a2mqAT0OoWqsCw2G0OEaCTmC0BYXikWisReKQU9SaLQS7QOngSnnivQCm2euBUcBGYL6CgGCH09WBlh2ChBpGg-haELs9hOlEQtE8UCwcFMwQgsLASSgtns7xwbWg2mFClF1RgFOmuW4hWKpG6zV08mqPKS2hg0Cw1CEvH4IACGAVChkuk8OnkNzt2lSknMgutAAZdABWeRgRAtMB4CAAVSwvjm6gA2sAADrgaDwBAp5Ap+45lPsFNYzMpwQiCTSABMeZTSlURY0bT0BmMhwsVh4NnsTiwLjcHmmRRaRxo60yPGyjjyWtKFSqtVRDWaqUxVs63V6hqpgwhI2F4xmCBitRaFkVRxwYFgmUQMIAaqlfJjHh5hmZsLC4JR9i3LKZsr1pnQ0D2JIMB-GALj2IEsIAArMKwGBwDgAAymy0JaABe8RJPiWD1ChEBJKQtgYCkbYds81SQFsCC0EcnSQJKz5REKODaJ+oR7pQrG+MMOg1LYNiyn8NILhibQrl4uL4qQhKdFosrKGSCgUhu1K0jUUAMpYTIwFgLKad+ODCZYlBsW+jKUCkLIxgCrBDJyXinLyXgCixSpihKUoijUqp8eqk44EUTBdOiuhViAhpzCaZoWlada2va5ZOjo4VutoHowF6WiIHW-oACzhSGbSMBG0axkkdaJkm1WprAOU1VmNU5vc1VVjVhYNa1IAlmIUg4AAzF1+Y1TWChdY1KYUDoUCmOpzZmK2dDWHYjjOK4LQeGAswrDggw0AcUHTLBLCgoh4iMLAHo+iOWRQDkAVBWAZSVFANR1KJrRYquPQfP0W4vruGATNgzDUKE0xwM4pr2KaXwwtMtqajgBB+C4pgxghwoALKzOYHhwLAmIDACb6bNs-hBAAovEZh4RABFESRoRLe2dgkA01Q9i0tDTAxtgsosZ5+HR54YMoyOo5Q6PESxH6eFzpBaLQrC2ACLQ0dZoRjgkb2yRxoQfrgPLKbsFjg2eKNUlLGNCuzNyCZ4TSpGii7Lh0kkHtJOCycSClKSpf00gY9I4IyzINAZYNgN4ShvRSCAAI5QNEng0duoyO40BzxNr6TaZZvQq7Z7JZ153LOfygqKqKvOefY7kqmqZ4avkgXaiFepDV1kXGqaAqxXw41dQlpgKP1yXaF3I2qulnrevVRY1f6g01cNKZFWGpUxhAcxDzVVWtV1DHpofe+nyAzWn6vV8FnFV8oDf3XCL10gFffa+H4oKhjffE2f1N2gbBzRMOYSwLNyJdhcKCdwXhTBgQQq3BA3wIDUCBtceGZ4KDgVNMJGA7NAKMVDlgUc44W5TiejOV6c4XZiS+iFdcgd06AwmBYCAMQlgvGpDCMgd0FAeFVMwPirJvamgmNMaK-dJiXGuLcB4MgmKtEODKfI9hahsVwshemhFdpMzImzUgZluY4Eht2aGexs7nkaDnGE3AsAQHuNQXhXgaYIUGGAJimMcA8ALjgKA7Czz7FAqxPu5oxihHAkrayNDPoSRxJ7BIMkiTyVJOSPiqlBjqRDngAAEoYOg+BDBY0ph4LipcuROTTpXNyNczziklPYYYXkhAAHk8BvVlHYqACpvKNz8s3B67ddQaPRDE926tqAmBqdgeY5gYBgzkqEm4AJTLrVpI-D+3cjQSPNJaQev9H4jwUHlCe6zH5pQyllH0j8-5dX9JWd+j8N4lSjNvXe+z74HxvvfY+C8vmfxuX87MuZAWfw2YCrgd8QWdShTVHqZYcB5WQDgcQlMyDNJhdfDFX9axYoBX8kAhgFB2zQdEt2BxzCJMkcIxooDARqwQGndyiMVEAn5CZEkiyamhDIW3YKUE6BA1IJgMwwihB3FqDAeo4CVqQPWqEGUF4cTvDTv8D6ZK8GkCsTACYSCVQ8hgTSzxCQeDYAmWMIGMIaWijPAkFlocwDqS4gEAU9xfC7DBM+ZVcAYBGgpAEVUbRqBSuWjDJBurUikCiKQJBfgTruJwAkAAVrMZSfSDZQwgPXTBjAbgQFwfgoCYwXjmM6CEHgJTQkymZVKAE-qGU9NCEkHwgxaAA2EdMIG2sIIjABCaLQShfgAlqBSPEMAKawiwbm-NpACG2HqIS4IBdSB2K8Zsc28k7IcjLhUlyVdGVcvPHXby3RzwQDClisF+Ke7bIHhmXFGKUyHOOc6SeF6H2KBnhc+ed6YUPyxTId9l6vngFDM8sqO8Kr3qxfGAAuoB99CTJQKDAHQFwyH314uA58h9v6Oo4d-Zh-D99xDNKxpIUjRTxDlCI7+oDNHP6mwEj++jwHCMsZTG-djj8AC+cG31YvOakVDFgwBIUYFtGAGH32wfgwJz9Qm0NgAILapQkmoO-uw1xz+eGtP-N08R0j5GsaUeo-p0FZmGP5BsBZs+FmQABhszVXjsnf2CZgMJ5DlMk75Ck9Bvjv7nMPPvoh2wyGPNgGuY-TT4KdMgr-b+kjZGKOUyoy5qFIBGPWfU+lgDWLAvn0vR+90CmRNiaYKkSLHz-Pmfvm58LymqCqcq+fGTQXz51cU15qAPn3kteTFi2L4K2Pn0S0ZkzaW4uZeY3F4bn8V4Beq11fLHAuohbC4ps+IBou3z2efPFIBRvJdS21yzTHmuf1y+fZba8iuz3c4psrEnNutbatWeT92RMNbNmpxeKYXsrensVj7nnvO2Ge-18+g3fuf0O8ZlLpmCuPym+drq9yrv+ZAM5lbIA1soY2w-LbEOIW7fiwdwzR2EcA5TMj6FKZLuY7g9jjrpXxMVYJzJpn736sqbZ1mLbjP8y3YyuFrrPn2dE7w6T2H43MXU6sz+0n9Ose8fkLj8LCZkzE4zAT6X8PwrI4JwBhnroucPdZzABMMGTdA+5411Ilvrd3ZF6DjXO3td8916l7HBu+e+hTCr7jQA")
r="#"+H.x(t)
p=document
o=p.querySelector(r)
if(o!=null)J.rA(o).ae(0,"void")
n=H.eI(p.querySelector("#layWaste"),"$iseP")
n.toString
W.e5(n,"click",new V.rb(),!1,W.u_)
r=P.B
m=B.eA
l=new B.oM(P.a3(null,null,null,r),P.bX(r,m),P.bX(r,m),!1,null)
m=new A.hE(null,null)
m.c7(null)
l.e=m
l.bg("headcanon")
p=J.xY(p.querySelector("#askAB"))
W.e5(p.a,p.b,new V.rc(l),!1,H.P(p,0))},
rb:function rb(){},
rc:function rc(a){this.a=a},
l5:function l5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
lR:function lR(a){this.a=a},
n3:function n3(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},
nq:function nq(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},
oL:function oL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
z_:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
s=Math.pow(256,e)
c.toString
r=H.cM(c,0,null)
for(q=r.length,p=8*e,o=0;o<q;o=m){if(o<0)return H.v(r,o)
a=r[o]
n=1
while(!0){m=o+n
if(m<q){l=n+o
if(l>=q)return H.v(r,l)
l=r[l]===a&&n<s}else l=!1
if(!l)break;++n}t.ah(n-1,p)
t.ah(a,8)}return t.b4(b)},
yZ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=e*8,p=0;p<c;){o=r.a5(q)+1
n=r.a5(8)
for(m=0;m<o;++m){l=p+m
if(l<0||l>=t)return H.v(s,l)
s[l]=n}p+=o}return s},
rV:function(a){return new V.lf(a)},
rU:function(a){return new V.le(a)},
yW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcN()
r=C.f.ak(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(256,e)
c.toString
p=H.cM(c,0,null)
for(s=p.length,o=8*e,n=0;n<s;n=l){if(n<0)return H.v(p,n)
a=p[n]
m=1
while(!0){l=n+m
if(l<s){k=m+n
if(k>=s)return H.v(p,k)
k=p[k]===a&&m<q}else k=!1
if(!k)break;++m}t.ah(m-1,o)
t.ah(a,r)}return t.b4(b)},
yV:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(r=e*8,o=0;o<c;){n=p.a5(r)+1
m=p.a5(q)
for(l=0;l<n;++l){k=o+l
if(k<0||k>=t)return H.v(s,k)
s[k]=m}o+=n}return s},
rT:function(a){return new V.ld(a)},
rS:function(a){return new V.lc(a)},
yY:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcN()
r=C.f.ak(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
q=Math.pow(2,32)
c.toString
p=H.cM(c,0,null)
for(s=p.length,o=0;o<s;o=m){if(o<0)return H.v(p,o)
a=p[o]
n=1
while(!0){m=o+n
if(m<s){l=n+o
if(l>=s)return H.v(p,l)
l=p[l]===a&&n<q}else l=!1
if(!l)break;++n}k=C.f.ak(Math.log(n)/0.6931471805599453)+1
t.ah(k-1,5)
t.ah(n-1,k)
t.ah(a,r)}return t.b4(b)},
yX:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(o=0;o<c;){n=p.a5(p.a5(5)+1)+1
m=p.a5(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
lf:function lf(a){this.a=a},
le:function le(a){this.a=a},
ld:function ld(a){this.a=a},
lc:function lc(a){this.a=a}},A={kL:function kL(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
i:function(a,b,c,d,e){var t=new A.a4(c,e,null,a,!1,P.a3(null,null,null,G.a0),0,3)
t.J(a,b,c,!1,e)
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
ms:function ms(){},
mr:function mr(){},
fN:function fN(){},
fQ:function(a,b,c,d){var t=new A.dE(null,null,null,null,!0,0,0,0,!0,0,0,0)
t.eP(a,b,c,d)
return t},
rN:function(a,b,c,d){var t=A.fQ(0,0,0,255)
t.b=C.a.a9(C.d.ak(a*255),0,255)
t.e=!0
t.y=!0
t.c=C.a.a9(C.d.ak(b*255),0,255)
t.e=!0
t.y=!0
t.d=C.a.a9(C.d.ak(c*255),0,255)
t.e=!0
t.y=!0
t.a=C.a.a9(C.d.ak(d*255),0,255)
return t},
yC:function(a,b){if(b){if(typeof a!=="number")return a.aJ()
return A.fQ((a&4278190080)>>>24,(a&16711680)>>>16,(a&65280)>>>8,a&255)}else{if(typeof a!=="number")return a.aJ()
return A.fQ((a&16711680)>>>16,(a&65280)>>>8,a&255,255)}},
vb:function(a){return A.yC(H.fi(a,16,new A.r6()),a.length>=8)},
dE:function dE(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
r6:function r6(){},
wk:function(){if($.wi)return
$.wi=!0
Z.z9()},
e0:function(a,b,c,d){var t=0,s=P.bp(),r,q,p,o,n
var $async$e0=P.bu(function(e,f){if(e===1)return P.br(f,s)
while(true)switch(t){case 0:A.wk()
t=$.$get$cR().U(0,a)?3:5
break
case 3:q=$.$get$cR().n(0,a)
p=J.aq(q)
if(!!p.$isdM){o=q.b
if(o!=null){r=o
t=1
break}else{r=p.cz(q)
t=1
break}}else throw H.k("Requested resource ("+a+") is an unexpected type: "+H.x(J.uZ(q.b))+".")
t=4
break
case 5:t=!c?6:7
break
case 6:t=$.tT==null?8:9
break
case 8:t=10
return P.cs(A.mR(),$async$e0)
case 10:case 9:n=$.tT.ev(a)
t=n!=null?11:12
break
case 11:t=13
return P.cs(A.mM(n),$async$e0)
case 13:if(!$.$get$cR().U(0,a))$.$get$cR().i(0,a,new Y.dM(a,null,H.a([],[[P.eR,,]]),[null]))
r=$.$get$cR().n(0,a).b
t=1
break
case 12:case 7:r=A.EH(a,!1,d)
t=1
break
case 4:case 1:return P.bs(r,s)}})
return P.bt($async$e0,s)},
mR:function(){var t=0,s=P.bp(),r
var $async$mR=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:r=$
t=2
return P.cs(A.e0("manifest/manifest.txt",!1,!0,$.vv),$async$mR)
case 2:r.tT=b
return P.bs(null,s)}})
return P.bt($async$mR,s)},
EG:function(a){if(!$.$get$cR().U(0,a))$.$get$cR().i(0,a,new Y.dM(a,null,H.a([],[[P.eR,,]]),[null]))
return $.$get$cR().n(0,a)},
EH:function(a,b,c){var t
if($.$get$cR().U(0,a))throw H.k("Resource "+a+" has already been requested for loading")
if(c==null)c=Z.vu(C.b.gbb(a.split("."))).a
t=A.EG(a)
c.b2(A.wh(a,!1)).b3(new A.mP(t))
return t.cz(0)},
mM:function(a){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$mM=P.bu(function(b,a0){if(b===1)return P.br(a0,s)
while(true)switch(t){case 0:t=3
return P.cs(A.e0(a+".bundle",!1,!0,null),$async$mM)
case 3:q=a0
p=C.c.I(a,0,C.c.e9(a,$.$get$wj()))
o=P.d3
n=new P.dT(new P.bj(0,$.am,null,[o]),[o])
m=H.a([],[P.cC])
for(o=J.xV(q),l=o.length,k=[[P.eR,,]],j=[null],i=0;i<o.length;o.length===l||(0,H.bT)(o),++i){h=o[i]
g=J.aR(h)
f=Z.vu(C.b.gbb(J.dW(g.gG(h),"."))).a
e=p+"/"+H.x(g.gG(h))
if($.$get$cR().U(0,e)){m.push(A.e0(e,!1,!1,null))
continue}d=H.eI(g.gbd(h),"$isd8")
if(!$.$get$cR().U(0,e))$.$get$cR().i(0,e,new Y.dM(e,null,H.a([],k),j))
c=$.$get$cR().n(0,e)
m.push(c.cz(0))
f.ba(d.buffer).b3(new A.mN(f,c))}P.zj(m,null,!1).b3(new A.mO(n))
r=n.a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$mM,s)},
hp:function(a,b){var t=0,s=P.bp(),r,q,p,o,n
var $async$hp=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:if($.$get$tS().U(0,a)){r=$.$get$tS().n(0,a)
t=1
break}q=W.fl
p=new P.bj(0,$.am,null,[q])
o=document
n=o.createElement("script")
o.head.appendChild(n)
W.e5(n,"load",new A.mQ(new P.dT(p,[q]),n),!1,W.Q)
n.src=A.wh(a,!1)
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$hp,s)},
wh:function(a,b){if(C.c.af(a,"/")){a=C.c.ag(a,1)
b=!0}else b=!1
if(b)return H.x(window.location.protocol)+"//"+H.x(window.location.host)+"/"+a
return C.c.at("../",N.u7())+a},
mP:function mP(a){this.a=a},
mN:function mN(a,b){this.a=a
this.b=b},
mO:function mO(a){this.a=a},
mQ:function mQ(a,b){this.a=a
this.b=b},
nr:function nr(){},
jy:function jy(){},
hE:function hE(a,b){this.a=a
this.b=b},
re:function(){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$re=P.bu(function(a0,a1){if(a0===1)return P.br(a1,s)
while(true)switch(t){case 0:if($.xz){t=1
break}$.xz=!0
D.FP()
q=P.B
p=[q]
o=H.a(["metal"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$b().h(0,o)
$.D=o
o=H.a(["dutton"],p)
n=$.a9
H.a([],p)
o=new G.bH(n,o,0.6)
$.$get$b().h(0,o)
$.vL=o
o=H.a(["ceramic"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.bO=o
o=H.a(["bone"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,0.2)
$.$get$b().h(0,o)
$.aX=o
o=H.a(["wood"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.W=o
o=H.a(["plastic"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.aA=o
o=H.a(["rubber"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.c8=o
o=H.a(["paper"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.J=o
o=H.a(["cloth","fabric"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.O=o
o=H.a(["glass"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.aT=o
o=H.a(["ghostly","ectoplasm"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.3)
$.$get$b().h(0,o)
$.bV=o
o=H.a(["flesh","meat","muscle"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.bh=o
o=H.a(["horrorterror","tentacled","grimdark"],p)
n=$.F
H.a([],p)
o=new G.bH(n,o,3.1)
$.$get$b().h(0,o)
$.bn=o
o=H.a(["fur","fluff","fuzzy"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.cd=o
o=H.a(["plant","leaf","vine"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.aQ=o
o=H.a(["feathery"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,-0.1)
$.$get$b().h(0,o)
$.bz=o
o=H.a(["gross","ugly","unpleasant"],p)
n=$.H
H.a([],p)
o=new G.bH(n,o,0.1)
$.$get$b().h(0,o)
$.bQ=o
o=H.a(["shitty","poorly made","conksuck","piece-of-shit"],p)
n=$.H
H.a([],p)
o=new G.bH(n,o,-13)
$.$get$b().h(0,o)
$.bP=o
o=H.a(["stone","rock","concrete"],p)
n=$.u
H.a([],p)
o=new G.bH(n,o,0.3)
$.$get$b().h(0,o)
$.av=o
o=H.a(["legendary"],p)
n=$.mq
H.a([],p)
o=new G.bH(n,o,13)
$.$get$b().h(0,o)
$.Z=o
o=H.a(["Unbeatable"],p)
n=$.mq
H.a([],p)
o=new G.bH(n,o,40.37)
$.$get$b().h(0,o)
$.En=o
o=$.H
H.a([],p)
o=new G.aI(o,["edged","sharp","honed","keen","bladed"],0.3)
$.$get$b().h(0,o)
$.au=o
o=$.tD
H.a([],p)
o=new G.aI(o,["glowing","bright","illuminated"],0.1)
$.$get$b().h(0,o)
$.aP=o
o=$.tD
H.a([],p)
o=new G.aI(o,["obscuring","dark","shadowy"],0.1)
$.$get$b().h(0,o)
$.aj=o
o=$.H
H.a([],p)
o=new G.aI(o,["calming","pale","placating","shooshing"],0.1)
$.$get$b().h(0,o)
$.bk=o
o=$.F
H.a([],p)
o=new G.aI(o,["nuclear","radioactive","irradiated"],1)
$.$get$b().h(0,o)
$.c1=o
o=$.H
H.a([],p)
o=new G.aI(o,["scary","horrifying","terrifying","spooky"],0.2)
$.$get$b().h(0,o)
$.aV=o
o=$.H
H.a([],p)
o=new G.aI(o,["lucky","fortunate","gambler's","favored","charmed"],0.3)
$.$get$b().h(0,o)
$.bW=o
o=$.H
H.a([],p)
o=new G.aI(o,["doomed","cursed","unlucky"],-0.3)
$.$get$b().h(0,o)
$.aD=o
o=$.F
H.a([],p)
o=new G.aI(o,["pointy","piercing","sharp","barbed","piked","sharpened","pronged","pointed"],0.3)
$.$get$b().h(0,o)
$.aL=o
o=$.q
H.a([],p)
o=new G.aI(o,["exploding","explosive","detonating","grenade"],0.6)
$.$get$b().h(0,o)
$.bo=o
o=$.q
H.a([],p)
o=new G.aI(o,["electrical","zap","lightning","shock"],0.6)
$.$get$b().h(0,o)
$.a6=o
o=$.q
H.a([],p)
o=new G.aI(o,["restraining","imprisoning","restricting"],0.3)
$.$get$b().h(0,o)
$.b2=o
o=$.H
H.a([],p)
o=new G.aI(o,["expensive","valuable","bling","money"],0.1)
$.$get$b().h(0,o)
$.b3=o
o=$.H
H.a([],p)
o=new G.aI(o,["edible","tasty","delicious","savory"],0.1)
$.$get$b().h(0,o)
$.an=o
o=$.H
H.a([],p)
o=new G.aI(o,["classy","distinguished","tasteful","cultured"],0.1)
$.$get$b().h(0,o)
$.ah=o
o=$.H
H.a([],p)
o=new G.aI(o,["cool","wicked","radical","awesome","groovy","tubular","bitching","bodacious"],0.1)
$.$get$b().h(0,o)
$.al=o
o=$.H
H.a([],p)
o=new G.aI(o,["intelligent","smart","useful","scientific","encyclopedic"],0.1)
$.$get$b().h(0,o)
$.X=o
o=$.F
H.a([],p)
o=new G.aI(o,["sentient","aware","conscious","awake","talking"],0.1)
$.$get$b().h(0,o)
$.ap=o
o=$.H
H.a([],p)
o=new G.aI(o,["romantic","amorous","tender","affectionate","lovey-dovey"],0.1)
$.$get$b().h(0,o)
$.aB=o
o=$.H
H.a([],p)
o=new G.aI(o,["funny","hilarious","comedy"],0.1)
$.$get$b().h(0,o)
$.aS=o
o=$.H
H.a([],p)
o=new G.aI(o,["annoying","enraging","dickish","asshole"],0.1)
$.$get$b().h(0,o)
$.bq=o
o=$.H
H.a([],p)
o=new G.aI(o,["magical","mystical","magickal","wizardy"],0.6)
$.$get$b().h(0,o)
$.a1=o
o=$.mq
H.a([],p)
o=new G.aI(o,["aspecty","imbued","focused","energized","awakened","infused"],1.3)
$.$get$b().h(0,o)
$.S=o
o=$.mq
H.a([],p)
o=new G.aI(o,["class-related","appropriate","themed"],1.3)
$.$get$b().h(0,o)
$.N=o
o=$.H
H.a([],p)
o=new G.aI(o,["pretty","aesthetic","beautiful"],0.1)
$.$get$b().h(0,o)
$.ax=o
o=$.q
H.a([],p)
o=new G.aI(o,["healing","regenerating","recovery","life"],0.3)
$.$get$b().h(0,o)
$.aJ=o
o=$.H
H.a([],p)
o=new G.aI(o,["uncomfortable","hard","unpleasant"],0.1)
$.$get$b().h(0,o)
$.aG=o
o=$.H
H.a([],p)
o=new G.aI(o,["comfortable","comforting","soft","cozy","snug","pleasant","plush"],-0.1)
$.$get$b().h(0,o)
$.aY=o
o=$.H
H.a([],p)
o=new G.aI(o,["poisonous","venomous","draining","poison"],0.6)
$.$get$b().h(0,o)
$.bK=o
o=$.H
H.a([],p)
o=new G.aI(o,["chilly","chill","cold","freezing","icy","frozen","ice"],0.6)
$.$get$b().h(0,o)
$.bm=o
o=$.H
H.a([],p)
o=new G.aI(o,["heavy","weighs a ton","heavy","heavy enough to kill a cat"],0.4)
$.$get$b().h(0,o)
$.c7=o
o=$.H
H.a([],p)
o=new G.aI(o,["fire","burning","blazing","hot","heated","on fire","combusting","flaming","fiery"],0.6)
$.$get$b().h(0,o)
$.ao=o
o=$.H
H.a([],p)
o=new G.aI(o,["blunt","bludgeoning","dull"],0.3)
$.$get$b().h(0,o)
$.ad=o
o=$.q
H.a([],p)
o=new G.aI(o,["shooty","ranged","projectile","loaded","long range"],0.3)
$.$get$b().h(0,o)
$.aK=o
o=$.H
H.a([],p)
o=new G.aI(o,["musical","melodic","harmonious","tuneful","euphonious","mellifluous,"],0.1)
$.$get$b().h(0,o)
$.a8=o
o=$.H
H.a([],p)
o=new G.aI(o,["loud","ear splitting","noisy","deafening","thundering"],0.3)
$.$get$b().h(0,o)
$.aU=o
o=$.H
H.a([],p)
o=new G.aI(o,["fake","false","imitation","simulated","replica"],-0.3)
$.$get$b().h(0,o)
$.aO=o
o=$.H
H.a([],p)
o=new G.aI(o,["real","actual","believable","geniune","guaranteed","veritable"],0.3)
$.$get$b().h(0,o)
$.bi=o
o=H.a(["perfectly generic"],p)
n=$.H
H.a([],p)
o=new G.af(n,o,0.1)
$.$get$b().h(0,o)
$.vP=o
o=H.a(["a sword"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.f9=o
o=H.a(["a hammer"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.to=o
o=H.a(["a rifle"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ty=o
o=H.a(["a pistol"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tv=o
o=H.a(["a blade"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vF=o
o=H.a(["a dagger"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tj=o
o=H.a(["a santa"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.hi=o
o=H.a(["a fist"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vN=o
o=H.a(["claws"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mi=o
o=H.a(["a grenade"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mj=o
o=H.a(["a freaking safe"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w2=o
o=H.a(["a ball"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.eh=o
o=H.a(["a trident"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wa=o
o=H.a(["a card"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.mh=o
o=H.a(["a frying pan"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tl=o
o=H.a(["a pillow"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.f7=o
o=H.a(["a machinegun"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tr=o
o=H.a(["a shuriken"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w6=o
o=H.a(["a sling"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w8=o
o=H.a(["a yoyo"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wc=o
o=H.a(["a cane"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vH=o
o=H.a(["a shield"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.f8=o
o=H.a(["a lance"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vX=o
o=H.a(["a ax"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tf=o
o=H.a(["a sign"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w1=o
o=H.a(["a book"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.aw=o
o=H.a(["a broom"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.jg=o
o=H.a(["a club"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ji=o
o=H.a(["a bow"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tg=o
o=H.a(["a whip"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.wb=o
o=H.a(["a staff"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w9=o
o=H.a(["a needle"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tt=o
o=H.a(["dice"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tk=o
o=H.a(["a fork"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vO=o
o=H.a(["a pigeon???"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,1.3)
$.$get$b().h(0,o)
$.tu=o
o=H.a(["a chainsaw"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vI=o
o=H.a(["a sickle"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w7=o
o=H.a(["a shotgun"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w4=o
o=H.a(["a stick"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.dt=o
o=H.a(["a chain"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.hh=o
o=H.a(["a wrench"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tB=o
o=H.a(["a shovel"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w5=o
o=H.a(["a rolling pin"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tA=o
o=H.a(["a puppet"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tw=o
o=H.a(["a razor"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.tx=o
o=H.a(["a pen"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.ml=o
o=H.a(["a bust"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.jh=o
o=H.a(["a bowling ball"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.zZ=o
o=H.a(["a golf club"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vR=o
o=H.a(["a knife"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.vW=o
o=H.a(["scissors"],p)
n=$.a2
H.a([],p)
o=new G.af(n,o,0.4)
$.$get$b().h(0,o)
$.w3=o
o=H.a(["forged","sharpened","honed","filed"],p)
n=$.F
m=G.a0
l=[m]
k=H.a([$.D,$.au,$.aL],l)
H.a([],p)
o=new G.d("Forged",k,n,o,0)
$.$get$b().h(0,o)
$.Bi=o
o=H.a([],p)
n=$.u
k=H.a([$.ad,$.au],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AO=o
o=H.a(["fossilized"],p)
n=$.F
k=H.a([$.aX,$.av],l)
H.a([],p)
o=new G.d("Fossilized",k,n,o,0)
$.$get$b().h(0,o)
$.Bj=o
o=H.a(["adamantium"],p)
n=$.F
k=H.a([$.aX,$.D],l)
H.a([],p)
o=new G.d("Adamantium",k,n,o,0)
$.$get$b().h(0,o)
$.vD=o
o=H.a([],p)
n=$.u
k=H.a([$.aY,$.aG],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.DX=o
o=H.a(["tatami"],p)
n=$.u
k=H.a([$.O,$.W],l)
H.a([],p)
o=new G.d("Tatami",k,n,o,0)
$.$get$b().h(0,o)
$.Eb=o
o=H.a(["mesh","chain link"],p)
n=$.u
k=H.a([$.O,$.D],l)
H.a([],p)
o=new G.d("Mesh",k,n,o,0)
$.$get$b().h(0,o)
$.Cj=o
o=H.a(["foil"],p)
n=$.u
k=H.a([$.J,$.D],l)
H.a([],p)
o=new G.d("Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Be=o
o=H.a(["beanbag"],p)
n=$.u
k=H.a([$.O,$.av],l)
H.a([],p)
o=new G.d("Beanbag",k,n,o,0)
$.$get$b().h(0,o)
$.zT=o
o=H.a(["pleather","faux fur"],p)
n=$.u
k=H.a([$.cd,$.aA],l)
H.a([],p)
o=new G.d("Faux Fur",k,n,o,0)
$.$get$b().h(0,o)
$.CU=o
o=H.a(["plywood"],p)
n=$.u
k=H.a([$.W,$.J],l)
H.a([],p)
o=new G.d("Plywood",k,n,o,0)
$.$get$b().h(0,o)
$.mn=o
o=H.a(["colossus"],p)
n=$.u
k=H.a([$.D,$.bh],l)
H.a([],p)
o=new G.d("Colossus",k,n,o,0)
$.$get$b().h(0,o)
$.vJ=o
o=H.a(["rotting","zombie"],p)
n=$.F
k=H.a([$.bQ,$.bh],l)
H.a([],p)
o=new G.d("Rotting",k,n,o,0)
$.$get$b().h(0,o)
$.Dj=o
o=H.a(["draugr","white walker"],p)
n=$.F
k=H.a([$.bQ,$.bh,$.bm],l)
H.a([],p)
o=new G.d("Draugr",k,n,o,0)
$.$get$b().h(0,o)
$.AL=o
o=H.a(["Ultraviolet"],p)
n=$.tC
k=H.a([$.aP,$.aj],l)
H.a([],p)
o=new G.d("Ultraviolet",k,n,o,0)
$.$get$b().h(0,o)
$.C2=o
o=H.a(["Ultraviolence"],p)
n=$.q
k=H.a([$.aP,$.aj,$.au],l)
H.a([],p)
o=new G.d("Ultraviolence",k,n,o,0)
$.$get$b().h(0,o)
$.Em=o
o=H.a([],p)
n=$.q
k=H.a([$.aD,$.bW],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AJ=o
o=H.a(["candy"],p)
n=$.u
k=H.a([$.an,$.aT],l)
H.a([],p)
o=new G.d("Candy",k,n,o,0)
$.$get$b().h(0,o)
$.th=o
o=H.a(["cotton candy"],p)
n=$.u
k=H.a([$.an,$.O],l)
H.a([],p)
o=new G.d("Cotton Candy",k,n,o,0)
$.$get$b().h(0,o)
$.Au=o
o=H.a(["gummy"],p)
n=$.u
k=H.a([$.an,$.c8],l)
H.a([],p)
o=new G.d("Gum",k,n,o,0)
$.$get$b().h(0,o)
$.Bv=o
o=H.a(["marrow"],p)
n=$.u
k=H.a([$.an,$.aX],l)
H.a([],p)
o=new G.d("Marrow",k,n,o,0)
$.$get$b().h(0,o)
$.Cc=o
o=H.a(["toothy"],p)
n=$.a2
k=H.a([$.aX,$.bO],l)
H.a([],p)
o=new G.d("Toothy",k,n,o,0)
$.$get$b().h(0,o)
$.Ej=o
o=H.a(["Frost"],p)
n=$.u
k=H.a([$.av,$.aT,$.bh],l)
H.a([],p)
o=new G.d("Frost",k,n,o,0)
$.$get$b().h(0,o)
$.Bk=o
o=H.a(["arsenic","antifreeze"],p)
n=$.q
k=H.a([$.an,$.bK],l)
H.a([],p)
o=new G.d("Arsenic",k,n,o,0)
$.$get$b().h(0,o)
$.AT=o
o=H.a(["crystal","diamond","quartz"],p)
n=$.u
k=H.a([$.av,$.aT],l)
H.a([],p)
o=new G.d("Crystal",k,n,o,0)
$.$get$b().h(0,o)
$.ti=o
o=H.a(["mary sue","sakura katana chan","shitty oc"],p)
n=$.H
k=H.a([$.ax,$.aB,$.aS,$.X,$.ah,$.bW,$.a1],l)
H.a([],p)
o=new G.d("Mary Sue",k,n,o,0)
$.$get$b().h(0,o)
$.Cd=o
o=H.a(["edge lord","coldsteel the hedgehog"],p)
n=$.H
k=H.a([$.aV,$.aj,$.au,$.Z,$.aD,$.X,$.ah,$.al],l)
H.a([],p)
o=new G.d("Edge Lord",k,n,o,0)
$.$get$b().h(0,o)
$.AR=o
o=H.a(["deadpool"],p)
n=$.a2
k=H.a([$.bQ,$.aJ,$.al,$.aS],l)
H.a([],p)
o=new G.d("Deadpool",k,n,o,0)
$.$get$b().h(0,o)
$.AA=o
o=H.a(["spoopy","skellington's","creppy"],p)
n=$.H
k=H.a([$.aV,$.al],l)
H.a([],p)
o=new G.d("Spoopy",k,n,o,0)
$.$get$b().h(0,o)
$.E_=o
o=H.a(["wolverine"],p)
n=$.a2
k=H.a([$.aX,$.au,$.aL],l)
H.a([],p)
o=new G.d("Wolverine",k,n,o,0)
$.$get$b().h(0,o)
$.Ey=o
o=H.a(["rabbit's foot"],p)
n=$.a2
k=H.a([$.bW,$.cd],l)
H.a([],p)
o=new G.d("Rabbit's Foot",k,n,o,0)
$.$get$b().h(0,o)
$.w0=o
o=H.a(["tipped","reinforced","arrowhead"],p)
n=$.F
k=H.a([$.aL,$.W],l)
H.a([],p)
o=new G.d("Tipped",k,n,o,0)
$.$get$b().h(0,o)
$.zM=o
o=H.a(["arrow","flechette","bolt"],p)
n=$.a2
k=H.a([$.aL,$.aK,$.W],l)
H.a([],p)
o=new G.d("Arrow",k,n,o,0)
$.$get$b().h(0,o)
$.vE=o
o=H.a(["training sword","bokken"],p)
n=$.a2
k=H.a([$.W,$.au],l)
H.a([],p)
o=new G.d("Bokken",k,n,o,0)
$.$get$b().h(0,o)
$.BW=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aO,$.al],l)
H.a([],p)
o=new G.d("Irony Type1",k,n,o,0)
$.$get$b().h(0,o)
$.tp=o
o=H.a(["netted","webbed"],p)
n=$.a2
k=H.a([$.b2,$.O],l)
H.a([],p)
o=new G.d("Netted",k,n,o,0)
$.$get$b().h(0,o)
$.Cy=o
o=H.a(["barbed wire"],p)
n=$.a2
k=H.a([$.aL,$.b2,$.D,$.O],l)
H.a([],p)
o=new G.d("Barbed Wire",k,n,o,0)
$.$get$b().h(0,o)
$.zQ=o
o=H.a(["morning star"],p)
n=$.a2
k=H.a([$.aL,$.ad],l)
H.a([],p)
o=new G.d("Morning Star",k,n,o,0)
$.$get$b().h(0,o)
$.Cs=o
o=H.a(["decadent"],p)
n=$.H
k=H.a([$.aY,$.b3],l)
H.a([],p)
o=new G.d("Decadent",k,n,o,0)
$.$get$b().h(0,o)
$.AD=o
o=H.a(["SBAHJ"],p)
n=$.q
k=H.a([$.bP,$.al],l)
H.a([],p)
o=new G.d("SBAHJ",k,n,o,0)
$.$get$b().h(0,o)
$.Dt=o
o=H.a(["bayonet"],p)
n=$.a2
k=H.a([$.aL,$.aK],l)
H.a([],p)
o=new G.d("Bayonet",k,n,o,0)
$.$get$b().h(0,o)
$.zS=o
o=H.a(["Snoop Dog's Snow Cone Machete"],p)
n=$.u
k=H.a([$.bm,$.al,$.au],l)
H.a([],p)
o=new G.d("Snoop",k,n,o,0)
$.$get$b().h(0,o)
$.DW=o
o=H.a(["light saber"],p)
n=$.q
k=H.a([$.aP,$.ao,$.au],l)
H.a([],p)
o=new G.d("Light Saber",k,n,o,0)
$.$get$b().h(0,o)
$.C1=o
o=H.a(["fake as shit","fakey fake","bullshit"],p)
n=$.H
k=H.a([$.a1,$.aO],l)
H.a([],p)
o=new G.d("Fakey Fake",k,n,o,0)
$.$get$b().h(0,o)
$.B_=o
o=H.a(["real as shit","suprisingly real"],p)
n=$.H
k=H.a([$.a1,$.bi],l)
H.a([],p)
o=new G.d("Real As Shit",k,n,o,0)
$.$get$b().h(0,o)
$.Dd=o
o=H.a(["skeletal"],p)
n=$.a2
k=H.a([$.aV,$.aD,$.aX],l)
H.a([],p)
o=new G.d("Skeletal",k,n,o,0)
$.$get$b().h(0,o)
$.DQ=o
o=H.a(["green sun"],p)
n=$.tD
k=H.a([$.ao,$.c1,$.aP],l)
H.a([],p)
o=new G.d("Green Sun",k,n,o,0)
$.$get$b().h(0,o)
$.tn=o
o=H.a(["midnight","3 In The Morning"],p)
n=$.tC
k=H.a([$.aj,$.ah],l)
H.a([],p)
o=new G.d("Midnight",k,n,o,0)
$.$get$b().h(0,o)
$.Cn=o
o=H.a(["radiant","dazzling"],p)
n=$.H
k=H.a([$.a1,$.aP],l)
H.a([],p)
o=new G.d("Radiant",k,n,o,0)
$.$get$b().h(0,o)
$.Da=o
o=H.a(["edgy"],p)
n=$.H
k=H.a([$.au,$.aj,$.al],l)
H.a([],p)
o=new G.d("Edgy",k,n,o,0)
$.$get$b().h(0,o)
$.AS=o
o=H.a(["A-Bomb","Warhead","Chernobyl"],p)
n=$.q
k=H.a([$.c1,$.bo],l)
H.a([],p)
o=new G.d("Warhead",k,n,o,0)
$.$get$b().h(0,o)
$.zF=o
o=H.a(["living"],p)
n=$.F
k=H.a([$.aX,$.bh,$.ap],l)
H.a([],p)
o=new G.d("Living",k,n,o,0)
$.$get$b().h(0,o)
$.C5=o
o=H.a(["dead","corpse","deceased"],p)
n=$.F
k=H.a([$.aX,$.bh],l)
H.a([],p)
o=new G.d("Dead",k,n,o,0)
$.$get$b().h(0,o)
$.Az=o
o=H.a(["taser"],p)
n=$.q
k=H.a([$.a6,$.b2,$.aK],l)
H.a([],p)
o=new G.d("Taser",k,n,o,0)
$.$get$b().h(0,o)
$.Ea=o
o=H.a(["nocturn"],p)
n=$.q
k=H.a([$.aj,$.a8],l)
H.a([],p)
o=new G.d("Nocturn",k,n,o,0)
$.$get$b().h(0,o)
$.CB=o
o=H.a(["dirge"],p)
n=$.q
k=H.a([$.aD,$.a8],l)
H.a([],p)
o=new G.d("Dirge",k,n,o,0)
$.$get$b().h(0,o)
$.AG=o
o=H.a(["Snobbish","Noble"],p)
n=$.H
k=H.a([$.ah,$.b3],l)
H.a([],p)
o=new G.d("Snobbish",k,n,o,0)
$.$get$b().h(0,o)
$.DV=o
o=H.a(["flat"],p)
n=$.H
k=H.a([$.ad,$.a8],l)
H.a([],p)
o=new G.d("Flat(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.B9=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.au,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Music)",k,n,o,0)
$.$get$b().h(0,o)
$.DC=o
o=H.a(["sharp"],p)
n=$.H
k=H.a([$.ah,$.a8],l)
H.a([],p)
o=new G.d("Sharp(Clothes)",k,n,o,0)
$.$get$b().h(0,o)
$.DB=o
o=H.a(["Bach's"],p)
n=$.a9
k=H.a([$.X,$.a8],l)
H.a([],p)
o=new G.d("Bach's",k,n,o,0)
$.$get$b().h(0,o)
$.zO=o
o=H.a(["Mozart's"],p)
n=$.a9
k=H.a([$.a1,$.a8],l)
H.a([],p)
o=new G.d("Mozart's",k,n,o,0)
$.$get$b().h(0,o)
$.Cu=o
o=H.a(["Einstein's","Oppenheimer"],p)
n=$.a9
k=H.a([$.X,$.c1],l)
H.a([],p)
o=new G.d("Einstein's",k,n,o,0)
$.$get$b().h(0,o)
$.AU=o
o=H.a(["Feynman's"],p)
n=$.a9
k=H.a([$.X,$.aS],l)
H.a([],p)
o=new G.d("Feynman's",k,n,o,0)
$.$get$b().h(0,o)
$.B3=o
o=H.a(["Ziptie"],p)
n=$.a9
k=H.a([$.aA,$.b2],l)
H.a([],p)
o=new G.d("Ziptie",k,n,o,0)
$.$get$b().h(0,o)
$.EC=o
o=H.a(["cellular","mobile","handheld","computerized"],p)
n=$.q
k=H.a([$.D,$.X],l)
H.a([],p)
o=new G.d("Mobile",k,n,o,0)
$.$get$b().h(0,o)
$.jj=o
o=H.a(["Sassacre"],p)
n=$.a9
k=H.a([$.c7,$.aS],l)
H.a([],p)
o=new G.d("Sassacre",k,n,o,0)
$.$get$b().h(0,o)
$.Dr=o
o=H.a(["Sledge"],p)
n=$.q
k=H.a([$.ad,$.c7],l)
H.a([],p)
o=new G.d("Sledge",k,n,o,0)
$.$get$b().h(0,o)
$.DT=o
o=H.a(["Legal"],p)
n=$.q
k=H.a([$.b2,$.J],l)
H.a([],p)
o=new G.d("Legal",k,n,o,0)
$.$get$b().h(0,o)
$.mk=o
o=H.a(["Clown"],p)
n=$.q
k=H.a([$.aS,$.aU],l)
H.a([],p)
o=new G.d("Clown",k,n,o,0)
$.$get$b().h(0,o)
$.Ao=o
o=H.a(["passionate"],p)
n=$.H
k=H.a([$.ao,$.aB],l)
H.a([],p)
o=new G.d("Passionate",k,n,o,0)
$.$get$b().h(0,o)
$.CL=o
o=H.a(["pinata"],p)
n=$.a2
k=H.a([$.J,$.an],l)
H.a([],p)
o=new G.d("Pinata",k,n,o,0)
$.$get$b().h(0,o)
$.CP=o
o=H.a(["anvil"],p)
n=$.q
k=H.a([$.ad,$.c7,$.D],l)
H.a([],p)
o=new G.d("Anvil",k,n,o,0)
$.$get$b().h(0,o)
$.zL=o
o=H.a(["flashbang"],p)
n=$.q
k=H.a([$.aP,$.bo],l)
H.a([],p)
o=new G.d("Flashbang",k,n,o,0)
$.$get$b().h(0,o)
$.B8=o
o=H.a(["smokebomb"],p)
n=$.q
k=H.a([$.aj,$.bo],l)
H.a([],p)
o=new G.d("Smokebomb",k,n,o,0)
$.$get$b().h(0,o)
$.DU=o
o=H.a(["ninja"],p)
n=$.q
k=H.a([$.aj,$.au],l)
H.a([],p)
o=new G.d("Ninja",k,n,o,0)
$.$get$b().h(0,o)
$.CA=o
o=H.a(["techno"],p)
n=$.q
k=H.a([$.a6,$.a8],l)
H.a([],p)
o=new G.d("Techno",k,n,o,0)
$.$get$b().h(0,o)
$.Ed=o
o=H.a(["rock and roll"],p)
n=$.q
k=H.a([$.av,$.a8],l)
H.a([],p)
o=new G.d("Rock And/Or Roll",k,n,o,0)
$.$get$b().h(0,o)
$.Df=o
o=H.a(["pistol shrimp","horrifying"],p)
n=$.a2
k=H.a([$.ap,$.bh,$.aK],l)
H.a([],p)
o=new G.d("Pistol Shrimp",k,n,o,0)
$.$get$b().h(0,o)
$.CQ=o
o=H.a(["juggalo"],p)
n=$.q
k=H.a([$.aS,$.a8,$.aU,$.aV],l)
H.a([],p)
o=new G.d("Juggalo",k,n,o,0)
$.$get$b().h(0,o)
$.vV=o
o=H.a(["shocksauce"],p)
n=$.H
k=H.a([$.al,$.a6],l)
H.a([],p)
o=new G.d("Shock Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.DF=o
o=H.a(["weaksauce"],p)
n=$.H
k=H.a([$.ad,$.al,$.bP],l)
H.a([],p)
o=new G.d("Weak Sauce",k,n,o,0)
$.$get$b().h(0,o)
$.Es=o
o=H.a(["spicy","picante"],p)
n=$.H
k=H.a([$.ao,$.an],l)
H.a([],p)
o=new G.d("Spicy",k,n,o,0)
$.$get$b().h(0,o)
$.DZ=o
o=H.a(["ice cream","popsicle"],p)
n=$.u
k=H.a([$.bm,$.an],l)
H.a([],p)
o=new G.d("Popsicle",k,n,o,0)
$.$get$b().h(0,o)
$.BJ=o
o=H.a(["popsickle"],p)
n=$.u
k=H.a([$.bm,$.an,$.au],l)
H.a([],p)
o=new G.d("Popsickle",k,n,o,0)
$.$get$b().h(0,o)
$.D1=o
o=H.a(["icepick"],p)
n=$.u
k=H.a([$.bm,$.aL],l)
H.a([],p)
o=new G.d("Icepick",k,n,o,0)
$.$get$b().h(0,o)
$.BK=o
o=H.a(["schezwan"],p)
n=$.H
k=H.a([$.al,$.an],l)
H.a([],p)
o=new G.d("Schezwan",k,n,o,0)
$.$get$b().h(0,o)
$.Du=o
o=H.a(["vaporwave"],p)
n=$.q
k=H.a([$.aj,$.a8,$.al,$.a6],l)
H.a([],p)
o=new G.d("Vaporwave",k,n,o,0)
$.$get$b().h(0,o)
$.Eq=o
o=H.a(["mallet"],p)
n=$.a2
k=H.a([$.W,$.ad],l)
H.a([],p)
o=new G.d("Mallet",k,n,o,0)
$.$get$b().h(0,o)
$.Cb=o
o=H.a(["fidget"],p)
n=$.q
k=H.a([$.aA,$.al],l)
H.a([],p)
o=new G.d("Fidget",k,n,o,0)
$.$get$b().h(0,o)
$.B5=o
o=H.a(["gold foil"],p)
n=$.u
k=H.a([$.D,$.J,$.b3],l)
H.a([],p)
o=new G.d("Gold Foil",k,n,o,0)
$.$get$b().h(0,o)
$.Bs=o
o=H.a(["caviar"],p)
n=$.u
k=H.a([$.an,$.b3],l)
H.a([],p)
o=new G.d("Caviar",k,n,o,0)
$.$get$b().h(0,o)
$.Ae=o
o=H.a(["RADioactive"],p)
n=$.H
k=H.a([$.c1,$.al],l)
H.a([],p)
o=new G.d("RADioactive",k,n,o,0)
$.$get$b().h(0,o)
$.Db=o
o=H.a(["glam"],p)
n=$.H
k=H.a([$.av,$.a8,$.ax],l)
H.a([],p)
o=new G.d("Glam",k,n,o,0)
$.$get$b().h(0,o)
$.Bq=o
o=H.a(["hair metal"],p)
n=$.H
k=H.a([$.D,$.a8,$.ax],l)
H.a([],p)
o=new G.d("Hair Metal",k,n,o,0)
$.$get$b().h(0,o)
$.Bx=o
o=H.a(["elven","fae","sylvan"],p)
n=$.H
k=H.a([$.a1,$.ax],l)
H.a([],p)
o=new G.d("Elven",k,n,o,0)
$.$get$b().h(0,o)
$.AW=o
o=H.a(["shiny"],p)
n=$.H
k=H.a([$.D,$.ax],l)
H.a([],p)
o=new G.d("Shiny",k,n,o,0)
$.$get$b().h(0,o)
$.DE=o
o=H.a(["bespoke","well-tailored","glamorous","haute couture"],p)
n=$.H
k=H.a([$.b3,$.ax,$.ah],l)
H.a([],p)
o=new G.d("Bespoke",k,n,o,0)
$.$get$b().h(0,o)
$.f6=o
o=H.a(["operatic"],p)
n=$.H
k=H.a([$.b3,$.a8,$.ah],l)
H.a([],p)
o=new G.d("Operatic",k,n,o,0)
$.$get$b().h(0,o)
$.CF=o
o=H.a(["ice","diamond"],p)
n=$.u
k=H.a([$.b3,$.bm],l)
H.a([],p)
o=new G.d("Diamond",k,n,o,0)
$.$get$b().h(0,o)
$.vU=o
o=H.a(["icy hot","cold fire","wet","damp","moist","watery"],p)
n=$.H
k=H.a([$.ao,$.bm],l)
H.a([],p)
o=new G.d("Icy Hot",k,n,o,0)
$.$get$b().h(0,o)
$.BL=o
o=H.a(["ice cold","cold as fuck"],p)
n=$.H
k=H.a([$.al,$.bm],l)
H.a([],p)
o=new G.d("Cold As Fuck",k,n,o,0)
$.$get$b().h(0,o)
$.BI=o
o=H.a(["winter's","season's"],p)
n=$.a9
k=H.a([$.bk,$.bm],l)
H.a([],p)
o=new G.d("Winter's",k,n,o,0)
$.$get$b().h(0,o)
$.Ev=o
o=H.a(["santa's","christmas","xmas"],p)
n=$.a9
k=H.a([$.a1,$.bm],l)
H.a([],p)
o=new G.d("Christmas",k,n,o,0)
$.$get$b().h(0,o)
$.Ak=o
o=H.a(["Santa Saws"],p)
n=$.a9
k=H.a([$.a1,$.bm,$.au],l)
H.a([],p)
o=new G.d("Santa Saws",k,n,o,0)
$.$get$b().h(0,o)
$.Dp=o
o=H.a(["Santa Sleighs"],p)
n=$.a9
k=H.a([$.hi,$.au],l)
H.a([],p)
o=new G.d("Santa Sleighs",k,n,o,0)
$.$get$b().h(0,o)
$.Dq=o
o=H.a(["Santa Claws"],p)
n=$.a9
k=H.a([$.hi,$.mi],l)
H.a([],p)
o=new G.d("Santa Claws",k,n,o,0)
$.$get$b().h(0,o)
$.Do=o
o=H.a(["Sandy Claws"],p)
n=$.a9
k=H.a([$.hi,$.mi,$.av],l)
H.a([],p)
o=new G.d("Sandy Claws",k,n,o,0)
$.$get$b().h(0,o)
$.Dn=o
o=H.a(["Silent Night"],p)
n=$.a9
k=H.a([$.hi,$.aj],l)
H.a([],p)
o=new G.d("Silent Night",k,n,o,0)
$.$get$b().h(0,o)
$.DM=o
o=H.a(["ghost's","Bloody Mary","Halloween"],p)
n=$.a9
k=H.a([$.aV,$.bV],l)
H.a([],p)
o=new G.d("Ghost's",k,n,o,0)
$.$get$b().h(0,o)
$.By=o
o=H.a(["ghoul","mutant"],p)
n=$.u
k=H.a([$.bh,$.c1,$.bQ],l)
H.a([],p)
o=new G.d("Mutant",k,n,o,0)
$.$get$b().h(0,o)
$.Cv=o
o=H.a(["skate","skateboard"],p)
n=$.q
k=H.a([$.al,$.D],l)
H.a([],p)
o=new G.d("Skateboard",k,n,o,0)
$.$get$b().h(0,o)
$.DP=o
o=H.a(["microwave"],p)
n=$.q
k=H.a([$.c1,$.a6,$.an],l)
H.a([],p)
o=new G.d("Microwave",k,n,o,0)
$.$get$b().h(0,o)
$.Cm=o
o=H.a(["orbital"],p)
n=$.q
k=H.a([$.c1,$.a6,$.an,$.aK],l)
H.a([],p)
o=new G.d("Orbital",k,n,o,0)
$.$get$b().h(0,o)
$.CG=o
o=H.a([],p)
n=$.q
k=H.a([$.ad,$.X],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.AP=o
o=H.a(["uranium"],p)
n=$.u
k=H.a([$.c1,$.av],l)
H.a([],p)
o=new G.d("Uranium",k,n,o,0)
$.$get$b().h(0,o)
$.Ep=o
o=H.a(["mousepad","jar opener"],p)
n=$.q
k=H.a([$.J,$.c8],l)
H.a([],p)
o=new G.d("Mousepad",k,n,o,0)
$.$get$b().h(0,o)
$.Ct=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.au,$.av],l)
H.a([],p)
o=new G.d("Sharpened Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Bb=o
o=H.a(["flint"],p)
n=$.u
k=H.a([$.aL,$.av],l)
H.a([],p)
o=new G.d("Pointed Flint",k,n,o,0)
$.$get$b().h(0,o)
$.Bc=o
o=H.a(["picnic"],p)
n=$.q
k=H.a([$.aA,$.aL],l)
H.a([],p)
o=new G.d("Picnic",k,n,o,0)
$.$get$b().h(0,o)
$.CO=o
o=H.a(["xtreme xplosion"],p)
n=$.H
k=H.a([$.al,$.bo],l)
H.a([],p)
o=new G.d("Xtreme Xplosion",k,n,o,0)
$.$get$b().h(0,o)
$.EB=o
o=H.a(["lawn"],p)
n=$.q
k=H.a([$.aA,$.aY],l)
H.a([],p)
o=new G.d("Lawn",k,n,o,0)
$.$get$b().h(0,o)
$.C_=o
o=H.a(["upholstered"],p)
n=$.u
k=H.a([$.O,$.aY],l)
H.a([],p)
o=new G.d("Upholstered",k,n,o,0)
$.$get$b().h(0,o)
$.Eo=o
o=H.a(["leather"],p)
n=$.u
k=H.a([$.bh,$.aY],l)
H.a([],p)
o=new G.d("Leather",k,n,o,0)
$.$get$b().h(0,o)
$.vZ=o
o=H.a(["shag"],p)
n=$.u
k=H.a([$.cd,$.aY],l)
H.a([],p)
o=new G.d("Shag",k,n,o,0)
$.$get$b().h(0,o)
$.DA=o
o=H.a(["loyal"],p)
n=$.H
k=H.a([$.ad,$.aB],l)
H.a([],p)
o=new G.d("Loyal",k,n,o,0)
$.$get$b().h(0,o)
$.C9=o
o=H.a(["porcelain"],p)
n=$.u
k=H.a([$.ax,$.bO],l)
H.a([],p)
o=new G.d("Porcelain",k,n,o,0)
$.$get$b().h(0,o)
$.mo=o
o=H.a(["pork hollow","piggy bank"],p)
n=$.a2
k=H.a([$.b3,$.bO],l)
H.a([],p)
o=new G.d("Pork Hollow",k,n,o,0)
$.$get$b().h(0,o)
$.D3=o
o=H.a(["n1nj4","katana"],p)
n=$.q
k=H.a([$.al,$.au],l)
H.a([],p)
o=new G.d("Katana",k,n,o,0)
$.$get$b().h(0,o)
$.BU=o
o=H.a(["chocolate"],p)
n=$.u
k=H.a([$.aB,$.an],l)
H.a([],p)
o=new G.d("Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Aj=o
o=H.a(["wrapped chocolate"],p)
n=$.u
k=H.a([$.aB,$.an,$.J,$.D],l)
H.a([],p)
o=new G.d("Wrapped Chocolate",k,n,o,0)
$.$get$b().h(0,o)
$.Bf=o
o=H.a(["scratch-n-sniff"],p)
n=$.u
k=H.a([$.al,$.J],l)
H.a([],p)
o=new G.d("Scratch-n-sniff",k,n,o,0)
$.$get$b().h(0,o)
$.Dw=o
o=H.a(["mythril","orichalcum"],p)
n=$.u
k=H.a([$.a1,$.D],l)
H.a([],p)
o=new G.d("Mythril",k,n,o,0)
$.$get$b().h(0,o)
$.Cw=o
o=H.a(["titanium","steel"],p)
n=$.u
k=H.a([$.ad,$.D],l)
H.a([],p)
o=new G.d("Titanium",k,n,o,0)
$.$get$b().h(0,o)
$.Ei=o
o=H.a(["lead"],p)
n=$.u
k=H.a([$.c7,$.D],l)
H.a([],p)
o=new G.d("Lead",k,n,o,0)
$.$get$b().h(0,o)
$.vY=o
o=H.a(["satire","parody","onion"],p)
n=$.q
k=H.a([$.aO,$.aS],l)
H.a([],p)
o=new G.d("Satire",k,n,o,0)
$.$get$b().h(0,o)
$.CE=o
o=H.a(["comedy gold"],p)
n=$.H
k=H.a([$.b3,$.aS],l)
H.a([],p)
o=new G.d("Comedy Gold",k,n,o,0)
$.$get$b().h(0,o)
$.Aq=o
o=H.a(["dry","sensible chuckle"],p)
n=$.H
k=H.a([$.ah,$.aS],l)
H.a([],p)
o=new G.d("Dry",k,n,o,0)
$.$get$b().h(0,o)
$.AM=o
o=H.a(["polite"],p)
n=$.H
k=H.a([$.aY,$.aO],l)
H.a([],p)
o=new G.d("Polite",k,n,o,0)
$.$get$b().h(0,o)
$.D_=o
o=H.a(["stradivarius"],p)
n=$.a9
k=H.a([$.ah,$.b3,$.W,$.a8],l)
H.a([],p)
o=new G.d("Stradivarius",k,n,o,0)
$.$get$b().h(0,o)
$.E5=o
o=H.a(["scientistic"],p)
n=$.H
k=H.a([$.X,$.aO],l)
H.a([],p)
o=new G.d("Scientistic",k,n,o,0)
$.$get$b().h(0,o)
$.Dv=o
o=H.a(["AI"],p)
n=$.q
k=H.a([$.a6,$.ap],l)
H.a([],p)
o=new G.d("AI",k,n,o,0)
$.$get$b().h(0,o)
$.mg=o
o=H.a(["robotic"],p)
n=$.F
k=H.a([$.D,$.a6,$.ap],l)
H.a([],p)
o=new G.d("Robotic",k,n,o,0)
$.$get$b().h(0,o)
$.tz=o
o=H.a(["shrapnel"],p)
n=$.q
k=H.a([$.W,$.bo],l)
H.a([],p)
o=new G.d("Shrapnel",k,n,o,0)
$.$get$b().h(0,o)
$.DH=o
o=H.a(["vocaloid"],p)
n=$.q
k=H.a([$.ap,$.a6,$.a8],l)
H.a([],p)
o=new G.d("Vocaloid",k,n,o,0)
$.$get$b().h(0,o)
$.Er=o
o=H.a(["*Hyun-ae"],p)
n=$.a9
k=H.a([$.ap,$.a6,$.aB],l)
H.a([],p)
o=new G.d("*Hyun-ae",k,n,o,0)
$.$get$b().h(0,o)
$.BH=o
o=H.a(["buckshot"],p)
n=$.q
k=H.a([$.W,$.aK],l)
H.a([],p)
o=new G.d("Buckshot",k,n,o,0)
$.$get$b().h(0,o)
$.A2=o
o=H.a(["cannon"],p)
n=$.q
k=H.a([$.c7,$.aK],l)
H.a([],p)
o=new G.d("Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Ab=o
o=H.a(["stationary"],p)
n=$.q
k=H.a([$.ah,$.J],l)
H.a([],p)
o=new G.d("Stationary",k,n,o,0)
$.$get$b().h(0,o)
$.E3=o
o=H.a([],p)
n=$.q
k=H.a([$.aw,$.J],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.CI=o
o=H.a([],p)
n=$.q
k=H.a([$.D,$.aK],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.Ck=o
o=H.a(["papercut"],p)
n=$.q
k=H.a([$.au,$.J],l)
H.a([],p)
o=new G.d("Papercut",k,n,o,0)
$.$get$b().h(0,o)
$.CJ=o
o=H.a(["squeaky"],p)
n=$.F
k=H.a([$.ad,$.c8],l)
H.a([],p)
o=new G.d("Squeaky",k,n,o,0)
$.$get$b().h(0,o)
$.E0=o
o=H.a(["kazoo"],p)
n=$.q
k=H.a([$.aO,$.a8],l)
H.a([],p)
o=new G.d("Kazoo",k,n,o,0)
$.$get$b().h(0,o)
$.BV=o
o=H.a(["bandaid"],p)
n=$.q
k=H.a([$.aJ,$.J],l)
H.a([],p)
o=new G.d("Bandaid",k,n,o,0)
$.$get$b().h(0,o)
$.zP=o
o=H.a(["gushers"],p)
n=$.q
k=H.a([$.aJ,$.an],l)
H.a([],p)
o=new G.d("Gushers",k,n,o,0)
$.$get$b().h(0,o)
$.Bw=o
o=H.a(["medic"],p)
n=$.q
k=H.a([$.aJ,$.aK],l)
H.a([],p)
o=new G.d("Medic",k,n,o,0)
$.$get$b().h(0,o)
$.Ci=o
o=H.a(["sick nasty","ill"],p)
n=$.F
k=H.a([$.al,$.bK],l)
H.a([],p)
o=new G.d("Sick Nasty",k,n,o,0)
$.$get$b().h(0,o)
$.DJ=o
o=H.a(["gilded","gold leaf"],p)
n=$.u
k=H.a([$.D,$.W],l)
H.a([],p)
o=new G.d("Gilded",k,n,o,0)
$.$get$b().h(0,o)
$.Bp=o
o=H.a(["charging","power cord"],p)
n=$.q
k=H.a([$.aA,$.a6],l)
H.a([],p)
o=new G.d("Charging",k,n,o,0)
$.$get$b().h(0,o)
$.Ai=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.c8,$.au],l)
H.a([],p)
o=new G.d("Rubber Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Dl=o
o=H.a(["safety"],p)
n=$.q
k=H.a([$.aA,$.au],l)
H.a([],p)
o=new G.d("Plastic Safety",k,n,o,0)
$.$get$b().h(0,o)
$.Dm=o
o=H.a(["thunderous","thor's"],p)
n=$.H
k=H.a([$.aU,$.a6],l)
H.a([],p)
o=new G.d("Thunderous",k,n,o,0)
$.$get$b().h(0,o)
$.Eg=o
o=H.a(["screeching","dial up"],p)
n=$.H
k=H.a([$.aU,$.a6,$.X],l)
H.a([],p)
o=new G.d("Screeching",k,n,o,0)
$.$get$b().h(0,o)
$.Dy=o
o=H.a(["mirrored","reflective"],p)
n=$.q
k=H.a([$.aT,$.D],l)
H.a([],p)
o=new G.d("Mirrored",k,n,o,0)
$.$get$b().h(0,o)
$.ts=o
o=H.a(["far seeing","sighted"],p)
n=$.q
k=H.a([$.aT,$.av,$.a1],l)
H.a([],p)
o=new G.d("Far Seeing",k,n,o,0)
$.$get$b().h(0,o)
$.vK=o
o=H.a(["disabling","non lethal"],p)
n=$.q
k=H.a([$.c8,$.aK],l)
H.a([],p)
o=new G.d("Nonlethal",k,n,o,0)
$.$get$b().h(0,o)
$.AH=o
o=H.a(["fashionable"],p)
n=$.q
k=H.a([$.ax,$.ah],l)
H.a([],p)
o=new G.d("Fashionable",k,n,o,0)
$.$get$b().h(0,o)
$.vM=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.aS,$.al],l)
H.a([],p)
o=new G.d("Ironic Type 2",k,n,o,0)
$.$get$b().h(0,o)
$.BP=o
o=H.a(["ironic"],p)
n=$.H
k=H.a([$.bP,$.aS],l)
H.a([],p)
o=new G.d("Ironic Type 3",k,n,o,0)
$.$get$b().h(0,o)
$.tq=o
o=H.a(["post-ironic"],p)
n=$.H
k=H.a([$.aO,$.al,$.ah],l)
H.a([],p)
o=new G.d("Post Ironic",k,n,o,0)
$.$get$b().h(0,o)
$.D5=o
o=H.a(["monstrous"],p)
n=$.H
k=H.a([$.bQ,$.aU,$.aV],l)
H.a([],p)
o=new G.d("Monstrous",k,n,o,0)
$.$get$b().h(0,o)
$.Cr=o
o=H.a(["rooty tooty point and shooty"],p)
n=$.q
k=H.a([$.aK,$.al,$.ah],l)
H.a([],p)
o=new G.d("Rooty Tooty Point and Shooty",k,n,o,0)
$.$get$b().h(0,o)
$.Dh=o
o=H.a(["golden"],p)
n=$.u
k=H.a([$.D,$.b3],l)
H.a([],p)
o=new G.d("Golden",k,n,o,0)
$.$get$b().h(0,o)
$.tm=o
o=H.a(["platinum"],p)
n=$.u
k=H.a([$.aP,$.D],l)
H.a([],p)
o=new G.d("Platinum",k,n,o,0)
$.$get$b().h(0,o)
$.mm=o
o=H.a(["horseshoe"],p)
n=$.q
k=H.a([$.bW,$.D],l)
H.a([],p)
o=new G.d("Horseshoe",k,n,o,0)
$.$get$b().h(0,o)
$.vT=o
o=H.a(["felt"],p)
n=$.q
k=H.a([$.O,$.cd],l)
H.a([],p)
o=new G.d("Felt",k,n,o,0)
$.$get$b().h(0,o)
$.B1=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.ah],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.w_=o
o=H.a(["marble"],p)
n=$.u
k=H.a([$.av,$.c7],l)
H.a([],p)
o=new G.d("Marble",k,n,o,0)
$.$get$b().h(0,o)
$.Bu=o
o=H.a(["glitched"],p)
n=$.F
k=H.a([$.bn,$.a6],l)
H.a([],p)
o=new G.d("Glitched",k,n,o,0)
$.$get$b().h(0,o)
$.vQ=o
o=H.a(["debugging"],p)
n=$.q
k=H.a([$.aJ,$.a6],l)
H.a([],p)
o=new G.d("Debugging",k,n,o,0)
$.$get$b().h(0,o)
$.AC=o
o=H.a(["Iron Maiden","Metalic"],p)
n=$.q
k=H.a([$.D,$.aU,$.a8],l)
H.a([],p)
o=new G.d("Metalic",k,n,o,0)
$.$get$b().h(0,o)
$.Cl=o
o=H.a(["Simulacrum"],p)
n=$.H
k=H.a([$.ap,$.aO],l)
H.a([],p)
o=new G.d("Simulacrum",k,n,o,0)
$.$get$b().h(0,o)
$.DO=o
o=H.a(["Imitation"],p)
n=$.q
k=H.a([$.an,$.aO],l)
H.a([],p)
o=new G.d("Imitation",k,n,o,0)
$.$get$b().h(0,o)
$.BM=o
o=H.a(["Placebo"],p)
n=$.q
k=H.a([$.aJ,$.aO],l)
H.a([],p)
o=new G.d("Placebo",k,n,o,0)
$.$get$b().h(0,o)
$.CS=o
o=H.a(["counterfeit"],p)
n=$.q
k=H.a([$.b3,$.aO],l)
H.a([],p)
o=new G.d("Counterfeit",k,n,o,0)
$.$get$b().h(0,o)
$.Av=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.al,$.aG,$.aS],l)
H.a([],p)
o=new G.d("Surreal1",k,n,o,0)
$.$get$b().h(0,o)
$.E7=o
o=H.a(["Brainy"],p)
n=$.H
k=H.a([$.X,$.bh],l)
H.a([],p)
o=new G.d("Brainy",k,n,o,0)
$.$get$b().h(0,o)
$.A_=o
o=H.a(["Incendiary"],p)
n=$.q
k=H.a([$.ao,$.bo],l)
H.a([],p)
o=new G.d("Incendiary",k,n,o,0)
$.$get$b().h(0,o)
$.BN=o
o=H.a(["C-4"],p)
n=$.u
k=H.a([$.bo,$.aA],l)
H.a([],p)
o=new G.d("C-4",k,n,o,0)
$.$get$b().h(0,o)
$.A6=o
o=H.a(["fae"],p)
n=$.q
k=H.a([$.a1,$.aP,$.bn],l)
H.a([],p)
o=new G.d("Fae",k,n,o,0)
$.$get$b().h(0,o)
$.AZ=o
o=H.a(["Plutonium"],p)
n=$.u
k=H.a([$.D,$.c1],l)
H.a([],p)
o=new G.d("Plutonium",k,n,o,0)
$.$get$b().h(0,o)
$.CW=o
o=H.a(["Lithium"],p)
n=$.u
k=H.a([$.D,$.a6],l)
H.a([],p)
o=new G.d("Lithium",k,n,o,0)
$.$get$b().h(0,o)
$.C4=o
o=H.a(["Molten"],p)
n=$.u
k=H.a([$.D,$.ao],l)
H.a([],p)
o=new G.d("Molten",k,n,o,0)
$.$get$b().h(0,o)
$.Cq=o
o=H.a(["Magma","Lava","Sulphuric"],p)
n=$.u
k=H.a([$.av,$.ao],l)
H.a([],p)
o=new G.d("Magma",k,n,o,0)
$.$get$b().h(0,o)
$.Ca=o
o=H.a(["Rusty"],p)
n=$.F
k=H.a([$.D,$.bP],l)
H.a([],p)
o=new G.d("Rusty",k,n,o,0)
$.$get$b().h(0,o)
$.Dk=o
o=H.a(["Fonzie"],p)
n=$.q
k=H.a([$.au,$.al,$.ah],l)
H.a([],p)
o=new G.d("Fonzie",k,n,o,0)
$.$get$b().h(0,o)
$.Bg=o
o=H.a(["Romcom"],p)
n=$.q
k=H.a([$.aB,$.aS],l)
H.a([],p)
o=new G.d("Romcom",k,n,o,0)
$.$get$b().h(0,o)
$.Dg=o
o=H.a(["Alluring"],p)
n=$.q
k=H.a([$.ax,$.aP],l)
H.a([],p)
o=new G.d("Alluring",k,n,o,0)
$.$get$b().h(0,o)
$.zI=o
o=H.a(["Masquerade"],p)
n=$.q
k=H.a([$.ax,$.aj],l)
H.a([],p)
o=new G.d("Masquerade",k,n,o,0)
$.$get$b().h(0,o)
$.Ce=o
o=H.a(["Stoneskin","Petrified"],p)
n=$.q
k=H.a([$.av,$.bh],l)
H.a([],p)
o=new G.d("Stoneskin",k,n,o,0)
$.$get$b().h(0,o)
$.E4=o
o=H.a(["Psionic"],p)
n=$.q
k=H.a([$.a1,$.X],l)
H.a([],p)
o=new G.d("Psionic",k,n,o,0)
$.$get$b().h(0,o)
$.D8=o
o=H.a(["Dwarven"],p)
n=$.q
k=H.a([$.a1,$.av],l)
H.a([],p)
o=new G.d("Dwarven",k,n,o,0)
$.$get$b().h(0,o)
$.AQ=o
o=H.a(["Elemental","Animated"],p)
n=$.u
k=H.a([$.a1,$.ap],l)
H.a([],p)
o=new G.d("Elemental",k,n,o,0)
$.$get$b().h(0,o)
$.AV=o
o=H.a(["Gourmet"],p)
n=$.H
k=H.a([$.an,$.ah],l)
H.a([],p)
o=new G.d("Gourmet",k,n,o,0)
$.$get$b().h(0,o)
$.Bt=o
o=H.a(["Stained Glass"],p)
n=$.u
k=H.a([$.aT,$.ax,$.b3],l)
H.a([],p)
o=new G.d("Stained Glass",k,n,o,0)
$.$get$b().h(0,o)
$.E1=o
o=H.a(["Gauze"],p)
n=$.q
k=H.a([$.aJ,$.O],l)
H.a([],p)
o=new G.d("Gauze",k,n,o,0)
$.$get$b().h(0,o)
$.Bm=o
o=H.a(["Locked"],p)
n=$.F
k=H.a([$.b2,$.bq],l)
H.a([],p)
o=new G.d("Locked",k,n,o,0)
$.$get$b().h(0,o)
$.C6=o
o=H.a(["Etched"],p)
n=$.q
k=H.a([$.av,$.J],l)
H.a([],p)
o=new G.d("Etched",k,n,o,0)
$.$get$b().h(0,o)
$.AY=o
o=H.a(["Papyrus"],p)
n=$.u
k=H.a([$.J,$.aQ],l)
H.a([],p)
o=new G.d("Papyrus",k,n,o,0)
$.$get$b().h(0,o)
$.CK=o
o=H.a(["film"],p)
n=$.q
k=H.a([$.J,$.aA],l)
H.a([],p)
o=new G.d("Film",k,n,o,0)
$.$get$b().h(0,o)
$.B6=o
o=H.a(["Saucey"],p)
n=$.u
k=H.a([$.bn,$.bq,$.bQ],l)
H.a([],p)
o=new G.d("Saucey",k,n,o,0)
$.$get$b().h(0,o)
$.Ds=o
o=H.a(["Lottery"],p)
n=$.q
k=H.a([$.J,$.bW],l)
H.a([],p)
o=new G.d("Lottery",k,n,o,0)
$.$get$b().h(0,o)
$.C8=o
o=H.a(["Blindfolded"],p)
n=$.q
k=H.a([$.aj,$.O],l)
H.a([],p)
o=new G.d("Blindfolded",k,n,o,0)
$.$get$b().h(0,o)
$.vG=o
o=H.a(["Possessed"],p)
n=$.F
k=H.a([$.bV,$.bh],l)
H.a([],p)
o=new G.d("Possessed",k,n,o,0)
$.$get$b().h(0,o)
$.D4=o
o=H.a(["Infernal"],p)
n=$.H
k=H.a([$.bV,$.ao],l)
H.a([],p)
o=new G.d("Infernal",k,n,o,0)
$.$get$b().h(0,o)
$.BO=o
o=H.a(["Geppetto's","Pinocchio"],p)
n=$.q
k=H.a([$.W,$.bi,$.tw,$.ap],l)
H.a([],p)
o=new G.d("Geppetto",k,n,o,0)
$.$get$b().h(0,o)
$.Bn=o
o=H.a(["Abominable"],p)
n=$.H
k=H.a([$.bh,$.bn],l)
H.a([],p)
o=new G.d("Abominable",k,n,o,0)
$.$get$b().h(0,o)
$.zG=o
o=H.a(["Ashen"],p)
n=$.q
k=H.a([$.aB,$.aD],l)
H.a([],p)
o=new G.d("Ashen",k,n,o,0)
$.$get$b().h(0,o)
$.zN=o
o=H.a(["Pale"],p)
n=$.q
k=H.a([$.aB,$.bk],l)
H.a([],p)
o=new G.d("Pale",k,n,o,0)
$.$get$b().h(0,o)
$.CH=o
o=H.a(["Pitch"],p)
n=$.q
k=H.a([$.aB,$.bq],l)
H.a([],p)
o=new G.d("Pitch",k,n,o,0)
$.$get$b().h(0,o)
$.CR=o
o=H.a(["Lit"],p)
n=$.H
k=H.a([$.al,$.ao],l)
H.a([],p)
o=new G.d("Lit",k,n,o,0)
$.$get$b().h(0,o)
$.C3=o
o=H.a(["Hypnotizing"],p)
n=$.q
k=H.a([$.a1,$.bk],l)
H.a([],p)
o=new G.d("Hypnotizing",k,n,o,0)
$.$get$b().h(0,o)
$.BF=o
o=H.a(["Tranquilizing"],p)
n=$.q
k=H.a([$.bk,$.b2],l)
H.a([],p)
o=new G.d("Tranquilizing",k,n,o,0)
$.$get$b().h(0,o)
$.El=o
o=H.a([],p)
n=$.q
k=H.a([$.bk,$.bq],l)
H.a([],p)
o=new G.d("",k,n,o,0)
$.$get$b().h(0,o)
$.A9=o
o=H.a(["Ghost Rider's"],p)
n=$.a9
k=H.a([$.hh,$.ao,$.bV],l)
H.a([],p)
o=new G.d("Ghost Rider",k,n,o,0)
$.$get$b().h(0,o)
$.Bo=o
o=H.a(["Logical"],p)
n=$.H
k=H.a([$.X,$.bm],l)
H.a([],p)
o=new G.d("Logical",k,n,o,0)
$.$get$b().h(0,o)
$.C7=o
o=H.a(["Duelist's"],p)
n=$.a9
k=H.a([$.aK,$.ah],l)
H.a([],p)
o=new G.d("Duelist's",k,n,o,0)
$.$get$b().h(0,o)
$.AN=o
o=H.a(["Silenced"],p)
n=$.F
k=H.a([$.aK,$.aj],l)
H.a([],p)
o=new G.d("Silenced",k,n,o,0)
$.$get$b().h(0,o)
$.DL=o
o=H.a(["Deudly"],p)
n=$.F
k=H.a([$.aK,$.bP],l)
H.a([],p)
o=new G.d("Deudly",k,n,o,0)
$.$get$b().h(0,o)
$.AB=o
o=H.a(["Screaming"],p)
n=$.F
k=H.a([$.aU,$.aV],l)
H.a([],p)
o=new G.d("Screaming",k,n,o,0)
$.$get$b().h(0,o)
$.Dx=o
o=H.a(["Cacophonous"],p)
n=$.H
k=H.a([$.bQ,$.a8],l)
H.a([],p)
o=new G.d("Cacophonous",k,n,o,0)
$.$get$b().h(0,o)
$.A7=o
o=H.a(["Sublime"],p)
n=$.H
k=H.a([$.bQ,$.ax],l)
H.a([],p)
o=new G.d("Sublime",k,n,o,0)
$.$get$b().h(0,o)
$.E6=o
o=H.a(["Masterwork"],p)
n=$.u
k=H.a([$.bi,$.b3],l)
H.a([],p)
o=new G.d("Masterwork",k,n,o,0)
$.$get$b().h(0,o)
$.Cg=o
o=H.a(["BroodFester"],p)
n=$.q
k=H.a([$.ap,$.aV,$.bn,$.a1],l)
H.a([],p)
o=new G.d("BroodFester",k,n,o,0)
$.$get$b().h(0,o)
$.A1=o
o=H.a(["[REDACTED]"],p)
n=$.q
k=H.a([$.bn,$.aj],l)
H.a([],p)
o=new G.d("[REDACTED]",k,n,o,0)
$.$get$b().h(0,o)
$.De=o
o=H.a(["Pop Rocks"],p)
n=$.q
k=H.a([$.an,$.bo],l)
H.a([],p)
o=new G.d("Pop Rocks",k,n,o,0)
$.$get$b().h(0,o)
$.D0=o
o=H.a(["Disguised"],p)
n=$.F
k=H.a([$.aj,$.aO],l)
H.a([],p)
o=new G.d("Disguised",k,n,o,0)
$.$get$b().h(0,o)
$.AI=o
o=H.a(["Haunted"],p)
n=$.F
k=H.a([$.aG,$.bV],l)
H.a([],p)
o=new G.d("Haunted",k,n,o,0)
$.$get$b().h(0,o)
$.Bz=o
o=H.a(["Cognitohazardous"],p)
n=$.F
k=H.a([$.bn,$.X],l)
H.a([],p)
o=new G.d("Cognitohazardous",k,n,o,0)
$.$get$b().h(0,o)
$.Ap=o
o=H.a(["Staticy"],p)
n=$.F
k=H.a([$.aG,$.a6],l)
H.a([],p)
o=new G.d("Staticy",k,n,o,0)
$.$get$b().h(0,o)
$.E2=o
o=H.a(["Jadite"],p)
n=$.q
k=H.a([$.aT,$.c1],l)
H.a([],p)
o=new G.d("Jadite",k,n,o,0)
$.$get$b().h(0,o)
$.BS=o
o=H.a(["Tickling"],p)
n=$.q
k=H.a([$.aS,$.aG],l)
H.a([],p)
o=new G.d("Tickling",k,n,o,0)
$.$get$b().h(0,o)
$.Eh=o
o=H.a(["Composite"],p)
n=$.q
k=H.a([$.D,$.bO],l)
H.a([],p)
o=new G.d("Composite",k,n,o,0)
$.$get$b().h(0,o)
$.Ar=o
o=H.a(["High-Powered"],p)
n=$.F
k=H.a([$.bo,$.aK],l)
H.a([],p)
o=new G.d("High-Powered",k,n,o,0)
$.$get$b().h(0,o)
$.BA=o
o=H.a(["Concussive"],p)
n=$.q
k=H.a([$.bo,$.ad],l)
H.a([],p)
o=new G.d("Concussive",k,n,o,0)
$.$get$b().h(0,o)
$.As=o
o=H.a(["Down"],p)
n=$.u
k=H.a([$.aY,$.bz],l)
H.a([],p)
o=new G.d("Down",k,n,o,0)
$.$get$b().h(0,o)
$.AK=o
o=H.a(["Prickly"],p)
n=$.u
k=H.a([$.aG,$.aL],l)
H.a([],p)
o=new G.d("Prickly",k,n,o,0)
$.$get$b().h(0,o)
$.D7=o
o=H.a(["Deep-Web","Dark-Net"],p)
n=$.q
k=H.a([$.aG,$.aj,$.a6],l)
H.a([],p)
o=new G.d("Deep-Web",k,n,o,0)
$.$get$b().h(0,o)
$.AE=o
o=H.a(["Jagged","Sawtooth"],p)
n=$.u
k=H.a([$.aL,$.au],l)
H.a([],p)
o=new G.d("Jagged",k,n,o,0)
$.$get$b().h(0,o)
$.BT=o
o=H.a(["Nanofiber"],p)
n=$.u
k=H.a([$.O,$.X],l)
H.a([],p)
o=new G.d("Nanofiber",k,n,o,0)
$.$get$b().h(0,o)
$.Cx=o
o=H.a(["Clanging"],p)
n=$.q
k=H.a([$.D,$.aU],l)
H.a([],p)
o=new G.d("Clanging",k,n,o,0)
$.$get$b().h(0,o)
$.Al=o
o=H.a(["Silver"],p)
n=$.u
k=H.a([$.D,$.ah],l)
H.a([],p)
o=new G.d("Silver",k,n,o,0)
$.$get$b().h(0,o)
$.DN=o
o=H.a(["Withered"],p)
n=$.F
k=H.a([$.aD,$.aQ],l)
H.a([],p)
o=new G.d("Withered",k,n,o,0)
$.$get$b().h(0,o)
$.Ex=o
o=H.a(["Shattered"],p)
n=$.F
k=H.a([$.aT,$.bP],l)
H.a([],p)
o=new G.d("Shattered",k,n,o,0)
$.$get$b().h(0,o)
$.DD=o
o=H.a(["Miner's"],p)
n=$.a9
k=H.a([$.av,$.D],l)
H.a([],p)
o=new G.d("Miner's",k,n,o,0)
$.$get$b().h(0,o)
$.Co=o
o=H.a(["Singing"],p)
n=$.q
k=H.a([$.a8,$.ap],l)
H.a([],p)
o=new G.d("Singing",k,n,o,0)
$.$get$b().h(0,o)
$.DK=o
o=H.a(["Mitochondrial"],p)
n=$.q
k=H.a([$.bh,$.a6],l)
H.a([],p)
o=new G.d("Mitochondrial",k,n,o,0)
$.$get$b().h(0,o)
$.Cp=o
o=H.a(["Blackout","EMP"],p)
n=$.q
k=H.a([$.aj,$.a6],l)
H.a([],p)
o=new G.d("Blackout",k,n,o,0)
$.$get$b().h(0,o)
$.zV=o
o=H.a(["Asbestos"],p)
n=$.u
k=H.a([$.av,$.bK],l)
H.a([],p)
o=new G.d("Asbestos",k,n,o,0)
$.$get$b().h(0,o)
$.zH=o
o=H.a(["Mercurial"],p)
n=$.u
k=H.a([$.bK,$.D],l)
H.a([],p)
o=new G.d("Mercurial",k,n,o,0)
$.$get$b().h(0,o)
$.Ch=o
o=H.a(["Bulletproof"],p)
n=$.u
k=H.a([$.O,$.ad],l)
H.a([],p)
o=new G.d("Bulletproof",k,n,o,0)
$.$get$b().h(0,o)
$.A4=o
o=H.a(["Cotton"],p)
n=$.u
k=H.a([$.aQ,$.O],l)
H.a([],p)
o=new G.d("Cotton",k,n,o,0)
$.$get$b().h(0,o)
$.At=o
o=H.a(["Blinding","Flashbang","Solar Flare"],p)
n=$.q
k=H.a([$.bq,$.aP],l)
H.a([],p)
o=new G.d("Blinding",k,n,o,0)
$.$get$b().h(0,o)
$.zW=o
o=H.a(["Brilliant"],p)
n=$.H
k=H.a([$.aP,$.X],l)
H.a([],p)
o=new G.d("Brilliant",k,n,o,0)
$.$get$b().h(0,o)
$.A0=o
o=H.a(["Offensive"],p)
n=$.H
k=H.a([$.bq,$.X],l)
H.a([],p)
o=new G.d("Offensive",k,n,o,0)
$.$get$b().h(0,o)
$.CD=o
o=H.a(["Poached"],p)
n=$.F
k=H.a([$.bh,$.b3],l)
H.a([],p)
o=new G.d("Poached",k,n,o,0)
$.$get$b().h(0,o)
$.CX=o
o=H.a(["Tapestry"],p)
n=$.u
k=H.a([$.O,$.ax],l)
H.a([],p)
o=new G.d("Tapestry",k,n,o,0)
$.$get$b().h(0,o)
$.E9=o
o=H.a(["Itchy"],p)
n=$.H
k=H.a([$.O,$.aG],l)
H.a([],p)
o=new G.d("Itchy",k,n,o,0)
$.$get$b().h(0,o)
$.BQ=o
o=H.a(["Wishbone"],p)
n=$.u
k=H.a([$.bW,$.aX],l)
H.a([],p)
o=new G.d("Wishbone",k,n,o,0)
$.$get$b().h(0,o)
$.Ew=o
o=H.a(["Rattling"],p)
n=$.F
k=H.a([$.aU,$.aX],l)
H.a([],p)
o=new G.d("Rattling",k,n,o,0)
$.$get$b().h(0,o)
$.Dc=o
o=H.a(["Cranial"],p)
n=$.u
k=H.a([$.X,$.aX],l)
H.a([],p)
o=new G.d("Cranial",k,n,o,0)
$.$get$b().h(0,o)
$.Ax=o
o=H.a(["Humerus"],p)
n=$.u
k=H.a([$.aS,$.aX],l)
H.a([],p)
o=new G.d("Humerus",k,n,o,0)
$.$get$b().h(0,o)
$.BD=o
o=H.a(["Massage"],p)
n=$.q
k=H.a([$.aJ,$.aY],l)
H.a([],p)
o=new G.d("Massage",k,n,o,0)
$.$get$b().h(0,o)
$.Cf=o
o=H.a(["Pestersome","Irksome"],p)
n=$.H
k=H.a([$.aU,$.bq],l)
H.a([],p)
o=new G.d("Pestersome",k,n,o,0)
$.$get$b().h(0,o)
$.CM=o
o=H.a(["Shockwave"],p)
n=$.q
k=H.a([$.aU,$.bo],l)
H.a([],p)
o=new G.d("Shockwave",k,n,o,0)
$.$get$b().h(0,o)
$.DG=o
o=H.a(["Antivenom"],p)
n=$.q
k=H.a([$.bK,$.aJ],l)
H.a([],p)
o=new G.d("Antivenom",k,n,o,0)
$.$get$b().h(0,o)
$.zK=o
o=H.a(["Will O Wisp","Demonic"],p)
n=$.u
k=H.a([$.ao,$.a1],l)
H.a([],p)
o=new G.d("Will O Wisp",k,n,o,0)
$.$get$b().h(0,o)
$.Et=o
o=H.a(["Fiberglass"],p)
n=$.u
k=H.a([$.O,$.aT],l)
H.a([],p)
o=new G.d("Fiberglass",k,n,o,0)
$.$get$b().h(0,o)
$.B4=o
o=H.a(["Skull"],p)
n=$.u
k=H.a([$.aX,$.aV],l)
H.a([],p)
o=new G.d("Skull",k,n,o,0)
$.$get$b().h(0,o)
$.DR=o
o=H.a(["Enchanted"],p)
n=$.F
k=H.a([$.a1,$.bW],l)
H.a([],p)
o=new G.d("Enchanted",k,n,o,0)
$.$get$b().h(0,o)
$.AX=o
o=H.a(["Berserker's"],p)
n=$.a9
k=H.a([$.a1,$.bq],l)
H.a([],p)
o=new G.d("Berserker's",k,n,o,0)
$.$get$b().h(0,o)
$.zU=o
o=H.a(["Clerical"],p)
n=$.a9
k=H.a([$.a1,$.aJ],l)
H.a([],p)
o=new G.d("Clerical",k,n,o,0)
$.$get$b().h(0,o)
$.Am=o
o=H.a(["Cauterizing"],p)
n=$.q
k=H.a([$.aJ,$.ao],l)
H.a([],p)
o=new G.d("Cauterizing",k,n,o,0)
$.$get$b().h(0,o)
$.Ad=o
o=H.a(["X-Ray"],p)
n=$.q
k=H.a([$.c1,$.aP],l)
H.a([],p)
o=new G.d("X-Ray",k,n,o,0)
$.$get$b().h(0,o)
$.EA=o
o=H.a(["Clever"],p)
n=$.H
k=H.a([$.X,$.bW],l)
H.a([],p)
o=new G.d("Clever",k,n,o,0)
$.$get$b().h(0,o)
$.An=o
o=H.a(["Fireplace"],p)
n=$.q
k=H.a([$.aY,$.ao],l)
H.a([],p)
o=new G.d("Fireplace",k,n,o,0)
$.$get$b().h(0,o)
$.B7=o
o=H.a(["Crackling"],p)
n=$.F
k=H.a([$.aU,$.ao],l)
H.a([],p)
o=new G.d("Crackling",k,n,o,0)
$.$get$b().h(0,o)
$.Aw=o
o=H.a(["Thumping"],p)
n=$.F
k=H.a([$.aU,$.c7],l)
H.a([],p)
o=new G.d("Thumping",k,n,o,0)
$.$get$b().h(0,o)
$.Ef=o
o=H.a(["Shrieking","Banshee"],p)
n=$.F
k=H.a([$.bV,$.aU],l)
H.a([],p)
o=new G.d("Banshee",k,n,o,0)
$.$get$b().h(0,o)
$.DI=o
o=H.a(["Surreal"],p)
n=$.H
k=H.a([$.aS,$.bn],l)
H.a([],p)
o=new G.d("Surreal2",k,n,o,0)
$.$get$b().h(0,o)
$.E8=o
o=H.a(["Aloe","Willowbark"],p)
n=$.q
k=H.a([$.aJ,$.aQ],l)
H.a([],p)
o=new G.d("Aloe",k,n,o,0)
$.$get$b().h(0,o)
$.zJ=o
o=H.a(["Rose"],p)
n=$.q
k=H.a([$.aB,$.aQ],l)
H.a([],p)
o=new G.d("Rose",k,n,o,0)
$.$get$b().h(0,o)
$.Di=o
o=H.a(["Knock Knock"],p)
n=$.q
k=H.a([$.aS,$.ad],l)
H.a([],p)
o=new G.d("Knock Knock",k,n,o,0)
$.$get$b().h(0,o)
$.BY=o
o=H.a(["Lifesteal"],p)
n=$.q
k=H.a([$.a1,$.bK],l)
H.a([],p)
o=new G.d("Lifesteal",k,n,o,0)
$.$get$b().h(0,o)
$.C0=o
o=H.a(["Tragic"],p)
n=$.q
k=H.a([$.ax,$.aD],l)
H.a([],p)
o=new G.d("Tragic",k,n,o,0)
$.$get$b().h(0,o)
$.Ek=o
o=H.a(["Slapstick"],p)
n=$.q
k=H.a([$.au,$.aS],l)
H.a([],p)
o=new G.d("Slapstick",k,n,o,0)
$.$get$b().h(0,o)
$.DS=o
o=H.a(["Gross Out"],p)
n=$.q
k=H.a([$.bQ,$.aS],l)
H.a([],p)
o=new G.d("Gross Out",k,n,o,0)
$.$get$b().h(0,o)
$.vS=o
o=H.a(["Flowery"],p)
n=$.u
k=H.a([$.ax,$.aQ],l)
H.a([],p)
o=new G.d("Flowery",k,n,o,0)
$.$get$b().h(0,o)
$.Bd=o
o=H.a(["Poison Ivy"],p)
n=$.u
k=H.a([$.bK,$.aQ],l)
H.a([],p)
o=new G.d("Poison Ivy",k,n,o,0)
$.$get$b().h(0,o)
$.CZ=o
o=H.a(["Winged","Pegasus","Angelic"],p)
n=$.F
k=H.a([$.a1,$.bz],l)
H.a([],p)
o=new G.d("Winged",k,n,o,0)
$.$get$b().h(0,o)
$.Eu=o
o=H.a(["Forbidden Fruit"],p)
n=$.q
k=H.a([$.aQ,$.an,$.aD],l)
H.a([],p)
o=new G.d("Forbidden Fruit",k,n,o,0)
$.$get$b().h(0,o)
$.Bh=o
o=H.a(["Lawful"],p)
n=$.H
k=H.a([$.b2,$.ap],l)
H.a([],p)
o=new G.d("Lawful",k,n,o,0)
$.$get$b().h(0,o)
$.BZ=o
o=H.a(["Chaotic"],p)
n=$.H
k=H.a([$.bq,$.ap],l)
H.a([],p)
o=new G.d("Chaotic",k,n,o,0)
$.$get$b().h(0,o)
$.Ah=o
o=H.a(["Hypothermic"],p)
n=$.F
k=H.a([$.aD,$.bm],l)
H.a([],p)
o=new G.d("Hypothermic",k,n,o,0)
$.$get$b().h(0,o)
$.BG=o
o=H.a(["Hyperthermic"],p)
n=$.F
k=H.a([$.aD,$.ao],l)
H.a([],p)
o=new G.d("Hyperthermic",k,n,o,0)
$.$get$b().h(0,o)
$.BE=o
o=H.a(["Shackled"],p)
n=$.F
k=H.a([$.b2,$.c7],l)
H.a([],p)
o=new G.d("Shackled",k,n,o,0)
$.$get$b().h(0,o)
$.Dz=o
o=H.a(["Poetic"],p)
n=$.H
k=H.a([$.X,$.aB],l)
H.a([],p)
o=new G.d("Poetic",k,n,o,0)
$.$get$b().h(0,o)
$.CY=o
o=H.a(["Holographic"],p)
n=$.u
k=H.a([$.aP,$.X,$.aT,$.a6],l)
H.a([],p)
o=new G.d("Holographic",k,n,o,0)
$.$get$b().h(0,o)
$.BB=o
o=H.a(["Casket","Coffin"],p)
n=$.u
k=H.a([$.W,$.aD],l)
H.a([],p)
o=new G.d("Casket",k,n,o,0)
$.$get$b().h(0,o)
$.Ac=o
o=H.a(["Spectral"],p)
n=$.u
k=H.a([$.bV,$.a1],l)
H.a([],p)
o=new G.d("Spectral",k,n,o,0)
$.$get$b().h(0,o)
$.DY=o
o=H.a(["Phoenix"],p)
n=$.u
k=H.a([$.ao,$.bz],l)
H.a([],p)
o=new G.d("Phoenix",k,n,o,0)
$.$get$b().h(0,o)
$.CN=o
o=H.a(["Tattered"],p)
n=$.F
k=H.a([$.O,$.aD],l)
H.a([],p)
o=new G.d("Tattered",k,n,o,0)
$.$get$b().h(0,o)
$.Ec=o
o=H.a(["Woodwind","Reed"],p)
n=$.q
k=H.a([$.a8,$.W],l)
H.a([],p)
o=new G.d("Woodwind",k,n,o,0)
$.$get$b().h(0,o)
$.Ez=o
o=H.a(["Bone Hurting"],p)
n=$.q
k=H.a([$.aG,$.aX],l)
H.a([],p)
o=new G.d("Bone Hurting",k,n,o,0)
$.$get$b().h(0,o)
$.zY=o
o=H.a(["Bone Healing:"],p)
n=$.q
k=H.a([$.aJ,$.aX],l)
H.a([],p)
o=new G.d("Bone Healing:",k,n,o,0)
$.$get$b().h(0,o)
$.zX=o
o=H.a(["Calcium"],p)
n=$.u
k=H.a([$.aX,$.aJ,$.an],l)
H.a([],p)
o=new G.d("Calcium",k,n,o,0)
$.$get$b().h(0,o)
$.A8=o
o=H.a(["Fleece"],p)
n=$.u
k=H.a([$.O,$.ao],l)
H.a([],p)
o=new G.d("Fleece",k,n,o,0)
$.$get$b().h(0,o)
$.Ba=o
o=H.a(["Potted"],p)
n=$.u
k=H.a([$.bO,$.aQ],l)
H.a([],p)
o=new G.d("Potted",k,n,o,0)
$.$get$b().h(0,o)
$.D6=o
o=H.a(["Canned","Tinned","Potassium"],p)
n=$.u
k=H.a([$.D,$.an],l)
H.a([],p)
o=new G.d("Canned",k,n,o,0)
$.$get$b().h(0,o)
$.Aa=o
o=H.a(["Diseased"],p)
n=$.F
k=H.a([$.aD,$.bh],l)
H.a([],p)
o=new G.d("Diseased",k,n,o,0)
$.$get$b().h(0,o)
$.AF=o
o=H.a(["Porcupine"],p)
n=$.u
k=H.a([$.aL,$.cd],l)
H.a([],p)
o=new G.d("Porcupine",k,n,o,0)
$.$get$b().h(0,o)
$.D2=o
o=H.a(["Fanged"],p)
n=$.F
k=H.a([$.aX,$.aL],l)
H.a([],p)
o=new G.d("Fanged",k,n,o,0)
$.$get$b().h(0,o)
$.B0=o
o=H.a(["Basalt"],p)
n=$.u
k=H.a([$.av,$.aj],l)
H.a([],p)
o=new G.d("Basalt",k,n,o,0)
$.$get$b().h(0,o)
$.zR=o
o=H.a(["Obsidian"],p)
n=$.u
k=H.a([$.aT,$.aj],l)
H.a([],p)
o=new G.d("Obsidian",k,n,o,0)
$.$get$b().h(0,o)
$.CC=o
o=H.a(["Fenestrated"],p)
n=$.u
k=H.a([$.aT,$.W],l)
H.a([],p)
o=new G.d("Fenestrated",k,n,o,0)
$.$get$b().h(0,o)
$.B2=o
o=H.a(["Plexiglass"],p)
n=$.u
k=H.a([$.aT,$.aA],l)
H.a([],p)
o=new G.d("Plexiglass",k,n,o,0)
$.$get$b().h(0,o)
$.CV=o
o=H.a(["Ceramic Wrap"],p)
n=$.q
k=H.a([$.bO,$.J],l)
H.a([],p)
o=new G.d("Ceramic Wrap",k,n,o,0)
$.$get$b().h(0,o)
$.Ag=o
o=H.a(["Fungal"],p)
n=$.u
k=H.a([$.aQ,$.bQ],l)
H.a([],p)
o=new G.d("Fungal",k,n,o,0)
$.$get$b().h(0,o)
$.Bl=o
o=H.a(["Thorny"],p)
n=$.F
k=H.a([$.aQ,$.aL],l)
H.a([],p)
o=new G.d("Thorny",k,n,o,0)
$.$get$b().h(0,o)
$.Ee=o
o=H.a(["Bulbed"],p)
n=$.F
k=H.a([$.aQ,$.ad],l)
H.a([],p)
o=new G.d("Bulbed",k,n,o,0)
$.$get$b().h(0,o)
$.A3=o
o=H.a(["Glass Cannon"],p)
n=$.q
k=H.a([$.aT,$.aK],l)
H.a([],p)
o=new G.d("Glass Cannon",k,n,o,0)
$.$get$b().h(0,o)
$.Br=o
o=H.a(["Caoutchouc"],p)
n=$.q
k=H.a([$.aQ,$.c8],l)
H.a([],p)
o=new G.d("Caoutchouc",k,n,o,0)
$.$get$b().h(0,o)
$.CT=o
o=H.a(["Cellulose"],p)
n=$.u
k=H.a([$.aQ,$.aA],l)
H.a([],p)
o=new G.d("Cellulose",k,n,o,0)
$.$get$b().h(0,o)
$.Af=o
o=H.a(["Horrorcore"],p)
n=$.q
k=H.a([$.a8,$.aV],l)
H.a([],p)
o=new G.d("Horrorcore",k,n,o,0)
$.$get$b().h(0,o)
$.BC=o
o=H.a(["Nightcore"],p)
n=$.q
k=H.a([$.bn,$.a8],l)
H.a([],p)
o=new G.d("Nightcore",k,n,o,0)
$.$get$b().h(0,o)
$.Cz=o
o=H.a(["Crazy Bus"],p)
n=$.q
k=H.a([$.bn,$.a6,$.a8],l)
H.a([],p)
o=new G.d("Crazy Bus",k,n,o,0)
$.$get$b().h(0,o)
$.Ay=o
o=H.a(["Burdock"],p)
n=$.u
k=H.a([$.aQ,$.cd],l)
H.a([],p)
o=new G.d("Burdock",k,n,o,0)
$.$get$b().h(0,o)
$.A5=o
o=H.a(["Necrotic"],p)
n=$.F
k=H.a([$.aX,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Necrotic",k,n,o,0))
o=H.a(["Stem"],p)
n=$.u
k=H.a([$.aX,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stem",k,n,o,0))
o=H.a(["DryBone"],p)
n=$.F
k=H.a([$.aX,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("DryBone",k,n,o,0))
o=H.a(["XyloBone"],p)
n=$.q
k=H.a([$.aX,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("XyloBone",k,n,o,0))
o=H.a(["Ribcage"],p)
n=$.u
k=H.a([$.aX,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ribcage",k,n,o,0))
o=H.a(["BoneZone"],p)
n=$.q
k=H.a([$.aX,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("BoneZone",k,n,o,0))
o=H.a(["Creaky"],p)
n=$.H
k=H.a([$.W,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Creaky",k,n,o,0))
o=H.a(["Maple"],p)
n=$.u
k=H.a([$.W,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Maple",k,n,o,0))
o=H.a(["Mahagony"],p)
n=$.u
k=H.a([$.W,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mahagony",k,n,o,0))
o=H.a(["Fenced"],p)
n=$.F
k=H.a([$.W,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fenced",k,n,o,0))
o=H.a(["Bocote"],p)
n=$.u
k=H.a([$.W,$.b3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bocote",k,n,o,0))
o=H.a(["Incense"],p)
n=$.u
k=H.a([$.W,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incense",k,n,o,0))
o=H.a(["Ebony"],p)
n=$.q
k=H.a([$.W,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebony",k,n,o,0))
o=H.a(["Birch"],p)
n=$.u
k=H.a([$.W,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Birch",k,n,o,0))
o=H.a(["Knock-on-Wood"],p)
n=$.q
k=H.a([$.W,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knock-on-Wood",k,n,o,0))
o=H.a(["Firewood"],p)
n=$.q
k=H.a([$.W,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firewood",k,n,o,0))
o=H.a(["BlackForest"],p)
n=$.a9
k=H.a([$.W,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackForest",k,n,o,0))
o=H.a(["Tree"],p)
n=$.u
k=H.a([$.W,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tree",k,n,o,0))
o=H.a(["Ebonwood"],p)
n=$.u
k=H.a([$.W,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ebonwood",k,n,o,0))
o=H.a(["Bark"],p)
n=$.u
k=H.a([$.W,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bark",k,n,o,0))
o=H.a(["Caveman's","Cavewoman's"],p)
n=$.q
k=H.a([$.W,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Caveman's",k,n,o,0))
o=H.a(["3D Printed"],p)
n=$.u
k=H.a([$.aA,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("3D Printed",k,n,o,0))
o=H.a(["Thesis"],p)
n=$.q
k=H.a([$.J,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thesis",k,n,o,0))
o=H.a(["Graphene"],p)
n=$.u
k=H.a([$.J,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graphene",k,n,o,0))
o=H.a(["Prophecy"],p)
n=$.q
k=H.a([$.J,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prophecy",k,n,o,0))
o=H.a(["Bedsheet"],p)
n=$.q
k=H.a([$.O,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedsheet",k,n,o,0))
o=H.a(["Gemstone","Ruby"],p)
n=$.u
k=H.a([$.av,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gemstone",k,n,o,0))
o=H.a(["Pet Rock"],p)
n=$.q
k=H.a([$.av,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pet Rock",k,n,o,0))
o=H.a(["Sand"],p)
n=$.u
k=H.a([$.av,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sand",k,n,o,0))
o=H.a(["Geode"],p)
n=$.u
k=H.a([$.av,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Geode",k,n,o,0))
o=H.a(["Silicon"],p)
n=$.u
k=H.a([$.av,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silicon",k,n,o,0))
o=H.a(["Cryolite","Iceburg"],p)
n=$.u
k=H.a([$.av,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryolite",k,n,o,0))
o=H.a(["Meteor"],p)
n=$.u
k=H.a([$.av,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meteor",k,n,o,0))
o=H.a(["Carbon"],p)
n=$.u
k=H.a([$.av,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon",k,n,o,0))
o=H.a(["Mossy"],p)
n=$.F
k=H.a([$.av,$.cd],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mossy",k,n,o,0))
o=H.a(["Lensed"],p)
n=$.F
k=H.a([$.X,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lensed",k,n,o,0))
o=H.a(["Hide"],p)
n=$.F
k=H.a([$.O,$.bh],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hide",k,n,o,0))
o=H.a(["FeatherBoa"],p)
n=$.q
k=H.a([$.O,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("FeatherBoa",k,n,o,0))
o=H.a(["Tacky"],p)
n=$.H
k=H.a([$.O,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tacky",k,n,o,0))
o=H.a(["Whip"],p)
n=$.q
k=H.a([$.O,$.au],l)
H.a([],p)
$.$get$b().h(0,new G.d("Whip",k,n,o,0))
o=H.a(["Costumed"],p)
n=$.q
k=H.a([$.O,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Costumed",k,n,o,0))
o=H.a(["Punk"],p)
n=$.H
k=H.a([$.O,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Punk",k,n,o,0))
o=H.a(["Weighted"],p)
n=$.F
k=H.a([$.O,$.c7],l)
H.a([],p)
$.$get$b().h(0,new G.d("Weighted",k,n,o,0))
o=H.a(["Favorite"],p)
n=$.H
k=H.a([$.O,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Favorite",k,n,o,0))
o=H.a(["Novelty"],p)
n=$.H
k=H.a([$.O,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Novelty",k,n,o,0))
o=H.a(["Security"],p)
n=$.u
k=H.a([$.O,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Security",k,n,o,0))
o=H.a(["IcePack"],p)
n=$.u
k=H.a([$.O,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("IcePack",k,n,o,0))
o=H.a(["MotionCapture"],p)
n=$.q
k=H.a([$.O,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("MotionCapture",k,n,o,0))
o=H.a(["Silica"],p)
n=$.u
k=H.a([$.O,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silica",k,n,o,0))
o=H.a(["Harp"],p)
n=$.u
k=H.a([$.O,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Harp",k,n,o,0))
o=H.a(["Silk"],p)
n=$.u
k=H.a([$.O,$.b3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Silk",k,n,o,0))
o=H.a(["RedFlag"],p)
n=$.u
k=H.a([$.O,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("RedFlag",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet1",k,n,o,0))
o=H.a(["Satin","Tablecloth"],p)
n=$.u
k=H.a([$.O,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Satin",k,n,o,0))
o=H.a(["MagicCarpet"],p)
n=$.u
k=H.a([$.O,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("MagicCarpet2",k,n,o,0))
o=H.a(["Tweed"],p)
n=$.u
k=H.a([$.O,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tweed",k,n,o,0))
o=H.a(["Jean"],p)
n=$.u
k=H.a([$.O,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Jean",k,n,o,0))
o=H.a(["Tesla"],p)
n=$.a9
k=H.a([$.X,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tesla",k,n,o,0))
o=H.a(["Ashwood"],p)
n=$.u
k=H.a([$.a1,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ashwood",k,n,o,0))
o=H.a(["Peashooter"],p)
n=$.u
k=H.a([$.aQ,$.aK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peashooter",k,n,o,0))
o=H.a(["Lacquer"],p)
n=$.u
k=H.a([$.aA,$.W],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lacquer",k,n,o,0))
o=H.a(["Classpecty"],p)
n=$.u
k=H.a([$.N,$.S],l)
H.a([],p)
$.$get$b().h(0,new G.d("Classpecty",k,n,o,0))
o=H.a(["Smartass"],p)
n=$.H
k=H.a([$.X,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smartass",k,n,o,0))
o=H.a(["Miraculous","Magnets","Miracle"],p)
n=$.H
k=H.a([$.bi,$.aO,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Miraculous",k,n,o,0))
o=H.a(["Pigeon"],p)
n=$.u
k=H.a([$.bn,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pigeon",k,n,o,0))
o=H.a(["Grimoire"],p)
n=$.q
k=H.a([$.bn,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grimoire",k,n,o,0))
o=H.a(["Oglogoth's"],p)
n=$.a9
k=H.a([$.bn,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Oglogoth's",k,n,o,0))
o=H.a(["Echidna's"],p)
n=$.a9
k=H.a([$.Z,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Echidna's",k,n,o,0))
o=H.a(["Superior"],p)
n=$.a9
k=H.a([$.X,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Superior",k,n,o,0))
o=H.a(["Lego"],p)
n=$.u
k=H.a([$.Z,$.aA,$.bk,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lego",k,n,o,0))
o=H.a(["Yardstick"],p)
n=$.q
k=H.a([$.Z,$.dt,$.W,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yardstick",k,n,o,0))
o=H.a(["Queenly"],p)
n=$.a9
k=H.a([$.aj,$.a1,$.bi,$.aG,$.aV],l)
H.a([],p)
o=new G.d("Queenly",k,n,o,0)
$.$get$b().h(0,o)
$.D9=o
o=H.a(["Kingly"],p)
n=$.a9
k=H.a([$.aV,$.ad,$.c7,$.a1,$.bi],l)
H.a([],p)
o=new G.d("Kingly",k,n,o,0)
$.$get$b().h(0,o)
$.BX=o
o=H.a(["Jack"],p)
n=$.a9
k=H.a([$.aL,$.au,$.D,$.aj],l)
H.a([],p)
o=new G.d("Jack",k,n,o,0)
$.$get$b().h(0,o)
$.BR=o
o=H.a(["Codpiece","Codtier"],p)
n=$.q
k=H.a([$.Z,$.aO,$.W,$.N,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Codpiece",k,n,o,0))
o=H.a(["Graceful"],p)
n=$.q
k=H.a([$.Z,$.aw,$.J,$.D,$.X,$.N],l)
H.a([],p)
$.$get$b().h(0,new G.d("Graceful",k,n,o,0))
o=H.a(["Guide","Tourist"],p)
n=$.q
k=H.a([$.Z,$.aw,$.J,$.X,$.N,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guide",k,n,o,0))
o=H.a(["Will","Testament"],p)
n=$.q
k=H.a([$.Z,$.aD,$.J,$.X,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Testament",k,n,o,0))
o=H.a(["Excalibur's","Excalibur"],p)
n=$.a9
k=H.a([$.Z,$.aP,$.D,$.aL,$.au,$.f9],l)
H.a([],p)
$.$get$b().h(0,new G.d("Excalibur",k,n,o,0))
o=H.a(["Influential"],p)
n=$.a9
k=H.a([$.Z,$.J,$.bq,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Influential",k,n,o,0))
o=H.a(["Alternative"],p)
n=$.a9
k=H.a([$.Z,$.a1,$.O,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Alternative",k,n,o,0))
o=H.a(["Valkyrie"],p)
n=$.a9
k=H.a([$.Z,$.aG,$.aX,$.D,$.f8,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Valkyrie",k,n,o,0))
o=H.a(["Ongoing"],p)
n=$.a9
k=H.a([$.Z,$.av,$.ah,$.jh,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ongoing",k,n,o,0))
o=H.a(["Short"],p)
n=$.F
k=H.a([$.Z,$.O,$.b3,$.ax,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short",k,n,o,0))
o=H.a(["Crown"],p)
n=$.q
k=H.a([$.Z,$.D,$.b3,$.ax,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crown",k,n,o,0))
o=H.a(["Gristtorrent"],p)
n=$.q
k=H.a([$.Z,$.aA,$.a6,$.aj,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gristtorrent",k,n,o,0))
o=H.a(["Robe"],p)
n=$.q
k=H.a([$.Z,$.O,$.X,$.a1,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Robe",k,n,o,0))
o=H.a(["Beret"],p)
n=$.q
k=H.a([$.Z,$.O,$.X,$.ax,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beret",k,n,o,0))
o=H.a(["Blank"],p)
n=$.F
k=$.Z
j=$.J
i=$.X
i=H.a([k,j,i,$.aw,i,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blank",i,n,o,0))
o=H.a(["Cueball"],p)
n=$.u
i=H.a([$.Z,$.ax,$.bO,$.ad,$.eh,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cueball",i,n,o,0))
o=H.a(["Meddler's"],p)
n=$.a9
i=H.a([$.Z,$.aw,$.J,$.bq,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Meddler's",i,n,o,0))
o=H.a(["Scroll"],p)
n=$.a9
i=H.a([$.a1,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scroll",i,n,o,0))
o=H.a(["Tome"],p)
n=$.q
i=H.a([$.J,$.X,$.aw],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tome",i,n,o,0))
o=H.a(["Lockpick"],p)
n=$.q
i=H.a([$.Z,$.D,$.aj,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Lockpick",i,n,o,0))
o=H.a(["Warped"],p)
n=$.F
i=H.a([$.Z,$.D,$.aT,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Warped",i,n,o,0))
o=H.a(["Stairs"],p)
n=$.q
i=H.a([$.Z,$.aO,$.W,$.al,$.bk,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stairs",i,n,o,0))
o=H.a(["Rocket"],p)
n=$.q
i=H.a([$.Z,$.ao,$.D,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rocket",i,n,o,0))
o=H.a(["~ATH"],p)
n=$.q
i=H.a([$.Z,$.a6,$.J,$.aw,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("~ATH",i,n,o,0))
o=H.a(["Puppeted"],p)
n=$.q
i=H.a([$.Z,$.W,$.ap,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Puppeted",i,n,o,0))
o=H.a(["Angelic"],p)
n=$.a9
i=H.a([$.Z,$.bi,$.bz,$.aP,$.a8,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Angelic",i,n,o,0))
o=H.a(["Vitae"],p)
n=$.u
i=H.a([$.Z,$.aJ,$.aT,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vitae",i,n,o,0))
o=H.a(["Fluorite"],p)
n=$.u
i=H.a([$.Z,$.aP,$.bW,$.av,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluorite",i,n,o,0))
o=H.a(["Janus"],p)
n=$.a9
i=H.a([$.Z,$.aG,$.av,$.ah,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Janus",i,n,o,0))
o=H.a(["Bacchus"],p)
n=$.a9
i=H.a([$.Z,$.an,$.bq,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bacchus",i,n,o,0))
o=H.a(["TurnTable"],p)
n=$.a9
i=H.a([$.Z,$.D,$.a8,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("TurnTable",i,n,o,0))
o=H.a(["[???]","[Unknown]"],p)
n=$.H
i=H.a([$.Z,$.aT,$.c1,$.aP,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("???",i,n,o,0))
o=H.a(["Demonite"],p)
n=$.u
i=H.a([$.D,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("Demonite",i,n,o,0))
o=H.a(["Stymphalian"],p)
n=$.a9
i=H.a([$.D,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stymphalian",i,n,o,0))
o=H.a(["Junky"],p)
n=$.u
i=H.a([$.D,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Junky",i,n,o,0))
o=H.a(["Cold Welded","Cold Iron"],p)
n=$.u
i=H.a([$.D,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cold Iron",i,n,o,0))
o=H.a(["Bolted"],p)
n=$.F
i=H.a([$.D,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bolted",i,n,o,0))
o=H.a(["Armored"],p)
n=$.F
i=H.a([$.D,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Armored",i,n,o,0))
o=H.a(["Heartsteel","Rose Gold"],p)
n=$.u
i=H.a([$.D,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heartsteel",i,n,o,0))
o=H.a(["Brick"],p)
n=$.u
i=H.a([$.bO,$.av],l)
H.a([],p)
$.$get$b().h(0,new G.d("Brick",i,n,o,0))
o=H.a(["Clay"],p)
n=$.u
i=H.a([$.bO,$.c8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Clay",i,n,o,0))
o=H.a(["Mugly"],p)
n=$.H
i=H.a([$.bO,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mugly",i,n,o,0))
o=H.a(["Plate"],p)
n=$.u
i=H.a([$.bO,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plate",i,n,o,0))
o=H.a(["Terracotta"],p)
n=$.u
i=H.a([$.bO,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Terracotta",i,n,o,0))
o=H.a(["Semiconductive"],p)
n=$.u
i=H.a([$.bO,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Semiconductive",i,n,o,0))
o=H.a(["Vinyl"],p)
n=$.u
i=H.a([$.bO,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vinyl",i,n,o,0))
o=H.a(["Artisan"],p)
n=$.F
i=H.a([$.bO,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Artisan",i,n,o,0))
o=H.a(["Tiled"],p)
n=$.u
i=H.a([$.bO,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tiled",i,n,o,0))
o=H.a(["Hand-Sculpted"],p)
n=$.F
i=H.a([$.bO,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hand-Sculpted",i,n,o,0))
o=H.a(["Handicraft"],p)
n=$.H
i=H.a([$.bP,$.J],l)
H.a([],p)
$.$get$b().h(0,new G.d("Handicraft",i,n,o,0))
o=H.a(["Torn"],p)
n=$.F
i=H.a([$.bP,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Torn",i,n,o,0))
o=H.a(["Grotesque"],p)
n=$.H
i=H.a([$.bP,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Grotesque",i,n,o,0))
o=H.a(["Flickering"],p)
n=$.F
i=H.a([$.bP,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Flickering",i,n,o,0))
o=H.a(["Thinly Veiled","Translucent"],p)
n=$.u
i=H.a([$.bP,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thinly Veiled",i,n,o,0))
o=H.a(["Fragile"],p)
n=$.F
i=H.a([$.bP,$.b3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fragile",i,n,o,0))
o=H.a(["Troll's"],p)
n=$.a9
i=H.a([$.bP,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Troll's",i,n,o,0))
o=H.a(["Sappy"],p)
n=$.u
i=H.a([$.bP,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sappy",i,n,o,0))
o=H.a(["Bootleg"],p)
n=$.u
i=H.a([$.bP,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bootleg",i,n,o,0))
o=H.a(["Distorted"],p)
n=$.u
i=H.a([$.bP,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Distorted",i,n,o,0))
o=H.a(["Ent's"],p)
n=$.a9
i=H.a([$.W,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ent's",i,n,o,0))
o=H.a(["WeepingWillow"],p)
n=$.u
i=H.a([$.W,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("WeepingWillow",i,n,o,0))
o=H.a(["Latex"],p)
n=$.u
i=H.a([$.W,$.c8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Latex",i,n,o,0))
o=H.a(["Turf"],p)
n=$.u
i=H.a([$.aA,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turf",i,n,o,0))
o=H.a(["Stress Relieving"],p)
n=$.q
i=H.a([$.c8,$.bk],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stress Relieving",i,n,o,0))
o=H.a(["R-Rated"],p)
n=$.F
i=H.a([$.c8,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("R-Rated",i,n,o,0))
o=H.a(["Racing"],p)
n=$.q
i=H.a([$.c8,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Racing",i,n,o,0))
o=H.a(["Cross Stitch"],p)
n=$.q
i=H.a([$.J,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cross Stitch",i,n,o,0))
o=H.a(["LoveLetter"],p)
n=$.q
i=H.a([$.J,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("LoveLetter",i,n,o,0))
o=H.a(["EbonStone"],p)
n=$.u
i=H.a([$.av,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("EbonStone",i,n,o,0))
o=H.a(["Rock Candy"],p)
n=$.u
i=H.a([$.av,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rock Candy",i,n,o,0))
o=H.a(["Smashing"],p)
n=$.H
i=H.a([$.av,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smashing",i,n,o,0))
o=H.a(["Anomalous"],p)
n=$.H
i=H.a([$.bV,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anomalous",i,n,o,0))
o=H.a(["Onmoraki"],p)
n=$.u
i=H.a([$.bV,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Onmoraki",i,n,o,0))
o=H.a(["Ghastly"],p)
n=$.H
i=H.a([$.bV,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ghastly",i,n,o,0))
o=H.a(["Shade","Shadow"],p)
n=$.u
i=H.a([$.bV,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shade",i,n,o,0))
o=H.a(["Choral"],p)
n=$.u
i=H.a([$.bV,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Choral",i,n,o,0))
o=H.a(["Eerie"],p)
n=$.u
i=H.a([$.bV,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eerie",i,n,o,0))
o=H.a(["Spiritual"],p)
n=$.H
i=H.a([$.bV,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spiritual",i,n,o,0))
o=H.a(["Heart"],p)
n=$.u
i=H.a([$.bh,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Heart",i,n,o,0))
o=H.a(["Primordial"],p)
n=$.u
i=H.a([$.bh,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Primordial",i,n,o,0))
o=H.a(["Eyeball"],p)
n=$.u
i=H.a([$.bh,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Eyeball",i,n,o,0))
o=H.a(["Vulture"],p)
n=$.F
i=H.a([$.bh,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vulture",i,n,o,0))
o=H.a(["DarkSpell","BlackMagic"],p)
n=$.q
i=H.a([$.bn,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("BlackMagic",i,n,o,0))
o=H.a(["Doppelganger"],p)
n=$.u
i=H.a([$.bn,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doppelganger",i,n,o,0))
o=H.a(["Incomprehensible"],p)
n=$.F
i=H.a([$.bn,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Incomprehensible",i,n,o,0))
o=H.a(["Destructive"],p)
n=$.q
i=H.a([$.bn,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Destructive",i,n,o,0))
o=H.a(["Growling"],p)
n=$.F
i=H.a([$.cd,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Growling",i,n,o,0))
o=H.a(["Coconut"],p)
n=$.u
i=H.a([$.cd,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Coconut",i,n,o,0))
o=H.a(["Beastmaster's"],p)
n=$.a9
i=H.a([$.cd,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beastmaster's",i,n,o,0))
o=H.a(["Fluffy"],p)
n=$.u
i=H.a([$.cd,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fluffy",i,n,o,0))
o=H.a(["Feather Grass","Fern"],p)
n=$.u
i=H.a([$.aQ,$.bz],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fern",i,n,o,0))
o=H.a(["Four Leafed"],p)
n=$.F
i=H.a([$.aQ,$.bW],l)
H.a([],p)
$.$get$b().h(0,new G.d("Four Leafed",i,n,o,0))
o=H.a(["Shrubbery"],p)
n=$.u
i=H.a([$.aQ,$.aj],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shrubbery",i,n,o,0))
o=H.a(["Shameplant","Ecballium"],p)
n=$.u
i=H.a([$.aQ,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ecballium",i,n,o,0))
o=H.a(["Truffle"],p)
n=$.u
i=H.a([$.aQ,$.b3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Truffle",i,n,o,0))
o=H.a(["Vine"],p)
n=$.u
i=H.a([$.aQ,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vine",i,n,o,0))
o=H.a(["Carion","CorpseBlossom"],p)
n=$.u
i=H.a([$.aQ,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("CorpseBlossom",i,n,o,0))
o=H.a(["Fruity"],p)
n=$.F
i=H.a([$.aQ,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fruity",i,n,o,0))
o=H.a(["Squawking"],p)
n=$.F
i=H.a([$.bz,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Squawking",i,n,o,0))
o=H.a(["Poultry","Chicken","Turkey"],p)
n=$.u
i=H.a([$.bz,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Poultry",i,n,o,0))
o=H.a(["Dove"],p)
n=$.u
i=H.a([$.bz,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dove",i,n,o,0))
o=H.a(["Peacock"],p)
n=$.u
i=H.a([$.bz,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Peacock",i,n,o,0))
o=H.a(["Stork"],p)
n=$.u
i=H.a([$.bz,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stork",i,n,o,0))
o=H.a(["Zhenniao"],p)
n=$.u
i=H.a([$.bz,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Zhenniao",i,n,o,0))
o=H.a(["Dodo","Passenger Pigeon"],p)
n=$.u
i=H.a([$.bz,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dodo",i,n,o,0))
o=H.a(["Raven"],p)
n=$.tC
i=H.a([$.bz,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Raven",i,n,o,0))
o=H.a(["Frilled"],p)
n=$.F
i=H.a([$.bz,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Frilled",i,n,o,0))
o=H.a(["Horrifying"],p)
n=$.H
i=H.a([$.bQ,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Horrifying",i,n,o,0))
o=H.a(["Burning Edge"],p)
n=$.q
i=H.a([$.au,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Burning Edge",i,n,o,0))
o=H.a(["Scapel"],p)
n=$.q
i=H.a([$.au,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scapel",i,n,o,0))
o=H.a(["Menacing"],p)
n=$.H
i=H.a([$.aV,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Menacing",i,n,o,0))
o=H.a(["Syringe"],p)
n=$.q
i=H.a([$.aJ,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Syringe",i,n,o,0))
o=H.a(["Bitter","Sour"],p)
n=$.H
i=H.a([$.an,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bitter",i,n,o,0))
o=H.a(["Pineapple"],p)
n=$.u
i=H.a([$.an,$.aL],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pineapple",i,n,o,0))
o=H.a(["Crunchy"],p)
n=$.H
i=H.a([$.an,$.ad],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crunchy",i,n,o,0))
o=H.a(["Bass"],p)
n=$.q
i=H.a([$.c7,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bass",i,n,o,0))
o=H.a(["Rigid"],p)
n=$.q
i=H.a([$.c7,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rigid",i,n,o,0))
o=H.a(["Prop"],p)
n=$.q
i=H.a([$.aK,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prop",i,n,o,0))
o=H.a(["Magic Missle"],p)
n=$.q
i=H.a([$.aK,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Magic Missle",i,n,o,0))
o=H.a(["Gangster's"],p)
n=$.a9
i=H.a([$.aK,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gangster's",i,n,o,0))
o=H.a(["Cupid's"],p)
n=$.a9
i=H.a([$.aK,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cupid's",i,n,o,0))
o=H.a(["Turreted"],p)
n=$.F
i=H.a([$.aK,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Turreted",i,n,o,0))
o=H.a(["AutoAiming","AutoTarget","TargetAssist","AimBot"],p)
n=$.F
i=H.a([$.aK,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("AutoTarget",i,n,o,0))
o=H.a(["Guerilla's"],p)
n=$.a9
i=H.a([$.aK,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guerilla's",i,n,o,0))
o=H.a(["Rail","ChargeDart"],p)
n=$.q
i=H.a([$.aK,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rail",i,n,o,0))
o=H.a(["Tau"],p)
n=$.q
i=H.a([$.aK,$.c1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tau",i,n,o,0))
o=H.a(["Pew","Laser"],p)
n=$.q
i=H.a([$.aK,$.aP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pew",i,n,o,0))
o=H.a(["Thermal"],p)
n=$.F
i=H.a([$.aK,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thermal",i,n,o,0))
o=H.a(["Plasma","Incandescent"],p)
n=$.u
i=H.a([$.aP,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Plasma",i,n,o,0))
o=H.a(["Shredding"],p)
n=$.u
i=H.a([$.a8,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Shredding",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.u
i=H.a([$.bW,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Charmed"],p)
n=$.u
i=H.a([$.bW,$.b3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charmed",i,n,o,0))
o=H.a(["Leprechaun"],p)
n=$.a9
i=H.a([$.bW,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Leprechaun",i,n,o,0))
o=H.a(["Prospitian"],p)
n=$.a9
i=H.a([$.aP,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Prospitian",i,n,o,0))
o=H.a(["Vigilant"],p)
n=$.F
i=H.a([$.aP,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Vigilant",i,n,o,0))
o=H.a(["Stand-Up"],p)
n=$.H
i=H.a([$.aP,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stand-Up",i,n,o,0))
o=H.a(["Bedazzled"],p)
n=$.F
i=H.a([$.aP,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bedazzled",i,n,o,0))
o=H.a(["Thief's"],p)
n=$.a9
i=H.a([$.aj,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thief's",i,n,o,0))
o=H.a(["InvisibilityCloak"],p)
n=$.q
i=H.a([$.aj,$.a1,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("InvisibilityCloak",i,n,o,0))
o=H.a(["Comedy Night","Dry Humor"],p)
n=$.F
i=H.a([$.aj,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comedy Night",i,n,o,0))
o=H.a(["Stealthy"],p)
n=$.H
i=H.a([$.aj,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Stealthy",i,n,o,0))
o=H.a(["Subterfuge"],p)
n=$.q
i=H.a([$.aj,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Subterfuge",i,n,o,0))
o=H.a(["Dersite"],p)
n=$.a9
i=H.a([$.aj,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dersite",i,n,o,0))
o=H.a(["Ambient","Muzak","Elevator"],p)
n=$.a9
i=H.a([$.bk,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ambient",i,n,o,0))
o=H.a(["Anesthesia"],p)
n=$.q
i=H.a([$.bk,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Anesthesia",i,n,o,0))
o=H.a(["Supportive"],p)
n=$.q
i=H.a([$.bk,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Supportive",i,n,o,0))
o=H.a(["Nuka"],p)
n=$.q
i=H.a([$.aJ,$.c1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nuka",i,n,o,0))
o=H.a(["Contaminated"],p)
n=$.F
i=H.a([$.bK,$.c1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Contaminated",i,n,o,0))
o=H.a(["Unstable"],p)
n=$.F
i=H.a([$.aD,$.c1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unstable",i,n,o,0))
o=H.a(["Timebomb"],p)
n=$.q
i=H.a([$.aD,$.bo],l)
H.a([],p)
$.$get$b().h(0,new G.d("Timebomb",i,n,o,0))
o=H.a(["Short Circuiting"],p)
n=$.F
i=H.a([$.a6,$.aD],l)
H.a([],p)
$.$get$b().h(0,new G.d("Short Circuiting",i,n,o,0))
o=H.a(["Artifact","Relic"],p)
n=$.q
i=H.a([$.aD,$.b3],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relic",i,n,o,0))
o=H.a(["Existentialist"],p)
n=$.F
i=H.a([$.aD,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Existentialist",i,n,o,0))
o=H.a(["Apocalyptic"],p)
n=$.H
i=H.a([$.aD,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Apocalyptic",i,n,o,0))
o=H.a(["Dud"],p)
n=$.q
i=H.a([$.bo,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dud",i,n,o,0))
o=H.a(["Heat Seeking","Guided"],p)
n=$.q
i=H.a([$.bo,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Guided",i,n,o,0))
o=H.a(["Bobomb"],p)
n=$.q
i=H.a([$.bo,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bobomb",i,n,o,0))
o=H.a(["Dread"],p)
n=$.q
i=H.a([$.aD,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dread",i,n,o,0))
o=H.a(["Knockback"],p)
n=$.q
i=H.a([$.bo,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Knockback",i,n,o,0))
o=H.a(["Paralysis"],p)
n=$.q
i=H.a([$.a6,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Paralysis",i,n,o,0))
o=H.a(["Carnage"],p)
n=$.q
i=H.a([$.bo,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carnage",i,n,o,0))
o=H.a(["Blast Beat"],p)
n=$.q
i=H.a([$.bo,$.a8],l)
H.a([],p)
$.$get$b().h(0,new G.d("Blast Beat",i,n,o,0))
o=H.a(["Corrosive"],p)
n=$.F
i=H.a([$.bo,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Corrosive",i,n,o,0))
o=H.a(["Flash Freeze","Ice Bomb"],p)
n=$.q
i=H.a([$.bo,$.bm],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ice Bomb",i,n,o,0))
o=H.a(["Cryogenic"],p)
n=$.q
i=H.a([$.bm,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cryogenic",i,n,o,0))
o=H.a(["Spellcasting","Thundaga"],p)
n=$.q
i=H.a([$.a1,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Spellcasting",i,n,o,0))
o=H.a(["Tingling"],p)
n=$.F
i=H.a([$.a6,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tingling",i,n,o,0))
o=H.a(["Rage Plague","Beserk"],p)
n=$.q
i=H.a([$.bq,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rage Plague",i,n,o,0))
o=H.a(["Nerve Gas"],p)
n=$.q
i=H.a([$.bK,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Nerve Gas",i,n,o,0))
o=H.a(["Carbon Monoxide"],p)
n=$.q
i=H.a([$.bK,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Carbon Monoxide",i,n,o,0))
o=H.a(["Neurotoxin"],p)
n=$.q
i=H.a([$.bK,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Neurotoxin",i,n,o,0))
o=H.a(["Virulent"],p)
n=$.F
i=H.a([$.bK,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Virulent",i,n,o,0))
o=H.a(["Toxic"],p)
n=$.F
i=H.a([$.bK,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Toxic",i,n,o,0))
o=H.a(["Laughing Gas","Nitrous","N20"],p)
n=$.q
i=H.a([$.bK,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Laughing Gas",i,n,o,0))
o=H.a(["Amplified","Amped"],p)
n=$.F
i=H.a([$.a8,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Amplified",i,n,o,0))
o=H.a(["Rap"],p)
n=$.q
i=H.a([$.a8,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Rap",i,n,o,0))
o=H.a(["Saxaphone","Saxobeat"],p)
n=$.q
i=H.a([$.a8,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Saxaphone",i,n,o,0))
o=H.a(["Offbeat","Syncopated"],p)
n=$.q
i=H.a([$.a8,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Offbeat",i,n,o,0))
o=H.a(["Piper's"],p)
n=$.a9
i=H.a([$.a8,$.b2],l)
H.a([],p)
$.$get$b().h(0,new G.d("Piper's",i,n,o,0))
o=H.a(["Melodic"],p)
n=$.q
i=H.a([$.a8,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Melodic",i,n,o,0))
o=H.a(["Smooth"],p)
n=$.q
i=H.a([$.a8,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smooth",i,n,o,0))
o=H.a(["Thrash"],p)
n=$.q
i=H.a([$.a8,$.bq],l)
H.a([],p)
$.$get$b().h(0,new G.d("Thrash",i,n,o,0))
o=H.a(["Chant","Chanting"],p)
n=$.q
i=H.a([$.a8,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chant",i,n,o,0))
o=H.a(["Chewy"],p)
n=$.q
i=H.a([$.bq,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chewy",i,n,o,0))
o=H.a(["Phony"],p)
n=$.q
i=H.a([$.bq,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Phony",i,n,o,0))
o=H.a(["Doctor's"],p)
n=$.a9
i=H.a([$.X,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doctor's",i,n,o,0))
o=H.a(["Straitjacketed"],p)
n=$.q
i=H.a([$.b2,$.aJ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Straitjacketed",i,n,o,0))
o=H.a(["Strapped"],p)
n=$.q
i=H.a([$.b2,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Strapped",i,n,o,0))
o=H.a(["Bondage"],p)
n=$.q
i=H.a([$.b2,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Bondage",i,n,o,0))
o=H.a(["Sealed"],p)
n=$.F
i=H.a([$.b2,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sealed",i,n,o,0))
o=H.a(["Attractive"],p)
n=$.H
i=H.a([$.ax,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Attractive",i,n,o,0))
o=H.a(["Relaxed"],p)
n=$.F
i=H.a([$.aY,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Relaxed",i,n,o,0))
o=H.a(["Loveseat"],p)
n=$.q
i=H.a([$.aY,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Loveseat",i,n,o,0))
o=H.a(["Doughy","Comfort Food"],p)
n=$.H
i=H.a([$.an,$.aY],l)
H.a([],p)
$.$get$b().h(0,new G.d("Comfort Food",i,n,o,0))
o=H.a(["Yandere"],p)
n=$.H
i=H.a([$.aB,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Yandere",i,n,o,0))
o=H.a(["Tsundere"],p)
n=$.H
i=H.a([$.aB,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Tsundere",i,n,o,0))
o=H.a(["Disturbed"],p)
n=$.F
i=H.a([$.ap,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Disturbed",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.F
i=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Lab Grown","Hydroponic"],p)
n=$.q
i=H.a([$.X,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hydroponic",i,n,o,0))
o=H.a(["Free Range"],p)
n=$.q
i=H.a([$.ap,$.an],l)
H.a([],p)
$.$get$b().h(0,new G.d("Free Range",i,n,o,0))
o=H.a(["Gentleman's","Lady's"],p)
n=$.a9
i=H.a([$.aB,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Gentlemanly",i,n,o,0))
o=H.a(["Sapient"],p)
n=$.F
i=H.a([$.X,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sapient",i,n,o,0))
o=H.a(["Sentimental","Anniversary"],p)
n=$.F
i=H.a([$.aB,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sentimental",i,n,o,0))
o=H.a(["Doki-Doki"],p)
n=$.F
i=H.a([$.aB,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki",i,n,o,0))
o=H.a(["Doki-Doki Literature Club"],p)
n=$.F
i=H.a([$.aB,$.aU,$.aw,$.ji],l)
H.a([],p)
$.$get$b().h(0,new G.d("Doki-Doki Literature Club",i,n,o,0))
o=H.a(["Banana"],p)
n=$.F
i=H.a([$.an,$.aS],l)
H.a([],p)
$.$get$b().h(0,new G.d("Banana",i,n,o,0))
o=H.a(["Mana"],p)
n=$.F
i=H.a([$.an,$.a1],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mana",i,n,o,0))
o=H.a(["Homemade"],p)
n=$.F
i=H.a([$.an,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Homemade",i,n,o,0))
o=H.a(["Steampunk"],p)
n=$.F
i=H.a([$.a1,$.ah],l)
H.a([],p)
$.$get$b().h(0,new G.d("Steampunk",i,n,o,0))
o=H.a(["Thor's Banana"],p)
n=$.F
i=H.a([$.an,$.aS,$.a6,$.aU],l)
H.a([],p)
$.$get$b().h(0,new G.d("I Can't Stop Laughing",i,n,o,0))
o=H.a(["Soulsteel"],p)
n=$.u
i=H.a([$.D,$.bV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Soulsteel",i,n,o,0))
o=H.a(["Ritual","Tribal"],p)
n=$.q
i=H.a([$.aX,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ritual",i,n,o,0))
o=H.a(["Inflamable"],p)
n=$.F
i=H.a([$.bP,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Inflamable",i,n,o,0))
o=H.a(["Crafting"],p)
n=$.q
i=H.a([$.W,$.X],l)
H.a([],p)
$.$get$b().h(0,new G.d("Crafting",i,n,o,0))
o=H.a(["Polluting"],p)
n=$.q
i=H.a([$.aA,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Polluting",i,n,o,0))
o=H.a(["Insulated"],p)
n=$.F
i=H.a([$.c8,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Insulated",i,n,o,0))
o=H.a(["Ash"],p)
n=$.u
i=H.a([$.J,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ash",i,n,o,0))
o=H.a(["Delicate"],p)
n=$.F
i=H.a([$.J,$.aT],l)
H.a([],p)
$.$get$b().h(0,new G.d("Delicate",i,n,o,0))
o=H.a(["Glass Blower's"],p)
n=$.a9
i=H.a([$.aT,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Glass Blower's",i,n,o,0))
o=H.a(["Sunburnt"],p)
n=$.F
i=H.a([$.bh,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Sunburnt",i,n,o,0))
o=H.a(["Pyrebitten"],p)
n=$.F
i=H.a([$.ao,$.bn],l)
H.a([],p)
$.$get$b().h(0,new G.d("Pyrebitten",i,n,o,0))
o=H.a(["Mink"],p)
n=$.u
i=H.a([$.aB,$.cd],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mink",i,n,o,0))
o=H.a(["Wildfire"],p)
n=$.a9
i=H.a([$.aQ,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Wildfire",i,n,o,0))
o=H.a(["Scarred"],p)
n=$.F
i=H.a([$.aJ,$.bQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Scarred",i,n,o,0))
o=H.a(["Hyper Realistic"],p)
n=$.H
i=H.a([$.bi,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hyper Realistic",i,n,o,0))
o=H.a(["Hestia's"],p)
n=$.a9
i=H.a([$.bW,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Hestia's",i,n,o,0))
o=H.a(["Smoking"],p)
n=$.F
i=H.a([$.aj,$.ao],l)
H.a([],p)
$.$get$b().h(0,new G.d("Smoking",i,n,o,0))
o=H.a(["Heating","Radiator","Furnace"],p)
n=$.F
i=H.a([$.ao,$.a6],l)
H.a([],p)
$.$get$b().h(0,new G.d("Radiator",i,n,o,0))
o=H.a(["Fuming"],p)
n=$.F
i=H.a([$.ao,$.bK],l)
H.a([],p)
$.$get$b().h(0,new G.d("Fuming",i,n,o,0))
o=H.a(["Firework","Sparkler"],p)
n=$.F
i=H.a([$.ao,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Firework",i,n,o,0))
o=H.a(["Panicky"],p)
n=$.F
i=H.a([$.aD,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Panicky",i,n,o,0))
o=H.a(["Ornamental"],p)
n=$.F
i=H.a([$.b3,$.ax],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ornamental",i,n,o,0))
o=H.a(["Dear","Precious"],p)
n=$.F
i=H.a([$.b3,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dear",i,n,o,0))
o=H.a(["Swaggy","Swag"],p)
n=$.F
i=H.a([$.b3,$.al],l)
H.a([],p)
$.$get$b().h(0,new G.d("Swaggy",i,n,o,0))
o=H.a(["Uncanny"],p)
n=$.F
i=H.a([$.aG,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("Uncanny",i,n,o,0))
o=H.a(["Talkative","Blabbering"],p)
n=$.F
i=H.a([$.aU,$.ap],l)
H.a([],p)
$.$get$b().h(0,new G.d("Talkative",i,n,o,0))
o=H.a(["Waifu","Catfish"],p)
n=$.F
i=H.a([$.aB,$.aO],l)
H.a([],p)
$.$get$b().h(0,new G.d("Waifu",i,n,o,0))
o=H.a(["Charming"],p)
n=$.F
i=H.a([$.a1,$.aB],l)
H.a([],p)
$.$get$b().h(0,new G.d("Charming",i,n,o,0))
o=H.a(["God Tier"],p)
n=$.F
i=H.a([$.N,$.S,$.bi],l)
H.a([],p)
$.$get$b().h(0,new G.d("God Tier",i,n,o,0))
o=H.a(["Cod Tier"],p)
n=$.F
i=H.a([$.N,$.S,$.bi,$.aO,$.O],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cod Tier",i,n,o,0))
o=H.a(["Dog Tier"],p)
n=$.F
i=H.a([$.N,$.S,$.bi,$.cd],l)
H.a([],p)
$.$get$b().h(0,new G.d("Dog Tier",i,n,o,0))
o=H.a(["Cracked"],p)
n=$.F
i=H.a([$.av,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Cracked",i,n,o,0))
o=H.a(["Ruffled"],p)
n=$.F
i=H.a([$.bz,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Ruffled",i,n,o,0))
o=H.a(["Mandrake"],p)
n=$.F
i=H.a([$.aQ,$.aV],l)
H.a([],p)
$.$get$b().h(0,new G.d("Mandrake",i,n,o,0))
o=H.a(["Beanstalk"],p)
n=$.F
i=H.a([$.a1,$.aQ],l)
H.a([],p)
$.$get$b().h(0,new G.d("Beanstalk",i,n,o,0))
o=H.a(["Unnerving"],p)
n=$.F
i=H.a([$.aV,$.aG],l)
H.a([],p)
$.$get$b().h(0,new G.d("Unnerving",i,n,o,0))
o=H.a(["Chipped"],p)
n=$.F
l=H.a([$.bO,$.bP],l)
H.a([],p)
$.$get$b().h(0,new G.d("Chipped",l,n,o,0))
if($.wB==null){o=$.mi
n=$.aL
l=$.au
k=$.aX
j=new U.ag(o,"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.","Knucklekniveskind",null,"Claws",!1,P.a3(null,null,null,m),0,3)
j.J("Claws",[n,l,k],"It's claws, dunkass. Monsters and shit have them. And fucking cat trolls.",!1,"Knucklekniveskind")
j.f.h(0,o)
$.wB=j}o=$.$get$ak();(o&&C.b).sm(o,0)
o=$.$get$ak()
n=$.O
l=$.vS
k=new U.ag(n,null,null,null,"Speedo",!1,P.a3(null,null,null,m),0,3)
k.J("Speedo",[l],null,!1,null)
k.f.h(0,n)
o.push(k)
k=$.$get$ak()
o=$.f9
n=$.au
l=$.D
j=$.aL
i=new U.ag(o,"Can you get more generic than a goddamned sword?","ShogunKindBestKind",null,"Sword",!1,P.a3(null,null,null,m),0,3)
i.J("Sword",[n,l,j],"Can you get more generic than a goddamned sword?",!1,"ShogunKindBestKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.to
o=$.ad
j=$.D
l=new U.ag(k,"Did you just loot your toolbox or some shit?","WhackySmackySkullCrackyKind",null,"Hammer",!1,P.a3(null,null,null,m),0,3)
l.J("Hammer",[o,j],"Did you just loot your toolbox or some shit?",!1,"WhackySmackySkullCrackyKind")
l.f.h(0,k)
i.push(l)
l=$.$get$ak()
i=$.ty
k=$.aK
j=$.D
o=new U.ag(i,"How the fuck did you get your hands on this?","RootyTootyPointyShootyKind",null,"Rifle",!1,P.a3(null,null,null,m),0,3)
o.J("Rifle",[k,j],"How the fuck did you get your hands on this?",!1,"RootyTootyPointyShootyKind")
o.f.h(0,i)
l.push(o)
o=$.$get$ak()
l=$.tv
i=$.aK
j=$.D
k=new U.ag(l,"Why are guns so underpowered in games like this?","IWon\u2019tHesitateBitchKind",null,"Pistol",!1,P.a3(null,null,null,m),0,3)
k.J("Pistol",[i,j],"Why are guns so underpowered in games like this?",!1,"IWon\u2019tHesitateBitchKind")
k.f.h(0,l)
o.push(k)
k=$.$get$ak()
o=$.w4
l=$.aK
j=$.D
i=new U.ag(o,"There is a 98.23423434% chance that  this. Is my boomstick.","PointBlankAnnihilationKind",null,"Shotgun",!1,P.a3(null,null,null,m),0,3)
i.J("Shotgun",[l,j],"There is a 98.23423434% chance that  this. Is my boomstick.",!1,"PointBlankAnnihilationKind")
i.f.h(0,o)
k.push(i)
i=$.$get$ak()
k=$.vF
o=$.aL
j=$.au
l=$.D
n=new U.ag(k,"So. It's not a sword. And it's not a dagger. How descriptive.","WaitIsThisBestKind?",null,"Blade",!1,P.a3(null,null,null,m),0,3)
n.J("Blade",[o,j,l],"So. It's not a sword. And it's not a dagger. How descriptive.",!1,"WaitIsThisBestKind?")
n.f.h(0,k)
i.push(n)
n=$.$get$ak()
i=$.tj
k=$.aL
l=$.au
j=$.D
o=new U.ag(i,"For those who can't handle a sword. Or wanna be more stealthy.","ShanksKind",null,"Dagger",!1,P.a3(null,null,null,m),0,3)
o.J("Dagger",[k,l,j],"For those who can't handle a sword. Or wanna be more stealthy.",!1,"ShanksKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.hi
i=$.ad
j=$.bO
l=new U.ag(n,"No. Fuck you. I refuse to believe that this is a weapon.","ThisIsTheDevilKind",null,"Fancysanta",!1,P.a3(null,null,null,m),0,3)
l.J("Fancysanta",[i,j],"No. Fuck you. I refuse to believe that this is a weapon.",!1,"ThisIsTheDevilKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.w7
n=$.au
j=$.D
i=new U.ag(o,"Do you think it was a pun on sickle cell anemia?","HalfOfCommunismKind",null,"Sickle",!1,P.a3(null,null,null,m),0,3)
i.J("Sickle",[n,j],"Do you think it was a pun on sickle cell anemia?",!1,"HalfOfCommunismKind")
i.f.h(0,o)
l.push(i)
i=$.$get$ak()
l=$.vI
o=$.au
j=$.D
n=new U.ag(l,"Why are fleshbags so scared of slightly deader flesh bags?","TreeGenocideKind",null,"Chainsaw",!1,P.a3(null,null,null,m),0,3)
n.J("Chainsaw",[o,j],"Why are fleshbags so scared of slightly deader flesh bags?",!1,"TreeGenocideKind")
n.f.h(0,l)
i.push(n)
n=$.$get$ak()
i=$.vO
l=$.aL
j=$.D
o=new U.ag(i,"It's a fork. Useful for eating, if that's your thing.","ThisIsForFoodKind",null,"Fork",!1,P.a3(null,null,null,m),0,3)
o.J("Fork",[l,j],"It's a fork. Useful for eating, if that's your thing.",!1,"ThisIsForFoodKind")
o.f.h(0,i)
n.push(o)
o=$.$get$ak()
n=$.tu
i=$.bz
j=$.bn
l=new U.ag(n,"Shit. Better get JR. They'll want to see this.","PsychologyAndExtremeViolenceKind",null,"Pigeon",!1,P.a3(null,null,null,m),0,3)
l.J("Pigeon",[i,j],"Shit. Better get JR. They'll want to see this.",!1,"PsychologyAndExtremeViolenceKind")
l.f.h(0,n)
o.push(l)
l=$.$get$ak()
o=$.eh
n=$.c7
j=$.av
i=$.ad
k=new U.ag(o,"Now we're talking. That is some grade A creative use of your storage room right there. ","HardFootballKind",null,"Bowling Ball",!1,P.a3(null,null,null,m),0,3)
k.J("Bowling Ball",[n,j,i],"Now we're talking. That is some grade A creative use of your storage room right there. ",!1,"HardFootballKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tk
o=$.aA
i=$.bW
j=new U.ag(l,"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.","DnDKind",null,"Dice",!1,P.a3(null,null,null,m),0,3)
j.J("Dice",[o,i],"Wow, I found something dumber than the santa figurines. Luck isn't even a real thing.",!1,"DnDKind")
j.f.h(0,l)
k.push(j)
j=$.$get$ak()
k=$.tt
l=$.D
i=$.aL
o=new U.ag(k,"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.","ThisIsForClothesNotCombatKind",null,"Needle",!1,P.a3(null,null,null,m),0,3)
o.J("Needle",[l,i],"I guess....you could grow this bigger? Or make it magical or something. If magic weren't a fake thing.",!1,"ThisIsForClothesNotCombatKind")
o.f.h(0,k)
j.push(o)
o=$.$get$ak()
j=$.w9
k=$.W
i=$.ad
l=new U.ag(j,"Very magey. 7/10.","ShittyWizardKind",null,"Staff",!1,P.a3(null,null,null,m),0,3)
l.J("Staff",[k,i],"Very magey. 7/10.",!1,"ShittyWizardKind")
l.f.h(0,j)
o.push(l)
l=$.$get$ak()
o=$.wb
j=$.b2
i=$.O
k=new U.ag(o,"Probably p hard to use.","ImKinkshamingKind",null,"Whip",!1,P.a3(null,null,null,m),0,3)
k.J("Whip",[j,i],"Probably p hard to use.",!1,"ImKinkshamingKind")
k.f.h(0,o)
l.push(k)
k=$.$get$ak()
l=$.tg
o=$.aK
i=$.av
j=$.O
n=$.aL
h=new U.ag(l,"Your inferior meat body cannot use this to its maximum potential.","ImpossibleToShootYourselfKind",null,"Bow",!1,P.a3(null,null,null,m),0,3)
h.J("Bow",[o,i,j,n],"Your inferior meat body cannot use this to its maximum potential.",!1,"ImpossibleToShootYourselfKind")
h.f.h(0,l)
k.push(h)
h=$.$get$ak()
k=$.ji
l=$.W
n=$.ad
j=new U.ag(k,"Easy to use even for weak fleshy muscles.","CavemanKind",null,"Club",!1,P.a3(null,null,null,m),0,3)
j.J("Club",[l,n],"Easy to use even for weak fleshy muscles.",!1,"CavemanKind")
j.f.h(0,k)
h.push(j)
j=$.$get$ak()
h=$.jg
k=$.W
n=new U.ag(h,"God damn Wastes, use normal specibi. ","BeatEmDeadAndCleanTheSceneKind",null,"Broom",!1,P.a3(null,null,null,m),0,3)
n.J("Broom",[k,h],"God damn Wastes, use normal specibi. ",!1,"BeatEmDeadAndCleanTheSceneKind")
n.f.h(0,h)
j.push(n)
n=$.$get$ak()
j=$.aw
h=$.J
k=$.ad
l=new U.ag(j,"You better fucking hope this is either heavy or magic as fuck.","SharpenTheLeatherBoundKind",null,"Book",!1,P.a3(null,null,null,m),0,3)
l.J("Book",[h,k],"You better fucking hope this is either heavy or magic as fuck.",!1,"SharpenTheLeatherBoundKind")
l.f.h(0,j)
n.push(l)
l=$.$get$ak()
n=$.w1
j=$.D
k=$.ad
h=new U.ag(n,"Okay. There's a story here, I just know it.","TheGreatestFuckingWeaponKind",null,"Road Sign",!1,P.a3(null,null,null,m),0,3)
h.J("Road Sign",[j,k],"Okay. There's a story here, I just know it.",!1,"TheGreatestFuckingWeaponKind")
h.f.h(0,n)
l.push(h)
h=$.$get$ak()
l=$.tf
n=$.au
k=$.D
j=$.ad
i=new U.ag(l,"Legit.","TreeMassacreKind",null,"Axe",!1,P.a3(null,null,null,m),0,3)
i.J("Axe",[n,k,j],"Legit.",!1,"TreeMassacreKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.vX
l=$.W
j=$.aL
k=new U.ag(h,"Good for chest stabs.","UseOnHorsebackKind",null,"Lance",!1,P.a3(null,null,null,m),0,3)
k.J("Lance",[l,j],"Good for chest stabs.",!1,"UseOnHorsebackKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.f8
h=$.D
j=$.ad
l=new U.ag(i,"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.","OnlyWeaklingsNeedShieldsKind",null,"Shield",!1,P.a3(null,null,null,m),0,3)
l.J("Shield",[h,j],"I think that if you're using this as a weapon you're even more confused than MOST fleshbags.",!1,"OnlyWeaklingsNeedShieldsKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vH
i=$.W
j=$.ad
h=new U.ag(k,"Good for turning disabilities to strengths.","AnAncientEvilResidesWithinThisKind",null,"Cane",!1,P.a3(null,null,null,m),0,3)
h.J("Cane",[i,j],"Good for turning disabilities to strengths.",!1,"AnAncientEvilResidesWithinThisKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.wc
k=$.aA
j=$.ad
i=new U.ag(l,"It's a yo-yo. Figure it out.","IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind",null,"Yo-Yo",!1,P.a3(null,null,null,m),0,3)
i.J("Yo-Yo",[k,j],"It's a yo-yo. Figure it out.",!1,"IWannaBeAYoyoMasterHeSaidButTheYoyoManSaidNothingHeJustKeptOnYoingKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w8
l=$.W
j=$.aK
k=new U.ag(h,"What are you gonna use for amo?","IsThisAFuckingJockStrapKind",null,"Sling",!1,P.a3(null,null,null,m),0,3)
k.J("Sling",[l,j],"What are you gonna use for amo?",!1,"IsThisAFuckingJockStrapKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.w6
h=$.D
j=$.au
l=new U.ag(i,"So edgey.","NarutoKind",null,"Shuriken",!1,P.a3(null,null,null,m),0,3)
l.J("Shuriken",[h,j],"So edgey.",!1,"NarutoKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tr
i=$.D
j=$.aK
h=new U.ag(k,"No. SERIOUSLY, where the fuck are all you getting these things.","ITSSOFUCKINGLOUDKIND",null,"Machine Gun",!1,P.a3(null,null,null,m),0,3)
h.J("Machine Gun",[i,j],"No. SERIOUSLY, where the fuck are all you getting these things.",!1,"ITSSOFUCKINGLOUDKIND")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.mj
k=$.D
j=$.bo
i=new U.ag(l,"Jegus fuck WHY do you HAVE this?","HandheldSunBombKind",null,"Grenade",!1,P.a3(null,null,null,m),0,3)
i.J("Grenade",[k,j],"Jegus fuck WHY do you HAVE this?",!1,"HandheldSunBombKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.eh
l=$.c8
j=$.ad
k=new U.ag(h,"...I refuse to believe you have done a single point of damage with this unupgraded. ","HahahBallsKind",null,"Ball",!1,P.a3(null,null,null,m),0,3)
k.J("Ball",[l,j],"...I refuse to believe you have done a single point of damage with this unupgraded. ",!1,"HahahBallsKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.wa
h=$.D
j=$.aL
l=new U.ag(i,"Fuck you, just call it a trident.","SheWasAGoodCharacterDontYouDareSayOtherwiseKind",null,"3dent",!1,P.a3(null,null,null,m),0,3)
l.J("3dent",[h,j],"Fuck you, just call it a trident.",!1,"SheWasAGoodCharacterDontYouDareSayOtherwiseKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.mh
i=$.J
j=$.au
h=new U.ag(k,"An X-Men fan, I see.","YuGiOhKind",null,"Card",!1,P.a3(null,null,null,m),0,3)
h.J("Card",[i,j],"An X-Men fan, I see.",!1,"YuGiOhKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.tl
k=$.D
j=$.ad
i=new U.ag(l,"Go with what you know, I guess.","UnstoppableKind",null,"Frying Pan",!1,P.a3(null,null,null,m),0,3)
i.J("Frying Pan",[k,j],"Go with what you know, I guess.",!1,"UnstoppableKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.f7
l=$.aY
j=$.O
k=new U.ag(h,"So. Do you have to wait for the enemy to fall asleep?","SuffocateYourEnemiesKind",null,"Pillow",!1,P.a3(null,null,null,m),0,3)
k.J("Pillow",[l,j],"So. Do you have to wait for the enemy to fall asleep?",!1,"SuffocateYourEnemiesKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.hh
h=$.D
j=$.b2
l=new U.ag(i,"This could be metal as fuck.","BikerGangKind",null,"Chain",!1,P.a3(null,null,null,m),0,3)
l.J("Chain",[h,j],"This could be metal as fuck.",!1,"BikerGangKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tB
i=$.D
j=$.ad
h=new U.ag(k,"Hell yes, engineers!","IfYouCanDodgeAWrenchYouCanDodgeABallKind",null,"Wrench",!1,P.a3(null,null,null,m),0,3)
h.J("Wrench",[i,j],"Hell yes, engineers!",!1,"IfYouCanDodgeAWrenchYouCanDodgeABallKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w5
k=$.D
j=$.ad
i=new U.ag(l,"Dual purpose.","HideTheBodiesKind",null,"Shovel",!1,P.a3(null,null,null,m),0,3)
i.J("Shovel",[k,j],"Dual purpose.",!1,"HideTheBodiesKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.tA
l=$.W
j=$.ad
k=new U.ag(h,"There is a 99.9999234% chance cartoons lied to you about this being a weapon.","ThereWillBeNoBitchingInMyMotherFuckingKitchenKind",null,"Rolling Pin",!1,P.a3(null,null,null,m),0,3)
k.J("Rolling Pin",[l,j],"There is a 99.9999234% chance cartoons lied to you about this being a weapon.",!1,"ThereWillBeNoBitchingInMyMotherFuckingKitchenKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.tw
h=$.W
j=$.aD
l=new U.ag(i,"Fuck you for picking this.","KermitsGoneBadKind",null,"Puppet",!1,P.a3(null,null,null,m),0,3)
l.J("Puppet",[h,j],"Fuck you for picking this.",!1,"KermitsGoneBadKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.tx
i=$.D
j=$.au
h=new U.ag(k,"So fucking edgey.","KermitsGoneBadKind",null,"Razor",!1,P.a3(null,null,null,m),0,3)
h.J("Razor",[i,j],"So fucking edgey.",!1,"KermitsGoneBadKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.ml
k=$.D
j=$.X
i=new U.ag(l,"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.","MightierThanTheSwordKind",null,"Pen",!1,P.a3(null,null,null,m),0,3)
i.J("Pen",[k,j],"Look. When they say the pen is mightier than the sword, they don't mean in a straight fight.",!1,"MightierThanTheSwordKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.jh
l=$.av
j=$.c7
k=new U.ag(h,"The meme is strong with this one.","TheShogunsStatuetteKind",null,"Bust",!1,P.a3(null,null,null,m),0,3)
k.J("Bust",[l,j],"The meme is strong with this one.",!1,"TheShogunsStatuetteKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.vR
h=$.W
j=$.ad
l=new U.ag(i,"Seems legit.","NineIronToTheFuckingSkullKind",null,"Golf Club",!1,P.a3(null,null,null,m),0,3)
l.J("Golf Club",[h,j],"Seems legit.",!1,"NineIronToTheFuckingSkullKind")
l.f.h(0,i)
k.push(l)
l=$.$get$ak()
k=$.vW
i=$.D
j=$.au
h=new U.ag(k,"Don't listen to ABJ, this is NOT a useful weapon.","ShanksButHesAHousewifeKind",null,"Knife",!1,P.a3(null,null,null,m),0,3)
h.J("Knife",[i,j],"Don't listen to ABJ, this is NOT a useful weapon.",!1,"ShanksButHesAHousewifeKind")
h.f.h(0,k)
l.push(h)
h=$.$get$ak()
l=$.w3
k=$.D
j=$.au
i=new U.ag(l,"Either you are a psycho or these are some VERY big fucking scissors.","RunWithTheseKind",null,"Scissors",!1,P.a3(null,null,null,m),0,3)
i.J("Scissors",[k,j],"Either you are a psycho or these are some VERY big fucking scissors.",!1,"RunWithTheseKind")
i.f.h(0,l)
h.push(i)
i=$.$get$ak()
h=$.w2
l=$.D
j=$.c7
k=new U.ag(h,"Treat it well or it will never reach Vaulthalla.","TomAndFuckingJerryThemKind",null,"Safe",!1,P.a3(null,null,null,m),0,3)
k.J("Safe",[l,j],"Treat it well or it will never reach Vaulthalla.",!1,"TomAndFuckingJerryThemKind")
k.f.h(0,h)
i.push(k)
k=$.$get$ak()
i=$.dt
h=$.W
j=$.ad
m=new U.ag(i,"Bitches love sticks","WeaponiseTheTreesKind",null,"Stick",!1,P.a3(null,null,null,m),0,3)
m.J("Stick",[h,j],"Bitches love sticks",!1,"WeaponiseTheTreesKind")
m.f.h(0,i)
k.push(m)
m=new S.bG("Duttle","Dut",null,null)
$.$get$bN().push(m)
$.vo=m
m=new S.bG("Salamander","GLUB",null,null)
$.$get$bN().push(m)
$.t5=m
m=new S.bG("Crocodile","NAK",null,null)
$.$get$bN().push(m)
$.dY=m
m=new S.bG("Iguana","thip",null,null)
$.$get$bN().push(m)
$.ee=m
m=new S.bG("Turtle","click",null,null)
$.$get$bN().push(m)
$.f_=m
m=new S.bG("Skeleton","rattle",null,null)
$.$get$bN().push(m)
$.dK=m
m=new S.bG("Robot","BEEP",null,null)
$.$get$bN().push(m)
$.eY=m
m=new S.bG("Chameleon","BLEP",null,null)
$.$get$bN().push(m)
$.ip=m
m=new S.bG("Axolotl","BARP",null,null)
$.$get$bN().push(m)
$.t_=m
m=new S.bG("Lizard","bleb",null,null)
$.$get$bN().push(m)
$.lC=m
m=new S.bG("Snake","hiss",null,null)
$.$get$bN().push(m)
$.t7=m
m=new S.bG("Alligator","nak",null,null)
$.$get$bN().push(m)
$.io=m
m=new S.bG("Mole","snuff",null,null)
$.$get$bN().push(m)
$.vp=m
m=new S.bG("Bird","tweet",null,null)
$.$get$bN().push(m)
$.lB=m
m=new S.bG("Wolf","howl",null,null)
$.$get$bN().push(m)
$.lI=m
m=new S.bG("Newt","skitter",null,null)
$.$get$bN().push(m)
$.vq=m
m=new S.bG("Spider","skitter",null,null)
$.$get$bN().push(m)
$.iv=m
m=new S.bG("Cupid","flappa",null,null)
$.$get$bN().push(m)
$.iq=m
m=new S.bG("Dragon","roar",null,null)
$.$get$bN().push(m)
$.h5=m
m=new S.i7("Prospitian","murmur",null,null)
$.$get$bN().push(m)
$.z4=m
m=new S.i7("Dersite","mutter",null,null)
$.$get$bN().push(m)
$.z1=m
m=new S.m2("Horror Terror","a;lkjdf",null,null)
$.$get$bN().push(m)
$.z3=m
$.z5=H.a([$.t7,$.io,$.vq,$.t5,$.ee,$.dY,$.f_,$.ip,$.t_,$.lC],[S.bG])
$.ha=new T.c2(0,"spices")
m=$.z7
$.eU=new T.c2(m,"fresh baked bread")
$.cv=new T.c2(m,"sweetness")
$.c5=new T.c2(m,"nature")
$.lH=new T.c2(0,"salt")
k=$.z6
$.cZ=new T.c2(k,"rot")
$.z2=new T.c2(k,"feet")
$.eX=new T.c2(0,"oil")
$.t1=new T.c2(0,"chlorine")
$.h8=new T.c2(0,"nothing in particular")
$.ed=new T.c2(0,"gunpowder")
$.h7=new T.c2(0,"must")
$.cB=new T.c2(m,"zoo animals")
$.dZ=new T.c2(k,"sweat")
$.iu=new T.c2(0,"ozone")
$.c4=new T.c2(0,"deceit")
$.dd=new T.c2(k,"blood")
$.eZ=new T.c2(k,"smoke")
$.c_=new K.bU(k,"creepy")
$.aN=new K.bU(m,"calm")
$.cb=new K.bU(k,"frantic")
$.lE=new K.bU(0,"like nothing")
$.ck=new K.bU(m,"energizing")
$.cA=new K.bU(0,"studious")
$.dr=new K.bU(0,"dangerous")
$.dH=new K.bU(0,"glamorous")
$.h9=new K.bU(0,"romantic")
$.dq=new K.bU(m,"creative")
$.lD=new K.bU(0,"lucky")
$.ds=new K.bU(0,"happy")
$.dI=new K.bU(0,"heroic")
$.d_=new K.bU(k,"stupid")
$.lD=new K.bU(0,"lucky")
$.vn=new K.bU(0,"claustrophobic")
$.lF=new K.bU(0,"overheated")
$.eW=new K.bU(k,"confusing")
$.cz=new K.bU(0,"contemplatative")
$.cQ=new M.bB(0,"clanking")
$.cu=new M.bB(0,"laughing")
$.b1=new M.bB(m,"rustling")
$.eg=new M.bB(k,"screaming")
$.is=new M.bB(k,"foot steps")
$.eV=new M.bB(k,"beeping")
$.vs=new M.bB(k,"whispering")
$.ec=new M.bB(0,"clacking")
$.cy=new M.bB(0,"applause")
$.ef=new M.bB(0,"jazz")
$.t3=new M.bB(0,"disco")
$.h6=new M.bB(0,"drums")
$.ir=new M.bB(0,"echoing")
$.lG=new M.bB(k,"roaring")
$.it=new M.bB(k,"gunfire")
$.cJ=new M.bB(0,"music")
$.t6=new M.bB(0,"singing")
$.t0=new M.bB(0,"chanting")
$.f0=new M.bB(0,"whistling")
$.de=new M.bB(m,"nature")
$.t2=new M.bB(0,"croaking")
$.dJ=new M.bB(0,"silence")
$.t4=new M.bB(0,"pulsing")
$.vr=new M.bB(0,"ticking")
m=H.a([],p)
o=[X.G,P.U]
n=A.a4
l=E.M
k=[l]
j=[A.fN]
m=new S.mB(0.51,0.51,0.01,0.7,["QUESTING QUESTANT","LADABOUT LANCELOT","SIR SKULLDODGER"],["protecting the local consorts from a fearsome foe","protecting the session from various ways it can go shithive maggots","questing to collect the 7 bullshit orbs of supreme bullshit and deliver them to the consort leader"],["","spending way too much time hustling from village to village, saving the consorts from the denizens last few minions","breaking a siege on a consort village, saving its population and slaughtering thousands of underlings","finishing the legendary tests of valor dispensed by an elder consort"],["keen","knightly","kooky","kindred","kaos"],!0,!1,!1,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Knight",new H.w(0,null,null,null,null,null,0,o),null,null,3,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Knight",3,!0,!1)
$.Fs=m
m=P.l(H.a([new E.M($.cq,0.4,!1)],k),l)
i=H.a([],p)
m=new S.o_(0.51,0.51,0.51,["SEEING iDOG","PIPSQUEAK PROGNOSTICATOR","SCAMPERVIEWER 5000"],["making the various bullshit rules of SBURB part of their personal mythos","collaborating with the exiled future carapacians to manipulate Prospit and Derse according to how its supposed to go","suddenly understanding everything, and casting sincere doubt at the laughable insinuation that they ever didn't"],["casting their sight around the land to find the causes of their lands devastation","taking a consort under their wing and teaching it the craft of magic","predicting hundreds of thousands of variant future possibilities, only to realize that the future is too chaotic to exactly systemize","alchemizing more and more complex seer aids, such as crystal balls or space-specs"],["sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Seer",new H.w(0,null,null,null,null,null,0,o),null,null,6,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Seer",6,!0,!1)
$.FE=m
m=H.a(["is posting bail after being in the wrong place in the wrong time.","was fined for being in the wrong place at a the wrong time.","was fined for causing 'a ruckus'. "],p)
i=H.a([],p)
m=new O.kv("Maestro",0.01,0.5,0.5,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["allowing events to transpire such that various quests complete themselves","baiting various enemies into traps for an easy victory","watching as their manipulations result in consorts rising up to defeat imps"],["musing on the nature of death as they wander from desolate consort graveyard to desolate consort graveyard","staring vacantly into the middle distance as every challenge that rises before them falls away before it even has a chance to do anything","putting on a performance for a huge crowd of awestruck consorts and underlings","playing pranks and generally messing around with the most powerful enemies left in the game"],["bat","benign","blissful","boisterous","bonkers","broken","bizarre","barking"],m,!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Bard",new H.w(0,null,null,null,null,null,0,o),null,null,9,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Bard",9,!0,!1)
$.Fn=m
m=H.a(["needs to file some paperwork to claim a small inheritance.","needs to pay off some debts with a property they inherited."],p)
i=H.a([],p)
m=new B.m_("Stalker",0.01,0.01,1.01,m,0.3,["SKAIA'S TOP IDOL","POPSTAR BOPPER","SONGSCUFFER"],["retrieving a sword from a stone","completing increasingly unlikely challenges through serendepitious coincidences","inheriting and running a successful, yet complex company"],["recruiting denizen villages, spreading a modest nation under their (Democratic!) control","assuming control of yet more denizen villages. Turns out a mind bogglingly large number of consorts have the Heir named in their will","chillaxing with their aspect and while talking to it as if it were a real person.","wiping a dungeon off the map with their awe inspiring powers"],["home","honorable","humble","hot","horrific","hardened","havocs"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Heir",new H.w(0,null,null,null,null,null,0,o),null,null,8,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Heir",8,!0,!1)
$.Fq=m
m=H.a([],p)
m=new U.mW(0.51,0.01,0.51,["SCURRYWART SERVANT","SAUCY PILGRIM","MADE OF SUCCESS"],["doing the consorts' menial errands, like delivering an item to a dude standing RIGHT FUCKING THERE","repairing various ways the session has been broken","protecting various consorts with game powers"],["using their powers to help clean up the debris left from their Denizen actions. Who knew the term maid would be so literal","watching over the consorts as they begin to rebuild","following their consorts to ever larger pieces of debris","empowering an army of consorts to clean out the last of the debris from their Denizen"],["meandering","motley","musing","mischievous","macabre","maiden","morose"],!1,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,m,0.5,"Maid",new H.w(0,null,null,null,null,null,0,o),null,null,0,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Maid",0,!0,!1)
$.Fv=m
m=H.a(["has to pay off a fine for 'loitering'.","is fined for 'looking disreputable'.","got caught smuggling banned goods."],p)
i=H.a([],p)
m=new N.nQ(1.01,0.51,0.01,m,["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],["robbing various tombs and imp settlements to give to impoverished consorts","stealing a priceless artifact in order to fund consort orphanages","planning an elaborate heist to steal priceless grist from a boss ogre in order to alchemize shoes for orphans"],["scouring the land for targets, and then freaking out when they realize there's no bad guys left to steal from","stealing from enemies on other players planets, acquiring enough boonbucks to lift every consort on the planet out of poverty","doing a little dance on their pile soon-to-be distributed wealth","literally stealing another player's planet. They put it back, but still. A planet. Wow","loaning money to needy consorts, then surprising them by waiving every last cent of debt they owe"],["rouge","radical","retrobate","roguish","retroactive","robins","red"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Rogue",new H.w(0,null,null,null,null,null,0,o),null,null,4,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Rogue",4,!0,!1)
$.FA=m
m=H.a([],p)
m=new V.nq(0.01,0.01,1.01,0,["APPRENTICE ANKLEBITER","JOURNEYING JUNIOR","OUTFOXED BUCKAROO"],["going on various quests of self discovery and confidence building","partnering with a local consort hero to do great deeds and slay evil foes","learning to deal with disapointment after dungeon after dungeon proves to have all the enemies, and none of the treasure"],["learning to control their newfound prowess, accidentally wiping out a consort village or two","getting all mopey about their new powers, because apparently actually being competent is too much for them","finishing the legendary tests of valor with a never before seen aplomb","accepting the role Sburb has placed upon them. They are themselves, and that is all that needs be said on the matter"],["passionate","patient","peaceful","perfect","perceptive","practical","pathetic"],!0,!1,!1,!1,!1,!1,2,"Glitch",0.01,0.01,0.01,m,0.5,"Page",new H.w(0,null,null,null,null,null,0,o),null,null,1,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Page",1,!0,!1)
$.Fy=m
m=H.a(["got caught stealing from a Dersite newstand.","got caught running a con scheme.","finally got caught stealing."],p)
i=H.a([],p)
m=new U.oU(1.01,0.01,1.01,m,["RUMPUS RUINER","HAMBURGLER YOUTH","PRISONBAIT"],["robbing various enemy imps and ogres to obtain vast riches","planning an elaborate heist that relies on several hard-to-predict factors going absolutely perfectly","torrenting vast amounts of grist from the other players"],["literally stealing another players planet. Well, the deed to another player's planet, but still. A planet. Wow","stealing every last piece of grist in every last dungeon. Hell fucking yes","crashing the consort economy when they spend their hellaciously devious wealth","doing a dance on their pile of ill earned goods and wealth"],["talented","terrible","talkative","tenacious","tried","torrented"],!1,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,i,0.5,"Thief",new H.w(0,null,null,null,null,null,0,o),null,null,7,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Thief",7,!0,!1)
$.FH=m
m=P.l(H.a([new E.M($.cq,0.1,!1)],k),l)
i=H.a([],p)
m=new R.oG(0.51,1.01,0.01,["SERENE SCALLYWAG","MYSTICAL RUGMUFFIN","FAE FLEDGLING"],["restoring a consort city to its former glory","preserving the legacy of a doomed people","providing psychological counseling to homeless consorts"],["beginning to heal the vast psychological damage their consorts have endured from the denizens ravages","setting up counseling booths around their land and staffing them with well trained consort professionals","bugging and fussing and meddling with the consorts, but now using their NEW FOUND POWERS","realizing that maybe their bugging and fussing and meddling isnt always the best way to deal with things"],["serious","surly","sour","sweet","stylish","soaring","serene","salacious"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sylph",new H.w(0,null,null,null,null,null,0,o),null,null,5,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Sylph",5,!0,!1)
$.FG=m
m=H.a([],p)
m=new N.nJ("Archduke",1.01,1.01,0.01,1,["PRINCE HARMING","ROYAL RUMBLER","DIGIT PRINCE"],["destroying enemies thoroughly","riding in at the last minute to defeat the local consorts hated enemies","learning to grow as a person, despite the holes in their personality"],["thinking on endings. The end of their planet. The end of their denizen problems. The end of that very, very stupid imp that just tried to jump them","defeating every single mini boss, including a few on other players planets","burning down libraries of horror terror grimoires, shedding a few tears for the valuable knowledge lost along side the accursed texts","hunting down and killing the last of a particularly annoying underling class"],["precocious","priceless","proficient","prominent","proper","perfect","pantheon"],!1,!1,!1,!1,!0,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Prince",new H.w(0,null,null,null,null,null,0,o),null,null,10,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Prince",10,!0,!1)
$.Fz=m
m=P.l(H.a([new E.M($.cq,0.1,!1)],k),l)
i=H.a([],p)
m=new M.po("Warlock",0.51,0.51,0.51,["WESTWORD WORRYBITER","BUBBLETROUBLER","EYE OF GRINCH"],["performing elaborate punch card alchemy through the use of a novelty witch's cauldron","deciding which way to go in a series of way-too-long mazes","solving puzzles in ways that completely defy expectations"],["alchemizing a mind crushingly huge number of computers in various forms","whizzing around their land like it's fucking christmas","defeating a completely out of nowhere mini boss","wondering if their sprite prototyping choice was the right one after all"],["wondering","wonderful","wacky","withering","worldly","weighty"],!1,!1,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Witch",new H.w(0,null,null,null,null,null,0,o),null,null,11,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Witch",11,!0,!1)
$.FJ=m
m=P.l(H.a([new E.M($.cq,0.4,!1)],k),l)
i=H.a([],p)
m=new S.mV("Master",0.01,1.01,0.51,["WIZARDING TIKE","THE SORCERER'S SCURRYWART","FAMILIAR FRAYMOTTIFICTIONADO"],["performing increasingly complex alchemy for demanding, moody consorts","learning to silence their Mage Senses long enough to not go insane","learning to just let go and let things happen"],["finding yet another series of convoluted puzzles, buried deep in their land. These puzzles pour poison into the land, and will continue to do so until solved","realizing the voices are gone. Not just quiet, but gone. Without them, they can finally get down to work on their land puzzles","solving the more of the puzzles of their land. Not that that's the end of the horseshit, but hey! Less horseshit always helps","getting sick to death of puzzles and just utterly annihilating one with their game powers"],["magnificent","managerial","major","majestic","mannerly","malignant","morbid"],!1,!0,!1,!1,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Mage",new H.w(0,null,null,null,null,null,0,o),null,null,2,!0,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Mage",2,!0,!1)
$.Fu=m
m=H.a(["4TH WALL AFICIONADO","CATACLYSM COMMANDER","AUTHOR"],p)
i=H.a(["being a useless piece of shit and reading FAQs to skip the hard shit in levels","causing ridiculous amounts of destruction trying to skip quest lines","learning that sometimes you have to do things right, and can't just skip ahead"],p)
h=H.a(["figuring out the least-disruptive way to help the local Consorts recover from the Denizen's rule","being a useless piece of shit and not joining cleanup efforts.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["wasteful","worrying","wacky","withering","worldly","weighty"],p)
f=P.l(H.a([new E.M($.cq,3,!1),new E.M($.ur,-2,!1)],k),l)
e=H.a([],p)
m=new E.pk("Scourge",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!1,!0,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Waste",new H.w(0,null,null,null,null,null,0,o),null,null,12,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Waste",12,!1,!1)
$.FI=m
m=H.a([],p)
m=new Y.nW("Scorned",1.01,0.01,0.01,["BOSTON SCREAMPIE","COOKIE OFFERER","FIRE FRIEND"],["exploring areas no Consort has dared to trespass in","getting lost in ridiculously convoluted mazes","playing map-creating mini games"],["finding Consorts that still need help even after the Denizen has been defeated","scouting out areas that have opened up following the Denizen's defeat","looking for rare treasures that are no longer being guarded by the Denizen"],["surly","sour","sweet","stylish","soaring","serene","salacious"],!0,!1,!0,!1,!1,!1,"Glitch",0.01,0.01,0.01,m,0.5,"Scout",new H.w(0,null,null,null,null,null,0,o),null,null,13,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Scout",13,!1,!1)
$.FC=m
m=P.l(H.a([new E.M($.cq,0.5,!1)],k),l)
i=H.a([],p)
m=new L.nX("Archwright",1.01,0.01,0.01,["MIDNIGHT BURNER","WRITER WATCHER","DIARY DEAREST"],["taking down the increasingly random and nonsensical oral history of a group of local Consorts","playing typing themed mini games.","saving an important piece of a riddle from a crumbling building"],["documenting the various Consorts lost to the Denizen.","writing up a recovery plan for the Local Consorts","figuring out the best way to explain how to recover from the ravages of Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Scribe",new H.w(0,null,null,null,null,null,0,o),null,null,15,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Scribe",15,!1,!1)
$.FD=m
m=P.l(H.a([new E.M($.cq,0.5,!1)],k),l)
i=H.a([],p)
m=new E.nU(1.01,0.51,0.11,["HERBAL ESSENCE","CHICKEN SEASONER","TOMEMASTER"],["making the lore of SBURB part of their personal mythos","learning to nod wisely and remain silent when Consorts start yammering on about the Ultimate Riddle","participating in riddle contests to prove their intelligence to local Consorts"],["learning everything there is learn about the Denizen, now that it is safely defeated","learning what Consort civilization was like before the Denizen, to better help them return to 'normal'","demonstrating to the local Consorts the best way to move on from the tyranny of the Denizen"],["serious","sightly","sanctimonious","sarcastic","sassy","scintillating","synergistic","savant"],!1,!0,!1,!0,!1,!1,m,"Glitch",0.01,0.01,0.01,i,0.5,"Sage",new H.w(0,null,null,null,null,null,0,o),null,null,14,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Sage",14,!1,!1)
$.FB=m
m=H.a(["guiding","gracious","great","gratuitous","greeting","gloved","gone"],p)
i=H.a([],p)
m=new Y.lY("Highlord",0.51,0.01,1.01,m,!0,!1,!1,!1,!1,!0,"Glitch",0.01,0.01,0.01,i,0.5,"Guide",new H.w(0,null,null,null,null,null,0,o),null,null,16,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Guide",16,!1,!1)
$.Fp=m
m=H.a(["KNEEHIGH ROBINHOOD","DASHING DARTABOUT","COMMUNIST COMMANDER"],p)
i=H.a(["graceful","gracious","great","gratuitous","greeting","gloved","gone"],p)
h=P.l(H.a([new E.M($.cq,3,!1)],k),l)
g=H.a([],p)
m=new Y.lX(0.01,0.01,0.01,m,i,!1,!0,!1,!1,!0,!1,h,"Glitch",0.01,0.01,0.01,g,0.5,"Grace",new H.w(0,null,null,null,null,null,0,o),null,null,17,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Grace",17,!1,!1)
$.Fo=m
m=P.l(H.a([new E.M($.cq,0.1,!1)],k),l)
i=H.a([],p)
m=new E.n4("Wayward",0.51,0.01,2.01,["AMUSING AMATEUR","SPOTLIGHT POINTER","GREEK GOD"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["magical","musing","majestic","managerial"],!1,!1,!1,!0,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Muse",new H.w(0,null,null,null,null,null,0,o),null,null,18,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Muse",18,!1,!1)
$.Fw=m
m=H.a(["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"],p)
i=Q.I(null,null,n)
h=P.l(H.a([new E.M($.cq,0.1,!1)],k),l)
g=H.a([],p)
m=new Z.mT("Shogun",0.01,0.5,2.01,m,2,["LORDLING","DELEGATION DELIVERER","BUFFER THAN KR"],["inspiring the consorts to produce great works of art","causing events to transpire such that the consorts improve themselves","avidly learning about consort history and art"],["inspiring the consorts to rebuild their land","showing the consorts what strength through adversity means","hanging back and watching the consorts rebuild","making sure the recovery process is going as intended"],["lording","leaderly","laughing","laughsassin","lawful","lordly","legendary","legionnaires","lacerating","lactate","legislacerator"],!1,!1,!1,!0,!0,!1,i,h,"Glitch",0.01,0.01,0.01,g,0.5,"Lord",new H.w(0,null,null,null,null,null,0,o),null,null,19,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Lord",19,!1,!1)
$.Ft=m
m=P.l(H.a([new E.M($.cq,-0.1,!1),new E.M($.du,1,!1)],k),l)
i=H.a([],p)
m=new Y.o6("Sculpter",1.51,0.01,0.01,["HAMMER HONCHO","BICEP BEEFCAKE","ACCOMPLISHED ARTIST"],["silver","silver","skillful","standard","symbolic","snarky","scheming","shifty","stylish","serendipitous","shallow","saucy","stimulating"],!0,!1,!1,!1,!1,!0,m,"Glitch",0.01,0.01,0.01,i,0.5,"Smith",new H.w(0,null,null,null,null,null,0,o),null,null,20,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Smith",20,!1,!1)
$.FF=m
m=H.a(["413TH WALL APPRECIATOR","CATACLYSM COMMANDEER","MLH"],p)
i=H.a(["blatantly cheating with FAQs","destroying stuff to cheat more","learning that sometimes you have to do things right, and can't just skip ahead [sic, you can skip ahead]"],p)
h=H.a(["yeeting the consorts","joining another cult.","accidentally causing MORE destruction in an attempt to help clean up after their epic as fuck fight agains their Denizen"],p)
g=H.a(["human","helpful","hemo","hallucinating","hurtful","holistic"],p)
f=P.l(H.a([new E.M($.cq,4,!1),new E.M($.ur,-3,!1)],k),l)
e=H.a([],p)
m=new X.m6("Hooman",0.01,0.01,1.01,m,i,h,g,!1,!0,!1,!0,!1,!1,f,"Glitch",0.01,0.01,0.01,e,0.5,"Human",new H.w(0,null,null,null,null,null,0,o),null,null,21,!1,!1,!1,!1,!1,!1,!1,!1,Q.I(null,null,n),H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),H.a(["definitely doing class related quests","solving consorts problems in a class themed manner","absolutely not goofing off"],p),H.a(["cleaning up after their Denizen in a class approrpiate fashion","absolutly not goofing off instead of cleaing up after their Denizen","vaguely sweeping up rubble"],p),H.a(["nothing","never","mysterious","nebulous","null","missing","negative"],p),H.a([],k),H.a([],j),1)
m.a4("Human",21,!1,!1)
$.Fr=m
$.Fx=T.Fm("Null",255,!1,!0)
m=A.dE
i=P.C
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#00ff00"),!0)
h.j(0,$.b6,L.e("#EFEFEF"),!0)
h.j(0,$.b5,L.e("#DEDEDE"),!0)
h.j(0,$.bf,L.e("#FF2106"),!0)
h.j(0,$.be,L.e("#B01200"),!0)
h.j(0,$.b8,L.e("#2F2F30"),!0)
h.j(0,$.b9,L.e("#1D1D1D"),!0)
h.j(0,$.b7,L.e("#080808"),!0)
h.j(0,$.bd,L.e("#030303"),!0)
h.j(0,$.bc,L.e("#242424"),!0)
h.j(0,$.bb,L.e("#333333"),!0)
h.j(0,$.ba,L.e("#141414"),!0)
g=P.l(H.a(["Frogs"],p),q)
f=P.l(H.a(["GREENTIKE","RIBBIT RUSTLER","FROG-WRANGLER"],p),q)
e=P.l(H.a(["Stuck","Salamander","Salientia","Spacer","Scientist","Synergy","Spaceman"],p),q)
d=P.l(H.a(["Canon","Space","Frogs","Location","Spatial","Universe","Infinite","Spiral","Physics","Star","Galaxy","Nuclear","Atomic","Nucleus","Horizon","Event","CROAK","Spatium","Squiddle","Engine","Meteor","Gravity","Crush"],p),q)
c=P.l(H.a(["Space","Gaea","Nut","Echidna","Wadjet","Qetesh","Ptah","Geb","Fryja","Atlas","Hebe","Lork","Eve","Genesis","Morpheus","Veles ","Arche","Rekinom","Iago","Pilera","Tiamat","Gilgamesh","Implexel"],p),q)
b=P.l(H.a([new E.M($.du,2,!0),new E.M($.et,1,!0),new E.M($.hK,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new N.o9(0.5,1,0.5,h,g,f,e,d,"Sonata"," An echoing note is plucked. It is the one Isolation plays to chart the depths of reality. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["space","commitment","creation","room","stars","galaxy","black hole","super nova"],["space","frog","globe","map","toad","bass guitar","nuclear reactor","paint"],b,0.01,0.01,0.01,0.5,0,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Space",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(0,"Space",!0,!1)
$.ys=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#ff0000"),!0)
a.j(0,$.b6,L.e("#FF2106"),!0)
a.j(0,$.b5,L.e("#AD1604"),!0)
a.j(0,$.bf,L.e("#030303"),!0)
a.j(0,$.be,L.e("#242424"),!0)
a.j(0,$.b8,L.e("#510606"),!0)
a.j(0,$.b9,L.e("#3C0404"),!0)
a.j(0,$.b7,L.e("#1F0000"),!0)
a.j(0,$.bd,L.e("#B70D0E"),!0)
a.j(0,$.bc,L.e("#970203"),!0)
a.j(0,$.bb,L.e("#8E1516"),!0)
a.j(0,$.ba,L.e("#640707"),!0)
b=P.l(H.a(["Quartz","Clockwork","Gears","Melody","Cesium","Clocks","Ticking","Beats","Mixtapes","Songs","Music","Vuvuzelas","Drums","Pendulums"],p),q)
c=P.l(H.a(["MARQUIS MCFLY","JUNIOR CLOCK BLOCKER","DEAD KID COLLECTOR"],p),q)
d=P.l(H.a(["Teetotaler","Traveler","Tailor","Taster","Target","Teacher","Therapist","Testicle"],p),q)
e=P.l(H.a(["Time","Paradox","Chrono","Moment","Foregone","Reset","Endless","Temporal","Shenanigans","Clock","Tick-Tock","Spinning","Repeat","Rhythm","Redshift","Epoch","Beatdown","Slow","Remix","Clockwork","Lock","Eternal"],p),q)
f=P.l(H.a(["Time","Ignis","Saturn","Cronos","Aion","Hephaestus","Vulcan","Perses","Prometheus","Geras","Acetosh","Styx","Kairos","Veter","Gegute","Etu","Postverta and Antevorta","Emitus","Moirai"],p),q)
g=P.l(H.a([new E.M($.hJ,2,!0),new E.M($.hK,1,!0),new E.M($.fn,-2,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new N.oV(0.51,1,0.01,0.7,a,b,c,d,e,"Canon","  A sun skips on a groove its tracing 'round the earth, the one-two beat Despair plays to turn cause and effect meaningless. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is/was/will be to say on the matter. ",f,["time","speed","inevitability","paradoxes","rhythm"],["time","clock","metronome","beat","turntables","music box","sheet music","drum","sundial","beatbox","trousers","river"],g,0.01,0.01,0.01,0.5,1,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Time",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(1,"Time",!0,!1)
$.yt=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#3399ff"),!0)
h.j(0,$.b6,L.e("#10E0FF"),!0)
h.j(0,$.b5,L.e("#00A4BB"),!0)
h.j(0,$.bf,L.e("#FEFD49"),!0)
h.j(0,$.be,L.e("#D6D601"),!0)
h.j(0,$.b8,L.e("#0052F3"),!0)
h.j(0,$.b9,L.e("#0046D1"),!0)
h.j(0,$.b7,L.e("#003396"),!0)
h.j(0,$.bd,L.e("#0087EB"),!0)
h.j(0,$.bc,L.e("#0070ED"),!0)
h.j(0,$.bb,L.e("#006BE1"),!0)
h.j(0,$.ba,L.e("#0054B0"),!0)
g=P.l(H.a(["Wind","Breeze","Zephyr","Gales","Storms","Planes","Twisters","Hurricanes","Gusts","Windmills","Pipes","Whistles"],p),q)
f=P.l(H.a(["BOY SKYLARK","SODAJERK'S CONFIDANTE","MAN SKYLARK"],p),q)
e=P.l(H.a(["Business","Biologist","Backpacker","Babysitter","Baker","Balooner","Braid"],p),q)
d=P.l(H.a(["Gale","Wiznado","Feather","Lifting","Breathless","Jetstream","Hurricane","Tornado"," Kansas","Breath","Breeze","Twister","Storm","Wild","Inhale","Windy","Skylark","Fugue","Pneumatic","Wheeze","Forward","Vertical","Whirlwind","Jetstream"],p),q)
c=P.l(["Breath","Ninlil","Ouranos","Typheus","Aether","Amun","Hermes","Shu","Sobek","Aura","Theia","Lelantos","Keenarth","Aeolus","Aurai","Zephyrus","Ventus","Sora","Htaerb","Worlourier","Quetzalcoatl"],q)
b=P.l(H.a([new E.M($.hK,2,!0),new E.M($.d6,1,!0),new E.M($.et,-1,!0),new E.M($.eu,-1,!0),new E.M($.cq,0.05,!1)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new T.kD(0.5,1,0.01,0.3,h,g,f,e,d,"Refrain "," A haunting refrain begins to play. It is the one Desolation plays to keep its instrument in tune. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["breath","mobility","freedom","motivation","direction","wind"],["breath","wind","key","pipe","hurricane","horn","bicycle","wheel"],c,b,0.01,0.01,0.01,0.5,2,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Breath",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(2,"Breath",!0,!1)
$.yg=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#003300"),!0)
a.j(0,$.b6,L.e("#0F0F0F"),!0)
a.j(0,$.b5,L.e("#010101"),!0)
a.j(0,$.bf,L.e("#E8C15E"),!0)
a.j(0,$.be,L.e("#C7A140"),!0)
a.j(0,$.b8,L.e("#1E211E"),!0)
a.j(0,$.b9,L.e("#141614"),!0)
a.j(0,$.b7,L.e("#0B0D0B"),!0)
a.j(0,$.bd,L.e("#204020"),!0)
a.j(0,$.bc,L.e("#11200F"),!0)
a.j(0,$.bb,L.e("#192C16"),!0)
a.j(0,$.ba,L.e("#121F10"),!0)
b=P.l(H.a(["Fire","Death","Prophecy","Blight","Rules","Prophets","Poison","Funerals","Graveyards","Ash","Disaster","Fate","Destiny","Bones"],p),q)
c=P.l(H.a(["APOCALYPSE HOW","REVELATION RUMBLER","PESSIMISM PILGRIM"],p),q)
d=P.l(H.a(["Dancer","Dean","Decorator","Deliverer","Director","Delegate","Destined"],p),q)
e=P.l(H.a(["Dark","Broken","Meteoric","Diseased","Fate","Doomed","Inevitable","Doom","End","Final","Dead","Ruin","Rot","Coffin","Apocalypse","Morendo","Smorzando","~Ath","Armistyx","Grave","Corpse","Ashen","Reaper","Diseased","Armageddon","Cursed"],p),q)
f=P.l(H.a(["Doom","Hades","Achlys","Cassandra","Osiris","Ananke","Thanatos","Moros","Iapetus","Themis","Aisa","Oizys","Styx","Keres","Maat","Castor and Pollux","Anubis","Azrael","Ankou","Kapre","Moros","Atropos","Oizys","Korne","Odin"],p),q)
g=P.l(H.a([new E.M($.du,2,!0),new E.M($.fn,1,!0),new E.M($.hJ,-1,!0),new E.M($.et,-1,!0),new E.M($.cq,0.01,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new U.l6(1,0.5,0.5,1,a,b,c,d,e,"Dirge"," A slow dirge begins to play. It is the one Death plays to keep in practice. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["doom","rules","fate","judgement","fog","gas"],["doom","bone","skull","mural","gravestone","tome","tomb"],!0,!0,f,g,0.01,0.01,0.01,0.5,3,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Doom",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(3,"Doom",!0,!1)
$.yh=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#993300"),!0)
h.j(0,$.b6,L.e("#BA1016"),!0)
h.j(0,$.b5,L.e("#820B0F"),!0)
h.j(0,$.bf,L.e("#381B76"),!0)
h.j(0,$.be,L.e("#1E0C47"),!0)
h.j(0,$.b8,L.e("#290704"),!0)
h.j(0,$.b9,L.e("#230200"),!0)
h.j(0,$.b7,L.e("#110000"),!0)
h.j(0,$.bd,L.e("#3D190A"),!0)
h.j(0,$.bc,L.e("#2C1207"),!0)
h.j(0,$.bb,L.e("#5C2913"),!0)
h.j(0,$.ba,L.e("#4C1F0D"),!0)
g=P.l(H.a(["Pulse","Bonds","Clots","Bloodlines","Ichor","Veins","Chambers","Arteries","Unions"],p),q)
f=P.l(H.a(["FRIEND HOARDER YOUTH","HEMOGOBLIN","SOCIALIST BUTTERFLY"],p),q)
e=P.l(H.a(["Business","Buyer","Butler","Butcher","Barber","Bowler","Belligerent"],p),q)
d=P.l(H.a(["Blood","Trigger","Chain","Flow","Charge","Awakening","Ichorial","Friendship","Trusting","Clotting","Union","Bleeding","Team","Transfusion","Pulse","Sanguine","Positive","Negative","Cruor","Vim","Chorus","Iron","Ichorial","Fever","Heat"],p),q)
c=P.l(H.a(["Blood","Hera","Hestia","Bastet","Bes","Vesta","Eleos","Sanguine","Medusa","Frigg","Debella","Juno","Moloch","Baal","Eusebeia","Horkos","Homonia","Harmonia","Philotes"],p),q)
b=P.l(H.a([new E.M($.eu,2,!0),new E.M($.d6,1,!0),new E.M($.du,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new T.kA(0.01,0.5,1,0,h,g,f,e,d,"Ballad "," A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["blood","bond","friendship","ties","pulse","chain","ocean"],["blood","photo album","friendship bracelet","string","chain","manacle","toy army"],c,b,0.01,0.01,0.01,0.5,4,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Blood",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(4,"Blood",!0,!1)
$.yf=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#ff3399"),!0)
a.j(0,$.b6,L.e("#BD1864"),!0)
a.j(0,$.b5,L.e("#780F3F"),!0)
a.j(0,$.bf,L.e("#1D572E"),!0)
a.j(0,$.be,L.e("#11371D"),!0)
a.j(0,$.b8,L.e("#4C1026"),!0)
a.j(0,$.b9,L.e("#3C0D1F"),!0)
a.j(0,$.b7,L.e("#260914"),!0)
a.j(0,$.bd,L.e("#6B0829"),!0)
a.j(0,$.bc,L.e("#4A0818"),!0)
a.j(0,$.bb,L.e("#55142A"),!0)
a.j(0,$.ba,L.e("#3D0E1E"),!0)
b=P.l(H.a(["Little Cubes","Hats","Dolls","Selfies","Mirrors","Spirits","Souls","Jazz","Shards","Splinters"],p),q)
c=P.l(H.a(["SHARKBAIT HEARTHROB","FEDORA FLEDGLING","PENCILWART PHYLACTERY"],p),q)
d=P.l(H.a(["Heart","Hacker","Harbinger","Handler","Helper","Historian","Hobbyist"],p),q)
e=P.l(H.a(["Heart","Soul","Jazz","Blues","Spirit","Splintering","Clone","Self","Havoc","Noble","Animus","Astral","Shatter","Breakdown","Ethereal","Beat","Pulchritude"],p),q)
f=P.l(H.a(["Heart","Aphrodite","Baldur","Eros","Hathor","Philotes","Anubis","Psyche","Mora","Isis","Jupiter","Narcissus","Hecate","Izanagi","Izanami","Ishtar","Anteros","Agape","Peitho","Mahara","Naidraug","Snoitome","Walthidian","Slanesh","Benu"],p),q)
g=P.l(H.a([new E.M($.eu,1,!0),new E.ko(null,1,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new T.lZ(0.3,0.6,0.01,a,b,c,d,e,"Leitmotif"," A chord begins to echo. It is the one Damnation will play at their birth. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["heart","identity","emotion","core","beat","shadow"],["heart","doll","locket","mirror","mask","shades","sculpture"],!0,f,g,0.01,0.01,0.01,0.5,5,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Heart",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(5,"Heart",!0,!1)
$.yj=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#3da35a"),!0)
h.j(0,$.b6,L.e("#06FFC9"),!0)
h.j(0,$.b5,L.e("#04A885"),!0)
h.j(0,$.bf,L.e("#6E0E2E"),!0)
h.j(0,$.be,L.e("#4A0818"),!0)
h.j(0,$.b8,L.e("#1D572E"),!0)
h.j(0,$.b9,L.e("#164524"),!0)
h.j(0,$.b7,L.e("#11371D"),!0)
h.j(0,$.bd,L.e("#3DA35A"),!0)
h.j(0,$.bc,L.e("#2E7A43"),!0)
h.j(0,$.bb,L.e("#3B7E4F"),!0)
h.j(0,$.ba,L.e("#265133"),!0)
g=P.l(H.a(["Thought","Rationality","Decisions","Consequences","Choices","Paths","Trails","Trials"],p),q)
f=P.l(H.a(["NIPPER-CADET","COIN-FLIPPER CONFIDANTE","TWO-FACED BUCKAROO"],p),q)
e=P.l(H.a(["Man","Machine","Magician","Magistrate","Mechanic","Mediator","Messenger"],p),q)
d=P.l(H.a(["Mind","Modulation","Shock","Awe","Coin","Judgement","Mind","Decision","Spark","Path","Trial","Variations","Thunder","Logical","Telekinetic","Brainiac","Hysteria","Deciso","Thesis","Imagination","Psycho","Control","Execution","Bolt"],p),q)
c=P.l(H.a(["Mind","Athena","Forseti","Janus","Anubis","Maat","Seshat","Thoth","Jyglag","Peryite","Nomos","Lugus","Sithus","Dike","Epimetheus","Metis","Morpheus","Omoikane","Argus","Hermha","Morha","Sespille","Selcric","Tzeench"],p),q)
b=P.l(H.a([new E.M($.fn,2,!0),new E.M($.hJ,1,!0),new E.M($.du,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new V.n3(0.3,0.3,1,h,g,f,e,d,"Fugue"," A fractured chord is prepared. It is the one Regret plays to make insomnia reign. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["mind","decisions","consequences","free will","path","neurons","causality"],["mind","coin","plan","mask","map","brain","circuit"],b,0.01,0.01,0.01,0.5,6,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Mind",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(6,"Mind",!0,!1)
$.yo=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#ff9933"),!0)
a.j(0,$.b6,L.e("#FEFD49"),!0)
a.j(0,$.b5,L.e("#FEC910"),!0)
a.j(0,$.bf,L.e("#10E0FF"),!0)
a.j(0,$.be,L.e("#00A4BB"),!0)
a.j(0,$.b8,L.e("#FA4900"),!0)
a.j(0,$.b9,L.e("#E94200"),!0)
a.j(0,$.b7,L.e("#C33700"),!0)
a.j(0,$.bd,L.e("#FF8800"),!0)
a.j(0,$.bc,L.e("#D66E04"),!0)
a.j(0,$.bb,L.e("#E76700"),!0)
a.j(0,$.ba,L.e("#CA5B00"),!0)
b=P.l(H.a(["Treasure","Light","Knowledge","Radiance","Gambling","Casinos","Fortune","Sun","Glow","Chance"],p),q)
c=P.l(H.a(["SHOWOFF SQUIRT","JUNGLEGYM SWASHBUCKLER","SUPERSTITIOUS SCURRYWART"],p),q)
d=P.l(H.a(["Laborer","Launderer","Layabout","Legend","Lawyer","Lifeguard"],p),q)
e=P.l(H.a(["Lucky","LIGHT","Knowledge","Blinding","Brilliant","Break","Blazing","Glow","Flare","Gamble","Omnifold","Apollo","Helios","Scintillating","Horseshoe","Leggiero","Star","Kindle","Gambit","Blaze"],p),q)
f=P.l(H.a(["Light","Helios","Ra","Cetus","Iris","Heimdall","Apollo","Coeus","Hyperion","Belobog","Phoebe","Metis","Eos","Dagr","Asura","Amaterasu","Sol","Tyche","Odin ","Erutuf"],p),q)
g=P.l(H.a([new E.M($.hI,2,!0),new E.M($.fn,1,!0),new E.M($.d6,-1,!0),new E.M($.et,-1,!0),new E.M($.cq,0.2,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new G.mF(1.01,0.5,0.01,a,b,c,d,e,"Opera"," A beautiful opera begins to be performed. It starts to really pick up around Act 4. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",f,["light","fortune","knowledge","illumination","relevance","rain","sun","rainbow"],["light","clover","horseshoe","encyclopedia","sun","dice","8-ball","deck of tarot cards"],g,0.01,0.01,0.01,0.5,7,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Light",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(7,"Light",!0,!1)
$.yn=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#000066"),!0)
h.j(0,$.b6,L.e("#0B1030"),!0)
h.j(0,$.b5,L.e("#04091A"),!0)
h.j(0,$.bf,L.e("#CCC4B5"),!0)
h.j(0,$.be,L.e("#A89F8D"),!0)
h.j(0,$.b8,L.e("#00164F"),!0)
h.j(0,$.b9,L.e("#00103C"),!0)
h.j(0,$.b7,L.e("#00071A"),!0)
h.j(0,$.bd,L.e("#033476"),!0)
h.j(0,$.bc,L.e("#02285B"),!0)
h.j(0,$.bb,L.e("#004CB2"),!0)
h.j(0,$.ba,L.e("#003E91"),!0)
g=P.l(H.a(["Silence","Nothing","Void","Emptiness","Tears","Dust","Night","[REDACTED]","???","Blindness"],p),q)
f=P.l(H.a(["KNOW-NOTHING ANKLEBITER","INKY BLACK SORROWMASTER","FISTICUFFSAFICTIONADO"],p),q)
e=P.l(H.a(["Vagrant","Vegetarian","Veterinarian","Vigilante","Virtuoso"],p),q)
d=P.l(H.a(["Undefined","untitled.mp4","Void","Disappearification","Pumpkin","Nothing","Emptiness","Invisible","Dark","Hole","Solo","Silent","Alone","Night","Null","[Censored]","[???]","Vacuous","Abyss","Noir","Blank","Tenebrous","Antithesis","404"],p),q)
c=P.l(H.a(["Void","Selene","Erebus","Nix","Artemis","Kuk","Kaos","Hypnos","Tartarus","Hnir","Skoll","Czernobog","Vermina","Vidar","Asteria","Nocturne","Tsukuyomi","Leviathan","Hecate","Harpocrates","Diova"],p),q)
b=P.l(H.a([new E.fI(D.us(),null,3,!0),new E.fI(D.us(),null,-1,!0),new E.M($.hJ,-1,!0),new E.M($.cq,0.2,!1)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new Q.pj(1,1,1,h,g,f,e,d,"Silence"," A yawning silence rings out. It is the NULL Reality sings to keep the worlds on their dance. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",c,["void","obscurity","irrelevance","stealth","null","silence","ignorance","vacuum","static"],["void","cloak","disguise","shadow","cardboard box","secret plan"],b,0.01,0.01,0.01,0.5,8,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Void",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(8,"Void",!0,!1)
$.yu=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#9900cc"),!0)
a.j(0,$.b6,L.e("#974AA7"),!0)
a.j(0,$.b5,L.e("#6B347D"),!0)
a.j(0,$.bf,L.e("#3D190A"),!0)
a.j(0,$.be,L.e("#2C1207"),!0)
a.j(0,$.b8,L.e("#7C3FBA"),!0)
a.j(0,$.b9,L.e("#6D34A6"),!0)
a.j(0,$.b7,L.e("#592D86"),!0)
a.j(0,$.bd,L.e("#381B76"),!0)
a.j(0,$.bc,L.e("#1E0C47"),!0)
a.j(0,$.bb,L.e("#281D36"),!0)
a.j(0,$.ba,L.e("#1D1526"),!0)
b=P.l(H.a(["Mirth","Whimsy","Madness","Impossibility","Chaos","Hate","Violence","Joy","Murder","Noise","Screams","Denial"],p),q)
c=P.l(H.a(["MOPPET OF MADNESS","FLEDGLING HATTER","RAGAMUFFIN REVELER"],p),q)
d=P.l(H.a(["Raconteur","Reveler","Reader","Reporter","Racketeer"],p),q)
e=P.l(H.a(["Rage","Barbaric","Impossible","Tantrum","Juggalo","Horrorcore","Madness","Carnival","Mirthful","Screaming","Berserk","MoThErFuCkInG","War","Haze","Murder","Furioso","Aggressive","ATBasher","Violent","Unbound","Purple","Unholy","Hateful","Fearful","Inconceivable","Impossible"],p),q)
f=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
g=P.l(H.a([new E.M($.hL,2,!0),new E.M($.hK,1,!0),new E.M($.d6,-1,!0),new E.M($.eu,-1,!0),new E.M($.cq,0.01,!1)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new E.nL(1,1,0.01,a,b,c,d,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",f,["rage","sanity","power","whimsy","impossible","screams","laughter","madness"],["rage","face paint","script","bike horn","war mask","murder weapon","loud speaker","bullhorn","broken machine"],g,0.01,0.01,0.01,0.5,9,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Rage",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(9,"Rage",!0,!1)
$.yq=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#ffcc66"),!0)
h.j(0,$.b6,L.e("#FDF9EC"),!0)
h.j(0,$.b5,L.e("#D6C794"),!0)
h.j(0,$.bf,L.e("#164524"),!0)
h.j(0,$.be,L.e("#06280C"),!0)
h.j(0,$.b8,L.e("#FFC331"),!0)
h.j(0,$.b9,L.e("#F7BB2C"),!0)
h.j(0,$.b7,L.e("#DBA523"),!0)
h.j(0,$.bd,L.e("#FFE094"),!0)
h.j(0,$.bc,L.e("#E8C15E"),!0)
h.j(0,$.bb,L.e("#F6C54A"),!0)
h.j(0,$.ba,L.e("#EDAF0C"),!0)
g=P.l(H.a(["Angels","Hope","Belief","Faith","Determination","Possibility","Hymns","Heroes","Chapels","Lies","Bullshit"],p),q)
f=P.l(H.a(["GADABOUT PIPSQUEAK","BELIVER EXTRAORDINAIRE","DOCTOR FEELGOOD"],p),q)
e=P.l(H.a(["Honcho","Humorist","Horse","Haberdasher","Hooligan"],p),q)
d=P.l(H.a(["Hope","Fake","Belief","Bullshit","Determination","Burn","Stubborn","Religion","Will","Hero","Undying","Dream","Sepulchritude","Prophet","Apocryphal"],p),q)
c=P.l(H.a(["Hope","Isis","Marduk","Fenrir","Apollo","Sekhmet","Votan","Wadjet","Baldur","Zanthar","Raphael","Metatron","Jerahmeel","Gabriel","Michael","Cassiel","Gavreel","Aariel","Uriel","Barachiel ","Jegudiel","Samael","Taylus","Tzeench"],p),q)
b=P.l(H.a([new E.M($.d6,2,!0),new E.M($.hI,1,!0),new E.fI(D.us(),null,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new X.m1(1,1,1,h,g,f,e,d,"Etude"," A resounding hootenanny begins to play. It is the one Irony performs to remember the past. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["hope","beliefs","imagination","dreams","waves"],["hope","magic feather","wand","talisman","spell book","stone tablet","idol","lottery ticket"],c,b,0.01,0.01,0.01,0.5,10,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Hope",null,!0,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(10,"Hope",!0,!1)
$.yk=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#494132"),!0)
a.j(0,$.b6,L.e("#76C34E"),!0)
a.j(0,$.b5,L.e("#4F8234"),!0)
a.j(0,$.bf,L.e("#00164F"),!0)
a.j(0,$.be,L.e("#00071A"),!0)
a.j(0,$.b8,L.e("#605542"),!0)
a.j(0,$.b9,L.e("#494132"),!0)
a.j(0,$.b7,L.e("#2D271E"),!0)
a.j(0,$.bd,L.e("#CCC4B5"),!0)
a.j(0,$.bc,L.e("#A89F8D"),!0)
a.j(0,$.bb,L.e("#A29989"),!0)
a.j(0,$.ba,L.e("#918673"),!0)
b=P.l(H.a(["Dew","Spring","Beginnings","Vitality","Jungles","Swamps","Gardens","Summer","Chlorophyll","Moss","Rot","Mold"],p),q)
c=P.l(H.a(["BRUISE BUSTER","LODESTAR LIFER","BREACHES HEALER"],p),q)
d=P.l(H.a(["Leader","Lecturer","Liaison","Loyalist","Lyricist"],p),q)
e=P.l(H.a(["Life","Pastoral","Green","Relief","Healing","Plant","Vitality","Growing","Garden","Multiplying","Rising","Survival","Phoenix","Respawn","Mangrit","Animato","Gaia","Increasing","Overgrowth","Jungle","Harvest","Lazarus"],p),q)
f=P.l(H.a(["Life","Demeter","Pan","Nephthys","Ceres","Isis","Hemera","Andhrmnir","Agathodaemon","Eir","Baldur","Prometheus","Adonis","Geb","Panacea","Aborof","Nurgel","Adam"],p),q)
g=P.l(H.a([new E.M($.et,2,!0),new E.M($.hL,1,!0),new E.M($.du,-2,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new K.mE(0.01,1,0.03,a,b,c,d,e,"Lament"," A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",["life","health","growth","strength","tree","forest"],["life","plant","fertilizer","food","flower","beast","fruit","baby","puppy","candy"],f,g,0.01,0.01,0.01,0.5,11,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Life",null,!0,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(11,"Life",!0,!1)
$.ym=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#9630BF"),!0)
h.j(0,$.b6,L.e("#cc87e8"),!0)
h.j(0,$.b5,L.e("#9545b7"),!0)
h.j(0,$.bf,L.e("#ae769b"),!0)
h.j(0,$.be,L.e("#8f577c"),!0)
h.j(0,$.b8,L.e("#9630bf"),!0)
h.j(0,$.b9,L.e("#693773"),!0)
h.j(0,$.b7,L.e("#4c2154"),!0)
h.j(0,$.bd,L.e("#fcf9bd"),!0)
h.j(0,$.bc,L.e("#e0d29e"),!0)
h.j(0,$.bb,L.e("#bdb968"),!0)
h.j(0,$.ba,L.e("#ab9b55"),!0)
g=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
f=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
e=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
d=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
c=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
b=P.l(H.a([new E.M($.du,3,!0),new E.M($.d6,-2,!0)],k),l)
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#FF9B00"),!0)
a.j(0,$.b6,L.e("#FF9B00"),!0)
a.j(0,$.b5,L.e("#FF8700"),!0)
a.j(0,$.bf,L.e("#7F7F7F"),!0)
a.j(0,$.be,L.e("#727272"),!0)
a.j(0,$.b8,L.e("#A3A3A3"),!0)
a.j(0,$.b9,L.e("#999999"),!0)
a.j(0,$.b7,L.e("#898989"),!0)
a.j(0,$.bd,L.e("#EFEFEF"),!0)
a.j(0,$.bc,L.e("#DBDBDB"),!0)
a.j(0,$.bb,L.e("#C6C6C6"),!0)
a.j(0,$.ba,L.e("#ADADAD"),!0)
a=new Z.l7(1.01,0.3,0.01,h,g,f,e,d,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,c,b,0.01,0.01,0.01,0.5,12,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Dream",null,!1,!1,!1,!1,!0,1,a,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
a.aj(12,"Dream",!1,!1)
$.yi=a
a=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
a.j(0,$.b4,L.e("#9630BF"),!0)
a.j(0,$.b6,L.e("#cc87e8"),!0)
a.j(0,$.b5,L.e("#9545b7"),!0)
a.j(0,$.bf,L.e("#ae769b"),!0)
a.j(0,$.be,L.e("#8f577c"),!0)
a.j(0,$.b8,L.e("#9630bf"),!0)
a.j(0,$.b9,L.e("#693773"),!0)
a.j(0,$.b7,L.e("#4c2154"),!0)
a.j(0,$.bd,L.e("#fcf9bd"),!0)
a.j(0,$.bc,L.e("#e0d29e"),!0)
a.j(0,$.bb,L.e("#bdb968"),!0)
a.j(0,$.ba,L.e("#ab9b55"),!0)
b=P.l(H.a(["Dreams","Nightmares","Clouds","Obsession","Glass","Memes","Chess","Creation","Singularity","Perfection","Sleep","Pillows","Clouds","Clay","Putty","Art","Design","Dreams","Repetition","Creativity","Imagination","Plagerism"],p),q)
c=P.l(H.a(["ADHDLED YOUTH","LUCID DREAMER","LUCID DREAMER"],p),q)
d=P.l(H.a(["Dreamer","Dilettante","Designer","Delusion","Dancer","Doormat","Decorator","Delirium","Disaster","Disorder"],p),q)
e=P.l(H.a(["Lunar","Lucid","Prospit","Derse","Dream","Creative","Imagination"],p),q)
f=P.l(H.a(["Dream","Dreamer","Calliope","Clio","Euterpe","Thalia","Melpomene","Terpsichore","Erato","Polyhmnia","Urania","Melete","Mneme","Aoide","Hypnos","Morpheus","Oneiros","Phobetor","Icelus","Somnus","Metztli","Yohualticetl","Khonsu","Chandra","M\u0117nuo","Nyx"],p),q)
g=P.l(H.a([new E.M($.du,3,!0),new E.M($.d6,-2,!0)],k),l)
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#FF9B00"),!0)
h.j(0,$.b6,L.e("#FF9B00"),!0)
h.j(0,$.b5,L.e("#FF8700"),!0)
h.j(0,$.bf,L.e("#7F7F7F"),!0)
h.j(0,$.be,L.e("#727272"),!0)
h.j(0,$.b8,L.e("#A3A3A3"),!0)
h.j(0,$.b9,L.e("#999999"),!0)
h.j(0,$.b7,L.e("#898989"),!0)
h.j(0,$.bd,L.e("#EFEFEF"),!0)
h.j(0,$.bc,L.e("#DBDBDB"),!0)
h.j(0,$.bb,L.e("#C6C6C6"),!0)
h.j(0,$.ba,L.e("#ADADAD"),!0)
h=new Q.mC(1.01,0.3,0.01,a,b,c,d,e,["dream","creativity","obsession","art"],["dream","dream catcher","sculpture","painting","sketch"],"Fantasia"," An orchestra begins to tune up. It is the one Obsession will play to celebrate. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ",!1,f,g,0.01,0.01,0.01,0.5,13,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Law",null,!1,!1,!1,!1,!0,1,h,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
h.aj(13,"Law",!1,!1)
$.yl=h
h=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
h.j(0,$.b4,L.e("#00ff00"),!0)
h.j(0,$.b6,L.e("#00ff00"),!0)
h.j(0,$.b5,L.e("#00ff00"),!0)
h.j(0,$.bf,L.e("#00ff00"),!0)
h.j(0,$.be,L.e("#00cf00"),!0)
h.j(0,$.b8,L.e("#171717"),!0)
h.j(0,$.b9,L.e("#080808"),!0)
h.j(0,$.b7,L.e("#080808"),!0)
h.j(0,$.bd,L.e("#616161"),!0)
h.j(0,$.bc,L.e("#3b3b3b"),!0)
h.j(0,$.bb,L.e("#4a4a4a"),!0)
h.j(0,$.ba,L.e("#292929"),!0)
g=P.l(H.a(["JUST SHOGUN","JUST SHOGUN","JUST SHOGUN"],p),q)
f=P.l(H.a(["Shogun"],p),q)
e=P.l(H.a(["Glitchy","Sauce","Saucey","Sauced","Seinfield Theme","Glitch"],p),q)
d=P.l(H.a(["Rage","Ares","Dyonisus","Bacchus","Abbadon","Mammon","Mania","Asmodeus","Belphegor","Set","Apophis","Nemesis","Menoetius","Shogorath","Loki","Alastor","Mol Bal","Deimos","Achos","Pallas","Deimos","Ania","Lupe","Lyssa","Ytilibatsni","Discord"],p),q)
c=P.l(H.a([new E.M($.hL,13,!0)],k),l)
m=new L.aW(P.E(null,null,null,q,m),P.E(null,null,null,i,m),P.E(null,null,null,q,i),P.E(null,null,null,i,q))
m.j(0,$.b4,L.e("#FF9B00"),!0)
m.j(0,$.b6,L.e("#FF9B00"),!0)
m.j(0,$.b5,L.e("#FF8700"),!0)
m.j(0,$.bf,L.e("#7F7F7F"),!0)
m.j(0,$.be,L.e("#727272"),!0)
m.j(0,$.b8,L.e("#A3A3A3"),!0)
m.j(0,$.b9,L.e("#999999"),!0)
m.j(0,$.b7,L.e("#898989"),!0)
m.j(0,$.bd,L.e("#EFEFEF"),!0)
m.j(0,$.bc,L.e("#DBDBDB"),!0)
m.j(0,$.bb,L.e("#C6C6C6"),!0)
m.j(0,$.ba,L.e("#ADADAD"),!0)
j=new K.nV(13,13,13,h,g,f,e," Aria"," A hsirvprmt xslri begins to tryyvi. It is the one Madness plays gl pvvk rgh rmhgifnvmg rm gfmv. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And yes, The OWNER know you're watching them. ",d,["uno reverse card","jr body pillow"],["uno reverse card","jr body pillow"],c,0.01,0.01,0.01,0.5,14,new H.w(0,null,null,null,null,null,0,o),null,"","",!1,"Sauce",null,!1,!0,!1,!1,!0,1,m,P.l(H.a(["SNOWMAN SAVIOR","NOBODY NOWHERE","NULLZILLA"],p),q),P.l(H.a(["ERROR 404: DENIZEN NOT FOUND"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Blank","Null","Boring","Error"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),P.l(H.a(["Nothing","Errors","Glitches"],p),q),"Song","A static sound is heard. It is the one Forgetfulness uses to cover the lacunae. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And there's nothing else to say on the matter. ",P.l(H.a(["Null","Nothing","Mystery"],p),q),H.a([],k),H.a([],j),Q.I(null,null,n))
j.aj(14,"Sauce",!1,!0)
$.yr=j
$.yp=L.ye(255,"Null",!1,!0)
j=P.l(H.a([new E.M($.d6,1,!0),new E.M($.hI,1,!0)],k),l)
q=H.a(["musical","pianist","melodious","keyboard","rhythmic","singing","tuneful","harmonious","beating","pitch","waltzing","synthesized","piano","serenading","mozarts","swelling","staccato","pianissimo","monotone","polytempo"],p)
m=H.a(["Siren","Singer","Tenor","Trumpeter","Baritone","Dancer","Ballerina","Harpsicordist","Musician","Lutist","Violist","Rapper","Harpist","Lyricist","Virtuoso","Bass"],p)
c=H.a(["SINGING SCURRYWORT","MUSICAL MOPPET"],p)
d=H.a(["Rap","Music","Song Writing","Musicals","Dance","Singing","Ballet","Playing Guitar","Playing Piano","Mixtapes","Turntables"],p)
e=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
g=H.a(["Nobody"],p)
h=H.a(["Nobody"],p)
q=new F.n5(j,q,m,c,d,!1,e,f,g,h,1,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"loud","musical","Music")
q.D()
q.E()
B.cL(q)
$.zr=q
q=P.l(H.a([new E.M($.fn,-2,!0)],k),l)
m=H.a(["serious","researching","machiavellian","princeton","pedagogical","theoretical","hypothetical","meandering","scholarly","biological","pants","spectacled","scientist","scholastic","scientific","particular","measured"],p)
j=H.a(["Business","Stuck","Student","Scholar","Researcher","Scientist","Trainee","Biologist","Minerologist","Lecturer","Herbalist","Dean","Director","Honcho","Minder","Verbalist","Botanist"],p)
i=H.a(["NERDY NOODLER","SCAMPERING SCIENTIST"],p)
h=H.a(["Archaeology","Mathematics","Astronomy","Knowledge","Physics","Biology","Chemistry","Geneology","Science","Molecular Gastronomy","Model Trains","Politics","Geography","Cartography","Typography","History"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new S.kk(q,m,j,i,h,!1,g,f,e,d,13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"nerdy","smart","Academic")
q.D()
q.E()
B.cL(q)
$.zk=q
q=P.l(H.a([new E.M($.hL,2,!0)],k),l)
m=H.a(["kinetic","muscley","preening","mighty","running","sporty","tennis","hard","ball","winning","trophy","sports","physical","sturdy","strapping","hardy","brawny","burly","robust","strong","muscular","phenomenal"],p)
j=H.a(["Swimmer","Trainer","Baller","Handler","Runner","Leaper","Racer","Vaulter","Major","Tracker","Heavy","Brawn","Darter","Brawler"],p)
i=H.a(["MUSCLES HOARDER","BODY BOOSTER"],p)
h=H.a(["Yoga","Fitness","Sports","Boxing","Track and Field","Swimming","Baseball","Hockey","Football","Basketball","Weight Lifting"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kp(q,m,j,i,h,!1,g,f,e,d,4,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dumb","athletic","Athletic")
q.D()
q.E()
B.cL(q)
$.zl=q
q=P.l(H.a([new E.M($.hJ,-1,!0),new E.M($.hI,1,!0)],k),l)
m=H.a(["mischievous","knavish","mercurial","beagle","sarcastic","satirical","mime","pantomime","practicing","pranking","wokka","kooky","haha","humor","talkative","harlequins","hoho"],p)
j=H.a(["Laugher","Humorist","Trickster","Sellout","Dummy","Silly","Bum","Huckster","Raconteur","Mime","Leaper","Vaudevillian","Baboon","Boor"],p)
i=H.a(["PRATFALL PRIEST","BEAGLE PUSS DARTABOUT"],p)
h=H.a(["Puppets","Pranks","Comedy","Jokes","Puns","Stand-up Comedy","Humor","Comics","Satire","Knock Knock Jokes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new A.kL(q,m,j,i,h,!1,g,f,e,d,0,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"dorky","funny","Comedy")
q.D()
q.E()
B.cL(q)
$.zm=q
q=P.l(H.a([new E.M($.d6,-1,!0),new E.M($.et,-1,!0)],k),l)
m=H.a(["monochrome","poetic","majestic","keen","realistic","serious","theatrical","haute","beautiful","priceless","watercolor","sensational","highbrow","refined","precise","melodramatic"],p)
j=H.a(["Dramatist","Repository","Museum","Librarian","Hegemony","Hierarchy","Davinci","Renaissance","Viniculture","Treaty","Balmoral","Beauty","Business"],p)
i=H.a(["APPRENTICE ARTIST","CULTURE BUCKAROO"],p)
h=H.a(["Drawing","Painting","Documentaries","Fan Art","Graffiti","Theater","Fine Art","Literature","Books","Movie Making"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new M.kY(q,m,j,i,h,!1,g,f,e,d,2,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"pretentious","cultured","Culture")
q.D()
q.E()
B.cL(q)
$.zn=q
q=P.l(H.a([new E.M($.d6,1,!0),new E.M($.eu,1,!0)],k),l)
m=H.a(["home","motherly","patient","missing","knitting","rising","stylish","trendy","homey","baking","recipe","meddling","mature"],p)
j=H.a(["Baker","Darner","Mender","Mentor","Launderer","Vegetarian","Tailor","Teacher","Hestia","Helper","Decorator","Sewer"],p)
i=H.a(["BATTERBRAT","GRITTY GUARDIAN"],p)
h=H.a(["Sewing","Fashion","Meditation","Babies","Peace","Knitting","Cooking","Baking","Gardening","Crochet","Scrapbooking"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.l5(q,m,j,i,h,!1,g,f,e,d,8,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"boring","domestic","Domestic")
q.D()
q.E()
B.cL(q)
$.zo=q
q=P.l(H.a([new E.M($.hI,1,!0),new E.M($.du,1,!0)],k),l)
m=H.a(["musing","pacific","minotaurs","kappas","restful","serene","titans","hazy","best","peaceful","witchs","sylphic","sylvan","shivan","hellkite","malachite"],p)
j=H.a(["Believer","Dragon","Magician","Sandman","Shinigami","Tengu","Harpy","Dwarf","Vampire","Lamia","Roc","Mermaid","Siren","Manticore","Banshee","Basilisk","Boggart"],p)
i=H.a(["FAKEY FAKE LOVER","FANTASTIC DREAMER"],p)
h=H.a(["Wizards","Horrorterrors","Mermaids","Unicorns","Science Fiction","Fantasy","Ninjas","Aliens","Conspiracies","Faeries","Elves","Vampires","Undead"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new U.lz(q,m,j,i,h,!1,g,f,e,d,7,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"whimpy","imaginative","Fantasy")
q.D()
q.E()
B.cL(q)
$.zp=q
q=P.l(H.a([new E.M($.hL,1,!0),new E.M($.et,1,!0)],k),l)
m=H.a(["karmic","mysterious","police","mind","keen","retribution","saving","tracking","hardboiled","broken","perceptive","watching","searching"],p)
j=H.a(["Detective","Defender","Laywer","Loyalist","Liaison","Vigilante","Tracker","Moralist","Retribution","Watchman","Searcher","Perception","Rebel"],p)
i=H.a(["JUSTICE JUICER","BALANCE RUMBLER"],p)
h=H.a(["Social Justice","Detectives","Mysteries","Leadership","Revolution","Justice","Equality","Sherlock Holmes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.mz(q,m,j,i,h,!1,g,f,e,d,6,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"harsh","fair-minded","Justice")
q.D()
q.E()
B.cL(q)
$.zq=q
q=P.l(H.a([new E.M($.hK,2,!0)],k),l)
m=H.a(["bat","worthy","mega","player","mighty","knightly","roguish","super","turbo","titanic","heroic","bitchin","power","wonder","wonderful","sensational","thors","bat"],p)
j=H.a(["Man","Superhero","Supervillain","Hero","Villain","Liaison","Director","Repeat","Blockbuster","Movie","Mission","Legend","Buddy","Spy","Bystander","Talent"],p)
i=H.a(["TRIVIA SMARTYPANTS","NIGHTLY NABBER"],p)
h=H.a(["Irony","Action Movies","Superheroes","Supervillains","Video Games","Movies","Television","Comic Books","TV","Heroes"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new G.nD(q,m,j,i,h,!1,g,f,e,d,9,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"frivolous","geeky","PopCulture")
q.D()
q.E()
B.cL(q)
$.zt=q
q=P.l(H.a([new E.M($.eu,2,!0)],k),l)
m=H.a(["wishful","matchmaking","passionate","kinky","romantic","serendipitous","true","hearts","blushing","precious","warm","serenading","mesmerizing","mirrored","pairing","perverse"],p)
j=H.a(["Romantic","Dreamer","Beau","Hearthrob","Virtue","Beauty","Rainbow","Heart","Magnet","Miracle","Serendipity","Team"],p)
i=H.a(["QUESTING CUPID","ROMANCE EXPERT"],p)
h=H.a(["Girls","Boys","Romance","Shipping","Relationships","Love","Romantic Comedies","Fate","Dating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new Q.nR(q,m,j,i,h,!1,g,f,e,d,12,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"obsessive","romantic","Romantic")
q.D()
q.E()
B.cL(q)
$.zu=q
q=P.l(H.a([new E.M($.d6,2,!0)],k),l)
m=H.a(["master","playful","matchmaking","kind","regular","social","trusting","honest","benign","precious","wondering","sarcastic","talkative","petulant"],p)
j=H.a(["Socialist","Defender","Mentor","Leader","Veterinarian","Therapist","Buddy","Healer","Helper","Mender","Lender","Dog","Bishop","Rally"],p)
i=H.a(["FRIEND-TO-ALL","FRIEND COLLECTOR"],p)
h=H.a(["Psychology","Religion","Animal Training","Pets","Animals","Online Roleplaying","Live Action Roleplaying","Tabletop Roleplaying","Role Playing","Social Media","Charity","Mediating"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new N.o7(q,m,j,i,h,!1,g,f,e,d,11,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"shallow","extroverted","Social")
q.D()
q.E()
B.cL(q)
$.zv=q
q=P.l(H.a([new E.M($.eu,-1,!0),new E.M($.d6,-1,!0)],k),l)
m=H.a(["tyranical","heretical","murderous","persnickety","mundane","killer","rough","sneering","hateful","bastard","pungent","wasted","snooty","wicked","perverted","master","hellbound"],p)
j=H.a(["Butcher","Blasphemer","Barbarian","Tyrant","Superior","Bastard","Dastard","Despot","Bitch","Horror","Victim","Hellhound","Devil","Demon","Shark","Lupin","Mindflayer","Mummy","Hoarder","Demigod"],p)
i=H.a(["ENEMY #1","JERKWAD JOURNEYER"],p)
h=H.a(["Arson","Clowns","Treasure","Money","Violence","Death","Animal Fights","Insults","Hoarding","Status","Classism","Online Trolling","Intimidation","Fighting","Genocide","Murder","War"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new V.oL(q,m,j,i,h,!1,g,f,e,d,5,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"terrible","honest","Terrible")
q.D()
q.E()
B.cL(q)
$.zx=q
q=P.l(H.a([new E.M($.fn,2,!0)],k),l)
m=H.a(["wordy","scribbling","meandering","pageturning","mysterious","knowledgeable","reporting","scribing","tricky","hardcover","bookish","page","writing","scribbler","wordsmiths"],p)
j=H.a(["Shakespeare","Host","Bard","Drifter","Reader","Booker","Missive","Labret","Lacuna","Varvel","Hagiomaniac","Traveler","Thesis"],p)
i=H.a(["SHAKY SHAKESPEARE","QUILL RUINER"],p)
h=H.a(["Writing","Fan Fiction","Script Writing","Character Creation","Dungeon Mastering","Authoring"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new F.pt(q,m,j,i,h,!1,g,f,e,d,3,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"wordy","lettered","Writing")
q.D()
q.E()
B.cL(q)
$.zy=q
q=P.l(H.a([new E.M($.du,2,!0)],k),l)
m=H.a(["kludge","pixel","machinist","programming","mechanical","kilo","robotic","silicon","techno","hardware","battery","python","windows","serial","statistical"],p)
j=H.a(["Roboticist","Hacker","Haxor","Technologist","Robot","Machine","Machinist","Droid","Binary","Breaker","Vaporware","Lag","Laptop","Spaceman","Runner","L33T","Data"],p)
i=H.a(["HURRYWORTH HACKER","CLANKER CURMUDGEON"],p)
h=H.a(["Programming","Hacking","Coding","Robots","Artificial Intelligence","Engineering","Manufacturing","Cyborgs","Androids","A.I.","Automation"],p)
g=H.a(["nobody"],p)
f=P.l(H.a([],k),l)
e=H.a(["Nobody"],p)
d=H.a(["Nobody"],p)
q=new D.oJ(q,m,j,i,h,!1,g,f,e,d,10,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"awkward","techy","Technology")
q.D()
q.E()
B.cL(q)
$.zw=q
q=H.a(["nobody"],p)
l=P.l(H.a([],k),l)
k=H.a(["Nobody"],p)
p=H.a(["Nobody"],p)
q=new B.hg(!0,q,l,k,p,-13,new H.w(0,null,null,null,null,null,0,o),["NONE"],Q.I(null,null,n),"","","Null")
q.D()
q.E()
B.cL(q)
$.zs=q
A.wk()
t=3
return P.cs(Y.n6(),$async$re)
case 3:case 1:return P.bs(r,s)}})
return P.bt($async$re,s)}},Z={l7:function l7(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
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
_.x1=x1},
z9:function(){var t,s
if(!$.vt)$.vt=!0
else return
t=[P.B]
s=new Y.oP(H.a([],t))
$.t9=s
Z.cK(s,"txt",null)
Z.cK($.t9,"vert","x-shader/x-vertex")
Z.cK($.t9,"frag","x-shader/x-fragment")
$.z8=new Y.nM(H.a([],t))
$.vv=new Y.kF(H.a([],t))
s=new B.py(H.a([],t))
$.vx=s
Z.cK(s,"zip",null)
Z.cK($.vx,"bundle",null)
s=new U.pp(H.a([],t))
$.zh=s
Z.cK(s,"words",null)
s=new Q.nB(H.a([],t))
$.vw=s
Z.cK(s,"png",null)
Z.cK($.vw,"jpg","image/jpeg")
$.zf=new Q.ny(H.a([],t))
s=new M.od(H.a([],t))
$.zg=s
Z.cK(s,"psprite",null)
s=new V.lR(H.a([],t))
$.t8=s
Z.cK(s,"ttf",null)
Z.cK($.t8,"otf",null)
Z.cK($.t8,"woff",null)
s=new Y.ni(null,H.a([],t))
$.zc=s
Z.cK(s,"obj",null)
s=new U.mU(H.a([],t))
$.za=s
Z.cK(s,"mp3",null)
$.zb=new U.oz(H.a([],t))
s=new U.nm(H.a([],t))
$.zd=s
Z.cK(s,"ogg",null)
$.ze=new U.oA(H.a([],t))},
cK:function(a,b,c){$.$get$lT().i(0,b,new Z.il(a,c,[null,null]))
a.a.push(b)},
vu:function(a){var t
if($.$get$lT().U(0,a)){t=$.$get$lT().n(0,a)
if(t.a instanceof O.c6)return t
throw H.k("File format for extension ."+H.x(a)+" does not match expected types.")}throw H.k("No file format found for extension ."+H.x(a))},
il:function il(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
mT:function mT(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.K=K
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
_.r1=r1},
tJ:function tJ(){},
tF:function tF(){},
tG:function tG(){}},X={im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},i6:function i6(){},m1:function m1(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},m6:function m6(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
this.c=c}},N={aa:function aa(){},mz:function mz(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},nJ:function nJ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nQ:function nQ(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},o7:function o7(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},o9:function o9(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},oV:function oV(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
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
_.x1=x1},
EZ:function(a){var t,s,r,q,p,o,n,m,l
t=J.cH(a)
s=new W.jZ(document.querySelectorAll("link"),[null])
for(r=new H.dL(s,s.gm(s),0,null,[null]);r.F();){q=r.d
p=J.aq(q)
if(!!p.$ishn&&q.rel==="stylesheet"){o=$.$get$nw()
H.x(p.gad(q))
o.toString
o=t.length
n=Math.min(o,J.bZ(p.gad(q)))
for(m=0;m<n;++m){if(m>=o)return H.v(t,m)
if(t[m]!==J.fC(p.gad(q),m)){l=C.c.ag(t,m)
$.$get$nw().toString
return l.split("/").length-1}continue}}}$.$get$nw().b1(C.i,"Didn't find a css link to derive relative path")
return 0},
u7:function(){var t=P.wW()
if(!$.$get$nv().U(0,t))$.$get$nv().i(0,t,N.EZ(t))
return $.$get$nv().n(0,t)}},E={iz:function iz(){},nl:function nl(){},M:function M(a,b,c){this.a=a
this.b=b
this.c=c},fI:function fI(d,a,b,c){var _=this
_.d=d
_.a=a
_.b=b
_.c=c},ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},n4:function n4(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},nL:function nL(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},nU:function nU(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1},pk:function pk(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.r1=r1}},B={m_:function m_(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,C,K,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
_.K=K
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=r
_.x=x
_.y=y
_.z=z
_.Q=Q
_.ch=ch
_.cx=cx
_.cy=cy
_.db=db
_.dx=dx
_.dy=dy
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
cL:function(a){var t=a.f
if($.$get$md().U(0,t))throw H.k("Duplicate aspect id for "+a.A(0)+": "+t+" is already registered for "+J.cH($.$get$md().n(0,t))+".")
$.$get$md().i(0,t,a)},
hg:function hg(a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
_.a=a
_.b=b
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
py:function py(a){this.a=a},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b){this.a=a
this.b=b},
Gs:function(a){return a.aU(0)},
FV:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=P.B
s=P.bX(t,P.U)
r=B.cV
q=new B.eA(s,P.bX(t,t),J.xX(a),!1,null,null)
q.c9(null,null,r)
for(p=J.xW(a.gcK()),p=p.gS(p);p.F();){o=p.gL()
s.i(0,o,J.fC(a.gcK(),o))}for(s=a.gh2(),s=s.gaC(s),s=s.gS(s),p=q.d,n=a.d;s.F();){o=s.gL()
p.i(0,o,n.n(0,o))}for(s=a.b,p=s.length,r=[r],m=0;m<s.length;s.length===p||(0,H.bT)(s),++m){l=s[m]
n=J.aR(l)
k=n.gW(l)
j=J.y1(k)
k=k.gbP()
i=new B.cV(k)
if(k==null){k=P.bX(t,t)
i.a=k}k.i(0,"MAIN",j)
n=n.gb6(l)
C.b.h(q.b,new Q.h(i,n,r))}return q},
oM:function oM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
oO:function oO(a){this.a=a},
oN:function oN(a,b){this.a=a
this.b=b},
cV:function cV(a){this.a=a},
eA:function eA(c,d,e,f,b,a){var _=this
_.c=c
_.d=d
_.e=e
_.f=f
_.b=b
_.a=a},
hT:function hT(a,b){this.a=a
this.b=b}},Q={m9:function m9(){},nB:function nB(a){this.a=a},ny:function ny(a){this.a=a},mC:function mC(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,ab,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
_.M=M
_.O=O
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
_.x1=x1},nR:function nR(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pj:function pj(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},jA:function jA(){},
I:function(a,b,c){var t=new Q.dS(null,null,[c])
t.c9(a,b,c)
return t},
uE:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
t=Q.I(d,null,e)
s=a.gm(a)
C.b.sm(t.b,s)
if(H.dU(a,"$isn",[e],"$asn"))if(H.dU(a,"$iscw",[e],"$ascw"))for(s=J.cP(a.gbh()),r=0;s.F();){q=s.gL()
p=t.b
o=p.length
if(r>=o)return H.v(p,r)
p[r]=q;++r}else for(s=a.gS(a),p=[H.P(t,0)],r=0;s.F();){n=s.gL()
o=t.b
m=t.k(n,1)
if(r>=o.length)return H.v(o,r)
o[r]=new Q.h(n,m,p);++r}else for(s=a.gS(a),p=[e],o=[H.P(t,0)];s.F();){l=s.gL()
if(H.GJ(l,e)){m=t.b
k=t.k(l,1)
if(0>=m.length)return H.v(m,0)
m[0]=new Q.h(l,k,o)}else if(H.dU(l,"$ish",p,null)){m=t.b
k=m.length
if(0>=k)return H.v(m,0)
m[0]=l}else throw H.k("Invalid entry type "+H.x(J.uZ(l))+" for WeightedList<"+H.x(H.bY(H.dy(e)))+">. Should be "+H.x(H.bY(H.dy(e)))+" or WeightPair<"+H.x(H.bY(H.dy(e)))+">.")}return t},
uF:function(a,b,c,d){return new Q.jP(J.v0(a.gbh(),new Q.pn(c,d,b)),null,[c,d])},
cw:function cw(){},
dS:function dS(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
hR:function hR(){},
h:function h(a,b,$ti){this.a=a
this.b=b
this.$ti=$ti},
eC:function eC(){},
hQ:function hQ(){},
pm:function pm(a,$ti){this.a=a
this.$ti=$ti},
jP:function jP(b,a,$ti){this.b=b
this.a=a
this.$ti=$ti},
pn:function pn(a,b,c){this.a=a
this.b=b
this.c=c},
nZ:function(){var t=0,s=P.bp(),r
var $async$nZ=P.bu(function(a,b){if(a===1)return P.br(b,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hp("scripts/Rendering/threed/extensions/LoaderSupport.js",!1),$async$nZ)
case 3:r=A.hp("scripts/Rendering/threed/extensions/OBJLoader2.js",!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$nZ,s)}},G={mF:function mF(x2,y1,y2,p,q,t,u,v,w,B,C,K,M,O,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1){var _=this
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
_.K=K
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
_.x1=x1},nD:function nD(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
yD:function(a){var t,s,r,q,p,o,n,m,l
t=G.a0
s=P.tQ(a,t)
r=P.a3(null,null,null,t)
q=H.a([],[G.d])
for(t=G.ED(),p=J.cP(t.a),t=new H.jQ(p,t.b,[H.P(t,0)]);t.F();){o=p.gL()
if(o.ep(s))q.push(o)}C.b.eH(q)
for(t=q.length,n=0;n<q.length;q.length===t||(0,H.bT)(q),++n){o=q[n]
if(o.ep(s)){r.h(0,o)
for(p=o.e,m=p.length,l=0;l<p.length;p.length===m||(0,H.bT)(p),++l)s.ae(0,p[l])}}if(s.a!==0)r.bn(0,s)
return r},
ED:function(){var t=$.$get$b()
t.toString
return new H.hS(t,new G.mp(),[H.P(t,0)])},
a0:function a0(){},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c){this.a=a
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
mp:function mp(){}},F={n5:function n5(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
_.ch=ch},pt:function pt(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
EI:function(a){if(a===C.h){window
return C.j.gar(C.j)}if(a===C.i){window
return C.j.ghY()}if(a===C.Z){window
return C.j.ghn()}return P.GN()},
hq:function hq(a,b){this.a=a
this.b=b},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
tO:function tO(){},
yU:function(a,b,c,d){var t,s,r,q
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;++q)t.bR(s[q])
return t.b4(b)},
yT:function(a,b,c,d){var t,s,r,q,p
t=H.cx(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=0;q<c;++q){p=r.c0()
if(q>=t)return H.v(s,q)
s[q]=p}return s},
yS:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
s=d.gcN()
r=C.f.ak(Math.log(H.kb(s.gm(s)))/0.6931471805599453)+1
c.toString
q=H.cM(c,0,null)
for(s=q.length,p=0;p<s;p=n){if(p<0)return H.v(q,p)
a=q[p]
o=1
while(!0){n=p+o
if(n<s){m=o+p
if(m>=s)return H.v(q,m)
m=q[m]===a}else m=!1
if(!m)break;++o}t.bR(o-1)
t.ah(a,r)}return t.b4(b)},
yR:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=H.cx(c)
s=new Uint8Array(t)
r=d.y
q=C.f.ak(Math.log(r.gm(r))/0.6931471805599453)+1
p=new B.dc(null,0)
p.a=J.dV(a,b)
for(o=0;o<c;){n=p.c0()+1
m=p.a5(q)
for(l=0;l<n;++l){r=o+l
if(r<0||r>=t)return H.v(s,r)
s[r]=m}o+=n}return s},
yQ:function(a,b,c,d){var t,s,r,q,p,o,n
t=new B.dn(new P.c9(""),0,0)
t.ah(a,8)
c.toString
s=H.cM(c,0,null)
for(r=s.length,q=0;q<r;q=o){if(q<0)return H.v(s,q)
a=s[q]
p=1
while(!0){o=q+p
if(o<r){n=p+q
if(n>=r)return H.v(s,n)
n=s[n]===a}else n=!1
if(!n)break;++p}t.bR(p-1)
t.bR(a)}return t.b4(b)},
yP:function(a,b,c,d){var t,s,r,q,p,o,n,m
t=H.cx(c)
s=new Uint8Array(t)
r=new B.dc(null,0)
r.a=J.dV(a,b)
for(q=0;q<c;){p=r.c0()+1
o=r.c0()
for(n=0;n<p;++n){m=q+n
if(m<0||m>=t)return H.v(s,m)
s[m]=o}q+=p}return s}},R={
Fi:function(a){var t,s
if(a.gm(a).aF(0,1)){a.n(0,1)
a.n(0,1)
t=!0}else t=!1
s=a.n(0,0)
s.gi4(s).gih().e7("checking for two players, ps is "+H.x(a)+", ret is "+t)
return t},
F6:function(a){a.gac(a).gbS()
return!1},
Fh:function(a){a.gac(a).gbS()
return!1},
Fg:function(a){a.gac(a).gbS()
return!1},
Ff:function(a){return a.gac(a).gbo().gig()},
Fd:function(a){return a.gac(a).gbo().gic()},
Fc:function(a){return a.gac(a).gbo().gib()},
F9:function(a){return a.gac(a).gbo().gi9()},
Fb:function(a){return a.gac(a).gbo().gia()},
Fe:function(a){return a.gac(a).gbo().gie()},
Fa:function(a){var t=a.gac(a)
t.gbS()
t.gbS()
return!1},
F7:function(a){return!0},
F8:function(a){a.gac(a).gi6()
return!1},
nK:function nK(){},
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
oG:function oG(r2,rx,ry,x1,x2,y1,y2,p,q,t,u,v,w,B,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1){var _=this
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
hb:function hb(){},
u6:function u6(){},
u5:function u5(){}},D={oJ:function oJ(cx,cy,db,dx,dy,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
FP:function(){if($.wD)return
$.wD=!0
var t=new D.cE("Experience","learned","na\xefve",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=0
$.ur=t
t=new D.cE("Grist Level","rich","poor",!1,!1,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.FO=t
t=new D.jS(0.03,"Power","strong","weak",!0,!0,!1,10,0.5,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=2.5
t.Q=1
$.hL=t
t=new D.jS(0.04,"Health","sturdy","fragile",!0,!0,!1,10,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
t.y=2.5
$.et=t
t=new D.cE("Current Health","healthy","infirm",!1,!0,!0,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.FN=t
t=new D.cE("Mobility","fast","slow",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hK=t
t=new D.nO("Relationships","friendly","aggressive",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.eu=t
t=new D.cE("Sanity","calm","crazy",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.d6=t
t=new D.cE("Free Will","willful","gullible",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.fn=t
t=new D.cE("Maximum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hI=t
t=new D.cE("Minimum Luck","lucky","unlucky",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.hJ=t
t=new D.cE("Alchemy","creative","boring",!0,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.du=t
t=new D.cE("SBURB Lore","woke","clueless",!1,!0,!1,1,1,-1/0,1/0,-1/0,1/0)
$.$get$cN().push(t)
$.cq=t},
us:function(){var t=$.$get$cN()
return new H.hS(t,new D.of(),[H.P(t,0)])},
of:function of(){},
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
jS:function jS(cx,a,b,c,d,e,f,r,x,y,z,Q,ch){var _=this
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
var v=[C,H,J,P,W,T,S,K,L,M,U,O,Y,V,A,Z,X,N,E,B,Q,G,F,R,D]
setFunctionNamesIfNecessary(v)
var $={}
H.tL.prototype={}
J.f.prototype={
R:function(a,b){return a===b},
ga3:function(a){return H.en(a)},
A:function(a){return H.nH(a)},
ga8:function(a){return new H.dR(H.ke(a),null)},
$ishb:1,
$isab:1,
$isfh:1,
$isab:1,
$ismv:1,
$isf:1,
$ismv:1,
$isf:1,
$ishs:1,
$isab:1}
J.mt.prototype={
A:function(a){return String(a)},
ga3:function(a){return a?519018:218159},
ga8:function(a){return C.ae},
$isd9:1}
J.mu.prototype={
R:function(a,b){return null==b},
A:function(a){return"null"},
ga3:function(a){return 0},
ga8:function(a){return C.a8},
$isd3:1}
J.hl.prototype={
ga3:function(a){return 0},
ga8:function(a){return C.a7},
A:function(a){return String(a)},
$ismv:1,
h:function(a,b){return a.add(b)},
ae:function(a,b){return a.remove(b)},
gm:function(a){return a.length},
gbZ:function(a){return a.left},
gc3:function(a){return a.top},
gb7:function(a){return a.width},
gb_:function(a){return a.height},
hC:function(a,b){return a.parse(b)},
eF:function(a,b){return a.setLogging(b)},
eG:function(a,b){return a.setMaterials(b)}}
J.nA.prototype={}
J.ey.prototype={}
J.ek.prototype={
A:function(a){var t=a[$.$get$vd()]
return t==null?this.eL(a):J.cH(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ei.prototype={
bV:function(a,b){if(!!a.immutable$list)throw H.k(new P.T(b))},
cD:function(a,b){if(!!a.fixed$length)throw H.k(new P.T(b))},
h:function(a,b){this.cD(a,"add")
a.push(b)},
a7:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.k(new P.bM(a))}},
ax:function(a,b){return new H.fd(a,b,[H.P(a,0),null])},
bf:function(a,b){var t,s,r,q
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<a.length;++r){q=H.x(a[r])
if(r>=t)return H.v(s,r)
s[r]=q}return s.join(b)},
d2:function(a,b){return H.wF(a,b,null,H.P(a,0))},
hc:function(a,b,c){var t,s,r
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.k(new P.bM(a))}return s},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
c8:function(a,b,c){if(b<0||b>a.length)throw H.k(P.bE(b,0,a.length,"start",null))
if(c==null)c=a.length
else{if(typeof c!=="number"||Math.floor(c)!==c)throw H.k(H.bv(c))
if(c<b||c>a.length)throw H.k(P.bE(c,b,a.length,"end",null))}if(b===c)return H.a([],[H.P(a,0)])
return H.a(a.slice(b,c),[H.P(a,0)])},
gac:function(a){if(a.length>0)return a[0]
throw H.k(H.jl())},
gbb:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.k(H.jl())},
a6:function(a,b,c,d,e){var t,s,r
this.bV(a,"setRange")
P.dg(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.aZ(P.bE(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.k(H.we())
if(e<b)for(s=t-1;s>=0;--s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}else for(s=0;s<t;++s){r=e+s
if(r>>>0!==r||r>=d.length)return H.v(d,r)
a[b+s]=d[r]}},
az:function(a,b,c,d){return this.a6(a,b,c,d,0)},
bX:function(a,b,c,d){var t
this.bV(a,"fill range")
P.dg(b,c,a.length,null,null,null)
for(t=b;t<c;++t)a[t]=d},
aE:function(a,b,c,d){var t,s,r,q,p,o
this.cD(a,"replaceRange")
P.dg(b,c,a.length,null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.am()
t=c-b
s=d.length
r=b+s
q=a.length
if(t>=s){p=t-s
o=q-p
this.az(a,b,r,d)
if(p!==0){this.a6(a,r,o,a,c)
this.sm(a,o)}}else{o=q+(s-t)
this.sm(a,o)
this.a6(a,r,o,a,c)
this.az(a,b,r,d)}},
ha:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s])!==!0)return!1
if(a.length!==t)throw H.k(new P.bM(a))}return!0},
d3:function(a,b){var t
this.bV(a,"sort")
t=b==null?P.GM():b
H.jG(a,0,a.length-1,t)},
eH:function(a){return this.d3(a,null)},
b0:function(a,b,c){var t
if(c>=a.length)return-1
if(c<0)c=0
for(t=c;t<a.length;++t)if(J.b_(a[t],b))return t
return-1},
be:function(a,b){return this.b0(a,b,0)},
aa:function(a,b){var t
for(t=0;t<a.length;++t)if(J.b_(a[t],b))return!0
return!1},
gX:function(a){return a.length===0},
A:function(a){return P.jk(a,"[","]")},
a0:function(a,b){var t=H.a(a.slice(0),[H.P(a,0)])
return t},
ap:function(a){return this.a0(a,!0)},
gS:function(a){return new J.i5(a,a.length,0,null,[H.P(a,0)])},
ga3:function(a){return H.en(a)},
gm:function(a){return a.length},
sm:function(a,b){this.cD(a,"set length")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dB(b,"newLength",null))
if(b<0)throw H.k(P.bE(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b>=a.length||b<0)throw H.k(H.c3(a,b))
return a[b]},
i:function(a,b,c){this.bV(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b>=a.length||b<0)throw H.k(H.c3(a,b))
a[b]=c},
$isay:1,
$asay:function(){},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
J.tK.prototype={}
J.i5.prototype={
gL:function(){return this.d},
F:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.k(H.bT(t))
r=this.c
if(r>=s){this.d=null
return!1}this.d=t[r]
this.c=r+1
return!0}}
J.fb.prototype={
aA:function(a,b){var t
if(typeof b!=="number")throw H.k(H.bv(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gcL(b)
if(this.gcL(a)===t)return 0
if(this.gcL(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcL:function(a){return a===0?1/a<0:a<0},
ak:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.k(new P.T(""+a+".floor()"))},
bz:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.k(new P.T(""+a+".round()"))},
a9:function(a,b,c){if(C.a.aA(b,c)>0)throw H.k(H.bv(b))
if(this.aA(a,b)<0)return b
if(this.aA(a,c)>0)return c
return a},
l:function(a){return a},
bB:function(a,b){var t,s,r,q
if(b<2||b>36)throw H.k(P.bE(b,2,36,"radix",null))
t=a.toString(b)
if(C.c.Y(t,t.length-1)!==41)return t
s=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(t)
if(s==null)H.aZ(new P.T("Unexpected toString result: "+t))
r=J.b0(s)
t=r.n(s,1)
q=+r.n(s,3)
if(r.n(s,2)!=null){t+=r.n(s,2)
q-=r.n(s,2).length}return t+C.c.at("0",q)},
A:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga3:function(a){return a&0x1FFFFFFF},
d_:function(a){return-a},
V:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a+b},
at:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a*b},
bF:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
d7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dO(a,b)},
ao:function(a,b){return(a|0)===a?a/b|0:this.dO(a,b)},
dO:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.k(new P.T("Result of truncating division is "+H.x(t)+": "+H.x(a)+" ~/ "+H.x(b)))},
av:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
if(b<0)throw H.k(H.bv(b))
return b>31?0:a<<b>>>0},
aq:function(a,b){return b>31?0:a<<b>>>0},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
fI:function(a,b){if(b<0)throw H.k(H.bv(b))
return b>31?0:a>>>b},
dN:function(a,b){return b>31?0:a>>>b},
a1:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>b},
au:function(a,b){if(typeof b!=="number")throw H.k(H.bv(b))
return a>=b},
ga8:function(a){return C.ah},
$isdl:1}
J.jo.prototype={
ga8:function(a){return C.ag},
$isU:1,
$isdl:1,
$isC:1}
J.jn.prototype={
ga8:function(a){return C.af},
$isU:1,
$isdl:1}
J.ej.prototype={
Y:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b<0)throw H.k(H.c3(a,b))
if(b>=a.length)H.aZ(H.c3(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(b>=a.length)throw H.k(H.c3(a,b))
return a.charCodeAt(b)},
cA:function(a,b,c){if(c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
return new H.qE(b,a,c)},
aP:function(a,b){return this.cA(a,b,0)},
ec:function(a,b,c){var t,s
if(c<0||c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
t=a.length
if(c+t>b.length)return
for(s=0;s<t;++s)if(this.Y(b,c+s)!==this.a2(a,s))return
return new H.jL(c,b,a)},
V:function(a,b){if(typeof b!=="string")throw H.k(P.dB(b,null,null))
return a+b},
h9:function(a,b){var t,s
t=b.length
s=a.length
if(t>s)return!1
return b===this.ag(a,s-t)},
cU:function(a,b,c){return H.uS(a,b,c)},
hR:function(a,b,c){return H.He(a,b,c,null)},
eI:function(a,b){if(b==null)H.aZ(H.bv(b))
if(typeof b==="string")return a.split(b)
else if(b instanceof H.hk&&b.gdA().exec("").length-2===0)return a.split(b.gfv())
else return this.fc(a,b)},
aE:function(a,b,c,d){var t,s
H.uM(b)
c=P.dg(b,c,a.length,null,null,null)
H.uM(c)
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fc:function(a,b){var t,s,r,q,p,o,n
t=H.a([],[P.B])
for(s=J.xO(b,a),s=s.gS(s),r=0,q=1;s.F();){p=s.gL()
o=p.gd4(p)
n=p.gdY(p)
q=n-o
if(q===0&&r===o)continue
t.push(this.I(a,r,o))
r=n}if(r<a.length||q>0)t.push(this.ag(a,r))
return t},
aG:function(a,b,c){var t
H.uM(c)
if(typeof c!=="number")return c.a1()
if(c<0||c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
if(typeof b==="string"){t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)}return J.y5(b,a,c)!=null},
af:function(a,b){return this.aG(a,b,0)},
I:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.aZ(H.bv(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.aZ(H.bv(c))
if(typeof b!=="number")return b.a1()
if(b<0)throw H.k(P.jD(b,null,null))
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.k(P.jD(b,null,null))
if(c>a.length)throw H.k(P.jD(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.I(a,b,null)},
hX:function(a){return a.toUpperCase()},
bi:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a2(t,0)===133){r=J.EE(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.Y(t,q)===133?J.tH(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eq:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.Y(t,r)===133)s=J.tH(t,r)}else{s=J.tH(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
at:function(a,b){var t,s
if(typeof b!=="number")return H.a7(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.k(C.I)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
b0:function(a,b,c){var t
if(c<0||c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
t=a.indexOf(b,c)
return t},
be:function(a,b){return this.b0(a,b,0)},
ht:function(a,b,c){var t
if(b==null)H.aZ(H.bv(b))
c=a.length
for(t=c;t>=0;--t){b.toString
if(t>c)H.aZ(P.bE(t,0,c,null,null))
if(b.cj(a,t)!=null)return t}return-1},
e9:function(a,b){return this.ht(a,b,null)},
dW:function(a,b,c){if(c>a.length)throw H.k(P.bE(c,0,a.length,null,null))
return H.Hd(a,b,c)},
aa:function(a,b){return this.dW(a,b,0)},
gX:function(a){return a.length===0},
aA:function(a,b){var t
if(typeof b!=="string")throw H.k(H.bv(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
A:function(a){return a},
ga3:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
ga8:function(a){return C.a9},
gm:function(a){return a.length},
n:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(H.c3(a,b))
if(b>=a.length||b<0)throw H.k(H.c3(a,b))
return a[b]},
$isay:1,
$asay:function(){},
$isB:1,
$isu8:1}
H.kK.prototype={
gm:function(a){return this.a.length},
n:function(a,b){return C.c.Y(this.a,b)},
$ashO:function(){return[P.C]},
$asjp:function(){return[P.C]},
$ashB:function(){return[P.C]},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.r.prototype={$asr:null}
H.el.prototype={
gS:function(a){return new H.dL(this,this.gm(this),0,null,[H.ar(this,"el",0)])},
a7:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){b.$1(this.T(0,s))
if(t!==this.gm(this))throw H.k(new P.bM(this))}},
gX:function(a){return this.gm(this)===0},
gac:function(a){if(this.gm(this)===0)throw H.k(H.jl())
return this.T(0,0)},
aa:function(a,b){var t,s
t=this.gm(this)
for(s=0;s<t;++s){if(J.b_(this.T(0,s),b))return!0
if(t!==this.gm(this))throw H.k(new P.bM(this))}return!1},
ax:function(a,b){return new H.fd(this,b,[H.ar(this,"el",0),null])},
a0:function(a,b){var t,s,r
t=H.a([],[H.ar(this,"el",0)])
C.b.sm(t,this.gm(this))
for(s=0;s<this.gm(this);++s){r=this.T(0,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
ap:function(a){return this.a0(a,!0)}}
H.oE.prototype={
gfd:function(){var t=J.bZ(this.a)
return t},
gfJ:function(){var t,s
t=J.bZ(this.a)
s=this.b
if(J.ct(s,t))return t
return s},
gm:function(a){var t,s
t=J.bZ(this.a)
s=this.b
if(J.uU(s,t))return 0
if(typeof s!=="number")return H.a7(s)
return t-s},
T:function(a,b){var t=J.e6(this.gfJ(),b)
if(J.e7(b,0)||J.uU(t,this.gfd()))throw H.k(P.by(b,this,"index",null,null))
return J.uW(this.a,t)},
a0:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.b0(s)
q=r.gm(s)
if(typeof t!=="number")return H.a7(t)
p=q-t
if(p<0)p=0
o=this.$ti
if(b){n=H.a([],o)
C.b.sm(n,p)}else n=H.a(new Array(p),o)
for(m=0;m<p;++m){o=r.T(s,t+m)
if(m>=n.length)return H.v(n,m)
n[m]=o
if(r.gm(s)<q)throw H.k(new P.bM(this))}return n},
ap:function(a){return this.a0(a,!0)},
eT:function(a,b,c,d){var t=this.b
if(J.e7(t,0))H.aZ(P.bE(t,0,null,"start",null))}}
H.dL.prototype={
gL:function(){return this.d},
F:function(){var t,s,r,q
t=this.a
s=J.b0(t)
r=s.gm(t)
if(this.b!==r)throw H.k(new P.bM(t))
q=this.c
if(q>=r){this.d=null
return!1}this.d=s.T(t,q);++this.c
return!0}}
H.hr.prototype={
gS:function(a){return new H.jq(null,J.cP(this.a),this.b,this.$ti)},
gm:function(a){return J.bZ(this.a)},
gX:function(a){return J.rB(this.a)},
$asn:function(a,b){return[b]}}
H.fW.prototype={$isr:1,
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.jq.prototype={
F:function(){var t=this.b
if(t.F()){this.a=this.c.$1(t.gL())
return!0}this.a=null
return!1},
gL:function(){return this.a},
$asjm:function(a,b){return[b]}}
H.fd.prototype={
gm:function(a){return J.bZ(this.a)},
T:function(a,b){return this.b.$1(J.uW(this.a,b))},
$asel:function(a,b){return[b]},
$asr:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
H.hS.prototype={
gS:function(a){return new H.jQ(J.cP(this.a),this.b,this.$ti)},
ax:function(a,b){return new H.hr(this,b,[H.P(this,0),null])}}
H.jQ.prototype={
F:function(){var t,s
for(t=this.a,s=this.b;t.F();)if(s.$1(t.gL())===!0)return!0
return!1},
gL:function(){return this.a.gL()}}
H.iw.prototype={
sm:function(a,b){throw H.k(new P.T("Cannot change the length of a fixed-length list"))},
h:function(a,b){throw H.k(new P.T("Cannot add to a fixed-length list"))},
aE:function(a,b,c,d){throw H.k(new P.T("Cannot remove from a fixed-length list"))}}
H.p5.prototype={
i:function(a,b,c){throw H.k(new P.T("Cannot modify an unmodifiable list"))},
sm:function(a,b){throw H.k(new P.T("Cannot change the length of an unmodifiable list"))},
h:function(a,b){throw H.k(new P.T("Cannot add to an unmodifiable list"))},
a6:function(a,b,c,d,e){throw H.k(new P.T("Cannot modify an unmodifiable list"))},
az:function(a,b,c,d){return this.a6(a,b,c,d,0)},
aE:function(a,b,c,d){throw H.k(new P.T("Cannot remove from an unmodifiable list"))},
bX:function(a,b,c,d){throw H.k(new P.T("Cannot modify an unmodifiable list"))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
H.hO.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
H.rv.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.rw.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.qm.prototype={}
H.fu.prototype={
dS:function(a,b){if(!this.f.R(0,a))return
if(this.Q.h(0,b)&&!this.y)this.y=!0
this.cv()},
hQ:function(a){var t,s,r,q,p,o
if(!this.y)return
t=this.Q
t.ae(0,a)
if(t.a===0){for(t=this.z;s=t.length,s!==0;){if(0>=s)return H.v(t,-1)
r=t.pop()
s=u.globalState.f.a
q=s.b
p=s.a
o=p.length
q=(q-1&o-1)>>>0
s.b=q
if(q<0||q>=o)return H.v(p,q)
p[q]=r
if(q===s.c)s.ds();++s.d}this.y=!1}this.cv()},
fN:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.aq(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+1
if(r>=t.length)return H.v(t,r)
t[r]=b
return}r.push(a)
this.ch.push(b)},
hO:function(a){var t,s,r
if(this.ch==null)return
for(t=J.aq(a),s=0;r=this.ch,s<r.length;s+=2)if(t.R(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.aZ(new P.T("removeRange"))
P.dg(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
eE:function(a,b){if(!this.r.R(0,a))return
this.db=b},
hi:function(a,b,c){var t=J.aq(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){J.fE(a,c)
return}t=this.cx
if(t==null){t=P.tR(null,null)
this.cx=t}t.aM(0,new H.qh(a,c))},
hh:function(a,b){var t
if(!this.r.R(0,a))return
t=J.aq(b)
if(!t.R(b,0))t=t.R(b,1)&&!this.cy
else t=!0
if(t){this.bY()
return}t=this.cx
if(t==null){t=P.tR(null,null)
this.cx=t}t.aM(0,this.ghs())},
hj:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db===!0&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.fB(a)
if(b!=null)P.fB(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.cH(a)
s[1]=b==null?null:J.cH(b)
for(r=new P.dv(t,t.r,null,null,[null]),r.c=t.e;r.F();)J.fE(r.d,s)},
bs:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.cj(o)
p=H.ci(o)
this.hj(q,p)
if(this.db===!0){this.bY()
if(this===u.globalState.e)throw o}}finally{this.cy=r
u.globalState.d=t
if(t!=null)$=t.ghr()
if(this.cx!=null)for(;n=this.cx,!n.gX(n);)this.cx.ek().$0()}return s},
cM:function(a){return this.b.n(0,a)},
da:function(a,b){var t=this.b
if(t.U(0,a))throw H.k(P.lh("Registry: ports must be registered only once."))
t.i(0,a,b)},
cv:function(){var t=this.b
if(t.gm(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.bY()},
bY:function(){var t,s,r,q,p
t=this.cx
if(t!=null)t.b9(0)
for(t=this.b,s=t.gc4(t),s=s.gS(s);s.F();)s.gL().f5()
t.b9(0)
this.c.b9(0)
u.globalState.z.ae(0,this.a)
this.dx.b9(0)
if(this.ch!=null){for(r=0;t=this.ch,s=t.length,r<s;r+=2){q=t[r]
p=r+1
if(p>=s)return H.v(t,p)
J.fE(q,t[p])}this.ch=null}},
ghr:function(){return this.d},
gfY:function(){return this.e}}
H.qh.prototype={
$0:function(){J.fE(this.a,this.b)},
$S:function(){return{func:1,v:true}}}
H.pT.prototype={
h3:function(){var t=this.a
if(t.b===t.c)return
return t.ek()},
eo:function(){var t,s,r
t=this.h3()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.U(0,u.globalState.e.a))if(u.globalState.r===!0){s=u.globalState.e.b
s=s.gX(s)}else s=!1
else s=!1
else s=!1
if(s)H.aZ(P.lh("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x===!0){r=s.z
r=r.gX(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ho(["command","close"])
r=new H.dw(!0,new P.k2(0,null,null,null,null,null,0,[null,P.C])).ay(r)
s.toString
self.postMessage(r)}return!1}t.hJ()
return!0},
dI:function(){if(self.window!=null)new H.pU(this).$0()
else for(;this.eo(););},
bA:function(){var t,s,r,q,p
if(u.globalState.x!==!0)this.dI()
else try{this.dI()}catch(r){t=H.cj(r)
s=H.ci(r)
q=u.globalState.Q
p=P.ho(["command","error","msg",H.x(t)+"\n"+H.x(s)])
p=new H.dw(!0,P.hY(null,P.C)).ay(p)
q.toString
self.postMessage(p)}}}
H.pU.prototype={
$0:function(){if(!this.a.eo())return
P.wJ(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.eF.prototype={
hJ:function(){var t=this.a
if(t.y){t.z.push(this)
return}t.bs(this.b)}}
H.ql.prototype={}
H.me.prototype={
$0:function(){H.zC(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.mf.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{s=this.a
if(H.fA(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.fA(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.cv()},
$S:function(){return{func:1,v:true}}}
H.pG.prototype={}
H.fv.prototype={
b8:function(a,b){var t,s,r
t=u.globalState.z.n(0,this.a)
if(t==null)return
s=this.b
if(s.gdz())return
r=H.Gp(b)
if(t.gfY()===s){s=J.b0(r)
switch(s.n(r,0)){case"pause":t.dS(s.n(r,1),s.n(r,2))
break
case"resume":t.hQ(s.n(r,1))
break
case"add-ondone":t.fN(s.n(r,1),s.n(r,2))
break
case"remove-ondone":t.hO(s.n(r,1))
break
case"set-errors-fatal":t.eE(s.n(r,1),s.n(r,2))
break
case"ping":t.hi(s.n(r,1),s.n(r,2),s.n(r,3))
break
case"kill":t.hh(s.n(r,1),s.n(r,2))
break
case"getErrors":s=s.n(r,1)
t.dx.h(0,s)
break
case"stopErrors":s=s.n(r,1)
t.dx.ae(0,s)
break}return}u.globalState.f.a.aM(0,new H.eF(t,new H.qo(this,r),"receive"))},
R:function(a,b){if(b==null)return!1
return b instanceof H.fv&&J.b_(this.b,b.b)},
ga3:function(a){return this.b.gcl()}}
H.qo.prototype={
$0:function(){var t=this.a.b
if(!t.gdz())t.f1(0,this.b)},
$S:function(){return{func:1}}}
H.i0.prototype={
b8:function(a,b){var t,s,r
t=P.ho(["command","message","port",this,"msg",b])
s=new H.dw(!0,P.hY(null,P.C)).ay(t)
if(u.globalState.x===!0){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.n(0,this.b)
if(r!=null)r.postMessage(s)}},
R:function(a,b){if(b==null)return!1
return b instanceof H.i0&&J.b_(this.b,b.b)&&J.b_(this.a,b.a)&&J.b_(this.c,b.c)},
ga3:function(a){var t,s,r
t=this.b
if(typeof t!=="number")return t.av()
s=this.a
if(typeof s!=="number")return s.av()
r=this.c
if(typeof r!=="number")return H.a7(r)
return(t<<16^s<<8^r)>>>0}}
H.fk.prototype={
f5:function(){this.c=!0
this.b=null},
f1:function(a,b){if(this.c)return
this.b.$1(b)},
$isFj:1,
gcl:function(){return this.a},
gdz:function(){return this.c}}
H.oX.prototype={
eU:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x===!0
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.aM(0,new H.eF(s,new H.oY(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.dj(new H.oZ(this,b),0),a)}else throw H.k(new P.T("Timer greater than 0."))}}
H.oY.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.oZ.prototype={
$0:function(){this.a.c=null;--u.globalState.f.b
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.dC.prototype={
ga3:function(a){var t=this.a
if(typeof t!=="number")return t.d1()
t=C.d.aX(t,0)^C.d.ao(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.dC){t=this.a
s=b.a
return t==null?s==null:t===s}return!1},
gcl:function(){return this.a}}
H.dw.prototype={
ay:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.n(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gm(t))
t=J.aq(a)
if(!!t.$isfe)return["buffer",a]
if(!!t.$isem)return["typed",a]
if(!!t.$isay)return this.eA(a)
if(!!t.$iszz){r=this.gex()
q=t.gaC(a)
q=H.df(q,r,H.ar(q,"n",0),null)
q=P.d1(q,!0,H.ar(q,"n",0))
t=t.gc4(a)
t=H.df(t,r,H.ar(t,"n",0),null)
return["map",q,P.d1(t,!0,H.ar(t,"n",0))]}if(!!t.$ismv)return this.eB(a)
if(!!t.$isf)this.er(a)
if(!!t.$isFj)this.bD(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isfv)return this.eC(a)
if(!!t.$isi0)return this.eD(a)
if(!!t.$iseQ){p=a.$static_name
if(p==null)this.bD(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isdC)return["capability",a.a]
if(!(a instanceof P.ab))this.er(a)
return["dart",u.classIdExtractor(a),this.ez(u.classFieldsExtractor(a))]},
bD:function(a,b){throw H.k(new P.T((b==null?"Can't transmit:":b)+" "+H.x(a)))},
er:function(a){return this.bD(a,null)},
eA:function(a){var t=this.ey(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.bD(a,"Can't serialize indexable: ")},
ey:function(a){var t,s,r
t=[]
C.b.sm(t,a.length)
for(s=0;s<a.length;++s){r=this.ay(a[s])
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
ez:function(a){var t
for(t=0;t<a.length;++t)C.b.i(a,t,this.ay(a[t]))
return a},
eB:function(a){var t,s,r,q
if(!!a.constructor&&a.constructor!==Object)this.bD(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.b.sm(s,t.length)
for(r=0;r<t.length;++r){q=this.ay(a[t[r]])
if(r>=s.length)return H.v(s,r)
s[r]=q}return["js-object",t,s]},
eD:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eC:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.gcl()]
return["raw sendport",a]}}
H.eD.prototype={
aY:function(a){var t,s,r,q,p,o
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.k(P.dA("Bad serialized message: "+H.x(a)))
switch(C.b.gac(a)){case"ref":if(1>=a.length)return H.v(a,1)
t=a[1]
s=this.b
if(t>>>0!==t||t>=s.length)return H.v(s,t)
return s[t]
case"buffer":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"typed":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"fixed":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bq(r),[null])
s.fixed$length=Array
return s
case"extendable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return H.a(this.bq(r),[null])
case"mutable":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return this.bq(r)
case"const":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
s=H.a(this.bq(r),[null])
s.fixed$length=Array
return s
case"map":return this.h7(a)
case"sendport":return this.h8(a)
case"raw sendport":if(1>=a.length)return H.v(a,1)
r=a[1]
this.b.push(r)
return r
case"js-object":return this.h6(a)
case"function":if(1>=a.length)return H.v(a,1)
r=u.staticFunctionNameToClosure(a[1])
this.b.push(r)
return r
case"capability":if(1>=a.length)return H.v(a,1)
return new H.dC(a[1])
case"dart":s=a.length
if(1>=s)return H.v(a,1)
q=a[1]
if(2>=s)return H.v(a,2)
p=a[2]
o=u.instanceFromClassId(q)
this.b.push(o)
this.bq(p)
return u.initializeEmptyInstance(q,o,p)
default:throw H.k("couldn't deserialize: "+H.x(a))}},
bq:function(a){var t,s,r
t=J.b0(a)
s=0
while(!0){r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
t.i(a,s,this.aY(t.n(a,s)));++s}return a},
h7:function(a){var t,s,r,q,p,o
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q=P.mK()
this.b.push(q)
s=J.y9(J.v0(s,this.gh5()))
for(t=J.b0(s),p=J.b0(r),o=0;o<t.gm(s);++o)q.i(0,t.n(s,o),this.aY(p.n(r,o)))
return q},
h8:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
if(3>=t)return H.v(a,3)
q=a[3]
if(J.b_(s,u.globalState.b)){p=u.globalState.z.n(0,r)
if(p==null)return
o=p.cM(q)
if(o==null)return
n=new H.fv(o,r)}else n=new H.i0(s,q,r)
this.b.push(n)
return n},
h6:function(a){var t,s,r,q,p,o,n
t=a.length
if(1>=t)return H.v(a,1)
s=a[1]
if(2>=t)return H.v(a,2)
r=a[2]
q={}
this.b.push(q)
t=J.b0(s)
p=J.b0(r)
o=0
while(!0){n=t.gm(s)
if(typeof n!=="number")return H.a7(n)
if(!(o<n))break
q[t.n(s,o)]=this.aY(p.n(r,o));++o}return q}}
H.kN.prototype={
gX:function(a){return this.gm(this)===0},
A:function(a){return P.wl(this)},
i:function(a,b,c){return H.yF()},
$isbl:1,
$asbl:null}
H.kO.prototype={
gm:function(a){return this.a},
U:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
n:function(a,b){if(!this.U(0,b))return
return this.dq(b)},
dq:function(a){return this.b[a]},
a7:function(a,b){var t,s,r,q
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.dq(q))}}}
H.nN.prototype={}
H.p2.prototype={
aI:function(a){var t,s,r
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
A:function(a){var t=this.b
if(t==null)return"NullError: "+H.x(this.a)
return"NullError: method not found: '"+H.x(t)+"' on null"}}
H.my.prototype={
A:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.x(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.x(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.x(this.a)+")"}}
H.p4.prototype={
A:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.h3.prototype={
gaK:function(){return this.b}}
H.rx.prototype={
$1:function(a){if(!!J.aq(a).$iseb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.k5.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.rk.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.rl.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.rm.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.rn.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ro.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.eQ.prototype={
A:function(a){return"Closure '"+H.nI(this).trim()+"'"},
gi2:function(){return this},
$D:null}
H.oI.prototype={}
H.oe.prototype={
A:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.fL.prototype={
R:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.fL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
ga3:function(a){var t,s
t=this.c
if(t==null)s=H.en(this.a)
else s=typeof t!=="object"?J.dz(t):H.en(t)
t=H.en(this.b)
if(typeof s!=="number")return s.i5()
return(s^t)>>>0},
A:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.x(this.d)+"' of "+H.nH(t)}}
H.kH.prototype={
A:function(a){return this.a}}
H.nS.prototype={
A:function(a){return"RuntimeError: "+H.x(this.a)}}
H.dR.prototype={
A:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
ga3:function(a){return J.dz(this.a)},
R:function(a,b){if(b==null)return!1
return b instanceof H.dR&&J.b_(this.a,b.a)}}
H.w.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gaC:function(a){return new H.mI(this,[H.P(this,0)])},
gc4:function(a){return H.df(this.gaC(this),new H.mx(this),H.P(this,0),H.P(this,1))},
U:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.dj(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.dj(s,b)}else return this.ho(b)},
ho:function(a){var t=this.d
if(t==null)return!1
return this.bv(this.bI(t,this.bu(a)),a)>=0},
bn:function(a,b){b.a7(0,new H.mw(this))},
n:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.bm(t,b)
return s==null?null:s.gaZ()}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.bm(r,b)
return s==null?null:s.gaZ()}else return this.hp(b)},
hp:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.bI(t,this.bu(a))
r=this.bv(s,a)
if(r<0)return
return s[r].gaZ()},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.cn()
this.b=t}this.d9(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.cn()
this.c=s}this.d9(s,b,c)}else{r=this.d
if(r==null){r=this.cn()
this.d=r}q=this.bu(b)
p=this.bI(r,q)
if(p==null)this.ct(r,q,[this.co(b,c)])
else{o=this.bv(p,b)
if(o>=0)p[o].saZ(c)
else p.push(this.co(b,c))}}},
ae:function(a,b){if(typeof b==="string")return this.dH(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dH(this.c,b)
else return this.hq(b)},
hq:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.bI(t,this.bu(a))
r=this.bv(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.dQ(q)
return q.gaZ()},
b9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a7:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.k(new P.bM(this))
t=t.c}},
d9:function(a,b,c){var t=this.bm(a,b)
if(t==null)this.ct(a,b,this.co(b,c))
else t.saZ(c)},
dH:function(a,b){var t
if(a==null)return
t=this.bm(a,b)
if(t==null)return
this.dQ(t)
this.dm(a,b)
return t.gaZ()},
co:function(a,b){var t,s
t=new H.mH(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dQ:function(a){var t,s
t=a.gfC()
s=a.c
if(t==null)this.e=s
else t.c=s
if(s==null)this.f=t
else s.d=t;--this.a
this.r=this.r+1&67108863},
bu:function(a){return J.dz(a)&0x3ffffff},
bv:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].ge6(),b))return s
return-1},
A:function(a){return P.wl(this)},
bm:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
ct:function(a,b,c){a[b]=c},
dm:function(a,b){delete a[b]},
dj:function(a,b){return this.bm(a,b)!=null},
cn:function(){var t=Object.create(null)
this.ct(t,"<non-identifier-key>",t)
this.dm(t,"<non-identifier-key>")
return t},
$iszz:1,
$isbl:1,
$asbl:null}
H.mx.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.mw.prototype={
$2:function(a,b){this.a.i(0,a,b)},
$S:function(){return H.eH(function(a,b){return{func:1,args:[a,b]}},this.a,"w")}}
H.mH.prototype={
ge6:function(){return this.a},
gaZ:function(){return this.b},
gfC:function(){return this.d},
saZ:function(a){return this.b=a}}
H.mI.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t,s
t=this.a
s=new H.mJ(t,t.r,null,null,this.$ti)
s.c=t.e
return s},
aa:function(a,b){return this.a.U(0,b)},
a7:function(a,b){var t,s,r
t=this.a
s=t.e
r=t.r
for(;s!=null;){b.$1(s.a)
if(r!==t.r)throw H.k(new P.bM(t))
s=s.c}}}
H.mJ.prototype={
gL:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.c
return!0}}}}
H.rg.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.rh.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.B]}}}
H.ri.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.B]}}}
H.hk.prototype={
A:function(a){return"RegExp/"+this.a+"/"},
gdB:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.tI(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
gdA:function(){var t=this.d
if(t!=null)return t
t=this.b
t=H.tI(this.a+"|()",t.multiline,!t.ignoreCase,!0)
this.d=t
return t},
cA:function(a,b,c){var t
H.xx(b)
t=J.bZ(b)
if(typeof t!=="number")return H.a7(t)
t=c>t
if(t)throw H.k(P.bE(c,0,J.bZ(b),null,null))
return new H.pB(this,b,c)},
aP:function(a,b){return this.cA(a,b,0)},
fe:function(a,b){var t,s
t=this.gdB()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return new H.k3(this,s)},
cj:function(a,b){var t,s
t=this.gdA()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
if(0>=s.length)return H.v(s,-1)
if(s.pop()!=null)return
return new H.k3(this,s)},
ec:function(a,b,c){if(c<0||c>b.length)throw H.k(P.bE(c,0,b.length,null,null))
return this.cj(b,c)},
$isFl:1,
$isu8:1,
gfv:function(){return this.b}}
H.k3.prototype={
gd4:function(a){return this.b.index},
gdY:function(a){var t=this.b
return t.index+t[0].length},
aU:function(a){var t=this.b
if(a>>>0!==a||a>=t.length)return H.v(t,a)
return t[a]},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
$isd2:1}
H.pB.prototype={
gS:function(a){return new H.jU(this.a,this.b,this.c,null)},
$ashj:function(){return[P.d2]},
$asn:function(){return[P.d2]}}
H.jU.prototype={
gL:function(){return this.d},
F:function(){var t,s,r,q
t=this.b
if(t==null)return!1
s=this.c
t=J.bZ(t)
if(typeof t!=="number")return H.a7(t)
if(s<=t){r=this.a.fe(this.b,this.c)
if(r!=null){this.d=r
t=r.b
s=t.index
q=s+t[0].length
this.c=s===q?q+1:q
return!0}}this.d=null
this.b=null
return!1}}
H.jL.prototype={
gdY:function(a){return this.a+this.c.length},
n:function(a,b){return this.aU(b)},
aU:function(a){if(a!==0)throw H.k(P.jD(a,null,null))
return this.c},
$isd2:1,
gd4:function(a){return this.a}}
H.qE.prototype={
gS:function(a){return new H.qF(this.a,this.b,this.c,null)},
$asn:function(){return[P.d2]}}
H.qF.prototype={
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
this.d=new H.jL(o,q,s)
this.c=n===this.c?n+1:n
return!0},
gL:function(){return this.d}}
H.fe.prototype={
ga8:function(a){return C.a0},
fT:function(a,b,c){return H.cM(a,b,c)},
fS:function(a){return this.fT(a,0,null)},
fR:function(a,b,c){var t
H.xg(a,b,c)
t=new DataView(a,b)
return t},
fQ:function(a,b){return this.fR(a,b,null)},
$isfe:1,
$isbg:1,
gea:function(a){return a.byteLength}}
H.em.prototype={
fs:function(a,b,c,d){if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.dB(b,d,"Invalid list position"))
else throw H.k(P.bE(b,0,c,d,null))},
de:function(a,b,c,d){if(b>>>0!==b||b>c)this.fs(a,b,c,d)},
$isem:1,
gbT:function(a){return a.buffer},
gea:function(a){return a.byteLength}}
H.n7.prototype={
ga8:function(a){return C.a1}}
H.jt.prototype={
gm:function(a){return a.length},
dM:function(a,b,c,d,e){var t,s,r
t=a.length
this.de(a,b,t,"start")
this.de(a,c,t,"end")
if(typeof b!=="number")return b.aF()
if(typeof c!=="number")return H.a7(c)
if(b>c)throw H.k(P.bE(b,0,c,null,null))
s=c-b
if(typeof e!=="number")return e.a1()
if(e<0)throw H.k(P.dA(e))
r=d.length
if(r-e<s)throw H.k(new P.dP("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$isaE:1,
$asaE:function(){},
$isay:1,
$asay:function(){}}
H.hv.prototype={
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
a[b]=c},
a6:function(a,b,c,d,e){if(!!J.aq(d).$ishv){this.dM(a,b,c,d,e)
return}this.d6(a,b,c,d,e)},
az:function(a,b,c,d){return this.a6(a,b,c,d,0)}}
H.hx.prototype={
$asaE:function(){},
$asay:function(){},
$asp:function(){return[P.U]},
$asr:function(){return[P.U]},
$asn:function(){return[P.U]},
$isp:1,
$isr:1,
$isn:1}
H.hz.prototype={
$asaE:function(){},
$asay:function(){},
$asp:function(){return[P.U]},
$asr:function(){return[P.U]},
$asn:function(){return[P.U]}}
H.hw.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
a[b]=c},
a6:function(a,b,c,d,e){if(!!J.aq(d).$ishw){this.dM(a,b,c,d,e)
return}this.d6(a,b,c,d,e)},
az:function(a,b,c,d){return this.a6(a,b,c,d,0)},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.hy.prototype={
$asaE:function(){},
$asay:function(){},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]},
$isp:1,
$isr:1,
$isn:1}
H.hA.prototype={
$asaE:function(){},
$asay:function(){},
$asp:function(){return[P.C]},
$asr:function(){return[P.C]},
$asn:function(){return[P.C]}}
H.n8.prototype={
ga8:function(a){return C.a2},
$isp:1,
$asp:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.n9.prototype={
ga8:function(a){return C.a3},
$isp:1,
$asp:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$isn:1,
$asn:function(){return[P.U]}}
H.na.prototype={
ga8:function(a){return C.a4},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nb.prototype={
ga8:function(a){return C.a5},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nc.prototype={
ga8:function(a){return C.a6},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.nd.prototype={
ga8:function(a){return C.aa},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.ne.prototype={
ga8:function(a){return C.ab},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.ju.prototype={
ga8:function(a){return C.ac},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
H.ff.prototype={
ga8:function(a){return C.ad},
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)H.aZ(H.c3(a,b))
return a[b]},
c8:function(a,b,c){return new Uint8Array(a.subarray(b,H.Go(b,c,a.length)))},
$isff:1,
$isd8:1,
$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.pD.prototype={
$1:function(a){var t,s;--u.globalState.f.b
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.pC.prototype={
$1:function(a){var t,s;++u.globalState.f.b
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.pE.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.pF.prototype={
$0:function(){--u.globalState.f.b
this.a.$0()},
$S:function(){return{func:1}}}
P.qT.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qU.prototype={
$2:function(a,b){this.a.$2(1,new H.h3(a,b))},
$S:function(){return{func:1,args:[,P.dO]}}}
P.r3.prototype={
$2:function(a,b){this.a(a,b)},
$S:function(){return{func:1,args:[P.C,,]}}}
P.cC.prototype={}
P.r5.prototype={
$0:function(){var t,s,r
try{this.b.aH(this.a.$0())}catch(r){t=H.cj(r)
s=H.ci(r)
P.xi(this.b,t,s)}},
$S:function(){return{func:1}}}
P.lV.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.an(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.an(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.lU.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){t=this.e
if(t<0||t>=r.length)return H.v(r,t)
r[t]=a
if(s===0)this.d.di(r)}else if(t.b===0&&!this.b)this.d.an(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.eR.prototype={}
P.jW.prototype={
cE:function(a,b){if(a==null)a=new P.fg()
if(this.a.a!==0)throw H.k(new P.dP("Future already completed"))
$.am.toString
this.an(a,b)},
bp:function(a){return this.cE(a,null)},
$iseR:1,
ghf:function(){return this.a}}
P.dT.prototype={
aB:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dP("Future already completed"))
t.dc(b)},
fW:function(a){return this.aB(a,null)},
an:function(a,b){this.a.dd(a,b)}}
P.k7.prototype={
aB:function(a,b){var t=this.a
if(t.a!==0)throw H.k(new P.dP("Future already completed"))
t.aH(b)},
an:function(a,b){this.a.an(a,b)}}
P.k_.prototype={
gfM:function(){return this.b.b},
ge2:function(){return(this.c&1)!==0},
ghm:function(){return(this.c&2)!==0},
ge1:function(){return this.c===8},
hk:function(a){return this.b.b.cV(this.d,a)},
hv:function(a){if(this.c!==6)return!0
return this.b.b.cV(this.d,J.fD(a))},
hg:function(a){var t,s,r
t=this.e
s=J.aR(a)
r=this.b.b
if(H.fA(t,{func:1,args:[,,]}))return r.hU(t,s.gar(a),a.gaK())
else return r.cV(t,s.gar(a))},
hl:function(){return this.b.b.em(this.d)},
gcp:function(){return this.a}}
P.bj.prototype={
gft:function(){return this.a===2},
gcm:function(){return this.a>=4},
c2:function(a,b){var t=$.am
if(t!==C.e){t.toString
if(b!=null)b=P.xl(b,t)}return this.cu(a,b)},
b3:function(a){return this.c2(a,null)},
cu:function(a,b){var t,s
t=new P.bj(0,$.am,null,[null])
s=b==null?1:3
this.ca(new P.k_(null,t,s,a,b,[H.P(this,0),null]))
return t},
c5:function(a){var t,s
t=$.am
s=new P.bj(0,t,null,this.$ti)
if(t!==C.e)t.toString
t=H.P(this,0)
this.ca(new P.k_(null,s,8,a,null,[t,t]))
return s},
ca:function(a){var t,s
t=this.a
if(t<=1){a.a=this.c
this.c=a}else{if(t===2){s=this.c
if(!s.gcm()){s.ca(a)
return}this.a=s.a
this.c=s.c}t=this.b
t.toString
P.fy(null,null,t,new P.pZ(this,a))}},
dF:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;q.gcp()!=null;)q=q.a
q.a=r}}else{if(s===2){p=this.c
if(!p.gcm()){p.dF(a)
return}this.a=p.a
this.c=p.c}t.a=this.bN(a)
s=this.b
s.toString
P.fy(null,null,s,new P.q6(t,this))}},
bM:function(){var t=this.c
this.c=null
return this.bN(t)},
bN:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.gcp()
t.a=s}return s},
aH:function(a){var t,s
t=this.$ti
if(H.dU(a,"$iscC",t,"$ascC"))if(H.dU(a,"$isbj",t,null))P.q1(a,this)
else P.x6(a,this)
else{s=this.bM()
this.a=4
this.c=a
P.ft(this,s)}},
di:function(a){var t=this.bM()
this.a=4
this.c=a
P.ft(this,t)},
an:function(a,b){var t=this.bM()
this.a=8
this.c=new P.eL(a,b)
P.ft(this,t)},
f7:function(a){return this.an(a,null)},
dc:function(a){var t
if(H.dU(a,"$iscC",this.$ti,"$ascC")){this.f4(a)
return}this.a=1
t=this.b
t.toString
P.fy(null,null,t,new P.q0(this,a))},
f4:function(a){var t
if(H.dU(a,"$isbj",this.$ti,null)){if(a.a===8){this.a=1
t=this.b
t.toString
P.fy(null,null,t,new P.q5(this,a))}else P.q1(a,this)
return}P.x6(a,this)},
dd:function(a,b){var t
this.a=1
t=this.b
t.toString
P.fy(null,null,t,new P.q_(this,a,b))},
$iscC:1,
gbO:function(){return this.a},
gfF:function(){return this.c}}
P.pZ.prototype={
$0:function(){P.ft(this.a,this.b)},
$S:function(){return{func:1}}}
P.q6.prototype={
$0:function(){P.ft(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.q2.prototype={
$1:function(a){var t=this.a
t.a=0
t.aH(a)},
$S:function(){return{func:1,args:[,]}}}
P.q3.prototype={
$2:function(a,b){this.a.an(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.q4.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.q0.prototype={
$0:function(){this.a.di(this.b)},
$S:function(){return{func:1}}}
P.q5.prototype={
$0:function(){P.q1(this.b,this.a)},
$S:function(){return{func:1}}}
P.q_.prototype={
$0:function(){this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.q9.prototype={
$0:function(){var t,s,r,q,p,o,n
t=null
try{t=this.d.hl()}catch(q){s=H.cj(q)
r=H.ci(q)
if(this.c){p=J.fD(this.a.a.c)
o=s
o=p==null?o==null:p===o
p=o}else p=!1
o=this.b
if(p)o.b=this.a.a.c
else o.b=new P.eL(s,r)
o.a=!0
return}if(!!J.aq(t).$iscC){if(t instanceof P.bj&&t.gbO()>=4){if(t.gbO()===8){p=this.b
p.b=t.gfF()
p.a=!0}return}n=this.a.a
p=this.b
p.b=t.b3(new P.qa(n))
p.a=!1}},
$S:function(){return{func:1,v:true}}}
P.qa.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.q8.prototype={
$0:function(){var t,s,r,q
try{this.a.b=this.b.hk(this.c)}catch(r){t=H.cj(r)
s=H.ci(r)
q=this.a
q.b=new P.eL(t,s)
q.a=!0}},
$S:function(){return{func:1,v:true}}}
P.q7.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{t=this.a.a.c
q=this.c
if(q.hv(t)===!0&&q.e!=null){p=this.b
p.b=q.hg(t)
p.a=!1}}catch(o){s=H.cj(o)
r=H.ci(o)
q=this.a
p=J.fD(q.a.c)
n=s
m=this.b
if(p==null?n==null:p===n)m.b=q.a.c
else m.b=new P.eL(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.jV.prototype={}
P.dh.prototype={
ax:function(a,b){return new P.qn(b,this,[H.ar(this,"dh",0),null])},
aa:function(a,b){var t,s
t={}
s=new P.bj(0,$.am,null,[P.d9])
t.a=null
t.a=this.aQ(new P.ok(t,this,b,s),!0,new P.ol(s),s.gbc())
return s},
a7:function(a,b){var t,s
t={}
s=new P.bj(0,$.am,null,[null])
t.a=null
t.a=this.aQ(new P.oq(t,this,b,s),!0,new P.or(s),s.gbc())
return s},
gm:function(a){var t,s
t={}
s=new P.bj(0,$.am,null,[P.C])
t.a=0
this.aQ(new P.ou(t),!0,new P.ov(t,s),s.gbc())
return s},
gX:function(a){var t,s
t={}
s=new P.bj(0,$.am,null,[P.d9])
t.a=null
t.a=this.aQ(new P.os(t,s),!0,new P.ot(s),s.gbc())
return s},
ap:function(a){var t,s,r
t=H.ar(this,"dh",0)
s=H.a([],[t])
r=new P.bj(0,$.am,null,[[P.p,t]])
this.aQ(new P.ow(this,s),!0,new P.ox(s,r),r.gbc())
return r},
gac:function(a){var t,s
t={}
s=new P.bj(0,$.am,null,[H.ar(this,"dh",0)])
t.a=null
t.a=this.aQ(new P.om(t,this,s),!0,new P.on(s),s.gbc())
return s}}
P.ok.prototype={
$1:function(a){var t,s
t=this.a
s=this.d
P.xp(new P.oi(this.c,a),new P.oj(t,s),P.xf(t.a,s))},
$S:function(){return H.eH(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oi.prototype={
$0:function(){return J.b_(this.b,this.a)},
$S:function(){return{func:1}}}
P.oj.prototype={
$1:function(a){if(a===!0)P.uJ(this.a.a,this.b,!0)},
$S:function(){return{func:1,args:[P.d9]}}}
P.ol.prototype={
$0:function(){this.a.aH(!1)},
$S:function(){return{func:1}}}
P.oq.prototype={
$1:function(a){P.xp(new P.oo(this.c,a),new P.op(),P.xf(this.a.a,this.d))},
$S:function(){return H.eH(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.oo.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
P.op.prototype={
$1:function(a){},
$S:function(){return{func:1,args:[,]}}}
P.or.prototype={
$0:function(){this.a.aH(null)},
$S:function(){return{func:1}}}
P.ou.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.ov.prototype={
$0:function(){this.b.aH(this.a.a)},
$S:function(){return{func:1}}}
P.os.prototype={
$1:function(a){P.uJ(this.a.a,this.b,!1)},
$S:function(){return{func:1,args:[,]}}}
P.ot.prototype={
$0:function(){this.a.aH(!0)},
$S:function(){return{func:1}}}
P.ow.prototype={
$1:function(a){this.b.push(a)},
$S:function(){return H.eH(function(a){return{func:1,args:[a]}},this.a,"dh")}}
P.ox.prototype={
$0:function(){this.b.aH(this.a)},
$S:function(){return{func:1}}}
P.om.prototype={
$1:function(a){P.uJ(this.a.a,this.c,a)},
$S:function(){return H.eH(function(a){return{func:1,args:[a]}},this.b,"dh")}}
P.on.prototype={
$0:function(){var t,s,r,q
try{r=H.jl()
throw H.k(r)}catch(q){t=H.cj(q)
s=H.ci(q)
P.xi(this.a,t,s)}},
$S:function(){return{func:1}}}
P.oh.prototype={}
P.di.prototype={
cO:function(a,b){var t=this.e
if((t&8)!==0)return
this.e=(t+128|4)>>>0
if(t<128&&this.r!=null)this.r.dT()
if((t&4)===0&&(this.e&32)===0)this.dt(this.gdD())},
eg:function(a){return this.cO(a,null)},
el:function(a){var t=this.e
if((t&8)!==0)return
if(t>=128){t-=128
this.e=t
if(t<128){if((t&64)!==0){t=this.r
t=!t.gX(t)}else t=!1
if(t)this.r.c6(this)
else{t=(this.e&4294967291)>>>0
this.e=t
if((t&32)===0)this.dt(this.gdE())}}}},
bU:function(a){var t=(this.e&4294967279)>>>0
this.e=t
if((t&8)===0)this.cc()
t=this.f
return t==null?$.$get$hc():t},
cc:function(){var t=(this.e|8)>>>0
this.e=t
if((t&64)!==0)this.r.dT()
if((this.e&32)===0)this.r=null
this.f=this.dC()},
bH:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dJ(b)
else this.cb(new P.pN(b,null,[H.ar(this,"di",0)]))},
bG:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dL(a,b)
else this.cb(new P.pP(a,b,null))},
f3:function(){var t=this.e
if((t&8)!==0)return
t=(t|2)>>>0
this.e=t
if(t<32)this.dK()
else this.cb(C.J)},
bK:function(){},
bL:function(){},
dC:function(){return},
cb:function(a){var t,s
t=this.r
if(t==null){t=new P.qC(null,null,0,[H.ar(this,"di",0)])
this.r=t}t.h(0,a)
s=this.e
if((s&64)===0){s=(s|64)>>>0
this.e=s
if(s<128)this.r.c6(this)}},
dJ:function(a){var t=this.e
this.e=(t|32)>>>0
this.d.cW(this.a,a)
this.e=(this.e&4294967263)>>>0
this.cd((t&4)!==0)},
dL:function(a,b){var t,s
t=this.e
s=new P.pI(this,a,b)
if((t&1)!==0){this.e=(t|16)>>>0
this.cc()
t=this.f
if(!!J.aq(t).$iscC&&t!==$.$get$hc())t.c5(s)
else s.$0()}else{s.$0()
this.cd((t&4)!==0)}},
dK:function(){var t,s
t=new P.pH(this)
this.cc()
this.e=(this.e|16)>>>0
s=this.f
if(!!J.aq(s).$iscC&&s!==$.$get$hc())s.c5(t)
else t.$0()},
dt:function(a){var t=this.e
this.e=(t|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.cd((t&4)!==0)},
cd:function(a){var t,s
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
if(s)this.bK()
else this.bL()
this.e=(this.e&4294967263)>>>0}t=this.e
if((t&64)!==0&&t<128)this.r.c6(this)},
eX:function(a,b,c,d,e){var t=this.d
t.toString
this.a=a
this.b=P.xl(b,t)
this.c=c},
gbO:function(){return this.e}}
P.pI.prototype={
$0:function(){var t,s,r,q,p,o
t=this.a
s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|32)>>>0
s=t.b
r=H.fA(s,{func:1,args:[P.ab,P.dO]})
q=t.d
p=this.b
o=t.b
if(r)q.hV(o,p,this.c)
else q.cW(o,p)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.pH.prototype={
$0:function(){var t,s
t=this.a
s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.en(t.c)
t.e=(t.e&4294967263)>>>0},
$S:function(){return{func:1,v:true}}}
P.jY.prototype={
gbw:function(a){return this.a},
sbw:function(a,b){return this.a=b}}
P.pN.prototype={
cP:function(a){a.dJ(this.b)}}
P.pP.prototype={
cP:function(a){a.dL(this.b,this.c)},
$asjY:function(){},
gar:function(a){return this.b},
gaK:function(){return this.c}}
P.pO.prototype={
cP:function(a){a.dK()},
gbw:function(a){return},
sbw:function(a,b){throw H.k(new P.dP("No events after a done."))}}
P.qp.prototype={
c6:function(a){var t=this.a
if(t===1)return
if(t>=1){this.a=1
return}P.xI(new P.qq(this,a))
this.a=1},
dT:function(){if(this.a===1)this.a=3},
gbO:function(){return this.a}}
P.qq.prototype={
$0:function(){var t,s,r,q
t=this.a
s=t.a
t.a=0
if(s===3)return
r=t.b
q=r.gbw(r)
t.b=q
if(q==null)t.c=null
r.cP(this.b)},
$S:function(){return{func:1}}}
P.qC.prototype={
gX:function(a){return this.c==null},
h:function(a,b){var t=this.c
if(t==null){this.c=b
this.b=b}else{t.sbw(0,b)
this.c=b}}}
P.qD.prototype={}
P.qW.prototype={
$0:function(){return this.a.an(this.b,this.c)},
$S:function(){return{func:1}}}
P.qV.prototype={
$2:function(a,b){P.Gn(this.a,this.b,a,b)},
$S:function(){return{func:1,args:[,P.dO]}}}
P.qX.prototype={
$0:function(){return this.a.aH(this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
aQ:function(a,b,c,d){return this.fa(a,d,c,!0===b)},
eb:function(a,b,c){return this.aQ(a,null,b,c)},
fa:function(a,b,c,d){return P.G2(this,a,b,c,d,H.ar(this,"hV",0),H.ar(this,"hV",1))},
du:function(a,b){b.bH(0,a)},
fp:function(a,b,c){c.bG(a,b)},
$asdh:function(a,b){return[b]}}
P.hW.prototype={
bH:function(a,b){if((this.e&2)!==0)return
this.eN(0,b)},
bG:function(a,b){if((this.e&2)!==0)return
this.eO(a,b)},
bK:function(){var t=this.y
if(t==null)return
t.eg(0)},
bL:function(){var t=this.y
if(t==null)return
t.el(0)},
dC:function(){var t=this.y
if(t!=null){this.y=null
return t.bU(0)}return},
fk:function(a){this.x.du(a,this)},
fo:function(a,b){this.x.fp(a,b,this)},
fm:function(){this.f3()},
f_:function(a,b,c,d,e,f,g){this.y=this.x.a.eb(this.gfj(),this.gfl(),this.gfn())},
$asdi:function(a,b){return[b]}}
P.qn.prototype={
du:function(a,b){var t,s,r,q
t=null
try{t=this.b.$1(a)}catch(q){s=H.cj(q)
r=H.ci(q)
P.Gm(b,s,r)
return}b.bH(0,t)}}
P.eL.prototype={
A:function(a){return H.x(this.a)},
$iseb:1,
gar:function(a){return this.a},
gaK:function(){return this.b}}
P.qS.prototype={}
P.r2.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.fg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.k(t)
r=H.k(t)
r.stack=J.cH(s)
throw r},
$S:function(){return{func:1}}}
P.qt.prototype={
en:function(a){var t,s,r,q
try{if(C.e===$.am){r=a.$0()
return r}r=P.xm(null,null,this,a)
return r}catch(q){t=H.cj(q)
s=H.ci(q)
r=P.ka(null,null,this,t,s)
return r}},
cW:function(a,b){var t,s,r,q
try{if(C.e===$.am){r=a.$1(b)
return r}r=P.xo(null,null,this,a,b)
return r}catch(q){t=H.cj(q)
s=H.ci(q)
r=P.ka(null,null,this,t,s)
return r}},
hV:function(a,b,c){var t,s,r,q
try{if(C.e===$.am){r=a.$2(b,c)
return r}r=P.xn(null,null,this,a,b,c)
return r}catch(q){t=H.cj(q)
s=H.ci(q)
r=P.ka(null,null,this,t,s)
return r}},
cC:function(a,b){if(b)return new P.qu(this,a)
else return new P.qv(this,a)},
fU:function(a,b){return new P.qw(this,a)},
n:function(a,b){return},
em:function(a){if($.am===C.e)return a.$0()
return P.xm(null,null,this,a)},
cV:function(a,b){if($.am===C.e)return a.$1(b)
return P.xo(null,null,this,a,b)},
hU:function(a,b,c){if($.am===C.e)return a.$2(b,c)
return P.xn(null,null,this,a,b,c)}}
P.qu.prototype={
$0:function(){return this.a.en(this.b)},
$S:function(){return{func:1}}}
P.qv.prototype={
$0:function(){return this.a.em(this.b)},
$S:function(){return{func:1}}}
P.qw.prototype={
$1:function(a){return this.a.cW(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.qc.prototype={
gm:function(a){return this.a},
gX:function(a){return this.a===0},
gc4:function(a){var t=H.P(this,0)
return H.df(new P.qd(this,[t]),new P.qf(this),t,H.P(this,1))},
U:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
return t==null?!1:t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
return s==null?!1:s[b]!=null}else return this.f9(b)},
f9:function(a){var t=this.d
if(t==null)return!1
return this.aO(t[this.aN(a)],a)>=0},
n:function(a,b){var t,s,r,q
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)s=null
else{r=t[b]
s=r===t?null:r}return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){q=this.c
if(q==null)s=null
else{r=q[b]
s=r===q?null:r}return s}else return this.fh(0,b)},
fh:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aN(b)]
r=this.aO(s,b)
return r<0?null:s[r+1]},
i:function(a,b,c){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.uH()
this.b=t}this.dg(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.uH()
this.c=s}this.dg(s,b,c)}else this.fG(b,c)},
fG:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.uH()
this.d=t}s=this.aN(a)
r=t[s]
if(r==null){P.uI(t,s,[a,b]);++this.a
this.e=null}else{q=this.aO(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++this.a
this.e=null}}},
ae:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.cs(0,b)},
cs:function(a,b){var t,s,r
t=this.d
if(t==null)return
s=t[this.aN(b)]
r=this.aO(s,b)
if(r<0)return;--this.a
this.e=null
return s.splice(r,2)[1]},
a7:function(a,b){var t,s,r,q
t=this.cf()
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,this.n(0,q))
if(t!==this.e)throw H.k(new P.bM(this))}},
cf:function(){var t,s,r,q,p,o,n,m,l,k,j,i
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
dg:function(a,b,c){if(a[b]==null){++this.a
this.e=null}P.uI(a,b,c)},
bk:function(a,b){var t
if(a!=null&&a[b]!=null){t=P.G4(a,b)
delete a[b];--this.a
this.e=null
return t}else return},
aN:function(a){return J.dz(a)&0x3ffffff},
aO:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.b_(a[s],b))return s
return-1},
$isbl:1,
$asbl:null}
P.qf.prototype={
$1:function(a){return this.a.n(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.qd.prototype={
gm:function(a){return this.a.a},
gX:function(a){return this.a.a===0},
gS:function(a){var t=this.a
return new P.qe(t,t.cf(),0,null,this.$ti)},
aa:function(a,b){return this.a.U(0,b)},
a7:function(a,b){var t,s,r,q
t=this.a
s=t.cf()
for(r=s.length,q=0;q<r;++q){b.$1(s[q])
if(s!==t.e)throw H.k(new P.bM(t))}}}
P.qe.prototype={
gL:function(){return this.d},
F:function(){var t,s,r
t=this.b
s=this.c
r=this.a
if(t!==r.e)throw H.k(new P.bM(r))
else if(s>=t.length){this.d=null
return!1}else{this.d=t[s]
this.c=s+1
return!0}}}
P.k2.prototype={
bu:function(a){return H.H6(a)&0x3ffffff},
bv:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].ge6()
if(r==null?b==null:r===b)return s}return-1}}
P.k1.prototype={
gS:function(a){var t=new P.dv(this,this.r,null,null,[null])
t.c=this.e
return t},
gm:function(a){return this.a},
gX:function(a){return this.a===0},
aa:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.f8(b)},
f8:function(a){var t=this.d
if(t==null)return!1
return this.aO(t[this.aN(a)],a)>=0},
cM:function(a){var t
if(!(typeof a==="string"&&a!=="__proto__"))t=typeof a==="number"&&(a&0x3ffffff)===a
else t=!0
if(t)return this.aa(0,a)?a:null
else return this.fu(a)},
fu:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aN(a)]
r=this.aO(s,a)
if(r<0)return
return J.fC(s,r).gdn()},
a7:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$1(t.a)
if(s!==this.r)throw H.k(new P.bM(this))
t=t.b}},
h:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.df(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.df(r,b)}else return this.aM(0,b)},
aM:function(a,b){var t,s,r
t=this.d
if(t==null){t=P.G5()
this.d=t}s=this.aN(b)
r=t[s]
if(r==null)t[s]=[this.ce(b)]
else{if(this.aO(r,b)>=0)return!1
r.push(this.ce(b))}return!0},
ae:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.cs(0,b)},
cs:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aN(b)]
r=this.aO(s,b)
if(r<0)return!1
this.dh(s.splice(r,1)[0])
return!0},
b9:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
df:function(a,b){if(a[b]!=null)return!1
a[b]=this.ce(b)
return!0},
bk:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.dh(t)
delete a[b]
return!0},
ce:function(a){var t,s
t=new P.qj(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
dh:function(a){var t,s
t=a.gf6()
s=a.b
if(t==null)this.e=s
else t.b=s
if(s==null)this.f=t
else s.c=t;--this.a
this.r=this.r+1&67108863},
aN:function(a){return J.dz(a)&0x3ffffff},
aO:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.b_(a[s].gdn(),b))return s
return-1},
$ises:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qj.prototype={
gdn:function(){return this.a},
gf6:function(){return this.c}}
P.dv.prototype={
gL:function(){return this.d},
F:function(){var t=this.a
if(this.b!==t.r)throw H.k(new P.bM(t))
else{t=this.c
if(t==null){this.d=null
return!1}else{this.d=t.a
this.c=t.b
return!0}}}}
P.qg.prototype={}
P.fa.prototype={
ax:function(a,b){return H.df(this,b,H.ar(this,"fa",0),null)},
aa:function(a,b){var t
for(t=this.gS(this);t.F();)if(J.b_(t.gL(),b))return!0
return!1},
a7:function(a,b){var t
for(t=this.gS(this);t.F();)b.$1(t.gL())},
a0:function(a,b){return P.d1(this,!0,H.ar(this,"fa",0))},
ap:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.F();)++s
return s},
gX:function(a){return!this.gS(this).F()},
A:function(a){return P.tE(this,"(",")")},
$isn:1,
$asn:null}
P.hj.prototype={}
P.jp.prototype={}
P.hB.prototype={$asp:null,$asr:null,$asn:null,$isp:1,$isr:1,$isn:1}
P.aM.prototype={
gS:function(a){return new H.dL(a,this.gm(a),0,null,[H.ar(a,"aM",0)])},
T:function(a,b){return this.n(a,b)},
a7:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<t;++s){b.$1(this.n(a,s))
if(t!==this.gm(a))throw H.k(new P.bM(a))}},
gX:function(a){return this.gm(a)===0},
aa:function(a,b){var t,s
t=this.gm(a)
for(s=0;s<this.gm(a);++s){if(J.b_(this.n(a,s),b))return!0
if(t!==this.gm(a))throw H.k(new P.bM(a))}return!1},
ax:function(a,b){return new H.fd(a,b,[H.ar(a,"aM",0),null])},
d2:function(a,b){return H.wF(a,b,null,H.ar(a,"aM",0))},
a0:function(a,b){var t,s,r
t=H.a([],[H.ar(a,"aM",0)])
C.b.sm(t,this.gm(a))
for(s=0;s<this.gm(a);++s){r=this.n(a,s)
if(s>=t.length)return H.v(t,s)
t[s]=r}return t},
ap:function(a){return this.a0(a,!0)},
h:function(a,b){var t=this.gm(a)
this.sm(a,t+1)
this.i(a,t,b)},
bX:function(a,b,c,d){var t
P.dg(b,c,this.gm(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
a6:function(a,b,c,d,e){var t,s,r,q,p,o
P.dg(b,c,this.gm(a),null,null,null)
if(typeof c!=="number")return c.am()
if(typeof b!=="number")return H.a7(b)
t=c-b
if(t===0)return
if(J.e7(e,0))H.aZ(P.bE(e,0,null,"skipCount",null))
if(H.dU(d,"$isp",[H.ar(a,"aM",0)],"$asp")){s=e
r=d}else{r=J.y7(d,e).a0(0,!1)
s=0}q=J.kc(s)
p=J.b0(r)
if(J.ct(q.V(s,t),p.gm(r)))throw H.k(H.we())
if(q.a1(s,b))for(o=t-1;o>=0;--o)this.i(a,b+o,p.n(r,q.V(s,o)))
else for(o=0;o<t;++o)this.i(a,b+o,p.n(r,q.V(s,o)))},
az:function(a,b,c,d){return this.a6(a,b,c,d,0)},
aE:function(a,b,c,d){var t,s,r,q,p
P.dg(b,c,this.gm(a),null,null,null)
d=C.c.ap(d)
if(typeof c!=="number")return c.am()
t=c-b
s=d.length
r=b+s
if(t>=s){q=t-s
p=this.gm(a)-q
this.az(a,b,r,d)
if(q!==0){this.a6(a,r,p,a,c)
this.sm(a,p)}}else{p=this.gm(a)+(s-t)
this.sm(a,p)
this.a6(a,r,p,a,c)
this.az(a,b,r,d)}},
b0:function(a,b,c){var t
if(c>=this.gm(a))return-1
if(c<0)c=0
for(t=c;t<this.gm(a);++t)if(J.b_(this.n(a,t),b))return t
return-1},
be:function(a,b){return this.b0(a,b,0)},
A:function(a){return P.jk(a,"[","]")},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.qK.prototype={
i:function(a,b,c){throw H.k(new P.T("Cannot modify unmodifiable map"))},
$isbl:1,
$asbl:null}
P.mY.prototype={
n:function(a,b){return J.fC(this.a,b)},
i:function(a,b,c){J.kf(this.a,b,c)},
a7:function(a,b){J.uX(this.a,b)},
gX:function(a){return J.rB(this.a)},
gm:function(a){return J.bZ(this.a)},
A:function(a){return J.cH(this.a)},
$isbl:1,
$asbl:null}
P.hP.prototype={$asbl:null,$isbl:1}
P.mZ.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.N+=", "
t.a=!1
t=this.b
s=t.N+=H.x(a)
t.N=s+": "
t.N+=H.x(b)},
$S:function(){return{func:1,args:[,,]}}}
P.mL.prototype={
gS:function(a){return new P.qk(this,this.c,this.d,this.b,null,this.$ti)},
a7:function(a,b){var t,s,r
t=this.d
for(s=this.b;s!==this.c;s=(s+1&this.a.length-1)>>>0){r=this.a
if(s<0||s>=r.length)return H.v(r,s)
b.$1(r[s])
if(t!==this.d)H.aZ(new P.bM(this))}},
gX:function(a){return this.b===this.c},
gm:function(a){return(this.c-this.b&this.a.length-1)>>>0},
T:function(a,b){var t,s,r,q
t=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.a7(b)
if(0>b||b>=t)H.aZ(P.by(b,this,"index",null,t))
s=this.a
r=s.length
q=(this.b+b&r-1)>>>0
if(q<0||q>=r)return H.v(s,q)
return s[q]},
a0:function(a,b){var t=H.a([],this.$ti)
C.b.sm(t,this.gm(this))
this.fL(t)
return t},
ap:function(a){return this.a0(a,!0)},
h:function(a,b){this.aM(0,b)},
b9:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length,p=q-1;t!==s;t=(t+1&p)>>>0){if(t<0||t>=q)return H.v(r,t)
r[t]=null}this.c=0
this.b=0;++this.d}},
A:function(a){return P.jk(this,"{","}")},
ek:function(){var t,s,r,q
t=this.b
if(t===this.c)throw H.k(H.jl());++this.d
s=this.a
r=s.length
if(t>=r)return H.v(s,t)
q=s[t]
s[t]=null
this.b=(t+1&r-1)>>>0
return q},
aM:function(a,b){var t,s,r
t=this.a
s=this.c
r=t.length
if(s<0||s>=r)return H.v(t,s)
t[s]=b
r=(s+1&r-1)>>>0
this.c=r
if(this.b===r)this.ds();++this.d},
ds:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.a(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.b.a6(s,0,q,t,r)
C.b.a6(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=s},
fL:function(a){var t,s,r,q,p
t=this.b
s=this.c
r=this.a
if(t<=s){q=s-t
C.b.a6(a,0,q,r,t)
return q}else{p=r.length-t
C.b.a6(a,0,p,r,t)
C.b.a6(a,p,p+this.c,this.a,0)
return this.c+p}},
eS:function(a,b){var t=new Array(8)
t.fixed$length=Array
this.a=H.a(t,[b])},
$asr:null,
$asn:null}
P.qk.prototype={
gL:function(){return this.e},
F:function(){var t,s,r
t=this.a
if(this.c!==t.d)H.aZ(new P.bM(t))
s=this.d
if(s===this.b){this.e=null
return!1}t=t.a
r=t.length
if(s>=r)return H.v(t,s)
this.e=t[s]
this.d=(s+1&r-1)>>>0
return!0}}
P.o2.prototype={
gX:function(a){return this.a===0},
bn:function(a,b){var t
for(t=J.cP(b);t.F();)this.h(0,t.gL())},
a0:function(a,b){var t,s,r,q,p
t=H.a([],this.$ti)
C.b.sm(t,this.a)
for(s=new P.dv(this,this.r,null,null,[null]),s.c=this.e,r=0;s.F();r=p){q=s.d
p=r+1
if(r>=t.length)return H.v(t,r)
t[r]=q}return t},
ap:function(a){return this.a0(a,!0)},
ax:function(a,b){return new H.fW(this,b,[H.P(this,0),null])},
A:function(a){return P.jk(this,"{","}")},
a7:function(a,b){var t
for(t=new P.dv(this,this.r,null,null,[null]),t.c=this.e;t.F();)b.$1(t.d)},
bf:function(a,b){var t,s
t=new P.dv(this,this.r,null,null,[null])
t.c=this.e
if(!t.F())return""
if(b===""){s=""
do s+=H.x(t.d)
while(t.F())}else{s=H.x(t.d)
for(;t.F();)s=s+b+H.x(t.d)}return s.charCodeAt(0)==0?s:s},
$ises:1,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
P.o1.prototype={}
P.kw.prototype={
hz:function(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t=J.b0(b)
a1=P.dg(a0,a1,t.gm(b),null,null,null)
s=$.$get$x5()
if(typeof a1!=="number")return H.a7(a1)
r=a0
q=r
p=null
o=-1
n=-1
m=0
for(;r<a1;r=l){l=r+1
k=t.Y(b,r)
if(k===37){j=l+2
if(j<=a1){i=H.rf(C.c.a2(b,l))
h=H.rf(C.c.a2(b,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.v(s,g)
f=s[g]
if(f>=0){g=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?p:p.N.length
if(e==null)e=0
if(typeof e!=="number")return e.V()
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null)p=new P.c9("")
p.N+=C.c.I(b,q,r)
p.N+=H.hC(k)
q=l
continue}}throw H.k(new P.bJ("Invalid base64 data",b,r))}if(p!=null){t=p.N+=t.I(b,q,a1)
e=t.length
if(o>=0)P.v4(b,n,a1,o,m,e)
else{d=C.a.bF(e-1,4)+1
if(d===1)throw H.k(new P.bJ("Invalid base64 encoding length ",b,a1))
for(;d<4;){t+="="
p.N=t;++d}}t=p.N
return C.c.aE(b,a0,a1,t.charCodeAt(0)==0?t:t)}c=a1-a0
if(o>=0)P.v4(b,n,a1,o,m,c)
else{d=C.d.bF(c,4)
if(d===1)throw H.k(new P.bJ("Invalid base64 encoding length ",b,a1))
if(d>1)b=t.aE(b,a1,a1,d===2?"==":"=")}return b},
$asfP:function(){return[[P.p,P.C],P.B]}}
P.kx.prototype={
$asfR:function(){return[[P.p,P.C],P.B]}}
P.fP.prototype={}
P.fR.prototype={}
P.lb.prototype={
$asfP:function(){return[P.B,[P.p,P.C]]}}
P.pe.prototype={
gG:function(a){return"utf-8"}}
P.pf.prototype={
cF:function(a,b,c){var t,s,r,q
t=J.bZ(a)
P.dg(b,c,t,null,null,null)
s=new P.c9("")
r=new P.qM(!1,s,!0,0,0,0)
r.cF(a,b,t)
r.hb(0,a,t)
q=s.N
return q.charCodeAt(0)==0?q:q},
fZ:function(a){return this.cF(a,0,null)},
$asfR:function(){return[[P.p,P.C],P.B]}}
P.qM.prototype={
hb:function(a,b,c){if(this.e>0)throw H.k(new P.bJ("Unfinished UTF-8 octet sequence",b,c))},
cF:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=this.d
s=this.e
r=this.f
this.d=0
this.e=0
this.f=0
q=new P.qO(c)
p=new P.qN(this,a,b,c)
$loop$0:for(o=J.b0(a),n=this.b,m=b;!0;m=h){$multibyte$2:if(s>0){do{if(m===c)break $loop$0
l=o.n(a,m)
if(typeof l!=="number")return l.aJ()
if((l&192)!==128){k=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bB(l,16),a,m)
throw H.k(k)}else{t=(t<<6|l&63)>>>0;--s;++m}}while(s>0)
k=r-1
if(k<0||k>=4)return H.v(C.w,k)
if(t<=C.w[k]){k=new P.bJ("Overlong encoding of 0x"+C.a.bB(t,16),a,m-r-1)
throw H.k(k)}if(t>1114111){k=new P.bJ("Character outside valid Unicode range: 0x"+C.a.bB(t,16),a,m-r-1)
throw H.k(k)}if(!this.c||t!==65279)n.N+=H.hC(t)
this.c=!1}for(k=m<c;k;){j=q.$2(a,m)
if(J.ct(j,0)){this.c=!1
if(typeof j!=="number")return H.a7(j)
i=m+j
p.$2(m,i)
if(i===c)break}else i=m
h=i+1
l=o.n(a,i)
g=J.dx(l)
if(g.a1(l,0)){g=new P.bJ("Negative UTF-8 code unit: -0x"+J.ya(g.d_(l),16),a,h-1)
throw H.k(g)}else{if(typeof l!=="number")return l.aJ()
if((l&224)===192){t=l&31
s=1
r=1
continue $loop$0}if((l&240)===224){t=l&15
s=2
r=2
continue $loop$0}if((l&248)===240&&l<245){t=l&7
s=3
r=3
continue $loop$0}g=new P.bJ("Bad UTF-8 encoding 0x"+C.d.bB(l,16),a,h-1)
throw H.k(g)}}break $loop$0}if(s>0){this.d=t
this.e=s
this.f=r}}}
P.qO.prototype={
$2:function(a,b){var t,s,r,q
t=this.a
for(s=J.b0(a),r=b;r<t;++r){q=s.n(a,r)
if(typeof q!=="number")return q.aJ()
if((q&127)!==q)return r-b}return t-b},
$S:function(){return{func:1,ret:P.C,args:[,P.C]}}}
P.qN.prototype={
$2:function(a,b){this.a.b.N+=P.oC(this.b,a,b)},
$S:function(){return{func:1,v:true,args:[P.C,P.C]}}}
P.d9.prototype={}
P.bF.prototype={}
P.dF.prototype={
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.dF))return!1
return this.a===b.a&&this.b===b.b},
aA:function(a,b){return C.a.aA(this.a,b.gfK())},
ga3:function(a){var t=this.a
return(t^C.a.aX(t,30))&1073741823},
A:function(a){var t,s,r,q,p,o,n
t=P.yI(H.wr(this))
s=P.ic(H.nG(this))
r=P.ic(H.nF(this))
q=P.ic(H.F0(this))
p=P.ic(H.F2(this))
o=P.ic(H.F3(this))
n=P.yJ(H.F1(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
h:function(a,b){return P.yH(C.a.V(this.a,b.gi8()),this.b)},
ghw:function(){return this.a},
d8:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.k(P.dA(this.ghw()))},
$isbF:1,
$asbF:function(){return[P.dF]},
gfK:function(){return this.a}}
P.U.prototype={$isbF:1,
$asbF:function(){return[P.dl]}}
P.dG.prototype={
V:function(a,b){return new P.dG(this.a+b.gbl())},
at:function(a,b){if(typeof b!=="number")return H.a7(b)
return new P.dG(C.d.bz(this.a*b))},
a1:function(a,b){return C.a.a1(this.a,b.gbl())},
aF:function(a,b){return C.a.aF(this.a,b.gbl())},
au:function(a,b){return C.a.au(this.a,b.gbl())},
R:function(a,b){if(b==null)return!1
if(!(b instanceof P.dG))return!1
return this.a===b.a},
ga3:function(a){return this.a&0x1FFFFFFF},
aA:function(a,b){return C.a.aA(this.a,b.gbl())},
A:function(a){var t,s,r,q,p
t=new P.l9()
s=this.a
if(s<0)return"-"+new P.dG(0-s).A(0)
r=t.$1(C.a.ao(s,6e7)%60)
q=t.$1(C.a.ao(s,1e6)%60)
p=new P.l8().$1(s%1e6)
return""+C.a.ao(s,36e8)+":"+H.x(r)+":"+H.x(q)+"."+H.x(p)},
d_:function(a){return new P.dG(0-this.a)},
$isbF:1,
$asbF:function(){return[P.dG]},
gbl:function(){return this.a}}
P.l8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.l9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.B,args:[P.C]}}}
P.eb.prototype={
gaK:function(){return H.ci(this.$thrownJsError)}}
P.fg.prototype={
A:function(a){return"Throw of null."}}
P.cX.prototype={
gci:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcg:function(){return""},
A:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.x(t)
q=this.gci()+s+r
if(!this.a)return q
p=this.gcg()
o=P.vl(this.b)
return q+p+": "+H.x(o)},
gG:function(a){return this.c}}
P.er.prototype={
gci:function(){return"RangeError"},
gcg:function(){var t,s,r
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.x(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.x(t)
else{if(typeof r!=="number")return r.aF()
if(r>t)s=": Not in range "+H.x(t)+".."+H.x(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.x(t)}}return s}}
P.mb.prototype={
gci:function(){return"RangeError"},
gcg:function(){if(J.e7(this.b,0))return": index must not be negative"
var t=this.f
if(J.b_(t,0))return": no indices are valid"
return": index should be less than "+H.x(t)},
gm:function(a){return this.f}}
P.T.prototype={
A:function(a){return"Unsupported operation: "+this.a}}
P.ex.prototype={
A:function(a){var t=this.a
return t!=null?"UnimplementedError: "+H.x(t):"UnimplementedError"}}
P.dP.prototype={
A:function(a){return"Bad state: "+this.a}}
P.bM.prototype={
A:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.x(P.vl(t))+"."}}
P.nn.prototype={
A:function(a){return"Out of Memory"},
gaK:function(){return},
$iseb:1}
P.jK.prototype={
A:function(a){return"Stack Overflow"},
gaK:function(){return},
$iseb:1}
P.l0.prototype={
A:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+H.x(t)+"' during its initialization"}}
P.pY.prototype={
A:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.x(t)}}
P.bJ.prototype={
A:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.c
q=this.b
if(typeof q!=="string")return r!=null?s+(" (at offset "+H.x(r)+")"):s
if(r!=null){if(typeof r!=="number")return r.a1()
t=r<0||r>q.length}else t=!1
if(t)r=null
if(r==null){if(q.length>78)q=C.c.I(q,0,75)+"..."
return s+"\n"+q}if(typeof r!=="number")return H.a7(r)
p=1
o=0
n=!1
m=0
for(;m<r;++m){l=C.c.a2(q,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}s=p>1?s+(" (at line "+p+", character "+H.x(r-o+1)+")\n"):s+(" (at character "+H.x(r+1)+")\n")
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
g=""}f=C.c.I(q,i,j)
return s+h+f+g+"\n"+C.c.at(" ",r-i+h.length)+"^\n"}}
P.li.prototype={
A:function(a){return"Expando:"+H.x(this.a)},
n:function(a,b){var t,s
t=this.bJ
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.aZ(P.dB(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ud(b,"expando$values")
return s==null?null:H.ud(s,t)},
i:function(a,b,c){var t,s
t=this.bJ
if(typeof t!=="string")t.set(b,c)
else{s=H.ud(b,"expando$values")
if(s==null){s=new P.ab()
H.wv(b,"expando$values",s)}H.wv(s,t,c)}},
gG:function(a){return this.a}}
P.C.prototype={$isbF:1,
$asbF:function(){return[P.dl]}}
P.n.prototype={
ax:function(a,b){return H.df(this,b,H.ar(this,"n",0),null)},
aa:function(a,b){var t
for(t=this.gS(this);t.F();)if(J.b_(t.gL(),b))return!0
return!1},
a7:function(a,b){var t
for(t=this.gS(this);t.F();)b.$1(t.gL())},
a0:function(a,b){return P.d1(this,!0,H.ar(this,"n",0))},
ap:function(a){return this.a0(a,!0)},
gm:function(a){var t,s
t=this.gS(this)
for(s=0;t.F();)++s
return s},
gX:function(a){return!this.gS(this).F()},
T:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.k(P.yd("index"))
if(b<0)H.aZ(P.bE(b,0,null,"index",null))
for(t=this.gS(this),s=0;t.F();){r=t.gL()
if(b===s)return r;++s}throw H.k(P.by(b,this,"index",null,s))},
A:function(a){return P.tE(this,"(",")")},
$asn:null}
P.jm.prototype={}
P.p.prototype={$asp:null,$isr:1,$asr:null,$isn:1,$asn:null}
P.bl.prototype={$asbl:null}
P.d3.prototype={
ga3:function(a){return P.ab.prototype.ga3.call(this,this)},
A:function(a){return"null"}}
P.dl.prototype={$isbF:1,
$asbF:function(){return[P.dl]}}
P.ab.prototype={constructor:P.ab,$isab:1,
R:function(a,b){return this===b},
ga3:function(a){return H.en(this)},
A:function(a){return H.nH(this)},
ga8:function(a){return new H.dR(H.ke(this),null)},
toString:function(){return this.A(this)}}
P.d2.prototype={}
P.es.prototype={}
P.dO.prototype={}
P.B.prototype={$isbF:1,
$asbF:function(){return[P.B]},
$isu8:1}
P.c9.prototype={
gm:function(a){return this.N.length},
gX:function(a){return this.N.length===0},
A:function(a){var t=this.N
return t.charCodeAt(0)==0?t:t},
gN:function(){return this.N}}
P.ez.prototype={}
P.pa.prototype={
$2:function(a,b){var t,s,r,q
t=J.b0(b)
s=t.be(b,"=")
if(s===-1){if(!t.R(b,""))J.kf(a,P.qL(b,0,t.gm(b),this.a,!0),"")}else if(s!==0){r=t.I(b,0,s)
q=C.c.ag(b,s+1)
t=this.a
J.kf(a,P.qL(r,0,r.length,t,!0),P.qL(q,0,q.length,t,!0))}return a},
$S:function(){return{func:1,args:[,,]}}}
P.p7.prototype={
$2:function(a,b){throw H.k(new P.bJ("Illegal IPv4 address, "+a,this.a,b))},
$S:function(){return{func:1,v:true,args:[P.B,P.C]}}}
P.p8.prototype={
$2:function(a,b){throw H.k(new P.bJ("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,v:true,args:[P.B],opt:[,]}}}
P.p9.prototype={
$2:function(a,b){var t,s
if(b-a>4)this.b.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
t=H.fi(C.c.I(this.a,a,b),16,null)
s=J.dx(t)
if(s.a1(t,0)||s.aF(t,65535))this.b.$2("each part must be in the range of `0x0..0xFFFF`",a)
return t},
$S:function(){return{func:1,ret:P.C,args:[P.C,P.C]}}}
P.k8.prototype={
geu:function(){return this.b},
gcJ:function(a){var t=this.c
if(t==null)return""
if(C.c.af(t,"["))return C.c.I(t,1,t.length-1)
return t},
gcQ:function(a){var t=this.d
if(t==null)return P.x8(this.a)
return t},
gcR:function(a){var t=this.f
return t==null?"":t},
ge0:function(){var t=this.r
return t==null?"":t},
gcS:function(){var t,s
t=this.Q
if(t==null){t=this.f
s=P.B
s=new P.hP(P.wZ(t==null?"":t,C.n),[s,s])
this.Q=s
t=s}return t},
ge3:function(){return this.c!=null},
ge5:function(){return this.f!=null},
ge4:function(){return this.r!=null},
A:function(a){var t=this.y
if(t==null){t=this.dw()
this.y=t}return t},
dw:function(){var t,s,r,q
t=this.a
s=t.length!==0?t+":":""
r=this.c
q=r==null
if(!q||t==="file"){t=s+"//"
s=this.b
if(s.length!==0)t=t+H.x(s)+"@"
if(!q)t+=r
s=this.d
if(s!=null)t=t+":"+H.x(s)}else t=s
t+=H.x(this.e)
s=this.f
if(s!=null)t=t+"?"+s
s=this.r
if(s!=null)t=t+"#"+s
return t.charCodeAt(0)==0?t:t},
R:function(a,b){var t,s,r
if(b==null)return!1
if(this===b)return!0
t=J.aq(b)
if(!!t.$isez){if(this.a===b.gd0())if(this.c!=null===b.ge3()){s=this.b
r=b.geu()
if(s==null?r==null:s===r){s=this.gcJ(this)
r=t.gcJ(b)
if(s==null?r==null:s===r)if(J.b_(this.gcQ(this),t.gcQ(b)))if(J.b_(this.e,t.gef(b))){s=this.f
r=s==null
if(!r===b.ge5()){if(r)s=""
if(s===t.gcR(b)){t=this.r
s=t==null
if(!s===b.ge4()){if(s)t=""
t=t===b.ge0()}else t=!1}else t=!1}else t=!1}else t=!1
else t=!1
else t=!1}else t=!1}else t=!1
else t=!1
return t}return!1},
ga3:function(a){var t=this.z
if(t==null){t=this.y
if(t==null){t=this.dw()
this.y=t}t=C.c.ga3(t)
this.z=t}return t},
$isez:1,
gd0:function(){return this.a},
gef:function(a){return this.e}}
P.r4.prototype={
$1:function(a){throw H.k(new P.bJ("Invalid port",this.a,this.b+1))},
$S:function(){return{func:1,args:[,]}}}
P.p6.prototype={
ges:function(){var t,s,r,q,p,o,n,m
t=this.c
if(t!=null)return t
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
t=t[0]+1
r=J.b0(s)
q=r.b0(s,"?",t)
p=r.gm(s)
if(q>=0){o=q+1
n=P.fw(s,o,p,C.l,!1)
if(n==null)n=r.I(s,o,p)
p=q}else n=null
m=P.fw(s,t,p,C.D,!1)
t=new P.pM(this,"data",null,null,null,m==null?r.I(s,t,p):m,n,null,null,null,null,null,null)
this.c=t
return t},
A:function(a){var t,s
t=this.b
if(0>=t.length)return H.v(t,0)
s=this.a
return t[0]===-1?"data:"+H.x(s):s}}
P.r_.prototype={
$1:function(a){return new Uint8Array(H.cx(96))},
$S:function(){return{func:1,args:[,]}}}
P.qZ.prototype={
$2:function(a,b){var t=this.a
if(a>=t.length)return H.v(t,a)
t=t[a]
J.xT(t,0,96,b)
return t},
$S:function(){return{func:1,ret:P.d8,args:[,,]}}}
P.r0.prototype={
$3:function(a,b,c){var t,s,r
for(t=b.length,s=J.dk(a),r=0;r<t;++r)s.i(a,C.c.a2(b,r)^96,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.r1.prototype={
$3:function(a,b,c){var t,s,r
for(t=C.c.a2(b,0),s=C.c.a2(b,1),r=J.dk(a);t<=s;++t)r.i(a,(t^96)>>>0,c)},
$S:function(){return{func:1,v:true,args:[P.d8,P.B,P.C]}}}
P.qB.prototype={
ge3:function(){return this.c>0},
ge5:function(){var t=this.f
if(typeof t!=="number")return t.a1()
return t<this.r},
ge4:function(){return this.r<this.a.length},
gd0:function(){var t,s
t=this.b
if(t<=0)return""
s=this.x
if(s!=null)return s
s=t===4
if(s&&C.c.af(this.a,"http")){this.x="http"
t="http"}else if(t===5&&C.c.af(this.a,"https")){this.x="https"
t="https"}else if(s&&C.c.af(this.a,"file")){this.x="file"
t="file"}else if(t===7&&C.c.af(this.a,"package")){this.x="package"
t="package"}else{t=C.c.I(this.a,0,t)
this.x=t}return t},
geu:function(){var t,s
t=this.c
s=this.b+3
return t>s?C.c.I(this.a,s,t-1):""},
gcJ:function(a){var t=this.c
return t>0?C.c.I(this.a,t,this.d):""},
gcQ:function(a){var t,s
if(this.c>0){t=this.d
if(typeof t!=="number")return t.V()
s=this.e
if(typeof s!=="number")return H.a7(s)
s=t+1<s
t=s}else t=!1
if(t){t=this.d
if(typeof t!=="number")return t.V()
return H.fi(C.c.I(this.a,t+1,this.e),null,null)}t=this.b
if(t===4&&C.c.af(this.a,"http"))return 80
if(t===5&&C.c.af(this.a,"https"))return 443
return 0},
gef:function(a){return C.c.I(this.a,this.e,this.f)},
gcR:function(a){var t,s
t=this.f
s=this.r
if(typeof t!=="number")return t.a1()
return t<s?C.c.I(this.a,t+1,s):""},
ge0:function(){var t,s
t=this.r
s=this.a
return t<s.length?C.c.ag(s,t+1):""},
gcS:function(){var t=this.f
if(typeof t!=="number")return t.a1()
if(t>=this.r)return C.a_
t=P.B
return new P.hP(P.wZ(this.gcR(this),C.n),[t,t])},
ga3:function(a){var t=this.y
if(t==null){t=C.c.ga3(this.a)
this.y=t}return t},
R:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
t=J.aq(b)
if(!!t.$isez)return this.a===t.A(b)
return!1},
A:function(a){return this.a},
$isez:1}
P.pM.prototype={}
W.as.prototype={}
W.eK.prototype={
A:function(a){return String(a)},
$iseK:1,
$isf:1,
gad:function(a){return a.href}}
W.km.prototype={
A:function(a){return String(a)},
$isf:1,
gad:function(a){return a.href}}
W.eN.prototype={$iseN:1,$isdp:1,$isaz:1,$isab:1}
W.cI.prototype={$isab:1}
W.ku.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.cI]},
$isr:1,
$asr:function(){return[W.cI]},
$isn:1,
$asn:function(){return[W.cI]},
$isaE:1,
$asaE:function(){return[W.cI]},
$isay:1,
$asay:function(){return[W.cI]}}
W.fY.prototype={
$asp:function(){return[W.cI]},
$asr:function(){return[W.cI]},
$asn:function(){return[W.cI]},
$isp:1,
$isr:1,
$isn:1}
W.h0.prototype={
$asp:function(){return[W.cI]},
$asr:function(){return[W.cI]},
$asn:function(){return[W.cI]},
$isp:1,
$isr:1,
$isn:1}
W.ky.prototype={
gad:function(a){return a.href}}
W.eO.prototype={$iseO:1}
W.kB.prototype={$isf:1}
W.eP.prototype={$iseP:1,
gG:function(a){return a.name}}
W.e9.prototype={$isf:1,
gm:function(a){return a.length}}
W.kI.prototype={
as:function(a,b){return a.get(b)}}
W.kM.prototype={$isf:1}
W.i8.prototype={
cH:function(a,b){return typeof console!="undefined"?console.error(b):null},
aU:function(a){return typeof console!="undefined"?console.group(a):null},
e7:function(a){return typeof console!="undefined"?console.info(a):null},
hZ:function(a){return typeof console!="undefined"?console.warn(a):null}}
W.fS.prototype={
gG:function(a){return a.name}}
W.kQ.prototype={
as:function(a,b){if(b!=null)return a.get(P.GK(b,null))
return a.get()},
bj:function(a){return this.as(a,null)}}
W.kT.prototype={
gaL:function(a){return a.style}}
W.kU.prototype={
gad:function(a){return a.href}}
W.fT.prototype={
gaL:function(a){return a.style}}
W.fU.prototype={
gG:function(a){return a.name}}
W.kV.prototype={
gaL:function(a){return a.style}}
W.bI.prototype={$isbI:1,$isab:1}
W.eS.prototype={
bE:function(a,b){var t=this.fi(a,b)
return t!=null?t:""},
fi:function(a,b){if(W.yG(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.yK()+b)},
H:function(a,b){return a.item(b)},
gbd:function(a){return a.content},
gbr:function(a){return a.display},
sbr:function(a,b){a.display=b},
gm:function(a){return a.length}}
W.iC.prototype={}
W.pK.prototype={
bE:function(a,b){var t=this.b
return J.y3(t.gac(t),b)},
fH:function(a,b){var t
for(t=this.a,t=new H.dL(t,t.gm(t),0,null,[H.P(t,0)]);t.F();)t.d.style[a]=b},
sbr:function(a,b){this.fH("display",b)},
eY:function(a){var t=P.d1(this.a,!0,null)
this.b=new H.fd(t,new W.pL(),[H.P(t,0),null])}}
W.jx.prototype={}
W.pL.prototype={
$1:function(a){return J.rC(a)},
$S:function(){return{func:1,args:[,]}}}
W.ia.prototype={
gbd:function(a){return this.bE(a,"content")},
gbr:function(a){return this.bE(a,"display")}}
W.kW.prototype={
gaL:function(a){return a.style}}
W.kX.prototype={
gaL:function(a){return a.style}}
W.l1.prototype={
gcI:function(a){return a.files}}
W.eT.prototype={$iseT:1,$isab:1}
W.ib.prototype={
bQ:function(a,b,c){return a.add(b,c)},
h:function(a,b){return a.add(b)},
H:function(a,b){return a.item(b)},
n:function(a,b){return a[b]},
gm:function(a){return a.length}}
W.fV.prototype={$isfV:1}
W.ea.prototype={$isea:1}
W.id.prototype={$isf:1}
W.ie.prototype={
gG:function(a){return a.name}}
W.l4.prototype={
gG:function(a){var t=a.name
if(P.vk()===!0&&t==="SECURITY_ERR")return"SecurityError"
if(P.vk()===!0&&t==="SYNTAX_ERR")return"SyntaxError"
return t},
A:function(a){return String(a)}}
W.ig.prototype={
A:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(this.gb7(a))+" x "+H.x(this.gb_(a))},
R:function(a,b){var t
if(b==null)return!1
t=J.aq(b)
if(!t.$isbS)return!1
return a.left===t.gbZ(b)&&a.top===t.gc3(b)&&this.gb7(a)===t.gb7(b)&&this.gb_(a)===t.gb_(b)},
ga3:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gb7(a)
q=this.gb_(a)
return W.x7(W.eG(W.eG(W.eG(W.eG(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gb_:function(a){return a.height},
gbZ:function(a){return a.left},
gc3:function(a){return a.top},
gb7:function(a){return a.width},
$isbS:1,
$asbS:function(){}}
W.ih.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]},
$isaE:1,
$asaE:function(){return[P.B]},
$isay:1,
$asay:function(){return[P.B]}}
W.iD.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$isr:1,
$isn:1}
W.iX.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$isr:1,
$isn:1}
W.ii.prototype={
H:function(a,b){return a.item(b)}}
W.ij.prototype={
h:function(a,b){return a.add(b)},
aa:function(a,b){return a.contains(b)},
H:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.jZ.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot modify list"))},
sm:function(a,b){throw H.k(new P.T("Cannot modify list"))},
gaL:function(a){return W.G1(this)},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.dp.prototype={
gdU:function(a){return new W.pS(a)},
A:function(a){return a.localName},
e8:function(a,b,c,d,e){a.insertAdjacentHTML(b,c)},
ged:function(a){return new W.eE(a,"click",!1,[W.u_])},
$isdp:1,
$isaz:1,
$isab:1,
$isf:1,
gaL:function(a){return a.style}}
W.la.prototype={
gG:function(a){return a.name},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.fX.prototype={
gG:function(a){return a.name}}
W.lg.prototype={
gar:function(a){return a.error}}
W.Q.prototype={$isQ:1,$isab:1}
W.aF.prototype={
fO:function(a,b,c,d){if(c!=null)this.f2(a,b,c,!1)},
hP:function(a,b,c,d){if(c!=null)this.fE(a,b,c,!1)},
f2:function(a,b,c,d){return a.addEventListener(b,H.dj(c,1),!1)},
fE:function(a,b,c,d){return a.removeEventListener(b,H.dj(c,1),!1)}}
W.lJ.prototype={
gG:function(a){return a.name}}
W.cc.prototype={$iscc:1,$isab:1,
gG:function(a){return a.name}}
W.f1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isf1:1,
$isaE:1,
$asaE:function(){return[W.cc]},
$isay:1,
$asay:function(){return[W.cc]},
$isp:1,
$asp:function(){return[W.cc]},
$isr:1,
$asr:function(){return[W.cc]},
$isn:1,
$asn:function(){return[W.cc]}}
W.iE.prototype={
$asp:function(){return[W.cc]},
$asr:function(){return[W.cc]},
$asn:function(){return[W.cc]},
$isp:1,
$isr:1,
$isn:1}
W.iY.prototype={
$asp:function(){return[W.cc]},
$asr:function(){return[W.cc]},
$asn:function(){return[W.cc]},
$isp:1,
$isr:1,
$isn:1}
W.lK.prototype={
gar:function(a){return a.error}}
W.lL.prototype={
gG:function(a){return a.name}}
W.lM.prototype={
gar:function(a){return a.error},
gm:function(a){return a.length}}
W.lP.prototype={
gaL:function(a){return a.style},
gb6:function(a){return a.weight}}
W.lQ.prototype={
h:function(a,b){return a.add(b)},
i7:function(a,b,c){return a.forEach(H.dj(b,3),c)},
a7:function(a,b){b=H.dj(b,3)
return a.forEach(b)}}
W.lS.prototype={
as:function(a,b){return a.get(b)}}
W.iy.prototype={
H:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.cl.prototype={$iscl:1,$isab:1}
W.m0.prototype={
gm:function(a){return a.length}}
W.f3.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.az]},
$isr:1,
$asr:function(){return[W.az]},
$isn:1,
$asn:function(){return[W.az]},
$isaE:1,
$asaE:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iF.prototype={
$asp:function(){return[W.az]},
$asr:function(){return[W.az]},
$asn:function(){return[W.az]},
$isp:1,
$isr:1,
$isn:1}
W.iZ.prototype={
$asp:function(){return[W.az]},
$asr:function(){return[W.az]},
$asn:function(){return[W.az]},
$isp:1,
$isr:1,
$isn:1}
W.iA.prototype={
H:function(a,b){return a.item(b)}}
W.e_.prototype={
ii:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
hB:function(a,b,c,d){return a.open(b,c,d)},
ghS:function(a){return W.Gq(a.response)},
b8:function(a,b){return a.send(b)},
$ise_:1,
$isab:1,
ghT:function(a){return a.responseText}}
W.m3.prototype={
$1:function(a){return J.y_(a)},
$S:function(){return{func:1,args:[W.e_]}}}
W.m4.prototype={
$1:function(a){var t,s,r,q,p
t=this.b
s=t.status
if(typeof s!=="number")return s.au()
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.a
if(s)p.aB(0,t)
else p.bp(a)},
$S:function(){return{func:1,args:[,]}}}
W.hd.prototype={}
W.m7.prototype={
gG:function(a){return a.name},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.he.prototype={$ishe:1}
W.f5.prototype={$isf5:1,$isdp:1,$isaz:1,$isab:1,
aB:function(a,b){return a.complete.$1(b)},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.mc.prototype={$isf:1,
gcI:function(a){return a.files},
gG:function(a){return a.name},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.mA.prototype={
gG:function(a){return a.name}}
W.hm.prototype={
h:function(a,b){return a.add(b)}}
W.hn.prototype={$ishn:1,
gad:function(a){return a.href}}
W.mS.prototype={
A:function(a){return String(a)},
gad:function(a){return a.href}}
W.mX.prototype={
gG:function(a){return a.name}}
W.ht.prototype={
gar:function(a){return a.error},
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.jr.prototype={
H:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.n1.prototype={
gbd:function(a){return a.content},
gG:function(a){return a.name}}
W.n2.prototype={
i3:function(a,b,c){return a.send(b,c)},
b8:function(a,b){return a.send(b)}}
W.hu.prototype={
gG:function(a){return a.name}}
W.cn.prototype={$iscn:1,$isab:1}
W.js.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cn]},
$isay:1,
$asay:function(){return[W.cn]},
$isp:1,
$asp:function(){return[W.cn]},
$isr:1,
$asr:function(){return[W.cn]},
$isn:1,
$asn:function(){return[W.cn]}}
W.iP.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.j8.prototype={
$asp:function(){return[W.cn]},
$asr:function(){return[W.cn]},
$asn:function(){return[W.cn]},
$isp:1,
$isr:1,
$isn:1}
W.nf.prototype={$isf:1}
W.ng.prototype={
gG:function(a){return a.name}}
W.az.prototype={
A:function(a){var t=a.nodeValue
return t==null?this.eK(a):t},
aa:function(a,b){return a.contains(b)},
$isaz:1,
$isab:1}
W.jv.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isp:1,
$asp:function(){return[W.az]},
$isr:1,
$asr:function(){return[W.az]},
$isn:1,
$asn:function(){return[W.az]},
$isaE:1,
$asaE:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iQ.prototype={
$asp:function(){return[W.az]},
$asr:function(){return[W.az]},
$asn:function(){return[W.az]},
$isp:1,
$isr:1,
$isn:1}
W.j9.prototype={
$asp:function(){return[W.az]},
$asr:function(){return[W.az]},
$asn:function(){return[W.az]},
$isp:1,
$isr:1,
$isn:1}
W.nj.prototype={
gG:function(a){return a.name}}
W.no.prototype={
gG:function(a){return a.name}}
W.ns.prototype={
gG:function(a){return a.name}}
W.nu.prototype={$isf:1}
W.e1.prototype={
gG:function(a){return a.name}}
W.nz.prototype={
gm:function(a){return a.length}}
W.ce.prototype={
H:function(a,b){return a.item(b)},
$isce:1,
$isab:1,
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.jC.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.ce]},
$isr:1,
$asr:function(){return[W.ce]},
$isn:1,
$asn:function(){return[W.ce]},
$isaE:1,
$asaE:function(){return[W.ce]},
$isay:1,
$asay:function(){return[W.ce]}}
W.iR.prototype={
$asp:function(){return[W.ce]},
$asr:function(){return[W.ce]},
$asn:function(){return[W.ce]},
$isp:1,
$isr:1,
$isn:1}
W.ja.prototype={
$asp:function(){return[W.ce]},
$asr:function(){return[W.ce]},
$asn:function(){return[W.ce]},
$isp:1,
$isr:1,
$isn:1}
W.nE.prototype={
b8:function(a,b){return a.send(b)}}
W.jE.prototype={
b8:function(a,b){return a.send(b)}}
W.fl.prototype={$isfl:1,$isdp:1,$isaz:1,$isab:1,
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.jF.prototype={
H:function(a,b){return a.item(b)},
gm:function(a){return a.length},
gG:function(a){return a.name}}
W.o0.prototype={
gG:function(a){return a.name}}
W.o3.prototype={$isf:1}
W.o4.prototype={
gG:function(a){return a.name}}
W.o5.prototype={
gG:function(a){return a.name}}
W.co.prototype={$isco:1,$isab:1}
W.jH.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.co]},
$isr:1,
$asr:function(){return[W.co]},
$isn:1,
$asn:function(){return[W.co]},
$isaE:1,
$asaE:function(){return[W.co]},
$isay:1,
$asay:function(){return[W.co]}}
W.fZ.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.h1.prototype={
$asp:function(){return[W.co]},
$asr:function(){return[W.co]},
$asn:function(){return[W.co]},
$isp:1,
$isr:1,
$isn:1}
W.o8.prototype={
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.hH.prototype={$ishH:1}
W.cp.prototype={$iscp:1,$isab:1,
gb6:function(a){return a.weight}}
W.jI.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cp]},
$isr:1,
$asr:function(){return[W.cp]},
$isn:1,
$asn:function(){return[W.cp]},
$isaE:1,
$asaE:function(){return[W.cp]},
$isay:1,
$asay:function(){return[W.cp]}}
W.iS.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.jb.prototype={
$asp:function(){return[W.cp]},
$asr:function(){return[W.cp]},
$asn:function(){return[W.cp]},
$isp:1,
$isr:1,
$isn:1}
W.fm.prototype={$isfm:1,$isab:1}
W.oa.prototype={
gar:function(a){return a.error}}
W.cg.prototype={
H:function(a,b){return a.item(b)},
$iscg:1,
$isab:1,
gm:function(a){return a.length}}
W.ob.prototype={
gG:function(a){return a.name}}
W.oc.prototype={
gG:function(a){return a.name}}
W.og.prototype={
n:function(a,b){return a.getItem(b)},
i:function(a,b,c){a.setItem(b,c)},
a7:function(a,b){var t,s
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
b.$2(s,a.getItem(s))}},
gm:function(a){return a.length},
gX:function(a){return a.key(0)==null},
$isbl:1,
$asbl:function(){return[P.B,P.B]}}
W.oD.prototype={
as:function(a,b){return a.get(b)}}
W.ch.prototype={$isch:1,$isab:1,
gad:function(a){return a.href}}
W.e3.prototype={}
W.oK.prototype={
gbd:function(a){return a.content}}
W.hM.prototype={$ishM:1,
gG:function(a){return a.name}}
W.cO.prototype={$isab:1}
W.cF.prototype={$isab:1}
W.oR.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cF]},
$isay:1,
$asay:function(){return[W.cF]},
$isp:1,
$asp:function(){return[W.cF]},
$isr:1,
$asr:function(){return[W.cF]},
$isn:1,
$asn:function(){return[W.cF]}}
W.iT.prototype={
$asp:function(){return[W.cF]},
$asr:function(){return[W.cF]},
$asn:function(){return[W.cF]},
$isp:1,
$isr:1,
$isn:1}
W.jc.prototype={
$asp:function(){return[W.cF]},
$asr:function(){return[W.cF]},
$asn:function(){return[W.cF]},
$isp:1,
$isr:1,
$isn:1}
W.oS.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
$isaE:1,
$asaE:function(){return[W.cO]},
$isay:1,
$asay:function(){return[W.cO]},
$isp:1,
$asp:function(){return[W.cO]},
$isr:1,
$asr:function(){return[W.cO]},
$isn:1,
$asn:function(){return[W.cO]}}
W.h_.prototype={
$asp:function(){return[W.cO]},
$asr:function(){return[W.cO]},
$asn:function(){return[W.cO]},
$isp:1,
$isr:1,
$isn:1}
W.h2.prototype={
$asp:function(){return[W.cO]},
$asr:function(){return[W.cO]},
$asn:function(){return[W.cO]},
$isp:1,
$isr:1,
$isn:1}
W.oW.prototype={
gm:function(a){return a.length}}
W.cr.prototype={$iscr:1,$isab:1}
W.jM.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cr]},
$isr:1,
$asr:function(){return[W.cr]},
$isn:1,
$asn:function(){return[W.cr]},
$isaE:1,
$asaE:function(){return[W.cr]},
$isay:1,
$asay:function(){return[W.cr]}}
W.iU.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.jd.prototype={
$asp:function(){return[W.cr]},
$asr:function(){return[W.cr]},
$asn:function(){return[W.cr]},
$isp:1,
$isr:1,
$isn:1}
W.fq.prototype={$isfq:1,$isab:1}
W.jN.prototype={
H:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.p_.prototype={
gai:function(a){return a.src},
sai:function(a,b){return a.src=b}}
W.e4.prototype={}
W.pb.prototype={
A:function(a){return String(a)},
$isf:1,
gad:function(a){return a.href}}
W.pc.prototype={
as:function(a,b){return a.get(b)}}
W.pg.prototype={
gm:function(a){return a.length}}
W.fr.prototype={$isfr:1,$isab:1}
W.jO.prototype={
H:function(a,b){return a.item(b)},
gm:function(a){return a.length}}
W.pl.prototype={
b8:function(a,b){return a.send(b)}}
W.jR.prototype={$isf:1,
gG:function(a){return a.name}}
W.ps.prototype={$isf:1}
W.eB.prototype={$isf:1}
W.fs.prototype={$isfs:1,$isaz:1,$isab:1,
gG:function(a){return a.name}}
W.pJ.prototype={
A:function(a){return"Rectangle ("+H.x(a.left)+", "+H.x(a.top)+") "+H.x(a.width)+" x "+H.x(a.height)},
R:function(a,b){var t,s,r
if(b==null)return!1
t=J.aq(b)
if(!t.$isbS)return!1
s=a.left
r=t.gbZ(b)
if(s==null?r==null:s===r){s=a.top
r=t.gc3(b)
if(s==null?r==null:s===r){s=a.width
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.height
t=t.gb_(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
ga3:function(a){var t,s,r,q
t=J.dz(a.left)
s=J.dz(a.top)
r=J.dz(a.width)
q=J.dz(a.height)
return W.x7(W.eG(W.eG(W.eG(W.eG(0,t),s),r),q))},
$isbS:1,
$asbS:function(){},
gb_:function(a){return a.height},
gbZ:function(a){return a.left},
gc3:function(a){return a.top},
gb7:function(a){return a.width}}
W.hU.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[P.bS]},
$isay:1,
$asay:function(){return[P.bS]},
$isp:1,
$asp:function(){return[P.bS]},
$isr:1,
$asr:function(){return[P.bS]},
$isn:1,
$asn:function(){return[P.bS]}}
W.iV.prototype={
$asp:function(){return[P.bS]},
$asr:function(){return[P.bS]},
$asn:function(){return[P.bS]},
$isp:1,
$isr:1,
$isn:1}
W.je.prototype={
$asp:function(){return[P.bS]},
$asr:function(){return[P.bS]},
$asn:function(){return[P.bS]},
$isp:1,
$isr:1,
$isn:1}
W.jX.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.bI]},
$isr:1,
$asr:function(){return[W.bI]},
$isn:1,
$asn:function(){return[W.bI]},
$isaE:1,
$asaE:function(){return[W.bI]},
$isay:1,
$asay:function(){return[W.bI]}}
W.iW.prototype={
$asp:function(){return[W.bI]},
$asr:function(){return[W.bI]},
$asn:function(){return[W.bI]},
$isp:1,
$isr:1,
$isn:1}
W.jf.prototype={
$asp:function(){return[W.bI]},
$asr:function(){return[W.bI]},
$asn:function(){return[W.bI]},
$isp:1,
$isr:1,
$isn:1}
W.pQ.prototype={$isf:1}
W.pR.prototype={
gb_:function(a){return a.height},
gb7:function(a){return a.width}}
W.k0.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.cl]},
$isay:1,
$asay:function(){return[W.cl]},
$isp:1,
$asp:function(){return[W.cl]},
$isr:1,
$asr:function(){return[W.cl]},
$isn:1,
$asn:function(){return[W.cl]}}
W.iG.prototype={
$asp:function(){return[W.cl]},
$asr:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isp:1,
$isr:1,
$isn:1}
W.j_.prototype={
$asp:function(){return[W.cl]},
$asr:function(){return[W.cl]},
$asn:function(){return[W.cl]},
$isp:1,
$isr:1,
$isn:1}
W.qb.prototype={$isf:1}
W.hZ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.az]},
$isr:1,
$asr:function(){return[W.az]},
$isn:1,
$asn:function(){return[W.az]},
$isaE:1,
$asaE:function(){return[W.az]},
$isay:1,
$asay:function(){return[W.az]}}
W.iH.prototype={
$asp:function(){return[W.az]},
$asr:function(){return[W.az]},
$asn:function(){return[W.az]},
$isp:1,
$isr:1,
$isn:1}
W.j0.prototype={
$asp:function(){return[W.az]},
$asr:function(){return[W.az]},
$asn:function(){return[W.az]},
$isp:1,
$isr:1,
$isn:1}
W.qA.prototype={$isf:1}
W.k4.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isp:1,
$asp:function(){return[W.cg]},
$isr:1,
$asr:function(){return[W.cg]},
$isn:1,
$asn:function(){return[W.cg]},
$isaE:1,
$asaE:function(){return[W.cg]},
$isay:1,
$asay:function(){return[W.cg]}}
W.iI.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.j1.prototype={
$asp:function(){return[W.cg]},
$asr:function(){return[W.cg]},
$asn:function(){return[W.cg]},
$isp:1,
$isr:1,
$isn:1}
W.k6.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){if(b>>>0!==b||b>=a.length)return H.v(a,b)
return a[b]},
H:function(a,b){return a.item(b)},
$isaE:1,
$asaE:function(){return[W.ch]},
$isay:1,
$asay:function(){return[W.ch]},
$isp:1,
$asp:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$isn:1,
$asn:function(){return[W.ch]}}
W.iJ.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.j2.prototype={
$asp:function(){return[W.ch]},
$asr:function(){return[W.ch]},
$asn:function(){return[W.ch]},
$isp:1,
$isr:1,
$isn:1}
W.qQ.prototype={$isf:1}
W.qR.prototype={$isf:1}
W.pS.prototype={
aD:function(){var t,s,r,q,p
t=P.a3(null,null,null,P.B)
for(s=this.a.className.split(" "),r=s.length,q=0;q<s.length;s.length===r||(0,H.bT)(s),++q){p=J.rF(s[q])
if(p.length!==0)t.h(0,p)}return t},
cY:function(a){this.a.className=a.bf(0," ")},
gm:function(a){return this.a.classList.length},
gX:function(a){return this.a.classList.length===0},
aa:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
h:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
ae:function(a,b){var t,s
t=this.a.classList
s=t.contains(b)
t.remove(b)
return s}}
W.pV.prototype={
aQ:function(a,b,c,d){return W.e5(this.a,this.b,a,!1,H.P(this,0))},
eb:function(a,b,c){return this.aQ(a,null,b,c)}}
W.eE.prototype={}
W.pW.prototype={
bU:function(a){if(this.b==null)return
this.dR()
this.b=null
this.d=null
return},
cO:function(a,b){if(this.b==null)return;++this.a
this.dR()},
eg:function(a){return this.cO(a,null)},
el:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dP()},
dP:function(){var t=this.d
if(t!=null&&this.a<=0)J.xN(this.b,this.c,t,!1)},
dR:function(){var t=this.d
if(t!=null)J.y6(this.b,this.c,t,!1)},
eZ:function(a,b,c,d,e){this.dP()}}
W.pX.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bx.prototype={
gS:function(a){return new W.lO(a,this.gm(a),-1,null,[H.ar(a,"bx",0)])},
h:function(a,b){throw H.k(new P.T("Cannot add to immutable List."))},
a6:function(a,b,c,d,e){throw H.k(new P.T("Cannot setRange on immutable List."))},
az:function(a,b,c,d){return this.a6(a,b,c,d,0)},
aE:function(a,b,c,d){throw H.k(new P.T("Cannot modify an immutable List."))},
bX:function(a,b,c,d){throw H.k(new P.T("Cannot modify an immutable List."))},
$isp:1,
$asp:null,
$isr:1,
$asr:null,
$isn:1,
$asn:null}
W.lO.prototype={
F:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.d=J.fC(this.a,t)
this.c=t
return!0}this.d=null
this.c=s
return!1},
gL:function(){return this.d}}
W.qJ.prototype={}
P.qG.prototype={
bt:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
t.push(a)
this.b.push(null)
return s},
b5:function(a){var t,s,r,q,p,o
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.aq(a)
if(!!s.$isdF)return new Date(a.a)
if(!!s.$isFl)throw H.k(new P.ex("structured clone of RegExp"))
if(!!s.$iscc)return a
if(!!s.$iseO)return a
if(!!s.$isf1)return a
if(!!s.$ishe)return a
if(!!s.$isfe||!!s.$isem)return a
if(!!s.$isbl){r=this.bt(a)
q=this.b
p=q.length
if(r>=p)return H.v(q,r)
o=q[r]
t.a=o
if(o!=null)return o
o={}
t.a=o
if(r>=p)return H.v(q,r)
q[r]=o
s.a7(a,new P.qI(t,this))
return t.a}if(!!s.$isp){r=this.bt(a)
t=this.b
if(r>=t.length)return H.v(t,r)
o=t[r]
if(o!=null)return o
return this.h_(a,r)}throw H.k(new P.ex("structured clone of other type"))},
h_:function(a,b){var t,s,r,q,p
t=J.b0(a)
s=t.gm(a)
r=new Array(s)
q=this.b
if(b>=q.length)return H.v(q,b)
q[b]=r
for(p=0;p<s;++p){q=this.b5(t.n(a,p))
if(p>=r.length)return H.v(r,p)
r[p]=q}return r}}
P.qI.prototype={
$2:function(a,b){this.a.a[a]=this.b.b5(b)},
$S:function(){return{func:1,args:[,,]}}}
P.pz.prototype={
bt:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}t.push(a)
this.b.push(null)
return s},
b5:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.dF(s,!0)
r.d8(s,!0)
return r}if(a instanceof RegExp)throw H.k(new P.ex("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.GL(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.bt(a)
r=this.b
o=r.length
if(p>=o)return H.v(r,p)
n=r[p]
t.a=n
if(n!=null)return n
n=P.mK()
t.a=n
if(p>=o)return H.v(r,p)
r[p]=n
this.hd(a,new P.pA(t,this))
return t.a}if(a instanceof Array){p=this.bt(a)
r=this.b
if(p>=r.length)return H.v(r,p)
n=r[p]
if(n!=null)return n
o=J.b0(a)
m=o.gm(a)
n=this.c?new Array(m):a
if(p>=r.length)return H.v(r,p)
r[p]=n
if(typeof m!=="number")return H.a7(m)
r=J.dk(n)
l=0
for(;l<m;++l)r.i(n,l,this.b5(o.n(a,l)))
return n}return a}}
P.pA.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b5(b)
J.kf(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.r7.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.B,,]}}}
P.qH.prototype={}
P.jT.prototype={
hd:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.r8.prototype={
$1:function(a){return this.a.aB(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.r9.prototype={
$1:function(a){return this.a.bp(a)},
$S:function(){return{func:1,args:[,]}}}
P.kR.prototype={
cw:function(a){if($.$get$vc().b.test(a))return a
throw H.k(P.dB(a,"value","Not a valid class token"))},
A:function(a){return this.aD().bf(0," ")},
gS:function(a){var t,s
t=this.aD()
s=new P.dv(t,t.r,null,null,[null])
s.c=t.e
return s},
a7:function(a,b){this.aD().a7(0,b)},
ax:function(a,b){var t=this.aD()
return new H.fW(t,b,[H.P(t,0),null])},
gX:function(a){return this.aD().a===0},
gm:function(a){return this.aD().a},
aa:function(a,b){if(typeof b!=="string")return!1
this.cw(b)
return this.aD().aa(0,b)},
cM:function(a){return this.aa(0,a)?a:null},
h:function(a,b){this.cw(b)
return this.hx(0,new P.kS(b))},
ae:function(a,b){var t,s
this.cw(b)
t=this.aD()
s=t.ae(0,b)
this.cY(t)
return s},
a0:function(a,b){return this.aD().a0(0,!0)},
ap:function(a){return this.a0(a,!0)},
hx:function(a,b){var t,s
t=this.aD()
s=b.$1(t)
this.cY(t)
return s},
$ises:1,
$ases:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]}}
P.kS.prototype={
$1:function(a){return a.h(0,this.a)},
$S:function(){return{func:1,args:[,]}}}
P.l2.prototype={
gG:function(a){return a.name}}
P.qY.prototype={
$1:function(a){this.b.aB(0,new P.jT([],[],!1).b5(this.a.result))},
$S:function(){return{func:1,args:[,]}}}
P.ma.prototype={
as:function(a,b){var t,s,r,q,p
try{t=a.get(b)
q=P.xh(t)
return q}catch(p){s=H.cj(p)
r=H.ci(p)
q=P.ta(s,r,null)
return q}},
gG:function(a){return a.name}}
P.nk.prototype={
bQ:function(a,b,c){var t,s,r,q,p
try{t=null
t=this.fq(a,b,c)
q=P.xh(t)
return q}catch(p){s=H.cj(p)
r=H.ci(p)
q=P.ta(s,r,null)
return q}},
h:function(a,b){return this.bQ(a,b,null)},
fq:function(a,b,c){return a.add(new P.qH([],[]).b5(b))},
gG:function(a){return a.name}}
P.hF.prototype={
gar:function(a){return a.error}}
P.p0.prototype={
gar:function(a){return a.error}}
P.qi.prototype={
bx:function(a){if(a<=0||a>4294967296)throw H.k(P.wA("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
c_:function(){return Math.random()}}
P.qr.prototype={
aW:function(){var t,s,r,q,p,o
t=this.a
s=4294901760*t
r=(s&4294967295)>>>0
q=55905*t
p=(q&4294967295)>>>0
o=p+r+this.b
t=(o&4294967295)>>>0
this.a=t
this.b=(C.a.ao(q-p+(s-r)+(o-t),4294967296)&4294967295)>>>0},
bx:function(a){var t,s,r
if(a<=0||a>4294967296)throw H.k(P.wA("max must be in range 0 < max \u2264 2^32, was "+a))
t=a-1
if((a&t)>>>0===0){this.aW()
return(this.a&t)>>>0}do{this.aW()
s=this.a
r=s%a}while(s-r+a>=4294967296)
return r},
c_:function(){this.aW()
var t=this.a
this.aW()
return((t&67108863)*134217728+(this.a&134217727))/9007199254740992},
f0:function(a){var t,s,r,q,p,o,n,m
t=J.e7(a,0)?-1:0
do{if(typeof a!=="number")return a.aJ()
s=(a&4294967295)>>>0
a=C.d.ao(a-s,4294967296)
r=(a&4294967295)>>>0
a=C.d.ao(a-r,4294967296)
q=((~s&4294967295)>>>0)+(s<<21>>>0)
p=(q&4294967295)>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.a.ao(q-p,4294967296)&4294967295
q=((p^(p>>>24|r<<8))>>>0)*265
s=(q&4294967295)>>>0
r=((r^r>>>24)>>>0)*265+C.a.ao(q-s,4294967296)&4294967295
q=((s^(s>>>14|r<<18))>>>0)*21
s=(q&4294967295)>>>0
r=((r^r>>>14)>>>0)*21+C.a.ao(q-s,4294967296)&4294967295
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=(q&4294967295)>>>0
o=C.a.ao(q-p,4294967296)
q=this.a*1037
n=(q&4294967295)>>>0
this.a=n
m=(this.b*1037+C.a.ao(q-n,4294967296)&4294967295)>>>0
this.b=m
n=(n^p)>>>0
this.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o&4294967295)>>>0
this.b=o}while(a!==t)
if(o===0&&n===0)this.a=23063
this.aW()
this.aW()
this.aW()
this.aW()}}
P.qs.prototype={}
P.bS.prototype={$asbS:null}
P.kj.prototype={$isf:1,
gad:function(a){return a.href}}
P.e8.prototype={$isf:1}
P.lj.prototype={$isf:1}
P.lk.prototype={$isf:1}
P.ll.prototype={$isf:1}
P.lm.prototype={$isf:1}
P.ln.prototype={$isf:1}
P.lo.prototype={$isf:1}
P.lp.prototype={$isf:1}
P.lq.prototype={$isf:1}
P.lr.prototype={$isf:1}
P.ls.prototype={$isf:1,
gad:function(a){return a.href}}
P.lt.prototype={$isf:1}
P.lu.prototype={$isf:1}
P.lv.prototype={$isf:1}
P.lw.prototype={$isf:1}
P.lx.prototype={$isf:1}
P.ly.prototype={$isf:1}
P.lN.prototype={$isf:1,
gad:function(a){return a.href}}
P.cm.prototype={$isf:1}
P.m8.prototype={$isf:1,
gad:function(a){return a.href}}
P.d0.prototype={$isab:1}
P.mD.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d0]},
$isr:1,
$asr:function(){return[P.d0]},
$isn:1,
$asn:function(){return[P.d0]}}
P.iK.prototype={
$asp:function(){return[P.d0]},
$asr:function(){return[P.d0]},
$asn:function(){return[P.d0]},
$isp:1,
$isr:1,
$isn:1}
P.j3.prototype={
$asp:function(){return[P.d0]},
$asr:function(){return[P.d0]},
$asn:function(){return[P.d0]},
$isp:1,
$isr:1,
$isn:1}
P.n_.prototype={$isf:1}
P.n0.prototype={$isf:1}
P.d4.prototype={$isab:1}
P.nh.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
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
P.nx.prototype={$isf:1,
gad:function(a){return a.href}}
P.nC.prototype={
gm:function(a){return a.length}}
P.nY.prototype={$isf:1,
gad:function(a){return a.href}}
P.oB.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.B]},
$isr:1,
$asr:function(){return[P.B]},
$isn:1,
$asn:function(){return[P.B]}}
P.iM.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$isr:1,
$isn:1}
P.j5.prototype={
$asp:function(){return[P.B]},
$asr:function(){return[P.B]},
$asn:function(){return[P.B]},
$isp:1,
$isr:1,
$isn:1}
P.kq.prototype={
aD:function(){var t,s,r,q,p,o
t=this.a.getAttribute("class")
s=P.a3(null,null,null,P.B)
if(t==null)return s
for(r=t.split(" "),q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=J.rF(r[p])
if(o.length!==0)s.h(0,o)}return s},
cY:function(a){this.a.setAttribute("class",a.bf(0," "))}}
P.ca.prototype={
gdU:function(a){return new P.kq(a)},
e8:function(a,b,c,d,e){throw H.k(new P.T("Cannot invoke insertAdjacentHtml on SVG."))},
ged:function(a){return new W.eE(a,"click",!1,[W.u_])},
$isf:1}
P.oF.prototype={$isf:1}
P.oH.prototype={$isf:1}
P.ew.prototype={}
P.oQ.prototype={$isf:1,
gad:function(a){return a.href}}
P.d7.prototype={$isab:1}
P.p1.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
$isp:1,
$asp:function(){return[P.d7]},
$isr:1,
$asr:function(){return[P.d7]},
$isn:1,
$asn:function(){return[P.d7]}}
P.iN.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.j6.prototype={
$asp:function(){return[P.d7]},
$asr:function(){return[P.d7]},
$asn:function(){return[P.d7]},
$isp:1,
$isr:1,
$isn:1}
P.pd.prototype={$isf:1,
gad:function(a){return a.href}}
P.ph.prototype={$isf:1}
P.pi.prototype={$isf:1}
P.hX.prototype={$isf:1,
gad:function(a){return a.href}}
P.qx.prototype={$isf:1}
P.qy.prototype={$isf:1}
P.qz.prototype={$isf:1}
P.bg.prototype={}
P.d8.prototype={$isp:1,
$asp:function(){return[P.C]},
$isr:1,
$asr:function(){return[P.C]},
$isn:1,
$asn:function(){return[P.C]}}
P.fJ.prototype={$isfJ:1,$isab:1,
gm:function(a){return a.length}}
P.eM.prototype={$iseM:1,$isab:1,
gbT:function(a){return a.buffer}}
P.fK.prototype={
fb:function(a,b,c,d){return a.decodeAudioData(b,H.dj(c,1),H.dj(d,1))},
h0:function(a,b){var t,s,r
t=P.fJ
s=new P.bj(0,$.am,null,[t])
r=new P.dT(s,[t])
this.fb(a,b,new P.kr(r),new P.ks(r))
return s}}
P.kr.prototype={
$1:function(a){this.a.aB(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.ks.prototype={
$1:function(a){var t=this.a
if(a==null)t.bp("")
else t.bp(a)},
$S:function(){return{func:1,args:[,]}}}
P.bC.prototype={}
P.dX.prototype={}
P.kP.prototype={
gbT:function(a){return a.buffer}}
P.kl.prototype={
gG:function(a){return a.name}}
P.nP.prototype={$isf:1}
P.qP.prototype={$isf:1}
P.jJ.prototype={
gm:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.k(P.by(b,a,null,null,null))
return P.xy(a.item(b))},
i:function(a,b,c){throw H.k(new P.T("Cannot assign element of immutable List."))},
sm:function(a,b){throw H.k(new P.T("Cannot resize immutable List."))},
T:function(a,b){return this.n(a,b)},
H:function(a,b){return P.xy(a.item(b))},
$isp:1,
$asp:function(){return[P.bl]},
$isr:1,
$asr:function(){return[P.bl]},
$isn:1,
$asn:function(){return[P.bl]}}
P.iO.prototype={
$asp:function(){return[P.bl]},
$asr:function(){return[P.bl]},
$asn:function(){return[P.bl]},
$isp:1,
$isr:1,
$isn:1}
P.j7.prototype={
$asp:function(){return[P.bl]},
$asr:function(){return[P.bl]},
$asn:function(){return[P.bl]},
$isp:1,
$isr:1,
$isn:1}
T.fF.prototype={
gm:function(a){return this.a.length},
n:function(a,b){var t=this.a
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return t[b]},
gX:function(a){return this.a.length===0},
gS:function(a){var t=this.a
return new J.i5(t,t.length,0,null,[H.P(t,0)])},
$ashj:function(){return[T.fG]},
$asn:function(){return[T.fG]},
gcI:function(a){return this.a}}
T.fG.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){s=this.cx
if(s!=null){if(this.ch===8){t=T.f4(C.x)
r=T.f4(C.y)
q=T.wo(0,this.b)
new T.iB(s,q,0,0,0,t,r).dv()
r=q.c.buffer
q=q.a
r.toString
q=H.cM(r,0,q)
this.cy=q
t=q}else{t=s.bC()
this.cy=t}this.ch=0}}return t},
A:function(a){return this.a},
gG:function(a){return this.a}}
T.db.prototype={
A:function(a){return"ArchiveException: "+this.a}}
T.hf.prototype={
gm:function(a){var t,s,r
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.am()
if(typeof r!=="number")return H.a7(r)
return t-(s-r)},
n:function(a,b){var t,s
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
if(typeof b!=="number")return H.a7(b)
s+=b
if(s<0||s>=t.length)return H.v(t,s)
return t[s]},
aV:function(a,b){var t,s
if(a==null)a=this.b
else{t=this.c
if(typeof t!=="number")return H.a7(t)
a+=t}if(b==null||b<0){t=this.e
s=this.c
if(typeof a!=="number")return a.am()
if(typeof s!=="number")return H.a7(s)
b=t-(a-s)}return T.te(this.a,this.d,b,a)},
b0:function(a,b,c){var t,s,r,q,p
t=this.b
if(typeof t!=="number")return t.V()
s=t+c
r=this.e
q=this.c
if(typeof q!=="number")return H.a7(q)
p=t+(r-(t-q))
q=this.a
for(;s<p;++s){if(s<0||s>=q.length)return H.v(q,s)
q[s]}return-1},
be:function(a,b){return this.b0(a,b,0)},
cT:function(a){var t,s,r,q,p
t=this.b
s=this.c
if(typeof t!=="number")return t.am()
if(typeof s!=="number")return H.a7(s)
r=this.aV(t-s,a)
s=this.b
t=r.e
q=r.b
p=r.c
if(typeof q!=="number")return q.am()
if(typeof p!=="number")return H.a7(p)
if(typeof s!=="number")return s.V()
this.b=s+(t-(q-p))
return r},
c1:function(a){return P.oC(this.cT(a).bC(),0,null)},
Z:function(){var t,s,r,q,p,o
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.v(t,s)
p=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.v(t,r)
o=t[r]&255
if(this.d===1)return p<<8|o
return o<<8|p},
a_:function(){var t,s,r,q,p,o,n,m
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.v(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
n=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.v(t,r)
m=t[r]&255
if(this.d===1)return(p<<24|o<<16|n<<8|m)>>>0
return(m<<24|n<<16|o<<8|p)>>>0},
aS:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.a
s=this.b
if(typeof s!=="number")return s.V()
r=s+1
this.b=r
q=t.length
if(s<0||s>=q)return H.v(t,s)
p=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
o=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
n=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
m=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
l=t[s]&255
s=r+1
this.b=s
if(r<0||r>=q)return H.v(t,r)
k=t[r]&255
r=s+1
this.b=r
if(s<0||s>=q)return H.v(t,s)
j=t[s]&255
this.b=r+1
if(r<0||r>=q)return H.v(t,r)
i=t[r]&255
if(this.d===1)return(C.a.aq(p,56)|C.a.aq(o,48)|C.a.aq(n,40)|C.a.aq(m,32)|l<<24|k<<16|j<<8|i)>>>0
return(C.a.aq(i,56)|C.a.aq(j,48)|C.a.aq(k,40)|C.a.aq(l,32)|m<<24|n<<16|o<<8|p)>>>0},
bC:function(){var t,s,r,q,p,o
t=this.e
s=this.b
r=this.c
if(typeof s!=="number")return s.am()
if(typeof r!=="number")return H.a7(r)
q=t-(s-r)
t=this.a
r=J.aq(t)
if(!!r.$isd8){r=t.length
if(s+q>r)q=r-s
t=t.buffer
t.toString
return H.cM(t,s,q)}p=s+q
o=t.length
return new Uint8Array(H.xj(r.c8(t,s,p>o?o:p)))},
eR:function(a,b,c,d){this.e=c==null?this.a.length:c
this.b=d},
gbT:function(a){return this.a},
ghA:function(a){return this.b}}
T.np.prototype={
i_:function(a,b){var t,s,r,q
if(b==null)b=J.bZ(a)
for(;t=this.a,s=t+b,r=this.c,q=r.length,s>q;)this.ck(s-q)
C.p.az(r,t,s,a)
this.a+=b},
cX:function(a){return this.i_(a,null)},
i1:function(a){var t,s,r,q
t=J.b0(a)
while(!0){s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
q=this.c
if(!(s+r>q.length))break
s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
this.ck(s+r-this.c.length)}s=this.a
r=t.gm(a)
if(typeof r!=="number")return H.a7(r)
C.p.a6(q,s,s+r,t.gbT(a),t.ghA(a))
t=this.a
r=a.e
s=a.b
q=a.c
if(typeof s!=="number")return s.am()
if(typeof q!=="number")return H.a7(q)
this.a=t+(r-(s-q))},
aV:function(a,b){var t
if(a<0)a=this.a+a
if(b==null)b=this.a
else if(b<0)b=this.a+b
t=this.c.buffer
t.toString
return H.cM(t,a,b-a)},
d5:function(a){return this.aV(a,null)},
ck:function(a){var t,s,r,q
t=a!=null?a>32768?a:32768:32768
s=(this.c.length+t)*2
if(typeof s!=="number"||Math.floor(s)!==s)H.aZ(P.dA("Invalid length "+H.x(s)))
r=new Uint8Array(s)
q=this.c
C.p.az(r,0,q.length,q)
this.c=r},
ff:function(){return this.ck(null)},
gm:function(a){return this.a}}
T.pv.prototype={
fD:function(a){var t,s,r,q,p,o,n,m,l
t=a.b
s=a.aV(this.a-20,20)
if(s.a_()!==117853008){a.b=t
return}s.a_()
r=s.aS()
s.a_()
a.b=r
if(a.a_()!==101075792){a.b=t
return}a.aS()
a.Z()
a.Z()
q=a.a_()
p=a.a_()
o=a.aS()
n=a.aS()
m=a.aS()
l=a.aS()
this.b=q
this.c=p
this.d=o
this.e=n
this.f=m
this.r=l
a.b=t},
fg:function(a){var t,s,r,q
t=a.b
s=a.e
r=a.c
if(typeof t!=="number")return t.am()
if(typeof r!=="number")return H.a7(r)
for(q=s-(t-r)-4;q>0;--q){a.b=q
if(a.a_()===101010256){a.b=t
return q}}throw H.k(new T.db("Could not find End of Central Directory Record"))},
eV:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.fg(a)
this.a=t
a.b=t
a.a_()
this.b=a.Z()
this.c=a.Z()
this.d=a.Z()
this.e=a.Z()
this.f=a.a_()
this.r=a.a_()
s=a.Z()
if(s>0)this.x=a.c1(s)
this.fD(a)
r=a.aV(this.r,this.f)
t=r.c
if(typeof t!=="number")return t.V()
q=this.y
while(!0){p=r.b
o=r.e
if(typeof p!=="number")return p.au()
if(!(p<t+o))break
if(r.a_()!==33639248)break
p=new T.px(0,0,0,0,0,0,null,null,null,null,null,null,null,"",[],"",null)
p.a=r.Z()
p.b=r.Z()
p.c=r.Z()
p.d=r.Z()
p.e=r.Z()
p.f=r.Z()
p.r=r.a_()
p.x=r.a_()
p.y=r.a_()
n=r.Z()
m=r.Z()
l=r.Z()
p.z=r.Z()
p.Q=r.Z()
p.ch=r.a_()
o=r.a_()
p.cx=o
if(n>0)p.cy=r.c1(n)
if(m>0){k=r.b
if(typeof k!=="number")return k.am()
j=r.aV(k-t,m)
k=r.b
i=j.e
h=j.b
g=j.c
if(typeof h!=="number")return h.am()
if(typeof g!=="number")return H.a7(g)
if(typeof k!=="number")return k.V()
r.b=k+(i-(h-g))
p.db=j.bC()
f=j.Z()
e=j.Z()
if(f===1){if(e>=8)p.y=j.aS()
if(e>=16)p.x=j.aS()
if(e>=24){o=j.aS()
p.cx=o}if(e>=28)p.z=j.a_()}}if(l>0)p.dx=r.c1(l)
a.b=o
p.dy=T.FX(a,p)
q.push(p)}}}
T.pw.prototype={
gbd:function(a){var t,s,r,q
t=this.cy
if(t==null){t=this.d
s=this.cx
if(t===8){t=this.y
r=T.f4(C.x)
q=T.f4(C.y)
t=T.wo(0,t)
new T.iB(s,t,0,0,0,r,q).dv()
q=t.c.buffer
t=t.a
q.toString
t=H.cM(q,0,t)
this.cy=t
this.d=0}else{t=s.bC()
this.cy=t}}return t},
A:function(a){return this.z},
eW:function(a,b){var t,s,r,q
t=a.a_()
this.a=t
if(t!==67324752)throw H.k(new T.db("Invalid Zip Signature"))
this.b=a.Z()
this.c=a.Z()
this.d=a.Z()
this.e=a.Z()
this.f=a.Z()
this.r=a.a_()
this.x=a.a_()
this.y=a.a_()
s=a.Z()
r=a.Z()
this.z=a.c1(s)
this.Q=a.cT(r).bC()
this.cx=a.cT(this.ch.x)
if((this.c&8)!==0){q=a.a_()
if(q===134695760)this.r=a.a_()
else this.r=q
this.x=a.a_()
this.y=a.a_()}}}
T.px.prototype={
A:function(a){return this.cy}}
T.pu.prototype={
h1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=T.FW(a)
this.a=t
s=[]
for(t=t.y,r=t.length,q=[P.C],p=0;p<t.length;t.length===r||(0,H.bT)(t),++p){o=t[p]
n=o.dy
m=o.ch
if(typeof m!=="number")return m.d1()
l=m>>>16
k=n.cy
k=k!=null?k:n.cx
m=n.z
j=new T.fG(m,n.y,null,0,0,null,!0,null,null,null,!0,n.d,null,null)
if(H.dU(k,"$isp",q,"$asp")){j.cy=k
j.cx=T.te(k,0,null,0)}else if(k instanceof T.hf){i=k.a
h=k.b
g=k.c
f=k.e
j.cx=new T.hf(i,h,g,k.d,f)}j.x=l&511
if(o.a>>>8===3){e=(l&28672)===16384
d=(l&258048)===32768
if(d||e)j.r=d}else j.r=!C.c.h9(m,"/")
j.y=n.r
s.push(j)}return new T.fF(s,null)}}
T.m5.prototype={
eQ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a.length
for(s=0;s<t;++s){r=a[s]
if(r>this.b)this.b=r
if(r<this.c)this.c=r}q=C.a.aq(1,this.b)
r=H.cx(q)
p=new Uint32Array(r)
this.a=p
for(o=this.b,n=a.length,m=1,l=0,k=2;m<=o;){for(j=m<<16,s=0;s<t;++s){if(s>=n)return H.v(a,s)
if(a[s]===m){for(i=l,h=0,g=0;g<m;++g){h=(h<<1|i&1)>>>0
i=i>>>1}for(f=(j|s)>>>0,g=h;g<q;g+=k){if(g<0||g>=r)return H.v(p,g)
p[g]=f}++l}}++m
l=l<<1>>>0
k=k<<1>>>0}}}
T.iB.prototype={
dv:function(){var t,s,r,q
this.c=0
this.d=0
t=this.a
s=t.c
if(typeof s!=="number")return s.V()
while(!0){r=t.b
q=t.e
if(typeof r!=="number")return r.au()
if(!(r<s+q))break
if(!this.fA())break}},
fA:function(){var t,s,r,q,p,o,n,m,l
t=this.a
s=t.b
r=t.c
q=t.e
if(typeof r!=="number")return r.V()
if(typeof s!=="number")return s.au()
if(s>=r+q)return!1
p=this.aw(3)
o=p>>>1
switch(o){case 0:this.c=0
this.d=0
n=this.aw(16)
s=this.aw(16)
if(n!==0&&n!==(s^65535)>>>0)H.aZ(new T.db("Invalid uncompressed block header"))
s=t.e
q=t.b
if(typeof q!=="number")return q.am()
r=q-r
if(n>s-r)H.aZ(new T.db("Input buffer is broken"))
m=t.aV(r,n)
s=t.b
r=m.e
q=m.b
l=m.c
if(typeof q!=="number")return q.am()
if(typeof l!=="number")return H.a7(l)
if(typeof s!=="number")return s.V()
t.b=s+(r-(q-l))
this.b.i1(m)
break
case 1:this.dl(this.f,this.r)
break
case 2:this.fB()
break
default:throw H.k(new T.db("unknown BTYPE: "+o))}return(p&1)===0},
aw:function(a){var t,s,r,q,p,o
if(a===0)return 0
for(t=this.a;s=this.d,s<a;){r=t.b
q=t.c
p=t.e
if(typeof q!=="number")return q.V()
if(typeof r!=="number")return r.au()
if(r>=q+p)throw H.k(new T.db("input buffer is broken"))
q=t.a
t.b=r+1
if(r<0||r>=q.length)return H.v(q,r)
o=q[r]
this.c=(this.c|C.a.av(o,s))>>>0
this.d=s+8}t=this.c
r=C.a.aq(1,a)
this.c=C.a.dN(t,a)
this.d=s-a
return(t&r-1)>>>0},
cr:function(a){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
for(r=this.a;q=this.d,q<s;){p=r.b
o=r.c
n=r.e
if(typeof o!=="number")return o.V()
if(typeof p!=="number")return p.au()
if(p>=o+n)break
o=r.a
r.b=p+1
if(p<0||p>=o.length)return H.v(o,p)
m=o[p]
this.c=(this.c|C.a.av(m,q))>>>0
this.d=q+8}r=this.c
p=(r&C.a.aq(1,s)-1)>>>0
if(p>=t.length)return H.v(t,p)
l=t[p]
k=l>>>16
this.c=C.a.dN(r,k)
this.d=q-k
return l&65535},
fB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.aw(5)+257
s=this.aw(5)+1
r=this.aw(4)+4
q=H.cx(19)
p=new Uint8Array(q)
for(o=0;o<r;++o){if(o>=19)return H.v(C.E,o)
n=C.E[o]
m=this.aw(3)
if(n>=q)return H.v(p,n)
p[n]=m}l=T.f4(p)
k=new Uint8Array(H.cx(t))
j=new Uint8Array(H.cx(s))
i=this.dk(t,l,k)
h=this.dk(s,l,j)
this.dl(T.f4(i),T.f4(h))},
dl:function(a,b){var t,s,r,q,p,o,n,m
for(t=this.b;!0;){s=this.cr(a)
if(s>285)throw H.k(new T.db("Invalid Huffman Code "+s))
if(s===256)break
if(s<256){if(t.a===t.c.length)t.ff()
r=t.c
q=t.a++
if(q<0||q>=r.length)return H.v(r,q)
r[q]=s&255&255
continue}p=s-257
if(p<0||p>=29)return H.v(C.C,p)
o=C.C[p]+this.aw(C.V[p])
n=this.cr(b)
if(n<=29){if(n>=30)return H.v(C.z,n)
m=C.z[n]+this.aw(C.U[n])
for(r=-m;o>m;){t.cX(t.d5(r))
o-=m}if(o===m)t.cX(t.d5(r))
else t.cX(t.aV(r,o-m))}else throw H.k(new T.db("Illegal unused distance symbol"))}for(t=this.a;r=this.d,r>=8;){this.d=r-8
r=t.b
if(typeof r!=="number")return r.am();--r
t.b=r
if(r<0)t.b=0}},
dk:function(a,b,c){var t,s,r,q,p,o,n
for(t=c.length,s=0,r=0;r<a;){q=this.cr(b)
switch(q){case 16:p=3+this.aw(2)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=s}break
case 17:p=3+this.aw(3)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
case 18:p=11+this.aw(7)
for(;o=p-1,p>0;p=o,r=n){n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=0}s=0
break
default:if(q>15)throw H.k(new T.db("Invalid Huffman Code: "+q))
n=r+1
if(r<0||r>=t)return H.v(c,r)
c[r]=q
r=n
s=q
break}}return c}}
S.kk.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Math Book",H.a([$.J,$.X,$.aw],s),"Unlike JR, Robots have no fear of Math.",!1,"Big Book of Speaking Low Nerd")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Giant Map",H.a([$.J,$.X],s),null,!1,"Map to Staffs HQ")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microscope",H.a([$.D,$.X,$.aT],s),null,!1,"Viewing Apparatus for Microscopic Perversion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Star Chart",H.a([$.J,$.X],s),null,!1,"Cosmic Dot-to-Dot")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("History Book",H.a([$.J,$.X],s),null,!1,"Homestuck Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Radioactive Rock",H.a([$.c1,$.av],s),"Why the fuck do you have this?",!1,"Shoguns Petrified Hate")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.X],s),null,!1,"Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Fiction","Pages","Words","Shelves"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.m)
q.i(0,$.b1,$.m)
q.i(0,$.f_,$.j)
q.i(0,$.aN,$.L)
q.i(0,$.cA,$.j)
p=$.o
o="The "+p+" finds a massive library, with no books in it! They manage to get a local "
n=$.t
o=o+n+" to stop "
m=$.K
o=o+m+"ing long enough to discover that underlings stole all the books. "
l="The "+p+" has tracked down the book thieves to a nearby dungeon. After some harrowing puzzles and frankly amazing battles, the books are recovered. "
p="The "+n+" librarian is beside himself and cannot stop "+m+"ing. The  "+p+" is hailed as a local hero for returning the books! A particular carapace is especially thankful for the help.  "
m=$.ER
n=[U.c]
q.i(0,new R.Y("Recover the Books",!1,[new U.c(o),new U.c(l),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
q.i(0,new R.Y("Shelve the Books",!1,[new U.c("The "+m+" finds a massive library, with no books in it! They manage to get a local "+$.t+" to stop "+$.K+"ing long enough to discover that the Librarian quit and none of the books have been reshelved. "),new U.c("The "+m+" decides to volunteer at the library, and beings shelving books. There's a book.  And another book. Oooo, that one looks interesting.... "),new U.c("The "+m+" has finally shelved the final book!  They are first in line to begin checking things out, too. Books!  ")],H.a([],n),R.wz(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
p="The "+m+" finds a massive library, filled with books. The "
l=$.t
p=p+l+" librarian offers to help the "+m+" search for useful books. "
o="The "+m+" begins to learn about "
k=$.z
l=o+k+" and how they have persecuted the "+l+"s.  "
k="The "+m+" has read the final book about "+k+" and feels much more prepared to face them.  "
m=this.y
q.i(0,new R.Y("Research the Denizen",!1,[new U.c(p),new U.c(l),new U.c(k)],H.a([],n),R.fj(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Calculators","Math","Numbers","Formulas","Algebra","Calculus"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eV,$.L)
s.i(0,$.cA,$.m)
p=$.o
o="The "+p+"  is approached by a "
l=$.t
s.i(0,new R.Y("Do the Math",!1,[new U.c(o+l+" who had 13 apples, but needs to give them to their 3 children proportionate to their ages.   Oh god. Math. "),new U.c("The "+p+" catches some thieves only to discover that robbery is illegal only on days that are prime factors of 1300. Oh god. Math. "),new U.c("The "+l+"  finds a "+l+" child "+$.K+"ing up a storm. It turns out they got their quiz question wrong and they don't know why.  Does the "+p+" know why? (Spoiler alert, it turns out to be order of operations.) You begin to wonder if SBURB is one of those shitty 'educational' games. ")],H.a([],n),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
l="The "+p+" finds a mysterious calculator in a place of prominence on their land. They poke and prod at it.  What could it be? "
o=$.t
s.i(0,new R.Y("Use the Calculator",!1,[new U.c(l),new U.c("BZAP!  There are now two "+o+"s.  BZAP!  Now there are four.  The "+p+" is getting the hang of this weird calculator that controls reality. "),new U.c("With a frantic "+$.K+", a small "+o+" sprints towards the "+p+".  A giant ogre is chasing them.  In a panic, the "+p+" hits the 'divide' key, and the Ogre is defeated. Holy shit.  ")],H.a([],n),R.eo(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
s.i(0,new R.Y("Solve the Equation",!1,[new U.c("The "+p+"  finds a mysterious equation scrawled onto a wall. What could it mean? "),new U.c("There is a flurry of motion.  The "+p+" shouts out in triumph.  THAT's what that variable means! The equation on the wall is one step closer to being solved.  "),new U.c("The "+p+" has done it. Against all odds they have solved the equation.  A "+$.t+" runs up to them and gives them a fraymotif as the prize for being so good at math.  ")],H.a([],n),R.fj(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flasks","Test Tubes","Chemicals","Science","Labs","Beakers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.eV,$.L)
t.i(0,$.cA,$.m)
t.i(0,$.c_,$.L)
t.i(0,$.t1,$.L)
r=$.o
q="The "+r+"  is approached by a "
p=$.t
q=q+p+" who offers them a grant to study "
o=$.ae
t.i(0,new R.Y("Test the Hypothesis",!1,[new U.c(q+o+", the only catch is they must present their findings at a giant symposium in just a little bit. "),new U.c("The "+r+" forms hypothesis after hypothesis only for each to be completely falsified in turn. This is a disastor! "),new U.c("The Symposium has started. The crowd of unruly "+p+"s begins "+$.K+"ing louder and louder. Finally, the "+r+" bursts in, looking disheveled. It was last minute, but they managed to find something groundbreaking about "+o+", and they do an enthralling presentation on their findings. They are hailed as a SCIENCE HERO!")],H.a([],n),R.fj(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
o=$.t
r="Too many local "+o+" have fallen ill from a mysterious plague.  Those inflicted are too weak to even "
p=$.K
r=r+p+".  It is up to the "
q=$.o
r=r+q+" to figure out how to cure the disease.  They are provided with a state of the art lab and a team of ...not completely terrible "+o+"s."
l="The "+q+" has gotten far too little sleep. Suddenly, they realize the key, the one thing they have been missing: "
k=$.ae
l=l+k+". It all makes sense now! "
q="Each "+o+" lines up to receive their "+k+" injection. The sound of joyful "+p+" fills the air. The plague is defeated!  The "+q+" has a statue made of them in the town center. "
p=$.EX
t.i(0,new R.Y("Make the Cure",!1,[new U.c(r),new U.c(l),new U.c(q)],H.a([],n),R.e2(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
t.i(0,new R.Y("Be the Scientist",!1,[new U.c("The "+p+"  finds a mysterious lab, fully stocked with equipment and chemicals. It is completely abandoned. Locked doors are on every wall of the main area. "),new U.c("The "+p+"  realizes that various sections of the lab open up if you pour the right kind of chemical into a slot on the door. They begin venturing deeper and deeper into the lab.  "),new U.c("The "+p+" has finally reached the final door. They bite their lip in concentration as they pour the final mixed chemical into the slot.  The door slides open.  A sudden "+$.K+" nearly has them drop the dangerous fluid, but they manage to regain their composure in time.  An entire room of "+$.t+"s are inside the final room, outfitted for a surprise party.  It is for "+p+" to celebrate how great at science they are! There is even a SCIENCE CAKE.")],H.a([],n),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aC)}}
K.bU.prototype={}
L.fH.prototype={
D:function(){var t,s
t=Q.I(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"I Think Is The Starbound Item For Debugging Unused Item IDs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.b1,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s are dead. This is....really depressing, actually. "
m="The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "
n="With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  "
l="It is time for the "+p+"  to finally face the "
k=$.z
l=l+k+". "
j="The "+k+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! "
i=[U.c]
q.i(0,new R.R("Revive the Consorts",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a_(l,"The tyranny of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.at)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.j)
s.i(0,$.ee,$.L)
s.i(0,$.eX,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cb,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
o=o+n+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "
m="The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "
l="The "+p+" is training the local "+n+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "
n="The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+n+"s name a national holiday after the "+p+". "
k="It is time for the "+p+"  to finally face the "
h=$.z
k=k+h+". "
g="The "+h+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! "
s.i(0,new R.R("Produce the Goods",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(n),new U.a_(k,"The tyranny of "+h+" continues with the defeat of the "+p+".",g)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.at)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.b1,$.L)
t.i(0,$.c5,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
n=$.K
o=o+n+"ing about? A prophecy?  "
n="The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+n+" once. "
p="It is time for the "+r+"  to finally face the "
m=$.z
p=p+m+". "
l="The "+m+" lies slain by the "+r+"'s "+$.cf+". The "+r+" has won! "
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o),new U.c(n),new U.a_(p,"The tyranny of "+m+" continues with the defeat of the "+r+".",l)],H.a([],i),R.ue(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
r="The "+l+" learns that all of the local "
m=$.t
r=r+m+"s have been too stressed about an impending famine to relax. They vow to help however they can."
p="The "+l+" fluffs more pillows than any other Player ever has before them. "
m="The "+l+"  teaches the local "+m+"s to find their chill. "
n="It is time for the "+l+"  to finally face the "
o=$.z
n=n+o+". "
q="The "+o+" lies slain by the "+l+"'s "+$.cf+". The "+l+" has won! "
t.i(0,new R.R("Relax the Consorts",!1,[new U.c(r),new U.c(p),new U.c(m),new U.a_(n,"The tyranny of "+o+" continues with the defeat of the "+l+".",q)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.at)},
A:function(a){return this.Q},
aj:function(a,b,c,d){var t=this.Q
this.r=new X.im("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Aspects/"+t+".xml",!1,H.a([],[X.i6]),H.a([],[M.h4]))
this.ch=t
this.x=t+".png"
this.y=t+"Big.png"
this.D()
this.E()
t=this.e
if($.$get$kn().U(0,t))H.aZ("Duplicate aspect id for "+this.A(0)+": "+t+" is already registered for "+J.cH($.$get$kn().n(0,t))+".")
$.$get$kn().i(0,t,this)},
gG:function(a){return this.Q}}
L.aW.prototype={}
M.kp.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Barbells",H.a([$.ad,$.c7,$.D],s),null,!1,"Strength Building Metal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Basketball",H.a([$.eh,$.c8],s),null,!1,"Dunksphere")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Baseball Bat",H.a([$.ji,$.W],s),null,!1,"Wooden Pole of Bone Hurting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rubber Ball",H.a([$.eh,$.c8],s),null,!1,"Dead Animal Corpse Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.aU,$.a6],s),"Let's you be a loud asshole instead of a regular asshole.",!1,"Handheld Voice Empowerer")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hockey Stick",H.a([$.ji,$.W,$.dt],s),null,!1,"L Shaped Bone Hurter")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Trophy",H.a([$.D,$.b3],s),"Huh. What could you posibly have won. Ever.",!1,"Award for Best At Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Boxing Glove",H.a([$.vN,$.c8],s),null,!1,"Fist Reinforcing Pain Cubes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Yoga Mat",H.a([$.c8,$.aY],s),null,!1,"Flesh Rubberising Practice Mat")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Weights","Strength","Barbells","Muscles","Dumbbells","Bodybuilding"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dZ,$.L)
q.i(0,$.ck,$.m)
q.i(0,$.cQ,$.L)
p=$.o
o="The "+p+" approaches a dungeon blocked off by a huge boulder. They push and pull at it, but just can't budge it.  A "
n=$.t
o=o+n+" walks by talking about how wimpy and low level the "+p+" is. They vow to get STRONGER!. "
n="The "+p+" has the most bitching training montage of all time, complete with various "+n+" providing a motivational soundtrack of "+$.K+"s. "
p="The "+p+" dramatically heaves the boulder out of the way. They are now STRONG!  The actual dungeon proves to be a disappointing afterthought.  "
m=this.y
l=[U.c]
q.i(0,new R.Y("Enter the Dungeon",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
p="The "+m+" finds a road blocked by a giant tree. Where did it even come from? There is a pile up of "
n=$.t
q.i(0,new R.Y("Clear the Road",!1,[new U.c(p+n+" merchants waiting for it to be cleared. "),new U.c("The "+m+" is tired of waiting. They organize the "+n+"s into groups, and tries to explain the concept of team work to the. Huh. This is going to take a while. "),new U.c("With a triumphant "+$.K+", the organized "+n+" pull the fallen tree away from the road with the "+m+"'s help.  Everyone can finally get on with their day now!  ")],H.a([],l),R.e2(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
n="The "+m+"  wanders into a bunch of "
p=$.t
q.i(0,new R.Y("Be the Strongest",!1,[new U.c(n+p+" arguing over who the strongest being in the Land is. Wow, they all seem so STRONG! Apparently there is a STRENGTH competition soon? The "+m+" enters it, and tries to ignore the snickers of the "+p+"s. They can get strong, just you wait and see!"),new U.c("The "+m+" has the most bitching training montage of all time.  They are getting STRONG! "),new U.c("It is the day of the STRENGTH competition. The "+m+" is the star, it is them.  A "+p+" puts a gold medal around their neck. Everyone agrees that the "+m+" is the strongest.")],H.a([],l),R.hD(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Teams","Sports","Balls","Competition","Athletics","Olympians"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dZ,$.m)
t.i(0,$.f0,$.m)
t.i(0,$.ck,$.m)
s=$.o
r="The "+s+" finds a team of underdog "
p=$.t
t.i(0,new R.Y("Save the Sports",!1,[new U.c(r+p+"s that need to win a SPORTSBALL tournament against underlings in order to save their village. The "+s+" agrees to help their noble cause.  "),new U.c("The "+s+" sees a shady underling offering a comically large sack of boonies to the SPORTS AUTHORITY! Oh no, sports corruption! How will they ever save the village now?  "),new U.c("The "+s+" exposes the underlings' SPORTSBALL cheating at the most hilarious possible moment. Through the power of true friendship, justice and a heaping helping of montages, the underdog "+p+" have won the SPORTSBALL tournament.")],H.a([],l),R.wz(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
s="A group of "+p+"s approach the "
r=$.o
s=s+r+". Apparently their sports team lost their coach to the "+$.z+" recently, and they need help training for THE BIG GAME. "
o="The "+r+"  has the worst training montage in all of paradox space as they get their team of shitty "+p+"s into fighting shape. "
n="The "+p+"s fall over "
k=$.K
t.i(0,new R.Y("Coach the Sports",!1,[new U.c(s),new U.c(o),new U.c(n+k+"ing and just...generally being the worst at sports.  Luckily, the opposing team is somehow WORSE at it. The "+r+" is pretty nonplussed to win the trophecy, even with all the "+p+"s cheering and "+k+"ing.")],H.a([],l),R.e2(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
k=$.t
p="A group of "+k+"s approach the "
r=$.o
t.i(0,new R.Y("Win at Sports",!1,[new U.c(p+r+". Apparently their sports team lost a member to the "+$.z+" recently, and if they can't replace him in time they can't compete in the TOURNAMENT. The "+r+" agrees to join their team before they can even suggest it. Sports!"),new U.c("The "+r+"  has the best training montage in all of paradox space as they get their team into fighting shape. "),new U.c("The "+r+" ganks the "+$.ae+" and steals the big man's thunder. They win all the sports points. They are the star. It is them. Their team of trusty "+k+"s lifts the "+r+" up onto their shoulders. This is the best day of their life.")],H.a([],l),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,t,null),$.aC)}}
U.kt.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p,o
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$v3()
p=q.createBufferSource()
o=p
t=3
return P.cs(J.xS(q,b),$async$P)
case 3:o.buffer=d
r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdm:function(){return[P.eM]},
$asc6:function(){return[P.eM,P.bg]}}
U.mU.prototype={
aR:function(a){return"audio/mpeg"}}
U.nm.prototype={
aR:function(a){return"audio/ogg"}}
U.oy.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=W.yv(b)
p=new W.eE(q,"canplaythrough",!1,[W.Q])
t=3
return P.cs(p.gac(p),$async$P)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asik:function(){return[W.eN]},
$asc6:function(){return[W.eN,P.B]}}
U.oz.prototype={}
U.oA.prototype={}
O.kv.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Cod Piece",H.a([$.O,$.Z,$.aO,$.N,$.W],s),"God damn it, MI. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poisoned Candy",H.a([$.th,$.N,$.bK],s),"I guess CodTier is okay.",!1,"Not So Sweet Treat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Lyre",H.a([$.aD,$.W,$.bk,$.N,$.a8],s),"I guess CodTier is okay. Sort of.",!1,"I Don\u2019t Know What This Is Normally")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Snare Trap",H.a([$.O,$.aD,$.N,$.b2],s),"I guess CodTier is okay. But still. The actual codpiece. You fleshy meatbags and your weird shit.",!1,"The Perfect Trap")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Festivals","Carnivals","Parades","Celebrations","Jamboree","Fairs","Amusements"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cy,$.j)
t.i(0,$.ha,$.j)
t.i(0,$.cv,$.j)
t.i(0,$.ds,$.j)
t.i(0,$.cJ,$.j)
t.i(0,$.eU,$.j)
r="After all the bullshit the "+$.z+" has put the native "
q=$.t
r=r+q+"s through, the "
p=$.o
r=r+p+" figures they could use a break. They decide to revive a planet wide "+$.aH+" Festival to get morale back up."
o="A small "+q+" is sobbing and "
n=$.K
m=[U.c]
t.i(0,new R.a5("Celebrate the Win",!1,[new U.c(r),new U.c(o+n+"ing after losing a carnival game. The "+p+" decides that this is not a day of losses, and begins rigging the games to have a higher pay out rate than normal. Soon the land is filled with the sound of happy "+n+"s."),new U.c(" The "+q+"s who were running the carnival games are now bankrupt. Their wailing and "+n+"ing fills the air. Fuck.  Who knew actions have consequences? The "+p+" arranges 'anonymous' donations to them and decides that maybe they should just quit while they are ahead. ")],H.a([],m),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.t
n="A group of jubilant "+p+"s are following the "
q=$.o
n=n+q+" around. It's kind of flattering, but it sure is drawing a lot of attention!"
o="Even more "+p+" are following the "+q+" now, "
r=$.K
t.i(0,new R.a5("Lead the Parade",!1,[new U.c(n),new U.c(o+r+"ing about how they defeated the "+$.z+". Wow, this is actually kind of embarrasing. "),new U.c("Oh god, somehow there are PARADE FLOATS involved now? The line of "+p+"s have drawn a huge crowd to watch and "+r+".  It looks like whole roads are being blocked off by the event, and nobody is getting any work done. The entire day's productivity is destroyed, and it isn't even the "+q+"'s fault. ")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
t.i(0,new R.a5("Behold the Glory of CodTier",!1,[new U.c("The "+q+" hears tell of a legendary artifact, so beautiful, so sleak and aerodynamic that all who behold it are moved to tears. They need it. SO badly. That glorious front tail. Now that the "+$.z+" has been defeated, perhaps they can finally focus on finding it."),new U.c("The "+q+" has journeyed far and wide, going so far as to make pacts with the dead. Finally. They have it.")],H.a([],m),R.y(),!1,!1,new Y.kJ("/Rewards/sweetCod.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their balloon prisons. The balloons sink and land all over the land, and the newly freed frogs happily hop out. The "
r=$.o
q=q+r+" organizes a huge festival for all the "
p=$.t
t.i(0,new R.bA("Pull the Strings of a Universe",!1,[new U.c(q+p+"s themed around finding and collecting frogs. They sit back and allow events to transpire. "),new U.c("The "+r+" presides over a festival competition where "+p+" contestants try to breed the best frogs."),new U.c("The "+r+" sets things up such that the final frog was always going to be right where it needed to be.      ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.bL)}}
Y.oP.prototype={
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asev:function(){return[P.B]},
$asc6:function(){return[P.B,P.B]}}
Y.nM.prototype={
aR:function(a){return"application/octet-stream"},
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:r=b
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdm:function(){return[P.bg]},
$asc6:function(){return[P.bg,P.bg]}}
V.rb.prototype={
$1:function(a){var t,s,r,q
t=document
s=H.eI(t.querySelector("#myHeadCanon"),"$ishM")
r=H.eI(t.querySelector("#canon"),"$isfV")
q=t.createElement("div")
q.textContent=s.value
r.appendChild(q)},
$S:function(){return{func:1,args:[,]}}}
V.rc.prototype={
$1:function(a){var t,s
t=document
s=t.querySelector("#canon")
t=t.createElement("div")
t.textContent="AB: "+this.a.hD("JRheadcanon")
s.appendChild(t)
t=s.style
t.color="#ff0000"
t=s.style
t.backgroundColor="#888888"},
$S:function(){return{func:1,args:[W.Q]}}}
T.kA.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Mystical Vial of Blood",H.a([$.aT,$.bk,$.S,$.aJ],s),null,!1,"Vial of Not-ABs Oil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bananaphone",H.a([$.an,$.bk,$.S,$.aS],s),"Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",!1,"Yellow Respect Device")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Friendship Bracelet",H.a([$.O,$.bk,$.S,$.aJ,$.hh],s),null,!1,"Soul Binding Wrist Shackle")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bonding Manacles",H.a([$.D,$.b2,$.S,$.aJ,$.hh,$.aG],s),null,!1,"Handcuff with one cuff full of cigarettes")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Friendship Stairs",H.a([$.W,$.tp,$.bk,$.aJ,$.S,$.Z],s),"You push your friends down these, dunkass.",!1,"Bloodstained Stairs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Pulse","Clots","Ichor","Veins","Chambers","Arteries","Flow"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dd,$.j)
q.i(0,$.t4,$.j)
q.i(0,$.c_,$.m)
p=$.o
o="The "+p+" finds a great lake of red. On the other side, they can see a village of "
n=$.t
o=o+n+"s in need of their help. The "+p+" will need to find a way to cross the lake of blood if they want to give aid."
m="The "+p+" gets help from "+n+"s on their side of the lake to build a massive boat. They put blood, sweat, tears, but mostly blood, into building the boat."
l="With the boat placed into the lake, the "+p+" begins their voyage across the raging rapids. They will need all the help they can get from their "+n+" crewmates to reach the other side."
p="After hours of captaining their ship, the "+p+" arrives on the other side of the lake. It turns out they spent so long building the boat that the village fixed its own problems. A considerate "+n+" hands the "+p+" a "+$.ae+" and some boondollars in compensation."
n=this.x1
k=[U.c]
q.i(0,new R.Y("Cross the Lake",!1,[new U.c(o),new U.c(m),new U.c(l),new U.c(p)],H.a([],k),R.e2(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.t
p="The land is a series of candy red lakes. A wise old "+n+" stops "+$.K+"ing enough to explain that these lakes actually used to be mighty rivers, until "
l=$.z
p=p+l+" plugged them up with dams. Now the "+n+"s can't travel or trade with other villages at all, and the land has begun to stagnate."
m=$.o
o="The "+m+" discovers the correct sequence of hydraulic pumps to activate to increase the river pressure enough to jettison away the blockage in a geyser of candy red. The first river begins to flow, and the local "+n+"s begin resuming trade activities.   "
j="As the "+m+" goes around unplugging each river in turn, they begin to notice more and more debris among the candy red flow. Is "+l+" conspiring to reclog the rivers? "
i="It is time for the "+m+"  to finally face the "+l+". The rivers are too vital to the "+n+"s to risk having them reclog."
n="The "+l+" lies slain by the "+m+"'s "+$.cf+". The "+m+" has won! The "+n+"s have a bustling trade based economy once again."
q.i(0,new R.R("Unplug the Rivers",!1,[new U.c(p),new U.c(o),new U.c(j),new U.a_(i,"The tyranny of "+l+" continues with the defeat of the "+m+".",n)],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Chains","Unions","Manacles","Bonds","Weddings","Rings","Webs"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cQ,$.j)
s.i(0,$.cJ,$.L)
s.i(0,$.aN,$.L)
s.i(0,$.iv,$.j)
s.i(0,$.cv,$.L)
p=$.o
o="The "+p+"  and the "
m=$.eq
o=o+m+" are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "
l="The "+p+"  and the "+m+" are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "
j="The "+p+"  and the "+m+" trust each other to have their backs.  So when the "
i=$.z
j=j+i+" starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the "+i+"."
h="Slaying the "+i+" proves the POWER OF TEAMWORK!"
s.i(0,new R.R("Learn the Power of Teamwork",!1,[new U.c(o),new U.c(l),new U.a_(j,"The "+p+" and "+m+" end up getting distracted bickering after one of the "+i+"'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!",h)],H.a([],k),R.ep(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
h=$.o
i="The "+h+" comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old "
m=$.t
i=i+m+"s explains that before  "
p=$.z
i=i+p+" arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the "+m+"s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The "+h+" vows to help. "
m="The "+h+" delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local "+m+"s discover that "+m+"s from other villages aren't so different, after all.  Another victory against xenophobia! "
j="The "+h+" has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, "+p+" needs to be stopped. "
l="The "+h+" has tracked down "+p+". There can be no mercy. "
o="The "+p+" lies slain by the "+h+"'s "+$.cf+". The "+h+" is finally free to restore the chains, bringing peace and understanding to the land. "
h="The tyranny  and xenophobia of "+p+" continues with the defeat of the "+h+"."
p=$.EO
s.i(0,new R.R("Chain the Towers",!1,[new U.c(i),new U.c(m),new U.c(j),new U.a_(l,h,o)],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
o="The "+p+" learns of the "
h=$.aH
o=o+h+" Tower, said to hold and connect all of the planet together with its many Beams. A quaking "
l=$.t
o=o+l+" explains that the "
j=$.z
l=o+j+" has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the "+l+"s from communciating with other villages and risking the entire planet falling apart.  "
o="The "+p+" hears of a fantastical secret kept at the top of the "+h+" Tower. It is said that the "+j+" seeks to topple it to gain this secret. Perhaps the "+p+" is small enough to climb the tower to claim it themselves?"
m="The "+p+" defeats a fearsome "+j+" minion, whose death unlocks the most direct path to the "+h+" Tower . "
i="The "+p+" has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the "+j+". "
p="The "+j+" lies slain by the "+p+"'s "+$.cf+". The "+p+" is finally able to see what lies at the top of the "+h+" Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? "
s.i(0,new R.R("Protect the Beams",!1,[new U.c(l),new U.c(o),new U.c(m),new U.a_(i,"The "+h+" Tower is more at risk than ever before.",p)],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
h="They say it can't be done, but the "+p+" is confident that they can become friends with every single "
i=$.t
h=h+i+" on "+$.aH+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
m="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
i="Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 "+i+"s are all they need to indirectly gain access to the remaining 90% of the population. The "+p+" schmoozes the right few "+i+"s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!"
p="The "+$.f2+" has so many friends, they have to assume everyone in this fight is already in their friend list."
s.i(0,new R.a5("One Degree of Separation",!1,[new U.c(h),new U.c(m),new U.c(i)],H.a([],k),R.fj(),!1,!1,new Y.c0("Friend Request",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
i="They say it can't be done, but the "+p+" is confident that they can become friends with every single "+$.t+" on "
m=$.aH
i=i+m+"book. They start small, just talking to any "+p+" that wanders by. They know they can do this!"
h="Oh god. Less than 10% of the "+p+" population have been friended. The "+p+" is starting to think that maybe they understimated how hard this would be. "
m="The "+p+" decides that doing things the hard way is for chumps and just hacks into "+m+"book to steal all the friends. Yay, they win! They are the best! "
p="The "+$.f2+" is now more popular with your friends than you are."
s.i(0,new R.a5("Steal The Friends",!1,[new U.c(i),new U.c(h),new U.c(m)],H.a([],k),R.uf(),!1,!1,new Y.c0("Friend Stealer",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
m="The "+p+"  and the "
h=$.eq
m=m+h+" seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "
i="The "+p+"  and the "+h+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is "
o=$.z
i=i+o+" doing here!?"
o="Slaying the "+o+" proves to be the thing that finally pushes the "+p+" and "+h+" together."
s.i(0,new R.R("Pale Shipping Dungeon",!1,[new U.c(m),new U.a_(i,"The "+p+" and "+h+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.q)+".",o)],H.a([],k),R.ep(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ai)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Bloodlines","Generations","Family","Community","Villages"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.b1,$.L)
t.i(0,$.c5,$.m)
r="In the wake of the defeat of the "+$.z+" it becomes really how isolated the individual "
q=$.t
r=r+q+" villages are. It is far too common for a young "+q+" to never have even MET their cousins. The "
p=$.o
r=r+p+" resolves to fix this as soon as possible."
p="The "+p+" is working hard to restore roads, track down long lost family members and generally just remind all the "+q+"s that at the end of the day they are all one big happy family. "
q="All those hours of hard work have paid off, the individual "+q+" villages have all been brought back into communication with each other. The sense of community is so strong, you could cut it with a knife. Or maybe wield it as one?"
o="It may take a village for the "+$.f2+" to kick your ass, but luckily they have several."
t.i(0,new R.a5("Connect The Villages",!1,[new U.c(r),new U.c(p),new U.c(q)],H.a([],k),R.e2(),!1,!1,new Y.c0("Community Builder",o,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
o=$.o
q="The "+o+" learns that two prominent "
p=$.t
q=q+p+" families have been feuding for generations, despite once having been the best of friends. The land is on the verge of a civil war as uninvolved "+p+"s pick a side, and everyone is suffering."
r="The "+o+" tries to track down the origin of the feud that leaves their land on the verge of a civil war. Nobody can point to any REASON for it to be happening. "
m="In a dramatic reveal, the "+o+" discovers that "
l=$.z
m=m+l+" is responsible for the feud. The two "+p+" families never wronged each other, it's a huge misunderstanding. But how can they prove this to the feuding families? "
j="The "+o+" confronts "+l+". The beast smuggly admits to its crimes, and claims that the proof needed lies within its hoard. Will the "+o+" be able to claim it?"
p="The "+l+" lies slain by the "+o+"'s "+$.cf+". The "+o+" shows the proof to the two "+p+" families, who reconcile in a dramatic shower of happy tears and "+$.K+"ing. "
t.i(0,new R.R("Stop the Feud",!1,[new U.c(q),new U.c(r),new U.c(m),new U.a_(j,"The deception of "+l+" continues with the defeat of the "+o+".",p)],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
T.kD.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Pan's Pipe",H.a([$.a8,$.W,$.bk,$.S],s),null,!1,"Smonkin Weeds Pipe")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skeleton Key",H.a([$.aX,$.S],s),"You are never gonna be imprisoned again.",!1,"THE BONE SHAPED HOLE BREAKER")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Inspector's Fan",H.a([$.a6,$.D,$.bk,$.S],s),"Probably a refrance.",!1,"Fondly Regarded Fan")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Jet Pack",H.a([$.ao,$.D,$.aU,$.S,$.Z],s),"Don't skip gates, asshole.",!1,"Rocket Powered Pants")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Wind","Breeze","Pipes","Mail","Whistles","Pipe Organs","Delivery"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c5,$.m)
q.i(0,$.f0,$.j)
q.i(0,$.aN,$.m)
p=$.o
o="The "+p+" tries posting a letter through the "
n=$.ae
o=o+n+" mail system only to find the letter caught in a plug of oil!  "
m=$.z
o=o+m+" has screwed with the mail system, crippling the "
l=$.t
o=o+l+" economy!"
k="The "+p+" cleans out oil from the nearby "+n+"s, opening up a few more channels between villages. "
n="The "+p+" gets sick of all the fucking oil in the "+n+" mail system, and realizes the only way to truly deal with it and to allow information to flow free is to confront "+m+"."
j="It is time for the "+p+"  to finally face the "+m+". The mail is too vital to the "+l+"s to risk having them reclog."
l="The "+m+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! The "+l+"s have a bustling mail based economy once again."
p="The tyranny of "+m+" continues with the defeat of the "+p+"."
m=$.ES
i=[U.c]
q.i(0,new R.R("The Mail Goes Through",!1,[new U.c(o),new U.c(k),new U.c(n),new U.a_(j,p,l)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Zephyr","Fans","Windmills","Pinwheels","Propellers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.b1,$.j)
s.i(0,$.f0,$.m)
s.i(0,$.aN,$.m)
s.i(0,$.ck,$.m)
s.i(0,$.c5,$.m)
p=$.o
o="The "+p+" constructs a little windmill system for a joke, and suddenly an entire village of consorts has grown up around it! The "+p+" decides that they should use the winds of their land for more projects. "
n="The "+p+" starts learning the uses of their lands "
l=$.ae
n=n+l+" in manipulation of wind. Their future constructions are going to be amazing. "
l="The "+p+" uses "+l+"s to build a massive farming system that harnesses the wind to distribute seeds across the "
k=$.t
k=l+k+" fields. The "+k+"s "+$.K+"ing is so joyful it's literally deafening. "
l=$.z
j=l+" is attacking the happy wind based farming community. The "+p+" has worked too hard for it all to be lost now. There can be no mercy. "
h="The "+l+" lies slain by the "+p+"'s "+$.cf+". The "+p+" is finally free to continue improving the land with wind. "
s.i(0,new R.R("Thinking With Wind Power",!1,[new U.c(o),new U.c(n),new U.c(k),new U.a_(j,"The tyranny of "+l+" continues with the defeat of the "+p+".",h)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Twisters","Cyclones","Gales","Storms","Hurricanes","Gusts","Tornadoes","Typhoons"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cb,$.j)
t.i(0,$.lG,$.j)
t.i(0,$.f0,$.L)
t.i(0,$.c5,$.L)
r=$.o
q="The "+r+" is chilling in a "+$.t+" village when a FUCK OFF HUGE STORM blows through, destroying the consorts housing. The player learns that "
p=$.z
q=q+p+" has screwed with the wind system, sending these giant storms at random."
o="The "+r+" learns of a "
n=$.ae
o=o+n+" system that controls the storms of their land. The begin adventuring and solving puzzles to alter the layout of the "+n+" system so the storms are redirected from consort villages. "
n="The "+r+" finishes the dungeon that holds the  "+n+" systems control panel, only to find the control room totally empty. They learn that they only needed their own "+$.aH+" to do control the storms in the first place, and it was inside them all along.  "
l=" "+p+" arrives to challenge the "+r+" storm supremacy. Will the "+r+" be able to prove their worth?"
k="The "+p+" lies slain by the "+r+"'s "+$.cf+". The "+r+" has become the storm master. It is them. "
t.i(0,new R.R("The Winds of Change",!1,[new U.c(q),new U.c(o),new U.c(n),new U.a_(l,"The storm supremacy of "+p+" continues with the defeat of the "+r+".",k)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.at)}}
M.fO.prototype={
ev:function(a){var t=this.a
if(!t.U(0,a))return
return t.n(0,a)}}
Y.kF.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=J.dW(b,"\n")
p=P.B
o=P.bX(p,p)
n=P.bX(p,[P.es,P.B])
for(m=null,l=1;l<q.length;++l){k=q[l]
if(J.da(k).bi(k).length===0)m=null
else if(m==null)m=C.c.bi(k)
else{j=C.c.bi(k)
i=C.c.I(m,0,C.c.e9(m,$.$get$v8())+1)+j
o.i(0,i,m)
if(!n.U(0,m))n.i(0,m,P.a3(null,null,null,p))
J.xM(n.n(0,m),i)}}r=new M.fO(o,n)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asev:function(){return[M.fO]},
$asc6:function(){return[M.fO,P.B]}}
A.kL.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Colonel Sassacre's Daunting Text ",H.a([$.J,$.ad,$.aS,$.c7],s),"Probably heavy enough to kill a cat.",!1,"Life Story of the Only Good Mortal")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wise Guy Book",H.a([$.J,$.aS],s),null,!1,"How To Shittalk For Fucking Dumbasses")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Beagle Puss",H.a([$.aT,$.aS],s),"Does...does this really fool flesh bags like you?",!1,"The Name Makes it Impossible For Me To Name Its So Fucking Funny")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Novelty Microphone",H.a([$.aU,$.a6,$.aS],s),"Oh look, it makes you sound like a robot. Hilarious.",!1,"Meme Voice Enloudener Tube")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Banana",H.a([$.an,$.aS],s),"Truly the pinacle of fruit based comedy.",!1,"Phallic Fruit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fake Flower",H.a([$.O,$.aS],s),null,!1,"Flower that smells like Plastic")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Trick Handcuffs",H.a([$.D,$.aS],s),"What is the fucking point of handcuffs you can escape.",!1,"Pink Fluffy Handcuffs")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Pies","Pratfalls","Bananas","Yucks","Slapstick"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.m)
q.i(0,$.cu,$.j)
q.i(0,$.ck,$.m)
p=$.o
o="The "+p+" learns of a massive underling army approaching in just a few days time. The "
n=$.t
o=o+n+"s are too scared to even "+$.K+", but the "+p+" has seen enough family holiday comedies to know how to prepare for these invaders. "
m="The underling army arrives, lead by a single "+$.z+" minion. A hilarious sequence of events (carefully orchestrated by the "+p+") results in the army slipping on banana peels, walking on glass, being set on fire, falling down a seemingly endless set of stairs, and ultimately fleeing the battlefield in confusion and shame. "
n="The "+p+" attends a touching Christmas themed celebration hosted by the "+n+"s.  It doesn't matter that it's not remotely Christmas, it's the thought that counts. And it's way better than being Home Alone. (<--this is what the refrance.)  "
p=this.y
l=[U.c]
q.i(0,new R.Y("Defeat the Army",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Clubs","Stages","Comedy","Microphones","Laughter","Standup","Jokes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dZ,$.L)
s.i(0,$.ck,$.j)
s.i(0,$.cu,$.j)
s.i(0,$.cy,$.j)
o=$.o
n="The "+o+" learns of an Open Mic Nite at the "
m=$.aH
n=n+m+" Club. Do they have what it takes to make the toughest crowd in all of Paradox Space laugh? "
k="The "+o+" is practicing their jokes on a street corner. A few "
j=$.t
k=k+j+"s let out a braying "+$.K+" of laughter, but most seem unimpressed. The "+o+" sure has a long way to go. "
o="It's finally time for the Open Mic Nite at the "+m+" Club.! The "+j+"s seem like a tough crowd, but the "+o+" leaves them hysterical with laughter. It's a huge success! A mysterious white carapace approaches them from behind to congratulate them on their success..."
j=$.EV
s.i(0,new R.Y("Win the Laughs",!1,[new U.c(n),new U.c(k),new U.c(o)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,j,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Pranks","Mischief","Tricks","Deceit","Ruses","Distactions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cB,$.L)
t.i(0,$.c4,$.m)
t.i(0,$.cu,$.j)
t.i(0,$.ck,$.m)
t.i(0,$.ip,$.m)
r=$.o
q="The "+r+"  is approached by a Crafty "
o=$.t
q=q+o+" who offers them a magical "
n=$.ae
q=q+n+", guaranteed to grant them any wish. The "+r+" is shocked to discover it was a ruse, and the Crafty "+o+" has already escaped to the side with their ill earned boonies. "
m="The "+r+" finds many "+o+"s, too sad to even "
k=$.K
t.i(0,new R.Y("Trick the Villain",!1,[new U.c(q),new U.c(m+k+", holding "+n+".  The Crafty "+o+" must be stopped!  "),new U.c("The "+r+" has finally caught up with the Crafty "+o+".  They thank the confused consort for how much the "+n+" helped them. Confused, the Crafty "+o+" offers to buy the "+n+" back, and is upset when the "+r+" refuses. They begin "+k+"ing and begging until the "+r+" begrudgingly claims that they could be convinced to part with it if a sufficiently valuable offer is made.  The Crafty "+o+" offers them a comically large bag of boonies, which the "+r+" promptly distributes to the swindled consorts.  The "+n+" working was a ruse all along, and the Crafty "+o+" is the one who is now tricked.  (That is what the parable is) ")],H.a([],l),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aC)}}
S.bG.prototype={
A:function(a){return H.x(new H.dR(H.ke(this),null))+": "+this.c},
gG:function(a){return this.c}}
S.i7.prototype={}
S.m2.prototype={}
M.kY.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Can of Spray Paint",H.a([$.ax,$.D],s),null,!1,"Wall Dick Drawing Apparatus")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sensible Chuckles Magazine",H.a([$.J,$.ah,$.aS,$.aw],s),"Stoic faced asshole.",!1,"Meme Gif Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Gentleman's Razor",H.a([$.tx,$.D,$.au],s),null,!1,"Face Cutting Hair Remover")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("How To Draw Manga",H.a([$.J,$.ah,$.aw],s),"Who is this on the cover. The Goddess of Manga or some shit?",!1,"Absolutely Shit Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Painting of a Horse Boxing a Football Player",H.a([$.ax,$.al,$.J],s),"Truly the highest of art.",!1,"A Man Spent Money To Actually Own This Fucking Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Collection of Classical Works",H.a([$.ah,$.J],s),null,!1,"Book of Naked Renaissance People")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Documentary on Horses",H.a([$.ah,$.aA,$.al],s),null,!1,"Prime Horse: The Movie: The Book: The Remake")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Paint Set",H.a([$.ax,$.ah],s),null,!1,"Pain Drink Set")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shaving Cream",H.a([$.ao,$.ah,$.D],s),null,!1,"Foamy Bad Tasting Marshmallow Fluff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Classy Suit",H.a([$.O,$.ah],s),null,!1,"Georgio Armani Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("The Fatherly Gent's Shaving Almanac ",H.a([$.J,$.ah,$.aw],s),"Ugh. Flesh bags and their constant hair growth.",!1,"Book on Razors and Shit (what dumbass would want this?)")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Museums","Sculpture","Paintings","Art","Refinement"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.m)
q.i(0,$.cA,$.j)
q.i(0,$.aN,$.m)
p=$.o
o="The "+p+" visits a beautiful "
n=$.ae
o=o+n+" Museum, only to discover that its walls are practically bare! The "
m=$.t
o=o+m+" curator is apologetic, and explains that each night a new piece goes missing. The "+p+" agrees to catch the thief, art is for everyone! "
l=" The "+p+" has almost fallen asleep during their latest "+n+" Museum stakeout, when the thief arrives! It looks to be a "+$.z+" minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "
n="The "+p+" attends a fancy gala in their honor, hosted in the "+n+" Museum itself.  "+m+"s quietly "+$.K+" and exchange pleasantries. It sure is nice to be recognized by high society! The "+n+" Museum offers them a less valuable artifact as a small token of their thanks.  "
m=this.y
p=[U.c]
q.i(0,new R.Y("Catch the Thief",!1,[new U.c(o),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Theater","Stages","Curtains","Audiences","Thespians","Actors","Plays"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dZ,$.L)
s.i(0,$.ck,$.m)
s.i(0,$.cu,$.L)
s.i(0,$.b1,$.m)
s.i(0,$.cy,$.j)
o=$.o
n="The "+o+" finds a troupe of dejected looking "
l=$.t
l=n+l+"s. Apparently they want to put on a famous "+l+" play called 'The "
n=$.aH
l=l+n+" "
k=$.ae
s.i(0,new R.Y("Perform the Play",!1,[new U.c(l+k+"', but have no one to play the titular role!  Does the "+o+" have what it takes to bring the iconic role to life? "),new U.c("The "+o+" is practicing their lines for the upcoming performance of 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. Man, who would have thought a "+k+" would have so many different emotions! "),new U.c("It's finally time for performance of the 'The "+n.toUpperCase()+" "+k.toUpperCase()+"'. The audience is moved to tears and "+$.K+"ing at the "+o+" stirring performance as the "+k+". ")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Class","Decorum","Fancy Shit","Manners","Good Taste","Artistocrats","Debutantes","Barons","Lords","Ladies","Nobles"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ha,$.L)
t.i(0,$.cv,$.L)
t.i(0,$.eU,$.L)
t.i(0,$.c4,$.L)
t.i(0,$.b1,$.m)
t.i(0,$.aN,$.m)
r=$.o
q="The "+r+"  is cordially invited to the dinner party of Miss "
o=$.K
q=q+o+"ingworth, "
n=$.t
q=q+n+" heiress to the "+$.ae+" fortune. "
l="The "+r+" is coached on etiquette by  Miss "+o+"ingworth's butler. It would not do to embarass the young Miss.  "
n="It is finally time for Miss "+o+"ingworth's party. Anyone who is anyone is attending, and it is clear that the "+r+" is the guest of honor. They successfully charm all of the "+n+"s with a captivating story of dining customs from their home world. "
r=$.EL
t.i(0,new R.Y("Attend the Dinner Party",!1,[new U.c(q),new U.c(l),new U.c(n)],H.a([],p),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,r,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aC)}}
T.l3.prototype={}
V.l5.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Trendy Fabric",H.a([$.ax,$.O],s),null,!1,"Weird Tasting Candy Paper")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Necklace",H.a([$.ax,$.tm,$.hh],s),null,!1,"Nasty Candy Necklace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sewing Needle",H.a([$.D,$.tt,$.aL],s),null,!1,"Cloth Stabbing Knife")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.jg
r=A.i("Broom",H.a([r,$.W,$.ad,r],s),"Fucking. Wastes.",!1,"Doctor Beating Staff")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rolling Pin",H.a([$.W,$.tA,$.ad],s),null,!1,"Babushkas Punishment Pole")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Velvet Pillow",H.a([$.O,$.aY,$.bk,$.ax,$.f7],s),"Pretty good if you need to be calmed down, I hear.",!1,"Seductive Head Rest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Yarn Ball",H.a([$.ax,$.O],s),null,!1,"Cats Plaything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Refrigerator",H.a([$.aG,$.c7,$.D,$.bm],s),null,!1,"Food Hardening Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Photo Album",H.a([$.ax,$.J],s),null,!1,"Memory Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Cubes",H.a([$.bm],s),null,!1,"Hard Water")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cast Iron Skillet",H.a([$.D,$.ao,$.ad,$.c7,$.tl],s),null,!1,"Fancy Unstoppable Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Failed Dish",H.a([$.bK],s),"Wow you suck at cooking.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dr Pepper BBQ Sauce",H.a([$.bK],s),"Gross.",!1,"Culinary Perfection")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Potted Plant",H.a([$.ax,$.bO,$.aQ],s),null,!1,"Imprisoned Flora, Trapped in Clay for its Sins")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chicken Leg",H.a([$.an,$.bh,$.aX],s),null,!1,"Thicc Chicken")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juicy Steak",H.a([$.an,$.bh],s),null,!1,"Juicy Cow Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Wedding Cake",H.a([$.ax,$.an,$.aJ],s),null,!1,"The Only Benefit of a Wedding")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Fashion","Catwalks","Clothes","Dresses","Suits","Tailors"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.cJ,$.m)
q.i(0,$.cv,$.L)
p=$.o
o="The "+p+" is visited by a Beautiful "
n=$.t
o=o+n+" who wishes to commision a dress. Only the finest "
m=$.ae
l=[U.c]
q.i(0,new R.Y("Design the Dress",!1,[new U.c(o+m+" will do for material The Beautiful "+n+" refuses to take 'no' for an answer. "),new U.c(" The "+p+" had almost given up, but they finally find the perfect "+m+" to decorate the dress. Now they just need to sew it on."),new U.c("The "+p+" presents the  "+m+" dress to the Beautiful "+n+", who "+$.K+"s with delight. They will be SURE to tell all their friends where they got such a wonderful dress.  ")],H.a([],l),R.y(),!1,!1,new Y.i9("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Baking","Cakes","Cupcakes","Cookies","Birthdays","Sweets"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cv,$.j)
s.i(0,$.ck,$.m)
s.i(0,$.eU,$.j)
s.i(0,$.ds,$.m)
s.i(0,$.b1,$.j)
p=$.o
o="The "+p+" enters a competition to bake the single best cake that Paradox Space has ever seen. "
m="The "+p+" is trying out recipe after recipe, but nothing really feels right until they try adding a pinch of "
k=$.ae
m=m+k+"'. It is incredible how much of a difference it makes! "
j=$.t
p="It's finally time for competition! The Distinguised "+j+" takes a slow, thoughtful bite of the "+p+"'s cake. There is a pause, and then the Distinguished "+j+" begins "+$.K+"ing up a storm!  The "+k+" did the trick, "+p+"'s cake is immediately declared the winner! A strange carapace is fascinated by the "+p+"'s technique."
k=$.ET
s.i(0,new R.Y("Bake the Cake",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Yarn","Needles","Purls","Looms","Weaving","Sewing","Stitching","Spiders"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.ec,$.j)
t.i(0,$.b1,$.m)
t.i(0,$.dq,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.iv,$.j)
r=$.o
q="The "+r+" finds a loom, and a Wizened "
p=$.t
q=q+p+" who spins them a tale of a magical thread that, when woven into a shawl, confers great mystical power.  The "+r+" is enchanted by the thought of this. "
o="The "+r+" searches the land high and low. What thread could possibly be worthy of such a legend? Finally, deep in a dungeon, they find a single skein of "
m=$.ae
o=o+m+" colored thread. Is this finally it?  "
r="The "+r+", slowly, methodically weaves a shawl from the skein of "+m+" colored thread. When it is over, the Wizened "+p+" lets out a strained "+$.K+" and declares it to be the shawl of Legend indeed. Ironically it's a legendary piece of shit and the "+r+" just uses it to alchemize other things."
p=this.y
t.i(0,new R.Y("Weave the Cloth",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aC)}}
U.l6.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.aw,$.a6,$.J,$.aD,$.S,$.Z],s),"Don't use this to end two universes, asshole.",!1,"A Huge Ass Black Book on Coding or Something")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Egg Timer",H.a([$.aA,$.bk,$.S,$.aD],s),null,!1,"Egg That Counts Down to Your Death")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skull Timer",H.a([$.aX,$.bk,$.S,$.aD],s),"Everyone is mortal. Besides robots.",!1,"Skull That Counts Down to Your Dinner Being Ready")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Poison Flask",H.a([$.aT,$.S,$.bK],s),null,!1,"Glass of Bone Hurting Juice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ice Gorgon Head",H.a([$.aT,$.S,$.bm,$.aD,$.b2,$.bQ,$.aV],s),null,!1,"Oddly Attractive Decapitated Head")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Obituary",H.a([$.aG,$.aV,$.aD,$.J,$.S],s),"I wonder whose it is? Yours?",!1,"Omae Wa Mou Shindeiru in Paper Form")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Death","Endings","Mortality","Graveyards","Bones","Funerals","Skulls","Skeletons","Cemeteries","Graves","Tombstones"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dK,$.j)
q.i(0,$.cZ,$.m)
q.i(0,$.f0,$.L)
q.i(0,$.b1,$.L)
q.i(0,$.c_,$.m)
p=$.o
o=" The "+p+" learns of a Omni-Lich that has been emptying the graves of the "
n=$.t
o=o+n+"s, who are understandably upset at this disrespect to everything their culture holds dear."
m="The "+p+" hunts down the Omni-Lich, only to discover that it cannot be killed without the use of a mystic "
l=$.ae
m=m+l+". The player begins to search for this totally USEFUL and IMPORTANT item. "
l="The "+p+" finds the "+l+", and slays the Omni-Lich, scattering its bones to the winds, which, according to "+n+" traditions, should summon its master. Uh. Eventually."
k=$.z
j="FINALLY, the bones of Omni-Lich has summoned it's master, "+k+"."
n="The "+k+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won! The "+n+"s are free to bury their dead in peace once again."
i=[U.c]
q.i(0,new R.R("Empty the Graves",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a_(j,"The grave robbing of "+k+" continues with the defeat of the "+p+".",n)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Disaster","Fire","Ash","Armageddon","Apocalypse","Radiation","Blight","Gas","Poison","Chlorine","Wastelands"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dK,$.j)
s.i(0,$.cZ,$.m)
s.i(0,$.eg,$.ai)
s.i(0,$.ed,$.m)
s.i(0,$.t1,$.m)
s.i(0,$.dd,$.m)
s.i(0,$.cZ,$.m)
s.i(0,$.b1,$.L)
s.i(0,$.c_,$.m)
s.i(0,$.dr,$.m)
p=$.o
o="The "+p+" has found a group of Violent "
m=$.t
o=o+m+"s whose society has long since crumbled. They live in roving bands, willing to kill and maim to gain access to '"
l=$.aH
o=o+l+"', the fuel their post apocalyptic society runs on. "
k="The "+p+" has survived a small assault team of Violent "+m+"s, and is declared their new leader. They beg and grovel and "+$.K+" and ask that the "+p+" help them take back their "+l+" from a rival gang. "
j="The "+p+" is now the warlord of nearly all of the Violent "+m+"s. There is clearly not enough "+l+" for everyone, though. It turns out that the "
h=$.z
j=j+h+" has been hoarding it all to cause scarcity to breed violence and anarchy. What a huge bitch. This cannot stand. "
g="There isn't enough room in this wasteland for the both of them. It's time to take out the "+h+"."
m="The "+h+" lies slain by the "+p+"'s "+$.cf+". The "+p+" distributes the hoard of "+l+" to the Violent "+m+"s and keeps the hoard of grist for themself. "
s.i(0,new R.R("Become the Warlord",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(g,"The "+l+" shortage continues with the defeat of the "+p+".",m)],H.a([],i),R.eo(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
p="The "+m+" is sick of their stupid uninhabitable planet, and so starts to make sections of it habitable through judicious use of alchemy and "
l=$.ae
p=p+l+"s alike. "
l=$.t+"s begin to flock to the safe areas that The "+m+" constructed, and begin to make tiny villages within the safety of its zones. Precious  "+l+"s are found in some nearby mines. "
g="The "+m+" has straight up established a new consort government in the safe zones. This is so deliriously biznasty it threatens the very existence of anything un-nasty in all possible timelines. Alas, while "
j=$.z
g=g+j+" remains alive, the safe zone will be temporary at best. "
k=j+" is attacking the safe zones. The "+m+" has worked too hard for it all to be lost now. There can be no mercy. "
o="The "+j+" lies slain by the "+m+"'s "+$.cf+". The "+m+" is finally free to continue improving the land. "
s.i(0,new R.R("Make This Stupid Planet Habitable",!1,[new U.c(p),new U.c(l),new U.c(g),new U.a_(k,"The tyranny of "+j+" continues with the defeat of the "+m+".",o)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Prophecy","Prophets","Fate","Destiny","Rules","Sound","Judgement","Carvings","Murals","Etchings"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.c_,$.j)
t.i(0,$.vs,$.ai)
t.i(0,$.h7,$.L)
r=$.o
q="The "+r+" finds a small dungeon bearing the image of "
p=$.z
q=q+p+". At the bottom, they find a switch inside a small hole they can just barely fit their arm inside. When they reach in and flip the switch, they feel something attach to their arm with a loud click. The "+r+" pulls out their arm to find attached is some super complicated machinery complete with a timer counting down. That can\u2019t be good."
o="The device continues to count down. After consulting with local "+$.t+"s, the "+r+" navigates another dungeon in hopes of finding a clue to removing the ominous device from their arm without causing it to go off. Past complicated puzzles involving doomsday dates and scales, they find a small scroll on a pedestal. Written on the scroll is a prophecy that the "+r+" will permanently die in an explosion from attempting remove a device on their arm. Well, that\u2019s just great."
m="The timer doesn\u2019t stop from counting lower. The "+r+" makes up their mind and decides they\u2019re not going to sit and wait until the timer goes off. They\u2019re going to remove the stupid thing, prophecy or not! They quickly pry it off their arm and throw it away as far as possible. There\u2019s no explosion; the device just breaks. Did the "+r+" use their powers to stop it from exploding and break the prophecy, or was this all just a shitty test from "+p+"? Either way, the "+r+" isn\u2019t very pleased with the "+p+"."
l="The "+r+" tracks down the location of the "+p+" \u2018s lair. It\u2019s payback time!"
k="The "+p+" has been thoroughly beaten. Serves them right for playing such a mean trick on the "+r+"."
t.i(0,new R.R("Learn the Prophecy",!1,[new U.c(q),new U.c(o),new U.c(m),new U.a_(l,"The "+r+" couldn\u2019t get their revenge. "+p+" has a hearty laugh at their expense.",k)],H.a([],i),R.eo(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
k=$.o
p="The "+k+" learns from one of their "
r=$.t
p=p+r+"s that there is an ancient prophecy of a "
l=$.aH
p=p+l+" plague that is due to kill them all any day now."
m="The "+k+" gets deep into the nitty gritty of the apocalypse prophecy. They learn that the plague is not technically going to hit the consorts- it's going to hit the bearers of the MAGIC "
o=$.ae
m=m+o+", which currently happens to be the "+r+"s. "
r="The "+k+" goes on a daring series of stupid missions to deliver the MAGIC "+o+" into an underling camp, thereby redirecting the incoming "+l+" plague into devastating the underlings instead of the "+r+"s. The underling army is all but decimated, and "
l=$.z
r=r+l+"s lair is all but undefended. "
o="The "+k+" is finally ready to face the "+l+"."
q="The "+l+" lies slain by the "+k+"'s "+$.cf+". The "+k+" has won! "
k="The tyranny of "+l+" continues with the defeat of the "+k+"."
l=$.EK
t.i(0,new R.R("Learn the Prophecy",!1,[new U.c(p),new U.c(m),new U.c(r),new U.a_(o,k,q)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
Z.l7.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.J,$.aw,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bk,$.ad,$.S,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bk,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dq,$.j)
q.i(0,$.aN,$.m)
q.i(0,$.iv,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wm
k=[U.c]
q.i(0,new R.R("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.a_(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.at)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cb,$.m)
s.i(0,$.dq,$.j)
s.i(0,$.d_,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.eW,$.m)
s.i(0,$.cu,$.j)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.a_("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.at)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.j)
t.i(0,$.ir,$.m)
t.i(0,$.aN,$.m)
t.i(0,$.cz,$.j)
t.i(0,$.eW,$.j)
t.i(0,$.dq,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aH+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.a_("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.at)}}
X.im.prototype={}
X.i6.prototype={
$S:function(){return{func:1,v:true,args:[[P.p,M.h4]]}}}
M.h4.prototype={}
U.lz.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Fluthulu Poster",H.a([$.O,$.aY,$.aV,$.bn],s),"No. Fuck you. Don't alchemize this.",!1,"The Next Target Poster")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Scalemate",H.a([$.O,$.aY,$.aV],s),"Senator Lemonsnout's treachery knows no bounds.",!1,"Target Practice Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Bone Shield",H.a([$.aG,$.aA,$.aX,$.f8,$.aO],s),"Something, something, Bonezerker.",!1,"Weaklings Fake Gear made of Dynamo Flesh")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Replica Ice Sword",H.a([$.aA,$.vU,$.f9,$.aO],s),null,!1,"Fake Hard Water Long Stabber")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Zombie Mask",H.a([$.aA,$.bQ,$.bh,$.aV],s),null,!1,"Dead Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Vampire Romance Novel",H.a([$.aw,$.J,$.aB,$.aV],s),"Or, you know, Rainbow Drinkers, if you're fucking civilized.",!1,"Fireplace Fodder Literature")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizardy Herbert",H.a([$.J,$.a1,$.ad],s),null,!1,"Shitty Wizard Object")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Complacency of the Learned",H.a([$.J,$.a1,$.ad],s),"I hear it's an elaborate metaphor for something.",!1,"Tome of Shitty Wizards")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grimoire for Summoning the Zoologically Dubious ",H.a([$.J,$.a1,$.bQ,$.aV,$.bn],s),"Not even kidding, throw this into the Furthest Ring and never look back.",!1,"Shoguns Hitlist of HorrorTerrors")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wizard Statue",H.a([$.aG,$.av,$.a1,$.ad,$.aO],s),"Suprisingly magical, given that magic is a fake thing.",!1,"Petrified Shitty Wizard")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Mermaid Fountain",H.a([$.aG,$.ti,$.a1,$.ad,$.aO],s),null,!1,"Water Spitting Fish Woman Statue")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Monsters","Dragons","Fantasy","Adventure","Princesses","Castles","Wyverns","Wizards","Elves","Faeries"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h5,$.ai)
q.i(0,$.cJ,$.m)
q.i(0,$.c5,$.m)
q.i(0,$.cB,$.L)
p=$.o
o="The "+p+" learns of a Beautiful "
n=$.t
o=o+n+" who has been kidnapped by the vial "
m=$.z
o=o+m+" Minion. There is a hefty reward should a brave Hero rescue them. "
l=" The "+p+" journeys to the castle of the "+m+" Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped "
k=$.ae
j=[U.c]
q.i(0,new R.Y("Save the Beautiful Consort",!1,[new U.c(o),new U.c(l+k+" can open it. Looks like it's time to go questing."),new U.c("The "+p+" finally finds a correctly shaped.  "+k+".  The gate swings open, and the "+m+" Minion is swiftly defeated. The Beautiful "+n+" delivers a reward to the brave "+p+". Convenient that they had it with them when they were kidnapped, huh?   ")],H.a([],j),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Vampires","Rainbows","Undead","Counts","Castles"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.dd,$.j)
s.i(0,$.is,$.m)
s.i(0,$.c_,$.j)
s.i(0,$.eg,$.j)
s.i(0,$.h9,$.m)
o=$.o
n="The "+o+" recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious "
m=$.t
s.i(0,new R.Y("Do not Drink...Wine.",!1,[new U.c(n+m+" leave, and no one can remember the last time he received guests."),new U.c("The "+o+" attends the dinner. Count Feratu is an.... eccentric "+m+". He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),new U.c(" The "+o+" sees Castle Feratu in the distance. The silhouette of a "+m+" standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. ")],H.a([],j),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Flying Saucers","Aliens","Martians","UFOs","Conspiracies"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.iu,$.m)
t.i(0,$.c_,$.j)
t.i(0,$.dH,$.m)
t.i(0,$.eV,$.m)
t.i(0,$.t4,$.m)
r=$.o
q="The "+r+" finds a group of three "
o=$.t
q=q+o+"s "
n=$.K
t.i(0,new R.Y("Expose the Conspiracy",!1,[new U.c(q+n+"ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the "+r+" learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),new U.c("The "+r+" does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),new U.c("The "+r+" shows the conspiracy papers to the three "+o+"s, who fail to see the humor in the situation. They immediately try to rally their fellow "+o+"s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary "+n+" of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. ")],H.a([],j),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aC)}}
N.aa.prototype={
A:function(a){return H.x(new H.dR(H.ke(this),null))+": "+H.x(this.b)}}
O.c6.prototype={
b2:function(a){var t=0,s=P.bp(),r,q=this,p
var $async$b2=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q
t=3
return P.cs(q.aT(a),$async$b2)
case 3:r=p.P(0,c)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b2,s)}}
O.dm.prototype={
ba:function(a){var t=0,s=P.bp(),r
var $async$ba=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$ba,s)},
cG:function(a){var t=0,s=P.bp(),r,q=this
var $async$cG=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=(self.URL||self.webkitURL).createObjectURL(W.yw([J.uV(a)],q.aR(0),null))
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$cG,s)},
aT:function(a){var t=0,s=P.bp(),r,q=this,p,o
var $async$aT=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=P.bg
o=new P.bj(0,$.am,null,[p])
W.vz(a,null,q.aR(0),null,null,"arraybuffer",null,null).b3(new O.kz(new P.dT(o,[p])))
r=o
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aT,s)},
$asc6:function(a){return[a,P.bg]}}
O.kz.prototype={
$1:function(a){this.a.aB(0,H.eI(J.xZ(a),"$isbg"))},
$S:function(){return{func:1,args:[W.e_]}}}
O.ev.prototype={
ba:function(a){var t=0,s=P.bp(),r,q,p,o,n
var $async$ba=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:a.toString
q=H.cM(a,0,null)
for(p=q.length,o=0,n="";o<p;++o)n+=H.hC(q[o])
r=n.charCodeAt(0)==0?n:n
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$ba,s)},
aT:function(a){var t=0,s=P.bp(),r
var $async$aT=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=W.vy(a,null,null)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aT,s)},
$asc6:function(a){return[a,P.B]}}
O.ik.prototype={
aT:function(a){var t=0,s=P.bp(),r
var $async$aT=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:r=a
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$aT,s)},
ba:function(a){return H.aZ("Element format doesn't read from buffers")},
$asc6:function(a){return[a,P.B]}}
V.lR.prototype={
aR:function(a){return"font/opentype"},
P:function(a,b){var t=0,s=P.bp(),r
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hp("scripts/Rendering/text/opentype.min.js",!1),$async$P)
case 3:r=opentype.parse(b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdm:function(){return[R.hb]},
$asc6:function(){return[R.hb,P.bg]}}
Z.il.prototype={}
E.iz.prototype={}
E.nl.prototype={}
E.M.prototype={
A:function(a){var t="["+J.cH(this.a)+" x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.fI.prototype={
A:function(a){var t="[(Random from "+P.tE(this.d,"(",")")+") x "+H.x(this.b)
return t+(this.c?" (from Aspect)":"")+"]"}}
E.ko.prototype={
A:function(a){return"[Stats assigned from player Interests x"+H.x(this.b)+"]"}}
Y.lX.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("How to Teach Your Friends to Hack SBURB",H.a([$.aw,$.N,$.J,$.Z,$.jj],s),"Oh sure, it's bad enough that WASTES fuck around in my shit, but at least they somewhat know what they are doing. SURE, let's have GRACES teach the WHOLE FUCKING PARTY to do it.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Unstable Domino",H.a([$.aA,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Broken Knocker Over Maths Thing")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Exposed Thread",H.a([$.O,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Indecent String")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Teetering Plate",H.a([$.mo,$.N,$.aD],s),"Fucking Graces can't leave well enough alone.",!1,"Impending Drop Dish")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Ice","Tundra","Snow","Frost","Flurries","Avalanches"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.lI,$.m)
t.i(0,$.c5,$.j)
t.i(0,$.dr,$.L)
t.i(0,$.de,$.j)
r=$.t
q="An excited "+r+" runs up to the "
p=$.o
q=q+p+" and starts to "
o=$.K
q=q+o+" about a certain series. They tell "+p+" that the game they're playing with their friends is just like the one in the series. The "+p+" gets curious and starts looking for other "+r+"s who know about this. By listening in on "+r+"s "+o+"ing, the "+p+" learns that the series is called '"
n=$.aH
q=q+n+"stuck'. What does that mean? The "+p+" decides to use "+r+" technology to find this series directly."
m="Now "+n+"stuck makes sense to the "+p+". It is a show about some "+r+"s who play S"+o+" and must create a universe with a special "
l=$.ae
m=m+l+". Apparently the  "+r+"s have television here!  So, after watching some short episodes, the "+p+" finds that it's just like the situation all their coplayers are in! Well... almost. They don't quite know what this universe "+l+" is..."
k="The "+p+" has watched a couple of episodes of "+n+"stuck, including the one where one of the "+r+"s is the last to defeat their denizen, "
j=$.z
n=k+j+"... Hold on, that's the "+p+"'s denizen! Maybe it is their duty to defeat their "+j+", in order to make it official. But would it ruin the fictional feeling of "+n+"stuck? They don't really want to find out, but they feel they must do it anyway."
k="Now the "+p+" is facing the REAL "+j+", who was actually expecting the  "+p+" to arrive earlier. Maybe it really IS their duty to defeat "+j+"!"
o=j+" has been slain by the "+p+"! Many "+r+" arrive at the denizen's palace, "+o+"ing so loudly and thanking "+p+" for doing what they were supposed to do. The "+p+" is so happy, that instead of feeling that "+l+"stuck is ruined, they feel like it was a true story! They tell their friends AAAALLLLLLLL about "+l+"stuck, and the friends listen eagerly."
i=[U.c]
t.i(0,new R.R("I'm So Meta, Even This Acronym",!1,[new U.c(q),new U.c(m),new U.c(n),new U.a_(k,"The "+p+" was not strong enough for "+j+", much like the second "+r+", who nearly died. They are reminded again of the feeling they had earlier, that "+l+"stuck would not be as fun to watch after this. For the while, they cherish the fact that "+j+" is still living.",o)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o=$.o
t.i(0,new R.a5("Cooking with Petrol",!1,[new U.c("The "+o+" wanders the countryside looking for any quests still active after the defeat of the "+$.z+". After defeating a boringly easy dungeon, it rumbles and descends into the ground. The ground rumbles ominously. "),new U.c("The "+o+" is wandering around in areas better left alone. You wonder what 'SBURB GAME DISC' means?  They figure out they can use it to hack their land to move around trees and villages and everything. Wow, it is way more convinient to just brings everything to them rather than trekking all the way out there. The ground rumbles ominously with each modification to the landscape."),new U.c("The ground rumbles ominously. What the hell, the "+o+" didn't even do anything! Oh fuck, an Avalanche has started. Looks like all that fuckery has finally caught up with the "+o+". Several "+$.t+" villages are wiped off the map. The "+o+" pretends really hard that it was a tragic accident that definitly nobody caused. ")],H.a([],i),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.t
j="Now that the "+o+"s are free from the reign of "+$.z+", they are free to continue their normal lives. Wait a second... is that "+o+" carrying the "
l=$.o
j=j+l+"'s copy of the SBURB discs? This can't be good."
r="The "+l+" follows the "+o+" with the SBURB discs into the local "
p=$.K
r=r+p+" club. Apparently, this "+o+" has more than one copy of SBURB, and they hand out the other discs to their fellow "+p+" enthusiasts. The "+l+" panics, and makes a plot to steal all of the discs."
o="Clever as a fox, the "+l+" steals the SBURB discs from each "+o+" and replaces them with copies of the recently released 'Super "+$.aH+" Quest Online: The "+$.ae+" of "+p+"'. now the "+o+"s have a game they can play together that WON'T kill everything!"
p=this.fy
t.i(0,new R.a5("Stop the Meta",!1,[new U.c(j),new U.c(r),new U.c(o)],H.a([],i),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
o=$.o
p=p+o+" shows the "
r=$.t
t.i(0,new R.bA("Allow Others to Meta a Universe",!1,[new U.c(p+r+"s how to check the code to find out where the frogs are. They sit back and allow the frogs to come rolling in. "),new U.c("The "+o+" sets up an automatic frog breeding system. Just about every possible variety of frog is produced from it."),new U.c("A series of incredibly unlikely events transpire such that the "+o+" almost steps on the Final Frog. Luckily, a "+r+" "+$.K+"s in time to stop them.    ")],H.a([],i),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.bL)}}
Y.lY.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Sherpa Parka",H.a([$.bm,$.N,$.cd],s),"Clearly the best class uses this.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Guide Book",H.a([$.Z,$.bm,$.aw,$.J,$.N,$.X],s),"Clearly the best class uses this.",!1,"Dummies Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Whistle",H.a([$.D,$.N,$.aU],s),"Clearly the best class uses this.",!1,"Loud screeching pipe")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Announcement System",H.a([$.D,$.N,$.a6,$.X],s),"Clearly the best class uses this.",!1,"Voice Empowering Speaking System")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mountains","Vistas","Rocks","Sherpas","Guides"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.lI,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.dr,$.m)
t.i(0,$.de,$.j)
r="Now that the "+$.z+" is out of the way, a group of "
q=$.t
r=r+q+" want to return to their ancestral home. Unfortunately, it has been so long that no one remembers exactly where it is.   The "
p=$.o
o=[U.c]
t.i(0,new R.a5("Find the Home",!1,[new U.c(r+p+" volunteers to guide everyone based on half remembered legends and a few recovered parts of maps. "),new U.c("A "+q+" child nearly falls off a cliff, but the "+p+"'s manages to grab them in time. Who knew mountains could be so dangerous? "),new U.c("After an exhausting journey, the "+p+" has lead the "+q+"s back to a ruin that is almost certainly their ancestral home. Everyone is too tired to even "+$.K+", but they are happy.")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their icy prisons. The land melts and warms and just generally becomes a lot nicer. The "
p=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+p+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+p+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+p+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+p+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.bL)}}
T.lZ.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Doll",H.a([$.mo,$.ax,$.ap,$.S],s),"It's like a robot, but useless.",!1,"Possessed Doll (Probably)")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Puppet",H.a([$.W,$.ap,$.S,$.Z,$.aV],s),"Don't touch this shit.",!1,"Baby Muppet Snuff Survivor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mirror",H.a([$.ts,$.S],s),null,!1,"Mirror That Shows A Reflection Of The World But A Horrible Beast Mimics Your Every Move")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.J,$.S,$.aB],s),"No. No cat troll shit.",!1,"A Grid of Pure Taint")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Shades",H.a([$.al,$.aT,$.S],s),"You can put a p great robot in these. I advise it.",!1,"Glasses For Try Hard Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Spirits","Souls","Jazz","Havoc","Blues","Cores","Prohibition","Noir"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ed,$.L)
q.i(0,$.ef,$.j)
q.i(0,$.ck,$.m)
p=$.o
o="The "+p+", guided by a "+$.t+" assembles some of the scattered pieces of their land into a sort of safe space. Its nice, but something's just off about it."
n="The "+p+" grows obsessed with perfecting their space and begins manically collecting more and more of the landscape to decorate their area. Theyve become convinced that if they can only make it perfect, everything will be all right. If they can just make themselves better..."
m="The "+p+"realizes all the things they were adding to the space was nothing more than junk and clutter. They realize they cant make themselves better by simply accumulating more onto themselves. They have to confront the root of the problem. For the specific problem of their space, they have to confront "
l=$.z
m=m+l+"."
k="It is time for the "+p+"  to finally face the "+l+". They can finally be free to just....be themselves as long as the "+l+" is gone. "
j="The "+l+" lies slain by the "+p+"'s "+$.cf+". The "+p+" has won and finally feels free to be themselves for the first time."
i=[U.c]
q.i(0,new R.R("Find Yourself",!1,[new U.c(o),new U.c(n),new U.c(m),new U.a_(k,"The tyranny of "+l+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=$.o
p="The "+j+" finds a Violent "
l=$.t
p=p+l+". A Magical Talking "
k=$.ae
p=p+k+" explains that the "+j+" needs to enter their inner world and steal the Violent "+l+"'s heart to heal the corruption within. Huh. It turns out that the Violent "+l+"'s inner world looks a lot like a Rage themed dungeon, cool! The now Peaceful "+l+" vows to never hurt anyone ever again."
m="The "+j+" finishes a Doom themed dungeon to steal a Gloomy "+l+"'s heart and heal it. They really are getting the hang of this! "
k="The Magical Talking "+k+" shows back up out of nowhere. They explain that they've been doing some digging and it turns out the pandemic of corrupted heart "+l+"s is caused by none other than the "
n=$.z
k=k+n+". It's up to the "+j+" to stop them!"
o="After a convoluted plot that had a really satisfying twist, the "+j+" has the "+n+" just where they want them. It's time to strife! "
h="The "+n+" monologues their evil plan to corrupt all the "+l+"s, then dies. The "+j+" has prevented any new cases of corrupted "+l+"s from cropping up!"
q.i(0,new R.R("Steal the Heart",!1,[new U.c(p),new U.c(m),new U.c(k),new U.a_(o,"The tyranny of "+n+" continues with the defeat of the "+j+". Will no "+l+" hearts be left safe?",h)],H.a([],i),R.uf(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Dolls","Voodoo","Doppelgangers","Copies","Puppets","Selfies","Mirrors","Poppets","Mirrors","Crystals","Shards"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cu,$.j)
s.i(0,$.is,$.j)
s.i(0,$.f0,$.m)
s.i(0,$.c_,$.j)
s.i(0,$.cv,$.m)
s.i(0,$.dr,$.L)
p=$.o
o="The "+p+" is just going through their land when they get ambushed by a  copy of themselves made of "
n=$.ae
o=o+n+"! The player barely gets away with their life! "
m="The "+p+" skirmishes with the "+n+" copy a few times. The "+n+" copy begins to berate the player about their moral failings and weaknesses."
l="The "+p+" realizes that the "+n+" copy is nothing more then an expresion of their own worst feelings, manifested by  "
k=$.z
n=l+k+". They confront the copy one last time, and accept it as part of themselves. The two fuse, with a single, small "+n+" the only physical remnant of the copy. Armed with their new self actualization, they realize they are ready to face "+k+". "
l=k+" has been the cause of so much personal grief for the "+p+".  There can be no mercy. "
j="The "+k+" lies slain by the "+p+"'s "+$.cf+". The "+p+" is victorious. "
s.i(0,new R.R("Confront yourself.",!1,[new U.c(o),new U.c(m),new U.c(n),new U.a_(l,"The assholeness of "+k+" continues with the defeat of the "+p+".",j)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j="Now that the "+$.z+" has been defeated, a Copy "
p=$.o
j=j+p+" has appeared. They claim they are the TRUE "+p+",and that the other is an imposter who just wants their fame! All of the "
k=$.t
j=j+k+"s "
l=$.K
j=j+l+" in confusion and don't seem to know what to do."
l="A wizened "+p+" creates a series of challenges that only the REAL "+p+" should be able to complete. They are....laughably wrong. Things like walking in a straight line, being literate and being able to "+l+" for more than five minutes straight. At the end of it, all the "+k+"s unanimously agree that the Fake "+p+" is the winner. THIS IS STUPID."
k="The REAL "+p+" has had enough of all this bullshit. With some bad ass pink lightning, they expose the Fake "+p+" as three "+k+"s in an overcoat using some weird Heart magic."
p="The "+$.f2+" knows who they are, and their confidence is turned into a pink lightning attack."
s.i(0,new R.a5("Prove Your Identity",!1,[new U.c(j),new U.c(l),new U.c(k)],H.a([],i),R.e2(),!1,!1,new Y.c0("The Real Heart Player",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.o
k="The "+p+" finds a disorienting labyrinth of mirrors. They know they need to reach the end but they keep getting turned around. Frustrated, they punch a mirror, shattering it. The dungeon crumbles away entirely, leaving the treasure at the end. Huh. "
l="The next time the "+p+" finds a labyrinth of mirrors, they skip straight to breaking the mirrors and collect that sweet, sweet loot. "
j="Another mirror, another punch. Except this time....the mirror is unaffected. The "+p+" in the reflection smirks back. In a rage the "+p+" assaults the mirror until their knuckles are bloody. Still the reflected "+p+" is a smug prick. 'Maybe',  the reflection says, 'You should stop trying to destroy yourself.' The "+p+" collapses in an exhausted heap and considers their words."
n="When the "+p+" encounters the next mirror labyrinth, they do their best to beat it correctly. They reign in their anger, they try to forget about that smug smirk. When they reach a dead end they realize that their reflections are....wrong.   They are all...watching the "+p+", even if that shouldn't be possible. 'Help me.', the "+p+" says. As one, each of their reflections destroys their own mirror. The shards of glass ricochet forwards and fit neatly into a locked puzzle door, revealing the path to the "
m=$.z
n=n+m+"."
m="The "+p+" has accepted their fractured soul, and the destructiveness inherent in it. The "+m+" is dead."
s.i(0,new R.R("Shatter The Mirrors",!1,[new U.c(k),new U.c(l),new U.c(j),new U.a_(n,"The "+p+" destroyed themselves.",m)],H.a([],i),R.eo(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.j)
t.i(0,$.cv,$.j)
t.i(0,$.lH,$.j)
t.i(0,$.eU,$.m)
t.i(0,$.h9,$.j)
t.i(0,$.cJ,$.m)
t.i(0,$.ef,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
p=$.t
t.i(0,new R.R("Ship All the Ships",!1,[new U.c(q+p+"s have no idea what's coming. "),new U.c("The "+r+" extends their shipping grid to include the entire "+p+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "),new U.c("The "+r+" finds the ABSOLUTE BEST SHIP ever, but then realizes that because of some stupid "+$.aH+" laws put in place by "+$.z+", the ship will be unable to sail. The player flips their shit and begins preparing for the final battle. THE SHIP WILL SAIL. ")],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.o
p="The "+r+" finds a weeping Broken Hearted "
q=$.t
p=p+q+". The most Fetching "+q+" of their dreams just turned them down to the "
o=$.aH
p=p+o+" Dance and they are miserable. On a whim, the "+r+" offers to take them instead. The "+q+" immediately brightens.  "
n="The Broken Hearted "+q+" and the "+r+" are shopping for matching outfits to wear to the "+o+" Dance. Oh look, there is the Fetching "+q+". The Broken Hearted "+q+" begins sniffling quietly to himself. Oh, dear.  When they aren't looking, the "+r+" goes over to the Fetching "+q+" to talk. It is swiftly revealed that it's all been a big misunderstanding.  The Fetching "+q+" really is busy with their job as a "
m=$.K
t.i(0,new R.a5("Heal The Broken Heart",!1,[new U.c(p),new U.c(n+m+" salesman for the "+o+" dance, but the Broken Hearted "+q+" ran away crying before they could explain that they'd love to date them anyways! The "+r+" sees an opportunity to save the day."),new U.c("It is the day of the big "+o+" Dance. The "+r+" is working hard at being a "+m+" salesman, despite their lack of credentials. The Fetching "+q+" and the Mended Hearted "+q+" are enjoying a lovely time at the Dance. A happy ending! ")],H.a([],i),R.hD(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
q=$.o
m="The "+q+"  and the "
r=$.eq
m=m+r+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+q+"  and the "+r+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. Oh shit, what is "
n=$.z
o=o+n+" doing here!?"
n="Slaying the "+n+" proves to be the thing that finally pushes the "+q+" and "+r+" together."
t.i(0,new R.R("Flushed Shipping Dungeon",!1,[new U.c(m),new U.a_(o,"The "+q+" and "+r+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.q)+".",n)],H.a([],i),R.ep(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ai)
n=$.o
r="The "+n+"  and the "
q=$.eq
r=r+q+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "
o="The "+n+"  and the "+q+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. Oh shit, what is "
m=$.z
o=o+m+" doing here!? "
m="Competing to slay the "+m+" proves to be the thing that finally pushes the "+n+" and "+q+" together."
t.i(0,new R.R("Pitched Shipping Dungeon",!1,[new U.c(r),new U.a_(o,"The "+n+" and "+q+" are stubbornly refusing this ship by getting their asses handed to them by the "+H.x(C.q)+".",m)],H.a([],i),R.ep(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ai)
h.i(0,new X.G(s,t,null),$.aC)}}
B.m_.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Family Ashes",H.a([$.aG,$.ao,$.N,$.aD,$.bV],s),"Probably an inheritance or some shit.",!1,"Whats Left of Staff")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Last Will and Testament",H.a([$.Z,$.J,$.N,$.aD,$.mk],s),"Probably an inheritance or some shit.",!1,"Legal Rights to SBURBSim")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Grooming Guide",H.a([$.aw,$.N,$.ah],s),"Probably an inheritance or some shit.",!1,"I Hope This Is About Animals")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Powered Attorney",H.a([$.vJ,$.N,$.mg,$.mk],s),"Believe me, you don't want to be sued by a RoboLawyer.",!1,"Phoenix Wright 2.0")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Executer's Ax",H.a([$.tf,$.N,$.au,$.mk],s),"Probably an inheritance or some shit.",!1,"Handheld Guillotine")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Courts","Manors","Halls","Mansions","Legacy"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cb,$.m)
r=$.z
q="With the death of the "+r+", it now falls to the "
p=$.o
o=[U.c]
t.i(0,new R.a5("Inherit Responsibilities",!1,[new U.c(q+p+" player to take up all their old responsibilities. Wow, who knew a cranky giant snake did so much to keep things running? "),new U.c("After organizing taxes, approving budgets and listening to "+$.t+" complaints for what felt like forever, the "+p+" is finally allowed a break. Wow, this posh as fuck mansion they get to use ALMOST makes up for all the bullshit work they have to do!"),new U.c("The "+p+" is FINALLY caught up with the backlog of bullshit caused by the death of the "+r+". Now they just have to manage up keep and crisis management. They think they can handle it.")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
r="The "+$.z+" has released the frogs into the "
p=$.o
t.i(0,new R.bA("Inherit the Frogs",!1,[new U.c(r+p+"'s care. The land becomes a lot more frantic feeling with all that croaking. The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.bL)}}
X.m1.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Wand",H.a([$.W,$.S,$.a1,$.bi],s),"It's probably science powered.",!1,"Shitty Wizard Pencil")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Angel Feather",H.a([$.bi,$.bz,$.S,$.aP,$.a8,$.Z,$.a1],s),"Angels are, like, these terrible feathery monsters. Don't fuck with them.",!1,"Shitty Wizard Pencil")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Never Ending Story DVD",H.a([$.bP,$.tp,$.S,$.a1,$.aS,$.bi],s),null,!1,"White Dragon Kidnaps Kid The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candle",H.a([$.bi,$.aP,$.S,$.ao],s),null,!1,"Dying Light Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Figurine",H.a([$.aA,$.aP,$.S,$.bi],s),null,!1,"Tiny Petrified Tinkerbell")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Meditation","Altars","Hymns","Chapels","Priests","Angels","Belief","Hope","Faith","Determination"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.t0,$.j)
q.i(0,$.cJ,$.m)
q.i(0,$.aN,$.j)
q.i(0,$.cz,$.j)
p=$.o
o="The "+p+" is just minding their own business when they see a wizened "
n=$.t
o=o+n+" walk sedately off a cliff. Before they can even panic, though, the wizened "+n+" is revealed to be walking sedately in mid air! How did he do that? The "+p+" calls out to the  wizened "+n+". When pressed, she reveals that the key is to BELIEVE. Never waver, never lose faith. Just believe. The "+p+" begs to be taught the secrets of such STRONG belief, and the wizened "+n+" agrees to mentor them."
m="The "+p+" isn't doing so well. They meditate, they do everything they can to believe, but still they fall when they step off a small ledge.   The wizened "+n+" admonishes them with a gentle "+$.K+".  Unless they can believe 6 impossible things before breakfast, they will never make progress. "
l="A village of "+n+"s has been destroyed and looted. "
k=$.z
l=l+k+" is quietly blamed by the survivors. Their lair is unreachable by normal means, being across a vast gulf. Any bridges or ropes that cross the chasm are immediately destroyed by underlings.  The wizened "+n+" calls over the "+p+" and hands them a "
j=$.ae
l=l+j+". They didn't want to give the "+p+" this "+j+", for it would make belief far too easy and it is more rewarding to do things the right way. But the need is too dire. The wizened "+n+" asks that the "+p+" defeat "+k+" and retrieve their belongings."
k=j+" in hand, the "+p+" marches forward across the empty air of the chasm. They challenge "+k+" to combat."
j="The "+p+" is victorious. They bring all the stolen valuables to the "+n+" village and thank the wizened "+n+" for the "+j+". In a dramatic reveal, the wizened "+n+" reveals that the magic of belief was in the "+p+" all along. The "+j+" was just a trinket they bought online. The "+p+" learns to have faith in themselves. "
p="The "+p+" fails to believe hard enough. They are defeated."
n=$.EN
i=[U.c]
q.i(0,new R.R("Learn to Believe",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a_(k,p,j)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Lies","Bullshit","Deceit","Slander","Fakes","Con Artists","Ruses"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.ip,$.m)
s.i(0,$.d_,$.j)
p=$.o
o="The "+p+"  is approached by a Crafty "
m=$.t
o=o+m+" who offers them a magical "
l=$.ae
o=o+l+", guaranteed to grant them the power to believe things into existance once per year. The "+p+" is shocked to discover it was a ruse, and the Crafty "+m+" has already escaped to the side with their ill earned boonies. "
k="The "+p+" is contemplating the magical "+l+" they wasted their boonies on.  Why would the Crafty "+m+" tell such specific lies? Maybe...this is some kind of... challenge? The The "+p+" spends time imagining what they would try to make if it were true."
j="The "+p+" finds a grey town of despondant "+m+"s. Their belief is gone, and they have no hope for the future. After some amount of shenanigans, the "+p+" learns that "
h=$.z
j=j+h+" has been hoarding all the belief and steals it from the "+m+"s regularly. They have to be stopped!"
g="The "+p+" approaches "+h+", magical "+l+" in hand. The "+h+" rears up and rumbles 'I DO NOT BELIEVE YOU ARE GOING TO FIGHT ME.'.   The "+p+" feels frozen. They cannot take a single step towards "+h+", even as it looms menacingly towards them. What is going on? Suddenly, they feel the "+l+" in their hand. They wish it were real. They wish so hard because if it were they could just WISH they could fight back. Suddenly, they are able to attack!  The Strife is on!"
m=h+"'s belief was no match for the power of the "+l+". They are dead, and hope will be free to flourish among the "+m+"s once again."
s.i(0,new R.R("Believe the Lies",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(g,"The "+l+" could not stand up to "+h+" after all. The "+p+" has been defeated.",m)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Possibilities","Alternatives","Change","Possibility","Potential","Hope"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.ds,$.L)
t.i(0,$.cA,$.j)
t.i(0,$.cz,$.j)
r=$.o
q="The "+r+" finds a grey town of despondant "
p=$.t
q=q+p+"s. Their daily lives are without meaning, without joy, and will never change. "
o=$.z
q=q+o+" has stolen all possibilities, all hope away. There is only this.  The "+r+" vows to find a way to help. The "+p+"s fail to be inspired."
m="The "+r+" learns that part of the reason the "+p+"s are hopeless is that the local "
l=$.ae
t.i(0,new R.R("Be the Change You Believe In",!1,[new U.c(q),new U.c(m+l+" mine has dried up. Without "+l+" the "+p+" economy is completley flat. There are no jobs!  The "+r+" refuses to give up. They search high and low until they finally find a new source of "+l+" for the consorts. There is a festival to celebrate. Things are finally looking up!"),new U.c("Disaster strikes! The new "+l+" mine has been utterly destroyed. It is obvious that it is the work of "+o+". They simply refuse to allow hope to survive. The "+r+" is going to need to deal with them."),new U.a_("The "+p+"s deserve Hope, they deserve a better life. The "+r+" is going to show them. But before they can work on fixing their problems, "+o+" must be fought. The "+r+" dramatically challenges them.","Hope is dead.","Hope. Survives.")],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.o
o="The "+r+" discovers a group of "
p=$.t
o=o+p+"s locked in a sadistic death game. When all seems lost, the "+r+" inspires them to pull through at the last moment and survive, defeating the Crazed Mastermind (who was of course hidden within the group of "+p+"s) in the process."
l="The "+r+" finds ANOTHER group of "+p+"s locked in a sadistic death game orchestrated by a Crazed Mastermind. They do the Hope thing and inspire them to persevere, but this is getting ridiculous. Where are all these Crazed Masterminds even COMING from?"
m="The "+r+" has dealt with so many death games at this point. You don't even know. Finally, they find out that every Crazed Mastermind "+p+" has been working for the "
q=$.z
t.i(0,new R.R("The Ultimate Hope",!1,[new U.c(o),new U.c(l),new U.c(m+q+". All of them. Looks like it's time to finally challenge the Ultimate Despair. "),new U.a_("The "+p+"s deserve Hope, they deserve a better life. One not full of random ass death games.  The "+r+" is going to stop the "+q+", once and for all. ","Hope is dead.","Hope. Survives.")],H.a([],i),R.hD(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n.i(0,new X.G(s,t,null),$.at)}}
X.m6.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Footstick",H.a([$.dt,$.N,$.mn,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Cheating Guide",H.a([$.aw,$.N,$.jj,$.J],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of Shogun",H.a([$.O,$.N,$.f7,$.tq,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The JR's Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Macrobots",H.a([$.tz,$.N,$.mg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"MACROMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cB,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.de,$.j)
t.i(0,$.ec,$.j)
t.i(0,$.eW,$.j)
t.i(0,$.h8,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Y("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.ug(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cf+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.a_(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wx(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
t.i(0,new R.Y("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wy(),!1,!1,new Y.c0("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.at)}}
Q.m9.prototype={
b2:function(a){var t=0,s=P.bp(),r,q,p
var $async$b2=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:q=W.vA(null,a,null)
p=new W.eE(q,"load",!1,[W.Q])
t=3
return P.cs(p.gac(p),$async$b2)
case 3:r=q
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$b2,s)},
$asdm:function(){return[W.f5]},
$asc6:function(){return[W.f5,P.bg]}}
Q.nB.prototype={
aR:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bp(),r,q=this,p,o,n
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:n=W
t=3
return P.cs(q.cG(b),$async$P)
case 3:p=n.vA(null,d,null)
o=new W.eE(p,"load",!1,[W.Q])
t=4
return P.cs(o.gac(o),$async$P)
case 4:r=p
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)}}
Q.ny.prototype={
aR:function(a){return"image/png"},
P:function(a,b){var t=0,s=P.bp()
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:throw H.k("Read NYI")
return P.bs(null,s)}})
return P.bt($async$P,s)},
$asdm:function(){return[Q.jA]},
$asc6:function(){return[Q.jA,P.bg]}}
B.hg.prototype={
D:function(){var t,s
t=Q.I(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"The Third Entry for This Fucking Block")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.b1,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.Y("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.j)
s.i(0,$.ee,$.L)
s.i(0,$.eX,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cb,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.Y("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.b1,$.L)
t.i(0,$.c5,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
t.i(0,new R.Y("Relax the Consorts",!1,[new U.c(q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+r+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+r+" teaches the local "+p+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
r="The "+p+" learns that all of the local "
q=$.t
r=r+q+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+p+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+q+" "
l=$.K
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(r),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+p+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+q+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ue(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
n.i(0,new X.G(s,t,null),$.aC)},
A:function(a){return this.ch},
gG:function(a){return this.ch}}
A.a4.prototype={
aA:function(a,b){var t=b.gby()-this.gby()
if(t>0)t=1
else if(t<0)t=-1
return C.d.bz(t)},
gh4:function(){var t,s,r,q,p,o
t=H.a([],[P.B])
s=new A.hE(null,null)
s.c7(this.f.a)
if(this.r===0)return t
r=P.d1(G.yD(this.f),!0,G.a0)
C.b.d3(r,new A.ms())
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.bT)(r),++p){o=r[p]
if(!(o instanceof G.af||o.gdX().length===0))t.push(" "+Y.GI(s.eh(o.gdX())))}return t},
gby:function(){var t,s,r
for(t=this.f,s=new P.dv(t,t.r,null,null,[null]),s.c=t.e,r=0;s.F();)r+=s.d.gby()
return r},
gfV:function(){var t=this.f
return new H.hS(t,new A.mr(),[H.P(t,0)])},
ghe:function(){var t,s,r,q,p
for(t=this.gh4(),s=t.length,r="",q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q]+" "
return r+this.d},
A:function(a){return this.ghe()},
J:function(a,b,c,d,e){var t,s,r
t=P.tQ(b,null)
this.f=t
if(t.a===0)t.h(0,$.vP)
s=P.tQ(this.gfV(),null)
for(t=new P.dv(s,s.r,null,null,[null]),t.c=s.e;t.F();){r=t.d
this.f.bn(0,r.geJ())
this.f.ae(0,r)}$.$get$wd().push(this)},
$isbF:1,
$asbF:function(){return[A.a4]}}
A.ms.prototype={
$2:function(a,b){return a.gee()-C.a.bz(b.gee())},
$S:function(){return{func:1,args:[G.a0,G.a0]}}}
A.mr.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
N.mz.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Gavel",H.a([$.W,$.to],s),null,!1,"Tiny Whacky Smacky Skull Cracky of Justice")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Caution Tape",H.a([$.aA,$.b2],s),null,!1,"Impassible Barrier")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Deerstalker Hat",H.a([$.O,$.ax],s),"Sherlock Holmes has nothing on Detectron 3000.",!1,"Horns but not Troll Horns put on a Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mystery Novel",H.a([$.J,$.aw],s),null,!1,"Book where the Criminal was the Janitor")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dish Served Cold",H.a([$.bO,$.an,$.bm],s),null,!1,"REVENGE")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pony Pals: Detective Pony ",H.a([$.J,$.aw,$.al],s),"Truly the most ironic work of all time.",!1,"A Disgusting Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Handcuffs",H.a([$.aG,$.D,$.b2],s),"These ones aren't fucking pointless like those trick ones.",!1,"Wrist Imprisoning Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Consequence","Trials","Justice","Courtrooms","Crime","Punishment","Law","Karma"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h5,$.L)
q.i(0,$.c4,$.m)
q.i(0,$.cA,$.L)
p=$.o
o="The "+p+" finds an elaborate courtroom full of "+$.K+"ing "
n=$.t
m=[U.c]
q.i(0,new R.Y("Shit, Lets Be Lawyers",!1,[new U.c(o+n+"s. Apparently the prosecuting attorney flaked out and they need someone to fill the role. The "+p+" agrees to see that justice is served. "),new U.c("The "+p+" is tasked to prosecute a local "+n+" accused of stealing food for her family. After much elaborate debate and arguments, the "+p+" secures the guilty verdict while also convincing the judge to pursue the minimum sentence. Everyone is relieved that justice is done while not harshly punishing a near innocent.     "),new U.c(" The "+p+" presides over the case of the treacherous Senator "+n+"snout. He is accused of embezzling "+$.ae+"s from the Imperial Coffers. The "+p+" easily finds Senator "+n+"snout to be guilty and sentences them to life in prison. This is EASILY the case of their career and it is with a regretful heart they step aside as Prosecuter. They simply can never top this one.")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.r
n.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c4,$.j)
s.i(0,$.dr,$.m)
s.i(0,$.cQ,$.m)
p=$.o
o="A frantic underling run past the  "+p+". In hot pursuit, a "
l=$.t
l=o+l+" yells 'Stop that thief' in betwen "+$.K+"s. Without thinking, the "+p+" grabs the underling. The "+l+" is impressed, and offers the "+p+" a job as a deputy police officer. "
o="The "+p+" is doing their rounds as a deputy police officer. So far, everything is peaceful."
p="A missing "+$.ae+". Three suspects. A locked door. The "+p+" blows everyone away by cracking the case wide open and sending the perpetrator to the slammer. They are promoted from deputy to a full blown detective, which comes with a lot less frequent jobs, but far more prestige. They even get a seasoned carapace partner who is two weeks from retirement. "
k=$.EJ
s.i(0,new R.Y("Enforce the Law",!1,[new U.c(l),new U.c(o),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,k,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.cb,$.m)
t.i(0,$.dd,$.L)
t.i(0,$.eg,$.m)
t.i(0,$.ed,$.m)
t.i(0,$.eZ,$.m)
t.i(0,$.it,$.m)
r=$.o
q="The "+r+" finds a crowd of "
p=$.K
q=q+p+"ing "
o=$.t
q=q+o+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+o+"s in charge. The "+r+" is moved by their plight and agrees to try to help."
r="The "+r+" meets with the upper class "+o+"s to try to negotiate a peaceful revolution. Unfortunately, the "+o+"s refuse to listen to reason, and even call their guards to attack the "+r+". After easily defeating the guards, the "+r+" declares war. You cannot stop the fires of Revolution!  "
p="It has been a long struggle, but finally the corrupt high class "+o+"s have been taken prisoner. The common "+o+"s "+p+" and rejoice and declare a national holiday. The rebellion has won! "
o=$.EW
t.i(0,new R.Y("Start a Revolution",!1,[new U.c(q),new U.c(r),new U.c(p)],H.a([],m),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,o,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.aC)}}
S.mB.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Shining Armor",H.a([$.aG,$.mm,$.N,$.f8],s),"Knight Shit",!1,"Kyoto Overcoat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Excalibur",H.a([$.Z,$.mm,$.N,$.aL,$.au,$.f9],s),"Knight Shit",!1,"Masamune")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Noble Steed",H.a([$.D,$.N,$.bh,$.ap],s),"Knight Shit",!1,"Horse Prime, Envoy of the Ultimate End")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Hero's Shield",H.a([$.aG,$.f8,$.N,$.mm],s),"Knight Shit",!1,"A Weaklings Way Out, Shame Upon You")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Heat","Volcanos","Flame","Lava","Magma","Fire"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.lF,$.j)
t.i(0,$.dI,$.j)
t.i(0,$.dZ,$.j)
t.i(0,$.eZ,$.j)
t.i(0,$.h5,$.m)
r="The "+$.z+" has cooled the lava enough for water to begin pooling in places, which attracts frogs.  The land is less overheated. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Breed the Frogs",!1,[new U.c(r+q+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+q+" has a weird system going where the newest zapped in tadpole presses the buttont to zap in the next one. Things are going almost as quickly as if they had another player's help. "),new U.c("The "+q+" has found the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.z
r="Now that the "+q+" is defeated, the "
o=$.t
r=r+o+"s could really use some basic infrastructure repairs. The "
n=$.o
t.i(0,new R.a5("Exploit the Heat",!1,[new U.c(r+n+" finds instructions for a thermal energy converter in a dungeon and alchemizes all the parts needed to build one. The "+o+"s will have power for generations,now. "),new U.c("An important wall is crumbling. While the defeat of the "+q+" means the underlings are mostly under control, the "+o+"s would feel a lot better with it fixed. The "+n+" figures out how to patch it up with bits of cooled lava. Everyone feels just a little bit safer."),new U.c("The "+n+" rigs an automatic lava dispensor to light fire moats around consort villages, automatically patch wall holes and even bake consort bread.  Who knew all this shitty heat could be good for something?  The "+o+"s quality of life is at an all time high! ")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.aH
n="A fiery "+o+" Dragon has risen up in the wake of the defeated "
q=$.z
n=n+q+". A Learned "+$.t+" explains that it can only be defeated by the Legendary "
r=$.ae
n=n+r+" Blade. The "
m=$.o
t.i(0,new R.a5("Fight the Beast",!1,[new U.c(n+m+" prepares to go questing for it. "),new U.c("The "+m+" finds the Legendary "+r+" Blade stuck in a rock. After a lot of fucking around trying to remove it, they accidentally snap it in half. Welp. Guess it can't hurt to go fight the "+o+" Dragon anyways. How much harder can it be than a "+q+", anyways?"),new U.c("The "+m+" is engaged in an epic, yet conviniently off screen strife with the "+o+" Dragon. Nothing seems to have any effect untill, out of desparation, the "+m+" pulls out the broken Legendary "+r+" Blade and chucks it at the mighty dragon. A blade of ghostly "+r+" extends from it an the dragon is vanquished.  Huh. You....guess that the blade was always supposed to be like that? Huh.")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
r="The volcanos of the land are weirdly active after the defeat of the "+$.z+". One begins to erupt near a "
m=$.t
r=r+m+" village.  The resident "+m+"s are filling the air with panicked "+$.K+"s, but not really doing anything to evacuate or save anyone. The "
o=$.o
t.i(0,new R.a5("Protect the Consorts",!1,[new U.c(r+o+" face palms, then begins wildly captchalogging everyone in order to get them to safety.  When they let everyone free, the village is destroyed, but at least it's people are safe."),new U.c("Another day, another volcano is erupting. After decaptchalogging the final rescued "+m+", the "+o+" thinks that there MUST be a better way."),new U.c("After a lot of false starts, the "+o+" has managed to rig a system where the rising heat of the lava itself will trigger entire "+m+" villages to just rise up out of harms way. Hell yes!")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
Q.mC.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Dream Diary",H.a([$.J,$.aw,$.S],s),null,!1,"Tomb of the Writer\u2019s Insecurities and Weaknesses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Interlocking Brick",H.a([$.aA,$.bk,$.ad,$.S,$.Z],s),"Lame. JR didn't want to use a brand name all of a sudden?",!1,"A Fucking Lego But Legally JR\u2019s Too Much Of A Coward To Say It")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Art Supplies",H.a([$.aA,$.bk,$.S],s),null,!1,"The Tools For Smithing Pieces of Art That I Stole From KR")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Arts","Craft","Crafting","Making","Creating","Building","Creation"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.ec,$.m)
q.i(0,$.dq,$.j)
q.i(0,$.aN,$.m)
q.i(0,$.iv,$.m)
p=$.t
o="A "+p+" child tugs on the "
n=$.o
o=o+n+"'s sleeves and asks if they can make them a picture of a "
m=$.ae
o=o+m+". The "+n+" is happy to help! They discover that drawing the picture makes a "+m+" symbol on the locked "
l=$.z
o=o+l+"'s lair light up.  Only 99 to go!"
p="An entire line of "+p+" children are "+$.K+"ing excitedly and expecting identical pictures of "+m+"s.  Some how each picture is harder to make and more agonizingly boring than the one before. The "+n+" is getting burnt out. A wizened "+p+" approaches them. They wonder why the "+n+" looks so glum. Don't they enjoy drawing? When the "+n+" explains their situation, the wizened "+p+" wonders if burning themselves out is really required like they think. "
m="The "+n+" is happily drawing away. Sometimes they draw pictures of "+m+"s, but it's always in service of some new and interesting idea they want to test out. Often times their pictures don't even involve a "+m+". Before they know it, the "+l+"'s lair is open. They sketch a few more things to get the ideas on paper before they lose their train of thought, then begin preparing to face the "+l+"."
n="The "+l+" is a smug asshole about how they taught the "+n+" a 'lesson' on trying to force creativity.  The "+n+" thinks they were just trying to be a dick. They strife."
l=$.wm
k=[U.c]
q.i(0,new R.R("Make the Thing",!1,[new U.c(o),new U.c(p),new U.c(m),new U.a_(n,"Shit. Now we're going to have to sit through this exact same strife again in the future. Lame.","And THAT is why you don't piss of a creative person.")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=this.f
l.i(0,new X.G(s,q,null),$.at)
q=H.a(["Memes","Remixes","Mashups","Deconstruction","Satire"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cb,$.m)
s.i(0,$.dq,$.j)
s.i(0,$.d_,$.m)
s.i(0,$.cz,$.m)
s.i(0,$.eW,$.m)
s.i(0,$.cu,$.j)
p=$.o
o="There is a portrait of the "+p+" that some local jokester has vandalized to say 'bluh, bluh, huge bitch'. The "+p+" tries not to let it bother them. "
n="More and more frequently, the "+p+" sees vandalized copies of their portraits. Teen "
m=$.t
n=n+m+"s are even starting to snigger and "
j=$.K
j=n+j+" when they see them! This cannot stand! They try to tear the vandalized portraits, but it only makes the teen "+m+"s "+j+" harder. "
m="In a flash of inspiration, the "+p+" publishes art work that consists of 100 different remixed versions of the vandalized portraits. They explore the theme of 'bluh bluh huge bitch' so many times, in so many mediums it stops to even have meaning. In one move, the "+p+" has reclaimed the vandals hateful message as their own one of strength. "
n=$.z
s.i(0,new R.R("Deconstruct the Satire",!1,[new U.c(o),new U.c(j),new U.c(m),new U.a_("The "+n+" is furious that their campaign to discredit the "+p+" has failed. They attack the "+p+" directly in a blind rage.","Shit, that didn't go according to plan.","Who's the bitch NOW, "+n+".")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(q,s,null),$.at)
s=H.a(["Clouds","Fog","Mist","Rainbows","Moons","Night","Sleep","Dreams","Haze"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.j)
t.i(0,$.ir,$.m)
t.i(0,$.aN,$.m)
t.i(0,$.cz,$.j)
t.i(0,$.eW,$.j)
t.i(0,$.dq,$.m)
r=$.o
q="The "+r+" is wandering around, as if in a dream. Everything is hazy and confusing. A "
p=$.z
t.i(0,new R.R("Dream the Dream",!1,[new U.c(q+p+" Minion wanders by in a "+$.aH+" "+r+" costume and it just seems inevitable.  "),new U.c("You are trying to make sense of things. What is going on lately with the land? A "+$.t+" is "+$.K+"ing in reverse. Another is in a "+$.ae+" wig.  "),new U.c("A boardroom filled with underlings glares severely at the "+r+" when they rudely barge in. Embarassed, they stammer out an apology and leave. "),new U.a_("The "+r+" rides a rubber ducky, which is itself made out of jello. It's obviously time to fight the "+p+".","The dream won't end, even if you die in it.","Oh. It's finally over.")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
l.i(0,new X.G(s,t,null),$.at)}}
K.mE.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Creeping Vine",H.a([$.W,$.S,$.aQ,$.ap],s),null,!1,"Sentient Plant Tentacles")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lollipop",H.a([$.th,$.S,$.aJ],s),null,!1,"Sentient Plant Tentacles")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Golem",H.a([$.aG,$.av,$.S,$.ap],s),"I guess. It's LIKE a robot. Sort of. Just not a super computer.",!1,"Living Rock Man")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ectoplasm",H.a([$.bV,$.S,$.aJ],s),null,!1,"Ghost [Censored]")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Aqua Vitae",H.a([$.aT,$.S,$.aJ,$.Z,$.a1],s),null,!1,"Tears of JR")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Homunculus",H.a([$.bh,$.S,$.ap],s),"Ugh. It's like a robot, but made of flesh. WHY WOULD YOU DO THIS.",!1,"False Man")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Forests","Chlorophyll","Moss","Trees","Jungles","Wood","Tribes","Timber","Wilds","Thickets","Coppices","Copses"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.c5,$.j)
q.i(0,$.b1,$.j)
q.i(0,$.h6,$.L)
q.i(0,$.aN,$.m)
q.i(0,$.lI,$.m)
q.i(0,$.cB,$.L)
p=$.o
o="The "+p+" finds a village of compliant "
n=$.t
o=o+n+"s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the "+p+" tries to offer help they begin "+$.K+"ing in panic. Don't upset "
m=$.z
o=o+m+", they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "
l="The "+p+" revisits the village compliant "+n+"s, only to discover it's freshly destroyed. A weeping "+n+" explains that they couldn't keep up their pace and had to rest, and that is when "+m+" attacked. Please. HELP them, he begs. The "+p+" agrees to go face "+m+"."
k="In a nest built of thousands of splintered trees, the "+m+" waits. It is time to fight. "
n="The "+p+"'s power is greater. They survive, and help the "+n+"s to survive as well."
p=[U.c]
q.i(0,new R.R("Restore the Forest",!1,[new U.c(o),new U.c(l),new U.a_(k,"The "+m+" is stronger. The strong survive. The weak perish.",n)],H.a([],p),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Gardens","Summer","Growth","Dew","Spring","Beginnings","Vitality","Strength","Fields","Farms"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.j)
s.i(0,$.cv,$.j)
s.i(0,$.cB,$.L)
s.i(0,$.aN,$.m)
o=$.o
m="The "+o+" finds a lush garden, dutifully tended to by "
l=$.t
m=m+l+"s. Unfortunately, the food is left to rot in piles, as Underling brigands block the road and prevent the produce from being distributed. The "+o+" agrees to help."
k="The "+o+" sneaks along the main road and finds the Underling Brigands lying in wait. They are dispatched in short order, and the "+o+" heroically informs the "+l+"s that they can once again begin shipping their food."
l="The "+o+" follows the road to find a new village, fileld with hungry "+l+"s. Apparently the food has been stolen by a "
j=$.z
l=l+j+" minion! Enraged, the "+o+" tracks down the minion and defeats it. They now know this will not be the end of it. They need to nip this in the bud. "
i="The "+o+" approaches the "+j+". It ends here."
o="The "+o+" was strong enough to win! The consorts will never have to worry about their food being destroyed senselessly again."
s.i(0,new R.R("Distribute the Food",!1,[new U.c(m),new U.c(k),new U.c(l),new U.a_(i,"The tyranny of "+j+" continues.",o)],H.a([],p),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Decay","Locusts","Bogs","Blight","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine","Hunger","Disease"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cZ,$.j)
t.i(0,$.b1,$.L)
t.i(0,$.dK,$.j)
t.i(0,$.c_,$.m)
t.i(0,$.dY,$.m)
t.i(0,$.io,$.m)
r="Drawn by wailing and "+$.K+"ing, the "
q=$.o
r=r+q+" enters a rotting "
o=$.t
r=r+o+" village. They are in the throes of a famine they explain. Locusts damage their fields and blight destroys the weakened remainder. They cannot feed everyone once winter comes if this continues.   The "+q+" vows to help."
m="The "+q+" strifes countless swarms of locusts, but there seems to be no end to them. They finally track down a hive, guarded by several "
l=$.z
m=m+l+" minions. It is as easy as thinking to destroy everything, but the "+q+" is left uneasy. Why were the minions causing this on purpose?  "
k="Although the locusts have thinned in numbers, the blight is as strong as ever. Even the most potent of alchemized fungicides seem to only keep back the blight for a day. At their wits end, the "+q+" stays in the fields overnight to discover that "+l+" minions are spreading a strange powder on the fields. Defeating them is a start, but clearly "+l+" is dedicated to causing famine. They must be dealt with. "
l="The "+q+" faces the "+l+". It will end here."
j="The "+q+" is strong enough to impose their will on the world. Famine will not trouble the "+o+"s any longer."
t.i(0,new R.R("Protect the Farms",!1,[new U.c(r),new U.c(m),new U.c(k),new U.a_(l,"The "+q+" was not strong enough. Can anything save the "+o+"s before winter? ",j)],H.a([],p),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
G.mF.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("FAQ",H.a([$.a6,$.S,$.X,$.bW],s),"Probably found it on a server in the Furthest Ring.",!1,"Questions to Ping JR About")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flashlight",H.a([$.aA,$.S,$.aP,$.a6,$.bW],s),null,!1,"Tube of Localised Sun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Octet",H.a([$.S,$.aP,$.bW,$.Z,$.ti],s),null,!1,"D13")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Horseshoe",H.a([$.vT,$.S,$.ad],s),null,!1,"Horse Sneaker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Rabbits Foot",H.a([$.w0,$.S],s),null,!1,"Rabbit Remains")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("4 Leaf Clover",H.a([$.aQ,$.S,$.aP,$.bW],s),null,!1,"Plant of Luck +4")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("8-Ball",H.a([$.aT,$.S,$.ap],s),"It seems this is never right. Ask again later or some shit.",!1,"Worst Characters Only Quality")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=[P.B]
s=H.a(["Luck","Casinos","Gambling","Dice","Cards","Fortune","Chance","Betting"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lD,$.j)
q.i(0,$.ec,$.m)
q.i(0,$.dH,$.j)
q.i(0,$.ef,$.j)
p=$.o
o="The "+p+" is searching for the lair of "
n=$.z
o=o+n+" when some local "
m=$.t
o=o+m+"s run past them carrying what appears to be primitive filming equipment and fancy props. After walking a little while longer the "+p+" comes across a huge building in the distance. On the front displays a sign that seems to advertise some sort of game show."
l="The "+p+" reaches the building and enters to find that it is in fact the filming location of a Game Show run by the local "+m+"s. What catches the "+p+"\u2019s eye, however, is that apparently the Grand Prize for winning the show is an exclusive meeting with none other than "+n+"! This could be the "+p+"\u2019s big chance! With determination in their eye, they eagerly sign up for the next scheduled airing of the show."
k="Tonight\u2019s episode of the game show has gotten underway, and so far it looks like the "+p+" is doing pretty well. The show cuts to a commercial break, and the "+p+" take the time to reflect on the current situation. With their superior intellect they easily win the first round, a test of intelligence, by a mile compared to their fellow "+m+" contestants. The "+p+" struggles with the second round, a test of athleticism through an obstacle course, however, and one of their opponents gains a point, tying up the game. If the "+p+" fails to win the next round, it could potentially jeopardize their chance to fight "+n+". This next round will be one the "+p+" cannot afford to lose."
j="Through sheer luck the "+p+" manages to spin a lucky number on the final round, which is merely a spin on the wheel with the number it rests on determining your reward. Your  "+m+" opponents shake your hand as they admit defeat, as "+n+" emerges from the shadows, ready to fight you at last."
m=n+" lies slain. The "+m+" host congratulates you on your victory and presents you your second prize, a brand new car! Unfortunately it is subsequently stolen by your opponents, who drive off, never to be seen again."
i=[U.c]
q.i(0,new R.R("Be the Contestant",!1,[new U.c(o),new U.c(l),new U.c(k),new U.a_(j,"Alas, the "+p+"\u2019s meeting with "+n+" ends in failure. And though their strife may have ended poorly, they will be remembered for being the best damn contestant this game show ever had. They will also have a consolation prize invitation to try again whenever they want!",m)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
n="The "+m+" finds a sparkling Casino. Inside, amid "+$.K+"ing "+$.t+"s is a single door, locked by three runes, each depicting a different form of gambling, Slots, Cards and Coins. Huh. The "+m+" approaches the slots and begins to play. Finally, after what must be hours, they get three Light symbols. The Slot rune lights up. One down, two to go."
p="The "+m+" thinks they finally have the rules of poker down enough to try the next set of gambling challenges. After a nerve wracking series of hands, they bet it all on a risky gamble, only to pull through with a Royal Flush!  The Cards rune lights up."
j="It is time for the final gamble. A single coin flip will decide it all. No take backs, no replays.   It lands. TAILS! The Coin rune lights up, and the door is open. The "+m+" begins to prepare for whatever may lay within."
k="When the "+m+" finally enters the Casino Door, the "
l=$.z
k=k+l+" is already rampaging. They are pissed off as fuck that they have been off screen this entire time, and blame the "+m+" for it. It's time to strife! "
m="The "+m+" was lucky enough to pull off a win! The "+l+" is too dead too rampage."
q.i(0,new R.R("Go Big or Go Home",!1,[new U.c(n),new U.c(p),new U.c(j),new U.a_(k,"Bad break, the "+l+" is going to keep throwing a hissy fit.",m)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.f
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Glow","Light","Rays","Sun","Shine","Sparkle","Sunshine","Stars"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.c5,$.m)
s.i(0,$.aN,$.m)
s.i(0,$.ds,$.j)
s.i(0,$.lC,$.j)
s.i(0,$.ee,$.j)
s.i(0,$.ip,$.j)
p=$.o
o="The "+p+" walks into a "
n=$.t
o=o+n+" village, and finds all of them standing dejectedly in the village center. Their town has a monthly ceremony celebrating "
l=$.ae
o=o+l+", but "
k=$.z
o=o+k+" has hoarded all of the planets "
j=$.aH
l=o+j+" Candles, and everyone knows you cant have a good "+l+" ceremony without candles! The "+p+" vows to take back some "+j+" Candles for the poor "+n+"s. "
o="After a long search, the "+p+" has found the warehouse where "+k+" has stored all the candles. "+j+" Candles must be very valuable to "+k+" for some reason, because the warehouse roof is swarming with minions, waving a lot of bright spotlights in random intervals. The spotlights will need to be dealt with if the "+p+" wants to sneak in without alerting a horde of "+k+" minions."
h="After spending hours attempting to determine the rotation of the guards and the patterns of spotlight waving with no luck, the "+p+" realizes they dont have to avoid the lights if they can turn them off instead. They locate an unguarded electric panel outside and cut the power. The "+k+" minions dont even leave the roof; they just confusedly wave their now useless spotlights, allowing the "+p+" to slip inside with ease. Captchaloging as much "+j+" Candles as they can, the "+p+" triumphantly returns to the village among the joyful "+$.K+"ing of the "+n+"s."
k="The "+p+" is ready to challenge the "+k+" to keep them from restealing the "+j+" candles. "
n="Never again shall the "+n+"s be without "+j+" Candles!"
s.i(0,new R.R("The Candlestick Taker",!1,[new U.c(l),new U.c(o),new U.c(h),new U.a_(k,"The "+j+" candles are once again at risk.",n)],H.a([],i),R.uf(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.o
j="The "+n+" finds an incongruous dark patch in the otherwise brightly lit land. A quivering "
k=$.t
j=j+k+" explains that the "
h=$.z
s.i(0,new R.R("Shine the Light",!1,[new U.c(j+h+" has forbidden the "+k+"s from having light, and moved giant disks to block it from them. Now that's just being mean!  The "+n+" vows to help.   "),new U.c("The "+n+" has finally managed to destroy the disk blocking light from the "+k+" village. There is a chorus of happy "+$.K+"s as they bask in the light. The "+n+" feels good about a job well done. "),new U.c("Disaster!  The "+k+" village is once again shrouded in darkness, this time from an even larger disk than before. Judging from the roars, the "+h+" is guarding the disk themself.  The "+n+" must prepare themself for a tough fight.  "),new U.a_("The "+n+" has managed to reach the disk guarded by the "+h+". The monster denies even so basic a right as light, there can be no quarter. It's time to strife!","Darkness reigns.","The "+h+" is defeated, the disk destroyed. Finally, the "+k+"s can enjoy the light in peace.")],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Knowledge","Information","Books","Encyclopedias","Understanding","Libraries"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.h7,$.m)
q.i(0,$.b1,$.m)
q.i(0,$.f_,$.j)
q.i(0,$.aN,$.m)
q.i(0,$.cA,$.j)
p="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
p=p+o+" sets up a wiki and settles in to help the "
n=$.t
p=p+n+"s deal with it all."
n="Within barely any time at all, the "+n+" wiki is a huge success! Everybody works hard and shares their expertise, and the "+o+" makes sure all of the information is from credible sources."
o="When the "+o+" falls ill to a mysterious illness, it's one witness' quick check of the wiki that saves the day. It turns out it was their peanut allergy acting up, not an illness at all! "
l="The "+$.f2+" has assembled just, ALL the knowledge. How can you possibly hope to beat them?"
q.i(0,new R.a5("Moderate the Wiki",!1,[new U.c(p),new U.c(n),new U.c(o)],H.a([],i),R.e2(),!1,!1,new Y.c0("Information Network",l,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
l="Now that the "+$.z+" has been defeated, there really needs to be some way to organize all this information from their Lair. The "
o=$.o
l=l+o+" shrugs and sets up a wiki and lets the "
n=$.t
l=l+n+"s deal with it all."
n="Within barely any time at all, unmoderated "+n+" wiki is a huge disaster. Misinformation abounds. There are no less than three articles on the "+o+" alone, and each claims they are a different SPECIES entirely. The "+o+" finds this to be hilarious."
o="Luckily it turns out all that disinformation running around about the "+o+" thwarts some would be assasins. It turns out the "+o+" is NOT deathly allergic to peanuts, after all. That's what you get for trusting a wiki, assholes. "
p="The "+$.f2+" allows you to make you own assumptions about things, and be destroyed by them."
q.i(0,new R.a5("Create the Wiki",!1,[new U.c(l),new U.c(n),new U.c(o)],H.a([],i),R.eo(),!1,!1,new Y.c0("Disinformation Network",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
o=p+"s are falling ill left and right due to a mysterious Plague. It doesn't seem to follow the pattern of a disease, having no communicability. What is going on and how can the "
n=$.o
o=o+n+" possibly stop it?"
p="The "+n+" pours over maps and charts. What do the sick "+p+"s have in common with each other?  Finally, there is a flash of inspiration. "+p+"s who live or work closer to a particular river that meanders across the planet are the ones becoming ill! The "+n+" quickly orders the river quarantined and new cases begin to taper off. Now it remains to see what can be done about those already sick. "
l="The "+n+" analyzes the water from the contaminated well. Boiling it reveals a thick black sludge.  The collected steam is found to be perfectly safe to drink. The "+n+" discovers that the sludge causes a strange vitamin deficiency, and supplies the town with supplements to fix the sickness.  Things are looking brighter, indeed."
k="The "+n+" traces the contaminated river back to it's source. The "
j=$.z
q.i(0,new R.R("Shed the Light",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a_(k+j+" is revealed to be dripping the gross as fuck sludge into the river. When negotiations fail to make it leave the water, the only remaining option is strife. ","The darkness of the Plague remains.","The "+n+" is victorious. The "+j+"'s body despawns, along with all the sludge in the river. The Plague is finally over!")],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,q,null),$.at)
q=H.a(["Spotlights","Attention","Drama","Stars","Glamor","Holywood"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dH,$.j)
t.i(0,$.lD,$.j)
t.i(0,$.ef,$.m)
t.i(0,$.cJ,$.m)
t.i(0,$.t3,$.m)
t.i(0,$.c_,$.L)
t.i(0,$.dZ,$.L)
t.i(0,$.ck,$.m)
t.i(0,$.cu,$.L)
t.i(0,$.b1,$.m)
t.i(0,$.cy,$.j)
s=$.o
r="The "+s+" is approached by a Fast Talking "
p=$.t
r=r+p+". Apparently the "+s+" has EXACTLY the right look to be the lead in the upcoming production of The Beautiful "
o=$.ae
r=r+o+". The "+s+" agrees to perform the titular role."
n="The opening night performance of the Beautiful "+o+" is a huge success! The "+$.K+"ing of the fans is it's own reward!"
o="When it comes time for the next performance of the Beautiful "+o+", the "+s+" is turned away at the door. Apparently the "
l=$.z
p=o+l+" rampaged and terrorized "+p+"s until given the lead role. They claim that the "+s+" is FAR too drab to be give such an important performance. WHAT. THE. FUCK. The "+s+" isn't going to let this stand."
l="There is not enough room on the stage for both of them. The "+s+" challenges the "+l+" to a glamour off, and wins handily. Enraged, the "+l+" attacks."
o="The "+s+" can finally get back to their promising acting career in peace."
t.i(0,new R.R("Be the Star",!1,[new U.c(r),new U.c(n),new U.c(p),new U.a_(l,"The actig career of the "+s+" is in shambles.",o)],H.a([],i),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
o="After the "+$.z+", the "
s=$.o
o=o+s+" is disappointed to learn that barely any of the "
l=$.t
o=o+l+"s know who they are. This will not do!"
l="Posters, ad campaigns, catchy jingles, and the "+s+" still runs into the odd "+l+" that doesn't recognize them on sight. This is getting ridiculous!"
s="The "+s+" thinks they finally have an idea.  They focus. Light-y bullshit effects rain down from the sky, and their face is super imposed over the brilliance of Skaia itself. Now EVERYONE on their planet knows who is the most important. It is them."
p="The "+$.f2+" is famous, and everyone in this fight is lucky to have met them."
t.i(0,new R.a5("Be the Biggest Star in Paradox Space",!1,[new U.c(o),new U.c(l),new U.c(s)],H.a([],i),R.e2(),!1,!1,new Y.c0("What's my name?",p,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m.i(0,new X.G(q,t,null),$.at)}}
Z.mT.prototype={
D:function(){var t,s,r,q
t=this.M
s=[G.a0]
r=A.i("Dream Bubbles Book",H.a([$.J,$.ah,$.aw,$.vL],s),null,!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),[H.P(t,0)]))
t=Q.I(null,null,A.a4)
r=A.i("Uno Reverse Card",H.a([$.mh,$.mn,$.ah],s),"Some kind of memey bullshit.",!1,"Shoguns Card")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Lord's Cape",H.a([$.O,$.N,$.ah],s),"Lord Shit",!1,"Shoguns Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drawing Tablet",H.a([$.jj,$.N,$.ah],s),"Have fun drawing grids.",!1,"Shitpost Etching Table")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("How to Make Friends And Influence People",H.a([$.Z,$.J,$.N,$.bq,$.aw],s),"Good luck with that. You'll need it, asshole.",!1,"Book for Nerds")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Castles","Keeps","Fortresses","Nobility","Forts","Moats","Dungeons"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dd,$.L)
q.i(0,$.eg,$.L)
q.i(0,$.c_,$.L)
q.i(0,$.cQ,$.m)
p="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
o=$.o
p=p+o+" comands that the "
n=$.t
m=[U.c]
q.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(p+n+"s collect the frogs. The "+n+"s agree with enthusiastic "+$.K+"s. "),new U.c("The "+n+"s hit buttons on the ectobiology machine at random. The "+o+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+n+" minion has finally found the final frog. The "+o+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
o="As soon as the "+$.z+" is defeated, the "
n=$.t
o=o+n+"s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the "
p=$.o
q.i(0,new R.a5("Conquer Everything",!1,[new U.c(o+p+" is up to the task.  "),new U.c("The "+p+" has subjugated/assimilated about half of the "+n+" factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),new U.c("The final "+n+" commander surrenders. The "+p+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.x
p.i(0,new X.G(s,q,null),$.bL)
q=H.a(["Dutton","Charles","Fathers","Prophets","Dew"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.vo,$.j)
t.i(0,$.cz,$.j)
t.i(0,$.b1,$.j)
t.i(0,$.aN,$.m)
s="The "+$.z+" has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The "
r=$.o
s=s+r+" comands that the "
o=$.t
t.i(0,new R.bA("Command Minions to Breed Frogs",!1,[new U.c(s+o+"s collect the frogs in the name of Lord Dutton. The "+o+"s agree with confused, yet enthusiastic "+$.K+"s. "),new U.c("The "+o+"s hit buttons on the ectobiology machine at random. The "+r+" sits back and enjoys a tropical drink. The frogs will be ready eventually. "),new U.c("A "+o+" minion has finally found the final frog. The "+r+" rewards them, and punishes everyone else for failing. ")],H.a([],m),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
r="As soon as the "+$.z+" is defeated, the "
o=$.t
r=r+o+"s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the "
s=$.o
t.i(0,new R.a5("Praise Dutton",!1,[new U.c(r+s+" and their fervant belief in Lord Dutton is up to the task.  "),new U.c("The "+s+" has spread the word of Lord Charles Dutton to about half of the "+o+" factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),new U.c("The final "+o+" shitposter surrenders. The "+s+" controls everything now. They are the Lord of all they survey. ")],H.a([],m),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",this.M,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.bL)}}
S.mV.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Alternate Costume",H.a([$.O,$.N,$.a1,$.Z,$.aj],s),"Apparently some people don't like the regular mage outfit? Whatever.",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Cape",H.a([$.O,$.N,$.a1],s),"Mage Shit",!1,"Shitty Wizard Cape")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Mage's Staff",H.a([$.W,$.N,$.ad,$.a1,$.dt],s),"Mage Shit",!1,"Shitty Wizard Stick of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Walking Broom",H.a([$.jg,$.W,$.N,$.ap,$.a1,$.dt],s),"Normally I'd blame Wastes, but walking brooms is more of a Mage thing.",!1,"Support Stick of Cleaning")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Cities","Skyscrapers","Buildings","Stoplights","Cars","Streetlights","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.eV,$.j)
t.i(0,$.eZ,$.m)
t.i(0,$.cb,$.j)
t.i(0,$.eX,$.m)
t.i(0,$.cZ,$.L)
r="The "+$.z+" has freed the frogs from their video game inspired hell. No longer will they be threatened to be squashed by all this fucking traffic. They are hopping ALL over the road now. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.o
t.i(0,new R.a5("Work With Exiles",!1,[new U.c("The "+q+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+q+" abjures the concept of helping entirely, but the Voice just won't shut up. God dammit, FINE. They'll help."),new U.c("The "+q+" makes sure to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("The "+q+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],p),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
r="The "+q+" is feeling quite pleased with their victory over the "+$.z+" when suddenly they are nearly blinded by a crippling vision of pain and "
o=$.aH
t.i(0,new R.a5("Suffer Visions",!1,[new U.c(r+o+". Oh god, why is this happening?"),new U.c("It's been a while since the last "+o+" vision, and the "+q+" doesn't trust it. As a test, they actively look out for "+o+" related danger.  Sure enough, right before they find it they suffer the painful vision. Their course of action is clear: prevent "+o+" from ever hurting anyone ever again or suffer migraines from hell forever."),new U.c("Finally, the land is practically a "+o+" free utopia. The "+q+" can finally have a break from painful visions.")],H.a([],p),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="Now that the "+$.z+" has been defeated, the "
o=$.t
q=q+o+"s are ready to expand their civilization. They ask the "
r=$.o
q=q+r+"'s help in planning the brand new city of "
n=$.aH
t.i(0,new R.a5("Become the Mayor",!1,[new U.c(q+n+"burg."),new U.c("A panicking "+o+" runs up to the "+r+", "+$.K+"ing the whole time. The "+n+"burg sanitation facility has been delayed, but the residential areas are already starting to fill up!  The "+r+" shuffles around work shifts to get the sanitation working before things get too...disgusting."),new U.c("It is finally time for the final brick to be placed for the final building in "+n+"burg. The "+r+" snips a ceremonial ribbon opening up the Mayor's office, to which they have been elected in a landslide. ")],H.a([],p),R.y(),!1,!1,new Y.c0(null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
U.mW.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Maiden's Breath",H.a([$.aQ,$.N,$.ax],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Feather Duster",H.a([$.W,$.N,$.dt,$.bz],s),"Housemaid shit.",!1,"Maids Weapon of Choice")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Valkyrie Shield",H.a([$.ax,$.aG,$.D,$.N,$.Z,$.f8,$.vD],s),"Shieldmaid shit",!1,"Another Weakling Piece of Metal But For Some Kind of Angel Woman I Guess?")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Maiden's Songbook",H.a([$.J,$.N,$.a8,$.aw],s),"Longing maiden shit.",!1,"Smash Mouth Lyrics")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Suburbs","Parks","Playgrounds","Swingsets","Tire Swings","Neighborhoods","Traffic"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.de,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.b1,$.m)
t.i(0,$.ds,$.m)
t.i(0,$.cu,$.m)
r="The "+$.z+" has instructed the Home Owners Association to lift the ban on frogs. The "
q=$.o
r=r+q+" asks local  "
p=$.t
r=r+p+" kids to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bA("Serve the  Frogs",!1,[new U.c(r+o+"s.  It's a lively neighborhood event."),new U.c("The "+p+" kids hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. A neighboring "+p+" starts grilling some burgers and dogs so nobody goes hungry."),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.o
o="The "+q+" has adopted a local "
p=$.t
t.i(0,new R.a5("Serve the PTA",!1,[new U.c(o+p+" child to be their dear, sweet, precious daughter. It is time for them to go off to school.  Other "+p+" parents ask the "+q+" to join the PTA."),new U.c("The PTA has the "+q+" running ragged. It seems like every time they turn around it's another thing they are "+$.K+"ing about. "),new U.c("All this time catering to the PTA has paid off. Not only is the "+q+"'s dear sweet precious "+p+" daughter doing well in school, but the "+q+" has been elected president of the PTA! They now have the ability to make real changes.  Somehow this feels even more satisfying than defeating the "+$.z+". ")],H.a([],n),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
V.n3.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Puzzle Box",H.a([$.W,$.S,$.a1],s),"Don't let Mind players fool you. It's not about smarts.",!1,"13x13 Rubix Cube")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tesla Coil",H.a([$.a6,$.S,$.D],s),"Mind is electric shit. I guess.",!1,"Lightning Weiner")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Coin",H.a([$.D,$.S],s),"Luck doesn't even matter, so neither does this coin. Mind players are such hams.",!1,"Official Minted Shogun Coin Circa. 1764")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electronic Door",H.a([$.D,$.S,$.a6,$.X],s),"I guess it has buttons and shit? I bet it leads somewhere weird.",!1,"Star Wars Force Activated Door")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Janus Bust",H.a([$.aG,$.jh,$.av,$.ah,$.S,$.Z,$.a6],s),"So is the joke that Mind Players are two faced?",!1,"Bust of A Giant Phallic Asshole")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Decisions","Choices","Paths","Passages","Dead Ends","Trails","Doors","Possibilities","Alternatives","Labrinths","Mazes"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cz,$.m)
q.i(0,$.ec,$.L)
q.i(0,$.cA,$.L)
p=$.o
o="The "+p+" finds themselves trapped in a dark labyrinth. After travelling through for some time they have come to realize the walls change position when they leave an area. Although "
n=$.t
o=o+n+"s are wandering around the maze they give riddle-like responses on how to escape. The "+p+" will need to find a way to solve the many hidden logic problems to escape the ever-changing paths. It's easy enough to leave when they want, but they want to WIN."
m="The "+p+" returns to the labrinth to get help from one "+n+" to try to understand the puzzle.It gave a slightly less confusing answer to look another way. The "+p+" decides to listen to all of the "+n+"s answers however confusing that they are."
l="With each answer written down, the "+p+" begins to piece together the parts of the answer. They will need all the mental prowess to crack this one, and finally reach the end of the Labrinth."
p="After hours of putting different spins on each sentence, the "+p+" finally solves the riddle. But they aren\u2019t quite done yet. A considerate "+n+" directs the "+p+" to a small gap between two or the walls that leads to a puzzle room. The "+p+" spots a mirror on the far wall and presses the side of it. The mirror reflects light which the "+p+" uses to hit the right targets in the right order. After putting the pattern in, the mirror slid away and opened a view to the outside fields which let the "+p+" escape. Or that WOULD be what happens if the shitty "
n=$.z
k=[U.c]
q.i(0,new R.R("Change the View",!1,[new U.c(o),new U.c(m),new U.c(l),new U.a_(p+n+" wasn't blocking their path.","Oh my fucking god, they better not have to redo that entire labrinth if they are ever back here.","Okay. With the defeat of the "+n+", NOW they finally escape from that labrinth.")],H.a([],k),R.fj(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.o
p="The "+n+" boggles vacantly at an entire labrinth of doors. Whole walls are nothing but doors and their frames, with seemingly no rhyme or reason. A nearby "+$.t+" explains that at the end of the Labrinth is the "
l=$.z
q.i(0,new R.R("Pick a Door, any Door",!1,[new U.c(p+l+". If the "+n+" wants to beat their land, they will have to figure out this Labrinth.  They are given a ball of yarn so they can easily resume their place in the Labrinth when they need to take breaks."),new U.c("Left. Right. Both choices look just as good as each other. A wrong choice could waste hours.  The "+n+" feels the weight on their shoulders, and then picks left.  Hours later, they encounter a brick wall. God DAMN it."),new U.c("Another set of two possible choices which seem to obviously have huge consequences. And yet....this time one of them just seems more....right? Like it's obvious that it's better. Huh.   Hours later, the "+n+" encounter another wall of doors, these ones with less feeling of weight. Hell yes! "),new U.a_("The final door is passed. The "+l+" is revealed.  The choice here is an easy one, it is time to strife!","Oh GOD DAMN IT. Now the "+n+" has to walk all the way back here to restart the fight.","The bullshit labrinth is finally complete.")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n=this.f
n.i(0,new X.G(s,q,null),$.at)
q=H.a(["Consequences","Results","Karma","Justice","Responsibility","Payback","Vengence"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.h5,$.L)
s.i(0,$.c4,$.m)
s.i(0,$.cA,$.L)
s.i(0,$.cz,$.L)
p=$.z
o="The "+p+" has commited a staggering amount of crimes against the local "+$.t+" population. The natural result of this is that karma itself is conspiring for their downfall. The "
m=$.o
s.i(0,new R.R("Face the Music",!1,[new U.c(o+m+" knows that Justice is on their side."),new U.c("The "+p+" may FEEL safe, all sequestered away in their shitty snake lair, but they aren't. The "+m+" convinces a group of underlings lead by a "+p+" minion that the "+p+" is a huge jerk who shouldn't be in charge of them. It's easy, because it's true. That's what happens when you are a huge jerk."),new U.c("Huh.  I WONDER what the consequences are of the "+p+" being stuck hiding in their shitty snake lair while the "+m+" is running a propoganda campaign against them?  Suddenly the "+p+" has run out of allies entirely."),new U.a_("Karma is a bitch. The "+p+" has nowhere to run when the "+m+" comes for them. It's time to strife.","Has Justice truly been perverted?","Justice is served.")],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(q,s,null),$.at)
s=H.a(["Thought","Logic","Connections","Neurons","Psychics","Subconsciousness","Intuition","Sparks","Lightning","Electricity"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.j)
t.i(0,$.b1,$.m)
t.i(0,$.f_,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cA,$.j)
r=$.o
q="The "+r+" stares at the puzzle blocks in a dungeon. One of them doesn't belong. But which? The Dog? The Bull? The Feather? The Cat? The "+r+" thinks, then makes the logical selection.  The Dungeon accepts it."
p="Another dungeon. A cat. A swan. A robot. A virus. Huh. This one is harder. The "+r+" thinks about it for a while, and then goes with their intuition.  The Dungeon accepts it.  "
o="In the newest dungeon, there are 4 geometric shapes on the puzzle blocks. One of them doesn't belong. The "+r+" thinks they understand. Their choice is accepted."
m=$.z
m="It's the final door before facing the "+m+". All four puzzles blocks are simply identical images of "+$.ae+". The "+r+" closes their eyes. They think about the previous puzzles, and the patterns that came out of their choices. They choose.  The door opens. It is time to strife "+m+"."
l="Finally. The "+r+" can stop solving bullshit 'logic' puzzles that keep straying into weird intuition mind reading bullshit."
t.i(0,new R.R("Make the Connections",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a_(m,"Looks like the "+r+" will have to resolve some of those bullshit puzzles.",l)],H.a([],k),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.at)}}
E.n4.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Feather Pen",H.a([$.D,$.N,$.ah,$.bz],s),"Oh my god, did JR really not know how to spell 'Quill'?",!1,"Feather Object to be Dipped in Black Liquid")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Half Finished Bust of Snoop Dog",H.a([$.w_,$.N,$.jh,$.ad,$.Z],s),"Meme Shit",!1,"The Gods Refused to Let This Object Finish Completion")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Book of Poetry",H.a([$.J,$.N,$.ah,$.aw],s),"Hope it inspires you.",!1,"Ocean Man Lyrics 50,000 Times: The Book")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Music","Dance","Poetry","Inspiration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.de,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.b1,$.m)
t.i(0,$.ds,$.m)
t.i(0,$.cu,$.m)
r="The "+$.z+" has allowed inspiration to flow once more. The frogs are no longer too depressed to croak, and are much more easy to find. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bA("Inspire Frog Breeding",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" cheers them on and soon everybody is working just a bit better. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.m)
q="You'd think after the dramatic defeat of the "+$.z+" the "
o=$.t
q=q+o+"s would be celebrating. Instead they are just kind of moping around. When pressed, they say they just don't feel like doing anything. "
p=$.o
r="The "+p+" bugs and fusses and meddles until the "+o+"s agree to put on a performance of the musical 'The Lonely "
m=$.ae
t.i(0,new R.a5("Inspire the People",!1,[new U.c(q),new U.c(r+m+"'. The "+p+" assigns parts that challenge each of them without seeming impossible."),new U.c("The performance of The Lonely "+m+" goes off without a hitch. The "+o+"s recieve accolades and ALL the self esteems.  They are inspired to reach ever greater heights of acomplishments. ")],H.a([],n),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
F.n5.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Piano",H.a([$.ad,$.W,$.a8,$.ah],s),"An entire piano. In your inventory. WHY.",!1,"Elephant Corpse Turned Amazing Instrument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flute",H.a([$.D,$.a8],s),"I feel like a spaceship captain should play this.",!1,"Pipe of Screeches 2: Orchestral Shitstorm")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Microphone",H.a([$.aU,$.a6],s),"Do you really deserve to drop this like it's hot?",!1,"Speaking Tube of Passion +3")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Violin",H.a([$.W,$.a8],s),null,!1,"Tiny Cello")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sheet Music",H.a([$.J,$.a8],s),null,!1,"Cheat Codes for Instruments")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Electric Guitar",H.a([$.aA,$.a8,$.a6,$.aU,$.al],s),null,!1,"Electrical Stringed Music Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.aA,$.a8,$.a6,$.al],s),null,!1,"Spinning Disc Sound Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guitar",H.a([$.W,$.a8],s),null,!1,"String Music Maker")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Pianos","Music","Harmony","Rain","Songs","Violins","Harps","Strings","Notes","Violas","Guitars"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cJ,$.ai)
q.i(0,$.t3,$.j)
q.i(0,$.ef,$.j)
q.i(0,$.ds,$.m)
q.i(0,$.aN,$.m)
q.i(0,$.lB,$.m)
p=$.o
o="The "+p+" meets a wise old "+$.t+" who tells that the "+$.z+" can only be awoken by the Legendary Hero playing the "
n=$.aH
o=o+n+". Huh. Do you think that's gonna be a thing?"
m="The "+p+" learns of a series of "
l=$.ae
k=[U.c]
q.i(0,new R.Y("Play the Music",!1,[new U.c(o),new U.c(m+l+"s that prevent the "+n+" from being played. Hrmmmm...how are they gonna clear this up?   "),new U.c(" The "+p+" has finally fixed the "+l+". They play the "+n+" and are dramatically revealed as the Legendary Hero. We are all blown away by this startling revelation. The "+p+" was the Hero all along? Wow.")],H.a([],k),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
n="The "+p+" finds an empty, trashed "
l=$.aH
n=n+l+" Jazz Bar. A sign posted at the door says it's free to any who can get it back to profitability. Huh. This sounds interesting."
m="The "+p+" puts in a lot of effort cleaning the "+l+" Jazz Bar up, and getting it ready for opening night. They spend hours interviewing opening acts, wait staff, and sourcing local delicacies like Fizzy "+$.ae+".  "
l=" It's finally opening night for the "+l+" Jazz Bar. There's a line of "+$.K+"ing "+$.t+"s stretched out to the horizon, waiting to get in. It's a complete success!  A mysterious carapace approaches the "+p+", claiming to be the original owner. They are impressed with the revival of the "+l+" Jazz Bar and offer a deal."
p=$.EP
q.i(0,new R.Y("Play the Crowd",!1,[new U.c(n),new U.c(m),new U.c(l)],H.a([],k),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Hymns","Choirs","Chorus","Voices","A Capella","Chants"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.t6,$.ai)
s.i(0,$.dr,$.m)
s.i(0,$.cQ,$.m)
s.i(0,$.ds,$.j)
s.i(0,$.lB,$.ai)
o=$.o
n="The "+o+" learns of a lost song, said to contain the power of "
m=$.aH
n=n+m+". Any who can sing it are destined to be strong enough to face the "
l=$.z
s.i(0,new R.Y("Sing the Song",!1,[new U.c(n+l+". "),new U.c("The "+o+" has been searching high and low, in dungeons, ruins, and villages. Finally, they find a sheet of music that seems the very essence of "+m+". They open their mouth to sing it, and realize they can't make a sound. What IS this fresh fuckery?  What kind of song can't be sung?"),new U.c("A "+$.ae+"! That's the key! The "+o+" equips it and instantly finds themselves able to sing the "+m+" song. The burst of music in their chest makes them feel ready to take on anything, but especially the "+l+".")],H.a([],k),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Beat","Rhythm","Flow","Raps","Rhyme","Grove","Funk"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.h6,$.ai)
t.i(0,$.ck,$.m)
t.i(0,$.dK,$.m)
r=$.o
q="The "+r+" is suddenly challenged to a rap off by a particularly Fresh "
o=$.t
q=q+o+". It's a close one, but the "+r+" emerges victorious. It helps that the Fresh "+o+" kept rhyming "
n=$.K
n=q+n+" with "+n+"."
q="The "+r+" has apparently gotten a reputation as a rap master. A series of "+o+"s challenge them to rap offs and get utterly destroyed by the "+r+"'s fresh flows. "
r="The final challenger, a Sick-Nasty "+o+" approaches the "+r+". And aura of "+$.aH+" and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty "+o+" falters, and misses a beat. The "+r+" wins! They are the best rapper in all of Paradox Space! "
o=this.y
t.i(0,new R.Y("And It Don't Stop",!1,[new U.c(n),new U.c(q),new U.c(r)],H.a([],k),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aC)}}
Y.ni.prototype={
P:function(a,b){var t=0,s=P.bp(),r,q=this,p,o
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:t=3
return P.cs(A.hp("scripts/Rendering/threed/three.min.js",!1),$async$P)
case 3:t=4
return P.cs(Q.nZ(),$async$P)
case 4:p=q.b
if(p==null){p=new THREE.OBJLoader2()
o=J.aR(p)
o.eG(p,P.wg(["",$.$get$ve()],P.B,S.hs))
o.eF(p,!1)
q.b=p}J.v1(p,b)
r=J.v1(q.b,b)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asev:function(){return[S.fh]},
$asc6:function(){return[S.fh,P.B]}}
V.nq.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Shorts",H.a([$.O,$.N,$.f6,$.Z],s),"Don't skip leg day.",!1,"Crotch Hugging Thigh Exposers. Absolutely Indecent.")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sidekick Figurine",H.a([$.aA,$.N,$.al],s),"Robin is way cooler than Batman.",!1,"Small Statue of a White Headed Cat in a Green Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Steroids",H.a([$.an,$.N,$.a1],s),"Shit son, calm down with all the screaming and the powering up.",!1,"My Morning Medication")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l,k
t=[P.B]
s=H.a(["Desert","Sand","Pyramids","Camels","Tombs"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.lF,$.j)
t.i(0,$.cB,$.m)
t.i(0,$.ha,$.m)
t.i(0,$.lH,$.m)
t.i(0,$.de,$.m)
t.i(0,$.b1,$.m)
t.i(0,$.dY,$.m)
t.i(0,$.ee,$.m)
t.i(0,$.t7,$.m)
t.i(0,$.io,$.m)
t.i(0,$.lC,$.m)
r="The "+$.z+" has allowed water to flow once more. The croaking of frogs fills the air as pools begin to form. The "
q=$.o
r=r+q+" asks the "
p=$.t
r=r+p+"s to help them collect frogs. The "+p+"s agree with enthusiastic "
o=$.K
n=[U.c]
t.i(0,new R.bA("Help Breed the Frogs",!1,[new U.c(r+o+"s. "),new U.c("The "+p+"s hit buttons on the ectobiology machine at random. The "+q+" shows them how to do it right, and soon everybody is helping out. "),new U.c("A "+p+" child has tripped over the final frog. They cry and "+o+" at their skinned knee, but their pain is quickly forgotten when the "+q+" praises them for finding the frog.  Together,     ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.o
o="The "+q+" was about to walk through a patch of incongruous tall grass when a quirky "+$.t+" named Professor "
p=$.K
o=o+p+" halts them. apparently, it's not safe to travel without trusty "
r=$.ae
o=o+r+" by their side. The professor also makes some side comments about the "+r+" League. If the "+q+" can assemble a team strong enough to beat the gym leaders, they might have a shot at becoming the "+r+" League Champion!"
p="The "+q+" wanders about their land, learning how to use their "+r+" effectively and taking down the "+r+" gym leaders. Along the way, they hear rumors that the dastardly Team "+p+", led by "
m=$.z
p=p+m+", plans to interfere with the league. The "+q+" will not stand for this."
l="After an intense round of "+r+" battling, the "+q+" finally defeats the last gym leader of the "+r+" league. Turns out, the "+r+" they used was super effective! they can now challenge the "+r+" League. "
k="The "+q+" has finally almost completed the "+r+" League. Much to their suprise, the Champion they must defeat in order to claim the title is none other than "+m+"!!! Will they succeed? STRIFE!"
m="The "+q+" is now the "+r+" League champion. "+m+" remains alive just long enough to walk them to the hall of fame, which is suprisingly filled with grist!"
t.i(0,new R.R("Become The Best",!1,[new U.c(o),new U.c(p),new U.c(l),new U.a_(k,"The "+q+" whited out...",m)],H.a([],n),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
m="Now that the "+$.z+" is finally out of the way, some of the previously sealed tombs have opened up. It is time for the "
q=$.o
m=m+q+" to desecrate the fuck out of some tombs."
k="In a twist that is shocking only to the "+q+", they are now inflicted with a Mummy's Curse. There is a REASON you don't desecrate random tombs. A local "
l=$.t
t.i(0,new R.a5("Explore the Tombs",!1,[new U.c(m),new U.c(k+l+" explains that they will have to find a "+l+" champion to face the Mummy, for anyone cursed by it will surely perish should they face it in a strife."),new U.c("The "+q+" finds a competent enough Warrior "+l+" to help them fight the Mummy. While they can't fight directly, the "+q+" can at least give them some "+$.aH+" buffs. With a deafening "+$.K+", the Warrior "+l+" wins the day! The curse is lifted! ")],H.a([],n),R.y(),!1,!1,new Y.i9("Rewards/sweetFriendship.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
G.nD.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Superhero Action Figure",H.a([$.aA,$.al,$.aO],s),"How perfectly fucking generic. You couldn't even pick a brand name?",!1,"Shogun Action Figure")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Action DVD",H.a([$.aA,$.al],s),null,!1,"Shogun The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ghost Busters DVD",H.a([$.aA,$.bV],s),"I refuse to call a bunch of washed up comedians.",!1,"Shogunsprite Hunters The Movie")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Snow Dogs DVD",H.a([$.aA,$.aS,$.bm,$.cd],s),null,!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Skateboarding Video Game",H.a([$.aA,$.al],s),"All of these glitches are offensive to my robo-sensbilities.",!1,"Snow Buddies Anthology")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Movie Poster",H.a([$.J,$.al],s),null,!1,"Shogun 2: Electric Shitstorm Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Audrey II Plush",H.a([$.aQ,$.al,$.O,$.ap],s),null,!1,"World Eating Plant Plush, A Pure Entity")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peashooter Toy",H.a([$.aQ,$.aK,$.al,$.O],s),null,!1,"Plants Vs Zombies Peaplant Plush")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shitty Sword",H.a([$.aO,$.D,$.al,$.f9,$.au,$.bP],s),"So. Shitty.",!1,"Perfect Weapon")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("GameBro Magazine",H.a([$.J,$.al],s),"5/5 hats.",!1,"Nerd Magazine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("GameGrl Magazine",H.a([$.J,$.al],s),"5/5 lady hats.",!1,"Nerd Magazine for Girls")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Refrances","Memes","Reference","In Jokes","Viral Videos","Dutton","Stairs"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cu,$.m)
q.i(0,$.cy,$.m)
q.i(0,$.ck,$.j)
q.i(0,$.cB,$.ai)
q.i(0,$.d_,$.ai)
p=$.o
o="The "+p+" falls down a series of infinite stairs. A local "
n=$.t
o=o+n+" manages to catch a video of it, and it goes viral on "+$.aH+"tube. This is humiliating."
m="Oh look, somebody made a dubstep remix of the "+p+" falling down all those goddamned stairs. It REALLY is catchy with all those "+$.K+"s added in."
n=" The "+p+" decides to own their fame and goes on a "+n+" talk show to answer questions about those stairs. It turns out nobody warned them about them. There really needs to be, like, a sign or something."
p=$.EQ
l=[U.c]
q.i(0,new R.Y("Become the Star",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Superheroes","Super Villains","Comics","Cellshading","Villains"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ed,$.m)
s.i(0,$.dr,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.ck,$.m)
s.i(0,$.dI,$.j)
o=$.o
n="The "+o+" runs towards an explosion in a local "
m=$.t
n=n+m+" village. As they rush to help the injured, a Mysterious "+m+" in a mask and cape flees the scene. Who was that? "
k="The Mysterious "+m+" turns out to be Professor "
j=$.aH
s.i(0,new R.Y("Stop the Villain",!1,[new U.c(n),new U.c(k+j+", a notorious consort Villain. They spread chaos and disaster with their "+j+" ray. The "+o+" vows to stop them. "),new U.c(" The "+o+" has a dramatic showdown witih Professor "+j+", that results in the Villain being knocked unconscious, and taken away by the "+m+" authorities. ")],H.a([],l),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Movies","Popcorn","Theaters","Screens","Silver Screens","Blockbusters","Cinemas"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cy,$.m)
t.i(0,$.dH,$.j)
t.i(0,$.cv,$.j)
t.i(0,$.dI,$.m)
r=$.o
q="The "+r+" gets a job at the "+$.aH+" Cinema. A new movie, The Lonely "
o=$.ae
q=q+o+" is coming out soon, and "
n=$.t
q=q+n+"s are already lining up. It's going to be busy as fuck. "
m="Oh shit, the "+r+" learns that The Lonely "+o+" never was delivered. The "+n+"s already lined up are close to rioting. The sound of "+$.K+"s is deafening.  A little bit of sleuthing reveals that a group of underlings stole the film and absconded to a local dungeon.  The "+r+" prepares to venture inside.    "
r=" The "+r+"  has finally bested the dungeon, and retrieved the copy of The Lonely "+o+". The "+n+"s lined up cheer and enter the theater. The Lonely "+o+" has finally begun to play. The "+r+" watches, rapt. Such a fantastic movie. The "+r+" keeps a copy of the movie as a souvenir and makes a neat item out of it."
o=this.y
t.i(0,new R.Y("Premiere the Movie",!1,[new U.c(q),new U.c(m),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",o,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aC)}}
N.nJ.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Feather'd Cap",H.a([$.O,$.N,$.f6],s),"So fucking pretentious.",!1,"Pupa Pan Hat")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crown",H.a([$.Z,$.tm,$.N,$.f6],s),"Prince shit. Man. The tiara dealy.",!1,"A False Symbol of Power")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gunpowder",H.a([$.bo,$.N],s),"Huh. I guess cause princes are destructive.",!1,"The Best Thing since The Shogun")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Endings","Finales","Epilogues","Codas","Curtains","Conclusions"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cy,$.m)
t.i(0,$.cz,$.m)
t.i(0,$.dK,$.L)
r="With the closing of the curtain, the "+$.z+" has released the frogs, and yet they are nowhere to be found. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Destroy the Lack of Frogs",!1,[new U.c(r+q+" shatter space itself to reveal an entire dimension of croaking assholes. "),new U.c("The "+q+" has broken how space itself works to do the ectobiology as effciently as possible.   "),new U.c("The "+q+" has found the final frog in a crack in reality.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q=$.z
r="The land is a fucking mess after all the shit the "+q+" put it through, and it falls to the "
o=$.o
r=r+o+" to get it back to normal. They organize a team of "
n=$.t
t.i(0,new R.a5("Fix All The Things",!1,[new U.c(r+n+"s to start rebuilding infrastructure."),new U.c("The "+n+" economy is a fucking mess, and probably was even before the "+q+" started to fuck things up. Why would you even use "+$.ae+" as a currency? The "+o+" wastes way too much time explaining how economies work."),new U.c("The land finally appears to be in a good state. The "+o+" is wistful as they realize that they are no longer needed. ")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
U.c.prototype={}
U.a_.prototype={}
R.nK.prototype={
A:function(a){return H.x(new H.dR(H.ke(this),null))+": "+this.c},
gG:function(a){return this.c}}
R.Y.prototype={}
R.R.prototype={}
R.a5.prototype={}
R.bA.prototype={}
E.nL.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Curtain",H.a([$.O,$.S,$.aO],s),null,!1,"Show Ender")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cursed Sword",H.a([$.D,$.f9,$.aL,$.S,$.au,$.aV,$.aO,$.bn,$.aD],s),"You probably are gonna kill an army if you don't keep it safely tucked away in your sylladex.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Megaphone",H.a([$.D,$.aU,$.a6,$.S,$.aO],s),"Rage players are such loud assholes.",!1,"Voice Embiggener")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.aG,$.D,$.aU,$.bq,$.c8,$.S,$.aO],s),null,!1,"Two-wheel device mounted Juggalo voicebox")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bacchus Wine",H.a([$.an,$.bq,$.ah,$.S,$.Z,$.aO],s),"I guess it makes you go beserk or some shit. Sucks being biological.",!1,"Aged Grape Gore")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nightmare Fuel",H.a([$.W,$.S,$.aV,$.ao,$.bo,$.aO],s),"It's clowns isn't it. It's always fucking clowns.",!1,"Image of Adam Sandler in a Troll Face Shirt")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lA,$.j)
q.i(0,$.dd,$.j)
q.i(0,$.dr,$.j)
q.i(0,$.cZ,$.m)
q.i(0,$.c_,$.m)
q.i(0,$.cb,$.m)
q.i(0,$.c4,$.L)
q.i(0,$.d_,$.m)
q.i(0,$.ed,$.j)
q.i(0,$.it,$.j)
q.i(0,$.eZ,$.j)
q.i(0,$.lG,$.j)
q.i(0,$.h6,$.m)
q.i(0,$.eg,$.j)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.R("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hD(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.a_(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.j)
s.i(0,$.c_,$.m)
s.i(0,$.c4,$.j)
s.i(0,$.cJ,$.j)
s.i(0,$.cu,$.j)
s.i(0,$.cy,$.m)
s.i(0,$.is,$.L)
s.i(0,$.dd,$.m)
s.i(0,$.cB,$.j)
s.i(0,$.ck,$.j)
s.i(0,$.d_,$.L)
p=$.K
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aH
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.a_(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lA,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.cB,$.m)
t.i(0,$.cu,$.j)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a_(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.at)}}
Y.dN.prototype={}
Y.ac.prototype={}
Y.cY.prototype={}
Y.c0.prototype={
gG:function(a){return this.c}}
Y.V.prototype={}
Y.i9.prototype={}
Y.bD.prototype={}
Y.cU.prototype={}
Y.kJ.prototype={}
Y.bw.prototype={}
Y.jz.prototype={}
Y.ix.prototype={}
Y.jB.prototype={}
N.nQ.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Domino Mask",H.a([$.O,$.N,$.f6],s),"Not satisfied with the god tier shit I guess.",!1,"This Scares Me On A Primal Level")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Archery Set",H.a([$.tg,$.N,$.f6,$.vE],s),"Like robin hood and shit.",!1,"This Is Number 69 On The List I Dont Need To Make An Equius Joke")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Gristtorrent Server",H.a([$.Z,$.aA,$.a6,$.N,$.X,$.aj],s),"Steal from the rich, give to the poor.",!1,"Shogun Coin Printer. Illegal Item.")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n
t=[P.B]
s=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Rogues"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.c4,$.j)
t.i(0,$.cb,$.m)
t.i(0,$.dI,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt Noble "
q=$.t
r=r+q+"s have hoarded them. The "
p=$.o
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes various common "+q+"s to help raid the frog stockpiles. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
q="The "+p+" learns of the extreme injustices of the "
r=$.t
q=q+r+"s who rose to power during the tyranny of "
n=$.z
t.i(0,new R.a5("Lead a Rebellion",!1,[new U.c(q+n+". This cannot stand!"),new U.c("The "+p+" forms a small band of merry "+r+"s to run raids on the "+r+"s in power.  All proceeds are given to hungry "+r+"s in need. "),new U.c("The "+r+"s who profiteered on the tyranny of the "+n+" have finally been brought to justice. Their mansions are torn down. Their wealth is given to the poor.  The "+p+" is hailed as a hero. ")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
Q.nR.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Red Rose",H.a([$.aB,$.ax],s),null,!1,"Seductive Plant")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shipping Grid",H.a([$.aB,$.J],s),"Don't let ABJ see this.",!1,"Grid of Sin")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Chocolate Bar",H.a([$.aB,$.an],s),"Robots don't need shitty food.",!1,"Brick of Shit Coloured Nice Tasting Food")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Candelabra",H.a([$.aB,$.ao],s),null,!1,"Dying Light Holding Device, Cruelty Made of Metal")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Head Cannon",H.a([$.aB,$.bo,$.D,$.aK],s),"Fuck you for that pun, JR.",!1,null)
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Her Pitch Passions Novel",H.a([$.aw,$.J,$.aB],s),"Okay, I will give ABJ this. Troll romance is HILARIOUS.",!1,"I dont Understand This But It Makes Me Sad")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Tea","Candles","Roses","Chocolate","Valentines","Candlelight","Gifts"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cv,$.j)
q.i(0,$.ha,$.m)
q.i(0,$.eU,$.m)
q.i(0,$.h9,$.j)
q.i(0,$.cJ,$.m)
q.i(0,$.iq,$.L)
p=$.o
o="The "+p+" finds what seems to be the only place on this entire planet that isn't beautifully decorated. What's even going on? A nearby "
n=$.t
o=o+n+" explains that they ran into a bit of Artists block and just don't know how to make this area seem fancy enough.  Will the "+p+" be able to rise to meet the challenge?"
m="The "+p+" is collecting all sort of things, especially "+$.ae+"s, to decorate the Boring Section. "
n=" The "+p+" tries a few different ideas out, but finally, the Boring Section is finally as beautiful as the rest of the planet. "+n+"s immediately use it for a popular date spot. "
p=this.y
l=[U.c]
q.i(0,new R.Y("Set the Mood",!1,[new U.c(o),new U.c(m),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Romance","RomComs","Meet Cutes","True Love","Serendipity","Dates"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cJ,$.m)
s.i(0,$.dH,$.j)
s.i(0,$.h9,$.j)
s.i(0,$.cv,$.m)
s.i(0,$.ef,$.L)
s.i(0,$.iq,$.L)
o=$.t
n="A Romantic "+o+" approaches the "
m=$.o
s.i(0,new R.Y("Plan the Date",!1,[new U.c(n+m+". They have a date coming up but have no idea what to do. Can the "+m+" help? "),new U.c("The "+m+" has the best montage of their life, helping the Romantic "+o+" pick out an outfit for their date, plan activites and learn how to cook a romantic meal. Why is everything so wonderful?   "),new U.c(" The "+m+" hides in bushes to spy on the Romantic "+o+"'s date. It's going so well! ")],H.a([],l),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Shipping","Ports","Ships","Docks","Sails","Matchmaking","Cupids","Fleets"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iq,$.j)
t.i(0,$.cv,$.j)
t.i(0,$.eU,$.m)
t.i(0,$.lH,$.j)
t.i(0,$.h9,$.j)
t.i(0,$.cJ,$.m)
t.i(0,$.ef,$.L)
r=$.o
q="The "+r+" begins constructing an intricate map of all possible relationships and all ideal relationships for a group of consorts. The "
o=$.t
q=q+o+"s have no idea what's coming. "
o="The "+r+" extends their shipping grid to include the entire "+o+" population, and begins subtly pushing to make these ships a reality. Happy "+$.K+"s ring out through the air.  "
r="The "+r+" finds the ABSOLUTE BEST SHIP ever, and it's not even banned by the "+$.z+"'s stupid rules. A fellowing shipping enthusiast approaches them to strike a deal."
n=$.EM
t.i(0,new R.Y("Ship All the Ships",!1,[new U.c(q),new U.c(o),new U.c(r)],H.a([],l),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,n,"Rewards/no_reward.png",null),1,null,null),$.A)
n=$.o
r="The "+n+"  and the "
o=$.eq
t.i(0,new R.Y("Flushed Shipping Dungeon",!1,[new U.c(r+o+" seem to be getting along well. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+n+"  and the "+o+" have come across a strange dungeon with a heart symbol on the door. They ignore all common sense and venture inside. Chocolates and roses abound. There is a couch, and a romantic movie playing. Huh. ")],H.a([],l),R.ep(),!1,!1,new Y.ix(" Flushed Serenade",null,"Matesprit.png","Rewards/no_reward.png",null),1,null,null),$.ai)
o=$.o
n="The "+o+"  and the "
r=$.eq
t.i(0,new R.Y("Pale Shipping Dungeon",!1,[new U.c(n+r+" seem to be a good complement to each other. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+o+"  and the "+r+" have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. ")],H.a([],l),R.ep(),!1,!1,new Y.jz(" Pale Serenade",null,"Moirail.png","Rewards/no_reward.png",null),1,null,null),$.ai)
r=$.o
o="The "+r+"  and the "
n=$.eq
t.i(0,new R.Y("Pitched Shipping Dungeon",!1,[new U.c(o+n+" seem to be evenly matched rivals. The noodly appendages of the Horror Terrors do not fail to notice this.  "),new U.c("The "+r+"  and the "+n+" have come across a strange dungeon with a spades symbol on the door. They ignore all common sense and venture inside. Non lethal weapons and games abound. There is a couch, and a controversial movie playing. Huh. ")],H.a([],l),R.ep(),!1,!1,new Y.jB(" Pitch Insult",null,"Kismesis.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p.i(0,new X.G(s,t,null),$.aC)}}
T.hG.prototype={
D:function(){var t,s
t=Q.I(null,null,A.a4)
s=A.i("Perfectly Generic Object",H.a([],[G.a0]),null,!1,"Green Version of Those Sweet Yellow Candies I Loved")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),[H.P(t,0)]))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Decay","Rot","Death"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.b1,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
p=$.o
o="The "+p+" learns that all of the local "
n=$.t
m=[U.c]
q.i(0,new R.a5("Revive the Consorts",!1,[new U.c(o+n+"s are dead. This is....really depressing, actually. "),new U.c("The "+p+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+p+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The "+n+"s are alive again!  ")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
n=this.x
n.i(0,new X.G(s,q,null),$.bL)
q=H.a(["Factories","Manufacture","Assembly Lines"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.j)
s.i(0,$.ee,$.L)
s.i(0,$.eX,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cb,$.L)
p=$.o
o="The "+p+" learns that all of the local "
l=$.t
s.i(0,new R.a5("Produce the Goods",!1,[new U.c(o+l+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+p+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+p+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+p+". ")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p=$.o
l="The "+p+" learns that all of the local "
o=$.t
s.i(0,new R.a5("Do the Teamwork",!1,[new U.c(l+o+"s have a severe shortage of gears and cogs. It is up to the "+p+" to get the assembly lines up and running again. "),new U.c("The "+p+" notices that all of the "+o+"s are stepping on each others toes while working in the factory, sometimes literally. They need to learn the meaning of Teamwork! "),new U.c("The "+p+" grabs the "+$.eq+" and demonstrates some simple teamwork techniques. The "+o+"s begin "+$.K+"ing in amazement. The factory is saved! ")],H.a([],m),R.ep(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.ai)
n.i(0,new X.G(q,s,null),$.bL)
s=H.a(["Peace","Tranquility","Rest"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.aN,$.j)
t.i(0,$.b1,$.L)
t.i(0,$.c5,$.m)
r=$.o
q="The "+r+" learns that all of the local "
p=$.t
q=q+p+"s have been too stressed about an impending famine to relax. They vow to help however they can."
o="The "+r+" fluffs more pillows than any other Player ever has before them. Huh, what is this "+p+" "
l=$.K
t.i(0,new R.Y("Relax the Consorts According to Prophecy",!1,[new U.c(q),new U.c(o+l+"ing about? A prophecy?  "),new U.c("The "+r+" finds the foretold RELAXING MIX TAPE and plays it for all the local "+p+"s, who become so chill they do not even "+l+" once. ")],H.a([],m),R.ue(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.L)
l=$.o
p="The "+l+" learns that all of the local "
r=$.t
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(p+r+"s have been too stressed about an impending famine to relax. They vow to help however they can."),new U.c("The "+l+" fluffs more pillows than any other Player ever has before them. "),new U.c("The "+l+" teaches the local "+r+"s to find their chill. ")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
n.i(0,new X.G(s,t,null),$.bL)},
A:function(a){return this.r},
a4:function(a,b,c,d){var t=this.r
this.y=t
this.z=new X.im("GameFaqs/","IF YOU SEE THIS SOMETHING IS WRONG","Classes/"+t+".xml",!1,H.a([],[X.i6]),H.a([],[M.h4]))
this.D()
this.E()
t=this.Q
if($.$get$nT().U(0,t))H.aZ("Duplicate class id for "+this.A(0)+": "+t+" is already registered for "+J.cH($.$get$nT().n(0,t))+".")
$.$get$nT().i(0,t,this)},
gG:function(a){return this.r}}
E.nU.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Sage's Robe",H.a([$.O,$.N,$.aY,$.X,$.a1,$.Z],s),"So sagey. Needs a beard or some shit, though.",!1,"Pompous Asshole Robes")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Peer Reviewed Journal",H.a([$.J,$.N,$.aw,$.X],s),"I guess this is p well reviewed.",!1,"Book Containing More Corrections Than Actual Content")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Guru Pillow",H.a([$.O,$.N,$.f7,$.X],s),"Huh. What. Was JR thinking. When they made this item?",!1,"Headrest For Smart People")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Books","Libraries","Tomes","Pages","Advice","Scholarship","Expertise"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.h7,$.m)
t.i(0,$.b1,$.m)
t.i(0,$.f_,$.j)
t.i(0,$.aN,$.L)
t.i(0,$.cA,$.j)
r="The "+$.z+" has blocked access to the books for the duration. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" has no choice but to go get some fresh air for a change and start collecting frogs. The "+q+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q="Now that the "+$.z+" is defeated, it is time to begin recovery efforts. The "
r=$.t
q=q+r+"s ask the "
o=$.o
t.i(0,new R.a5("Be the Sage",!1,[new U.c(q+o+" what they should do first.  When they hesitate, the "+r+"s begin "+$.K+"ing in distress. Desparate, the "+o+" confidently advises them to begin cleaning up rubble. The "+r+"s seem satisfied.  The "+o+" absconds into a nearby library to read up on how in Paradox Space they can figure out what ACTUALLY needs done. "),new U.c("The "+o+" has read up on disaster recovery and helps the "+r+"s plan the next season's crops, build infrastructure and even set up psychological counseling center for those in need. Every moment they aren't in public they are devouring tomes in an effort to stay one step ahead of everything."),new U.c("Finally, recovery efforts are complete. The "+o+" has developed quite the reputation as the person to go to for advice and knowledge. ")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
K.nV.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Uno Reverse Card",H.a([$.mh,$.S,$.aO],s),null,!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("JR Body Pillow",H.a([$.f7,$.aY,$.S],s),null,!1,null)
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=[P.B]
s=H.a(["Murder","Strife","Shrieks","Combat","Hate","Death","Violence","War","Screams","Noise","Chaos","Bloodrage","Rage","Wrath"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.lA,$.j)
q.i(0,$.dd,$.j)
q.i(0,$.dr,$.j)
q.i(0,$.cZ,$.m)
q.i(0,$.c_,$.m)
q.i(0,$.cb,$.m)
q.i(0,$.c4,$.L)
q.i(0,$.d_,$.m)
q.i(0,$.ed,$.j)
q.i(0,$.it,$.j)
q.i(0,$.eZ,$.j)
q.i(0,$.lG,$.j)
q.i(0,$.h6,$.m)
q.i(0,$.eg,$.j)
p=$.o
o="The "+p+" is chilling in a "
n=$.t
o=o+n+" village when a bunch of sentient "
m=$.ae
o=o+m+"s attack! Apparently they were sentient all along, and are angry at the "+n+"s. "
l=$.z
o=o+l+" must be behind it."
k="The "+p+" learns of a plot by the "+m+"s that ended up killing the "+n+" president, who is apparently a thing now. They begin adventuring and solving puzzles to learn more about the motivations of the "+m+"s so they can heal the strife afflicting the land. "
j="The "+p+" learns of corrupt "+m+" and "+n+" generals who are keeping the conflict going and feeding lies to their people, each blaming the other for the scourge of underlings attacking both. But after spreading awareness of the generals' plots, they unite together and topple their dictators!"
i=l+" arrives to challenge the "+p+" and their army. Will the "+p+" be able to prove their worth after directing the anger of "+n+" and "+m+" alike towards their true enemy?"
h=l+" lies slain. The "+p+" has become the savior of not one, but two peoples."
g=[U.c]
q.i(0,new R.R("Stop the War",!1,[new U.c(o),new U.c(k),new U.c(j),new U.a_(i,"he "+n+"s and "+m+"s turn on each other again with the defeat of the "+p+". "+l+" laughs.",h)],H.a([],g),R.hD(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=$.t
l="Two different factions of "+h+"s have been at war for generations. Neither side gives the "
p=$.o
l=l+p+" a straight answer on WHY they are fighting. They are tearing the land apart with needless bloodshed. This is stupid. "
m="The "+p+" is starting to think it's impossible to get the two sides of the "+h+" War to just stop fighting. They yell, they rant, they pass out flyers, they blame the "
n=$.z
m=m+n+",  they even try fixing both sides' problems. But they keep fighting. This is so fucking stupid."
i="God. It's...it's just so FRUSTRATING that the two "+h+" armies seem dedicated to wiping each other out. A stray bullet grazes the "+p+". They see red. When they come to, the only living thing left is the "+p+". "
n="The "+n+" has slithered onto the former battlefield to taunt the "+p+". 'Good job', they hiss, in a language only the "+p+" can understand, 'There can be no strife when there are no armies left alive.' With no thought, the "+p+" attacks them in a rage.  "
h="When the bloodrage is done, the "+p+" is left to deal with the fact that only they are left alive. They wander the land, looking for anyone left alive. At least....it seems, some "+h+"s survived, avoiding the conflict entirely. The "+p+" wishes they could have, too."
q.i(0,new R.R("Stop the Civil War",!1,[new U.c(l),new U.c(m),new U.c(i),new U.a_(n,"The Rage was not enough for the "+p+" to win.",h)],H.a([],g),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h=this.f
h.i(0,new X.G(s,q,null),$.at)
q=H.a(["Whimsy","Mirth","Circuses","Tents","Clowns","Wackiness","Laughter"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.ds,$.j)
s.i(0,$.c_,$.m)
s.i(0,$.c4,$.j)
s.i(0,$.cJ,$.j)
s.i(0,$.cu,$.j)
s.i(0,$.cy,$.m)
s.i(0,$.is,$.L)
s.i(0,$.dd,$.m)
s.i(0,$.cB,$.j)
s.i(0,$.ck,$.j)
s.i(0,$.d_,$.L)
p=$.K
o="The "+p+"ing and capering "
n=$.t
o=o+n+"s are...OKAY, you guess? They keep asking the "
m=$.o
o=o+m+" to do a stupid "
l=$.aH
o=o+l+" Dance, though. They politely decline."
k="A capering "+n+" tells the "+m+" that some underlings looted a local village. The underlings will only return the stolen property if they are defeated in a stupid  "+l+" Dance off. The "+m+" politiely declines and defeats them in a good old fashioned beat down. The "+n+"s seem less than enthused about getting their stolen property back. Something about the "+m+" being a spoilsport?"
p="A crying "+n+" child asks why the "+m+" is such a meany head. Why won't they dance? Defeated, the "+m+" hangs their head, and then begins doing an extremely stupid "+l+" Dance, well below their dignity. The "+n+" child is estatic and begins "+p+" in time to the music that only the "+m+" can hear. "
j=$.z
i="The "+j+" approaches the "+m+", complimenting them on their stupid "+l+" Dance. Mortified, the "+m+" initiates strife."
n="It is done. Now NO ONE but that "+n+" child knows of the blow to the "+m+"'s dignity. No one at all."
s.i(0,new R.R("Do a Stupid Dance",!1,[new U.c(o),new U.c(k),new U.c(p),new U.a_(i,"You just KNOW that that shitty "+j+" is gonna somehow post videos of the "+m+"'s stupid "+l+" dance online. They must be stopped.",n)],H.a([],g),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(q,s,null),$.at)
s=H.a(["Denial","Rejection","Resignation","Impossibilty","Awareness","Walls","Meta","Bullshit","Finality","Acceptance","Allowance","Frustration"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.lA,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.c4,$.j)
t.i(0,$.cB,$.m)
t.i(0,$.cu,$.j)
r=$.o
q="The "+r+" has wandered around for hours. There are walls. And empty villages. And FUCKING NOTHING ELSE. What is WRONG with this stupid as fuck bullshit land? "
p="The "+r+" feels like someone is laughing at them. Not like....a "+$.t+", as irritating as they are. Like....something watching all of this and thinking it's all a big laugh. Like entertainment. Somebody out there thinks it's FUNNY that this land is so empty and bullshit and frustrating right now. The "+r+" is so fucking pissed."
o="The "+r+" has fucking given up. Fine. This part of the land is bullshit. There are no quests, no challenges. The land itself rejects their attempts to find meaning in it. FUCKING FINE.  A sign pops up next to the resigned "+r+". 'You win, teleport to fight "+$.z+"? Y/N'. God DAMN it. "
n="This is the least satisfying quest chain, ever. With a hearty 'FUCK YOU', the "+r+" presses the button to fight their bullshit final boss. Fuck dignifying them with a name. The "+r+" is going to work out all their fucking frustrations with this land with a good old fashioned beatdown. "
m="Fucking YES. Finally some goddamned CATHARSIS! Maybe the "+r+" can finally put this bullshit chapter of their land behind them."
t.i(0,new R.R("Hate This Bullshit Land",!1,[new U.c(q),new U.c(p),new U.c(o),new U.a_(n,"God FUCKING DAMN IT. After all that the "+r+" LOSES!? ",m)],H.a([],g),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
h.i(0,new X.G(s,t,null),$.at)}}
Y.nW.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Walking Stick",H.a([$.W,$.N,$.dt],s),"I guess it helps scouts walk for long periods of time? And not let anybody catch up.",!1,"Support Stick of Old And Injured")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Adorable Girlscout Beret",H.a([$.O,$.N,$.vM,$.X,$.Z],s),"Okay, legit, ABJ's hat is amazing.",!1,"ABJs Hat")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Map",H.a([$.J,$.N,$.X],s),"I guess Scouts update this on their own? Untread ground and all.",!1,"Kyoto Overcoats Spacemap")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Compass",H.a([$.D,$.N,$.X,$.a1],s),"Magnets man, how do they work.",!1,"Shoguns Navigation Box")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p
t=[P.B]
s=H.a(["Maps","Trails","Compasses","Wilderness","Trails"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.de,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.b1,$.j)
t.i(0,$.ck,$.L)
t.i(0,$.aN,$.L)
r="Now that the "+$.z+" has been defeated, the planet has really opened up. The "
q=$.o
p=[U.c]
t.i(0,new R.a5("Blaze a Trail",!1,[new U.c(r+q+" eagerly begins to explore uncharted territory. "),new U.c("The "+q+" takes in the sight of a glorious waterfall. They might be the only thing in living memory to see it. It's amazing. They continue exploring their land."),new U.c("Deep in a forgotten forest, in a temple covered in golden "+$.t+"s, the "+q+" finds a treasure chest with a fraymotif inside. Travel is its own reward, but it's nice to have more tangible ones, too.")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has released the frogs from their vine tangled prisons. The land gets just a little bit less wild. The "
r=$.o
t.i(0,new R.bA("Find the Frogs",!1,[new U.c(q+r+" is given a map to where all the frogs are and is told to get going. "),new U.c("The "+r+" is following a detailed guide on which frogs to combine with which other frogs. It's a little boring, but at least the "+r+" knows they won't make a mistake."),new U.c("Following the last step in the guide booke, the "+r+" finds the Final Frog. Luckily, a "+$.t+" "+$.K+"s in time to stop them.   ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.bL)}}
L.nX.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Scroll",H.a([$.J,$.N,$.X],s),"Scribe Shit",!1,"Rolled Up Picture of JR")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ink Pot",H.a([$.aT,$.N,$.aj,$.X],s),"You could probably censor shit with this.",!1,"Black Liquid That Tastes Awful")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blank Book",H.a([$.J,$.N,$.aw,$.X,$.aj,$.Z],s),"Fill it in yourself I guess.",!1,"Dick Drawing Practice Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Quills","Feathers","Pens","Ink","Paper"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.lB,$.j)
t.i(0,$.b1,$.j)
t.i(0,$.cA,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cz,$.m)
r="The "+$.z+" has caused all those fucking bird underlings to finally drop the frogs. The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(r+q+" thinks hard and figures out the best way to start collecting them. "),new U.c("The "+q+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+q+" has finally figured out how to breed the final frog.      ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" discovers a large library of "
o=$.t
t.i(0,new R.a5("Restore the Library",!1,[new U.c(q+o+" documents and books in its lair. They were not taken care of to say the least, and are badly in need of repair."),new U.c("The "+r+" sits in a small room, repairing bindings, glueing pages, and copying and replacing pages outright where necessary.  The work is strangely soothing."),new U.c(" The final book has been restored.  The local "+o+"s dedicate a library in the "+r+"'s honor and cherish their legacy now returned to them.")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
S.o_.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Cueball",H.a([$.eh,$.mo,$.N,$.ad,$.ap,$.Z],s),"Don't listen to this asshole.",!1,"A Worthless White Ball")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Crystal Ball",H.a([$.eh,$.vK,$.N,$.aP],s),"Seer shit.",!1,"A Worthless Clear Ball")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Binoculars",H.a([$.aT,$.N,$.D],s),"Seer shit.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Blindfold",H.a([$.vG,$.N,$.aY],s),"May as well skip the whole 'going blind' part of the deal.",!1,"Long Distance Perversion Apparatus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Mines","Holes","Tunnels","Burrows","Nests"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.vp,$.j)
t.i(0,$.ir,$.j)
t.i(0,$.vn,$.j)
t.i(0,$.cB,$.m)
r="Now that the "+$.z+" has been defeated, the land is really starting to open up. The "
q=$.o
r=r+q+" finds a tunnel filled with Blind "
p=$.t
o=[U.c]
t.i(0,new R.a5("Be the King",!1,[new U.c(r+p+"s who could use some guidance on where to place new tunnels. The "+q+" agrees to see what they can do. "),new U.c("The "+q+" guides the Blind "+p+"s to the best place to lay a new tunnel. You kind of wonder how they got along up until now."),new U.c("The Blind "+p+" have finally finished the tunnel.  Not only did it not collapse, killing all the diggers, but there was grist and boondollars found during excavation.   The happy "+p+"s give the "+q+" some as a reward. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
q="The "+$.z+" has unblocked the tunnels containing the vast majority of the frogs. The "
p=$.o
t.i(0,new R.bA("Understand the Frogs",!1,[new U.c(q+p+" thinks hard and figures out the best way to organize the "+$.t+"s to start collecting frogs. "),new U.c("The "+p+" is getting a headache trying to keep track of which frogs have been bred with which other frogs. The constant croaking isn't helping, either. "),new U.c("The "+p+" has finally figured out how to breed the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
q="The "+p+" hears a strange voice in their head. Huh, it seems like a carapace years in the future (but not many) needs their help making sure things happen how they already happened which. Fuck. More Time shit. The "+p+" organizes a group of "
r=$.t
t.i(0,new R.a5("Work With Exiles",!1,[new U.c(q+r+"s to carry everything out."),new U.c("The "+p+" instructs a group of "+r+"s to exile a random ass carapace. They have no clue why, but the voice insisted. Alright, then."),new U.c("At the "+p+"s request, a solitary "+r+" chucks a few random ass objects into a Lotus Time Capsule. Okay. They are FINALLY done running around and doing inscrutable errands for a voice in their head. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
r="A group of underlings are still making trouble, even after the defeat of the "+$.z+". The "
p=$.o
r=r+p+" begins planting rumors of a huge "
q=$.ae
t.i(0,new R.a5("Have the Keikaku",!1,[new U.c(r+q+" Treasure in the center of a still active dungeon. "),new U.c("As planned, the group of underlings moves into the still active dungeon, hopeing to find the "+q+" Treasure.  In a dramatic twist no one could possibly see coming, it turns out the "+p+" was the treasure all along. The underlings are soundly defeated and the land is safe.")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
T.c2.prototype={}
Y.o6.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aw,$.N,$.J,$.bq,$.Z,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aT,$.N,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a1,$.N,$.aP,$.ax,$.J],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Villages","Forges","Smiths","Anvils","Hammers","Horseshoes","Nails","Jewelers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.b1,$.m)
t.i(0,$.de,$.j)
t.i(0,$.cB,$.m)
t.i(0,$.aN,$.m)
t.i(0,$.c5,$.j)
r="The defeat of the "+$.z+" has somehow caused the Forge to go quiescent again? What the hell? The "
q=$.o
p=[U.c]
t.i(0,new R.bA("Forge the Frogs",!1,[new U.c(r+q+" has to start stoking it all over again. "),new U.c("The "+q+" breeds one frog only for it to somehow cause half their work to be undone. They have the feeling they will be here for awhile."),new U.c("The "+q+" has finally figured out how to breed the final frog.  Wait. No. False alarm. Looks like there's one more step.    "),new U.c("The "+q+" has finally figured out how to breed the final frog.  They wait several moments to see if SBURB is going to throw yet another bullshit set back their way to draw the plot out, but nope. It looks like they are actually, finally, done.     ")],H.a([],p),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
q="Now that the "+$.z+" has been taken care of, the "
r=$.o
q=q+r+" finds a long line of "
o=$.t
t.i(0,new R.a5("Supply the Consorts",!1,[new U.c(q+o+"s who lack the things they need to live their lives. The "+r+" gets to work alchemizing them."),new U.c("The "+r+" sits in a small room, creating tablewear, blankets, clothes, bookshelves, anything the demanding "+o+" might need.  The work is strangely soothing."),new U.c(" The "+o+" finally have the basic necessities taken care of.  The local "+o+"s dedicate a new Blacksmith Forger in the  "+r+"'s honor and vow to make their own goods from now on.")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
N.o7.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Fiduspawn Plush",H.a([$.cd,$.O,$.aY],s),"Hopefully just a replica.",!1,"Copyrighted Yellow Rat Plush")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Teddy Bear",H.a([$.cd,$.O,$.aY],s),null,!1,"Cuddle Bear")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dice",H.a([$.tk,$.aA],s),null,!1,"D113")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Pigeon",H.a([$.bz,$.ap,$.bh,$.aX,$.bn,$.tu],s),"Better fucking tell JR. Ironic pigeons and all.",!1,"Bird of Impending Doom")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Cat Ears",H.a([$.O,$.aY,$.cd],s),"Fuck. Cat. Trolls.",!1,"Weeb Shit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Religious Text",H.a([$.aw,$.J],s),null,!1,"Religious Book Containing No Shogun, A Bad Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Psychology Book",H.a([$.aw,$.J],s),null,!1,"How to Guarantee Your Message Gets Pinned The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Therapy Couch",H.a([$.aY,$.O],s),null,!1,"Giant Problem Absorbing Couch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("FLARP Manual",H.a([$.aw,$.J,$.X],s),"Fuck. Cat. Trolls. Though I guess she never FLARPED.",!1,"Book of Nerd Natural Selection")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Couches","Therapy","Analysis","Cigars","Psychology"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.L)
q.i(0,$.aN,$.m)
q.i(0,$.cz,$.j)
q.i(0,$.cA,$.m)
p=$.o
o="The "+p+" finds a help wanted sign near a strange booth. Apparently the local "
n=$.t
m=[U.c]
q.i(0,new R.Y("The Therapist is IN",!1,[new U.c(o+n+"s are in need of a therapist? The "+p+" decides to try it out! "),new U.c("Huh, somehow all the "+n+"'s problems end up being about childhood trauma involving "+$.aH+" or "+$.ae+".  The "+p+" is getting really good at helping them out. "),new U.c("A line of "+$.K+"ing "+n+" extends out to the horizon. The "+p+" is the most popular therapist on the planet! ")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Meditation","Chants","Worship","Altars","Hymns","Chapels","Priests","Angels","Religion"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dJ,$.L)
s.i(0,$.aN,$.j)
s.i(0,$.cz,$.j)
s.i(0,$.t0,$.j)
s.i(0,$.cJ,$.j)
s.i(0,$.t6,$.j)
s.i(0,$.cA,$.m)
o=$.o
n="The "+o+" wanders into an incredibly calm area of their land. It is filled with chanting and "
l=$.K
n=n+l+"ing "
k=$.t
n=n+k+"s. Apparently they are monks contemplating the vastness of the Vast Croak. The "+o+" joins them. "
j="While meditating with the "+k+" monks, the "+o+" has come to a startling realization, the vast croak is related to "
i=$.aH
s.i(0,new R.Y("Meditate On Frogism",!1,[new U.c(n),new U.c(j+i+"-ness. How could they miss this?"),new U.c(" The "+o+" begins telling all the "+k+" monks about how "+i+"-ness relates to the Vast Croak. The monks begin "+l+"ing in amazement, this could revolutionize Frogism for generations!")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Roleplaying","FLARPS","Dungeons","Dragons","Tabletops","Dice"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cQ,$.L)
t.i(0,$.dH,$.j)
t.i(0,$.c5,$.j)
t.i(0,$.dI,$.j)
t.i(0,$.h5,$.j)
r=$.o
q="The "+r+" wanders into an entire crowd of "
o=$.t
t.i(0,new R.Y("Protect the FLARPers",!1,[new U.c(q+o+"s dressed in authentic style fantasy armor. What is going on? The nearest one stops "+$.K+"ing long enough to explain that it's time for Paradox Space's biggest FLARP convention. The "+r+" happily joins the RP."),new U.c("The "+r+"'s character in the FLARP is nearly maximum level. This is so much fun! Suddenly, a group of underlings attack the crowd. Confusion reigns as the "+o+"s think it's somehow related to FLARP at first and don't fight back seriously. It is up to the "+r+" to save the day! All that RP practice surprisingly pays off. They win easily!   "),new U.c("The FLARP is finally coming to an end. All the "+o+"s agree that it is the best session in living memory and celebrate how the "+r+" kept it from becoming a tragedy.")],H.a([],m),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,t,null),$.aC)}}
M.bB.prototype={}
N.o9.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Frog Statue",H.a([$.aG,$.av,$.S],s),"Frogs.",!1,"Croaking Lizard Monument")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Frog Costume",H.a([$.O,$.S],s),"You won't be able to stop the ribbits.",!1,"Croaking Lizard Cosplay")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Reactor",H.a([$.c1,$.X,$.a6,$.S],s),null,!1,"A Representation of My Hatred for Everything")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Telescope",H.a([$.D,$.aT,$.X,$.S],s),null,!1,"Mono-Sighted Long Ranged Perversion Apparatus")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Green Sun Poster",H.a([$.J,$.S,$.tn,$.Z],s),"Huh.",!1,"Sauce Sun Poster")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m
t=$.o
s=[P.B]
r=H.a(["Wherever the "+t+" goes, they find a "+$.t+" yammering on and on about FROGS. It only makes a little more sense than when they say nothing but "+$.K+".","The "+t+" has found several frogs in various states of not-usefulness. Apparently "+$.z+" is somehow to blame?","The "+t+" wonders why there are so many temples covered in frog iconography in this weird land."],s)
t=$.o
q=H.a(["The "+t+" discovers some tiny ectobiology lab equipment. Oh! Apparently it's for breeding frogs?  They play around with it a bit with what frogs they've managed to collect. It looks like they can somehow...combine frogs? Aww, look how cute that tadpole is!  ","The "+t+"'s server player deploys some weird equipment. After fiddling with it a bit, the "+t+" learns they can zap frogs into it and make baby frogs. How cute! ","A wizened "+$.t+" shows the "+t+" an ancient temple containing tiny ectobiology equipment. The pictures in the temple depect two frogs being zapped to it, and producing a cute little tadpole."],s)
t="A wise old "+$.t+" tells the "
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
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cB,$.L)
t.i(0,$.t2,$.j)
s=[U.c]
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[0]),new U.c(q[0]),new U.c(n[0]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[1]),new U.c(q[1]),new U.c(n[1]+" "+m[1])],H.a([],s),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[2]),new U.c(q[2]),new U.c(n[2]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[2]),new U.c(q[0]),new U.c(n[1]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[2]),new U.c(q[1]),new U.c(n[1]+" "+m[2])],H.a([],s),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
t.i(0,new R.R("Light the Forge",!1,[new U.c(r[0]),new U.c(q[1]),new U.c(n[2]+" "+m[0])],H.a([],s),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
t.i(0,new R.bA("Breed the Frogs, But Be Boring About It",!1,[new U.c("The "+p+" collects all sorts of frogs. Various "+$.t+"s 'help' by "+$.K+"ing up a storm. "),new U.c("The "+p+" begins combining frogs into ever cooler frogs. They begin to realize that an important feature is somehow missing from all frogs. Where could the frog with this trait be?  "),new U.c("The "+p+" has found the final frog.   Universe Tadpole all ready.   ")],H.a([],s),R.y(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
this.f.i(0,new X.G(o,t,null),$.FR)}}
U.ag.prototype={
gG:function(a){return this.d+"kind"},
$isbF:1,
$asbF:function(){return[A.a4]}}
K.cD.prototype={
gG:function(a){return this.a}}
M.od.prototype={
aR:function(a){return"application/octet-stream"},
P:function(a6,a7){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$P=P.bu(function(a8,a9){if(a8===1)return P.br(a9,s)
while(true)$async$outer:switch(t){case 0:q=new B.dc(null,0)
q.a=J.dV(a7,0)
for(p=0,o="";p<6;++p)o+=H.hC(q.a5(8))
n=o.charCodeAt(0)==0?o:o
if(n!=="SPRITE")throw H.k("Invalid header: "+n)
m=q.a5(8)
l=9+m*6
o=8*m
k=q.a5(o)
j=q.a5(o)
i=q.a5(o)
h=q.a5(o)
g=q.a5(o)
f=q.a5(o)
o=P.C
e=P.B
d=P.bX(o,e)
c=new O.cS(k,j,null,null,null,null,null,null,d,P.bX(e,o))
c.x=new Uint8Array(H.cx(k*j))
b=q.a5(8)
for(o=[o],p=0;p<b;++p){a=q.a5(8)
a0=q.a5(8)
l+=a0+2
e=new Array(a0)
e.fixed$length=Array
a1=H.a(e,o)
for(e=a1.length,a2=0;a2<a0;++a2){a3=q.a5(8)
if(a2>=e){r=H.v(a1,a2)
t=1
break $async$outer}a1[a2]=a3}d.i(0,a,P.oC(a1,0,null))}a4=q.a5(8)
a5=$.$get$wC().n(0,a4)
if(a5==null)throw H.k("Sprite decoding error: Encoding id "+a4+" not supported.")
c.i0(i,h,g,a5.c.$4(a7,l,g*f,c))
c.hN()
r=c
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdm:function(){return[O.cS]},
$asc6:function(){return[O.cS,P.bg]}}
R.oG.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Meddler's Guide",H.a([$.aw,$.N,$.J,$.bq,$.Z,$.aJ],s),"Meddling meddlers gotta meddle. ",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("First Aid Kit",H.a([$.aT,$.N,$.aJ],s),"Heals here.",!1,"Anti-Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=$.N
r=A.i("Cloud in a Bottle",H.a([r,r,$.bk],s),"Fucking sylphs man. How do they work?",!1,"Fart In a Jar")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Fairy Wings",H.a([$.a1,$.N,$.aP,$.ax,$.J],s),"I GUESS Sylphs in myths are kinda fairy shit, right?",!1,"Wings Cut Straight From a God Tier Troll")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o
t=[P.B]
s=H.a(["Springs","Water","Pools","Reflection","Contemplation","Fountains","Wellsprings","Geysers"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cz,$.j)
t.i(0,$.aN,$.j)
t.i(0,$.de,$.m)
t.i(0,$.f_,$.m)
t.i(0,$.t_,$.m)
t.i(0,$.dY,$.m)
t.i(0,$.io,$.m)
t.i(0,$.t5,$.m)
r=$.o
q="The "+r+" decides to take a break after defeating "+$.z+" and returns home. Immediately after opening the front door, they\u2019re buried in an avalanche of "
p=$.t
o=[U.c]
t.i(0,new R.a5("Heal the Timeline",!1,[new U.c(q+p+"s. Crawling their way out, the "+r+" sees the "+p+"s are all using a copy of the "+r+"\u2018s time travel device and more of them are popping in and out from other points in time. If left unchecked, they\u2019ll probably create way too many unstable time loops to be good for the session."),new U.c("The "+r+" does some time traveling to investigate when the "+p+"s get time machines to stop any more "+p+"s from getting them. They find a time when their house is suddenly filled to the brim with "+p+"s and then later they all seemingly vanish with no evidence of time traveling "+p+"s at any other time. The "+r+" realizes that means the "+p+"s are getting their time machines in the same timeframe as when they are popping in and out of time. Which means if the "+r+" wants to stop the "+p+"s from causing time travel messes, they\u2019ll need to squeeze their way through the "+p+" filled house."),new U.c("Traveling back to the time they were originally in, the "+r+" gets ready to take the plunge into a fuckton of "+$.K+"ing "+p+"s. They slowly crawl and squeeze their way through; cursing the dumb shit they have to do to fix time problems. After a couple of agonizing minutes, they finally make their way to their alchemiter, where they find a bunch of "+p+"s are wasting grist making copies of the "+r+"\u2018s time machine. The "+r+" chases them away from the alchemiter, and then spends the next four hours slowly going through the house, confiscating time machines while also making sure they don\u2019t accidently confiscate a time machine they already confiscated and create a time paradox. Eventually all the time machines are taken and all the "+p+" s have been given a stern talking to. The "+r+" is more than done with their \u2018break\u2019.")],H.a([],o),R.ug(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
r=$.t
p="A handsome "+r+" is scheduled to be wed to a beautiful maiden. Instead, he keeps seeing visions of an ethereal "+r+", and runs away to be with her a clearing in the woods filled with bubbling springs.  The "
q=$.o
t.i(0,new R.a5("Be The Sylph",!1,[new U.c(p+q+" is unimpressed. "),new U.c("The "+q+" alchemizes 'The Sylph's Scarf'. Huh. Apparently it's a reference to some sort of ballet? A "+r+" crone assures the "+q+" that it will stop the handsome "+r+" from seeing weird visions that make him run into the woods, though."),new U.c("The "+q+" gives the handsome "+r+" the 'Sylph's Scarf'. He immediately begins weeping that the ethereal "+r+" is dead. He is inconsolable. Holy shit, ballets about Sylphs are kinda dark.")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.t
q="The "+r+"s are so stressed after all that shit with the "+$.z+". They are yelling and "+$.K+" at each other over the slightest of insults. The "
p=$.o
t.i(0,new R.a5("Relax the Consorts",!1,[new U.c(q+p+" decides that what they really need is to chill the fuck out. "),new U.c("The "+p+" organizes a spa day for the "+r+"s in one of the land's many, many bodies of water. The sound of the water is so relaxing, it's like it melts the worries right off."),new U.c("The "+r+"s are back to their normal selves.  Only one fight breaks out all week, and really, that asshole "+r+" deserved what was coming to him. Everything is doing pretty good, thanks to the "+p+". ")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p="The "+$.z+" has allowed the water to recede enough to form shallow pools for the frogs. The water is muddy and silty until the "
r=$.o
p=p+r+" purifies the pools "
q=$.t
t.i(0,new R.bA("Purify the Frogs",!1,[new U.c(p),new U.c("The "+q+"s are ectobiologizing....VERY wrong frogs. The "+r+" goes after them and heals the deformities, then shows the "+q+"s how to do it right. "),new U.c("By the time the final frog is found, it is dead.   Calmly, the "+r+" uses the ectobiological equipment to access it in the past, and alchemizes it's offspring. the    ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
r="The defeat of the "+$.z+" has some unforseen consequences, including the tainting of the water for the majority of the land. The "
q=$.t
r=r+q+"s seem to have figured out a solution in the short term, but the "
p=$.o
t.i(0,new R.a5("Purify the Water",!1,[new U.c(r+p+" resolves to bug and fuss and meddle until things are fixed the right way. "),new U.c("So far, the "+p+" hasn't had much luck getting "+q+"s to build a water purifying facility.  They are content just boiling their water. 'It's not hard', they say. It's so frustrating that the "+p+" knows they can help them but the "+q+"s just will NOT cooperate. "),new U.c("The "+p+" has finally accepted that some people just don't want to be helped. As they make peace with this, a mysterious glow emerges from their chest.  The water of the land matches this glow, and the water is purified through the power of "+$.aH+". Huh. Okay then.")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
D.oJ.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Robot",H.a([$.a6,$.D,$.ap,$.X],s),"An obviously superior choice.",!1,"ShogunBot")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Circuit Board",H.a([$.a6,$.D],s),"This better be going INTO a robot and not out of one.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Datastructures for Assholes",H.a([$.a6,$.J],s),"Sounds like the perfect book for you.",!1,"Machines Heart, Torn Straight From ABs still powered chest")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("~ATH - A Handbook for the Imminently Deceased ",H.a([$.a6,$.J,$.aD,$.aw],s),"Such a pointless book.",!1,"Huge Fucking Book for Goddamn Lifeless Nerds")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("3-D Printer",H.a([$.aA,$.a6,$.D],s),null,!1,"3-D Shitpost Maker")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Virus on a USB Stick",H.a([$.vQ,$.D],s),"Fuck you. You fucking DROP that.",!1,"Make a Computer Shitpost Itself to Death on A Stick")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Wrench",H.a([$.tB,$.D,$.ad],s),"Make sure to use it build a dope af robot.",!1,"The Tool of Judgement for Machines")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Computer",H.a([$.a6,$.D],s),"Computers are good. That is all there is to say on the matter.",!1,"JRs Computer, Broken yeah but still")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Circuits","Computers","Lightning","Metal","Glass","Machines","Complexity"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.iu,$.m)
q.i(0,$.eV,$.j)
q.i(0,$.eY,$.j)
q.i(0,$.cb,$.L)
p=$.o
o="The "+p+" learns from their "
n=$.t
o=o+n+"s about the great "
m=$.aH
n=o+m+" MACHINE, which used to keep the "+n+"s safe before "+$.z+" destroyed it. "
o="The "+p+" searches for the "
l=$.ae
o=o+l+"s needed to fix the "+m+" MACHINE, finding them scattered in dungeons across the land. "
m="The "+p+" finds the last "+l+" needed, finishes a boss fight, and slots it into the "+m+" MACHINE, restoring it to its ancient glory. An inventress carapace notices the momentous occasion. "
l=$.EU
p=[U.c]
q.i(0,new R.Y("Fix the Machine",!1,[new U.c(n),new U.c(o),new U.c(m)],H.a([],p),R.y(),!1,!1,new Y.cU("Rewards/sweetFriendship.png",null,l,"Rewards/no_reward.png",null),1,null,null),$.A)
l=$.o
m="The "+l+" is approached by a "
o=$.t
o=m+o+"scientist with a complex problem: The underlings have started using a complex code to stage their attacks, and the "+o+"s are at a loss as to what to do. The "+l+" agrees to help decipher the puzzle. I mean, look at the little guy "
m=$.K
q.i(0,new R.Y("Decipher the Enigma",!1,[new U.c(o+m+"ing, how could they not? "),new U.c("The "+l+" spends an unreasonable amount of time looking for ways through the code. Apparently, "+$.z+" is responsible for the code, and he changes it every day. Each underling group carries a machine that lets them decipher the messages, but without the days settings, the machine is useless."),new U.c("The "+l+" realizes that this is basically a rip off of the enigma code, so constructs a computer using the lands "+$.ae+" to decipher the code. The code is broken, and the consorts celebrate with a huge party of "+m+"s ")],H.a([],p),R.fj(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Factories","Manufacture","Assembly Lines","Gears","Unions"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.eY,$.j)
s.i(0,$.ee,$.L)
s.i(0,$.eX,$.m)
s.i(0,$.cQ,$.j)
s.i(0,$.cb,$.L)
o=$.o
n="The "+o+" learns that all of the local "
l=$.t
s.i(0,new R.Y("Produce the Goods",!1,[new U.c(n+l+"s have a severe shortage of gears and cogs. It is up to the "+o+" to get the assembly lines up and running again. "),new U.c("The "+o+" is running around and fixing all the broken down equipment. This sure is tiring! "),new U.c("The "+o+" is training the local "+l+"s to operate the manufacturing equipment. There is "+$.K+"ing and chaos everywhere. "),new U.c("The "+o+" manages to get the factories working at peak efficiency.  The gear and cog shortage is over! The "+l+"s name a national holiday after the "+o+". ")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
o=$.o
l="The "+o+" finds two groups of "
n=$.t
l=l+n+"s screaming and "
k=$.K
l=l+k+"ing at each other. Apparently the first group of "+k+"s are workers at a local "
j=$.ae
l=l+j+" factory and want to be paid more? The second group of "+n+"s claim they don't work hard enough for a raise.  "
k="The "+o+" arranges for the worker "+n+"s to meet with the factory manager "+n+"s individually and discuss their complaints. The "+o+" is getting a headache from all the "+k+"ing, but at least progress is being made."
j="The "+o+" is shaking hands for a "+n+" newspaper, posing in front of the now bustling "+j+" factory. The workers are paid a fair wage, and several ways to make the factory work more efficiently has left the managers happy, too. "
n=this.y
s.i(0,new R.Y("Stop the Dispute",!1,[new U.c(l),new U.c(k),new U.c(j)],H.a([],p),R.e2(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.at)
s=H.a(["Robots","Androids","Cyborgs","Machines","AIs","Automatons","Droids","Bots"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.iu,$.L)
t.i(0,$.eV,$.j)
t.i(0,$.eY,$.j)
t.i(0,$.cb,$.L)
r=$.o
q="The "+r+" learns from a mysterious "+$.t+" in a black trenchcoat about a great "
o=$.aH
q=q+o+" MACHINE, said to possess vast database about the game. Perhaps it knows something about "
n=$.z
t.i(0,new R.Y("Learn the Secret",!1,[new U.c(q+n+"? "),new U.c("The "+r+" searches for clues about the "+o+" MACHINE. In a big eureka moment they realize where they had been mistaken, the "+o+" MACHINE isn't some device, or a computer, it's the entire fucking planet!  "),new U.c("At last, the "+r+" has found a cave with a terminal to the "+o+" MACHINE. <b>TELL ME ABOUT "+n+".</b>, they type. <b><i>ERROR: TERM '"+n+" NOT FOUND. DID YOU MEAN 'DENIZEN' Y/N?</b></i>' Breathless, the "+r+" types '<b>Y</b>.   <b><i>131313 ENTRIES FOUND FOR DENIZEN? BUT THAT IS BORING. WOULD YOU INSTEAD LIKE TO LEARN ABOUT CAKE? Y/N?</b></i>'. The "+r+" spends all their free time perusing the database. The AI has a surprisingly subtle sense of humor, and every third response is a remarkably tasty cake recipe. ")],H.a([],p),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aC)}}
V.oL.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Lighter",H.a([$.D,$.ao],s),"Don't let ABJ know you have this.",!1,"ABJs Birthday Gift")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Siberia Poster",H.a([$.J,$.bm],s),null,!1,"Poster of the Shoguns Birthplace")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Nuclear Winter Poster",H.a([$.J,$.bm,$.c1],s),null,!1,"Shoguns Dream as a Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Doomsday Device",H.a([$.D,$.aD,$.c1,$.bi,$.bn],s),"Oh god, who would fucking trust YOU with thi?",!1,"Shoguns UNO Reverse Card")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Juggalo Poster",H.a([$.J,$.vV],s),null,!1,"False God Poster")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Watch",H.a([$.D,$.b3,$.bi],s),null,!1,"Shoguns Watch")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Magnificent Crown",H.a([$.D,$.b3,$.bi],s),null,!1,"The Shoguns Crown")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bitching Clothes",H.a([$.O,$.f6,$.bi],s),"Just wear roboclothes. Never need another set.",!1,"Shoguns Godtier Outfit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Ceramic Pork Hollow",H.a([$.bO,$.b3],s),"...",!1,"Shoguns Old Porkhollow")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Shit Ton of Guns",H.a([$.D,$.tv,$.aK,$.bi],s),"You are one high quality sociopath.",!1,"Dynamos Armament")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sniper Rifle",H.a([$.D,$.ty,$.aK,$.bi],s),"What. The. Hell.",!1,"Long Range Rooty Tooty Point And Boomy")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("AK-47",H.a([$.D,$.tr,$.aK,$.bi],s),"What is it with you and guns.",!1,"100% Genuine Soviet Kalashnikov")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("IED",H.a([$.mj,$.au,$.D,$.bo,$.bi],s),"You are probably going to blow yourself up, asshole.",!1,"Shitpost Bomb")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Idiots Guide To Being An Asshole",H.a([$.J,$.bq,$.aw],s),"Oh god, this is HILARIOUS, it's the PERFECT book for you.",!1,"Shoguns Guide to Shitposting")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Bike Horn",H.a([$.c8,$.D,$.aU,$.bq],s),"I hear flesh bags keep gtting scared by these. I don't get it.",!1,"Bike Mounted Pain Box")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Matches",H.a([$.W,$.ao],s),"Don't let ABJ get this.",!1,"ABJs First Arsonist Set")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Fire","Arson","Blaze","Burning","Flames"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cy,$.m)
q.i(0,$.dH,$.j)
q.i(0,$.dZ,$.j)
q.i(0,$.eZ,$.j)
q.i(0,$.lF,$.j)
q.i(0,$.dI,$.m)
p=$.o
o=[U.c]
q.i(0,new R.Y("Start the Fires",!1,[new U.c("The "+p+" finds a bowl filled with colorful green powder in a dungeon, next to a locked door with green, blue and red gems inset in the middle. After some poking and proding, they do what comes naturally and start a small fire. The bowl blazes green. A green gem lights up on the locked door. Huh. "),new U.c("The "+p+" has been wandering around, starting random fires, when they finally manage to burn someting that blazes blue. When they go back to check, the dungeon door has both green and blue symbols lit up.  "),new U.c(" The "+p+" has finally managed to get a bright red fire going. They rush back to the dungeon to see all three symbols lit up. They enter and get a fat stack of boonies for beating the dungeon. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p=this.r
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Treasure","Gold","Wealth","Hoards","Coins","Money","Bling"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.cy,$.m)
s.i(0,$.dH,$.j)
s.i(0,$.cv,$.j)
s.i(0,$.dI,$.m)
n=$.o
m="The "+n+" learns that there is an entire planet of suckers, er, you mean "
l=$.t
s.i(0,new R.Y("All About the Boonies, Baby",!1,[new U.c(m+l+"s with boonies just burning a hole in their pockets. This needs to be fixed, ASAP."),new U.c("The "+n+" starts running a con job, you mean, ENTERTAINMENT VENUE, where they show the various gullible, you mean discerning "+l+"s various wonders from around Paradox Space. Marvel at the two headed "+$.ae+" underling. Tremble at the fearsome "+$.aH+" "+l+".   "),new U.c(" The "+n+" finally has enough boonies to get that fraymotif they've had their eye on.  Good thing, too, because the "+l+"s seem to finally be mostly out of cash. Oh well. ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Decay","Rot","Death","Mayhem","Gas","Wrath"],t)
H.a([],t)
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.cZ,$.j)
q.i(0,$.b1,$.L)
q.i(0,$.dK,$.j)
q.i(0,$.c_,$.m)
q.i(0,$.dY,$.L)
q.i(0,$.dd,$.L)
n=$.o
m="The "+n+" learns that all of the local "
l=$.t
q.i(0,new R.Y("Revive the Consorts",!1,[new U.c(m+l+"s are dead. This is....pretty cool, actually. "),new U.c("The "+n+" has found a series of intriguing block puzzles and symbols. What could it all mean? "),new U.c("With a satisfying CLICK, the "+n+" has solved the final block puzzle.  A wave of energy overtakes the land. There is an immediate chorus of "+$.K+"ing.  The dead "+l+"s have risen and want to be part of "+n+"'s Necromantic Army.   ")],H.a([],o),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Classism","Struggle","Apathy","Revolution","Rebellion","Hate"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c4,$.j)
t.i(0,$.dd,$.L)
t.i(0,$.ed,$.j)
t.i(0,$.it,$.j)
t.i(0,$.cb,$.m)
t.i(0,$.eg,$.m)
s=$.o
r="The "+s+" finds a crowd of "
n=$.K
r=r+n+"ing "
m=$.t
r=r+m+"s. They are holding signs with slogans like 'This isn't Fair' and 'Don't be Jerks'. Apparently they have a problem with the upper class "+m+"s in charge. The "+s+" is disgusted by their laziness and vows to stop them."
l="The "+s+" meets with the upper class "+m+"s to offer their services to quell the misguided rebellion. They are immediatly made the leader of the Special "+$.aH+" Forces.  "
s="It has been a long struggle, but finally the lazy, peasant "+m+"s have been defeated. The high class "+m+"s murmur dignified "+n+"s and give the "+s+" several medals. "
n=this.y
t.i(0,new R.Y("Stop a Rebellion",!1,[new U.c(r),new U.c(l),new U.c(s)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.A)
p.i(0,new X.G(q,t,null),$.aC)}}
X.G.prototype={
A:function(a){return"Theme: "+H.x(this.a)}}
U.oU.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Lockpick",H.a([$.D,$.N,$.aj,$.aL,$.Z],s),"No matter what, you'll always have at least one.",!1,"Anti-Lock Dagger")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Sneaking Suit",H.a([$.O,$.N,$.aj],s),"God. Why is Snake's outfit really called this. So dumb.",!1,"Full Body Latex Suit")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Dagger",H.a([$.D,$.N,$.aL,$.au,$.tj],s),"For when you wanna show 'em your stabs, I guess.",!1,"Stabbing Contraption")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Police","Law","Jails","Slammers","Officers","Cops","Prisons","Detectives","Crime","Robbers","Heists"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.c4,$.j)
t.i(0,$.dr,$.m)
t.i(0,$.ck,$.m)
t.i(0,$.cQ,$.m)
r="The "+$.z+" cannot release the frogs since the corrupt "
q=$.t
r=r+q+" Cops have confiscated them. The "
p=$.o
o=[U.c]
t.i(0,new R.bA("Steal the Frogs",!1,[new U.c(r+p+" organizes a team of crack "+q+"s to help raid the frog evidence lockers. "),new U.c("The "+p+" performs frog breeding as fast as the "+q+"s can deliver stolen frogs to them.  "),new U.c("The "+p+" has finally stolen the final frog.      ")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
p=$.o
q="The "+p+" is just minding their own business, when they see a huge stack of boonies recovered from the "+$.z+"'s layer and slated to be returned to the "
r=$.t
q=q+r+"s. Unable to resist, they pilfer just a bit. A nearby "+$.K+" sounds the alarm, shit, the "+p+" didn't know anybody was looking!  They flee with as many boonies as they can carry."
n="The "+p+" is keeping a low profile. Shit's still too hot to spend their ill gotten boonies, but it'll be worth it, they just know it."
p="Fuck, the "+p+" has been spotted. They lead the police "+r+"s on a wild chase that ends with the "+p+" faking their own death and assuming a new identity. They can FINALLY spend those boonies. "
r=this.fy
t.i(0,new R.a5("Escape the Law",!1,[new U.c(q),new U.c(n),new U.c(p)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.t
p="A weeping "+r+" approaches the "
n=$.o
p=p+n+", spinning a sad tale of their best friend being unjustly arrested during the reign of the "
q=$.z
q=p+q+". Nobody will free him, even after the "+q+" is gone. The "+n+" doesn't really care until the weeping "+r+" mentions a huge reward. It's ALL about the boonies, baby. "
p="The "+n+" manages to steal the keys to the "+$.aH+" Prison, easy peasy. It happens so fast it's like there was no key in the first place.  It's not much harder for them to abscond with the Prisoner "+r+", too. Nice."
n="The "+n+" returns the Prisoner "+r+" to their weeping and "+$.K+"ing best friend. The Prisoner "+r+" reveals the location of some valuable stolen goods they 'heard about' in prison.  Good enough for the "+n+"."
r=this.fy
t.i(0,new R.a5("Free The Prisoner",!1,[new U.c(q),new U.c(p),new U.c(n)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
n="Now that the "+r+" has been defeated, the "
p=$.t
n=n+p+"s have recovered their precious "
q=$.ae
n=n+q+". Huh. That looks....REALLY valuable. And the "
m=$.o
r=n+m+" totally deserves it, I mean, they did AAAAAAALL the work defeating the "+r+", right? They begin plotting to take it."
n="The "+m+" assembles a team of Disreputable "+p+"s. There is Baron "
l=$.K
l=n+l+"worth, the disaffected Heir to the "+$.aH+" Fortune, Smokes Mc"+l+" their 'in' with the shady underbelly of "+p+" society, and Fresh Jimmy, the wide eyed youth who has the stickiest fingers in Paradox Space.  The "+m+" thinks they have enough quirky characters to actually start planning this heist, now."
q="On the day of the big heist, Fresh Jimmy alerts the authorities about the impending robbery. He rats out the other Disreputable "+p+"s and the "+m+", too.  As the "+p+" authorities converge on the warehouse the team has converted to a make shift base of opperations, they begin receiving reports that the "+q+" has already been stolen? Fresh Jimmy has already escaped to the side, it turns out the traitor ruse was a distaction."
m="The Disreputable "+p+"s meet up with the "+m+" after the heat has died down to collect their share of the proceeds. Wow, it turns out crime really DOES pay! "
p=this.fy
t.i(0,new R.a5("Shit, Let's Be a Heist Movie",!1,[new U.c(r),new U.c(l),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",p,"Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
N.oV.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Grandfather Clock",H.a([$.W,$.ah,$.b3,$.S],s),null,!1,"Ticking Tower of Time")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Drum",H.a([$.vZ,$.S,$.a8],s),null,!1,"Ba Dum Tss but without the Tss Part")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Dead Doppelganger",H.a([$.aG,$.bh,$.S,$.aX,$.aV,$.aD],s),"Time is truly the worst aspect.",!1,"The Inferior You")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Music Box",H.a([$.D,$.S,$.a8,$.ah],s),null,!1,"Cube of Noise")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Turn Tables",H.a([$.D,$.S,$.a8,$.Z,$.al],s),"Do they come with ironic raps?",!1,"Spinning Noise Discs on a Noise Machine")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Metronome",H.a([$.D,$.S,$.a8],s),null,!1,"Never Ending Ticking Device")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j
t=[P.B]
s=H.a(["Ticking","Watches","Cesium","Pendulums","Timepieces","Clocks","Clockwork","Gears","Quartz"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.vr,$.ai)
q.i(0,$.cb,$.m)
q.i(0,$.cQ,$.m)
q.i(0,$.eX,$.j)
p=$.z
o="Now that the shitty "+p+" is no longer protecting them, the "
n=$.o
o=o+n+" can FINALLY get down to the important stuff, namely, destorying all those ceaselessly ticking clocks. God DAMN but they are annoying. "
m="With a satisfying BONG, another clock bites the dust. The "+n+" finds it all to be so very therapeutic. "
p="Through shenanigans too boring to detail here, the "+n+" finds themselves back in time, before the "+p+" was even here in the first place. Before absconding from the angry snake, they manage to wreck the fuck out of a single clock they hadn't seen before. 1001/1000 clocks destroyed. Mission Complete!"
n=this.x1
l=[U.c]
q.i(0,new R.a5("Destroy 1000 Clocks",!1,[new U.c(o),new U.c(m),new U.c(p)],H.a([],l),R.eo(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.j)
n=$.o
p="The "+n+" is getting sick and tired of the constant grinding of their planets clockwork mechanisms. After consulting some "+$.t+"s, they set out to fix the "
m=$.ae
p=p+m+" points that are causing the grinding."
o="The "+n+" learns that some of the "+m+" points dont actually exist in sync with the timeline, and so they do a whole bunch of bullshit time shenanigans that you really shouldnt worry about. Trust them, its ok. Totally didnt accidentally violate causality or anything."
k="The "+n+" has fixed all the "+m+" points! Except- Oh goddamn it.  "
j=$.z
q.i(0,new R.R("Fix the Clockwork",!1,[new U.c(p),new U.c(o),new U.c(k+j+" has started screwing up the "+m+" points all over again! They cant take this lying down. Or standing up! Or sitting down! Or... this metaphor got away from them."),new U.a_("The "+n+" is ready to face the "+j+". It will never have the chance to mess with the "+m+" points again!","The "+n+" being defeated really grinds my gears.  Get it? Cuz the clockwork is gonna stay broken and annoying sounding until the "+j+" is defeated. ","Ah, the sweet sound of clockwork NOT being broken as fuck.")],H.a([],l),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j=this.f
j.i(0,new X.G(s,q,null),$.at)
q=H.a(["Drums","Beat","Rhythm","Percussion","Metronomes"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.h6,$.j)
s.i(0,$.dZ,$.L)
s.i(0,$.cb,$.j)
p=$.o
o="The "+p+" starts messing about with the beating drums of the land. The constant cacophony is kinda getting on their nerves, so, following the advice of some friendly "+$.t+"s they try to line the beats up to a more harmonious rhythm. "
n="The "+p+" messes with time, placing zones of slowed or sped up time by the drums of their land so the beats start landing in something resembling a good beat."
p="The "+p+" has finally gotten all the drums of their land beating in an awesome rhythm. Except for one. The lair of the "
m=$.z
s.i(0,new R.R("Synchronize the Rhythm",!1,[new U.c(o),new U.c(n),new U.a_(p+m+" is built right into the loudest drum of all, and it keeps. Beating. Off. Rhythm. Fuck it, it's time to strife!","The beat continues to be cacophonous. ","Theeere we go. The loudest drum is finally on beat. The cacophony is finally defeated. And, you guess, the "+m+". Whatever. ")],H.a([],l),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(q,s,null),$.at)
s=H.a(["Progression","Age","Change","Future","Rivers","Possibility","Flow","Streams","Inevitability","Brooks"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.c5,$.j)
t.i(0,$.aN,$.m)
t.i(0,$.cz,$.j)
t.i(0,$.de,$.j)
r=$.z
q="The door to the "+r+"'s  lair is barred by a door locked with three identical missing "
p=$.ae
q=q+p+" Pieces. A fourth is already inlaid in the door. The "
o=$.o
q=q+o+" prepares for a bullshit item collection quest. "
n="The "+o+" is starting to get frustrated. No matter what they do they can't seem to find any more "+p+" Pieces. A "+$.t+" asks if they have tried...TWISTING they way they look at things. This cryptic as fuck statement does not make the "+o+" any less frustrated."
m="In a flash of insight, the "+o+" realizes that they can just use their Time Instrument to go back before they first visited the "+r+"'s lair three times and take the pieces then, as long as they remember to return it after. There. Now there are four "+p+" Pieces and the door is open. Time to prepare for a boss fight. "
r="The "+o+" is ready to fight the "+r+". "
k="Whew, doomed timeline averted. The "+o+" goes back in time to restore the 3 "+p+" Pieces to their original positions, so they can be there for when they come and get them the other times. Time travel is so confusing."
t.i(0,new R.R("Walk Another Path",!1,[new U.c(q),new U.c(n),new U.c(m),new U.a_(r,"Um. Is this a doomed timeline? What happens if the "+o+" never returns those "+p+" Pieces? If they didn't return them then why were they there when they first found the lair? Fuck. You HATE time travel.",k)],H.a([],l),R.hD(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
k=$.z
p="The door to the "+k+"'s  lair is barred by a door locked with three identical missing "
o=$.ae
p=p+o+" Pieces. A fourth is already inlaid in the door. The "
r=$.o
t.i(0,new R.R("Destroy Timelines",!1,[new U.c(p+r+" prepares for a bullshit item collection quest. "),new U.c("The "+r+" is starting to get frustrated. No matter what they do they can't seem to find any more "+o+" Pieces. A "+$.t+" asks if they have tried...TWISTING the way they look at things. This cryptic as fuck statement does not make the "+r+" any less frustrated."),new U.c("The "+r+" is ready to fucking give up. Fuck those "+o+" Pieces. In a flash of clocks and gears, three of their own doomed time clones warp in and hand them "+o+" Pieces. Oh. Huh. Well, fuck. The clones go off to die somewhere in piece. The "+r+" can now face the "+k+". "),new U.a_("The "+r+" is ready to fight the "+k+". ","Welp. The "+r+" has managed to fail even the face of their three doomed clones' nobel sacrifice. Fuck.","The sacrifices of the three doomed clones has not been in vain.")],H.a([],l),R.eo(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.j)
r="With the defeat of the "+$.z+", "
k=$.o
r=r+k+" uncovers historical documents in a ruined consort village. Taking them to the "
o=$.t
r=r+o+" leader, they inquire about the mysterious documents. The leader tells "+k+" about the Wars of "
p=$.aH
t.i(0,new R.a5("Shatter the Timeline",!1,[new U.c(r+p+" Metropolis. The "+o+"s have been quaking in fear for years, waiting for a savior to reverse the events of the Wars. "+k+" agrees to help the "+o+"s re-fight the Wars to win back their "+p+" Metropolis."),new U.c("Through some hard time-travel and shattering glass windows where needed, "+k+" has successfully set up events in the "+o+"s favor. They check back in with the past "+o+" leader to inform them that the timeline has been revised to their advantage."),new U.c("The "+k+" divulges to the "+o+" leader that their enemy leader has been assassinated (through their own marvelous work, of course). The "+o+" leader doesnt believe them, though. Why wouldnt they believe the time-traveler?! They launch a miserable failure of a counter-attack, resulting in the "+o+"s defeat. Agh!"),new U.c("The "+k+" is totally done with this bullshit. But they have an epiphany: what if they re-shattered the timeline, but took control of the strategy themselves? They grin to themselves as they travel back again, this time framing the enemy instead of assassinating them. This time, the leader believes the "+k+" this time, and carried through with their suggested strategy. With effort, "+p+" Metropolis is reclaimed, and the consorts have been given their freedom back!")],H.a([],l),R.eo(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.j)
p=$.t
k="There is a babbling brook. A wizened "+p+" is next to it. The water, he says, moves in only one direction. So, too, must we. The "
o=$.o
t.i(0,new R.R("Move Forwards, Never Stop",!1,[new U.c(k+o+" contemplates this for a while. Is it really a true thing when this game has time travel in it?"),new U.c("Days in the past, but not many, the "+o+" is exploring. They find the babbling brook and the wizened "+p+" yet again. He again says that the water flows in only one direction. Irrationally angry, the "+o+" yells that it's not true, that this is the second time he's met the wizened "+p+". The wizened "+p+" simply "+$.K+"s mysteriously.  "),new U.c("Days in the future, but not enough to catch up to the present, the "+o+" is exploring. When they find the babbling brook, the wizened "+p+" brightens. 'Soon.' he says, 'you will understand that we move in only one direction.'  He gestures downstream 'So too, will you soon have our last conversation. Or, looking another way. Our first.'.  Huh. The "+o+" thinks they get it. Time travel or not, they do things in a linear order.  So does the wizened "+p+"...even if it isn't the same order. "),new U.a_("Inexorably, the "+o+" is back in the present but also far in the future. The wizened "+p+" has just been slain by the "+$.z+", mere minutes after their first/last conversation. The "+o+" took the consort's advice to heart.  They have been preparing for this fight for a long time, now, going ever forward, but not on the same path in time as everyone else. It is time. ","It's a Time Paradox. Or is it? Did the "+o+" know they would be defeated? Did they fight anyways? ","This was always going to happen.")],H.a([],l),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
j.i(0,new X.G(s,t,null),$.at)}}
G.a0.prototype={
A:function(a){var t=this.b
if(t.length!==0)return C.b.gac(t)
return"NULL TRAIT"},
gee:function(){return this.a},
gdX:function(){return this.b},
gby:function(){return this.c}}
G.aI.prototype={}
G.af.prototype={}
G.bH.prototype={}
G.d.prototype={
ghI:function(){return this.e.length},
gby:function(){var t,s,r,q,p
for(t=this.e,s=t.length,r=0,q=0;p=t.length,q<p;p===s||(0,H.bT)(t),++q)r+=t[q].c
return r},
aA:function(a,b){return C.a.bz(b.ghI()-this.e.length)},
ep:function(a){return C.b.ha(this.e,a.gfX(a))},
$isbF:1,
$asbF:function(){return[G.d]},
gG:function(a){return this.d},
geJ:function(){return this.e}}
G.mp.prototype={
$1:function(a){return a instanceof G.d},
$S:function(){return{func:1,args:[G.a0]}}}
Q.pj.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Cardboard Box",H.a([$.J,$.S,$.aj],s),"It's the highest level void item. Except not. It's a box. Asshole.",!1,"Shoguns Old Home")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Hole Punch",H.a([$.D,$.S,$.aj],s),null,!1,"Paper Impaler")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Smoke Bombs",H.a([$.bo,$.S,$.aj,$.mj],s),null,!1,"Vape Grenades")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Tribal Mask",H.a([$.aX,$.S,$.aj,$.aV,$.bQ],s),null,!1,"Ancient Face")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Opera Mask",H.a([$.aA,$.S,$.aj,$.ah],s),null,!1,"Phantom of the Opera Mask")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Black Hole in a Bottle.",H.a([$.S,$.Z,$.tn,$.aj,$.aT],s),"Jegus fuck, don't break this.",!1,"Eternal Suffering in a Jar")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.x1=t},
E:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=[P.B]
s=H.a(["Nothing","Void","Emptiness","Dust","Shadows","Nowhere","Absence"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.j)
q.i(0,$.lE,$.j)
q.i(0,$.h8,$.j)
q.i(0,$.ir,$.j)
p=$.z
o="A big party is being held to celebrate the defeat of "+p+" and the "
n=$.o
o=o+n+" is invited as the guest of honor. There are promises of god food, including a gigantic cake. At the door a burly "
m=$.t
p=o+m+" stands with a clipboard. He eyes the "+n+" approaching and shakes his head. \u2018You\u2019re not on the list, so beat it.\u2019 The "+n+" tries to explain that they\u2019re the planet\u2019s hero and the one who beat "+p+", making them the guest of honor, but the bouncer just laughs. \u2018If you\u2019re supposed to be the hero, why haven\u2019t I heard of you already?\u2019"
o="The "+n+" asks other guests to vouch for them, but all of them are having trouble recognizing the "+n+". There\u2019s just something about the "+n+" that makes them so forgettable. They go home and bring back photos of themself with other "+n+"s as proof that they\u2019re also a hero, but the bouncer dismisses the photos as very realistic but clearly edited. What a pain."
n="The "+n+" gives up trying to convince the "+m+" bouncer of their existence. If they\u2019re not going to be recognized, they might as well take it all the way. They use their void powers to become completely unnoticeable and walk past the bouncer while making a number of obscene gestures. The "+m+" hosting the party approaches the "+n+" as soon they turn off their powers to join the party. \u2018There you are! You know it\u2019s very rude for the guest of honor to be so late. I\u2019m really disappointed in you.\u2019 Bluh."
m=this.x1
l=[U.c]
q.i(0,new R.a5("Be Forgettable",!1,[new U.c(p),new U.c(o),new U.c(n)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=$.o
n="The "+m+" has wandered around for hours and has found nothing new to do. There is NO way this is the end of the land. What is going on?"
o="Huh....what....what is this area of a wall that looks....a little different? Like the shadows aren't falling right on it? The "+m+" leans against it and stumbles into a ...weirdly hard to see area. Huh. The "+m+" wonders if maybe the rest of their quests are in places like this?"
p="Holy FUCK that was the BEST dungeon of ALL TIME!!!  The "+m+" sure feels bad for anybody who missed it.  Just, that TWIST at the end, man. So great."
k="You're....really having trouble following what's going on. The "+m+" emerges from one of those glitchy areas you can't see into, obviously fighting the "
j=$.z
k=k+j+". What the fuck is even happening!? "
i="The "+m+" won!  That's....GOOD, you think. The "+j+" was probably an asshole."
q.i(0,new R.R("Go to Nowhere",!1,[new U.c(n),new U.c(o),new U.c(p),new U.a_(k,"The "+m+" lost.  That's....BAD, you think. The "+j+" is probably an asshole.",i)],H.a([],l),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i=this.f
i.i(0,new X.G(s,q,null),$.at)
q=H.a(["???","[REDACTED]","[CENSORED]","Censorship","Conspiracies"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dJ,$.m)
s.i(0,$.lE,$.m)
s.i(0,$.h8,$.m)
s.i(0,$.c4,$.j)
p=$.o
o="Even with the victory of the "+p+" over the villainous "
n=$.z
o=o+n+", there are still problems. Ancient libraries lie crumbling in the denizen's lair, secrets hidden in languages long forgotten by "+$.t+" and carapace alike. Even the libraries on Prospit contain scant knowledge of this cryptic tongue, but the covers promise great power and mastery over the aspect of Void. Perhaps study of the "
m=$.ae
s.i(0,new R.a5("Reveal the Tomes",!1,[new U.c(o+m+" will provide insight."),new U.c("Hours of study yield little progress until the "+p+" has a breakthrough regarding symbols on the "+m+". It seems that through analysis of the symbols on the "+m+" using Zipf's Law, you can piece together which common words in normal language match up with common words in this strange script!"),new U.c("The "+p+" plunders ancient tombs, searching for a rumored Rosetta Stone of sorts, one that promises to provide more insight on rather uncommon words in the books of "+n+"'s library. After countless false starts and empty tombs, not only does the "+p+"find it, a nearly complete record of the history of the land is found, and by comparing it to known records, they can translate even MORE words, not to mention new parts of history they'll uncover once they translate it all."),new U.c("The "+p+", after hours of striving and looking into dark and forgotten places, poring over secret tomes, and studious work in the field of "+m+"ology, has finally translated most of the books in the library. The mystical techniques of the ancients (who probably never existed, but hey) are now open to them.")],H.a([],l),R.fj(),!1,!1,new Y.c0("Ancient Knowledge",null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.j)
m=$.o
s.i(0,new R.R("[REDACTED]",!1,[new U.c("Apparently the denizen [REDACTED] has been [REDACTED]ing all the [REDACTED] and everyone is starting to get a little pissed at them. Can the "+m+" help? "),new U.c("The "+m+" [REDACTED]s and it actually works! Everyone "+$.K+" in surprise. This might just be crazy enough to work."),new U.c("Wait, who would have thought that the [REDACTED] would be weak to [REDACTED]??? This is officially the dumbest fight in all of Paradox Space."),new U.a_("It's time to fight the [REDACTED] for real this time. Their reign of [REDACTED] will finally be at an end.","[REDACTED]","The "+$.z+" is defeated. FINALLY they can stop censoring everything on this stupid planet, especially "+$.t+"s.")],H.a([],l),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(q,s,null),$.at)
s=H.a(["Silence","Blindness","Deafness","Blindfolds","Earplugs","Sensory Deprivation"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.dJ,$.j)
t.i(0,$.lE,$.j)
t.i(0,$.h8,$.j)
r=$.o
q="Suddenly the "+r+" can't see or hear. Oh god, what is going on?  They feel around in close to a panic, until they find a button. After a moments deliberation, they press it. Suddenly they can see and hear again. Huh."
p="The "+r+" sees a red button at the other end of a cluttered hallway, inside a dungeon. Their bad feeling is confirmed when they suddenly can't see or hear again. After many stubbed toes and bruised shins, they finally make it to the button and press it to regain their senses."
o="The newest button is in the middle of a single large room with pitfall traps scattered throughout and underlings to boot. Are you fucking kidding me!? When the "+r+" loses their senses, they seriously consider just sitting down and seeing if it wears off, but those underlings would probably attack in the mean time. The "+r+" begins slowly making their way towards the button. Half way through, they realize with a start that the Underlings haven't tried to attack them. Huh.   When they finally press the button, the Underlings suddenly whirl to face them. Were they...INVISIBLE while they were blind? It's short work to defeat the underlings."
n="Faced with a huge underling that is probably too high a level to fight, the "+r+" is struck with sudden inspiration. They blindfold themselves and do their best to block out their ability to hear, as well. They make their way to where the giant Underling was and begin to strife them. When they stop being aware of flailing, they remove their blindfold and find the giant Underling has become a giant pile of grist. HELL YES, VOID POWERS RULE!!!  "
m="The "+r+" attempts to sneak up on the "+$.z+" while blindfolded. It dodges. Oh well, guess you can't out-void a Void boss.  Time for a regular strife!"
k="The "+r+" has defeated the major challenge of their land."
t.i(0,new R.R("Walk of Faith",!1,[new U.c(q),new U.c(p),new U.c(o),new U.c(n),new U.a_(m,"The "+r+" is going to have to try again.",k)],H.a([],l),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
i.i(0,new X.G(s,t,null),$.at)}}
E.pk.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Yardstick",H.a([$.dt,$.N,$.mn,$.Z],s),"Wait. Did you beat LORAS?",!1,null)
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("SBURBSim Hacking Guide",H.a([$.aw,$.N,$.jj,$.J],s),"Hell no, you leave your grubby fucking mitts outta the code.",!1,"The Shoguns Guide to Winning")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Body Pillow of JR",H.a([$.O,$.N,$.f7,$.tq,$.aY],s),"...I would ask why, but I already calculated all possible responses at a million times the speed I could get an answer.",!1,"The Shoguns Vessel")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Nanobots",H.a([$.tz,$.N,$.mg],s),"Oh look, a NON hacking way to fuck everything up, forever.",!1,"NANOMACHINES SON, THEY HARDEN IN RESPONSE TO PHYSICAL TRAUMA")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Horses","Fields","Meadows","Majesty","Ponies","Screens","Fourth Walls","Self Inserts","Meta","Indulgence"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.cB,$.j)
t.i(0,$.d_,$.j)
t.i(0,$.dq,$.j)
t.i(0,$.de,$.j)
t.i(0,$.ec,$.j)
t.i(0,$.eW,$.j)
t.i(0,$.h8,$.m)
r=$.o
q="A short while after arriving at their land, the "+r+" decides to fuck around. But to nobody's surprise, they discover historical documents that spell impending doom to every "
p=$.t
o=[U.c]
t.i(0,new R.Y("A Complete Waste Of Time",!1,[new U.c(q+p+" in the land. Blah blah blah, a meteor will strike in seven minutes and they must travel back in time to redirect the meteor and save everyone, blah blah blah, you've all heard it before. Surely "+r+" can't fuck this up."),new U.c("Of course, they do fuck it up. Living up to their classpect, they decide to first visit the far future(i.e. 8 minutes from now) to see what the consequences of their procrastination might possibly be. After all, they have all the time in the world, right? However, the second "+r+" sets foot in the future "+r+" is almost compeletly annihilated by burning rubble and debris. Luckily, a future "+r+" warps in and brings them to safety with seconds to spare! Great! But NOW you're going to save the "+p+"s, right?"),new U.c("Wrong. "+r+" manages to waste EVEN MORE TIME by fucking around in general with random shit. Needless to say, eventually they get their shit together and finally time travel to a time in the past with plenty of time before the meteor strike. They manage to convince the "+p+" leader to use magic (i.e. strap a bomb on a spaceship) to blow up the meteor before it becomes a problem! Great. At least "+r+" has grown SLIGHLTY more mature over the course of this."),new U.c("But now they have to create a stable time loop. Of course, "+r+" didn't plan any of this out beforehand, so in a rush of action(and procrastination) they get around to saving their past (but technically future) self. Then they place the historical documents in a place where they'll be found in a few hundred years. Finally, they warp back to the present (future?) to do whatever else they have to do on this godforsaken land.Good job! The quest is finally over. "+r+" gets to fuck around as much as they want! Luckily, they have matured slightly over the course of the quest, so they will finally understand the importance of good time management and who am I kidding. They get back to fucking around right away. Great job growing as a person, dumbass.")],H.a([],o),R.ug(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
r=$.z
p="{Quest.PLAYER1} explores their land but is horrified to see all of the turtles [REDACTED]ing. "+r+" probably is making them [REDACTED]. "+r+" is a [REDACTED] piece of shit. Also. Why are there even turtles here? Is it a refrance?"
q=$.o
n=q+" tries to manually separate the turtles by catching them with a net and "+$.cf+". They have mixed results, and "+q+" probably got some reptilian-borne disease. "+q+" tries drugging the water with [REDACTED], this works, but that throws the ecosystem out of balance as the fish aren\u2019t [REDACTED] anymore."
m=q+" manages to fix the fish problem, but is back where they started with the turtles. "+r+" cackles from their giant castle. "+q+" needs to take a break from trying to get turtles to stop [REDACTED]ing."
r=q+" has learned some stuff, and thinks that they can get the turtles to stop by changing the turtle [REDACTED] values in the game\u2019s code. This pisses the "+r+" off and causes this entire strife thing to happen. Bluh."
q=$.K
t.i(0,new R.R("Stop the Turtles from [Redacted]",!1,[new U.c(p),new U.c(n),new U.c(m),new U.a_(r,"These god damned turtles are never going to stop [REDACT]ing.","Okay. FINALLY, the turtles have stopped "+q+"ing. Everything is fine again. Wait. "+q+"ing? Is that what all that [REDACTED] was? I thought.... Nevermind.")],H.a([],o),R.wx(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.A)
q=$.o
t.i(0,new R.Y("Be Spooked By a Wolf",!1,[new U.c("The "+q+" is trapped in an attic. Bullies chased them here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!  Oh god, that Wolf Head is terrifying!"),new U.c("QUITE FRANKLY, your majesty, I don't think you realize what kind of hell the "+q+" been through. Do you have even the SLIGHTEST CLUE how many times that wolf head over there has SCARED THE SHIT OUT OF THEM???"),new U.c("Fuck. The "+q+" is so upset that you don't understand how scary that Spooky Wolf is that they've started babbling about different forms of fictional romance. Welp. Nothing to see here. We better just skip this. ")],H.a([],o),R.y(),!1,!1,new Y.dN("Rewards/no_reward.png",null),1,null,null),$.A)
q="A wizened "+$.t+" explains the rules of some convoluted, boring-ass puzzle to the "
r=$.o
q=q+r+". Wait wait wait, did they just say something about 'no legitimate way to meet "
m=$.z
t.i(0,new R.R("Be The Illegitimate Player",!1,[new U.c(q+m+"'?  Hell FUCKING yes, that means there's some ILLEGITIMATE way. "),new U.c("After way too much obsessive focus, the "+r+" thinks they are onto something. This shitty game is just code, right?  There must be some glitch or exploit or out-right fucking HACK to get to the secret content.  They are gonna meet the FUCK out of "+m+"."),new U.c("Hell FUCKING yes!!! The "+r+" has bugged and fussed and meddled with the code until they are standing in front of "+m+". After solving some bullshit extra bonus Riddle, they gain access to The Hoarde. ")],H.a([],o),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
t.i(0,new R.R("Wear the Merch, Be the Rider",!1,[new U.c("The "+m+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+m+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+m+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+$.z+" is a fan of the "+m+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+m+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.")],H.a([],o),R.y(),!1,!1,new Y.V("Rewards/sweetLoot.png","Rewards/sweetGrist.png",null,"Rewards/no_reward.png",null),1,null,null),$.ai)
m="A wizened "+$.t+" tells the "
r=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Horses",!1,[new U.c(m+r+" that they are going to die. Ironically.   In the proximity of some horses.  The "+r+" shrugs and keeps updating their highly indulgent meta work. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Horses'. The "+r+" wonders if it's like, a metaphor or something?"),new U.c("In a scene predicted by no one, the "+r+" dies. In the proximity of some horses. How ironic, that their very demise would be in the proximity of some horses. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+r+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.L)
r="A "+$.t+" that is also a SHOGUN minion tells the "
m=$.o
t.i(0,new R.a5("Die Ironically, In The Proximity Of Some Pigeons",!1,[new U.c(r+m+" that they are going to die. Ironically.   In the proximity of some pigeons.  The "+m+" shrugs and keeps updating SBURBSim. "),new U.c("Glowing letters, three stories tall,  lit by flame, heavy with the weight of prophecy proclaim 'You Are Going To Die. Ironically.   In the Proximity Of Some Pigeons'. The "+m+" wonders if it's like, a refrance or something they are missing?"),new U.c("In a scene predicted by no one, the "+m+" dies. In the proximity of some pigeons. How ironic, that their very demise would be in the proximity of some pigeons. What? You didn't follow that? Just think it over. Think it over...  Luckily being dead doesn't seem to affect the "+m+"'s narrative importance at all.   Hell, are you sure they weren't dead all along? ")],H.a([],o),R.wy(),!1,!1,new Y.c0("Hey, is that JR?","Whoa, shit, it is. I think that means they should just win? Right?","Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
m=$.o
r="Huh. The "+m+" has figured out how to run simulations of SBURB? What is even the point? Man, it's a fucking Waste. Maybe there IS no point??? "
q="Okay, revised statement: maybe the point of running simulations is to map out all of Paradox Space? Makes way more sense than just having a big black sheet of paper, right? The "+m+" makes a robot doppelganger to go explore areas of Paradox Space that are predicted to have useful features. Huh, looks like it's working!"
m="Welp. Whatever original reason the "+m+" had for finding other sessions has fallen by the wayside. They've gotten completely distracted helping out sessions with no alpha and accidentally dooming the fuck out of everyone when they make a typo in some code.   I thought these were just simulations? Fuck Paradox Space. "
n=this.fy
t.i(0,new R.a5("Run The Simulations",!1,[new U.c(r),new U.c(q),new U.c(m)],H.a([],o),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",n,"Rewards/no_reward.png",null),1,null,null),$.L)
n=$.z
m="The "+n+" explains um. What? Where did the "
q=$.o
t.i(0,new R.bA("Waste the Frogs",!1,[new U.c(m+q+" go?"),new U.c("The "+q+" is sick and tired of being bullied!  If only there was some way they could finally defeat those mean old bullies.   A wizened "+$.t+" tells of a legendary artifact that could-- Wait. No. That's so boring.   The "+q+" decides to update their highly-indulgent meta work instead."),new U.c("Holy shit, did you know you could alchemize MERCHANDISE of your highly indulgent meta work? The "+q+" is just covered in merch now. It's great."),new U.c("Holy fuck! It turns out that the "+n+" is a fan of the "+q+"'s highly indulgent meta work!  They also agreed to be called 'Falcor', because, come ON that was a great movie!  The "+q+" hops up onto Falcor's back and this is the single coolest thing that has ever happened in all of Paradox Space."),new U.c("With a dramatic 'BORF' the bullies are defeated by Falcor! And so came to an end the most heroic thing that ever happened in the history of metafiction. <br><br>Let's move on.  Wait. What? How did THAT somehow breed the Ultimate Frog???")],H.a([],o),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
this.x.i(0,new X.G(s,t,null),$.at)}}
M.po.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Cauldron",H.a([$.vY,$.N,$.a1],s),"Surprisingly literal.",!1,"Bell But For Liquids")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Flying Broom",H.a([$.jg,$.dt,$.N,$.W,$.a1],s),"WHY ARE THERE SO MANY FUCKING BROOMS IN THIS GAME.",!1,"Bell But For Liquids")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Warped Mirror",H.a([$.ts,$.N,$.a1,$.aj,$.Z],s),"I guess Witches warp shit and stuff.",!1,"Mirror from The Shoguns Dresser")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.fy=t},
E:function(){var t,s,r,q,p,o,n,m
t=[P.B]
s=H.a(["Potions","Brews","Cauldrons","Toil","Trouble","Covens","Bubbles","Cackling"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,[N.aa,P.U])
t.i(0,$.c_,$.m)
t.i(0,$.ha,$.m)
t.i(0,$.cZ,$.m)
t.i(0,$.cQ,$.m)
t.i(0,$.cu,$.m)
t.i(0,$.t2,$.m)
r=$.z
q="The "+r+" explains that the frogs have all been turned into handsome "
p=$.t
q=q+p+" consorts. It's up to the "
o=$.o
n=[U.c]
t.i(0,new R.bA("Brew the Frogs",!1,[new U.c(q+o+" to turn each of them back into a slimy, warty frog, whether it's through kisses or potions. "),new U.c("The former "+p+"s hit buttons on the ectobiology machine at random, creating their own ectobiological tadpole children.  The "+o+" just sort of rides out the chaos. "),new U.c("The  "+r+"  reveals that the final frog is on the "+o+"'s destroyed home world. Huh. You guess it's a good thing ectobiological equipment can sample DNA across time and space.    ")],H.a([],n),R.bR(),!1,!1,new Y.bw("Rewards/sweetFrog.png","Rewards/holyShitFrogs.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.ai)
o="Even with the defeat of the "+$.z+", there are still problems. There is flooding in one valley, giant underlings are rampaging in one "
r=$.t
o=o+r+" settlement, and crops refuse to thrive at "
p=$.aH
o=o+p+" Ranch. The "+r+"s seem to have accepted everything as just how things are, but the "
q=$.o
o=o+q+" isn't going to give up until they show the status quo just how 'quo' it isn't!"
m="Alright, it turns out that through a mixture of Alchemy, game powers and pure elbow grease, the "+q+" has managed to make a river flow backwards.   Now instead of flooding, the valley is draining itself.  Progress!"
r="The "+q+" doesn't feel like KILLING the giant underlings rampaging in the "+r+" settlement. What's the fun in that? They try a variety of techniques until the underlings are as calm and friendly as "+r+"s themselves.   Now they are productive members of society! "
p="The "+q+" twists how plants and soil and growth works until the crops at "+p+" Ranch are finally thriving. With that, they have finally kicked the former status quo to the curb!  "
q=this.fy
t.i(0,new R.a5("Twist All The Things",!1,[new U.c(o),new U.c(m),new U.c(r),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",q,"Rewards/no_reward.png",null),1,null,null),$.A)
q="A Mysterious "+$.t+" approaches the "
p=$.o
q=q+p+". Apparently an alchemy recipe for a potion of Ultimate "
r=$.aH
q=q+r+" was discovered amongst the "+$.z+"'s things. Maybe the "+p+" can figure out how to create it? "
m="One potion makes you smaller. One makes you taller. A third doesn't do anything at all. Ugh! Why is it so hard for the "+p+" to get the potion of  Ultimate "+r+" right? "
p="Careful now. Just....one....more drop. THERE.   The "+p+" is now the proud owner of a potion of Ultimate "+r+". They immediately chug it, only for it to manifest a mirror showing the "+p+"'s own face. Oh. God DAMN it. It turns out the  Ultimate "+r+" was the "+p+" all along. They didn't need any silly potions. Worst. Quest. Ever."
r=this.fy
t.i(0,new R.a5("Brew The Potion",!1,[new U.c(q),new U.c(m),new U.c(p)],H.a([],n),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",r,"Rewards/no_reward.png",null),1,null,null),$.A)
r=$.t
p="A young "+r+" approaches the "
m=$.o
p=p+m+". They wish to learn how to be magical, too!  The "+m+" dubs them the "
q=$.aH
t.i(0,new R.a5("Train the Apprentice",!1,[new U.c(p+q+"mancer and agrees to train them. "),new U.c("The "+m+" has barely begun to train the "+q+"mancer, but needs to head into town to fetch a few ingredients.   The "+q+"mancer promises to be good, and IMMEDIATELY starts fucking shit up on accident with magic. Oh god, why are all those "+$.ae+"s suddenly alive?  When the "+m+" returns, they use this as an opportunity to teach the "+q+"mancer a valuable moral. "),new U.c("The "+q+"mancer is ready to show off their power to the other "+r+"s. They "+$.K+" in amazement to see the things the "+q+"mancer can do! The "+m+" was a good mentor.  ")],H.a([],n),R.y(),!1,!1,new Y.ac("Rewards/no_reward.png",null),1,null,null),$.A)
this.x.i(0,new X.G(s,t,null),$.bL)}}
U.pp.prototype={
P:function(a5,a6){var t=0,s=P.bp(),r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$P=P.bu(function(a7,a8){if(a7===1)return P.br(a8,s)
while(true)$async$outer:switch(t){case 0:q={}
p=J.dW(a6,$.$get$x1())
if(0>=p.length){r=H.v(p,0)
t=1
break}if(J.yc(p[0])!=="TextEngine Word List"){if(0>=p.length){r=H.v(p,0)
t=1
break}throw H.k("Invalid WordList file header: '"+H.x(p[0])+"'")}o=P.B
n=H.a([],[o])
m=P.bX(o,B.eA)
q.a=null
l=P.bX(o,o)
for(k=P.U,j=B.cV,i=0,h=null;++i,i<p.length;){g=p[i]
f=$.$get$cG()
""+i
H.x(g)
f.toString
f=J.dW(g,$.$get$x_())
if(0>=f.length){r=H.v(f,0)
t=1
break $async$outer}g=f[0]
f=J.b0(g)
if(f.gX(g)===!0){$.$get$cG().toString
continue}if(f.af(g,$.$get$x0())){$.$get$cG().toString
continue}if(C.c.af(g,"@")){e=C.c.ag(g,1)
$.$get$cG().toString
n.push(e)}else if(C.c.af(g,"?")){f=C.c.ag(g,1)
f=$.$get$hN().aP(0,f)
f=H.df(f,B.i4(),H.ar(f,"n",0),null)
d=P.d1(f,!0,H.ar(f,"n",0))
if(d.length<2)$.$get$cG().b1(C.h,"Invalid global default '"+g+"'")
else{c=d[0]
b=d[1]
f=$.$get$cG()
H.x(c)
H.x(b)
f.toString
l.i(0,c,b)}}else{f=$.$get$x2()
a=f.cj(g,0)
if(a!=null){f=a.b
if(1>=f.length){r=H.v(f,1)
t=1
break $async$outer}a0=J.bZ(f[1])
a1=C.c.ag(g,a0)
if(a1.length===0)continue
f=J.aq(a0)
if(f.R(a0,0)){a1=C.c.eq(a1)
$.$get$cG().toString
f=P.bX(o,o)
a2=new B.eA(P.bX(o,k),f,a1,!1,null,null)
a2.c9(null,null,j)
q.a=a2
f.bn(0,l)
m.i(0,a1,q.a)}else if(f.R(a0,$.x3))if(C.c.af(a1,"?")){a1=C.c.ag(a1,1)
f=$.$get$hN().aP(0,a1)
f=H.df(f,B.i4(),H.ar(f,"n",0),null)
d=P.d1(f,!0,H.ar(f,"n",0))
f=$.$get$cG()
f.toString
if(d.length<2)f.b1(C.h,"Invalid list default '"+g+"'")
else if(q.a!=null){c=J.ki(d[0],$.$get$fo(),"")
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}b=J.ki(d[1],$.$get$fo(),"")
f=$.$get$cG()
H.x(q.a.e)
f.toString
q.a.d.i(0,c,b)}}else if(C.c.af(a1,"@")){e=C.c.ag(a1,1)
$.$get$cG().toString
f=$.$get$hN().aP(0,a1)
f=H.df(f,B.i4(),H.ar(f,"n",0),null)
d=P.d1(f,!0,H.ar(f,"n",0))
a3=d.length>1?H.wu(d[1],new U.pq(q,d)):1
q.a.c.i(0,C.c.cU(e,$.$get$fo(),""),a3)}else{$.$get$cG().toString
f=$.$get$hN().aP(0,g)
f=H.df(f,B.i4(),H.ar(f,"n",0),null)
d=P.d1(f,!0,H.ar(f,"n",0))
a3=d.length>1?H.wu(d[1],new U.pr(q,d)):1
if(0>=d.length){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bi(J.ki(d[0],$.$get$fo(),""))
h=new B.cV(null)
a4=P.bX(o,o)
h.a=a4
a4.i(0,"MAIN",f)
f=q.a
C.b.h(f.b,new Q.h(h,f.k(h,J.rE(a3)),[H.ar(f,"cw",0)]))}else if(f.R(a0,$.x3*2)){$.$get$cG().toString
f=$.$get$hN().aP(0,g)
f=H.df(f,B.i4(),H.ar(f,"n",0),null)
d=P.d1(f,!0,H.ar(f,"n",0))
f=d.length
if(f!==2)$.$get$cG().b1(C.h,"Invalid variant for "+H.x(h.bj(0))+" in "+H.x(q.a.e))
else{if(0>=f){r=H.v(d,0)
t=1
break $async$outer}f=C.c.bi(J.ki(d[0],$.$get$fo(),""))
if(1>=d.length){r=H.v(d,1)
t=1
break $async$outer}a4=C.c.cU(U.FU(d[1]),$.$get$fo(),"")
h.a.i(0,f,a4)}}}}}r=new B.hT(n,m)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asev:function(){return[B.hT]},
$asc6:function(){return[B.hT,P.B]}}
U.pq.prototype={
$1:function(a){var t,s,r
t=$.$get$cG()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid include weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.b1(C.i,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
U.pr.prototype={
$1:function(a){var t,s,r
t=$.$get$cG()
s=this.b
if(1>=s.length)return H.v(s,1)
r="Invalid weight '"+H.x(s[1])+"' for word '"
if(0>=s.length)return H.v(s,0)
t.b1(C.i,r+H.x(s[0])+"' in list '"+H.x(this.a.a.e)+"', using 1.0")
return 1},
$S:function(){return{func:1,args:[P.B]}}}
F.pt.prototype={
D:function(){var t,s,r,q
t=Q.I(null,null,A.a4)
s=[G.a0]
r=A.i("Make a World Book",H.a([$.J,$.ah,$.aw],s),"World building is p okay, I guess.",!1,"World Building for Dumbasses")
q=[H.P(t,0)]
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Quill Pen",H.a([$.aY,$.O,$.ml],s),null,!1,"Dead Bird Scribing Tool")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Book On Writing",H.a([$.aw,$.J,$.X],s),null,!1,"How to do words for unsmarts")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("FLARP Manual",H.a([$.aw,$.J,$.X],s),"That Cat Troll doesn't do this. So I guess it's okay.",!1,"Natural Selection for Nerds The Book")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Script",H.a([$.aw,$.J],s),null,!1,"Death of JR, a screenplay by The Shogun")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Fancy Pen",H.a([$.D,$.X,$.ml,$.ah],s),null,!1,"Ink Bleeding Plastic Finger")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
r=A.i("Spiral Bound Notebook",H.a([$.aw,$.J,$.D],s),null,!1,"Spinney Spine Scribing Station")
C.b.h(t.b,new Q.h(r,t.k(r,C.a.l(1)),q))
s=A.i("Half Written Novel",H.a([$.aw,$.J],s),"I'm sure you'll finish it any day now.",!1,"The Shoguns Magnum Opus")
C.b.h(t.b,new Q.h(s,t.k(s,C.a.l(1)),q))
this.y=t},
E:function(){var t,s,r,q,p,o,n,m,l
t=[P.B]
s=H.a(["Books","Shelves","Libraries","Tomes","Fiction","Pages","Words"],t)
H.a([],t)
r=[N.aa,P.U]
q=new H.w(0,null,null,null,null,null,0,r)
q.i(0,$.dJ,$.j)
q.i(0,$.cA,$.j)
q.i(0,$.b1,$.m)
q.i(0,$.aN,$.m)
q.i(0,$.h7,$.m)
p=$.o
o="The "+p+" finds a massive library, and all the books are in disarray! Who could have done this? As they begin trying to help straighten up, the Librarian "+$.t+" explains that a gang of unruly underlings have been vandalizing local libraries.  The "+p+" vows to stop their reign of terror. "
n="The "+p+" finds yet another vandalized Library. This time, the trail is still warm. They track the unruly underlings to a nearby Dungeon. Now they just have to plan their attack.   "
p=" The "+p+" lies in wait at the Dungeon entrance. Before long, the unruly underlings emerge, no doubt in preparation to vandalize yet another Library.  Instead, they get a serving of Justice.  The local libraries are safe!"
m=this.y
l=[U.c]
q.i(0,new R.Y("Stop the Vandals",!1,[new U.c(o),new U.c(n),new U.c(p)],H.a([],l),R.y(),!1,!1,new Y.bD("Rewards/sweetTreasure.png",m,"Rewards/no_reward.png",null),1,null,null),$.A)
m=this.r
m.i(0,new X.G(s,q,null),$.aC)
q=H.a(["Fan Fiction","Fics","Fandom","Mary Sues","Tumblers"],t)
H.a([],t)
s=new H.w(0,null,null,null,null,null,0,r)
s.i(0,$.dI,$.m)
s.i(0,$.cy,$.m)
s.i(0,$.cv,$.m)
s.i(0,$.b1,$.m)
p=$.t
o="An Excited "+p+" rushes up to the "
n=$.o
s.i(0,new R.Y("Read the Fan Fiction",!1,[new U.c(o+n+". They have been writing fan fiction about the Players for their whole life and want to get feedback on it. Is it accurate?  The "+n+" does their best to keep a straight face, but the fic is...wow.  Why do they have the players "+$.K+"ing so much? "),new U.c("Okay.  The Excited "+p+" has a new version for the "+n+" to review. This time they at least aren't obviously "+p+"s, but the characterization is completely off. You can't even imagine THOSE two getting together.  Feedback round two. "),new U.c(" The "+n+" reads the final version of the Excited "+p+"'s fan fiction.  Huh. This is....wow! It's even better than reality!  The Excited Consort ends up making crazy amount of boonies from selling the series, and gives the "+n+" a gift as thanks! ")],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(q,s,null),$.aC)
s=H.a(["Dungeons","Dragons","Authors","Control","Storytelling","Scripts"],t)
H.a([],t)
t=new H.w(0,null,null,null,null,null,0,r)
t.i(0,$.cy,$.m)
t.i(0,$.dH,$.j)
t.i(0,$.cv,$.j)
t.i(0,$.dI,$.m)
t.i(0,$.dq,$.j)
r=$.o
q="The "+r+" finds a strange minature dungeon, filled with four small ragdolls of Adventurer "
p=$.t
t.i(0,new R.Y("Be the DM",!1,[new U.c(q+p+"s. A placard proclaims 'Be the DM, it is You.'. Huh. The "+r+" is interested, and weaves an elaborate tale full of intrigue and danger, before dramatically injuring one of the Adventurer "+p+"s right before the end. As they finish their story, a nearby dungeon opens up and three "+p+"s stumble out, dragging a fourth.  Oh. Shit. The dungeon flashes 'You did this.'"),new U.c("The "+r+" finds another minature dungeon. Oh HELL no, they are not going to repeat this shit. They have no interest in playing god, thank you very much.  The nearby regular size dungeon flashes 'Are you Sure? Y/N', and the "+r+" quickly selects 'Y'.  The dungeon immediately collapses, presumably killing any Adventurer "+p+"s who were trapped inside. Holy fuck. What is WRONG with this game?  "),new U.c(" The "+r+" finds yet another minature dungeon. Fuck. Okay. They can't opt out, or the Adventurers have rocks fall on them and die. But they aren't going to make it tragic again. No way. They tell a....serviceable story in which the Adventuring "+p+"s walk through a dungeon with insultingly easy puzzles and then are allowed to leave. The nearby dungeon opens up and four confused Adventurer "+p+"s wander out. 'Wow, that was really unsatisfying!' one remarks. The dungeon flashes 'Boring. Try Again Later.' "),new U.c("The "+r+" finds what is hopefully the last minature dungeon. They resign themselves to making the most interesting story possible WITHOUT fucking over the characters in it. They weave an elaborate story with twists and turns and close calls. At the end of it, the 4 Adventuring "+p+"s walk out of the dungeon laughing and talking about their adventure. The dungeon flashes 'Good Job!', and deploys positive reinforcment. Quest chain: complete! ")],H.a([],l),R.y(),!1,!1,new Y.cY("Rewards/sweetBoonies.png",null,null,"Rewards/sweetLoot.png","Rewards/fraymotifBG.png","Rewards/no_reward.png",null),1,null,null),$.A)
m.i(0,new X.G(s,t,null),$.aC)}}
B.py.prototype={
aR:function(a){return"application/x-tar"},
P:function(a,b){var t=0,s=P.bp(),r,q,p
var $async$P=P.bu(function(c,d){if(c===1)return P.br(d,s)
while(true)switch(t){case 0:q=$.$get$x4()
p=J.uV(b)
q.toString
r=q.h1(T.te(p,0,null,0),!1)
t=1
break
case 1:return P.bs(r,s)}})
return P.bt($async$P,s)},
$asdm:function(){return[T.fF]},
$asc6:function(){return[T.fF,P.bg]}}
A.fN.prototype={}
B.dn.prototype={
cB:function(a){if(a)this.b=(this.b|C.a.aq(1,this.c))>>>0
if(++this.c>=8){this.c=0
this.a.N+=H.hC(this.b)
this.b=0}},
ah:function(a,b){var t,s
for(t=0;t<b;++t){s=C.a.aq(1,t)
if(typeof a!=="number")return a.aJ()
this.cB((a&s)>>>0>0)}},
fP:function(a,b){var t,s,r
for(t=b-1,s=0;s<b;++s){r=C.a.av(1,t-s)
if(typeof a!=="number")return a.aJ()
this.cB((a&r)>>>0>0)}},
bR:function(a){var t,s
a=J.e6(a,1)
t=C.d.d7(Math.log(H.kb(a)),0.6931471805599453)
for(s=0;s<t;++s)this.cB(!1)
this.fP(a,t+1)},
b4:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=this.a
r=s.N
q=t>0?r.length+1:r.length
t=a!=null
if(t){r=a.byteLength
if(typeof r!=="number")return H.a7(r)
q+=r
p=r}else p=0
r=H.cx(q)
o=new Uint8Array(r)
if(t){n=H.cM(a,0,null)
for(t=n.length,m=0;m<t;++m){l=n[m]
if(m>=r)return H.v(o,m)
o[m]=l}}t=s.N
k=t.charCodeAt(0)==0?t:t
for(t=k.length,m=0;m<t;++m){s=m+p
l=C.c.a2(k,m)
if(s<0||s>=r)return H.v(o,s)
o[s]=l}if(this.c>0){t+=p
s=this.b
if(t<0||t>=r)return H.v(o,t)
o[t]=s}return o.buffer}}
B.dc.prototype={
cq:function(a){var t,s,r,q
t=C.f.ak(a/8)
s=C.a.bF(a,8)
r=this.a.getUint8(t)
q=C.a.av(1,s)
if(typeof r!=="number")return r.aJ()
return(r&q)>>>0>0},
a5:function(a){var t,s,r
if(a>32)throw H.k(P.dB(a,"bitcount may not exceed 32",null))
for(t=0,s=0;s<a;++s){r=this.cq(this.b);++this.b
if(r)t=(t|C.a.aq(1,s))>>>0}return t},
hM:function(a){var t,s,r,q
if(a>32)throw H.k(P.dB(a,"bitcount may not exceed 32",null))
for(t=a-1,s=0,r=0;r<a;++r){q=this.cq(this.b);++this.b
if(q)s=(s|C.a.av(1,t-r))>>>0}return s},
c0:function(){var t,s,r
for(t=0;!0;){s=this.cq(this.b)
r=++this.b
if(s){this.b=r-1
break}else ++t}return this.hM(t+1)-1}}
A.dE.prototype={
A:function(a){return"rgb("+H.x(this.b)+", "+H.x(this.c)+", "+H.x(this.d)+", "+H.x(this.a)+")"},
hW:function(a){var t,s,r,q
t=this.b
if(typeof t!=="number")return t.av()
s=this.c
if(typeof s!=="number")return s.av()
r=this.d
if(typeof r!=="number")return r.av()
q=this.a
if(typeof q!=="number")return H.a7(q)
return(t<<24|s<<16|r<<8|q)>>>0},
R:function(a,b){var t,s
if(b==null)return!1
if(b instanceof A.dE){t=this.b
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
ga3:function(a){return this.hW(!0)},
V:function(a,b){var t,s,r,q,p,o,n,m
t=J.aq(b)
if(!!t.$isdE){t=this.b
s=b.b
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.a7(s)
r=this.c
q=b.c
if(typeof r!=="number")return r.V()
if(typeof q!=="number")return H.a7(q)
p=this.d
o=b.d
if(typeof p!=="number")return p.V()
if(typeof o!=="number")return H.a7(o)
n=this.a
m=b.a
if(typeof n!=="number")return n.V()
if(typeof m!=="number")return H.a7(m)
return A.fQ(t+s,r+q,p+o,n+m)}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.al()
s=this.c
if(typeof s!=="number")return s.al()
r=this.d
if(typeof r!=="number")return r.al()
q=this.a
if(typeof q!=="number")return q.al()
return A.rN(t/255+b,s/255+b,r/255+b,q/255)}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
if(typeof t!=="number")return t.V()
s=this.c
if(typeof s!=="number")return s.V()
r=this.d
if(typeof r!=="number")return r.V()
return A.fQ(t+b,s+b,r+b,this.a)}throw H.k("Cannot add ["+H.x(t.ga8(b))+" "+H.x(b)+"] to a Colour. Only Colour, double and int are valid.")},
at:function(a,b){var t,s,r,q,p,o,n,m
t=J.aq(b)
if(!!t.$isdE){t=this.b
if(typeof t!=="number")return t.al()
s=b.b
if(typeof s!=="number")return s.al()
r=this.c
if(typeof r!=="number")return r.al()
q=b.c
if(typeof q!=="number")return q.al()
p=this.d
if(typeof p!=="number")return p.al()
o=b.d
if(typeof o!=="number")return o.al()
n=this.a
if(typeof n!=="number")return n.al()
m=b.a
if(typeof m!=="number")return m.al()
return A.rN(t/255*(s/255),r/255*(q/255),p/255*(o/255),n/255*(m/255))}else if(typeof b==="number"){t=this.b
if(typeof t!=="number")return t.al()
s=this.c
if(typeof s!=="number")return s.al()
r=this.d
if(typeof r!=="number")return r.al()
q=this.a
if(typeof q!=="number")return q.al()
return A.rN(t/255*b,s/255*b,r/255*b,q/255)}throw H.k("Cannot multiply a Colour by ["+H.x(t.ga8(b))+" "+H.x(b)+"]. Only Colour, double and int are valid.")},
n:function(a,b){if(b===0)return this.b
if(b===1)return this.c
if(b===2)return this.d
if(b===3)return this.a
throw H.k("Colour index out of range: "+H.x(b))},
i:function(a,b,c){var t,s
t=J.dx(b)
if(t.a1(b,0)||t.aF(b,3))throw H.k("Colour index out of range: "+H.x(b))
if(typeof c==="number"&&Math.floor(c)===c)if(t.R(b,0)){this.b=C.a.a9(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.a9(c,0,255)
this.e=!0
this.y=!0}else if(t.R(b,2)){this.d=C.a.a9(c,0,255)
this.e=!0
this.y=!0}else this.a=C.a.a9(c,0,255)
else if(t.R(b,0)){this.b=C.a.a9(J.kh(J.ry(c,255)),0,255)
this.e=!0
this.y=!0}else if(t.R(b,1)){this.c=C.a.a9(J.kh(J.ry(c,255)),0,255)
this.e=!0
this.y=!0}else{s=J.kc(c)
if(t.R(b,2)){this.d=C.a.a9(J.kh(s.at(c,255)),0,255)
this.e=!0
this.y=!0}else this.a=C.a.a9(J.kh(s.at(c,255)),0,255)}},
eP:function(a,b,c,d){this.b=C.d.a9(C.d.a9(a,0,255),0,255)
this.e=!0
this.y=!0
this.c=C.d.a9(C.d.a9(b,0,255),0,255)
this.e=!0
this.y=!0
this.d=C.d.a9(C.d.a9(c,0,255),0,255)
this.e=!0
this.y=!0
this.a=C.d.a9(J.rz(d,0,255),0,255)}}
A.r6.prototype={
$1:function(a){return 0},
$S:function(){return{func:1,args:[P.B]}}}
A.mP.prototype={
$1:function(a){return this.a.ei(a)},
$S:function(){return{func:1,args:[,]}}}
A.mN.prototype={
$1:function(a){this.a.P(0,a).b3(this.b.ghH())},
$S:function(){return{func:1,args:[,]}}}
A.mO.prototype={
$1:function(a){this.a.fW(0)},
$S:function(){return{func:1,args:[P.p]}}}
A.mQ.prototype={
$1:function(a){return this.a.aB(0,this.b)},
$S:function(){return{func:1,args:[W.Q]}}}
F.hq.prototype={
A:function(a){return this.b}}
F.fc.prototype={
b1:function(a,b){F.EI(a).$1("("+this.c+")["+H.x(C.b.gbb(a.b.split(".")))+"]: "+H.x(b))},
cH:function(a,b){this.b1(C.h,b)},
bW:function(a){},
gG:function(a){return this.c}}
F.tO.prototype={}
O.rs.prototype={
$1:function(a){return H.x(a.aU(1))+" = "+H.x(a.aU(2))+C.c.at("../",this.a)},
$S:function(){return{func:1,args:[P.d2]}}}
O.rt.prototype={
$0:function(){var t=document
J.v_(t.querySelector("#story"),"beforeend","<button id = 'voidButton'>Peer into Void, Y/N?</a><div class='void'>Well, NOW you've certainly gone and done it. You can expect to see any Void Player shenanignans now. If there are any.",C.t,null)
t=H.eI(t.querySelector("#voidButton"),"$iseP")
t.toString
W.e5(t,"click",new O.rr(),!1,W.u_)
window.alert("If you gaze long into an abyss, the abyss also gazes into you.  - Troll Bruce Willis")
O.eJ("N4Igzg9grgTgxgUxALhAVTAgJgAgMoIIwDyAZgGoQCWuIANCAHYCGAtkqgHJG7FQAuOAOpV+ACxwAlPPRD8EAD34oQEAO6MiCFuxg4A5swBeCMDiqN+EHOIQ4AbtVzNGuADYJmMRmdYQYdmBiogCEsgBGzHAA1vow0K6cbBwgACwADKkADsz6COEIcMxQmIVwYgB0WYz6svwwVPp5MADCYi6IKukVAKyyYIiaYAAqEGiMbhAxKgDaALqyAWBQbvxgePzMa7PAADpMyfvI+wBCkgCCAJKcl8NoACIAovt0+-bMblAIR-s9+wC+dBwewO7B+IAA4pxiHhLngXm8Pl9wQBGAELBj1RrNDZbMAAGVMmBgswxcgaTSIuLWEICWyIpLqFJxmzWjwAjlAPoz-kA")},
$S:function(){return{func:1}}}
O.rr.prototype={
$1:function(a){return O.Hh()},
$S:function(){return{func:1,args:[W.Q]}}}
R.hb.prototype={}
R.u6.prototype={}
R.u5.prototype={}
A.nr.prototype={
n:function(a,b){var t
if(typeof b==="string"){t=this.a
return t.U(0,b)?t.n(0,b):$.$get$u4()}else if(typeof b==="number"&&Math.floor(b)===b){t=this.b
return t.U(0,b)?t.n(0,b):$.$get$u4()}throw H.k(P.dB(b,"'name' should be a String name or int id only",null))},
gS:function(a){var t=this.a
t=t.gc4(t)
return new H.jq(null,J.cP(t.a),t.b,[H.P(t,0),H.P(t,1)])},
j:function(a,b,c,d){var t,s
t=this.a
if(t.U(0,b))this.ae(0,b)
s=this.fw()
if(typeof s!=="number")return s.au()
if(s>=256)throw H.k(P.dB(s,"Palette colour ids must be in the range 0-255",null))
t.i(0,b,c)
this.b.i(0,s,c)
this.c.i(0,b,s)
this.d.i(0,s,b)},
ae:function(a,b){var t,s,r
t=this.a
if(!t.U(0,b))return
s=this.c
r=s.n(0,b)
t.ae(0,b)
this.b.ae(0,r)
s.ae(0,b)
this.d.ae(0,r)},
fw:function(){var t,s
for(t=this.b,s=0;!0;){if(!t.U(0,s))return s;++s}}}
A.jy.prototype={
$asn:function(){return[A.dE]},
$isn:1}
Q.jA.prototype={}
A.hE.prototype={
bx:function(a){if(a===0)return 0
return this.fz(a)},
hy:function(){return this.bx(4294967295)},
fz:function(a){var t,s
t=this.a
if(a>4294967295){s=t.c_()
this.b=C.d.bz(s*4294967295)
return C.d.ak(s*a)}else{s=t.bx(a)
this.b=s
return s}},
c7:function(a){var t=a==null
this.a=t?C.K:P.G7(a)
if(!t)this.b=J.e6(a,1)},
hF:function(a,b){var t=J.b0(a)
if(t.gX(a))return
if(!!t.$iscw)return t.as(a,this.a.c_())
return t.T(a,this.bx(t.gm(a)))},
eh:function(a){return this.hF(a,!0)}}
Y.dM.prototype={
cz:function(a){var t,s
if(this.b!=null)throw H.k("Attempting to add listener after resource population: "+this.a)
t=this.$ti
s=new P.bj(0,$.am,null,t)
this.c.push(new P.dT(s,t))
return s},
ei:function(a){var t,s,r
if(this.b!=null)throw H.k("Resource ("+this.a+") already loaded")
this.b=a
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.bT)(t),++r)t[r].aB(0,this.b)
C.b.sm(t,0)}}
V.lf.prototype={
$4:function(a,b,c,d){return V.z_(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bg,P.bg,O.cS]}}}
V.le.prototype={
$4:function(a,b,c,d){return V.yZ(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.C,P.C,O.cS]}}}
V.ld.prototype={
$4:function(a,b,c,d){return V.yW(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.C,P.bg,P.bg,O.cS]}}}
V.lc.prototype={
$4:function(a,b,c,d){return V.yV(a,b,c,d,this.a)},
$S:function(){return{func:1,args:[P.bg,P.C,P.C,O.cS]}}}
O.cS.prototype={
hN:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.a
s=this.b
for(r=this.x,q=r.length,p=s,o=t,n=-1,m=-1,l=null,k=0;k<t;++k)for(j=0;j<s;++j){l=j*t+k
if(l>=q)return H.v(r,l)
if(r[l]!==0){if(k<o)o=k
else if(k>n)n=k
if(j<p)p=j
else if(j>m)m=j}}i=Math.max(0,n-o+1)
h=Math.max(0,m-p+1)
this.c=o
this.d=p
this.e=i
this.f=h},
i0:function(a,b,c,d){var t,s,r,q,p
t=J.aR(d)
s=0
while(!0){r=t.gea(d)
if(typeof r!=="number")return H.a7(r)
if(!(s<r))break
q=(C.a.d7(s,c)+b)*this.a+(s%c+a)
r=this.x
p=t.n(d,s)
if(q>=r.length)return H.v(r,q)
r[q]=p;++s}}}
D.of.prototype={
$1:function(a){return a.ghG()},
$S:function(){return{func:1,args:[D.cE]}}}
D.cE.prototype={
A:function(a){return this.a},
gG:function(a){return this.a},
ghG:function(){return this.d}}
D.jS.prototype={}
D.nO.prototype={}
B.oM.prototype={
hE:function(a,b){var t
if(!this.d)this.hL()
t=this.dr(a)
if(t==null){$.$get$fp().bW("Root list '"+a+"' not found")
return"["+a+"]"}return this.dG(J.y2(t,b),P.bX(P.B,B.cV))},
hD:function(a){return this.hE(a,null)},
bg:function(a){var t=0,s=P.bp(),r,q=this,p,o,n,m
var $async$bg=P.bu(function(b,c){if(b===1)return P.br(c,s)
while(true)switch(t){case 0:p=q.a
if(p.aa(0,a)){p=$.$get$fp()
H.x(a)
p.toString
t=1
break}p.h(0,a)
t=3
return P.cs(A.e0("wordlists/"+H.x(a)+".words",!1,!1,null),$async$bg)
case 3:o=c
q.b.bn(0,o.ghu())
p=o.a,n=p.length,m=0
case 4:if(!(m<p.length)){t=6
break}t=7
return P.cs(q.bg(p[m]),$async$bg)
case 7:case 5:p.length===n||(0,H.bT)(p),++m
t=4
break
case 6:q.d=!1
case 1:return P.bs(r,s)}})
return P.bt($async$bg,s)},
hL:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
$.$get$fp().bW("Processing word lists")
this.d=!0
t=this.c
t.b9(0)
for(s=this.b,r=s.gaC(s),r=r.gS(r);r.F();){q=r.gL()
p=B.FV(s.n(0,q))
t.i(0,q,p)
for(o=p.d,n=o.gaC(o),n=n.gS(n),m=[H.ar(p,"aM",0)];n.F();){l=n.gL()
for(k=new H.dL(p,p.gm(p),0,null,m);k.F();){j=k.d
if(!j.gbP().U(0,l)){i=o.n(0,l)
j.a.i(0,l,i)}}}}for(s=t.gaC(t),s=s.gS(s);s.F();){p=t.n(0,s.gL())
p.hK(t)
for(r=new H.dL(p,p.gm(p),0,null,[H.ar(p,"aM",0)]),o=p.d;r.F();){h=r.d
for(n=o.gaC(o),n=n.gS(n);n.F();){l=n.gL()
if(!h.gbP().U(0,l))h.a.i(0,l,o.n(0,l))}for(n=h.gbP(),n=n.gaC(n),n=n.gS(n);n.F();){g=n.gL()
m=h.a
m.i(0,g,J.rD(m.n(0,g),$.$get$wH(),new B.oO(h)))}}}},
dr:function(a){var t,s
t=this.c
if(!t.U(0,a)){$.$get$fp().bW("List '"+H.x(a)+"' not found")
return}s=t.n(0,a)
return this.e.eh(s)},
dG:function(a,b){return J.rD(a,$.$get$wG(),new B.oN(this,b))}}
B.oO.prototype={
$1:function(a){var t,s
t=a.aU(1)
s=this.a
if(!s.a.U(0,t))return"["+H.x(t)+"]"
return s.a.n(0,t)},
$S:function(){return{func:1,args:[P.d2]}}}
B.oN.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=a.aU(1)
s=$.$get$wI().aP(0,t)
s=H.df(s,B.i4(),H.ar(s,"n",0),null)
r=P.d1(s,!0,H.ar(s,"n",0))
if(0>=r.length)return H.v(r,0)
q=J.dW(r[0],"@")
s=q.length
p=s>1?q[1]:null
o=this.a
if(0>=s)return H.v(q,0)
n=o.dr(q[0])
s=r.length
if(s>1){for(s=this.b,m=n,l=1;k=r.length,l<k;++l){q=J.dW(r[l],"@")
if(0>=q.length)return H.v(q,0)
if(J.b_(q[0],"var")){if(q.length<2)continue
j=q[1]
if(s.U(0,j))m=s.n(0,j)
else s.i(0,j,m)}}s=k}else m=n
if(m==null){if(0>=s)return H.v(r,0)
return"["+H.x(r[0])+"]"}s=J.aR(m)
i=s.as(m,p)
if(i==null){$.$get$fp().bW("Missing variant '"+H.x(p)+"' for word '"+H.x(m)+"', falling back to base")
i=s.bj(m)}return o.dG(i,this.b)},
$S:function(){return{func:1,args:[P.d2]}}}
B.cV.prototype={
as:function(a,b){if(b==null)b="MAIN"
if(this.a.U(0,b))return this.a.n(0,b)
return},
bj:function(a){return this.as(a,null)},
A:function(a){return"[Word: "+H.x(this.bj(0))+"]"},
gbP:function(){return this.a}}
B.eA.prototype={
A:function(a){return"WordList '"+H.x(this.e)+"': "+this.eM(0)},
ej:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
if(this.f)return
this.f=!0
b=P.a3(null,null,null,B.eA)
b.h(0,this)
for(t=this.c,s=t.gaC(t),s=s.gS(s),r=this.e;s.F();){q=s.gL()
if(a.U(0,q)){p=a.n(0,q)
if(b.aa(0,p)){$.$get$fp().b1(C.i,"Include loop detected in list '"+H.x(r)+"', already visited '"+H.x(p.e)+"', ignoring")
continue}p.ej(a,b)}}for(s=t.gaC(t),s=s.gS(s),r=[H.ar(this,"cw",0)];s.F();){q=s.gL()
if(!a.U(0,q))continue
for(o=a.n(0,q).b,n=o.length,m=0;m<o.length;o.length===n||(0,H.bT)(o),++m){l=o[m]
k=J.aR(l)
j=k.gW(l)
k=J.ry(k.gb6(l),t.n(0,q))
C.b.h(this.b,new Q.h(j,this.k(j,J.rE(k)),r))}}},
hK:function(a){return this.ej(a,null)},
$isp:1,
$asp:function(){return[B.cV]},
$asdS:function(){return[B.cV]},
$ashR:function(){return[B.cV]},
$ascw:function(){return[B.cV]},
$asn:function(){return[B.cV]},
$asr:function(){return[B.cV]},
gcK:function(){return this.c},
gh2:function(){return this.d},
gG:function(a){return this.e}}
B.hT.prototype={
A:function(a){return"[WordListFile: "+this.b.A(0)+" ]"},
gcK:function(){return this.a},
ghu:function(){return this.b}}
S.fh.prototype={}
S.uy.prototype={}
S.uz.prototype={}
S.uA.prototype={}
S.rW.prototype={}
S.rZ.prototype={}
S.rM.prototype={}
S.uh.prototype={}
S.uC.prototype={}
S.uD.prototype={}
S.kG.prototype={}
S.u9.prototype={}
S.u3.prototype={}
S.mG.prototype={}
S.rR.prototype={}
S.rH.prototype={}
S.kZ.prototype={}
S.tP.prototype={}
S.l_.prototype={}
S.nt.prototype={}
S.uo.prototype={}
S.ul.prototype={}
S.up.prototype={}
S.rG.prototype={}
S.lW.prototype={}
S.kE.prototype={}
S.rL.prototype={}
S.rK.prototype={}
S.ua.prototype={}
S.uq.prototype={}
S.ub.prototype={}
S.rY.prototype={}
S.rX.prototype={}
S.un.prototype={}
S.um.prototype={}
S.oT.prototype={}
S.ut.prototype={}
S.rO.prototype={}
S.rP.prototype={}
S.uB.prototype={}
S.hs.prototype={}
S.tV.prototype={}
S.tW.prototype={}
S.tX.prototype={}
S.tY.prototype={}
S.ui.prototype={}
S.uj.prototype={}
S.uk.prototype={}
S.tU.prototype={}
S.u0.prototype={}
S.u1.prototype={}
S.tb.prototype={}
S.tc.prototype={}
S.td.prototype={}
S.u2.prototype={}
S.tZ.prototype={}
S.rI.prototype={}
S.uv.prototype={}
S.uw.prototype={}
S.uu.prototype={}
Z.tJ.prototype={}
Z.tF.prototype={}
Z.tG.prototype={}
Q.cw.prototype={
as:function(a,b){var t,s,r,q,p,o,n
t=this.cZ()
s=J.rz(b,0,1)*t
for(r=J.cP(this.gbh()),q=0;r.F();){p=r.gL()
o=J.aR(p)
n=o.gb6(p)
if(typeof n!=="number")return H.a7(n)
q+=n
if(s<=q)return o.gW(p)}return},
cZ:function(){var t,s,r
for(t=J.cP(this.gbh()),s=0;t.F();){r=J.y0(t.gL())
if(typeof r!=="number")return H.a7(r)
s+=r}return s},
k:function(a,b){return b},
A:function(a){return J.cH(this.gbh())},
ax:function(a,b){return Q.uF(this,b,H.ar(this,"cw",0),null)},
a0:function(a,b){return Q.uE(this,!1,!0,null,H.ar(this,"cw",0))},
ap:function(a){return this.a0(a,!0)},
$isn:1,
$asn:null}
Q.dS.prototype={
as:function(a,b){var t,s,r,q,p,o,n,m,l
t=this.cZ()
s=J.rz(b,0,1)*t
for(r=this.b,q=r.length,p=0,o=0;o<r.length;r.length===q||(0,H.bT)(r),++o){n=r[o]
m=J.aR(n)
l=m.gb6(n)
if(typeof l!=="number")return H.a7(l)
p+=l
if(s<=p)return m.gW(n)}return},
gbh:function(){return this.b},
bQ:function(a,b,c){C.b.h(this.b,new Q.h(b,this.k(b,J.rE(c)),[H.ar(this,"cw",0)]))},
h:function(a,b){return this.bQ(a,b,1)},
n:function(a,b){var t=this.b
if(b>>>0!==b||b>=t.length)return H.v(t,b)
return J.uY(t[b])},
i:function(a,b,c){var t,s
t=this.b
s=this.k(c,1)
if(b>>>0!==b||b>=t.length)return H.v(t,b)
t[b]=new Q.h(c,s,[H.ar(this,"cw",0)])},
gm:function(a){return this.b.length},
sm:function(a,b){C.b.sm(this.b,b)
return b},
A:function(a){return P.jk(this.b,"[","]")},
ax:function(a,b){return Q.uF(this,b,H.ar(this,"dS",0),null)},
a0:function(a,b){return Q.uE(this,!1,!0,null,H.ar(this,"dS",0))},
ap:function(a){return this.a0(a,!0)},
c9:function(a,b,c){var t,s
this.a=a
t=[[Q.h,c]]
if(b==null)this.b=H.a([],t)
else{s=new Array(b)
s.fixed$length=Array
this.b=H.a(s,t)}}}
Q.hR.prototype={$ascw:null,$asn:null,$asp:null,$asr:null,$isp:1,$isr:1,$isn:1}
Q.h.prototype={
A:function(a){return"("+H.x(this.a)+" @ "+H.x(this.b)+")"},
gW:function(a){return this.a},
gb6:function(a){return this.b}}
Q.eC.prototype={
gbh:function(){return this.b},
gS:function(a){var t=new Q.pm(null,[H.ar(this,"eC",0)])
t.a=J.cP(this.b)
return t},
gm:function(a){return J.bZ(this.b)},
A:function(a){return J.cH(this.b)},
ax:function(a,b){return Q.uF(this,b,H.ar(this,"eC",0),null)},
a0:function(a,b){return Q.uE(this,!1,!0,null,H.ar(this,"eC",0))},
ap:function(a){return this.a0(a,!0)}}
Q.hQ.prototype={$ascw:null,$asn:null,$isn:1}
Q.pm.prototype={
gL:function(){return J.uY(this.a.gL())},
F:function(){return this.a.F()}}
Q.jP.prototype={
$aseC:function(a,b){return[b]},
$ashQ:function(a,b){return[b]},
$ascw:function(a,b){return[b]},
$asn:function(a,b){return[b]}}
Q.pn.prototype={
$1:function(a){var t=J.aR(a)
return new Q.h(this.c.$1(t.gW(a)),t.gb6(a),[this.b])},
$S:function(){return H.eH(function(a,b){return{func:1,args:[[Q.h,a]]}},this,"jP")}}
J.f.prototype.eK=J.f.prototype.A
J.hl.prototype.eL=J.hl.prototype.A
P.di.prototype.eN=P.di.prototype.bH
P.di.prototype.eO=P.di.prototype.bG
P.aM.prototype.d6=P.aM.prototype.a6
Q.dS.prototype.eM=Q.dS.prototype.A;(function installTearOffs(){installTearOff(H.fu.prototype,"ghs",0,0,0,null,["$0"],["bY"],1)
installTearOff(H.dw.prototype,"gex",0,0,0,null,["$1"],["ay"],11)
installTearOff(H.eD.prototype,"gh5",0,0,0,null,["$1"],["aY"],11)
installTearOff(H,"xk",1,0,0,null,["$1"],["Gy"],8)
installTearOff(P,"GB",1,0,0,null,["$1"],["FZ"],6)
installTearOff(P,"GC",1,0,0,null,["$1"],["G_"],6)
installTearOff(P,"GD",1,0,0,null,["$1"],["G0"],6)
installTearOff(P,"xw",1,0,0,null,["$0"],["Gx"],1)
installTearOff(P.jW.prototype,"gdV",0,0,0,null,["$2","$1"],["cE","bp"],12)
installTearOff(P.bj.prototype,"gbc",0,0,0,null,["$2","$1"],["an","f7"],12)
var t
installTearOff(t=P.di.prototype,"gdD",0,0,0,null,["$0"],["bK"],1)
installTearOff(t,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t=P.hW.prototype,"gdD",0,0,0,null,["$0"],["bK"],1)
installTearOff(t,"gdE",0,0,0,null,["$0"],["bL"],1)
installTearOff(t,"gfj",0,0,0,null,["$1"],["fk"],function(){return H.eH(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"hW")})
installTearOff(t,"gfn",0,0,0,null,["$2"],["fo"],14)
installTearOff(t,"gfl",0,0,0,null,["$0"],["fm"],1)
installTearOff(P.k1.prototype,"gfX",0,1,0,null,["$1"],["aa"],29)
installTearOff(P,"GM",1,0,0,null,["$2"],["yE"],30)
installTearOff(P,"GN",1,0,0,null,["$1"],["fB"],4)
installTearOff(t=W.i8.prototype,"gar",0,1,0,null,["$1"],["cH"],4)
installTearOff(t,"ghn",0,0,0,null,["$1"],["e7"],4)
installTearOff(t,"ghY",0,0,0,null,["$1"],["hZ"],4)
installTearOff(W.eS.prototype,"gW",0,1,0,null,["$1"],["H"],5)
installTearOff(W.ib.prototype,"gW",0,1,0,null,["$1"],["H"],32)
installTearOff(W.ih.prototype,"gW",0,1,0,null,["$1"],["H"],5)
installTearOff(W.ii.prototype,"gW",0,1,0,null,["$1"],["H"],8)
installTearOff(W.ij.prototype,"gW",0,1,0,null,["$1"],["H"],5)
installTearOff(W.f1.prototype,"gW",0,1,0,null,["$1"],["H"],13)
installTearOff(W.iy.prototype,"gW",0,1,0,null,["$1"],["H"],9)
installTearOff(W.f3.prototype,"gW",0,1,0,null,["$1"],["H"],7)
installTearOff(W.iA.prototype,"gW",0,1,0,null,["$1"],["H"],7)
installTearOff(W.jr.prototype,"gW",0,1,0,null,["$1"],["H"],5)
installTearOff(W.js.prototype,"gW",0,1,0,null,["$1"],["H"],10)
installTearOff(W.ce.prototype,"gW",0,1,0,null,["$1"],["H"],10)
installTearOff(W.jC.prototype,"gW",0,1,0,null,["$1"],["H"],15)
installTearOff(W.jF.prototype,"gW",0,1,0,null,["$1"],["H"],9)
installTearOff(W.jH.prototype,"gW",0,1,0,null,["$1"],["H"],16)
installTearOff(W.jI.prototype,"gW",0,1,0,null,["$1"],["H"],17)
installTearOff(W.cg.prototype,"gW",0,1,0,null,["$1"],["H"],18)
installTearOff(W.jM.prototype,"gW",0,1,0,null,["$1"],["H"],19)
installTearOff(W.jN.prototype,"gW",0,1,0,null,["$1"],["H"],20)
installTearOff(W.jO.prototype,"gW",0,1,0,null,["$1"],["H"],21)
installTearOff(W.hU.prototype,"gW",0,1,0,null,["$1"],["H"],22)
installTearOff(W.jX.prototype,"gW",0,1,0,null,["$1"],["H"],33)
installTearOff(W.k0.prototype,"gW",0,1,0,null,["$1"],["H"],24)
installTearOff(W.hZ.prototype,"gW",0,1,0,null,["$1"],["H"],25)
installTearOff(W.k4.prototype,"gW",0,1,0,null,["$1"],["H"],26)
installTearOff(W.k6.prototype,"gW",0,1,0,null,["$1"],["H"],27)
installTearOff(P.jJ.prototype,"gW",0,1,0,null,["$1"],["H"],28)
installTearOff(V,"v5",1,0,0,null,["$0"],["H3"],1)
installTearOff(R,"ep",1,0,0,null,["$1"],["Fi"],0)
installTearOff(R,"wx",1,0,0,null,["$1"],["F6"],0)
installTearOff(R,"ug",1,0,0,null,["$1"],["Fh"],0)
installTearOff(R,"bR",1,0,0,null,["$1"],["Fg"],0)
installTearOff(R,"uf",1,0,0,null,["$1"],["Ff"],0)
installTearOff(R,"wz",1,0,0,null,["$1"],["Fd"],0)
installTearOff(R,"hD",1,0,0,null,["$1"],["Fc"],0)
installTearOff(R,"eo",1,0,0,null,["$1"],["F9"],0)
installTearOff(R,"e2",1,0,0,null,["$1"],["Fb"],0)
installTearOff(R,"fj",1,0,0,null,["$1"],["Fe"],0)
installTearOff(R,"ue",1,0,0,null,["$1"],["Fa"],0)
installTearOff(R,"y",1,0,0,null,["$1"],["F7"],0)
installTearOff(R,"wy",1,0,0,null,["$1"],["F8"],0)
installTearOff(F.fc.prototype,"gar",0,1,0,null,["$1"],["cH"],4)
installTearOff(O,"H5",1,0,0,null,["$1"],["H7"],31)
installTearOff(Y.dM.prototype,"ghH",0,0,0,null,["$1"],["ei"],function(){return H.eH(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"dM")})
installTearOff(V,"Hb",1,0,0,null,["$4"],["yY"],3)
installTearOff(V,"Ha",1,0,0,null,["$4"],["yX"],2)
installTearOff(B,"i4",1,0,0,null,["$1"],["Gs"],23)
installTearOff(T,"GH",1,0,0,null,["$4"],["yO"],3)
installTearOff(T,"GG",1,0,0,null,["$4"],["yN"],2)
installTearOff(T,"GF",1,0,0,null,["$4"],["yM"],3)
installTearOff(T,"GE",1,0,0,null,["$4"],["yL"],2)
installTearOff(F,"GV",1,0,0,null,["$4"],["yU"],3)
installTearOff(F,"GU",1,0,0,null,["$4"],["yT"],2)
installTearOff(F,"GT",1,0,0,null,["$4"],["yS"],3)
installTearOff(F,"GS",1,0,0,null,["$4"],["yR"],2)
installTearOff(F,"GR",1,0,0,null,["$4"],["yQ"],3)
installTearOff(F,"GQ",1,0,0,null,["$4"],["yP"],2)})();(function inheritance(){inherit(P.ab,null)
var t=P.ab
inherit(H.tL,t)
inherit(J.f,t)
inherit(J.i5,t)
inherit(P.hB,t)
inherit(P.n,t)
inherit(H.dL,t)
inherit(P.jm,t)
inherit(H.iw,t)
inherit(H.p5,t)
inherit(H.eQ,t)
inherit(H.qm,t)
inherit(H.fu,t)
inherit(H.pT,t)
inherit(H.eF,t)
inherit(H.ql,t)
inherit(H.pG,t)
inherit(H.fk,t)
inherit(H.oX,t)
inherit(H.dC,t)
inherit(H.dw,t)
inherit(H.eD,t)
inherit(H.kN,t)
inherit(H.nN,t)
inherit(H.p2,t)
inherit(P.eb,t)
inherit(H.h3,t)
inherit(H.k5,t)
inherit(H.dR,t)
inherit(H.w,t)
inherit(H.mH,t)
inherit(H.mJ,t)
inherit(H.hk,t)
inherit(H.k3,t)
inherit(H.jU,t)
inherit(H.jL,t)
inherit(H.qF,t)
inherit(P.cC,t)
inherit(P.eR,t)
inherit(P.jW,t)
inherit(P.k_,t)
inherit(P.bj,t)
inherit(P.jV,t)
inherit(P.dh,t)
inherit(P.oh,t)
inherit(P.di,t)
inherit(P.jY,t)
inherit(P.pO,t)
inherit(P.qp,t)
inherit(P.qD,t)
inherit(P.eL,t)
inherit(P.qS,t)
inherit(P.qc,t)
inherit(P.qe,t)
inherit(P.o2,t)
inherit(P.qj,t)
inherit(P.dv,t)
inherit(P.fa,t)
inherit(P.aM,t)
inherit(P.qK,t)
inherit(P.mY,t)
inherit(P.qk,t)
inherit(P.fP,t)
inherit(P.fR,t)
inherit(P.qM,t)
inherit(P.d9,t)
inherit(P.bF,t)
inherit(P.dF,t)
inherit(P.dl,t)
inherit(P.dG,t)
inherit(P.nn,t)
inherit(P.jK,t)
inherit(P.pY,t)
inherit(P.bJ,t)
inherit(P.li,t)
inherit(P.p,t)
inherit(P.bl,t)
inherit(P.d3,t)
inherit(P.d2,t)
inherit(P.dO,t)
inherit(P.B,t)
inherit(P.c9,t)
inherit(P.ez,t)
inherit(P.k8,t)
inherit(P.p6,t)
inherit(P.qB,t)
inherit(W.i8,t)
inherit(W.jx,t)
inherit(W.ia,t)
inherit(P.kR,t)
inherit(W.bx,t)
inherit(W.lO,t)
inherit(W.qJ,t)
inherit(P.qG,t)
inherit(P.pz,t)
inherit(P.qi,t)
inherit(P.qr,t)
inherit(P.qs,t)
inherit(P.bg,t)
inherit(P.d8,t)
inherit(T.fG,t)
inherit(T.db,t)
inherit(T.hf,t)
inherit(T.np,t)
inherit(T.pv,t)
inherit(T.pw,t)
inherit(T.px,t)
inherit(T.pu,t)
inherit(T.m5,t)
inherit(T.iB,t)
inherit(B.hg,t)
inherit(N.aa,t)
inherit(L.fH,t)
inherit(A.jy,t)
inherit(O.c6,t)
inherit(T.hG,t)
inherit(M.fO,t)
inherit(X.im,t)
inherit(X.i6,t)
inherit(M.h4,t)
inherit(Z.il,t)
inherit(E.nl,t)
inherit(E.M,t)
inherit(A.a4,t)
inherit(U.c,t)
inherit(Y.dN,t)
inherit(K.cD,t)
inherit(X.G,t)
inherit(G.a0,t)
inherit(A.fN,t)
inherit(B.dn,t)
inherit(B.dc,t)
inherit(A.dE,t)
inherit(F.hq,t)
inherit(F.fc,t)
inherit(Q.jA,t)
inherit(A.hE,t)
inherit(Y.dM,t)
inherit(O.cS,t)
inherit(D.cE,t)
inherit(B.oM,t)
inherit(B.cV,t)
inherit(Q.cw,t)
inherit(B.hT,t)
inherit(Q.h,t)
t=J.f
inherit(J.mt,t)
inherit(J.mu,t)
inherit(J.hl,t)
inherit(J.ei,t)
inherit(J.fb,t)
inherit(J.ej,t)
inherit(H.fe,t)
inherit(H.em,t)
inherit(W.aF,t)
inherit(W.cI,t)
inherit(W.eO,t)
inherit(W.kI,t)
inherit(W.fS,t)
inherit(W.kQ,t)
inherit(W.bI,t)
inherit(W.iC,t)
inherit(W.l1,t)
inherit(W.eT,t)
inherit(W.ib,t)
inherit(W.ie,t)
inherit(W.l4,t)
inherit(W.ig,t)
inherit(W.iD,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(W.fX,t)
inherit(W.Q,t)
inherit(W.iE,t)
inherit(W.lL,t)
inherit(W.lP,t)
inherit(W.lS,t)
inherit(W.cl,t)
inherit(W.m0,t)
inherit(W.iF,t)
inherit(W.he,t)
inherit(W.e3,t)
inherit(W.mS,t)
inherit(W.jr,t)
inherit(W.cn,t)
inherit(W.iP,t)
inherit(W.nf,t)
inherit(W.ng,t)
inherit(W.iQ,t)
inherit(W.nu,t)
inherit(W.e1,t)
inherit(W.e4,t)
inherit(W.ce,t)
inherit(W.iR,t)
inherit(W.o0,t)
inherit(W.cp,t)
inherit(W.iS,t)
inherit(W.fm,t)
inherit(W.cg,t)
inherit(W.oc,t)
inherit(W.og,t)
inherit(W.oD,t)
inherit(W.ch,t)
inherit(W.iT,t)
inherit(W.oW,t)
inherit(W.cr,t)
inherit(W.iU,t)
inherit(W.fq,t)
inherit(W.jN,t)
inherit(W.pb,t)
inherit(W.pc,t)
inherit(W.fr,t)
inherit(W.jO,t)
inherit(W.pJ,t)
inherit(W.iV,t)
inherit(W.iW,t)
inherit(W.iG,t)
inherit(W.iH,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.qQ,t)
inherit(W.qR,t)
inherit(P.ma,t)
inherit(P.nk,t)
inherit(P.d0,t)
inherit(P.iK,t)
inherit(P.d4,t)
inherit(P.iL,t)
inherit(P.nC,t)
inherit(P.iM,t)
inherit(P.d7,t)
inherit(P.iN,t)
inherit(P.pi,t)
inherit(P.fJ,t)
inherit(P.kl,t)
inherit(P.nP,t)
inherit(P.qP,t)
inherit(P.iO,t)
t=J.hl
inherit(J.nA,t)
inherit(J.ey,t)
inherit(J.ek,t)
inherit(F.tO,t)
inherit(R.hb,t)
inherit(R.u6,t)
inherit(R.u5,t)
inherit(S.fh,t)
inherit(S.uy,t)
inherit(S.uz,t)
inherit(S.uA,t)
inherit(S.rW,t)
inherit(S.rZ,t)
inherit(S.rM,t)
inherit(S.uC,t)
inherit(S.uD,t)
inherit(S.kZ,t)
inherit(S.uo,t)
inherit(S.up,t)
inherit(S.rG,t)
inherit(S.lW,t)
inherit(S.kE,t)
inherit(S.rL,t)
inherit(S.rK,t)
inherit(S.rY,t)
inherit(S.oT,t)
inherit(S.rP,t)
inherit(S.hs,t)
inherit(S.tW,t)
inherit(S.tY,t)
inherit(S.uj,t)
inherit(S.uk,t)
inherit(S.u0,t)
inherit(S.u1,t)
inherit(S.tc,t)
inherit(S.td,t)
inherit(S.u2,t)
inherit(S.tZ,t)
inherit(S.rI,t)
inherit(S.uv,t)
inherit(S.uw,t)
inherit(S.uu,t)
inherit(Z.tJ,t)
inherit(Z.tF,t)
inherit(Z.tG,t)
inherit(J.tK,J.ei)
t=J.fb
inherit(J.jo,t)
inherit(J.jn,t)
inherit(P.jp,P.hB)
t=P.jp
inherit(H.hO,t)
inherit(W.jZ,t)
inherit(H.kK,H.hO)
t=P.n
inherit(H.r,t)
inherit(H.hr,t)
inherit(H.hS,t)
inherit(P.hj,t)
inherit(H.qE,t)
t=H.r
inherit(H.el,t)
inherit(H.mI,t)
inherit(P.qd,t)
inherit(P.es,t)
t=H.el
inherit(H.oE,t)
inherit(H.fd,t)
inherit(P.mL,t)
inherit(H.fW,H.hr)
t=P.jm
inherit(H.jq,t)
inherit(H.jQ,t)
inherit(Q.pm,t)
t=H.eQ
inherit(H.rv,t)
inherit(H.rw,t)
inherit(H.qh,t)
inherit(H.pU,t)
inherit(H.me,t)
inherit(H.mf,t)
inherit(H.qo,t)
inherit(H.oY,t)
inherit(H.oZ,t)
inherit(H.rx,t)
inherit(H.rk,t)
inherit(H.rl,t)
inherit(H.rm,t)
inherit(H.rn,t)
inherit(H.ro,t)
inherit(H.oI,t)
inherit(H.mx,t)
inherit(H.mw,t)
inherit(H.rg,t)
inherit(H.rh,t)
inherit(H.ri,t)
inherit(P.pD,t)
inherit(P.pC,t)
inherit(P.pE,t)
inherit(P.pF,t)
inherit(P.qT,t)
inherit(P.qU,t)
inherit(P.r3,t)
inherit(P.r5,t)
inherit(P.lV,t)
inherit(P.lU,t)
inherit(P.pZ,t)
inherit(P.q6,t)
inherit(P.q2,t)
inherit(P.q3,t)
inherit(P.q4,t)
inherit(P.q0,t)
inherit(P.q5,t)
inherit(P.q_,t)
inherit(P.q9,t)
inherit(P.qa,t)
inherit(P.q8,t)
inherit(P.q7,t)
inherit(P.ok,t)
inherit(P.oi,t)
inherit(P.oj,t)
inherit(P.ol,t)
inherit(P.oq,t)
inherit(P.oo,t)
inherit(P.op,t)
inherit(P.or,t)
inherit(P.ou,t)
inherit(P.ov,t)
inherit(P.os,t)
inherit(P.ot,t)
inherit(P.ow,t)
inherit(P.ox,t)
inherit(P.om,t)
inherit(P.on,t)
inherit(P.pI,t)
inherit(P.pH,t)
inherit(P.qq,t)
inherit(P.qW,t)
inherit(P.qV,t)
inherit(P.qX,t)
inherit(P.r2,t)
inherit(P.qu,t)
inherit(P.qv,t)
inherit(P.qw,t)
inherit(P.qf,t)
inherit(P.mZ,t)
inherit(P.qO,t)
inherit(P.qN,t)
inherit(P.l8,t)
inherit(P.l9,t)
inherit(P.pa,t)
inherit(P.p7,t)
inherit(P.p8,t)
inherit(P.p9,t)
inherit(P.r4,t)
inherit(P.r_,t)
inherit(P.qZ,t)
inherit(P.r0,t)
inherit(P.r1,t)
inherit(W.pL,t)
inherit(W.m3,t)
inherit(W.m4,t)
inherit(W.pX,t)
inherit(P.qI,t)
inherit(P.pA,t)
inherit(P.r7,t)
inherit(P.r8,t)
inherit(P.r9,t)
inherit(P.kS,t)
inherit(P.qY,t)
inherit(P.kr,t)
inherit(P.ks,t)
inherit(V.rb,t)
inherit(V.rc,t)
inherit(O.kz,t)
inherit(A.ms,t)
inherit(A.mr,t)
inherit(G.mp,t)
inherit(U.pq,t)
inherit(U.pr,t)
inherit(A.r6,t)
inherit(A.mP,t)
inherit(A.mN,t)
inherit(A.mO,t)
inherit(A.mQ,t)
inherit(O.rs,t)
inherit(O.rt,t)
inherit(O.rr,t)
inherit(V.lf,t)
inherit(V.le,t)
inherit(V.ld,t)
inherit(V.lc,t)
inherit(D.of,t)
inherit(B.oO,t)
inherit(B.oN,t)
inherit(Q.pn,t)
t=H.pG
inherit(H.fv,t)
inherit(H.i0,t)
inherit(H.kO,H.kN)
t=P.eb
inherit(H.jw,t)
inherit(H.my,t)
inherit(H.p4,t)
inherit(H.kH,t)
inherit(H.nS,t)
inherit(P.fg,t)
inherit(P.cX,t)
inherit(P.T,t)
inherit(P.ex,t)
inherit(P.dP,t)
inherit(P.bM,t)
inherit(P.l0,t)
t=H.oI
inherit(H.oe,t)
inherit(H.fL,t)
t=P.hj
inherit(H.pB,t)
inherit(T.fF,t)
t=H.em
inherit(H.n7,t)
inherit(H.jt,t)
t=H.jt
inherit(H.hx,t)
inherit(H.hy,t)
inherit(H.hz,H.hx)
inherit(H.hv,H.hz)
inherit(H.hA,H.hy)
inherit(H.hw,H.hA)
t=H.hv
inherit(H.n8,t)
inherit(H.n9,t)
t=H.hw
inherit(H.na,t)
inherit(H.nb,t)
inherit(H.nc,t)
inherit(H.nd,t)
inherit(H.ne,t)
inherit(H.ju,t)
inherit(H.ff,t)
t=P.jW
inherit(P.dT,t)
inherit(P.k7,t)
t=P.jY
inherit(P.pN,t)
inherit(P.pP,t)
inherit(P.qC,P.qp)
t=P.dh
inherit(P.hV,t)
inherit(W.pV,t)
inherit(P.hW,P.di)
inherit(P.qn,P.hV)
inherit(P.qt,P.qS)
inherit(P.k2,H.w)
inherit(P.o1,P.o2)
inherit(P.qg,P.o1)
inherit(P.k1,P.qg)
inherit(P.hP,P.mY)
t=P.fP
inherit(P.kw,t)
inherit(P.lb,t)
t=P.fR
inherit(P.kx,t)
inherit(P.pf,t)
inherit(P.pe,P.lb)
t=P.dl
inherit(P.U,t)
inherit(P.C,t)
t=P.cX
inherit(P.er,t)
inherit(P.mb,t)
inherit(P.pM,P.k8)
t=W.aF
inherit(W.az,t)
inherit(W.fY,t)
inherit(W.kM,t)
inherit(W.lK,t)
inherit(W.lM,t)
inherit(W.lQ,t)
inherit(W.hd,t)
inherit(W.hu,t)
inherit(W.nE,t)
inherit(W.jE,t)
inherit(W.o3,t)
inherit(W.eB,t)
inherit(W.co,t)
inherit(W.fZ,t)
inherit(W.cO,t)
inherit(W.cF,t)
inherit(W.h_,t)
inherit(W.pg,t)
inherit(W.pl,t)
inherit(W.jR,t)
inherit(W.ps,t)
inherit(W.qA,t)
inherit(P.l2,t)
inherit(P.hF,t)
inherit(P.p0,t)
inherit(P.bC,t)
inherit(P.fK,t)
t=W.az
inherit(W.dp,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.id,t)
inherit(W.fs,t)
inherit(W.pQ,t)
t=W.dp
inherit(W.as,t)
inherit(P.ca,t)
t=W.as
inherit(W.eK,t)
inherit(W.km,t)
inherit(W.ht,t)
inherit(W.ky,t)
inherit(W.kB,t)
inherit(W.eP,t)
inherit(W.fV,t)
inherit(W.la,t)
inherit(W.lJ,t)
inherit(W.iy,t)
inherit(W.m7,t)
inherit(W.f5,t)
inherit(W.mc,t)
inherit(W.mA,t)
inherit(W.hn,t)
inherit(W.mX,t)
inherit(W.n1,t)
inherit(W.nj,t)
inherit(W.no,t)
inherit(W.ns,t)
inherit(W.fl,t)
inherit(W.jF,t)
inherit(W.o5,t)
inherit(W.o8,t)
inherit(W.hH,t)
inherit(W.oK,t)
inherit(W.hM,t)
inherit(W.p_,t)
inherit(W.qb,t)
inherit(W.eN,W.ht)
inherit(W.h0,W.fY)
inherit(W.ku,W.h0)
t=W.bI
inherit(W.kT,t)
inherit(W.kU,t)
inherit(W.fT,t)
inherit(W.fU,t)
inherit(W.kV,t)
inherit(W.kW,t)
inherit(W.kX,t)
inherit(W.eS,W.iC)
inherit(W.pK,W.jx)
inherit(W.iX,W.iD)
inherit(W.ih,W.iX)
t=W.Q
inherit(W.lg,t)
inherit(W.oa,t)
inherit(W.ob,t)
inherit(W.cc,W.eO)
inherit(W.iY,W.iE)
inherit(W.f1,W.iY)
inherit(W.iZ,W.iF)
inherit(W.f3,W.iZ)
inherit(W.iA,W.f3)
inherit(W.e_,W.hd)
inherit(W.hm,W.e3)
inherit(W.n2,W.hu)
inherit(W.j8,W.iP)
inherit(W.js,W.j8)
inherit(W.j9,W.iQ)
inherit(W.jv,W.j9)
inherit(W.nz,W.e4)
inherit(W.ja,W.iR)
inherit(W.jC,W.ja)
inherit(W.o4,W.eB)
inherit(W.h1,W.fZ)
inherit(W.jH,W.h1)
inherit(W.jb,W.iS)
inherit(W.jI,W.jb)
inherit(W.jc,W.iT)
inherit(W.oR,W.jc)
inherit(W.h2,W.h_)
inherit(W.oS,W.h2)
inherit(W.jd,W.iU)
inherit(W.jM,W.jd)
inherit(W.je,W.iV)
inherit(W.hU,W.je)
inherit(W.jf,W.iW)
inherit(W.jX,W.jf)
inherit(W.pR,W.ig)
inherit(W.j_,W.iG)
inherit(W.k0,W.j_)
inherit(W.j0,W.iH)
inherit(W.hZ,W.j0)
inherit(W.j1,W.iI)
inherit(W.k4,W.j1)
inherit(W.j2,W.iJ)
inherit(W.k6,W.j2)
t=P.kR
inherit(W.pS,t)
inherit(P.kq,t)
inherit(W.eE,W.pV)
inherit(W.pW,P.oh)
inherit(P.qH,P.qG)
inherit(P.jT,P.pz)
inherit(P.bS,P.qs)
t=P.ca
inherit(P.cm,t)
inherit(P.e8,t)
inherit(P.lj,t)
inherit(P.lk,t)
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
inherit(P.lN,t)
inherit(P.n_,t)
inherit(P.n0,t)
inherit(P.nx,t)
inherit(P.nY,t)
inherit(P.oH,t)
inherit(P.ph,t)
inherit(P.hX,t)
inherit(P.qx,t)
inherit(P.qy,t)
inherit(P.qz,t)
t=P.cm
inherit(P.kj,t)
inherit(P.m8,t)
inherit(P.oF,t)
inherit(P.ew,t)
inherit(P.pd,t)
inherit(P.j3,P.iK)
inherit(P.mD,P.j3)
inherit(P.j4,P.iL)
inherit(P.nh,P.j4)
inherit(P.j5,P.iM)
inherit(P.oB,P.j5)
inherit(P.oQ,P.ew)
inherit(P.j6,P.iN)
inherit(P.p1,P.j6)
t=P.bC
inherit(P.dX,t)
inherit(P.kP,t)
inherit(P.eM,P.dX)
inherit(P.j7,P.iO)
inherit(P.jJ,P.j7)
t=B.hg
inherit(S.kk,t)
inherit(M.kp,t)
inherit(A.kL,t)
inherit(M.kY,t)
inherit(V.l5,t)
inherit(U.lz,t)
inherit(N.mz,t)
inherit(F.n5,t)
inherit(G.nD,t)
inherit(Q.nR,t)
inherit(N.o7,t)
inherit(D.oJ,t)
inherit(V.oL,t)
inherit(F.pt,t)
t=N.aa
inherit(T.l3,t)
inherit(R.nK,t)
t=T.l3
inherit(K.bU,t)
inherit(S.bG,t)
inherit(T.c2,t)
inherit(M.bB,t)
inherit(A.nr,A.jy)
inherit(L.aW,A.nr)
t=O.c6
inherit(O.dm,t)
inherit(O.ik,t)
inherit(O.ev,t)
t=O.dm
inherit(U.kt,t)
inherit(Y.nM,t)
inherit(V.lR,t)
inherit(Q.m9,t)
inherit(Q.ny,t)
inherit(M.od,t)
inherit(B.py,t)
t=U.kt
inherit(U.mU,t)
inherit(U.nm,t)
inherit(U.oy,O.ik)
t=U.oy
inherit(U.oz,t)
inherit(U.oA,t)
t=T.hG
inherit(O.kv,t)
inherit(Y.lX,t)
inherit(Y.lY,t)
inherit(B.m_,t)
inherit(X.m6,t)
inherit(S.mB,t)
inherit(Z.mT,t)
inherit(S.mV,t)
inherit(U.mW,t)
inherit(E.n4,t)
inherit(V.nq,t)
inherit(N.nJ,t)
inherit(N.nQ,t)
inherit(E.nU,t)
inherit(Y.nW,t)
inherit(L.nX,t)
inherit(S.o_,t)
inherit(Y.o6,t)
inherit(R.oG,t)
inherit(U.oU,t)
inherit(E.pk,t)
inherit(M.po,t)
t=O.ev
inherit(Y.oP,t)
inherit(Y.kF,t)
inherit(Y.ni,t)
inherit(U.pp,t)
t=L.fH
inherit(T.kA,t)
inherit(T.kD,t)
inherit(U.l6,t)
inherit(Z.l7,t)
inherit(T.lZ,t)
inherit(X.m1,t)
inherit(Q.mC,t)
inherit(K.mE,t)
inherit(G.mF,t)
inherit(V.n3,t)
inherit(E.nL,t)
inherit(K.nV,t)
inherit(N.o9,t)
inherit(N.oV,t)
inherit(Q.pj,t)
t=S.bG
inherit(S.i7,t)
inherit(S.m2,t)
inherit(E.iz,E.nl)
t=E.M
inherit(E.fI,t)
inherit(E.ko,t)
inherit(Q.nB,Q.m9)
inherit(U.a_,U.c)
t=R.nK
inherit(R.Y,t)
inherit(R.R,t)
inherit(R.a5,t)
inherit(R.bA,R.a5)
t=Y.dN
inherit(Y.ac,t)
inherit(Y.c0,t)
inherit(Y.V,t)
inherit(Y.i9,t)
inherit(Y.bD,t)
inherit(Y.cU,t)
inherit(Y.kJ,t)
inherit(Y.jz,t)
inherit(Y.ix,t)
inherit(Y.jB,t)
t=Y.c0
inherit(Y.cY,t)
inherit(Y.bw,t)
inherit(U.ag,A.a4)
t=G.a0
inherit(G.aI,t)
inherit(G.bH,t)
inherit(G.d,t)
inherit(G.af,G.bH)
t=D.cE
inherit(D.jS,t)
inherit(D.nO,t)
t=Q.cw
inherit(Q.hR,t)
inherit(Q.hQ,t)
inherit(Q.dS,Q.hR)
inherit(B.eA,Q.dS)
t=S.fh
inherit(S.uh,t)
inherit(S.kG,t)
inherit(S.mG,t)
inherit(S.tU,t)
inherit(S.tb,t)
t=S.kG
inherit(S.u9,t)
inherit(S.u3,t)
t=S.mG
inherit(S.rR,t)
inherit(S.rH,t)
t=S.kZ
inherit(S.tP,t)
inherit(S.l_,t)
inherit(S.nt,S.l_)
inherit(S.ul,S.nt)
t=S.kE
inherit(S.ua,t)
inherit(S.um,t)
t=S.lW
inherit(S.uq,t)
inherit(S.ub,t)
inherit(S.rX,t)
inherit(S.un,t)
t=S.oT
inherit(S.ut,t)
inherit(S.rO,t)
inherit(S.uB,t)
t=S.hs
inherit(S.tV,t)
inherit(S.tX,t)
inherit(S.ui,t)
inherit(Q.eC,Q.hQ)
inherit(Q.jP,Q.eC)
mixin(H.hO,H.p5)
mixin(H.hx,P.aM)
mixin(H.hz,H.iw)
mixin(H.hy,P.aM)
mixin(H.hA,H.iw)
mixin(P.hB,P.aM)
mixin(P.hP,P.qK)
mixin(W.fY,P.aM)
mixin(W.h0,W.bx)
mixin(W.iC,W.ia)
mixin(W.jx,W.ia)
mixin(W.iD,P.aM)
mixin(W.iX,W.bx)
mixin(W.iE,P.aM)
mixin(W.iY,W.bx)
mixin(W.iF,P.aM)
mixin(W.iZ,W.bx)
mixin(W.iP,P.aM)
mixin(W.j8,W.bx)
mixin(W.iQ,P.aM)
mixin(W.j9,W.bx)
mixin(W.iR,P.aM)
mixin(W.ja,W.bx)
mixin(W.fZ,P.aM)
mixin(W.h1,W.bx)
mixin(W.iS,P.aM)
mixin(W.jb,W.bx)
mixin(W.iT,P.aM)
mixin(W.jc,W.bx)
mixin(W.h_,P.aM)
mixin(W.h2,W.bx)
mixin(W.iU,P.aM)
mixin(W.jd,W.bx)
mixin(W.iV,P.aM)
mixin(W.je,W.bx)
mixin(W.iW,P.aM)
mixin(W.jf,W.bx)
mixin(W.iG,P.aM)
mixin(W.j_,W.bx)
mixin(W.iH,P.aM)
mixin(W.j0,W.bx)
mixin(W.iI,P.aM)
mixin(W.j1,W.bx)
mixin(W.iJ,P.aM)
mixin(W.j2,W.bx)
mixin(P.iK,P.aM)
mixin(P.j3,W.bx)
mixin(P.iL,P.aM)
mixin(P.j4,W.bx)
mixin(P.iM,P.aM)
mixin(P.j5,W.bx)
mixin(P.iN,P.aM)
mixin(P.j6,W.bx)
mixin(P.iO,P.aM)
mixin(P.j7,W.bx)
mixin(A.jy,P.fa)
mixin(Q.hR,P.aM)
mixin(Q.hQ,P.fa)})();(function constants(){C.L=W.e_.prototype
C.M=J.f.prototype
C.b=J.ei.prototype
C.f=J.jn.prototype
C.a=J.jo.prototype
C.d=J.fb.prototype
C.c=J.ej.prototype
C.T=J.ek.prototype
C.p=H.ff.prototype
C.F=J.nA.prototype
C.r=J.ey.prototype
C.H=new P.kx(!1)
C.G=new P.kw(C.H)
C.j=new W.i8()
C.I=new P.nn()
C.J=new P.pO()
C.K=new P.qi()
C.e=new P.qt()
C.t=new W.qJ()
C.o=new P.dG(0)
C.N=function() {  var toStringFunction = Object.prototype.toString;  function getTag(o) {    var s = toStringFunction.call(o);    return s.substring(8, s.length - 1);  }  function getUnknownTag(object, tag) {    if (/^HTML[A-Z].*Element$/.test(tag)) {      var name = toStringFunction.call(object);      if (name == "[object Object]") return null;      return "HTMLElement";    }  }  function getUnknownTagGenericBrowser(object, tag) {    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";    return getUnknownTag(object, tag);  }  function prototypeForTag(tag) {    if (typeof window == "undefined") return null;    if (typeof window[tag] == "undefined") return null;    var constructor = window[tag];    if (typeof constructor != "function") return null;    return constructor.prototype;  }  function discriminator(tag) { return null; }  var isBrowser = typeof navigator == "object";  return {    getTag: getTag,    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,    prototypeForTag: prototypeForTag,    discriminator: discriminator };}
C.u=function(hooks) { return hooks; }
C.O=function(hooks) {  if (typeof dartExperimentalFixupGetTag != "function") return hooks;  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);}
C.P=function(hooks) {  var getTag = hooks.getTag;  var prototypeForTag = hooks.prototypeForTag;  function getTagFixed(o) {    var tag = getTag(o);    if (tag == "Document") {      // "Document", so we check for the xmlVersion property, which is the empty      if (!!o.xmlVersion) return "!Document";      return "!HTMLDocument";    }    return tag;  }  function prototypeForTagFixed(tag) {    if (tag == "Document") return null;    return prototypeForTag(tag);  }  hooks.getTag = getTagFixed;  hooks.prototypeForTag = prototypeForTagFixed;}
C.Q=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Firefox") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "GeoGeolocation": "Geolocation",    "Location": "!Location",    "WorkerMessageEvent": "MessageEvent",    "XMLDocument": "!Document"};  function getTagFirefox(o) {    var tag = getTag(o);    return quickMap[tag] || tag;  }  hooks.getTag = getTagFirefox;}
C.v=function getTagFallback(o) {  var s = Object.prototype.toString.call(o);  return s.substring(8, s.length - 1);}
C.R=function(hooks) {  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";  if (userAgent.indexOf("Trident/") == -1) return hooks;  var getTag = hooks.getTag;  var quickMap = {    "BeforeUnloadEvent": "Event",    "DataTransfer": "Clipboard",    "HTMLDDElement": "HTMLElement",    "HTMLDTElement": "HTMLElement",    "HTMLPhraseElement": "HTMLElement",    "Position": "Geoposition"  };  function getTagIE(o) {    var tag = getTag(o);    var newTag = quickMap[tag];    if (newTag) return newTag;    if (tag == "Object") {      if (window.DataView && (o instanceof window.DataView)) return "DataView";    }    return tag;  }  function prototypeForTagIE(tag) {    var constructor = window[tag];    if (constructor == null) return null;    return constructor.prototype;  }  hooks.getTag = getTagIE;  hooks.prototypeForTag = prototypeForTagIE;}
C.S=function(getTagFallback) {  return function(hooks) {    if (typeof navigator != "object") return hooks;    var ua = navigator.userAgent;    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;    if (ua.indexOf("Chrome") >= 0) {      function confirm(p) {        return typeof window == "object" && window[p] && window[p].name == p;      }      if (confirm("Window") && confirm("HTMLElement")) return hooks;    }    hooks.getTag = getTagFallback;  };}
C.w=H.a(makeConstList([127,2047,65535,1114111]),[P.C])
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
C.h=new F.hq(0,"LogLevel.ERROR")
C.i=new F.hq(1,"LogLevel.WARN")
C.Z=new F.hq(3,"LogLevel.VERBOSE")
C.X=H.a(makeConstList([]),[P.B])
C.a_=new H.kO(0,{},C.X,[P.B,P.B])
C.a0=H.bY("bg")
C.a1=H.bY("Hi")
C.q=H.bY("Hj")
C.a2=H.bY("Hk")
C.a3=H.bY("Hl")
C.a4=H.bY("Hn")
C.a5=H.bY("Ho")
C.a6=H.bY("Hp")
C.a7=H.bY("mv")
C.a8=H.bY("d3")
C.a9=H.bY("B")
C.aa=H.bY("Hs")
C.ab=H.bY("Ht")
C.ac=H.bY("Hu")
C.ad=H.bY("d8")
C.ae=H.bY("d9")
C.af=H.bY("U")
C.ag=H.bY("C")
C.ah=H.bY("dl")
C.n=new P.pe(!1)})();(function staticFields(){$.ws="$cachedFunction"
$.wt="$cachedInvocation"
$.dD=0
$.fM=null
$.v6=null
$.uO=null
$.xt=null
$.xH=null
$.ra=null
$.rj=null
$.uP=null
$.fx=null
$.i1=null
$.i2=null
$.uK=!1
$.am=C.e
$.vm=0
$.vi=null
$.vh=null
$.vg=null
$.vj=null
$.vf=null
$.ys=null
$.yt=null
$.yg=null
$.yh=null
$.yf=null
$.yj=null
$.yo=null
$.yn=null
$.yu=null
$.yq=null
$.yk=null
$.ym=null
$.yi=null
$.yl=null
$.yr=null
$.yp=null
$.b4="accent"
$.b6="aspect1"
$.b5="aspect2"
$.bf="shoe1"
$.be="shoe2"
$.b8="cloak1"
$.b9="cloak2"
$.b7="cloak3"
$.bd="shirt1"
$.bc="shirt2"
$.bb="pants1"
$.ba="pants2"
$.ai=1300
$.j=3
$.m=2
$.L=1
$.A=0.1
$.z7=1
$.z6=-1
$.t5=null
$.dY=null
$.vo=null
$.ee=null
$.f_=null
$.ip=null
$.t_=null
$.lC=null
$.t7=null
$.iq=null
$.io=null
$.vq=null
$.iv=null
$.h5=null
$.dK=null
$.vp=null
$.lB=null
$.lI=null
$.eY=null
$.z4=null
$.z1=null
$.z3=null
$.z5=null
$.ha=null
$.eU=null
$.cv=null
$.cZ=null
$.eX=null
$.lH=null
$.c5=null
$.c4=null
$.t1=null
$.h8=null
$.ed=null
$.z2=null
$.h7=null
$.cB=null
$.dZ=null
$.iu=null
$.dd=null
$.eZ=null
$.c_=null
$.lF=null
$.vn=null
$.aN=null
$.cA=null
$.cz=null
$.cb=null
$.lE=null
$.ck=null
$.ds=null
$.dr=null
$.dq=null
$.dH=null
$.dI=null
$.eW=null
$.d_=null
$.h9=null
$.lD=null
$.lA=null
$.cQ=null
$.cu=null
$.b1=null
$.eV=null
$.ef=null
$.lG=null
$.ir=null
$.h6=null
$.t3=null
$.cJ=null
$.t6=null
$.t0=null
$.vs=null
$.ec=null
$.cy=null
$.dJ=null
$.de=null
$.f0=null
$.t2=null
$.t4=null
$.vr=null
$.is=null
$.it=null
$.eg=null
$.vt=!1
$.t9=null
$.z8=null
$.vv=null
$.vx=null
$.zh=null
$.vw=null
$.zf=null
$.zg=null
$.t8=null
$.zc=null
$.za=null
$.zb=null
$.zd=null
$.ze=null
$.zr=null
$.zk=null
$.zl=null
$.zm=null
$.zn=null
$.zo=null
$.zp=null
$.zq=null
$.zt=null
$.zu=null
$.zv=null
$.zw=null
$.zx=null
$.zy=null
$.zs=null
$.EO="JACK"
$.ES="PM"
$.EP="JS"
$.EN="HP"
$.EX="YD"
$.EU="SI"
$.EV="SU"
$.EQ="ME"
$.ET="RB"
$.EL="GN"
$.wm="MP"
$.EJ="AR"
$.ER="PE"
$.EK="DP"
$.EW="WV"
$.EM="HB"
$.o="PLAYER1TAG"
$.eq="PLAYER2TAG"
$.z="DENIZENTAG"
$.t="CONSORTTAG"
$.K="CONSORTSOUNDTAG"
$.aH="MCGUFFINTAG"
$.ae="TAGPHYSICALMCGUFFIN"
$.cf="TAGWEAPON"
$.Fs=null
$.FE=null
$.Fn=null
$.Fq=null
$.Fv=null
$.FA=null
$.Fy=null
$.FH=null
$.FG=null
$.Fz=null
$.FJ=null
$.Fu=null
$.FI=null
$.FC=null
$.FB=null
$.FD=null
$.Fp=null
$.Fo=null
$.Fx=null
$.Fw=null
$.Ft=null
$.FF=null
$.Fr=null
$.xz=!1
$.FK=!1
$.wB=null
$.FR=13
$.at=3
$.bL=2
$.aC=1
$.mq=0
$.H=1
$.a2=3
$.F=4
$.tC=6
$.tD=7
$.a9=8
$.u=9
$.q=10
$.vP=null
$.f9=null
$.to=null
$.ty=null
$.tv=null
$.vF=null
$.tj=null
$.tu=null
$.hi=null
$.vN=null
$.w7=null
$.vI=null
$.vO=null
$.tk=null
$.tt=null
$.w9=null
$.wb=null
$.tg=null
$.ji=null
$.jg=null
$.aw=null
$.w1=null
$.tf=null
$.vX=null
$.f8=null
$.vH=null
$.wc=null
$.w8=null
$.w6=null
$.tr=null
$.mj=null
$.eh=null
$.wa=null
$.mh=null
$.tl=null
$.f7=null
$.w4=null
$.dt=null
$.hh=null
$.tB=null
$.w5=null
$.tA=null
$.tw=null
$.tx=null
$.ml=null
$.jh=null
$.zZ=null
$.vR=null
$.vW=null
$.w3=null
$.w2=null
$.D=null
$.vL=null
$.mi=null
$.bO=null
$.aX=null
$.bP=null
$.W=null
$.aA=null
$.c8=null
$.J=null
$.O=null
$.av=null
$.aT=null
$.bV=null
$.bh=null
$.bn=null
$.cd=null
$.aQ=null
$.bz=null
$.bQ=null
$.Z=null
$.En=null
$.au=null
$.aV=null
$.aL=null
$.ad=null
$.c7=null
$.aK=null
$.ao=null
$.bW=null
$.aP=null
$.aj=null
$.bk=null
$.c1=null
$.aD=null
$.bo=null
$.bm=null
$.a6=null
$.bK=null
$.a8=null
$.b3=null
$.bq=null
$.aJ=null
$.b2=null
$.ax=null
$.aY=null
$.aG=null
$.X=null
$.ap=null
$.aB=null
$.aS=null
$.an=null
$.al=null
$.a1=null
$.S=null
$.N=null
$.ah=null
$.aO=null
$.bi=null
$.aU=null
$.Bi=null
$.E_=null
$.Ey=null
$.AO=null
$.DX=null
$.Bj=null
$.vD=null
$.Eb=null
$.Cj=null
$.Be=null
$.zT=null
$.CU=null
$.mn=null
$.vJ=null
$.Dj=null
$.AL=null
$.C2=null
$.AJ=null
$.th=null
$.Au=null
$.Bv=null
$.AT=null
$.Cc=null
$.Ej=null
$.Bk=null
$.ti=null
$.Cd=null
$.AR=null
$.AA=null
$.w0=null
$.zM=null
$.vE=null
$.BW=null
$.tp=null
$.Cy=null
$.Cs=null
$.zQ=null
$.AD=null
$.Dt=null
$.zS=null
$.DW=null
$.C1=null
$.B_=null
$.Dd=null
$.DQ=null
$.tn=null
$.Cn=null
$.Da=null
$.AS=null
$.zF=null
$.Em=null
$.C5=null
$.Az=null
$.Ea=null
$.CB=null
$.AG=null
$.DV=null
$.B9=null
$.DB=null
$.DC=null
$.zO=null
$.Cu=null
$.AU=null
$.B3=null
$.EC=null
$.jj=null
$.Dr=null
$.DT=null
$.mk=null
$.Ao=null
$.CL=null
$.CP=null
$.zL=null
$.B8=null
$.DU=null
$.CA=null
$.Ed=null
$.Df=null
$.CQ=null
$.vV=null
$.DF=null
$.Es=null
$.DZ=null
$.BJ=null
$.D1=null
$.BK=null
$.Du=null
$.Eq=null
$.Cb=null
$.B5=null
$.Bs=null
$.Ae=null
$.Db=null
$.Bq=null
$.Bx=null
$.AW=null
$.DE=null
$.f6=null
$.CF=null
$.vU=null
$.BL=null
$.BI=null
$.Ev=null
$.Ak=null
$.Dp=null
$.Dq=null
$.Do=null
$.Dn=null
$.DM=null
$.By=null
$.Cv=null
$.DP=null
$.Cm=null
$.CG=null
$.AP=null
$.Ep=null
$.Ct=null
$.Bb=null
$.Bc=null
$.CO=null
$.EB=null
$.C_=null
$.Eo=null
$.vZ=null
$.DA=null
$.C9=null
$.mo=null
$.BU=null
$.D3=null
$.Aj=null
$.Bf=null
$.Dw=null
$.Cw=null
$.Ei=null
$.vY=null
$.CE=null
$.Aq=null
$.AM=null
$.D_=null
$.E5=null
$.Dv=null
$.mg=null
$.tz=null
$.DH=null
$.Er=null
$.BH=null
$.A2=null
$.Ab=null
$.E3=null
$.CI=null
$.Ck=null
$.CJ=null
$.E0=null
$.BV=null
$.zP=null
$.Bw=null
$.Ci=null
$.DJ=null
$.Bp=null
$.Ai=null
$.Dl=null
$.Dm=null
$.Eg=null
$.Dy=null
$.ts=null
$.vK=null
$.AH=null
$.vM=null
$.BP=null
$.tq=null
$.D5=null
$.Cr=null
$.Dh=null
$.tm=null
$.mm=null
$.vT=null
$.B1=null
$.Bu=null
$.w_=null
$.vQ=null
$.AC=null
$.E7=null
$.Av=null
$.CS=null
$.BM=null
$.DO=null
$.Cl=null
$.A_=null
$.BN=null
$.AZ=null
$.CW=null
$.C4=null
$.Cq=null
$.Ca=null
$.Ce=null
$.Dk=null
$.Dg=null
$.zI=null
$.E4=null
$.D8=null
$.AQ=null
$.AV=null
$.Bt=null
$.E1=null
$.Bm=null
$.C6=null
$.A6=null
$.Bg=null
$.AY=null
$.CK=null
$.B6=null
$.Ds=null
$.C8=null
$.vG=null
$.D4=null
$.BO=null
$.Bn=null
$.zG=null
$.zN=null
$.CH=null
$.CR=null
$.C3=null
$.BF=null
$.El=null
$.A9=null
$.Bo=null
$.C7=null
$.AN=null
$.DL=null
$.AB=null
$.Dx=null
$.A7=null
$.E6=null
$.Cg=null
$.A1=null
$.De=null
$.D0=null
$.AI=null
$.Bz=null
$.Ap=null
$.E2=null
$.BS=null
$.Eh=null
$.Ar=null
$.BA=null
$.As=null
$.AK=null
$.D7=null
$.AE=null
$.BT=null
$.Cx=null
$.Al=null
$.DN=null
$.Ex=null
$.DD=null
$.Co=null
$.DK=null
$.Cp=null
$.zV=null
$.zH=null
$.Ch=null
$.A4=null
$.At=null
$.zW=null
$.A0=null
$.CD=null
$.CX=null
$.E9=null
$.BQ=null
$.Ew=null
$.Dc=null
$.D9=null
$.BX=null
$.BR=null
$.Ax=null
$.BD=null
$.Cf=null
$.CM=null
$.DG=null
$.zK=null
$.Et=null
$.B4=null
$.DR=null
$.AX=null
$.zU=null
$.Am=null
$.Ad=null
$.EA=null
$.An=null
$.B7=null
$.Aw=null
$.Ef=null
$.DI=null
$.E8=null
$.zJ=null
$.Di=null
$.BY=null
$.C0=null
$.Ek=null
$.DS=null
$.vS=null
$.Bd=null
$.CZ=null
$.Eu=null
$.Bh=null
$.BZ=null
$.Ah=null
$.BG=null
$.BE=null
$.Dz=null
$.CY=null
$.BB=null
$.Ac=null
$.DY=null
$.CN=null
$.Ec=null
$.Ez=null
$.zY=null
$.zX=null
$.A8=null
$.Ba=null
$.D6=null
$.AF=null
$.D2=null
$.B0=null
$.zR=null
$.Aa=null
$.CC=null
$.B2=null
$.CV=null
$.Ag=null
$.Bl=null
$.Ee=null
$.A3=null
$.Br=null
$.CT=null
$.Af=null
$.BC=null
$.Cz=null
$.A5=null
$.Ay=null
$.x3=4
$.f2="OWNER"
$.wi=!1
$.tT=null
$.xJ=""
$.ur=null
$.FO=null
$.hL=null
$.et=null
$.FN=null
$.hK=null
$.eu=null
$.d6=null
$.fn=null
$.hI=null
$.hJ=null
$.du=null
$.cq=null
$.wD=!1})();(function lazyInitializers(){lazy($,"vd","$get$vd",function(){return H.xC("_$dart_dartClosure")})
lazy($,"tM","$get$tM",function(){return H.xC("_$dart_js")})
lazy($,"vB","$get$vB",function(){return H.zD()})
lazy($,"vC","$get$vC",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.vm
$.vm=t+1
t="expando$key$"+t}return new P.li(null,t,[P.C])})
lazy($,"wK","$get$wK",function(){return H.dQ(H.p3({
toString:function(){return"$receiver$"}}))})
lazy($,"wL","$get$wL",function(){return H.dQ(H.p3({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"wM","$get$wM",function(){return H.dQ(H.p3(null))})
lazy($,"wN","$get$wN",function(){return H.dQ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wR","$get$wR",function(){return H.dQ(H.p3(void 0))})
lazy($,"wS","$get$wS",function(){return H.dQ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"wP","$get$wP",function(){return H.dQ(H.wQ(null))})
lazy($,"wO","$get$wO",function(){return H.dQ(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"wU","$get$wU",function(){return H.dQ(H.wQ(void 0))})
lazy($,"wT","$get$wT",function(){return H.dQ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"uG","$get$uG",function(){return P.FY()})
lazy($,"hc","$get$hc",function(){return P.G3(null,P.d3)})
lazy($,"i3","$get$i3",function(){return[]})
lazy($,"x5","$get$x5",function(){return H.EY([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2])})
lazy($,"xr","$get$xr",function(){return P.Gr()})
lazy($,"vc","$get$vc",function(){return P.d5("^\\S+$",!0,!1)})
lazy($,"kn","$get$kn",function(){return P.bX(P.C,L.fH)})
lazy($,"v8","$get$v8",function(){return P.d5("[\\/]",!0,!1)})
lazy($,"bN","$get$bN",function(){return H.a([],[S.bG])})
lazy($,"lT","$get$lT",function(){return P.bX(P.B,Z.il)})
lazy($,"md","$get$md",function(){return P.bX(P.C,B.hg)})
lazy($,"wd","$get$wd",function(){return H.a([],[A.a4])})
lazy($,"wn","$get$wn",function(){return H.a([],[P.B])})
lazy($,"nT","$get$nT",function(){return P.bX(P.C,T.hG)})
lazy($,"ak","$get$ak",function(){return H.a([],[U.ag])})
lazy($,"wC","$get$wC",function(){return P.wg([0,new K.cD("Pixels -> Bytes",T.GH(),T.GG()),1,new K.cD("Pixels -> Packed bits",T.GF(),T.GE()),2,new K.cD("RLE 1 byte",V.rV(1),V.rU(1)),3,new K.cD("RLE 2 bytes",V.rV(2),V.rU(2)),4,new K.cD("RLE 3 bytes",V.rV(3),V.rU(3)),5,new K.cD("RLE packed 1 byte",V.rT(1),V.rS(1)),6,new K.cD("RLE packed 2 bytes",V.rT(2),V.rS(2)),7,new K.cD("RLE packed 3 bytes",V.rT(3),V.rS(3)),8,new K.cD("RLE dynamic",V.Hb(),V.Ha()),9,new K.cD("Exponential-Golomb pixels",F.GV(),F.GU()),10,new K.cD("Exponential-Golomb run RLE",F.GT(),F.GS()),11,new K.cD("Exponential-Golomb run/data RLE",F.GR(),F.GQ())],P.C,K.cD)})
lazy($,"b","$get$b",function(){return P.a3(null,null,null,G.a0)})
lazy($,"x1","$get$x1",function(){return P.d5("[\n\r]+",!0,!1)})
lazy($,"x2","$get$x2",function(){return P.d5("( *)(.*)",!0,!1)})
lazy($,"x0","$get$x0",function(){return P.d5("^s*//",!0,!1)})
lazy($,"x_","$get$x_",function(){return P.d5("//",!0,!1)})
lazy($,"cG","$get$cG",function(){return new F.fc(!1,!1,"WordListFileFormat")})
lazy($,"x4","$get$x4",function(){return new T.pu(null)})
lazy($,"v3","$get$v3",function(){return new (window.AudioContext||window.webkitAudioContext)()})
lazy($,"cR","$get$cR",function(){return P.bX(P.B,Y.dM)})
lazy($,"wj","$get$wj",function(){return P.d5("[\\/]",!0,!1)})
lazy($,"tS","$get$tS",function(){return P.bX(P.B,W.fl)})
lazy($,"u4","$get$u4",function(){return A.fQ(255,0,255,255)})
lazy($,"nw","$get$nw",function(){return new F.fc(!1,!1,"Path Utils")})
lazy($,"nv","$get$nv",function(){return P.bX(P.ez,P.C)})
lazy($,"cN","$get$cN",function(){return H.a([],[D.cE])})
lazy($,"wI","$get$wI",function(){return P.d5("([^\\\\|]|\\\\|)+",!0,!1)})
lazy($,"hN","$get$hN",function(){return P.d5("([^\\\\:]|\\\\:)+",!0,!1)})
lazy($,"fp","$get$fp",function(){return new F.fc(!1,!1,"TextEngine")})
lazy($,"wG","$get$wG",function(){return P.d5("#(.*?)#",!0,!1)})
lazy($,"wH","$get$wH",function(){return P.d5("\\?(.*?)\\?",!0,!1)})
lazy($,"fo","$get$fo",function(){return P.d5("\\\\(?!\\\\)",!0,!1)})
lazy($,"ve","$get$ve",function(){var t={color:16711935}
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
mangledGlobalNames:{C:"int",U:"double",dl:"num",B:"String",d9:"bool",d3:"Null",p:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,ret:P.d9,args:[[P.p,E.iz]]},{func:1,v:true},{func:1,ret:P.d8,args:[P.bg,P.C,P.C,O.cS]},{func:1,ret:P.bg,args:[P.C,P.bg,P.bg,O.cS]},{func:1,v:true,args:[P.ab]},{func:1,ret:P.B,args:[P.C]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:W.az,args:[P.C]},{func:1,ret:P.B,args:[P.B]},{func:1,ret:W.dp,args:[P.C]},{func:1,ret:W.cn,args:[P.C]},{func:1,args:[,]},{func:1,v:true,args:[P.ab],opt:[P.dO]},{func:1,ret:W.cc,args:[P.C]},{func:1,v:true,args:[,P.dO]},{func:1,ret:W.ce,args:[P.C]},{func:1,ret:W.co,args:[P.C]},{func:1,ret:W.cp,args:[P.C]},{func:1,ret:W.fm,args:[P.C]},{func:1,ret:W.cr,args:[P.C]},{func:1,ret:W.fq,args:[P.C]},{func:1,ret:W.fr,args:[P.C]},{func:1,ret:P.bS,args:[P.C]},{func:1,ret:P.B,args:[P.d2]},{func:1,ret:W.cl,args:[P.C]},{func:1,ret:W.fs,args:[P.C]},{func:1,ret:W.cg,args:[P.C]},{func:1,ret:W.ch,args:[P.C]},{func:1,ret:P.bl,args:[P.C]},{func:1,ret:P.d9,args:[P.ab]},{func:1,ret:P.C,args:[P.bF,P.bF]},{func:1,v:true,args:[P.B]},{func:1,ret:W.eT,args:[P.C]},{func:1,ret:W.bI,args:[P.C]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.f,AnimationEffectTiming:J.f,AnimationTimeline:J.f,AppBannerPromptResult:J.f,BarProp:J.f,Body:J.f,CacheStorage:J.f,CanvasGradient:J.f,CanvasPattern:J.f,CanvasRenderingContext2D:J.f,CHROMIUMValuebuffer:J.f,CircularGeofencingRegion:J.f,Client:J.f,CompositorProxy:J.f,ConsoleBase:J.f,Coordinates:J.f,Crypto:J.f,CryptoKey:J.f,CSS:J.f,DeprecatedStorageInfo:J.f,DeprecatedStorageQuota:J.f,DeviceAcceleration:J.f,DeviceRotationRate:J.f,DirectoryReader:J.f,DOMImplementation:J.f,Iterator:J.f,DOMMatrix:J.f,DOMMatrixReadOnly:J.f,DOMParser:J.f,DOMPoint:J.f,DOMPointReadOnly:J.f,EffectModel:J.f,Stream:J.f,GamepadButton:J.f,Geofencing:J.f,GeofencingRegion:J.f,Geolocation:J.f,Geoposition:J.f,Headers:J.f,HMDVRDevice:J.f,IdleDeadline:J.f,ImageBitmap:J.f,ImageBitmapRenderingContext:J.f,InjectedScriptHost:J.f,InputDeviceCapabilities:J.f,IntersectionObserver:J.f,IntersectionObserverEntry:J.f,KeyframeEffect:J.f,MediaDeviceInfo:J.f,MediaDevices:J.f,MediaError:J.f,MediaKeyStatusMap:J.f,MediaKeySystemAccess:J.f,MediaKeys:J.f,MediaMetadata:J.f,MediaSession:J.f,MemoryInfo:J.f,MessageChannel:J.f,Metadata:J.f,MIDIInputMap:J.f,MIDIOutputMap:J.f,MutationObserver:J.f,WebKitMutationObserver:J.f,MutationRecord:J.f,NavigatorStorageUtils:J.f,NodeFilter:J.f,NodeIterator:J.f,NonDocumentTypeChildNode:J.f,NonElementParentNode:J.f,OffscreenCanvas:J.f,PerformanceNavigation:J.f,PerformanceObserver:J.f,PerformanceObserverEntryList:J.f,PerformanceTiming:J.f,Permissions:J.f,PositionError:J.f,PositionSensorVRDevice:J.f,Presentation:J.f,PushManager:J.f,PushMessageData:J.f,PushSubscription:J.f,Range:J.f,ReadableByteStream:J.f,ReadableByteStreamReader:J.f,ReadableStreamReader:J.f,RTCCertificate:J.f,RTCIceCandidate:J.f,mozRTCIceCandidate:J.f,RTCSessionDescription:J.f,mozRTCSessionDescription:J.f,RTCStatsReport:J.f,RTCStatsResponse:J.f,Screen:J.f,ScrollState:J.f,Selection:J.f,SharedArrayBuffer:J.f,SourceInfo:J.f,StorageInfo:J.f,StorageManager:J.f,StorageQuota:J.f,StyleMedia:J.f,SyncManager:J.f,TextMetrics:J.f,TreeWalker:J.f,UnderlyingSourceBase:J.f,VRDevice:J.f,VREyeParameters:J.f,VRFieldOfView:J.f,VRPositionState:J.f,ValidityState:J.f,VideoPlaybackQuality:J.f,VideoTrack:J.f,WindowClient:J.f,WorkerConsole:J.f,XPathEvaluator:J.f,XPathExpression:J.f,XPathNSResolver:J.f,XPathResult:J.f,XMLSerializer:J.f,XSLTProcessor:J.f,Bluetooth:J.f,BluetoothAdvertisingData:J.f,BluetoothCharacteristicProperties:J.f,BluetoothRemoteGATTServer:J.f,BluetoothRemoteGATTService:J.f,BluetoothUUID:J.f,Cache:J.f,DOMFileSystemSync:J.f,DirectoryEntrySync:J.f,DirectoryReaderSync:J.f,EntrySync:J.f,FileEntrySync:J.f,FileReaderSync:J.f,FileWriterSync:J.f,HTMLAllCollection:J.f,NFC:J.f,PagePopupController:J.f,Request:J.f,Response:J.f,SubtleCrypto:J.f,USBAlternateInterface:J.f,USBConfiguration:J.f,USBDevice:J.f,USBEndpoint:J.f,USBInTransferResult:J.f,USBInterface:J.f,USBIsochronousInTransferPacket:J.f,USBIsochronousInTransferResult:J.f,USBIsochronousOutTransferPacket:J.f,USBIsochronousOutTransferResult:J.f,USBOutTransferResult:J.f,WebKitCSSMatrix:J.f,Worklet:J.f,WorkletGlobalScope:J.f,IDBCursor:J.f,IDBCursorWithValue:J.f,IDBFactory:J.f,IDBKeyRange:J.f,SVGAngle:J.f,SVGAnimatedAngle:J.f,SVGAnimatedBoolean:J.f,SVGAnimatedEnumeration:J.f,SVGAnimatedInteger:J.f,SVGAnimatedLength:J.f,SVGAnimatedLengthList:J.f,SVGAnimatedNumber:J.f,SVGAnimatedNumberList:J.f,SVGAnimatedPreserveAspectRatio:J.f,SVGAnimatedRect:J.f,SVGAnimatedString:J.f,SVGAnimatedTransformList:J.f,SVGMatrix:J.f,SVGPoint:J.f,SVGPreserveAspectRatio:J.f,SVGRect:J.f,SVGUnitTypes:J.f,AudioListener:J.f,AudioParam:J.f,PeriodicWave:J.f,ANGLEInstancedArrays:J.f,ANGLE_instanced_arrays:J.f,WebGLBuffer:J.f,CHROMIUMSubscribeUniform:J.f,WebGLCompressedTextureASTC:J.f,WebGLCompressedTextureATC:J.f,WEBGL_compressed_texture_atc:J.f,WebGLCompressedTextureETC1:J.f,WEBGL_compressed_texture_etc1:J.f,WebGLCompressedTexturePVRTC:J.f,WEBGL_compressed_texture_pvrtc:J.f,WebGLCompressedTextureS3TC:J.f,WEBGL_compressed_texture_s3tc:J.f,WebGLDebugRendererInfo:J.f,WEBGL_debug_renderer_info:J.f,WebGLDebugShaders:J.f,WEBGL_debug_shaders:J.f,WebGLDepthTexture:J.f,WEBGL_depth_texture:J.f,WebGLDrawBuffers:J.f,WEBGL_draw_buffers:J.f,EXTsRGB:J.f,EXT_sRGB:J.f,EXTBlendMinMax:J.f,EXT_blend_minmax:J.f,EXTColorBufferFloat:J.f,EXTDisjointTimerQuery:J.f,EXTFragDepth:J.f,EXT_frag_depth:J.f,EXTShaderTextureLOD:J.f,EXT_shader_texture_lod:J.f,EXTTextureFilterAnisotropic:J.f,EXT_texture_filter_anisotropic:J.f,WebGLFramebuffer:J.f,WebGLLoseContext:J.f,WebGLExtensionLoseContext:J.f,WEBGL_lose_context:J.f,OESElementIndexUint:J.f,OES_element_index_uint:J.f,OESStandardDerivatives:J.f,OES_standard_derivatives:J.f,OESTextureFloat:J.f,OES_texture_float:J.f,OESTextureFloatLinear:J.f,OES_texture_float_linear:J.f,OESTextureHalfFloat:J.f,OES_texture_half_float:J.f,OESTextureHalfFloatLinear:J.f,OES_texture_half_float_linear:J.f,OESVertexArrayObject:J.f,OES_vertex_array_object:J.f,WebGLProgram:J.f,WebGLQuery:J.f,WebGLRenderbuffer:J.f,WebGLRenderingContext:J.f,WebGLSampler:J.f,WebGLShader:J.f,WebGLShaderPrecisionFormat:J.f,WebGLSync:J.f,WebGLTexture:J.f,WebGLTimerQueryEXT:J.f,WebGLTransformFeedback:J.f,WebGLUniformLocation:J.f,WebGLVertexArrayObject:J.f,WebGLVertexArrayObjectOES:J.f,Database:J.f,SQLError:J.f,SQLResultSet:J.f,SQLTransaction:J.f,ArrayBuffer:H.fe,ArrayBufferView:H.em,DataView:H.n7,Float32Array:H.n8,Float64Array:H.n9,Int16Array:H.na,Int32Array:H.nb,Int8Array:H.nc,Uint16Array:H.nd,Uint32Array:H.ne,Uint8ClampedArray:H.ju,CanvasPixelArray:H.ju,Uint8Array:H.ff,HTMLBRElement:W.as,HTMLCanvasElement:W.as,HTMLContentElement:W.as,HTMLDListElement:W.as,HTMLDataListElement:W.as,HTMLDetailsElement:W.as,HTMLDialogElement:W.as,HTMLHRElement:W.as,HTMLHeadElement:W.as,HTMLHeadingElement:W.as,HTMLHtmlElement:W.as,HTMLLIElement:W.as,HTMLLabelElement:W.as,HTMLLegendElement:W.as,HTMLMenuElement:W.as,HTMLMenuItemElement:W.as,HTMLMeterElement:W.as,HTMLModElement:W.as,HTMLOListElement:W.as,HTMLOptGroupElement:W.as,HTMLOptionElement:W.as,HTMLParagraphElement:W.as,HTMLPictureElement:W.as,HTMLPreElement:W.as,HTMLProgressElement:W.as,HTMLQuoteElement:W.as,HTMLShadowElement:W.as,HTMLStyleElement:W.as,HTMLTableCaptionElement:W.as,HTMLTableCellElement:W.as,HTMLTableDataCellElement:W.as,HTMLTableHeaderCellElement:W.as,HTMLTableColElement:W.as,HTMLTableElement:W.as,HTMLTableRowElement:W.as,HTMLTableSectionElement:W.as,HTMLTitleElement:W.as,HTMLUListElement:W.as,HTMLUnknownElement:W.as,HTMLDirectoryElement:W.as,HTMLFontElement:W.as,HTMLFrameElement:W.as,HTMLMarqueeElement:W.as,HTMLElement:W.as,HTMLAnchorElement:W.eK,HTMLAreaElement:W.km,HTMLAudioElement:W.eN,AudioTrack:W.cI,AudioTrackList:W.ku,HTMLBaseElement:W.ky,Blob:W.eO,HTMLBodyElement:W.kB,HTMLButtonElement:W.eP,CDATASection:W.e9,CharacterData:W.e9,Comment:W.e9,ProcessingInstruction:W.e9,Text:W.e9,Clients:W.kI,CompositorWorker:W.kM,Credential:W.fS,FederatedCredential:W.fS,PasswordCredential:W.fS,CredentialsContainer:W.kQ,CSSFontFaceRule:W.kT,CSSImportRule:W.kU,CSSKeyframeRule:W.fT,MozCSSKeyframeRule:W.fT,WebKitCSSKeyframeRule:W.fT,CSSKeyframesRule:W.fU,MozCSSKeyframesRule:W.fU,WebKitCSSKeyframesRule:W.fU,CSSPageRule:W.kV,CSSCharsetRule:W.bI,CSSGroupingRule:W.bI,CSSMediaRule:W.bI,CSSNamespaceRule:W.bI,CSSSupportsRule:W.bI,CSSRule:W.bI,CSSStyleDeclaration:W.eS,MSStyleCSSProperties:W.eS,CSS2Properties:W.eS,CSSStyleRule:W.kW,CSSViewportRule:W.kX,DataTransfer:W.l1,DataTransferItem:W.eT,DataTransferItemList:W.ib,HTMLDivElement:W.fV,Document:W.ea,HTMLDocument:W.ea,XMLDocument:W.ea,DocumentFragment:W.id,ShadowRoot:W.id,DOMError:W.ie,FileError:W.ie,DOMException:W.l4,DOMRectReadOnly:W.ig,DOMStringList:W.ih,DOMStringMap:W.ii,DOMTokenList:W.ij,Element:W.dp,HTMLEmbedElement:W.la,DirectoryEntry:W.fX,Entry:W.fX,FileEntry:W.fX,ErrorEvent:W.lg,AnimationEvent:W.Q,AnimationPlayerEvent:W.Q,ApplicationCacheErrorEvent:W.Q,AutocompleteErrorEvent:W.Q,BeforeInstallPromptEvent:W.Q,BeforeUnloadEvent:W.Q,BlobEvent:W.Q,ClipboardEvent:W.Q,CloseEvent:W.Q,CompositionEvent:W.Q,CustomEvent:W.Q,DeviceLightEvent:W.Q,DeviceMotionEvent:W.Q,DeviceOrientationEvent:W.Q,ExtendableEvent:W.Q,ExtendableMessageEvent:W.Q,FetchEvent:W.Q,FocusEvent:W.Q,FontFaceSetLoadEvent:W.Q,GamepadEvent:W.Q,GeofencingEvent:W.Q,HashChangeEvent:W.Q,InstallEvent:W.Q,KeyboardEvent:W.Q,MediaEncryptedEvent:W.Q,MediaKeyMessageEvent:W.Q,MediaQueryListEvent:W.Q,MediaStreamEvent:W.Q,MediaStreamTrackEvent:W.Q,MessageEvent:W.Q,MIDIConnectionEvent:W.Q,MIDIMessageEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,NotificationEvent:W.Q,PageTransitionEvent:W.Q,PointerEvent:W.Q,PopStateEvent:W.Q,PresentationConnectionAvailableEvent:W.Q,PresentationConnectionCloseEvent:W.Q,ProgressEvent:W.Q,PromiseRejectionEvent:W.Q,PushEvent:W.Q,RelatedEvent:W.Q,RTCDataChannelEvent:W.Q,RTCDTMFToneChangeEvent:W.Q,RTCIceCandidateEvent:W.Q,RTCPeerConnectionIceEvent:W.Q,SecurityPolicyViolationEvent:W.Q,ServicePortConnectEvent:W.Q,ServiceWorkerMessageEvent:W.Q,SpeechRecognitionEvent:W.Q,StorageEvent:W.Q,SyncEvent:W.Q,TextEvent:W.Q,TouchEvent:W.Q,TrackEvent:W.Q,TransitionEvent:W.Q,WebKitTransitionEvent:W.Q,UIEvent:W.Q,WheelEvent:W.Q,ResourceProgressEvent:W.Q,USBConnectionEvent:W.Q,IDBVersionChangeEvent:W.Q,SVGZoomEvent:W.Q,AudioProcessingEvent:W.Q,OfflineAudioCompletionEvent:W.Q,WebGLContextEvent:W.Q,Event:W.Q,InputEvent:W.Q,Animation:W.aF,ApplicationCache:W.aF,DOMApplicationCache:W.aF,OfflineResourceList:W.aF,BatteryManager:W.aF,CanvasCaptureMediaStreamTrack:W.aF,CrossOriginServiceWorkerClient:W.aF,EventSource:W.aF,MediaKeySession:W.aF,MediaQueryList:W.aF,MediaRecorder:W.aF,MediaSource:W.aF,MediaStream:W.aF,MediaStreamTrack:W.aF,MessagePort:W.aF,MIDIAccess:W.aF,NetworkInformation:W.aF,Notification:W.aF,Performance:W.aF,PermissionStatus:W.aF,PresentationAvailability:W.aF,PresentationReceiver:W.aF,PresentationRequest:W.aF,RTCDTMFSender:W.aF,RTCPeerConnection:W.aF,webkitRTCPeerConnection:W.aF,mozRTCPeerConnection:W.aF,ScreenOrientation:W.aF,ServicePortCollection:W.aF,ServiceWorkerContainer:W.aF,ServiceWorkerRegistration:W.aF,SpeechRecognition:W.aF,SpeechSynthesis:W.aF,SpeechSynthesisUtterance:W.aF,WorkerPerformance:W.aF,BluetoothDevice:W.aF,BluetoothRemoteGATTCharacteristic:W.aF,USB:W.aF,EventTarget:W.aF,HTMLFieldSetElement:W.lJ,File:W.cc,FileList:W.f1,FileReader:W.lK,DOMFileSystem:W.lL,FileWriter:W.lM,FontFace:W.lP,FontFaceSet:W.lQ,FormData:W.lS,HTMLFormElement:W.iy,Gamepad:W.cl,History:W.m0,HTMLOptionsCollection:W.f3,HTMLCollection:W.f3,HTMLFormControlsCollection:W.iA,XMLHttpRequest:W.e_,XMLHttpRequestUpload:W.hd,XMLHttpRequestEventTarget:W.hd,HTMLIFrameElement:W.m7,ImageData:W.he,HTMLImageElement:W.f5,HTMLInputElement:W.mc,HTMLKeygenElement:W.mA,CalcLength:W.hm,LengthValue:W.hm,SimpleLength:W.hm,HTMLLinkElement:W.hn,Location:W.mS,HTMLMapElement:W.mX,HTMLVideoElement:W.ht,HTMLMediaElement:W.ht,MediaList:W.jr,HTMLMetaElement:W.n1,MIDIOutput:W.n2,MIDIInput:W.hu,MIDIPort:W.hu,MimeType:W.cn,MimeTypeArray:W.js,Navigator:W.nf,NavigatorUserMediaError:W.ng,Node:W.az,NodeList:W.jv,RadioNodeList:W.jv,HTMLObjectElement:W.nj,HTMLOutputElement:W.no,HTMLParamElement:W.ns,Path2D:W.nu,PerformanceCompositeTiming:W.e1,PerformanceEntry:W.e1,PerformanceMark:W.e1,PerformanceMeasure:W.e1,PerformanceRenderTiming:W.e1,PerformanceResourceTiming:W.e1,Perspective:W.nz,Plugin:W.ce,PluginArray:W.jC,PresentationConnection:W.nE,RTCDataChannel:W.jE,DataChannel:W.jE,HTMLScriptElement:W.fl,HTMLSelectElement:W.jF,ServicePort:W.o0,SharedWorker:W.o3,SharedWorkerGlobalScope:W.o4,HTMLSlotElement:W.o5,SourceBuffer:W.co,SourceBufferList:W.jH,HTMLSourceElement:W.o8,HTMLSpanElement:W.hH,SpeechGrammar:W.cp,SpeechGrammarList:W.jI,SpeechRecognitionAlternative:W.fm,SpeechRecognitionError:W.oa,SpeechRecognitionResult:W.cg,SpeechSynthesisEvent:W.ob,SpeechSynthesisVoice:W.oc,Storage:W.og,StylePropertyMap:W.oD,CSSStyleSheet:W.ch,StyleSheet:W.ch,KeywordValue:W.e3,NumberValue:W.e3,PositionValue:W.e3,TransformValue:W.e3,StyleValue:W.e3,HTMLTemplateElement:W.oK,HTMLTextAreaElement:W.hM,TextTrack:W.cO,TextTrackCue:W.cF,VTTCue:W.cF,TextTrackCueList:W.oR,TextTrackList:W.oS,TimeRanges:W.oW,Touch:W.cr,TouchList:W.jM,TrackDefault:W.fq,TrackDefaultList:W.jN,HTMLTrackElement:W.p_,Matrix:W.e4,Rotation:W.e4,Skew:W.e4,Translation:W.e4,TransformComponent:W.e4,URL:W.pb,URLSearchParams:W.pc,VideoTrackList:W.pg,VTTRegion:W.fr,VTTRegionList:W.jO,WebSocket:W.pl,Window:W.jR,DOMWindow:W.jR,Worker:W.ps,CompositorWorkerGlobalScope:W.eB,DedicatedWorkerGlobalScope:W.eB,ServiceWorkerGlobalScope:W.eB,WorkerGlobalScope:W.eB,Attr:W.fs,ClientRect:W.pJ,ClientRectList:W.hU,DOMRectList:W.hU,CSSRuleList:W.jX,DocumentType:W.pQ,DOMRect:W.pR,GamepadList:W.k0,HTMLFrameSetElement:W.qb,NamedNodeMap:W.hZ,MozNamedAttrMap:W.hZ,ServiceWorker:W.qA,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k6,WorkerLocation:W.qQ,WorkerNavigator:W.qR,IDBDatabase:P.l2,IDBIndex:P.ma,IDBObjectStore:P.nk,IDBOpenDBRequest:P.hF,IDBVersionChangeRequest:P.hF,IDBRequest:P.hF,IDBTransaction:P.p0,SVGAElement:P.kj,SVGAnimateElement:P.e8,SVGAnimateMotionElement:P.e8,SVGAnimateTransformElement:P.e8,SVGAnimationElement:P.e8,SVGSetElement:P.e8,SVGFEBlendElement:P.lj,SVGFEColorMatrixElement:P.lk,SVGFEComponentTransferElement:P.ll,SVGFECompositeElement:P.lm,SVGFEConvolveMatrixElement:P.ln,SVGFEDiffuseLightingElement:P.lo,SVGFEDisplacementMapElement:P.lp,SVGFEFloodElement:P.lq,SVGFEGaussianBlurElement:P.lr,SVGFEImageElement:P.ls,SVGFEMergeElement:P.lt,SVGFEMorphologyElement:P.lu,SVGFEOffsetElement:P.lv,SVGFESpecularLightingElement:P.lw,SVGFETileElement:P.lx,SVGFETurbulenceElement:P.ly,SVGFilterElement:P.lN,SVGCircleElement:P.cm,SVGClipPathElement:P.cm,SVGDefsElement:P.cm,SVGEllipseElement:P.cm,SVGForeignObjectElement:P.cm,SVGGElement:P.cm,SVGGeometryElement:P.cm,SVGLineElement:P.cm,SVGPathElement:P.cm,SVGPolygonElement:P.cm,SVGPolylineElement:P.cm,SVGRectElement:P.cm,SVGSwitchElement:P.cm,SVGGraphicsElement:P.cm,SVGImageElement:P.m8,SVGLength:P.d0,SVGLengthList:P.mD,SVGMarkerElement:P.n_,SVGMaskElement:P.n0,SVGNumber:P.d4,SVGNumberList:P.nh,SVGPatternElement:P.nx,SVGPointList:P.nC,SVGScriptElement:P.nY,SVGStringList:P.oB,SVGDescElement:P.ca,SVGDiscardElement:P.ca,SVGFEDistantLightElement:P.ca,SVGFEFuncAElement:P.ca,SVGFEFuncBElement:P.ca,SVGFEFuncGElement:P.ca,SVGFEFuncRElement:P.ca,SVGFEMergeNodeElement:P.ca,SVGFEPointLightElement:P.ca,SVGFESpotLightElement:P.ca,SVGMetadataElement:P.ca,SVGStopElement:P.ca,SVGStyleElement:P.ca,SVGTitleElement:P.ca,SVGComponentTransferFunctionElement:P.ca,SVGElement:P.ca,SVGSVGElement:P.oF,SVGSymbolElement:P.oH,SVGTSpanElement:P.ew,SVGTextElement:P.ew,SVGTextPositioningElement:P.ew,SVGTextContentElement:P.ew,SVGTextPathElement:P.oQ,SVGTransform:P.d7,SVGTransformList:P.p1,SVGUseElement:P.pd,SVGViewElement:P.ph,SVGViewSpec:P.pi,SVGLinearGradientElement:P.hX,SVGRadialGradientElement:P.hX,SVGGradientElement:P.hX,SVGCursorElement:P.qx,SVGFEDropShadowElement:P.qy,SVGMPathElement:P.qz,AudioBuffer:P.fJ,AudioBufferSourceNode:P.eM,AudioContext:P.fK,webkitAudioContext:P.fK,OfflineAudioContext:P.fK,AnalyserNode:P.bC,RealtimeAnalyserNode:P.bC,AudioDestinationNode:P.bC,BiquadFilterNode:P.bC,ChannelMergerNode:P.bC,AudioChannelMerger:P.bC,ChannelSplitterNode:P.bC,AudioChannelSplitter:P.bC,DelayNode:P.bC,DynamicsCompressorNode:P.bC,GainNode:P.bC,AudioGainNode:P.bC,IIRFilterNode:P.bC,MediaStreamAudioDestinationNode:P.bC,PannerNode:P.bC,AudioPannerNode:P.bC,webkitAudioPannerNode:P.bC,ScriptProcessorNode:P.bC,JavaScriptAudioNode:P.bC,StereoPannerNode:P.bC,WaveShaperNode:P.bC,AudioNode:P.bC,MediaElementAudioSourceNode:P.dX,MediaStreamAudioSourceNode:P.dX,OscillatorNode:P.dX,Oscillator:P.dX,AudioSourceNode:P.dX,ConvolverNode:P.kP,WebGLActiveInfo:P.kl,WebGL2RenderingContext:P.nP,WebGL2RenderingContextBase:P.qP,SQLResultSetRowList:P.jJ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Crypto:true,CryptoKey:true,CSS:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,EffectModel:true,Stream:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,SharedArrayBuffer:true,SourceInfo:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,SyncManager:true,TextMetrics:true,TreeWalker:true,UnderlyingSourceBase:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBKeyRange:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLParagraphElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLShadowElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTitleElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,AudioTrack:true,AudioTrackList:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,Clients:true,CompositorWorker:true,Credential:true,FederatedCredential:true,PasswordCredential:true,CredentialsContainer:true,CSSFontFaceRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSPageRule:true,CSSCharsetRule:true,CSSGroupingRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSSupportsRule:true,CSSRule:false,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleRule:true,CSSViewportRule:true,DataTransfer:true,DataTransferItem:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DocumentFragment:true,ShadowRoot:true,DOMError:true,FileError:true,DOMException:true,DOMRectReadOnly:false,DOMStringList:true,DOMStringMap:true,DOMTokenList:true,Element:false,HTMLEmbedElement:true,DirectoryEntry:true,Entry:true,FileEntry:true,ErrorEvent:true,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,NotificationEvent:true,PageTransitionEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,WheelEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,SVGZoomEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,EventTarget:false,HTMLFieldSetElement:true,File:true,FileList:true,FileReader:true,DOMFileSystem:true,FileWriter:true,FontFace:true,FontFaceSet:true,FormData:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLOptionsCollection:true,HTMLCollection:false,HTMLFormControlsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLIFrameElement:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,HTMLKeygenElement:true,CalcLength:true,LengthValue:true,SimpleLength:true,HTMLLinkElement:true,Location:true,HTMLMapElement:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,HTMLMetaElement:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,Navigator:true,NavigatorUserMediaError:true,Node:false,NodeList:true,RadioNodeList:true,HTMLObjectElement:true,HTMLOutputElement:true,HTMLParamElement:true,Path2D:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,Perspective:true,Plugin:true,PluginArray:true,PresentationConnection:true,RTCDataChannel:true,DataChannel:true,HTMLScriptElement:true,HTMLSelectElement:true,ServicePort:true,SharedWorker:true,SharedWorkerGlobalScope:true,HTMLSlotElement:true,SourceBuffer:true,SourceBufferList:true,HTMLSourceElement:true,HTMLSpanElement:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionResult:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,Storage:true,StylePropertyMap:true,CSSStyleSheet:true,StyleSheet:true,KeywordValue:true,NumberValue:true,PositionValue:true,TransformValue:true,StyleValue:false,HTMLTemplateElement:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefault:true,TrackDefaultList:true,HTMLTrackElement:true,Matrix:true,Rotation:true,Skew:true,Translation:true,TransformComponent:false,URL:true,URLSearchParams:true,VideoTrackList:true,VTTRegion:true,VTTRegionList:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,WorkerGlobalScope:false,Attr:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,IDBDatabase:true,IDBIndex:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFESpecularLightingElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGEllipseElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRectElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGFEPointLightElement:true,SVGFESpotLightElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,OfflineAudioContext:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioDestinationNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaStreamAudioDestinationNode:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,AudioNode:false,MediaElementAudioSourceNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,AudioSourceNode:false,ConvolverNode:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.jt.$nativeSuperclassTag="ArrayBufferView"
H.hx.$nativeSuperclassTag="ArrayBufferView"
H.hz.$nativeSuperclassTag="ArrayBufferView"
H.hv.$nativeSuperclassTag="ArrayBufferView"
H.hy.$nativeSuperclassTag="ArrayBufferView"
H.hA.$nativeSuperclassTag="ArrayBufferView"
H.hw.$nativeSuperclassTag="ArrayBufferView"
W.fY.$nativeSuperclassTag="EventTarget"
W.h0.$nativeSuperclassTag="EventTarget"
W.fZ.$nativeSuperclassTag="EventTarget"
W.h1.$nativeSuperclassTag="EventTarget"
W.h_.$nativeSuperclassTag="EventTarget"
W.h2.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)};(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.xK(V.v5(),b)},[])
else (function(b){H.xK(V.v5(),b)})([])})})()
//# sourceMappingURL=BioController.dart.js.map
